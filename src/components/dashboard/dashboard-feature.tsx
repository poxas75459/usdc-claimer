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
    "3Zvj7gWtPXWQnTPivirskwEPunkb8LuEYw2VVPNtgqYjeYQsAbkuVYHj9WScA9mLvyAdVipkFUm7t2fZdhyhAo4J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z5tP7XyZ7B3JvSZyN94gybSgJaaMv4Vm59J84cfqsVs9ttVJf4Jog16BjyPXdUcouHsCCy37SRLJMuKGsBX4D2L",
  "key1": "4KJ7pS1DP88QGpvJJYY4DxgpDMaBEr4FXpSwhhp5ECs9rQNoJtMwzxHcjMy2zvnxpZQH8k2sYACBiGrSHtgXVdcY",
  "key2": "53vpzTTjx19icvK2we5jUErbAzAHHqFg7rmwYiNSSXg8ShB7HLvacHb3CbxR3pGrnbjUTWkNnEnBy6wQ1xqm4XqC",
  "key3": "3GRa8o6JxTor7DtrArnSm6bk9Qbb6qf4Gh86kPzbNc1dLTKrURDwTcvJNSY6M4fX9GJjDYAdTewoEV4kSpGN9ZkM",
  "key4": "51Su3usmpbuobiHsTW87ZHB5ArrmLQqqPUSk1vUu1KQomcDRa1orLVjWpf4fXbvwqMAG22MrhyTZCGca1ycaqDLH",
  "key5": "4GffhTkubK5KEnne31keg4qDpXx4DQSbxaHUCQCn5NtFA2yewh8U4foB9kx7Y6JGZPh318vUwpTeHvvnySnxcVCH",
  "key6": "2BezJ1PpLzKUa18FBXSXJ7pBkmbPvmZDfg32e5xNET4ZdBEzBmiCXdeb3JgGp2iAjiTk7G3U26VYsgFHP6jFhGFx",
  "key7": "2X6Vd7SJSULNkhKEMSV779x2XJ7Ax4v39GteWyxvWX1uJzKEneoMDAWV6sy7iRW1898kYq3rXdysHAb5fKWpFNYz",
  "key8": "Y8n3rAj7exPT6EQ9HG8ggqJCnhDDVXKiwV17YkaFB6uBeG8BE3FxvQXiuPCX2bZQ23vPDkALQ58AaJqbCUz8XrT",
  "key9": "5axzbY5Q5nyapDZCMwd61AErVjkvPmvNvQBSUzBvtaQj6vUAjkRcrhrdBmf8zFYNkfBmmGs6XzeJBe7V5dKfJ4GD",
  "key10": "3UKxnMNZHpWN9YUAN46rZja6c4LPC3CAqUcygRnnsxPLPqJhgkyyzandBiBJE3q8gi4PKqtzPki8ZnwYasb17tgC",
  "key11": "KtkqdRjfn3x1KfRDba8uaKESqjXNCxA6YQ5iDupfvGVvPFbi4qcDHhm2GRWCfjJfWs4SW89YVe8ctjLvPUxTdsS",
  "key12": "5WXmmbaTdDgcGp5qk9x956hcNU9Q6xEMYm8AgG1ZX4HQC7RfD8Sm5pwQYUCVvNxy1GW5h7oADmZLE1Hf4MS9zPRo",
  "key13": "3Kw76QckZTTL3JM1mhGYUpA9snAdhAeKQXUZgDNazoX38XyqZ6mtjyUiTGyo4Zmf3bj3zcX6uaTdZbUJo2341vRF",
  "key14": "FXQ8U4AAFboUnmvMXrxZfrAsSuqcdCU6upWfu9n1pyndAVMo9iebmwKgR7w6kbpgNm9em2sVEWdb3NwWQA4AfjP",
  "key15": "5UvJv13e16V3Sc3iFDiARhShNM76wo1hMztes5B6FGAUA7k3nnqGjvmCkSDZLpsxRp7uvKtkUzW2R476HLgKJHaQ",
  "key16": "3k2scM8mRfvnLzrTxmE4d8jDK9AAiaish982Xd5Z2dTth37mqBMnXkYrUj8H8xQxV8Rt62vFEYPTsHZ5M1obacwM",
  "key17": "9YAaqxBXz9UoPiUSERM6XvHS2kScZJouC6CDhwSxZgU2CL8LV32JXXwtndWRD9DYCdPUFc9FUBh4vh6R5iJKvE3",
  "key18": "3G5fLgu96Qp9Nh3atDHPHdh483vw5K9S9PW4uBN7Eh6f51EdBLUKgNEBeLRG5mDgMmDLUq1ran61VcWvoUuM8EKQ",
  "key19": "3mg69KSzXuqLtPLM3pTYfxfAiv5NaqcdYgABKqwnvc9tUFf79iUWE9Ybxr9zkpYCwNi8YSiF9NdPW46sBMv2WJXS",
  "key20": "4wdFcXLPtREcKPQwM317tuwNJT4qTwBviBHWG2T5ZwkyRANnZh8hogw3DDaNGAkC6yJ3oCk72ewV9vcmVQhTnXjf",
  "key21": "4Kqs1t9DdUfx5VM8xC7oYbVc8Jhy8iagHfqWA5Y3GKPnsjZDUqw6xEmWqBNZaEWGPNfbb7CSv9GVz7qY39d4iSxz",
  "key22": "3jJ5RLwBVFgT341cuEZNuFGDQzHevkN8NRLhBky9mE9SXAtyPNDpqV6FFYx3CnVNvMrvEP2NMkYBCxLUGr3yH3Gk",
  "key23": "5XGSuWn5iVrGcuoeYiki2EUXzazdQrzLzx2vSf1nE2fed8B5yHrWJM7d4FxDNEUnVk9RmBtPD9cbENkutCTELJin",
  "key24": "4u3yKKR38qBVnXi3gptba5iR2dELgGqGjvrbJQdsAJk4521GVsghWEY93XPhCfgzUHNcLE7ZizZ6eTVr3zKaQNAt",
  "key25": "4AnVuJHVpA8LbqPzY5Tua77rPxGTiFWZJd8bFRy9LZNBxMqwpAnxMwbMdiVoj4FrSe1puezGQkjw7zcLD3cCVraU",
  "key26": "2yiN2xmJjF4Xg2qHk1SLijucNgcMhq76FAbR3zaS1aaG7EDtXhdcoKkLLLDNMUU2gWJ9BSt6kmr3Wx99uFHYuhTw",
  "key27": "63v5S1RUqXekYKd5ByoA5vSw5wgj4rW1kqYYjtcTk12yMKe7AobMcRobQ7ZNmUvYvJsE4YUYSoWTzrjWN4MzKJVU",
  "key28": "4uvUVWP8urj5mk6w71yGE2Ln1bdVjW7as2YLaE3X4G4LPeJEdFoCFr6PHX9guJ4yg1nBT4VcEoAFYuVwjSwPWttF",
  "key29": "2AJxig413NaPgUNosWuXuLETcAMCqqtSguudyyUikjCP9CKsboU9dxqggiXhdxD5xxFFSiTGmugLtwmQVEJWHukR",
  "key30": "4NTf9FNbRnr2yAieD9v5q17J936Ba1YkUxfiefDZKXe3n8HtMp3gpBo4gJMs3g4U2xFTaDQnAMjpq8zj4KTMfWAt",
  "key31": "3fXg12Jm6oVXHLaHuwTPfR3wDnSar7knXCX72KDeaR587vYS3p8rMHr4tMKJp2gYAmXCpug8g6j5PJKNE9zMypoL",
  "key32": "qesg2g1APWK5q2pev9QquBrvy928GkGEbsqdUZtvSwyWVSHR7QBrnXDzsxKEK2MEztQ8RBXFKD2gvooLuM4y86T",
  "key33": "2QkLp27ZJU4eULciiUEg5xZ1wjGLjPsk2A1c9nQHm5nvhVQGF8BcAaAGZ1VzEpi4xUPB1BtT1AX3jQCG5ENg5G1d",
  "key34": "5SYqLuKixwccg2T9bjHL3ngi3BUVv6nrE3m87NpKguNkM1VzXHTP8PhRFgDX24RSVSGpfobRtyT8dX4FHjHDvPmx",
  "key35": "5J1kPfqWkyGEVHg7Z8hAd9wY3xc6kWweAFL9kPGWZHCsYFBcoDKE44ab3dkTsag1zUL7Fn39z3MWYSmrqPonpmE5",
  "key36": "3WKZ24idJg7U8jbEBdnhwaQcA2cpYHTdkAGvzHeA3JpVVpABgxJnxXJDAhpdHLFMgE4dnTY7pcAj5rPzxjAa4AC",
  "key37": "3wVFPcG4HGVu8RdDAYzDMWCG8zdPGNfTCXprwC3Ro8hZBzR98u7iC3bjz26hzdDp23qGVs356z9ez1p8SvDzuWzY",
  "key38": "3cHfHANCFYUAbPgCseCWx9P7ie4dgbvwQN7y31jh2Uos5bw22FvAe4gQi5Jat9xBAhhjtg9LnYBrVktyYTEWqHHz",
  "key39": "qoUvjagWHS3J9Xekjsm1M5tyxpvnENHyC4tb4vy7P1y6XXhJNQbbPoCh51UTiLxMZgeeXAawBdNXC2XNm6QnwSU",
  "key40": "45K24josyC16LZdc2cnytKPkyTayCd6UQC9BRTj2aa9Bhj9YMZPDLuzkJ6iTmDKseEJWeCjgPKcfmWnvGrhyHKLN",
  "key41": "5oTBMq6wmdHmW9z7pgttQGW1VqSmkjsqwm2SiBqrcSbJ5HKgfi8BgbmowBpBMjifXx1opQKibAg6C3LzqsxrKtat",
  "key42": "5zJZx2ZGpx2aDNAJSocVA1M6WHHdXJoHmytvs2ifkfgg9DU9U7mQYnQ8GdEjtvy7vCkGKpSW1R8oJeeKxyH6tQKf",
  "key43": "65UmZuPSbzWt2LvF1FtaGAHvUUXdfWjPFuozYifo4tEaz1PV1hWa5Y3iZA3p4vWZxnNpER72oMnYmxen5qpFtJJw",
  "key44": "528vicrs3tE5AxqYHfvkukm6eU9q5kaGH91iw26cageq31yTao5iti63T2G3SLcUNv5JMLwD7TCcozRCBBzSEgJ4",
  "key45": "2HLoXkA7LGYyWAknaRPHSixJrRJomSxfM5i4fhDzP3Swso49Y5fBWE5o8EvcLnjwsQgw57Xe5jy9LfnUm1d3aprW",
  "key46": "3iwLVrXQJkkCxa8LNUyBjtwhLy3cjAxVitBWSvqMkLB6fq6mtCF1fGA9Sb5gjocrp4FZEqyEA9ZK1JFzoh7RH7Yk",
  "key47": "4cubdnAPgZW6TDRRYhRDnZ2eCLiFbTtb5v21UFfFDqoHaMHkY2RzyFSwrBsgZkzf1JP8zGz7vroe43sRArUk3ovk"
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
