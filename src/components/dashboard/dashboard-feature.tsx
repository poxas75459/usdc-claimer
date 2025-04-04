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
    "4AaMmHWe3BtF8XuL5rriGm6obxEBZPLApDbLMTKseLFcsB3QXLAdWoEdhhjf2NW8Jy27oqqwevhXBMWEvYmZ7fYk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gdJ4UCmkb7qTbVQJkunYhhktKXe9dRBvDsvStJBPpendksftQsjBRXeraTVXVCcCDLo7SGL3JgZpmMJcjWe7Ezd",
  "key1": "4fSbkQA7Ve1CVQS1ibzA9kXpyjDPE7B6jyi84bDSrBu97PjcuDGNPyp26shCGuaoD2UKQzHmqzCsbjAEA4cKXc74",
  "key2": "5bVKw8wnPAGHg1rsxWZSBAr4FnzEYQ6s5iSAyfqdEDRgta5sbdPmZm4XzNFtjeQMhCB4QErdd9bsUTFzodPpjnUU",
  "key3": "4S4kWZbBySvPqaA1pKDRWKNpUTVKeDQ2uPhtY8AcPAH7UbGFBMV7qf2CrkYDdQDjvkgbAojNCzWrerA25JTe8tha",
  "key4": "yR8KuJhRUwNjYEeqW7GqJDm9wKY1UepYoRxwSCkUr3K5VR8V28rFQmqkX8KQrs8unJvZfr8dsCjaTqJoB5JwrkR",
  "key5": "k7XabwbsJPucL3Fzfrc8UkmyfTyjGsXmZ98QBRwzgJs9H5BV8XfJQsvFaKCJ3n22SY1UiuSfCH3dixzLUfrFEjB",
  "key6": "2xJYUQMtyjzGFw6TViq7MKHuX9mR4kxAx6sQpXqhF9kJmTVujQHZtQdGtT34T1TyXxK3G8CTih2Awj87nf2WD47J",
  "key7": "5dDrpY2fEc4GS3wibv86ygEGwXrEk2Geyfv5hjzBoipUXVhhmGHdfchZcD2AZy8AiQLKH7vdT48Dtc9YmoYe3cxW",
  "key8": "4bbNxnwxSdTuozmq4fMvMRZQ1jCdxxSkiXJA3Hgf46QEiQjxhrJR83cK4SBSzgnLYp5oBGFEWGPdgi5cwCVvnweT",
  "key9": "4z1nv9Z6C9XGSKoHyE5P7DuGMVFA8N3syszQqkeEtP5jFssAQH5DKeorJcqMh4NqqG5Z4gqztdm8vNqs9eJzQNeA",
  "key10": "2RDqTr9MwovLZ3B9V9HLoYa2FTzJabobzEK4uSfsfEWUd31eX3cTvfk3FqHK1zwm4ymqvgMofD5RHQtN3LFxtKGJ",
  "key11": "2NZaE4qjRgQEVFVSzwDMdeWmwfpNFN89RA9E3QjkZeSNLSvBy5b873y5YAYQCJ5z719yETFviNWEPyHfk2az5k8j",
  "key12": "45t5UGpWsseDh21oymnmruSo6gZyT5XQrC9Zi2TLbS53f1qpLRmDtBxYHV3FbwsPXvWbuCXc2B7BVBdsACp4PJbK",
  "key13": "4nP9dQqvMGTmC7BvyQG4QaQypfxWeQY6yvZGJVbxFHxKVWvnGXnwxWop64yBhiQTjWKHCzKtEREbCePupw7Fa4Qh",
  "key14": "32zdyiQk5vCTQ6w1KDBtnjBvKnSyMqAXEgW4BmNMExFwa8i9ieqSkwvR5d9vFLrH3tP2KsVCp4V8UZ3bDkuqXSmh",
  "key15": "4EfLWDjQ9tZYsHaAhYQumyE55V4aKBaXYGa2x9orGqF3DCdkuSqLQ84TT7de7b9mLGtCA6yoEkR7fQwmjuV7QoUU",
  "key16": "2iNv9n6boPzv1hY8TaHa3DJkFc26Kh96TWriBnJt8mT7wvoCSymoGCUmsFKfs7RHtVNFuWXpFgZ9EfQEFSkuAkE7",
  "key17": "2nv7tdz6rzHwkStbHP76MDHkfgmfMtUEK6KWzWm2w2A3v819Qa27dh7Ak7UFJ4kEkVa95MTEQRv3RDR2vDtXFW9B",
  "key18": "tvoatZB6tJX3ER2xRD59gKdNzvzK4eUe3mZJmaccjhpt689EqWXTSQY2yQhGDyToRpDUKt19HWMhC7RE3e79fo3",
  "key19": "2enfTCwKRiRAScFig3jrwdNkRD3KH6hQrNjKHPVmfxLcQTVVrkoavVnFeB9YMh9P9utzaPZNzXaZPevHkQhf61DK",
  "key20": "QfmN9AZNu9YrfAzTwkHA4MNHXjPMmn8njrce6dGdiUUWZ2shzGkM81vfVxjFMz8HnatrV94Hc7CF6xxh7oeF7au",
  "key21": "4T5LxjvfTas12HKoDs14BRkX8TQvJrMkJzc9EHJRqGeuhdQdoRgFuqB4Fxt2sFX47ifpRygSt9TgCF11uvvTevYJ",
  "key22": "31Ru9LVZdAtGc9DwvgpMAuwEAvGACZDw8iDj2n9iv7TDYngb9waR1uj9k7bEku4KR8s9F7BTCABg6KXq9axf9hyx",
  "key23": "4DdooGAmH8LRmfpxfHYMEtQn6vf4VHzQ3s3ysR6ZzCrU1V4eqZ88EiaCGYty2V19Ab9VG6GKTAxz3vXdLn89EaK6",
  "key24": "4iuoJLbrKPnRJeLzu8LQBEMmJdrwS1BsRsMESppPo49SAU6UeuvuJ3Qp4etVv9dxswyZdox9VoK4HQy9FgrafRcV",
  "key25": "FfuTVLbFmHk7787wBYZhdRYMr6yD1eamX8XyfNAybeSCm6uUe18kkPbu6Ue36fGzHQRHLR1AT7SWJMWBhNtoEF1",
  "key26": "JEro2Pk5qXgjq6cCimcEX6BJZFRh9ceZXnXMhiKySDwoAisHhsfVRRyMyfkrAqnQiphrnMmYwjwoxn1tcXVVqRn",
  "key27": "4krWKLMLECJ6ZPxCaBeWLxwVnHwMMuAvQThKL9r1btceq8rx66Lj4d9ZXSrhtk8cZmHdQmkepam1YNMK74DLBZUe",
  "key28": "4RKvSBfohGaZdMeXF3i38pch3J7qbVPdgP5tBSCpNMecwhEAVazarnDJn6ioWjbS6BYUFKw9xZDirWbS337ZB4cC"
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
