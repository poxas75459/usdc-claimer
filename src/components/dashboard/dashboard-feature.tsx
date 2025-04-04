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
    "8sk2qkkGuHGRspnmxWp4XGgwfhvciy9Tsn6X3CYgzzHR4khDARmtiZsSG6VZz8K6fsMPWZfn8iQuJ8Mw3buB558"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C3gS5zyRhbRS1B8G6JjjGrDxE3cLfo7Xc64Q71gnzu5EFi1xqKGBbwBkXdzRoKNhsevwBsxzBgRdjQ641zx6KAQ",
  "key1": "324LJsJDMccNtKZxHQAGFTzpQgnzhPdYj4RhQDE5XqtAJWVKiBK5JMz8pAJZzbqhTFuWXu3GSautyPoPHaEf5kMX",
  "key2": "4yjLUmaTTgq8MpBPtYqQ2okcojaXKRZaMRhMVfiMRRViUuF6hPsziBEvEYxB3bxYWyiVcvHyqDQv8XwkA5YigTjX",
  "key3": "YaqPn8nVSprLAhuCWx2iXG7rvgYWf1huw997PrS6bkQBxeWqvUCKt4Jg9miZAyiBjpuM5RGK45gwJLmSmtaH7TD",
  "key4": "ecr9VZPhBs4n7ytsfDERJcW5BAbUshUBTyCfEm2TSjdE65oajcrUkqCWNzSRRFrfQNEzKaesDpioVYELLW6vJwq",
  "key5": "4L1gSej9WBcw1i7MLWa2wdWbuuKS6gpgjYjP6sW8Dj3JCSQQLftYT2HGVMztSaVGCyGQpiBRPaNDnAk4CbP84A2K",
  "key6": "5o2ru4EAx7L48WAbML1ep1gUieiBbnMujaSe1jxijMovwV3FqBYgBJYjgaEJc9H2DYraw7hie1Vqs2cDbsJ1jX5M",
  "key7": "4k1Sfn45CU9bDk4dsPDehXbHf5zy1cnXXa2wKL65DqfhwqV2wwW1ck2RxZEiVNHhk42M3E6Qt2Q2uignYBYTU3TF",
  "key8": "4TWcPcwRQkH1Enh7XgoWQ81yCHHiPt5DGAxT57Ev29pyJjAWDFKh8cVoEXerXfc8fvfK8BjZdZLa7ry31McKc5Du",
  "key9": "4mJvaxVMRNiqvHjmt1kmxfGpCEgai2eucmfX8K4CFgWfyLrVASxe4tx1yRH7adMHWhHjCLgUd68EJFFqTBNHoyVm",
  "key10": "34hNsKBnBaqPJdEnD9vnLiqyxkJuwcvs2CSzDzhQkk1zGhAcRFwwEVkeszi94QsAuNSqSF2sJ9LFdq6wp9JP8tqN",
  "key11": "3k5cr35uMATtjidU713m4B9qRhuTR3JfxJjotnf68sszTwB3CMzKgBYbL7uDUSGzooimBYQkCZxCL8vXWA6xeFAF",
  "key12": "dRmDn7WWu2mXj2dHeDYBvaDd3FSEaHcL4JmPCBZFqKxYbjMA73qBWSWgfJKZSuVMezzLEw39g8mmZVkSFtXHPbU",
  "key13": "4QD5Nu6QQP8nZ9mwsYdvb18zxR5bSqCi1BzhYyrCBvQVGHh6mF4uFW24q5NCDYWHLLeCghGthZhTCVYVZ7nX9RPs",
  "key14": "nWmWc2USWKwg5J4int2rTXQ3xruuLqCtCEadTHVyvPXhwdpiyzjN9RwLVq7dt1FxAz15k2w1uT9myL9KcMeSGu5",
  "key15": "3q2y7qTbvGwu5UpyHvYxSPpKpdKdsWrmuvSMjcxaseYk2G8gnU4W746L6eGYHsqMdqWd7oyWXb74e1og7mn6wCuH",
  "key16": "5YU6CWZSv27a1LYvjGekwbMRQyRJRiiiieta28EpUB1wnJHak65px45QzS5kuPyz98gxMV98HojtgCALM6gTC1pg",
  "key17": "4qpn1zjEeS8yNzaaQaWGoNH4dH6DHZMP5YxnNdPLNf3NYwU4PmUQMN5zrDYqxFLoXMLhgeDHihEM7a77CAS1jPNa",
  "key18": "4LSCrnyRS91a5gNUUPJ8SWr4kU7b7hCPnwgZcoH6qtDEfxaGoP2reE5tTKVTHsRHdwb9uMVorxWJPrpyrHYg8M1n",
  "key19": "3NXbukGSqHhQZiDhJXN6M35mdbk4P8bMz86iPqyHSLRAKh7VWeMMkXqVaPUVJkoRAXdYc5wWUMYZLn3DDPJV1RXf",
  "key20": "4XHRPdiovoN48fUEAnE73W4TdNPpDSsMyAJRwkjXXBx7rMwbcxWe9tyFrGZL4vWUfhSJEjJLBcRKqXojB9RaLdr5",
  "key21": "59Xj5vXKYVb8W7apb275JijZaQeJuBcQrxQsxGz8pNvLkEFaGqjzbdg964QHoMqWUEzrS3gK6vCRRFetZmrbxMJM",
  "key22": "66gTN1xULrhLqDaGaYhcFcXtHsBGC4p2e4QkurrJ8wsicurvgd75p8q5EpdVmFBES5C8dV6H4nb3eyVzM1tAQPJ7",
  "key23": "2s1B73UcbMn8NZRXMb2PcmzT6pRZ42BwRi87V3whaCYpKHdEjmgjksm3KbPbzdWXw4iv2RDMW2v6K1zPLbgLVm6e",
  "key24": "4trCEywzdL9JHrTqUXDXqdWJg18jpsgwfYPaniKWre4S8oEKxPP5L9y8FQGKcw9BUbxRxEjvzovqZxb36AzAYewK",
  "key25": "3CgCbgH6r7Lh8ZubU72rmm4JHBrAJwa5ZDYQtHS3Rh5Mmdi6NgD7HrQuf2oq8oe1Q8hUaUA359cs6RWkSFwK3ZhU",
  "key26": "SVmLt3nfMqATpoHB7DrD4pG4pyPTjcovpgx1wzEC7ZLcJbSjPQ8ameoUNMDRCvEJ3nBLJ7UCYpfDdsDwfusAcxD"
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
