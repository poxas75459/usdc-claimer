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
    "464sjBZ5Vv5UPJvgbokeBy32V8eT4FoNNAns5KWZmYCu7sEwrUBdv7DgyVAzTthjxtxxMmxogy64hgnj3zqXRuEV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QJ8131Hbt66JgiNifSVP1xDsxfdCsLh1RZm596dMHj8qaEJNJ9sLdW2uc3UDzVECzJkZVWeSFxmVAvwVt32srWg",
  "key1": "4eZJSfxkDEcW1rTXcDCMzR7nYvmWiwsibY2vtv7Fw8tv51vXnuPApkp2EtNzQREAqmFBMWV2dH5TUjDZW414TwyR",
  "key2": "2kduyUsUhey9tfioUUwSbcMUU9GgCLNJQoMFTzdF4GJcnfKans6cWuDMLYy8QvLCWPCxicSViwi4QSGUCSUhmjDx",
  "key3": "2AcA15cC5hNMpbKsuayaePB7bYvH5W78Q73Fes7dt9SJmcFKRPEAWsAwV2sc4h3vw8hipQRr5FvCUPzVr7efADn",
  "key4": "36TDXk22HZM9azjBksjnpngTfVxcBvc8zuGnQi4J7Xw3pntB9NBPhCjabZcMry1eLFHRmVJ7aQp3137GwfRhNNBF",
  "key5": "5QEdcgGj4jsPT7iuQMhfgMvRaeLPyVMH1GyM5jA62TmZndcBVcAutkYhnt9V9cZ9V8BAK9rZkbcQSyn9umYd7Rci",
  "key6": "3ppumhaJJnidKjiTZ5YFJg3QGmdfK6bnEtvZtePKbVomLw6hUHMU5JJDyXCkQUpqdb4rGmBT6Xs67sPUHRUDb9Ci",
  "key7": "3XXsHU6WHUYj8mevAQsuJ22nPS52sTzmDPTbVyVa5gJsDNaAfntVzTnfhGuo4nCSnDnb1ouPgFSvJtPnDRKCKD1o",
  "key8": "4UH1dgehbnX19wZBGR8swmjqPNp2KZ2n67PfDCwW1BJcK2hoWi6ScUw1HVd9YfFbmo2z7zBm4sv5rrA7deyCHsXK",
  "key9": "42JDv4Xyip6a2gvTpBaHyVRrfXkmb5NcxjjCPq5AHTo7MMEthVGQmVxsNfNFeYn7qcz8YmzKESxS1TUYGgGqgEGk",
  "key10": "3FA328WZRvRdncDVvpN3ToHfoRh1TaDeP5bhRnDYZh9nh4SWiQGfMEWyd9B7ZejWJKMQWV6iZy2znzo8hR2VXNkz",
  "key11": "3eZDanvnXgdX13K923H6dWYsh2Husmgjishu819Fx4BZgQqkJyMY24AUDvMhviuHvTtYnsSwtBAJeo9KUWNb1ZZy",
  "key12": "3NZgBC3j6RMkcizEAMGEbWfsZyapt3cAamLFfz3WZZVBJjf86HZ2BqQn4Z51wpe76ATVXc3yTBVrCpUggv4pDJJk",
  "key13": "2sHPEPNCE5CqUuewATq4WyiG5PafeJSNiA3fpmuEAb8EiceiBU6eHFxY6TWUf1SMP2g4wMPo5yJXiwxqzVH2wrNM",
  "key14": "9Ae2i1CZam83x5nL4XCynKdNmgRNznGTDYCCQ4XUwzrRDSZSjDrF2fkSYySGcTey3kXrG9KN5qHwPxi9a1pKYh3",
  "key15": "4RSMb9ZVSUTwg5fib77Tt4awyxrR4RZFfBTqFt5jfJwtcxymV6v9QTr5hHzq8qYH374XpSXFCij2FWTCrKjT6nNB",
  "key16": "4VWpGEjEVAmPKjfKzT5MbPWsYFKJjPJDAqbxFh9yxRMXhKA8P3y2pNXELyqLQ4SyZKEQEgiRJLmTCEHnR5hM7Usw",
  "key17": "2Yy756hSaG3gvokZ5JVcg6ueTQwVaMkN4oN4RvFKt4A1YoGZVSpyY1XhYjDELPnFjheFJ7vF8Pj42WZbF7xgcPGn",
  "key18": "3s8qDibR4GpRCCPdsgywCtFDi7EJGc6Goz5XsiwYXJ6tZMA2PgUqrzoWCVLfV8kVEm9c1iQM9AK63SUBKyKVN3jY",
  "key19": "62HL2uHvDyAQAh195xk3E1UiRUt46KKpXjZ2hMspSFbknwXR9Ump22GuD5LVKh7ESRwopXu7gbEzEDv685AVHuCP",
  "key20": "3zxx476p5yGuWJSftfqdvVnzRKhVWrWBkY3asHiq38JiuFLEsMz85FKNjedbJmHwDMpLhgfoGxbwg7xkiXSfEevA",
  "key21": "5jPYuxDKwRJfwzerwcLqruEiqxDNf6ELxek7enepDuqqQj7SjD7iU3LSa2vd3ZWH1eoZf3kD7UpeHTiJyfoSYMiJ",
  "key22": "4T3Ka43affL34D3YugwKFTNWxtCwC4dN8Wz3XAhZpaoyDnWRQLweQnwatfmdRgqmvSjqhGcHv3X7t3iHNGR7rt9K",
  "key23": "59Vzf3FfERYSbX3rdwZVPrggXiNoTq8qNxBhY6GBZQhuCT6zB9KZfwzVk5btWqkVde6jFcLYYXgmvfaJMD5nrqyh",
  "key24": "SneHh498kqGRBJ7BxmSGK6odwLYkvGi8RHRXUf46mLLJ29s38UL5ZX3Xm1VaWYAkH6MYNMLowKkfCqRCfjcGpe9",
  "key25": "3Z1vGhx3MCh4JjLiSB4KU7y3p7BSijiKpmTcZTqifhTeBWiPY4SR7B9tCoDxajMReZKwj7AdydjHQRx8n9JxbA8M",
  "key26": "2mM91ijeXrUm6kQ8LN2pfq2kbxHg9DwWAk2NwXzDFizAbq1K9dEnoz5EApxq6btwsBBMPbFiTMkdRnUWXUnmUs5Q",
  "key27": "3dwR7GLrncFLPhMQus8c4srhyYUfHH7hYrfpbexkMyPQuS98MnfkER7cXRfrNpG93X4sJsyNTS6GWPvH5WFog7Fr",
  "key28": "2Rw3YHt6KVGZxw5TvtaFyGARwvFRdBFFkmKiZ4n6F9vwaad62Pxxj1iovyWVaugXhvHGinkGyEzBM2FzJpRXDMev",
  "key29": "5fE97VgpzaqifHjcPnFxR8ocdVsRbs9UxkHrFyzepzsDN1haKbeox72NiYRskx9HrchC7WTJFrGLZkp6UdKzKjeH",
  "key30": "5PyXW8EiQmu4He2iPnDA9ekCMMQuxJNnqJUpkSjT6Ngc41Q5MHEM1XHnRsANLjgHdpCgUFWEnbvFC8aa9Evx67P7",
  "key31": "5DkkHGAgbktS5mTvMUPhq5DsUZK4Qro7UP8CDGcUhewyn4DJ2d8UJNX4VCoBEzWK6ChZXDXW5BueZ6s5BFNBSvxz",
  "key32": "6NnKeNuJJFdHR1XhUBhiNizzweumP3KYFRNVx7X4yJA7WeWdjpLjL7KqzwGhepMz8Bi2mXsdkpnARoDWHXwAvKP",
  "key33": "2gjmdsMsfUzfDDJRZTYyBkAUgtQ7GPJK7GUWTdhtqUqjFGagetWWW6ojfgynJuEv7EHTCo47qmxojNNRXYqBDXbz",
  "key34": "4F3P5WZiwS1iX7nuyRx3FaVSd8LeUG9vUeaCPsWmb6nsx2xV231VDdy4HRyTRFopt3xmM26uiY8XcxTn5haToHkS",
  "key35": "5N8NG4Pw76mCDDDRsw1vLNTWVKC8NpFwP5VA1tkW1KNUoda1rURAPfrLDSmTHFDikygCh5zdgDYUyhYRn7nPVQ7Q",
  "key36": "33SGBqkDa9MhVaJ9SYWtCZxtNToWPbxo5qjyE5GHb8m7JtJWbdTNhptc5TzgYhniqAGVA9PBRShifVNhudLwVFmj",
  "key37": "fCnjtiPnZNnpo88TvGodCL7iLnuvfSpd7ZuPnds22uB6cxGzCmzqCSTHR8nrbj3LcTMr6jyS86PMTZqgT1mAwge",
  "key38": "4gphEUmzNLoWnixoLbakDjfvvz41eRFPmbDxiJCDxTLEUK2GByymfs2v1fD9HbM4ftoQ4zouJ77AFFPSU7AprVWv",
  "key39": "2Dy1ap5rLFh7e5QA77dVM2zSPrYQ45TLwFMdriiH4uZDiEwXzyqxPHshG6ARecKHNrAHQUUA3knn2YxB4Zo2qqF5",
  "key40": "2Vncn3oQq71GdpXv7yHtYgpo7Z48t1cFMfFb2BhnrUw6ojMiqhPUYqzAtiQJX5BdKUV8w92yZ7MeV495nawqmzrk",
  "key41": "2cbCp6Xdwg9haccGuLPwFY5NbRjgY1wA91p3tJaYBsxyg4dRTeVdLjjs5yH5Dgt8i9wT1MdtMHQQiQ6HSpaZXcXH",
  "key42": "2CzZKiaEnZcjK5fgXeWgzLCrw67SK2CUr8D9ST97Ys4tjEeXBjE1PrW8szAmt1SnQihBK3bwyDiX9axt5ryuRinU"
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
