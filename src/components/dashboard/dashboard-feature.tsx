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
    "33aFXLCbvJCKrEn4CJ3StgxnMZSmyGDJcPKa8vvzTCdBfZSC2mmGZJ6MDjxC6HNVXRYaC99jwGuRTsPLAQ7Gxht9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DtFtnE8xeHuJ1ZGoQJVAn2Fbdqy48VqPWVsvB1igxr9HEw8K2h85DzFEtK3rjbBXs8mFXd34apCWvSGf5MaX9Eu",
  "key1": "3nYENBHyVVjKycPnDjmSZTE3hinJf1Zt3MzbAuBd83DXFT2MCJX9N1241hJ3CNrNNF3f8eWBcRcZyiGcZNaLwvCf",
  "key2": "4XBVob1Y7U4QyKQ1HWLoNRiQ2Gx4Nq7y2pwDusVJs42vb5BxUB5aG6NXa8HeXtS9SB2asS2hiq4C1vZKdeApmsuM",
  "key3": "5CQV8pKAX6VvRkEavYccnS4cAKCcBHYDMJcBqSudLkmtLGwt67CM2K1aRvyzVzwX8fQWcZcSNVBfhdmv8RJxXrif",
  "key4": "Np1cZcbZx9JRh47Bhb6iNn4yAjZeVLEhasAqexvFnMLsQnqxbtL8GHzsm4YS6Kk6zS9MfkqaM6JypMY7UsdGjib",
  "key5": "2YSPsqEZiGECtjMkvmEKH4ZpkkCCNbPBJ448HeFhkWqqvs2qASpDMagKzF3JxfS3hD4W6xmQSnFW12FnJ2UXWbCS",
  "key6": "2scJCX1jj6F9m3DDjQKKGM252CfuqdnMswxFGutEqQSwZeTXkQcujfUCM8DqRqUT639RNEda2MUVD6cb8XMA8h1U",
  "key7": "35Ax8EJeybGdjAPWVoMVUBsMfAF4qfH2zizTFG4vf37VXi8j9wJtxfVozFTgcfkUfu5oLbC1Nox9sQkDYspKxD7N",
  "key8": "5aRnZroNL58w1u8HXuDxGvpq9kWShnvdwSjVKeU7r5DcCKqAyC9uPTaqU2moJqB7GCJVH66nu3TW1Ka966DF6usB",
  "key9": "N4uaWJvSec3joFkhUXd7cUtyhxWkhnZfrfc98XV3NCJ5sac3Q6nztTWcU9qRegqTv697tQsratVVuyxzLMK1VQF",
  "key10": "fqcrXwVEpZMyJTTBYmauHGxjY1nLYK6JwCpoTvGH912SxA39aBH3FHeiAtvV39o2JDcKX1wJ6YHGukybygSu89h",
  "key11": "579iHNmv5a42ULbNjHNUscye89jhVvJpmNZYKAhoWJS7m868SBG6YPWSJxz3T6iaAoVr5MCqrfMKAVRArUi1RGd1",
  "key12": "3vbNYXH9epj2ug6JeCh3htb2ieaxdZhXqpeTPK1kFJsziY2hN77AmhNbYP3QthDzhwWT2tZ44hLBQuAosChYh6CN",
  "key13": "48kKqJjFFpKj3cWJpBhz3VjtDftQ4AnsgxVyqd9BbN6UCtYe9rNxqiGrNdqsugpZL78br3TGjjn85cwXK4tLVBq4",
  "key14": "PVzdycWRKF8EzFr3CPVrc6S1Y425ub72sUQNLd6J9BBX5fa1mQoxk5JhuhWjDfNbLoTkT4sKUYJQ89PrVB8F1zx",
  "key15": "4Xi1uX2bN3TcNHeUmc49hDDriPeTSi1po19N6K2TBzJ3Xx6VrwDasaWwZ5xJwRqc27HSLe5jmw8BmMhUFVYGV92P",
  "key16": "kToVPXQ3T8o7xNcGn7aAjgGeYf7C9D4njjhCup5yTZgUbA54qnVhi4As8FtPnzRWzcr8ZTRW5jg3Q14SBfkf2Ex",
  "key17": "3RYr3LCvM59Gt7dNwSueDUoFkerkZGuHZGuokthW6jYPH54FsQArPTYpwff8A1peMnVuCPrYCPdexvypbtUR1hbG",
  "key18": "eMyzwc94JFztPtRqLTgvU7tsF7abw2ep3n2Ts39ALb6BE1W29keYmaNTNt11xZ1wrBwue2LUGxir4K6rjuph4iF",
  "key19": "PHRv1Fj1mKwCUovxNTZ1BXRDKaC32od1DrwzTXgBdwV7kZ1d8Ewk9DD4n3bFbJyRFgtKpmP3uGJ6TDC2b1a7aWB",
  "key20": "2B8V7FwmMVU8de4HegBsy22QuDXSEiRxW9YDCFDFby3EoEoXLRh6dmDt3t5dV1AJQhcGcL1JkUBXiJBB74pBwoQf",
  "key21": "28zE5kw84icNzJbqMgdxwkYCrtCGmidngUmirzVe6fBoa5kE53ztjEQtMqiA4rVw8gTbo6LL4ZhnY86iHtdkdu3u",
  "key22": "2WfVQcV6cbKgFumtK6ncM6sayRg8P6LWpM1Vh5J9EXQ61GreSY2qEaeRdjVZbu2YKwL1DhSnk1P7GpSsnKg2qWFR",
  "key23": "UKkV9XKrw1FssUgY2TvatT9zQ3cXDrvUuPu7SJBszhsK5sU4bBSabdh3U7tM2RC7i49d1MxB6hRiut347uftztN",
  "key24": "3eAL3mv9ENzrkHzw9jNpc5L9oFq5uvRCM4KMvKkkpsFxocTgxSpHLKUYLXL2aXPjeuyNpxUjaWJG94T1M9owiUV9",
  "key25": "5nBCKRvv3k6aqQkRetZ1hgUhtRBZidqnzJVV66MA1iCSu9DnauAjNtJBpShdMVVfvtNGqcBcXwjTqt8vcye8R1eM",
  "key26": "657onggpEBA7UixrB6cMAf35sYWSJQfdD8fm4wVUH2KQbwLmfgkMo9YDBYmpkVbpttsbZWGBY6ToxGM9xZEu1Uqo",
  "key27": "2wjp1b4SJEQ81S5t3UwQmoVJuoBBkCTt534dGoKL3WenoL8NdZnnjFxsRGHtiATP2WoRZdBkVdnUjD5b7UVD1N7B",
  "key28": "2qy9Hswvue6WVcLkh8mQjbank4J4TRC2vRKkV6YnUgVKgTqn2F3oDeDoDRrrbw1PosCcSAAWQUyRbv62AQRd2mF9",
  "key29": "21PXjhLWpbizugVSGmosxbEVWBh2aaKiy49FkRQP8u4bC26TLt8pwSF15BzqhrmKJQRtjFGjy3kyGfgeREGdBBUu",
  "key30": "49gwvqrYb7kkXFyscRYwCHe1iWZJ5mC4N9WCiAxByVkMcVR593KtJt2KjxtyxgtdbFjVMANmsLzMuZ6j5jC3hiPQ"
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
