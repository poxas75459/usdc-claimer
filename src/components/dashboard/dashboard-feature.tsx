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
    "4KMusFnf7CZ2S7CJ1oX15fs2KP1QSUYtfJkeAbxRMzmWCEbzrqy5wfXJAmuxENRugYH2VxqVmTHqp54CB84Nw6SK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iNP2Lb2kfuqmAKZ3WMieoM3MXVvDSZBAWs1c8cQywGQuonhZyK9YaL6zLoLca2fdPo6NoCbbyhJp5ewk84vWb68",
  "key1": "3oLQge7ptn6yEpWcWjfJP5rgUVD8znKVyzfFNiPFskKN4cT8oBJQTxM3o4W39Xt3cBKqEL8K1zsSNHCSxxtah42o",
  "key2": "2ntctueCyx6LZKLTsooYUWffK1MR93yemFsB6ua4b3KsmdC4yxF1636Jr1pJiBaexHg9bE6cAk2Ko7dm5J16x68y",
  "key3": "5bHtw96QbaAMM1P5CziQbt1Xn1MXWPzbDMQT8ppzKKCXNtdvsqVKMJ3PUXGdCQNnzDkx8kF6Rk219yvGLvUzeQ7t",
  "key4": "3xmjYQPq2AZwhLPYE14vppgENibydm85NXcQwfGwWfdTmwh5B4kHTsYZq63bC2BCcWkFkfeibsvsdRB1mYZDLmtk",
  "key5": "442Nw6BnE5Z1YA3ib3gz688FBhKM45gNDVGjhdC3pRJom4LawbygpGofVx483hfAuwMA1sUzEJFo2vKcXb2HkcWa",
  "key6": "4Q1j9f9e7CpmR2rseEnRy58RpuWrmLMuJUxeKdHBxMqANXa5eKXX1Mv7Awk37Z79QRPzNj17tGhk46VsxykTrfaC",
  "key7": "2rg1ff9w7mF9Ezh9yTTFccVJbMu42E1kSSHq62Y4S8AHFPGECYU4tAoJNp7vnmKPYxUvDNMmLXtaWKEEgf8xdsgi",
  "key8": "5BAdP5rqaM3javiYgeCfnrRWYx1PDQsYTUt525v4T3SuZMCWXDU83f4vDCNJmmMMFmrixyJo9sAxU1eFZxKdw9CM",
  "key9": "47M1EmuUhwg7PwAUpzYwfa3GmCxWj55ebvfLXicJuhomEsxMJQxdBq877ZxDWfVcdDgKXu1fpvoYfFzZU8uSSgMr",
  "key10": "3DD49AuL1kdq5nobavxFTMdSYL91T6oomWozimUSAp7fgpPADqy4RNjU6KMMjmuxPVPB49gHsbBGRUoMiaXL3LU2",
  "key11": "5P22rhceBnPXymwH4NFY8LkXaWuoA7G22qsrB2Tsvaqu9CydbyVW5aTvSABebiXV5fbAjrNfyNw3WFWKGGBdAVAN",
  "key12": "29Fs8FCntsw9nRF7gd93t1ceF2rxkGyj1uPhb7pZi4ZY1sHMJoPXHKVw3r8zDrWjBZdAyzhwbxiQrEX8MavXeGj7",
  "key13": "4qDwNZDMgsUW33srm5toix6NyMy3s93HgcK8jfK7FawjGjnKxRna6dbAGDX7g8YDvu6U2SyDfjqaxf6uXsroaqFT",
  "key14": "5LGf5uQZyfGbMn5HwvjjVnLy4onznZ2Pb1aqA24Qzz7ZJASZibxxxhRAP9u47eayiPJQjmiJe2Jngi5uQT2iMaBx",
  "key15": "q9CUovizjH3qT2zNEMeEa7UX8E7nqy8pkpH4Rzria7FVTQNYxqokJm6TRfoXLbZqqKsvrKHdxrMTqmwq9YYFpcs",
  "key16": "2pFopR51aX8J4oinxYpVZwL9qLnik3hvP1d5R2w2oPtRUsvanBPvoNp2ES5r6hDVmdPqx2tcQ6DrLVLTLMgRa6eJ",
  "key17": "3awfub9eMxcwfVymN9zGyrJTTp4BzpSJCp5QLZ6mP5qNCzZNAXn8mg8CPaCZT4TbrVzJB8riwKK5zAJbXb2CXCg",
  "key18": "57L3mBQjBRq3MnrJgkC9v94qKw3RJKLkjbNyMkAhYwqU65QZJQQHV6UGSJBMywphAofgDmS6N2AktKxLjdwfAhF2",
  "key19": "5gYNW2zYe6PpNArxD8zPJiYxNcdNnJm7SEnKSrV6pUDk25smVJvUeSotRPzdMTj5y3SV6uVPGVmPNzBn9MWJ1CR8",
  "key20": "5qx7yrJPF2AVG7FECkmGgydhdgZo46WoZ8GfZSXpuLZASe88yvoYrqHKhnA69ttCH8gbWASPvQ9WgtoAYrVRBkjJ",
  "key21": "3ymtfpgZmFk1haJ6qv1MvTsvhAmjGZ7gyuejDfLtXFgeBzRpEqzjE4gqbdPASnHtwYk323KubrvjGQ3mpSety1ig",
  "key22": "4oJjQh8M2vaGRLyWEqrHwu2348YiduvQaXYpoTR7k3UL4ScfzgWoDy7awfXwQvhnixTk97dzNAcpqVxkYgqCU4QD",
  "key23": "5CEdKrgBx72NWdCnWxvS6pKAbhG6VSEThHF1CbkjtkmQkio73brtQUxwFacq17HV66m7EWh5rNmNWh2XoaayhnVQ",
  "key24": "53XndiJQHG3yW7YeXe2AFJgCwVAs6ySQKKhVShDQ6q1uPyybaHZPcW7XS2FkCa5b76MECCTYw9UXREa3ZdL8eYrt",
  "key25": "2s75wcueKf4gkVS3witrr6Rw8rDWM3TyGqGLeA7wveXwEXLwmfGqo9tY3rNf7F7E1YHNt9839jqvYns9aFdFWzgX",
  "key26": "2TaZipeDwKsgoVHqx4pGGrorSNu6FmVmLoTdt8xfmMzatzpCN1fxBj8kMrBxDvbM7RxCWzwsQp3DS4HGnJYLTMXq",
  "key27": "f6qZSQuRpQfhDFMXArR22ybVXbtC7qDusuiiXWU1GFowWS5z6Zcy59MfPxhH8WWHow9tMuvhYqyp1NwmjSFcVQn",
  "key28": "2eNmgvjQ9yTF1diPgvzVpBczjgDyFBzEjvWNgk7Wz4Tb6d1cqzMjYzuuDCrE5Ys3Ho8o6JhMuNPaRx4ebV3hMTDh"
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
