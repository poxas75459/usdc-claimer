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
    "3AQ1ALErNGNCJBbii5zTH5HKg3LiHm1zHuxeZA68k4HxwsPj7LZKDUZj7dtMWdV3kRP6eFMcEwzm4tfA7hhShsbd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3knc9HCL7X2srVcnDcKXpT29EdmQR2AUtY7ZrwtjeofzzyJbp45gxK7jJyGBbEu3qoKk8J6kjdxxkrJPTYPodHaa",
  "key1": "2P22uQDerHUa6i5MvMV4kbyQRVVPYSJzqQZLTjMZTQjCfqm9q9HJHMVY5D9ABgFJtDnh5hv7q2SYNMvRij58Mh9h",
  "key2": "42stVrHF1Z2AfQNFGQB296g47tWZbWedTdVQeZTZTfz15dQKCDqNU7pJFSR5bKKb7URFGLQ2whrAKa1zNZjF7RmH",
  "key3": "2XZKyWZXB7wwZFfYomGPEn2U1wciKrvbPvyURJ4PjVPgweyQSL9Dwuq5dg2o4aWM58GNqMZArkfiYMdzVkArDWVE",
  "key4": "4GPswmYueUaCk5BymTD7qWFSV2ruwZT64WjTXS6qKAfXt2F8wKe9wHTvupdCDM5wY4uFyVLQfUFTnoZbmEgkX7wH",
  "key5": "2LwWUS27i189X7ByoJoQFJC8e31BHLg6hTLvD67KKy1xuz35YAccvjGuRCGo3QAJCkSpVcFG3QfW3mWTLodqTA5R",
  "key6": "2o4XAGV4ZapevoH9HbCiQ9WbSBELc41pH8igLLKbWrsRYWXXixWhkdm2eYdhbXTR1kjHTGeGjyf6v6fhFoxG6ft9",
  "key7": "63o6e2xTAQPALtwV8VLyckAwGDusScPW3QUXz8KRynhnhCMhenTQWbYua7NGynG42nsyzDCXqyhpdqwD36pKbxma",
  "key8": "2DtoeCsfuyQTsgDtFugFjMZtzCEndoFzX6tumZbvRb1sh98MkTfXoE5DbzVEKPKiPDExp7sgEx1sjooMRjGzd1nB",
  "key9": "FWCXNZRK7ZxRDBvXiS8YvqxiVjAHak4Fq1SZcL9wf4LM3A3Ay6rnY6JbhwREVgYaXkcjGJ2WYbUNdJysmxnun9e",
  "key10": "uhsuZBEaK5HwGP9ThHnZtq74gSh6CFUCta2VttxxvDNWjonG4bTh24oTh7RitrZQRe3XBJJmBKyS4tEcJMiKmuA",
  "key11": "4psAXzwj8SsJ33dbrS2KKRSjE47oCfsZCYMKsgodJCZwzF7sKx9PjdrjYxQa4dU6Mppz1bF9m4LhWs3aeXFKkKKU",
  "key12": "3fy675n7zqZCSPTNixNr9dBKKLdMZJBBUHkbKiQUkNCqywwvuuRWKJxwqCWuBa1jdr46Bqzr1FZcTpuiySBrSSpB",
  "key13": "4jtESwY6aRG2MBhtUGbeweLYHxBy3wYMiQKFEBVu2NPXwVHQEngcQFFgyunRuzEJMm24obEbxk3eS5zPpjQbsty3",
  "key14": "2qdMyiMQbbRh4ciVPKF239UhsGQvUviwyykFR2erwqCX7SseoH5eqALVnos24PVtAQ7bR8eW88pVYgynCFRxx75N",
  "key15": "4e22UgPJxeKvVdj4kaiNg9K1hEVh61Sd1rRMNxQaGD4i6twgjBLiu7z6xzWisAKeat5yFTj9dm1QMSeHFJB9Vx8d",
  "key16": "23RwQn5YYvd661CpwhCcFWfU7RspXL4NqKoNbCRMXFEz6tbjptdZLkjKsYxLeAjWdE2MGpBdfAdnj5D5yJpjZFsN",
  "key17": "5cvCmUXwvks6m4yL7QVJNgvTVU16xWuusFHUjGeouiN6QvH4XRbXKNsiAL8czqiCxutzGbUiN6YbgnmH5orBwEGS",
  "key18": "5tQLVsYW8jVYF9aL8rqQUB9ks2U9ZkMofswt37RteF7gpDfi6vakiCeyFH1Ltht4ArnRznJUgQk2YxfbvRBLhQzH",
  "key19": "2J9r3ZyRbkv5mgF7tahGoqWU7RHkVy4KyFoCMTsYDMJ43kkZJyppreT1rxQkXMsDdHT6e3tfaqiDBJQB4CFarDFh",
  "key20": "4xKpSwSLnLuqdMcMSB6hPmSdVsUNPtwXyrw6L966oVwxxH5GjijgdE321AXtxyi17Fk2TTHBjgLoM2W9hDCJo4P8",
  "key21": "3awAe2ZZihV1NQkRNuZM1LdCPSSrkKoxSq9wPhRCWAdQVdKTvMfjxHBP35E27rPVHoeRUAoGACAiofjKHyt2xwdn",
  "key22": "5Knqu8mhatY4G2DWB9cwvYh2YViRF3ZBg6NNu6F2ygeGmGUnJBjm9Gk48KbrKACwpCtsZEp4Ad8Ao6q59dh2o4xr",
  "key23": "532PdbXZJsRfVmaEbxjFfjqyiQKmeCtCxW3VnX7ukSd3Wwnm7HtVdU1uqWAu6v3MzKyWAcZHLKXMv6A5ieR1aykQ",
  "key24": "3aZfJcqqZopZGdhpJqCpg76XsjZiKsSXLZGCNaiccPnZx6qSU4NH9CsWGWywjxceLLSGMdmEyKUbzCuynfQguyrT",
  "key25": "HvKNT6bmkLsSKvrm6897pBt3JotrNr6gyaWrGcjspntXBJA5f3h9BxzMmUNFyRbKpKYK6SJrL9TnKEAbe4m7Wpi",
  "key26": "3qhFG8R5mp6ERsmB9LnFqA63P9HhfDXjoLqX6CQy7T1oJJeNsbm2e3thWrruwSF1tG1qyHCckkM8kF9oqaw2Q7hX",
  "key27": "52xqw2QiFjYqMuuZm458WYAhaSFG8UameJzUUj84gCfx9QRTfmE8nWef71Jttr8SrSApnKgjPpGqByaJNenbw8Pk",
  "key28": "4UG2TxxrZoaQLsCEkfnyc73Dv3Rse7vbC5f9nVEXP6SapRbEZRTFgb1EfAYsH9UqmXX9hLdSzdE8THut8ZAohnRo",
  "key29": "5hjMosL5d1EeRiELEhC23sTWRsAopzG7hEgxxpYuHvkhBYFsYEKW8YgvHR9QGV5fhPmXudb6bzo8XrtkeoA1fCU7",
  "key30": "4qWxyQ7KzKt8xT6ijJdRRcv8AuCA3RwdMgnXfeKkAXaJazGbR3FLouDYq4jUK7vBduPCZ59jJT5iPKBgYQaKYFEd",
  "key31": "5jhLhjq5544cCmQ5omezbkK6LVxYKBDgfnnpxx1xiyDR6NZokXazwD9cKHHoU23FPUtrNASVL5EvGrDqfhPuCWjL",
  "key32": "8Cca9aCJ8ppNdcgCfLh9TFV9GueCLo4PbcfJANbHPF2zNjkf34o8QumG9p8W8x1QxajgWJPNgmNAaRsghdCotPu",
  "key33": "5DnGrF1sm24yxvuKXHwoDGSWZYw46nDxQsnuAYFkT3KnACYG7nWjmLWPPXFvwPYsWfoARJje6UNSqyxrqEqSthum",
  "key34": "AefXFpH7oKgYsdC9Nx8nYoFBpVLScnicGc5VB7DEZu1wX4SeiwpRsjbxAwzkzMvhdkMzL7b4B6igyvakYMG2XmC",
  "key35": "4foe9eEtDpp9KxaC5AZd1EdvfZNGYLVKTkfqvpEGpRojc9B1zU6mZWnuWYcGnNgy4qsdeyLxtuAnFkCxTRvheHsU",
  "key36": "4W1JsiF8tgcV63qPfGz8utU9bK6spizjAW8cDLbHtmQwdet22kngXcrg9TtXo1VX1dNDayxs28E5oUddskowNEqd",
  "key37": "34PEDXBK2VomYuWMBJpFUuQWRffErnu1Ada2scoGgzaTP6Yd5apJv7NQ4eVpDmNueYJRwCsppz2gke1jDh4UpmYD",
  "key38": "2ECWqAFHU23nqt7f7ww3rR7Qju4ZAWd64oZkVqHzmMPEGyN3J4pvSiubaVPL58FLHvaZbCFernHemLVDfwopLoGJ",
  "key39": "5QQ888ANsmrLrW4j3zCAK2xWTWs7WNimaf7bbsuqrNEqCeiQ42H4k2xJ4Fo6rCM5roEJKAJLSYrsa3rGXsvfZrq3",
  "key40": "5fC5vGyMnzmMqYxBhpv1Lh3GcjhcQyUmfS5pTtMUgP7chTaLETR3dj1pHuSSBSpoVTeiVv5Z8EQqs8yQUiFbVFqM",
  "key41": "2vH2J1Yy3FD41a5YiMq3Js4guZFDNhAD7jF7GuH56yRCkawTPqwjC6PhZsnrfL4MfFmt7vQejinTwHqhWF5vE5oW",
  "key42": "2pgxW8rHvp648mU5zFLEB7353FQuD6Yf43xeqxU8QPgRhGuJ8NJEPWa6WfTZVTUcCKVZYcUiCLyxyzwKHAy7KJkX",
  "key43": "3cjDzM4vQkSCsjDFt7dvCa3NKZ4ypyscFPGazduygdz4Mv9xCiRGfkDd2R55ZuRAFdWNGRqJbX4JfJrXzbsekaNo"
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
