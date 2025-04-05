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
    "3t9CRXWuHkLZnX2Ysiqe11C8LnEm1FX4VcyjAEaUPFFKx7xpkvUh1bVPdhTNZxfKVnbVBg6dcbnbS7iYJk4VUg6e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KvW1sqx4ASymT8NbX4Wn7CnD3WkBXo3B6tdpj6fjhbtyfQ2ovVce9Z9pf4udGTSMbuNU9BhBV51T656yeHLfFuA",
  "key1": "4ihaubaSNTwyuT4hqsMqaZ23cqjCbpk37TmJLes5P7ckFraxMMnt59NehpcCfLDSXrU9CMaSBdMVsTJLGNg129eB",
  "key2": "2wmQ9o3KgVCLmgVsJREN8DLRpUFsXqLD39cbX2VESh9MV757AZ692C4YdFYNi1ggFJ7T3VfSPXDA5tDNncEap7o9",
  "key3": "2coQh8eEAa3Uyhkbq746gX9CfA9mFAK9MoYEQ9VoGCrtybQBtjjteG2aUGkYANyG79GthnwhvjySrD1Dz71agFhZ",
  "key4": "5n2CdfngMYeYZ1cXXFGC42iHoua4cc6R8hEYYJhMuBiqHqWo2paTksabeHsSudDfywN3jBrkPiqWtxJ9XPHzYaHr",
  "key5": "3kSf1EzZHqHUcxLqmc7K2pLMQNx4nfgQSRGYc68wkXzQEWGkSdRLmhZNzVfQiCDiSABzhxpTLQLFBZ4fSGLQmELW",
  "key6": "4QwgPS6JjySdiExxHbvF8pTY7fGQd4TiLL35N4yd8oMdvLFNFULQGTwN5S7G98kAUUqiCHjVg8vLgpcxdyatDLS",
  "key7": "3ArxZDEL8HnBt68cvGPEBpTMQNkF1D9aSg97PuQM5qL8VnKrDUHCi83PWGYzahUbq2dAaeMuPRpaPt9fyfKnk6XV",
  "key8": "4mFMJvrj1jdrukVmFJuJdzTQmGQb4nDc9zninHu65uswkG1uzWEb8yzK4jfyK1j5H1vXRskyrrdFDMrqmCcF8KFM",
  "key9": "2MqnjS58NB5yCRuqE1x6nqzcbGBEvtk5tkmCpPLmYypoH2nPMFENX14Pjsd76saUJtVcrTDcBRtXfdj3EquC6yeU",
  "key10": "2vheZDP4DXo4t2mzEDSRhM3eFEbNMLa8vFnAsMPqdjNDeQDqbRtihzvCixrWBbCdboHTfYHTKDmQUWUbNi1E9LXQ",
  "key11": "5FCR1ZjfH8fq1eJjsQxNDX9NZAULVoJBUxP1zmHY2BX7yySz6esUGXcZDoEhLPVuYPGBUPU1drvFsTTPVswb6QRc",
  "key12": "4qytwSvMyvh39efCrUMYMkmRds5prD7M4yPrQ4ffiUV3qsoCUppnqTWRb7aDhDfP5yor9hM5iobMbXaYovxusnzw",
  "key13": "2rx4NoCezSDc1chANJVVFAf6Ys9uonWRM8tjJiDmvZnfwrLVzTKzFrYWHsQVqhdJQEbNPz2g7JnJm74gBbYsjscN",
  "key14": "4XFHRdyx1quQwF6dd9sLFb4MqEfaGP7jZvqBwiXp4sv6krD7be23uzDbp6BUiQopuznisvkn7d7cDmAitbwKU5kd",
  "key15": "5j7PK2FQ9fctsyFPwNmCVTX6s8WfLpHCWbF2F7ZZArx52RLxhLsqSuDg4oppaCCzCPeVjVq7Nsw3osjUcNMhV5sT",
  "key16": "65gWPWrcM2GjtL8pvpMWCiRG8kD9ihPXowTWoHjHsznJZKKuVgv6Qu8i2sxS1YYXbeNYqd392XBm5nWTPafBGBZY",
  "key17": "471eVxiexTQrW1PLN2hWQbdUp63kYcwdoXikRUDnayRxcyAYkLuZ22M1ERFXSiP4KouwixsrHqtY8nG6NvnPk8Gd",
  "key18": "5pD88te6y2XKud8xQRBzoE7yfSrxmFuGL7JDU7LYK1iZFSkrXZe85gBsYJa67uL7yDLesdx5dmSSbQxhSGo96EF8",
  "key19": "24SZSoWaT9EvFV5mXhbvHKzFh59UmL8EikLG5LmqhXKpUK3DavPRmdredyMZ9aaeFsZe4FwyKPnRrw2po9XFVDmc",
  "key20": "2D45fxbdNxLy7nMHWy4JmeAw6wND77Buy1fZe6CJExT8mnZ4ELVPkFnAn6GLpbCc8tRqyYZhKysXEgLEufh4q3ak",
  "key21": "vtCQHPxFrdfxHqGCnnQJdA5y8SKAAntqC6RYt9UnUA74QYwZ1FBE62SfHy6oRGWDLRXaJ1EhHEyPqmbrfHy3G1e",
  "key22": "2QSNEpZxR3BLhujM3qh2sygPg37e21h8MN3XfVcSMFTUT1sC2fGXANStmuwEsqhEyHwphNbxfbxJ8CbUUbWSHNJy",
  "key23": "2GVjhZZi1mWD5kSJmgEQCT2s2s2Bmjbg1SMd93NUztqoo7JsUFfXH8Z89kw1whvLyFDme5tbcKMZFBpimyTCMAYd",
  "key24": "3G3NbYXckDtqiXDmhi7uvANQYAi4Tig9HFAPx3Cpaku3qACfPEYg624MQabpmKC1j89CENYjWApsiFbtXobRkcYW",
  "key25": "34HvvGnoFssxFTWDFUiT12uiSFnEAF5HvKKVy3tFpiBtxXAp2gWMBWxbm7mjnEaELwFUgMAGWT4Fa3xtkfLpqwRc",
  "key26": "bVtU4x4jWf9goWa5LF2U5kox4EJAyoiCfzmLJY2dTWmfgPvqddjvzErW5Jk7eZZzyHtbT88hyecTGpJoCBRx6JQ",
  "key27": "qsPxiZH46UfGyVj8SrEXcywxsHvyj5WXQL31vL8CMmxdt7DtSmLP7BZhe6Fb7zzBoRMcxgcvgov24LmeX68tdLG",
  "key28": "3WG1dhuz6KeFhYDHZzNLcrUFLNahk52j35t7ofU8y56UaM6Pz7aP5PMXhqjcEdfV1hAHDzpQPgjCKL9WCgmdULqe",
  "key29": "2pQugdxgxBhnejK9Q5Y1tYGYL2dVfqzQrNGgS2e5rM33XtUeDfJnrUVjeAQvRhcktuE1EmAsoaLVeNBfg58vQtrH",
  "key30": "59e4d1W3nZR8dGRkbUBrBKfu79j9efcknYK4waRGxLKAQsSFGPe9xEWL2JvRc23Q8QWbaeNFbjCfXA1J2HfMqxqv",
  "key31": "5q9GzNBrgZXuYpNnwxehPDykFaDj2A3HtrBeEXMXwxRkiiXxk94Rea5rLCRF2RSjCwtsBdouVmBcLMW6WW88yCRL",
  "key32": "5YueFSHtujNyepNGtxNFaGLEWiUerU9PV4LGREnx6Sy4U4rCQKtAMai6o2yuukvKJXhjHXEJx5HeYydtJQdMQRsw",
  "key33": "o8srHwx6kWR3MboX84Zf1FfHh8fiLRjhKT6H7Vuu131vAw3C2j1wmW37TK8MikRcNRE1h4ocmghX6ViZXYhVaX3",
  "key34": "iho1iuMsSCEogM4qXmUM6EV2CThYgdkFyHTjmmt9EPPaqWwFJ9Ao4oddrY2DSyksC2quNWXf6bQvHfoaLx7jdAo",
  "key35": "5HPvLarfpYBFA9EAi71GxbaKnLLQJWMRQPuxfo1gsnYZCVRKcsPkEsQVvAMDKTU4JS3Nd8uRRCTrewB1qycPxVan",
  "key36": "4kU9SShopNdPmwVd6QUD3JE5pV2QJ73V7sZUBR8dVLACwrqqXPTU4GK4x5aUiUv5Uc7585h5SVAykafLeAiwrDkj",
  "key37": "3DqaasdLzZw2BJ1vZCf3xqXNjUpF1HXv8f2FarceRTzjVmW5tkCAuzRuC6juEHUA3CjiujQXsHpg3f9PUvtKx3NN",
  "key38": "4gnkGaPnC8LdrW14VRxt6RaRPT68697BV8gUqdxG8db478a8h5BaX9U7TL8kFv7wpgzC67Y5F6BRzAZnQRRhRyT7",
  "key39": "51gb3EBp8UKkYDiGEaWZmVtpCfjHeYhqbgxqhSN5n5bJPggyhQo2p9uKTvfN9XstjYPWBNTJ8D93nHSRBgd9vFz4",
  "key40": "3XZBbkgGkJTXMVfcYPNhQVkoQPxKAxDB8CMzG1s386tX28iLwFDTneCFVoGixsdV2Ehg6trHrPUDCfV1bjCfX7Zr",
  "key41": "21zFj4dmBVp146BDjYdufSL9DKFQDCZXif7r2BtVeJURBUmAuNzqszZJeL3Pq3ccDmJXmN5fGqAKM5CUbjXaLKoD",
  "key42": "2p39xSYxRBn1ZEC5EkowfKe9wdv6vQsCrDkdrwtqpLcAsQ2JL84f5ub33JN6vLjKbsnmp6L3aGbRu3mwvwE9m8sc",
  "key43": "2MjjfQPtDHbjCiBm3y1L6iDzkn8f1So2jQNm1oGnmski4o4E1kJfsGemnuHY2aykdYyqaKxc2vaYuNzTzaKVQe2y",
  "key44": "CZ1Ahp36Ky3TdUFFpadgUqXWejwk1Ng5SenFFBFvUH3i2am5iAMu8zqbNKGChJXzmaMEkVLVnqDsDA9ZwmH2A7E",
  "key45": "2ERPL9ePsKzyHAPrv1tTQUw8B6ypMNGt7Zs2P6wMaRCFrwkbyTB7SiznmwVuTZYqMwvavvp97LyjiQMSmwN5EyQ8",
  "key46": "15rTWLbqzfnGuQE3EHFLrVZDZjstYULe4wSXS8NuB6AfmAPi6RcVqPmxvounUPZtEkAZGQb1eAuWY4uKHrqLVvi",
  "key47": "312u2NFNDmBD1z33J9XXZT3DiZzrMZ5ZBH3TjfMFAWi7Tidfo6kca6Uq1vjizHsThhBfNYUoHvcZTeevf6oVc4cx"
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
