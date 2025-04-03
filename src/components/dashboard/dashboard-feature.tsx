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
    "3GzATei9ENLHEf3BUDitkoef8ZyxHYwiQTB3VaXdH8GaTnwx5oSyrMJv51R9wR1BYuvnvvMfd9jFYPK44x94d8hL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cRZUhCVhPZ1SQgkpUQYVyK41hSBZeGA1m1DLnf3SmTUuaY5UNta3vnWGRaUo3iw54mRat6SMLMik8VfLo5jt5wv",
  "key1": "5Zn2KUxAUwHdYWSzKsS3rw5t2Ldi8W4tN4EMXjaDJEA6tbxBdVQaUNyjPhwUz83tJpXcHkfSUgsfimHGRi5k5cZp",
  "key2": "36f7nFMdg59aFQEwQb2cz8Pff3JETrwFk8qRbAo2VsV7uAQLZwRyrBboTkboZ577piqvBCXYd2r3NNt1M2MbNcrS",
  "key3": "3BfM1TUJHJtxf5G45619nUzhP9K2xqTcJkuebHGwfheUeFv6uSqRVC6nhH8WVpRL5wa7hL4ZZ159W67jUm7AJAUs",
  "key4": "Jjf84w3Sr6ydNYoduJoBQ6CGEuqxohPmjN8CuiNrkZHECYJse3r4dZQ87WF9MLQXUBJhsxXyzEbBKoNzqvxstSj",
  "key5": "5joW6vAkaWpSRyJSphBYMNfBtSV9sPCCqDYB1GjtZSh5LrCDTwsaK3pL5ymAPsAcdgmiraBfXgjBa2eVVG5qJNEH",
  "key6": "2nAV3XM4AuQyVAWmyNjeb53PtQ92zphF5w2g7v4KhHYxCjvHVm2hAm3ksqavZrRxjzSQsygQYuSvaBZnABGDV9Tn",
  "key7": "2jwAjnMdCBzE9XJ1iqbAABhEXuSVK92VWWKjLmG7HkZjkKzRKQS2BGsMPqYqsJrC9sJvdeitCXF2Vumvo7PeTDcP",
  "key8": "3dPmTfTm3WKZtgLhJBSc1VuVSLS7Znjcqrm2WetzLjtxyrGp9NMso2VYo8o1bKWtjaRtfYdRr1NSN8hBaPzarANw",
  "key9": "2g1FKssCW8vku5MCFVGuSG9JQiyKCmrXXgPXs8vM34tSgT3zfkANSWeH5LS6YhFbbVZwDTzaJsB3pcV9BpgNNJkn",
  "key10": "49MnSwYT7eKACRKKTA7eS6K6Hq1HYi4aNkiSM8MSp49YyGKUvpX4w2K8GmAFemBdPTZmCD5Jsa7Es7FK5ft39WJa",
  "key11": "S7JbGphZoZtvW2opoPvXA3MrcPrpuHRd1wPRRg5JZDdxjkVNfJc3ojqSE9ERJcnoZb47WR3obNfBLss1q8an34Q",
  "key12": "62MZuksgnffusZfn635JFUPah8MeJcdqfmh1RSxTKFiZYS7KwzpW7shPobw5gE8AK3tMgzS2EzHnFDuUY5x9GYr8",
  "key13": "4bmZvU7EZZNTkPHn7poL4CAvDeMX9nFC33kePj4n6xKLr8yHsaSUWJWsBy7AfSgEchYWW1P5DNUzmk8JosM2nrGx",
  "key14": "aHAuVMQaoa1Hoigyrhs6oWzj3R2yjDrhisdmTDMFgQZcpc649Hdvt3rJHhRUKJTkyHaDFNL3ESXoG4HnDXFLyWa",
  "key15": "2wgKpGM24MTi9jidBCvXj6G3AXKqVWycCPfpHFfYokgsZPsGz6kfZjApBJGUikg9SfHSLAuRis9Ue7LY1TWVdge1",
  "key16": "4FBArquByA4ehFrYp2XZnPnQLKY7Z1oBoBVpJMtCRWtajJTB7aQ3AMnje1bx4FfkoKWU65CAnDczZofXaw1AcN92",
  "key17": "5KWnxWfprUE27qKpH3tchcmy5AFBeJ4hejMZDZRPDgWssKjszKUdPPGwYpZgd3rteku22gHjpQ1A8V8ajT4kJnat",
  "key18": "5vVmQLVwrgHVZptahMYK2XNovrHt6PiGsCYG52g7d7TA1Wf1bAXL75Z1Au9tocgykVcfHofHnbsWJeJgAQMSg4cz",
  "key19": "253snJ9DUCJ7TKFRdA7KdHXGm3DVejw9N1pfCpyNYM9XsGJgxCab5Jxw4RYFZsoTQY771BNWqLZy4L8pe4XYj7bg",
  "key20": "4v3EJKyRiYB7mpAV1C5YPoXHhULSyxmat3zqjVPZugz4km7t1qY8uFWa1rFhSEQhbwiv5SAiuFpwJYHuWBV2eHHJ",
  "key21": "4S6NavNNLtdZQ6sQjXnB7cNmZuehPAG2h8iLDPQwzyn4ngoj6sWVLcLCJFntQpfTJvQ5TkTKmZxT3grbF7WYktYf",
  "key22": "2xdXXHP8aBViq5XGNAJBnAbVBJUksV1BsRx5NHxGw5sEgWaRCpfncQQi6HyxRWQEQ2inzduyCentP8Ni1AUAPffP",
  "key23": "2NdRCV7o79bRZUMhwiPS8K6oEhX1PyBYne3tQU9rQS3CTAJmkKPsQFuECeCnK7eHKt65tc3tT4Ap7yRacdbZyL8p",
  "key24": "5j5FreA3Wks3fhqVCnPvt8L8H1Ro87PhH3acAG8RfaCNimGc9TwrsVEBza7QYifpmWc2ceEx52PTeE2jUkRwWHh6",
  "key25": "4HF9JttBQa5XMpfYpTH5VzsehEkh1tELMxP2uJAuk5zHM2GqfcgxF4xeSm8dQQ1wYSsdUkyRQNDiJS7HC7CTLiUx",
  "key26": "4aF6XXyRAsXkJMyUTU3QNz2QEPyRv8kX9p6T5V73VcZGLTXaPLjkVkhBjbN2DRPWHooyQGzBm8qmtx2BQspjnKjH",
  "key27": "2j9w27VZY2YxxARyDUdkvE7JJforsgSrhuHZwNYyVoJTSLVs1VDGkVB9YVLcxTgmFNHBNd9nnSqvxUrSadPcLgve",
  "key28": "4CGFQAu4eobUoKcHh8nwwXzpL1rQmNUBbefypWKguUU6nJpAqVoYSNvoEQJv6UTck8PoTe3Nsxu7h9aN3FSTkPB2",
  "key29": "3Qzj87KzmbDRhs8EcEtwWALPsA4ruTv8pF2mSzM4D4XgkpCJD4k4WDDTdnSsRReXrkByYKvahPcML1AWLQXzucPt",
  "key30": "vEp8TXPNitByRAtMBGUbgiFJttHpYJX45K6tV3TGfxHyJ2mDfe4w7Eu9wQsK1Eo3dqivBPWjyk94tANvW1QkKwQ",
  "key31": "2zEgoRPi9AYw2wMj6unRwe2K1bgNDJi6qEYTteoEKudaLf6KybVSS5NbNTqq3gNrsGXTaVBJSxdU7dq7G6TB9W1u",
  "key32": "2LMYPwhKqP5Dnksit8bM5YWp6JbEpYinnwNkeXAQWQemN2aKMqxauk2cm2x2ULDdqzoDFwgVedXfuromJu1PfJGP",
  "key33": "57TRKfKXdhS57xGfNByjAgtfrcAErEpftThgAWP3y2RxF6NHEZHV4goum2oovagu3yZrvnZ3dmAm7mrQLH6Gjigq",
  "key34": "5MbXvPnPzS2NCqfVj1M6BvZMLFzKum5iHqQLpAxjQvzajyhR3vrfWDsHJkPC7XjLb3K8iZPdF3cwSnvxd5CfPRJv",
  "key35": "unwwM4QpUum5M4qwSH98Va1szPtBgnqBNaHfz9D7MQMVwyN2HE1AmXUEG8wuEgZPeepWSTxcaUkHRcBF7UavLMw",
  "key36": "2BN2TURCQfQwXCKqf1zDRjgiZSPt51ocqYj1Qq7cHxaKkMi46zYc2MhknmtBowJgffysTnLGWUmD63iwUfFCEguh",
  "key37": "39s9UcWpuhrMmNWbQWqnuvx2FWJmXFsQnm9v7a3pjiReUpUfhvTdHrTqtW1YsJGPd51Ac74p2PXtHNtAjQcfxvRG",
  "key38": "4WiQ9f2N7joMa9S4Jd4Sh837jmntQyUBeWu5s53h6FFxpoFTKcNV2YV2Uek1sAao7YNH5pHuSD6bo68tBk8KvxSM",
  "key39": "3gFExnahU9vaNMd7vJeD1btjcqbZSGUnuGxBkaSC6tVQa8jSKgumXBSwHGCorYBiieHTEkHDDcMv6jhduVbRiao8",
  "key40": "3UpvvWWMF86msyJik6u4A3vxsiCoHCWKLESYgEy2HrmovwFvnGszM4Rp6y95ykFvCADDeHJX8Y1S8iMgvbQw2MzN",
  "key41": "2TfP2pNA3EPZCLVBqV8cnEYtYc36B9beqFD1X2CrFanj7nJL96KcEL35GhfVfuLmtunbpmf8beHrCfLhwN9Vox2p",
  "key42": "4jWvndLt2BW4fWRTh3iJB9rZkquTZPA34eQpf9r8hLQ5s6t3ZtbSTNpiRPyiD3wLy6BJX3NTPPFWSZ48979U4tmu",
  "key43": "fNbtPFoJF6UjXBuZRggvm8KbB8bz9G9g5UEH9xXMpdHdkvd4eabNL1JAPMPTrP2Yftr8eQDcsEET4CZ7T16yRyq",
  "key44": "4LzuR9Yu2VAu5eQBfriNjTBVHKoCBbwztxLZaZA1NCJCY9fK5NX8jojftSXFSxFznzgeJ7UgyrgGejVF4NSWJyiK",
  "key45": "2quAk5qAPKFfoC1zdFfqHEW6MZie8XtPy99PcUUfQwjMg6XYpMddVLGQJKGG6GRVdUBTzea1vcrQRNPkHkhL7NJh",
  "key46": "2ysknfj7o4HR6EyoniUQhJn785S4RGdfSTRfJdMFCgR59b9tKAm8AFa2vtQzNfpLQmFGkrz3CBR6B9REkmS811YS",
  "key47": "bp7CM4n4HnA1ykrXHXYecQbSMBqwu8yChZNwWV5GWviR3Vx95XHnJwrCmVShHxwJt2Y1omLrvYDtAoePD3dAAK8"
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
