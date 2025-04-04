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
    "4sE4JaL4hEGeRzWuss5E8sVCUpJrx5eCfSjXjppS8BxrP6Qpmm2D9t7saQPV5ciWpLNcBJL6i7nceveSxdwkbYmV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tA2oevLQh4LqxG1uumAUP39z7YhSFFVV3tK49kziV4AdcyrazysEdYudqpJinkmuYrmWEJbRwavs1rt3iU83RrY",
  "key1": "4hhkvfxt5X6NsWoNfzQLRwSkW61VT6khXE3B4WHCVk8g9LbDT2Sja5n8YQigQGXbAz9BEJdssRE4DxMm7dkxY4Zb",
  "key2": "5aE95VRFeH8n3sFJvi3wjyxa1bqGpMTHuniEwpVw18cUrhT3DoraRRQT1MRA3VRhTnbuBdWCXzztpZNwM6NnjVHP",
  "key3": "2JNzvJkL6BKp7qJd2RkJPL9oxz3EUjeHmhd3u4s5eoeBjHF8nWKYURKDqGerrtnLZT5ZoNY86DVvwSackVmCt1ho",
  "key4": "5RybatjWCrmpK6mfftLiunPp4ULqrydUrKLwqHBxbS8Y6wP62PcnXvGfCKr6qbZUuou21cH1fqXqVY5WKoLbmuwu",
  "key5": "Rb69Tvkab23kMaaLT9oQWoKjBLJPdERTojTDjT7At3zfMdSHYdKygK9RYTJPYJcfeT6rzUCwrgkbTtZ5jxUeR13",
  "key6": "uSjAzFUAUjzCNuMSHVzaVMJPrhctrg5pVafQXD1hpsJtxH6y7K9m5HePZnjGDDHtybb9NTfgVSMPF27CrBLa6FD",
  "key7": "2NKMq3HhYFAzM6jV1AwC8F9qk6oonWum5ndvmhQtxkn3gQzY9kJKWAEqx8BuKuHL4roDaHzaoS7PdjTJ8GL2pWsx",
  "key8": "5CJ7ioavMKPvDKSA8r7knNJm4ci6A9T9gG9XFJSwyqMBciJdxUNamULfMA6xt4koTHf2SdWKZEzzdEDxs6YfCamQ",
  "key9": "5QwnGwXYHEYFbGKp2tCJdatv2SGLRfz2HKzB28q55dTrApZN6gcSL8G2v2Mi5ufp3Qf22zxDgNqo821WWnhqwxJt",
  "key10": "3NFsYdkhVxDd3jNnkQdoijHGatFKLfjfFR6csuxSMLMKLgk8eTCD6Yoqnx4LHGK4keNz8XZFiqkEM81cbTDPewxW",
  "key11": "5bYrFm3iPE8Ku2igA4fKKjGPY6vw81oduptiGougMC3TZcQdHZ5tXMxs99KL67VvNaa64sF7jtVTe65uMTW9MoYf",
  "key12": "59teHRZDHxJtboxyfUzK4wjnJaFjKavfNVMcAvkC2AZyu7Crarg2QqFFYkrXG6VXcqusCQkLyTTcXhGs34qNpe1z",
  "key13": "8hURmeeM7CQEoMSV8rkoXSc4WcZHHsxBmY78iWD3A7aaRDGiGgvGwUyfHcNHCgyM7ipHNAqrsCsf8M5kCrhsrYk",
  "key14": "21ExfhfaHYhKRLdBw4WCYRfWSDpU5Jg5jTrG6BXXnjMxCUWzej6td8CAKMVQmEWYj3NwAmxA6x9nt3sBgb5vzx1S",
  "key15": "2RNpkcxW9KPpKUiVYP7LmkDZBzFYnVWLR8Ej8F8QDkBw5LhfkKZz3a97StnCaZRmF84N2iDe5PCqnBhYMUvG2uv2",
  "key16": "37epHTduWY7Fuzg7KiQpjbmSnWxnrzYp6BrQZhAvh2KndHJHWtsSt8wpwfrrbiBnWp8Af7y6nwUyZQFLUTZzwmfN",
  "key17": "558jENeTHBdUmpeSnPxFBxji7FtYGK7rh2izAENdt3WgpDK1P1HU6REYLPah1ty9DefHZC95F94Et2ycbwaq3Bhe",
  "key18": "69QfoC9gtZieJemqbaAoCrdKEECXar3NmrYQipLNrmUADK9YoUphRrFXUckSv6CzL7m59V68s5yMrgVpWDyHQuy",
  "key19": "Mx1FKWFZSTSyg6BDA1wwLyPRiUQLYNZVZ6WU3PkJ6qnNPNP5CrhgUELKArDiNzLKxjsooYoX1ukwVM2yuMcG3ih",
  "key20": "4TCKte9KZe99JST8o17zyD89vNd7CLaBCMmAFY8DxuAd9ZSNeLAWYzhRkB7n9XJu9S21mn644JZ8ZhCrgNTUmg8X",
  "key21": "cqrRN2Li1wQxrCyHnaA82ZXQKVmAhKzhjovULZ9jsK5crhieNVc9G1afdci3A88ck7n797mhHrFkv7UY7p1LB1B",
  "key22": "5Y6PJ6vmCUTAp2pp7YtXnKfi1Haxf2CWCNyiexjkginzxnkfWnejqFzgMf7d44SpKGJD1C2sjcAVYiWW1QqfPHBL",
  "key23": "4sFRU5YCXuNM5T2gfVG1VuiX53JumQRWUShZhAoQnp1Tuc2bZ6PWB8Z59tXR2c9VSHsaXh3Nm8GgYFoEynCMupNS",
  "key24": "238yasrRKrW2tKeeCJEsnFL18sEsTjnygBbeehjgKoQ1jRUpPRn6C1BWD8pGom1pvr2VV3rpL4LmuPnM8dK7qQLF",
  "key25": "58y5UNBSpzZt9FafgtxYKs9Pw7GJU9UdzH6jkKHQK4eo9mdmCeffWUKcMAY5GYfft837U1rtbD36nq8PA4wwv8m6",
  "key26": "67je3438jjuRV2AGKShxo9jVWvyvuo7nxst2axZypeNngv3RCXxDdf7eXrkWZf5kA6qbyd65DxJmdfcE7aELMQ1A",
  "key27": "5cnKWRpQoZSpNqPXEv7GPp4wMGPiKKzaLttsk4ebKWPjMuQBsBYm77M7mc6WdhWScWL6LB8B97yTimG1L3qwZzAG",
  "key28": "435K7Uekcss7nVLMK88eVqXyvJtsX2B7GNDdmSAdRXVjEtZKU5UT22MaRvWTwEAxmu2aZuJhdxbdmAjTxVPzLgv7",
  "key29": "39UF6c8BBXs9hJpwBubiAomZZc4T9G2QFHoHWf5eoAfZWYLaibwQcK5s43MgNicJYGCUf7cVtzX7dPFuLxPZG6P9",
  "key30": "5z61GUVWoEYMiruWtPYgLv6NzxJQPgkBXsffbbCoAUaNNnRpnd9k8aPWfjcDJMtnWaD1b5ujHbZmhTxT1j8k7cHJ",
  "key31": "43voXUh3qtYG2PPNH1fv9F5yK4qQqZf4HkatNzzXGTdwtet7uZNEoKE3MMgiv318ZzAPYLusxfqYwGf4mwFRczoy"
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
