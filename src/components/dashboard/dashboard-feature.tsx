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
    "2yXYwFDeXpQgST2d1QWGGxbTCFyZVjTUbSyV1rwWbrz9qCU8j8LNrAAuQwTYhWvCfrq6RCioBGAf1EtPz2M3fr3W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "365ecFXC46Q8AffvTX9w67pxfYHL6aqEiL3DN8Wi8SFTrzcbGQgfuNfQKZd84fLB253J98o7jiQ5TAkTJnWTsWXA",
  "key1": "Yj7pGiSgW2sBnrBvPvJ45eowFfWPfZqJjLvYqQgmWMtcoBrmvUKfEDXNxHt5xZLtFKpPLKbqTSo8baTGTpuY4fA",
  "key2": "BUDPy72wz619VbqPu2KGDZKCh1S2ucVExckUCdyXL2SdETvPziQ9t4R6LvxS4rKwU5U9XPwBYb3qBC34TmT52BD",
  "key3": "y5Sz9Xn3CBSRBaTEW2J9C9UyT2G9z4uJsNDuvacqvv5d1ts2q6UoR5ervJFfZkNvhAc89AjDgQ616KND3X8QeRe",
  "key4": "32NB6UNLWHypekZvLrPNY8ipkNpZX1iSPXgWPKNqL8tNYGBwoUvWiLPsbDnwFdHPcPnYsFzfM83N5UqaHn63f8dh",
  "key5": "4xG3v15w1LZu4iMZdKt5WewCeYBXmuoL5YCLHus8r8eE9W1qKuGksAPVQqGYY5jmr4AW9Hv7uFJZpRKSoRpnX2yD",
  "key6": "4N1Uw4vomqsLDDbCYMF8MMfBXjxMC1Bw3Ms1o2iJX8C3X5KE4krTVFLQVAFS8WUuGT4uWg9onicom5Ry5fKFu2EM",
  "key7": "4J1gC9QUAGZRpgxYyiemoyJ78WqC344xn33W5UCybrWKJKeXyXWnpNddAFEBQCHJteK7WcwWaMRsFdR18yqR8wC6",
  "key8": "5tUT5xb2MzAMzg69Zsygivy8ygzexwtcCiDDKCh7jaJNvbqir9QK9dDSYh15wduU7qVDEbjRDb218BFtv8FE3jeH",
  "key9": "2BpmKRwMEVge3tSsnvVVnLQtMUaQ88KK1kT7kdA5rb6bfH95335jpv57NrenweaEKii84KU6SFkPxetQrJG44JAw",
  "key10": "2XCAGWwaWbTB47erKSSxLtnj8WcArNxwy7NZEXaxnqqvgucnba6BrgW2dA6vj19XezA6pvc6Kn7EUcv6Rw5jEnVH",
  "key11": "3Bp2zD8QhFgB8QJaUJzmsagTgqL8wcjXeSW83vSJQuvbTj14r4i1qpbphZ5pGtpA4ojAHJFB7C5G5phGAUBBYUpr",
  "key12": "3z2rzR7hkSp98qyMwq5n6XCWTR6nEGGsFi4MDUCnDrPivagrkKfydWDM4qdAyU2bW1Vx1fryVNKHrpxu8kDRmEMm",
  "key13": "2JQ2ptupBSGDhbXMAeBBGALhY5dHjwo5vQ1MEp6USHpYJ1VuGWmLcZtpaLabckLxenqsN2z4RyfVWkXaQ6asKzUA",
  "key14": "29MYRHkvSnCibF8HwyW8EgxWqWr1puSspq2on5EJHSVZifUqkyqpNiMp86FhAqRe6m72rxPK8ZAJe5LPbCJpHBWi",
  "key15": "v3KSYQ3wHG8tP8qut28y8xjp7Sn8tyNoy1MS1yfKR1P6xmaAR2FSsEFL5jDZQodHyV4YsLH5jZxVAgEjZuWr7o9",
  "key16": "3WR97LTpkpqZX3o9KJLeQvnppJCvrVtJ41MiLKKdEeYBotvVPaKqcV2W7oQer172pe8cFv2yC6X7JrsAtoJ4bJez",
  "key17": "rPG1BUk44A48jjvFZSEUeanXzELgsvGHpwzRi2cgbAwZJTNgvKduytsj4JzPwHfv51oHALvRfXGZe9XSVP9jMY8",
  "key18": "5muv9o2JdnUZfXjgMjGpAXNtsp5Zz1xMNi749pGzCYacKFhWntrnShdbVYcse5oVVVRCWY6itSwAux7z18RmyauS",
  "key19": "5icCyZeSKKPXCyH5RoisCA1PEFBU2d5YiUo1g9TKY2sXSgJmYNdxg5i6pv9sh25QR5qnPGv1kUqZwBtxig4L5fD3",
  "key20": "3xskkEpRYMiiu6Pgr7okb4mfojNeRg3UTC493M6B6Q7AhjFdLV9ZeoEGh7MLbcRJYkoeToVkoyNGZZ7DvJcQko7f",
  "key21": "2AoMLtvcAiMoYHuYfVu36ouhn3d2w7pq7MCAfmmPzEXHjYDNEbb2KEPWL8SGYCFGTi5cG1hLtzu78mwPgKVJYk7a",
  "key22": "32eHe41eyYQNXGD2imWg3EESyr5ky4tueGUQXN58mhmpc8JjsJqDA75u1wWXATBQh44QVMWHGVPyZHdLLFFjZttR",
  "key23": "61vQSdDBPegygnXY8tVgzyYXhFFmLR6VPehTq7rrmT5WTv3SrndgtFDJ7VXJxXtG6DyRR1d5t4UsD9XDYcDAGumr",
  "key24": "2AQjTo3GjMKe4LTumbyfGhz8eJQ2WRsuxSvS7MkX3yctQvSrF8UqUjagfyLPL7Bc89QHbbaG9w7m6ERETanuBhbd",
  "key25": "5R9fznswikDHgYfEC795NA7xkjMxS3sSMEWmiBBxinp2737obfZ2dp654pdAvP89fQPR178mFMFFdRKuhFdJSe5q",
  "key26": "3ScATERaznwf9g8zA5VPKzi7my5KZRrBaky9QA2BdHbBG2JTMbthoxkJCeDLTtVh7De57Dp4ML6S9FV6ZiVbkMdB",
  "key27": "CmCeRySidsPEbPozriWq1dv6VJ4xj76W1maHh7e9fKzv8XLs8bF1T5U8W5UomU5azZazXuqVrZQRXccQD4i4id5",
  "key28": "4EEUhUYxXLh2oCsoJmJSF9iT4tfxUMoUgjU7fixidtXon57qbbpW5DBTESKKivgvZvs2GdiAS55rnqzKtkhJEAe",
  "key29": "3uV53CyNx4VgiHUE3PJxNcKsKL194wcu38NnYpM2nfsZR9j8PP36cwAG7nsi7u8ehbAJ9aRxc3iywfxZkGs56trK",
  "key30": "4mUpUp7s1daAxP75sivfNm42DUCtPMGMQAsa7fCCcvdiLMpm7uBuuJgDqDDnKHNZoBo2JzXWodi3H18A73nyfCNo",
  "key31": "3gnjWeUw1BavmVGCRLoR6m6nCJRA8KTF8xXXM8jeYidFn8qX51uW28SLpP4pskh62NjwC52BHTas5fGD8dyXGurZ",
  "key32": "2gD2yjvQPx3DkmkzY5LBPL3CToz2RmEPX2Ke9QxTozx61gUbP1mZCmoPLWCYYMaqDCAuLkVAnpNLokNBMgQNkGjZ",
  "key33": "3ZpC6KkrMxbJtARzV4kwz7e2kXBy3ebgpCejKftPxUKbj5ZUkw487QRZYKrCQv5VxzPhNixRvmCY8BFb2NxpMuuW",
  "key34": "3bcG7oSvDmvbgNmFe73gPhTjpMjb7qs2JtkEced2RDgbS4GRHfADZNdDHojvwy9tGK7epySsYzyR6kLMdCG6R7p5",
  "key35": "AnpjK6qGvnsZHMstuBTRaYsn7ty5Gtp92eYEQdh8pmyzfdJ1jeEkGdxJk6YdDZNLD4PaE5RHiFrWejqsjDUqvMz",
  "key36": "3gMoqUHo6yrXK9NgmrQpKXWKx8x7Wz2qyXYB73U5vrz7znwankFvX1txfZBkoi6qAZ1KbdsCSjJZLg2cq6Yjk1WE",
  "key37": "4LpSMeoBtDBuEGtJcjP67zZsU1rePp6iq21eToAKuPotfFHReoWUbDqx3FReUQ99Fysv4V2bZs7ESZZsNRKN1zaA",
  "key38": "3wHmYCQV32q54bgzfc2TThZL5TgF1WoYTv2ZeUdtnerq9i9HtLXLxsDu3CyfwErjHGfaSTbbDGSEMS5JJcsDZk3f",
  "key39": "2wu6KSY55BoQ7iHGr8331GFryazaUjev8wVDhemSaPoTKnFzZmFJYzNFUrPfLCFtVjR6GaQ2TKjHc3MWH4HKcSPT",
  "key40": "3xoV8NHDUCNYh3JSwGDCGHHJXCN4XkEdKtjRz4kKLCur6EfTZjv1vVyNatcmE1ppeG6A8bq483bY83KPHbQigfRK",
  "key41": "5n36cSFBko4hTSoqt373eEYPcU6j8mWhVygqHpH8U5kQZouamKUEuf4zJfRSBExVsPZ6WZRCW65J6Xkq4rQxP5F",
  "key42": "476qWDgZhAMAXEgk2UDngKFQkz6qBSfMGt9gZS5RzhkjosCKdJtBeUbUF9sA3o2HRhCFvJKBJQr9gjQu4ktYHvMu",
  "key43": "4ZXmxmnCYUdpGPJDmE7N4Znb2ZrGEDRRNbEgyeoMLjJ1tEkYUqY9rsoH8irhVeWLWhG3DVx3QhcWaNViZRQfV5G9",
  "key44": "2XRq4B787YVPNHmBrmfWf6u7yJcgt6GE25uE3F4fANULf9hrqus9rQAMFHhnhSrctLrkm3zTXxVS4mZvM8cm3Pr8",
  "key45": "4ok4wbbqHM4ZmbCT7Ztv8qqR3M5G79diPMYWMvJD6bWjkE9xYM4rBoBDwfiUhtaodCt4m9UUPg9A9McCp7j7yh8J",
  "key46": "5eTv6KqS2VwaRgFCB9G5XF7ybTzWDMKbEdajKoy8aWTuXVmNVkF2KWoP15SYm5ZGDDV4RZUaNPE8SKEiJxeQLExi"
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
