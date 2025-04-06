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
    "4bQoDwEFRjgTpPAPVnsM4woeuBPNhzJqP9FdguRDmp6FesEVcqH8NeBSjeUasgyTo1vaDpFWEeHZjbmuXGikvyPL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y115WhWX3CfyjYoyXx8LG8E9akCiB6XeUyZR271J4bV5MbYCzC1dzJsNfoYqRXmj3vumJQYev4W6kDii4dPZGZM",
  "key1": "Bb6WLHMZMYA7cAwZpDGhDFqG7jXXstJj8PBh22w5iNN3A67FHS9KE7FUSeTWcthtidpPudxQT4XfyzLZr2rxmbW",
  "key2": "5xNzhakpsZiyzUEVSFJdDxsQHCR7p5vZTok6RUuC1UXLGKHg53Ld9R6Zbp9CWXkQ9jVAXg1JQtYSftZG1XJMfHHM",
  "key3": "45RrDXeVKinJZb8yXTG3cBtmtQzao1b1Zdg5yxEW8FTmYaMHKjwReNCz8gwRTwcFPZVvy8pBJYig4mcSDzYpHbFC",
  "key4": "34FVSwPjmeYkJL1FzX47iBHrRfmfMk1J8jFum8cqjjqi4zkBMKuPQxWwBncxUiBhJLdsWed6a7EN9PYMD7ZYRjyY",
  "key5": "4QoQoTkcStFmiuCrVwyC6wMETxhRpjH523z6fH1yzKw7GXbZVreF5ynzke1oCeqykiiZCqz7Z1k96vDhcxKVg4gB",
  "key6": "3FezKURqx7EoZ3jVS2e6HzhYA1cse17meTVrdkHVa4kwZHhXXQAhrMqREmeXDGicVfGPhvGBJsaNhnQxrAQZ5iFa",
  "key7": "3RFhMGTBs5rPgYbtKgyUhCQrMMkzL1uwQeH47KeUxGne9Y7qDKcQzJfGQfSXka6hbpoDMkBqG1tDP2PiawJ3Hysy",
  "key8": "4tHmPDDiS1mBQjdvC6CTq9JocUYUMntDeUfqZ1eVqd5MaNytSfAvwCMRHNYMCnPzSnJNbPSgmjxJjRQAXygs5C4Q",
  "key9": "2XEHvMbK5nTgPfjdjDQX8kiLT9BDfheYNrfdGdZPwcwgztzYY15UZ7VCAdup2vzwJWed9gAyfkQ21ipakuagwGDR",
  "key10": "4UpuYH7KGK7FK4WKnxS7bsn83XrtpnW3WKnjb9daxawFaP3q5LjNGigWoB6bdhU3gP8Bes9juh37cB3TGvzq1mA9",
  "key11": "3iYKA4pMD3J3NZHSaz3izR4KkWfYkfKZ9dJuMnjj7xo7ngmfAc4MBqELbxxGJ44Hv8qNkXFGcBtTbTY3zYw1VVzK",
  "key12": "XdbkcMZQ1mKioB22RWsDAYkfQTuJTzAi6nFRSQd4X1NBPrBrHPTut39wx8sFiCTPKj3qmAmQqjqFmfS7Koo2BcN",
  "key13": "2wSaNFY8xMAhpC5MdCvXwCwoui6paLsw9d6RoVpccrxVep2hQ5NY61aHNzp9J6FshST6jL2Yz3qdsijSNkMitvMs",
  "key14": "4uMfCLo66TwjiRyrfDw3u37zLD5oGYtrzucZcPV1wWHAdGJrGJN6dH3njEWxSw2B4M7jEpDjzgEo67eyDKVGvdKK",
  "key15": "3euDA8shuNL4WvK6n43PyyuG9aD4aqhrFKvHvk5JrjZeL9wmcmVYTRUThnf9gmBfRTa5rkkfGuqVEkMjcTgA6gbH",
  "key16": "ADPbMmGrbFuB7Lfir2yg3suwr3B2oxS4X24zL4SZr9xvFyVCg3zPtmWuTiGHfyMjKVuA1ULsiW9eji34tDGfdLf",
  "key17": "5TBmCEVwL4VzQvzx6AXod2QgodCNJCvCK1x7QcLzvHB58n2d7PTmWPjQbL3sMWis89jicPKXs5Vf12neNDNjPJ7f",
  "key18": "5wimDiUjv4CngjiURTSygWGh8UdL9ArpbwRsbxFdrYkHuL4D9ebVvmCYZJKeEKzFVD6kDEPVTQ36cFfL3971HNQ8",
  "key19": "PRAC1ZvEFgLznhMJU9ho8zBDC52DjqVicpjM31QMV1wCdnEKRCs5iuPZ5r3VFf46B4VnXqqCMzQfKcf8cgrdfbA",
  "key20": "2KAkwEpo3NEho5eeZae1ZbnYHcdARG9DVQM7p3qfsxvVJAMoMobSMzsaGrohyxriSUPorb3vEU8qo9QK56LEKJg5",
  "key21": "5UfGvVg2fRo5eXzgDoYMQ4k68fTrXpPU6tAgBfpB16Uqt2HTCZGfTUuphyFCMwE46QjBMVLCLnCx5ViBDEsVHXdp",
  "key22": "uRtbkhUdLj1LE3wdAEhHmC4bcEZ4pRB7nJNXtK8AjhMKdMV7R4vj42sqSiPrKx9VmvgkNWpXDPLpS81saeucLaF",
  "key23": "4NLJweiUSduM5k57D9wrtKA4dmjEA2H8P4qRCV5iNisrfbVvPDwUgr6BhWv77GNtjL8eZjo9TMdECs9jPWc3FLS6",
  "key24": "SmgoShtTNT75qzSrFezSMocV4vdmPG93LaLPpG58MjXtFdrjaCe3HNdAVEhWCXnzPU5C9pDndRTfdmBDWp9TmQd",
  "key25": "rG2ew3JtS5qoLoz4mhoSWUiDiktfqDLaWXL6xGZR7EqFpxWGPuRBkEiRbBvYuUW2CzNx5Er6zJ2diEVfyzWJS2X",
  "key26": "3J6q6eVPCeYPyLPgXYFCT8C5nsbsqNctY2bsC2jet186NXZ9F7F6oi5kMK9LKtSu2EQNJe2JReMtePhBd2UYXWwC",
  "key27": "3jdeK1xzGM78epf8hL83BswGFUKy9NT6Cxri6DjHJDc5qCqhiu4mmGE8DtgyDc5ZiRrrCnfq5ZqmFwZovETYZUpQ",
  "key28": "5MCwL45mdAtzSJGa1jA3jz5G5UV6ptMxxZ9zCFrUyYfrsdN2yv8PHtHKm4pfSLE5RCaVnhBmbvP4ATmCr9gPqNGG",
  "key29": "dPNzpcKBPJdB6wQnEUpFiRpNsf1Xk9dV8ef9z6VNg2FJBxGXDQhJqckp8Z5qQX5SB9scjPqvMwAinttrGQYSQfX",
  "key30": "5FyFi3ZhHyQTJFJgeshEu8LnsYKi978u7mQ92J31M6tLkGe8s5NrMNh18ZH3Edcp6iYqzzq3TmcD3Ms7HsanEwov",
  "key31": "66g7XdCdrUoYT6U2vc6y7jnBpd4w4AsUG1JLjrYB1APrykFu4sZr5YscKB5AY6xm3opHLBjTRfiCy5T7XiFX5sGL",
  "key32": "3SijgqMe9c7PHQudX6iUQ9miCzAcEUfyo9XexK9oMFACTXR6cJargMLV2q6jTG9UmKAoQdGTWgiXCpth5WfHCifD",
  "key33": "4YpVXYEanzgjLd461Dymn7uQgmZDnj2kodHffpk71ejNsBrRDZ5w2uCPEbY87kFegXUJZkQ8bn9WXRFjTBK1BM2h",
  "key34": "42LJXHRZN4kFfNrZrq1yJfVq6RogG7YYYfoCBJBdQVJX6puS7VhQP9EYDbtU3eef6FD8Lx2tgso9oDdPJbenLnzZ",
  "key35": "23tByXX8UmSypiK763aFaqGbMocNuLzVM5GkfdkkUzyWUrRbz3oYGPXobcqURicsTbjSVMnuMYJH6nXhbswkwZ41",
  "key36": "pDBdMAHzhmwFvnTEprfv4hJoX29vUE6WGdrb4nNPjXzzzg8hA7cnZYTHvJzGsQiPgvCrYoXomgKGrdzbbqp9zYe",
  "key37": "3Tpe8CufWEzw2k93RuU2ZsDAjYFnG3uDsquNmR5MczdwuH6ZEyPxMi2kBhMHxmgBbw35xuKey6zhLDNKSQQQLAUt"
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
