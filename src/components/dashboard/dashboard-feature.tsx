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
    "5R7uZq1tpXZWJzRxuagfu26JKqfWQgNh2XUyJ8jgFMD9JzPLPUEN4ZqsdNwkYdgp9SNoa2DsELANN1yBxnxeHASK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gU5ku5gpAoHbrAxeuS5orXromQUTzdjHm71AhnrdsLZTrjVtGNZzGZjsG2Ew9HfHst1vaJwvofqPAqa5HtXBBn3",
  "key1": "4xtjah5yX9TEF55wgxNAUpqdTVmiry9hsTPxgy7jdTiETDgemYQAhpWs3CKz2MurdyvTt25AsLAKmKNG5cx7E8yA",
  "key2": "3Prep6bM9sD6tAAcn5ZoBQzHKUUgeGaNpcwr2gM9nbsxHZrCzVPWV9vUpXiWhyQhCrsEjX8jVSzRPCQQysQQ6tch",
  "key3": "61Nf3EuKyq5tmMi17YNEXu1mntTXNfS2kiERs1qs9VXFaoEDqhpUBcuMWMR66iWkxM6hgz93ETPjzPdTtJSH38SY",
  "key4": "32QhURrUgY9ijuW8hpjxN8guwSrSBDY6eNWKex6x9UqGVR3tVJwUATTPt2T95rWAPG4cTCqZYJk1ztRAvWA8ppR8",
  "key5": "5v1WMqJT6fDeBpd2Ks1yJhrbNN4TEWFZXT3uZHZmfDDcFSDiuQ9CAxG7t7SHuNy1onaUGnsBmhLBBGFuxB6QSZAX",
  "key6": "4B76NQEdsGJmwzBqe8hJ1XLso7Xh13VeLsU5fjsUouQFB6iyRwm69BHUjHXBxUsCmxesR83ecSj3EgZ4RSmrunT",
  "key7": "6V4eX6E9qCewogyykXfPSBTaTY6e4hZY8p6ENXoKT68GhUiXQDmgpzAyTeMdtTtN4HCrMPnpk7GSgSXi3ZxpqSo",
  "key8": "2eg7JoGNBCagAWjRayAozSPdgRFtfmadm8c9BdAXxLEEzXpGwAYQMSrdpWWEQ3pEfmjpBQpzuV1s16TAxkvmrJY8",
  "key9": "43edDd8U5LuK91GiXyC1nyquFw7qEHxgSqY3dBayWmXwMTTjNRYBJAwVB6Koi6823BGL9KsQMaPVcxACwgUF88Ac",
  "key10": "3R9ZaGKm2r9nbDXGyQBeiSp8Y1YGQMaY978qmDaxPmwwdpKM3aVauMCVqbM1VowzLnrext78DP6WkSyQmYem3Eck",
  "key11": "3bxs1JGBkK95CKm8iyDtUDorkUTvit8VbWw1rJj3xmFZ67Zxwy5Dqd4T7wNjrnTKxqF3numd8KqS5QBXNktFinfi",
  "key12": "4XEXKVHDTsQGZ22R7NECs6vLRf4T9zn6jcuapiRKUWr271Yc3Uyh3XcYKmE55tMThHV8txd2pqJGN3JqiWzmR1BM",
  "key13": "5TodMKvxn2QcPMxHi8NZrFY6JyLXjkCrurm7bw4jiiadnk8uuJTSVPBqfhqefekF6jY81ptxZprwwLGecrr5Zb8F",
  "key14": "3rWHkZpUPjsfeFURqMVugjBxb2xf9r4mhiyCnBjWKkriFxw3xSsu6yZa8WgPY5ChEFoKwCTVBTSryiziKv15PFFK",
  "key15": "WCGAECmMQUBnBgN3BkdHdL3RGW67XicFywExx8nSdmMS1XNbWBh2HYUPjTVM8ZwL2KiNoVmhPwhJDa5YkmNoGNs",
  "key16": "5Q9pvzA6qQNB4uNPWjvccyfhzbbzqmCsj7Fgf5koJC8XHZAmUkAGLdMNFPQnTUK7HFy4reg7a8RmHDMoBaz2imFN",
  "key17": "hVU1cCpA711NGpUTAdXAAKiX3bKn7ZfkpxoVoWPAFhaXBRYteeooM6ndRDGUibVd2fGNc8zTvSaMG9bLXvopujB",
  "key18": "3Whx2E6ZC9peNXjTzXCGUAdzRj1HhrMsQT7pTYUHUVVVUAhmwHStcTipsCDcFPnsRumAiTHFNJTPH6QEreMmyMV4",
  "key19": "5op6X7YRSY3xnHbFaHRAFDvpJARzGd7HLR88iVwfiu7b7dKFqKTGQjboYUNKQVZPwkKm5cKKiEv3jqvdMRigjnhn",
  "key20": "3zYPqfELhz4xFzWrFC3DpyCdhQKjqZdeMofbmDhEbAAB2L2mepoSkvYpmNGZeN6BiKq3Sno9oDXxQJLZTfPc4zN9",
  "key21": "4Ms4QU6y5DfTdNNk2mSavuAYRzhQAcaKRpJPuPRD9FxFEw3VSvpmtjMWjjvrjtz9DqP85zQfyZEgZ22whqEuvT2q",
  "key22": "39dSMRTXNRdmCbnfWJE9MjU8WGciFYr2nDGzZcriMMo9crZUvDEw6FuSpSFfuMuF8vRuQk9TaDEuMbXgsnNAb2GM",
  "key23": "2NRi3B22nHSyZkcTkxJvDzm8FxRQbNv4mPTfrbt9PYPBfm39zjwrsnbqvCA5Mff4fyjeo8qFUGE4rvqLxusosG7t",
  "key24": "2QBtsN4QA76cNX4311GTvCrxp7g2xXKq2Evah3QFzpTKCNJRYfM6Rx9nvg2T56m82AkMrGtFJRnP6D5srRe2fc2s",
  "key25": "4SU3ZP3nEsj8hAzunBybPRuGGak9E2ShNKS7733pXHcrm5PG8Hp3FLaaK7YNzp8zdc5gm7iZbpxcDhWJfPRL5Z9N",
  "key26": "4WuX2nGbmbvkdyhPXZwsiyNz8eAbT2Z5c1p5NyNNXHMKmgUijwjy3wmQqsnkGko1SWamXgHUD9QxjKv32ZzJkKTm",
  "key27": "d3Q5UpMZDDiduvxZtEZxXAfZLDvUrMs8nD1Xisbw8UutT66BEqDKjVNQiUiDv73rZMHxQ6zCPUtyJh4viGScTay",
  "key28": "5Y2TFbFBz6p9aokXTGnggRrvpHJkcXcq5jxQuNSDDqonNkXMXueJSerLag7U4NDZXNbysn7r8sU24HNUNZP8ytdm",
  "key29": "5k6NgKGDDjxWhyUV3cSSh6szRX3DcPe9Rct9STVTpJoCx4ZtbeBmo7RWzokwvztHPRSu9Y6FeyEjsYLhk8rGWyFH",
  "key30": "3z1jXUzmjq6jiVaGaFez7s5LvhLFvdnmjUvFhRpdqNH5ZQECfx9tJgY3KrHGhYVREgRAkPyV5gFgH2xJ73YHQKhE",
  "key31": "WrjdF3A7oLEfu2ChuC7uerShaitf7PFMCHaG27pBgoE9YsaBPJWSTHUo3Vq5eTpYC7rVqdra7PQrr4ZjyMjVUSL",
  "key32": "xe4F9VzxAJhyR9zEbaWPKJBHaV7ioqyhMNynwf5JjCH1h4MoKpygrGBb4qSHkgsS2Sm6bXPaNPdjPgUKHhYRsBa",
  "key33": "59wi9GULDMcWhy3D8DtRPZiUUgTR2JDfsJaFv6EfyYNXMbzCWMAVXmWimXJfqJ4zPdTm2YSjdedqiG89ysyDZG7a",
  "key34": "4fYTQVagfkuGuXBBWztP7SSAT2jD66UbtKmazRM5iTn7WN6xcEbv6ehpmpUT4mbQKCThBWdSmFv2isPhR9qvqiXd",
  "key35": "4UysgrWbaapBwXee372squDh1DHcxoDmUsEJcGXLtgTZhVddSZ7wwGcMp1ohiHgonQuHhxpYF3Exy7GnboFW4mES",
  "key36": "4JPwXxP8hRZjYD855XY7qiKpngLhURUC9bcCNCmwLCxnH7bt6SdivDKSqJVV3SQTazGyN1RqjHwZ8LvoaRmvVhgq",
  "key37": "3R9ibr6NAJfCqCdjioUoVKfoFnD257vywXVkdbeQyy3afS3Mm3syCBgkkj3hAQiGvdbDa7DPStSxtbJD92k16DHf",
  "key38": "5DFjGXEGEf8UMdVvgjFf4F4eUttJaLw72rLQR65R25zfXSsu1QdhXruSnwkHBzjbFyiXaQdGrW6Rbt3hXeP8Lf1x"
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
