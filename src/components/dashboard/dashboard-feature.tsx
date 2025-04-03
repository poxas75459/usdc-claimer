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
    "3Aoe7dKd1b1L2BJYsteu3osS81scBggwExPwJAQAVwFy5TJi8kEYU3ywN8rm5WH7YvjW2bHyCz7sxMWQ7wQBmzDC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K6ZQqTsmaUPtFpJwWYe5Dz95eVG2sD6nzCNXZhroSXx5WxgRdpRcchjF6KReJHi1Rcf7cxzb45e6e7DJtAR4fP7",
  "key1": "cVAEAxiBmTEWp1AGZHW4LSxWEHzCQ9bev76J6WQ2cN32zpcJk8fHj2vYDFCgoeouJMt9yQBLoK8xkXjX2tjWJiv",
  "key2": "3WETfCyBLjxLazgAUNaXR2TMZH8DrvR3XBAsFdj4ViKfeUB9UiRWhzyFnPLJiGZNcWGeDjBbAW7DnrD5mTSBqu7s",
  "key3": "2RRUjYuHga8CTx1Bt5duJN2TcCBzadBeGR71zosAHoSuJu4LrYj7NW1w6hdcenfaXyYdVcmpVNq64hXpSteKWcZK",
  "key4": "5WAMkAFrPAXR9PRa1w5yKqkH3nqaBjQX4YPbmA4v1ahf1tyZst1xQk9GHgTB53WSUz5H6YcFpbxrkuZqABJCaTnq",
  "key5": "5f2VBsnbiEWJ7jJegsXSwYAZfcbWs92LFMj2todGk2jQ35Deq71bCF7545dLYayfq8nXpQMC8X1mWBWBrjquYaqh",
  "key6": "3TPtoLNVKiSCcaiYLiG7K8BbDc76xgD7S9tEUyi7GfhoZQAW1QuZy7hXAgZjZhsGCtJB2BU1gEpKD5BMA9rs3ML6",
  "key7": "4vh5KWsgY7ekaXRsCRvsfiU4g9R6X71ViCo1LvjYiBSFpM56HgLmDLPUMVxvBJ7ZNRKnud6rBE5kEVWM5ofCHHeJ",
  "key8": "FdZx43bNFqvT3kDQEvoTGRDhftVk3qRUoLxSYiFJXzJJoUrc2yiqZ2NQets2RSckthJow4VHrBLCNEEp1JWbCRq",
  "key9": "u46dhkfnAhDAdqCquovV7thVtX4JGPcaz7QHDtT3WPRHppXYac6PEcmiNVtB97Fghj1oMQ4TaCrYAJKnbx2EMAL",
  "key10": "28yqNw4ghgP3gziBW5ADkhCwhauSvMtjWgjDHCXxJp241PDFSBNcgikFzauPm7N19y2xW7Ym95WaJaqnwKyiZpr5",
  "key11": "59aQwcf8hEEQSrhmcZdopcZsM1A4jb3idYvEQCAsjVaC56XLciQkeGC8afTpR1aBQ4JiBroeUmW7qSWRZUuNQxry",
  "key12": "3JAr3ikJ6cPEQ77wBjGGjKdUFdK73aWUH9Z9ptJiYAErMj7i9Dr9Y1K4QNbtu7AwneuHoKRXS2tpeah5645E97j7",
  "key13": "5p5tDjJV7BwaF1XajfeTsH5nwhei82ftMupXuqpCvNHBhMEGkudcLPh298fDeQZA4LSPEM7TFXE47QgkkxTdFFpQ",
  "key14": "63Gz1R5CVN3ztvmVAzhEhgNhQx3ZYPtCzNA6Et7RxPdFopZfHVto3bKUdnyxpYQMjVKhbj72nVr79Mx59rkjEk4T",
  "key15": "4Jbote9jCsYgApHjt52tK7DxThsxidaBPGdSB9ymjYLaKsGYKzRMrqJDiCPVLgVB2iW5sLVTJeCdgiPKVWFfCsaH",
  "key16": "3isEaVQuLcunpmsuMZUFnJp7CENYh1x9rnTMEED9Gi45CNMa5BTg5orhqiHYeBDxDwsLkSCm2szFtpfAPJ1a4HTy",
  "key17": "44otoS6mvVhPdq6WwDkmZvqLoYHjTMozTv7aoKDu1JgoYFA5jsaKpLXoZKBzJmU2RkZtaqHUQGmWQxCszRASctXp",
  "key18": "3JTx16WBZhsMXJ8KZaePcN6phtyiWixsyzshLFFtdqCbKS73PnrN22Q2SYmN4AmHm43q1f7iRELxYVyvYm52ddcA",
  "key19": "ohjv5FATpcSsr3NQ9hBDmMHnRDjU9iL6dCCkgXo7W5pxYMDYBkgoiD4iijvvhKwEhGmoL1Jf218uxwNqKMtx3nZ",
  "key20": "2KisdRPDHNNFp4SAKPTw9bEyW4DyjTuB3UwRoXV2EJ2VEpWdXZRLRZmv6NvHAKs4BNE3oD7NxC7r4z9yB9WHyNBa",
  "key21": "4tqbbxghrSJdNABTSCTvmDHLHpbXmBiLc5uy6qvxmNuyYBJCCmCQGm1oofJtsScSiufQDD3FDfEoCYyxoEbqyihz",
  "key22": "3Vj52htu47EC6mWCZzHTAaVyDZfUDZyC3x8Pf623XWjWMc58i5LpU6HEnKFTySwm8tJtgDYVxPCbhPxaFQnpVjEv",
  "key23": "57aWhQrZdMHXq5d3ggGYjgCS4U2Lh6bBBb4jQoKzPACibjsfq13UpCFvXCW4LEfomvsa7vtpRLvMNHCQfWNbAhW3",
  "key24": "d3RXXNWBTqdPkLF3JUQsGqQ25DBiu2wqJwAAGkYPFQzVF1k1pzNLrDwkwpLiEFVhEcVV11hdNUBy9YE2o78oHbW",
  "key25": "3UeE6PnpTxVGzzckDGL4xpJpkt4xKADjdLJVaBejK9dFUWEuDcVyDz6VZNLMJn8Qz7H1xafYr9NSQuSZBVVN5fsn",
  "key26": "3FeibVHvpUrCXx2cQnAUESqrwxn91QWmezLLaJW1JDegySH6EUcw8xwUjm4R3iouHCkDPmmQXT2jZWoeh4gY7jEB",
  "key27": "2YoBxgic5zyVayNMj5UNTdh372SQ5UhR2LFcyfkaekvyp863ygUEXwQxXtr2cQT4ZgswPXB6ptuEmaRMX6oCokdG",
  "key28": "25cZ39CgA2HHDJ5Z6kDMRxt1biuWDkrzYzmZWhEzX8Qvur7fE8VSeUdqwmefNE3NoW3YtYvwnFxEJ1SJxqyo6SoZ",
  "key29": "3HhbatVQpbdJUiVzcTPfGoMGrohdNF1Kg63w6ACb1PcKcknVmJhmUjuS9icnapyKf1nhFtkcKFRSXBngTHUg6AQd",
  "key30": "2esX4PxsmcybH62nADvkEiUzihnyPWAvtNK2Rt3hmC7PpRqwToyvpFVWgBD6d63U1NpVrDxm8LEgV4J2VqYcTQUj",
  "key31": "qJxvXPLHPpsUErAVDQpehxGaS3zpU9f4EPoFxqHQ1wgGG5Yn54wqpqRVizU6Z9YmTSyur2Gy2QSC6uvZ9wx6Nyt",
  "key32": "4V8JWffGvyJPWMJbyBUAACFrgwBK5FG43tS5N9TT2usrt6fAdm2GuW3iTo5BT2saYggk9u5eBK3XVFPad3BjKpkE",
  "key33": "3xjJDsn2Sf5qtdcGTQDjnDjJQAbHcnvTUeB9usPXz67JTeb68G2YDGKnCV9FmLQtgPnFMthMhjBspx8upHcJ4QSj",
  "key34": "5Xjb3jc6i229bMzCm6wtVmx2xD7fuShPbaozJJ28PM3QEvNrQpBmJ6xtkhgFr1jetvPDZYaNGo1YUWpdzXgZg2ot",
  "key35": "S45UEcUhaqHBFwzDg9bau5CDtq9tVecgDgKZVfBHDAo7GDeSdjsZ2y6GSyP7TLvgePsznP7vN7Nnx8HeoP8rY32",
  "key36": "jkUFj1r8coKKjPcwwpqBEwgZnytBJTpbE7d6oZnB5pfkHnv2aLenCLb4d5DiEof4AuFtdRgN39i1YWPpQU2eESc",
  "key37": "2VQiZTipsxLdmK9yg45QGw2ehaEPHNQJ3owwhsvHt2cJMBz15e3wwtuQx5zrzM3D9nbA6Za34RsNBRSnf8mAaE61",
  "key38": "378dUAWxJDFrRgkWgSEpqgYkeWHXNBQCwvs4Lt1ifgNymkBRSE6sGnpCq3qxFBJTab4iKDpKVRmWM7GxgoGrGh4A",
  "key39": "2y8Zj6eKAhUrMgjmWZCjp3PTnszZiLJA1SyBzk1JFNamddm5E4BDzZH2WA1bgUXpFrtg8oAkC1sHB3XF3keRt8ae",
  "key40": "48ch2ieEQhRC7eyGwSSsdN3mWRCxcFz1EEWqEZKvGGPJucFXaV1bkBREvwsUibXDPsjhpqs8JwW1ud54zycn9Arj",
  "key41": "YWWdW13fLJaap8krSmyFwjnP8dp5uR5Cv9W2ft7C64K9FvcbYmDNwmZXj6JdWiMjB7Cb6GzPt5e6wSaQavndHUB",
  "key42": "1NqYxftDQhxfG2NhwThQSS1XMUHZYBHbVt7ddepQtUSMAC83QvT97ZpQCFWrF7jJxQM4pZ1ttEsLAaTtdT3odTt",
  "key43": "23f5BsXd4btVLrsyQKXRyNWexbqXwUn67fc8EnkR3GXHfzcSh5db6EpAKyJSp4KsPD23xQe2NzYYXw9iB2f7r635",
  "key44": "3KSP7FkCyuwCMJLicJi2xHFBTJCUy1YhgiwpvsoFGyysxDGdV58VrcN4hBB11CPWx3dENLvoiha1ApYLmzrMwERW",
  "key45": "4NvzetpPmAL7qRBEm5F83t4Wc8MmWPj7ixwkkqwZJLhV8xWVGMoJXXHczyfNXoA852G874Pjjfogor6T7dAG8orT",
  "key46": "tDxcqSTbrzexzKGnAHXwDPopmNx3syXtZqTdhiChWjU2LjKefWCErZzTz2ZHARFFymgS3RwjhqF26DtUwKrLciU",
  "key47": "RfaPGL6uUomNQwYwzJ1N28eTb2jhYhrHJhNnDU3h2XgHRH7QvScArKxamkWHEVLMeuJBN5HnrqqEnL8h6McjXBB",
  "key48": "4bzsaJ3yJLaWUfbUJqQreWGLFcEXr5Ldc5ySjvbkfiyYGnXhToDEqmkUY3eXQ6i89eyrFZ5Zfth7nYEREpNJoeKq",
  "key49": "cENrzVTEtUyYMEQcq4LKGpF89Ttw4PUtvSL7aa3hmZUJX7nJS15Xhk5GmSU2MGbsUbVe5LiQwiPHW7FJcjRsJ1m"
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
