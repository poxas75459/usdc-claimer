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
    "4Qq59if9QaYZDPZ9ufYjw7x4AFLcuwzrx4nnQQA3k6VxLvvwW9BZWWnCW9WtCb781e6VgqBi58jzCcYFm3kCgdB5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Npg3VafWDuoxWhXzijdVD4GudfcN3Kpfp6FLH3LdMfzcQrUdKGgemc7z3nNrfvuxzpyBfyh96ds7JzL8MjpznWu",
  "key1": "PPoQopSAneiDsrvbprG9ptfJXvngNpbUw7zqFRefQSTbc5b4q1pnnxskh1UMHMu9zSi4k3Yh6GzkGcZn1KPMmdY",
  "key2": "RhdzqKNtZXeoxi2FncwZjYL8WBQXNUqV4qe4f5gBAaJDi9iwkNs9rdQDbEXpPH4yQv5dpx5fEyKuJCLL29CdciQ",
  "key3": "hMmYKexf2T8bubQh7zrmv3qXLtoZpPr2gA2RKMBESqbgyMWTekTkmNkRTym2emLLEzKSSGYRxBBesALBNnq5y4N",
  "key4": "3fYYA85veaiveCsUWAnjEmfXrrWXQfpaSeFyfzDGwvZTp5QWwrXQNpFpPQPxLa8ns4qPwDxMnRSSKVAPrSk8Kvox",
  "key5": "31V2A3i3VvjxdiSVw9iNP3x7WKi1AYkSExgiTRcfaJfbxRhcaHQrK8JVK89wPRzyJsbnT7JL38nCDBhLBxBwY5U5",
  "key6": "sE2gkzjn9HccqVL7i5tEFeiw6aifz73HeZs4BEhUjPLL3C5RQ5YdY1u5x88crjH38vd6nZ63PvDpWxAcSQggMFt",
  "key7": "3K56tLUR3tGMrfRuNfWG4DZdZzaa129drSuvVdZS4gRyja2TX4y9dNbe1MRLje4m5L5q2Uji3ErudmcARUiFs99",
  "key8": "5qV7socfcuP3ebPTuiSeiy2QEvQuvjbSoqdTZpbdG3qMoKQrCHR2EakSATtCrTxPxHiLip2uk1781nK4C4BSGHmh",
  "key9": "4eRdasTzY3rth13HsDbELvxaVtfV6SJUNx7jpSL1bdPeNxDjuvgsYG1g9jSJCKpSy1znCV1enjkkXTGZ3tSgTCxB",
  "key10": "4wPVjH7ZAXLqBt6gszy65X5g8CucA5VF3E2PDhM1sXC5Vd41L1z89SMHZeQakk3pdfy7w6NficVTHJ6HkCKfAupk",
  "key11": "p4RyzwrMcdGLvh6gqXxQqtaz7ishwkJAgHrxEjABzgy2Sx1XMYKzTPNUJ1To8Q26jMCDQ8NGqsbPmEtmVfJUxBL",
  "key12": "4yFGw9GQ45WBkRVRGSq1LH2ZS31Vo8kveZbB7nTFPLhndNDwGFXFq8zZcFcB92ifgTXz3aCS5eVufqVKCwHKaZvs",
  "key13": "2NpqJzpN2ojQmwQTQ4CxAgyLrPaEMS22jF9eWAcLx7pUrs57CdKD83aiLnTxR1fazgF6uvZVJD2cNp6JYR5vsFMT",
  "key14": "62AceUWLKZ6Xw8jVitB7PtWFpoM9PLUR4m8wfmrKeoftYCCXRDVBY8N6TUtKmtNYtY7gMbfR7ideVPpsarRsX6mL",
  "key15": "3YwCroKk3B2LeD8sTstAYb4grxR1G84pYXQjfBnK8nQnhUTuo6JCbmJ2m5hELysiRSe9HNyxNVujZ9c2Z92wtAs",
  "key16": "3HJf4yg6HdVu8qNDjktJJhAFPrXBLdUipJ6UrPeGPjidrV7MA7HktVKrr96YrSrakULRNyu6RJGrpXrL3jt21d31",
  "key17": "ysY92crTc9wy8Sd8Ky3UzYz6EBNKuESY91PzrG63scE8D9kufo8DGQyGmCyxgF3UX7cG85EVX3J6d8hntGbey8y",
  "key18": "2oEitcPP3D4aBxsXnhmh5ia71CGstWXNwdWSpVy81fNYDpJgJ4LGpWwgWt9vTAUQoUshvGg6Y9M2bebaGp6FBE39",
  "key19": "37es4FXsRFkeZ6v93Eevr5ZANnUiq2PV2CeGjPpbBeqqc1VKyPrvY1KfYmgtAcDnjNkEbLFH7Khe85gYxJxTsEG6",
  "key20": "xW8CJgDKN7ka75u5znHgubT9cwCWDyBa2cXFYvraFJGah3ecrfiTnt1oUEHiZuxdgS9NeBPuc1wPUSeYXAoGWxa",
  "key21": "352QsQpWEBkbuCEb5u3nomgCoEpqmRJuZG3RgnZ8gKc8oTWFZ3rDv4HbyaMH4Xrhewi2ZpsT6eJ8LFwvhX35WGZt",
  "key22": "3yJPLKQaAwb8zUWJqJuefFDhZvYRqwcPcZqKsJUfp92Y7jXJeEdGVt9Q6npxVZ8rU4siwGv65afoRDMvQToeSzTD",
  "key23": "5pxDnD292NyTEtdDbDMUWfJqxBRVZ4UnBz95oEiCNU9mToqVXSdowYRcEnJorVjZJiRFY1Z4q77QHefGMw6eRPYg",
  "key24": "4VwfBcHGEQj49XEAWtDLe72pnVrisSk36Avp3Y5BNpQsmhPasyhZV7JzCkMUX8dbed6F8t9rzBMPh1vRSeb7XDTq",
  "key25": "4GT5sRMKxtqpUpJp2RBUgrxcV4Nn5nJvrzV73yhTvM6iPJ1wZFNVPHrkSFxrqVQhkZV3wM57fJUSMVjCBVMMstSQ",
  "key26": "4Q1XDANtRLYHEzF5qXzGdXg85kKLzYaKbwaTZ94PyBYAq7De8CbJVhCyTBy1BweQ3D6yQNmM76u1bFvP1e7TY365",
  "key27": "3tgX4LhX6Phh4CavzhY7tZRHW6gxiTs6ZSKYZbxvvp2Ni3Ra6r1errJGjgS94rVoDtM8H5xVm5gabY6TQqRL9XS1",
  "key28": "2rBpnbhkbrc9EiJkyMF2ACF8dU9etzGfhz6eJUZvTJdFV7MP2jUnJLfTKBbqVWx6NJR3VheGKR66Zn9CCFZrQBpB",
  "key29": "3M4D6HWgro5cTmZTxbDvnM5e3RRsLgMPZhwJ1oTkYue4T6TMVmjDfFjedncCCw1arxYCTmKVepYo9bDfWFnKS1yh",
  "key30": "37Bj7DkLXjgWMXznc688wWPHqfHcguTiBjW1MBfh7Y7C7N26Bf87ut8hmfapbFmVi8NRktwYs1bXzz2XCU134Rxi",
  "key31": "2QuhVYkcoNoDcV4rwqGvj79HfFNRWKKx7F22ZaeZxfuNfHUwkkKrkcge9H48mqKfGkvGKoJiLRGqpe5wCsRT2JmF",
  "key32": "3aeg3TsCtX4Zb71AD2BrkyxwU2o26JpQVWcWaKLnFN31pNPZNWwsq6HVg3SUB3YHTJWBxy7bPkMavXwuXasMotVt",
  "key33": "2qZGtxYpv8bsR5U9P6KMKrHWewLNDdqfXcNzbPX5LWUk4XEUwyXACahsaRwUMPJMAk9yZVk6u9xMghrkowmezrNz",
  "key34": "YnDe6hsnLbNSDkMwBsXkyuvLeoUuiyxDMjEteq3fLwzKRry5cMwPGBxmQqudRL2ekeNtqJhPysKt1dhUK4vKsPi",
  "key35": "5UTgAVqsJFJg734CjuNMwJJ8VPsbQ4oXwyWbJL6mjocvd143vdyUKaG1e7VAF9nNHX6uKeDfypKj6oopbvpxEMgV",
  "key36": "4PXvuK6opZhWKbqCmoeMjzUwcgZgHjiBw1dKgZ3YAAEiYEGjzN6nBdNC2MoyRfT2Arbs2npR5w5g6NnFrcN53iKr",
  "key37": "4ZRGpc7rsi4cSmXASymnGSYmhwXEC2HNjDnqm6U4BwE6Q8mXJQaRyWEAv9qopvYypSX8tEKxMarZmDyESmXVms3H",
  "key38": "4nvm93y2Hz3AuxAswAhSLqzUucQHFPtFKdkxeaB4EyVnzuUEpt5YhBcBGM3R3tYSxA29iA6CNsCo1bagz5DzWoBo",
  "key39": "4Jf2yLyHDiYRd6tPPYYoArL2FA8iqHqyPKux7DmqucKdyeB22z3YQEjqW39FScidwCn7o41cuPQxvYTos6JQDybm"
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
