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
    "5MxYQb4s6T8RjwfF2N86AjgmKPvQDHLEP2zgiDSn6gKDKiee2HbJmWswtAYFcMJ3D7vSPCxuHBAqDoBA34BEgr51"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c51RAygETu4sRpMTh3hyLctgcUSFm8FJHtP3v4DnpvkvYVnPSQ4NkXEwem78KZdbmheKWcPG6HuWGL23TCRt6zw",
  "key1": "3XQ8o7us9bdDBcLakYyqBYogXDHjudKjuo5FaGjjBHaSDpXyxFZpgcAkNLZzuH4h1SiiZwef1mSnwTiiapn3FUje",
  "key2": "GCUhJhQTzMgBdo8L3sUoaeKzYPKqWYh4itu8dKbwxCXM753HaeG4gM42KNekCpddegNa8aQHHAdRhgZMHdMwfZV",
  "key3": "31E46xKAiWLjtTvhez4raB3KsCYYaYdj3z7thWTMDzfcvecAjsvAvMAM4nhpHQr45cekUPZv8cFAAJPU4YsbDsTv",
  "key4": "kfdvgVSTmAmXiiydkCjhL7MKYyRubKLE1JXo5pKwyYyEohz3kHWjbebQh36hkX2hoeJraR2KWzXgn9bm6s1Sww7",
  "key5": "2p3ssVwMu7c6LdvL6et5RyPNmXKd916dU93Ty5NPQSRPVRFoMRpiXZdkN8DmdCt7D8FWvvtdeGP12pF92mUyWRC2",
  "key6": "4ivbQebBSrUt49gk16GRch9tuhZ4Ps8CFc65ktmV8qdXaQnNYxZkFpJk37bhxTzjRSVykV8ypX39ezVbsT1Ab7zc",
  "key7": "5PJjp9AVUPE5WxSzQCZQp6WZwx2HnzYsAqCjx2r5nxW1B7WyUgMdJPgCdCvcs4aD3qGHt9w7GQHaH64oq6uwu8MB",
  "key8": "5FUTp7KSyKVQQPsFqyxQPSMUjM6zbxByjEj66AJc1dc4LWhrcJZ14prFZSvK5QDTb8Tv1CboVDMVSC8JHDv7R5xf",
  "key9": "5H3MBTAKJVbzPzRdvCibtmWxibuHkNG8DFACnobU5oXNWNN3URAPiacr8pxLHAymqdnHuRQmimsVuBmwGWdzN7YD",
  "key10": "4G5TRwqoWfi2TNDq1a1mDgEsHVK9mXUrC1dWvkZYf3HKUJHBKpyiHbrAfcGQrxHg4e8NUXs1v4niJcHmoNKruosE",
  "key11": "4hNFUEjM9E5HqYZneuuhCy7s5pcbccY4WViUAhRiQNyvcd6J43NNtpRt42BWeZSHPRftHj1tadhv3RVinGiLsmMW",
  "key12": "2fVkHJ4wYkYFwGUP5VUiJb4QhjWu8fx4xCuQWM1kNagqJhoKTHZML5zLzL4uWBPckYYq4Jp6uwdvCyBTRxeWdPMo",
  "key13": "3QPrgEHq2QoaG4po7x2ofQ5RRoPS4H7jFjF8GzQ52BLFUQa7J5X8AbNQYU3mk7NXEcXaQF6KewLHfbirX87rYq7T",
  "key14": "2vu88ALgXL1Q17dub2yoSzvZvLTN1A7BhH9DjRk5csNEFQSfP8t1QyeP3urzpav29xh2ntBbHsiiP2qzUAB3wgCW",
  "key15": "2caqtjtTmYbwvZK8rDsAH2wTcVxUrqiGotdwFxexv1bxZW9sRvP7krfzYaeb8TUhdv2WoHafQTgzAbX7ZXsazHH7",
  "key16": "5pnvTsyALUsKoLsuELrAZnC7JYEfPfwudjHEEqXnxzjiy5Tag9z1Qyp5qaCDet4GyT3Dd8n2wFgjhUQqmJMbPgZo",
  "key17": "3pfaXfhbBJHwBdRsRe64Mso8NXkXAt6LvMnDYDDUdtjWwjstUhMcdBGmq6gDuWS6wAAGFu82zjRBJ8G6jR3vx6Xp",
  "key18": "ZRpFZ8YEmNWkn3P1c9FK1ECKbkMuQzGNyB9SbLQBfBmo3piwFacfgJ3K9JmucVopYWPPm6GHu1Y5ZD28YzTofTe",
  "key19": "PoH2ta8J1xrHzJShzeYM9SWmxDnqChHqkSKjUh3NSpL1squg4SLvyyKmSSjLZkJY3UTwXYi5zkN3H6yFi2mD9vm",
  "key20": "5duJXnwcRXADAiLbkSA77ZeGVnGCuhZHkShCMPbFz16Fzw2AmWgwdbuknHHiKLjtY7fgw5xekN5DcyoNyYAcP8xo",
  "key21": "2SzBiAKtmCPcsx2Gavv5Rxt5U3pwVwzzoLEsWWE5R2EVs6BQKZ59tgqw5j9UVQCu4xDh8nrBoeJ8CuB2AVAxCWUP",
  "key22": "3mXhjbymTG6rT4y4uRrtWgQxHTnNNo2kEUqhDNPfu8risGHMzwCgenXTqqtQBwhz5iTaZG1A1EypDCRy1WTa6B93",
  "key23": "3C78mjgucyRaQmrtxbJikiXnfWfSB9XjChre93NzVfGAvxmvZk6PBBZ7HmnRnrwc7tVNytmMCgNc1ayPNgieMTjV",
  "key24": "4YcLkXuGkjJpXinnNqmkqEFSwAXKzUH6ZPJHpqXs8zWzoSbxcFkjMBwNAvUTBRTCZzRapcfqh9zJhFqH5NF3p6tD",
  "key25": "3oX6oFCaGBkxB44DmHU2qPYJwY3JeA9bJbJ8wm1LXQDzGMN43CJsHwJCpzJ3WoAsSzuHBLGJavsk7Xy78JWnzHRr",
  "key26": "4aPBNaTs2mrFgQ6FfE4wMrH8ZBoHEPmWEATWr6MkhyHakhwsUJ4ZNE7mqs6hQuazg9vbKcPq7DjSPWK3KyTob4YJ",
  "key27": "MhsQh5NdF1Se28C55Qyi4gn5AdJ1i3wtpDR6LPyXHzHNVqAb2Pj32cEFVqtpVP5yJFnfRthzWUFYHE6QZx9TfDK",
  "key28": "28jWWHLVYYk8uGqix2S5VQYJRmDzXuXH6WwQaCFN6j2F2a7BqzRdjp13QCah6TEi6MQ3sN8srHm5ZX9J5eL4yEe4"
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
