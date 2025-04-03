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
    "387tqJ4kox7UCAN6QrLR1aWHGUcehXiQLGUyA7FoaKtPrykbqn9LU77qNznpdnwCNzdGTMeRbhHivczKDZ93M8kW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nRVVGtYFtNB2GN2QJQ56XPFcWZZjS9curmdNQJ1yZQf9oCLAtrxGTzTm1NUD5xwbHLZWmAQBbESWYBNkNcqHE7K",
  "key1": "2WTx633xfHVjkoMjpELSpLsMQpShDroJvVDytvy8sPtXJZpvx1ruVQgVNYPK7LkG4PrHS9S1pBqKGKcprW4UkXbn",
  "key2": "5L3Uf8Y52quXnrAqSPMmbw1bvhutNQAqLGeH1YT1LvpBzoxXYFoV1Wa4WNaUbDxYNRUMNGZxKdW3m1rf4Y9RH3DS",
  "key3": "5AVW7xVFu4qVJE6DEAMcamLbusrQnSmF1FrSpMPwpCac3NiRU228TyzCyaD62TNHRRnX6UEdyDY52rcsedNWVq2U",
  "key4": "26oJSsGtZr2DpDSPvgT2h5QFVcAtepwFRmVSFhsLfNqMDEgTvFx6FnLy2xop3o8ouLr37k8tf1Bbp5Dm6kjHctt8",
  "key5": "5QBccyjoMKegA7PEKZ3Ng16AAZP6wwDcDG4HrTEACS6pJMMfrVppWWHjh6WxqdDhDx4EkxpngtYm8GGxAz87EauX",
  "key6": "oYUr8j9JUG3MMWijnnv7rA35z9F2ggF9e6BDpxarjd7cTyys3cJeWziRJnw96heY5RHWqGBvbFXTsTPsuiKEyKH",
  "key7": "5AgW6ocH8P3DYDu6vi7dvyQmiTiiE6jud3Ds8RrnYfC15YLmWPaJ4f66rf5Db9QgtQcPWhnMFFDnXjABAkYZGhdv",
  "key8": "3uZTWFHxhut4CdTJDbZGgNivu6ZdmxDuerXFDdamKC8eBDjGknUyqdE3PhGxAt1xGEEjR7kmP6TSvCqp89n29AXu",
  "key9": "4UWiW2M4wqW7XgR2e32cENiWQgXmK9fV9KvLUKxEQ5VRFKidskgQfp71SaqzXGTToAWKAvHLgu7jFfepjcAwzp7Y",
  "key10": "URaYctbF2evaLivrXP9pQ7M29VhK8JaLBtAnCofABZNuSyGqsXvMLGjD4JGiLaAn2CgPodraf6rjS1UZva7L9G4",
  "key11": "4hChSG3fLNZJp2gREMkLBcjW3Z4GWv34ojvedTGybRGmHrdnXBm3j1pstHQKtLQ2bC8dpQTiPs6nFjxRZwzEprbo",
  "key12": "5byS7Lgns9Xb3kG6Dp5jJiQ5MoYVzYwEkkskgCQnpcZEvTBvmL7b6raVaERM1VgK5TR4b9df8D1747xKktForrt",
  "key13": "2wzNYW9VwqpqEfcPYEJTVyY5rMx9Q2gvPS3v6UtZEB2HiT1PdUXKZAW8LFPgXHfYQP333m4PdiS1Mi3hezsThTgD",
  "key14": "2Vn2CwoP2NRB3mPT6K3m7yBXM2omczTVqhajvsQfWk798cMULBBUbLVfY9cyr9Nexeqz16YEM1qqSgDc76DCDCx9",
  "key15": "3qroJSYzzWEh5rdekE7XBLEgSMTHNspxigBcUZPm1hRD1DkU2Rox7LvrYJPyj4EB7sMpEScq4YSXxvFAkFohrrM4",
  "key16": "vMrSZbsJ2EXpx4v8fwWtyKgB81EoiuM8uQJE9zbWaSbAE8FaKSHrANVcMDHGCNfNamCs4tQb9kxtFJnpJ4uH3UP",
  "key17": "5y9HjV75qbSy7poVLkcegwPs1JjgN161S4QFUG2T76sDcmjpoLp87g8zB8zXLTH3rVczF5TyY1CqMs6qkHkkA4hY",
  "key18": "3P6v26Wg6isJEB7MHxTNBqfqSEU4Wa88cuxiXp6ERRSHosnpLmDEqbV6gyhuDLiP4LPa3dkiJkhyh873bRsjRgkw",
  "key19": "2FxujXwopT4RF2ha7eQfsm7R55j4FV6Pqioeb5V6Sg8NWwqzbucZgqx8oLaAQQEpHSdeKTXmn9tqV8b6WpRSXznx",
  "key20": "jpbZ2pqreQhy4LRozpFHPfvbfHp4SE2iZLXqJthYuA4d5Ky7sokPWvKy5nXAN1EScdaQ3FCTkT9hTUHLt5iVxoM",
  "key21": "35TPe535WeaRFBSsyoBSZTk2DmALUS1VAvQ9JLu1R6JrrGdKUXNXGDMapTeGAT3NmVMpD1PzmreqQUDKB26cRZg7",
  "key22": "66R5hxYahTFEtCjdh6UoFeJqGU1DBdhHQpDvDfdQuEyUJf7fTYfK3pXNRzJaoVQFxbFWhzu5DEzwJjtRaztXFQCT",
  "key23": "29m5i2c6ZxECXQqmDWG976xR2hBcMnoCDQsasz71qV1phyxDWfANPsezZxx9QwDW5zgs664S2dBZMDztGPHgngoG",
  "key24": "KkGcWS9NN7Bpk2rCwufQ7WtfUzToJHQCdtggpSYCCZTFBZkExNvwAbmFwzHtUUxFiR5pX1DRxs9ER3Th3LtoQ4c",
  "key25": "2X86JN9cNf2s4nXksGkJdkUU4R9M2dAo83HgcWYh13Ldou93DuwpRLGiWx6qjKmrCdrTwsCnd2DBPX2tRc4SwXZ4",
  "key26": "3MpPq8Fuqv7LxCfuiSDYaqV5G7Z5baM4XHezWYdMfguX2ML7gVoaphu2waSQmNsLbxd4VVUrqByMGtXwM3uDupj8",
  "key27": "471UVV9UDUQxGjEhPp65sxZorLSGnGczunPqCA6Et7XH1vDv79SJaeHLdDdnXAUnGCiBiQKhnJPXNfP1mCgQZXo3",
  "key28": "c62qdPbZM1Q9BtDtJocDaCqwXQsQtah2Uq3t695g314vyo1Pfe7NHVPdKQ3pRGPjAH5sjoxFyaizrz3UUNMLMnY",
  "key29": "3TLiJzdYGy61Xp3a1yp7D1FhLGmPcgvSYmh6Cnp4FwsqtZWoDPW1dVDiNbEDy78SLm9fRHt2WakRh43SoYt25HQb",
  "key30": "4BX8gWFfBZNybupdzM1qK9W1sHnZZLtQL3TW63gKSZiLVWtCSjcWHufPJLXbSdxDUCcccynAib6qH9WMiTdGXQPW",
  "key31": "4KTfGe52qVj2p3x6GcwNpgAzVnEGN5KihHTqQNno7rJsmNWS4y8RZF2zpru3PXjPC7NYFdjbMVysnRHBjP1uGzKT",
  "key32": "2HCHuFGt2hpRT3L98KCtayzmkfZMtBjRav9tgaYspnB932wBsoc9HEWhDRTHqRjBghSyAmet7uefCF8PLYD1hjCo",
  "key33": "5aG4RfJvsRcjbz7FG78Hn3uxsySuTprwWusjQYR6dgF4fX9rJViXGEp1rcHVUdxapXQn5jHZQwrMv8B6yNQuUQ7u",
  "key34": "3to12iRPevtizUkS1hPRk1JTruhLFHPq64ivcNRnE1epDfE1nNyrV6Xjxe8o1Nf1DrmFPW1MfyYG3eXXpGev5u1h",
  "key35": "2KZHDsVtZ2DAY7GMqH5B1kuFX56meAMHJQ5NFcyAo6XAHTD47NUNsGd26QMdNx3U1hbrPoQuDN5EtfKmjZbS8Q6j",
  "key36": "nMShKazMdPwy16Dxzytr6CXNVDMRqqyKYB4x8ssSceCNyTuQQN2x11RXgm4rpCXhuiNKt84j7mcFDk8hUjKcZCC",
  "key37": "41NiAc6P9fX2q5KjoDix3Zv4X5SfRdzi6dr4HJihr3NBuJBbrZt42VSMnd6McsrXc7jmqT8bDMxVoMyPvoN44Rjx",
  "key38": "4VFg91jdX2zrNhsH7Yvy7MyMipT1kodZz9xT2yjs5ayiA9Jj59b21zrZvrQtGaeSDvtS68B3AciPX7tNY2Zy6V6F",
  "key39": "443XB9PspjBWjgTiNgSC5BjtBcUVwCY4mGiZRareaTnFez9oiC9SEaPAMhtbCpiZheDDr8d2im8hdMqV5nTESv5e",
  "key40": "5ABMAxq7dHZp5RbvT8sCmMjrYVSbF3ez9fot6Zcq274mDtEFiKkthhNnK4K3pHvryusZsf9sSLnP9yUpvgEDJQQB",
  "key41": "2J1hM4BSpnGQnaSaHqdkcoa7YmZYpUz1wnvh8nvySYM24JVKzj8HGn155DvUrtHiRebbj4AttdMkFoEkf1j6oztj",
  "key42": "4xk9KQ3iGDE6Xb7Wk5XsNV8pfycZo8YTfWBFSzF6VeoCAVZZsD3T7v1t4KE9BeatwyoSvRQz72Ffk9R4sfLtd6T9",
  "key43": "2FCvKWq15eTJW2nhBftWn1xULWVS6f5XqiJU7vo9vybqppwqPrYHwgNH3qwyQfPm8Tr45hEkXhaNF8idP6faNVaT",
  "key44": "2SLoreegoRQ4JHhudx4XyVSwnU19eyh1VJWUsvmLQsfzTkgRjEo1xD7YpdxUhSbaVFEyfnrFnkeUtEGy6Gww8zzS",
  "key45": "48o6iJNo37yPLCX824JxKigkvynK9LMt2KMD9ihpfgcfxDwddGCxA4skE7T5HXdrrXAVJNyJNa3MYnonwPU6DoP",
  "key46": "59XtcPq1PSjgicLTqGsK13QbEDGdKkX6RbXeR96nfzdj9FhVrJsSPXQT4PWhBzdHYxptGckXubkAvc4XvvrLKT84",
  "key47": "3dJfyYfSpzNhXEam56dHmt1ukurD6qu6Xwsy3j83GW9n4gzGom9wzA6QxzLCcNy2ngVUCJeWLBohYQyJSwT9AceA"
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
