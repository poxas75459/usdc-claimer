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
    "3u9F1rN2Xeqjdiym1VkgMm9B68ZA4qBiwo6kntgKCPESTvvCakSWmerH1qyBEn7HwSiWZcxR6uorcLW8yg8qkAA4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vJ8WTZPh83DiXhftSqMrnh2m42FDJCweKtP9nmis1MxDpQeJQ5rd4aK3PY4MNkASp8JtpGWcEwrv6LGQCGmSiER",
  "key1": "5ErZdnV1TBmhi74zTHE1dv31wKyxQu9fMr77XWWq4SMbEKKHX93cbGiT4NE5hdv38xHdUfPwTYWv5FCfVhTPUxME",
  "key2": "2n9QywGJukxEK5UNUWf4zpMdDaZXCFiQvbxDoEMvusXvZTpc8aCM2iLPWnJrH1gtPxsKyBGzVMHSNmMBH3akcnYV",
  "key3": "2XnnCFPNcES1wz8V2wUBt2WuChWvVVSGyWX8LyyPwGUbeESnorQyDt7EeSZAxrX3PrbcQiMjsNHvQwHJHN3CbjtB",
  "key4": "3jqCfoHb6Juwb1EuFdQQCDFMKhntV62bSrhzEdCk4tRseeA3eroqbuJhGnWFWTymRiAamHu1Ban3RNccJ4VoSVVF",
  "key5": "3SJAFuzx3prrgqZ1PdD99KUeSZDTyr9QepqPwxNhEsybncWq9SNRZvTjtVqLytM5JUDSW2AjWv2X9haGynugU56J",
  "key6": "5mePcZghNpS7Apsq6kcMLe8PjuEeHfDe2zjL9fHbhmys2yQSgzrnU8opBfLct14CVzMAp23NieLUvPkAtm3iGS7H",
  "key7": "3vTVKM3iUirfm3LrUp11jjS6NKXJ8SeQKPYr7R9yRT4QRFUgTfjDJ6dQSw3RacPCe9YSfd9zfMYmW3xQZ2H3Y4g2",
  "key8": "5wdBQx3SHXcPdrBK6BTskLNcnfEV5uWRTCV1H9Tqcy5XT3QsFZraLmb8EjtwFrqx9uikDr1bPyrAMsJje2CKoRVF",
  "key9": "2LQ4be9Ft4Z9nGzn25sjnd6ttXjaTFUrAZxB1Z2NS1JLVjFXUZZbN6GBcbA2Pp9xQdoqbE6PDvHm6FqqgHRgtevJ",
  "key10": "35gMo3opYKQHhYhjMCwFD1WqGJeAH5f4nNUPzNjbph91SVnFrr2oRrXgUtZbCfTA38YBeWxGKbdSqEa9fTpLE2mC",
  "key11": "nepB9cyQRqac1G9fL38CReXtfdcAe9QHExo6EcgNt7XKvsqBogHZ45p7DVfhtZCQg6h1UwmgpXp6a5922eydBJ9",
  "key12": "eHotZyWExw3oWXc1djoGExAncSibB3A9gcZ6FwRXjmpiFWgZBez8qEDxmA2fVstoaqNe7z2kApWPi1SQfn2QjHn",
  "key13": "5ic7s79tMGUCyrw6MkMR2681j97Z98uYQTP5p4w7AkJEqGZa6iMjrfZE7UbMeFQ9tfdmxmfnHuELrAUfLq8Ert6h",
  "key14": "4aGtqnhdvX5E1UxvVfz2cr3PkyhP58V7GvCh381ThGyvVf41aJ1s9tQimpG2bbaKKNJFeEVt82tgvpB3Nnn8sNew",
  "key15": "3pWrTWMiDKkJCTcAvpghBjtT6YP79rSvuxNbcjWJ1G1txHhASoL6sUJAAhR5Xybufay76smKs6YeaRipFT9wMwah",
  "key16": "2WyCgqCnVFT76L5no6iGgKPiWxmEw5zBmSWEuP7K83ki47za9N6iG8bL3z3ayQ2QySNtyH3P1b3YhAHLbZnHNw49",
  "key17": "5KXWXK4cpScrrCHPYxrS4ZnZCuxPdLsmeYf2pv8sBK2U1365JRCCFeRh7rhYAntm23WjwNaDGj2ipyeb3xa2H138",
  "key18": "3A6KHMhRXuceoLfaffyoqhddLCet8ten7BMXaBGjnTeoKCEBD57CfgzU8cmUHo6412ewv6vaqeJxWuDvegh1ido2",
  "key19": "26Cf2Ms4n6Ry7GZNBTpwYXMooAATTjpiMsKCUBWZLN3bXidiUx44YYhrH6xiLnjN3jfgxCBYM3gS2zb55akS5un4",
  "key20": "61kD5wcZwRm1Q22rpywt1SiUPXfuc2zdNpV34BsQ2sRJKXFA6LzRdfzvaENdMBTYHdbRqTpXYaP6NAqNZ6SZidhh",
  "key21": "57raHzjgBycENcdREWkokEyfPUjEMbTarY7M1hzpW2446LUZkzTdVr6NHjpqL5gnSM4QsmJhLC2XQxQ9nK4RNQgR",
  "key22": "2jLr1sNztJdJ65KW8uXzULLxipTuYLjY6iceRCwepsHjgN8RB6LnqCb3mXyt7djbmzaG9AY1kKRz2cpNCPWZ9a7R",
  "key23": "5WGTEaqSN8kDfzWqw4c2Q21cNXsX1vs4kS53dodA8wnBrNXyF7JxFGFT9CMNQAqJqp2iMawEzCZV3P6GErRt9QJn",
  "key24": "YFWzZhJ8NxA2pb5o9DGy4A5WDXJE2buHCgvMZ7d7sVSCqspgWsJFPySm4oKrQmbvqdh6rPQmcd6ufhN58zVirLE",
  "key25": "4Pen2k8nh77GtyGdpDMqLN3zGNpMJSiNfwK5ZtAYwoW9ZZLmEMGH9KJXjBVU7BA9xM2pnpHoRAHW7r1NTsZnvPVA",
  "key26": "4ehaimKmj6qbAxqwKkJBwUmkn5GfLHBN3XNwdqRQh8LQK1oKvakEL4GNfCE6Z5kQY5M7wXUFTZLG6xr1kqV77iPm",
  "key27": "23cFduGNKWALc1wohkc6vJMa1dPdEBzMSHFBaz5qgEnzxYU5rs4qctEaaw4jZZq2fsYjA8xnWNv86saw9DbmhjYn",
  "key28": "2D2d596PnERSrtghNayyJLBKsAMjxbxDqZ5hwWDhvVDrpsJEabb5NePpvVARcybJpzePyDvyjmHzKGbYqyUiYTq8",
  "key29": "8eN8cZVeuXHbazho8rX1GnxWNrUPKQoTZuu4XdY8YPkFvJsGbrdUCmLpTUm65BGYmXnZnRbXwuor3ZsyjtwGPCL",
  "key30": "2RngjQRBQ6c7kGXRrLvebYxdb7Gp8cQEFFyZGE8Hunfvxk8n8KuU9CUMgMQ4ui7CbaowXmEcSQ8Kasz9VPsiXET4",
  "key31": "4ss67BPMTUsZQDPZ8Nb2EZna1q2fnTBsG61ouihFoqTPFi1Fr6cPGkiAPWQcrwVvr6k9ze8LgFRMuZuPbkJWL9wz",
  "key32": "hBaAQMf4GJ3xM4cENNpj9GRwnkF7zbhtCtxgrCAZRAiaF4zan8LeKxrUGcqqEtLRTYNf7P5jWPcqup3PzEt9BuB",
  "key33": "125USy3Gem5hmdDwFBsdzcbmyVJKf6vMvu32tk7USHk3CK27VNH2Cbcaw3BRUqJNFbTQ9b7CJcEeRh5Ey4omZBCf",
  "key34": "ddsgs5F49hy235bbhwdfriX3yE4okH7dmgHtzCguP3Gtv3XRNzmthMM7VrvvakXhWNmLLPAf3nG45tymu7vqXjQ",
  "key35": "3fegQxEgWJZrQix5WPrzeFxi2N6YKd7Fe3gN6uCUxa1Uwc4i5ArG2AXNfznDv59MpyAXZPk7PtTAzjWzC9tzR9gA",
  "key36": "YA3KEJbcdySw7Gw3T8bu1AxY5r9nNrqxyD1wJeFt3aiXGNX9TvtAviVFUriLRJXsBHFzp2ep3KufA1JBpfFgLKJ",
  "key37": "5JRFuGtX6oKsJKEQPtVNWgqJ6e4CPJhQ2HW6WCvxDfxkjoYsn9EMSQxTscepjL3iWHJmqaPX738S8vP5qJoxWRxY",
  "key38": "4FBdmnTp8PyUEfCkQhg7Yesgc44qEbMB3aPKtXLAQH69jjHtzW72o1W13wWy9aWAJYhMSZY4DSM2SukdUN7RgXMi",
  "key39": "4DvjdFSH2fAB74BPL5Wh5AZKFLNP9o3j6WYHFYY28higai2rebgrgijMGuCAcC8AnefhP74ZMBVEAkLG8Z3e74AN",
  "key40": "4Me3nEZd8DCauiUtdG5HYcFyQr4VnwehdguUYxeydEEQsYPUVZ6xtL3HutMEJbF7fJramm1xLtoW2FVMB9WaXA2a",
  "key41": "4tEoHYvCZ95n7MaTwVvufhe7EdBURUxwv1GcvNZznnc4axkhvKkmZRM7qQMeY928bshJZG3N8YjqsdwAmkjnrNWA",
  "key42": "2CAeg5dSUGoWEPgBQUFoEiCn7p1g8wZ7NasyJYqYF7HrB8WsmhZUk2BoqJwhTKugG5dBfjv6X9ayGLhExSScYmyN",
  "key43": "K6ooHSnYjKcw7p2wFkoy4MfZq14XqhWGz4jFh3S5vdC7AKQbkjx8vRMCkcMmmKzFb2Py6678yuUEDoP58ak6y6W",
  "key44": "5cWZsKeZaiGtHeGSscHj8pHms6HDosESYbxF4vnyQ5evzEAJk1VyK6aYrsc3Z84w3MJsbHKyfwSXBSZx3XEeXow7",
  "key45": "2wn4oe3od7Rwa7LntqjJZwagx6HMXdDTzwJxEEoSDXaqU5YX7FR9d1xHVzm67mXguJQDktA57RzF3mTrFWs2SrLB",
  "key46": "3kVN5gnSCk4q6kVHDz3LrLdDrMAAViZ4Nu6ScYqRrX15CEUwTVnvpYUqh1Y8HWiByRkK4VyoxT1NMc8n2d9s2NgX",
  "key47": "4nXhap51HfEzMy94vJNQwXedm7RPzRr48Qym6P1fnSjSdvgCjAbxi2BX1BpaVyscyGD6KBHJuGbEnktTXZSrfqWv",
  "key48": "3trX1awEkW33cbsxoyYGCWRM3mknXX7d7QfqWQbJchgtC3ecsfbWXvs29ZHLW9yjaZJtPfc9oyoZ1MdQWqsbiQNN"
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
