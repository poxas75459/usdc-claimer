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
    "2XWwLPWz6pa2fyNRX5vTpCs8Lc1mhX9bkCvrqkBALbaepheLpGPURdkKD9PFNuduWSfYYvShZYdqkNcdXj82W9m5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WE9KsFcXVAyohvkCQsWiBhkLBZ1M4DBYcDHuogsH5X5Hh15Zysm6wo81oZoMXNGBAzMjo8tbL5Zde4oxxykyKzD",
  "key1": "5ogHy6CrWrd4LcZbkcvUxvEfyHsKdcaQSRmgPkeFTEGz5Gpue1rvRW58QBBsUCdnicZKjuixQ55XEVQf6cp7SQs5",
  "key2": "SjcDddsy8JsmHmKLurrFsWsR5BWpenvGzSFLEGGcpCsVKzdXyVD3o9ufGxMwzacUgaCTpWfRUBEvHA32t7kJ7s5",
  "key3": "2fe72tsx6sFJuCe1MNhCMXJfSoZYuxYAzMeGXqFJw4NJVbyGNUxy1Sib2xa7ZXtr4EisZndYjzZiKU8araM9QTpy",
  "key4": "NQ9PqH7r255DeCYFYVmNEm7G7HMT5navmVEH1pAwdWzu8jSpoDK6rJDyNjCJd2cRUAtxHYGEDLuEFqYZN6ftDKd",
  "key5": "2WaHtcspTkGphFgd5A1q4f1ZvdWxTc5paLbm9fPKKoJa1Kd44Ua5k4fUMoey6bHeTPYCrWWUj8mce2y1kWjqtwAQ",
  "key6": "4Lz5D9ySd2LvtJnfqCafmRbvvGvJsKX2vTBRmQzUMkXRMbaM7qSmPEvPcqCez7v98tp7svdurRWj9wsUjXay7TPY",
  "key7": "2wsPoo78w4Cp9SaiTue6UidWo5RiMQFjHnJSshKbC4mXEQeZccWUZUqkbPqZrcMMZsfkY8xXiFk3rp3znNYnztMn",
  "key8": "j5eEz5QnxQDDzFRxbh9rUrW2stNpmkhb1kvgUp1fZvG73TXyuCFVMEjGaTEaRMf1XvBdtQq4JC9DejvYNRSCWu9",
  "key9": "2sk14uuxAFfXabP2ymdkeNxSZ5uJnQTafhiNFatAeAYGN7eWqKQsxzNe3mZU41rkRoxz3fypV9pugid8HAjcbJQp",
  "key10": "2uCQ1jxDXbNjK8FrzezL9mh2xVMV1kNxJJuUStiiZMbU9Jw2Qqf4eb1bDKvKXomwseosAqsezGBbR8YdZVytrJeP",
  "key11": "4LT2djfgNC4TkXT4konGGTqx9uZreUdg1i3Xvji3igXY8JAGARjsyQgpKa2EUgim3xCzQ5DZTesrAYpzf5jFBME3",
  "key12": "2spi7H4uoQGQySDeLdufMCYxvfqcG6AM42ySNWYBa3ABwDUDPEWXZijUuhFnyR56fHPSjSRLK1HoUfU8yHCDjPZr",
  "key13": "5qz2He2EFEyoC8GcxA6tPrpxGkLePoTrroaVCrAubQ9jEwPWyQ4aw6utvnchjA5uzXCAjt3Mj7BRWQj6cJQGYURH",
  "key14": "4hEbCrthVjcwx1sxyrbPxU1of14sLH1E3N5CKg1BkZecFVp9LNvBLJbZuETwUvauWUEnUq4Aq3a5MyYS1Hdxhj9D",
  "key15": "4R2Xx7vyPjFs6LjryXxVNdJXBAzQdfykgxLwtmSfkosteFpYStqfwsVMF5DQ48Xuvw383bmRjNqzyo9jCPE4uoMw",
  "key16": "ZoEUPXt3gA71Jxz6UWVKZLj8oWAEoWBbSTpkefwYBCa7xBgRa7enEytQo3xYJDEY93gYGZ4wtqWKuvTyHVeNT8v",
  "key17": "2ofnepnz5CfujCY9i7ss9PxHMVzrQ7k9tAniMPhrRoJ7GgSXLfQ2Adtfu3g3MVpRNTPmiMoG2Wp1AMHzijQDr9Gi",
  "key18": "4gaqybzfQpPqEDybuxeru22CgDpwdwUN69btancdM8getUvqX6CKvd6ACjhtuAUjcnue52SdCbmQ76WQGFm65hkF",
  "key19": "2P6GWvJM7bjTYP6EsaXByzghFDqrFSFr2EMPk5AsK3ASFAC7jKw4G6ECdBzxpRvpK4jgTNd6VUmbrVepuCZ6ay9g",
  "key20": "5SwCoP7TGQAvcakUkJQZQkDSCogMn8mBmg6a7o7mcrf1m46mu1H9Y39kyn4LyVCdkxsVFHKSaXMLGeJZxHq96ED5",
  "key21": "2ZbzFxr49z5oBcP3dkVSo6Zx4ef9TAyBUpQ5EuknvCVUAhFPjfnqQCj78LrnkYchDL6cYR3kfiZi4dueVCVsb5dT",
  "key22": "2cjWHqUMGVyJGK9QayGpT1bJpAtyf2j2xo3S1zr416aGfgJ7NNBL71kXF5n6yyezW4iSMvgTicjxcUyJg2z1iZ4e",
  "key23": "ieyFPkzndJmSVs6dwQUhuFu5GwVQrhubDJij1QfFF4MQtSgs5ft7j5i9u4gVajWNZjYxX3vj8KgqEonpSbXp7gu",
  "key24": "5cL9HdJoVzotCMn51BaFVdbCnbNWH1nx5E4bEEfcDhZCwp9S2Zw33MCRv3DZgex5uXd2JT6UhkwQ1Y8aFKYqRqm4",
  "key25": "5orRwq3SCWUs8yrHsTFiYpGTX8HxqxvR4w6JeZj3mxTJ946zdQ4D14ggNHtyd2hbKXqsiBb6nhBWdRfEcdSajvz6",
  "key26": "4Fo4BdBY9sB8jt4xHMWGZ2aN4cLAxX6ddUVSCXLXBPxo5wSWLZhJ91GsvrkRmHuMfjW1zFtjLo5NCCqukReYgiEH",
  "key27": "3hrF46foKo98KFXf47USav8AjG5HpK23LwoP9c1ptxSsSc3zLRWYQVtm255RuFRvEUqdBK5QURWC9z17EvxSkyxp",
  "key28": "DdrSVsa51bdBojT9SHAqfcHufYm5bTrfzCyH4HwnpynBBfEnK6A52JiiGVA7tmxuj8kXCS3cYX3pkuoSryY8uBd",
  "key29": "4RXKyTrFVZhjCVkjaZdGbfywPXVppidZEm14FmPhwCNh3db4pparFDmdcoiBXrSVL7VchCmbG9ZxddP6ZNdPfPRL",
  "key30": "2628GmzkUS81NK8SZszC5dJgVa2RQXda77p4b713xtM3o6bwyRRY8XACy8MCVnWyfoLjpMSw6Ua1Y36TyUV7EcBY",
  "key31": "Q4xiA4tVswMgrmTUqkQkxYwyr6bybmUVSCKVAKKqjtNXKiXr1uriLU9KA4Zj1EZFWhpD19ieUxEpiYvyonPex4X",
  "key32": "4KzVaqzuZ4fUZAC7fsLtKP8uJRCUQcqHHVmkTwCRXf5dKCerMqE6Hn11mXrpGdLEvBEck3JhYVYp7jGbLHv8UH4c",
  "key33": "45RJiDFiF5E342TkytC9TWqw3xGNsHXmgcswCrYwNRHUdNbN1MHkaCpS9QfMe2YmHCksS2Mkdsr4eFmnfVLztsJp",
  "key34": "jPUx6dV8crpR9agNYsMo2qfnDxTgsRYHmPW4zrbwE5VXN5vNjhYkAYrs8r98CcuZgaybSQat7w94JyaxoPYzV5d",
  "key35": "46LAEYArpjKprYhHZBVibNU5yKATETfF9Pw3aiwBP37r6iQCAmsXr18ZkHwjaPmeZ5seEDzRQBRKmvyo34ndSCTe",
  "key36": "ke7vNYCcBvLD33jcGhCco9v9tdapNJ4PHdoouM4quLM4E5TxTijH34sqgoXXFjCQMpEjXAQ1Qi2oeSCoYF9T1Yt",
  "key37": "4L4nsuUkP45zgkUBjb3Jp7b2qY3hJXcYT95xFEVxiVXiiChcTzwAPUTeDbTBqLvuaNCZswDH8eBoRCdR1hwXXW7U",
  "key38": "2PPugD3YFiDqWGE9Ph2vw6fQjDAr8rfcD4dUBrFZoxgSjfPMV7TVGYyAjC2zBeeUGhLoeRjwwLz28X5UDcrQaoWW",
  "key39": "4NEozfjtRKWBQuu5KtsH8JQszztALKzXmPrhX8QaH8o1KMQAhxKxabCgmoRwT7BgNhR8mw4TCNZtucAA1ogkrtpC",
  "key40": "3wsxmfC1Zkb53vm2vgxrtb1bkhEicoNwPxj46dYLRVfx7QUQEfctwe7uowd11oBcr2YPvfFA1aPGa92CTPzUB47t",
  "key41": "3d6gKWnJtKMQKNVmzGes2zbMj4c7WEwktFrWcJ9JvVa3WHVRkMa2bpgVgn1BcPUc2MyXUmX4ELMmZbV23U3tgWQS",
  "key42": "2WrWUj5dnKTQk3eEVHjFjdMYs4wY5UPYoLuffyuPQV4RAuEhTPjNc85XU76dm7DLqwpQ1iMZDtXzA6yr6pR7ay5h",
  "key43": "4MxEtW1YNhWZyzPQi4ckuuyrCXpN622LFJtF1hgy2zRBkGdzNamzckGhGHTiLwFLXfyYEAuAwNpRJ7UGCU4xEi6o",
  "key44": "2VZR2akt1RH5PTWpVYsH9ePv4KTveCLKUBnDb9Wapd9KK1iY3G22pmJFDXDJiPcwaTpoWNsNosDXJhGKpj8mrKtB",
  "key45": "g2TekQ3btGePyhabHNDiFRMAuCyZ1yoKiVCycbUqtvoM9tYkttAk3J1BBjQ7DxH3xZLeA8UdiTdggSKe7u2zrxD"
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
