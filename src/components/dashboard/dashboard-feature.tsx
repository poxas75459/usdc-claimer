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
    "3fxTJA78qv8wV26Pgyzr5fa4u4qX6BcyFKWferJscAqgajjGehFWedMRGrAYNhSP65oW9rnZHmZmLgh46uzeaAqb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZAfmhi16L9vy6pWroF7dNmmK3zKgAvZfFKzT7WDtvMUvUXNvBpoamZBfW3SRWyBhYjNfE8ZsaixJYefJ5ovdN8g",
  "key1": "29sF3J7H3e61jkAbuWqyZsR9VpH1radfVU9PBVrHjnS4fJBnCJUyDjseDiZhLvJ7uuYKpXxTCScja4F3ZvncpzzC",
  "key2": "5JpqKXLaqHdtx9aMwEiQz5HTtDLW4EH2GH8Nj4KWm4oCPGcoUHRRYDK9Mn3g8eN9cm5tpeKFdfbWgPepPRQofGNp",
  "key3": "2zAfrfzACR8xzmtf326FinjCZXCabeh9dfjRdDQpwNoWrjPXbAPHjfBtj8CMW3tdyaAPi4oqy8riPCSqeW4ARRzQ",
  "key4": "2vtFPLTnXfvtsMttrPAJJGGCLD9ZBN22dC96p3cMMGJfDMwYYpx7bDPLAchD4ws4KcLdM1S7DBQZRG3DCK6qht67",
  "key5": "cPGVebfXkgyAsGS4KX3Akxf3tUXmbnakabmdKTmXFF3c8rGLTAUBVp32XoYktVbGrqeDJECcZGxHumSzvk6smYV",
  "key6": "tMCGHrjBgA43ySxJvUF6tZDiWzVm8WuGrUh7BVrPvx5RqBNKSrd6tWbRcy85aA2Bf4ywSbLAvs1XHB1rax9pt1A",
  "key7": "31aHKdYptnK3WhNExaz3oSJQV18KxBgi9Gjqw4rDJksfhKoVQHVdorTTGZtLACWZveRVgFDVfZ6EZytsi5wq4sCS",
  "key8": "48WW6kxV9JrNSEWsD4tY6vXF7JR1YZ4CJkaRVK72nmTuTf2oA52GfXddDRPJBBs5fhaSaj3eF2fp1MXifFbuzrcn",
  "key9": "5sFYyCNUn4EtR8Qya1sDRo7YPLx11ekZG58XCohaCyXQdcrdcM31ZUJaQH78GuMsgVx3zUhgm7RcuKbvXAKVCdSf",
  "key10": "43RXnQMayjYVDp6JxdXg9zDyhbkur2MuyxnhfytzpPaf7gaFckAceRwFWguTentP5MEYXkhr64ucRwJ4CEbuEu3e",
  "key11": "4Xa9WD3oZD5KNVBTfUELfcN6KuCyq6Sk64Gf3sptPyTBEj11oLbpfAhiEFLrps5Zj7CQGpFnuLibShQ9L4WiPzNT",
  "key12": "2WaWsJd2mAmGyNWLBmgLWeCjzPgnBtkmeg6BfVvcXNdziA2T7fKWySw34HFyXpsm4RpDnrfMj3AHPkCoE1NpbykV",
  "key13": "2aRykUEw7nst5NHffze4f8iZzHAvBHBC8LL1EcWTE4Qi96f96YrJpoW95u1Hsp4a5T9uub3avtA2rDK7jqCoZhb8",
  "key14": "66dMDC4Z6fv8Y7wFdYZgaMgma9qQiNay6CENTmmj9W9EGTJysect8inyog7dsjwVzMAqs4BGgwP3gXJrXGYJQvgH",
  "key15": "5yPzTnMt5HZjYbnYQZHtyL5C6HPohRkuhcj9hjFGPStSgSZUYTJTnmDupczcnaYBgSL7YzGhewLxXYPvR52MdsA1",
  "key16": "36bTm13Hveh4UXoj2TkfEY8FAh4X2u6gk92CD5NaKBnhr9GJ1K4qhfqH9aoyZPjsHERPVT3RrDSfZPPwEqKKoTZj",
  "key17": "3mwRx7aisrbpTxDgLUCLDn5fyD2jDKQFzR3mP9c63yptPJaXigsZvnsFCA1GG3HVuuZPhCfQV65ypa1XeENVwCW6",
  "key18": "zxJX5XCX3FE5GpaxAvYcM3toz1rY4pApbNnco6s8chBi7vTjqFYg46E2H9kL8GAXufGvAV2XBpctjjbTryg8oP9",
  "key19": "3uRjiMUABPsJXT8HB5LkVdkiAXXvxnoxF5WdZzstscdsKfTCK6TrcjFUPDKhXKkW57AurujKTdMCbE7hnrhhXjXS",
  "key20": "21ohrVjspicXT52TEgRotrjw5UMb6V2QxfDC9GMeTGB3vZCVexs7E1MvAoQunVC5YyQaBAWMy7CxKg8QUaFwuTri",
  "key21": "4o9W2nMxjm9TTQYDcChu4RHA8nPeg9dFzagqip5mzeYbEhJmfx9GLAFvGYEBq2mfE6R9kF1sUFtnaD81spnjkEUw",
  "key22": "62Hbq4GjdsAz6DxEMRsp23YBGtAsR8eik8b6HaaN3sfsp85Fhpiq3Gq4R4HRRSgo7WQjGLisY6CBucHhFW8wW82L",
  "key23": "43rdK6vv1ACZTBEVYmp47zvtzYQbHbwivFwzQGnF36Hir4qpfMpVPQC7EmXfAw2TtzQdswLJTNyJPxs23n8nRwnx",
  "key24": "2oWWCKQ7KXCEjnrtiY7fzUP8ki7iZnCVDkRaNYoTpZQbb16JdcYVJCqA5oFskNRvMPoy5JqGzYxd74KVFUGYga8r",
  "key25": "32tAH6r3QVjLySjRCyZsy9FjabDp9U32GgMnJzyUZCTJMzsWvzxAevPP2pSAPsbjxakqdYp4Yu2KJEC1MtDRcRnj",
  "key26": "2WuK2SDbXhFgx1q6VeSknMuCc2F3ysKQEMgtUmctgsZzUcd6UQxZcFsKRAJmMtew6udFU9MWDkPRk69bjywozs9B",
  "key27": "2EjQLb3uozqo5QqGfhqPEgY3YYKDXS6avH7qP52f3g98brRLBYGxbnKxVaxBKrU55dnqRQabecW4dqwcivJbTh9h",
  "key28": "4DcWkQGu566XN3qPfCzEY5VRQLyTMAdzP59zEbL1wDd4P7FPrZxaqJWzQkKKB8DJ8TVYKVJFo43RKgqse5zz1T34",
  "key29": "fqJhDqRnLkWvVAvQk9u9zg4nXXmo87a2dxhpVVk9HQZHnAz7h2qzKHkqs6Q7oyTs4oUFV2o4LGWkTfHTHvgtoFo",
  "key30": "5iRSWc4EVDJ2N3RTJ97AoMnpj6GAhzR4ka9m9t5dqa9AW4H5eJKsEKUNinzCW1iFFcsmcUXZsgXVV9RNBBA4Knw7",
  "key31": "3y79uC6LjL5TTB797TBxXM16hTEsSAT6qrSSVswDuVbGEM5zGy6uUFocXqUo7GpFVi6cCp5LtTNFzdHmNecoQ3L4",
  "key32": "4pzPqS8TQ6e76aevHBfSJanzbkCdm7bqVwHY3QHzaK4zMEWSa1S4ddmUjShR15B2mkB4Hdn8g5k9ZbPZ2afhB7Vf",
  "key33": "LwFXKDahNYFZQoWG7c8XXz56gm113gdxCMXMUeCHfgekskKzAVu2SdqYrFseGxhaJ4ewpNtZfqirmj8MVS61BS7",
  "key34": "3XS9FT3xkjS5eX1zbwDjzCe42TTEQyWZAocZCS797ZvWFzUpZqK6qqajM3DUKpvNjBm7xDbMhHpd8XihW6sHRVF7",
  "key35": "5QqHVySxrcCeoJugKjPADAkW8bjvSH7g1dehJ7uAUtTQDyr3wMCRa2FsswgTzcWB1EB2WvH8ED9Ynwrimew8jGuY",
  "key36": "4fe4Tz486v1Eok8UqYznB9XLZ8Aj1SenaW88Yp2PnhSvwzkRuW41EstafMtVTSGuqUjDuACUWF3kesYqWK71z4o9",
  "key37": "588YYdNWcVsGqoinxFvuH46eKRNtjwQmPFvLb7VVutMapRX9pTQvELeZutThMBrfMftnt7FVB7fdkkUEHByMifzB",
  "key38": "5ESuHdzdH3BQ9dZQHRARDWYdxXG8bAG74vXmxowRqKcSwQVijagsg7RNKGLV16W94pUgJoVoVMiwSUkcu2jhfdgh",
  "key39": "3d2Y9XQ1DS8iHt9DRV5mjq1tT1QjGB4G9HBA7KPNry97VGXrX25Sn9tftbyoi1osxHJcVwdgLsuzAS5i9fTzNSNS",
  "key40": "3A9hREBn5dgqhsLdhk8utoYjgQPFBeHzEYXvEmwvSUaTBFHhdxnqT8oyuGyD3hudFkQPAL8nfQE2mFyQcVUYEj8i",
  "key41": "5M1aKcJhpbizBTBey4HogiLzwFYjkBiC2nruvJzGt7EPh3aPBsUxWUg9qifHrFh9FFitsjxtCLbaauyLcYgTaNsK",
  "key42": "55Yw8DFKt6DaUg7WrA2QfoaXAnErcM8fiNxU59xi3x4D97r4RuXjrVS87QGZxAqzzEnbPiV1X18xiPDjTjHnsy7q",
  "key43": "5kwgGWq92B32dA4mDqHqQRjfBQxQ73wr1AMxZKUqvehG2JbFPJm8VMvjJLhfraKxtAMFdHyW51bLkA4aBfTC5aoC",
  "key44": "5p5T9tSoYNz8WDQPYb5iWV8DBcUp1QU4JR43a9eoqWFiYf7YvfMXcGBHzo9X8cRwd7Vi8kk9Dd2cw815kB9rGkHS"
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
