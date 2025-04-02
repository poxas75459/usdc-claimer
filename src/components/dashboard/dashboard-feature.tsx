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
    "4hNCfqq6u2sGJseViHrsxDfWLL1PSRn88Hvv96eptcgcBSygqvf5YgDKxoK79ThKLhZEJhkUYQuYuxzHt5bXkJcp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cCdde6KPZhLyZeNmSkWYfnQwkX1wYSwTqMY1joUsd4XcSwP2UCZSTBL2ptxsopwhW1x53qUKjc77ikmmVRcSXwF",
  "key1": "KZng1MPCxczhXqwkgPgyvbSde6oRJWduu1UU7GF4KSndkUmzt56DPCwqpUAuh71toCvCrU4tShzCywchUfeqaC4",
  "key2": "5g1rZGXC513MBi4qmwLbcoNteJ9P6ygHQQc9Z75DM1YUJVqidgSZ3RV2u8JSpnCas8kzEZzS3YNStRxWfRCU29GC",
  "key3": "5RiRWxVRc5yAtcJwGtKsqBU3wjDwS5ureCk4upt5qnE44u54bNnAoCgU42uvrjvDhiAUtjB2ArZU2ssXeixzN4LG",
  "key4": "5pazXzoc8n1BxG9xYd4b1QqV5AuE4PXKnxjZVpQ8M141kQN1AC8c5bB2esgRhMqVn8Qe2pHiX4V4XTpkkgwmzmpa",
  "key5": "2WSoiViTCjN7vZ42GcnZeZ6iTvmzJuvts1Nj5WN2EtPYTBQocf9yixMDVs2JuQLBA9LuremGXE2PuxzCABXUWe3x",
  "key6": "2wmZty8WBYDCTxybHHD6z8t3kj8RNKeHLoqeob7rZg5EJMXyzv3LTeeEKCg7KyPhFWajQfJeCfDvSn73MxqfzeZ8",
  "key7": "vufAtk65bExLGpEFyQdBBvAcC8TqRxXTR8Q1HsKbGsv8HBXektASDyjkEJciwoKWxcxLqb8fSXDqYQ6ZicshAf2",
  "key8": "3TW7eUpTZD28xjhWUMmpUyW8Mpw6mQqaUbJRqFxmzSam5VntdkBMgPUBWArUoJrbi5Yhsfv7o86TUp6YYJsbnVQL",
  "key9": "4p5guNuMYMc2mgRiUVrNEZac35xww1t1DrCTVdDS4dxf5k6Ft1azPZqfkV9N3KvyQNoCwdmkbSYea1E73REJrb5u",
  "key10": "5zSAkNzuMdoCZFFNJkwgCgCQNDKHn72WfRtjKuFr5PQCd5VJPRizEvYsH2oN4tqQKtZjMA6MNxwuksLHigkcG4mD",
  "key11": "pFHDyjzjyLx4HBpABves6qx5c4E5wzM54DAYRXCspBYUubEtpUamojqGpP6VKwokm12qJ2iMHQac1hDVXh7LUeV",
  "key12": "2rPDL5t4tuinhVaKutzcW1Ww2yCnmoCnzUWKmRSD3YNDFAtoXU4EBL3BNVkU19ygn8yraAv8td1GHGgZqJk4yaMD",
  "key13": "63LWuu1RPoZsvFQBtsM8gZoyyjvPYewKyJ3NY2RWka8qN776LnyeHc7iHMrsrbxxuM6P1AvDMGAc2caaEPsk4zcL",
  "key14": "d6UA7LhAnEjNLCeA6XAjgMRZ93P9CXd5e4MzBL4smA7VWUsdnL9ZBAyqdfngzmMGcR4wSFiNd8kaT6kDcASDdMG",
  "key15": "5K2voLnLGeLcsjNnviEPfm3fVwGLWPTacJDmaPyxPdWw8fiC6yuAsdMBJEA2tkvLrb5KyT4JZTPhXdpgm1rkk7ic",
  "key16": "2yBLYQ7qKZLjitXuqc6jPshCUuDPQYBHNUfoWeBo8PMvtXZdqNraqa31QbxDwjcpQARvYW3xC2JULZRsbYKcLFzc",
  "key17": "4gvqdsBreoG4Wq4oHqz6LxCWnsVP2NBQuzkzwB9ybe3fHiuksLxFoLatKmGd2U4ZHTx9pTeWCTnAmjVvXxkAnKWY",
  "key18": "TiPfMA9Mf4XNJ7NZRbivCgGSjswtscueNvtneRhQLHL33ZMo36XZwvKK4GEtBkWBr25eqkENzT4oUjwH147Fi4r",
  "key19": "3efT616gLtw3Z8ghv9fS6VRJ1qof5BkXEkFRku69nLmn1yj4JX8GEDHmVXeddf1H2fSAUryWRCnFn2oSpzWukz9Y",
  "key20": "piSfBbTTpGbY2CdrgXd9GxYgceC4cznLyAA7VqSWuJDiGFajcYdninaKp42e5uYSMUQsojeMtx7MtNf9wcG1Rp3",
  "key21": "49V8renxRAJfFNh9f8JTVfeYwG51FWmWdrNZhNLxUnZDBKvCWnXxpA37rDnL1cGQEFSEDw2qgE8VYorz73cvgUAw",
  "key22": "3Kp3MY9YqL7SqiDNGz69h2rB2XX4vVDc3wNgdyHVBe82A7Saxtfvxm4xUzqSFLWLWhWvCcQVD98XQvZXjVW9Zh65",
  "key23": "621GQfB7ekcScieUu1uc61bmnUVVRyu4sbXvgatWjy7xbx9VJ6sYPVgXi4HobVdBdwmLMEvFetaBTd6H97WDo4Nt",
  "key24": "5RgXnfgy2WZSm5vdTq523KYauJEzyMJYdFVM3UjJJarpu2kdTLNkdFbSRYX9gxQAArg55TCfgV7zxDLTFBLeDi1k",
  "key25": "3hG8gUPNVC86KqLgHmywGTEgyanMRrbNv7Gr4YxYoYiE5z3TAnoDyXV45oEBR5iJcPTrmYBijLpomRJZJfcbFjoG",
  "key26": "2aLaMAb4epnWwpoS21urMm4p4h6SQvVef6BdusRdXQDCsP6zJuxi8h7BXtuYPYeJJU64ad46XT5ycRsAUfcoUTQb",
  "key27": "52pAqPTciruHrQm9fwcXKZ6iPKZ8UAaQtujaSApuqdipuS6oAf6i98XQPUSKHU2iLHh4VwNbBTykGMMeJ1HsaXy9",
  "key28": "2h3dFLo1gGjnk9kyNZF6tBVwmxmXHv3KaGBGWTAk4WDNjXSYDnoQmAHh2BuMmGMYR22EQgVK1bX7wF1XWkagpcxE",
  "key29": "23bWvwXZsasBntTAomaLuey1P9eKFXeRyFLXtAtiC6kJFmUaNHaxtdhCwNMEfrJAGinwNbEGMuw7262EUKhKbevx",
  "key30": "5saMWWo3tZRf1oVsujS9bqjt52i9gL47ucUb4f8pv7KV8Px9VqQk8oVZ2HsEQHEsnu6kSZYTucvdMevGXMBPpXGk",
  "key31": "2tZDm8ivhgK2pxCe4Lr7vpeUzA6WYg2aJP2EQVxf8uMRN9B4GyEaVoCUQdKwzRdytt1dieFSKxMYdL9bWeBrudAi",
  "key32": "5kx4H4DJcEMtjj2dK8dq4oV6HamHoiRCn6PekbCyJREdpwHxh3pxsLXaBHPSfzd9nqPMxU22puMjQ3raCu5msC7h",
  "key33": "5RRxiiFXvZNjDeRd3XMgNM8YmPgZvpSppSn5qit2uPw8G9NEG2jRd3Qn5fZWqfC4c7RyDpTEAjDGWnXk5Kd4E5Xq",
  "key34": "PmAKQqBfxVqWZbWX2WmZwxeMEGTPcgqeXMseKEgFmmhDSRzeZPttf8ohsoXY6kFg3PhRScfestY6iHdpjL4qY2Y",
  "key35": "37UkTSBUhjbhpWFVWwPCwTE1A7tjuzur2GTNzRgCuDFXE9jmrhtPRJFictTBdFr1YBMko8KGVjY56eK9EKHWXje7",
  "key36": "45mAdKf8u5cZezKx5EX3uQQNEaLJ419FD2WhRjmN5fxaVkXHubQKk1eatJhBj8D5edf36kV46tHQqAVsYHPZVJw8",
  "key37": "2rkneYBHGmfyJW7LJVDgEwDFE4s9kGzagGHZABDdoCU6xjKmibcLAuF9mzhxvh5cXgkCdDiF1imS8P4xfMmJRWAt",
  "key38": "3eMT5vfCQpn2Ko9EtBwWPQDvDLFMKFTsTaX1DNZTGZjaWqHr4RgtPeuoowa8uqYN6rKTEX3AA8S9SqH1VwNuSFAP",
  "key39": "4eZyRQWE6LPSTuo34q764f8XWojPsJgZsjCDCvekN5pnDt73iii9uhsxNbDEkzfVK1E64oBMxyHQLsz3vXLZwXBG",
  "key40": "3xzbioHdvK8FkDRKCeUeFqABZbXTXi8otqeh1PJpEeVMP2uppeiLaWV2AW4PYUZKyw5RLymgW1uGLeDgAykdR936",
  "key41": "5tqdwZtx8pLwzpN71hHpCQiEEhMDfnRMAddoPTBod7tw9HB4U2JjNpWoTJVeMYyrWm9Vofk9qX4m7c4WCKXLdzPN",
  "key42": "1VbHPgKf31p5aQWT9LFkHV3K5EG95Xe7K4euAeEs6xMn5WDjBm35NXE2CoApVVttePzwVgrLKUiFw5XnnMw9K1Z",
  "key43": "5mSGzn4taEFbxeR1jhktPoUWqnERgsPF8vtmfGwTqnRYyQR1Vz7uZP6Af5DZ6hU7GZpKs9LTn367uuW1TVmZ3R3m",
  "key44": "2uUeEVzkKHida3bN6ipJCimvmBpPgyEnV5Nivu7oottYaeipe6JuXbbbk7S1VWuxhYLPnbNBWTafW52M2MZhZaWf"
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
