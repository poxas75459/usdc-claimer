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
    "3rtiKgnHCBeerSaLz44RkYn2kgewz5K3jqV1g8YVrKWCkWm7eheiE13iSP9EXgNvvDjBAByzeu4kdKHa68RD2Hpw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eUVtgSDqL6xojUNLZUjE9o6cHqdYXNzL7qN4ABvmCfPQWyWrU89VK9Ncom8A5JmsU194Qrd7T9RQwuwdy8Qo4C1",
  "key1": "4Kzg1WPQJcTKKy8sN8GoizZ1KV3qUqFuSLjJh6yBgDKUKWoMnW79ZZdUmWFVbrJJmNavQF3pQThDsrJp21irsDJk",
  "key2": "62LyPb9UBGoy7f3QV3STQWF1vm8hWY2deCmdG84S3cD48zN6UtNzLD9w9oPHK9fzrLBkUNTZTSMZztWrUfJwy5h1",
  "key3": "dfcCxJWsDGcjS4WvLh4giSCY4hbuKzFiNDCzg7nNbdoy7So8c7DhRDsnG6M233JJDNiA5CnZkJEpGZPC4KKJwZk",
  "key4": "3dKnBXuG1kVCQ1gPTyAWiGrTRTgqgxEu1dsdkJ1iHWgorqqfWHem2cCDfi7Zwmg8bArHSC78BHD2PEJh91aUcSXV",
  "key5": "53MrRUUWHYyAEfxm7sd2eYwPSkWDoJSCUDqxNLqu96aaJvJw6zbEhDDi63QnyGZe97rvNiBYdDvqLiXZVE6GXBuj",
  "key6": "46Rg9DgZZg5UHu9uiav6u2hv1j1bkLPzhqgyhT9gypo5x2BAyGUe6fo152it6eaZDLuaw1C4eQD5QrVZBX4PPska",
  "key7": "dADsBnPfcJxmD43bJQEVRyE1u3jntkiCAwqmYrR6Ko9yCcdNE5fgtTxnV95Awipb9dwcouMvyACiqU4jWaFPC9E",
  "key8": "4ZkRUWtCubfvJgAG4KnYwUGBUZawPq5hH9fimuZYjGB27SbfXoDkda6PMX38Nsvw142xsC4yuehAHUpXnMuCVfNZ",
  "key9": "5DSkpxLKxK5AE1HuaPdfGhzbociXU1oXhuYbR94V279wdp2kmipK1oyLCdQgnUrULRDF1Kvv4pjAuXf8ZjSRz2rZ",
  "key10": "eg5NZJmY7NVygax9SWHquzEaeycHutihoELUi4vmFHp43rTmMsDWDqxqoY5tZZaFagv5uBiVDgcmjRvsLEKYdtR",
  "key11": "2dk4fvAvRRLAVrDhKi7iUk7uJAd5HA3mVXgN3bCErgZUJR7HpvwAJxr6EihCujqh8KVENiTr56vK3H8zSckB8rM7",
  "key12": "2ABvGBCV81WYaaqWQFjAym6xdkUPyLCQncMaW7U6zBLyJEjtdDSsGRPE5YZzJvngiYkjoB7bqbAgp3ihFp4JsLJM",
  "key13": "41bCRVs7NapVkDTu1FmvbzcwysobT9SugDB3sw1dQaVgsVrn8QKG24i1JqjBXMwZ1sZMk1BSHaJRnUbw9Aqr17b4",
  "key14": "2oXc6ZoJ843CVo62HLxLbkKNTkHiANiPAEfnA1trC95BicgjHmkopyAn1w6pc6WZrjnUXLrXE1S8x51AmvzDV5vm",
  "key15": "s3TBZJKKr2cusTGS4qwNVGfwFhSNeksyaznVbHzk2JxnaZNGrVXva6MCZftgub4racsMeJFnP1q6wvBo5U2c1D9",
  "key16": "3fQfG2Y6hiaCAqZELRGv64xQKQFeyK3mBhnQQNGk3sAE2pDWpm3Zczux7jrD7mrnmBUQrynKVCPHjYGCchHpzMH5",
  "key17": "2iTnXAJeRNbx6Q1BdNcszh6FVWAvfvr1kuJMmtBML1qzaeZmGJBq2UctF7hmf6SCTCSRo7vTRFEMnmdZNEwYc6hy",
  "key18": "oMkCbjNdcANg9zUvsYHcdcSg7cepDCASEY1fRqq5BrM4qzSupGDP2CLzFkZCD2Z12Pah5cpLR4K175PFqGWup5H",
  "key19": "4PyVKnds6SxN3cPdF9oqcNQ5XgLtQwE141rmDUrbSUrEg6PRNEnUWQKYPinvF16dLLKjjwY1QwjxMHq2k25zjTyC",
  "key20": "2ANgkA64to6bwRebZwn2hrQqiRFE3gSvXQY9m9FgPonCnbKxsADa1ibWsLgC3xobjTxgZo3t6uk7tjfNkcwFmwWC",
  "key21": "42SRHJN7V5zNESaLLFr8Fu16ZjNAZMBMHW9AsviGjhL5hwUd1NfAiee6WuMzjVnbQrR9CPKxfKN4NzqjeKzam8ob",
  "key22": "Smw6seQey9n4yhjTAqPmPdcMGXEeMFpST1oGiwBWQWBjEVic6oTCWkJdxNtkGycfGvPWiozTrpUYE2HjHNKNkCe",
  "key23": "2du7U7U1mWVcZU4VdDVMBTDD6mEwMARvdRCUjvWTFQ5kK2pTEPSRgdP4geMjtaeyizBvjaieAeMkrU5aHAApuwuP",
  "key24": "2tftPaTGMFQn2C1hfpyFFdwK1LyeVVQJorhx5Asb68uTdFdRgsMBCPvsKchw3iU1uTNcJnNW2vg4QEnabMEAvMLc",
  "key25": "4XCEeoUkqCTAzW11dYPzdwN1hQnDPCJ2twUAwLytJQHFEgC7zDdEApbT2poTUTsdSLKeV3yX8exKULGV1F61bfRK",
  "key26": "4gUhqhxUwWPUdNEDtbUdyYuu96ibVgAtM4BAo7dPD4uwvBba6bD863cryj3VmRKCdh4ckZVsNcGxzx3U5K4fBZPN",
  "key27": "5TPxVVh1tnxG9D6KZRtYeZBoCytn1JEfoBhqvpaiCk1dSftTAYzMMxuNoeKx1BJCqiW3kmt42i8MRzhYgdhG86U6",
  "key28": "2HrtdD1wk3tZQk5SUso6TW7zeqtWemZMZpoj1NPPs21S8k55aeBjqr8ZZiJjB6BT8u9Leod5yJUhoFxVAVzjgt1j",
  "key29": "5we1X4AqtX7xGhjSNsUztUAXH5zLqNmqNV4SY18PgbYWKsHzDZ4XtvtekDAr2S4hc3npBYCaQ7X3wxaqx5aW2cq7",
  "key30": "QFKNWiiYtExSjJ5HeN5b3PQ3CGe6ag8utajMxDCVnBpkkNGKqwB9u1mpZuJ4fP6Lo8Ye9X5HUzoF3H2EXdAMNtt",
  "key31": "4q9yEwvaN7ja9z6LBrmHvmpkuiRJkLnWUKhHmvV5LG7ED5byaPh2gk5WbNH1bs4Jx7Z1bMQwnMC5k2HixuQixp7o",
  "key32": "54CiQvCch2Z8QLRdF7CraqnzcWYWyt73zNosnHWEbUbJbEXFp8DMiV4nx6d9xas79RiPy3PqfZWgvh8yHDRACELg",
  "key33": "2L5eqWKgyKQf1mEExYsVFtaNSvjXNK9a98GpDmHwsdsk5nd3mytdcZPVeXZfUcwjJwxLRQMUBUZiGdLitCbupztX",
  "key34": "4u2QUjnqZtoAQuCBH9A6VyYgBHVnt4uXrpL2RCZ6fm8X9S9qq2SaPrz6MH8AbsD1M9nyDsSRbb4fxh3igE6cZ23K"
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
