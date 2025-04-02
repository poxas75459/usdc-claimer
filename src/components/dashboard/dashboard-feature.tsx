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
    "3VCHNVuvstwivWpTxDR47mknpjhYDjwWSxCgEsDCeNBBn1M5vCv5ugL9S4Pv7M5tukbTaTyoSP3ydyt5ZAioJbSg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x8ca64vv3MifVdtDWXH8NFLLk7gHL7QeLgt3SjRKt92Dboj6ruTsZ14UgB4MjanXodv4qXKzptdSWQr5nrPxo6P",
  "key1": "3ZutcjW54raqV6wdbrTT1RkVw6F7f8Jmum2xQowfPAamvLTDDwGx3DWDs3RwwDCo2bUFJD4GsPrVtaDGyzozjfT5",
  "key2": "2KKusrKzLy3xmKZTSZ3EiLaRuBC8doegighmBRwQaeAW5soa1cwCXutoy6pEK9whb48vNdcPZGnN3X6CkLGGcddd",
  "key3": "3DKDE9vuUQYnYhJgp5wJKaEoTiDaNbA4fo6FrbWPmzLF14QMX6eCEUK7Rj5KyGEm3uYR6k2Uhf15yyMBZ8FFhLtn",
  "key4": "4HyX9mWUzth6SNCS2fES2rbdsZ3KaFCsFZxZ6oMtjhE9ZiZMTji8djSb4MNvT3y38tNerZb3aF1WFwDMMNqvQqW6",
  "key5": "39meYL8Z8juuMn1cV8EsEyB4zffbRJ7onGGbe5wQrmT6MvYV4LUPEg5NZ7mNwnzUnzzZHSTb33w4pdErtTNGW96k",
  "key6": "5bLnYMVZuwpii5fyCrr41bhH5e1CJg4j46gUPPDWk8oLV8t9gyTFM1vRpXJxhYAT8d4Pb6xKFUrmu7tZqUWPstr7",
  "key7": "6SRAf41QSwcjqhnaZRqXVsDSvu11ZFUEDJT65ccvSpH9qUncS5dP2GZHrAPi2XXv7fTterfuMaq5VLtay2BiJAW",
  "key8": "31dtFicQ7xBuw4xD3UnnY1zh46dw8Vo4kRT7756f47xXECJvtgyTji7ZUDLNRAXUXwAsEamEWpDEtPotfLDTki3y",
  "key9": "3b3qA2SGoXZHCFxdjQfPWq8FCcoWRxND5bEXs2vZrNFQxUVctu26wcUZTY71rVMVUBpWxuZTtEpr1meRkxM2nMZL",
  "key10": "5GWiWCgwpF1ZioSbC4GExmTeDjuT1hzK3utkEVt4G91k4BKGFDgjj53xp68zPHKznx6TBppiBee92BrEhia7LQeH",
  "key11": "67VA6C1himLko4mgiPp4TnWYtp9uJkHzw17CS4iTCfsDdn7XJCM4xjFoWDSdHzRS6ofKZGna3yBSTA5fWyKD8E1K",
  "key12": "z7n66wZAomRaSdB5sKr8ozFN25svUfymcMaVZstSJT9s5abe3DojqjHs3iYQe4wijFx5V5wk8CMvJPvaF3i85Ks",
  "key13": "59utu8MUXL7RRcrPSNY6HpNpwqM9uPuvNBY9LFruhCcey1Q7J8QHYzYuG2WZfkvyt1HXERyFXiuUkySDymPzXDp5",
  "key14": "zq9nCEwoUcXh3hjijNYdjPMfiqWLYkxrTozDypSwrMidLkfG9y95AsEvYDETkivtW4aHeXSU6LUVk3WvUTFJsLU",
  "key15": "4ZsE6rQa7qD5AeUWCnanqnxv9BdMXt86HiE5jm242WAixuiHaFeujUZvP48NMKTWx1qugg6mSBtZBx1BokgEmHZW",
  "key16": "2pJPSPxJ998dRmpXDTpe9GHb5iquYDnYr6sC5Ai9JEMfpivRLYeFpedmEbwTgBeqrERuwQxYvooCwrqMHL3AKarC",
  "key17": "4zp2mRg6HWR1GStT15gbr9oiNE11hNbTj7ZdBqXwypXBNwzJxSFeWnYnYcMcDjsTfsVH3HnqbThmVNeNfgQtKDD7",
  "key18": "3EQ1KgiF2J8BMkGZzcsbDLmUw7N7E1P64vE9BXXQK1ZqxYaPctP5rC8nbdHLUcUbvEosaLACiTZbGmmnrqY6gTqr",
  "key19": "3EgEEf9QddbrVQnvRLm9CzD9mExzSd82y4nSZF8DpnVvLzkPSn5d1WZbabGt2fnTmJZhV3dzXbrmpwVHhx3ALynD",
  "key20": "4Y24w2aeWgJToP4Z8LgQjg2tVRo58rkALmgvsM5E8hgmAqJKnfmMwoghAXLZVZSANBRBcpLgZxdDWuAryQV8xtdA",
  "key21": "5Wkyy92W2p296q9UtVSdc1wrEczw5JfBxPAKN61MCrhXedRyXQMauFFG2EGg4PQwPzJG28hfXiypcN3WgWawwryz",
  "key22": "3tcCz9Qtyq4dSvW7ypFbckyS9tGNYtb4jvHX5bCHugKq8eErbEdm7H9Cv2SEBG1qQ4Gwx4sicbhbJJJ9ZxUgvDN",
  "key23": "57y71s3iW3YJg6AqevX5EQNzvdJzecETipGmbhPQeWyEGBW5KXdSqWpJMLD3aYc82tkoZo9sV3zMXvDYy7UBrmuM",
  "key24": "3WgvXBKw9Eu8Rt1vP6pNo3UCmnmcKDRMCxs1G2rDGRhzKqS9WfdoXEbZj8WY4xrxuoWXGUEWESz8NXdWmwAWhz2F",
  "key25": "4omNx1hkSiZUyYoi38z5GQcmC13sF9RRpeSRwVHCjx9kDkpJzjY2Kj6i8BC9Qp7ur1rRok6BBkbqVAtda2mY5iRH",
  "key26": "23nkhMW7VQvVF4L7w5TMKF5VA7iFq67fgkPhYqGY5DhCw3qevdvp3HPfQfg2hLDapsjXG9pE841YxXNV3Z7uxnRt",
  "key27": "5Qfc8Z3yqnW5gcjSGnQPNoZhPgFZPpmPrw8oL4o4u1vZpUhCDtdhCvEp9jgBAFMb1sGXPr7cUnWMifpghywZYkQH",
  "key28": "2p7zWwqartpRGZEgSRZPnmLg4Znd5iQPi7q2XHooRDXf2R63AbrrB2wC6oSrNVfLWEktvuKLSu6yJFd3Fcw8feCm",
  "key29": "4zwwUKFRFSzr2oDxZYVfEySAwCSxcMEaTzccWMkCavVYaPnQ3ZeX4uu7sCmE6bmzVapWeJM6kyQPTJphPpLeKAd9",
  "key30": "4TEJdtckNYRVp21WQrXVVVn1ieAMAPZaSAmK9xA8gQNRxeEqRWgSvFgGmiSq5x8qi2sCzCWbRHRtPpn2FuVomaGs",
  "key31": "36pVuPF28Dofon4ffAdDsUGCW3U9UPEyRmf2bw5V4fVHDTrUXmM3BBVhqmncSsWJmT3ebxAqbCJCtsxaN1oS7cuB",
  "key32": "FCaVNL8q91qPT4X24wi8TAuLSgc6Rk1eCgxURqK2spKFXb2Ww98mm842uem6SAR8YbFprSWXpgXkzBusfSJZsYF",
  "key33": "2HHHmSQPRX5Pzkh2Jq8yWCch7GUNYN87pfR3vngFKpzFLHEephFyaKyYvpCo7zZ96nLq9SJUXWPaFYME9CRj56vy",
  "key34": "gbG7h5ZN3jRMmTef5ns7qjMdp4EcxX5rc3guQLjkVWk5FzkvFuARbK69TDKxAj2W82hLPXGfhkETiKTSVqRC9De",
  "key35": "3UtFZoCM5PRc6RdcWfjEx3f4h6eYhoSYz5SLBhhCCP8T67L9XKv6xvuPLoTTWLEBGCZ2gnKGuwpgvvmchwt2fHwE",
  "key36": "4NRqaT4niufqfCSm1YFtBbxCo4awi46DjBKbJZCRgUdPtUkx3BZ5bWcpNuyxEFGtYwaTi3ij5xHxvZWv3CJCFhCZ",
  "key37": "QWSrP2JyYqnKZzpJSg9aFQkNJMT88Xi73vnHVX7qkdDtAZpEqCJ5diBxipyTKWGH2xo46m8DArcHxtH367Gbf3H",
  "key38": "5DEMgB81AQ87Cxj31Lkc9CY2qpzQ6XtZ4DPKsgedHbLhpwkS3b1zniodjRWAPnGnV48qL7PKb5VBzKfcDVzJD15T",
  "key39": "4Aa359QdLCRLqTpVfQYUypkXYQ8yXyEnZNEeyY3JnsVSKLAmatu7GnZ9Rj1LNUK2zNQACLf5YoDzCUdGo9E2qroj",
  "key40": "HJzQZeYRP1Lyr3Q2eMp9TYcbcQKqREXoVm1jWgFtq9XdGSwgz4Fmz2AZ2uiSyxiB6ohWmswzwpw6asq9yFUVKFs",
  "key41": "4LrhhRPBsYV6TCSH8iUrqct3aqvoR6yixQhX1rmnf4NmGgBfKunHXg8tNjxxbHA4DRY3sKAK1EHQqSA7eL28tsV3",
  "key42": "2mZrZ3gaH6ygjrqWSEPTUtxAANQ28MydmtYwxnCsByqMSw9zMXJP73niF1oWBwEGwecpfG9DWKqoSUBpY4SEc9xZ",
  "key43": "5DgBHTTKx9jzDtCGNSfaNnAskN1uriMaNMUqcmAbLyCZDmMi7HygwEyePxKbib6WEq5KsxMNFZ7JTUTY54oYFPKB",
  "key44": "5Nd5Qm1vFt9VDSW2UkDTAyWojTaVS11PB6fQmZBsG8X3evN2Bat4afDJ3ReFzcn7yPpKzShR2CQktumThdb6rLLS",
  "key45": "5Zd4zyt8b2fvyZBvy3gTUmj3qWskyTBupDjmVaZW9q6vtQ12WsFUyRLbskMV67dseuwyYu2ELfV6HqE5cpiCn2iC",
  "key46": "5rqhZdPgapq8yBQg9mEtX7LNhRmWuETx1C4GcJiLFm7iTFzqhrjLUFeJ24QQ63gYv4r7qg7wPKE9LQm3ShDMxrMP"
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
