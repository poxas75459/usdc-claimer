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
    "3LLdioGsraYhdHjBPJMYUFYdcDGBhhHndrhZiXpNE76FXaPRkrVdKD2nHGywqMjWPLoBSUXsHrMidtW3r7XDBLvk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rXQnRTqtFhrxHtKzsHuA3tPy15drhFNDmuwUJih83jW9fUsCdhJUAHVShZHpTq3WepVVErCj63zR27Z41EEVGV9",
  "key1": "2AjadKc9LHLLNLMqomPkWo8ahHUAM7nKePpWX1YWsWyU1tsC92daBFsLyoQ31x1du9Uqt6AoMYKF7xTJQr1bihhz",
  "key2": "3ZeeWshhTJUDgsVhmQS8HchvBg6G17kxds15VL4yiFHRXiQRpu2MSJQ5vPkxYjQAi9DZUgGy1q8K7iqMBjHfXCya",
  "key3": "npj1q9zPwQD4sUzFkC82kJfyx8PBN9H3MbUHoY67LtAVAwSXyNb3PBsrkH5FgLmtD2aTgErVgtpoQjs9NvbCkUg",
  "key4": "3p6A1SAS6dkiHD4ESNT9dowqJN9AFNhub32mSUQQtCxx1LtNQFvQotvi8DsUHd5sZ3VUr4LiPT1PM3xrR5DvrmwA",
  "key5": "435qc3vdRvWHAudTPWQEvJb9e2dgwFZCvm9rohXG1uSfETB17X5DnC79ZHx7y1ZFFs1zzW82TC12ZYouwd5BXkNq",
  "key6": "54hhjBYEvWExzQ9hj7efCGXEH5gRJTEf226vsCFWQHPANgTdQoGy5gaH9gZbzPxocXzwsFbW69nHauTGPBiH1YH3",
  "key7": "2f2CAUZXDNukfZgjuf5V4KanY57AnibadkRcSnU5VCZnQCAANfUsXtUvCbovPK2YAXozF7Z7o8JpV9kDha1nKxH8",
  "key8": "vjJ6mMD4fDxSf5FbeSQuSJQGw4rnprd2yp7NJKEJBFa9K4Q6i6ho2iTXqEa26HzaLYsoq2PzHMttxezbJ4Uhnnf",
  "key9": "jtxKPtjx9JxrKqPwo2CKkV2NVix9yw5M4hzbHFWqfzABb5za5FJQY4va92Gz6Zr1di9ySzW4E1CpvWFeZianH98",
  "key10": "3VgTHDDVDhGS77fJXPTERrbs3UajXJkRszH4r8m66X5FMXGrG1kcQk8FKC6dCugawbEbzzXLqx3344RVHPVAjTA3",
  "key11": "3CeJaoEtUUD8HqVevaWWyKVU7MrzDL9P9hHrM9NrFEHMPRRNXae1dp9H3dm4ZFB5WJ7SRn5yc7EUbCMJawhkYfLT",
  "key12": "46nB11NpFifM8cSQvemd9wDjNvtfUugQdmK6aZLaEVfVkuzw6puhwwZE3k83bzq7w65sUuoxGbEp5RL2ujQR4Rrj",
  "key13": "DGBPPvJGH2Jdo88fXd12tc7MEcFFDYxvKnr4B72fH27xDVutZ599biF3xHBm9owycy6mzo9dhW59Sik9DGTgMZm",
  "key14": "2HFcqEwU4mbcjQECK49LCx397mgpyEN3wxUSAjUSUacJG7DuPqUEFoqHeZLurjFBmpcjHK7jRfYqQFAXV5EN2nxy",
  "key15": "22pyYfVtq6dnfvU7RF8r2Si2gHSRVLLhpEkXMUtjhWXzXRVZHy8xwYX9R3Kw5vRJfyARjmXtNDHSUQVStdt2QsyG",
  "key16": "4bPQyuse6rnvFFwcmjBQUtQwKe6MPDSdYM1UJjv8bJrpgq82reU8exMYdPRzQkYkCEoXNeeJATKsenwcfvbmpeKE",
  "key17": "35dWtNY7dExDXb9qxFENLUrgEEAL11jLS8dHvuy5vDZhJM7KfTWgmjbSmQpfn3P4qRWXoYd63nHReLFy1DJiXaqd",
  "key18": "5NmhaY2MmUZcVmU6GxoEcXrG9dFTiThPvRDtqvUaEimJQGdkJUXNrwF1fGgUsarUGVZ8ugm1voPSQfsKPmttLJuq",
  "key19": "4GQN4UnV72FmV4C1rJqhrZGSJV5X1KM7K82uysVU7cLpmh32vkKspALj1NyQVpCCpFReS3QQUHYDQbLuXSA4FGyS",
  "key20": "5E22DTiXXdVKhj4usK8fMiRjWwPkCBmbVknAdZp8gyYKE2Lv1SnAviqyeoUoaJDtZ2QU7nXoVgK1RvYTA7FG9JJ5",
  "key21": "5eCsVKiqT4WJF8nCWKK9er8vBNBu94dy3Bw5JxpRMVsXhZUQNrLnn8wQ6Qp5PrpZVWidoJKjcGFKWmTvT61RuFAu",
  "key22": "WGcCYA2Kdr4copGdjuRpLhmaXGQ3kdBtKu6Eoz5StePCgZos8FZYskodUXQaFyQTzxVqu2p167Pe7KKVfbDJP6r",
  "key23": "67roB1tdPX1HTi52PDQgAdiMEJmKwPmVXsxMFSgwTtrPM2769aWQv4YgDizxvYSBk7ekRGnSZyxCx4KzfdiDwqLh",
  "key24": "4y7CpXpHKVBBiJL7umZiMCuBMiwowxMDMNjPA2upfouR8bckphzpGZmPvAngJYemJo6eTFknkpSJc5CqrKNhrGTp",
  "key25": "2v6Bbrb5dyr5StEnKarTThtAo17xuKFDh6L2yZJvMcj76857E6Xsqke3SQV3JV4rQP9FZVnLfFRBjcuxi1EtySBj",
  "key26": "ND7JqHcWpSrfYEvicqPEpJTVy4VKU3HoTVvtzG9MudZDrwXwyTNHTLeL4F6mcxdi3HBqkTniCWZ8jr5ztErEPH9",
  "key27": "3r4TuxDhtAZ8d6LEzwN5d9qTJZ4L69yntpVpj8inLQYYxbw87iDvm6CDr9vuUFYfZK4du5NHZDZNRnNyFpCmnoaz",
  "key28": "5L5pTdyQXLtZUBvcUNe2PkVgY4f8wVcwSAqJpfAkxViyKG76jSMGiL1wouK3Qg1sGv5xE4yCpJUySUwEKjB9YjNU",
  "key29": "cUuQJBqxd8c1e254uM1VWawsbwp7FBTk3MJywoYgZ2GZU63zFxUvRKTd7xcCQKcvU6rSZTMT21vSLnLtJHQbM2W",
  "key30": "25BAygnis3KtFM8tzmbeG5HBBR51iDbdhvu8dqpUmiHuijWzV6Q2pwAmvta5LYHomWHy1Gx4yukiP8QVMUhTSVk9",
  "key31": "4hY2krx8wcoJ3VLV9xPmeKpCAuwGLcvtSEW4kecCXhyU4poe5fTDhkde1WgW5aNyBqJdTWHRfktnRmdygrQq5UwN",
  "key32": "51qcTvQ8XCtXqfex8FSnkc54yAjmyEmXn1x4Lemo7LDTaJCFd2R5cG2eB3N3BTBHCVTeSbijVLXruDyGbDb32uVK",
  "key33": "3kTCdhPy1hAdck7m9jC4ikydS6eb8HtTGiiGwWKCVnFrG6RNmRxDWikP77M6mppLs8zVWdMndeQwG9UP8eBnYb4R",
  "key34": "27okCDrwwftBAuEU11Lu7i4CbfdmAsS4pYC7zjTCxyyP9VtSKmiQEiSjSD5VX4mXnk8AY7esxDrAhgC5Y6Pmkumh",
  "key35": "5vuyh5qoEn9srBgzcSAPutkZSVU8PunKMJuCzkFhH4XQdCY3Dhq1gj2ThHUYzmne4rSGNmcoDG4CRwcTD41tWoEy",
  "key36": "3xtufMoH74amMbdvzDHXBbyes4HtoYPnPH4qEYmNArt7chaQwQmXqjUNNyRxveX4Vq5TQr1RoVkC3nYK5MQ68hhj",
  "key37": "29tZ6TCbfbt1DjGmkueCNXpdQni6LhkPqWcnsRqbk6M1WBz8aAtpTPbhzkNPFvaQXqmo7t9AM5cgVrhaGqbdddMZ",
  "key38": "2Bh7HA8mZTUjc3dQFHWjYAE7VwWyAi8msozofuj4yEoBDE7nqGMaZt4MwjTZ1sAN19wLwaksfdpZbVCKpV3d86ee",
  "key39": "5QCGZvTRMNRw6biWWWeT33Z55ZsvC3T4fkNQtMTM5xCvzD7T3fewKHpPRrSxQNTtvBVjA5ECY9gsxp9QMbS1MoVE"
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
