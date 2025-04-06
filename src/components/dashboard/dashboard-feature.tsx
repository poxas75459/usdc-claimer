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
    "z7ReoCUVUTCYKNq7fx3m47Y9omt9WmGNtRYLVL4jU7mfxv2zbFMDm6TtcErZLtzBNNZb4woPvu9DkoTGkJsy8CH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HTS38KdZ1skSPQXd6jvLNNCA3JrMgBEsjFhtzRF7kGExFyYDY2GkiBxEwMveZ4NffR8R132GKxnozS215YVi8rW",
  "key1": "YJJymYEJ7KT4BiBherVAnwRVENYsTkHhRp7w9XqiGaE6EQUMg15ESUgued3qDAS3K19VdTMsWPAosUkqKCLbfWj",
  "key2": "5tZJnN8p9xeSJzcqvCrdfQazkHb9Kpxj1GrLnjhEjiLS2ta4FtkVBFtbBBxZLisf6sL5qGKGZxorgEZ18aPeDjPW",
  "key3": "39HeYaD1Hdb9CbgvSZKqqMKrSjYVErpE2QFUqisLiwSkAWsGi2zZLcURCxoj4zaY5T9GpUKpnfw4LJ7WtKMnnN4X",
  "key4": "5KmQ2cSEjLarmjr88vFe7fDnKJLz5gFdDQLd2K1WG9zUeUnJg3GVov5jDWbaMDGVYZSaB6jHjAGiacWiG3msauxs",
  "key5": "31CQRPZa8rtQYLMcMpW8yK7r7oVXHnnsor4orsst1pQm9YNXEAsdM6frgKPgW8eqm6gqmBh6zVQ68EtkDdyWYx8R",
  "key6": "2LVZtAH4zz9EF1aorBN5wYtXX31rZaP9kELSo2274QG3TtncDBGv4a4JdajXUwMRojhDk9XHkgycYTf5fmYc51qS",
  "key7": "4FvugLQ3LmMC7irYvVoe68jcmPw9qr6VDSa5LkjDJYjjtcPwnT4vxWCHR5GWxuD1f6DJZY1VD9BoaVdChGX9jDxw",
  "key8": "5u5TVS9VUEihvcaR4dJMYxFtpNLpHBk9mAD2CM2kpvSjE8GTXtcyRNCtBKu7pV8b1GrbiURHF5D66U6JvC2KDw8P",
  "key9": "4AKNbyfSX8jxv5GRKSnwpSNTX6RZe6CXnhtZVWofdrhDsHBJycqW5SLW1vrkn4JUetgdUhCanvtQhqPJSBBBjgNB",
  "key10": "Phwo6ZsjwU3N3fJkB6wWEnMCFVuQBeHfLxseZx84MYmzaQEeNfwiMTChcPYrXGdwkoovon5xEAzq1hpQ9HvyZJy",
  "key11": "3STxyGVZqsSAR3CD33vWR4gkH9pMWSnuu7HL85t6tNRmKCr5nqwXkXgJWe6Wgx96YzeMjzyUkJx1HfcDCQM1nkj1",
  "key12": "5bKaCkEgit7LbzinHNQxoZmz6jGkq4fHeCsm2G5WahvYrWCz8Hk7TvtFWMmQ1jPo4sqYR8bqRgNdPivaqKmqJKwj",
  "key13": "3wR3X2hGD8T7KRzKGJHY5nuqbBemPUPruxJVDebq2sUf7eqokc3Yq5eeZkX8sfuq3nNadS8jiwkg3GiQHhM5mk1M",
  "key14": "5xb69dM71T2U4NXvA7a5KkNUo2jKQkgXzFdYcGCERnjU3iUnSTrUAW8XHNqUkEYBnsN7Jz5fnX8pbvLeg3yFVGdk",
  "key15": "4M2iyMT16HfJTp7qRxjExYrT788JmTeTNrWA92dbeVWjDJg9LqoQ59kDyXb4M9bkAfNf41gVpgzFq6QVomGPGt6B",
  "key16": "5F7o74FrVVLR6BxA2w1GwxcjatBSa2CbkLx38tRxgtEhLVZKhnFkzAMorXzUnRUnGpM2fvn1FiGU3Nwi89eiab5j",
  "key17": "5GWxF8hffSCAqhFLbnL3proTinAhAoLzRHn5jwWB5wJZjjzu8yTeA7dtUA7wxtTDkxxyuBbrZRSYzCHCV9kJjxuh",
  "key18": "4cmqWyDWdvco84aJ1bdxxRjAEywjMEMrboE7CNPFVb2cDCEEVUsGMo7bNwWsbysxb6HtwyFKCYcZNJLHdz5hh1q8",
  "key19": "5sATggNB6oxmiboQo1sku6FG3hmabVqPZfLaoYZhMU5zHfBNtL5zz7rNFsxo2yaYD7kN5nPXe46dZJNooFecrciL",
  "key20": "2kxehWkcdBzyNMXcFWz6EsKBAEzBqwusS5xFqrR4JaLYW1CuL26JLtfDpYXw7RAr29MDRS4JiNH41NvnS9bXrebi",
  "key21": "EJe9peVp85XNhvPVvRf7CoT7zCHEutw4Unfe3Jzm1eKYK2UrVXK6PXBMQ9vTwyHGtchs2UwoCX3otvMaoCRK4Pc",
  "key22": "63Rt14LwNMuzkBeeoLL7YDPxAWWZG9oyaTpNkhw6qvNyFDFYzUXzy1EHLZfjrp1onLwCfgk3HH6bWjAL76koS8Ua",
  "key23": "3NpgkyniQb2AvF2ViB162HBbdvwMH6WQZ6DpUw2H5xDFWSSXmo6WzcBdmKrwVTP2vZRcKu1Sd1P5awVhJpPyAykw",
  "key24": "4VTXiohGhdajjs7jxExmXUHNe2PUYW1chxo9Bjt4QgVpxG5ZX5XZ2D9DBr7bfqfpRBXdMJbtdvwWodLfnAVbYhZk",
  "key25": "5qTPR6xEKCvDn2kpQarYCb51gPTBaZuhWwvLNbUdCy6jHBbBqb6m29tL6BnVHqqrmBbYwtVcM6NX8BnBxFezNMq2",
  "key26": "5rmwc6iKQVbwcitMb6MT7Gdf1KtYpr7XYypNnT7e7WzLFaK6FXfwnGsGmpayy3xUHG8bUH9Awhqs7168NLfUUC2m",
  "key27": "4djaXWwY6AS8Ft5hjn1YJWYYEXu5KnrUtgE8rBY2GNw4abYXsG6QUkJq48wm2rTKJZD6Wqyqu5eea62nMtmyWYoc",
  "key28": "2bBrtJmxTK7UFhzU3LDoGToapfC7bqVWDZo8a3e3PMkAM6uXjx1Wp8NKGv3nUNJGdS5uE2XHcRpZY7F1dGtJAxV6",
  "key29": "3BfB8RqB7LGjpKTWEMgBAuNSHTyxTdX5PwM6EFhGFFmEj3TWyE54zK62mcoCXD7awmqY1y26zCAUPMa85p1HDwjP",
  "key30": "hny5zC77Z69RB2QBUd3xswHQqckVfHfwCPdDDFuz8m3137B1Nespru4gmtBvrmUXR8beUbJ5wtqKf112qumotvW",
  "key31": "2C2rY5dWwUR1wrY9Ne4hfHMjZWchm9NJPmALLwb9YA7kqpxRETfkhwE3rBVG3DYQM4vt2X4odvyZpNSrvsBFaYuo",
  "key32": "f4t3SYYiPfGcGL1767kJzLn84Bs1CkRq6SPjTh9DvVoZtFcBW78R3PAwid83Zw7T4G1ts6759QZztqAarFTam3E",
  "key33": "3unGuQc1Ua6KMZRSppaY9rfjZepPtBV4eVWZwDVHirugzf6Q24y6yNp35gpDnktToexyqtKSvYpshFFb9JAaY66r",
  "key34": "4RAGuqJJZXx1Fe6aAj3A4QCtjWnRvc7XX6VsgHf5RVcBfBz6odzndA1dWWDJFYbLDSWsVmR9ZWWUzLYu8jgFDAve",
  "key35": "4zNyvZVGd9fMK3jsJqNy94hgLuHinyQsTjGDnKRHTRV3FeCtW2BPuFSVgVcmXjDYJWmcmZnkXhwuBhKcnhJTVRR5",
  "key36": "5PrVZLUcMGu25SySjMQFjqKkaiqrT2UNjC5WKE7T8JiHT3T3Xa2fxBhrZVTum9Y7TAsD2G3k362GfefvdT1mwdGn",
  "key37": "2gCL1baNn48dR4urT81Y8tUZtFsL6TC6aKxXerVE1cdwwAZpbXMicG9TJkJKpbp2DuxvjSfFarHePSvugV2PRNPK",
  "key38": "2P8WwLYxLt1aAjoBEmv4k7kK9z5s2xqUebsx6FbUeQ96RryFAn3Ko5ettMujkdDapjXvFi1vARpNt29Lefqm4Hn",
  "key39": "5xPACGgzfrx4NH3pFV1YSuhLttgwJgsGCvPwP3QRNySbAEECYdXASbwZd1o3Fs41SjtVrK3kii1r7HNiYKNWLHSn"
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
