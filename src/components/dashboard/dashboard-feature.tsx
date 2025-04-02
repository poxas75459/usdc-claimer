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
    "42BBd6emGyWjzreTwCsen1u27Usc7Y5CZNYcvjMcr7kuBdeLNUir4qqemT7GyrGYpSiPXk9Z99XJrWUK7y5o1eKx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KFW8MSGedw9jjkFqPYxViM9GexFQfbrobCjBT1dhhVAdNdRtTHR2AaY2E5FdLfWnsNDno7FXkgrW5iU5XEJEiH2",
  "key1": "5eayrbSdhsQeewYWArZXw4RNBSexpCD3GREL1e7eYdKycyfN726jUyRoAfxWLmYb91NBxSTnR8XUjSEcTTiuKinW",
  "key2": "4S5Z93EcZjpLtPmdKssWwH2kgR37antr1K8eienC4Xm7cQBGNP5zCUt7e4mDiyJRfq945H7W55xGnh91FP7JgxXa",
  "key3": "3MD7vrTJ3JD2qtHWDXsQLbv9A95eQH9j7UJt8TzH59867KocH7zefm9HTEpZ79QVzhjraxutb28G9ceumArdvgR4",
  "key4": "iufBy34cvYXDEDfJwmdSAL95TPq3iHGAFpuk9yWzQ2kAQKWikxVBtp8TYHhaTrbQia9MiJqaCtoxMUv4V7Ppu9a",
  "key5": "4VnShz5t7zU3geByRksNH2rhYQgYqgKShjh8qnFSvzr4UcUoy53kE3NwhaXRZbC9xtCC1JB38AjYnNQR63nwVDFU",
  "key6": "3GUiRmRmzrpXVe6aJ6MzP46AYQEw7ALtDA6LXsjVBHxKChn24gc2Qye82pnnCtCPrQgMC9Pom5tedBz4yLH3AyZK",
  "key7": "4wzVYg35fvQDrB2EV2kBcA4epL2Go489AV2s5r8wdnLR1eNb7UEdnnRAhq7nU3LydErv2jczBDProHKrc5kNjbcW",
  "key8": "Z4W8qEHaH4Qu5KmkFEZj71KWE9NiS6mUJoDx5rFiV1Rs3h69xdigyJuszUBe7CB39YCUr82MBgMwHVUmNPy5YdK",
  "key9": "36t7gjtPDfWC4M5E6XX3853SHhimhgUTGR2WUVCihw7JguyTz6C2yhFmPBdmNCJbt6SymDFGX32iL2LyTChf2M6o",
  "key10": "gqgLoSsA5mmZgeZF6K11Vwbip4yKg4D1o3ds94ZhZvhjCYu5Gk6xGSyFZgys3RuRZFPdY9RkgSLSF2KvwuVVe2C",
  "key11": "2hsAutRHaM7QsHnBMTSdMaz7n234PTe7PSDoQi2XXmGpg7xr3ebezLaPChf5UAkiFdV1yT7Httb78Eb343JercB7",
  "key12": "rbNhtBJ2iPjSmqKWc14fuWcgkEmfxh3aPekiVHV7bLj2gDiZTaZoXh9ChAKkRS42VY2u6FgJSEcvbywwSd7iqku",
  "key13": "4HG8HA7r7SHPFRC6zMQtE9KdHc2WRDJdAuZbWQHWvipQWe757VMVVTqEmpPqhbW4n9a4aWjWBnC7iMXYkkEhqVQT",
  "key14": "23HzDfL9QJKiix1sd8MpHGyUtskRWauEozMy2ogR9A5kDFr7Pdmdfq5Da1S9w2VnJfJGncZA1weUnXPeLzxaQyNi",
  "key15": "4DZKL7bxD5VQPep93HugveeP7iZDc7F5jZPc7JvGHeQcKh9u6RfuqaMNgeqrfsr9mANL6WvtB2MqvRcRvoYCLC2o",
  "key16": "57zmwEnxzbCUxn36su3vaMhHV1BzdxKqAxJJYMWaMf4dZsAGE2EUTbtepmnBbqiSzAfrSGBBuc7hE7of1BntLPxd",
  "key17": "JzZSApWug2gsKAwUp8budNpusyPdcwfHJBeFSS7vQzJderwAQy85cgCmALGptADE6KJ6uf2mymWr8f55r8FMmXA",
  "key18": "3LR88HHNFufRtXTNsFnemefrce8jWaeFKD6xsdTmTj2HMtRHn7ZfsSYCoitTMyAwPjp5mxnsMFeTox651gqJfcfh",
  "key19": "3u7GUcfb5gJGvPFRuvEp9w6GGJBK5tVBkdwkkxU4pFzHK4wpTNZdQNaKxUsC8Ju3DqR6KgL4DmRvNKQQYGvTiTV7",
  "key20": "4khxekjHnzfEbksCbfE3aWRVXAU5bMQ325AfzYQodaiVxY8LCKDvMt4sKbJsZNUkUZJuPP92qcXTdjPGoS1Dnmnm",
  "key21": "5ajV2RxewDckKTHxXrY7r3q9QTMFphsVyjnGAAsXZg27KJKHzXzZPLxLE6nCsQgYJCsCZPnL2q5TBq8YeqfeYwbi",
  "key22": "3YVUHG2BL9Y8WBk9mpLmxFGBHtuipG2Ujy7jJMJkz45viMj1QLMc7ou5Zapz11r1PWsWaiuY3fxMCpCBayG6HxCb",
  "key23": "2oT9FopeMN1arLZrhBLmDc9cPDictLXjikQogq48ZXKjVBeoTVzcVZD3Acn5E9JxfJSp14232DkdXQnvQ7Kf3EXb",
  "key24": "5QdbRvVaDo14mP9MRTN9EVa1CRjgQ1quVk1aX5LJ4jjRAh2pjPxaB67HTeHnRziXf6LVgoswA8u1ajTFjEjLNvoN",
  "key25": "4JfuWzLECxmeV3zzxtCmRqavb5X8LMZNw8Yh7EJeAQc5QPXwFJsoL8uxagHBkP3pcbDpG6Hata7o1SYyf95ccDFE",
  "key26": "5UmZUTyQWzxe1hMyhMSKRFUUb5aqxXH9twAoFS8fh8TXmpKrByjdexr4SHCPfberH7UwCAwNC63dVUPvfHMUAHzV",
  "key27": "27kLCGqYr445vepsJVDDB16kZS9Lnxca6FnFUZTpy7DPSB3NiLyT6oCqyH2gwvac26gBykZeF3VpJDvdWhK4WgNS",
  "key28": "2XRxsABiqKDoqbPDGD3qXUoZGnj55L81twjjuHmSaioxSNm2xaHzpaHX66HXBsbqN6bqmpW1kKZL8mdLpFnF1YXH",
  "key29": "2AcD7Mq9nAysFvc4wi5d8A5Mpj6nQA5dxEWaHRaZVniHPiRTSFTvjemU8F9qusYixwX1Vh3oZws8TAdiMVXSr9ed"
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
