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
    "5guAB8xJhWrg2gaEcBsKyAsByeV9uRL7jhBnWC7KPiaoR38TsFZ6A92xYoLk8r2SC44qQFh9rz93bBJm6eNkk9dc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CeW8u54YVPjUQZ2yXpLrmCMTg9Ro1WREdR5NAByXHvrv2gQGKffJsjntshcmwbN69s26c8ABfb63W2kmtfJ58a",
  "key1": "z5YjvCCVvzTZrwRsU7W57zFcFgKSkoynjbjuxMsKUwTgHyaS1vCKA1EieBYx6RzyvZGceNoiXaDkViBsvD5AuDd",
  "key2": "3FW8DhP6Q22qvB7jsHFPfGLGgS1nomqKnN5YgYyUrb2EjsgWboVUcAnoxNyAWGXhDCQQqVpACTQV37oKJdCdim49",
  "key3": "442uq56WW58cP1qyS4qkZZm7GHrjwzV7j95azSCKaxfeCAa6KmMkjy1vZq2kLC6KWmtuNMURmkb8TKUfnf6WZbzA",
  "key4": "3ELNGdgdDn8VaQZgoru9rgZjFKStwQ8wdoJbFygLNXpFQCEX4VayABSge1KcAzp2udihjL2XW4kXNJqt7sqJ4jFe",
  "key5": "5iCw8rUdaHtQURMJ88NdkxgoRHmMKm7GBbaQMTf7SZoL5zoutTQx9Uy7KXCf95og5Ce79HANvNnkCFgjmSSdHy3F",
  "key6": "4WgKCSWFgdwndpdZTx4yRGSjVeUFvYKhUQQLFfsubmPwEb6g8YpAAykSnNJYD2dbYEDzU2k7YyvkGux7N1CBsH77",
  "key7": "3HdmUaR7MV2Su5N26KdbrqVvABDg8kWMW5D3nav8WtNUU8skbi5KN7bDZp2S5ztq892csoVTwUFrMNP8PwcLJsyD",
  "key8": "5E4XADW49juC24t7NAFn3Dkt57KpREWPXqzD937j4ngmKESNkftcpqSr6rXSn7Nu7WZHptzaGUHjPSi2ax3jq2KN",
  "key9": "2TexJGxirpoZkeQCQxRFXyMwNmhzn7RZXp5QNvo9P39V7wk7ER3ZfNa5XvBzjyCyYg8gPQvYnpnggZeKWDnVHACD",
  "key10": "3yja8ofsQ3hGBga22fJMV9rCgPpSCEq2yv6B3K7ksdpzcraQw3UXynz37ptJU534AccYBW8ktEoa84wye8LsX7Uv",
  "key11": "3PJ5qHmcPe39P373M17mwMHcRZHRzwyiTdbyX3GP3z6xmXWtspHLJ1Fiy818igqZRFmVUokEX8zjPPXdc9bPvamK",
  "key12": "3MhG11zpj7mtTYc1KesDyFKy5t6fKz6xZWsaVwTpVipp68CBuyKgQzA6kNuQKsdbrMZDzdYuoesH7fWFPnc72K9m",
  "key13": "42xXtrEwyt2g56BUpB5NuHwNpynZLcbGbpb2GGSNLLJU13ExnRZwaaWcs8tn8dqH955cyBHb5yGvHynUj3hpR1ap",
  "key14": "CgnSaU4h3RJBaZQnziVndET8j1Go7Y34CEBFgouwn4sJmk52eoDMkZdAYAEKHK6ats1PEty3ToqaZon6PgNoV2Z",
  "key15": "4HiuTUGZ5Hk9FxooeSYQKTyVUTJH3HgBXC3GBceHu2nPajhzsgKrapnntHSRoYcKJpyw3ZjqNxHZN4rtEyynPydB",
  "key16": "KEqA9UsVtLvZ4Cwwk8qkfocgo6Y1XV7wJug3qiZH8wAaT44GFRUz2KeuTVFHCPJgfjMZ4dt4MR2zentVzRqhj4C",
  "key17": "5ZyGRKfQkeJ5NP6vCESDSbuo8KUZycfm94bV8Bvkekc1G5YTEu89qG1P2FYR1x7zD8uu5ZVxhoM2cMg19GJycAs1",
  "key18": "2AznHP1tND7pHy2zA6NN9UmyCwZKgx1mSQjZahctweqNeAVa16jMGwuAbEJiHoQ7VYPVmthRmiK4azsHaxDgQ8YY",
  "key19": "5nAQAS41PkP8hMq8dVSwRWeBhsJw6L9j1megePLQtRLP4P7W77kJWaTtBSgAoxf3oVQh2XxVHZ2LUf39XsuGSyG",
  "key20": "2rXsWBnZ9dY5m9fuV5tnEZAvwJsHCvrsyWA6AxzJcWZRQw4pjDoCZThaPWdjQTJUkedUufS9XjE2nQJhX1id2s8r",
  "key21": "32fPXmLZJ3XMgvcRT59KyxaqNh7m4CKMyajKnE1q54Fq94JU7wrfcSxmJvfR2eeJKgDih3AkfMPg6bjdM6VtW66M",
  "key22": "44wvWN55RXYyfuVSQsevX8LXzJeJVFxx6xw8gKh89ggtWWkAdXQumow77G7iaaSzhHTLDd4QdnFNN1xzQkYdbayC",
  "key23": "3rCw4RGPGFd434AKSPhydKZDtcMMhZhFKuD2EAnDfBWD2ZPnA3ptAcPwy3eZWHEaMdHURfR8LGd2MourkJekrnBs",
  "key24": "2qzpUBw1GshPvUo8CkpmWkxoerfAGwx2hPADNwGLsqopRd7bdYLzosyuXK55XYxcU1Z4EVvGtwCcLL5xMUWHkrLc",
  "key25": "dGCZEiLEFnhwGsYVun4kAP4CSt5DxNNjqje7o9DpC1ANnn8PyfXt3BEaSuCi1ub9FBVFzxUJawxKwGbvhK8oodc",
  "key26": "5HKA78vq1rpjVZ9Zr7Qn9eq8p2gVzt7yj1XyPTk1zDh7ei4MMGm3orFiVkVmdQPMnf9bdSmteAyPJXkHvXYMRU2q",
  "key27": "5ti88hC8RGvrgpUpnGM7mDLaMLBeNeLsraC1ijLtmjiUgqcyYwyEvS2mVUGRa4fnSus9gd3LDVawgnKBTdMi6aT7",
  "key28": "2A5H4WcVkM1DAWqNsRHZuqoZu15aDPnkcdFJ34PM7WmmknQrp7CYfAiFcgAfLZcf6RrhFRjveYNhBuA2i7fW5bw3"
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
