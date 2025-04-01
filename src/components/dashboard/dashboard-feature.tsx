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
    "tjZXH3pzuk925yq8m8A4J9pyAKos8vaYjtYszBY1as1wdm16SM86x8PdW8WrKeoGXkUm7Nb21uFEJETrqp1csmX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JW11Vyg6YGcmxUze8CU1SjMdfzsG6CLABpJoffP24tvtbtVCArsiZ1crW6CUdZgSpFefjoSwpgwj9E7uh5nZVYb",
  "key1": "4ShP4ePWe14WpEQNbBfJHNWP7qftuEK7fPeBrY4Q9ADpxj3ggY5v5LueeYDdUsv4UrUeqSirKZmuzgn1S2zqH7U8",
  "key2": "RTLBKjug2HdGD6aVjZ8rjZmf2RqV1JjuAhj71rtJdzM2BKVTeKS3fKNYcb8GJpe3oiTwnN96KDrbUA9KesggevY",
  "key3": "263jVohS23aySbyzAiYpU735R8HXBSu9biadEeJZwBqVbUCjdjGDdBUNMVnJqozSjpprxq4kaTgwFi9jWDq1EomG",
  "key4": "2XdQmneUsfnTTiKWj69GwDfDZ6Puzjetn36x1fhk4KJzdtann5STZb1CeCkCWrrfMGCAGwaFsjtsaMvYZxe8dLme",
  "key5": "5tJcnWomxASTvME36o7NzkZbmq7ofr62d1f7d4uk4YLcFvPYAveonuJBLk4Q7i6xamKTWgxsqx1xbdvpEnw9Z7si",
  "key6": "4HHggo6BeejXDQTYWWVG6rQcJoRiz4xjaEAS6FWiHoyaCyYL3Hssd1u6SbfAjEH5dcMbFdRYqK5VTd32EZgyCQtA",
  "key7": "5unfB4UpbomUKq8WsZxoMbuhwfNc7hooLd7nunBS7gzKynx36qtPT6Cgjr1b8TGsWWtJegJMUkAKHTRRaEF68BxU",
  "key8": "5zNGYGxdStR8N3sqXgrmgHvMmuxUzLTKhPbgMYZ8jQgDd4sw17cyvLkc8T6C6FExYJQRSUcdLcT7Jc6zpSL1Rzi",
  "key9": "2Fep8nKTN3VmsDj4vRmrJqM3MYaSLirUo1DQsPv1yBKti1VtvXHBBjRt1JxuUFrsyd6oeTz1McryQGtD6yPZByAD",
  "key10": "3STWDo2uWb8qSRfbDEFShs7pc4bMiYAPZbxc5VDsUhDNesJh9yRYR4Pt2DJBTpNpi47GF6uWm516KujT2rEbtykK",
  "key11": "3ziRt3WiB2tgdnofCASy59hGWMyyfAWmAytFr41SvZfEJhNRRxhFs6VuB8DKyuteomGTqnkZWbsx12BaeYdyyb49",
  "key12": "4dXDfzXK1PcdTNod3H7J3oJxTqbCJZdpBSVYTTfoLEHcR456RotwrndTqNp7DrQCuttLYmWYsZesLXZLETAyWgZK",
  "key13": "4GjA8tT8mVCUD3dXLJCzheHMDHeajPn1rdbnQsLeLH4Y4aWM8i716hmGsDrLPgVfeYKeq44vPdg6GpfyGLNi3zN1",
  "key14": "8SsFeEgsGLHTuH2bXWxELtdzNufaKxhjawt1dEQctJNfjbLZ1kogyT5PA4s9sM6ontAdjLTpLUkUJmhVStJqVok",
  "key15": "4WVg2WrrAex1MYdm3HRhR4qGRRdpUKU7NmMWmfD8KzXtxEyJybmQ37JfFU53xSfpbxQtKvoJbWXbAQf34GwQ7h4q",
  "key16": "5ChhtGqUkdKau9qkuCWK6ynVctQqBmkiv4WfEVDy6jf57Ba7SSTZjHLsvLHTzF4mhWSv7gCCT9PQLC5CrkZgkdZ5",
  "key17": "9U3yJ9HUrkQmpCj7pHV2Yf15m3BnzUGBAxeVrrbFDdXX4Pt1ckiNV3n6Uxe1aUECF2qfxLoM1Uwc2ge8KPn5aB8",
  "key18": "XXXwtvHDTEexHZqdZuNYmn4fkR2cQHcD21SZy1W5GTqnmewRd8Ja7YaRRfR9dPXTtCxz1H7QMBb5j9F3bqwHD9i",
  "key19": "3jVuep7ANmZ8SsfpX2Pcc73Xctk9m6zxTe4TxVQ8uxzXCQjsnJRV33oJop61UWxRhMbygUcayeTztKwc7zp1LK9r",
  "key20": "58Ev5JVLTKX1A8r6sK8pCNwK8Tcb52N9szUxdwjSaU39ntRTX91vcE6ZL1JHhGPN6otgHiUpa8np8rCVEjGbcGWm",
  "key21": "2B3PYnVLU7B4Tw1MtbkTEg5esnFxybuDMQ1WVqMvg88wcCdacjBTWg6wKDTBKJH7G2KWusuF3paprRuvbYGbZyqk",
  "key22": "4iTVXGgmwgZFry3D8cbamRb1iL1Bc8VDeHeXbhfe6GuC7BcHWou6XC8THy4zQ1n8e85XuxubnmBXsUPtwWgn1R8q",
  "key23": "5dXExt5PM5FxcjkEAUk8xdJ775RUf2WC9myL1HncQKQCSGYVzZQBHZuwsSzCQwxvEHJYU1WZS3KGHeemm1M9zfY2",
  "key24": "2C2388sMNJ92N8goAuWQdMov7LMAwNmeSZNG5sxDWt13EJHSA1pmdf3ah5xrvVr8P9SDuomwQSrzpaewFrmn4KC2",
  "key25": "4uGbLDkRAxQQCSd3tsmdTCsZWVZVT4e4EiGeSUEPFm7KVWhTSNNrbkgWrMdrPVmJdANWb8v6LQgvJhrqn2AGDWaB",
  "key26": "3Rh1CPU8iMVBsqmegHrNiD6x6AJoJe352uXwrmPAzPdSs4M9WzZXc5u1vN5P3KBRPAsVgSK7kuuKfSBq3KwnZisQ",
  "key27": "4T8AkcPWAPZreLjYkKfeRcCEWEeqTor4P6V6Ein7pLzsWjiGrNuDJPu7qb6J9ig7AvHFmP6rd6hxuBTUJsv34bm",
  "key28": "5W84sTjSeub6DYhPGzouxGoMNLnmX5xHiUyvruMpJbqnZMQxp1pntnnvgZfhCzZ4XKfu1MfTNaVn4zjNHz9gjLPz",
  "key29": "nmeevrdQ9LhmmrYzTEVtB4yKrkEn9n6XkEjU63xouLYLWnuVwxWLkrzYGXeriEG12A8D8qrYVr7ZmuHoCTmyXGf",
  "key30": "3SK1xeRk55WE8NACH2JhdRKwRGAKsHukB5reo3eRrYu2qM6L7uaGPJ9Prw44XvuYqszDTgHqo6SoLhokx5VuTju2",
  "key31": "5gFHZP8nEyUyidSpJwFoMF7AShwkjrvNjkLQYpMofwEdYcNL2MqLdUnmzLRt4QdZbbKPZi9jUz2fgiPsDt6e44wb",
  "key32": "59QkYTovZJnivCihtgtDaqnf86KZFvBH2yGntpzhSQ35bkn4wE5hgXfinTWiCbH9ZonYWFA8AsPThZaDQBAqkC8E",
  "key33": "3ZmQi5HgkCVdZzdKncPX8aqfCkFXC8bhkee7k3XoPHSc6f8n1iK8jSPiUE9zrcTUY9yk69vYZCeoChDvLkbC7rL1",
  "key34": "2FFEgdvRo9eiKTHybVGnjeYyjGy2G2n7VJ1JUXorW5GtQUzPxkT6CvDJzA5GAYtgAPvqjrfYWawG1c5GGw5x3Ebj",
  "key35": "3Y3faxw1TNaM4mgMHzcBmWVFSQhGgtgHwG7cV1X8iZYwRLgBC26cMdr1LXxrK1xQmujmTSXBeWituwwCEdD4psMj",
  "key36": "2pDxt4RyG9mZgGUNbq4MVFuNqKBoESSdAYzHPKmDAzG1FZf1UzvhJayHMHy9XS2CjqfKKp2ycjFjbXueb9CCiFur",
  "key37": "4At2yrAtrQDsmboFyDVGb2eG9oRNs6FQP6ppNQP8D9oRumRM7eRjSo1UjpvqHXu2H8MiHwUBi5P2CaEdkv17NDfW",
  "key38": "4rFzvmeLsWNDSgwcdyDuPNBCk8eKqjdLyVHrzrPHgEBg2JPMiUE5TQQ9nzM7Ra2EKJUyj65JzYGNdaprzBEjwimJ"
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
