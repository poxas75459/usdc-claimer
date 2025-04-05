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
    "3FGKfwDfsuEVExUSVZwGnR9ZT7f1UE5PLvB1oZroLpHcA81bz5WCqiSQhnUgAYCSykbjP2gyHnqN8MLozhXot7ZG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EY4v8XwAwodmTeDtuGSo79TaoqwjyzffVs6ZCKVngdBe5Khrz98JGS2b2Htxq9XLCLbBjMi6EQG6iQGYtXZWiQv",
  "key1": "4tFHJSbYpKY5vNdDD3tGZ4Nfr1E1bB84sCiuEFEgscqHP1C2hNYsWffudCjZ373CUAJ2KYM5rcXaJ6pQW1J7iiz8",
  "key2": "47w1qf4zHhKhEov4NRBHEfktdKLDXjLcN7nzzRs6j1kZY8FM14ptvcB8pk2JXoQBz38ao7DkrN86UQ6BmdYmpKXj",
  "key3": "4zZk1VxJksmWxHtmGRb8qyz4CtHMwafVAAZWJetqAaQKvjgZYP64W3or5VmJbAfMyUQwaykZB5N3ntu1HmwQDub5",
  "key4": "M4WAFFsVNBcshCtZS4g6RUeNvScXBtmga14ZkWGf8yNVquW8yN3WEhN7sVbuGzztnhnSJn24b2KUiDw3eFYndpY",
  "key5": "mYPtnP39tQX1gmy75FFX1S56uddDYP8dBYptyBotb2FGP7PeG8P42faF5JP4JxWzJ9mzcgp2kpXfxUxr3d9Ycix",
  "key6": "5VnVfp6NABrPDh2E9GmnhJjBYRzR6SxYZdHSZu5M3naHRPSUmoS8XNxXWyhbcVvX9SKQhCVM9tMKarQrEcBTbAvJ",
  "key7": "3LVRaXErjcKCM4RpQ6BsTHisMGwCKf51apDLwkVFbyTycBtkghuHYXPftywfhjYEdoZqxuQC7q9ma4XW9Wm8Zqpn",
  "key8": "oLfAULEhVdoGfCaDpGhKfxC65BnZeQzUkd8SWmQirVvMrZSeBM7C5XioDNzpWVGsyejbLqCt83X7Su4HYdogvgy",
  "key9": "5w8pvRqvHUS99c5LKNb9UZTaoN1M3cPUkTLdrAYhkibs7KvzBfDgr12E5ectAYwYRf9H9wR17naTuH98qbPLyUx5",
  "key10": "3rP8FzPWsLe7LdJkaWjsVR1yVyjW8maS6wLgL3kx7qmbNbAFXjorhu83L88HA2VQ4QPx21dXbk7v55mq2BU3qzZZ",
  "key11": "2eKujLnxwix7P1mQutsbW6jEfqcwMZ1GZ6xeu2LRXxJV4HxNKXwyPnydgFrzdoKaPehzJhCVYYzZsSyTdjkMK4aK",
  "key12": "QjY8FW3zCTh1XqthKweyhBvY9SeeQAdjGCerKqMXqh64CJ1w5uvUPM3KxwL9BHPQXEvwJbtjPU1xvuLzamRQRrp",
  "key13": "5nMjUViNAoMZ3PmjkqDiqWngHvxqgh2mPEpqVmxfv1LPaUcbQA184EYT6JT7ZoXn9hbT5zoU5yGqSsh9jB8zfsgh",
  "key14": "LE5HrBy3LkvgAKhh84K4B9aL8YxaMRXifkEAxus4S4EDiN3oHrqZdv9bmEawwS2Mo3tAqYm1p4VxJ9KPkKD8uvY",
  "key15": "QphhhHVFwmzuc7uqUN8qvpnfmvATvCWFzvNU9G8VFnij5HUyEquPLmasK6ewxCB8cXpBy3EpobCVutR3udczWow",
  "key16": "bHUresYPC2dRUXeMV5tkeqTqM7YNBrNE35uEfPDhKzm9E4aGt6ZiBZBKhqEpobrWuHbZyZHURZTBLW8tZT7dpDv",
  "key17": "5V4cRgjXf5SShZ8ZgHQD8nhfeSCqgNe1DfGMzS3EYpNWfzLaZLmJTck5ZbkBvSn1Kc8wHBzNACQbtrwPGm4YFyUv",
  "key18": "21PyjKe3AVcK6agodn6GXNq4BfHyNTZEFkACL2FGXUMSghKJYyervK9hLL7PivCDo4c6nYKbH4cJrHFgXGuwJN4B",
  "key19": "q3C8v7BbEGRBQfpnGsrZ4Z8qeAGWDSvWZPwfmTWB86ChLukpv9LDG8coWeRjopQ2YUXa9vmXfmEhzBsaq273TMV",
  "key20": "4iXoQGckebLu91qqHB2ZXM4nodZT9pMBntBJ1QhXbdrXyfjdBj5w9ySPJXnPxUjQ5iTND4AbPWYYybjkz8tGqYUx",
  "key21": "2dqaGJA5Gb1rLYvJM6t7DmHVDcM2cHRTgNEjyQevoUwKZPyo1AmPjmCe2d5RpRR9ehUqWJySx7FbupzcNLByyw2d",
  "key22": "2oHSvfDuJMkPjWC8nhCxSdsAszL3c4dSyEL2sZLRQaXFuxbw3sSYVS4XBdRy2LvVk97W89V1xd37Go8iadeNJHTv",
  "key23": "2abVvrbUaSy72gnPPXQ7EVtUq1nnSSwBtt7hVVJn2L4B6opPoTf1i5fvWtzcakDRm84PiFuMt7sZEurRa995k46q",
  "key24": "3jjZp1ZAbsK3n7SJW7Dut632Lx47jUiYPks2LyrykSGWLHd64SeAaCaZGdRqw7fHLUKYssoqLbyQGqC2U3q2jHzS",
  "key25": "4odnnDne9TuS15dXh7JzAJ3iPVPGHuw5aY7wKzNqiZvHSjdVJqXrpYgmUyAZGWBfuoK4Vtsadnr8nLXZjFGn2YGY",
  "key26": "2DVY412YwJwRmMbcyrjPGPtEkmmSUZkpdFWHbHtg1WsXMvzAZLKanLf7apoQhhwp5x2YgasmTA1kN4oMRoJq3k4v",
  "key27": "aSaFS3cRH3egv7MB9YhHMSBBGmh3AjwkobjF6AiZXWnwy3jsirRQyuw6tUSp9bN4XVioS44p1i1BySg1DXvr4fT",
  "key28": "419iykY3b2EwNb4noRrfP4gwNSdw7yPDEyo43tS9ouX5nghEM5eU2SYuufimfgp2EGCvjxkN1UMVg8UXpiaFR35U",
  "key29": "EKSM6UorQipcvFt3oRythwK7BnwgsD6LpEA4MvSkEzpXCKKFZU3Ld7goH1m1WoFCNyCLtXNGt5jZijQ9QikyQcA",
  "key30": "2EKNzejBdD9vjHTrJ2wRCq6tGkWxhRstymMbFkXctZYtkynMs33LueT9yfLLp3hDimzRkGYSMgALVgRhXeL5cSUb"
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
