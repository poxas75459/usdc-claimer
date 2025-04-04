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
    "4dLAWPMecG2wL2rbbCrC7UGCgp7zbXhX1TXkjrB2S96Y2EdmszYJb6M7y4FHgBpXJ4pw6GS4pgTztMSpBvHdMggc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MreCh6tG4YZb8GMoEq5piWhZyNwMcRzmDrZgE4vePHXuqkmGHHEGhNKmqovVEFr88zZYafbCg4SM7jLzhFXqS9C",
  "key1": "36QCRZHRqDEAKF9kRwpfuB6PvL3JcuUVxvkYMfic7BXJJkyZdYq6ed2NYshj7pijyB15h1VLAPwoNjDAcvBRzTzh",
  "key2": "3kAHTYVeWbJsXWsApsiQRfUHQnuGQymcirHKLUP8YFHp43tcp9kNQo7jZUzoEQagTRZWAAHUjQZ5dHfvQUS87mJx",
  "key3": "4bFgoC5c6DViYaZRSw5N1KrEPn6xBSbiAHBxzsEN1uaCywJz4bRwhWmHqXXF3ntA53Nro7wFM8GAcXq8znNSo4DV",
  "key4": "2zSnw7gt3jtX1w1fj7yGB6H59YroAYF6Mjy1vPSZiRuyQWhkW3WLpon2SYhKQk4gWpcWZiET54yK3vcr8zsmv4Ju",
  "key5": "AQn8pRPraWLDC1wJrDnPZko78rmnhVCb2Sm4zwbyt61yz7wNiVgnnAoxLJhVJ3KTVnk4w9ameC6quBtLfjbbrXj",
  "key6": "5Z9wEuc7nz2nrKdFfX69AUUTTuTDc5sZU8Ra1Pf4gi338H9rQ9UxqCgZJBSLjjZSa7W246sGDChsmsesfy9yMjFb",
  "key7": "vNxvZbMhKPswGNh71zibAp2GYoYdFr9rJe3Qtar7ne7FdUpwpmbW8oCGfz1gCgovmtbUxYV48PGiyA2wQQuQfCM",
  "key8": "5MF6894XeubALmAAjJkuxGrzkN3jpKMXJY6wmHeadUAGFQuWVhvVs47LfZiNm1zfzbvk2iW3PRenh6dNWPSBHCHf",
  "key9": "2J84xLTA6i8WPfCY1TmKxGz79QaA8UxJFh8ttK5wfyy8HdLfc1A4KuC3rQ7UDmB6xuhV41URSTTnjJ4bRSHyqBmQ",
  "key10": "5jmNoqPqiioqyHgHkNXjALWz5JQRNt7NNEvxLG8WZQAwfUf4nZJbNHHofBkdGPBNxdiwDRhaNkapLs21vJNcGcTe",
  "key11": "27x2LAxwGwieParTBZAbyLrscW6DLRW3UC3djWvmwHFaVaBi631YpRqdhWhKfmTLxE9jmBF8rZF3XWLG84XeHXmM",
  "key12": "5jLTwEPUY3vSjL6PYYkuYnUNq3hTBMhivywbS2TAhLoa2zNA5BYpwYqsB8bdqSp6KRfhHRG1dJomZ3ymj2RNx2u4",
  "key13": "33UQNZ7QEy48nFqoYC6HHWJ1YtuTN3BPJU7cBWG15FmdjfQZCihCZHviHCifQZpgsyVyFvvZGPG9KJXny1d552Jm",
  "key14": "4m9hDMFHW4nALyC3DWWL7n6oafPca4iRaySwuzGtfxHpaTsokyEtXbYMXgWKLdhMNUoEbqzenrzk8pubxTLHoaXv",
  "key15": "4Ygu7fxkfgfkm6byTfYcpnRvZQWJYwEUFFrFYypf8WuWpM2TYFUNjChYxQtqDHUnU5EdAc2VrnBtzFcg2hHycJzQ",
  "key16": "5MoUt6MvPtFSCNtM6hSAgdc1QaPdB7nN5VuVb5fPvbes28paQDbgN4RhE8ZbuKrnN1587HiskfcacJmwmfkJ8rDn",
  "key17": "5SJkq3ypBAMTfAUtcfEbB6BRGuoRTkA4L7X1qSWX66rTYZezvhbXwiy3i9zkHcwVW8Mu2Hm8D5wB4N5cbPqPdY72",
  "key18": "39RvUSsRzZ4ktqtPLUt8rXrRNa7zULnM62ET6emK16ip7wG5pfoVnP6ewz7xoBiDvWjyfRN4yBCtGQ2ZZzDPWg4V",
  "key19": "oSJNfgdsjwNtPKbAi1C51nHXvM8TzKbtXBxPdBEybEXBCuEiQpsJwM5ADP9qhpCFWc8ZgdZzjZsjYSCMAmMUMDy",
  "key20": "rRmhR829DqsrUqHAkZkrB4ATdSfYMhjQZXgDMEBHv9LNtYMwwzoeDoF3c7AMJ7nVr6cPShMoePsFQa6FwsMydsm",
  "key21": "aMwxP63BUWNtqwP5QQMZ9K5snuyb9YM85NFnT4xH4v89ZgUijY2tVDktzV4SiNCkKhxYqNTyfgF1gzdb9iVZ4Lt",
  "key22": "2Zyb6qG8BGg9koJrGp9N2Lw5Uay282Dxyn9LdU5r42tgiWXmU2yEGrBSGXNQUbpMk7TQopjDMZbkTWgpbCEVg9FC",
  "key23": "2fpFdRaWDmhRiM7ZggJ9YiWiUAATMnGNTpuvc9pvjzMECyg1Hpy58fwMCeHGYSNjGM2vUcWpT7abGS42aFkc814f",
  "key24": "3MaxbjSZTXNKAdoGsjKAKChLZu5Wp48Lc2q6oGeN481gKRWBxt9M16UfkV95WYVwqaQAHT8EyD2W7AP4vZ9z1VwD"
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
