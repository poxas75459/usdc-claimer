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
    "3LvvKbTyBunNE1tCENoq9JCftHwBtCrxWPz2Nwm6NAbDxjR9gdCKHgu36GPeZkXtQrM3TB3tTSBYZicp397aYPCm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pd5kvfeXmAKgM5ArLLdHCCifThD6Y1YgNemWhUKc4puMEWvXeoBpGjpiUNJQL2SeSvcvHQWWpxqL2T8wxXDDLju",
  "key1": "K7jHiVxybR4SdT54sepmqfjYaBTYvNGdsjuYSXZ8bv7uzo8qgFvmhpEHF5CVc92ZimD3mqYH32x8Xh6V51nuukS",
  "key2": "2n7zZ6faonkhgkxF8VBoYswr8yAWJLtn4U8yxMxdeUkWWSo3GDzmXAVbTxkpLSU5HSsnMdYycdbLNUe7eShtvqKL",
  "key3": "3RAACk8BG83szGC5yiUDhK1f3Agzk8DvCuaksYJJdRxaFXCHv5zsDjTeJwc827hBAxXYoYrWtXBBrMNfcyPU9pRm",
  "key4": "i1PnLuu6Mk1bZcJAS1kDdYr55LJst1SUa5sbh8ASv9KrYqt12BdHFAjftmLu2Emew9GGLQMfBETY1g6vYwPKw1Y",
  "key5": "4D7YXtg7RvLvHd23CpP3dMBWVQ7qrbX3M9Y1TUDZsHYNcQFkf6y57dZMgPo3om3NzT8yeL454rn4u4ihKHyE8e7T",
  "key6": "5brjqrwMziiRS3aDd4EjPwpnjjCe8J9epUX7xmMgM2kr3UXMCLmjRKSCwXqL2zJt3X1p6ZZVqKSPtribpBwMypm1",
  "key7": "36tMqdiQAc2C2dQKvMGa3PPM3xvy6nkgVd7g23QcWKpNCpWdyM1Kz9MmqyPNyG6vbu9R2fsYHAdBme9EULVf7Rg1",
  "key8": "2LcDvJrvyWHSTG12LYuUqNtWywyGEm2dxh22ou9MNdpjD6DBVanWDbBHyAvEj7qQD9GqeaQacHZdcaYew8z2PbGY",
  "key9": "Y2Wb8LeCstKXW4v4hXYHyLwC6RYYEEfb7kU6spSdtRKhLUfqorJyjD4Gx14A14VgN3xBLWy3nVSjNxGcJT8642U",
  "key10": "3nc89vjua9zLQoRUYdpNqJJPkx8cfHcXA7mW1RZHJsFNPMwrZ9m7Njt7gBPeDLTzqb3LThjjtrftqC7rmCNBd8QA",
  "key11": "49bCw51zGxHRxXKUEejdvjyv7SzCQkRY64idsjibG5PkKLTWViWA2ksAqFF4ca1vEvT5SX4GWdS5TpMH3YhgaD6P",
  "key12": "5MWaXHRY4e43QXhkSjwA2MzxvYgpqEkLHjNTQ2NQJBwpDtoq86t4s7x7AUVyFxfziyu3nEWJen8zfX8dJ2RJJ7N5",
  "key13": "2RFnf2aWNkPEoiJdgwENxE6jhou7y6aJuyeMKPetbGMpyN4p48wSi99KUgsVoWx44ZGnX6764yg3hX6pAsDRg553",
  "key14": "4nQTxch3HGCeiY5LdHpQeYFdCPrhtEPcv9fdjKhCy8LDkC5tA5CvNtKdPqmVmWKkxh2oJJf3mEc3E7h4Tc8sPYqV",
  "key15": "4s5RZYBewD4VYDn7PjaaWpwTHpbZHKJn2P4a42dAkUxKW8hxdc89fNUFZQzBp5e7MqoEDfnWFHbwoYECvtYUyGrN",
  "key16": "Gr8zGAJ4t19eKSyiNZspdHm2yoFBWweHnHttoodNEe9noYHzh5W9hvQRB6kh3ucAykdgJtGjghdBWGFw6rKogPt",
  "key17": "3PemirdfxhrffzFh1V5a4PTwbxRieaCRq49qLKHXWy3EZzdTD2z1miACCNyEFpdRa8sJ1KaZSePyjd75Xybvi3Ua",
  "key18": "4hz1NumDZSqq7wMmbh1JvzRTprnwvcGRmKzpXfjq8qBLgJnUTyc9hYr2GeGcYCb3ijAaFoYTxC9RtAsfEbyecowS",
  "key19": "3T66aizeLLwmsHwphrWT5orVJ7pYeEQuDqHobV5zNkngEMxvepwm1UXbsitb87mRN7jxUpmcnKMoaTNjC8k3DR8j",
  "key20": "3GTY7hUToeMdbkjAnWqpCNRKUfnmhwJevrGSHiBNJDdSsCZv7UuVLQuCYh1ypx9CWZsdjR66o7GBwUdNu7WXTW7c",
  "key21": "4yG5nZ3xfUNzzFm1zBUejKyZmk5KB8Fwn2BqegcQjL7zuJEH1mDXy13NhkLY7GdfXRqdxt5pi6jA59znuxqbmdmY",
  "key22": "4To4YJQ1VudDzYhjD3BGfRTgmdeSL4rtgVy1VVYLBTZV756svoVNj9PVXVxtdLqRP3MSS2SbKbzNqmJCcbKMt8RP",
  "key23": "3f3MVQfrWYKp1gWMdymLmFK3JUAKGPiXMK8WAdjkufdqCLARMHFqmzJhXV7GRkzxupD3G4Gwocp7WnwQSvVbY6wv",
  "key24": "4QpaMwkRnYTs7qUTt4iaP3mNAh31S2gjayWg4iYiPdmhJ7Q2vuKzPPreJbnveHiSMvcTsP2EitKipwFXDovqw2QP",
  "key25": "3QUi7duwmDnotN8xgLqCdWEY4df6uDAidBvGatAF9aBH182uVQAys7qUiXryRf9LWt1aJZLWr7Zuzzyx7wXJV4s",
  "key26": "5nDTmtNzpY11Fyw2FwCmo6f5vnXRRy4BM8YmntwmvygW28Ye29i7h6HefArTPeHw7y4zSV7wbiqpuCbTxsSKn63p",
  "key27": "526bVmZu28jFEG7TUDzqX2qHMz8RJ49AZ7vNYxvZce8swx359dg8EtoSEZbDKDksjNGeWRP9SBfnESAKWQ7LKd9i",
  "key28": "5LEiH3MGz2cvSfDgi2D1xytwvjuAEb8d6bvtrdZABY7nv8FMrfg7HcNPWnGBnhNmxuv6CyJoTPNr3oNFCXcK1k3q",
  "key29": "uxGuXBtdoK9o5yRSSpDQcFZ6ZxS7CKHhPQvCgb68fBk4CqWM2inwqgyutTxXQeFHPTrYFTgt1Hzdshm1n1kWA11",
  "key30": "XAtu8wrEugbbubceXZssh1ixpxsehTSb4aLggq5cytbGAfXhrkyDNqetSbzo1fQdtTBnnsS9Y28fisYWwBQa9vp",
  "key31": "wS8ZX4t77FWu36jiLu8ZPFTMiu1iPy7Y28px3HmYB7kyEvjQXeZwsEwnL845gKRbeQFUKG1UbtEAJpP8MeePukY",
  "key32": "49WAEic5XcUJqAtV9jDZc3LBQ3PijzhrwhDMMgjVrbizZyuhU7tbFgGKviA5f848uRt2wb92bVEKoU8vHuUx8yos",
  "key33": "2wT2X1Jc6Hwwa3rLB5Q1iNS78qkMT3YrkfmrCCcxeFJxGPXDdHjdDyewL8Sb6hdrTLpqCkwGVx7ct3ByGeHWUA5H",
  "key34": "zRaSNL2UUc3VLPLJPJy5VgAGKLR9psvjbfhkYfK9dWgGsyDGeW2HJELHUU3oBM61U2MWwZpA39vBe8fBnMtVYnP",
  "key35": "3xJjeMXzKTJ6yYSyKLutu3u9HxpC9jzqWqecj5yGy59GtVL8YsvfNK1oVzsqpv1gKDpP522TxvdH56MHAhCP7k3m",
  "key36": "3YnCEBSkzpkoVUtGwcv2YHvgAjVTeD2bcGKUtiTEqvzAoWrp3NMqu9CsLtKD2qstqmRYSaNPgcDpb1BqPRSbMmas",
  "key37": "4yKSfdpJi7uDb4QVk1pu5ca7mnQVcX2nYppgTyQn4FtXSnfC5guwh7yoqpyKDjFFUzfQtCTdzujZ2qWTuK9SMgDm",
  "key38": "5WeRg6DdtzS9TBPcWheprXcJCRfuwNmwQQPQ8ySDKEkJ1BjTB13y5BWVkLWJcBrUFa61ERi7mSZbrLwVEb4tiopk",
  "key39": "4KEy6FxpfAA73okDHH9EpF4VstEZukdBgkCdYucz9mZyGDQMrREU2DhCwHrTotYK4ATFyPLWM2YLvUSbgncSeang",
  "key40": "4RbkSFWW2pZxeCtbN29VgdQ5aLSibd5stNaLsKYzT8Pb97mAh2suzLjMzWcfJboVWwV2pQmmQTej1T6S2zH1Xg9J"
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
