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
    "5JFjE3R51S583kT3Nyiw1Vpdc3vTCjir52einDkYAhDP7sj6CfUnVwzr1BVvZKq4YhGcAgJwy7vS5mTdSETgvXpm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44mu7RkNWZYHtUVVMwrsL4edCnRUuQ3JUZ4LDnzYiVGsF5v8thfan8qYr6AZewWuL6GA2UHvBSzcSeVnwzyYL4aP",
  "key1": "3yE1xFwt6XbQ29qdrLKmjqndUQdcDnBdnxFvEro2jcB3AGTUoFgFYbAhS3uw9HLF1ESmVS8FNdD8CYDkuJYZQL8V",
  "key2": "4Y5H2vpynWP3L4pPqjiznpnoeEpWSt7yeZdsyiTkzDnSmpPi8jbmysuQsGHkkewzYem5S4CSvg22etjTNPgUkDj8",
  "key3": "TbLQDJHa7EPKBCQrnkEXNLRFjpJiooFcA6QkU9zE9VfEYtKmRXPB4oXjVousTJutyDM4hJ42TEM6GeMmtoMmgiD",
  "key4": "4fLHv4myNhxd4qntcgQFeVJkVZFp3TYLCnMKMVXKXvsg4irrtuakL3UUrtH2jTzxZCuzqcEvzZ5BF6rB8KFrqNtA",
  "key5": "3e7Z9MuHBLNBeNdJjbeqnPtVpXWD4vDF9PrwtQWwqvX25rRrT7EyL3Md2zDJBUqDDdWrnxxxHqRu3qp3QK8TuV3W",
  "key6": "4cnBz5yE34fES5Bxw2S2B6DDiNJo3X4UhisMtkLoyfhhBhrHVLkd92XFa3fkj5AS4BowEKQWEAmKoggjserm6Ne5",
  "key7": "624yjRSdhPino1GKMsXBJSDHN59MHeDghtuZJhwoPrXpQpMp96iWqeaNLZQVMdu4YiFC9ct2N6812eFQ7C4KGkbH",
  "key8": "3cos4s4i2hWWtj5PZuW9Gr5vFz1UX8iyE9uSugzkFPT4fB2avQFTGSVFaT99jWNMtAt5bpFP5oVU6Yb6PigqEnn5",
  "key9": "5sTCNdzFonjGuAN9pT29DD1C6xvgM9xJFKrRSdWUBh3JhdEcD26h6xedWior1tR2bTo3jUAKoQ5ys2Xkyu467yji",
  "key10": "5PyrXwHPd99o4DBfAs92Kgur2i2HR6jUN7BPYiVwjuCvCvdU3CYbDWq9sKYCL3scTexV1W1TCNCSapHUNNDwkKNb",
  "key11": "YM9GS5Afb6ZvuVfhiJjMusK2ebXyUCTACEGbjVrC8UvHLUErQBFZDMvrEwXZj9BKGj3dWosgtiTvRDz24ysCG8L",
  "key12": "5qKboW9SHiTBGLuV6amXu2BRzFwQzuN1QzZzvbMkWDv9ChXWpUdzPC7yeaiAzCk2gSxKPMFyPj4ZeLZVJwo2L5xo",
  "key13": "4rXtyGX6Yi1WkPnJUKC76jPdb338W9GTtyHBLAQPHeVYYYWcgnCrvUiiMUcCyiw1Zub6TFvs3KpvunBiV1RcNFwh",
  "key14": "3mjYSido3nKYzWD8Ca3wNBPpDPYQQghkTsmi3Z6hbZrQWTjkPwL7HZLNVVtrpW2GFiMUhmXfogR7Mbp9jYeZLa93",
  "key15": "2rRormQAHrJuFVpDrzhdpUQV9xUm7nyv8pU9uuN86aXwTEVvmUEgevBXURNpxaUt96yiTyRD2fE6ENQf9F4amHF5",
  "key16": "5A9UVza5y2mR27QHKhMFmLGiDpf3LJJhxfzYXzHDyyHASdY25wEfsnoQC2QKvkSPQLeqtcmbMX8JXA8P7Vy8SLjt",
  "key17": "3aPM2Cwt2v5JwY6CAm5fGC7YGgubdYAyHnqhRFLvHT2BxZ2PLwsPf9UepK9upnqSTjZafMT82mgNUAeiX8jCPrdV",
  "key18": "5JHb9Qpr91ka3kumu5SidRLmES6rU2QVqzHzfL2uwETRfzCqEbjcsiCwcVWWHkHDL4VdeCNqxo5qqYpXsawV1mUa",
  "key19": "24ePQ9X8w8FVQ5WvJvuwQfZiFySZ3E8chn52wP5WhqXnvDzCksMHRotGxSXyiMJoo2ZEx6mM8qr7Qqo8wPBah3rf",
  "key20": "47JUdSry2a2fnpjn8m4Hvh1k48cvmCeU9YqHZb1sHN4uYeJ5bm8Khsnnum3mWk1KTLEXxzbJoq6fghP3QMkGddBx",
  "key21": "ZDZ5KZXejUAEXNDyLyMVM19SGG3tLBMhoJpKnxs28bXNkn92EkMcmtehtAPGhuVLGQEKykDiMSY8ZHMEwFr29Yg",
  "key22": "CcoxRJ7HNGBJLPNmhRp6ZKz4qkd84RHdgSGKiVp5tsFg4JE5ecgHrtMSugKaw1HEs6mxUoChJpzh9Nd4BoamUQe",
  "key23": "5mNQCj95c68vr5oYvtVtLYSXBXn6x8UAHQW34ypKLotp7VKoq2J8mUk8Ywq3admJ1t5fkhyU4jpAb8LVQ7ZZetYj",
  "key24": "51859SUQk5Ygfw4863h9of5zXNVhJeuexuMx9kroWZAPzqzAbJu62TtpX9Hdw76uJAcomab1EHcysnsS3YYoi5Pt",
  "key25": "3GJJL5nkhXi6ekNUYJ6cWTDki6Z8pdhd78dmL45rF5hCvHvm8Pcy4SAghxNGAyzLLWTNTuiTFc59ZnS8zHmEc6WB",
  "key26": "3nqGLc4adDfkbUksujuLa3LiAJ3Y8FCLtZ99QNreey7AKf6dBB9ecyBDvd4H9aDveKqDtdx8VaZsZfApmhGHb5Vd",
  "key27": "3CPWqT9zEjPCthiyp4FBLgjfghgmk1fmw1Pdnwnr3hQbFYPEhHoib1eyBXQMcHeTQ6caJDdiNfrnGzZjjUW4rjrA",
  "key28": "228NPofc5ddD5BRPR3jpQSaVkw9wagDD9svTPC19FTenHUbFohoBvKgCKxkmUnjobQZUNeg3p7GmnYSqPPpxZN39",
  "key29": "2uUHbjmnrSy9XH37QwMJvGVTDMw5UVj2xFwesmYs8t4LoV269dkTnaesaAiEUU1NiAo46pFn9wP27gTBajD2RfjJ",
  "key30": "4NbP1BGSshFYzwzu7yFxzVSiNmwBeSVX2XACBjA4hAJUXVRn8P1rDeaULGdizkzo6Na3y1QDfDGWxbR1rZfNirux",
  "key31": "5WDcyqiaLwz4uMckrke8sXjBzHtmf3PLqyuuPTTGZpcHrHcaVDJysjUc1vDJEgSDFSFW2XNTaA6w3dA7ahmxkdFn",
  "key32": "2LF9EHsvi3x43xiPBSpxBfimjYSMzDmVZ5BJU3aKMNsJdiEumg1RqyeaiMdCebU8MFcGZ9rW9FXwP8h35CLYGV5F",
  "key33": "2sHWgX2XpBUafdJS6CqBUgyXhH52USyFSf9xoXeLjDhLj2Fhe1Ps9JKzpi7ML3ux8eFvvzEGR6Y5tXw492RyuA3A",
  "key34": "3pXZVUDDrUWBadvZyFiirNqFXsHVFEiUM7vMcsNFsh8NfNMiSmAzrqrHjtcTdvNXGNrQDbTMskrCy5hHscU3KDaS",
  "key35": "QKZNVYnmffvdjm1ghwBkwAhx7fzW9U7TUGxfateqfZQDX9JMceAFETzvKDieuoj4sYQXpfvGiFD7pbVzVn6LH2d",
  "key36": "4wH8WFKm3Y765HACuQdMqXB8Jrqwn2GHA1UfT1QKUXqZwMnnH9aqNkRp1sxpm8iS9mFpuv4rAktqY5zLn5hd9iCi",
  "key37": "3Ka4wooU4nM58bnF9eGFJ3PXTih8r8CFTLYrPwgRXxCfrEL2ssKcMNUF4T4JG3e5w9HVZUrtDrv5v7CDjfruK11g",
  "key38": "jUmpwPJrJE7gSrBe8CXrRwKMsRYN8tBUFzePdLw4JM6k8d7W179Hn3P1PfeNT5kJo8wcZHVW53y8treyRGrMuqp",
  "key39": "2cp1fV6pBY9Btt1zzAcA16JhSSRTPGrNWp8U8d9k3Qs16TCaQLv53Hki8WSpSDjy6SPm1V6MYzSaPGLz1gFJ3q1y",
  "key40": "3rboVHziPDoEKYrVmg2nGzAq4JaqJ5k2UKinu1D4nSM6Frzav7wZt1PJp6KAJP7H6quQvpKFAzqwJkMCpy6658g",
  "key41": "2qn4hcXNyEtypAtUkRDq2c7AGmFMBEoEbz2TXPCEyzMpc7RpVoot9kodB4BRw1sja3KdvEzF4Gajq3wpCzQcQ1ni",
  "key42": "5iqdEwffaZQeNa35cQKwn9frfT4CyU6aTZ4ppvaBnnipMHc1qf3e7s5eDqtYBdfPzU4KC8KCFEiJ9B7mxYEm88Rd",
  "key43": "3eLgXRosngwt86T2n1L9hxo7wLnTrAiDDYFTaKgehVspMzJGKMUniVgAvqa6aJBqAm3CRQ8EyH2R3Zc5TuhCJRbU",
  "key44": "bxBPGS92RjzFwKcFd4kbMJu91YKpds366PXFxPyjT7PhGx2JxwZL6B2PBfk6igLVUD3DMFUQakaUXAPtYxJk3JU",
  "key45": "eeotHYoZdeWFBNZTC6k8spUh2ZqXHxTcQkbntTqZbDz2M4M3JsBKKmRDiPJGNoi8uZysNR5irEDNntGJ6LNc8aE",
  "key46": "6AoXvEWnssBGrcuUvh8QZo7d63RaH2a6uMkcjZ7kE4Ti5YqNRFbnev8KTk9wp4fG32TXDKjsDA9CkWr5zT6vsk6",
  "key47": "2ci19wP6ymv7Qy2GshQeJYhpKSLWhkj1XqYDkuSBcVba45VBdQSHZNq5dsbtMZREmykVa7e2hZGPhmTXHEYozr6P"
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
