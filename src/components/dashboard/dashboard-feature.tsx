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
    "3JURGUcSDMSMzuHjnYJ7hRvgGaFbViGAHvCNe93UgRQubmPyfNbWFCuqrq543Jkqp1cet9uq5R6NEDBQCZr9KHUG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62dFyKmhQZBBBwFybaHq4mphZcJX2CvphRgBERZfrVdyHMo7Uyv3TLqWQAEbMputWNQsizQSgVzS1r7msPThRCpw",
  "key1": "w3mrExKL4y6ppEodFSGJS2iH7a6PyHXTNJtvrB4t22r5gjgLdMULt3t3Pyqdf7ZCvTwfwxYwuBXU6VkVM578VKR",
  "key2": "4hkb1PtiHbZEzNjtP42KE8FhDJfQSKnKtr1ZSU4dxxbi7ZnaV6gjoCcysgZexbmMGkLsvkn1cPB8ja5CYuVJegCT",
  "key3": "4VJGY9eUMAk4iJJhcQzTqtLZuwU7QvL7swU3pw82ByEq9QZjdKPjgg68rxiaNEJ34oVAXf2gnoNUjTQYkUsTjsL3",
  "key4": "3XqngnxrshS35c7jDGN8n1gR2MjeemJEJMaH7qvhDq2SLXQRfsP56xaqgojC7WP15yf4PGgd6eoDyGJKBwn1XmCb",
  "key5": "2r4ychtFYFeKVCkhfAA95aaCaiwBo4iwqy42iseKUV1mwJ1bEJDRnUnesv19NAMYQDn9gnrPWfVG9VoLs9RgHP1R",
  "key6": "5gij5crbBH7t5WSZ76XXypW3TRNvpsttz9A7NQL4gjsKPiurYFkv8GcjJY7AfU4ehbK6BJ4NEhhJZAszLtsVSXQq",
  "key7": "429eC7kqhoqQqshsi6uNw54SLFs41H8WNM41G7TfbpKbRbQ7UVgGiwwGs7W9GxC7T2kLbwhStRv79hyzk5HJ3zWt",
  "key8": "3ZK6oczNabwQf7BAxhctUeH7WRjfRZ2gN48kiRtAPQ32uZAXM8A7R9tphBtzhn9vvKrapn2MGsn6kW8wbJmfmn8E",
  "key9": "3ZZABLhvNp15pLxMfBGHU8tAc8UEvAKsfeQjMTg8f3F5oSZygjgMk9SCdosHmkycDtAoAdkwdAJ3mxtZy6pjD7UV",
  "key10": "QxJBrsbNiNUiU3Nr9FEewQNo1eda1ukmFtvQKYQh4Xx5k7xchPXhTZ7PJbiFEjQAF8CgJDXPQ5zeuv1bc7Q1dtD",
  "key11": "27yEPct5PDRj9N58jTShXp4gDUKWMpSTcfK13P2uSU5GzvmRem94q13p3bgBH3qyFFnKtYnTomxRzaSraXLUxi3s",
  "key12": "3i1qEX1U5hELj4k6eCdmV2nh2reRXNh42bWBdE59fd68CYvtjPnDakR3PbN5ci5FX415W3XnZw4NCZw2EyGuC81n",
  "key13": "5ZrYuyASP64C7qXpnhJJCkvLAKQFzH6vtaq8zdgGjC7GMbLFZB9aEWfrj67byKzpAnDRoMpMLFKzMPAueWnV5ET6",
  "key14": "3wwCWQUYvbGY6MXPB2YeXfyDptCLpEBdhRzedfFx21px6H4cQdxTmbeHWSRZqB3fVqxQnGfsMKMJGw8iYp4Z1Cvg",
  "key15": "2thMhM6wevp3KQtavg18uJFYwXEf68E2WPUU81MThD2wkxbMwB2fctPPtgCRVVfxDCDMZVb2cssgRJctbjwMJ13A",
  "key16": "3MLa1pDQBD8SfcFx6eKPf44sTHee3nU39D68xKCDGsiYGhSXASev2mGBapERvcFfAjnjM5Cbej2eWpFJgQtqG5Y3",
  "key17": "2BxX7m4PM8a5BKynmX2PR9Gv1myp8QLGKG76RYQ7HH9YX3a7BKyQLSdyZzTGfW2JBXBAoAF7JT5Ubg25oaSH7ZLC",
  "key18": "3p2ng6z9xx8shN1JEJpFf3PSEKqEdn8EMj1kdq7xaKPKXFEPh5XFhVh68TVNgKC5LkJugB4sjLjtkacUQgKyFEzC",
  "key19": "KdVVYFeoBPd91gZWGk24ojsjzVecZJHPsR9ytzsJhtp5ZtREEkvrPAWQjtH25cK4wHCwGWndVwARuyWBX9W73JF",
  "key20": "129i8G5u5XyGmQ2r92r2mKyUFqgfQxLD9Cd8VXXYhKccRmREjdQ3N1sGUTsE8FEP4GYWNTkmCzy49UaCSARXQRbZ",
  "key21": "4bV4fDriptfb8fC4pN5sigSnzb9bCSXr9BqG5QWct1C64GUvX7rcbMpRTbNknQjgDVS314mTvthRPvsfD2qzk3rX",
  "key22": "4QWrQvhGX8j4b8R86sZBKKd2w1mxojpR3jkSzNhm2iMzJWqWvhChh59uZkYWZGRTwnJeCq8ZhHozpDCycgb99oiD",
  "key23": "eQWSok6vftF1kbTEDvf43xPEEziiBMTZa9sE3tkhJp9mrchLQPTqG6SMeDScPTY2aesN1emGS7phFXaB97KxrFF",
  "key24": "2sDz6gikTDzvB34yHLVkkj3dSmbYvqTm3EJb53ahEVWsMrQt7Ha8zB7r49DQCy6oH8hwFqk2jH8i2SmKzMGRdNiP",
  "key25": "k1TbaQhr4ttepxYbuncw5i1LNGjrH37Pc1FojVmcXHHDf8iu4cayPc6sMnoipAKTrDpF7kNVjQXzd7fo6g64ZmS",
  "key26": "2P5onPwE1qG65ZM7ATDEuxTRt8ACRjDnJMZxyrRH9W98aEPpvGTEC9VLVF9zRKP5v5bitHGvrkVGGSKHZRQGLjBA",
  "key27": "2cWsdanwpQPuRDQE2RpsHkHKEXoFhcarPuBJnwMqBddLPsJyEyqLBMccFwgHAdVZeiuPPFVqdG9fu3VEKNvbnUyM",
  "key28": "2pQ1dBLuChycW4cWTztFLrHYHYFFkduWSZVXVQALjmCxHh1GsDsj9oQqGt8bddnpdsC4iroPEqQEUs3aNEmGYfDL",
  "key29": "4Xbg8c6gWqN9JdYzJoW7V5kc8WkcSiDsCsdvoeATCPWmP8JdbYSu9BBDnkckd56ikRWmUcVHsWSi294YsWbwkAdT",
  "key30": "4UR2kNi25rEXoEb6N5cCiZQK8HLK9RFfzEzjj6XfxiZvcxDBWwfXSLEwf5mds243cppwkb4rrbbgRXGZTeacaV1G",
  "key31": "3sGN4mXy9VrnXcX7SFa6oDUExifBrGQjx7hvBE967uL2tYqGZumBMiLhwcLfRNuxWbj8o37JuaP4njDaJARrs5y8",
  "key32": "4RwovnzRhkGMjMAKFno1ipHdArsyR8QkM9fzeW5STN24DZcDbgRZt8TCYHf1nJRxp88CEXHvKbHf6F3gbJJP481n",
  "key33": "5DL1uvGkXqc2stikHwGLtwtbeHfjLNYtwhfRgogbHbAJT7i7ombNNAifLP7wTJoXQj9dzGE3ZFGks3fJbqbmWw2n",
  "key34": "66o5Dy8XZ9jjgo68NM7e3b3xAiVFcbJaarmG6H5J7vuu3svKGPP2S4jXtS2fdNn9xA9bk3tykmi2rSfgqFpsVJPP",
  "key35": "3JVQtmjLHZn3iXC5kNRB329LP4U8wdKduBM437zwgj7T1kRiHjV8vNsKhDXB4yS4mQkH4UJg6XttoaRLhp5SHdyo",
  "key36": "5ykeZa6mJkCZLKiwUGMSNcrnqzaF8JAkM1xjGvpzrtBQ88hnyg871LJfiVETz7WRP1thLDWLYJinuigJ8XraTb2J",
  "key37": "3jfMPWJ3dNJoj4tYePdKVKDbMfwTtz2q91WLz7KTnktdbqJvioqD682fWFnmoSTnqowMHgyJcaZKDR92cEEpR1Uy",
  "key38": "4wtaB1HgQzvwn6oapHCPmT4XGaQDU5vw8TyN8Dmdn9p8oEvTAjVmvg5qEnuLcidaXSCUWNV2htxSzr3TJ86C2gYZ",
  "key39": "3rCsdbC72AAUzJDdvgdehQRc2bMXjXYwVtwbqDPAEdRB5JCpeKyTou4XvaA8BVyLqyFh1jtvybhajTkR6igoQmew",
  "key40": "2ZNLERYSpPYyFRdCVvQi5Ecf7tJKy7X947qpr4Kr4vajxcA6stCzTiAV9mZsX9Ao4naAXtTDR86Hxnai7Et4hmYZ",
  "key41": "JNjc1BQBXoQNz3uBR4tWmuTy1xy4V4PjsULaxcJ4TqDhbBYrHgP4vvHVjmJKbHuRQLyxoTuZUpLvnpB1ZfgsUzk",
  "key42": "5thedLwNFSN9KEFNFpqBANdU6yBnSLFfF2v6SmA1u1ChaZuvGhGBabWAvM6L3ZdJ3M9tMkFuYox4Bsi21FdqnJDk",
  "key43": "4ZsJHg4vab2Vm8rw2m47rN89aJ7nrNVzvWjG2gAqhTLxuHtNPPNAQb5DEqTUtMgf9gFkUNAMZAMVVHAp6RoxuqV2"
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
