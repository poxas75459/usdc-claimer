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
    "Umc4H7eyM4AJTQzf7SAVo4LYWgDSGjQfMYysUHXH8Wgu9LCPpZRbBRFqxvQJFxGmiH4nRGG34HorX31zaVQWc9u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pmE7Ui5DMwJxvsjAGiCenyao5yWVeu2xDKxjFi7HePKxUMUU433Gs5UptGdSKe8NeYo1tAEUGWRsiX9SrBc7vt9",
  "key1": "5gg3HGUZ8AGqm2MW9DzbGLWzx78pmvaVpMP2X4ceXXrwRnurHnJYmNNdcRjxAauuPSAmKinT2LTEXYSCYtpcaA1k",
  "key2": "2DtKcsBXnezi7gedaDEWFjXn7drAjwgfV5hyaqbukc8NuVgDKrXGdj62cE2w6NyH39kVTb3oKBhyKDwAPTVWJjtu",
  "key3": "35Ve8rfuuxpxDR67PPfLRti2frqt2iYzR4pxfQPzA7QMybEm83PFx5mhrwYcMnE5TpFhLSHmp3U1goc7Kf3S5ngw",
  "key4": "3Fna9Ej3DvdrNUg4YTjpohzS3TYQEv4qCgc1XHSwEz75hZE8SSxRD9rXBjFxJAiBnLCoddFXZ6r6AeNrHUrmupon",
  "key5": "4ByRiZLpNUFVbq7YdkDbNrZjP7baDkSPNEUTXDvLmFCuSBEVJZT9sDReKAsT5EAKWxEWgq9wrW4zJCutwtrzkGLZ",
  "key6": "yAcQnQvqvVRe72zGvBcX9F19yUVcVtdgufYbLQqsdTN9PKoV6WqJmNQKkfgTWLDJKCFW2CL2qAUe7CjTrFKnZM4",
  "key7": "v3uFtrtcF2evd8CQvJj53p9wzZnHkGHEx3GXLYyDw33UyjHhveJJfxLBVZXtHkouthhzMLb4PzHWUnY5aG69bxi",
  "key8": "c8WksYrLVjemUsS93swAn4EmM969iKugcAPhFKqySgpXQmairwS5oq3dzuSsqJeJkS8q5UEC7to51Z7u8zcKzWW",
  "key9": "5jPz8ubqTYfiT43AdipQhmtcJVSH6vasP2GPTLYaRzN6Mmpkq6wws4QdeibLxMwbnaCmAgGHMhidTvbt4uUiEqqv",
  "key10": "3jtZxEpbJMduvHpKr4GVX3jJwvHsK8FHqLGt3nM4CQZ5AgQj3BxorjqxugSsRKaAeGcgWzUo2DdMXuM3RScUAnxA",
  "key11": "4Bq3gBJfYs2bFjAh7Cr7eJTddH4zPbTJbChZboZpoNcAkRHvGr8gYDQALe32ZMxjcpHonAjdwCjYTWnq77nMfEgg",
  "key12": "DecsVWmxjPT9H4kPpYzgT1ngDLgtf2WaSpecTwpKVJG8WvAn3c8oodwGbzjar75fcNqfzCYgwVfipQ6EuXPypWo",
  "key13": "498oqrnTY86xmGxDbc9EEWcZWX8yW4rd3NATCYM3bh65awXyeS94fefQTXjvwTL671G5o4zRUgrhux2ZvkDTVrHJ",
  "key14": "3W3Dob9PwfCyd3xgsWbqzUQKPyxBQzQjdkLLDsR9Hrm8SAhPkytDv1trqebE8we6Jbg3LsQJvQT5ythKjvNvGmMW",
  "key15": "rgQyAbVJS5QXq7fhFNruJqFEsEKcvZdNLHrBMWhSMKRxEQPiVxPLWZAA3fbkCjAZxSaKhRXsuPN5mton4xtkCw2",
  "key16": "oVZeciFbxTvNkvkRhr7dbSMPWrxjV81Lw7LCMXYVSqiA6PrxCeGooceo4aJws9VGy4dvEpQTfCuv1CW3JMzPG9N",
  "key17": "2M67spCyrsC5sAk7StQVwiqgaUAT1cgDjJWiXsbWtB5uywmsByrTXHbJBQoxbFYrbnJaRyD2UoWLWYZJh1ZhTanM",
  "key18": "5U6NZgYAhz8s4E1oVXwFaefG7w8299ba3avNBQyVpYRpCURG1XeVJj8WYJACnfbevD3PsG5BEAGZ1B2naaARtPNx",
  "key19": "Q8UkQcpJoLZKPGY51EpdsA8w4jL42A32gK9JMTHhnH5z9o9iMtbb1YFatWo5DS12rop1KUf1kC8ZTAosLb3mtGn",
  "key20": "5HsbY6qcrHM7UFZDFAqYyfKCefWxZ5CxYEggB5TbPgKdaZu3AKQcDovPJxA1HHY2YE8bZqW8SBz9T443Z2kNm3a",
  "key21": "3uJQa1GGDRa7Q4ZUqNMcNst8mVPqqifvKqgyh7URnAjD2pF8WJKP26xyPLjMumgRNw67aAHXUj1M2PdVWyAatL5C",
  "key22": "2AWNcfeRjxgmTWrnMEcRfkThLrpPZ9dahXSQcvMNvDz3Af8oJEnHFCuWym7uBMzLeiL9qQNFR7mUXpXLV9ApbC7H",
  "key23": "2air3hTzpo8TZGLq3WBu4fBHYkPY3gcjrgzEj6BKEz3RidbfZBSDDBPJ7UpMrdNkGxQqtZsEy7VdJjRfuUiDiiKf",
  "key24": "2uibphA6YbkKVNvqZf2u79Gh4U9h7HyYaFmLsoB1ryz2cewzShQJE6LjR1QuCRoMx9HgeVwJ8GKVp5QuFfcD8f4p",
  "key25": "a71uuYxhUvVRGbVfpEnjrPEFYogQ7CS3Vfk8NHsfkBRFACMAqh6KyBs6ubnJ6hLahnvxPJBwsLngCKPpF2dn9Yn",
  "key26": "m9aR5LeoAooCZy391eoZ2htiKCRqKdmse9fgUHpQGRyvi5aK4NBeYP9YBUFSrok4PBuX8Rn8npMZVYpjhJUecZE",
  "key27": "5m6xMajb2iQdCXAxJM26SMNwHngNJ2ZaYTksdaPHj57XbQTi4qmydGA6rWt19iWubWDG19SU3fLafYMssuWxhJ2i",
  "key28": "4A5NdgXSf3p3y4ADAtevPMHJ7vGaFSRPG8AkrJSMDr4htD5p5tJBQSJSCuPR99jvB4imzR9aY2fbWS5tf7t6tkhb",
  "key29": "5q1SsDki9SrcrdVu3yhwECr6JykAtbDFgvCH3GznAxwhQqLJCdrC9wKz7APKt1XHmkjuQHEix81iiw27Qhz3f81X",
  "key30": "6NSmnewJSpfxtWrgH5jr3wMRkrmTaKd4J9EVvgXgVRojBJWeqiuxgNyqVfPtBY29BrqVK2JF4i3DHEmN51ekjGG",
  "key31": "3Zmfw7unJvdJ2VchanbZu6gEjGuBocMnAHpkWxxDCGHW1MWE6kwgdS2DY8UHsBVkpJ1ToVj8XTeWVNFMzgfGbTmq",
  "key32": "4LoEQLsyachhsSM7MtJtTxhUmgPHrece5FQcQX1cYcfUmeLnwj3ASSxc5qXTkjKxmUvMUhtcg8iENQcK4iBrLz2k",
  "key33": "TNPDNT7kV4T4dRtBWvkrG5rxCVUqFpuombFu4N2fbtjCTkdVxB8iUc7GJnwjsDZV7SdTHaMGq1EY8f4A5kfPwir",
  "key34": "2nwAk3gXpWVjrSe1J6UgegbwephtPrBLXe43K3nudQRM1TY2MuiGxDdfCPDB1aQjKKFxo8GusA3HKi9w4ZCPfsqu",
  "key35": "2PzfwPGVQ4BdDxMBMtGbUBF4gDEMQLo4pPu9BjPyFfVWxcD3gFQgzLRfsRD3p48cYo8LiL2MYHSRjzwHcUZstt7a",
  "key36": "5AYT5sfHxtR5JToJLPZAmK9nmpKG93e57XCF2SaFAZ16ZoDVPbBQVZcXRockSH158YJmgwVDduVxkxGcFGXd3Gww",
  "key37": "3QLtWn9kAk6DJRmB6gbPKyLcng8NT45icriZ4qgRRQnAja7PY8WJkKm6axnD1hSz5vZiBm7mZZKHFtwCTpyuYoLo",
  "key38": "2QrQcJWbgPbPGWo4gqBRapUX1ALh7PmueQk5iSzAzrZBRyZbXVjA9z5RMtLJUAB3nYEo3nPepzwqE3gAVQJ7tCji",
  "key39": "4yQfU9MEkyHd2qbgSj75SuFmDvmtFzbqkbm4G8xZXBoycREC42kQ8t7J8ztW2iABpSG1J8Bp8586j6FPN7ewzf36",
  "key40": "WGHdnd5QpLX2yBXBDRUDaRGcTXaygQBPcJLLofzkFpxtL9MxPcnY7bKCLefxbxPZehNyweZkSxqdMkNknkc6eM9",
  "key41": "2pBkU31gHZKL8zALEWyxhNp5bRtrDudifLZ2h4m54pCZAPc9rX5bH8qWvmRtk1eTZjgheMdb2PXmbPtY9FyXTCjV",
  "key42": "49HXMLTdWjuJ59zCNK6pgoZJTYB9dMy5fQmfkNXXcNgF9TNiEjGft6BatgWQJTvzZbZH6C2WTJewurjqAgMy2HkA",
  "key43": "4yGuewS7W7GLnmo4Jf9s9sAnKND6wQFtMjkCQBjVj9q8Ttq4XnfwyCVqm3DVs8PNUBVAqpA3py1hwtXtGCcwz3cP",
  "key44": "5yfVt4H1bT22GLUiZegGS6CFwEfwoFsvH2zPNvTLaSxZ314PNi5zWgbwGDBusubGDpNcv6t6ugC1jSPwnmYJumx6",
  "key45": "4zz9prM5PJqqYNQsArLNa91omDjQdH9auizKya4MTxEqaAQWz92Dc8F9X1oUpzbkoUs9VwPhJ8S7gtS4CtUQu6tK",
  "key46": "4DANz9MJ3MEk49MfddEYC636BRk2S5qtYrVd3MF9SZmggveXbzVo697wAiM46zBX8Kc8xVTenah6AUXfCDk7pLtP"
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
