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
    "4pBFJtvGWDUq7p13kN8Lz7LBbzrXX4J4QeGosVERiEErDFEFesZrvP9AcTF4uoputf8wPgvmvCUuKcAT9V1RYFdd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X9LM3nv2rhkHgmdMVSBGz9vg1yr5Y92hA9VpRSp7iua3R4AmE1DQt3CNS7aS1cMrd2MRaeqGSGDrTTZiNjMMnFc",
  "key1": "5oPsREzfjgv5Us9sDAR88UfaGGGJxokXd4oXcC4yfGaQAmoNuX8f3rd5sAohajrzY25ftSDzVxRVmtrX1mv6pzrY",
  "key2": "74r52TPaYHfFpuHdv8GzkYpz4pqyBjz1j6QVnNYTVJ8UBtkM6BfkGosA2BKtqJqdZqDHwShh14SAj32hX3ohKJf",
  "key3": "5U2FYq7WMS54UsQ9rDg1RGb227hQiAmBZZbxfv5smnth8RwSsLzJcErdrsnEjAyGva7sNfmSc8cbzGqrhLWAJS4d",
  "key4": "5zbuE6KdcaHhvW6jYttDQ41kF2258VdwPyRkeaP17XPvxggYMSnBZFKrMRR4vazxfCHe9ZaMhodTkHTXsoRuZq2q",
  "key5": "4bSeRrLk8x5aUmcY8HggrEt8awwVLYx5k4XpEU8XPwjfEZSd3s9wEeBCPHr7efdWk7KhuK9t9qDEg5q711pMeoKV",
  "key6": "vcmj2LoxiGCVDoaYNavc5T7KEX1zWLXNNnSkpqg5mWLKGdMYTffKo8UFm8SSG2wVDggQT6VyuNhWjh3PSABjevB",
  "key7": "5ZRpWPV6VKwBJtGA1BNtbMiwBGQTW5kMDs2qUHwE7sJwTdTsBH88mJrZt3TXnpfMEa1yAg7NoPsGPRzcmNDLwchA",
  "key8": "3peAf83HBWrfJdFXYgXgKbqUcv7DxjDuzUnSHZzRt13Fix3nf3Z6SD4QTQ61UBiBwvP8tViLqVwq47ELVmXHwqLU",
  "key9": "4G1vgTExy7kUQFH6Cvgwtj1zQsPUeNWRpzhhtkf8zu4MYfaJ9bi2YNgu7aGuzpVWw5ihK8LgwWEzjkozAYDXKy97",
  "key10": "39HQo1EJ9oJMY2QkeikwxiDEgQHaPYr4666SP9MPCbKozvxzxVCogBNnNyKauLnFVvKZTSvkczMUzms46rFeCobZ",
  "key11": "xhDS2T39Q9WGEULxtKomhH8X7GF3F719XEArtM1cbctkd9kcy4D6wGjRGTGzYfaA9ztv3yuiV6d7xGLHQnRwdeJ",
  "key12": "3wgs3k1HuTiJDfhY4ZCsXs1f3k7iHrhSvvvUULLoGhM9jvGVQoG74tEFLG2yrQm9LGf5CPNVcmQqQMvRHCM4VT5E",
  "key13": "3N4ZxtPxtnKrxm8BoaQDHHqxfKXUsM7P1vviM7xS3grBwmLr8LKFgLUYWTNvRvJXYL7Ffs8ddLdEajirGd3GqkTA",
  "key14": "2JafbxgBJiJ8HP3FA4cfzPi5FaYs1VmS3EfiEHS2txWtPNCvnVpye32owbGZg9JojGyzAmKjkFasHKcNNsb8vnu2",
  "key15": "3DEqkZzUKJrpnFgf2G3JLo6Y4eDaS4xv3VWHPjy5Wj6To7F16QC673CZZoD6hPQQjAJ5YxfqqKErQ5KGsVk6tZuP",
  "key16": "5z64KffyoxCSPzZcjcKHktPjPJKgRLTzZLqzc3hPSnZHaXAiGuFocHHew8ws2UjGsWQRjCfASKgDaJaZfUGJ8Hb6",
  "key17": "2MFjCrCJkNk724G8E7L7JSnYSGVmCqxuoD16LyNQuMU2DpGEDrF9gccRBkcaBtvFsPygJVGBzNbRSKgoc6WbFwXX",
  "key18": "3Wri1aoyLMUzbTG9UAmzdUPQ53VfBNiWewGV3LayofgMg2bRto7VqxyMrKAs4NtUy9o3QRaQeTjTEYPtMT59KcHo",
  "key19": "3ye4kcXrAgWWXY2h58WWCJEvzEp6mLA87AGGr1GgFaGkW1Vbphe3KpQqSqioWCHJav4dmENF43mJP73sb4J9DBvq",
  "key20": "eTN1eUBNWoKUqtRNuM3yfjqqTYxoHAfscbFv3g5w8fwVe45fo3aT5Ye4emUYtD53gWLY2bvdt5eEJzK9KvZhqBr",
  "key21": "4mVzQgPgT3zMMt33nNsGRyU7Fz5EwYGXWrj9eiHZX9c54hTW5H4kfebYduhJY2Q87QAmxF3egyr5CDeE7aYv7AYq",
  "key22": "4YHVnuh6Lunw8KsPS7KzZT5kmMB9yVmB2DxhnRWwV3dR3na63udtWhLsT8rsPHre1GtzZPBjTPfBjdnAYKNMJf3V",
  "key23": "safjKobQsH4pFK2ZYMHNyMxLag2zfDzVs5ut6zDtXHbd8wyzsnZhiGcQVD2ozGQeh7J6NP3hXa3pjTz9cWADo4E",
  "key24": "oiwt7g2gEk3PBH53FhyoUTWCZkPnRZ9RH6CxWSW3xPfY1snZpmPdf3YrrSLAcQr5icbwVVVAmzFTxi6RtNbPLw6",
  "key25": "4oQeHgoGPugetFW6BZc9BiQFqCy4zzLusBxrmmvhe8W4L7FQNRFwSiyiND9i6ZujbZQfZNJ1fJomz2ff5M4WoDyZ",
  "key26": "4Rc8qTZJeojnFW4J1ibvKyLqXjZusso4QkqYWLLP3SaErZyqyp1xUw6YkxwdCmM12uQGGWzgFrEKRQDaxzVaAbSG",
  "key27": "2AgeUkoqhbQJ9hRzPy2FfRAwTycsRqUJpYCKVpWRaf3GGyvi2LLCxSLxRzZULoFvoqbPXoiMSCDXx4ntdMst3MJT",
  "key28": "4KEV9pi1XWazyCWzJnEunt9KdxLmRxmTRJyvwtKMqQkRmeNgdXXnYxMRi3LaXDfMUUtKKHJUPhtm8hP6vMJBKwQX",
  "key29": "596wGoRe97eBSS668vu1vqDFdUDTvw5WgnSQc7kfT6hkXYJ33pnQk3RM4ceL5KhmFsscLNY5ZkMRMHsZ82x1xXnM",
  "key30": "LTEqyDSMFr8Hrvi3GK7ndE3hk6TZNSyf9jL6Hzc1aYkUNKzoETaSBPJcioKA4TJebCi8ZMwZQt78ce4TuBXCJvt",
  "key31": "2EkLfxdzNg8venbppX5hhWgvyR1Xb7iGv2ciYU9XiftFbTu2j9BSmXXpyKmQdQMFiaq4D4YasY5LkYjvbYxcJvKc",
  "key32": "5AxmY3zUckb1QLJZfA9P9aC3nBK5Ug61Yi95u3grDkn2cXJtSSZ9QwdhDXwQZ4Q1LPAMhZkB7kA465cnKqfUojre",
  "key33": "5FNaAdePUg3djLve6ov2HcqBEt3nfPE7k3jCsRKWfMwX2uFLV91YygrGM8VoPJh5nCUqE8GFq6N7YHH9u4yphoNN",
  "key34": "57f6hDUdeK7uL5t6yfzt4WoktSAJt6cUgGfwZ44zytKa524wunzhP8zs27JfsAvaqszR1JrCzdB6SPSJ1AkATFmb",
  "key35": "494GhLy59y5JPBGa6bhnqjVYpR86gy3zCSNV9vnmvYFtV6WtzgWHZhaeHMy6YpE6YgePxdpis22nZ8sCVJsCtwDN"
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
