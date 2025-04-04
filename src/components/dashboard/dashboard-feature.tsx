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
    "R9ae5bK8nzCzSBB2sVXJM4WTDA7KfS3BUViDpYNgzQ7Q2a29zRAb7xyvGFRQzYbpSSaC8RscdF7hnVTRYEdmJRy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Qe8KLxBBNfXS4pdTmu1WoGBcLnTsGwT9zYEjUu3vFvWzAHTfUgDD4SYXwD16wGnDWzkDmitkGaNuUuEge2LSJMh",
  "key1": "3y7zUruQK89EHBa7j4uunxBHCevrPgqSkCzMh87MSB5hp9EWVp1Y7jeLxCZKwx915sShzhMYzfhNGja7CJwBPSFG",
  "key2": "4ZCgEN6Nfy2rrJMuzxREQjfdFk56s6KoXEtJAipWJS6D93Cmm4TnqBJyTs1mVPs6aTUui7SA7CQvEd4VjDd9m9RJ",
  "key3": "4poHkefBxP3Dj3DRu47oegCY737GZVFDiUqttRif6rN2aAT4V21YpbKQrddfZKno52oGJYqUPgmtkAiUM2GhDQ26",
  "key4": "3FhAa2qiPqW3f3KATtjEoKXknWryBrd8vZeTv8UBYuxoxKsa32Y3mpUpxJpobULtLL63HVMfZEWwWTUwuWFkYcyu",
  "key5": "4wSVrpXsenS22FZSDEgCjXjFTa2te1Dj5SQjRyoQUVtQnsdAJRZndErTPX2UJBjmLpExpqPz55ohpMDLo7NPdejm",
  "key6": "2DgfdbZWzoy6Z8FEopYcvmzVVETExD8WC62yPYSBAoAC2ArAnDuTgpxwrdq7Go5dfDCYKhCrY8CsAoN2Jyh6cN8y",
  "key7": "61rYzQMLJaiU4r8nZUFPGbpdgntD4pME7kDwWfhzwPPgRuaBFnEML2xAvxcjjhzApnRDuUZyKqhzat7Y3uENyXZM",
  "key8": "feimaYNaFgyXScMmTMx4hPFBtJTa4ATGhZhEhNmH2THauYBLT9TGDRiw4hXvHzYoaoPP4FsCH3F8SBPvipYNp3Z",
  "key9": "46F58FrgBWFTG5EWpRZtYgdvKEZj85nC8P2xb5cvx1UFWnrTkyYhXCV4ysZQdEkWsgC4JBcZ66gSyGhf39XHYRrF",
  "key10": "2TvWUdMGbtECJ8y21RkE7TXkXm7iVMWFLv7dWm9MTuQnsAxzYKTXwGj18d5YDe6MncxVMwm9KLLsqSmwPmhWndQx",
  "key11": "2n3Dp5VAt4nEjhjTsYgfF6ZPPF7gihh4EQMpRSMuJk7apLuCkcH6RLwqwgGCrepFLo7WijMr7i3BqAbQYgD4vKNx",
  "key12": "wcs8jvs2BHLxxb6XV3M5tSeCqvdU7cRHxYfGEzVqxzwgtN5U43SFE1hDUTiYwBKEfc1hfffJMahV1xsEJ6hPEDh",
  "key13": "5t1vCfKwhCkTKDbqz8HcLvkZcFhbkpkY2YGvV58QLYEMexqoV8GU5vawiMzrKLvitCNHePQfEXJaipQXyfHm94Md",
  "key14": "4zYLeZrEr95tvJsLCSgQu6Nw5vSmiBoDyEuy5DdQQnrwWqzTzfF4T5W1CcfL3QmhTqdyBhymTbVLcsLBh7XHdwib",
  "key15": "3562joTA85U9SEjSQCMoWCqBdNU2aSzZpjo6qrTpnrQ9Xkw5wMMTYAveVmoZyHsBMDxqUK8dp5Y6J4KTQay5ionR",
  "key16": "5adKd8FKUrLCSQDPE55StvrRzmqTCogAQnZmBWKFyL3TdyDYckw1H6siAu1J5DdDAZHKLgiLm2smjz4VqFVqqyxJ",
  "key17": "29VtWMYbt9ozaBTRWszjMnAuua2GL3Heo8CvKyJQQtFFY5BnPbKGoQcF9yfExifyhe8maiAC1EmBSUsQVor3YT7C",
  "key18": "MgCp2x2GRwX99J7uyxqeX7S9uBwNanxhC5DhLsGwSkKbuWsJQR5dG4BTAhQEiQNSVSm7GdfG7rciNUtCTkGc8wH",
  "key19": "3UHpr6Y36UAP8MCK7FkgJT8ur4wpAiK4bhMXWQHsXifEWhg8PH62tPYobxREEXJAwHb1RfDYnXCSytNuYyrvz7s1",
  "key20": "4AkscAFST9W2bKgpGvPyrPS75rioReJAdmEpmnVUMWh8YjKbaqZarqA2JP8aDBd2MEmJTVEuBTuhLEhfhCgtvYmd",
  "key21": "3Au7LA8tao3XPhHXvNS12ScPFyx5wavm7Q4UgR62qRT8pvG6TU5RNGdKNN8EYd1xpFib1pkrFpeHe2gn1ntikYvq",
  "key22": "5yHf5PuSLPeooHHidCSUrwDW3BRtZw8J4UbCDWVevhrJEYsthcoTxinedNuP51hYRVhe5gmkDYp7BCoKdeRyYAzM",
  "key23": "5yGwYsm4RMq1VmSueZrQsWQYrXAbsgccMpskrwgweh6i8hNna5cJ4ZRPttatDVxAayRHm4unzjHgSSYSSXEZwWkN",
  "key24": "4qwaLNQiw7sURNWU5Qh38k5swy6Md4ZTi4B7fZ6EdgWwqQnr7rK4RoQWUyVMLPYfw98Hkq3E3QorWFRcXge3mbvW",
  "key25": "4K5qyCjpAz9Ndj8r7nPonFWZR3ocLFVMriNARcsM61VQouQx95ZgE5wYaLRRqFkx5Qrigb9CfwxoRVELR9httsVR",
  "key26": "xFKPU7R6dKCZcRURyXR6K6fbFworjyq5SJEZLr3nMHGVvV7AkfVrGLEWzFsnqDWzg2M7XynDEZkbUAE6AF48cJB",
  "key27": "2JVq6qT4hzZ9YeccFB7Zr6yoLme2F8Z8G9JyEYLoonpk6PnU63TVeLMS7ygazPthVDUhtSwadcmqPZDxD6UtC1dJ",
  "key28": "5RAanDZia5bxqqBa4jqQ5scG89dzVLKCvzvJ3636pyvWXHA5LtTVczTknGKoSZ9W2rHjBE9iwU5qgWm3CVn5myPD",
  "key29": "4u4SkYz2nW9ST35R4ned2P7yjEx2yy3Y7KhqTNnNfDc86Xk9pxGPyXNQ1iEEtuXbH5FnyMrxPkEnHHnZ9b8LJuYh",
  "key30": "3JkLPDQEv2JiY4XznPbs4s36GvwQX8M3qfuzTJ1EeEe1hzKZKUYg3qAPHUnoqtewNy2nCThNEQQimhmzyiTGgZiF",
  "key31": "28c1EAXnwif7ddxXKamgqPHxQ9FkMSC3m4P5UWxeGcehxhJrk46YzUa89x6WShGXbPbKvRWX8cohJC6qMtCN3YqJ",
  "key32": "2SEjX355twvereqv7xKiZVcRkiJ88x4yHVNgSTVge9GBZzT13o2StJ2SZcWqu8kKU3j9ZPMDuwHKXH52J1i3uRhx",
  "key33": "hqRFigusQaYLPvpamHaaBRye8aBHaUiNZMcPcRmCMufFwWAvwJ3h9XkAZvzoZvqgmgfsaz1yRcLBFCdfzRVNLe7"
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
