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
    "bk64HJB18pVtzH9KRzXrgKcvMj3FnXoFy6S6E7F6xEES7CzN6qejiguGXVRzodaoJ5heiA1hqTS7aWmuAfPBPY6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5neXL3uSjpwEnSGyBNCvubfN9jFnJwMAa6ooh9hAEZdTQHH66fsmBbccZLQ2L5x75rRHufcfPrQyTJkhHVgk7gmW",
  "key1": "4BZNS19zraJPvFdu2KT4Ha2CGoYg62enPqqr5J1jtW5BkYZiox9YvCNyZH4oVMR4CoeUkWiPN2CTyar756Qjca5x",
  "key2": "4arQqqcdiyMHV4kJfjZBtcJAw7HZJzi9NLpn73jr6KbWvMVMFybNMKKQE4aFjBPR1mDDPAxEmgjqVUJUawWAaVeZ",
  "key3": "4ctoN98LAGB7b2CPzwJkgBn6REdFFJ8Ntf5sBipBqhBtLTRzFdiGj9msM2vtZirCSpn8n9NXT7QSFyHLxycsGtUW",
  "key4": "5wuyGCuU4ARC46eDcFALj1iS7oNr5HDTgBoPZp2JgeBG9kQM7zn9ggPYLu6NSeV3YucsrE1NVun1oxyYRcSWZNhA",
  "key5": "omE8Zt1b8n5FATNehdcwR9C1Toz5uwdSar2yTyKNEqFGpnp6o9w7tuC5YGG93LTWK74ttRL8jvJVSnUBYRtkHUo",
  "key6": "64Ne5wZzV8NYpEVam9VveYTbk2vtTzc8vYLMEhcGKidi1tFiRT73VTVDsHxYjtfgMSUpFaBUoGbTKNHdZBGccmBG",
  "key7": "2jV21Et3w7CcYzKVGVE8zPQuJAX2P54ZRzyoJ71eBYRo2YQ7mBKg1XGt3EswZ8ySX51mC1wzkmpBUVouYk8hRRRn",
  "key8": "EyGtqEhWpnoMKzmmzb6Lrhzx9TLwcVmXAG7WzVfTFeJjGspb4BWZRe8nRQeHSsChWZBaeC7dpPJGAeXd35cHQZT",
  "key9": "3qYjKT8PgVps2qn48DKnN2m4KWaaakF2p1rpjJXPgQPZeN8fVWEjYfM9vvcfqKwJcDr3pmSBY26sLPQvhBC8o9Ue",
  "key10": "27J9FsfuPaC3NW9kEfuMt35CmYJMp6FJB6UkX9JDG5sgMz8fQmtUrGWokBGokzhdaMYyoDqTkkwHaZCCvAzzKfzy",
  "key11": "3tZD1dbwMjtR7cgr2Z5MqYxRdGoz1iFGKRpErVzApEQUVEFxT9A91zhNou8AdApi2RzNU68HBm7ge8k5arFhMDAP",
  "key12": "2yp6B2KRqpVSsSuyQudDx9tByd435LBu1BQSNTjXgFe8guMJUWRwhCMBigq2cRkQaZS2e3C1MkkXcFvynLPk2VrD",
  "key13": "4yHNA5yYBwiDrdELKCCR9E2DStqmNiD5ptrtMUNGu15ry4PWjuVbwoX5Eeb8pDdm36UE6HBEUaNqXFZ5zW7rMnRJ",
  "key14": "i5YZ9Hwh1d7pnvyJLYBrSae2oY5NmE85dvCGUu1rNB1AjoAk8GsaWw72m9CtwPKK9rYgsJZ97DrkXpM9NYujCS6",
  "key15": "4cGHyeczvNGwM7TuXjGj2gS5MjPJCwmVzRcB2XeELydXuVFMRDHbRgBoHQiALuTwf6zeDoj5whPVXAZRTLeBbJy7",
  "key16": "3LMD1H7EbBqvv7sdL959Z6kSiuGuU4QPqBzRKPsnrVWaFZchsAj46Rsnw2edx7xazi9PSUsjF9JUwtWF7mtLoYPM",
  "key17": "4F6RrjLkbKZyRV45frfp3uWDKU3TDwuwAr6bFLxN6BUn4PfYJvXtB7unMcJjJRRGaYT5pQ3HYKcB5n6dm5ukYsC8",
  "key18": "YqMMifZNoW9kJnCA7BNnEvrd338QxuuZKhWaKCCJpHPhaod8LpeyBg2UMXxuDMrCFK6hRekHEVYzD4CNuLHWXhq",
  "key19": "3LpcvHKHmwpCnJuJ698JGFWkCbzw2CTy9t3sey1ot6ciyqX3zJcvM6ZBaLRMNEqn2upGYeL1JuV1jZsfR24VDsYW",
  "key20": "2zoc7abp8wHYq8BtW2ujXKvFrBfxzPF1RJCjEqkMKU1RSNCYQrqkVGLrLNzFRt16wiR5rV9RyrqM73eGaWEBr5og",
  "key21": "5pJ7gFwnWBzFeNSJFzuQx5wjgB62nHPuvckr6KJoSGhTBcuwLxpWyuxPweR3hfM87taV3P7icKxqs4EaGgQroEVp",
  "key22": "4vdqayWWC9bQtyXLNjDXS7t9vYp7YZxYrfHmHrq4RafKG5S4ZkTyz52XvV1AfKPC5r1PxCj4SEqeSa4pHAwfWfoo",
  "key23": "vS1EgdAjwH57B7N5a9H7FzuHivH3e4PirAQvMnbAVdoLpwov9wsgAVY78CPp1RqppwE84yzc6qJJcZVmMiGPegf",
  "key24": "2QQzVgdK4wQfdmK7B4TUzv8ybgy4fvUZMmJM6V4cNAeRifGot8hDpFhMYvdpn8tw6E3TSiWQB25cdgRaPeyMLTYz",
  "key25": "3HkP3PsuA7uXuBYR8mWrihY84obFH1EVsBCTHyHJqbbzEEhMFksN67UYFygRqPfNxvYrpLtPbCZQ9vKJhwpvmE2P",
  "key26": "zzDjuDmBEbuTW3Ygj8qrNzHxd839HMDmLHEPw3vFJ9Ukfc4F5ZaXdAE9eA1p1zZPsP7jarXpvGaXbBCuWLJoMXg",
  "key27": "uxLkGDVQkkc6AHMF6nXDZ8q4b18xF8Y4ESGmWFF3isJovYq5PYJtnq28RpkiE226tZiAQfD8MCiegvPPL7se2dq",
  "key28": "xT37cSR7K7spkfKEWHMevCGWMn3QW8rgqSMKJXZpwtitbjDVNv1CmGtCrmYKYEgru3kRcxxBWtgkQmVWEjBoyq8",
  "key29": "5mm2YngWfYcWnXY8cYKU6xq9idZudxQ9PoNuUqHxKy6jbecfDubbscmtQpL4ZTLGF1DXbC5Lnw149pHwWk58vhUK",
  "key30": "4iGNxwa3ps5jgxF8JyiDP84xdMa6kGrTAZ6mqyKj8NE41UtB4tW9mNvaeLFDYkACBRsn3yyCYpTeMm3BWweHiHpo",
  "key31": "LWgjXWtAei4QgUR6ErVCzQdKbDL2i5zmpQ8Qkxnpe6PCwSfXdg1oy1wM6ehcT95MoN7LVFxt5iy7P8Wsyv5z7Hu",
  "key32": "449LDXo1zSEosJn3sU6ymxZ2cf7dRhcHnTcvwQwfTrHn96NZvHeaFiDKsSjcAn5RQiMvwBsAEcPrrK3vgbAdpy9U",
  "key33": "4BNYwoKJFx294fERH1RFCZqQyzBSw7zo3s42BpLZHujCN34184bcjxU1gcfYeYt9kUMp4RTQ7xjKfn8Zb82EWyQ1",
  "key34": "3jMe3dfSJ8tTvRNnBSHUDyGGhiqk2mt6qKd5RdYfSNonw1nxQ5aa3RBpwtvfJnTPjD6xy9mqJPBVDQXCCBziNJV7",
  "key35": "iC4REzDRvPfwMNHBT2kodCEVEfH22bgVsRuDW3EAHNQb9ZxsvGu17NNKKuV3HHNWFJr2nqhwLT4Deg3xK2AbpbS",
  "key36": "nPDNzAsy2GXWnYYHvR8BjYF1unXZHjTLeyVLQbPsZS4iGCs74yNGpRzzakL47GaQGZvCqBr8rkRJaG1fYSVDfqG",
  "key37": "5eLkXFgoia1mRF5CLxDnUGYbV3bRgqWXdWio2DbySA1QkbJQFmJkZE4dFRDVzXwJApLJn7j8ST1GWTQ93Np5amoG",
  "key38": "4wHz9ZVgoZEPygBuUezgL7xhV9H2deQXN6WYqYKEoqyMFAiit7VruSLKmUPmSczt83bEBresGWqJmNf7vzYx6xyY",
  "key39": "hLsom5BakTPiXjFMhioTKn5H3ZZzz1MMyJZfQhq6JZAteNZNVYsyXhTLYEf52t27awXySpoEGjCNg34qRxjZcdD",
  "key40": "4i9tQ77wsf4ssTW6qvEfv25u4TqEkG1eaF2LK2tciwtbfgeUAUZzG7GZq1gcrNgM5Dg89DbtzDaqLA3J8puBBshS",
  "key41": "4Fo2W2xWhtU3MgYaARXi4oCSZR3rMQeWNDTrD22gEjKCXa1wHiy1RgUH7JbKhHDcgangEM9KuKsmFkV6wZSUXRQk",
  "key42": "tWrjfZJpWwdFR9Wr1DaNCXSEz9wEKdXKhuAX9bYwkxdyt74YJVTNyUuYDa9vVGo5WmQmu7UDjgQkuHjbC7Vkq4H",
  "key43": "3N59DhStQfVL6kRuj4HV9fkWN5hLy2s5b3TzCRnejR5Qyt8eVqEc12ZoGAM5qurPXbE2EUJNar7ENFJKNnFnMm4f",
  "key44": "2Ba3SdCPVs613Px3Z6YskmsLfiRmcLQBUkP3Gh7cxEV7zErMTSDT9Kq1P9e7ditjZ661R1GAiKeAmjjme15uVSot",
  "key45": "4b8XCWpPptnukqSa6pH1XbutkADmvzLUP1HQBdFQMiHicq9QQwpnSbLWyQPgPM9Vh78Qhvat5rn4UVJB3j73LCiV"
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
