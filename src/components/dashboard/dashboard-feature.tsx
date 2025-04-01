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
    "kcBZsAY4BE4u2ga5iYzUud92dvAXps6Qk2EBz6XCnj5Gio3n2YzWDTv8BTRtavVJ8NXshHCFLMsK9rTNr9u9rmR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jZBWf2uHwy2udMTFcHWt9vhxG1pHWEZPQo3vKxUcTqnoc9XiqVmXsFMZgqpw7QYJt4FuuWhMEiGQizYkQpxMJVW",
  "key1": "5t7e9ZsSmDYvVyirYf1csL38yreWEnv3oNdNWgi6gmA4u3Eg2TUFmvzsgX8XVtiL1116jQSaCFu5z7pYv5mQHuKt",
  "key2": "3LUX7hkU5srfc4L6T2ow99rp6BebqM5Er8ySbWoxak8tp7XSZpb8C9CTyyGAVKaTxgvBLDhhyFrErvH5QPVdCaec",
  "key3": "5NdnQTSHPsweizRUmP7ByCdQW2cae6D9TtseACxmCqiJYYbmaAvRvximKJvt36Y6kbEMBSRxJ4Y8ZCGhsFqZLBCE",
  "key4": "49a3GdQShLy83zSSkM4EjH8y22jYKD1EWAubGqa9medLbHAzbjW4kxLp14eu4YwAA4XUofbHM38UuvxAgTe8KLUy",
  "key5": "49UEDDxSjFbAUV5ckwXXVM3JxcFUEKMPcZEiBHBA9j8uRZJq6QaiDKoCUBzp9SVVqAWvtLH7itE6DPqVXEQvwgq7",
  "key6": "2KHDfnQYW6yw5Mm3nf2ZWsvK4aDj6EC51kvxdpgjQEzzLT2RJxaqfBqYQQ8ezR18wpCuf5rpA3qY8Hz4y8buTJn4",
  "key7": "3dofHz4zV9SYCHoAcU1Haz8F9uA3ZHFgQFUkJvk4XGL45msbr6sdFxEGLJ7VR8BNKUZmPBkDuXbhuWUVBS6MQse9",
  "key8": "7Y3qg8aB7NRCQTFmr1UMo9TRQfyBidwi8feF9GqnnBtc5rn3vrUAUePGJxLy1SDeXQboMLeTcK4o93TeTerPGNV",
  "key9": "VAdLU5V6Zz2rkw1tNYq2hagnWNijRFM2kjGndK23ETmdQBRpKQa8Lgj74xmzsSYwgHJ1BRddg5D7Cc19pwzvYUM",
  "key10": "2JzGdaGsdSwHXkf9oCW2koBBzvG6UMwDy45enD6V3S5MWk96dBtJBk4F2MUCQ1RhFKwe3PGzhW6362oH8ztGFoA8",
  "key11": "2DuWSPiYg2ZY3sLuJ4t3C2Hn6pfkrgVt1xWn6Cy46DDAZap96vJNBMv1Wmct3bFGyKvf6jtGCXY6fZf3TNUwb55Z",
  "key12": "4mJaGoa6TyStGnZ58wvT2NJVzZsGk9fsK1bqkJsvd4B11RSUQncAMNF2boFXk3b4Sc5fkDa3CB7UN9QLbEhKdg3a",
  "key13": "4axGXJFVPPpMFdtYsi9FBGGgekS4Cyd7J7b2fDwQN6mamWja5Pr9YTDYAZL1j6fpwqr1r4AmVny6NB7rR5LiYYzn",
  "key14": "4RpKCso2k7c99bUhGFpwrXfzQYjerfoAxk2btLEcZN5kGZXsfQjNAEigoNNqCPuwNnjJRHe6mX6wAc1nwQFgpkb9",
  "key15": "4kAyhFnY2jtegpn2jwS2QN94shd5DaAx1cDAUhP1EwLVaHU4piRkfcrtAW5nncdFtqy5wwXKEwAby2mCcZmRuuqA",
  "key16": "5WPoP5K1sj5SwBE83HpHWff7U6B6uMzziNsEQPpuHfMtxvzUrpPoym9QKK3nxbfPvUYRcFr9zeNUnUUPARbk5Hrs",
  "key17": "2SzRoG86q6Gcf2FdvVm8zrF93EWkBEHMpLsLBKpLToFULjxAGof5fJjHY1pZ9dMpSb7sc6R5pFx6xDJH5TXHJRC4",
  "key18": "8H2Zd9rdc8ZUufqwPBxmCnJ2D2zfFGKQ8ofQpc6B64XbNCQqmiwcTAV597dcfAhQaTQnaLPtb3d7i2ga3yxwXEn",
  "key19": "3336q8jzkWwHhVHeKpvhmekMz1paSUgJw2ZgckrUAzZQM6kCmMJeZ39inWdpm9T9JxZ8SMNjo2A2DU3VXukzCQHu",
  "key20": "3snfLBAd3hhMxqzhk4GVgS8XcJ1s3N9cbpC91dz6VHgsMrWuJzj9rmBmggTkvD6ro236sZvxf4UuPTTPNVxUjgFz",
  "key21": "4T2CvKeyk69QYCS9BxuQDrYwhY97DktZE2rk17buwXvW5RPLgxp2PdEdD65op3iGXbWM4U7YiCPh53Fx5rfwZUae",
  "key22": "3CFDrkFdozfZwk8BHp7suMPiPwXAdVXDtJPrhr8ToR9asaaGywSWNkr1E19dn3FLc7JymxJ8fMwLZfeK4gL8Fo8C",
  "key23": "4vojnAvM53MiKyVTx2wgY8jd4vrCMJm2vC8jVct9T4RFxwVJqfVWE3S5Q9AhHXRNk6tMp98tZ5FcL2MhhJjVeAj6",
  "key24": "3K4ZmvSSiRRui3225n87VhmKruA1k8wwQsoW4FYPBSTqxxSXWXP57btKhSHeZEQ3oTKriXK3KaWuDRYQNc5ngTmj",
  "key25": "3C16oHdYVmyJfb5k2w8ciaA9JJNj2r9nHa9u2RbCcYLCAvdRPE2nCuzjH52g2dDzJe6uMm3o7VvQpELEjSu97XK",
  "key26": "GnjKi8RvmDWhMtdnicM1uD5W3HYD8BctFnzPZ2rBqZ78398MMHBDba9azMBVEQA8rSkvYjfZnKzsVtQFaLbjrpF",
  "key27": "4Rd6SzM5FsY58vrZmEwbfgBU17f8PjbzW4c2iSwqLZ3WTgYJ8d9sdvEcpTLrfZeuT54vg17LCX3XXsNiYkBMuvyJ",
  "key28": "3M4zTdnBaaXn156GMqEyezQYYWDUJbnDcPdcnqFVAe7AVnNogmULGEKvufSebFeUrTTCy8YTXNP51astKEMgbn9M",
  "key29": "5M9bqYTrrGFEorgL6BSfHTMLJfszCaV5QbsZGrEFdV4Ap8ckuMF3p6swoeVytjfYqeMDUpCUDaHbZVrsNkL8kheE",
  "key30": "65SYh2ickmD4w9YqGuBMHWB4gR1Per9XH5mPLgDXmwAjereyp7qmZ7jvK4GvfaF1WFrUfSYFkinBxHmMavgereki",
  "key31": "3BHike5FfJVhZbQ6f4ferc4MNtb5DkhYK1f4c7zp2BGG7AEDSxfPVNk3PvSkpfWfr5XMwbxNKmH2bckHV9kb52rG",
  "key32": "2m2VZzq9c9qKGudKR4V84wdAhayCcuqnrdfku9Ey9KRA2pVAcQFrs45rC7iZovLXgJa4vGnGuaxrfS9W9eVgXvu9",
  "key33": "4aHP5aXkH5Ub3CBA8gcvnMpAAN7osBzPNJZGZcNqwYi5bWsm3d7UpnkzskQqXdZ7aUxs3wQkByjTvHspYdttwvCp",
  "key34": "4N9UmYyMGNrHVuDcvijayzZSMv3ExCMA1y2Snz21ZnHBZP5CNaUxcZVosP1naX8MpAdnXorRSzbDDm8MRB69aark",
  "key35": "fNek1m7qJphCSBHcQcwjKpmU7NsMHS1HJtui9rx7zvyVHchXNALvarNR1MZ5LCvt6tJue1TkPdTUYw6RMx3fxze",
  "key36": "4YU9ZVFuwx6jSfV4UhMwhQTRPKKG5N9rH26jsusV8vG3ACauhmwAHmtokz6Qaz6Fds4LgX1Mx891n984jkhpEh1x",
  "key37": "r61kbuNpucxcEshMhP32TB924g8hNonzmYyeLWQ4csjydX8eKGBRnNexCxx9pFNPLP8yVBCEVmNss6D1jqNViBt"
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
