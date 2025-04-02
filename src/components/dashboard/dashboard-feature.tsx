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
    "3Y8LxdwsrP5LGKySBBXbpHD4a8z83xgw9bwaopQeisktnSeFfoVgjz7uFfUWHvJtwWUFwkbYx6yNNx6nNLcoyQtS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42vXZSjNPLNpLxSeU2XS4n3SwjRBuyqKR6wKNHaTDQEtM5dsx1Ret6KLe3jQXs77gJzBt6HkcwKgeAAXEFFmW2PK",
  "key1": "eNtc638tEgKmps7h66aLm14Y8ipPsfSbP5GgJe4LVcSaGiZB2tQTd4hLQV9LreEAAU8QhPnwgm9VGuRdS8xYtwY",
  "key2": "2zFGMMEGEQVYU8MpA3G8Q6TrSug1ZYAV67BkT84Ya5xji1GKDpzXkSwPzk7EDE1YWgqWLjNjdqezZ3AU4B755B64",
  "key3": "3ZNti3HNAGxSisePusX7hE8brc5WkwRQDkhJr3Bh9ZPuupjCiiVzVRWgxgAzJLEdHA33Lr2Sh667Um3qr8MN5Mj4",
  "key4": "2zoxcjpALaPTNK2Pa6TqVJteZrQoXVwggSwdzCa7ZPSCR3oaSF9SMXfNF4jbcPD7UcEpA833RicKpoD1RwhHnUqF",
  "key5": "4reXGwXASvS6HnRRC81MeEo6fQVmncJUuWEKJv6randBTH5KiiNCtokQY9bcsYS7e8VsmCdgp5PFif9wbuWz5YQt",
  "key6": "2ZMHNi1VeyDL83tNiP4PmZZAnLwy5pKMWUJk4rC5WFXgpsxyaT8FGxCELvBxUcNHUbVG52suZCyX4Pn3FxVGq667",
  "key7": "3kMY62H5DYB2yqtrYgGdsK9Tfeo4oWkUSyXLtZ6QaCXrwBzDtaVtshVsqZDBwHMaEemTckS62UFWDt2ai8gWCUrG",
  "key8": "PTPxEfpcKEZeSmhwgVGSWTQiwJ5BEVoRwLScTppPghbiBRkiHFuhnDBAfCAYTHDrzojbn2Myw56BD3Z1UzMur7m",
  "key9": "5iYXoZXhu48HQV4ayvC5iGq9eZJW9V3zbEm9Ktdqd6NHxnzFCUJhMSixdQx3E6NDNtaiFqxeD2rbbxp6mn7Ncj7h",
  "key10": "5CsvKzkT9F9cH94DN1LoGRGDf5SUHpKVrcg7v7rwCqgtMw9j9zS5poQsEp3ee8hMnG5wNehwzLtQbefPoCwgxS4Q",
  "key11": "4X3Z6ihPeUtGx5ji44t5Vmk35pj3WSeZYTmMAYvFn4VxycSeWF98KASLNBFA1ccpLdK5utnHFeTvQuCMaaxk4fuS",
  "key12": "zCcRU7KfgbMK39gznQewnWXds2AAAd8GTUXc4Qt3VeWhh85nCfsjpgCm5vYMiaJRThz7rEWdgB3ivSVTngdCynY",
  "key13": "4sVxXmTnHNTXdVeFHDUrmM7fAQdjj1EPn8yVpiArUPmD7WzinW5HMU28g96QWswVKLmEY7ro6YrrJ16CGdncUWc4",
  "key14": "2HMAMcYc2xPAAouq4zo3X2vswNtUSedZdV2szpgk9JQQ6mdDZF6xzi8vpTHdQJnheoc2ZMqXnUzGHNLGCAJymMeV",
  "key15": "3o4bhrzJrejzDakpipmbmhFN9Cpj8851JJfqFLuWj9o6dx9oo1i7PRDY1sexXjMsTCXZmmadCEcmHqpgmNQUhKZv",
  "key16": "sgyxYCn7DCR4Bg1fveBZ5g9dsffCnM6cZYifZND2As585rS8WWiDutDr5EmXDeGqfHXZxuzbjoQJT8DmgjbA17r",
  "key17": "piyatGN3LNm93sr9PZSrG1YxucDtYL3XgGy5ikQpPkXMbxKaRmVBTVzBJdKLoSAbZj7AhTraHJP9ijHNCoM5iCf",
  "key18": "32PKSYLfW1KimSJjXcFP8tQYxnXapnmfhHemoZKDWctkvWKWB1NPWwkqqc4sEySYhRToBp8wyHMT11TxRUPw8U8h",
  "key19": "48Xy2ken25ineSLGbRaWyUYf92esRqY4jiFeu9Cy1Go4Gnj62k6aSt8SHmvbEN8SfqpLy3LRyG28RiDNU7ax9k5h",
  "key20": "RDgPpgzDB49Niomv2XpDZutrdAkWAer6jFYJZdaJE7V9PHY4Y2pjrsyHrpSQnVAfYTLUy3WeM5R2y3yTQyfjAVG",
  "key21": "5ttZM8DccLvXZSTUyRAmFqxz98g1qSWsH8vMSPuvRZPUd5GNnmFBYhR1BfBhKHRnZSzBncxBX9D4SaioTKxXTew2",
  "key22": "5DFerZtMgZM6QJqcut1Szx9YzTFesR6x7tg89dJKJ5c71eD2EEfgZfWdav1DdZis5XqWkNQTnedheJfEFqA9AVyQ",
  "key23": "4Mn2mGfvfzdqcaWCuViHXdASQihdDNLKYhKrVd1FZCSypfZswQW499WXCDe8qZpu92Y9J2fGW7jfenfNAFW16E6E",
  "key24": "TNMGDh47awpRjGHz4HUsji46zCRY62gSto6BVwstsbka4v2hDVAGCcCC5N6C6bLNAdWRZwYfEuWq1DbXnFWPVk4"
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
