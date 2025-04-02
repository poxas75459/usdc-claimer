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
    "312CemhB6UsZyTYmweA5HUsk7kH3k2BWFSrtBzX9P5Qs8VicM9LFMsZJ7xav4GakYTeaqLuSNyDD7xFyVAKhbVxH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C7sHvf9C7qMUfqbbkBXRzCjoLHB3Jzi4G64oqz7PwC1sweqw9WMTuEGivAXQzRc787iCL5bn7MXpajDpWtsA45V",
  "key1": "4MAkPpWT3kiMGLzHoWSM6wFeeBdQHgZrofUurSY5pJSsdvqV78wqzGz5jt9EJCjwAQL7BMqJPM1t1AdtcBun2Fzg",
  "key2": "2Lz4TS2HSPLKdYBBBrhRLKBko6x6bzdDgEyuEjTgZhJgMLV2FqZbL8dPzN3ReQhG3z2AjHwpaRs81jTijzW6ugpb",
  "key3": "2VuGAfxxJYcAToMr5f15iFMSHnC3GXyw7Dbr5AWqFoqJdYFQnymS3bzSjg9RGyAHgAaCeXiw8ppksV1uCwg2ahTp",
  "key4": "9A18H9DxDcrKmQf1Zz4YMsk9ndh1ndRuHbwsRTdW2tatmTjtYdKZpFLiKVWNRBv6sFXtCgsgu6z2pGWNkbfvKmf",
  "key5": "1J9MtSyynMRfULE6GtoV1eTvRVq2LwLhqNDji3np6gkMtp7CaUKthxY3583uh6mL39F57LJbpJhEQZ2fsqf7yVs",
  "key6": "2aARrYv1jFonzw7x3GfjnQpKQVxLbfeF7wyXoDJ3QP5EQhtRsi76stdHh4W4BCvikND5Z5oqRGDu5e5NDkLPoJdh",
  "key7": "2dtHDNUdRtjmL8Y5W1Abj3WBtxQEbkfRZQYdFgeRrH64DQEZB6s1WGubP6dEESKDRSpihAywcci3ufaozFNib6mu",
  "key8": "4zqgCWbk1tntHvrHhaoV91AkPLSfb3j6KvWFTG16qU7wfBTvwxSfcwyXQbSLBbXkYjZqcwELqHJRDd8sQZwwH9pm",
  "key9": "4tD7siLtnKdfjKq5Nzg8xZRfPPrM9xyhnNjsG5andsgVxvrvDks3ErKXeffY3hXbyCrzhqptVbcUS84kfstrSH6t",
  "key10": "3gg1TuaRFKG5vbZ8BMp8bSy5FNdQw2hg7t5swh7D9Lquo3aL9WZQUaN11DwYrMX3W3YoJ8tQYe1hYBS5BWvx9sNw",
  "key11": "4rD3HjJgoayFpbzUSSoLHwrxZTTA4D7RiZbHZhrQ3mAr37fWanpa22ATehHg8bGF6yUfG4NQheBnnu9bYZQ97pvD",
  "key12": "4HvvfRq4Pia2GBBzTE4kfcmGMoqtXjDcgsZ17XgRaEDT9YpcHRWD5wRCN1VeAAYCv6cSriBA2XTGgwg25UvV7Hde",
  "key13": "9wFQNCGkNjnAuJCtwNZ1VhP741e6XGobHaRkt4gYhEPLWQP8jg9vcrsSHF4SEPzYvjB9GS5tg5ukZ7fhnRK6TDM",
  "key14": "JsExthxnGtLvhpbgLYGSBbQKa69rj79zsEok2vyTm6XmrooUxFryRhq7QfgpTXbE8xdXWUoLDwWWxGcTfuxoyhN",
  "key15": "5xA4n6XfXEzoof6vrmr2JWN3MLxXJCYitdiSc2A53ZWeQXm44EfDrXiibJaAY6ftHMTJvxCu1Gcz8iHgn1jPZETp",
  "key16": "37FSQ3YL124f2MEuhRV2TGLsTtivsa62WKBhdSPkKRHx4f5ESPD5D73pgYj9VeMdyA6zysNMYpR1sr1zcKSTSfkY",
  "key17": "4LwWYE3PE5E5CACoNpZggyanB8532fQZ638pcLtNptn8Yg1uKgg1uwdfRnaZJJpKQvwJUG8hiohMgQop33cspGbm",
  "key18": "YsRxedFfyGBLcHzMtxqijMkNn9pE2SZFHkS1PgJENvCr93m7VWasXYEw8ZpJAYSGgRU7hEJgTa46qZucT6bSUDp",
  "key19": "32jV6fXqjEhM9ngt6Ryhn8feBjeJRvHfTLPrcW4mDPgUeVkcCzgjU1utbs5XSbQMdyWv68YqDFrX7VdSe5QsjwbM",
  "key20": "3n4R9WapXkykzDcjJurzonoeAzUNnW8AhMgpQajxtKJE76hUK75dXDug1EGfuhDegXdfFqHfd71LB6gQpk9i5nsA",
  "key21": "ryUW3DMmP3qYDVDz72gvTxRWFSFa1g8mbxeMEHANzXnKatH56btPtqDjAiAuyRE2zJDY4f2b2WSc1tp1KStMJhX",
  "key22": "5ao5EgshNHdjMeoWNKcgLfWQrjEBBhQjR5Nm3MAMnGJespors7P72t7eYwWdPM1SUZLXYv6tYyFBQqAJDt62BLsU",
  "key23": "5HVNMWim1SR2MS3PdSZXnt3iNaCEGPPXDBGaWLGEH4KYYPtTsFyGFp5VSUErsP8HsabtcCce6H6Upi4k8MQzLmrP",
  "key24": "3K5A8w7rN4uN6GahFQC2kfWxk3xmQEFkpYku8FwTMCfFUoj885rD389QDc2epqLtGAkqDQCt1y7L8HhuqiBc4juE",
  "key25": "4zELXQu2dzvh13P3KYXkQFddmbpMnTP8aoZLrUgKq4rx3q6wL7ZmjpowwQg91Kbvc5XBnNgwsi5HYnuN27YqzeYm",
  "key26": "39NwL8we96QvaWMs7uwugrizbwGqFEdShJWzDMvX6RhxB236wHZ4EKZ8XpTcDTpTwDgVsEXdW9tw5Q7aBMTWbRmt",
  "key27": "47SiSWw4FKGZG4K7bXFtTKKevFZ175v5m3qF2PkRxQ2beYkChPHWsWjrVPRiSWXmFUwbpArCNTWcPSdkjJBw9tsD",
  "key28": "3fAyKAxThgiELPMnoEUuLEFU4A3BCQC4bzycBh9iK59AEQTNm41xut6jQ4ASrFCooJBDfuXigpZ9TxjZyQwDLNnQ",
  "key29": "2i6fkFMcwR6MU789EKqJwGcdofm43PedptGWCAjBK3VafxybRc5C2FJGHmoLFDxJJne1dPcQ4Q7yRXyKZw1768pK",
  "key30": "4p84qaXURjxK4uGjUyyptCfgMuVniwiRCSd2NiqxNmnKxeUYvDhestvhLeRw5RHeEMwPqdGm2HjNmxXJLKtdvCxJ",
  "key31": "3b4uMix9hMrsuuGVMKczyJ4nydj9LgmJJcFfK9ZmWbGW99oSJEek25qN5AZRowwiuiXKqZV54LaDkERMrdwn1pCz",
  "key32": "LWxenrk2W36dLcUuhc8DLnVyCNitN5cdpxHbqzrYqxCCqcj9LzRzQ9ZDjNyAJhe1rPrVFC3ktww9ivpwHUa3P8X",
  "key33": "4yNuDjubPC38yu8sjQrPTK6m8dZ4mQFEcTaczKiWpF1Ccu2DyPVmkcGvAgGBCCtnbZEqwY2FeQQPRU2gjLeDSm9A",
  "key34": "48LSLDQGWdZprduvhNtjj4YrC3LCwxFHy4QVbJhgjrtgnrooMzw823ccptqSovr6H7QdpTyCv9gNDMk7kDuixy9t",
  "key35": "31dBFXUT2iHxDCMLtX2zs3vZfadxLTHeZEELft5FDb2pzEtc34qyWErqBaq8MLGStaeWsqDyP6b82S1jLZWsZtur",
  "key36": "3Aygy2hAGsvkNZazCosAurHsivC8ic8sG9Ya16VeAhbXFJSDiEQTbUjiYqsZfqyDqECJVYEWCj2GvHAobyrFToZM",
  "key37": "2Z6Pu7SDMskqf415EfzSu911r3HCtwoj9tFCPqcFAH9JRCJNWk4J4Wy5XaYYCXJsUNXz4gEBWRK5udpQZe6wX6k",
  "key38": "5ZgxK5DedX5XbT2AVBNvxKDYdzBfZKhEW8oyFekbjMvhuDo2f9ivL5uJ6QV5xDVH6DufodN3EXHNEhF87yQ3Ps9f",
  "key39": "2NfmJV8NLEm214ZkH4d7CWtVzrpHS7TXagepK5vqmaBMZBJM12fFRBiALcmSNS9fjZRe8y1EgwGsT7RbUZxDKxe7",
  "key40": "gKKqtjfjSQTHKFTiz3zpTKxXS77XVv4GrHSzpbm5E2otvAeNuguPCrRrNECZ4A4F6PBnxjG63EXNkdkBchhMas1",
  "key41": "wBVCg3uZsZguX14GEjygS24zkrtwYKNqyUkuWGSX5jT883zmgWFaWxsYdi41hQoKS1ae9zdkbDi4C3vZ8EZa8e5",
  "key42": "5YinBMUzMFcKx6Cp47FWhh5GXkPpCqRPeg6DE3hLT9wnbRsg3zYzeXrQAwPdqC8fUyTr6TPia1HaSVmEa1p3wGNL"
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
