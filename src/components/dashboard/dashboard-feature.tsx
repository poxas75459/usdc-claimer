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
    "4GnQDBRj1kF29Vu8tpNVWcsW9Vi5RtCuWsHk2AGuTvo9nch75UYeHPJFRR8Zs4CyUmVBhVuNHZMQLuZ5V7W8MM2F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e6C4rcZ4eAvWBCn7Qq9pBcPWaLQGLHRfaUgMSDJJZNDxsSK4YR9E8uxD8vo9d3385f8FvMa4GxeZqKatTHZEAmg",
  "key1": "36TE6D7Har9Yyc5g6hUdngx2mBaTTLFMhmXGfey5ReK7juYCSt3B6YyNFfU8AYYDCaWnCttBtV6xqkqmgbJCNS6c",
  "key2": "27oUGVDgiMHf7tUCJCNozTB6HWaK6shkGNPSE51s6VhiNAhbX63Xk9HhJRHVeN8VCXKFnj5PiFYgpHZfGNXVQWD9",
  "key3": "4qS8fbEFhNcVKtrbzGpN9AifEDMWxjTzbF5bUF6M3r1iL5XrLmTdBfkv77uc4atZ8NBKg4LwFd67NvYLiyk3FBfa",
  "key4": "3wiqNLXXS5tvQsHFez38tJTvjY2SyJbz5d2cCwvkN87skmVzogWaKYodaAbFUqzJgp8JXCRYF8MQc9M17gFM8teW",
  "key5": "3GK6jdGaQWozGBrwgEGySR3oc76bKodrzj3TPxaVDLAuD4AJXRWBbb7ZCmoA4uzQHTrAu3PHRku2fc4dmH9tgPWD",
  "key6": "2JkQQfncnfQE9zpe69bjwSnU6tjW8aQ97HsLrxxrWZXxzRqXwNogYGnADaMuJgyMseiqzEBHbwdKFyGwGuxsrmMG",
  "key7": "2BcGvM1uia12e3cfzRTSU6UxsMhjs32dYfxG3R2dsKCeVZGsiSSniumMtNVcnX1tYaPmJvgWLrKbHnzqJhDBiehY",
  "key8": "2vbzxQPfUdg33tQenkEMmCXyY3rpxhV9ezF6R4uATiPeLCteCNf2RGhwQsfjmXb56xh6YYHRYnWYGhnYJQGdUawU",
  "key9": "656NStEmuQCLzxZt7hnWBaTT6L8gc2xKpEMq14nQorxB8948uTsQDHkWmbBXT1turef65ociBpYdsP27X9wcZGhy",
  "key10": "3BWsxiHfr4b2cA1xp5UFiBTXGBNUFw8rNKeYKaTLwHX5renrHJe9zoH5LcYvmR758h9ZHZi8xosihPJnm6jYM7GW",
  "key11": "3Sy4MZabKk6DyXMNMiELzRyAdp9YREkaWKkT5K4S9PrUnvepJ6VLrRiSJTWvhnKqxZYZ7JVCEcBXdMLEpSjMSjYo",
  "key12": "4qSjv8ALKpd2HLKJ7Vq6FMRrzzZ3YHzFhDpcdH65qpxATTYXgZa8xo3EESnHcCJ16sPF8ewqeD5DMhnaLhmB4cnW",
  "key13": "5Xm3yCoZtLM4aBkMtWw1xCAQgB4yCFYq8Hu7Uq1PhK9kQELRw1ch4sssmkhnGypCwLFtqer7NgDatwZqD1A8TDYt",
  "key14": "3TPhRSCx87EpDuGVNtv55Ypv76KkE8stq2pZNgDchs8RiSmL7ZBja6LsBzZr7fEqS7y12EHyxLLrdR1M42Z7jfWo",
  "key15": "4qCzuiEYYcYnDioP8DQiREU2sT8R86YQetxVsxG6h3PMBXq8L2n6rV4wSy5WstZXruzQ1CxtkLN3iwwMP4NKVbdi",
  "key16": "2baw3rLrNZMHus3iuio4eW23fBQW1DgWFKwpSVuQHWnCMj6Ttmhfs5dkKYcvLMLhizhMJxX3dK3MdvroXwZjfkVF",
  "key17": "57TaU9oDkAiFrigWoJvqdgemQQafY9jDN3ek7hGR5WL7Vi8ntWhY5rwuup4ib5MemqANk4qarUqqfmwmE7Mg19ot",
  "key18": "oMnhP64TG41xQoabtBHGTMTn81KarNEbX6zimkuinLekzuahAyuszNGAiX9pzDqNRN1uC5Enscz9P13XNUNkuYG",
  "key19": "66Nf81PCrCM8sqXwH8a2EdBjDiDEBd3cVPWbdcapX3b9BD9nBy4RTwxPbatRGuJMSqR7RZqx1sk3hs2i6QTDk2wi",
  "key20": "63vzskyJK9akVk8VjmSZV2Ysuf83XkJGq3z9PEqpgGVDKoaggepNG5x21NGMV9bg2kxPWARgG4h5Hku1JU5NWdcb",
  "key21": "jCqASaCn52nWXzJ83CYX7DZUT5nf9uxug83vyNQzTxEf7paHpB4c9DT521zxZRBvPVQdUGt1fXwJ6gRJ5d33Uk4",
  "key22": "yVU1tpXXu1qiNSNEW9Y6xx7cMLMbWChWHXNssqGWNY7PZiv73kr2cetcqD93AuRiY23wxwurk3oBcpZ25eRJpt4",
  "key23": "2B9XGgpAhm97hSUUgPGVHkRDfwHoFhYiYFGDdVwqfwdbC2juTcYG11iC5SX9sxBF8DwjSmekFHt41AqyhrLvu71k",
  "key24": "2iFUkdqYd9nPpYmwjZAjsfTnincGjJBpY9ARnbWTqRyLG5NqTgRT8EofNtHtze6dLDznK5xUXKj6PPaPGHv9m13e",
  "key25": "5sJmRppg7T4edf4gNfzHcR9MoSmRXZizkamiKK6Nz55iV7WcQEPXzAZrW2TxRddFj5X8yuSiDNdS6nBrT6Q6h1k1",
  "key26": "5psRCCRZZfMoYZUvXLRtxFbTcdatWyJAjEBJkziQpeff8ZLXsof7Z6Mfxx9aWNZ7u9bqVvTACcPxvkt7UAdGxePP",
  "key27": "2e2yobZK7hgCnmmd1m2dmP3qNZEdJ9HZGDQudRg58iv6SHqj1CnXGjPg2ZceXdTaNJwbb9UbwApR4yRYMzeLMTCb",
  "key28": "5pTdgy5gcTPekhUfMxpWbYJxLjnUuSXpm2fbNgbMESDuhNfcTTudYLKgZom1E7WUyfGmPpYZ1tvGGtm6aidF9Zzc",
  "key29": "36TP3tG2fBEZA8YnjEcgRQUvKCtTevp85GHpvfCJFm1LRq3u9mhiuThgdNJ6JqWg4ES1rPRn5Bbbxxr6UWhuy6SC",
  "key30": "46UgxGD2uBVwukLVmpNCd6VmVsZp5NGhkci6w229LooNhnVTfdzCtY8bvBxgBcJt1fKPE1MD7GMGZGAFLcFoyBDy",
  "key31": "4Z8igmJJ7kqtUNZoDcaYWxi2vjxUNXjSyNB9efY774CyGWBDMK8Z9TQdZEoU4jfzjiSjW5DJ9yu5QcBLXgdv8f86",
  "key32": "27eEJZwMokKJCMfQD2kvTgHbnN7bAK94ikVkqVpjACoVobeS4wd5KVTj1pCA5nj783ZvEVAsw1hy11r9qiPHquFC",
  "key33": "1yXrYrPdjJB2kTCv9s1DUEfhdKELoJ2VWTCnrq5vXV6MXxdeeBSSFPqAsxMyzRAFdneR3Kv1DjqVvSV2viMAg75",
  "key34": "4JU43GWUVrk6Ddr2k7dwwyEPp79r2X7du83M8fB9K1neo1reXKDuzF3VhErR5yeNxRjVg2XYv2cYAyE2b9n1LwC4",
  "key35": "2yNZyY2Rzq1WxQE7G8u2E2BcpemejhBipmr134cnYDujRdaa7vvG1CaTA5Es7k5GGAMq2qatqddyHp9kZYaydF6c",
  "key36": "5jjoiHPv539ueHpaNgHKax8C6VsZG7fCct3aXSxAyhu6XvEka6etr8gvJdv2JWWvayxQS28AiBuyWtgwWE7v1BnH",
  "key37": "4ZBp6AECfjg3o2ABdaPTfqUvcWeXBqEWgrxrzbhPzs4NeZ3hj66nDozjTZVm2WcG1EwRBLGA8Ap8Vr2HbFyYeLAz",
  "key38": "4GpwYmQBCtaKaip2RuXrBviwX8Y1oF8yP9L9M2A5QtZGo8SqAQDqUN4vEoDMgMrAzuY9KdzMRkZfWuPVPC2vJbHc",
  "key39": "2ACvdbuRpTVeNYVbHggFEap3NbyTx3ec44Loy1USG5rCoAihM7jECf8D5pE1RYfDLkFgC2W4qfeh9PTeTEA3RAD8",
  "key40": "2syHnv4Zz3eoFVYgZK7XTBAdZEuBfozUFrBCM8P8opBsHUWgZiL6fFdf4Hth1DpRgSSv66rZq8riBdqZFA858Pgt",
  "key41": "3vxHX9QFSKuidiSegfaESYQNrFbgeS3pQLQUvk15CNQhwJidTYEDQciVmqXYVaeVuAgP4obQNF7grmVdcaPRcd2T",
  "key42": "3nsR4S9pfTecaBFC5hKDTeGFFrnVgd4dU19DgcKF5rnYaT9c1pJvs1sMHrTRakg2u6WTFVeGW4d9HSUvziicpsFj",
  "key43": "LRVmPR5WBoZeo7zq98MnipxqQUvEVShZ9FjjeyDbE59iggZXAr32GhABAzHAvS6QgjVCqkfbm6h5zLn8jYsQ12n",
  "key44": "3kVH1ArknD7w8ZLupi1RU1XLW49gWiAYjyYUzq9ZbLTyDUNffv6YtkTLVCrALxdUyF5HjFrV9s6EyZ39TXfAJvGG",
  "key45": "38eMTFt7NfxeN1Y6RdKUxeyTQmrA1ehYd1nwk6WweeYN7WrGWJbMLuSmeyTbUTV28k1V9q5CtyCtaSzcG3cmaERW",
  "key46": "5D9v9AvFKxVAV6L6xB2ton2wziQsjT2Le94ZENrjLoVz9jwkkY3bKiCcQv5dxkEVYmjVJhXHUiysrmDG9R76SWX3",
  "key47": "37p3aL1y1k8fK8jeDA2oGhReakN8PZHaCJKZakGtLRhadXZaBTrKBkH1XjLK67wHSZYZqfArWVoaRB63r8h2xvsZ",
  "key48": "3yyizfedSGSndxMJXhfhChv8UwmCZKhA2C7vfnxWbZA5LZYLNyWx28SXJtFdkhx6zuaZ8UgR7QLEoZoA4APTnjDv",
  "key49": "3iCVNytz2AtAoRLnGeFfbrxQqqKiGAc6GCANi2DvcHGvRSg3Be2UuQtiR7UKxYdMqRJxa1m5jNsUXmcnnJj1ZBo1"
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
