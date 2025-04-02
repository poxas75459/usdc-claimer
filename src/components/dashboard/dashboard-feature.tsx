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
    "EgF8YymAJLZ7oyaCqjYixkwF89XS4K7933XRkHNpx5LZnBuqot8YrX3VeRKzsna6SWWTdx5DaUibt6kcmH8EPtp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h9HUxvDUqpwCXvpQWzp7g5wC6bUScG7Au3kG6zoLqYXxV9Rs583Q5jnWAGBGbw7LnVURxGsRB1BzQMadksJqhK2",
  "key1": "5zLoJmyNCoV9hrgNwnnCKSTaErg5UvMQgcp5kPkUJJYAL97cjmFMatMwz6T46DqBdVr3bGhKCvzqRgic3i4qAV1i",
  "key2": "58LXFTG2wTy2rGn3DoQnxbqkctWSeiFZLuru9zz5EJsJWEBDsio6QDeMbie3FdRtDkBfGQQLy3dxXMCPRskA7oEn",
  "key3": "4XNs5jmzMwPwCLkpHcVR7rBdKA9WVESeqygbcNDovcM4JMuVhRgWQdhs4jByCDSkJHw1BDrWC98kHVWHGNkiPhun",
  "key4": "2XoLB1rUbV5QChxYwWxAi6CvNPgJ8faZsGGASrERD7pWjj6GCZS6gYA4wjdKGErD2atcUEEWzsi2KiZGwzSVSZvk",
  "key5": "Rkfh7hU6jwMWLTP4tWrtgQxxBPAh82uhp243PqiDtPynnfR3qoTxkHziDPSTyybdAAkkwix8wn1AJtRdTAQbi6E",
  "key6": "8pfSGHUrzkZjPd5cdLcZXUXSn3YXJPpJQKyVxoGe4TuDHmJ74NMSonSuq8s1NRkyw1hAMTNSi48kfGqXWzP7WeC",
  "key7": "7qbQWgwZNW4CLtboivQysKAAMmZMYJaiUrPT1kkCUNyCfrcFNUAD8JHLP3WP6oEivmtWgyRMdZ6qZoR81id5j8V",
  "key8": "4yQu268oJJ2t1PpYbScTYsUv8BjWjaQqtYzCssDvNhSjTAES6Vc35zRdigoS3W8qKEPnvgbokch2MYUBzk5yiwiT",
  "key9": "3sJr9ia2ZtkgXVEP1n6UAjQNUHgGHvbt9hcSdNhhKt9MvZXMnquPqpq2d7nfxqDpSotDjwfMXRddCF483Jf8FRMC",
  "key10": "EbuXZoT9VZJu3tcDyiFmFsJkbm9E9QWEgdKa8wo7qj1XFXvJhxGXHw9hFUqxnfZ3UxE9uabvgAjp56PKFT3YHqQ",
  "key11": "4M6MSVM7TdnsrXuJXEj4zzkT8RuMpVqA18spR5dK8eKmmSabHtAKbjm1k7S2x9Mi6guDPJ3jCeXF6GkfpCcVff2h",
  "key12": "4XjS9QkkccpvKqCg42PQRgEgYfVqYnWrCR4KZs3XUdMupJkN3UZBBLF45B25UujxJjqA6atx4MALgNGQiXYbucu",
  "key13": "37oXGrF6zgHRYdDwNmVQ4vQ2vVxGHMLF3MRo26b52wYMciW6v48EFxBdU2jFeTr3pYq1WRLCbjcWQffGNiN3jDXQ",
  "key14": "3vkp3jgvHjTMAD3GQT98VbP9GJf7NU36j3cjFmCc7id5x4Fckj6ziXhsRBoTCGkktzbLwDFTeYDQtLbVYwepqdNS",
  "key15": "rgifEi4X6h6mF9NUaAQk9xmgJGpk3c6FGacHxbhmEVraCceGBhSGiiUtzTzv92FKGdJoLLSwpasrchKb5pBFiVv",
  "key16": "4ikoXPP2Fw5sq2Usy8zNdvxnBn7sftVuHEhiLuuhjiMGQxLNc7HEMJxFoyLjfDTpcczmBwMAgx7RTZ2EgjvWVqQR",
  "key17": "k86HbRfDBcqbWKJJTbmeHAooLNaxXMp7XdAGrsxykT9XFKxrJSRmSbt5KTwKmgLnFgVEYTYpN2VdP5ccou5xTXU",
  "key18": "2UzU3GAzZBx8qvTHS4XjJmL4ysZrCnH8ZKTvjNm9Q1ZB3Hx6GZ8s2HM13za2f7wHFcTk2V9cZi5nNqkmD3qzCrXy",
  "key19": "4RbNKUse3rTs29Ymxst8JqHkxzjBgAmLujySxZVEzJNucQwpk4Mbudu9mz97CtfDZQtiGvfYu1kpotAb8GjipdZY",
  "key20": "3L3pXozfAge6P5yj4SC5cKBned9cwrr2rMBBtATbFcnUzVc6wpkC2XW5R5bdXWMa7wiJYyo6DSyG1LABCbLnFHse",
  "key21": "336wDHAAhQHEiq8TYv3KYVUBgHNWKX5cngSNEdnxRa2iGBrhtcGber2pZ23siPVuN7XuWV2MDUn4QieMkQzuWNjK",
  "key22": "RfkddSgrHcorwTWZXHAse8RJgaV3mHw4tot8oRRdgKF6PNLwQYex8xdsejTZn6C6jxfDQsWFqreHnfokFaPFDXP",
  "key23": "2f4pEHE5wRvWbnhbSVxA4KRNgzeYNmzYTenJ24WnjtRonCdKqg7KnQryUu16wQnq41wpkucCxqvRTqZe4vxmmD7k",
  "key24": "5dDmjjcnM2Gm1QCV6rUkTvTJQV8P35mcPeT2CundZJMj986zwed8RdEsxFH6b6nWz9T4TnDjhEsMxoGJLHGKuwyM"
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
