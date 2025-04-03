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
    "5TUmjdcMPuMF5vprQ7WVk4wm7r4Y9mtFtVFfTVvo2qxRVBJDgWVMMxe9YKeAAEnZos6FYk4a2CKLXEXSrw1S7kSk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EX1TPVX2ixVSsxwwm1GWoYSxx192TmZ4MkHP4CqkUpbt2yK656uPdnZvfwkMLKXoNJWt8YVupkyWwQMz1WaMSuR",
  "key1": "4k6YHurmnQwS4XeNV1KSN5NGk4Y1jS7Pj7Uruz3yaKJhGcRNbHfLvx451RoqxPWZT1YJvddjsqYmpn8tqrfSYX6E",
  "key2": "5yS7Ldghnni2ibzgzZywuJx1xzbQyVdgQ7jT45prN5NKjqyKmQBumB1kLYszpuxa7NnjX3817r27CWmb4GSUMnsj",
  "key3": "596jfpUBdn4wP8KuDRSdV6tVJqtwqYFb2ySNaYHa3c4fVwrvEzcBANfsGQ3SaLBCvUBVKWXacKG5fB5t2cVh6b5D",
  "key4": "3rPH3JHfhsmmhvR2424ajvetRSuiwCSVazstVDtEXgNyK7B82Z7hDhb8Jryt5SXcF1nhd1qqZMfthYx8ndS6NxRi",
  "key5": "4rhwK6SPiTqgDLDD7jtYjV2cVn9eMkZzTK8Wj16Ur9fw58dD8n88uUqzkfYsLdunNcnnpobA2bsNGQhEik32UFhK",
  "key6": "4o8b4XX1JLHidTcevsz8vwjS2RLJbVCpa3hPnPLZJHhn3bPt9HKMtW4UWqdQwNtKn7VzREHpdPabA8J7Y4fe7Z5a",
  "key7": "yo8wPTeCxQDeb7GHDFcaL7eBqw2mhEWEnAQVnEQSK4psauBe8ZtWAEx4qqKwcQtWvMZMGKmBGkfvfM9JedoH6k2",
  "key8": "2jRZTmB4Huf7A8yCBR9RmEeSA2PQ13si9qmRaRe9mz95rioK85Zcdw36HHx3ubLneauNBpVocqtwzZgqkBSq2JpY",
  "key9": "oj92UcGPtLyv966DCv2r3ncf5HvReoNhaTWoDWTfgnGdpKhph9A4LyV1feaFdnRHK6cC9Mjy6o2ovDjCNVjZXn2",
  "key10": "LGRQEHhRL7YyKhkXqkwZFyRdK5YPPcXAXTXwrpGLxwbNDvsfPrYBfHBQd6t147dBFUWByQwYMagMHbWYZLiXwLA",
  "key11": "56EaNo9yYG5RpM1wRx4U6WmnvAa8GqCvYK6hXFeUv3exMiEiL3K6R1n5ZchUW6tNG7YSFsUGjCRBS3dQmU8pNf4U",
  "key12": "z8oxt1dhzjKouBKxjfCbaQFaDoYFqGLdFsY5Cbe6DLXR5Fo1oi6EspxzsiNcr8NDQTaLxZxdYChXCc1roCoEHbe",
  "key13": "4nRHG5Jq76MzKmNx5tMXWtzCDqVrCaW32rz6ZF4MfVEnzTDH4V5SSj6LXuV5NorAsfkcVpAaUMU3AW3QN9opDmmw",
  "key14": "4iT77siwmv2b1PUFetBENuYT1mdkF4KMj2z43QQpiZC7SiVq4DnTJCNaaYubLArw6RzHJVND7hCKqQmD5ntmacVn",
  "key15": "4gGdVx52aWeLLU66iv81LuHxJH8nKjfEWyKJxvZHiXC7pDEuhYD4stsJhhjvFZhdcVhE1Q6P5US6wBJrknn3RcKx",
  "key16": "4gEd2yyMB6o6sSQTyrhAotfDsWwYb3ggLRMGKa1JPAWmktzdF99s3BHVE9RtsBVwZ2ya5jm4fPRyKKyqAJLnkPou",
  "key17": "4JUBXoZafoiQ5JgtixATL44GJM3LVjYj12uyTfTgCqQzzoWYSuHgNqyViB56dvhPwj2sjFQ8nBq676apMoqFpg4C",
  "key18": "4yYNQkPp37U4ES8sCAcTbo1QzmTsvGBpGA1HS5JJiAqnREeUeRtUsfXmH5atXU4hFqxAaU2KfVw2axBfU4x6kh2j",
  "key19": "22bp9WceAHF8iViRrYeM97GevEdmQDgZgpbgLx7RJHRHak3AJZoHiJ4jAEQsHj1UGMtN6kirMEhNGAX9fZTfYT1b",
  "key20": "4oULTYfr9Hjqm2DtWztanAtpj6GF9XtozJtcQLppDwHJXgaRhMoUHVnmfosUpN4qgJim8X23HR4VyFubd5nen7wg",
  "key21": "dQy1tEhUDf5CnM5SgDCVxCrToAjx6x9Le65n4haZamQE3gSw7MvowLK1CvtUDuf4AhAEuLtYbc7UUgeEhiMGme2",
  "key22": "3WYMCYVu589QYRQeE5L93nfAaPrqFCmHxTTdiT8VSknuTsm2NGcEG4NtCHMNt6a8HTZY3UZsj75vyBWvjAhyn7B6",
  "key23": "4naTSooeTssCpHrFiw41vZPXfWKj4LB3AXKQ6KXnjNXuxvopXmRNgc5TfRSnN2xui86VBu5rUWh97CZVPPxQ4HDS",
  "key24": "57aPgRq2i6XcKPb37fwUJe7oj4kkHVzV3J5Aro6dhJM77bjsXa1yEiVFvzDr3R3fM4rEPDRzHt7MLHrV7y5xu5eK",
  "key25": "5hDNLGuf9h3ajzKjMkaD87and7tLs2BVBQfHCCAHmg669bLPLndF5L5Jcnp5b5zpKbtrmadg6E2doapAwss2KHbM",
  "key26": "3AzJ573FsBmu2PHf9HkfQd9pHEVC86U1HEXsuD1ok1ri1rQzbfQFzQnz5RSiNYUP9F3N43uEydE8ULB9pbgxz6NG",
  "key27": "5YsugEKJ22sCkQMaa75C1zgvfcE78tQJ922HG6MtAKaB2mfAxiGfdRuYDc3Lsqqijbi1TndSwGp8gZRZyjNL2YTh",
  "key28": "B44B7qTTeoFU8NCxmDhE2GGbKnrmw6h5j6EANkeAAo5V6FWH94kN423rJXHqFZBctPEihky4ecWAjk1ifj2higL",
  "key29": "3iBxpFQpyuaF8TuzeFbGqqt1uuBGjchpUCQYz76CS5A2nuW4hgjTh4tEsHXZz87RV9P9zdoqgjLiRfmpWhixqFpV",
  "key30": "5EvnGdiWKeJwZd9BK9rZEZi5FX21T3QtaQmdR4ZHBBrGf5p3w4rSonQz5cdUc3QFJUfjNZaAzw2ckfj9D7QfWYfy",
  "key31": "5benJUVY88uAk2n1JoFLBRaSVEqEsBrg1WqkFwDiAQQ53QUcDnqJeCEW7uhER4cPHo8gKYMFRSgpF1GLhQXJTRNi",
  "key32": "5Eit3zqArFYq8z2Rim9vbYbvRE3v6M17SLdSp4qJmPYnCvVccysxFE13L89RCKFmf9h5wq8hrkCzA6vSv5xBmU52",
  "key33": "cJUaBK7WCChW1yActWKJDefig8jUzAp6K943i3wTZ8JdwQbavBQqBuR9DdQGoENhGH3apKaPxcDpMqZn9KRrZ5Q",
  "key34": "2s48SqDS52shMaE256eyc3uvRiNR6ycBsff38ufNHGnraJgkxiCQNQ5AF2aokXg7jJmkTjXb4DwyF1BCewwDxV3t",
  "key35": "4CfhiwVbmYPH5ChGTkdngd9SahCj6aiPsTGpQtRrRtAXZMGw1wZ5B1rN1gtVPSd4z3ZQkRbBwaJzMUBzXLbtTgJt",
  "key36": "22bSfQV3RRD8hVD733BkRsx4tWasru8kzSudVxpqqhXCrLb5d85vT3xCGASAGLdufJ1ZocaEgXSHXXpB6H39Kaca",
  "key37": "4uajn5mxLE179zUBLTWf6mxpogGGR5LSEmSY7pDpCrkoziVpDe7vS6JqjyuALh2BnMo9qr8TYPnHtGjaXyazSzUE",
  "key38": "TTxVwEFUgJJRPDXPzt7dn7vo5BKGw1TaXD5eN3aYnXtcnHxqTcpEHUiGhXDJwE6nTc9rka631Udt6FQQxm84aLg",
  "key39": "3i7GxqBpDZWupFpYpZWR2vdKPCWRLF8VeuEDAh9RBSYu8msnB5wDv1NwEJCDw7AsYBNhDokSfcky8N7MjB8akmrU",
  "key40": "3qMHZbBGPNZDQ5tS4DWZVX5hPY1rdqSNpU9qzpK3NTygokGt6ANV8haVmCSAikzhfuXpWctUFjnEgVPPVX9gLxFZ",
  "key41": "V8bpcoQeeoF42GdQ2NVXGKn9Tu9W4jvGHMZvknZHSGjEz7rL5ShdwrsDf1VoHVjKMsCg7YgJ2Evzo6PzkVQSLLk",
  "key42": "3ksQ4j9ozNj3UyxLj6TbUYTHQNXhQxHj6YDfUuTMA2rJJ8p8yCX2yTKVxLzkCGwRRzXz4HMw8wEZ3ZGxWpZ9Pxno"
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
