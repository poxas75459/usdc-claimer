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
    "66jfMMWEbSfiasd5Z73fSbYXT3iGTyXQDUiNfAvAYNhkFVdiaJKnusfxr4mBKZG3XkidZnYsbiPGotU8VisvNGGJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MjbyUBtP4ij7RV6G81cuCVHPoj5utsH4qwJCMKrQZAe67GBqDkvMGrMYksks6Qi2c4eVMs6CqMuPr2d84SavLLT",
  "key1": "5qxEeeBc1GPYXQcsuwVqjdyaB5DLc576uqwuV1cuD7yCEpD3E5oTYqEG6BcTTtPcvD5UhdkvBZhYaz196Ltjn8Z2",
  "key2": "4rFvmCDujPr7Br1tBnhF1mdynubiYFvkJZ4xKWKaS3CFcaWYLRwq6MuB9SugP5f3TQ5hgJXrcytYs3CwA6XcJPh8",
  "key3": "36QFWj3rrQsprwxjvTukC8acN2tfDAjdDKQHKh8EPG3m2UtCBRpzmCyATPX8nhUF46qQJo6CSZwZdj92iajoXSLZ",
  "key4": "393TPmmLNtNirMtWJ87E8VpFXLrue1Ds2UXR14JXVJwdRLyKKLWjarFrp7ThWswjKXUsdpeX6bMMSXYR5U65epai",
  "key5": "mKKDxmG6pnw1N9AjXbeBsktUjaHgoKw9JEfFtm4mosr3PcYXgNVuTgubQXHrgsYx24A1ZCay18M2vagmnnpvrd3",
  "key6": "a4Ane4EkJXRBST5ahgFg555KoBsHFcBJsybD8Xhbt83NjvhN7YadtrqujVx49qmXBiip8dNiVv1LpDkAYoMwC5r",
  "key7": "53gbjRJrwPWMzQfg4yRRhy1a9gcxeCBx6J4H2v6bhCLurxra8W4wu1A6CRBZCYJRfzBmJdUSsxQ2Mug9za4TYq4S",
  "key8": "tEww4iJZMTNpNkeJxuyLFpwqn2LYKxg3FhJx6uPkQevqNRxFCK1DHjzsAE288wHcS6ixFLcRn7PgdKnkEEuwPiS",
  "key9": "2AH3v1KrXf7UtaRhcxthdHaAYX1UXi14JKrFswtHJhEdWQXW8PLHqQfYFm11gPvuf7RFzTfPyWsRaGMZ5ovK9nm1",
  "key10": "3M6zHZdaDsqcEtg2Lus6Mp39DdBhKny628Z8sBxjmxdBiBpTRiaty27fFST1E4wFs3xc8bKy9dcfYyRgbyVrbytq",
  "key11": "5dDyWcZ4UtV64kqEsL37JefZxsqW82sMmmig9wdK6NJp6ZMvgPnaYSAhc3Xubx9hsFcUyQ1cFuDsFhbEw5erJxEY",
  "key12": "63MsguhrJXY4U3KETHCUa6AFv78RUfm3NdCipkfo2fpVaLSMaGSWHtiwimQffQEQkkvEja1JqtXmd7bVeovMJAEB",
  "key13": "2qaDLS3zGGLSRE9bPjaex3XdeVpGyvNQrVpoFmxV6GPCHN2iRPtkHkwKdvTtzDHpjSkBvm97vpRqfV99LHpQdUHw",
  "key14": "3JfhfY2MmYAz6sBJenMtEjrgPePuddAGdWLb8wTPFzYcSRqxHXt26Jn9Fg4V9svy8uNHinXbAD3MYQQPcfbopoUm",
  "key15": "4YowPmRWm3bTuS1AiMti8AAxUwVN1q38P5RDuGGJtkbaak3gvj9zoK86BbzoTeA2qZeaEuvubayvGv2oFpekAUjL",
  "key16": "5TSvtcYFzn5r1Yv7tiwkgtG3vq34RDdu2wYjapAuYXdQUnumD7LuKuy2okZDsopRt5cFzEc6E3mX2zwrCdsdmQ1K",
  "key17": "52EGYkYunMocAAJU47kwNNap3UVkxeEZRQtjTguFwgvEcaLCCA8Xrzq2vu2iqM864YRceWtU5cfu9rR3qRqo6jUj",
  "key18": "XbAH9H3mWt35VKsJzr7Q1cbUMZk8PfJsRnw5tv77pB6EaLynkPAv5ie9Z8wybGBUdMZrqyDZyBHEFJcbtC1szsa",
  "key19": "4c17ePmkz5doS8KdXnFZZe1R1QwhWWE2ZjNi2xWLWwWM9H76nRuGRRN4d2QEAPPXYFMsXTot53gU4zupgbriVAr9",
  "key20": "5CAYVsLMXeXcTGqWtqkGGqHyp9HjaBRkvQsDZVY9pzqUcvFuwVLs88AVktioHecTfBdAgSd5YZkNy1cSU3NfihQZ",
  "key21": "qisAmUTBw36fgoLyuWkkGqteZd21XHDqvRJ2kdXPqArM1Efd68okne9sg5DGx992spmKLpFV7AZMKXYfBvwofy2",
  "key22": "3HYxPgFgxdPE3DfcnfgsQrRXdW9QrDQsE32dVTkjK5WUCZFjVkNuNbARpK1LWebuHDYvdTZ3fApwBBZHGvSQjFSe",
  "key23": "2Juc8ii4AdMHXpfvrg2uEpdzUEKHYTawmmykPsQSqjBpSj4Q5CCHrCfzMY1Y2gGkptSswgBt4NvDGrKkprXmVhNv",
  "key24": "MsSqbi9s5JzEULw62bPxawkqMuutzWPvRSVUkgHZ3jyU8QT8cUcWqYC18o9XQLKhKip2ambbZVbaqn5bLJQcuRb",
  "key25": "5SGJZG7QmEUTuR6Q8tYQiufZNxo7c34JdbM9wJz9LZawYqTkeqWQDR39TwW881Z57iSfk2QFxGbsUs7xpeYdMUCf",
  "key26": "2DAh7eJzqo6ZiiLqvu2UF4rvwXN2jiQ8rtsdrb6rRCLKCCiZU32WtJRfLwdXZmACV5tTfjYrUu8pQzYYDVdbkGXk",
  "key27": "3UzqoMWmi8tM7SsehoyBftKRgkZMoucBaj2RuLL55dGNFLVapUURP22aobZGVfHqXQWMeQimZGhoBFfCarL4at4L",
  "key28": "5utixtkrUvdTKn3tEy9NprMM9sewLSF6eZ9D7rbxuNMxG211S2P6Y9moFCiugpL7XK64w3uDcuPpSD3NAbmVm5Pv",
  "key29": "35CuyyCXB13FpF2b1Riq5SW2DzvREeDMhFFA774Fz4xYZPhLqxvLp6SRQ89QgJSmE3smsBgjrEkvcXeGB7khA6fY",
  "key30": "3AXWLNgJZWrPEXKS2JKXgbpE5gx8d3d17q9jZSM4JnqvfZf8vkEVzzpaSNrC9Vo5dbW1W4m7N8GTEyivdpQR1c5o",
  "key31": "5mAH2g8gmomG9VeUcMjbZ7WDFSRzp3b3ctE6sNBXGn3fMCGJAB2UcA7k9pqrWSHQKbKAU3oXbceMi7Uir3RtSZHj",
  "key32": "4fsLV47cStHW5FX5J3mYAbSeLPoVkDu2LtKDDsh9kafgjm9ygPsxJxTynM29AXZvedXvnCt6Pz9h1CJBevB1nqbQ",
  "key33": "1z2Ty261cgMzsN4daWKur3cYfkYu3qjB12Z3qFK3GxdoannH3qGx5FsPnxf8aaScwyZcRqhtwY5Upv2Bmch4UgC",
  "key34": "4N52uzbbEvUQy4fAZ1sGtJ1Jp8vD8HknrscAXMW6mYwB2t2sUDAwhR9X6rVJTNVa7YG8ju8iWKkDQfFfpFdbh4nc",
  "key35": "2ECBJixbnQgijizgtuA2NpCijFUp68oTkkwbJn8X1rqB4gR1nDH17jhxtk6wainWA5GGMvBTCLjtEdDx7grCs2CU",
  "key36": "92Pgb5gx1W1GJ4Nm2eG8hFJBSpSnd9fuRtm2XaxdKBVvAZpmoQT3THHsNK5SAyCeAxbbfMAXj4cyQesrxM85pE6",
  "key37": "3C1hNcsTLaaLtregVrThpZWCKELKGifdTF7jQBHqmQ2oCpic472FtMV3859QUAchbGqsowhBU5A3xq7kEhVnbGm9",
  "key38": "5rakyyV3E1QMrduWF1FoTBXPR29tsJcp4XbH3k9GEE1TtbueALecPdBVMPKWpKeZdGohHbNq9XyorPWZpB8n4NpA",
  "key39": "X5hfbTx9nU7vMxk56oJcwQqhNmJNDEXv2gApdpCkcV3fkmN72DmpGFemsPfWbyNpUJf2nNSTTwQxAeVoUTaH8wA",
  "key40": "66hWWyDdeaAtWWwKzwqJjj7cNVTfmcxp8ZmDQKwTefJdrkG6z8AvrAynooaH6F8npf7aC1joQ2SSjqL3Cxz1RsYe",
  "key41": "2JAvLbFtSLfPYQwbiH4D1j6p637AEaDmGZwxT3F6fSRjuLt7aNmLSv27YKtvKKbXraZ3XVSnvkqBM7BVddusVini",
  "key42": "3AvmAczf5UB6S9bPhKSS7rdNWTm77b8vzzBCmFuRHorN62q6VtfH6ETKqjacLobdpDZuRua4SzAvK5R2bwj42Um4",
  "key43": "2WJ9t8ithZt61dqJiEZAR26N1t5QsiREHUT1Rb6863oiCUkZaeRqMmYt5iCkN9r3JS1t3mRBvmqFYHpCYpSZrQ9i",
  "key44": "4Gow8vfjyk1eeAScwtttg8CDt1tuuEpGMoiC8PrwNiqbudZSxZYF57kj9ukDyoZnZgQkHTWDhoDn2YYwSsPbHr46",
  "key45": "2Fe9kz4LZperuSoysNrT8HDkWmkrWrnxJjAWXB6CYPwAsb8CP44X1zcJtkLFTdaED9z24DYnHw6DGqw8Chf1rnJg",
  "key46": "2AFTNM9sVYwytJL3ihCjjF7LSd3DsRZz7BfN7nn5KewKVfgXN6mQ3XFr2nuRZtjdXP5aoPqhcqnU6Hk8DxKxfCu4",
  "key47": "xUYPMtUxnhaQ8ZhoCqQno3nThA8NMKimEdKivMCtLnMq6kvvGjp8cCucw1Rfn2CrB2gWbNcJ85X228r32wqEgWq"
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
