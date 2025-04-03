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
    "3RhA2jXhjD7aq6EvkV1Jz8XucBFCAq44e6jVnkur2n3TiGxJXrCV8Yk8eM7mA5WozHCZx9ErAwKmV5LAr3umkpkp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h4SDcBEJUnoQxcKYjWedvy5ySUYEV8TgkwXF7PosddcsWC8Yxsenw2Nru9doTVwMgNfMqGLoe6kAebH8rNr5T2M",
  "key1": "hWaTwDDmZNCxH5b8k5eCVCQaBFWfdNLofUFMBWUc8kswn9w8MXVCGNwvWdwhoc8jMMv92NAUP6KcEM4gHh41VqB",
  "key2": "4vtpY1XaX23bomHSRLT68ehhnCutTNUT8Qq4iKzFFJKMVZWBPbcP1NKqcDxZZ5HmSEzrVCge2VsNcgR449HPMsp1",
  "key3": "3stU5rhfAJoFdqFf3NoLzvphUG5PrttU3L6yYhawgJ9jLTXVsRN9JmFyrBXz1DHaJLkehM8bic7JBDvaD6cCjzZw",
  "key4": "4c6ZWEoupKDpExva11FVvZ8cLmMyv7GXyKstxAi2u6ojyCApeK13zugFdzh3k83DYh4h2zLhbBUjv4zT3a7eMd4M",
  "key5": "4C1UFYrmUSrk2ah3CRVbJnGhRoZoCV2M1HNfQiYXfvkiFrZX7cPs9PEzhECma8d7LBBVQhbGqyKs5PRqYsx5H2pv",
  "key6": "3E41sHZBRcar4RqBix3e2SroHBRRVENN1JTQGrmQmZvzHEEL6Ub3hVw5mk7Qwch7batgSwFMiLPKZyULG9zdiBDV",
  "key7": "2wWSzjLKGt2qLbBh7YjFvBsv5Ay74snwa8FCkbULGCrJxx3CDwQuRfF1hvUVrCJWmmYLskkHeeAnZS7mVcMq8DTh",
  "key8": "122mifKwmd5oHrpucSFrkFjV8eQrLs9hcNcoUWneGqJWN6d31NQN4rdWzHpEZ6eLGXLJss7QDNNWudTejEFrujvh",
  "key9": "4ToiMADCmzGEHJy6xQRtULpyJDRTB5bwJxjt5EojLrat9No5XLkQUHyYBAdiyQzPHJBe9ZWgbQAqUa1DjoDsFTES",
  "key10": "65EVUg1Vxfy5YF58wJ2Fnp9uWBzsac65y9EA7jpRUZiL4jDkFGZihRfMiR2wfpL56Qsjjt6o8uJsNSmgc26vMRBG",
  "key11": "2BoESiBdXjQxiNkWH5p1M7ANGQLCD2ZePzFo3n6VuCmrnwh2AqKeUuQPwCkxcHj7yaBjrbwGoqv1K5q7uAoPseHF",
  "key12": "4P9pqgLe1rgnB1ckFSe3SwgJdMWr2HuwbSrgQRUBdfB7Cc3jVXrrDhaVp1UCVLowamCd91FtH4D2Td8JgM9QukTu",
  "key13": "4gF94ULcEfEEwwGFsMVjimjtBpkPHpgqHcpE5vxa6ivHw7o8NNZWyxrNEkBL8X8UScSWg48KMZsDGbZC236u4Han",
  "key14": "wY7tFV8heduk8fAex6wQLo8k2TGpEbHMsKv2RzgvE6tf2Q2FrmrX2MwYBu9WbQLGP24SMPMC3ZfZvCWuoXiorkg",
  "key15": "5L8Jw1m4pt8NhXKgxoasp7QoUo9zXMZW1g6vfx6B51JLkpNt4gu5ByCugSzJEPgDcdVNCmkreeFRAwJwsm518sJ8",
  "key16": "379Dkig1WDy7DSvyJwxC1warTMiXYwXqG1bKSc7rkVvMShuqgHjEqC9CgRhQk8navnLMtbDFABDNiJc611fgpBHf",
  "key17": "5jTFsuMkpQPTyLANmpSNsnrqEiJfSHnLgScAjZDmPY238HABEf8bWkpCjQJn3TZt3jZcpe73bBeVhZKeYpBwdvX2",
  "key18": "4kZxgSvsqEbcn1f8aQ9jZ6un9fpNjbvan4PudhAT7CuDuwFM5PNmtbLsDUmYmG27kFQH2C928VBUnp2DNJRik8Z9",
  "key19": "4FoVwRwXRWPs4eRS39qMD9Ge8hwGeAGDciqjv9aEEnx2dVBd5KyCQCdoKQi2iTqVC5dn9LmLn1RDVoEtyvEFDntg",
  "key20": "37EyejZnYqwRp79GdQSHs11dWFHYkH829S4z3WXjer3p6eoaJAe5vNVNTozp9XAgN2fau8uPSMm4jt9YAbFoKJ99",
  "key21": "56HZcLicz1ybPUndhEfbZHENqdw9x1jZ4f5FfDaupXetdzuN4Wr2VgxJCQxfc5JFD1dCf1L4sCwjuPcXVvJhhSR3",
  "key22": "xCAHMmPg1Dvuqc8Y8UKJqSSQheV4V5W7oNstboY8ZKoC9ruiHunZ8QPfeagKVb3SsdfhM8PXyzpgDdhF3QxnokD",
  "key23": "5GCTMxDtRnacGc7KhtWifxZpAxjvhoLtUg6g5ZyCWqA9WmLVwZAMzFb4PY43QnonSSptkiSjRHpjet8o7nBfZqdq",
  "key24": "sXk6duFQFGy4n4RVnj5Xtaa2vwimAZ3A5TSVN2MTijoa5982qYYvLTVAZXn51HWx2G3kKFqiy5LbrTq3gJJAojc",
  "key25": "3hRX1mFvnYF6v59nT8MFoS4mkvTZ17V7LB5gsv8d5p4AwSRysMF2SqSpe7VbD6MtqGuHKmhkJBADCuwxAKdmpKbH",
  "key26": "67HrVPNeoDsutHdmkUNELXgw8peXp1sFYDJQbX1mcqNkMtwynFBJzztXBJB3cDy6TxC8SNqmRZKRVC4hLv88ugeN",
  "key27": "3UTmBWxSWemSnQhCkC19BrQhio2fLUXk7unaydvKPdWo4J11TAAzFYS3PcAesBqcwHZZHHNSfvkT36qTGDRRpLyc",
  "key28": "28RWjvyZ7usN7yutKgdvXBoE95fsUwVdhuWC2cUpuEuqgqHjJbByr7911enbaXCJJ5UkmuvqV9faCjP7otMxan6M",
  "key29": "4LSnrXnChYFXExvqozGpVASn89oQWSXMaWfyqgtPy8GPyDNAPEKHq6GkiG1w7un1x4XXF89E5AagRPsyMgBqyiYu",
  "key30": "DdrZxXGKfVWwpy2zMqhZZy53vZbQvE4diJgXREGQN7jNhK1VRNzKcaukjvcWYaryWqco4Zq1WZpCsr9qRsXXhLD",
  "key31": "3dqVD7XuvfAbopRtjGhU5mpAckqAZFHN2CpvLkN24Scyq9FJfTV72L7TVzZbxs7wCcnceSLZVTFumv18Kg2oF1y3",
  "key32": "5i7B2TNFq8f7RwejE6zXcsGepTdMRM7xHHd8kfGWJVz62To9nUiTTC2STxmoogNZ76ZQRiQb1BKEfirbykDy6PGU",
  "key33": "3G6Pt4FRr2ey4GUQQP5YYzDo6X81EPaVC3fs5T3kWzuK8VKu5VC96E2tiSeMSvW5dX4uQx9MUy1nfCFSDbbuRWz1",
  "key34": "2j2ztR4h9EhW5tETQHMSUmrY7UjhCherRiW6Di9hAdqR1ZmHcRvDcK1F6S6feLfxMA6KTdeRQaNeRDDkZYS7wnai",
  "key35": "MsUACQ8ot8qyURzAevwdsWKtaZSFXWeNDyNRkxMQK6hoVJftyboGajBEjbxZNDo4JiXSSAWnzJQFUWwYQR39YWX",
  "key36": "K4zJcR9jpUEoCsGpu6zAvpfeMyzE6an3QBbj2D4tAC626C1BeFEe9RmHss4FeB9YC83AVpeCjMyUDF2NiaNgBWY",
  "key37": "2aAtJ71eA4SaAhSv5gt3ah8Lv5gyd7C8v3rbcwB2EDVBJ489FU99nkR2PF3wyoRfwrg1BBioGVkUTfiuagCHTnGR",
  "key38": "BfEqmurWTJ66pgmBA4PWYJFZxx7hGyjtFU98px6i2F2rQTWFkGSiW4e8kfVMEweNMkDRKZZLcrQatxcmmpfGaVi",
  "key39": "DEcMNNDqsojSRse6fGCVFBzUwrqbLyt5Xim2RPNmoFrG65reCfi1vN96S1XBDrUNKXCfETgFzUPaJgabMqJ5vEX",
  "key40": "4fGtnhExvVfge6TWh1dW51tYt6Azxni7a5mQ2qQDPTkoi1bRR3DRbtv9VPRSuvRxS6rXYjurXak2f4JZBHq7bwTe",
  "key41": "3n5gpdiiiNe7hQToskxRo6KtFEJHB1VrSLQrznZC7X6HFw3UwWJWBfstydQEA2Ts6MvUQSY5fi8E2jmMGsv1cT6T",
  "key42": "3727vJPckaTQjvVJAmca5Vth7adfVHefxg3C5kvFvQrY2to3ZSCf8JCQo9wvhWu4BbYvLLzjaxHdfihwWz3PPcrK",
  "key43": "52sYSLnjrH55hiGFFi4BxRJtegThgvpZAG8NR5jEnhd8uJ9Jk9vgAcWiK1zNDxUWTGujeTA4yWt5wC4c1cYtWFYH",
  "key44": "5RhbH8D7LwFHmLpFTmpGvj5wMcz2WnyWgEBDvdi1vYndHWUkAxyEBnJDUVEoPtebGmcKrr32h3Cwm6f5r6BApuSX",
  "key45": "2i5ihnHgURLzVGh7ucpWXkrsfi4mnEKgBtHchghdrU3tzvzxAZQEzHaK6YxnbN4jBsUGev4hem1QST8VX3vnMAx8",
  "key46": "3PHVBEYD7fjTW3EwNKWrsrPMYvkgaGyB7ZgQ7T7cpTSRePjtpQBFSGr1y321kKjdTAdS7a8FxejzmzaFsZjXM3xh",
  "key47": "2KDqiFiJimCkcuvGJqo2FNzmk1M7uh9oGQr7mULKCkrvqBidxLohKhDmyCYd1fBFXCfrjKqBdUMHF6UcJ5rQZhqX"
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
