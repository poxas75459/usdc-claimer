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
    "2rs37zVYZR4wqx7k69oARjMZLNk7ebTEMdeTgTW9GYg8wjkQugqKbvtrBio8gutfe3fMFwVJ2KXkJTWjX86EF29A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xz9gLC49VNwHXf4GKisotDS2gurbGE59wYygG4hAgqrCuA3bFXuxgPnVRuzvZ6kShrcmJKBG2rvgSs7kiqYS3gc",
  "key1": "38CjBDKDaiRNw6MtxaibePCVcEt7EWGT4fA9pnSb3XwHA2TyWXaYbbr66vQubFx5qmGhisAMmCnna2Bi5EKNKUUn",
  "key2": "5shGoCXYGbU9SSp7aPZDASQn32qt8ty7xGm3gvRTuA2Unx6jSejxcqjKAEG9PPss9sGZ1sxUfRbuKy2kiunTmwjZ",
  "key3": "4U2ff2Q998BQikC81DjLu56oR7FJpzhUzh8hH5kMMpwbZid1uUAYuG5dyEq5h28pXinsoQ5MxGRGL7hq6EZSDgLT",
  "key4": "65zcTtq8N5e4tyCr35VA5ZNJtZoxdYmQMyyoJw38zuMyLuxuj5E5fG7ViwcjuZsGfQ4s8U98j31LUL8EcN4z3tet",
  "key5": "5E3ai5KuyFjUqtsecKiWmat11X4yHMd4Rn57UM464WRK4CgEkJhPPu4Vnp6RmWXkyBhEiXPQ4Mp7SWz5rMtkMQbe",
  "key6": "5KguVA3zwMkxzWYajbmUaV9LU9yWHUh8L3oLdw4DJt3DfzYDpYdps7ZMXvBWBQ2XuYXk8czK5ic4NaHeGW1gSArJ",
  "key7": "4aVv9vwWKx4R3PzSryYBeu8qJqTZeUJQGSLa6fed2eyUMtDomag3kHeaszMrwyJFDsQM4Zk3E2nWzDFFuD9x8QGZ",
  "key8": "AYSaRr9hcrAUxZY3JLZtxi7UzPBL3apSnFG5LrhcEeDXP3UfdgKnXxShrUicvwnuxVWZcNXcnPsVFAYeHNTrcoP",
  "key9": "5FBgE3ETDkjd4E9oVfkXXFCxuJRUqY2wcKC4VSp4DbB4V87UAjgro6jvQ57FCJbhyTRg1QrDFEHXFNftPqJ4butR",
  "key10": "4huTZ8Dz79om5CgXZZqt3C16JMy6D7AYvTANMUmwsojpnAbLdoJZt2XEzVnEBEgrgmzc1C4wnQt1wW1NtisE91bx",
  "key11": "4J2hzBWVBKzWUTZ9n3nS4KCPLwt6UfhDUYxvaxJWzPWJZ3upGs3Vn8cnrYq1Np8KMuBueBm5Lhr8RMykg3jatko3",
  "key12": "2QMJQTzffj7uqTDKDrmVfovkU7tBG5VSG3azFf19AQD2sC2a4UnHzDRVmXPfhSjZJbT31BYzfsTpYTMEbHiDc9H9",
  "key13": "5ARr8ehiKwjGt29PzKGEAJMyQmDN5GQ3qkiocZuS4BN2qt5qYcW5bektPvMbMG5r3w6jcji1fAfninHCcXNd2z6s",
  "key14": "5V3pouzpzaU2oMzePLkY3uKrFJ8WzthZsbxVWDsNfqfrH2DvRmwpKUaC9aUtaEwMGeteo5hhPavbbMdL7Mhfcx21",
  "key15": "5RQ6cLt9HxqT819ho1XEEc9JtKgQCUyjXp1hk7NT58khw7vKKUY5aF7uzhY5C8a93gLPrm6uFeH2SYZCoYW9RMhK",
  "key16": "2cMfStavBDNVSDjRL5dtKj8KzBbB9FtUNxy59HthaTbYzVPQaaqHyukJePqGMHn1LM8C6uyZ2sJ2heESL7szvvp7",
  "key17": "3Z6NEi6oDpibfdjp2UYrqv4VFtCv8Pn2W7L7gbLD4J8JNx8pPPcx2FzkJs3n43gRyYHvFWEPBAajETNpQnAAf3hS",
  "key18": "4vahH3V72aSyvUzCWUcG18aTKoir2Km5q2AfLAsSWMkNM8C9RkCVUvNnykRrPsgBDdYEDX7KVfdhCWzYiPmXVpgB",
  "key19": "4z2b4NRTzY8meFjpWiBjypB4xTronDniubr1cwfMhBKCxtCcs57nAHTzbHHoH9bV6CzoMpz7uoibro6r9oZVNAV8",
  "key20": "MA7EznksWdQtv9gwGpNnbDe7Z7s9K7CEvCJjjUb9FAku25n2SfkMLxT288xBuNU29nv7akDUDjM5G4Lq36b7TgR",
  "key21": "45MafrMQx7fd4jTCFwZ9bKaKKbLNRBR6kaqUoBNwzxWC8Ry4aAhgVwpUGbx1yy6js1YTLoNZ5HTNnFy8Xjp3Y4Zp",
  "key22": "5sAZnUEdvJbEmKLwX3SpKYc7Ki1azkaLFbAbBu2fvwzD1JX5uE29JyscsnoSRim63vpaZUB42kiuWpwJGPXZvY6",
  "key23": "4yczzCuzRiipFuRkYmNihCQYEa6NCGejs3EkwiCFaDeKMTjca2eMycs32ZMrCBG9Tq1ADB9cbBsUy59k8Mg1Qkqn",
  "key24": "23DzfETZ5NBsxiZXdxDMaXLHwhGkh2D5gCiD3Pmt4r3v4a9wpkVAPwRP1XgWkuTRqHn8n95acCpWemu6W2usaPh6",
  "key25": "34gMRg9NtmG9vY5XsT1WbbCc9KS2SALMbaDjx5vmvNBhkjxnaJF3kzymvyEnPxMwf5MwGL99fVzSG1sAjRJRk5wM",
  "key26": "398GaHsLdXGx577rgfReDyL2BDNPYuY9BSJxmrWe976cyvJFJL6JDRQUSeV9YhWenLYSXTMnAfhXyDPYT9c65WVf",
  "key27": "37yz2Q96DgevpPKG9r9ZzwefsupLj2EJttLtGu2smSGe9KbbKbjjSFTvi7VxYmqN5T2V7CLpP3aGP2W1hETF4vaM",
  "key28": "Yq8DapnnfgZ9KdbnMXKrb9oHhZVATYnpDM6VPunAWQKgmoV7Bwww6nRzqJ1rHyCopHwJxYLiFQnYXvtUH8ZT4t2",
  "key29": "5S1GSTWtAZBBY7nj1KYprWPMNQjiSycx6TpCtgEQ69MosbTHatWRTQ8djTNagosgkQTShihAftuksSe2u6Sph7bM",
  "key30": "6GbmPsUTcuiamVXk4qfKMXAbRGAGpzAfa8H8pvJdyw2w8gk7TLdrUJCBbXEwAQ9764GYHcd8Xho8YiLMxRC6uWf"
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
