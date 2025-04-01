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
    "5tAqc6eZjDAQmnGEK6HzL5by73EK7G9g9HnovTXed8cdU1Hupsgth2Tb8334C5MSAopDVD3DQcGfoLGBi1axi8FV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PW6Q6jAPdiXhm4pM5mwxuGjnbws8suuQL9Bx2kEZ7YqqwFK3CwM3AobK1h8e3EqkeCDRXd7iSRmrsAd7H8gUxf9",
  "key1": "43Czp7g9fJRjoMacSxh7cBiJQMhWn7MJw5wD46Axpmag3Kk7SdGTjcvaWBGHJASaTxF5v4ZgChcxR8BnmmBmRMqP",
  "key2": "4i5DPrtkQ2B8rHmd8ErXvoQoD9KG6378pmE55jgdnVP5Do26C5DhSVdqwv9JZv39EXN4LMRrkysNFmQFyVzdMLQ9",
  "key3": "35xEdR1qZLJogeKLG4AFMS5V8dYuB5ztdgJGRrbBFJvxru9BgAxPT6R9L3CCteDrUSoVqQo6gtcSBKywmEDUE1pn",
  "key4": "4muGAKmfWdt5pGjGTpPL8jVHxFrU1PtnX114yeycrTBmoZb5wW1CtzxqatSwCazqMPtfVf4UowDSqpMFao4raDoa",
  "key5": "4frQDF81Uy7Jxf4mH3eqsaHwmqEcCJYM3N9bPQAnpXhQ2CzZ4nheVnC1bPjXPRuWbh6J7igVkS44QLN1pFoBuRe1",
  "key6": "4pu3ej5L91vz3kfs6woTF1fNfcB8jdkMf4XxpmR4WtXv9KQfoYBnv8Utdj2WSeNmxYLJwUcHYsSMuguixYcPnoXu",
  "key7": "4KCKSduamVAFHx8HgXnLWyha2JrBdP7AcMkWXAhyqDvDV93KPnUv4qCe5KcTcXzrH4gNbG8DZoYPBrr7GzSfc6Js",
  "key8": "58Wr1nq3TVfqC4yZbrcTYAh1ZjHB7mNT1oQYvDjXhNpPqrHaDCdnodZuLLkh1pp6bb8uYfASjPBB2jWsx7MCAyh3",
  "key9": "4fKuVcjDWBDQTujx1HsJKBscmK2ZBTp27ojWpqGvwfGZGHbCz5Uwf5YtVwEsM9J6FDWCAVTWdWEgR4iPRfcBUdwM",
  "key10": "7UANebBkKhDokBFtaZ4Lo5SN3JmVCRQRcAaHqwwQrF8HLdoUzrXZKHNUnrm5yPvYwfT8DzaGLu9QdyueHD2ufZA",
  "key11": "V38FmL3wxD2WggJ3ao2xz8oToCTP9FGtPhJEvWtRJr7XkjFpE3zpTqLe7k7AQrFUwkpKUCBFNKa9EC8rqi3RUTg",
  "key12": "4rkijGY1Bg1HUcPwJv2KETxPQD5MUTmLtXTGWWntjZ6UsFuGmV6Cw13jM6WzxzeN4HnFKqMaqguiy9ZcwdBJ1NGU",
  "key13": "66pFcZ41eEJ4LrEZ2kBivG2uuiTRPH7kesUPzT4tA5S9kZN1nkdoNZK8AZBnn1HgMMbREnN3xmYADEZesFSNuWL1",
  "key14": "3KcLvXN32RZZHcSFcF43uBTrKmcmd9mDeWE2rAftT5iA4MZtDVW5uPQo3FErkDfcMKxYq45wSs6XBrTKiGs1yTZy",
  "key15": "3quB8Fm9hN2Wzw2xWE6f9bHVcxXmDvFSUF9apprvFraHZp5oFJeW5BNDDJBoBYyYvovr23NTmMNUYK9b8FhNC2jy",
  "key16": "38rLvuQ9J2jDS6dwvqWKazKp4uTCgQDTWdHxCVNrEZkTMZirbib5ejqxY9L9ucA72r742nMCdriSwgY6RKhbNLvM",
  "key17": "4MArCC4BdszHdqU2E4VXB9gTHxC5XeqYq45L6thPqKtfUURoW9KhXqKTw2McUh67fZxQsmUmDkv1zWhLDDfBBU28",
  "key18": "SYXgKz661YnWUXgudw1RYcnz8iTMCewuMGWDE8fi48tG8amJ1rKsuBW6rE81KudqPa8Nyo6ic27zr2VBaujR4Db",
  "key19": "YtBsviAMhfZou45wKD9UZ5Xb5GHABiarYcoP3aYc8BhKU19wK5HSBfNoU58j7gZYhv9wdgaycCphVH5QYXPzLRo",
  "key20": "5dWH2Gc7KYSfGUXVrhDARya4uzcAz3cgY59mX7bVDvhVym1TCvj2AKnaAPCA5w1r7FimD9uEMSwQBF6eduwar9rr",
  "key21": "3pFpJ2XrSXa2Gn5YHhCtXLvqm6ejt7gXTfzrAm5tTSn2j7cHEiqwt1UdqoKcSyMaGets4uMjrspdyXKxfofLCYfm",
  "key22": "smD4jgCexkpFTEGym4VYmJBGtad1UeVFcr3L4BCrkkyssTdnzj4GMZ35KuzkCmhyxQTk6kSYyL4Dm17sLh7eY2a",
  "key23": "53ZcCaprPvg2q3APQrCx3chsAsNDVS5vqJvRqp4MRdd8whjXMF8tf3AS5Kky3etPCt8doX4iD4P1xd1tpefooY3U",
  "key24": "5jDbaD22e6KsxM4ojxT4aMYbKBz5WavMXHfb5AFGu5caYAgzypLu6maAnWyinwhvK5dCngahD5caLSupMNQxMTZY",
  "key25": "58bQMpWDsNTWuujKZK1jNsz2guXoiAjZbYZEPokoPd76xRNPeCYskjDriCpV6N8dDu2qPMQq2CwYLBdAwFTCmTYo",
  "key26": "2tkHSWdMkpwa144KMo5rTS63bcuz5rvouXCtbegZmHGAbEMEVXeVR7skx5q8h8NSzpZKMVCvs4gPqfz6GtseHvVV"
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
