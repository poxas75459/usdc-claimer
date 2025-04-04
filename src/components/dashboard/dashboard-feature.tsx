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
    "4BZSHf4TUNUhBCDPCvyEQrhyugWkYP9NjrnadBWM8rdZVg3k643ztL1Ac4hA3E8kpuqPAroH3jFmcmGoc7bH4YJv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m8w81k4VWYW6FXd1qtywj4UDLQStmAFHUp4BVNR9xbJ44xu9PkKp98N1SAr5zRLCJ3sq1yU9nsJhzXAvuF5GbDv",
  "key1": "1sJj4mQQBihmmfyd1WwnCS7ujVLAY4z9T7HHRBqZkfuTNTv1qVDYCiTf3WeiLa3uXTr6UucEqWYrLVkDRgRDQ1v",
  "key2": "3KozC6X5v9nDToXLCrYHtXXVXttqF1UNTMB4hQNKYkyDrAgmwsXbyRNLtRc6feEqEqs2AhCwYYZvRcRJJwNYe57E",
  "key3": "2Doch36Js4Ueo8ejemhfDZAHp8aSS4HkS6SYyvyJp9JYjwtr1GJvcJsX8rnvjsXjdwtvGvny66n6wJ4LUVR3Vi7T",
  "key4": "63FYDnWknmdd6eziGvSQCQpQ52bEWKfUqgDwgPsECviFxKHDCJycCgTfhFoX9wDHv9TUAmA3NqFAoeeBdN1KVPfD",
  "key5": "59SHyxmApB8kjyWdGXF1u8U9eWVh7eMFFgMNcQ3fBTRRjkqvCsu6Tmve7CSf7a4P7dxhYyEoUtcpKKUBWawnWz9f",
  "key6": "5WMDUzdsoQwpJeZNr2D3dMcTF67THvGXdDUuFQ76rmpg9CbGzo7UXg9an7jzDPwr7YkMsz5wTd67anUE3Z3RXzsi",
  "key7": "2Rzc5XKRnp4zmraKmYu3Y51nAZ5rkURW5Tb6ZZCm5M5AHU5LkLwFX7WY84Nn7EBrWmFTh9DzoBQh9rKtKskM3Mv9",
  "key8": "5zH5k1zvfXUrwe3ToGmwnktqNtNiZ8bK41sqAyT9LLfwGU4Wv7KpsSJdh83DW3qFcmYYyuDfo6grs7sBLTfpgywJ",
  "key9": "2YQir3xLqEJViE96TzCbonzHT7xFz4cWBTt7Q7ktVPzVxN863CidMZs82L43WNRdEwHqoT4VK6RrmuQ15zszY2tN",
  "key10": "3xQPCc5STjLVFPV57Ft46Ew1DojvhfMzAb6K3C4PTeNeSZU7KsLQs4XvMrJUsuinRrRdwq2e8uHULWdRroQW639P",
  "key11": "53iPN2fwqHqU9SdW92x4qvarATp4GJXvR2AReRqdB63Md4PgPDNAPM8m687AA6Nn5fDfwk9yQ7sNAmXWGBdEMunG",
  "key12": "4qQpN3KQU3MFAF7hX29TWBPrtobFQ8d1bJtN8mp1CnF5X8okF1DXUDdKwkdpzWCpdpKS3DHh9C5kikDqPu1xFCd",
  "key13": "4rgD4ZPBinn9Xxg8EvupPvEWRH6NXL3aDUiVcoB7Wdccm26fkZkRigQWsjQQAbKBJdhaLVJQ6S8MvRRfomyHYr7Q",
  "key14": "2NYdhsA2sScy77foXndNwggj1uyPFoUDB3ixGkZVCdeziTwu5ULWEjy4h8QXUTaGSGmvRoDh6vmcVgCx3wBfdd5S",
  "key15": "34JyfsUUWdWrX4envPjwB6LswWWKzNjabwTURwpZnem1VqLaP6XAsdz5X31eMuEAFDttnDMeD1p2fYA6ySL8ifyo",
  "key16": "3R7ptDvtAwTTphLd9dYVCG6F1mzEF6K5yFoU9Dq3XXmFXNBkHHfLzL1H9soHkpP7bBMwNroxntPM6WViwZ9PZRof",
  "key17": "3GJfqq2Wn7oNGMhkCK7d9TdxTGhCCftSyYLjqjrYbLXNUPDoJtnmiA1E8eisEJEGVrzV8QkEzPJyf4P8T4rF2avC",
  "key18": "3Pmb9GYXtEfKm5M2heXySFvScBZZKEZ8ffGePzBkBENvNPvPkshmPJx9gqNUxHZjsVR41Ego7yQcawGLYp3x6s1d",
  "key19": "37EukhDzhyFtiYFwjVpEB1zF4jnPeN8mHqQ8fiZ2pWQKQcVgyaA6ykUtJjsQKVVViswFYBuNQBjCiFqJVEBzZRRt",
  "key20": "2kgCwaxKaHFXdeTTrHkgBmV6DftHFx2kRXBosYRPQxHg9vnND32iCeVVXTq5N9Cy9nCTE5MdtyVt4CKtzxKkgYg2",
  "key21": "2heoyYDF2eM9r9ouRDdU3JwaZnsGdvcZ1s8V1g54eimFhmqSTaKm7SP9ykNoc1LirGWr5mUaw3awZqSKREoPXsG8",
  "key22": "4ueLL8nkvyswrKQedwHmRv3RrTvEkabiAwjfAjvAee9UoiKrA2AEGuSiqGvdrDxh5GKPXEr6UK6xpCSYRh1icBtX",
  "key23": "54BXST3QWYJKrY3mZL3M8ovjK11ixFbVoigRhdq5k93ftX6imAahmsKDQXXgTEEoQCUTd4L4ZQdT5NGdmeiYMmuC",
  "key24": "51FiFGwoyhTx8c7NPo6KL4DF1G5m5a2USw2vCumPb38eF9QHd7AgtBuKC5JpgWLX8TuX7DciJhkospnnzph9uWky",
  "key25": "5Z4RWQwjc5raUjP81E4biww13kPyQGuBnp6KBiscMkSeN5Gn3zMbkQdRa36aNyYjrvhhvfJdie3pSuNjbRRM7JJi",
  "key26": "5dCkHxi7eqvfGQriCgDGsr39DpbW5j5vRC9xhWZa4RdTDy2LCy9DyX3FJaD6ye1NxcUtELP6L9knxxzZjb3an4TZ",
  "key27": "3NkEcW6WZ8YEni6WXCCBcWgQQrpqEK8qEwdMVJhQTDf5Y4mzwkbZK4yMqiQHeMd3R3ca6koNhiJXxez7shFoEdvZ",
  "key28": "2oSiBug5XkKd6sTWfUsuSTev3ASbPAXc3iS8Rq8eWq1aw6EB4btvQyxyfSxx7wZDZLqn3wVgbWmvGNGt7tL2QEAN",
  "key29": "gt95iuN37XZDxBANTjfTYiRnCMunYscwhbQibjiTdgNbDARNgUauJujwmA2N47AbefPvMb7SNvpdEBP5MBFmaDP",
  "key30": "5YhWPBTPxREvyw9FNbD4UUwmqaHdM1H4se7vVqYZ2Xa8q6sdAn7PDqBYLBoRefJ6XuxvutZ8uTAYwfN3jcnrDu31",
  "key31": "2cwXu4QSbAmHxBAUNeeX4RChZSVL1wqdL5iLaJkvB1eGi5ra4aE6cPebypKEEBab9vpv78C6LfURYYW97NGvV2d5",
  "key32": "3BzTgGY49mbQbwKQkqJCULVYzEvJXYUqDQKefdENxRpQJSUtDfcFauf5qoLZKmqRjuzu7yC6MPEVg7pcYUBCw9eP",
  "key33": "4pnPUandEnURNVHudvkNwh1G2XixH8fQeBpBtMVjB5goSH4E8iFmAHdy2ZxjMdbji85bExaqk7tZzfBPyyFWRTFn",
  "key34": "5HqJM2Keq5Yq6K1e2NGL3tHvhbLZwDNGccyprA9id9i82sJU9Awnw9BSyoErgtzCT5Ym6EMeUxAbx2iaiQSNTT4x",
  "key35": "5BZ46vWBFKmHnzs3bor82mSptqptSKgQXBTma2u39BWsT62X5ueUBh13zctdcC5kBeQoCHMk7jJZojLcS15YpdL1",
  "key36": "kPrfLLkAurmeTxExmJp7Skhgps4NEny38u3vPqsYn2enpU18udRv4jrbqSAP3tNnEnVzewopAy67eJQBCKY9iPn",
  "key37": "5Uo5vMTc9uV72GwTgRUrfhkiGsgsBDJdY73dHE4rAnWeJd4MvTk16L9hSkq6EaYuoSyDrckUgUJ2kAMH6A4X4GwZ",
  "key38": "4sF8t3aXHSr8xFcE4Ja29zGZZ8HPbKqk6SWgW3UEwoGutdMDbFFBnbzTRSqKfsTcTJCKwhmwhAhc7zuBNjHTUHvM"
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
