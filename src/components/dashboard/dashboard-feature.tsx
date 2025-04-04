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
    "4Jko1V8akxRNuJC7ymMkHsbpcfZdW5YyxfA8eKGLeWGHUNLa4UgnAcVAa9WTTzuLP4U3MFAvo1G7MKEPvHZXVPAs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vA9mX9DMWVB6MijvPrwx1H4eUkosqW7YPjHCGsY46scku3efKaACPmA5y7KTYiY73RBHErjRRAjcvvCMGhqdWQC",
  "key1": "3L72Y5D9eYhcA97TseyRoqRafdPjNBt4rrgDKBnnwMDBxdnv4KuifUWTv1yZXYeoBDW6mqM6aZi3gWooCvFU8Jfe",
  "key2": "229SMouNyirWBLWoTMSGFD8UsFyWtSdv5Xqvwx7xE1gnYiB6SJv46i7pahXFe3gUyzaJqZpu486jVhdFDJ8JN4bZ",
  "key3": "5FFAGHhGcGwWMBpnyDd9ziNKEMqY5w5md73sPa3GRESXt6xWDgp5AryhDCNrZ2WfweNr9wDVucbySy8aBUWjN26S",
  "key4": "5SaNVGxGmPZ6dc6fjbRKjqLUWqc1MGoMT5uSAj6ZvzFDGbvZehyz8vSLRXzXybeKo1xbwLuqUJ5cMi9Dvg6vgaiq",
  "key5": "522CHMk2nV7Kwwjn3eY5oKGNtNrs9gkRFEW7oJq9ndxst89o2b7i1KX67tHFwXpb5NdQFWBTf7Wk6LwwfbehnSMB",
  "key6": "5qaEMPH7C9zokW6WCYqfNd4SwvQPXrrtMJYakPw6XiA6bJfy233N16tmKjns4B131uueqALs9j93c18LvmbgY4GX",
  "key7": "fXvwQUCunDRBiCCUGyRzvJkqiurtwJJyU5UpVPxG3yHK11k116G4TrUqEHQTDe5MsbQaLGjmnQePA82wwbuvbDV",
  "key8": "66JSqF7Si6y66gbbkNDwZKXeEGrCBFCT6vRDLi6bnnyZPQTGbPTnf1ZUkFDHaoXvjX1wu3XaRi8XFgbbtaB8GAGj",
  "key9": "5b2fCRtRUE9ChoaKaBsPdxprHnkc7GfoPQigHeMf3p28Z5zrrsLFLY9k9tP7ULjdvZjrFnBkDhiymiE6vd65pZCi",
  "key10": "3sy9xH7cuP4ffU7nUUPoAX3mxnyGg3V6KALawXR9cBNsZ9y6FQQ5BUaG5G9wrDybNvFY2zGorgdz7WNjei9pYSo7",
  "key11": "3ceEswRPs8PXjRyapkrxa8nSLvM7eV5upebfHurXKCTJt4bSyzHJYB6oPUUo4jWL8RqAQxyv3FCLzdAJkMqH8H3w",
  "key12": "dVPouXSBDxzRdKUkt21Deq4GgA261yGNZtT7vv9oNWYfU2uxACvdd7PJ41LaTFmgNbkDbUS41bqJDtvJfCHf93T",
  "key13": "12A3JUChzv4wbjMYJ3jyePUGXrpvEo7tCU59xvrTBhV5heGGdnKxutooRZNZ3engY5a7tPcBQg57WP537Ea6JKZV",
  "key14": "3BQ6bRq1FkznqSqr4CcnmLvRTgc9SRTNPhuP5CLfB45ozv9G5B5EMkfPYytjHEwfnvMR7MtdgAW2hTj7HEzSyXAs",
  "key15": "3rypbDUNksCws9j3U7wbRkALAD2nq8b9oTk3voUh2PpsZmZdqawQiFwj3sf9mBtan6yrtPqgRNofAZEwWJrTronp",
  "key16": "4wY43hZUBdANZZ1BJJx1gvkYGACZsmQkStqv1YhgCZjQH6EnZJLrYwefkpdxK4ajsqhXmZtM6952dC4CJyQyf8QJ",
  "key17": "5tMw9Lbg38fufpQ2jL4DkCtDSHGzDSw3daqc16qo9kuBLzAeQ7jbCyPA4RAjWec3xhwuoKYGHvETs2uCcPgv4u2r",
  "key18": "4srGXCouiVvwe1dLM63kgJUysH5Mervk2r7kKgEUAwzhtpmKmKeG2SAoG4GD8SSuSTbSpZ5ivepM8Unqziddfovd",
  "key19": "41htEDpyRMMF3KeBznbEEcCYFjaBNDkhXB7K51Ncnf6XHTDT1bqSy1XvRdp9zcXrnAQhfTpa28o4yXBgq2aiSq84",
  "key20": "5DLvVZNRiySJouR6GK6cecCPZiAQn2hnUWykN8dsN4HjC3FyzSnAwnhDpm1NtWh37ksvFjpTK2c52f1rZSHDGKpT",
  "key21": "5kVeuQVvrpVbrHuvCUS1sAEQvKVVNCGT3TTVsE4p3KvyrKPX1Wnr6gkRcRdNJAEDHWMszCQHGjiQptCndEmgKJwu",
  "key22": "3ti1k4R3doaGmk2SdT7pK5oHw7h9VgSLrekBSK6MU5qncx1Gj8Jq75PeUC3dzeqJQHCuTo743wnCJ6WJQghxpZ4v",
  "key23": "63hSgLXgyCj2hTeB1iLRSrb994JmARBjBCMPAweM9znCLuSy7ja2C7nvLpjV3A3L32K6qrnJzPYZ4F3x6y1Q51r",
  "key24": "4Tyc4FNsuuCNKku4Cq1o7GynWxZo5c8396vApbycRGFiWn9b7dX7YTsjmA88eVeQv1Sm4QdJsAHDBTh5yyRas89c",
  "key25": "5JF8kJXmQmCinD7FwhQCwSkJNBLHErNgZ1VnQJVFiSQnHsgfktA7EtgxrKzsbc2FHqdXi4arFpBjUAhFFNAw8CSS",
  "key26": "2GXFUBQR7ovdHPueY6DwFEw9oTgFJHEQFgzzp6g5fNcxEbseCiNrUXnqDfVLNWnmnbUQq9imGHagS755pm2C6Tgr",
  "key27": "2Y5BX1fWRZQCD74GxziS1mvaDzpL1A99eDx5RMd86huxxu8qNqiKbQLx8aDeqmD644ZELoQZraYtvdjnAKCeUa47",
  "key28": "2D2SagzDqCvVSmkkspHsN7uzfguJXvrA4w1SVbDmX9cipdiAuTV7oohjkgWdbmeZknN6F3ohQuHtRJRc9196rYhH",
  "key29": "qzY7Uu8qx6sUzwUMgezeyVqtSnvH9nWfTstuigw1VsSBj3JDN6WnoxyVdbF4Rn6YbCj6UoZzoeNd1uXY3qPX1Kn",
  "key30": "Yc1m36QyLc9tFKKDZ4oySVSpxz1j3BWVGwyf5JAqnfuCo5UEnaLZ6fxzTLNJWeHJyiexzBaYHgKUkpATHRYZZER",
  "key31": "5Sa9dFD7fmVb5dhyF59VhesYPkYt3DoHo9jjwM4xpbBWJqjyKz9j3JLDU3VEwWKkbyt41hcw2PY4U54NZCxQqKSh",
  "key32": "2c7668nZpPxkkqZ4bEer45gDSRRGxYFn732jbb1xSojJrCTUxCLa8f7WiWkwSvfXLD4vcjWb8bHSKUqLajYibYGt",
  "key33": "51qQ81YXcQKz98BnMWbkFNJH5THjjZfoXvPZ7xRLZGcqrH4XeaZU13A5EZKStmrxFb9yZwZokYoKTPEhH2tBtxU",
  "key34": "2ugwskKERTLDgnvX8R86ukWDKqosiqtUMuB949M7RUk676apyhAgfRMq9YGigfTKF1mrHtQuiCcBvYUfebNKkrwY",
  "key35": "2u1JrZyh5m7LjnJnrNSAmFhARXUcAeEcBgCDVAunUaCseSSR2X9WwssfwatygTSxvJ7br5yRYhTf1cPBbNU7R3Ne",
  "key36": "3qSngE6aXbfHdCgmnFBsZjMjKvtFz6X9huFEQNjJA81kXn7RrwTRvCCFppWiJDz5en7xEQwbouCbKDv8W9XYq8j4",
  "key37": "Gcoq4u4saaAPwuwgf9H8zvrJxSmXCMphBMEto5D16fEGL7mn8fiJ5XhMhv8yWWMeuxWLPTN71vLyDwex5JTA7Zo"
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
