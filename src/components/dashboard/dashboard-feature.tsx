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
    "55EzVwYxvzz2aGX8YxBN4QvbPKP1Ch9xooCnaz8deVkYqh5z88cny1aRKCrP3NbRNBaBAGKBB8LNjcwdQMkQY1Mc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gZxSKc4e5iwscaGGJdWmve5CAiYUc1fMFERLFDpD6Bj8TUhj1aKmsVhMw6PwUHVXtrKRwjHjKGxH3Ffy5axHa4M",
  "key1": "2PmL4aHMzTagXrZJRFZfeisB9Y8zViqDNSL5bxyiXsi7vGZFixd8tsxc2Zhq9nwUCvtPvL4khMovKquX3UvLpvTP",
  "key2": "4GJgHZqgcHy7NfYg5ByUfZuUE13RhDryEDca6PssXHPoUovKK5TuUQbxh2cRh3VQ4DSfHsTGw6ECznNWK6ctHRSy",
  "key3": "4oSvnL8xUhu8Ut7TTs5D72bQbSPKxp88YEFtHcSSDHTFucj4Xp4ZBiUXKDj89EACwAuNvcFvWe2ngMVZAf4JdLzT",
  "key4": "24wPTY6JR2mQaWd69a5A6GESe1jUawW2q6KHtpESYJmtQuHQhdq3d9knZVSnw62AnbWM5z6cvxnCvkriMKcD6A57",
  "key5": "53vR26XjZD3twb9gXLG8uxcBuCGgFSoxUQ7G9oAis9rmqKJc3qoTbbhWg7V31sPePHYqxbjz4AMGGchFVdK8Ufq8",
  "key6": "3W8NhEcpAQjZqqPdD2qaqSkb1NvWyBcs9qN6BbaKcqRp2jd1KFN1fFSNTpEyWo3koNUYfyFMavkxbrAhHh58m87Y",
  "key7": "23hzfo9rP2SUER4CEqo6CWb3QL1JSLacgri56tgLZEhm4cPxtZ3k9wSDYt2QnEShfzKcyiJ4PSQKH5FyNsZ936ap",
  "key8": "ysiyb276N6JcFsJEVzDjde6VwS1rimyg2rKJiqyrvP85PjLGsEVxSjUxKKqKzB5F8324nJQTY299X6M9uHznXcx",
  "key9": "3HHAHSnvwMRxDsA9pAv7sc3FVkVmKNPnSQmEKC6KFBaWb3R4g6EkfjZy5GqJ6fhW9qU2t2vKvwygVgwfxNBEmhzR",
  "key10": "4zQxvwhtJPZHLh8WnQgWZPZFZaSbCEjPKaqQ8Dv7sUH9dGen1UBXs8wFCmYAHUG8QW5L7E3cUErWhYH3EKmWiCr1",
  "key11": "3sMLinTwtdqv8Ja3hM6zw81TYosR4kkQ4CNSVWtJjHzy5sfEtwTYaQ7N4Zo5gHvDheJuQ5kKGP69QB3g283iZwwt",
  "key12": "41e8BMhXjqBjwxMPBRTPH5armEqSQVsFP24oaWANUdSkVTPGNtwQ7aJjZXhNWLJUJU5UBj3ivuk97MiSEjufTJ7b",
  "key13": "27yr4jb27XRr1UQShEYdkMgQD3Yv2RnuXcn7F8S79ksY4Yyi8KQMSTirE7REsrqkuUcef8EhmJLnGHRAyHi3ASMu",
  "key14": "3y5zEJUkNboL93r3CYEK3esJ5qWu299g4Wj1ecTHvkJxNgnJSLfHeDasUjnY7m7Ka7NJs5hKaXFV1KQWFNkmRFze",
  "key15": "3uqFn8XfCiA6sSvBxKBBc46bEqf7xWeqKsk34swuzPKGqFVheC3vEZbCtorMTJ1kjsoS61JGMQ1a5PqaZCYurxDH",
  "key16": "ZBGa1qYGdnbEVf4G8ptHAsAjPWto7VNCoCdb9QnBvuCS3p3LCQGPFeZ3hy8grunBvaAqQm6K2thLJKjYgjVKdxg",
  "key17": "2Se6ivGkTLTABytcwR56JpzRWobzcNopF1cM5Mxaiu1A1gdjT34muE4ViuXwpGmMv2SoAeWaGcSbV8nznAEBLT88",
  "key18": "5SxB2gfk8kHCiZvbvVaUU21nxjnFGHeLc8Ni2zYAshTGjX11Dobd5Lu6pciGsSGqTJa4Zkk7FYpRaZ3t4c2mju2a",
  "key19": "cFB6rsV9gnk6svPYdg64pdXQULZrqbnxqcC6SwjUu9qwo7ymvnsqTRxydcbKV5MvouQ3sVnNuE15vjzJumLXC1Z",
  "key20": "gC4EdsdKhcpDuXM6nS8LgpiigHooGuj559Zgeugs3WVCXKqsEUSisb6dXudgvodoV2Zeh1V3c9GdALLyy9zKYdX",
  "key21": "5LevLkC51ZVEHoXsgQqrgcjqG3zXLdnwRdVVsGKb9z5S6KVGR1DUt6jC5ViYW2ZaNwxmUvKMR3nKL4uUJQ3CHWgD",
  "key22": "2nyJBE57oNrXP9M1TP6EYGrSyQY3VScM3HqGqQEjJ1cj62P3vooTMdrEBK95quJngqULwfHzWjeChgTEadasQVhD",
  "key23": "4pKNfuMSZCJzMge8teqXWEB7oL7AyKY9pXTUrYw77kSknbGgqzsjR6hPFR3u5xzsVrVAccuTF82JoQTMhPodcZpe",
  "key24": "2nLc5L1djvL5WpopdUmMkexuNYmPjjb6wSRGKH87k5yFR1XYddkQmr5Rp8ynZWVqtzuoCngTNbX5eBhQaerK8uk7",
  "key25": "EWN3xJKmyKpHtg5Rtivq5a5yJ7xzbgSP4UeYfyDhojigKREo7m3NzCcc1X5jAPD4LJkeBGhWrMnnaL6F4s4RShx",
  "key26": "42HdtcHURoGBPM5f6Uw6wPA9Q1nrntFSkXSDj2yCLZsPpC6ACFv2saB24XDjds8hSZyjnSBfTCmwb9dBkiNFXiZ8",
  "key27": "4eUuZphsjUTUig8Roge1fG2hs8KSMdwgQ1JjnVfCMV8NhhZCTrWXHLJYksMyFueJmcAQwHhpJYNYUSH3X1jCKntg",
  "key28": "3onRxARrX8dewg8Bsxrg6jSazSD32ci25f2fY8hGRGytzM5Vo2gWfPRR5zWcnXCAbE2pQU5NBankBWLjnDhG2JLT",
  "key29": "2uAbKp43y15MAxvTa6ink5wpHAKqsCoLAJBXz7RWFSKEki8dqH1oqCu41nKKRWYwArQa5rcTrVmvqJ4NQDepGpub",
  "key30": "ZeJPQzzLZN7GFusQwvRmNNRqdiA98Lyup8CWUrjZfRqv7ZjSjqxSktCo5piKTpw654UDxAEHg241ncAmNf5dq4G",
  "key31": "411dKi9FxfhRs8Rd9nKBxRrKQNV32DiUDaMGqEPcYwZMTMFAabao33cvHPJYkhyRe2xBiG36GFpzEtj3Bq65hpdW",
  "key32": "2VufrZCqtMALWKtEodcPoWM3X2a4YF9bX21QeFe5AgM7reamhq5WYQeSZxBStWPvDXsX55Lh7W6Ft1PRb2bRzsac",
  "key33": "5vSy2tJVh1g2jp8jHtxjJhrF2VQs8yYZiKVfvzX2beieG99HGnwQ7KY1FPyNprm8gabvCwz1R7FpdX4KUScpRX64",
  "key34": "3AyebZNkVQ9imGQsmKEdSjV54She95n7FetTPYiRViY4n8ZPrCFco9UpCeKiMKbAyE2WfcQVpnkqzvRw2DgmqjGr",
  "key35": "2ksbviB8ZxW7tCPUNrk7qmCJ4sFAY6jv11MZkaMdi3tRPS6qLYhCY1BMjwEUpk67FeSFJeJC5Qm2pELgCkibUohS",
  "key36": "5LWsXyo1xF4jRg73QHvuga1UBSLm1fpTX1xyuiCLmxhQ5keHiw7BiUW55vCdTENT9xDinpQt214qXzRRYjFVZg14",
  "key37": "3D7FfyqV5T6L6TVusTCMPDrynAwaqhUPzWbwSDnLAcfKAcGB1v9fQTSY5i1wPgWTR3ahZrTycyjnYDdbAMW35sRo",
  "key38": "478ubGq6DgtX76TCav1BpPcBdKrMFvqSTxwTXeUdFJKxsAaNU759VD6YorRwq5L1HLZGTvK6RxW879oiLaER7AM9"
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
