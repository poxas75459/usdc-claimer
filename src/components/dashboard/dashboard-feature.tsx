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
    "66tm6YCAGbPbBY8Wf7zovNDAuQJCe1Gzm6KJxUfhSzdFnAx3jfnFgWr3FAWHwj5JDdmaEu42caf6rjicjPzHpuRE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H8Hef4BuCP2S4LkFzvW2WcF27PHmWmgrzqAQAyCtfX9Bu7FdSefM6ZMfjnx7iNxWVi4HaSXuFWH5T3sF2oA4wUb",
  "key1": "WE1UuXLWDcwWdkcnwZgnHpnRhzYnYTBgdoiHmAK3C5Xz19SftQobKs9o3aKB6tsAWKBvZEQJp5PAEC76b7qCeER",
  "key2": "2VLzGkn1sFZtQmoAGAEAaQPUSeRa26seVVFH1TWiaNpFqPo2Gtt4N58y9Z3SvphtM9UNcCnpALxuqTyC71dnXzzQ",
  "key3": "5mLCoaoeyKqvByuKW8qT7gZzisqng515AHD2dkjbuMuB4tnwsTBpnNeBC5g7JVfE7qx8Fsgt2BHTLzQT6VYoVZnR",
  "key4": "2GdmxhdLCbp7e4tXNX2CQfDUQBMgmUce5YuEA5enxE3QxPQrH3gt4ynNZccLnoGv2xrYHnfEdYvACYUL38qVDnGZ",
  "key5": "84rP8DfABe6rjRccX2jC3k21fGopmRKor9rV4S7mwcjnNP1tDPmUodnnSFykAVBQf9jV6wVTeUX8g9j4BdyskPL",
  "key6": "3dQGsdabwjpWFoAhj4bSDRnbH7znjwenRwAYSaH8KYBdot3vYnX8Zss6vEmcJqyWnasVXH7ZAVPsEHKxp9chqUZm",
  "key7": "4UN1R8EiwZDafVvFPLRqDtXMu4HukwnKh81pvUweMP34xQqUG6gkamZeFNGLe6BAybZCWYxthrhBPn5jXPDrafLV",
  "key8": "5bYX7bRmHrNN1C1HWvmbHfi6x7Snga6xwiXkFLNj2YbreoSxdDUFdHZvYzA2VQ5QAfA8TKxH22GtWWkn4ib5GztW",
  "key9": "6M4mikJBSwBEpTNcGjGUtRWuTAqDuCfPXNPUiEG1afnFiQMXCcczLkRTBhL8Hn3p45n6KUd9b7x9fFnTpebWpXv",
  "key10": "2YxThUX9zFsZrquYbVDpbyBo23sQjNdo6Bv9aPg5Q9ASYuxpZZQjn3KjQ1w8PeoTYp3oKVPQWLZawqfRwm2biGTc",
  "key11": "dYzfNyM5kakgZzji63E41vxtcnU3W22oM7ePN4fyXt3P5DbgTWiU9zhGWB9xUjwu3UG3APc9jr7wWuX5kyPr5TY",
  "key12": "2eyJunZHT9i3AfdXSfDnH42HPdgqAxpPfsiqDHsrFRQRnpyojVfweg7K41ANnbuW6ayFwDVaQHJsVejhYLXg5Ym",
  "key13": "2Vxa55Qbxe75XMpJQuRGeRRN6Le4TbUZwjmnPafFGb2e391FY1rvY4gV43TAm96fZxJhiXQFQW7bRFXgtXhSuGWi",
  "key14": "3cAX1sPTupkTSvS28a79zuQoAnZuo8tgeZJqHziodDfFQsh7jwuhBoLWeueDSJESagA8yQAAQsMX8gH88tGNzxee",
  "key15": "4yVfPqWazVkv69FUnzAezrj4pVp9WcmEDhUGwZ1rAdemLppdEjVZHxX576wbFfs2Vy8AL1MQixqzxuX22ZtoQfR5",
  "key16": "RxwXHiBiEcQptzrmxYX7cCi5wXPWG7FFYWZmwMCcjPodE5EMkt6oGtv4FAEKmbTfUfQncLucsEmig7H3hCgwbs2",
  "key17": "3b4kT6is6aqCJcn6RpVmX3GaFeNLbtSCicWrwFqp9fPs2E5w5gACFbbw3cZtkCL4n2EQfoRpSugwgqigLz8pjg7v",
  "key18": "43RStxEjgkrPT7xUwBuGHY8kwUbQ9TAiV6j9LGsihVY7vYE7GeUULf99i689RoTRVt3G14oU8xg6GmzfhWKcDRDz",
  "key19": "59MY72mGQ3HJGxJnigFtiHaAqVggLRNKePrEQzqQCChWPv54xBD6uX36G1f7iD9qvoXauaU9vo8z9yHnzhBE4fZm",
  "key20": "22r9fxg865nR6qPtC9HjXaGN2g1F4ySCxMRADooKNAPN3EmmnpivzFkWbY8iGZDZSKX8aGWzyav8EXyMBAfbwQr9",
  "key21": "62ktbsfD2EnwmocqZGdPzcZ5j2gyAmJJwZX6wprK6wxH1cRC1XZdoH1pPgBThnK98Tu7fJMKnzvuWxMCrjhgKZkm",
  "key22": "2NWime4SCicg8iFfFEG8Uv5p7yxtj3adHPuE6WknMa3QhneFhV7wGuQyCT4TqBMk8KdrM22UFU9JEEgDUEUTziMq",
  "key23": "4QiQGsxPuMT6NixuH9poYLyeAV53RBKx6thaAF1dLybyYpkuNKh81wqPc6Xxp62ERqaibW4gwRcWhBiaToNZaKn5",
  "key24": "65wbTK4ZZx9LbsZwnVPANFbTTDM97Z98sekP868VpJkNWfHRW4xhfYFpfc2PGQgyzJEYTvGovoezB7GUy73kSf3W",
  "key25": "5rPYCbYEoVBN2nTSb8dg15hhD7DEUTiBNebniykTfQBAsnayTXYonH8U9ZUiBjM4nb2HTwwqDHSh1EGysavBNCrq",
  "key26": "4kTErwHfQujBu1TQT3e4vqMiRwsjxmnCEoLXpHZHDToG4VQoDAqWpyJse5oiQGtR4SofNVVxkjEJJG1vcjVbeeu2",
  "key27": "dLKJjW7q93WHJAcxk7uC1oMoVJJnGHSGKKMGqTdXziLttt6dZFoQM9V2y1ScaFU2ha71BYXm1GtDeWRh5Ggc3m4",
  "key28": "4kmDJ4CcMTT8M5RDjbeBAc7gzBmUT7dHjHo9hE1MYs3oECfaRM3Vr4fneqddARijuL15RV5QZyx3MC9xS2MH4T4A",
  "key29": "3vpAXiVv3RUhXtyVTs1xiYq2jTPbbpPDeNmmzQGy6CSDNHZipGJ1Yf2mpUoadQcor3nNAkWDRo8AddG82y7Vgdrr",
  "key30": "44pTwLodbPyzAZNNjRbaKSpz4E3pzor3hjtCzJre1SRrQSEzE6XQ6KLyENXwyNnftXS46xABhqGZUoYCsjwFyk1W",
  "key31": "2nuUapcrw8SdnwC2eSH6mRf6odFh4BB2m9CwmbgZzYe33nz4fJ1EQbED8hWBxe62UK2XkAEsSYAjsKdG3eH4w1td",
  "key32": "5SFUrLSYbi6MvV7stppd6L15hHZojCqRQi9u4KozKa1GXrMEzxPTDeJUz9HZZGQ1fuWtPVeQXo7k1tLecknFSseM",
  "key33": "4e75XM9tVCiDWNvZKc7q26NoEteVtsUCLnyLS2JtYEMUvHqzXFF3MFxKLPjXHRB9qqpm68te3fauv6pAgs9TjyKF",
  "key34": "2ypbk84Ac37Y2Gcc6kP4WDVve7rMc4cGik1kzGmBNoenHNCXQ9nVbHuDYQV5TPPyxQfivzg5Jcjm3brYMwvzVRr6",
  "key35": "5DwmoHXFdvsSu8LMNVBKFnWBUWwB5aNPNMvo5H3tp5aAk9os7p2KqCX5F3iiGzFkKSM8q6cdWXC7ZXXs26ZV4aZ8",
  "key36": "5sPubZFVch67ZJwV4yk6PgyJNU37hEZLfXDw6mcmHZsD5P2VvCMrJs4sZLBDBEsAmZBo4GuKEa7b6z3hGgxUKB62",
  "key37": "3YGGwFcjTVDg6uo9eK3YSmTsEMv8WghgriPa4jKvZAPSH3iMEqRPV1qwAAxUtdJrLMuf52S6R7hEXwYTKxvUaaYJ",
  "key38": "2zzsTU9iEvWYpbfPEMCWxy4c7wGX1GzUtG7fSNUJak7ra9mjt5SsLbsAmTR3ZKua8Nc86SyZZdGAr7ozkfMmCVMm",
  "key39": "22DeMnvSkoYKjFbP7yW4PpLfJfZpad76WhfAauP27zF6BXTSjqXeHb86xFihE33NcFMwo2WVJLwncEZFn1g2q3Qc",
  "key40": "3ib1AxPMs9qdWBWSy73zAPSTevTtWTkeEbLcLGReaKLscKRwA3QwqiX9uzU3hJmThJPndaJbzGD1arfrgQnkaihj",
  "key41": "2e72s1CUqx1R5QcXjHa9wbnkU3Unjx18ZnuHCmHvmRebBaRe41KfmJdfHw3wBUK5sQ4YDVwBkmFr2QudZs7V5ey3",
  "key42": "2LSsma5UhWsmbzE2nsrmT5LodH4TYweLMQSuXcrFvW3HS4fZMeUN68fDCN6Xjc13sxyrZmFz5NYnYDVypVu9Q1Tx",
  "key43": "2Jryy2mCn87yojUWV8V8mHDbHHJ6JsXfJzV5S9ojEKhkMWsSbC8JQwboaqDwCCFga5YG6gDrVisQH95ntvadPf1X"
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
