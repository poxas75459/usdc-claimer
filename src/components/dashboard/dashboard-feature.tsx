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
    "5d1Kc5jEa1j3J7AWkhR7SSBGcgNBq3XdUCL9TyVYF6hTZBHQCnSg1baCbGabvK31UBa7JBGnaMHQegkrRnWN6jtF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ezd4iJoDwdhnKP6FZMqrku7zm1jjCQxkZSRdNhRvXR1FJ9F4fkvRphi3BM4Bvoypzf5RZdcje9YmNLK7pdRgAtB",
  "key1": "S23BqApbw5x1oSNwzosSrwbEhTPetGN4yKRipFVszZX1oC3htpCPuELeUi41CaSW6g8Ch4P9C1Ugi8wrYHdzs21",
  "key2": "5gWZFZCKghKNv7CSUouSTNSMbpJEHPenKxU39GoKnfC4j97rVER7Js1EFQGvDPH52Bab6KRr6G7KjD7RtBh7b5Gd",
  "key3": "2zLs8JyTgCqsfitYjRaM8Ei9GAzirQvKjRfrCgCibLMHfSzPwcyuhkmTd8B2GigbAUUX2Nqs1t1yYks4B444p8AX",
  "key4": "4hPhkq4fdjrKEVSXgF4YDjv3rkj9t6ZgzWK5hNzzBPjQja8tdPP794NE1rUFs2YpqLVwgryVBQjjrhHQ5AXQYDq7",
  "key5": "3vcFBBiUrdCcqs5mufDDN1y6QWE1gf3Kqocaoe8dYd4pv6RxXhD3RZLwRW6jWhWay19AdXoAZL96D1v2GP5KtGQ9",
  "key6": "2a9a7htdbX7nes7jNSuQ2r5iQCa6AbdvwjNM4Zpa3nZxbhQscno2AbeQmPQEmRGWq6Aqf83aZU9sQJpDEVxo7Hfh",
  "key7": "cyGLBNdRvvLVsMTsGnBqsMsk4VRsnz3fNmvF8gbZfCi3D5UQn8MGban8F6Sh6XXhQGhY8EYKS6NhnE5n17ZoxjE",
  "key8": "4CExTqx81M2bMgmgt4uvAFm7pxkMcxHDMPmJTwWLxCLA6Pgjq36nrEr8PSxqU26ECpuMf6uKWWKfAj4GrJk6ZMkX",
  "key9": "3iHXj9qUaPc4WaUpCHeCofmsw42aYss68ntNLXjaxqNTbBtkMRCPuUhnc3cdKedc9cWE6JfbzKW9NAJGhzsQj7AN",
  "key10": "2MuShqKWDMUtwBRkSS5z8bDZ2kkRyevErMr1hhcp64eYv37tTLnRLijquyenq9AxpKKRYSUxxPhaSUXggyqNVg2r",
  "key11": "sgVxSQVGHaf8PEigzYZT2fwd8FbE6aBRRnKdaQMVW1QyJcTQ9L8pYp36WzgLy4DBspSHiMaTKewjkHUb6maWEwA",
  "key12": "4A7dkuewiw8ATaK2bLncTdjkTWybSgS4KFPkQ368v6Bz63z4N5ugs6B1RtSwbWu5jPXnBxQUBJTzF87KM48i6Kgq",
  "key13": "3ewUHKGGX96dw2tFfge5ogBBZ9PDptF4rwkZ4x12NRHqNaD8aeUFwfrpJDPS8SgrT11m62d4UU16mBkthCDKMtAV",
  "key14": "3Vz3h81Yv2jJQ9gE8kT9xdfQkFxwTgCjqr9vAxXxjhsDoLwRaPkQVbZdqpHCzdi1ZkzCJEhfBE54H77Qetoy7Cd4",
  "key15": "ZEo8QXy9f1A6GYpx2VFgB3mZ3a3vWP1xnmRKTKGsozdwqAFtgk69Z7tSHTjk6cdst6JA3FV6su3785tsPJtWpze",
  "key16": "QvRgfGnrxT9AaC5vd6PjRiikggLCmyNCD7WzbXs8U3QsbyndibLgiUQhsnwL4K6cYAYYxGmijfdUqSjjdrwnfRM",
  "key17": "2UpEy1bKm8uMuCJa5XxZE2NyYFgEAxrpA1KQjp3r8oqE4meAhMfSLMbwdBa25FDhWse426U92fwER1HDH4G9SPRz",
  "key18": "2uc8ChNDqWhf9eFiZivMso8rWQT7E99KwZcw7Z3h2GnnstmoBQHBtR9j2eGnFaQdcybtm6o1BiSigr97p1iE5ujN",
  "key19": "3FCZPYJUbgQHm2ZpaAW45JtaxEezHeeqpe5e2FRuco1JUiLQnQ2T2iNXe6scAvRZbSgpSadf2uergLqMLfsfGLPg",
  "key20": "2fDuCoYow1q4nbcjqfhN9aRjcg2chcaGDnF8CU75bkVfWkjxBHXHqdaqEmwPFVBfA1CTg3dM57zTsev3dQ3BEHTd",
  "key21": "525sPwMJiMCxZcMkv4b51Y5HjnZdg67wPFjTiXLJ7TF2FNCvuy7UJDjhfuazqCiNobByH9GEavxQtn3aasuwG6a2",
  "key22": "2ia9JbMZShYpSudGBszfQSp2AvMPmg3DGYryndEx2vLtMCotHhi932t9yQkSWuTHGhFqrngAfsmUB5xMdeRYFJSt",
  "key23": "3fNHmSvE8sTBo3aao7Asrjhsfheu8Lt4Qe42GUCEuTw4CAC8AA217Yi3GiWEtKfR7kCC6Q9wJpe6zJrF2sdcu3GK",
  "key24": "2D9yLhmvY2Avs8CbXw7xhpqEcjB4KStPhASdap5nKg34ufkkRhK5fnczBfcjJQrWduhWczGafkSbJM7rFJwWfc3Z",
  "key25": "5WSyi5wy6MBdYW6s9fAbVvtD8SwWsPk7u2s4x6k2fmNpNetsHjLgfytnnXbV3nTfPx2RRskBiHrHDT2qhP4efx9K",
  "key26": "2mXVjTP41JNXSk1Dndu4JAbFUJwwhQ46R3M98wo6wG8gRgWRojuuesn3mNin4bxpsiQW3dWGi3BqmX1ZbnM3CS6g",
  "key27": "2GkVmdR15N5uAbG9gq5hvgWwkKb8gsvSmLiVNUXHsPszSdnhn3GRxnmrjcZPDjcduz7ZyexqpgAnJbvRETXhag5"
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
