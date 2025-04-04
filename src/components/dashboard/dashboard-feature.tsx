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
    "2jt9BnLey4gvTYCefqPiFZVoLdtHfW9qDVTxMkGqsgXRDJWe9ro53B1omTg4odYYJjHV1RBu4STteHVAEQzwJe6m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W5RKKVJjHFmY8n7AW9YGPB6nJwKi6HiW5YY5wPsksXkTtPEVx1KHXgfYP4aNCbwRAErwbsLWYhvxGQpoQtPGR45",
  "key1": "2HSkGCpW2DWTjZ8dgJGC9CT4QzNdQ9jXCAA3N42ZnM3Q8oZN6nbwBkY4WgUeQVbqKJ4LTQgEFyP5TZtzGWWb7UFh",
  "key2": "4mtmLdrsEHWHdqw2FrwSi32aUTX9LFPykAYidE4e9qiPzdaKqPp5iCMQ131UoFYu2cvvJPv2HZLcniRYfMwpXrfp",
  "key3": "4n8dp353DdhGCvL3wVooUne533faFxRundDRNN4ciquk67z2P2RVmNGXtUxeT5AiSeoMw4NmGqe7hXZuAnNo8Bzn",
  "key4": "531pHMaJJ3gPFtPW75b26hD5LVmDvHAp4VNWPmWBriB6jPATfF9oP8kwXRfZ7FVe4eSYXvQ3Gykmeiem2h1aZf5V",
  "key5": "2ohmRMfaR1BrChhfQQTaaUhNoxaccLhpq3b4cY6p8Jqgy5woiLxyFaXvCVqNBfrjMSAStTFRih9h2pZfGmwsq73s",
  "key6": "33HkUarJ1sfopUFyRb9XkhKkSqiZXKAKwfSPTqv6eZSgMRNqNWTyi5KurtiH8dKeuve7rjdAHDk3gSMTyrxcXZrE",
  "key7": "tB4QaDaVQsonUCEAZNpr1HAjRcpdvua52SjppX3tWhJGZhVRdjHnD3FE4yW3eswJB7tED1wZFmyaxwcVeKtFLeK",
  "key8": "4EK44bhQDG1jKkBcV3BiqDt2MW4yNhUzv7RNqccaWuFDB47ZmoGMYcjUp3ry6gw4m589JaK49GhThXz5oSd8ewLK",
  "key9": "8AfsjzD2xZsocvxg7GjWCaXdm4a4iHWvVx5MPpzDkfxtUmoCGpi1cEgb7gYV6FFP5kV2EeP3H1YkwwRW9aNfwq9",
  "key10": "3tdmuSigS7SfZeV4ykCVS5TcVsRzAFKCTMCvHbH2T3x6UtApRH6YohaSaNo2xFk2d4sAC58LtqaLmeTvHHtjoi3P",
  "key11": "4TKAEskzv96pH7Pe7mS1FeaPhfVw5HhoNmyrCmVoXYtu5JH4e3b78XVSLi7S6rDtFJ4e5LkDLWAUDEMonSXyKbn9",
  "key12": "2oo4F5X9w5i2WBqETzwnHZQ8d7gdvXy1BkHithdsJLYmkjo484CDhubPKqRfz88zPQbNSxgUmEG65JE4em9ZJDSV",
  "key13": "4y5aws3EpAnkZtV98R5i44pFVb2sFfkr2rkGjjdKBxnVCxWQW4wgBRGwbKXFLXmDjEiPC1Qr2VryeY4tx6Kx25MT",
  "key14": "bZYcFNMNft4fmtxshUd5rccvkwjS9Hu8Cx4pF9csXsyjuF7oQhChvGHnG6Tdz8NqBkc4gvgNAHfyhqn573uhPxS",
  "key15": "LQz2ZQFrkiqYjsgsNZ6ybgJPvvrbGS9B98qtJ3diMykPBYHinRCfG6FvvpW6eBQHk2vSxYPZDBfwdhgGfzkHH5H",
  "key16": "3CqLsE5ktCjs64xHUi1GGuif1D4BpfeBio1gJL7N9TF3XtanpJBsBsQH3grZi4eiuiwu2X4Q2SGbGvPG5m2bLLZg",
  "key17": "4Rw9zPg8mcYQKRo2GeEzmw9PgAaTqrJVtktnFbauVYofbFjbKGp9WSfhwJSJs4UfHmAsgwH2qfKkbqRHD5LGQ5XN",
  "key18": "4vrddcdMxSXPWK2nLjG7KZuRPGPWRxsH81oLt7LNk29gY3Aa9v7YQL2TSLCcQbbxfZsFdtyoX9paiG5VcQ31h7jZ",
  "key19": "3BZvi7jEPDUKFaJsFmNmiW6ycnVsDenD4LWDD2sZiJ7yUxng1C6dvy5TFYgiUftUWmpD7MQfefQ2Re8XDirvwumq",
  "key20": "K838CaaXMeqmrnvF3bM9C75wTzfDRgCG1BoD7Ho7THUyeobxxVJL58E3nFp2um3bgmVRPA6s1417hndE9ympXsH",
  "key21": "5KTPfe6HGPjPkjHP7GnS4mg2YewGrCS5Fyb84yZvqEvN2wZWoMvT3NMNV6am2TbP3sutyG3U9HPcV4SX5uk4oMpR",
  "key22": "3p4vbAt8EoZAtkxsJA6vihBj4GpawvN661KWCuyYVbJq3tt2Qk8avE1ggYNo73sodP1FFo3cNxobMr8eeExjAYUd",
  "key23": "2WLSaWp8LD1hsa36t4K55Z5s4ptSR5TAR1NNYykvvsNSo5hqEKSK3rC4eUSdRDtorw4xBo5MAcnFaJHLeEi2Q27a",
  "key24": "5rKFwu7CqtYgreSLV46sR2PQziMbA1NrjAgt13M9Rx6i1vvGFPvYrXVv9bJisL1oXJiRqaZ7qqyban8CfhYwGGgK",
  "key25": "21zTd8br2xPUy84HdGFGFLJQU8axr1erRJjPNpmTUsvowE8kUFLcgHy7wi9ZuhcDoc8fR9eszedoY3teHYVfzPvp",
  "key26": "5AKb3F8HBMnR66HvxRYANY7t5DvNh6oGHN8pMrCDbJ5kpxLobDjMfwJ1iouviMCerAn1f9t6mPQ6MrK4GmoysKZQ"
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
