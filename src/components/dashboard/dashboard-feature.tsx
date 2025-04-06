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
    "55ThRG55aoTwpW7rEbVapog89ewy8JCiVY2qAxQQYzoSwcjR92oCbs5KG3J3vLKutv4qL1wfUpM8w2nhxV56xJZ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4APWJXydKZnVrEtEXixqd6hRGB62pSZsgCDwziriUycDoAa4gZbDbqTYa22B53SPrnHpmTdVu6qEbeUpA8UHFWjC",
  "key1": "3i8U1FbDj96eVTphYETMryMFL6P1X9FHEuPt8pCt2jHyqSroQTrjrzwfvCe5Yay6d35HxVQmVTUysVhQLrfjNBgA",
  "key2": "5FsLR98QPezYsjfgnzCTZk5CdrJTH8cNVgaWQpY3XFtmDBUoz28AVfC6jdMM9gD9Z1trbaPR633WGnzPgiw6K7us",
  "key3": "5MyJ4Y4LNX243KE5EL8g7HJ7Pv46KSPPk3Xv7Vu1Djyqvo7yLkKdjCDhVkBzVBEi9tR86mtqTjvTAcFLNoUWN6e1",
  "key4": "5qF85zfUTmB1ajHuoUY49TQxpeJi7PgtL3DAWvsBUo4WDXRRXa3Vt4cDNgDqaLs3pYfRUCaZuPgyzHEDUYBr4Ydc",
  "key5": "4rLuMT4dNwvZCfpHiRPENCEH6BZrgJhvuRqsRCvmW7ic992aJbDJoHzw4pgRZhEmP1EcmPTgj1d3HXESD6CFbvji",
  "key6": "2DMgQAVnN2dmzeFsQfF9fUqDZya28BDWRJMujmVcdUQvjS5N3mbVxqeHKZogJDh5bs1LE4kudnMAZPHbRtTWjxhH",
  "key7": "2wyYeseJbUHCqDhdTLjM4WVjPVvhAHhZoGcYb5RMwgA5GzCSpHfv9xiKbPRVggKcFSMddiAn31GorEHs9RGDnkA8",
  "key8": "48hnsiJ5c6QpJpLfFXbQnrEVYdwA4V67ScXvGJTTbrVCxSmWaYeptBxDdMz5nUW2AAR6dA2YrggGjRSmUCNY8NVv",
  "key9": "5gAZoBRxnXEnw6nmPHc32KiHPDdcx3Ff9f6uqLktoZqv7EZH3RjyYHWWLbJoE1U8WLaBZrshMhQHfjXrS2Rwqfcp",
  "key10": "2wus6iZRhq5ph22Uh6mNyAMvjEVkWXN1wLK5cusFBeyMm53xX9aPmSS5chsUALWPHGBUmQB1CEve9YFvQqZwZ3LV",
  "key11": "BsiBAWMMqphxpprgRbZPvmLforqb8tWVbRWLzPpeDBeETS76nTrJSnSUQKqTzPdyN1uNhx5xfoAtw7u8C8VTmou",
  "key12": "Krct4gfJ2L4rELwomR3kvpA7TWh8CUNcSSL1mkEWc9Bx8xX7JLLU8c9ovTCEesb2NXgjFqFoKXEKPPTWSJrQa5R",
  "key13": "5hSJE8wfWjJX5gi6f4fP4N1HQctmvX3jp1RjssiX4iwHWoKqxJ7aYL1yp39tCcyKPC9N2J1TsRJbwXjvq9n3gN26",
  "key14": "4jJnCZDQHL4ax4dCs1nKt6RqsywphTJkmBGDSn9XRRnnWgNRRMUFvdyNWNWZRtfNMF2Bbx2TWtX1MAJHU8GqrT5o",
  "key15": "73CaB7b5BizayACcjGEpjkae5DF3W6hGVVSLYxzrM7vJLchj1xktru2Y2bkFzoeNFMdkQJvQBxYLt77RJEVAUTi",
  "key16": "2iibBqJ1ZtTetjHxHvuX3cZRwxLwoYjbkLTE5eTnuHp55R3D6fdqjSsXuoK95F7w6LmqtuCj1VkeaxPKqzfZzrXn",
  "key17": "2eQeevSm6TpppYePtkP1sGFXpVFkgLwrB5hUbQQ2ug5AtH85UgGREpWTxUheETXnJexwoZsJaQAXxzLLnML683mt",
  "key18": "4RrDwJd7uvmrMgYkb9Z1eoxu4FxLSwGtpPXyqmrbBizfQvUWLL5QoXro6xw3YcP1SkarVuJuMAP9uyo7YoccJG5A",
  "key19": "3m7Dzhjw4qk8S9uNMuoo3yjroEayZoPSfFXapLfRYVcMAdPQ9ahVYASz6A2ax37yS4QCfG5fAzDGJJQpudBANguH",
  "key20": "3cC5JWgSpWGBuZWtbi367W1kUW3XvYRiPYUYSdWvPVbpc52yHGn3N1e2M3VEyj5VmhcQC1xGqRN76CVo1QB8E2Kb",
  "key21": "31WtXzHEcTU6nkjVdjW1coarF7GQtxmqjBd4QtNbrdq7yVeXZL6EcmWM9RTth9sh4T5tWC5Zbq1YYFX27FSo8UMe",
  "key22": "47nMSeMuY7f7MFkfLARuveczcfLtN6PL91xgSMV7Jsho1YQU6oWLLBu4ozzAvvyjbwUz3EesGXA3A9ETXakTR7EK",
  "key23": "3w7JGpEtd7DzJkunDekAyhpYQGd3daeiwnhUWnJ6jmdNKa1ZEaRez12vBiaiB6DqmJsmMy5L7CXdurx29XBUQF3a",
  "key24": "6nNLgE25juXpdBW2Kp64dHNGMkZxD7oVSN6BX7RKQSpFhNxJt8kgCVojTR9x1eoFY2t8ARoafpXuWYy92xvudTx",
  "key25": "27yPABiJyu5fo15aKHt2W28t2M36Pq3bb1JXodRrVT2rohC4v8AMXpsro1BajfsaitPHmU8XfY27Aqdii7BWntyG",
  "key26": "5ET9kYxA5Paefx6CKUacrgQ8PPYspfrZUnrgBhrTbU3JTQzDQTbjiVsxEZ3CHkNiwDAffJqzNwEqkuM18rMoK2qH",
  "key27": "i6Zw374ouUnKX6okeEKVGbKPYr4BE6rJUiNV69PJVo8XeHx26ofn3BhAJxuHUQctn429YRVMqk15Grz5Nrj1EwN",
  "key28": "5iYr3q98yuJHn7CjjTJxideHuXbFR8Xzzr7gWrM1HGGWixWJ5rQLqBhbewAZFc6tM8fGwXnG58s5SXvMLcnmFqNL",
  "key29": "2CiLTQSABTzWDGxgBa7V8oeS9bi2YMwuTvoPbtfNbZZboUFjSBb3WYn1z9VWcM2kUx8DiRGmdPnuD8SiuBub8Jgu",
  "key30": "3wrbdwhsk4yR4zDzbijridXGxBRDbnDoeHcgNTqXMVamygVfqBSkQRbYGsJSkjZN72pJ3bF2CeRDdBQpb9xp2bBC",
  "key31": "621muhcSV3cGKUCHc4vAWXgKJgYt2q1pHqB1hsZp1zXkh8QnJjHGjStKkDLwtxBJB8DfJxhv5kiGbdXAVnXh8YbA",
  "key32": "xJmPDEovGLtNXSstCY4zxrZNJUys1CPDx5SBB3C3tXpm3SEELQdimgLfzjE6wWp2DDYhxRZFKwiwYbtNRyNpKrf",
  "key33": "4XrdEkzg3pvavB8KToBXumN4b9qXo6xBNdwSYv7Kj8mnxRKe3e5FWYLRbjTgsfAxMyTL6BrwzVn6J9h8MvN2fDWk",
  "key34": "3DUeA9Vojxzfz957rKMi4ArgzLqkzk83sViqChjQ1AWeNqqUd2vLFX1fqiTN4q9xsCzGu5cyJrrkBwr89ctFLSuF",
  "key35": "4qyrLgNg93wJJCLahgFCkiW85NKShHrFqrfhwqEspczNPmoVmu4UiA6bdzSG7iknGgeK6NMzNoczxdkF2c5D2wvx",
  "key36": "5KiYZAG1sdW7KYxvfoVG2rn236ntKYG7BSnEQA1xQhBvLYjvA7MuS2Sn2ZL5dBgwGScMwE9szkKZSS9x5pXz3fTp",
  "key37": "ffXdNdBkHjvYjB3HRNZ2qLy2WFXifbrsSkWZApMjTQdofSBbNEvFZ9RfdpAwpP2rCvz9t1GVVDU7p1R9JoT6C9p",
  "key38": "5ukXS9o4C2QPsEJP2ZsZZtnuGthxeYTs94LZRVgL5A7W5SCMKYsSG3R2arUEZfuhYbtQKjVw2B6TR1FmxqR9EADR"
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
