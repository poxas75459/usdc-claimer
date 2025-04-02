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
    "5vk9MvBRsGbMjthoGr2QnURtMyEYQXu89uaKFLVNeE8wriFvtoRkb6cUiEwzRSAotJSsoTa3G9a1WUoPQia8eBvo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Sg5nvJP9MajgUa2uE6v7mAhKg6xvLHh5jj3DVepYETGbXyp2THY6FiVFZ4FuYjC1pg247hkqKdxoKVYaEGZ1PAx",
  "key1": "2KDgTgRsfBhUuthmNBxgxCGk67Gcsn1ZVHu7MnQtohhPsWqQcn8H2inyeM6Gs8UohMjdaReJQ8M1uW79W8KB5vL2",
  "key2": "5EA9m11y2w33kbtQrFiNPjExzY1EZuUpT9a8hJA8WrWuqdyEkJjKNqqYZ2QCAwoAYt6mBP53RQWQWA2NdbToN7Lc",
  "key3": "2H1YC5VVzK6VbwKSpsaenz5pzu555Ps5qdeKvtZhL4aebxGGD1SNDYR8SqcLu2XLGVVRbeTAwy6gBTHxtsLiGaZY",
  "key4": "2kgeWwU2tXgnJrMmCunUm3ivEYtQA3eFK6xX3hGJZAUd1rqCXS1gmc2YE6zwtqyPzaGixE6nWVqAtwaH3aEwEXr5",
  "key5": "4y6oQ59JXjrZUgeHChnA6xwiW17zw3MZcP68vtfXy6dqy8sKwBnMWUUvrN6n1RXYEtALJcbogBtCYEook7RBmUgK",
  "key6": "8uJu1wCRyBwXTUBcw978E9VrdJboCjLhVa8ZxhcBAmQznqsThGfQkLdb1FtEEw9M67Yd66SmoG7BRgMLGaJU7v5",
  "key7": "57GkhZaFvYMMNhyeQr3XCS6PiEKYdHovEAqmBh8xMfstRmF4Fafbam3nnxQgwkcpunuoec9P2SPuXpmv4UDn5jRN",
  "key8": "dZi6GjDFkgaNGstwwnMVjG2isWvvU4U2TsjjHXrMf3chvSsp4JqiwvNpYYC94yVGMNETDVeToubBJmsc9WmgfVL",
  "key9": "5vn4hxz4mkPcjBtCJCJYJHsEP3qGXcK8broQE43kgkRVPbWvJKt8GW3gyJzbeFsyTtRTxtizciinUsTBcdL99xxo",
  "key10": "4jqxLJK32VKDXvW9VSY56xo4KP4qv7s3PuKWiVFNiDHwk3gMVKokSpEGG4D9GSwoUoK9pe25q1tXkmjdGQkWbgGV",
  "key11": "2MjH68sb3JLZPZfjo39fjT86uQioS1in9yWsXHfWmgquKn3kfofjHrdT4wa4fxDm4qjKztqyLQLhqaPNiZmc7zxz",
  "key12": "U33DAHEDuvWHkTVjcjkTAxsqALSZA15T2QfEoNBQp56ZxEpUV4TpM2cZEBfHcBcRP7qgJvKGg8xWu2LkDgsMTnL",
  "key13": "59bJwixupvpPLCZ8BRfT5QTjgtrW1pq8PeWbvRwGnw1mNCDDT2Xsa5xrKjcqAb85L5qox3C3RgU6fD7ejs5a89Rq",
  "key14": "64Qbr3KHU2nequK2LgeJyJeWGv7bLeYeXSnBSuGTw1TWzRzE48srUARMLsdC3iw6ouFaaPWDx4XyQqG64gx9YYrf",
  "key15": "2eJXfTYHNtmzZD6sA1fX13oC5srE7otHYnVdp6xJYCZspU7hcXD689GH5az91ckpMFoFxcer5uPBCL6hBpxwHkcX",
  "key16": "jy58nbcjJQ5oMMCer3AYAG443DENseZKA9nSQwmXhaD5M6gXoxXCCG2r89MiTCF6o89BMiVN2UEj8DEQwu6y9q7",
  "key17": "54AiLWoX7qvu8dLYKNerX4LzeuD1qwQqwHhSU2BPJzpAoYwzHhQ1KTXZvcJVUhe6D9bZdCo5atRZESwrj9Rajnjo",
  "key18": "4dHhxQJ5n7BqZKwWrQHu6DqujNDPfpDChonMTbrGfV9D2cb2qfhmofK4MQUfkYzue6cgn9at3Lv5rLP48x4hLn6L",
  "key19": "46z15jRngBwdqqn2RDzN8SqNBvoRv77PqR7jUR1JizxdkEfukwekp3q9VNk6fToDVYsKs4bYkRYxAwCTFot8bigS",
  "key20": "Dz1XopaCmFzzdvUWk6FYLfyWN5NcB9pSHXB8fKsuMETugiDfNe5KuJLgxDc4hz23rZnzweHvxHXWqaGYf7VQWG6",
  "key21": "xw5v5SixxGDo7r9Rouj8t2N995AvGTRhYQigjhuiv4gYCc7QHaGGQpozXKazeZfJjHGo6NU6UKhSQRhPa9mBdfG",
  "key22": "2S1gpchC9hy6WCapUeS8zPHPqTNDfPHGLQbXETANpakVsKqnymcY8C5vuLm1AmEwT9dshh6HWKR3oGh5sHfgixPU",
  "key23": "2xZSqUEbWT5VV5c2CUcgMtU9qbSXbpfBGiG5ke5EcLiUn76ek1iQ58CL55KJ35d2UqvmdRjWUdG1ybW5znjr7SkR",
  "key24": "61Vn4w6WvGS6M3L86wBWrHeTFJFfbCBH7wN6RBBQzAiBWkZpCXf7wSRyFTGTshh3v78q4DB79FjhJt8HYR88Hpri",
  "key25": "5FprWLBcHQmvZkXx7hdgx9NFiQAh2zfy9jHcLaSLeT8RVdcrYqzY7QMejh7nTP4ArXv2K84GfUv2THb1hCN3hYkh",
  "key26": "4VssK6P5pt8CNy6izx7RFcg4bUqwcy5snCrGccpvq5s4moknDV2DFf2Rmv21Cyq8rg1J2s8Gy1us5cuVb7oUYUTZ",
  "key27": "5uwRMVunRPWdizadpCnPN9s94zqWS2dxnjsryaMDynZ2WDaLZAKxXqk5tX6PEEgPDvmjbCYjFbHytLNKTF636dUZ",
  "key28": "5qyJpgH89qerFvaYrtkZbfZksvNcF7S9e3v2SfW4AsN4mdtJfyBnGeinh8yr9gZcPj1S1GHJvLWbadb3aG72esyR",
  "key29": "2cow39TXoTWy5XVFUXf9KypXdGJgTfFFMaVi3iW4sMqKTLnoWPCMq6qbuoFpetvt5eZzFLBZYmvFcgvMTGw3RXfw",
  "key30": "2FC95ne1t2cUcPsAm9Empx5Rkn9g2wCZunw3hL1tdW1HNd5NB5SkfpVcGrXE4NoFHSU9Cc8RRS2XPmnYrD6CNAwB",
  "key31": "5Dn6cCbTa5A44uxhgaVDdm87HtPFCWfNDCTTmnV9w9YgQT6NJCUyhNSp1DXuiafXnJuZPyGseJi7VigU1VJgAWZU",
  "key32": "2V1HpBdiKePS3Yjmj7hHAuZHodJgFtxMDKFyYqAfMTecwtzSV4SSLSgLqDTHhTuXGC6rAZxWLLNFGFou3MYm9vZ7",
  "key33": "29M6rEKHbZ2jG13aj3RjR6mEaS5LoRT9P6hTf2zMowqPugHDPAhVtP1nXLiV2CYKtmdxDxUmKqW4FCYDortpeVrJ",
  "key34": "4WPUUX4ZsV5sEv9qLbxwCeNN3koWzUkc6q3VTtTXrEvRjcp95HpH8fionTEWUkVEAyxDQz1U9RAvtGx5k6PuHdfk"
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
