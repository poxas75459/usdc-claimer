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
    "cpHRX5tJX6rK61Kmxj9K3T5Yi4ZMQedYytX6fDVVFNqT9ywiajCPEfcuwXWseVocNqrTeW91CkDYqATWKdu3cDd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8cdNX8qd6YiWxwPx5TxAe2LDoEagdmxLHYhLFPrTdkKsEjCPi8Gc96DxfUvGgapezHebsqJeuagKWhbFu2JXTbk",
  "key1": "55a9NVQzHfVmsTgG4JyQQ32HoWpZLMHTP1nooDTNf8mrU5iCi98QPDhxTWrMjbvX1poUtXxGJmQ2NvDcn6czwJxQ",
  "key2": "oUj3A6k8iFvXwJ8rcYxvEbqSxeyNK8yDhh1ZFtgos992wUDkYbuT9jZbCrFPAKAsbFYxGpaGEksm3qy2BvdkmLb",
  "key3": "5T9CLdSJudgvymLJwC3gJDtHPvW6mqQhSTsGFvEiR6dxRo2LhBgP2h58qEEtYYdoWn7t1y5soia3Q52hRr9xkmJw",
  "key4": "2Bb7uxcnuA2kmUSjkXT5E1kwwRdmR81hhWoAKAYEJt1KboP9Mt72Z99iW8kWYuVRz9s83Rk3HVg99nDzJc9sk76H",
  "key5": "5wWN5MyXDcZzWPKpFYgHxKaxGAxCv3zvL3yynv9msfW2LYEHHfMxmox2WhZzsmTU2TqJieNL9RWLZdAzvGbMjrKD",
  "key6": "2eS12qv8Q1quUE4JqS2D1PAUTc9BLF2Yt4JWy6Grz959sZiheoGD85xFDRjczUPXxEciS6eEb9nBEMUCAgwLFq3d",
  "key7": "4Nd3L7SZJyS2rzcvZHyvFe13Ka8cttPEwocLVaWUDXw8EZ1fVmbEnJdV3g5C3LN8HT2ectpZkzN5MboqCz6v7Mht",
  "key8": "BcsDfkXtvepi5xun3jrM9ngLKVZsZevRTKNd7FfNo6b5L5S9eJ7iBjQ56x2MKjxEYdExm9gecuwtwXS8NNQDNS1",
  "key9": "2w76Jt14BZ1HduVuCzoqxFvz7dpN7fYtuxUYJKCy9reXJ91qWuw74zhENzWXfCMNg1FaBbdBs2Dptjy5u5sbVNaD",
  "key10": "22SXbKMN6F2U6n9vhxfu6pRVyzEbPxfbaUibwwhzKiSvKr494UqFwxfF1z9wFJtyE8xtFfgJtZy7tvG98JV6nH2w",
  "key11": "4R6ye8HKpEGxT1RngR6ZAWPSmSTXcKjDyqmHBMdepzkAwkNtakD7km2Jj8J3acYbDx5PQYWaKhZjTg3vKS3igMMP",
  "key12": "5H1QFfAhc1UbHAWc5DDuPjvWB7nxMcNbSmYjVAsbsnZW7F8hj2HKoemcEL1V1Xia5DQaTTm58z38x9TRD5YJZDW8",
  "key13": "5rB4ZoA6rqR2gP6XHVU7dvfxafc3pkDkbiefAnSyRQR33CmX5rk9uQ8VJn2g8jZMCLQL8VuGrR6xX87pGCgRyuer",
  "key14": "3AAEYhgYxwEjCy1PE4Kt266Cv16UHsjL8zJqRdMSxPVoAuwFDzpy2RnCDumJHdX2QJ9F2tAMTtv28SJbSfrYRoRK",
  "key15": "2VJE8zS1K89gdh3jvZqcZCcK7UzwiV3iyE5xRmgDPuJgATrYP3CsPKziiiBVuuFceSYUbjC9bpF5drV7Vx7RcrqT",
  "key16": "5a2xd9h2HEwd4pQqjHQJNCh7HvrJqqRj8HnpcUxu3D8TtNz4anNJj2y1HDsntbRX4y1o1LEFHoMjdeDbhzbhMyyx",
  "key17": "5j9eZoEDbC4QzhbWz72dBWqMekDFXhxE7jcqwxtpNZXLK7qxnCXsDkdjxZYyARf77joomkgATo3c4wietUgZK63a",
  "key18": "3wGjDvF3iwkvp4yDhd3DKnrHhFXjfa6t5Q9nvgtCVrDcXt6DnNMb4xiHJhyctZyYhbYin4hZNACX3tcXBr6nDYCY",
  "key19": "5cgkpYxKqeaGAb8LpiB9MMBzqFE6FU3x7mcmkHygcBtyEifgXTZUDHSuuxXwrhb7UKrCadJLNZhhahJuiPFTtruB",
  "key20": "5kAVVb5aT74LbUrXp2pEK6ykZV9GurUPEoeZM7PbXXoJcGxMsWBmL3rwtHSx6QFF2UVZd5kFQMkhnYgCoc3Av5jU",
  "key21": "LG7NQWMr5fFjiL448zxHCTLwiRVhJDVEFhjQ2TzjQAzezWyDFWtL4Nxd8PBAE7u4hRpJQjQhRE8gBVx9cP98QmC",
  "key22": "4dCPK9xny5z6jxyQmoBcyujfdfeYWMfT1UBVSQvzT7r4uFg7zobuGphfXhvFmPf8SWvFa6KNeEcWXp5KQxof4xkL",
  "key23": "28Fjt5pyf5X2bZsRsBwdWqJPyrQyPi4xrsB1AiuBNVpwsU9rJSDwMJK1rVKgFkUCskdfR4J54awfhik2QCaUa2dy",
  "key24": "4KnvBq8ddH8xHoHEjH3evWC2ECeS7QNWZJ6k9asK489rhR43KX89nEAmom1awgThFAksBYaLb9JLPy9UEG2cRuwB",
  "key25": "58Xy6TaLzk2gkR4bpjzaVfwNrtNWXUa1Yx2phdoChfQrgCSicvso2AtRwnQE9DbhtJtPJyWMKEiR8aBn3PbsEn1n",
  "key26": "58fJhhA2pMRhZn9NgvD6j6PHhqcv43BuaEK8J9HefAPqfmSipZjovKCMvC1XrENxRyuubGmx6aBV5mB3HvTWMMQE",
  "key27": "4zszPX3G8yP2wktnBY9hSU9HFrpwvDQtauoESiap1dmYjiMQSEXvgPi4jTmBAXLMozNFpZKHHq1BXJVPWgaTE2t6",
  "key28": "27k3NYPLhpBzWSmVofttwtGyjUgigfbfpPeAvVm6iNCZ1bH3ePp1jtY6itCfD5u32tpW7jchhSnUtLnP1ea4J6Hs",
  "key29": "3EY97LqtHGnaN5LZvzVG4GpDzYTVmd2dAA62TqCHKtas4SafrJLfC8ZKRWHzWcbsujQEcX5ZtBJStoC3VVCTYWZg",
  "key30": "4c3BKVkutJtcqmS88dAhFmNfDehMNHb2XQixfv8JT4Q8omzSyBwhpX7tf62AyCVwWwgSpExSMEY5JnRHFj9eQbV2",
  "key31": "21SojGHeewMd3XZhosujV1Q3ekWSiSHqVTTRt5Rvxh6DTPcfZjBX1P6jyinWbjhheMaGVDX9gbmDUNPjvXMk4NAN",
  "key32": "3PuJDyJD5XvV96TSV8Wp2BGYQJHVBodHA8duyLcbz7yDmBFb6wA9mFRanRd5ivhJbFCWJ8VP8wVPQ8zZ1UhQgE2h",
  "key33": "cdMoQMfUBaDkxiPFjc1xncBRLd46kNb9VgnnPGZjknpehK8RXNKwfyTH6P1X96wuRNsKpEqxUrkQC3Vp7TYW3fS",
  "key34": "4Ud9xqfuxsPp7sB67f4sYUu64ZG3JKvfV36GhCsp2TUAgNcbgVsZzDDXSw4ttTsHvuYDcSPuRbkJhLGYxDfXfyew",
  "key35": "4nhhtF6KNuPrGA6zbvuNBYU5RtpBoxdnfSdE2nLJKc1cZsCRA6fuGujdLFRYbJ5aTDSMgK1he8xR8DZvnbtR1k4z",
  "key36": "4mYbuYTBjVc9JjJPijzKhHGpxEfzvk7HSM37ktcESAz9a8ARTAo9YQbiawQxj27KE87a8K53yJAAksqdE43gv2Wx",
  "key37": "2VPiqmeHNbJSgDit64oUj1tY5tmcHfv3RgHC7ZzUrs3TTHjvYYBNic617XogfLA66gjNCYpA3zW2d2EcaoeDdbHH",
  "key38": "49n9CTBTs7bqqE1vWNhZVigqWrnTgJdcbGA3s3yxQ4uBBGtpVhUKjL9VmSRc4WmyvqNcU7EB9y1RDvCwt7aeNgfC",
  "key39": "3tKoqDemoRdYcERg7MDZ88bzSibjUXKiF8oEKy4u7Szuv95kD3VVMgEFfXASBX42FZVtCQ2hiHPKWDBUFnNeUJ2y"
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
