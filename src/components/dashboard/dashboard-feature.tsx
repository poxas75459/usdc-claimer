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
    "4KaDdUnp8XQjmYqbRbg8PLetjiuLaajE5se1AbbXHsAD7gPYh52RchEPtjNA1ihK3u7JQhPwsqgG7R93BZ54U6ME"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ABQNq7b24nEdzA2turW1XB1cQPmRys8om7gjTueKxBeSFbnEAjo6f6TujtyfSyM9aHiN21sxV55Yw1oQjbNJsDp",
  "key1": "44WBCkN3dHhNKpgewHrJn8qa5vq1Q6bHkP8ji4XCfUB4GbQdQCk3QMXtkFboJxGpnMNoo7AgDvKmYUsxL9euqoxH",
  "key2": "41kDHGcHd3gn8oMkas6wQNZEwtRFLkMbSJXsGecwbeqMywQW6mf2m9uSSGH5mR3q413r3UXrt7xhUxvyy6yRffGJ",
  "key3": "3EoC1GtfaqhD7Roj2Z3NuE1HiVKuY6rK3ASqS3TnqHu3e8dy4ffXQ4XH2jpSpAvsCx81exvtMwy3HdZCPUrV6TL7",
  "key4": "2uE93WdmH7jqvpcrFQ6ypkpnjSM2KDvY1QfRqhJZbkss2Qt1WP4PWcHKiFXLPp8T8NBCTtaG4j199UBZKvEaeW3n",
  "key5": "63DdEKSEcMxz6qLJxyicu6qQxh8dGuYxNEerYZWjCgzYeMQArLcxX3vbBMgKksxRnAeCSUUBKx5TSAnaz6u1ocAu",
  "key6": "3rBfNrFdSb9t6koJuSGafhkRPaB3uHLrSpxJZudnvp7ki3DC8cbeUgGGLV5dvoqVjhNeVndi8VVfbHtgsmt628oG",
  "key7": "cnWFtsLWcTY9ABnuKTo85tapvcXL96RoFxnaezpuo61RNoEToxvRJQt7aRnF7hvZADSwho7jwejY8TnCfTBw3xH",
  "key8": "fC3em8hQeNPxKEZphWbD9T3BeBhmdKes8pKZ47kmueLQ7S3ZvQsjorTE3nWFBqQKkE6YqydyY5DGTy1fD7cZCjd",
  "key9": "4fxeX5q13HF35VkSug35iAyhbEaMMsydAm6ZybKzAao64LWgk2wgjHm6dcjs4B1xasvUUWeZoo9X2k19Q8Td9Kiq",
  "key10": "4uSh3UAmtyVpLuhEMgoLkZwDU4paPQymcrXKM39HdpsufHfr2aDufLX6CmpaJmqkuxVn1E9FFWmLRhsQ7g94UYpo",
  "key11": "43Xttsbjne5wBMXfkB9Lef5dEdWbPipnMGyAbykjF1VWD4zmQtPNXqU5C1CfmTMVk8zfwyNtNHw2AzAEJoQDeDGp",
  "key12": "3R56RJwZxBMrnU9Rr7Ve2hMbVy5tw4VA3sFtapjdE3DWxgbrtyjbo2k7DwrP8bxKZzinqjfswAx55nHk3duC5Voe",
  "key13": "CRj2WRwp7okUvRjjVcGqrdCzE6KnmgPS26JK3PjiDieqbQHDX5MHxmRDRwRRRdPQZF4z9znSrZJTCsWyDUrJdDG",
  "key14": "3845bSdNkh3zSK8j3jTwWNd8yVCgiLy6cAUQy1evBwGqRXZKeUmYxFnCdpsXzuo4zEAsMY5LMsHKpWicVR9f7dNa",
  "key15": "5Mrbes39RMT4GTW6ALgWRxRSfypPJ7NgCvNak34z49McshUbNjkig7otMRktYXerA3WSc2fov8vPFYeSiwGHxSph",
  "key16": "2XzZXPCYHVyqpKuUxWaqCvThakKtWt1S1nWL1bizMP3wEDbJH6FJACTbarKTrXRqZQTYHGqVFq6iR5DpCaRtQGMg",
  "key17": "3VZ2UCMKymxwcKmVdvY9qGpETTzqxFANNCx15wBJ8CkGkpx8WkL5i1K3h9xYtuDJQNsJudUoH1DfcfGV85WkKq7y",
  "key18": "2VMBKBV3PMZsHhF9MXLxKPrLDJ5tmrRmzCeRHCQVRML7LgpX9ufv8pzKfE4Tkumak5k2uvkVkqnLNPtbysfaXRUk",
  "key19": "fYVKHTKKf6H7wKohnrdCNZXKeq2PCKUC1KAGYS8XYFZDZw6BwPyzdH7jhu7kaHfEB6JVZSAGczsAmLaSsf6HX9s",
  "key20": "WTjempuX6NvczTsR5sP8ExW3Mf4h4cZzdne2TiX2tUJWQ32wMhuJ9DM4b9KSAisNZJzKpvLjmW1paehiA2StUBU",
  "key21": "36jUjLQ11rCFg5USVp8A33eT6fgwzjvrMUSqAE9agSiqxPinMhrGkXtxf4uJni6y4UYEtryzSUYskmGfU3kkPZBA",
  "key22": "h1KeZkBZ6wTRSYXCapppcHLekNpSC9wrLswuxndsfR52hdQS6CcSKwTa51i1TxH6fAf3xrG47pGVVnnGgQMTrKN",
  "key23": "52WFHyjwrZFatXQJzniLPyH8fanw16C48B688usu8qEiiFC1cDgNGG47zfBwT2Da7t64BSj4vy4UjsYv6W5vZR7r",
  "key24": "42juHSRLbmDSgCMwEHZsQHF6D9rcz7zQr4UU28sn6ZFebX4uTxZRYg2Rck132opV4RPFW62xmatcyBRYNogigwhU",
  "key25": "57G1xGceX6hRE5cDzS5BgRMMjoU3qVXvi59D9CKqNJtuYQiZEdHzfMRMBwwbadkQx61fqUvFed1cEBk8GXXzrvVs",
  "key26": "2N9rmj1nQKXo6NkPiFwEB8GqdS1hozsa7Fj7ggL331eHVGVtrTfcjXKwv9CCZYe5Uw5Wp3GToJkYmGJw9NtSvqyx",
  "key27": "d2aosG6T3Wq4VAy3FqfDeHRThKbft5rL4pPbTkiSRqDfGq8RcgeHNNmFG726cCt8dckT3yL9HGdgmfEaMABXMgX",
  "key28": "2wMG5ChhDesGowkfhDiVyWjm8x74QRm85JypbiT43XzPYqHacQBmjG6DEAq2MvNxTUzDAQcRxZRyptw78CFuaGt1",
  "key29": "3CUDJmwn1dU7roPA3pw64NWd2oduyYmSEAWdywAsuTGBA4maQ7XxBydPod1w54ssTtfySfiGrqwhe7uVYaeXsUc8",
  "key30": "4zSWnjjs9fy7H1SJhSj5isRq9W8ZBx38JzN5PMXg7gvqXtAy4bQFnEZJHDo3pKcTSmL1maqnqSpUt3RgtDghmx3X",
  "key31": "5aZ9YqHka3NRTFeNsMVPbeiLJKsHTZcVZ1nSZXmMTDFb77RZ8gPbpzYGMot2p1XAnPbYLpYjk6ub3XM4P3absZBE",
  "key32": "tUgLbCvgkMteUsh2ekzDxpVzXNQTa4tXZqq67MmVbq5Cwneinc18xdH5yyeMgQPVajyAqBMDTZ1aKhYDc3BtVUg",
  "key33": "3XweqZu1AiH1nPjK4UmGTaD7yV7tUm63mo45ee8kab9LacQjXYwpHeESpGDay8BNDyHvjQh1YPCnNLFGa8sqe1RA",
  "key34": "5aDNMjnmK7TSvv4ccCi8Fur4VqdD3UUz1SZUXB2hJoFC11vkWxPB2GHEQ38oAiKcTU1aY6eGtrLx8pZhDFCQ3N45",
  "key35": "37AfZp25Yjq1Liv624SqCdnEND7bvbzsfcjbk2oC2rr4ib5KpEBjPD3TLEoNuHjoHsnH2GsnZJffHkKKcb4w2rCq",
  "key36": "2eodN1ni1sKEkPmJcL9YdLtRminFgFJGbEezWY33jPB1xmNeX7cM84WDP46xzzRWjQrnHEo1PPZUVn4s3UbzRxQh",
  "key37": "2KVkF3YJ3jNYcQ4xz6mAPWWt3T1PN6fyUVa8T39L4ucNXuoTmTQ2e2BKmbFRknxftH2CM2f718RxuoJ2WmeUYoAm",
  "key38": "88MVfTpJq1NFDrwmAAMBUnhkqa7Xz7voGcXG28ZSEXDKjWqt7edouDwKRuPcvf1nxRksYgW1DB9CmY16vmwJuRY",
  "key39": "3LbbmDc6RWzwpbioXpWWorwuiJyHYT3g8nj1oLDHvVekGY6w74oWYAWU1gYYXdbU72NkT5fEfNNvnsbUmhtdvwch",
  "key40": "2pWmB1rfRiA7DHvkmLaJ7SLzRLnPSEP2mjH44XMQ88Z1W5UXXgVaY8qfmro94c3dhf6kJJf6F9cnjAYpDjxqf9h8",
  "key41": "6RLUqbdw6KoyS5acH4H7DnnNVGQTjhnA2F89wHmt6twbTtD8s3tJZhwJhWwWJp31TDR3pgN3Ww76pNyg1jsfBb6",
  "key42": "2NSzQmPDNNHTgbTgYATNTEmRTpLP1GqJQiamxxH3PPZD9SVjmb8ztCDU4eLEk4Kvm5U4Tgcw8FKyq8iHAJzrPMD7"
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
