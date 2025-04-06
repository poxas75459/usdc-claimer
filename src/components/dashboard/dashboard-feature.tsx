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
    "3S5XcSR2QdBx4kSXp5vvfQqHCPvTWkc61qg9HmES1znHmQEkknjougc2vyo8h1HzsakrNdcsrVp9yqi7pjAeyfXP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vYGcD5D47iNFXckJHjGZTs6Kzb9geErdVeFEbSWC4tP9zVyvCin6EgKpGc2p38SChcExEmi5TWePDw5UXxGWnZA",
  "key1": "5RYHwxswv36sGQ8vwAR3G2yqHGsLdw52sxwHcy59TmJ8yT8MQ1S7Gu4JgznJYAMAKAmnC5snuUQQVrTj1YrhZ4a6",
  "key2": "3CGJyzpEr24F3ThaQPfbL1p7GqfZy1Fxm6A8zc8Hye5xXNgcQoXhEtMa4qAXHtB1FJodWs7BWpU1RRcgdaKG1urN",
  "key3": "3WEqQQHY6Y2TrtYoXSaKwSUGS7cKUhMnP9W1GctETwQ1zt6mCYUW12qGYMoNPDALtR3TF8H2gkzRSNH5zvjZbw8e",
  "key4": "4npPxxZMYthdZ6k9ZzjMZ6kws9tHT6NFD31RSPomHP7UMtCQFpMEoGjguZqxusVJ1Gd7qSKvrhueyKNuvQvebYzN",
  "key5": "42HErDWjx7MUPDUULzLwaQPsCeouPhRMDfYbwPSv9gpowiFP2CazXnjia4uMt9WRKjFDTma9vrreRaDnM5BGxqBT",
  "key6": "2GVjzgPKqxQW97kdFrX84unJQzpieyRXJ3AbQowrtpgYL1HG9ocu7XzBYbnBibDYsvkxDVxGv1W4gz4S8v5FnEbS",
  "key7": "5AyLAbcQdoW4X6MqtoJUa8vsHAMiLMiACJxCnr14HCmbNKdkpqGxeh8Qsvz5Hgq3cVzHLvSeELGCDhUZuyDYgvXw",
  "key8": "Yp6oRBzKyps7F6EuZdhwmjJktoqv6hSPySXJ6U7jNnkcMFJfFCvTWC7NKtBC2j8SjdWfAJYkihBuFx1wZYJGeKT",
  "key9": "3iQeSPJnRcEriSdxxiuvPa1sPxM98xN7M5ugoPHWuXGuxNKqYrVan1aJFvqvMbJobPjqAsC7CtaciPDKithbDuUG",
  "key10": "3Ys9pYrUbjdvqDDNczW3MKrfr8Ez4NwvUN7BaNMH4neJfro7FsqZh8rRg2br2JTJjTMEQ8Q8uJvboaoyGiMpr8yo",
  "key11": "HX2NvQaaHnu93moudyXjvQsDe9XG35yNBnnMJmJxTEb4ySNCDwLHDcgeMfwrz2MmvtJBeeiHkp8ZfknpnZ5itdA",
  "key12": "4H256MgJoVNzz19rRAXXCtbsnkpysRSYwgz9au7RD4FupSgucqDn238sNHzuEAbS9je2FmVqRdou2ttjdp9gJ2G6",
  "key13": "2HHA7MkdTBP4equTuPkCcuYWruoLn7wiLVBvtAviKid43gRRDycsmsMWpqUBWQRJGWAfRG9HF9nJsV4DAaYNjhdB",
  "key14": "TV54XB8XNTjxLQnBxMWoXuCLVxCdd8dh89iXsSXvSn7NcAbGsJuFVqfTVM1MGmmwu3F7pazozzWCRhzMyb1PvjC",
  "key15": "3JUctpZEBB6YhpM7qGNXedVW5pqn9tkYNBdN51TifRxmhQYdmcYPa18eXdrKS5gTeJpMrMDeSi7zcwnMNMwvKtwa",
  "key16": "2hZ2dxDyU1xEaaxoDMPkcbCpwLQzHxcmxLnLXPrhbRLn1Bmf2ZWoL6khBju9F4wLWN6ZZfSRbWGeAV2iVwNPRV3V",
  "key17": "5X47Q9MK7BMEfaEkoiPqicvRpnP1ncSFf9ZGqsjsJcjuNAUZJX2NPDYn2qgEkhxXvbF8RioG57Bc8QpyNSYBzyfm",
  "key18": "4c1S54funJZ3xLT1hembQn2a82drPcBeMDecVrJunfdQPSgobdaqyS4B75daPyjaC8Az4LYGbHWifQXuNjafeH9X",
  "key19": "3TbrkynHsJcpaXJNrS9c2CJqm4n6fiRWAvmrwkBsYiCrRgQ6ngixUVWT2qqn75Mqjo5Q85mQWjM7EquEwQaY6x5F",
  "key20": "4wPeGwXFeZQnocyaYESYcqLgu7ttxNAhsWYsv4PuNartjgQgh3KB3cweWSMbHFQ6DJPnwmzc8LBP768ESsm8sLRm",
  "key21": "4VkHxgipD6SnYyHfHvEmKACuUjBqB2Rh9QdRyVF5mh7yRuzmAiNQZ7pZayysqPyLRRe4bAGSRBtDU8Ykz5xbWaqU",
  "key22": "3oR7EdHPmrNKiYb5sAmzTEHaRuc4eXJ9KZ2ykXPyxgcp1vZy8tLcRkP7uwpXV4kaAfb2EbPeVPFywYCpeGzxG6CJ",
  "key23": "3GxUo9ejLp3h13UcYff8UeWaUKR8n5WDQ5rYDyeWxvvqpqCf9M3oGyDNTZxVb6NENuK3z7pFWrQtxbSa43aMQ4ZH",
  "key24": "5FkdrpWcu6VTVdiBXEZHPStS8Qb4ipJXJiZKiaPhKzwenXFH9RSQAXV1761rmzTumEXKSxEoFjq7r7MAikMW4jqW",
  "key25": "5TtN22fnQGMBgNtrte1zsLPoVwGJGfg9PvPEuQKxU6u5WCnEdn7RMA1xYsqCjUNRh7oaVTMTeWjzntRjNsTTMwFZ",
  "key26": "4VKbZgv6KiybgCc3j1Dn1mBFcJqVdhGjjLyxzqJMG3dEnQm46fgviKeoLiB3ni7ufUasX4gVwC6FjjoHP97ABXbs",
  "key27": "4vNvuYoL8eT7VdPHLxoyUUpudUfzxSfLp3rPPw9YnBW1Bt9NA9s2kZM53JLvEFadcFL6gERdX65r8iwi1NrGQztJ",
  "key28": "2JLG5EKA7w2XaR3MMQXEwDU4FQXb6pYrxGovtoQH9vtxnZKRjufc3RZHuMAPMgUjUcJ4utwvLz2Xtwp38zt4U311",
  "key29": "4XFS24u4zLpSXwi1rMCNyDA7sFj9CsSuRDBPXkKXiBseni98AuygWTGGTXQaxueGxfxovr37TmnwuogJnbwFo94v",
  "key30": "2LR2gaXfHFMYc2tKxmXwSgqCCXrgFK34oTgeWFzso3KfviWbzqtNhGd8s2HLwoTFMNhDovDabdbrp54hbH8vih24"
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
