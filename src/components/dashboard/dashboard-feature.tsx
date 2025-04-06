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
    "4KK4gnvhKUwrmgVM33p6FKNwXqZaxATad46PBXd8Kh8gaMSNGGbFyfcmEtT53WMjS2Ye78VK8YRbT3fDAk17W6eb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24SsQGQi7zpvf6WNQs12HH6MvHTaqD13DKw8xZ8aHa52qwctFStict3VQQzCFBFdGTomwtt9fe6M3WfhTu2eV1xj",
  "key1": "2qbdcpSkL6edMtSTp6emThfXqrxLBEpwz7qu4hi9Xh1wgiNYsvVG9xc4BH7vXDjK1hpLw5jzLEsKzEV5YFZLEzNb",
  "key2": "59WiNanmW6MK9oY9pwuqibFwBpoUhfNZK2WJWBp3j32LuRNDYJ7LsGBDrrjqpPjmw6UdatxCRgWYCfkTTKBPxNS6",
  "key3": "5xtdZXERybrkTmKiWoQqtgZkQyJjymVLBaap4MjBRiJ5Q9UPdaqPQ9ekrw7ySDwdoSvajPLncd2cRfnpsCU6Ssgo",
  "key4": "2CBexZbXEoLgmUZmdPQWRheMhHsD7NnVdSgTC67x8v5eppwJKjBUMRT4tqNsSNKW582zLvi6LQMRpKxUTcKoGANB",
  "key5": "y3Avpq47CuEkXefKTgHqLVVVGrWRnfLXtXhve6CEfq25FQeTvVJ2WLYvtuLhLMJAuEJJSQKvnZHNckNmRtggx42",
  "key6": "29qS3moJWQBycwV2eHYYenKRzAQJMLzd8NxPFLvKJ2KUiUhQoDH3erPtsDswpk43xYbQsYtb7XxhiYZeT63KuKpF",
  "key7": "5LfdJdijtufLycLvmNdKdcAbe93XhEXYggiqgF4RkHxfZomRGdwvhLNcjiLBHMdbX1pMRFHKLfymvYMfbRdWob6m",
  "key8": "x5r8Tb2gxWuAxbiyUjzjU9kT9ACx2kGZvN8acewZSXPLBmpi4C8nsTF5kHQxbKwHSEf2Vsexqasmi2UeYHpH7KH",
  "key9": "AzGJBS5ih8KehZzXJqhP7EaTdD1frjQgJPwNy4NAL5sQPkTbAzrA23qCFxNbkZaKZea2puxNDwmzTJFyroJJVcE",
  "key10": "2cncUzxvMw8KhtHF8xBK49SJGXCjEuaXRWCs8PvPS8t8N2VEgDZgCoVMGTXo5nb14z54H2RpsaXn7gjHpxahq825",
  "key11": "2yxkgHEMWhKs7e3j6EwgvsgY2Cw2tKSqCArCRHoJypnEdjgPLZzvmHzCFyEmsi1mQq1QurSKb1vLS1EgUbSufUxd",
  "key12": "4VszKLuNpwiP1wbZAiuKYxrYBA4HuuZQMEgWCcAEKyJbXjWPwMATg439vtRUoDNzBh5nvSGRhe4d8JKrjKg4yBZR",
  "key13": "2c7C19rB8RZZzCH5oYnFgLwoHfc5YaiB6owpCsHvDU9YY2KSxdPu1nZgn7Vh6LDUfxxehuPDxxEYtEyNzwzJBHf7",
  "key14": "4rGw9ZKgrC1sfyZJpN4wWMvMJuH7HLyX8Y4R4KyhVf1XK1EDmZG3rSQd4dW7s1aaKLc3j9aK448W2SHWYPCp6B9D",
  "key15": "xpzvzQRJ2k5EvRTrd9CD49BC7BUqjet6XzFTq8X94n9JPzSBHPD3Wf9VEgo5PBNoTW3SKphq9J4tdmWRAEP14SX",
  "key16": "AoXUwFgh9kJVqgVbXuHdkWix4eBqsbTte3c5GR2Zb3RaN7o77w4o5zpi6hVez3X8YqUyySQ2VWZrRdNZ3G2e1i6",
  "key17": "5CV4SasiY3ihhYTT2SVXRniu7gnk85QbFatfFkPNZDB4iVbkfL2qZWusaEwbpm41eURp66ReySqNKtZ1WaYdbM6C",
  "key18": "4DGsyh9Wg6eu9CcZem9z55VjddYbYCff2ANiVoURz99rBHzYA9sEtbcgYyMA1dcRerYrzDqehLfcCQMLEXJXrkf9",
  "key19": "5TfwrFVBYzZkwbhPMSdUtWHXmGdZwpuFoK8EHcTtxfoJ5YNzmsqUkKabKg9DL1i7NjcjwpxyhaAdbQqBxLESaox7",
  "key20": "39fu8kd3hn8AnkFuzUXswqVX1VbVwEdb23WcCrvU1BY59KwmjzG87urZ7xCe4oK3HvPDXUzJjRzWV7xUAqGW61fc",
  "key21": "49aaSEsxUZr4UC7UfvfZ5SQVb4285Tt2hEcuVyLUsnd8Pgend6R68F31EhDDC4RVriMoEZ4gZyu5xCfnXyBL2Ytn",
  "key22": "26G2M49mXjLZSKX5KsFZoZLmBueZEjk7uucfYcTcUFgNzx9Qpmk7ztnCQtdkvKkVmnCANrxLy2nmyQaGSVjssT7Y",
  "key23": "3UCXrcTX7DfdCkTivqVJbfYnoUzQzPxDzGyGHXTbZommhy7h9cU3pRSTFdAjgL7Rnnz2Rr761T4VG1NZpZc2m8qu",
  "key24": "64oVSqqwdQCkFPKyCpq3tD465vu4scFhCaKrt86xhzpjF2mRDCW8Zn1ofHwFQrrt5KHZeDkKEWdask1HLgn7xXoE",
  "key25": "2Lcg2mCYvv72JgwpMS4kZWUBJscLr161SF2MYutpssASN953fDuE5XcLtScbjW2fVFg8nQomKjbG7Y84LxpRJcTN",
  "key26": "2trmhXqmPFxMX1Rpw7CkQ7pZTKZKS9wxUfEAA8YiKUrYFRBHVXXyF4uzA8dG1aBD8syS1LcPBjyH7MSAwhnqSPDF",
  "key27": "y9hua3AHz1uP3Ys5MpGaF6YEL9TMGSB5z9Px99gajnTxE6GuPcRWZB93xkxCVAbmb6M4EyPBiR9qZFURNEZY7SE",
  "key28": "2jQSVpLwcHVdxSeb3x1fcym9GAp7KjUA6jPuN48R3QZ5K325fy9FjXwJYzCJHmNdJAnY3a7LomWfWKVXvtM8qu25",
  "key29": "QEJvb7JyKDss8g59BuM1nQAPSzvcqJC4fTEPvm1ynYKHwAzbmY4pAUy1CjADpBkxP5kkEksK4aPZK9V2XsB3jNU",
  "key30": "4W1N9YsSHXng7hLp94YLvvqfdiHr7AmzkUKXtxu7ZtgXi2fwt8U4cgEy1bwaz613eEqkfNuipTWCXCcBnHSeTi9q",
  "key31": "596LKvBXs8kNckjCyiewfsFdXpuCKvxB81PkiByyks1X9jXYgzYeeoUUvVQpVJKko4J99SescpxRUHpoGRov1wzB",
  "key32": "2bKTddByVRpsuncFffwv8sTaQQd5goYogamWAxuvvFGp5mzo9aG4fwCk8YU7Z7QHakuFGNxTxeWS5mZjQzsJQBEy",
  "key33": "qfvp83SiKgmVymkdjUscN2Q4JjbsBXesE9o7mPWkpGv5QMX5D6fQ3tw1EJGFzWXKZsysoiWsc4rfUECMKFn4LUq",
  "key34": "3iy4fizkk39FZiTfmjGdbpFfHQNMWMvT7yysBGq2L7qRUn9dikkymA4MnzwdKipDHCUUCj672u8VV6uHiKUEBtFv"
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
