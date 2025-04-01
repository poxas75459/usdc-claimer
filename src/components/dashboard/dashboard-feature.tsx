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
    "3Jtf6ewpDAiwvtCuTeokrHuckF4ydbgGUfHCpPLLgbBDHv11gwZtbPQQrZ74WeNU8oXMfmK2paQU11WvEoAGRiPz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UkCf9ZrsZEhechi27BBWkGKMRuTXukEvBiGPkt16hth5fBrCy1kgjXpfVecZXFZ9DVC5KqLPrcFXEvqV3dAqm8j",
  "key1": "2A4ZPJk6YpmdpZmpif36YFZSNK2Htur3UhUSDJ3r2fBtLyTcKAR2mPNUC5FsVXXkoRcGCJq6q1mbaCjgFR8Cdn3Z",
  "key2": "2myVwKm5YwkcinvAUpS9PRyoepdsrVx4RkcZGMqNAjHhPQakb328k8b3Uo2ThAXf4xJCXTDEnHu9J65XT9JG1zy4",
  "key3": "jNA8NQtCqzg5Wmr2NQvQec6fCBxGviNSxurw3Zq9b2TrFc4ekAMJadvbJy8HEWwEGYSyDLsjzStQUPSD4oERUsh",
  "key4": "odmkLFV1ccm8VuMfn7pV1tqPki1pKB3p9GboMNXW6bWqhTuV2DyQqD9A75VWqLkH5faacogQB7Gw9edeKczG2NR",
  "key5": "51BCT9aeKPDHxBnEiSXM1nkgSryXH85agpxRsioCSJjRXqeF3CJjb5MoJLXqa7v54bSGjnmk2ZQ244dX8q5fzrwN",
  "key6": "CujVzccUF1zgz2f8Lg8Z3MdbvxErLB2TYwWhkQrhtCMqZi1nowtdJVaZcbzB74echqW75EwHiY5ZcgAMWPTBRwb",
  "key7": "3rxwruQpmuFzYAxr1M7oFHHLFjoFS2UMdyaLPrRroocaxMJpZQT7r57y8BsPSnhM8efh6iaszAzP3mYPDYV2DKi3",
  "key8": "2aRxh5riXVHksqNXCRR7Z9reUY4NyQJUHfqVVC8iM18Z821WxLH1C4q9MvYjm3ghLSoTGEbhhvovdGmEcreGAxbH",
  "key9": "4vX5Hi65Y5jHLjaZCTbCFwLh6HWJuEMMUhRAbTZEUcZXL5ocUPRjbgpPvbiiYw6eUyeNf4SS6cc5DtVUzH9yu6HN",
  "key10": "4SmuMEBRHwafEzpFhUngwEcuC2r7bJz9TAgMJgg6o5e76Moe5Fn8n4EDSA7hbZLwA5nAcsvAGcGDebD4KJAB8Qfn",
  "key11": "4uCSbuSeibC9YGJtqRAnn8tvBbkqzJ8RrpZEdWhBF1x6F2LEJReVDV6wdCwUoZDD7wA5whsqXwL7Sxqd6DxE1kqu",
  "key12": "58EMycJkqDQ643M3GwzKJv7Evh6sD2mhjFmAfmmQR6r2wbsJy9wsWv9BVnHXV4jvAVRdsgEfR1wDSYcMb9a4Ah13",
  "key13": "4srsc8EM2wVr959fX3sV4DNBX8FAzxs51LqrEJCZwhhB1mkyUjSjTUMz2QT1mYgjZtc3TakZ9KiMEf5xus8bWfqa",
  "key14": "31kR5ShqDm15HrEzMPM3thkmCfpyFEDwbqrqqgkFbMvQ88Jzf5bezMDtuwZPLm9H2zx5fSFPNxBHVs1g6dyJG9jE",
  "key15": "5pAgW2XtUpyeiYAVPZdVb9tSiomFJgXHt7GSsXsWf1JEr2pakLxMAMpqg61tPnT5eY6D2kkqYpNDv2P5H6wSXtre",
  "key16": "3BfVCA6VNiPGqvRUgHRwxRnjiQzJSCTA3An5kk3CVb8vT5Rfzrv4ZzpcDtwia8YwHPznWVH2SafJXzeW5Pk5bG2U",
  "key17": "2QKKYKQvLnqwd98Wo73oPGkUjHkv6TwbcZfUyuTmLQjwac5mHqT7LeQqFr6UqWPv7X4WKp9qsyWX8rdbx11GVSY3",
  "key18": "2tGQ1p5Q3HXCigmxyfhiNrCTBM8usNVt4dpWpbV2taAyLBWeVDYKjQ7EoiYoqxvTZ1H1tc5koDbSMJEcPBD3UQkH",
  "key19": "2eSh9w4SCT4MZ4xdtMPvYswQhhH9qv2VHpGnGVfe3BTee3AtuSounZNaHjyvJGcos9i36t45U9HwVZ2Bm2zopnYt",
  "key20": "2NQgFdv8ev6gbEWYfDKMYpagEbJCcGTn1K38hzimb2EJv97ND274n3svwdzRZgxG4oKFwvcV917SFZDZuEXR4PUs",
  "key21": "4BWZqhof9nHsYiqcHJah69pnKV9mpLMCE9SNADUu5kDK5WSB6W9t7B36RLUa4Rnj2g9o4GAhE1NCgusNjmnKoMUX",
  "key22": "35QQYCHUiSWDrQLZL7zJMcY6818V5V4pKrzPGhs4tXx6Nn5UYVYyenjL1jnNE4Us51VSYoV9R7oX5RDpKAWeQ83w",
  "key23": "UUT11Pcfp3UFS3Qbx2myvEXLdC3zpMDRSNYjAMUvGVwr2rDn7URPQfCwZW9kJHbf62gZF3qPgKm77ZLjA6RX8DK",
  "key24": "7vTew9XiHQJesTUJE1179NTq1ejbr4qfa825hnK4Nkk26UgEwSAZeqAMRSZWyZwZYzFGS1itPNPCx23dm73jf93",
  "key25": "4BPdWQVPwNYJdx5dQMqGqRcdAAZYS5jvVPPXR2beo7DzJjYm1SebNFhsAoSyPHg7hnNCbVPwkzARQJsD5Xs4zyiX",
  "key26": "4yiWHPXT4gqa54YJ5WXWLc4WesGLEzmWc53b5mMLrRAYbDiQuDD75sxyMxRtYzbhAbj6dUNrb4kHELPxdTmENaXL",
  "key27": "43sAEfzZXusiTgygMRcAyvHQYeHgv2RGmnVejomGpBbTpDk9wQjJbirZ9uTgTyVWyuoEUftejErzkzaeZjhJQiQT",
  "key28": "TbrmPGDBCKrMPVdYUhFXympkHj3bEWGYpuqjeLAnyobHW66ttWmv2fjWPtBseoheYbvcSWQ11hhdpNAx3ZJENU7",
  "key29": "64PSiu5RbzewjPCsUX3pLUKd3WUmvj2E7qUTAbDNVkvYkWdbnCPQZvzkgd9RVCc82CivK9xAmJxBvc5jXWwgJswg",
  "key30": "4WCjuLBPoJkJMUKK3Dxath9uykhpGNJu4Mxh2vvjxXEmhBAane7qwQBhQ9aUe7prCwMyKAa7oF3dVFUQE64xF6n6",
  "key31": "3dBEJSiu5R9MsnFSVwkFmK29e11WUwt48CpLR1n4ZuxbUs7SPojR22s2abFJ5RTKCKaq3hNCwEPCkDwurMZUFUt8",
  "key32": "3JkqxByaoxCNoUcBjuX6B73Lon8LXhPFE2ny1Un6PkpHB65M6cjBmVZtGKHBwz1HCWiyuvSaF6romNGkMhxsTJFt",
  "key33": "49vmQPiVVY5KrmZAuNt3z1dD1VfJdjkmES3AAwEsAZ7EyFsvi3Mn3okWfxSHHmmYCssdxpoFrrjmhDGfFwUGj8go",
  "key34": "3nZq3FrcsdvUTTHfy6oLH9zFbuvEJ2CkyZwNv3ui2oXtuCx9ebTLmf2LAcuD7ASrmoCW8fp9upMR25oBfQK5kYud",
  "key35": "58PZMXywd3WXuPFYu2LLQX1XB3w8SytJmFPoxRKnr9Fzh3yjohz5vZtVvZihGsQhEyWF175qW1u9vCZvzgMqNXoF",
  "key36": "2Q3uEQVzDTAsh6PU7TyEMEynpRDZARfYZUPMhG8NDeJJtUkGSY6b4h6t6BsriWPJpQUN75e5H1sfjVDmnc9HwfnB",
  "key37": "3o4MhMJ8otFbesaXk9RAYnsXsb8UWydnVpGgkysuZikXAP6ik26UjmqUTdMbD8HcvhWfU2GvTbyx8HEM5jc1mRbn",
  "key38": "2nBkdfjYLiNog1EmwamkaXGGEPTzA3zehDa4y2kQnc3R3txRTq9e24pDFuzhfQDihu2TmLjhsd7NhYPL5Vg8Tv1k",
  "key39": "3ZANCfAFEc2ymPBDwLJtcALbEbJ8z4y3V4y2nZf11KdUQpeAcBf7gmNhvVBFhmAqFWvG22WeQik62B379eDiPan8"
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
