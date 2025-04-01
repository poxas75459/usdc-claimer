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
    "4bpQChwjjYTWaXy8vXLAVvo7MCQ91Z5jUPhyqVBs76GVasdcLTEDhHMjtNgdAiGBoLQKmcpZQ7y25xWX8nPKieos"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59pDMct3hEsEyCDLQs2rcizyuCGzbiUE3HkLzsdKRoJeQ9Je2g5QV6ncm2USRwpACYSxb7bPDmzorWNeKN8Y6Ehm",
  "key1": "r1XRTtkzVnCQVrPo5wxTcajk7WwuA31u9BTUyLXe14Ld5f5eoWtHTFcTJ5gPTsUovbsc8pcswWH5wH3PbPgWtzX",
  "key2": "5uSBeemTbjRHhUWEBkTfzgUTDE48pmotRqtCs8PWCgkJQDVhq27PtFaFBUBYY8zRvfqoebSErczFWvCBGjKxug2i",
  "key3": "2xdv9n7ntPTxG1Vw4XPWgizds2rfc17mfaRM5cadj8Jn1j2PV6vBNb6H8iCEmqgScGm8JZb1wQneouYpojKP86fA",
  "key4": "MaEdF4TdfHojZP7nGhR1Uobegd8HiPW96ZRGKLBrJEa9Xx4hTf2jWrxabL7cZLy9KWtPiFakL5BuuSaGxXeTc49",
  "key5": "3SdFjCwDnihwByc9wS9yuyBEoD5Daecz7qfNoRrbFAAby7LbUdtknBHMEXon48LFwbJ9nFqWfEzLdMsRKQWpcxpU",
  "key6": "ixdt24D2TLZ5FQyoxZZ3Tjb1npTX2VuwdnxKbJrwArJZyhHnVniii2JVj2T5FYvXisRvz4b6V39Akhr3vta9S1M",
  "key7": "5cU5KgTgUsPwqztve7J2fweRjgMmXFGGtAGZyWRDAp7DknHmdufVikJRWmQfqGpoNxz4x5DmE6aukjyE6ffqZp2x",
  "key8": "44aAcmJJjuL6qvPfd7sj4vYPWew7bAWWPuWkXUjCbRu4X2u4Jc6UoykRiF5ePz4Rm6zZVnfd4YKcKDff3EcuKmAH",
  "key9": "4SijcyKjKLnLisC7jQc8GqqT4sY9Jz8ikUaAEaccRvE7bCVHCZNL5ngE4HG9NKsWYTXCxF7Px9KsNaWDvEixVijm",
  "key10": "2NsrM4TEcnqaa6mAP3DbB4FZB1sxz9ag1NU9ScmVpexXPBi5bCouXuFJ1dc3XfXetqqGVL3ApaQg7CyDetbeYpk1",
  "key11": "2APJN243sq15xXSiHVLN2MHyRXE7xjaUkJjPiErpVD8baPcGAXxwUPdQobopkdYSxaRnyspe9Bbk7imftDhYGBsg",
  "key12": "4Aw54MdPh54qkUEHadU1NNtDQtxVCb4razbFLkPt71iujrcLeCMZfQA4Eekqz5TCHM3xKyQGYd7h4eFBS1T3sSAd",
  "key13": "4qRVZ9dKpULgQZGR2QgYXo3huTkm9nELjQcwmjobG4Ez1SFsGjHZGiNRwYaAJg7wgoc2xkH8FShbkTxMWYy8wnJ8",
  "key14": "5vSF4hsWP23odiJKYauN5nBF6hd4MUWqutwUd7niqidShnB1GZ9hGc1z2gKCA1zfD1yuyyKzHUNxvvYLtRB9tX8N",
  "key15": "3iQepQpvevAYGMwb5sVTDQ7SzyQ82DhYZ7FQksJS36i6sPq7gxMdD4XqmwQqbHBRzK8JmNwhmLjx2gYy45HBgmrt",
  "key16": "evYmeJvPu5RreRwZ2TKHgLGAKackRXajmtN4UgmcYZU6LeQxFV6rUz3zWQPde3Rs5JCopuU6LeFBso6ccLFqgSZ",
  "key17": "2H5Nva5xatefu2yE77gbaP9ctZ9UMH8vXU94Xuyngnovv6msWMKdfDqhmXQFXjsa74c3ArkvmsrjmL5g93ejGke7",
  "key18": "2TNcnWRNkmLHek1wFHSood81kejauKY9JgD8xK6PuRY2WPCv4nFnrJSCMcMvSiYSg8mGTjPmQtgeLfLDUpWvKgf5",
  "key19": "5cqYG8VKoEYKUf3sejq4We2mmyQmbvhTKj6SjzsqT8cuAM1JF9bFG2ZYYSYUHxCWjrDMnG9nG4dGvkFeiWXBQaQS",
  "key20": "mUYJymLthE8EAotuN4c8mtjSbqXh1Hp8W6Nc1EonWG8V9Y4o2heNb8o4BqPkCRDGY1jy4qpFFd3Y5TK5NhGBoxa",
  "key21": "2RXTEKabKGZpydL6F6ZCjcVjHJSotdhuRkjDgeYL2Ho1tsWcCHjQiH6GCoNaYNkbd4qiUUjWmrJ6RqdSLiNBhwos",
  "key22": "28ETpPZKU66LLJj3nRwJgiKpraMTyVvPU5hW6Jo1c6nNXhEtXktuYPw2TK5J7JL4FZDAChAJNQsDT45eMxusRoRn",
  "key23": "2FePPqtg9cdrabLASAE23o5GvCjW4vnT7nbb1cEoensnF9NGsED6yiiJrdfgDdqDdW9bg1GmEwWV4PMZnAEYk8vY",
  "key24": "2oL3xrS7xtUEQtrw4o34aNA1GoBq6G6rmySzNCFzQ1HGCwzGCz19s897oWbWoRW9RGcwzZy8UAZiyehRBgVadVSP",
  "key25": "5fLfADFy47djN4ZQVSigJLhSG3MkEnTxvGTj2iQWv5DsPVnoijLEapyGDGmPfQ4iZjR31G5xHuBYAdmhAJWhfhS1",
  "key26": "3ChJwrVK3y8LoHYFiPMJoeJDij4z5zVuuCJqmk8aRfqvSWuNbzvCUsTwzMbmWNd8JUZLHKv8j1r5FQEFbDrvuZkB",
  "key27": "4wtuGowtETDB3nSaummJVos7AvMtL8y9WbCEcHdpKWJ41cgZDGdmgHqS6pbx6RRX3HiVZ6c7eE24x3ZT9i5PCFpj",
  "key28": "5rEMF4ai3uvfefdHqgNJS2SihUqFvZJxU7UVhZknq3SD8XJaVyVgJjJMVCRutEHs4HfX7fCVfiYC4qdr8QgidQ2U",
  "key29": "58wzUjCH2v85nj4sT2uFGXtMDB1Rumkf3LQS5zJdnKtnBWFNnohT9oRDR2shjLgrxdqyc87CJ7UEGw3osxaQYeAt",
  "key30": "4b8cgcKUQuRdeMt4ZKNB9Ly8sQnPb3KnTrrGLHcZWr9JVPYGxwaxj3uqARcDkW4Yj7zLUMXTTMdvquQMHn6HSTLX",
  "key31": "4gKjz3ENpg93MGWKWfv7iheWnnixTmnotZMufWortNE8fsEtWQLemCkAsRBQHK5AJqiwRnpJteA9s8vnW4bMYKH8",
  "key32": "5WwbqPSUsrvhgr2q93Nco7cFoyvCKWxeeSVNzXMuw5eqGcLmKUQ6jm345CgoE5C9gPe2rjkLm2ML48avAbp2o15L",
  "key33": "3MZL2ZvbMdvAG6wkVAu6nzDNoJmDs4sxBML9fiBvqJu7LCxCFTbAPTJcBHYXX58SHcqY1dePe9A77QEpFeUSATGB",
  "key34": "4x36jiaQEjkZPWhdjtJDWiftDqmzmTLbhuUvwtERVLQGQZs6DU4qH2EJLuouNiERSC8WTZUMZYaVk7oEzRu6cTJE",
  "key35": "4Tq5GEU19rhR4tNMgM4SBz2ZcKA96APpyK4geF2FjxS8EexKMhqwyCWBmeBJ3jxY2sjMWFvanLvDsgLxWD6eatJR",
  "key36": "5fKWz9MD8V4dh3rR5N1vXwcJxBbHVxeCZDGcTdBD8FA2kuY3xTnXrrwkgPHpJay87SXgQsn5nhbKegYEFSzW91dw",
  "key37": "3FTyuQvnpHLvBKVWdSQb5sHjF2PfGRH25PxPWjqhUtfjVXCd9eLnKfB1SkNpu4U8UpgLbjhjdvUwG2MdxTnzEq4s",
  "key38": "2wFsqVaHstDofBNqWRRLib2z98EdzKAaY6t82mWNrK6TT8gD7HRjoj24mNbg9DRM1TJ7n9vrNGkRAETTG56T2wrv",
  "key39": "2a3fKELRTF6bkyDzwpaVkrguXDGTHrHgtqtEkJ8knNKiZSNM1q8RPNw5pgrGe1iRscXwNviHKtoXdsF9ujzQtfUK"
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
