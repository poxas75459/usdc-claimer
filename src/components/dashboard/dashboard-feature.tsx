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
    "2BDmWs3cNAEDs5dmrLPpjdyJGVAbQD6xNqJRhByoFUUrQnzCXPsntBaeksJasoyVzosAsZRQ524xQMakXwALC95d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NbhGedKsc5qxyxngWbAtvRTaSngkmsfXmVrjqWXJwz1my4trm8YZYfx6naDMbZfwEpdXBgF2uYzr7AbUpWtjd34",
  "key1": "2AxdZivqUyJvbmuK31P7kxUnkseoDa4hxFhedPLbAZQWkFZzJzsLoGfGFkyArkaQfcbP6shbt668Tu4zZDVEReUJ",
  "key2": "5i9fkMeFxFUFxzbUEBeqppfHJTpS1ZEerbx6xByS4koZPjYWS7qvYA7vJCJpogZNUqb6yKfiXvmPyGtmPqMDFiiu",
  "key3": "3uQEGRoMZBgaMDqenaE5VdB2EFAoJUkVikJ3cEtA5hPNyeQuhw3oYW7oy7aSNFVdG16KpeDA6H8DdMK4qyEdV6Ms",
  "key4": "3y3EhauFdEwk733VmoWVmxzGj4HNgzRjTK99MoSFYCHzbuX33pD3kwD6rv5FUX7ykbfKBbizkieiqwEpyC47YsN1",
  "key5": "MCfnk3agSTMh3BQu33WGPDQQqom2MBYPhMbkgxDHuiMG4kQ7RrJC9U3ZDC5DTzLFFvjKz6rgfLJvC3v5xyzuJWj",
  "key6": "5pTjCLBEDa2sz9kS3Yg9wZHntSkk9iBnBp5PF2DYDi8JcKY9hsQ5sc9n9zpyJZdj1Vb1RsfUdNR4EhBwVQX5QGVw",
  "key7": "qfRnuELcksmzJrkEsdy4Aq7e3RqZTWsahm2dr8FHRXUMkMaU6y3dHQitPh9ity2R7Fq19MwUsrP6bHkJHFMrfyE",
  "key8": "2tTdMLzJxBhF8NZfYcT5Smr5suvq49Rdq8SsEoK7ZhRFVyCiTWU6kA5wVTQ97X2CS8e4DLyMUJVJnPf9Xc2QF6b4",
  "key9": "3yokJz3GDDcjyabtyZBVYfEQrAd1uffaBGfBWsBnrrMMdanj741Q6wVtPksyMidwBNtwNo684ndk7ycYtwWR3AYH",
  "key10": "3o3pDzJWEgFGkraJ23yXjsX3jomzS9eLR9udgbJWZUA6iz5ZQT2iVh3FEzUCXqohDR6R3cSiRL12rB1vEXgMBv5Y",
  "key11": "22ABn3cp9Xj9tE7Wd1CcVRXSZ8m6VvHHjVzCf8pbwdf2zXFaoWZWUjNxRmzhPEb3wUPT7c8MhSL3LQW9siDwnajY",
  "key12": "4t7nKrRB6YfDFh1aA14bWoQvqPwEfCCJuyoUW4MVyww11BczuexL4h2hjH4HPeGVATcytBz7LemQxjuE4dErjSpY",
  "key13": "4YoH6Lni6wYyk7NGNj8Fi1FbDHwEZNMDshCwy1zBs26kKw9NTyKw7KtXyzychDXN3gaT21BJPFNcw9TucR3Qx6ZA",
  "key14": "66M1WrgCe94NiK7DsnT656zj3Q1etqHqrPpSnpEXm7ACwGAQfW2nfBeZvjLgu56yUD7rdvBmc2mEkMMJUQEeMVs6",
  "key15": "qPzsL25yVSW9mERa28wxeDADBCUYPQNe6BrmpUCxoEtQBudZ1rcf7Xd4R9dVN5anFZyYgnWJy5icpyQ5jCF36q8",
  "key16": "3yVTcnNhz1AHar9hNLLXZgwRHLe4qCuZmgU9vTXBeqYpn6bZmqQdXGF3tGTpSUuFyWVUAbMrVa5eBndH2tjJ9PGq",
  "key17": "5ptG4aFsULiQeKt9iVe1JJpNJzdfL1bygyTNkiuLRUwTtupYDWmGmkTTFRZ2xs7v2i5uG21rm4m6rewBj24csAH1",
  "key18": "KrcVrrDZBNCcLPvWo8vDNftTvjgmqLFf8vom16VTsvhmXafBFJaXCMWBTk1Q9X6i4d1SKkJ7NBzeqsDaJ9dVV4r",
  "key19": "4Zc8UEixA4vpWMjHC1qFno1UGFuGuT8nBrqCYpdMYXgkmikTdvEy7q21X9BA3NEeCpTtaHrx4AJEaXXdGoA2mBEb",
  "key20": "rJAWSVjixBZL7BAGedLvyYUXDbCK6Yo1B55DHPWAMSBJJ76ptXQ4T6y4kD2GVunhzHSQXStwj5exZBBV7u7APVW",
  "key21": "3zKnP2ScGxKn3ZbfbRpapRZ44cXD55TBWRJUv5q9EbPoRY14RLaRDg2Kg93k7hm76Rt1BuU3irjeGPLTWqT1i3AJ",
  "key22": "rU6u5TTVoXWHeC1ZTEhCSpVHtB4W62DAuVkPPYsKkHywjUNhu7znapMcJgxP6fv3W43Jq1BGmWEqZVdFW493nLx",
  "key23": "2Z4sd7tNTNdd9aknZ8x3xCp13wMUxhSHuba7T3J79Gaidb9ncdZx3Npb9iAuhHy69LkSpZ2Z9yf9aK1UQabJw1Rz",
  "key24": "32FVHmxEYr3C51vHQ2tUwQwQPn1VvUU7rSPQZzNs4YTuHc4bHCz9ZsUXNsu2uPE69U2b8zYfsuGMgUi2xcM4bP8T"
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
