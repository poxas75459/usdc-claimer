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
    "5He9sUiUhkACMCDYhSkWxM2JnQKQw7TW267ZQqR1oCCHtzAqshEifrMahCywzCohZ2hoTDP9P29KSQj4YBqDHp44"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4riwvRUK78ySpC1czAnL3Xo6KndVtuhDjrrroe1aThhNvnDCKA1wTbrBi1f5r1HS8coqgg34rwDXJTNm1h6hMQuC",
  "key1": "3nHeR8chdPVfN9iY3iZYZCP8UsEbkqduG6SyZjduPxHd6yMxDR26rKtBDjdMhivjjyhGLZefVD3hstLDyN6i3CkX",
  "key2": "5kwTuN1xZoHAToW8Hj3SGLddi2NtnUHeMpVqP1jmRKCcYyn46w3wRCGNJkxC152mDdxkyNPfVHVypWQwtKiGEDy6",
  "key3": "FsnTvKbz7spJV2xtTusHhgTk4nET6b19J7ikXX8n8Qam3X3RtsBr2iA4ArsTS4mViyJYquHUJh4S6S3Nc7aui4g",
  "key4": "P2Y59cENNderBRLTQcE2TRMa3R79unhw54vjjbJs5UCr5cNUHcDBP8nb1PKv9HuU29HKZ959Ea73Jemmw1LFSbE",
  "key5": "466UTJJ5PXvgiq7Ewc7Abngih77PrmvyQ9UUMWp5DvfcvqEVQM9s2pFReonTtvZBwKguX3RJdgaH1gnNjL4ScLFm",
  "key6": "2KmysDCmeaQG8kPQoPcxbKiDEm5FZubHDAVm4CtHM1HCbo3tdA5pebpPrBR6qSx96iHtB6PwB6LLRZ6rSL45uSCo",
  "key7": "2SvZgoNZ5bgUKzVWWkNXSqc2x6eWsvRWP2NCg88e6h1bjxBsTJmYaHkiRRHAkaX6wipi1odtcwKvrbtD5uzq6QLp",
  "key8": "ifiFbdki5RjBJDFFtSCb9g8Vn8AFWmToMg8BAw4wyeEzc8XGNE8Mdy2p7VwnmVfjwxkqdjzs9E3nWZaY9ihV3Mu",
  "key9": "3LdtBKX6erdDGj1Yu5u8yVfC1ZbBzKYLS8ffSKeesGPX9262R5ubKgcgEPdzGDMYnRT9M5tAGYHZteHU6zABua7m",
  "key10": "5wod9m7WKgqevPoYKEbAHaxyy32CxaVwmvPErJGWKEWMQPQ4Tt9dYvQzaJKU5muFV3mqEKnTq2JcWySDYCMhcHDx",
  "key11": "5W9CE6CHfmFv1PJLwqwiesjikMmp3gj8mmY3dqS5WUob9iZ1Eton2nZJ7vVcE8HSECgYE2tXkxSr4B9uiF2VoDyc",
  "key12": "4XGaZX97VfmW8LM4ZWorQz4jfuR6pdMvUpXT6dPqS2ytorTC7ef16HADz6MDccMG3DPZvjxFzEenzMzAxxzs9nrq",
  "key13": "5igXbnyToWwJ6TNzLkxcHJJHvf7u1SBBXctTnpTVks3bQxgsVjMdEzWrL5ZpJUyoHUCupB1rmVaohoNiWriWGAhp",
  "key14": "2ffjng7GE22rdtQbhEiw5ksJhcD7KbugL39GLCQR2YieVGPpiQy4SHmUvAKUex1jm6pq1QiSDUSo6jvD5P78Ruif",
  "key15": "2Sxjus8x3NUYB3LjtUoF3DuTsDWfAS1Q7EVrbsj5vzZSxGSTYfDh91a5VqY7SXHyXdfyJYSJc5ggahsTYQyYWYMv",
  "key16": "5LvLdSB2grW92uFek7j6f8TbcmS9QfPgN71DVM5bKDb48airU6sodUqaRoLendwxNewbNrKXwz67ErwQJLqASgaF",
  "key17": "CWKMbrd19aHm2eSEv1haoyfwCbRMzFgudp5HZRACQjCFqpP8uabsWHbH2WcgMGs3cPjTi55vcWyNMFxDAJdvvLj",
  "key18": "3GyUG7Rz5d388JhuyKF9v9LuNhYwtT1rsTgbec9yJhgRHvmDVw2F9xj8k8t54UqFjowZZUbZaabJTqyVtWUvchdK",
  "key19": "4b7HxmuE33uGxgUTund8BuvL9eosZzh33BtWfTn5Lu7kkpFy1NNAVUrtCDVb3TzjhnJWVTCvTd6b3fGMCnHHNh1d",
  "key20": "5HofVuXXmvsmxVfirfQXSUgDjJ7Wi1Fp1VBYC91jA1Xb6bQej5EStPNZomjkvaTP2UqhFH3hrRd5ZAXJYppSivJ7",
  "key21": "4obBVvp8h13cyZnF2TgBKRtnHTuKwpn2GMyQ3QJNR1usY1DE6iHukE7Bsae344bJeYAcqcFBTk6LHHyost78hRGe",
  "key22": "54XAqrbJm17eUTYKndmYDPjnRARRaQ2YGyamMymcU43Xb3eu2g2HPv3tB9vcoidgWoS93L7WEZBSUycwHmqzLh99",
  "key23": "5Mz57XoyuAa1C6xLvpX4JE2xgr9gg7KJPH7nbFAxnpc34GzffLBxhiTGEHZKLiTK8aeWR5MBCAz3RJA9Y5uhKus4",
  "key24": "44Aw5p2bQiZZaK37MThNxxyEvSb291giDuNsFcgfx8mGxrDqtHXAA5iFc5PSajXh356KUjGG2DNVzZSs13m1dJ6R",
  "key25": "3yXdX5WZrViGLFqcZ35bTSCTwf2sWmceF1AacAKgiev4ni8thbFgtQjTDMvikPmUEAfaA7u3np4FVcaq8rK2yCBD",
  "key26": "HgxzhN1x8bViRpWwJvQ6SgPBxxxWEiZKmfF8uFD4zavQm21gBn6jcp7kNF6hkVRjZyR4zsBmNtefjTxMw6dV9tv",
  "key27": "2EzSGHaMymUdZLev6JKAa1Mgrg77VjJ7JnENAZzp8cKYcGrBKCvzrXbD1UFjoiDtSyjgHXjBu7TjbDZRwGwTMJXE",
  "key28": "4jsTU9obn4t4UoKpxEsLDCAA3T2B277eegYkYeJhppV27ehsQTwsbD2BuMRtTP8bztQk2fQzW4pmUvCGEpvt4f1p",
  "key29": "3ZbiEawTjBJnX2gRLmKDwXuTi4s3hEZCqGBFL9thvGL823nfLEGTpEsW2xarx4YkFzNC1i5Xe43RVjfMzNRiLHEj",
  "key30": "Cb1qgw4qG4nRpmhwwpmx3t8zJLbzQhTz8g2FgceiRSPQoW4gNB8LrHdvuBhAJfmovV4gGFCMGK757ybzPjLDFqc",
  "key31": "4hzcxY1CsjpYjDQWUtjLGTSW3biXKaX8fdQM5KsZKDU5tFLwkgECN574X2bPdQeQPmA2p8BaTau1UpBTkww7gUb6",
  "key32": "4fQd3fdhewcKBZ4j8iAYFEA1aMy2fTaShjUUmiNhPxC9w9A4MgpcgTKXWksLw42W6kEWniDPnwqesMgbCAT3Fqt",
  "key33": "7jDUGrPMcb1anuHhj4kR3dahBcdvKt1y5XnjeU3QFrbbzGshrPETsA7qm75CsYBkht7by43JvTU8djadFeE9vFE",
  "key34": "5MML2TZDXSyLEXXPHiyyTgo17ZtThrSAdmXAc9uMamRXVxXAwDkFKAGSQLNp41wLoWJzwXkwNzWAZHzzMNr7BjiU",
  "key35": "5rKtyZSBr8ACA43fhu69KFccsXpLEf8fpfoZbgWcG9urPwLePPSFhRWvauMjcfytBDV9XvwsekaQpZAZSP34b3Aj",
  "key36": "3JEi3QkTynNui2cKR9oCuXhXm9EY5SQh5w4p43sjyqjZQSeMKWwN6Sorywep6SU1JNF6u595T7JpJ5aJT9AvLAu3",
  "key37": "4aWCVriJbYeZtMDQ8fpJjuQst4PoPQwEiTR14P5XpEJxeETQVAQhDYWU6M3GYHVbQFEDfBvtLRpTdAhG8QNDMBbN",
  "key38": "3prasMeu1w7agVaQvmuPZHTsdJiduKVQpFEpqGx8nkUtdyYBJx5SEsFifJHHex4MAEJiX2RVs5eP7SH6VvrJ58gB",
  "key39": "2o8Rj7fBiqFZ9LYM9H5K5UFyvwaGw94yCeDL4WMrZofo8zTSMVenorkqu1NLV8cHEMWBFz4JKMs6U95h3qqgE1Xs",
  "key40": "2kPBLf6J3ojGJfvGosRDXqsL4xDZgFgNDjuWAgsMV5mQHg1dxhEUKhxrjVGCZnFviZR6JfvM8XMPu4mVBmyz4kAq",
  "key41": "2hC5z28KqpG68p37ab2xAh6vai25o7EkWv7g8LFAPgpMshUe2eyp7mdMUCVDQ8PnKhzbeuLwUG5PzHoUWvw63jMS",
  "key42": "3k5Mqos2aVbebUecMdWUyEC93aGj2x4mto54PsvVb1VkRa67yHoa1DxkMZWKFCSvtrx9AALpDVCNCQsgNTNnj8AY",
  "key43": "n5YHZnCBZVtcNvgFq4DNpb8o5teQ5Neam7Zckw2zbhJ9wZJDay4mBkcugKZc8DqA3d8VURoKmqCSTpEPBUXuvNx",
  "key44": "5qdYgpHCY8zCvs4YEuUgpSCm4r6Ri8UvkSu8Cxhtn32peoDuGHohr46y4x3tdMsS7c33eCdidWaR6uLTbsCK8LJS",
  "key45": "2FrGmeHL7nfddumWRYPSNjbBC5fCFQbT4CQQNCRV2DCZngp5t6pghhumcSffjD4YxvE26ms9MYsudrrbDUMD6Qcv"
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
