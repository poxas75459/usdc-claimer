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
    "5LfssqisLLC8vSdu9VhGFiK1qKv322RyimYxAty7sysb3u2n4eHyXYAsyHRPZq2uF7p8VrSWid4v1yAVM3JnkZ1a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X2eG2JzTc3De8HudE3bCnpy8zGf9ThguHXBD61bSRhpCgamxeRSV8eSVSu6uXufV5cUtnK2LcWj8YPgj1xLFxrH",
  "key1": "4pKbWfmvDxyUSbYfeuif59EEJg5d622EzDxd3ycgYFhNemYiSS1B3jsQ3TM1zDhWc7xC6JdzJq8pqVf5VTb5MqgX",
  "key2": "36MSknb3eH4NqV9NtC3Mwy7RdME8cgTra2GEHXx3CTJNxdbtUutSr3ygC13L2NkCNLtuPzxH15FcEWQ4uwjyHoM",
  "key3": "4tnjBRWi5ws26SqraSAPC1tjvSNvRWu9PFDRJhJZporGgPEAhm25ygxvB4CcN2jap8cv7ZzUrpXi2PkMiDD4QkGc",
  "key4": "5GuUyTABnyuti44g57x2AZEWYcqL8m4NdKShNqv2GtiPyg6MKzoKm7s9xtoNjbusuFfrZ4Ric1zqzv49oTyKHgC6",
  "key5": "53RQEZqWUZ3jurCYs7q2dzA8qFNg1jq9X72UAjFXni3TNFxD5wGAgjdxNv21tg6Y31ZjTi5GJo7fq6xYZrmV8yof",
  "key6": "2MmvS6NUzd4G7cF6UqW4SP5oqYqthudtPAex6cpsM7akDGPaHtnxjtDvy3vjqjci9nN5zegmbqFboV5yRKGrk2ni",
  "key7": "3hdEMbs2262rsjn3d3hLCWDQeSHxrj1zS1ckfJUqg39VHftBWrkHVnpsLnrcVjizP9YdwD2F1BhWSkmBaQSwUtXi",
  "key8": "2UzCHdxVPtnmJpj2HqJm4nXK2BAzgnjfuqVp2D7WrKeJmeMiSXUTbtEtt24CayMurkHsHF1K9SmRctLFPV6LDPNm",
  "key9": "5LTCJGitydXEqriYCwZbDrKwY8RkLP6i2scbnNazv8LbhWWe4kpUPVPvbBr6EJfWY8sY6P7BBqvjge3jELnferpe",
  "key10": "415dH7bgKRJDSiobYjBWsXcuMMEicBKL772wYLrG6K53yBjWrFemBD4U6THb6TQrxLh1f9hQi4Undn89ZoVGGEEc",
  "key11": "5P7Xy4mHFx35zaG5QySye4DXNp4tVBvH4V7S7qamaa5Tqg7gQDSFCGoVcYKT1pf3RFC3i3wiVhZ3Viy1XN7QHYHH",
  "key12": "4Ctk2A9nLfz62ZsF3zeX5hpN4rkuJtYLt8MP21jDiumwvCUi9N2TvxajA9nZC5RuWko3EhVmb7YhjYLi5B4i9kWT",
  "key13": "4LMwUic9R7wzWmXGH22gWYUMbT5PnUvQX2aoRwPFeantNwnhiSZRyJiQ5uBhMR8iTBkbKFypbe25Zhay5Wh8ZAWb",
  "key14": "VYvS4VrW9aCDw6n4v74xZvY2hjxQ75nuwXzLpzjw3i1CsaJRmkmziiKire6M1w3aS5y2MAadvQgzaaWXPz8Back",
  "key15": "4JWDZXxJEFFrfQ7Ji9zgJpTPxAbVUqZDt2QH8iyekkFoCS4mLAbQLc7rT9ywaVhdctxNQZif9Th5iYyNfcFxYiRZ",
  "key16": "31tpPfXdyyyLBczWH5Qfs1hJZQfUpPnWJLDFidU7mG2hdJ3U795DxYdFuqQ3ufF5DFh4P6b8wnoJcHvNhHdEor61",
  "key17": "55c58e8VheBVEyrcfLNT3eeQJAAD5xozWiAZrWEaqdYSYs8iRBDh2YJ4SRz8AqX6meWe2WaikrifuksD9BqKqE5R",
  "key18": "3hiXLmBof6WwXgsW8ionWpNWFqvLacuf9uHGnWaf2qjwRWcmBPRPQZv1EvcNRL3vL9ZPeb2G33459nB7UkkttehJ",
  "key19": "5UtDvABt1xkpbgjCMicWqdoJTuDC9bML8tafjjsQfenJ7U2uXpTboczTmu7UvdSzLeDzNAycFD2hxfRa6QwkBZK4",
  "key20": "4DtMrnC9JEww42Wxv2NCot4zwM6MHKEprqeiXN7SZWFqxve6B5BFVW7YAKZzoNGw8UYGNkcSjhw6TQRp22d9EaJ7",
  "key21": "3nb4fh1JnBZCagHd7zXCDqbCbYNZiVW1ceCnXuyKwxNN9zkY7negTUFeRYog5tATfaJRbWAPT6ng4VcdEN7E85Da",
  "key22": "5RJBVc39nW3xwVMHgpk9dCjX2djvRbDKminJsg9MbzbUGfLSnPXkWUh63whzuTzFg19gAckMieL3JxL6ecthNSZh",
  "key23": "3eKbTsAYy8zVYEseBzofCXroakBALFg3W7GGJPwEnUa5AUdKdCziBpPdKMwEK1dAREKG1aJnXXtXmMkLB8yn7k7t",
  "key24": "4xsqysMLRcrbuxeuyJWoeJyygrZmPjTBzZ8xCnkeL4wih46LYhCMmURaftgMsMkPKEq1WeNxPJc2BXZtfj9kgt3q",
  "key25": "3bG4u1nXNwyFx8FzeZ2kzzGKoDB3ohQ4DDPrbU9tN9Wc4W9M6ey5EDptYGCM5HTcYQXLuA6rTk3T2JRFoANwic5N",
  "key26": "3Wyzbfzh4pmAJ8npEsBTSv6J7KKEVQJ4ngRHbJBsHy7hk6ghoK7oyjSxQP7b4kqrtJZPvxkVZGTf2UA1JDAzbwiX",
  "key27": "5AZ5LU4brzM3aekDdc7NDpig6bbeCcDNoMrN2fvqFvxfWvshFq6mUm7gqdaPPw4CUoxJ82iAEWcg7MoMqjvs7Gio",
  "key28": "4NybJhZi3r1bWGAzrhqs8pPf4wuQNPzQnNKHejJhbCAFayMUNrFAzvgNZZE2VEQv7nECt9ZHDXCifnSuUr3SVL9v",
  "key29": "5trYCuYm4oz2VsXJN4rLYbpFTqNf54uQsBsE3un17SopJpLhV6af5yQUBNZvXZs6uuDhaTq7Mf5vLv1VRmoAPFoR",
  "key30": "PXrb3mC62VtuG6gMXme3gbxBoS6632NDs9do3MJMkTwAKhSK7x2gKwVktHxAsuW8sTFRXoZhKSpbpF5Uo4FEWaj",
  "key31": "JupG6EnSqVYsFjSTSg3BDU9jJypWrCvqf15ZDp42sv3RfoKALyvVMAkmtQwmCLFVGi93KD8vUXDeq117Rtdc4fa",
  "key32": "7ECUhwfas9AcicgWreyACHZmnZGACaed9m4oTXYn97LgUofzpx9s2C7fH8KVpJUdKvHbaJHSdSZ7XMe4qKchd1e",
  "key33": "4d3zaPymm1y5UjFU42ebuqZt3wWtHdP19BnZDNhmnmngkAAudnfRJAUQtJAhra5AcviQu9cCdXYtFmdsTDDaSRuQ",
  "key34": "3DY16vpqzJaoRALy53azWSJPmgfvuwDR6Yov4Q8c1SSeqrS32V4MyS6HkWTvkXJCRdvebx7uCtvRdLwc1dqhsemx",
  "key35": "65TeejHRgSiPTu72BkoxpLGjyiVarWQpiaPYVrNpMbSb6p1FNqaK8ViDiCJ6y67ch2GmqZmoHWFf9kLB4uwuRCvh",
  "key36": "4pvviQbuq78MN9XskUrEuJrDr8C7oQQfPgxUydKykLtFECFWWou8yFoSdZr7aPww6fauxXyxhU3LpkCtvuomBzHe",
  "key37": "4U21duXXR6dKWefHJ2wctbVkuJ2ChfBc18QwvC1eJrUKpFJd8rbCZtwbYE5NHwqrdv9RtJZVkMW8QqtBx3pEosFf"
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
