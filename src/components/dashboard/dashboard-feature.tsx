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
    "9K2M8gEoP3BV9QFGQsdnvXp9CZodDquBrDtjtCpTicKGJPViu152N7b1jdk4a5hunPp1L8KMYVSSbDPkirWeymz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KRaSW2fTMfgXM7U4HDRAsXCbznqs2eCnQ6Vua2aRG3QSRibQaACJHhUDTtPW9RvsT4yRQu2SXwPH8PjnyWaPJ2x",
  "key1": "66AHnY4KX43LNfKkx7Q5LYpbqcCgsJo2CveF1qooLNNss4iiNSz9kws4i8fZHyCvtfhD9udobSQmso538DCURVr",
  "key2": "2SxfheD7oBNaCj1YjSzb2AgMTjVKPoxpdAhHWDuxQwAspjriEBPLLdgog8uoBk4NEqynBHoqrGHxbxotcXanwKYV",
  "key3": "kjj9SjRYz1GCg1yQitgtU8otAkvvFAe3p8GeX5eruzqgnrTekJ7pLjR8EumFwfGFE9qZKrGfhnAZd9EvhJwaH5n",
  "key4": "5uHujsBk8QqqC436r6Z2WJ6uvavZXtDqYUhzJNVGbkq4QSHqqdRSsSZ9jeqTH3s9BVCb2DQwWU7dbaR7ft1VHTh9",
  "key5": "weM1ZBz26WJjo6NsDRMm8vw2oUwtJxkbhsrGqQkKrPxCXSPD56V8gHNUn5cxtTbdtAf65uXvGuuZ5HY3dTiyY8Y",
  "key6": "3V2N6byWaug4aAbHyKYMrUSj2QUqCMcwPHfPbWwpwo15BHTFnB5TmJXFfgSZiSFc2JJWnHxdDtQKyYj6NmQeWRuC",
  "key7": "je5QqMmheUwZf5MrS129JTuRX9MekkdmFHH6God5JAi4mywRcmuxYbJpkYzbtSFdHQFofkyQmD6YjroV6EPs3WT",
  "key8": "oMW7KeDP1zxM3fzS4qL34kBaoxCncjFQkWD6KibzHjYQ6Fwmd5Qm3gfhfYvejBKGQRgCELQqzCDGdtTVGmjpiVF",
  "key9": "642RtCn3BpWLtrWDkeeH1H3Sa4cHNPEHVgT5FYCpowEqU5PCJpBs1dXYbmuofw3SQoFgdmtBpe1XJUuZ6CmhGcXt",
  "key10": "4ERAMj5nRQSUzcGTRYkmzyrM4yVQeDBtF6wCrGeUH857eBBsYQQmYMWJLQDvRdhFTftZfVDp3pwNoRWSycUCTs7X",
  "key11": "3YUhMvBLBm1aMNh1p1KZGfnNrCYYvidSZqABt6FDxn8WR4G7ftGYb1vPmTxZMvX34CSTnaVEdHhSJKuXjqeScUCq",
  "key12": "33Ma4zjdJVayXNZYonoxNr3zqihnAZC286Zx8u8rzPoMcx9Wkcb1JYhPrtishD3JxY47ygGL51zGZUVwfLkDZTer",
  "key13": "CsN7fjAABphNRMJ6PnUcXrfQLnPyRyd6iqphknKYPGpnCvvjCwRYWEVgwiwKWzNTRLPvB38GG29wywFs4UjumZY",
  "key14": "5AVgcpEAa76nyyWJkvvVbEk9pR8NDdBAu2GR87ney6vuM2nLVV7auF9pJwqtpLBcGDu5RJh7rjpFHYoKaKZh2FC3",
  "key15": "3cG9CUdhPkSLMq2Yrx7VbDoCkCff2sGXFU6mFKj3DryTAaVKbHLdFA6hHxAafh7Ysmgj6ndNNSrUMhfTJ693yW2U",
  "key16": "3NXCkqDgtnGdByR3VYuTrF4difh4GEwgBxzxUM7fuz9asxPH7qzmf5cmDWK6cYzG7tWJXmCR8qXqU8p2GSJH997p",
  "key17": "EuMPUMT9tVBJKmyo8Xg51bK4891rGJbZspEmdCGJZi2QRFriQxGKPzVp8XNSAnw5ruZvaXQu4sfy81622jKvN4X",
  "key18": "5hG2MnSP2yw2JZCvGjJbQGyZnus9oSfurU5esK8AgqvAxpS32PYD3QG7YqYZayWjoC1KKMV1eP5To2Ktswk6TyLQ",
  "key19": "3Lz8svCnuFkKCGjqTC9awCMg5bnfNzLoe1WbzLsRwRtYBTkxE9zhMcKvFNBYmDC1nyPd52kaqfTyh7dfiktwX8MB",
  "key20": "4EnJcQceVWJKbzh8h6Jf2pziCumr9THTVfK5SPH4fTtySDVjMwaoPANZoDCjDmeth14we4pZuDoWy2Fg5Sh328Mz",
  "key21": "qTuEk1L3jEcxg8y511qTXndt4Ymf2NewbF4veJgg1RxQ4uo3xmQzRCQdPQ5Fi3MJYgPMTi3tn1MWzqQWvyLLz2R",
  "key22": "5PbnTJsjMDa3z6TLFer5fwqXt5Px6VF4RXTFTXCy9nGM55NBDozw2PnEpCZTG1ah1W2o312jK2YuaAfJC9Xv9rek",
  "key23": "2hvC7PVFkZsRLBkPtqqCJaBxD29D58uzcwTppRonjGm7mKGW6VgmwBvYCoAvCMW3b6t8h4gJ1V4sPCh8eLgLZsfA",
  "key24": "5PbhoEFvkybAonNUazNCvjcPVxyytymnbYqrQUEYNpjKsSnyY51sfejCWouw9g5rUKWcj1SSoqVrbttm4SjmURxB",
  "key25": "3xSf6vhqt84tZmVxBff7SQsyfAAacBdxBCEcczyPEXxWUhf2bLTdfPDjo2RZLtF1WpZwKd6F9nmNczcVTvw2cgzA",
  "key26": "6pJTtkmCpoPVjGYg6fAYqWSpfSgucodw1wHHMQNrfE5q3K1yBVG73yDJRxcQSgm7CeHNvqUo7QdnU5VK7hYtmbe",
  "key27": "5gQVye58XxcaS63ezrzLYgNqXkgsxQ7paEiY2n7vfBSMxamgUu9pjx4wq78wuATjZQSBT1T7mSpgTocxRZtVvToU",
  "key28": "3931evcfB7ZrNKym6XyRfALLKT1wnL5wE24w4gCa8E4a57xzAu5GRnD1EjWP8xjkRiQ7ucBTwLa7WC9u7tRaByZo",
  "key29": "UQabHrM93ANrhp5RdVaK5VRYjZUdVZGfBrzvE1fFK8X42tpLSonAngyNQEXGU3XRpdJo7sz2qVdXd9eBZWQScs5",
  "key30": "4vhr7Aaujw7i9yQTYhXBUisU7ei7LaGCWsDQNVFUDtDRTSiZgfJqPdFanvmD6AugpCU6XoxnCfNxBJSar7cDjB2k",
  "key31": "35zhjF3t9fFJAXCBZmGKaVFLVUbRVhzxKkZM77PdyiSuy8uvTgbbogYE4jaxVTDWk1CPok9KGy2E9vX9Kxznr2sd",
  "key32": "1k2XsiNyuCqY4nV9DcdaExiW4zzodw5MeN6LPdGRHvajN6geso8dkkB8dx6Mt1NHSUmhheTt3qPN2H1x7vPXhLp",
  "key33": "5aXo45424vzHqpMF59mbJe49hNFwoNojymqoryjtuWxHddGG3Lrj1mKy2endcnY4awXGGsaiAAtuerrF3pjvzTzY",
  "key34": "zjr8tw69hq2d4ujbRYGFpkuLPVS2DzbpHrm5QivKfxctPoxGW8TT7uWMvTFaWacScNJ4zCFbL2A2wuFtcBSRGFm",
  "key35": "2phy9CgZ84MwtJJNYf2ZJMa9RWDkQuMJAQHKdxb8XqF1kDMkfbJxUXUtDVqM4JnMDp1rYKiGYQhYimZu2nTCywM6",
  "key36": "4BBkpPQScLBxJS7mv6XCDVF5SXcKJER5K7d9yxujisXxHRqzb2CZPwUNDseMEnpQErUpKF5yYVPC7E2sscbLhDt3",
  "key37": "2sjJCkaVEvDA8n6jZb5MzcV88EC1WeEVcqSZFrfEV6696YzuLBZCMF64Nk635jhAQXbsn53YscnrRBAeZVgLEoZR",
  "key38": "3dmJQhBRxU2yvqwq9jvE23guzppht6CoADcqi3E1fa16dZfivksiwpz68nERnPp3jVBAYTFAriXZUfegSnrUnJ4d",
  "key39": "5K1o7iC5CTeCAPtzwZby6doMvMa2x7RuNWW2rRVt4VehKCHq37REHwgkmVWh3AXQqY1An2AGSJW1KBFFYf3fD7JC",
  "key40": "2EW8BdQ9mLCgA58LXzMVwnTEzc2emzGc7yVNSfaJvr7ojxM15gBKfw9WKCJ69Nx6HAYb61brq69GvzEDvCZGfWBk",
  "key41": "4SzFK31viFV6HtdFoo4intLUNM8bXATAzaULjXJjxRdSqH99AErCALUTrTybDwUKFLeyZwdLNB2mYWzEauXevkYY"
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
