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
    "3aaRNAnPdTp9sRSe4UjVBMr5oYt7J7TjagDTCwNCHHWQPdh9iGRrynBFcjfFvLCus5cET4x4NkxE6hBqcosn5B7j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MhDnL2WXhEFRqadD4t6GzGGpWbmUbQUrPEvY7N7UNLRsRcnF2f2s4b4ubeDTrLaNqTSwtR3oWtehehr7Vsk9PSf",
  "key1": "3f2zFywFZyZrd9QRSRDg5AeGX3BjSU5MX3ug1tUb7XLDjdENjDCUfHHPrJHAr19XdRMyyg5dzL6QhcoGuXrWxGZT",
  "key2": "54kpsC16fdSi6GPEBjwgLjgvaDp4w9X4Jh6zevpsnrxWkrDFPNvVKDeoaKoz4hbgamZSs2MfV18fqH4QKiB5QgPb",
  "key3": "4jWiRXxRZJQGzHwxAsvhFbaGTVqLycMwDjBdGXBJcF5vBxEjBFEqnc4SWtza1jpLy23eSVaxiRk9MsXXu8WNk9pj",
  "key4": "2wovyvsUGXRszqtTc3sAJdpYcgMwVnFd5EFTKAatEJKmrRiofTExhcUjY7m1rH8o1J6m6J42DTLRT7TgdRncnbyE",
  "key5": "5aZW1BSDkdDy9q6MrPnSwXvGVqesdpak1FkRcU12uewmn6C8Bigb47JtMYots5VWfdUyH6amvPkg1bi6W1AAJg4x",
  "key6": "5Jmith8jKxWY6RD5eC6H3hEYyuKmGygM9JLUrcoH5QW8gvFJnZ8R35GR5qL5Nknwt87WrZcUWsMEDULNg9D9doyu",
  "key7": "5Eq2x2Rz4R1ydmh8FFaqBnPyY4TS7RpRVVqFGHA32QrY9VQx683ad6kQCmJ4MfMeaqMzqqJL9SwH5a3Z1Pyef4pz",
  "key8": "kAVbParQT7xXiySoFgNi3hyBgVzLrzziHbepVLLjicpPyAjQdBAAAcqbG32qYY7iew7uVDs8J2SWhpWWp2gXxK8",
  "key9": "t97JoEHokDYppMeS7agLL6fuPRncF37Pq4KFfuYT9EwJovgcrLtX6XZsahKrgampZNcphjND5CtXhXppAfxGNX8",
  "key10": "32NptkQqFBjj9awqFqxrdCaxRcp6kzmGCKNPsQHxkXR3Cadsd7DVpmTNfMCbwpJuNqmZeHcFHW8fxruBGemTBij7",
  "key11": "2j5DtqEERegifJfuQovmFiNBsFzLn4RwcuT3wWeNREkvFSArdqBuSUi73pC5Z1dZc8oEQTvJYpC98UW2oEUZ7iwP",
  "key12": "2PcdtyTFGdVwrznoEg8BA8jJANZJN4VnzvK4nZDMz7VZo71dp7sWe6YGrR2TNZ7dwxbcrWUpU5DJtuiT9HoYKuSp",
  "key13": "3DTpYxfPSqfdSW9cUjXkrpq9mUEMNZ5aycAhjtR3vcf7ujy7xrKsgUFgr69v2iPwKi7WaaxtHCx8co4J54XkJTdt",
  "key14": "3Sw1dfcuJ6UL1vcJbAhy4x1TsG23YrUhqmMz5M7fntWf3dbiof7FTA5SJQNVdhCnL3oxp6zxWjwuDmPH612dbJBX",
  "key15": "23AY1fBRB1neDz5H83E1uJ49CA3GN3Axm1nwxQjrEJv82iQJd3TubHGvRxAdmtBHFvJ6Xaep9f5XWHRgHgSkUjQH",
  "key16": "3HRmhvJV12P7dw6ef6afW2coBZq33LYmaPoaA8Guhp5eta7eu2GQNs24GCenvMWRqmdRs7BHZWFWcg1R7vBhSNej",
  "key17": "4scuwqcg1teFLXhowDYnSZaprGx6ufuhWKnbBR8kUB9uVcM9qsP4gufNCG8XvpUsKDfU8FXMBknPbVUKCNMoHSaQ",
  "key18": "3EQzPnu1V25UMHa4CTeQ2Dea5sdXVnLqoXacqQ2qBC3Swtrr6u2MJR25hJifzHYK1GVJJQvTZdN6DRaMy5C4yrHc",
  "key19": "3YTYzwp769fkoPMWh7VvZCvp1RU31ob9yB2bCu5hwSbDH4QzyeZbtRBz5cuW3yvHR4ob3zrpA8GzgunxNq3XJnBR",
  "key20": "5AaezJg4pr2uGftF3Sqe1DjYun9eUEenGwjJirnGvcRRgGDWcVbca2bB7CzHpW2HfMqPhThacLJiZSYcS7UNESoz",
  "key21": "4M4CNfdhg4gn5R9H3XhHUuabdpEdAEaG1Xf36we4KD5JmtcZk21HM5RW9vGW5Swa8M1NKRUFgXuyauxzMXc2MVZ4",
  "key22": "2DNFWsRD32f2VMHYL84ETyz62vHb7meuWkQbRPKP8Cp3wEG67rd5JVFkBtiUM2jn1iAhCdVFtQy9QLExcjuxnByt",
  "key23": "5U7Gyn8452UtSMEXFZ76rSJfWBbhug2dipuPfV9NPP2NhQCyyN8ppheHgEW9CwsHWbDxsLynwnNVr3P87M9UNtfK",
  "key24": "2KEbPkEdAZGrE8JSqrhroDdVi69Gp7Q869uFJnubouw6MhcecjYYe6TigygQ9zYd3AB3aDJbciSRuWLt4XsjrHnJ",
  "key25": "3MvXX4UKpyNQAUdFtphxnShVHteWidyK4rvoZWJzAM3uZRriVAzjFC6m5kBDhswFpk3VBSk2FdGhnPaHX4WN5a8e",
  "key26": "2Bx6PYwcS9K2SDmhEVz7Tup132VT3yBaVPkwrUu4csuMhWrLJqgLc8UBfYvFb8MhJSTpwmCHx93dkWCi2AMPWQPU",
  "key27": "xTSv1v6gjYsSfjimUfXM5iuwuEErHHkj2rjtaNby2KU5c9UFp1LJQpryEcDb8pGeMripu2Hk6txBqSdZsA8LkAG",
  "key28": "3cBU2Htt3jGikwmoQdaGsqA8npogipR7heYvQPmGeUdrDxGuYxdwZUJEL31FkFk6epmZ6WzmsZz9gWMYZQSHAxA3",
  "key29": "2CDktcwWNu7AALLWDJEo4yHCa8yPTf9SqdkWphXwZo1BXy8i8o8QoRfgHoPFSdA45ZEmCro6G5tan1sCyGBxFmJD",
  "key30": "4MPGTKLNtU8cjMt9uK7ZJuRPSG561eGmhmf22htcdnhvRSQ8wZxZXRak4XqSxB74E1399jXQw5sAQRxwhXdkCzUq",
  "key31": "3rz7ECwtF3S6p8bFEJeGHDjdnAxBvgXqMdCKT6cwJCM6tXky5cx3iwb8A4KhHZVNsdfwr1VqqxVh1upNhn3hXnYj",
  "key32": "7gGGW1dLsqQ1pFrUsD3cr7PdPZC4EMngBGeHv2MoiTMuXD8or2Eg8nZSScxGPGBbkNttZbhjeCMUuBxHK17jMqe",
  "key33": "5UQ8mfA6RxK8xs4yv8c88rkDHgP9yqNtqcD6ndW23LrveDuDtmx49tHJCxg9LYukJWgcVftV3G8Gh3S5GYvciaWV",
  "key34": "3Zxnrie8iVW2pWbeRXFYCnwvKpRV9DZgFYwcgWEQzjpJV1cewjUPS3ayREgKqoJR3dxq6qJ2tbAqZEy9gzXC4vCS",
  "key35": "4PacKQy6ZxSVkRPptZWvePJzE4Z4KqTVcopCjdTcwmPsR3MTnJaHAG5Mmxk4WDBpdHW1s2hAKj2uJousBzRFLEgN",
  "key36": "3E1aFvBLRzdY6K1KLKRjBNvGmhcZZy9tKKcSCSXdQa453BnaPpeHCyHoe1qgNrFSrQbahE56swQA9UXyVT4QgsUq",
  "key37": "VPhkJS89eEZwnN2r75Xgj7EZp7K6oYEPFw4iagvDZBhyC1FAFsMcn1Wt4FeZbci7KS7YXLMa8ky1copd5ZGuR7h",
  "key38": "2pUCa1EY1yukCTRN9Q1VBE36PDuNEW7fNrgpDcJYxtU92yJUDgYr1VfAWqyL5stEGrxr4E7AxSeaxtdXfbMAKxEb",
  "key39": "25LA8MzaAnNFN9tc4VsDcbvst1u7fLrWNgGeGntx6DryS7ezKnU1huCuY4cVF4je3vXYivYbFFX5uLAjy5WubBqa",
  "key40": "5eEmt5zhDEcuGHFrNhdZmLZQA1tJJpwYHi8QGLee57TYyCpcjYoHQovdtCAYL8sSB1tRqDg63s22ExD1R3MP21oC",
  "key41": "5MdanBnZHjvAxqmpU5f1qxdbrYNL8rDtaC2gjoaa6nEzuwL1u98fLVLf19cUBu1FtgiFQ2JWxvDvsEpr7x74PjGw",
  "key42": "3bT7oG1PXhkP8K3Fhrv1zCr1J1xgBgKpqVQkGqE5fiVgvZ713NHJ58Fev6YXbhM8NgdcEVtyshrkHbQeBL98JHTo",
  "key43": "sBJA5VTgx89aU9CNkewA5Z5XeJDBiJXhxfFbLBH8i8GP35eMtZqQmQMfZQHt1CDPsHjRg7z5m5Bm6KDz6cFdRvj"
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
