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
    "55CEQ7CswJHeF7pzj2oEo2zJywJFE8A1jv8LWez4YmKMD6TYNmLXy5Bxc3xj9JdEnfZRupwP4BZpgmUDCjYrrdUz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HPJXVKRXMziCA8c1w1BrkDuSzggJPNKCzEsvKKvFLxeT9cv6mEtBaHkCqVJdtY3nxYEPbpzfyd7rAzKVxtbkj4D",
  "key1": "3QUn1cimVFVWGWfchuCzujMyZE6cLTepSkJYU6mhwsn3C25FB4S8Hk9dn2dsq8FrQaioVVpDBGRPkCHwipPwHtab",
  "key2": "5Pa59KxnienFEM3a7CzMHBAbCeiFbUm6XYGY4NVPGkuGAeuqcp9m7YeQmAXYRi7tNqmicbJV7SJskFrLCePG7yRH",
  "key3": "2zpjmEwidLTGP2GHof3mrYtWFfWsGNzzmKSCJ3hQmZNahFsjxEy8eoVoRDo6U4VeNh7kRuVRhToiw9X5iKM55Bx7",
  "key4": "5GD42ARPW2URUmPzp6Ng2ab9gq851qUT4FKh5RYiMbAeSWm9CQ5p3f2c4E8ttC9iSv5JN3Tcu27tx2v6qEJcMCZC",
  "key5": "5bvR3vWGGUg8F2tS4kjdHoyxMRSVMyQt9MYAFWwNoHwB9kbzwYQNAXLZWbRAPqpkhZEW86oyJXYHuNaWsdfbqMQf",
  "key6": "4obAi8EEdL4tuMg8R84L6RKRjzXGRuk99vFj5jX9BcGwNbiLdXvDv2Zsfvi6Ko5ui2UKLtuDub1UVRhRHpcewccT",
  "key7": "3Q2qbjuM4ndjnqRB5nTeSm9rKjQi26u8AdMizjRGH4mvvdFoiCYEPeZehm5Q33E3KSeycDGxoqzcp1rA9rrSEwxF",
  "key8": "JvbsEX6uRoSJBGK7HjXBbbAka2QEvfZWhHZqcTjE3Z8YWH79uBnuc3zeHnyQVvhy9dZudpd8KeRaGZeNDAggPgd",
  "key9": "xm6o39bf2828HNaT6B6KBso2SfbosfmHgSmvFbacfsBLbfYxwn2f6TN1m4MCUfF2PyoePHVF5WgNvhj6APtbenZ",
  "key10": "2TD6o7NgoyB97PtyZ3G7eBmDdVFvBJFxPy19EhTcS3ZaNhFES4YVM2kvQkFfSjsVpHbPnMbFtu7Ct4PPEn17soGo",
  "key11": "4EZ7V8TRx8hPhWLYvswFEcFUiQHx5Tbxh6FwMii9FUPtp7C36WJJfkSbpTsnbCN7NT9exX3kh8saBBLvWVwxfgSY",
  "key12": "4SmdmaoDe8tKpQ9e3RuU3bdJpUv1wqZAziGAH6AAMpxsU8CGwZwt8qMvhGmjLNDnijX3g9UEyt6ShiKtWxenCyU8",
  "key13": "2iee9cimjaFqFHampvBVWGdWFkKsQFBR5SEQmoEzxQPkKatSC5uJu2hQVr9k5t8uNoMkdGPQXXYBqL7b9hc9iZpa",
  "key14": "2b1mTZfrvoJVKHGHCLm52bBT6HXiMuuit2hNjJ76ut2zua6CQqiHK11SFrMUBTa7ZD2uRQkAKPzAupGENF1omgpA",
  "key15": "33JZws8BEhfR8WWSeRWGsRb3pf6JP28EM1wrcpXMqMqwDuDu7trWAw353Q9nhb3iL84smdz1vj5SYumVAgtGdPAW",
  "key16": "on5Hxe8tsv7692fXZrpHLtrwnrQBxoEwbsv4soEUrFBULNmSTn1xNscnKDjwaMQK6A39TtXfUCcaSKATijQF9KE",
  "key17": "tfZS8dDJKFioAxzbrv8dMKh2kS2Q9iTrUFfKAMjp1ZG522tCiB49vLTkNfTLLpA71KNEwd65oCiWP9gHPVWUNud",
  "key18": "45fmHmsLbCbyUBaPdifyxumut5TZKhPVgd88w8jJoNo48ZqKhXisWrjVYkXmGm7X9sWovBfEHwk6nfghVRmaVhmc",
  "key19": "dLyLh91Pm4aYQGqKZZtd6sysRNzYxtY2BBJiRGAqkSm6vypPv4rpUNUetbM9X9xrqkbtWxUiSLyB7Lr9hRskdat",
  "key20": "2BSESBFSdKFXRRAcq31ZASkBvyabDKiBnSemLWvnVxFUer3oEzzAyQHhyZ8LRgd2sXsCe2C3gogNs62bmaypY2zZ",
  "key21": "3E3pfjCUY6E3oZUz4R7W4XqJRcYsvKbMSj5r6K8jmDZqUR7cXytvtR8qP6fk7feMy4ModNqEPmqwrVYo44NEEp8v",
  "key22": "5SDH8oXkwASNxtSkodcvu1ZBXcHRmPrQka5oTkLxYeX24974DxsjYaiG1q6473a8rDyba6jBz9U4jmExxNGfrpHR",
  "key23": "2AdXffRvys5mQgUo5Rz8fW41wFgEyfgUvkwbwHSynfqUD8s2Aj8VGApx2USfBgftw15YmyzEA9VdaMfoPSPUDYXx",
  "key24": "2vs5nxiQuJyQsAAKrNvAAtUCejT8Tr5kz87SpCU5duo8KWR8sLF5P2JH11cGhAkW7DC2Yjgi6rHaKoyEVYeaw2hR",
  "key25": "5APpTGPLDtosYWQyTRCb1K4NqSA7hAeyJY483G24pgshpmJdHNyoRB1DRaed9WvN2NFTTX7dZ1xafzmHQPh43jvc",
  "key26": "2vkCyGU4TvvM5hgNLvafnriNs8A7vJzYjeeftU9DSPH25bnUN3RC1YP3BwbScA6HwsVK6SCfwA7Yody1kkwME5Xm",
  "key27": "3ARKpx3Mmgk1he7b9X9vi4nsELNVZxcBPypmh4wMsj9qAEiu3Kc4dMdeaA3zyLTiaNjU5ZTkFGhb5MjMcEk95Tpf",
  "key28": "cPbdi13a8ddn6yR4Yno7WqYj2EJ4ouDSZrVk3EafN7Fv7MKpUfwrm2Nh5EwM4WMVTWGJowTnSJms2pDtCjLCeB1",
  "key29": "3eGUUvuFw79cp9ypEp2yLppw54Me8kzy7oEkaGC4qpv5YQYTyK65yVDrzmkQ7RyC9o1BYpKcy2k9n8H198q3fo3m",
  "key30": "BnmQGvEzzdBmsaWt8dsUEcwNsVvue46TLEaf996PbhT3j3n7Yo9r9A25pXLx1JQc9fhdqqxv5QcmnP2YzCVmuT6",
  "key31": "3qqbQyEayNQuf5CUeKH9pHA2VvoLQXjNwT2X2DRoEGCL71gDPBJJ2rdkWJktyfQYnAAEQr2BUFKU78bsVdVkLrjN",
  "key32": "Eft9YHuBUqGA8Zn4QoxbsbddGKTEaUWiBoBGQV3sZJoKq7yHH2vjQXR1nSFKttpBaJJbSz559KaQ9nJ1mpYm682",
  "key33": "4E3dq4hkwmREQdWJ918WCrWnTy2buoUoYN1do4y6iQTCeFNziKf5ofHygAExHqGHUQZxB7KpJyNj4UmgcvD4w2Jk",
  "key34": "3tkBVZi2zPi2z84jsY8H7uK33P98HRR6XcFFpsC9ySzeFw4NKqry7jtdsXm7Zrw9Y52m4NLr4US3AB5hHSXgxWb8",
  "key35": "3iQkSKjx2tHP8umX3aeMzKS5aFbYh2uGmoyusQRFarCjNa75Svyfq8ycfKSR9CnM8w4ak8qJG4czTDAGiMZ5oDgb",
  "key36": "uYj2CUhLdB37EuRA8oK3XRuAH1wkX3FPvdU34JyRnR5EHMRcY5ivPHed723XM4JuMAVp4f27P9PExgy8qCBHrZ3",
  "key37": "62JLXu58y1WY342PYSGx7Cn56n3ErVrALc8BzckfZHcGBAhzxeMhqncPwroZwKJEokacJUDypKZMHS7o6MUBp619",
  "key38": "658b3CY3kVddj6iAcJA1jeo6q1QngP7kmiwgW1tCK9EyitHy7xtujku7nayrPeQSDKiu4CqMz3rAW3HVPXMmMp6m",
  "key39": "31BLP2YRHiqXDYDhVdyFuPwcSNC6kFSPgDVQvwXds6uNoqB2dKrZ988H4kqVx4sRBynPsTeXK6yCauuXV8Dxv291",
  "key40": "59N8bzQBE93YWXJrMY8J8XeofMetEXkM4BsqX6DsK1zxNeptTrmicPGZsmiX9QRPQqUvuXWiBS3w9yrXQ7o1uAv1",
  "key41": "5CU1XYrBbayZk1g3Jkq8q6HuyiNSYCYxXVJXjNSwFnD65r1egagJwg7cz9icZXXT4mY6smdgASrGVquDfqGDo25r"
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
