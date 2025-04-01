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
    "5uEEdWtoiPTTYzBsBuwe3ygY9ATJuYodbgj1GVKkrvcqoCn63mFt7WjXCFeKaRe1kyzBXDYEmL5yjcCyr1LfVRe8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35nDnyhXDaF5x46eQWX3sUFPzq4VbcfYFZPonhrZRaC2wW3EnfLa1uyH6KW1hgDfrgHDeK6YuyqhktvNsbP1QRbJ",
  "key1": "4yUbb3NCEEBjAzUF9ghaWLMFXaGNJ4hCeLR43hFo7bsReuzLYY6xcdtXLRAYiXX11ZC1j5buGuLXvQJaVo3Qjpjh",
  "key2": "5c7NjNLnKn7oCxDzULxxqTai1mP9wXVq6D9azjAngiS424ewDVxM1nHezpv5GVYK7ui658DD6G42bYAYRDomdCzw",
  "key3": "UTguaziTXMN1smJnC7FtwVcqZwW1saaniV13j1sViYoH5wYs3ALrPbhkp5nCQAAKoo6FNxrCjQ7v2RHN1uSSgsM",
  "key4": "5W33ns8SpBa41EV2VArijoRPw3h1BDrqaSzyp88FnpK2rNfgyaxFoz4mdURgGkZgEzNY4RMBgyJZz8jt8zby4HvB",
  "key5": "2NbVet3kkozp4bLbSJKJt6gEEwCjd7FM8AWpeAXEEEW5vZxmveYhH9ZMMhV1Lx9cW8YxA4MC8Qm5H6RBmpkXf3WF",
  "key6": "3h4MHQYHvCEMmSfdR7FccSjFSFq7MomHWWvDyKkFDPLza5HDWix6ckiYvRDyrZ4xnR8YvHcb9EHGU1RnmqgRgxKL",
  "key7": "ZZiknGNks1XZfLsvnB4YMrajXGsmwcr9Uz57EocyLeSxjFeMCtbGMtfc5ec67iU4c5vtssgmjkZdrGPFcdufZWa",
  "key8": "5r8udWYkkwYFq9WGowYjrr7YJ1GXV6oGR5unxwSszk7Wj1qnKE3F1C91wrLDykLTAf4KG8Pv7HV46P4p3ZNcTcPy",
  "key9": "3B7UcLCx1YgQoQ6gXZeZZ2AAKW3LjbUxUWxfdhwv93MS7yQEnzf7w2TbUsesxoc9K3SgcUeWJUcr5SBm9TZiBpYZ",
  "key10": "4Uj6hFpcdXNddEmS9mj1pGQFuyqzw6sjshNZiLz8tbyFSR5xvyyZCMcu3v9jC5rVLPD8zo7kZDZC6PQ6tRLV6H4m",
  "key11": "vptxrW6X8xcSWKRsPCxTFN7Zfxz1Sx1FCN5xFTrc2T9RohMBLCf6Gd3HvpwSd27vn9v5zVGqtmcwk9FVhRCT43n",
  "key12": "22ENT5vcza7xa9BCBv8aFkYZDZYuPEk2AdQP4u5Q4bmMXeN5eSLG7gVNN7sX6TorcARFoB8ypmZZyqWDfVLBsfvX",
  "key13": "5K1vRJbiSZ1ZxPPiDqZaXuKePGEone7aNCGEDuTSZrFwKWEdzmuETzwXrhV1M5Pw3qzDn2kLua3fqQ4HEc88QV9j",
  "key14": "39rKxgaq5FLw2FJ5owNXwNPRvNWwhf28o3JJcSjYGr18kU8MwKejp6UiawLuzAYmgTvDcR5BMybZJkxdVnyd5zBB",
  "key15": "2Dt2YpKBsd6Np6hhAs4cyxfCJsHNrVPQyqjB9fxbNiT2ugJUW8qdTfAwWLtgLZWfKy6KzcQDQkrYSJjtqsZgc1gV",
  "key16": "4qpzDTJhMcS9TDjzoKudq1cPZ7h96x5gLzwcGnU9P8L1eXuRJFbu4yLhYfLAro74k3YBiNASEA6WFEAdA375bC1a",
  "key17": "5FWUaGmumb97pNVuGswC91T1CALyD85wry2xJzg447sHHpHEESRGfVPKZwsbtoSCiP1ebYRCorJU19dpFZmej655",
  "key18": "mGmB5XVTCkZs9ipr1H5ShuDBbjqFubjS465UWtx68YkxAq9RGVxYdtJwyh7BXS6vABhL8JP8ZqVtsBAt7KzxzY5",
  "key19": "3Ertyz5QBPekVqEodFqjUCNEhR1iS4KEBLk8eiQ22C4wm5F4zbLanugQNjbFsKjHYbwoNoG79QuhMwqinF9BVRWU",
  "key20": "eYQXqw8UVo2Q1LxDBEjH1FhcUuJuaMuNUKZSDa8WpkkQGGyE5eAAKReznih8Q9A6Y6JWByHME5S8e2so8KobLEr",
  "key21": "4JB5UKgUT6MrzvUP9RPJ7T6vwZ1c3dzMCoPdMQy7cmSXrUv4vbjAhN5qFe58DvR4EqZb3BNyWThioJm57jfgrFpH",
  "key22": "3d6hoxNB5hVvo3xpQg863N1YqsFAUsCF8tXhiMZfK2ZfQJjumiVyj5V9cvpgLv4CfD6LAsT8Mp1aek7PRbgLPs7A",
  "key23": "6ZMACAbH4KhRTsQmRQytPcWVKcirxLhWL59y6mNFms8wNmuGPLw1J3q4jDRQNxHCL7ACAxPEcYTCKtzuijcPEgn",
  "key24": "2CbTk7EmUhJdnLgFxmYxFgbTP2jLvW4vW5oGfU6aLPNRuE5BeQEU7VhDARdX2tbEh4KyUkd9icFihYPTYUouYyQG",
  "key25": "zjR6aggracVdShsVg84Ct9qGgamMiBbEr2Ag52y37eVuETq6VAXWbHRrMiR6sieCJiLjR3a6AMFjqJ52HbLbCdg",
  "key26": "3D1RLh8p4szVbx8c7dCZrKz5LpiDVVRxSd4N7anWdhseXr5qUBAeakT8NYv2W4bUgF1QbqdKAKLxiGcDRA4rUBsW",
  "key27": "3u9a9qBi4gc5piPcrzYNxkbi83Retyy1LtxBHQW2QrtBRvrBjf27yivkLeCeM2g6Y4FBZQnrmP39TY18co8W8S3m",
  "key28": "63Wwn2CFXnJWQiGyR3aHS41nfi5Eg11ws9ixwt7zpMJNpWkLkgvKo8UGu1WFx6hvVZoiB46TxT1dqznjYBaMPUEH",
  "key29": "5xkvbfX6woTBDJqbVCwMzxgEM1awKJhembH8DZGUmm8GoCdMrHoR2LG2ffcUE47ziGd319f3z9YDKbrqm2Bu3weK",
  "key30": "451PRFnrP39xKtFzojkavSFPwD83dsAYvYB7ucCYXC7PGtMQ96DFcd9hQA4o9K6jjg9PqS9iu9MrE7twzYiXtpKR",
  "key31": "5Cu8AJWTgNpWvU6gRrqsMJFcsTJcNGYnims6tRNKVmVujXNvwceHEvgtyCgZDEiVvYQdgionJDS3zqnXyPinXd9s",
  "key32": "4NbgMZzqrnrpY5Ksqz5EsGxV12HG7PSuV624CRcph1cMjcSnrE1Z39mUNLWdFhpzhYaUKZiEK63uvpk5EUPuhfAP",
  "key33": "51yrcRNC7a7H4Tit492wit3JFihcLrcmWeRkMXZwBxDJ8LrrHW6AaJpkoXkaWjo4GV9Wb1PqXgnSGCPEGD65z9WM",
  "key34": "4bCyko4Xz4sN4uAcaDWx88Hb9g9EdS2ahvZxVvYZhm8JizdhMKZXJ9UmnHch65G6GbjP6rTx3JitvkFxBv6TUosR",
  "key35": "5spwxNuoZ1rK5XDEmFRrebVGhm7Kwij8Ps3oTibdGTsQhhrVYEhGzxmpCTDS9AoQ37HaT3FB3VmJ87wBwmN9FHcR",
  "key36": "5EZwn1zQNZeffVffnDQyWUAkmWcV47WTNBq3oX3Cj9ijBziG7TYDt7sQPW37szSkw15EAPR2mxVSUwFspWhb2u6w",
  "key37": "iVp5RFzhX6rjdS5VrUb6vz71PKFw8BoH1sX8yJ921gF5QQ5YUKvjcLLzcSEps8PVdMsxztucExvSDRrRBwZMP6H",
  "key38": "5zg4wN5RrUbPsQBnT2eJPMFzbab9sBeczAU7VG5zU8sVCmBHnCN656io4Yn9pUvz1wyDgtFUgjNTuMxvP3xixDqy",
  "key39": "4nmMNDSoa6QMtdQrES8c8XbQdW3TTL7hmoMZ4VnzRqcN1YFUrR46Egnb55hF8BCWb2wz9RV1YE3E9m6hWiYEAz3W"
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
