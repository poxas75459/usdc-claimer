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
    "2UtcrBnTfvk29gpc4tBiu5z2fywAYutYVTSmVgJLfikCAodvWNoSyHkVVzmSTCJQMHMDgiX7qTNKbgXP8BNWNPAq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LpTtUHmgJoLNC712xqsqqfJLePngWTTNpNYPDXHfrhGusvVDC38Jfy4PyGQy5X2ozUbQzGJSCQjhRe9qJKaw8n7",
  "key1": "2SenQysDE2Y3gWRTS3huNXQ7ENbdbLsysj6psmHUzx4yXhWoURyWDoSDGcJYSNksq2du44rrVMGuGiKeVu9CyJFd",
  "key2": "tpZjDBFUt4bgHH6b5STNWqFy399nd1ExD1b4sr5m4S4w1KWRZ4rHHVQV9DocJKFiZo4s2SYwx88bfDUyuVDT2jB",
  "key3": "2KEt5Jhz6giZF8xMWF2AeewsT6be4KMKt8nZqx7551Edw48hCJu9mfKvNkSNa6KPvoGnLgDybxPBM2oDz2zRZ36U",
  "key4": "2khH3KArWuKGZxbfs9DAfVVTPfDHUi3AHCQrTtKXE5d9mZa57JmQPC55LkkRTaRciuvbM9Vut9eWwHVZcyZiA1LJ",
  "key5": "5V2wpbDMGZVN8hw3F6iPwg5EVFwuSbvxZUY3aResHGPV5QQDRnRjdo2zajMJ3pgHE28sxD1gGEHCbyM2aj89QT1k",
  "key6": "63rSm5n2pqhWHubTvBBtvHaZc5LZBPte1dYktJtihSinf8tDhy6iqF1RvAotuWsdRaYA4CVb2vMt3b2p787f6oer",
  "key7": "5WcQvoxdN6VCm8voNF5Q1Tt755wMxWxUHJkyJLNXKZmXDpfsVmhzZMefRtvqt1aQMYRujZP9ew3JB68YWDsLKyRu",
  "key8": "24vEPRsZJkRhffsfC2TAeAEbdSotoNM6o1VYY42me9aHeK6EhbkjiQ43UaKPNWJaP9guK8w8BPq88CLed8BTsLgR",
  "key9": "4nieaKE3QJescF2V7hP3Fz2iVX6LxF535pApAyUSpgkqtx5hf3NgSd5H76nZd21CRuAezaWhr2o3qTVoGbErGa5v",
  "key10": "iR1ohEDNVaQ8U5BKESYDeUN1Q9sB3PJZnLHhWdot7Bs4FuUqiFe1Rv6LxPN3qwyk1bTeGLXbNS8tL6zV3WdKCZx",
  "key11": "4LyNRiAU6Hkg3BfbpoTscjKYQKWyrsZT4qxjTbgwNtygzM8B312eMigy8DBSU1556a8kx52NbwnAc8TpBoKrdVYJ",
  "key12": "3cJzvX96SKPY1MVtPKjNe2Kn6d3uJUnSgyYm1RqY5tJwxgYu7Y7RCdcJ5TqduGKojL2kmtbrCBg62K8afD9KucM4",
  "key13": "5CjekwpbjzYfnb6UQw2XP3YPShmh7WngUc7qnvtMx5fba612fkr8PW1fBDW4XBqi8NFprSZF9LQkFkLeJ9YqpY2b",
  "key14": "5vQCkY38qiTZLGPtXpcsqxjkDBFSAt1CuX44tWWSjrkGcpuuHnbJ3BBZYj9sJTEkyk1TEdq95v8553XQXndkyaQV",
  "key15": "XMat8M5oGrpcrxjMfHo9TMfxhDF2mWpkmu76zRvSsT17ACdGMa58azythEA7Lbo3HMizSz9DDuHwhx17oahWM52",
  "key16": "hrKbe5e3zu4TSi1Ff7mJexBUHymx14dYFpFPddzGTjq13vVMBs6cvaDUthVgxhUw7GxJhU7b5U8ustp5MP8bQaA",
  "key17": "2TjqxjSPJ6sjQcLNYYGUCLbFgurhuUzvtaCiAyuYsb78Xs4Y2SwgTaVqCC9u493TAMcEjtjJBqwJNqiqzAEXCK9B",
  "key18": "4P9oMNYEXB8hghZPHdbUs5Eh6NHQDoCWMaVcubQ3VUTnop1VoHNL3PnJrMYVEffic7cboAEQAdXSE1HMz9Bq3Fbn",
  "key19": "4AnJNjnzXFC77qr7dCQj2GLaw492VC1rM1N3p8h3JT1ij5GZyUAM6QMXxhXiLQbWPVhGadUqqJp8hWvnRmg4SRrQ",
  "key20": "4ty6Wf3UpdXNZQoUpGDFnegYw57386mLRhANgyqmBR6XLgfgB5LsYsEb7Xj3Jora1js6GfnQrQybzNQFvA4LJFVt",
  "key21": "61W3ds3EjqpDEEv9t8927Ymy5S9W4QyqKJMqvj6anqNsemuFgEU9iJDyF8fffhmiRokHLcL8af8AGYh7uJES5Kvh",
  "key22": "4KHryPqKHgRxaBLKXS9rzaQvf5s4ytoggzgMQtHVKESQGcDvpvWvjEDHKid58yoxch1SZABsYscySgakHaHDM3E5",
  "key23": "2bQBkAZFwC7Kn7XamYjBaCD4jpCTeE1JXe5B3KcKobDJKtmnFC7B1juGHVqobsYc1Qk8ZUKqY2kigkyoArbisGaY",
  "key24": "QbYReAQGYFGK79HFQcX9q9F3umHGu7UKhUV2qYhtXYyH2v61eP5PQAZiyPhQ3TdJZbaK8uRDEMqTLtgTbujj7Dm",
  "key25": "3jPXUvLj4x8kfDtnBB2cBpNLNZEG7PVe49GHZiRyA6ygTUsp8XexNhwUuPRfW36WVYrAdCtzf7Q3x26gcSKJoCps",
  "key26": "59bP55HiJKbXHUY4w67CKm5GyDAh4YYBVHGDosMNDscezhWsRHEA2VhXveUtzXzzdueWj6RT94qykhHUqNKxDTn3",
  "key27": "2Ud5to9FffGshkKt9oegzpnrg1n17sWPZ5wg2ULRcXm9qhTKTZGWoNd2X3g5iJ37RexXGv6VVrr57s2J3ZGsYZw8",
  "key28": "23zPiUzKjHdCbdxe32uBtp173t4gSQmZoTPkGfy4UEeV9pyFE6q2Scr8Xx6wpc4GneYhcgwTPacL1dHm5iCkFAFh",
  "key29": "3kdXaQVDBSysbY9PvQT2cthtVRaVvnx4u3FKVWfh8dXWa7QqMFV8P6QzVRqKgRX5JX29XaZXzWowzBhhTqRc7rCF",
  "key30": "3FUDHV9RhNVUGr7cPu4LA7iCqZfy99gQqWzLjgYLdbQKJvt3rXH68bJ1ZZ1nNoYYrC593cdYKxF7M5CvtR2ZkvB6",
  "key31": "mwhgeKPFUDnfduEAeUjE9wNJ59dMPK2VcxnNADbs5CUVw4YEyypxTZA7EZSvci3agwENTPxRDh4n1cszfQcYP6Y",
  "key32": "3DSRm9Qw2KryiCrsgz71F1BCjBeVNDoxkAAwWN4psXkhQzDsG24kDeDHRrnt53nSVoBcmb7pcya9X8pCxCtATrhN",
  "key33": "4Xd5Q6m9KJZdy6tFHw6HsaVmw87RxNmRJvEovvA84XSzdgD3u5f6kqRxDBy3z2pwYMfNF6moYRZapxmmmN8zyEZA",
  "key34": "3Ry6Q5ysWh9BHUX5DcUJZ7hB2TTy391sMGk3Bx31u754dHTpEiWS4sgDsSgGonpdNYUcKfQ4Aj76JbawPqM95mq6",
  "key35": "5XZEkBNNfuEq82nxXQ3ki2cFJ52CyQeQwRSBkuAKJRpGkXYAqKvBgmduRoJYhejZx6tZLVcXziGjwTxtcrQcEnx",
  "key36": "5B1VMeHUe6yZnt9vL443Q3BWQBMRzvaxVrkEZ6ZFJJMMx3mqRaSoKZHKBbrh1ScKndJYg2e83QFFv2XtsrBFenvX",
  "key37": "3GDVNhiDNhNT23T3UsLoVEtEmVw6MX63xezTeMn2TN72zvRi8GqQEtpDdaj4Gb48tZaHC8P5Sjw8nW5319fX87iG",
  "key38": "amGE5uDM92zxKSq1iPvcoKB15bNDGtmz9KMRzgYELgXh5NUL4Ds662RnCnFwVi2Ec3wKKeZ9LHx97zwgXTqE65X"
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
