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
    "3iMdkVQBgwRhBjJdmuQtvcg4uRfLos2Cs1rKUinDwMGjS8MobfxKVUxK7YcW2AzWQk5rLKW2ZDDKKYMfVZFX8aFG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38rDRwwTqh3XQs5khq6VjvNUN6KHTQpUAKoeVZqhuSsi5n2rzF3makgCWog6LjAhzTnCeLTwvsW1sqjeWqn21Vuy",
  "key1": "22QsG78fmcaNeECDUdhT19GnRyN6o2zP7vsTRSBTdaCvjafZD54qmcJ7mBdF4atgzDShGHhEfBiR4QeqHHRMkbpo",
  "key2": "pDq9TG2GnQEpYSG8gQk41yCfoECyd8SSDcxKRLtwHsMjFQiG2KRjHzeE3fGkYmSxQU4gWD37bSmYNJSw3ixB2A5",
  "key3": "2Pc667xzpjwWbfKLgGSqXEFBXKw7NR66hnfXLAbHaUfmHaJrDjNNsbPxEp46TjnSU5pqCmSNbFn1S1ZwSdvjkVj1",
  "key4": "3LB3kitXvYdaehaYSjgxs3sWj3WnBHkqUi1YxWPjwVXFBbsCqkwpXbSahGxGaKYTeSkhWQuwg6hsfXSNhFwNyc6Q",
  "key5": "3oxLuxJYnkiiBygaJEaG2XfhmdXoyDdawzzd9LLApsxk2pMTU1oFw5cnQLFufaQfp5NzrSH5mXrDTAe5kY3XenHh",
  "key6": "5vXJF5hgNCeZxhyx5rTaD4793DSM8WxsSvsrEq2tRJEDE3zNWUNTfJRjjPg4d6Vcpx5FbNBUYeoakjZtNKQ3iExa",
  "key7": "3FiJBBv5E1N8s2bXLSNTHkwA4TRNHr5q5bAQXizURLtQBa941qBGdaJzqurvknE53ex79j4bceeFtU9wbe2UcRtT",
  "key8": "3d4AKDhj4HbZKe53fsKUEtPBF2bgarMzzHB7LJMoUwvtTHikcbzCZtMUS9grCX1HguzduHMuewvA1svksdNFGbQV",
  "key9": "27LZJX5RypPjETTG3zVT71MFaDQMXdEZVYN6G8R3Tru1ypM8RZq3qZGn9EKpWsEpEnN66K9uD4xZLiNgmH2FJDsk",
  "key10": "3UKbppYs4H39LopSvbNsob9GKKF6ncEijgiqRtnsRe9ZHfkhCvpPQxfudJiwsaL4MsaKq2ANasuG6unr6ncoRzWt",
  "key11": "RzxYnSjMNUgDN18Un2C2HVzTivhHbkjqQCwDHsHDXf2LDSkLDtGiARgmcNUbBskwaAFSvUnAh1isnQkQyJz2ggA",
  "key12": "3bQzAGFSoZgaHwCRar4fdd6FtkPacqdMUtMeKpfhWM3jWJeGSfge4GpGNZRnR4TLC2RWaRw4kM3iMTEAxgujbDyZ",
  "key13": "28X5HJU8swDRhgkeAXboDgzs2FTStKLw3ST4DEeg9kABWyxBhq1QR62ai2yAukgDaXtDFWxaEes779JwGt3vnLqR",
  "key14": "4kFitqg79in9dKbteSsybm1KHiWTw2iDbJziWyFaG534P1DtmYuEQvpQew8Mxaav2sAMc8tbrWixXz739aMp14wm",
  "key15": "5THqo488wSfNFSxFuety4KNYpXPXGPib5cLX4Ztv2MSwkeH1B35W7yKfoUYLwczUUxmE8fkXsnnTjSyGigAej9oW",
  "key16": "2tU7jRmJg2bv7X9Et8dDnp8PhH7UGMc4AuqvhiD2Pbd73g6Ks1Q6voV9vhogU6cpM7yqjbPz6sz1DDuw1ZpJRULM",
  "key17": "KDnPTV2jMQy48TgmiL5cuyG38AhgfMJNfANY5F7GH3tJGNJTJYSFddHSWnbbqdW4ViHJemNh4bXsW9BtTfQNc78",
  "key18": "ihJTQdBXpuaLN731Uv4NAbEGfs3NNGDMRWwTgSadePceoKLssxewcKNdRRfyfAPSnV2cKm38oNPv8hTWwfHMERC",
  "key19": "33e8nkRzk1A7FrzPFGjty5wM8QANx3MxYgBVY4qVPqJYjZ41U37smzM2iVmvNpF3pnsbW4VzstX3tdppD4cSBzJt",
  "key20": "C8RTCbsJWk8PCfvkSVv3YWfqzWCFHVPtKR45U9SDpPPt1HphwUmogZ7v4waaYpBH43H6naLFV9esECTYB4NJfzB",
  "key21": "bLueSgCxVw9oUmqWr9XwLsVKVfNMqPmoHoRH5UsbHbTBk8PpFeDugH5wW9H8rpVooeRC1yJb8hz6ptAHnkQd3Un",
  "key22": "27GeBURmekd3pSviaMzpJBeopweTW3NWgH5LBG4qdVNqh5CiyhfBtuddt9BCVGsbG5MDx38hWrcWfJEyedTTKzEr",
  "key23": "4yvcLRoSeU6LP9pgSYbzUT1RaKmVa9o9igX3aUjjR2Pv1EvZ3Q2CVYjwygi1ZZgLkcSEfMWCYPTT3Jbu9rD2eDYV",
  "key24": "2iQm3jMECPQhf7drRbJPewDFYiwnKgbf7yV88m214gTvUb6YWvjpDMEZNQ6XZjdmV7LvKNDkhtyLWXM3VnGJXctK",
  "key25": "3RYfgzPYgSoFx1BPoZnryhLQ9jfR7naJf7io8paEyYsZZSGhBeDphg8r2e4w1tbQwrBn5puzhPFHKwX4jdBk2j2Q",
  "key26": "4J8YqNWPRF1CD8wG94Pzq5AESEVQ8xp5yAGnLubr4XLiRAgNuxHANEGA3L7kZggJt2JbCN8mKkeen9zqi1zcK27a",
  "key27": "5UxTQyYg1e8Y2P72dAEyYb5As4xBurX6gWRZ6iJb5uFdsMnFihMp3XhHKvwvTgeCGYpt7MmEdWSs8YjoBDB5XMDu",
  "key28": "57AH8MLdvXz6LTCkkevP6Lz7QdsR2KEzMh8xfnhJNFuj6sDrsYb5txjDwput63HtXUU3JTzSCFrec23rj36XLcEn",
  "key29": "5fqk2FNseTCKNp7f4TdwwCMMLtrHTZwxx9pGpfuNMdh77GyGbwjPF4EKieSyh4Frru1YNy5CXDp2zKztha2RyWyD",
  "key30": "41DrhU9eFxrPeyQTUwmhJKRPsKF281tnyKRbpMe8phr9MjYt7m1EC7mvKLMEJZ9pddJmSVk91C4mPHk1zVDvXQWt",
  "key31": "396nzLehTXR5znpXR2ZtiQunb7VsgPexfmuPTWe5LDQnknPwUkhYD2dAd6M4QhaPUD5EtSvU6CeWWRdjb3Rge3bA",
  "key32": "22T3pJnwyGLxsvHVgW8tgN9LvpMsvCxfv4eFUAn9U34Buup5PXxk6khAxddxLvabiX91j6ESmVbnWtwTh1QwdGk6",
  "key33": "qd5oXmobuL2qKaAsFKK6EupUn3Rax3fzmhynDizMrLHEQtwkisjhRYoCqzPTBJu48KzTHvCNuMpMkgef7D3RhDM",
  "key34": "2XpJAtKj5p1HKmLofyLw6jqFgZtUqKWkrsoUXSzikWbCafsZbA8vEiXvscfpjwnyGjU7byvrkQ735e1r1rPv9ppQ",
  "key35": "67jVuMeTHKRnu4uhPMUUxv64TKVbHJyNuu2sXjP6KsAG98r5um6sqCHms9t2u1jSgEJerxj6A1UvoANPUcQdBjRw",
  "key36": "BrTWzGx7k6EBHs7B9RrbFVCbvRSjNwZnYiaMgt8G624XMpgEYofm49faNtkNDfLQ57VM4E2ZsivS3gca1NwY4BT",
  "key37": "3Woj87Xx3MAJxf1d6E1je3DUjKKH8eBcLc8kKevoC4se2BkLkYnhqMKo6CQERvbQriNjJzhfxKXQMSKkjQPHxEFU"
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
