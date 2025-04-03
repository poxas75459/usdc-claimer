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
    "4xiE5t35HiV3YQ6yQVgY9XyJLyrBsSFvQF1C9VVegkzFSsKUNNoXafKRWBkR2d29HnA8jr7wk7M8kfGZyH4iMHqL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Lgkaa15wsbnKJm3sEAPJZDSooArwd6smC86kjTgYPSHj5KGDCUNeWT29uqmCEzSGHeFxxnwNhKhaWpkVC4MEd53",
  "key1": "2WJjyzWxWuGyzEYE5r75soucqfqt8pgbtgeVdHP7wjfJFcZ2L9GiUWnZZkFe1AZgbcJkdaT8i6uq7pRcvMB4nEMc",
  "key2": "2bnTmWy3dBwYjxHY5MjLG5fHW5C5JcEb8vWzs1EXx5zRUUnweRsQ6XUBFYQhM16bYo3LoUJUE3DrWmVK6sr9Axer",
  "key3": "5sEsVW7acDMg9K6oTHmjaCLpfypHsnqP4JuUXwTncTptE3fwrGZDHBZ6nvyGJacfrpRsVh8XYWecuiJjPr99mBo3",
  "key4": "63K1RoZQi331uPQApUhh8ASwL6Jnwqa4iYNyCfRYoewDbp1RDGJm225jBpewSNAdE1TvWB2Ne4xJZGqCnpfXSNLT",
  "key5": "5nwau2cDUbo2Tk9ojLVjaGREp2nbn8yMDmvACchhvkSQXkcB5Pevzi2hmsFBbfRzmTMk65YWVS43JNupzzJwYkZa",
  "key6": "4K82JjaMCexQoASprqg8PhL8Q63yyXbAzAWEBMwRRcQ9sEYvhTBbhx3shnzBQJTxYifUtNVsX25rWpT87BecVq8Y",
  "key7": "5zMvVvmnEnNxMU83gYcvbPAEwbmpCXQ1yghZMtETU5BNBtUGGwTzTVw6TqhHHM6y8pszjTY447KhdtQ3LbEDH1ce",
  "key8": "2MnGbNSj4gLMcUX62wBXubu24uZXdCau7fQA1tdQ55okuoGSdbEC89CTSyqx9ZzbhEyFFFVw7MDbdLMq3j2FYhaR",
  "key9": "27S9Db9CQRBVZgSVrcuiPqyjHeiSBi6qECynnTgFBUVCnmBQB2vGxkXACsnsTX7YGTaVQVoFDKvw16sgd3Jy4JgA",
  "key10": "3tFYrQksNwxKE2k9kPCZiZAzDEbKq7qziKHW9PzQwrxEB2nYo68Pea5FBSbTFZEN8La18UeJgGqwdM9HpqSrk4ck",
  "key11": "5WVjPNmwC74mie98gTJowzmT2JA6mKP77Ef1u1z2uoGpADi54DqHJZ8djgc4JkKmMCpnY7xQoQBJ4myAJR2RAVq5",
  "key12": "2mh7pLYPh1Sj1DVcCKd3dmY9FVPVrDes9oeigk7WYJeThjTqpdeSJVPLhV44MXHWFUNduMYakvVFFwT9kuYKwwFd",
  "key13": "66EsCToED1RQJioGurcV1Lwo1UsBYaiaiuUT9Uc54Tk76CU25MP5xUBco16TNgSqzSPsGDD6TJkHUisLxhrQ73tS",
  "key14": "2xZhwv7ux7vctCZLCm9t9dNkBCPT9y4eZSEzExTeXpxTebf3MB1uiuCqUEXdf24uvy8eoK9dMmkmRmaASweVfckU",
  "key15": "2181kUpSejFBMWF1twdTJziGSTrYsS61Q5Dj2urG5SR7Qti3RnoviJ27bTdZKNhBCMEA5L6znsxUDUtu9Vj42Xz3",
  "key16": "3t4CJ4AAw2u4KiAPY8jhBX8gAkSZA5siVsWAqApcjcaq46uHD7CBJE8sLbtNdYaYwWv9VA8vioD35oDqm5C4rzdz",
  "key17": "2TNuVJ8XCv7Xhy8KFoU2Jq3yUUTRSeDVCVoXaKz2KgPj46nvFkvHEiR2Y9Km6DM328o94yECVZPLMrj1e8RBjcdy",
  "key18": "5MeUayexZXwuMaW52b1JqGf6U2GEDEygBpaheQ2CQ7wxAcECmeewR9NdX3uKsAo1oyxyHWjmm8krFwhqgRCQwS6V",
  "key19": "4GBvV9Mky81VhHW3kPa987ULXWgonrzwPvYdtP2Ad3DPacwQ6GzRLZn5jCxNeUsG5dywr433TKrmWhETHfMakoJZ",
  "key20": "2HuJ48fWzTcQwVbMbKyxn89AsC3EcAoqAQxRG4zSRg4FjZeGywKgeU3MGJyq15MdFqrGTVxBfkm1CFWfXkFYsQJn",
  "key21": "34nxCTLEB48K1X7D4KyPDAFoJiUGEaXTETjACB55JE1aGmtMkYQSepfbiRcUTKbqZiogVuA7ByiG56Ux8Ka4F5zn",
  "key22": "5r7Ui5fAgMgiUEsGHeQsLBBdaab7phGrLNawzmcUTQUKL7WjmD5wz1ehmMQb7rTH9CXBH5Ag4iAXV2454tykoCTT",
  "key23": "3Wc6rp4UPwYDNjpQYLBZSk72wUNjM1zNTBXv8DyT54XUzAn3ixLVqiqrfrrU4NVAdLbxZLPKuYftaiajg5P5LMPB",
  "key24": "4295DmtPVg1wYPsW92stcPMr5FshL9PxCFxcSQFfZaw4nJKBbbRvfSP8HoW7Bq1fn83Km1eW9C47giuHPXZ6xzbp",
  "key25": "3VxmAWEZhFvve9QQqe3yRgkrFBqStgvLGv3rw3jqWMLCMw2qqypmEmA4uSpg9JVvdvTNei6gQ4hw35rvJ2LTpJvi",
  "key26": "WHzSMcd4TivSooUSjK4tc8q83sjwrWVTxa8CgFqG2Hi1RZgogs62732Q3LVF6GMjqSVy5i2FUPGUBcVF1gzH664",
  "key27": "3rjRHTVfKSdLHig1PiAsu2wiLo9uc12s5HzXZMrttcUq6e7jffT8DAar5byqCYLazskk6n1232kkeiaUkbhiq9X8",
  "key28": "aXJzfLRJ5m5RxDBqMNUM7wf5H4rs3DLcE3cqMX9hhgyP71yyNqejAw6nsRCqGXKVKLSxenhCWvktPVet3Ln35ZE",
  "key29": "5wauD3MnnwTbLJZAoZHUXoxz1VoSvgRA4QVjeUVwbAsUAdskT1ZpefrAnbvLeq7FmGrEYDZQFPrY8ksCvf4ECABE",
  "key30": "GrK8zuLkBKhCcUUefe7RUMMh4rfdYRczKFsyWDdVzAjMnSfRYqrwTuxsqwPQzbktNffA6gvAt72q1bVjsF9X2bJ",
  "key31": "3x77f6K8ZrT2FM6WfY5dhxwuChVTAoF5JcKQrbNRpziTxp4nBq2EsUHEWTn2R9xM6D2ypV9mbiAjz81QbUW9W6MF",
  "key32": "3pwsLqG9H1CZUPXc5t3BXtPR568vmkXZeNbSKDqxeeAu28Nc2H15pX2R2Neu65PFSPSmiJ7y9WgwLuM96doyJwev",
  "key33": "4wm7QfrESHFvCcGSW5huAis5hLrhKzMnLJ6vzdc9po5U9XujP5nX2obJpcQJFQGE68X4XCTrjpcA6LyAzGopsrsF",
  "key34": "24HAroykL5PpR9mvQ1XLWz7T3QH38kN2dZS8zk3NJziefcYA7jReYJvr3MjEaE6TpZyye1BoEVR2WRpaioZAHExM",
  "key35": "3aMfGKEGEpSs5Motod9L1HyGbnWkETewmTPicqbYxFMCQRDUWVKtm81goEEzefmBSXrDgLvqEyYJveb4RebxF9n9",
  "key36": "2jnXJKetnx6hPZxwHrurGshuzkXVbbnDVPaoPow74bBGQNmUuCYBiAof3vD5skL9WxW658XSdXjjmhVW7BircXbp"
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
