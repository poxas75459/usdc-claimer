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
    "3Z1MtY8sAgKbhtqz1ntKkcYoQLQEVSrL33GiBMvQLCY3mpdFKn5CyWHHJZ1opeJwZf32rXT71EGBswW95jX9e2TM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5brZ1TYP4NSwKyTrpBcuG9njChWJoVM6fEAM7No1UKMNA4AbP3yqHSVQo8QWbCNfAmyfN42y2tHE8iuKYFkF9nMi",
  "key1": "3NadvBczv4oP6QJ4EJ5jB4fTRuQtJVGJprfVZwrD1rRRkxqHYg9ZTgHgREDxAvLNGWFEUud8CiwT4rEmPaAVYA3i",
  "key2": "5FL2LKxWx3ZRAzi5KUafErnfNfz6cetm9PcYkEkHHyzPepw2nxnihqMUnXsnnVNiDmWCMj2qXiRqAfSX6DDoiboq",
  "key3": "5zduKNYcUADu1a1BEqKMtkMueFQ5GL9Bhy8nJ4JHdKvE9fwywqVQLoKEJWkCpytc7QXgh93ZWjw1fRCRpxUYnpf1",
  "key4": "Zmi8rom9SN3VaaKMQVWhwwMX4x9yHmX5D5N3DMGEFRgor61hgDtLC1gBaWnyi3dxx7pF1M5u8AB76aa6Mg7Rhzm",
  "key5": "35vHrFXdsZy6ZjaALwNEBMv9NS6NxMUGjGQSKHqqvNDHfgQ3uGp3rxKVhmsp6igRWYpDdrfCbJRMtAss7jbSYEWQ",
  "key6": "2F2uKBhjCoQnmm4NZDEMcLmmXRsyV4cQ1kiRQ5YTh77QmSqFkbN1gE5EdtqWzynrFo76ADKBzfK26Jrv2ufkhLGm",
  "key7": "5Ho2FHdUxwGmQvTMw8KfQ28YSqb7JHU6mK3ZdwDJsYxkBUf8QTaSgdEX7YNnWTYpHkpojawDLwEPDS9LeBDYPiMh",
  "key8": "2GeTE4hDBSpQSb1K4And6uVKYpoYCnop5Ac9ijKA2QXF7NCtqPc8bUS3dX94Btbky1N16meFN1kM6fPBYXnUL11J",
  "key9": "3hCuPhHHqNHei6FyZghapQxk9qPRmAAEAtYeJ7Bmqjog6KVFA6Yqk2VSThRT9SbSbYPC43UotGszVwucBFheFeNE",
  "key10": "3BrNSdusaEVmzucZ9H6Rcb8nEUd4dQGZeXuwLU772SowgHuxp5PqZh3JfQuYVqr3LQuL79qupTXQEB8vXa8ohi5f",
  "key11": "5h8cYazSdtZDw4uuXoTygU3qScYYHWJFGAFqqvGnxTjyVW6jjfxNQjZHw4ydikecSfmd2TTM1YzmhcNJFds3GMyc",
  "key12": "S89CTgo6zMzcTJuTptV2hYvLTPQw7G74mE5crYBKEUvjrgoWynr388Ud5ifVyeVc5sARJJMDeFVJHqhKGU7Zg9f",
  "key13": "5mxVHXJLkeJvRLmn78guywxLzcgiEHfWRQp8D7tzHb4Z9FtHRz4xFKSnN8oqPeU6N8mTjadV1KDChibt9vSvkaLC",
  "key14": "5Q8RwBsJUVZYLzU9sjohyaZjzytX4xzE3f98R1M27T7YUeyD96pvmCoNBiNfWJPUako5JYFTfeFGfs64qVQGLQyn",
  "key15": "QK2BkrPCeMAv35KhjoC4sjAahM1c8xCPimw4BxHy7dohDbdUzojMczSEfmZUheTFqxFFyNneMyWBHfKekStQvdS",
  "key16": "JPWCQMoAy4cds3GmwynJD7U21uKVRdpoYGzb8VACcGqNJ3eR5rNYqTFjwdngQtGo3DBZEuynK26UzkiEViu97aa",
  "key17": "5MemN3vHMfAT59Ty8oweTog9uEkoKK6n8VWEmoVobPBNLyDdDts9sAwZGBjEZQggo4aA1zpDntbgHPXdjijzTH1o",
  "key18": "4PRju24d5e37WurmCmZdYKr8tDV6ZoiaYfUV7LAsjHiJgcZAcb2GCf4jqFUZtUkyo1yoQT9WAtowPtatoSYmXGUd",
  "key19": "FN6PHU5ReUBYr5CdkQ4DkRX9c5KF6wZk9ZjV55tkseUz2xBHFCHHL9TyQRwymh9xjBJ9pKsWaqYsrNy33MaCVX7",
  "key20": "3DrNAoMSwTUMU9MHbCUiEKCdBkoM9Nz5BYCYsSPEE3orasnjm55uWpZWB3hb7fCkmdXyptEJAmDUW4AxFnEyEL3L",
  "key21": "4DJUwjgUd5JJEjXQLqNBQc84GHWFYp4h9rXKETMoQCTt28hGkD5xbShCqnXtRpZu5HEuX9TsDpFxF1Cbh5Q6nARg",
  "key22": "38qXb9FnoQXnnhvVhkEqVw18N1jdJNvcuBvWKR2ApN8SuDsPf9sv43kzDp5w5AQmrJbsbZoGs1FaUvdz8edCnNx3",
  "key23": "3wfgdW3WW2EE1JsxPn1wSCQEs1AgQnjiH58576DmN1kiw6Aksefkx51ngm7p64t7WsvqTpTjohFE8ofmyYUrHUPB",
  "key24": "3Qgy7t8QCsN7WeTXMedEyta3FjbRDBX8G1wGH5Rey7gk3kaKNbmzhFkUEfrg1RbtSe1BY5xyQru6fYm4YWmRK89P",
  "key25": "3bTMbwjYDrxiwYAjFSPDp2iSgeByk9nR3M6pXQ3xYGUbxpTML8a3iFqUpS1EjJHKWpuHETJyoD3VEcPYh3g14Jt",
  "key26": "4iwTEP1Q5C57haA52vZ3z12WyGNxFzvLCAPnC28LVmaYFiAk8MjGFbiptW5oLbTF8MtaHTtcdHu8o5zAuQ3sNjCZ",
  "key27": "3ZeJcKa3TWTwrrSsJGLf2Jwc7zpE6uaUwHQXVcrE7Zr4E4tM4TT8DPuezrUSQ4PFAKcdQsghXrsJyTf86GrdPjw8",
  "key28": "4bPMu4iCWHCgLTVrf2NxEemcRFL14vKTPWpCYYChKpgWRLmCLGfghr7zGE1QAj81Ln5ao3qqYdStYgYHVrHUoWew",
  "key29": "5NXw5SWHvFz1PWCubfy2TVxdMEL6td6J9HZRj2itbqEbQn8n5DHLAXLKeAMsiXU4wDBpd8Wckowy41DBH4PB7mQn",
  "key30": "5N57dBYpkif7YTXp8z1pCK45CWKxzfHpu7heA5s17GnVwDsKHpTjNSTrCN1DTxqh8x3KAvRSQeJ6WxrZPXCXQSuw",
  "key31": "33tNUrdLcWQa9v29oMhwyGGcjCu9QL7Vo8Dw58fCVpNjvy8zUi7Ne1FQwHimGM1ELiY6jPrFxJwWiMpsbasqbvwQ",
  "key32": "4jAJMZzg6PFkybFCMQahLWz7PKYLorTniVhnkQvw6XMsF2XGcpiA4R6vVLwCA1KDEFegvzC2kmuifn9RrDmQfMkX",
  "key33": "2jMknxehaf6fMrwhCpXYFvS25Wh4inaa4jM2Hra4K1rFZPWzpv5Hw3gXDm1S4V9fgXpnEgAbo2m5dL2AVyaP9bAi",
  "key34": "5CaahpYziiQbB1BAY2cUuUET4RTEQ7WqhCUiF3Z8hMzHqQRRCmtQa9oDwufjvsjw3zq4aSyAQosPfnJZtTG8sz1L",
  "key35": "2s2XyYGZNVFDPAfkiAsk3QCqUZA7KXi6Rdyygjjv7VjjwCbF7KknFGzsp1yXbv1tM1fA9VgJp1H3FPnDcYhZCkHS",
  "key36": "3qDi7BPtQSeXcsLTkAj3gms4eKrD3VoxYC7dAEMdhMUR97JwiY9wnrdsBuwcwex9WgTVFatuWKr9hRf6SBga9Eei",
  "key37": "2C4cm6m2Ajth1hZuoxbZXQDfzkoCzfD2Xui6NNjsZqEod1jZ3CPg7QBkhEmyjyuEV878J9G4kG1iJXYY6vJo5dvM",
  "key38": "4mVs5ChSoq5dGnayMCXg1T4uqx2S9rHGFH5hXdzdnEfy8DUa4F5p6jatFDp1nhnDGw49hEpUuxdDK34xDwPhAhFg"
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
