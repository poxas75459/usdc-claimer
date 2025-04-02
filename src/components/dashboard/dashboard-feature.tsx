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
    "36QozvUvE4M8pAKMdSSbSEgsrz7PreAskc9z4TwLJ4AnqU5UvkAwrz6sn9JjtV8zyHxHNB1tTvv63RsTsqpisMBM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VLNSiHrDXgup56JEMVqefGvfHhobDbzyXJRrURkm9zWUX3sDSmQdxCz5LC319WHZfYYygjGrbb9CoPT7WZrm2rE",
  "key1": "54kRKGuB1Xjc5EoJg4FAAF3HYLbjaHrfzUqBgjWHRNvUJdVfZDvbExzbgLpnS6Yn4aHcdkjSjeEvVxcKch5CH6pp",
  "key2": "5AL892BKAW8V5AQsGfNDTD8cSKaMJmDnHuVzPATGfkhfpjvLtxQ9NahmpggvamVBJ2DBhyVtHcHhaVGKm6xK8Hft",
  "key3": "4VGbasG8pSJgbD5p5hv9uBL7rW78XN1WAXsWTLVHvYsP7okuHXGh5VzByo7DxnjM4pmNLKBXwERtF1BxmRPAdsck",
  "key4": "2SUft5PXvyTz8LDsQabmLWGb1AYCP45bUZgUUeSo6hHx2nLxw56JZV3vFXgrUXSKc9C46FKrCtFiXdVS6VSUfa7Z",
  "key5": "4CJL28AUYrbx7RFHV9D1UnYxq9svciMN1wif8t3QGnEV5mFJPRvQGWHCfr9acT3b4ejikSQG3i9W3raRUdyVhvt6",
  "key6": "63tb12EwNAmmGtcaCDBsh7orKTwWPDhUjXAMdBpjaqdwky9NPP9Y8pPTmf5adNDdsCDDncBX616kMnvV4nsesngi",
  "key7": "4XF4f6cAFxasG53g4bnQXurHaAc8EHGRDd7uki1gsDC7MuwTYFjMbyE7hpzVrLqQLA6vMA9K1ToBHtuGx6DfptLn",
  "key8": "5x9AYZBdHY6UbK71BxdyY9X3yRsfosbTYm9C2yJhSDZsTQCM5akQaumkG4symBSbY183ckZ5mGcRAQd5UWVXNBxD",
  "key9": "36sF2hwyKn3iWfv7uXvt2kVbnp4sAiTjPqQznu8HJFZir5ZaPkft19PmNwmARhsmSpEVgteX3YF7zwEhuGpmpuuo",
  "key10": "7HYZABmBEPJmHuQEWLi8vHdYnBdkFGF5TZ3pwcc9kURoEPciY4fXkb1P9JbsgvE7ojTzqzTFVobAMBZgSQBFNxk",
  "key11": "5j9JuRr8S8izb79nb7soKy1yX26nxamw4Gd7sAziDBnqMHw9n6m4Qjpgz1Z3KXSnmaqhNG1kGRwhYo7RxpNADdBm",
  "key12": "3LqPgBxyDVeVH9DL9kVQUissNBLoz3iRBQugZtUfg8jhgFXWvTrQyxAGyk8i5XtbYPR8rhiMAM5yHNSrVJU6mXoT",
  "key13": "5Aud1Awf5GAxB9KhJ8gPYco4GhVUy8yjpQj7FJTvYeuVM8cjudQKyaBdRmFZQH9bvoR5pWM3DdpncLzFWpR1roCn",
  "key14": "3g1w8nYYdBzhi516BCKC6pJT4PS7a4B8J6H6asR8kSMduaWPMHe4wxXbW5Ug3ACJovJ24i1nLmqmjqFgW93Nhxjx",
  "key15": "2dbwdSkQqN7rDuEHwz4RQd4LqJX9e1gq1nuf8cmGBwYWeguGkdCXQwDQsvU6hYcaYJYQknj4Ds6JuNAZSzydgbYD",
  "key16": "4bio13Tk8kT2wfVzC5A5iy4p19g8BXDD5Co3KiGxGJBti9FjsENTJxke2jqgh6p83yHfrfnWKTh77emtTy86J63z",
  "key17": "64auZ93rjYLhGD3wcxP3GFEhCZEL2QDb3T9793W5CRzV4SqRD8KFrNURY9BYgGRZT2itSbL7ASwFgfErnMmanJUe",
  "key18": "5CzcVgGTubNtm6SQkcLGkZUyMR8dUadW3AF5SdTqQbwmU9knXJQPaDMze7zHaazQYeGSJFk3YFsobCzV3F8E8BW2",
  "key19": "4357yYGapZrfsLBrrPTRTTF7eT32nw9ohujcjhjGun9aLKLPJNpYzAk1MhKshqytoqNKBgg8sCD9oXcwVZiZByu1",
  "key20": "2rcs3ed9LLryFbmMXbGkb9meUtLrUmT43U3o5ay87PprY2Zp2BBERaEFVKxsRK27Pogq4h73AM3SpHuogS7d5evM",
  "key21": "5f9guHyKMswoMngohhcss39x8YxJ9ncrdRn5hYF66fggSMJraTC5BYfrbQKTRq2aK2VbfnXp3tC1qnPy48ReTuwZ",
  "key22": "4zaBdYh49rYxg73SdwfVsj16gcGJjRjg3pZx4kNF7bGqs5qzF7pY6cJqoRT66g1A4t1jz7DgoveiTMkuRhczF1c",
  "key23": "4KRr8sHzAW44Z4h3AR39Wgb7F62CvV8E6xGHG8DBLZ2WvpHhmrCVSVUGucoyY5aRLJbr3ybDWkyLmM8ybRHDaEka",
  "key24": "5vdQoXSZ8bAsqoQ2kme4xyBvtUhiNd56x3AqzuYRrNXiQPBEnVDEx2c4zhGHMH9u4mKWYfVL6w3aRhHBZyUREFyd",
  "key25": "2LTzbKuvhiygFt9APsRBtE9NTBpniJTfugS5gPfTCXB9jMK7zELDKTCPqb1p4Yc5eVsjmbVNbvARqe9L1fm8wUup",
  "key26": "2zDLmHtRTtS56uvkjasCyF3wUApn5vWEkMkrPnw6wgN7YECAPEPXMoYUSe1KA2v5bLTFfbu2TDS1KUm7CwuVPmEj",
  "key27": "54igrfqxCTJDWizCVnZ83BQqnjLRHM7kSqQCDWRcxUML4GT7wGv76mzaw6o3Rou8ZzfWQonQHcMereq17SSt6c8m",
  "key28": "4TqbW4xuXVYXBkiisNwzzZgr7t8vgKvZG6n3GWwmeXiGfMwCUPQYKGyv1wYYaSNzHHbfCHvZzkJfRwCJpQw9qmqy",
  "key29": "36jSsmUifGD6z1KnE7Sdrv1dDrzipw2UW1EUF8QzWh4DAsVuyxU72EyJc9cqBdWWNneiuqgm2h8TLCGTZi2iFUKq",
  "key30": "3r9xbkb9rriqkvzd5zpGpihmWcUcb12rCLdMv5k8Q3Ned78uJ78Su1kx9yB9m4brG9uHzqnhG6AbtdFkxzFU7xiu",
  "key31": "dQrYiv14fcyeZDxTf2c9JLJoPVRyJFdybLvYprz8MX6xay3RMXjMyPRYUdChWP3ZFW2jmLRN6ThvBE34uwpGLzP",
  "key32": "4C2du1a7aAMwoUp4YFzpRKfYfdjFNFKqkiAb9nDpjUnQK6WZiYE4XMsoKcVVEyN7DF3SAHa9cHgjiQuDkPavuW8g",
  "key33": "3hZ8CLhV8DqPWDvFnVksq7f274A3WTaynH9Lg7BD5fRR18fHYSdqmhmBpPin5miVu5BpY5zQn76KM2fc3FbvU6y3",
  "key34": "3jtgDHiah59BvynQDaSgFLb5nLqsBkG2idu7GfFM2GogiybBjSvGsKg4NzWpZVgXE9jZvTqc328MHT1uaxLyeXT8",
  "key35": "3dxHAMSw4fBnDDpmjnZW3W5AJTwoFNkrz8r4F7paT4YeDruZgJMBQ1XafN5BBCY5S7gL3hyAznib1PjRFUobHfhZ",
  "key36": "2qyVKuUVN8y5evEnfWDGBGhiZFXq1JronKyc2rfK57c57wNC26YrKR3saor7WXMaALqUfDYdgzw7fqf6EfyRJD9J",
  "key37": "57WQQqaS43xmkENVqiRQFkpn73Mr2CvqdEQFA9YSfd7G3f9KmDa5rGT42Bv58Sng3pTDsxYRwhCW4C6KjRseWSDE",
  "key38": "5BXRMt9eCpN8UfUNJ3jzUhAw2jvaYBvm8LCeHprmhJMZYDqSD285D6LeVB66nvQRPF25omcxa7syftL6VCJWskbh",
  "key39": "3xhG69BHt9VXXScgNZPG6fsefx7hF7QU7F2vquw8r9ar2nHmLyj7ai9Uk1HSyy3gzBeKqwc1sYZLiLDTyDHMsHbS",
  "key40": "4vMd71BShzVcn6Zix9iiauWerqx1JgD6XZDqjaw58qhcPQQbrr8gdq3NuVsVpQNZCgvTPizV69SfnAC4ab1Gu6Qi",
  "key41": "4doqjYtxA4xyZNkNig5ucVFMKT16p1ktBZpA1kKmdb98tTZR8dQeYqzNXG2vs7WZSFpby9bAapiqCBApkSUM7bRt"
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
