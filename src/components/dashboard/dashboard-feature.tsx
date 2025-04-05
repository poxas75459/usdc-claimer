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
    "29m1hGuny5NRnRjGThohYjYwPusv1GmTurXYbSTHQJtLRzDw1iBUsddUfR5qhJwokrUHwG4r7tQD2436V8oqW5YN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y5j3LzSjs5NHy25pYYNkrFCyhWk4gnTVs86LtjJWMZHm8iSQFeMhP8fEiAvgPBxaJ4f3g1HCL3nh4djQ3imojaE",
  "key1": "4CLCqiCBhGEVbAErKRmZYHkhREfihTkpoVGZS6aP1w4hyVJz19Yck4bBSoRurKz789zKphSSZ5YEu8twYmFZWBtr",
  "key2": "4TGiqSPs23R2qPuvXuhogxM82u5gvLoJTD3mfq8qnj9EHfpDxNXQyFWP6w9uTL9aDCwtW8ctmnnJvH4XnviDNWLK",
  "key3": "54iJH6noUJLYSgTnmgNgs1x5RKtfkLUbizZ2ye4cwrS4kWbCTQts4MuUqQJR5DVkGuJn2j44nhoiHRnkTgNEcER8",
  "key4": "5CCe4f4PXHmY673Q87mboop58bpwaJVsJJNDd1VFwW6VPJb7rxi5pFuwNZWtc2poEWzauvT6SEWevBxmPunQCBg2",
  "key5": "61UKFp53RyvVq5ZP8TfXvHnKivuKatsq5GgeF6uao6pT7gat8VbFHVp2hofvmTee8RDrxLvdrdg14FCF5acnRMFh",
  "key6": "51hiQEzL5uUQp296d3HYFSjgn2CGWwLeCjoanT2QXC1FiM7SMibY1UFBSXDJs6QsbYemCkuAsH4zhL5U3qkQ2Lb6",
  "key7": "6ntPjDA8Qogv3TWJpeUfg44VdT9Lk3HXR5gqo1xy1tNXPFLMUxjrBNfcJEFvFgLp9DngZpiCyojjEFkWB9UBeb1",
  "key8": "rmVv8CGP6zetbK8TVMnL4o3QCDWQdbzYhL7W5MpZFHHqEcRorCkQ5H1YpDyxLybVK9eXdC4eAX8G51FdEjss2Nn",
  "key9": "5UNZtZELKVYdezaRPmiEe1o9K66GAH1sNoNP9LRyRexuoND1K4w1ZibLGV1wF1FYLv1ySSQhz2y3rgaHtMFoRdxH",
  "key10": "5fyn79HK3v3axhGTPP46oR25BiwUFxhSUXffGmPp9jWoJY7DoLR9JeRrRj2RygrD5rKMwafkWEFmS2jZbY2cfLuZ",
  "key11": "4LHYyGVdWH6MPcmTHURLN2YLhdeiPFXv7QoiRZEgYmcvLRy4RxoP9o83PLDn7cQ1Zmym49KXW2biWutnhXbT1Ach",
  "key12": "5ZvTzF79F9hY5FC9V4YPHkAfcPR9cGvE7mFU15ftx9iwiPrroaNhF2gkcQUYs1ZMSKaoLD5AifBwjnJq7scgpH6y",
  "key13": "3DbkrKiUNWcXsL27KbJmj8FUGuFQmCMX5E8F8mVdiBMGE8MGusXSFyfbRZaGddnvCJvAxWxPewbbcoTmMf1uR4i",
  "key14": "4Ne5CHAomqAXA1SCmuWSv2N92MFEsrVffsGBF2UW7VGTGi3iR4ezUkUbBCJ9cPnxgfUfqji5KgavrCRE9pJ797n3",
  "key15": "EXJ8rixmyCsUckC4PnYrNQuGq7TV5AfrMqDUHoXsBKXpoDgnEJhBWJwkKEpCbQuubG1n8nRgCTzVLxHgNUDLQSF",
  "key16": "4HPZkhc6LPPuB9CFZdKWktxfJ3uSpa9fdb8E3icFRqmXDG866xmtp6jx28iu6RN4LFnRpEHcjn4bPhFanXuiiyzM",
  "key17": "5ScFdBE79W15pZ3kAXXnGyRZs9h3Np8Jnyp7hsQNZ5BHoAFU2EjPH5qfcUH42gTfhYLgwzAtWYpva5R82QoZmgib",
  "key18": "4X8gtTTUsB5iPmYTr47gR2krES4499weyhb6zPbKEP46b7Z2yg66n647x4Xi65QUKr3wWXHRCeVcNi2CufFNNwLY",
  "key19": "5qd88K1pCy9PvbT5wL7UuoHvHju62V2J5yCMZRck6FPNqsNYspVb9e6FpsXR2tmz9r1MRySK6AKwjdJ2hungJdTN",
  "key20": "63ZSPCsH8Va1iAEhuHoYKRKVnv9NEfvdXRhxVKhfYcKGgmJoFQvotPqvtcJQprTBTQcgfmjPgpbAULchB2KvZcEU",
  "key21": "5mnZtvAYD5t9p3FBw9Rk1p996BXXm7M9kPbk4AfsGfyuddhhDx6BmqyuHuihe5JatLyJuQA5JosJeYZvoqbkMAAY",
  "key22": "2Qk2wUwiCwu1oqkyPEwUYaB6F2jtbmFwuNhYMdgs6bMZGQanarNAQiH6CZo7aojF6zwjAySr99mbCeZNcwsMW9Pu",
  "key23": "isDoxhGMU3rhcDMbN7baEYLxoeH3aDbtyYmKtkqoi6Wu6QXaJRX7LRRsbp6Qi5V2xFZFmckVewVA2vKwkFhUaSo",
  "key24": "5ANHk1Qw6oZThJrP3tgcxCVzdAu3nosTvijYUVmcMpFYNhqH8ubbmxuFs5JzSSkK1xtUVJffe8DArUgyT2AKohDs",
  "key25": "3zVP4o2VqiX8pjbE3AXv7bCKtFhWh9Zcbk6kPWuhbWQjM2G5vcWNiBn99S49AkHrWuT5b54Us3AC2ywzs45AKdTX",
  "key26": "3ZL4Lhe6uvADY9FDj5KPqYYb11NPhJL4kaFcs2ngHu75kuGXGAdcruK87HCvTbN8MR3JE744bABc6jQtKyea4kfE",
  "key27": "5Z1eUxitunqezsQJ1tmAhgNKq4BLMPCzeYueKqoToZ9zpKK7vT4N6cUj1oczCzwDo9UeNieWFziaiw81dQboiXHZ",
  "key28": "2n5gsqhMkHjYdHDSi31ePuGk6vhJc9wj3TNBP52QUuf56k8EB9jFgLU3o93PqnZg93uogUBDycgi4o1nTwQcJxV4",
  "key29": "34dxw1TKezG5Uw3MxCDwmf93X9bnEZtG5YTnhz8jfc4LV7vTZZdetDSrDW5jT5aPZrMPTgdAo2ecjtHhcB3bZfV5",
  "key30": "3xtSSR1rL23LJJK5QNLQ2MYN4vFqf2aRGu2rTjakxSXe1hu95E2NFxWTSzs2BzC1yM474HKuKfq2Z2xgVFBdZi7Q",
  "key31": "5B8iQPe9qeR8sPzU7io6CUaWUvpNU1Qga1nzshmSH6HFFAcMmmE1o2H26NNxgrTrFpRKUSKFVPPcCRLD9vJp7zse",
  "key32": "2jmFAqzVVcPh9j2bR3NKipHdFrLrXoHYakk3VaeCCxgujdRMewcqvvBbxwoGnNG7Bk6kwnba9vhdrZ1ePm3hyMHF",
  "key33": "4TEm2GzJSiNUBE1YQuydfs1muGSdpKZNSebRymLYmC9aqAUMe65DUtWZgPUXSLerQsiJMSiiF9NoRNDUFukQYp9U",
  "key34": "3VkqWgKwzhSUsg5rorH9XdAZGkoc7Kng4SssuPCSf3z7vX1MxxFYgbdQNxd4G8g8ktsMBJnKBoEihyeaU88BwPua",
  "key35": "2P6QAuh5JjqFTW6tk4QEe1UnrcownMTDSBe4PFZXXm3UzKXD8CLp1d6xrFBc2YCapNHEZAYuNF2FrZKHxEt4JDAi",
  "key36": "3SvBQAuiqcTrg4gyrAXqGcBwVBB5XbbP6P3dHMG4WbGoLge9KoWnDHkQkju8Dy7qoT4mY2YA4ZuXU7h7UTyc4Bm9",
  "key37": "35wTaoGpJYJJLd7ZLHPPPWgsWkyHW3BXuHGM6HafyRUiNPCMmTYXCVyZwnv65jYcWsDbUX3qXfTmrZVQZxE953cc",
  "key38": "4YCjsc5ivmeYtxMayWjCzA72qTwjbVtrpq2J8wH9ZaYgsNkcHHH8U1pUWwayCCaadw6WyiSDR2Jutn3UCFGbpQV6"
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
