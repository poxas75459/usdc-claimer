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
    "5dRurNSvKorH6HjFb3qQs1F3L9zpDrPwtGSmgNBBvgpK7aGAYVDC3KAR3KWanW2CSUwChM1vQBwwj1WFvDv6KoXG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Dtss433eVfUTqn8dNp6AcCLLuBzDRHwNVVDUC7crtsCMEjCxk3t6LBLAAQELXUQCNheGmT5ZYehcKwvHc7zvLF8",
  "key1": "3a5aCVqQ4p9RcyKXNsjC7jPJRTuukZEbaaFdySFVmNfDtFZFFnTrTGrP1fLC2H7AsbmhhoY4RNfmTCMzERsZcSe7",
  "key2": "2LcxD4Tk5NeHG8iBjNgrCW5D2DhV1G4B6aCHoqqhbw3NH3KYJntp3frt9Xy8mprFV3YPiNC2QEJ1PsXX4Z2qBuQS",
  "key3": "57VnomHaDNv8SjhwjvxcHmYZMThMERnyqUqLvbjzvpAjjEJLWmFGBe7RnAXGetEqwtPSb6Nrh5LrJQUqoq5NsNp4",
  "key4": "58GrJknwBREXRP6ZLUyJUyUMtQzJcSHUg1udbYFwhqqNq1Xp6V2MeGGauBWw2DhWt3U62dAvk79MeexWDnZSMuzX",
  "key5": "5SUMAk1QEJr4j8RCuc6Axq87DfHXbxH2SvLRm4s12bLr9m2G1hk8Ra71Xkvszs4Amzehunf4oapGXKyELXtFUEoL",
  "key6": "563CcUhS4igPrQYe5Dk33N3XiJgAbECpSjMQpEoEXGZqYyUn5vZmj5uFW82BD9rFEyvsGqSa12QCmpQN7wfsLths",
  "key7": "ygC7DkwB4MJ9jfWjUDSjUoYMbhP2nbimSu53xGvQCJWEyysHgFYkYpnPd7wG7a6SGxaJ7CBy2JBu1VbZ8WkUFa5",
  "key8": "5xDCqCBnKDtVVonWmLvWvSRyq37Ry117WP4SbMRpmVpj3Cw2xLK9RG1xf5mir4WRN91Xko1mLqfmkMkR3GJsM3Em",
  "key9": "ijxLMnMjvf3QdZA2FAGw9UHNyMYYR8iTezYL3vYaPrTy64ZdWvmHTpYNwZ58iZy6YxDs9JS2a4SgW4bh8mtwM4Q",
  "key10": "2ELLDCJtVHPBrg4am7i4hdHz8k6RS6KnwhUSWLz59nTygrcDFtw1gMwu68aMvch7wGfLzfdKnYpsbYmohktKz5u8",
  "key11": "2xzfQX9BEhNhsds1RVNCq85u2D8SEwDhUku9b9cjTDRtv7QKqMMS7pASvjqAc6m1GfPKioEpT4S8h9YKb88TBJLY",
  "key12": "38YmZSt1B29mguH9jwwoaXxK8qyse4PxWU7dVhd7jczCu5BccxriLy9LJQkhXejNQKGRA9FvfsCaMmPhCGHc89RM",
  "key13": "3hV1GRhL2KM6c3MFFHnPpxQmU1Wx9vgDioBHV1XdQU4HyURqq2dLhxZoQkoagzo4MJ6iLx8xgYpDEr1LbF1wrv7B",
  "key14": "5Myd1quwcwAJEpjCemo1wCLCrBG3fVKifaBTQAAM95ZULvTEbYZiC8kTde1CNsPVq51EnqvNd35caALu9zVfqV57",
  "key15": "3pPvgvPo8rkkfCPAjM3WCKo9oPzEh9tKKo6Bwm6Q2HgmJ3SJ47mX1UsKKQXce6A964pmg9wbvJAUTAJi3qChp1BP",
  "key16": "i9L2VRnBitSraK4w23CASpBPHjeMWFczVvzn5W35yrGPbQxuMMVEGJEkphuZ7BjCjatwBs5E3eBW2593jRbjiTy",
  "key17": "39g6ithpAEkMqshqEFkE8a7YmjgAM2JhMAKd9vvUHDYEKCHcVVzKk7SrMUXyaw9547BRhsQB29vpeeTjC8iVJvZG",
  "key18": "8Up2KaxscCyiysW5n9Ju5Dfc6keFRBLRXooEC3bt3UbweUrT6qEofpdRXXEDWTnpdZytGNYvDmampPz5ZVSpTJ5",
  "key19": "WbFcnbkTHC5SS83MY9WmwS49AYFZ54NEv2V6wM4mBRqhcUB3BR8rpkAYXQ5PCXqaVqmpNkmGGkyJqav4ZmTd425",
  "key20": "4UfzNd6XFKCWB26eWLYyH8qLMgV7Zu49SQNpTyFa2yf1GJU6MSUKD7BsFFwWxPzdyGiD3c8rtNUsdC8bEgzkHdgw",
  "key21": "42K2TnAPu5LUUFP9hnyyFPTwPdaJidfZ3GfNgQLDBWWHyQAvZeFj2yykFNUCi4ru5iiLYCKnUvRRaT2wbpvQs8ro",
  "key22": "4ZRRKiWt9PRunK2Stq8ZsFNrZsy2bivbrhU1krEnfZZdLfP3pj3XCbydUPPSDF6Bjoxx4iezEaG4cqywPkjMnTw8",
  "key23": "3SDA2QjUX2QAFeutsFViB116Sr7j9eQeXCVsvwxSoEn1Y1uAgFkhmQcaxgkfCMdaQmENmxnmBNL1EWrEyhiZResj",
  "key24": "44ekdG2qSGLBa3uzGNNXCj369oorWKcdtDEKnooP8624PZb6YWoT2WZ5UbGP393PW9mQzqv6be74Ea8NbLqjYkby",
  "key25": "4M22s5MphUnYPSLtJdz5k8JuJGg4oge5Tqjvhq8ZirpgK7BGiZ7aDnDyBLoD6cRfRNTvSibtbJ18rTFgQHdfjbT6",
  "key26": "4TLy8qBLBydthkDim7mvHk2y6kk8wNWJfZUPw8Fz2qVj8RVtYb4HymDgJ9hTnbfyWWhCUty7Y6ec3bcTcyUEhq3J",
  "key27": "4j8HeeUNoicnTAi3MKFWuvigpfxuvX47DrnuGyvfa4J4mfkTJeogjZ6agbKvg9YRV9KKQvASgQefFofXSZiDny5a",
  "key28": "oxTuapYrJGTyVNAphD9o2ad2GoUAjUWXZsGk9ixPrfzHC5MzrtUap3Xws5bkv24B5FkAAB3ZfHRhaznY2CHC5iw",
  "key29": "5ceTTiLd7aGfHBbYhgypVw9jKhhJMNzkZrKv3LMrXL3wwPNtd5ZuUpt2zzcZCnqwEXXKN5Zw3o6mzpqvTUTGqEV5",
  "key30": "4HDxMecfUqpuHvp6LVquDVMY83rq2VCU61MYZ5r7oX3YN2TQtcxU2PbjKjz7YCQFCpBAVUfxLat7Qis3dn4YUSEm",
  "key31": "3S3LjAcZKak6whExGbRGFVCBu5T6FEngwfsnKyt2upKoCnTfSLGLoqpT5Nc4MX7UcnT8ZgtMPT345kAN7MLMqCpJ",
  "key32": "5DdosEkAGUnATmmrFpkpgbJebxLccVB8K1vtXDpe3cux4FeEJMVkatbATrWyHpZDgZGUT6p3GdmNzh8dgLD3LdbP",
  "key33": "38ZhrnLtnVa3YHYMrqDUW9BYyCu4fq7EefCoi8y4gnUDMx97nHzkpEQzzwygXeaLPtiScrybfPZmkoMZxVeHEiS1",
  "key34": "4Q8qTdtLaNUpWSS9983RgqbhfakPXDzU7Z8zuLhmvp2A55WU6HTndE6xULMP7V7wz9xejhAmjxk9mwjtyWbKRx3i",
  "key35": "5CXY851iqsVAUvmAuVBCWbDgkVTbvTf6BZVY8Tmw5Lj5g6msKrpqSju8ywnxc4ML4FJXsdi95yQeJcagYWEpJiom",
  "key36": "5J4wBHVktpF3NLU6q9rLVHTGAPUFvVnXuSn7vRKTkNNLDmfFXrkziuU2Kt4jVJbo6vsyJAa1bfBnFXuyEG6mCKok",
  "key37": "5rJR2TyHUUw7TnxVMMqpfZMGuro7Zxvu9EC5LwsTk4kTHvpSk8N3ff5yjvwSkmwUXbmCxHgqwa8cRwUkfUtFp7Jz",
  "key38": "21kpy6nfgS9goZystRbUwN9JMtWmnyNf7otfTwZZ7foyARG88WGLVMDnCxH9SdcLDYUqhts6Av4ApotrkgWE2Cj5",
  "key39": "5VMBqxyKbvd8nmt3BsRASvZo97iXMCL8S5HQUS4uX4A2tqvgCswbZckXgsUmYsazmY5XugAiebnvGBBkfu3C9cE2",
  "key40": "35dddf2JX12wePk9XewFP3o7R7c4WLvbKCDu1ddV5CvY2YHRk2bVJUPsFyWojYNZGwo6hcyvxQJNjVec8VB7uMwU"
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
