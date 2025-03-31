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
    "2DmYkAmkQp1VKiFMKP8X6KH7ah8c4qVkysyaRbJ9cy7NdHKz9JmiQuepsMKaPiHFmizbLnq3ZhinQRZc8fnGvV9L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GnrDH5PAVZZ1371NDSiohwKaC17yiKGktLUN2LQEPzgs8M8LsdXrPW5tcuhuYSgz8SB9jhzCuumEtHKHVzPnWjo",
  "key1": "4ngW6h2NhtdxHqJVjMnJ3DdJzmckWYjg2ny3zLXJGkgBtCEYFaYCJv5BDNerfnwfkQem76HmtYmZ56gBeZ8kt5WA",
  "key2": "5TFdJL1HPWJngKTLHkznU4n8q9QHdXaDbmCgFQKxGiWEdwtp9dKb22sehVkPV2unbfNJoroPbosU1a7XVNaJmsRV",
  "key3": "NW7HazwJ5kMDyuzNUr6Vo4RYFPiCYLQiyLqzwHvAyvSKqf5raakj7hU4CZ5ThqJ8rcUyjosVKFw74TZcR87ELz8",
  "key4": "yxn2qc8TyyuSf5PQmt7gzn3oSdTbJpKQNRKtzh1b3XPVqyspRb7uvPTE8xEQHCtnZHuYsfURHC7qqufMcwqvMx1",
  "key5": "5WKBT8ByG23mWP9Cgv38h143UeEHpXJzwpC5xW4myKpKhkCU7SsKVpxKPsbHuPQuheu8zKUWo5mg5sLuVxVs5WR6",
  "key6": "kPggcgTeVLVVyCyBLe3VHLHHBJAFKc7cYW4Nnu1MJwuwex4DUkswi43mxby3pMNbo2j4B5E8AvV5sBPCWZeucpZ",
  "key7": "5NCQJdTJdeef3D7NUcFUQmczJt1zZoi3Qfh91RAnYxKKzspfZvsP3dcrbWnsFsZa8z3RDvP7DoQpf1yC7KLV3f1T",
  "key8": "DWTpdCj6vhvky2NHZnmA71bEvRUXgTGZsVGmDomRpVvkfFaxTm6R2QBmJD1wXRuGfn2wE93gT49tQKwV41ezmzi",
  "key9": "4rHASC8BoEJFZ8wfMy7jaNdsk8VsT2wDBRNEtPbg23wsKoqCLPvmFin8KNMGsHvGYY4DEGzKbnpbPyYeHugiXJeJ",
  "key10": "5bL1SM4FbaKmqwYw9iyUV4nLHzdGcVVz4KwA26wqnDq5AW2Co5Dv7LreAn6rZ55ZXFzY7DLJiLfJKCjo8K8nJNNJ",
  "key11": "5Jq6aU6edJvTVTBt7JHBM3qjCFSHJ4ZFDr19X6rQu6ASNybzL8Qt1dWfYSY9oAaPyx8118juSm11kHiHJUHcLxgo",
  "key12": "4cZbGcczaguCQVxJRpK9atY1H7N7RueNUhNGe2uKwo7W9GH7R6Re7th7eNHLrpQBQS9RPVBk7TsmgZNYRi9Ftakx",
  "key13": "5Xq1my1atGaZfuoPG8tU2K5S9Em6EczU7vfxQRvTxwvxoY8yNYnCzfApHAZuU4r54iMNKu7e2pEb38QveUx4MnVM",
  "key14": "5Y5cMWbXcb5RQamwguLkNbVzNk6285akGAF86tANk5mPcsPfxyR3SfvCuyd6bPVnxPiwxWTCRgsSy9opBm6sjSQ",
  "key15": "4VVCpcJyUHsEJn6MTH5tExiyZgAProuQ3KZrq6Q9ZuRpqcdHBT9J1QdUPqkUxiPLubK5coGn7XvR9pMkntwLKXpS",
  "key16": "3jaM38WR6XmtfuuxPimCQJ1qHPibdz25fFcrYrkA9y7ZQPRiDV9CerqDiKN55qiHKrU2PGDG5WR1XXtzfnRHy212",
  "key17": "5m7Qonf8gvg6xCSZC3NALbrA9rAMcaCg4oF62BVacUQYfN1ZSj9as6CYV6Cxrt46bScM5nT1DbT59yL3u125PSmp",
  "key18": "FXu77HmbdU7DMgevKXNAXuQfBsStHAiRGFRmiHKcPiDWBfiqX9MwP6ypzwM5izu8REbnUsdYui1wvTTXXwRjj36",
  "key19": "34YkYNuUYgJaqF5nKGZ61WLLP6qZiD2Nsrncjm2coKnPRXs6dhyn4TNJBU2bp6DXeGvD7hACtGTLmpV66iRQhdGz",
  "key20": "4rKySr9ZGpa3UPyqecAnZaouf13PwK3m8GN4qxpjkXV4SGbB66kyCBFWAgzBy2KqgX5eoQyJrvVRg4jugd1nndXu",
  "key21": "52FPRJum2qHyfUoEgtdzNPEaCgRqU3Cn6vzY1RNnQWUQ5UQXcrs1BE1dKrZa4RQer5PuxfQ5yaRFoV2bNHrQ6swQ",
  "key22": "QPaFtQ9GVuNqGvx1Xty5Cv63bKsveYhuSvgvC944daRUDCg8CE7S8renMnbRSU6Pw8U1C2H3HzE8Dp6T49wbBW2",
  "key23": "2syZrXtw6BieXyLFkaspDpkVUtkCtQQdqyMKaAaKZgZxQfkoy7tEYCDUGKNfAF3zzvYEJ4a4rxvpB4q2RmnASV3b",
  "key24": "3jw51gCVRwghDbzg6FH28yD1BLxuLDoL9takyTabcVyekzR9wGMsVNxDr582djksLwinnJ9EpBanLCyxaNbDzgai",
  "key25": "4jSReT79g7wsVp6yWgP2vW6irVP7dkkvgWtbT441Vyzn8hSfjJK1RrCCQNciafTdjesY7k34pcwfbrWCzBWgHeia",
  "key26": "54Rm2AV8JbQsjHss9qnubdv6L2KqRvCPt4P1VX98n4ay1JDtsMdg3NdbzU6ms3xPKWR2CbJosjRa92QQEnVoYDpt",
  "key27": "2sLw6vBPYAhZ7BqUrQEy5xdsuxf2NgXmv99oFxndYUXdKTyfv2dcEjyuTR8ctRs4wiMSK2ZTKJaMGh4bJHZoQSuM",
  "key28": "4VHTUGwnmBD28KSYuNWxdw3R7D3VPyz3H2j1q5NFmjFbeypuM9VQeFXX22Uzro4kp1iwDxGFDvmQBHN1U77bZe5L",
  "key29": "5CFtkYSwhwzno5JtkXG7LQiEejCBrfJASzGewz5eQs6VkfV3cW228iFhNivn3wkBABg2xdY5J4ufvfA5DyR5acKD",
  "key30": "4LD7rXsSbtJNv5M8n8wdwH7XUvq3k4kVZu2LH3oSZDidQTh8NzF1EtBQ3xWKRRUg2c3xkb3mk78mUU6SyYkxDppp",
  "key31": "5ESyP7M5AN3tUZxo5MsWQT9aEGVgvvB6RC8ZCnpjoAJTcGvvXHkwVurb6Ujezgu6zcG3ZLAtDh7f4jJm7JiPdpwk",
  "key32": "5257KhJhdrv4xSS5ZVk9WyoZ2s6ifWZn29VWQ8sXiYwUD6fbmUH6vAaSoCp7DYqisidKQ37pLVGTDz8Xdg22vE3X",
  "key33": "2PFaYHqvFwgT9pMYsLMve129FzssXKsshiaQtxrY5NEwMZEbTXfh5Xn3xXjZ6Dt3jUCCL17msMK7roeNz5vrNhvn",
  "key34": "4wG6Rzndv6zCCRQPyA8NjNNiLdxmgN8EYgqiE8SfVK1LvBNAbtn8qhhFCLT5c5XhDPDKHmoza39roUz2b52qKcuk",
  "key35": "3tPGBiFdSAnpEF5irimRzznVoybpHHBRPpNAN11X84zyfRP9GNc8CtoJNwibUWsLSpVqwkAoLxi2RAw2mMwjAa1t",
  "key36": "4EoVCkHVEJmbr5QZbBGedRVJvnjmG7ddjSSikP69PM27dHVBwi5BtPmaSMQMKdzbwNGZaqcFrLuoXVQndhYn9hoB",
  "key37": "dUxrC9dT7ex4UWNM4ffWZHwr1mvC2Uf3KGCPWNoD1AKQRiDJrjk7AgyigqWCMy23V5WNEHAU3i8kLfB1Ui3QbDs",
  "key38": "4gRnfzv5AkGesUZto42LKNA8d4GBNhCtB4ALsyPa1USngNphHDoUDsGjuBZzuvVTbPUrqSgKFCq8XcjCvUDvSDNA",
  "key39": "2BSuaLsucaQx891Wpw17PZCHC8G9vRr8PkmNgLtwyKN3evup5BWcJFsN2FF5QmzT8n3uCojLD48t9jYZnxAhZW5J",
  "key40": "4aioePbGRzioFcfcwRT5SpbXyPhXoE4YXCykKubccRnWiytp7i6Wi322YPczSTJPvcDp1AVMBrQ4YYkjw4qex7XT",
  "key41": "85zyAZGyjzsYGo647GrREjS9CrD8MKy1fRSNBc8oHReA8GgBgnyrdTt1zSYkNpJShNbjBoT3nBbhckv3mnn4pbe",
  "key42": "55gJa3rpnmMM3SidjNBExfjdfRwiL8gJRwUH9oNv91uSvDxhZNBxywmFfPnzU6tqGtHvD4CmoisrZJU91eeq4Pkz",
  "key43": "2WQdhTryUNu3uUbFQjhAYjD8L7xF1t7YMw5kXhEJehW2uVM1987a9HPV4LPGXFDEREnFHVYDG9KL5qC7qqRCrj7H",
  "key44": "BubYnUL8nfdRhsWMGXUjTmw9o6KhjUKsP7837qLcqw19NBihKdWy7UwZsjwrQpyMxfZPM57yJ462qvhXrFjdvjM",
  "key45": "51jF2X85zMTU4QAVW8HjaMbUtDEKxfCDh2RBR82nreFj7tj2dPZjrM7SjvN8kzxrqvcemPg2B7iyEJta9wQ2pm4x",
  "key46": "2PpvxoPxBSxrDhyscojZXWpyvvPuEUeR95oJmzVhAMKSd3teAYyE4JRgCU9MYKGfT35o1XCmsrkcDJ4XYgHawF6M",
  "key47": "4yde8cJK3meMWdWiFkmfq8EP3vRMoVLKe9rcSBkE7PEGYR1EoF21AeyH2CmpKHigBwuBSrado8u3EUdv1TvUeHEN",
  "key48": "4Psi9mPFbC9hBZFrWg1FYyM8SBR1NCcdrpLVdH6MHUHDtzX6GfAnKbBKmJeKRtN4pyjLEU3dXqcqQLBW6KAyCPvH",
  "key49": "5o4qLyt9V5QdGcDSoUyWgjzv5RDuWuXXnjrTjdZAguTUxnmmAoF1qDGzPSFBPyWzt7Kv4TLR3XFrh7spjM9W5jGk"
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
