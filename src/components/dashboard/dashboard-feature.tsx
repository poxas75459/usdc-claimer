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
    "3Wyzzi3d3YbUuSRiWkZq7vR9PPACbxgmKPsKYuC5TrKkgwvQGrnAqzS8WEfdBZzp8TBgKz6zMFddvArnUKffU5cU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "341HUKnY65T44r6SjghXeBbw2WfH2GXkXodrkAL2TpnMyLr6y8Npn6mpaMFGNp63zhtPd8ekGHM95FvCD5M7eRrv",
  "key1": "qxLcuCLmQnxPj9hA7GGPuWBL4P3C9JKZ61yCGsAHQQ5qeAob3ChGjYv7PsmM61cpygE7XWKoQkDWR9gbbWYFTxH",
  "key2": "5KHWDPkyoyDjdv3zdYLkYSX8cUQrdrzJ9GdymSGNkrn941cByoZn92XmxszPsZnBbEPFo5LfyxQPU1jPQkvqfSxf",
  "key3": "5T5hnPL9go42sQmr25LUDSWTsmv7nGkWxG1PhZeSfbQjcx1nep6d7bpghmbJ5VZLD6UBjvmKzbp4j7jU1S9uyQBF",
  "key4": "5UbR3X6zaBsP6YGSMa6aDLvbz1NNuzEJm9Toa79VQWGdVKdLpPP9ngrz7Tf7GPhysE2YaZgDoJUViWeSSqnFJrgJ",
  "key5": "5qzLA6ofpW94bS5yH54CG3WD62AVQyjdGBHiQZUggwfttg61FfewF7UZ7uyWQoFwcoAbXSasu8EWdv5P8E6ibSHe",
  "key6": "3qy1Aqy4qnBKrSwoTMgAy4BEsXBHTW7zzpnp9yBNWW2NAVS3XPefqs7YVHsRVYftg7JyVkDm1nhyf8cbyb3sELVd",
  "key7": "55pcwb9KoLbvKpmi1eUCRHPett321dVksNhptjgmhwXArF3SH34zVDA4YTNnyKphxNRyFeXzexih3Qmj5RayEVWL",
  "key8": "5d5QjK2AFbz3RhbeTN4h71UAuz7gLuX6dsfcnsAetZ1gxfSoCUz9KFCqGxxQ53ddzzxCaNXDxW96UsPEcQmYbN9s",
  "key9": "3FmVvj5GPTfESRJMoMvKgqhnKSZz5AYHTkCVVSWhFKSqenRWiEyTYsSihTr4gHK5jGdbkpDwuQ8Xr7WFmsZd8rDM",
  "key10": "2xeNPDQjtQ1dyyT3kPzsN4ZpVXWsMWSXuHWcattMmc8kyki7JsEuXLcadw6qeYZ1yt3VirMHBd9QLZG49CDX6Lho",
  "key11": "5QK3pQjiCFugoQQpCUNs571Ls8YpgaUa92kvKwW3878xEm6Gfxs22jtMWWXGx1YwZ4TcbS1j9P9DL8yg1t6KRXdp",
  "key12": "4abg8HLxitMes4KHZmvoMGHT85vV3vZpoGaEz57f1cwwD46jLTtZWpm6mPc5k7bf55tMMgRXN3NTLXxDoiWVp9KT",
  "key13": "47LDUE5m9XCZ8pVE9HaDtGqcyXPTrfD4oPAiYbxWpchgscnpUEcZj57imhBFw6LevXsa6fewv65Fo8oz16476xEX",
  "key14": "2C5KLhwYmvdZXHEynsviT3KKVcy1pmWduNJtAUQ4CuZnfyVodGQXRe14rAzCC9Ua83txCLgfBNcBxHJsSDhspyqq",
  "key15": "3EtacAy17MiH62b1nmBdqqn3rpz2vnCfvamkU4agT5KJfxzHQNVoUnHYMoLjtcGwaSsXXtAJExLKRpiTprbozbCM",
  "key16": "5wnpMuk1cSjQCzZSxedhNNGtvy223H4ZjTbKSFQyqHeDYAkmAR1VLZcN2wF4k6rUwxLQx6gGnoT7knDuE9Vkor9y",
  "key17": "2kuYHQFYyt5NkvZeaM92EKmHgLbBQE6A66h1LeC1sjJGM6BsHkXjkYXJufTYABWNSBHGvinVGmHBRabbnTCip3bo",
  "key18": "5eZCCKtF8CJnb5VRL5Pw2HiamZrJgFc7rCJVvycYPgsieq2m3zBuCSAMnmiuV9zoEzJsP7rT2VmzmF8mcvHfTHhf",
  "key19": "vpaqeJ56g5STTKh7JgBAGRcg1v4YChpSrPeC8P8V2J5F56tfssQ3mNbEJgp6J3eHVBkRSi3hDEhNvJ8EspaS9SN",
  "key20": "gTwM7bYftopDAHVhhgXXdfEDBGHAMoj15jPP761pC7Jn1FeEK9hfs9Cm9ngk4JtadnzsbeExXdsjnxytPcfmQAx",
  "key21": "2WfABr8WoY6iqhViiLpSzWE2gajdLVTciqEn4W35Sh2dmvEMfsvasYobVMLxQmroAb59hrzQoePom6adzAWynDxv",
  "key22": "2wouVuDbGGJxg1dvMWUogU6PPpG5uiGhMQfMfsmKRcqHtG11bEeGVhMF6MfrD8NSc247BbyMXtKAR2Jb9hNJeFcM",
  "key23": "4vqwKenRHe4nU3UN9NL85eqiNDpSjjA4Jj9B6cxoaGGu98jrQkUeyatYAe4QuJJS77J5KowCeqrXa92aPDfmSTNC",
  "key24": "9Z8cVsZ3ZeNvQYUo46s2egA12aXn7QaJXFPxdo1dfcoYvXqo6iCwJ5jtQmQ6gt9ruPcANy2xpSTa4wgWnYWyVEe",
  "key25": "2YL8ZS26juroh78HPHRv7VcQXfdEqvgckCDuxWpzFRhtn4GR4ZcsFHEWjN1JjmDWb7tyKwc4RZbWk4hR1vX6hLdx",
  "key26": "4q9Hig9eYUy9a9kn6MQUJoTMrhtBNRCgnaYYVhs2gf1Y7uWM3XVX46NdzfS4eNYdR64jY7KwyYweYfahbksSXf6K",
  "key27": "5wMkTofFg9JUAfQYmWC1mVUasn3zSiATGBnQiigNT4SNMXhKGQZTxdeSP1x33kdVDknTahLuWiAhiJs92h99BWz1",
  "key28": "59XwRn78Dp8usC2zY4y6nNVoohiL46Lhe9RqN8BisoRoRmAsMjPD4sLuys3qkRAdrcTRtbNxNgFPEGK4ydFp21uY",
  "key29": "59QeDSkeFvQtXXsWSSUQFj5EZCDKYkxbFR4pb3oG7XGW6Dc2XVfXTgXa5T3pSWdygaWt58QHjdvg8xLCboih7J1t",
  "key30": "jTt2VQPkgei4EDtXRcxwDqZA1ZRNFwF5PKg3NSZH6zNsqpCXXMUWsi4i7tXmLbQMjV5wu5YPmQqdXA4XVwwvJbp",
  "key31": "DPAVeazRizugGjURJCSBMwMo6kydz5t2rARKGb4a9N8dVNhQzC5ucYxpLZas2pA4kjJsryg2z2Jt1fn7frrMbza",
  "key32": "DS1uez949P22zPKWzCvNNGY1sTeZx4PEmBeQPLG7aoPvT52hhwZPhfCY7TiDY9WsSqpT3gtYp7VGAHjqJnSHAAh",
  "key33": "5iQ1BreuEcyTASyLcs1Hngsm988Z8JYC58MiVCJrmnRK7PRue1Mgcqk11Rhy3kqXoeBX4WKEqN3hDhJwK9UByTFj",
  "key34": "46fNCLE8LCmPseQdmEKb82tcUFDGe4vKzQUu8MsaE5mi1kLcuaN3ynn5zEge7QJxYgqVgGNk7eJfdbHR9ML75g3H",
  "key35": "32HwXfVAEiH4XBHSzrwwPj7MRK1YZ88hHtmNUHybAkHKBp8Li3UGW6ryuvF2hPGhEv3iKMJ1aJU8ftZYLRxp873Q",
  "key36": "RwthafLHde3cSkA1AzTvwwYkyHQdJbTCVQr9BDAt1gFnZCVege9jS7BT1RvVp1JL6XBn8yj2WAWzL82semZfJBi",
  "key37": "4XvqdGEAxo8rhLQn4iA8LDzthwxD4saHnn9QNhBzLUNaXDJ2bKyQLN9uBoatPqgCFCEaywbyyiCnv5RRybYGFZXA",
  "key38": "4aUygGXu9iNf7ayRzABEPJm6EPYPo9gZKHDAAfuahqmAB1f6wihyky3hb1c5KEx48xWPqUX2RDNirD5hdUvSsjua",
  "key39": "5mw4zCgaV6jP5QdbuEQssiuWgb8WJkrpHqFtP2AcxMarrJn1hdG4YFqK9gxqu11bMwXzDK8qBDrc6KsMXM6AeeuB",
  "key40": "39trigicp55PdqwdJRsFsrAEowc4uWUhDWomJWXMqvyARYZUjHWnaC2nHabP43ALZEsJrW27uNAi5QzbABKxgLQN",
  "key41": "4pFpeDoCoKGQVJAL1A9srrPt5tde942egj3BFGdsSs71f4GjgNP5AWwErNSRXkvWvYubT1feBaK5S2r39mo8xedi"
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
