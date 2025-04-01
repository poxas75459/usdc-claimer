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
    "4CCvx3KPqP3hfAKek2F4mQKcziqftZ8TwoG6Ygmsggh8kpdxjYxZFNTqZZPQEVoYgeDw8UQinBiXTuvV21qAF8z2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c7hyDxRMEkR4STehEMXyQLzLPyQAPynd8SFJYzkdZgQYArD9kcEfUoF8pmnqRni2dFs1SqyTKheVi7rzziDqXT8",
  "key1": "2cR9rAEEcQGETdYMp4rzVmb9rdx4Ms2Te2fbWyiypqPabSKFK74FFNizHKAi9eweBYJAXnhkmGmfHA3e92b9KHo",
  "key2": "4muxsjGWxEA7o7KBz2n5fUQ6mxMdCWJftoLC1rYefE59dvNpEEkF5XodsamaExeEQmp8pz7pdwbK6VxzuAmJN8CR",
  "key3": "5rXCXEfLTi8KovxSaZNcdJ7ewt9PdthTJc3h5NWKzBeHfYW3iDP8kVGDYbBK8LubGCmyhPMftVZ96Ly9xSe6ebEv",
  "key4": "4nyjGAd8FrviVkfM5V19wrH9PNYCDssjZVhtrFZifGK6VqtYgY3swsSjmUtgMVtjeBtXtw3KxzbZr9nHqnEoezrZ",
  "key5": "64JtrFve7umZnLgUCrrYV8vF2QgPejzojpuzB4fYyBdcvGzmarFo9QYS1pNBQ1fPvjAsCe8KEa4Qqf9AbcjJ1dER",
  "key6": "3vL8yVrygj5ECRhwS1z1n47tsRMfXigodX5TFgvz4Y82axNotVWLcMTF1hDAnhFNMADXsNbrW4k1ERS92nE922Jm",
  "key7": "wfsNdJWLFPp2k8phuQTEwdWMS8eN8RYFCJC2KBFZFqsCFve23Qw7FZHUDmvgsAfzcUDtd5RYx76zSX3xMAAYwSC",
  "key8": "4J7azWKusXCD2wzvburzMfjSi4m6d7XTiZ8HoRDBDa7C1jwbHFv412dGHvHEpPbjJ4kyoZiSSZLXG5iQPMFTmmJ7",
  "key9": "mVcwhjHTM1PpHjhjgr4vAbL84EEcxJvYUJXG8rfhK2Qwo7Quxbi6iWvejdPsiv8GH9mDuT8BPuMhUzTGKDJrPz9",
  "key10": "51QN9Nj7eZ9xb2B4o1UNj2PmRgQanMCcg2pELNjwPkaWZz3N2Hp8r2xrNciA2qSWhT8rD7p683JNCM7PY3fSYR7s",
  "key11": "3iGU6ipSVVC88eRBNTw2HefXr9sKR96FfZqokatzzHnMqMaa5Hs3DrNs8NFT6FdX2e931snCbgpKML6DXZFJwfDM",
  "key12": "3CnnEyX7t35ZGmsroPEEy25h1m5CaanSuSwDAtamAeEsQbLSCYxzh6PeDbm7cxsj21YkQEDXZkDLXUSX9JFt6fuk",
  "key13": "NQ4HzZXcrcx5cDYcCzFBBmhRfx4ywqTPN9oKtxrcn4f4xjo1F7sASSQEdQCQg3HdVzbhh2G28CQ7QjSSxLNaTbh",
  "key14": "4L1YTGK6Z6e91Fhy7Lne2P6iUtShXvfrB2buiWLoszT2JBRkGABEvWJ2dteu3wbKSRiVXysDRpbEE4vwNYs3MwB",
  "key15": "3riWG24g2mY6s1G7mx4WzRcCWRC84XvvZzcj67oYR6Gu4TbFtC7TYB4kTN4cfnzPQfDwrhnreWEq1UkJXKZH1B2p",
  "key16": "2cX8wTgC9Ntbp6kqh7fFVBbLREyQSkrUP8hz3XmvMiY3XtsxZ3mznftWNF7zZH7cRjLcoK6YbYjX81QbnZmd3wSn",
  "key17": "3TpJ5sUkpDapZRGdjVSB1ExDuE4zuyw4c4143sEbeD8vxrzY3w7mDEBtc5R26DaH3BJenEWYdjLRX1TDyPjqiJxp",
  "key18": "52pJYHqqqjcyJ8G2b1WsybkLuhBvr2vwvAipvep58USwbbS4jhnk17KUZRNfNQQ1v5LXVRerdWhHhNW7CoJ3uoY6",
  "key19": "28Jj9nafNPBwzJzfrsEPxocMU1KZRK9jk5xmFdc3oCaQv5DpGyQa8L5k4RMJHSu6n4GCzSZdi94g1xHBxMoV2QEg",
  "key20": "ASXKtAXVZQQSR83c3Qmkxm4pfRiNqCHCNgqr1bJMSNFKcXt558nTxsnbCeJZYmzxFjyN4mQBnUcgfNBswTCuQPG",
  "key21": "2NVpJzM1k6g8GDzJhfK35qJaGrfC46vTfTzwzMfCX7qSc4KwAJ8LdPMM3crgdtVQ4TXUPW5pjGrAb9ZxxAvKkG7y",
  "key22": "4EcVcrwypVRkeDsBnukwaLUiTxdBkZyqhY5g4S4cHKWy6pj8FBARTGPM1gPfWbXhevtppZPUF78oMeboqhBkeqZY",
  "key23": "3YAStnSzuRy9obFAcF9DjDTaUtur6F4HJKH6oGs4DrRZfEK6QYHWvSjYnWLkknvvXczFsQ3idScsse65Wjjxpstz",
  "key24": "67PMKc1rwJo9iVBRNyjqKCaHEbXZkuSivTbnfeLkUM8RjAdGeFALwcuewoDPMPeCicdzxqB8mPqc6V2DFH36zLiD",
  "key25": "meq6puy4LQefprJWqQx5T4SFXaNjmtqyM9DvnMcBmp2UD3cQq4vgQx6gXWh2E761uEZrUhXjj2nUb11SmAK9Wc7",
  "key26": "iytNFx2vHNsXBtHnwZwCgqe98V9LkcWyaCejBRNHKVU4PjU2gPXqATAwSYpB5uhoACfFFh6ZqttUKfE1Rc7XyX2",
  "key27": "5UcFXuEEpShrzqBoitJbPLMaxQfgJxE1aizAjjHgLj76kn8yeHxHL48uSoktBDrCGLApggosu7AXr6CnJr9x5SVV",
  "key28": "2PA6Rj9f2yziTWwhdLnLyoyytrPVCRowMapzzHhQCtP3P9dfRdyyKpX9CYyVZs9Y2MPrWxLLh8LBCX6rppAZu7a1",
  "key29": "588PK58YhD5MohAh1yCXtwcssfAd1jKmfBggVr3zAneU8kHNnf5gyzFYhVPUbRmpJW2iDmD4DdKFRWeibtmSf2Zp",
  "key30": "38yTw4m3m7LMz7fcSajmyKZtqeZv3KoF5jhbK83yGeTsKWDcj1Zzqx9xgu4W7MvY6R6v9hUt69p8esFQh7mRustb",
  "key31": "5JTKwSFH1U5QVfPzq633MxsSNsB6tzL2GopBYN8ZRfRGW6MWxA2aZBU4jKAa9rgeK4E8qsX3Bq4mR9nGpB1fmGMk",
  "key32": "2VzzR6Rs8urLSA3g7uM129jKmfjY9BbKA8B66eTf7FqiPNEoheBEnBaPbx5yqSruvD68dkMepqrebdY6jegUrWgb",
  "key33": "63pk9bmgT5tzDUioYRNJjXkotrkzR5HMX118GyaWBsp2idr4f8Eic1Vg36oPj4vztT85rLu6PcLdmyCjjjDB8nE1",
  "key34": "439SsDVk7eQW2TqZ6o8jbxbyJ7BQguu6bmB3d6dYgFCeEpqHAq557bBrYEMgzYLi7i1AZmj7hvjBmiJbZm7H9LG3",
  "key35": "5vFcZRhup5e62xctqU55cp1PdN86ThVkzv9JMnBzoDLD2X1AZQFoWBRsM1mhc3jLzsoegd9wnADvcn9Wv7wtfYBK"
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
