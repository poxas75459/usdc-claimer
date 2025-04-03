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
    "3S8bNA4hsrMdU2J56JdZJQw9HVDFUWkPSBgVXrLH8zpDGSoecREuSBiofiEduGuEDk68sTYeS3p9KNF6CZMvseEN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AD9EEZZ9VfpdGpXvraibyqhEsuWy2rqifnR8hfJERWUdfHn21kkMbf6rLfsSFZc8rTxAKncoYKwJNzQdZAgkDd9",
  "key1": "5KU9wdpdybXCCF6gE3vb4VEJBNDDLeJ4XoNav44eZUcbnkiszrbD5nT5QAbCHK1mdjjC5D9vXdcAGXJsHbGgKPo3",
  "key2": "4zzdVywRnUP7JSa3fGHK9fa7DPGKbSw7Q59ackuED8wGWY9ZZ2dbVDhp9vmhQSYWEZwr4TYaLqHYGRhzJmkfMet5",
  "key3": "Tou7AVfhDspbnZgY2YE84ZvAs5zRLAfcte6WhDacev6CDMfvjat7jPdTQhsErHNAcevBFR9Em1GfKbbpg3REipF",
  "key4": "4e6mePCHBKKkFNR3SpRYoJ53WTBix4kRhTirTvK4FbRcTVWsVw4DQRt7QEsMXPnoDn6LFTzVMpvYyQrhCgEegneF",
  "key5": "TxyZ6UfRjgt7Cd1ybfZCHFNYMWQNr4Pu6ceuxQuhF42Yf1i7pfDdK3PVFJ6Lb1Gb8aAoEjpcKhFU6JBVDjCFiHE",
  "key6": "5gAMVAicicevXGZVMS6UwrYMXYM2Fe9Yk3nRogZF6ENt4wSzqH3YPp3Qj3h3HycbatrhWuU2kW1PxDTmpW6sX6PB",
  "key7": "2eAGXUtosSE7Lym745FUi33EJEaiLEJuyJUUSxYF2p44MCbsi6qFtG2VnwVQLiK7ba64JNbyNmuM9Dymv6LVCUiw",
  "key8": "idQDG8ZY7uQny4JQy9BS3uErkQJb9EWSBU6XiAkHKUNrJJ7R9g4bCukMWGkzYPTB7QCqh45NpgLZW6rq3jrywB1",
  "key9": "3aZGAMAg6dSbAFdJt5dYi8yVFvw2CTxkNvhuByj6guMK3DkSV9kfdAxse83S6MWM2vFS1kfMLaEYW2eWCq9JvbBU",
  "key10": "mD1YK4nE7wUtivctZUpBeGpkSet2h3Soksv36ygVPDECJoiQCm15cWWPoUZFqyNRWLw2LZfTFwNU73is2jrADoA",
  "key11": "5JG6VemU74kkpoUDMXsszSU2utAtgMaTw12EfpSqtjPByzVpFZssP6QmEB51ghyrvYkb28fDWViBUD5L4GducLt6",
  "key12": "5r7i5MYXruQUq1UjhV1eVVf9Rzir4uNHrdyDNoURtX671vRixGhzpPoAcgpKSDoGhMzngxEuubypixRnc44T62Hz",
  "key13": "3sCn68hDWGiX4fCSoYaQdNNRx3QoqVkjKddzyuyReFqdfrp64XkASdnT43LvZiUW5Z2dS4h86B1tkof7bE1HCSLF",
  "key14": "FsQGxcWze2hTN7CYnNh6MYRHBxZBTJHFCXwDQbG4TxJ6Sv7fJuvHddtSa8YwPyTSLezWManQdj9LqLECAfvSEr3",
  "key15": "2SRFw2TtGMJvBE9oCAx8rh9Ad1C4k2LacNVTneYKVMr2YquwPuKPHH9ZoBX9D2ns36vBuvzeaKyC1HjuYKAadh7n",
  "key16": "yy7pUvYQeAGDMxA3PLU79UKXargGSEbeaGEQ9PoyNp4U1kNMCKrfhJCVpGepa3GbGpGZv21g8tuJwkTW7KNZbhM",
  "key17": "2PLJpbPd9P6caW2uR92fYPM2bdbJnJnTKJfU9xZ41Cxg7hHZFaDkVohXu9tKRsHHR8geZ3xVmoZ2AirYa7mRb77x",
  "key18": "31uPEAvBgcNX9NF4KSepAsyKsFm97XQZLyuxkm2vJrpTahf4WZgZHDhdTKxXw8DjgZVSiW3XnPnHVEfAC6v97kqC",
  "key19": "4wH4phXXSfg1xn3X8MqMkqrd7VCrb2epjkcLwwyVAtZ5iJkGPeis2VhjwX3ebqCRf66NeXiKMramzToG7pZJ4mYH",
  "key20": "2kAVoTq4vWgsVQNNxG3HR8usq46fwrujxXKuFQ53x5HaKbRLVSWincVBgAySXQ22XbjTWYsm2A6q7avgz8Vypvju",
  "key21": "3pWMoKZ7RR1Bi7cDGaYfBjp1gzTGUep9gjo2qS21f2Ne2KcWCGtx9ap5xy3xXTMLZ4ZtYc19QmnWtSPsJMD9hKs5",
  "key22": "5CuqJTcC2CNHB3Ngr73KULwDmKctvs47rh1vt2GMaGC5KQvT2PdiWrQuCgwMFMD1633j8CQwiL1Fe2y22sXGkg86",
  "key23": "4tt4fTw8t5KE5nAop8UtjPECkVYd5yfXQPQvKTn1ddZUUDJz59eSn4NTvaeowXBuTYBk6DDgC6Z8gyZwFDN3PpXP",
  "key24": "2mQo6n6ya5VxCJ7J7fZStmXYJ2g4x6qbMcFqpnRbgD8wMSjNHKGRUhCfjxMWM5A76pkuXBXPDo7HLAr3JmvjY8gb",
  "key25": "5Gznyb1rFhg3X1Wo9H6VE5YqeaShpvnhKQvGyNkw8cXr3JvsWajhvUGGhaHvdTnPy25paGRDLKPdFEQUXEewbAxo",
  "key26": "51ioZ3cfBUTQUMe87K3UAhynmWmL8Dtv39oCyieykTiFv21n3hDL6PQVn3X7mFbmuoEdiWg5yutCNohhMBNMJQLg",
  "key27": "61tPkweGseFGBYR5Z1UQNZN4ZYrz3RfKWA2VYZkwt5xhJJvHN3sgERsnEE5CwwHzWspFYtVJjs8cHqSzH2CXPuY7",
  "key28": "HTZqkAiuLU712DprPR4bFucaPZnFcXd8VkP74nzevYXw5CdXBAR5or7CgCGxSqpgWJbNvoo5xNaFv7AcShTeFpw",
  "key29": "5aZ2ui2sJfdus4RCvT9by3Rd3LtXM46vyPvJbruYoaFyJHRpTQURqvZEfCZqN3Pre5kat75SqoWcCE89EMoGEBUU",
  "key30": "MqwftVKHWfpQiAnDcytNNctRjGokfk7b5s7C1c46k8t3f4T7KYrHAUjnJBqdrzU5uE8PcHHg5efmCkCAB1JgmVK",
  "key31": "Uytv5G3UDaUtjRbBwjLwKQ6JfV7Z1ZASwvw7E8yGJky6cCpghNYVfyytPtDcD53sRjGsXtGDvncSHPgr1Q5Q7ZT",
  "key32": "4bvXMn9GsZ5aWs1emW5EDHvLsxarCZ7Z1GpTaX9ATDwT27ycQ3j7Jj6DpJpkD8F41XqTywUkR3DnAQmUZUqVWjXH"
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
