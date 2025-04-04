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
    "3kptN9szz5aLiq1u7MWEcPBbZtUVqmxuc6ptiMNs2anJHXLEBoE4ZzaGDYPRY5Ni3z112Ld9RDjncgPg6Wj5CN3U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VA5ZB3QKheQhoHmSWrPrXb7ZNhjsLs6tFmewVfi1VvD6mUtgoBiJFXCUmsGw9ZF4GyiGKdVZbVVUHFZBigpRhD5",
  "key1": "3cqm3QfJ5jtmTbEb7vUVXFEdHbahygGMPgxZKAbcwzMznQsGpZ5E6sYpZiJccCMcyyPB7PYtxPpmGDdjphN4vw6c",
  "key2": "5e5uh8VkqM2EcLn1ZBsN4r6goENWxbmqVRvz4vbzNxLrXtRG7BATAdybVDAEut985fXqFnF2MTNfufDQLHH11ekS",
  "key3": "4BDRZEDziuJ4LFTVGNbuPA1kWmENJw6ifQmpeBCbpPEtkA6eDLSZqseDJdcycagwpMNyLTstMakLRCSfrCZbMcEx",
  "key4": "3yTZenyc3pJ4zEw1b1WcM3eQHZkqUXh8dijW1MBJqtnjuFU2urf4bcMG7CiAbioMq5mPp2J6HnusJhjWZ7z5q3gE",
  "key5": "53oK4QnfBSkDjrV33iRcLr9uHcvYybg88HLKVFSB3dMvdYAYqq43WmwnTBb3moXLqvSj8yZwJLmzT4zdHjqDiwB8",
  "key6": "3ufEgUuzn81xyPcYcBpDaUg8kPiaLqz38yxsM95QxLputLCGqXdtKMmq7YKbkhz8dxWXHrRK6zCaZxQY5qeRMYte",
  "key7": "m6EpN3zbw8EDR6PojxgkX7AV3nvkLgkvvNBoLmHX1jegUeBYpvqdKmVxLJV8tH2KZSuKSGEtJmQ8ibwKT5xiUXZ",
  "key8": "3odDTqTMW57iy7MmzcPLuYBqTMQ5Fro9wb9BCbLwge17t3sYjjFKhFP2d5FzipHhCy8FCUr9hURnmFYTiKAirbFq",
  "key9": "CjGjgJ6pDyUNyQavWW4uRZutzkJBgt6f6dWdRSYUA9GjN2u4n82xUzdbnM8sYC3UnYvrVDuJpcBmftCe8cJ5ues",
  "key10": "3hc7ranoN8jxGsVGdBMbMTQgLoppfxWhuDvW6eVW4vNQWbMuBVPQbGpFwvoQjnPA2LkZr1TBD3JHoopEzPRnGBqy",
  "key11": "5aGDzcsAQBYiVtPLMop42L97diL6GR6iQGcQc7SP8A7RDMdiC8YS15Npyvg7WSorTUyMxfH8R5Sr6RKhDZ4WbFnt",
  "key12": "2rTAeBXnDrMA1LMn59p4i6GMpxN9nunTSFLsxxArVvhKB7cg4AJsk9w8p7H5oRJ34PsSZRoYhAwWqHBEwutkqNSk",
  "key13": "2jMN86CWhTmmb3qhs4m3qJXdsy1o75bGeVttuDv7nQ5kURNF3sie9N19tTsuZ9eZ34XXCAFKaA62LQT3PK32kryx",
  "key14": "38s84TbChcCo2MwsffMsSJxcv8b2HRwgq3NZPe6mf5BZwuyknPAPgpTXgkyE2nV3rwBDCkfap9QCXQyEm2fZTWvv",
  "key15": "wfSxsNs7RNLYNzmKHgDLE9F9DXRVvp2LgDre4WzKM3mvjEZrihDBxhqPgajE1uA2Czhc1ipGfURjLhpqb6Di7Mz",
  "key16": "4dZ1N92us89V8GjEFM7zFrtkB4crAaEqcN5QWir9Gtf1zmsfyxyALUFqR3f8prU7WUnyurazpx7M2zniqL6rzyEc",
  "key17": "284QRSmejQjzD76vhDYT3j9LnT6871yEberp1gh9Nnc8zB4TzFTdCC9pABLVTXnjDtKRbFHRUHjVQz3ngn92U17x",
  "key18": "K2hYinjodebntNKhiwCwQ2nCQzZ3omUcSKZUSLFerJtwNSHsRHiW552mFcZ5ACsEWkDA7DmLYrqo7ec5m1QKHx9",
  "key19": "56JCbXmTDcXhASY3A2xYx5t7KDd61Tq5M85HqtK3uamzUUcPCxGVcyM8KDGBYFtKqPwJ44WWhJFBCXg4CCcwzmof",
  "key20": "23n2FpY8QF29sHqEi6YCBpoBqeykMg9JXjsAEAQEtD6SMGZmrrjxhDDG8Yz6uQeVxNebDRjexeFNbFJi9CkHG6Us",
  "key21": "2HFsbh2chwUsUZpdsEoNoYehs3UysP1t4ey8dyzrgknq5vMz8QFuRws57DvrGSYH6Jw8cWTh3mdPpjgbWBdmVf4M",
  "key22": "2g8CcGzPK7PfwEAnhznWcHwjqrBHQqidUizSAnQoS2NLt3qvADnqqFYUnfhwTtBVrUZi2jajTD2QNrjoV7DvRXAE",
  "key23": "4AoPtuCkBcNNMQ4ziquuCGWNmumSfNLyaokX2fTsrXjQhkQTQDHB9aUuyuzrTrfQ5uxVf6doMuDwouUdcB4FRFgG",
  "key24": "MJCVjBVqaekHAvDSWNMqgpJAy7EqH4pJgF4gfUAsBvcXm1TB17JTf7Q23o7BiekZbMD7ZzHKrnRiBo4knSXzpYP",
  "key25": "3dCGfDu9d5B1ztwgHZghEYpXTCvL8deVHTjiGEuMqzTQGEPVP1Sevq6JsoszDgoWi5Dcu1GLBC6UFvWDAe95s6Qd",
  "key26": "2k56fKeY45fCsaAC3x4Rt3NLSSh5qVjhhEdR11ZLbLQWTecjh85kjW42EqKWdMYXyV4yTfPF8wAZY9rP1wCSuwuN",
  "key27": "5ajcfbcaaEftfAjc1bfqPgF5pgDXHwRwjMqi1UCXcLuc45EBCW3UJtqw36F6pMk1RFfoJMSQTnfkBKJYwJCxfch5",
  "key28": "5qtBiaBYBbr6ZD6gA8U7GZVZjebqvheyJ2bR9Ke4F97fj7o7n5wU7hP76EpJyVRW97z3i83qw27cRkpj3fahFo4C",
  "key29": "3MKbKkcBMZZxxnECtTYXfna8GA8AHtceXNPeUyoFTDKVAXeHydXHrBpuvvqL1j7sNj2xBPexeAfWLddS5DtfDeMA",
  "key30": "2gXN6q9afLG1evN3jm3HaJgtHsEQtF52kQvoKe9mjH1XbAWNijZAx4YtFAzDe35uQheCQ1eW1AhvNSeCdLKctxrB",
  "key31": "vDZajY9vJMnHQge1F9WbPGeKJDqgXBjjZHHnEg4pgUsKMjFFpzjnWpdSVga9zKBJ62JY61kCys2Gbk78fhD2K3P",
  "key32": "2JDmBfNoS5fLxSeoRA58vQinEWV3KwYKCFeVinaKkfZgLtfirHUrZphiJMdyW9abUZUYPsgkZmhdmHjXFmc1A1Zs",
  "key33": "3xQA7NzCk91qQUrSWMb8moJjHnspJcTryVkVxQPNksFkGiqTcZggrbw6U8Kx71exTvmdg27uVHvYLVRT1bHxRgiy",
  "key34": "AjT4EEyzpvuZaKVfpVMnsLdX1ghZkLaGFR4B2HgR793CweVcJWvdt3SrzxAqsuCASWzFfxBce7y9Zt7gmjVy8NZ",
  "key35": "4S5TJp7swK4z6tQMMNMDdV2cynNNbzJjDD7UTooeNBY1nRXTJvRn4HLnkwACpBU9AXXrc78nWvM8sEwDSbtfaoAm"
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
