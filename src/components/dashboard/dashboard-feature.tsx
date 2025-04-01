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
    "2ajEaHbZJ5RNXCvSPgyTmgPqAyLBo8ygiHm7GNzew4xXLmEeQkWML4wfLgYNa1GUmnJCn64E6LSPbDgrzn5QdGeB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TYxs3hrPdNm5B4E9oU2UCsFvU8pB5i5EgnKVbvUtqBUJBELUS6B4tWaHQqoopuSLXSxAKy6oQiTdTjMm1o1nvSW",
  "key1": "2YkQGCe1xNKWY5ESpo4GDp1RBbUy1fN13iiM4nfs2SVQUDivYnvMJJLNcDxxBUNxQBBxW5MQEVALPv5KBYCo6hyz",
  "key2": "3rkWfFBqa9B5Usk5TeC5c8KuPazVgH6CnsSbTZ1UadA6cT3Bfi67P97XxZr9NR4gKGTK4axUmWhbba1kw9YPg1EG",
  "key3": "2LUhnpBNHKHwWrnHwAF7aKbNFocWekSGXPLEh3dUQJEFKEm6dEW3v4hns1VLnsKSX4dAEf3ZsttghDc8L3e2hGkM",
  "key4": "2V15XcNVsUeEawCwUGRbqjg1sr6wXfsY4p2GcdDc55a7tpgcnfx69kVqPupnqN7zF2J2Hquvf2xSmnBwMoXSrPiL",
  "key5": "3jV3GawpnKNFS42E8ocECFFyQThZrY8vysb3U7yQEDozBYpo4kVxQWtwxHD8BB7nuSKu6DFh9jUinNtoz565bdZJ",
  "key6": "8PK7cxrvna1GYGxA5akB8mP9RdWsAvM1HmrtxrjRepLnjnTeQPCBKpS8RsL38cN7zGsWmwAwAZ9cJ7e3Mv9CX2y",
  "key7": "2xnasMAfToSYPk9wC8TZAJFL265ZMpx2YNFU3dmZaQSq1Dtwa27r8MrGowdPkxjXR7m53nNAwv2qrKegdFp6HsGn",
  "key8": "5uoUGB9NfwjPj6Y6W6WC1ZaBkVLbpJdV2VmbV2vmdypCrt7qrDMhQefS9y1MBh2C8WeWm6VD2qG9ynRMfFQg2xTh",
  "key9": "thKBCeFdo9wQ3qNuKxnizzCuLJXbsM3NZnL4831aEtk7oBr2dyTPD657SApjeAC4VYPbTcYZUw8KBY37QvQpm9U",
  "key10": "5vrm9ngQsyvYuoQtQ4wf76U8gUhUU1fpHeo87xT3EsssdSXxEWKh1yXtoUhgx2HWNbmiaaS6yc9EGET2amhfQM1s",
  "key11": "4GZvXRqeVXu8EyQss5Lp6DPkLCXD9C7MFdCxLgvA1JvLzb3trgZ41Q4SaB3JRFpNwoxFn3eqxxjuiMQU3frzresy",
  "key12": "4r7WWajRt31nWdbXz8iuazxktSN2ZWGJTm89pPZo9pu89s8rkmeXfm59Eb9kuUoXyBzLzHMWScmtqPg6bgrBKHpk",
  "key13": "5TV3e7Y29nxPTLwD7injK8ThxF8a9LpPPMzcxBxgZ2oR7A9HGdd6NYmkFdE94JstbTJZsdSM7cKdhMt8PgAcnvhX",
  "key14": "2JrqMqUHkhRASdE9mWDbtGDBTRQHagsaXhFyZoYK1KKcNB1ErKV68qcPBQNNGPNSLjuc16BTrPr5gpJG9Ng5i3yU",
  "key15": "3L34d6pHSF7ZQH9t4a9khVMAdPF9SzpiSDRgSS57mdhBpmUEa5Fr944ysRmKUSJEypco623u3NGu3tL2Z7nynPip",
  "key16": "j4t4n6WcNfLH5WAMvpymUUMi7khwuoEUmbCAAiY4ruwx9JnEJzpFG7c3v3Rz2t9Ju39ieeP7GM5rgfDvBfEFw7q",
  "key17": "2CB2eFXiuZSEHn5DtjuctxNRVaTkZZ1q4jCiuQBsBNcUUcf5oB1rvd6FMBKr4y5j4qLZNZhFjYoiAsmWG836V6sc",
  "key18": "8UAcZdJNZ6RSDRjZvqAowmktFXkvNCtQY2Myu8NCg6Vmf7R66VgrUmYHg8TXHCdXquJ98kBFBMNa2c86eb2XsSi",
  "key19": "4JUjH5uM78ujzBKb5m1HA8H63jc11anN6qs1jUu22sd6oVeQKxrgFs8pZpt7CwwoTcSj2KBBA3Pfhape5BDz3G5j",
  "key20": "437kEiTsJUroAWFUyUsJwpTy5mGytH8w2NZFzHbMCHHoR7rEdrhkbP9hGPzXBLvo32RoWT43YiQ98RBnhwKS4sUu",
  "key21": "5pnHCbpucvobHp3hxEHCATDQCzKWizRDEBNfFcyrqdxcNfxaZxsXvwJtPwxW2E72k6AdhCCMCCtBDsGbwsbucKcx",
  "key22": "3GtKFYbDZ3cVPvxZcMWQoUr2VkTBsj8XBSUr1kdq2JxdUmq3yjPNMxSsxjgKBSoRPxwt9MoEYCc8RfdkYnoxhWvf",
  "key23": "4PvZUW6JusQnR9PyaMiBGgcYu7Fx7sfphCPpJQqYTdWv78eoZsf1wXqnD74UXW1wYEoeWnffeFG6cUdyHF9auXe2",
  "key24": "2DCkjo3jkq4EqXfHKhF75L8Zsib4P2GcZ2wmoMGy73UmHqyY1z1XxknsuRSDjWXXn23XVjX7CVkB8NtyhouCXzHM",
  "key25": "4qCrrGDrSL2Zo3ZujCBaw6iX8Yog98wbU4yDfQ4AjDMFGGMhpBd9NuMd41wV4XtPs8sPZ6sdJYFzpkcveHcPGh71",
  "key26": "35qSDdJB2R93k72C3TBXQfGvWARteHCrL9hpiSaYY2SupDsxMY8bsgF4ZR5uQ64cFP55DK18BfmtBpiKcbr1E4xg",
  "key27": "4WkJoNX1jw8n8bZt2znxih3wm728xgeRLF3onbrwzAzJ32pwdKsQo61MtrpE2X8xwAQpb67Sic1bqw3oJs8W87Lx",
  "key28": "5PpFPDm7njQAhou1Kt7UypppGemBj9N3SJDMkSqyrxgV3DthMFRv28Mnyepuk4byLLduRtnLehucqtU53fxq8Kna",
  "key29": "5GQr9Bweeu9ECu6avTjQQKT1ADS9YpF7JJr7aicKzx9HUm4SALgb87khy1zR2K1YDN3hmaDNoFjPCQGxAHQPMyie",
  "key30": "2uMXiB7snwbSnPCV8ZuoFKcey4kUqGKF8QoKzv2FX7JijPWq5SDCqVWYRJBswzr2vP7DmFFeABunHEshzXU6b2D",
  "key31": "5481EGkWj8Sgv6QwRx6NLBFEE1AGevbaKqa1oCyE5pP8iUwTon7QN63Trw9ZXToLm8mNEsLJdiUuX427bAtD9gZM",
  "key32": "3cS2cMoWNuwg3LcbKyBz1kaG5GYCB5BedBbSUUWDsmHrwg4YxweYFvBnztQnyYd1ut5ZrQ4YxBeFBuEjKxZAWLFr",
  "key33": "1nhpnDbpgxVVHMeAbwj4ePCg3BV5hpzUexrzvpTHxVwxQupfMFAwHPRqVjAyp9e4p2XbBSp6egahpXs1xaGjnwB",
  "key34": "5yPVRTSGEUucxUKfA5GhfR9iMYFga3amBveFfxfaRyS8QDSNBaB2LsWM5A5WGbSM4m4qTDss5fNQFx9Stedmz3jv",
  "key35": "5zsVLcUW9GL2Fz4vt3ohCzPQ1LJcXjTRh4ypPgHdK3ae9fyK5f1ok7s23JHodjUjFZ2xcshkHh5LunbivnA7Rwk4"
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
