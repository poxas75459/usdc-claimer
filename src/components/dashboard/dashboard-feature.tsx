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
    "4QV5b1XXUEx4nctujfd6oPE9kuNUebxztFVgfjemRDvFNSRVK6Vb3UArTDbgVMEfrpCQHpCbVPU3gZAZWToLjm43"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29JxDxUfXyEonRyT1uyGkzFWkbUCGqm2rfKVsVNkzsFPNh2Z7u7UC7ZadXhzs3NStSoufMvjsbRF7i6vsX26S9Be",
  "key1": "2NaDo1HmXzRaiVXjE1Q34aSjYEZe3TM5ABJvD8PmXVa6gmK5GDvXvedx69Si3JjPcmahhGeJHhyangkL2vA1m5dg",
  "key2": "fAu7Sqmpfmp2SoUNZwGBSD2xAQc4CiSpbqaZCUq8Uo1Cw8HJ9CQVnitcZ9XzU7NJet4HsZ19f5YYKg9kkfUWWCH",
  "key3": "35XXBXFGuP4UYPkEnUiNZTxg96hkwLiHqNb6rFY4vYmrD3obVoQSm4w87zT4xwoW6Vg6KuztEYCsUAHwqGZYrpiS",
  "key4": "3mU9VAJyBCGLtBpSeEXbxDcs11sGUW2J7gn1eGbQyaaxVHVxAYZrnWmZjm2RMaRFMmgzQEjmvYoLHSsVbxKR1QjV",
  "key5": "2wcT41yMDK3zAoSkZrVDwPitsLxTe1JNvbmX6VsPNfwkB7yCjtQdmd7yFbgnZdxLjfLo5HfpoQis2k78zD9dj8FZ",
  "key6": "2xxSjv3XZuQYm5V1G478oKdWQpfwC25vwvNTHGdrPVWYpDWQ1RraEmrgGEuCqNdonofp152RTLo57pBrvpDPvJv2",
  "key7": "3eL8pZyqFKP3vq1kDWQysDLWqS4DnYY5yQPznoiCRig8kWhn4e7dHbL2fRcsJ5bHqUk7zdpkNUvK1P3nRmJRvFQj",
  "key8": "zLEwTMy2QwKpr727rPvLbF6e6FtYixBNFFtz7Sv3S2k92KhyWNyZW68j8niiY9gwDdMEzhjm84y2cZNc3zk7K4E",
  "key9": "5warC7TcGJEEqT3dNdU48nisDQPKTjKZ92rfganXk99kqc4nSXPJLRJm8oJtHgidQrBmXRWw9vUFsVHvvjCRS6mp",
  "key10": "3kVV2fsyWeXq6h5fiWUgRWy5KAdj2xLbkN247qo9E7LKrCPHhhjzgmu2he7T9mdA6sHWt4ToqJu6ApcUJpvVeyps",
  "key11": "2Hzt6Wa3A2coK8TbuVHNDSAL8CwiHrpvpuyntNPLUAwSizLgW9Bt5DAdA4dPjDjpgWHTfiFEZtZKuXFHqPaM5yzp",
  "key12": "TwZpi4AJLMGzZJkR2MZWZ53vNNdFE8x24E8paSd4Qy7e9QUQ5NC2CCD7VWCCriLjDBYcXdwFJojZpJGGh2K9HiH",
  "key13": "3HsQrz2BPssF1FhVs5iCykusx43DcixH9HbMCP2hG44XkH4mM3pmA7YwjE2oaJzHBkFgQAE4U2CL41aGzTM2pgPG",
  "key14": "5nCKwVHYGYi6Y8hKjzUFhSNEFJXyGSEij49ZzPYYfUFx5ibFuUePMioP3JQ68Nub11S9Qd8FsDZEUGh44g3bmMq3",
  "key15": "5YJHGVdtDkzhdNQDRPPg9NmBRDU5KJdkkYXsmiwv4XpjZwhXcaC7xYiMuEcScWskfEDBpng62rCfLNMbYoLGScpg",
  "key16": "5Kj7DBjTYcyPJ3uC8a3fQrCmx4q1YJBJLS8Hxfy4u6WC3A64DDvn3yXyon3EJ4s9MVagh89KZnEKB67LwhgXKem3",
  "key17": "2Ghi9XR7mavUhpRytpZQgHTeUz8CWNk11zbQJ66JPE3P8CiRDDAuXujZkWiiQA2CcT6eeAdAfHTD5MteRPd6WF9y",
  "key18": "et7sRwPhkRQ3ZtiqgkydZyA4Gq4azD4SJ9ybBrwosk8wSvYfEjGVdxHULadru6tcoNcAk8sPD6wHnwVcaoGKkK4",
  "key19": "5WC4pK2aMfFXLPMWjzFFo8jcdQseSLgdAcJNr9W5QC2mfKbbeBUKu87DkaaRFj7x9dEYhxYhWZ41VA3Khrkxbti9",
  "key20": "RSVAnqeDce37j5TPf2p1LWfHwDQMvmXSR5DGxTQg48HAafFjvBxzz3jwz6Ar2qMYd4BdBM9P7Lu5PrbPiTZsMnw",
  "key21": "3EvwsN4RYij4cna7mDECzUq5ZbfZaPatnrTVqitzpfV5BxSiCBy7EdRinM53VFNXXtaJ7dsK4Y6j3g74iumEsmLK",
  "key22": "3ea2m6G3GgpRPrRhRNZt4f9RFBs4wQb9UG9wgKJHEdz4g9z2a1PppxR1EGuVUpGLb33pQFZpMbMbNnrmLK7mH1HX",
  "key23": "4HwQSAqtpYk1fmRTdHKkafzfc1FhTsVSXPRRAPXCfS9zBN79u7EobDurUFWAGUSBgvRCX1uSi5zDGu5HHxvVuXNr",
  "key24": "4J6DyK7x4jURVkUqNhpon3mvPHAVUQDE3NrtFZDT691qgS6y6DYAzVuvv9X7cE7XMkcVJ9yHLvRyhR9hnqmQwGWS",
  "key25": "3CtFXHkuFWiKa6N615J8uUNpv86FVM6ApZBfzgmMzAQoKpudpfVuKZhxUjec3BCCvciV2Z2VzCN6tL2jNhUrBXMB",
  "key26": "4RTrcRx7PTFQ4FLiKwFCykh3xcFcDRzn9i4yHGvqdPEFBHrgWf1csv3b8HoC2xcWct8uN62ZMfVL6DnNWGACA8k8",
  "key27": "4NsG1ehwziPFBGvotMVjEjnYuyXBFEat9XDEVFHJpzFXzemNuPLsiwgXw8phAKbjMimqXUoNXrGqPcbg8bmugNYM",
  "key28": "3kVAfzJ71LSH45PPqCrN4xa8ruaEa1d4wfYTJb1L7Wpk1Guc9W27PNjoy7P5HGJCmP7t9nUnYPZ6tZn8PJRxNBC1",
  "key29": "65umiZ1LLajBtEyNdMZT6mVhCggzAiVV4xd8k8BeA6ioaj9jbuvgbHzmnAAu5gCnucbPBgriYEJFayrV69QFMMSK",
  "key30": "3c78MZ99KBN4oJnEmqeSUmHw1NNuXQgRvuUtYmrWvQwRr8LfD2HSJZoTUf5k1Ndr1QPitg6bFGtGDNVGjoNZGV18"
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
