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
    "5MueT85TvjyddC5DfHqygTLdY1AVEUpeLHVUuJ77dg7eNUsyeAoJMMBBb1nJpAFvDhjaAe7FRKUVYuPxGKtuoGTr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gA1ziprZGCT2w9bDX3HzgZYRojxSk3JdQCKC5QFU7Jj5HhmHxfi6LY22b9DtRMj5reu3NASNY2L8WcF18g8XHTh",
  "key1": "5A9cbKtjbko9UU8PvnWPJd7U6s3kCPQ8dR7KMnw3BaW31Yx2Ab6Tajj6thkygerYFmYb7zFzFdGkK6o4G2qr1uyN",
  "key2": "4R5hVHtCcgUr9fmLBcM9Y9hYqMzqpdLJVG4aknvoKXepX5sPhFNEVo5ZTnwE8YrPzmtTsMJLfTAKd9f42ewS5Mrg",
  "key3": "37Yi6unwpkKnjMgS3XmNt1FE5fkB2uVV2Ze6vhb1osaJNdXm899NU25FgyVSJu7LLRmzSkMYzBeebKdZG1YDR8jB",
  "key4": "uD4drNYMi14DNkCxuJi5QeK3tbrqcdUvJvJudcyJfniMUMijBs159T4mVKKek6dcCMXHsQxYAcosrYUUiM9VHJg",
  "key5": "4mwWNFZhDAmrXFiTbFeqDgjfoKvCMMNPfNWeTzp3UG5vbNNYhw6Gz4Zw6DBXcaWuWzewvDkwLSQizwMH84Pke55n",
  "key6": "WKS5pjwkgqRdSooqyR1qeuWQ69CUUtRawKsQ81JLVHsSMPwzNbfwCpFBqGQG8stZGY9hqTvE5U1NBixWrEyJ86r",
  "key7": "2ACHMKTPtfZCAe5M7nPFME3evL8e8km3fWhriUowoSqYvTAdYH4vKn3fysxGZrC6VpPa19HeHicmX4UJj4R7qxth",
  "key8": "3CHKND8812NMaPo9kYHrdvNxfTD6ncwdwguE73GduE65dQj8Dr2P1ZDYH5RdDQUb6yrgynRfyWVUjMqvTTowbJK2",
  "key9": "3ZupGi94w61ABwNhkAX8TcyAXGAxGWpt5AiJVBAXDXY9MoYaKtwjoaXdG5H8cjvdg4JeqRd6ua27bi51188yy7hT",
  "key10": "43cdeEdCbdaV3BwCuNmN8rMMLeXJEExbAcFRqr8fa8LzAZNkbv9oEfAWPrXg8HzU6Nx6Mg7sverqxCNyZj5se4ZD",
  "key11": "WzPK2eyLreBm4MfoqdSnB968SeWCXBZtoDxciXeHqDcAQeGcVRFcPzDUGzFDXzrhmz2UmLseSVqG7VagqRUkWY6",
  "key12": "3zudm7jWmGEGhpoGUVrYrMZjix7zeY17eKQ8QwqewioU6vn2hsSJ6v3Gedxjnt6GWQ38B5Q4vTvQvAVaJ1LZNN4N",
  "key13": "5Q1DvsSCkgNtta9J2XB9xWpwmS7R6on9L3jPwcF9KLxsUzD4ZMFy88VmN7W9VZ9crTDLo4KkauksncsMYSFn5w1u",
  "key14": "5iUHkEBgN2LiphCAqVEk7bfoi7oJisBCpSzfCyoaoAGCYXQ5BtvyAkNudmWdy6P7nC57TGvvtk5fFBoKetSbr7nc",
  "key15": "yVyGf1iYpS3EVhCbvxocZFipXWPRzsGpQzLGhfJFTGyiudrDaG7LsroeoSiuWJfhoPuHXQFGAzfubxprWoQX17c",
  "key16": "4LC4tx4h1HN45EgM9qTTybQqXBJWvdpBFRYWRTaGHECGNMd1AeNjg3Mz9TdCiW9vFSL4C92d6KbrYooCn5eg9K16",
  "key17": "5nFsgHMpGW2d5v67HCzGWYmitk4BYuP3iwNnbAVMwPfPhZTP8wWykTfHtAFna5kynXAFAkhL3stk1LMmQAyf6Uvs",
  "key18": "5uZFPn8nBSEq8F6A5ibFQmuHGYoUnx4CyVn883AwRUFfZT9YkNFe5AdzR2ihupBQYmKDMfTZ6FDe2Xh7oWptYhmy",
  "key19": "2nk5stva7NLBC8iAq9v2pzfod3G29YG2NLLUhWUmHoJkjofoDGXRxWBs4duHLBk6AZsHmwLLQUt4xGU9ByT3thd8",
  "key20": "k1s7giGnuSTvn95FLihUtUVxJs9QcSHDAFFmkRxYa9pBwCkv6Lvc4qs48Zc2wdrYTtLiesCNcbXaNs6FMVcKFg6",
  "key21": "4FxaCBzQcFDENugCPPerjSYs2zyySogXeSCZwkBCaMDJ9EdBD5zkBiC5D6RmZ9k5H5hQQQPA8WFD9nbPAZ7d1wbU",
  "key22": "8vAQspN71JvPetvuEhKGVx2VdhgXdXucv8s2CdX78fZr6yHQ5a5qJYLXWr86q9LGALVHSLSD9FYMdeuuH2mSGKd",
  "key23": "QCM2VrDGkzU7Bp8JUnetwcECFemHMKBcNPGNE1yxH8BDnb4bYGrCeCy7VJtTpeWT72nzFdA2R3avT1gLH3DecwK",
  "key24": "5g5gwZB898NsV5YkesN1ZYSDdGYD8KC7x9rRhFYpgGs2YzuSj9h7rhNrjcjCGyZFUjG7mbudDckqL6DZsFfNPqQW",
  "key25": "2XEYvWc8YvZAWVNgmEQTVbPReCQkA9sD72DvKijd5cPkqeL7LQK9NzfGESs47hsfsexEGYtfULS9e7pnsu4pzkAf",
  "key26": "3dDp2QjatKYZXEi4eVbFTGDsRee7UFW6QtjN3QQkDYNPU6ZSrgJMCQx9fCXfFQHbkHxwhrDASeTtoGjz51ftyodV",
  "key27": "4ioiwyUWDNdVHUT2rrVktnmFy5TPb1mHSw1zwQ11JhhphQu4KAdWyVFKUe6ak7njV7efLwWkFTnyGWcAqV4u9Bsr",
  "key28": "3N9pKjQvm7wfXzjfgzr68oWk6yXDno3S2ssJzf9rsemRJ7z1Kwj4NsWDa56qTaNQaLEn5tkT1nB4k5RyxX745fVm",
  "key29": "3HkeY8pgGMMXK9pcVeVMhmNTtGt9auETTvfP3HRBtSWEgNHBMpZu5yqQZYdsr4CeYqgZHqnsCWLgPTe6rGsNHYdA",
  "key30": "zxrVfmAjk993mvJi2zJKQkQm7vRL38dAGiJXHdKSVcKL1BWBT4Hq9KLHaGR9XXVVKceDYzUWJz4LS9iNadANAPZ",
  "key31": "3raz8rkZMwwEbM2Ar2sfhtvarwsTPUeoFm7tTxUsy6Qw7ePJYvxYVhpDFdoHueYsUW6uVDSz35WK1XDgVdWonL5w",
  "key32": "3B7RgiidxEQbaqXQYbzFPxypKm3rZa7M8pDzYQBmZxQgVeckxNJ79okYR6eHacPUurca9zF3GDAEhULuXJ3ST31g",
  "key33": "5RFtCSbdf8xVhZzSsZL6YR6mHsNsoej3NFsM2f86YCuT8hk9TxRvdCxGXiLSxDmBHXiZ2ph7Lpy1qhfhsVcVGoe3",
  "key34": "2GgZ33QKkqatoXdaF3DQHPKqHi6gGUBxgPkhN7kntpndB4ZPR3LrGVzwtwHZ8Ye8ha6ezBDjBUYgbM4FSaAdDGgE",
  "key35": "NMbGR9kixGPfA7eqPc8erdfEETAufcDR4WgvsaqGCW4siucae4NqcQvtNgRxC5tWTYyj91sGKnKYY3Rug4qEMrT",
  "key36": "CTCPtQre4yLu1CPAhuhqtpKYwfoQDBnPWkcniBWx6ew17iCcHJtJh18R4VhAytRFkvm2grkmVUit4JRTYX4HKrz",
  "key37": "o2GMJp12rL5FndARvbVcjji7qFNcfM1x9TFBryUGaf7mm7vj9afKTKFgMov3CyEAS2Snxovc3rMcRgjNYCVMbRM",
  "key38": "3gCqM7UrMe4E7dq22uEp9MfQyx1tupDCSCmLnVkGxnYmR4F12f4siz62eGjGeBbLwnVrb3uJ2ErqWVpSJD7eYdBJ",
  "key39": "48ESZjCZZTVG9oDEMvitf9zvMT5VuQYDrhHcR9EPAQp28EeyFFeVs3dAraVjstYqr5drVfriMQrGjXhMpgB6PFx",
  "key40": "3Lr3iw8f6Pzo1jgKbzkRzoDrNSzmmfzEfrNHZBebzqVPVmfKB8poYzr8HMmRHGTkEgcLUSqDD822mdugE4xiw2Sz",
  "key41": "9sD5oaft7jEuhPy8hwUPFzsddu6c6r5USZop1HqfuSxwttpH1EUkcyRZdtVAuHe12mHNLfEpCUaz1sHqoB26Q6s",
  "key42": "5t3poLPnU5m9zWyGAXfB983ooDAxJFdDdfWdTjzAVPEUgHTMmkN2uGBCd9AXZK8hFpWnPfM6xJEZUtEbzMJQ3Xx3",
  "key43": "4KhtXxikCsFt5PHMAXaTy4BgVoaqyqbXPPXePuvgrGhQqVbXw2j8YzQ2pemsniTe5wJwximgkMvjajXjHfK9894M",
  "key44": "4vS35sxJWiyGd5EoydS2zaacCkyNDX2pULZrd8WZoY8RehcVJtV5zwwr6bBoceZNCJz9SFr5CsGMtmpUBiCfxwJJ",
  "key45": "2sZnC3EFTcfTWBJnSyaeTiXWvdLgb4rb5Jj727VvcqSeBVjAnBPct8XuGzmzb49Rfqix54pfhq7QNmwHGPkXWAUw",
  "key46": "5Sok9wtBy6gciev6SQbEexbMhK2bsuPoBwYCdkGLYrwV2x6rkfzXK6QKUQC7vPLqWZ5m5yv3Y7piPJeFmj36PGzd",
  "key47": "5F7B3jESpGjJXRa35qqCCWdxYZ6EawRiGGq4wDig3oDmGnpNjmikFaaeJSr1WTfsUPfMMJncDGLkGdukqaemfRNS",
  "key48": "3fwsU8tSLkj5UqzAatjVNEcVZqgQ46RRGZWdus7H5BQFP2n9Gsj4ftyBKtBcNsq1VVUaynAFNnSpUN9WFx58AnT5",
  "key49": "UqLTeRabR2ZANSnuid77cV6gFrBV1zuhtj6VTy5VBchk379uJdfpw95KN2241Mfhf5bxYtKDoK335ut4gXyyfnw"
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
