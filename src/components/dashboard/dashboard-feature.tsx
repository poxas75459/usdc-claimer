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
    "MhTbr29Dm68BCZJgDUi2nioQLsSDRicByvXvgMaLJmKMi8hFc7B4K4ETMq19FRaT9KygA1SMf1sQ46gd1CcSM6b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tftFp81J8ytSyvbGsoe4MSv9e9s3zhSiF3nicJRbTSsbJJfUocXNse5qJH5AvrUieG4vshpTrbTcFUw8vtPKR5S",
  "key1": "36rHSFuhc47sbNeFiF5HjYuYii1iz12VvTJTjpcwoxtiajvUEsWHspKXTerZ8djeyzrWj9r7Lyr7qycTaYbHT1k5",
  "key2": "5NgGrCArQXwLXqCJ2zZ2iLKR4dohcQrv6TDjobmhNvP6xpSgYiS78nEe2jebKmXjqhZdUQbeBma9nkMScu15p7CS",
  "key3": "5GgzEwzDCYuHZLT7po8tZJ5fyj1uYeHij8KqmyKchNwn2BN98YSKAoB6X3CoNpRmby6Bd8XGNooWewmdEJPYXEwc",
  "key4": "2wauw56JM1dsx6uF9GuhTWXrc8zjDHChvDcpUonY7eBgq1yxTcfqeuu4DZyRqViwXtorbi81866Pc7bpywhFcSJN",
  "key5": "YmVpsn2eT9WkKqjjnJFgWeGFoToa6ntju3rqzGYQT49Sw2vLy8Lj7s5mnKhrUsWeibx9f4V2ayqBJn4vdHMogd9",
  "key6": "2DjAiZkkn84S2Tq8ikn9zagE4M2uUcqGoyP9SR5qcsASXpyGZoxRse8N4YGsdyKsJxRa2HipPtGS5Ljgic9U7yFz",
  "key7": "56JEmEPqeSqiPWpCMcR6EgtUQTsu4YjD75Hx34uJdHesgZ8HERrCgWtfa1sV6gKw6PNFQgcnDPZuwUuxmbBKZfSc",
  "key8": "3ZSqovVgyBvd97zMSdxQVv2BtkMEVsHDGM98dF957fuTHpwprwQuL99vpieWvd1FfMZxyxiupdJHqiXsHWNXq1Jw",
  "key9": "3qbMcAqhXx2zcwz9YkkwBj4ci76hTByLH1kqcCZn77o7zEqerZbrFuEUoZNAuJ2wdReHGQySGhoeXE4jWNLShR4R",
  "key10": "4WvqpZKGkWC8uDTzxbomXHXb7UsKrB8UvgarY8GyYK6ybLMrvNhURxf9HGe2VWHfVkrg2ZkHaLT2tbAQcz4mXu9C",
  "key11": "4AYvPQQK6Pty4et31ssdSZFpjhLgXmHisKCzaecvynMSmnASwYq3hvk6Q7HxB1wjew4w6kzuVF6AijBRqqTiYNz3",
  "key12": "4h5NsnL3PwK3Numv484MMxefTDcSvcPWLKQEC49hZzkGp1Ws57c4fyxgPD2AZShKx7mBFt9X7bKPNyrkEQLwuvFd",
  "key13": "3w762yfeNCRdknG1ENBsapRkJpidAGdDCyDF972GzVDy7UGnfrA546XZWw7WVdtQ1ZJ7SYqKNCwiyKNsF5BQhEry",
  "key14": "43x3fGMtnSkQzVW7e1dVeD1tbnbV1eB8bBf8W1hLJPaaGitBcH7L45p4aM4Yb6CQDdeouzLx1FHbc9dcM5LzHQfP",
  "key15": "4VGGMGksE7wC5cCvzWqTkngSg26Do1M7635vyzBbNdSmL56NZH9cmwN4LuDKM1qBn3T5hrCVGEqxpJ43rCeyWEMV",
  "key16": "5PeEsJX4uvKGWydb6sdbzYe99Ex3FX1dxRhMJr43TevFmUR5Qo4aTTZQyC1KEoFDECejJVMTk4m1SRJCQ4qp7eb2",
  "key17": "4dGfMKa16kSWQtZHuQYCgG3azrq5CsYQLZDQ3VxaR4AMRFoWXRJRn5yzhteM712yP2XQkPHYEcJTjMNMCP7w8Z2G",
  "key18": "5pAseaYJoCimbdDz7y3ws8MBThXG1yEDD6PtBNqKfsZ3fqG86A5KQmoBgLYu133ZeHjvnoQeHcq6CxmvML4wtYLd",
  "key19": "2hv2fR9n3gq8JQxJoJNUCDAGh4Rjpa3kGrGpxtiqVQL9kYLbDFrw7Ywa6nyZjX3cM4g9BDK9zDzJ5SejL2JC8vy7",
  "key20": "5XcDp9X589q2Xz4sD9aDc9HE5wA8T9FkE2zSSEBxTjrEwXwR2jbofUaQZRhmXHCkigPHs2oMer8L7S58KM6qo2g2",
  "key21": "64DpSXQvHDXv5PhYx8ZDcpW34QTZ8SvAHteDJZPfv9KEJJ3uBpTmU4McSUbhTEAMadffw1UzWa5ScqzD9qCWF5sG",
  "key22": "moHgCzfATutsJmA5vjgtynoDJeWaEadRZni1VknbGtbMaB3q2enhKGUrtyA2HTAS2d58T2ja2Lwp8Dgzjz5ZgCK",
  "key23": "zqLHDoHQ5rMwtg3pB2Gf427p7u6xavZiK8LGvRxkH8yL3x4FgJiXvgSfBNxtBrtGtpvFTTf23eE8XELM2hgYfqW",
  "key24": "3fL7QNKQUDbZ2DUGVrM3jbiYJbkhzxUFkuBpUsRvLYHpKeZtYoLbaDfZWCapGxjDQUddCA9B3HuHHGXTRk8ozBoD"
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
