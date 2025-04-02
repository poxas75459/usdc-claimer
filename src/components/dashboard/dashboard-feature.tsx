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
    "wZC5Y43HhcxoxkWfpwrTChofeDYHzbdnvtC5o2hsdfVxKtUv9Jz83z7chDAmdtrZ87JhkAuvivs8zwaKEpFJhdw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UnJGKsB7audN2jqgvnXhsLrGUH2RTT1Jnjb1DHsQ2SVxx9sK9JLXcJ5ckR5xYeWGpk18hXpKiQkjDzDw2Qayr8t",
  "key1": "3fYQ8LWWLSzo18YUZfFQirS5x9CLvRu9U1huTm1HcPESniyQhHWssyg4kKprHec5WYLPPk5Ea4zns4esataHoP2N",
  "key2": "3aMcxCT5n4G76mXm1Xa67NHLr8xx5Lsb61RdzJ565oNPAPikdNo73ED3VEEKEkcogPHTQTUgFugqHzA7sqpTmj7S",
  "key3": "2CVKBnnspaTAbNytvnnudz3AqCaGN9hY4sLct2nFKdtQHdBUCbCXDDc5VbbA6xh7Nuggvq274HjUzYeS47cxi7gS",
  "key4": "4NvqXoBk4ZM8uhcTw2kJ5K6LPsMn8kaZPvgkordXcDLmx7fqHmfPE5ngpoHgKTWzxbuWRsXmTQgrAtxeMuoHmvvj",
  "key5": "2yhQkeXs2bWbVyehCHwornQG6Swv7M8K4mcgyrfoamRWn5NATP6uU6SfMbborjZC2W1PVL8muxs9gzGNJCF9bHf4",
  "key6": "3KMXSN3CQ4ShWHLo4igQvu9Z2o9jZpMLxrvBXeP5AmbkRGr3TpVGVcNdgULPtf25U1AJ7vfvLkE9XN773UN1Jtn2",
  "key7": "4CwhaBYgfGZ3rDoBpKJ5WGrmC2HXFHF8e3jg1qoeoZA2Qdvax3CEWedL94ae8XVX2m7ANGsuR7b6CdqHX4jAxxp4",
  "key8": "2D2t2FrcCN9d5YgprjBL6dQ6iadWcQFSWqhGUaGRCqUkLhbkwhxdKoywYkBQMgduNneV9ivikN1tVMEM9KpgJPTN",
  "key9": "3mkEtCCbLffZn9Dff6zTCJC9v4w3R61Hxm8Bn2zXyUQkHw1BGNWf2H2ztLdrJfKngKeGJDtBnTWQwYmxs3fjnwzP",
  "key10": "5Kzd7n8B4DHsvy46n9f5p4WUQrvBNUvaAHFngMwiU1RHq1mhJjcHuqRr8Bs9jUHM2TjbueUpq31nLjHehxJVY4yY",
  "key11": "3aQZPDkStaQFkVb8z5xzqnrvn61ZDZyetFsiBAL6egJdQNqiYiJNYjpXsVuYYuc1Dei1mmmP84NHV97SgLwW756W",
  "key12": "33SiugYZkZtAbG8dCRxy7C73eyNreW5w6txJQD2EfkeB59RmELfzYAJSuDuzkz9JMhd9zy4NTFxoHycoYXdprshX",
  "key13": "3FP7Rm7AQ1QzQmaBLmWUenZCn5ZmveXfeGEXkjpvfpzQ35SbNgBkVUQ653Y9PhExsrff35ewzo8q1ESdUPEANqQC",
  "key14": "5VtkfL6GkXiB4SeA2dzi2XWTH9HaUbdQVLhgtWURr7jeXuEEg1tX559zzejkXwMLq8TaXzXG4sSHDnthjTFAepAS",
  "key15": "5yYGsvvPK8yHE6seTkrtigNrti6sf59NQhPjLbMcVSLb3qYmKBZaH5AayLK6fq5Aa27xVRL3UY12KGeJ88JeJ7wK",
  "key16": "3eoJyyyV61HVVCtczyaF8W3gQVEJ2VPThHiK7GDjvLijmmihFJyEcGLKYpZZWF5YGQEWPaRBykeZLq6v3j38cWPv",
  "key17": "2rxdircN7D42Tays8BUKJbmb3mJySu3Kb49XK1EY1GhnuwSFkFGaBEF1MKVYDUJ69Xi1k6eBKwb7ZXGjm3su6CUx",
  "key18": "2rWPdwyZu3rEnNhpk8ixSChJMFrWCHUJmnysPF1T2WtUGReZWGjhus5u2wqjruqND1photuEN2Xy613mjzCDqdWN",
  "key19": "49gSDatRgjcJFsPx6P8Dgc5LEJbrPc7Uzh25gDkM6J3mxp971XxReMD7VkCsDTHcdJP3NG4dG7bncKx7jp8BJiho",
  "key20": "upreaVjwcrjRCXFpHnc59hDAiM3j2F9twURxj4wRWx3gHoNjgB4WCLSLjGfaZWFhJLGRXY6oP2ckGEv6Amf89Aj",
  "key21": "49grvQQB69HDuNX3rCB1GyRUAP3dowa6mepC19thiV14ghEAekY9n4ZLaqzjdMumRVESR94XyUPnbePFLDtVokLb",
  "key22": "mVRmgrzGJJcVapZdQ5313qv5gTmUij5zzpqYDKbemJSbcBkjKBXhqcVHjCdB9ihWrR9yjXq8MseVun7NhcaQP4K",
  "key23": "4RRr8GsE1fwf3McBEYwgyYmCbWxjfyqEmUZjzVvUxYd96zwYfSsoJj5KVANeHALqcQXWbHxY46MPdu6uUtuwtye4",
  "key24": "33LxWCyPkUzV1ViLJxioKWZ56J9N9QkVC4VTzfNNiuhLYgfD1mTVr7awEd6SAJBLecvAQEfAkUkUXtfDi1uUveMy",
  "key25": "rPG2QoQbGkbttyeeRf1Z4Gn7jaxnbTdAP4UWVRRD6t6RnyAfLs3KncThdvvXTq1yLu9NhhY8tULKWrknNwAc8Jj",
  "key26": "3HqZJQfs5U4DSTgsVmqvP4pLj5P1QVbwTeRnHDFAEx9s6wJM7fGtNcME9Ep8YNe5U9PWtBxve2KaEuDvTKLATsd7",
  "key27": "3aPLC2CqNYvXSXHvMDKWmVqgp2Auc8HDxdNnTtWosRXvaBrdLV1jeSErfQbZ129zARK2rbq6ua66iGif4TUGSApV",
  "key28": "3rrWt4GjrKdJHYj1GVEemXPdHWHFqkHZL24TXAs6gspYujUhBaaXifDEZ66BtAJknYR4LJhSAR281qyKsct3AuBQ",
  "key29": "3xTdkJn9fpfqMRAdNinqXLoX3DNav7mNs2tccJHxmuEY46xWWoL8qT864u5wyr6egaJoEmxfeTDQ59kXAs8xaPnL"
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
