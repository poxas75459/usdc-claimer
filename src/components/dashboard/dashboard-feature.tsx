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
    "4dAzx1ZzUkDPGJo8KZ2Rh9o3V3HVCGqc2S8XtZjCbVkbEATmvySXGBsYyaPAi3Vdex8xsekPi2J4GPL5rBDg59Ai"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WEV3wWDTsr9YWFdeQAxdHvQaXeTe1Gw7ydANjfYtJiNVXv8WZTSctCuVxgieFGnUdrH3fgj3cyfAWTyeB1LTEwG",
  "key1": "uy5jZqsdPzWKNNTBhoD1wMzWVazGWNP7kDXV4TaYYFxPoymuvVnK18wyEhAaiUgkp6VfmrXnz66zNJcxapc3zuE",
  "key2": "4WsW1Aoo1wL36TYhobah8vQkNnYhdvTnyh6EiTkFiLwMQQi34jMydFL9aoo8JG1T1Gsqbn4HbLdpbQqcjBsBeTCT",
  "key3": "448ZG9zpiN1zdJbcWggAWLFCcDLVxM6hGL3esZV9mBKUgdLvNbyjLc9oJeckRVsdaBZKzUexL51DzePnzJJeK3om",
  "key4": "62DhVmXib6r2TvTsGXtUvnFwT4mncj6zwoehXz66n1Pvo3dwEM9tasmQ67Ck1t4tV4dmmME37MZRGpQ24Ry1Q6Z9",
  "key5": "5GhPB97gZRnn9UtJcVJnxA8XEjo2ozByRs6AskzEKvpuSFtPsoT5CaFncc4uEpNU1zR7na6GBbRjhyA7Sjd5pNZw",
  "key6": "YDMXsLTTkCEUMcWPRHenmojRBk9vkHfgbPXbXFwqVY2Zou1pZCGQ7YNfDkiuXcGM4rtnEkqTp49t4Xti4A1GM1Q",
  "key7": "4e7enoAGeqJWKkfc2VjErUe4uxhprQLVkDoyq8425UGr1Re1rc4kSxbye2frRBkpqnehsNFC59ioGSdWaqJbUdXD",
  "key8": "2a7uEV1Xq4xRFxbDMuRtRNPVfhRG6eJCtVyv4UGzoc22BwhJxceVTmjUA2naKcbU4Cv5qNfJMyQcnp1AEqKzed5R",
  "key9": "42847x751yHmwD9TJK7k5uYAuRA67JJ4LnvEUo4KLYkj24TNSbAA1wk6yWRAkcZ73mLEXKRp4MhVtSpecWEKd4KP",
  "key10": "2ApTjrwqakjNoMToSRDSBU6MP1KYbWBMpeC5cwWbYY8XR87uFvmiXpLh13cKqzjTFWE3nhDRjHAkf9MQRhFYHe8u",
  "key11": "3gQsvJU5E2KVhyg2jSLGmbSubUKXPmHTTFAdbsepWdTGPwh8t3hxj9Kjv4R9ZAZgtE9yoFdxaFcwxrzKejtNqARj",
  "key12": "5P3aC5uXEbeWTjPK6bDA6vJNLvRq7xb3Tf5CmqFFNMzdtgPdBeNNDT3XG6JKpiVUHJsXS4HxWErHpoXjoMDTB1ya",
  "key13": "36GEmtruLRPWYpBJoMfDemryisDvYA5dAhmPcYSRCS7Jd29Gm5i693F4CUP8zuvqxUU5Vhu16YnpcctA18Bc7exF",
  "key14": "5bkvuKY81RV6335xJDTAjvNivaCD6Mn1p6iHcFtunKnkoDm5MM19b7PPGS9gXDkknfekKhuV7A6revoB6ZxqvBA7",
  "key15": "29EqnTv8hthenChzxkh2fQDW4AMYZHqrC4G8a5WPaTs1fwFq7emDVgafy5d8gS5yBrtfZPbRBVc4QAWRzKtnkowm",
  "key16": "BgbZPziFqhtynnpnNNnpbiokQZMdhqSvXL6kgjktM6DocgcKXpy69tkAvje31yrcUnswxUEvoSDSNdgv7tmZjPm",
  "key17": "cxAJTrAER5obMTHvmMZ3KE2dApCNzW1iiTvXNEMoFcqCJRNUFb4NKYGPtHArznRT1dQLyv2hwcGAvqaohyg5ZP7",
  "key18": "5sUrvuUD32bHyoU4kSHLVkoGjYG84kycZVXupvh55HGjrXf1kDywNAx8CYGbtPqvDXGZp6q5iv18fs4bbukQqKMm",
  "key19": "4QEeV72paQD1znuAdwukAb67N2SGC9vmtKTaqrBnF4Y7Sv2bP2k6bPgjkiMwsZifs4mEzsiiyd4oxq5WfSDvpBX8",
  "key20": "3WaK9XySEXFnCKBxBekqe94VZUY4fy7o84FwtTMVFVi92Eqy2kh8R4R1YbwthrTWYhfxCxjaDgNWUGn7w9hwstNY",
  "key21": "za58oYHheXS3u2GaqQTrzz2aUoCJ43jk7HL9zWhCaDKDNijDjaftmMyu4yiaybsABDEYXFXYnJt2zCyXU1dT1t9",
  "key22": "3GnUwYPkfEkpc8SvLw5oG73gMMDUBbKiL1eJrixwN6xGzU17K2zanANaD9iD2NBRJnjvyjR2oA4mxH5m5Cj3uRxQ",
  "key23": "4keN1CU7twzjeqAkUwS14KVo3Jh28Vcuxe1nFYpTHipwMoKdT6WesfCNxKgbpxNpUSsgVnSxpjWnBcrpvoo2nn9s",
  "key24": "39EpGrhwSPZwFYEKDJR15qwtNNAwxSCcC41nK2QJFkbxqF4rbCYHFJXEeepze7NhPuSQsRv1YucjQaLxbkrZgmUL",
  "key25": "4kcKB41r9fkvmJjiU9ge1KjDWAZvLXUPNLUJqbLQeJdQXJGWuNsZCApiSpWJWdYAicAYQzmu9eovyGqDRxgKRHTR",
  "key26": "5HXoGPSWwH5TB4hPsP1ro4oauuSsUv6fUxnw8pFgnratW9hBhb7Z2VZuPZSS9aF4WGwUQruQ61RQQ4RgK2pziVF6",
  "key27": "4XbYLHUwGwuMoeg1gWaz28FtvSVQKY7Wto6kLu75eihpqJwW2ddwtPHHgdmAxgjqdVN2xkQLempefREyArTEp8pE",
  "key28": "4LM4r7gQQvBqr9sE3UdP9tnzHCL86LEQxTPTqBihbvxqvoMjeGhuFiQSrAqvceW8cdRcpw5ACVbYRgKFyBy279qo",
  "key29": "5ZRxtDx5iZkoDkf4EozL68SkKPgNiwUgceDtYtbGU6Mq95Qaz9UhjyKpczkAvP64ZRN3sh6Ag7P3PJpHibvtQ98f",
  "key30": "UAAwkgwKNadJfe2hXZoHVdL87Qwc2UPW3tKxibFcM5zb3gmPtn67LLy6bNEtHzzDL3V6gVbWiCCevLdxKP3RQSo",
  "key31": "5Ey6ny1WQe3bzbsU1mdBJgxPxvYSGV1jojUoZLLdSY5Xps5uxvaAMokKdqCWjYSpifSMXYGj4brSYcDBFxNXR3Uu",
  "key32": "4jQoYRzt8LrSsosftrV8bvQnSUL7rZdYYTaAe7zDFPhootfjvWn1G8gQqFVH52A6EjKNzpaBr5cBjY6HUCwEogCe",
  "key33": "5jxJtuaYzFuzLKsmzamaHoBNioQdajVFa4MmAY3Hh3okShzWdXmp8uhKZDx4GCisBfAbsJUiNBRPAN66uXYDnci6",
  "key34": "46TvkDusjrQVZTt8QTmwSuHpQFVUpEmRRPnecusEXtUcMTUgWum7kRHxnDQQgV4RV9GBdHsjeM1nwSend2ViQUdo",
  "key35": "45p7XrD9G6B8u9Ac7drt8S77gWeSH1zEXjrKfznGqwxa7Yrx6YBbvYNUewso2L72UWYskWN2uWKELrnZNBimmiTY",
  "key36": "4thYWeQKBTJFYzEznXCASbGE93LivUbRJ3DHmgA8zK4doP5HsGHduvXjFqXqTGx37rcqD2QrSeXfRrdQM3PaCBMQ",
  "key37": "FWD8AmKrXUG3fN1atEonYvw7ryFxLWPvmJ988FCeNRhgMWS6bQCyMZmTDdkAjngBBCPQgvnL15iSosuRfkixVmV",
  "key38": "26EwqMzTUV98k9wU5bR7n3HxkXn9z55s8kdrC5rDTcAQoFXba8GzuuTUUGtx3AT3THZKyqJVhixfEA1SaqL4HA2b",
  "key39": "5hozD5XV5jzjkHJdZHAp5UFzXb9bbxthqc1iwJRqjB3BbKZHoPirXuaua2Hoex65CjNA86hd6yXQZvpLAZ5y8gDX",
  "key40": "3PFAG7m4fRGvXvdndBxu3hCWS6GqrVbRYcDCU4cK2YK6PRHMv8bEce3aex84pVuoSH2mhW9kfsoT7gtuLSuH1ywr",
  "key41": "5VR4NQsUY7nSxAajjnpbegci5wUbVHE5eRvWCFbBUaD4ULeQ8oArfhyRyFcGkc48w6pXaXFELYto7U8xAA9kyPMe",
  "key42": "2khrwCV2RDxXJy3PAMhaA5Bs1idgYpuur8zg1qVNnrjeMxesgHjbd9BxgY2yEjofyPEtACstz6JbgmoVv9dkwMq7",
  "key43": "5cUzESBZLcwCqATGdpweVKw2vCnfft8THKfMK1e1mYK7XW6VwKAF61nHsG7ZYSYVvU4pHPJKHKy7vRWGpxFzAKR7",
  "key44": "245eNsboo4qP2StEUcmawPEsXUtuUXLumG6QgfPCLuR9WrtqvyhafE9t79fjEi5kW6rZaxAd2eKG1N35LxApVCMj"
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
