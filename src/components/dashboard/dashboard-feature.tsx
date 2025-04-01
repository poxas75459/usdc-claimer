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
    "stmjUJri4WVMYtnXCeMiEsGrUBGAzkioYAhUvse6t1aZMgqtBahr4eAsHZJVLfLbCHn7kh61mnSo7Vh3pNeB6Ch"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "324Cf7BW7Tx9Ds4R3exnduMwSKSpmztAEzTGdCdC9KYkX3LNagurmf5BUK7exCQffQsXk4fQNoopHaASk6EVMRgx",
  "key1": "zExaBciNdhWiZXUPMmqAi9SNprygk3oc3QmW1zZXVH4yVatDf6H953DqNGCPs6vjmPrV5cJS4ViD6drtWN4xh3K",
  "key2": "42vaTDuwCwc9T8BpFwU4HHMVkH5zuTTYN5QRYF5MRByTtn2S9PbPxtUN2TCkFKEk4S7x8zFgBCu3TL9FXny2iejb",
  "key3": "5CWSMrDupgqyopxQSckztWhxTdwetebAAjX6nmwHGfe4ixdBFpLf8U5gzWpMbLLMcnT4zQZ1pRpcWJHDrHMwRxYo",
  "key4": "5u9L23CUaj8Sn7LRbNcUQTt58rzxEyaezvV7VNUEaNTEJJEapV3xC1nVVUrJqxs7PrjXp8DNhFiZyM5VZxHc8oYE",
  "key5": "37nwPd6W3ywHQZ8Sao1y8ijjbQLDEpuY1E5HXKAhKxBrKFYFTjmXoeU3pDCrfkT82w4zVAx47cGcksCtYQXo2uQQ",
  "key6": "46jVxf8u8yG3JKbXi8n48fWcQKZP3RfKYHm3wk5NRxqcvs3ZdLQfkB2sbr94hJjsgaCcBUPniJD1Pa3DzkNe9B13",
  "key7": "2eo7aUNW96po4w7px55bQXYxqSr8K1Q9pQXTJLxrYTzJbnMPVgjWoEULtKmSkgLr7VGeAuVfcvUC1cV1BubZV17E",
  "key8": "44cAumjjSVLHYWMEGoRHybGtn14a3vXuRawV3rMhGAN6AFffwLV7yrUBcqXyaCgySywE9frmWifgJ3rEbEJURX4c",
  "key9": "KzRaykevDfiRP1CZVuoQGfeCxNbcoaLsBmU1XJXrKcj2RwXdnCedswCaW7y5EnJBHoZ8KfhjhBcxTkwbBsjVscx",
  "key10": "4pgysRG4EaLdFRMe9BZq8TkzAMZrQTCXf5z6SZtvRNThd6HHwT528Y9eCLiX2vuyZ91QtzyR8C62SZqeSzA1jeNd",
  "key11": "2PXeJbVqtYKJ8PSPjx3YHXcH6mGSus3wVBZrcevPvSc2VudoDkH25ZQJEZK5yvauBCP74CTkNY36ip3JYzkdEevR",
  "key12": "3ZTGabpXib65hZxqcbFRsr7y5NtYT1ZduA53QRKYwVYkFNSTagtxL2VktrKtSJ9nUR8o3DmGXXLEcoHJH6bsKcMG",
  "key13": "4ZA9meLT7PGknRVZXjftjEsDBCMnVWeebARyhK9S53wj8hZehbN7rdPiiS99hciUcjDfx4fzd8WDV7gBZDFFCqd6",
  "key14": "3HjwJusyXZ2Ucqzbonxa6Puqtn2qT2CmZoHZuGfEkXkqtJpjjaBEhq9jzafwn4WqVtUZMegGDXy7yLqRATo6TEPY",
  "key15": "37TGnjPbs7VwQJfycKvECKV1FpDqjw9RKg6ptzaKeQNT9qBvzLsrJ6WQFA74mnj3QguAZa4BANadVdKJ2avuNjBg",
  "key16": "Em8dQ2aULhQ9uKwfgsr5EpUvsqmF1gRVmH9Miwk7n7HJhbwwjxMydtVVabfeULkg7WPyjC5Cxo7y9QgymDqkQqg",
  "key17": "4P8bsS16FixBbgHxXG93sqgYKB96haqfFjk1kHP7biazsYR3arFHFkGYWRgob5XkC3QPQ7WyhWDyKuxnshzkeeXz",
  "key18": "3vmTkP6z8LNziGzYbWsvSSmMYHfnKND4eNxakD3SQThm5s4hPRpctzZN7TqQVFkHB9xVzvg2wgNFAg2Sg2Lg8RHn",
  "key19": "56hSG9m7SZHkhsquX9239P4n3fDGMTtygj2NNteqcE31ziwXDADLXhD3HAPMGhQYAPpYG1T97USbzXwNCnmrVzNE",
  "key20": "3a4yAvCJL4qShcv9NTnV23CmRdqtRLDu5UB92cpJpd7Qp3bFH9cQDEcqJ5z1H9se6kga8s185L1q5AGAJ74EmM32",
  "key21": "Bv5FVYW2WbHRm7GaNYDbsALEr3tqgSUk7C4CacAi4bvCEdiqEJLErkuyB5d18rgDmze2p5eNfQiMvWJW4tJokXx",
  "key22": "TaS8bx7Njh2bmgYn8SJ9j6XPeHhthK1mV16T8ag1314bLDzfgtK1YeFgKyu7zwUNjPTAzMTpfBNdZw75iCsyzvz",
  "key23": "28RjGKWJ5Hum8yfx11B2CZqYC7wWWL2Xh5spRhEUUyP8PxEPYV995qvWVqv3eT4qq9EBapFaj295SjoYFcFBuMan",
  "key24": "2bUYnzUndqZxruJxvJmonxZZt9SXbm1pLUWT65RW7JHDaq3eBut1btf8Qx1aaneTeabAH7Cyw1CQk4jTSW1qFSy5",
  "key25": "4ZYBGXhddNsS1n39hhzyLR6CMZNvxxi2QtdFJopNomAmeTnKN2N2nm8su1PykARhiQyLQ9UFic9QYJRocjmc49fN",
  "key26": "4p1rKZu1hWvyomHjPkRySdYZi6uWiQWXwK6QwAN311f71WtpFNZewKdRLpi96ZmWW77R1Hg7ucHNNvGr68xuEDmb",
  "key27": "4SxsGRt8oXBZyrRsHhYFmj1vmJbm8WGMRmGqHaZCZqFLVkpwMHnYYaECWukvgFEuPdvC9ppCMZBzpGZ4TPG6vtag",
  "key28": "51tT4cR7kuMWryByzf87TEPrnaXKGkoYT1q6he1scdX537Vx8acjpnFW8WrrgD3D1nyKApcp7nhktvLPZrKnhueF",
  "key29": "2xdUnBR5MJ5NmDTyhxuendLUgY5JjkiigTubk8MP1eYeBqs2EFhHNVviEhBD4gB73nh88CazfZ8qFm4xBDWp71bK",
  "key30": "56eVwg8Yu1s9EuipJDqxPhMmL3te86XYPk9SeZptNgivfAwwz8Kc2FLoq5pTD614AQqdRMFNTE3pTXYwsewxKXts",
  "key31": "5nw8uq45qCQFSfAhULraLFWVsKC3XiocTmra4mZDvJxGHLoekhcdopDEoFrRo1Q1NxCfbNi2ohz3WCZQ34wRHrqq",
  "key32": "2XPAYtSk2mHrJaWhgUu9JZqs4f3g5cwze9RJdKcHpiYkHiciXLzYoFwYyPzu9F5EU427tzL5Q1J3MkQMQ8mkMPgi",
  "key33": "XNHhosYehU8dXxY8KTEBA4Kw2tVi48AMfQnujjtPHLSXxys8w4WpzV6HBUHhJjkp81vQPEbK1ePRyaXrWLzJStm",
  "key34": "2zKtfdDdM2bzGei7vMZmNJtsSHn7hV3MsWxV8EGZvDiapTfSCpAYGTx4nUqDrDvEJZ2q9rVu1p67ps6v9BenaGSz",
  "key35": "4b5YvuhPvwKCKq6su8Ta4cwyyytebmXaLC2E3cRzYz5vvDu3icHwrAkYSB8AoXm7E7YfYKLYNrnwp8ePiisZKoPU",
  "key36": "3GvDY4yZo9RQGQDYJyVf3kzaUWqVAFLoyCDp4PhfTxbBLgfWiEb1tM5rA5eodNEKhaq67RPU4KLhvv4tQGykpiFT",
  "key37": "4wDuJhqSE8pUtvHkjaJtLJaVWHmGpMqqVt179VVt7pEqAN2aV9bZbhZ1GgHpTuwUdiYcd8Q9qih2xqhsoWjEp6Ay",
  "key38": "5p8jMQCugA4rdQHeKopmWcYxxtKqdRNdPckyb6wa5prQmrzCYNTafXBb2zCuJGqixX66FsPkiZCtPjzbqnbWpxjt",
  "key39": "35QWpH3PxXEfD6swmR4YjX4FPQJsNcqYBmB9tFbHHBoU9qEE6ynPwSYpQLqHPXSZf1XKbpCYke1kGy1TwShoD4VR",
  "key40": "5M45CzzdtAKY8GparGfq5TcfYSPKmZKKVEEVFi5yRTpvE6QsDGMbkvvgYK2MGt9hFbtE2dNhUHqEGZD8CjehjA8B",
  "key41": "uP2k1MP3DuMVscyTUijyYgmtsKYAjDsRR16jKM2uvt4TGnFwtzAy4FaXUyejypSA78g4NbUwETQNXR9SrpP4UcZ",
  "key42": "34sfq2VzJVUtVQ9tM9ABgiP7UuAxjtcEwaqaxHtcYRVQB2y71RytREfKcXcua5vkSi57sxJ3Nh6EGRRSxLvezQUi",
  "key43": "326A5y69Y2N1mMRo1sBLpT78h1YEBPaYRnMntC8oAK8qgiK5pC3etCnkciv5Vqes2B1M5oQMrn4oxrpbaBavNARb",
  "key44": "2Db8qtbqGShFfRTHPY33NJuWnsFDQmeAHni1Kca8rbpWkqJbpB65F5Yxkq9yQDedhmk1LiCBnHcvSQxb8wUSpsFT",
  "key45": "2Ag3TapbhmLmJDD1aTaJPeuFsdczVcpdw42cYtCP91WbHeB4PQ3x9F48mgk6PJYxHTjCANRFwtjCLa2Ejr7xBVpc",
  "key46": "5oof4HjJcaNVQ7namGvV7Pu91eTTAvx7pEnj7XG5bcfciDsKFxTWBNoTFnHGSHJu9Ytr5tVj9oUDdkhoQbXwfUWX",
  "key47": "5o4aYMKhd23jb2nwqCJXe5aLdC5aXMntrPyGyUviEPcaST5sTAHJkFjqa6SakJxoT1J2yjyTskAm3V5dRjaa9esc"
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
