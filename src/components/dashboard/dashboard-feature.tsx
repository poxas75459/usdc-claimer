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
    "4xAUTaC8TotWiwnHpUmwhgo2JZMRxYoA2vp9S23QVpZB1My64GEdDmFfikeEjs4pkpqVWzdupP1NzpbXwhdWJ6WS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nECTkNNk82o1UcqcKWr5JsKjqg3BPeXWXBTnTRmQo7FBNpQxQv7RMZs3dAbsLBckM6pA7UqV2Cxb3BNaNaV1VGK",
  "key1": "5NP7BVBK115RM4aqNeDu2suNGwcwW5PgRVgK1argj3Vpgbf9n3VAQf7G5hGmLRseSyw998b9b5BF4bXFVXYPUdC2",
  "key2": "4VWTTtvXWS8ZuAEqHRzHsXMzhNqKbvi2wreeTKJCVc28LAXJtBBgafE6LQNYi564y5DFSrs7G5rxRAqjZjPzqRE5",
  "key3": "5pgPzrK2aBXeusQj13KMXaX2XvBKA2b4JFhkZoFgEgkhzeuLsHeLVVbeT4qtYKP2J8dv8nwkd6L9z2dSSZy8ksPi",
  "key4": "52a27vkY4kXtjJu5kuL7sJSodxSF4VHrs8HYKqub4AEr9m3NyrDJUpqHUJHdD16GAAKW9kf5WHBuboJZPcdAQP8x",
  "key5": "4j8cv2px1WKFXauYAYBY4e4STuK9ci1M3NUQUfTVr6joYyNb4kj82Vj9e7RaboNg3BQf5HeSEVeXCeqo423osJzm",
  "key6": "2pT8nLdwW1YXVAvXVFjTiqmZsH5yec6PMXxVWzn6vNkC6eDe4gyBWb3XquL8AbTk1vKz1afAj6mGzjuBtEASkapd",
  "key7": "4ca8HohrL5qkUFh98fL1jw4fcSTdYB9DotxjejckP6HCUiLiCHn1spXRd6VUvk4q3RQAEVg1oK7tiQRksaWiBru2",
  "key8": "3W68BK9jErG4zDPVHT8L1mQWd5LH49UmRvbB88UW3v4wg5QB77w6cMfLq9CNH5ULPZwQdddxibdGGJtd24iEqTNG",
  "key9": "3mdt6FYYArzbm72ndP1ra2tQr64K6XTb7aFbeCtQGyXGevmmssecYtHCat4F3kB2NcydoYVh4tnJ3Fx1aXM4C4qU",
  "key10": "2hwBmBvXoA6ho6ZHdNNuKeWP63F4TtSdHCSmUAcwujaxZge5N7g1VBT9cua46kizhj8AnPThSCFYha2ZQWfJFUkg",
  "key11": "bRLPQfaWjrhKwoFrU8dRc7EHZdr1GcwJwA985G7kKfnFDUakGQ28bStQVauGuyuPA5KztMKcZY8Exth64teD8U8",
  "key12": "3VQhagxypUW2gczTtUHUuvkGDg9qKzMTHMRBjVZ1q2mfbHypQgimiJ9VMCffRtrucYKdsMeQTpca8ZuAafRjQaLL",
  "key13": "cBkPd3c6wQRgneNBxTcQdwLqNVQFLh1VcmR81UtQkrzf4PrbFpj7mmPmAaJynSnNwxzXGtvCoEpokNFXuH1swAr",
  "key14": "3H5LyU11B1FWKBwazRy5oXRjdRfZKUW9jrPbvd4GNgW9oBkJ42BQREB8d2gB5q2Gc4UybATMquTfh6eAmkwtBDdd",
  "key15": "5fQ3jBQ37FR3pg3yJtPcZdbeaKgZDdzZnsef4TExq8fDvJwztb1u6gii8V4rLVhkfyZ43FjRCRnr4bhEuhtH8Bta",
  "key16": "3tstsvZEZP6xJrdypQ9M4gbcNWTE1QqZJfnR24Q55ZZoYxAAx5E7EEXbsXrMd7NL57BY7vtyksjeyuaVtn4UxPLe",
  "key17": "2pPK9L2Y6C5zoJ677Ns6amPgfC5TvWa1DtGLf4LdWKVwkwAefv6P8fZ1c7RRgG5gAEBbXTDZU1bsq6HbaRbSk8Hj",
  "key18": "2RUtExr2TUdbeVkZik9mgSfxqKZiS1HzZPkMsr97DXAntYHLbVaA8Huv8pVujVn5u1ZAjkKEAvm1ZRoazCe1Wroy",
  "key19": "5nojTcn2VSpDRxajkJBCDhT8tkJDxnBs8LirfdrFcmcQaHUdm2f96S2WgMeqAfWeqXDWKet4wp6QM8F5MN8yPiJ2",
  "key20": "2Ra9MVpD4fYPDjgjKF4QoCT8QD5wUvx9gVEpx6hxZ5g9C87YX4mRMx6X4Ki9NM7EgDXZDEFkRmumcJ4dJqwa2Pjs",
  "key21": "ZK4auBaTRyK6HWHhNtaJhgDn4VHV5Gcu3hNQL6LQiwhdDpD6rCMsYDmHJtP9j8W6L4Yszw3GT4j6HB2aJsu4UtV",
  "key22": "4f2D8a414EX6CXmEfuXqxCDvk6PVsDj5SVyETrMeVMRjvY25AypCJy8x2DGbhRM4Lmw1gW3rcG1rXt2mf8NPJhQA",
  "key23": "3jMzXuucRmj6uviqU1DBXPWExTkgUs3QsqShttxjkv1YNrRoYwMfB4hR1mcXRUh9SAJKppgjvjPnfL1FujiBzB9Q",
  "key24": "5kxgMszbj8AK28ksZVUq9UJCkcvXTHYHYxhpLQGdLhka8kGo4Wexta2w5uMeuCovMCtnkYJ891UzuB8wLXpfb1dr",
  "key25": "2LKmjQwoYEFAyZoGcngaxSmpUDgcbjgwhUz5E44ZubFKJajjsi6Rqq5dZ9YDsM2SMyzLGaDLtA8CtzJxy5TPdy3e",
  "key26": "4rbu53XQkHjJyKUNXtBMrZghLc82hyyPpVG85L3WoknwGABGHKBmwTfLDfnx6ZDfeyLYSBbmk3WJs41XLzVKZDZ6",
  "key27": "3y1LTDPhkUWaL2a494N25Vg4qKFPMqbgeD2FpFxTFt2Q1KTsNhv5DxrEP17G3KC9bWSxVyCVzVhm5suNfcvDSEbA",
  "key28": "oG1Xz9JKVye5RCJ4CeEuUgnXFvv3yjJcJviYGrVrv623Y9Loq67vzvwbV5AQTDSqSUakg4qa5wSEsg5cTiq8m6G",
  "key29": "4eQmsXprQe9mTar1D5tk7JM3EgGSY7ATcBE2Y752Vk6QakBHzjsemLJgGmSFHidUcXKVouk5KTcFGeDXLLHrGLeM",
  "key30": "qCU1Zidzeg4SfPetpiuKQrq8sE6dbsfDWLZf68cntn5SpDswSbmKDDjb3YD5c7b4rM2L6ARwp7j9S3dPsxBr4w8",
  "key31": "2XGbWHxNPt6NKoSRpqAwRQY37WwymuhsiHAPaMnn4gH3vuUPJDxBTk8uYSV3oQMn3qLiuWdNiMFAzLc2FpWkxzFF",
  "key32": "6aPvb4aeC43JmSvRTdnoCZg2Uqo8GMjdzCoDe9Yqp3CH86ATTxv5zypztzUVeF1e1M5qfHgYw72BBJmujtYG8Mh",
  "key33": "SRRx8qhnekKHwkacA7HAAtxtPQE1Yy7bPiLHgiCxH64G1fNENXkyBsmTBBB9NtpC5xqr4SqA95vPWXcymGMdNNR",
  "key34": "2c8UD8xE5EQFshdahXNwJFDUDCa3WakJM8PowXkejMiyuPYxe4wUAMLpvgCiGacqp8VQWHBftAQQ6hVVSRj7o4Qu",
  "key35": "45MhtGTyFjvmti9Ko5NYzXLVAUNmg2BhcokryZfqStXFDApGyWUhTcWC8Z3tyQbYFcpCjeQoUs98tog1pDcwg4QU",
  "key36": "2fzLq28uPoZRjT25sFETiA5TFFBbaKWSkLEYMVTZZeQeLzXMtX3KCtcLj62AaY3VtxD9qoHztATY4gpz8KVXPXuZ",
  "key37": "3CXsBbBaNPNiGKqWq65VgpsyDRt4d96LqP1pxC2DbMooVuNVg7kD12kNqZX8QhU7smyMgoGmqRvtUGEGs7vqJeFx",
  "key38": "45gohkD8nWmrmUrJHHt8exEHgnuNdMxc4jYE3WcsMxjFxP5s1Cks1mkJVp8Goh1M1EgQ7ontbL7raKbTgeBWVUZt",
  "key39": "4XD8sUijza49ReojVp3kSvHK2cnhLY6goDQHCQm7nMduMF1zuGT2cTCoK8YUo5HCxvEKNKDq57CuRhsQPPGTErAd",
  "key40": "4cR9eZupYctvWDZiQkDfdduhR1bsLxGrEkA2VWDeNKCDn7EPWf6Cfjg9Kva5uy5zcxSngtXYTCQgoGGouuvQSJWZ"
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
