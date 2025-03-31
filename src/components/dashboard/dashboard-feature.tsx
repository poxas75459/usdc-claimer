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
    "uJw6EjXqTBjV7NMubUsaTtSWTJvnJWDGEPHWujdpfyXjDMx325rhoMNqQSt1HLrGGbEkzjTFCp1ds1HtcwJxGEE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wV3Aknemy4E35yLLmfMqiASTexywWWkAEw5ppYKiCtUxPhhnw8hehvPuXrZtunWmuXd7TfhiTGdfcm6EMit7tmm",
  "key1": "3uovAX6WqbnfRdHrh48JRrgG8xy6T52Z4uP8mhew3T9gr66vjnGTVDqoxMtfQRDWSsHEp6Yt4ZLYGx3nebFC48Ls",
  "key2": "53V7JYeCzau5VN3zqABjwhjAkWuGzvJqFCmq75C7aY8VE1HyH1wuWeZaUsiuH9vvkMD4AgqddrGNfZsxoMyi1Ca4",
  "key3": "3iqytABjnPhbNQCbpyqqHB5u9jcJKmsfRyk5tvZq1g1LYqgah3ZyKnTFzBc9BBe9gjbmFDpAQU4VnJEdhm3W6cDK",
  "key4": "4jQTkVtJHadEfuLVK8SAtJNRDtAHD46EcBPLrFB9U7DUsEkcWe5PmtYEo7bqZZttFSpRqLZ3UTeK2QE1Y968xiJt",
  "key5": "1vbDCDwx6Hc5Pv3SakWgB7Kmf3RmPRDFv8kLn5p3PAKLPLWhWUKw5JtXoxN9Y3f5wRn6ehRN9bLTZyaCDGc6cSj",
  "key6": "4kRo6Y29TG1fzCGumY1SZrBbweUYxViRF7b7rd7LPjkdJgNp7mKn3PxEhnJ765Kn8amKdTe2eLF6pAuM61g1nxcf",
  "key7": "3b77HEQzKxKchqwfM8G7BrZ9kE6vvWhdY6dsUzjTGSD6nLgQKuMr3pTF7eWaiWazjBiVTJunanL9worN7XrnYxTW",
  "key8": "2PiZ4qcfSnHjoouv8riPuZoeXnPQbHZ6Jwq8P4gfkBTZNWbiK4hc4eNfyMk3RmtDMzHFc5tibwnqnVsnHHkrfZPN",
  "key9": "473kesSbxRBRxsBWnBm4xms2Zf51Sa5VKZ4binpbmj91YuYU6fuhs6Ry2Kx6FVnzatznh6BiapQWcTqTg2zuUDvv",
  "key10": "3qsBSZzZrCKYAsvnXooGMUzea4ZWYz9B8J8UKamGunDh7h7s9ACZx3Qv8BTsi6MGf6Se4WwKrNsAZ1brFhjhQjWc",
  "key11": "2fQrt5kSMq36cX7kZo9wPmChehS2rvgXN4q2z4EbLWnAf17R7heK1A4w4kEUHEDhb7U3zXuwPiv6BkPivfBHVEu6",
  "key12": "4dCSL4x7MAae4qR6bJZkfM8vwMouiK1hG25oN9Rs56stx2Sb3tnjAQPACCsr5BjibxEbd9kE5wXCpzXY2iTU4E27",
  "key13": "ttUYQPGkWaxBqkgcFeCHrUkcyZHTacpx9ezvCXrMbKrNbcs7NBZC8EJ2jNrie3MKiJgMEvtjvyQFe9CZTb5hskr",
  "key14": "5zoaaRNCyTTMveCJMrNSozegcVioBhS2p1M1ktbpmUMQq5EC3AG9D3Utso2qZbPy765hVMY4uDG8KFzrrcnrhbc4",
  "key15": "66Wobe3tRx8k2thcmdPayw4xzwZHEEHpzbSYa28NBhGaLvpSBae4UJUwCxHqZFnVFqq7TVcPhkxKywotfoyWZxHN",
  "key16": "4kS9b9gxCYrQdBfDVk4p4QVQ3WC8ij9X4n1LY2kbg4wTtqb58HxV6owwrEWWEi9bwJFRXVV3v1hW39byAXFQ7oRX",
  "key17": "4gWkuZNowhqTDf5G2ZAaKNQXm9v5NUgkV2DpHBwebs1okz4rchvnJ45LvfgemBRpgXNuVHUGWyaPutWkgxkcFfkK",
  "key18": "KEVV3tSAxSspmACFpVCATxvT9JCjf8QkJvfAWhxgG77YKGPGm1aizh5Jc28PasSwuYzUjND8mkHh5oprLKbASNx",
  "key19": "54QF6c7vvWbyE1DgfDSSjYzGe4kttp9Z13eLYn266gQVCdGgPH4GDpTSdijQkRwLVGgSw1PtWx6EZzEQzQDijbn9",
  "key20": "5nMekEgxuFUHMiRRvRyT7ivgT9r4rESkfhzqJAq1Nrpgjvdxec36WWNoDMh8oMkv1jiiUDVZBDZbqM1mjoagRs2N",
  "key21": "4AkdfN8dXN1sJPs4odGo89arqy5ADDJEKdr39bjhyujXSqhovmJ6rLCkFa5npxdzPLm4DUQLW3heLQfYVR6b1R8K",
  "key22": "28P5ESUGga39tMJsJPVTnL3pC9wpdMhAiY2nxNpyTw4QhQKVLTT6nTYCZeAXxkKupv81rLbNu5CujBssXc2NUzR5",
  "key23": "4Zx3oLJCN3M6XLZPwo1nXYUFxRggV3SZFQ2zGq6WpFh4sVgEvTPGBXFFVhTH2dVPatA2XVbbaxV3QLjNZGRZVmDd",
  "key24": "4Q2dL1P9dzAQUM745SSt97LBeZGqhFw7RupF5Jq5mYVkhmJBhXdGBVvfz5pENJyzzMvP4zWWU5sutLpUqibYHdsR",
  "key25": "EWLfBfYmUJtECLfeNmRz4RJf6WB4P7cvZkCnd61T47oCPFtD1acWfdPN4eZsptzfgSj66L1Mu9eA4psZysQN8zw",
  "key26": "53jxT2yMFdLrc4MgeCFBuTZDq9rGtY6RbqnyGGNNEHzrH4wizzqBcHGouUCReV4dzqCvxX3BakhwGndmphwETF9r",
  "key27": "64Ag544fBJYHCcGaUzC2aWo7z1EEHQwXr4Zp7aYcD28po4QPJjNt2DaodatisnyiQX8esT95vNHPxxg9Vq8DvJAz",
  "key28": "22avomKH2Pf2knZ4ja5dDm4QreVyTUvx3VpfboP2zK9ZDdh5p6APAas5gvsixyVoK6Jcg93M3YHBV26nwuqhzLrw",
  "key29": "99X8qQxx1WssbXx8yDxph1qwnE9ozKthMbcEU65QiTiBiRmyCdViC5fnRBoR2aZx3pyEaTpQN1NQhzpPdVjRPn2",
  "key30": "31QfrtBq6anbrAKQKCTbo7S6w6bQPcyU9J6msTtHg8WLGCPXRkDonwLbF3Z4F4hG6FmGMdt69MyHGZwb2jyvDgbH",
  "key31": "NESMfwsQvBMUWgF98ViFVenNzeRJKmWGtEzNYQLK3U6sZQbjWhY4a5Ti8KQHnoWFzqGB6Kc5hBfwoj4xrtkJP98",
  "key32": "uPqX1HovgCTE9txiDdycTpdreUcgUtTek91vDVKs7KeVePgYQF1n3E9Thbza6PLZ3v8Dr3pcZgF7MBHTJFNpBdk"
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
