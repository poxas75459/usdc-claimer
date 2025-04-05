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
    "5eqQforv72gVDDrUcmuEnbjvT45jwXdbE9Ee6pLrK5ugsvNhF81hSouQ7hfZJn2C2MV1py1SwbL8MBVYkW38UAD7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EfrXMpTsMckfq3NPnRvVxT5f9PJW1zmKRh1wdd5QUQ7yVryoF18KKso26y8EVjuXG26PVZaUmkKBxEnWTWMM6Zs",
  "key1": "4KQeJ4ow1yDTyDCWdwdUpyCGxzvnroBD9ULhUFEmEcj2a1GVtYVZ3rpdeeM5qSUPaXP7WnnoaKUD2RFMQz7cuemr",
  "key2": "3wHHALANJsh7AcG5YDfLx39b6uBMn46q28zSDC6DQVUhEqkJm9d72yYn37xiww6SZ7poBTFK436zYBu1rNbw2PkU",
  "key3": "2VFekuuFiPCiuBhVvV5mN91E83FKduKkErqqPYrQo7N3te9nzM18aYDYHfJy3uM3wk1WPaMgDotpKUGWcibPAe1G",
  "key4": "W6CZuGYjL1tBj9xs9ttxoyuwqmMHmNEzPh9zcaLf3ZZVCWFQPBHXTfxgLEtNqdutwmYjo9fBGvDH7EfRmLXTV9T",
  "key5": "3F6uZBJusEPScx5uMVfLDe2pGGTGKFYA8pSxueVj7WWbMKekUrQ51aHiomhoqJzSdWFbgepWepLbet4Trm7wCedS",
  "key6": "47rsiCtnFHJsR2iVAXJGB68jh9114mojn1Zwbqtu1aG1tzVAeDCcrCXAQ53EqR8Q892QgFBir8EjDZN81N1Y8b4L",
  "key7": "9meh8aFKdok1UVCS5RSdRBBxWYnfLY9FCHCqupJakB4bMeZx5rTj4c7MX1hvtZopYZAfSXxiWmc2A2SwJZJ1M24",
  "key8": "5QjKpLQDKVFra6zpQ5aLkEFquFdygKmkaXRVMvJU6ycftbpshg3hGcyvmSraztAjf1RXp6KPMEQsZVGRwgrwmFG3",
  "key9": "2dS8hP9JKSRW847cmyH6ToTtATUu41ciDrMwLunE8coYJr13xxVykwZdw8JhF5Ej4FDAfSRJZ5fN91a3jv8qtUPz",
  "key10": "4Au76dqNpmLCddFbbUVRNrWqzJV1gB56zN3FpdP4L5w3jLD3n8Ua7jJXDx6pvGJ85exHAa67XrDsCqTNMAQoyF2E",
  "key11": "3rya2VU27kuDiaHU1rCiJAd238RToauRAQeRBUdFFSph6eTvDbv4nwySXWb1L7SW28YyMTwGEdUgFJyyoTQaMdt9",
  "key12": "439ABJqPqZv6bCxQZbYwhdFozKvNCJLTdAkSDHtaCf5xHiYVehuy5gnapEg5RzNWTfrhdW6Zp9nRyQG52fBvVfW1",
  "key13": "3BB2jhaDP7y7PZa3BmRjv2xxNH8b8jkdRWKYRyMopN7ww7xRamiLtQHRmN7DLsR2kj4VsXG6TUAtKrjrgGQL285N",
  "key14": "3Yh1mTPETLdmavsGnF7uQ2Mbs6m1UNPETBtRpKWY7tfLHHGKDU2tuwFnkP51GooSiZsMBaycJmpsHLemKtPxk4Ye",
  "key15": "5jCwRs7kEXP4vPmW9omyE7jNXN3NNMetWXfLYuMfvptP4c4ZbbdVc1hoAboRHc7RghK41wWhTz1Tbk74NFbpoHWs",
  "key16": "42S2bC5uHApXhXX2uSREypbpofFGnGMpaGW7icysrN6BXvDMCfTbfzmjkMttAk9dEx9kBaSFmPZdGgwFLfKzEX8u",
  "key17": "4MCQK2nsux2yxgm4dj1YL1cpV5B1ZraDKeNU2oxmQCERrooTtgA8ey8X43wgLXLz3G3ewvsAWUVYjNGjts7Ftd8i",
  "key18": "63DztXiriij1UYd2XcZzpKfaeddHmQVGkaY89Y4F9GMU2gM93uKFko9Prd8Z1SnWeRbuFxjPvrrcWbSt1qPCHr6p",
  "key19": "xMThoUaL8Dw5rMcMYDz4ovMRBYJVic1jeqZ7mA6pT2SkdxMm1ivzujb9zkVxzd5Wv1o7QENYGSp99M7vsTvPVTf",
  "key20": "24bzWcXxEaQpw4hhrg15ei21FA3yhKKjv4T9gFi19ZfMHJxchXttLYjhdERdp9KFAV1WyuMG7RPvggSEggkdCBXn",
  "key21": "2R7pbbzEE8Xsy7iT3Wjj19GBdjaGWJHUKcHHhjRq6KWEhoNvugfBPxC2eWJhyJ2gZ5Gb3wPnsr4pTgMmJYGkhC75",
  "key22": "8s4SKLbm2wWJDSXkk2kNCQP8J9SMNX9mzizUuJ1DqnyYkf1ydJx6EC1bVj1jCjZaF56R2Xmk5uYD3vRwxPD8E9n",
  "key23": "3uEvAAb6grVnbTE7Nsrt1hBzD6Pz3eMeDqY3QiHgobZnZgmFtp4WwbecimqXCnRQrfdGEmLrK34vLQfzaENYCZ5",
  "key24": "447pxeFBhRKk6aSYmRDU5VMSJ9XiULiaAF8Y7TbCnHbNs5JAGGJK1xuDHkQmoHDkHqyVerB4pe1SiW3uNQCY9TPh",
  "key25": "4MRcniYRfUSrY4hGgefoEkr6RvjWzeu81RbC2JvyE1nm1YSgHNR6mMhg7Rj8u4SuiqcyHJXJdCBLhQZtph8zEVRv",
  "key26": "3YS9RsfcW9dUcsfVfXKD61BPnF1Kjqac6RB1RP6spxhctZurWxEtC2DRKQneUFaRSUDUkUShXXgNt5Vf4RUgzPCq",
  "key27": "4zD3NCnhyRyumxsQ7tDBPmurr5WGmko1WcnayQTQRvm97Hj9eJJn4fvu1cdWY2kC5GZNUmSmKuaStr9UVztQxZhQ",
  "key28": "5GMTComPvkQ8FcxfkbjSgQrkYy8ZBHm9EB1dPonUQV6ELaAc6aCDz6uDMt3H7LZxZ1CdWWG56Hp8Hiiyk5mR7QLE",
  "key29": "4yXhvfayChfkTb8qDETShtUWRWk3cwas55NKKFVxPfjym8y1HxBDVBWde2XNRcm7T3zmn4JaJpzxS2iyiuULGgb4",
  "key30": "5pK3EPhmho6U5R3qrmmBZ5FLoPxxdWBfN3bky1RCDbvVLpgd86g7TH4oHcxhVJ1F3eTKTfZge3ccfCVGWNWeW5G2",
  "key31": "2DxkLfKBVLBn9TPRGZmPbQbDnh2mYTqDZ66hZWroRxp79gWxaeZSQJw7oVegJz7wStZtcgYtoYRxXS87VFtZGzEq",
  "key32": "4hGoK6XaL1rvvKBedF3q1K8FG4PL3ctqf3d4sLizJeMpGgtoBrwBP6WThJMQ2FaDrJtodEXq1FvqL6eSHJAP3FEM",
  "key33": "4EurirArPujDJwHkpPamQsYdB8Aag68dwge9UAy7PdQ9xa3YEhSaUQg12NpJANqRUehVwpwzQhhdyd3BBZVsYiFb",
  "key34": "3HKVRRAtvnYrhwXdwSM999AEU1tsRFFrZ5CCSm2NeLKeC2pedhjiBNj2YUcu93DPzwDg5X3uSnTt8YNybo5eJQvm",
  "key35": "4mNQEWN8T37FVt5WAupgEpyW3Cps2CmS9NMwqzdRcXdJcpPFZD8SrmK7AUjsJ3RvQriGxcT27qzPR1oNUeyxoZ1U",
  "key36": "yU5qbDiiDEgUwnLc9JMZzgeZ7o851nEnBqYHdn1ag8AggcK87T8vXRtSWnhNCkzgGwL15QznDZ3dXuAsoME9YYv",
  "key37": "31YJpMv4dJGrSMvtoTiwGyqCKuPMWohpeQJEEfJg4i6VXRsYK2a68tEyjT6h2inHQGWMepDdJmzs7pPtk2Ko2u2p",
  "key38": "2NZfW5cyaX1Qs6K2nCb4isMrpXDY3e3DjJDtPV1YpCTx1QSfa4sZcZYhbBm29C1R3TvoKtGhLP9c3Cw5YYZVvMgf"
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
