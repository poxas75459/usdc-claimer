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
    "3RVcrS3xjBoeYk8f5ZRFaMT65QXLWPFxxuy2fZojz5uFyKsXFrRpez4eC5HgBTZz1ecG7qn6qMWjXkRcTt6n5ac2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qRSQzDSf1LYkoZExTX3K9RruZm1eUdyVpK3CRDVoRMXu5jxY9UPBFDAhR2Z8QM6GhZJR4piwFvFbrK3TPsVwBiU",
  "key1": "2tdYhW5nK9hffvTcGSktxzATUYs5JSrPsUQqBzTtP1d3pD6oGGMLpwY6qLooXQv5ZvyrFZYMaXiZZbSSM1wzU12R",
  "key2": "X1N7Yan1VMsGLeXnMUHz3PfoqQhp1ziLivK8efMQBu1tQP5S42TszaXi2jtiATgJLNqeabU8zVujvmGMNKLXptk",
  "key3": "2c2MM9j3bchSBRcurWHXfjmaVhXY14t3gsmBB3Q1SZg2HguSCgnmWfkX9eE5fCPtCrbk7f8jQamR2mDx863b8QE1",
  "key4": "3GCMHKuS1U1ZZ7hroRbaMjXhxToHad4YFREytfPa1xVakrNqWotT6B3CV6zKULUrwRYZJQKfGRFcw3YuHdFBmtqp",
  "key5": "5VoUmxXgd8dX3CyL4VfBUNfMFuw3v9vE1mygFwSmQwgG6ppAgeoVTjPXemg64ZPNfSwhJQhX3StwjW8ihN4eRV7A",
  "key6": "2gxBYDhvh87qemYLEAEpsEXukScQuciLbmgwVRfB9mPFNBHUyChGLDHgr4bMfJbpm4S61KBCPpGKXQKLkzfvKivq",
  "key7": "65pQJRpMmVEaYkNbekJj7TpFvRfsocSdsz4hT1SmKzcCneEXFyQss3nie8du3xdwurrZz7YoRUmgdoGhmPg9mZfV",
  "key8": "LmmtamaZ2yWPXStTCKJPASjAg7xk5V8KXyfwPXjqxAbeMEGusrty2S72WmzARTtja5uXk66oEwoHs2hHm5LSZWb",
  "key9": "vvqcTHRZmC18Ki1aBWSDuLm3QGGSht2Y9iJrtuyNWAaotfk6E16AKMpZWEUwV4EoC7zsSagbQXP4j3keKqG4meR",
  "key10": "2XkKfmv2hgnEDb1uNk7TDHjHvXmVxCLSjtLv6SdLTLjxKj5Y1GydvuvErVEpkpqoSjgf6swh31TBkNAYakt4JF1b",
  "key11": "LzpNDxZ89TuhZYt8TJDdsjWgZbmvGvmDVcuvZw1C6mFNYTSkrvuY5KAkvi2hJmRB4upsA3Q84aRCDpYuztxDu26",
  "key12": "3xnGW2UQPTzk4GFMNFHqzttz6hnKdr47qq4ZYvQ8hX57Qrvha2QxfmsfXbFZuSnBtgW4kHvnkvnZEPmvCm2k2c7f",
  "key13": "2B7LbsRQqGhJApXzFGvqevmv6re38BRtKp6WRFUCTn9Yp3k5s7r1XkwDnwfFq3wManrM2NE2q6ijUUftr7fohh6q",
  "key14": "wKyTKfcTdMMGLYxqJWVjMHLstoRqd21aqB2DZAHv5FdQN92V9UFbV2AMMXfNKLNzTRmdzmJxzpnZgt6cMhm4xit",
  "key15": "4WuJUuRgViBGEq566Sqsrcn6fX2AfDY7Y9jNoYiUbMaKEeRTVLYJxbDhUXCSkZLv9UaQHGZeUwz5uqG5rFxa8vqn",
  "key16": "s3x1iF5VTzUpyj9rMK86sHkhTFNTCiqBtBqmio722DcA6FLuAcr85L3Jxd58g9Ua13zuE17yHihUjWfUkFokz9c",
  "key17": "5SCCkNvrT1dLTs9B42tyiKjH5jfScG5uTS96f2mf9JTfkuKuWTswEcfTZWdgRReVvUbfL6WTj5d4yjdBEuR4kVrj",
  "key18": "VnPzAcfFfQJwbeW7HtnvxkUny1RKLH1amj2WETfAHqYr2u2eAr2DVdh1iuivtFGzqRKhgs5wcKSP8SZA82YLeSb",
  "key19": "4Cfg87TkxtatMv69nKNrwctWQNaRrzJosPRgiByud4bm1xZRMeWZry66A4yZ29v5tGTbLWdcrwPnuJh8szU7d2sa",
  "key20": "LSh4ev6FGVGFPkoEuUbabxMnXYhhsonzQ3dRRwDvqWNhhFysAMKPk8XNaVWtQeaez3Lgomdnzw6KG5ZiP1d6WmK",
  "key21": "x1FjgX3Ka9qU7VGQGLdR4LRTCEWvyDRRwJU73qYF9AUmGRJWDKinxxhqkqjdX6aEhERbfe4c5y3xHPqt3xwhWwr",
  "key22": "5ieEPtKJmZKN7yrp82KmN3w1eBew7QXLPkuA7HDHnfFYXnmFUiWFoeaLECiipf52xRvEF7mpmW3VNfAf5s4kcqu9",
  "key23": "3Eb6DyAEnEUX2hsv2hDYorFzqpNiSynoYRJvUTBvYDqBoWZN3ymYQ1K3ozs3g17panZ8ADZiPcM4NbbTyjipQ7zu",
  "key24": "51q6SXMknBmn4qzKjDjtikKk5bxwdvCsUQ8cwxP8D5P16mn1rNMXPACcGVxwpUb8MvnCoHzHKvK3tuRKZAfsB4ms",
  "key25": "5q4uxLjnwFxfckvB1V14E4tYyA7R1c351MyzLvcQQE1yYGDaqDYapm1NfuKhPg311HvFSicgCBFxZKvgGCx4kRqk",
  "key26": "3pcZWk9RCWk6yESQoy3unoFqLpsenA4yuDPYgbjiUxSsyZvBCzF9jopVhzdBQZZaZJYmrsy2WCSpppTSixKVR8rv",
  "key27": "58ag3X1Xk5NXq8pNAKzYTxPtH3nxPC42Z51fgW6Hj8ekrJoPXyJBF3gD8tfMmHKWdRsX25dY6BQRFZKzy6WUBN21",
  "key28": "42gkvmrrwm5VgYPgoA8sfPZ8hM7E8wtRK5Lc6mC3E7t7rthSFaXBK4umMZUzmeWKYKxjyPHX8J19XbJTWHCfDryx",
  "key29": "4vWXHyJRGUKBBJ4NCpg1kjfX14bAPNSinAp53d4DppW7yWqdqntHU1xB3gYqoso4ToXKcbF63958pcKJH3A6dW4i",
  "key30": "3bBscwpQPgUrXno2S45PkbGKsKkCPMWDwKGRftSfBoj9Pb7FTPp4DwrqFwZ2NzFGsoKGjCgxZR6voUe3bka2Mm4w",
  "key31": "4uU872CbGQRJ2nyvxSoBLw2P4JKHy65iHyZKJ3xJ93bu329yoLWqG5UKzR92T5g4rzUgi5n6qePRrvwo8nytiEfx"
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
