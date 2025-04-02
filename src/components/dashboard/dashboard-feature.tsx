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
    "4Ykh4cWSnqAzrjjpGxes55KM1q4XEXq7PiFz9ZWSmAxoNNpJiSFTcPiH9w3AxKjqV2NwAKGHuhCyJYfmjDW7E8ER"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CR6FaUMHHxYJwpLNaUdCgoSntZzRb9Z8awBqR7XupsRatwu8Vr1aXShNmcHZPmP3AjyerN5UxpV9YvGuih1Kmhx",
  "key1": "4q1yhnpNwZJJK51hn1piznamZ7L2KG9ksDoCvBuv1wDMZQVGxebM5u9PC6YTqLRojFk8i6ctDQhcmTTATYNsVYw3",
  "key2": "2nZQZDfviHjGrWzWkgsyK4YCgY9wtswgAhpDnW8y5NT9xHxE6i6T8Xnzf83cixqpxNJoBtADmNKzDvw3R3okSFWT",
  "key3": "5zoua2cRc3A1bTcGJ7fprDcUf4ke4x5egzFgRe41ZnKQ7wLFMrpLes1FobthmaF22S31WWZwNmJjFuok2ZzBSgh1",
  "key4": "4hkDwX8SXDnNs7NxrCrZ2UfDAi7aDjc4jm1PmtrXM61FFWXgcnDQGMTn31pc5qsLRepEBZCgFzMo7PoFmu8vtraQ",
  "key5": "4MiDD2UM8pkVuy4Kd3mznx9G9cZSJcbN48NCbeZpXpsXt2zwdtsbNLCzj2C7KTfQh4ratXTsZqc9gdwVMyNG8LUa",
  "key6": "2ZHvZVreAUBW2MxYsobyFdaNJtokd4fqhD5QXbitykn2gRLFV41TPBNcutF5dTLBvkk1rQhrESV8ZjHEMRKTEDBz",
  "key7": "kNGjWQ4oF4etDGHCrQQzcKx9YkT22cuTAxT66VDoWWX7SnjzxoGdNCfekky3kWEP5h3xa3w8Nrok2NqDBSEy6pS",
  "key8": "3AsZRSC4NjjJ36hFpYM4kHjcgdcivEQcfhM2WaiSaVyoezC2K2c9wRgs4dpFaBQMfbTx3PhnCYRCKgvjvHCZhvff",
  "key9": "4w7pBLgHFx7HC1wdYvCMhCE8f1Mo87iE7PLu69dcD8iA4aT5LNNLBDUHVgAkVGtWmWKug71YERrL7Kt4z4U2ZRw6",
  "key10": "2jgTWLJuc8T7JKSch5gq5fVJ5JsBKMcfH7T6y6g4WtKnpstmuRkArtname2ST2RPWPngnQqmgBURacoJushVD3kg",
  "key11": "49vrsvgRoxmCJW2Frsixx1yAbURiWEK8w8oVUwY7B6sCbQYHdQTzeVixPnKYV3FDfmXVks5WtREcGMkE3u9vnRKs",
  "key12": "52Fz1D9vWvnCCF7YMW9k7vrcpQMb6iwrn2vyYXs58SRqP6wbyweozUQcvBZc9vgN63whrXNkqYN43aFxCVqys9sY",
  "key13": "24xxDHrMNeuN5MXzVNUTSTaJzLd2yYnLDntExQpGJGLAmim9f9XHzjf4aY8qtENo9A8pf1AHLCnWdxZ1wiA8DRdU",
  "key14": "3nYj5MLC7o8NveKeeP4djjRtpWstkVw8xjxqHnZyscg5pgsX4w3kSDD6s4KKBTHGb6UUd3pG1zf4gQvtYJZK6Rc2",
  "key15": "2M4fUVnEkxze4PV2oHuBSjMsfoTGKkeCcGuobPQpCdMrHtYci9zW3yKzPuAnD15F8SPPWKXJxbHUf6vEvdqaSZqh",
  "key16": "422WYH6StTmGC6uBEdQ9siijiGSH1ijQv63uF4wa6gyTiBNRvx5JadWU2dYaSVd6GuKUUu7A6ZpK9xNxAMtmyvpH",
  "key17": "5FW4EMXZFfd5rMDn6UZJ1CY87KKx2VHEfhAygRNDrNr24wwt5QCjGvjzcUj8zzSSDE3MfVxZnaZHnLiRWYnwVXu9",
  "key18": "3SJ1KvpGrmrj5v3bcPCBk3hd4bm1Q9N6g97yXxy7gip2EvdZCzN8277w3Por4UDEHewZbkGMGpBVksvUKdP3C22Y",
  "key19": "28qRzs2ii2wtQ1QbaahvxrcFgNRSeatzygaBkQWwkUfE2qSRxbabZ8wusiv18JD5Pwmj9sCXaYaRTaoibUvCt8Wa",
  "key20": "5kSTQrEbPzp3E6yZEK4somukJRBtuLHqCQxqSwC5EQfqhxzKk3MTMciimxwMaXJjH7wwbTus9ZxpX23MynsMKKaH",
  "key21": "5q6KvkABqoqVchFDztq7jagMcwFdkKoYPoX2aApHHgJnhSfMTaxbRoTYaw5z9HwCSGjecwQ6YwDhMyzY7LuzGAxP",
  "key22": "4B6njLpEfNCKjcWn1NMAuK3wqquxhVgem3z1iPzZpZUUNUvyxKcXtHhZs1XqpJFj5xYW5LwNn54vKmrV1L3fFj2v",
  "key23": "ZFMNiDkUcBLZ4TJDz3k5PuzY6sXdNBGot5AbZvCJmW5RDJRCJ1NZJdgeLDfRRpgcQpjRafLpr6qts1LbrsievmQ",
  "key24": "4efatSoJrhtdecLSDzLLU3wYG6nqnTdoKAs4VMVbAB622neNQNS3kSniqBZRG8Bt8vk6XVHYKbx3qhFuQDMF4MPD",
  "key25": "4erXLs555UDKPvUR6gHzEzxkaTbeK9t5fuhBiFkaFp7ruyv72ttBc4s8HNPApTD1txqDGTLQHY9noNPtpqR4kBtN",
  "key26": "2VCG1QQmzijfwc543dvErguBCv9dBf8zDRDywoR3XEGM3soU3rzwaTCdoNfXi9uhEM53RVLik6eVNdhuPuUQk11R",
  "key27": "N3yyE3KYFvez6grfWpn1k5McH22PATeysoXtBXcViQgfbm2cHiVdxTDQV36ERjb4cK1DkgwsKp3428uzbGAMTEg",
  "key28": "2QqKkbkCbmMEVva9iz4fryqmWuDXap57VT141ExGtxCxLk3yJmfu6XWV1o7WDeVqi6Ncc3FqTXtznH3PNfsq5VeC",
  "key29": "31cj7ga1rsng77qNe1gMNAcRootetFrezinjkJaZ4L2j9T34HkGoW6R2XQrMRUwYdrQGCwJLBPbzFkpmufov9ig9",
  "key30": "64hnPyW1G1xKiPkwvzckjuLHEKzddoCZWsyiW83NALbvUTkrWZu9MiG4god1fJ4L3g5puQ9e55WiuyWxij5L5j7i",
  "key31": "5sBarJo2izs4RRY9aHthuGqJmp1tcxo9X6ELZwBBtZiEKnQTh1gJZaUfNmimw7cjqHjNsNfAgYsarcFJPhZ7e8oU",
  "key32": "3B7K3ALkTDZHpbvj3HLSTTZnTQvTtEGryd66MA9DdyyDZEbSpt1YWA5EdAJEsfa16enZNr5tJAXdm6uaqwKe4JQt",
  "key33": "3omjCVAm4CKwqZXsLJzeHFrzqxFXupVmKdWZVB2wPAbLKfPRvAuJcjyuMioJha9D2xBvCQWb9dxNuZL1vEvNGNnK",
  "key34": "xnDkkoH89oWf4hKuD1M2VTUXmmyn1Udj34WSTV64TJpMSbxoqeFb2fCjGyYi43yXtkJWAXeELCyEYuQYuMe3Fw1",
  "key35": "53NCdozHkrQiCAQ8jM9QAFuGEXtvgMjwTFUTnBUeB6sdMCT9qVVRqwS6vRSvNQisevZqKNzREjnBBXPaVmCM8G8b",
  "key36": "2ujeoyW74hDQc4YCEJk2rwCLLz2mEELPvDaTC71LfLbEQuYqZaMQ5TdzugHqHsLQNvo5FTe34HLZARh7GuV3j8my",
  "key37": "5ekFGsWsfqiZLnYNJWRRPJp8LQtX824gbHoX8SNmMhauxSMvssryKnReah3TKQgkAykbPAcs24NLytiyavJNsq1X",
  "key38": "5MTHYYExrQBjacBwffYyRtBRbhKSSLNfQWD551LicbLTp4E7STQagxHauhL1TuZh6nBgbssN4aGEHKELTZ2jiasr",
  "key39": "556eistZq8RbGGRNMEBfXibiyceZcJyx3UugeMc5UXBMu8dDWQrVFiK1G7djPQwEwLgLmNei9b6e4bL5LJyrxhUX",
  "key40": "AhKG3pBJahqiUyrLoWtWdVzZNi3cwJE3Jftw1MWoEN9DmEPJweVmL9HVHnL2XSaT5JE2JVaALJ7QuQT3nU5rqeC",
  "key41": "386E9nFPZoXCu8Dx9RY4NUPuq654TXJC73JvTL7yXL3LFryTUorAGR4miVCQQ22LdzBL3Ht4S6s4nBSgUb873Are"
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
