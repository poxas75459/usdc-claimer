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
    "4xzkc22ahvfPQmt3QgMexKUMYG5rhMoHiUsy8cBktxWv2vybQ7XLyytcG9oawH19yXzhgNw83wbJpD99qGfJnUMg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GidtKe2t8wGAjrsvinxZ2Sa4C5CUHgmnaHcawQ36YJEjhnpSNaHc5FUP3w3BryUxytNgSdnKKbTpNuo5PWTBZxT",
  "key1": "2m4BXZtMpf5FuMQTn1b1dSqrryxg7g6sQxUUFSocSPeRPtGZBRpJXSpDp4tBsCADnD8xezYrw88gPPpC9SvECdMf",
  "key2": "2Uvdonq42bohnRB2AtXmhZc2AwuhPQxTsX6riQHu7MoQexBH2eNEqMj14vit4fDA72VpyxmMVKgW6miLL6VBWtjT",
  "key3": "25vc2nqzwPAC19UCVweEC16UbPLeAoBjEb1XQHgNxzLPWcAK2wXAqgcFPgyjFvRRmTnKZef5dp377JTSbvw17zXV",
  "key4": "2z9YWBTEKfpDrFwdeC1xi86ThnyrcvSBtSFcUL7khwsi4A3Ay41UaAFGPTvsNEAgcZ6cbY4BKZXdJJZS1vzoMMRJ",
  "key5": "3kZw5BVYDbkEgGiDgQzKgtSzxESvjTHqYbEnVUhwtLy3PiAa9i2o4hFinpmNps1Y1G2m4wsPic96nzPGuAzqAYBA",
  "key6": "28A2PbH55yAtJQYkSBPkQQbQxjBMmff6szbD4HDdpasPCo9hgq78yXQfGbouXkeg6bGpejASHJaEFFs8YZzm57Jm",
  "key7": "3FafhvMeryM2Pm7TNkUAGW4xoxoDc8vTrkR7AJQB5CAm8yfT4n3AcKJkfZ7Acmyba5s66NPntBxYnmrBLfyD8KYZ",
  "key8": "3fMRM58X9k8hqZssCtbuX8KqbiaToPV2GyZpFLLXh8TBELxzMXeoQXtoHbgxQgEXEKPTtUJSpuXaqBrqp7bN5WY",
  "key9": "4occPqwS1msip2ZK6TgeuYLSMRHBtWZGuQuEcvdQAZKtokvNhTiqrB19pGPc12NJmU5xMQMKSKNXdNLUn7C6vbCu",
  "key10": "2EZHKXs9d6GbEePMTX3QoH7H318CxeDi3Gs9YHWM2jaeGnafZfC6TaqHcKEKUC2GZTMw9kNsmQ664JwjF5rsi9nq",
  "key11": "42rR8y5H1We3gAqAgEAcFcHRpnQz5D3iH2mVjCWqXV1rPQKk8pXRrtff6FNPy4zpJCrq1BoXCqD9qpFCcRRApQEz",
  "key12": "5Bitf8RSPqMdrDnnRe9AFUnxFQmrkUGENKK5ojQprNzEp6EuA8usjZjtKq2YxURvMbmQbe6zwgHbKwSvEcWTMLFy",
  "key13": "wgpSUQ11nxFtaBVmZ3HTKUhMYTvawRuR9bG8qxvmyGA6DDjqdYpjMHHMgu9SgmfEY5Dmta9KYTjF65UoQKTRm8A",
  "key14": "548R79UUP7HYDMdHJChjsWtYpZMzLb6PQkKfBmJ8TVv7ZjhcJb8UQxwebVaeniSAHtSCRSVDqqyyyxtfs2wdrYBu",
  "key15": "5dyUzakShoLjVfaZZGubNLfrA7hMB9W8jz7f5LQQU1hZo4ZizWtH9c38DXksRjsJNSH6vdVk46xhPekiNY6dXsex",
  "key16": "5MpSEeNDon3pyfHELKyT9iN9bmN7v4E3pAPUocCC3rswfQfo5atVrkNTGhZMfr8HVaiybRBkiFuR9bqeaBG7Bxnd",
  "key17": "3Y5yDor3Zfny1dmunq1gbTnD2MPzrgFJomY64X6jiuYvCeH8sVzeRjeYdP8bww25a5MhTbhHdT8cdAhuU4MmnjNG",
  "key18": "3PFJrmVDvZsy4qUv7UZC4iyQV7V6xHuXo7Dn9nYycQcoePmFnT6yQGSiK3C3qaj7WEFxMtMFpdm8XW72Ss3rrYLk",
  "key19": "38Rd3wzmbgG2UrqL7SXFVN64uFnJWgFmLKfrXJ8yP8zTUDSGvNYirqgnfKNjZLK5dKLZKpmpt7UkkWiE35poqaVv",
  "key20": "nAFQqbYXhqakrSW2onpAf5wGCFAAW712uCeHxY1VB9eMWQBc1xueiR9Qj5TEd8THgrBUSF1toVbjFhxAZy3UcdX",
  "key21": "5a2kXX2gH578Y3eFMyQp265ink72K7RfzM6gQCR1pPKFYc9RixqwrSJJM2VNe9E93WRVjbqvvKhZ4hwAZGNTFMTT",
  "key22": "5ybg6YytDwBt8jiH4nd9owVTuKZ838oYeSQapDDGjDChxxqGWxnT5ahWp3NJcFaJpfPHJLcP7ueYk8z9E3w4vDSJ",
  "key23": "24Jmj8vnrP6jUEonigEfXSKKNNYognK2384omqHFzPd5h2mYM4jYnsGXYQqGNs6F35VWbaNZjbTzMdUHkzwHPXQo",
  "key24": "3MDqMkQC9XjnquHAMRotGcVBQvm8jy3fUvcZ8jzBZAGHBvGfHscY4sDWk8y3uTQwP78WUVycPG44eKbu8Yxa1gus",
  "key25": "219HXxSPSmX1L1A4Bn8prGPykN5UmYYSYCtcAJBmWMt3xVayLAb1MHeaNZq3KcjqNiAfHuQYEbf4nnydXMMJuujb",
  "key26": "bHeGe34rvjyxyW9PDvbMTh4iKXJxLBk7zaUYajg4z6NvpeRLEPDXYUAQBZvp5oDua7Mw9EFbB1q6XDw625ah5C4",
  "key27": "4Fj2KPeSMTTQya5gT12UXbccWe6h16p9KgKjdbTmtBCsm3hJ1MjnJAaRQGD2ThbJKysCQqZ3sLaY2YSGQVbuVA8Q",
  "key28": "5qzyGL1PuPJ4UtdjEtYduhbwo9B9mq5kGsg7yEKRLB3j1eLWfGaNqyJK9v3nLtJFRUtAbyyyGartgAHLxJu51qE4",
  "key29": "4HLnoeDUHTapHq6mgPzeFk2Jb8Y6fHDwgu5KzVkp1VEcoBzkWgW1dwnxFDZ3GomfCvZQroK248VHN4VV8vqyZMfN",
  "key30": "5iNUHVKyci8DWxBFDez4uJtAeMpKugLmBGEZZ56bn8AKEyVzeph3Rt14z7U9FTBrG6DwDJUU33qkjt3XxYuJ8JjJ",
  "key31": "261A3wF9GvwHusgseW1Hm8g7k2qK8Gpiwqs9GGHBdsLtCygqjaaYNfkhDoujvHBJvgnFyeUnvm3CRFSzvtNw9qVs",
  "key32": "2h6eXpahPANPmxV3HfmFMJpGYa67XaHuwQH6seSA32NajskA8MiSpRYng8iDTZAJvaaajW9Z9mDjuhVgyWmvXJSd",
  "key33": "2cP3QJkx6eq8dyAZANeQXTB2RbWb2eLkKsMRKQ5f86WNX2Qwqpst3p7MzQDCGYmpLpgcheTXoWiUd5cH3Du8xjqp",
  "key34": "Y91rJf5BbxqGA6YJdjRefT8JdhUcEF497hzGpgp4RUf89qnDYcvrP3jRACdSnr2vEnaou1xwxp5VHBWLRUpTHNZ",
  "key35": "2ryrPEroLRLUHcFsaALgVEC7xxs3TvVD9cyGuNyUdBRhaU8FzfoE1PUrzy6v4m6huKwpmwJ3NnkowUaCCkEKvQcM",
  "key36": "2ozMGs7z1GrQ7MWjZyxCsyLPctRFkZYn6cdHLLMBZT3aKujKQCgVk76g9bhK6h7cHWJUKfs2KEpyDgPB3H28S5ts",
  "key37": "DeUHfqcFC8dwkMVFmvYagARyrBPh9W1oNyp2fxmLTgmAWsMi2PZe296WzHDpbxuUf2QmQhJiXrXhKFxd8RAc3jq",
  "key38": "26P6ApXesHbcEVj6Z7NGrb5A1zpgSNJtfPikHC2b9iyZNLGre43jGy3bq7aYfvS3Nk2Mx3HsduUf8rK3AX3KBaL9",
  "key39": "9YRZ7pU7KDEE1KqK44Gnoi1T8RNJwLFgRN5Re4jVX1iWg8SYhtzLzRzsHAaHDkRvDPgkhz5u5xxGpTJVp58f7ev",
  "key40": "5cxZaTdMz5oH2hbkAE8T3kpdVj47C33BPMugRLy8Pm1WVwiKnVU5XohU64PieV24GsS2GW3pq2fCjbE6nV2gxFoF",
  "key41": "5114yNYqbbFXx7Tz43JrzgPwfoN5VHASdLZ7af5NSDFTG972G3DnyzsiMor9j6dJaMgEu5Yzj6RMzH6RdvyJCE2e",
  "key42": "2omtjKm88sdY4eA9rXQ7E2Pch9ZCFesvUms7cGKW8AKUHoqzFUTNaTySJyoPv4AJeaXcgpQjHRTf4epDrDxMPU4k",
  "key43": "5SVCimHfUDL5fzszvjmoZJ2hSpJRpFFeXYLS2pyuktdzS4KFYhhKD73XFkKtmPxTU48D4iqTeTo3zbrXXyQk7ahu",
  "key44": "3Pm87UZaCPAEavMbeaPzLiWxiuRSxtK4yKGmbLedcpWDFs1Vnw5hf2ccXKzM3UXtpQsNp4myGSyVdnFkbypF24S6",
  "key45": "5AZbfFz7PvvwdFFMiD9WAXLKd1V4PrvxoGnc1U18ivV77cS8k7bhkgNF8n5ztyi9JSVGG8iQTXQrzu5UmG6sqBR8",
  "key46": "PqtW85EuxeJDboDLcRPwx9ugki5BbTabT9rWks1JKY34zSWty6KAaFZ5otUGxcgV1smLee8icJfFat18Bppcn9C"
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
