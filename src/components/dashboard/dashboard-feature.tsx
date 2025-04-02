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
    "48hZt3UNR6Zo91H88qD2oaAnqWK8s8crpbHsVoKaUpqSgyGYAw51JTeCv8PGn2TWvGBb8qvcR5vVpiPpmCDrgpNh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4foRF1goZNzf5oCDcD9WSnWSZ35jJ3WTxS89RnXSfSnHnZdu46zjN2PVWKDD1uax1V7LBMYChCPb3bUN5hRrPdiG",
  "key1": "dnpr2Ab5YPCq4yxQgRGdUdhkkucEJVhcCvTx7bbYCqZtm7AH8SVvyuS5WWHbhe5LDBdCUdmMTFALahmGZj6y5gB",
  "key2": "3cKMo5HwrthBmRdGnRLexTZRpYWh4eidJcvjXaAM82AYVDUozJwR5GHmidLvzeFoL8m532wcGsxHqTpZWx7jkV6Z",
  "key3": "Cd2LkSTF6LPtBKgb23quEwZajzq7YnZsL4umzrx49VmRpSEDnBEvqoD6o4bCR5gpG3ND4pFhUJFiBc7vdEfWedV",
  "key4": "5RPed9ToRWtFqWijcHA5uzsBMhMneB7ejw1z7vEXFHHyoc9JfuUQMhyZbh4cPeNGJHwrNTAiXRPvSpg7KgDkxGPL",
  "key5": "4XMRhENFD5o2KKtyyV2zbYBbKfkZ8tooWvEBBB3GYwdiBoCt1RY1HCa6AYc3x2FDDGYkC41xu8V6C7yqusK8Gxb",
  "key6": "kzqkua7iq3bvWLtU3PPsAV2hkJGThmUweVeAaotFsUGVwpQTdKbQ7PzNSnUKof2Jwit5YTy6g8Sqef7jR8VhqgM",
  "key7": "2eGcG4YtksDeB6aVvFXqycxDcu7zzfxn3SWtx1aCsV8mJWhDGwvqHQtdfDucvBnw3ZLETY8aXEcXof5S311MNtth",
  "key8": "412qyj25DYLesjA232fHaa8oiV4HnSheRAzeq3QK14xmnbb86ADGmykNFdBqyx1gXriHba2BVoEA6iMJbEwpiZPA",
  "key9": "2z1WFfL5Wb7vbDSkQQRfPxPZTrTj5pykjB3SHAJjHsnR5vZZJdMrY7SM6shkAypnSrCnBx74EJg3cGLn7Mg2toK5",
  "key10": "4BE6EasKUuX4nPCf4NGvUqnzfPDpaE6hPjQATxym3qFKTwJBs6V4a71FMyonun8sWu9CBLW7DYupL4bh1gDncxaA",
  "key11": "5J3QosG764vTBgJoV1QRVxXfhoKhQZbcR9wcpo5B64q5MMxrAtrao9X9xPtYiSPjqeXNLphcMeE5A8ysc76Wo59Q",
  "key12": "z6TVa2pRXcw98rJVWkfx4sApgCrMGtb6AFjuMHTawJL3NFnqVuV5U5A9iqYNVvmXMdfCr13u4UAAeSYafvqwu2b",
  "key13": "4xut1Dv2i2weLoWsBV1fwTjh8AiNsne3DPwpKmjgid8HdcrAt71UmisBNDRHXjmZKMQw9N8wxRFd9KuSNt5XAZnn",
  "key14": "56bumuu65rm7zmcTTDVdLMZhKJVvufWx5PLf7caY6FYnBGuNzveVemkLbSQGwNwjTvbfN18sym7YuQcmPEVihyc4",
  "key15": "5fw7rSkmjRV5fVvknEDJZgzD4da5CZcBkjzVahhBeZd6rivhruwMXeeZMgW1sA2JpnpKwcmaXscmW63jpQcCsVr5",
  "key16": "FD5pQYb7nwiPTDJ15cJihpGT3beSNjtF5SDfuRKmet8wio5CqPKQA6UffBuGVFiABj9qzL1T7aBQKyHpTEmzR7u",
  "key17": "5BhRdffNnCD9YCWiFaPEcNj2tx3c8YhP8shQwFyf7NFxs7Ws9Fw5ufkt2YodNciWQJKaa4Rtg2YPc1ikQX48C1Zt",
  "key18": "3xyXY2MptmyX6CQdo3MCfNTiHUMiKeBDN44SGyw51EvLU2zfF2L6QAbapodXztMVp2gcx6MGALKx6ea78a2LhoEj",
  "key19": "2dH5QJhuTubkeAek6RTWV3CdoJBMEfmTUnPSUsgdG6g6iW6eejfpG9nyFdpzk6SDYNh3yRd2EAG2aKUEpfCQRkyx",
  "key20": "3r9ThVmmY8jYevDoTgcCUg3xMpku2S6mM3i9hg8LiyuwwPKk64qpstQKB9efe57KhmwjmdEqausTc2dHHvgv6H9c",
  "key21": "5j1EyrCXDwyapFaowLiTSZZQ5b2452A7dHhLBJCyNcDWYtRksjgLz3BX8vc9G5KYr3LrgYT2mK8rohiTug2Ypewu",
  "key22": "55gXRSegs8DmFe8v8p7MHYa9SUkojF3pb15fpQfsNVVhFUESLCw8RNNLtjdHtKX9GQTAsmJi2CAduAFz1h6R7khy",
  "key23": "BFurdnYxaF2XoTqcV2sw7ZQRWV6FmJNDNNTdAsKCKnarqitCcqMwhnsgQwoUfBNdMhEojs2CGLL9K8QmCFEAFzS",
  "key24": "2AMABaojjtDBqKzdjV9S3kcGQFxw3iQ4kR7rKu98zqntXWdmU8s4R3YGtasZ2FEPgtEUydFaiFk4XcuUwAAcETe2",
  "key25": "TrUFrg3wLBVU7tGnH3GuBuyxv9YKcQwEie1K5yECUoA8GrdH96sMX4Hm4wtYak4Ra78e5cpE87YAh7GgM3Mo4U2",
  "key26": "isUNetxNz3ybTHYrYoUH2Se8aphEMxY3o2FYLQdaMF6KgNJWa9p9cDVvg3Rw7Vza6RKY38UcJLQERVGnM16coor",
  "key27": "2K2TK1boCKkHM2LtYknucU9zw78NfbvtPqL2jCYp9JkLSRmCd6NjRUeotbo61Li4xvSid9J5VLfotyDxfDEFWmRP",
  "key28": "5B63tBBjGXfRKyPhtHb5TGjU95uFPHV57zA6GYrP4R2fFQ8bAWEErTz3q4wxNE4PU6r94eJrxaETc8mCh7HunBQQ",
  "key29": "46G4bXTzjikn6enT1H5gNpwvo2UjMf3VrP5kuvAaDSFoJfJSLiVUVNacVFwYRShdPPeA71gc6w5gYKhQfPDNXuqz",
  "key30": "3fz8Birw9sqnec1BGRRGFWXQWfGYitcN44wPWd1PCPTN91rRi5Yup3NwnLAaVWQsCwQUk1EaaWV712rbVxRs6AqL",
  "key31": "4QScGwcXErrzVrntGi2jvLwqsUQPHFNKUxTeqXBiJrHqFUw9bmk23X1RNCZXCx3XFNjdSwY4byNkopMbN6qjp4tw",
  "key32": "53Taa8j5yF9jgYVADjrB15NxDjJqqSjtid6zNtfKQAPrZ9YhtTyGLAV2CQUUYVZKFHxCGKrnLPMJDWtmHbxgJFv9",
  "key33": "22JySKnJ4AWosS3mefHXKmvVvQ4AstR7gtb1H5EUZgwPvPge62EA5U9RgpPLTs7MYnnD4KNwdafadniAQ7ywbpFJ",
  "key34": "mxgxoLcuqz9vcGhk9ebE4T37Q1emam92P8eTpEDKtGNc4nJ1rwNbfRMkvtrVyymvMaVTseR92qHaKhaKN9cP9aw",
  "key35": "4S5T1v5DiQgBrRLztbUPkoWr3VuKAKZL4LScL9LPa56phukpfvmwuULSHf8L4eKeV4JsoGEcNhn1cxw2xaphTro8",
  "key36": "3YSYjnaEencq98euvUHHYyTyKsQivFUVbE9ML2nrjpWrMUktRK3UFMY7nQgYJWR1dzwWgi9TochzX8SkPttZvwY3",
  "key37": "2w4CHUHvauKMvt3j6hZR365FRNFhwuU2Wux94z51RqKTxEdLNvi3omT2eg4t3EqrV9iaHd8zN29ZCgM3gTdqBhwR",
  "key38": "4S5UxecfVmCj1F49rxiUycVavbNruCAmM3wiLfgC3JV1oq4YSkVmvzzDH3CDhjGtDRTuHayX8Gj1iz6cMkNjVYfd",
  "key39": "2YfuZKFdncWBQb61kAvTYJU7PLxWt3wzcp6D5xDQCzX7hN64ED42nGehB7RLz7Mnw1JrTaBUXxUANkg6BpjHXCdJ",
  "key40": "671q784fv3YmGFU8Psb7wA8mXF5ysJaxeojE7qeC2F684U1M5CGDFVqKZ6ak1vjvRXnDAMFTVfsZrrZLPDNqRvwY",
  "key41": "35jm7FYutZ8JiXD8TPNdLgV1fcPRDsondeYr28qvKxWx94dAuiCbrbe8S7vgwAdSEVkYwx7BuSVxK5anSYhDwx1u",
  "key42": "ke2SHRdwV6dgZpuZHMmY8imQPaYCGepH6pR47yjZSoDLa532tGf5YtzqYafmDkXXG8RdGT53FAcCY9pBzboSNTM",
  "key43": "5r57qeJdNoVFKSAyA663aW3AbjXTR9RE5FZTuMBd4fiE9zDjWAUJzoMSstgpWKwvEBPvzYNM4khvqzmCLr9eKg1W",
  "key44": "5Ea5SWPbpeB2nsHHMSoatoNWbpuCSY7iFcPeobtYu2Sp9JzhwqZ4WvEyrEJPHrVR2qpH2yNtowDnretEEeLnAn6t",
  "key45": "2E3aqWoEcHxyXz7eaRv15jaBs7SVGQuNWzbtJRDNoutG3nhkgdksUb318pJ2q9x9XSBZzkeP2wixeZUXRwZscQQr"
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
