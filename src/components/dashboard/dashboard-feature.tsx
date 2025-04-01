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
    "385s58wbgdkPa8CqYbkxFpoj5H9ZmEAUrRKQ6ZJC9G3RrzzeVs3nXZG8bZ8459br3gYZUz1CJMowNbYjDBpjYgGf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EbWgeCFbGCCZwZwTmu9VGzsYrLyGnsHoqMJ4xwKCxJCko1nP7c35KvspGi7JpAKpStcPk69R5j1J33ZozGktaVM",
  "key1": "52izJ54gV8UDAxDkZeKP5famKySzUtCsZ5sNNpgaV5fGPizd6FPmLdWp3K9aVSRdXHcq2tAy3gY7fCux7kzcgrk9",
  "key2": "61pupQ7BzoE1Q1wY3MgUqCzRoFuiEBUqX6uy7uXfqPAgpgzHMTa48cmvvKeXQDrTB1Wp3JRHH9xWN5nbvu86u4ip",
  "key3": "4o63dBJE4aotAKNufRR67xw77yf3sp7T3n8hU4EzGiRF5R4LzkFWGkwUDSFN7sxgcSWN8uHE28s7RUw4rcY3zrYD",
  "key4": "4nv3FeVbVxnTakesSgzNnBhgrbckw4Ro3ReVnrsR3mmrDHmYbMUPeDXy8xELL9yVcmxwYn7SE6yrUBJKSkzDcFhG",
  "key5": "324AF9E1My3r1uuicndBz8ojMKfg7FJ7XXTjDsMwVA5MLyr5axTE3QJdwJLCcya2LwcsMhWDh5ck5JV9yeTL9FHE",
  "key6": "7oeXP5gKrJUU7eRPBywvPwyMaTupU9nrKAStSu51L2n3vvTTJoxKAAwmFLdeTCoKr4xpCtzw7FK1BrSFkcRPBea",
  "key7": "mcKeXpa6F6LX5rn1XhSV4HVxXUGxU8p3EfoWXZRrBZXYwm6534yAzLouxSwovurqyXpErzYnUNQiuWaNxV1Zcyi",
  "key8": "AhWYuA2y1MhcgVB12aP67URmFksdnDbkyMueGfWELkaFUBmvW3WYfcFCazf7JU1jXsGXP242wxrrhZbWX9j7YcN",
  "key9": "3fChY3vJDjFL4tVWs1LPUPa8wWQNS5spTJFYxUTFTM9PUBXYmyyekCNNRCFrXM33JCiqiUeBGu5VvuzFpETrQcg",
  "key10": "4zge9DFqgHL3t3Y21pnfiPgWaLrZHo9qBP3NBEq1dveniLYihVqAdZLgRLsV3prrJ7qEVroMZXnjKx9jpLxof8zc",
  "key11": "2SRiLEThuu1B9qV99ASFXaMX1LoNYmrSw6pQDnEacwkoxV53tPDssA46WqShVdnD1ia5RbmtMNnwXArTsFZJkgYG",
  "key12": "3KHKzCQC5Uj3sLM2ojRDvpvvRtUfDsyujWKnpqqfSpJuzBbAC1e9n3SRb7mPaq16LrW6TUbof2q5WkfWC18HG6kD",
  "key13": "3kh2ztBhWgaiASjyYoL2qqXCpxxd8FKhc6Qz13sGjScqRwebewqeuX4hEEyiNsiDuCTqHjHoQa53Ybvq9JZJw5Vr",
  "key14": "52nhLRNKziCQWSnyJfTyTcaMJhbkn4o18LJksEpv82gC6cW9jRUF5687b3LoM3a12oRMDTjfthDXJjeParVv8MKJ",
  "key15": "5V82DjxxEqSmGQ9wdqZHqvtv71BtGoWJE2iEgkYfZR1iBuApi28qGKL92B9N2eu71FaxCuiHBPDJCqooy7FMXWu",
  "key16": "2pF7eTgz7YW18xD4eV3gxgL5nzpzDqZL35uk7cZbNwuSBxVNJ5pVnhBaz97sK6LJSRAngSVj8UW4FA7fGjcEqEm9",
  "key17": "61cfpvqMERaSshWm9jn4MvJtdb3ZKab66WHf5K7EyAtBVnMWXYp6WiidbHsUjQ5VhmkGeKMpDfrA5tmGK8YgpG4r",
  "key18": "NyrRuStnGfiXYZPxB37F4dRXBEJdWLeWTuC2oNExjXTab7vLGtddYU8uGgAoC4wmVx8b7fWUXNNEsxy8JiA9e4M",
  "key19": "LoZDNurswZRET4xz4hPDQXnPzQfrCNJShYk33p4AEXY6caAxMgqAnpcpqVoZ5BTBWAoWLvxctm9sezAJBpiz1v2",
  "key20": "3wobSn8J7w6TyZceiToBD6x3i3Gf3q9afYD1ddZPqsw1V6zqNpZftTo4EUegASwHZB2NNevE3DqtCo2T7f1E1R9t",
  "key21": "2NecmzTzZyCjRqwk4bhC6Pd3HZNAmuEAppj9hK7J3gXMHvmS3wQLtqVbv2DhuinAahTzkfkHETRWbDwcrFxJZSwJ",
  "key22": "jnXUbYqqD1vWmp3uSRaajgKsBV8WbmAiGzKMeXFTQvnGhccGu57gyiDYgRScbBHN23DdmbdwsaiMV1mCiJDKeq8",
  "key23": "3QfEdtqYiLk5Boqk9oYXkoHqQwXCm6KGSRDXabrpMgte2r9gvWG43hSDeq3HUbmVsSsVkgDz5RgTggKgGQNNGZ9e",
  "key24": "5rfoYyagxMvCTojbTxtc85ma8uqZaABDrByc8HDYDU3ysDFRnYbVswgFD47gXYckZPrzpF1eFFB6AhtKUsozivAb",
  "key25": "3pv6XQyagJqX8HLMbB5w3XZgRqDyUk7PALUbBDafUV6NALjgw5cc73CrHRT5W2aiaL6K57z5vkzPv4cowKgFcmGV",
  "key26": "22AyCRj6Cw5U69ZtFa3QneZvXea5LCW8xe8CxvwXVK3cvxeFgUHz2SNYdRrCUr43gFRaUpGeGqkvKF7gG3DTKDik"
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
