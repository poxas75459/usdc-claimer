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
    "5aeEg4PXMtxHYKMNqhnzLhS7oRMk5f3bXPP1TLaYoJubwxjPsjphxKy2ZvYpQk81QuE4Jsmi6j7nqMcorT3E6y2M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ndp67oqLSv6LEDjoLak3ikjieHTcN9p6U7h6CZUvuzLnvV1iv4RfNMqKVhErGB8peJx6BLDhpXnt6NAUYrGqF47",
  "key1": "dCB7Y2dxi3u4y9ac5zGXcPDCUu1eDeaLE4FeLoQB6nJLz4UFAmrut1QUz57KFhcqWB6moxkfMzyXNc2vDVknX7g",
  "key2": "5EK4w4Fes6dknhwhB7CfdwHfYXtQLG3KnhEjYiDqADpLAwVP2asy7Hj26Tbm9AetLAPDixKxzN9XdWKXk9RYZGkd",
  "key3": "4SovPUagHfJFW94v37GhdfAUPScNAjJRN5gPz6qeNK2izWbUZ5mTMqPu7jmnr3gmtiF45xjUeBzfLjbX4xfAjJnS",
  "key4": "2Zs1iJZEKTCwxdMKUtQ16p3KkQtiZkckkgAZgk67tRn6FKn54i17qi5Bmo6zqweoNwXuQVEutqD9B6LbnALQEb4p",
  "key5": "4isxftDpzgxmQknDn2bPeeNrq4bvWLg7hyh4Y2GMKjKWc84jV5HmXqzjZkUR5Ft4Ej6jvUZvwxZXieUPRE9Yx1o1",
  "key6": "2snEpAmaTo45vTdo1dEoqS5Ay381SmBKAtvncW1G6Wu9LsgCTnnGLjkTmQUjsLBTocXu5gEzCGsXxEU68xe3Q2oE",
  "key7": "2uSptNZo6rNkfhBMB6JSWNj889VULjSCAvTmywg5mdpZ1xsUAq5bPoUt9ULAZwmy1xHv9QmhZNFThGUhSVBkyjHr",
  "key8": "4wAsjNK8KYBmNLRRpaXxDzzC9F9NsrwmHeiRZj732ULEVw2crUgBM2cfsQWKwPBqppixs8RNLxUeXDGDXme7Ubrr",
  "key9": "5nXgTh6eQiP7bboAgwsjvzVJY93vvxaSbMDiftPUETcAKEpbBNrtJQHyKrbKDx3tfYsLUyjM3haCTj3HjVCAV5Bm",
  "key10": "3gPthcciBpnsuaAEk6S5V8w45wUUCK7ijuGMD9mB1LBGSqDj6E53JvrDPe6ixgpN5FBtCxDQYZt96UVreKo6zQMZ",
  "key11": "2L1F5vbDZGtQPyrRTwwkW6qPPgFzv64av4Sr9Lqf71RNT2DkL2QHgH1jbttQx25dtNnh6jCBQS6VrNwih48aHutU",
  "key12": "5pRRNGqmTBgCoSnqsF115CdiXuNGryNE2Fpmnx4C8vsxtcoprXue96iP2GcFNaPx8B5JtNENM23nAycVqdCdkJcR",
  "key13": "kpTiBQ2UvKTpLtrfrZGgpSv4FXTnSKSCUdGiANyNh8h8QLWMjC974Mwc7wxxLBBWUrqBGWB438XnU3AgG39wsSZ",
  "key14": "jUB9s4oQvPqLJEkZ5GJCPtvbk7mdYSuHfvXJr2nsmoy2MUDfwKsGzT6zqVddHvtm4XB3KdTJ949XEjm1BTCzcKm",
  "key15": "5vgr1WCAa2DsHqd4H3oNcVSo7mFtFTAV7BzGFC1EJzJt3WPrAExTuaTNdom5PysYbmPghx8w1piBYAdausMhQqth",
  "key16": "4Yyo1DbHvR79Sgy6vXthSJQwoNPQD4uRCKD6Cev9WrfbWtEp3zw8wAixpF7WvLWjhnB2nVpfRRQ1BHykc1dvdL6P",
  "key17": "3rrW3FuXA8erkJLWc7s1aZsjv5ps9R5TnGxAfHpFqJ7oVgcdcVSmgYtwodtESQFmhEV62ssW6upXCWEhHfeq69sA",
  "key18": "3pb9vHD7n4osCTmt2kiaf3CwyTPeqvuTx35MMreeTCs2UP7abFfXRSjMAfHmjWaqYUwpXmqd8AUgfhkg3aetR2ic",
  "key19": "XmWNr8co87acgixvDKbYT1RUUTZfkXY5nFWKwQFuSp2uJ2GpRfyS6nKAdyCLe2A2bBkH2N2KCimFAhiruLv49Qp",
  "key20": "2MeJYzyQbKeJWj4wNVKAfTUjjzFruDTu1ow4Hi419YGuyYs4kneR1BC2hdby9pgd4X4NyE3ZaKBYpDAeyvuFFxNw",
  "key21": "VmZDzZVB6GZ37GW6V5sZiAHBmFBR2Bo3wxL2WZmQFCvBj5r94wGpxMvrSXNv3nD5JG7a6C9aWMuWrprGS76z3E7",
  "key22": "4DaYUCgfwnm3NNWZLSuJtSCjKC6AFberoeQ6mZ47SaxvVw2bZbWRhy3anCEAproXdw4DDArum23evqbcFZ3JYNZc",
  "key23": "2BSanqLT3cjJX5VYfpLssKt6U74q7gDzb3FavJodv784AhtSDF3eDhtkBtk2HoMNumSADbzSKtty9WPoatddbsEW",
  "key24": "5jQygjLUNCsUPGZE48XKEGXv8cKgDjETfr6a4hp2JvaDtvaELScukwrF1tkDfMtxBRMMtyaVPD1K6aZt46K4buyb",
  "key25": "9Hb7zXQYdtwzEv7ShAN4sF4t9iiiNNvjQaBCea6Jw6oogZ8fi3oxkSPZqEUksWSP9bPZuQ4KpFjVzu4zYmWyE3o",
  "key26": "3JBa2m4riHUBi88m5BMcGPyqNcH8K4oVj9yRh9vshThobEJv5LZZN8Hrw5VU4WTt9dE96N9gGzN9auDAwDC3HbkJ",
  "key27": "ACHNEWdH1Twc1DQyQipgxzyRu8Eguxd8X6yZcxEjJ9eeH8GB76gA92Yu5jGuzo5tpNn6K4xNVVuz65Yyn8BrdzS",
  "key28": "5f5WGDLeqeyprnNeyniKww4TvHaFYFg6Af9cYuth3TwWLVFfocsGaxW5AFeyqSuMkGx7qrTKGwBaQzLStorfLhCs",
  "key29": "5YQupGVKHccw6uLBFCaS3CXpYsUgEiUn74V2ZpZBucLiVFpXNG6gJPKBikDCbKCQPAjq8F7Tk5A6ugNLiXKNM1Zy",
  "key30": "4VdowripnnmuDyAV1UaiByLtYt5L3rULDdn9ithSFwoRcZus5ZkvSPj5s1TgMmtSRv5NiHvPmADR5m9yaq8FtfYo",
  "key31": "4DWUtiiLU9m5bPugttYEyD3E7WGGdpnEzWurPHza26iqNbRc8y8JLh6KhokhRqygxPfd6cWqhRCEySbT4MWfC8mS",
  "key32": "3ReK8AGf9kCv31WjzQCQHHnBFMmtbPsSXDWmMqZjsRzSfvGtcUCU9a2bhbFT8qhH7f3xkq2VuoAcNnyjCJE3vxHb",
  "key33": "MaQwTfB2dtREv3etXSzyTPfy3WRSHZrKB6QvHQybS73i4HW7ugV1NgWsi8khzBzXYqC8oKnq9vDkqyxyj3zn6Bg",
  "key34": "nrb66AEkQ1RN2b2wayWJTSyBiMgQVH3vgNGYaAoYssHPH7iq4nsDHNUPUaqxFBVDBDcAEDvs4yeQsCQn4b4Xy28",
  "key35": "3LwTZaNpMBhWBFQrFCgPBus8xnFY4Ae1JDP3pzgFhZErZGk5BCFpgYuk9NRNqhw1DzXU1y2o3YNeri2uHfZ7jNJY",
  "key36": "42tYw5dwxBwhPgeRgNMGbMKyAibwjgiiJSfXco4o2Ca3gKzT3L8oLaz9TfkBr6Fbmytz1mxMJ5yB2MnccAH2zvXR"
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
