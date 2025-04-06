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
    "2weutbjth9VGyieLrsib7d9nGQbMZZ6bCL1ChwwmW3VSENmod7s9RZc78BXujyJfBPMqgimDb1XYgtMH99Cbgx2s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K8PpLkfKLWS9bQya3SZKnoR5h1CaRNhy69p8inJoZfQzvb9PkbWQumYTRa7SV1eSpANfhtCLMzPncKoBzL1RybY",
  "key1": "3n7yZrfbjtf9m7LB5nQavvJw7GDX9r2YsZxj4qrsHZuReeEfouHbaV5ZQ31m8rZiNoyXZuJeneDTcxR6YcNeqKBc",
  "key2": "2k8q3TvdK7f2obLtPGjFygYJiy9jUnAeVng4bVvSRy83Wi1Ma9Pv6FRYY2NNvPcAs9LPxkzVWgQGd7Xou4e8EQTA",
  "key3": "3CvZ26hZFsa9qMKsdPC3t7vyPuYchH2Jfva78ajrroemapVaQKgGgy5JqfLvLRCZiYaS18h7pcSBPkRVJu84RBdL",
  "key4": "3L63LJSZuRjyccDb12n4GpFkPLNNipHaXsiGdCBcBavJiLMUkewh3NM8zosckd9NQvyo8voaF6a7W1nYGHmjPkVq",
  "key5": "21PV3DfvrugyZrGdX98Zp1mD4YML1JcZuQPobX7Ktnz4cUNnxHDrejKwdayBav8sWeyhd4rtj6DkyyrkvKL5H4eu",
  "key6": "5xaMKgrwAyUTNbPJHKRNso84agUJbKMwBZrPo52vixxECefgHGUhBs3wB5diJU6QQGrLQeVqFYVFmFZQr5RN2Pgp",
  "key7": "P6MQefFMA5oAzqibGfMxBQCvnsjknnJRQNDzHJWFEySjGy82BYGNyvpkEJf6Vh9try6KHTacJXex6X2VTbxuKV8",
  "key8": "tF4W4Vh1VjM8e1jUvriNLWTCxEZPqv91wJ5HhztGUBAJow1KLr459SzjrGGVyWS5ZoBUaeB5JtCGq5J4asVfJrz",
  "key9": "21paEG7W52Kpgi6fw7u3tqjJ1DGbr2smQWRKdCthu96p221sPDNagKjrKBKw1tvmcDwjixjTU8EBXj8PpQrfbCrn",
  "key10": "5WKNW7U8kyX9tBwRPYqsFbuCJsuQPnYqKY1Cju64hBiUNqWCLGSEWCw2whEizHphnAGgcmofiT3oXSA8GosYH4nh",
  "key11": "38pqJeWTiqH9J9AT62toE5daU4rYcNv9Satac9RZciVwon1jKaF3NESXW9ByYQPhMMh9SavbmGtwrPngaoQpLRE7",
  "key12": "31gYoi7iK7vbVd2awXvUi4fYK3Aut2mRCYy6iLhsy7Md8tppXghAb1nZj79wZ7iTAiHdAzzAoTZAkHnmoCoVBtvM",
  "key13": "2WzQWjCQQ2P8V8Rs8wxNCHHP6djn8JqemMir8CyLM48VaMK9qXA76T563t8fFuYiY3QyHXUJhXTFhZegQ4YoNXFD",
  "key14": "VKLtFHk64XFDn5zbMKRyhof4jMzJitLe5E57q3FxjvdzGRnxCqYo5TfCrGZG1WRCC2xnhZ51j3s2TNXZmVQ5tPB",
  "key15": "yF9JWVVC913iykVVkJCZMdtGE8uU5muf1SfncHivMcNu3rQvJRwt493pLQAmskAD5MHgEvSR6rVXdsdZZuoySCJ",
  "key16": "27AQd95gFYH4g1grMQXYU1tomn8mJDogruZjtgzEkdBHyGMxX1HoiTXpC3M32UrKE3WsStsqA575y4z1pYJocEVw",
  "key17": "3P2kuzxMLEUyjHp3t79ZeE3LisVj37i4avS8hTvbUx5Tq9AZyFqUcmKV3XFXnp6cKKD929tkVfbPNJYeFpL4vfve",
  "key18": "59iT3FVM3wqphcEbpg73FovHEWQ5QJZwM7JJyaA8F3WDPkVsu2UMo5bGdnYYuh6DeCAbPXbYDQyp2NpqKMTFDji2",
  "key19": "4CcLBsaznygKRJR1WPFDwmEqg6qwDt6otLattX6mHJBG5FBj8Q53uQDdGX1esgvj8JYrvyz8aKHRSGtBx2BYeK5r",
  "key20": "2G3b4rQffdiZwEqLaj5qAVMxVmQkpzejbP3cfBdhskGdArxhHTFprwNi7JP2VUMtSsaPiQmfW3o9XHb1BbRLW59h",
  "key21": "R6V1or2ZbJXM7XZ6Q6mbeYjd2ehzzgpLxRBBiToWZT6n8v9djeGvZeApZHGmkwDSty6sdfqN7kctUff6AMVPGrK",
  "key22": "54FwQkdUidKJ3iQAxioKWUgyPP1b1Fkc8841Z3Gu3a6cKiFBgfrXU45gyEbsLCWDXYsDTJxwH6FPJz8tykWuR2jm",
  "key23": "3D9zHQm5zKB2QWxg6Lm9kGjsWbp6sLwcV89LLFi957B4KricwpXbb44HKXfM2RY2YMSH3HZiHmAPoeam8xwkfHnm",
  "key24": "4BAQViaBdUomBBm6Gnm2HT6BemnsuNVsWsTZBSDB9ZbKDgry9iJjsFtydNgfwsfLge5aygWytPWK7GyrQeaJPFzA",
  "key25": "5zmMD2g15nMUZQocLV3V1jB8nb8YXVjYpwxJbbEuXCxidP9ZD4SLEfHDFubw2dp7VG46xPcEL4yE5jrwRS1zmf9t",
  "key26": "4dYTvkFtUUTo6QLA4s3JnVY3AbfmL7e8SDMwgpTpLYTgCY31QxhHbN7g1kuoDv4e9RG2sumbPG6n29kCYbtznBc3",
  "key27": "G9Xxyc6xUrWviSqCuz15tczza1W68TfZ1YT7ZXxxkbNHTVXKoR2Ce4h5daauEpYsCneRwC1YgyoHwz9WKJQG6hd",
  "key28": "2ZcMxXkmvRHiABA8WDaT2nvPHwmdrJbkdsGLps5Pu51d6iTL2JLVpJLYitCq1aRRVV5Reg4LqM1ym1PuQsxtvNPf",
  "key29": "5ixNmdMBUbDyqSyU2RrjXxvvgrUXskLpzm944ag37eSggv5cqRQNv3GAFW32AGPLn3G2TRSvE3UJo9ySqb4cieyp",
  "key30": "44juzLxxz1QdHannDErja1x7g2NCgo3oBHESAdprbPugoCQfQnrv52bN2ijJbJk8hRejkb9Q5sxHQPqjJzWRer5M",
  "key31": "jjgSDNavhSVtpNxSZZFkgcD2CW9dLE8Lc7ozPz4mh8CVRvHDPeHJESYw5E4tB2D8cCRceDcsVocEcCw8Dm99t5N"
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
