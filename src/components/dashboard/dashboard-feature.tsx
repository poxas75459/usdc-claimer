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
    "4vSaub7eDPjH3iiuYdat4xGh4KGumGVj9JeoprPA3tiaVh6TxovHffo6vSkqnxS9W4p2ndsVpXsEyQfhSDEvnhqY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n24vqZ3E8MjNyjQcTEkyLPkzyBxUYuxt3aKcdZ53cCR1LsnYLZp6ugEWdTSLA4c8wVf4jZdcEe5st9c9Phins2S",
  "key1": "azKMwSFkZvPk7UtrEDB3MpRg69PVfeTHLqbTTCW3TooeWtCm8jhgF7WCNZhJzHL5yD5ZJsCbmxgPRr3zEsRUo5W",
  "key2": "LBgQyQ8C6UnPegeDz64ypb4RV81MpP6GVagRsBXRhLTu9Dvxjyb882kAMwtgwiNdfbNrGn4KjdGYh347vPExcMb",
  "key3": "oivmT8avKgavXc2qjksh4UfQtmNfaEYsgqWhBnChg92YrQgRX92AEfD8PC5LPREBcS1gq88qsfeqnyeFxvPrTSb",
  "key4": "1GzSe26GH1TQRMszEDzVUutfhajvZJWjLb8SxgJkZ93VcD3dBQc75pJcywHHGQSiQzQEqpLdLpEviCw3tqL7CHS",
  "key5": "3V5NcYjPLM1m25iTr92t5PisYFzFjpSsx1W2kNYxtKuCo1hABGuEbbweeSvmM42h12CVzdvFZXuvzCxrmBZL5wB2",
  "key6": "2Cmg3utRNCZxEP8riyhHpJpP29VqoWfUDt7t4Nb8Ez72C47dxa5XBkmns9TXep6YqaoPv9bjsUr5vp3BBBBQtKcQ",
  "key7": "3bYxhTvY2AkqRFdDLaoWeJ1sjj7gxe6S5zfsqNrMf8PmqZFDR9FtVDGWtCkrDDxjdynoFfa1JKJY5WjRU5S47zcv",
  "key8": "598KKuNnnJamAwxngiMDSNnd2Lv12BoJwP2pNUq2dS43pDugu9epTjH8wpoU6jfSpMReegPpa6d5ajr1LGGtgtmZ",
  "key9": "4nqBixWEJudcF7NrK5gZhV2XtmQhq1xwNGcGpeMcphPCPTCCJfqNeG55s6cYxnjxu95TbyiuPzUQv8Dp51ihi8CC",
  "key10": "3o9enEfXWCZfBiY19CYQVruiFYQdeR21eSoEYu3H7iZrLfe4ZLjkQnmkfGAP32QxahzbYDnF5KtKjUF9gxevuH4y",
  "key11": "3beN8DtTVnLWvTgfoYr8kQNbLKUsP9JdZC1HvKt7wibN261ZfhXJgikxbeSAVQqdvqStjf9SR2ruviakWgtLc9Ak",
  "key12": "2vKwCecH12X6KGf7gmCmQsZbdup7J7C7Kij74Me9ktkt8phXjZFJCURNBwmcKpGi4LCi5Fuw66Zyjmk4VdRv7fKE",
  "key13": "3ZCTvTXwUPoAFG8sHcbKxGMWjcJLNLK544knn3NdDxCBFf8cMZ2q3jBE7DgEwiQsPDh8ZRYtAB2kasYnkxruYNm3",
  "key14": "3y2B2TT7AoHtgKbKNkbpxeJBFeA4edQLG81F7zw28DxEKKCFLZDstUfmRpSFYQqyTNH2QsCBEiDdPKrNxyRuPb7A",
  "key15": "2Sfsjg8vdcieyAU2yJ6vwHmHfBdX6Hxx1kLnofwBXAvLPBKSemBWU8AWzTDD2eTe9Rqtci3ZwfYnyw2Wgg3J8ArA",
  "key16": "4fn9qhuV3dj6edhJZLPccc69KV8a3F2J5MJWcKKin47dUmLPFMYkzGkWT8JWhjFBE5XfLPwJS63Y57qgBUXwi3MW",
  "key17": "5rxbtmDinyhhpARXgUA352BLDJ5EKz3JYBAcsB9DZ9Tca8nLHfW8LV9DwpPPrvu86Q5AyFp9CJC4HMYJsEFmMVxu",
  "key18": "2AVWWRzV28ZXmF1r7MEfeYtcTeyjDvw6BhYQcdvBAmdDM76myRCsqkjSxfe2xVrnrdgBWQXLaogds37rYkTwaQ17",
  "key19": "3zttyFLi5zzFoevXE2XMyvPmpgGBxfVE4NTwJgMxUYYRY82rRzNJiS5VwPtbkXpAcSHXekxWrusYUygJgeiBET6R",
  "key20": "4HP8FzbWinzdPBK3F9uytDcbmfF3yyqTcDSqTSo2BZy7g4UQvxfaGjUwTdrZhNQGTK69S6WAxbfuseg3oQEcWEyU",
  "key21": "2GL37Z2AxXw1UCLisJzCaPyM3RteUxfjHD9f3BcRvnbB3B2ZiGVz9sBVuHR63y26dDVurDoNYJWT93KBkPZ3AK3N",
  "key22": "uW8MviAacL7qukQeVbvRHBvMMijJqUEdBznrqgoHqXVJPxmbEJuZ59h1D7dunBTetZwA96bgixnjE5TkNRuNc3a",
  "key23": "f6s8TQzosvtXz12MCJi9LbHUU2YGE3NyzHbZ8r3Gj53hQzdX4ZNvFscjxYNf4ksAetnJXRr6eE2pzJhyxTQW2Bf",
  "key24": "3b6hPszbPXUECgjDckvVgdNEgbDDs1cokUKmyTUE6oREzSNJnAcwHKUWjwwVCwLbgpesSuMZMuZgsgSjjeJWbYaD",
  "key25": "2Kr9QE8nmWysyUQZ96poS21Ytd9KjQ91PAD46zU3JANpsLatrdCazdWvkvx1tKPL8iQ5p47zG69bVKGsHPshutYx",
  "key26": "2usnh9ng7SnKzFBGEHEPZkWHqaep9Z3zNsYT4deMj8NRBnfNxEvWLknMfJrYwJ9PeQ4dy2xKwnTwMuq2YKqgvxAP",
  "key27": "HbXtr2rPvPouVKGqH4QTfov28Mnc9gRapYskBcUsM2iVuM71yRegdJ3XZPXEE9ExftBDTTD2gaYi5AWipUPwxh9",
  "key28": "5dByUPqyL9NPucugfZknZoVwu1kv6pu6hy4hkxzyHqrZsAeNyRLtbbkT7AaiTfK2matu4B3QrW1BgDateDXvihWm",
  "key29": "27xgczfhaV2AnLmwGz49inGyZFwN2zSumn8NMvhpKrzkNeevthg82y24pb9pMNid9M27Pn5KVBdRhy1L42VDYvXa",
  "key30": "uXjiNV2vevtZDWoALemJJtXBfk4HaFEVWCAMo2HZPZTs8oy7L1L3wof1L4GqqiS9gzJjJ5wnxQGEUA5GkVdH8JP",
  "key31": "4bQiYckNSVBKDKwvdRjJDY62E2skKyeybfWvRYa658ZjkiabgL3LmbDAZvjyBgejRd75FMEvwtuaRXph5mnLKUdY",
  "key32": "2w6XievZcZ7AWbSg78GRrf23EoJCwWZRjjXpQD9Bqx3mfnLeEdqpg7hZem88kqT7qC4RB2wCe83TDwcB3J1T8TyM",
  "key33": "5xBPVDkXDWyW3wZQSjhxdG6F57M9y6SJ4B7VDmKP7u1fS7Swm1kBs8ZNdPPq5HXoE4jPYLJPtcw484i66pCMyf7Z",
  "key34": "5VwTPLzSpqQZESnPsK8iZJY1k4nodhTs4vbMMfSWdj83BW21vQ63J5nxFUeAcpccUnNxmHmn3Ub37SadFov67bLu",
  "key35": "BYmCduSxEU6bfbiZ9Am3r8tzyFk36p8bDmcvakVZgy3Q87GmvTWdpxWM8yAHd76NHQfMRv9KHUSWcbdZks5Z5Xc"
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
