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
    "4gbqhuv26WMQfJtycpCX1mzvrDfFbYNX7EGNZjig6jZDnaK3xgLko5Qoqawr21JQx1hFeECSCBuJxG5KcPyXxnLh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GntzdJvogQyCipMCU8BZtoLu9kPWcFoRAEUyntuGWeRt2t54Zojq1gPzrEUboHUsNdUatgBN3atPt6ctoEcFPXA",
  "key1": "VECGVhP7kATM6f8MCs8t75iXYqjjvavjg2Vuy21So4dbtMiogHB3cAqBb2ktHsjCr8ngXWrxU2MDGoPQ3g3bNH8",
  "key2": "45kUz9eSbwQUsHQZV3ui1q34gKSGmtUXPMBFgx8u2qkc5wEtNbPq3PEgAy3L4qExjAg4ezYh6eyWdzu2mMR8WtRF",
  "key3": "exZsZ5p7VNnkdBvEnkuSxAXhg53qToHcREe5Z7BVeWNSa6EBazCzDboM7rNbxAJCWVhCwxNWWPaLq6fy1KpiT67",
  "key4": "5DhWBY4UCKhG7qm88wqSXcZktPs1CdpjQCqCSNaxfJBCvspUQmEBVk59QD758KynRo61P25vkwtfYPYF6fvYNR3E",
  "key5": "4HornXjpUU2g2PxFXhRtuUKhnYCHeAefNfhaQ4ij3N9iVfMjUGr5uksiFD7ufEc3JcBNd8Z8eVGd9UTTh9uNtzvF",
  "key6": "3Pr7NiJRn7W9PaLT3Dr6183QwpNTKqtqmmE8dpB9r7iN15SKSN2WPbACyapM1Rv8GdxGMbQYLHFKjHKNaUeSjHo7",
  "key7": "3YxjfD7xE7BLU4sv7xEDdKBxTyKN1teJzoJXwYDuLbSWFjp4BunfuueDFgeBNDqbG1GsDg6TeDq3QfMM3GT3TRmD",
  "key8": "5VWQRqJNz9mrib7dUMuGLNxcHFLumakiUcYN3j2hBHPZU7zzzGBkRGhwxnRt94qLWDP1Zsj7bbPzw7TQM6TdDLkE",
  "key9": "2NSQzLoNnkMjFE97sc6NwtKrATEn8Mq57d5Y8EdGenMexzJ1yg1MvyYmmjfquyvAeGH1PpNcUHVE4J6HVpFToLN7",
  "key10": "s1V1vu38trVYf2Na7DceDt6L8pMn87UWdfU9oEMAgD1hAnhD82winKFukkUWN7p8Y3PqXzc1tJ8p8Jj8YEnwCFk",
  "key11": "5iUWYMStNtTpo8SknNRTWm89qKeZfKVoRRzUTNro71cqySEZiGGA6KZZB1ze6m1ZqibhzJH7s883kqxgJARdKEom",
  "key12": "4AGEWuEL1zw7PpkokGGsB3khoG9gLLXHnVrfPVJvUu29BQvcy3BK5JY7fqVa5MeqVqFtH8FUUduwh4MhMNh3U79u",
  "key13": "5rhY53i7VLwsmGCUKRcAT2cG6kFQs6FiAMuM8GQiWyiqKi1XtpK1qvTtUcmoUC7ihtjDpsjZb73qX5VfqbrJHxBa",
  "key14": "4uRNcCEyJr4p48ErzcPiDnyNTrt47qJi6Vckm1BLo79TcbVci2C11D4U1hoy9SDfgpt4rnoPtPyqwxX9nyPPB4FH",
  "key15": "4beXg5vwPasrMfKBotTS3ieQRhrQQMa2hSeR44rTqEjUTzNbGevZDqDpmUkkW1kfLvUcLNZaTb86xi2Xp6LXCYbp",
  "key16": "2DoRAfvHNrNQfu5qhdvWPUXBSDDGCUpmxKAbNSGyJYdvuM4HjFwZh8nsk4PYpko7kv1LgRrNaLRn1ECfPKbiKNkt",
  "key17": "4D4ujjCRMtsSc5rTZTdPftVdA2xtKzqDtDeCH4RuNXLjmTB9sRdp96cXVS4HcaJxChGPJMiaWd8v3QU7R7rMSaGL",
  "key18": "3qxitNBhqwuqZGMswQ3MaELeBY9aC65RhVTXTDCv8tKncy4jAjxXGnMB41XVEKW5s5WwyHR5E6P2wMhm5inXYJWb",
  "key19": "34bsRT7YgpopEzc2m6sBDAchsGiKX7Fqq2NHgEJzjfdiAhP1uUC3QXfCyG1WkDbYEPjv8HVCuFRS5T2YyS5MGFBe",
  "key20": "3nMjqt5BpVyRK5sonBcg9W5r55DrUfzkPnaK3LMnFmu4c7TZG3zdS75pYXnjtvjm23j1W69MMrhLDS4uLqXxnnTd",
  "key21": "2sJYkRmHruzPCUfc4hZJuHs7Q3YqDAYHUKGNSPG4W4z9R73HMQ3FBKPgfZv97PGtWryy5BGxYyrkE8Nms1wFjems",
  "key22": "4x2YCZyjc16mnJiVhwec1zFxBoSGHMvoepshZyvdxaTscGP9vVCHuc75M1E5qyvrr4h27Wa4ur2urrb6uPAkydT1",
  "key23": "r1irsi7nuFyVu2PtsAcvANer97CPds58GoHccw6isucjPNPPcsZHforb6oU5oGSWxkpUtiMpnmrYjuKYVhUzx1f",
  "key24": "2sjKiq3ogKzRdTUoBVC154NpAUPTnoU1vZ5UZSQagZEeudVdovKY9fdtnwkcaVqGZ8JrvHXNCjBhtAfhfoFpJqtq",
  "key25": "2S6WEVgBkbRoGUKVnR2AvHPMBi4qwWALvkNqCXxhEgT2hbd53WKUo5wRYPEWZHQkQwLPyXLxJLuhXqMa2g2MBspZ",
  "key26": "Q8Usk9sGDnZKdctXZhNBHWFttKnjcDbuwRGKn7MSrTcenhJqgtv19y5VViZZ73NxaDojg3DTKbVr1JYJHY9B4Co",
  "key27": "2MsL7irv12eUzBsJpKxW8BzJmE7Q4axmWHJrZNwqExLoNb1A14XwodCd6PBmwHh2EyRxEqHmnHPvEcSDD3WNprzm",
  "key28": "91Jqtsjm3vgvoGsHJVNHZYfS6yfAhbCFMXqTJPS2zyxUhvv81oFUk1WGEnCkNreSRwn8C8pPx4Ai91rGqDjfZjr",
  "key29": "5Bz9DQjuzxeoyikmiXZtFBMfJrBsq3bhjdmoMoTTcw9XmavYWE7Et8dSU8YP1smJ3fCthHZA7vwzjrMMp3AZjhoh",
  "key30": "NAxkiJMzc93D2sLLqJ5h2kYSjhobFBK2fFtFaGiJCCyhKDS8BjeWNfKYegXDiDHC7nS1FTahtVnGucT1K8c4hQJ",
  "key31": "59mMq21kCG2ryJTxmgYh1DojtEiz6sJz9oXgyEahLZVkjMBVjuj9t8NiRAtiaGhxKkxeWNparAtsxYsPQmfJeULM",
  "key32": "5jybrsXdwmhpkKxhrb4eVoh7GV9iiBFhhUoqmZYtPSe7FhPsG3J3kU44bNeuoN4HjmEbRLNfwDcZ624sqraxea15",
  "key33": "53DgR7VQsvncb6ap4hjwSFwn52buABviEvyHobXR3gxD1LQhe3RuV9Mrox1Hb6fiqi6Z1haPAxZP3YFmGu8Pg1nD",
  "key34": "3VRxf1U9E6ZpkyRcwofFgoa4Dx3vKvoF3oZHYKBiBS9LY2eY76jzy7Lp5pFGdzJqoCKUhX5w7mdJQj2x5nmAqyRs",
  "key35": "3u5Su82FDvwZr9qNPjrjDVi4mgy1daxiQGuQcH3nFo9rjMqSRkC3pPAniEZXHZ9qcuXP9XzuCouqZs9dp1TtahsV",
  "key36": "2b2pm8b4UFLYJfBnx4xSq5UdnsXdRDgZqkpGULmQByhbFk1TH1sZP1qrmAWnZ3fUfhx1M6FQWb1793HqqpR18Crd",
  "key37": "G6vaaDCq1jC7z6oFPgAvcSe4xB7E2xrFNEH8FHygMaMfvjwzPCj2LdHkPNTqEHoRkqcjDhNbkGPDyJeUzPVbGr3",
  "key38": "3f56PW3YC4KemZfQ5qaXvqWirYLmrNttFEGVfHepAP3dFyYEw39qmRfan5sk1VK97gPfC1phFK35GKsTHGoXdabz",
  "key39": "5BgzipWjrtZSXgjXfQPia5KzDJdfh2ZLmyKPH7s4GCXmqr5JHGFeHpuscTFyefjsUvZ3ByVKTsPVEX7VmHXkaucb",
  "key40": "3Gem2Ht3Jy8p5jGoemeCozB7ggRnes2sZ63njRiNeYXUqohgv9oh7P3v92cK9YQtqExnGsMzqZX831zrSuXQwxE3",
  "key41": "e8iTL4xjAEaohGw9HTfRhAuREyy7npDHJPwC7rPaPF3XEt3DJUa836Jbd36cezYdQF3xvWkUDigCeXuh2mmYupq",
  "key42": "3B2KWV2JeLcheghESqUbvVrEpfAx6qpidoSi2pFXjZFhvL5sZdc2zrpGJErTgkDKismgqRBktwszkceG7pgVqWVq",
  "key43": "5T7nJvgdahWwp9DcdWp2aHQKSdA5dsX8zJc7knrfromiTFhKwJfiKhBoQixaonUM1V9S2S5aDak95LrWEY6yPiYK",
  "key44": "2RqSsEqCmdzL8TJF1YPqTRnkg9bJBjnfhuxe2BjKxNvfaSgdAr1627Rrmq9bRBPAxyFGvqYEhMBkL8iqZThYx1QE",
  "key45": "4mdLa1FyHM5hKMDS2Kz9UVVtKRr7cKKeAWxjkmGfC7n2YGQ47ufq5AmJB3123RjpSNUvRogcMzr1PYbHHiavKP1w",
  "key46": "2K54jZpnCL6ytEiJcbNLMSde1xaW18jVi2rfPvfM9ZHgxorych65nfC3Vv7onZMB63hs1o7pbdcdrGXeiKvd8w1i",
  "key47": "2F6XuuZQsUjhSdXSGEhTwpqXcvVg9XcmydkvekygNsbj23DgAnbBHWoiHcyhXQKXiLbzcbN7swoREaZjrMWc1feF",
  "key48": "4FLU8jane54azvnDKPiR8u9GKNHssvW2abFq8cum9nGa96bF3XJTKdGSG9N2AYnVmmeZP17Unbhhpt8CprtsnxCq"
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
