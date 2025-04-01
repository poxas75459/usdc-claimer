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
    "3hib6rfJfbvUSHXSEjkKqQMrxT2TaxxretUYCJ4VyzfuAPVJNreYFqGG8NuCjKqM9mSajD83L6JidaguiAya7Na7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fv2qsBnNAyuAw789fBdLfStqoFCmFnQXqNM93Yu3aBXvYM78b11Z75Gm7KiFrX3LQ6W4MYi2okSvR1hEckysWuf",
  "key1": "2nSAY255yTUkdbNUu8VkTkoCm7APVAzXTAeyFiy8MaSPv1rx9QWVyz5SBKySgRyDnzdpjuYQgwgWKTeYzNoeDNno",
  "key2": "2UqskLtKbPKGwy3199VbHXxunxya82XeDACojnN9GvwMo4bWLi8r7c8Enjdukk69Z5qqoiep2n5sVShddJAm3563",
  "key3": "61oP8g5TAon4VkzRtgfCt4h9P9BaiSpM1NMbFZRnKt1jfSqWkWbk2d2ENFoU25YAJYEnMNWYKJopsT7FH8emjG1r",
  "key4": "2pfH4xfCiTf9gaxSca1SCqoRDSMhEAgdQ8dWgzCB84riDsLPTLJTRxhv4r8RVvMpe7FZVxZqwSBTVHWbYmcwPfPk",
  "key5": "2CxKwC5xxb9MbaRA27BKUWcpmBK3HwZyaaARStM4igAi4mGSPWYzNND61jHybi13z9o3LiFHCS3kA42rqvFbHQgg",
  "key6": "26SHkuVriR9nny3FfuxyQyFBK2a4F2trKSikSgAE1w5gyUvuTJ434XNKiNGSyusfGvgRxfZJsKWd3UcenssrsoHf",
  "key7": "4s5oMjrkJKFjo15doC55VjZyRXLr8mMVEiQYeeuBG6n9Jre1JJGbuiVqYr2gHeaFgakjxYekJmJpvfVx3qr4tr2H",
  "key8": "2LPCLgEYQBbfL8xKEGUMtJbP1iD7A4qEMfUuHR8sKNcL888FUhebHBCk4ybgUL2zvJPWKQ1K91kQ6LBvnqStMw12",
  "key9": "NpVrWKrCr9nz4gejufnk36aaGBLnrrqGiWDtRvmcZUYe2jh8Gev6gsBgMkErzt9Ty3LW1u2Vn278BqXFG7c9Zk3",
  "key10": "2DQ1UR2bD716P58uA2Y3RbR5DjrxVB5ADJiw4UcH9zx3G2vyXvPsdVNS6a1fxS38nj1oRt3ktmPYtygy87SNZ2ey",
  "key11": "3pMhQZvRKeW4mPgk9cxYDMmKKSbDLWBJnzGhBsP25Xn8HYYotL2EjP3Xwo9Zs9AMp4rZBfDuVQ4kCUNKkNhsWbPB",
  "key12": "24YSKuRy83hVhHVrdkVHhirLRGUUfoCw3WkBgB4HDvYczCC49z8UG54d2DBeEFogqzJ9J2ADoQTXWW5gwqAxGAUF",
  "key13": "3f3uV5wawWanSb8RXPh6N9mEmQ2Rz1iHkBBM3NYZYbtkgBqgVxwMaFzjFcSqoTp2a4Bnmuohs8YwAsFvwmm32LQQ",
  "key14": "4XcnxzZc7rQoNZDwD18ZwqiCZUiMis8RBK1xubYnpkDgjVvuN6kyixL4k3o4csw6E3Hn5ShfPngDG21NvRbDurhW",
  "key15": "rdkmzE21QJSqMeEQZUQCgd2t2c2hpN3q5rddNV99pzpFLdUQjMwhfYGsQHPeeg5p5GqeL9PMuiNPCd14BbAyjw9",
  "key16": "4o11fUMgwyFQNFYqzgiFNKMjqu2hJ1zoqT2K9XvxKZ1qmggfh7f9nVgaQBmkTL4dT7wjVbfiDsFFub8ZhA1UB1Vx",
  "key17": "4YB3ASsQBNPrGDujVJ6nqt6N4pxxC3RC586nCa3MyjXAQWYpuTgPFDaPhcyKuHuL5oHuL1ppZByadL4WmYUw6AAF",
  "key18": "58zAouVYPifF18WiVAbs5rV2xDBHni7gEPR5SBhDEreHR72HR3A44wtqyGubHPPqN5bmYFm22pYmzeHrG89v6pnV",
  "key19": "5DHV1pWyaz3eSpnHN3AuBKQ1hABKBMCFcG2vbYCK21DRgYoEc8F8vKmNbThMzyAZTnrXe1WdDhpimpiLkyGsoy73",
  "key20": "xRdynEfbirPc25L9uPmxVXP7gCp8muCjtRYLywYm6HH1enP5e4xE6KWWwYqVJpYbApiWstj6dXrXZu6WdtjwiNS",
  "key21": "2jnLasqZYERX8scRooQfnmRBubxMDHUQ2gfq94VFM9BtCx7sGzkHMtoHyEB5rMg1oWkRkjCDQKRt97xgFfifTBDo",
  "key22": "4aycBQrXzPmUaYK4UQy1ChEDStQtEbccEgTXB9HYT7hQFQn36nGgkHgnnfsDx1L3FaT2crBvBBSpsiLAGCPPBgXr",
  "key23": "3NBbq8w3YFnvgUHD2pLTsok5tD57PwtD31mSzVQCNAuFEaEQtkvmsrgBpe2L56WJNSzGgVTSNskuV9Mf7cuUekvW",
  "key24": "2LPw6uKmUVjwCu1to5A9n5dttzDwvhXz2nQcxMQM4m9y23KsZXrRdXPBVdGodLbnECE3vDw6R73HHNnYxBHCumKW"
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
