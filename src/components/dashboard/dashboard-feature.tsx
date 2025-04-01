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
    "2L69PTEUtCA6W7fB1y2QLKjsk51tADLfKJgnX9yfwcqzvTjD1GmNwTuthZmCXXdk7w5EZyXaGMUu6ScBHdzA9a2i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tP7NpLYhoj6QMBGxu88rh8jZiAv8ocV7dMZFMvHPNV32dJnUmRqxBFe7dWxVPUJXVe1r6FAs2zFtKuSjzimkXnc",
  "key1": "4Mn3ZXBjU5TpZ6P3fMxr3MoSaRAXr2oR2f6iX2sTML16PurxDf55JnKgBBSR613cfYrrueyoiNcdkPqw9GVr6K6F",
  "key2": "2ZotHMGxyVQR8W9gcrN5EAPrdRHmrduKKqW5ntkntCxMKsCGVQpLfDVk3A9H8BVwSif9rGoLYtQMGeH1w28aythu",
  "key3": "39AUrdYkcCJH7YTHMj4FuMan2YtiidgG1Ko8UyzWyQ9cS6tnARfvuGR855LnN2aomUyry2uqdbWQTgnVwC9p3KzR",
  "key4": "51HAUoMVNAtrUANVgsQiZJ1KX79rTyDNqyVgQ6caxBJD1ci5yiFgQsAGuBnrjxwVUmmdpN1oSktk8k1PisiYQpv4",
  "key5": "3mRYgPucBCCs7TyPNZvj5e7Je9A12ph3rvxTucA9FogCHMsvxytnW2wcBqNSqb4xj61LVib9u9DWagW9MrLaRBsS",
  "key6": "3nG2C7vdjmdyoWb6icDAuYSkfEB4wT3DVs9YqbcE5iRPuxGMuxC8FGnz992srBgqRGZisZ1yuCGe1SXkbPTrwAuw",
  "key7": "4UbPxbUjnTfadEBtfudq5BTC4uX1VK2uu3C4dmFX5VWa6S7oQDZJj4XLe5VFcazWtUqHaUpXCZeYsm6N9FTWaPpx",
  "key8": "4WHVV9WrAPVZE6en4eXvu2yggyX1x3ktcfKy68LPSzCQjX65UAznSt68PxSQGsUrGfb3g3cyjFCFiLu1zGBsxFcB",
  "key9": "4EzDNN6KrBSefatU5vJnuhL23ZfLDbA9dUU8gVqiS4FZESwXk6CWZAaZQF47NwDTsCFa9MbFsu7aUmDbtcLmCx7E",
  "key10": "4WgEkyq5DhNywX4pL2Kygq6Kd9vyYHqyDagV6Lc4MMUNrvFYawb14fp4v4pG8WqmuyZQ2Ldp7KDSQWdre7HHB9B4",
  "key11": "3hYaCjJK1cR8tFrMYpHXTFwWbWFjWFvF9Wx1vMmb2e7SHgwKnGEtRq7vxTmqdeUtYfm1gQfCMH4cgNC95W6ijw45",
  "key12": "2cq13G1Q5ZoeA8JwU4mtej8cDcsnFviQ51xHUJ1neEb67tgDXn12v16h9hDhxD8iJUkpLHftooGnE1Xtf2EHs7ZW",
  "key13": "1DyrTymDE9GpB6Y2n279M8vZ2A9DRFuhFhdiXKXEeP3NNYaCkLjpbBGe7fZnxDSGuXfPHGEXmPxunC7VDarJDZF",
  "key14": "Az7QBcVwKuPchoqjNEQ3BSnU6X7XP3rU5xnPa5LczmKq9TGmGyxTmJVnwHdrn7rEhktzNeJUHVCxpqDcfogf8Wp",
  "key15": "2yDBdXkPyDEQZm8B5jfeUqfr1i24Mdv8oauXKC6a6HkFk3Pr6ZEqsgErKKjnu6ycPwVM4imz3tmMrT2LCUvVw6uR",
  "key16": "4QZacECerTnj8x4hcgP9dvXjk1HpzdNLhWisnCSkQ82KwR2wg32Ms6TFCKFpcuvhvtyz9vcTYhYh2ZoQmadaFMcx",
  "key17": "u19K4MnuMzEoG4dDadwe8qNJceDZZeQJqVup7bqA1mEbSp94zbo698wtz483J63fECutUo3QJjNqoEnjLaU3KxG",
  "key18": "4wTCA4TMVnLxXeDJ7MZEVh4ouUua89kUZ4fohsAHWW2WyD7e9vWWd5zQhyFA9sRiEiAuCmMpuBX66DriNAGetqGP",
  "key19": "A2R5twLdVgXTug24DQHJT8HTT4JPUB57b5cMnkf1hMt8bNcxZLtjfYKvsibi7AYxihSknmyoCifug1H1wLZ5BJL",
  "key20": "2uePpAFnHrdAZ7ok47Xu3cJjCigv4Qxac39zZAaMRWQC5RS9D2NuJiaNa6SSWpQc7BwRXv2SCxP1juQgjZWk96Rc",
  "key21": "2wd3W6i9RY4adHcGLi5AJh7wH7g3iwV7HZoDz8CgHTZei2cCWqPLouThUxU7fQGpFjUv2FqZtpv5JgHyE2ft9CRa",
  "key22": "UDwSajMZVDpGijLCYQokhotGsDKZcygQVbb9Ud7NGLnTesfT4y5Mvti5WwXtmfs8So24vcbgPAGZmottcYFm67h",
  "key23": "3BPF9i9DMgRPcgYbsDsWj9pDfEeJnbRg5qiiWi92AoaSKjd6FkUqTfQ19Ywjf8jNBZyZmRPNrGZ9Bz3LGXvYJ8Y2",
  "key24": "5XnDYe6xu9ndeaCZpRRBjtnjrFhQVK5Z2YWckBsnwS3JNHoVXQRwPd1ANxDTwjdqa1jA5Wwmrb8yyrHv7XRSrdnm",
  "key25": "2ZDzTJkwAFKeQJYtGiSGY1CnHDu9oeJYaM8ck63CnsiCi9VJARGiE92RPfSCH3PV2eLKSXmGG4qu62HeaJzgMJup",
  "key26": "4mZxSietLuktkwpWorVs7VKiNSSJ4598qW1cDcE8poiKGrA5QcZ6CvsDAPffW2Cg8uYw5uxaaAyUcE1w7hx1F1qq",
  "key27": "5ynFSnVnhB5kTiksQnhTdHZHFSUuFnCYqoUhYS8KiHKbpMVfRiCQ6CdsDvx3isnbMmgZZ31T1AHJuLyhFhBYQBgm",
  "key28": "47839JJjDzQres1dtvhF5K7sNYejiu4pnXVCcVEkEYqLFk3xZ72fH8sroMe1apUgqE35R33TDvfLK18fGuf4ovcD",
  "key29": "4yELhnX9e7myRKaDpX8KGvZV3ABupMtwMQDjpHosj63bTEFAz6mUgouk6WThqoRJk79AjGw81bQHmdPEWUgpj4LX",
  "key30": "4iHViLco414gDiGLSDbHAwSTMtwa6bj5SoPHWf24nNd9zxmf2axkdW5Ua7mA9tsdxjCLQxaPfWi3u4fmrJmgisVB",
  "key31": "4Y9E5jgfnvGnLEtsL72maJ9QqD145h2VW7ixJQye2DYUtkACTBKzX1Y4dPvGYCyK5HvCJdcZhy8fUozVL86f7RB2",
  "key32": "39gM2Fnj6RP3JEG1G3mVW7uBQXKdpEbeAFYoyqR4wKMCyipTQJcFLwEZJDESdBdyRHihWAT4nxTDwVLNU2HKDk4f",
  "key33": "2PydjxbRyUXGGtezAYWArAXWsm3xVkgnC7AemzNKXovRQYL2k7dj3fD7kWPfLR8CkfTPNbnYJii4aryL6q3oUcAc",
  "key34": "5s6CHW9U1qz2xWfGharNsvWneHtukfLePbyqxkyXJCpXuR7WVP57KVfhVqj38X3gSq25S3NYS7XKgyhnAwdxRmPC",
  "key35": "RVYSeEVEdBwU485zdQFa33C4YAKkwMxRWTJgbyjgRhHztQJT1tMcBbnTyNmDFL4poxyr5EyJQAKiAaGsCZ7KHnn",
  "key36": "kxGSJmYseVpndqBPtAc1zwt1123pY8gkpRvm6LWzMThZr2Uas4kXaAizAsJgKYARsNsNCqwiFwxn4gRG5sJKQXk",
  "key37": "4e8bE7847u8wJKXtsDjLNf9MbadNW8jXxzP3gf2dTtwiWamUyJ7VsVdf1ZpAAQP6qw8i8QgGZirGEGwjDpURkr9b",
  "key38": "2B1tqh7H1rZZF2HmJhVRudWBZTydrHk3oBLJAJbvjNcRrCDyQiiog6mhT3v7XcpTN8Wf1BEGExhHa8FEikqgGnGV",
  "key39": "3XLyfsLUanFgVqt7TAZqsEzUyovkH38jmYUdkYWDauEBgHAWmqNmzEhsapDmmF3f4rQtagTeeKXL7AdzbknHeQtH",
  "key40": "3e4qe2poK4ge64fFRJcqTo4bdjfLZSAYpykMqdNkn8WQ56FLCXqUbBTJ3s9tvjciyiRHBSbJ8ELNKKLuBzhfvwH2",
  "key41": "4tw2rAKLroDxVamHKbRRjTrcXSDoiNYLY4joLPZadUqFPju1X8ysjAuczgPnR5CgJp1p5eC1rTkQpwef5SA9Ke2p"
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
