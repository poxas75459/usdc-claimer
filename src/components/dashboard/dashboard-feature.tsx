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
    "4wCB1tngc9pJA82ttkU9LLpNPu4MSeUpYUfApqAC3GhBGbNciTBpauTJREfN6Jk6mUoT2t2fYsNJi3YwTmd94qTi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KfiuKCvAYkfC419TLzUgY7V8MGef4LZECf1MNF9FQppFyLjKLGB6Bf7FYv8zs4gX55yPfzC3QF88qBfsnSX8Kvw",
  "key1": "4CxiYkdUSmHYVsEUSAHj9JNrx2LsDheFeY51TqgFtKAHDEv3H5TrzBs1UBGs4R8oGUkYRDaKwJm1dLzz2uegzBd7",
  "key2": "3ZZfcA59JTAg7AzfA5FxCkHE9twtgE3VVbxQTqAsCgSZXZqL3b5V8dRCjjew37kMGp28p6ua9mVNaYvocFbCnanZ",
  "key3": "2toTAb6GUSV5TySahNT5gSUwD84BbPmiuCDx9vp2j3CQqBd8FD7mYR2GjTK4ixnQ9Gm1nAq3ZBbNrrdzy6S2FWUm",
  "key4": "4deQWSEZNAPW5pVyeMfGiEBV2M9qKUKVnR2WYu5Uuf1WTQF87YREDCcowK2cM9BwmARfxX6wJzu9aybNFaKWbf5f",
  "key5": "kuLLCF2QXAABm6paZEYmnFsVQjSH46znvoWmxLmmh5SbzHfzhXMXx1f4ToTvcWAyFW9mAzE6kav1W6oYgWJ545W",
  "key6": "scNBNKChbRQCNTWAE9zebCeNfyTamBtu3GgtnddjBsdMDN9tsjpE9wrpZmWAPctJDrCBxV8MyyTa286BUk8pvbc",
  "key7": "2xEA4Uyqer9gTo7tV3SVP5o5WbGkUpWpUvGLvveWY7xRzEqiHzCtFLRFWgptHJ3EhLPRs43wp2BVQEidui6H7RT",
  "key8": "2bXQJhkoUiPmhvbiYhejDEG5nNExAPZpQ5G7uqEd7Rr44daxFPrFA7mtxECuR42HPEY4TB823SktxxmPuCWAPqKd",
  "key9": "3rcXGPSDEMwUPA6yczauEGFEk4yJPcN65T3o6rMK3dQomcxjQC2UxRmD15chk4mRai8gD7gPQyb588TRTY8gphxp",
  "key10": "jT1j3vh61Qi5VGscNdvAF1b6518E1WRfiaTiiwbywqFXS4oYV3XE3A9yXP5XsKkVs6aX3dyZ5451hJJ897y7fLp",
  "key11": "2TxiNN3cLNK74Y29RzbDLcf7a3ZT3bu1fF7Ym3ugkwHNL9yByjYMiRy1eGxiE52ReHdBX2nbeM46F5AoNDXWmT9R",
  "key12": "4uMQCQPDxcDbx4WSHbq3UsJLWNKuiqp2qdnvv5TqQ363SDSFMrH5CVNTL3ttvU14qLRHsJagfmZJSpUz63KcXdnh",
  "key13": "J7qQ85R3s9eLGx1MpQkua7bXQX9DnHj9zLea3rVRR4oAFrwJUuqTLvL8qiSFj23PMECmsrnbSfLDijpFuDpjkAk",
  "key14": "2XcPqJQM484UNm2HajjBPe86Q3kNGFR7WUWv2CD6BtdeMifXCBUTP4twNMBgGUzkhqi9Y2Hsqcw14LB2zEFMpnyz",
  "key15": "5xfXTvHRS7ToSQs7SGcEwFKGpLFSYMicd4LrgZP2ujaRN4ZHKLKfGJBmssiaBxNTdFA6tdMyRr7TvXGsTf6h7i63",
  "key16": "hoRALjxYYRQhWckw3So2YaKmcpp1FeMNyNmKfMon61mKYroitgcos788Mrdn13bGhEbNDqyr4BB3bY1NTqxuwHh",
  "key17": "55uTzPFLPwZJJeZLuVJ9dQKZbSKesWbJ76v8BAye8sX9MZJFrprUYNVV52YiBfFqRk6qcQALMEf8hHsSdtydpKrh",
  "key18": "259LMtNR9WFt6rGi9Zb46Y94TwPKXzcmrcZ1usWiKCpvdkY9iSTn49ij29znX6krbc1m5QrujZ4V5cjXEMza1Jev",
  "key19": "NmYUSz2929ux11qdW3YwdGs81HKYxfp9UBdhQuvd4yNVXnXFFX19FuxonQYKqRfHy3baPRTLZ9V8eFFAkUhFbTE",
  "key20": "4PJmRUaH8u26QAgvcLk8JETtJczhYAHjW8i5DgwVZaLXeXoMbRdyxk9Rm5jnFo5CumxHsfRgqHAXekkqL3s5gagG",
  "key21": "2zJYnUFnKvPR5ri43ejyNMQesyJzKgweKT9R7bJ6oj5GprJkRrUg3ybhK5CT8qYJa8JZ4esS3U1eJ49d5ifwMKMK",
  "key22": "4h43uBfh4duubuMYDEFEj2vijtJ2pez1GDyzkqcdV9MjNeqyfzmxv8RwZZ6VvVvCupPmDepGenCB2ucsVchygh3T",
  "key23": "3v9WMKt6LdA5uCaYciYsdGG69wKbzxfXwULo22a43BtiCEpxM2jxAYX7ecUbjy8LmwUrjgrGqV4yqvTxZ2FtXdVr",
  "key24": "2ebWqQvj2G46RXY2dHq8RpLmzSFKHnVydxYVr6MTXnKfKKjXQ9gLkKBJfad1KJTe1yp3mEkazu3PZoqM7H6uSAMo",
  "key25": "5cU66daPPbfe48Tq94JngVDLLTwpLcrt8GpTQBvqs3BrPHpZWiJexdLL3esHFakoDv9P8T1Y2GGL1QC2CjAG8kQ9",
  "key26": "2Lp74LQdpSXe8Xkw5pG351nAscWFgUFG9YHUtmkxoRRL5VnJ4uxseDqcuGThMNR5mgBW79CbKRccWazTxPnJ1t1k",
  "key27": "txd4NuLhpB7YwfQa1z1csVQvub8iyJVwcftvSkdwfjbxuHvjbesNMyU8rGNjLaQhnHShEHL4L7xziiqvM1mATDD",
  "key28": "62inujmkkMXzC4jFMB8ByE9NndgmokGDq1KrQmHYLT6PfH7tUTSxnB3BctCY1uZJJiGht9Qjqkp4HGgKsRfaniwY",
  "key29": "5JSG6eWBbmTYWL6ByxTuNRxgQ9XafzwPYGQ19XMfWUvvS6HsRcD4wisYctZRdGqLznF3Xubsny3W1m6KvTY4wJ3B",
  "key30": "pcNitSenT5KDzxFxHGpZhVkgBPdz9GNCpEF7Up1GoxkjnyHwtFYHxE4k28REeCrdAmC2B41bxU9ETCbidP55qtZ",
  "key31": "2udVZuWVouADSaaXPtQ2Jyoacv5AFy6fuX884VXC5THrDbCpQuyZtnZgAETmRTCpXo4jXXeBENFsdUfJw5d3YNob",
  "key32": "2Db72hsSPkvNXNjz7WEe8CWAwwjictumotqMD2LkAnqDut4SwK4K5Fg7NMSc21wEjctiqmmfCMSquTnh4Tg3j5MF",
  "key33": "5HPNe5wpNxJCvBVXW5cBP9LYYpMHpqFwxer5bGtcjbPigd3mqCAse6kF7sWWfBkD7MhCYPPEVQS37R26asCywdB9",
  "key34": "4xH7tNiWzJbfEVYGmjVUCcwBJvGDruXPVCPd2w5Bm3FjVRzGURMDhzjQeeXSLTVQWzEBTXiCRqECVNMswjovrdSv",
  "key35": "2R5bQVvcmHJuWihX3XLXr3bhijFxXs71b9Bq8NvvAXahZshZU9MX1NGWFAHy62ojV4z5bNpvXmmoSGoQe33WRB6",
  "key36": "3FD9ACUkzupaeQde4MYGJx2WMrWGuBfviwZ3NR3op52Tis9PSNmirtRvFr4f4nrx3cbE2fAwrm1k9T1ZFcbNP11t",
  "key37": "2aK58ixAmvAErPy5wPPm8QMfWuKhVf4rdBW8Uk3BV8TuWSoAQsLWGKEGQEYt6xravogk5Nn44FSuUoAWcDtxCLtn",
  "key38": "3dotgmHMYu5XTQhdggZKuVtfmhfZWZFKRKJo8KKt69ZZHAF2U2oETNdCdtfavmZWQ4eJ4Ee5WFijPFi8arMjjTEo",
  "key39": "4j7XECDUmST2jp6vPH3WwHpEsa2dPq5XtByd6zJuQzT2K1btfD5f5yTAFAAXa5QSeUPi6BhJsGnuMwieKkkKWG3y",
  "key40": "2NAhoBrajvFLnyED23Xi4E2StF22VK1xmEC7RuyRHR9a2mnDhRDwLDxA67ac6B9TZG9TXZ1kYnAnxbGijvePJK1m",
  "key41": "vMFcYCjfPqqC95aAsan81hqAWH1QsXqa2hr91M2dx2DfdiPZbU6YKfZ7zruRnjwgQfZQYeUn4LnLidutH39xdS1",
  "key42": "2Gs2fuL5zHgCvHZWH8f3xDWyEoq8t8gxbf9cGnBVjxM9yEayYr1ei8pftqChYWyqSK7NVSov6v4NSdmmiB5PmVUU"
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
