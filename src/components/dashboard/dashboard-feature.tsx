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
    "2Qex82HNw27mHN1DBg9NWRXgR8632wbbUVjxu9MECNwJxYQtWP5CZhPgKwFcjHiU1BwpEy7SNUUqULgZqUWPhgwf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nzmP7ggbH54KddPpF1dNUZP5e1bBrC5t9QFVU6mPRPgvktdedcZzDhhgJAKtEw7BuZrvtaMWCYgKBMZQojjsmjT",
  "key1": "4RoGwUVtQ7mWaGReHG7FoHyaPrrw6Nic1Y43rC3YarwiBouwjqxqfDZFwThT2ULFWhuXrgKsM7a3uaD3nmGRynd4",
  "key2": "27pzyGeH2XQ9FPUKCU7aPe45vUESdxzqtK4pbLR9VAbFNgjySWEZuRAHhbT1mDQDg9XGanuRWF2AByhDWFPvzo26",
  "key3": "tynjGsGjBUSxqbZkhF3rJqxKGo8u4N3Q3Fk9QQD1ph3PNRVsbY1dBCzHP34pBJYFS1qnJQ4VLMGE4dcPZPr4s8K",
  "key4": "2jQyxpELyiUR2n3SeuP5Tczj4RZi3NRm7DgTBBjLBCSWU26gcWH7zVaU59K1qgCbEKinqkfWemLSVsLYj7n49zhN",
  "key5": "227ysLRsKcUVt4hkmn3PHG8MQoqoiTUtTFj1EUdFVw7q3g2M397V9qGWrGMdWwzCFbanUoeKVZ7KXzp8BZU5eH2h",
  "key6": "4yuyxv39VgTz28dofvZY3RCew9tgMuVHjtLRz1jLuvMWDiFwBNY3nbK6nZXG2BaX1RYCsmoE6UvHZcvoyQ566LoE",
  "key7": "3BmxCVJTsFHVPMjper9jHNzbbmdD9gXLvkGx1iRkttNEeVNEFGgusGYBkbTfAJtoHjPg8AAFmeYZeovALpLb6xBA",
  "key8": "5nefzXjB6kvdEtKqKBZGhfjVmVWwxpTtf2MWdXgHC24qvM1GHHTvEpASDGMDnARGD3JcPA8fAZdePcA74yj78w7n",
  "key9": "3xJFFxch813reKF6UujnHXE4Q7vu2K1njUCt8murfkqojJjXrpaCq5yhkB1QyxsznPegJNH1QJgtFzAGRZ1t8hEj",
  "key10": "8m6iQ3jfASktmxuEw6DdFSW3eRCgfbcpsEs8Jc8X1G6BNArqr7L6sBUyCgfA4dKETegwXXRfmCesPSNrzFmwuqo",
  "key11": "3Loiv2hQddNLLqppMsuFF387qg5pyRM9BnxqxVrhAEWzwXMuZqegtQjQkCwaw1iFTiJe9Ntfvvfgdt35KU9vYXCK",
  "key12": "2zJMxfGmDAGDAUS7fpHbAWskbPEuaN7sbzBvURjuAzrKdAYdcRqEfUvN41Ttv4pFVKCPQebnVTZrGEpacEJxKHH",
  "key13": "5UL3xWojbGJ8aiUkWUhECVqiUJo2NZfnncrRgZM5EQPXhk7kKdztscuUnsYiDS6nVNko9DCPTZVXYmfJ7P7XrBhW",
  "key14": "3ybJAieqMwhzcy1QZgGsNAyebxzrBE5oR3z4gB23VeHfYDtEhZMC3YHjkjNaabFxTg3GxzSNnG2YF24Fn7kUR8Uj",
  "key15": "5a5ENjQiKV5qdrYtbyfLH62Y4yMpgk2QC3g3QAGBtuprwyUXMLpVUQyjXWB8XRryBAKXo3C1CE7H4yRxiZXAo8h4",
  "key16": "3CkZXtxKydaEJfhRF8j5Aj9tbVnF19SkvqevZzx2tpBhfxbK4QGan3JpdLtn9W7tcyWmNjLFZBcV6uwXND18NkXz",
  "key17": "658BocvNUk3R7AYnqRd5VJEz1xwHTDQrFvZ3wiZFz3d4GEADUkmWpTL1vCnAbnDUBAcLhog14WdY2or65o6hMZhj",
  "key18": "2et7Vw7ZPY3nZDhYutBqu5Xogu1i2GN4Gz1wyKESgLLg7zz1hTE3V1apuaXXqFTekSeJqKQxi6ATQbQeW4P1txeS",
  "key19": "34HSfLffEq1KbZf2fFACeTSGc3zC4PsbtSqKetXMTRzac54J3H1yeggMRNus7tHFrmav7H6qfdxEVEyUBnMkyBx7",
  "key20": "2fu7nHp6MYU8BbpXCPv5VLFo2G7YJbea5V8qsrjQF4RSM3ZA9AtJCLYiq6mFZtmdo5cq49bv3kEdjEsDXy3aCV6d",
  "key21": "EoYcAHuCja3XRgxJ3vbEh5Tu5ryvNZ2b8ZG1tP97eLdkp1wTUPcJyYD4NY8UjgWXtN9ArLiWqUQ5RFQD1i3d8Th",
  "key22": "4veLj2gY2f454bMxrZ9g3DxxDUybN6PPhkiqq7aRn3XPvuqX2GaBGZ2XdycXSSEB9yZ3T2Gwjgafi6RKr8f21nK8",
  "key23": "2Tb2JfNByoeHH9UPj4391tbMK69A1HkbAzYVKzkEVc4xC39fQRhsYSL2avaikekpRZ4eU9uPouCJJz6CbfBYfF26",
  "key24": "4KZQhM1VatrA3wf14Tx1HiRkzcxi7mUoX5811HKZW3G7Y4RptVDnwzbXYc9j5ReRYnUbc2jFCzMS6aEdDuR9e65S",
  "key25": "XMFjMbiAepnRPEhK5DEAAgdDNK94JkNGz326AExRpFNqqPFiWh65dx6ipi235U1WvZYWHD7pzy6RSMiQMiLyZ85",
  "key26": "2x6Cov7SouPZSfAC56MfW4q5W3aVsNbQPHAr9qog3VRCSaBFhZJCWBv8ft7AioPuELZ8FyKsPKeQYDCh4bt8AxgV"
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
