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
    "h2aXcTJWNrwGExA7UNbDwWgHN9pRrNtvd3kADP956pa3FZkTTq6ttrQaVLABRDPb6aE7NYW4gRyJLcAjqnzSJ3D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FHy642rjFEKZpgLji4kSgg9KgVHP3rNawUMdNw768drGRJTstipJ1giPFWKNgeEALt9TpNjqDPYsgzf6Cif6DyR",
  "key1": "2Yex6X64ekofqZtVZ5w2ZZEnfqPENJwj6cwn4DP7YQJBCdWdVHHrTEc2L1ipMdpdRNtxmdWuLpWVVNmdzD4QA9P5",
  "key2": "3aBatB398GjnzP3fsGFAMzPpUHZiJm8hRjS1kqQzVfvxqcVU6qdUvGYVxNsZZV5pywC1EuTpUyqsaqZjmEFt9gV3",
  "key3": "drjaxE7GjdYY3otmTHjYtEaEbNQXubP7WqRNHBK2PRKf1khrTQDuaF1veZQLGxps3gE5CEdTe24kv7J5FPjpNjN",
  "key4": "VX1fY6qpLXktkRcbcEsPWt4H8GCCgUuqNjF7EeXUHMajjWxt4EbK3oSJTyWtRAEkMKMMyeeumSoFNXEv6Hribqm",
  "key5": "zmzVwuim36hjKQg9UpjjX5P12WTMV9MBeGkUyg6pYyH7WR29FUffJuewyJ4XhHN7hChfmXWUYMwpsgv9jmTA2vY",
  "key6": "3wqFGjchSSwmBDkzrFz321nnCiN2Cz9bM27b7EmqeQ3fKZjd3jmjobmZXw17AFA1BwoRjBYkDehHmgRdXJeTjn1V",
  "key7": "2AwtGZVceawjJcyyg6Xdx1VkXHEuMxySTfQ1kMw9HSJ3v9MweVWVtLzoovogVuWdZngQhVwqDXxbTa41m4reURf9",
  "key8": "56jS2AzpcgEBrdgN4gAofNX1qaedNdsWMTDPchrhf1rZiVmftThkXsLoL3UKaL55DD6mAeAEd9QnQycjZNaShmmn",
  "key9": "3vQfhcE1ep1Jx4jZdJATVzqW6SESMuFTNgmU9KavvU7bxsMZV4kzbStugf3HDZvNvjtUqLRninwJvLUKhe9tQ4X4",
  "key10": "5QkRhdUSdNWevKnDtmKmwK6az6KUAqv7P8BiiHc75dnDwQSjCRmxooj7wypWHCjjzWBek8D9RgCiQ4ReSMKvyU29",
  "key11": "Fjg3vPtKZfTDzz1eJiq5ZBLC24TU8oLU1onsofJJddTSaSLyvKsAmM1knb2GvB8cRZdktHM78TuxVwipkMc17iR",
  "key12": "5cgoBLw6jr1m6Cd3WsEVALY2NWp1vkW67jYwYXuT8wX4tkB7ry2iLbzR9ptroYW6nruF1cmzDR7W9JNN4f6Yzvnp",
  "key13": "3A5r8zPyNbExQGhNAGuZypFN3xuysQGC8VgBb4spPcL6UBegtonZRnFNNU12pQiXrMZ8FTZGaMAzSZaXwvwtRuGN",
  "key14": "3wDYYK7RMY6PophGzZ4BSiTdQQLaezcJmAazgSqUKF5iXHzCzP2MrqUhmkNhhT3UmKvTVfd4JVYYsn8QavNVLBKm",
  "key15": "4qBhzsj2zwo7MwmTxycqPKki7eXxAfaFXp5NqKHKu8KzqgLWEmtrQgaoM1gnUx7UT2cQhoJSfxc9oQV1NoeRfZyi",
  "key16": "2rtVD1jgESynYY7sBg89X4Vt3Ktqxy1diwZG1qgwyPg81ovPyhu742UP7Em3Jm86edxcANDZzXuQnyhZDQw6JGWp",
  "key17": "BQgV286MceM2MohJMHbK2nzFdrKPwEZfEoSLVf3HX8ZCESsRSFqcehUkCvCtJk86eHFiKDBghMqnCChgGyWEm2T",
  "key18": "61jTNJsDAirqBeWPjnpK7cvT4AGk7ot3uZAwyUWeSFMdcv5kBwzwn97Yr3nye9tThbeMnjJjoPX12UwcgcJ7REyz",
  "key19": "5xF1Lf7DuYzV3x7bAS2WeEUC5eEWUqicSXU8ECpQg6TSrzhront5cBgqCzj4X9R5DaEEkHPZgzaHX642UpmLrQEY",
  "key20": "44LQxAoGXvHge3tW2C6sWLg4y8XjmehBTnqSVLiUreTFiFPJGp3b19QsdEZWXZgNAz5LgWaYn7mBiTV4d6p2PRSx",
  "key21": "3eh2bcKoYBcMaz6ucBs2S4XhC45b3WUKYdLuA6VfsWNcK8ALDcUgjU38jgpEMEY6dMqRynTa2uZpBryvTrzq54sa",
  "key22": "4tEJRh6qoZdFoAtzRdtad3bWfEh93WQVD2yKxbcQUB8KKSi926sihm7f8URjSBRo2UwgMMxbiPborLNg5UBiATU4",
  "key23": "4U9FWnMgMqhLGywDL6KBrd4BgiZJ6G8tkKJ9THzfuvhCpbmP9BKJDa8sdnwqQge22ZxKPfUM8Ha7NjymfbhNdtzy",
  "key24": "4woeP4AjXW3dUwKp1zXTR3tHHkCJWmQUc2h5HrKpayTzg1iMpEE25Pnc1rnWf9N9H4mp1tTTNzfVTZmsVwn9bWts",
  "key25": "22eigC7YXrqJfHANziaDZQk334MoKRdvoLQTmj7DK5LyvsRUhb6c5JV58wTDDpDJr4t3FBixLAXhreQ9vk1c1TQ2",
  "key26": "2Xz6yCnegq3e7sL727h8WMtJ1FxcaQkatTtdz9dmQ9pUsLdoU3ZKFgpBUwZ9QEGntv9oPEwPb3YbR13DYdZjVPeu",
  "key27": "3qcTHXeyxUy1Xcxps6e8QbBa8SAgu72AQvqjJF3A2NNoagmJRg9U4AcLmN7pKM4yTVyoCdkQW7eweEo94VoGDc5V",
  "key28": "22dRhizJK4i6G6ShTMtdtQJn4rBsb81Gfyhje2wtMbzKFowQLorFLY1u6R4thviVdMtCsnPvc7cjdCmKe8BxcExj",
  "key29": "2XSsR3Xjg84tWC8UJxXAWQwCVLu44ACK94NLG5ayCttfdg6QS69XFA1L83NWu3a2FwUJEu2RvxkNwmBft8nZkauf",
  "key30": "3HXRV84uktL92meRLtUQpCTEH5eZQymoFDyp66E7EoWAZfpSf3Fz7N2HxZw4cx2BFvZSWVz52CN7jRey2MtBz8eM",
  "key31": "SnVHZcJXWqVx9sASPwP1g5XQcrkE7TtKuj8bSUYBZG7D4XLpiajZ912BFLRPzZymc47pZXQ3az4J9mqfYdQfdBj",
  "key32": "28vzdPjxCPLe6BiqD6MXxWyh4RfqQsFsFJJPhg7bu54qdEMeAf328MrfqyNBgpRtjY16D9YfrAMQQUQ3zvrnXEzd",
  "key33": "3KXqd8L6pQbKcZsGrmGiAXS4sMqmauSJLdi7avBMLM6bBxwTPnMouYLLSNaLRyGKVzP6UgwWy6uS4eH6J9242oSE",
  "key34": "3wc4m9QCU4BvCD4ZkNrKsB5bw9zjBfz2bEHfeixcbkkZep412jUztppywBxX8LKkX7Vaqg8ren2VTMUbMi6f9p3X",
  "key35": "2Hr518HqrTmqbvfSZEs4fZ5CWfBxrfwtBtBx7rFopz4AqHDeAAxaSJSjQZf7TGQ4mqKuwbDqhgmUN4dnx7QgpDYy",
  "key36": "4bbdmAmgxz8jiVtG1n2gAkUJ34unmWWbmoeonnP2XcB7r2QscTYRgZUySQHGkv6k8tmVWpAGfM4zEULF2E7NuhrE",
  "key37": "4WUUkMEEtCyBLsYB98MgDaYoE3ckFCzrexRtFTcTah8PofEYRE4TX3J92KV4C2R8E1DzNpHrPb2NCpoqZQpKSwaj",
  "key38": "5qeZsRttCseq2jPvwr4pgXpMxjgqd53Tv9LQkrFQYPb9iwDJg6z8QJDJ31m6DekvhdG3A57kwmS8pobHzvrt97vf",
  "key39": "3ux5h7jWnnFdUTGWfiQkL7YjH15teikRLeSFNMbHZU62w7eEhUNaViEXtmU6WrNZ7xPkQCSwKZH4fwRgtc1xhJjz",
  "key40": "4SsxByU8KoZMW6ohoMtS6wS1kVVuYx5wDpiX5Ff8iQkVaZkFADQgzfr93qHxmSgQez1cXvPRxowdjUrfyk117TgY",
  "key41": "SorLujMjtFtMFkzptk1dxoSDGLpGowZNAbKQMxTEsT2kmN8ugvi6kbtaRRjxenEu14bBBGEwvaEQJrQXGGbjmQk",
  "key42": "3pAcgd42XjPkoKTnZse9fg1xHLZE87nwZ9cmdo8oaG7y6rVzPN1eKPj2H7RLcLid31C1DMfdh7We7EVDo4cmX4zM",
  "key43": "xLfLLr69AfnvhJztzsPszq212DhBriRVm2bxv8wHg69iMCLMZswPnMXq36mrfKhv2tKLecbtdWX11y2pnDqgHMQ",
  "key44": "3UzqFRD1uaa9z6JBqAbPZpo1NTHUnToRPjTw6CNXeQYFjuv9ww2ZmddwxHcSV8ZDrRmnaw4KBueFmT5nzsh5xKyB"
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
