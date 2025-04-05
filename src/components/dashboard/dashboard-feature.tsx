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
    "63ThbfELdijtfjYgqR9U16jMNEH6NUzVZgKMvBbJM9rqCLZCY8fzLdsabhNGmck7juKG1feqvcYYTNJdtrK9m24w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JzmJziyH56kX4oVRei3WBTcAdSuN5gkaQ3F6Lf6wbpLnR4jucMqwXZb8xg75L6Um9h1fBNGn9EtfiRd3ed9enyW",
  "key1": "2aeJTLnzRm7jh8ju9Lv4kMutLdsXLo3dgYFKHw6K43JDZz7dRC5NuEaawRPKPkcrp9bMVWJ3tHTLBfjcPJpyMkGD",
  "key2": "66tLy8UkiMEdkdei1r1AxtXawDcnjTcco6LDKGYhgULDHLDNTPWmaSAVzoSANeXLnWYpeXQj2dXYhzFzq1QGbMi3",
  "key3": "56HpmL7twNmxVznSXXbAJbJWwc84AVLuBrr97HGQgaC4RZDUUaqaM8bNYm4ahxT4i3Fnw5MvSqfVy1oKKYxotxvy",
  "key4": "5tx2d2s4DtP6vksRGLhMUacEpeNT6akdXDbHoUmCduG2YCt85No2rerYqiGDt5oP47W62xU3ikArEd6QTLVnd7mr",
  "key5": "b8y5z9upBSbwnMt22HbBrGvVDCFS3F53bbvLnbjLvgBSBSoJeHEkrqKU7ZZFdhS25FChQat9Upca92bEtaMuJ3u",
  "key6": "54Ez95qK2N4BevtD1ych8yyhVJKGoSMvDRsh2dab1We7vsv7KSobH4bkzjgkKi1ZxFNidCP6rb6P8ZeBioQCTxw2",
  "key7": "42VNTEp7a9HC67GDVw4tDDFKue7HCgT7e4qRGqkwqj9YX4nihPFoGkg68JCZL5Q87MQYkRb2fA8ugQgKei4saJRY",
  "key8": "kwPzoxzmEHKQittU8nU1LE1sb68CzixytGTaiLeq9YehJa7CME63NJufrbMpMR3wLJLVSmmieEiM64E1QvW933H",
  "key9": "2TuErYpnKNs9Va1aHEFtxE5yo68jg1JPwTZRRnYWSjLPdDcubkSK42Xx8XLnSzSBXWGWa1MUqheh7csiaxxfKpJ5",
  "key10": "UiUgqmhjmyEC5QsP8MU1J8dYbHaGR9sCsRQqTUZaYN6f7R983zweSXWa9A3YW5iBTjgpBq6bW2qFEt992Kwmziv",
  "key11": "4bNF88ccpzs1RzsEhuQetAL7PWUtCabnX99aP76wPReyt6vABUyQCwx5DqzSJSoTAbeQaTYENodW5e88ggcuk76",
  "key12": "2aAb3fZoNy85uQeQMxpEhKvEkE9KTgd18htcV6Xxsy9AR4odPvj4P6ayYR6SNcHxJo57ASTvz3fBi7Fr5udCYArw",
  "key13": "4nM7yTjfFfPAw3WDb925tQsbqDjHEP53vgYyUZUfW7SiuZTUN73wfys2VnyjxjDmq8uRg8WYBCdNSwPiqaP64T1s",
  "key14": "5DrHWxYvFVKUQu8UqSCaudujKtSDjvwH9AF7xBvVhQF9W3mxyxR6LtmhkejUnhCbQXEKmiGoihViPooy2iEYS2uL",
  "key15": "3yC1fpMgqXQmvR3iSC3G22aqt9AeuSqP5spHTeW3KCQvNCHPYPVM8mpcE529Tr6DG34hmAgjuNA2UgKuuS4XfYzY",
  "key16": "4NRB3FNnFYSHYApFSYY43m88HTNVUT4dQ9BHPoRXx4SrafR95qqoNYpJyr2XuSD58zLyhVUWcZ4QUyAx6owRgUMd",
  "key17": "5reFsw8sZxgUB7PJZLZ2QUFwXZz8SvWsbEtSYWZiYV3FnRY2RhcxKcQQ1G77JTtecxD7gqTZx8xBbkkWaQGPubqz",
  "key18": "4X1tEoB4wKSfznxBkqWcVZLgZAG8UmH28XHyNs4SYeogPXRxkefq1aC4TE8LZQ72or6hLJ75Tw6GTk869HoCQhsd",
  "key19": "4jxSsqRNgG7qcaA5qGncFbNQdyvqZrqqZMHMTBjwwhuZqdiP6vs8qkyCYPZSybW1Skg6ECrUhFkEP1ZDrMGmcCnA",
  "key20": "356wPDP49Dmn4pRwALrTdEw3FHoLRLuRozqYq81nJTkWpGHp2SGBy2wH4PJjUxbNqy53LVBvtwWM3QrZPvGEWVZf",
  "key21": "3CDze9JivTUvh7UKEyurJnWX6QGNe4R5xFifEvoT6ad3SP4zySWuVSoEZYNZuTopbSFsXeXhvJcsRtsCqu14tVMC",
  "key22": "QKvwudLHPPskM46NRj96igJZ5ekGQbUbwcWwnHE9PhhQZ6hNJJUZCnCAAhaJoxBmkd2Kp8it4vnV2MaWdABVv7Z",
  "key23": "4kAgPtQuZRTLNMUWGbzr2SyqWgstX3GkyATBGBCCHDRN3bKxGmh3B57p19VopmnuzN2xbm17K9Nj12ZhjrPq4ZKK",
  "key24": "5dHBrMe4iwzqyuacihuS2idQwsGGHJpP5X98mwbpAw2cPfu1ojWsecdoSJDDZXD9wY8n59HiSWNGYEomAV44VQuo"
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
