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
    "5nVBxwdtC8rNmpBbeSmbMi6zmBP3kMR1BwNvkhUGMVYMVNk9SxjkoziRTYnLLpb4y3KUKhXYCmKTHwaCjX6LVMt3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YVACU3xbfu3VoRwqPxk5kvpWiA46b2RDviL2veXfiVNvCJngC7Xhc1taQyzrVTjppnbH1TGcCxiUdH6V2fCyPPQ",
  "key1": "4eSYEyYw8gThG7VYTxjCZUkm2TvTP8nHnJzu1t3dH5uyoQWstHaf7mHj2VPg8Y36pdBffbzax9PMpXLqhn1kFkyq",
  "key2": "2kAKDtk5EjVendJ4MSqP3YMbbJumhKPmuXSkBgx14aGGkiSvhUHSpRSoxu7jL47gFNxgSCfqqV1mFAESfrkk6Yzw",
  "key3": "4cGSsXDPqAPKwTdVzPHvPhB4U6PBp2wYKdSLTFtWoPVw4VmugcS1yMoJjRvzUec3ooE4kKB9bZykCetZrgVUMyLJ",
  "key4": "4es11pCqw2iqNpbEXUpDDhonSor6srgMSo5t5pRiKpCZwAHMXY1f5YbhgFi2rwuFSVPcLx4Nv1umQGkF3Lz38xVd",
  "key5": "2XDjZnvuA5Xa3Z7YNreYDuS5AWoMohhXYwYh9E7UTiLQ9x6obZGnGiVzuqVf2JVSKDJujPQMNnArPRE1YyXDLDCs",
  "key6": "3Cr6EqHuu93febiRmQXLfYxhaDoGgA4LpBjmWK8qCyWuAtK4rTyESRHgTRwRakPMgyQBEKey3nbthgDjM8au2bAt",
  "key7": "3ezPyovzijaeB9dXHvj8zygYat3HVtk2AXeMQaaiGdmN6AvCVmm4r5mReY6XUFh9Y6BeXzUW8pHzn1BwwwHJ1M98",
  "key8": "3beuo76xzsB4MBrJz2qc9B15pJ4MRjaWtYpHZ3F3z7H7JBTvxehtWDk6rnaAq4xEqgyrCNXM56ZJMHc5Vyeb9RPZ",
  "key9": "48Q3Q9mcznoF6j7uh1afhg22LsEL3htHsfCcKDVjJVqxkDXYjQvNPoQzR4Ajd7mvxBEGnjKavGDWeGyiXgnT1E4d",
  "key10": "y9SVEBs3xgd7pkmuQeDUdAMbCq8JYB6n3eXWorN3mCjfRwwU2x3q13UNqU21spbvWJj1nKdSudjqHejswECNdWD",
  "key11": "3kxdUVrTtMPSyA4UPgWpUZqqWVyDEc1xeXxg9rNwvWSDNw2fLcrgbSkyYwFoY5cAtur3JcbXmnamKLjB7tGkCvJX",
  "key12": "3Bj4ndV86opjAMNoBLG3ZStcStofQvp7NXRbj5P3iy4dY1udVyDjBVh5aiU2Y6mWKiqmCHwSEp93TXJw84a1sZFA",
  "key13": "4eNQnv5upWJbQw15oa4qWYQ5E3ELZxqvPHANUAx6T6KgiDTFDqSQiVmmBuoNc6STtPUkSaqFA8EMeyZAVyZHHwSB",
  "key14": "2AbzNQ7BCm6Pgi9NQwtEPkmpSBwfo4gdYs3WFfVXJhteWeJZkgTDs9way68n3VfQP5Pjw2Vk9KFkgjeyxjCo58Ue",
  "key15": "5Crg2YuBfM1K3jdVxQA33uLBXm1yLgmBtDcx6Q6J1tDxwuwKgVkNVkDjtzoVMJN9AMFwipc2BRMHSxTBCPKLGHpX",
  "key16": "3xTpDoHbKBX1m8tfZMRp1No5gkewyJvFRwPJxsmaNZ91YRqU2zG3VkDRCeNSJdb3qW9kViQLQv43Kc6swq5TS8tR",
  "key17": "gnXdV5xBVLXZfML1aX2QbYNFo7kwzy9WsmR2ZYMwaS5Y4pRJyZjVoR5BvRKhb4DM2Fnw2pzgZCg6yupRSKRRFco",
  "key18": "5MEjDdKMHd7CYBc3qhhnxXEwR6nKfS8YtekQUkmVK1Ca1tt5RgpSG2KYLM3MMaSqSSfAybkc9qijoY5UwxdXv2xw",
  "key19": "myaKdxi3JsycCManNG3wrp6C6v1nbSpAa6VLi2BT2TXT86s4FusKNZHxreBxdSPUixoF1h42xdXu6ewv2emEEQG",
  "key20": "23m5XWJZGCYJckB3BzMcPsA9HekQ2YVTcfLS2qxrifGWaDKnaKkjMnhoVEGPVGmtkxDmJ49aKxydJjw1qxHFKK1p",
  "key21": "2zFz7V1j6NNTVjLHLov3pEyRSDpZwJKJwhS5k9wuV4bHJaHD1hvSprYkeNC9mzgkhSUcVoat7YK8ANqTEY68aDKg",
  "key22": "VKDoAM5ggoe4wsm2gaNZHBUKqRdjqqfb5tG11BQU2CRkDAP2p7jjQ79d3wwuzLb6NMj4Tfvr5k1SmVFoxt1jfdv",
  "key23": "4rP8egXhwQkNzcdFevM4HLyitkHDch4cPdFkq85Mv8tjWcgJZnHM6Up1PbDWHHMamLUYDUx1w5PEVvRgwsUz6WL3",
  "key24": "8PmJyDsYLhGL7a77w8wsu8wLstzvxGn8of6QtK67upwpYE4TUbmHDUdfkyoH87vKMQqve91NdYNLqiVzLReNQwy",
  "key25": "2vgy9UwoK3FKhBgqcgne5VcvfR7WjME26FMKSZrPSWdqEBiiWKTNGLKVtFWkk7ZQjcS2PiwqHsHA2ctKUuHWcwy1",
  "key26": "3jgGT6V3H6yfqwbJXyLu5EBLqEJjWM3a3pYZDQ7tX4NKeu6ehPMLrv52YeJeRNiYt1TuihFQrk5QHMcZKQiY3Vzp"
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
