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
    "3M9Qbqv64MnrVktZhPtTvdDSFKpJtLfe4HhuNzDWiFr6dAhgqCcCoYB41iN6ASMkSQZ7geZxfqow55p2NoNMrXgS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JgyKd1fjGBEq3iUdjpMtTnYFNBydBA2QntALFkUxxs9LjFuT14LvQX5dk4nF2Cv364zDb4LouXCqowWWJ2DV7zQ",
  "key1": "2XN1CbArs5ogc39KUo2BMUbQpxTqwyD1L2DPNPgdJBDx9ZBq6yPmB5Wp8ZXEYWNF4gRJ85K4Qpjww3Zc9v3g9MKh",
  "key2": "5ZkznpG5ucfPoWgaupzT5oY7dnjm7wEKhADLW8ibhxwQYvFeJ5az4JAUaB6Nb5MBdh6FYL52ReCvjifb6soizsdy",
  "key3": "4Yr2w6swDfEY1hZiuHisRhWr6rXJ399ztwbmkZ5ox5Dmta6jUVZ8Jp6XzXnuye9rVPmEGWd6yGJMq1WWPExXdym7",
  "key4": "huTQNSR1y4u1yZVLTuANnT2DekC3EUQWL1KNrTn7KGygWYqMyKHKa4ZWYKv2XkPv1zigxUD6RHtXSVCRhZyuCkv",
  "key5": "4Xhtpofyh7L9juvVWr3Taphy7EFa6TUwaNjzXZzSbGByJMziVxZpkS4Kti1Sjr6Q1ix9KEBRZJKXAM3a8SEZCsZb",
  "key6": "o6YirzhY7zFi5wmdNPqqvDEw4AYs5MuQC523Y69fbzaetFR859avNnxkU3Y17NjLFtyg4XYycPCdw3kikMe6qjp",
  "key7": "jTqz5YJEgK8d3WcQGgMiEzn76a2HRwG9Rd71iT5UKfVmubz5rkAGDjXjaCEFTDMGhEXMh63wuGjXfZoZAaTTcLL",
  "key8": "5nPDzfTgp8bq7k7bhDWTEk5eqa35V66MWdjS7xd6kBaPPe6PPggUXEWiUzCAWVe5UrWRLz8QwBaQyrhijFKAXRbb",
  "key9": "2vZHqbSEujf2BGoAvScvhVHbnG9YurkBVHsdQokJNw6xp977JHTjciP2d9rD3ynr9KLccYBav5R1m33GDeNFTxeb",
  "key10": "3JeSV3SnYaj3x9kaVQt6jX6SEVCPAz3wV9TVVDc46opCTBsKTghNPK3LUwb6C8FLFGVKJsafercVsxbnm529wwfX",
  "key11": "3K3dEvXJTrKG7munqjiTeCakJdS3AwSdLFeKj5fs8vXBXZiv1AiLEzi2Zxin5WERSDBPfbWeiNpLALKhbgtMnD2H",
  "key12": "5HErfoBsJ1Ki7KytjPmF4wb1PenPdx5wU1zsc2FdowmqJ5QMniaDjMbSjrJDPmjVJgQiVWgm48b7q3o9fDthS3C4",
  "key13": "128ndkz6dswmZ7yDXJDi5hkw52bsGr5Jg1T4Wq4kb3ZbRb1EeMZtFr3xhaESj8d65xMnCzdn2qaX6omjmzTquhcG",
  "key14": "4ojuN6DAVEtpwyB4vX8VtP87uxKyNqzPgJiZNxUiCoB4irvCDs1w1sP6P68rH68qNQPuhFnTVT6Hin1zioDFpob9",
  "key15": "3cBq27zfuiSiU36nrYDQrzFhr7suFYnU6xcg3AkKjp1DVUeFJzLdkwmQALF3VTtfZXgx5vRHjW3hU4YL3V18neWW",
  "key16": "4whvjTV9fM6rgezbnEAz6imQsnkD3VJ6dyYxmbURnGiuqSP2ZFTFAwaTrgx4th2mDrCWa4F3a5DnYRXBXnf8S2cn",
  "key17": "ybLRTRu2WLzkw1RtUjX4iFCL5qGvXx6CkzojZkRKg1po4E1YWxGT9Rg7ZktvcCt7foxF78m6kJFWYSJb1jpWZMF",
  "key18": "jy9ZFbGKxNs1up3MNJRQzi8hEPuqttB8ecYVbDCytguRVDxdmKa3m2nkEeeekZbsDcgEJhwCvSbm6VPZSErPXrZ",
  "key19": "6ZGCKGPBwTQNBnbVJyZ3pEr3ETK5jYHJpnECW6ysBbQkzDtbziWGQychLx216Ne9SnemqLw2T41mCuX1Wb1EHiZ",
  "key20": "4zBigezGTu3cUv1pEPMALgKzmsAPbrFBGE4xbpVnw8KTH1cdeP8Hor3ts8NEyeKm84sbZdDWADAgkTMP7dYx9nt7",
  "key21": "XAjoXU2ksDPbjuGj1R99yXEmsqTaWqHrQRXK6ZRv834FM9X3gF1o9TosgPW5gGMhzvNwbAQQLob6sNjYChEe9gx",
  "key22": "3biRsCKJgmDnEqXLwA1XTSexZBx9g1fSYjM57P1gNnhLgdmWGhLg351Qj8QbXVRcPDarrAxuUh6DhyXY8mFo9U1Y",
  "key23": "TJB9AKjmvRw3Z7ftE6iVHZxwPzimKSpReWKh1aQA1L7bjN4u6Msm6UquKnD81ELc5M5x6EXtA4o8WZhHJGskpbB",
  "key24": "Apn98ZWuYDUswxzkGNPbr1bPP9gJkgHQPBygdVYWbZHWBbEXGGFB7rDURjJFUDEKCpddv2MmWAWS1YpQEWCUS4L",
  "key25": "4c7gs34ZMDDfKchv34qWUuWBbaac8foomfk9sLRhT3tGV8zYKysB3adDmWptAjNNzRZihbLNoZu8qMc62PhK8EBo",
  "key26": "4iEhAB24EDbBPMJtxwQrrU6tR33HCwzCf2Kn9FYsraEZDa99ZSgZEUxE1J8b2ZX52iyBa7bUMEQUKgLbiiXMgh3S",
  "key27": "2w79ATnYmtKpu76HjkjqP98PLFxHhMfd8Goghwo1SAdtmCxN75tWXGzS1aTVmHMYgVmD2YSWc1KtXWabXMqQCbzi",
  "key28": "2JjETgwHwgLm3yPjHx94LmaWjcwRsKPpTx3PthXkDt41xNkuKoiULRcdot9ETxRwizvYetvkUsdmfUqwQkpTersX",
  "key29": "23GkfDyBT75x1zfzGT7StqsFedWWDfkbsvL8V2Y8zEp68zvusFgaHu51W2awjEWVk8rLx18ydoYPNDPpSEtK8z4x"
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
