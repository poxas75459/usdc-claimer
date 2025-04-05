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
    "CWhmRi3UoTp6y92khQmZWZURaNkZG18oUsJN3vu7qq4oDk6VJG8WTYfJU41yhv6AmYY7ms6RR43iQ7teAgHoHdU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G2bVx884LS2kmkfawvL6K6sk2Ds4BSEKjuGzMFWdywLMHVWy7sdZ5G3ueLrQLshm9CFGAY5BVemnzzmnWoh6phd",
  "key1": "28jaiNUf2bFwjB4wddckSXaqDj2Tcv84LFUN9Js5YMExD1ttSwW2qiFPBxHqbxiUhDo2WdcRgE4W2AJyEcWkE37T",
  "key2": "2gka471oPromYkThcUYqAULehHMkPmpJneeBz8D3siDWew87jg2FBRawybEntrVJp8RrhzKYtJF2B9tiAaL9tdzy",
  "key3": "5SG7oZ1G6KVSJaJuvAwarSpMErt9bdxEW898AEuPYQ4WbovMR1geTExkjcPUTcD24EcSxTt6xFRwGSBJqC3WWt6Z",
  "key4": "5Wd4dZXgGpfhvojF7oUhXgV1WfUiCtQ4fo2FQhdz2du2dDesQgp5Z3P7A4epThvbLZQ5ySeHBJsxfTgLtmk8HkjE",
  "key5": "Y6E8aSP1aqYb8pCLoVJuRJyC5hrcWFGmTqYzEAP1w5e5E8v6YPkw3brP4rH2b84NwL6ubxaLzAdDk83kMf4pzNz",
  "key6": "FsJTx8G1aXWZ8cAkyLKAWcTp7UbACk4dDR2oKjfpg4GMCFHmJknwCmi51GZnyjaipHFNHVbKEefLBCiNvM8FHBt",
  "key7": "65HXpHGZKy9fiQBYiCBqT1JquWpYswfxzVgRQQh8FWaWyUe7gNBbhaNoa1W9R4PqJKGx5abhb2dhKhzrW2VsrRpi",
  "key8": "5jwqE2nrGGNY3Jh2aB8sGcqmLxPYekUnd9oBj2ecMoXmwfETQvwDMUAxJwiYkSipfrLC9AFmCB5gSh9smiGxtDiY",
  "key9": "4Hu4Pf8tTLEuoq4eGR2pz1wPttqJfV975pxfYkU4ADtTBGHGSLvNDkao1PnfREK3iUN9JsjTQFWNxTtbcQ23ye4d",
  "key10": "3v3dq4VAGzEd7rw7Mct6sEWpnPdsBNZ3A3UjxmULo1sa5f1MKHLYjy6XPqRPsTMK2EBSoXBYqDuC25kKqtYXydr7",
  "key11": "5ZnYYKykzdJ6aMtyK22JDZJDrAGM1gypvhHqF8tSabJ82vbj18ZGyakurciNTj7X8MgMJo1VbCfVfQ1v1UFhkhYL",
  "key12": "3FZrtoNdfcpdptX4ki2wxt6Cp7mEjJL1qAaGKnePbSbrUmdMU8oQ49LnXpzh53Ai23yrWP7waE4Yw5VNqFYRuFqB",
  "key13": "2cVVjRmR9LiDMsu31bND3hNmakTXBfNinJb3tNKnySiPb8xykGeg6C3jABa3rqyh7gB9rbrFo6pXYF2oVqJ3BXmx",
  "key14": "3hQ7KzFqqm8acRC3SicmGMR4XXPd5wGNvR2iY7BfpADpj8PHFBJNH3cwVnWLJpB8dhaYQSPntDBodrnnqeQb9QH4",
  "key15": "2X4CoU596MguhkBGkVgSCCQ2j5DwPayUKb4TzUqbp8v9SjEdFTHBKNk8qjbpYwVYEbZjySzrh4K6DSSnLp7MwhzD",
  "key16": "66FbpidkaJ7wXv126pDyKFUddpJDHY6htX6h77rDwK25Ldg2nULAgAFBu3jEvtkpc51zjEz8epj6BjiWimLVUnvn",
  "key17": "fkVXcBwW8JstdYT6V2qGqktBvgUqPBDwTPN8SwQGJUK9vEALCk5epKDGeQRk5jMWQ84yApWaXGDuVnAkco7ocX2",
  "key18": "3YzAc7DGf1hL7mxikPb449ZdWwkS5txVm6yoePh7oBXqNkJqWhKfBB2qS162pvoTN82Nf8sxRiFAnyohnF9pSXVx",
  "key19": "2dTZYY8Wxqbqv4NzCzrwGNwzhhvn1mWhhj4BnH4u6dHjBaTbAsudJvWi5LLPCBUDVJNRjjtkxfHqvKRJUptti9MR",
  "key20": "31a731aYg3omUS3jyFrERSy5bCdP2KHvLsjqHKLFxXf5rCXPDx683mMA5ekX4pnqNSZm9mXbVgBEddmbNDnu3QAF",
  "key21": "3kHpfKYwqp4HSewWY5tq1PXjtSM1277Wse3qGNLSYqGMpwwSpaKc7x1Jw5KFD9hyRjjReDAEesBN5wGyJbzATgH",
  "key22": "2t7qZm6aiZea1iiWKji3NSpCSJLebTXrEvMmp3EJkMCZKpZM1mkPr12dDRNvxsFA5YkDYQiSkCA3rgVUPrsA7qfp",
  "key23": "3895vijS8GNPmgaek4xwfEmTwdLzwD8XKb62JcAooeCMgJB4rZMZNm1hHDaFUw9VnTMsGsBznYccG4ssMFNcud1P",
  "key24": "5TZ8t13Mj1muLdqXFDBUmCUo975gh5w12EDheFDR3T8kuDSkD9oueztAZ5gUJxLhSw5gqJ48CGv39XT4DQ5J3E6Q",
  "key25": "5WjB7SXBbHZfwhuWKV1QmpePbV9Jua1jMFFjUiM5GNYHzBFW45AJ4XDSeeZe8W3Pqk6wGtGgZnnAp4NBRxzUThiv",
  "key26": "5yPLNt511GtTmzfH2QxVdUMDwBQvZSfzPsWVZQhST96KN1AivyThLuZWSRacmPp6Ef1ttVgNfCAaai9Ma8w5Yjvj",
  "key27": "iT67gCbWfz42CVn8Mfy1nqDTgh3yYuBcvyDnQToHuLoU4yeo6srADqtHA6MDmhqTFDLeVovpHWrfRefs1aEM92Q",
  "key28": "3bGfWvVWmxxZmYBPjeNGcsB4MXfDmXVXG28Wv8FyaJtH9UDXvsxpMsNTvQneJ4Abo1QpJAgKHYrX9DtbHbgo41Fn",
  "key29": "4FrFTN2eBXoSYFUB9gLNmuWGroeQTP9RgtxMD6wSH77NJ3VmX5yBosHFmv3nER5ihdYMgWwMPwJrj3S2yde3rP11",
  "key30": "2b9ekzzWbf3xVW31dTECQW5uM98Df2N3YyDU8rb3p7r2yhn8geeJoesuNozAqP8BM2xDi68g5kNBE4AU3vZy86ZW"
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
