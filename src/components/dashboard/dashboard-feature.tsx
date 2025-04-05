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
    "5EcZ7NxiYq4wm4QDA6qLq7UQYkiJKRXdD6uoYpPj8ZjFCqiZwyRyBzVzBqTSaSw4yA4RD3JyDjBinPcKTzMhCYRM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21HneVh4QPW141ASNGT1kgcEJL9Vg41Dk8iErh4NXxfTNU3ZsZgiVimpd3unpoxKVR8mumtRcCHuocXZZxey1ojQ",
  "key1": "2fRVKedw7Y3r9VvNFXvQp3C2DNP4s1HrcHTNJfpGbj8N4NuQFq8cxGaCAqipnhD3LEWYHqHx86dYDsMxaHnrRfp6",
  "key2": "st2ibLGPtpsbRjKYWyvTrGqTHXY2bu1gxPEquoGZrm5hFCdGLEMSxjWuECfenHK2JyxgwxzYk9Wda5wjTqzWWsE",
  "key3": "3NVsCJLMrMD9YdTSUYJrpoELhHLM4N5oL4jYsvjBjmdpXhSLr87ygAySpqiSS6ZXeobrwEaac88kC2NPpAELPFJ5",
  "key4": "4NmSZVYERnvaUWbEvqPGK774EfywhJEkTNtGG8NeQ8rZYr9YVaZHdCTGaa5tAHBuSERNuLzhPj3bXfARQ4rKpx5V",
  "key5": "5i41cbPvhNB8ifG4tjcC75E93fhdwcMqkj86jCPwy4BzTJcox8T6T2SoCiXUR1QJsMqYaWAunmuB3UWTPDwkYWYX",
  "key6": "5SqgjwMoDwZD7sh3gx7u9MGvfYuQPqCnq53d8QHG32cTg7tbDASYKH1C6uy1Q9RqdjwbP1CdbLLpk3o2nuEX6eCT",
  "key7": "8HiHhDgt9FDb63Lkag4Q3wQdChNm6DHFtNm5beyVYERGvRidokFzPJZLMfJQk69m84GcEPQeJUZocGwdGm3iDmi",
  "key8": "4mstaou478Dunui7TaVKKjXtUSz7QCGKnKebAAG9WE66ziggkQvvuprbb8GukUdRk5T3ZPBSpwmm39iHpJxeKV5y",
  "key9": "3SM48JrDkATiP5x8RSeshrr9zFbpceoGQEWBTLaS84HLHGLfuweq8rgqb6xvxsfVmM5CYFHajsw67vwV9JYqfKe4",
  "key10": "5owJA5kbHYZ867uetjJEEcU74PpwBmBABJGz7TTXwQhBdUWWVTwRJAdjswD8AjHF9mfLm7rzVPZr7PjvksVSzb4t",
  "key11": "5rofhBYV5nXMXswbQddzEoGXdbe7HCNpwbM4mgKN21wC3u1bsfTkm5zcRboiZABNHB6G3z5nBgi1nuP7BHx6jejK",
  "key12": "5Q5fT9TCBdPbRgQvNzPe9QwSiUgs2FtA7r58zNJ315SMvDzLjJnMcJWV9aEr3W7Ra7cDZeapGkMAcS54Y8ED4Vjk",
  "key13": "45reTHjjyhfGk1U1jE5uRw8KJHmajw9rYKYE5ZNP4Dxyp7bHnTXMyZTg3pMe4jaVaF9uh9scZKA6axEQwq2cP3z3",
  "key14": "3NMEDhNCjBwwkSMn8s2Sq2ymCqSSFfz5MxYMLKnEqszgzuo93NMqhqXuuu16Tzo3iaNPSBrAJAqXWrQY3jqpXqU9",
  "key15": "2kTrjh8SfVNDEuRzSunAqX6JDSkMxKQ9vfgbwR4fb75E5LGQnSesuuw7ueLiF3qU8q3unGwe6nTjE9UqJdWipSfe",
  "key16": "5u4Rc3bvUE6rbtkVxc6jPyW6ubTJXNdzwjhY7mNZBLuNoEAoFi8endNaeH1ys2bQ8iPf3NFv4pJa7RC9adKjXbFC",
  "key17": "5bYAzxKePuPydMGAnfmmth2QXnJ6wz69fJPfU9QFS45rUsTCeVSqj4zaYEtqAqgyuPE2N1ru6qWWfo2q2YfCrRzs",
  "key18": "4R1nSBFSab8gm7fwYNGEFdkBk8VGuQHkMs6gaZB6SSayCXAChptPQaksR3NXgfTehfSiRhSGvau2Q3yDHk7qirY7",
  "key19": "51d1PWQVuJ6NXGeyBddHsSeqSNdHaj9fCi4a647GmnpM8FJUvC9UkGWub99k6VUY3XnfJwZitaaEfwgsUUQLRLFS",
  "key20": "3DRyeppz7a1HqVLt3ZqGG61Qds9DSPJSWyxD8vXm4hpsVHxBQ1SrhRd2U85Ygcmb1UbSGBmyQy7xrStwyoTYhSpd",
  "key21": "5GoBYrUWaRSq2pZxFtgbipGzf6pLsHHy9AtPe2At17esMsv8U1XECnHXfoRkpLvrERH8coaHtMR99mBLbp8z6k8y",
  "key22": "wwHYHt9acR3U5WN3b4nbH4JGcpY9PiYPEoLVbJLtAigvp97Le8EgoHFbQhVc2NvLfvc6gmFqnFig3yGYncwBBif",
  "key23": "47MFHcEFJkEk2c3795VTADXa1s3SqbDzpeSaT8sscv4tLu5LEt2PpMvBk84zRiEKxR2YQc5yZu7Ap36AgcFaGQrA",
  "key24": "3mQACFFmrRHuzo888nUh8xKQWskCi3pTNSDuT334SZsqhCY55ukKxAfPKoFCAyfJptZaiU3MXt33tpsD4ddzkVrD",
  "key25": "3bu2EY7a4DJ7ih2NtdZ47aTaZ8i7dadj9rxfqRED5UuCMpvuGFph9oHRFjDYhSju4urW9escw3N1M6ByMuhGKkqm",
  "key26": "3jkHigWzy4m4zoThCEXHBUhmATdWBRUnLRUrhSuvf8rPw3ZQhToij6ctneXv8H8iy2uzTUvnKJo5BUp1P6MWjxcC",
  "key27": "xfgKh4jgrwksPaYuwa5tuLDhUq4JGiHmLwPNCx29N66KGESF92yR7V1cjrHM6JW3TQJxM4yNnvrdzb3w1ignpWG",
  "key28": "5WtW7BHkNrz7tr9oRuryC1oVXMYR43ibzTJjw7bX4edKBhiVCKeGttH6boC4oqn8aFHbuyHKtyJ6tbWvwB88k1Bx",
  "key29": "5KBoZvHMR3D4128jA99MnoA3StXjGBdZxcTpZab1UpBmTWmiQuK7Az6tCVzqcvrXBhnJNJtC3n3k7UzpWXEowDZw",
  "key30": "4HGZtoRuuKaTgk42rY1AKK4gUVUnCpp8jdTeuuvmHpqmaVXxkgWcGDWSeoQYZXQgpY9UrrMKspimsh2Cy3jCobih",
  "key31": "6Tx8B5PcDmmsyFvdVinrdA5X6jAWAM2hcga98Nhs8L4rAPYQFhkmbTGq4iqEnEzD3R3BiqB6NCciUKahdQgCokJ",
  "key32": "5qw1CEnRME2aujhYXLud6xAuyDre6HTginSdi1MfrnBpSYVcfnpiXJjq7enNZjphGYiQr8SdHyjbZnbwrLJXpzTS",
  "key33": "rHdzvuGsauBP2b4AYPsPCM7PqZxJpEY4BRyPjjPThFzMQpXLiGEemaMwNavoTjgqLNWu4JKCFgr3GGHhQLGouwb",
  "key34": "5mrUZprAw1HarTsHD76NgeXFtS68y2eQJAYhG2GawYNoxiT4zTPCYs7CshhjptByuuVAuetSsca7citrt5qBdbvW",
  "key35": "1zWqu9JJ6TVMSKh8r8H9KSLBcoDGr3CACZahstBBFmFF3wQQMWMHzrunwj4V1d51PFjXMRNyaZzDETd3rRyov3r",
  "key36": "2JKRjdMJ85hDwhjvsZBEQHYxQNzt1ifCh5aCFhASWRzeYqaLRQ9rpE65d6VDJGWU2gL7Lo4hHg2MK28wTLyE6wWg",
  "key37": "4iksKtfJdNypgBDK5PxRuhg6QuroZokUH6jQV38v1RAtFBiK3BLtXCXSx6MX14aWvFQLBH3numgssUgtxsDwU2iQ",
  "key38": "5PDvMRUjJCSFjugtrcPTVv2J5zSbqC4ZPEby9LY6d4vxZMdTBpCnGKGnm31S2FTGYXR7PmjRqzLocLY2NKKsMymP",
  "key39": "5gbaThLYpYmhCRwsx5eNaJPK9qZ52TCG6Dt79yuVUq2M7JwdKPos8qqhfTCMtE7S4bU83JWZb6QYJ6YTkAd5JCH6",
  "key40": "2QoDj7NUC1gfvXi8C8JQFU8DLr63t9HWqmZQefn9TagsC1LDxzMeog7xWdg6dhgEPybsMKim9DUB3wPUTyaJdUD1",
  "key41": "5oweyTAhiVoPxqoo1BMQRygRWrRthWgxNaxdJb934ksokxbNL4joRd3VmBTYnCQKn8snJzSK7qGFUdnD1BkJ6ufm",
  "key42": "3AC6nW5nWxx6bq1sfz6NRfuTaYbdqoB4XLT8B2zptjnWT4zUYaDtp9yjw7ZvB6WSw6MLP8Q5hpDoZ5QgCSKQuWDS",
  "key43": "NYmhWADJTp64jhLbvpvyPhqxyUFxsZFzNtcRYXUoQa3cVLTBLRL6YrHY8Q1hoBddTuP4tZsn7hSRAC1rVqKH8Mq",
  "key44": "sXF5A3MGwA4rN76RQdYVsBtsbQtRpRoLmrxxyQQrM3g6hWWejNXQHcTsYAMhq3b4zxhBSro7mDuiDQGSoPPvxA9",
  "key45": "34eu3kCkFbrJ11ySjDKwvivtkExzMpNdMmfGPH1csWEvngFf6L1UngqrNxgRAy56LJPK3Rud3YqDHsMGftfDnakV",
  "key46": "43NbNKJJUupycjcggBrRkf1coa9qnA321iwPdLnrpjXs6nUgehUTdikVNgWdUkSBBVoZDx9kHghRWRdG7cdkxB7x",
  "key47": "4jynBGhSmskd2nsmMT7242tN3r19Btwn5q4cLKJtxxt3JYhJyL3yKMvos6Zkq6fQenHYRqWMGL5Jnt6T6ntTw2NY",
  "key48": "44FgPPQSDsSFtxvarPE2m69iYxENnTs1HSFAhDH3UtnKozze47yaiyebMj7k4Kweb7YpnnDBXKuuUqUD1da8mrGi",
  "key49": "4da8DiCHTpYUBwjgi4saCWehEC1XFuSQHNKTy2btGMxB6SVYmha1vKtHYD8VELm85w1byrX9zf88cw67ZbHatT5d"
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
