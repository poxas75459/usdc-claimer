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
    "Awrrt5SGys3cqxWduMaF1QT2FBZi5Mk98GM8emd2PkoydW4cH8uyDRZJsPeEVr7hBHd8DKkZQAr3fZGVvRgHgpM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZMhfERWyKjB2azdiqyQHB3r9FtJHEe7b5wcpwuC3NBE9rxYdacgiMhjDM7uiPoCMeuW8P2Jnc58C9RhRraFVKFc",
  "key1": "3DTzTydWu6Vy1R1gypqszv6xWnTpyfTAtDaMFP5RjBzV61GbhJozPL8mh1EnQnqfnMbeWoYbQ1TjSZyknCtbhDwB",
  "key2": "5TY39Co9Fu6yQyeRtyU37gNcsx41touMqn8bWQbDDNF6DTD3fnKBTYGGnV1yj2txUJEkD7q7G7fzCGKPpn9wXd6j",
  "key3": "2nZLkNVLa4mry623ThdRBNiZsF7ANLAngidrvzpW48Ad1396GpNng1boAh9KLxf6ZkFNvNrHpRogUQKMnN78WmiE",
  "key4": "3ZNFVhSsbcituAKcyCwBPX26hKszJ26KVZRmDByXdb92nDBE5CtufcZv7y7MPRVoU4X6mD7Fh9x8XqDz5ZVBswza",
  "key5": "4MvdAhnJWnFkV4yZhEKTFCyWEB6U86KxbdZHWye78tf61714fz77eMLHVotPtTKUw7tr7k3iXkLANphKbw7z1mfa",
  "key6": "2YqZKt8bSBsioqKVNehWgkxypeLBLL1imPhVe2fvYL6AcmE7ZjX1DYi5M2bbEejx7WVcQRjuHDnCMUup1UQHENC6",
  "key7": "2uh2dkPtuv7KkETM8LuWJkt3WmUQNxEZ68X3fM9WEAxwFsLer5Bx32tGwrXy71b8DHjxx9av7GccJLmWHfQgiKSs",
  "key8": "5Wa9d4GirVNKpicN6rx6rquhzFs5Kuo9PLDp8XWPKhwHZxtPPR9jcQydiYmdJUMBRZjTA7bS8uJniDygCAtgzMNE",
  "key9": "2XeYUJnSZucVA46nbSHWYKqVKkK2pVJQGPTLvqJcd7GrD2Pxt17hxY95Jrk2m3NQqSJoBGfioXrpmXNtD6hhv8Yy",
  "key10": "3xVvU2ZvcJKoHbt1VCfU94agWK4DAuDkB5SBse6D5npwtjaV27mpS797ePPjHRt2r2atUnjJHnWgiMSKw6LWzPHD",
  "key11": "2yPLhGGxgan193HXUiwN91mHZy389RZL5ZLUTXoqdTWVuge9CKbTPU6W8A9d1FxdusrGrbudDaakGW3bFHCG9wXb",
  "key12": "3cQNc6EMdyqLCo9ZQW5myeXvkkcYUwYjyrSnsBJYm9YLM9rJckkLNN3SVcBJYmF7VWK5SRuP7pe9jdXyFyyxDJWT",
  "key13": "M7PAgTPGp976KKddw6ZaDsLsEMtPPm8zrgeAfz1sQZdrBekjpPVwnhKWZcQGzgckcpyfAeXYZMYzWfeboCPbvC3",
  "key14": "33QRn351p3ZAPceTnsRHzMPbz64v9ysJikdSJiwGagX7Ryt1RgicDn1pyvsjnJCU888TVcLSFm3j4ZCzjCqEAt9h",
  "key15": "iSdWy8Fxi9gS2LB35YtkfbA5kL3XSP97gVd547WGkkfciyhmXVw5QijT6iNk5FFNja16C2ca5tcWSa9iwbR2pP7",
  "key16": "315rC5YBfJRymgFdXTJnKFWEFk5rD8gUAPYDHarRekb8HRL28yrqtFmr2qwuo7SByNefc7csNFTNbz4wjAdENFkd",
  "key17": "3kQWxUtnbSeeJhfWhHzSd9GfnxbQX7VwmGPYdmMZBWNuXnmhM6f4BXtkBjq36tkKRJ8Rhb9uNnyJUnrYzkkCbyXK",
  "key18": "4jEjUEEmRDqJZXyxddjQGzHjZKDu4TKUK24XpaAtTWhvEbc25CkvjuXLP2D9gmgHVo9oJLDZmwZwLTQxhPVMJ5tv",
  "key19": "62gMegbbTuUWmaKeSDaKS9YVmX9iEk5pqLyXVsbHL9hmGAWqzn3qhgPiZNdjpxga2sQMtZ1ceMwSpxPg41nuArax",
  "key20": "4ZD74KdkhRNH9NjhvgBPSV1wDHfMzDANWnT7UdWiiiPaf2SjouKACdaiDuQJDxcqTDHLUwy2gdmUCnwpPyai6Pu5",
  "key21": "4xyZngABSbTUiMhGiniqURcXSorAKSNjarmPZU27NDAnssXJUinAKwbkBuektzk5kBAsLrvwqYRGAFA3e8CJhqv9",
  "key22": "4MFa97XTsKDM6vMGndew3ec95yAswpQyfXPXLJPpfYapJvVuwTf53vGCJvjko7UaVzpe1PnRLoffhFzEUXo5ruQG",
  "key23": "22yBuFfDPB4z1rPBtuJNPgKWtXQRdJcLaS3aJTQc449zJZTfVKPSipPdJAQHhwpj6n3ayH3ZvfSpXwgYQCxFBoE1",
  "key24": "4MCE3QUa32gqDZbjH4wh2F41LV2AEmRW6Um5JHSoeYHs3Bw53xPVrZ4KxDQsajDkhAMcSgngDt7j383PpHSJuta9",
  "key25": "44ewBzVDG8VRhpPfXi6BPvHRhCJ8dRmJecHcuLXdvLzuSyn34xFCgJvVdtyUEc33fUnEcLYeBh4ypwbBtzGQn8ag",
  "key26": "4Mq488dhvdKvXRuftYS7WvCUs4qm6CM3AAutgap1S3VGz8y9wMf9f2t91AUEnWtyMTH8kk1wugA28T4x3T835X2S",
  "key27": "2pDSueZMerdcKkaHgPCoJbnbbNgRAat5JaMEpS7LWCFhkFop9oFF5QpZdkYpgPpWM4YvgwyyyMqKjLXKHN9sBFPW",
  "key28": "56WLtByTv2aXPMwwJQBtsipcj6MyjKQ9294hXvTdGZ2ea1qRVRd4qixr7eb32pEAySP3QqEini6cDvshegocsMAN",
  "key29": "2gAhx57oFY84s6SL7SEPMWiMntcCSoLZBSA2ULhzGcjFvASdhp2xCuVKh1ptphrZk6Amx4bi3FhWKdR8ptKPYVm6",
  "key30": "XPYaT8P5688gM7vGTPi1znxPRetjAUdqEYxurF48TnSt4bDhBcYH3SCqBXUPFbEGaQ4hNJtt3cwiD6H9BMEMmNh",
  "key31": "2Zg6qWzdJR5T8fP9XgevoK3SXpcPTxyh8zkEzRe4ic1VkMgBoswdAsEhhcPdCYFPVoR9FVF2WZsYjfsnuHPixks1",
  "key32": "47CMNgDZZXmFt4xJBTNtEr4vRaPS5FjNdBKUn2XDiyissiBw3TqfyyuR7BBUgude47w7xxM2gLxbKCy1HT43xeCm",
  "key33": "211vc2QFmouRGH91Z3e95mKBGvcZFw9dunk3kNCBdY8wGqTzNbXdseJLX2T4UuAouQhCdTWMEsxqbs3bDuYnk7sh",
  "key34": "2MW31j2GGSbydwCAXBk95SMdAzAsUEWpGJ3aqGTchEVr9DwiM6CLd383Edgs3ZJaAVtKUhhyDKPUftPpQybNKQdQ",
  "key35": "4ZaANHrJGDWQTpx9CJvr7MSYt3qZMS2q2aZwpR7DhFudxMTBUZvxfe2Cfo4wR7fcueUahc4RP4fyPmpNVcNu3C4S",
  "key36": "5DAFWaGnrkb7vRrj684526LaRajmmA58A7MXKKNBbXLHLKQE51MUSTepw93DYyvHcLTZu7t5t9gbbJAqQMGdXtiE",
  "key37": "PjsE7SfM1BPG5MiKXhxPpkRoUyHqSo4XdbZ8BYroPdQEKkxz7Qyw9CG3wiCthrBcZ5WJykBwYfnVXWznrh4YtuU",
  "key38": "5iTKxH8J6ayRWL4VM9suqX9as7osM6Mer9kqHk9avAb4eMwcEMFrjsUvtjVR1Fyg2i9snLEWDSEtPeWQWoWWcUbW",
  "key39": "5xwyjNmKnyhGAoX7igMRTt7PiYoZcqzUzJFrbGSdY3N9Yj3sPz3pKY3BUS7KxbFaCjGcNF6co3tmxcxC3HK6xF1x",
  "key40": "5NWdDhVyhaViiVt1VpgoyM1JreDDw1f4MeEk2KAUBW74P1qdNXZX77SipKxQTdedDHJMcfKGBLTTwR168Emkf1sZ",
  "key41": "5cWEf4nBL1pXiE8tHoJUvGFW5vcd2seT9CDpti55FJkVJZyNYkauARUfb7Q2SJfZWuQHuJR4BumGs7NviLafnKYe",
  "key42": "4i1H894otDD2hp8zFEwKZj67zua6dT6hCY3Q8Fty9Hr7vHeZ6L9nHM49unHZJBTYGK7qjfXjob6v4QCJsYRMVCQ3",
  "key43": "3kLSGorBgXKfTqs9RFqxzxnkewGCXMXkdCnXc4DLtW6vSGLDr6JUZhgwP5BhBJAtzBvs3UFxHBYqVKm49XiXgMiQ",
  "key44": "4SSWsLPmLFDzoekEn5U2wiq8RSkoZdA9ARNdmBfsmq6EPaJN3kNueTpnEzcrtQFjwkg2NY5FTfxf355iKyuLDDk6"
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
