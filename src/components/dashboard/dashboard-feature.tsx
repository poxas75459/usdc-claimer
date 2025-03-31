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
    "qp3Z6bYrHbu2px3ZRgobtNi1Dovq1pWZ9VkSPnQ59WJKDwC3KzTXTYZd9kyhEa1aFNwbgigjfygWE63XSbEaDrQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25cS3SZWTNtyMveUV7qCd6xkBE9MjaEMYcKru2itq2AeuVTchxwL66FaxcsRnupb3ahEyJxc2BkFy1ULuh4LHXiF",
  "key1": "3kpPHJ4bRn2cRvrADZJfum1cHZ6Fq9VWc2ro4hRHBVEBSv4hEB2N4gr2U8aRGysQ3tPgKCrNYtJHeey2qNDPbh16",
  "key2": "2gA3qRQ3G6g5jADQkDh3RNgNCf4ymtHSU5GDFqwAj6NHjWPTkDZy8Pv7pizkK22HbgSx1asYDw4EwStmCjoNtKg7",
  "key3": "5pMSanmnxzDzmf5tLwV2PZyutfqYKy6z3XaU1rLoTuc7escmfBbXZqHm2xez1Q5ddE6X75fh2RoCJ3ZGQ5LfWLh6",
  "key4": "5Qfzkbwfsr4ocTNwzyjqPd4HLvcpZKmaiEyTJyQLgacSNsS9AqA8UPyMwN2Vsc7VK9pkJPA6EpNgWyVjodzKjpR6",
  "key5": "2wUrD3YMQ8M5Cxau4XC4qgaQHDtzZkKiuuGzZXZYM8BdSG6XBDwDfQrxBkfMoUKRpp4jPLnn79FWBCdEUjTQ5JkZ",
  "key6": "2ErxFn3p3QJCMzczmJmqQxhsoEonGdLgXmEJuHp6afRjssNqtAP5aWQ1t1DXJT9HoDNfykgDPvyd7vANxvPEiu9G",
  "key7": "5phGVdUt4y9iWyhXDngYDoBf3zHjHoM5QLz2VUxgoQ67utWQDzfXvr5yXzZqhj4bjUapFu4WSTEQ6ou4c46gRZNU",
  "key8": "3m4xQwZJU9myKLoRF6uaZPj3QwhQxifeqieqfHygfCvPriNVfoRDYVAG5Yqq4vLJPpdZfbFq7MJhyWq4gSe119vt",
  "key9": "3pQSv78R4P4wq9HyLHRqVojCkKAat6ieLh1KNdMX2P6mTmbSQL8LZbjhhEK5Vhi7goZp1MRQKatSX3sAxoxyWLT6",
  "key10": "5R8xdtf1owxAkxpBZj3LxZcuT8oBVQaq54YsYaZ7g1o1etyrFe4Nk1pU5A3KGSwPVUnTduGtDrNV8RRPdWxLQ9Fr",
  "key11": "4RdQrbrJSPgwoDe9B3564S6becw29waiBdBHm4d5EdhFHg1PZJo1PtQ9dFFVz9H2a7uYvb7PdNb16zYZ1H1WRxYd",
  "key12": "4v5dXbNcsLy8rAUdP8RoTKtCKFmpTvaVoh1qp9VhMNRDUeJEzBSxbBWQJygwovHoE716yU9ktaqVPjTpfU4roQj9",
  "key13": "2YqrynDEnvDJg6nSGjEzMDp4rkygWFpcX5v4Ghd8bwbxAB2ZH47LU2FbctmZtsrznLCuvjzNQgmirQoSamAuHmLu",
  "key14": "EMgybMJoQEuu9oHgdfoMFHL75zoRoVf9p9xPPPuLw2H7FFZjV5xtXWNvHdem19775vmhLEUCmeVUw2mAa9wajTN",
  "key15": "5YVwsGsrsF5bqfTgYegN7ZoDToaj6wNYC8Qkndex3KeJKzLYbeWXmMKXpzudXzmmcqh6Wo1WCsaaqY5VJkQjYBQD",
  "key16": "26JGAhmHEEredRkCiBmXhDx7KwFMiL5353r3HEMw4WkYWPxFQgMnLYaoyLMm6sq4NAs5HCda7dyae2YkGs6kVJ7K",
  "key17": "26X8qG7wf3qh1FmNxp3RXZsiJuTYNYSHduYtJjoqSjWCh7ovyC5fc5hmiPx7ZjWBQ94iYKkmzw3DAyWVENmsGAAL",
  "key18": "4L2jyptmMoR5Yc1Y6wCXhaEQu2iC3e2FMSGgdAZGJ1X5khQHDY1M9GGcPB1LGyCVmRQvKF6z8vEHJFDCLn5qXzCr",
  "key19": "Kz1zjzRyfHojriAkM8PsdYfFPqGorJWGFMFmDQLc1EWE1DTP4bHAVQLmqNnsUeGLaMRnECayewdVvy63XbE8LYH",
  "key20": "4Q2srAHp2GLi9Jqt1GHN8Xzg4HUAPM9vTrrgW1MPvRWMVWeAvFPcGqwfSi9w7gNNPzsqoh4PgbPgWwpc5QkbddYt",
  "key21": "5JyL8oytEyvLY16gvSyzkiCoVr2qgamEFi4jVLPgvTLoRiUWaPXAUT8xLbTEMenuxxm5c6DG6evJcmArxMBkSWT3",
  "key22": "vWPPV3MdNMBsoyXLx1DXmXqNXwXWLZ6MAkxwzTEtifyZqrTmitL39mFrX233NwSB64v9vgAk5wYFv7YNLzwT74h",
  "key23": "52szRzc1e2Wny4PRd9w28vKSCLtobErNmLZGrMJwsxsyn3emMA129QDDAAq8SPHfKTKfEYK8oifGMwhGT5CjBfoN",
  "key24": "5iPRk391ZZp7nmyEhYSua4HdSBWAW9UAyaR6aBy6kCdM2TEZ9G13AoaYwGncnwofXmEgn35wvyEtyoTvHFcEU1G6",
  "key25": "qQM8yEkQtNW721GSHSqcaKSBcgawRYdxHTsCNfz1ia8yBgqLUJatbxBU2DhykKPtapbfJdprnfH7Mife6tLzuD9",
  "key26": "2KRcRSWgPncgoeME66qdaX5ggXSF6L1B8WfWkoPz2vLNp47rCUjVCR37Fzy4DSNMKvmDAex1Me48SgdoqMbRiada",
  "key27": "4W53GaAiNYjzBJK2JPTbr2ZriqRdGutHVYQJZ8yh8nGZt1YVebAzuYYQckzGdVLnaGkf6cp3nfNVimFKf9fc5Dm8",
  "key28": "2ba6mzs7J7uFqrMapmjGrMHNbed4r6kdffmraG6CgVMab5QuXJcVbdX8HBj6hiFx3iKDsp1fYeqf2kJu3ZeWdGd5",
  "key29": "5M1eS5rw6VMuQ4Z5fj1Buz9LnJJvzuoiVEtVbQZox9ijsFiEJGe2p5XfSpArsJffXfxwDAEdFRnXJvu1ckWNGypi",
  "key30": "2Af17QwExQ5W57kZxkwQARpyE9DxPMPQvThfaFyJqUVtxKWCiEBRdpTnTzQLFynYGuJ18cxmtziuoZs62UFiCYWf",
  "key31": "2KsiZEhaMBqrcH8ChZyDmoD6gNTUnEHmu7JCZDpsDzZue5oGBKF72ChRwrB8LSxs5LcJfwmZjqr9Xmrh5Qyf8HYg",
  "key32": "55nqkrGRC3bB8hSk2NC5YGWEKy6HWGYwMNqVH3jKZq8x2M59mDRmbhDaKsrBZVsxox7odvMQngcQeD8qqx5YiQKg",
  "key33": "459qmoYcJgJgKmsyQ9DAi3G2WPaSsKMrZ2W6tnFUjYuj36bdvCkt5RygB3eKmi8o1D3CHCjsZVM9tz2i8akhAncE",
  "key34": "3K8PTwJUjfLTfyxe1H4uQ56iBxau3gcEn7mCekzMk6AM1YtMPJJVZeVNwLk9ZYQ3fjY6wEQ42KzF4DX7HpV2kLf7",
  "key35": "2FwagMDMrzFXHY9hC3iV3wBHfkmxd819EUy3eV53cvZ4sNYf4RdXBF2Y6MJHcf5wLxpZvfcKoSmzdgppuYPUAr4d",
  "key36": "NFvFSUYSArnrbQeTqeX1BLpcyQ29NgXWMF3WmmbbvngFkjxBXCj6Hv4T53BpuJxxyTgWTz7dGSbRkvsTyHmDAj5",
  "key37": "2dySR9NGi1oogd9cDb2DFxWXk19UAVR2YR4mv8x9B7K61vuXExQg2tWQGgJ72GmEzQ11dmT14ZohRMngGbkUhCYC",
  "key38": "u3itDijdbczavNUHB16mNQV9yJPH9KV5s2Z2w3HN6YKQACxWE8NzK8g8UhKZLCb64CWktRpJwoNakTmsEnUqj9z",
  "key39": "XbBiTaERgPuyuvzqkpEJqgc56jyFhheXDmKMRZtEos25mp9rV1k1p46wUTnjNjZDbf1hqNGyYm2HVCzLJ81NdWF",
  "key40": "5K8wUMTeNesmR2iccq3LaFAAawCJGazdpwH4Nj5dyputggM171eirQwq9FohuvY8mca3RAyZrX5UUngJt4f9xNet",
  "key41": "4A259dB7KUGbSRYP9syKiFFLETSZVPf7hd1poTxYtMmu2DQYt3ejgxkjTNz9BiuDvwAAbLAYUHca3JWFaXu6dR2x",
  "key42": "hvt3fEYQPH3wzjsnBG1SfcZsaaArRDQ1xZhE3Z4o72mPhfEUfyX6A8TrFBRRUkycdKcx7TsUfVeniHnbeNvekb3",
  "key43": "4XHa5Sgv6BZjuqqYDp787woREBQBiViHJLLx3nzeEGeKvvGMfuAHX4SZaHy7VdpXFeYKqnRQVU64fwugbg67pewQ",
  "key44": "5vgsRSSwqDMcvKmFHQPTA8B3enkvx5FKAmDHZRJRHipqaseqB1o5irHbaA7s8VUpyyZnUpgrj3QAGJFs6j67DZCr",
  "key45": "9CsWzMWNqNHwHP3CxzNwMCSaLc3Jpmmxb3UibbEdWkJsCRU3jhJDiLGqaJG2WcpGxsBVaxEUrJLjMa8tnDziyDP"
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
