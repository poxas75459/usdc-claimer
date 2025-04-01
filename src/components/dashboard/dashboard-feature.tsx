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
    "36n6kTHPpCh8PGQApH1zunSCyqJXERfaU6xBJYusiKCKUBWBqYr3Xe3qZvVhcFAsu8dNhU8evRHehXaLKkNQ3VXg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G1Gr8KoeNmhPfJuWPtwu5JsfxbQJAUQmsFHhwzuUsH1WTDxBp1dxhVoZyuwXErDkY45LEDCC8zawcuvP5h9S5Fs",
  "key1": "4X5DxkAT3xaF5LX1mbynTH4vin5QY6SgvonZDqG7haaYz44h62pimMYo6VgCQKZxQEMDBsQPmR6eYYP5BmgKppaX",
  "key2": "z2aga2NtqbfannbL4sxVFzZ8rSwymKjHpw99wN3wCZaZbgFjCGsT2bYMgqK76QJ7tZLvkQEcA4Xvt1soJYTS7Pa",
  "key3": "4XNGk7KWhrbqNFYf3HUkSMkNWjc4wisJ4hVJ2L4xk8jCe43fTvGALPErCLJff1TjCh8Hyi8QYdr13xiZkQ9WmpvW",
  "key4": "2ZqtaYEDdUPn56u368YMXTiu1syHaETmbEUo4zaXt7x4SxUWhytyZFKW9y4DuX5NoScdmf4cb4K2JDupcnvFrNvP",
  "key5": "5kYSX4WMMx2vPtGmSe8Cochhdqhf3G1Btpm97tcvgQQRAaKLVJgp6uSDyK3H4EZfgNCsmjJ5ZE6hfjAAZWnyJS9A",
  "key6": "5cd1kvHcX7m1259CLybkVmnV7X5CegDyHjBe2rKUgi2K9qy3XsWLBqrJ8h3bh2i3n2C9SCKr7Ta74o3zwSqs3dFw",
  "key7": "3eakpgZPWZQ3DNoXHvLM1LPSSJ8AG9eGBcLvQCN9ApmZgPkjVynLqax8MoXnb4PwdY29m5oexXdsH1sMeiZsHGbQ",
  "key8": "48818op96AJxzm2aq6nyksMNimJpZPEDdXTLHDV6z9mDoKXmf1a4EeHHZXWdYwfGkaLavgnADvHeGirhKEhBRLRL",
  "key9": "3LFmuzY8jGMr3FLC6YWQCnJF4wcCFTtG9boGJihG1oeGYhynvGvPHMvdLWgJxZ8LDwAbPXbsA4V9R2SRotbKgSia",
  "key10": "ZVHviomyM4ZAog1Q8685ioNsh46usowGuAZ8xr289zG6dXxctzDZqpTJ4qdL8gHccbq4EfhVb4WscZkKyzw75oy",
  "key11": "EGobhKG8j35csWhjSQczURa44X8rLRg7De4aefSgW6a5G9ZCQ3sbCBvzyQVKRykvxa5LogD8K8WrC1bD7dKt7DU",
  "key12": "3Bm1qasLWszzGswkmbmrTkEzhrEmWyJvEyXvXTE7pgGKUhW5YBRpDAmPixwGybe7KR7tDZtNj2DPeEcYLecHcRGD",
  "key13": "5bJyoT2xoRnZturj9fKj1WiaYQuzyoZavMF6pqYgY1b4zMUghTiudbazGFDHs8xptBg11H3oBF6Dx9up1G4PsasS",
  "key14": "3bLh3527s9DxpwgiPsWxfKRv1mqZCrVioDYCcXAaWQePAD6T1XSQVsRFmMDD4ueas9F9sR7jTwmxa6YnFUN1md69",
  "key15": "4uZA2E6BNkpLYvcyX25X8qE8HMwmmQiDfCdRQ1v66rR4XaqZK65t2zAVb2ajtxvjtwfnFo2SXfh1CDAoueThbGv2",
  "key16": "3yH4xb6N9BijUhVVfd4pF72P1tt8Sf9NBkkkgXKPkdpafXDUtg88ivBdJvJRrwthJwECsL2ntaFLfysVutb6R1Gx",
  "key17": "4Xp5TgFULaHZ87agi5C2HjjnAhYoXeyFtAeTgFboAmJeWr17JGvNT8J4HqV2CV6uJTFnsFm8eCyThiDPRnwt6F1T",
  "key18": "3gQpfsoNSrcT1qH7CKH5YRZPYEYQAaJvN75KsnZ2VvJ9CB4GPq39BMpV8xy1u8ZuqH2G6aNpR5gkKJtK45CdYba6",
  "key19": "38iNLPUbGDWLsjH6eZWeY2mhrAHMQG2oxEnTnpK9kvQAYSYUhR9fDuyqX8wbMxaxm5JiAwbeu4euxqpoy9Y5nZyG",
  "key20": "3gqCyZNEM3iopN4C7184WxAM3hdamdUh1qdgZApTmLfHwQs3mFptRzoLtPsd9kAR6F18YRGvUWP7CuF7eBHt12dY",
  "key21": "2JAUFbxSdCewyRSj2Pdbzf4J9vD7ZoVqGGJsGKdNf9UKZb5NNWQ6e1W2bXT7UhpmSNvi5dRKaxQeX9wXYqXfxafk",
  "key22": "5iEd37Yi8XzRaVpZUvYKjRvebTim2BSD8eNsXbYGwFGRgbtaL2BupG6mbuDgxzn9xp3c1wtq2423pPW4bNJVmMSD",
  "key23": "SyqS15MV79CBAfH54Yws7J22zD3LVte4fJ63dkFEzdqVw7q32my2sxSnGCZpHNuzLp4UCCpG5A8pEwsmB5VijB2",
  "key24": "pTdvuMyFgUxbbd29hYXZZ3frDmdfRw1VteTHpu2b9DRmZzBt4H4kC6XatvsmoSG2xfb5dWFzTESVNdRysFxNgyw",
  "key25": "M2gAQiffJ99rpK6JJG91YyM5DDJixAPNLU6mm1upmAvDJFkchhyPX4cfsuUGHKWZAUozBi6H6t2La7wFoiCHav7",
  "key26": "4Qghyq8SfbzBDrWdQ5oe5PeDdVLnJXRuqnFLi9ZLgfrvLwpr71wNCTn1bCzJiVhNuGBG3uHN1VLTCHFYsLLeXPMb",
  "key27": "2cVFmB2p6U959DLfAoHXCLD75K7ErLnSUJqfUqgJwG59e7KERukM7xMGjz34Mg6XbXUJKo6mS748KuRCUKen412e",
  "key28": "5nEhR6vF8p4y612UN7DhfiiByWuj83zMUCvYqhnacpWBEFQsBfsNaW37MR9JuUxSgMifqmd6CzJaTttWkUd1gRSi",
  "key29": "3QRrCgu9ii94m7drn2Kwq1sExRCiazDNmVhF1qDxdk7xeMc4TSRBX6NogbRJNar1eDbRVGiZ7g9ABxRg1fanHkyb",
  "key30": "5ouTsxD5SiYepi1w9XE26rWPkbnPC2bbJF9g22LqV1n2ADXGWBZLo7iuDLk8BZtCZ7nvD4RUeCCpgaeQuA8ikBjm",
  "key31": "5UeYKDJAGAxAaHNzHdfaoouV5LRb2xyJEGtazJQjnXGbregGWaHAVU72XzrT16hwyQBDgCWU5cdA3cY7M3Cwn1Dm",
  "key32": "3egXRUu8FwAodKBrKHdF1Lpq1Vyaup2winfnUbQDjFY6pAumskxaryZDqBmXgQZFSNCRbjcXBbJuALWW5X4RoHC8",
  "key33": "5as1QLbWLWWrduTy9nSzb2y7qvNgFhvPqvaZ4hk5AcsEPfW4foNNFC5ekVEdXHrhvrsUsv4T679gv3M4eidXoivn",
  "key34": "45UfjWtEEsX5HPxRCFinfiYnnDPFjNFC3bAK73Y1Lc6q5wY4b66LwN7VS2JtCSxJnUaQN4jFPrs9A1cmwSLDr7ru",
  "key35": "3WQEqHTJ4GvMTZBzZ8bsPWWrBXmVTZedPcektUpeHkmcqJnD9mxsmNLMDBTv5Ka6bpQkNe81CQvsmEu1qRHKSsRm",
  "key36": "N2KnmY9SKZRsrBhXHFr1cznCBS9YZCeYqry6eKGN7BVpWDqRgQS1CrSnPAtGZB8NUkF4brbLfrefi7UXuYUi4Ji",
  "key37": "5gveGu4h6zHBw65WRkJ4pPZ4gxbiCSPtfnumZmqRYxZfpGzaEeFAm3i8J4JLePisH3eKBqjPYUdQUNdGmmC9T4vh",
  "key38": "3nmJUL1n27Qw9K6N8W1HzfsvNwbDg9W9A91gJ15acK4hFhyripJUAbGaVfREJ4N5fqMKBsgGpqZhezh8XGp7Uymg",
  "key39": "2Mk9XY9Fcc9QaLs78ZorTAGrpx8UgtWBmQztpTuH2Jf6YxRqJ8KAqN8ZAxLHFSvLuPvPgBkdiKEsicx4kvP9qUU9"
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
