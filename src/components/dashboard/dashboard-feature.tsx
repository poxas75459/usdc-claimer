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
    "5WBRhK81queMCd8pJP8d3tJFVgHDgJZBLeNPFt6NMpxFAGZnxcyHD7gEsUir73FHC9EDYCCpXhV5CQXcuad2qtuh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QihtgD9veknSLarJmE4qR7S6C7EtofpVH5wJkwuzcMSnorrHJztybK4isvnh5MxURFjey2uWJDsUcgwSQTCwNw7",
  "key1": "CjXJaB1tTsmNv9FekUq8oZbRwRQmbi8jswzMxDPcweiGSrA7WR2PRt8GiicZ1odk4GVWfDrP2kUFtDnmYzeYjjG",
  "key2": "2fK24SPaaZPt87PwRd3cnFSNHRZXb6pi1roLAyNqUc5br4xo4iya5XNPjsAFbJNF88wLSFHC3G6qu9xethH6u7vF",
  "key3": "4B3mzPubtwJ4PSbyVZxpr3DZAarpUYz81vN3TADNqfLfmS4pUM7j5pzvYokeNGFx3WZqTJAdBUYNABuehMgYuxyr",
  "key4": "2Ze7KTBBWHpLxGDG7SMDVE8GMj8U11KpAJvPnrMEa28JaWcqrMi5ufLahpRYcoCFCNk685LyUAoKVyiLmyfySAPb",
  "key5": "2kTdYL8kPgS7Go9DF1KTvxtka1zrEJhB1iUcxsvrCHTdVVVsrkeA5fMSbyppDLGzSDEZr1y5FVXqqWVcVrfM6329",
  "key6": "5335fZg8qhGY2QbeBnYFLWHYaaeegwmiWFVbMeVxRENkwXMwuykzAYgCfPLwxoSgSaQBcGhvRnJgj9pkxrUYBTgC",
  "key7": "ruoRR6LCtateZs82SjjanB9pRtUhJ546Z22gJtVxVzbzmvrAC6Urq4zGSemA9xxG3jcNGQdiHRQncKzyGGFEZoK",
  "key8": "D5kfiXHnS9yFkoWQrV2w35H73xybuXtqJjjWnf5GaT5NbyRp48Uo1PwaQADt7prrtKn5LAidkJy7SBoWXu4r69V",
  "key9": "39tuUWrf7WZjLsmtyHMCVNqwVnRVNpRP9C1tLWMa8EgsaFuZnzu3CA9wncARWTKzVUqir6qscDc8iebeciuw733X",
  "key10": "2ZwHxFsm7cm7TQf14ubMTEEycwSR4NGeoxS37qXYHDMAiHofa7QqWEmoEcuf2dcyUJ11jZuJZzm6szL6xrUCutfG",
  "key11": "3YCsp38gTC6f8qWksgwAP2ypVuiXn48Er3HMZ79hh5vdcTpjQ69c3ncwakBXREfq4xcNZP8fYUg6MrYJaR1nJUmM",
  "key12": "66E4WRLT7JmXLB4fkRsAnVGf4mFD68bRRen1bGG1jDkBJrg8mNP9wXpCC481aGDhAa25u3bJvTM6jxaZn1mALZxP",
  "key13": "5ZycURAM7PQwhzYvgc79Xpqh49xnVtzQuGG1cpVRynsUhHpTcaEJCUjNGzd8nDHd7h1AxgNb2Bd6uQ95H62kDf8G",
  "key14": "5Mzd7Qw5CmqzAjmbgfhBm7JxrG3WWL5Bn4WY57EoKhGbwv1zvqJr1gVWAVJbsHoyK8AWriLg1EpPWnsEBpDCqp2P",
  "key15": "3V3ZMqMy1aHtPAKMxxM4KYaUN7u4sh1kFxecBeBjfsdeYqjc8kuJ2mHWCsdddTFWzUcPRAUf1TnkcPCsLBBvqkMT",
  "key16": "5yt3J98JrqEsEHAKR8JKp75wrabhJmakU6ohxx8Bvh2qo1rqpWH5Dfny7v7ckUSisgUxd2QP2kGG41VLNqxW397",
  "key17": "4NWpBXQeq1ng8492Z7eeYifXnzK8hw5Bb462c4psPGKFSNNQXKr2drGtu5ziYHrDRZcD5HAVYWud5s3t6vAJ2zr6",
  "key18": "29emxVnLgVda1piaq3F1hSCJ5mcgNr3N8Eh8D6VMjHMNqVH8RRegkXegMVFmvxY1L9sPUHE5SFgUUfeJ3nd5DsQ8",
  "key19": "3Gc78XTMcvVGnHzJz7Ng8NFMy1iMW4NiSLCJvXpEpBnRBcxj8BZ5DP6Ej65k9QaATohZdR7yxdEmadDwmBhx9os4",
  "key20": "3UFR2J1ZhAVtSih9eopr8EMGo6hoNShLpaRSqe56e3hQTmicyTJba6RCnZfSBSa9STfFUzbhmwfWZmbWh7DK6xB3",
  "key21": "4JGnmAyHViFeoDrQyezcZbcznT9iGKXZALdqank9WoUT2AW4LuMhobBMftr6uwp4TpisE4jR5SeZbyUd3uiwZXxM",
  "key22": "V2hP7zb2Y1pj3aexQjNoZzrqgz1GQQ6EZYsUKpi7x33r3jUvRQKvkFGNDaYvsudU9BxaqpXASX4ViZ1be5c7dJ7",
  "key23": "3w5ceGHMWgKSW33A7pSkfjnmy8b5GbG52pzKAX6bnqwJAPZm7uZQybzKELbuc1u3LAB7Fd5fa3DepmF6FiC1ij8Y",
  "key24": "2TxCFq3gKd21mpjZw8MeNuyQtZ6NynLRn4cVdKeqEwRz7pHP2E6WjkpzFREzuxzXXn1TBXm9jkTGnsZ5CnNXoT4t",
  "key25": "3FWut4HSgL3w36dxiEMyKsBQwhbF5x2YFgSoB46QFihJMk99n2ztQPhKotfMcbW2o1VtS1uhV9xPqJphxoShLu1t",
  "key26": "61abDACXz54BY4TY1ErKtWHrVvHy2aP4FMiCFZWrcJMph5RAxAWFxEuUFNr1W6cMWiC4Y6kPosjFwjju7cc92DbU",
  "key27": "2P9RiFkbtu1J55VkqnT9meKx8xBwn6BeMPkTB2UmJXjmZdy7pFr38tKq3ncE1XaeJue2ppDuyencfe9FbYXq8B2S",
  "key28": "5rMLaXsGnUc5Cc7fPB88NxZeydH8S1og8f6UdwL885a5aD1sqRGLq2g77MFeqjGZTbgLXgzH1B1UHAeLsDDtZ6zY",
  "key29": "4GtGQz4tZ2tt52QnAnwBVdu7ueRPWctK6nwhd2xTvNMpEG8efqsTQRPmULceaW3JL4zKh1b5qaEbZQKg8LbUQyne",
  "key30": "4BVrvgVx2zQVUfv1VEjYVoEt8CwEfFpr3aFj858yLMvHxaJaKUK3wUPjAgGZMyP25jUz4554hbBsn4k7MKepPJZW",
  "key31": "2zitRtaogC4yG7JAtxGVtV8kSax9xGxeMBkVG9n242dckjwjCEhsvtr9FaSzijE6oUFhX5Jcw7HoPUQDn2STFJpW",
  "key32": "37gacpXMGT1dZCALFBbjepr1WBhGqS8dPCKuKvCaVZQupaN3a1pdweEsKjcqua3UXhXCzKwXb4dJKVhCLQjq2cT6",
  "key33": "3kRkKEPUBLXmhngGFqP3XsGr6pNyerGzZJPpJy6iJa24UTF2MR3vACWmAqaKC5jSm2aQJi5S5hY2iM6EnXkgAanY",
  "key34": "o5jfi4K9XmCgh2pWwtqp3V2gkbLt9dow7osyfBmu9PxeJ2C4TeVef6MFJPpu7Jh43iMBuXVaHXFp8fES9CPfegz",
  "key35": "5EU44DddNDe1WWXf3hMdZoxzBX3mQwJPcFxaFFXw7NVpKWTUr325naCSkfBv29bCvjhwPzGTHbA4NvgTvqc6cVed",
  "key36": "3yfDkaabkvWZaaynXjRB4vMujSnoPbVeC6ax27k7LAYMXnfB8Uoy4Gw383U1dUsvVT4Y1aYQs3DNK95TNwTHMkyL",
  "key37": "2RWjFS38j1bSg4oq6hXh1hrQ3iPy9qQyBnoRhovNVuHtmtji4N6B7nwA3JCo5SJpy8QKUKLmQWDkoR8FVRUSSvjC",
  "key38": "H3P4jFD5reRD2PGF7smbpgoYrJvtGYZTQZ2i8win7BSUMQ6HkL6i8eo3YPELHZSUUvb7TyHeaqDZCnuEXvwMynE",
  "key39": "2tziUSb4wvYABc7N11mbW9DgGKU32McjHLt6qMtpWikaGWL3dPgdcCpNE38oFKycJUmXmaBkfo6itYeuNHYaXMRt",
  "key40": "31y1eHajWcvURcAs9iFFMVeRzdsViofMbxHp2kX9b5Kn4km2vMFV6jmuSL8XB8znipTJJeAEnGq6kezG2e252Nuq",
  "key41": "6Ht9mwY9niKyGTN9Vue5t9fzp9r9BRZqhBs7B7Rk33LUAMmZuUZo1C5pLz5GexXr77bAnheoN4AFxUKC6vKvMXk"
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
