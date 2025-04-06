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
    "2LQCvqEbR6zbS6G99Yr7Njc4aEFWc5wt93p8bZEpSGTVGmVH68LPFERniPkj5AH6RffaB5gK8QueL8T9YDR5Gcyu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tikMdH6YwqeX84j1HfqcfTeNkx8Nn641rWNwwxPqJkXS3xUvCwBTBFABw4KA3zKQs1aFxRSyu51M7m8BJXx1ixT",
  "key1": "3arCsq5TS5AK4dqVK7XuLv7uBj5kuc15fKo1EPiJSvGvjLQhRDMdCHV16LA4d3u7TtGSgF5RCsfoMCVqPSwNhcL9",
  "key2": "4tQXanzWpHnivDiA8Sg3rsCLpkrYk7PdEkXzYZG5BNEgkpvM6vaJJLvKK3rY2xkdHaW47YCPe5x3uwJoffGurCNU",
  "key3": "2sEpwRpUPW2xY8vjk93Vo1ENVku1SFf6RU7znmftmnhRVqmH7Q2miRKucyU7kzzPW2a8dHcm8NRYbJfg7iWJCdp3",
  "key4": "3tt95Bj8oGuXXdN11xXpMGEnDos9UXKuPzyiftEyx13ExF5su2nGcVvHo3GMPkxYgfQHtCaNySSJJGUdzB6UfiUT",
  "key5": "2sJpYmz3M9LRzPa23gP4MnAxcq5ZFbB4JUrW5hBwaDEtAkvEk5x5KSTKc357ar6AJvSXU5rhaekS27KQuSP74amz",
  "key6": "wqNsV7ZyE7E9BX4oq9Z18kJ9Xujsekb89diJog3r8xHXbZ9XGgoFthFzcfatPQXGi9PiF52KxUEZQku3SHuPC6V",
  "key7": "3gxHp2h5vHRyurjzAD2j7NtasYch4rRDKhUNfGFv45ramy2BGZPxTeftB88kuHeSEhkxpbeTVXWageX5SPBUeNKt",
  "key8": "3Br2WCEBM4x5ACPmPf4heGdZpCS7MCqJDsGvK9ftMxUGa38sahwi8ncDGU6xoP1YxCrxwTuNo6rR3b6DcC9CMrz3",
  "key9": "4xb7LpNhsGqqojSogQX9GmZXh66VGpJhZtZGWPUfAzypA2npzm5xkjQK7hmBx1K76X51bKvUdAurjGBbp7UsfVYQ",
  "key10": "2ED2z4NU9W9gYJAGQx7BaPRMroapWzzpA9M7ma2GWjrt16w1j58VCQHy2E7GDErxw4VChvNVBQ3nvX25YzjLR5nQ",
  "key11": "4hmAUczM5Trourat2WngdReMBwiBEapyiGdKgKMHq1XisbspHDGM5jjYD8vJUyCyh2JbTyRu16esPWjAe2hfQ73y",
  "key12": "1d3yZtx47mAgv3R7oPxeRwE5p9xYwiEgVwyMKGMr6rMn7CAq6duvQvYg9MCqBFXEo1qShcn3v3ApbppwAVLu3zt",
  "key13": "2ESH4qPCXuwcbw2Ta7ZoPwYQPYDYcQnqaUdZq51yZx63PYwhhoiP33uBZ8wyZ1Ljvb3T9nMqpRUrY8TzNi71zX2k",
  "key14": "RB1Co1ztmUbvpL5Fo9rAnUV8Dmvreaafh62nKBPe8WJChaCayamB38oBDDNhKU63zzUAF5bskWe2DjM3ryGjWCf",
  "key15": "2PQvJ6GgNiqzMGE1zaDgEprPZkcNbhGiMMLHFn9ThmW73o9DJJWAGnJ1BY6NsCUWekhyx4SMZcnStWRy1F8ZCwAV",
  "key16": "4RmSBtzBZTsE9oM2X6ngBEQeBuD5CqwdA3tEoJaC2RnFT8wjUo8p25iUxPnBncQAaSih34sowuKqiPiMMwxAW3kz",
  "key17": "35R6VWYXbK6yHNFXMZN1cmbs7DtFWcCEc2C1tb39UkAZiSJ8NJbeyZraFeQdm6XRnoigcKnzp5QjVH6uuer8hGw2",
  "key18": "3ZxcrGwbdvSFHi3vLHCFUKgut9KZJ9Ewu8hKpG7zxiGGqNxbzf4H9ThrovpJkvBhqpemzyt6DQSWYCva1VAYc4gw",
  "key19": "4zQvnjXKNSefe39utGdmARC8wUEiPY8DMKDGrNRVp11GkGq3JEfMUfGTziUMD3qvB9zXcdjbHUmhJ5Np8gf1DYx4",
  "key20": "5LRM8emqduf9m3ZNoC6yd9hWM4ZQMBpSGD7j8PKriNpkZjoYsgProHJioKoocm5DhwjBkZ7ZEcJtuT9PzhsrQ9Ub",
  "key21": "2bBS2VQZKsGRGPQYkgVPqERXsW64kqWwFcm1tbwE4UxA1LjAMDx48Vd7wkJjeH3Hr7aKiYXvusVuHJgyJduJTK6Q",
  "key22": "5djhzzQe7pKBkjzJMZdt78KNWX19uyvHYqVWdU8s38YnByUPoD51CTJPqUqAQhy8AjWXkos4uxreu1RSbCHznvv4",
  "key23": "EQioW33c9RgcVCXf5L6d1oPFVEDVho219g7VjW3JQcduMuywA5ZQruE27mk3Chrk8urgwzR2PJqzBv8oD5u75Pq",
  "key24": "43M7eHMmumzafsqenoJrDrRZDbGRQWpDVWXbUK2n3JirmSNVWXDGdPWmMvUQLbEhm9Ma8Bb4iAt4jhEPSFSfRS9S",
  "key25": "54zZp1wCwq1zuaj4ih5XH8j8rF2v1GyguebcuDpHj6JMdTq8cBo5DfefkpdbW6E6fZDyzp5iZDbAReujfuaySZW7",
  "key26": "51PDdwhMVbxK2sN36KS19mGUF6om7FVevB66pKtbwsLMFbA6obT11vf6BCE8SGSRxWaoS2VTRj1fYJUC4A3Aczqe",
  "key27": "5PUdesReQxjAs8k9NAfAHjqn38Xea2zd4MDBWd3dugzbcVXs63mB5orj35qWYuG2rZczE6KDNpx2DaNAkX8wadJ2",
  "key28": "tT5gsTiVikZqpV5wRoCD13En53LckMXBVYcBMh1neK48vBgfYmPuw2aHy5vXXgtrVqJi6uhodpwck86GqN1cYBo",
  "key29": "4Q9RNWTrqJYCcqojVBD47b3geEKm89piXxmaoDLAWrzPaJmC3pAuJF86V2ZL6sooPtKFsaLtRP3ERBTEgPYWWAU7"
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
