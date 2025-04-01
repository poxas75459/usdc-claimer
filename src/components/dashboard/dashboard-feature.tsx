/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "NfiPrW961PyMeKXwHMBaHFMFsJRKJVbtsuFco1SeoSBKgQ3MxHvbhsgAKw8FES2KFpnSh3ZmBj875zibeBRZmED"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yFg53ssZhppV78t79UCSFMFe7uFhBty1P5ZatbYFzF595TN4QMEDyeb9FuJHwdDato7V9sCfnuPEGd1GYYVF8fk",
  "key1": "9SFFf2HBwHZgbcbD6YWJ3iuB9UtV1M5d2g5PEUAragk3iAyUxYQaaqyGchNuaB6wzuWRn5G1NPkT51gUP8xzGuD",
  "key2": "tr7k1NhNfjkL2A3bnHzTYRtTKLoeqMEDuXPdEJ73DKWA1JtfTqxnooHvm4vqj1MeundAnDkRW7yqns6ejsbJrD7",
  "key3": "5LhFfDrgy27UG11rK1MLgPKzeedgGPWoXAmAWZswQakhDjf3dQAVMR7WK8z7BsueHGqWcL1wuBkooHM5pVV5d8pE",
  "key4": "4QtVPLBL3kmPz2NnUMJGZ8VmC6ceAvtGuzzrKYnmQSBgD76yoE4TckmbGED5VwX9zqNZoZ92Mvtfu8PvwtD3HkaL",
  "key5": "3c8L49tGSrQHrZxti6sTc8LaAWyRpvxWAaSScFgKRboGXZPzr9P1K9jPKLsXYrj2RZmUDEDSTphd5M8NTnBsv6GQ",
  "key6": "2EJiZigcaEBkr8AsicibEyVotnikAo3v3gcwLrr34jdc2Kd7WhUxMkDs6gHX7Z9L1j6PxikaxZG4woHEsxLcDVhv",
  "key7": "5QqQaTiQQCGnbwu3PocQ6rsQdu8iWW9Bb35kp6ifXp7Nnmp2H4UZk1V2BiSZvmATykUwgfKXqZrpUVyB1V9faxMH",
  "key8": "29cygozcHNe6stL5p4nDBZmoTYxV5Zz1iisEiZwyKePNrJ1RY36sUtgt1DzdqZZYME6iv5394zujDzjWnb7yHr25",
  "key9": "52wYNhWM25Qwe4aWD37xb2ksaGDPT8EN5GQa8uwddKVJra5DgV3gh4a21EibzFwjDnZ7EkgY1nrUkd35TvkVwzPA",
  "key10": "3w6SMzSf9HboEiFg53bDEHdzBh7TiGSGC7oTqtapnWuichYvQSKE8QLujfvUfDorJyi3gJWoMNKT5Lm4GzB3J96M",
  "key11": "4wQJ7UMKnX7jGL1kvWpUmm8SiSgFxrz2CeP2UroRgAyjqryZywbWd3fc9WP4ov9rSmKq8aTyL7mSAr6zQbHz3jaR",
  "key12": "3aoPnVFRM9Vr2bV5cGH8aqLZypb8rEbmtJ8GNRon6gLr3UQm8uAmukTttpJWUq6CpnirDuSk9J6qn6tYUPuggCRw",
  "key13": "29Dvytaeo6WKSa7RjDrG8A7BYdHFASTzC7Gg6cqB3zj5WsQ2vWAjAuQ5fsaNHRKz24KTgcwtepcfgrhmmGvvhMdZ",
  "key14": "rpYH3tZ5F3R7V2xe6uuxXKPxeK5pQBxmMZcS1Uo7oCSenMWeEs65BtPW3wWcjpcpxifQNUpjpEmwCoPasMYekNw",
  "key15": "3Dgs2mzhKSy5cXdVMXcurS7CaE99KWMgi26E6kujAVnXNBMJDanNZyqv4ym4KJmAE3481Xx4C9XoXySf3LVJoXZ9",
  "key16": "2fLYSQi1EoRcMZ3doNZcuVv2uKtk8wJRoMc9vg3fQMikqp4rziREkdHZCSAQSt2rKoSbBQ4diod5XdpHv1zQ61ZW",
  "key17": "5TKEUAx53T3NVtBNYBMXKKDfTXDyzqFhL9yhybDCdGUUyAimgzwsGi1VF76YjRsWfWMrFXcoa5CViLyGFqoxcGy2",
  "key18": "5TGM7T4vL3J1zwjWVfxYYb36GhbBeLzxJUXc3RPULmkzSRJgyy1McmJxhbzPxk3CFQTeciDc2AmreV3dZTqVxXHD",
  "key19": "2rPR2oYhn9qkrAssKHbDJTjcExpC8nyxAh3SAoTt1HaKuyM3sv8J7Uy8Y275WMtZb9CBBbvGcWwzfVP18KrsQtsX",
  "key20": "ahVzNMhj3bobun9DgjbBiJVuYxKNHXgHKNs2WAPTaCe3PAxpvLF7cyy5DyqE8SXGwfomTYzHvRdVPjatVony2Vd",
  "key21": "5rxmzyMq5b6biF11QmRomMUVeDyv5948BhE6qhgnyJKDYktJSN8PMo3xHPVez5BCNpKMN29t5JfhK2A5DNsW66t",
  "key22": "tc41g3pPRzdJaaJec3AHLM4tFES4UP1hZupH2zuPZ5GRVD515cWjWoDHdsjq1w2MaU7j39JqBnudCx4U5uGcB7U",
  "key23": "4dfhT145jHm3AHh3uv73DspX5PisMmCEGo9dRKEYBVn2JPGJwo7Sghj9HmSCFMM8vLurG6n5USwkdNvuDRYaUbkj",
  "key24": "3y4sXxAcQkHxcZzKmxdK93SMDPTxEd8xiyNgrGUTU7PgwBSJVRBt4M5jZQjaxznNDVevze9R7N81qHR9RRoizPg5",
  "key25": "xvDxwkdaXb386iHZnmtkR86JgjPkH7LPrjNDuqGyz9NAabXLYcUeMVWrcMbkya5oCPg5a6Wq86iTjw79tmKZavX",
  "key26": "5gY8yZJpgGRkm98kciwGgf7uk3pQfU7nbJzjEQ67FsEjgF6QaMr1PSF3LAHCZDFetJtamSVi3DSP7vS5d1hCxAqb",
  "key27": "sDkksw72eHXzzx2HHzZHN5hPjcizA4c5nq9dKgTSq7vw8P7n5LvPaom3Trsyv6AhJv6zvCos7uUBABiqqWXqxJn",
  "key28": "4kLDXdCNGLgt5pmYvQ5dh9W7UGP27Vv3M17ZrUbc9xbrqDKh5gRNNzwbyRfNxgZjiNtdC97ZWMXd6tz8Yvqm9CnT",
  "key29": "2E7pobb5Np9ZEBYM43XAniXzk8Sa3Fqic4GDQyrV8R4Tz5k4QEtG6DCHdnHLZcF8jreYkF18W8MBKKJcLm7KPtoC",
  "key30": "2mdnSQh8Bz8X256i3n9YcdqYKjtLCtxq15agzTFKzGaDh61ddm8Gj5RRmvSVyGB1PgCHSftyMDkn8uxn6rsqLfpd",
  "key31": "3rajpWo8hvhpFBkdd5SEreYq9dPGcvS8S7uAYZ1MKuCeRK7couoG18SzZq6gaHAxnyev8Vde8hQYPYCXBjMSLkDH",
  "key32": "63TbwwAUG9GrxLQxBombtcHuFk3634eU76qdgE8HmATWZcKx8vs3UQWULB1JJpAggwKLUzVEWGx5QRgQMJU75JX6",
  "key33": "4c1Ac6Jv8JkuaC1FTq9MQkedAtGtTRJQGKfTVbLCd4cpEMWxVRfELcYPRN3QF8VEF1eTYZu1YzzAfbLEDXB4g2Yt",
  "key34": "5MVmU4gzG66CtYSs3x5rGmGYwvJjUPcuqRUj6D9FGRYFkAouapQ8aACr5s1zhqX2yWWCt7Sd3WtVHjyQmAFcVMrU",
  "key35": "4R34GDQpyoXkZtkLZGKJc9c3WAXCcJiAgHxcPFo5QmUaFY5dGvDkHTZiPtSBsdMFfhJ6gE1LFgXUkhNLqu8jRMu2",
  "key36": "NWX1JMaa6P2qunjXFqwopY6gsZMB64mw3B2mvTjwsqVCTVSogwagUTMdeqFqGhtVzFHN8BLjX1U7avDrvecApqh",
  "key37": "54gxzLBYEmngmusygfBmBd4et2kejP2Rho7wKmu8Ys9KcCKEcp2mMuaNCQBjySRAK4AitAFEzGt1JUpUZPCCNeaq"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
