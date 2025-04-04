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
    "5NGibVv42i6JfaWiByui4SUQ6TrGkqDWUaGshoxp9uVmXmgeCwd9rsBb6UFWmg329jtJD3BwNEyMtxTpBFPJRNcC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q7vRB982BimDdZFVZGxNcLnD9W1sqky5BVtFBQzi2f5GRqrko4yjT85ujEnEeA4MmDaNRASb1g2Ag7Q9xCfAJN9",
  "key1": "4dL479yG5dXEBzHYY6jKpgMjQFg2mEG3rToFdVdPAfNsgXQ8aJKYBj2KnALEzRa7vgAR8njgsdFyPVsmhzBGuGQe",
  "key2": "WrhtYgcxMkdWMHjC1fjpoSAEqJCNBv5EQBW7ooJt2QbAK2DNYSKGJARJnbewB22J5mX7r1zK1MKTbbsCvqz5viR",
  "key3": "4TFSE2gv1j3mk8ScC9pFJmkQyeNzPEuNRW6weov4PMSVkB8v3uPzdJoeoR3BfsX33nFsUkhhKRXpEc2MG1RAap2b",
  "key4": "AkXxLaDtGdgq6Wq6kqePoZWd12Z8Vijo17tj4GwCWn8P3AJHRnLmVnQgET7fPywyJorRmJNnRap39BpvhJs9MBT",
  "key5": "3q5ssa9y2JYj29NzoKK4S2mi4dPMHvJkeh48g7B33KvpeNQpjfEqbXSRVTHvv7dxbn1Ar7LfMzZj9XjLFYoAr2K1",
  "key6": "aMEazyVLmms61pNW4Vn74JaeDZgFrTCMy1XMyikR5yXjKqY8yKY3ozqbVTXm9nf8YaosgzWH9FMjfJ3hzg7MBb4",
  "key7": "23AgWrqENgmN3bU1TYiJ2ppvekWmKgCjKYpnPrfVXhe5z3xUM55TjxjNqJJfJ5KBUvGeoRCeU6kL3x7Rtis9neku",
  "key8": "f8YuUmm7y272cYiXfFAhZXLE8UzAoapikHnsSVu9gMxZS1PN1xhRt5hvmEsr6kboeHjBMQvWLaT9gvfufxCYRT3",
  "key9": "3Xs13d79HkHmt2jUx4FBRD95GWhAja8viCti8AZZ6pG8tjTsQSaycbNejkyaYJGDPSsWD17N77oiGi6gLt6fvLDr",
  "key10": "4W7yCCP9jmBseud19PYEbS8J2K4u5jzCG6qbfCHWYJ68UwKzLjfktzodHd6p9wBS4LbZHYd5eaUBLHH2uCmYNMqq",
  "key11": "3rrUCYVvCHbsc8x1qewPHB2Sgi1PEt7pqi2zNffneYckPnoaNdGUdvsJyxfsFoHUTNJYT94BAvzAgevCxQkW3s7d",
  "key12": "27M4ShWFLSS1BLBNS1qg9dZbuEfmuu5n2JcAsh1xoApxZ3z2eDc1ZzWLdqwMEV4HXRg999wbfs8WqEpSD3o9FCGW",
  "key13": "4uvV4qhk3jqjMfxMnutJVD7G8aEh5eePwxgXab1oZgEA7vgUNrDA4ewSgE6Ygsf4kJeF9x4kxbSw2LgZATRN656T",
  "key14": "4hFKvbSHtPipHhoVH1rP6PuyccknKpkZkF8tC2dPvFGrTgHbQceYmdoiguuMkL3xrXBgBroVoSZfG88a8hWoQrML",
  "key15": "tYfSKWEkxBH4AUoBL5UFckY8dUpqwhPQAQANiUcUCxLdDwr3mdP8EG8piW2e2SFkGqWBHCUsCTKhu9sq1RAicPT",
  "key16": "X1vkJAPkt7YPD9YRNNfwDgZzgT36A1q3c82SZsNm5TrDrhsG5oTcDBSf6VMaC84ix8pijw5zVA2XarETDJa5nYp",
  "key17": "52BXp2LTEVnFPrLG8RHtMQrZjEYsCqQyf2b4ZtrD5ik92LCxF1PFNi1XbNdbhHemu2o4AAmjt1ptr1wHh6HRDchd",
  "key18": "4i2nLjF2EM5JkFpShYCFEgvffbcXDS35vELiieX2JLPScWPghi66krLK5p3gkrLiymsV9B5uVo1Sx7xvSnV11XJj",
  "key19": "3istZsjkifCeipdgCmBM18ogtJT627RfyqstNq86NPmEsvJVvJ3bqhgiej952zymvWZJQMVwWrp4txJcLQNbzuum",
  "key20": "31yohFdp9m44mQmc23PKEQAeCgM3qYWzVwnqCVPdr3yAs9DRQZDwytvKKakaxNJPwCPLBq1dkJh273JrsevW6aCt",
  "key21": "56WCoQaGQbXRDg3GE3fHPuNG6fphw1Z6J7sdRmejj8ozNf2GbFF8FtTKzS2poGjhXA3MSRkVmuC5FG2zLnEUGgWQ",
  "key22": "4ohchuPJPW7mMCEtmTXMavmFnYkTFoHP6sDVQECgzo5qwaCv14daD9XyNFcFcdUHKTqzBNnmyoYkAvQRUGNyHCCm",
  "key23": "3vWnUFDMGoBCFZ1hkRrrgqDS2u6ErJFc5zCRqyYPy2qiFDwGVPvbEMW6XzwzvZHwUDrgm6DbYdvWDy34aZK9L4od",
  "key24": "5o6XZQreEJ9bb8z7YeKwoxCir1wUgxPHdp697JR4axnFUuNamkEseHmhLQH5TZ3E6ZHc8fkW7Zsvt7f39ZCGhZkH",
  "key25": "3ZecxBP84af9nn1LrsktPSYzSErmU7j84VZ9EZUqgTukuHt2sVtnxGgTg7FgF1TnyLjnKE9BhVhKniLRnVNPNc26",
  "key26": "Wxiy8KsRkpuL5WCZYEj6Q8FW6vE9GDJkZLXdyrzHHHcC5jGSGQprVsQbNBvZnRPN6QrJx5YvGmHNbAhaiWgvjoB",
  "key27": "2SnDzAAPyU2BRc7abFD1jPyrenq8d6oq5AbzN8QqgWUFQ8Ty7DeeSdAg9Bct5U7LpVSKqmzSj5RP2iZxHnYFkBDH",
  "key28": "5Brk7QFhv5NtK8jxtomFbsMR9AjuDt5JxwZ4kwr56Zo6pbvQLH2Ux6cHMDcepVLPf7XdT24mq4ViB1VrE5pFwgGs",
  "key29": "2KQ4FVqB7uGz6g5p1d3YEunzonMWy4v92v1tejJCbaYaTTBJRT2aiRg6oTJdkovtf6r1dv25uqYbSyyuvNWaVuZn",
  "key30": "2Yjaa8MFnB2UGjPiWmMpcffifZtgNM1AjpXXZMugjuynyZfyRRSGw4gwkDypQ78fEwCKS7VwGAkueukuzi22DrkN",
  "key31": "3QpMkc9382RYXyrPR2wheTxL1mF6iJLak6gVCR8chcLnuKR3976K6Ax3NqLvLJXqCJfYwxcuSwuPha1LdcznTKXo"
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
