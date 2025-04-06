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
    "emTHNBwnvCV8ave1XAmxMk5gqEXtZEhWyae26A42Jnz2VeDGuiZRPAoN8FyDvsk43FXLSDXotFJnw7Z22WSd4z3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QQd1rqUoo1aQmfR2E76siVsztDX4H92oYMjSRRopaZeWkAYJWEnVLxueywAtXhPoUaJhczinuL8TmQ7WqVSzZKR",
  "key1": "3RcpaSdPcDHvj4ycHdmAQKgjCEGoRTTp12oWzDAYkKZMdCB1Nap4w7fRWM2NW2jAU1eZBCYVK5xjjvymQeRgfFF6",
  "key2": "ovt2rJZ1KGJobi6rUfHKNiaFkVQQzEReZVuwVz9QbjF6qfZe8SY8vdnJc7VoVd3mf2MxhX3JxXd5Rn72j1Usg2V",
  "key3": "3d6AUZcbfPpNUYUpS6LqTdXV97GS8jbjj6pJgxzFXm38g5AFtyBVaThte9SpdR9miVhqb76PUHieUkE7PaJQMkVH",
  "key4": "441fLU5HTSTqVP3SGibDWK9BoKFMu14JHU9QGkgcq6wdrVbimQCMeABtMg7JzE8ckbRJLX1ya9e7H7xPeKr13X4p",
  "key5": "5Jdc2KC2Np8qyGc7uqiqvCFN1WpGBMRVCJXyEWEtB1UQN5xJ3Zrtkg2M6vjNZJT9aShXqgVbfYJvPiwG1Vtt6E2r",
  "key6": "5ynmfEysEq6A8vsvXo92SAMZycZU9v32DcRiaxrXMu8MeV3oMBs8JgLLz1HpuaVqhehEPZsEX57X2tyCAVPMkRa7",
  "key7": "4V8YPqNW4bBcptuC9rti3J8nwbiCAzymTgU8baPkt8e8nyNkWb9VQwCtYMqejkrqHQh97MJJJhx24VdFwkYcRW2F",
  "key8": "3vFSQYcQBCwkbckGPtDxJCFaFDxxt9RH3Q5dd5zy6eDxY3xE9MrLRUpPa4tU7DtrbTZLbRwTiPkg8GWa9U3LFk8S",
  "key9": "4u7Mp8dHisB3Vvr5SrN7jejG5X5w45pLDZi6TFPY1oEwfB58UnDaGRrVF1u2a9pVHzPhdHoPE9pSCPUh8Pjh2h2f",
  "key10": "3aGLc8nPR5E5N8DX1CJfMuCgKXAcoJet8gutMyT11CM66gjuQyDvB3Q8GsL7hGWUmk9khmNFiCmtPptigVZ7zL1r",
  "key11": "5NmpF3BbKHLGpZmYFCDDGuJJHStxBNVXSxZtfD6djg1KffiBszAzjqFcoXPtYbbjYntGM5xQwqt23Axd4eNdA373",
  "key12": "2AYMh7VZC4N6Zywei6EemcVvSMw4SKXGWDL4gxKc61Y6m4Yugr1W8i8UEuCBHhLTGFPLNMiioMLaUYJiB1h9wmKF",
  "key13": "3NMhKi7Sh9JgYWedjSyjA5dcaMba6nNm6pKpTkp6u3i3V3srkPLGrCQm5iok4WC66hJMTfQ89adhnCeosbUThVDT",
  "key14": "53yp4pJgtmu8zTaaw9BosrKcS83KBJssPfQFoSxbs5i3SphhUNKcegjYxWXstG86sxfvKYHvCA8BLsWcy9vqram6",
  "key15": "kJsU6BcvGGwipdaR7Ka4vjVS99yP9cet7XqSX8FZFpddNRs5UkMnm3fskyGynPaoHMyLUAekGd4m2KdnDAyAxno",
  "key16": "bLarzeDvuhNCngKn15ewDCkSczJBsxBffB7G3CPRGLz8WZ99TFX3atTDm1DCsvrxUhpFv7ktFhmeMrVGf1BSaSG",
  "key17": "43fr3XxPDJ8NAqz6Yf63d1gwycXp3sudp4VBdd3rRH6XpLA5yHCYf9iEEnWEyzNBj9sjCiL7KaEjZvYf4Bqy9SN8",
  "key18": "5X9hBM9yP8HgNinwkuQmJ2SMAe16nLXV7wiaUuZkmFjd2pwYTkzbzpCDh5kkMXJFTJ9n4qmQcNNsd32oFiYrDB9G",
  "key19": "3j3NEXZ5g34dPMQ7cCjvtufa1WZNTGy6JrrV53vTaqf5cCfK6aLN97eMpG4KtGzKpQmVgpMbgYHXpdUYhNxwxDXM",
  "key20": "4y8HU3t7Kfpm8D6qrT76YWtnsMrxNTHBf5VGpt54nkys5mQGPhPuAkcfb9UavxGbtjGkLpghQmLH3wSnrgvSD9eq",
  "key21": "5NakAhuvpj8HgA3RBQHzwiwxSNQBKeNhrYPEUo4KpUPQrWt7AtQuzzd7qMM2WNCiKT9TDHbtdXbp14rkL9AJ82sN",
  "key22": "3ahVvcUhHkEZzFjgt7r9Yq5hUYuZ32VQENXMPCN9st94wrD2egnDbnaSF8ftCJ7aWPF6LKSuuUG8khaJTPqxsAJs",
  "key23": "oCmBzEqiCMBMS8W97e8mudJUtQYDqByYdkggFMHAjEta3sMSGLZa5WraD5KvDUFTe7C61xe77jAjzKnK56KcM2z",
  "key24": "4giqsYsz5aQesM6hdrqycFXcpyHj8xLsSu3HKfWknpaApCDPoGyiLyFKffQo77znKL2AFDAQNUT9k34Q7wU9GF5g",
  "key25": "5sfaknBpwoR9Mv7TjKumbf1SS8uKBaShScPfxeEn1CMCqzQ5xqJvHBx1ZEdrCt6Xbz968u3kFNbahbP5VRa2MGCX",
  "key26": "Hn4y5PXemq7oFc46dzftn96RoDaQNJResswHr53AaYmoCUNuxaKm2iQf7zivnij6bga5kbKvH6ZncLPh98sntdE",
  "key27": "4mHufWqt6SwUuMuzvQ4Uc8YHZJpC88dEPjLs5tcnipEjx5chYjKQS4Vi2ZYZQvK3EqfYwv5UzHVkSadthUgk84dG",
  "key28": "2Qcdt5RXv8Y2nVPmf8qCvXvLgKJeH9EX3Kih73pdGXaMsJsd2Wip5woy66LntiFRoD9rZWYZCs5kuUSbpDucp9tZ",
  "key29": "4gvWge8kn5xoUhPw5kEvEakMQk2GhmxUmaMXMVopoJUZQdYK7awadyLBg5zMN3iiuj3CYMwxZkvexzdp9VRV45vZ",
  "key30": "5dww2zNTJwu4sEJ3sfFb8QtijoRv7HAYZQrChesRrxbVg1NMVodxWcaT3RjdfYDpmEb7K6RXmf4byJ8kmaDwhWE8",
  "key31": "4LcTj2UmnhNU1etYJ3sWtzWQgfbdqdBNmtaDW7eum6XFwgdxvA5peVSkkgnE4gXZgR8DyGnsmusdH4QPwqV5bryG",
  "key32": "56h9g3dJPP4DtiWD7oiywgnpKx36c3iu3y3WiGbazHgYtAbF1kuejALk6f24duVMvVm5CcAwywSwLtjNLRABWVam",
  "key33": "4Z9PLWLZb5TNmU75TDdGqy1dSuczNb8Cu3t7jpLjEaeYL6a2qv2SsNacfLMEMWiJMseEp9vE1wkAacNRt9ePpuVU",
  "key34": "3Chanz2qTT1q2HDXocq2wtGioBYmrXoytJ2oHz6Mmnwu2xemTsMzQqLvwDzfayUZJN9SZfBWmbMEZGydLC1rtsM6",
  "key35": "4xeUC5ikaAaEMyW6JJeBys9nh2hvYuvzeLrdxNgPTqVF9sp7Jsk4Hy9uwZ5XNCS7P7CRZ358dnaSuC1nBUXJjVhs",
  "key36": "2K4aDg3trXmJF3gRqwtf8meLvoE5FChU2iBePtmpNHEFnKJSsfPs879r211bpS1GkKzRHgcsDQHMnyHoMiLAbwZB"
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
