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
    "9hYZnK9mLrTttwL3Pscac1jX4HKyEnAtSrUrgDxYetYc5g4N7mXs9JeRzLPg75hnm4wy2KRTc5JGYQQ3ZQxMVzJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G8mmcZQKfBXu5d94jofVBqWRjU1vKER9YKUSMRqCXfJnkU1VP5MEeic3nLKm8yyLSBXhZoHw5yd9xZGuU3ZKhao",
  "key1": "RY4nPquG5eCzanLg7kpBnqFQmZXkUHP2C3hS7f2hoDSpJP3keQkfEBoh8HsmDpr9wwj5kPmGmV7QJDebQwpXvbj",
  "key2": "3iaQfD59QikoCCwB6kwwCKKRS8ay2kiU45AQvaj7Ps5W6WsHqZWt7bo9vj4r5TkR45pMUypzxfcG75jv8avvB8kD",
  "key3": "2Q9UgjNo56ViKmAZyCBqLxVzkReuz2q55Uf7152zEPUjrNYJiLQ3xiJyHbvfyH9i2GAk522Fzt6WQsZcjFfhziFy",
  "key4": "MbSM1QRMXUNycYXAdsxqMGKt5T1TsEMtEVtjK4V6MybYDAah7qxhQuA8GPYx54QX5xL38f4u6EycwQ6n1w3gFZ8",
  "key5": "gMqRjMfCsxUScd43mZcMfxs3FkV3Tabk7rKuYhwuj7fgw8vRaKREx9Gm6BoHopsWegc3wWXQu7RwTJu9yNeCKzU",
  "key6": "3dmb1hpyNSk7rMm18g8SwzzWqnbBMKVF5BHMN4mJpSHh19isGViyJc328TYkyZk7PbTN47S7AauASLrDnZHwDzrA",
  "key7": "3ZFQXQXpMVhj9VvPCC1npNvgtaaxApUduNh42ExmG9b3bKPDRqWxAAUbP92PpDo4yfFzEcQBSDBBEhnTiba3FY6n",
  "key8": "5VZEY3iq3noUXkQgFzhWHYZGRaJNH6iW3zWfZQJhLchBcnoz3pemKNtMP3fvCtjP64bgZt2VRnFaXJVbXrm68wbc",
  "key9": "4pSXUSDGnok7UfMaLfeKKxtxBNdCE5ZeDyntjQfF4kNxM3r5CQwrG4G3b6uAjxusHEtE3wwYLLJRfFwGxZv4Pfkk",
  "key10": "ataGrBHNhiGa1auQFBB2BoH696VeCrUW32U4yRzCgn5B3zCKRo8yYEtHYnV9DT66GN2Ef7wA5UWJgx58JJ3kfMZ",
  "key11": "3ZVQgVMPeb3ws3bvJsUcai2JHnzGwtgvbivA2bQ18hNierCZT1r444M585K2nTY7LvhF1DxcGAnrTq5CAzjSEgsD",
  "key12": "4xFvyd4xXidi3wBmAGgsAEPsWMThBhTkKVCqUKdFQgqU6pJJTv86RnXrsfcURNEehyrE4W7aifxczmonQn3mWHQg",
  "key13": "3D3tNpBxZqAgurYBX41AJd6rcb8KDLmnY5MAXzFCjDmzAJaAhhbGSGm9tC2vpdV6fAqnhwiT7QEhMK8zjVRp4zs9",
  "key14": "3LaCbWJ5qYypHHYtmE8rUCfmWyYCQGeZJ9AqjeSk9dggQaMZtyuiNFY3wuGLAUUAKuBBJCzbKMjTUAqqAgpb5AAZ",
  "key15": "4yZV2ZEMTX98tkLVeRMAJSHnkJETU2k1j4wPKr4vMW1cqQj4bHMPb2psGAeU9QDcMAxEsfv9e5iJKzvyi3Ye32Zk",
  "key16": "4nrwmsKA6EePKrTQtdJcU7nVtErRyZ7sS7vd3fHRe4o5iSVZuxUmk6CEFt31aPGxzgWt94er2xjTrcWFj1GoX7cP",
  "key17": "4fmJ64RoJMvifLgt6ypqYSKiSFi9qSsZrmNBpxvEUsGV9ft2GeTHvbLDTvUhDepUW7ymSbLveyncHw4NGYXxWTQp",
  "key18": "ycWLDcfjxNTPPJQbjzYyS68MRcBs2G92zh5FaYcs8jmpogCQHd98Xd68ePXgZA4KpVQAHumDFpxPuzj8BRhAYtE",
  "key19": "4ovfmETLM7DJw8AVH8k8AwcqmUREcHAUq8jXKFWwUpF4EdpopP6oHUKSQhR1pgK3HsSfV17sAJ19PRtCw4bhWHny",
  "key20": "3tErsADWnct97FCrhfbQD2YeZ4No64asambej2AWzYw4ZGXRgZJU2uhDRsr5vZ3a5iu3mXZJmiKjtov8As2eiMt2",
  "key21": "37s2ZXyWLzTxcyHWCKYrD5muQs5PX6BiXT3g2BCSQdc6mjeNtx34quLoQBYdToZH8GdpJuqTWCEu8YvrcnEPbHXZ",
  "key22": "4aTgXgMensaBmmz1XAvDRXwMw7j4oupRPqGPJPXUGHbezN9BjMZgE9yv82Tvuy2kGEyZRmsF23aUqmM9gxTRSoJN",
  "key23": "4g3aGztqJS6MvieFPFyK2oenL8NpiPinF76wnu4xFSbgHe9m9WHryuykTbSCVony8MG99oaKqh8PLEysqVLS3yyn",
  "key24": "5ci7MJ8wWB5fmfGN4MSrHNydEoQrbSetDPT1M3JCoYMWzaNtyBoPoGdVHB7ou7SDPeW5HJY2X7HQ49Fp8ZCehcvC",
  "key25": "5ZLLxUjwLFVNqKkLtJPRQ2ahHZVqjHVfPTptf4S43ruWqGi1mLaQ2GDcvowY1jH94pMxQ6WSqW2yoQfPUefoDtBt",
  "key26": "3mYiuSCqV4jKECyCceu2ULXuMrBWrxdmkq3QpEMEzo4UJtoz52UdPSJ3Q411nBzVk1ZGFfhV4FfpYSp3G67eT13q",
  "key27": "5FJGPdXF5Wzv7EM6SS1rH7s1N4NHzSN6onevo7HiZVqaEsbwgJYyKEQURKw8hocrt5ivcYaAEWhLQUfhdoa7ep2d",
  "key28": "5mUGJ1Rxx57mip1mz8EMFXu3mZZZVSUBMSv4M4RKXw5cmALDACMZgZdKHTTLma2Ezcv8syzRLcH4Ds7XwzguPb9b",
  "key29": "4F7jVxYFVxPvnbbGHyTc22oaxPjqujG522bbBDUAGPvSUgxZ5iUBdSZfoXvLm2xVWMbmgkjRwQoGfCtrNyT6r1TL",
  "key30": "2Eo8ihHVwoxhk2dNEAYZiX7KMZ5NXyRqXWJiFLWXML9pTuwfF7Jfqyb8Edv3FpL25LUbjzdB8WEiTHNoGYG1L4NZ",
  "key31": "31GZivtKK1GXss3CcmURC2sU4uN557eiBihaXVSwXGXDVTkQ8AbwjuZWUcS3R5oNh1xtCqWxG2wiEn9qNrGxF91s",
  "key32": "2WGpaJtGpUasXQsvRpWuUTtc5gxWCqtFqzoLA8cdUcwRpCvwmhbYqcXiiRbu4uNK1eojeLXfdmH7ybKb1fGFMoG6",
  "key33": "3QYNb7L4Jfwkduou4WRkEqJB64PQLUnYYDN2wRSzZaThypw5GotSXJM9jw4EqJQu581M9EeziovwJUZd1J7DsKbt",
  "key34": "2J2WeQiVWAn2bss5CsDnhsNUX4gHbTpNf89dkzNdigu6UVnL8ep3VgZer3iFVKZNkTsQbhEufXDVUBtHDEUT3sjM",
  "key35": "5NjTnuRo1h4EdDu1hBSNiaRNRw2szG5LCBoZDVpDEGK99s3xo5d6qcYhCpfqdokD83WoV923RLbgSft2fyrDvsgN"
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
