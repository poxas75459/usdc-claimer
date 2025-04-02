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
    "49WkrGivzPNwJ2uR2RgkhxqKghXeNoHNKJh2626uYyTm3wLVGHdwiD7RH8pQ1Wywyv41cUrkTv6KuyiiF1Q5dSrt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QRbJrtvHGkgeftKeUhPJk9sj8dJeJxV97kohXSFngm4Am8tKp9qeQnuwdrTaCJrMXqcpv3dFEH8KJQCVUQPjsfs",
  "key1": "3Jxg42dhYek5TbxvDRUxpANGpzxbpzJy2VFxp1m6m6ddHhM6YVwXvAniQ1TiGxDzXBtpcRhbg8B7aStNcXXCN4px",
  "key2": "4c7pjupNyrebXgsLgTRrsgKi3qjYo88L8xayeDtgjKBN9mPBNmRZojTpZ3xq9TVfNRQ8n8HA5pWoB72bDVG7WfCU",
  "key3": "3KvnqkkorSc7Cb6Egxvz3b4v56AJsd32iHTxb5cHA9rRNo1ZUcEY7BnGZ5UXvCLbvpFvBSruPjaxunxAaVM9PZbV",
  "key4": "5NTFVGwL6aXGBEWzy5dEzAaBMfoqJ8Ztuxym1usY7RSqLvgDDMtznNJyDodZB7mdrTrd3PrdB41Fm2UrWm4Zkqg5",
  "key5": "5jdiYWVoZJ2DKRzJS1smzsWqB3ZF3cXhYcciLWG1gS8KbDJy7idYA6JGF1m8SmonEdDDjiSYZ91G3qirSPLj1WaN",
  "key6": "5e1BeJUXjaW1oZ7Pg6cjMs7pUdk8VkkFyQs26T5aAMMef9FgdUtE9W18HHdLGQJ4xf7981SwtSJ7q7HRGTEfchpa",
  "key7": "56y49u35Wj7ThXmXwKjBmyPqwFnsRVbVV9S7c33Un3iK4favteJe79WQzysGmMW9GAH4vhUrj2u7AHC9aPNz1RM6",
  "key8": "FbTVBvdit6WRfgB27szWBgeEZx16JEASXJttx9VtDm18LeSYm2NJFfsXyDkgLTxUSnkka3kkNTXfytrryiisqYW",
  "key9": "3vKcJRCoqnQJZQgPECBja5nJoKFYSweoD49hEdibPuGWtdmWsf1uRYeeLGJ1LqXbCPurCFEdovy5Lbijnv7fUiq8",
  "key10": "FGDi5A24WGxZkHngBLb1zysxh3iYQRTQ3kb59MdvZvDzE7wJoViiQKMXrKSKmMPvvDpWYDnPqfLKoiB876kZ1ce",
  "key11": "2J5yZGP295xfcBUyHYUanfebXuqw2N4izukU3vZKDhSzbuLYCXXC3XRu59zMNF1oTw3N2FuUchm2xDThfzpBcFhw",
  "key12": "2kJPu1HNGywQzS6XANkZ2uMtBuPr6gy7S2xqZjV95NyC7Y6rM5fQxDHqbxPjWdfzUG5DUziQ9wNdn1TcQRFghwFg",
  "key13": "5Dw8N39n3xWXH6zpP53FqoXQjBjumQJ9jsziQoNkpJuwMSdHS8AttmbpbRZ7AhN82tBXVh3c7T5dD64gfQkiJ9um",
  "key14": "29dciuti5vECDJeD9DD1P8swuUe7FmNhPQWbmf9Nex4LPnGnXKMid5QtfFrTiAx3jkX7J7vktfhNjHNMoezMXezS",
  "key15": "yg8DyFVrdSAPdA99oRTtKiUrxQnSUda9szegVdjJdySbW5uJZGFKAFUhhqKeuG19x1PRCoDKWxEhKXzVsS1Zazc",
  "key16": "R9WhbX8Ttx29aB6z3VXjUoJ1FRWuAEEAHdtQFiKGrzFYdNoXFU7uV6hxqk1VqCwdPYQSs66VZmnKg5pEB59SAYw",
  "key17": "YUFQiDtUdQ9sgWtNxBd5tmM398oQMqfRQcyV3D8ptsYyuLuJWB8k3F1TWGqDiUjY64hVDWrfbzcvCVhJMiwtEA7",
  "key18": "5tDe4zvWSGy5XGXm8xjbCwo6S87tEPfY1q23b8HKo4kGU87hyBwYJbcR3rJZHyibereFhKQMRnqxEswqEKBMGHM1",
  "key19": "5fweTasCNUc7wQb7qnWZNfscZYoG561pjoqnL5SqYg6Vaa4Gh5dxikFuYH5pUAgtip19jiEEXWunfk7jra9kawhB",
  "key20": "5UL553dfbacqmTRWm78Rkg1EYAKRyn2cHrp1ZxSGwY8w3UwM2nooARLwwwxHNsUw5k3e35i58oJcKvfV6AxCEjfT",
  "key21": "4H7cRZaVTNcw3tuyq76DchsAhvqJfnCn8aitpHsZibpoFrTftJw6on2jMrYeSEZ3yTiNB3GZthojnKDUQjh4tAfS",
  "key22": "5Yi6GLdZfVGhe4L8SaX2NDEGj4YviRfJhttkwyxwQNpR2MkmnkqJLeGzk1W5fHj3XKX9v8KfiT8v3qNKC14ZkfVt",
  "key23": "52ENambtvugqJBMapXG4aTvfs9H6mqoKBnmC5YxLCnsvbezqTv1Zogjf4Cht6EZTx36Rr1Eje2jJn3cAcrSc1jV8",
  "key24": "s9dUAFLu4nVgayV1R7LsdV5H35sH5kpuW4dAWQGEiq7WKGVWUqYj4Er57NV2Ve3scEndSE2D31BFb6S1FGMqpQ9",
  "key25": "2eLa42zvR5QVzs2KtTQurm26MN8Bm8cMSuWkFxdRSRutLA9D3hAxLrxcpoZLkx2x7w4Nq2EQc9FxQEHm7ftkwdcF",
  "key26": "2nsMJKxkhaqKCxuNmhH27w1Mu4qgT6t7iSQbZoA5eFZMETnRf4J1xr6dZ4HjXZvKbU2pHURnbxVQD7wKfv9tR2w6",
  "key27": "57qVNBamL5E9xKnVGmSfsPqJdSmF2G4qBveajoAPoWLSxV67ixF1p8sxzMXT6a9YYbrGAtRMrxiF1uqMk5169kdo",
  "key28": "665CBP7shD33oHuXE2ghVYgBLZuZp3NJ4PKA6HFmXRno5h36iLx6opp1yEEJCYx8nB8wpt5xBGoCVGUfT1ovuFk9",
  "key29": "2oJZm9doPCLFLHrB4HxbG4Dz2r4VjgVYwzAZUFtJcte9SWm52TCxQTsB2u38RKxZ4uZL4Si8y5A2wY3Twyg4RWH",
  "key30": "3AnAjkCccW98fQKhfcpBof4KzaEx2yL7zJTPNh83oE9ASW132wVCw2tav8swed614XCtdAao3A1FhUBZx2859tNB",
  "key31": "4YQ8Rguzgf9ngjG6p45QFsNvH4bhDW8XNnhAsGEKLrpmnBWrPQgMWkkrnSzwpETbPAXHvZwsx75RL4Ay1DjvNGti",
  "key32": "5V1Jhj1sBhx1tYfvraVUPxerHRFy7ZoPuffhnSd4NAk7NwB67p5yfJraV1z3F3nqiRZq8jkkDZkpZw2UExd6eQsH",
  "key33": "2AUDsUJvwdrHc5iYCLvUwHh8sSkQLc6uVB22H5BZTnbL47r55WLswSsn5ApdVRR65CCV7yWwGKkioDuMSgJ9e789",
  "key34": "2N1xwtLZeC4ERMvsjQZ1Nx3AHxYdi3z7e4DzCvKXLHNMtkVc3h18b4c7uTmNFnSNkzs2vWWbQxyiVNB7eUptAiig",
  "key35": "4Cm6U3mbtA3RxE8WwVAPMJdGJx9CVfdJgXw9LnhhkkDdm7h6Y4cHcGfjYjjB8RKcaCJxmw8Lqm5WeTgxukbFRVe3"
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
