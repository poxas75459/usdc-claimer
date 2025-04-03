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
    "4tjKgXrdKDKKNnJBNyK8M5YRpRAu1Efe2YfA96PQycWoQ12VQXRXf8HSjoamCXuEKHFDaKUKn96P4kDrnZmg6UYJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55DHvsD1WXPdBacKHMvdf5LYq3bRP6RLQaoZFU5bSuKdRe9zvJL5mVZq36GtkXMVp6j5smCw9RGGaNMRzMvuLA8w",
  "key1": "2QTijr5tLNWWX84taU9STSEyuXgUE4iB9PQqQmw7dVEWEsycZD9W3RgUMsopDeSo5AcWW3hEvFB2B27RZJhFkiCp",
  "key2": "2H8Dmks6Ag7H2MHjabbANfSB8f7WtFTfCR5BSs4XwfeRzgnj8ZamZKRcPV96GvDCYWSFJoRb5pdjsQenJjbskCbZ",
  "key3": "2hHqkKWBKa57nzxC4bChGTzn8TUqNgXqSMA3izgDicnX5RCUvVbvcE29rHbHB2AEJErX5q1iirGaNM9jiUsSYb5A",
  "key4": "B6oT3yQ52KbxbbXdT7zPj8dTRezDm71DBV71HmdZZ9Zaq8uLoWWaBdebNSL92xvsK9G3t8ScZvwKG3ki1mWkUxS",
  "key5": "66aifKGSaeBgK63DHe5pBigk8nwExDjnzn2uSpVdjg7stGGstdAmbzF8GnQCpU12PCP6f3EG4NJ3Dcn2uUKfyr5x",
  "key6": "r4StSykbaMYjPnKEpuTbRHZqmTzDT44SUuuYiq3YFEFKnkn5re1Hk74EVPVj1chqmVNxSGABS8aPWN8feKTUVjw",
  "key7": "kp2wjLaXcXQQWu4PD416iJS8HFyaNGNkCiBTZsh9QqhzC1MMigFvBALp7GQtnuGdrvWwbFrqrZ6d98Vah8ekDdf",
  "key8": "5E6gUzqjdcbSoxjfc69FG5v1VYNWBSc9Q8bD4Kj5fNBcnjZZWPA3x8FxyYXXtFVZBfyvhNXmXuLCoT4BiMjWi5Na",
  "key9": "4f4efRxG1i4tdq334qT6FoAx7WquebXSnmirQB3fMxwtRREvEFSTGcX4YQni1DjJbDBLyXN34XVucwtfVQ2dmZab",
  "key10": "4mWuLLd4s8M81if7Vi5SrEiRqLorDiDYj9H3o1dFWq6CkGKvZ3fTduoLDy8WLAQvTpNu1F1siJqC8wVp6gxc2HeW",
  "key11": "4V8CwWUn2ce6rSdHHiG2N4f19EnNxaCzBWXqtUQXS31G18pvFbSL6E8oz7G5br3S64UuYsQ7T8tMAzs4puNiv11Q",
  "key12": "2t6ohhT1NBx58kV7QZL4w95qmAfLohAFDMi8ipRjF3X68qu46hwiG7SCqhfrxHHY9K7mjkk1S4tjsW2xZN8UTWdn",
  "key13": "5NfcEwVAz2nmEJcEcVgoQ3W1JH3NUAwHmqbzsWL5G5vY5bKwNB29TD1XiopSWtFkN3GAwyhYAHx6xihfJMsPtzE7",
  "key14": "55RRAu6i4Drsneu4WGXRS32Zss2enSHxHMsxHHaqCQKTu7itZagtgw8bsma5n7vsaSqpmjMoLkYabJP56FMLUHhw",
  "key15": "2u9Nq2nbLLnEMj3pJdLAsCPFFCw42ZgfRi6Ag1N6UN7veMWemsDei5MATKt25AyXFUfibpNhmeapexfS4cHVFQz6",
  "key16": "cPqykba9e4sNjdZtdZ4Cg5Ww6RkrF6gpq8hrr2x3NR56RGb2mT72cxrWek24fqSgJvdwpQJYPuiTywi49hnzPZd",
  "key17": "LUGetKLoVVqMJjbzNmudthQzZR2H8AbZqjCgB2mmxNLk4SQ295q5sEeeor7KToJ9HDAsaE4fREEi8n17uT6Eea1",
  "key18": "2cmEj3GA2YcSfxg88YkFF6bKEXkiNwFiawKcnTQKEYfvFxQjCUtvqRaTvQX3FUYvNVhYXsr3AzjXm5ven5yd7PF7",
  "key19": "4Eh2vAJJVsuUfu8akTzTYRFf1CbUnWTrxYhc4a1s7oPH9bm936Hb654UmZmfozjBtBqARVbiTgU5u5gdipHEK1cT",
  "key20": "4cPjxxAm3bmxTqFySfJ6j5Joze5zmgztWmCX3av2CegB28HKEXM7hNHLzFtzSFqFvQC23y6LDf4aVv4fgUqufFq7",
  "key21": "3SzqMC3dVXk7Qa11nBBUxQQMNWWxyHp9G6447bmCBeXYyaMeMBo736nMiKqniRMYB9mZDZJoAS7PivX23qB4Mbh5",
  "key22": "5rUuXjj6o1p5RYWGoTHeowdS67SQc3J7z9eYzSjyxLPCM3z9dJLukhG3CSrrGy1CYhf8ey8CKxqFomjegGFUdmP9",
  "key23": "wEmpivXx6daTxjzujun5qXMJPHnhokNPGYibZbxrNbhWkNFJqbLuazAyx7My4Cw3j4t5SHcmdrHFhK3c2j9moHX",
  "key24": "2iSj8sXCnexMau9c8AaBJFzEbm8pwiBwNsNxcxw2wiFFZemt92kbai7oRLxBJyGpopyKZdMxBBA262psN8ZbFi1z",
  "key25": "27VSMv5SJ6qeRePk6hfQVVHjKwBAJuKD8qLyvkSnC3ZqqfHJ9DJ3nSwboBDHHzWCdSyVZzWvrVKnAanxoZKDFBM6",
  "key26": "4DniBZ29pSsnGGDQVkT4cbyjdQaE5Mne4WL3jAotDgeQ5ez9qY4xpiADxjZfsxwse2fFyYSzpWZ87WSKKfLbRcwd",
  "key27": "4gUgNw3xeF93gfu28tDF3qg6akMnJfsgPe2L718i6iPtz1rcMoma5urYfzAG2HZ1muNuKqNJjptogWAVh16q7RAJ",
  "key28": "2rkYMiEtp3KNU34WT1QjYtTyTvEX7AN1SRzvhrGVpa5SEN9dmTCQojTqRbEhWdVUSjmexwoGwwqMkaFPEXLTmvsj",
  "key29": "32y79EB1odhuxm6GW8YbJNop9hZAR6ujXJrGZsyoM5BrQJLGBcpVSGGxDhKjveFQGCuAxJvfnzpPXbCymLrKgE8m",
  "key30": "5SJb3uT1vLVCHgJy4EzRr8bY5ZB26XkQBdgkaegD4NQmgsvvmN1n5uD4USeBE8ttH4CdgBNBSbohCJougpjjWCwb",
  "key31": "5gXYXr82NpcFBtLU4cL3kdAYDqW4ghGsVWU8YXpZUomfUZ1ZPEKKqfM2dguBrr1ppX1L3rKhBZwHn4uF5AazmPeh",
  "key32": "u7YAemxkvkXbdC8sR1An4XouEmBPf1P1q1VA8Ktz423MNrpsU7tzU6o6a4wt8XH1P7wR7x6BafpQ8zWjzoAtxMX",
  "key33": "5LsaCNRA55wynvfDvtHx7o39BibmtfkEzJK575zjTNWGGCkUuJZe1mY2nf4kea1KdwjwAPY1hys2cnus4DGcfCGV",
  "key34": "S1mGLqMjofCjXeYm6TuwBzGccBHbYQxBjsi9js333LhRLAq1i8FCLKHzSYwGzb65vTm98oA9pPKkujgKvR8CGVP",
  "key35": "4e3tbDd9ctVyL1MptdA7Ftkg4XsrXHQfsgGyNyUCViP5offMeHuABRHieCv5TjnG44XsHzsAHZ5NdKaZd8kfNAWy",
  "key36": "4epgmbHq76qgm2NNbZZHRSSqG9JrT3ztU7ny8YX7nPT2qWVgjrDEBAH1omDKMvyMtZmUT1t4WE7C3hZN5qyK2QC3",
  "key37": "2CFfMzfyXbtSKNtR26FrLDLpETiTJkWEW3EFWPhY1JkhBXq4tQKAnd24rY6aTDns1zLv4yziapTE7EDBfvtkQWp7",
  "key38": "4Vd5txCrSPe3kPQsobvCLoTCSCC4SxTpUNVfm7EdstT6R2cp8ap7WiArPz4dLdZPebXq8rekwFZx3NuqXnsbNVfe",
  "key39": "27p2vw6m3Vjn6KEVxXTzTraKyfptjorPpCZwMViQFxZ7rc5aUYT1xdsnuTUgg6nbTj4PNcwvsiZUMnFvvRhbpUXz",
  "key40": "4LDMH7T7d3EVudgUXgPyENVdboDHiZakVBLaKUFSBDufyw3fAeBFrMWngpkbHhDtQQKc1kZPa38zF3muU5rJ1jme",
  "key41": "51gjAh4exwFVNEa2XRBuaXEHzizCdjce86KSPdvd1TTVPTyeNXvLDorCL6ccyj2vhZZW3HmiHQhkAz6rCDStiTq3",
  "key42": "2ixWF5dXmgqFcc4qavu8DE6XRYhdY2yGfsvMmF8XScfHqnERk1xYgMQFofCHdFe4P58c9XdhErpToqEhwAgmdUZ5",
  "key43": "3tVQTBQ8DMVzrYsMvUp93RQmzeuSn8bJ2K5QHvqB6e5hNhkYPpMXuxXbEtrFY8YiwcPSQyjQawib9yQAPpvuQQBn",
  "key44": "2pZnj2GR2BDuPyxYZXuKsjp9ZbzGGUWg8fFhPjaQgkcPMf1Vc7o5voJNT5hjekhxgoAFoZ8P9xcUu7ZKk1vTa5jN"
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
