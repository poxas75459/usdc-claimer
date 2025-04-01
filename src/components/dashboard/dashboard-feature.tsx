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
    "4xTo2GYfkM4zeAnFcJpqziqk3hRuGCzygm2YGeM7UydRZtrxZ72LNXRf8u2TikutZP1RcgvCwYmJYSBoMtr9xMfL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33F48hJ4mN6KMxMwEYGMFC5CiWsDqnKUHMKoB1msviRAmwfkvKcUZ7FSi8AdnTsgKnaBDgBEfpgqDyWhKFdy677G",
  "key1": "4jqqXr9GuqFEhM1ZM9SENYNaDHf4L9x3ngfZXeeiT5rY7UjRPUJPoYb39S7zCK7qSKTfMHfuRs9U4x1aTtRGJn9c",
  "key2": "5WEDfszViNUrrp54LxK3vhTsHa3vvxgurfRsnqCYghNQoi1MgYjp8CijiuN81APx8k6x13LdoCkxiaxa2Min5MTn",
  "key3": "x9MWspga4tCTrGB9mEdmMdfpYxqT5ANqyk65Rp6gBBHzL1Tw2NDWHv6ZNqzm71rDJpjBAH2i8CWhGSWDz29CfSG",
  "key4": "4s9BBvxpNoyqCbXzA8hUTB9ajyKjN7SpKkyv8ooJFULxrpF51rfgCirbKmnFdguu25G19C2uZzV7hArDuAhUfWFY",
  "key5": "4z6yywPwUedCc5QEZqbMjG6QaQBRZCvwjqRsu3f5xkmpNsmhHdNDFt6rWXZKg4r7UNxtgL9JwgtnxPXo7J5wXJW4",
  "key6": "4mudRqzJ9yyZyX3ZccbEaF946QQASjp2d9qiRd2ZLBmsNVJTynbaFqgsEu4npdu57LBnskbFDdjHtTiywUEBthFY",
  "key7": "5hAuxmt8dGQr3kmJwHTHnuKv3Fz7cLsj2U3mX5SRyG7DU1reSREuGN8Jyh3CvL7r8x1N2b7ss5zkEutUV6dYh82Z",
  "key8": "2KAVRwyH17fSRGvNkpidLuQjSmYMXTWNwwJuVwQUHrBxuDB12gVgrTvYyrdWBirKGZdZPFGiZsR6FDGTLJXK8YUf",
  "key9": "3qhwebKxAGCVLq9VzyhTuP8b1SNWYt4iwxv4J77XDWqTABRxC9naG9oBNVwTW7RaNBHNh5jjXGfibcP5vJKm3NFn",
  "key10": "Q3V8GqrZk7sJszVqdoBEWppUf6b2JJDZytfZSHUmxWitr1aBVbAbwHeWzJ3jfwgLJJkDhvFh4N2gCcWBWGNr69h",
  "key11": "2FbwgxAXJCUFxwHxVyipXoyCh23h7NcfoCDGdwayehCDCukmDgMJx1DnZqhrxqMdGDWfS2a9GGCa6s8EUeHGP6kt",
  "key12": "5WvDY9C7F1LPCGxn12bPxTgUp8Myv8htjXAEteafZb6oqJ8Gx2JPPH75vnWzJG11KJ7pmNSXS3RYxT96asoEVhiN",
  "key13": "f22ADddayerEbAXK1U3ekiNDk8RNhtcZv9DEoeFyR1dDqW7sxCKMj4yoLq3KApyZPd4UKq81ESi4zDtDJkraNJR",
  "key14": "5CWg1HnbcXQFChZQdd6vrGfTmVi7P1iNXhFcWrjy5W2w3yD4epR7fhjUwuDrAPpnhVfzFaVm6BhQYgs191cmKehU",
  "key15": "2TBDEQ1pFyex2TRRYJPjJzHhZLJawgauTXrD7pKwBwmuHVgCtFkXHgMbve5wj129TnY1Qi5Crw7cYGHSUiL868BR",
  "key16": "4mQKpj9eWZtAHj5RwsXXrhukAygb2WxhW2bWzvfEJYPYczRiPZx7WYepv9hhyCVjf7x2M4R7S5EYiJuAykU9ojZ8",
  "key17": "3BJsiMf3j3M3WscgPNvdRE1KYnERq8DRiLa3qTkfETDmk8KUycSAwdeKCvhPL149rdLvkv64kMxy1s4AsRLQZmu2",
  "key18": "3ZZvJAisu5jQLtPqUnh8AgE2LCwcviedGEk6TdjeQsSRazyATih2ZXPVpsLiq1Yf7ohqzMioRy6vuotg8bZAGEWR",
  "key19": "4rgWV94Aq5toVMZX1xHgsB9ZDseKg1dGuoYAMKK8Gyog5BKfqsVdGXHmyUxGDpCwdqyjnjqRmQsDvXoHSzjyNTPa",
  "key20": "2AceaFQBeaAsXWVBhSBXThQts3aFNJ36PeuAerSSE5jm6vSFL4BV1vS4Vk9UNM6S5CbxPcwQA9zpG2AmEDztNvDQ",
  "key21": "35aKB3sdeFALQLzvBy6fhtWzU9qFSBSDAwcGNPrWJF6qqJizXLMgn16M2TkWJ3pAvag8oyVvMu2bpWBqnrNqgNa3",
  "key22": "21A27rtg48fu7qjGEucoU2vU6pLCjTjdHScztSLhNJXLCRbKaXcgNLkEappstg1LQfA7qwkFJGN2n6w3rfDL6cEw",
  "key23": "cew6bEh6dAx7NUbTYpSmMQKKzj5D7pCT6AP2B8thAM3HjPtLdkffydzygnQuw9JQ8MkjsJLzpw3ENCjjYAnPLPS",
  "key24": "bD71v1h2cLvmCyHh1a3Cqw1Ln23MmDhhQ5s86Kir8gNrgJX75ujN8CSVXffbgtzjEKiCVW9w7hz6rGgiyApV4Nw",
  "key25": "2cm494BFy6gLn2NQQsi2AW9NUMhWm4ZYe7qqBfdFQRggu7C1jmczWApw6RwoZrjebcW4JHY5kVcryACu434EK7p8",
  "key26": "5q1Xiiz5Zn55UWJesfezqSrZRJW21XdLtzfNXAyuVcg8wzCyYng9VseknjjxKnCNxeeKGB7U3kAQRkVeR9scKAEG",
  "key27": "sBPpwwCcTpoZeHNmUqGx34hx8CmdThhKccMCaDEfgs77tBBLkss38XnJRHVHFCWnrXMDnDrbkRV9i3h8cL7HVV3",
  "key28": "43j64npoJYKbFNbJNRku32DM7oB8gCsmpXStWMHgJMteP4hntbkZZ6zvwUuKEPsE1nFDuDKNZU8iEVi1cw1CWzMm",
  "key29": "iAYBoJDHVyVwzgpWwNESQdXtwEk7vNfvZgDSnvpCUJt5KuQUaynQmRSSPVJkCciZd7kGfJd8zTAN6aZ2Ubkw16u",
  "key30": "5afqzVeFeBDdtABMNLACAkTRWxfmeUzMaogyzAK35Pdd3aepXQ4221ScmtACeTpDsboSQJgMXUAwLH9XZbLStgqD",
  "key31": "5AigBoFU35BZPTJo84etinueKPmdxENU4XruQctJ82SVe5xygiS3pF7MVoyZTDyZVQZh79xVGDEG4QUa1DPqrPpi",
  "key32": "w2tcNv2VpjTvtodKVmt9WcUaHASiQzLbYncrhtHt3s1C2NH9HBRiuM6LnSrnRKrX8DdYs764r6sv358wH9mRvzF",
  "key33": "5qYTHMMFEhozXTUpW6yM2UiU8piSmAVtx9pNtCoaj4pkbEnKzswU9yDHBZ9WcFbHk76ACKUWn3T2g1RwrqMhEgAL",
  "key34": "aSztMjA5Us51hxwomog2E398jWS6EDf2fDjBLjRPudyRnfCQfdr8z7vqLmHooew48jrwzyVj7DsfsZxW4vqcLMd"
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
