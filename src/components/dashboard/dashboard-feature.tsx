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
    "38oW9Ugr5YScRh4GBRiMA16CjtynctSnRXjRQXfA4omHLDNzZ6r7jLCcDmVoUKWpNw67yFhgM6KUQJbcJtAbQBZy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BDNZCcfUYURK7QgEovwrm2KZNpgFYZ4TXGbgSCafgVodQhBuV2jtadHcUmm9Aq54QKm7tpyXPLTVVLD3WVoEBhX",
  "key1": "24N6TE7KVJ7dLCfMJdMFvediNr3XRWivdfynq1MzPPeAiu9NJAZUHySWGYgYvSwHAji6n3LqdomtmxP1pLNhgbVS",
  "key2": "dzeYbvEjwjm9LPb7sSUxCFGYAzTrtSXYnqt5HCrjECjYNvQ7XHj6TnxcqrjtiM79ZSUxGazMkh5nz8i81KFstVS",
  "key3": "3qteVfSrikdCrGwYJsnGZASS1ztB6AR8VZ53gneALCgSUL4w453APFm2DEmBThnu32PaQcHsY2osydttgviDSAxw",
  "key4": "5hiXoQLrsbUWGe9w2MnNNbnRe83DZbR7YyS8dhVDgbSTXnK4chJcrCFgjpjEecpW84Zs3vz8CLi5aQLTXorSg58C",
  "key5": "2bYCATbrVAjwnjbNQ6eYuTJA36a9DqTwUhhKbiWwAqd5AyHZ2ZnkwQFC9h1SNH2cpVN85QwqbSZ6oYpBxqFP8bRC",
  "key6": "2J4zHGkCd3AsnJgjrQ2bFMtBKTumjpGvjyjZSNUT9znmCbTjYMT6h4CY6j5tG21EGdoZaYQ2513dv74J5CsH4Q7d",
  "key7": "4mix3BUu1GVFHsScWLwQLMHnTXVJTyKxahubsdBdC1xiQQZjhQbVihBBomei6LQ3wjqUxHXGqTBrTZtwf3YvWeSK",
  "key8": "54hXxgGBrdR3wQ7Se4DEhTUDRFbATYFg2oCyLn26gpTZCFVHUa1WNvTcNQvxmBD841LXZXhDpQPET2bWgSXwhtG4",
  "key9": "483otENEBwCDjSUTcXwGquGxoUPN6iU6ccvrg31BGM7x4zTsNrDjUurMubDi67XsZnKYahdgAeUPiroqWfrfjjC4",
  "key10": "4TTwXyk4chFTSKz9Wcd9EwY87kJAurD9vbVBsK6PURhgPD6ZiZvo29ySEAMz7u9yoZcpJusm9JMYiEJw1wcVFAc9",
  "key11": "MtVs6GLdVpLhgTPW6AZ72mATLStrjtphZzKh36ad9AV67QnZvVWPadGKoftUZipGFqXUXiHf8j2YEXZ86K3HQuz",
  "key12": "44onthoCXpuugYB73CuFYvczgWsxrpGe3rsm12haN84oK3fegVv6MU62KBXWDgDYXSvFVHhWYnkcXQn4W15FwSQ2",
  "key13": "3GBiDZhadRrsrNJtRpW5SKcu81pisUDbM9CAXqR9s16K7XfTtfadGAjndyaX7YNEhbmn6uJuznY6uFgDRRDLx6nE",
  "key14": "2V2CQLdhpFnMATvPZ5L7a5yFvXTNwKxbQfrwTft35BV2ACh8nq3EVyymE3xMuL2yjcubW9CkmYjUmwqA8Z8fmAdK",
  "key15": "2aG7cBiPJA41SE55N9fL66Kn2UWFFkNtfxuTHuWXB4P5tBi6obXH8hAPHc2g67KUD8b2CCdgkoZz6qgRDpwiSFQf",
  "key16": "41NHnpCgjCfMwgpj6KhdMBbkEda3xrZnBZ2aAWE31McCNmLBDWMiR6qaxPW8sjhxwkEmMYF7c6LfZa8bw2QjAMmi",
  "key17": "3K9ehY68sr7h3rbxUscEBC8UPb1x91WriFtt91c8R2dnQt92oCMVK1Nn8XeJdh9XnEfpWTfij4VTTpZP6HBSvbSN",
  "key18": "2w5P4Kn3r4J15EW6BDtadP2fXEwdLArSeasDNs2mwZxkDUpWNe8Zit9zAfaCKQVAPAd5CGjzH1MZuqDEuXwKpGLj",
  "key19": "8yZVf4kQtiygcfiabYtwDHmTUG3GRjD7UmekNkkeX76EN4W1UaNev3HJPKob8dAtbRSr4PVSk7U3RPLj4ZriyMf",
  "key20": "BiDCRvQbpKeeSGSzaJsVbfFuhvF6n84dqhz5AA3GYAGPWwoWEvYs9aDzKU8BbFF8FUZ9mCAzy7QeFEy8od5mEPN",
  "key21": "o44LjabPmUgh5eBpr3qZvk4qEsZuuku9XsCir2GeJFifwqezQVBtrQyfqbfz6NfM1xccgjUCbjFTXWdRJeGFhVZ",
  "key22": "4n49r941p4u2MY9Rtc6GeNso8x7KTA8ZiziN3BFtKyviAsRYS1Fdsb52VtsW6mShi5fr9Ns3DGyCi9CJF8YyT6ac",
  "key23": "56aBwwcWRq3NPXt3hmLXUgnoA7bVzMgJYPnxL7CXh7uxuAPv5YeTbNaBQUoUJfR8Ek1UcyXgH7m2rwyvGNHmVYAz",
  "key24": "2k7XmVAmMB1stenHaH88UXKE4mRb8p92pTWf652XEUbDqhGQQsho1oCJCaBChi5ArMUMUAvgjGtJEd2m7P74avcm",
  "key25": "3vj2JwyWtayk4mCPVzQSQdYy5jfe9aM7vu7aA1FqXr6jAe4zuDM2QcxeKL8qTHnq4uFSkz3jvGBdXREvb7C9vFaB",
  "key26": "FPes7WfMrykeBdKsiGdQknzVq3seAfrcPi8uJem1q5mMmGucPBDZCwgEaUwbyPCZ2QGRzdxTGMJQV6PbV3HbNd6",
  "key27": "5rYRJL1HXLekw2wcZwng26t24kxPzmkBBoDLTBsWLuDfWhJYAs1fjVK1vY5J9nrK6UEX6X2T2jcYVxeD2rrFbK5F",
  "key28": "26SUBUDCL9usCptq2HSfXAeAWXCpPtqbFVLhdzyR4rL5785DPo6WGXFEZAJbDGPJpKL6t2peLM9g25Hn7SXvHR4B",
  "key29": "3j3mfzPUvDZeNkVsSs2rHKsjQGVqJh9UTyjndiZBu8oiyBDR8Cx2qgUa5pqFu4qC4YPEW9M9pvrRxPuCSyCyZ8YW",
  "key30": "3XegTTvM5KZ8TmAqDbM2PxUW3n3Vkr3QMgVWQ3rXKGge2cNyGCXzM5G166QaimstUmUZeHJSwa8L7pAW4w8x5kXA",
  "key31": "4Y2RzsujwZdiyySCWLrtnec4dTpjkBiSeUZ1psBuAmeB9VKguF9rcAzyDLDVar8oSupJh1WnGYLZACHjNofjzUUw",
  "key32": "3UCR25mdNBR84qHaxWpwNb43KD7M8RHA4vpdxvSMmqYyzGGc3g67UYk6QRDdbHVyqpTUHk9G8Utj8CYe8A1EYFLF",
  "key33": "2v7HVguZAK8iAkhipcxeBSdkbEdrLeQovnLvULArG7NGRTh9cc4SmGideaCYuKxD7tbSaxoRxQXqtC8NGQ1MPpV6",
  "key34": "4t1njh5HiUGbDo11B5gVWdxxSr4mEX3HWbr6X7MS686hk2aywK64PbUsjy7zddrgpBS5oS4vN4u2zP9oNRdyFmYT",
  "key35": "25uH4LWLgXVndTZM1g4E8aQfnf6XAxg8zc7K6Wz9dFk5ZpSEVdWuTcJHsYNFbuZ63spuaRuCLFKqmJjsMDEEm41t",
  "key36": "5scm8kEvm8L8RkjYJvZztXQ5xX15ov1mhdRjoeu7L8XCpug3xUyzRuTJck4WwuLLT1v8Ud3k3e8agQeNo5SgCcAi",
  "key37": "2B481avakU82rcYd3F3pAiAbm5JTNdArxczwtQsM4WebX9PskQkuwXkwmgp9PshBfesmLFHTq2J4nzcFt8QjLHsa",
  "key38": "47o2PJeSYkjeiWjmMTEZtVDw6ANbPhGMEp1Aej2sBo6Vd8rsk2uqd9vRxHSZfuWscFTP7nJqHgsAZtT66PSh8Gic",
  "key39": "3zxk8Lyih6DN2bwHZKfJWhSwJT4n4c3ypLPUYvtyoUhzHXbZARGHJB96c5rjjZQMwsh5j6afz8rc2GxpF61ErEqA",
  "key40": "3vDaBNM3RMTekGCuRGQbNvmaKVNjYwkzCQ23B3aT7bRSabxqoB5oupeSZboP6U9DCqea6fC6RM3pydTRHYQ6ruQw",
  "key41": "3M4Qsh3FqjBiuuseMGcNBFK54JMUsv82tvxivdkEHHBYG4V28y3U3exqbZZJWresxDAJE8D2J4hMg8VQiABadorK",
  "key42": "2Cix6V2nCboc7FXYbpjftDT32C4ZjN7Ki6GFAURWdWMtn2SXxFm1MnQoew9cWG25Tbqayidtd8GYGtPHg1Y8uMVJ",
  "key43": "39YnohMQyThBHV77YAySnkqwLTK8jh7vddtFXSVnCLkgdSiARM5AAxaNPGZZzUTPxnYBnpyVgsiym7k24AbQWj5d",
  "key44": "Mywct4GC6HiP25dFdZErW9YBRbk3unfm7wbBaL2cLNzZUYZcE1KGeRMWDXBJnqhWsRT9TbT3Kiw1anA5zRL6Am4",
  "key45": "NeTbVtbPH3FjvRNoAP3dembKoEMGsM2pLpmpKmr7ZiAoz3ak29w8gN1YPRPKrTTvkUR7KjCTHtazeYkqdGYq2Ev",
  "key46": "2A5mMF9vRYzfT7JekQ9yrrEMGaoQhfv5Q8hFrBLQ3jF5Tn4pztqbXAq2fGBuSFf3o92RTz2jVZcsghqJv8KUCUCm",
  "key47": "2bqeJ31oFgncaMmnxn1XmwbuaJVu6Y3PYhV3RdQLMeVLJnwR4hcmbtb9Vv23pncRsqiatbnLHfew88p7RKbGB6Q1",
  "key48": "3p5MmTFT2tMhcnukQEn81HNsxFEWiVot5EogZFNH2wZJi6qXSdZMjwHQVwyELWG36DjGgM9vNRm9YLhpJRH6uti5",
  "key49": "5cUFyZYs6U6wiYKnftnddHpWZLbVj7RYg3Przpwg59cKGjj3nxsG9iMZaS2EcLwwDaZvJDCyJsyxk8vUgBrhV9yM"
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
