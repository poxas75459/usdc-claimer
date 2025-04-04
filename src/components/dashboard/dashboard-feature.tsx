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
    "4X6PzSRXSm8MYUrSbLkqHFA3NyVVxfvjxJdKfWJWGwRGkKdaN9PscqZmGgf7f9iFTrzRnPGsfUUEiLaanDrFux5N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zr7aJTnFsfVYHZ2od35DVBrCFYYx1FcsrrfAkPketZGVcvTRGSRBuJJTwa3b2cXKy1iCxyyMaPWinnwxgFVbEQr",
  "key1": "2fCTGpK2MPnYaZQTowKTEt9fhYJewgnbVH3RTJWVhG4HYXehJUHg96cj2LhJPRcLWrAy5cFSUATErghisE7Xrmpb",
  "key2": "4q31Sc9gP1qbaCCNBArd2jYZcZW8WRXu9pJ6n9tjU4VwG3Yt2Ni9vwrJzRx3fjBJsHatp3LoSssYTvmU3YYcjRSq",
  "key3": "4EfnGgRqewXHeQJNdh9e466UxccB1APBUxMH97EDuNLtXirKrYE8u7EikPeXWoN3sNJWWHuVNG426iDwuhGeExnF",
  "key4": "2d1hJw48th5p53kCm8mpfdaD5W4J81GKFRHfE5cKTM6pixvhcwqduVQJapKYsNzhQ5581cyrg4rSEZEjdBLKnoHA",
  "key5": "64Nf6EF39eTKXeh19rfKzBTyg9AZRJsVevJTejDo7pjGhaqEu8ympFFYg3upB5Y2MfogyM6yyzs2vkXL83f322E8",
  "key6": "2Agckr5cF3FKMRDVzFgJSfmoq29RNcroG8hZuhH5vwRgTybHJ71rxSKnMHTzh9w8GUJfM1iGZ5rx7ZokNkP1Aq6X",
  "key7": "mTVXbBzjVQaTMzrWUHJM6rkmzkKKtCxGFkw8BT72YDtf65Ebc6DcbhC5rFaa8V3sAwur2LPQYvEvKypEqQZXUgr",
  "key8": "38nBc7KQgv1xs4skr4zTkuTBsLrVoguuPCh4mYAbSwfXkCFz2v7CsfnzeUWFDeDDmykGjGmrU7sFZxJfaHJ88p1z",
  "key9": "5ViBDHdxYRpzaGPPKg3Uq6wz7zrjeR1aTABGfgKrr3RgcKC4qUQpmGLWBipghiSChU2SsvsBtr5QsCur59WLpqiV",
  "key10": "3tPtiowt4tBPaxgM714ikcHaiybi11BdcXYDPWWruWqmNLBLCcRPma1HjCjjVcXYxg3WoFHjSgwGFFR3sb62j3zB",
  "key11": "3mER3Ejzssyw77nevAzRHAdJ338ADt8JdpqZzCTMWwsx7XMN3LpytJy4U4d6iwcgdWnabTrTL3cnoiwqp134xW4P",
  "key12": "4hZ3PfAKjNv7bFj7HnEfUP1TiHXrszk6FMuyGwDq673XCFyHVRN9TFTgJHuH6BaumLwYgGzUBiGWs7C2BU7FsN1G",
  "key13": "36u2fDUdU9mA3afMuXpPaAYRioFgyNE3fBtjGvuxEwdyJoid7arMR7twx3CTdSsi2PU7kedXVWHGoWNpwqvmWKB5",
  "key14": "NTMaQfqJvpEiDM9mgXUvCZtijJvmoPMn5dco8UqAdg8Uhv5u3uM78V8JWsmDJHUtZMuXKKc559g8rMkYFFSQvPm",
  "key15": "3EJZFmaxWjZbs7o2MnV2ntGKpYUUwLZaWAgxXSngpuXM5bFwbWjHD5oZNCr9ZiDMMt6L1oC49LBucyF1CwHQXGW7",
  "key16": "3H3zGJwQV2XLKpzTpV6xvcG6k2r6kA2c6vdHh2McBrdNMsRmnHFFfvErCVLg2JywjtmPfjLcrfiP2QQaGX1ihx1g",
  "key17": "4T3MqFy6WXUU9yxVvDKx71cGKM9CAqa42LkMowWs3UD78Q7oMNdWbQ8XneW4ZKwRbc4tBKBuGirt1b7SjCJrr18A",
  "key18": "31asrhgvVnSv1WDwv3eN2vcVRw8C3dDX8trrtPZCUFai2SZ4mPiLtF7FPTnL2fuCSimypbMnR1awWZ7pddV7fEW1",
  "key19": "45t8nNaCT1GdAS9tiooEMdGk81bnKvXKBLcM4TeJBiAFxDYVXnbghXhD1ykY2Ebms7G2L8mqhrYQxRgwz23oTY7X",
  "key20": "7V3EGCmH7RQbzWdC84nPUXXsz3FFahr6aQvZ6ZDcM6duYsqZDQjEv8vzVSQr9akknsusMfJLoo3DagnafKy1aPy",
  "key21": "58uhZmg9wejzghFKoL79S1WBgKxnBV9zhCf3q48EXeGrUneELSQSHqxQEJuc72mjcvNnz8jz5s1rjWqM8nFggeUe",
  "key22": "eqpbKeCqqYqiBXXBEMaD3yPFG8eZFBXBSkYjaEPoBcaZKr6iLW6upeBs674sKEY1qgw3qAAzGgyeF5CWQTpGpri",
  "key23": "629EdRk5xsTcHouK64mj2MEX6YGGz2kkgSu4ppHfswZsTK6H5cwhfXWFgiScv3p1bTXDV69uQdwZsb2W36kZnjkH",
  "key24": "2vLJ17Sj93zDAjeduPwXEGLESVVvRrdLjAPkRku3zoi7UHTmGAeZ1PTT9G8Zu6SugBtDEtKHkpcJ9a1pELfWNiDB",
  "key25": "3R2nbFLFhvbmvBcvZkHcTSo83CALdELgHhE6XTn2jVe5B4VyiReXCrQXFQ7E9RDSwKSck8qCpNDz7vAC6cKurXaG",
  "key26": "5gCitaDcr4B3Uv3J2LJWUr7kryiSm5Kvf6xznQoz1Ljg8xRip5gasdP5CnXY2DKdsaL8xi44H4RRtghnVijoH47Q",
  "key27": "5ogjrUKnpVAzJUPuFQ7NFgMojLGWPXvMjAL7fUYTeWY9nojcEw5b4Q3sXHCTNYKDFUiccCLJa7sZR1TTMMCz4sr",
  "key28": "3NHFVDuJ4g3j5keqjgoCEBaDPW2UVe4jvhBb5vSR2Kr9kz3yi2Bwmaz9ce1YPisxjbQh3ixHYUAa22kW6Rf4fkyS"
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
