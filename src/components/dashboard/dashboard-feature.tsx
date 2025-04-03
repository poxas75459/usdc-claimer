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
    "5FRYfLtumAXnquZbRxAbChbQvywZQj4yeBMG9t928uZ3Y68SgSCty8pUoNq2c2PaqsTgcaf3C5v78maYWA9tGBSe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZMzfXgYBdbKJpbWTjDuti6KAmFtGTUW6a5oubn3zE98xs1F56ihpZos9xprXTCQ3DFPfzEb1xa5vkZ5BxzzGzMw",
  "key1": "241Fgi5WTq84z7LdrPtbuWfS5Fy7S3rAsgCUNAqXBMRK36zmNdJyTXjkvfWCjfLgHeTCeA3VvXNjPAnrZgCvCQS4",
  "key2": "2zSfUqudwvx59iJy8uFdL5DgrENfRDk6APSwMy2JP3fJRL5mZ4CM1rozmxxc6rCj9u6oKp5eh3iJE5A8aRF7qDgQ",
  "key3": "4v7DMV3tQE4FDAj4cynJ9PCYXfMQxxxyeSFdoVxbbbERKJJbcRca4pEPDTtMaZWyYqsgjvBMuCSR5YuD1hSX6Y2n",
  "key4": "2hSRNknQnirpoKyZKogz7Wvbbt4b6EKfbTZQawZvnNGpKDHktg9zRXoeGeVy1wBreYMk5XiRDmH3xqa35hgJcbyM",
  "key5": "iMtD1ENpvm45T33oK2m4eB4LXSW3hdmcxJme1TszQKFycZkLBiRjULh4PKagthWhT7gcVEyAEjC6vXyKYBUwVX7",
  "key6": "hUUfqjcVw57d8E3yrinF36fZUgvVNtzry62GxnAUDuR4Etdit1LTtwRBzemGX6ENzwYxxgsQcpJ9WMWA89S26py",
  "key7": "4YJmFHDLJkL6juFkMNf5zc75kuxgL4FbjXWbQUTMBRaFrUXbQKdeDymy5hgnh58QH3pWHJ9GCVqX4fwihfGGzz8P",
  "key8": "4QdKynbZMDYJAForJmc3M35baUk9iStD23ssbW5eBy3jC5C4ZDaFAt9aDeWjpbm1xijNZf5w6LrLFWZYTDFs7onA",
  "key9": "2dbJFHhpAZoHJ7WqKtzTwQmJiJZmSfEMiwMUnw7Bje71fH7f6rJShWX2zYzwzw9ELzwYaX76SHkFEnSqXRWHt9GG",
  "key10": "3sqaewuiJcykM9NJhFEzD4KDZxYePr1GS7brsD54ogxECf8tk1ZUvKgmp1qjbZBtfeBxVtXrGUEpxUB2R3Ee1Wgj",
  "key11": "5V7Y6wWKRW635yt5jCtruqZCxr3jfUM3AAAmcAQLbHX6Zecmd42J6d7nafmPhSvJVtBem7xpN9sKVshMhGT7mtdM",
  "key12": "2qedzmPEM7EpYgzMU8YzVdbXhqXcrL3WsqdphasLjkf6aYuuuX7TDbFBdigxA5maqhU1wVTfZB8bmgjUwjjQRCTH",
  "key13": "4kotjq29U9Nm9GvRxfqn2nc27zpwDBHWm22DEv3LC4WELrAwHqh4TDcvr9Dght9SQwHPSe9dqvMTJNTixso5scbs",
  "key14": "3b5Q2mpbcHjpzT2h5cf9UHdjHpX23f3vx8t8hvS1uhphDsecH6Yd8YpMKUH9d3omD5ZQY9Ygg5s4aw7VcwyTpUmc",
  "key15": "wdcXND5Z17tRGeZDwSxXaAFuFpD5VxXYQRQxtrxTKoZ2uPSZvZUjsjhYeJmfvXwS6J2dbswywwH9mWPNQx4yBrW",
  "key16": "beKDGRatcrxARm7ofoHv4FxQE5eN23aMoyyLf1aC9VoLJDqxdDSMyF5bUHqzy1ED3hKd81nXUMoKHgQdbDYLhps",
  "key17": "4JWpNDDWVxj8mdPR4rbsNx51Gje6CcwDsGKKordxygJahtNrX1cnDSCaNx8v58AaJ7TTFThxBV3ZNCCP4ouMXsZo",
  "key18": "654yoSYBW5aGJseeaCsVwYgdeV3BYChUBVMyzqGFXmSAGnhPLkLJcLfRixcyijQMQELpwJufNqsL2fe9xTKAt9XL",
  "key19": "4UEyHwD8tJi4UgV4uJCCrdB62GffEpmGgzJ1qFeqJL6rPqjMG4KPr7FYJDHyB3HvrNRcZDBrjxN2WSpZRBsSSD2U",
  "key20": "4aVQChyCbUQgqsUmy2qt3BRfYSW5F3ufoGoowoJvLEQgV31P5L6WisKdhcvikq8DKqjxn2a2cqMrqDGct9GP7mBA",
  "key21": "3tiVDtyrsbyw5vobLwUavz9kuZajqsSCnh6V1mHnMHyjghdKQDjn69DZxC4mBAhESyJw6z1Zdv4CFs1Q4dv3qUjX",
  "key22": "5uRh4HXaAYyBzEgSbvdDHrEniYGNhUrcofvxGz3JxEronZza21GfKMZcwgD7oeVUpBbjZYs5sD8eBs2sgURXDNoC",
  "key23": "5ggyKCSS5GpxLTfBnmxvbgPgk9DTSRaNRyzMQxyzqQFA6Whx7vQmE8Cgq1J2pQwswtFEhg6wWH9Y86QAmrFQ4urN",
  "key24": "2hcTZfS5MXQx7yqvFXkNnXyEgCKmrTN2YPzDiJJqiyVPYtdaNsRXqh9evDpHoz4o7VK2mqUZijZzpnPY7AhPhLRr",
  "key25": "4oRLdaLMbLpGDKeuw3bX95HaDoseYwgdJyG7CtLGPURu4ZHrzQdb7tRTVa1FhUz7mWuaeeYB8zPDKnkMvhRsd9Qa",
  "key26": "Apep5aeSHVfqph1H5Mom49CCSVzBbfBCoA6jM1zfdDRd13Gsvi3kXnbUdfQxLEbo7WdZiDiLHxpzGghjZ7vAJLb",
  "key27": "2KwxKyATSJjnnGmHuyrzthhjJmX6exFDYBgAH5yZtrXYGWSN6J1vTvwF7bnd29uHecnJAvbpPYWcgP5WzE4KECWX",
  "key28": "2keLzLdxGPLEcJBAqQJfy45HTQ8GkFPha5m5aC2rG52KpxPVxnDfigkfeKeS2zBUpmXsNbgHcERp6uQQZFANEQbp",
  "key29": "4nfriyBU4jtStcUsxQihnSGYWFKBAjcGXBFkZFozUkNBbTKj8nQz4PhAoqEc7Qu5jtwX6VJwBQmBa7NyvtYpTVsh",
  "key30": "45x5rQkbRzXtKHJQuS7kSzc9NtFMi9X4KPj8M95Hxsi4HKwQo86WaB1yph9SqaeFruGYdw3GL7gSuASVKFu7wraH",
  "key31": "4yCu9tKRVfgD9grK2KxvFtiS3cy6bWWsxK7nadqtZbXqgRW5Qr6r3jvanyzf457xF6pRxq1c22VKbziNJDrQzyEk",
  "key32": "5SDYdk8oAKEakxBQJQfcLH36Znj3RGqhNErFjC8sBVumsUTEu4mZ6TCZTmuJmGt3nwqbdHZKbMbv7RWj3hCndToa",
  "key33": "5vtrWWpxBVGywf3yXsoYPyHZL9adpzFKjvutwmtC96U2656Tfj83oqGWV9wnRwtmdEjUEizCMHJTSvzSfo5EQ2st",
  "key34": "fam8nN1zpwTdb1CCVJCVH722SsJud9qpXSf2p2Tw1bZfwxRSSe3jPcxPMiicksn1CLHKcMaM8Rm7G8zqrcEcF15",
  "key35": "55TvovGzAgqrLMA7YksnFjb8ieboURV3dQAdRRsNkJpsXsEyZs2hcRbL8u9BWfvMAps7Qpqg4tymNy3CJ3ipNjrX",
  "key36": "5cJnC4s93VCfp9GKLJxot9ZifcXnCrmktpyUp23ABrcf7ycPJXydaAuBpJJJwr2LR2DGedzvPNeCuyGmJnwMBSdZ",
  "key37": "5nv8EGyB6zZmUdBcmeDupNdqNYPLdLtgarcAXeGVkTrXXigNKayrggPFsD9yPQJqUNo1dU17ahGtGXjjdpnU9TfK",
  "key38": "Vhs3at2fRm9prc97V66vF5geANALDfcNrNt6sK31FnnhAoYBbfCDdEDXrHhhEbvMmJC2599aomuT7796kctfoeS",
  "key39": "4m5W7TiFedD8J7rfCk3PooWxvx8MMYQgtM1fhBcudLkThAsAFQvyZjgetX7uGUW5S5HsqCcLNZBabhBj63Cgo4P4",
  "key40": "2unD11LXgayxPD3peTn2GNJm17eHGuTFEBSxXyAt85Zj78YHFJcR4LXaskz3gaB2r6TPwp3RFZ9P5QVqKWMRN4qM",
  "key41": "5UT3TZ9wjxGidkuhdwomFY8XWqT5WUatf2zo5zVnuUxmhJYxkH8k5535Q9Ud6wV6FNvVGxtP2BNjZTQyQoLZgzWi",
  "key42": "29QnE3pd9pz65c8VdPysgDtWKb39gULviQhbCWSfWW76qPo6qULJHxZKXDqCvZXBjfvfxMCGCVCg9Bct6eaRnRiS",
  "key43": "2aDNRr4tFEVLiDi9KuwAthz3QBmJ9DxHb43ySffhvEj1PHHEN7D1SeTxc3s2BFNWy22aiF6MHVGwuqiLMYoFxVmi",
  "key44": "2GNYdAj1TUgy82CobkKmCEFXyXZD1cHg341WF2KH7MjRr6cS5QApyRSFdcKczTRtnh94sFVSxB8Lk5BSXx7GCCDG",
  "key45": "3aURTwtBg4Lgot1TKyjU1wGdp8pW2RnpvJ91wJD5xcSvzK3WqiV9SmFDvuSt9BJ5HMfVcbn9ZTyjUnyt9eNZ9YVF",
  "key46": "2gtTU6SBgnNkqvMVkqzwssRHJSdNtyXpzBYVsmgB1khUqnDki43i8auBs8uXTvrJ6JENmLzVr12QRRLiba5ptkMQ",
  "key47": "3Jx9zW3KmiZteN2v1KeyzPZ9wpKDCFktg2LqabtAtcp5xPgU4vVbaWjUM5BN5mZVjD4PofDs2cEsnAgqtBaKayHV",
  "key48": "19GvBWdkQmuxgRgYVxaYU9174e4MpXTmxttBwkCSRoM8UzSsGHDGvsFXpRmzYCrME1U6SGiwBX32LRzCxHnPoJB",
  "key49": "5c22RhgxwXXw1t8J9zFX4y2Y3w2YJAheJhXRnUPctJbZfmu36LQ1QLHaYSas1CyTB3S5HyefCdimCtkRVRFSsizo"
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
