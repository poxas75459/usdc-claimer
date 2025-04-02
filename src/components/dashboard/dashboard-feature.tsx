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
    "2wH1qtUUXyGUcacTMzaM5eVdZGwtmNiAnaKXHFXE6eSp26xphn5NBZ7eaadKUDCQhGZKhzMGzLQcvqsntANnthSh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rvdLuygFEwbagEeNkBx6E2fTWns1vNhsECX54bKtF2U275mjLX1qyZ1BksLcEThBtsEPV4R6D1iDZf7bC3wDJx7",
  "key1": "2DuYQz6AvMUWieN4daxe7kZxNAavzrZbbeoQF8JtE63zQrdeWeYhcWVqge9UZsZcwvkhgUsUkkBTTjM93T1KBAwL",
  "key2": "52yrdWJ7bxQNnUZxj9wqgZxhPJcApbFQESHaqM7uvYpnmfExCqEE7gjuMM7R53gmNjNr4Xiw2WHwYwybknac9jUd",
  "key3": "5aiwjQttmQ6TgYRbqapNoQEYTjYKEM9KiJNp1u7XMV9qia55gPsSv55B5qDeZkQrBY4BHdECrvHLqkqQJpxURc9S",
  "key4": "xnsJQvi5JMMY72P1s5LkHVGwk9s6UTcGy3f5kYQEpY9ogN24y6EVFcfbGKbDtkgvWHsG2ALtge69MsPjmSY7824",
  "key5": "XG3CwcSbT1HTiqjSxeDyToYWrmTBxm8mHTLhj7HZxLiTrt3cWohmaw5GCYxU5QcELCZz1i3o3BUNBTEjNi4oDNm",
  "key6": "3yitmdiwzaC8PdUeNdvafgH5xTY7xbjvQz5nuwV2Svc5crvvmmKotbN2FaiyHo1nbzRVGpUwraE1kpk4s6cWbK2Q",
  "key7": "5YWvungMcfVdUqdyq5fuuKZGWZtJ5cJ9MLQhfpCJn741R9MKYedYTKToVt9gv8DfhGARhGCMCbNes4Dc9afNj2Wj",
  "key8": "4vkjgJPgwj5H2PxWGnmBxyaSjFTYQCcLwhJ2xLZWAGLhfFzuuHdbdoPPPFXmp35TvLTqa9DnBvgJPggmNzmSs9TJ",
  "key9": "5UkKpsuh5qDxFjo2ch1XBJFaS6hTn9TmThq8DpaEG9eBScJyDNb9y7p51k1WKJjd2ehLYgb6J5wVDb8Vh9khwBL1",
  "key10": "2wKALHaQatNuoEMLGcEj2SEMy2PMTCNT7Vm7BNTCns8QqRUTL4aPNpBiv2Ece3Hej8y94osJgi35mt6VDYP2qjXm",
  "key11": "3tx1P1KZkmJVcJaZ4JkNLEeKGTTxvif4eoDkcGqcKQk6bNwW4KPtSDKgz6f42xPWaHiWJ1YARKaPyaJQt2qkGxjL",
  "key12": "4KikiuXnfKnAHF7KdSwV7x3XKoKukoGpfM4iddxLJccExooyw5gjn4XrXDn6xQ1NzLuJxEy7BQANmtPvibBz9KUN",
  "key13": "2GQZE2L3kqnUnoCvrfUEhD4SCXnhLnSd7BFkxVj2qbFE4NByfXUEdzwx5KLd1hsuVRsmPJpKKm1x2UDx6ZS5JrEt",
  "key14": "4TV5mhDuxKWSyTRG9cEERi8pemdAxxrf2Tq4PLompg1mfVzBrXUcY4kbcTaEJ5U4K3GmQhMHcZ1UDCwsS7dbhVBx",
  "key15": "ACBvxis57xzZcPutvt6sReP7BZ1xT5qei6D5Vnorfwaiv4BGsEkiEES9rvivL2hcUc4bkrg4fbFDKCWzpJJAU3n",
  "key16": "5GeT48yyJCbCcfi5ff4LHzTjXxi8MLDy2xYmJftthLHXiWpM1AQfLDKWhwJsHhxkrTAc6SxXd14n6Y6dUfkvVeCj",
  "key17": "2bFYAgCvvL3KafAAF8FKbxRcSJYWsu2eV7HrWYEryHiunWAf9h2H6Gekoz3EpnCwR8APcc3fuw77gAWaYMY1zucP",
  "key18": "yM32j8cwmgsMLigPToJCrBGp1uXSRgvXJb4BDtcHZQzxNfkZQzQFAJyL1LDeGaPRrBnzgsV4p8Q4EEH2vPf8ahn",
  "key19": "4H3XXmeRGDCCktBQiH9WQKAghcCSqNm4s235hr4BQnRLgbVbDAE1emTZ32Yt2GmM6yrTiBT97xRV9w79Wtusic7h",
  "key20": "5mdDJmnJjm16dS3MfTbbS6A1D6efFxAAuFuWYNGYuztwh8qJS6fG9jMZ4QBmAPjWZGnwYkYvv5MwB5LUBwQCSdjU",
  "key21": "2bWgjRgKbQx7UgCvKrRiQvVr7stKS4tjWVVvyqgTEA83wg1B2MVtKYZvVK3QMX5z8cnqgSVMHuJPznyibZKRGmpp",
  "key22": "4SFR8wThDqk1BHQc3ryXLHWZ8xx4aZww1bMzeYinwSHH5govBoAfSdQXKjRPRn5bUwV2BEXqXbBavVoFc7p7dzo1",
  "key23": "unMAPZBmewoWBBH5H9p5b2zSc6FsiQdcEQRhQKp9p1fS1o4LEyp8fPPcVbmsrX5QqKXTK22GLUE5wBRXYyKJ8yG",
  "key24": "4GkmWkuPugzpsMrTgEJ7HK3gRwjh5va7v7MpnKwQxWWVUiRviPbw9jkrbjDDUejB7kyKzRu5NHKbAS8VuQAji8N1",
  "key25": "4J92mT8KqBENTEjX1DCWWBjqKFAwrUi2jDEqdKuyYSbtmDGGM2DqeLKBkxcZughWokv4Rfs2jReL9foBoUhiWBN2",
  "key26": "4dEp9fvpG9p7q4yraq45yh2N1AvFTFynTjwfypuYCJ9nMpqTcpZPiBQEC4CyL38zbum5ffGoYqKCLZHP5S4ATHNB",
  "key27": "v6dPwzLcAGjrjoPYbjG3dBJP4yWEyqh5Gfuq6WUNuskcAbpnYWCdqNPBVKeZfgMqSTXn5VJLPkbhoFrVSdunfUf",
  "key28": "4mZSQF5T9qcCN1V4HPEhbBV2XXiYStQvuqeuFMvW96XNKGcLyAZNm81kfGQva8UrQcjSyn1HnE7URkfWSKHLZDzg",
  "key29": "2fU631Jswmq8z7y4crc3dpEFH8KdFjrD1v5jNC8dd6JsxEomyrBaUa55LdsLXDKor4b4u39cAVLAHM3GwgW1EVUM",
  "key30": "3qYNF8bsxg5gKNKNFCCW2XbWVCvchrMthyYKQWK3gHSpMTUffXekjSJq9H5eXL3uUmtufWMYw1eq7wPvUAuQpceG",
  "key31": "2ujLogZAi85gNCRuNRuACycFvZ7N1WinuNEX864qAmiscdemgrM73gu1Tqau2Ah2pUpdms3H34orkMZb1LHEaer4",
  "key32": "VYFdobUFyKfWzkkp8ovgTAowGWWsvSoVD8PtA1jHckT8FGSrMZXGZ8vtK3HoJTD3urodPcVxoQBX4tjLVrKpTrk",
  "key33": "4adp7XSvBJuxyuwoMXdix7JbFXmQEhHJCGraXqxRT9GEdUtnvZH2jYBD1hmCxXf12xGQSLs9hh3htJzqnaaGPjWE",
  "key34": "2zGFdeFYp1yVsA11212Zvsw5KddMqq5251kKLgbCQg9j3HJTRW1ZPZARz31kn9wso5LNRhwDnBN6MiDSEteYPxQA",
  "key35": "4hGDhdTJ1vFiYSWhVaWHvmt87o9i5NL94794D34aocfdafd6sNPt3Q7YNG5PM7JMPuCMb9fL8zdEeLYXy8yQKJ9M",
  "key36": "4WSdJPviH5PC8KDxYoSNo11C5TZwQvZb4vwxjt4UGqKKd2pfbYhCsz892LrPatfXQ1cqS3G8TkEzY6Tx9D32kewG",
  "key37": "3riYJG2ff7oi5WXNqWMtzJfwYhcZXc5EGRnCqKvu58cA8rYUUb6ARAyfkr3JhNQEFLmFq6r6LQHUUxJseq7KuG2V",
  "key38": "339Q8rdKX1khRR2xYeGRKEYHYfdUfaHuaNnF5CFpKDdsAsxD8zxDvMz4G4G6z35wJ52P4nXnME4USrariUEG1mKV",
  "key39": "CKAW49DZyUJzEiALD6ZWnZXwT3uoq61wSBP12n9naqoLB9SwcrdGvHgwT5A7dixbqosRNKZqsLhi6btsrn6obwS",
  "key40": "4eiFgr2MuAFR12hvTWKvefa4Jep9FwvKe5xQL62FRfyxNPfRAwGDW4qZnBmNYfU5sEfojGzuGmp6WrEyDvRL5ieu",
  "key41": "FZxjnXNc35DbaFTEjCj5ZjAEFxrYPLSKkMLb9AxWRNQvkSuoWPfw6W4gvMKsYCUC9QycMgoQV9q8SGdBF54T8ea",
  "key42": "8oxRHaRjiJYfYSqizxDxEuYew1gMdgTPYt2tYTwU4genySAuGKVdEMQERtPziFum2KXXvVZXupigRw3r4XCEDPX",
  "key43": "2rmJ1LZTgwcLia4wW9YXJW8AgBkpGZ3Am9PoEEN4MNsTMDHcL92qh21HN915ynQxcAj5GdrEdTD7vLYytKLRXmXL",
  "key44": "2T5gJhcr4V4EPXveddidBpCHL6gAbqLHVLzLWUNn5FB3bjoRwwbUP5KvpiGp264fk8EosNP4YtnGWHJzho5t3k6W",
  "key45": "2WgrjsNvVpjptTiVTZMab9AMCiw8zoc96JuC3ASdTm9uEqSD6nKqX1Sd6vQYoaE4rdKZv1mhM3mzwULQLnU3nH6J",
  "key46": "oaaZaFcZZm9c77t3iM2tD8rhQdwKph6StUauR5BctBVxCo86zsT7EDrAJCJzoaKmgFigorxbUFiti1j2UtXuyby"
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
