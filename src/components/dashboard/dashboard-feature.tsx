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
    "4XMwXH6Xsv9kPGh7t31afwii9UeA5faLsEdu66ZzWsm2dVvCMULzVwAxYem3QEQPZbVypKmGA8HLeFR6gTHdPtMD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fhVVyCCTMqnU2DLNUZ1vr43CJYLMy4qRy8irCeDiDqdBqptqLmUpb5W8or9irae9TCjufFsT8txPrMXzdzNwwBo",
  "key1": "tQPWsWijWxNpm3MM7xyeQQ1VmFav4P3UPtUFhz68rVcD1BNpsXHa8b2VdtzN5grJeQnWaTqx1LW8ogPekw8xYDA",
  "key2": "4prcTS1nWiMKSBWp2vN6er9rwfxi2WABB5wZ4LYkajLJXDmW1A7LTXquSvckyksi7b9HDZk43fanr5xk4NVApWxZ",
  "key3": "2hRwfJskGSzi1tJr7vYALsH84G6AgTExy5zYTpLEiw6URbzWm8d6kkhDyBrPi8iDvJNX23k8xJAfWia3yKQavkYb",
  "key4": "yuGQDDNv6VbDtccV9ymeKzfnx9cPyHSGo2FYMdRngMGVL1mzFaDbFurfJmGwm6eMpkHjc4BxxdYDv74YrNzzcu8",
  "key5": "DdXMj2syDTQweFTnrCcsGKxt8rCn42FLfGq24WUsAzZTELiVm7HBthB1LeGZ9sAsDJMVa1vzXECo4u1etbJxQC7",
  "key6": "4tLhGUrQaFegiG9HwhecYwP33E9aC71UxZBMpt4MBzByvvhMws8m5jGRyhw1ZLCH94PG9bHWTao9xnhYJye4soqq",
  "key7": "bypx2j1cgDLLhNp47wHGSZbM5PAGZ9XoobAciCsJz9pb9p4qvTW6D5hPARNo9R1gA15V9z1fJV6SEyQCtguPLFi",
  "key8": "66bArmd21AKMZV1oZV6SctsQLag2UfqYtuW19yfg3MZR4bBxfjQ9TQqoQ81yoQPRAAEMHofJve3rvcC7vqnDQW8C",
  "key9": "2Evfhu51SrdXtzCdrCFAkh8CCK7FJfATt8JMyTs8jAKmWztuggBEvJCcmK9JaKbYJgvspAzys3gFKEFSUuPkmjnn",
  "key10": "4ubeyJbhEHcq47ma7iKD1qmY5XgNqakzDYDuRArsMh1vAwEmYVcs7oBmMedcLh1iVxAY3Wce5h7zQia3B3TnpgHp",
  "key11": "2BZoaYUsdQt5eRxpyCHEsRFMnExXJvDgQeZRCzfKQUnPQ5N6TYkPe5bYcSScoTF52KFVqvvWWe2xV4Cqz7SJYUnV",
  "key12": "5rd6rPaCBFWpxnKAwfMtdiGTU3MVwwKigi8m2n1LKXRhzk3dKMoaHHHNzoNeag8PJTcrdgvq68QHsemsYAKNSScw",
  "key13": "54U7z7Msw5xKBLnNnfwSCGNUNiYQv1MDSZFWTGcxHMXCmpjqCwb5vccC6kWQag42niUF8bwRby1dVEQkkDX2cqWD",
  "key14": "5JiLzgeRwNJCfc1JH3JxZffX6mmohBxWj3wBEMUKDfBBuvtsb2NRYHcpmxvGNhh3zgVZ8ggaFqUonKVxvZXVHHvA",
  "key15": "5orGzFKBdZHgih63reibjFBfj8N6QK4Vbmm58r6QvSi8ws1vv34s3BsSXJfBitUsdFmkzYXhcRz3NJoQ8GmTxjun",
  "key16": "64PUzUq7Vtmy6sa5eVa9X13J76UiDYGMHKcyQFTDR3c3StNSMKXGvcELhmC4oDDPGgn2SF13eAM3oAAetxFH7KZQ",
  "key17": "5cm1hKd8UT6nSpqwZXoSsxcU9HtLwm3tADKLGyDzpHDRyEGSSTYmbcQHmbqU5RJiDu7d7rH6NZWUh8b9Sucf66J2",
  "key18": "rQ9FRGJ8i1ekBhwpomvjFsKq3b1FPmK3ZrKUtKzM4ASfv7fmSmbp498ERhQV9nmpB6Sz1nkoAL4TXg94uEYBxZm",
  "key19": "HHtrGzM3xcoVJVYKJUWWKHeb2Rer5zMabSskfbXzR7vpJPreYr9xnvQBNUuje1vknFRXvUHVaEdQxwzrLs7yCHu",
  "key20": "4eoGZByJmP2dx2g7bH1M8VdgxZ1WTmPjBmWAGs3bjyMEDE9v2qnUswHoW8pbPYDdnHy9R3MzpyAp7HU1L3xS3rpz",
  "key21": "2Fuf1yhJjrBmxJY5dkCJ3zJ5FyyP6Cob4GR1bDmNSwkbqmdidsH7Fk91yocUzcav6bPPEauL4xd2M57yq1D2nQeG",
  "key22": "3KiG31ELzTGNBE25QrgK5JaQtbfNr399U48heA81HaXW2YpE5yJo3sY6kvJmhXcjZENL6jFsWAPREJqykdFekgF3",
  "key23": "3NyhhimfyQriMPAxV6cwKZfcbBvj2qK5mLS3HPzsJruLZKv7w2LqS4oZN8DdbenB29rpQ85AyiVLkVo5mh66pTuq",
  "key24": "3g7n5DVsAJNARGPS3rVsTXdiYWBCWFCy8wUBjRJH9b8nLGM4gQCP2fWycR19rE73fZZzDAATxP9vHmnq6tDRjSjK",
  "key25": "376jXQsZ2iB2TP5vCMEfPAkbUCA5s9VEM9pjnTHgKLEN5Z6LZSbrTpfz5ZyKaMN3PrqfTJF61aWCP4nqava6b5A4",
  "key26": "t6a7WtkgQQtd3tBN6qMvSBbJh3JiMpJLJWu2ENLSjaxD2u9M1aDF43tdx5U6c63Mw1i9GQnCgYJb2ZjUZogFPZe",
  "key27": "3aKBNBBSXX9bnPXXzLW4SjyZ1h4mmLnZNo3EZAZbsbKy1eM7zpaydWJbaTMh2mzuWNrnFqXUXmzG2qZAAXnvQ9sp",
  "key28": "4bhWsD8zBjxtA2rfA5YkKDpGefkeMTCNYCX3E4fsBRbRTqYd5zZSFgfMg4AaZLadHNKNMNrJ4WY4CRL1v981WqcC"
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
