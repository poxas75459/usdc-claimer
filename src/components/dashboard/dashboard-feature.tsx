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
    "2uAARngAAdRYMTmGMT49Gh75y7W4t5r4aKub8Xdh4kkjPq55Bu8zN97GjmSSDkZw6f8ASGtnefaXxKC6fscPRGeD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rtPRqaWV63QUaDj3qCqoJdvmCmsw6TsDRKcZ8e3CMrAU9FnzdA9cNybcxUh9y7We3AYMV6cYLeLWCwjesYa8iS3",
  "key1": "5PY2Fe449i4rVSpC4VcAADfd9hidHvwZ5Sdnzc8yoJSjxMqHKhvVq41hMkCDqxeXfV8r45PT4rDuDrEg8U4zGK8C",
  "key2": "2cHsTyZR84qzWMenFPCwLMijiJUHVfbMhSC3Q5dKR9QtD1p93J3UiSmD8wYKY5staidTWoSQqm1dhMY4SaPf1C9P",
  "key3": "5AYT29Qh2kjWU6MTkvfoPj2a6DkiBJzbatMXjj8yJC9XDbroRXcC87iQznhB6S3s4bcqJcMq3jC5qLKDh9GKJKn4",
  "key4": "uASnwV2WtUsqtLqnhn5wmtrtTCXzZhHPUHFEqberiCiDWuNaGiNKF5niuZd7GdDnVe2VZE7gscxcXrQ523gz2Wb",
  "key5": "5YUPYJrQ4ics6JBn9WtdtEj7iPaX8xdwRjksFb7amrh8JiwHhbV97rmtxptmGC3wvJuZBQNyeeQ4g8i1LeMSdCZr",
  "key6": "2ya2UAbaBY5Duy4WrCeYtWsNyBxDTgudfijYjY6vuSofH8Av6voqftfZFMrrB89JNnsRrhsE7cbZKamTuR15ZeE4",
  "key7": "4WzfkHYQJLhQ5y3CbMQwg5spTS15Grik95StuMKCVmbjTBdZhZc4gTH3TFd34ibqAn1PtHGNarDzhMXPfo2XozfE",
  "key8": "w3KqvwVr1wUTDstd3EocyRsJPkubqLvw5gM64UcDVS9PNttQAaZjbh1LbCxvd7RZiewnEZFDt7DhDMaLCoRRZd9",
  "key9": "52a3ZfKr4acWGcif96AAKpgsbENF2TzCdascn6us9ecfyKs1pSu3ktxutNQSSryEUoTciJE6JwaZsisafZHrTxTd",
  "key10": "A7Hfr2ACM81N3BthpYfpRhDADiHCcbqELGAizHFst8iHjXeieLyimVmGm2F7wYgTwDfcGMfAeuRmPGnBFiZALHN",
  "key11": "SRgwZXYUqndGAJnLHn1GmdsWPgLA5ebQuN6MPVR5bS7o3UmuP5JZ7K9Ju61vDn2StRWH5LjtPRSetTwKamzunWm",
  "key12": "3uPTXVqBumPSH6oqHfjF7ibec4CfGwfM5QZ8DWhf565W5Yq1Kr6WKErG5dY8WGuuRUPzmRYFyd9ixLBk8iZCJj8P",
  "key13": "38BwkZNatyqJ7iAEKk3gu2PGYQMGZ3t7gzrL9Ac6kaVBdSVzbhSPSGZMtBbiandSDdTYFvU9jHZL9hNeaY8eHZCp",
  "key14": "54fjEtsJ11MwmebPVAL9CFJDJWcqe3eVtcfvJqmhM9Ncbxz87spkFE9JUKyHBt91L6aVtKhYnirmkef75PE11nfG",
  "key15": "4JDSaprmN6A92KyNMuG7rZuWEyirVtNzFSSE9Ab37dZTAF3aktSMKTEVcfarb8TcPMhFkKFgGyCnReXKFQfs8WH5",
  "key16": "4EVS8WLnWJT4RWwHVj8WdVB3vMFTjjnPPNokuRD6947GwVTXjncoMPk9bmtC9auH1hiXXcEhaZyLCKE111TxG99b",
  "key17": "ihe8XkQNLyTH698KPyJaZdQa1tN3QHMdLPjoFLbqKggCiYLAYd35Z9JNJjFoYRP8oW5ctzoG6UXcncn4Pu16mKp",
  "key18": "4xeoHTueCHjEQ9ey6ejjB4x5Cj1H7z2wfZbkq5P9asz2VXRwACLB4aMqgVBJBRc5j5GshyY3pVgRpggriFj1d7aa",
  "key19": "YTZri3cnsxmtLxx1qyfAyK7xp4Xsu6e5ZuefAK6XFUhbi4whUe9he98QibJ5FkBFYACRRhxCui9gKam7duCyrhx",
  "key20": "aQtxhhwQYeeehi8Ptzuzx9cq5iviMDou6n89oNvpPtMmcGqtUV4E2eAP19tGoigS8ZgiHtuhbhX9bkoHh8g1CMX",
  "key21": "4FMshG7QAztfvYsYYEvc3UgcqsSUm6xZh9Hr5mWGmfw3RUe36YqarZDXf9BksTXWbatPWuTjEoNQoxQyEmYKpJvH",
  "key22": "4MHAyp6J83rnphWNo834R4jRkwPneUogfcQozEK9M7fYCoJtuEmPCape6UhpcFqqpvqVho7RFqd2FpgizbpRGvWe",
  "key23": "5zxB5NkRAZP5SZjZ6wyKLgQrE4wPSkVrYWCq3EW7K24DFCHYRdibjbLfhJhCreXgxmnjwyZV881rWRE4SoVrJ2KS",
  "key24": "3Th1YoYH4cZNFrKvHTHuXehsj9Spxgk77GtkXaPqWVZ3gQELth9cof4KF9MpjLKB9VZdPdJu9WAEAZRsoNqcQ8c4",
  "key25": "3bXMTrzMRYh2x4Q13YAQnzcqqLq9vXjsZqQ9X5KKCUqRroXV5sUBd6nZfEeeU9eyTGF83Qo5sJRHeQi4sgyYQonM",
  "key26": "FQZDz2gr7Q5x3q4trPASY62oJeSo1of8ZZ92nMZd6wVJmgYZSUuLhm4Z72uwEgCoB7y7WeLoQBtfUfsKeiGk6Ez",
  "key27": "nAuaLoo6B7NzVQuaGxcfcZDANsRXTrFkJypaS2iZUonABvhczYPAAyu1FjtsAiQQ3rF8pqX7tLijPNUHR1ZpD1D",
  "key28": "5jawMYLicrdwQ4WgxfptE4CdWNZVjXkJST3ohqpHAnZNyTE49Zys2SZ57Yx1wafZH61bidv8GFDy7MeN2GMf51cg",
  "key29": "2uqfkvsScJrJpsKuMy2HRqDkwTJEuge8x4PbqyF95sLzK8byKmJ1Jg4NaeWt3ygoe18RyQ2LN6Q8zCfCNsivzYKQ",
  "key30": "WraKrxrrpszNfaP48wTFtRLLEqyHNLHeTsEi728TRbmWQwzfVQXk4TSvQCTqWgRL1XcHQpfF8U7NEwC6YKDpnAd",
  "key31": "4cptg7gv1wbCAdjrJZPVWLUJdMGYn2wRG94w6tS9cGN298eywhZUvp9V6k3bCUb3zbPVe3ebdBsUJHGhHtgUVA4u",
  "key32": "3RqT7TyJinJg8frBfKqCYoei8hZPNF73dwvLeFXbSzK2tVKquPaEpnUGSCmhf3ZbAd15CWK8A2prgHKYKJWmKiYG",
  "key33": "2mCTLRSq7KBbaD9Uahc6GzdLb9nD6A8WgoJQmYVBZuwKYTcAvEa6wAdomPe95SPc2HX2YXthF95Ux9Qg4E3XSD9g",
  "key34": "2xVXmf7JXRJqjTwost8Y24ZygyWTNgaPVcqvCKEaJFH4piu5P2heHfgXgr3NRDAnbM7f6x8yRxfWzkaFQiXSVHH8",
  "key35": "2d7SGFZ2JBXckbm1DxfLVio4MQGsqFHuJzhYkTqmERj9cccf54q9X8CjVEBbR1ydYjgDg9Zm3w2uBcrnVdEezyEw",
  "key36": "bmYX3fwC6P1P4qcx4udYSusmrkRVa5VvnBzfacZLFHaCtDjCPaem16nzzbN71KfbVzoEoNvfABg49KoMYggcFUZ",
  "key37": "5FKdN5CWbEPL9mGDHnHWC8A9wTgo8si311TfRi8ZxL5ybtutpsd4PCYrAVpVcAUMZ7REB8QcUnApqYNZfL5hqwWg",
  "key38": "3txmDkmmR4uTk51HG5DK2Sz92rznArcUP72jX7tjqjTTHariD2rASKXcNoy7weKqC2Gy7fVKyg2qiJSmEfAPuc8P",
  "key39": "ynbsBotQAsKxvhi5MqHD3CTnZK7exmBSuCvCLwqPw5pDiQiKRVjvmQ4Wrs1yHUyDpsLhoSw68sy6GrbzLLp2dTr",
  "key40": "nzZkmR1qv6qxVFf6uEsFSekU3josmaWP1CZbdnmtofqPtbJRoyv2KouVk6YGUu3CrzP8nfeyPVgK4N1KDiwW3Ga",
  "key41": "2JuvfCessedD31W6i6HQpRbDHFVoWQrbRPGFYYkbMerKESv2VzGuNvHn3UvLz1jrqnMgBQW41tsjpB97RdE5pXu7",
  "key42": "G8FQnMmewyHTL1CR8VjnBuyGbcGefo1V2wqZXSVd9yZeDykF1R76fCuWo6DPkUs45E211XhAk9YKZxuVwLqNVKz",
  "key43": "4jexvGtd87ZzDbt1HaG7tunfJk2jDgvh6QkdisdJLrdWjoFsWn11Gogdee2QsUtfMkxsYxnkh511NoPEBDrLh7nS",
  "key44": "5XcrjYYAk6svedZFVmeCDQYcjgpZb4bTwVYwE7f1KjRrBuS1DpUz2rsqhqexQSy1XpQBt5MMxiWosuhBnQZTrQoj",
  "key45": "5zFVhUQWkgjrmrZG9yYeRcbeQm5FYugWW3dQ2KhJyBsCCLMNiYEXzJWEgjZR96hfKvRSq5dzAxfFWrw2HFiyxVL7",
  "key46": "61jLN79ZFrLrMcgHn6ATgMT85bonvs1Wt6RVkckRCf4CkNbaKiMJFU1LWFw1a6b99gamzEHvEkkhnXMCuoHRBLdK"
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
