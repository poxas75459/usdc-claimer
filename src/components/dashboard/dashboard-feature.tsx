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
    "53WiG221UeYTNg7o9C6gxGKwRj33K4yE2ysFH2M9QsVqaqAiqoBvgMqN6EsCeGrwYH1tuanCgBC3WmHFALdd9gDi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oiW7mUujpK2wmUMT1Cdxgtu8T3u7YVxhsqxKSLi71xEtNbJETW877bgEcs8KTVHLQNaYFaL3iQoAJXvttxGREJH",
  "key1": "28M9SKd5UXQG6tSx5s7VsaCERuCaXssEbEFdAB8UPUiJ96BYqCynssPwTTbFYYXHQBAddYMFGybszZ2q7oBSydqk",
  "key2": "3fQewPMq6XxPxnnpMHxZ7uB2es3uthrn95xBhtg9fiMamabXX6Q5vS41WascDQhtsCFRqBQtWzDkFHHXAzwXLkis",
  "key3": "4yND68Epm4ESVj6CrTVEKBtAYNiKymHcYExtxkBv4kYfFeqMygHAKLW37JrVQbzF4ymMHdA9EohwEssaHmaTZ2kY",
  "key4": "5uB8UobNn3GbFVbAVtGUfiTV1qe6mCPBSHdQ3mwCfF1ngmtcUr61RZ5REm5d3sbSwgoS3DQUyRr2NjB6VWSjCLZi",
  "key5": "UBuNah27GqsEqu9cU8cgZVP4gc4NcXW5SJicj1YBxS8uMuF4Sr5BCFHRnoAYWj9As2TpqA3D3Py1LpkuZdtwKB5",
  "key6": "ifEa86gu1L22rhGxYthAcPUWViQGRb3Gnx579bhQQdz4p6CpYVpEc8SVw1iFz83LETm67TqNwtVWjqZcGvyjhG9",
  "key7": "r1TSjBzt3EL8Dh2knehAezmjbcHxjC7gqrjm3AwmuDuuWib5qsRL2P9C5t3qCwd4uLosqHp2vT9vPYWFaEzx5YW",
  "key8": "4wRjhrPvQJRSK6AqeiTJ9Shfp8vsaSuWn4ehdzmShCg53XkEaJ47oAiuxyj4J3LrN3KcjtjEbccSaALbGAdiVwDk",
  "key9": "4ZiAHECzk3QpQGu5RGLfZLPfWYaCLNbWe1zXiYSBuEHXFww7BPo6mSpe9tyGAyAN2KnWKKkiMfgeUbKKYzGeweRy",
  "key10": "4h6cnASVtFVDdHWQbjpeq6sWcWeWVosf9sKnD58ZgWHos8XhHrVc24U6xEHj85cfv19ju7QTV3iHnYaakAYQDJeS",
  "key11": "5vKWJZPUyf7fNpwHpqRhJjbZiE76zWzWt4t6eknKRtDX9Cy3hvkN6CyiTndCrEPe9u1dTriZMkQP7vayqQTzntf2",
  "key12": "4FRJedTUjgia8Ry5Q1PkBMY6TpSLSBySYdPdVnicjpNRQpYZfCznJfxEX1m25QLUmjcaPzJBdACsrjQVwQDPDUCb",
  "key13": "39FnJPK1dMZu8NLNWM41FpqN5g8faqUf6FdSUq8PUzgY6VBxRCAdgonxUbk4H53CTUCPYr78STy9ZmGhHRkjPTkh",
  "key14": "5YF1QGT6PaiCxjrhTs5azBeH73Nw3TGhaR5Lmz73KkJMhLynu45tqAFsm3EvB4aiTRh121VzfFVgrAiWXiJjBf7p",
  "key15": "xNvTuzQrGa75WGKeTKCLktDuvPTMfFBqbE8dgYyba3oRTJeHuzBNvU29Ay6SC6Mks6BQFanMejifdpHvWuEqVdX",
  "key16": "2m59riByBhpjd42rX8ft3XUfgsXzT5QEq89Xk8eLBpqtJRy4ESzW6E4SabfDWiNdx14vR3tNnUWFdw5dm68TNgwq",
  "key17": "2VGUxomp5CFxmMFckC8kFAPtcfeN2ig6WCaJWHWLjK8kLiEZnmTea4wUwKv9Pu5xJX8SZRK8sp3gzhKr9SDKTbCm",
  "key18": "422coaxM7emd3e22idi48TKBz1FCgr5VKSa1rNoD4FaAfFyVB7CedTf3norERYhVHgfqm7FEbHVgYpoaLqLN4NGd",
  "key19": "5WnCniQzR3Yz23PV1Jvrg118smhS1zsnvGDFu8Rvqi49LG9wybdB6KMvXYQiiCkm4gqwbjgCcwTP7UNCiFZPwwSp",
  "key20": "2jGX2YXssWsnTay86qP92wJBcyEh3h4kRFJzbaUZP7HvXBiLeNvDhZ5KcryCv6YuTGae7ziBfCrw3r9wdLUXL8BS",
  "key21": "2nJvN9jnXwZaTuhXKii7MFdZFV4GHcdxJHaEyniH1WtsxRs77LRxtF2Ee1TevUhh8xgf61wCum2gSNeC8Ln4Xgu1",
  "key22": "3Nid5jWTztaUkTiDDRVhYRBfqv82gUtcEVLsVJ3V4Vifoh2xcD8yF25DJbgoeG3BdatNV2fJkCcGsDaE1diqSSHE",
  "key23": "4Kjepi1HaYBhXQgtvGbGXggQPEsFxU9tcxceP1N5riZPv5kK2g3bRhcayADKBRyjTSWt2Uqy7zWJ2XnEqYeVE3cu",
  "key24": "4KY8b5ZJQiJQjAGK3PvNNyXTwvq1Safz1NKJf9cExYJ5wNDRFgAsm4kh3AmiC4KZHk15PGJ1nz4NiidMKmernxqn",
  "key25": "4VWbiC7B72GkEKwFNYGQSUuD7V8pGgRm32UmX4HWfybtQj2SXM1XkbKzSRuDsXMqcPxojEFMd5GwKYns2Xgddchb",
  "key26": "5bju33xPC9NU1Vvd8cmjJZXzLEd4tceGADG8rN484CW4zCBC93TGRzidfyokiP8ogJUd37xymY2FdujhTxw7BfaU",
  "key27": "4i4ytadbbsj5yRALFYc3nRZ9WmF73sakRZZ3Ct8dKbfbnp2hPqrNhQEJBr8LGexjF6aLA5eZTzweBomoHhZ9jnzS",
  "key28": "5YbiCGWWGPkUyWRowFYHBssDvrPzh7SgNVJAYHJZEMfhH5DEUD2YrYahNNiqDGxEWtE9AU75heeU2gWpXKjqWuoB"
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
