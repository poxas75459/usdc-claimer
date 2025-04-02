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
    "4BQoTDtqSrBcY7yAp8ZmCVjyGmmfzF76JWBis19z4jBJcdnZYw67S1Cxy2qPZBnuoRTHiYxtadDZ9DvsPb9dZEhN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xHA6R5KETWZAdJE5rWNY87Vfgh1Y8wzf9bQFLCJnvBdEThspkVd2KfCJwyYiK2pGbA36pmRPz7tqKLNVVgMZbQE",
  "key1": "5C4FezqWbtaYob1RLWyzYdzDQjP25EiGR4XNngcMLfktv1JPTaQcRfQbkG31w3j6redkKBE9SawLmecSs5fKFoW6",
  "key2": "5X86D1V3K8LDuiXv7uB8XDHL2EYyaLy3vovUAV6gpJN8WjtQET58dd4sYQL7XMAtscMF1ycDhKPxd4nnKBwLXuSp",
  "key3": "2nbhkdzDosTpUFUoLDeXBUcS2wovL1FBH9XyRN22fW3cNzoUdfJCayifDcCSNDCVyE4rCdEXK1L6XrWjBGG4sGQr",
  "key4": "2CQwDzpSX1oQR4Kknz4gfgUV7UvVNCGT2ZsyKCZbAUzDETcrcSDnTqjGp4B8LhZi9htrNV9VLXT8qb9CobUyYJtp",
  "key5": "2bRCHyQsw3uDP1MmEfF5kzq2AnDpj1XRYDnYMbXDZ28NWE7zAaWFUbP3VDeiusj1hvsdDFa5BgLr4XEo1SCe4kcC",
  "key6": "57LmXoMbnojwbByJee1i8YGLBBZNvvUBtgapgujiFVTYrpUMZPXn8JQjTfAMLJvaMqTiWfSLJyAGS8YjTuYdkKF5",
  "key7": "5ZMCz2C5zd2Ba486UgSLnsGeRE6FR8SpT3RcFnMzyuDFtPcCYHFnEX8BP6cQ9aFMGLKQbuAYVteKTenFh3Nv6ERe",
  "key8": "xVoDaV9MwnKHr1vy1r66Q2TLcTSSUUFHase3KEQT192fieSzphgjQ5vXcv8moBFWWatoEdao3xZD1RAparAnf1V",
  "key9": "4QnLuq82EQHeZ2jCRYwRdjxE7fYwS2wUDi2uusxom6jXRRW3QqrQh7QPduMmMRvSuZ7Li8Rt5Y5x3nmmowhigBis",
  "key10": "4MMCjLHUxoqsgjdkRhH2vPQKNxiwG1WpzNkYHQRTB2eUxDPA7mqFYy3qSEs3xhhRubnK1rmy3fu6NTBBVd2JxxYM",
  "key11": "24z1aeFmTgT449Sm7BQiXr4uEk6FeXCe5s4eDqaefFBybCq3x55Lw9SJthhi2ifCV9AthiaQaLFeBUzWkBkhHv6f",
  "key12": "6sQVhXxTNsoMfK3gRFWvYPc6erF3s2fxDgY1CWM2PvtJvk555J3FUWedweaxvPnykeWT66jCLhEBZQkJbo83qxg",
  "key13": "2G2YXQQybdCYkxkoSZjhtcbKFgcm5XKbUTCZyMxFBGhpaWFh4YShzgCSKJW8vkzkJ5kh6WNoFnjybn5MfcgxCgJg",
  "key14": "4ijQ36qdXwoT9mK9fDuzF3HDcSAiFp9UxhWxbZLi2nUBrLgKKge62vZPUUj6XayuqgQVVAXND33XewZd93wKmK6Y",
  "key15": "56JayqWp2u8gXLyJFp2FzxBDVz8KKhJQENk1sBMz75mTHVSt53ZpZE6VciyRB9ouXh7zxaBGM2KzcfFbmWWSF9jP",
  "key16": "5gR6i7QuBUPYHRbchPyiZHrGZEMan9JpwNdMVmkv8vP8VAAYURBKywBxJddSCmAcxr3eUTBuVDbigPLpY32171NH",
  "key17": "kJgFwpDYjzrbdiQ62UnuvLAmyLyEXxKNDLzVNHp4ZV9h7CzEBhjsdm4JveQ4nuJrXKHRRHEJ68crA7yTv2mWV7G",
  "key18": "2NRbGFC6uk5W6h2W3VaX2meWns1RUNgrZr2R3UpiBrk7WTqZPVN1waQxywrumHqBjx2txjzYySMQKr3ni6vY6eHX",
  "key19": "4h1DphqWDMJUJQ2KiLB9raBz5h7x8GWU4fsRfoPp6jzM4dv9MitksRX6GvLN67WcfFcsf3YkuotTsf1AjZey8rH5",
  "key20": "rUSi6ZzKF4cBhKWNTd9HiR5piJZUBB8oCQgr2Y9mcS3MVPQp5m3tG6EtTxoJYpmF6kAKzQJ9xtoKJXsqw6LyZ9j",
  "key21": "49wnzsdpmzJKkFuZVbKTXphR1GwUkLq7aBFfYFLM4HLyLQg2ao3wYHDYB7JTXMQGaaZ6S1AHhDyay7u9XnXUk8Au",
  "key22": "4sQ1xhaMadkc4HMCHTByezVb9iZpHJChshBSURE1NEdzEFwtacuJ7Ej9VesxqSNb9kdjK8Q19ZPdEHsoXDdzLHqQ",
  "key23": "3U22F1VxUgKGyhSLK2zB1SW4N7D2Rpf7xM9BXhye2ciKUwhfF147dSoqdY1Uc6iEwtksAAEgqeiWHXRiz1gd8eM3",
  "key24": "3cx74YtLd8MBkQLeXsKQXEyznAor2ZHqfbNTdEoyfx7SsFP4Mon6ExHeETyRmYTEu3p2K5JWgTeX9JjRdDNUS8J8",
  "key25": "4MGQ6Rwi8qTdhj6xgnBRJ83kPb6z8pgTCF2jg7MidwFiUWmzPsoGzTwbmWBUQXgUk4eVqSW1GKsuKKaZLkP9A1qi",
  "key26": "3qKQq9711PtbBbCzsUcRc2nPDMHKMKSM7EJsQm6qgQQyD1u3S35Q9iZ2v11EchGC1RBJNw7BqmydNdQxH6eNVZNR",
  "key27": "5SemvWg6vL7zSWGgGee3oB5Dvd1oc14LJrDtxNrijiQzqnXaqWBXKYtGVDzaFyVWD1R9ryJ5yYL3Cv1NT8YPCxwL",
  "key28": "3h3QWzo57HNf1LzRhA35Rzpqxsw6rMAur725e3qD9BKf3FoYDxeAiUfRw4CyS6iYtysPX3VCtC9PiWkQGWGspfQQ",
  "key29": "33Q1xMqr4zdYQrZ4gKzcJHzyd7XwZBybCgMtDKfzpjUHxLMQRq9v3K1yqSxQRmJ5cqEemCqo5JSuE7ECavEx9X4F",
  "key30": "NFj7tfXj9ZgqZekMQbtNV9NHjXkNCuVqM5wNGuYLsFCHkkMcEeCgbGf9HZXf93dJS8vhis881hkS5NYrK3PA4di",
  "key31": "T9Jio4zWKte7Cs8HZTMZVzRMaE7bDoT8VbRh9RB4wMLeUcCKscM6zv5dgt6WQdr88QDw14cv34UeXJv5J8tNHpF",
  "key32": "5EctrYHfaBarSnfgyn6tK924L824WWU4eiRAV4hTU88xSR8cefsHa1TGf579vbvBqZFyhZTMqjmjsBkynQmEFM5R",
  "key33": "4SjywLRuKV3jnsA9XhJPfo5sJ39DYW7CeDUy82K4xgc1bApsTZ7zyh2S6gr8kCkk2fasN3KimJFT7mZAZbAqza9w",
  "key34": "hZWxmHqGmvrJXN5zTZMfcEsMJs85WEzxmBtn23ZpGfmtbNvYPJwovVFsS8uRidGApokwDyjCqKQvmcz2Q4ZhMun",
  "key35": "4hJN3SWAfUYqPhuoERY8Yu1PisS9fvKnKeHxs2mxAmfRRtyZoyiXtU6FE5M1LTg4nKMzRz4BXy38ZCT5EMEM2ymg",
  "key36": "2xFe8Qc9TifMs9h87uoAibDEPzNKuxcZj8AcCZip6Jj5sPc2v7qogeHdjswjFZZJvJxBSG5UFGmYFbgE4VK9C3ud",
  "key37": "3gy9jxULi3WngHJeHxD3z93WL1fMcCwWJ1kmkBkCovvTk7fr7Bnym38VABbTJ1aaAJU41LLmg732q1tBQsUat42q",
  "key38": "Ern5meAXXwn1B6a8tg16YjAchyQB6gGjVDyyNY1aCPxBYBGXDspjCP6SBWEb7yXh2SsFf2f7xVQn9zVZcTRyRgm",
  "key39": "4CnmwYUZgWduGYP3G4DgF1K1tPpEV4nKc58xqgYWNwVhF7vUKqeBzz1JZdHGFLRex1cU2fr2ySdZuQPpR64Tw6pP",
  "key40": "3aL7kM4rJK2M3C1K7CY7GPVZmmV3dcuq89VKs2koWv1FxpxWaBHX8g2CGsjxxYEPSeuMtpYaRagbebg2vyEoofsp",
  "key41": "2LcfaFU2nv6KM71iFnWeqDdNQmMpppyowWyqmqohH1DJXoZviZuCRTdh69z1PKt6ctnGLrX8nnUA2kGHv59JsyTB"
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
