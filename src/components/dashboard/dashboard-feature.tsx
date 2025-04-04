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
    "3aMDYa9Yhyo1WFkgrGK7dwJdGvSMd4g1Ju9X1HYbGok9wGYtTRYcGT79MVbeoAZPzZdU1yzhCn5L6gCgUb2irE5a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E7i3GkqaZjrraoJNqPMKYcv5yCDpVqrTkwBQfzHRmWuGeykMFbamSN6C4evZo1R6kyYPeBHpp1h98dYrxEZ2hhH",
  "key1": "4ro3gDbhwXKGcsRKs73o87rbLQNbtrkqJYynMn8JRu2CMvvUBeVTmdP28M1AM1cAi7HTEu8LRhe51ofpaLdPj2ZR",
  "key2": "5qKw3jC3dyFZTrwqmFZ59BEEd7Zf6MutVtnfx7kvjYtZ3jA9G7eFCCcD3Ho9KrXuceSoGHheGEaSabtncECyVthG",
  "key3": "45HvWXz5AkXn1CnzbswH3iFNagbwpYYDrLfHDeGkpTu3N3xsr6GTS3NJaZju5DKoqfT2LiZZCEFs7TARZHLtKxhW",
  "key4": "3tsNKBXsB5s7QVsFxJB61wGxQmK1247P97p4mw1bUkTert47qsb31zNNxnR2eC4KYj9xqzooG5ppMi5eYANyNus7",
  "key5": "4ypHx3ho362H1vkFbkNVc1FqqQtccUFJXsypqzVf2ehu1LmbpUY9UGSysoUt9SQ8Zv41MsJQkMy3WeLL48N7MaAp",
  "key6": "5EttDzoq95gVnpvUdrBj6JLiXRaQL1sWebEWYNsdFhLwHqnkry8eyu5gHoaYXdxRE1EeDNu3ThDVq5tVMDfw8F5N",
  "key7": "4hp27FNHBagHC7zsrGMDNpE7SxMrFDZfLpLoGkNjk75SAw7TGg9HmKnZLkE5dGSYBwpZ8H6xnon7f6gLqc4dQ2kv",
  "key8": "3rT2GaUaT6NCeepS9zLesPKyeKJpBzLJDbP3cafr7GMFuZRZQ7m4VZHThzbH5KLJ7E222syVLDbhYpPn9fBbQTeN",
  "key9": "FKF4P6DBtJma6YZ4nc6fQ3yRDreAt2FNKGeT1XKecUV1oWqUSUsEw9kzhop2kaSLRrpwACaPnKURGgUBsBNS7Zw",
  "key10": "3M9NtPHqZ2TMsAX6vF246DufV5U3zrfa3MYajKW73uVpJFEcD5ZLiMsZFsmkbP8BoUYN6Um6LHvoAUtMoJhq67Hs",
  "key11": "2T6BnwoR8Pa8MXG2oZdhXwu2QPttWVyBraDtunJFnQyEy6Su2kiQrMynGFs4G6goEbnAsfX5hezz8DFEYBkDtvdt",
  "key12": "ZboLv6cxZrdsJgZYjcGNajSJPfg2mEqeMS5paHipmpnCaakF1dMRr6yBkoZ2V2TeBD2L88sUFa4JGZtmsCQ1fRg",
  "key13": "2zftYsoaduz6kewxgsTFKmXPvqvLQVJACEoPhahkLUaPXkxYMBWEKDt4p8bZ5uRRa7dF5sDZg2eh3dqpmA3UCtv3",
  "key14": "5ordiA3mBgr9k5JrxRLHvYzcivZbY1T5cov83m7GtSuWBbuQS5PGk8ME8JNoqeBb4C2SsDNKzC1wvxfEhFKVYVeS",
  "key15": "64BWuDjyiAPgadQHvtcgs7GhEFSx1FWfF4rJa2KBiZcwZmPMynTiqqR5ZGTE5h8jo2QiHPmUYYMvEoUQysEeyTNs",
  "key16": "eSztbQsKhweDVMmMCYVAd8GNfn23YCaQEu9GGHLKWaSqGxrY9pKz1Rcr3ZuHoq1KRUK6iS8AwW8ARQpNRxc3ZtT",
  "key17": "4rw43TnSdFZKEFMb2EvANVZ2ryTs6fFCKEXzt23WJqYuQycriMpQY6fFHZtzjX85nqPPJNok9pY3x5AiXEBwAFjp",
  "key18": "4tMnjBmXjt5Vo4dsKRwW1gc8bwDVm3iojtEGKyAyUn8m2qy5UP3tifrNW5RY2TAAzZ4XFsNz5Zzb9gw8DfShyTyQ",
  "key19": "2w5hfph7yYEgEM9MsDwMZiSXCjECfwg8YTxXRrS8kCwkPn2u623c7NWjbKeEDNcoF4aj1P3MHyuTATtHUpzH7sNZ",
  "key20": "3N6ZXLPrZ6GoKBUNhQSe8rMyz18NK1UBAQogXLshjDpomUPSZzecRUUo5dSyGmrVMBecGvTVhMfgTBCjvgeHm8vB",
  "key21": "3k86UhJFHggprYx1JVifQbZSneaahVAqkfUguJB2vD18rKLxmvQT6PC3DbpuzFE51EAXYqUYPiRjp5VsxjJBBmAa",
  "key22": "5wRyviyU7yQFiXdy72fqg6Te86ndPTTFiEhuWMMYXUuKDVGxpgVZqTLrwBYCA7QJWmjGXU2sCRb5ezwVMTfndPqC",
  "key23": "2um7Eev1xEjNvf2kYgFnoVBux7qJ1nLvb2Anqw4QwDqDDsCyNqN6xXRGZUDbYxZYZwkstwWUhFJhhynASG4abBDA",
  "key24": "DCXFcS5vPBdf8RrcFWpRchE991XTFCB78KFu3Su6h52SojAf4oQqNKUMwHtpq8TTBZz5pdAv3qC291Wf1nVcGQz",
  "key25": "5y2MuS1SApWx1Uu7LL2zjG1QHYAo6467QSUjQ1KeHtuMUuuyrMSCj9XghP2jJoMKv9nC5A8qvpxipYbafSVXPRfT",
  "key26": "f1ETVeNfyCcoRmXtk7Jfp9Vsx5vvudgGnPYFCoHRGTceWp48a7XmUYtRpDEDPagNi9CzbmDeoHMX25p2ySJQVR9",
  "key27": "5pwutKJan8qa3pvQeF5XqmjdnFzvAYhE65ASPQTrwLHpRAszbTNgB6fCE8eygN5Ri1azPjK3nrQwucPjRstshD5N",
  "key28": "3H6dNT5rGWbcCrhFxfDhqZXz12cerZVGucwpozjUzAXabY5w2uJFbwmQ9gvsxJfaa9HRv8GCarz9JLH513zNxxGv",
  "key29": "61QtVMjiZu9iSoDiHKde89x81PF6LDVhQy2E5aVDfPKNiBnkf6oEXVs1jry2ciFCpKgZPkB5zdwkrQ8Sbd3BSc1u",
  "key30": "3ppVsYWeronay2tXprGXdhdmUGPYTc2kpfQQQHUPL9Ncq1gx1vnd43NLGg5zLPCtzdHKwwRHAUeWUoxnY6bYzFyX",
  "key31": "5fKuga8SNRU4PSi2Zvicc9ogUvJ274Z8uZkq3VRpgDiYmEQ4wPgu7q9ewMTq8toeoeo551n52dc2fZi8GmyiCSPL",
  "key32": "2jYXNkieN6HLqJpnCp8RbiybkudpqeYakXJJbuphJeCWUzgPaVeGcxQRqoy8dzv77Xs2rDsPfsHjwpzEkbNHdMEo",
  "key33": "25VP2UpXJVTzxtB4R4Hfb2PPFtkoYfw2FHxfTjq5yDg5GzMYtvUCPSLX97E7GMBCjDySyCVWuMfRs8UktDve1upy",
  "key34": "5ufnuerrZb4Wsat3JgLd3MuEfQfA7e9Hs3UC8Q1vUWoxndWa9VvYu8JVD2xvZe82TJoXMCoMBpmT4NozjsUZYQ3d"
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
