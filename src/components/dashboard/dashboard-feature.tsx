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
    "x8a8uK6ZgJYcrHruJ5f7Ag1RAWUodJPJssbr4aKHo3258NaCqbF3FCU5Py5CUNGhpPoFa2Dp6SbxQcQLRDQjuEF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Yd34a13QYKd4b5ZWtihwYsU658DXj6yJYPqQNTKEX6gpf2fEmqq58Q6a3xwCrGwgqV9oCEA45YfPkPEX5drqVo9",
  "key1": "2cfkWoZnBjGNGREmXdWnmHr7BWuTng83hkWFwEK3WrAYMML3A7hpEzYP9gHogHWwXobbzsK7q2ELp4Wj9CxBEbXV",
  "key2": "4qPEtcsWFxj4nVSRS5TLTZW4R6nH8rRhtKYWokfoWXr2UfL2y6knAqRfdPPxNdeYKiPsyqJ2t76t9gtwZiVsNb4v",
  "key3": "31JurrvC1wsSwxT95VbWjsTY39Y89yNdDjrrgpkYGEeEETSoBoTZxciAkg31tviVJoVnXe2UYER9SQvCaRW4mtwi",
  "key4": "22xKv66KG5zQQMPAhGZbZ6KwChiYtRF9iqx3p9cfhuyYKsUXPuuTxiuz2eHuNyYLE6d89wTwWvsS2TQupVGzBo7D",
  "key5": "3fT3EFj17dWNRu7MRTPEeS6YkPHGCjVhNByn2sXCAwMBTRmSqC7WSo1rahTdb3GTf6J4QNHqyYFUDwJraQs1xhzm",
  "key6": "4SVbUc658AxhKgA6pAshXjNZZen23hUGvKwvhUNiXL8yTCW5DtQXDiN8etFHLQUiygttASo95VvRxomWTRrkauME",
  "key7": "25bWmLdVibQvonZZD5L66J3rMt4yRripduXqE4UY9MtxUi66PPgC273rWfzHXUEiam6bmMyh2TtxkGojVBn2sd92",
  "key8": "5eiFLLvXFMB2hwNuwdC3giDncSC9msvrFepm1nauJbep3Ug6B6bsNYsWRAs2eNz6za8kmicnHh3Ha47xHMRNSrFd",
  "key9": "4P9wAKB7N6fjBvT7whGESUvRmAMSjGadBs7R59Pav3kF4tbj5ospSxRG1xN1dy9Cy9nGArHoEgRpXetUKxArHj96",
  "key10": "3A66FaSNAWni2JfRFuogAEdvbSa5BrT6bTVGKQxRFE318bFSPror3QGMrdadDpnkzJzZ5Uvs2Kap74EaexmHexi8",
  "key11": "58KWLSjyyd7ATWU4a7aTbG6DdtXpMcmySsHP1JvoXYuJoo1jjdBoEtepp9qV4tBNbepb5Pmjb7xDwn18wEcWHRG8",
  "key12": "9gZ8BNyCiujPStziRZ9CYbrgGe8yW9KoLTFABgqav9Eqon3yuArwp7vJuLZ2Xh21jScVAdUfYQayU1iV6qGXsw2",
  "key13": "35TrXv1s2YhNTL6Y5t7BU31JyzyQRKxjtaLRdyzYeQti8epZ3ukAx7sQtPnTwcN8LticW9kPhzXZ1SQfLqkuBGaK",
  "key14": "5CLhvBCpHz5UWJtE9JHUe5BEEqhWNxYCH7D8WRz4fDFN5DQ83qNgtJnrKsRHgHcqjvpLuwc7K4Mt5iA8eDZrDWRR",
  "key15": "5QZeXcAS5pygu22Z2EeMLqgCek6b6FENurLaNuRHVtAZ2dmCp36ygQYjYEgJcFVzFVcWnQixv9XWsEfRJqRxnMkW",
  "key16": "3PHxnwRY6g8rCgwpPuj6KZuadk4VMJSV5Q3HmGUnU3woe3a75zg7Z7Cz7W3AztJuFTEMCg6dEfyzFTmoFG62fttP",
  "key17": "5v2HsKmznEJ1eMPZXPweZzoWdD6cYCr6ME5TXLMaWasGCCqKvGHVupoofx8gfdV8jQeA7HMx5ihfGE8pU3nGQwRD",
  "key18": "4hHVy4f12qZC7TiMdxuurknjyWTR3zLyFBfgWtn8ja5gCr9AG4QAuxfYjgiWUbpQsZoNyR4PoQp32qbPnXTmV6hb",
  "key19": "3pNjZYYstU8ThpoJpEeqjaEPZaxMh8kerrdNpt8UYkaPkyg5a25TRe7SxigmtFd6eh2ZJVHkkcNJw2cjhqifm2Ar",
  "key20": "4ycsLMkJF33n7eCujMkc6tKZQHaMwvBcWwvjnwiFZkzMaReTp4VZY8HBZfwyFS33Vu9NykcmiV7BjzLtY8EfrZ7X",
  "key21": "4L99Uvr7BpahmJAwTrWDdrpnoQCizHwJbjwHqowfxY3bnEhW1ggnSmYE1WWDPZMBS1hgsehyKwbGm1qxnf2uFzg4",
  "key22": "5G66nJXmiVhFEsthnzMyaVK28ygfLxgiEnvm5kxfcwtq7j7vZA3fS4zE2bvTWQqwaEgda3u2VrwiPrJtyiZG3zE5",
  "key23": "4qjdWsvhKFcd9cMVSH7pU3L5nHzvcrio9p5oHxuTZdMS3vfGNyL3G7iTozbh1y6xsSmFPdKuRtVYMSoPUYZM1Hor",
  "key24": "26mfUR5Z85i1XJh33dbG7hVZo8mmN5RPjoWANQZn6DLohreRrzfRiytbatDR12kBXAf1y46ZsNDzuP1j41U5frqV"
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
