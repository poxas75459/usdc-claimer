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
    "3hWPH3mx9BDaBBLvcMy9LgHeDkmMwgHDjpNFuknvfzse7Ho7EZEahhM5oy9gukfpcENFkHtCjiii5b1ecuHwkDgc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pQVGsKtVxCiCv8EbExdi6NeRGhZkqWjFyzvykV1k94s6fWxqECjztnaQWJku7n56SZCNQrRFNgCBtNZRbxmCUJ6",
  "key1": "52ut79g1JbgfEwyuXDqJKWioFEBCMm2TR8c3tou7KURoWFB1CGxrw9hWaNcadzsMT8uSeM3KeqJk2qsGKKN9wQ1f",
  "key2": "3PzLVuApJD6y3yaokBaTtx9ysfGhMtKPAYe8X4X7STFRjCoYD7Bf2S8XwiMxvfTgek1D6ZZxC1ewy48p1NN6Pkcs",
  "key3": "5dA3zBoRAkVWaEqLZS1H7tkUc4j8cavep5Ri57Cg91y65AtWWQFHYoScdCp22ci4FXbaqUDCaiNrsFf4pyDBJaAz",
  "key4": "gchxY3mUYQK7FrQe6EE7UZbd1mMWeVmdkhjPZRBJ74ZfC7uYviBkFroWxWQij9YgMYJjFvdv4uxh8nAnpDuRrZp",
  "key5": "3sWAyd3gt69BTFYqWrZ46pCYXrhaxcVi6vJbcadx33A2k5MGFurpmhRKQpF2RR82ubxyuChg78bakZ2aWWGRtVfo",
  "key6": "4TkeUMGP4GNsnWGT8dHLSCQi6ooW48yJ7e3BZcSeaBe11cVVbqcKZXtcJWAoCnuuekjWJdzadZBDsYRVQNzCBh4B",
  "key7": "2WfzCwrMN8uWrDFPcE5F46hpUFurRhs9nsHSr5tZBp5orYjdbZcKeBR4BcxsvtNxYitnzRYgmWaus6Tsf6WejWyh",
  "key8": "37zKxmjNKcD34p4tFThhect3x2yFLY5ePLMt6rsv7gKTrHEzfwbqe2c3WPntQZA3dndftz1PrC45r7CLFGQdWvaM",
  "key9": "4U8TA6rovFh7edMp8Pa6tSNgdnYQNa2TNnedmMe49UMBWW48V4sJ6LH4uT5TfP5L44gSqYwGegYbSmckdeTh4GK6",
  "key10": "616tXnHcGt1tB5nyV3UhQmCgjBDdT3CE54UTqYE7Co1uatA3DzxYJpKj4Ro9juMVrgLjrRnoegDD4AhinRjccAuR",
  "key11": "3GHZRB9yGUmcjf26ynr1n46vCyhELeg7DzW35eJkN4X8JLrJ74dUmSXTZN3BEAT5Zqcgjtyek4gwPGV3y7VR43aT",
  "key12": "2uv6fgE4yewE8zMmxH6QbJSARVrpJTovQWnXV7BikiNjf8oeps7cipgE1joGHyP4aG7QWrFxeDtHzcxSdJAQUYni",
  "key13": "JZzp4KvERhNgsJdw9tadHnYqAzg1HvEyh4UxzUQUvMBg4ckLbskv6bpP7F5nhTGk8xQ9BLKQx39JnJEysin8Rbw",
  "key14": "2MAaQK2uhN6QL89ToeoynYRw7eVjuPzBeMU8j1t74WUfTpb1SGTwEx9ZrYNCbfcx2wYQJJ7xkmHYJDNBNNE3ocSD",
  "key15": "5EmAUvNVEYAedx2p7p1Z8YS2Z5wki7ZZwAkBSbPkBoSegCYPkqaxz3qN3LKNbrYJoQo7JhXxncJGM23iRrgRHmyw",
  "key16": "2EX2H6LjB1RHub66gfiRsYZW2NedVBTCWKPVVC7B6XiHQVnscJPydrAF96mT6kKmS7NxjdQv2hdcDZFE8MhmxPBg",
  "key17": "VMC6PoNCXSMAZwLS1xyNba3ue18KNNVrv8LnFQPv4o8K7srR1pg1NCzQM1R6P9XXbNdAmweFiRL8SPxXefbAaSK",
  "key18": "pUrFCnyjR9u8AN4ErZUmZ3M9cC4SXcfH15KD1ag6xPqRD2aYJqEorRXANvfyGJPZ6qjjxvmAoHSpMy6rJ11r9Ln",
  "key19": "4FsCsbEXcDnE3eNd7VgqvsKr3Dh3R7aLGKuoFEPMAKuv3TXpiof3H5DQv6DqnCtyV6adyrabfZq5DCni8rT61xQD",
  "key20": "56cUJAbCzMqMJGqbR72KanazTNMT7DVTFrhbB1j2HbxiYNTQcVp9vbg7Bv9onrVEkHRhkCgsRoZKAMG28vRgPQ1F",
  "key21": "3FaG1z1Yk5i9bEeGKf5QQ5uZWCspP6ZEHDVRBg1P6MBwwgSb7DnyCgoFjqwuEJR9mL5Ke7ZMrL4QJn33U5Jvz9Qs",
  "key22": "4tsr1vyzMTVo7pM4UnbjWgUKUqTqBPZUkvtrrZ6L5ThY2YAGYSRNUNYtFeNBQGtvYy5HjrCJqXvGDaTpLCyx69vP",
  "key23": "3Rdh9pswGzPFDqPEzxEkUWEnDjHU4w4JkecBSvGBE3fdWjgBKxBaZJBaPfgwsiiNkkTxe8bs2yRpshfNxRUdq4Xa",
  "key24": "3yBqKEZ4QyaaB55FVQtdVALR3HrdwVvjn6nUrFASPUgbQUtPRdz7YiqyzLdVLHy3pbCL6RGanq96G9FGqUHiTnkn",
  "key25": "5qEhqEmLni6aycEdbJTxzspa54txNA8j7Sjkn58W6Js6swFF5w54bnPiZ5mkPj1ZyL1hSSup2WuGVccs5VfgrS7t",
  "key26": "3xyqUExkGG71M3mTwbEVre1nkkYGVLUp9we9MhFLrZV7GsAwosyCvrxRsi1VyPjch6Z5MXSaFtDBp39dxE5H2Rb2",
  "key27": "4kqDH85kDuicPBQEgnBoYKe5yub9TeSqhy5ugPwL1CcVdWTvmoUeqEeqf7ix7hcEZQa8AuYejwfqKWrbxumYUZ9D",
  "key28": "26Yz1yamQxwtYF2DMHLB2rPuVycpXwvWviM8i1xvNqxhaKqDi2qNcL3va4vqfxvBsVphtcoscJ6vjdgkbyrayqm4",
  "key29": "6u34TqvXk1oZHRaXLbpA9AebiayrWi2FF2QfEjcpbBRhV9rc5EfN83Gs1WfWybwVLbRQRQmknM8GjQ5Lg7LoBMP",
  "key30": "5q3P1sMCK4voMPHgJkHxJu3xuRsPZmMPaxrf95qJMYscHyuMhUv1F754YJohHSpELSfras8Py5zun42oy7s17fSr",
  "key31": "3Z8YUrtkEgMDULAfpZMMshFgjQEqyAYz6T8VHdsS9aqfstztsv9GDyrTdr8LfAQvRYwuhKtREdtdrh558ajaEMy3",
  "key32": "28uuXUR2a8HHgQBTmgv3eiQoVgZiECnpnHjJmn9xmqnntbVXM3j6LeUHH43yxMUgKHciiNTAYogsTKgGBft1c61M",
  "key33": "39qZEqFaDmkkGM2mqtcAKHWptYFxnnu2x11N5uXFfnCZu74f6rkn8nhXM5EfGiZjBAEV7iALdnh7mhpFrveyMizs",
  "key34": "WzHJFULS7JQQgUCPEofPZpnmFqx2gfSinLg8myjz85NUjCmee29dSdRKVEVY9jntEx22qugkSEB9qPq25eHXkW5",
  "key35": "4zPToreoqkQsCRajLskc89oodKR7pMqDSbjyGswMAZkLBW4rjgBgMYd5UihuNj1z2V5o6VQqQuhvwHBst8aJDZWM",
  "key36": "3YeLDk5w5fZjMbp1PT7avrTV1EQH2FacuNRD6Mx83Df2LMf1Gvbj5mQrZwVQaEpqFEeXf71W9TKjprQSRAVmCYrd",
  "key37": "5CWMTjxm8pQUkD9eUmchqMjrmHkcsnn4ZeUgL7pFqdo1wWfrQ6dNzF14JfEfEJvoJ4Ads1BJP4LZq7xUtXLxNtjE",
  "key38": "2dB2XMevztrC8xoXM64D4ETUG1Ud23HnhsdH3EN4qWVX7jddCoZZ5ApsXrqfgTmcr2nS1hQjFDbUFePrR2bo9mP8",
  "key39": "2FHQuaiJMQBKeiZh43SYtcJYyusgaV2fQr9R5sm31oZXsRw79qiLa8bJQeBF2wmyrR1gFCeN3ULmJG2S2ECq26kk",
  "key40": "32c1TEpGVj1uYbYVa1KtiGv5gFiH8AN1am3A69js3XMdGC6UogUoLEVBvB2PuzyeUtGyQFYz2e3DDmmh9FgmwvJY",
  "key41": "4LbVZhNrnaTm7rxDafFzP2dHC364GxVG4WBAJ1gMXevpLWUjyR3qW8cX9Ecj8ExV16DF6Zef65TE6Zab2LnrC19s",
  "key42": "2cHGptTLgXwxC7kdQbkvVL2vuYvd6jSPHoWhjBEBKoSGb49C2ZVeKbRLzkxsKYPuDLd3X4qtHTHZZMTZ9EoXKM9N",
  "key43": "3i2CF3phoypWqmTbim2pjDU17Ad4ctveeMh1LKVk5vjrPedVdSfombD1G6BGP9nZuPrgwh1qERyX1cD4mSJ8zh9U",
  "key44": "3GscF7kGZPk82NzapBDTiiH8zLCk5QvRqHUh1Y6PccDHFhv3jcYK6Up9oHuYEwG3ZttXqMbdzWN3ywuH5XmzDRaJ",
  "key45": "2JHy4Ha7it6CcBjp4YFNZ8iJRoonC8BSUYVkkepuVMr2vb5SbxAMrS15opQU2Tk1Z69BqpnWtrQHw82HC7ypmSx8",
  "key46": "4EdmheK6Z2nAi2iu7gBfeB4jBBw8EhXvYgqHqbjWftNbsCWq11QVwf8dqoqc3vc1bZisQsewJ4or9hgxi4Do33tq",
  "key47": "ce2CK3GSUKe1p7FX5wARjuBcWyRTs4TKYg7dgD4NdadetP5PM2GaKrTLvMJEE41Vpu5pLekzesRvuxUNi94oFeR",
  "key48": "5XWnpu3GZkrj4ufVPW8dVQovqKUpbuE21nniL5FKxiE7DWwdxk6vQSth624HfFQEoCCwKQJq9RZ3D7XsAcMuiVNb",
  "key49": "yewkh9Naow5itLQ8VkGnQEmE5bgjjzXYQXbDmaqt4yZ7pAg9Qk7Ync8cUGNUH37WqGhSPEvCPNgFy6txyzzepqc"
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
