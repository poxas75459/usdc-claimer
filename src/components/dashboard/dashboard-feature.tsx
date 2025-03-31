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
    "4m4DEN3BqJczzTL5K7HhBcfV81BNHtHxdhMnVToTukDUns4MHx3g2RHmRkbQJcu8ewdBGjcrKNjkjp181GqJ3WfQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5psQvmiZA3imZ7HnWcGBfFFYhxcmN3KHrACpoREJQMVKyYj1GLbD7iaN5mS8RVHr93hpWMaQD4CypvxoTfZVw1by",
  "key1": "2byLUpkiC2LM3vpfUQq2gKGJqVcWU3Enmy4aTZ8SE5cbnwMdr6uLoLtuN2juGhkBHTveqQgiTiKpTesmoXaZnpA2",
  "key2": "4oq3mZ2rToMwaefBov997PeMXiqUQCd2chiy8rFdo5QNghiB8DUNVwY86QjKkurYuwGFgVGReXAG7weDKRTufLXp",
  "key3": "jY5naCXAQs956JZn5xbnzW7XSTng7kdiAokoWwfjcKhqz2wdSBsmx2TPpGStUF8MaxykKMUkzXQNhFqd2vVtKSn",
  "key4": "2PX61FzoS3inLrGeycAQsbbuGhHsQ286fQQ4Fu3YYC1jWAjpkDBk2rhm7t1g4KLYHszjjdZ5iCpQ14Ho2E2poVBP",
  "key5": "4n1UU6KmroERUgj3jLhpZ2mtkSzmGurL5fhEU8uijwfSM5BaADNprodbEaHit46obbqpuqJtnGH2A31Fo5Y7vhXr",
  "key6": "2Fgu8gA1YtpY8KCd3rAgWoWZkUiD4VCPptuEqApy4bU5GgMrMUPMtDSzhLxtY1h2oMsnZ9v5cBj4g2JGeaJ7kp28",
  "key7": "5w1GdAGgAc54YqggY7ymcTBkQExSwQJMaMLAkFvGLNyNDbagLznC2R8KADk4PAoPa9TZm1iSSvrfNHKWXHwJSzQW",
  "key8": "27FnWL5G2K112HxXqHjXwkb62jUN4ufa69wSZxMzPu5qN46nvpKxXtaTJnjXSKvF2nsECFQ3NJ5mA47jTdQvzw4x",
  "key9": "4XkQkN7isMZeH8WdEZeF9em5LE1woj2GtKH1Vx9D5Zts24Ed7zmm3wcCFbCP75bLKW3rzLS2RSDP3wfu1tYFFL7f",
  "key10": "5anzGKrPk2fXxke3tDWrmZCwdcLsGdrDYNK1gKRaq9qm7ubAAcrVkrUzZub6ntaEz1CQKZ7UbsoqZqC5pYK4sLGP",
  "key11": "4sVd6axKg2R21NrtqBYzKKHiUGjNhVYVNYk8CgGgaGBXQ5d9N1j4mirnQ5SG7AAvqqAg2Eh42FRyUMBRChgMvCx",
  "key12": "4TDvJCCrK23FqMac3CtR97FgkSdphKR15VUfBZz8DF5b16FLVSDQXExTmBwhHS5hsRBd1KJjtpp2RiX9WvErYqRG",
  "key13": "Kehggp9gVRS86EWnXPoEBbzdqv5te97p7d9ozn5drSZuu5kBqYAi1mu3Y4tbMLvj8hVk43AkFsLeT8n42bUkgZ2",
  "key14": "2rennEprUnWMjEpjTxQD3wsX25Q6j4fFQjK4KWpapbf3DBnwPvs7ED4WxjgNU6XwWso15RSDeYbb7HfMHZ1zndzj",
  "key15": "2217GjvdTYRwctNwpKWXkvLcLZfS7zxssV2JYcWj6KY4278bKx8qWY29ZmiwfwL1DbH1xH93sJFp2twriXHKJUxC",
  "key16": "YAyyvrAX5DN1BsTebb6vfdjFwEoPEtqtFi65Gu4jiMhPZ11W1cwSekgKgHqZWTiHdDhL1hn2fSJusCybqAKiEHP",
  "key17": "3zjom4jDdg6q9yTTdpuzvmeR8BqoE411d5F5EwcHH5cVwxiVgsrntTCH1Eq9RDYxGc6tXyZPVjBUXLmSU22co4K1",
  "key18": "5gaBc1fQbXz4oSHVXDjKLYqQweEPXF2r5Cuk36ezechaGCyLuJGGTEM2nbtFnfzGRNUG4nyneMEqdfWFkzgFvV9w",
  "key19": "5cHzMMrMagYRQ69raKfYVaDJG1SeHkH39WNKGGVkmZDphzXL1fXkAymaZkhY1Peu4Ynupxt42Pd7ybskfvYJnfY1",
  "key20": "28X6wYaKTwuALYYXs4aNeh6mo7oo4oUJLNmCYBeXbnxo27mUjMHZkDX8RCA8Y5XxD2bzCRtZbWu6Tb7PJ7exrHh5",
  "key21": "425wy9TFrAZogHEvrAsfqgeQ51ATck3YzUgyQEGnRpLXdMnjCHxLQnbDYP9DHvyat6K73ExpKb7WpuGuWpUDvcXH",
  "key22": "2fAyJCzKeDwgQkWznZPAsLd3kPNDEZK9d7eygd7izd3nq7zhBSDmHb8Za2tAu48tJysPSsupz2ZGHjfH5gjPUuWH",
  "key23": "4cEeeChRMCifNP6oaYtr36igfjvafhLd1rH3uxLjcaQiKQao2pWUcpKejpeU1isvVvTzSUoPgdq1FXcD2v5QFSht",
  "key24": "4bJ3WRHPTimVj97EDf2JDo6VypJXrAgJEFj2BjAE1BksZHXHjF7Ab2hZNDqZ7BnDdBoCNgfi9XtKbQFmc9hq1uoB",
  "key25": "2ac6VnwJntVBvhh8ZLTnMmpohRuaomrksZz7UduPQFhzK9nLu2ecsQ5e5JkXpzuVnZFtLngAxDfd4a1r3BGxJ582",
  "key26": "9M1N7GFbye2ny65JVPfj5VH5cbQ6fVCXXGKPw4QyKKv8giV7z1F6EC7kFnSxa8qyXfPmv9ua3aR3GV8EZXBNcqs",
  "key27": "2qLDEx5F1imtaXXTdnok5fexF4Me47KRJ3ky3n6E2F2Nv8LpJt4w3Toq7TrMAQZg8QPfDpwwuh6SDthn4tmdwZJs",
  "key28": "ZHmotH8Rw2H4MusubJfnu7qaP3yB9GwBX7xDcQx11SNy4pZvRwCgHJM4QhBKXQoMtTgDJcahVRNwd5mcs3Aac4e",
  "key29": "N6dQHhohhBwmLWSh7CQg561Mj6YuX4HuTMCWf2CPsJKfzvyBmvjjTJSouH764qP9gmdSe7bjKZejxLMak1zBtYP",
  "key30": "4wuGhtoWJfdcnvNA7S5BZvM6uPa28vgoqAWgr5bFgumJdRrFr6nQd9V2FFafCMApzLmMq8vBkZMdCnGYc175T5a3",
  "key31": "61BAPyU7Qd6nA2wuX1Gqj6qt32DaPLBHVJPXnHU3F5rPR9XMh4HAQr7uj2XzAcd1r68soEQsHwGTbUmT6YxircDu",
  "key32": "39iDdWnHSbv6gXKkLkGNQ8m7GcnzfmrH8yyLoN7fwqRnnSLMeUiME8o8PyXteYNYM9pqMLTHPsGoDyifL5gPV8f4",
  "key33": "4NSSLA1VVTCTyyELtU8DGdm5UydjBkwnCAcfe1PhTXptjj7t69uHXpck5hHVAyEyK9thRzLNcdkrfXy8kc5SnwAg",
  "key34": "63WVqKu52S3bxbq1YHoJBoA2ggwZDUTexqEa7XK9f35GNiEB5W9f1QLEfpFrqCCchCmuLQrpY6d2PMkNmdrMWSXk",
  "key35": "4MSDvZ41R8ngtMr3XE1rt3PAVHgnfapCMDPSFYxVqMXwxUqLQaPKw8bd8NFzS6xt8KYwC7Ja9RbPbNgkETyqAzqr",
  "key36": "T9dvnat9KNw1cKdnuFVKF9RMSZLv7GU2wVXA88vRYhWQ6vS5et8et92W31QbXmVg7KsAewb45FrYdFVAvg3V8xu",
  "key37": "2NNLC2DKiRkbvSfHp4oe9ayGrPTdy7bhPqodqLKnQ8vyvqx55o5VgCj1AvuVg7w5oV8tJacmFLrEtnCD3WkrqX2h",
  "key38": "b3hgJYb38o2f9GhGnLJ7KzmwoBQxK3Ka53WNUBiYX5s4dZh2FiwxGJJSNZNjTzHBjVVtSeAekyTt473gKZxbRmW",
  "key39": "2kaskU6vfqEA7k3DJdFSaBPxxqhuLMDYaVJnxXZoemAFsQtvZCMxocXjmxDiJBPjQZy5dHmhJSftKi41BtsyB5bv",
  "key40": "hm7sLq9AGrFGFmUFyyWbTHXBRYoM3Pn8CrKESp38t6VQMhx1Tv9iF1eWGwy1DaWuk2F8dHcc3x1onNZbNVKjaFT",
  "key41": "62dv4q4c3cTRcAsEQraZs1Aub3ByH32ZdZzr6uNG26hansudUX9q8KpW5gsW6cFwuw2V9HSxhEpQSPtibx8oUDjH",
  "key42": "3j2JiGvkXDjNpiSx2yHvEq4LN3fFsyTRYRdWQCjMuJbCdNLKxc2Q3roNpuQGHbWHw8gdMZPVY9pEVjQ83HEDM7XP",
  "key43": "ZiN1vLz1pinaaak5zypk3QvWMZEhGArognazH7T6EboUay3q9EsQzYbAn5XCbrxX2XunxMTDbGJfCeHJTdbZjch",
  "key44": "4Th1E7sJ3jrbG2KkC7ja2BaAPcHXGMyi5QMEjqgLqgrSYbgMrwtK1tM2d5htmCSiiPganQwQvn7euuL7iMg7a4hf",
  "key45": "2zATRaEbcKuNey3k4dzTozxXAFaRvtKZZQuxEUPpjzakXToL928SDQf9TMUsRgCQY6EgnoVSJgu9y7wsCmzgehZA"
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
