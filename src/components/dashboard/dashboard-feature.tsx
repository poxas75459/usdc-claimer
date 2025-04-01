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
    "5Ry42nVvA5yksX2t5zaNN74a9azKeptKTidFwKoEbtWWZjvLKsir1EmLyRqZ65N3NBjz1rXR61qhEbjPYn1zgsRz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MPrw7m5ejUmnx6kpoPtdqv8TKg3YUVx9kbi5hAEghbVqqZbR5oT25WaSCZFUyGqkrxjDiJtjFKVFk7E4bkGJhUY",
  "key1": "5MycCJUwS3w57xKEPnJYeTNJ6txLdMLPS4QcV3XwnpgA6BVPwoqhGtwdaL6fHwsua2c2EUdzGkb5yTSswUxkFixs",
  "key2": "oi4hRkRsA5PNz6yMngF2JbJzMETiSDivUpetmmeHiWUZH8KnUYruBHJaLFvD5ibKvUJxkjduhkySaY7B8QZHg6y",
  "key3": "4nd8kedD7QHTN8iLTeZYb3pkRFuRND7sicrm727yrniMYRb6SaycJXiE297nqWvuJi4JBPJ6LAByWp7k3V6wjfDR",
  "key4": "3cYaTXQz2BhMYh6ba1JCMrA1ALTJ2Jfd58SKKBCRWirEnxUoK47NmDmUNswwuKagBhb7FebsrN1vy55vYZkog8xp",
  "key5": "4Q4Sp6spmXGVHCHmKqWGibH5uj5Vdf3xktNwqR1YPmkeeU7hoMvSxs1KxFG8B4r21rHg9QXsckN8TfuJgn8Qzt1a",
  "key6": "4egPEQhTQL72upoRTHfyq7fXHT3KNTNCEU4Ncd6wx6EToP3vYReifJ7ebQo6e16BLvCqmJwt5qQGqvk3caiS63Ux",
  "key7": "4WYUEm4Xe5zLaFrocH2Gg6zfk6DYmVU6cWTUdLvgKpTJWikdA76WdEE2LYbxynGDJkfhV4tYsSfEufWBnUJi7YBA",
  "key8": "2fFDtRg1pQMUf8QAmmURa8ZjpSR6FePSocvRvb27A4tr94UVBq5ULvgwfREyqDQR7X9ijFx3mAct269C7zvmJStT",
  "key9": "2ZExmMHScJeebxNBuPG6ixhcNFZbSVPZpCMvkbwNM2cCxwzj7Z887f5PMWAVwN1AviVu87aeWm1r2sxbsoYbACED",
  "key10": "4puznYQZeGuGk3tM9o1TXreLKyR7dnwcLrwV5hP2Wwh7tiM4KTiUhRQrPkpAXw6mLwofFoqbgYoHrYupzFwsWqFT",
  "key11": "55FL5bZ2qGZ8By8En8gwLctcVNpmVswuMmu8iwPLuoJZXAiDPczvPfKERk8coJas8uekQQz3CSjtmX4X89aqiRNr",
  "key12": "pNwDMrgvQUmE8tx8kYu5MK7fzrCVuuX9WCxLjMitZuikwt4tsnkGrREDTcEUK7RwFGqsDgrcgPfDsQE5mSxcfVb",
  "key13": "3NJjXanYvWEsqapH1nHHKuQxCJQmLAjdUtaopdChNrAQJR1DVUQWy4bpz8JNd2nM8oNnmanKuYXdvK4UJUZpPf1x",
  "key14": "3krdqwMLtEwNsPPde42WKpYykJzi8k7phU55Qw88t9bPocEgGZ73aXnwYdMcLbeiybjoNVbyqFh9M1BWnzqsopKq",
  "key15": "2cjQa3mdQULAaE3B1uTwh7tGhjvNChsmjLz35FRR2JRBweTg4Rki1fStZyHiRLiqhASVuLRWYQtCM2t1KZxYtnP9",
  "key16": "3sTHpMUYp2DqWsTm4518xdqdXn6zs8tEZW14ZzZMePTzZhspbhH8tsFJXqhoPNkgLNEcNQZNDsriAhcKym3Hh9sD",
  "key17": "2Q9kWreLhgDgYcbMbxSRc5DHiJCgktEK7Hpp62Jnnx8SAbnUyQmS3DVQgHrAxExPRhyj2YhSHr5xfpsTzRipPhYk",
  "key18": "5JGZzY6td8Ew8SK42DFPDkVQ5nq1pPDj1nXtK4NNUuDjQZUrQUQYzAhYFYoqC8WaXdvsdyhW6LipC2tgFEjs9NCe",
  "key19": "5FcJ3y6fBAh8dFbjkiQ8uRSUkgttUBrWTyhGnXmoBm2dJeMSYGsusSTgK74mpaedCWDMCLa5SPGqakoYWwsCLgsd",
  "key20": "2d6RRXYZuVHQZ2sggUgGFo5GcAwUHk1txhPTTNaUTaod83x1dv7sLKmU5USRWQZSKwhxex3U9dbsu45Vp2Rx51Jb",
  "key21": "3KfpfiZ6TZM6Nc26Q4W2bgr12Xy3TfuF55rWMjix5E4axxWYnJaxZVrYFXNtvLne1uhcjkEhvLfV9T9o1V5TNzoC",
  "key22": "3dqdqA7JNntCkxytjNrstM6cPrhNHgkFU5GN2Cm1mSdNNkEWszUudTwiVdMrgqzGXUsrrk6XwEMHFXTrqK8FMQVD",
  "key23": "5GQQq6RBbK2bYPPrcA5QmDwqERQ5a1TrJMuttqSLQGhgZCrV2q8Bq89xUZrqPHn5xLFgyjdUsks7QcKJYV2KriVq",
  "key24": "2YRZpaNJtd3thio4uuBQeVJR16YAiPbvveU5EBuQhDBwEnB8qbjrgyTzRKu8qHSTnJK3qZK7DDvhjp3be9EF6upz",
  "key25": "5byJGNV47asVCh53wEhVEXmabgLutB8caDqYVAnxQDZKUAhN3zyc8xknGSHW3FwDFbBTrY1NBdukZo1Rx13XVsAQ",
  "key26": "2rnJu43kxeC3bP1vjQfL1K4xrq3ntDxsk7fBAak64uLpTncpwyjrmeeCpzQSFXdH6ukU4k54RRVPZ2shZrZi5PoV",
  "key27": "3WF9EYeFBoB4BMJCyDjTSETqGbT7zfTDiY6TPPpF251SmiNFch9sypQwcpx83NQvyRi5sgVTKET1gAGvLoKLGtZ5",
  "key28": "2v4tcBe22M8ZdQEghqspkDMmsxB7h7A9n7b4ASsT7pT4WekpdwPwTAyVK9WNqq1o2Hm36BkdPk8mWVdoyqA4dpyV",
  "key29": "4hkEiTdL9eU38XHoXW1efMUA561YfUpokxH8QHrfgqzJJrLKRjXo37qDGPmbPTD4QaLSuDLukhgUhqr7GNYFbs7Z",
  "key30": "634fMPZNgCMekBgThRbAgs53nPhgrhLkZKvpVKwYB6uE2RrTEedxaGXD3Ctu33ircwYC2C9WrRWTCszB9NwuJq1a",
  "key31": "XcB5KkWDnJDwqAwspMqWgGdKRHnHVxcqp3r2nXnpxjdtoWK29YXXJyMpHS14U2MUoo1pPyLBs41XCcWnbQuUWU4"
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
