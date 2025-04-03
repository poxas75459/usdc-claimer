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
    "51prxK7cLrTKmHrzRvPP996Qq7YVELDpM61q9bJbcE36CapVzyh73PoyzSqX2ZKmaQz74nd1p3MtMZn4YmaeDWBB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "255opX2PkKP4iWaUZdk3HiwjQAmMz7m6SNvGJc9dEZZ7KtJwVjZ4QpcXUAoE9H2ZjwBa2JS4D7Q9mwtrz5XXAXaD",
  "key1": "62cZw5F4Yc1GfxPJhG1aRAQ4NRuaA5Gu7xTtQ3i6KHLZEms2QwKiv4DAg6hacKAoQXB1smzNXquhpm4WoTAzGyUQ",
  "key2": "4648KVW1HYAvxZkpsXpN7yU8a93z2oCrAEzkVoVSHjWiaVUP8TdJgsQtRpREKwztBRhrTvtf2mzgHHd8BmNmxZ7J",
  "key3": "TnUYv1sHbKKkoftcM9TREgq9zchAtxp5qdAmY8hASQXgGT4R9TNm2Y1jzNWWrwBW1XfVUUNJezxmGaGvK73AXVZ",
  "key4": "4Uyvi7teMHAELKMHP1wLUJqA1FHHyjMVW6xvojdM1F3t9gnWzkEHpkBzsmEyFmDWE16zuUEWntyb8EvzhFbdbyoC",
  "key5": "3fGAG2rUv7UvD9ASDpUJhKFNGvVdNa9UM5tCGRnHNpp2r9u1uiNV2Ja4DhnGSLhNwmWr8SJ8CQPjDw4RrVK6KLkm",
  "key6": "5nUtvjaAxewERHYonXQk2aV5PxEr3HSUsWp2x6mcEk2Xswt7s7howqJajAu1GzXFebQNazwbk4WuevLMAPyYRU2W",
  "key7": "2DwydUNJ2W5Cs2MjTL1btDzSFYRcAZdM98VgxYN23AEN1TUZA9mci6jdnJ9nB57Wu1tGsdssY1xcmPTL2FnKFDS6",
  "key8": "2q4Hfy9navPHQVQECch68yXpqtPkkfDaatAmj41w6yAXXTR69yrdBgT4bWsGFbgHc1iC67M4v3BmbUVswjHueWra",
  "key9": "pH9U1mdY7jDo9tGMzoZoV8czusjEcuG41RJsXsDpLxLtkG1RiKFJeTFjVoAmBtZoZMxJ8cAj4FrQgb4yNa1hZgW",
  "key10": "1HVNEQV9wuFFbCQ369LcHyGCRhW8sTTSvSBMojndRKm3DJNeM7B8snDEYtAm7Rvpyd8DFfAwDyuR8MptKWGPNZw",
  "key11": "6Z7MTSgthzZZbfAbvAst4RKDUgEk7t6dKLPa4iL9sHWNZpstHrkVh1WK3NUGL2vq3icVi61PJaf4DHKYGQAWfHW",
  "key12": "89tMrKY7RQkVNE5DnNhZrCnoEvfPPPfxD7w7N5GvTqjJMkoSFV2RY3nzvALaAkk3vJSMb4YG1yyXZqjkdUeeLSb",
  "key13": "5EP4xS8ibtc9woo4FvNNWmPrfn4CKQPwMVpWGYEg4Twye5ai6BMHFZQGakqB7tFinn8yCMDdX7eUiNYkFdmsNhhq",
  "key14": "4TQWqzZ1NttVCGrBzheGtkU83SKDWGx5ifswn7tUuxWB1oRugEq25wbzDZirdPY2LWEXxHnRHzPf5E4bteNqZctk",
  "key15": "3wMFbM9K2TPykqXiuwTUxjS7tsjDxCJEgSwtenXydDHkbX7QGXMr4yp9mMgKsGNQkeT1a6NmDw95p2dNNFk8XWGa",
  "key16": "5wXgtWheQ5p3bLZQjBMRotmnkPbekaA8jyJEe3bnLB1egu8iT1UYCvqkv98jT6T8Mii6mJE2UcWUFHdAzx7tbvsi",
  "key17": "Bcxr8uW1vbWKVHnT7QQ8FFnsjpbTX8H6ZsV8CgrFRfTieowGqq8MeJiZqSMv4ym8xWjazvwP173qeHL5MvXQ8Cw",
  "key18": "25BCjwSBR1iJtc6Y1AcRRd89QxBCCcLdTYKHoffd8UTmLix2xAb5qgC7M62jVbQoS8qcbmB6gS4vuxZ3WcTRYxhd",
  "key19": "2yzvyoGpUBPQYZEXXXnMcnmghAzWbDnPgDquHnQiYXKVsQy4wEEYw6VLbfb4aprhW9jFiMvjU7AkuvxXnMQDe121",
  "key20": "46zSx1jzH3cWbkQpBtHxat84fdxQFSqLRheoZm9DPU3NLP36AHtHLyyWbtAE1MTg7vSLA1NijkhQBYvb9yAsh64P",
  "key21": "49Y4fK4FJzQ21UtsMA5q8DvX14PkUHqNQjsfQwJahExjM25EfX9hvD32z34h4buYE95vaa52m4uXvMKQRvn8UgJn",
  "key22": "W9tz7fEp5eVaDXbnE2svHAr5pH2jdXabhoLKHEBct7YZqdnoFDMbrjt84zTzccF9bFm3noxAavKk5EhhvR6GStX",
  "key23": "5io6Rn6R6bh1MrfG8Dij9bGXRk9nYtQtCKwqCFiUwJnrToLfnNKcoVqh7Pc1fAamYWJf9A9QBLuCxjrvnnr1Xok9",
  "key24": "4HRszSRRp5jCvAayNQcrsyaoK2R9PFnFtFqGSxoCoZFsBxTNfzLEVRzkWed6ueAFpJgBMoLMvpwS2ktixKBiYytq",
  "key25": "4VnHUYhsSwC598hYKAk7ueAhpC7CXd3tAnvbS7XMZfPSzhq1XCSgwXT168YJx67iP4SFb6y1EKjDqXVQLwTpzgo3",
  "key26": "3Yq2LiW4VsRrFaacKrTRud3ngCSugdmkwLMdNiSWhxbeaFBFxrTnzYuWbLrcqkVAGdiqoajnuGMbL1FGF33MsfAi",
  "key27": "xX8Q1pCZRzAdKqWAxXY6ERn5JvznwqpJkBJW95sYKU6DWyUTgVD98Hr3ue2KJzYcWaM65pBU4jrGU1Gq7xz8KFa",
  "key28": "4a9EhUXDDdo11nRcuV6cdsdHg36noEMZYCdJ3MfQKBrxN5qzqfDETBGDZft9iE9v8nKnzEdTJ44RpqyWzHBmdUxc",
  "key29": "2uUCZXY6VN6sWmidh5JirDL9YC2cRSunFbcS9dtENyDiJFku2VvxEibHPNNtWHRB9QoeLsgZCE7dbvfZr7EWZzN8",
  "key30": "5pveWgS7RpYEQVhEXuBBjiZf8vofDbaBzLyCSrAhvZ6VAc5b6vMjGfkGjxcv1S8NxSN9nZhRGLNi6uDq1HUTkAto",
  "key31": "4SuVdxUq2Xbgtxu4j1zntFcHshfFYVpkxgRADjzTxFD2md1qV9P7X9dQd9kKuTQdbbqmFoKnNvC8HCH9Wg7REcyB",
  "key32": "VqvLnWnKhbWZQspq83uS5RK7inzPgmAGdrU4k4AqZYsR3dHPpKE7MoueqwhPfSCu2LAVyfJ6FtmKXRChYY9GjJR",
  "key33": "7GBD9wWHKmx6MuRavi2HEnwX5D74M6CrAX8VnyqS7pfxgqjiyjt5QSSuPEtdhX8eq8PfNQqxCBGtxxnWSTLiEbi"
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
