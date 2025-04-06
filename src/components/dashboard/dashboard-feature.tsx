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
    "cHDGe5vtwbmUxV51dwmfZ3rmC18kru55AkZwqLKQAnGjbphKFDKUBoRS4erbiEfunQeBZjoHWPJPkawpiMqzTfx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gzGt4ya5d551e77nJVtn2T7V7gEyfi1bGdNwTHYJpaaN65ArxaU5MijNVvdcrWq5uJSxgpnqsMXLKNnbDcLQXLR",
  "key1": "3kZNMMoPmKhwz4vHYt9xxFPp33TqeyGuxXWF4AVKVFnamRexL6tiWbXYpmFgUEzgW9njwur1r1pbgDqj35n6AFpq",
  "key2": "3qmPYK9ndFay3oNmpVLgWA1sCWyRE333HBfcxGbXpEBZV8oPhoCKNvco3Au8jur9j5JPztNm2tmB5ogRpxaWbB6v",
  "key3": "3ThnUHpcTQEYCgJWB75N9FahbG9G5FKCEAMc4kbjNMdUoGD1rbfW98oGsPWT15DosqsjZLjWiTCZdma8ixjPp5wi",
  "key4": "3ZZAY6MmisC43X47fc5HT7p38skPoAGuwdQpJSeypjxEf6BHWjgZQnxngZaNjWXJYSNeBMuQ8rP4mTTCDQKecK9L",
  "key5": "3jkNSH4LxjVGaTuq2y1Vn4tEVUXwJ1ozh65AxbUAftrLzbNt2DYtR4yoStKXsH2xhFuVfBwnGPpybW34KfaAeZLW",
  "key6": "3WhSXenUdoC9buz29Sr3epQQqrDzfpysj3VW7CafQmRhNdxb5YJ8L6YUkKc5RbAhWgRH2ms1bZTFyagoHPQ38291",
  "key7": "4hGEjZiVC4ErUsMZFJJhDDZmshuhWcPe2S8ReXYHovAitnnyvAeBjESJk1fqvpB2RxJFuVUC4AH8BF6Dd7DDdTj",
  "key8": "3G8XNUwRdtiDuK8vPN96KHNvLoGrbgqr1WNpaGMgnbnN3srv5t5xK2EKGny9aLAncWpDduZDGRz9x1kiem2kn9c3",
  "key9": "wBXVow5azhDmjV8SvvNsRDJZNhrdUX49yiJfdqPrFU74MUGMhWyLpC8Cc8JVkcsqLgt9BoUf3rmte6A4LMZXRKi",
  "key10": "2guNz7teg4Uu316x8nMZgCdsMmApg4v1zv7XC5uGytNkYLrj44bZs5sFCmsz8e8KbrYEpg5Vhopvfy3WQ8U7YpsM",
  "key11": "3YfHY35HFJCcJPEx2nQVDbbxcKibFAqpq3pdmM9Nocg2pJSCAPzjWjp9oaLcjRhZU9WqNyBUyVV1dcC14mS21GZJ",
  "key12": "zouZ8jAsbvLdTDuaoiq2CJSjHKGgJwd5Cu2PMC8bN8qZktACWqwb5XsWDLJFgwx1ffQ34Eox6NSiaHNSVwKWzhc",
  "key13": "5t9haqrc3FqzcrU5QphK1vpuLrPfg7gnU3BGmP2L32cQjv5efZha5SBwNdu6N1wETycDDUQgZaZyPDzLmxtP9fim",
  "key14": "r5GRBx25bSZNHX4j3rD9jeHemSh5CTJJfjhAa4jawoCiigHaMLtAeybHBqK4LpuigpHmceKiU8VmQ6gvnoaYANA",
  "key15": "3Z2MTv8yoAhWTZJBu6NjBnkDDbKFN7tqkwocJsfKsMYmSRHqSueixJqwURV1CSwiqK6bkx3QSvymMwGhLW1kGXZB",
  "key16": "3T4StEpk3sVpH9CDM5a8jdeaWJv6JYUz7RgZmq1pqsJptDisEaPvaK2UsXo6YTyfNe42w7ststLUe5nurPKkhBAb",
  "key17": "5mULnpwKC6DetJGRJ1TYsovT9Yn1CweRQUskZGBXURrZUewi8y5AoUPqhB4JH2XWJbA6qWBD674FQ3eSAP4PyXKg",
  "key18": "5kYYM1FHy1PPFuQi8fE9dV8Pettj8ud2vY2mLRrBxUwvQcmeNg3D1tzrhGRTuJ44Xr87wMLmcjhj5VvfDrq5ayG2",
  "key19": "3szBzNfQUntBQkDNFSgWfipWxtmwstEeuyc5kYhUPqfgS4JMBPFocuQCvsX27tbEKdN8WPoTUTcEJ9KwEyh2adUV",
  "key20": "3GFW9yWNYhWLTDYjY95NhqzHBdRDdE1ZqrrcmnuUkoNWZwfuTeWEwcp9rZmVAvrjVtp2eh8j2YohjeQki84subQW",
  "key21": "Bfhh8F1gTtrdzvSrgT3rdC2bjcHX8xp8R6QrSLatxd64zTkKshhghNMN3QmRfETBfqtkCHwCgEu9ZZoKTMxNwGx",
  "key22": "558S4Bi1dKzpMBS4JrAN2tPrAwj5NL4apsp59pDCo891pzjJFSmbqtfVhiFhc7R3pFUoEizoMRN216rrBgp2jpsC",
  "key23": "3txjyNff8kehURkHT89ub3kd1dVQgFsmPjQdbQ8qWchaVgPFLxQd9QL5ALSx3SkiwPdQdUULbqZr4fTVsRo8gUL",
  "key24": "32i19PkX4j9PU8iiJSqfTjWsudiqw1TSo2ARbNwRkb5qbbp2JWZSxc7mAZJqFP5fF8F5crE5obe1j8BWg3JpEcne",
  "key25": "5cajDBWmE5PePfvSH9BtgN4Tmx4eixJXBT8JvqaSL8qyG2xHvU79poJPiinfQSgaE7Ac1wjF5z3N3vzRDtBk9VrR",
  "key26": "sS46cr8HEw5eAVDsNvbDYt4s8HXRKQHLmtc2uBpGtwNW8wNuYA2EaFTKiCzwSZQHs2MTNFpdVmqxK2bVkgppWCh",
  "key27": "4wfbG6UAZg8ea2uQcQKZm7mQyHf144HSSWU1jnsM7v1ypwcr9wh789s5djmLLS38sWZRZdsT9ZEKaQgUBkFKPg15",
  "key28": "NWaSGGF1HFXbkuv2GiK8JyMc1pZ6MwqDhQoHESeRJsjypkE9bZB1x3ZobwJ8u4uSXmugjLWJ7vas2LgFQT5hRpx",
  "key29": "5CqZXjShiRp9K8xLskeWkjtcrRoyYTod1VoZAomFYvuyMko5TPkUK5feCjegbU63JYH7EY3rcokgfBWXLjFtTiqq",
  "key30": "ezQ7fapK5rh1gvLbAjDD6xn4TbcaU9TrriENYXTdJePDgXCwALnu2puqRJ1qAtrZ762dMn9J7NK2mpk547iUKmd",
  "key31": "4wCHLSFrUwTFicCM88ZvhNdLc2JwwdvVNd6SEd6RcpBwN2voDpgcCBXoq1DsZNJCPua5d9Fw2MyVJjanBbo5MDWV",
  "key32": "TGQfz3XcwGas5Vcx5yLBoSGQRvb57JgaUuoKxYNVMiQaZZZbHz8bSTf9NipNek2cyA3JJEKLivzQs6Jgq52qzmp",
  "key33": "5NGHEQUaSNoMcgGvxHw83mA2daGwDxSwcCKZRRxXMMKAm7QgLgqN9FXPbY7oNqMQL7EqWvQ7B9qfLRs4djDYAyW3",
  "key34": "5Lsxa9U5FYFUDE6J35dRa9VvAAqnoFxTjomYwFfrHMhQjktSmvyYNYmZqZAujkCA35eyVgNENeBPUqzbV6eMoctR",
  "key35": "2U52TKSWgzngwvyahAaa882pkbg29uEYvWzFr55NZaySmSef3kD1WcQAU9zW44hqbqxZNFAQibq9Q9wsuPAZggEG",
  "key36": "3nzjRxRqr5LruYuaB7ZZq9Qdj2FpTLfgUrD953mdNde1Wgm2wpRfeUK9BSDE7F4MvAfkftoH34sWdvG7yyEnFkWX",
  "key37": "5sr5KXs3YBLjaP6p1qZhVQYLpfEyuM52phe8dyAjxZ1i7FPH5wvDzvMLWDuhqqH3RFMVcbxUVfH3vpeSLhCEJgQG",
  "key38": "rdW6cN6nVC8crh7rqv8n7q3j8on7e4o1zf4knRB11cschkDKqSyny6C7Lt5kMqTx5hf2Q24CWTnQ3eWPyMGzAQ3",
  "key39": "N8VWfn9iMKEtvkh9DJsZv4HKTxSpSuvhctHLKBkzxSpcvPU5SLNKznye7BgVVMhH4ytB9G6X2ic7RTDtLe8yCge",
  "key40": "4oVZQbSCyhVVzBFs6bNM3g4mrwXCRQBwtWzp7w7QnJdumBwnLGHncVGW7RU9SuUSbKJDS2uoNZbxLmZsZhY1e1EH",
  "key41": "5UJTFY7ZjyJb6mZyttoB5Ep2SGtNH9k3zMkznPhVvQ9mDNHyo9J6MAReAmffb9o6uev5iNeftY2Lze6GYcDxgPAR"
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
