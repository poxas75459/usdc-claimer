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
    "fi661L8zrPE7uEYma84GtQVgZ11TsYn3GVGi3woNDtESNFY4e4uHHKVqEZWH6LTJ7SxfsVDkN4epa7w3oaXQazQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hyJ1wGAQ1QCDffdzTVQe58mJrTMegY4DTEe2wvUVTT9g5Q5oDE8rDBJVWUAMYCe7CHykXKa5iJtgMJeqnJxMhbt",
  "key1": "24yHawfgEL1NkDqVJ8ojV34PNeovRpDzHLZ166rz83FtnELWnvuPViwTzkzK1K4JyZtzgkvCqy2t5zvodJ6PF3Nd",
  "key2": "2rhHttyYLRg4tyJdwwtQC7yPqjahcctdhedbA391gfzVpfWkAuV86Ho2dGcyUzffBB3GyDqcJpKrGfri4Jy39ECC",
  "key3": "5H9bTogDtws1pKwTWsxDkP523q8BHqzfemc3VMoqY1YDBmvY9vxR1toN6kQdNHUJwTGengz2cgQKPKzxzmgB5Pa8",
  "key4": "5GDJN7FeRfgUXNc8j2TMB67SPxSXaNWpwreXJGWEG4cHh4wpDUcHNfPWBas3bZotoNvvLdM5uPS7pMitBhekekB2",
  "key5": "otBjBBB6V3CfRzG1ehrCCy1ngCT3EqoP6thjZVfmPb5MzNVuk8MhYY3GvVPTkYooHaMJikUM7hw8Y6nMBqv4r5N",
  "key6": "5DkJ1QJ6e71VVzk8vmTSwVoNThzHFbYhkFwzj8Dv29ZHiBJ4QQTFbbYuPhC4i4Cs9whzAGLfJKwNrAB1kcbtgV5R",
  "key7": "bhu3NaZDetXid1U7CBWDyKfhBp5F7nHdVgvPSixKfntt7wAP4atiAU8QTT9ajbguqQv1SYH9mmXHMpKKZf18XDo",
  "key8": "5BkWbCwT1pqkteTYLpQFd987r9gD5PYwkefk4n9nv87TQRY8fsJq1x5DT2XH2Kb2fcD56dB4iktTP2bEgBLNBUAK",
  "key9": "4kVj7K3tYFWNrKs48pwBKsXYNNxFXjEziKovMU2LJXZRcxQgc4UVdL452tCLpojHJKYaTPrsKabedyx2m23yacPU",
  "key10": "5KqhfhoQavcQgg2s47PxjUgvocm1tNPBMk3RTLzL8eMEvzG8PxvnAUJwDuf53VsFpr7BcTigVq5CchptBUhFAiM2",
  "key11": "2QRamk2prTCSH6Djy2tqzmapGHJHDh6EMh2oPq759Gz3uBSapJ4p12x4mpYcHJoVWw579ugkFbS14pqBARWDfG3D",
  "key12": "QhX3Pm8oAr2DECgjgwmEma4sH3dct7KTevEJ3ErZLWxVTgbTaXbZeTwBhXZDXHKYc82qprtRDQ1sWuEH9tQFoQS",
  "key13": "2S7tqFQpwENFBps5pupwiBXscipiTLQZ1SajEJ6sNYZDpQ3Az8mT616Xkv1HRLs93zL8TfBEQg4ZDAojtKgMQkiE",
  "key14": "dosFn6g9KgTWYgjggBvtuJzkCVvckrFSm9VwvBumG3k8XSTaoREpcJrBdYaU5p7D9ytAHroaoVKcXJWcx8nqS2B",
  "key15": "ANQPnKrN4arSN4mY2jqzPcpDsDbhcjmNTtV3YdegPZd48L8uS3pAW8WRcQ7XhS6qtWTPKB3r3iGpA3r17RZjPuu",
  "key16": "33REKJrGGSgZnvDPc3fv1LAqK2Tekjsk7npd7eStYqUP8UUsa9WwaszLTPuBLSRMfgSppfVoageoQ1Wcr2VjGurk",
  "key17": "pQsCg5y2vJk3WhUhaoToLqE4FjdTLbmtWjswcCSj9AJzAWnA9fj5hJ5C9KDEcfRdiTHPS5RZ6C7A1DSgWCva7g4",
  "key18": "3PvmoPjh1WGNoY8ceNzWmgmtStA8GhcD2D1ZLnf8B4XzCN3mVbcqAQ1rxWdoQHPk1tRC2owRdsearcWLmFe2nhcS",
  "key19": "5RCS8QDAHUnGM6ctXHG76F85ZTe4P7K39wYsXhxxRkXfvqaVQ9kvMBZp9VY6d5411yEEgFWYSTRZ2WJ8T6Xp3TdJ",
  "key20": "36cxwgyLKtRKoGTvFaqjoc5Lsqyn6oW91xhr3ogi9bNVwxVNCFuepTRrUpz96kgUexYrSp13WEXb3wRpis7tVqV6",
  "key21": "44eBPsQ6BMpdWCbLpz2pgozsqTkq6o7enjP61TBFqbCzSbNcsZrdSoHHRmSUbGDDR51gzWmmgAqx67edTbRDa64o",
  "key22": "64ZE4oj4LXma827gJxfDyemSjKkkfSeP6KWQwN2k5zTDBpW8VaxdByApkHkmT24WGfWKnzWhHQa3vFD3gd31e8Lq",
  "key23": "4mzL72bR2TbtK4EH6R5nGmcySj42qe2EZKvjuaY9YSJxf6U6tTBKfwHTAeSAiQsuTCEVwWKzXye52Y3VuegmDjiu",
  "key24": "5bVna2q4jBsdkNghxTsTQEt1hE9mgtzD6NgVbhDp9mC8C4rvfAFTCQrzYPUqzmEiU5GwwSWfMtbrxcRUVurJkh46",
  "key25": "4D68fNmQTLJHkgbT91fpZKPsZraqKSdX1WUgsqoSoAXjiiaDiHUKwdeCt9eqe6e7Y6SV31KEVeBBoxuT37gzdp5g",
  "key26": "674Bth69eEHLTKkZtm5DF4Vwpc5WCBHGpBipmf4jCx2YM4oyBawquM6QVAKCHCTPCBPBatEPDSybqhcqoefTWCys",
  "key27": "4ijTXpJy5G1mfLRW9Ry7vN1Vw2js3CLumev1tkuP1b5f3AVWJgbX7iAQTLydraJUAa7sTC34rastBDVVfhkRGpxw",
  "key28": "3uao157ee8vzJhUewmCs4QSwmYTXxqSnvmU2Rzg9Pb5LVKdDMBi9GRvTJYbu7WjfxpdxvroBWmziU7FQ4snrdjiP",
  "key29": "TzNPszeGW34MzKryVghw1Xk4dtr6NxkdvQmvpGHWXU7gxbLX8TtmyKSfovsc4hPX9wYAJyNm3K392nr8piL5kuJ",
  "key30": "383nyEBjWdxZNyPvPszWpfTFHk5DrANLB934az3BpyUwLPPBzZfw6i2AXkxrG5x5JxXmtXihJteEdAiKQNYxw9bK",
  "key31": "4q8W2X7A6oAPJp2V2sNjY3MBAi6GnWZCJfDyasG4VAK6xSALxHG2FxZwS3LuaVy2ERuFcvJFNChnL4SaotqP7tLX",
  "key32": "45qAuDEhruwWfZKdaBQkx5uyQqpguNQgz6w4t5GC7KE31qd152hLHneSYt43Qu69cmPMdoDnpqQe9Tszstydyt5p",
  "key33": "5aNhYZifuxaUFvQrHAuSzuAp6FmCjNkCLURheqSvpBG5yJ4yEzPF2cHrBFYJJfFfH7cvxkGazZpaLKfebbgfbbmc",
  "key34": "66dsMW6paYyD28PX3dFS65mYTVVFuiPxBb44EvxjWWHkqR8JnPduyTQymD1z7JbE3bY4REq9xTGvfYJnV7FUnKXU",
  "key35": "4JuFbvBkvPcF77wAiZRJPApPw88fbFS697bn71ch7TkeBEmZNf1UBUmmtq93PzrZaNfzKZrvXz7RH8TajJmTRbVA",
  "key36": "5PMVmfsZFTDJPHaa5mJCKSPBqVtcBm8somcDPcboh27E933xq6oCeFrygrGDTHFJxrMgvr5tLo4YCSfLiL4398in",
  "key37": "4ssiajDhRwhE8NZgVNd9Dq2mYKPXnERdLieNHpKCEahcJEZG7SJacpZd4fUZUjrrXWwKTYYn5i341jbS8agrFCia",
  "key38": "iGDfKmntd2aftaR96MpezHuAHuKF8nSMfgZ7eCm3L1nvskmzo1swcZpW6YvhX2kaYBuPs1sKnY27SU3n1Hynu8x",
  "key39": "2V8TFJYjzUJDbv76uRQ6wPJfgHUtKeLTmx8M3g9WStKysr3UqaZoEJQvAMUg2nwCc8QUezcQWXK1zAEgPsU33vmv",
  "key40": "ZY7qfp2kcZwkUr8HTRmnqWXmmQRWQpRTyr3avQ8pXXHV9qNckcGY83q1913WK3bKfZQBtWwQw4ZGV718KjFNt3m",
  "key41": "fpx4pRhYGbkjZeUHeKwfVFc74q4WDmEuPcbkkZYSAhMFGjfE8LoTREgDQgRhxNDU9amBQNUXxqqHyz76DPQybtm",
  "key42": "2zy75ZrqEdfcU8YegDVG84uHF4ys9pApK4R7QnsRMG45FbBYm1rG5nXCLuqEN1hZB8tN9DaweF4yJh91WdMddLQB",
  "key43": "5RNYEr67yR8YskYAFLJfbqMgU8d5weXJs9rUqj2kh6VTBtW8aM96oFbd3GRWyYsqiwBDKA7pMDue2bTDvWxR2am4",
  "key44": "5P8ZuAymLsJBQLGdUFBygVuAEZzEuhiRGLmBfSiJDZsGMPKPpHweu8v5Der47foGdd157GVC3esUWZ4F1s7L9CEh",
  "key45": "1P8EKxzMhTcaTBTvWVbRJ5gBuNjYSqqEvu3wrfBbhWuU2x4VUyCR8Z49rQ1Y15Bmy6hX44HE6uNQEGFpFzF2NkD",
  "key46": "61xoFPdpSCDjgVctt15XRnc4cNU4gjQj3edBVbMFCaM5sspqLqeSfr1h4vqoE3NSMAkFJ3fB1vAgWyeTbu3H7NF7"
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
