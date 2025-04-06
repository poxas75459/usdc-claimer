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
    "4C2AVcQwKzBPfAZMYJUzQW2q5uQnByGkf1NxzUTG7j1T34tFmWjvtQpAdhCDtHnCyrjPKKkPs364Fpvv8NPPABnF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qUABaDHPTVTsGVhXsAebvx786zDBFzsDkvCJFTskxoQJZqUgy5gR6GKXT5XhLzSJKg4eMyyeHhbyi9RhvYDRC1",
  "key1": "5Q4iT6xtQ4kegZv4ZhEjAyg7yJxti1U3kcBuiKP8EczhuWpLk1FjKZ13vRtQJkmrsFikXmjWu6r12HtQy3xgbov6",
  "key2": "61LGzgpdLPxr8QVatYxWsyH8g5iyLuRnVmrV9Nc3TWfB5mp3B3edcjqpmzwSsJCEDBfbbmJyMC6vkA4sDLwWi389",
  "key3": "429SSbm7KBHk87JsUnrY5sf1xq3QzqVQUUMzx9w2yZspq9F39PxX6bmwtNY7mJTkbcwBGDRKdFgP4AfqKSGAYFJG",
  "key4": "3fEM6UQNYAfuaa1mjt7hFELbLYLXVGnjJkkHZu7cbWfoDB7yBSFguWzsJu3Yec1jxuXcukQpDeHkpFKzhGwuABb7",
  "key5": "2bEdEJzZGJ8qGzWxMpQD8wxkruRNr27GaYXf9fP2kEM9J3JPbKC2PqS3KDbb596znAgVQ5ederKM7Smj8uLxzDhK",
  "key6": "5CbFRoAhMe8zcCjT2epzYBCy4nLFw4wtrnCdeFdCiQFMvr46U4nCtZLaZQz6y4F9Nh5nsdCqhd13LrgnZCeCgUaL",
  "key7": "4VCG9YmuH9kWMGLRTduqukD5Xej3geCg6BAGV6Y7DH2LoSM78mcipHrCU1wvbGLbyfaUj2zyZpmsKtQAn6nAdk2T",
  "key8": "5W8dFoPkdi35EtbwLNxWarDRHwcrG1xc3LYyVLKAWMmtwLh3hrd77aQdL7zzdmZG41PMhYFDLsdhJVsjZRFvi7kT",
  "key9": "41fm9upiQRn24a2NKUDbfzJsXVVNtUQyGnDVqnhpXMFvPe9hFtyJWyGDdRH55L76d3rw8cuJUfSG44sCrWwqPmcV",
  "key10": "23NzMP1zncXngCQBSLxium9P5kTPcwQRbUm7VzxH2s6bx3fhX7dAxuo6GtUs6bFm7crgofR7cpW3AnuYybbZTcSE",
  "key11": "3EYjUcP8wDsyuGLTVdPLDp2wNysWa1oV6dQy1pqT9C6vLcmtJExzetCS26pRYkq5EhmkAUzqBrpoeW2w11LxXfdR",
  "key12": "4UNvLZjbzFDBEjz7sffazUX6qDZddqj5f1w2BdqtnMu5ywfWQdRVHPG8MCM81rZzhJri9q1LDp2ECSEHPKg2kvpX",
  "key13": "LpJEEVTcQEpUxn8FWWNCnKg4yKNwXadfDXTGGv5jubYrt2X3yHNcNEJG7QuSM3qqkMJJW1FFYp9fET5b7vPPKrs",
  "key14": "zoE9irvboK1nWXZsWZx5a7uepXuou5HKZ2gtCbHefWRR67feh1dqJcCXsaRkjR96uA6u8hkWmVKwPs4HhjpTnLK",
  "key15": "5ZNkAsey85eVRqJw4syFzEWU8pDELEXdgMjNUwUiVwbxb98FcuU7PeKwcWHXDuzH82FinXkCKs9BxbL8wYkXPFLh",
  "key16": "MmnWAqi2eVz6wQMZCxNHRDgPikKoqW4SrgtRAAhk5phNDAyYnhqErpLYbR1PgTXuJC7hfYdtimekwc4y5E85J7j",
  "key17": "5sbXTnS9vmxynfQAr62Cdj42BGF7HWBr7ZRf3zkNrjmvDU2eHcvjB73QZZQ6yGh8uVfEPTLYFc8hGY3JB5gvgYEt",
  "key18": "2YCekoVYFMGq73e7tg1Ncv9JZT5nx3DktnHwre5gmnE5GWQVK828ohqd3BLj6qgrbh6iNCoabgzkWs7b5a1SD1B4",
  "key19": "63M69KU2NMZ8U8sZnhAhBmZ2yhpT6tsadjGEUivGfATNr7Td2E8JC63ZxgcSaz4YXz9Vx5p5XDp4K2DdEXjcVN4z",
  "key20": "2WmWmuiEU8yBFrnVG5CpzuBCemLX8xDMuP27BygvcikJEEueTUgC5YQH1W6NMtaFKsNJ7sdKkw5kURWE55RLVz5U",
  "key21": "24aW2tSxQLeNKKzBcFAz9NohQxds547Gcphuq2VNxBqjm5EVEXr2zwKMksEME6Hzqsdga4WMTMFWmonYJjBWBT5W",
  "key22": "5Bzqpdk6MS3XbngjnAxgb7qAkC8x6RQWaE4ivXqBH1fkkdWRUguoCfg5FeA8XMqapdoryoz1HfkHCNdxSLgqz4uU",
  "key23": "5yqUVBHW7zULRmKeHi9ugH15sWRhLYn4cbzr7hSt5xdDSsz67Z9unk6zvEthNEJw3bF7HDmpjLTMWN3UDAdKnbCq",
  "key24": "iaC1WnCBuVEqPryG1MAHjjcZM9zj2xq3cTexBcEZBLDG2ku4bqoUL6oM4uDTbTxuqHHZ2aiEN7niGpvGs5e7Ewd",
  "key25": "b29QtWMwimeLfXZFq41GYdatwQLqWGoFXzgVpXgLsZkX2ER8A3pqbQST5r65ThSCgeQ6HMBxGmXXqjAWyLU7CLA",
  "key26": "5J1h5XRXouWNGz3DXdvg29yssjmnktzGTo74QC7d3LuTDpdXjsBA9VdX5SJc1QXtGZzDWi1rqJStf2VcTXz4c1xY",
  "key27": "4adUYA1GVAdJbRc6cs2LMcKTpJMXT7nzavNgki45dS9brCXpgXgAPWNdDzwgW3AUcTCg5dAMfJbDsGtJhYVkW24t",
  "key28": "3346EdFWA3VmStLd1H3ftpv8gRuj6PsMQDSdiDMbZr6kphuGWp3emYtst1sjhwoQrYNYqrg8BaJgFrHDYumREYmu",
  "key29": "w35YFpdnQKMbvSpysozbBaaViKevrWXWAnAccwdaSLPPsPdRzCwet2R6K2FZNVtEesVAvFKpvpcjiavCFwWjNNR",
  "key30": "2M88Apg27eizCfuu7nPdVJ6nvHKGSyKU2AREWWiQpvWsM7xiEU7YuBmjCqwV8UC6bSRfYgT518q4wawSnbGaJrZo",
  "key31": "4cajh5JyUPKMkXfQNtGWHcdrNfka8arUH2UnCXE93zJvqsPbmmTyCYjJq9dVHjx6XgS5NMKpti8pTorey1VZs64A",
  "key32": "2Fc7nPVkd3vhgCACCxkQH4tLzxvFrxkna2t1Avfq1YgJM1zJx2zYAuVkXthC4uz7HW4WzN8KziNiU4uM58VvFZYm",
  "key33": "5g7YhS3nLucKKnz68i7MvSTpBgs5Y2QkSwHX91EF5ke9nrFYDjrDCPnJQ7zCdcADZMpQ4vobDdkmHzApv1ratJgM",
  "key34": "3vmTJ7fP3hnBAH9KM6TH4hMoWZz4uMna82ifpXmSKjnx4JQbprzHecyhWuU114yQRfoi2AgSKwRw6dwt7Qp5bZmg",
  "key35": "Pp5en3FXicgEncMGwHMsfeXPatSCorhu9aEAZKgUQDBARtR1ZdA1K5YvRvPNek4rUTJVK5vpgYohAwUTNzYBZCU",
  "key36": "AGboMah7ypTLJrEnnWstDfPhfCEh2J5q1iiHF1EhhF65TppX2DVYFQVGZuEDJxFyMxHgoYRhneo8FwvGsd4mrxU",
  "key37": "7ViWmeFibsLktRsRoSpGrfd63ka1ssgQYmABPHiTzZAZEUEceQuqjuAr5f4d6cSSQNbRa7VvAq4ecSMTvM8nL7U",
  "key38": "2cYiwWuayBFJUi9YtLKVnJUGB9tYYCsGYyPk3TMVFD2ZZ3tTZG5WhjHmLbCG36aRynQ4zAwVoDsMbsGxx3NDuNMq",
  "key39": "66HTj4pM8Gub9inpMMcEgTWMm2mNWxfFtyGZ3EAtADDYUE42hqgCAijsy3i4X1bAEYid6sXKkQAT1axdNvmkK1eY",
  "key40": "29n21R4EjwoKL42tys3azVvHmNqSNyMLHFBeCPAicLEurxh7ftUsqLgLBgUAbQ8tNY35NmMApZR8GPm9q26RhFiP",
  "key41": "2XS3LR4Mp5736chgnDXBRU4YMET3xF4qz5S2VG4233qMf59bxhce41UaCc98bryBRfSBQDyqVnpBwbTBDVzMG4hY",
  "key42": "4wfgAyyWrS4Us5YK4eXrNmYYFQiz1aJVKab2XDPwepjaxXnsYtGQGEfzo8YN1Te6kXz3woR6ukdtpwyS1vgfzASq",
  "key43": "3hpymkM2feLQ5Z4EwjyPBMho2HHBfdyPec5VurJAaYavkfY9tRivvgxDZHTpYtEBFHnR2eWJ1uv3mEPaankhdWvf",
  "key44": "2uz2JM8SUB6G2s6isgxB1KbsyVWpgg9d6HJR6LSq6pPVxLYk9tPKQhKdXEbXSdPA1xzBjYNLrTeruCRBNSLkCd3x",
  "key45": "5RU4LtRpSKLXCwijCiAxEy8fkbWbhcrkR8YKurH7VweqGdL55dvpXYRXHARTC1C8iN5i7m2yABNQY6qzrCre84eP",
  "key46": "4feyYAHqnAqRRWbbBsdExQZy7g5ZuhsjrnfJpamBxnXpuJ2fa95Ai4rEgcB1WUdnLxe1Kb3TyVTbM1Mpe46wk8CN",
  "key47": "4fVnMEFiky7kdkCXQqxm7nEj1KmLvPkU7cKrJxtGxzekj4j5NfumHNpjru7EYZukf1MRrUw7TZoQtjRRoCDPgZ8P",
  "key48": "2hnhaB3Qoy7DXwiCqpBcrewnRU6n1EreiipJ91v5nomxM54BPZhJRaYvNdnJJ6HL3rdSHzJNMexp6ADvjRd7qmAM",
  "key49": "5UXgaUnVXvDCSNecXfY5UQ6QdjNzbiV3ik8yiBBgbajMEad6i5kcRhCyj8Qxvig2PZTztQSVSSmnZ473hTrE5R8M"
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
