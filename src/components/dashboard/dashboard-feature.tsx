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
    "5J8CnVccqPUbCZvnDDbHkXTuv1eBu7b7HiTCsypEivkKPnPXAf1NAPDGomSCpJBzaX4UxMVXHHXDSrHhaMFLn9W4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mhU9H7ZAf3VwxGpHXyyaUzasTyLCqqowuJNLTitdB6Xfoq8X5WjjxpeC2DdUJx2Hv61yxRZajV8Bitby5dAjcZc",
  "key1": "5aRFSDPV8DRsVXN5dgDLxEpcY4f4Lfe7HYnmAfwj69AtNvm9Bj7JLsq5yBTr3a53juKwmzmsa1EKaCUnjkMtWJV6",
  "key2": "53TC2qcQBmi5CE89csd5JTwEKb3qxe4JyUufuzwxT1Viic3vDLeEtZYecwfRZATZBgsocg8YTUmSD54Q4gTqEp4Q",
  "key3": "2pun1bg5CpeDYUfbxjdcFinMbZiDEj519PUS7HPAxsfqW7Dfq3sUuY4MAQoxYpRqzjhkq2pxJQS5DSDfTEC7SMsQ",
  "key4": "4xmnAH5237W3vBnubtvpebsHwGff9zma7Y63sifFVV7cT5EmuatSYwu67HquXrDTx1bgdSNHXjvKQdt5bUfDPRrX",
  "key5": "3c5n81qKspXEUJhfiJrQPWKdKbBitk5yHCcWv3AvZZeq4arXqnpPtK976TDVJeE43yur1TJxaV1jLTQUqNu9xgGm",
  "key6": "5Ppq47iuutmQAboH5bk1TzuhjMV5xjy6JEHtseVBZwfF3mYsfdjnxP9y1u8g3wHAnHoDCSxihJaa8NY73hCbjii1",
  "key7": "NmzcMK65oNpZdcKM9czmFTF8yhyKAF5jn6U4zrMExvdAW3jiYRi3gBgaXCZapn2AymTum6EDFv8axA3fMCegFEh",
  "key8": "2HN8VEz8mxG6hN9TzCGUU9NZTf6yf6vy52ngHPtKHW9AVgbgDTk2KzgHWx6TF3ST4fx2TYpnbZQPwsCSkG3roBjw",
  "key9": "z5hKBFJ5X2XJ3C5ywJtbPUFxZh2Lg8sfZG85ipTAkmeZExwu9QLuusBTKmfojagCWNG9dqath7bcBY7sQUnZS9d",
  "key10": "4CqL4pAWzdfvCaF71X78z9H7Q6JFtUMeC3pyvwFeuQbU62YVjdzRta2oiQ2aXAXzV1yGRJEd5tWQVaYZjnNuhoes",
  "key11": "SSSHmwbgHTgQtdZ7DF5fje2oiiSrHzz3DvTHS3p6awvk5Xhm8V7qmskfCPTFWRF6PFttYcrUy29PsFvv5871F3X",
  "key12": "THUqJs7eThsxpT514Ab2b3bvRuAfwTekXpzXsoGFc2qUS6joCCbGiNEjyWi8kokAAUpJUPsjFMau3p91GVTL3EC",
  "key13": "GT1UBJS7tEtQWHaUntvadQhDPw1gFVoSdvdJL7Q3ZT2d3Kyqw5AegX3moiM6eqPdTtTG7qVNEH7741rBugRSYGA",
  "key14": "5WprgPrMoKYEAYdnCDzAvYaRVxcHe56t3RLi1tRqLNmKNiJPbBKeGtToHhdqQZd6tbwuGiA638WZdb2hGLw5VNFw",
  "key15": "4ju1Hppr9BSJV4VBqpMJadyyqJfBQ5igKR6vZKSgwdFrR5jpS7VsEvXmSNLMLSatq6YY6b88pGUHrFXTSxkSocuZ",
  "key16": "4tCLpoFvQaM7YVb9xArmiCoSbsCHvTWsFWcUjoi2nZvtuhF4y8XU7Wnxno5VzMKVd5Y8hQLKR3jR4WkHkyrMi2Bx",
  "key17": "55EUWLwNj6LjrfugZmj8yRGxDU3FaJ15xuRY849oSXNYYnwUH6TJ57AtF2jnuZbEXMxkUKfW5ZvivXtNjykWHh9j",
  "key18": "5gzgpz8DAd3DyQzeVQ5ydDja7H5wLfLZWuVn3kE35AQbRibMfGkuAgRDzpoyw39CYd6y1TaGvfxGeFTANKkLeaqQ",
  "key19": "4NXqkAzzMFHf7aW1ucG4UXA8KFCuqzNSY1AY15MMN42tmBXHTiHzDVYn1F1TQKWYu8ddB4hjbsmVSMbkuZmoh8L",
  "key20": "3Qf1JF4GdX7gZ4XhzwdKMjfFgNvmzvThT8hoR6qzxhG7kPLdeaPgBwWdjfZLhzfA3N4gyPnvC6UvDydjrbfMW67G",
  "key21": "2FiSTSfJz5Si6bA5bvGMoXhJMCPCdY8tWNtZ9HWBHpKoDXPXfePwsao76356FbWG4PJXFPCNPShhLLuNKg6eoW7J",
  "key22": "41dY78MqMPiZsy1aZgU1ZT8jwgsrPq4A5oqTqC7w6w6LNySPAMzqucgaEAWfkxf2Q8dGzwgVPWPTwcUMGUYbzXs4",
  "key23": "2Z9mcayBMM5dXC9U5my4E6vwC6YDaCiRsFEooNEAEaanHXkZRF5xfuyjWfDTVwU4UqUdKJUwJUPQ88FeCKtNyeQR",
  "key24": "3RnQJp9oMSwgwAHGuLmCRjT364NW3nfwkBFiimQkrTrWcNzvgthTQ1kUTcZvu5UsSWsFLMPGj66DyjppzA32oyKe",
  "key25": "2nNBRwiP2d9yV7g8Z6XZtCQzmreKyTbJpXt9j4zQ7rnCTWqZicMLhoy6zvJERTXsaQuvsSSd2j14uBaMiC4TBBRM",
  "key26": "4gJkBoNqmmiiX2Lt82iRf5hX4BJtiDEq5qen9o8c8mecRHSGuFwU5NQqTvk6cLKKuo5SbQeJL4HbGnovG3KJbskJ"
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
