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
    "3qvZAasyVHdYGxnpH4fbXWRKHL2w8JwKt9z1nB5SFdCiuGdziek8RXTd42wP6jBsNyTFb3Ar8Py9VygJAV4BvpJf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JcrKyJ8egUcZmtVFgCt56YyPKJThZQA7AD2CrPemj7tzpCRa1bJ6C3B6SNMWYQHCeNeBEFAMMu89hQta6ewaink",
  "key1": "31G95pvJF7oWJRpNAL9vbr1L5DeQaowyQd7WSxbortRhhXijv5v2rRA5jyAN4C7SfoPq7rrVT9mXeRxTcYEw3mMt",
  "key2": "5N8yHLELpun5DG3PaFEXVWDzuZDQ7hcfjnHpsy6LjnjNP429d9GDdexfJE5j1r6qmQrx3zaWY4XN5nmcN2HzRGTW",
  "key3": "3EB2WoEWsSN9WS5q3L2dfieAnjFNBy7G5DcQpHucShoC3PaBWiq54jP8chH6jb9d9z1vNjsQNBv8gcSHYgxnekMn",
  "key4": "3imwj7SiSiE3DBo4bcFBmeKTCmrMeRKtJ4VKWRiPyffgZgjRNtASjppnFPJCKAY7iX9Hd2xuxGdPcihbWQSCLFiR",
  "key5": "666CEy38tdLyUeo6g6NJkDjdrszeof7RwNYftMwNJWsp24ZLsHyGUU1mGySMCCJPjzFn6tcyqvtaPKDAaijsTP7",
  "key6": "3fTqcyuZf2r11r4NpE4RiEff5PtkvfxeFTkVnZ8oFMSYKXrniKhVdPQ72mn3FCTkis5Vv7C1XeWASySzQrmPeebb",
  "key7": "5SjWxYic4GPmX7HfgETyzCKYvZBXDGZPY47U2iJBgpftWA1z6RRhDZEmQsGYSmaUv8km2JdFMyxoVf9cxtVU83kf",
  "key8": "2NqdP93qm6L36Lndm39wsQVqppC6egdeK6f8xV1ZHyG3r9tngqY7JsUzaBWJjkFmPSyd3vsAffWKk9TnyqbAeSpe",
  "key9": "3ZixL4TCPPHsVLXxCpmdSiTHsefWKuYPuhwtpuQZwNFT9kKtTpbT6fJdWJxRAfmNcZhaLMsFQxcy5ecJC2W2vLk6",
  "key10": "3mxBEq8T6PEMBJWcxQ2VZNcwHwjZv1FVcnmsZFq5egRLLZK1FDozfMq5ykiYr6tWefEyxkxm9utaxMRpAuEn7sZ2",
  "key11": "26tRPfaL8C5ixGCdP279nZzGADVcYPtZpmgwcwsVSe8YppjfQwsQZnd5cvyCfZBMCLmASGiykPP5xw3iAFdbZFWU",
  "key12": "4Au7vyPGgem3zxhq4YdU4A1WacEfvLPhneFixvYkVgZ8jPR1VBhaNgu6Nstqa3WWjVo4CfpPmRR9BnJKoMf29Non",
  "key13": "49fK1zfWsQ3tGF6jNhJENgXWkHZzctMNFKg1QRsXkuTiX8XGwZ8sUiVPgkEmXuiodafhMyhYNHyGDEHaWMKuAfVj",
  "key14": "41fVpxnBKNYUY8okswsHXNsUG7Vf443Ny1UVTPy6HXNdwRRqLgSmk6Mob96kXgYdWhvoytbfewPEa9ToagCjQDi9",
  "key15": "4D1kpfU7fWdUpsacfJ6pnP4Hhg8pZr4pLWhfykqVh6icDLvvWcLYdnUBQx4gtd5ubsjZ6NJVsb8eWQsyF8rrUGFX",
  "key16": "4Vssoz5pxn34ytFJ1P3FWAe2MYnNXv1L1reWEJ5kNfex2P1qttJd8vuTaJVBq87a5e3ezHiGBU9gfk1mXgawwKTg",
  "key17": "3Y6qm2wJHoAXM5qMhvTb3qLM41hG6hToef26SW2tQsT8gFsHAvXviQQxzjQgaUxMZA2ukApvR8vbbm8zyCFN5wbu",
  "key18": "2HCrYSQ7kuNiLreMBkTP96vVhFV3eFNW5PnyEomJMnH4FZVvE87HJGVnfcKJGyW1VVdaH1eg9Z4f7jfvpgxBGL24",
  "key19": "5xyv7ktYUYYVsM6eCqmxBUTf9ck2zNuP5TX1b7SAyQp1Lj7HkVaHwf13UFKNHvqf8T6ckcE1KRRdViFp3LeihouB",
  "key20": "3HHjrXY8k4EJhXxU7kFqFnH7bPPVKScgYnRuqsubqrqfUi8RWEoHUETSznSHYmyTaoQy5DUMTKPkL934HQRxfYev",
  "key21": "PNZBwZn6nN2fwUgPFvVj3Bs3S3nfmZbEdiUfGPisKgUU8sEqRaThJBnZpK57BMuqfYLGK9pGTmDehhGr8qZ3fEp",
  "key22": "4XDosFAqd9UgXuuwHUJd1junEcGPYx2vpyFenCXFXS6C6qXBu1jkpBacSzXEtuep7Rnx3MGfCVEvvmX82ELuUj5i",
  "key23": "2TVJk2N4VtbbXRZZ7RyPuk4ybKW6DuyVShQLJbkeD5mYwixxc52ac3BDu9X3Qc5AH7ouQPakYXKmPGUfeqq7vLiC",
  "key24": "4PoCoMeV3ebofm19hfs9iXLi2XKsMJBnckvSzeM7yEB1aPJFEVkkCiDpYXd4bzgBx41ooMhycWEpyrCrPRixXZEk",
  "key25": "5d9G447Lmhui85XWH6KhUnkWg42FXJdsuSbf4uKDZcBEhNPR8BUzgfGtmmU34Y6JNKgUka3vtv41j3bNjiJZd7FX",
  "key26": "5ogvNjbnrS2MZppjRjYjPHNsfiqvwLC7dDAyHMycVoSJww3gzsWNt8VhWRu5R7xMjBwAmMoHUSDy5KXy7xPvkRga",
  "key27": "2vUj5vzmNm88YTt6ESTCKYF7B8hAobsKPMbgMLiRHqRRnE9YfZEhyLY8bWNGwz8oFagkgQdusXxGqzrwo7gV6xMw",
  "key28": "diymWsyc5xpfz7mxKGjjSPnsyXpUdfCP4oDCJ4FSZ4MhSQZCt7KePRGZe4mE7K6eKXPf4hTkjRxodqoPdNhn4UM",
  "key29": "TNd4c8qV7XqRzcgc1rHX5UKa6sWzTX1XdMU3WhosZodN5JnKytrFRGAW1oteW91dpxYte3ZHeJVn4F9K6cbrKHE",
  "key30": "2psbv8hq5tLGTp9dhEuJKeU86anF7qDeeVNLusceHCx591V7C42YJcbqj3DZhrmpjHSqaLarWQ8fxaJqEuLi9RYo",
  "key31": "3a2ui1WSdP9QDz3KoeUdmHpyMhH9xMeHRZtTQTSSWw9tpZHBsKiGduPd2KmS7mWnfzbkdAFMAJHdJ161V2WXXBRx",
  "key32": "5MydMigooN3w2hyfgi9SRhCJv7nMp8EQ9fPa5NHj1AhDvDcVh6Pg6wBnawQcLCbkmA4mhkjod2G9HuPQJqen1oC9",
  "key33": "4QPqN8nJgyDu4nczv639NBMBnRiwaTNZ9aZ4wzWqRNjhNrvJAewgca4sPxJJxBpCDkNaNiSH5JQi1rp6roZdq5j",
  "key34": "5TdhJgc72D63JhbEwHcpNHKbRDQ3ZQ1bZAXR6EJ7q6cmRJ8LuMRi1Laz4pC9PCTEiFKCvgS5MPiGdsp1ieAWe8UB",
  "key35": "42Erxy6jGJmcPAtUFoT2fKYS7WmiQND39zS1QBrHRXLvueLu8XUGrNHQtLRk4NrSWojaVBPpn8MK3f2gik4cFsW8",
  "key36": "4jhBmPTf3ayHefMQ4yyV1vTmaBAFn4nz15osvveXdeKErHT5uQpSomYPx7NApzzsRev2HSffRGkDSTrJSMTBSkSd",
  "key37": "4mvFgWg4qHhGh2MEYHc5ae96UB5C6MZpcnZpnqDzjWu1wfqEygP5GyVQyjit9ZBjTcviqwKEzUSiXgFh43QvypEw",
  "key38": "qAwVBTLXGW5jTrgKKV8Bj54YLYJqu2mfDVVogbRrtrebuDEyFUP7ztu7VkDzcXzwEJ5agxGCEG9wHunQkEbcJGw",
  "key39": "2PTZuHMaaitS9R3TqVHTMn3P7dwgSQ48zxKREKP3Rd2QNhdwztuijXvXXDL1f6Jy9ZyEQeLCRn1SQS6SNz6a9ano",
  "key40": "4nXCEzh7RQ4sGveuACVcr5pzNXBjBXh4NbHcMp72CAbv6sjVdY41C5aDYCJdfYoKxZLgKbxWDoZg9soY6qJYH5Nt",
  "key41": "3fuhTnWYmjmt19TcnTv7fnqUVaoRR1diA3Ey6VrAZ2iUK6BCNiMjfNoQp9sbb3JYc73JMCQ4iQcQHEwteeZd69V1",
  "key42": "5Bhi6TcYs7ZPNwBYPAVy5GNcnvRFhc5oxbArUH3Z7dmZQXHQj12nLRPSdPFyMXGBXtADnSPwDcqbSzQeWHXLTWH7",
  "key43": "3BRj8z6B7S2m9KYqg7jc2Dbdi3rUn189thDivvEdzLecySamSZ6H27UupXA9Rro76ju76bjaoSSFATanHDX8dDb",
  "key44": "zGqwc8eMdYen1QUYdTXBvYaaA5bSfw7privC5egUdByXcHboQ5sDJdvzWfsYd1rQEZrziMawiKCNyQEdDVKJehc",
  "key45": "4sWk8NuMv8zs7NqM67444fG5u8UGkDjsxArvpVs78tLXMi8mbE2QQaSNoAXJ4osHwu62p5r9uFd36sRBRxjgFR2g",
  "key46": "66quzBXdecufe1CkeswMUfhdmGrfo3oLduisD7Zt59CGPn69kbD9ME7AH1wy4ZxsrBZhN5MNxzkG2zdkoNDT5ku4",
  "key47": "4hSEzmC2Qm7cmusNZLWkk4c53gxt9RHd6dVdhfmSYuNMJQs4gXdt9eD5rXqqS3UYiSTx2APFqpeJu5SqdcvkskLR",
  "key48": "ri2p84vo32HfyjsQbttzKiRvXfARrNXc9S3v1ZXh1iNcSzUbcPn4oepYTbPYtiM1mwWUmAMtpDB8HdZUVH3iGAW"
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
