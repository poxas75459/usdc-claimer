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
    "4D6Qz5ho4SbYs6NcEacbNk3MTgn2XtsKHX2DiGrTeyvyNoHnx2ZxE8E4ZmAaUFVzPBwUxv5npM7XumPJbKUDRGCa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CmjMbpbVKjtQjubAmbSvdTmTAdvYVFLPNPc25Ntig72am5z2XgvGwk4hWY8DvFvCeWakji85xzaYtQwrDimJ4t5",
  "key1": "3BSTfQGjVaBsLxYFmMG2JDjz4kU7gJ1JaWJK91eCHVMoHQRPQrjEbgV1jzXw6CkzrHM7D7mQZRY4Lo3qyEi9zGdS",
  "key2": "3vhVcf8vUNarGehHfjhodS8Br2Be4n2eHELgmD7ShanD61Gqc214WXpGoBMyXYK8F5YormNbUjyMAcDXrZq2sTbk",
  "key3": "2eSebnGiqW5Qb1kWFJgdfaEn618k3wuDXxiez2PU1AGbRuVffpGdtnQuy9Qf9CyFbJpWg2uiRKbVWEqNhWgFjXfq",
  "key4": "goG1r8vehL6jwgePyG4EJdZdPXKBaSrKSgvuXqDd9b79FdDXRMi1Mf7nQ7y2uLxjXzmrj2F9Z1brRvb4VsP9Yy4",
  "key5": "5VQsDx8Wky8wPjif9mKTWD2kBHFYkRge6Q5cw83ePZw1xL432Ca2EuNFXLfQtRFbGAnv8kmFf3BuVYybhc95TT4J",
  "key6": "359SSbxX69vZvqJELSGCMqXrHMu9QVCbV6AavTDLvkjJSEQsmv1VVsoLf3qjWCe32wzR4GD4QBKknaVv495ckc8G",
  "key7": "4DobYo2xHzDFrJwDK3d6BQScD9jcpwEfEg6EuGKgA5eJFpCeWyzuAGVyYBUUpH3V7zKwM6vhoDPoNk2aU1zMpinL",
  "key8": "ueHpsQVQoKCbaQJFUmoDNLGKPHvsr7UYFPisAf6VcVqLt6LyAMmygT3ZegwhERA5hGzQ1rWba5rSFbRq64a6yUe",
  "key9": "33xXjhab2ePWrfHzy3YezyeFndThpj8tmK7hHD7a6PfsxmJjNdRW3QwpFq9F4CjRzFL2669T4C2dKwoPbNvA9Jqz",
  "key10": "2jFgfK1PzYUjccnSnjNZvWt2rNHdjYbAdrYBzQCUKHRLyJF9jt2tWXLdnEETQg4bhiTSJTdvrni44ZvfRGbyA8yG",
  "key11": "3T5mfujCyTeJrJMDtGDBHHMdXFGaYcsJMMcv9zPaPA8Rn6AXcrrDA9E4UcErnaGm3NxRKhDotDekxetvvydZEoAE",
  "key12": "4Wu3TpzEnM6vpZhymNhFBi7LR1GftqhE6pkmQGoGmXaMaj7nkbskz3Q4cQ1fLxMuKs5AdnUP7j4tJcAxSmKWUejE",
  "key13": "5i8wLSrG3CokZeVB1WHzenh6nak3m2DoMjKZ3cV5NKAcRcH4wcH31tUu13eiSMVCn2Q78DTX2jsHbvmNnyY4juaz",
  "key14": "624f3DWQ7UYJL1JEdNAFWAZ6H2dss47Wi8L3SnpQTP83sXxNDjXixkqa3y3Xsrgc52cox2EeqVaKcrMRXU9qjmDx",
  "key15": "2StaggjZ5iEbq8BBiY8bKMdwCNkeHfeYsXctpJgMRm5mLdW5rne1d24S1bPTSxu3TpFnPY3emoFTa4BZV4gbAU41",
  "key16": "3gzhBz6dmi1154Ckwiu7LMiFjdLtpu9yoCCBmti8QQJqVVh53MR1AgApqjgyQ4GN83N8J3Z3ZDipKcab8chRP3QF",
  "key17": "4FCUFSEYReCdcaB7vfC5SCVgEkfmMuBbswzdKKoQMrBhp8McXV1BTdGoD1rmTrB4ENiHqisqnDTDFW7nXzm1GtGG",
  "key18": "4pkSHnBPBcbWCVNDKFxp1uAZp4gfkac36eWexLiDWJTAMQAJ5Nz7uXoxctgijiDwA6BY7WeyKAjZm4RGCv5ZANJK",
  "key19": "geb1Z7LFsdxaRHiQyxffRt6affFx4NNkAJLypguRrXupm1J9XqXQxEgLu52twEASx9ZqTVzHzefLXRJVKMWMcp4",
  "key20": "27uaG7FYvZGiELMaGpVQVzoAshncJEztdWFpfQPiXR9R76egrr5fvhgA3Enj1VuS9w2NFW1rY7r2EXreQtmKi6J9",
  "key21": "4xrs9zMBSZikhyYnf4PECmhAKvWJj3AnxsracS29NSPHSS82xisHZBPfJ7ENecrQ86ecK1yD2RLAcA9xXMYML7ux",
  "key22": "56yyWcUeVQ969HWRG6xyzzU2dNifNERtQSnRHvBGEyyEtWvp28SPs9BLk1FXa1NwEzUbSNT3uSdTYJCUwxo345XU",
  "key23": "4nu3K2afVGvv9jEBQcJHekB4qY9U3vBWdULKzN2p6KfD8ZrAXgPnXz8JzzD6mmvCRNWvkanXbPMAX9Usg1XEBcnE",
  "key24": "2NTB49yKW8aTstHXf2AxQdN1Zw1QgHZAq1CczxQtATLi6BxwXgYbkQgQN1u1rvFzSZoKX5icHLJ7F64PFAN8LUe3",
  "key25": "Q72DFdRfXqVt9gWNrm7cp54bB8E2EzqCyy7MJNses7BQ5bzUS8JHv1VwxQmfS7oDKw7DUVKhvda6CSUWAwyJF76",
  "key26": "3KEQFe6JjrBQczgzUpWEvDvPbRigjDPw4SQudL8gfkpKDvZbrrr9f5UbE9YGkMgeRpPDGcG1fa13SLtSP3axVLa8",
  "key27": "AfocEVKULdYZ6YHbAhjurM6sDnvprcegejEVWNsJSyVCJU9dbteqxcFSnHm2HiPPTSg1HgkS99sDwjLcRd8HLzb",
  "key28": "2gTRL2Dy21fnPBZrpry2NQkQgjUrzHFF4F1PyiRnezQGasVCDQveWDDSw1T7sGe8HVJfGJbzEhsHkfMexLTuvQLj",
  "key29": "238rWmrxQyTEpU1BRihZJysgSHRtrRdbjHZMYa4PJGYmg6H11QQuQ92X1nM4UDASBtFCQsxQqkbtmbn1iDJTv8y1"
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
