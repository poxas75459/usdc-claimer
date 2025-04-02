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
    "4h82YpHFP3mJVSDQUZEovvAqnPyuDCoQr3uU3p6dZyRoZPpNhsWLx6cSSGf32M7WtmhAxL3rvKF3axb7bngXNQ7A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "547eTCkyWTTY8uWhSjZ6CavcnYbH3YPhuP4zC3JuCufz99qPWZPHvKc6dkTEiGP5WeFFAwWsyUm7GoqmHC4oZRD3",
  "key1": "KjBomNWtCJGuzS1FY2gJes8rAKe4R5VFbfqKbSU2qnz8RgDsKFdGnpDuXbPRN4SP3BsQMJQjHwHsPhGPTsD1cfU",
  "key2": "3dNbJqTredUbRDr55svTiBNNywMoiY3fiRXRbWA3mmrb1WoJaZkTXR6j6N6MvwMArnhtGG5syXdp2V9gAmAufG3A",
  "key3": "595RAHmNhd7b3MUXS43PcZbh3yM63tAtgaHTxBcbR3pXqvb8PSHMettSQNwXXFkY9QHkV8TSAW3S9PUEVpLcTbgV",
  "key4": "435MHrBSZGD1yUP5mfMspJ9mgVXWLkVN4pPThUG3qfgFabZ89EirMC84gcAxLTTzg9oyRk1E2qMAQyLkYRXNRR9L",
  "key5": "32L7WhBzeypKh4Pw2h8jJCYA3LBu4YgUCk9bR4UpLfMfP3F3TApsAAsoQLC8e8DPbtypsZaEm3tf3PruCEUMeNGf",
  "key6": "4JSyDe2NvjTgMmBNToQug7L4auwCtkanejLPCogVhykRAa43fZvFSuTRN6Qnx2Pbuby57UkKdwb1sG1m3pFanJEw",
  "key7": "4BjwHr7Ap7FCmQHjrMUzkBWFJD5qVhFpvLV3Wp3jzFeg7EMuwTY26CieBgJgiBpZuz9gMyebnbbYo3wiuw2wFv9v",
  "key8": "515ax6R28ZL699iV8xECgTRkFPT3BTScgs5sTLN1cfndzmj7edvkXaZpWY2y58HVCDbWEUtNGiKaxkyDuyCmF2B9",
  "key9": "65QbHW9z76bqspsqd6m44iWqx8ncBQq59aMQm9X177emjgixZGhWgGmZFnZf4ZYeJnxo9yBirPQVyNbESng5Fycn",
  "key10": "4mtryiJFyJVQh4WKddC2iYURJhm2KMuVMj5i9RKFzdpaYKz74NhNaLfzqPUKB2GtnuqfepzGaw3tcqjFEPN5UK2q",
  "key11": "kxiStgXbb5AHPTNsnmtv1UD323pdpnY3LbDLeaZkPocPGz2oAnXVRVd7CaEtmf583nYnnproCyyUrMKy4YDhCSH",
  "key12": "5x632H8pb8kvrjb1kPGBP41e8x45WDTGcyE2ge8KcETjqoRTmoqDEh5ajttFQyPQq1YHDgJHHWDkpvZN4riVrEAh",
  "key13": "4k79EkiMLwXjbgS12rQzYP12N1nZDDX7TsBrJBSCBxC7xooH3uA9SGEVJNZtyAdDG7JiA9mGgGkJgjSYmhoXVmag",
  "key14": "3ThFq17rQ665QVTv3pupxWy3iP9uW1DZWEX4dFZC5Wa3S1wf5oHwYv6KRmStDou4JVR9Bpx6o1eQchmhxLN1WfAz",
  "key15": "RB6ZH7G8KWgWkTRQtttmzX7xbWigKfWTN7jPuNAw3BoW9dcMUpW3zy3MabxBGVcuXmcYZTjNGBgdb1zbzFXNAsv",
  "key16": "2jYa3yHsEYqiUXq9hnr16qbJq9GxXxRNQXq53hCZhMMGht9UJHyZtgb9kQgdrqgRkeRdrAnQbb7xWpAqyeSGYh9k",
  "key17": "23qgxJCXtqaZgFRHRUhop1HLR6aek5x2AqmHyeM1zW7ffZ9LpB6YW7vZR228EB29Fm95KRqPH7rAbuCS4HPh83ZF",
  "key18": "5Q6daSYZWU3HdcSTV6q2qne63HxkExLg8vpemo272e4cfGNwiQRjP666rUpmCtj7zHX35QvvyRUxwDTeTGdRpaEy",
  "key19": "3Pd1HiRNpcsznMHUHFMWfiUdHdWR91jpJVpzpjDDLMHwvm6K67Pvv6ebsnPNrzpxov6e2NRF5Hs2bJwZZJCnDLFN",
  "key20": "4CzYoRUQ47jqtBmduUiCUF1EisWbz1v2cSbcPwdi2YCMQGoEJPddmzCvkvqe8oLbCzti6A2VhvSzomohmgZrgDar",
  "key21": "65BBdeXAXxccSFnPXjjmQ3y6LtVDAn7SU9cpdHmGhcvxh82wfQCfMovbUHriR33KvHztmN7soWoTH6HFeTzsHaZs",
  "key22": "2KKfykzNkQbSTSFBeShEJV2Vy3JmSzU52Uk8GPGSNdm8fmLrw8tMCd1amMXFppUT26FWZxP97qTudU4XvTXizhke",
  "key23": "4Dq98hALaAscpaAMKnQk5e1CoHQxjQxfmqNmAdmcq4qXhuH5MWbRF2Bp2e4nCy2wfQ3DqqPrZrynU5sYF4BvUo7x",
  "key24": "2bez3o6GJWfMizLDLSyZ9dZt8dGT8X1jSJiqmixitybRL6M9WVe33HrXzTiYfygdgUC3Wd4jfv5D3PV47ViwbsKS",
  "key25": "4DsB4y2ZoGtFFtozLFoENKR1fijWvb8oUXxAZM8RBoAiQd1iLfAsBoDXFLooodHY1QgZj6eYM5gpTqA2fyauU4hQ",
  "key26": "5KzGM4EeYKdt9y7Q3aSdYmPQ55fCZwvf1MWBnpbgN2J2tavDdUsusWrecvUq43oK6bpz7R2VVQUEReirchuvhpJq",
  "key27": "4dby1CLQqCG2BPK61Fs9HB4iWCUB2c5v9mrxAQLM9PhswpYNyLo5k34ncyGvfGk2vL17KKGzgffT3sYmjs8kroro",
  "key28": "VV6DLmQbNPSHUSMyu57hwzCyviKtqPt1ry6XErDoQdgWsNNHjwxxhzGa5rqyTv3jHobYr4A7knZvkYggkAr7nDd",
  "key29": "mbNmsmJ2FywiWDdPf1EpdoanDMvMsDBRfLh3cwXu3QwPXDB3w8MBseCdyHaNpq617AogRGt87hxeB6WAyquifjX",
  "key30": "3cqULi4EwNyxNBcs87qUV73cCmBDFKD3W13AR6CShq88jBoSDy9V6HijFYsnDMU8p4qmtKyZBZVUD5iYJMiasq9y",
  "key31": "2yuZLnEab7kse5p9vWzAzoDSQs4PocptNgH17P6mxsLxLjAHnfphLXCgivoqfazfgc73qSYiqTpRdk1FoMnocYU3",
  "key32": "43nWsmAd3YfXnfNCD2YcB7o32Xm7m1NLNrEpAY2EK2X31XWoYtvULtp6ETFYE97n3tgdRgyc5FoSQt9Q1x1jv1AX",
  "key33": "gQHB5Rit6trJxCYBGHN4DoCDduCcnxALZgeYAu8yu2eMwiu6ZZjsKD4ByC55bw62Npb7e26FKmHMi4hXfE9GPaV",
  "key34": "3fsFSkmzz92ZxL8CLXqLhsmG4ztDqV29PuSeC1pJjPJ2h2G54dh7o2ZFDYB2F4s8NT68VQzUFVTbrj2q4tx4kVQt",
  "key35": "2qrDLopQSMphrhCbfc3fiwAWpz7983mpisi4BkHxksWKhYkNax36apej8dXBSoEUHZu6uRz1zQmqzsTQ35uw6SA2",
  "key36": "5wARU4J3KMJ9bEjnMdSbKS9ZCgmpzVRUbivsNYrA6RgBAB1PNNE6WTpj38asfk8jVUq6gkPSs3ktEmVYbHyahcXw",
  "key37": "4Bi5vC81KwxoF89YqDbi6HhCA4znfuJReQ4S3M3PdNLwu5iMzQMLTd4rShDbrsWfC3JSssCaaC5hHA1abBHSPj6z"
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
