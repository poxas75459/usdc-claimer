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
    "4zYR5KekutNG8U7esaRWx3rcA5VYVmm7ykPUNHKXCQAs5zmVPbyVfSwYWfYPDtwCsuRbWqr6bgvfWreBQwUKZUdV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tzioKPqqsi7h1RtP6iAfxGMNMUKy6SoTiwhC5tzZXVhJKUtQxvQZ4szbR4TCpG7eMJDx9L9RGXNPvH4HukPE6X",
  "key1": "e4GDbDDHHM76AhbZYFY44DEXVoXtBCAdxp43aBejpPnt6H9tPimb6ZsUbK8vjHmi3LQDDehuWatVkk354RkLCVd",
  "key2": "5PoaLgwNknSpqyJWaj9zZJs5W6xTtAyV23Ay6kMfBnH9HYtDTcZNqoRt2UqvYUAa1iwQNJFySyFGbEfRhZWXPMdy",
  "key3": "2JLQXaZgFvUCiXfxxrypeK2e3p8DvApzHAVYvMN9bDvW8AxuyJ6jQTNZwhLxn66yizzohP3qQDoi1Cqd6sc336Rn",
  "key4": "48zWKxEm6aF8zvqfY1XD2G1CRYxJANgjJNBqGGD2gfLWvVoCgQbNMjeWjrPYf9oz8k7fBzEpgvsydBTfQQWEDMXi",
  "key5": "4YDLbQDsU4vPvxxatVsw8shNG9ZfazMz7u2Ftd3SsvVbr76evooaPgJufBym2QNNHiY3npp8F5djwRyKyFbD5WXw",
  "key6": "32B8KbZ1pP9rJuJZsFyqWz22vuEMEPonxgGtnB6MPwc3ye2HbHUt1hzLxfYd7Db5r3kZERLjVEjUctf5HFHC1fiC",
  "key7": "5UM6yAtsFKB7RXC5FKzNHh83DdKiDdcsqA2WAPeo3czQ3zgRc7C6WpeRZMYx4Z8b72b8oWjMpQY2XBZEMBV3idVV",
  "key8": "DxNUP8WS6L4HkUgdDf2bUedHDEzG5HRRth2U4eUtXS88NdpLoDs2YS86bPne6NBu3xFXiJRdSEVGuXCRHk9nhsN",
  "key9": "5KMj8mBdagpieSeBCLRhikS5kMtbcuZZRQkNy8ThnxNBNEoM5ni4aC7wcQy7Cpo6C1ghnjX2gTzPBmLzzKYBRbfu",
  "key10": "3ZdCj4VdP77yvSjyvMGENypnhuoYFiBh3GgRdLBbwcTNevbyXLvTjoVHTqxKwcTd3R8ufMBakEFzzT36JJv5NCUz",
  "key11": "5DfGCPmSLanSfqLSt34wtNCfZf1VaZW17t5LgoDPp9LpvTbNvQTxFFgJjqQdWe9sVWjX8dcKdpafp8yD9J4F3AeC",
  "key12": "2mkggkJNb5KGAaaqs72iqyS6sFND3k7GyLucUASD6gVoZbnD78RCLXRfTzeY1FfX5k4oBfwKu1qW7zV8FjCpRdYV",
  "key13": "53j8rZ9GKuNiQmLjnfgkMXW1qqYHJZjpRhsYqq9ZMWrCEoBN8RHg2HW11R2kET9qdvpA8rLwg9BpiELKupCYf3ZB",
  "key14": "5c97BxYbsjJEep27eSr8kS7Y6FqoqEJzVBnEytkMucynwNg2mM4w4e8aDxXavBwtCrZB8XJXJVVgwaHCQdNKPCYP",
  "key15": "5QPRysJT5RHDH5uexXmKmzZr6zrQUnVZwum1tUwRSvH9eDUHQryT5eCeKFzM4PxXxGGD9RZughFHvUwSP2aLpLng",
  "key16": "28JowPuXD2dsq1o2YD7fYrak7pKjwDsss8qguDKLppdFvnN7Wnii3F35KRWNmoYiaKSnVBP4VpTr7ZtsiwGbop6M",
  "key17": "52bpJFtavw1y7dHJ8f9LmamWKV8JtqqbgF9kTwMt6MxEpT7RawRJpemW57rLRNRjnpNXDAGEFbR7aQB2jTAUqX8M",
  "key18": "5yfLq4er7asbvzpk7PbftDhJPJksdBYoBSxrvESNR7Ngo4PGkJSGCQQcKmBu3RMc7DCLifECWCHrfb3F45qGY4xU",
  "key19": "59yhmgBjdCJ3xzqeJpgfcqE2P2qiL7dXtFt1AxANPBV1vwfJNbo2aJjDDyjwYJLY4MtXqiF89tBcXKpN9oU91imm",
  "key20": "878v8xDHtg77pse6N7KYHLW6SsmQuDUxEcYHEx63aWawRBcvF36iERFoaArMxpG3qx3viF6LxppcbqybVsPTrBA",
  "key21": "43wopk94DD8KoV81x8oL12DEk1PybpRAn2ytPLvmvHGC5ew8NVVsvyKj7tBAjuwnh2hMySW8KnFv4sZugA8fmUAB",
  "key22": "3FDriH6RCGT5b6p11wcmNvNjAVkc3AXwvaTmiMZXgCNgNMzKENWHZ6ZKJgZLgofdGaQ33mRjXyYerPNGWJttNbRp",
  "key23": "3xhiGVnUqJNtnwZnYpgyoa7FMZvUGb3Hky7YbiAiKCrK85jHj5Zw7kMgH86KxHRAVXSC2NCJxct197vSsLnEzhKt",
  "key24": "3KErnvNMGMuTHZDXCFd9ngnGeXJs2xzaWog5qCmtrdsdeayFSjY5XnTsKzWJbamQqJ7W8cUXqf7SFAvUjthJAYxd",
  "key25": "2986ECpby8fQs3kGP8tW4e3Cm8Civ6QfiFuMnErNP6qxYWzSK9obqphyaM2MdPUh8Nj3EWpAcgLiCQsqdp9WAj1i",
  "key26": "5P48zb9oK7qKL9xFrUSdxQDeqATE9K9VH2vNYAgnpGmGXxQT9QBh55CtzpbenDqjSWo4jg2dJU2yKFBrrzj3gdv4",
  "key27": "5hgAgGafkv1i9c1vxkmVt3buF2yU46TtC5RsvcaBq4BK5K9KWrZrsbnHQcGvs8uVxFpENyqCoVFHymTynbXj56GU",
  "key28": "2Exep4gTc8qQHwUvbu9oa5Ei3yFDec7VuqvUTJiMQdKMgVXTCxsyvCJixzQ7Co5GSa88cAqEtuEZ6uWyEzq6cBin",
  "key29": "5tZoxVRmkVvyYVQu9yULDtu56RchryMbqWCihpBgmecqZdbfB5uBXNzRv3RZX8NQnoRa2H8Uv7f7SaPsf76D9z4C",
  "key30": "Ad9LTZpYBo28RbFAz3VfNBzfRc631VBbKC4m5zh88kyJxeFyMSrskZSk9BpQvv8HcvaukjDftPqZNzMHf2YtTDW",
  "key31": "4mwp6qEu5wmNbovVdhUph48gdz33qDSU1TmESvoPszwMWBobgrZ72RWiKMbekmGAQHvWDoSjdvZhdbzfChHcoopV",
  "key32": "25yDzLkfMaBdfe13X5Us1J4ncDUH8sHHkc9LAhmqtNqn92WWr1HmuD6QFMaTJ8tfg5hgRU1MVKmvSnuZWAqTpaVx",
  "key33": "2UKjt46PiY73XyJKjTarH4vonZkQsQMdnZmovQJpnhzVpnU5t3U8FZrCehG59gGszi4aM6Qyhccf93x8KKn8RfnH",
  "key34": "54uL8jb3vp3FM2MwBnb6FTf99rpmbww4o4KTFdqrR9hbhuGcmb9yFzDoab5yahmgsB5iHE5sQxfN8eyAePa7MFQU",
  "key35": "LFwjnsvPXBJ6H2sV2PUjTrJpUVrZNvUUGXrBmPk3WkrhWqJbMCN1F573MyShxk1xScXQLAXbZ2Qk3ttWQY6qUYf",
  "key36": "61jZ6ThXpZmADDw6RgdCeAzKSgXmsaGUBLscZxpgorpjkhf5uh8AVqoZKSTQkUqgazza9jpNCWY8ytN5dGP3zsQp",
  "key37": "XbsPRHnaCWVTs8gnbQFYY3Meg4kk5Np6NjYqoiUKcoTiQAWC7J6Ho1yVBdJDNqyGhAhvsffSAVH3L88Yh3AiwJZ",
  "key38": "5LYuLVJGMnpkhGqkXYzG9HJ73WbHNDjQAZ8JNEypb6qWDVgPGCZAEvsRxYgActjhtfWA8QAzJqKbdnzqR4MfBZg7",
  "key39": "93rphFmMWRLrWvL1oMcsihbE5gKHkHrxYFt7pcwdH85qd6wdytAKBwid8PvKsaLQ7UBMnxGH5taxHMFrHqt7L4i",
  "key40": "4ofr3fr7UPTky6gBujjDsDixTdZa8NHX21JRu7SDjRPeK3UtHiJHa4TywcZDoxBeXdZUBpf2gPhserznspYPXQY9",
  "key41": "3WZzjS6FiePpKYYayHY9Y9E6ZqMXRD4TY4yb9KugpU9JsxDstWAzhADnKH1Ea9mUCybWpMz3SvGQZ9qCN1Ho5EdM",
  "key42": "3nkzcXSB83fuGpyZj6oZNtEMcEWHN7vNFTr92EbuL1F3aCkzY6BBRJRr8XgZMMU2hshYsmWT7voCVEc7QKQC9BJ"
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
