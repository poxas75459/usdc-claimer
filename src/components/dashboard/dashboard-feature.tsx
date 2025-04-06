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
    "3De7xXU3qCz5EWPbAYYmRR9RFPKhikqxfEQoePtNHeQ5SB66x9HSCmc6BCeEcZJasN6tCyoGXpYGoE48gmqwZRPX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F9kN9ZzyUA8m7eGcDqniJm846s9UpPbqFHZRMKqnCTQXHx7N2RbGk5LmrjSbJtkoq9xrJsf3MkCVjS51MpJo2Pm",
  "key1": "fFBKMtTwDRFtj7oYUooCpUTTEMqprUbhqjVrBUiDaVHcLhwaDSGRmfSh28zWhX4JB9rUadRrsMdhKEKniTZHm2k",
  "key2": "2TcCQg9AhwEzcDraMx6DEbrUDeEC86Mi7FK4SZQcJ4HnQNkDu4yW9sFMKkuyLtcMNqhu4J9A6AgPmEQgpkCo9mgN",
  "key3": "3LwjaUqzYRR1sichPBv4pupdvCvobdSoCRQN5Yu8ijFKbM4MhmEAQhi5EcLSonuakS6c8iP7iAJs2YYd99a3pAf1",
  "key4": "4L6nXH8LwWUECiczFbuDaxwm8DJuSM6BBFn8ueFyNC7XPTgrty3HoEbWvMBqUAR4Z3RsLmxwEBSABuKgpiTBYoRE",
  "key5": "5XsKHSFRzV9G6zzsGcthTKhU4D8aCtJkmgJrV3Vo18zjhjbPTqvzWrpgAiRcjMmEY11yqxwdQb9kPvEhhXHzWSKi",
  "key6": "2G5cKBrAsg9Ygiq3D5wZrDrYuMxgxY1C8JCRAJDV7J32iQKCejavyg2s4Yt5j78GB7cR4ie1Z3evfQpDhN5KNKFm",
  "key7": "31UrTPdQfmN6N2LSk15LE2Ez1dCFyNvY8Exs88GDtRT3rotmtsv8zkhe9WP4EgyiQZ4BEWddzewt3pjjMxP4eGwj",
  "key8": "5Ww627Sjt2apUaVKskYcx6NuJnNfmPYZpdYEyCrCRXJ89FwNLePua2ZpqrynE7S5X6rjHfsS3bX8s5DF5UCcRy4Y",
  "key9": "4mDrJqYuUDhQHbR9e8N8CKuye7pZx9v9iwxFGBzx4YK8nUn3F67PnbNigR3kNsDsk9154125xDYbkyTywR3iVce6",
  "key10": "4TcE8rzy2yFLRMMjhNcRnpupGbBH7ekhkoBorriP2BvFskxXQ4t6qd4Mpn7rUmdhZRXPy6w4a1EkGpnKhSN3NB74",
  "key11": "5xc2R9Z25fwVc5fxvAvAoLUo9pJx1k7gkMpwriRjNuwidrganoZWbhHymd5DmCGKSxW2tnriy8hcqBd45CpATtkq",
  "key12": "4ahyxoXhetEZvVXYBEby8vaJ5wQU5aRrKRJgHAtKvyDAbFuXx7a3g8tgS9z8xHPDoo878p91UA1pVxxSe5vXzvGq",
  "key13": "3MSBGogz5A9Ntc9KTrDJbZpMhRNMbiTNVnzh16k438KS5mM2NCFTotaQi2ztR78cYSFK1MSSQVAPmbtKJmbXpf4s",
  "key14": "4fysQNoUX2ouSw2ap458xPSV3JSsdwqna7XXiN5Tt6VQ6EmTYMA3ogVvsCmAf2ovtak5d6tuxB3Uxfz3DX2pgDtr",
  "key15": "4rs3LPtXCdsQTn46WdYf85wxDfPnFsu5pnLY1M6CjVG5Z6PMV7WsAPo1UpjkWgBKnX9T8AVZC34wY9iibzgtPzdD",
  "key16": "27kxWjpJds5sJbUKfWn2TdqrCnaJaiQ5NcDkaCyfY4pJWUZy2RkYujWijWk6HxM1uDCWqsKQy3p4z81mP1n1grH5",
  "key17": "3k2WwnPRh5T2NFmG1F5AZqiWP7ckcnkWvb5ThnHvmCoGsRmMg87zCqhEcfMYsC6zuuCxkek9TskXTPMGMcDgKkhG",
  "key18": "8aN44FYZKkidagJMmURgBLgUsAKGMYiqDTpYbq1YkxRWHEPaJM9jQVEWY6UCV9hnVaQonX9QZxVYzSXfo1JLA6s",
  "key19": "dEHUBKbaH7DQR6oUd8RyYRmYr8VkQz3LPUoobDzSsy9hZYuYqKi4mP1tuxuuY7urudqUsMwMSTkLN57wTPZGGk2",
  "key20": "4Y7KnXwFUUPuRVXEqHNmkN3ahjCXeUMsewVJ1uVmq9fhLVBUYaai3fs9QTVwZBB1CGBkrAGEgFpu95giM8bQchG8",
  "key21": "4Zu2L44y6VAovdoM9hgTZ9xZmHEwvov3BHNCbF3Ncuvr9vABh4jbeAYz5PYhdR7zH78HLwuHC8XwmHbDDnjHxkb8",
  "key22": "3DoBkbg4WdViav7yFgpaqnfzJnV4rs3BqQgw3w5CQGuyzFJPbeQ629R2rjxNiYrfxciga4SqjWxdwZ1GB3GHs7NH",
  "key23": "qUurXDASLTuFkr5EXySvnC5vpHmTYDjEayJuWsRjP8BKttgtp1ZVcFBsNBLs4GU6GBY136vg797uEM3zLMea3W8",
  "key24": "4dghBuUncKXpTPAJcPA3aiwDoKKUoojDCqqthG6i3oxAWMGEmt7ZAqg3vX3bjQQKfK4rnd829HPEYTd23Ptugsf7",
  "key25": "3QMqrnkLbCofUSUyA3nRAAHdy88zmdkWgSWeQp7qD1kFEFe6uco7J5gHMcrnTZxTGp11uFUWeCwTgdz8jLZDWB8T",
  "key26": "4XQUv2xhkibd6MyT59C3hnohPFrmiWwqX8FD7NtZGsnVPF5s5G3YgmFsRQd1KU4t7oJuwjPbjJoMiVZmommn9fFE",
  "key27": "5CKV6Kr1L6oGfgun67mqpiBjnp1yDJPaGZwSj7YZBXnUMKJ6stRhZEVfLLyP2FW6fbRTGgUN2KefN9YM8FTwbP8L",
  "key28": "36GCCKkHsmprubx7enybntbV1iRPgkLsEYh2jtPmwfF8oHaqsV7onb17AKX6Lbt8K2z3CzDs87w8GNEg1hbRdCvD",
  "key29": "5NK5W4JRxG4fseSJq9f2Y8cvyWJqvAon42UdzpXbp3u5zAg9zNsKnmTWJWRHtFXHyzJCqPqQcDd2PBbzxFjGHCYT",
  "key30": "5VS6xgrNe7irypPhxmBdfjnG1RqqM1G5xNThYBVALGwo4zUkbPRpLN551wrA3HRqEaccLWehvixTHUdaNZuox8V2",
  "key31": "4r2CTEYRCcE76CbRhYg67jozwSL3WhB3Jou162iBziKDmHHgHCTccTaaogMViYNSQUHsiZnjBaR7uNF9bDAumopm",
  "key32": "4VNTc6neQA8e8p1wAY2Lk17yAZv1rLcACjvrCLaoT6HzWHYppcKwtLMu8rdSD1LDr3iceEAx9sJuFKSsv3XfFEDQ",
  "key33": "3kBbsMpzTamHHUyCkstvb7McPgHjuzCb8KD8mFXCNrgz9VPyyV8wYfQYmG9FoPhAJiD9BGMsHCg6mK73ds8CsB8L",
  "key34": "4PDLTfm2oJLVDLKWijEjPzseGgcQkBeuuvQwCQDKHo4TrGHT2cAfkti6gemBf4KCy6CMK3sP9R3QHTUAiauwT82W",
  "key35": "5uVHZqdV28V6oBunB28ALziT6ip2LPeuwZBw8T6sffHr9fBhAdztR3QFGwKkgG8cDRGCpdi2N49pFgXtoqcowrW5",
  "key36": "4eqd14KSXBr2LvYFEStcf5CroS7fHipKymBSiPoCWas9D1Ca4A9oC99NdZKBBNEYkUyw9xLJsf3jqK1Fk7rHYTHp",
  "key37": "5317sraMGheTJgyeZCuuzxCRGz2iAmnkMHiEcSkWfNgyCp9hXNPRbm2QdH2qFZQpZAtsxEtjmbZiDQvyVrnMC9y",
  "key38": "3XDDDdmya1mogtaP5xxfko69rszYUQSMfQzJnLLsj3uftgQ6XPBwMt8bSqmgFadX3tHx2QBzcXXUV41moE4RYz5e",
  "key39": "5rbRtfUG6zvmxytADjZgmnBj3V2HTDhbepE3Wo4V6Nkut2uLYSTgTzbAgrTE4VC6Y39Ub4RGA9mrXDJdwwniu3Ra"
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
