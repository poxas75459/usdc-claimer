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
    "3st2vBJqk6megZxaBezeQxGJ9pzKwqsSvFYwPiTMvqUTpcyPVbY1TniLxcoMCS2qvvXBS973dqry5hHGrEHMYWDB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dsGNUTk6Tp9WtZK5Vv83vh229ufhxRqX9u4mwQJ79QnMLp7U8YracNugkxPX2aopVrT5fp8fqUhePE2KuJ2SCMn",
  "key1": "3jTqLH3MnzFXGnwFemC4J6YeT3zvv52d4q5ujtvfouvtu2qd8FZPgeUntQtQKUQZAn7FpqRXNuSodDTnUNzNzfqw",
  "key2": "3Fort9g8w6XaJVSjGHpn9bjVBrMjRD4LW6pAqiasJudiPob61R1RYdADG2HtpVEaWSfnDE8dqdWR9g92KRRRcUs8",
  "key3": "3KyXcfm5R8DtY8KdzqjW3Rimxo915C7XQz233x8sZJEaD5wEaGW5on7bZmcxPHaBEZYMeYz36snm9kEAnFMEZUPo",
  "key4": "3d6fcJsHG7xKyHKwvS4sWGtsLCmRWohMMu8Ky3XAbzqLwHmwACJQYs5HH6ArRA1A1gnzwkvRudNKcxMww3AJKUyx",
  "key5": "XBS5H1PUnu3nekcwSC7vnsVC3zkco3EjCqWVJU8DSHGaBguVnFAV3YV9rNT1gcQKbFVvyRduS37dc8DM8JQ1vbM",
  "key6": "34WGTX1N2jEXQ7cr8WMNrYakRqj9AKzkEz7BX4GorpmiqCMXEkb14ux26QSdVFofe7jT71zPLjsmXA5raCddgujW",
  "key7": "5SWq5eWWUuV4r7oLMDhtVaUfwsffcKGPny3CDyL5aY41ZwGhh3FVYfnw6VFhT2DmVYk6nXztEmVD8qRtnPBBjQcx",
  "key8": "o5C5x1s6Wwd55GdmHjFc7esT4PVBfoas3DZrnupH8YrZQgP7RiG7DmRdjiWQxoMSpMFGtXH9QnRQ5pv6jJBA9oF",
  "key9": "4MdHreoeo8TifGUuq8tMxvX6gGSChrAokQbUwsHGdCRAe49UPdvWUPARaZTVL5TSAzR2zxZbiCoxBtgAv9oL4Kbh",
  "key10": "YVnnPM4oJ7cur2irAupDtgZSaHkzWjwJkkptazUPkUa3We9ADKhppnNkaGnEgPHKj2wufor9s23NdTFRZ8v61Tk",
  "key11": "2GtHdJ8ij3R3k4wbqjR4mUuHuzc75v5hrUSEmJvFmiFBD4CXDJLeF8CKUsiSUtgv6ZGbwnDspLQv5SQfRrN5emRQ",
  "key12": "UQ8nfRcPiPai1MKGvM3vqhDad9c4wkqZyzz2quV1ws54ogtuBD2g7qpTCpihMmi9wgWgPLAJC74UyUFCBiFKkyo",
  "key13": "5PpKBf8vC5EoE5b63GPvcooMkgYiDu5wKvRs8j3SJ3FpekpGgTxGMf3aaJY7T6eeAees18ibFCgaStUQQYBMmx71",
  "key14": "5tELHzeF49jxM8xrGY2qYiTEVLxAhHtR6RahqgokjpToHEFoj5HKkaZwAiHGFAzaVJrd7ha8no3NviPBog8KJcHX",
  "key15": "3stuahs23xHJcEnpzrzyGCDt4yMeoP4tVzzunk86eAPxvm79M1Ue2fKAkrkh4W6m78avALkmaZvNnwFzXwy4Nhtt",
  "key16": "Srioz3HnEkqkUzy9VVvkb8UwMV3Qb6BBwba4U4vXVqnkiBFJyYcgFXYzrhGrZG8Di72vVAA9meh5FCA5PDsjK1y",
  "key17": "5oTpE4GGahbe67hi2rMFqoCerf5Mmz2Xh6TzLypMiSrxhZfJVwqdwyJkEZkHksvgMKwjzc3qLaPN6La3u3Xa3DBj",
  "key18": "NeBX7CXYWuAFPGSJuR6G4Z7fgQYA8m9xbYyWKBEPFHxGeaGYkdpmk6BJ1JXmPZq9Atq5a5jGzWg7VexSpC4tbY6",
  "key19": "xfQ7dX4GGPCSuaR9DEGbkcLc4iiu29n7DX72P4Nsw663qBwTtwLHrmLE4gXQGZ5uNxyTiMxM6ghsV2bqZdWvfFu",
  "key20": "3M1VH9XzktMB9i4dffT9Q1X1ghjMspxkxMdkG5VGzWEG7JhtUus2wG2bydQvDVw2A4374dWzgNheXEz1otZgxAGt",
  "key21": "5taT6yUNSKJksARDPU3XYpi86NsKeB5jsiALuBHrBHeCqkjTapw13jBx4Zqp3PemHB1qqGGT7DMjX6tvZ4gmz4dM",
  "key22": "yxo8yFWvym8ta8FGWXbaocVpgFen1z3852YDq5tMwzHqWCwK9nXgbqyXrjFeVqAzhuivovMQsfxwCaJSXat5zG4",
  "key23": "4b2FDpVfKwEb2ATrz7qbdgTDBdVqbQz3PesY1NNKK5i5oUx1m74GANHuFwmKLCGpPt5bUx81vPWwUbLHx7gqqcMn",
  "key24": "4cju43E1NeQ6JgpZyAcvcpTFdnJtUjPCdNqdiZLUDBSUoMFADVzSAQu894u3Jumg8JsTVJcrgkF3THtdXWUSYoJ1",
  "key25": "2nBJZtVnSVMj4CBac5emXPSFYYY4Camj3jPVt55RgtnWTTTx6Z7yvU6cET1esuiHEHk6NLhEShpmiVed9wwPwrBF",
  "key26": "228vf69BVBLC5mChJGDxkcjQ7ybs76U2gAk6KXZ39zS2SpC1AGbcrJLE1gSyfSNfqVhQFy5XwFotZikaCE8apq1M",
  "key27": "4YGTJr8UMihbyeVPF1ADcYopNSyTBDpT3A587Qiimu3BshoHvokhnjzzY5bDxPJYwqhwtZsxdw72ZqkM5EsdLFrk",
  "key28": "4NuoewxJbzHSWun2s4oL7R3X6QNddJ2af8cMUjzoiDSC4jugzHVv8DCU1cuZ87Ziyi4tQaDKoWYKd1QscBCZjscU",
  "key29": "2ad3UMyySs6kUZd9gWQj8XYPX63M37BdH3q8NS3BLYsj7DVunVvVDDFJjq5cYoweteVpaH6NnX5zvJEsMVXSyFs2",
  "key30": "4Mu985URmB4CdTToeZbk3uGy4wGP7wk7e42TPuDh8mXz13ytw5mXEDG6crShUbCsrTDzhePNFvEUJdeg969src6E",
  "key31": "4jxViw3s3xKgyz3iuXtJr3hsnDKZ59kRA82wzSDMbixf7vA7MaFupFwZNGJZzHLNDUf8bXRC53ksiaPQ5sMaD8zj",
  "key32": "2YQC6h8Wk2F7ANjEeQbV8YDh9rvkYegkXS3ECrggwfXtymRggWtc7Xvccb1HvVQyFmuKdAUwdsyPoaSU8AW4vvCd",
  "key33": "3Mod27g3khDNizVYbU5yiSuZx91wDsvCunYu4FNKe2kXm94W1DGGVMdZqdn3REGoMvcVzW6TBNwghtceEvJUcEQP",
  "key34": "3G6DN4SibpjyArn28fAvtRzQ14NP2SdQL2YZXMFNuc14BM4Le28qbrjoRLQJ9wzUV3hz2wHmE3GvZVio7Wr8jMSN",
  "key35": "27KBXDwSqMRAA3BBcNC43g1YQm1AinCZvN65r2VfQFYJcdtv3xBVwmDaA2BG8Xv12kd3jJzdizydfn1r2f4WywR4",
  "key36": "5T1PDJEE6vGz58up7zLB96DqEXuyEjCrvDu7fLkLJT7eonfvANNY8LnwvGz6ghMdT35aVYqo6fg7UxWRAFJvR3uL",
  "key37": "4CKV9tbNTngY3tK1ZKD92vfaevKKU4PCGBfr9nrmZmhhiVVCfVabkY4Y4oiofhpe5ZqUsSuZ1L4bDgCVgnSeovdK",
  "key38": "EDfou5AwaFTMA6tpPuKYtgwWxXruzztQPwwTq7N8NwGSzXctyhWbU1G3CSEEE5UftDWfhgRjM2LyJJWxgP9dAoM",
  "key39": "2B8hR8TpP3o3xLXBPP9MtGgSSdJyGQq6wWccHNwh8CrbRHAiLLic1zUMsivZzJshfMtFv1XhjRxLXJytXdv27n7P"
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
