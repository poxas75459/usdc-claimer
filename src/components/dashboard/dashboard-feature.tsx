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
    "4FqNvErW356txzebwg6A5PAeDh8nwmLJsaLtxYGAX5tA4s7SQyzJ7BEqZc48x8L8raNwERk5PnadsZ75L1U1WxUq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PjLCDtnydUHP3SBin3krMtVLiSfi2TvUffU4swSXGZdqSfGVzAXV6XgrBqaWzhEMZ2WwQuMzk3NojGhBwL5JKMv",
  "key1": "5PT9PHNE9kt1amgRkAdJGQ4QLuNL8WhPxAtJVTEw6we7gCGPkiKnkEc8NGLVhLdwTtZmmqxzSmpdMXmfTj6GWs3g",
  "key2": "3Ssq7PgtFvHwvb9rYP2yvzQk5TtE4Ef1M2QTkiQssYgewfRCYNLmhEJqgKXJKo7KXMawAeGsHK9yciVpkc3ZgJHq",
  "key3": "R65k77DsVJJ8AHAfhCJYm2PfARgV8t3YxFUZTnoo8AX3oRc6Nnfunp8UrFQZRXir9MteTVL7UDydrAWWJSGgFkY",
  "key4": "3ig9xYcXGa1cXSctg4xwMaHNJ1axKr5BG6CtcZaw3F6G32jTACNn6zRKu3CwjidcWLDfEGfuYJwZXRTQiiAzchfA",
  "key5": "3Jirf7CatGkqY8qsdxxzBrbCo69ib1zbizGaWiSyCektLWeNeJTNUvwiNc9q34yBCcC4mAiVETDv8uoLFVc4Ae8N",
  "key6": "55g56EjMVjmKcpFW6MjgYAj39JGjxx7HtsB985gw5UZ8WXWZeeDMCMAnPn5oj3zvTVGnsYzzgpoP4wGVoTMwH1js",
  "key7": "3KLYm6LSxHPQZBgNdruTTfF9dzvewh48FrW4HNKzr2br5nUQ9YxkKNtXoGndFzNZJjP2nixCnznCRjRrhpVwxAzo",
  "key8": "3xzLHDTkawGcJhf5NurhSvhJ9167ya4gFTWnRzCF4GpeMJdims9e1tHZ54EUTfkbjz4Gkdd2kLZeaVFZJ7DKp6rc",
  "key9": "7q9MBoi26xeiqUAL9ZUy2hRHZ3iNDcbrgNrJqNXMNkFhAyUjB5RaBuWmHu3ARV6axxWYj7xjvFfESwCS7WnPi49",
  "key10": "5qjyARdtHpxzKobouatcncBecS8iA12g5vmBWnzdqgRL7oyzRBxDBgeA93evtdXFJBqehoGF4kYxogZB6F9vNg3W",
  "key11": "4gd4FZGczg95MLsyK2fAe93ZDduNs6488mMsTNLf39XLYVBVexUYpYTwGA6vQwsD5VBAKNfrmW8Z74JAgwk1zWuP",
  "key12": "3TfjRTMJjdFKQ2bZsDGzekNrfZpxMPsopWS5adTEcmsdCMHAXrSyvcSs9BsaTnMjCKLtgqfekrYBoYkBAX5D724q",
  "key13": "4nCTTg48KMjfxb1Q5prYZsut2T4ajuMCK9B6EuKjiKDYF5nQmhrSc8yYUrhdxdGwANA9mG1GM2yLUHD9EKcj8pz",
  "key14": "55DWCGfjTDwf76GQN5FjHKQZrqcEvrwR3CTTspHrhDxW4hauXq1eTDfmyLZkdb6hCB6onsvJ2z2h9aUFLKyBzKjL",
  "key15": "Jzhp5th17EXBzuuMPriiS4mkE8Y95at2gaqhMzhfFSdnGYL9BEdtxwjwv2AsC74MtrdBammR1aBKFWyR2G3KuWt",
  "key16": "tUmG6odH6g7Saa1WhmwjiSxYb9e7bN1mgYxCUJGqq4k5sXcKUp7z9MGBrMXaEZPZYzFruYWZ5cNwhPTUE88h2Sc",
  "key17": "3SRN2ZQ2iYfunsqkPayX1BcJzhvQ8s1ewf4DRMXfg4kyZUc6W6yUsydNaEZLBNZaHkXqn6qQ8xxuqKCLQAT25puk",
  "key18": "2yLPFgYkdsjUsWTKJEz9a9w5U4zqMXWqBDfCKXwiECWJwEQFz3pfYkqa5MKpFNcoeUJsycaPyBSJ3N7dPc45jVzq",
  "key19": "2CkzdBASChneTH2hY99Nxwi1g6mXAUQksPvWj11jGdeYG6LkxFoKLCvVHQLftgqersxB3HEbx3bNxae9LMXr7g7R",
  "key20": "2qbLpGYrHAvSy25sRVU1mpqwS446Bc58y9PVNkGMH1Xi8VDCowz4TGrD5iyybqiJu6SHRAjhVuuSTPPVHkBPBV4U",
  "key21": "4ov3837pwk7emkmemHi5NfWLEKXjqxrhyX54ZG7nEaBbz2MhBkqxtprrcqpyok9E2dDu52YdMXjYRfjVxhsKcKW6",
  "key22": "3FzUUFkszRBQu92HXysPW5SWBSn8Qe28jNzaNL37sJXHh9kCwe1pYUoKC8asNV5ALYvotozM1LFeSYF7TTsFQ16C",
  "key23": "5vqLqjpQUkJHEMinb5KPNuyf3ijg8USCxS2boJneiacmf5p7gLNGZjRLp6AB641uyfFcto1rj2xhN61B1uCjveDP",
  "key24": "2JKaaNKb1F88wnyJ4QrKnUWyZLP8NiZaiwjcrEwmxbMsxXaTFgdqjsFr6WdtrnRuYdfUR4qgFHUTCUciMwNPCK5",
  "key25": "4StghYujko5JEJbmRVuVKoMc3w5ctQmFzdvaagcU8pMyXeccH1aVnDzu5o7ZWUfT11mwPwab9rbfiGo8nTDL8xbh",
  "key26": "9t1o8PvAAatmBtQviTGuaRKfZVVYnZQn6yUdGLjq8UyyhT4oGWMRzd7GKJkCXqmCFbyEid4hFyVabXV7xM4rw8F",
  "key27": "2g2ZECoZ2yPPUeE7S1GoXNgwGB47yTGCw8FvAccxksqFscik9GrqZbvQX4zTcKb8nHNryX4kyyhfDeRqj4WXDKn1",
  "key28": "42i4yWdt94rSV5SxjVR7mKE44QQvPxEfxh1e9Ky7VRgydGWWFUJcPRySTLoTwGYDwABQxoEeTp2PSK6BesQd5eWy",
  "key29": "ygHhowKXQ9Q2eNRP3ynqT97mfVTxpbCHh6natcwDpkVnbqNvK7uKZrVtmyQWDrtnHXfWpPxAHT58JHoYgp96HV4",
  "key30": "5K4tN3HuWHJ2Fx8tLscVXqPqyseg2SbUNsvjZVqwZijsqe2uku5JUAcybrf7jrq3TVUZKhbmbscutUnqsELJPEaS",
  "key31": "fzXcFxfTb2qoRJGiBYRUshPprS8FhD6w4UyPcU2rqkE289X9yTSYucSPqhHqDGMpMKy8Ds9cpxfjVDTFhWArS9W",
  "key32": "3UFHZMoQkNsKD3fT7eCy4CybAWcN9ANQfHckFAnQdRav2jJ78d7ZYwjd4c8ckMRHTCqXAzXz3uiWzFy85dtqKPjW",
  "key33": "5BcrvVSgFpWLz1zeNenHVzBc5KaCAqKrK1dbyAJxDf73tMHJXzJRmFNAEvQ5DaP9zSNQ5YKUbqi1NeqFkv3Kwycc",
  "key34": "5LM3XZMwYqYu6nRAfgazxdAdYxKyP3Cgd58SmC4ThANFcjunfLX6Uk7iUGfU2fatFNhUxNJByQJm1iFrcFkHF3Sc",
  "key35": "HuQNBW7HYN7bRn55warU6KHEYmmdBYMLUBKTMfdD6UwYb2SKiyijLTjUiZAcH6sEw9MZpcktKSf4QE6mCqLwrna",
  "key36": "3J1cyrfcGqe1JiimxX7dknErEBjGGctgyY4CXLtT5T8M3JddmGr2gyDVyRWCRWGUqJG99WdHYCHvpB1o3zCxed2B",
  "key37": "DpZBuFDLBNmW6GTQMYTWtyGhmxEevxYLSfnFvorY2GkCpWy2YAoXJbXa5zVcwKDuA1kBTimsyYpLn6Qg3cJAVDn",
  "key38": "426xWvV54ZSq7XAJkTGFYrEwkY5u2Yik2Fwo1XkqaZrUAifTGWwphwscpSQzxPSgJK1Rjwhh44wU4hg23yweiwnt",
  "key39": "2wbXw2jotpqxxe51zozufbDAcX1X2WbuEPFSWvWUttZrg3hKjB8WgigUkVpqVFjwLjbKowByZBJH6rvVvS8eMqAj",
  "key40": "ZvX9e1q4ooCDsq3BWbK6cCJT9gXj1ESsQTVgjF8nKcg38SZLBveA5y4BhXf9gFXmJt6i2FTpmAJrRhsoNx9S1WV"
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
