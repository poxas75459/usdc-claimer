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
    "55HsNQSJG8ksLejdWxHn4rXb1mFMQzWVfLYyVpLRAUUsybsCsysJskr9kwhbNwippncKiP8qMj1aF9qYy3Qbxdcp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b17zr55PuD5ELFL9o1BLuk3bq2okJuTH1NoxQfgrbM7qSWvQKX8VYEUxRztG1aXWHyjMT7BuvcLDwSinPHUbYQu",
  "key1": "468osHgACbWe6kNP7T4624j32b8rAEJ5G6JRmBqvrBXf7qtRZYYx14dorP9oSe8eL8mpk53PJKz5veHqweHtT6jB",
  "key2": "27RKfULcF1mKymZpfKAK5oNrVP57Atcs3n1kuUDHZdv5QnF8X1gS794NWjZT1FEhZyf6qsuBwoLN53LYPy48RPyk",
  "key3": "5VAN3UnaN8ayiV2w6X25FZFha5gCRckhA1utSwjWxowJ7xpUgGy1hJa9syU7Pqwa2EirEgWX5JTDUSN943sjHypC",
  "key4": "89LwgdCjjryJwbbxNmbNpi9UineQ3T8tEkYaXNEcfHCjTbnZxm9mPVDayujKN7XpaB37HBsLm9dfBRmRTA8dULy",
  "key5": "42forPWAfvGiFJbRAMjKAy5DEamYk62Q9JH9svYi4Dzix1fBTaRVft4LgjJtNfBT8sbkXjVrybPBj8U5jEWZYLhA",
  "key6": "3cvoLRNGhHcn3RarSFjYGwZ2P6Zes5z67RApE3s5DxoDkFhy1mghDzK5eUmZZ7G7yyLMwMZETJUpFyNGspPG5K6N",
  "key7": "4HzDJLBhmFeL77xgu3bSfwftkRoZZ3EmpNkP4QcTaUyzq9RCc2qVR9zfJNGcd7ANzg6QJxvmyY8W6d49wUNgv5Yd",
  "key8": "4t9eSvbh4PkeLrjJX666AknFCKtrNuU76XTCXDk4Q8944jfAaHB1ZMTXLNBdX4dBHa5qRFCsXDmBdP7Vr39UfYR3",
  "key9": "hC1sKesFKxL1kz6J5URKQxGZ1nvxXcVHSRxGZ5QZR6hZ9utKn8FkECWBerzZbYV7VJ8XzzatfqYgvqUdV1w5N6U",
  "key10": "5p9P7ARJDp3mPDL9mezbVVVyTmgDQCtgC64Bdk1TyHEuKdLC6JnDTxYV7GeLN49uFdWD9nDnxvMe9KUUaYGHNqoE",
  "key11": "38RpvLZgXE8tjRC2kBwE8HWzfG4eE4gVT13mDd1naEYAj68wXxiBc5petk7SXGumABMzdfNt4u16ugtEcx6fU65Y",
  "key12": "5AqkP1F79tJPUmH9Hzdj4VEnn28pinG5ykmaDeQUKQFcVvcjWsCQrzsVjvwF9pN5gtJm7MjEcuuuEteRbFr9kZoC",
  "key13": "tmp1R4y4XHK9ctA6BJSvVVN2GKJe1BQyutFiMszZogmyLWm4iRX1YETxCkTSUoV7PSYdFPCUJUa6VQRHLppDHx3",
  "key14": "5h98cL5UgFtev4ut4jR8xfMfJRFiHWHWw5V7pB1nENYp8eMwA5qG2midJ2RDWRnUYVDwprWHZTBWCQmrW8mkLstR",
  "key15": "3bNbCM4LdyRzzn2qi12XBCzwB6GHtDZxA52oED7mX3qHugLhrCt76ZU5cXX4ca8ChKVZzd5aTZnxAzutaB2ePKXT",
  "key16": "3kWik6ATfohmKBAgGLAKphzN5CKCs1pDjsi7CAG5BGjtk5gVHaihXNUY1GD46XnTi1ceeMwEPEgQtPhGWkurFc8Z",
  "key17": "2y2jQKrFxmKbhgvWgECLmu3Mbsfr3oi3avC8zxQKg1Kh7UqdjtsfjNTjHWCVU5MbXCbfZdHxtPa5B6jB5NcnpM2o",
  "key18": "XzKGwvLAW22Vd7aRwx5rmjTHES9KTx8rr6BZCHYwq2Yzaw5hZybt4tctm5H2ZC36EMxSXZSoWYZto1wM8wAoBE4",
  "key19": "5abCZmTDFa5H7N6UT9tfGyZanPXst2MPsArsXskCnooh2QyUkCGvo2tRqonwyykKz3eF41TVNSgDrwFQ64YqSNcs",
  "key20": "4XyAeAPX6daiSfgV4QDATrSSm9GrTgnyoMuiEKQNMBvpPtXnPg53jtHM6W6n3pztR63tx3jdpTGBMyjo5cSR2kaX",
  "key21": "3vUpjX1Ke9u2LGxWNA2X3jt4LfHXWJ1dLTSyCfw4K92ft57mcbWd1bEiLbyGok8PPCFfGnRwH4UrXfC8shYDxByT",
  "key22": "468osRXV3anPojaD6h9NMQwDpVb7HSYoXEqP9NK8yYueBRp2ts9JiXk2cXeAG5kpzUoh89VsR8ot9KYQaHjgmMyq",
  "key23": "3PPmZKdwe1Yg5RZL1yjFiezhZoaGEiHNEqc22RYQFUeWb8cdKvzpmjx4XgZEXNZggkst8ip6jbfTJEnhozbGwedt",
  "key24": "58Yc4ecSoZBvXKFUxvsmrru2SfQPHNMHMk2TiCqDX3xR2UzQ4jrXTKCw4AnhU7Mftv7oqGuv2mfFTyDtpSLxqXqb",
  "key25": "5s89YkFACBszHLFsnMeXxXzWj1YEXUZoK7TgoX4iJeDxvRqqyug5dFQJDA2Q3c6uBWh2TdjvXPAmSzRVRbiyyZc3",
  "key26": "3h8ZcwuAKPEa8oFPsmxFgsidav3zGbdccPZBC79sv5KoHtsB9ZhNCnEDsnPRVE22Gh8Lja8gFznznBHjsd3YYfr7",
  "key27": "2mXnwpRuyshXBNpZDxwKdMjGhKi6AsaTpRnSbXAFJfpB4xH1NZFM8z1SN5oHo4AyCivZLkgQXRtmbuKgMSeGt976"
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
