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
    "4BP8DGQcWmBcQcqijPSRt8MqaMiKPBJMwws4H45W6HGszYerNGF1NnxxXg6RC7a1a6MLBYSmB7Higq71GW38uT8H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61LExrjqTaJ27Br6dT1NqumEEkban8hzwLHGrbUCveXgkBibq39Jrwwwtez22xXS8gX1UTVZfra8j2cVFZwn555Q",
  "key1": "3QpwZbxA9sPj5tL4SqwTXjFL1uBDEiyLxoxMHUQjGXsoqhSpQbgpb7AJ75fj8uwzPPyiY8HgEF6vEA3c4jrKqXBy",
  "key2": "31BCWs1zCBn5bWT1uz7jUryVrqfmU8UMmiapLGnApFwtLcubdbAQF7rbhgwE8MvrCA8zAvUgouFWh4DovrpcMtj7",
  "key3": "3kewHactkknFRDFuKbMGqpcHeLb5M6TFpmDVa5em1ntGM53zu3MsNa2YDoD4dZpV8uErgQnnEyH1rCuioDj5N41e",
  "key4": "4N2e2nhWrELYyEisXi1JE79ETTkwxi4Bquatq7b9QLaNeVwS72xd44wvcTbX8T5LRdoWVEiknKBtbqtUb4rDA9Nw",
  "key5": "4nvBfmR6wa496gy1dhRyL1GaVDK3uP2hYrMhcGvPZxqicre8aEmA2tLuq85K6QATjmH8EeJBVr94yvwRPwRiXYso",
  "key6": "2qYYwceof7Aax73CmFPoJfP766C9zth6ghRETT9A6jzV3wrWXy4mrn9HSHgKGP82w3NS6qdSG9rU1w8t4qTzZDbj",
  "key7": "2LsvhiemAQugdLEvURTafRX8dXuXfqUHU8EdN5xMr6MopKjb258iiGQhVEiBU2uey4yATWz1fCEYnZSGzDzHeuHN",
  "key8": "5TSavrmMUtmtwvvGwT946dMYRXF71Su61A1EYTaCMDqwm8s961XdCa6cEuVYwdvmWKHouTB1vreuNwwh2czTwBRw",
  "key9": "3bUFyPesF8iUFZ5i7LJ6Hf5E5XtH85okdQoh1Gu6eHY95iqggdc3Vx9tEotREhcto4aRXtiYGUeMAuhsyiXcNe4j",
  "key10": "2PF4v3ShVNoKah3TQnFkF6rkvucKoQfAhPAgWYqCNFyzmzubKV5YdQpLS9Av6vGxNufjxAwshNZkge4pz3AjCRkM",
  "key11": "2izXcN11KpbPAmmM1dTzy7JpmGLX4Kdd7MDQvSU2bJwAX9y1LEHJCLqLpgspYjy6GEPi1VCFnFbVuTQEEdX7mvYP",
  "key12": "3KhqgmvS2gVSbRe3aRwUekwCQs8H66uPq4NBYfUds6t1MAoVv63Ho6HswwWACBrk8WCgVb8cGCAp6kqqu9Y7B5xC",
  "key13": "4pxunVsM2jEdzmAYcW6PPojFgTV8hGs1CQEGhco8TApfemwKAM9oGemH9oJspzYpRMrSLo2BtveaV6nWMEttWZac",
  "key14": "3ThAvw1H8bdMV111HmMwV93gwtYt16L8GJyUQXfBeom57pAXnZi5QJbi5tvwQb6QGCiSkBEbnA3UckRyL7T2fwFF",
  "key15": "5sKPLjDgFfQ7Uq5vfcQqbCqfrgcKSUj6F3MxTNKwQbQbtDyw9mk8FJFB4Qq2pMUSFmWgs5M84PkXzcmC6h5EHoCc",
  "key16": "2nsS4ycPhQodMxZ36sVvt78HANr51nKHBTL3U3yEAQNsMpdseqTfDbRy6Q5SRMJ1C2fSZzhrq6u9ZREfcHJKVQbG",
  "key17": "3XHFyUPfMQKjxk3z1aSSZSUsrMnuDzdZF17jRPVTUuZdMjYGcMXPZTgLiY3MnGBcJCicuP4GoFPayBeFsRpTRYyH",
  "key18": "5q1sLtwjHhrtqajM4bTzQUBHN8sVDULPAgmQD3UvcbGuZjse9iY5WNo2mzYkh2UHH3Qc1QkVbQT1JrhCASC41Et7",
  "key19": "4hqhxXdUWgBunDuocSvUEfQprut1zUckkoJomQCk6AuypcbTqrzBhiKxPK65WDUJDSGARjfQYPdo1wRTSpsuGYL",
  "key20": "5DjNCtPP7yKPrKSbuNGpUYQhYFrQk8ykQfBX3T5iMSQvqsKFa8ovUPj3ZrP8vg1taF4QFaKAzN92d1uUooCs1SSu",
  "key21": "28MWxY5BBJy6K1YgVe8UJAtBALFWh2ogkYPTuGhsQToaCfLPt2tYohPEw6MJusQxwdGizcmNnXuAmwAnp42gdjVT",
  "key22": "26VsAkS8kwCa8ijepDM8CHBWGAWuWFD4NRqAa3wjggA4mAwctderhbr8S6WnUKKjos6yeXtTVY3iQ7iM8hD1C1GB",
  "key23": "2KBtEkDmdaN7cJXVBLzwB8TkkyF8QZeMWc75DESbyrDmjhVtdy6SmzATb1nMkdBQEpDT8pKzYoK39pubU6RwaQrg",
  "key24": "5hkz6TFPhJg74BMDvRkeSHy5DphcL8Z6YY7zPrBbM7En5EgBZCqtfG4AbFa5y7d2RgRWeWWxnzoZRrWAfoknEDYh",
  "key25": "4oKpqidkxWtow5TDtaNNaD5yq4Wns7dgvgcWTuDGZNG7c2whWnnGL74HWFkuj1aNF9gjisktq1Ub7DyKnTE7FEuA",
  "key26": "3NhP6sxY9dZsxjJAYqEajzWFiXG2SJgbF1eHNiD8yiaNygr4huva1MwJpoaDKSqHkNPKs1DDb3b2DBzstCX8T4VP",
  "key27": "wXW2oEdYcv2Bc5XrmLfv9LnYZXZLE51X3eYSLwkAGQhWsvYCurPh4SSdqsm47ZauHWa4Uf9icMsBUPrFVFUVfGi",
  "key28": "5FEoMqziUcPvDJJfHGcBuJRfq6hL6o9u7DJL6wHesrpBY44prQ9bYWEJBPEQkisVy3ogEAfNXU215EKy5ZJRECvZ",
  "key29": "MNqBLcrxkgbxnRSWyrD5xugmLBSWFvxjjUhdzzhryUij1UCs5nF1WxZf1eSHj79sEuJkTBXXePpR9kmCYXyuFsW",
  "key30": "59X9wQi9ShNw5uJwiitmAyH6WpyHAzUjYwKkH7Vm8m3owhWgJRFVS7doQJTGsH5rv5nzoqAb4sLP2SmCHtRK2abF",
  "key31": "53QHMnyVw3P8FtDymTRBqRERV5z8UNz6nLTouLJ5wuZXjwD8YLyUqZJwXbWyPEFK9QnX7tHUDnf4yLE4LT7Cfsiy",
  "key32": "2rAZnRTwswkLmNwUX88HAUwffNAVE5xfoaPvt2qS2DFMRaupkjP3oQDLCWEN3zWJqxw1G4pF97RSiDjZHVazA48T",
  "key33": "2sxwcVJQi6FWPLCwcTTwGBmaN9YH7oJknaynZYsmNvetJDhq7GTRJ5uCBHG6vRLEAHB9ijSSPYH2F26ppzU2Dnd2",
  "key34": "5ytXfnxkxArudNAXrY7PeLn3uc3xqrf8iFoyUetFbAi9QSJCW8MPAdMY7bQBd2vNNMEKJaJUXGcfcTWVpsu2XmFb",
  "key35": "2YqNGPgQWeff3e2bZZ25NfbRFDigXf6jY7ifB3Zk4rG1XHbaY4Bs5icf5Hs33kHWhDCy2QodxnUtE9HEaix7vJVi",
  "key36": "3qZsGaNeZkw2y2WUNuduUxpDrfTehUkDamtYZdp8K5vXRt5NyteTayMUALKgnMoHAW8oofTWBURUWwZNPjavPqh"
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
