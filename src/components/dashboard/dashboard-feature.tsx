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
    "4WiWQwoEAmN1ksPqGBMDqjditMcCxxDGPHohUU12x1wEXyMhNfwAg4RNtU9doW3o6JTBVoudqvZuHes3eJDSw684"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TomszywNAh8usjbJFnMAB5Q9jnuMUi8LT5CtEwzGsEWCnenW6bScvHNwSgvtEZ2AoChXSFfaJM833ev47JkyM7b",
  "key1": "35EUEv8niJS6qF5QuCDsNCKSdWpJCj8TsgdZQ6up5a4ZVhVRj2siEA5iMVfzVMGv1r7Z6ufUcLhSi2Nfz5dp8Xck",
  "key2": "51RfNxMndYgtwevjJRLeyBqsdihqucWjex1RMzjb3d1mk3iRy7qPgdxEhVYiRA97AyMURuk9kwVmSSTM1eVzzYjg",
  "key3": "3enM7RL9rkfszbDbN7E5m8yUWCyV7gQZBUowoqsHWGZfvGNBdqtYgWDhNkSHHTbUmeo9PcbfVmdc1o8PmFbQikba",
  "key4": "TjjGGJ7T6uEJJanLaV7fw6nNYez8M7y6MpgFKK6vqWJnbudWjmMV9kwqQge5wcKUFi75fndQntKEsWk2CACeJRJ",
  "key5": "4UyURpx8hArjsdqcBzh4sWYV2gW6t51mA9uuV8GJKb4ZbLniMCLdNPWgE9hDhP12JCFpfRpco8EptC1mwJuVEhR4",
  "key6": "uNihxhJAgfJjCDhVwZBLKkFaDA2t7xHgLZvcmAbaqa1EEgYoVBE9HP8PnNbFfYGLZVSEV2cBfbQwjgofmAZaQUW",
  "key7": "b7SQAN3fb4f3NKvYLCKZoUNSuqMuaUpSbgbFxD2x3VGE7Pt67azBUrJL6iyp1G9SUems2ujR8zLD4vx3FyGQBie",
  "key8": "2BcTVZR7Xs4UeCeiw4jcMaqVi1WtAxKrag7sJLTKLe7snS8CTSwYmL3ewMwSAG5p2RcSTvdCCe4X288ajZCgYV5t",
  "key9": "4jPtRDPgEVUyeNTGtJuaGJ2X4N9xHKCh5XUvoLdf4MeMVBc4eH9xGqB5wpJVNjkiTNejes2juvEhYPYe83rbNsTE",
  "key10": "3VZkYCebgit9LasNm2heLkBv1csxmCHwgnmfYeP1P8suknj5DBeoUnUBcc5qNPrRkfts4JAiggwTm71XKmrBV3bU",
  "key11": "23vxAhP5tAxDWKBbFZfPcZqR4L4GLUo1xs28gPK2WsiKymTBwmVzQdDYvGx573ykcgBNEXeLLRgfTcPnMbvCN9Ly",
  "key12": "3FSh4C3KRRngparVvgVqcKNT5Pe4HqFyKkXFqJ1ruFJijj59R9DM65x7PZvtpryLFYRGqkbbEhsmstHKLfPXGfcm",
  "key13": "3ucyWiYwVEgdobJrfeADLfY1AHArPvVBbEtQWtwVkfH9nXyFfP1EvLcFhPfwPq2A5oP7wxiuqsMeHb3Mwjx4GGtH",
  "key14": "4eqmTgd193txxX2wkhQzDc87cv5KR61XPTWkqUwTtPkyEvqWQ6sxYYUNbF96kHSXJAQ4q6be2rGMyZw9b2VAbdUN",
  "key15": "45CouvqNYEojVKyBBkgqdRPTYq3eG2s9UThPjiP4UvoqwJKpLTTNqnvuWnJnYGY2Sfh9qQMkmay8o8puPAAWDh8y",
  "key16": "2stwY3RRwj8FGD3H9E3XNXgS4DT1sxMU2SyhdxN4uYmDDFaEBY5KFnDPjGz5gBzAstDQo348BrmrkH8MvU4Fo2wY",
  "key17": "tmKVHrWcCHn4ravGVdCqbhAgZARAxVWHT6HWs7kjj5xfzwP2KSALyaBYBKymrUmUgfTpbFniwLX6ZnETsEaiECt",
  "key18": "3Axm6aTrtzPajKss5PUbGyAq8pJP5LpbaJcBuEdx4RRisYogkGaAaDCnxRNnZxvFeHSicbKzZ6Q9L9q5i2U1ZCDy",
  "key19": "4RXmWTBroo4BETY7dGov68aQaZMMk2GfbqguhWNnPfhpUu7oeDW9fsgyetLF5bGBe2JkrcSRapqLiYpEH8XGBKGh",
  "key20": "35WJ8C7xvjLY8Lb7Vm3YpsskubphKiUWTiXNxh9x5sceUzhxi3KRzVHANBNtVup9XgkAcC7SdbBCd63xZvNjSzDd",
  "key21": "34vEMFANhRu7DQcZ6rvnw4YvivmPDfUAvJEH7VKgJ1KLCZNcYsrmYC9WhWLdHfDa23iaeFHdSUFgNSroPrckGuwt",
  "key22": "2GK7uMc7oj81Hu8nzsTQf2NjES3MZnAnjumu5FFLXuXYe71dwScW7aLS3Ujz91UcfgaCM6cT64zkpymQJ3RqstMj",
  "key23": "65gSVichgv6oHdoszE6fpon42N58SCYU1ppeEzwZ4NLxbJ2AWHFvKxoE8LEoMLsjDoj1rKR7YSWLZtv6VRGmpTn8",
  "key24": "5wV8HX9rxK69UYLRb4hbJbut8g25kdoMGwJkLFLPUUasUD3Ew4kBWwQ454Q5v77XDTdMqUkm9R7yny9T8bqQYT3h",
  "key25": "3WSLRUex5tBJVpUrfV1znKLpATE3AqJbeHcDRDjGPWuBm5xquEHvwsU6AaeUKAvEFiRy7kVqYR9hZNGDFf6Xf73f",
  "key26": "242m6thUckk1w3q48UpRTiiGRTX3ZjCJ6YTaFMyGAxxMwpiKJPuCZg43mz7T4RWxpLc4bdWrKdBWS2TZapQjKSWQ",
  "key27": "3Ng6wtAMX1k5wHpJ1eiiHKfw9ti4UbeAWLtKsTRYPBjmMs4QhPWDPCjLF3iBP4MbsAuRMW2563FK3wya1DubdMsz",
  "key28": "4yAxs2kkvUWESxZyywLQRAL1mXUCAaPK7E5ti53YjDtefkfq65rgZcQiEeTzWRhCb3tNiuE6QH631sQtxNxkzJhM",
  "key29": "4xJ9Ru8CUY8MPaqQy4x26JW6mWFBZUQfWwhHupW5qLjMDp8An7mLNuswPqmtiMFNMfmw2x7si712b32QyEd6rBBj",
  "key30": "3HyUGieQwJGeMHg4s1aiwEHV6cuEWd7jNMmrMGu15Rkpp6j3TaceS471Q4coEaq6F4BvYthqy7TGq9HDi9fBTbgW",
  "key31": "33zDLaNZPT3TwCCmGV5LDLM2BLJ5kSqccV3Yb8G5WF1y3UnL2cE1V9KagN3USTAuZ85mER1Gzu6gwy7wRUJm2DtR",
  "key32": "4YqGPfKb8LU8K2GwHaZaun3EVVkx6TnVegb6ezqmHkD8jJCAuWsYMst2Y8fmJwpU6VyB4TxBzmQiUbvrgwc1pfpr"
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
