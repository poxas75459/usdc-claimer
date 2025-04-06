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
    "4mqD5tFrDhNXQkbrGyiHqT8nXb7EBcgML8tL1SRgZJv3CQ4xPyZsVzm4g3berUshL2EezXAra5K23B7YLD695KdU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56k8QUPNcQjqZGvJGoXsnRR2qufDmHSSMovvf9vxbwBE77zVvBNL24o8GAbryG5nHEHVE16JtFtQCjPTJTFFWtz",
  "key1": "4E3mf3c3fFxCxzRrKqaRGVF3vZfht1APeZchsm4txnL7ie9yZEZ84RKWWY6ZLFqQVNCdMvf1LxNpQZLC2M3gQtEx",
  "key2": "XkRbA5DYoQy7fTrcvvJCmoY6H2FgrYAoiQQbNUp8SMVPCAjbtJNLG6q4WwEyibptsJRXH5rfvVFQT6vdfJkgBPg",
  "key3": "3mYRTkYB9Eo9iwmnPwYVooVLou7QYMpYUXS3Z7HLdKmCvvuv8hJe8wCy1iJ2XaPS8bK3Yw57TJmrCkyvHMdgJKkx",
  "key4": "5U12rTEBxJdSUpfcAYXfREgWNTnSH3qqpGH7DfmqPKQwCE6a8TPPfJqFEG34AWS7xFQLtf54R41qkfnkRCMyXGFU",
  "key5": "wj4uyuTn9E6M2NNYp4exYkAUVyiHRpBdLGoDbT8F4JyYhX8BY7HNWtpJabW2Pm8v9JSpmZFpsAe6eGY55oeTHmB",
  "key6": "662vK8aTFd5D1CwdffJtFuzGdnBFbh8CQRQ3BvfKhjpd8YcpzLXREQcSoU8Tz5DWJYdzBamg8ZSGs9dqxQysjdem",
  "key7": "3HDtC4tLNdaHiAehafUCinN14bU8ukUXE7Y8z8iL9hsf1GdQZ1GQmeveYUufb6Eky9gZGY7BZgf3WCBNRYSXog3z",
  "key8": "SR7PDPuGUWPwDfCNzewcJnrA2iJqwDKoFgYRippFv5AFV7afWqQ7SuHxZmm6hLkKgovq6VMaVaBKmxZyJh3JYcs",
  "key9": "5WFy8Ve97sF6Kun2AzeMaccNbcFjMMK1JyNcwx4zHE24J7xhu5Euv8Gy3UdkbTErGXXF7Fufo2i12GcFeFKddLq5",
  "key10": "3xjF692UzhcWQFELTWwzuoc7WWQLhpLNXefKAcLZbjrLMQ5Ux9BVSbVp6X1pcNz45LMpUYE1dz5NiXYKH2tHTS3C",
  "key11": "5hmBeyHvWreXgX8ycV2c33KixrfuYuaE1DGMLphiwyLspBSfg6iJnxX7ySc4QAwFMYsdAuJx5VS2QdPhaqMivZWv",
  "key12": "5zrMZ6zKH5RbSzdPwRSgUDdytoVqJsJCg4vbUpBYGdHqetjrFYUM3fsKXAqV4iAqL5sR8Gvg4XA3boH9bhDrCSLB",
  "key13": "4Xdu7m7HBqiTfgB5vyaURJnX9Ywe1wZatSY7hdCWBc5uiSFEtTASs8smhQ9h6LnGkeVLxr3sHjLUxJEgDz4RStpX",
  "key14": "66AGF3MCh3EZhEQ4L8cdwHS9ZSVMgVQ674CWAYmcC9taznvDGPCLp8yFD4JKoYUnjzUQbvxCd6dbceM79JEF686V",
  "key15": "2CAj5Hxxu5hvzS5rtzkYhCkojL36DVtS4sHJrAzuousNyR94hVE5tsVfpkGRe7avWuFPvVNPA3TV1krq8nUFGN4t",
  "key16": "6615xvsHEVLZyRECh8MUwSY2K83BpDYKUENNQQRSydCLCNvLxpTpEQ2AxgLfFQ8HGxNBfcRayXSKVddD9jSwDUwk",
  "key17": "49aDAXmjfZXSczMk5GYphzwLVkDCraFz46Eozu8YMnNhbquTAUxCFhpnYj5BQBLdpveWr1sDLDTWeXKUEroHL7LP",
  "key18": "3RHYgUQT5qDFazEX22YMDmEvJ356sXrTFMoSWSxKNxhM9kSg8E3FRZ1KL1A7nczZTfg8anst3xsTWoSMzM9NHXv1",
  "key19": "4XXLkfUyhZ9DCSy6tt7CJoZFj8FYXPhmtLVjVkgZF1vGasQWxGrVXh5dkxBCRPB2N4BbriaXfKMWkQ7HRhb3jwVu",
  "key20": "5Kjhwx4fxq1U8ZEJZ1onmPWTvS63MJSRo3rg1tyMYNEWJ96R9A3uCLkesJtK3ZAx2sPYGYBdYSsfJZE8YJwfsPXk",
  "key21": "uXoNJFz3n5m3xTSYDXgVFCb8Z3gbmq7x66i5ndkSS5c3X3to5bavzQN5tHPe6riSsNyGzubePW1fPMGuVefT2gW",
  "key22": "5T8pE5EZ1CNsTnY1BMZnTuzhHbidR7LFRbypCXCNiNcRGGZYcXrGW3RWypMGquafbTjvR36Jngtk7DUcWtSCZ8HA",
  "key23": "66um2j2Vg1Nfyu6p6a36Qsrj4AhsFsCWFQ4GCLDQe7eBzzNtUDvVidGMosA6twtAguVLwvbnn1G6oMTiKazTnJ4v",
  "key24": "2LGRrH2W5G5J7FAR3EL9N12f2GsHueEC8KYdE1eYCiZ4xfxMkhHqgVEqp7ctQKKN6DrWbt7RcMupXjQ8nBQF7eii",
  "key25": "4LaX574vWGLzn1kdSnX4ysgc77DUwabdhj6PgRoEBUpGLBzhbzigEDxKethm61SD4dumJw2AjRWcftekqaBYki6a",
  "key26": "4fVL62iphXAKiMPDvHZNEmJ4PmEHH2e2cSvnXtNDsE2ws3SE8FwPfrANZYqxeYV1RG5Veaw4LPwgX78xvbXzXXCe",
  "key27": "4PT4yW4MoZucqmn6CtiiRnPodPTJm3EhaAn96AzpEqw61FEfktX4FT8ThNoWmkKc9e46ZuQZBbdnBB2MszY6HE9J",
  "key28": "3ReYjXwZqyMxRMRxHUbm9xzkZenvBeNwPsas1GZogQQM7bFvxF1vawM7XLFmKYa4FGaBGE7hCyZbhSovof24vHhd",
  "key29": "4AfsQg6AghetVggPWWF3T5oUWAWzR5hpiJWWWpedu1ZzS54gHjtnAvoszjjQevR6jaFCji1sRWzJeH52XWKoJDUB",
  "key30": "3X7CBk6Tozd4ed53Z2b6k6YDPFE1Zs5FhqhzBTq57FKjnHK2RV6QgH1udAaTT1NEqiyQ6pimcWtBCsifHb5BWtp5",
  "key31": "5JUYXLHqx3RRqvB1R4VB8nrVXcrPwtdKcxvS8zWkS9ExvNjZH1QLa1DAGj4FTBGcM48AgSx6ESwgaSmZxRgjvzYF",
  "key32": "4ECexHS6KT7YeU4rtLnCjtR4XGAp6bE85FF7KSMkoQf8UvXRvdet49fdDZjrkPYYuDm2Zcmmcbn27ThstFwUE6qT",
  "key33": "366HFxCF4DHG4NKEPMLAGgasH4nAhM2qoTe3n6UyjtDxHVWHji2wTjcZM3aHuGWm9Fsq2HrC2YTvGREFt3RScxpp",
  "key34": "3E9EMUR9rY8NfZkUZtqAufExLLhHyCGXzKEuHojzZhGaB4UijBJprGhDmU7iDVYBLq3uwDttdSphcMDo6SeFywtt",
  "key35": "MQWEwLgt919tYwNSEB9myz2jTVaX9ZXJUXTa42xWT6txBivBu3WHXQj5gnrDP8Eo8S9SAwZCbmWvgUc8TKs8A41",
  "key36": "2ceLWJQg3AcrFBGWMxi2TyjRYaHxKru1HY7oXvFG2HAT4eqDXhXCfovosGSukUL7FbTouk9QQobvrLUBdGtLYesD"
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
