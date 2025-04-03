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
    "5XwVSiKHhWDvm5CcMgGsLuHTbapkWcSdi9NZoVJon3NdoUxaAm1cZ8G4pXaoVF7jq71dHNagrZHdyBH6Bqm52yqi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D9gyJR8xtofvsaQr82GyqoQohQ8JewmXTpDwUT26FqzfV6hUz2b9ZHbTdDYFqmBQd5TcjrBFoEZ8qsxoqmGoDLP",
  "key1": "41NoDCxZoBNR7ftNate16JM4gKGDfn7beFWHh5SeB3CA2wFZzskk2qLYMy5R9FJkNTQaQc2fXvpTc2XijTmnbH7v",
  "key2": "3HBDfUZufZD5j1AwUKG9RHj8rQTbyPbpKCj3MY4RKnQYqgSnM4GG9zKct6ctyZBV16femDUwm9oT2caFxfQ5WtLW",
  "key3": "YqY9trbBu9RZjYKjGcEvpegz7EiseUkCdFVCnoENYnR94E7F5KLfidJCgqFBZsQGzV5FVMppjabdDEbMLwEqkKL",
  "key4": "3DtGGVDNAYbNkbjWU5qz7EEZrdD8YRgtUCNucwhYBGexknPMXSXZMDRhTGb8C3BvAiWB5qWkdjbNBimjzm7K8Hb1",
  "key5": "4w2spL1mV5bCSYZk55DZYk3MK7a3d2PczwshSWU5scBCFWhgqmv26jp3CHimqWeJ7hub8yfjU5USrFi6582ZFfFM",
  "key6": "5q7xgx8mFHprPBvaeeGCZ8YjbCLHAShrLh237Z4Vhe1QSiWhXo7eR79r2VuQx2LXqZu8cHJqcsU1jDtvBHb1KyLG",
  "key7": "3hTpCqfDQFgxwTfQZSBT9zDRyStTEUvwe8MQfpUUPgogAo64zh9Ly2dqpuWP1jaTR3LCjrBoDDKRuy7qTU4phApW",
  "key8": "awBKTMJ3DhRAeNcq6RgXGJbyUeXjdCjrmhPGxr94DDsxu4JcqLrNq7tDYEbA1mrhVrhVmHVL6ysGSwTgCjYZgVx",
  "key9": "2BdWgbeUgC5XTF8yXSE7Ej82XyEcCErEjkrkydYTBNzFoX1bw4VXPXWoqArZQAck3a1hD2GjNbjWRofSf6gBfXv3",
  "key10": "33h1ZhiEWoFFVmi6fCyRtpj3w8CAJzpwk54H9c4e3nk4wRWmEikL2JD4E5RGguPV159Uhqr3avSxquE4fkF7PxnR",
  "key11": "4X4R3t7VD7nvc21pdwR5dYfkw5DWBmgVT99q1neyPhRn1DStSBUr3n9QeHTc2Q88Lx1Tfzc8zefeWpm8p1nZPjNj",
  "key12": "5Ncdq4GXUPnYqujqWvkC1ipB8ohkUedcBxdhJKg8Rxk4hPJt5QUQpuGMMSNqFbEjgAGbCD1BUScGim17tgc3gRRd",
  "key13": "5nWmmHZu4gX95Xffip4JgQrz3fixtmx2mgdWd9rHkX3FxfAgnCWaCRko9JyUJWc53fpzbRRZfortU5teoJWz7s4U",
  "key14": "4mJmq4qWCgpWtDZJWso1TSK9tGYZj2WE8Bt4Js2aTKxGobWFVd57hzWPtr9hpYCAmcXYLe6YKCZsX4VqXoQfmujD",
  "key15": "4KUdFAjrEog36iZo4RdiTdrNgPeaCxobnPH3xy1zna1aMHDqgWQxNx1MSYaCsDk8kPsEXcktvkPU5YeNysPLR6pA",
  "key16": "5iv9k76ztMfQo2UM2kpxDj1DSF9j1UqdiehWpbVsxeHt1PRoDv6zummwjDk8LFLCXoqWwoLJf4XkWhXWR6zshmDn",
  "key17": "2WqFkA6rphXGcepmBKMm8qapHxzWeuXpxuqcxbvvs3pBP1hpk5qBYGwDtm62hrg8tfS7nux2UhjoUqdRBveqTPcL",
  "key18": "5GZ3jo9jEX2dvLUZhcaifj21PTFMmh2fq2WZUFd8i5EMGcBD3XUJuWFyiNrkNJ9cMMFMW8ftuZcJ5yNDsqV86pTM",
  "key19": "2LtEfowKMTrCyWL2wrG6B3zCHz4bW36nHWFnEXQWiWYHyS55hhBwLxB57CWcpy9JtaQMX477CcGc25zJ5EHJphCn",
  "key20": "37dR8QZXJqdBNy5tLFQ8f9oHBaa5wjYJPhkP5dkxMyzo36VjiRAHonLs4k9xhaqnMhL7CRwaexVLgGA26xmKXPF4",
  "key21": "3L1bjgPqXnijeyHujZWx7YC7649VzU3VQcVPdpSMBtzL9b7gT4WutcChC4q4AEYtmRb8mXXGH8Pew52RXuJtF8Mw",
  "key22": "34z6zDPAkFbScgV5hQr8jQqyUqtXu96ZrPKdmsLYNofzb26eBCh8oE4nhou4GGNo5XBvqhsNx8v9P3cpwFPfEJdq",
  "key23": "3WqCTQZ4CDFnvacV4achmrCq1aTVQyda9JN4WedE4MfAfwruGXRdwM9EdvAXDtFnrAhNqrjxp6FBLtzMr5p8fWhq",
  "key24": "3dEagncVMjvFyaKrokE2C7EBxi7p24BveK6vfzgvp7bF4zvcvDeV8Jqvst6gXj3Y72JGD7S5riXAbY8PdketUcJj",
  "key25": "4p94DH6qiKYVBW4PBDuxVZV2f4oeFdYaryJT31FYfgSbUrwveNpX83dnnPaZK2HCiTCNgkTX3AeWPqRJBUFHEjmY",
  "key26": "2KGGVJiHr3y2zNkiLQXUuUKDXkw7vkiAFveHURjGrnb2ciWvZj2PX5azQ7ypap93T9sFoc8eAjK7fWcaa8RcZRbK",
  "key27": "QokUfpZVQDywDEe8YnyFd4XcEaArhZCvKns36y4ZU1gfLE3fXRSZtVK4iT4CrjWqnzAXKoNeapkQry2CmeZHyaV",
  "key28": "2FbF2YmdpPxJ4jMGvQe7M3bmhXdtDUvkTgRTjB5STJhYCShSSMmXrs9sPnGUVrbsZiUsoD2AzLGW2aG8ZAEcF4jY",
  "key29": "4eqS8vC55vmdktp3hfxNf8Zj8UWzKNBzhGnjFXvJVXN1f3fWYSpTm9pZj178Gi3o9wJMvB47YAxnJWzwAJs5xvzN",
  "key30": "3KBSM5DtyQxHDEkQzP1GX5oLM6ymkDdLcvXXU1va3gqMfBrGGPPHhpQzw1WWno8rMTgRxPdQbF67pjAyqvwMZ3j1",
  "key31": "2WFUWUmFzJX2MUV98f78ryEh3t9A8Qgcg4hKJzire8hdRzDphm57PzhsWoCM18RWsHrieFEEU1c6sSGQ8h1QNgP2",
  "key32": "3uqWuSjANX3TVRD5qzzCnMLoZnpaRE1CHpzimW9mkChHVpKGpC4Ww2xZFWCKpj4Cpv6UbbuM3drgF2c7DpXTryew",
  "key33": "5HcsSt8WzYcoDAYAytf858smL8YhmUweSGV8bQJKC2zwXqgGatHBMVKiYquNEZyW9nsLfK5thB4towxKm8D9uA4b",
  "key34": "5gW8UA5JPbAXdpkVNp92R9ChtqQfMZZJka8NSKYWkpqzPnkmtActboRvzTD1dEoS7dvg5RMjoEt5MCx7BfmeWPmG",
  "key35": "52ggQ1JezzZVvNEAiXW8Z3MUB54RjUFrXBwSNFYXF9p1gqLn1aADnWakSdmJRFfMur2oeN3DMMDQHhiFwQ6XegDu",
  "key36": "5ETywUKs3c6Zd4Cj85hG8PCKu1z3ZsRCwRFiBVBLDnjsbc3McxNkZX3NcLE6YedCqsCaaAvMTY5jWmvgxbU2Pf1v",
  "key37": "5gHp8S8CwM6gU9fg89q5b5Bn9mrvZ7LQcPibE5hY7MbzVRLpbLJ44chLQ3NJ2Pd4qzCQvSDpcovE1F5u4mhYJf4F",
  "key38": "2iamnoieyMjKGSz6BCeRtLWcVU98qo9nzZhTHP8aWdp3Vb6kmZFv67XkysCctmX33RHMqL1FysC1C2Xry6nzEred"
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
