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
    "2eSgSu25yDj5d1wVKagfiXjJ9eKHKrP9MXfGCmguohiv8mQK5ifM4P7RuHcMdPe6UZGMGTcnWBzRtH7hNyNEYGja"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PZ4cYUVND5zVvN8DXRmFPaovLWCBVKk8qVgrQZqSdbMenadBm8V9PpYPGTwEm9NUu6VW3b3WR3kYZboi1Vu1vLF",
  "key1": "2zH26KnuYtP9bupkQXSJ2M1DTKb2vsyAEAGSAvdd5y1av7oLEfZdriRgfAfaZgiDQn2HXaBqwViPRY6GxuNR6JXk",
  "key2": "regWqNPQc8HLWiodpfdJkoekjNfqcRE6Kgdv52ucbWv2zzdQEEtWGjpfKNsRh9DhoamCXCUGB57nVzmqYhYoxnr",
  "key3": "45WCZhg2tpoPG8jvaDiwFaU9Edoiu7RA9sNyLGPbnHTUjfuHYy8xN3by9LL9LZo7KXWHi5LwYwu1gmD6vGnxX2RW",
  "key4": "eJ7pz6TqrrG39RuKpCZLXwKrxqhb4uh4WDsVMJsUXDpCmhhCuxMpCuvNxoZT5oWw2RoaTP2aXat5t84rRpWWxe4",
  "key5": "2sazzAEHHAj6V218UbZeNXdxo5scJjurXowY3BMYBaX7eGhWXQ6a9HEAkavEpWfeXUCYPHhZu6qmhB9zkCHBNsDL",
  "key6": "6EnqavjPHJ3cUDWAD4BjeRoyfwKcPbonFRtqWix66HdyMSaFj66vZhZHWe2ATAh28xFTTV5W6Da7H4xQ7hEb89j",
  "key7": "4QEz7tDmEwfjLnsJB2LKUo2nVvrpFCmb2JxMPA4tZUTaGKJQ6bQsmLnHg3rE57UcyBZuMcafKSjbQYZXwNn3Qw13",
  "key8": "5erm75EFV3C7TTkMqkJFiU5pgVwbKJQT35xzEBV3ZHscpcWZXzT2u3XNkGwXTr5t4ct5nHX2Nbgdwsak3NLNPP32",
  "key9": "2Wu7tKWigpTCztKaHaihyoeGj8iDUoqceU1bFeHDS5ggK4oEtgcJy7Hi9jZMmSHBbRWDBCEq7XhYNhr61rurEyG3",
  "key10": "3HUXTtjsBPc7NWPf581qZJB2Abwra8xjwnE3ZqcZYKvR1QwNdDLGJYmQbdf25ZqQgFREGkLCTgb8yGpdWf6NondV",
  "key11": "2exPxRY2g9FcNfS2XEUraASzUeAXiZGQuydp4C6U1Y6S29KxavnQ799Nm7z89JaTS4JDkd3KjwSd3s1aD7E55Fw9",
  "key12": "5JDZd3tvKmVLDNtQ823CCYFUT8pApiqcHznSpqNVjkzmhooZL4FPgh7avQ5WQnMQ3r3JGsjc1kmsQFY4o3HTXmCk",
  "key13": "KiUJHMunmGyMdYzupAFBpMdcuvt7Vi1RqEpSj7fudsYndXi1JMueycEsZhv5rtc13TNT6AoDYZzwq83PzLQVPCb",
  "key14": "5mqmMNaE3ahoMycXwQoHkbpN5x1U5DYwyEVn4dA4n7w6TbWzwCqYsTWZF7ZBiMEPdC7JsjkKhhFzSCPKCxaDqGdb",
  "key15": "2hoxuEwg2rRpsiM69Bs2JL3wirG9b9Ayw75s86mRcuaammpwLXr8KDNUnoHXw9KJEd1hXByY3yonZqZj7L1ZXNh2",
  "key16": "473ZCtEJk6D6qhLhDQh6XZFJtcMhavnQjL7Ne8cs3uDevDssRda8uq38P48Q2n9J8H7tXiYYdpz1j5G9ycpAdc1E",
  "key17": "3VwBcoE2gvgqyCkfN3Tsddxn4iRToQj1insv1xC5NkqArzk11vHB47xR2srayNarpM8Mb1gmuxVVgmXpwjJNvxnV",
  "key18": "5sJ6Vbsbx5n85djUY4FFGjTyG1ZQRL1KWuzeZjzCQtvFr7uRv69ZgLtwwf8iJEd7F9VUEndsrTQRa7qxcNA6Ldei",
  "key19": "5S5ac2DUyWpDCRT76WrtWZuCxfLp54sH7RixnZ5ic2GR6xvde3dsnNEAYgNbUvxUYzJSrLtpUrgCmMKFKY4CUYgr",
  "key20": "3dHE8tX4M42964oWp54usQQdikFnnvQVDLXTEnN8WcY6C5SHTrPP9AjcnchyYyBoerCE1Qr1iB1igP3NxhmzcMNH",
  "key21": "4oDh49uhQziJHb11baxbXYn3nXsMsgYs8mnLaTF6mstxjfkicGL6iChEc5udskEXy73o1X6T8Xy97Y4t4F4Es2pa",
  "key22": "5UPj8Bxf6HW6JNGPSYtw6rWB1FG3BdE943qNtrVMi49EfPotYxpjZLxqaqk9vxiBcJ8aP7vt2eFovCpa51zsnsbK",
  "key23": "5Kmz81SQ5WuKkgUQ5WZRKCCZ2DyNEt3zbZ4HkLxJfaT5K6UQntsuzjQBioMyZJkBRwwd47ds8nwRu5vJLBi1Qzwh",
  "key24": "5YCt8vo8rLaVhjLKBYjeupos1naKhA28NwGxWf4xTgZuELVe2tV7wwgGfntzZwbZ2Lp7fDTcotF5qRLodkZQZC55",
  "key25": "2ADerWef36M7YnLfQa5ibFH7SimpJcdai5Mx4Z8YVztY1BFyXSximzrhVeFnf5icRsQH454WeMWaHENKDtDALmgQ"
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
