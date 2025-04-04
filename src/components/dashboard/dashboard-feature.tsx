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
    "4AgKt3mQ6LKUFW8VVnu9uMVWi13TrGTgSqsKoRa3xfK7JTVquW61RApM83m6K9gLGxBLqY6KsAjQmWb7MvH6ko5k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BPyPPqw8y16JMAyjBfqDnHRZdckJSVtfRayC7k2bf3MfuqCKoHvXnbMdR1dwNpVqAKXas6yHbvJatoEKMJhzwa6",
  "key1": "5gFya26mFzsYcXXRfJzKJY5WMEKzRhLvodxrMBeytRz93gb3WCaiSTubRFH7MWjCkT27HbzNTi45UtxEejMzJGuM",
  "key2": "62Qsipqxp9RXiksggncrincpLEi7cHYKShXMzLng4zL4JfPNKB83rRRmb3Gb22YBPnsokiENz9Fqwja5wPdJ68P5",
  "key3": "JmWAZ2qvgzTMHNcdEEGDBkoGQrBonQ1ozyjALguNn2bVCZBfCjrL3QC3ZSGH9TnMT66jAk8TFeLzUpmjkrYW5E6",
  "key4": "4JsY3EczH268HuexLDfwzNhDo4X4TqYVCEQWssUZHn3y15AVXBRL3hkH9p67hcSQcu9GUmBC6w5KStBY6yBVhbLR",
  "key5": "2Dx1HpbpPGwYgYihKR7iMTXiJP4gTTmQrb8kaPWpnuWXYMPVShzubuWBpZDWtJkTaRzCDnoD5QjLbx7mFW38ZBdP",
  "key6": "3k6Kna4893QyyAfJ5BJMEW4v4aKUbv964S8tonT3oPFssNLo5GKJbV3SQxJuDtTBRRCS2xsTvdNqJYYCC9cWgLAt",
  "key7": "4D1W8cEFqSvF6JMtF6DwHvWKAFnHfMqKoqyyc9jycnyjSUeKM2rZAyMtLWV8gHhhg8z31cpENTrHdDYEKSL1N2Xs",
  "key8": "4YjqZ3Es16N6uQXnnMhYGjFp6ydXZP5Rs269xemay36N8tbp6VnuMkhvYfwnkrYyosz9eedNz2WUnBZwyK9Wg4vJ",
  "key9": "445KPkcjcm2doUEKFaHw8Mi6SeAKq2jmV76cYKQ7vspj7R1eTLoabAaJeJxP7oYkDXMZFvTFWYSMKVjpghzhtkXE",
  "key10": "4HzgYcXX1pUVxJ5GHAksPyJCVuxXTew7F8ZCc9FpNekq5Tjqp3daU6Q8BRXkWNL8Rm28upPnee5W8G3vwscnEoQX",
  "key11": "2XAsS2RyF9RGHfTYjLD1gfRnWDovZnvCAkfHTfLTrgx4A4WJMYEaFLAaB2XwwTWKQudGineRyq5d2uyh5yF3V8p8",
  "key12": "4ycoCysoPWfBNaei52A1JP7yLdYsTg6b6SL9Sp6DeSdTva9JWyANa9frPwUaThX848n43RbwqwSeVrJEF9FXR63N",
  "key13": "3eTmbWhAS5b3BqWx5bFNPMxVmyc73cVc6RhubGr88NbVHL6G2iEASpnmJLq1FFxoVnTvwjTPR57sh4A5mxRmtabh",
  "key14": "2c6TagtMB2uPqXftLocnKosKJwv6Z2qp6bZwKuJr6H6VviJnMTiEyHdBnwATbgErMTYnnCrdZE7EmiXW1iyDaY2J",
  "key15": "5WLyLDvS4tQGB97YPkS6xp7VHrDCgMJJiHKqfYiKEj51Hqe5tGfyWXhZ7SXTxBoB4EGZSQavVfJiTtpdABBH9Xco",
  "key16": "2sZThgvcWNSxPojRhWR9fLVWVtzVrx4dSM7vpuNpVSHjtrCYzCBPmmusRnPd3KraWGtaTNsnTibarAXqNNccEy8J",
  "key17": "2JrhgEnvLYk21pqDVCXup6mkYSUcQCWGiRRaufh7TRxZXgbHczmwdcB91LJFFG6uNX6WRRmF3qErvVb3FssoGt8c",
  "key18": "4T7xXamFy57U8trMy4SEHZcaDeZtK6fSC3hkQ4G3gM86mtCeHm1kXJceGFN8CX2yGaBgcaF7zvWCAxmdMKAaJkKE",
  "key19": "3wrvf1M3NPpr6tG8wPANYzLZYDfBfCafdRUbLye71LTF3S7hg4UQqgWRHM7Xzk5MmWTX2v2oAGrrB7FzdVsmMLkA",
  "key20": "2NW9VomgoBnvqK9YikXHb4ygNbehg6GT9Ftx1RmSdQN2AaN5X2fKX8kksio7ZEwp1FHQuCBpAX4qTcCfavRrZA8w",
  "key21": "2CmCFMZ9sbGawaR6Q2m6N7eoE5hRP4VjCkABq9SZwWZL2DtKhGLzThZwTsSS3VsDyLbb3JkSaKaHsN1xdt9kHTU9",
  "key22": "59ThKbVDBYgPv8SsiL4YdnQFdEMYbcaiUA5YqLDF2LXeJ4xAWR72vzFV11WwYdgREESah2MsVi5zLwa8MNrjvfGf",
  "key23": "4qGneWbykexCAsWx5SMiBKrxVWn2NcB4PhZc812LH7sB3N7tstXj6yXA3dZnaJyye1boTbxxNDrQeFnT5MqUMvgd",
  "key24": "5ZA2UvgajU7Ukir4YxSCuxA879Qnm5mUew1zJxSqeUqKfjxvWoz7eqDPLcZZjUWktapix18ACqTxS1f9ZjsuuUvC",
  "key25": "63EhJj2ssPtnPWygCWLgD1bdR67eY76x8mpTPsrRP8o6hiFonZdS5h7tNSCUjt2jqPrvhQKUjAvsB33zfZiFCNWc",
  "key26": "3BhvTYMxund1GLkWHZSnrkXPpYUHmXC9q9onaReHYNnhHS7fv8izRfTVeZo1ubUf9qdZmKgJgAMo6xkrm5tTruv2",
  "key27": "XxwaY1rxpYgAXGNaDxatejZ7WZcic1cBKGtRfs6pQ3tYoAozVWZwgKSy3fS2F5gbMguYQLqm9LEaL6trsJkafDf",
  "key28": "5hiey1bNdERPyQ8FwX7h7BTBBbmF84R6m8wi8Vz1tSVi1SSuBCJbtn8j2ToH8deEeuKXnpftVH1JhyVDK9CFK1GC",
  "key29": "5wFgu41v7Ap9SBqCNDY3tWTdzgBLkVT4ci2LZDSGFWvxH9WsFNJ9NirxZ6NFDxBMFC8cg9QpQsJb1vDuS8eM5uvY",
  "key30": "2fYNh9NMqmfDYsF1XHEB1M26NhQdb1VUMisLHFLzuTtd2dDLAdKBJ6oEhBN6Ar3unsme5aP2CNo8b4YRc5HHZZWr",
  "key31": "2g6nkGUrsphYCzeQAaU4aSeH7ufUxRvkZq7RqHGhKFbNBeu5kdQqZ7FVBAQxttevmKJ43f7tcgL2TcGFCoh6o7yq",
  "key32": "7Qv1ZfxwifaK3JFGti8SAyEhmkFTuTWsghH2No13kk73JheYQKgKiZ9B9JduR2xTwqvt7JEYu2bpg9vV43GP3Zy",
  "key33": "42dz5GYtzVyiByoqQeTv77L19K1bEJDamrzJjSgG4ZZkPdpLag76uvtmgJaqmcKeXJs1PJUG3FPBqmZgh2zD8BPB",
  "key34": "5k118ssvstfp1KwPommAP5x3PK44toxEXyQFg1LenzHchxHFvYyt7ArozT93ckMyf5zk8TLRvdijX36eupEVZaLJ",
  "key35": "2tavEcaFCRZzkkrAfVe9m2iKKJXHJENyCmGdBHTSgwja2qJ4sWAHDfzkAdogRu5NMsE5gKA4Kc55SZqLBoZiREur",
  "key36": "45rmhjE6hPaV15Vnegi38Zmh4C49usSbbxrESRZTg7THsFkHYniSnnbxde3symZgNFQro6M6iWgTaPELQu8V19WK"
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
