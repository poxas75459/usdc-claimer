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
    "5wWfe7YXRnHTUSHfhVQerbnjNC12foYAEG7GU9XDb7s6LYBe28WEJ8HKdcATVZG46MuMxVdyNz6c2S6Mk2c2zu39"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JZaT9vULScnTxvoYJ5arXqeWJUQdBJp8B8txDyYu4Q4aY2FSPvpugnNBqEKx388khLx7EEuF5X2K1LwcdABtscZ",
  "key1": "2Hkim7krdWCNPfxWCDszSJ6Z9qSRFbt46dS9CqqJ3f6YZuYypCC53QF2hwsSbMfTz69NWikb6zEJQ1q7szC3ym6D",
  "key2": "tUQPmbAzkjzB9zv1H6g1x492rFsTanBr1j5uMbrKgNQX7QAVDwpmu8gqAR6ukk2EbMZ2E38o4mqXabVzk3fwsjf",
  "key3": "3WiY7f1sfHT55PahDTkWebjRop9EwjQTpwGxXicthVkU4LFkHKDDkEmQc9nB5enB3VpNebskGu8BqZe827BHxT8X",
  "key4": "GmDkxcoD48QgSbTHqG3mCuyZwMjfqt9Q8uZYZVuEvobAdV3derpAfUuDe6JFRVpe8squ31hGXJtkxxofDj8u38p",
  "key5": "2xWoXBfQb56xHVswrQTqfmdYV7k9sS544hv1K9fsVE7MCaSGne6qVugYsTzgb5YP6YP4vSUQM6KQ1DBAaGA5gb2j",
  "key6": "3PY8ZfKgD6oXjr6xfdTqKQm3x4J3wMRtYN6JbbFKe7JuNjw1niPQe6mD74ZQEhur9May3zoMVQsgHfAaUyi6wVyy",
  "key7": "2RKcuKJdG532QwmAqX1skwYDk3GoZAsaWZJqxKFWYFQwWH8Nii9WYAet9xfKUSAmnuEKvr27cW5Gbv1Qc5Dsi6hy",
  "key8": "4Zk3y33f9kDtefsJEFiA1axGzW6xVGpTv1ajTZ6aQitwGQ1CmxyzSqZyVohJph4mFybEbXGfi1ftiAi6MfmFjqXW",
  "key9": "4jFkv61HVcuQxZY987G4xecTiwhfz6DAthTzydmdzykvGn7Qmoqj7WkayGLWtFAe2aYeMX7NrLttMpvAqYiAoiCe",
  "key10": "2jFR6dMBWmiDXi9s3xhZv28yEPpUgo3Me7AqkmiqS8vmCqZbWpCPTieF6mrN6VJv1sbAFkSK2CsiHjdZCQG7Bq5c",
  "key11": "2Xi2S34yQWYgM1JYgKAj91MpYoDPvrTibwEtDUb4YqWFRPmgBYzWoNfS1q8Rzy7bT58rjsXf2L24ohyQoM3vs2yu",
  "key12": "5JCkcVGX35DSiCnH6JfiH8MEtgZn4Pxiw1agUrPB5j3jApLdvind7DFEmGokhgufXkgJhp7kDRKGqPPYHUWXRmkV",
  "key13": "3ecmM34eZStYyBBQfY714JTLd3mxsoFcz76K93U15GsHBtWd3su4pBWbtthpX6r4Uy4LjCPvqxRUZpGxgV7epeoY",
  "key14": "3i6d7noVQSuzK4efLeTxfKLFWdr93vjfxizzQw3KvnsYUT1zVNikFcRTdBtFsCa84oN6Xr8WuFeDy57V5DTySLtp",
  "key15": "2nSibgfCVbPzGFuZ2FcECRRigBU5kfYQFXNbVnXZ86k9zHoVzyGfXZ1pCbJ1o3JuNU5Zhd75sHefyfjBe8Ufe6yM",
  "key16": "55vX6zAkVUivYcJuWftzhGvicv8CV6LNSEtnNT73BZyf7TQb9kVYDjfLZ6eewTYVmXoTqBTioMzXjE2DeaU3HyPj",
  "key17": "Sa7zNwyjZWfKpWP1z3BQYPgmXrb7kD2QpMiU6beXNuDnCMuEkkqro57KYEDnAQgYjSQmGUBAAsvBAVfSCnGgJ1r",
  "key18": "46c7qCgVYwKrs5eY5DJdhD1e4L41Gx5v8HJAkEHWvdQPL7CsdXr8dP4a4xS1Ce29jkCiJND89uzirzixuUbRt2zT",
  "key19": "3SoT7T6YLwQBT1USFwYiBPrFUzatzGdNCy5kUtnzERXD9xx1vS55DCK64CZCf9rB1AmhXiccaqMVEFaMi2cAvP6t",
  "key20": "65YdK1CZHpamSbAsfYqTBeWZ7No1edp3qP5AZTxjV6EbPZoQbtXhxAKpwCp3FVqQhpj6jENUaDjAesYs5e5FGfv2",
  "key21": "223DyiZZ5wfVfJ2fWS5GiaLwQ9sv4XpFZYBTBJ6TXTXxHAhKnaXs2521sAgZhbBxi88ATf5b6ZKqBXsHiiLrVyx2",
  "key22": "2ZfR9bziQCskGAhHU79MaCmAxKFsUsmUQ8wKWVB9V6FzVzZ2uD4koEGkRQATzRoV5CUyBNayBHYVh7Ezz5aZDNJv",
  "key23": "26jY9Pk895X3UPBo1fSVB5mWsBo9mtmB7x4ShmhzMY32H4eABXRizqBwHhWcS9xTADYRXCktUNPZCXGBRd2FhAeR",
  "key24": "5TgVq9Xe3ScwEHaV9TDBQXpzSQYuLUfhNnuhWEfkdpkd7a9fL1knaRGoFEJqSKx81Ed3TTshBwyjGAmZ6BX9uJ94",
  "key25": "4KGxzDgZUtRfD5aX9ZujWYwYtGKjnpzJuFEZD5Wx8dnYMN1EWE5FRhCCc9Hb5YQfRr1P1NjJdCkp3ESMBEibbiGM",
  "key26": "3YwLrnbdkYZPttR8B9mgvU4ccvk7xMxWNSHvsxbEVqGTo8PGXGfS5tKNTJKv8mkGHRLKiFDDiVG6CyxstqdkBdZ7",
  "key27": "9aVbgbdR21ZhRtRCnRSdkTieZxu8SWq43PsMQqj8EnSAN28cyY94RBXKWxsmoAQckeFnnUsphB9rRmhxdjyh1HT",
  "key28": "ydTgtuN8pFBHojbkQK6HZFvA72pEEkCTj2kxoXAHfi7aU7zZea7xM1whCcCHvxjUbxeRXrA3rML8BpUWM5gXPPs",
  "key29": "6nycDgUCt8eYk1Yfeb6BJSvVtLyppVhchTcgALDnE97SboneYyp5Ztsycsd7JuhdSxu2RzEStSz9a13pDj2bksK",
  "key30": "4HMPQeGJPD77GfJFgTY5t7cXpRj9Mo4ppwYpxuc4ne74pFyWynh9kjL1fqud3abTMmnmBrZftr6Hbo7UJX2e1Tyx",
  "key31": "3A1PfJYaKRWkhbkUdJSSVVrTLHfy1J62KMkp3MnaVN8yGL6Rw1khKGkQHkpRXMHx6eMiPcrmSx3XXg2B2zS2GB6P",
  "key32": "4PkSUnsJP4TqWFJJAsvRJF4FBnCzjoXX3Yc6wTb4Gu3EwCEEqMDwgbo4yNWKUyivai8rY7YwzwBztmWFfHFLgAwc",
  "key33": "3dkhZMxffwx1KqR6hFQ97y5HMhC4D3i6iVe6eofcSo28s8jLhevUu2CC93ptui8XzdBbywPFHnWL35aryqPkGDzM"
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
