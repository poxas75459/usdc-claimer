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
    "24KgMuY9HWDyezXMqzR76DAWbjwrvsreJvCHbVRYkW9vaJvGMeeWMvspUL9tXkR7xEM8o67zHQEY1aHwCxPf9sNN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mdvj3nZfc8UcSejRq6bmRzYkkj7aVDnByEysEsfDjDDySJbCfN7jE3Ur2kbgc3Z4G6SrFZDuAQAZe4yC7iQXzVf",
  "key1": "5q2LTHXMkJRMzH8n7ZMxeu2dDcpfnhjuGZSEJWFjJ7cfLgHFq3hVxd8axoa4iPXa6F8oDyUxJq26xCri53VWHRJT",
  "key2": "4osr4rrTsNuacKWWfA9MjwZ4YcnmigxCXwxxfdThp6TPbv3vMQwrZxhvBb1oekg7ratrwfvX2uADQnGbXXdwoQuy",
  "key3": "4oYQyueyNAESpKHcGLU7Wks8sfrsdi22w7P5KNmv3uT3qKaJDhgNpj7y3AhoavZ7Rmg8SdWiJ8s59PqfqnsZkGi5",
  "key4": "55SsCE7Eb7xQh5edRYbfzJWRJTunK9vFB5J6iVSAa75MhC5aWbAMC2D1STzB6WMKm8srPy1sxHUrxKKRcV6mee6w",
  "key5": "23kVCfzsmDL7UziSvmAoAtfjeahdVX86qx4iVbVNRcoTi8XJdZ7176bnbzY4vfcDGjnykgympii7HPRv65z6sCja",
  "key6": "2YSzx16dkNK4NM6fNM39ZiZ4MWmSHnRiVcm4yTeDjVtgbUVfDKHZgiEmXGHwjfVWRnYNwqxyr5xQCSHG1ShyLtdt",
  "key7": "4iBacbz3Je4LbwDkQAkV6sHNGScLPdWQV2cgmxEiM9FFDDvjyFwDWn7LjdMGzt6x41h1anUyALdePuwYagw3VY1b",
  "key8": "3BQXmwseD7iFg2zKE9EnkrRmhjz3MQSig7ceMGhC9XEj6VTEu5ga7WjsDoAw32fbrNPUZhcPnyG87eybYhD6cKqP",
  "key9": "3SGMM1ek51yvRuExMSog4tSPo76rK4DVM4NYTvLpAgmoHB9cLm1FJMt1PapiuCZ324MvGZV3Zj2J1hXTD7tCShsn",
  "key10": "4cTkmCM31u1NTm32hPM8iGnNHHKc5pM8E7aRVVPwM6edd8MsEtSnNKjvZ8XWkUyDB5xBeZxQezRnQH4JuUEod4gA",
  "key11": "43RkDP4Baw3XAe4dvpeDfXGpx6TaGsbrjfgR52356voVQ8YjMWHpSyBbFfkJPnnyDwSPpPribj9vkY4L6tXWeKe9",
  "key12": "g932cdrDvH6mYCsGAGr6zdhTGWqPqjryYtFSLHxzjfU37t5o8CVisnncsLDr1yzFQGaLSVJmrQLtVrKoY8wprJn",
  "key13": "c4m5Gq1CFm4fdxNJS9sjXCzbY8wH8AhD4qeUsFbBRYHc1qXrY2ZuFJfseQhSiC1fPikhis4UbgemgfmDcjyma9A",
  "key14": "5T2JnQNnyTScHMB1uyUtzzU1gz2wYcKFcBVTnq8zJZ4DLJMD2zg4AN1W6ykBjNTFHXuKeg56BynMmkVzpY6FzrBF",
  "key15": "xSXmAgwHaYfsC4yy4woWWNTHkCHLPp36yGioKnJxRsKvVYiySCywVio3Avp7GC52UA74zFxkzWbsNEDEjSQLNqN",
  "key16": "4fzzwz2TqvjSBzwE8bNnms58VE32iE1wYHoLcoTVXYHwkasqLxHDsEBYiT2ehQYrt8GE8vkcTfgErS9c2aNXLS4Y",
  "key17": "3KZ54KfiJcMCXP7woDQJSCe82enYixHCZgodkY1f2Y2CujRpo2RGo22LrvEKZrSHMS71TynEXp6SHLyqEJCupmiD",
  "key18": "4fRrz764Vhfvj5L4wqfTU4sWpgEsnhhtFvYB86JBMkVThWHe3kCzSJ8PCNCZmZ1i6WB5NXzYct5BfQuyBmPhsL7u",
  "key19": "2GNDrBKjpdEycArWvU9pL7UCJ1EM1eC2kQcfUYeQ3L4Q2Zcp8fCEHJqwy2JwHgvbL9rjeBLHVHogqx8rptiFmJAj",
  "key20": "4RSrYupba6TxLyxRkVt9mBmUqJa5HZFKKh7TjeCGKggAA6LzVqM5Gwryx9M4jYjcfJ7Qm2xoqjcwHRdBjCHUQcaq",
  "key21": "3QLcXSb8soMUVWUiaM8p2CZHjNb9xRGK9h6zntCcD3hdXDLRjSbVc2EPUj2vfSQvQZ2JVEMULJSHmur7SvR3p5R6",
  "key22": "4npCs1eZd5SdhK35AGvMJH9FDwmVke7NRsAorN5UYkJ75cczdRh8gRY57s8XcHbhb6pP2Byz6vHh9XSx6WGkR9N5",
  "key23": "3PfKtKJjmSaAj9c1KgJBcUt2ByeizCQuiF8hN86LpaHYpspVuTfSunCQWjsetSWv6uVo8Cjno186vgXDEBsNkjqG",
  "key24": "5BoegUxiY9q7ZnNiFJ6JdBW4spthFePvLn7DDxubZ4sR1MFYjyLyqXUqCDLDowHZSG29MAGvKwyu3WM41ps8V4D6",
  "key25": "311NFDNxWrvj4DwyYbszZcRovg6bQWb9CebSkgQNGrgTYd79iTTwkdPsnufFf51qkHT1xKVKj7d5ukYp3jTQt9Uj",
  "key26": "3gDZQAt6tp11iJfoRDMziHTgCrD9YCsY3CEjSXVZT4aJ9H4zbHbsQZE87oFpoojo1jr8nqtFgNkhomJurKHWpNVm",
  "key27": "4imJoLbc34BrUXBVrPz4N4DgFAfAZV76ak6iz8YwcQEcyGM64kpbCdLjHDSBRTz7qQnV3uPaYgQ1PGxYRB8z4UJA",
  "key28": "3mqs6LwoM1h9XcQtpNjS3B8e9hQpRo3ign2ZNmTnmhw84Ly7RSuMYgowJWufb9tFD54poZBnp4shnktSF3S5PetZ",
  "key29": "4kA31cYs7XxymoR89L2pLHEfynQjoV9bfMGN6TbnFy1Uc6xY8kqEHE8VCVvPNoEAoR85hHbAAHAWKPEdPCzSpDgt",
  "key30": "5hcZNCBDqZZFdzCkLyuxF66v8Cug7wq3oRmmHGCCSk3Ygo578ELzmr3tYFc1Hit2jk4uXBF3oH6p3UsPoQpRRHcR",
  "key31": "4o6g62zoCKRyx1aP6dW4NA38ntbrd9YNwYeGqMWK3QDZP6wE6qX2krbWKMML3yYJostUc9WBvgsHGbS2UNsxbBaL",
  "key32": "31uMaNW7yYxb5ZcjfdVfGJ3bx1mqbmUyDmM6AKwyjJSbMXSz5bLLXjCF9LpUmQLLjt8fBVX6FWAio83QjuLTJN1H",
  "key33": "632MKnqgHjUdYhLKM2RNTGARa6JdG9VgQQeWaXMN436oVq2oTkNQctxumj4ikwKFYKYBx6brcnJ1G35k4ajKZ4AB",
  "key34": "rkLyHT2NU6oM7e9aV4ca5kHyczj4D4G9JxX5ywhQnDs2YbWr9bCGCADUF9GVaLoGfEjxkVtE134rmCvcVQzGxpE",
  "key35": "kz7HHZqAAbqHkPpJ37FDqWo1oPxoaLX1UR3iTLBkCFM7ebcT5vsKfwnjqdJTwBa2NYdVBdRjh9atAbx14MDNFWF",
  "key36": "nuv7o1ZcPoQZ7ceBzkM2bS6CoRu7TFgTQaMSwoM4fd4ZcgrV2XeGzRzqfXTWE8E7uuwoLWkL8bDuRs4NFVPMcRu",
  "key37": "46z5enEqBmuvG6hgxvF9PjTu5ZugVdnFCLQqFwyxk7PbFpcCUx687wUMjqYoocMVSbpNyVa277sHSTFDy5BpQoaF",
  "key38": "3nFpMztxBjsuHfzg2B3E2AGpr1BQVYZZpUvdtrhNiC4Pj9XmHNoL4kdFEvaQ2MUBXpzsYDRusHPXXSPGaPukwvr7",
  "key39": "65BJ3M8vbfpvJgmXDi77x4gFAhxNeeGyBmvgYfhTvVLj3F7Q9AMxBSe18cscy9M15SzAauxCZ6gwd8ZHtnNPFrRw",
  "key40": "3Q9AFXP17xWDLotnsEEW76apKuq55fr14hHpbYTeAccWXj1vK6XjLkGuvEn2DzdERQVwFNuY2v6bz1AZZ2jNKiTu",
  "key41": "8nuMadyWN7KBXtawk9J6zTVJpcRtZtvb9mderAMPTUTMowkP6tLecvTV7zW96RZvhJndN9mzfAB8AoCfPEfES6W",
  "key42": "3sXmRZa8uyfXPyuDfEPDJS4KUUyBAR8yvQ91hBtkzHXwGzG6mUGzByCmPNUakrn5Mz5XmxPKBfdKVCZGuKSLRNZu",
  "key43": "56LwXkr3Sbf1Xi687sYvFoaAFYkNd4jt3zafDth2v1XkVaomXn7r8rjA1UanvBVhRiTijv7XAfTHFaaJnMjdLStu",
  "key44": "4YHHXdptGhgZYnfaytKWQjqJnFgRsEyiAg7oLCE9P5BWATMK7qAGSWest2ewJbtMiaxt1vgtpoXQ6X7oXRTTvdaS",
  "key45": "2sq5YeUmMw8k6NBsNc3aduPYAsL5uYo8yJqBriDCZ6xhH43jqEY7zvTN6mYFsAe9ixbZjviLUEEmT4JgeNAfsV5B",
  "key46": "kYKCqbH2WEqXgd645bRSqYdviPCJZSx6L5mV8p8iDpdvvDmbWkst6yJL2WuKfTMrCNpxVLZSai3VsFpTgzwspc4",
  "key47": "aWvPRJME2g1zYbJW6oAmuBVzV2RrmpGnJton74KoBFa9oDEmF5fnJEGaNM2FoTK12CYiBM4s6GAptGXMc1wt1Df"
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
