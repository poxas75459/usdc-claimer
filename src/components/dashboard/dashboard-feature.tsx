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
    "3NAM3N4LRchrnXXjXG1kLXptsKQdh51TyLdGtyAmp2g4pGgJRQENfoWxAUb14GNuiraZ9humMeAzqo5RkUHt9t35"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tZMozUejnSE1pZvmBKEqY1F4Y6AbrRTqnxYEy381AqRvQ9zSe24gV15RD2Xke2uw7oywThYGeg6XQW4SWtfsQrt",
  "key1": "3jAq3B98WaRCPQHCcdAqzUvdJbWbNysA4c2mYDVKvoyKFVjuyzaArjHGWw9CU2EDSmjxdbpWyhyNez9CjSSvUaiC",
  "key2": "3dL9xTakx2qrr6ZR1BqxTwj3jFeAJpu9nR29XSSPrThifXmCSKaMknyx3vmSQmBotx8ErzCH16L4ygMZNLk4D1XQ",
  "key3": "48n8BJdRmQLjEF2GgYZLzCNLaZUgn9rwYgGDFmPaMCgpMzPfkj19Ggo4aEhivVARXNmg4TZdDwVSNVZNdTHqKmiG",
  "key4": "3YQwBAGSgVvWffDBYhMuDZoxfQgqBdACfnDZtyMBE8TPkPEnRMqbmjef4KQSsFgdT7Tnub4jdmShJopobU3144KQ",
  "key5": "AF2MkoUYVt1V4zW1L9gCdSoWXp53QfoHVeqXobbavtr5sHu2s5qBAGUvD5wz8hqFJeZ8SWDetz3UoWnKoXihNNw",
  "key6": "8BcnNP6rXELGsAquCZCV1HFrnedQhDAiLrf9UawdGPSwNF7vZ3Q26atQEhyJZSnRxEWYM7gH8Qbrr8ofssQHGbH",
  "key7": "4a9C23mHoxQQZ1pBjJKyXreWmRBADQSusyDiChFcPQArC3FYtanevXh8xz8ERn7EGtCoq3yQV5keNo5m23KNKyA8",
  "key8": "2SnocJchXHGZxSegETqDbwVk1Gm3t8D7Zk4wLa3F1SprYCo5jeMgu8XrHcdCz3GxJo9FmX9LyG56EBVA3jDXBQWH",
  "key9": "3moraQ8jcUj37pdm3dYHHz6Ha4hvW8Rik1HLw7WXoz4YjeVLGjFZsyDwDqchxd2VyCudFC3e6tv6wKhv4kWJDP68",
  "key10": "qEsBByKy9ZFA9unU2GpLFBvrYftXNccDgC96o9M8CXKTcCNEtG9ths4W2F6V2o26abcN12zBv4UeSQVAFnJN1i7",
  "key11": "62uNaAxTYn6KLPH1P4s5uz7USWbDQ1E9SzViFuwX4PPWG6guinCoBB1VHyXrxbu49Dhk7RTohtuQFU99GByKF9tK",
  "key12": "5Qj83Ey6QWGtk8JCZsohrEMJbwEB7Zs8XBK9jvhCHYzxQHMb9JJnUWzeLbRLzmHVtQMV8cvmYVZ4HRRxfAyfh3FJ",
  "key13": "4WmHYpzH9XXs3q6cnnxzww5mHRfPuzKz9z48jkQw8SHnQc3UTaRWPG6d27du1FGqiLAzr4hXhBAgoVbe9J6Thgam",
  "key14": "4FRkNQXRSbGtwox1fa93CiHbtoT64JB1R9zuoiLmDMTb3MLGkGnAt8zRxShpgZTK5Wk1mmF5hyJ2Hsbyris1WCv1",
  "key15": "52Eap7wy1GWb8ovhhRRCXvM5TfrCeM3NVFaYU2dFQ7SBxcKGunnYxFTS2Ymt7ARUTPVcHUjyGuSt6ZMaWn8WaqoG",
  "key16": "64Z7Y27rcyTHTFaSZSrxwnDSwDQ1t1tCFzB6t4cPnqgMM2CPe1BxEGAW1xacbV6sWFZyYchAQAm81ucHypHw2kaX",
  "key17": "9T8fBYTYmV6mZAcqi9zF4P8JBDzevAopcPgNjmugCWzKUv4jrMCdDvy8AHKmRWmupJZBYR4JWrWi2MuiZhdkkvG",
  "key18": "5KL8nSabu9BhVidAFF5aPxt333nNS67UPb25mHgP5E2HeL7f2hLW9BzX7CUfLM69aKQAwTBLr1Mxkh7uLjhzJD6Q",
  "key19": "TgeVYg9i7c1W42WBkq88WpmKNgrwY5qDbtbXyjggxJstwE3qBNwPAfgMbUonsJddFcn6WSfneuCjcCb3AjTosWY",
  "key20": "4djL8ieqL1zprq5J3Q3AsyasLUrrQGjpxqtq1p4qmHmrCMsQkAzfeS3qeHVG1j6QmJnQqPJjmtoEMTjCtmpqR54o",
  "key21": "3zpSQhtEXrZpNENuPA9m1fg9DHAXuekjXWxQ7V6i4CfSkAVtDrEvaaU8qYeVR4pfJT8yED3mGk35SL8KaPjbVpoR",
  "key22": "2iyvqXkCoLbMnPGTiTMJ6F66ueF7mHyzSSgX9wtH7Gbzuir5kRAEewPy4YK3Xpfn9biJwFCJdRqkSofBKd3WEDqm",
  "key23": "2vGM9g5gJjEaBJMsFW2CW3sNYihSkoLFnacn8s21jYatd2ku5k7whCpJWzmHuLkeMvVE3wquz3y2N7SWaufJbrC3",
  "key24": "3gwi7xCSwDpLeWts3UTjT2ps5FMRcE59swPd9W3XVNRAmCCLd46Q8SVziQRbPaXQnc3LYSQTvP9Bp3Ty8PTkXM8N",
  "key25": "62vGJ1VsHMgmSgiB4Eb3KeTuGLGEkf4Qsvk3W922kdQnbCFkq4tDNK1zEh24oyaKixdZUeUVNcegpeQ5KEonDCLY",
  "key26": "ZkPd91zfoXA6pMd6xUeLN7q7zhQX3nqYxaWqGcxY8wMcZQ2FD3cdesBsozCVXse7uZD4NkxzUZXqXPTDGKZsLsF",
  "key27": "3QnNngbH58j8AFgmxkrih1hxaKv4jkyBuSRKuwbhxhghphzNqvW3hjPU6x3kGbCQ36BfhKHa3PSB19GYofP8ui5T",
  "key28": "4aQ25p9iEdcYetdKVe7LcXdPUtQ5QnawbvpNwvB4556SF5jnQxkVHHqcdUG3bF2eEBxZkvyug6sjuB9bCB4F9fVq",
  "key29": "8ydwvZBeENXwvHLPirjrxwpU5RrRMQo9t6Lttvokc8sgKddmmzpWqaeNMymLgucWRavtvcGHoMYg33gaxhCpGvr",
  "key30": "5cWUSBxJAko7bETWtMuqdfn88BNbMAGQk8TY54xLQLvN2Mv9kxLTW2skg96gnZpDkLAWdP1cK9uD4bvWWGjUf2wL",
  "key31": "5pppnJtEw3489Dg3jJDbobBscy2kUC2PFT1QpWzQLqRsVTtDi2DJXWc96Rimx6sLxQsat88XPmaJ4sHnnysf83CZ",
  "key32": "4thWq8nBYC4SAXiizgKiftWfuSPbnd53mXEzgjPvGpwT3DTAUAP8ybad7dXrfMpDQfYyqQGzDEMjoS7F8ULKTSQL",
  "key33": "561K3bcMwk3zxuQvA9pzbVUPxXzwzjo4Pfpy1RQSLnRFEsgG56ffjrUSdGVq4rmPxwuGaSLxwir66kAsUEV5hRGS",
  "key34": "4M48gaVaUDjExnhwQGqfMwYskbiCxjCSaQgvasnnqZ9sS3QYQ8pvTc2rmh1XCj2ZVovoyPYdngtfnHgrzm6tubXo",
  "key35": "5y4A179urruwMYMrpUNfEbFcgccT4PBvUknTy8ffrWG5W6t4gTif1dAEga3KXbnmZpTam332CDqusbeqRGdjbjxd"
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
