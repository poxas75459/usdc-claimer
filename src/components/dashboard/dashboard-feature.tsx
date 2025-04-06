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
    "532FAtF33PUbc5Cj5iup8hu74Xuop63jMRstrqqi9CwK6NyeeTU8Juf5wrqPhUGkW3FHaszaohcR3zpq96QDnsNq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a6HUijvwuvAW8gk5vW8mkTuuPTHbxmQvvV3NBoTAZPN2xDCQqnKx2wD1UPNjiVN1KfMfKmTLfLPDtY38bbPCMjJ",
  "key1": "5WvpkAeMcdnoZcCp43u6PBt4MiTLewBVmFeLwTQDjnryFJPCVGo8XNycJjydGbw1SnnA8rVkmHoFjKqSFvQrxH4s",
  "key2": "2X5CSDGMa64KDs2FXUo1C9WnuWkSwFbGR9KiJ6jGeiZFikyXy9L69PnKXU6xzmoUNrmfmf2McKvaNqahsMPuhL3s",
  "key3": "5WeWjFUjXG9njbcM9hXe3GKeWaaSXdNTEy4jtqmhF7s7zXNrrA3nCDD7gL7QYve6tbMKCP3AzXNgkPWhABViohBL",
  "key4": "3cu7cy1D3muB2aqZdqZUQhxBjziAk1KQbJGtzgAdPY1eFrHi1cf9618nj6Kz8QF85atzyMC29ZYG5PQcG4dJzrW2",
  "key5": "4BFszXXt7ogguqLj9RcBJ6KdHRS3PBBmRu1ecCD5rdsjA4DiJPwRnygzeihmkKJRtQ7no4XVYi6pX6fx5zpiVjog",
  "key6": "3wFxhaA9dPi3ZojV4tdpFA32bcAKqqebGhuTfW4AnyTPJw5uzZ1mVASavVzSrN9qJb9ET9eJ1YAfbibM13uLTjUU",
  "key7": "2rQssYASjra2x711Zj8QDsD7GeB6Y3rGo6U6cvEhSWnkouhAbs2cChzNch8DBqeV5N5cccRW95wbvcuj4JUVLSK1",
  "key8": "5TxHMwZWH4y26QZstQFknNiRLww79N1zvL2Vo8KE8dpfH3suQyHiw8PQX9He4pGozxGZL982aPeqiaPnVc9cRiqW",
  "key9": "2LWrcKNizDXkEC1NmaHjWkb1ksrpddrtqVHn7stGE4yRqFcc19cLrR9Muk8RaNCKR8fNfuCNetWZTQ7NnALPa2VX",
  "key10": "2fDx1WCEqqjBccRDMqDG2hK7LPbeXVb6orvLGqmw1x7xgNSw2hbmcTSeeXihVNFs741k4hsbqGtnuPHu5o7pmVjH",
  "key11": "PeBL6TqGtruMHcRj7S5bpLbkoZcscXkNDiB4QjHnRku7hvGTu8BjYapSmgkM1vGs7ujMDezmvR7ZSGApsjstZp2",
  "key12": "3N1C6MBwbzWmibUfLvCkEU6hegv34HgLBiYnXKmTuwoG7F4pNjKusyq69Nf63QEqwcBcWdn9KsayCuTCgMhuGeQA",
  "key13": "2gJCG1YYpZLuwCKwFPbK341phCjG2UbvhvTyzYqzKLfDHYbiXeGKEnXGATrSoJbHFNiTfE9yscbWNfarEojJfDwB",
  "key14": "4wPiCy6cW7iggvSbJp9AvRen4kZ14HQPAYJ7s1FkfU4FJXJEokTk7wjnufTsSM62DPZTw2FjGVdYb8Y8kZiQtetM",
  "key15": "2rhUTzCkScLeNC8D4sbMNWzt1rx72CpuFxYe1gzUic4B4JYi7DA3jnLhj1gmdoa4kqtB6CAouj5yAknzNg5yMCkd",
  "key16": "4zz7UcwKPNf15UunuFcxUBgK5krvUerx9QhrfPU6rMBz97rrB3tgVFND3Mtd2GkNxhRgxKiVUPkVx7d2DgmNob6T",
  "key17": "5FC3eK3foqcv9iGp9EcrVpv3zHct92N7CkwqfHVQmtvJfvPTyZJrVqyjRMn5nso9N4WGRCesZ9EF9cjf53gJkCbk",
  "key18": "4JKM35H9wdgnTvuKJGn6bBy7iao77FDc7wm9snmKUvxQNz77tYAAxP6yX65Y2r4vTqoq72JCDqpVnNnGtV9oXzNC",
  "key19": "22BQyo1mVTyMvLTiRZG3xuuoZSB6ee6fc45wv6uSbPCNptafAszBvp94a6Mbk9fD6aHnP4PAuCTLaCgKZp3ZQxcU",
  "key20": "2GzsLxSLf56WaQcRXVyaQBEVaiBzQxxPKF6DS4H92pNYRCZrZQi6dXkhczRdJzFN2Ks7Wf8FgRt5bRwK89trFUt2",
  "key21": "3fqXMEPCCFVEKCF9ugg7szK8zS72jzkQL1aAJV12sFtiGnY1LWCiaS7iQirobNLABnXLGWroPS1oZNuTj9osffdg",
  "key22": "67MnGMq6qv6zNXPJyTCZvrdasCT7rrrgC8wTYpPy1nCTZ6J2dJheKhmCLF8bctGXYAwk1xRrKx8c6L84hHoBWLqy",
  "key23": "2hGcHQ6fkN2WQqTLSbX4Wfxv1wfKmoSEQ5tNgS87PrR46MqAuKYmKPgUtU7ALFChgxHEgeQpTpQgCEEUBsJaQrF9",
  "key24": "2MxXMuqZ2bsLxHGVgF1nototaBkr25BVpd6L2Ji4FMZWwWKSFyYX6SeC6Ncux6TVYzv3nssLzt1BbN3N5FYbMThC",
  "key25": "rCnwwFbyn4GXTFuifNFypGjV6QZpxwoS6xn5nFP92A4iJtPynN8TeKZwEyUvwRTHWEyd63ZVrs1oSbeyGuVtwYX",
  "key26": "mvy7S9SkDfCiAFQDeR76WdnwUrf65PYyntqU8GXkQdW2F4NrYXX68P62uZQKiNTpW3Rs8DKhamN8KLx8goRqjWz",
  "key27": "5ftq2J9ZrHxeW7tHrRLdBfR9FN7EVRSF97P8g2btPo9J6c8EKK1y6Ma8A1k3Er3B23BUFY2xgiFBV4PBcu7WegTV",
  "key28": "5zM9GbrCXskc2jkRHPhj4P1RtMSGxU7hkr1C35RHXnchPwS3jk1jZ1utf2YQCkV3og3HDSUBM5tpsTubqxjHYFn7",
  "key29": "5Z99ogjw5JJCv7mkXbZgbrfNKvdWbBUSHhsb87kUQp2hmu94DQqqm31LWEqESmDPvj4MTHzZYc8XMu2YhcGtH8q1",
  "key30": "3MNC4ACvGmiJjF6fdmD3exgiUZj7b5nhZJ1LvaB7zkxpY9oruz9bxEDeD2aFL6YZHnTpdh5J6mUHtQUEvgYSwxQG",
  "key31": "5zYtBtJVBoF5gxTwwzRZz2sMTUypEpqRuwoY17Ww3WaEaUWojwK5LZ66gh1h85UqwjGW4XM7SqREmcr9Lits5rfX",
  "key32": "5MQ6JCszX2wabTrwRyUoGkTgBeTVLoGBSPCCPD1zYTbdbbTqq4qmgLUj8MkU2UFnZJcx2qBtvAExhFAbQiB7WgBV"
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
