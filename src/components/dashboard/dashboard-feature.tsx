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
    "5sofUDgwBRVgEC4d8Zwxc5qYR5mw1MbDFcLLseQzzyUU2mE1AyA7bVW323beLnfTjW3zEkM1pBTekMKQ7FxJNEtj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T9xjUNpsuYse5qd3WD69WfcF3zNAUb5KkugsZAqMZCR4bY16VEz48ddMdQgrMwStDpxqmq6VSxztHdfAD1yBMgo",
  "key1": "4EoP1frVcEJDKsyLNkw6yDBz6fB858WwSgdo2L3toSEemdBZJiKNiM8uWVii8VaoVYJtF8zGo6Vn4VKeV6i39pvk",
  "key2": "2ddyVknMs6x1T42RT6xg3VfSYRSdgxqKfmmX6LA4g6GWG5u1d9qkvkUjBT3vFs6zhm6xvQLwPai5CoJEyKWQu6Lg",
  "key3": "3zQMKUnDB8CUfgKcftZscANwqrsHg468Nja9dBDjRmK8UYZYx1NkBE5uQPDHySkAut81otbCoKxkXfowFseg4U4E",
  "key4": "4Fp9w9AjtocJ55fdxQbuqQyVfKTA9sqcYeJFh8yQo2hXUh8dX6fm9bSVp8qnaQghvoGchXSvhLEqtdQeyw6WbM6Z",
  "key5": "5bNhqwzLFAKZ5rDxB3oRECwNZmTtUZj2TF4dz7VeRFM2KgrwEd9S1yhwK4ZJwsFmagJBnAgvC6RXPw5vgdD4Hp8p",
  "key6": "tXoHMYJDW5DDvjy1seeCKeFEFKnARhgVaFXBYng5mTD76D8jgauBqatxJosBWgRTfw4H55WnHzk93EUrJ1S6YnN",
  "key7": "oZNXuWqDg8d4e9BpRHo5Cd9FDo3zQ3tHsJdF6dfPRWZnvZ9u3PDzEmqTSTEphwaHzceYcXqLjJhhiL84FWuwcQn",
  "key8": "24P8dKD5fmkDcWBaUJSFy3cS6HYTm8ffYHjUgjqwfj6TAEJpSrVXu9Ea9F1XjS4Hcq7tquogZhKxvZrXGcwQzn6E",
  "key9": "4irWxKLjDTXXkpKZoofbZThUorrkSPZoYadJ8xCPJsP8KuuM11TZNHAWW4A6mRyynjtLe1QZtidCq1sLhz8JdHao",
  "key10": "4Bea5ZeAzRb4To8QPee1KiizY1g5GzrTmNQboUuK1M5LU4e7HGoknFP7D6THsropuoFHyrQb5VDn8bSCm1ZN9U8P",
  "key11": "2LM6HhBkgu7XVbUk3AWbFhngdEKqSZqFLWb8Rx8H9V3sFwFD9PueLKW2F9zhaAvUDb1qJYU4nJHLgEGcwRiqhFtb",
  "key12": "3G73ym7kPsTSoSmXt6nuByWPnw3pPZVCgNYTzvuMokDNShpEAhsQ86cAiN552XTeqJfqe7uWCs1Dx238qDCt1C9q",
  "key13": "3L1823Hx6196WNVKGoArhssf6mVq7KFTbdcmSe3BsnhLXBb5Wmc98zxv4tWcWCFeQAquS4soKhPYk9hCSC3rDtRZ",
  "key14": "2NDErLC5nXV1zKE7DZJ5bPQbspZVYnihJpYXEDtfeC6pRkHZnLpswiaFwTiTL6sqtV73LLGUYFVdaSfDcsTThUqK",
  "key15": "2PmPui4mzXJxBnjTEBzLejh4zCKHdRvbfmKrXxrMVTTbQJFHX4R1r6P3aFML2TTaTo4TUnUf6dNdN6Xjc8H9nYQ8",
  "key16": "HBTRRfLSvSxrUHTUPq2CM5pENT633f167YtYfCHuiLDusFtVxSkXrRwGieTeugbm5MPnfZWG8zPe2ep8yfQxi8C",
  "key17": "2cR7WduWMTUyUf474GxFtpDFGYxZoMJvLz8e6pijKSq2CXr5JZZftsNPLuNia2L4mVBz4EMXD9uJTeCNThQWqoqW",
  "key18": "2c5cTM19gaGmcGq8gRHZKuBhckm1bA6zouBU7GcTLmiuGXgYF2dsLzNoL8hD66rF3xroSktJkiCYem8mvsMA45Lq",
  "key19": "2gtmyutB7WDPzTnRemqGreK29asZzYZzcedMwHEqyTMo6RG6zbKdWPeKQQAorVrsZNWBmMFJdsVn2QERvxadoaJ1",
  "key20": "2AMsZcEN5QZf6dWQubyvBZTpFvmXRboW63Xesm8XS17xi5zSURSAyQM6NY3vnyY4L7qKdrbUdFcfJWao7AMRRZMA",
  "key21": "2989epaRZbcGmniZNacVrK8oxCXiG32pzNe8SrvDLkmCrqrujgdWYer1YNhLLdGPSd7oDVofFigeqJpyjZJaTPdz",
  "key22": "5JXyHuS83b4SfiVJGSLQF47U4bFFTVqJqwi9mkHEx17tFSe8pnPPazwwciKXqedofC6MgK8or5yMameiPQqzeHKC",
  "key23": "zS2SJEfTSUTHYCWHjgF1xVsza4fuUhb985TKDet8xkVLTXxkNGQLNrycYiAv3H1kky4XJmjmVGUBaNkZewAcF55",
  "key24": "4fenbvi6ofXhEwniJMgU6EsbxKvCwwdYx1bAi8RjAj1Y8edbsUfw2Tfyy11dMTLK4NvEwZH8f5dtf1gwUxTnzFvB",
  "key25": "4cAnmHwg7FxVapqa4H1BZJh6hHuSqm3sDPVjJMwTxPmHhZfSxCZVN6cXNeM84NNVtq3Yj6pRbxCQhnBRqDRrmSdz",
  "key26": "2UemQUj2efaHgYqJSDNcz48MrSnoGY1STst1zykvftcvpL3eLkmophSL4C81whQSvTfiTi59JQZmkHbqoMnR1sva",
  "key27": "3UNuHWotzNWmZgTT9ymm7ZYi4x3ZXNdRytzs8LrB39mgt5ZiBk8CXWhN3k77PgXDmg8ymUS91KbidKK2miafwRoo",
  "key28": "487xGmfNaAeaQXShxyqZYKgzX2dZZDj8cHuqFwhHVJYqqEDiJ6dE4hj9oooSY817Mvi3rpfPFUPXb9b38e1vyB66",
  "key29": "4dLSBdfZLGiJgpQTZZVNmmetBknNSofJ1L3JwNpGADoqNXPSPpQvyXizJ6w91htmfLZCLTvhNCDN5NsKsB6UbNHb",
  "key30": "4FZS61zRTn3oogv6pcNXc7Dm4JmQXsKFGWf8XxumNYC3ZL1qE3d4LNLCVBxPbTihAQiG1NvfMZEiMXcdtNEzFHPH",
  "key31": "28AyykbYLd9QdxmEAwrC6GRA9MuCiYLKPjfx4qyCncdscLuyZJUdXdz8C4G5MBSemUUXToP2w6RB2j33ou63XxtA",
  "key32": "4FH6qxLJ3xndLvPX3iLCMKbDPUcdB7E7fdMiR9hmUJV4WhvA1z9UaJzc966pFBvuKAFRQ88QefJyyk9UtPW6yFf6",
  "key33": "2SPtBfLGLxVaF3pn9Hv1JN1Q3cHAa1wALm4f8AQYEThCVaRYXyiCKvy9KEwKFxDD8AbgqdFPvtfswvK5daDxVxNJ",
  "key34": "3M284pqjdFQRmN7mEL9rgvZBbmMromuJDpnwCnUM7CsztBSWP9anjJdsu5tS5XgfWVudMUREDvmv11XXkySw6KN8",
  "key35": "4o4m76Quy4dcFsEvzsxZwPmC1tvfJyRaaGpAxum5EoLqZj3tLkbXsqBBuUWM1m9hgGfXF1A7CCSCxZ1PqUQxMjz9",
  "key36": "28vjGnR2QR91rnxJDUe8QWzKERbuvqjyJozR9Q2u7pNfZ7bKwDX9X3Phq5mPfUDnRyVviLujsrmiowr943QiyJNn",
  "key37": "5eq1wgt6i3XHMNBQtYn4zWSeFskQhByreCaTBp4Q1cgHmJwRuPQ9MXmKUaj5sbgJV8v51V8taEKKCBrB23AfrhWz",
  "key38": "5YJx9Xs89bxtjSGDEjuEGotct87rnf2esFvpt1pyruAYxdtCCm7L3B28GJ1B41JxmjXZKxmKajaPwnXReNvQGVZL",
  "key39": "3QDQbdXp9KXS27erFF9TheJjrxd9gteZNixasb837R4mhpv1C5ZBSQ1tQKzdHsTNGTTtXniRXXnRJH1bceuG19Vf",
  "key40": "24j1PzQTxRQ9NFb5d2bTH9xrLyGG1vpuJ5LbHj8YrmfoSYLyW7jiFGsA2GcvphWWTvLUipVkrCYVjgRnS5vZwBqS",
  "key41": "4q2mmH9vZVZLrWP3fcYotsWzQ9NXq5cm56dK3AEHByymHWLBQrjTtQs76BirouD87hhf7GDy5qSDyetMR1cWiZpq",
  "key42": "gUQm5M8r8uRYvrTxN5NgF6vrdnDbm5V7sQdYAKBgqhVRQ9JXvEwfgm1zpAJrWE8SfhYkMFuyGE6NUKk4q7faymL",
  "key43": "2h4hkUnT4wgCkwpfcF47m2rxXSRaHzPhAaSUZk8qvY9Bkm49d6EYtZ6VgVa8uTN4w8ENh5kByk1A2pByPT8A7KdM",
  "key44": "253ENs9M76zDHWW4yzzSFNwK6KEDYs4fCHSpGKP1yExGg8zUYbpLqDYn1o9beCnWHPPs7vG7znX4xXUvXw8pcS4e",
  "key45": "XaBHUSe6GubzJ9ejWAR5oCgHe4GJsMhEKTfxQXGLE5joM5BnyaNNXSJZtkkHuajvLmoQSsv3gF3r1P1nYwH3Gaf",
  "key46": "65oE8o3zXjAHVbUiofYx2zbT8KESm7cPLQ2Rrj1ebq2B2Tg7uA6i1HAPibSMaDH3NjHkEWCHJcBgqE7gf3Ch5zcd",
  "key47": "56GFMvRTpsfxvikTPoBrNLsfjAKj3hyvp5Ntz4365HdC8C7vwfzN4LPCUcnxTXJuEhe2YsCLEnwitC3oJDEBVHcw",
  "key48": "4i8oB9Mwq1yDAQZ3yi4gb3iAEh8xSRjXcbTds3mZMkoaethCtdBSmz7ZukfbzANYhPyCNcp9CSWNCH7gEj8nMaQi"
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
