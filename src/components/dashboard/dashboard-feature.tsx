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
    "2SyhY4JengG11Lu57WLrPBBoJHnZNvUxMibM7PW39vhjnSPKgNmNXkhFY5s3G4JrHvvkGB4JA1nCseTYTvLqQAVP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ybhe5G8bDSkQ36iqs2DCYSbWRRELbH6Wzy2R68PjndoEbqvRu3aD933PzXgU32oezZEfE5Sm3orxKJw9iPt7GqE",
  "key1": "3dBanSMqTzSN1ZZNKeZtWpPGPZXekPobvHcTHAfLkA49K1PLtCRjfR4bxb58PVDXVKoWEYsKXSxKPUbF9q2YHSVJ",
  "key2": "2mUmDvqSQPePP7RTEF13od9LCSayd9uD86hMmo56cVMfoU2oqR6sDzvLAHdzTysuzz88smSYPF1vya6j8SZsPub6",
  "key3": "gq7HFWtDsKR8NcSMCYzjxsHmyEVV1ccbnDvBFw7PBKQkqHMSSybDyuLqWzVvuJepeuNDRUjuyr6keeFzE9Hge4Y",
  "key4": "4M5p8bR7kwA1LfgAruhiLRAQs6VpLmcL7YdZogtToFXiXCnzEPTiF3JHnGrGqXtQDFmSpficQfB7govAfvhZb18g",
  "key5": "23pPusCGR3zA2r8FQdQxvGzC4QRhkWLyC3c888Duni7yZp4LsfiBZ54mYGWH24EtxvwiiXUbBrXyEnL9ywKTzgqb",
  "key6": "5WpqpPqxqfHs8hparAcjSxErEjmmR845FEptUqbgnQPZLMer4X9ADdSmRcJiv7xC7ajdC7DL5SqiJraqAaRuQN7",
  "key7": "PQt6vNYRrDCtLF6NfGCK8PdKTYhrw8RSPrM82R5quQa2aEp7sLcV21wWmrDJ3chTdoytu4K1HRc7oeRjrR7hVnY",
  "key8": "225tJCJR5HHv21DrXts4De3gWPU68ocwKB6khXgqfYpBNCm5sLAN9dw3Ak6ypSZfHPZoAezfnGHu8Vfp7PdAgANu",
  "key9": "4Xg7qLnkYteK2n79P9CR4TYyESYE67JfvMXAQtRaYbfSFfd51PVK5B5hVGMtixD6GDjti2VTvF4JeAne9vCvZSHT",
  "key10": "wpddEm9df6nwbRjYvHVBETMGyK67JT7osqtkEYhUmNrBuSFpbzLv3tvxu2XXYx6e6HvBHaA8W9GFZ8xM6BSn3rr",
  "key11": "3SRAk4RPyHy4H9tqzVnh7NBKd2UZWAznAnTymp8GinugtmVW5kuo887HLKAp454oCvzTeB33xa6EPY7bLU2fR6X3",
  "key12": "5B4k11Jf4NjefTCCrLSQ7773CQu149zFQvaYPWvZT36p42uTZnqD1roGhie5wrdtbYyAUoXmbgE4DKBAhPbcQdAF",
  "key13": "o1Zbw1rgbJaSM49BXTixi6PHEnf64Vs4mM6seNZ65nda56j2Ka5uSJg9XGJaH7Ao3c9uscDuz98wFBKvYRCv834",
  "key14": "2N12xxHumBFKPFZh3Tx2duMC47ncv18qS4f21cWGE2scbmxfrQP2cSMkAdnuEuHFXq4H5YouDWbWyQeHDUUB5znQ",
  "key15": "33XLd2Tyhhg41nAfV2cKjtH1oR5aieFKiHgZdEoiTw12Dk8x4gDikaGPH9qWteGe9qzPMsgM5pFCAianYkvQdAQW",
  "key16": "3igwZQmPctNnfLnM4sy676CUcvMi9aeSeoQMMc3PBGXEPKQZC5PmRczYRg9tmBt6B5FdfJd6VdA2SzYdiVe96Vdz",
  "key17": "4b2iQ8rDoVgD4EB3q62EDZPApf4EDPJiTgREyz2d2ohFqgQmzLM6hv31yJnJKc1CE1JKSRrbf9gSDoLQo5qwuFmC",
  "key18": "9vVPjL2WGmfAzebjQhcnVWGSaEkV55o4Hbat9sjXUrjbvj8epwVWpQSkubocGKV13wv3hDUpogN4xWL9x4WGeLx",
  "key19": "67kcV8qPQMM4ug2yYCPvC1huGDVtG11vUXuFPzSpMB2NKTEjEHdtSh9yybsAJ8HJNSDUs2vXAgNKmj3i8vHfYduq",
  "key20": "MykoVc5UzeUdnANHfmhtQxJq5q2DdnkBdfKHSUADRWJMy9bDP6UsaDuBtYBmzaACLj4vs4DaeRFSY57X4etSJok",
  "key21": "2ysmvGvZAtXXx2DiZtYony1YjE6vBbxR96b5Q5bUQnFHdTr4jBxViGbDhxdMMpQAe6peL1ADYHZqdnXDHXQ9fCrQ",
  "key22": "GpxG1YqGWEWcUjwinjg363ADsMAmS8u2Ao2Jg6cysucmJK6tvJTdyyQ3yHyY5ssbBxi5Ds9c5VcZgsHr1JL5Cjr",
  "key23": "3rwM76VCehccMgxEd2DNWBBMExcMcZPwZ8BY9CaPt9TRCAK1H9KKpyfZiBff9XpZ41o3Ew7Kd4KwcWdDMYeMeymf",
  "key24": "272rK7JQr9vnnJmJdHG1Lvr7UWaK9Jp7SdsaJ6sMBG9iqKvKcM4HhHYHSSx4J9eGjN7eNnitQfUFzuJro5qMXsoB",
  "key25": "3c6R1Q6hL9KbtvNAuagBvZZNw1YtzRxNb3qokSpphQcinf5dxYhTx7u3WnHp3AkWYRfoajER4KxeFbPwgNbfqufV",
  "key26": "5GDXfinpQhhWu46BLGh3x8rgdeiX5amimVPqor8S18dqhNHartnBEaMSGGXc6CG4PbXJfLtsNpoqMNctPbKG9bU2",
  "key27": "3WHbWBhTYeMAtnEhfF3tSTfw12FGNaU5EPHAN6hpqWuakpbEpLXBEJJNZkJ11DFGxi5RedUy2cFPU4sUE953tWT5",
  "key28": "2tPRxRiJDY5NX8srwY9ubimgAqqaBeXe7d2d2btxNAvFWTBrbL8XKwXdVv9mYWx6mKGBMK8oZYMM79KvCvQGsRAg",
  "key29": "krxKW2kMXRJFZ1PNjyLqvzRoqenaoykmUeVSvi4Ln3uENrfEVAG1uZxrssH6n299pfKT5PfQV9gmpXRJtmJgivG",
  "key30": "59bQogUmof4g4Fejdm2GGYz9AuzN4fKC62J91CNVY1NzngFmhr3Uzn8yThLUNBim1QjtDv2Ae4LT4P7fHKGJ89aB",
  "key31": "4qKNPJdAbQWXetxUpi3yov3T8gcQQQxYkZzC3ddQwCDHkA7ACvUVbVBbFJQ99yDPZ8hgkAz4LXNMqrq51v5VQg5V",
  "key32": "brB238cJ9Un6NAYC5Ak6xpvxnFjTMYtYAW1PtEWWTXKE22T5ufgiaBQz2XHS9u1afkzZMqZYYGnKcP86YS33CT9",
  "key33": "4Cpku74XUQuLCAJWEGZzNfwRf5g63MSDkiqC8UxTCBfhQ5Fgty3vZApojdGDwjbQy1St7SaKjNyL3CusQvynJAyP",
  "key34": "3ufPoHm7yTDdkw7NTeUWwx2oVTpMcJBZ8RRmMGSkBKoqcn9HuLBdejMEEnggVKFftgUBhDzK46k5W678vyUXCzSR",
  "key35": "4A9j72CknBpYwFXWNuTjdfLYXu6vrHA2jzTamHcdWxDj1rABmisPxwCd3yVJSyi3WTSRJTr5QMEGYaiNFJUbk3zd",
  "key36": "3xyLtqp4AfXciQ5z32SN8EB23YuVpFRQ1YEN5XfLfn3FvnV1uEXwchroHtb9qX2F7sPnxWSSifSh9oeAs3DLsmiU",
  "key37": "2wALkmFpAAigBVhgVhg5CMYswbQzGpA9kAurjg68Zz87xT1FcK2Z84e4QtDCgcsXSb1rdLDR1EHJbqUQMB8yNwce",
  "key38": "3p8TCnGzEhU4krcGmZA8mb21hQfWjhaPVfsywSPqd6EacSGWFujHAyh2BDAWYC7LP7P1977papd78VzncRrRkVw1",
  "key39": "jrJrfzLrRfEhNpus8GcZ1gAZBY9bXWLKKCDEuKCF8hJkjWkyCveM8MN9zMj2YKBteW3yibnb5p5Nuj2hToNhs2g",
  "key40": "3LrqrBWEwPdwiKEfa7ZeScEQmsRfYhf8QmhHxNQLcfC1uYncD5Bop83C9XN6vwMsfLtyQxqh6JmtAyZjM29j8CDn",
  "key41": "pLFmhGEbJS9dPbJxUwanW9fpqMVMisYsNBjYEezffoTdRVmX92QrDmTpTHjR1dG6JrGcBREtBhCvSCnGdxHNpj2"
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
