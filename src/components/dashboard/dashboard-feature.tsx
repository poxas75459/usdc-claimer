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
    "4YsfAdbtVsoEUo82phERsfC9TAo9mnAkmKQoi2xBLWphddafv5RtD6kE5rx1a5YUgsrFA8FRswibD4TobttwZRQV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yMYMf8hWxHKbJ1SVajS9kZooyPACzxpkkvT36LyavUfXrjqPsnmKbfAiv2EoWt5PPYm1fFaGUJBBrqKLBiMN738",
  "key1": "2pBnUWR9n7HXYKQn6PrtGR2D5u9gkw917nswRYGpvvFuybFtwdDbhKzqYSJwTzRXyF6eKGWRBEQAt3M31DMgSpA3",
  "key2": "31UVAwxkBd3tFW22fkLvymQKUaqqmu3uQgtwBBoQCqvwswHP6gV9W9WKR8yQ4rDEF6cF6zr4p21mEQaL686bvSLz",
  "key3": "3zGkjBUV6SNmrQ9BcEFbXCufn8f3yd6PkiKYSUEMr7w2EdDSasYW45h3ke3mtvrmcgqhpLhA4eoCkAXKoPZVb8xY",
  "key4": "4uQq5kFS9joQHghyrsNFSNLCY7bg2ch2fvJPgNd1iFuRZ7roUTf6Pttn1kdT2V5hHyxWkTm2XJBMSEo7uc8sa6UP",
  "key5": "5L3tq6gyLdXVgxpGTdk2v35xuuFybNJ12CFUNphp7xERVBKge1t6dEwsNoY4rwxShAFv4Fa3CK9dNs65M3Vie22E",
  "key6": "5NWA1hwL9Yax9j5EyCjgJEpbMkxDGSW2aLFwiPa2AyD9XRZPMAt4fEt47TXAmvi44yitBWtPTAcziYcoQWQjrgFQ",
  "key7": "WeVgbrnC4SWrLM6xFmyuXhPeLS3kPdaFNALRyQkxK2TURLjucum2UYswqufoN3m8A1Z3SkYR9PRseD6gNGyjQMP",
  "key8": "47wBThBx823erMuKEovER7uFCysoVZbnPRtzAiBfyzcC9E1gJKXzYKubE62PAwrd6e26TU1oK3qh6e1ZpZVDh79c",
  "key9": "61U3aynrVVRX6WVtxScbu3ra1QkpZLjzWxQTYVQLKA6WmHzGSAsmjqR4aVozbFkXdX2n4yCiECT38nrSULKxJWAS",
  "key10": "2byKw6FdDhxu7GWbkxNo551MSJNsCjDupQfZ8rQWLg2v5ikbfK2EXhHwYnsBtGxPu6kiCqifu4njzSoxSdAsSjeN",
  "key11": "5xYuAXe6jyLx1Pv6wRug3szUNQ3co5SyxLmuZcd99McmnKR65wda5Js55aaudFRXX8CMrFUQVDtKN6WLwcNDRHJU",
  "key12": "5HwLe2JHox2C6XdQLrG9wL8SVjk3ZwMHNy2TsGwcbQAqLicCWEWwzrLrb3cPvmHZYgzARGg4zSn5QHjtf98qZiTu",
  "key13": "2hEypgi9Jp9RrkP59XZ6BjwjqMBBgEnd5rTjqKFgmRjJinmGZ9wnw7ts4waRfnJsFHSeFXMJDuoVwLE4Kg2CVwrG",
  "key14": "3zkScpQQhD2epMBHyvR39Vs8mZ2ZobuBrtaDk4rVLKvFUDctUyzBaoBowsCr32rpMzQdXrCmGkV5dNnN7MDJuqM2",
  "key15": "VpSrwyhYJYfboiAxsopqwcVLGwVsMqGv25TfzDfisJhbXGNpYkcWouvkyJNP3Cc5R2jU1ANF67xpYXRN5HR8JbC",
  "key16": "4PgmWcc1ErmmhicaQB965Jg983phcHcg2H2BT2tvYdmAq7krMioqHTkDLvzRFtYdexA7Y58PNVM6EUhwnGg7Wgyv",
  "key17": "2AYPgBibMbXxmheMxFjM1N7C4Vwx5N22SwGFwk19BGCWbb7ujhdisMwgJL739qykVi6mwn5mUJnmARf84hVhxmDn",
  "key18": "4iBkbDb3QrvyrGaL7cTuHk8cgri1sac1AYWpGrGcLUZ1JiQjRKGq1BPY5whbopc5pYqdXokM3WsrPmQ2Li6nvnde",
  "key19": "58Aq3pdJNLM1TUqgmackeyL4TmiFEthUGiQZZ74hFdDYpEtGAeqm9X1PoSnkENU4caHRQ7mz5fAKonCaYbKTP9a7",
  "key20": "64EC1XjQYcfwco9c3JDT6P6uC3gTu1UyKG1xNcfFAHhisJSyLGjDdUUdSXunGCKhuxeTUyDdggroqPWHn1cDua2",
  "key21": "39hR2M3pzsYxWhD4PED57DnXJuq7yehLFwfPp4q1i6JCPaP5tskzGBViA7BH5ckd1QqCR7Xcmn41Hn8YvCEmb2U2",
  "key22": "5ScJcLxbzE5uUK9H3a8tviryjUJn4rRGLoz5nZTUw1BYnzik99sDTniA8DTu3JqNfrMibEjLEnve9WoQjfpeMzdt",
  "key23": "5VqEXiNBXjkCSowrDd6kCqdB9TGyZpi3kDs1XPmPDv2SRNLDeeswAGFYwa83MKkpZor2PhcG6xtkwUHSEnWaD8R8",
  "key24": "fcdU6RtFhtfjYaTmjkSSjRQK3ZeQQ82Qzgq8QC6zucQqRswenjYCCAUjUexGBAHRm7SiPKawGBQmCaBPPW4dd5J",
  "key25": "3877iKJTFwAXwf9aFpSrSTdJxY24RcAbyMtEiaCzAUfvDwRWdSAnPif2YBRHCeZEjtrRDNTEE43bdi7REBgCL28G",
  "key26": "5NQPdgQD8kg7MQvcs7TLt3WSqogVVnFgh5mWs9BuDZDDu8hCTfWYeTbfv721iFboExvHZoEx41ZHnAwdeZaUzL5A",
  "key27": "3oHdSiz6cHLTK3R66NJKRAeP5aSMrCEoX2YuS79BPFSmjZZTQ1RuzyBG4L4BWGi9Rmi4iXbLWaCiDVZxXS5TdWTh",
  "key28": "gjmPh4eZBXBoPTkiAZ3PijCrDb9W4guTRteryA7QhaiNsF2zCuwtwVdW9dHx2Y8kGapJoGFKyxSCerT2nKJ6mhA",
  "key29": "H1y3cCNAZea2f1hPKojxb8sBGjdS6uH81UsMCNaq3prw3bVhUnuJUg6mJW9BPXqLZRbCmfJWGMBo6BP8oJTg1FB",
  "key30": "7osvQjyvRetbsaKHW8ToNZdpvFeHvYZejPaMxFKCTYn8ji6ghjzKu18Fd6GxFSGnUSSAgrrwf2arNCCG8Ti9KRW",
  "key31": "2iyDKeqV3SeUc3PebGDPKXk8kuZR1YcJ9gLqzUgh5ur6JhHKqTTRLTv3EHjjw6XTEy32hLB5rZ5EKBHUJCaF1NPM",
  "key32": "YVCVtuo5tjJfwN4VXjaKsH1CAvAtKvXsdgJSqELfy3DxwuUDozhoNbkn6dNxGwurWUNGo1Q5KC6zh1b5zqDaKiz",
  "key33": "4fHyj6gXeA2GKXWUNceUtJ3wNZEc3A1FhkySCykBUUfD9KYtCVDaDf2yrcW166ggZowF7Wa667a6u33P5BR2XhyK",
  "key34": "2pHcjHrqt2qToxRuMRJqe4QcUfCUssExqNVidGm3xTng6qUqwGfFdftopHYZe9AVwVQxFvE6FxiMR7A7fdmd9Wvh",
  "key35": "5yvAfCneYFbbMTxc5KzQ1JPSdZyLwskdxGJzg5dNSTE1agasiGurVqGzbSdPzwg5d4WAm8LKC37oUoV6Wjurh8Hj",
  "key36": "3kKaLMi5dn2qnWH8byyNDT4wQr1it5bv9Sp42E1QFNjAPcEnAJugxWwB3KneDziwHJfRZTrUPnwUdhhV8K4B8Yr",
  "key37": "4DGj2znp66nhbLHFixWThPtgpEwdDjKQwhJ7SFnqDHexrNRnbgQ9YFRanooTDWKNwQwJ8yJoJM3NpLvF57LMTghe",
  "key38": "57KkEZdMaSjDmNRRK4oWYRQMCum3BVaSNfrgaWV5hoqZFLU8CMnCgHzDWNCGcCLQdKZaGSpPmnDvprLtZxAD2heV",
  "key39": "3T6ULAX9MYyJU7QwbnKR3fhT4oQdtDKt3UraHY258jyaLfnwCzcxqPz4TDU5kWYpbfzDv3ghHMHJPtRxbKTZeKUh",
  "key40": "4K5kWf6w35qnXJUCg3vZtGByY3DYjCRyTqtfNtgyTQLMMvTKVAKZNWgBrd5fBSabj8QwQZRyErFgZDJoN9ZeHJQ3",
  "key41": "6Gi28yXdnF3z9PXvWZngpoYWy7oC8JmtAM5jUSpuq9gTqzuyCkirJvTnTqXYKZoJkApCWV52JVc5BkpLHuK8yKX"
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
