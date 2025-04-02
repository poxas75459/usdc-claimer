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
    "1hKgiDuUVcTEAGvDMKco9AXgQm1FRJZK3UmmTBdoLRqK5Pq4h45JCjufdBgK31zxn7KUqKaM7WyoBmLoHkND4BA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34kFzeQE38cEy7T48AzMbKwULHcbDeBR3L35FrYAiX8fq7FDbiAKAbPXJV6YbpmaoD5Lib2tTXsrVUb9mjiWESxM",
  "key1": "CFL85L8AZGiwTuskEoPrP44qtmycZGnpNb7ASQi6531g5XiMo1LmszRqK8bYMUkkEW91F2o5cv2RixbjdP5d7Vp",
  "key2": "3dPKKWMU3JQZz4s6iyAZsMagHzCuFqiaAQcS6EePqrE2xuWCVa9vqUYxoNwjqhiaV4UJgDNtgF5BkEqEGm3H5Uq3",
  "key3": "HPoemCjQjssrsPX5jpy8DJZWzQPxkS14nK5BjQBsyhPQVW2KFH8K2wYd8FDmWetdNuZRUkRVNmwrbbxps8eGdWD",
  "key4": "2MRFXFzhzDPWiaFbMQLpEvHwDf3cuBSqm3vPCgS8gHzmFdj6uEpymwXyETE7Ww6gnqQ14WumnCiRzKMiNDq6UVmn",
  "key5": "hhrmbQqV91gxYrZdfg22YJgcNFfkHzsmf2woWLnmNo25NCDdFaEFHtDevUsHgsrb44ytjzVcEC84LrS8GYGeEEX",
  "key6": "35e9DqhqYHaSBiXFD3RzkEwtfK3fahXjUwPhc4kpZvKy2iECvk4NMxPBjKW5TAESfWuxE1dZjLrtb6R1W3ZnbqJX",
  "key7": "9sXbFv1rTvrE9HXMgZJpXUHnN4SR3VftiP6UXw97AdcubktzbzkfH8sTyFL7893pZE4xeonC4949tvULz2rcDhd",
  "key8": "ByecwRn3nmh2cX86tneg1gFaPgZbZbLEJscWB1jatKfZ4SPr9ZXKSKnLdRGhutWZJSmSF8otpcGuYrUtuwCS5E8",
  "key9": "64oxv5V8exftwMAFsBEosYLPDFk3WqdXvHZDJiJ7e4bTDv5zPQYLA7MSV38QoYJTgK2owzB6NvzgDnMxp6rviWYq",
  "key10": "4qXdpoypnHYv2DvdgJhBngpbs3fNgmAxWoX15e8mgKyxzGSrY17NNHszYw3fiEpwmsEQAiA1g4aiSDnEUyXTiorX",
  "key11": "2GTD2qDFivBw93RDVYHmhosLGf227ifiM4ZYmeTDHYLE4XQkeGV3shtp7oZCTFkHeCjfwFe5FpdnmMCXAJr44bY3",
  "key12": "wjEnou8AwfJGAtQdoYDkEHEQZ2BD3FNMj5tNj2T8C4pdVTg6pRM9rFiddYvo4GSbchUzXmTWPZLBTpyseQg1mgg",
  "key13": "23rJiSZshsfreLFy8VkHfm3Scfrk44hpMv59gAzfybWoGSo7SJbHyX1rDLgrSphWdifUK7fE383CGDkkJb63ic7A",
  "key14": "3HRxy4tFZdeSTSYs2wcZp25QAMUW7ZdqK731aZ3qSmCW9DY16XtkVfbQYCk1uDSRsLgy2ELxsTRaczmvu7BWm9ix",
  "key15": "3Dg88LcEH5FJavCreLCELboWk71LHotWkAXT45xDXLssMfXsAr3wA4uWMBHsEcxCB9zCbPeiCSNxWHFXUEUuGntS",
  "key16": "4e6PGxfVePPH6mRajqwCnnAVp6hjLkcBJ7CusHid8XqxXA1JGbk4bR6vJzmeRHz4xgckPdDMLxTrKHbD21wfvX21",
  "key17": "2WmuWUPR4xqmRQfLUk9Scp7MAgFuYFr49aAD4Vchf9JTgd7CjbdWJhs7QTW6gD6NahieUkqvdbns8UUHTZnnd6h5",
  "key18": "64AExtWxxeBe6bRRRBXMBeYgKnurQcqxgneDR7UY8ZfjZcxvgoQqNzHEiTSHffQ9sULocfzCfhjBvSHR2vo5MvvS",
  "key19": "2YpRMvLBENtdoW5GksavQwY9M3suD7wjXQiquSe8xed555PG4Qeb4wxBxMKhGBusxjL9bHnavH96u3RovYdDzdYz",
  "key20": "3dyiC2Uc4j3HwnVQoHKizYsaxLk3DwcenG75whiAEqdTVi7cYNXhsnncqxeN6gLCKw4AWReD4KKYyLiA97BSXdH2",
  "key21": "i8GgisfXm8jk6F1jvAve2YBmjgu7RsYJko3whqBob3U7U34KsRCE43wDhRpM6XNBCKfhApZ1EJBi19CVxqH96Rf",
  "key22": "3dh6J4KC6fS4weQcyKqDUeDrCmtvLFK5ZCX87aaHr12bSN5TokjLRsPUQzaL66AVsVALNDyB3ckzouhsS2RosxYY",
  "key23": "4Rh7bZnTWUk7speZNREK979asz3sxCZV9vcR1ub8HMuRH1mGeWGHAWiHcaGZZNJBeQDqZK8nQqka3fjPx6MKQxaa",
  "key24": "tW2rTbwyrNPUmUCd7ws3v2KxmrrJn1DnSaWEjZW7VVxKB3pfhFNZnKgXqfCgvdfLou3f1D64dgQw8xN3bTYJN5u",
  "key25": "3rxs5AGfKHeRccJ1tF2FEkTCFSCZXbMMQ7xo6CihraDMDkg7kVvwh1EAKCS9FdTty47wAgXkyF6FmYwfkBHNXcPj",
  "key26": "4Jmb72UgPuBaYTnNKYXrsPD1NoCkiqNACp9WMRtRX6fVZgjQz2fE8txYCoyvroEjZeHzNEPxyRjR6b2L6bGK9zFn",
  "key27": "4dunkpyfvbtzC6fhvSMQjRymtY8teSTmPkgnQg1UmuV7U4ZicLcwryWnK6YyCuZSHkqdRAqXnj78BeUxS34JqtTp",
  "key28": "4qRHJVKDs7jTWhRUcrQJm7sSWy8SMweUYboK6kHjXE6HXNY96FQSaoPc1vuuoYtbNdgvjPNEwB4hp7cxdj9zwScz",
  "key29": "48p58fL5dK4j74RdLWUEKv2Z2gHbpxC7QyHpmJwhx8si8mj18NqBmSj4ezqavbrGHVghgmkWUmney63k8tALcPYa",
  "key30": "5aQFMzbTYhNkeLQ8apnXydf9eQuUnQ9FfoecyFNg71PuCofWwWub9jd6PNcdn7mQSzWRRbjpE9dYW7r6qBd9xJ1S",
  "key31": "5hyEfeVwBTFt6pWNgW3E99Z2N1dHhNJZ659msnMzh9em26TBBpHmdfMkc4uVTfaLMRUdx3GZTAUSeRevpZXVjgBB",
  "key32": "3bg6xwL1LpWkL5Bz92xPynDJrRvT9iDu7WgvWgbDB333hefyutHY9BJgKwQxVPvpweu7KmHfCuyZU8mFK4GQAYpe",
  "key33": "4GdCftHie8DDzwu3nwU3peDwYR2znRfPNVsfcTdtwbjVL9CKMPwCqFYonMsQNE1oLQyweK1xYUgzbDd2gKXsd7zm",
  "key34": "4W8DdoQoDAHTfvTEovL6YTAW7zK7VAz9VNRaNbcFXjwhmFxmupr36t1dQzT12pkigh7DE5NdD6qZw3z71ikUvHWL",
  "key35": "2r6sv5YtRfvZ1oYozDvNxh5XtkuG4ZbHyv1FgSwToZd7stEWvawyyhYaNx46Jh94vUJjErnejLU5v5Y7NmM1kmAr",
  "key36": "5P76JSJGi9CJGkju8CEkGLoY5rsyjXQkLd4rtfCmmibUngiYEgWfcpzSvphn4eNsKUWVBKJi3JB8YVnVoZtho9Cb",
  "key37": "4ohJggrNeNsZRLYMWSMiaGFmpLd1874WJYRyyh2E9WVJsqYHT74Q4jyQtTW51whfSVQxtpyKKipoAkb6z26c4aLA",
  "key38": "5W1f3KhcKErb4iny975pu8EBYjM6Fi67jQMmf4zH7PYL2HMy7eQukequ3xo4mMBo2z7fABQm2B7h6M5vSXmE3r3m"
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
