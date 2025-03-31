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
    "Cp4osgaJorZ7qStGUCcm4jpekJpCDWP8Txe8oibrD8x3EuZQAJw41MfcXaSEbs7sXSwxYA9azkfyps6RtEwDvhW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PueDGUWThLvonvF5L8HGD57TywCjPo9ve8h8Uo6snvbPBuBPErShjKQhVVcxZN6zbKVk7FQW2wCAXFzFKgkBGz8",
  "key1": "5m4cEffvypZh7y5rsEJ649oVmz5rxduSDWguhbKkhD1noc1TCNCxJx9izfMygtKufqRAkYUf1qP7J7nxrDGybpZE",
  "key2": "5VYQQkcwQVzQSuofxYBp3hJ2x1SkciuMVyyjPjhCz9P1s1kADMmpjHN9nayqQnTtp4S2fmRt84W7Fvx7t7gjSfei",
  "key3": "5A6pRKdGGksg8U2jUcLwENNoWz4c9UxAAQxXUBbvoq4MLdYgMttCSLMayBb8qvFpW2bypDPpPSi5WQV73SYXrc9G",
  "key4": "3ySJPbgUr1F2smUCFH4MpZ8UuhRHXgpsmUQQhPUMrzqNfaExwTJatioxqSjNqFsEwv9HNmyMvLKCR7JTHTVuYDpB",
  "key5": "3GryQmb8YkMs82HJaRyCWbJ6KDBPhFet7JUtcUC9gzFNaJ6hJzq1DyUix9BL7DRYT7JcbQgjgKsHXuzUTUC42RVH",
  "key6": "HDMC1d1jrKvLRde9n6uhot939gfK89syp1gEet7TYr2UvhyrqAQfm9PDKRTDFaHvKarxZ3AtE7qvSsGEoN7aA59",
  "key7": "3gjJqFkNFRxpfUHM9HNBBh8vr8wTXW2xsdU4F9my4sBYqwxQgK8WJPwwUQ97veqyuwn8jvNesnAvFSvCXyPNbUEE",
  "key8": "4Yd6bFLRWbdEhbUb765UowTiscSx56dMA1ZjUKfrtk9EJm4G4HY8Tiygm5xdrRmbqNARqUeZHW2tCAvNrPZSa7VK",
  "key9": "4kCngmqECpmABqzoi1cQUVLybxpseHTBZct7xihvHHhWzn4NxgWrmkrowKCC76NjzZXjT3bSm4TEtprLa4zorxNB",
  "key10": "24uSHbymfmtwvbbrg7cQA6kdrSsQonZCFKT4qZkbsRyX7YVxjA9etubp8dLHYyAB8zeGZhRC7tp7NSt886VAzWqU",
  "key11": "2wkZfMzX4Zn3drYB3WUyFSCW1xmsZSUzAuHdNN3qiNix9hufqqCptBfXmsjCZ7TvjuyWLdJxM6XDYRa69TYjkMY2",
  "key12": "36QR9H8yrvofjCwjgCw1SzKJo7myonBho9C6S1TUf8nZ6MF8HUxo1au18xfVaCcTWvUBh3DbyVvT11us1xt9uieq",
  "key13": "3Zo16tMuNsKghRoPiFagJBV1g4f9n26Ev4TMZYieo2NpifZVBc8AUbaCp75UWM2Zjp94iDvecbCVuA8pBxHzRCX1",
  "key14": "476AXQ1NTt3gQYoEgfitDLrVd5f4juAECPFN5vg3sQ2kFCv1TQmnPA7UMktcTyqyAoaFpqpMPCecCd3rzZJLzZDa",
  "key15": "56HUvNhW9NDwanWPMBXuRDAGmu8FaF9Aq7nrEwtG4wKYMXeAiMyoeeVZZxvLwxWvs3gtYfceU12RqQEejATvgaaJ",
  "key16": "4o7Lpshq9bbXjusX4Tqyfcugn3Ne4RmWzYmf8Xwzwq71DKwQGYtn8icUScx7CpTJFhdWZcqbTrte3knnTLALV21b",
  "key17": "2DQ3wEFA5MgMUvUb7RfuFwktzM1juUtka3gatTBeDFsPojzRgdDZ3HauQiB9sJ2k6CtiuqBqoqzCth3NrL76QCPk",
  "key18": "5yjFd9vzVY3mSSdLQE31gJQnEyF4FiJdBULaMWKjPvpEcasLsyRam7kMnvr7tBqdkqHy7sa2s7ktuFv2BML3UfW2",
  "key19": "2okL23UgdGj14myVmBscuRELsGBLZGFX7nQtJpieNB2EK5xpf4gKoecjbw58PbqUaLhLhtBnTUx2PuGgPhq1nLZe",
  "key20": "ku16byaXoiVhctx6Eob5a3QJa9rTFpuMoYcF9Kreby8Lmnk6nrvc5AMz71v1uwrVc7qHQmGLbmoPkRWjGfzjFoG",
  "key21": "2ZFMyCfyDPsDPxByyJYLkAY9D6bGhnB69VFQJv2LQAAJAj7qF8z6u6wvMpJ817sgT3nWMZtdAYjRBJUtXLMPiaFi",
  "key22": "3HuTyVeuP5ceQaRxgqet7ZnPJoETohnnwPb2ewhvdfNEe5HWgLrywyKfrfXvVNMUuENiVy6q4GwV6X9GG25AFtCw",
  "key23": "4mh53DZ2h2ziMmMrXtNHGoLBXBop7okpeSBgFwxwsmDXjJVUJoLUxBoZdnZRwuZnbq3UHaxmDcDHzB8VS8VabCnJ",
  "key24": "5Yio54Fknb1MJu7N4ZmwNeunVWLLnL8KQeyc3GzjUaB9r47EvUB94doF7zx6AufL3LgUxZ6Qebw1tBPNK4W1rgB9",
  "key25": "ZrPXEJTikHrZ3fWPFd5sWyvcCTgZYhazKEUbqP6Q5RLKsweurTUnX21WxJiXtdZPVXZUtnBW4kGazbi9rM1X7jW",
  "key26": "7YyJYYPYW8PpQp8dwgHPEVRS7ikLJLqdGC3KjACL1dhEH6rXxd34ywCvMehituaN4f1La1Ty3hS4zo2JPwTmTDy",
  "key27": "4mrPUv8Wbj9ENSC5fAycwmXkEUeMsbkEkKG66YeZes9jHmbVJqKtzGYK8xzoePCQ4wuWZaSTaXeRK9E1RMPDVgfJ",
  "key28": "4oiAQz5r4kYpFVFhbadb4i4D7jpKH9uHWfWbJbqvPfFFD9e6Y4UKwma4zEen5BuAHS5tJU5qixmnMwxYAzV7FiNk",
  "key29": "txukLRYc8UAsgmPpZy6Efs5pCaomWCHbRqyBmiDiK1X9U8J3r8Twj3v4hNG9T2DQQeqt1Vr2mCrCVCPujkGPQiw",
  "key30": "7idkm51Dg9fYoiu8cZzxnfr4Pc9YncbL3brdKa4BCG4ZysM5Wq7CAFYuvLwHZxnYSTCji1XFdaimitNAPgn1vi8",
  "key31": "3WJXkra7R5Fr8wn8iS6DbscXY3fNAzgBg1BPr1KJnFW7ihmfcr8LeykF3BotuPZyULKw4ajdCCxKQ5FBNmPELngX",
  "key32": "4FL6eJsJUDEdWLUBANeF7M991bopFk8hr5hcX4x1XaNzvbfHG34mYbeKZMcmbDw5ARuPfC68SxjSzVE35i5yWddV",
  "key33": "46xe4Dqo7FKJ9NMkrX49G4bTbfbjFHzRWXW9DefbpT6uhyeVZhtHhXQ7D5SyQALHc4uBuri3HHamBBS5GiUkaD8E",
  "key34": "3CN3CMTEPFuBozUQ6KKLduJfDBwwoqB95MLaMVfzSrCHPtkqo49XZW4od2FkBKwpRpEfu2SN48w62YA5eXcTujcv",
  "key35": "C1ueZGvoBe335QrjNyC8gTCfBVDiEuSyAndg6Wt7jakZsFM9SWYvy2ougi5f3T1PuKucEAFfTL1gnXBSWFhyKyM",
  "key36": "3fjeDJnShoLtktgZhyBkJhnfw5CqzZb5c813sDGrbJo2pH8V2XzcHaWuzDdsZHEbRjQP9qfRo7ZBDj96KKCmKM82",
  "key37": "EEqSkkUAT4bPUJm6zSb3vM7kgPFriVMMGvUapyPjRLDrkrsevxFJsRHVEtWEfnJiNPuKJnJVqYrkdFSJcNv1uxA",
  "key38": "2dxqQFdoKqAZFjPftYoWXYpSw44yMqafzqggJSPZkjueR89PegC3qjboBn5zDFixQAnM4vUAw6rjXsVp9MiTcb3H",
  "key39": "pUvuT8nP5G58ZH3vXZGzA6Jy7mnBQru58LbXG1Mhq6BJzpkUerrCPA6H5sTkH3PpxvZyDKMZWqtLw8Xg77TrFGa",
  "key40": "3wdymQFbaxqrN3rt1DHQZ7EvVDzdX1C9akT5qAhzgUXgdp2D2XkUwyGtF5xsNqBUMsjeXzus4LQNb36HczTDZTDu",
  "key41": "5RyhjyfRGRQv6WbttJW2eJBzPTBDYnbeThWVk3V7Wk2TmKARocQTPryWKvjgdfbNXRECdumvmccJ7heTn2quT5Za",
  "key42": "3y4FNobsWQBaLERwZok4udCmEe1hH55EY4mRpXSh9daDMK4hPkUJTpeXeX32CHzJWAmTLiKFLv9BDzTk2M9eBpH9",
  "key43": "2ZeCHdHdKzt9Ltz7LTYX3UN3LKrfxLD1ftXQXr489CJCNCneCf8yLL7Lg6hSEyfd4S6viFMwqYfaBdJdFcWLKZZd",
  "key44": "2iedTY1K7PW4VXkqgxN56b6fr9NPPrR6rTyWa9kK1zsgwW5zAssHJS2mcJpF9pD917VWLYUFScw56agTJhxDkS5H"
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
