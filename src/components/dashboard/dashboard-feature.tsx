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
    "3MynaKwyAzr5Zz4e8KR4qKxeJvHp1cJawYzn5QcnnioENECw5pDbFakNWRrgQRR6gF116YrZwSuBNQBAu6fMNq6d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BXmqWM4WMFhD8awMdjxUxTx9b18TB4YTgUJsWoobpZtM4tDdEs3ECz2oaWvAcpPQhv6Q77tpLnpGE4tPJNrGJkn",
  "key1": "32Dk433FxaLyq43NLMDy7PbYPPhJJYJEx72yBhYS17cEmazH5PQjmYi5B4Q9bnoxd98HAFUqGn1PnfwtqxtVM5D8",
  "key2": "qvtxbcb9Cwni1qgCKDbCU5NGSbFQ8Z7p1ZexaJ9M2tio49NoQeh6yPQDc3bunAV8JVGfvfoUzuUCky9K6LJZKEU",
  "key3": "t8FFgTTvafWX7ZGVDjYhjPCBCR7f94b9WsZdn7ZU25XrJ9XJ22NqB8GLsf1CEQEViVuEZPCQctATyx7kXJPa6mA",
  "key4": "6eLYhKwCQuch9aV7tTCLJTr39ifVPc6wqQNjLtjEH8pUpqfjS9eZ3QYnRSoqgZWXocNBHenfgXcPj3p5s5dKQTM",
  "key5": "ztmk8nbesfS7dgyvyHPLiLcxQob8N13AMywqKctTH9cRN6XFaDH2gdQBFjHDkN8wMNzZcQLPinJ9UAnTsz7vDH5",
  "key6": "3H43mLqsc1XvhA8yvs9LQqHdFdxjDGyuB1ZSMDhjubM3iMknbcBAd3C7NqdWAezDNEeEF2v81LgWcA5QH9P7xnrj",
  "key7": "4tn3g4qLev5mQZ24ANPfnkLBeik8j21gTf6Zia6iYPFygb7ReVLVGH4idemFvXw5shedrusbWDRTFmwyzUMHYKzw",
  "key8": "WdNcK5rof9qL9nvhWWDKCs2n2JeCcmM6CtG7xgN7ZwgNXtTjUtbEUL9toFnWHVWwDZMTBJdQnQEZusX4fHrqtG9",
  "key9": "rUvFD1Vgt56mGR5yKEsbZBVKPRDyiud8KvSB6sUodJxaZBWcnnEyXqHgETjn5npdhHdzmryEDpZxZRxdv6jNA2k",
  "key10": "4BqoshpHY99qpyu73duyYUJUNMcav1vkCDPvtgySwQ4ThbwS2pmUxsbHvtoADc32hKZuMvbPq1BwBhyK7PTJdGcN",
  "key11": "YYxuaK3Tf2xMqufVeAJrt1crTVQX6HE4wsmUNvkyTymSwJpG5MwHttRFboPryPqPuKCs8fdB9Quj4kKCvzWhKbM",
  "key12": "2zDddasbbEbrh5E6h2oqu15LrgoGewJX77NEQ4SCAtdSbu5c9cW9iZ4AUfFt6fQSJEXDQtXhDv42KDRiBQ7hAP9i",
  "key13": "55SFYfWxg2SN2by4ir7q9HE17pwn25nGVaNt156wGJM5jLamPWbvnwkKA4m3N2hrFiDV9tkQaTyo1zUedrv4cgMp",
  "key14": "PL1a2fDv2PLaBCPtXQBw7vp8GbHUKZMxie8SjjXFNmPUu1WsDrNhLuVApoXPpAvnFnAxNE25e5yqRH48XxyR1Ks",
  "key15": "2rAkYQARRM7q4oXVrYsRf9UihBJrocbHL6dh1WCe1uDpEM89PXvrLLv8fjSA6W44JJQygpf3EJF7iQCoD6hWVDLv",
  "key16": "55TSGJZNVdY2ZegnkyN7g8HNShLxpwX2MiAjshChr7wYwYDyJqK87Lh74t2zn6XRHZsfLATuVo1cYb6NSSvhdpTQ",
  "key17": "gW8H4hEzZM43p4Ktq4zD7P19fYGKeqHTPpUYR8YanaBfEmaxHtVBYVYvMc3kEC3eopWHGqi7tckhQETS9tLvTmb",
  "key18": "291uSwdP5CmNJVon5abfpjETa8HB8RxVUZahUCN8iLG9b1hCtMeWJV9vrhjWVDMykKwoMU7rE3JqLAwGrQ4xWr1P",
  "key19": "4fWCdcdfDvRy7AwHFtns4CSErKNoHQkAVE3jSYDgPWnEv9FtrUtvz6t4Grn9yyh8DZPoeihHMVSFYYDM43gQtknR",
  "key20": "54mniTAisDScK2yYsDXCVnrrdPxV649YcgoEwFDU9fhAxkxN2TDLdwPXiBK7DZJsLzEbWi1mFWHmwDGZtgRAU99y",
  "key21": "5nbuzFSa1fd1YCJGJYFsC4NrknKxCbw4czr7xkd8PZbYRpzEBwYe71kwrNEBt87TzhpMrqCFEQ5vC8ihF7hGEg86",
  "key22": "ieHW1rcwsq9wnjKEmSbidKaPbsgsjw7STXiqiD2d5vgrdgP5ueBkhmdktZTLAnUqWfJ4qVSn7pU4pfuBt8x1yQc",
  "key23": "aY6z19Y8AExSFeTaXoePyuFVUmWVzU1aDkgu7MYBMfaG4EViJntHjse1LFrKNBLeRdf4wkzncQygiXTgk1Yt11Z",
  "key24": "3Z4ENjCUxuBjMUFJ7XXM5Gw5yAjo2R3GtgN1VZHfnheKjsXzG3Z7fndFnUNLVizJnWtKauAiQFJA6nUMfwmVRj4J",
  "key25": "5kRFV9XntDiChdZpzZ5poDa9aniA6uJky6p1dwbFc8vFYuwnqzkHEdUsYT6m1vGdt7E7msPERZD3zaz7EZzxqK58",
  "key26": "5jhWrDqbh9bYhA3e5AcCuiYpA2hMdPyrgsVAmYrZiRQ2cDuD8DeHcJPazfJe8juRZDB2oDxYZStrViuSfA189AfB",
  "key27": "4XizdWmndZ2iGzswCPgfEj7yi9BiAi8BC9qFwcJsMTcY23V7ZPjfWpNJiMETJEhGjtfxW5xdcLmWbW65FEX9Nhva",
  "key28": "y1LgZtwU3PS1ZiSL9D4CRk981MyMPSqmMinFpAzb3G2eKvR443CLsS6JmMwFeLPdTb1snoyGjJWBzVM6ESDd1hG",
  "key29": "4dnnPWm8AUD8sujvxzsAVy5yn3DRaKP3fAe5qp4YPpSJjWjZPjRVkCwvBC7wkxo8d4ZUvS1QKZvc1yvNKZcaQcK6",
  "key30": "5MGJ5gfRCz3pGtqhqGBAUAkftkiC77yW8j7gG85Mrj6j989fWZSzqZEj93pcyKoKJk8ktxZNrWcpdpu276GNB74f",
  "key31": "5WdY5h9qFFm4SFod7Pcis2bejkeu6rPEBHfyhTMiHtLzLFbozmACpnHBCmhaykSxZ1UaYs53T3BQEhn7onVrL8hB",
  "key32": "5vZe9SXZxyuHecYPaTbamBBULh46nKEGJLP7gKkZiyzzgsAqqRuHGh8uFcqEnBS72996DRhPqsrA2GdvT9P9EJaM",
  "key33": "26ZyittBLQdtW4jj2E14ZHw2MNjpGMe9G9zNqqiNPBZVhCq4p4VWzEkQzhrDKQNFxEQyXNdv1kuQjP4nk9o15vMr",
  "key34": "3rEMixxBhrYg44ezjBJGg2mN5cRqvNjuKbqe2xk764kXcTHcd6N7LxDoejQ5DkoijxykMJ1E2muwEqiunWwLQsjZ",
  "key35": "35tntNNRjsS81E3feCj9nTCpJhW66PVeHeRcfkcV76y5nhUjdQqFX3J2MnjW7NviDw6EgmZZ6MBUqo6YcMXhd6yg",
  "key36": "3s6Fv7i6a7vxuJaeq535fYUn88MVCPth4bEBLEc9pGikQjZSSz6qSehK1anfp7hAmWjSuf8jZywwtipLnJYTVC7B",
  "key37": "4mGcrjK61AwoEMKW4GH47h9BiahBCv9RE3Aqs35mnnhHGnSTK24K3FXqV5kej5qZLYGvamhu7iehLShtRHTeUjWf",
  "key38": "3YshgVzVRvoLSsc8YyQoN3JG2jnAmJLeHaHL7T3EwJp7QmpobBhGMr5oJqKzNdksE8g7E8z6PFXCkmn51GSPRbgL",
  "key39": "4Zj41qvomYtubvAYnGCEyuvSF2CvUKYJjBGeEMdcxQKWWswLuvYTJEgX7GmQFBmSiPjtPA26midj2okbvvTLAsSF",
  "key40": "3aZHsNvFMf7DZfbZRPfPXuPiYNLBnBSm8VpoV9XAehXM2JN5TnrYm9HMW3f9eE7zjjVEc32tXTx315GoHtChaJK7",
  "key41": "2Rpmfxw1hBbEctoLUrKq9J1TL3TR6SkV1GKs2nhsjYzUrs28etG7eFXmwDyaXXTikDpfRfX1T8cqKK71gxh2yTQV",
  "key42": "57ks6D7sZL2eHcgHBdW1ynHcGZbxmQUFNqAoQ3F9dBqMttpHrtugyvcEn66hcYKH6jYXoiaZP9A4a5ydCBaoWi9M"
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
