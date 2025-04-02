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
    "2cJcpZJZt4sbX37HKsVqrdi5sdSekhkPgtvCVw5MvuHT1uPyFgoai8cAQh5HvszER5rYxjxjPSorEFgoxrhrPibZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZYw65biHgk3yZJGQa63UDH77fEe7k2inZek5Vz3MQrC8sm9yv7scwcVVek32vyGFdTdCvSQcqMzWVgBxBGW1yfS",
  "key1": "56efPVUffWPmWUJWoxKDyMeFyz6nLXGZRw49J3scC2Apqr1rCR8nnnR1bBphscpQyKgbGgsmgQC8b8Jr2HR5ZP6t",
  "key2": "5HgtZgf2toFErfwJ9BAcFt8eyn2aTLBvJak63wui7pJiKr7u2z3KLu4z56uM113fjwf86roKNMYvxQrcdutWYRHJ",
  "key3": "65ZoypR5PB2F6pLA5B7bZeeXrDPFWPsM1LXKoP8rPvMtMfuje5usdEzoAcPnoh7WvXNjdbwc7dFTxC22AvMy3kKb",
  "key4": "4MFuc4bXKnmBTuAKYYH6A2wDseYgKDpgx2nSJHoZtcD3YphkXbyKJJBRHxvNWcLZy88AGXAwafm1vMqgrqEX2zzB",
  "key5": "3L8C8PmByDK6xALAZuruBo5crjAMuvcD4BF67PHMiNFnG1vSGwRmcFUeMN1akNvsC6ZDUScEjWWKy2wEcKc7g19r",
  "key6": "3RGJ4Dx5i1KmPqhNBTb3euBnuCP7hEPUdUcJuefDKeexAE5wPP8aU2PZyBBosXXjqs53DoX5mKMyNadMpA4n957m",
  "key7": "rg9eJsWu8ADXDAbEp5gstbyvsunvC1jUatCzTqzquFiDPVdC1NNMd3v1PuiaMhv6PjcpCxwxZMq4n8WxeJr7mkG",
  "key8": "9zDBFxeBDihVUrVRn91R8BVPn49jQdLiH82C9eaQqZBPPct91sHkquiPyX78JU8T99woYkFY8PGWJM2ktcSiD8a",
  "key9": "eDU6dvvgPeh1Zb5vk4MFcWc2EttPw48vcicpFaDL1ceCadSNtocYwNAmyndkr7a2bNkmpvCnKU2M9445sNBcbgy",
  "key10": "5Vv7ZuaXrhmAo83462sVftFKxS6i56d8n3R5jQ1vxpHgCzA5hdfUpxHh2vM8mHU59x4DXffbbqzqoeBJg3ugmB5x",
  "key11": "4ydTckh5HvvZMvquxEgJoc2U3j45KNTsdFktiBjw8n9YsCJfDLAwyigFSAcFHVuFPGyk4Ck3dDGpwN9n47cSsEBm",
  "key12": "DgacGVecZpnk1mP6yYnUeDwu3iLx7Wp76X3RfHbH67tbxGEX1rE6HdaYjiLMqMX6keJx88LJDA3Jg6TGuzgb3dw",
  "key13": "5Pwi9Xt5vW1ijaqCHw8vzS95CUppo8LEeZbxUqzVikX2UZ3ooELL2kah5YvJ2UuQG63dzLWRC69yY3w7JXULVXm",
  "key14": "iqHrZJGD3bDoTjUtP2xTCDJ5dnAh18UvTE9EJKV9SfGEscU9yr5hj91jYj3ie4RYPx4Vw9AhvQTXEbitHVp9vXy",
  "key15": "2tVBkuRxf9yXdPw5aKsyE6mmTbHCDwyfiTeQuJoipQgxjPRcL5WRLKRm2UpnP4JB7AKiaRV1NDQCdvjPu8jRAxXG",
  "key16": "4tRDnUq5gvbMdEKWpDNtxEHnCudqwqm9J8pAdiNPq7FWY5k6TaWB2JrRznSbrQKeZKRadf7mEt9AWVXGUTVCiMef",
  "key17": "5CJNjSuqmDDoSFUv9JqgejjoQhTqBCvn5pggb2kBdnKU4bqTasVB9i9AQBJF7ebYc5YWsb9LyM1fbDWjmebHgiWJ",
  "key18": "2f4kSJJmqqKLkW9mQg52mJKpBB1FapFWZ2z72YZTodGeJgbYnnDytwYFM6zNNnhbX5mgx7tjDQ1GDE8zXdXi2oRX",
  "key19": "5UKCXUqbhL4145p8WdgWsfpPUcxwJk8Cfj7tZYD2UE4r23saPShkdRXCgyRExrNRubNTMMNXdFL8YSyqQGsj4PyT",
  "key20": "5CBoEaKjhunSZLtoaEtjJKNC6MPxqtg536QysxwN7MxCbsuQkpkfGXVsHsgjkFEqjPyX5b6XJLCdHWZzaMdNpc1Z",
  "key21": "3HXZTuCewngaSAairEirCQupfMt2ibmdcWmimyJpBCdakpcps1wTqqosF21aT6gRMXoJ1oz16MZvvBV6AFfbc3df",
  "key22": "2mXpxNpXsjkE6hGfxBsxXF9U91Goudc8ZbgaFnPTL8Ug7bd1oGYLVxAAJq76ZsygGPn2ccTv8rr5FHBZUQSneopf",
  "key23": "3Px34BcEf69w6onqKrsBkMTLdgjuhZveh5htKXdC9FFwEmt1MayXYeidR8oCZZ5TVTNFnQvoqh9JnNk4o4fxMttR",
  "key24": "5uu5pGjB6tmCqMWN8r4YHyMqvpkpCpsRohy8qV57zCxAh3rshi9EVZJ2ubzJEaDpt1aqBvaMvvG3JHs5D8742Faj",
  "key25": "4Qq7kx7BNBm2Tg6F4cNAbdRKPdcp94no7k8umq7g151xttPfiwfVmUoB58TFb9P4ry2SRQLLr3BebZTE66zM34YN",
  "key26": "ANwMEPKF1BCDKD5uA6QC5sBWdJdmDhR8maW1XUf6y7ov9ZzyJ5ca5h7j94aQMCQBdQhTgbZRk6YWEYt6ctCaQhr",
  "key27": "3w2s6QKaGr51Lpob5Tq2zMG2QpvCH9oth8gq6Nr3tJjRWUdti618qrxCQJ6u3wLzQjzC4f9HUWeCMMBbyEoUdUm9",
  "key28": "5uwynaDjsoEGNCbynSnBwWjKt15PBbUbCZeFWagKfRQS1aY92gCNXx5JPcysracF6dmjmujQZ1yr367y9wt9wyTW",
  "key29": "3CXPWvP6kMbjFummWgTQguKLwjMRqoBj273Xquj12kZWvsHmRe3zH17SyRPKDqJ3VU57URn2GE3MBiqvKs3yYDiC",
  "key30": "46JLr4U8K8i1btE1SjYm81mQD8SD9ArJt7TsxHScvM8cn7mgUPMSChEUz7d7EdqWGYgro5FmdrdSs7RQhPpJBRrD",
  "key31": "2TwPuHnY4x3ycafVh88wde49KDvwyCZzfYjmPoxh6tqELMep3kbsLR7LibiduwwtkVnkaLJ7p3MEnj7kX7X7d4mf",
  "key32": "2ztmBECsZx74S8geVB3e8Mz97Vx8nwTmkZCXPAfkX2n4NYSHd3Z91WjF6E9HLvZfBh2N5N4iDGb44V9FMbHUZWGk",
  "key33": "2mitUKPwR2FbXms3tNbEKiti5Pms4gfhBNufFgF6qb6ipSp395zhT6dK1DiMLLnNv4AgWWinNGkCzt8jduDMyZnp",
  "key34": "2dfBXt427PXfvpWLmR3f6Qy53QK3CkkqEWqpKGk9oHbgoCznevEtZmAb9pGpUtgw4o3CLsTs2oY24Uf7cdB7FEqP",
  "key35": "5rUV5XDeN4oT2SmF68SonnnzsGtDBdoxF3nrXih5r4qD53V6oUS1rzxJkVx4CmMLxg5SCDX8RJeMpi3A8S51MggH",
  "key36": "3tdsqoRe51ZuLEmyU6FxwNmPCBku42HzqttAB2d9wGRBpm2esTQvTTJGpkUnDFhXcpiNoE1DtaQUgMiNmWuh2wf4",
  "key37": "2uBQERqYXehhmrQCeg3VZjmR1GA2ubWhWKANsmBhA1NX9n1X8X4ysVA8raEuy38w9Vb2rtGVWCoQ6eAXgt4ugKEm",
  "key38": "5RfFbS29eiQ5jGVt6raAAKSEf2EaRSF14eUMoxFj8HHrDivdN55o5RnYq3mvQiCYNvtiDneSDp5w5KaBfU41rZjW",
  "key39": "4pcZ5by1bDGTyuPHqwwCK42B8PShLnk95efGusbZWVqdFfpXRNLwdtJgFdijTttd9LJNV6gabcDWp7P7E8bQjDXm",
  "key40": "58KV8GX6UWv6mWKsTVZaAHQT2pK6ksqvPJE7RdRf2s8DySYTx65o9t2fJ7shm3cSJFv3RKuZ3MNYmLNpwnVpPxpF",
  "key41": "41pZdBGDhH9M8rgivMVoFnkodGvBEoJxX9C7JdKQVzUH3RDWfE1Nhtux85VCajX7mqReZzLD5U4PnLNh4aQVUV1G",
  "key42": "21zjKm7F5ydyipwzuNbehqzCbc8F1W7RhM13ayxv5rF6mnxQ62GNNgr2pCXjXEGU7YuUg7Mw4duMFbu4zbNgMCJj",
  "key43": "3iCGVM6hZLZ59mcFdxUUSuSvwRaRoSp5qt9duAzYjoZZjGtXcCmz5RVKASBdZtbDyM8udkSmmVSN8fXv3gXVZ8F1",
  "key44": "2n5BgDD6RhMDU4xveZseKHhtZ3xy1mGaa9wXas9Ztij2t68Lekh1o7otiYAKGJphComJs3UVsf5uguAJsLdDBYPf",
  "key45": "64RDsCxPpXzGSqukR63oGDXkyhqpdZ8GN3ejZWGANYtSYK82zfBzRs9ZxPvQvomLxBvgFQy55bYxDkFA5KnzCUoL"
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
