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
    "4fdZnpWgXa1uPacFwHo4FB8cndArv1C6YvqWMEsRokhkPbKL1eZFPuuftFiQwnmSgny8Z2DMt6mu7MTYwSCAVimi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bXXv7qS3vqnDysnRqmy8XfeuRknNDyfmUTtg4UwHnEQsG4JkHJFsUCfpnakpmr4u1hYSfkHXucWWEyn6Pcvi5q1",
  "key1": "4u6zFr1AFKQG2UKpnBuvUrNUhTF1gxsXAa8FiFCzMLRqDHYU7cSwze49EQTxrow9gKUHL4rtm3Jiik65Crcj3Y1z",
  "key2": "D9wDVVewBhSCZdLNeyjF1QAQ1HdMHmtZPpfFNRFBNMAXAmxJdAxpLGeSFNsEN9Hx7nAB9bAnFUyA1GNQPD22gVG",
  "key3": "55BX8tujK5UiZ1VJibCtNJGEHpEcy8TQCZyPNPuyFBcPAkVXeA1VqMijj6EERYbhtNqC1WBHdgmw8geo7hZLxVW7",
  "key4": "4ssANomQQTDHtc4d8Qik52N8f1L7CJnTfZrXZx6Jfpkqbzr1tTNCYvZ6hGEEnTsRnYbqCbdQJhT1TLkLkcFpXiCu",
  "key5": "52Q9uVvtcY1c12rTCXBMwo7eTtsT2khffmcDPgzFzNsVSDJhywbSN9Xv9ox3KB3CdH5KkTLTnrBXRdXHFMkW2Na5",
  "key6": "532pWbjqzL6yxiahA1sJn1RHD8TqJ7o35KngyP3JmcFG5v5DfR7CVaG9JQ3tiCVZcPGhDh85VPLQ6pmcUMiMs8DZ",
  "key7": "3bCJGgBqYfrKC5ZEzXLYZaYoo5m1qWgnTqgNoeiSRDL79VGRyyhNJbzaVSUHn8VeHrsgrb69w1MmXGWrwfXFVkXF",
  "key8": "3QxasER7vT4vnBkqnxKuk3WHX5eL88fmB1W3RdhKtZCF8uFbbQkgsvkNw3cLh5p6nvJt44nBjKiHPeVSGWSqCs5T",
  "key9": "uXSeW7yWWsAT29eAM8zCGkzAGDPXK4e3vgKjYn7D4u5KtNHCZzRqVY37gEThcyP742nAbwAQjppZ6pDM5aNv7qd",
  "key10": "2DB9sFpZW464SN8HGdSJraCCzg3jvQqs7uMv55fCpsFEjCfNruEakkczsdobAGwUivc1eKuLWLRoPdoXDMrpKFCi",
  "key11": "5L2dDx5wCjcp33759zAACTZWjDDpMWKW5BMAwhpLzgNUNPVVNH2KaiSS6afiVsRCQ2MS98VgAPda4HiFFvP56qJX",
  "key12": "rQ8FTesvJAH5pMVmrnVvHPskopfAzcz5iBFyWNUzMTNUbiTrRkyTAb4ve6RkG5Xd9CtDbJarNojhPD1dLtrVXt7",
  "key13": "4MxUyZ45fprzwQY5V7Fm2JjS9qByNgVLWp2pCy4DiBrsG4zvdXgumpozjJrqtC9tgKscbTTuRtDFTt9ZMFDeRXQ5",
  "key14": "aeYk4L7GtDqyzDmuvhLCSs5uT7QHDPdZBHuUa97AtSi6QdeW75XgmqvS8eygz1Wy5L5A1fjwporsfhhoTwjubKL",
  "key15": "m1oCr3ySM5hBAtG1ExqSqkQf34hWm5EJ8vHf7dXyR9TbnfFM23YtxUhXfVWG2CApcSMHREKcsghBJ6sY1zQpUBR",
  "key16": "5jFiNhcFiiVqHeDheKUheE6skQ3YcSeQ3LdJ39gba6s5p7t47XJp2LLVxV94nkTmPpRzoNWoG1BNhJddYconCJpZ",
  "key17": "4v4cE6cEya4roH7zx5mYCa1xe75HFW5kBdKLpmsvjDiJSvbVohr8eEpVQpQnEesXzfH1DLk9uM4yoqAypPjjzEZ3",
  "key18": "agTaz6rmfPwZsuDx2pGn3fP4WuevMUTZMFEnHxHUHRVUXEH2CYWoe9P1pKsBQ8L9XEQTW985fv1j5DUGowfcgHH",
  "key19": "eLnQQBqEpLKAR5o1PA69xbG28rgd4ALByfhTg1y7gLC4vSnc2nBnwRLKSyZmjTw6B7nG7LFSuRVypDhRbsDqKty",
  "key20": "5A5yradStbzmRVCUTXU5qmQNTb8DfUyFjSJmb3rJyQTXD6pWPcTuk3PAzaeRdLwn8pvXoZdF5egLuJRpfNtTQwJc",
  "key21": "5rwaCtZthyD245Fqcs4Ze6wWs98VrCeQ9wkp9Thrdp9PCEmT3mbzCkxUit41MhQtSvQ7fG9LksN8qazZ1bj3UTLv",
  "key22": "5Rk8dzuikuoSPB6gTzDEDRn53nAsuDkAq5KgocvmXdLd4fBHtLVCQcAq6Ed92QQHrShmK5VzkURAhQ9CPbt2bmpJ",
  "key23": "4fQmjZsPchuf1QcekFRAiwf3appfx98BQrQeQruQWnGtYhkgCsf2xfR54zcjBHpw6Uk6BigUQWVypwYFSd49JhuW",
  "key24": "2vLEfQhxRAqFigdJGK9jhMauBy8EPUm7TvdaLEj6rnLpoJKejPMrxSC5AGaxRTpvZNgxFLBnsSZSVU9zQXryuMQ2",
  "key25": "5cavAbD1DTK1BCVWS9RW4CZXQzXXFZVDuS39RX6kpNtF29jCrYYGunnW4r3QoRvoEu2MsPJk2EhmzsTeaub9WAXr",
  "key26": "2YxA3Tta4dr7fBbAixoNtaZWJgDsYC1rXf5VS2VWnobDjqjMTfPfNxzXMxr7BX64YpK835RybG9n6dS1f6akb6Cw",
  "key27": "5du9J6Gm1zFysCVt4TWi9vTsWCbqptpNCmDmQMMApay3CXY751C9Zn3yn1dNGRthezyWAmLjsfjdoooZb9Hd4xY1",
  "key28": "JNfG5arv8xdeawRRWrWK6RYnRGAkfbZUZVUygGjRBrBrZ1XvP7G4nNLn2URdCao7nPKde7zhj249saziyWRSANc",
  "key29": "2LqUe4phZ4xVjNcQa2ftmSoiFwsA4MeHUFeAVitq8wk19kSbaAfLqd5ct2dMqdJctHeRHtRbMaSRbZ7K5zSUrDZy",
  "key30": "3fcetYgJhDjw5dWEiKThjSoY4JGMjjZA95XY6oeTGtokjLYQ7hB51M76dCtfRGDMzjZb3Sr4kJpryrNhA78LsfXk",
  "key31": "3j1tfQRUi4KMaGsCK92L4TcpocdC6uNxnarvLNhAjPKsiomkPdAzEXK8xf8tAbyocVzqthc52KSMVxL8HgJ8xknP",
  "key32": "2FkZQBmrWugaxvUMzxDrTne5u8AvqwroriAZR4xRZC6g8FctnhCDtaASPDwGHgbtRmKpcKazXm236RxmBdD4Sn5",
  "key33": "5qbHGyJNQscgJ2aR1yj8weGbJsoq1C3ZK6ZVfZP4WvFdqroJFhAryfQ6Tif8uoywEDc4rrjfKxvDrpQdcqDcyemd",
  "key34": "2rLsigPXmivBPdrKJnZzaTAD3kpwkD3noUKCL92zFoD4Rk2Q4ukPgqG5T6B3PVje5gxmSzGLVpHH8L4aYEVjgXf9",
  "key35": "2ZBsfUrrDr4C1x7RUDAkoiUdAsRu84A37JwhYzw21hxbL5jaZrFzUnfuDCkA3hTi3DzXiNMBbpK84DZx1pq32vjG",
  "key36": "MCy9dhbeyeun6gEQu6HYAyAiMRK2VwD6pFz5VRCyo9bSBeQ5LVktsh1VWeNxRftJB9DuwVSRPor9JAcMHKuKpNG",
  "key37": "36c8oK1CfMsjw1aULoVEV2tZCsDfYasqUyd3oYDmuYFZ6tfiUQemfG6DmKzkKtmm8jdZkJ7n6gHFsQ2d1bnLZ3uj",
  "key38": "5AiN5tpQk7i72MvJqDb8FMn8oB5sBYez1xxndwGgLgWUUoiwaXXnLa1fzPyh3uJBccsGCH57QWCqBD8tsEzfova6",
  "key39": "2Z8vrtysWbzsHrQ1kAgy9RJe2SCK9wixXokv9q5nHtTuzevozcSJxZuQkfDuKBsZP3bPEj61q2ozZRSrW9hbKbLo",
  "key40": "3qHpmY5oAtBarAkP84fxjyup1PdMiZfVadQ3AJkyRppBiTWfdtfqrSYqqpQrr7M63g8eFaCVStyxHWWdKQJKveZA",
  "key41": "5M3rGYpY9PKaauoGvy7CdwdJeoUjF2bRYoWXmAtvb2QjThTTeFiGpapVBU9PL9shEGsE1NyKRvBBUkfWGy82xToT",
  "key42": "5Fxk1s7uYzEjdc4Kv3qZ5ibtHmuMv8bfHbCB6uYyUZiDHXw1fEG5PBsG1nZW1CQpRSwwcTn7evuKGzcV9C4GZS6o",
  "key43": "5GPJH2TkUEQMBBaMMNXRq25mDV2ak3EkEvAyPVJKVq82ctm9bKcnFGqtd8Ed91pyS93G9G7TQnSqH28SXriGZF2s",
  "key44": "cmGSDX72NnEbDWamR9kj1h6hgvvVKKLGGhy7iM8meruYakGTVBLcN3VRVpNGj3qq3hpcaWwchhvKkTZbNPXM4pF",
  "key45": "54aJGzsdnabHHKxazojPsqphSn1j6eeb968DNyFfzgdqWNXrqiV9JvEcczjD9teTYSe23bxUEhA7vCB5wn2jJgdZ",
  "key46": "33i7HhS7Q6bbSkzt3reQsvQtnPQp5Kk1VvhGViBHPLhpyDQRsnyKqPC3PhdgjpLEju18sHW5kZ9qPvHGy5Js75Nj",
  "key47": "2sEdgyFSK8aRS4PtUyRDvsf7DUyB5hkTysZ4WXb3AxdV5JFRiBgSujWSeSiaW9SD5WKk7hKhujG7iRPrjtUsf4qK",
  "key48": "KfaAMgGGYxLLLu6A6dAkGmrUoVxAjYZYiPpYfm6R8aqJx1Yd18dYPLcyDfV1qBzvFShABSLZM5CkwBM2qSadVbQ",
  "key49": "tnmfexkjciebe3UvLyUwDJwMn4RgA3MG2TNbiY5hCn8Wc7aNNs5Q9HejAiUCBFghfcyKekkCpc2VxWNXkPuMLrX"
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
