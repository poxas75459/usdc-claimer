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
    "3nMAbZinTkM48KpMLiNbu7WSFW6acVCrA2i2tTMfwvabyfJkwnttka4ugfs1SEJhY2Y6msCX9M7kCpNwWYPwBZFa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x8U31iX2o9b5cPbRjpPi7oMStrtyHn9oNjAUfnVtGb7CCJ2AqcpZEKQxCYTxiKBjhm8QK3dN4kRt4DNGxNyGuNy",
  "key1": "39UUx1XhnMn4Er8W9H2wDkDTVkaCUPZeaBVAdoKV89DvNrNmPR9uRHNgRxzFugFJ89GrBERJQDv8WNHxbYWpRkK5",
  "key2": "4GdYX5f1UrQY33bPCDbRAEzFeMCKdHBAmu8KWUNRscoHnM2zjB2833NDbk7dgccAj1LCaPkozJrAkvtCzs7iwf9Q",
  "key3": "2DSVeztEvYEfEMuLgzmektbLh8pkSX3SjHeA8Jbu7DQosxcvgkrX1pWd1pDKAeeu9qXkwfM31MNREo5nqZ4S6jsd",
  "key4": "3F6kN76WBnVoo49SFg6MRj7xNrg8iHzpxhg7bjqDRkFoVEjVjXGE3S1BV2RsEiabp3KfkJjTMLz3UiSjdknmsNrS",
  "key5": "3oFkpZfNSD9m2wJBaziNymjecoV7wHtK9Zu9krFdnZkKPcRHWEMmgpCnbf4xyP58vRB4cY3pT2i4ZbiCE3aqXqh8",
  "key6": "4aLdjN3sToW2EtQrxmvRPAB3SW4fQJncT7AbGwHW4Ws72pTZc8focasrEtcLHoVv35zCTYcqeB8wdDa179y8jGrJ",
  "key7": "oXqTUrRDJjJ78Df2ma9FrhYz6QccDphvcApCLyE9onHdAoteHZC2pZ8sjoQucoGADAwhoeNejfHXYeqDg4GBmkq",
  "key8": "CGx4iYNsvuBxca52GbMJFDz9YFHd8wznksVywV6aYYEmDyZmuPC6tZse9kufDWw2QtuPYGbAERid1neYHFUfgPC",
  "key9": "4znaxox6nyXv78UEwdXxGhe2EdKzT5fwqD8yJhUVtFTwkP8o1aCj2w9yjDHm7Sdsk6t5UcKmGfLdLpKU9oHD3819",
  "key10": "58R6bqRHbFvDkdhtbtFDRC1xF8sqZNVDFaUtgAEta51zEtfraojZmW2tEGQD8kJ7yKGuqK9Bx2bJbMN9fzDvLtVW",
  "key11": "45iFTSpB1MoioCDqQpPTJsgeUB7xHUPDQVM4sRztSyArf9pGMPfNpKz9ZouorPkG7S943TdhKTLqrCQug348Dejk",
  "key12": "5622MWhBJ2KY5sLbWzbYcugkKswBRuPGyEPacrDxNvgaBpnWkBaZasbV44sAsMg3Ds54Ht6h6yGFwzj1wVgd1hWg",
  "key13": "3rEF3c5w3o5cmYpRshGcxATvjQez8bRzwK5WQmU9WEsqMLNT8wfwos5vdMDhcHiZ5AEMGhKH1SnKsKp79eZ4kw7h",
  "key14": "34jZaqhfktN2rPC3CS4SfCEU7jcXnuTKGtK8DafcDxihwuDAKhVcmZiQg3XdA5m6JKTQy6w1X8NMFE6tn7rX8taK",
  "key15": "5ysppFDJoqQDL7ToRCHV8N7Z8ZYNKk1uvuqvrVQnxozonGPpy82FgUncuaHrYCHiiWPoUHkyTHtskFCtLTVEL8jq",
  "key16": "3YRByCkJ9TYrmZHtYmqd1EypT6yynM9YWB3hdmdRbT553oQUUmKKSKZZe8Dr1GN2agkUwtn5kuhAyQC5PQMvwtQ8",
  "key17": "3zeL2KPK2Yj9i5iwSuhfgAYhDsED15KHVMz7rRFQZPg6fk4ZQgNterewENjtS6X84XMYe4bpBW4s2VqEE3ZaK8u9",
  "key18": "35TsUUF4cuqPLyHQpEGvdwU68fosRJ9EwjUJWsyA1NAwKqhnXeUrQdnLzZCY2xnWU8xD57SxqXjmbdDD1EJLp3wD",
  "key19": "Y2Lzi9Gu8Nb2K3aV4mn8fRV4PLujWcatTXccdGWkhuYAC8Xs7VV5wL6J8q4UTArq41sHn2TbUuF2JiKxhbonW5R",
  "key20": "5DTC3nZu86Mi5WWjKrSHxbCVcFg8BCX1bcDgDsw7e4qV1UTtoK7JD3ZfhRqrage5krVtxQjAFPzuneHF2Wgi2ZtX",
  "key21": "NYT2JHNSgGGFwpSbwpiUBen69xrCR9nzic7yocp7tMnbgabupddUiaeqRQ6cDoUu25emESxbtzezJ3RyBTWf8A2",
  "key22": "5N5zzZHQVd89P3ZZ3LRWEgH8Z7j89ynW1gEnbwKMczZ8mqbwsEZJZZUR8BYYAQTxWzWHi8h6hYKzPJUfS345bYxD",
  "key23": "3jgK3pHJUQ2jwEGfmWc1Nu23EBEUpHfKofSvks9oLSbh1mdRxMp8CcVJB74V3gkshuyT5DEncuSVQzkqqA31qRv3",
  "key24": "KLfb8AH4WwBEsLSzUv3kwhfs4ePYA1g4zytekUketEJmknxRntWSoNm8JujsmiZ1jgzaozu2W8gsHcQShGnfXXq",
  "key25": "4yKMLVXSQjXSPvyg2ey19JrrmTjuY5WJgwdoiJ2h4h5x9Rah7qnp45tCkQUcDuh4pb6ZHt3qwPn6FTkhEZKf9Lyx",
  "key26": "4U5LhEbkikpNu65URygdLSx5VV6dAcGzyHrscXUbPmLzdQCbi9SCXrwypoLW6nhiL48oEGEb43xWTqm9377sfQeg",
  "key27": "4gmxLba1EeeKE8kkmjCsnx4hT7tGbs9vz6sZXvogHmkygwKYTRxikbHsYC9Seas4aL9QWwbGkHrndfApvLFKWMJB",
  "key28": "2ztJgUNyvXJLiynjVuiiTQse6hngWWdJ4CEsQVnHngqKQ3sk6ExQfM1d2Gj2sq9Wqq4wTQ6cQRSRjy9yXPQafxmx",
  "key29": "nHYLpfQHyETbkfQxc8QUc4EdtVyp5ChzMoWSQoKPcLRkHQSx51xdf1az9aFJ2UaE34YArEZQbXFSfxdZjhbiZEa"
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
