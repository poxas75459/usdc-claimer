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
    "5Mhrf8mYiGVoCaWag4NcazoR3snrypSfF3bm6xfgt76o3sxzAakCfUtL3ULQBUV828ns2fx93GEJ1uw16YkkrsrJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Wzfi6N7fDHFc3hMHUWJJiAkB55W9aHMrUdAQ9v9iGb5XJ4GAocBb6enGVsJpyTgd3s2a9gG5hDZbnFqJFndMUnQ",
  "key1": "5KQYKkdVw16JZgHseHpeinzM81xpFf3UwSxfxrDsT8TWia8qhYG1GP9ZF81d8a9mLXvePtBftEUfxBoQSxQ5RbSY",
  "key2": "3Etbh9E51y5dBqBa1vzVUW8XHCfvAQiFmjhUy3Bim6jGo2XZGKpP7VN4FmmshCYG95b6pY5e2z1qVSVGyJiaxGrZ",
  "key3": "5jJdosWib6Xz4bYRuLStz4EKmWSyvkVptRLL6prioCrjJG5dY4ujDCNumwNxoUC8Aiw9JfGLTq9R7vuQqb3iBBsW",
  "key4": "5UtXnspY8Mt3LtzebAuTCxJBGfMDqnzHvaNK2VZNtmLR5nN2uhRupZsC32ZPwzzevPEpnfZvdtHc3TVvozduw2LV",
  "key5": "5JijRGSmehT17nn5k2YsJCbsLQKvr2r6ru6V7vsGSwF9cWeG3ApUeFH7wnaSNgXfJjhZzud2ozkK5VkB2g1BrQ7P",
  "key6": "5f9dhyRhLjB2rQKLC4nPDFvXXzjjBqYw8m7JwudC37CTDJ5XB1jceKmho7UZaCahSvmLukSZ3orUjnHrbwrmtg2u",
  "key7": "4i8z1hgxXzXcZ8LqraeKi6V5x5VxhvDfjPs4nn5YsiRde22gp5snW9YhPxU86Ane6Y6dvA4dr9QJHaS82opMR1og",
  "key8": "D5AgDriKSdYEiL5SaiBBLDhZdFqNSVkkDM1VXnmD4nm5Hp4s4LGSkye53ns7MaMjV9UB3arvopYgmmQuyfMFTd3",
  "key9": "5VWfhcmBEgf6B1cUSH9z76VGhD4vMujRWJeTvVufc7TK4CwXyYWeboBUKwGKoqQLYfDRA5Hcxk4Hn2kLAVqxR2Zt",
  "key10": "5rBm3LkYnSPRryxhhEUiKGRTnBwgcZTTeb2mHHvaUAKP1cjzP2BiS8wp467SFLqJXQw4kTT6YPQPCKxNbr51dgww",
  "key11": "2p8ritd3Adh3UeMAyvsFdnXNfw5DusU1XBY3tYjxtwWserKxaNK2o6ekbLWPC9HdYhKoYhx8KuVcNbeRKhJmjsf",
  "key12": "5ZFENF4FupAwyN8uqZgirNKxNX5L2obG1Gnkba7PsTTnHkfVRuWtPTFW9gyFUixbHr3J86DZXwHFEaD5E2vzySNH",
  "key13": "5NYzEFZThkqXJj7fsACKULU7A2NsV8q2t7Vcm7CB8twbSkqq4t2pQGUzZSyG1zdb1qjFnnYQsYgymqUBEd5UFvn1",
  "key14": "3XecjrwG8gQnefcNZnqnByW9HjgZU8DGFtiDCEWT2rLjbHDMAhkDY24xh7mV5LPmUmLALZtKL8ae5YxC4LpHdxkJ",
  "key15": "5WJPSoCa6FSYbpC7PicjvPojJUudxi1JcKySkicGK3P7C8WBeuiteJCvUBh8AUYChMqAxtTW9i5ZnBKjskHRTYh4",
  "key16": "3sVTd7r5ZYToTb37yJvCA3WKosi5mPE5n7vdQwe5yRxyqxRm2J6iBCNKigbAhV7272rfZoSUYntjmRGLzSM6AmDq",
  "key17": "XAKHPLLJ6mMbLZL7f5dpiPPHW7S7c1oH4F8Au1ntw3UXuctqmPpQBEzYp675vcxD4But79WHjVYs5VVFNgfS4Gt",
  "key18": "55DMKQ7h65Vzeyzvvnn3kDvzQFLTD5khLQ8FqfDz9etz4aZnpSiGHZmiLxjsscUiHFcx8opYcEfaAUHe6JiB4vSD",
  "key19": "2VX8h42pD9Z2CnNMMkcvT2J2FG47bnkzVC82LGDbKsXj7rx52B2phF8bCpjxRV7GLYvHEYorcFUA7RKXD6jP59Fq",
  "key20": "eBqAPX5F72NonTaxHVwmzSegqkvGd6yVctGuHzqgFJUug5Mh4JboJM2yqzYV3WwdPGFTF7XczXWjrkG2vyR6KK3",
  "key21": "5NS7kY8Gnr53kVqvGH2TD5PZGk2rVjAQ3yTqdjt7wL948Z6BXr3gifJ8Rhe3yCtRw61uPVbLHpKNcu2njdp9ADCQ",
  "key22": "67fSdYXWm1TtnatNXHsAUyJLGfYU3fGAKTAwXCK8cp4DVMEQTEj94GDfuqZGgnX47QWvA3UPuXFNAuKCfbCFx2fX",
  "key23": "Nzed1vcwcvtgsiFrzJwfortW1nPWeDf1dBXQeyY7f739S9ihnvvpKTCauchpqKVnNwLinYncGXTCCVu6ssAReZu",
  "key24": "2WJDJD1ms4U3UGXyFYxsoK1Xe7pm4X52GxmwrBHFmpS1URi1PQmPkLFzYdJqGJxX2eDFsTDDQseHi5sLCDRj9Zmr",
  "key25": "3rrsLTRHCdq9wgVypT52yXi9fevHEXXZoRxWB8e7dEq6Q9unFJXsVUmQgafAaDJSvAV67oGSFv6u2DGxPYa2dkNi",
  "key26": "4JhJR7p6v2nB1cPQKokoMtiRxqCdX7kw5T3GEaqJ8djisEmsdZib8z2HznqH5Gnzzx7AKaznyFsKLq7pwC4zs9LH",
  "key27": "5SgPqJ3StoNUGJmAPumy477fmJ6CtzVhJM3qnfLMSwEdS1hrTGg3BZ4vk9puyEZWYVcsSsknR2QWhrwWCRTtyCk3",
  "key28": "gShkcTx3RmLM9rqZqj1TSmRSUs8vzVJZVAYQCsUm2dk14sT4JzVoqqAZWCBehcKy6u3W99L9d7HJsMjNRdtVRKh",
  "key29": "24izQ6xjjSD8LuhengXo5kjGeeAJxQZgtGmG3jQuakPfzM2zZvrpvpHTCqWnBm2XUJFqvuEQYvpVq7KbvFFPJC52",
  "key30": "3FPs1hgszAk8LugDEv63chot6fiwEsAjserTAXyTwjtMfxMC43on6Gk8vn3vat8dQJyJ9SPfzy39m6EL7a5K1Ctj",
  "key31": "m9WmeSEQMChrX4UdkpPVe7e5b5LhfCPUa51SuX8bR5oAx3XiEuy92K6bLynhoiyZXnhW6wcpX9mzovsABVKnGWZ",
  "key32": "z2fFTBoN8gNvuDuTpWB4uYfwQK98FfwVJXtRCN7EB2wd3Y6Hi2BpeFYKsR35W3Kn5XV66foahfy2i86aX3GHWFC",
  "key33": "o9oBr1ufDpPc8eTDrRMeY9JxjQsaWUhwaHwcK83PNKC3XkaREhg3356KTD7rSqt8XtMQEiw9n5x6toDzZZE84Pe",
  "key34": "4U7JmpmL4Y6CfL5dk55gtA6YeEPi59kqptzmgeTi4zdTRWiDnddqXgKbhasoMm57bqvPKGKEJngEjJ4AjdEJkT1W",
  "key35": "jt7y1VRD6QiH8vBBsRoe6NYP2dhBzXypMxPf12EuaztqvtAosFTQ3XvP36gfBGfaTcqRwwnTkBLxri5PtwAmNsC",
  "key36": "NriAjzMZiEqCsSBUSfaCCaorEtw3kwDtAEhmrph1gxGfee4V9FFG4jGrx6y4EgGxXFPMPYpN5NmAq3MsXVZXLpc",
  "key37": "sckWaor7SsNYpNmc8aQk5kyR8nnq9xeGpkzhVur7JGBfrWFsn2XxNbzQsKkmqWbxyP7rvGEccEFhfniiKQfxek5",
  "key38": "55vyWh8p2xoPiaK8xJ3QK1aGbVrhLbfnCEofh6BDqgUwTssJruSiRaBrqwtmUg5HYRDFJVLHa4rabzqSZbT9C8Cx",
  "key39": "3aU2VbeHgdvKzpEgxCDGGv2v1J8YdzXXPyMiSXNGcshZr2dfHtQcoEZSZwk9iK9hxiE5FSenyHnH9VppcEMd6TXv",
  "key40": "afG4fDQ8hbew7RcE8V9CKVofebLDBSic6Gegk7FsLCV8RiTCnTJgV6ERwzYp5cDyH86ThCsKReorckdbwjRpF6W",
  "key41": "2wF5RWF15JX9Z9F51kFjbqerNPY4gyZP1YxoJtuFmScQSDL3KUuq6SfpjTyqGc1pi47FkCqxibK7kPCgzVbHcLjr",
  "key42": "3UDrMFxeaBuu12G8AfjGD4C2fRMK2DapcoHvyLgyiPadv5ZUboCBHV2ZwMXyRcJ3ErfyUaywaXPc9E48rfzsmKU2",
  "key43": "3wMC1kmLR1vTd2Q1B8BPgAJzQ35esa5AnvtWfV7bi7CSykkh866oVsq1xweRFLPJfdXuLhfXwW8iRXvFncWnS6PB",
  "key44": "5L2aDJ7iJ8ojJe68QTgySbn6moRj9i56e3yCVJeHnFQWRFsa99Kf4KkgcstWLv5LSQssuq7gE4dP7PvVgmmCXsSi",
  "key45": "23ZLbQoCUA3r5NZiKMyMUrfm3Mbyg39RoXUFAUwTYtGmaxF1aEk6VDLACEqpLuoHTPDbePJJFiAPo53sGGNWuwsY",
  "key46": "RqU21DJQLkJyndsrBj4jgkuxebZ6pwH4aG7Tk5aRssjxjx1kLEPKaXszTRwT9QwgeFwPbkS3bCUb97LF3nhk2pD",
  "key47": "CnjxTgZzHCx9chFhjTyVKAbbhTG53kvyQsojRX1uLDWYQkr8Rg6JmfSvtHo9GpgqA37caREbxni3YVZWeLGpCbF",
  "key48": "2MoySNYiGveyLZwJfpwMXWWhihTvv1pNqRw3gWivXRnP1pekj7VU9K5UcF6TGfga7894oAdR6LhXSKth6W8mg3s4"
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
