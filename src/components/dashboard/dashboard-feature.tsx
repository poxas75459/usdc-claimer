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
    "37pCpWiQzdTH8BsWSAm85cqseDBFszpqAqzoSJyyskZ8PYkPHy7suZ7JA98sxmPKM4G4NGxm2sLr47mbuKBFQWVU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F5f3Vbh1hBR8LGVbseLjfP6FNWwdQPQPTYxWvLPMk9mB4LWY3s69MiRToLmWS8Rs1ryunRKcaS7gSKfqt8hts3N",
  "key1": "5KfbHWUEZQkMhRdXywTdr7nKpeiPQ6avs9MwgTPzi5m4B9YPsUF5ohW3pgdaMkgbdApL4kBEnNQBUA7oXW7JGpMz",
  "key2": "4NL2eejeaw8qFKC444crvz2SBHqY4BUWpg15dht2d7soZc4LsPuifjjUSVthiTrm7jXzPFRxc7uwd884wuqy85bD",
  "key3": "3EmotqGppdka1TjNJ9K6kTJgXnLXxMxHqK1VoZfRZVafzYZ5mTRt2bLHKXnmhwUSdWPfqrGqFyXuiShaq2iw6afK",
  "key4": "2hpvH83qA1ALhzQscCT7eRcz3pCbJYEmFdnK7xxUyAHvAKxiVY6vHEedE9ycdouBCD5W7Tz6j36dvnCetiZiv9R6",
  "key5": "3v9LhbTo6ZT6pSseHSKYMgwkUhujRv4zaXHgXg3hW5K4nsDFiLPXcQHdbVkm1uRuBYhfwaqHteQxcxr9TdgpT7vf",
  "key6": "2s2dTJJLDRx7Ga4sZtgjEXgZJ87euepHtcJqSBbCtY8XRV9ZV53X7FuBW4BsUCseaM2Q6ft8iknrJzuLBtF4ZVYf",
  "key7": "3g1JuyxjpyDNXZpWeoeUKXYBfavuGN6BUWYHENje2pcodV3bfoYzSHsPuP2CCEaNuNz5GDcJ9czrLEZp7mBR2urk",
  "key8": "XtUrsrsEYJbmLVXwCdJECohFvAkcYhAqjCCRMx17EA9J2WLf182c45NNdxeSrgtHi82H3pnhMygxNmuiSXQhLpz",
  "key9": "4Zf2YJ5VN9aA7V2kpVcSHuCigfUn3yJuti5Ux489kjms2EbUt4fBPyyF9WvCCMDXH1oaqsXMmZ4qhcRXRH1jcunx",
  "key10": "32rKbUMXdPNtddqgEZe7UUgv7oadi39zDwbmuxuebqfFAjWnsiV24xfP2g6g7Ciih3AUk3CETZcDVKbNt2QL5RGj",
  "key11": "42Wshjpd6WqMj4Ct7k7gerahWCidwHoHY6QdJf8M5jNp6hupNUj13uMz6hcHeJh3SsDhb5sJW3N6hR1pevwDv3nV",
  "key12": "3GLSvfhqePjoSKgkQV7YgssxKsaaPyBTtWRNByBQuB4qmRTWouHhpt6YB5vvBBz74comfzuFhTnXAGiUbR2XPJwo",
  "key13": "vuxtDvM6dn8JPHua51tui8NJme7GcycTZ93w16qPG6VT9ehWc2bLgZMVPzjvh7pPcJXjxqW7jdjntZ3Ctctzjou",
  "key14": "4iryuF713CcVixE3cG9KfcXGH8u7HSaVq4i5CNtYFBYzEPjn9vXq5FhAPhJ8Z3D98QqAzGWSPgkCBj82kAwrT2Kj",
  "key15": "z4njYogDMPqdKK1r8qoAnog1Z2vMm1cUuXhUJ9rqoFkBvXVLKYMVvPGTcLgvTdPGwKaynyyMn4m4pGfUFZJb6hW",
  "key16": "2PrYsXvZ637gHMJjPLXjy8NQccpD9o61ZPpDBhEDZ8vwAWS5SKVpuWs686WXAa92eXEtFGJCpWXYXdb23zfQ8wps",
  "key17": "5Lj6BLtanfpzJ9H6VfkapytwQSyuPDvrhRuueucdPSVFrnqi3cpi1Tr5e4eVpyTsv6gzh6RxwzTXTU58chRUvqzv",
  "key18": "5c5rX5FhqvbbYqUkkrJUrANP5ZfiYnyR4ARJbTocHWpUjMBKct2TQx7cy9R4abQPKa1cVe3yuFHbvgec39xB9i7h",
  "key19": "4swnypjP1kmErvBz63jkyvCfQj1J2L81SLzp6eLtsbzw5CFDCpCB5HyxaDZnmjNuTUmKrdn5u3sA5xkyD1yv2MXz",
  "key20": "5gF35vH6urkRdhtMDaTkq8BBHbY1n5eDuWeomHBWrbdKAJLgA6LdDVgwipbr6Upp97WZAiKVmjBx9y73dyGFfw9N",
  "key21": "3LpXvJNiw5xpq6QKYTxodraYGYBgbsJffAcp5QHGsTGd5VdCGaKRzUHyv4MuPrzd7DSuCXrgkBGfu6o7RxJMfZT3",
  "key22": "4Zxdfk9V9md48uC3yoY7ELKdtQwq5q8L7MJY93G7Vbd82ZZjMahoC1jndPr4A33dL6PbCS5LSW7VGEihTeUosTXV",
  "key23": "SnMvbNceLcUK36zSwfjCZ5LC6DU5pNeBFdQvAyjvwgUU92cXdkMj3QvqDdKCd7ZXQcXzGjqgo9pijKktG58Nj9y",
  "key24": "4G39tr1S39sfKKtQVjNCaHxNfuDdPcjjy8kYXQ2ydmayEqynCBY5MjBUN9udf5ymfLmwQbctYJxTosW5EjrDGajF",
  "key25": "2grbE1KYHmaATvedVfziGGvATeV3HeDPzrV4Q2gcnRBm5YhnQBVTpHTVPvx5duxZ3xt7pdkr3JFbemr6urofFkf3",
  "key26": "eedV3uMLiBMSty5vwRJAZE3nogKLU5jmrdce9CFX8Ci5NexPHoQp6qVUEjw67cGTZYCEXsuiUkzWN4NNAFpVu5f",
  "key27": "5oZBKav9JQ2HaB9TbNes2nXjwEtz7hrsXHnBkVQxQemgj4Gb9F2vtA3VTyKrmmiK8viCBjHstQpwJDdRLT3vghv9",
  "key28": "5eet38A6SSuHpETPDDd9LBS4p63mcKkyz1438zVurUwUFJWPs5PkexVci6CRkQwrVAKaceTqCiXfjPgkWCeWo2Ky",
  "key29": "587iHEEGnZhEwHZEFYTzx9pQGNfqe5UvzSrmwkAA96iBaeb11ojmQq9ucYzEW7z5ZJNQ3si4SXVD1jv9bWrzeGJB",
  "key30": "n5pMdsYti8r6nZNfKECgtiVM11qe6pZUDX5H1rukoqkPE1zuGvdVXFE8vP1aYGKs3Lv6ox57bg6JfaiAxszxwQU",
  "key31": "HMxRvfs6ggzARx7zhoNXXPrXQToQSy3djtsnj5rKa4gaJ5wZBNYMtceQgwVyDFwHX1QtTKZx48ix4MxBfvQRkh7",
  "key32": "53Y1x8PQaqABrTBko5d8nuAahPQB9eSLhuZtwwfr7qSFp3aHJyB78BHpSB86H7FRj62oyCELiqWibuzqsBmgZvF3",
  "key33": "5rKsBQYZFL8j1PJcgVtbEnkyybkUcmi6gXW98EmoVoTa85nPdSoJpUmMpFfsFc9T3rAwZoLhmRRsgsE3Wg5nA9kN",
  "key34": "5UDHNZTdViwFvy63eZfP73bHcv92MpBpVr2ijkp6cWvDdpREwEnq6C1taRwSxhrSxfkCx9Dn4mtBNkWcffUrophM",
  "key35": "5ikxNeHCLtvQSRq8eARePGigE2G3hCoaM7ifxUMTUUV2LYi3PvFDMeFU3XxGmLKALd5LtC8PvHDUKeVdmsiwhDV2",
  "key36": "5g7Zg1ZScoxdwEavzKDeqvGxEmkq4jUCirZi7wxQpHtu99PzG5AuBNWz9J4kqXn1oa238pEVb95aFbFWJYjXh8Pk"
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
