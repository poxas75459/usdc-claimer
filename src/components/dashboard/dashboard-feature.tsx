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
    "4FvP2cv6iEgzAkkqpWQHVBTakNRuKoeEDW8yBS4jPcP88ArriyDEVXwwwNkdFkBNZTDuyuu1jSV6etihP7Bb8Us8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55KvD3QEh4ENJzeu8J41jzRdmHfTWnzJRRrNRMyRowiaWxTm3hGTGAF3T3kiV1S4YqM5LHbBKnk6E4zGp2NFuL9E",
  "key1": "42FhHRY1F63tHMgkmHm7nrTaL5ZFAPkVuaLeJxqHXShkpd9de4gmqZmuLR4gfNod9BkiDKcXopgeZnZRvUyX7Psy",
  "key2": "53t4Jg8opUtiZF18oYTr7UePTWmmvNQSEWCFrgdWEkXZKpjUAxsRhdrmVFHSk3sp1sK7pYnEz7vax4LQ1onxojY1",
  "key3": "4B94Gkcb1z1Qk4sSVvzppJzRL8rKguZ1tf1SadBWzoa4HcpjjEt8armTuC7o7qZ1v61F8BEWhvGBjRS5M9QXTH7d",
  "key4": "4iAQmwVGQ1nUgPSd1TuvBJYqiaTgSXWbRWjDgE41AS7emjd5PP5SGu5tVQ3bJ9MVbfEsHjdg34HrUqtLfH675McX",
  "key5": "2w4RS3S4X3kuxLXxJGeofpi3gPTYn6XGNSH83fv6fD7xu6vBGDn5bzKCqkhsomHYwzATYFhHETdVdLwP69Gn713s",
  "key6": "5VHTQi74NqWgayo6nxNNU8Q6p64zYcnxLVsHrZmP9q2BaJQ7nXmf3Goo1ZCd29Gh5ySZShwqQvLB4t7xm5q5aQWF",
  "key7": "5nWGD5ZGyVvG4HMzG5P5u3SyuKuqwnF9Z9qopas2YgeGfp7DDUkjTwcHhDchDmxne6JzwhkPxLB66XkSHzCo7SgM",
  "key8": "yFGawyDDA6dPjy6GVEEAaCYL4CiotyML3usvRJ656qCY7hSgmMDxQYavPbQCAXhRw5o8jtzZVvkEHE5rQyB1BTM",
  "key9": "48ddmNc6ShbZQbfUxi4xcJqPUcsVrVRFMWzhEuqzo3moKziEAmf1YVdawVFTzpfE8epghQKMCsYhLDs1NKfb2uSp",
  "key10": "4ZFUCE3VPahrpbnyuSEZnnsg4f1uxjMcx7cZPrtGCLeS4p8sRYKRAq9CE1R8H4kmPBawgbSS7RXN5NjZesnqytXF",
  "key11": "Mq3xRJouSMLLAVA61zAoGL54tZJQS63VwMtAfbYJHJdu35yVaMtGL8iCeXui5U9RDQeA4LnfzVQU99bS6qeQQ46",
  "key12": "GZcsmoeDJHSZjpsxhKKRDNstLgpeB8eELhBQChZddbqaWyBHyEc5rQF4t7rqCAMBE8sC6Zkp8d5q2dW5ayJ3Cgp",
  "key13": "2joLpwogvvRSckDFNv9XVgzZgH4Ly5LmBpTmtArZmJTJVAkGVWy9ebBttUpNMaZj6H42Ng8GKLzPZD7genGxVKc",
  "key14": "33eYtJhW9obpr6WAYeHoWfMkwHc4uWsX9BQ9JrhQNedJ3Xdht3HqNYu43MdMv25RGoDBU1PNZvwp4zroBfSDzJyJ",
  "key15": "2NQz4X9PvKZyQr9NuQsWmq82mQ8ZdbeXm9tdAef4S9XkLR8aes6jhgGyPH7eJ1B6QynyDEBRzFtbNKcm43Z4BhUP",
  "key16": "2Ks4wqJLwZWVg69hSwSKoitigQA1XmTm4KSpjHDej3tvcHxDd5fpRgbdGdKmRWvZnRHkExNt1ibtgbKww6ZpPa1n",
  "key17": "5Z5sGQ4M4dnXu7dJj8T2n4Gjs79fReQdi9RnfPK4DfPQgoPaYxqQr6i477PZVWZAYN4qBGbc5v2KTKMQZM2N1PBr",
  "key18": "5sJriCMHVPmbNbTk9ofGhZEicoK2CJaiiuZtruR3wLKxxxpckHV3qAuKjzSdWPqTacMuCYrLCGhBpZfFagYt53d",
  "key19": "4b8Mki6sxKv4E5cBUG3B7Y4as3ftyEpuHEWNCQKrUqRLTH3YzUQeS1UQQrhnFKrYf9yJpCLMoqazQqp4TxDEmiYp",
  "key20": "2UW9EnZhHDpSNQ873CSJc6bnYaXavMAnCw7YcMNFF8TN8pyP7BsRKYfzomXuj8HhGxNjLNPjsRDeEtNQMgTi4cfj",
  "key21": "2LcmywSYJxeVKk5bzJRzyR3tJck79c5C9R1ddtDjxQGzhu3LPij9RYKFtsJ4SnGS5GEjdVSXei2mYfptFqEmiqdL",
  "key22": "2rotehd6Lu1YQdjtxWaUFjSgzAfknZyC8gvjqizBMFzje61AtS9ETBgm3BPJZzzQyAhsPHN4m9hnuVPpRaDpbojk",
  "key23": "4UVfVbvFcDUGY1MmJLmiRTkrKv2HasN9sztgMCQJE8xDwKteMhqxeYQQZFdMjfs1iktA5wr5KgWpSJP7UHzvL4gq",
  "key24": "41FiA6FV1HYyrM1sMKrPr4yfhFq6FGpeRFwiEz5eFFXHo6pitakVkkq3vPBwZxiDUyxpjTfn9dposgtBAmX43k3x",
  "key25": "3t2QF2GDE3FgY3P9RZAgDpAzecSHoZzDZwxFtMqfAxojJQVEo7fkyWQbNUZyi6YdQiRrd4LxLNx1jtRpP8HsGhZ9",
  "key26": "2E47957ZPwbqbQdSiH4KEhV7sjkVbEdKuM63YKk49RvPwwwc1Q452yfNTGCqix6dWHUYkTacJg8KS9waiZZSTtgQ",
  "key27": "5WDK4JuK9vsiEw35x9XBF7mLGhw5fZ8DcTWosZrzecHTRYvgrJSQUM2JriDH16JoGz9Wt8cbejYH8Ubo9WvKBNhA",
  "key28": "24aXuBjo44qZAY8AmcWhLKxTCHsMcHnMzdrXDjDVFazNWwhtMKJahWDBY5vf57hsRmwFEKpVJkyJBj6cen64Xacn",
  "key29": "5Xyn44UXyHfycw6DupdDrKQHdpP1miqmJiMfUvqkDAQXqqfztuDQ6ycECW99dJj3coBD5V3hBMJZGZPY4SDFs8eW",
  "key30": "4WsiCADA6hnqaQS1ZsnxBTvc8MW46VMrxzc1jZnwdp6QakMJrh9S5w2qcbsi6kBpanvw9nn7JFifwiep14mE6fWp",
  "key31": "5c9m1sx7DttATX86BzdfumRQ1ZCsx8wAkkLi6zWMpEJDxV61LsYyAj6N6NCxrHivNFWR6D5hZepbyBSE8hELw1n2",
  "key32": "4yHxbPgD1H3JcqZ5Bc7r47BSwEu4kRvA71CXk6oo7hkVhwny2zV2oZoK28xXMB5cM1xASV9Yv7CHW6BiAQktCK7C",
  "key33": "4RyWdWfGHGai5iqmfAzob74LjwKvsrjwBuuoCiWd8bU1qbxd2YSUh1h8Fezz1LNdraESLrNY6A2qX7uXJJtQwjw3",
  "key34": "32RsofYkbkDNAEQaVgmKCpgv3vpXCZsinnTXn9NCcuQrSQDAK1QYd6FegoPATwmWL85jNfRqYHuDfwAomyTroJUU",
  "key35": "4z3sL8jJUybUDphUFFdzxTRCS8CR47Txde1scieRjcN7FJVmxM8XGXC1PxohceAxmccGUAD13hxkTkD89hodAzkY",
  "key36": "BfvTPqEj6b4hY6VMninN7fndt2FALeAemATono4jKwT17R2bLMQdBiZfZEEyFgaSzGNbBYr4SkZw3cZNYnFaZVc",
  "key37": "HrB88J66gsovnpjT3E7T6kTiFhQJa5SH6ish61cgwHrHLUrADxvTf37bD1p85yoQRoUk6YNB7jmtcq6QJ3hkNiq",
  "key38": "4QD5DUpHJKud26y7PqsxqgBzcthNALrnFKK4pTE1U8vHbNZE482akfgCAsHQVVqYLPhqS6HU9yTGEy4DS22rLRMp",
  "key39": "5SHc6DfRHESWLm6gsTEtXAByaYQcNkQHfo6i7Hnp3Wchs6Ey5WxsiyjaTxQvHSs4ciSL8gSX1H7snimaopn7mts8",
  "key40": "dpX5z92sLeNeYYq4PnjT98VExtq74x9iJEfcgupAwZ2PM6TXqfDJDPfvPp4PVzWmea65YeR8fHnCFJcs4TgRwec",
  "key41": "7kDx3oXsdeWKEg2sRvmQkizR7VbjLSKrgGKMZQ9TKjfb66EdsDTeqKGpBokaVa57JVWLez52GeJ5JVaBY56dNQL",
  "key42": "4MdDFx2nGF68X1L6YjKP15sp4W2QAfbQXxtmtZ52FHmPcSo8bSyqDq9cibAeUembxXkEVj4MyfijuCeaiXHHF1JG",
  "key43": "3kRAF4ki2XJcmVzPc8Y79H83BCgug9w2pepYhF5wxC8jjXbiBYkaKqxRtrSiFa5q5VtbaUE2sMrAoA88yBn8ubun",
  "key44": "4MWwtv2cYQBjvzCWVJXAteJobbVEuuZ9biFwrMXotdTvWYeJB4iVcVDweWa6D7zNP9WgmkTcTqxtYmj1niBfeNA8",
  "key45": "xWW9WZbQfi1q7k2whsEbpJBmnorWnq4kKWn9aLydMqF8tvdeWLKNLiXWFvRjip8Qox94RQUa9Fr5JfJnbVgKaAR"
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
