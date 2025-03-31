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
    "21MBENRSKj6SxQagz7p9xUHeHR1k8qZrGU7t16JkeQ2upaGPyVEHKoVeAEsVB2CMeTUUC3UPdczTHJdQqvK2hLCq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P6y4sdPXCMuTcVCU4hiWtk52romTxghanEiNqtGd7h46sWs5mG5sWWQnpkVFGPc54NRufV7Jo6SEZNMW4ofrmd3",
  "key1": "4VbJTWCJ5vYi2jLA41LFrcKoBbweSeMATeeftwm38v1FqWkJJhpGXp8wPfrJa3Ae1scoBxJwdNoPTQ5xvCa1bxG6",
  "key2": "66Pf5kTn7esmiDaAGfh1Jz1pQCa7nkrqVnKJ6nzXPspVuEUnZRqyX4VDbpJUwfThat6mLYARhxhGDJNbiDBeRG73",
  "key3": "3oXVUYWr3z49XpgTQieQmwZCFGJqvbXZyBvBqjwW1AaH1nSSUyCkABJApTchPiC27AZKBreVres9R9DtH3Acdaam",
  "key4": "5PUdY9icmw7b8DtQNX6ATYC4sSR3qhYL6WgC418RbP8zcXo4y5tiLJYAp2WeAeep7RPmRtBZYLWt6ZbmKFjY7Hd8",
  "key5": "qW6NDnwNQMKNMZ5R3C2WYpTiLpZg6raLHuvt643hNryxtvcXRV65ahYwA5Zbu8cbBJir54pPYJ7fXAc7BdjPAoD",
  "key6": "57dcTg2CMdjV2UUHsaSnkEwyypXdABWV9CdB1hZY3Bd4aFaV6BeGJeTwYjsHqHaGdLeGyjXQNC2Z44ERtCTrs6ZG",
  "key7": "3qBYoTNW2X3Kf2nnWz95qU9m3Bew6edKeq8D8yc7sFPKzRNAssVkxt7ujL53cmH1YCJ98zNJm9rosb5SD6xJqX2z",
  "key8": "2JfjNcYbFKFsjoTLuaDyEjWzDi1mh9q8qZiz3rMUAu89KiDUHwv9z7bJC3oEgsXYtgASdESw63sW68wLMfpWXteF",
  "key9": "4nkvyFpHcWeoPKhJ4Y5kmn2Z3w8TWi81d72Ygz8kc2R14nPj56iYUJFbZog3UQS8zvVouvxDdQ2i7aWH2eRS44XE",
  "key10": "3K5CoRPNbRMp5jJfoAKQZWNML6RdZ36esauCtKWMejZKfU6zxV1Ts8eQ7qoArbhDYpnUnC9gcBSq48RKTtEKT5Mx",
  "key11": "4eqJ7x8xkHsPrr7znyNkP1hSWqFHXnXzHjd3SJNgfCAeCF7Z1q8PB6UzsMNjLkJpYx13ydPAmnr9fVCpV5PaDZRx",
  "key12": "3JjH7mDjpFWiSB7bYGZqCsJ3zrJJ7p1BuNQvHmbx24DL3XWnvdttzLo6M5LJ2NWJBy3d2HQbQ3wV95EiYtPcTvRJ",
  "key13": "5aUTpMwk7QkgYVXWPK683Mnwd9gY8iMeu9MTu8fsJs4EEcW2XPUcFaDuLuigimCNZ9w7WDoPDydSBVATRCtdRGvq",
  "key14": "2vC9Q3DqPGg9cNtQ5fqkCx5nYFVrCUq57upur6mRCgKmzFGZHBFRUXJ11wjX7F2iGVQUSyz49e6efQhkMF4UCQQx",
  "key15": "3SFpAc2jN4p29s9wha6VkqZYRjqH1ue9FTbDwYmbZePEas4ce9b4XM3pMABk6x5TTjB9ozmL4DJLdm6fQidWdKEv",
  "key16": "2hb59dTmmohkes9fqgkjMFJjMhK33XVh7U9srcB5VYt6pmsPZWxBnxJ4eiGMA6hGWPYXed1F3pZszYZE1uqgTf77",
  "key17": "j2kBuRdCMy33WxrYvmtrHN5zHaVtAppiDNvMcgRFG6XaEWEgniSUFnDZodSLoqsxaD3qkc5HGboDxBUdewqFr3f",
  "key18": "4FkseeUA4m1pphd7S6bC5YKcj3ksvjtUWLxGJ6jWAAFnHZHwZVndpe8dGuv2NGoAtZPoNLot8mhV8hTMKzDijnWp",
  "key19": "3pSK6p2fBvKuk4ZHmWmqA88evwWCvqyMEqfvJa64z3sFScQbDRqkjWS7UaMEfrVCrWdPTHX4Rje91xQjyNzSuAr8",
  "key20": "224DciZUAQd3cXKEXBkZRwpGTinqXws92uW2iw4bVdqxTmu1B48QuXDiq8P8ftDC7ourexbrp8J97RAwUyYbB3PW",
  "key21": "4WhsebdPYLpdEVSqvyma6Vd5XtTS91LRDCrxyjZYZPRhvoQEM2rZGXb3m2gTRc2V7chGquN1opQ6Sft5eQpgzGNE",
  "key22": "3ciAJUcVobM3BjQDkYNVWCDYn8arSdjekWkKyp3WDKwYeZfnCftTNWTXAybUHw4KkAtsKwxqTtsLCaBgCUHeaj4q",
  "key23": "27qteKUM1NuxdawjXRhSRUGwisYcqoZcknCzBLHM1F8fT4dXic64cTSZYXcJ3sUWkWJDUEHaXAwn98JSZMzkiKNz",
  "key24": "5Lw9pxcW39d3D2pYSKLuCqgmMpH886bXAgMLskcBXDgLPPnLTZH7JomJczk8TuHDyWdfEXtMVAY8nkoAJjhETn8R",
  "key25": "5de1ToV1x2a1S3bmKMyiDZdhqmvvU4D67uRB9h6dWkiyP4dyf9rF1HZrnoBSJQaRR9trHEqkLLUf7P3na9pmNAus",
  "key26": "2w9wgcSfcKUeB4EHAbFVa4Rx6T2wkMKt2Z4i4ouq5F62SsEfJsxpVrmJoDmiPa9Lhq9GF4dMkJxfTNMVFMsJKDVF",
  "key27": "42AxiU9ev5jwCXR2nPWUDf9qGdim4bWtWEmWSoxwaxYeJYheTNdsih1xg749T4zbjfFLG1MGMZHQtjRCsWtdXY1g",
  "key28": "5ARh2Y4jfnr3JpA73fELM6iv8atjubWLj2JxgLaENpPijAPsedkefvSUgvkCoNQzZ7Y141TJnhKUDGV7QSBVj9sa",
  "key29": "5tefgTsCngMjpA45HovPNUcV7ptDdXH9KwNM1QMsrVWYp22b3ECBJD7jJwriqP5VF2WcgWLTGYsv1Fq8FgNR6Cy2",
  "key30": "3z2KGj3NgYXWsLcgu1fiuRggHXP6DyVoUrE7qhdkF5dY79LXhebAQSdky79iuo1SR647roSQR3ncnDJwCZjpJqFq",
  "key31": "5JB2zGD5hyn1vjcFXfoDJsXZdtUBbGQyDgiNwikz6Cuiwdt2yFcqBsJiZQjUeneRtJb5kKWtwu8qUz4RX2jHQmRV",
  "key32": "2rYd6QeuEfAGHprfD3VBzwCd4JYuDZyQbTW1TWLf6DGytrRoQRTdt2noaV1NQUmhLdBf9ZFmiixn5GsFKdvHkTqi",
  "key33": "67Zsnzdp74CCtcRJMzK2scsaEiqmbJq45roj3UzcCFoWsv3xxpmQHjHGtTCDXpnxuYhvs4MRRkDvCTvWurPhnpJq",
  "key34": "9enEuhibjTtDDxmKwRmVxZayZZLborLVCPCrpoQQHJQ6TKjzLebvJVmcVkT5i2AVsjDTCbGaTqumDNGjp9oiYmC",
  "key35": "qbbfAcHj8FweXe76ycqs4pD5RGPpXVEWx3ZAd5bBGgp49djiW8toU3rxvynaHSZN2UsQKHbbmtkEsoDwAyaQpY5",
  "key36": "5myGFwZ6GL2N51KgT2a8EgNs5HaVMvNi7QV1iwGHpqEFVNLKmqDDXQ6XPreBV6MQffA1VS9KiTdWVbZBgZW2p3iY",
  "key37": "4QebbGqyv1NHUt5WkiQgsiH1gvJGYByx573p3UuEWyP4qBv1TZzVYvuy8xh1uKDAeY4k5eTtaBLoJHUPx9T9h2j2",
  "key38": "k3oJYLSceF1UoH7CbYPfQFh3cbnRu2DkwqHtYgUQcp2KoKQRUdxthAHWuCow47wuEiSYiTKBbVEDW2paMARWTkj",
  "key39": "47T2NoFLwW58HfDKH9ZPA5QSm7azb9GMXUZGwN4pXapGxv75u3hCmequV3Z3JdNqpLTkf7w5RBrYeCFfeyQ3tG7t",
  "key40": "4TUSeavFD4YKwFvRAt6VCEjT7iyc3dQ7srfv26SAaEumgXr4788gqvreyyiKFC14A5G4mmRdfxdcHZLFC3Au7xsU",
  "key41": "4tGLTRYQVq9756MDpNGmne7fqQbmwHYRDLpLERkycoUvzKJMzhLdAnBgqxVaBNLoHbWc7HqshdvLmb4U8crPddTF",
  "key42": "4ccnGg8pVTn26eMoxTFds4j441jYZJ5mQkUzG6VJ9D5q53j1RrsSbumnf7dW9WxDi7CdTvvAamUjuzktHutb5C8J",
  "key43": "3auwXH85WjW3qSDCzjst4rFk7DTSvJUqC5SzASw7yDbADAfGtNHavnDMftytkbx5uadfsggyuEVGGwiqVh353nZ",
  "key44": "519qZXiCWY6whPwr1M4nTDgdYXEj1pBVGb31UJyDxZqRbm8GmyRpue63WgsiDZTGHDGHuhj79hqjkpvZt56ocDpf",
  "key45": "BrtdgUtmeXk4PGRNt3Jhi27JhrqcELBWJx3WxZcU9pFrkMks7Z2kzfmaHayT1YS6eDZqy26XYDaUU4s4v6YB88H"
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
