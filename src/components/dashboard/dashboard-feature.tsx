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
    "2PdviaaxUV4GBSMd69uGqCvEMSR7u222Hj4Dp7cCUG39mvPy2osxreFAWsP1VQZva8Dd9mrYBZVLMEPeNZS7xqa4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29gRFnznu2nDazur8aVy6aPA9s2XaDjqZ6VP7XnUtsXgiKtwF4iEWLZGLEtZoc4nXPxt1exixuBZcKMzvwpRvzFF",
  "key1": "N81AifyNdr499x8bXNSvcXgD9hz6yuYdFXMhCNnc3FWEctLx5CnRnuAhxMVB4hry51boF4txjLZRZBDugEQzYg5",
  "key2": "2QS9RmZNBB9hGEpuBZuYFmsiGwbxTjQ88ThzTUjUZaNXSHrgcw6oVXVLUYmxDh23U7uQUc9qjncEKiASdKpoKnzL",
  "key3": "ntyZwhjjzS1HMkQeSz9LFvosboWTD3KWSFL212PBpAxJJ3eW1YBZMa8B4ec6eNY2p5Bm7VW3Z3584NNTcLJE3D9",
  "key4": "2GLdgPzTSm3oAus1nacm4uRNRfgerJ8oV4NKgzAEaYqSF1z9tjpmGq3opwXdqPHUPRqChPTxWaBAMGuzx2vCbKqv",
  "key5": "2PK45viGL6bQNadGALGd6ikFe6zSaBizEKCVNUGqwK5wfWi8VywmkajTT6owQ1Mfc27CPT3xTed9sxfGv7CeYEMw",
  "key6": "8tQxf1tRu4XwsiJqN4U3ux2cPjzBtXuWezrPyUnY7Q2oLe1Lcs7R2PLA6YBn9HLpdSSxpoLwY2YcatZ4BAUVMsH",
  "key7": "44bSaCYBA9rT5zz4uC6qdBnaYXVfYJMqWX48ryLQDamJuYSmKTySwrDg4xoBe9Qdn4jhJwjBJ9wLRKXQCEUhFL4b",
  "key8": "5YbJfJMUGdJpD8VJXoZdYYUFNvvbYteDqEMRmUJaWVRgdJ38L3BTzbRo3Y1LvXe4bdbgbHtkCwp5bwCWC2eYcWuF",
  "key9": "sBxGFKVZsfqMktpwogCtSifoAKPbbYfMnGeeiLhCHGmpAbHn8z2G8edFFnaxqPEGcv8DVMCkLFmqegc3NXNDfcJ",
  "key10": "66m3HGR382fzqfaAzgTbdvPNRyHRDHXGFQndEmk9u9QdW6nAyD1UHyR4CuHCUk8W4fgZc7zV45ZSf3oFLHFfMR97",
  "key11": "4BwMSQLUBdQUn3HYKEJswHji1z51NJ3e2A29Ras87ZnbkZx9mmGh18VLjVDotATrzUcgBqwHR1WQu9N1vcVdEPKb",
  "key12": "ZHbYhn9Q68xCtv67yBnxkjZtYYP5YtsHaJDP5y7nBvc8Kf1vexpQKNq9kHSEdSQr1Mxa7nHfotGW6B6MREkwE9G",
  "key13": "5JygFMQMLKBKkoisaySaoeGDrosdc3wnygnt1RwSuFFMNjXafh1P9i6SxP6sJi1LKDaH9m5q5mCAPHLv8MjLwWtw",
  "key14": "4xyF78L84x1NuwuYrBsSVCj7PVjM9U5AuSZLN4hFVg5HoJTS6X1U1H1712X9vQco5F9fNXMA3uTfVTAcxDMS2YYn",
  "key15": "4VVMoZX3Va8RhocBk61gkZLDdQ3Fju3Jf7oZSn9VYkR4QHA4ie3CCBe5ANGBoV8Fzb73rq6uQ2xfiCvwtbEG3J1T",
  "key16": "4Ey8UAsmPRWpD1CCDRhtgSmFWw9VbYvayLqy2xmimonuVjv8FVZ8ht4ZZ3eqcQxo6rVvkMxEWkff1qWYEucKDddK",
  "key17": "4G13KZ11ZRshXzuK6be9a3g2qN4yGsSGTvKbNo4toaNnoxFSwuEJCdfQqtJnhQt6Q3f1f97kTVnb5xTHGnq4Xx74",
  "key18": "4GZvZUQY63gXfCX3dfHWBR1XJHDDtqNByRELpmUX8FXqR5WfKjWyo6yow9G6qdDLCQbQYMTt9ssq1gpUP5EQRp9a",
  "key19": "qkDUgrux3Whp18C25M9qfipVGxQdFuDxjCzvDVpS23JCp1RXbDthdiqaCsnmd6e32vVWHMMmURqpwHzrRBEuVxT",
  "key20": "4f58aFuqGN4PPG1Y8Di49q2jjkBi8pk7xpdQ7FYkeRxFwwzUSNNPAamgh8sZCcv3NokoWpD18feJ1XU1f8t9CbRh",
  "key21": "4zXicUri49ojorD8tAT2GbpWAxiW2SXYZJrA8SFSJKbSqrPzkFBJc17V9QRj4AJZrq5BnZDUi9NbhWhKtqaka2ng",
  "key22": "44TJyjm6nFebj8evXXjmvSdobzScQ76o4zTfeBR9SM1oFZKmfJJfNeAmHDNHuzGLj5inUisk6fVWWYZjDDrzQpCE",
  "key23": "ETnuRKc8EJ5g8cUNQcwnsCgzZthntN2XxDuoKmmpTFkPRqRCPvnSP5x718CnQUEiLHUYTfJGQhLraPHFbEvYNGR",
  "key24": "2tKpdbzBQ2Vi4UA6Job3XKUBxUKar81WzjR3GJW43cM8sD4vgEXi96TtdSxoQ1x8PHoYyUGr7JdWpiLa2nfb851t",
  "key25": "uyBuHVkEW62a76htFFxCxS7c37cxdx7rfxy2e4XHG992csPHrLEcP96kP5a2dhC6NBP8q59avojvxQtEaiyahwG",
  "key26": "2xf6tPwhPebiv2HiAVkwRGYvUTsXCu7uqbzHYS3Xs2UUGWuAFPFco3JdvjeDU1Ztm4WtgUwagVfdw4P3mQhSGah1",
  "key27": "5imSEm8K4XYRogGi2PiN62K49ZxaeXjJB7JPgLH4TQRn1Nu3VyzFrFWH3d4U79MCqQuagTZRwHDoPZ2RkwvLjcmZ",
  "key28": "55Cfq1JoooSocNhqqdqGyjLJQq46VrhbTjvmdgz54pDcdL9hLv6dhJTcvi7G884ahc8gkfDt9LQcQRoyYrneRUsu",
  "key29": "2wThih4o4PgDv3uk2bKomT4u3FUrWPnMe16DhUdryv2gmDFMgexFezkfh4oVcLzvMnnLXVr8WiSJkaRRTJmaD4mc",
  "key30": "ym2rfwUURbdc8eFubAroR89MoB7QhuurfFQvSxEppWC5EjBhxdHLfJKn7ugJ1AfK3FshtCv8DZEBPYY4Q5THaPS",
  "key31": "58kVmyGA36Uw8AE19dvDdpvJ1HnfeA4r6sJPmY68YBoyt79oKUhgYoksJvzN9gkCqSFu8pY7VUfb56KukbaR2ktp",
  "key32": "3ZYnuijK5EmN66zDpeUpzauLbsbpAqjNipoN8YDcn9Ru9CKWNZGfXDFsCcdZzyES19BJVtZhgnBzdAdxRUp6ED1g",
  "key33": "rKHqur3JtZ2Ej5DWfUUjKiFZtsdiDhoDdnBxnuU4kpaEqmCKvL57idipYoBQmKgamqwjBeTNvKUW1cTSynkazpX",
  "key34": "2AkNLgBC8L3LUyt1G6s2zzwdBQ4hbvLb15fjaMsbsx9GEZWmyYNogHdhQgDa8RcXmGvSmYFT1mCQtBXUSK8mx3pQ",
  "key35": "2vsufVHjJDi5EFESQNiiJJmBSxmJPmEVJm66d4aGQC2gAn6fjgyJmhBu8uwt4tdzLJ9GA2imHVgBYCe2Egpg5yKr",
  "key36": "57HWt9L7UCqBbe4w51CVJAdysjRoAfsXYHjEeij3YJLMDGJ37ULkUn1DvMMLkrVq1GvVE6ToUNvSMBFTf3x3sXko",
  "key37": "2ABHmXe4rFzUUBdrm8DMmLsjd57LadmSkFh8kKnMZQvqm4W6nqfX7tMqQSGDXXWAbSaymACM559HVu1tsZVCsMKy",
  "key38": "hniL8bzBm11EFKTMgQzan7m7vXyJVX26o3upnoKxbjbX8Dgcs3iqtyiozkoKEV1sj51qWEk3EDrV7VMAMdWM9YR",
  "key39": "535qjJszLYzzHbEVA7686VRB2XrURoYRfAMBfziGHComyNM748yNdYcGtaNCBT5q4MStGKX4XSHQsVJmyWozjjEY",
  "key40": "29EVDokf5NxBa3vfdw7GSVj8pGjZkDZrSmhfocM8mkoyYL43XxdgGcu5sUU5NAxuCRjy6aAdQEEyfkdtWtbcebdY",
  "key41": "3q83mwizuFinK4q3GY8Pu6NbpwgvVsxbkdvTpFKq26HD43vexywsCqjrJS6VkGPXE8DCAqZyXpeB15W7ZPf8cemC",
  "key42": "3m6NQwqHVeubcjn7n5WBq4mYngP2hKUUQ6GBKsbL5Y6v7WHABzKydx9BZZP8tNU3pXkvhoXZbYpjir5M3hLC7YvS",
  "key43": "5SvjspT8HiGrWr83GNEcm6B4RWMe3MfJ7zvTKM6uDJAXrc9dBS3qeXhJYPuNZPbwC2zkcqcDyTykKzfxekMQW9CJ",
  "key44": "KmVq63CC5Piyu2cuKRxeRPrsbMNYeAzMuyMjKGAmFyVyNuzZTzsh7JuwEjctoN9Zis7Rfjngg958VLaYeJtebth",
  "key45": "5KSFoYX9Eci9M8jpnxGWcqxzEUQE4qhMWsnKVNA4LenZByK1k5Y3yJNZxCiwRSo4tfVpXKodV5mK3pYVtCFGtiuA"
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
