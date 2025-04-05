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
    "3BQ42usspUrmVHDviRK5qakrT3FtiEpQGEMh9tBtP4wZHfUyVSS7KA4sC43uuVqspRetrGeJroV7a5wjnAxyaq7u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X8q4wmt2aHat4ndxbKxRdToK3iFefdBfeKuT6Dupzg87BkWxVN97aQKkhToSWZrPBwqctCbfJvU3JBPF149wmiZ",
  "key1": "66wTKH9G6ufB9Jg9A4B2TRzR9ayNjfi9GMbfLjfYmmYMEFHA5yUQHbysy3mY1i7sX1ABVv1qrwmCzMa39RutKbiu",
  "key2": "2wmmTgYdqkqkZmBtpRBxKd48b1wwv363VDnsZam2C8HeZRv5DMkZMavnoVapoUKJ5ze9Z5a9bZThSKe6wr8cZmr2",
  "key3": "2K5t5i2KJuC1m9ff67qaJw3dYH1fSo5Z2AxT8V5oncdxfe3aBrGHm4rY8RWaQ5cJvFHKr83h4rSqzUQ86q9j9sJt",
  "key4": "dbbp67ry659y13cB5Xc2Q1KR6cGJa3bwseK5FazBWpNuKzebMSwVMcpurX3wm4CyHe7UUbnMS5u1EhSNG4j6Mtm",
  "key5": "2CQ8u5YXGAtGXArzjXt5Qbs8GpqRjTPBAthSKmeXtsvLJbd75yuoStw3KfM3aoDHwShjps7tGu13jKZr6BmHRPVb",
  "key6": "343xjWiT2Fy9dLcmdGQAovRsyYoL7h6FHTsQVJWvLVk9LBNYcriYH4EFoR126xSH9NR3j46ZZ28FRfUXXeehcpGP",
  "key7": "4bsaPJiDiUmgEGkFKMyQgFm59FcBoyKHLMvmCwKEz7T6eyXKznSWsjGxibq7mcNtVjMxeP7QFX22c2Zm4dwe86D5",
  "key8": "4MxfiAuV1ybY47Vn1UVUrKYMxRoWWubA78WxzXBktkkbudC85sysibc6xz3zEv36GncbsSaGDjTNySgYVUjmU7Xq",
  "key9": "3FAAckqPgmdcZcem7CCE4ENnhTLrbYGfRMKE1mhtjU5bSDpe8vyMNzPnXiVnW1eio3Aizm3YgKi4vmwKSYF9eZFz",
  "key10": "MHGW7Ze6bHvLDcV8xLNMvLEpTez4RZFLFjXHDcpQUS56bweoWo26fCzYsxuVfRYo64ujLHQEthg7632kwY38rCm",
  "key11": "24VMp1dn795F4yhFzhEobJNE4kLGgorsZxSVceAPghz4sgbGZYZKgcpb6CJGk5rf1quVyoQKBzxnTyr4Jj3Ee5kN",
  "key12": "2gpz2s38qWd1HRSomQcTaLtH8ysYMd9Vpc3HqLfGnh2sZeJ7mmKZUT2AMSjRzqJ6ngCmERT9qFCGSoqYsAg4GjAa",
  "key13": "2cd2SN2ooy5TyRsJo4N92kYJXuUutK6h6mBWaBxVHArtLY8xr7jzUJa3awDzjU8EGmGKTxbzEwikXodU7sWyPuyg",
  "key14": "5dHdFad5n2kqzKPPFjHGcHjJC4qgytu9LGxcmdQTdpupAzY4YSQMhpCt2y48bD41jc7tzjDHggUi8ZiVFaPJa62X",
  "key15": "Km5jCiEt4jvyBrGsZHzzuDTbD2j4k2PBNeUk5BqGyCNqSoeDAxa2cjtbFsBHS8eE3gez3MDe9eTYWuQtuz5bGjz",
  "key16": "2KXeo1zR2U7jVd1RpVbMqqzJQENpsifLz3TN87h6qBTquQznwwBHikjT9PpKAtJtY5xPeYes4xbWQmnVtC2Vo5zW",
  "key17": "5Xg8pbARaD3UHKmk3QdzSHDugPNWaCLuNnv5oduSCJ1Yb5fTrieVqJ3gJWE3VdymRSv4hzvcnduLofjpYxtAHATA",
  "key18": "3g4JHWTDabCbrRYzSbiSt22VoUdMASXHBPwN5PDRHYm1KrDSvsxFiPEHfnVhnFCzoUp1UQES4PibRTopJ9dVq2fZ",
  "key19": "4WgdUp7HHM9jNquc4YvgV7kKqvU1pZgjkGJqJ3UzEhXUDsUKzSTBJEw9mN3fTGz39GpWCWpB1MnEKpUyLMen9pdT",
  "key20": "BrKvdTigVLFhy74FFYaTvGUJAGj2tCYmFfCT8AesVfXnyDeZsv4jELpHi84LDXb31FBWiNeV3YJTPRZUbHieCX5",
  "key21": "5AaxHQXYothzDc5iCczwNNeQS2ebgzKoW68dm9heFzEmNwYBEJ9BMWFGpkJLt2Mkjnh3FYnz5zcBerK9KsjvVpRd",
  "key22": "299vuvP3DDL58ZNJPtm4ngG7mTKRRnL3uRyujCteVCh4eTTYHvqDcG8aRJPCcQ9AJfU3kRuxK78W6HiTGEd7E1ZP",
  "key23": "3QQ5PqDgbGwy5P4MzTcPAZ6U6FjZb74vQBpiMt3Ee59ro77pGY959FGUq2ET8KRQ1XrwZZs9xnsK2ZvkwVD57R8E",
  "key24": "5jC73pfrMWGpUR7apoPruEvBEJDkhASzyBAicoNzV9D3ZqacvQzSuUBaSkVwiEBMChSWbb4FvtpcmBThLYtfnjuw",
  "key25": "5HZesNsuGZfs2eVc8GrKDzVsz3B4v2JHuDKrPPxmAkArxMGVsHeQFyKYFUskmp43s2bezxH6RBYSfoq4Xqxf6dp3",
  "key26": "bRzuKn2gzK8jWS8otQaDYBUEQ9b9waCV5SeSrrigfodThSGvsP2MYsXyEyUXfJpiLg14cCZucbMfZ3osVCxoB8N",
  "key27": "PZbGgyvPErU1T2QR8WY7trCC62w8or3ry5A8HEAq5qxn1134o1buxvdQtPZrDMwiGGxN5DiTnkf1YKLpU74784C",
  "key28": "c71jH18hY6j5VK6kn65nx75CZWSmYxwKReRb3aesmaTjci27ZcoG6xxxRvBmjh8sgudXKUcqyvKqQerYJ9XBESy",
  "key29": "5kR1TPG6LkL14kPXVqisZSr3hDaxgUXq1d98SzJecnstQDJZQy6duB15XaQkXXrqu4H8jKW3kU9ywGyF56QvJZQg",
  "key30": "2fsLLMcNThrbsPDn7WNkB3wXJVryqfTareHNUYZ5YTu2rZs6eyrcwtqisT7rRAPsL2yd2jPzwDaaFfsXFf24S9U7",
  "key31": "2buowTSqYktimGDUTszNAuiDtnUdBxSSVYQAAVxTotbsqsHsna6gH3pAKa3v4Mec1HoHV53uMNa67iTcSEVhpZz6",
  "key32": "5uPuY3Wa9w45A5PDn9STxBeQU6wafF5RnH3hTW2LWjq1VTFzjfu66883z21rqh5WqQ4ndcCaN4rWvMUEtKStPNVE",
  "key33": "2ciRTKQPQxufYtqi9MeKN8eurSkD3qsc58PGYgJrkR1zoUMy3nqYEf776NYCEiyaXTDcsnVc5QckmSvShB8RP9Lf",
  "key34": "39KNyhDLdbWJY2fhNPhJqVsGnbeKH6Cn38JKtmPTzVqZNT1sUfcjCSPKXhFyVeJiRyJnKXWpPEGS9dXE8h1Uop6W",
  "key35": "5g3t6TvwcZiJFL3LmzENaPcvmkdx6Qy18xNmdAiBJ9ZP56L6poVjaHC9BixfoYJn4nW6v5eRXoHNZGbEsVKTUbuj",
  "key36": "3Rm1dJx9YQr8PgEV2xj1pNQoexchC4RceL4CTkuN8bGtAs8XG1UJVj7hGupuQffkzvCy3Rjaivn5a53TdzC8iqLX",
  "key37": "9SUD7wzAp3Sthdk5H3i42h9vzPeXwHrLP1Ut6y8cjNbTrKELugHrAEQRnodyBjy2aJKtYoxfox5JNyacHRnueE5",
  "key38": "5LzvTgv6mpdJdXwywsXBbg19peYAcTPzw84p12HG1W4dp3TYBdTdMaR3yqzzr5fLkCgfdftvc84Kxx316jKgPbyV",
  "key39": "2BBqyXkVc6j4Nf4TrfqvDALhmPqbww1QCktnPrgaASzR9aAekDC3q22Y7bpo992YRoxSxJvM38dJcR3fkbpjREsX",
  "key40": "3wz3DLAp6bNuN1meGojm5FMdr69vpuPDo4o6cj8yRmjCy9MU6gbeRk65DLPJa51e37iaYbHXZBuoqKK2kYN5dkU6",
  "key41": "4A36AXvC9BAAhYcPn9svhwzb3DYPY6Qhq7iR9eQA5zATFg4VcCFUrruy2tLQqUm1ntS5KoJtQv6e2EJGMpSLSWjM",
  "key42": "2tWkBfvJX5XeHJMxaXzaZBcKfx5R5uMrPgt6rwkAuWoFN2aahPZsCfhwYbp5CFRQp29fSgJuuWwubRAevWcqyDAt",
  "key43": "5vaU7i8oJx5EvHejTH67meFnbBpZ9b2fBrLArzCVRebgZyR3gjvKafkaw5BZCd4sWrWutWVxPbZeQLwC8wwdDD31",
  "key44": "5DqrXa2bcTsvRHf7oikSnW22gvq464PvrFgL9fiZsrvZQkMX7m8cz7EbtFcsqzvEj4D4YEK8twPBFHsv9EEoLg5b"
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
