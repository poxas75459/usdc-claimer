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
    "3h17FVmFX8nRdm4hvhEm2gAj6WF8zHw5vMVNJyEX4wmPakjWEWxXhx45i8qMX2YFcYk6e4LVYBZv8n6SG2fmEBec"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CWhGZvgRZAeZwivAaSdBHqofkBDFFmPj3U8b6ZVWV2o8DJmqbN2EtkUZoYyWCRmFA3x7qUtgj6nT53LC2MAjzAf",
  "key1": "5wzGuGSS6WFfVxHe77pVUiY18w14gcGifE5WetYMtQEo6cK21TuZyR9UmyWCq55EAnTMhTKeV13aqmv3oxd9opLs",
  "key2": "55TuGnDGdowGc6z3bEc6b2vk4A8MSVJo95b2vNNRkH2BqYHiJB7DtxYBeJYfBCF23VFZzTniDyVQ6hPpUGpgMod",
  "key3": "5KTc5y1c9p9AFmadGgcNCBJWik6yV3tiH1cZV8efGco925yWxdKJJoGG9BSUAYheWuSnGbLkwVZsYMLZCFrQfYYA",
  "key4": "2EVMXJfAk2q5MWitRNwZWyfEkW2A5MfEWJmpmmKCgVygE8AoXnaoxrLNpRnWScrzGoq9gXSWGDvMQPm1TShLUbzS",
  "key5": "2zVKr7D6VvGn7uF59jWEhg9egWivWzMkoCUbqrKMPpSU3zse88EtWLq9hCkUwJx8LX9odvosTPytwStUUsyVX6tu",
  "key6": "5kNWNxnKNwkiCs9gBisAP16XTeFfnpDK69GwrMabRUo9s6jK9tj2c5UAJReThWv77uurUQuEPJzkCZhUAqPwxNRz",
  "key7": "3Jm5M3bT77ZHU6wgUuCg97bbXCwBXguZ4vtrGijNux2kyCuY4UCiPxRWSVN6NHsyQWp8c9HM9cpzPDS5LmRApxZQ",
  "key8": "2h9zHSHAHFduQWf1f47K5w44J8eET993Pk6F7K6ejWq8hqn5mkufyCv4KmC1b5uKYFzVAbm3vEaTnvpAsYDs6gQn",
  "key9": "3mNMNa3d8cpy6xtPqPnqK2PsY4mhcZbQ5847BYn88hMFMD3JiJ1pG9iWBUuyyUCve44cpApudAzwk3LK38r4gtYt",
  "key10": "4oWua1maJLrmY43FKWAANEziQyiNo4aD3iT5fJBdcguPbG8V72QJ62akapZbaLe7iS6W5Nzv88pJEFmtiL47yYsW",
  "key11": "3j8bMYq9toSTwA6P4nNeBKgs541sotNwkNUw8GVQun63KyaAbAU2XqnhTrzNoNZG2qXPMXebsPALTHstHww9MQq3",
  "key12": "5bGBaceKsr8b4TvTCzodEurmPFVLfr4mY6W8yG9LDjXaELBPfHbRDrYNCb2TuPyKhcd1sn6VGK6SYzj3QhrqhqND",
  "key13": "25SjPDWXFsVxb8rJ6Qzgd6Ee1qQEmvkxQyr5DY4Cu9ghqjgS9v4v6Dq4ChuvngLSeoVfvGL6x4RmXuPFejNc6GVH",
  "key14": "3JtYbkAjA5zScQySKjpoLe9ENqJFJkD3taeu73gdFa2ZfQ9i7FkxUzLDdq5XvqLZfZ9aaQemmQSJrYpquBAm4tyz",
  "key15": "4j1TKmtPLqtPT3UiLeuTcGvYfkxdjrX37q1JERC7QRTJ1uDrrYr8pmR7Xz6TUQTYvx6ZrUUnqXAmoLY57Fp8rfNw",
  "key16": "2KXQkr7HrpKa3BrT538CC9tXjZLkHCxv9Qu93SMuaDBKZPt494FAevWFwjD86HKVSkq4Z526Qt8PzbWZxdDNpFmD",
  "key17": "33qRguMMLEs8N8C2wxf4GWPLzuWHMv59g5CUir7eHy1vbhH8gmxeiuc8xSkxW43MN1auBiKRiwbuCX6LxJjTMU66",
  "key18": "3Ghfh6ogSwHzx61ArfDnFCyWGeGSJk6WDJw9EuBhjvVz956j73xedummSKyADMbLBTeqgbBuKqUN67agNQhxpCc9",
  "key19": "V5Q8pJbPUWqQsEVAhy5G4tcpVDnax4Bnfk8Msm8t1sQ9BiDBKk6N3tXNZzPy8ywq8YHEFDKUMFYxuK7zyFdaUzJ",
  "key20": "4aaQ8REavsYWMCFGBeQp5Vnnhxknu72PksA4osAqM6GNLp99hfw7UUAyFeL9Nj5ynWF6xsyxBtezEbEC7TinFDEH",
  "key21": "37pFA3UqVsAkGByspuyqL9SaXA2idMVAcgYSWYxn66i4oxNG1UCETFdACQtsmXdvfB83XiMdUnFYKKcRvMqmo38U",
  "key22": "eKeKGybrQxQgyrN3UWn6oNQGeo1RYK5cosZpfsc4vj9PEj8fVeRPK8ZmHhV9iGfQuwEmtDHJS28oqwjVNzq6GTf",
  "key23": "2EKN92vjneXvae77cSw83uBR6eWu8K7gP8o1TxcxgStYwVmo23NctVMMhdV6iBPg42j8VUE89aH7zXbBKjcjJp4f",
  "key24": "3GXtXKbBGJ5dNANEQu5kEcXyoAgawTS2W92obZBCZcjpNP4kiJo7fySoH2xkRzqBx8R6SPPgPoDf2UqQSwLkDJab",
  "key25": "28V1Qtx9ThkMfWWvHAt5gPaJJdtj3NESum1EBdwfNQPPW2DMA65WEtNeDa49wN3ALXVpdbdwfaWrynt51i1SLVZy",
  "key26": "2wSAi5L5KfTqRuppWu8JcwCtYmio7gFaDKvtVvBG4LdpiF9VNHFGXYrRHfeG8hLZNzuyigmUdcGppRhysRQ5UGne",
  "key27": "5HFHYG88jQisoWAbKbKHCr7grcGPUDwmJ2v57V1j7ZNd7VzoBTDNMSBJm12BsYonhUHWi5iajKj1XEB5m81fSzHY",
  "key28": "3K7Tu4sWU71JiqDAaE58TUWHup4DP2rdZ6DnMBEyJtmCqzpmgBdwr918vJ6PRsZpBpGzKmj9RomRZTtdnzZWiL4S",
  "key29": "2hsByPRpvV9nGNboSmH3mf95Phtkviyv2uPtywhigNmuoA6roC5SPFnsJPdMhhShzEigs8c9kM8AeGcY2gxjcnXN",
  "key30": "4Zqb9Fzp4iTkr2jVSs3C7r6sEnRx9xFmX35orxA3d72fSsUE6dJszwa2ZscPAPKf7t8eEsxXBSb9bJBkesa1L2M2",
  "key31": "5fiW3n18nLzfHFJsybe4i7yBMT9sijGDQ7qEVEcCTdUrtV6GPqsZ7caNb1SXtdpgSeSnejXcbtQsDqDcmqs4ag1Q"
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
