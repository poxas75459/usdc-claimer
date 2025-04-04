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
    "35rN4SkNBt9NSVVYY7HfUXZvqxrBut7MTviRHV3G2ySGdgMDJUx6sGfiXmxxCeuBZazUnLrJFmV3WQHYP7gAUjPy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XVXEwoGHfeCT7pDEnq6KYZHArodzzfdnt1C9uMhDugsUGnUVrznHmwhA8PXmBWKg6bBTuzkNPtAn6bSZpeZjJC",
  "key1": "3zx6K5B9oe9veVtCrqMFZoK9s7Y2rzxUeRvStoQTg4uoweBmVQbnSzuXSXt6cXzAfrChmcPJqEhkyV3gVMphZKg1",
  "key2": "5qou2KrVCriHTyTkLjv2T5Y5duwMjkoBMXRDQR4V6atKXx6AfsZfQageYePoiSpLRZr3Cy7cVEQKC63yn7Dih1Yk",
  "key3": "5zsnfeMEQXNjrj5Ebg1jJudKcDyYNWBV6M4xJ4DZZojv7GYfSpgkPpzCANB88YxDxEwJazVPtXm1j5gS5qqaKiMG",
  "key4": "3CccfmA6d5Pna7dGoKEwB9xhV15hN2viq8t9oSAV1wR4RG8jQfWkax12PBjxAucNMqqU7F567qoYTYAJDkVH9UM2",
  "key5": "3bYe51S5Gt7Z5DZ7MCcUAwLYxs4JazihEQWbCVH5iGYaxKYnTLjSG7Xv43BR44S8mgwYc8t8g38JyiE43pMBz8co",
  "key6": "4YhuJjAyPqmRYW11FczXun18j1HK7G6xXpDaV8hcgQSA9zTB3Jc7ritAnAoXQQgUStpDJ4DzkkRD5AhTfmD2fMVJ",
  "key7": "3PK63NYCTGaNC7TJArJG6juXs7DWhqJctk4X7w25JHgkPcpoTJ4vE157G3FsU73WQSqcDWqfM1E52xJBVREvHgWT",
  "key8": "MJvheLfZdae2BmT1xQ5E6EYDXPouGmsgWfyAQMEkTmnRpU8quiLuKthUYu5DrAJURQDtxFbA8kvjGnputESdnwK",
  "key9": "5PR8bqkYccmzBooaSwg9eMutHtnDAinAuqVd1EmGWt8ABAtoGdyhFMgRU27wUAQrjb7j5f4mAkftj1EAL7h6vXCW",
  "key10": "3jJ32ZyMXQFt9fBPi3AyazoF2HdvfmuHQepjbBk5Vyg4JxiEjQEFVqaASCBokbCDdBb217w9cGCuogPBwadputL",
  "key11": "5agSmFDXNEpvVqTG4hLZiRzriHP885avXM5ycXohEPg62uVb5DVcxvQXo77EuS6oArwAkYNHpP1C4RPP6Fks5tss",
  "key12": "UbUpWkc6nCGT5DRFJeNX6qgGY2Dqytm4KtSxi3ZrqwVkCUpdic4dtjPufHz8kxupF2Vn6NVapTooRp9a3P89gHM",
  "key13": "xxnrX1f1v9qXsPLFaSYeUW3D9Sj84cuX6qp3ZAMpGNQNaaMZbdJ7wwjHobtyKZ8K18ycYdnWejarcLjWPFNdGqN",
  "key14": "TF5sJDzF9mnmogaCA1oVj3upxwVJpqUwpSW7FiFrBU96k9pf71Tv5D7QvfNjoF7ighzmZymDi29c5MjbNjxnmok",
  "key15": "5p25UyG4YYL6m72Bkkr3a4JkkmFuaurEmg3sFRrYSnvysKtXsFex1Mwse9Darp9689ddWhax4xtiufk77PhYscpc",
  "key16": "2FYF3ui6meZK6herJunW2pazz5U6EUYHEQPBrvzQkew9Kf3UL9SHFKxqH51kFKG31MsoBTp333eRCRRMzJKgeRcS",
  "key17": "5EKEWxYzGta3DQzWkJU6jdBvtXW4SXJrFEWv4Lmm1ZZDbWq916kkgkdMmz97SYmhNJopya99HRL6Zv7cvycxzb1o",
  "key18": "ETbviYJzoRBycyqpSBxTqVa3yzte9E46pzSXdAq6yomnTQKstDVEXs1jT2cxTdm926mchLZd25xMr9P1Ktrxvuo",
  "key19": "FsyT9oVVmULxwGntBeJxgHw5qB8sKdBeiAZDYqHUFgDDc87xxDrbCR7BnFvriahJvbv1Ac7YDMxc7jb7uR446r4",
  "key20": "2HuSBFwzabNVSwF2LGTVWomi6dLj5Kn9WvS6veWGrsfLPtVprJ69q9mvAGpQrqDGMfc2XZTSahGu6QdsXxntnpSM",
  "key21": "4Y8FYKWooYyeVN1baL9QX2r9eBUeyXAqYiJ1Lp2iPTdCqfNZvZzXXkvgnzhLmeWKtsb4ep7MgoHfv226GciZBhde",
  "key22": "3VfWfGQP5TSeNjgLqLTCrfot3iNy9cBCdvayR9XyNRca6RmkMib4D2bXR2xSV7u1QX7KbR8s8nkJrzTs3HfLCWeE",
  "key23": "62NuREeXZD6CaKEo8jGBJXEyvoQfLuqAGvmjXLzPYUqLMeC8M2cDGn6eNvpNnRL2wnpNN3UzxA9qmNoZA1Tpw6ZV",
  "key24": "2hvcwv3rsyUgfY7bkmUNgnixxYmkQkFUW6gMCFNovXUsXtynJkZHDKUT6zejJUopZf2KPedex8XnVLnm1dYAbVLH",
  "key25": "ApFNp1r8mkkz4wVAA98xZEQcSTup941jb15g5fuNiNoLYty9QJZuvoQuUApPp6PxrrSZy2jcp7EsSthiNYXnWyx",
  "key26": "4huFvc1CEKyy1WsNHL1x6inUcEDKbpPKiiDCsj6gQqKD794666reMwnRRYGPqURqYHYyVHCH8ctBAbJrBe2822tg",
  "key27": "2ziNFpgmKo7sZiFANWWnxpfpcSHN4trjduTAZFvf7NVm1r3wJL2L2n5zZQPaB3svj8sS6uuwZRZJeceSrQxbtHdK",
  "key28": "drJX6ohxu68AfW82BBit3GHceMaMDfTfRwB4ZaNNfpJdM1Mzez6RWCToxBZXNT9rA8Cn4Wf5ZTiRVur5NKVKtwx",
  "key29": "391PamwienP5LDG5gcZtX5QGWgMr3au4u3Y91aMu4WUpMgxEvV3LXukdzvVYJefHR3NGrssnuyPQmpGU2XNq6gDk",
  "key30": "4JPC8ctqss26mLCxV8h1Ls5JGpzF5R5rJnncUREVAkVeW5iWBjCMGCn2xCj3ZYKfRSG3RmeJkGSGWYuGfzhiNAqf",
  "key31": "2mvmSjqNPUPdNZ6Appy41YoqY4LqBHLi93pVNpzoWxgoba199vN7MVU84v5gjUk3t1mMzczH53GUP5LxSkoqYcPw",
  "key32": "48UHXUSzaHUSQU91UgmqShiE44Cmr2C9U8KCDEL2ERvKfkFYRxDskNYPRvLXMZLDNxa6EYwtshznH7zLwt5a5uNS",
  "key33": "rm1StKKSeoNmu7C9hVBnbGQwEppqeciXbugH6bVKdc49U9JCWGs2YRhiXnz6X22Q3TG4NDyJJz3JFNJnf8pjoXN",
  "key34": "5t4wHb6fYeCfCVbgFRB4K9JjE66oXuAjtWP1nAhHKZvykuPkSFupR6SgbYGmKYqxLbY65N9wu99rPZcxWdFskXa",
  "key35": "44QgdBpVrZVEWmhyCMcPsYJ75GDobLDsMk63EPMhvA7VdQxoAxPNPjfYa2vc61zbcQkyWW7zcHuJUeu4hiYQSwCa",
  "key36": "2VRg6FruKtStp8Zq4xZvUvG4ZbMsrQ3YqUto7nk2jSEEEnrxRsGaVBG89j4DpKg23YpFuGjcvLFkzFBGKPnrzicA",
  "key37": "w2FJBZeqVnEa8rsMWj13KQ5zzJiTrdgvD15KmsVEtoCwUR13vdDmzjDzNKRE1LqCszPPDKESDh2NopSL4V6Jhrz",
  "key38": "36jPWtjGFfZfniGy2pwJY8eZMonoTDeD1qrNcWPXfdtvz4MstZjMYPKNTK6aSp5YQCkbmyZDoKDBKrTy9zWGaRTM",
  "key39": "4GAAaDYWy1kd3QFa4taWyAGs1vUhG7BL6AZtpJcmsT4oSp7afqZCVRnZCjL5QsjR7kHzpCzwgEMYiNAqeTwq8UZm",
  "key40": "3iahktwN3TZcoYz6vqbMMDpXAnvcGzJYVt6wa8cXhfujppDZ3TkZRdzYVJVTrfA5eGdHPwqGx9nqhvFncPQMv56N",
  "key41": "a5dpuYv8PdvB1mptJSpFx4d82EGr8zmwKmUVpvXgnb85i4CRCVqazvEQqyxjw2T6Hn2GtZQbVsW7bhonX69CCda",
  "key42": "42s7WBXSG6buuvBdWirzWDgyD9gbHRNDJoFmUu1uQmgaXxeC7gnuyoioEh3TKYAzAUoU7pY6aVvkEPxpc4yyWvZi",
  "key43": "3jVVHPkLAyTbyCwJEhBJZqg4eQ9Rn3JmvyJjAnXiNWa8PnhxWAAZuxG5pnvJg1w2tJFNjTq4LvBBtnNmukAibLic",
  "key44": "7pWnCyfHCYNmBLT6MUeNs7gDybHj3MukoKWLmn68T1wsnafzw9M3TasdL7J5CQXCGQhrjqedpcH3mJDFj38HVkC",
  "key45": "gxZ38oU6w3KGhCrJhvmRMHch6dV6XA6UkZCXyrrCc22vKT6fc84ZMRddPhEqifpJc9VqSKESZs1ZGHuxB4HKSd6",
  "key46": "tvVaPjK47BN9Ah86HNRXU12WKJ1Q7xU24woVszi6sTrujGSShmu6ePWSCx9uWSB4djEDHE5YKYGy88eBERA5nA5",
  "key47": "6UKF19Rt8HDzWQGbYoFws1LRFTh8LpfiRG1YxY5XcmTUiR1LN7ANCekyWb4AwvodEk8TsoheQD8yF7dEunP4Aqz",
  "key48": "5Yt8fVrtCxXxNTnbpaAEXaKSGdhDh9B8YcEiCjrCwprXd6m4JaEfmQaZvfcDyJh7CM9yMAqauGLhHmH16m3kW14M",
  "key49": "5KFMgqHFcA2GgeGo3u2ucTL1fLRzWX3mKibTHFWjPJaRtby7faunZfkYQZMAmuxwJCbK1kHzkUFSBW5h3FztDqfL"
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
