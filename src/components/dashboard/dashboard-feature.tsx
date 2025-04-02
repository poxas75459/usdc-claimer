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
    "2Mgcj9CD1TeusFfj8ogA9AY1EFCRDU7TQiS8oDWrf5NFAufz33Jze3f3BXvB5MXVbHnwRBcVNyKD4Wpe3wYTLMr9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fXomLmjy8kvEFuBLGv8FBDPkkGYB8gqGEdMosX5bL66pNtb4e7QYqnA24FS9pFtxjE1yUzzk4FBBRWnLr2byB8E",
  "key1": "2Eh7fs7MEzhACEWXrhGzJQxsDEkdoECfft61SEVxoBmLzhXpqNcQUfzvWP4hbYWH28RacihP94gkFMAV7SKFHLzw",
  "key2": "5jkW22i1Cfh7C4f1UdVReepTyV4Sa9PoJXNck9qxqYssauHVe7EN3QbiqSxEJH7YmhjbbPkQzBJE6Kns3bWk6ivK",
  "key3": "47RKd7m8n8weFo95a4WTqfRwApWuSEFgPkSjqiepoEHfjSFBQNkuURwHTcsHeXVRdHJQ2m4uZNQMYEyraqVTpqZf",
  "key4": "BrpdaMyFkhxDuc7dPf5aMEeWxUGTtfTh1qJ2yfdNNTFNGeD9pq9UVFSUPDn1tZZKvMA71xPnCzT1D27iRffNjkq",
  "key5": "MdXHSK1gaDDutAfW84eDsUPFsZ7VpeNoUBHgJcgrNNSTY8V8DYLy3AYvZscPMUeLnDsNfRrkRkoRXjzW9BQSpQK",
  "key6": "66vhqJVKGaSiz1HccMLhvdAe1dHy4PDrMbnk8F15nh2vsn8NzXatxZWDdDjj3cAtwgmD4uDU5akWTuRsaodXhG1U",
  "key7": "Rjdck6quemVPUsqjd3sZ4vVK6zJX76qiTCfp8Tvv6mYYVEGLTzASUzM7gdyxaDWLzhPq9L91nstWP6rFa1iK4NC",
  "key8": "4KBJWZe2ihNq9ZxUi5h2eZruVJR7jNZG41gS4poxLGjTBbcoSWfbjrosCdGiZ1B8ABYXWtVJT9YTb3Fehw3NTKwC",
  "key9": "4sb7BvKTWcZv7XbwSLHL73WWQMWnGHMH1vRVWpA8e5GkHa6aPpZwR3Jp37Y2z9X2HU3d5wXEhH97Uw45QELXCGDK",
  "key10": "3wtrSDtMCXAV9QNGEisP6WMi2TvX9dew7vQXJuxVQAbhePr2nep2ieGUQR2sNnjJnojzyfMjtn8UoCGzVeiqCwce",
  "key11": "4qJ3hayX4bsosAngJT96iqDauW2FxUwqVqBo5aNW2Dbi8LVnPRz8YnB8x4kJstM3DPR1zZE6ghzGjDpcvnVniErV",
  "key12": "4n43BKGWx3f69qxtFFs7VG2h5AowPsXBW8W2ELp3u75HYtJVL8oGUwuJtN2sMgh727VU6HsBG7LiwYgCLye8L3PE",
  "key13": "3h8GTKWLugBVsTe4L8KG4vfpwmKVaTPeFwg1BMTEQSD6ifJ8RFJCWn8fZQczYA2S18pe3jx3hS4Xu4jeYWVL93u4",
  "key14": "4gfZ67C5B4NMHL237Po37siJi7jKBWiQVsi7oGQhVhyA4AciNTxb2B9jvtFKSgRG3PmKAWwNV4WXqQnf63EFHk3t",
  "key15": "5apmk8CMw68sQYfK8PGQvivmsJmm1ELnZ6EkhsQAGprDGjoiSjXY9rGY5XjgqDAG9h7BswDiQSrHKxmMMyRnPzxg",
  "key16": "5XHTrWQW9W5X5VW5zuCDRkxxCb3oKMDN2ULqhL4JudkiXbb2pAbdKM8EhKsrcdKgG5JAKTaPFSLdiz4XZ9HNivR",
  "key17": "64xjRKojGtRew8QbWnSSibzRba7trBET5ng71M18TkBEnokonpgs9vmkT9rSMNqmTBfZ72rav4bmwmEdLx2UJuar",
  "key18": "5VumFfT1EzhJfsihkVJLADarazBMMstv27vxevCgTeEAuv1BsWpaT18qLrNXLMhEpLNCRPW8XjdeVdzm45Pg3Y1Y",
  "key19": "35vhZTqHBBvvaZmhzY2xA2pymThN6tWN5paTmuBkxJLgQKrR8VMdvbapahB3ovf55RdRX7Btj2z51icb2AtfzXCh",
  "key20": "5o8WdqHV2zpt9wofyBGwDSHZ2TxQn85SJDFvUfLv8JWURQsw2E42q5VkR6MQZwLXfMbRL3wt8YLoFpyG79PTAk36",
  "key21": "4xWNCn9TLuyPmYd9XffHdQaC488KZa8D7y5diiyaoivq2E5MCUaFj2kjpLDRRyu4HjzbVJqfG2nApazzGECJAqHa",
  "key22": "5xgcSScANWy3Ms3VpQPfwVHWsAYWiNDpQBem9Yni1Rd9dpRPSKE6PFJfxaxLbdvugECbgVwX9ZATE2zT5sAp7jBv",
  "key23": "4j9A5Q4A95YHGFBVvj37BcDqS8MpBUBpdaAGZwjsFNdrZiMUBGmG5cod7guaeS4oFvKWN3jjo8JTdUhBaJt1NFhT",
  "key24": "55Q2XQw1XhMpbVUPrCUACUh3wrptyGCgTQtnXZWgBKyPGL9tm22QU5EgTvrcByf6JKVkExrzqG17JPHvYWTfTAj1"
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
