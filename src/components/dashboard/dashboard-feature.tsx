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
    "4GsdY5nzWnZaC91zhJ7shPG4jkmXTkus9YkKaqYPeuKLFuPxzxmLCG1MDUBDapmqZBXkoevpwLh18AUgFv6BYYGP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NWBzVmFHe7xkYGDF1ViKhXEjFFAFSMqVrzfN3bPyLH2jCycXGMoztsGSJxUrTbPfMnFAmyiZyGNb54NCuBX6v2H",
  "key1": "5yY4S1sZ4HAAtcoFhH3p1rz941T8Jf4YEARufeSFBuVGamb1cqiZ5b7HsVUbnmKZNtqAhufHxHTfZjZotev3fdsr",
  "key2": "4MX8AybSXQVbEBVoaZSFDxE1WRB4D7YNo6ddb1kU4YWFo2jqTDh2Smz3zacxW7adgFRxZCBb6MCCrKCcH3XyLtLX",
  "key3": "gfgXffWKQFk63CJYjDUqUPCynYhHdpPCw1CJQSGzxDKxaCBdFfKbmgTVh1Cf26cBAhLLio1Um7WUpuT4oXtqAvE",
  "key4": "4yJ6ACCdb2fxQrmwHbFq9YMbjMKNT6evbaKdN2gzbMYNmZuKiq7fcXnxUeXPecQdoFDi8VD9MD69kh7SN8EfD2E3",
  "key5": "5UtC8GaaEz5zUbvj3Z4EKtXHkuAyGjJUrVUok6bY54MaMh2K8A4ojU29eH9BA9Z1mUUm2ux8KhasbwmdEniv5MSD",
  "key6": "3GJ3pYDZQ3iJ4PqgNimPvKJrgBdXiM2JZQTy38ECactL72ZSVnrU5eqvqegTqFjzpYtWTeEYiUe7SjCmZBjwTwUA",
  "key7": "3GDNgmhYiWhyqYwyJr9wJKDXgH6PKi3vn5gyBBRkBQKK8crWVJxFxa5UaX4t44gxs783crKBS7LTDQLTAgzaod52",
  "key8": "ZYr2Se6ZEQyB7StMQbJyMDuNQC7hkTZ6D2CiY5q5GrEioe96f6etBK9R5gjvcRdWUVrkvhfTWc1E5uPu3EoxEAb",
  "key9": "23NFWDrpwApLy1Ed8hk6TWr6KhDjxprgpEzZuaLdFfUgZjD9SggYfxjFcNhMekACycRTJo4aZyVrqhq91CcnRMCb",
  "key10": "dcFPMDpjwfc88LTbBvf8DxG82TYsjfYpmWaURPCwwhTZbZgZx193oqrfMTipny5njpRvySnHnSzV3qRXjFKREhE",
  "key11": "D4pm2eKgCzBet2j2fgekSNk96XhFXgciCi2YA7iyBFE9qU54yfUZ8Vd493sZE4xAxKjteUyMa8zBStHDo8YiyBT",
  "key12": "5cYE2TsMfM7MJ5eJZ5KVimWnAV7zMWEDQG1M7iwPWGzPA2vHiouCR2TkFRt6zw1TzoQf7Aj63jWapPyQhWXSYqDe",
  "key13": "5JJTj9R1vrRUqMaEB1bAfRP49h96m2AfUoabDFPmZ6THuBGB1mQpVwxkoaK4CGm3ZosZyGGCgmGHjVhAuCTz45no",
  "key14": "3RbGoaPfmZY7CSngf5p8Be3or1c2oWCXPxUftyt4VPyVEvqQ2RTBZpqTeoWGM1vSbKTWcqXGNrgxNLd2dnUnZR9X",
  "key15": "4P1VHhFGTgjBAGvcXbbh4LzgA5LAGRc9xsnCmwE3mN2M1MjXa9CP8uUnGTqZPbRn3Nd8VZuSzBZJp35boSj6ocNt",
  "key16": "3NyTuvme2Z3tZWujxqTQ4qvRUMbHiurUWcpfTzRGvdiy83aeabtQoVbS42qD56JgLbeJpzZWGesAhcNeQMWYiyQf",
  "key17": "4kuoQM2GWueb6DHxZVbtg2FaCnqXo2b3uLD8qNqKAF2wTLKbjnfspeteU1Z83SvjBtsYagvrqtVDRp8tiUiFN27A",
  "key18": "5ZJdwv7Eo7DtDxNzE9aHW5FNWXEj6f5gFk4ehg446SQk4kHCBYygRXeVnNKbJN5VNk9qthFUctVkZtQ63Ctob8a7",
  "key19": "2BkHtfKjkHLw1VfCXVp9tB6yp2diJ3n9w4jSejvnJR2A4st5pKhMq1HHnzwBE6ALAz2R8iDBV8rahQSeefJgNN4q",
  "key20": "dyFvHZo71WLdKzFhGSLSpoCVFUj8SYxiWj93jf5yjtJG8nCTdP9nKsdryLZhF9ydsjvHdEH4XHgZRhb2qSW34uq",
  "key21": "3zKPdXLw79i9Av96CtfHLkjCBqyDYfGuiZzPKjjs7VpgagbqeMFhigqxFYhYAvqf1THwbMevLupvnjccex97fqWU",
  "key22": "3j4Xtiekjg9GZt8hTCqEX4vXoYoHkDbAunduWD5bX9TAXA7KJ7mB6iszz35zfwD92AJ1hgoCMqrJDBuD9P5uyWsf",
  "key23": "2vJxWyjs43UgsmZQnoKp2sKGAhcdXf5vL1vef7hf3wZnwy5czLvwmozVA88dtjRgqmmgHzTNxGkBpr7bPfbk37v2",
  "key24": "5bHqEWs872sd54VKQW5Dc7QnJ66hYcZQQsu1aXnv5nSJPiQjrosW5gw722WnUqaNKqPkaxNHDtpfFHjg1Jqm2HT6",
  "key25": "3c9xMffp3d1MuEj7mvJsg8Hxx1KTtFMNjyhkZhMUR6LZyJtNFNL3Ju26CSUJ2c6HXj7h8Lgt1kJsfasS4XjKptSp",
  "key26": "2qmmvEEKMQTV4PBAizoqHMMgNNcNSpof6vm3WEn1FfpXvZiP4LShZJ7sTkAyXJTKbrnsKtk4YbRViiKUfQatEGAe",
  "key27": "5fFoJvqFW9BtkQpqjDiqGT63gfNu3xXUoHFHcPcMnmZdeZdU43ReKFRQKcyAZbtDZURHAEw6yuamLPuBvhBF5k5M",
  "key28": "56np1n2XSoobwW4VBZFFpSD4vuPUynzqfuUgYu9SWfzdjyYvxqW8suVkR2dtJ9xYqyY4FuvZRcocoeV3j5o8iVNH",
  "key29": "2Z95fb4kfRh3G526kSpJ7hYR3xfhqX7yd89cwHU1Y8sU3SMJY6V3TZ7NDsq1KVJz5NtJAJANgBPcmepVvVZdr8ra",
  "key30": "4yQgjgJMjgvJMoqfvLc6pgwwiXKVvFJe3Rmtr1si7Sfe5t6YB3zhwLW2LryEoWdLMpdexB8LVrkLgT4Pb83EtF4r",
  "key31": "4A8FxX8ovDi2js48VcnK1xnrgUUopRCV2gFwK8BvtKcr1UTecbMPKjq3L2ZSWnVRaZmq6HgBJUD7VfzfA3yVk5Yz",
  "key32": "4N9kuXdkb8R7ooZbjFBmWsRUDxCfBowSJh33FXzE9yyqLkp9xmNiGYBaLX19dGvM1WfK2dmgUM2LCHeLj1qa7dYS",
  "key33": "AVWRkx6nbuHXs6gsT3TcwMQCfnMiy4221E3QUsMni1bGui8wCeErE1QqdJA3beGjQ2L4sWNwanHNiPek1XzmqjS",
  "key34": "5picifdYw635YxQvtFttwteuGUi9sy4tvMjCHc1PxPERajiS9xFPoPUMKVYjbvFUe499vp5rayZsszM6GmErdLS2",
  "key35": "UUJW3QPqdDdJcbGsFnKHKrntwQU57qrjBomGrAzJy2Lmxiq8Hy6qNiihc18zLVydWf2vzvivnmDGaoXeKxErgos",
  "key36": "3Nn18j9qzNQeJ3XUQa73fEmCGaBx7E3dXvjUMs1b9GvWf43kPtkKG6RPDLLyjsbwT9HZUw68fURnwWXbkRWCScYT"
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
