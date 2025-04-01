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
    "2pBNFVNk15K6t94fk7QAxux5gd7MTCMB116PmqGTZQgj5fr3hxt5BUkkxqLERQBFXoDZAu3cGzLGP73bpRFQahpw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Hzt1YLuZktpmisen2onJa1vNjk9nNPbY9UFhhMzLQAYqsHLsaLnAoZ1joMVkDhiiXo35nN5i8KoBAbTnCszRdNn",
  "key1": "ubM4WmzLdvLK45wkWMkWwoUDagP1SXicPBizimUGBUpouaKQmQS7XG6655sQAXDN1e95aq1WAqmSKg5xj3kCfhP",
  "key2": "4mo6aFV9MK6SEYGm3et3SbBYwB85b72h5psgrkcLFmwEP15VbPfW7kPymJHoAuewn4N1vd1bU5Xio9Ht7nggQirt",
  "key3": "381bh4SttxALtWE637ufeo1TPJFFY2S5ehScmeHaN4TF8D8ETiyAX9ab8azrybUXeNPxcHhMCa4bC3sphqRcwKgr",
  "key4": "5zwR8HfJnZY8UkufFRfCbKpb5CtRzzyMNGqMdG9hrypkWeaaiYDFwqY3iRPnXN8VbRunkeo78UwwkFsfDeHfjGQ2",
  "key5": "3ob47DhTXAThmZLrko2Ez8AwG9YWEzWNJxNTYD7Tw6YLtp5rzMTQjDSCtotxenF8G71KEZ3yQqgVtKbSc2Gojkf7",
  "key6": "2X1FZzQ9xEBV6vCJy5WvJ5Pjuqed5THAUBMpBUDtuKecMxopZecdE3qsg9Fu8GkbPNoR2DVkzx9czfKiKFHNEW75",
  "key7": "3k1eYYgyEbZNtW7NkhKk1oa8AUeGD5iwPvu8Baa4hyqrVLRwkMXULkiFkEn6UhCWLZUrAtv9D3xzFWadTvs8x3VW",
  "key8": "46vyDi5xCV61NaGAYddxEkC7a9JMkq8oFMnQ6jaYyLFc9toCFLEa7qFgCr11T2aprFic2HRppXMJoh9aGxZzuzUD",
  "key9": "5RgQbaJwbt7mepxWu3p1LQwJKwFDZMq8VVEJGmyYZsFyocbS4uj44rJQTpYJx4Csc5zh1UUZjG9UjHc8tpvj3eBY",
  "key10": "4xN14VqXk3uRrHidFWY3sukZ9WHuEiEveRZks82aue1qQUPxndSeQK6wWjVi5hM2K17aqqmdW66By1xtvJGuT9xT",
  "key11": "2CHMYj9eAgi7vKmWz8S1dUhzu6dfSAfGsxTdyas75pRa2EkSMioQ84UesQjmthunSYjq5q2XK927DPwW5jQt1Xwj",
  "key12": "GDPBozZ25ZRamqfeoXstsxNqrUTAUaNxzw17TU4Ph1yD1KxXwRS2TmPE9fPfAzqMmv2xTQuuyBdm1RHDCbfzbaG",
  "key13": "519SwGTeXCCcug3chG7r4mtFXrZyHdmDQEsjb73ohUxZU6UypuE4NFARqGMjyW1Pi4xwb9EynooaSod52oLuy8ux",
  "key14": "5TkpzG2ebbdnAk3eLcsYK7nUDqiZ8bPh4efse9aEktqbDgDXmurWFZACDrXYhBhN4kg1GkP6gDXMU3pTKypcPhKv",
  "key15": "42b5rqm3fpjm5fjRLwPcEz9qhbFEamhksWtnvziwYTxYDKxb4wCzSi4NRr9V3q9EXvtSuTgvsU5mHyugUBEiHr69",
  "key16": "4nXjEM1hdhKkc2uuDmkehnJnRq6vYRuDNrGMwVPjszh91XQevvpDVZMTkkTzEop58S4LBwwvu3jpbgW5eeeQaeou",
  "key17": "2vjRkq2vtpmZbkUFfFKLqgq1b29AC3y2V6F1Jfudx5JctRcPZcmPVNts2DmsHNCuSv5rRYiDiHhLx8h4UDRvPG9x",
  "key18": "3Y7rDcLYwdNKSZKs5JNsMTcmybqALQy138WYSZycv6KBiihEH6VPCzuD72QZ1YETd7mYSQaFehaiX8ABzdhM8i9F",
  "key19": "2PccRnEVB6y4wR6hiMPa8VKXLTeJujX67nXupJKupt1QtWGcERvESWAVzDkGZsbTTAUWBe1a6Ddam5uVvGPaFcKb",
  "key20": "ZeQfYgQ3La2zLdWRcuSxZpHvAMFaNEzKyGWMDsxyTd44wn43DBZhavvgrC759YHGFV8YiZt81Fbdh257pzYvtz4",
  "key21": "5vBcMopUMVhP3y6KzvQdEeBQCwdFWcKyxzvwKebtvRa2NUvYx7EKquToXuchXjX9U4UZjPzUduy6XE98fxuaSbKM",
  "key22": "5Q3KjwWzZn9XuJsdCPAnfPJ4FeojACBNdyqBF1NvzY7q57AR2RABki6kyRSWsPDPrx5sSWHSBURD9Jv1XzcWh4pB",
  "key23": "3L1BPone15bqFhRykDuxnBhZ3nkiuDp6cpmA9vqRbLC5KsWZqx4zsQX81NSacDwNRmTPyuCeZngDhcFen3YdjhxY",
  "key24": "4s8K8rgJeGisfKbQT4UEYX4asPjjsCNFvJgNwoVGVJdZcaQMzkFS5Th1TXy4Hbo1ZMR1xLXuVCD2mLkyjrywdfUA",
  "key25": "3AwFcEBUfzpKMjGeahfeykmHj2n2bV5NdCBqzfyAk5eVFtKPrv6qC3AExPPJSnAXNo2qXKKsNhHYgd1AKcakXFF2",
  "key26": "5jC3HuKsbfDuQpaJRK2PKxggP9nLoaLsf4qQJVC3bDx3jSopnnyCyMmujdGtbkqiuoZkvwNbE5UCS5wNJfjRPGn4",
  "key27": "4mnPiphor6y3uusUCSwkEht8Ht3dEohM3683cpbdYMYGXXY4TLr4N1ZJTxocNB2baWT75xwVnfXgySGNDqM1LVHx",
  "key28": "38M3LCbmz6GEKYan29ShBm3yoKqHRtu1nzdCmfqppJP2K7oG1j8DkzjM36PCGjFwvLFEgy5UvEXQTtnMUYtir1vQ",
  "key29": "DM68YLK98F566a9h4swJeHXrPSnqpEJzZmJ3L1VhKVZrBXaXTViRFNtio3rVe7aqndDJkh6vRWYrRJUMcgZevPf",
  "key30": "3WdgcCs6HAX92R53Pz7NbBt6i1BchAPynC84ZjEacjtP2FqW7Z65mTtwkX3V68V2jB2LkmeBnJCmmz8Ji1Wzh56z",
  "key31": "4Hy4iXaFxM2MhA6ZFpx6vXhEBg4A3EsVeSoVJhzwmRjhbdG7KqK1M8ZxhwALPEcTDGrH2iPsKzvXFeR2fKyjEpn5",
  "key32": "5ZfVDrbATfsety4neZLfDVVcxihnmjUdUyD7VbQBHEpzCSk1Cj6GaAxRDtcFc79LQC1czqbgTeAy4rov4nRqkeqV",
  "key33": "3T5LwURcnNHWYYweR65WaTQvGeDWBxY7tkbPZQHGkBcRHXeTf99RxPtGzH63U7WvGNG19KMT6sj4bS43PjeRiPhy",
  "key34": "4Z2nWs49g1bx2kcvpAkBGNfnjC5CkvCSFxTdShGZF33RvEwdq1N6tXa4heXLztWDeQFTkbYdYaJWvTC2wZngUiHf",
  "key35": "54kNnTwd63DbVpaMrdoKwsPw569C9gqAtF7Yk6pP6ffGmoMYpdqjtb9cZuDmfmZ7REaZLeK8VBp8MhXxMsSPTnF7",
  "key36": "39USCHekXtTMjuP3aekpvqyMT8LbK6nz8njz2vS9zJWowJUi3b7jYqFTcRAQrfSjTKv9DzLmpsTbtr6XKyZNDRXn",
  "key37": "3Yc9hc9ouz8LPGP2Mt81hTy3aKaGaJHmexLT8mSFB87mpY3NrWLqGnvrq8rJzpGrB5qcG1KyTCfd46QyRjL1BRNb",
  "key38": "3qvMxCxUVEYkcyitS2SfxYd5iN5tNYH57fHXdwQ7CNCB7xFU6AWCRSK9HfKL4o6Js1VmkV16bk942oocForTiMwo",
  "key39": "5rhdyrTuwoLuskvCzAmoxfoYsxsS3k161v4Yvs9krcenSef7UEq22SSjtc4fikwmc4pgAPBdUYk5pTbfsZwH5jVN",
  "key40": "4UE81V3p9zDuiLNdSZeWamdLHTEFnRJy9ZPz4T7uv6RjMGW2otrSAhHx1mcegnY1sUDjSx8eovN9jp5yqJwzhh4a",
  "key41": "4a9DUb1aGwcGW8FkLhARjw2foAB9aNjJvmogAdnKMrw3YibLaWeAXYW3gpmSN3QL6wCNPh71WEpauqVv5ZFp2A5y",
  "key42": "4R4v9T8UKXyFuodfnCnH8GWopk9HMvt3VfQ3kSp6zSj1hUiA3UW75T67QjLhAZxnhyrg9KoGYzjgncuXvrb3yRah",
  "key43": "EUjqWbLWLVZ1hdgJwH4GgSN87SrjQqM2K11p9VnQMyZ7Qnzk8eg8pWp5frt9379U3ud1zPzCQiTXVBukmUecNFW"
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
