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
    "4SeZogiNXV4MJGqLB5X5XkAnwijf2nschbvNmj17mnYPfiNgNv4ux9mMFeucXYCaKnRytngpbTuxaAmjJvyYkxT3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PSdZptXrPR9ogcmPRsuio5jhEoCKS1VaKWeRSrUHEjCs9TVJMFGRkqkkfP5kYJaQKzSPkZwYjCSvTiyP3jAwC6e",
  "key1": "2odk9sg3bfawf3z3Cq3ATLyyyaQhmSxbZaSt9UtnH5bg3fk7wimfd3QnxUdkVP5dUMJyvZ7w7jWe5fiAc6ngGqZa",
  "key2": "24PscpZG4kDP5EEHXJNjhNkN1wYUkANZST6cdEhr4H3CqPFT97BEMs9aSYpH5Nyuni6si2x8Te2m9khbQrb1VwmD",
  "key3": "2BYdD4pPD47WqNVbDtRTgE9m6yJeUQuwTyKLANFVic4F3unXUPDiWSPWep8YDp1GWRsSuvxKVW61kEwSM36qHgcx",
  "key4": "4qiXCFjo5sCZQAkYSPLAzeCby5SDEmPWGQCgz2DeQ6CkoLVz2LnJuQedVf6cmK36PSVsYdVLHGoPhENmzfNn9GC6",
  "key5": "2nxtKfKhpr2VPCGS2a5JcCqRin9MbYgpmS9qijsakXKWDmLhKpKxBRG17bVGYBTFsBA1cqGHPXfWiC4uhskkK8e2",
  "key6": "6ArkRB2xz17K76QoPyoDYFm14nWwmqMKMNPrSJg8TfVJ1J1RhJzaW9gqTstqk3Cg8GgjrspLrzUYxpryN7SLipU",
  "key7": "2wzFCd1LPTrgCtGCFnoMRzQwtNHGVxFGC7YhURYJptAMRYoxRPryyxRddxkhB9FbTwHNjBvKhCPBJZEKBYyhMMyT",
  "key8": "52wCCH67fhcBKeVqN1WUBp3efmvHUjjFApi2vVfwJL48EdnsXCZwWuoFeBkGfvPV8tgGBT28zwCZKE5ZZRVKRyiP",
  "key9": "26Xx7kSHjPAhNrUKKt68CUrNKPUi8tVrBi1mLGasDSFEd4HAwBab9riaamYtjzAvzyCvce23CyQZjfC387HLHq5u",
  "key10": "Rn5y1TZD2Mt1ejjY9MDyQgxYF7Mteod9ij9bgUqymXqH8Jax1Nks2kPG71SjA1ZztEf3cKbgcTQm4qdqugeHw7M",
  "key11": "4YcDZ8rnTmYFaKHU9epz5b2FZqtCqdoJ7XQ8uJZtLroctNrWWNzUcoQDgaJYtofaibei8w3fK8UgZtshtZGKN66j",
  "key12": "4yNginCNBTEdeHzrgrQZZQWG9TXw7jvwbiLSAtUEDpuVrWPs25vCLqacZJCWDWAdzm3ru4BUZva1z2JMyL259aLM",
  "key13": "4r8qWSfvPGayw4ifbiPSKPmKrtwV6z7AXFJikUTJNamoAv2PcEX6XGcnejczANsZfXPyaXR4scJ7AYXDUQRsdQN8",
  "key14": "5NW2LrfyAKP26M13HpMJo1R9BcWq1WFA4ozpGww2A1aAXVfzDsu31foS69wJmUQSydGhPTZP7kbML1PdJMqTECFy",
  "key15": "3fz5tVZBEwCBPip2QxZPM3MDPsZJ8qCLjhM7UvFA7fe5P4n9yTwMeZ7mDsbzi3QiGT9adEEB9FeoLDNQH3Kr45Sh",
  "key16": "5cKVT1jTDkzEBW2VvMwk7D4odANaYPfevizGjczH2WW7KmvrT1LfNDaC33Kgzru1r5YANzW5XvGQ1CgRpBHKNx1X",
  "key17": "3QP443cA4A7nHvHZpzaNz7gYCTEZgFM57kh47hygJcPPpGM3JUBs3kenjEJRWUX1yNA3BV11K6KA9EhpP9yNdSrB",
  "key18": "emuRHErWkTCqEFPnU79cjcm4pph4AKVUpQ9641Z1nxmKJz5CDBUqhZmT1cqY9gJkYnUicsuaLKkq4EYFQyStcfe",
  "key19": "5Q7tCLWEdbojiCXtMvrkf3fMyDB75ZS1mxj4u4dSbTE9Tawm7xdD38UZsAtseMwqaBxE1NGo2aoTmLRjiJfUinnU",
  "key20": "Vrt9PGJT3725N72hqF6ZPjQ1xTmGHxUzhPeMZwjdj818NDz22PiyT1dY5V7bzYVhCRekEimnBzmcaAqZs3WmSXE",
  "key21": "3LqxXWF3h56jToJ3ViZXeHjp8GgZhRAsDbcTxakzH6mu6TZNxAoEHMyZSFCS6K9ormf3CQtwzsUaBCVCyB4Raqit",
  "key22": "4wyKCiYUvhsNNHEUDddhu2AB1Tk9KkapyyHcSYBaKwDA1x2EcP3T2gKFessVNy4N3LJpjPrP7gBTVffvFGPUPSXf",
  "key23": "tZMQze3S8Z8wm95yLx6rR9qMHAdBT75iDUERxni7QBfYvzmnU8BCYGYroSV78m3DyTErGH13MieJ4reLH8vRgvW",
  "key24": "5X6PjbuxC7J69k91cV9uWuz6L23Ncu8ncNHDvUmW95jCKgn2MvWPhzy5HokK7pfd62a6edBRxMBxjTR1mS5PpBFF",
  "key25": "4FTaao973ubmZJX522kPPP2UgEUgLuS4RLATt4sjWZYyYRsLVJVtehQDupHEKdcwVVdK262wNWnphMHqgqbJyX2g",
  "key26": "4vzHrCfkzJTP17wZMQ6Uefuzf6VEXVpzaxzdckDw9rD2bZtSf4WFStp5qBFQhvibu7Je7NVkHhuC5Cn2tYXGqwSa",
  "key27": "3kLjeLB8D91MTUVDd792kh9xhfxBxxdQjpPBgosPoj7etn4QoqUbYjN7JJ4zEu55eUdjtQrSWQmiya6USc51247t",
  "key28": "2vPXbEQZpPcDEG1EyK7sef9qTmGahtcvrnzonQ2BuQn4Mk78HwXtwBcivpc878476YYDLjiJvKZbccJywKHe4aaU",
  "key29": "4d6uBiCauokTecsDpjQxnFg7HicDbWzyJYAxRjmkccw7tGsEgCsqrwASFskAEYgHzFrhsHnjmeQQUoG4axQZb9jP",
  "key30": "daZsE7vcuGnsjAk5RE8eMm9czNRKAQrpjrAAbPEF1yp3k35msX3ahpGkkKsxaeYsALAKjcX5J8s5sYaXm3QtDc9",
  "key31": "3Fy7uxPAphband14Hk6eramv6NzibfQGbHQfVR2nuL7iSskTqZfrqYGeCcLYJy481QBQEQNtWBGDEpcw35LqCzJh",
  "key32": "4hNgDirhJLFRwjGaGpb9j5KehhZuHJdyJ5WUdrcmBVjDKkkhsFCiZ8xS5cQPc15DhbbepUfm71gtnZQEfJLv2WSJ",
  "key33": "31afgHjGzByrLS7M7Gdin5XU64LLndswVHRVNt6Arq2nZe5UXrTnsME4hX6LvSsCHWSrXmcPr6jk7PXkqtvA84wA",
  "key34": "JezuvByeWHCUhncqZ6EX4xmP5U6iY4tkvn9sxgv2U3S1RZjaKAz3mvjE5cZLTrKP8boLnTnHm71SLnUfzeyCEGo",
  "key35": "2gnQsGmRdmCMCXqPvz7Nkvuzs3r5czDk86W1E1b77ooemHXHnTVSE9Gewe8isdWcb3TgiwcBDT1rko9HpKiQWLVo",
  "key36": "T2GHVKeuqWGNyuNxpFqszmVJXtQQvDiDmak1K7aVpuqgCN69ekjijoAth7aPA1B62ntwypNoubhCnFq2q4nFgGP",
  "key37": "5cUmRZEKh8dqnpWawtRzgQnFv2Hudrowtxc2XezhYK1X3k4koc1GWeVaKUZsUFXg2G4DMmJcXdKzAvwQPKaAK7Yk",
  "key38": "33Tj3sJaUSZGr2mMdjumrZx2gBYa33hs32r7jVr1JPuCq77DvE3RMwToQYUdEPDMTrwJ25HmHwZrxRZVJrD7vL5n",
  "key39": "oRNDAdQwsivPnHCuNytmoPWXn8X8PUAisTxepvwmgQAoZNkDFS8PSwUko53xQvDSQNTci1K2NFiMqYyG8aCzucf",
  "key40": "2LHfnYBsuqWxrFa9DUNphkYhdaT8ndgGp1y61Dmg6K2oEmTo91RmMuZP35HGznXKAtN5thvFTvMnX6wXitrRc144",
  "key41": "3XR81P2kSqPTKvZduTCTG9Upk49iTmPPAqx3BCp582ZxoAuw7qHBHa2yDLPYXAqTbmgrBQyX7zJMVnMGEirmnrFG",
  "key42": "4UnuhvBVsrd67jbUx4zTMrTqDKaSrvSxVhTJM8D52EK39NpCgai9YLazP5v8f4ctobT1J5qMrfRGrrHZ3iZwdRkM",
  "key43": "5tfirTfhdWpwecMCmktooGTPLYdn1sTRSUofHrN4CMq59czHmfpumHoYGY4Bm4T5SH5C4Yw3M2a3tFaoivGLMAzE",
  "key44": "35SfHPb3tr5P5g29UnVD5FnKz5FMvZ56fhTwP9Ea7uXqqPKi2LxhHBjToUGKv3dpqym5YsxRkAccZbQJWLued8qk",
  "key45": "5PU1oSMvecxo83uEwWyerwQiDiB5wiNmDeuoPrBAH4AdqGT6PPCzgr6iAknX6wmKW6G3jieuKHCuMAgxTZtWEyDd"
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
