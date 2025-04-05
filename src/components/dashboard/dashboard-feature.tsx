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
    "3vusw9Fayf7RcNVVy5cZ2AF6Khe2qHda9z9nQg4gwFRYDrHhbggXjyTKSTn1rhAtZGBuJyGztJYp3k2MjqVMFNKC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PLK4RNtj3XFFrhz16fcB7NNQJivzTeAUxfggC7cPpUq6mjQQwAMvHwMk3qEiQcSJKBzc16PAZK6CFZFA9V1T2xV",
  "key1": "4RZnazXCaS4SYGyQdF9psdTQXjdfsAHDELZRHoCoq8E6NzkUvHacuBCgCBhNUkGzKkcsPqU5UgEgjeY6rtADkh3Q",
  "key2": "wwtfRcuaWtdFqWWdMrNZPPVLnaFaaFUPrn8kbLy7V7owaCSUt3QbKbYGa6h9RnRsknWCsTwdBxjntheh3wxNVsA",
  "key3": "2xT5A1z7oQVDfduEALjHJMjak4CjCsRUwpvp6SVo7M6RnbucHXcXe1XHSpmEz3mMtij5KDKREXvbTrSFPo8LiGU5",
  "key4": "2CoLy77Z4JNs4PVjF1TNbP4yT4wszW1WRgcH7egvpEbT16RH4AeaNztV3TigE89Ramy9FuBLyd73qnAGtSbYLwDK",
  "key5": "2pjufgTsSfGf6YnzYGacSSwazWzxGcKrui8nKJkFVgGUG26f2aogoimRbq7NKLx7Td1SKRHHYbSjJWWBdP8n8rPD",
  "key6": "3Ve6K1xP9dDMMHPHAUVk2weHufxYVtF7os7GtdSW7kk9b4u3bG3J778DWXMHP5NgPzsDxFGqqveYTkHTB3yx8z1b",
  "key7": "4AnjYaimVpmZLtgrmiwwd51FJ7pn3f2QLaLw2H4aQrdTC8kbCzqk2vZaCvfGHktyjnRQDoDvjCpLSEm17TjD59nY",
  "key8": "4UXFsWLow4VaCuWk435fXRwaqdWnewuxV6JkAcygVUqKDMU8gdA4TPHZjWsiqiSsHK5N5eJ8vDueqbX54Q3nhNy8",
  "key9": "3nMeDvVsZNbxsH77GoCHgC8NaJhtRAJcLLQqPqGXcT9A1wTS1NhtnezkUr9c4mabLNcAZB6LFAvC1wHa4kPe24oL",
  "key10": "2WDcNtzoBzYwZeXTp85U2YSpezvmd1Y4xbcs15ZyH2ruH2MdGKnbFLeAcs2TYfLL9QLLLuoPvrMRJUvhH6Ne6jth",
  "key11": "53RmTNPP3zfvWGEWV1XYKnHtZ88a5ttucWpTVNo2C1qF6Wupmwqvq4PvxiDJDGGwgtUThR3uW626UhoUuQcQUQkh",
  "key12": "62FTyJK4pbYd8J2ntUbCvuztV6CmJSPMWT64PSz45qxDuJLBWG1uTrdbvRHAhbvKZLBT7MR7chn4uL7V15FN2UGS",
  "key13": "3RWtiYhom3Y9UfdAPvNwLU5EqxvCbUEUevsNSm6jgJXP5b1xacPXMLPVi9W53jeQMXEYDQtdfNHGME8YtTFts5tC",
  "key14": "fTpm3WvQ9P7P9nKSRR17HLbx58X4ifkBrBF4czdSkZ9ohKLcby14eynHbkYtzhVmk4magwc4dbgfn7Rp3SRh1aW",
  "key15": "3zNbmEr4qDiLVM6spK5Y8J2rw9NsKX7HGyDyxdgwCmhfeBLNoZ2H2eeVYGmyr7oaajd7zyZQWo3GC8aMEXFizkd3",
  "key16": "2BmgCJycKH8hbkDSEkEdvdHM3dXosFHMc56vEFJZGn4DeundZUN6VyAEXZTAatbVFgqqDxEvspyumF8LzndkSuWV",
  "key17": "2AdDdBFXQwARebp7pP7uQdnrfhq7kSZYbyTHcyEN7zaNdYdUwMbYvtoVgMurbx2ZofQaJRTit8ptHA3gAnCRoR72",
  "key18": "3g2Ye9dbQruZQbhfQFmd78W3fKYH4NkV8kEsyBFFxbaKbbysbMPEMkDRHxGAR9U3P79HcVt6QA4QdmCHR3FHp38b",
  "key19": "3pGTLiUxK1SRcr1d3oqe9os8YBCShLauTDpPiw6UsWQuKKrHPTcjqmjMN5KZ8yCHcetcaxfjDMuk4cg33bXwwyHG",
  "key20": "2rgJ9GrJTYBnxZCfmU3iquppZSYoci8e526zzMAzijJvBji6GkBRfuaoh49wXcKSF2GjDwLzre696fzWBMJwWUo9",
  "key21": "2rNUbZPLysiVLowna75CtePivW4R9LXrs4MjngS98B9x4stoT9aLYQxWYDkjAXJHqSmukB2v5zT4HLxhfAmre923",
  "key22": "3EL2a5JYM3ikatvc1RpfPLZKKgBiQtMkgsK18CCBB71GJ8q5P7SWzxSntsbMQKJ1ZGW1yQw4EP2XjXBsqshMVtde",
  "key23": "4Ky2jYmqR3a2PVLTwENqzVJcZwFWcEKV5vAKkEvfs3yYy1VPY1iwDeE1HsYSVGcfy3Ra8b4b7ej395Atr4fVhqE6",
  "key24": "3wf4hZGUUL7L7iE4HGgK1q2czfJe5ZdPgDnRAG8Y3DKXHbJD6k32epuCLNPuh6ZmT6SMNtQ1bK7ato7wjw3F3VTm",
  "key25": "wAdBiY6WAFvxVdfGSN1TxMgyBjFwWuWSXuWmXyUDHmnFALcPgRdpTVtS3HPXp1aBEKC92CmaGUbTLzv92utDXig",
  "key26": "3ygucKdTcXjiuA26Ji3i5KYnEvUqyqGNpqeLe1NxK6N6dKgr8yGeyjifePq4bJz75diRWrco7AXwoefWaLT54J3G",
  "key27": "3GJT6b8D2fF7MjCvgGSMDe2CgYRPxzVpHDyVztaEXnmMfuPaUE74q7AdosYaeVm8g2NAsJuussQbchw2jRx99S4F",
  "key28": "4WPdEsubeBKuSKVVkGH8qtwfcT9DPSX3SNrvwT8ogkqUYiLo6Wq6ZVwunDW3gE1DhzfmAWq7wA8MsPFS2ydrPohL",
  "key29": "3jbjUhy74fdrXgWhNVLhfTUm4SGmqsDXaSwfL83sFWB5KcXNo8dgS3XfXy7cyWaW5a7TP78AAvgMq47ooMypiEWe",
  "key30": "3vn5bzoEQnMwJHW8XLviSPancWR1rLmVFwTPvFnDvs91ptuNJjJfHPS7P3R2ByDifo6AcEfWLNr5394Yj6nVaeZk",
  "key31": "a9dy7DgL6SEFJ5TpDXqGzUBn5QZmVzVaUcWbNhnHNKbcneL4Mk5YNa3J2yksLnJXchFWZrbNxuQX9hgpyBRqxgB",
  "key32": "4ZYNEP8wEiBpi18L8uxaU523gTBAewDuKs2Urthk9c2vm1BixnvgxQ5g1EYA1hrBtF72uvqkULf7ZJQSgrQ9a1fq",
  "key33": "3nj3ayoS3kCHgatWhNVUTgkgArwPUdE123RFejbdRLk1Pv6fannsYbvBFggvXTfy1cf2TBJwxEL89rv6WUhK8Xqt",
  "key34": "4gRo8QprMVCypjUaTBE91nrLZ2DYunLSREDxk3uTDZU59ZxA1oNRGzMNbsPJvchkBGnh8Sa2e61P3nvuHF1YdswA",
  "key35": "zYGAF7eSw9gnSdjrwFPx2F6yg7vHLbKbMVkspD1PZdLLcMfAVTUCUARxUFmLmWmNUX4FC7FtHgXY5QxFxHhAhfP",
  "key36": "5Q8xe1qJGf58HrMiArcp8v4RWBGouWrrGypk1LWSsGdLH1zwx8699pJ5Qt4iMPYiyo2edwJC1sCUwfhZE2HvSWnS",
  "key37": "2YBb5MNJLFW7VH1gjDwd8GAPYfTX1f1zTw9M9RMTddh1sRhqsiLMhf8fhgam1u7QRibjFZFGTLXVMSYfSsVSCufB",
  "key38": "3iTKLazESwn7rEa7fmLzPJo8mfy6ht4X9AJg1T1m1UEBDYG6fzEgLTvB8J5YxbruetidmDazmgU4KvmVJep7guyj",
  "key39": "2Z3LvS9iBppPs7Vz1BpdUvYAGj8ucfy7K9YgaCPAZVfXLY8YkRZKEDziN1erBH5Sb5BXmwNvLdbuHWQwHQYgwkoa",
  "key40": "5npkgERSHHGrR3awBUKG3jh4LbkhGwsz9esd2UmdQWhsaWuyF16jok6ezKkzm1A5j9nx9w76Rna4x6ELpUPR1jk6",
  "key41": "4fSW9Vs96EMretrU7EkwbVND4sV5yQZwcd5mXBETMAZ3AZrVn21JDv3Ps9Se4YLPm9Ckj7CtAmNuhguf7ENFZHaC",
  "key42": "3nudevKPiAShjsVkEguP2KsvY27gtwrti6j7JfvqYfHNiX48SsBkzPS5X1H76bhynbk4diUgyGBMCB78mhJKfLqQ",
  "key43": "3nooo5afuxaALJAXtFYGvwKvZriQua31epoucERsGQpcAnums2Dq5HvZT9JYDSqdNf2epRbEUHoHNte1TKmDmEiX",
  "key44": "5tRAqJb3u9CZzq84euTduniuiLALJKzA1nioBhcQrkkFB8UsU2iNsbhzWXmP7S2peBo18pdAtt8Knu4ddffkMBhx"
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
