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
    "4vW7kKQz4oj6fsDqkhpsh9aEj2KSM4FdMCcvhquVQpeoCZFHuihjttoNGARoagMwap4zerGzBodUVm2swNRtXpuk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ENARkHnFR71Zz68Z9NHAoBT9maWtAtpxq3Nk2rPRe5RvtdFK5vSqV9uDHgVF8YgGPDeuBDMw3Y33r9mLqANQtoZ",
  "key1": "5qXqFR7czGGYyYsV3p3CjGxdX5AgBoRiXQ1HhMuX49xLFYmpodAXqkgZ1afWnS5ExffkvXPUjAuFBWvmMQa5WC7m",
  "key2": "2jxpdrt7VWhTffpYUtEQ4tTbWX8xycouP16YvY9NmU8GYdpy6QoYhnM6V9iFVW6hiswk91dwau3uQLFP3eXukCZj",
  "key3": "3gEu7rFfZbQAjxMY4eBEMo1uHj4Ja5Mo454UgXCePUYqxhWRqCzcShb2ATiy24JUpM6jB8CFMHiu2LT15JZvGajz",
  "key4": "3LUKrZVyt8FuXtHvrMBdcZhZ9CXEAnH7CEd4dwLBZwBd4BDiW8kwo7xoUetuSYMNwpj8A1PxGcYLsHvqTWxnpVet",
  "key5": "4chCq2XaVrdYpqLiUHr9PbmmtHViqs8uTvo1MwwWDeuLyuGL3bnZbDHwHScrbd4FsAcw3iayJdZgVYdFDUfxCD6Z",
  "key6": "58ikQce229has4uqcCrkmFMCrLmnxzxWRu3T6dMrrVESEQTcLu3RvSTEHCPJsd3EadHMGZWeLpL2ksWWex1JZTdu",
  "key7": "5uBLwKAhfyqy55ymjmZWVf6LhFUgSj7dFSAbgE2jAtWR8qQvMnarSSVbjuwjJ8s1RR68LDiAAYsB2NKhMwSiap2G",
  "key8": "4b5VsoyqUvNMGQDPZEnCbkH9P4pCkCUjDT9abiZ7yFJEQYH9UwvmeNKqo8F5SHuQwYSzAfd9kLLut7cvWTau7sAC",
  "key9": "2tFWACxTpG6VFZoHVvtyZn7tM8R8R1g1gUDaWw2J3Q8TVxE6RVVgCj5DH2xRLrQ7x8QNMS5y8anZaDwVwJVpfYZf",
  "key10": "3BayxxoRNx6DK8MMxDQedGFCGRf1cbuvtPVMfsMqYd82kaRBh2umXVizjM6iMsV9DFGPkvFNMZgCWbj2NqcBNib8",
  "key11": "4fYH4zE37H1LTE1SHPLuknJqRenjs8n1kirj6vTzvQKL2ZUMiWt6iV5i56yfUt1p7GnxtJWEGeyM6WeSAGwPW9Ec",
  "key12": "S5RfUtSAwvdYt5FMiSU3UcxHQw5BvBFDGFqw2wdLxh1b7BCFVPhAZbYEYoLBTS8kGMvw323Gw2x9b2M7kcSwwg2",
  "key13": "5FNr1bNyuR2ZtnxCKMpKM2MGk4vZ1nEQ7DCXrV2Eu43psxLjThKP5GLpPKbWrNFAYCW8Vr5ZKDLj8kjavmpqfebi",
  "key14": "43moqMZ4YB26dDyNkY1jyzAvpi46kKv4brsdgaKTbCADUAUgY4HuUujShHA72JbGr4eCbxMeKSZj1FAgqjdsiivd",
  "key15": "C28fn2aTM4h9GkTXymJWVkB9P6xZGu3wutsrZTjy3Lw27MjKCubi9mbxoGqRsE42nr8xR3WxCcETKECXriPDBm6",
  "key16": "iU4W8DMKLWyTJzvdR5E7a8CwFLhGRnbUwaZRaNjybMkMedx8pMn4yqvHBjpGRM9oFjYU3XoVgBSb6hSCsCyELxx",
  "key17": "63S9NEu1Xu7xNBo1zubedALMAh6dVjxp6WGgv6awA8yD5RLKcGUKNEwJCUFhpXnroLvH6fiCcHmdUiJPQWrkUJKC",
  "key18": "3BSLNSS4ZK5Et1GXZv4kCEKTWoLzro75BuiTntQWDb54KxnU9fSZtbPWvEdYzQCUrxUqzJZSmFit6ubqEnoAdR1L",
  "key19": "3Q8ZKkNrLiMJDrfDCGFrJ5Nyhdf1JYq5wNjb8Spad8d6qCC6K37smYqHgRDSxQT7S3hKwhEudqFKxekveEtymKFk",
  "key20": "3N9Enz3zSyAn3Qtvf1vkvEWoAxGcTDu45mSsmVuQyjJA9tQpt3o4gDiEFys8Nxkef1Fq4cfEwh5hfURviKusGswq",
  "key21": "21PeBYd1xvdKvssmQ6NemU1T2yFPiErkvg7NZfSbxayXs3nVHV531DGjbKKAwPz3Lu3Bxb1cJVubFtKU1hB85c3N",
  "key22": "3BaJweuhifkcc7yhzBVgj3JQFK4eoCAvpYyb5aWg3uFQTbdmdzrts2BgWTB4iWmsGNoCLptgFW6seoZLFaHRdaMf",
  "key23": "3yLYHaddXFQCh7BiSAfnyHSBxiWyRTFUou9WW3rJHDVZVjtFweN4PM1GgqhSMNGLWCLtSHRVhAHaAGtS16GuREiT",
  "key24": "5ksRqs85uBHbWuBvJT1NfnqymkJxGQq55vbW2NSQ5UWP8b92oaFkYZiw2nA8DjsC48H6VnvMGo3HaAdKPfXPuFRx",
  "key25": "5GCYwyZPdCDc9iUxSbBXwCG3tG23BS7SYpVQ8vQrHzvAd6PfESEHZKpqmkQpnVocNEbfiztVrj1BsSwEW7iBuptF",
  "key26": "41GjXFe8zfEgZ8TBe7YwBmZCXFSHtPBYxyvVgfViXxpwxwxtMGgmVviFa3BLxd9bqE9oWVhTx2nEiq87uZ91JvYY",
  "key27": "3nUbinZ13zhJcqqrfThZEQFGP4AYgMCHQrTQH74ni9yp22RCyYpEtNfAoqdGdF3uo1mnpFugvw8s4sbJuf68GBnd",
  "key28": "49h7HVueXn7cAWusrq1CmJZP5U5oKjs6x4DB6SAfakVvxpSGmoXzHCzpapQgfazXVKGcycRFyjSY4DwwNkoWesiY",
  "key29": "5kErqkGVfSLoSyDhdadxD8xncKxTQD3GpMQTjm2P9w32WyZMuqwPjgRvG5GizZbdymraEALMoJk87bkQMLRTxCR8",
  "key30": "6CwSHKwZrdrJJpbtgoUu6JNFKsTRHTkiNYHACas7HB4PPjVEbHESy5z6ZgBrzsh35BARVmEz6y8mqmUEWyMvEPJ",
  "key31": "4ZGLu2njKES36qeHBLjNepKSai84dpuo9CefU2KwHbSFMhnQmGj8JUML81r2c4NX9rdaWgZLYJzNRYDxqWUbQmN4",
  "key32": "4mUpxuus3pmJoUATpw7Zpch6jU13j8fW8YtV7ux6HkS46bRRJHUB7VpbGb8rZGeiEu7C9GWyubF2iK3xF45Vj6S8",
  "key33": "3uitvu54JL6GbsVgD1xbZEUa3ShhTADbAPFAbY4Df9CibALu4YWaA6FFq1hvtJm4FFU8suh7ut87u9bc7ALf9TyE",
  "key34": "2Lq4hyzheGkYtac4zF6ADHMJMgtK5K8KT5cNq64cg4HAhzK68zscAmzTf3baKgGzD6KTK8ZAVQ7RWPGyVGYVHjxS",
  "key35": "4moHJKbkPi4xxoMnKfYMB3Sv5w366skA1gxHbzQjiREQWFWzTm5Pzo1LpkBn29tXqshgi87JZvZpKiV88jjRAfUi",
  "key36": "4HS1JyrGNW5UdG6Xfu4XNWegeqy8713eLfyM3rNCMFcffUHdV2BUSxxCN3VbYT5PfNH93uAwn9EmZoAJr9Eop9EE",
  "key37": "2sXbnc4Titdrwp1nDJ5tZqhMqYMzcuxVCTfR2csVUzAWKKtQZCuwW8Yx8Sxgs5fhMp1NjLH23oN9aZrrWiTCuvfU",
  "key38": "4v8imLGothbpovgrAhWGpqQNJX3qpwB6S14WJtJVzfazuFYCKToEejMW5kho69NuQLyxcStLQ7nxDU9LMEnYxY9d",
  "key39": "4ChY5uu8xzavn7Kwy9dFBQNUooKeiAhhGtjn4ZPUwCCmy6GXmq1MeDUv9aj5FkjHVsqhVLe9aW1FDAF6QY8wR1Zu",
  "key40": "3GHLbRsVfn2jFhKhz6VW2zkiUrpfeU2pNK4cztaCryhihjvHudcYXdSmq9xep1tSY4qqSwjZiwri7exxJK7NoxBv",
  "key41": "5kbBpxmt6yN2hoRfF1ofyhFMiQuCZJ7z2ABfszQkPACADMUnEo5aNsC1xUmpWN8BiiXcMW62Vjv6Ra6U3FtezRWd",
  "key42": "PYLrd9nywVjJMT9WxEV4JRh7svkSN5m7BQQQKmsw2kX8wZWoyodP5rJz5sRKFGkCaqmG7j7wkUci9QLno8ivBtN",
  "key43": "45fYZifrWhwBQUA4arr2C6ywGZreWnAkHHhLtysiwgxsDkuS7yTeXnxYNv7ho8xacy4qNQxNGmqP8bE9vi8Wncoj",
  "key44": "3y7NcJwAVvmBm8R3AsLcr6MSi1EVf2cxrxE4CHHuyVoRoCYkKA9GB1bFsFaDzTEZvMibWcroH7frGevBqgHXh7gX",
  "key45": "4XChENdcqoHLjc546DVB1xmReiTmp5ZVSiKvZseT8CYr3iG6fCAosEPLRSuB1tMqfM6KZNDfRJz3vSyZHpa79qW8",
  "key46": "3S5DWoVsqM9kMpBUX1ZwyJNg6yi2yYQpG4ANVAmUwfefrd7LzpBovMN2rixaQEfnP82wtYWRG2uXWGyM8oe8r3hy",
  "key47": "2u6Y88DnoY9LiqWMct8sV7ESHgrYvjwD1Rmrwh1dAupu92CjXdkJKivejmu4D783iYxUBoCYx6i4REveXq5hjKum",
  "key48": "aKpw6ovg4NrhWjGmx7XLv3uQhWJVjXutcz4arZ42UB9eb4JTPQUpVykg2iSgGVDZX7VdGfmYH93grr5SEhB6qYU"
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
