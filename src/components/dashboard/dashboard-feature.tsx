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
    "5CMnTGCNS51A1usHXjGZsXoGP5AmFRMtHQEFyUwdJV29H8ZdHCYRiFHnqKnmNThEU88Fzkuu16oQjGF4AW5XRfTN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33GhfVmSNzDSV51TmRYAhGZpSUyZSHQix1E5GUMM6RNUUq5zoPCxzmqxPNBLZe5hmRrscee7jSeh6FfczFapKzTA",
  "key1": "2yp9Uh5qkx9e7Z1RATijAhsM9kyVB9VSmymVw2xiGnvYKZihsvFccGTvabXH9avs7qTRjaFZW6VNuR6ks6R3evLC",
  "key2": "G7FQWJwEfmheVD2b9JoShTv27vYP2wHLVdJJKYbCzs7kDD59VyBuPaxxRWMnnuZaE8Wsxvpi4RrpSr8oic1PWrD",
  "key3": "4HSYRusVK9WYLrxAVgbNArumdDviUYrqRYCJLFWSRsL62drdayWmoTUNkW5Tn2h8n1S4NFcth7nSc6zH9w6tzYzk",
  "key4": "4H7MMzoapn3DWRvZPukjuUVSxr7UcTrdfP315G3Attemo2wdJurx8Z2B3YwhDMQQfgJMA5KRXkc4U7aXMXjUE9kj",
  "key5": "3AB6QxmVQDNdbr8394HAsw1pH22wpErJmEUJKkGBX3DCYaRmifRXuhxX644ovz5qq2tvtwhG8JqLrzrfLDicNMsB",
  "key6": "5EVECoyHm8dS5Zj3MSGdHagrA7N5rSNfMztGLuinzZWCwLZoRiEQNACtk1QxWGxHZTukyP6oUnsMofyuDzLfTpsA",
  "key7": "EBnkR7AcZfkcM2RqdceFgUGSFy1HpDoXqX4vyT2S1vBKDrEKu8cLtvj19xrbDk95aYbBMk67wY3hqLtf44TJ4v8",
  "key8": "Z9HKa2xRBZ8fmETGz4dPciixgScBs3ctTkbjkMb3kB1rUt8NRJuEgdThNLX1uN3drMbuzA1tZ7q3ME5kckvNV78",
  "key9": "6BySNfvEvMzG5z82NskynNtdjnyLL8nwLcBNo123zospNKQfwLDaYzr5gidLknsa8R71djHvSJzocie3At9v278",
  "key10": "2QKdGZY7msYK2XzP2pHpTzjZPuUMBREXSueE1rzYJXRF6XvWFoBoMT5kHvsxzvjLu11XVYHrXDuqqY7kMYwVgu5z",
  "key11": "ybVDd1Vbrp5K6k5q2ErN7MFTqcjd9yr1BWho2zja9L8Lv5sR342zbTmkCZsAzDxH7WZ5sSvdAr9GUvmvdye2TcN",
  "key12": "U5md18hfmX84uwY7grXKdiPw5c2wnANsxdFgQXLCx2tKj7cvyhnh3Qwo6Y2e1PnEeBrHnjPrZ8qimfBcfur1WM5",
  "key13": "5z7o5nj7tRy13T3tZseS2TLPyAanbvgHHLeFyRx6gdV1bvmiMonUh1RfgJQsRKNmf8qgGV8yN1EmkpA4HmbRqGnD",
  "key14": "4vQAsQoaGJU1FXu6YPdwGm1ubY7758TCvzAzBbWxR2iDojjkf8fRaCMzU6mTqSzfKLdJJNkda3h1MHc25Z8a1nT",
  "key15": "3t24TUGPB5gRUBpuBzN7AzHsA75bABz9AKNNvSpyzyT6DmZFoWbDx57dRASZ8rpKQ7tXorVU1hF4tg7j3wURiLBw",
  "key16": "5tJexmXjE4pxaVrBPAgtDTBMUXcwLToRpfSVAxKvADbYr58YXWoPqe9cx7R67ACb6K9xTrKQnhrYEA5P5tyzcr5k",
  "key17": "2UVsxiiT2YqXW123sVN7bkMLskajcZBKGy8EENKJt4pcA7BzBSKqMWfmgAmTZE2jxwDwoZuyYRQaCcREmLr1mmmC",
  "key18": "2FPKFvonWVEQPRh4F9gq7ATCyjKNDLsPsbGwYbLE1ZQhhhzNk5fWMVgju6uzpayi3eszgTkjyno3Vxx5ippTbfRi",
  "key19": "4NwWcsbn5FzSPFy92AF3SjDbGmCZDULq8sbcR2piqQvNzXESxcCqf6dJgi9XEb5ck7j82scA8F8EwW663bnGQbJg",
  "key20": "4msKwpKEYL82NYfv837CZyEVgve4bFsSNTJgTJ3HLu54frfT3wTZGHcQtApuRtcjRNNbjC6KwJyzXEThcXXjgj4T",
  "key21": "4j89mBG2Kcx8hehbtd7h8GA9cEckpB83WsyyTs1mFnKGDYyg3M7ouDQLB4grdEohMAYXUyRaL2edGsAYGrGqiY6f",
  "key22": "4qmfMmMTVnBRx855kF2r5LJW7yGPQgLYyn43EzpePrK2nKQ662dTKifzGDJXRCgDF4ukPiqCXi4e55eK2MFXf4hL",
  "key23": "KuFozGK1j2sdoQCDX4fhdVep7mHLFHJQgoNwXozLnD5cdKxALhzWKCwwJchfck4jwaVmh5DodRvBy3rsjeX3fCT",
  "key24": "4eVtBDu7mn8ARzBWd8ZWgNYzNusZzraBxnVsZR5m96Gtzs4n8VvFEmRXHZSgmtmft6tytvb3pHRzcwLakxEWYKET",
  "key25": "5rVm5NFrwcdxTNm88KEcfmj5sxqTt1f9hBLzSToFSBrmuA8aXwwRSSnyNJpb65q6gEJ7FB6EXJEgBdgaKDxhDd5d",
  "key26": "4KnfKt7RCGJ2maQzssqgfAXr4oNE7rPhumby8tvQu6wighep4in4mCWYw7vg919MZrt3Uga2QUknfUsgSBPb1UYp",
  "key27": "MycRsq5KjNKuVGm2dMyURMpaTefWZu6cDhoPHfXk1rLjhQuuiKV8jtpcgWx4riRNvvyW5MpDF2weDcjqYe9zQjb",
  "key28": "5iJuyNR98DHzzbaMr11L67JyMooE8b9u1WrjKiBHY5FFeKpjEQeiHLgY4EE1ji9Mj485C23Ej5HZNvX9jS8UW193",
  "key29": "2Zkg5KnXkPDAVuMjkTvdtUBS2pQ4dkzHrDqcJELPtWmxHqhkcKDov3YK2rDMjb2Wfm1oRt4s36mCWF347P5UsdzT",
  "key30": "5NDk5Q2qhCxAqD9C4pr3mTaJWxzy7dBbvvaXbEGEyZJsEUFG161rtZo8KESvP5Snq2S2mGg3Pw7vqSgowRAk4s2g",
  "key31": "2i5Nh8riPucbpV3s8RhRTKxRc9Gn2DTzvRSkCVN7sXmJtSjBs9rUrC4NA6PmwjqQTZLby9ZgR8ohJJheGX7M33wx",
  "key32": "627Wv2RDecmXuXHPMHqSmSKezJDwGTkZXd2SzMhWCTn98G52vhSCX76ftyc2gxqJxEMNCjBNjGnankHw9sWub7TU",
  "key33": "4u2WSxMPcYSN7Cgxf8CVpn28QAiehrYjC2dLq37XQ3TRcbseG13x7BFthqduq3phPBU5z8KKnjq8PdEPrRLkQwo4",
  "key34": "48CTGARe6Aij8YShiE75NAKrxCjNRxbapWBpjDUdYBmXt9dirVBcTfFbj7PPFUSLZTqaHEp4RRq9SpJLXp6vRtjc",
  "key35": "3qDUrpyKPTKhuLHniZRvMrta54HPPimETQzwKRX5vbx3z6fkRa8tiZGEvG6SwxH8qQHFn9KEFB1EBKWLL9cGvjbc",
  "key36": "4uJGddiJR1WjUwL6LqV1DiewRTYRPyKQFokft6cgQkK9TJDavqMkmmtJRpZAJyWWdUx98Apqu28wV6edKJuTVAUB",
  "key37": "5PesNz3N4N8jfgPiYSHSRdovRBHmBoYRk3oZxNN8k3cxJif5evxdqF2aCY9z2Ht784dY4Tsn5Z5oQPjtG43NJ6Ru",
  "key38": "29Y95RwzYFqYj61NzQD4Vu1cw1JBwG1RpZy5ZdKTJYKqqpFuou3hNtAQz3tkfeXUhmhauQiZVB2sagnxzTP81p3k",
  "key39": "4Sxtj9JzeUvhvAQ13kAD7niM99stJK6AgWnY3uaLWJxDWxD9aJvo89LM2BQ5EMVMaQV6cbPEFQ2Y8hKsP2NRfmRQ",
  "key40": "3RCDo3b5sCgB4SwtG6t6XRLMpo2Yjcj1wyCm7JqYa27bg53J7CpoBzXWGfCY5LGh8zxDj2NpAYGs7tumBZacsvyo",
  "key41": "24qub7bbTU9g5c7qDvVLi56qtNPmFpEj2hpKe49BjX6yeYqrL9CTspf5TduL2fJAwsJrLjyb79uWeGbVxA3VeZRZ",
  "key42": "4w5nWGsVsc9eX6pYs4pqQJfRCUXBtdxXAPM3aqbybmSjzvWpWRkgVzg1FGer3ebwpzHRmCKPbNjNxBsxg6ZtQWcj",
  "key43": "2dVCp7SuUxp6sdheMWD4WXNm9ntvnFBf8JLQAUAKQy9aL1TKjRUdQwu1sEzmQGJVHVFN34aHgBNtZHVD3si5pwpq",
  "key44": "3tc6RfdwZYKLQh3qQdicYFvZk7Wbn4DBhJQwsrrLvYLPjmvVwMtLtSYF1qYwA6WcCYEyaRKd3T8iuYF2MKBrpBd3"
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
