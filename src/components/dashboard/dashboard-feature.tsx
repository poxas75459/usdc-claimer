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
    "5m35BoTzFUc4zPZbD97RcqRu5tTokuGSTvaaUKPQ5iX7iQG7t9k2vSYbe5xx65efr615GPAJY8Y2ttj8cbuUH9NE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tJu6n7WcNhJ9giYXoYBxd3DTozC6SFYZVvco9R6K8fk4MW94ZAVGNPqBmdfCsshafBCLgPj92AcQeFwtCYE7v3E",
  "key1": "4HZJJrcEbpvCYwzWXnmyyryPnzDaUieBmVDcv7uSEwjKkhShT8KiXMDdMNJRhWMXJv6zGgGXhBdaRreAXyJvPJ7v",
  "key2": "5sGHhGrGTdiqMFazS7orv1xukqX9Yaxf9rKmBnkdCafqtPWvL6Nt7mp9MCX7Wuvy4GypVogPrLAVnHbzdPW6ZbR8",
  "key3": "3vhHPSyMNapVjRC75arDXAQ3DwSQpyNqrnexGpZXuEFu8EH3PETqvLdDsLzxniymm6YUmFyGrGytorS5Fv7LMynf",
  "key4": "gEaobkvSjxyg2AB8t51mm9za7Siy52MkutaqD19xApVsgUoVd27wHeccaeXg3YxB7ZyU6VAkgbFfQp2ZKZKERbr",
  "key5": "583bzVJ4iH2gwmEn8JBJ1wAcay4noALF31YbKXtZvab2YVPV9YoXYrM93dNUyU5WLZkXwMJ3bgDoUawoAYAmkURp",
  "key6": "U1ByZ3jMmHDN3gmUVw6p2LVtF9FRtJjaFU9KfRcSk6idPYhrCgtcDjRBCkJJNRPran4JCudpf6SQJPxwrUVEyxw",
  "key7": "4sdkQV44SuHUxQ1Q3Vz61Xabqhe57eudnJpdPwDqLTBsXMFHb4DbMnpG7tqy7zF2cstZxQoqp5zNWpgYMiziT3Lu",
  "key8": "65u7E2go8Y6tsNFvvkT2vQcTYT6dY56MeLHwGzDKsAJZ5mgHqVX2NArzmJQ5UqztnFdvjDQHZLa1J3KvUFmgN5rF",
  "key9": "2QjmNTR6GibBJdxbFkkcWhYX6zYhGUg9avkUt9oY9QeneBySgKP938rrWbrGAsPN8NLP72kstBXSrErcLTvpiQNX",
  "key10": "2m6jHiQT2wPPTiELSMsVS7cRiqteWVW7eqDZMbsxL95mmFJSqnT9LDJar4JjCFrsCp7gpB1a4rCL6XcayvdkgE2D",
  "key11": "3DddcfnspHbLdur6h97UwrXcLrse7ZxprLUe2JUi3VtsAeHFqzKt5VxWskHY9ZeB7c7RwMcQe9qbXDjxTDoAzcqK",
  "key12": "39jqmjHUsSQ3dPYmjTQs2PNX7ywzeM4976E6gATLmpZMpPLtoMN1RipQuJSvrJVysZw1jC4U7R8ki69RCXyRNszf",
  "key13": "rHkekePQ9Qw3QspqgdpPTq8gLA3F9PYZRoiHrYcvz9sXkRDRmcJiWBhodp2n8uXwngAC2NKsMmo4x5LbpQpNV4s",
  "key14": "b5XfC5KvfDHzjt3dCknwZaNtXie9dGU9aQD4MXnKtXokzmwevT9SiXwqzP4RREpVZpfntJ4BXSC7RH43omKUwNG",
  "key15": "2Qhqf6B4MTKkJn9FABgpfmRwsoNc1SN9xoYc6efVPry7SbFU2eLzUGgqRTAuMQoV23V1ND72JXjsEF1Gfswr5bGe",
  "key16": "2nzLbydcGQDEgnURTpt6x23fT4RND6BqqC5HNQHQVXYD45Dn8W16xPU8jL7fgQS7nr8mfmbd13qpa7Sd5VCk1Tu5",
  "key17": "5L9U6EoCr8NVqrEKvxSgMFKuyaQuNhqDXCGujZTCqxyMi1S3aHg2jKfdYnQ4NVU7iWabBgjUXA5kksWFMCGGgp1r",
  "key18": "2r3yPMHb9yPxGJcJuw1xsEgboLddcoDmJekLdU7NsEftgSZHhNbJ4W2ZvY6r27YUGj2JaTDxJ6Ptf1nM1LvVfCUo",
  "key19": "2X7KHaGtpXUAJdj3HRrAHuJ3eeUQhf7x8KeEZZMi2mziWsMJJTzqcq7L3PqUGcAW7wbt9nTQYssCWgeAF1PAEhaH",
  "key20": "39FbpfNKXX3m1sLW7wZwdUQE1ABL4HBCwmsYLf3A3cFzQEVgDeVwCNKDmEexPgWP82MTLgBA1vmz945CDb89azwv",
  "key21": "25HsRyAviGerWKiAydJRXohsGRhHtreU9e46ucwqFRBSsEJ4HjWnqWDt27mcd5s3aME3LRfE5ofkFLMraRkvVxhg",
  "key22": "2t8pqjhE6zEbinANQZLjhEjYx97VjhBkt7jgKGefkuGiN3g8XtGbkYCNnZgZrZNgyU4jX5cPXKjXkHcM2dgy5CZF",
  "key23": "HqH2soPuGmaVjgEtcFeWjWs1SaYM39FSrMKE41zJuT5sExoEYaC77Eu4fM98AkidkYYVWUUKuSfbhJzh2cVDDKN",
  "key24": "4eAj7waFGsYVDYRUerPmncSMZeX4NkJCRGmLnJLtXdcjUFn34vG2o5o1hWm4rp25fzueDywgDgmJMEgfh9j9YxXy",
  "key25": "5GoeDoJK74ZGPw6ggasixtrCTML2ZDDFzS9hZdjcXnQqT4GPJLJRUF7GirMC9mWeB4utwzne4cY59uHpgxBdLkPM",
  "key26": "2ToeR3J3PrUUA4v7wEyufDyttbZYPJBKXeJEK9Fvm8VkkkmJ9WhZetkGj6fRKGeazuJ5Q7ZBTJFAPak4VBi3Mv2e",
  "key27": "5UWyGqenkLLaaP65pPVvzh9jUTt3EX7GphfiVUneWgfqCN6Dw9PDMkwXPL4P15N4xkzUYgUS1jWKmknydoc4Euwk",
  "key28": "45L7tUkrND6pJ8yJCmxfzsm4Ks7C1MnMH1jpbmpVY2FpBMsaxCKgqLfzeGtuzrQbLcUMvscLhKcUf6QvefbUNKD8",
  "key29": "dLzPD2iWMkgKRtFNvfuerzLmPt5umEFjmXcWnVuNALgDPA7sZu4PsA7X9hxfMxGvUNeYsFScLgFAEDUnhQg1eFW",
  "key30": "358mwKWxYxaZr126NWSNihJxn1yjVHtrLvRRPu6r3rjgCoRHbXGrwdkjToxaMTNY4DDU6Xb4PiLDzexC3wi6UF15",
  "key31": "2qvSt8YmKxrDMsvMQzgrTe8fCyeJyDGWHGwu591JidMnEjWiMsLu8ovNC3YdLEmX3X219zA92y4kNZNUnBSYJ3hK",
  "key32": "t2tB4mhTZdcnYG8LAYxdd5fGJcWcrYL23vVJd17JhPmTx3b5pJLmg5kXzvkZmmRoVUFif3owdLtByHmd9qDzBFa",
  "key33": "4dBeRyG5bQ5gsvsTGTetqWbmAXqiRFYkdsfLcnyc3Ee57K8SBcsKJKxpDjs6J2xD3irF1tF2LxKwMVRbLaUeZPvX",
  "key34": "5va8hrieezMvE697CPvWLR6gcu2JZhqLAyUQKVoqL9MHa8MpH3cpQgnu3HF9nNf5xTcAsM6V24WjmDUcxaZ1C5Be",
  "key35": "7khGpPY8CefpGn3tfBE4aZLujnhbT8uX7sHc8i58C4vswq6xmmktkw4ehVxPg5peNzxLEpWEsVpJMRy1UWHQ4Qp",
  "key36": "3CW9q5RZcsWXyd3Vm9SnP5HFP752jjmuuNsLUexPyHLx5M3jNcQyXskJCaiW6FFDLD7XevF93jSkwPbfqWGRjtXw",
  "key37": "2yZmYL3j9cQKz5dfbfh9WBA12yAtUo6XcDhzBZBzLaA9yAnD1JoVyHbUQJxtfq5B69FsJWRzfFsmMJktc4b42Cy2",
  "key38": "o3E8YqBf5ESEScN7kGinMbxGdAeFqacoZmA4tScR4n7g5La6eSF5uhWZCnHSuJW3xT4LTfW8qhKqBXQqx38NSwN",
  "key39": "2LmuCcGNWLMX6qKLvcMcbVFFG6a57oDKERM3bBdgMMgD6jP1qZLhJ86NDp4g8WipwHfNhXYN52wFtVFZWdkVBjoY",
  "key40": "4gyY9F1XjVbZnbWxk4zvSbP9hWNCsP9EwMFwJUXHaM5vTn4sJ29DrF17umC5tvpnfzPF9d9heZdyYV8WHFuvkeV7",
  "key41": "SNuGCvhygta4fPFD6LTdfHQkV18rcQqESDTtUnk89STSvd4LTr5SY7vFXMsJnVJFeLcw4zBymgh6AJbxKh22Drx",
  "key42": "5LtgWsT2KiKFC3ncQtNHgpP8gKJiz4pErPSaVRmibMUyx6F8M9Sm8RXzCgrQBfvhBN8feHFVYeMN3hztLaQp5ywE",
  "key43": "663KPoYNDcL91rjX9JNWpTpARtzdm1Ra72Hynt7LPbafp7ESREwNu3yxXZEPKuyD8z4tmS4KKsKzsHN7qv1G8cAC",
  "key44": "5MN3mzYctZi5ZPuFpVyvGYJ4TBdDmZ3z76DRLxSGfb6iUgp5v9EK2Qcc34X28xCqyHQTcDxEzLik5MptdPMftqw3",
  "key45": "63Ge9z8vpwQsVDjvDS4d4dKKh61RnVXLEeHwodSV9skDrFdPqGgaF4eX5rccN4eRLPhkgYfKvd77AyVnCp33Zcy8",
  "key46": "m6iL54WNHyMcyZ84byoRkYN2xSfgBBC4C26tWz4nkgJpu1KCmWj8at2xPBQeLuK9sb3uayu8byxwqDsUAXZNqCF",
  "key47": "5RqsZLdxUPvW3MLH7VcQpfEDZcPhnf8d5jB2A6yjaKkfNKfdQc5ZZRCSyEv1r3RFaTecbpkYSCAVDhJmzPPq4Tzz",
  "key48": "2dv7bh1jAr4TE2SUaniTRzGUsUSYDnW8TvuNgQdHfAsjgVVMZDoLbvMNQx7X26qDTnVSVVPXGM13JGE2S7A4ZtGw"
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
