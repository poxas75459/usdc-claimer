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
    "1VFzEcxLvrfxdjCZBkFE6JwNxeCqemrqQLCzs6Mognz39iMJsCNMnYcUm7xfQKv995fh4zNxRpxLd9LXQv8JH5H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27aMsP6xoCEvwoebRFT3TGrXYuMqL8J61cE3vF5Jy5qCZUg55W3szexVZKWL1EZrL9fw9N7WGneo3i8Lu3Wib3Mj",
  "key1": "3HXdUz5STeqEFrAKsEFRMbnNeamipNstPdBNb3bunz3mNy35KXrMSMd927cgtphcVwN6sKMDopdbhvMuM85CbsAR",
  "key2": "4TixMVBwrP9KddFAGPAmDJfbin5meKnmYgX2mqfvpnxFypTPP14ksrvspzkUxhwoEqjhJwYoY19YfCu1mn2DkKqE",
  "key3": "2fH7vnu6SrPS5LoridPrj1QPSbzvm3yF9c6QRVEWutY8GtN4DpvXQQPYrK9Zc85Z139km8PxgC2XaTRV9BhAZSra",
  "key4": "iGCjQjfsgGMWXcYgVLmZSzZkHwT9xU3nzt5c3YheDF4bTAcFnQg9YtwYj2saNY3pTCuCBt7Pnn3jrVyJ3tVEhtr",
  "key5": "64ynpdnrZiP1L2XSf18MAkMTRn4TaHJ6i1nfjpN3TomyCvH6zSG4p9goMeA8u4qT2JMxPFiqwDc5kpyjoEcre83k",
  "key6": "3SfQgmnBY4TW5baVa3DhJge4mngY8CEZwZGsjfsdWs312SskpHmHAWhWpBgdNrWpQGhWd33ECtRnhPasBKeV29UG",
  "key7": "VPxqtqw73gE4FqHVrvcs13Ew5bff7H7LbvGfRFkYZWi8UuKewqXLxmMNWU2wefdcWHCS5GFL8NtCfgThEYbPRhG",
  "key8": "E1hqXVJZM8TuQRsH4ewWwPb8o2EYXzcM3exkJJuw8WG8HEXbst3jXWwSgxNASUp9qHg1vwyYc8GFgo9gv5eE7ck",
  "key9": "2pZy9GSvTkeb7gs28iHK2PxN5aJEFDsmUSZpVzfpqFj4K3a6Rbz24dYiNPdVkXZM6Dq8xgHSj8qdF611DzZj4seh",
  "key10": "5mp2YSiuKUAXCe2wroizC8KxPPg5aifVABaxfZtYkKRgg3YDw83utUjVDpNnpScvqDdVU3G4ga2WCQPxAmwExw2g",
  "key11": "2AeeiYq2oo8iT86e3BM6oBA3G3tUDYANQyRGedkKTgk1wgMfvuN5GGrE4i9XcaU8QUoiHeiH8j6C57EsX2xmgxbZ",
  "key12": "3S4fT69faYpZ1khPC9BobSEAKgpwSoE3QgUDsFrGfrsrSt7fpuBqThPbGKBvuox9LtYFwdmNbWnp5hZjnMpet5bL",
  "key13": "5591GHsE1L5R6Hpiix8tysyEFm4ph1frfpTttFeYKR6qo1G7oetL6eyZCuiAeFYCkZQFqsgEEJ9mGT1hq1m3i2pr",
  "key14": "2p7RcfNRMYZ1ZyyJeetShpNSvF22GLu7kxgWXcJ4V3VddcMrgqcgGf9vD9wd627X8cEUz2B6GXuou6z7poMCj7xq",
  "key15": "3mr54FvmjiFpKsiinzkELUP1T9hx5dwUfsi1Fe8LnFfmaEbYPh5s51cfAf4msfL86zhpGE9JjxxWdMpMNEBjbn7y",
  "key16": "2PfRaMqtamAKhdNv6ixGtdjL8sRhqHazjAbn3AmmfApsiqx6pbZUAqXENc31kSWzp15A6tPciESzXn4d7FJdYDT",
  "key17": "67PKkLYRu1CYLWzeVCoxAfVvmRhHUovf11M8wQCUkN5R43vz8idZaCsRBshohEKiyTUZouAYXQBGgn2m7zLhMFLD",
  "key18": "5TAfYn9t5Bo4CDRzFiKdKiz3qE8ruAh5KciHEsV1juQcgYbfc5cRseSrJ98mbFSgwU9EcVMwvNc5sKTHUGzbTSk6",
  "key19": "3xer4gqkCr62dNWDCZfYiKhENpXfkTd1z9M3Dw1n5ZuwQLpi84MQ98rF7n7DXgjkY9CLLsNwVyrfNRmL2Bx4YMw3",
  "key20": "3CBEDAbCcqoyYudGxfwwkdVdT47cd4yCWnhBzoQZLAeJkz8AMmvmr4J5D9zzPMY4wt3HeG3UPWRWGa9K9XjBWxqi",
  "key21": "3ukA9XvmFhbaEdcmEWggdZTGRnbqsMrnhXtUVbsSvQKCr8uAxZfLitNE1dp7K4H2tTuj45LCXxdWVvezVvZYSQcy",
  "key22": "2EJE1cKssBo2VssW96iC6gDNacg93JgpvYxbVpyAi7ongYJWYRUBB1dB7ErpU5tHwmXAEnH927wQvDafSHmbGA3h",
  "key23": "2yfLQyLjqW2E1CRNiQMBom9W9FX7dD68qD2gcqgroo8KANUmJJnsyzVkMEX9biijdfsh1UcMjoBGBbPnAfkUt2LU",
  "key24": "3SPeUVKu6BiRnTFmWjUKBzdUKkbKd7EeFq164BmWdLxjxEX5L6sXWb5iw1pk8ffMDZBinQLM1FSNtLzPuYHpen2F",
  "key25": "64XLY2soTjQp5PrKP3Jpdp8jWDdcwZWpD23PsiJrhf6iSUJGkHko973DcVaGPMUCjh4umXu55vV8SDnumsv67fV2",
  "key26": "2UEMsiPFPfcBZ3S4YcyTvKQE5JLseiBaZLwkvjZikAKCbEH6sZxqRon4yVgTy3y4EazYz6hbSE9vB8qRTKY9ZEf5",
  "key27": "4Hds9qWKQaMDyDk6Cbsb2jm7usGzKLsrkd2qwjA8MJEJpn6H12RJtXo9vhoiA3EqykBKJTKUSdieCj3y3ZsyWV1E",
  "key28": "2MLeUwqaTHn6FEtWV5YyjhRYENLDEnvrw67GR2BFQmXDWda78FT8WtW13M9Nj6ynAJ9spfg1orFwjiorvwe3i4ro",
  "key29": "4MzqoUeNUyHBHyAtAcf8AUdrpsJk9yyJvcdUwmfqAKaHfG71jKQKZURzP6yfkGNtVCgKFrUhuHpPvwj5Q8UnehE3",
  "key30": "dPcpyPdfaRCwQppCu9SZj52w5Ax4PdMPLGt51sQKMk9AyTCpcdqzWw9H4QErYcBiZG1yqXRaL5tFwZKyfCpoz5w",
  "key31": "jCUAhGxUjvySMwLL9umEd92fz8UZyBoiBWxcDvDjBo9wNxG4qPQDidYrG4BsiRVEP1mGdFh9JX7bQF9n2pXGhHw"
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
