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
    "59ZtCtByQsYEgYTFgvP7zkGpsm8tpPx78GZrkNsrzX59xpJGz2vm9jJF8LBEipzaGtgzyMQudamGeLRfvjwpSKyZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s9rRNNkAwrnQDVP25XYQUqEgbDGmtfQJtRpSmPx3hJcvFmEoCtsmWgBYpP3qdQoSkNS4SgY6QNdV8h145GPb9dv",
  "key1": "3SgL8dwj9UzmEXioQ2AaaueEDD86uJmmoyjiMnXgv2aBdm7uUgrMddx7mVdFDm6pcWET8C5G7Wj4xih3XA3DtoN1",
  "key2": "5cJG5SxmX1nWpBij6qdoeo8Z3NUMvCQq23cpHFnkgqES9bRYZ3uEbsY2z1Pu2dqXXkLtFgYWUwXht2A2qhEd8YYZ",
  "key3": "4iTwnfNQiXwpHUNcmS9oyEFaLNt4dKNCbjDhUa2MnxEU4SYDm3GDu9mx7MSfg3qtaCg1nUWUjowsimLBms2oZqXy",
  "key4": "3LT6QsEuvT1CDwmF9QEBKKdSZvKA8h18LFjdps9gteLzVra2PpX3zSRE2e5papVbGrF1ExgqQCHrEi6VM4SfUnKz",
  "key5": "Ljp61NEtXaDeZGboVzRhj77YVRU98uWvPZjvFRVXfMXQ4vyXi7VRhQWE3kWaJzKtfkiRgDnrXnkR8JuWb3gsr1d",
  "key6": "5QmJ78ZEon3EQSphKZ7L8foFehWMU7YN9zs28Q5cNKBkpJ8X2KfNT8uPajXPUxy5x1uz1XtaYXSTpoePdxMVWQGL",
  "key7": "XsnrBuPCKb3vYMtgDptHhWGaVxkyuhW4sjMTgvHvJ1RV5GuJ2wADjGqHY3irC1eaaJ8Snag8kaGweGkgAofhuig",
  "key8": "4yvyTJvHr4amGoWCXxAStcKakLqRBksoiksFAUtJ8vYGX1UwNi6P14834Mr6RiLDyCzW1WANqjdYcK4fQ2e8nH2p",
  "key9": "PTEsjUYxeHhwK1kWc9CHutUnhVNpxoxRWtwKo6mG5S3VEoDvH9n2DqKvvosJTvjzjt8HZrQ9hNXr5uDKEuPuQXY",
  "key10": "65V9xgtziz3681tks49yjCZVGgtQnYNNLfafCntrqSXEvxppqoKzt4TupMASt5asPAfSJE2w3cLDqa77rxNYXALQ",
  "key11": "3tqncFKdT4FoxaLkbv4BuALN4XECB1QnykpFGytFQQPpPbd1uKt3aagfJ3yjRrgM7EGWZULbwKBzy8cLcXo46VLV",
  "key12": "4kxg8EGm823bMQbFRYR57gLjrAD4y6NQJuRENoVkYkawSzettkcnnm46FD9GP5wAWTHKrPFh3CTAADcst7jPxAuv",
  "key13": "5sV323fFZG93nQKNwQxYmJ55tSEcWvUNXRvhFesKRBwDcBPngfEdURoeZqoxDAc52Bp2ZDHSPQ57ZAzmH1ATbe1E",
  "key14": "54xvrtkUppGRu33cUvHAYhZ462iheHfK965JKLAqkkUVxSKdjAaBFnL96ASKgcvshA4Aei3jTUq9P3pC76AKokeW",
  "key15": "2rUXHisSrLLKx11RCmeAos7aVZmrUzCQuQtt6u1csSsVMft8cQdiPCraocv5cXxQCh3Hp819c6xGWiZ9xQFbwpRW",
  "key16": "5YvtfH9x7uhGq3feFSeWXoetYX1jvxm3j1ecs6kNKS2yd7PhRqbkouC2vK2Ls3wxvAGhJC9b7rMEEawRiHbKS5Fe",
  "key17": "2bhPKaSXCPr1jtJEc5EJgncbuYF7DHrb6KbjuH2qm2ystmwX4QM51ukfb7aAQuzSJHRd28WB5CzzFqHrhCWkqGwQ",
  "key18": "5XriP9faB9tCCGtHH7pR1y5rVWjfUXLHJSUjoaNoeDz4EMCusE232373QgxHbCh3edJkx2oeNmmDRVpxfudfi4Kh",
  "key19": "5aRgtCNMjMTwrybcWpt1emRWNXnwX3HF3mcdcWMRnXKqnV513cbDtVFyhm38QtMsxRvY6L4Sbjypgw8ik9giFjNo",
  "key20": "5eAaeASacW1zu8uzTZAsfcGYdxUs88sinhe1pPrXE16Jngy1uf5BE8jwe8eGCcG8T8VquMwVBeeTvpv3jcnV6B8F",
  "key21": "2xFU6y8eVV6Sak5Tut1b4pJ5qaiXvaLqwhwaTi26m1h5UrKgZAsSJkezE1qsm5FycLbqBNkxgTufjJryCRhpxs1x",
  "key22": "4AMtoShWYHZ8mN1ekFLNHChTNmH1V2mYP2pwck1QyuUn6nq4XksnqMgzFEVGHC4YNxzqMjKJhoB67Z2ZYwHcBYPq",
  "key23": "NGrUkRX56yyJjdZhuWGn6o7wust21zJ1bfw9SCCnQb1pbvjKebJgv6Yf4jGg28JBg4gaQ8NEZSqKU8WUgoqhH2g",
  "key24": "2LYoPF2Jq5ax4E72KU9Dpe5NMWATZuyenB9U5tvFKXm19a6ENoiWQh3xFbzPmsPJ9x6p4gubbPw2fPSrBMtNGTW6",
  "key25": "znczWf9DKnQZxTFviuCovTu9ryHnRcnAP5i9mPiqmjr6BxpuMgTUCo5LQQDK7U6euGnKh7dLjMVPc8MBdH1LSVj",
  "key26": "49HdJCsetVh8xVokmqcQMHTNxyhsXsK2DZoT5RFex2ac7bsZk64gz1gFQvzs5cjWaBSXMAkWWDsP2vD6dZVozRQA",
  "key27": "5oJGne6HwAX2gJAmGvTBGDRmaSR9BMekjw9Mm2cwKcVq3dH27d4qMaMfASUaRH3UY5eLyAYKvwu4o5yznviSwjKe",
  "key28": "2xWFaGVPmMcbWBoTzmUSgNBihNYyTBhhHfvJLMHKwXsX75PyzLwbdBhW9jnN4Rua4d16rAD4fYG38uobsvaERnC5",
  "key29": "2Ewmt3bkwzBwa9NKcGPNKj9KVhFYSC9ZLENmNKXN18kdPydL3YRSfDkqoB8RES9gjQUe1eU6qEbN8MHyfMtDm65z"
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
