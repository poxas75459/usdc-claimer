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
    "523FFYkvz3NLcQVHNTbdD1oGfhqb4fFdnGfXpJVodGCapwa4PHno1Y5nUf3Cg9L1wPovCmBXJaiAPLad35jKS5VJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u5etQTmsJR26BwJjXQ1uq7S69aSPb74KrgDrKkxZyxAUgzoR7HzYAErDT8EddDzMoMtNH1b3dMLg19TZ6QQDsdg",
  "key1": "3yPaqr3K959B5gw1F87h2vGJDxvKxav96CG4DbPDTN5zv2oiMWAwLTFw5EqkSeSEkSF2C6nm24p5Xeyr6p7rgHfX",
  "key2": "7rUGbNnoLpb9xGMAGjC3aPHT9uEXbS5KuiouhwwqmhNGfF39CMUqPQRtJnddELKJ9Z62HL1h62VxuzHFtFmqSgJ",
  "key3": "3LN33ijHgs5d8C2ia5VFr9EZDuhumvNZXX4ZrZKVCsGTyf5Ce8PxrK5GXmcP4pWutC2EjheNWaqYB5BoufFyYCDC",
  "key4": "5y191e3mU5EDebthMqmwB5Qccj7boboaveiitHz7yCiHM3DPVGQdUQLJ1bmTBE8aPz4S1cv9zZ1gKjGXycQvCUk1",
  "key5": "2ECBEpsvkGSPU2WJEG3qgYTkAYhLS5biDfdPQMEPgUE3iJ2FeFwR9Yu9sAP5X4w7chiNG9XkYf1koQe68XWfQE13",
  "key6": "4SsfEEe5dmZ9XD3siQxpQNnkeAPoxtwGEFMx215wjDjfNAmgMyj2WdgLJbNeiYtGrhAKTuPtjMpLsDticrG9GT18",
  "key7": "3MkLFHASUzU4UpqAo4corCrRYhBcSXMMCMxaiQReT4d9nZmFTzg1EfMtjTz3LFBW2L3k4ExXBZAFLsjar8WMYsrK",
  "key8": "3MhuMMB9vJtNQp5NXSZYZZqMGt6wKwR8KYn7bLybNy6sZFR2hfEgD2cSdXMdpkg6dcbfd6yamxfhs1FwqMo8Wb93",
  "key9": "2inD8WTzKSCMTYN8ank8R3JhkbQB8fKWBgTfSVyvFwFsd3whDM8GC1x2arutvraQNrRcxfhNa4uSHxvLrxRJw5T3",
  "key10": "2tsTk8LKs7sp8ErvUxHWAJsu5UYs72yhhJeDFcVA5jeqnpGzJN7YmwpuVEcrGufnzF8adKUaPVVBMa3BdebbTa2X",
  "key11": "5K8mnK3NZNKXn5rQwx11qubzwf6rjvtzxEQyu9dgQh4HsRp5ovjSn6LqWeMFo7ufHZ2rc16Fpo2WJUtPqtHe9e1x",
  "key12": "4dMxug9cAYzAaCdFNTbGjAeFuXNDho8y7iLep4A1HVdJs98rj8YWRRJ99Fvejaphg2axyqSshnKVsJ3E86dvEPx7",
  "key13": "61wyGEicVHvCnzbws4t2tmPcYPpPLC38T87bXRWJk69azoeVrQYEg6WzYWJYPmkLDPP9sFNj1cSsBFxqf3HibrMz",
  "key14": "3zFNTzbDSVCE67wGh4XFbLrKmGWDTExfK1m7FS55k51duELLqbptHFEx4bFZGHa5bDbJSzr6B4ozBXW7fQGZKgen",
  "key15": "3eq8c3etKkfxtD2NitaC92b8Zxgq1YLG41AHck4cnCsYWUZ9765XdzG4q4rCJiJ1goYXayee5yWF5v3L3wgGBDTX",
  "key16": "5hu4uZkUFVVYZiSKX4USQNPZjo9AqMvtKzaKU6xkagsT9F4srGnmJ8HRc2Js8jgAKmso2EvxakHLFhppZM6t3tEt",
  "key17": "2FbBe3v4jxXvvxRmFxqF8eNzvsptpgctXHLExnjnnwBVQ46hjbQs8iEibw24pXFoH8DRqZ36PbbAwAXrZ8kyc6Nj",
  "key18": "5p6wb721JsnD5CXwNpkAp6F5RT5BPWrhDk995dRCD1vVqJzUznptT8nwLVuKViTQyfsS2zAkTyjtZu335UJPBWor",
  "key19": "3rXRtNwHrierU7yDpqCFP2r3KFkwW1pyi7CooRy5imM7RTBvg7pXCZf8bqR4ty2W9XjstTP4xCf633VuVnZGeAtR",
  "key20": "21N5kFcr99zWzNo9H3UxWYgjdTrJw1qLJELTTfCDYiNtZEunu5C2PsyqnnB5wPVjrw1jx3jSFsx1aFamQfZqqnPh",
  "key21": "3sABPPPhmnWH6KzgJb2BjLBCCrVxBnos2E6GGoe7CsShhHwKebhrp2pwX7nxu8gZzunr6UrSPPYBMqyAFXHF1a84",
  "key22": "dCMZ8d9451RV2xaK8c3Gu8Eu6FqjbsvQ6RTTCPPF8hGuaPR2zY4pBpF3fduGTZhXXcgB4423336QLNiWjEGMtqa",
  "key23": "9FRXRAopF4GB4zKXHLhcHgc7AfFniga13pbU5n4nyxCcrihchDvgnKTwFYmZC42FUK462fWHdjfS8xf4ZymgsM8",
  "key24": "4BnpJz6BFx6CqoKE5V1epqeXUmnA9ShJzu3rePuZMihe8NuaHMBWRBAQVn2Z6Tw29oHFUa8q9TSWcqQnAtFr6CHe",
  "key25": "4CU4K61pa5aPXutQiKBhspQfvWMrsPGfTFabGuGchiVqr2QXBBCTPWBSdXR3qCDBdVfEehPiRZNhmespQmMrnH7J",
  "key26": "54vbfLEhhn3H1tCCMjHiQ9EAG8JF16nqU153noaBzPT4D5MrbF4pqufQHe6tgns6n8w55LuuK6kLV9Z3a27TsN2G",
  "key27": "4C5o1CZgXk2y4q7ngAQb2xrv2KV7aB23Y64tub8vDGwQUYup6j1E4zWyBJMAJqbGXKSJg35123vQ7Gra89Hidjod",
  "key28": "2A97jrhqXu382hHT8wFbivafABbEhq6H6Mbxp8XRnZG6rucPSECHudMZc7Di3Y5wb73iSFvbEJnTfu3BWSPpnU3i",
  "key29": "qNpTQWfmswPHPE679mEy2RPX9dxUxJHf7P85W7fjdps5G8JxE5s4kJCHy5hEsBCxXC1A14AuJtqp1UwggCJ9qvA",
  "key30": "5j15knNxwNDRbHH2ur2rLnsaBWs98hJXZQXxcjgWFSTbKtu6sfkLPjjtHuo4529wDX8sAY7J1BvcBwTuqgHHL7sF",
  "key31": "3zgSSt9yTCL3n34VygqqCPRigvFpKsNAVvxLwE1EfzW6pLRiMNqdYE2Sw63ifAg6BDTjAqp8dJ7pX9f7TLo8QQ47",
  "key32": "StnZhMUxgNSBFiuG2jrxj176h2FmftmRbhc2SQFBRMwWDJtvuzjFdjzPnT8eCRgbhXutGNChhJU2GgrNKWL4QkQ",
  "key33": "3u66z8mosz6B8XWo9rMq6GzvYcoWnFCYkoHt8DMVNUHn9D15GzL7dCcTDS7j2K4NAHm899EkUiurUjiSGicjbi4o",
  "key34": "612RgCPAnMmco8JByEPs1m6qj9n1PCxTpuV9qm27FuAgke8uF8UxuhUyvvwuzPiNyc6X1bgg8RHFAKYk5jFPcKw6",
  "key35": "S8hdozwMqeZybhb28PbjqJiAukFZitud8T83R7JuJq2KH3CetUfntrswxUmY1Yq667V3wdZoKW4SnmL4FEUgMYp",
  "key36": "4FkNGi6G36Nt7ouLXVueiiped2g4sSR5hpoySy3ZPCc3MmDG6V6HTr8rMfVMn54nkA6qhK3ipcRWFZavC3AA3yuj",
  "key37": "3ETksnK9Qf7CX2yhUTqWh3MBuNtvj2juCpocE5oVBUKUYPvSBXt955mohd4oWGfRT5L35SnjWEAFCafS2FbAXdUA",
  "key38": "WTRdgGnYPYjDxEqyMtkfDbfPWXy3q8iN88MdnUqyATfaE9YE6geUQBFoDzwvx4Pyd4rp2tfpGh1pVWscKA1FsXu",
  "key39": "2LBeEVAwybjaL42gnfgo1jRzit2CAUotNYzpP7SZqcnqBwCcxDFVvrQVyA5RwV1SAqor9Ap47mQd7nGx6iaNqkcC",
  "key40": "49spQDAnvTiEeXrBTTcV9VTE4dSnbEXqfWUgnu3JNvvwz3ebqCR6TtSRqGWFGH2WeYuvxHt8yq1pbHmt81UqbVp8",
  "key41": "4bV6WLVxVyQLWS3cMYJNVDmxHZpr13uMwEeDXrQiY87c767rZLyqbEBrGX9BtpmWQfmQA9aembds6ha3yxFmawNX",
  "key42": "4TxGSaxiSDxenmp465GJKeRFYdP2RX9gkeTCG4j71FTrzMXibGSqzLLexcRuXd7MTzqmNCLitRBbjfsFwutWGP3X",
  "key43": "3x26jGCT4UnNnhPb6rpZiPhEU1Fq2ed15t8zqryfNFemcoHFXnQVZ57x2iskVMUyYgqxVPaFXon3hYh4MibAe1MK",
  "key44": "5zVd6sYrgubbTyCRhbneXu4Er3e4UTT7NoEEJunzA6ZX1cW33GLc6b1smttNd5cDk7cp61ExGfvdzTY8VCYWRt5n",
  "key45": "2mJTxxb1TdT8EdnpLwkcMEWeEc4kBuFP15zmRJ69E2NnBjLUh7sxMDCbUGjmet2FbY73eNNT3SjbYzT2w24TjChZ",
  "key46": "ffmp6GPqfwMvS48ESPVJP4pKqf3GZP47bkpwcViSr9J2GzqzRmsz9K5VUXVBm7mZdh5H4few9Kp1Dqg557kx35b",
  "key47": "4w3ZCi6BngwV6ibj7vbeRTByuFVYDbDiDnpCHz1f1W8vYnECgs9WQp3Az1qoTrbmzMdswtzNDzHCR3LFXsGNxvE2"
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
