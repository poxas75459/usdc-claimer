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
    "2Pv1gjcRdPfpBH6HVHWfzmbv9VrDJtCq9a9LRyynZqxLhASafzmopAJ1LYYCyVjPWSFxM9nvN5s8XRfKRCHe58yA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XXtB8DHC6FZU9CZEZTtAdyYNuSsuvZYDNSgMwCjEv37G7GAhkXsvccWszyE3gDoWsbiKxJfRBYRKZaVUt381MBu",
  "key1": "5taPLocXgxbYQAFVf6Q8Gd9bP1KonWA4yuuHn86WYedMMxPVSYynj44wxNA16WH25sDMbmTTvUegyx5ZHCejzLmv",
  "key2": "N1joVY5moXkk5pFJ34zpmZtHcV8KiDC4o7mk2RyfFG9KNz9VSaF5VeEUED1PgMNCyL1M6pE8X7FMDEiJgxGdz98",
  "key3": "3dDENP9FyXw1yfN3zsQBZzfcqo46LyfYYHP4FounymYJnnvTULaA8vuSLQ6fjUZCRP7JdFV5Wk4YVheJes6Mq7Tp",
  "key4": "5tYQZNip96mnCXympBymBARrtXCyfNxbo7ZJFTZVMDF3gxPRQrhUMktYEbuW7s59tp3vWCNEME5JwUrYPSxreXEK",
  "key5": "5V4bMMkyxq9dNhTwra4ZodKtb75NR6Dm1Bqzt4mNP3MnmpAW55YUuynEECHaDhgf1vsTYCr9X6fn6S5MK9yWqva5",
  "key6": "27HQb4jjDWNjXPsJ5xGKDGKKLSCiwxuYEwgEE3FQcqAC7skSyQdC1o3VLaPyc6W2ZKkt5piBe7qHNb2GvwLvZbBk",
  "key7": "3g5puFyNCMu3VV9qehK5qMpCDkJcftLtcqsjQMzaw54gxbw9YMqX3fog5YE7SpmWYKekDqUjXkTnpNV6iz6pXUde",
  "key8": "3S8JCRfTjhJRNPBu5ySiVeYX8FwJrPQZBX7xFJ3j8w2kfNPcJgGVjV34uVvnZ37iZiRKq5ew4WwQHKr4N95g2APr",
  "key9": "5iDn3DKg4q7JfixDtKKycxMTGUksQGWaNU7qU28firgmRc51qxbMPuXKCWU6MNHUBbL2WtMLGGS1k22DrwLnp9aB",
  "key10": "5EZjpBWfrN8Kj1FJRtg6gDeTDnywb3u6VvB8n8o3i6mjyRLAGiLmSRbJ5bHCnpSpckBit8S4QTq5EpFSoKrA7QPz",
  "key11": "52fc3m9gyuobyQhtF4dNxcZWM8fLiPqUHYkQjH6TAiwFmJZcgaYvXBzTzQVZXcPaDEv2kceBpQZ97aCjSdgAMHFT",
  "key12": "2Qprtau9CVi3CqYqaKyq6J7oPzgA74puAEr6Ewd1N4X95ts45GNu7eu5vKs7QHWnEEze883LqjhPBE1u6zBHRQWq",
  "key13": "5X1Moe4RW7sVFmPyLK71CotuNtgQDqWi6bRVoikXDeYSQ3tZe7zgrJARwVdWcGZMJYKnXmREsw8Jik3oJJC2SncJ",
  "key14": "9niqD3uZeJxwsFi2W7N1N3FduJVRKtFoX1yrs8UwkpohaKu8n9o9GiLRWsh54Ryfr338G35z33DkJctKnX73tn8",
  "key15": "1CHqMG49341Ey85xvKLbMCBLJnDhL1MTTWGrdXTMc1snhbfiwf6gbdRDdBEVRgVMGhT52AiYWJLNYRTQn2WHGdW",
  "key16": "2qDR5BWwYYBb7xBKd4hK4ZD6FCdBzY3Reb6d2WrZ9p1guAvQUfuYDRdXjxadRgmgGbZaVDiZFKAtWTpgEzNZwJ3h",
  "key17": "5nSxVncoADgJ4AD9tgoLMvmZUrUPuShi15Pt6Ugnq8CBSVkMWeYo8zwKALZue2ZE7LaFgofhZgbg5yiUVS9bMx3d",
  "key18": "2CPn1VkPbEXGrpR7QxM5iUdY4x5DhNGqj9XfTXGyWgKwrQG6qvQnHWrhKVNc4t5g71pPo7rbGFvfwizKn9qwNJ23",
  "key19": "4zqrhSTRYh551NEZnzASaQ1Pyvy7DLqo1HC4wCvW4YrDHtRzWhC5gsNbekfTXaJoZVkXsxqajPvEeEy7BYBMEc2x",
  "key20": "3XvBmLNwd2YMrmbKdCVXFbnaXQER7hqXLHoyaX6RsoFBJUkMxbjBzeq71pxRMMgaEhmAoUtYawR5CMLYWt58bQwY",
  "key21": "5enLBwQLhbXaoDctSSJZoqczGwkv9rHjMMZDQvJHScMHm18MXW5D9S6XNnk6DzdmYNpkKnB2tsgKYP6BJT1qibGi",
  "key22": "iGrk9dct5QRZxhGLC4wfZ3zqVVijKPUiTVd4ncZC7jprNK86A3ipqiCPqMd5XLL6ZZQ3jAd4bBCrHrEAAw2xxzA",
  "key23": "5VLACUcGWXNqDjEyP1nBm4JUAiiHzHJ9qayt1hY8jAEyzHyS5TPjDHGw2oehowrw9wYY33T6a4v52ihEU1e5aiKZ",
  "key24": "5U94FHMsj3SgvJXG9aoPkkwaL1jVYUckDPUYASmYzTTN3tUEoXgvyTNXE4hssx1qA3imQpBP8n2LCKT3KFY4LBPD",
  "key25": "59HAMNx9HJi3p4uvhrMDX6q1Jp8YNB1QMrZLcNnt1gnxoBsSWQ2rTAFGYK5LKgQcj7qZRebTDRr3PeuJZGkxUrL7",
  "key26": "3GNX3YXKZu8oyzv52Pe6EWYEJATtrTTStxEx5uP85MvtHMv2j5GGNLbehmNMhvDffCmjj6DxRqdCdCQSyTRqQU5Z",
  "key27": "33SWsaXW4eqhMjcTnvr7RdqHtdTQMWGtz8mzKPV7WFRZnu6TCnaUxbM4WMR3pKqNTKSRibHwNutWM33tXeyHvQHb",
  "key28": "2ksHuhf3cy9TGcJhZ14T83iFiQw27jXf4vfJGMarT791H6hBdU4GENok1KF6mCrkZZS7jcsfbepwfmvFgrNLYELa",
  "key29": "NvXydk5jcpkLYgN8ysTziWp35ybCuoLr3EsoZ3wTzynTezd8nWJUcuSQLFTTvc8eYCokApJXBrLeqTZhoDBMWdY",
  "key30": "4bEUtPDqgCju9C3VHzxoHKGFYZYuc5KK85UuKyfDs2xGkD3LFecUDuakisVyDNhNyv8HaCQcgrpgWH82Di72KGbk",
  "key31": "4bQQmftq4MtEyRNChNYQ2n7SHN3uFVtvD1TjVJc28JF64hEk4gvgHz6aioUWutkC1QCYMuHjnQy8frwfFaLtRvnV",
  "key32": "2Rm3MtEznQQaZgRsiEMGPaE7B9FE1e1n4JhqZeVWopGME1kUQXrPtSWsdfEhGegkVrSZBWUWqLZyb61pyTv6iG1v",
  "key33": "5pa5Tuxfz645XLqVGuGVp3ZqiwASuSQcjD2TfQaenSAkRv1MNGhGV4ZWZ2HbsVBA2mmzSHLjYMtpY1wJhEtjrsYu",
  "key34": "4MBUcn2PFmDocEdt9m85MPmcKTAogV6tQyUNR3F1UucsDLy9Qzqajf3FPMh1mbr8aQkHrQskqmgq1ZC97P5zgWtE",
  "key35": "4zC4K3Ty1eY6g47Uam815nz7in5eUtjxhE9TwQkoVoGKUcVXom4bAkAzj3gKCDEtTVSWy4WCMQQPc15GXEZ8km7e",
  "key36": "2XRbnrvvVGW8gCrKytnfV9MnRC62tKw4zv7BZQEnFGFk8B6pZawgp3CBpM6grgzx1mdrGWNFPFkVA9R7Cy3ymsWB",
  "key37": "AoM4CMbWxbkFsmnTMoJYK7VhaPJFzcEs39W75dv6SkdKvM212oX2RGMsS1eE2P17S8Y5gDLqs7Mbo2o7HAKWfJz",
  "key38": "3qXrZM3MzXuEK3ZYBZcZzdrAQfSAS1ffsaBA453kSuRbaGgfPR8CuJiNZjU7ghunRyPZwbYoUuF7CpXjqEPKXMSG",
  "key39": "eVRsa5bCGWRy2yR8FYBWbFLW44e6ccCjTbYRxfmedaiD3eSw1cwcffNeB1vNeK9BuiuvphFoUso5Lf8wvMiT65C",
  "key40": "PS86CkxRZMLFV7euj4VyJLr7JAcsYMGFgGk5ztMvHKctz2cQLpHfTVStkvtUCid2P4UvnrUNH2taXpZDJ7yAE2t",
  "key41": "4eBzBru6h2KYdAtJCKspzJD8fiq5pksbrgmnLmuPFeuWZ5fPLvqK366DXpjDQDiKpPiZxdfzrkLNHWjetuEPx35v"
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
