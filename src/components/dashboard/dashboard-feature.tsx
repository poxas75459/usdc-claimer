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
    "2cJ4Dz89q9SxVWDpiQGfNpbajmd3ZFtLafhaHJgWgcofZwHQ7XvbNWTaNkvnMpphuzHxea415Sko7oeY5JFVP8Ac"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3unRzpuCFegHG6VKmen8oG3gPyzou7FPYse2kHfHQcojvZAnr7kMcsGCbrWAtzN8fPoHTbeLBdbMBCAmBw3i2Eq8",
  "key1": "33y9pAReiPrHqQUmCooH3DQtVz7uQW6WzBSpEgPZoNZ5MQdPsL7fuv7fWrCSgQGTDthDRCqMUqEutAABLHuRNvFP",
  "key2": "2V3Xv4i8iWZ1weQkcCM8yoGRVyVNJJi4hcx8TKGq127zRC92BvzQ3763xZP3EbuuTqTSWky4ASnpF7LRuX47W4pF",
  "key3": "2p6wwE8DZEgLoYDBzu7Swj84KGyigGLUYX8jXDXkazJCMcaoHvkRK94ETUcMfUcQMFKbdzdzicu9r77iSM4DEnvy",
  "key4": "3okeLbZcJNVagBZzk3N2RK1GXe6PexJngi1gzkuCHBwLUgwT4WJB3pabMqDSfMJjNU2ZrQhaf25r6Zk3gqcbqTbN",
  "key5": "2xreheHQs738TkZPs3sdQRtMpaWFbwWfzfTBdDdQxBEz4SYtE79vuyti3fEagfpEEtP44VH8csHw3u5SmrYnvvWw",
  "key6": "uzybPJWsvddEexhmzqGhUwBGU6x5ZT1QC9Hht4yoc182k9YJabgK4AE1Me2zxgsogzRAUxu8Z9Y4prEyHVLW55g",
  "key7": "NEGvqZJh6cMuTPP9deU5LmRC4ZTXkjbX48QYNESYmoMdL3sRqXhxU8psdffR44kbgY6d8VSRnfkBWsasC87rT4F",
  "key8": "4xKbNe3TeqocFGAwMD5h3SjwvhqFzNe3x5TYo5me8eQgegkuvWYfQggXnFJHsHJ9ZFwNLgjZxDxQGrvtdrGHyvNx",
  "key9": "oKy2UAwAnNe6t9w4vCLUXWcM7QExdDLYbccjpd7K5DRC8YEctUA4Xh2yLtFScWaMmFKqhK8cNSNEtXUhhxtSdWd",
  "key10": "5NUjmCnBrW69JhK7V7ocVHmPCYZVKzGv7Am7RdM8dtFnhdJhkf1qUNvdi9arV3cVAUGJMq941RpPGCEEWMX39Q8h",
  "key11": "DEF1H1sJky6imBWYJMXYKyausvZ8GdRdZSYhokoQFLP2xZiJSbSjftsw1JALfnRNWbzDRvA68zuwUTGDK7qpdb6",
  "key12": "4mQApBpxJ7G33aVUY2V3UCGTAHTmg92F8k2iv6yokSesso2E5sJrHcwkSS7GrRCvqD7Ti8qecht9148wmKJzsmmR",
  "key13": "3NwGpXvxjbdc8cm2db164kiyq5e23xqgdom92sGbXgyYFFMrQ4vDhqYNELJwr4iM5K75D3pZkjjiSksgb76C7GQ1",
  "key14": "3CNyWUJsMUTvFwWEsjhEM3372qtV2FanrViss8CB39ZzaLJ8dAPXNgce5suYeLirx5nMpCePGkV8awvRDmzztEjW",
  "key15": "25FrTC5GeLiAufFVqGmSYJggBGhVKM5D5nMVZ9Wh53RuW4qgu7vQhkiZCmnw4tZVMn5TVaDPBqmKgeu7HxwUKsqH",
  "key16": "49QWgUR8CNiFRA3oT1X6NunR8zTVFuuM8ygKrcMKQfBGQ4BWY7uhD58bbKV36ZFAGxPhLaD6xHFH9X44rr8i3oAi",
  "key17": "3B4YxKsx4QBy5mmvEzyak1LG7Urih1QRVpKGgh19MoAY5LmtchowPFv5ybDp15DEFf1Gg6iLBERQ45Kd7GFvZbVm",
  "key18": "2bGcjf2H1hW2KMSHvS428Eqnw8Www98jh7gXiAZ6TJbRRMDVncv2VhebPQNnPomUjC7B9ACgbwunNExZC2k6RDCH",
  "key19": "9E3LytmGk5AbLCWyvuWnRb5EtXtFKMGkinUotcQewvbWhbC4bMJhLYRxQk7JPEPP8LKdFgQA9nx8srWSHvfLL58",
  "key20": "2WwuTx5PsEXdUqN7zAwn7RpaSPNqtbAKYMvjmhB3uFha9DTeRYkfAFaKCUZDWtFkJHfwmXKddwGjVGq7XsDDhcRi",
  "key21": "4LzfBzk8hXUDsjKyhFqgMhMZM7EdjXSAR49dhLqBtZWptxE3bWPLLaNF4Ndd5ZrSDUfkJh4n8QBHLzN2oP92as4f",
  "key22": "2uZZPpdoxxVVAMRKxQmqui7FUtMkWyysMoJASPghqHiM7GCFiZCZ8okwxWs7dBGebuCbVqvzj3xXHsDYJzSfWADs",
  "key23": "4SBWZKNWK2uXGBwkUZgZQ2gVGZQzw9em4KD98r6LMnSJdhEozUCaG7Hmi9AeijGgo7gabtHuMB4j9LnUpsztox4V",
  "key24": "eXorXFyhmxRbSCrRbiacTz1HTXPMkWgWadF8FekFPNRD995x8GMRNhk1betyrNnpwc1Lm8c2gTMS8aJqCfwmTP1",
  "key25": "5vRytEfQ8zpBBW9JduiUYgtQYvrKS89v73p6SFvcLubR3uuCQBoQDf8h11rz5Vzj6cVkxGeaXhrQUnq5BK3BBcfZ",
  "key26": "MXWzFkaELo3iwPxtJwuSnSJUHAfeqLrutZiV3GzCWztVR4XVsPQiMhXZst3MSVhdDbTiiYk6q6M9xkT2qmu5Djv",
  "key27": "3y97cEWfDxXDqiw8eUWWxV8fLCYE7w96fc1D1LtjXhZDf3NhmqAw8JUbS7xAn6Xu6bFxRyYoDwufw35DPfMCvmny",
  "key28": "hyz5Pc9EWezJCNazxui2k23FTq72PWdvRmE7fP1AaMkTQGvqvNV5pkgxTcLabSsnwcWpgzmTneu6hsXwQUM25PP",
  "key29": "4Yx16H5zPGeJzeqvLHMEEgAgcmHQjSFPsmvccaDcnTEpPcZoEg91WnV95X8ZTqCgHz8Q3QYtjXjbcbTs633buvdV",
  "key30": "2TGK69G4Jk7gYo2EZ93C6U14WrqKgeUD1dLFZCXD76BEYNgygpcbBKM8nZ1xNbJgiUyBKUmoXbxrtjWXkHB4WTUm",
  "key31": "2cmFnAMdhAopRNuF5W21Z7Zpy68mVaWpK73raTUvaLADP2f9MtgZS2J17trotV3619tXD694b1iynPpumcK8BaMv",
  "key32": "5R6Aboys1MDM33sR9tcc4GpWtjm4X2By8bydCMEKTExWwH1yGmUQQdhEiHP5Zfpo2nUKHTxGwKwewpZ7Ud8JF8BB",
  "key33": "4o8NV7untFZPNMJZwbKP1Y4wVke5uUGwLKoFhESJmUzKR3CnUMh3WCWcZ14bRgw6y45DXjXauJhWQvxgq18c6ak3",
  "key34": "59iVQYastaTiM7UUfZkApEokenVrwK1HBSo8XRBczxBU3RgcfKmmHQvoWuxtKzetjsssXYRtTYQELt7j4qzCTGZ6",
  "key35": "47dsGhVUbGpXLpWebiKE3MvmURG11qKo5PCe68GXimDjJUMg7nJdSHxicyzsUk8ktFpqNkq23Dsq1w45VxyTHHy1",
  "key36": "33X1zXdnY1nynJGzz5P3tXuKtxQUNkBRc7Wgrb8XqzdsVXoFhi6qehcK1XV9YKUhPCVeqmN8V2reGYhfXDGrAqsK",
  "key37": "XDm97VPLf6Z1ryYf5C85KJMri4EH4589VGE62p6wnNQM58evW9k8vk6n3y3G2CztjHWJV6yr1MMZriYyvXdux2F",
  "key38": "VpwoR46oo42iw9MSYxZYH9vqvL5YcE3fiJJpG2z2qzDmHVbVAoqCkhNykCPXmdMuLkR6sueU4TExDyocpqujahs",
  "key39": "67HTbB8jWupv5BJdxWMe3uQL9QR12UC3ziLNcJJTw8JtNTvFMXftVxy9gKzmLzeCGq7DTpFciZXcDzpXAVR3zZcA",
  "key40": "2HVRL3pgA9m1FBfXKHCYteVWjyyNLaB4rfvoxMSg667HR8RsuA9VHATcgKRz9UVQYPQVjiGyo32iggwaZERmsrMe",
  "key41": "4HD4Raf1YFb7wsx2bJoKERQSbb2JxWhivDbECZDKqsHREBPHxvGUUmYY2KCBwtuqHcybzpdyQ2yFLMY8EJ8egXP9",
  "key42": "5FVpBvPqYBFPxdAjW6NUsiptx5CdJX29tz2rGSkHA9EEMSzgwiQyFNrGDhZpPXRs8aV7sUUUzCR4pcXRVeFoQCKY",
  "key43": "3cbRQqaYzrdKymUugWnTMfR8Hw3PmfuCrGG4Z5FBrmDpX63wUH89umeRRfKJ3VNJp8hTp7mCMXPobJ1HkwFqh5BQ",
  "key44": "5L63gi3QeQ5eGc9d4XZJwUe2gcD7Yj6uxLrL2KZNed9RRzpjJDf6LkC6ASq3vM13VqEJqLwxs9zRJzXmzyFYXwfD"
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
