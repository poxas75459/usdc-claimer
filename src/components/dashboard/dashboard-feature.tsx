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
    "2cLdjJAkAqExmFjTrMJkx73cV7ZBs9rUGZGBXRrcDQs2pWGv1WuzG2Kry2LSQJbpRJUxMBBRfL1k1ehRZqPvwu9c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jm2qjrXami8G46iELsqJ347PjxQcEzrhF27mteZms5cVUzVbSEt91iAGWBS5PrE2wk5D71zLUkpnu1dgXCnHFCK",
  "key1": "yTntniisurYhQQVfsZ23DfPRCEk1JpGwXLoLMUuUW2NnbpkJJ6hg1vkysTjYQrAEFTby8EE52i4EEM711cNHx86",
  "key2": "2ReLW8xA3JTC8RHdQzDSBy2ExJp1idChDcL4rccMW6Qf1ik312Ms8mMv6k9kNCASpz3t7Bb2YFP6ey5XyiLeqaiV",
  "key3": "62zZpCHCfhQekZQy5fZjTaYHKKKAFUed7QuGLz3HYGUDCTRASj1UeCJmhYbkjbBscstAgBaK9mMrtS97Es5bNF9M",
  "key4": "2dFMYpsVTb3UvsZmRxbrdaD1HGu3tmaeeVMs91jKnFUqbn5tNgUnnfqdsAzQmhBKZS6GPHkQHELSAT9divEgRPKR",
  "key5": "42SPXKTc6ag6pgRHmfDkZXrCNN4rtecFWGMHPBQZ5A5SkjvY6hRDZGgsDWaqA8Rw38CZqYFbPtpPSewCinaRXKR9",
  "key6": "KncTAkycPSH3MMRKAZpfRZTZWxUrL3sCspMdHzo2qcoGKATaAFjYEpKQfpdgTtzwpJyNPJZsgcSsunFpU5FA6PS",
  "key7": "32JEQatDWSJTDqnnbZ1y5fCNyJ7JEsV3yQ13DgRE9yD2qtcmLvs4dPVc1C8wUMKsTd5DiNNUbCucZQXjNwUg5RNH",
  "key8": "4LgKC2r6p56BXgovmoTyfcJuvdchU2KGhMquc55MbcMr8sNAA8u22iVkWn1duHKUkWLfCNfrsRK3Ag925X5aXcsY",
  "key9": "46JbbYnVLV2oPoqumrTBvsbHkAME4H73y5a7wJj6u4JHBuw9qJygTWuQDEAMFWB8zXeH3CQUpNHVQxTqV8mbxFJD",
  "key10": "4bu8bBZNrQP6YxWEaXtN5bn7wXVU5zGF3NsaBbT6PtysorgdDYgFbrRbnAdxjWYKouGrjREs1oSQrVr42XTViaCu",
  "key11": "2orvLt3nCDrEGnC59mkSKqhXowdCGDEHUCcqN9gzGPCtiWNSBkxvugXHwJfKCycwbxnvdcqUQSgVPmX1nEqgBzVv",
  "key12": "2bX5VP53fAnK46jRzvjw9qykdCvd4ocDSrJsJqJLHJ92MUwyf1bC92DyYbNS29jXCLHnVCxcnfCWAA3SaESrNEPQ",
  "key13": "4T4YvrAnCHgeZeE2kiJDL1vYCefUoL2c5C8FCRFQz4CmWAWPMznU53vFMNmRR8vcN57k7V9Z7MHaTfcuwjyDTDp6",
  "key14": "2AfwmfbuWRfJA8kq7qmT7pgNewPMAF8Y2TBcYJAAJd6B7HisfTm5FxtvA6BvDvedivsWnGhP62wdbz7JYDkfuHUD",
  "key15": "3x5xzKbTcN4vTcGaRytAFxjdKRBn7vXCVti2vCKrgpnQByGJvBwyx7AkxSBjTr93KeDty5s86ebhz74CfzP6gTWs",
  "key16": "3o8spT25cTABS4YwFSMCobBiFDnV5yUeRtKTwMREN69EfUtdDfzatF3zp85LaU1HJ7RfjSztVZhdBQ1ELsZYN4gT",
  "key17": "2bg2KzLRanfyqYi8rr3BGKjmZqmo2nkG7ot4q2KMy5w7Geidm7nFBoayv63vPaW2MfzhFmi9UjrpJvnEHKZc2p6q",
  "key18": "563jmCWJWfNW6nUrPu6kntBUa3YzENtGYkNjJbuytZC85vebdEt6xJdYrgXzwdqTqQxFFs2BLir2sMXkT95yzcjF",
  "key19": "3iZzFLmqC6VxEwt79yh5Hyr2DV6Nj7jLycXFwqxSNewg7zVqAkbGpJVMKW9nRafTFb7uZ3LZSNwp5ab32zEmKBev",
  "key20": "23868RqtEVMV5Pf9vSNs4wcYz4jHi9Q22iL93qqL89PsHKoaC9TTXhLS2bjmY6PxKTiBJBqzjFxDmMHmcEAvq23b",
  "key21": "3gXWypsBaitq4hboem57JeEbxoEzFPFSookE7KWwi2jQxmnDLkXRq5QRsFTJUBU2bozuK7UB9ebfZ3KpH7tZBQLc",
  "key22": "5a5PJUw1ZjAtUNPkDp5DUvUqUgxXPPmWFjn2HSmBi5msZqfk17vGVyFztkE27dEuGaPnA53JWryb6FPZEg29DLqj",
  "key23": "2sAuKMaHLCxADZRZMCcv4boMPrQJSGbbySNqixfMQRu9zXsHhm9ErQg1xETn9SV8GA5z5a8pvAQv5wbJfxZeDUnG",
  "key24": "3ZWPMRSNLd9TCqFFrDM1nNQP3KYE6NmF18iCyVin4R4WLwmLSJHqUcDqw69RJJxbiQhB6zAaqk8ropkUGrBG8bmk",
  "key25": "3i2f6NA6kJRQ7xniCPtP4bFug5VoqTZWZS5hwrGfCMCov5kMjurheMZZG4dDcNUXFLjuicU244mYRwQPw3kCtwXF",
  "key26": "WyEL3rYmRkBzY4MtFqur2cQikavjKB5dMGPka3FJ36z9j9RNdYCgAtTK3KFZ793mQZVcwKxkppj1vNjeaY3wxEx",
  "key27": "5JV7WTaRVTiM5YptktEwbTQdnTYJazNejeuVijRhNbxe5T6ey3dJS6Aj8CAcyXfyowsTVKte6ZwCNj6WjK8eegjF",
  "key28": "2Y2utAnuPhnmme2Z8hs9B7UtoLKQKEEcDFjmvbBbWDhMj6zSSRSF3CKpnuc77h5c2VREUDP1RgKZ8ap58aEHKNK3",
  "key29": "2L4nBSct1RkKaQE3vWHimH3XAucxSbkmP1G6NShi3Js2AruovDyrEZxE8znBf7yQdKht3ZEx9J6izUx3zrsrkoiQ",
  "key30": "4pBpL81GvJZhQncyHi4AGfgY7fcZWpfnifc5cMGTYzQ51EA2yV3z5KECSbcyCd1k3pMpd7uH2LRdRV6Aas5BsNzH",
  "key31": "3sawGeGiP6XzKDfBLC3V4W7jHAJA2MYLLJ5xncubgPFQf8sEhhRHBGvEq9HnEzWc95nLRQXyrnNZt6vehJwqUn1T",
  "key32": "59xYbAQZR4nz9U2uWDDsnxqMjqvpwtatxGgvbRqgVZFVzqqJbr4TXe51Wc6wnYmvKP6Jmq9jnW8AqoA3eumkHf8V",
  "key33": "4Y7XHT31TvfMTK27b2emzrkc23szkxWyA2QTgKVxwXQskB4ZCc9are5cUcyynKX4cdTT5kEHt5Cd226pG7ETWoMJ",
  "key34": "2xfyMekfhtxA4RJovPFujrYX7XMy6MkSxzLPZG91fevWnDB2bALVxuJijG4WVjtZgDAufdFwHct8C3iWW2ufKjSZ",
  "key35": "5BSM4v5a4k7t8BEEqXQdA6t6JhUTWNonx8HmzjtT5oHTUEU1oseDtzT6WRFt6frdGYtWfhpY3d3WgersDMAkJ3sg",
  "key36": "iwmuA6LA856EkLqZX9VebEVW3agmpTQVotzP9kH9LWGeFCUUE29Ph4Rn7G9JMMoJPGFJotwJTLLnuJ4fURg3xEs",
  "key37": "2TE8Est2RyrKsm71577xv6erirkFCDKxnbX3wnHeLE21qxz8Zxqgt7fbjiZELomcM1jCGNUPfTPi7XDsbHN8D9Lf",
  "key38": "pFSXQdoLP8y89sLwpSN58s2wPCtTUozNhWS8ewtfn1GCDvHwXXPXANX4yNUqvxYpiGYA3rtVSSzzCqd2uygFzMW",
  "key39": "5nkFtw3ASYcqATwCsi8MrrPv7JZFKvmXfNg9c77WUb83wWgRmpsGvJ67hQ245Jcin7gkoe4gJ55ToA9CEqZEWYD7",
  "key40": "5v4vzGM2a4n7LFFP9CtbjryyB3uDtZ1tDypJYjSYHzUKyeSqnDbManv5vvDmBQcXLHHYWis9W8rcmEqxjzCa7p4p",
  "key41": "2qDR6UGRPbxnWCnHuyJQfo7yJSPqwLWUS2CUn95rZpqRqnXUecsCUfSXPGhSq5k4zQHkeFp5xij2vt8Re7NBcQPD",
  "key42": "3pqmyBWFkFHBrUrJ8Q5RLGcNp4tGKRfmUT6voqfkQ3G81ou5mYHXYPFaQu9NZUN6eLGhTpNYkUzUU7cozp4tDarc",
  "key43": "3Jxn1nakJeaL6KsabmnDX54zPNHxeLXVCpb65HzXeX5sJepYAMgXjwx1DteA33hfZr6w4wpjjeY4tSWxAUhXGxFm",
  "key44": "3YHaZWCpt9WDapRDavMqpJh5HsuFtYmY71k1sCG4aRuuSQusnx4mxG7mzHsHDds1dD1bVVyZJyiJcZwYJ3DmLY6",
  "key45": "4M79xATt9Ayj3yz14CpaJEMpsN5SHoPSx6ac1ovpwzhc8GzpzbBHFTQbzwcFHYpPWAgBm5vtErkeYPoPFGDteRHg",
  "key46": "5bwVtsDc81y8pvp6hQ6fh3VyCMCoFm16zuP5LQm8o5s5s2tVJanxzag59hp8NvPz2qrgzVSf6A8tUzC3jrNVmBod",
  "key47": "2Qhmn2LouU2NcKECodroCbpazDzCSo6orAJWKgP9A854n6mc5SUf7vHTbkkmMTudeM84eMUUEwFzeniDMKuoiW94"
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
