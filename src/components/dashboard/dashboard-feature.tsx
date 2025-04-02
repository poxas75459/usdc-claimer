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
    "4ixfPBGnkZumQD4UV9RxzgK72gHz19YLkZVA4sYafU7PbSEwDPARkQcraDosbZ6QcZYC7SdK7CkabVkZKecRnWdP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NVSbgURhtHX9eQnXiQZ9z8sbo2gxXFxWsPX9RC3zeQPSdVkCZaxDfySA6PMH88Dsf5JEqmKZcPxvYZQmrFTTa6h",
  "key1": "5vdAyKfdDLTmWW6vfRQ1mmCaJ8egNcPTdXji5nERaDSaaL4Hpx2N13pW2moB2TNucrQNBK8ihgzCFra42pZifPt3",
  "key2": "3hriuKYVTNdGV2MaKZgPTVLKqEeKwYKyqMm2p9HcfxTuSi5uxYBuD8zCDcxBEQ56KqD6AvfHVxyDDkEu5QJLna6G",
  "key3": "5DMVSWU9JTyCpWbyhFryA4we49vyWRMwBdBcMZSkfTtJ3a9z6nnWK7ULvHsTGpRBNJUAWRjsU3MQ1gs6zpmzNe5E",
  "key4": "3P8g7gDzUHGxnQBiRNLzna9sVVwEuFJo7aVEAia2qfgBSVL1werGV6bwpa4rTp9KjEjXf48Pq6fBSbcqTjdZwSQx",
  "key5": "23PoGoTd3DMiKxEr8RjpjuzJHo4cnjZxrguSacGj4H25z8inDpsjc4rCbcaLzZ52owNnWARyKSDAKckr4NNvEMPQ",
  "key6": "23JcggaAagGNtSYN4oqTgqtrUhiBrCUP678zPwELRQyNoR5CnzDjgr8wLaS6u2PM1kSsSkrhuVFtBRtnv8shZYfb",
  "key7": "2pXEcP8kzmbMockJH7sW9fbVAknub1aBhkhhigXPRVfQed3WxouAYVcfLZWvyTgho9kVidihVZ9hbpDc8Co6Pyxf",
  "key8": "5aQCRPV9k1TbkK8LCxYpjwfV2sBVWRcrkv2y7nqsKnemMSZ8ywMXN771yfTVFDXJkd9zMaJ3u8qu2TT92Z2ATuBo",
  "key9": "VaZMVCm2UPfvbP1ofyDDQR3dTHggoHr6V4SNNryXz8PhqsWoSSyADvqdRADLyRA7HwLWMRbsggLioDoPcvWAFEP",
  "key10": "2VWuX4chbr6hZhVKi2pT684Wp269ougH5sPYaxMbq1v4UxkCidsrno8aX4qiZNcgDmNLnHKxFoVjvqjiGnLbygtA",
  "key11": "5JQuLAG9P3ppuaBUumC8piosioEdDeDMPgaLZTGPfvYE3MozkgUD1CLRu4jLkbMzXnxLsZjrKnPAkPNjWk17x6Rm",
  "key12": "2mea8q4vndpY6b1BidvKpqVPWGsBnSSJobV5267svRmr9e85GJRQGrJohqFNjMHoK8Nobfb4GCRgArz1JUeAVCsm",
  "key13": "xA3g28wZ9y7qwC9Zm25kNysxGci7nMKKCuicK765FMyRs9arunPGgzZAcdSKVdGxjfUS81tXorM1zz6SqHbC2xg",
  "key14": "5k7ySjbnLD5PxAd5UsMvPaGQwSUQcmjWM82Zyqx4tRvoTFM9R2Y5K8KLyK8LYo3XRXRs4pnCiVppjzDdTr8uJom3",
  "key15": "3UKUU9ZjAdnd13EhZBtTwbsncvPFhk3eDH68KRQ7MqYJ7NbVwqNEWnqkWG1D9hGhPb9tQiZyREHcL2v9tHUBj4qG",
  "key16": "5cjpCbtzvAAkdFXpxh1HyrnwV17BotsYDfuBXHgdmLpaDMiqTjzaqCxUmbQm3XFhTCiNfyeTkTi1FkpDdvXwHnLw",
  "key17": "4Q8amAFXkgUdiwVK78LtUNiM7PHX6hZXx2q6DfujwqAw7YFPtB8RMDcGX1viNSdfxLpgc1pbEZ6EnDvjE53RtkxK",
  "key18": "2uZ5iYamVtBVymSN3v1zb6iqWUmCqoirXuJpekzRrsX64ChXfFZW8SaeQhwiQ2K42ZHeMmXXPVPPBDSoC5ijtBoq",
  "key19": "4FdiGPKBxDM5ePKim97Y9sPQdTpaPMBKdgJZ9QXkN5ymGypvLZbjXqV7L2tRAbfPW4UsrGE92CPWmQiZwHv2F1pG",
  "key20": "xHjaGURVvmhXJ4Lh8cFYuQqRKHAaHmAgFVNTfY7vrEdFx1QKBq6rvNJrEkuDYnC41Xh1RkvcqW8aLCQ3YXeJtL9",
  "key21": "2JpcPL5m1AaCvcaPHerzq29f2ftnosHF4QuFWovyWfbDH6EnXSeiY1eaKvGjGqjaTZPdJK8LHStkKbq3HetigbbJ",
  "key22": "3hDPGMezcfWPSG3EEQbtQR8NcpCHR8is67Yb7NwfpoVKEiq6pzNN2ewqgYZ9MBxEumRmjFukXE59qitzkbLzQtEH",
  "key23": "3aNeisrBnf6qRvCoBLXjM5YupYAeEXkoWgEYFRLn8DNuiR1rMmbonHQ4RVw1WfjCZb4kqiAYKSEGNyQ1obu1P4dr",
  "key24": "349S4qZV3r2TKXTcHa5e6ieUyo4RBFz7tPeJw8YXLt1JmGMUYTdLKq3NZeG3rgiX2JuUQqJFvUZy8WDU7c2ZSAfP",
  "key25": "3x6okuA3VBXrYELr4XQnHhdgd48FngctrH8enM7fLu85ubhKLV81DfbHm1a99MFQTppvjt9KBj8oF2jbzDpX8w7M",
  "key26": "5RB1L2Jkc1tYN17CoMUPBEnSr7YrUFBUqdSepN2Qjcb85eDKpH7Ui7AzzYmccoG6kTrfUFcrXNbnY3fefzDX5aSR",
  "key27": "3qc9waUyeGPayLYyE8mZfr81HmijDTnE7cQNe513AskeUhUTHu4wN4rv6N9dRWUVcU1E86p1en6CNBJnJfrfCG9p",
  "key28": "2zfNPpHoTVFX4ib1SLqZpzxeGG7axFDzgmBBGYL3rcSzbuYkzB1ymXZBrjqAh7WxFc5Cdit4VdRAYerYJ5WQFbNv",
  "key29": "3QSY9hyiyRTpmFhPdbBy7YUCip1KTL3cKCjME8LRRvVLKbPuJCgeQ4ALGqpzg2FPX1EH177TtUAqqWDZK8N7BfBc",
  "key30": "5z6XtuxM3Bct77qaLrsfCLHyd91qFHm59dafe3bpktp6yCZwAZjMCA2g1bAJtrJCVB6iRvrZ1X5WCLGrDNoAnMrf",
  "key31": "4R4LwKjjfSVm1rzuA3gj1ncZhPzHWtomByUX7b1aYvccYG2aEoUCQvn9Fh8tjZkNshqdLxCDmL9d3r2kiQDA4sMs",
  "key32": "3YihURqAz9kgbp8YThdggnMpPQib2cUHsHX44SbCv9FDYmZCmydz25DgzrLR4fwv5cLwLpVC3s9ZHS99UjHFTyb5",
  "key33": "53MNbnp2rLiizbkWaax5RERHZedpqmpvAWsBvbM4pNvt7uNvtC574BFM8zM2Hf65Mjp6Kq4jMk1igTEXHdnmdHkq",
  "key34": "9Z6uQqUsKz4upUYh9rBKUFD3bXQ6VTmwUJAuLnCeKJHW6wJ5a9t7cbr8wU9qy7VR2PdMkNbLifseqSThY2UKgSw",
  "key35": "5U8XSdKr5xDefJfTSDUuMFvCF8rM5uDxsBJpx3bbFs2ZNF5x26Va3HkjdbYPCkZM1iGBXZCPsV9spaDuFeJvDAgi",
  "key36": "5cPPvBWQ9TQ1eR8wKfbwHqGGaE5N3y4GXfLQLoerciMzAJ9veAGvFkg2j5hjnx1vts97dkB1xBTzNq9uprSc4914",
  "key37": "3iDQpZxzpqNHtDfAbg2s7Zz48mJ9mAT5XN92koZYaXyfVy2CTvvpLAeFJ85gFE58ES1jCcGJLsG8hJfCabW4tX77",
  "key38": "5H9pRBsrbvrfW5VTh2yyTB2GQU3iv6RvqqzPSv37QQ54rjnGNNY8aHtioJZiUZiehapP5wHttr8NJi9pjiGpMdiJ",
  "key39": "5MQVdowjE9ztwUdisqrmcEaT2uQafxgetrfM6sYoBtraCq3HykxRvwxTZWf7LjAaxTm7WapZyEC2oBfZrxDnndKf",
  "key40": "qd9R3WzJX3JCzUifRiBtzxNPWU6N2XJWR3jLStEYVeMZnMBK7VgRygWFcRzUc4JGif8ZE7oUfRAuu8kNH1LWovb",
  "key41": "5oh9t3Cxm8XCrqbUuznYdv8roWjzktjVM9WtEZs7fmr9kf9o3h7RQbg6D1276pnf24T6eqU7dq9zC2E1EYdrp9Vp",
  "key42": "65G5nWLjYLoL544QbgwYjn3N1VoU4fvgVpb3Wg3SowoRJyeHLCUPwgdwsA6WkMWbC78DxeLLRqQ15qnwHM4RkT6H",
  "key43": "3yDU9kEn9ZVSvSRajmhyq2buyQkD9DnJtzShJCQHHqgVWR4XLLkYWxmc8FoA5at1FfNmTESyWsbAbkmPHxcxgi5t",
  "key44": "2acfJZ8iGsuV4gpiwgUZE5KCGntHqqTawaztrYdqnGuDXZSsAVqgAX5wadbk9StHf6o9bvQQ8uBPgzGrazHZ29et",
  "key45": "2Eu7NF5ddsxXAZ4xMpFmy4jod5QdTXDHiqDZMvNbgp3JiiFdEKuWJ2UnLQkyAmoGsB9sQthzDQVURQ4Qgd32k6Yc"
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
