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
    "3LLwSGhhQnGeYBzSbqzcBQLmkjPG2eiN63jQQjbAEBnbFPkLfPNnrLWNcK43JGxR4vSr7ksYeLqMgCNmZ6sz7dhU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bWb3KhAh6XmJmmAU4iKcQUQAE3LDfjR8v2uauKgBbSLYR4Xv3EpTfBnBDTD4CgnDc2By99HuuhkakSYwzx3xZaJ",
  "key1": "2h6RycjN7M1FMjYH7NwB5MyhUafUYH4PMMRyHLk3V1uGjvAqUNGEPbpTJEQutLhgS41zty4fTdP91MgwhfXxqxER",
  "key2": "31hk6u3BRHLt4fsi6dNPLV1puxz99Q2Tuq5NTndu9qzWHPKNG12zmvomLZkuTV2zFA1qJufiqedidKxuwj8ZfKmF",
  "key3": "XYLFXzf1tqpPgK17K6D4fS1wQK3QpNd5ipjLyjWbpDet1FTRisQhohYd5GEz3Vnhuh2vSDbZzmMXzfYBSjLbizu",
  "key4": "5Vjuab2onahJRUsHRe39ydQwVBDxC3QHCyox1sfvLMFb7SLEjoVTnNJuBpnVpAWTvRbzTeMEE2gELuvqrk83wkQQ",
  "key5": "Y9FtZZzkzGWkZ6U4C7hz6JcNBvAhAFdCu8KacCrXSX1Xu8FywtpkqyX2EnL2CaM3qZn7AEVP8PhKn67iNdurURp",
  "key6": "4vkBLBn2WMvGwexopgNuCdiDKqHe5nbKSx9BsgixqK6VBss8skZuzcjAUN1V2p4yzi3gNDrPA3fQmCph4YFr7huy",
  "key7": "5sAmpc96QotQd2A2isYRKMgmaC3jzVjD3FaigReXXkU5AYRrLu3fc518Sp5zFPygLRE1bxgNTdeQZdNLPn7h1f7J",
  "key8": "2kNDCKeohwdibqsUSv1oUtjaKrndNCakDULMfPQPVymCYAAAXNcdDDasQfLAMiGDDVjVYDn98YfTfPA6P1SZMstQ",
  "key9": "2cysDqYK7omseaxGfBa2DRcJsNdXXNxMF3AKrT94CJGK89qDU8q5QWjY44MtTKVaPy6SmVtodh9ezxpuCeD1EC6E",
  "key10": "5Nbrcc7TYoLbdgEheQZ3ixeFj4eB3AMEtG2e2fdtrtW4XyPQyVecwH9PcUoXpLfDPXNQaXUKBozmyrFN59Ra8EYz",
  "key11": "3PpPbFdSs7niL8c5i56gysz8grSeHfaTnSUFptDKitykkZzYhYZReu5odRaL7bVkvkhucapvmRuzKptW7rRFxYaD",
  "key12": "2MgR6UsdWWtA92WdnFwFXULxUNEDj95qnDfTevkKiDmqVwphdvUuCUAy6d6YRzjPdg7bnbDdzKJM1EUybiCoU7Xv",
  "key13": "5rSUhxGLeeiAiXygejvNpu46KhxwRbt8jjJ3yrnZx38Wp2jnK76kHBcEzP8BErwCWkfLwWgdKEdJgUyU896Jm83V",
  "key14": "51DgSyNP7pimomTjLeQp2sxPSxF5a8LJuQ9phdDUCSYdzihAzWKvbWnwPtNg5CbKrsST44sCeTfF6AzjbsufiHFL",
  "key15": "3EEfQGSDHbherrBjnEM3ZjWUqJocmC4Pw9yh6WAGi5fzTYtRkyJsdQQ6BibfE1R88fnv7xB3ThznB3rYD7ya2STa",
  "key16": "94pqtVovpa3FDh1LMb5E8TiDnC4eY1A3vUP8wVRUompCdZV4fcN58YT3SNoRZUhoRJK6H5EJGJVRucmkBWAyYJP",
  "key17": "4V9TQH4hxEp4VsbW4wvuzWBD5tV1QFaNcekXo5wKJP9TyXAas6fniPkeyvNNnvmxiBZuzTFSrs7Sn2U2TKz4wjqN",
  "key18": "5ZHNvHMVMJVM2PYu3snJDTRU3fKQW3Vta2ao8q2nFb4dy4hUyCDsDry59hyeQ9nSYgGpXNFfCMyYpb13GnTQdcaC",
  "key19": "4QMQ5ywGrQkvFCBbWVg3yFESKx2wdCnKB2AhHnbXZYw2LAvwsuhnWfEPucWc9wMbdeRB7KeTJgpwQ936FutvaLo1",
  "key20": "qSQvXMqf7h4JJq5AxpVAvbkfHbdSDhhoPqYnrejDSSoJQ5FBiR42nsyfSEezEUBWoZdWNvtCcXgqXedpC13wGvh",
  "key21": "2uw1fZ4BeaDJsVvVbSFhdX5VuJu1BoP7ke4AN3zNTAaFFAiaSytUjorZNnkApGZuRLFkqdg9on5NXQYgvunwBvAC",
  "key22": "4P5cbd4t9SYodY2ivjMnTZBhYLDmxgWoga5bqsCc4P8Mo2k7UAXqNg66tBmwmqnsZHgMFxyKpzTsNR5D2vmPvNU4",
  "key23": "VjbZbVHroqdz1Bbo77LfbwoSfuYycda1rbtFmAC9ksMVHJDsAe2i1F8By3xoCiSRRQQ3a59tqxCDmk5ihNE4XUJ",
  "key24": "4sv7NE7SurFxUHnY61s8MGG7twA1BZUtTRfBAYvBrp9PMHAMaUDK1a7VsVZKSzJQjihNvGieysf7bbV88ZKcAW6Q"
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
