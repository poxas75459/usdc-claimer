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
    "3AjpgfUgnLYKMjN6wHQdms6CM3MkA6LeU8QKvmqaNpvJ5R3zjNQWKQ9JHZ3DLmNLwSJfzUF6CbpSyharUAG5KJtN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WJXK1y4moLxm7RaY3q8dMHzRUsx7rHBftvoGdEXWekgVJrGRHVnjCErSXQYEEjgjvQvdnanBuZBTSDCkb55hH3r",
  "key1": "4h6shT1gKWFy5gHQBwEEHxDTTGL75bqgfSZHAWBcEfuvsfUVvzViXEY2rDN5QrLdYioxBUby7G1vYgnhPupoWk78",
  "key2": "2icaDpWeqCHJKzPUstp6J83qzpocJQtTdLH8XBZnEXuqFvDMCWZzVFU5g1LLSNnUkBekE9XKwZp71eLBS884APEz",
  "key3": "2p2nCEZMwtezzYjkKvELiCHVgeVvztkGXtu1DkEUyVCJrooKvkvRK4kMUTFTBNWoNtQ7Vn9vrvq9dg2EyHU46seH",
  "key4": "3JDGJ7Drf9roKzXPL7CQANYThwsv4GPBHRhGb87RKTkJCU6NhfRCAZREEFSTTQdWfe2wGbUGEjenmWVHZhKbob7i",
  "key5": "4z1m8PuBaZPBN9tU92WfvxEqAxvwc62AvZN4Bwv1A1XeooHShK7eUKSJ8va9RRyTo2WrE4fsZAw7fEsLsir7bBGq",
  "key6": "P9nvmMNMoFghcDNwLcBWo8sS5fhsm8XncvFgzdZNNd64DcioKEzFB6EDyL5doNJy1qQVhqDhTj6mS6nxDQFv5cQ",
  "key7": "2BZAi8RT4GgcLL595psPKoaeY31q5iohRPiQRnfj2Q53vLzq8H2DKnxPWyBYDQ9344DN2Tk2dTUJEdndy63ZwLfe",
  "key8": "2kYybZ9ah61148jH61RiiMP9DTU1VCBBs6JWh96x2Zcx9SNpEUc6viydvMTg8RroaCJgDDT9YW6B5ujhyRRJspm3",
  "key9": "UhzKQQ3RueUdsqKRrpQW2irMsTKTr1o4e6A6uy6jB9jw8FTbCuZ7QPp9wfgk33ZVU7vBBA2w1Sp3AuaoVLo2Npz",
  "key10": "4N4NFzTcgRu6eqvu95tGfJZ43wo9YmueQbaKGWD7M7frxL1aw3QpySewFj3wAcx426sP71MuCyU1bb8Lpz3tmytu",
  "key11": "58kupHpDqdAe9YaUEMFr5ZYcNRYkFkDyHCv66ZFhtcRr4wogohpcPURZUWejUKx9KHDfh1ARHBjRn5MZuCSt1i9F",
  "key12": "21dq3N85ZSQTrzScGQP56APCLgFJGmkuaGjcNH2EHTegoxfrVtWWk6Pm6Y2ZN2jmADn2HkvjqKEDxhmGu4Bh7Tpm",
  "key13": "5Z5HUaczQeMaY7eQbKpPYKE8tsx5aUNsgfJMcz4fa3cRhBqJ9tCDnx8qNYFA3hgdasEqqVdTPiuuPEkgce5P2SbH",
  "key14": "3rqVssgXcuFMoBgasdByj4oKUEnBVKWW9zeA6waXwNGUmGhMpoU5pbevULQwM9K2VopHS2oPwCFoEZmeDdgTx832",
  "key15": "5rZYXvbjeKsnASL3cLh6vSxhEVJB8eTeL7g5KU3r7WXMuBFQeRxorYnrrfzXhwCd8VvYmCZPRfHzDLiDTd2VV5No",
  "key16": "kUVD4t6NV6LCmLYALf9NJykZj7n8QPJDHE6jQGNqvT7pd1cHQfMx8EzmCHGXeRN7qC17LqMG7PXswgikt4RT1Qu",
  "key17": "5fcow3Ubrt2T96k2HjXtxFfqFhh4Szs3mhvv2zVhPTiKsiUANi2nBDaz4gtF79gqpCWhCkh9gkcaVS4LqPNiWdyd",
  "key18": "51eN3RkKrmZGe8febf3pZdLhqPhgkEXoWwKRqRqzpqsM3voUWtihJdSncSx5qcNqoV1vrpDfWZJXqyMTAAkKKkrA",
  "key19": "4wsHzYSoLA5tPHQZ6gQaJLn95Sd8oFySLV9QJEEPbQxD2vwAgcC3Tg81tU25GkXmMf7bZRTYof6w2EJSEtyXMdwC",
  "key20": "v8jRzvzDTqJSEawLEPzY87hNzaAXqyfbCBFZcLjR6fTwHRUCH5i6x4esAsnYXwKjfZmdcAogpMdhMMJ9xAB4H6t",
  "key21": "38idQChsHhzyyixJ6pLjQACmttJzbEQKbKZ3Td1jFrJ6soAHFq8Q1dwDvj6BFhniqdCByFuZuBxVvysN8DdGaep3",
  "key22": "R8THFVV3mCPMYoAvLohPiLDaGL9i4UVywE6TgctdRrSkfcVQyUxZcEEg9cLrn9Zxx27ya3v61yn5JjeXvGCFiN9",
  "key23": "5fpg9p9b4X2wMNty3C48CpwnKF6PnCWg3poJ6NpcbuRd22aLbr2kAqoWxoZALLxWtinh4E5ep9ES5uXYKgZtxXWy",
  "key24": "3Vr7ZUv5kzuM1wXe8tSRePu5EAfU7mgwCVhrSEcUpUHgGKBRjmxmdT4FREa7ZnayYmXb858tASy476HgxHv6RQUu",
  "key25": "65kTCXE6SnqAm8vdwAyApBiRSDWVdruzutz3a7NpvkgQ1aKTjuG8cHh7NdDcSdcnkpQdQYJD6bkyA1Xpfu7aLbYK",
  "key26": "4yh963RZRgKpjLsJVr2GpFi13ZuTUxc122sUoyJJP7X7rURWQXmiG8PCkwS4KH2gQkgyTaXgEj4917qfTAQamTYd",
  "key27": "5FBjwMtGXSG5hvx96usk1P3EYFLgSk8xC6mQiQgpxNM534XivrhshRmHkcqiPVsbAf6yH7DQ9CSYh7vYiKnQTNkY",
  "key28": "383xyNRKY3S6EdbxNe8sZJ4j2HaChzNkaj5jd4UgtHUvJKoBfxpddnZsWwg3auZ8gr2XkzRiu8hzKtfoXkKvUSv4",
  "key29": "Dgd6FwRZW6v8rBrTKTimQBRW9gx2hcRCVs4RGdNvdD1jamPtRWBMTiCekKednZLn5U6wnF8nG9STZiCFvLmzAhs",
  "key30": "59qtyb2cPLLFTP7YRLLnkaCVcjfgMBvHHWwS7aKhnkcCNi4dKqGvoHRoN3QZFYeGNacH1iZdZEkcPkwYDJtiwSGi",
  "key31": "kCYR8VuTpBMGoc9MzrSkvYoAGPaGCXU38u8baMLiLCbWwhmkUaFH9zXsRg2ht2jX9msk1u8jtWX3yCXWtp7xt4W",
  "key32": "5XM5x2VPBUYtGF5gT9ctRAkcoSErCgnA2y2jBgtwTkXRMc5yHGMMbXkSoR4EtZS5SksSpXz6p445wxBeYXsy1TqP",
  "key33": "527b9T4oXAdegEzCKraTvm6t5ysguGZXmUq5x6BC935vUFmrvoUMjw4bCi1MZpAkRfETantNQB5cKaBP4J5GgSmU",
  "key34": "4AD1FCbd5pyBcsGV3LNLkxfKc8Vcm4wNgELziKL3cpcBWPwsBH7DiD43gAP1Hg2UJiVPfAqfQE4TmBytYuSSqSug",
  "key35": "39EHbTSWNBLNSEnqK5cW5thNr2TGtoyFhamrzHVqwEMhQxHwWXbkpCuFA4pFdhReTsT3fVB5mbNZGToXesrfbAgC",
  "key36": "RE4TZ9LBdJNPx5DiHnbiganEFVEaNGL5iWEZdd9RhaHWKmxqUutfRVNzfzTuNbfS765hEHzfDGfEfYhSUQNSQbW",
  "key37": "29xgUz2BET3soqNFZZBYuq6CWxFXJzixkqeNudpAyLtVAxfrE9RAuCLMwW4U3MSDR56zPHDarTV88VYGRTfGF177",
  "key38": "3WZoikH4wQSVtUCsTZe2rzcxByyXTcbLckDfprKhBbgeVepmFuAutVt9ujofdnBrbKqQ6REpghmRfyJ4vEc5iDgi",
  "key39": "5fuvE6RVx9Y8DEjiFPfxrNLSrEHWYo33gGenG5TCfni6zQL2Md81uBeQKKrDoHk79rWex9Hizh48eBzRRkNUZXGA",
  "key40": "31GbcPkCqtLEPtuX72b4RuQzkqb2kKqKuT3dXDVYktvkxkweME4zvt7BRi7nTeTspY8GL1JmVDEvuvWHkjgJEboV",
  "key41": "397sEUhjym6UMp3h2MgdLxoDpGSs4bh7tgavBpFHAfMo1FqW1c5ieR1oXbbXtQSNKL3QZdn3ZmufQT7JemwFcZnQ",
  "key42": "342sfr3Wt38xX2rsczA2dSaQ91DjpwnC5UtE5jZXnV3kdvCfnPDyR3meUXDAkw6HgpLVQKKVEGTUiQMV4cnU5xc8",
  "key43": "7Xf17kTdwPR2mTNGnEeJintzSe7jh9MFZXWGq8xLN2LMfnrJU9e6WGSdLbFbEvTPLyZvghEYqxTWRW56G644wPF",
  "key44": "veDUSCALun5ZCAiqsxkeyR7ob5YU5s23HwgJho6wJdppaVsPQqXtndcdGh5JJ2fM5mkz61pYwd6SeSHbJdXAQ39",
  "key45": "23UD4Uf8wTqTpsmWvG5FxUHHV9QmvECZikYvnSfpodo2bdjVxDA1VHC8BFN7KfZ8P9N91aSxtEwQ1TKtdKpWbLV8",
  "key46": "nY68x38k1enuJCHwQq3DY2otJaJx7962G7hYNTRSisrCHTJSpExoWBAA2SNX8rxPvz7qXcupvkHwGWdQW7TyTqp",
  "key47": "4gCpyVwXoXop4afcWaSUPfXFg5eNbY8WXJgs7pehMNzV4hEtNKbxubHHDMVLot5sezVzjFNaiBW89a3t4VpR82Cy"
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
