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
    "2JCCnEJQoXHv5kgrYLCD7SfdEfqDbyKwgdMYioHS7Jefd1X5iRHc5J2oWpbHKPBDrtjkBbz3q6q3NmN9SEM6HXUv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AnUqLdhZ16nMdHwQeXexcWgiurqWq2NJQGAvdEHXo5tMe7mfyZJwvAnwtpUZ6Lkr7USndqWjc2Tca7E5u1T4vr3",
  "key1": "4xeNRehh5qSsAwNDWHbrruZtpQZfUmGowjQBwzrGZ3415dtv5iZVvDVrzznNNuoBRr3rx1ysnaLaMpAieNg1m5tu",
  "key2": "5o8vw4RVB5gH1o25KVZh3F8v151T2HBySEgdNHiyZYa9gVAGbZhxegdFyc2mw1UqEL5RMp16mLhjuKBC4B2ygbHq",
  "key3": "4VoCUYenT6aVN3HLDAiHMKDE8awDbuRLn4LkRLp4uKm16hvGVFET7pakBP8Mv785NP8WD2TL48ZBzLVhU6y13vcX",
  "key4": "5HzMjZZVBiPxM2MsM6z8sPbjHxPaftXLqxjaHNEiKpL1FYHKsUtKUvtNQwmLGTnp31ZwXY5MWpMTopA1BEwsp2UK",
  "key5": "3TMJEWFhtENPuP66v6MnKB1tPWdsieKDp9mhvjpqyjMDKx4t3SoU3ksYfCRqZQJZfet15yEBuLmzcN7pLTndEsas",
  "key6": "41mqZBTeSWPKLY3DGBY9hra16YbrC5SSrYhyPrCoRxNkUZmdi5NTc5G6sRkRtFy9dFBwnAxP5Uhmw3XSXYooZf9q",
  "key7": "28emYjhYVwHrMG6XdwXccyuj1QW9zLk9KsqNigdESyTQCpohDRqHAahhTxpx5y5gAgv9cgiyQMpMPARsF5iuomET",
  "key8": "3hzGAcoYnDDwacbAeABK7GFB3GcRjfGnunQbzveu159rTMwNjVDuZk4vQU4s6MurNAXoQAFA3EHdJhck4Prk63BN",
  "key9": "GoWMoM9BWz4o65wfrvRK2qmG68LidotrkMfVC1RPFYQCVTwmWXfU1NyrEh5Z41MDCdPFjskouYybyemjrEe5kKn",
  "key10": "5gTbzXdKoTDEmjYcbKiXGQKDph7A8WRtFNQSHFdqXJkzDWdSVs8WJFAF8gQphzdoxvapCHV7dgFSVAqDfwvK6Aiw",
  "key11": "546fyeZx76QCk7pzAh2zms2afkwynq6zXwe3j7NsYPqWD5hAZS5YPZ9oS1epvuz9PsBSaQnVtM1nhA3RTfyB5AL1",
  "key12": "DAwGDAjGziYCKkfUiQ6PyKR3uFJDgpbYeNF7iMdSaL7ALGNZuZi6nMN486Ykf8BK24sqVtRDiS9RqQ3JRDpv3B5",
  "key13": "5weXAXFbTPPxuaQLviz3QqL8t4VYFEAw6qBNuPDs52LA5xCBPqr49mj3yrWjiU9zkUPbNxTLGscCPeiw43f8pijK",
  "key14": "2aBFr8yDYYV8Eac9mBJeWzZk2nM67SKE7VkDEKoekC5pkJex7QPg938iWRTiDKE9vN8JvXVDN4oNkdEdvtELdtqc",
  "key15": "27P8QxmtrbyM294ZxSR63cs4qaGc9FT3YnaFccJrBjoPjT3CZGPcXUounTw71MFScA82tDv6iuvCFhzrCw1QwPwd",
  "key16": "2LC348g1PP9MhvzMGM1qGNHfPbNoxDJxLi4WXguNXC5796AijA9SQUHLh12YEb8bCKg28b7tnidD83F3ogaFXsdo",
  "key17": "65m5g2cQqr9rPnMxTpT4yGojR53Fpnz5StZeeSWQSEC59JaPD4N4Un4jLzNSZGtJLA7JCYzctEH2WqFPAtU84dox",
  "key18": "3N6vAZnvvrSvvHoRSaF3PMGTMEgPjaWBVAjjHuU5Vzn2eUZz29DveXUxx1tSy7MdVB2wiEgGAdudFaPHtw7RSxMu",
  "key19": "2T6A44iS2kcQrknmANXTeTwp2GRFUfEWcTawrUSa5pV6rQciba48kxnAwcmBES3FxWVPR5Bm6pbpc5KtNCjUXk3s",
  "key20": "64ULic9CzbN6Rn7Dbmsd7a9ApAQZmjMXpp9dzWvMXUjSQ5QZujb5DXfqGd6aq8MoojdcgyvtwXofUezM3einsreM",
  "key21": "3XqUNZLfjqAooMvigLNNYAyxw5nLZ1adeqzW9hgpUxhn3CobT9Mk5ebGWyp1cs3RFtpWXtzPcwkZ8P3kt5pQHman",
  "key22": "5JXJ4dU41xHfjMnqj43nLMLPG7nC1najou6NuSbCYDE9C3y7ajLfijjoLzGmyD4N3JZaPcCSXFpVbCdhYayAXkyB",
  "key23": "2ADGpEkwDeWj1qgLBAqZAqZxov8VLvgNbZwxhCo5cR4T5beyAsnPJyN24uLjq9YGreFtAnXaavLUc7JG3WnEgdQe",
  "key24": "29H3fPDkv1ZZ6NwSjYY9brkXz5wrdu15nNo9fUE7AWpZGrkaEjxQiiLPHaqSfRtAc7josaNGSezF6dHsoVrG5gy6",
  "key25": "3Hr8g7zVYKLWq4xG36aiaNBEdeWjS5kopc7Y81G9Z4nkiaZ278XFFp1qBQumi1GVjnqHFktj9EzdgQSwcWxtTqcq",
  "key26": "5kCwe4CWCpqwLiDyGFiP45Ye3djJoRarVnKF43NX1BBNswV1545Ngv765CYjHAVTjBoGpXh9GupCeg1KuLnNX5qc",
  "key27": "5dAqCXtXPm6GhpSFzTnraXeFnfFAJKZdvieLozmY3CoFgxQ35GPr82MsPMqTtqaHoENki2bXeMwnqrVLetLASben",
  "key28": "4SJwgryFY17n5sFnNEeK4ozxAzT3pJ9JFC2GfrnRpwPMycmWpRYE7EuZrGLAHpX1wxHTnHFdGPKT1JF4f8oTFEoJ",
  "key29": "3tALHrT1sJnDUMaavN3nJYug7ZVegWHRA9HHDRwuaCHo3KYJ14XM1DMv68RL2M2x2YYTNxMuJoSK8PZvadjpFQDK",
  "key30": "d1ebzneiyG5RHNe2CRLqMBi95DwfEutBPV3HdMb87c3LsRVtKLmcfRHHMHT1q79BtNgjKFMX53hFSDey72SWwNU",
  "key31": "4RwXYauZ2fjbvyeHkEPNd5nRHPmaoiebb7kd5b39EmJ9DHLyWw9aVJ1K9CJwjePhUcWG2W1TNJ2gBW5zPXPjaeRR",
  "key32": "5snGxRvckU9hdfw36WufhpWyCmt3VSxXeAtMpKT7bsfaskpU5C5Ev1iwvMVnPHn4f2nUqM3ee3NNCLMn47kTRkM3",
  "key33": "2uQZDKs4BR863KezzNUCDPQWBKnk7SoA35BJ6iv1urXp7X8WNQB37yBHzxsDpXJTTbAb9PYR3JG9F7qS6N5vFxJ",
  "key34": "5wsspRaw8CsKQoUPzB6dzANCeESbxMHU5M6CiGuRD3MQsGqNBM6UdGPPVhE1o21Wvk9qYSQS5NPU1xZJvzSiY3nU",
  "key35": "4m73DWnfLPrxiLdNMeHHV9DVCwAyvM2aiLk5iwiq9zVoYi3a6yEwKF7vQ88LSEA8PobH1KiGBokepSVqyuyd8DFF",
  "key36": "5S5KVrC3dAMoxq6KxdQ9YwVWKMFwUpAu2g9SJ9bFN5g92y4yC8ydR4bzdn6KqKmJg3N7ScBJ9ec6HtoRJswZciyz",
  "key37": "58tJQUQENFVP7LWqxnq283BV2KCStNHTXdG5QpDaTihFjh5Si8THtvuAkvRcfzvuuRpJ9zs8jSL8Qcq1fBrWEw1f",
  "key38": "UpF2EUrQWypmEiDQxj5X2C2tJGWq3HkyPQb99SL4Je4WfwkWzhyDQgXR4huVZCWDPfAThaxC9yKXHeuvU7cfMhT",
  "key39": "4ktizJgAK1SUKReLpALcJfrbskyAfLKarFWHSdWu6nGxu1sZeNhRicGbqi5ttpWpFUibG5EwgdA4ytru4eQdLP4M",
  "key40": "281jThV4AufpKBh3rBGHZ5ztdJEbavhcsTn43q821wSYEVBuZbXwdcVuHDVSG8BrcBp5aPPreKy7qHZbDdnR7oo8"
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
