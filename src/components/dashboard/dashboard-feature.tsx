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
    "2mrFSQxAwKrKW8RgReSXgaVEuy7mskSC1yciWxXwRBLYs12QURZ4Gn8EbXZB1vEHfb21rQGYZL5Bgatukq5P2hQA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fNeZ4wjimyhe9GKqTC4CNJ6AgSVMCZAtr1TBMc3MtD5EQUfjsL5R42iXCYBgtDR7AmFcNdLE3mKtt8BSWBEtFHL",
  "key1": "3LXZSdZJP4z67sw7NKBwsBqij3NabX6vrf5YiTfk2AGFgrTiF2KohXR7n5nwYdcQTXQKfbTTZdUxWdAUcXMcWVdL",
  "key2": "2EcGHPfvM62HzjboHqwUFjxUqc5WYzJ5L71mTZbteMdJGxTcJYRwFXU5EjZjFKnbjfAG1eczYmLhwmW6GLASgQ39",
  "key3": "2z4SUUbhwFSeV4psmYv6xQAshPcei5cxicba37T1pXw75rBHtnPSMjvom9kv9QjykyAh3UV9FQgVKjtFjzspaG3n",
  "key4": "4EQY9UksKryE4pX3hpWgJR3Y3DL2ni4taDji3ZJpghwbUQXEQu81NETUxsZKsCsp376Kgwwq93embJKn2jeGyWDQ",
  "key5": "y28wRsmUEQS1W7KabojpixAjcoVxodtu7kWCuX9m3spHqHFgWQBqtngHt8Tk5nnAjxf9XgXwE36TrHc4FngaDKj",
  "key6": "4k2BhaXt8AhQoaftYr4MRJaZPDczXcjcurSma8EmDBm6ebUYcnXtgdMDAAVHucLY81rkGL6B6MjRbfpgLpmqCSGw",
  "key7": "5kgPHajH2LK4k15N4vAd8mTgBiumZGvKdhrv3A3Dozo3fEWvGYceCGkrFwLwMutzKEDa5ifXDZD4DTybYE3Y1nw9",
  "key8": "3LZUoweHSKrULKFUUAMngkcroVqts5JZrTmNt4hhZeaN2aC84y2i6YNu4UhNWh9QE29vgnCGHcGSb7itLnbLCZDn",
  "key9": "41FkmNCzpvL4yAEyRZtNRppv1bLwxcDq8Yvpmzeya8LWBmaE5kTWkTdbNep4W1ZBuGERTVQ7F3qqezeCkdaQu7GB",
  "key10": "2R7PKCooJUGQRKsMwBuLYLmriNLQYajCwneTJXuR3vu2W2CxMpFH4VDaMhpab5jgcocFSgWjq6m8tCzqjwNqHkTB",
  "key11": "3SSRoyKV6PpDC1foB3zrwpasEUXTsoE1WqXEEZfg9zm283Vuc11gifapZ4XdKUYAisZMt2W1xj9MDD8gfQ4u4koA",
  "key12": "3AnkFkVzhMYgJhh2Kpw6dPutQFhbz6E1mzotGNvc2kWvLEPc6RZsbkeu7SCEySUokYYc8nssTDZadL3ZFE4vnAQi",
  "key13": "5xZGEkg6HUFVHSnyjqgV8EaSN4KpoSsbjuqvozZBxZ35MPmSSiH5EeEGWa86pcsr57Fj8CGKJkKsYaEuLBf7foVY",
  "key14": "3QnHA9FxV1VGUJftzYB6XMfncbEXLUvoyh3PZaACEVTopmwHXozVARfZu3hfoTdd4gt4bdaKSJxi1D3mV87QjwEP",
  "key15": "4fRJSPeE6er9YmXcG9fvf9sbyeGXxdKoZsUvRV8rUKDgwBAYs6rtH7hNxcwb39eRX8SpsCsaiMhRAZBwR6XXbd22",
  "key16": "5FxJDagUGcFTRA7UF3gpsssgp12whhQ6RccpTSWyvRLYAU2kF2pm3JafpTkApTUk8KA4xGE1gnGHD2TAGKT8XkDY",
  "key17": "32nebSTDJSzmvrDUFevTMS3YQWVLEyiKDzBmVnuTaSdum7gdWmbsbKisod1Aqw2GVNuTMsKqquo95HsxMJW1k3Uw",
  "key18": "2M79LreK7h77hdmMaT8zqzLjSujHQnV1XB4mM7iyp2UgQAv5ezPJN8PUCaaMdyMEijqwjLTCC2dabeSq2ZYQ3JLS",
  "key19": "4ALCjAgFcPPAoGjKKiaJUy9sKRHuiS3VRRi7X5AJuRghyB6ztm7pa3i9qBWZNyQRdkprR16c1fQ8bEbMipRMaFuF",
  "key20": "3kaH7gkhYA3hKnPugxDGguBqf8iHNJGrq3o4UhFeQQTUifArrvpQnbPtPvCHipwYGgQPCRRJ56po5AysqUP6p5GX",
  "key21": "5ChDjMUjD8hcneNz6Bnj97bRQEX5AtFRZDKrFAxhcnwfcM9V5DTuXsRPf4xYAfC7ym7xhxyvuAR89MTCdWdXWDoq",
  "key22": "5L7J162ZL1Vfhzbs1ZKrpqj97uFbZTUVN15uHcsjZBE7rLEXpJD33NtuBPxSXkF6k59BahizQ3PMuJDjD8dUX76a",
  "key23": "43iCyLDuwcr6q2kCK5DzP26RmDbtrSbnKYYawugGD7v8Gh2sVVqeJbMijAhju2GZAVT3jDgDHop9yyGwz7YxeHYV",
  "key24": "dxEJx9ASNhs6AtosSAaw5rqGdDHUCMrtEUsDgAd8mHdMxuCPWhmGkk5usww9D8wrE6gBhv9mMF9nbuEYbRUas2P"
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
