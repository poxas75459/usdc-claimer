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
    "5KZDpPBuCxtfRDN1nTWWqhFiPjo3xyTqJ7EeuCMuSBJmrTM1u3kKvMhtGqLCfzFn1fPsCZooe3QpEWfzqVqa5MkU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5duGHUUnKotsuLc9kMrBLxtWyZL3z7eDAfDLCaEtUrLGsLCzpYWDbEUfLRznVA8s7j3ySvc2em3s7WLGeuirUrMW",
  "key1": "5yJvp5eidH8cH2eJVHUWpSykBAbYzMyeaCDRTn1wWwJU6Y9V42ZWxcbWeugvAw7MHTTYwwxnqzNeQbTXbVFaVNQ3",
  "key2": "5m8Bfvpr6vJEu5L1euwbAjMePUj1Ra684PefDFp1kbKqcVtqJUPkiRKfVuhm9h1DNB6V8w9PyJohLsgFVgfPawK1",
  "key3": "35sumPaN97zo2xcqwmZF5rMa8ghxFXJ4MxSwtFDgkatiJJVEWcyMKTqpp7taNED6V79Yc8q4GcAtBFeByD8HS1XQ",
  "key4": "9pqho3nd7jJLF6GHNVUtmPDFW9sUBsHLMbiPHVrwzmBUZAKPqqKWXPPYsgTutdkMSGSvPkhwrQDgqi1aCp9qhf4",
  "key5": "2VbW3AiEKcpYmRHfsQXnwNppFSWEC8q9GJsVwZwTH7LXbvzKo1Afu4zndxLammQsnDv4PgAApDHPahJyFJhPKXSN",
  "key6": "tjym4wtwE1FjimiDzgpryAp7FdoXLwc7qRh3HrQuN4iDAV2m8fJr7iEiWWRQe8iMqjGPDDPTXLJxzua2eifEooN",
  "key7": "MM6dA5YPEZPKv7gRVS1zJ34MUub9A2j5NdTWcrtoVRcQQVw8fPmpLxWd9XSgWQsZowqETRGe7o36RXgEvm6MsVh",
  "key8": "2ZyF12GWdM4ecamaRagztjNj4hiXCiZ6ZTs7BrSHABMJfCY3hVA43wb5gvSdzs55wEZ4c7HApZALh2c7oU9gn6bA",
  "key9": "5j5XNjBZ6bDFq1mAK4p24s6cB2UXQSercUCghh79kTSjqe2uiWJbxEvAABSGsRenVdFyR6EJJa8cXDgPNfoyqzYu",
  "key10": "5qLTwdirfE4jcKjDx1Y7w58m9qBBN7VBphmLDUhtUeMYYQ26mxgcq5DygtmS1naqcb2Z8xhCF1furoDgHz2gEgww",
  "key11": "3w2owYyeQsfN4MBzTfyYAgs6D9nMW8ufoCj1GQuPtAzrJbipUJvAn8fyYjb5EKP6FwVpNSx9F1N8BwTJNgDfMyja",
  "key12": "5AftL6VP2Dq7dyc2kPUN1P1GKgfgWamVvF5Dth33f97krcfPkMWQSyoSepoErzjtACFywpgyikJSHCVWu1dQ5nyv",
  "key13": "4QKtY413Va86iP1X4UY9LpoAY5cZ2rjMb35adpraBYTJmwjeuWUu12dAHecPdrwvMZiW9DeUPrjbmape1Zspi4LK",
  "key14": "3ggsbffzEgR1zzjpRdgG4ugtfUMJcCTLRUobsGBzEBMt1JtdfeEMPWewkMdsQ7jG1pEUHtQD58PAVzxuQPtCQT6f",
  "key15": "2WTb4xydaXDPMMiqWoXF5dRohnTVvs76HWoDpw1odkRnECHMCkAkGLXTAKqfjTmwwY1iDe6g5huGjeMP1BLH4qYc",
  "key16": "49r1ayEspTkZwCkXSPrWMqdmUpNEdmhJsuzfXtSuqRaewB9XDMP7bJUTHVZKbKK9cEp2sRNbDneMm8QEp11D1e1i",
  "key17": "38tvRvQ8fcQ5t6rr9Qm6MjQmGysW3DNM6prpSzEXrR5MBpf8Sx1ZoB4zThNDi49iQrsjjptfScWjiSA3MEQdubp3",
  "key18": "2mtrvPtV91wzK95wqkifdMrhWmKmM1JJGohgUGvEdszbUVJyd3uGU9KbXdHq7SQ6MXRDVoY7wLTUUfd7gt4AGX3F",
  "key19": "4mDP2JpAUDsDWghTre2sPbELmb8MSsghDNhfeqtbRV9tt4VGRdvDhn4Gf1h87zSetzCyNY4HUT3EPgs9magouWpM",
  "key20": "DcNqSvfGQW9RAm5prWNvF1Jn8ioArQz85P6Zv7htKa6xF5NUUPDiZ56LCpy6KcQKSz1jr3eTwGtchHEmFHRmohV",
  "key21": "3wnocWP3wYyBDMmnUV6gdVaZEwg31ANFzV5SdRzcEhShMnrb3Lg6K5FsxjeG4kCUQHRaFZ6wGxhNaGjq2WP5uVzm",
  "key22": "GVC1mJDq64jvfgwnVWPwq7naxzHTazaBZboVnDHsxwx8KdtoDbF24eJfXib86J4TYQPtfTaNUBXvegELhakhxjw",
  "key23": "2C6jszDx3hAeaaKPEZNorNGkZ8jycM4oWjBtm1rYBTKEKm2d5vZBkCXprCWEqcHUonFWfVh5FG7QdZhUsw1MvTyq",
  "key24": "4TSmETZQPAoBixbGikHPZgeX35pjAaadfcG5YCDdvkWvZaJMbPGKPdyXDXvH5LqNDo9rvbKpzukQsR8FAC7LHRXc",
  "key25": "2BYWDocZjemDPpoVwVBPJd3xG7W9nK43he221dRom5ZKQk9o7hZmZeqSxb5zNoxEMJ2whqtNT2FzVHjhYes8U3a4",
  "key26": "4Nwc1beMVSr3KGgkCZ55F2w19Lbe3ay6Diab4V2GhGyQ96cB149cZAb4vYEgnHqhUi8A9RvW5ZcS4GV6n87ZuNWC",
  "key27": "5pp8y4fd4BnLKHPzv3hJwb8a4j2WzcpFatfTgqeQCJFv2U4B1zLSw3f6CA8DhTd9zsh2oCFc3sVq84izdAXohR7r",
  "key28": "3rKxDLNANJk74wBjXE7ifw27PXs8oz3GcDFtZUF4jTEPPhBGZJGWwSKyGwBhn8grZy4pEg7pWDRneLhtp8Qtmdyn",
  "key29": "UFFaMisqEgc53TNyvma3vxZjYVnNbabdWhJDpRz9jpTFLkE6qYT73xv3KQkjh64DAGtR7Lx6Nhnx9TDW6g4a9Vo",
  "key30": "67JowYkphdvf9HGeq2Ho5uh5EpvrWibab56vRbVLPuHXHiamrKyL92jPpyRYF87Uem3REWMw8dY5Vtw32zE3XQ8b",
  "key31": "i8d338vneVZKVjjDD7dqn5AS1NBhBp6qmX9sXhF31ZdRGDCxgfpxRSstjqkx4aG4U9hjgEkBPQ2VjQVZafwQzQ7",
  "key32": "4PgYLswgigP9BLuJWQcWf1czR1DsAQ2EgBenWRNdx1UteJkxpaNADMVeeM9jcHSee1TaYCbucfbTtiS7UGaPxq2A",
  "key33": "3Kf5a4qqApJo71msZ8UgFqMZhjjQnH1wQq5WUnyYSEsNCKrEoJJMQTqWL9iReGHUEUGNoEp7n1hTTBv5eNJc3xK2",
  "key34": "26DWqLv1yj3t1zycjp6fAGe5Tfy5Atw942JQTiFxRKw4MB4rqnVfKNRczfXhvbvyFoCHxgCxMm3YDy3s7VNN2Qit",
  "key35": "39ZByRn1hKektaoTwcHU7Cm9Aerdr22rnrGwiaRq8WjZVcfM8o7UzwcFjAK3e5WD6PQGmyVsrb9MoCfd4ADDCEZ3",
  "key36": "34vG2736Pcriay1GLCv562Z4wFaf7SxPsCUfbzL9qzkuJLPhkHdRbP737GmVP6iejWLbEwardaSk34WRsFWfzkd8",
  "key37": "2BRfYFXH83jgCAiBoi5Ewk49mKjyFCcxqp3SzMnxPVArhhuhoUPQr8mtUf6ibxnfM1ebtWGvj6Nj3eM2g9cU3BnX",
  "key38": "45TBdj1ca7ZZLxvzopajZWX1YTyZ3H3a5SxyBAGCSvEoCEhm36s43YNkso5Zw6UMNWQATY3BSDS5bPERALFktRs3",
  "key39": "vUcWEKhPpsiw1QAAQnHt8zMgQWpReqAjo6P14qvaVVbYqX6MY8KpSiNU6d8ZwpSEhBJdEshsgKAYiDieJZLA8NG",
  "key40": "36ffTEygwPJUfemctKWAHTAEWP2ZbvCF1S5PhkmWo4tqFMETYZchvTBt3kJbaH5xGkNuCZQa5E7JAEgWKzDwfGpY"
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
