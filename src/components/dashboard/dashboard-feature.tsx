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
    "3YZtaEatqiGJSagkNefxK6jpjXDbYtU5T3mX2w4LA4k2jp5Shyd6WkyUGqAqyewbBjS4it83bTKQcXGi6U175aeB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dt4S7LoShnY1imHzsS7RB6k3xU1ucjvQK2nbrDLC4L3XzeqEKFLqbaVAhsWWb854rx1jrfCdZ2GFTAsXANfDYW7",
  "key1": "4hjPdX4Mo54YMu7MwXnJnQDfeg4C2QPC6PcoArQnb8AT5ngMsDGCsfeN3yhEoAY1UzbB9xE6wSzLS4kyUzCbeem3",
  "key2": "3jCAkbABWrokwgdNB58pTyjWQw8RXjJqXNYCAhCT3tKog3J9knPLBiSmrKXW5n7LHeHWBxFP19MYvVVisqYLvjKJ",
  "key3": "4dXe8HKRwB4B33znR1bhMuar88cTDbTyKbKzRDHrc4nq8jk1j5m93wWtnLtssNKXRtJh8qGwz3bBJ5F2TidVQUyK",
  "key4": "ZcRFb7zxShU87qFsqsmaYeKUeoDwvLeRjS4zyBVRvXa1ZspWYTM899WkFdrc8az3CSfzFTRME8yqfokKU68diAb",
  "key5": "3fduebSa9dAitWPi1WMeR6S87nF9cs6DcGzFLv4ReywUednnsqcrgZQojHw9qzcnmZmGFjp5cH4En6BwfgBLXPaL",
  "key6": "3v3rvDRXk72d2xV4QGQ7esJ19jm9Cwy51UL39XLsfFwYFJMZqsxunsmUQMGcnfkcDhrpzPJyD97q2po6Z9Ry1ddy",
  "key7": "3ZiaxeUk716ANy4e7hZfQvUG3C5t3oS97doyjQte9C3aGcdf1oSECEx5uEjAqASeQPgXqSQCyHUW42VnH6Kgk1Ux",
  "key8": "56UkrKvjhnf6ByhRfvAjgUxbeCFGfqzYyrwDZ2ZDTCraYfspPG7jtxod2DiJQtNrsDHR5kmK64fVMmcJKaxSHTBm",
  "key9": "3TTG6Chw9rbZnfAmEbUgYTQ38L4ghe7hUGRZc7J4Rx4tEq4ysTPnJqdaj1E9zZxHaVe4fsGMwt9qWSF8eTEnvtsh",
  "key10": "5FQehutVB6cEC4M4Pe1kTwDgEqoZ1ankfsQug5nd22kaWp6nEDQt4gRCzStTWJwjEoygHntNZg31oEWf8sbaaQof",
  "key11": "4AQbT6ayEMRnvkuKy43WUw9tDx2jHo2dgsJgTrK5fYfjLnAn8u9g5dAaQa9eQRvisLquW35hpF2htvjvTJgCgW1B",
  "key12": "2VDSVTBJp834rSGm3Bj9Jzn5rQfYWzAXrfpqzQ6FPcLu9uPLYbWwbCmdFr4gs8BZREeVcqfHpx13KN5Kr5V9BiJt",
  "key13": "rF9vv6QjjMEbqwjjAukeXqiEahLdKpTeUG2dAC2qRLEwQXjVqpunJS5g5T2miTFsRhRHRVcwzsm9fqiUeSQCkys",
  "key14": "391t21anZJG9oeXdfzfJ7cxziNKYeGjC691EHVD5sjwhhT97UWrZ7ctMFChdkmFCHoY4cb7KbggUnE67ToPTjFfp",
  "key15": "2JAFoBGqeJBtumFPSgmgbvnAopsQgkPSRghLBnRzxXQZKCvaY7xqgUtSownaABB5xPuNXwT9yVuDWnjr3kgmokLS",
  "key16": "4gXEdgZhxeSJqfbvwTuxQrKmfiSQ8WtkrYd3pa6YRez5Vw4wEsqMYND68xK3fWTzmonsUq8WexgNKHtWX18CwWmZ",
  "key17": "XuDStQohcd82hQkmsQJNe2FScnDR17sFqX8wTt7zArHMKKpkJHffopJbo7vwVKHCcUTCFBPEFVqRioAa34uQQGt",
  "key18": "3piL3DmmgTkb4or9KActzJR2xkhmpKcTyTjgu31RxoLDeBBZaydSUSteXtTnANXjvRf2qYCPBamSXaph1gjvdNWr",
  "key19": "5osTLCodUewR3iaeuWQHwAbzUCBGTAQmpKpCpf1z5W6qipxsDRe99opgSwiLpxx44fHEHGwbdyc5vC4pkhwE1VGx",
  "key20": "2dJ461NxAxANmVEi7wALsjXU4LDpJBdCPRFkBGdNCSDFk8cmS9rin5JCJ8539fLfAy8FDahYFiKH92Yb97J2SbFN",
  "key21": "54s1v8P4dm3BZwX3hjqg2qT4iyaPuJQ75txE6sW9J91rGq1fWVDYCe1fWeova92cqbR9zXzKvTCiH4qWBxbNbm49",
  "key22": "4SQYFZXB9LuKdxq1NDmXyzNytL7G2Wr96vV4nKVbwBGkT6UfPcaGzE9Anj8TE37wHvhp1yEoU1ZXVm2WAsdeeLeb",
  "key23": "2XhtYPGEpDYhVyZFYt7iFFusQ6GJHUgaZ95EovVwquoqxBP7jzo7BcY4FGn93MsRsvWgrKFRXehJWwcF5VF2LZqh",
  "key24": "3swRcfihuwGXGYSLCL6MrfFqbgFnsNvjXCmpuKYp5a5w2ynepKLBxCxfJUUb6GTPUoD2Xmdf7sHkNappWy3A2hAa",
  "key25": "UbheaMeKApbTmQDmtVbGZ786cKvTzFcZaV38D3bXZbovHwhrchfQCW9s9byhdK9SYJHSZptt8N5EtcSL2ARJsHV",
  "key26": "65FpqvNC3qBXGh6ucX6ggRYTdnWNbY2Sn51Q1hURyich6hmPsX97epbxNzWX8RtxZhxBhcYgSGbdtTCWvGGPcQjW",
  "key27": "3CtKW5J8XKivb1pEfLAYed1AizZwyxpTJqoYNkf5oiwjWbWrnED9uAG2DvDS2phWejQa1wU74aVfDXoEMRwN8y4L",
  "key28": "4RjjT3zcYrH46tVmtBvPyYcA8esCszdEbv2Ym16oo65mZu6J9m3MFWcdEZMgKSGkUuiuowVCezrvcSM6UuWVhLS9",
  "key29": "4V92f5MCTP51dx9HhSU8sgAZC5APyqsoXS2osKgh6MuSxRk7CHFmve3FuMFJcLiRZPXkrX6nQx8XDCors7PXe2Sk",
  "key30": "36akdf3fy6cWet7hsXUsvPxNUYyAG8BWTuGKqoMg8n2zVGBpgcxeENXPfE9ExM6mphexZxNXXzHm4J9239RQNsY1",
  "key31": "Ef3TtJzVfSkVTxNq2T6TxJKFAPwevMnEZFweH5or6oG2kbNZf8b5TzK7FGe1W4GXF4RgYJ9qPLSJbAyJHFSiyQR",
  "key32": "5C2NxyN5aaS4fifSpN9LTxTyEZFVfz7d5nE29NWWsZ6iiP5YHqvEf8njoaz2W28dou4SiFVR9Ts9tYwRP7XEQSNc",
  "key33": "gDpndwMqof6mhZ4RR7N4SnWDjUVwXJUWGFcvkUtFmZiKkK4e3H81zyiYkENKURUcixLDejwP7jBiygPuab5eDZx",
  "key34": "Y2Gxyn7EL2TNNMy7mj6Ac7vU1Zx3kpTC9G9KksZ8Akyc8akbEkcVzrqkPqTRzMkFZDLf69HvAY195bFFsr9vY4g",
  "key35": "P92xpr69ng1LFb833tnLL4zrqJkLEGvwoyVSCMK9vAhALuNJwdCgz6eZSG7bM5he2tWTc1WswgQxyuNEDWHomPp",
  "key36": "67C9Hgn2JXi75KZuQXY9xAaxiRiEd5Y2sh1UUPHK174m3FaeXoGvth4bcPXxcHnjUmXHHe3ryhbpuo77dQYaPcYj"
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
