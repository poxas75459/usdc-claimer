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
    "5fLGfxfRRq61zbAtPu612Qrs9dzTTnJ3cuqtMNBisC4Z2eqLqGYPQHw6BpHmj3CACMosge58ifwbqSELfcEnVaDd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q6vQBnZuRMrtAatMf6NivvKWND1AefZXgPYJuzjXk5T11G4i6GokT5GfBWmg5hkULWb3LqDeXTq9Hj4ERWvoYQb",
  "key1": "EJHjVodQyrXdMYFDssXJ6HZ9B6KMee4aRV17soFH62WUxvq7fRm9aYrdCmh2daf4vH67tbZcfA2Ey7uL7gx4zd5",
  "key2": "6VvucPEzKUaDgMKt2rsv7TUY9LfNL8rQHT2dgByK8rfe8sLHRYdG83xwXQbeZ89FvseCBWVty8F7T4dujwZKoEp",
  "key3": "ezRBuNYMLfWinnqMwbouyz2DQmXKygknwoC5Ji9dYq9QDGBJBudfWriTtneV7sd4fiopAtorxpNt8745SdKEg7Q",
  "key4": "3yyREhhCz51uVHd4YVr2vQjnS8gGGrxUxRvbHW6LvUonTYiDmiiAGsTNbCqfhzvPjWRiDY6UkYHNQfDMVF4nx4gH",
  "key5": "2knKFGKp7ZtFAmynZJMYzUV9D8gRvdXJbkCZXBJoL2wMFEgNdH9vknjPKQ8JXHNjQg4Uc1PQHfvfYCvrgstZWRnk",
  "key6": "2S35mVDbfU8FCyxyKmP9WqogkWNpwTrHDW6pUiG47crmF8dR5JBLTks8Zzhpr1hQx8sz4UxEuhRc8i2BLUEd8Sfu",
  "key7": "3xxQT2Qeqed5ZjFP9TKCgd1WkXntvH1iJxkZ4jNnaVGTXJbPmJGMpfeKvVVeuf6jY8HnfbUpg1DH4fWiJrKhSwB6",
  "key8": "4gnAwetHwbjjo4fh8E24qguoF7jMRLLCfB5HFDTSXjbCkh6Z2WLzaJzpQkjxPkqh9Vb3veKTsvGE5i7GiSt99uco",
  "key9": "3erZj9yxU1RitAPCCwbVkmM7mQHzZiA1Ug4oM2nRmgEs9BAqUdMMwqHFXgM9h6t1hijKqyGMBjPWdJb7sYUjab38",
  "key10": "8witTgLd2phMB43gb79pETcjKd5Zon1TCVmHme7eVzLG1RV581bYkQj16oCyMrbuX89qXcyExvzDo8rTMiXrmLv",
  "key11": "NcNTfXV8oLXiRyVSrqcZ9TW99FE643RjmQekyCDo9qzDtPozqrjpEazMbwgjLVpE22dmi1NcsCnp2zgEUdUtfyA",
  "key12": "2VKVmr1XBMXCDBHZTF6dfz8wRq8HVUWhbdtNkbXhZs1CNYWetj44AaqCj1TzCS2TAPBE2uDUaFx8JSq5mSuqRXUr",
  "key13": "tLkgXTjuU18ZxttkFvKMKG5CQQ6hqwtxxaFapXcavFvnQGLtd2db3SsRcDiAmoZiLwqBUhuNrRs4Gc3qHXBhPpt",
  "key14": "3tuqHRL2TF8RqPiogx1xioA4yc31mo15wrZnR6p3u3CnXeH516QciqryXZBVCL3ZHE4ts5ZSHcsdnbA3tAarezLn",
  "key15": "58vHcfzEKFsD4zyWS9GpHuG9G53tXdbXBGdXrTyDGcJ3ZNYfKYBvB6a6hNjzANQpeGqLbbYCtWvyeE1g9wgjpmQu",
  "key16": "5VcNDSod6jwagTmi6BPgCkYtLfmzwHLurvVPVnqXuSrdarbGMExDVk9CRBqcGZALFY5QVE8KTGUZsPgpgtE8x9Er",
  "key17": "3dSBYmrrbLxKqgZjL68LigMHF6r5hGcaHGbDjpfurtd5xnRkK77oQ6hth1pG8rpLRVvRE155ccx47ZFZ3ifZjA5h",
  "key18": "4ZmRQrtF3c88p88c2txeUn4nf171WBs3iMnRBBcjjXtEjVCR4BvZKAjCx96yJn6Z6QDHN8GaS5ef3sdYx96W8uiz",
  "key19": "4LfccDV5WHXH9EXKuC1qFAL9biN57fhSUYrwDTWTjvi3XeK9nUDjE6WfVUvc4An1C7zVDmuNnbwitqPPayWUouFn",
  "key20": "2u3fTcYRWTUVCy3QiY5M9gHS3CXcZZkMFusAmu6c5UtQhGG2rioieUzVnB3JjnLsXByBFv7TmSrwY9DhAwMoD42v",
  "key21": "5hRiBzAxbd5jLpC8TXU22dQK1V4HTmdMd3PFBr997wTHS3qaFArUfGRbEVEEQ2Wfmdjd1GCiUdCCwfNgtT8UM1aB",
  "key22": "38d7gPP5bsRXGoqojYzKXqejF9KWc2ATthZc22XSpq7tDP49omivuoee4SHyPRh2bmTw8f5KDWwxgLZ8y2oS8hKy",
  "key23": "2ZTUBDA1rsrjwzhjxckFPKKWn785LFPjyLo1iPEE77e9bxNRiX9Z5mcb3BVn2tgVRy862K6isuKsqvmTZGdRgBKM",
  "key24": "2kucyNaGTBN4xH2wPxmNXUT1ea7NJ8VVbXutitMBJBC76DvX5xbFoUjpiCEK4Smftz6wvzywcV8FJbTbkK4atLeS",
  "key25": "3wKs6E8reMtXygtnRDRWAcYnJ2sMQSZPv4svp2kgTcQyFunh8QcVbnciYAkDAPw5eQhToiuTajwN7fMtWUPgneB5",
  "key26": "4mV7hBAk3oWatfDQv3hDMQH7L8t2MUJyedZZhzSRMGByzzMowKKn25QJfh668SXuT2zjffgPqvGh3idNdyZzJeXP",
  "key27": "ozQasPEJUjfb34Ga85zLfrJkFtpdtZtLFGmtHhDUMSSZsWWCBvobbhxfLiBjYW47x6gDbhPXqa2sFiKzANXpUeA",
  "key28": "3bKk4D2QKfY3e3fufX1yz5h9QQyYPpF7TfC5sB1JngNDSutbYSSJs5UpuDPHu5Y7YCJ726oJK3QT6rpiATJC9iyQ",
  "key29": "4svMAdsyd2fmaFAvsuAxtPrYHtHh82h8k6796qMf3mNo2xSqhSG2kyxB4vz2CTvMEeBZPCUsN86rUGrYUbCGRHnE",
  "key30": "EVh3rUZUjVk4xhUPDmp83vJtVKFFxQNNBHz5qsDGK4s2DjAtmGTTdodYchDeueoi6o88mM4f9uPwJzpik8zhofi",
  "key31": "28uwH5Ex8DDXyaw4Qroqv6oAR1U3X92jAxgjsRNyY87uVFkTJwboHKHgeRgJvoGheZcx6xQkqGAJkL6wU9TDoqeS",
  "key32": "4TCZz6gBoPzMQpYRRdSfSew7W5nbowDdfaYnTucXP5QQbu7N8stWi7QfXGSMLGCBNvqjQpTnAo8yA4G3Mz2MwTsj",
  "key33": "2dHX7yaJDizBLqEXpVG2MBWdUBXtcnwNhyVPiNLySGYHzqQyz3m61g5omeobh2bsLwwSaXAsxvMQGGHKyKEuQt2w",
  "key34": "2TtyjGytCSme4eWYFQZ86iiTb2sCD2YgY9264K63PrfDvtpF4fVmCQEzzUUhozYH78Sq3z8YUe4FcYsZQ3e9mHvf",
  "key35": "49Qvrbhts76FeqrTkEPRV5SNt1bvvMC779trc2SjCq1UzAjHn2adgSTb3hh7aUDHsaxyvuZYiVnz1ANwkueibGPQ",
  "key36": "36tUaRHuLePCCcu5aA1NcxyuBdzsSrPRNwjtmtE5M5ZvKEFjnULc1gjvcnjsNuRgeTgJkykNm9G9dfmg3ndUcS7f",
  "key37": "2DhbnDRs2gXCKq1hzwyBP1r1aDnY8hbi6sMWdgt3XM8Nnnqw87Ym2GKqMAXmBH2FbMitLKAC5jojZXBgA9Fv7dxQ",
  "key38": "5WatChEhYSdgwkypBQu6Wo4KcJoSpcN2ZkGyxYwjpxd4HuCwhy9Hvws9dViYRS29EdA5btisnBtsEXfSeUqnxDnF",
  "key39": "4K6eiVSq5oF4yjUd3td6sKUGTm48i3xKXX1Vj5ABG5RYi7oWW7oBCqP9WxVqVDfnk1mDnHh2y6V2K5K1AGPXC1PU",
  "key40": "rB3yZMtPEeQh212JjSj9WmtchLsVUPh3v5ETPGSCYicWGGtpVDKY9N5YBeaicAGypQy7kZpFu9ar8jqQco4F8w4",
  "key41": "4VoFPiRzY1qWh2FKc42dfmZaaMYUTQELQmqmTy7ts7BD6wu8SseZKUy9tCZvtKqFXuF9YfQiC43FMqU53g9HH1S"
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
