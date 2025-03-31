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
    "4aYr2xPD9gDnU5HmmB2sy65Nz4mxFFZPn1jmnhckZwmPPEjoLxi2oNAScdEQfBkihNpFCBa1UR8UBYezdMUzvHzY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XNZ9Vv6zyw3qtmCz4Cn9wU8CaErtBr7bDtcfgmUcXW3jytsXUsfjTc2wfxqvqk2gL8pbatTJdbPfv3zTrmFTRiV",
  "key1": "5eCC6RxsH13xWgsVF9gAuSBccKTNXbQyfg8z8N6RPVs731XfZP3CJRiMZeXSKf259qU2yDRxdzGx7YuXxbxuXYPv",
  "key2": "5yXXfHN8QbFn9jo7hNknmiJFpRpJkc9fthL7VKVZDvAd2m1BGFLQvZa4mU8zchzUCG2H4VAQD5HqkxCKWxGMmEEn",
  "key3": "4et6LPuXrvMEoYGY2EF77A1x8iAh3PBq9Nk7Wbo8EWMPJ1Y9GD1LDxza2vYXCW51FsSefd4s9Metty1pFbTZPgXL",
  "key4": "3i53vnfnZ43kGMi3VDUG92MQMAsctgYtL8dX8T1tfbHFyAiBZD3TontKYtjBYcfFhKd4kqZz26ienBUyUNduMshR",
  "key5": "nFLGR1GJW2puUoDkY8AWNUfxX3VbmJZZfBcgWmrRnYoPA54NNHRxQjVPggZ7tqAEZ1qzkx135hWrEYZxMWXnAnb",
  "key6": "5nE7NjroaJZhSxYotXKeaXRhxhkKAGQzvkaPGsGDjhzRheF5nA2YQu5o89oQfXkSsPr9TjVExwfNDx68eSXsc84b",
  "key7": "5vNY5W3pzbvykudPpyEGkCPe41zdXaiheRpvbRBQzsB5AuvcbBhs4sK9JJBqvwoQb28jqEBeNZ3hyXVoLmQSwXBA",
  "key8": "8iWQ7GVdh1Ff4ZHefPRCH6S2xBfFW7EPR8Ng9vuqoxhRoeWqdVw3j961wMz3mmNroYGbUSE3YJEbpZxJHmAxEYR",
  "key9": "4q4Mmy1VRqWf3fanuFWkLXt23QDLeMiSM15wdJjMFppLydUwdsSo2smTumgjN9Aqcb4vNEw7VsXwYFk8AXZXXbzk",
  "key10": "5VRUpYMapm8cTjSJM9qpZiXQVs7XPNp9YoMUhpGZ7QxiJkBFdySM1vyQKurP2sBnxwrYto2EyA4qTuMjgVuwa4Fd",
  "key11": "4Fy6nYCa3WhULynydQo8LW21mXXCvj4b2g2VASjktvj9rxzbaAsBrBqvyJT8j3N6aodXgYdpELud12iXjKct2b22",
  "key12": "3ZvdmBboQ8jje1t3cqaYS3KWmmm4WJzVokBAPCgVpGJj84b3qgryVLR9YA6UgMfWfYFaUBCqyAYWdjrfWXyfC7f3",
  "key13": "5vu2kXcxnR1aQvGGn71XS8mWdxw6EwT8EMMy32n7gnwJ9mRS2Ur3x1L9agraHwJGnNEZ7EnDNRThaFqwrjgD6nmC",
  "key14": "2ueMNBi1Ak47hUWsmmzQeKwH9c5UFpZwppaejR5JrqytPbohY3MNwFjWHGVPey4DYfFQm5tT85SidnCdWsDz68r4",
  "key15": "4vsi7PeSvBDGg8LFmNyJupqUR22e4PsXxB3VaKkATCkaZPsobGFfDQ8E33EYFA7J8hnq69KLE9H4MypBnYp2v1BX",
  "key16": "cfwWmQFFDgyDDGwJebQcv62MSF33ffiYhrbDjXAzW4G9GfDvYycZhVyNRpHxFS32a7R635QCqFN2CCgVGuy63DE",
  "key17": "4p7dkejVtNXEj8rCqFiWwaRnizW5VqLfo5EYBojZ6miTYZ7kPf3qETC1fT8M8VsR7tZ8jtFX7YmBbQsRWhA4L8T5",
  "key18": "3W9VujaE58dT1kL1X7vvuA3efiAP8SCbeVRxtRAWZ9JgEDscot61s97NKL6Qer8FL51dg42hZAen3VaQdLzZWGHF",
  "key19": "4YtsjyqL6u7fFDXaWbFFufbxHrNHctEAx9XptqYJvyhxE3sSj2YuPCgMiWGfRb4Y4a4rTxrAA2vk5CijDnPKA86f",
  "key20": "29gLtepBjkRndFfcY2ZvNsnJRrAMv68jdWrhWV5AiJnWFWRUkW1xLxjqQGpDDZUVEvjeMLRWuCcEyr1nPzPrfqkG",
  "key21": "4bbrs9Tc7YXcTJHdrnEpRjFuQYuZPthWtT6QKCdB6zrFFGjoaXWeNaQ7TeKcagraQZsBRp6QXD1EoVoY3gSAdUqg",
  "key22": "2RcDyfQ4MNPSGVxceMLWwRAgAa6vcGhXDBd6jjNkY2KRAF3wKq3ndNQ4tPxRy42JYBbPPfArDXqku4Unfoof1bZT",
  "key23": "37JUeFyxgD8rCniQRq5c2BDtL7ZqmKfiqKUHLvy71eUnq8qeZAFa9NounQqvNiJLVM3em82VmjWQXeSw5hwJbrt1",
  "key24": "2axz4QtjWYhKxwxBFxGbF9sPnNkMVPVE52BKTubFNk3D6eZrAi3TsquvGGB92jo947xsbQJrDeQBJLsrVMwUuCo1",
  "key25": "3fKRscEe5hWwE2btB5mv6NDPRWqh6J286ymikecAMJcJkMvhPhFRCccC11oTrSfiUrgUx5CxsY3tX6dBVAEncJbJ",
  "key26": "4Bao2xCoozq8wZccns5C5kfWh2ogxBVtNShUNabriugQXW5qmrnUr2DC8DgSoxZSCPBcpJSPBrkQUDbMCFjFu2qd",
  "key27": "5LeiiEXMZLWBqCgdCbjkijJnhjDKrDDuqJwRDm491YNZRJLMofCW9Mw9bgog71BEZ7e2uycLvokcs6gdnuPYk1X8"
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
