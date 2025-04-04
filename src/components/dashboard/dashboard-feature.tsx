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
    "4jrr2NtqwDbismNJHrQPcRJ4w1A4knoaW4XTKEihhynUbhnJq6pCYs3uNHacDU592bppfhdwS5X23rt4zJjKyLFx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mLn7TzWwPyghBXCeFLGnhHw6fL8oTcV7ZiayxxdjN59jucSLbqYZBGSSLjFPSAT7Qui2WFiLKLEhYAcbJzT5Hak",
  "key1": "3JJ6essFcZ15NLzibEMRcQ9s9VL7hohpY4UCosCSeijS2A7wagxWP8LgB8FxhqqwPtJD6i3w6JUeApNhTQunpimG",
  "key2": "4bPt6byKsyAdfPs5zasCXHiroRDgCZMjzzToU4FzU9Mu39GCLD2XKVHFFFaxNa4pHWANBd2cxCRknCcXkNwyZcFT",
  "key3": "c1MnTB4CZ3ccuaQMmkPbzg59LdXKMpoRqKSMpWW3pBC8ifAjAYZQPeEomq7Yza4DRqRFrsfTJ45971zgqq3uDhs",
  "key4": "2kDFjs2qRqinVrvCP1YNYsJZFykyvWrUgCqfFBhZivCLi5YSiAwPsXT7XTvKMgYKkiBcvH5qi2gHNdrszXLw1vdC",
  "key5": "5vZkxqBy1LgMdUdw4LgHRS1AWu4MbDYgW1ZwAeJvMaSTSHCkHC5ZGzawJrmAWzXY7FYTQhWFkcU6ZdnEdSeCvHGo",
  "key6": "4fAeDoj6FsnNb2nsAqFb4YtoCFnYfgp9tQaTuCsWxjYDNmvaGqf44WAPB16KKQ6yfAzaZxQYw8WrmorqVETBCdkC",
  "key7": "2eEG5acxsKE9ZBBurNo3EwgeLUF9kh3dMeXLquy9BL1yMp4QfDtt2V39gqe3BVewRRAaNWZajAwHLLFy16yttQW6",
  "key8": "4XYYFT7ogmEBzDYJ43huvtiTEfYiMTFLLCxyE8EcvbzaJGT3mberMspq282djQUfWj5ii4wtBZZVaqudBujZxDE6",
  "key9": "3y7vTVfkNaDDtRtwkdqzvbCidLuWt8o1UAwJaXJEyDULGWregwcFZ9z9teiHTbmsXX9Jnf2q5fS2zsvsS5AJdSMD",
  "key10": "66ZrSfxHtLn74TXUhuVaT1Mfg7ysu7xMmNi6P2sHTSk5xuLWAG9YcxHnKgHiSXMcXumCEcCQBYuj3D3xzSstoVLx",
  "key11": "4ucg1bNbKb89M1iEwNMgg8ayobyDjRzgDLZq6ZQiugyc2zofuavMnhxoC6VS9XhiqsM93seaCKyKzHZ46SvBNxvi",
  "key12": "3crxBqUftpKah6WUfghiC6nc6oJhvbRwLWqb5N4y2YKabd9MXVupWpstGzSBSE6smfGLwKiHLKyrwNchUAVqjDfG",
  "key13": "2SoRxHkYP1PExRXkxwojWSjYrb5nBhB4N8D8xkxz9CwgrCqwG52oZn8n2UrHLsjFCs2ST47ZEpR9zRjLBaHD4pjE",
  "key14": "3PQW4qEFXHHNTV27ReijR8PSjBsyBXiKJb9E456YtTJbvz1wre7Lcexfz77oFMyaKuAMGH9Eyhr6dtvTtchjYwdm",
  "key15": "2gFzYxAo5tE8tv1DhiaDSXMh2PRgZRuZoohWrKx3Lx1n5Eo6hkfTc5EPQkpDhSeRmEFo9PEvpUXvwcQ2pQNHh5xc",
  "key16": "3c4F8sKNF9L3TBYb8Vwa6u1vxJXV3bmZNaFuNpjRpinHwHo4Dp6rUmQD19hV1TsYzAEkfZfjGygx2r2x3M8crsEP",
  "key17": "3uH3DU4qFdGnvQ7XCZK19bivuQc1vjVKkiL9amgdzRCWqbmkKVNjZSJBpKMpzg1a6uPysYwD1UvXer8cBKww2Jjy",
  "key18": "UivfHXdhJoFLwAqzcwFjEYeRnJenFftUKGFTjnwfLabVD2frcbitJzG2rCFyYRGQiFCnSf1MERfPt6eDnwVt7Mx",
  "key19": "5rgHdyPf7iaA8CN2aYXPD2ruLG5LY2toSnvncFty8w7wewE3py7BHnSi5eX9QgiLTQMYtScmxZ7f2K7xvSEQMtbj",
  "key20": "4Tm7fu2PSbPouWtL5vHZCWt5QYL5Hu1Gn9JudBxpSzL3NQUQXJ5msttyf4ZpRm3waqM11Q1JTVcawgnV29dmAHca",
  "key21": "3HJCL5vLn8sPsxa1LTrS1s3T9uN6EqM8KQugE56WRSvqvx5VSDscaoxMb1fWyBXbXvYj9hMYNWY8Jpy4HfQ5WQgE",
  "key22": "5L1FTJcvrcGiDoA5CFuj5nAtSfB2adD6cgsaGUo8ysPJxfane4QaG3u9HxkCqQKBEMMWTEXsgFCFZ6wc32jgMBPc",
  "key23": "5j1T5rAkQb1uomT9WtVTfDNmTfxDvJrsPkCLr8MLT2brzc7hE6YiADBpMZXguTuqV4vkj2GWsK5B9srUDtDHonkm",
  "key24": "2ibLJJLqpPfppB1oTKuW5eJEeqnv66avAiLeNV7RvdXsTEUUk8TBWtgMp4uUEG7gvKdH8rDvaAx9HyT86k4YrPdV",
  "key25": "5odMTt7R9e1LFVH4ck5J4D2VAZ5h6yk5PYVKkxGHwvW3TiHnGJA35i27UrJwQoQLjHnZ9EobPyJ8wAK685xvAEJt",
  "key26": "33htUKR7W3z9EV6mHNtGKkF9oevA11TMLywRx5ofSJmpV6d8KC8y3Zb3GGVxV3Y77P1hBhJWavZUtGhUsVLFsJgt",
  "key27": "2u5txB3WvHd3HNh6SSU2gng2CyDdnkFEd3b9Ejbyd1SC2Xw2X1QkNifBJtYKGwNYwrittjcc5rTLY2f9Gam7xZyx",
  "key28": "Q6pZkQtCKEK6iBZgk64tkQzQV4Uu5psE9tMG4jpDo9os8VkozSDZkeu7gQxJd3ZhgHMMH3LYbk2e41kzYt2HuLq",
  "key29": "57h6CPkt36R15xg2GPfcs8bSh7BS57ey2iGhWeYJde8RJNSgbsLuPHbQtwFDMiji3uQHf7VtX8uDffH91ZectmcN",
  "key30": "5Ki8vrVs9ZsUR3GfCZH2PtRXgxSGRV1mwZmCUN43rXnkZpyHF7hkGsfrTajZ5LM88nsFcvuUy7jc3Sg7P3Az2Vkz",
  "key31": "bfFD9XpjwtCggS3A8cWr2VmiTJo6pghtkTdC2fBT6a1SBNaMAqsSjF2D2KpbXQ6w4rwpq8VUK5igyKA7sP6Eb2h",
  "key32": "87qjnhhiTBMimUGVFBVrJ3unkK5uK4BirMFCpMsZSaVxiYcygTSySfjWEgUpAi3pkWjQ4hPgeKtRYwLm45F3dvA",
  "key33": "2tVZzd77WhA3KCStYxsPt9W44eRwRa3Mxftj7fyuAYmkX9drJgZPc9m9em5om7V8RVmnDxN2cMHQigjGB8Cpp4uC",
  "key34": "2yFkvoNS7XdDRBEczv8C8rv9YDe3tPggi4ixMSRiroUV99y4GVvodnB54y4jmbnJw5wxe8EYxRt3hHeZz91SPncw",
  "key35": "5uEvzWf9z7SdmyB3Knz7puPKB1Vb8Y3x6GYYjoPjV2NNidu9PR5dpBV4SKDAzz7GFCBfXZ96rWkvTyjNXD7wdqcm",
  "key36": "4AmPJBysyMXxEAoQzEYw8DoriAMDWMrbMnpKKzxwyupMg1g5DF9drCgvowq9tzNMAtWi4A1bZBFfay6FNybALMg8",
  "key37": "5AsazF41BasdErrFnNfkVyBp5SNKzN1opnUKshUbrjPvTfGV2VFBU2zZvvSwfhK12Hp4wDwW12MGttGPbhM3PZYF",
  "key38": "tJJbcUxwdspKgeCxN3k2QHAevXtzdnWmdVX9QVEUL458BRHQggkc9ZehJyem14VM68MUHGRGjQ6G47ZEpyex3Sj",
  "key39": "4iqsZobaGGtmEEYVy8mJPoGEnupxSLmmgRmCZAFha93Tki61bGHnVAqUX9dHyLzSLY8W18YhYYgY3NkWmgNx98R9",
  "key40": "4WecMo1tJEPZjtArrzHcmfvDekPytkBbuNEuvrhNefsTzKzs8QnYqaQwTPzSnHTicZxwxpeTo4TK6AXMs1RRrPYw",
  "key41": "6qfWXstVcdbPfKdr7uPode7CHWKYiN4K71E5d349gssaT692k7FoPHuU365hc5ZSRfpir2jwtbXcUKbMR1bCpx6",
  "key42": "2HooJnF6j4zAFBjfxM6WDhszthzrayeRANpYMbX4Zj5ecuwMGzgFbquCrXdikSQ8VHyt1yF4NAUAzwEPqAPii7aR",
  "key43": "2HYgQPa5FeDuCDU6vSZEF1B817noXF6PZJD85YWiyTH1QFttB1viCpnRYGp95w26u67SUV6nW2nv3X7DqQ2UN9F5",
  "key44": "5QoWyfPo2NAjM7NvsaAgd27NHvg7QM9SD3HeWvMaFUsgQh7kpEUR6DrJmmgtHAGiQiMMz5tegPtVbzp3o8M6JyyX",
  "key45": "umk4bsWRWjGfxBqR6HUD4uC5pV1wytzoevZkGJauCRkibGyV9CvScZqmYaPtwCPiz3qsmRPpmZ47tDUB6ijEwPQ"
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
