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
    "3Hu8gZykn6ex3kS913bVWJ57xWrpyNxKs5zazh2f7Bnz1J9z7AjH54DxZa9UZ8LpvBFXsfvSMTDvU14Bdtv1LkLB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WbdKFUH7gMWB7fW1SLVUfVycqaSZ8pvd5d2P32emqKTquX6pNgPpitou9Z6sP3wkK7pVVF7DdHnmEQs569E1VUK",
  "key1": "3dhjpiNuRBD5LBm7cT53kkYAjzTNn13WjJcX4xQpo9dhWs8FViByQ4UrxvK6KyPmhkxBVDBcmmihzomt8Z7fN4oq",
  "key2": "64kTGs4f822BShUa9TTGMcWv7PBEFU6y6ufFwBdKskprbsQEDmVGeKkBBudiGDbPguhFvLiwnQapXjnduhx7FEAQ",
  "key3": "KoWgbUbGfSNErXS5dFq28XYcfMun92fr9YX4w1ULZNm6Q9hhyEaV4KMMPsBJH4LLDDNDjQPqe6j1Zs8EFggKDxV",
  "key4": "27Uepj1zu2WyVW26pqRZYbPT6DsqkpNxnDZS6g2HsGyH1DtbwpuSFnuZLF1Gw2R4xDp4JepEkqEnnEMNnimuwnAh",
  "key5": "3WyarFDQ5Sxx1nuM7WXoXGp1oY1RsW6jgpf1CpDXF9HoS2WJwDm7kfaQYEqGeZQB8EuULPw3G7ToM5CdTTSYsz8P",
  "key6": "5QFyD9V5nKQtSNC2hivvm3behqUEGtFqu4ZA9pqdzUmKPxGEcaoRUExVezvxzRTHLRuhGnyMNPoDro668sN4wp1W",
  "key7": "5jFeoh1sxYzzTjt12SP6hTMDBmzgCSKeyK5TciQcFJi58KxVcvTaZJ4yVufcCVznhn94UV8DynNquCQqbCET3Wu1",
  "key8": "48tLCxgaUvxhnfd3kxaiueYy5agnwQ2wapSceMQf1TeC53t5RVgzFta9z6Jwz6SL9y7nqDc4Zh3AecZjHvU9ueo7",
  "key9": "2NpjQ33Ec757MGdpUaUrAVy6vhyV84iVuBodmjNmayBoVbddvESL1KwoWZteek15qpfAvv6W8a3jWkac5x43sdqe",
  "key10": "zvQze1XLokoHLWdbLAgQCodWrFqLdgeeSL7tsrcJGAcPevLVYEFnKHMBUnYu5K2YaQoZffcKWo4q6a22JRDYU34",
  "key11": "ZtyXqY6oiioqrZvmygYraw3eYUfXLDyFftH6rBDQ6579aXrtWQZbw4MXuPLnY2x7MERX5kvdxdGRHS6YoJPwBW2",
  "key12": "61zQKyATuTbZdyHp7ye2AGrDEjxr1W9fYLuA5euY6EBRNCbduvJjusAUXryrxMf3uozqojfjfkPMNmfWxG9vtv1d",
  "key13": "4aXjtUSxBnhwyTyy8rWbm4oqaVzZq7QUB5e8emfv2BJZEZExED9T2WPHXgXXiegSEQ68xVwzALFDr4NkUx6zLpqS",
  "key14": "3V7PVDYNdiUUFv4LHjmrsbBn5ixdDgMYgraDVk7rvSaqPPA81vhDLmwvjyibCje6LezL6F8URs5GTW2gG7BGLER4",
  "key15": "529LwKmXfFUWiHyj7V7cykAghjtKGonpZVu6XMHFi6gZrhwdMhnj9993xVSGA3PsXKtXuuWPMLwFDXTTJpPFF1dJ",
  "key16": "35BghDmcivw3eexJRKZvqyAtKkQ8UMeZG24yPpM4N4KLZoTr8je93VQeCy5wNrVn72mv7w4qsyR6xrMvdtmzv9ee",
  "key17": "3oiKCiPNtx33YFtb1qPWuF1aHDLmQBsrFDd1HXnQ64s7DPZHNM85H1eaw5tHcTkBGuwzPRTcD2uNcciopsQ7tVCN",
  "key18": "2kd6Q5JNfaa3soZcpf2tn8VZzbTzHpWvkKM4Wz1gLp4A5g34srFfGHEiuB1WgzCwPykdu4ZH11WjYFJ7PE7V5EEL",
  "key19": "5zDAkkfaTP44v4bcLLCW1mj8ZmX2YzsHphwfiFWSPbhQmTxTHBakHJ7htxGcLnc4AAnvg7BYMF33e73ddPMuZ6HD",
  "key20": "tG8euwAo3bToHpTwivC982vTMRqPbKWKh5Xxtrvi2aMwAU8qM7Eb6zw7LBQ6Wv8BHhsx3aW2NVGBeQn8ZoY6rU8",
  "key21": "fgPu89MWfgpb74yraREvqukRrauhJ993zQmNDJVYpajgWWnJSpu6XSnyKnA3cS78GXKg3LvuCGd3pgnUq7aAgeE",
  "key22": "9W16Ps9xhxLXwS9AwionJdi9cgCbpNhj5k4WeaSYiE74aU5Kicp5G7c1QaTxxa5BjUH1cPNzqGRkyLSGcXPBdGV",
  "key23": "cyjwAJpWKmXfYCFvaw8b4imMMjJ3rPaWPV53PJUgDDgG5h4fhCEKAefsN9iy3Hz1gkWhPrCaPU8NUxBADr4td8r",
  "key24": "4igDjmjs36MvkLW6AVMAeP4R15U71aewLbJVtHrPndLvGDr6FttnxC5cudc3qBwQgwpm8SUkWynZb3E3rJ14XXv6",
  "key25": "2x4kDcE2wPANGrANk5mFk1QzQxkk1Qw6B2jGteoTYPJYpVbEbHmhHKL1UG4qD1sUtWk2tPGhB6TeErvEhiLLAFVh",
  "key26": "2Rwptcm1owdMGnp7yXsAF9PRzN1AssofiAM6XvDTPAWejQnrdXCqw7YiA1GwM9TLMoW4GZw1BK7siLh6Axc6hGPE",
  "key27": "57M1WLbsQ4HPd6EBT4C7T6cCkKMyEfmTpnzGh2VTco4hCCENJgrVcHfwk2zZnFWJvRQWqaNbvwyoRbLDs3dwZfND",
  "key28": "3xwpkionVf5FPqwZo9WDakoSbQxyHoFFpn2PL3FyF1ugV9X9s9zwEs8ca1Pinu4qfMvgMEjat2joPZhQYC3aofnw",
  "key29": "5euwwGW4RhohiUVW915G85v6ohmc97C2Ri3YCDC1YA4GbgmSLnMaLFv6vNNzi1hfgfUGM9EiryS6EQBtnp8iaF6w",
  "key30": "2pdqMobB3WJ6daNzaVGiZY9iUCLQd9RkRAxSg5QMe1UW4mBo7HDN447PuLRtfDRv4nd2CW7ssD8jQYWnqMDKwF5a",
  "key31": "NJ5zn78MUswqAF85CDGKcsRh3HBeGzghJ2PRh6LMBEoYxzue8xyVxwCuiq4phRqVqccscW7vHYAAvqyVntSjPpK",
  "key32": "21Qi8QSYYV8V7jwaoxcnXfjUBcnLFTKpRQQTF9ZYXLvpBnobDZyD3ZexXQGMPGJHxbnaHvSYoTf3Uu5GQ9MkPrMT",
  "key33": "MfBW75VvKeVgUbqjZqBiey6bmD2Nt23maX4zdLqtoegrUkr7WQCzMScThenaLwxNc6S35pFVcGgh3mvRqiMnZ6D",
  "key34": "3Ykvrp4rSBhrAbQu8WUAyDGZZX4UwRtFkfcmVLuq5KRVnNbX5cerCqHEr5AXkm376c8vKVkoUR9f5RfTND84LSdv",
  "key35": "4qVabvCX8JcvuejgdHusyj1mGtBNw5FdHdCnJecVTZJohqcNzFpVnafc1kKg1fAvJWqGmbhqgMaGnKJb6qtnY1V9",
  "key36": "4vEsfffAYCqH4XuDjjXMinSqekcQtkn1gsgSEZmhqSWM1qbyemxeiAKNSvp3pYrPo1ixXPVfKL7xkFZgCB7Jyxpq",
  "key37": "ZLbnMe6EYeQmwayMdM3cL6nSVz17zeWB89BXUzA8j8Cc8bTUZ6QBy4xtGP8kx9HAZwbZPzN5tqbDF1JSCkPoi7a",
  "key38": "jj998ijZqmq7NgWqGLoAAZRtkbUXB3fWFirHh6jzj4HxPee8TWEsmZoBzh9Yj7YmbBTywkdYsXfVc6JvNdi3JhR",
  "key39": "3abC7tPYhDPsDq7dZgkrX8AxmdmnR121LfgeFhPTHenZGi5YCVsTjyyW91dVpDsYdomhqHG3NQM3xFEe1bmuzB1Y",
  "key40": "4RRr2mKhbbjJH9m14mmUrSVPBSsW2bdzELnCgZR3X4onz4WEJiBwJxE618i9ofKX6kB8EMK3HqiSvcNp26fBJ4ed"
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
