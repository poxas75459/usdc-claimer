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
    "3Zg4jxyPtGqTKrtyX6sceD8KtiroUMKeF9Y8mv1oT4ZYwtgvsG7pQfZSU6GjtRQTAnhfwL8KQMECx9R5EzRicsW8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AKKV892Vd5qQ1SRazb6i5J4ozDhqExvoNiChDjrsAQmMJk8k7pxqJEkZm7NEXomCF5oPiasXu2m23C3Lxzp6pgZ",
  "key1": "2mceFMrZ58tM1cm2LvAGcjuVwYB8UcAiVmVqYyghPvUxP16Rb1wZfPiGGCEsXWh8ATy54iuZx5xFkemNJ8pC2D6p",
  "key2": "v1RQRMxRmGx4nTn4CRUYKqTX7dDzBtcBghHbiyiLVZWupN8Dvi9hRc1AbYP8Cwnw9pSta5EnPnchionxtYcn4db",
  "key3": "bYLhqR7wFztEa74j8SDcAV6PwrJ4J19jtwp7PcyocqV3zGRxiU2ZQc3GE9gJ9ks6weqPHkdfJLdQnGGasXx2Msb",
  "key4": "yGHUEW7fEiR5REUbp8RVh2ZwT9ReZvzhbFrC2poR73KuLbACPVK96eZdWjGt7xThQqBMHVMWzMiUSnwMTThSuMC",
  "key5": "48292HBsoD8dFqreuwb66GQDLXTB352uZuDmTVR5j2SE1TEHrrJ6cjXUWT88AxGimMCk9Vo281bVDfEn6PtUqd56",
  "key6": "3WTz2WcyV9vPYeKjgsrUEvaJ9ntves4U58pCvzX6f1A6fkXvUrHVXHt7kwwJn3BkSsAFNM14iMJr6XizYsLcYx46",
  "key7": "4GUYqukDuTz3oxVJfY618QSnRiW9hPdDdUkqMkp9DXFoTvYtK3Tvty1vMgDVKerjiQNrUv9zzgN8HXENiYmDvJM1",
  "key8": "2nQHKWQ4mnK97uLkh542HcYddArkAVqKFnY3Uq7CD7dBq8EU9UUS3SZpWuQPGsai75YBvoPt81L81Nfpn8Jbxw42",
  "key9": "TQhqfmfkS9938AjafupqdZYY3SZR9cHE72byVCJY8k38m7QKNkch2sEGiHF6MnEfsZhasg9FwQDDR5jNcnYpPGA",
  "key10": "65FU18eD9Jjusf5UBobNRJp4tQ7g9ZDRMMKrraNwd7adGV5KPHkbKBMTwb5T6dD2dmwv4KkYW2sBdqbuPYrL6ooQ",
  "key11": "2miurcRPaZ2J4VE3aHwXcqcZioNfoM2KVbpLDAXzkE4uSfZc67JEBAyUxFcRXeTtmUvUtnoq3rHNV4rZvCvfMttG",
  "key12": "3rdVbdDdgbecaRvDLDLvJ9UFAWTJy8Cxz4EpUS8qDudSVy18UbKu2CM7xhNcN77Uk2u2Jms9Kao8YTStuMLEi15P",
  "key13": "3Enpx7sX3jdHXuWGhaiB8nq4DKWr4c6JZYrBaqoe7SVNah4w9CwAMzbBxfiZhzm4hmQrGhSEng17ap4cdEHXUtHj",
  "key14": "3sKWN9fxnKjbyDL6E7YnZbmci6QnJSsNYVegTmJpQ8qxj5nxGpYsnzRHT6wtYtuFXmdcUKFyNv957ARdqQSTVRYW",
  "key15": "36w6w95cfgjpBuePp9kibPkKJnBEXZrVjjeNjiBckBCbonUnaD5rqVmRDAhAjKULZooe1zwsc99tuuJw8Pb7ibPU",
  "key16": "iE86MFk2YZ74xtaWNf2gQmF6mNLbU15BhdUq3shBxJLsURYCE6XgtnTKkCFeMG6mr5EDza9ArpRHRSc56VhsChC",
  "key17": "4JnTXpXX6fZJ5WYMdPPAp7oov7F829nJkH86wzwux9GoPtwrWm8e2a6hGFxcJjoihNVw2yzEt2g2VkRgCAnX4L5a",
  "key18": "2UGKMGiGRNg64UVrtYURFoeSsDxhXbGuup4G2eb6bmJ6CwYSkkR3vnSmhuspr3TchsgK91aX6a5XZ5eTAzWbrdKn",
  "key19": "3aXwu9gHUJLdMxfqyupSGdyf9Fak22YfS3KJesUbvwAANPA9B8eZ7hxSPqw3wChhm4cnbzzbu6pBeKP255sP7Cs9",
  "key20": "4QzM2DXjTMwJ4x1UyJbMv79oHrV1cnu14RAwVyRwGxMwcEZ5V2bJeojtATusQgv6YCJAUSNMg7jnSHd1UepEGeyC",
  "key21": "33yQB1WUdgxbgZAw7nsnSDToFNuDG94qHkN9qCSWAtwA93Mn3mnREb6H87Qc3f8yesuyWNnVwq3FXsJqKHSVG9WY",
  "key22": "4mTrQYqMhipgcN7WcHysjXysig91D5r1emdLdkEYDiViRTNNLvP1mdS8f519SuWEjjNbHwtkx41bXmRunTWZPkNg",
  "key23": "5U8xVbJrqHSRULjb3jQuVxrKFAnoqJk31kg9KW5jv7tcFbU2kWPQbdhuYQBJtX8v6PHnphYEKrjpcvDbSBcBjegS",
  "key24": "5cLTm5Rb9iFv4JcivCaPwtk8t5Xsq44Xc3UNN8moZt3t1eCz2UNsh5xsKMqwyQErJJGr7GTVjDfJXVjnsoEMhTMc",
  "key25": "49HTUNnmU3Ro3QwjU2g51VaPWuGCsxQP9tiYa2JUU9rvM7sMd7biCEbx6FTVPk7i1451rdY1JQJrCupeDTCXVX9Y",
  "key26": "3EGocKWyhS6qKFBZChc1PXLhPrv1agRtpwLwNmNgPHrs5Ged2hovVVo6Ks6gbrgxnReRmeLv1FnyA2sYHJFTmQ6V",
  "key27": "2MAgoLaCRG2cGokbyqed2BFm1x8W6hLZJGTza6Ws1AmizjNHcRGVFVFbwCP13kWF8WhbX2zWW22QgzU4qQojkqDd",
  "key28": "FaPkyc5vfTq9wEXp2kVMVHPnCG16jjVFtcjDzd5VU6gRQhgTes1ReaNRSymwyN6mBHaEhYjPwNL4fn8aLdGpM3j",
  "key29": "3U9xroFp7JbeYDfNq3qbnyCyFudq8qCnGiSbzLxzmidDrFoFW4ZdcWbYtLYaBaz1nbzEydwzKooMHRWk1aBH3JLB",
  "key30": "3ciKAA9mVNSg53PQHPDcKSoKjDnLo2DsCptSZS7zv5mxB5i487shM4SXKoPS9UpEfCJSW93jFhFFxhSz4YJiXVEY",
  "key31": "4Qz2b4Pysh5BYt2thxH9GDJG9tqnNDN11DfzzCRTfMzXQuVytXRyQvrd6gPsxFNswSsLmr5kNYP6Bakx4Xt6XFCk",
  "key32": "87MPzLxxeuU4WAZRVDk2rbKC6gs8veuKEkcNfBJMkp1XzdfGyvjxBhUUFBhED2pebiiw5M9UarDs2FLE9DmYCMW",
  "key33": "2FWnQzkG1BuCqPQdUNm4V2zJRExMr2ad8HtNaQBRHUsbAaftFj43RwzCB7oTrEnSaELGoXM4kPtWsAeRiVsX6R8i",
  "key34": "42qWMAjVC3jC4o8AC37njZSTe6vSLbNsZoALhh6mRJR9kcY8HPT2G6zXeo1w3N2FsA1uJxrA9w6qBhwTWyFzDpg6",
  "key35": "4amcxrCaHicKNzB1GC9yShGQkxZrVcrq8LaRuvhBnEFabeJBowVswKHturjsasKTmAm2iEHG3pNQUc2UczQZ46mS",
  "key36": "5ubz4ZfdvNzDTLBo7XAZinJDQ2Z7HmGDnD255DUoihotEAGENNFMrcizr1y42vP2gsg4FSRkehkZUQpyqazLLgz2",
  "key37": "3RMYiC4GXJHdrdH3WXEnFQhsLYdPVCfuazQRET7T2UN6WVg1DUwgSofTfBfgAjmuNbkLALDBQz5YKy7fCzjrAczT",
  "key38": "2fUatp6rirCgPme2aAsP5Yu5FpzzbNDo5VRY91C6zQBLPiHFyZgaRwRKhhL8BjQtMAfgGfLeAi6ifD8TcsktHRLv",
  "key39": "2LTZAgnCnoA2hK2Y9sG5rKo7StWKfNT6iCP6oPdb9FkNdyZTfZqpAUiUfbGzkEuRKBMK12YWXq95RRrKn2U6K9qr",
  "key40": "5Aivcba2zMfbHTrohygHKERQUvNcjNUfTaLb5ET86PGRg2cvaoeECF7ubW2Ra5M2DAaixNTF6QmMFQowQWRLUpkW",
  "key41": "5jKWLCT5ZCt2xE5SNDEgQ9zGGwagdamij5Md2TKNUvQURihFAYVbwR8z8kZPJHbQTbJqkoF74RkejP5gwDFFktoL"
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
