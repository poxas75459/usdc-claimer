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
    "4HJyyCLUMA2yvow62NLyaRQh9PZQBzpkDJEWuGtqh9bERrqYghhXKgGfG6Qc7LoKjrxBHN3NWz8jUA4nympTsaVm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jKJchpXMb2gp8e8AGKeRiWyTh1AYXe2vWzvShJSSNuLQJsPdExk9K69RoqqRCUGutYhG67ymdA6fnNmatzpYKAR",
  "key1": "5BWseGF7trq24btLmhLd5Z1znkJGphqkHcFU25Vd4hSbSVZUdpyybUNZxL37o7sDh9jv5THpkvLLSSniLZRnoo8c",
  "key2": "4s6VsnAxzqMqSSpwVwSYULbv2LDH2HXoMjzSiowmWexRjjL6o9gcyPbXjqQZhXtLSwZaF7fLoiVjYD9ybfuuQACK",
  "key3": "4hK2CvuAgjqUabmNs1etmznLXCYX17uVKXvqX8AL3xDG7WUDYMLdsLfP2bA3UeqGVa48ZLsQexTY1h2wEctq5HcW",
  "key4": "3Zpno8eUFZsNqTJ79ZsF2xCuJWAQ6ZXXkb4SpikUVM1TSUmEAYmWUW6ipzHhnhBqS5tcwcMYZybnKdtkvgSzgH9m",
  "key5": "mqUQKrViZ4v3xkB9pJ5Dpu1HqAKACaV4VmyvQQGWXWyTbKhJXJgMpsjuEiVCUBXsFnuj4GdTbvFUxj9QvgBcJEo",
  "key6": "4kkiup3WPonqCCchjhtgAy4ZhhRhkgUfmrbEqMM5r3Mwr54u2bPL9qjTV31EVYPek1emwoyR4tvwUxoSx7dBDNiE",
  "key7": "3LQ1prgiyTBs7nQp1FTNov6AGQeoF239pBvwgbQbVyVgNqBRMwKmFJr23wzVDY9cLyXGoHKzSVqUXnVfeuMYtty9",
  "key8": "2d9LMbqDWiurqBfRRqU3yTxfkp7AxKQshBV6m79cLRHT6YqQ9oU6YcamEToSSZXPXXJQghnj99XBUqQfK3BsA2Yw",
  "key9": "5dzEDG1s2oLWrrAX8GF6Uo1RhniM1mSKwWfkUsQYXTNL1QXsKSshbaAsUe5JpbPbps5nxUvSKjj5DZYZ5rx1wed9",
  "key10": "3mPUo22ucxPDaMWSXQxH6ijoRZXULg7HmL9RrkoMbF2JH3SHdv4v8MCyXqtsbddrj7fbMmAaEYgzKNT9qvQAMiz3",
  "key11": "3wnYgq79rJSbxA9y1axKUtaezz99wwizZQTm3CVADSAqYi8mTxTxt5si4iB9eACwKcSpsH193Tt1dcJqPj9zEyHB",
  "key12": "gdruWG4gzrbgVHdk27xQ6MWDvApPb6h2khXeyiwCDRELfqNdpBXHCXmLdkHDUxaHxtrn8qqcoWJ5fa4G3QWtdcK",
  "key13": "5R16CRDBAeNZkjASceHVrSE2yNCkKcVCtgSQDd6Wwsig2oUR8bisNLX8XYEhndKmPqGSEvuaFJLFmZhdNPd5Vh7i",
  "key14": "4YJ3uiRRFamuSa3FieaTnj3xd7TUMW8rPXLVwDBDoocqhPURWPMb8n9uoArp9hZqeZdpiUuDD45ueSw9XebN6KkX",
  "key15": "5GPHSKj36RT8B3qBfjyR1vnqNF9dxr8fbGoQbZDSrThkDrLxtFpzWoFvf3BPMFGzfMorAvA1wz7tx1SLGrxvWfTR",
  "key16": "42AvYqdv8JpQwktTNKV79MZ6GMwKSSnbRDhS2yWK3MLf1jzaxLZQ3iar8ySruGNvUQRzGPm7nhpRUncdRnprEUer",
  "key17": "5d2Mm6LXd4mPgfrfwWsx2ESJ6EHbW7Znjj7qdLkpQJG6ERtrL7K6tDEMt5uKdgckDUNQjHbtdVWByLU453FffDfH",
  "key18": "CawwLjtSHH8FiAKESRJEUJzwTrm9ew1h4TwCCdhwkmaPfu6MyFCT1GJP5VFSLgBJZMyphkeDvrUVYMpgWQYqAtB",
  "key19": "4qyKQ71fKVdhaznh3peQaeg9qQG8DfwyLSTaD8BjApy8w1XbfQ93wnV9h9J5uK5Yh7Rr26j47C33Z9RaRBbs97xT",
  "key20": "54p7UJsbwYcy57J3HJQ6pzhonqWjpB6gqvQLSi5ph7xUtgC3rgLHp1EjSU13S9qdrTdi4mxii1wnjzYTUeYMCV14",
  "key21": "2XgYtJbA2n2LZH5Jpw4i8RKqiHWDhYwh2hLNchBw8zZ5mXEeLwCxprQmUC9y3iAZEUoCyNwDTpbLoYaBiqdvEUD4",
  "key22": "465KtQriHyGYRoDnswU41mBfZMdYoEvMyRCYq9PdoTieaHc7hZ3GErdx5eYBBTeEyDmiosQ6oGCtWVcboK7L5NRQ",
  "key23": "G9Z4ZiKzL7hAshgQofGuhE2wggowtMfsHMa3uBkzNKbBawmrTHGyExntwyG5vBSttiWS9vNL2hWrrv5yhKZRw5T",
  "key24": "3ZJTZUjaghDJGXWSSwm66Cs4izVm7UJQkySKh41N7vwLsgUFnaUKuE6MuFrbgbTBtikYpfe9F13xwsGt6Ar6nRtC",
  "key25": "zWi32qMpYxWZ7ZTvB68hiRmoGPPKZCktBWRb76ijdCx2M6A8udAgbTfQXoVT5sn3PE3TvsqWyL9Kaq14JnKux5W",
  "key26": "7dQJmTGvzcFXLxkpRocLNyN1zx1gMW6jvN5mrWjFQcyVdrvt5rfVbY6dwDqbRXU5zGfvPypfMSmCgFfGuqU8H28",
  "key27": "33MmCMtV22bMtbQQxzZ4THugzmQF5SFP1YV2QZphipLEHaAFdwtgmUo3dgJBWspbxozDEMyyWf1i7isDUmziu58M",
  "key28": "2Aa3M2pP5HGgCM3LuXfsF2cv2rq5ZJFAifUQtpZ2AzRtguNVucDKDjrzEjY8XexRaCRMXAftBGjqexbqtwPkD4eZ",
  "key29": "4zFxVLxs7diqUHGYLYVoVBMEE3dREtLcPR9nCi43pWuXoNAJ6qKXTX33JJNJLJN2mvWZDwQUzZBSPa1TuozbvzCv",
  "key30": "26rpv6P7qe9YR1v4nFRPC73E3ohkVjCoVWiD2rfs5eyNRjBSrXeQq48YuQzgJb6TXz8QBmV9b6iguaLRZcynurCP",
  "key31": "Mf8PMe7L9bDjU2287iy3ZoKzarsetBxqB5GbrvCRaKaLF41cpx4JtbiEj7RRswJRiy3vnqRHj9i5diUH9YhyTa9",
  "key32": "5afpCi9GRZJV1t57WnPZ6GLPViSDxoBPLMEqgYjuzf1H5UsWU19YA4KfQDyy9r7CH2Y5iWNPu3QfKD5pu8TRK3UT",
  "key33": "2HSEM4aXXjz2fSzVtTuk7bPLJc2EmuDAD35w7AJj4gBbKU4eqGRsf51ks2Rsw5YLqHJjbhZTBjZgMTnsrmc1ArWu",
  "key34": "2mTF6zomcywU84fs3eWXhEawEZjJL1g8faTRWArzLEamrfazpLY7e6t6PN4HE43GZp1r4Jj71SpnjXfbfbwdjX1K",
  "key35": "49S4oSp9WVzjnrZ719FyvZXxLACqVX9ABe2Z2cfaukHeAhgAdLLr8eeM6LgAhvaUs8ogptkZbikoB71HnnDFApSD",
  "key36": "4Eqnk2j9qG19gpdo5ogWvsxXcneeNBYHA5AQep7xMGbZGV4WrdAzs5fdAiDb7QJ4YMwEgcx97v8W3kwDjjgxZRQc",
  "key37": "cvtQmWeLyCuVaWSX6ZjErGE5oAQAC7aWLorJhEA1wXNiwyZMGNiXC3CJHTka1wt4m6y9MnCNei8BNtLtvQMWxfp"
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
