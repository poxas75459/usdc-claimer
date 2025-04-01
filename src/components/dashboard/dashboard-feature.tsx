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
    "3bUKTgRGhXP2A3HrcSYVxyengkFjGitW2ptXBQJ6PyGkaVRrMnvT3h9WmfZJZYSEJcqKfYd3wYekxhHrkS7Z6ZP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bvTvZyZJSdZfaNk584cLUTXbc1sxJKFB2omJV8879yjm8a9C9p4BShA2DK3tvkrGrzfSY3M181cvP7ycAbbobYk",
  "key1": "3pbt4z1Z12BXN1FPqShEeA7vBnBF7RmETh4twtD9wcqFaA42YytBgK9vCZ8b3u8Sw7XbTTfmRqcBvNV2xJTYnX7j",
  "key2": "SXsfFyXS9hXDHgZHKeU1dyrx27db6agK339MsPy5KifvZ6qYDtN2G1x1Zi9dXTt72WrRusRhEHQwM78C5VGUNg3",
  "key3": "5BbyfXvq8VFiATQ8PsETKycNYkHadzdfXwVVRWu9Ggf9bzxVWuMKQZ8ejVv75BDDLJtb6HpVWe7VP1dyfkrEYV7",
  "key4": "44N6LabNQp41r8MHxCdHntxj9aMobFoJnBgddMnHiWYedRvcbqMsVmoujofgwnppGMizy9wzdTig3gLqA4mbFU6G",
  "key5": "4dJTa8RKhjmi9XCawYDNZFL1oCUuohTi5Mtw1otUKuE1HjJ7rPjofwhdyxXiK1y66ZFWYuFeTqs81Q4oQoKrzMeC",
  "key6": "HDdM5cCH95Bohp3CRSHy1FRm5GEGkHDKxWFKhM9dKetjbu2DcgEKzacGVW5wL1osQMyTFC48nEND4kiCDpqUtrz",
  "key7": "2uEWAXUVgzjwYAwosf1nmazx4fZdJ8KY4qcw5EWrdESrUu6rfGNM1U5zNtzZxwRu1joNTK55dcjdWBUtN7c7wWPc",
  "key8": "2WmzXRfU5vUzPt4K59Yjn9J51ChPXqHZ6mTeA9jDrGepPwpDASjUZrJfdhwgf8JNhQ6wYUyDocjmLEP1MpACCVet",
  "key9": "44hdvVgmV64PfHkcKdfV22E8zGg2QPH91QWmioyApxmqWC1cpFxM3Eyyit8qCsVP3h2LFeBtbMbKLoiDH4XP3fdz",
  "key10": "w4yiRLS9vPRGyFwEgg3DVUwBYDLHyWnTA6qX6E8khTyd9cAqtvUSNjDCA6efWYiUzFKquCuNZZEfdpHtvFUMXWj",
  "key11": "3dSbZcsbKwNBw45LUw32FDy6eFMvQRFNGdQGq2dBEF3QadMXKD8GNSwrccQYkjAbtXReofSdcDFDwdYRMewdmyuw",
  "key12": "5pjTxmPTLdGM9x2u5LsYAeAwhUyPB9DXt42ynUDKWnQrapBTeiLmCng8btCoRPsTy2syzZ7KSphoAwhBrCM1uSz3",
  "key13": "tv3y9Ph5MfYjXnNoxu84cnGW2VD9QVEQLfPRknh3wmia7Z9J2pE63JHtVRqcunLi8kPZ2wPSCbshN2KMRsy2hQv",
  "key14": "3ky8dDtNASx5pEmZtk9wkmSX2efsPr6gxnyCwJDh3XxfuXDrB1vNSQRmxAZUdtxXRKGjETT7qp3FQKuyArn4psr9",
  "key15": "5UevHRosbx4SHsgYf8BDZjimdr8KNmmpHjnZnKkRGJEdhkr7PYc1rttKSGrdTKgVL2uFaAdHmBEiJGX1Thxx6xyo",
  "key16": "dS8RxyAbBZZMTPwmJouMxVhLUxNt3ZmWaKVvTLhi3VdRx6tCfnjJtf7aXqDzfuzQFrdPVMD5RYxhGy7vADW9AsJ",
  "key17": "65hCNzcUSdJhes4uShDFcPn6Lb7WDjw8vxqaQkvRDSWj9wo19v6NZrMGS9bw6687LmJzraR8kGVER1oJ4vXrC5gU",
  "key18": "2BeB42Ur7RHjBjCAcoZsDbpc1mP5nGvUnH4LkLrPzSx4yN7e9fxYG9VMyTbHQtrmENJXLZzAgzaXvsqPbWadVqTL",
  "key19": "4vVGjkn5tbq3hu9d31Br5f4ofNy7A7ba11eBwqiGfq5dnZRcasH8eZ6Gaz19EgtP9P8CdnvjWkeyWb8RzY4T7PLg",
  "key20": "2MXpnymr8TyCwBq1GXEoCM66fKqkxTkgtaqvpQbifLC9o9LK3QmMjNJfqGdBAwysrFuDkP9uZ3LbSyHFxx67qqhX",
  "key21": "2RQHKSW46K6AiK8tB6sxnLb8Yn5VwF8xUoXopFUHDoUKjwhzscRRnYsd6hR9NGKwveeorhHW7vyqPHqk97Z4uvoV",
  "key22": "5Np9AaqZagg3pYY7z8DVRyVoV1cGTxoTzXCz4w5GTpAfAyabM44KTigxrZLAgY4SZmzT8AAnoSPbMJVDjwEfgPj",
  "key23": "h6aKYSjigdReqMRnrEG1dhSJo7mYe4i6UcKDJB2MaEJAmsPM2BceqtNQfjX3mSoc4wwYDZnPA2w5MmD25FsJVdS",
  "key24": "3kbuyZr6nTHcfqDYb5sVTt6ep5BG4FkNH8vHjkuq6T8YAQgtAUbUpT1i7c1dtLcw8Ym9xkD2nweN2aGrcyXjmMEz",
  "key25": "2BcnhyoKfYw5WHnhAhQA8xBFvL2mht1a99sKN2Mo1vC27yqGkac3n5nD41nmY1HLSt8KgfVo6R3JL7mDm7neLRXN",
  "key26": "2jgEAf2jVWnEmnQPG2PjMeHdJVdsdjKFteDKwDDtojp12T5TeMU4rzMUQJHjyd4sunBHiCWH4HiWKBCo7myGTKnm",
  "key27": "5hYBXHdiWmCa5dFzz5TqJo5PSrRDfXykKcRegs7ZvL2cutRXFmzFhfvAeFGFjXYVYi9LebcbNLBoV9wmiL3NxsEv",
  "key28": "w8tFX1FKmwDUqvjCvDDXqs6URwHD5GYcoQ3URbSzMuqwd5LyPX7aiYxZkc5wex9mXPQxvana6vcv74sJ9gkJp5K",
  "key29": "57GxkpGB5yt5cd8JXM3aV8G5bELeREi1yCirTaSeoAmHXPUo9bK87osB1WP51nZV8cSmdVVABkzmh6Qh9cr73yfs",
  "key30": "3KumhnumL5KFdBKwsF3teFv314tLSTiYmAPgsoD3Ju4xmHgJzXdPJ5vex9a5DV6Exrgrin7DR3y1jyptSRfTocyX",
  "key31": "4aQumyva48kCWuonjvWyhSFFkK3DVnyBDynzzqXrc9MzNN5rkiRj4jXFdbbBLCDZzBASxoffcUKMpmZoXs4wrhj2",
  "key32": "ZF19Buo6VppA3kCoSvsKnqXDPfMPaPGVvcWA6gBH21X18FMhUFsEaUmbDEzMBhTtCetAP997Yr3JBHNaroKJCMt"
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
