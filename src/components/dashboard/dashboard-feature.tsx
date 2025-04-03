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
    "ufoMWhFN2GLDQwXj2SCEiDhypy8Nt1mocDysi22ugj3TZ4xRt76qSjnYX48BWCB5cCQioP3guPqNtwFiYAMWxMM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RPHGgbVoVDHcwcdxVnV3cpVkU9EwJs8kbUGM3sUW9wfGbT77u97U9eZzFVXA3JHAzxgjjAbbNdVPf59qExThpZD",
  "key1": "5B3zmGpBMej3yTMYsrQbgGSQWuh4AhJQ4iWCKBSuPDS1ecNMoSYRZXtRUftKqMWyqvAW5NWYJG1Xr2hjWEZZMKFx",
  "key2": "ecZeRQUkJof9CQL7d3HeD9Tzq3rFmMD2Jt7AuehipGA28kfiXbSD32zZd4pu5KswS8vPSmBGyvhRgM3TaeLCYTo",
  "key3": "2VYxj6fJWYJQRaCrisaAZKrbGXacueQQ8syxS7BMGCey29toE8tspMYJ6NGAdzri1Yd6Ebitsw9JDUYLeNL1Vz4J",
  "key4": "4wABjU5XpGqPh8bY7h6w6QWsx8Ezu7gPvGKWW5UgrSVateSzSjQFPme3H3PzvuEZaGsfxcmwyLzXxhdzgc3peXoF",
  "key5": "4DMJ3qz3kKCL7FRBuWgUA7jLcdCECn2KWiyCRhuafAJ8mrJcFPxgmQo41s4vufVRN1pKdMNn2WxVZtqfevpyddtt",
  "key6": "556ejR8ieQVVV8av4LBv4QJSJmJFgnES9B9ARnLptEjQ9MHiEgacFsZLD6WuyADPSapZwQKDHro5L8ieBa2nLANB",
  "key7": "5wq9k23yKVvbFFSNJqJqpEymJU2DtX4VN75pdCjT4RTCZGdeH7VTh4vb2iEe4JekHyEJeBArb97em86yKC1U5Yz9",
  "key8": "31yezVuAfMhhZrHEnrWyYwmg93e3j4Sbci1wDtriDWYKwZEMezGa3RfBS6xXCuzU2rZAyvtbYKvTtD4Buwyys9Eh",
  "key9": "655c6obALvTx81duWkoDF2zMDSZuz6Yjc7PRHqgQt74keFAfjAT2MMn6BEoaYYD42B2xqfKpCAupZqwdVEZ2vitX",
  "key10": "2uKHHU1gpCnQuqGBq8gVtY1mpAxX5Ltx6pDctB5fTN9ax6U4LdnQ825XfotDufWsknLrHDR15dSumHek5vCzNSoX",
  "key11": "4XCSgTmJsBCupVPcoCChjsxpPAU9YWGEWZdkNRv7LAottey6DLuZR1JwyF1bhWnqaZaUCWwdHyeGbvfGVrid1cwZ",
  "key12": "32HMcH8s574Hxzxxn5KvVS4X8hHFvxtQaGwk5pA138nZwdbnTunYwjQwgC7QmaNuEYJ5ECBHLDeq8FWtyT8cmTjd",
  "key13": "4r8o3qCGZ8vnTz8zLDxsUdVNm3WdmxHrvdySuSNxUTjE6K9SaS8FVKyRUxs4ET8LNL7ivS2vvbUskG1pHfzp1deJ",
  "key14": "5m4jPwRKnx8QrfZbwYrC8MMS1fgxi9GMvn7CDUscV8RVD7tpCZC4kNVFPBoRTwc5XuVCrKZwwmEGKAZgXfDS1dK7",
  "key15": "9d4unLjtScchnUuHJ28WtUmnF2d2UxuQfiCfMe2j9kSaBoYKPTCk8vK4YXgMTkDNUSKnjrc2AjZX971mP5iWPvb",
  "key16": "4Qpq6TFkRiUKn6wCJcF8ayeaARZRrw9Dwg3Ve9uHJh9uHRdHLau8PvA6MWH2vz7KujXdupsRS8GEA2dJYgicgsps",
  "key17": "4ZudymWHMWy5WaXkscqC7BWEhK5hyfWvCz6tdAtN2TRcBZ41QcumCYJTvgZNgu1tJkxSUxRCdkTS8Lfm6kgCmMdJ",
  "key18": "2yCDshnF3GAdfayVNiLw7z6hunZJaGYYjrJimAm2Tijud16fdmkQYnvFPC8C2s1xJaRYXHJW5w5gM21vkkX43heD",
  "key19": "3CWMuJMYYjifZR2pXjV6EyqvGTuFcXb9MHmMGjzgzuPPqFRhhaxSyWTPG1A2T23on82SzDRJ1Xg1S4W3nExxvH8B",
  "key20": "A15uTiAw2TYqQyvE9waqwbdNoH6pgkWaDvKHc6S47yLqMW1yzuSodhX7Hmzes4nLcDDjeq11zf4xwcUQfAFUkw1",
  "key21": "55JEReKgxe2nvsorjgguaQRpJ7NYYzuuumktX3PE3bU7ozk5WLhPL6Fda33Yvit7QCHNyQxbRcvRqrS2Nkywgv4H",
  "key22": "5VLR2k5m4BsDFk5sAqC28hXdeUJV1zaWTsnkz2KYpSHoeHJtV6WSSkTw2zA4JVxx3z3BVdDmUte3AcCFSfnH2Pww",
  "key23": "36fwKxaBKexXqaWYwHWuPkBcsvXH6fneGmmSami7v4tyqvaht2xwpm88MbbzoKTvVg68gdLtzT5Y4EKoBctmPC5M",
  "key24": "3Reis82UWcoxexwhuScBJP37br6KBfZj4bfFopZm3E7gLsqStebM71hpAzYV3Bi66jdtnWDbdd8Jh9UMgTkXvKVJ",
  "key25": "aFcm85xmybAqY2ThjnnXMwq4T5XQDCM2iM3DnoNSUYJju8eSS46hU1wJ3bbdx3y3QETDWRa1ERe6UzozDjdCg3B",
  "key26": "3M4bdpVJYybiZivogfjeDR3NdbHuMCnf9yZhozVoUBHrJasTHqcVrYuN3ZnWBz21cgDpc2NDc7jMuHa8Nbdm4Mhr",
  "key27": "gnXmZS8McysqekJySfTJhAbp3jzMVBSvsjWXHnv4VidZHnDUrsmAnhEM8VHPQaHiyhoCSvhcZJzrGNQ1tZmMoQW",
  "key28": "2y91EDgB6iLXARhDmciG7VHEK5rA7xqJw2JdpYTNZQ1kQyNhjCkHdwbAQNo9DwgkxfF4wvQvYDfUMdU4u5gPzAvx",
  "key29": "3eYrVWFdBjQorG1pcah4spSjR1iURfYhhaiTifSL7L2wjfhrczwPbYyiGww1hpMAuakSnqKKfpxRgM2g79thzT9d",
  "key30": "4a5wqezdioZQieECvpUna27caC2TPT9gCtUbN1HR36qpjWveEEeAAEsy5ibr9bSDWMYq1oq8vPJsjckQRjx9cQmE",
  "key31": "35YYSZdwDaTitDrrz3FFCz97R5syLUxc5zbfuKGDLNDAHmrTmSqWGvk2wuuFVbVNJEabsHLA4ecfWTqpiHpvTbbA",
  "key32": "2rFb7Q25uHcGbVkhNKeJU3D2KvF6ytZLtFJraYtzPCnvGduQ8DPV9i6tRug2rXUMA95qgNHackkZLmCkuvqxaVrh",
  "key33": "47n9vY2yDzg1WGz1qj2xsndP6grDGa1pGQeLkPgbMzvrNuWL6DM9mFnyDJrXdsDHXcdkhNvv2GDgrXUYZXG3Yocy",
  "key34": "3QcBbSQ8KiApJoFUwc7zY3usE5NwxZoEk8etYhezf3aDf9kEo15bdfKS9GmxNFHxwtGfUTrRFcndW9rTjRC1Yw5a",
  "key35": "281NawTA5q29v8majEusPn4tgifYnbm9ahYUizjXthqJ4yphvujqMA9ogndHvTRFuZmbcaVKLxmXGu6jEGLKsgMN",
  "key36": "457AMAj6LQusHeQvZuCek9RvgHzopzSrheswvLoyXH4cWa6maxph8iUuzdNowBuGKdC46348SAvVmLFXPizkaUeA",
  "key37": "4Bk9xx7K1Egyiu3YQ9dx4bn3vpp48UYEpZ3DKFdQztxuAkrJNTXspx42BZTZzy8bDocGA4pz48BRc197hvTHefvk",
  "key38": "HLvDU3thGXLsYpBdbfpu1UpQsiq6FNGmm6W9oWudtes11SxNnHPSKB1pe8dJ4hKfqoF9CG1VVoZHMD47QTLYpi4"
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
