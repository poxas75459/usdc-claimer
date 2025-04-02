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
    "4d1DjgGiJ24dBe2UsQr3KmeAUfr122i9FzmEYCVWnnf1pjyMacqkbwSJcXkoUdbQywBKoHM3BuQBwUMHWiC9tw3y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tmANGv3vP6Th4FDemnawaEM4np8TEuwhajEXk1XGTZgBHzcHLwnqvpQMrqgmPq19VmpqT3bcBaESaFfa1HUg7jV",
  "key1": "3gmVtspq5VmHSvMopCy3sefsCtd3SvEih3SefXLk3myEiVd6DU72jzp7fpi67qbMj4v2UzKFLZJo9NFdXi1revrS",
  "key2": "2vMty4BPn9dbgHb3Y4sC7KyaNGgxwuQjq8bHxjnRzUKDH4VbLDNoJ4z17FRPW9fpV9SSiJWqvmhniPQV3BjajPpz",
  "key3": "2QrLssG7vfnTHQMKewNvn1aEMZ43ZkNbttgEsQU6DRZvoTDUWH3ivZWnUUzBnechzvskiXb69rzthTDn4K6UxJg6",
  "key4": "313EKQFszqSJ4vDRirHqYDmTswRoRGRZV8pv4XDCARjvArdsqU5hUZbm71yxf7ZvDZuhsH21CrwiWnkeweMjtgQo",
  "key5": "221mhw52PkG17bGxxmovdjXWd3XgjyFZq5ciBH7n82eyhsVkpK2Fvbux6Gdza4sQ8XaudjYoN1imRUiJDXMdMs4g",
  "key6": "3QdZGhpe98VhWpSnEoDi47dRNpd6B6K9zY3aGQuvCcfTyVh2Vtjr9FkBxvX4kT6KPAbYEvTkx5TunhVLEzgaB7cf",
  "key7": "4upHgWCQ6zJPQpmz72JK3irjnSNwTmNXeX6ybGGGGvbbumrZTwVmL332T9kc6mPmKFmSVM4v1Dbidn8U7AZhKRGG",
  "key8": "hfyMS5pfCwQhV489tw6a3dWfKjBNweceenPsGWu6n6XXdDuof6rssQ8ho2dAKaXkmZZeZ7UkVnbr9E2z1SHUCN2",
  "key9": "5Fxn7kWuffSQ5H9ALz1FFHUkD1c1QJ4Lh8W9bAyt947gdcyEFqKkeU9jkFXxCnf6ZUSGY6FSzvK7vAs5hTuvaweL",
  "key10": "4rBWYtMCeyQN6M3arEBrJCzzL7fcTEE7toWcwF5MaKbmD69SbvavW7Srod1XDr36YMrBjrRU2PNLsjVozcZazqx6",
  "key11": "4NiNva12LNCCa8FTPDnWjyB7MJAfVsRUD7v5YwccsxZ2EjZoHvoVfJxnDfmtShsvPbn7anof1m4fhtzSpvfkJqMi",
  "key12": "4hZzcbVSfxvg3fnFn4qmVEFvXD2HsF8F1VMzvEV6MdfqvHFHvbD5MQu433CFZEQNX8N9zEKPAZ64s76cBGxMjtR4",
  "key13": "2WWMJYBhU4Yidn5bBvPhUjYWX4orARNHABQjbnbhvXFLGBnPg33hXcHitwEbpUXzidFEkejPAtMfT2F6VZuvoRF7",
  "key14": "4zTARuQKcbrL1sfQMvVJ8RAMofkgYfQp5VDtr9dPVhmcoT6oQmB87bAYsfcK7QFkzZCrhuskcBARZ2rR42G8R1jV",
  "key15": "5YmCutmmEkXWepPCn2swmzYjBrBoFSpCLCoKc9xi7wxsmcoaF3ymrv254k5pYBSJTzabDmytHJaUpLvtketZ1fAA",
  "key16": "4vmnmYaZk6gtMnbrYHdoUaWTDTtRvx9H25uGDvGG6iQ5yPEqkECbgWd1Gj2Bm9Nk9MTyzuap6dEua8eXFJNeTszF",
  "key17": "2f4eEf9RpuYP23QC78cisupgKEMgmh7tM9UUPu3Luj3oNKc2w2WDF8zdBr9fUB4sKNukamxseedXomjahAf5mM3d",
  "key18": "3XZjpcgqo9TwUch6BVUiGqjuQrMgPty8NheL8F7jKtrcGPsFh1HdVYtnELVpbvmnQjoXs3gNX2f6RePM7ouWYzRi",
  "key19": "4HCmVocjCCJzvFPWemjRpD9XvxiTjfK5CYuhX3iAf1oHkLRhZHNC1dEwyu6dStdUxtC12D7KJC2AqwxvUhn2Wykx",
  "key20": "4JXKsatcPAMqaYpogs94VuwH7w1RDUTYWh6P7iMeUMnihDJXn8MHeutzBQh28wtL9CaSKBfEJREnhmTUZntVb7mH",
  "key21": "5GDEJGpP13SQLJKsAznoU4rsVf2ehuEzYpaStuxrWHniwjVQXCEgNxA7m4puB5F3KxTqX5WYcWb5kXyM4jdZazwd",
  "key22": "5hKCZGUakKoaepNcJEheE6t9UrG8z6aJaqGD5njVqDx4DE6EtwCH8DFgqyZmuqEdvTApor4fMSgWXcuNfuaLHVfB",
  "key23": "3iMq4Ef5PT5X82WrAggu6RQwgc5zezR5kMmoUgTgb9DJZeyv3QwCVRRNPjyjoLrby2SBgNSKejVm6JLtS66UM4hc",
  "key24": "ntxi3d7qahBtnHYnn4kT33s1LQaZCVWFQJziZ6huhXBgaTpCF1um7w3T2EYWXysXrvs6Kv9FUxY4vNUighVwU86",
  "key25": "3tb7rmj1L1RMN1gN5XCB4XZijdRPMPqT1h3BXtrUXK1vPLbGqgEdPhezEsBz5xeg29rKAvSsfVpBdcAB2MiAQRbn",
  "key26": "66VbQ6uKQzJQXTzMscKJ9kqQzxK388MmN26RmAPUzxwkVRe9LXpQ6PBXyiXmk1YCZR4kEwRKxEjPxtu3yTFFxr4v",
  "key27": "5cPjoTtFubeF8khrXkJJNtYm3bNDoWfFo3au1rrqBVwbDZ7pDvh79Beu3e9Bc5SyGTZFxRc9fVoTghnRRLDvFgue",
  "key28": "3pCKjRosGUKvDSCRqNjKK1b3MgNGpY9ZoBXMcPT3icYiEZJ2FZMbNQcxjDDgTbEg3VqsZwQocijrqms4p5BGQ2bH",
  "key29": "2fvuPyH9r9NCUmQZCvVcYmoMXH7at6RzBnkgG47BR1UoJD8nKKRHDkt4FqZQecpCjeDn1o8WENMLBxrnGdda5Ycg",
  "key30": "5kzJc13KKCV5qw164jxFafDaVknm5vtrQBGxyDXUAFbeyV2j6MzkHm3Zk8ZQcyMkRYqjqt9VVHLBz4r8KZdhG1j3",
  "key31": "648EQwDkBq2daNcn92skdFyRyVqRdfrDRTKyH9yL6GqHy2VBmzpd7JgfyNHDLTm9Pyvu52oiL4DDVT5Z1JPj3ST3",
  "key32": "2XGAsBhLmRqprE9nTVpeLRnuf9Xe68WoWoXfN9yf7fqcEdboQbR55pk1GTfYi88mXhVFKWbYTRCQGfB3UrJLF99o",
  "key33": "2y37BYgMekA5eQeb7ks9e7CPa6QzBhnUvLvMtMv5DrRnPFEGZ73Te4JkeuEKaPREF4SBsEmj4xp3W9tBYjHfPcs",
  "key34": "2zTH3FM9NVS5bgtHHU4zXE6VFM9zEZ1E4LthJ6d5nVGBgTHBDjBq8Ve2qJshPST2nmhVqWSCU2iUCtNoWq7wK8XK",
  "key35": "469zRyNVE4ncE8mXxhQATP6yK8ybNc1qzc84BmJe1jSHEwerNwhjfPBCJeiDwL77bLhCjZsBLhaXnjo8mY4us7as",
  "key36": "2jQzeEWbwJMx4RK6e4oVV6UFBeYNmRbdJvdV1axSo88byWURiu6F3uQqwct7FCE6vMFeurSSq2w8cA6LCRjTHjej"
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
