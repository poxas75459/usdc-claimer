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
    "2SWgsxSY2JTdqSEo87qZ1LQ49a8S6TQnKaCxnmieYxndggxYLVDsqvPQFJXcaTU5zzjGFJCnY5ZdtuM73b8MTVkK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61RSBSvYbW2nmtHegkoEACuycUTHDQ96pVc81s8PnKjnisw1rTatdsYXEvCFDyn5tx4PATikffjafa6iaJA3HA2p",
  "key1": "3YZq47MYNCSuHG56FZ3yYyujrR8kfAopnNkCJcd6FvaHmGaCsxgE7zq9C1ZdkGNaSiJ9j7YSKhBBUSPxUsT4Cx24",
  "key2": "VFQMxRfsk6LiTDvcvLqfnpsKHTE3ftGV6fW4yQj4ziqrPbVVX5FwHYDHJqBihqGWgvRCo4LonLkucwRadt1uA6M",
  "key3": "4wcripQmP7sWKDz8QTQe1sUz9bqYWyEWB89DEahdwZWGFKbMnaZaBBHFPikQFob7v7WFjggnmUJLsE689dae5rpt",
  "key4": "4QPTLBu4nUvriQfGZFfr4dS5F9TZg1onR4urufUBKm6awz6zYcjgNZdAhLHAfKSaxESU4byfk1LcC1dwuiex59gZ",
  "key5": "4eLdVebANMhf8W5o5tGciLYYC41hWdLfgA7Gd7rvopJLmFnrPKbtERcZEMgBv349e2Jkh8a2JGHKdgkjxWaRXTUS",
  "key6": "3L2zBNxS4N6HZ9voeJoupsmxreHgoVyq6LpmLrqqDBhkPFto6XYTqRYHww8o5j8723jLFRHy9M87H8878nRxtZQd",
  "key7": "4YbYmj4sQTnhu5ZVQaBsTePBn6rqYAgwQnKurQU4D1mkRAPDFqgnY7cw3wuGdndtKpechMVxCcdSr9HRDkbr1iN9",
  "key8": "3RKJrQkixa7jVTKf6gMHHJvE1Aq8L5aLgsbYEAjCGicFW5fuX4NrEACcxC28JZQmdzfcwP69yb1goEYncEzr6zH4",
  "key9": "5SpPmpX2wmNpdKcWs3MZRh5ox5VvoMJEQFw2KAASYFy1Lw6MnnsoeNvTBTqNe1o4eNwaNjraoJz2iQX5RF7QYqQ8",
  "key10": "4emiWjoQN2XhyrCPxX2j5uUEWXj9Bk96AXywW94FaLbbAij1CL2P463Y5Yn7Qd94RMch4e86Tbd82p3Cbh9KnSFp",
  "key11": "5Q7otzjf5EBsv3SpG4C52iDuZLpjtm6XLgeXL5AQi68YvHwzNNLMWTu2xLpJBmurmMCbxnSusnQDPjDg9kckvxvp",
  "key12": "5LYqtfWknH2tKhmaynSuaVmEh3GZN4vmJDpZeZqxKMyff5KXvmCuhNR5vThu1FxU5g2Fs93GqFgizAMTvXRJys3Q",
  "key13": "oB33S1eb1CU9tGX9mq7zFvVGm64bKPgB6akbjRwGFZMhGFnaduKECtSr8GBkTH1ocNC3AMiAoH6An4LqHdZNK3D",
  "key14": "3mu9tNmFvr5Eer4P9BNBE6TGwgz41tdNGMdbPJwEKsSnqN9F4BZUA8GpzKh817Wb3i815AiEsYcwsBasDz9E3LCH",
  "key15": "48RbF3pSv9P4cB2Sajy5hmQmoZthf6vB7CoNB8NK1SRxsiRNaYgJwg6eDXXTo48u96fbtdM7o1eNJ1cydY9kDxTB",
  "key16": "2kbe68QSmtQQMWav3f97NaSHa9yVt1a9ULfduEcVKWEYDL4rzkZu3Nu5U7ueVnmqhH6BKYWSVr61G4Nx3N7vD8ya",
  "key17": "wzsA5NNuXn4hypYvhRDmZ6RC4QEcSbVDCp4xnVkdFHLYHov19NmZtE18BX9iTPpXYNZXZBs3BD7P6B6irdSuo9t",
  "key18": "n5p4nSPeFk5JokWi3Zynzbmrv7muzL4aAGc1AbpnpJRhwLT1kX6eAxwwcLpFB7J3FBfXLUxStczAbwCKQHaprQ2",
  "key19": "2ZmT4HmdRuDrNYcvt4fKCqqgxQm9dCmf5Njwa6MTAEz2cYvx14YVVXoH1NqDewrRq6CFu8sJRrqPrSbLbpfGRGL7",
  "key20": "2Qxd4CRRhheJw1qTsedR84wbg2mg1VLQAAcJqMggBddbJYZ9GC1zF7myRALKY3VdxQkwU31SvA6GrunBwMob2obQ",
  "key21": "5xRwv75vQnzLzVZ4J8u7NDEqcaxQYrM4ffoNvvc2HPbJ4R1AUhdXDh4b4GmJsYvjm3AZ9bX6mXFwdP42axeK18Ur",
  "key22": "2WnoJaSUNj18ARTUvPgnxBMxspNAxGmEzT8gtHXPXqeZYiVCtwNk9dYWHaKetBEs8iBVeM4G17NpLps6otJZtDGx",
  "key23": "2wrVQx6hrAGULoLCt3Z1QgGTa6PMyCXuP1yHGL1aYMzwkTjSxSGp2QGJ9RYbxrXJ1J1Vov3P8Uw2eMcceqv498k2",
  "key24": "e8XfCkzKDkrfLTRs41Gah4iu8dsdXmmRYnKmyV5FbnXKkiZVwbDhmec7LmmJWw1AGQ8KNCQTotS6kFKxx4PZ4Tg"
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
