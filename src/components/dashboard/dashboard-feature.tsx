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
    "gtYo4JNQkzM7JAyQztg21m5Q83VcHiEb4rpG4nurMG3GRPxyBQq2ihZgbLnKEdBizxnyCp2bKSQ5wt8N2TJ2EfB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tH9FYKYEn3qi1m3grwg4skYSMTWVrMMtsKBc26y3Jc6bPVGoKN3mLoMTvw6VZn7h6CEEg3cGiLLEAfJPS5r5oNd",
  "key1": "JZGY7F8t6GYjVu8sNNi5HwDUHPbM1kZx7kF9BLt1Dt4xhwozXQYt3kW5N4154uVbCYzVSRWgaPb225qs5JEEGZ6",
  "key2": "4s52YR6B7ggov4NRKiEzDckWkLgifxyJzu8brE6bqTQS98mK7hfiGwAQqwvMyjJZXJ33ZUeoJxhxB5zLcFPHm8Up",
  "key3": "QfU9sqUSjRECAbVFj7kXMYA6tSHTMbf6DRS7e5EF7DiFZWsd3o8qVpu5EE7w4kLbiaa8qm1SXoUyHdVzgxuAXR4",
  "key4": "5NaDaoEbTdNAJZouE84eHTduXR77sxJ7LRd6P25zJH1sECTRbG8fM6WdbaK343EeR2exPzunuwNVCganNLZVbusF",
  "key5": "4HfcqDjCYFftHHrFNi7waA9avAJJC6aXY56sos56UAtKNZKkauKZdKVU9iFdGxk8JTF2ppweBdAgeYai4KG54pVo",
  "key6": "2AC1Ke8EquJG126z8YfR8DeeWGYHXQtQynpq3vaA3dsQMACgaYfSrkuwnY3Aw7ukgj3Knuw5EUMgbH7hjATf1grc",
  "key7": "28dTwQ3JD6pGT1oKerdB5hzBPYzXW8XWfPPxhvgt3UqYbHXxz1wiBBjbJzz1mwfuxf2Yw2bJMB9mzNDmHZ3S8xs8",
  "key8": "28jWwz6Kpr7e7PBGAupo6KPCitqEVny2FJWdH4qKYetXmRrhSMFjx1CRbfjeSvS7kszJb4J3ykn2ufqJTDhV5Eco",
  "key9": "5zkDq6MrAb9y6AEdF9yczUnn4mCJFyNnRPuso8FU4rPZJnbr9tZ1nHMGqvXSDdkSG3Q3htrovt1MKaDYcTbDrhB9",
  "key10": "54ZddnWC6dWe1HR1aJSdFEmtVoUvJbg5py415D3EFoeh6BuQccokz7CB1anDrCrUmk5q6GB4ZKCvapph1Fj9PQCv",
  "key11": "5X1N1nVLchZPnCTdZaVunWdsuhLHtQjCVxPUxroaHeRAYqn6uSYBfmR1q4sSnZSXdwUTTdYkDJzWiBbyLo5VR6WH",
  "key12": "5JU565CeBeMDXaaEeNAvQem8qaw1r9NyGbUH6qfMvDaEUfYBHYpigHSNpRM4bLDmikvWMBY2s4EN26Zq4e62orLY",
  "key13": "etViRmGeeFtKYrthrUZR3hqKMPbkv1g9y8ADKpznYpq4WVFhySmMssSsytRYwUcFYDzTK7uLMxMYBducR9e2oCe",
  "key14": "ViTkS2tyFmRH8CALn4VYhWVXuupW4FWcqPn2GyLgDuPyQYxVh8XJu234sQy4SWUXMwqvMUUWdyyAGDrPGMBQrTg",
  "key15": "j2mhdP1PC66scsuGDjAphRNX7raKHG2BL1ZXoRGdHKXfZmg39qgNXEvUP4wNZt4k8w1bVgQ46Sx7aXQEJiD17Lu",
  "key16": "5EnoEaW3N65YmdL5MjXxqVZ9dCozBZT5zoDYkXQDTAad3fgWpiGtPiUea79WBKorLaPRD8i64rqwggnBvRPvDhmZ",
  "key17": "N9AQ7Q2TCEX82d7gJVSEWqPTBHB6gSTEHCBsAahqx9CepYaDapStbZ99fU2YDA2zGyrX9gFZ2xwEpuwyxHBDa4G",
  "key18": "4zG3YP2zddpVRrLMorunJL9Fyw9UZQTUkp16b3erppoFWd5BxjWW4rnuDxcz7AQv2z2FZcjpyH1782cgUZzoKEu3",
  "key19": "3ZkrzeEP4v2NT6ueE9ivcRgVd5vnFBrxSnnW7TruUrCiU8GFFacJVUshADpm7EWRS2zPQY4Zsharu7fw5NHXAfvw",
  "key20": "3Pp5fNCQqK3iVnNbLTyH36bhSrmXB2LXGGhiYRZc9AguSXWDh9bQwF1AgYYHPhbW48Sn9Bron2zwsfvKqJHaifnw",
  "key21": "2nwZHPpeGnPdeZ33zeACpBKQEG38x7kbX8Uw79r4pcU5jkBDrMFdvyQ81WGWw3hqqMkV7ebHmwBLEZWdhFaPcctP",
  "key22": "brfCD6jNmjuQQMs6fXq7qf3snb34V8DGut68JYcNL59aTYhDthH3QF5H8oVehs8Bs8vQEEyAk5jB7N4cGJ27x61",
  "key23": "MGaiiuMy7N8zj6m2Nb7tonwCooFoXNQKuQNA1heGBxy3bxYzPC9D1RDCuJWBKzFaEPZkjMDrtZGgJJV59PAkCgi",
  "key24": "56fHfW7yyWNbVCbRJDfw3haqKGmcEgHgFXyyE6TynanTo47L1Kp9sPsM9FX8xJgMS1kKqc4H65K2GbAYFmkGdwko",
  "key25": "kjRF4b8w8hF23SK4HoFjhCRFxE5r1GXhk3jL6tppnj9j9XLM9N4C4rnxFvZbxreiyp4HeNwzMjxBhSqMith4oBz",
  "key26": "5qsKQTGfQaQxX9MBvCNuMyaSvgpocMvmrLx63havjrqbDiWpYcq3fxfx2ryAKRvPto6TbzMBi27byGn34mGjTCr6",
  "key27": "4sCoBhgbXMXQDsz9xqbpWo1eYpJcYnJxUmxH54w1bSdVWJGSTyG8LBvNvxH4eArdf6LKRmpwWLTPgkPKB27TCHLn",
  "key28": "2oQcSHWDfhG2svanDtNueJjXRJjoQ47suekiaASPronR49KWUq58J8RhenfEURfULp1AurqEsGa1MSmGUC2YRAzQ",
  "key29": "5xzvkrPqmGKhQuEzvpzoVGZBNnx5Yz8MFyHL5FUgUMQSSVjQ7tCuHmp4RZBYUWaJ8TLrqbpojEWXrwAHkuxrWjUm",
  "key30": "KhjwWSy3k3rmkRABd3cg93nAT9GdhRKLv4d3w9zjjWgoXTDtCtoE84bQQmPvonLSPh8WEJW6BKyJfs75xg3BwkD",
  "key31": "3V8eA4P2gRzJVTQuL1vYJuE5Zbp7UMA2tppDzmusJbiPUypQxn7jdEGu5eP3bPNiaKhSN2hd2ghxxZQZhfezaRrT",
  "key32": "4145Pz4n4TbSMHv7TvrFZPVrbDW9TSdZNzJhBNiha1vVZE9ScCRwE9WpYJ9ZRWA67SKb1pkQsa4hCioJrfZaeeBa",
  "key33": "HfKzoJCwPpyCKXff87xA3YJw7AATH6ND1aTCChMXssffm4aSo25xqNDYoLCeisem9qAdJUt2gqKyMmkFUkNtcXu",
  "key34": "e7K1epsFCeiWKt5c7bYmJkwXWuySxJtn79JGctpzbbn52UiSvSPGEHn82G6ii8BA3FtZnVuimrjo4NE63U7gAZ5",
  "key35": "5t8N9ozW3g1WSjfCwraAE6eWm3mNk6MqoNxvUpXuRQMRA9PdDdC6xnK3qhsAKuR8bSB83qkatW3wYmBGRtpRq1s4",
  "key36": "G43vrHaxzvu45g4M94bAD4B2kJyZQtNxCEpcWdPp2yHxYrgcYoCRNAp4CZdN7nuUrSdoaBi31K3BZkNA2MHRkgK",
  "key37": "5Z6Uv2vmAT5ofq4zjGHje29mKujUzyd9k4oELeso2AnmU1A88e5HuoA2c6e9WxVSUZjhDwuYoAsNEcgN9a4LLEv1",
  "key38": "2t6XzoFAjVVfALJ6vvhVYPw3984K75Ans1zPMHinBFREZ1owMLNvh9EmEtqNEnPnT5mEaQynCd7FXaZePaaRd9Zh",
  "key39": "3TVMK9JFpMzdy6XjJmCZPCv4GyDUZTf9uGwyYou7hTjXzfqSpPBjsXtFVmQePUn6y3KXMG7n8osqJYgEefT7BAmq",
  "key40": "43uDxc1nT5ZssivXySn7rEpaKhkzGUbynfhdGyvWXmFP8EnMYyJpKBm56QGRXY9diVCG15WeUhJKWzLUcBUq7JAn",
  "key41": "23X4djrcUu8gmomp2JripANgPEwRb2awM6gwdbiL4SEUj6FiKa8nVmmsnvhn6YbrpearsXh2GXXRwg8qvQS4MbgL",
  "key42": "WfCmRFTcfRFuUoXAVVRM1aVKiTgCWSJtf1ebub81nsjZsXuivRq9FQpw2a6gW3LXm4VyL8BpSAWvVRitDqwMwhJ",
  "key43": "5Zp3jguikKFfnum3cWq987eXJaAVem8tWbvKMYih3SzJGDZJ5tupjV268gXAbdeBpb5Q1GNG9gPMf8LUc7i3QTLc",
  "key44": "5SAsE1M9L2cETC27PxftsvFRxAFrEomhrP5EmUY3qYfwjaxVwTbCQgKVqbrM2LXPyw5UzANZc1CZHFVFN1pgkmb",
  "key45": "67hPMxDLVkg8Vajk44sUYSqqS3tjEXtDeR4jh7JvJ63baaepWe8bwgiHDgLULfc4SV6EBaaiFEw8FDDfbqHqyR4u",
  "key46": "4oTS4kaUQST1Lr5tbharp6b7HVLSbycDp1us1qGcLJdJ5Br6VbgfyTznP9WofK2NzQVoscYT4L37fGwvA8omocic",
  "key47": "46JxKZfEmZN2WbpyFykdJT1AL6xi7jF872EMZNE3XucJBf8iWyyd5PB4mv8XEgaeJSzDH8tVzsmSW9ChpcK4Yrf1",
  "key48": "3y8ZdAEMuXYUk8dnk8BY7Kr2vviQMeqyip9GUzfu7SjpFsafKVKZ46TSGFMocyvEU6n4afue9BYL3Sph4JxSMDQi"
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
