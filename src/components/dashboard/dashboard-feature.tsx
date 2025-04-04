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
    "4v43KXdNwYrFJR3wYfy4w6k7AYX64nvQWaaH7AkJYrr8bFQyJVnb8NNC5FJgPg2Pys9dRzWT2ofAzrMgTaSs5WsH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fzw5NpSsqP8ywMW8QgYXmc6czDTfb9rsEQA6QE4gUuFYZaGQxexSWSiuYDc1nJqYgSpBnj2C9aKeV8YBV2Ffbek",
  "key1": "63Q3bQ3J7NqHzep4BPAtuj7tJF4yvWUd1z86E1f8oGncLySzv488dZyA9dGNYidFnp1tgY6pTaqu15krjsrFMmmg",
  "key2": "5csMRD6nrjQnkbqAbGQbDpGFeEoXxpXcCCuEcFD5yHwFFwfqVRCHF4Wv3HmpQAGHSdS8KZGoufQ84SbUfbxdT2DY",
  "key3": "5sgEBVvbQn5J8DrNms93FLdkRBvNZVJwziDorvTxWdbxouVSUBt2sBtrYTuCLGQGHnpN87yW1jEWDgLzbjNP8u4h",
  "key4": "3sFJuB7JLQFTc4nVrTBR9NQvnbHuxFbXexD1J4f2nxB9sLtv9vL8udGk5Ph2B1fdhc3aAu8dNuDiPXAZAiFMsKCU",
  "key5": "4ghtH1SqyDh3yURCP1np1z7yjSf2WG9sRRi87q87Uf5VfpmrecR3WbqU9NvSyKA6i9H2vR32uJG5RECvEoZhfsMP",
  "key6": "4F7vQdTMxGpk49hHEcWJrG86rNCc24zSFecBx4gPAorb37PoqZfb4F6A7kyQXL4zuBmwTfGwHwxKL1vWyRHGep1G",
  "key7": "41XXUqmQ5FNMS3hsVyvSfeXVEieAurcbG4MtyBoiFqFSLEcVYWbAGdvXFfBCjVKruJETGvjBfsXkEFv99fEHfHXj",
  "key8": "2afMRDYrpvcquChLqbLx7k1FupiDXxPMbsLLY2ikkSrP7ue9y23j2rqPySDJuoWdgW9sKtM5zbjBQiC2gMcydpmn",
  "key9": "3jnukrpJhVSDpC8MvDx2aLm1sQMKPGuCcs4ihDnW7NevFk83U6T2yaWBgxXCzqEFdZnmDEyBfa4muCgzh8DeGdLF",
  "key10": "4jMQrwkHUAo3dYhKFFuna61Qo5zMCa2SuDG9amMFvV1jfUHAXt42qe7z36h6PgdfMEkP4JCCN8WFnJvCL87gcdEm",
  "key11": "2ShKj2stQ2jCPVx3kwWWLuQoMr7Gc5uRKBFbTRhWMbhxvMtTsQikosU1PBGsutd8h1auMQD9qQNWX3xUTY53NBKb",
  "key12": "2FjoqMvxMdHWJJ8pzrg3fiMsWjLHwKQB6dqqHtAGtVEDSBif5dNZaur6pobc78ZHmXCBR9PfNJNmhHZGLaFPK7kL",
  "key13": "5vsp3mUsPmsaoemzutQQbz4QbuRDSJJz8UUgATnc2LNfHFZcR6SeB2hjy4Tr41zrkJRwct6rtzj9qDYsz1xUE6GE",
  "key14": "5hW19zmM1Ts4iPUZD4dyHgvgYj5cbTbkSS5XysQr5oYFYQ6fhWYYxpYNLkNeZsaadQUdfR5s4KDwt63JLwSj7EH9",
  "key15": "3Ux72VXi2pDzahWCFSjztMy7RfGEp2DukyZTGdh3HHqJ2xrR7NUpUXso4LJ8U7BYkqxD9bqMqzAEoCPEHxxBs5wE",
  "key16": "5ACd7TmR45kGVtLabciL4AZEBPzj4jAoiVZvEp8264Drg1hzc99nLnAX42GLKP6QPo1yENwQVcvctLcTDjChWHrF",
  "key17": "WADmCQQQsBDnK2F24FqfTyb55rCz7vat9NeDywipnEfmqL5a3k8QmbjaXsQV8VQvE2bvFMBoJbJnkqHZDir5fLo",
  "key18": "62Rz6uC7VpDXJ2KMeiM5mdRyvGBC9WD9FSetJBAxzEm72RzHM65pjsvhzVRnUET8B96Sjvs8Hq6cJHgxU1spuZoH",
  "key19": "2UJoG1AmYVfiAAQ6nwAH7Q6mNbvGH6cvrV3yov9mKMovBPfk4vHrgHitZvGgpLPigzrJwy87uvXrtxHNDWPeqMZv",
  "key20": "4rNEPphYb7WsmJCjCHX6pMip3SLRyuMSa9fEobsqLbk3Y2t1yYD7fqAj2zU4cdwoGaN7JUM6RATxvfCfFs5Lfmjp",
  "key21": "3rSZLTR4GUqb9hHqrMGXc1mkSqEM3yJk8FQNFwatpXk76u4N8dJbistBnXhgG3M3xEidxmqb97Hew4sBciFHft3b",
  "key22": "4uvZNEJhyQugXLvjAZWHi1RFnDzd64CgRyPMjFYDEqUxAmpFFa9WzBe4tb4PFVukWqTW3FGcsiKBvtPkP1boLRVQ",
  "key23": "7ZfffvQ2ebbNDNBWiCxxnr7QXW7ELFkRyrofJDBT5rt4cuGzt3rdUuWyEtBg8rmFvZArSWTBBgp8pLJ2V6kimLF",
  "key24": "2ko1ZFuAXxpPuVKsxGgDtU5Nc2P7bK8FHHw3HMY2YyAZ9ttDmV2hqwcZvF9C8gve1447pb79E19KZf16GvCuTLZG",
  "key25": "3b3SmpUFrC9cakyXDrM6hnemPGiDMF3kNw9DTgW1BrNGogZ1TdQkEVaBdXGySnpHncZYcabL8NWy9kxRAHQ37kDc",
  "key26": "jfoEePRqfSNAs5oo4zZqgevokRjYAmqKKcPejt5SvBez5bV1qQyrFjougYJbJy8dZnnRsjGYPPceWL3Te9J5WAg",
  "key27": "kxEfJhNkQ38pde4fSHc24rjge3JXMC3HauM96N4s4s1BjMeiiRcnkuQkHG69SDgA6Z8m6erXWg5xLA7UMD8JdzF",
  "key28": "2HW6zvKoYSKJPWgRjJB4r95W8KExZiuFPYBFojQFZvzcBZJDgcph9UAWTDSdeGpcxo6zsUGJrnEwywc1wjC78fxe",
  "key29": "4zV4cTQ3tE1sbHVurjGSo1Vua4FUEarNaqEG6axViN2qXVUvSxYsXa2YjMgnHYnQpzmjBAgZZkrxyUfZctoSBcJU",
  "key30": "4jhF4MSqhEgvk9qdDhiMCU6c5Ap49nwxJ9xXedY2gWZjUrPV8YAowunTxJu4ggncjiDhqGzJ7CHM7WReybeQAKGP",
  "key31": "3J9M2d8AanN1fTqjRhkrBva7VYt9S4mXLCgEM8mkyyUdL9aei1eFKigm5VRgJiaRsckjFrqWZkBziTcm7nbwWL13",
  "key32": "sUNH4TouWR3AgRWN7NZNVB1jZvWkqT55jc5ifSR3rkiCMcks5Eby912YjPgNVhuGAt22gT4UZhWFJXVc8UUcZWq",
  "key33": "5BTqRbeodt8xFBkfbihF89AVysMHNMuTiaDvDMygx9HPoezMcHc5fppH8H9vRxo3F51o8MjRP7yVRsgpe2iGHUpW",
  "key34": "jQCZNmJif2Nbf435xEkQc1G9CLuNEPhVeoA2inHZZ7n4iEaAChZTBEhoVCpaK2kGgRL3RnrYBvtK1T4yWnQR367",
  "key35": "2vukaTdMbTR5CMdFbmFQyywKrkv4KFniH1dZypKgQqvMHXmHDwwyfd8kWqRbFBirGcQMhc87q8zbkup5agBJ7YSY",
  "key36": "5nP4XnSysrfrSmmxuvEmFiQBmDEk1m7issCCHkVnJyfbzXkaVJA542TGWvDuRfP8A3JGoG2xQKbTHUwoT1emZEE1",
  "key37": "29coZCGQVVpeRASxgFdsQFDRQteYRubyrWkeLPAU31DDzmLCs9rbxSTavLbrWxJfSpJAAHjkzF6vk4aKwmCB395q",
  "key38": "5ucQFRHCggSB3yYBaByqSjg4AhzfPQurKnMFuokrsxUfBAJa3xqyYmfyx6K6G1VSrrgkTw1pwVyPUTFbBu6qFiiF",
  "key39": "KSqSBDekZF957ALjURJq5sYwVxU1XSaE78DrCK3tjnLdbVsjqT3sDudB89pwcPmeTqanbEeDyhDQU7tCrc98NP8",
  "key40": "3e8XCF2M2D7wH1gookZPjZwRaCoVgCkcSHPM3XzsNXDXG2TXBUqnn8K2tKzVfWq5iTfuEsknJWY8nwhH1uoa1vrw",
  "key41": "4MpLG5gRhsmwvL7Af59okLNrWPA5426Vxk5JbiX2fLB681odNQBnEhZwBDdYJ2b4DpfuT7LXt1pPhypM3KyMCkAw",
  "key42": "5PsoJnirLTnhbPcnXrdySf7k8KJqMpY3bYprymkHXGjeFpwevPV7XX4rNRSf5Hkmhmdy8VPTxF3KHFAHvWA5Huwh",
  "key43": "4GDtizAioPrGPeM6WvnyQ9Ez3jK6rpvERfrsQgmprcS9zjVxwon5eHcdumkaNfmkMWZezJKpcX44cXN6RFVud9U2",
  "key44": "3uvejMjapiccaTXHiZ2dq6fg9AjKULfWwDF3c9nn5NrtUUmhoTVqXokgmNQ83UceDoTtQYhk2RCxj7AZT7HTaRnQ",
  "key45": "3dgZn1C22r2vRYWb312UghrZiahKbZ9Ewy6HTerjdzSrA5KwbG11Kvk2ncnzFHQ6qhYFjFTMzb5WRANew44Ln9p7",
  "key46": "5YLs1E5VjMrLx2DZLDcUa5MopAm8saJq3FXx1Aa3SbvouUjFT7BBiMZHinJqdQhamnrLNt7AobErKr2pcYokY9zX",
  "key47": "iDzLbEEfSV5wF2a232uAMwN8BX2Lu8bDSQSQ8daSTs8kAYygBqEpHwFv49Moctzc1Vw6kF81cfeFyBc7P2kdZpL"
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
