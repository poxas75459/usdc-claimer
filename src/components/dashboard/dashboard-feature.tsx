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
    "ETEkER5XYyEavYbS3rrQGZuHCtT1GsSMrmLshzVxMMJFnKS8UY87AoZqj5K3F9yeQQrnyyDZRJ1AQKiUFVhQe1u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vKFm979ep9VZxgeEJN2maz9wqhNxrh7DKL1qFyH67QWjGyPEEZ5N636SkcmxM1afMTyCRPgpdpxoQZZcux72B8R",
  "key1": "2zg9HaPZDe9fiBgBoDgJbaDvTfqre6m7i3z7TGc3b9AtzNTvQJjKKgrrHxb1LKr3whLU8kVFNXSDMF81Tvtg3Vwn",
  "key2": "W5qBir5MMitmkTJNr9CjhRGjNNezE68As3WHuyMDweojhyywndH4dkrPZh4Qpa61rMkxafVRyN2F3r957kAgLcW",
  "key3": "4kXGXhEfbhgbh2EbkZZ8TfD6gsXh1V2eHqoM3y4gymTDAnYczTY7rkfJCkzbkaiAezkUdMD1zrLGoP1ZoC2KkvBR",
  "key4": "4c3xLpLz2AjPvA1KDz9xWBuTy1ux6sAyyWkg6hEJzAGr589nsyB1N3VwgLnjc8Bg1tij21o8zpbFe6diMEZAteyQ",
  "key5": "BuMoiXpKKHbj1n2cA8u8ZNeFJAM7NySom3SAz2E79hSVQPfr9v1dwmkunWPrMfYvDTYkY7zndkknupshrcV25sc",
  "key6": "zsXRwxrMxwiZioXahk3kXKxcAyApG3DL5VAeV8afXMG3pcQ992hfwmnbDHzxMLUqwqWHr3gcJHW4huDKArEowX5",
  "key7": "67Wys4G75pMoHByTE6nHYfkWpXwixSeHXcAGZYBmxvpe4N9qKrHi5FSEm2YXjtpZT38ZWsTa71rhveSK7Xs6nFUn",
  "key8": "3LeVc3zQAABJ5Q8HoZ6jHoXKS4TguEDSYD1yrWsAroVFHNzpgbjjS1QKNynPVdP5ffJeeYFywbx4R88LNqA3qduL",
  "key9": "otQVFwz5MNB6xyAz5pkdSuHkQktTuM7u99smaSNmshP7WuXJKm68tDAGwoYwr6sxsCXtUydwAJ7CWiYvxvS1wfB",
  "key10": "67QSEBXgjA2DtrpZQopP4KVVUDuGh5jW88ZvshWg9TSYuR8DkVLxVkj6B6ARtCHJA55smUhZnhMk5wnh1JXr55Zb",
  "key11": "51XNB5YJMezNuFfWeWPat1Vk4o8GxeUgobw7Wiecg9dggfZrcgUAH6BWGY9JHe3HVcufYz6yNr76w98rbj3P1qWV",
  "key12": "5kFeeCDuo2mQ81j5JpGf766VYUsLLGtNozBiT2SnNuugxmG48Ce6ZFq1WzgbA1gFrvkUTLh5ow51A4hGa2QVHZhB",
  "key13": "5aYkvf2K4Nt9B9mURKymE2cakPjGjA3XPt8559G7neUaMUzPsGK5y8sGSjfghxBZoiU6Wdox3f1W2ZBsqv9bXYCC",
  "key14": "3NbrYuoJkUVrk5LvvF2gthRq694RYnH7wGDM34cmNcQmyp5oJ6US8bCgFaXrxceF1bBsbT6ZmnbiHzgYvHcU46HU",
  "key15": "4rCNQf6bHdiLKdm6t699tCrE6z8JAcFBBmFENwD8o56vM9CKYzL8386As11Sis5317csvdEoZ1tXQKfP7jtsz7PC",
  "key16": "2ixQhTf7ZXSsUJqkBDnaf4hTNQhGqJRZP9mzyATXvh2SWgjePua55u1UtCwi5SgejfD1gzQnNSqq7h8dHJjZ5AEK",
  "key17": "AMfm6twF4HnALHsziAW4yA3UoRJYrzwiJ7aS17oYJw9A96yBwJ7nSPN698kgMFwhdszD1xM4qD9PjcbBvTB1FkH",
  "key18": "2WWyp8xbAgShF3fvymF8G4SDwxBa3v2tpHnVxHxuyredeJuGStKCsCWBeym1eSVFDuJGdXp88Mr59B7iyPf9a9V4",
  "key19": "5VuoJCBHxvGVYFhdbqU3as74NWyA8z75UZMwr6mGXayjTehjfni9LzZ4AgDkvjnH2iGqdCaLurJ3frWPaAUzunEn",
  "key20": "2i69LgJqqBzS6xt8UnvUEDHPy7DZ5wcdPraZnxQTvyJyTMVWgJ1VUR43vUFkSMtvuQzqDquc9rFKgqYPdij6EsKY",
  "key21": "4ii9koKV6MLreU6EamvQ8HTJGdBb2KvxJE7PByAMzTXQfTi3svVPKoxBzAGt8DuSPWvxTtSYyLsV5o7xp3NP8P6i",
  "key22": "4jFdVkdEomMmH65kxb8UvAW66mCis8LtA4mhPEKqjY8w2bcUfVFhFzeUYjx1SsfXiJASGYcoYHUvKxyVduppXd3n",
  "key23": "4f236LhiR1UtiMPkaWqXMTWjnW9LBgrcpvfWEoHc8NZMuWUGHZtxS14hEJJf1bMd91jiomjBoPXXyNqCMoykS97o",
  "key24": "2TeD43FTyUv5GHBbKEUT3T72hvyrxsKjq9nbzRUYpg1iq6Ww5fpgUH3DXtVJHK639CSwdYs82Kas99oWUwULaWPi",
  "key25": "hEhpVgavbdeP7A37ZGFE1rMuWP2gNRaujapdXmenRF7abYH8KuHMRT2V8v5NzVPrJtG3ESgtGs6XPQWJVmFZbc9",
  "key26": "GJJAHiHtSUGyhNvd7CyTnfsPtTekyQYhWXDe93YAatSS4teVQ9nvCmXC2sv6SbKdjwfaqjZqvZo1SemkJE8nQVz",
  "key27": "3i3BdztBAr3RVAZznKEshZKJrjMWja9BhmaZUeF3YkAtgW1ug2CZ2xHrvCXdGWnojEzp3HYgnKFaDf3dCicyBWgf",
  "key28": "4MJMVD325h5vEvg2oUpkdUmQ5CToriyJeWXfS85Z6Q2kJECsotgEYDyL8MdVu3bKTLJQMNxefh9rFh3W9yHwwjsb",
  "key29": "54m7ih4Agumw81SaNSLcWHjzFZ5FnFhCBfDTaBn2i8ELmGmUpBLqTxwvRKcuJg8J1BUtzN8wfv6w8cwRXaLZeDDm",
  "key30": "25jCmi8eZhEcEbCEP4MYmwPPei4nTv55QoCJP35GcZznL5hM27dgxGaBku869xwttafXSBuH1CQ3WgpDbRYYqeVo",
  "key31": "AVF2sgkP8KThvZi6PD6Xdr5byxLRsw7uJBDyyWpCTGDhacrV8e76od6tYz2Y5vnK6ATuxreifq2Liu9XoAMuJ7a",
  "key32": "3cFT7JuKsifryaTJ4x4bpFaQKuGVyDrtQF5tGFCrhHgfPFDMsRaPXbPLUusK2UejtAW8bv2iZ8hACPMxc7Jx45A9",
  "key33": "4mm5VjQisS1wyaGhKwSgi1pmN6wr4QQWafgSa8Mw1YDr11jqN3TNrRPZinRTRfMYAy19MY16gj2DzJ5s67d1WpXN",
  "key34": "un9vmMY4evnc5qFHGJm9ENSVrv9tQ9Az6NxBuCWaE1b2QGviWezoZ7Ngh3sL6vXophgua8L4o8Cz6R4a66CMCBY",
  "key35": "3iyGb2gZo7gVXxQTbzXKpA6HTC5t3vjzroLfK9R4hivdkQ2VvKeUQmHBf7o9bt5FCM3HHjxZHKkq2uFgEZpAigsa",
  "key36": "4R1mc9hKh9XzCdWWNyzrbvGxF2cu2r84xyueHYkVesU2nNBVaDYYL5TWJbKSMYiHULaLjzakygW2Bd4gALJJMFDp",
  "key37": "465F8PpKnPYCJMQa1NcbEMXW7gWnuo46u4CyoPqJ5YCwHiaTrudM2uavMxnCFfwyit2kHMpPuDTTfHBgoiQppsVm",
  "key38": "585GGdWwfEkpSKBTnYES67iX225p8Ado8RYF9MPsqKfEBUdQheyq9oKEndSN5S7aTXkPN4QeQV3sc1SjqocXP5tA",
  "key39": "247Zk4BweHxqut3tTrZLd4Vcq8KkYuP7pe8fgdXLLyctbNShCuZYdVSp6sUWQZ9zE31na2QQBrtkQbJnHikMQRFL",
  "key40": "4XLypfLd6JoZgppk8weETCkNyBNg4z87uWK2PADNrRjRgyFyZuqFbHYJmum27cQRumL73cFGxx3oZGoVpBQUojM2",
  "key41": "62e6nU7fyoRwFymQeen55RiQhhpkkpdmpYY8YbUVGGv8j8LJXQjXh1WsJBiyPhEezTzyNMkWozP9qGkm3LTUcw3S",
  "key42": "5ohaKSUcJpdyjDs6BHckqh13yn6t6M4UAAb3pVM842UYb6HAKnMBPXY3zosS3otvYqLhbKsUjxf9LFAUkPHoky2P"
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
