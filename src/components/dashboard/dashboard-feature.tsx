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
    "2V3MqndLyvR8DjfG2vVDtRC43wmomuE8ZtaRYqZRCMXzVGh8YJEhTHdmA87mWHuPzKFU1hxNguPS7JyZTdY8L8Vr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z4te8co5PEddBv5hnbL8E42tiSy8X62UUkpX2LYhdvavMWuCNAzLBSnMYH1K5Gr9mLyT7Kfn4cjiCeHBRWbf1ow",
  "key1": "oG1WyGCxGTRa7YNQd2GvWqEx9p41GdZkLyyFKow7QKBKGBa6nzqAKA4545dcVKzB6o7fJmHSLNcztLs6xyFrCXo",
  "key2": "64vLR2dDgeCCdcXZdTBTDQpnAeEJQvUwV6gXe4QQhf5MD8rNHTcc19igjwuwtMyZuFYppeuoQjM1G2S6tnKu8ytj",
  "key3": "4fYqaC2XBgeL3FFYAAt85MqZkLfPckFxEduNMeU38b9R5nA5xC85Fjtds8H33DhU3CnRzDAzmcnuiS9AaEbgmS6j",
  "key4": "5hSiMnncVdLQ99yEwrDfWWnRdtqNmLZxaMsp15Rus7VhyVPd9sHQwEinwS6bFgSPGwnyQdX1UuiLREf3UgJ62XA9",
  "key5": "3E6qF4gcN1vs7D11rfNRBFjYQnXNjBcakFFtvbcge7qWphEHkbN2SqdNMggMgqik2oM3dzfT51h3wpLWgeHCjDrc",
  "key6": "5e44jhnjm1iwNBqnE32wxyLNYtdfJAiaZugfaj43BgzceEMaX28EuYbn3tftgpoXoeLiZqobg6wyCkpaN6eSgMLk",
  "key7": "4aPTbQao8ipQY9jaxxYxtu8NE75B1d29vVKMQqBdBXsC7vn7X7PhgzEhSaUsWBow5YjFpvqi2zDRQPK7YrbNWrPn",
  "key8": "32kxyenYf3YmnppYgiG13S24bzpbgzMZtqXNswCBPhS9jybfr6bwSivivYH7XQhbyQVtmghgXmY4Rqa4hy47drUW",
  "key9": "2FTPN4iGxHot8poJ1T1wSBnhsb91qWmuytq3eM6yuw9onJiuMFm7ypq82GLKFMYvoCPHYk5m3WokRJM7ouCo6yym",
  "key10": "3NqJTXTgpxWCQwBveZC5nyfvLn2WRFhqNvPFxfC5p7b5wTucmnjfh4BXSrSTKbw6cFAGattsr7FuWLjt6i3hReQT",
  "key11": "3z5duuh3ZVGZ5FsXW3FEio5Stnik3id7iK3wmaK3KPzvJXc3Xi41C959WJTajuNistUEuM18ZjwGRgs96Nao8frT",
  "key12": "8qW1zkkJfADGsvYifUmsLrrYg1omwtLDX4X9qfsSpEFDGkVuBWARSpH7GhJxqzcMyU1oQ9rrY2zvUDwjQXsT5om",
  "key13": "CgdVjwjSMrA2LPw8VrzXbkjnk89LxBj1sT2hczbwH3jN7ewXi2SFbgHHCvdup2svGWnKx3aUvTbobgaZWGdShGz",
  "key14": "4C3rCzGFvhF28paRDwmvFdqspnrsv25zq9ne6ziP8LGnrTHsf7Q4TkHGyhRSbecXaceFSydW7V9vyFTNbFp1J9Ne",
  "key15": "5PStC2gEm2hNTNDHp5GDFTXWBLmpQxQUS2PdgyQap9JYWaeFJQeMi68P6HxoZh11oRiDuM61RLFGkx5PUEoVWwpq",
  "key16": "4HfJYzJctDHYLoTLhqnSkxRafqDrbVkttfQFiEyfYbqBR4bX7kNPEsfaWRfRNcDdqq5CcbSYzMobaczS5Dxtfh2Z",
  "key17": "3B3JXXAuK29ZRzFBzKz7HNZ2VuX4hSFXiCogtsfWtyPxZ8dr9HN3LEbMdNq8y5y742QbdDaY17SdSH4ZJCfa3x6G",
  "key18": "ZngE6U11XSnpW61XmoRnfyMfo3NsU7YpAxkcRkWWswuv5aLTRLUidnxQBZDjZLjkNLies98UQN48xJLKKmDcWML",
  "key19": "4a6zbWwBT8RNvR1Ti48h4yEYYxPbuxaMZRxwVEMGWucDqxxZqfpzMr6DeUWutsVmzxdXr5PQ6BGM7dv1EFKHRECA",
  "key20": "2mDasWAz3xWxmSZ7EdfDKUzxKs766gPeCq4pt5MMHWjqMhmFN49Mu4RtBQXHxvgJnJzQ6msTuUbxHe5Po7gR6syH",
  "key21": "2Mn9138bSbXgSua2Fmfo7qmSfB8RfFhVxK4EfhCdZbYFYTWpWaU4Vz74fqkVN9q4qxKemrMgxytQX6v4xoNNFS6z",
  "key22": "23ZztPhCvBshnEbY63Y8utZbCRoEPZZ1X2VkjxZeP36HazM1e7STd7EJuQ2WtJahEJwP368Amr9LFzh2mXKLVhht",
  "key23": "2ubf99DEAcojZughW55QtjCvTo9uC3NWHwWnQ8LBqAvBCh3VkMa6FyKZE2dYw5mbbz3X5HEExfLpa49m6zqjdAWD",
  "key24": "44kmv9W7FayMP98fAJrs8fi7PwvQ476aV8xFw7KAsNnjfnvyYU8ZCSZA2zfPxBThjTRVX9TP4ChZcDoS9AjvFMbw",
  "key25": "2J8q3qBS3KuyfRNr8JHHL3ySj5JbAUoU7c5hVW5dTSxrWwgjEhT3xFUnSQ9fY5SHR1T5JhV4SjJiFRNqmzi3yDvg",
  "key26": "3e3PZ1Avf8oASHRVurFjNAN7ijcHTHrvvodiaFpL5QJwTG8qaJTfCgZERk6K83r8JtydcVvg7kCF6JQtpSL3eVuC",
  "key27": "3gm6SXNMbwYKQNdA2boBTTmVjJnPWv5amLGDub2oGfQUQmSZEStjMCv9JJCtWWyK7CQ2tsRytq5dSHT1cF3aWb2N",
  "key28": "2sWGpmHdQGZhEFfKxb9aCAmpWTjNLAfeDvMAnYEyuaxQR6J8KNyxpkWMQucTNMX8zj2tzD9kD9R31JRT3iohzE1C",
  "key29": "4ruqRdJhwoyC7Vex17rcwk31GL6yEWDK5vU8pmyvCNe8pnemHDjzZ6EHxuH7WL6bUGVMydLw3XP6TrUQqgHJvGY2",
  "key30": "5MkhYC88hZVZgBXagkvbnwoWCmYvxRFPwKydGP9RTHJ2SrUs2Kx24ELtqnrbNiAvPzSDmjQT73RTfjQhSD4kPpfV",
  "key31": "C4zozJJ9Cygvs8gYghYmzwuRDWt6rCo94gqoJ97ybKsym1Dk8QTjJuo8DDwTFSvQE3hdD1D2rPLce4jmsftHiUM",
  "key32": "2rwVJ6CupGJDT2ftuhzj4YegzTEFT8V6DVQ3DcVx2s3d4hJHq2KbZvQfE8dC5XmGdbcRJfPfJ5PsrPgGwCGQCzs4",
  "key33": "23W3jGwciW1pXkGeHzUZxUN1uXsRMCA3YkCPaEUYMSRqMD9432QPsHcqxGYLBUTYVtQNEHrHdFrM2GVE3txASP7D",
  "key34": "4wEKFkJAiKvtW7yt3atttRfBkfDqSB9Z8aRSuF7uPTSgHU7Brv1jvuNW6JE8Vm2e4FU65LSgdJx4YG5hQgCFpofq",
  "key35": "33HqMWBywvQE6dAJdPXqQxaDk4zSC8jQbmqDHgjvDM7cwtZgHbn7UzD5w7ZVUdvJBP18QZF8seR7RAPqRcfm1Svg",
  "key36": "53hUFHTomTJ8d2kNCcrzpv3MCNZSUfuBFX9WpnubWGSqmto6ibANuKAn3ucnFpL1dVoVpS4cb9PHoSneYJwhTZv8",
  "key37": "ugZzNUjhwAeSQThYAjvFDbR2TXem8k5wAkZt7a4xsKvepfymuntF9yR4PP5DTfkfKVa6dUts9rSfZfFH6tjYCQi",
  "key38": "44HMccCBqBi1MhC4qiA2Q2LpzYJtAJUKpLpLh38zYHkfypBAk2E1TmGZzNY2YegAse47fGcMN17YsRbzEvpxA1f6",
  "key39": "3EBMHEiE6idkTMeqx3cY5SWLwpRxYvKfSxCTeWFWjgW8ybrAjYQ4BFBCbLLaQkEgFuESbEndoMLnicK9NvEee5V3"
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
