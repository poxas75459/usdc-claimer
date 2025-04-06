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
    "3zCxBSuAkVxC3jpafJppS8edu3zdtc7JNTGvry1t9r5qaG8Zf7ATshanHQuPkQtKHQFCNVKZX4e7vpjAb6AL8SiK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FGt568N4gKCq5SESGXEsR7Z8DTJFix14z7PjnWp5RPVan91YBSVb2aNZy67zPYMRdcz71RPAZ5ehZJBNJoBEF9P",
  "key1": "4uBHFiqxrQHmPUT9xNHVrFnxb9r1YGgzhtqCYinRNEcPWxsu3ePMNCHcKPpoV4kP69zNv4UDeeXv7zqs2gQvNsgm",
  "key2": "37sSrrjTYmDKBJxy18BKrFGFVY7H5GHUVkrMJNNkbEwsfgfnndGt3URvi6upZkmC7PW7JdC3KtRUFF6Pz6MHPHR6",
  "key3": "4ensqqvvrKWthwrdqyQbG46EgujQiuZrU6hJ85d26RwxFHjbsjiWxUjiesTtpwU6C4jU1APKUKme7JqBRhe3YSuR",
  "key4": "5qtU9BXw5EmV5oaWe9S2kwMLVkoXT431MtSkbfNJuaotjQ9qW8zwBUJ1KVvNLFazwpPVJBg7wYgmkp6fs4je6o8P",
  "key5": "5RrckSpbASx1n4gLYD16kWrfQ2HEbvFbXTH8rHNie28co4u1nmXpXTWm9u6Uck8AZBEepLy1MTSaPUhBY5vM1EbG",
  "key6": "gQWsBEtwMLNLJVpo6yUfYxeZcDZg9Bvuno4zunXew4UjT8xEv1uRFQTmcthWnCy1Dcq4M2tyKNW4suk2tqsEQLF",
  "key7": "5pFYo5h4c44vb1KxyDvJAsyZZrU8BCDkE4tCCgZBJRaWyFbBfoY2HgN79t7XHfFU888NW96oRWJzCqMQYxyQ3Dtn",
  "key8": "2v3YP2hMzouZjQ3k21MVjTmEmeFrr6TDfzLiR5KwFV1kEok4nMvStqwigKeFLqb3VhpY3CVwQoKJW3JzCN7hNgAs",
  "key9": "41Zehq7TyXZXB46uoUaS9BxphxKSBJL3K8DTUJp8PfPTWTcQr9aZbpocQhCj3WcpfBsqfsjRo7kYC1Ggvr8XQ4xy",
  "key10": "tqSoEnvFW1TDE6Lf48CC6m5u4kjzhK3AG8DM4ou4BrLbF6ccG3ybGMerfLGCNjBGoghiasgTQT56qNgDDLGZi7y",
  "key11": "4LAAPsHFNSuLDevJCuk14jK8HojAsQcEB4nnNDkPKJKYq3MAnpyCb3wrGPvJj2AZWHPhwHGod68iP8AwnL85Pf5F",
  "key12": "4JMi4EkXEcJERFg9DiT4m1mwvb5DtnZLE7miB5vJeJSsLyYbcf4m9DApeHxcxQe45CiXmPhunhy9zuXNZmyhzz2m",
  "key13": "67qCABCEimRdZkbsabkUjf1sxSPAqfvHLbnZKuc54QbWWR8w6eVcyBvVhodjMnPCWswCyDyFWYXoTSYw2wT7RW9r",
  "key14": "2G1SbRLr7dMoAUEi8vNHby1iPEewucbgv7ki4cpsrurZ83C74Cy63UTMqMeg3J6Z7j6DZE1LARgxX4CXvLk93oas",
  "key15": "4XfMbRke39FucouaJNHmpuzkgwufLzZ5WQ7CHXyeZNqzUkt2HySpaC2NHfJe9Bq5fYaTeLcoc6RtLxhhCCYjqNrH",
  "key16": "5188P1uj8nWkZ6gSDEYt1ERe6opm7Xw4KRDLuzhjymnHWa62wHZ3okohSuuNgVG5uCWg6JFJ5mZLipitWTNTUUEQ",
  "key17": "5R1GCuJcovQnfTWxanzd1U6S4FLHPue4By55RrT9Z5VLTvJXFYHBmFQTjWsH9bEYeF9QQY3PgM4QdgvozuMJ4f68",
  "key18": "5epNva4twJeLT5MY2KB23ec3Cmtg3bom9u2D1c4N8zT4bghVpucxYeS9dAgQ2MPwTib2VZSQSMDHVPrqHZUyn9jB",
  "key19": "3n8kk6KEetE1uSUBJCysfP6cJCfEvZyk4BvRhBJQhjwBhv7zdHn3MUsvrEJVwB2nGkWBfktVPcYbhtkPyWBkK8uF",
  "key20": "3bCzQeRYwyxLoqeZLE7cyDcx5Q6PEyNRHgCyXCcBsyL34vr1d5oQYgqU6onKDzkBVfkaWh7NShoFeJ4wC417jutN",
  "key21": "4tEXz8GWhGTqB9EeH1dsEa7PToKaKZpvMJXM5MssaXgVNdhgZGsSw3hPhEEeBeJA5A2eb8Aat2AmYsRLAFbCZt96",
  "key22": "2Z36pz4vgvDsc7t6rnWcmkEkLNCGSsEdygNdof7uLab66twSizsnU4j7czATM1HjMdc34UtzgmCi9aex9CLwW3PQ",
  "key23": "5i5pMrJ7LFGFbeGVX5ffzdWofz2B48kqpi7CPBzG9Rp61eF21qrhRtEKTR4GXieNoxGA3H2xXxj9nbJmZSR8uZae",
  "key24": "56Dt8awjeiWM3EonWbodMMU6nnzh4ydNwWkkDS43CdxroXipbGhHmYVAgBfwmB1z9FqQAPe9B8hGmyX2H93ne5wD",
  "key25": "2bNMzNRYi17Nm2zbUGXdaaWZmRmhu9TEMNZZ2VdriiJkaB5D6gG6R5BZYn5Xp9HLCM1crdh3Jzzw47bWfAgoFdfD",
  "key26": "4xxB6z4L95Do8s4864ed7iVFyjYM4u23Pxck36Axdu3icDZgn8VCv73jhFHJN6KASnffFSfi8snB6Cq4b2NaR7V",
  "key27": "2Cdog4AwQdYnrdY6r9F6qYH8fz1THVukTrtpRbngUWpKkcsEquaitRMnVJ7k6CbRfoD9RUnicrjw9FEQ5ekKfu5T",
  "key28": "H87YKC4MkXEnVo52wtfyrEKnxzmheP9dQrketfNwkafwKvTEnEnmx2xwdzDU1RNS76Xq3p2ShvipFSL57BaV4XU",
  "key29": "2wzQFWPrUzAC1HJBfHWnn5Rz9StTwdfnurqUH5468u1yweFTnohMCZ1um8ZqXLMXPkcvDnKLVx4cZBLmFTy56aET",
  "key30": "5GmsK3F5NVAssGJUYRKiz3HS6oQUbb5H8MbGKMBPywDbfd9n3mCyjsZmgjSBtYzSn4jJNyAzjFeLK5n9SXhKBMGk",
  "key31": "4iffyVdfzMMjGsf6xmyKbSdKUgXdj3LptXxKqJqgbpDQPsFAPhoHsSxw8QAhDTERGDJ3kxZ1cUKa3fXveig4zcc5",
  "key32": "5QV2JK8CtZyQh7YiaqdgAv4EV7DH8SQsEMuDebnBzmpRRKAYZA4kkSACaPyb18BJFfyvQ1L3xefj9KRGtCngSNNw",
  "key33": "5XptXv3gkVuJGoEVaVqDVYs1Nb95V8k5dnf6u8Cdf5QAhkbCKDNdZAPXHRSDgyjjUuQ3i5geVPcJjAj1oGJNbqSU",
  "key34": "2gc16vTbFGQSwsJa1BSPSaWPNY131QgYUZhzzaf9A95ApwiwL4ZH4y9tvw8c1mxHbP3KKnbX2fsGKKNttC5w6ooL",
  "key35": "4exNxus9739uruTbV9bikJRePZPpG34FrLY5ugLtrP7ukA9TS7cqzR77FFkqXKBwrvS5hsULVFHb6Y7dTUeigpnC",
  "key36": "2ZxUiUZ8nwfknhErDKvDW5kYsZmo7udMR3h9szT75gGDXHTnKHQ9WXLJipDixm5gbZtbxip6zBTp6aNjt8RAX43r",
  "key37": "2spWHXNAVFiPu7V4eaMhVJMqVrEZ5tEFiFQYVVtfVfBGeohxSdU1QAAYvHLhq5pnU8vCyWQvEtqv8Rm1zGHLKgkB",
  "key38": "4tDr3eN1VhjGaZayx1PinnXLDfQz8oAePx64pojGJGxqHnsfybtgS7VUifE2Bn7syYaeujmqC29zijMsDsYkXmgJ"
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
