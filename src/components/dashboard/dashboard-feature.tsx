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
    "5m7wSwaWcTK7gWbLp45rKUh22d7yZCbevJJZZ1M4dZrAhUsY12jYYrjjsXjN3B59kMim4CY11ZWa3vbAMwMBzgiS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s2VU8BUVWN4P59RkD8CF4SG6kDfSK6JWLzdAPfSYDkebPbAJahTcL1uXFhBUZfK8PAuhyczJALN5Z82MuAFBLfp",
  "key1": "2AgpjtQoX8TUirucWzQp3GudSDEZQbShVg4zkJQ6pBDRyCa3YauUFSDgRmMV84VpoZPS3eySvZUiD3ZBsCA4iXsw",
  "key2": "5nF6GfKuppboBrpGbx5PX5Zo7tSc4jc5KV6z9QWH2rmMWYckDD2dEeZ39zrt31j3vKJehse8jQG8mHeT1Dq4dPiC",
  "key3": "GpDpTc6fzCAmBirALf5TXeACKuRcXGrzrXqJSafxVt1nFYYLZpC9vtS22fjgneCk1Fjc7MJqSKao48tP3HD4EZ2",
  "key4": "2N1ag27nHmt8cFZJMJP9N1jsgFkkioLHiDgS3wNUCJGa8rqSi6FTz5Ut8fCbprbUuVubFowUg3cbQiNZ2vpwbVi5",
  "key5": "3q5FQNzgDVBGYTzUy28bnDSiHRPRBMNBF1EN6cb1CxRmezKAYNCfeAvBz5xL63LdjQuC96gmZqMY8CiwRNQ3Wxun",
  "key6": "5uJQWdmhZPMJwkYLzVPZyZJdBRwjTk89gZy3YTUmpNX4s94VnhaF5wQaK24aapvbeSXuuiiwosSiUPVWF3V1zTzy",
  "key7": "4oG25HDyW9r71kFUzpm6zWWbGntjzSEVV3SNmsyNQfWGijPkrGJWvDxqLTf2NMCcYdu2vz8Edi3QHQrTQaLqSQNr",
  "key8": "U3Q4pVcdvV7qYE5JS9NyWDyMp4Dj5LABmVGjv4TCHbjrCVminA82AB2KetCGz4cE7SH6aWe6jbkdjeH2cY9APRF",
  "key9": "4rXUg8P9wqyTAB7WL1nkCHfEF4Xv3gc6sDLYZGfHRsMAEJ5tjB8zsUtzgsNQZ5BovJHq57SQNs7GXgt8vS6WUkiM",
  "key10": "32ZnMcKieG4P1WXd1pnsy1Wa92Ai98WQ8QCrjhyrtgrf1a3DS2xhcwnyyKAiQ2MG6V7Pid3uaNJgo9mjumn29vp1",
  "key11": "5AVUX9CBPpBuKwdQRDx3p1uivPkYMnTqUm7pPK5otjdrfty9A2muGBUizwcrmLZFR8n3tuwmLvuTNaFe4sCU4jLt",
  "key12": "5sWkigNBTFihVUMqYgSQWbX3hDN5dF3Jk1NRWhPLmNK4psA49PdQ5k8tzsJTate9RsE1QGoiPVKJW5vaBZJxkxD5",
  "key13": "3wYDyeBcmzrk9z3pYqpDSHwoPtJUx9Gx7GbUmF6ciRhZ8zpXHdDEcxPzkL64gfrMdZQjzyLvc2bjG7S4FgvqPoGE",
  "key14": "4DLopMvjmV7BugqiMtuDHfhaW4rZdhNemEWsmPtKh4KSCJi4v5QAnugvnTDUQsn7eHTV1tf31svrQdK5iHbFVWXx",
  "key15": "2PGccFWpHmPBJBaJX7iTgs7MeXv5Xr9m851BPNiuXEgsusnQMyXXL7H1JWVKTLr2Fbue66dRnRDJCeja7QxcCEPp",
  "key16": "4HXhMLc7eyWit7TqgiDTu83r7ppgTYFJ77bEVzbfimLx9M29S3yCbo495D5Z8TCzCkz76RCWY9isL72FTyeW2sCG",
  "key17": "3Px7vbUXC3sGeP81AJEKCgywbwDK14UZ2xWD6bN1aSwbnt5XaNQuHzbZJPEuH2WhHrbBLjAHfGJHnyorWqQGMCDo",
  "key18": "2LrrHSwkyPhfFimfChd5HN3E9NzHgVmLRrRccazAtHcpwQvAFgWGjsUyobCsvMppsGtvP1gsXBY5hS3jatbyjm93",
  "key19": "2aBiQd6PSab3P3RusiwXyxBAceuQYpj9nzNYf6AaAGki7kVv1UNQsvHKyBMZjM3jxeGqxSByANxeKStp8nHMkRQx",
  "key20": "4quJr1bvUySLgKhNTBovN35nLHsxY8gTR3KiyP2xMU7z1GAkvdqmFx7kFRe7rrRKxTAY9gstwn3t4DaQ7wc1yzTT",
  "key21": "4WA2uAJ14HygTok4tdhiybXgwhJsALfNbdbApj75aD7ZCUMMjsV26SdDduf53aRetRq1kAynSYoSg8z4TNVxBVYA",
  "key22": "4mawoXi6wHrbiqcBbLNyBbCcYCQNoU6UbgCiVtU2Wq1AgPNDXRGJvJ5e1TZxf7FuzkAGXQRgb6A9Frm2vqVo6TxB",
  "key23": "62cfsGkfQCFSSDUuhbkMk2qKD7T88z7iRXerHuWT9Egtf7S54jVcUsP3oPjdftthCg39ExQbLvrpctX75fZXHYWs",
  "key24": "5mU5qBpVkMJ5RHtoXyQ851mPj55EauqBNgQxCP7xr1drdugV66CV5dLxgTsHQiiGXUefveSw9aeKNe5mAW2SkeTz",
  "key25": "4DGcukGomYSrJtsGTjAFzXQ3MKcomAc4SWRYfWBHopKdic6NkPrPW4VJkxJ51KxjhWWGUZUdwEEKDMtBYkkLTdyN",
  "key26": "4jHfZHksqusJDmi9muKwUK3w7coVF2WRvdYisxC89f4hUASYtRFpPrmw4w1fLVxV2DBf6hqVTmB4Q7UbhyL1CFVh",
  "key27": "2AeF43wWCicDW3guJVLDGYh26J826HuyjWXDAexCse3DHCPWaeE6BXZvVZreLyQeSdZM2rqXak7rges7j3FpjReE",
  "key28": "2Kd7i6MokhqXNv5baS4ordsnvytewXP2wf7MZZnTSw7p5Fk7TYgshvyWSnMYyRx61KCkwxFJWHrReHjnoAdTWTqH",
  "key29": "WQFooM9ANG86xatX2oEBEhY7jZAEvsdCej7CPvmFEn8Af2WKUVoCiMs5M8v2kWByS65yEsLCFzezSzCshhsFyEN",
  "key30": "3oVuboLtuokCn2DvsDe4aXrzp1JZR7ajn4bU9CdMyTU7RR7u4UKDk7xPrxZFYoxgksB7JYN1ET4UauAm7ZriBUXp",
  "key31": "5FZnLMfaQ6V62vc6yMnPPk6CdiGvVXVrRYe16mGpdYdJ6ejQVdmeSrGo8JxDxW5saVjCR2UAimrGWBqqgoT22nVi",
  "key32": "DEte7ecwSZodLLfMFPq9XnPbKsY7axZg4ARDjDZ2n59VgU5thRpuixivGQF5h1xoehb7jkG4nYgSJ6WzAkGqYcK",
  "key33": "3k7Y2e8TDZEA5UKzqxgPjWJaixxw9YE8LCsSr9onAjE6Crvvt3pd8oMC4D1CsEh56eDw95v7sin6r4g8q93BXPEw",
  "key34": "2gLuEAWwuBp5cetzrjJwbyhvyuh2rRuuqMeZzKXm8sn8UuteSQYJSKy6BqW2YXLdWXFBmSFUm5KzknEiPrDFEPXS",
  "key35": "4L44cscA7jsrdtPm8YwGjV3iTJMggta55fdwG1DRh8FDnFVqRosoPjHqF6tXTPn26TmBaFEFkDRyHkv3jT46FzTR",
  "key36": "4mDpuTFLi35EMv7xbNKa7Zo9gQUW3QF1HK8dD4SseXDToGAaQJd6cn6ekHPQn6fWwFJTxV8LzyJ3LNKT5d3VMdad",
  "key37": "qk9tF3DZbCUWBUM8HHQeuCiNxC1bDiAzoaMyEjAQoW5oE7eXr8NnMzDk45VUyET1vocwAfZdWtaRWRfmS8jNkfW",
  "key38": "46X5ffjq3YwcKaQE6fYi2kGNRvDuiAC2fLC4XyES3gvLjJCZ5vMCDEPh6U4d7vChtWDSmR8ByEKvKUbJVQtqqQ6c",
  "key39": "4tb6nhay1TEBRm53DaxGe3SqxanqvR3tUbCY5YUB6QUJEhgtduqhXriPkYLuXQhhDz9VRoWL9taBLX18msTnUzrE",
  "key40": "22iVSvawMU2fNAyWBeftgTQ5HhcAzn2ipSPX3yaNSk1o6d3uq7viZdZkCeYTaANVUu5VAXVqtVTg25RiuMQirdy7",
  "key41": "5exv1p9dSCdHrpkTHF2xMjhn74Yaw6BsnM3ZqMc8hGCf4gDG7ns8QniEdR18WU5nka7aCHnKoeRU6uCwNtSe28oc",
  "key42": "4m4XWepBNkmDmrnS31mYQDFW1EE1dXPorkK6CoQAdfRk85rtFYLycAZ7pNNa5ZHs6bbL3h7NTcQdiezWemmMhqfH",
  "key43": "36BDBhdh8hZNU3oCpKSLMQmfAdZMPWqEtEwJAtgV3zSDaU7pCTAKeqTA5YfG9swz5YyJWgtfvpUx4GsdMNuMop8E",
  "key44": "2NeGny1dgfybSBJAv1gkjtxcQW9uFfpPumpPa3NvsQWVCpyWk4DN6DAiicw3LGa29UUj7myXQyrFNKkNTwaNXUxa",
  "key45": "4Bxgdtp6K9NB9Fn3RaHycavzCMsBSfvk7gGAZe8B6gYtZpxan2P8SQxST1D91oU854B2hK5Fb7AZhGQzGDdpQ2Bi",
  "key46": "2TZbJQYERq7w2BUQDUrJcJNoagNMeb8RoV7CN6Js7yPdjkW8AF7KpXyeaEtdkQyx2pzo5WitqcvzQEDdf99jYaZP",
  "key47": "hFH6pnXfeh49gk3kiqNbCF9Tas5XMpRyurPySGT9ft6aebK6FkgTTbhnWvE2wDxKPfsNdnPnabzEupUEu29qV3q"
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
