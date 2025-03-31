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
    "43QVYKRQuazVDzqZeVRjMwxXPMpwte3WpehMmZ245dpi5emtk5U8P7WTHRcokExUCU4FNENfaEqDpYJjaGHDhH1c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kEKiSyewjWYstSNLJt9titekXdEw77VABD7jdFwBzQJzexWjRrcf4Pf2bSw95idACAeFqudEWVF77vT5rktpNMG",
  "key1": "5M4m33LcPxaL2rmevpSbYtP36944GbFE2ZYyzwJTM9Fw5TdwzpjsP9WYTtpNMjU3sePu79mmWQWf6ziMqoTD6iNx",
  "key2": "2JQUdicSmA8oYJ4zPPRESR1iekPkEQGiVaDEiFNavM9t1RwXwZjLoXEZXD8kQenbBpw6shymzrqjC7T3FrRMkHhC",
  "key3": "2FVN4xNGnN3xnrLfqZdNZstb51sZ5nXnmuV9pkVmjvZWyrT6rbrA3zey1XgKNWP2CupMrTwh3AGUrPwRkEpcMnq2",
  "key4": "2d4p3UXKVUjM3yiyH6i52jFQkZjRsWTGMogVbdEmZsmWTvVDe7B6KM1xcufW51L3V2zrVADFC7VNyfunrGcdgjQ9",
  "key5": "jmXYvvXB76YKVy5KB9qbQZpXFvLjUuEZLY7QBjdmf9RtAy7o5DHGuBnSHfFqBx4uaEjpFgtk2y7URiciZ4anp7J",
  "key6": "3E8YKubCkjKH6RLUKhJ3gE1EJzbuoo4irs2kEuqJtb8JYCe9TGk8WJ9ZXe4d9FEZCATvqtRiianDEXEery9CLsu1",
  "key7": "2zuh7CeEvpbYBDdRBDSyhQbAgeTMLf5KNUgxMt6Kk8LoDncpsUuYzo7rStbxahixeQRHs4FyY7pewX5p812VDjMC",
  "key8": "61jzJzuh7PrUegwKZhiznihZPyamdnkeTaDxYuAQRTJCniovFAniSdG7tiTD4nnhPixnLhRCNqfZY1ATaNTxVWwF",
  "key9": "2Zw8A3AoPAdURhWmFW2iVUyzz5PMU41DvcHTcbokaRcCfs3n74X1GvsofunVuc6FHeB9TiUrXAo9qncD5HMhvXx3",
  "key10": "yC3B6HHt5AXED1rT1XMNfArpdpuQJPLyvwx2SkaDQ5iY4TzFxqALUJhLSDqQXGrWMbbEJ3sndTmXgmDY5X8dBe9",
  "key11": "5VS7XhwaqDo4a1habjXtLfWszPuNiqhvVnaGQ21wVUBxcVmkCtR3oN4q6hxJYy636Gb63nmx74cq8xGRrjRMdeX8",
  "key12": "2nz5UZLkxQyGEQgoNH4KV2cHUEKWHoNe4GF8B2z7Ph8Sfk2amJ286TehMKcNSGqLQHVJZG9gqaCRoGXueRXcmqfN",
  "key13": "3jzxVVeDyjg2JnvjciuFiDwAUwHKjhqb1hJ87qRcgMsw9ZX6bBL2E92W1f84row7WkhVcyNwrwHaw7PYEks22hYi",
  "key14": "52VACv16tnxQWGhGwbPpyPZCRvCpCg7pNVf8vdZyEumo4ehVF3HfGePd9Ai2RiFyyXc5t4Dw7iUnA3V8FJsA9N4h",
  "key15": "eyjHH7vqDK2L2ZVfRLyUwAAEU76SCTBWWWL49ur1kWKByF7hDLRsKC88UTxu8n1zQkuFBHMu9uo4LazzaVeQpZC",
  "key16": "3iBc8UP8ZLY9BePMHvmfakaBoXetHeeRRdRkt9FjmAjWM7aShqJG1pP3ckYdgZeNBkcd5hKraNR2ye9rVkaSCqJg",
  "key17": "3xpKQH423dAbiMYSm32LwsJTt4ehohKnTFAg1ryKq54119CoewiJbGMiDsD5uGbFJUKpWTqpZJj5wCyfCGqekWqa",
  "key18": "5f4qadAPB2BkGQjWdyZjtjvTyZ4hSrbfZyFRh1t6V47Bmu4H8FSdTAqNyPUHrB5hpGakz4DsuFBZUtRKDQgYmUFG",
  "key19": "2VSQTFjmXY7RteVydHRUaN4ASyT9z7ZEHhUEqauJkbCJLnQi3vRak9jrRi8bozGmTmxbhLXZhNJNb7Ya9mcUzsoC",
  "key20": "PBWRZVmCmeQeDwTGYRKft2PyUFhZnToZ6N9snraDV1N3D6iAhMaizaf6oxCiNik6nYKgnD8tnTMVqeaEFEiDBKz",
  "key21": "4wA2cW7NapUuwsT49qm8uZeWYDuTMFB1p76qYGBT5W1xTAKuc9Xag9j78DftHgmiWHpwM1Rh4pM7ZeddF6Nkuc2r",
  "key22": "3sr1Ptem8TmhiV4veXgG2Xo3rDECv1heotwmLr257Sf8vy6pdPfavmMCwF6WqydtgCePmWdJkr2G1R5hQ4y6qvWb",
  "key23": "2DvYKn7B6AcDAnHEucEaeku2Ayo1NhGzLoFSVqBomFC541CoyS6K75rMUk86jBcSmnTz5jjTm9PScnQkB3E4M5dP",
  "key24": "3tqYk1BqmHNxUVDxJPwA3cR3rpJggdt9JmE1XbYNwPvzQwaR4To61goBoTiFUvf6AARisF24iEYPWXAZALbPA5sL",
  "key25": "3n5SRP8iXTsVxLSxM58jUurx1TysMDvdv73D1yFQJqQc3LCEgdfLgKnzXSEv1NiU7mgMUbYMyEJM5Es1cqPgAcLL",
  "key26": "2w4ra4fr4yqkqbxoa6Q7AwSYiC1KzLKY4PVyUrK6m6XwSyqsRxuYYtGyUqsxE5CUbbaWtDiVS5E5mBfgfL139Y6k",
  "key27": "4MkSQDjkpbTiLW6NDE9uH4hzs6JLDmik9jrmpLabfDURus1U7CFPcMP6X9vVynHYh7ELjDsw16FCGcD3w2GacCwh",
  "key28": "3dFopyLfpLFtHi3J84BMyrcd8deKdE4XvVNs6LRT5sjNVFgWn5yxsjkkrqAZt6VaLv8KHQthawe5UousW3zRk8Dj",
  "key29": "4sLTchLffQb2r2qHrRQvGLEot9gXtP9pZRf7akhuAHwuEUq3zxcLfg8C2tLzsTqQyL8p6QrdYhGPdaYpcATfJp44",
  "key30": "2W19T3UEyj69uXVwY9gsbdMAgA5d7DXQcLzwwCccN3cn2MJquRSkmKBmivVQwurftvNAGrsfgJ7hTjUXRMFBRj9J",
  "key31": "5mTkMMHDwspL9qw4KkWYdLz9MZjhtZ9KPxT3g7phKe8VAyxwDWPvDxQ1s33WA6YybU7Jf2MQeqH1Sk1jD1ArxPGo",
  "key32": "2oAT4pDTLUbL9J6jJQ9ksr8T4wknSqTze6Qu3vxahGikp8WZBtCihUwNq3bHVQyMiCZWNeg4tMosvBbVSzLJZbRw",
  "key33": "3Jxr8nXTREGxyNti5hsiaoiXSkpEukgxvge2cZy7FFkAGzQxxap5m18Jtb3eo1FKnJnrh8hhK8ZK3WJZqqXMw6Go",
  "key34": "2ThCqzDF1eAuqw3dfp7h4PNjeZTyCpJQQxVkSLCwFSgZceswoquT5DvtqpPgA8JuuTDz9E53cz8tVPDRwbv6765W",
  "key35": "3SHBxgMkGTCHrqdbHFkYTpAnrn2oZ4pRP2xsyxwTngEiSZqp91Cn7TKWA8HkrQxfsEkSdJ3F26yKNCqVVXRiTNig",
  "key36": "pfhxxP43uo3N9WdMUFNg8YiXsTocwHj2P4TtQ3xoVvVKnyDEmWD5ZY8gADWUz7Sk8rd4Pjy97LXAMJbkdebFbeA",
  "key37": "4yJ2eB1VhqGMzEW8QPexYN8nPUieffYTxdGxy71ZitfgsUbqXk5QVMixsPGJEbc59p7yNfMqJjz9RHEWRoDtCwNn"
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
