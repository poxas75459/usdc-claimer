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
    "5Crm77z8629zzAweobDYH9bSZsv4j4sRUXPXQCeZUanoRPDVPu2sHKugayVoVAzUCAsVHGA4oBVhkutDKrpbDd85"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SvWuBBLUhV2nBgDBZVQf2fe4a1UC4EcSHdUuAH8RF8q5o9129ug8h9PNPjXjBtCxtUifrzm2JnJ6hUXd6pfdt3x",
  "key1": "6g3RnXuY3uYaf6inoPShV4Zkq3oZMEKuWUEp5KSB5nJ3wHHo7UnU9ScpFJpDCZn9MWp5KFJwGRYhynw1neKXfPn",
  "key2": "K9VsfTDoWuAotdCnLDjhZBoNQFs5DJ9T2epjzwPuKUwy79oEun45YaQKk6yWExEXFW8xGz98viTbVv3n2KRnkcp",
  "key3": "5Q4Z5X1qcSC6mh2GxnTvpM3AaVPur2Mbx4nnd1oo8p4YpejZGzjQDSUADwyzFhLQk985DZ1Lao98B9ud6jhM4xMn",
  "key4": "35zVbzd9H88a3eSjKNC9QbqKdyDEXhXPkfNq1Y5yPbVny7KZi7zHWr3nxbGyrd3U4VJ8Deku3gSW6mUSmgJhBLuT",
  "key5": "3XXFzahkvd9DatkwnrVwq5hrXue2w4FxyoSuh26ZX6Sk6YbLu1WZZrqF2P14fAtEXD12L946vp67BqwgaAg28Z4c",
  "key6": "5MJqmFfbJ3pFX9YNZPtE2Seh3tPakFHwYFsesXGE1mAR76n8BLHTteoExde5i2FVdi77BAs32ytzam3kBPD1GgE6",
  "key7": "4f9P3WTGsCCUCbzE5ND32XdX2UQqoojwnRxanPvLTQgAbmejgdxjY8R8JLtkebE6Vx8gZkwm8sqbpBveo7EJPL5J",
  "key8": "4gYb3WXLd11bRfkANW9rUBMGyTzficpecSkdrtvi9SuhydWSW57ZMLrvNpE5yTCgaCK5dw6BpVSwuS1A2xCVu8qz",
  "key9": "5NxxgUDrE6os3EuxBLYAua4AC6x5yCcWS1HhbYZwT3BrsQXMcVqQYtLQk4mBMPPYKQCkUCatLLu6eHXtgRCCcNg3",
  "key10": "45MJBKfvWBPxQVyyk6CAHUDxPZtcyvq8hFcvMiqunekr7o6YVYmf2NVHo2bQCPBoxEEohK7N7ieCjZ191kp11bkc",
  "key11": "5xRGG9m5zE6c9Jv6thKPC5qnsSXXZbbrLmSCJUqpGNDn8AcoGwxdeypMTnQXpgVhXqYraXq5jvWarZk6oQsXb7oL",
  "key12": "w2tG1yMBhh63keJS4dHMbMhtQWYTuJ3KFQseekE4VEVkw8D6j1FoRQeg1e3JQWcDYANjqjLZ7Su8m5YNdTreoyF",
  "key13": "53jLHh4yQ5S2jRSzexn6VJWNfxf2pZWx6gEiAFC7VzcyPhkEPszMqPm3sjAQHWYrScKnEpXDqjpm6ztn3NTxobKb",
  "key14": "5rBzkWmpLNg8QGGb1VvTJkJCgiTi3uuLGQYQiEs2Qz3A1zXcYWkDHmcVFz371RqtUjXqBFw2GLWmudZwcsPTbBAQ",
  "key15": "5PjW4EEDqAhkE8HLW4JwADpCxdv4Uo1RZYRKbDytavgACbanxw2ZpbJ9Cj3ojbHVVxYGP9CydxsPffucyGRsPNSy",
  "key16": "4cHcs5dYJG1uWAJMAx8eq3qbyxHheC8aZqJpRvnGmSUSxe4y5jh6JKV92fRrXXWtVTkvumAsDUm9GcShj57nyauQ",
  "key17": "5cQySRDkx2iJrzQT17jGmoajnNeThJzUkXq8mQ9G5SoYpLMHvz4QFG4MsQdZ5sWALM6Tx2fw52aP5Dd2RFPzoqpy",
  "key18": "3JAARD33Wi7pPN9sXeZNaA7QWkKHP5BFF3eYrMAA5gbj8VppeUw78S2x72vcVcSP9y2y6VDb3D6DFigRxY68sYRM",
  "key19": "4JzeRY3MwtojGBBEqb2egmX1Rn3gbmYWxyifyugwjM5JPUDW6L2KSCuBUsE5eEakcPjhBhDceMhPzYi2xWXE7N9K",
  "key20": "3hjbfgbdx8zP4RQMsWpyakahgGhqzAqjGumrCbTwBZ5rL8mwprFxUDk7majwnR4VZwwYKnYGz8rFDAqxmkwjLWw2",
  "key21": "5Xn5AiJPqMDQLzwGyUdgF4AKFJzpdvhkUBFifT6pttzpKQ8Phtn3rFPqQuF7g4gBbcPYFc3J6VYrJpyKYDq4Mw6E",
  "key22": "4hY9tbfqidLm1TdWXWyKzXcndw3yEhX7XDSBUxDjRx3R4TwRwfVduztCC2wk6DCTnxCmF9rViRdKtAHBuwKUANrr",
  "key23": "4ksroVMKxRgYZuBGyWc1Ff9u4qnXrnnQe24MbP89bdfobTfoj9eKtAAcy4C3Wr59c66KBvWbAGYrxAB1pvMaLBrn",
  "key24": "3KeyRqtLQKrv47QA31Yadmz73XRjhmBsdPoctMnn525z7shz4cK4UUio1BMdASMzFZXkayhXSjQszrmyE5UiTny7",
  "key25": "443ULpfrU6WFioomTCzKgrxFJZDP3ihZiQVGQeakcmpwLeXa74PqH22DJ8KQDK6ptCejCzPf1r2x5gJhfswEgyeT",
  "key26": "2Ce7qhVRo31e7NFwtU86Vy5HbD8cZNY5bDxtAHTXJ29WkbE11fzE6EE1kq65wkp8zjBrJFvvJ2VnqvF2ndBfWf2g",
  "key27": "wLexbu3MjPnDGeyFYLx7qe7VU8iJR2PJ1VvD3zmgNN7oHEWZ3PgNqdaJfX2xYuUv2CbkNdfAetM7LzMc6kEuSiK",
  "key28": "25hhVY7efSfX2vchb92i9BgQV2i8ijeMG3xDT56AYxHEPDW2iL8X94BKQSWGoCcJ1sMQ1F6w3WwJM6JesxbMExUN",
  "key29": "8VQBCs896kF14DpDoPjXeCtvAzduz9XFcBwmYXpCvaWeayqnw9zuzBEunG38BZdN1aMTS9oipTS5z4UB4svMwDU",
  "key30": "2cSkjiXz64fmn1XSa3WBHAiwTRNTvauUcM2qEXBLMckoaLMUD79WJC3fey3ShpNzZq1ViGdYHK59mz8r1L2kds4Z",
  "key31": "5hJQ4APGaZRP421Zzg1GsafyhMPbWSz4jhNdha6ypdmSHkRiPs8UaTcifcaXyWxdFqxi1ZhmaTUDw6ivRGtnQwxR",
  "key32": "2yJnYic7ALkbshMHkctr4Ke5NcuT15RfttMsv3hQsYnSjmBFy7Cbb8cLwhuAJLnq39gVPXSdZUzA929aXgJb6edW",
  "key33": "57e4HjDmWLGJmqur8qhf2ATmkpvZ6b9zLgSjoLY9NhfXVNy1dSEVWAVobwZakQx47skTHP554Rx9GMjvasm2gNPY",
  "key34": "4s5AgEb6BEpoWZaHSEqMk4uz8jd1TdkdjMXPi8rwzX6Hz2xoPE8cuwtkjARZpYdcE2E1Kse3NWGxU8zJ3rVXP31s",
  "key35": "5zdR9AYKUbLqFnLqm7EGo6JzHa1humMRp7XGinBDT2NZaxmUMoZjFbSvEyf7Jv7VG8wGj6BU7FEVixvZTtTpkq58",
  "key36": "3Kmr6z7nVMRZ1S7mxuz2d3XqyDMaftZy126WJXPaDt3qqRuLYnBHPE7jyXRLY6hK5XbGK4phkLwqHPP8GpwuXz9q",
  "key37": "4WPHTrrqecjaWu1Csfn6x5LMXiuTn6mNye7iQHb6e5SX1TYsEK3Lcr7iQAorajqcBeCaAkhLqdvRoXYq1tj89mXc",
  "key38": "5tPiQUcC9qSW6S9jeJVHBWLD4BaogvDFpCQnVw1N5p2ps811UuLQmMrAv2rH6N7am16yYrNWSPjNwD2sfg6sY6n",
  "key39": "5PnJG2oZ5KMVYQhtTCgGUzNZ7PapMfaYaJGgmpdU6tV64eQ4WXAVW7az36GJiFMqSS8a4kt3zZeykH6MzMGze3qe",
  "key40": "3NLaqgxziPZEtWEMCEXM8LAsYaJJNL1G8x3HMJoqBjbKVm7eF9pxrxnnyNgyqB4xSRrbyUijPiLvkG66T1epVN5B",
  "key41": "3go3kELbnAAUaCg3VTwRmKDVhhXR5vLZ3X7QY8r3jU2ST1sY6mruun55DxfNiGu2h664Poer1tgLYMtSpm4tN3gu",
  "key42": "5hm4PEpzBkixtXenwEFxCdAnx3Zo3zAYTsEdZnwBGi9t6chQVdbkL1SefFQEvyP8wp1NrrWQEsaaE9Nwy4jcR91N",
  "key43": "JLw2CiWcXNvwqBT175PQL2JaQFtkFdkdCs7EkDLnQB5sencZ3qgZpjNqrjSPzRNwPv9Z4iMzBGrPqmcHZqkr7Tc"
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
