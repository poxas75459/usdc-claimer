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
    "2Tv5JXNiomknja1X36DSU8LNYUUpFJpwGSwAeyhYXjdfv33qxi2oV3LdvPAYZMQWcxM9Ci8dFME7i9MK1CjBkHsk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i5UGgTZS1fkc4YfoR4LdJy4zTSxxxhD7duLEDrDTAUSLeoXQPj5VrXvdH4hVk95xJ2qNGRPMNXF7NqaDQj8vc1H",
  "key1": "2Z8fUkaNMtoxjZ5L3M8FLZZsXEK3dRkd7LxdieWsWZcHovYRWjWTPNhJABdR9AJAp1R9sBPUPPoZUFgPi38ntrQq",
  "key2": "2wxuoALG4MLukPXVFyfmBfavY5Vx7p3DiTkXm1pPmdHvUHa7N6F7BauSTL2ucNtdigkGatznnbFyF5b5BPRCQ61g",
  "key3": "4dbEgfcskzSJVvvXmrJSKvCANR7dfqaZ9bVrFNvnfrppfSVRmYDPVCFAhbgAmMZ3GsWDPxWYEANRqZMZ4kkvaADv",
  "key4": "5NtbnNUeT2GFJCYVrDhoZK7LSftwY1BjWC3H4DWPcUKdaZhSVJUAd1aui222VssTALfqxDJx7SvzF8yHpLsgp9NJ",
  "key5": "5YEyfvJU8S9j7zkKA24D2XbidN7A2PUse1AJ6GSWcA9V1oB6fPxTufHdckkcVJA4LoLrs2JvyTJx5CXge4RGTQYz",
  "key6": "ctwZgKTfk8aj6w33DyuuFZ4RT3SEogM7RjQA1aVVVJzqCXTyb78ryf7XUGTCrBGvAxQMYwwDc2uU8jDYPZtX1Vn",
  "key7": "51RGSRwZk7t8i8z7Gv8dpwTjLJkL4uGAmZKrr5U3YWKMUE2oeuzeLDcpWSRLf6f2Zx5htpWMabewLWzhDEsCcZP4",
  "key8": "382RxPBvB3TRDQQaXiS66cUrpichZhDd4QaNgGXR7ZBX1cP15Yhez1Yt2sCA7d5FVjnutjXwSGAb1QNscxX2Yfev",
  "key9": "574DMzmYbAJ7mSt5RKVLAAxGo8SvwiKZmCXUFkKiHz6Uba99bSnEfoBMt6GomA9qrtyNi1TqBRwv3UAubRFNSi1R",
  "key10": "3eLyriP9CoRBoa1bxdJ477A5JcYWXg79hb6JQvyzesKmqgJ9gQeGUmgsqfEFCUbDo8NBpRrwi4eDMw5mgAjmyqhF",
  "key11": "3f4d7Kt83TBkEcevDPahthCmYMm8n142EtxzdA7VZDqT8nakxKnE6C61Ci9b1pTnA6bfQvhLXYReqQuYFUnTFqVv",
  "key12": "ighT8uzgRmTutbELQVnopYuGQfXZ7iU8kAVb5jQY4C7BomVrEyidiAtsKK1EbiCgFSN2PaeeTc4UQQcAKhXc4pZ",
  "key13": "2xEnQseNv8hZLQ611TE65mV7oUqrs8NcrZ1RLXcT2SKjbQa9QT2m5bYVKiToR6r6B4rR2AYRTeKr1hpR4g56URSd",
  "key14": "2MvM1U8BQkW5GpcPGiYdW3pYfagD4ofSbTBzNbnx2nXJKG6ciPt6xYJH4Ucv6XqSgAC1siEP1RRV2qpXLPyiG4J2",
  "key15": "wBBBVA9J2BQsFfkHXzLzuWVbe88M7Y4VENx9cFjMKgH5NiAsCx2rA7qxj3NU4dqJLA96gghRUkRfJJ16G47PPby",
  "key16": "4sVwHfz3o4n9MqbueboLJt1Vjd8JD9bcLtX2zQLhXLiik8ABMRfcQrA6wneiXfmUwdLzB25kFuYXfte4P1K8Ux5w",
  "key17": "4BannE5puY81oWLNm5L14vnmQ4eqMYpBDZKr9pTL7Y4uEY9jG1ZhSkVojPfrNFP2fDajv9wzi8uKUdsxTT2CpLMZ",
  "key18": "2ZzbqrRcU6euXYrscRo42mh1Ww8qaKcRmcBnaTNFhdR6jv4TmsH2Xkg1bC5cUANDBH3tek7UofiPd6Pixxrs2Xrk",
  "key19": "2H1oPWvZEbVWjhQscA7ssDE5PL9ME9wmCkgq7USfuH7gzFpxPHPC1LTyhsDNJzvCDsSg2XELLjRCMdoRbbFKBwyP",
  "key20": "46jWtTaaV5y2rniz3bersuD4mLxM7PQqBssGMXn1bqmWyYrNf3FL22tvVK9cpHN8aexq71q6xgdqdA1JmZVoYeMx",
  "key21": "n7UKKKVGnwfv9JJ1Ewy37J6371zAoahWNfR9LVCicCLnQV4kUPvk3Sp8ocBkCmAqM6J3YvRPddvtmvmZY3d1L8J",
  "key22": "3GEh1tB1uZ67qqYbfXWCjd1RT83DAMoQZzkZjmuDya9qmQxmwneVSUC1nk7KtQLDxS1kiitvUnF2yZyn1EofRL8F",
  "key23": "G2qUmfZUqWzcrvrVPa4VND1w2oxLtJrbU8nmmTQj1jPwSP7fXf8wYsi9wiDD8HBwopd4Nkp7aN74rZhUaT59Ce2",
  "key24": "65yTK8rTSxLYfSoc15auRgXVD7haZzj4GqaTk4jtZE1f5bU9NNykER4RwiuuZ2ZaNGTtiFw1s46tQhLVosLVkGMz",
  "key25": "61VqbohZAsckDNAZVi2jNLM3W3ZH9i5MLjpeAFnVA1qxpTqJKT49yBv7yrHdy9yaPsXAJpYMnebEB2yL9ZfoNBPw",
  "key26": "5JnxRpxaTVemRt8Vy5RHmA54AL2sTFrMvaBtGSjT31k1y2jYmhFfWaM8MC1P5tekPDPtMCPacPQ5TnchojRoTVKE",
  "key27": "4RVtL31Vq8D4u1ZpfHf4WALrepYuxXykLkGpejgxec7Yr8YQSgoMik9PxW9bDL98fXbGvFMDD2qTu4tQUTm8A1N2",
  "key28": "WmqkwmQ1Xg5gFEvnUZvoqzURnToG91jgRSGweFWh5nxQW6xyxTBRYAK3yg1pLEz6ApEUxkhENJyayZbKA7a2N2P",
  "key29": "557KKRtDE27NruoLKHsiz7JZYNCppGwQPrfjiGEvS7saZj3qCfGMhiV5dUzsjeC7QzSPnFoPqZTNyyxTBaHJ5RJ",
  "key30": "4rXz1HiNyQgWWYsU37BKHhXCisThxMczMK6QP7SVEhdSRgMTBQpGifZyKsa6X4FZvh3JThYjSj8Bvmhmsvknp8LR",
  "key31": "28vZzm4RngR8MyeLfhwfnhA9nzpjHmyhnywdQeAiZmK91wrEKX4yXe8sT16si1qxpy2SsP3jsi8F6LVMC3H2NeBe"
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
