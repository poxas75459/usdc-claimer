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
    "4MceNmwHcckZRore4iE5cZDZQVhhjQU3kprNmSHPBvmJCYmh6i2hdsgLmx77N7zCPf3py3atGFfSh12tTaj5eBg1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46sDw2843gPLxxjKjrQfzGm3CSXZw1EEcWkzg15nsHS3kZNtWZmTp7zNBFjmSZp2Gx9iZmSC5Rs7N814UdvcTWLw",
  "key1": "5NoZ45ARaFm25f5JfGaN1Nbd5m8QK12uCBo4Yxu4dmgX17U6jGtC37qSxG8BaqfhU2kyhwPfhuBrixKJVXnHVUmL",
  "key2": "42Y3HnSg7vtFP1iCyz9LAJsiZDtcQGuGVZ9wbfiAwCWcjCJy6ZpVHzDGognaPMeSeMPS8hz7XQs9tExy8P7eS36S",
  "key3": "4gwa82i331WpjRiwBhyaGfDmsGCjBpux9m97KSxzGWmzCUaLXKGNt91wHejRQZ7uXC5BeoikzQM17QFerfznRXX7",
  "key4": "2DatVRRZRCHDrQ1ZMFGViGguifCzgg2wUZbRbFKApVAiFn6L3n1s3JB8BZKENVFordcCsDaMZKpm2PqSN3hWZXCu",
  "key5": "2Z21jErAboFbE5ocmqccm86cJvFgQHS75nzrtx5vVjLEtRiM8LjmptBs6jmD8WWEioFeEMqFTGz9nEYKUG2QcoZ8",
  "key6": "3U5QBZwxhjpKeyN9R57xAdwjXtFbSsSXVAbgeB8BFPnFMoDMYLLm1s32p9vHZagp7x7gHRKmyDbDDUj2AtQAuCVE",
  "key7": "21L7Y68CQJg8rb4y1xgUUdScsjrVgYA3mVrR867y6tsjzhLqn4m3fEbNEyPqpt1CKLpwym7uDFm94SowjzNWaW4P",
  "key8": "3UsSZUidBkU8oB7DwVjm5h3mnm8UDSezzrUS2CHNGKQhciMezk97uLs69SgQxEFEFUAThesn1M2nsUq1tTQ6MvZY",
  "key9": "4ThYPaL8av5rw2q9an5FzJ4LFaxhePDMorfWtFhZyXkewiQQgjERG2nnHK482pvgfnTHrHnEtjFgEGF5netwr4oB",
  "key10": "RBs7ktfpzv4V3AaxjJ7bZAPcphSbUALCJMXT553sw57JMccHxcLVdMqA3G8gZpENg1TeaSKpMkveQ6RGwVnSvhX",
  "key11": "QV9MCu9Fd7QxWPtfxAxGBn4h4TitwmLXDcZaZ7dZTaU69DvoCM7SJcjm61UsG2g9pcVdnDFm2VXBZBBg7CYrNWK",
  "key12": "3vohxVk1DS8K2ijGMCSyHmfWRMAgua9sZutqUue8SC2peL7ADSgmVtu2vbFa8SDqsAbJ5xJExS1ngpgapF28f8Zp",
  "key13": "4b5dr7MqvYaLYYW6iHPagnhZ6YNHG76CNertirAmeFQjUtay3oiQ7dTHmD7NXSvBY2ieAag8yXfhbXyU8pQHCbWJ",
  "key14": "39tqpZL1dc3bmnEbm4mcnygyu3V8h7wyBqdjaF65qfvZnMyD4xCHouCAVJsspKGmoiyFMD4Who8o7W1BvSXajfue",
  "key15": "TFSRJMg9wNSUmwoLYNWtPii839nh3gReR54mMefyUUU31qH49keQ7N7q41XL49LPV5nQry8DrhnjVzSr7WX15b8",
  "key16": "2jAyPtVg2h4siQqTnpa2twc5EkTNARDgPK45pxPJn5ct3VKZhJNT1oZYeHiVuTY6kXPkYvEBh2qaxojSi6MRSdfM",
  "key17": "434Pmsj9Buc4FZTmcerqzPnuCRsFwW4VBsnJtbVwAUsy4NtNTMFCPN3hq56avA8Z59Zbb6g1NQNVtttaYwPpxNst",
  "key18": "2QW4FDcM8cA5njo1hueqnXrAt2GUNcSvwQHeE3oRjqyvqw7ZdVeegD7y69CxFd3y9Z6yvqaawgVgceRjUj3WCs54",
  "key19": "2nLpttZnYmmc2XWLGti4ZTkGckwT9QtrhZN78aG3NJye3LkAiw1zkpKLyuZRfb7MKW8HaGje5nRz8NCxiHJiYD3k",
  "key20": "2uA27yPP6YrEm82tVuKnABaXLJR23imymaHCBNoUVQvceGaUNgqUFwSdF29vm7ygzWHnZcJth3oyKtRsXyToRJ3r",
  "key21": "pkqGjs3Ptk85J8itzjqW7rU84WXK2Q1BDPAUekZPeXqMh3YC6bb2fb2A4HQH2RNkpX8J44U5kqT3dc4TEJRPfwx",
  "key22": "2pDnihFY5YbyZqKatdioQhsqNv7VCDx4rNubi8iHyxJWABzJvRhp2DhUev1jwjmYLLBGAMN9LeMmZTomeFeBQjRs",
  "key23": "2Qokup93fd7KJcQEydRzww49Zqtpj6kG2LGG1nV42bProbKyBZqESyrZqHg2oBQYHQdFfDinVJmdqTkx7arJjpdw",
  "key24": "66Q1URqPPQpoGToGR1wWzCzSmSTzhcB9WrJ1B5bhpc5GsGDXxr5QRP5mKr7xAdovpHxFUaUF1o2FW3Bx2iYXy8Ne",
  "key25": "vj3AceW3LvnRZyyJLJfWChcwaRPbVfTDFoULPKVPfPNxdtCAvsteNUpTAwhEgU6ExRL6iKdSU9G4cVUjk33Btmn",
  "key26": "2X4smYQbJDxKSFed8FetwJcEvTAvBvyG9wuUASUmnLsx4PW8WovPWr8tMQxjxysZosjRyRRWk1KQW6bVwUo2wbry",
  "key27": "TtordKgoiwTDxooUuYhYEwoT4KEx7rCtGVkpkxENjBXxSvu8EGJMamJ3NQjpJCpubjebzD2FdSxG21FDtA23sv2",
  "key28": "649devn1tLEUE4aYEJjLihC6QZSeK1YsJRZgqxnyy597mRRGo6eov6kqTA35UgPSUEcpv92ssmbf5nBUeP4a7X6M",
  "key29": "37WwUDi768VVizLHw7J5tAWpM6VuZrAcxWFsD3wmrpc3MorhiQ94JtLq1UnGHrbZyR6D4BdBvrHrttz7Xk2Xme2Y"
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
