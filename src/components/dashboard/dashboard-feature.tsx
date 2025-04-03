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
    "64fMLKZq1VSgrw414WJtqE8aZupR18TbM1Z8h4hbUGsReM7bRFUuD3RJijAdAgvXYwG9t3y13fvLWnmobEReLgwH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QW28XvEK5qkPVrQ9VJkhUGfLGgd1AKCPDbLtGhzyqbqr4c8YzZNgkGojxMuiScXEG4cXRPY2Mct57hTHcuZnTsc",
  "key1": "3abojStP1dLkQabakmNtXrcdFW9qgZWRmZwBCp7VK4gv1fV314NLvKLczwktaNjeizY2ebromkfh4QGAdhcDJzcb",
  "key2": "4KbohHAXxzg12byPP3e7TiceM8E4zuZ6RakukMcrWUPd3UDkzDZqCM8ET3d7zfTBVpJqFgLG8TnQyVnqAiBcUwwa",
  "key3": "5rvkQVfx2pEqHcVGarSZZFjKZLScthvMCEQkMgWeB7bwFjpVAd3e15kKDzNvEpnmhDkkkpvDWYHt4FNjssn78Kzw",
  "key4": "2W6qj4XTDeuzdMCDZdwcngvwjxzMB5BaZzjSjkXvULqsaYZZ1birrq73ZnfZxHErkxuLMkZsRhoVZ1ZJHJwQ4x3A",
  "key5": "4s2AAfxfYKsfBtYDEd1rjsZuKfMNAYTj6GZ1mrLEkACWi1CWzRjDrx6od3bodtykpD1yKZrHy4Dcg6he1tBXev7e",
  "key6": "4n7cBBZ1C848pg69KbmhQJf5nEmNMAzbFLVsEHKPjvTp4d13C7czDige9vbwpFc2AeQrmBiFmZk157zkSmUzLmL3",
  "key7": "47d6aApVnX4gTaNYCaqbGsWVzic9i5BW5CDNsSihhXFbCigSHb6vCA2UFXxGh8dSsKji462eRvgv8ueAeY1fjStZ",
  "key8": "26WmCBBjw4FnJjPN7b3v3B5hPky52yfg8Kvfs9pDhvaeMTDDcJpu2t2SEeNchV5ea1ModNf864KqMFVZkesBnoFy",
  "key9": "5bUEkwH1cewFBB2tSnq8kMyR1wnGXrF4qy9SF5Xgom1q6oTQpytax7WFAJ7GpuwjNh9ChY4S2S3yFc2mTUyVwUdo",
  "key10": "4pi5NkJCZx66TgrPukt4H3PaaocBG3PPKo82H9SzagzTHKNH1PPcPQf8rGP8752dbD8c52CegM7DxLeNb683bsPJ",
  "key11": "TDUWH65pngojuPnZDsgYXqL5wmbvpRfaFh7Kdrrea4ek5EZ2UJcAi8VHhjaUoJHMG4amJu3Tk6JFocgLFgEg9nT",
  "key12": "2Gcz3M85ZZnMJa6nXDpf7bbcVTPfa9jraWDWZk4dzPtMsgpvQDWhofEiQS9kpRn6LAWLzj2SLpwpdWNaqe4LeVmU",
  "key13": "2GHjPNMrJb4cnVTwQc2n5Umu9gSD9Hvw23NbTxARg6VsgzNXX83KpTsCS543B6aM3JtM3KTCsFa16Xrzwi5DCqrK",
  "key14": "4J4u6EMrPYkomKoqU2NTdsvkQs1h15SWZTTAFnrmnVojYfTcD4gU7GRHdLQfoPjwGcfpjhEEnWXw2qzVTPKt3Ye8",
  "key15": "doUUDSCYp2FtfjMvwZxQYQxvYmyehGuMwi7dRgsUDEfFFx3u4F3duCWNDyhVy5txr4Bwjt3vWJom2N4oDLb9mbx",
  "key16": "5fBKZ2nLG7vpPvKvDBg1yFF8XxfmwTak8yfxVWwzF9ra55M6gfsMdsTcVi6Wu8QTDzQgR8BvAv3q7SBYGSBUdGkw",
  "key17": "54GJanHPRJARm1zg9RnjwTnHCc48HxTmzG6ov6k7ioFH3uQEcJmkaP2c5mAtQg7EAH6JfexrVH8UZyGH3hG39L6V",
  "key18": "2D4kYjd6hGHnKFkKFkcRU6oLwDjS9c92bPWXTPhGQX2UzDvajqt6RM1GKHcHF9uxPr8btmHQL9msQGnR5wK9PCKf",
  "key19": "5KEZQAG8L2tcFaDtMDGumADMC7y2tpzzqymuJF7PDmFckHPLX8TPrcq5NsrT6ytACJaMLZTWGWAoFCfDA4U5MKun",
  "key20": "3pjRNgrHjJeUZAUPywBv9HWJJN3zdH2pf1n1AMPrArCqLQGLBFp6Vr82A8sRi7E39YRHDzPxS8A6PizpTLvGAriz",
  "key21": "3Ca68yDAR3Ygn6nQ8kaTW8zRjR4rzp1Sv4jFjQYqHSs1GPBcdtZ9NRT9wJEvVPb3A5YgJ4r6pmX9NyUbnMnFc9Gc",
  "key22": "ok8yMFd43K8StXtU2dabHGZZeFc6hKaTQ7ZCGpUC5VNseX7jGpmHU4wfFAjWCpQSATH8ocFxZDZE9KPuKUTRWh2",
  "key23": "3Kd7aKao4etNzAwMVrd39wwvHYxvjMhYp54tTCmgNzdMxsvpQvTWujcpXNWFkjEezKsJtJpxEnAKUuwsFeSWkWky",
  "key24": "K32ggafs622bHno1KeBtn3UYUWCf8B5ihkgkEoKt51maiUgGdb68eChhzBNx77JSe55MedmWVGUSEQRK6MXUp1L"
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
