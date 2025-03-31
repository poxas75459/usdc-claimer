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
    "5KXVdnb7HTVmuHWZSym5yY5y1RTuRz1aT5eNHBje9hQbE2rtYWEjhHJ4ReKFJZXvPNBK3ji84DWBJyxMYktMAVfx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZaZgWdNRr8mwwPKhDzrETuM1Par2cLxr882uQU3H8yyFqVzAWYUFGyd7gdtJZ6QbiGF9Ljr1iwhfVrxMnP7YQWZ",
  "key1": "3dBufLuSD7Dv7GfL6RzhjLXhyhWW6c2t4jpBARaoWqaLY5937sM7xVGrZiLhPQsW5UDEpSPkU1wswwtD715gft2i",
  "key2": "3EfAxHEQnuK5aAgF2BU2k1zoaSwFibdg6ZuusN8DoNNQPqQtJbY5wgNUbL7bW5X7y8vby5vXn11BxyJwTpwSB13y",
  "key3": "3Lm9yhpA8bFc5rMh1souQ72GbBNoDTmkPtvNgNu8Qq1nDmzsZRJAQ58vXuZHBRC51WHyZzfgNtHUZR8vDNpnH9jQ",
  "key4": "3mEyA1Q8yPjh7mok3BsAi7FdJg2mwy2688fVz6fRie8HiAiNZqSjz24WKFeTiXotXb1UtTdXE58ALBg3Sx2iaETA",
  "key5": "3t9NVsMKQVjiQVhMtUSYXjgmkbK3qahwhPnaGR4h1YN6RGBP5YNN5MwDk3SK7vxz3zLHAZnHVYDoBS8E2rJ3XuUj",
  "key6": "dMA3YdMxPWZXu2ti3dq1zFoAbpLf8TnqMJzYkXD5q3zBVyQk95XFSn57rKmn3redscReLH8BGoUdRMPUtrDBu1Q",
  "key7": "2tV2YFPdjszrKPLmeF12cZS2rXhP1far5bKTxLDdE1hWY9fQxvGPX3gT6yrkdbmLGzPurHvfo8AsDD4dyWHgbVsC",
  "key8": "4hKZ8abSMJPxMqBxx9UzGD2E7NNzFGYLrrn6xEfvpTMtd8tUL5juG7imNJ43rjRuTouSKMqvUPMq5fygY8ra39a5",
  "key9": "35jamChFwRBD912yjNbbmnKUh8i4qamWXTrUurNkruBUh3ptCcvpQ3dgBxWH4rrJhhFefBmxZYdsKndpyMQo2Ku",
  "key10": "3sT4br725JYFd7bak69jdm4DFeq8666JaMU72zshzkB1BRzU8mFcGLqnpwa6JeXVWDjsHBF32maGzVKDK2js2Rvw",
  "key11": "4aCLNGrc4rRBwKyNtdxij7k5WbFiZ1FhZmesYASG7UP3hxXcUTrJG2G5DwynhPHSzqUcXGSDTNkDyExgVGuZn5qM",
  "key12": "3w3gUncYvqZqKv2QX2kHKXgznS7brmNU4Mbd75b1n48mXa9myYeQevATT58Shp9GW99PJL8RreBrNMkGbfDi7qkq",
  "key13": "LFpZoGf5HUpjMRRSn6k7qQEktiDW3euHh4LXCFn6qTfGbJEjJX9DGfFwNAn2VVyNF2uLFWL8DaYRL8grKV5gdSt",
  "key14": "2NM1RkHFuopN8SaTbfwtqyc9Hynx2rX3KbHD5yDzsYkok5TkSAUsasrdgXQYDWgq95FVXKeQTxzt65ud41qLgzNC",
  "key15": "3jrsUMtkMvu5Vespcgd62W31htZwD3jedTP6asXmuJiPuzdg5hRa3FhyPFN3cAscaJx1F4MuWkLDJFPi5aA21DYe",
  "key16": "4vdg6MTCr7Xp7oVH7L197AhCxbQdvwHoVGwRu39GTBKtd92JQwKZH3NWSRvZCivgvjvHQa1n5YU1yNw26x6yKpoW",
  "key17": "2ezH7Ag6GhF3unkq7iyg24Maw515LHSwVNYxWUkKnZNcnPrKXHa7af2H8Dt4Lucpay61x8oZkztEQJyd4zXjvkLR",
  "key18": "46CkKEE2cST4NmJuegXacdhYxZMXmYmJmKahqBWpZBd4kmdy5zKfyi7nTZYwnGSA2jVCVEUvVm5Rw8qaHfy4QQX1",
  "key19": "3azu1LapD5fxR8jXSB1AbtE4gg4BPgqsZmShwu9fe8AXseQrfzPjfU7kMVaBsoMazqN4GhKxMN853oqJDLu9dUrc",
  "key20": "P3wmZnhfrrhxj9Ye4FPMYaDBXqNTSGQutmoiBYALrn5cbR5Hw4CFkxzi1a5qtFAYShGqW1iwtbq6CKCeaX5FesS",
  "key21": "663FToPdogrMLrhiQBFAjziwtD3MeSbWQ28u4UbXcgmgKwt7YWYyjgoRKo14sdmzJjVbgqRNC2kxHgjGp5JcVBxG",
  "key22": "5n5ZGYUzQ2LBxumEiSJ94EEehVKnYezhqWkiZXukL55wDKCQZUm5SaKqvEDobFntAdqujFFzhb11GafhfrdLyZQp",
  "key23": "3UWSCm8QXuGGo93pipDKQ4RAkziXT87pYreYfepM5xjymX2seHZRQjmfGhFhJ2p7SUweRLZSXKQGd4JNErjRZgxu",
  "key24": "44KtFWnUwHYYiMdZsFXkobvC8vVJoz5vvojgdqauu9Yv2DmXxUV5BYdt5CUNYZNqJeAeCmZHf2638YA14QUv4sMP",
  "key25": "3MUx8RpJDNh9wRVDmYDMA7RNzmaZfwYgeNkdgeGxcLwYxjYbe9uNr1pxU6G3CgFKagR3vuhN8KoPsDzxwMJmpW4c",
  "key26": "pwUDohEbKXJmRygP1Y879kJmUZifPGgdNqkzUmeF3x2hmtjkirttsaE1CtU1ieqMDXQcpugLEchkT2EEhh5WJbs",
  "key27": "5ZWnYudvYfk2fsdHadqJA2Dd22sYF4fPfkzvkwYYAVUaSCi7Y5b3hJ22VeevriMqvQy1FD1pbLpKX3XwVEghtCEr",
  "key28": "pC5Q3CTaapoDAyc4bkqQoY1RDeW4TRgSxkeX8Da14p5Aq4z88zsxrVRZ8fKYaPCCJCT1jqbxnS1Vk2VLneVp34r",
  "key29": "5dr8e6tJTU8FZYmD3Mk1F8yx82XPZuMRHp4AyuYeEvVds7cqMPdzEFrv3JMVfxXzMjNT3x4j3iuEVGZavtDfq9s8",
  "key30": "4SZfUU2ygmh5BxE4XbbiVxRCatL4gqJwWnwUM5C7azZRn9FVH3sk4mQLYorC1UwUiVY24DCRzSwzadJRtVZd1i2z",
  "key31": "3V2UnBdmVmbZ3neju7g5xjxsay7xUnbW5bBA5SG9AybfQExyJnQ74uCsHotKY1rR8H4wbDkXdFGwqE4sLyt6cT25",
  "key32": "4CYJV4mEh3hrLBBZAL7upQbuK8wuePkJpqNUFhm8QVbkAxFufQTMQV7cd9urYtDbxSmLArrwxikimbsjazGAW9EE",
  "key33": "3MzxFjYjt5J5M5qPkf18iZPNmkzDVFJrgFWC4gobVyLmxCvQutW9AkUHE1NbAg6Wm3uvxfe3nFrjJznp8CMAHZ3F",
  "key34": "4tBQjmbaxpk5Cew3hvUdEYXa84dL7skDRwhhu9ckZpfo8drrJnQRPVFDbdNk25f6AyvAFSrKivCx9v2LA1jcjUAJ",
  "key35": "rZsig2kK4JWrdTdUFssrN6TZGdVWQD9XaGiUC4hVSpXewi736BjB1eASFpHH6jHPTnDJBQKTz9zBp2vB1xZZAnE",
  "key36": "5Nc71Y598KJtrXb4EuqsTBtaGbxECTDpnhkBUpcc3pBE6eFxdmgeHRZ5cSasrLCgpcn794bw5jADzUcD3whjzSrX",
  "key37": "5fGNkpfp7faVJPdXMJhGjkkSqZHbzHM1iA1Dqg1bfJq7S4VheRjw6c7hQYXRDCdYDsxbnzK5ZC81JwDyELvckzuf",
  "key38": "3fKhnoAqVPXACr8heb9onpoMivSpEQLdkEzxWTxpwRgdEPznBxQK5zhMLwKd2o8E9qJEyEBANKdDLjhQdzfarE7V",
  "key39": "35UBkmLQBsGrwfQ5efYQGSAacUjYNdY5VDNKiyc6Pgm3KYWAt1QAUSNxZBQrMnz1PESE8siBWUppwMxedEGnpj5U"
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
