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
    "pev9oyq7LiVBuv9BtmHSdTBqNMYEgALfvaXEtdgsqRwhvkeXgc9k9N9fipVj7MQcCDyKjsnd66rW32i1hMTHeQe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oVjU6qGvfMmnKLaVJJRZLXjaGZ5k628o9L2As7Rn13FvAnWKhtnPEedPZSCfPbeRmJd1CX6L2jw796c9VDB2Zps",
  "key1": "2zVEsYqdXV1zPZHAcTUovqwy8Mq89U1sBLrqxYpv3drBg2ruZhGkivS1iiPkXMT4vSAAWQEGJeTs6eUZHgRbKn7K",
  "key2": "uvqj5RJDWRovff66Q4FwqFpZ3XQCjG5tNVxAHf6g6CEUxnE1XeBHfhdbsk6GC8DriZH2VbgCFM74d8ugY4rkSFX",
  "key3": "bXm277F7BD53AzCjtyn3zAmQuqAF6wRKyqKdRL6WmAQKMADUN98C9qq7XDVhkaQMUpmfCp8eTBUUmU7p3YbuGYp",
  "key4": "3vAwLxiHCqm8YjfNBSxW3ENzWoRky6QDx7uyjiE8nfUBup5b4Lcgm6qsuKQDhfpNxrsuMu6JcC1XE8GFE8Fvitys",
  "key5": "3r7aBkkj6p4JAwa7QXbxnXtFy273ecVz7bXFbAdcX2KBscpQRPtZ4ufydNuykm34JeKy8YFJ9dm5SLPRb6aJTMwH",
  "key6": "2xEGfa41PobKYKiN63iZdyBYx5ymtB5xAqRaEuoWE2doFiSHsusAZ2VqdE6g1Dju9bVyJZrMnZUfb15mJRPncCSX",
  "key7": "8g25SxUFU5ekyAaRriGJrYycbsCEknJzxG1m86TuG9xnGmxfqY5yyQeXyGPaCJ6upnsWZKy8DPGhC7NfwntMaSX",
  "key8": "4pnCpqsRmhehEEhf3ZHnWApHAk6JPmZ8xhNA5DWbr9J14kQvSy96xeN7NQJqHfW83cZMeWJRvjQ85y7rsigJHLkD",
  "key9": "5br4G8CfzvMAfZAMdXWQb5zEdCc31Gh6RpFAFCsBGfHUucrhdXxyE635eRWr7gQJDLSBRM41abQ3ptyDqXgg2m9U",
  "key10": "5vVHVF7MsFnzqCTdXckHzrzMQ2WShuLgFexAWDauVMDxQ5w652wpt9c9gtq8E3TJWq5UF9sGDxYdBdJicGLnhg5V",
  "key11": "4xTSSJC2mXU3oyYDt6fjpKPSX99WsedW77itRzQZDz9YcowoaLzY2YnWiN7XhkS9dLTtBmwEb33nbA7XZ9Q7C3aL",
  "key12": "WCywAhSaxKEXuaYubRsVHXCfwvvNTWQzcLgsPP8KguGw81akDdk96dWmaz9iwLJUhELNZpe62xQfAMMZUjxEz2R",
  "key13": "36cV1o99BE189ctpuMjUL9T6T1KD5SMXrHAggJG7hfAqweYzYHqE7xWJw3Ktmckxidz7PUzavZcZ54mPAPB3XLKS",
  "key14": "4oDT714rgtRgQiLKW6KF5DCbbZfnSAEjKuZXY2fpz9GNCJgSqfMSAQJaggJBqTLaSZn8veTKKJVDyNpw9hGDUu2U",
  "key15": "PvCEzWeUvUcDyFq9NoaR4H1sYbCW7g9QTje3tGQGs72N4NBFhskryxtg5xWHgezhcJK2idrvGJKsLEAmC3UjYCu",
  "key16": "3G1U6HVvRr6VpS7vseUbf1btnYVk571K9aCzrn8ZHsxPc2iqMeJKnzyAxYziRJVqCYdTQh2UVq5hNHSySXKownP7",
  "key17": "2hs3eW4Jz6DDYGKrrrzx17Wg45g46kDF3Tr3YYTM2i8iabbuqsvYjmCpVjouAdeXaqK1xv7yyi5ppaBK7m3xJsvJ",
  "key18": "2oyj14GUDbrbnm1ECMD6nXToA3uZLCL4oEDupYLWSxRk83AnEfspM7gdsQPUynx7maua6jYwZKKFXqiD3oD6rozd",
  "key19": "4wguMcMCXbKrwknCCfvkuiNqndjERdLz2GKkjHsPpUkgiswxaUch2i7CBkw7UJM6S1ZSa5aoPZMFS6J8HxHiZjuQ",
  "key20": "2AXUTjNmbYaudMk7P6KqikcXW7RfvD5G8wmD3aeU5dthzyU3aoF5KaePfrECS497v1KFGspctnh3ZozzZDsQZ7n",
  "key21": "3e8wqCeocWwe2JSwfuU1FrKKG3TRtGDFPBWqBSytKXEvcWpckn984avgepPLtTPD3dPNX4FaYvhaaienbCoXGufW",
  "key22": "5zJL6bCXKFE1HBjyz6JXs3DuwopoKfENkSL6Bedsybe1V7JAdPtgWUWD2WriGRVs6PkQF6f7v3JjZiPnBJx2JhFS",
  "key23": "3awEVPn4J78gJ9TMUgTJC7uaJUg2WAqMCLfVJib5W6opCHFDbC9kqEgzR1qeN5T9gLPyTtGnDmdP7YjX7ftKA47p",
  "key24": "2roS2ggTug4r4FG4Byi34cZgooupJGMAG2v8nY6CsttBTHgwEkD2vzRwfuAezYRNaD7QDEF7EJHMp3QmkWQBPZkb",
  "key25": "2EY39LTFiB9x6QSjNaSF3dnHWxKP3p7WdFgSVwJxgLJcMGm3qaDfxrJFjGRvc91v4iK3XJePYZ5L5xmWLQKRV5dt",
  "key26": "BZbd8SexsC3o9i7QfWtMU7xXDvWUFcLvaYb2B34PcsriZjUneBTgvsJoYtmcaz47ac5Kt2mTVL4fskuPt4j7KNh",
  "key27": "4e91rYSbkZZ4zEdspTqNR7ssEZtzcEMijN6Rm7PeivGgKdge2v7sorSWPniuBzUB2gWQvTGpmPE3Wx3qgMkrGkdi",
  "key28": "2YZUqtYoDVsNykJV6czESv3Nd3DiehR6KD8hgsABKMwPHi3Jycu3uFQBAfRAR1FjDubaWCay8Tym6ykLPHF1trDo",
  "key29": "2b6K2WYkVXMDJvcoduhDiyof568XF2EdZtX1cnKmwLpUyHn8VwXpboeMnvYGCW3z5ETjKZi7vEEgC6zEdUtVoutp",
  "key30": "3eRN414h6StJDEXQyAG35Qim5bz3etKtk3B1FLMHwphp2afrL96rRyqgrRPn9ZLkVCMgh4WiMNDMAi61uriUdaC6",
  "key31": "2DBUZewaFvcS289HpNmhbQQMBvErkg8Qcv4mS3H8s3aXagDsMYZgERYdACxfpmS5xxTfw24pa93TKqktMsQhk8jN",
  "key32": "ZSXRqdezi4Co1xDGVp1LqLj3dKfTnMxxCRv5Ug9VVueCXhrBzf2boCKRBCukcFdKbzgNSx1ibvcnau8HpNuC9PG",
  "key33": "Crh8wQDm6PQAkA9N52vPqD26cFGK8SWziWXJUFWt9jbMo6fCW1VNJY5n1PDEGWt1VyT9w5oSdXDjRq9ckgJXGqz",
  "key34": "24YV14phZxG14dhZUFaQahigfe1CLgXcWD5K8VYKTRcAip9eFsjjabhgu6PvedrGDJwvzje5fNuvnX2qmxWgWYjb",
  "key35": "mhUoXQRwCrJcGNFsdTvcgDwq1eYWhRQ8iyAQg1u7L7X8NK7u7aJCEHz2NKUaAtUvKUpPEAX6sRuzQMVdaNcNLgT",
  "key36": "4TbbqKabFp256E1tR8rqeAsXYzs7hX2wVSJWZmGS3BK7DJEUu8K6frcZj54kdKVW6iTsKj2nRbLB68DW9sVSnkci",
  "key37": "4Jtj84BybCsdrF1WFR6jdBAvDvjNWuBTDb6Pcp717d5hkExW4mw7mRXqWZkPgzocMhcqeytpvkwa7exipD2WRJx1",
  "key38": "2GZTTW5XSYX4PWKpEZv9FiJ5NdmVwGQBQixWSqN8SSmENgQmM7TSRrTaxY7W4oi1Bjejc1bhuf1RmRNZcCpA8tKv",
  "key39": "3Xi4TLPydqmVFKvJHyMsAGXzGVZoCsVKfYB5FqghCwkuSBWZwATT94tvKDZdXvCbPvAyVk86QaCoiwWkCYeE4DiE",
  "key40": "yYCxEosJFbjQZaNog7tQXVXrdUvYDP7m3TCKsfA7LJfGe1hZZJog5zoxMA68KajM8neCq7nFe9fEYw2zVNV8kmp",
  "key41": "QC3nnyc7xx4YHyU1rR826mgvXyrGktzu2bdVg63gNk7wB6kduqfCjAKhTnQAkkjFvCRreCF3Y4NRR6g3f5j3ZdV",
  "key42": "hJphBw7BQG1szchq6dLbv4EjWmRVLTipHEXa865fCDRdmh5tfhwoJNJjvvTDM2YZWABXAffSsMzLkDW7CJiFLVE"
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
