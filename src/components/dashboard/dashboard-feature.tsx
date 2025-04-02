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
    "2xv4x5MbKWxKVJCpHqm8UvhdR2jfVPQFtMgmQeLMeo63dBGNYeGWVsacqM3Z2bBPQC9gRC36noVbx9uMaMHuotnA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34uGyAsXtFQQhMpcae14LotxvirQ8gYWEKvYuVNB49J3TUELgr3TtEqVP9HsMx1yuFnfpuUCzoBEfPMtHUeFjbrK",
  "key1": "2L79erE9gxivrh5kf4dndADSV2unhYu2NLB1CjbjHjiRxnmVUFd2davUhvpEKeYX8biqnM5a3z7u5QQLkBXCwwaL",
  "key2": "3zKrPRFik3YZmqPTCLxUj4iEXynbv8NDn5QFrCrQkrifm6az565c66dZa9icuneiKiAuhnJCxqKEYeVrH2RAcf9U",
  "key3": "4V9fAqeHqWfgcozsjZ8Y9yBoSvSr153jTQVWnzmnyRjBL4qaLcWEqo8CioLmtNS8PVNCrBnDCJA52J8t9utpJ4ME",
  "key4": "5js6SptCWmJDHoH57xwRg2A6G6VT6rTgqBkaceaoMhHDMSqmsU49eMuKxdRACWF9ysvzhYv1LvXXzYCN4sp3yrb8",
  "key5": "4HzXvhcw3tnFR86pkh5zhJspKJxWusz8adKjPN9dinunFihf341s7Rk8NpHqgAjfiEFbpAEkxwNbyTX54MZPkh8x",
  "key6": "4kehAyKWdNsMfmXVDjTS9Fzc6eWJntsmPJsvXQim3pKYgpqHn88XTYrzJCRygEs6uJ2WCZ3tWv8RMbq6sJpFCA3J",
  "key7": "34eYLqYAD23g9q5KeYt7Bf5TFfrtLVEPZA6NNwtA25vS8ZQhhpsgWb2egjsEnaFGrEyqJnc2paNHyFfLB9uT8STm",
  "key8": "3k3q9ABMTnhm53xsfEWTEV5D8us7zTssbusdMEBa5iBRn5JdZnMkRMS1hXzXSU4xmzkwMdpDNQFJh6C7h6rr6YU3",
  "key9": "nGBHfYG91G5b5DMe97coGCPajqy6tghTFGBJv5XQZyoEMiChzsAbJ9qwnbTiukPVKKtwFcoUJkHSiupwg5Upcyt",
  "key10": "3pcezPnuqb64XtYxRU24EUfwNZSx9E97gnQ6W1UUNxFco8pQRqPdysx5U8stN9QFLzUMPMv8rwkPAQghaSyxXPEB",
  "key11": "4rYmMHKRCS8YeczUkHospWTteRMkjkBCczHE167h5FRBvQqmTfvHJJk1C3SjKr91fW8SVHGrC5UUv1wUCG55umaX",
  "key12": "4x1ampFzi7vwiXkK9vbw2bwCbgXbvVywvHCX8TFDbHsG2Xwy7ZnrrboPmRmTP9saYPK9HcKn99Pe8WToxGVhsCcb",
  "key13": "3X7JWDuNXkQDmDc8Gc3FGtxq74vuC9wVwBRo1BLWNijk7CDBCTbJdJamTNZXNoA6YfM7fnyxE4ziQHfTywt9WYVF",
  "key14": "5wE8Gs7WhnaUGZXxquSC9wmNbttpNUyJD2ZENDnpfojbNQrsWgGAXswCpqxAZf2FuWzXeHkTfCynGEDcMUbhfLex",
  "key15": "31yQCTGnDtzSaQMs7uvGWQrVznSN7LfTmwkyKszevo8xQ99msbAePX5ggBLVpYxCnNX9B52FGprzVqkpnKggnd23",
  "key16": "47sGWPH6jUPTYviEfRJrr81vrjMCYAv7SMPYNQDPgv2LwgKkjvP9197JtgqXgfurLNWhQYVqp8jNbGebiifoNx2E",
  "key17": "bxRhaK7f6WkTN6Uerz6vG4wgQgpNj4egmedYiAPfTJxTetz8d5fttXias1S5zTxmBD4K4XwPD8s8mGytdMJRn3i",
  "key18": "4xYYm4JTfcMEN21yf8zt7S7FYrmyGDdU6vTB1nnguwWtYK3ZJ8X239hGkYr2RH1rbMkfmvTvEYRMneSpCLeTEsmx",
  "key19": "sgEEknWgPpWBcbmjVeRy5Hd5kYm7zeM4gMW933JXhzRC7XPcaFobMGf7vpA7byHfqJzSsQBZvxY33qX2bPEH8js",
  "key20": "5ojUvbDZBscq3FUyyMparH81YrJLwscF22GFZhvfATrmW91DDkp63TTDmsmMg7d8RNV5p9R8QsDReBJ7qr1vxvGH",
  "key21": "229oFQPJYHctAYbzanwhrFFa27F23Vocpuhu4ZE2hDhRJBnv1yKuizTDrmpSDVMhg9bQ92VckP65eH8omDS53176",
  "key22": "TpmGEGV97aZWK4qtyovStide1X6NEZhFNWZ1WCrb7yK1Mrd3NpyTBegZazEy5dFjuxyWAQcEdowhSzJbrJFkv7Q",
  "key23": "4NqX8fcWo7oAYP5Tvi7m68tMR5LZ4Ji6pKX7BiGPLdtXPhiag8JxG7X9d6mSuWwMnM4J6aYYsfdusN4bsxQ2JMuw",
  "key24": "69hJjMHyZ6QgwBH2on53Yo94HWnh2BJYB39aYi6p9TzuNoSRWru6A7Zn7L6kWrpcxZJLdCoFrKDy4UyJ4cyFc5P",
  "key25": "4TNriQhaCoEgUipiARj8nxsfXvjpQg3HvSBynMSEBXDdRVg1PbA1ZkafnhsX5oVkHh8TtGkevG1iY8Xzy1bcactr",
  "key26": "1uuMtN6hfhtr9zQZbt9zAgW5TN4QTBwpeoAUFCNH3S9zc1oA1bnoYmDWB62KfNPxZNM6MWRnfc6edkNjFZo5YeQ",
  "key27": "3NsSdwmfXFmhx69oiESQYt5s2eYb2ES2RYaVizT3XPMaXDmte1BfHL5BaCVaffTPYyJ8iYxyePpKon3adZBTXub4",
  "key28": "3vKDyj4m2JXRcLsfDDjhJw8ZZVsMcwW2ZGwogomZkD7iB86qgtx9fijq9TMrE7wLjzjhAv1sKjJzeZXthri81X3k",
  "key29": "dPR2vPhwHBp7v33QQnWVEXyxQVqn2woR3YiUpjcy1AabjJgUQis6feNd3Du4avbTvNbnUwyqmyFPVBkrLKrva5w",
  "key30": "5poCarqg3UR1v6xRM7kAF35fj8eDCWmavGsfZbWCraHWf8x1MqA6bgQAdMkWLPFkB991XGPRDLGab2vEhPrUBvXz",
  "key31": "2oBXwyg17uiGsVgjMsrYS4J97YLqSxdUFArXegpfYBFrFuZJvdGFTtHktj1a1MGXzrpVWhFouL2XiKaTJBXXgCaV",
  "key32": "3zwLmiUoULZBy5JzWWWHR8YzWyaAWS54RjsG9BrNPCLvDzHp7Cs2FWWs7q8C7zd5DVRa2qZJmRxhSosZtaDNTH7r",
  "key33": "2F2NmipUCnCjwQ6DrJcpAxBW9Zi1sHEmJtJ4o9QL6iBoY7wLh7LEuH1XDPKVzhNCUYnvfWvZ7dhxfoiRGGLdomnE",
  "key34": "3kRQsFs1AYBbHGiq8bsymj7UGFpYYz3rTsqMoDV5CFiE3CkBe1Jwt7vbASpfJWQkXzcWQuA63bWNiApMPiPw9xma",
  "key35": "FRZsji7KMw9CE2V77fv4SC1QGNxFwJzEMyMMRE5AKCeLj4tb4XKYE4HkAN4PWCMB5hhtofBkUuiXJxZ3DpFQtmi",
  "key36": "iaDmvkcrHLoFsyJve5LQdVhanx3477tmwVsMTHRLqs5HG27bnwp3ij6djjmrXm989n5iy7WGbgiaAp2CPSeXn1B",
  "key37": "5SRtiLfJ9K7LpH36fHWqzMpwjk4BXBrFcKcrXjvvoBn8wryPpDgfjZmaMSS3U5Eyfgg2cJjgi8ZyMhv5xmrhXoR6",
  "key38": "28Au9K3qShgY5ZVmqEQajDfjzrv6cJfyq7F6ZcLqoENpfSQwb61e6mBng75KhthfBZe427H5D37V5G2khYj8UR6j",
  "key39": "2TdVyM7712m8ahCwL7GDGhT7Sxtovc5duiqZkeSThfSFePZ8wyfQZvi23kb36eE6fcymVCk3aHS6CivaA2Pd1SpE",
  "key40": "5TfBDCkVeHEDQHFm6iJQTp6eKgKVzuhuSo45tttqDQLWjhJW1ttVMs6Ms86jswuqBtJau4XvNXKtF16kyh9WvUj8",
  "key41": "qTzjjNVyZAjcmwsPxWjzGoSZPutrq4RiczB7MjnWRdqPYcLf4aWcgXWw7pNBPpTxuE3JF6vD33y9dCKdkSdPJtX",
  "key42": "5WLmugsQzqorKXGNfaVDRyDqwNzAzRuv2ne5h464bFgCJhivZtjXdehRL7dx6y1SHBPprqQMstf91wfJjWAMiQYW",
  "key43": "5BrZEPKJrYkpjEZWLR46NtdacfRsCU4rDnZSPtPwwa71VSdM8Cn4Ssvaveb9nevsBwD8cYCA7EnxBSkUmJLr7FyK",
  "key44": "5ddoQxVhogafrgL9mc2VEURxEtKBX5wjHVXd1avmgGRBY8LmD2F7QbzL3jMniBJh1YopUbJVU2eHTgJaFDuiuia9",
  "key45": "2HwmDa2h1ASBcFRSfHjf6imyE9XQXQwCncA4BdnE6UnGGUnzEPRDShiS3TWVoZAqFzassja6L2cATEsQ4VX7EbtR",
  "key46": "2imc4L2BDfUZavspbojXDeAwWsVDRpkasN1mqppkJwf9y4TBgh7LxqhhoTgs34K6JPAoik19dStsuaxnwY2m9X1s"
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
