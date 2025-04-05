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
    "5eMkBVVB4rjfJY2pWYyzJFHKcWgQM7darZ8H2sDpAGD6EvCSN74TFfh6SgixfepdKx73TQp3rtT8DiqwmTYZQn1h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xK2FXK4q2poabRXmMfvgPJDV2osPAZg3g2i9oFhTUfhZm4YKZaZxT7PuY6bCfp7RyAYFqG9mSM7djXP4LSTPSVv",
  "key1": "2YZ6icYx2YyHq4ro879NTMenZzgguGB1eCUQJWXcEEwf6GMWwzWe8pAEfrJH8SzcpwA5RP93iJrybjo4iDz8y68C",
  "key2": "2qc7kKhtUDeA4Rry46K7jE9F4aXkZat6XwEkwjBe7dfXejWcAPa5kUXe3TfA1KFwKLSnYi2Xpb3GPyhhpcuHCLqd",
  "key3": "w7DdRb47kKYSBK3M51UD7kAB3BiS26ZJDb7UA1JGEgi8BSwhLjGHWg4TwTSnm1G8WdcLbAoPHkw6CPLDUSuHWLc",
  "key4": "4wm233Tia71SbL9ycAJsbTTS4ruivMTWXAH6KyNmFwquQJ5sEXAjWW8734Qs9KBUMK8qLo63smuZPgaHF8TABjS9",
  "key5": "3HdDrZG3pLmDUTdv55H6zxGBEyWA1GxNZop4R7gmcok9ecCWu6Pex4pXC4CsVznLLwxXmd38Muc3iuby9GwR4uWP",
  "key6": "64nya69J8N8a4B7cn1jJVQRrTpQpxu1yiLQrfnUFLRewrfcZ2k89a9f5aD1aHkfbsWdGEgB7bPMnj8BmjkixjD4J",
  "key7": "3y8mLcLjqtbJCDMzA6Nx2ebDLXdwB9VowNiqu6NfzHNfSJ8RMYqMgJVYacCtk1FJXMVkJAiF6soXMX7i61dSvMQo",
  "key8": "Q8ETYQwMwUUbT8z9qkDYymK5iPDwtkLotQHjqQm11Ni6AjVJseF7si4FPqumyjECeo6uTbBZ86Ww3DucSg3N9XW",
  "key9": "3sM8mgp3wSJqTEXfAjtFSCGy4yJyZiHcYPi7dFpVMyiZAPc7zZ3JJBbAXCg3raKf6Kk9zwuH7mg5jKqZJQY5yM5a",
  "key10": "21U8xZVGhsvMkrhiB5GdKTwozgkafetCuDJME7S5dfdRMEPJcu8cdJXM6M6Vad8qroKZRDanDmEm9fppBP71c7Zn",
  "key11": "248RTsQzc81raEmgHniZwae96HBoQG9XXQ88gzD95L3LdZTZYa3kZFCQ1QyURb6EXwV1CBPPq8y1wSbqv4ryG6MT",
  "key12": "2CpsvJL7Lc6SNJt1XXqBHJB5UiUodPN2u1VJvQatFvqMSGg8z6yNQ2E3MVWxQjbGohtU2EBp64UZXHdhZBChQ55W",
  "key13": "3zYsySNcEfyv6pcwB9vMFavzcb2G8GEDGjS1jPNbcQZkhhvMivQ2immMAuACXHPPHKrMXhAwsYebvqZv7Naj3oMH",
  "key14": "56bq4BdCJdKyRUfDQonvN4ECHKG3wKfvrgbZ4AEE22fVZoX8YqMurmrQazKidsm1KHDYz1zy4c5mm7RwGtaiF5jX",
  "key15": "G3ijSTpqWaZa2dqBnNesAJECDRZtLVHdvLA7Ta3fnB848A2V46XEmb7uR8qMbWBhPSuCeUpRQYw9ZLybrmE46Yh",
  "key16": "YuLZxauk9iQXwG178xsuU2WDi1b6FwXWTRSymcHLWfkFhTC5R2ABv3vC86S66FubQ1zDqmcadLkLaRqNDeYNGpf",
  "key17": "2jj1TX6gPPBvNDMCn6CRnRvMNEMLpgJ4P5Vc4mqEiHAfzQC79QM9jJ9ZfGHdvVfrcgawyNUEiiaaRtkdWsvH7kqP",
  "key18": "Ypn2ErUs2jhio82AiGvDnpr4UJh5X2cscWhec89ghLtfQHzByvNsSR55NSejzNHn878JVezynCgU2bcQwknaqzf",
  "key19": "3P5xBCC32fuJW6LYPAPiwXCgDdYmRVGXrfJqVuYF1JR3sAbL2hfQQPziBbDTpghUwc2CuyEYTo7WSFUDJdcNzrQM",
  "key20": "4VDDkfCH3yVm6snF3nwCqpkMAayPwz2dAYTQFLZrzDGSkNfov4yBaNSb4NEhrDfToCEfnokPkZWKZgK5VnYs9Vs5",
  "key21": "eX5EybEsstVxeTameZVetL5vRSNRfB667AgG1vDH6jJpnowAQYDUjfzmXjZydoNRMbuftzFbfkjZgwxHiBZHAxV",
  "key22": "3sHGrU4znbyCi7j2gNoYZRBZTrNsqQky1GQfyJCbCWJ4nCEnZBZVzjUSM6pkkqAe2TqaJ5wHx6fiJXtWonejxSkV",
  "key23": "ofspqWT21kjM4YFahoxzYYdHrHj3mqKVcqPwL1eHAdqJbNTwJatEgWd9cV7mUJZF39F1hqRX8phB2TZqxwNKrhY",
  "key24": "2yXoR49fMZZhKxwh4NRRxXoyo9ELkFg93PX6NcEbHTd6aeQacRsM9QsdmeCUamTE1eqJp1L87R9JkWbvXaRALHek",
  "key25": "2Fyxbffw39FvcMdbK1QkYLqx9vNKPPmNF4vykB5x4Kmk5M9AFNtvL5prJM5frKLTD5MGXrvpdpFk1QNP4tMM4vug",
  "key26": "5vwRZuine8wcbzSoeqUp1cygJ79XzXjECE3v7AWP4bC2LPxKGc5EqC3puQygT9PLPtsjijRvFpB1YG9W1uVxY3Ds",
  "key27": "31NLU6rf11UP1UP4VdvfUPx5yhFkFFbHogRw5nqoCRjrcvuvVjpgVAK17oACmLgssbaE28yEJvSz8HCepz1VpBuG"
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
