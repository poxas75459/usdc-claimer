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
    "4g9KasUNuJTVCJveQJkb3GTLgkqcv4iuBWJKQF2PVijrCPfojeTkDHoz4LmdUJvvx7sowFkUL1SXmqtjGV3wGWQr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rf97YKN1HYZczzvfgeHpSizrQfnYsgkCVT6uY1XNK4jWzydApfHiGcD2pSSEJZqSdjdZrn2WpUSsyXhLX1JYtCV",
  "key1": "f4GGAErbfxtbXRSjqE6fCxNyHpiaFgHgiLZZXWLShe4u3sxLLd6T87xYRwJSAYGz3B9iRK1PkXC6XgwsfFR3qyf",
  "key2": "3Tx8LEcHLKGU7LQyUXcYuHsuicEeF5RfhAG9gWkUByA6z4pj1PPGELqBx7kDiEhx1BNy3bhbzSyG3pSEtV6fs3Ar",
  "key3": "juKb5eP5Z4iYR1uttbL57FLUitq4umcg3eA6pXJdz88wPuHXHNCvatKJxJBeigHnGoB6yHvxQ5Xx2KQ3yuChfSL",
  "key4": "uwK6ZJDJFMCjTSFMnpYozub2Xx31gaLXCxTFqscYbE4QPspjNfH4hYDeVkznZ5cjC3KDCwoe598ApxreBk4MoMj",
  "key5": "2PBR9VLna82abo8E31yF5Cnmf8ZauQU2rwxHaTZkDjRaAkoHbvjF62pe9uLgbaYrrKEj9sWxyortu6PsYsEmSCJt",
  "key6": "4HdqYxfjRdJFdWA4LPASnr72MmweudcRt3KrVsVwVphpFUpNfCinkPqiohQLYGaxwyH8jNQPrccNNxBMK8Tq2oKf",
  "key7": "5H5Es3YWUUiWzUJiKa65zrc5sMLoS51HXkB5brRmJgSewyZqnWLhd9DZsodb8P5qdNWGgthkJ2ZuAcYTQPuaWD7c",
  "key8": "4Em3G5vMWujWE7M4LaNv8YZtaUBpwqdtbAnUuxVCT8FStZDTTPgwavYXFehZEhSxThRtw9epaj4GRvn62FWUdpu1",
  "key9": "51B76imqgTw8txeV1eGRY14Vr6m65yiuNxhcT9RB8ZEgSoygpL3vHwUupkdQk9dzyUYQmwVNCRoET1fBqwWgzZfy",
  "key10": "4j8ntsNPCSFqAoGGNYHY7K1eY1YHFHVu8JDuh9fJ1Ti21RMXWtTuqTDjNpJvkC26vnH8Rn7fJCdgKwGAbLXpFsy",
  "key11": "34Eadfna2EbkfyWzC2Qr5oFsT4qziXEwriptjZp39SZo2mMtbLZ8pb6KF6GaF7Rm1Z4d7v5mnyb7TnyRZ5AtaqkL",
  "key12": "3DPAFVXVzNAA1HxmCGGkHKtcBMPGR7oPt1ACyGVaz3WTQuTbEXtbdoQ4nhZSAfjBqDoyyZ1rwUUi5JLybZNpFQta",
  "key13": "4sfQCeMs6Pg1xfeWM1Y6CfXf1uDeC9LoTCYY7n7ZXjujDv4ym67tmEVS4h7mNWzCs6aUyBvsEb3U72g158TjWxzs",
  "key14": "5f5L7eR35j6avcnvsahoPYeZsKg5iL1E9GYh7nMZ7jNCvnaMEFAqyMJPBLtmuBVrtJenVw8Cb1ts4HY9ttSuydCp",
  "key15": "2wYWzYUrzYLfqShAZdjg2mSKaHFtyiZ3WYh4sEdRZs8oSouAoTvJyMNHvpgy9gjBaifCPf9yXCZTGK7Gs6RUmffL",
  "key16": "5ugfieYGnZZcLxvBoXpxZr43YNo5hJybAmQkq2fDAZ1u6sVmPqRw5fb5wcAkQ5hGQCn9tu1YUWjRQb8uZejvgZFS",
  "key17": "3MxV9iw5yfWfvxQNocsJPUc3kYkhj4vCdxK1EMvB8v2ZaaQmBvCNij5X8ieDgLhwmDMpQHBWq2s9KHZN24QSYkdW",
  "key18": "2DdoAJ9hHbK1S5A7ptHwvPZoAjDfQuNgLdvbyjmP9S9sqUCthdLaQTXjxMUvYFBY6YH8XhxtCEYzcpExTfmY5xoJ",
  "key19": "5tfMSQEmAYKRxkZQDC4hGUrhMCzTaNoDctnKYCggYYVT3aVTRSi3Sqb3yj5hLH2SAEKAfxC2XtvNQMojsCXn8mA7",
  "key20": "3ZAp7ESFdTF8wQg2f8iPdq47D6Jc951kaCQdLvqD2wrrncnPePVZ3y1moCHA7fcvhQiscmdydSSisoMRJBRqrdrp",
  "key21": "4SjE5CqFZ9eawuLBf4BBbzBzGvwmN5y1Y1jPmrMzX1jRxP2YJwbLTre14yHtHkreyB8fmeAyDPJ22XGqHQmLZW9g",
  "key22": "4AiELoYUZS2wTxudWTXEhudNV27GhkgP79P5kKzZ1MingFa7fQP7SxE4bELyiKoHrTBBdu6rqdY9ARjTdUBMDEF4",
  "key23": "5zUhZK9S6hpPTjKTJDzesgLYSmWuBSAX4cuigJuSB9naFG11UBFi5K95ZQZrHAi8beZYgUeC6UTGBPePN1WJQCxf",
  "key24": "4a5h9gnvLMVpLa1WURquuFKDnDtWnLjFpaHhcJhHqQ62bGCf3uaGMtm2sHFn7J5kan2Q3iWWarJR8AruXMRAEket",
  "key25": "2x7WRMzxdDGowjvp7Kf2JCCD7FBg4vtwtu9sB1y2JhZuHtpj2EbedbiDNkPZfTKvbcoz8mjU9EE64tda14BqDvfY",
  "key26": "53NMErjNEb9q72VpRdNuXxpnYgx7QDzqeRfX1BFZ3tk4g5kgeidxFsuTZ5AbE7wAKdL4X4iBCajMMMRFBrta17yb",
  "key27": "peo58tubMDJj1GYPYNtW4g9QdnoKXPH5zdnvFXYyCY4qcPgGnthyifuHZv1UxYbcasgASU7VtrhickSSWgbHuPA",
  "key28": "5wNtNC3GkJZpKdvfjvMGf77aCfQnRtVgXLFexZQVoy3NBixuJJrBSA29mCHrQzHSEwFkc9HigYBagJJaGM7Pdmo2",
  "key29": "kRc4odLuKJa6Liyzb7cwJ65dZNaaGsi8pSEZuUE1UTkKzGFd4hu8rYTwMYkHRQJ1tSxANH9R3cdpJVEwLVAtV8k",
  "key30": "5X8cbB2Ue24qtLJBx18E7Z9LUUkmEhq19XFMwwUGk4guM3ujm7UGDTA3nQxNXVU6ZDfnEkSKAnBynEygsB1RhPQr",
  "key31": "5F5DC48K16KAhv6sng9xq98HSBFY3kEGJT92Kvim9PLsoRwKrdZP8kwKe1z282yFPYCJU3cCporNxXniRS31RTa4",
  "key32": "655CULhC8T8w9q4uz5ypGsaTv99f9iWbGeoxKEYnLbx3CmeV6EDVMmxN2wGie8WLoCpdi4eED816apeauY4XGL6V",
  "key33": "PCd1CztWpe5GEj37sJmvmbcauA5pWErpdtyLGxjKh7LLJrn3J3TPoa3eppbYipeAWwXG1tUHXDrpQHuRf9MDr38",
  "key34": "2UmmY5tG5oaMmc5Ug75suvHg3wqhWkANucbeEroE5W1MKVWU9WWPPSguPMME3vjV6TmVN67tGkmjdBcPmGvzZbLn",
  "key35": "3qVMsq7GnudqkEgFKNFCu4L1v8WFCodH2WyxxkbbdNc16i8VgdURxpWRFPAe7sLhueo5USqQTxvJ58kfhh9FoKEi",
  "key36": "3dVGvgkF8hUi4pGGLQxnfYTmABzvigfp2wYSv7G8evhgxyRd5bBAvwxWiVgofoPZLeENqxmspx9HNQGFbdzbwac4",
  "key37": "7y2qUpT425HNNB44tHjn7m6me1ucdcA9p1Vw2Ezm7mZ78fEUeUXdzqKtmzaXGgNUGijcmTV7kZdZTymz6MquZBY",
  "key38": "3YnVr3zzQ7DCrDJRYvXqnYo4A54XS5dWfYtx5WLQqX3dNAuF9PPbFH7E8pksXBftGwTL4X1bUL3aPABGBQJFM3G",
  "key39": "4mK3aRec57eFYL1z51sRnwMeS992M3C1QnH97Wn3Brd4dkhwhmNxZiQn3nirAjXSb7nPxpChatUAJRjD2ovT7mFY",
  "key40": "3qS9RtXLiX1ccKpfnRDN26Dg1ud7hnK9txqy4X1HUB2zMEZDUjej4dEee19FLx5qbFdgrHy2PCLzDJwQfJsDNPvW",
  "key41": "5AomG5vbZP34jpt5NTfJRGCJtUvvMRy1qt5DCvU4BDJNiFCdgi1SiJZrHjoKqKcAxiTzpaRcUDzV8eonK231kHue",
  "key42": "s9cdmJQLsS3E71PjgNfyQREDFgG55tsv2CEeodWewVTTqXE8B35557zKGQHEsZkwZKt521kTQpFBYWudUPckVSu",
  "key43": "4yfLwPsjA7eaHL3eoe7VWfdtHnCFiAWNhnGTJnk5pNC1k6XhaGVvT25d6DYfxnje4Te7fooZJpj6iDKX82zP23BW",
  "key44": "4vFEukpnhWZmNmyn7KRNSWXnHQwjAiksMonwymL5Jjnr1QPogC2PsTrwS3bKCDWdAP2Xu1U8MYdjbHXmRDDPmF9J"
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
