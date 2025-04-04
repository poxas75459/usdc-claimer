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
    "24rtN7o5aCyaVgfVpi8U2cAG9xucSrazV2C7XTWCpuGFLUpnNMG9TgWYRzAw3stxk2NVNesAE3EYHyY3s1w53AJx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SmYbue5MwyyDgeAmpin2FLUPKruaCFMt49RyK9ckqfZFXz6KrLq33ey6YTumbcZtBuAShELKCxXTnCZDgSPi8sN",
  "key1": "4cYriK2Dws5xkGCziVnqtocaaUnPLhWvZuH9U6K85iL2BSht172Qniw3WzTx1F8rP47y6Fzi2y3HZn7CiWYw9EMo",
  "key2": "3SWdsWtBgYVbPGtZgQXQKNFcqfkkEFeT1VqMsByeqb3vAz2Db43z9Q2mdmzYUViQtsjGFN1XRo7273aCoDWtAgCh",
  "key3": "57uiW16AsJFhQvHv7qnRdiknCRysTeevTQY9DzmKYcVWKjnB3BF4eu4xxenDfZpR8LeXcNKeMvQ7E4Gr4EjrxnvN",
  "key4": "3QskJ43CWa6hUSPAgzNBExGRyDz5aUEtDZF6TaiPkGyJXv9zPiPNM7AUnAQUYqVGEWNUVHbnfFffY8nBjQZEyqCZ",
  "key5": "2p21nj2maK4mPXwaBEWiCy8S68xLU6VTCgG8onWT9gxgYSbdNMsA31aWkd3GGvMfXTMtmbL9ogfPNT9SR7CVbMqi",
  "key6": "2fnLADgdCzbsG6AKKET2tacvAnEHbubTiES9nzkP2HQc1L6Vgh7UqaNYxUB1ayk5GA4JRMGZM6nVtyRoHQJrvW2s",
  "key7": "tmNJtLk9JBnZMKoinvsJtfa9KEZaTjSVSo3FW1ajP6kRCS6rYWjDsGNzZUvqifp4AbDLPgMvW2cd8tKDi8D98H9",
  "key8": "5RqUdVvfJ3e7US2UD7Z83MZyBnC6T32S9SqWdB1P4tRBUXq5g8z9KK3wmar15M3Kkwhk5pwe2eFvkPGECz8DkFLt",
  "key9": "3aQXUtBWdgs6hDSZPBjPFnMCqEDWBNXqistbQSvoqahVH5xGTfa4WVWa9A9fdd9t4Lsc5qYdkbcf5eNxW6Mnbion",
  "key10": "23apQJC1iF6E9q27pvCbav4zJnAVckpFuMyRRLMPAZcWncw6cZ1TmYuk9meDCyby3S34DoGPBz39Fm1HWoykLg2J",
  "key11": "Ge8SUXvk5BPRv3B45Jk3NN2ND9kiCvbfDmJ4ntArAb84zEFjoJrPVNarXebK2fAyd61iHyQoVrX84i1svBC8Aym",
  "key12": "5wohZsoKNkZRegVeHkUFt3vneB7pK7uVsMUQH7HjP8maMoFKoEeyGj6GqeYsZ5BE82yb4oJ2DuJ9QFp6dcftNkkH",
  "key13": "5rUF9sWjigdFZSxsRZ3MWYCLqD3sGjYMB7SZyUVgG2qUDfsXbrPAjVeAXnwMEneqmZuN5A1kPyVzSfq9TfJPcg2T",
  "key14": "5gRfc3G3QYYPFGEtrZhxjH4iDbnapa19AEMND8DXdAbbZKbC7zvpffsqmM88kiLk2JJL5M95Lu5tbGSZncHKUgwY",
  "key15": "4C9TP2eN3XpFBy5QTC4osSMrxTsvrEyjmsRkK3imfsa816mf8kNriDgstBk4er9gPVT9aFdD6ssCpNxyekJQLAuQ",
  "key16": "43JmGnsmjdS3wcC25j1DK54YMiaXAew9Kg65fEekNbbs1juXXL3ETVoFwM1hmweSuPzbyHZu6JSGhXybtdR37UGJ",
  "key17": "4n7xPYmMnDnrn6pTJ28suLGtzDdsD3nCTuDzmzujXdpE7qE6WtEJyrbm8MoPTSpiBrwBjZ2UovaH1GNR95XLt6Hd",
  "key18": "2znFeiGsk3PRbLD5gna4z8LmSHtpav7WhqmWA9iTJBpfYhjryeWx1A82HQCpqNNgrxHLAf7bQ83VuXi5KMty7Ucq",
  "key19": "FXTaHuRzany6BoRrDdhBj1jFw4D3JQgAdhGXd4PfnMsWYteaCJ3GoxjqL3Lw8EQe6kE4d9KwB8NNRi5ZPy1hwFb",
  "key20": "dpMP7iLoc2kR4wKaDuoJPnPPwHdP2Fw3iear71iinxx5CA67Yn2jDfmHazJSX9psNYz6YGYcjxyyZVLg77NBcED",
  "key21": "3iQPov31UnDh6XBVquNJkHekr6bHgpXFganjjRTdF3yuVsJDWC14rYBbWqrmmQvmzaT9ZgYr34Fmxg7w6zRP8hkM",
  "key22": "4r6TAJRdhvqbzRXpARykz35EKsFdmYkwqDKYD8z9AbptV76Lq9kSMhBqQ6Wnh4jWWNt6wiW35b78gYcfxpxSp9FU",
  "key23": "2n4nWcEAFa8DMsTgvXxCpSfAc9TGMEakWRGtWtSdtdB52nY7wQpmUd8Eqz7CgCoZHALton6pVurCsSf8boLZSW4f",
  "key24": "nJHKHoQJgQF2tgjEFCaEE1uRiQKHs3JtBjgnHbeUC3tsB5XYCtyxG6oqNgZoEah2ewhyWohCzTe1zvz7Tqfnp2d",
  "key25": "4X4xTfc8DVHfoshAac1ugFu44jT1kSZNCGBsZmYASgfEz3aJXqpr2TwLGKTUznWsDVNXZvHHYwb6xKoXotWwbyGE",
  "key26": "5MEx8swjq7e4ZfKNcRx3KZL82XEFzx8rXhph2T79mK1d64ZeUXis7fn7EegVvQ6EZe5vDDqgEwecVVBxQegpstDx",
  "key27": "3fzUY3E2aF3DCukrbLXCtscdZPkAQJK6tCS9NHnURDYTKCmv3KA8o5ogVvUoVooNmMB8gPez1yGKAnJLVDNvRSUs",
  "key28": "2oEi11AiywBezaZsdvSRYiZUnw1jeeprVPgMtAKUkgesX4e1FmX7R99yxsGw2Yx9dz6R1gLP56cjbcDteoimwWxh",
  "key29": "5dCixZEEDVGpWkdwaCGksRjAUCzgV3hKLsFrnmRrRt1rt32N3MkBvvy1JcKcgJEE3urrQhb4mkUCXuvdDZ1zpG64",
  "key30": "5r8dqrLQv48w9PLNKkYu4SpESSWsC1TnNNf2XGt9BtuCvJ6dfMqvjN9wuZwHAZfzxkttBjfBekUKjXhJReg2P2n7",
  "key31": "626cUy4JeXkJkUxKAfWaU3UUWWMW7zmFKzq8fCTg7xq9LWFULwaQv4chwguUMxYotg911kKQzUrCotv6u4KJSRsm"
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
