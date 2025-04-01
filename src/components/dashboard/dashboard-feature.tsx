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
    "2BcB9n1XmVGVEGTuYiKQ8nJ4oEryzFeEfoCPakkeB3cwX1heCLTr7rLbiXLqJpRYPhjdnbF173wY8U3MiNispfYf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W3vQxEjdMwzfH5bNNX3D47UMYh9bMspndLdXE5mqVswKYnkcX3tgtUVzMz6wj6exkNALYPLeaYR3XLxVTrFHXzh",
  "key1": "3faFqmLCbEgcFBNR5abcSB1PXMbT46J95cxTXbH4kbM1m48Fr4wQYcoSgrQgGPuboVi75tLWaUR8U1GJKqeb6UZR",
  "key2": "2qr3pu4SMTSPdHC921Rtz7S2f8GHkobQxWFd5EqimXMtF8W3tRR2jWzvEzpy5F6CS8XSHrhyF28LkMgT6jWsqcdS",
  "key3": "5ikCbdMbLDUg6fMafRPm9BQxkmZyeyxk2uAud8CW4MqbRwp2MeF6NC34Yb6j67mKELLzb7oaucRQLjMrFw6XP1yi",
  "key4": "2sEeGNrc2Yog3i24GnmBQRww92XQE2jiV98UXk654rsK2gDhZY5ikh5hUp2ybdNtuXG63SaJHoJ4neBUafTRgtG2",
  "key5": "2S8onfeawjeAkWKBQx7rKDHDjBm1RKdqkRuacbFzoYbrSTvifXw8tChkX9N6VpsDVtNub8yvce6ztByBDw4qQAei",
  "key6": "5iuw1int2sDTWUZZK1ccqzL56VXAbXFhkmG15LpHugXPHUiwVrBk6txyi2ZodLr2R3gT8XmJS1zK1o81NPEBufUE",
  "key7": "44ovETiTcAYh3sXwmt7zhKB7gPF6724TyL7oGsLfHhx4qp2jt6CgqWUkKzBX3UNEi1L5shCMyQTH84i8uTJCXufg",
  "key8": "2jdGGt1WMKQtqYf7EB2JaF19YuBtNEotioVDFWAMyGzGxXteVSAiXaEprQKfVXV96mBUW9mJPavxnD7juKryx6zt",
  "key9": "qeuF1Ea3K8Mu8jmFqVpbeC9srDohj4s3Uu8awtadhtyawUsoBe2CGAjRTTrm9RLQ33KRB3rnkhF1E1bUBUuTEoc",
  "key10": "2PgNAX8RRRmRyFyCjDJGzTqUxEBrwm7jF299f9REaXEJt7LgesdRXHPe1qTabwNHP9uTCTKapudhbkUqLxZbx4EG",
  "key11": "45o9HAZdqahs4WaUp3jFnppSGznUCipwwz1P8M5v3zKG42zUVn3joHNHhhWFyKVsTi7CNDz6XCoSC1z1iLrnkNbP",
  "key12": "2SA8Z5xmLvgovCzt94dCXjhV7ktfW2bQ5GQtx3vwTksMtYUDntcTE9uXg9RCYxm48NCRVPdhdcT4EMy8BWvVnb68",
  "key13": "5m8dbXRhxgxnb6wtpZYRdQc5eGXpVHzQT4KMyeoWbDCRQoECcEK531EZELQg7vtcDDhn3h8YeNe2YGQzHdjemC4h",
  "key14": "znDoVkFVFnETEeGiuRB4AB448KjxtSuqhWMDVxsyekB52R7dPfSPq6XsArPVi3hFezTZrdfYYxySdzsWLM3FQSC",
  "key15": "4gAfskCSA5ALMnR5EsL5rcXsMmyxYdDe3q5Bd7Zt9SyCcWn3XqndxybVLMePsUUwAhVFcgC1juQyyeBd5z8rJEZL",
  "key16": "35epF6xfMYha3f4XMUdNCNQm9XX6F1CitnKXPPZ5t3bgYGaqr2gkXCrUafdBcNcVeSZTsicQXLhA5Acshs9F6uUs",
  "key17": "3ummGS6u36m1gyPWPdUd9NSxVvfQeY7DU9UTTbcT9M7qxwQu3zgrjn7n1JPJhLqnwsBPQ6r6XW6a5XSE6qAwqb81",
  "key18": "APEma2mAi2iXfhYfKY2myQyTeECM3UL8B5nsZcPWGCRD3wLWdkGQXd1Ti8McKv74zn8ry7n5jZnpGaEdDGAnrMJ",
  "key19": "57QXUAxfWhXJqM1a8DQtSUbauDmYhpBJc1k1E85xkrwQ5FZoWSzRfEZTLeEtDdZuTZSoeRuVabehwT329B4vTK8M",
  "key20": "KhjwLsTdYgbPkbwgbXAnpgn8qeaD1EwkyQaiMcPRcuyiUL9XtMKm2mQzkzoxbXKvN4i4uswMCvvWT9SGXWLH4Qx",
  "key21": "4quNYZ27hE6rbZjeYk1Pm5b3G8fmCcfJ2oXgthDrKZSs7oxKjM4JcazGus7gZ3jTkc3MpxLKHzNyKA1cdaeiEFDa",
  "key22": "2bvg4yzsKrBB4eiZqHzgx5vm9UyPF2xoYSW3XsYxKP22hp9Ps5L4whUM9S335zAHwEQru3S33gT8rPH6ADiDrzu9",
  "key23": "4o8j3pFtVpqLgGArtQ2zZTqdSBFfGoWEqqDdMWYF2uTNXsqdx8DjoHDsnRKerxP5QbaReC1ynFyqDi1bcqPUMrqv",
  "key24": "3FdnafmYgYNcyNmn76dskMT4UqnBeVfDX1xcEKtFfQ1znCHzQs6CYUAYhXLDTBJuZqCnzuiZYFm6NPi55kBE8WwX",
  "key25": "4GqHSVmkDcmoAUuZ5cWquC1tcdS6eM95JcjfTXUU1Jx729WMKL4spFdfyCgGAouEdzTJzUBgDVos9xJpYFc83QdY",
  "key26": "25rDvGZjHjX5YAtb74qEhuwwykUej3nqeF9NzQZLppM4SU3hjeT4sd4Pcpy9zRXs4MdBscku6JKcXBALn1rNRCsm",
  "key27": "5VP6mxUy4qVugECyGXYqgiDjgz4PFhDXF5kDPxAZGFCtCtEfBGAUi68VXBecfUEFptb8NXGd1brEi8ZoR2CMBVJ3",
  "key28": "63MV3LZhpmSLFHwYeqgmmjRN6ayiQqBVUTfj1jFueeTxRw5pn4Tp2KjiPDvRQAEij5nHJvxHJPr9FaBbjsJqZEdS",
  "key29": "2JrtBbSXnmLPtrfYYdCMyDZnCZwBRwSqCsjJa2U62cMfzJMw2cjSFXa67BEkGYyVyYeKbE3U83t38ZuoDK6D9jpg",
  "key30": "2AA9apgB2fDnLkXquYsCXuBwWMTv5VmspM6YPyAe6CVnwC79BoPTZtLF1Ebj6PFVGSgkPnQh92cgjr2zq597Ubyt",
  "key31": "4tkNszjQVJaJD3qiMm23hoAA2qbBy6pS8WoyDpr3bwijrWRE8gqy1wGuCxQQj2NGECTKh7TcPcUpQmYfrTzRDv98",
  "key32": "4pMJEGnWFZMyKuA85a1CFk3cFtGotJ1EfMbmNX54TCfkcVPeBuvJ1FZTQrBrH4TNSzrqKURQaqQvgG6nmXFzZxPZ",
  "key33": "5RMgVikK2CcVcd9rPxEUXHg4bSpPYbc9BgTAkHNyvQwb2M1NRT5gQTDSYmN8ofMb4v3BCRJ6vmg1fpaeAeeXgHZg",
  "key34": "3hr4exefNqt3sd64F8x25yK4u9vcTHuJ6nEkQFKi5eTSxbcu5jv2Yr7t2NUimnbFNiHuJJ4EWCKx6jX3so7zPtW1",
  "key35": "5hK2j9FsUzw7sPSvWKvNNaHhpmx5B3V9xodNB1FZzUsnQgdFmXyMBoWYbaQFbPrW38eb4TNnFCxukyGMzq6BPwrB"
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
