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
    "RZXWhBe3UXEbZ2TdzE7iAinHaePDaiK66S6H2eWdK7Ugo2BAPAazNSfcvBvVvSaALkatz8ztRT8HcHEpHKjc3do"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dsaPhJhaAKBGS6kjBJLkzzXtixsWu4QxDJuTZnD8Y8VsCt6RwxhNCRAbqdwnEob9oMgDps6WKLBKSGPXak3SfCc",
  "key1": "4wCp2zkNVfeLfZCMrT7hkfFrDYfM5MdmM8R4QEDzu7pULBi6CfMX3PUzA75PoZaZAqN4vNzAsCUdZT3gjTSWMYu",
  "key2": "4vboBfbuC1NDCCCszqNtf2GGep2nDYSfKTvc7fN1Xw8iBzZZ8zaS6hfv8GMmsDaaE5xWXiU3TEkNc7n1kyuAace5",
  "key3": "mPnRGe14CftoJwMX3oUkV5r5NBaNbiA2wKQrMsShduYakS9vgPBemsbFPtTMvyCr8xML8oKjK6heUnSA5d7A6a4",
  "key4": "5N7cdn9nHGFHZfExfKHgykV7GgRFNUj5dLZ7KndnBdECyWUbMVAKWQLf1j64v6NyCUXvaSLi6U6mR8soY6N98WiG",
  "key5": "4UcfyFaTfRQ4dMeyEQEopdYL9ZAaDBK2X6TuC7zbA1B1gibRqfdt414eEo2eYw3HNAz36x7hctTZWEtjCADaNVxE",
  "key6": "2atY5FxBK3Ngr1yxN7oDfDJbAC2AXjbKwhzMLaFbrMCaBoYPhDBRUGC71pfWc7bVRhJKQVpFn5FuN1eVMDWa9WzJ",
  "key7": "3GRH5GaguZfVzoTj3NnKPhSGSpbfezPeVyccr5TiPcuwYrGajSeBAfuJ2Bqx86wajHiCWEGzMphNCYYXpjpMoakP",
  "key8": "EUNrMUiq1ziWgFLyxFfN1oPCizR6z9L27b1DVjZSk91C43PXQtdBVJK2wcgzhmaWNjnkxZyNS6cK5B3CBjgvy1e",
  "key9": "4Nk1wf44uicbcPyLxqzngpNPzrpx392iU6m6RJ9TuTE3wwexcTPnoG8mS8JhmDDWcLZToQM1YeRQJNnpxs2mLQPm",
  "key10": "2ydYLsmQsdBuCV9dMPJj149kC6mMF9EXEf5qGCEFPgXArpiyGznr86eHZtjbYq1WTjAp1JKtErrMKG1MZ5xBFQWQ",
  "key11": "pgJyQaXXTy5zJv4NCuXsy25PTSm3YvoZNA7jp2jMhgBmuiogz6sQopFq7vvxB7akGxA8HimGGjVgs3GtLeM6LfG",
  "key12": "3a462U39JrYCBZ8T4CPnSYFnkh8rPb2F5oZ82BaXkN9ZFKD1QAV8YtPczRTE2CcRG1Vu47ubpAWjyrKiJH24kRYG",
  "key13": "4pVtHmsDQjojZy1S72Cp7WFwaQVDuY4dZHtXaFKVSzHeF9hmju2YZyHdkHMb7kBMs5ZBReSoH4GoSh5YW71YV5mQ",
  "key14": "2VU9tdN5xjAAJ6utVMCyLbZnFq13nda8ojUUHt7PiaYWS2mzM6WbWxSbt4AeQ6VDmmzfQQ7JsFf62Pcpbe7XC1rh",
  "key15": "3M4v44tJXvXgiwR2U5bfFWRexQxQQsZGqHbSxTAgm3onYvi6suHsfcqgZZLR8D3zCkZBxGvvWB57XwzHcTjob8wj",
  "key16": "3ga6FznJEy1KyJreCTx5fd86ZsyWgZSv441PHB4uQ8hbipZdC8CuYSzvAVzvkJtcfDtQrAFpZo3sznQuHjqoCcqk",
  "key17": "3BgvePaVL74CnGo5jvGcEEz5993XmcbpRh9HxBGzcQZ9iK97i23V2rJH7QRnVbfZY8V3Ev5S4NnGohce3gsQWjcU",
  "key18": "kPFS9ovD92Hb2rdFpChTTfpBsbKotE6DpsPxrYxTJfuUAwMSL3uPatGxMdwPqNDVfn7bDhZ6L85dzE1P6iJiMNp",
  "key19": "3yehsz8ajruxxxNbx9SwJpmSPqZCyWmygix8MSo4iynLQMZEBuMXg5Cf9pko9AV8JAKE7LdC9fRk2fc7YAYyrgTV",
  "key20": "4QxbCBTKVPXGKryktuw9gemWf5opaXSpTWE6vVo4uCQ4pvg7y3j4TrTUvUwgUq7xbD4s4z9yYq6tSyx6PVvhZ3nm",
  "key21": "4bJFKuS1junb1Q8mUfvotSUqfqraqPWn3P21uanXJ5QHYWagJUJQn8XvMJTsSa4xhcg5Hv5WXyvHWj2BUEHaL2GV",
  "key22": "3fCcMsaXqWB8uGKBuzRCDQPHpLqJ6wCFm4Vf8h7eAW1cK2vCLNfGoa7rUvaPRqNGfGKMRYQVYnb9mghswKSpy7fQ",
  "key23": "65DDXbjU2UBPeEnYFqbLP5nf4zHKapsWwnzvBqAEHQaG6S3RRLbBgp7kDUvgAQ2vWgZC3Jxqa9xi3HtQ4X3cZqsV",
  "key24": "2ajhALzsVDd2a4aWmycGYG2q5abuMj2c1QCQ7PKEuj2iqhM5Q5x586VE3pXGUKnZkSjmz6AmhAj4nYkZCT5m6duj",
  "key25": "3pHM9GT4aFtWmm5a8zDT35qzYa5vzro9gMa3DBDKKYSKX67ZGU1uuayk5NBJ8fCavXpRt9JCTdZUeAdvvVJq3R8x",
  "key26": "4henthJ5vHipBiZLBCuQfs1ZXLU9UBtaY9pijVWAcaEeeABmFj5wV1LpUmtufP2bFDA8aQoDBzuxSXcVB1sTyfFu",
  "key27": "4D2TK2mvj3hKmhm3xzRtDppYNXo4QY1EtkjpHaZiLkEzfCMogtJaphA5E4hr9W8f5km8qLu8UBd6QqxQpUrsCsdw",
  "key28": "3PQi4Wb9fEc88P9nJhWrCSTDVomD8QCMnck37ETMKQMhDQYCpcWth1CskHKcab9BgtygqQgzcvbX26ipC1dppMSM",
  "key29": "425DJVGkrC1Qaa3iTmcReFs5mWAwWQ757gcwJXs1HcMudhA1apTy2pJTGBCa39AKkHhvrn2TTYDhdujBwHtRgYzt",
  "key30": "JYSCZjfeqDh4J3PXcmtn5dMfkPqhdp5nM6ASooaUwhKjdg9B13z3SEZEpQU7u3fSqssPLWeMbDDEuDMbV48iY2M",
  "key31": "61zGzoBD3YY6LLzf1ECKi8QLEyUoE1zBq248A7VX67hyddgcqUVPJKeaNMqriwCEXXFedNxPvybq8D9rrMHod17P",
  "key32": "5xEcdXyxQEjiQ21SLxqku1XBFZko4Znv1Yyh57KJ4DQrPpiYb42Z2KWeMmbwbnZfaUokiL1t36FpXooubcrPoDDa",
  "key33": "5cEWwnuuBkPWpzXMxqB95CCEMthAwGLRJJhBwsHPWgNxepw8AoYuWiqx4twoDTqLZTvji8yv2huuBxZGBN7ZLLRY",
  "key34": "2K4CiRCbd4eR8voHwUkHkhCmReeWQhxaRNzygRMs86AJAW4bqEfhTJvtvMqEpjsFa3XgvtDTghvu6px5LMvDyEgt",
  "key35": "iWeY4LUcw5gkzir9pVTFNHYZRcXCXLZYiWbR56q6afxkvq5Q2PD84VRsjDNUMAxvvAguAhBo3HGsHX824KjxvRk",
  "key36": "dSnyDPpUvnVznw1KPnqpMmPad27VmiQAfM7AswNPJSJHupcSAK6YNPqVpUDPCecix9jZKyx7XvSA51vgmup84mw",
  "key37": "5smpd2GB2VLeNuPdpUGszBA7fjfeH2uwUgYcwsV1spyDcJTshdWrBesnA8trT5WMregnzpoagjqvLLzwX4PhRkUd",
  "key38": "4a1yyDikM1PQaZPXG6uMzGYk5gBQscu8cj1zTYxjGqn4dWvnq91so8WaNyRE6o8yYeJafnbZCRaChgb4k4Bc9bF",
  "key39": "5uKekEguvMfRtGdC4Yf8YHwcv8pHGCS6oNrxEJ8ZGDDfFsAttWDtf8z5PDuSg1DcbNPSGLGe2j2BCQv3eX96wT6G",
  "key40": "3LeAazMEDGWqh8RcBMwoxU8M7wUjbSMoEaFsoomvPykWiQTHpfTwaACgYz7uVYGzGhVteSHr4U3444B8ZmmgWE2K",
  "key41": "5Fihb42iui3fv4RR4uCgmEmj2RY9vWi2w5QcGfMmDTzcqJYgaQnqCgGd7bzgJ4vf2vCk2VLKpXMTDsXZv4rz4J34",
  "key42": "ketHaA67ui2WiPGhx9YPDi8yfiYBkJ5aWqrdye8mhcvcX3vSi5WNFSxMkjbDqyBY6h4Vn7fFUhj2PLPz41WHLjB",
  "key43": "3MKKjYF7pDVHt38ZvEMRw7ZQXhPvQVxfcY9J2VXEJGD6hhWMGjmkh7B4aFW2XQEQ9FKjJYZFEUPf1yfeBmzp3brV",
  "key44": "2anHNWm7GMafn1dJfntUXENYqLENaaa3YuVkdojzB9XqdjFjF4GkR1jcknsHz6JcYbyQ39ntPR69R2MTPyoEod3z",
  "key45": "3Jes3wAZAZoF6nxP6qkKrNqNYqTqA1pDr7JaQB6qVmC8HF1oZgt9xqXh6bZZ6m59Azfordp1rLsniLaUyr6cMELE"
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
