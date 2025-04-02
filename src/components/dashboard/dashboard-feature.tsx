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
    "5thCzTBdFkkpgAMNRGESGF4TExPVvi4EgAUfe7Yh9iUqH3NFaGQt7bzFiyDhJ8fNGEmQ16fjj5voyQuG6EnTtsJU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RjECbomRZJqTEQgK7vGmbfMLjt6u6EqKEgewtmnUrhXyictnksm6bfq1U2oePKnkUaio34mbbPiSxAgUMWiKSYr",
  "key1": "2TZzUFAjJ76agSgEALQ8xM8CgimHm7mZ3KbbK7uQLSTmzezW9hzyBLkwAmnC5ZUBPNAvGqkLLoYmnPBgsqFDT556",
  "key2": "sEBeByowKgqz2vt8yqfNWuskt3mPb7NULqxYRXUaVVpX7madPPjYFvnH4KG3nxeXbAHFZSDet8k9RMgiNm3PcA1",
  "key3": "2HrzMsE8qk5eXcLJGtB92VapUbnXcz7EJLv3vUyKo1veskNDsGThB8d2ozhriutRwYbzUvJ7uorwNUwf3RFNgg7q",
  "key4": "2LReDpeadYq33iB4X1HKbEwXt2PW5X5nPvNtwr9yvjsAJGkAN13d5UEzWaax7a7SNoCmgcoKhhvJEpTmDn4MYoMW",
  "key5": "4q3cQtTxwc2uEichKD6g4nEQe7M2GsvGMFdsgzbgkk1ETTHmq5FdrCdAMoGiu1KhwE7Xw4JybaWaZ5ycUwndrNX1",
  "key6": "3XoFzSPVqsZtV1bRKuDHSuwgz46WJbJTZYFGpZU7ZiLzHj3LuZmq1U6Qg73efk4ZZy6GYtBjAzG3w1Ny8ffVjUBu",
  "key7": "YY9pDfdRgVyGfU6ELEW4RVmFL7ECN7JvPPotryTGib2RfqzWSnFT6NStPeSPUynJfXLXxHbHxus6nbKzAsesP2y",
  "key8": "4tUowheGJpQhiTUH9QgygQF9ssv3hNXUAQq9G6RdniN9uPZGp9LyrBQ2Yvs8NWTsrEBc8DwHKy5CEkjkTTA9qLG4",
  "key9": "267Le2Y1rLGQPyTqHHnvMhWDmxac9GyFwJ99KbNvJ6s9MoPQV98XjHG2rfxhguugypxdHSBoDv83v1vNC2Z7Hg5i",
  "key10": "3BxqCiyYbdEsMoNaPNFN2ze2Keh5ZHteEAHTc8esuvLHVkSHVwANinc8KcRx9ATqQ6dR2GagxNGh4m6mVE7erRzk",
  "key11": "2JXxfqLrbDkHwMC2pwWPCoJLvir3uEScb8PXjHxk1jxgpZ47jE9CLKrnqSApUNJNFdVhmcuQJJeeFREp6yXDCj78",
  "key12": "3sBNnyVrVnG3ZfMW5geT3Pa7XcADFNfreWwVhut3mKBswBPhtjHHyVTpbut65GydfqN1ytX5Lv2jvubsPKSSrvkE",
  "key13": "4xtjvep6qjPXpMuFtMPAFE4hHRBNCctX1vqdmumZ9cZEdcZaNwZN3r3QyBDNh6fe1nEn7ANYL4wwUJ4aWjJC3Xkz",
  "key14": "51M7HPgB1WvjpeAMPK69BMf86BaEpoQ6bubU2DJk8x4xspGnDi9Y7x5XLumc2214LXqEvvtHY1mdnCyeahwnpTCv",
  "key15": "5uu9hw3qqZKX72QJZXKfVaChERMYWEZH9jNASvSqTvbjKC19DRZDBfos5GghQeALCNbxPk7pxAiuUSgjKwiKtASK",
  "key16": "5AkBHgAcEp5bxfn9e2D34WEaLAAz7Zo6knN4gRE7uz2AgnB1MZvp3uaHXAEwjndG9NKvUaqExFtKEuPCrmq5mnfL",
  "key17": "2Qixepw95BH8zet4Dw8NZyEKw7kgauJScSodVX6vXp13A4E3KjdKcgAQssB1JjUW7HSab4FmxF18VLfnFJkwA4xK",
  "key18": "5fRg1tcw9sW5K8b6aw9roEXR2KHWkrW4iCykpUvcMmk9upfVH2V7fjtSmSpT885XLg9GhLkKWmhFZt1voLdhGNjz",
  "key19": "241o1b12U1LR3hqmA8XxcNCrkYwTK2QpiZYnpB8MP63uD7aaQhfZGqjRyyXGxjc7FjFh2WTaX2E9nRCb5k4ra9bV",
  "key20": "5aZPzaKPrYrUxaaWae7LVL4vQgAYNpbUTJiRBRMkAmEN4wMpMpsKJMW2ebM1RLpvqVasam5fxHQMwHAZHDgYSSFk",
  "key21": "rkQzutNhWSDKbXDd3uyv17Es6yRv6yFH6YzsX1RdnGdiH2u8d5NfKTbGJ686Ne2gCBhrHcbnFY9a5WWCaRe7TtA",
  "key22": "5nVCup3ZvrRHn72kA85kfXqdng88i4JseseYfSubLok7v8yyrQwj33h3oryWUmwWjnBCgMiAixRDdm5DUfCi1Dgf",
  "key23": "3NhWS8AK9z8xB4h5Fm7grqASbTTxnN4odsvL57E9LboeJxrVMEBCDNRwgfkJfLZ71MK8k6NgvosoTrkqjaka7CwM",
  "key24": "4QNmefoBku27EA2QyjHY2r8rEwCWbSCR3aHrmAN2QXKhv3rYPDn2GR1wF6jx3qYNrBy2XB3yAyKtL8Q969HDJTFX",
  "key25": "3nNDyAbKebxqRZ13WPD1TyWNxnJwGSdHoA5ppdzSeKBjmbZYqibunBuZnA76w3PyMvQazfTd12joEUbJT3FkUXaG",
  "key26": "3RDH2i3YHmdRQV3K6chjW42H3TTpeZaA74kWTTjzoiPjFdKb7YyiAGAorLZdED2oLYiCDco3C7D5uJgFVLrXxzLt",
  "key27": "4M7WTMdiSB8Dky13owpnzvJxuQ4dgevyWAk8zW4rMnxKoUeC4SL2p1R6ohJHfS2bAGW5PbCw2yeXKAr7qN1FrNZH",
  "key28": "2G99wQyUW8LUNyaGP24WrkGSeCePttDbTz7Du9gWvKG9ege4RUKiVMNrp78y7aBL5eCKqMg1tawKKQ3Ffv1xt8SQ",
  "key29": "SsVnvixYAMaR69UxbdgnFFsLkSqoDpcxRpXwMBT3hiMwjoon8YHry58wByU6XjsoRgNyqGXBtTG2DFLWnqMjwSG",
  "key30": "3Ft5rUi5Ntn6yccdqSyrE7xiLk7QjDcVigL9meqvqkxrYyNEp417skVMXYdjW6tRfkZqmDPMBQKynM8yXPShkYWr",
  "key31": "2k7HtkJejuaR7YALjUBTkUBUzrLAYjd1cneGEe9diMaiQ3yMaMePBYbuBvLVo7MK2mzXtKX4fCusg3QznkUEc4W9",
  "key32": "Gk4gjotH9QqJXmocfn8FSGen875EAhhcgA1RS5EdvX7i7qWcFHyPioNY6PNfpTJyTPcA4vBQPDQMWxMF1hr5fAU",
  "key33": "25dSMBqbJ6ky1rvQ1nq5G1HNs9DXaeWwf8QpwSQMThmR88xnqBq6DvZMQfovJYNdVtEruvyobL5s5g5S6rAFZNQu",
  "key34": "54UhjHsXprG6UjNcbwxrHn3ePjhm23MbaoLnQZ4pU3QHBvbYM5pUXZfXLiGp49xp3bYroQPvok4ugBbeJdAivRvT",
  "key35": "4AyQ7b44imRWhW5PoA8ZnpbiBcRB5vY1msgaCnBdAZSNYpPD5N3XiCqTs1PsbTn2iuzZB6ZtK92eV5tHWyjW9jEY",
  "key36": "5KGehRw1TNHkX1oaMCMgNgvAreeAcRueaHbKp8uXfVE13ZXQ3C71DiNhCBh5moPMDyfiVozw7d9Rx9AmojJGhcJC",
  "key37": "3GXeG479KLeHTNwjvNmK9uiZ2j9u817RL67xY2iW9ucKDHuBpeGx3LkYtzXDGZ9rvvLpSVQ4JcNUozcCqe9fn4WX",
  "key38": "4qK9jdsG67odpmfm7UJJcPVUKy8kVKkAEfuriUZYqivx7BwJW4ppcTxBdkKeFC61G8rt5ieUfNLtxHfxHHnqt3DR",
  "key39": "5K3xDyCt99UbnDrGR3VgFpVXEZ3UobxoSM2NSUBYvsQSmmCvDC7KviG2RZnNKnFJBr6BX4di4aFb9dTv387g5wMb",
  "key40": "ajKJ5fJ5TWzApkb531ChFeFVvFiQHM42vGU9ecFiKiC7ik1iq2Fq7FSgHgFyoRQKHBmXQLegGyHCuYnTnUQmXuK",
  "key41": "5EH95jck5KmALkWQ7txaUMqpHhMU5Zw8Z1F6YE13ipanqSdnNwSTR9iByNeACU8ncuvdwhtatq4SMt2ZudxK5jSg",
  "key42": "5DCh6kwFfuYaZKnAgsvLo9KdjjjKENZFPvQyhuDNwiBBwqHWxViPvn8Gw63bPuAzX8csZcbQhzrTty5yn9Ws72Ri",
  "key43": "3goHRpysL7Nim1Gw9mZes5yAeUZv1S57T5cFuxhWPCoMrWWZqCCWhPfghB12nJftbah4RzTTnQGN9NVnmNyG18Hh"
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
