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
    "5dkWth1PZtRZWLtJRQ1U2vPuVg4JQtjYVevJWhPNaSHyuAc4ztyL8EunSQnp1eXjEn42AUJiUeytqU5SQ8uK8Nkx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KFQWyjMbrLR154CYTfGMGCitJuKwtDjFyMGYKvRXGGL1EcHqDrfdmvt4JQonjgyTWTm9vsG8a3re8aAdPE84qVp",
  "key1": "5PUzFXHG7X9cVTPkdC6r28TNrCwivhBsdQwQaDptvWyyQD4rYRQ64SRCcArWddCYDDyMK1KcY1KjVTq38JeCwgoQ",
  "key2": "2igEMjPPxMWQ7DMGnBwnMQV5SQew5ZsjbpUTDNqgW8cwUwXKBZhnZBw19cbXyb2Kdpo1GAX5f9Sa4ZGTgANXQ5Bm",
  "key3": "4JA1KFZfcq2nFCjW4oC6r1CP4QaVJSs54zBq5La8hVLYRbrBGMXMZLUtEDqhuBxHzghrt2uMikWSWTH5cn935Zx9",
  "key4": "2kPBNhetFzoaEBrYxPXMBW56ZR9pKy8WF5pQWbgPWrFVDKUUmvnH5Hs9bLBdycewFYv786858VhcdX58YdLGuZ8L",
  "key5": "8jEixcdtnrFn7h6yggUQWjkMimxhyc4LTG7neH3QLRmVVN8TMbLwXi54PNGV5YEpHmSHdd99oomtqx5K9fPKXwU",
  "key6": "5QR1kpWRy8qbaSBR3uS9ox5QjGmRAB4XrXoAEF7FFWgcY3Qwe4qUTexmLXaEYAULqE4bRzuak5hsXw6arsFCMowz",
  "key7": "35jJ3nem6ieV2Ac9sTxwsXu68Bdn7THo5G64LPhDjVB8G2zKNK79GJTAjwoBcpo3XQgCJnmcs8Tz2YhMnbbgoUYQ",
  "key8": "4dTKN2ADeKGnE6rWisb5ufkVWBxNFfWMQsRgbDr3uYdN1PBSHqp3hEnpyfszC6D5Np5HRucvsyDebCs348F1kvo",
  "key9": "2tSNU18tiSZwfgwTfDYroWbAZ9BK6gB3JXvR4BnYa5ijrUbAxCZZUDfQRU4eVnbQrfdNSJXhoKTUM7aSzia4Muf1",
  "key10": "UNsnJ5A6W6H94LnxymLPvGFRSjBQhPKwNUvLtCudLcTymwnfCbkKQtBD8m9aKWQ5pUCoPCh6fDE5khqrU2exPbn",
  "key11": "2jbEEe1GwNBB9KKSLStb8AEUByY4VHSMJ25NoFURTAAgYcRS99v6F9asNG1FQi3SGmnygtX9cQcBtd8kVkkgdu8T",
  "key12": "37ELwPrvuj4n9x2mN6sZJTPYdKnt2mokLBgHP44b9Vo2vdUmChJTggsMvR2nB7CbgaaoxVNayNBB1pEynoABZXkR",
  "key13": "3gAmGEYrc9RdtaKkdDcB4fQxuUo2murCwi8asE5MtzdR6GyvhnBQjiVr2pAymtWnPGCxn2DUNTcfdPojhfJdYSdU",
  "key14": "346MecSUPzZTVoCed2aVpLMK6WFgbXoDmgXg2MPJ7tMFDC5G1q8bCzw4qghNptHA73g3aStA5PnKsYnv2hGQ1Y6W",
  "key15": "5WVTmTZT7aLbFVPMtZ2VYTR1x4HkXr25e2fe4RHJqkwKV93Q6Q7KoGU61Cct53E51ZLCCu8DyBZWxnPtpbKMa5et",
  "key16": "5D2RCtfe6wu6UoEBWmPWGSfn9sUsjaEimndbkLhumn9ZN4L3WSqyc3RFB41kLsHcncLi36rv4knDP9SKvX2XZgAd",
  "key17": "5VXFL9RfSKALvWtqFbEPVf5d9dswEktA4riVkS3q5SiAUQ2J7fwU8CngTpwNdXTH2CS8nkgG4qXX69Kxnkj9w4vV",
  "key18": "6QmTBAaW7hsHQ9pwbXfW9EJRd4h31T1LHk5xz94sDgKSY56xB412qtSCF2646K5NvD9gPThEQxMjBm6d3WCfiic",
  "key19": "5AMV5Np3hfp6zaBeFv5hkdJ7SEkfrMTeQi417EhbB25epVzcimFURVaB5f5VhoFAFStwe4hgjapZKNeGEtvsu1wM",
  "key20": "4k5LodPr9inCym4k1qjPAcY65dqyqBTVfhfZBtwEwG1Dm8Zv4VHDkNpy185Jbu42GNsJNZq5C3uTCDxmJATFp1p1",
  "key21": "44SXLu4tMPkvUX94Cb9nmDM2kf9ragW2rRFMoiJa4Z59w9ozfhdsb4CYUmsR1iMtBywHpjvXrmVcrfqi8az8LwmT",
  "key22": "5MB5zBvjjoWXaju9aegz9PwW2bhDNmwPwFs2Ndh3KZUShtvApdawKmQp9Yf6uZEaA98SDvs2WqMtiSsVg78jY7Ki",
  "key23": "3YQtkV8WNPFpUcyz68kbZ2m2GEjzf8gmxuMBU8rN4FRssisu9VNuQZ8bHYWX1UEY2xLYuSeacHpnBbvE8vemTnWK",
  "key24": "K9g53m9sLLayVk1Tmg2qVWJwHrqb9gg1bDNW1M3oit5ofU4pdADc8u4o3UXBKQhEuAbB9Tgr74FZ2iGsQSfSH7h",
  "key25": "41YpKx2K6zt3C9GNc99sVR5XPSNMt8mYjBBh3kCca7KUr6i88rE2HoJ3RqzRUxi42G9wd3X6ZYAoCNcuufm7BHCN",
  "key26": "3E2vsq3GVxqgLiUSfcyKxyVNpznQV3UqfkEcbrEKeDJLQrkGgeJQcS5zmFiDgtX5raPkhLqzJkTahaAyh82Wzaup",
  "key27": "4LVyTqA8Y5RgkZbEMY8ns14wdnN9y8hSQcbnFTY2n2pg6GYj9zEiBiobkMKLPQ3gPHEK4B15dGT5XfDp5kzMeDaj",
  "key28": "5jaELsZuHNryVqQ5vjjdRgWbps5f2ozRV8ppGbf6RixCo2JQmkdKtH3h1AtitZF7bSTvQNEWtkrmpiYGSiGqqZ8w",
  "key29": "2ZwyRxExd96vdCkDwDjfNTrL56U6bad7WxxbM8VPKvkCXjPH7zKyPKTqhnUCKKTVAdBctDfdSm2BK6jfa2dyWoTi",
  "key30": "2JcavLT9LbL7dkj8QMASZSfikmzbnpgdStX67noChLSEmfTLoGGhquMjhYDaDHpK3fxodqKiEZzYeKMws5ppRP2a",
  "key31": "2zGULAxAGuvzPigkienHwHyfrYvFbScW6MSkk7qRmTpyLt8k3qJsLKqCYsEHdWvA2e8FqzTtQ5BKbByP4dgQb7bL",
  "key32": "3BCEFYFfBDvXJ6cvXPtJGUCeweYk5bBTAiXa1QQRxJdEHpe8P5S7cTjXohrc1HoEJfNjNj6km1p7p9Mgdoy2f2U7",
  "key33": "5E3hj5YZKqYLBZxfDAr2MTYQKTQ6ZpXuw2FSBAhMZqXT6fP9yMP6V3pt36BfyrULt1WwriYajr4vkShxvFiWDum1",
  "key34": "4wy8cjh6qGsZsmQJARv89N2XEadfdLfvyHDaiRhxDvTwgkjBgAy9ad7N3fYJkYk456VQWAwHaHuLdkJNmtmfMuhN",
  "key35": "327AVj2pm78zanvNe5T3G2vyL4EVPCb3GV3WshK8ELmtq6HrKvY65G6MsmRGqvk2XRenDn5r4AVL5NXHN7zt9PVF",
  "key36": "3AHFnmY9GnFC3S3ywQVtuwLDVnaJwu1u7gXWSFKN7GGnkwNpaR317V6e8fKx9Kj8pQL5E1x8dcS4BR4uYFajiUcz",
  "key37": "4ANB229K11Wb1GMPnQnF3UaLXNhFTtnvBZL17k7PeU7mA7sGbgTJYdQA5dfbzrcU6CNWF2TSkrXZijtmDfZAugyN",
  "key38": "6GXWDLAvYej6HtY17gSdovD947Q1qvdku1ZBXbEwP3Wrxcar2jqU9wfuJEqWbiFSD7jmXrZ5aDHt3NqFc2c2m5t",
  "key39": "4LBB8A8hJ6hqVesMDBJLBU3CpsbeGLtUCCRUU6QRBpvbAWfaobHVEdabBSiuDe4xv89Y4KUTGfYM4HKzunxZxHPH",
  "key40": "4Nope8h2Avb3ke5bbSk6ZKnxuSQmSkMnVy24FoDd9fMNLjQqjP1Lt6f9wrXqS3yEDXuQxHBVDx6yzooHfZ8cxncZ",
  "key41": "3EL4rRSwDS7QDyfWjAZF4QwcCqeDycnfMyVh4sZKha3Z3FyN5skK87xQXHkLdaj5BNiRnuGeTpdXbw7Vz34KYsyb",
  "key42": "4m6BNJtPvvkhWjhR97okTJtVW171Qiv9FFZEcCgfQ57niFk5n2EuhgQpp31U4W7j64tJmbsjKwvvNNL9eAXhPjXB",
  "key43": "5kFDPmytTktUZwze35Ai2VxRrtnFhZh13R1se7Jdw2ocpBLhisjBuZmoUJTktYTeBnJYjdNFVNzAZMqrPjQghLeL",
  "key44": "4Lv5syyVp42PX1xJHiFDcYswEUsmmTvh8QXZi82DiXd3WTyszFVEc9btEWNf4GzWRbc6fMC9Xxh4mtCAG51ZEmjc",
  "key45": "4Q7qxqqRPxnjCU4Habc2FE9YKc4AcaPXdFHtwg6kQGERH6A7pek2c6WWc4BbFUca5hcaPGHdgAvp5S2yb8GU7Dyh",
  "key46": "5VMMhaatvnRh9FhsrXM2UNAMAjuRuvBYzdSE7Ldk1gCMSV4LVsXTdPh65TjJZK8Hf31avpaNd1wU6gRPC2e1VDsu"
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
