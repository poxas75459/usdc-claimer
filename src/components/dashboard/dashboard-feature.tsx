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
    "5xUCHtyBUj7RuzH9qudDttEWQxzwfREb6FjwBfWwnTSRHbWgNfF4h7FKyhMt5D3eDJzA5sdbCJJ6PKqiVLfCQm67"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yPn6rr8bsk4r7Ve33rZzTRQUna6iQDNABYxyuwgNVjH9LehNyz5W335cxrHumtsuVjge62xP3pvxX1x2MDgdkF9",
  "key1": "5Ugf1irVAMvmNeSuhpuBki9Fac9SiP7HLQ4xYAYbXdNzhJQ23hLgk9HahdSTuTEaL6B13rHevcmWHFYbHLwCPXD1",
  "key2": "2XSdKizC98kEkPnrDrWCzd9dcgMKByEVZcf8BwPHhM2NTbfu1FSB49aFKpBBGnNd1ESCKSX3hCriwrrDVHVLmVcQ",
  "key3": "2SAzCpcidDh6Pf9AdyUvHxjFLHkuNBeaSpfrfJcKLWvGzDaUK6aqLc8zegBPJtvb9e2mPu3tynTXu4QSo8zkXU14",
  "key4": "25ekMQ9AiWyQVzUp7hdWebioaENjW84WhyppKkxTD9W27rmRfofP37eY67RGCwf1kYVkgnYHnpLVzgvaafLbai7T",
  "key5": "3a3qddrCdKTDC4Qp7n3QYMwbixWLmFzkj7oGJStQDNfwCddWFLjomw8gUFwuNm7bxbg7WBdm5oyYHShnmxTYuRP",
  "key6": "28YwDEQogQAsrLpcQxEMHx2TQ8XY6TEv7sKWSzoyM4GqGeEKbabwcRpjK1V5pPKUq5ysE9tBZvGNRkuSiyUnZugc",
  "key7": "22Lnq8sqViAFU9PJTggmHX5v1igqHSBn4ujQdkpLVykDjVdXePPoi4voFCTpSbcNHwryAQ1qN5MLDSJ9RwEdh2J3",
  "key8": "4JBafecPjD6YDGUkS6bA5GAyp7nFSZisb4CgAmKRfkjRJgGGB4DUAfyPbMKZCbJG3CYM6YQkLXJYABAUSSQeTbtA",
  "key9": "5WDvrge7yrxa1ZN41JRvqvunnomDeEycTCHQaPkHpcThGD8cb8QbA1cPeRpp16Hz1cQJFUeWas8qrUDSeQdcu2qy",
  "key10": "2DE16oghczogXxRVV6TDxBVfvBZq4wWjm3TBGaayarYFFUZNCvjWURBvnzuGfFPUd3ZTYG4nebM65ANWuCZUzbsv",
  "key11": "2AchC2i9WNDugNba5M1HdAVKh3yciS2VZ31tippmdwrWVo4Evst9gp4SHe4pbFT3cdWd7Sei9xF6GhJT9uTKnV2U",
  "key12": "423SrJzrXXdMm6B7Wk9LFVan84r3ePbmrXGEFxCNdZKiAL5Vr9Kui9v8vMa3R9UgacECPMgyaeeh9RTS9sbpC2S2",
  "key13": "51Ky8SaJRwWeXEfQkQLGWYo1s62y3f5GkU1qAmawBrwQujH5XAtY7F6FZfpaaSxRMuNQLyMuHsD2NUEzswiLGnZb",
  "key14": "35EwXAWGKDrfy2pTmgYnPWdZJ98gPqCRRnk8P15p9cBAnsoy4LxcxF5TkpA4iCu3cgubkXkbaFxaYog92bmCJUGt",
  "key15": "4ALGgB3ygE1MgqixfqHXQYXj5iJ2MBPkCcoqnrfw2HabjwNyrdo16sNDs7DEqkDfFBiRwkdxDm4uVGT7coBQBHJc",
  "key16": "2fvEBaDKgM8cSsKK4UkJkeG9HYMbrwERKpo2DthskH23WX8rf32SMrZRYSfCTeqENoaKPisdiorjCj25xEYp6qHG",
  "key17": "55HJtWbRATntLTkUhbyw9mHAFevsg8bjhW3CHbg3o1mohegfU6yEA2LkkVTEZnLmWbdopoqPjA8kNnDExMjH1yQo",
  "key18": "ssya9gTpFW7cHek8Rg4HaVnZNFi7CmWyrTxWoP2LcPyy27ayaQyVA8VyoKkN1hKUGCTYjPKKTYLH53L3FKcqrH7",
  "key19": "4WsrwuHTBpLPnkjdFdP8LkhzeqAPP3J7LF99j9999rJxqJ9t2Uz8SvFF6gSW3E8DfLgEHkyRtXDwHt6vVAUUfpko",
  "key20": "5zxdQ6PHAfaMAqJ5uRNBLCqG8VsXQUDrV5szzV5mgRtA1HgRKZQm6TvqmXHnjXeLHYmNFPRzW8YimAkJJx2MxFaW",
  "key21": "2u3q88PRaau1sUrJ9cxa7RrbP2bYCKfwzdCFUFvYF7U3EKRZZEnoF9EmorJcZ9Ux8DucVPGMU4mG4pww3q1x1Bpj",
  "key22": "2bkDwqfHLVJchLdix6teZs6oKJeqgRFNm7WJvjhNoYu9qkbmKkdQLd4X7uQfTRX8JroU3WM54eD348EUr97je6or",
  "key23": "AByw8XLftUdhQpW4VF5vWMaLjNEXqrwTTcz2mxCuQdoftcRb1Z3d4ptX6kg3LYGCaScRZhAmdEqvfH1NicSCYFP",
  "key24": "3Tncn6c9fGN9m2WVtK7ccjrZMd6ppDPuY1GaZrAw1U6Whw3T9mWjNjku89nK5aiNQDtvfVTYyKGkQvjjTaVn1evc"
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
