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
    "3yKcvM6HpbGedWRuGh6QoPPGKEp2TszooMX7ySXoHx3Rd4JpBVd5ecvAnFsWP877W5uwVNVmqsHrQxfxKJZy99UN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AAxsnzusvc4jBb2VbbpDRyMua4Hw3jUwdvEw2nCtzwPJ6udmcZ8JZmcXhh7i7sGcBvjT7c8cdSwSXgc4uXu8K5s",
  "key1": "3ZqYkVtoeXmvTAySRPSioE9XFuAzGkBvSd19tB3ktuufTXYu1e7iUSqYcHD6w97qqurp4ftbcWRb7qLhysKorFAF",
  "key2": "5T6E6DrdbJWRuPGv7VgNQ24v1NG5QPbGFyfrPMH3yJkpua2J6QaXx7cK1aVPyEwzCNMx73wwMH3oQM5JQLRUzZ7o",
  "key3": "5iVBcsh7SnR8rkWRGPyWL9HudVs6EAG873kfGavaVAcDvh1Uvy4TEUUTT6HAn7fpAZhUDfu4m6xs5MRsUudCQ5Qg",
  "key4": "2iBuhM1SMvRjY18Kha7WUiS1gF5bQsvjJNNCjqYiGiZ1pHvPwRRit1HFuLg2BGNdcUE6phj4yDrdLktvuvPzTkEY",
  "key5": "8z17Qc7C23eg1UcorvUns3sMseGrw2wM7zgZgJpvm6gUWmP6GbrHFRpsuVqA1iVVmPe6VoPukim2WUMgMRbe77U",
  "key6": "5anz6YXSqfFZrxAUYt1GW655GqBiJM3S4RzRK4ehQwZFNH8YJ6ihEyqkSN6nT3d6hF1AWoeZKQxk976k1wZM85hH",
  "key7": "21HuGPJy6nQW2h2fCBcmGwPA6CdkYBguN9Dz4u2WQpXKKhq6P5WXgS72tT7nPA4owVPkJKvjauiGYPfB1u1ypoE9",
  "key8": "6jtYzLVr8izHv1gdQA1RAVmvGgwhP85kTuqAoKVxGkNaqM7jHbv1LqRBnP63v9EPLHM8jJyDrizPS8Y4FauMben",
  "key9": "5MSp6KNmiXcQMvu3JYNULEWT2gYin8eUczFAjMQyGYNkNRniasmCecJcFSUm14FR73hWFMmhnQ5WZPxbBPfwXWTh",
  "key10": "CEenajtWkvizdGykXxSarQzCZZUfwmL6SkS71JAaFXq4dh4xy4L1c4z8UGfiDHipCFja9caxVBAKvArgrgVjFUG",
  "key11": "4kX8UTh7fFcMtiKxVyGPpXVWABLikhPcUHNcy4WGhmx61LuA4z9mvG6UXpfFJ6X2H75Xv7XvfPxvpxSdEfQMGcw7",
  "key12": "LWMkrdFTd5k5vx3P5ggnovzR1ERuzcTTsmGQyjfFzs6yWxku2uq11nzMExPxaFwGarAWd3LXFxy7Sa9Uzr7gMi7",
  "key13": "4e3dgBnZ4TEvdCu9W5CXPrVLNfFJbgiWAyUd3UgpYsSbbLwh3xVtVqHhoomuBASpiTF6PPKECphAswW5jRQhoJB7",
  "key14": "2G2u45UEofGJnhjh3edEWPYT146uTjR7crRNk81uiVpK6TWfYrgojddvjRzGx2ruP1diGbZMrvNHVVLpFoMDGSub",
  "key15": "rUJiRpVNt1wXF5rveJKQXtZUqqT4ZmmmHaTgttvbLPbYygHsSU1hK1GKBzgnUEpTUVtCQczQ9cRTRFgNTdjnfLB",
  "key16": "3bC5WoaiidRqESLksA1sZspBJn3WGrjnaHtyLqPCVbmn3RUrq2mKQwxsgCan5B22z848YDBxWbd1BgR9647mJpe",
  "key17": "5y8c213nGUwxYYS1vieD1Y4RV1TrPqvgTfS8kmat9F2U8MZD5jgUAs6SZjYofaC9HWqfBzH61wBXhBh8oU1Fg74",
  "key18": "5EYRV2CrEPBSBu6zFwFgs5yzmhaBaY26Lw7x6FLDTLGkgds8zXQAwVtugrhyT6FgqXveHYYipob9TyevsLqaN3kK",
  "key19": "67NZHLmouLCYGw81GbRUwwBxNygidnRTcp6yFwxupEoaStMZ95yLRCRZX516Y8YcGyWVSV3g9N8hhZZpJMKUYyx7",
  "key20": "5HobNyRHAnHapbwdgGVpKEDo8gsJ4n8ibxVYNgY3vHTLrUJBibpYzmHz7S8kFMnGjeHfqwuZ4sk5qXFZNpjfhjtK",
  "key21": "ZM32U4sRU9VUnsxhyeCtRkPSKAPevHbvmS1yTxoYAg7Vb8KcyvwwTCPtZJvqf3LxAQTJt2XxuPbvN8YGwi1YbGP",
  "key22": "4oXhTPjJiXhNJR9CkvUeDtvGFigfeizGkTat1CS9d54ByCpT2N6Er8ev2zm2LujhqkJivSZTNGF9aE15NhLSf4v5",
  "key23": "44NQT8VQZSQKdCrnszWAChyBA1VXcmfwKpCcfivh37EVJhWvmXADtBBL1jYZcaHqNMzsGUowu5qjyEC4j34Ybx52",
  "key24": "3KAGbyKq8xQ8qjCLeLBoNQYxke7acPUwHHxn4Njij9o4jeBFQqYqziPe1o31X5dXKUBfn6GnJYTvkRdrFMzg2B8n",
  "key25": "3cVpqC9efz7qzYgCRMCiCPZygFV5kmytkcqufX2BzSYCN6kCB4VscgyARhqmDXRJVZtgbyNgtikAkexG7U55hzkK",
  "key26": "4YgZJ2RNuKYtVwuG14ifv3GGS6SXrBoJDjy1KPdDiPdNibvmgXKQUoB9LN2DEHg3JnfFnQkxpDC723PKJWukpvpd",
  "key27": "V5HfSrdYGAn8kCZS5NwKrZ1Tp9QWPczq5c82uTYaQ85UbUkht5gde2bk37uZ8qpJ8nNEiwRCRgMybi7fH4doe8M",
  "key28": "LuiAWB1c6SvoPpNXoPQR3NE5bmHkLD8GJ2EJMN2jGDnyLVDQtkAHXVDQ1FbwdfN7NUVcmgG9nofY7XcGNYbZoja",
  "key29": "3V9ZW5cquSJT5CbvP7ok8ueCmmUL1pdxBuWUXrq48SeHjihmZN1hhCyRD7jrLCmC6HSwQDF3Tm3sSWwdUm1jNvJQ",
  "key30": "vqcCdHVNUQ1yvAFSDUn98zbscD1BrcMjE5CbAY7DwWsqJHQG859A9EPiWTSZNLgoKdWry7SFPaJJTGgXRQa5YFF",
  "key31": "3L1G3RSCuVfk4KM5JR2AS9R2BEAjpkEaghe33XtmaSshj1aK7JwZXWXzk4StahKpKpNVQCbdq3ANWTFV81uw3yBP",
  "key32": "3tCiomGoK5AN8krtzkSsvgy7V4LgjgcDE9K8p8sxVdgHYgKwN4zRQBzSTgfyyzU2PbhFY36Qi5216d94ytyeKHy3",
  "key33": "nooC5FYGQnkiwLc99pyUhGSHg5qLT3nG5buFVBm5BpDc4dhuE8ii7d2avvpnsZHVTUwSwKa3R1JBGbyej3mgzVq",
  "key34": "3JByczw3Hr8V2bXRSuMQQX6SRqoxVX4rzTtMLo6eGy7EUqVB66ZY87MeKV6Uyzfg3bKutk4SRZyKcFd5jPNy72UF",
  "key35": "LDiUFLoA2YVVJ6tkZUjNFNAv3LBJJAUv3dLsxcmfT1dR7Jvm3kH73n4w57Kt2na21a67QjkzyC4ihaNfQNEKUFf",
  "key36": "3iGQ17vsNtxKsczt8oynj7PsqUPLRedFGS3Peu21kvgcLZ9dEwW7HkGrnskDP1eBdaeHQGRVJYKeUXu64mZsBrkH",
  "key37": "3W1GSUrYU3onUNMpQVCCb2TCFBpti4RSZedGjcN2tcpk4X8gvQ6eL2fPA5V8EZi7aAYtKh8qVdaoa7RXGZPvW1bw",
  "key38": "6Rv8dtv1dHKNw3qxSyYX4ySDsg1CxGFY4w53ob2JSCcCvrxAuppKypbkCnnmVTitwQEHHVRHffn3Gkb2j7uySew",
  "key39": "kHJhnbhhnKYwq6ggT4SVDRjgsGKmqkKyKogQdcjVwM1ou9MAvGEqfQijsoJAYWypo2gGsFy3hPNzA93wVwpvW7L",
  "key40": "4rRpFeAKN2MiY2SEnM6fZi75SnAFEB5zQozEQ9tKGF76EDvTJGhUbNBY2yKb7uRAteAickAtRgVmLacADrFhGs8o",
  "key41": "kuGRUD5qX3e4N6CM1hraLuQYab8bwqBjPgmK7hkCsJCNutsW16m9ZNKh8szMSHVa92achovpiDoexMChEVxNggh",
  "key42": "4AdmYHWymMu1zX9pFwJanzkviBvDW941o4J9fMgdt11uRRBgzgU8LFCsNtRmz51BxGuNPyjr6arSzpLmhPgquvZQ"
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
