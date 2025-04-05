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
    "nNp4QYiaG4VvKUp2seJoPT6hhy2tcNewuxZ9hQDNnjBRR7ZpP9FHzCbEc1ezANqubRmJaebdNjev5a1EYSYAAru"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22puaDqLK5azpcurqM6WP8jbtibBAh2HJuFNNhmnDmfdYtFMzmbQvVwuh3GeFBXT3BNqWRfayTiBZA1bRnzETiDD",
  "key1": "3zLFjnRWi6kSPvymrqajbP9MRCWdoVMWzfgkT1m3aD4HYZMaNc5hQGP7AdQJvxA8NWEmZuVktgsFudXKnbbm6jm",
  "key2": "5uoBWTK6nyU3qgU7ViRbGQTdb8WSLupWTadgjcJPa1qPQVCcki6n9sSWn2o62zobgi6oj1zvKvaVUazQNkEhvy3z",
  "key3": "2G2fw7J3yANEJtiKzdZVs9uxZ5oFSZSZiem8rggXQ4wXytrdoR5cAuJoDness6dGTsZZx9z3YYoN85wb9xfDYaCe",
  "key4": "318muytfH9X1Ted2Re12ydpubwsTo8qDtB8wMmKB5xZG9pYgDtxFdstt4ioncApe6sxmdhwzAwfGN3MoKEiLPbwZ",
  "key5": "8cKL9KmXnfqXWCmoZ6mTz47Lpe6vEvh62B6vfDMQKgfkQSBPsnx2RxVeyz1FNa1kRevx4BMfkR1vHXWDz8q2t97",
  "key6": "61SwurrUrtXn8XZdwFUhf4TFoNsihHVJaM6x3wXYTfMmNTaK8tkEGPxazCr7wHQGSdkNRcKyR5kgYhN5SajW3Jn4",
  "key7": "3CbjHAEGwspPrzSwny5RRmwrpG7yTTBtnxyyhwXJzWtLwL5hMopAT9JK6LMpNXMTMuPvK6BC9iBHVczMnTj1t8yJ",
  "key8": "5PEago5VAjrAimJsvr3p36N9hxXJ9FSJYAyBPNNoYtXa8n9dYzRuVQWqj9wozctuD1mxzZnHeYsNNoS8sAVNFCDU",
  "key9": "28jdEEBmguNt4veVkeiuznZsWAx1eXg9Ae7fxJr66FYBpNfB9oJc4KTk1y2nZxayJ42S4bnYZmVn3tBkeRhAS49F",
  "key10": "4g6rjuWckbdqHz9rh6n5mY8iH3nHH2YTj2Tv5SDP1EE1TvFYBxZ7gPWZKEJzg43pUKDXcbguSeYLiS3fNqc3EXDE",
  "key11": "66HZmWv8vuMuT2PyjyJHPMsoQ9FfMUCfdmytv5ZXUJQovD53QisMWsMNLrS4eqYsTWP3TXbbGF8C5KgCsRBHC4dG",
  "key12": "3vDNoTz9CTWf5NxU62dc9r8LiFc8sfpVVnLy4WZtAZHuc213jUteXRR3dTEvCLhc2ZDHGmq6b8g5xG5JjXQSGiHb",
  "key13": "4LyPpnZjxa14RzETSKWKVVjvyxJ3XYVndgpd92a3aXn77Hst1FciW11WRFnADeLAtnXepdhswTHzxWUB29TxUcoG",
  "key14": "xfXog8Swvt1x12y2Fms3vWaXXiwzCCDwL8VPf4zApq7MgpcREi9TAmm7VZs9UiEDMqu2AmVoAPZizxaed5oz7Ec",
  "key15": "3XtkJQh8X3CHcAxLU8ToVTr98zipqa2YMG3e2EB9HjHBxvY9pqd3JZa5UcueKxdHns6TEpWXqx9SfWkKm4SkMeMW",
  "key16": "5tVWUBMAjybsuPwkPEeJVf2od8ULp9XokRV2epVuAYjk5qdgDQGuxbeBptTqy8bDZVcmBQXVitbviGKW3sbeqkTt",
  "key17": "fWTkkaqKPau3hLJ2YXHyYwcVBXA7nNXr2SgezkwMJK3PhM97JY2WQEGEMb9HhAhY2xBXF27ZWcNXhriaHQaHsoc",
  "key18": "4bRkfj1CwjMY8jraF7NKuK1HWVPBGYC1Z7qSMFhq1dbPVXBHgcPj9LisB4G1RY3FckwGFc1i3PkajmpFwAwXGiLo",
  "key19": "5kdPmdF74hZN7RE5kfo4snvKKJnavCjicpgKPX6AdG6p1tHjXn397vKrYgpXNxMuHMiBZJBRZ4JWKYn4M1Nh6KEw",
  "key20": "3TL2bdk7d8VEjqYSUoLxE3fUGGaMjVKW973CdzVqat4LQCtWyUn9hXoSAkQAiDJFi32qqGatTmLGGpuogzVdNoSj",
  "key21": "3UBUjSy4KsE24Evc73gBUkHjXrHVgu8S1t3QKvx6FN5V8HC6hZ7SyaxpwpT7uBY9yXri2j4o2xk6RRGpT1z33yKG",
  "key22": "3jZfb9A63e1j9imLXjRpY27ngAs4XngNNtwryEMZhQUpyQPV3vWphbhJZQYtU5LwCTxBaasoEWzdKyzuuc6SdZUP",
  "key23": "3degtwvnKPcPeUCfEcg7RTAb2oqPQW1fEnnDKjcKdwkd2KCeAQNDdnHBGAYVyyPG4qevpwF7BoBgDmbi72Aw76Fq",
  "key24": "smmwKSYHHr1GRBogZ446oKaUX9LeGgxS5cifiSx7zHJY2C8tyjV15Sj1mjGDrzRqzKQhNFRbayeYiZ9mXA3wVXd",
  "key25": "4XWZAYZqeEqwY91Xi75wHaCB8XgAbec5Qu8HP6soru7yjdTQiTg4eu3dTVoQhNSrQtLDMeEkdjEBatJqGT5LZJd5",
  "key26": "23UwUpNRAjbvdKT23hV8G45JwdP3XubvrvQepPby3R4TLS5ZUiqSNkbXfea9FzLMk9PmUPs17k4jdqkTiidN3CYm",
  "key27": "3viaWvbyJEPYG8jfFUPNPg53tvPcex5tbKbdvYGEHTvgkcmKE6hE86TDDdowLd7voWp83cxdApj1WrhqMRNkSvGC",
  "key28": "27VgN7mky2B6AKXzeNdteUYek8TNBnJnnuDHbjVdMTsKMUx9MNqdBpsYywCWAX1rXxQhfNsFbMQu4jexs2B9NVfn",
  "key29": "wQbysQrupfHLZ5NJf3KNk6xq55mqiGWaZ2opfc3qemssSxCdvrTZTfzQm7cuv46GZ6HSwr5i49dvtbaynqAFQrh",
  "key30": "2qnn33yHzvYLQ3mterPTM71Tw2ETGZaKLH72UwMno12d5wwGcYV75rpE5NWpy7wuf4XEVUTaFv6mVKEu5vbjrWr5",
  "key31": "2nNtzEYqAE2SNqXR3vzzhzxwc1YKP5fsEWkTsZufgLA6mEQtcfWw7oi5EbkX46xramhxwWVWJnFxnKbBNiKCgGd1",
  "key32": "538jDh953LPAb9BCQoiQB7Pdp7SLurrUGKBF7xGybkg2L35dX1u2gmHJmCAPr2yuKDBtY2wc3Prdq3DPSC4zqMSf",
  "key33": "2WsZEcDgTYjWaRSmpBL4CGQpgGybY1CJf8vT2hwrajMwZnNYRjGzaEkYxk13KcAhBiq9174j3i1KowkqDz6nzEzS",
  "key34": "28kvFGsez26C3FkHsUvAmywgpmWdYNgZ3GxtNqVZW1exQeU6qC58bhDrHabHpss6GxUq271P5Ko6QU6eaqX5iuJJ",
  "key35": "D6nL71q21aF53x6QM3u5XjvhNXadF7EA1LubbMJ7Nx3qAoSWJeM9z6bGYVGqY4KfCrUHyuZAX6K4V2vaRwfQWXv",
  "key36": "3Uq2DYGJ9WUWEWCp9H24srWWfmhCFZNgPghSzVM2xz3YQWR87FCSfxxC5np8r2zxFab4A7MiUDKXvgdrzKwiWpek",
  "key37": "fA4KbMHuagHNj2juEz5b6BRFL3FgrgATRz3DGcRZdaJdSX2bYkshq1pdnCYxoTVmk8utT5NdnkiPkdSGgj9xKwA",
  "key38": "29a27Jn9WQ31VMzgv6CTBKzWBuUKwbPxcFLU8c3QP43PszoWRgbuMZUp7UHpygLCMZBVr8q5r18F6sJTykzX21be",
  "key39": "5cN8Whibi3g26hqa1WFJCZe8uvAyvHVrjH3S6tPPcDQiYNDxxnBZFk9ypSFib5CZD4n42nbFLPSXwTh9H9MVnwrP",
  "key40": "53JKdP1jfMcaFrvhNCQsz1wuCqMpdgtNcfJFjeadhLRSz19FLAS2HH7xFumSt6f774e9hA4XzWh4MCzBFo1nBUE9",
  "key41": "3TNh5oR8HLyERUx6jZvskC3xHtrSdEFuTXTxZLTd4sY5h9pD7qgVkfU77nQBsBizwp8y7fPNdF9E2MVLn9v9Z2H1",
  "key42": "46BHzVJB3gpsH15RndsW3b6KALtfmcVUMGpCEMdjGacNuuLk8sryCw2JuX2qBGcCjrG5VQG2XM9PzmTMqKbWMfyT",
  "key43": "22P4zFc7ZKGFGAXDH6SZMv1rMiZi6mntZLcEGzqyvVBJdjTtreBxJ5XPth29NTebmj7wo8A5tMJnxiZzxg3Dr7fk",
  "key44": "2JHx9s6DD86oLPZW8zpnhoKnH76R5Rq6vhyxmoX9ZJJxFmbkgNxfREurHXXdnSPgvfwTRhrY7Zyktj2x4QYCe91z"
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
