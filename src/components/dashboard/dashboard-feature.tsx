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
    "8jHQzEttHdNecd8EXaeyQqhyJLvQWjfehrhXHqyXqdM8b4csSkxEqcp9JVT77bYwy8UPFKj7nR4dv3Qo48oTBLy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "imzK9HpM3CbrWSyaNw3ErKBZYZw9Q8zvVVawtkiR5GCvk8Laa7nALoHoRhsmC44iKn8jv7n8b3rdvHvUAmr3Vgb",
  "key1": "5M3CoHDpQzJyqnGeJYn1PdzH5KXUw9RWzRr1gdMPxjESHY3ffmF2xo378iKKkLMvmF5HV33LKQsHxnsayqKXq5nd",
  "key2": "Z5jn5yGXwvFGu7Tft9WrWKYiE4WfC2DF4Wfjf8EGceNkV8o6BCwuaxMPCRftojKyCyqY9iovSHC21R4Y8TyUUkM",
  "key3": "3TU871L7mCFZMDmfYWZ1C8xBA5ycxccmLdTy7Z4b1aHS8F7cghBxk5uVA8PMg2kNoWfAWnZCaDQFWiQkHKdyzAnG",
  "key4": "5ZWrQpGvwwyqct6gKXMLEVghv39RRUxo9JRkY5ZiBLbsJ6TZQwH7BX99QjCSJCsS6bXowd77bprFJnzQcsBaAgJU",
  "key5": "5k89TNDCf7YFGvm4TntLaGKHeCyw5v7bJBgcjoTGfkMD5TWxnPhnLy3BXRJvxbYhrujqF5wxmNsVqXkVJqXpgW8o",
  "key6": "3pyLTUk7iby8c1KR6NbNfAnLtRQwh4ejupLH94kDTTyLDy13gtvPGtoNTdTCyL7gNbckCs78c7LMnLEyTC8JaNea",
  "key7": "4mxej58hqAWJas9b5ShojLjYNE5Yo1C1yEJY5Fuh8tBbhn9fgkKPuVwBhtgqigirkDbfYsyi4gfsuVRWEP2HKybB",
  "key8": "2h1WNweGggwySa2fsH23MVt4CECik8CnvSMV3U9SYihjMYHsxL4CcdaXnTsnrKQ41zPBds1ewewhgt93tezkLsQX",
  "key9": "4Ngj9SvsnEgr87rC4tPK9uQNaiBijB3yznvLT98SGwoq9f8SkhbiA6vTGc9kPhWDt8U5k28hnQck3M6JhBjXeVRv",
  "key10": "2QezLd77tdyebALJKTBrVbhj3GYsK1JwgzEM9abPJLX8dhGpKXRXHdLy35fdsrG5Ef3b7JcpkXK1oRTipsZMVWMm",
  "key11": "4o1cyzf7tRis1RZUroJLRPhLR1yb5Kdvn9JP1wFywwjK44ug3PPFuBGcmunzRKiDkg3vGexfQMJiupaHi5Hifipo",
  "key12": "557BaWiMVzmBxZxp7MqUruAJX2Vr942KHLWFmCh8anowwbTnQfbAdvjZgzZaVGmWmrjWtEMN7XcjbrHnhuAP26Ko",
  "key13": "2yEZReWHZfLXHi7C1HnXMuqGBe9FmPsDJFzDxQqMXHELvhTzq4wtdHPZ1t2bXVwww8HbDLLzSqzTWgdPbPR4omwQ",
  "key14": "5UxCcDcX4vBXmBk7ihRY6q8Q32CZUh2DVQWqqmTFKYtwsvG9UPRGZ52guEATWdJEf6ufqvJTdrzEptKcwePfAgKc",
  "key15": "2NghTFW8AXPHbbYUVxwap8La27tVz37Vewvbdy97SgA2Ff25Zt9XgnAAryL1x4pT5ziScWp7Kk1eX8a3qw4vz2mN",
  "key16": "3aZhLeLZB5pykA2vTtSEUsqw8m9VGGtb6TUE8n9GhwdfDxGTuURzb3RqGhQhvsJYbdxfx2d6ojAu2M8NY2qkjLrf",
  "key17": "63Ktn1ZCt6KPDNFiuDzdXiJFTcJszodR17dBc66EATaR9SkKMtZnoKcsx3Y86XrhJtrQTbeyNX4A9GbbpDPBCEwq",
  "key18": "621JaK2YbR6UWwzGHjT67q9sWE2Ko8jKdPGsSn7xQ6hR9T6qapmsJgdQLa6Zadnuvx2cq2JDmRSFzCtUWEN1jGtD",
  "key19": "3DEn8h9CLFXLZYk73VDJttZ71NDQswhXKtGpbPH3hiK6vYsV5wWvQ7WcnoauBFZgqw5V4EhY3PuEiSQB8FNdCN33",
  "key20": "23a6NtGukKtPsCsKuMKL4tf33xudnMRJ5kptEX5a5yPYKRYagDQerTZggf4X9VykrYxDuSbMRbJ2ktzQNCFL46i2",
  "key21": "5Qh9Nbbqx5qivumddvcWmC65gLdn5dbTCgB2d5KTjSTyfePMMRJ9h27awmhSa3boZpyEALrMkVksZXEfw7DAb9B6",
  "key22": "3fNJwJ1Kveb4Ti2M1SKjuGD1pgmymcq69iMfFos9aqkda8j88MZZvUTN5EK3y4aWSo6xoFBkok3MGQMrxTS9iKWD",
  "key23": "62VjNyqpraV5bfTBkg6LwXz8jvPMNBJDoxPLUay64pTBRQguubNWp9J2yQB5u7bk5oiNXmRn73mcvnY4cnSk7x3F",
  "key24": "tbewftHSfEtJhWBU5rDB9p9VJ26SWw5gg2mo6msJsfibMjHLYzRhTJQtwWQ5e8eyB5dHGNNhue38xdNNwQd1fxR",
  "key25": "5Rhv3uHGaUrkn9gEu6MddznxMQ5JYeuc7abkBgXGX1jeFRosY7raYTZe5uCcS5R1zc1NobEmDU73oAt4VdS9id6S"
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
