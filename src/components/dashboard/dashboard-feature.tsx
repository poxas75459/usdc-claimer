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
    "efZ6SjYNGvNmmkdf3tgUTc8YnkdmmU5w8LpDiSxaF8YQgqqDU3GVHb4gGZ1nZutgYD9fkD1vQ61BvHVe6t41har"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33nScbEQRvrSbqdLFL6Yj4iNqQZ97kYM5aSuDGTJMeSzgN3D8DmnzCKD3orkuLYQXzS71V1fJZZGQD6gBAAahjGL",
  "key1": "4nS8FtGcTTnRPnrfq5Arh9JDYzifWxsdVzmCQ9yzy1T9JmwRd3B1ciQ4uyVm2BTTVYrCUnHMsKH3UFieWhjj1dyM",
  "key2": "4igxJxmwoMvXQ5D1agFB1NhQio6h3VFZ9YWQTE88yzqK5dHEvXFdGxntH18XsF52V4jwga458vVcNrhqGcD548Lq",
  "key3": "2YMypVjtD7BKvdMUQozyQZrtihrBAuByfsuCKa5TugQUrTCYCT2r8Bwv7YXMZEKWvWAgc5KMENXBen9oQpxgE3sD",
  "key4": "5MpW18TCDz6NUxpAmhPrzfeK7Ej8cJyQhYrsUwxfYhoWrW661PL9YxVjViqvApKViB9K3s5YGtqRdpcacQnYMFG5",
  "key5": "5c7xb3yapTHPLuTjyhzLFgcEmSqT81oyiJ14hWqr2zxFtEAcPWAUcukuzQF93UE7px1jzmA4VGBXe88hNVkKmjmy",
  "key6": "3uiF6wGo4oFDm4pddWiDxq57bofcWqv8ze9Va2YqKFKYqc1aFAnErehvUpLqsEVspu9P4Rgd3irtFbyHWTm1SAtx",
  "key7": "oHPur1LBLqTzAoSkMWd4y4yyvRrjMXiiRhsPTqWdbxG9RMLCRikLrBzJNMs4MkMY67i5Dpax5JasuAuqVbCLPj6",
  "key8": "4jo1YhzyPkWT3NwoNY4jMnZGR1rdNKwwLZ4oxGrg2zfrurSvWbQL58uiZzSpxGyQb1KeocduKNRd8qwkkufVTnrs",
  "key9": "EbyneZVYwVeyYednL6RMZU4PQ5NTfDMvZHsGfq4GAmVEWBhXo3LdiMEfCd3j5qGTYs7RUACYYCfampvPyv9ZftT",
  "key10": "3nfBZoqFh7jvrvrLEQmRMtpR8ib3xC7DJvD6StHTXUSVfdRXhSLwYe7kpJ6SmXQ7aeB7nX9tBpUa7ue2b1AtPWR2",
  "key11": "3Xn2EiUGkToonNeyX8Zfq1U3SvqVdgLzDXzYEh1g5qsynftzZUE8URJdFDLjp6zqbuziEgpxaiZuHYb2sUThMXnn",
  "key12": "5AvMhKy8AQHGjPjTpvMw92PFwLVGZvACPXshLHjKZPtAipJ45969BSFq6aG4mijryHHHTUHSJwNEXoorknaaZ8fh",
  "key13": "55u8kGLsdLjCsi4T73MPsuBfsCvbBDYSeKLZMnarMWe3YCPCUrEstoMnESuJ44PPe96E3npGHyZPfzrMc1ythmMy",
  "key14": "4YyrDYRh6b8dHo9Bxby6WfTH5exLd5UfxLzSaZKsDUz2CkHyQP9KPUsQEG1BDZbuGQp5xR8Wobn9Hk4oye4g2Fgn",
  "key15": "462BE8BJKTcJVVwShHK5DGhMpHFcWn37paCUE8NjuGBheqwM3LuxDTfv24sAjLwesDw9Cxatw9DaVsoPhd8C5t8y",
  "key16": "jZA4ghwC4RtBQfhRwA7QgoNRL76swam9cksiuqYESSsVgZPgCA42FmiezihmUtLHaR143CoyZbkN3dKHk5Q71y1",
  "key17": "5i2RmQQsDNiFPoqmhtxLoRsfCB28rrq4A4HuQ3hDgQZ2LgBxZRcNeX4KP3yZbfesX51vYHSsTrw93fW9QXWgixAz",
  "key18": "2KGSWcqenjFosxrjfPvvtDoF8ZjMbRuriMuR4j6HesZfygbiCyYg9cEX9vLPm9Uh1xANidEEFjUX2iLKcS6NCz1p",
  "key19": "2UpLRNcYWfFqkqdXkxu98wiVw8EG7VnzYNdVPFHkzKwzSsrLi6PChdbB2TUqc6eSaKnB8QxugJ92DVC96SmPjbvk",
  "key20": "2NNHo6peVm2f95gFzmzs2GmvEqBmpHkaZqaoRNUGFPP9EMGimAmchBXmBD1A9bv5aqXe6JuBEcU7gNkTJwWmDN92",
  "key21": "3dzgbxiAG4KtzjiJnWkXj1YpmtTNAVATYWSrjwWhL4YV5cUyRTEeQQ8umZPDpdg1S79E3pymzELzoAcwhc46412y",
  "key22": "2dC9mmigegBSEHdxNrR3bAsDsyjLi1zXBRq2JReAA6nbjY2szLT9BLnGtTbWhuPNpN2GUGzS3Ntuvkt6sdAYJeoR",
  "key23": "6vRDggwncq63i2Hg4fQLR2u82ApaLaQtqerYAQepHwi5TJTWMeyyptVwxH6zASH9t2m8gJ15JhJrZdteKRLj5hQ",
  "key24": "5dD2RrREfkNqb1bYZWuda2WPPHCg9Rqn4orWMouqdVDEKTVxn3Bn7T9rs9gTTrKZT2WdfthmaLxeoqPmpef7FP8K",
  "key25": "2RtQubQq9tqaBA4amGZyiLWj7Lfz2iDtXA6wmEduwHo9yUH47SZig4DrpVYAupvVodWRLy26i2mtt1LTBChJHxV8"
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
