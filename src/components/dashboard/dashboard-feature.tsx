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
    "9yFhKxhu2huvuvu8o8Ec1Wv9etvwawtyoiGXf7LZSUZRGoWYENxaeKAZSam2oZT2QEahcLd43XkXf2Dp4QLLCsa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62cJMCXFobsyNbFFn1ePpWA3qXqNBZ7UQkKjhVH9EFYan9Dz1wz9ocvjAqN1BBWxxxgmSkekLzr7JJTz4RyTW7Hc",
  "key1": "4b7mxjgVh3GpfXUZq6gm4VCGYUUkmBDr3JZQXr8ZFGwPpoX9EzC2UWH6dxSZkdwU64xCBarD6QRYKse2CP2QHX5y",
  "key2": "4R7FEsXkAHyBAjFhBicJuFsGWEcgPdiwkm5idUpbm7LGqBwF5jimQ2S1J6zNwhTWBnpB47LwiTGZNRzJHKKqMm4F",
  "key3": "ZQezwCz1yFcHVQS3JRbdGLBYSM3hjsJbo2JhFogeKu2b243KijACKZJ7iPMjXP7oakkq16Mu48QvgWotV4LTUbh",
  "key4": "5CfBdMooSYAJqRDZbw5YZKKhqVpK9MRaQyAN54vYTWqF3D6XLyzqHtx4bEeSA2gw2cGh1fR5uhRiyBzB38M9UL7E",
  "key5": "2w51mPUtwsUZqqQny9TVFEWspQMSm4akp6TJRDQcX2s32yxqP1D4sL4V8EKnJBwRYUcKaUwcgNNtG3RSNeDmp41f",
  "key6": "atThCVDZj4TXZDd5rkEACwJ3XRwrs7TY9qVKJ2m1rmU9bCtxZwKHVzAhqVsrwhnni11gxx1xbC29R6j3KtZGGUU",
  "key7": "vg9GkEcZJ3GSSJ6md94fvrBpdqP19tT9NMuE6qAvm7QEUjmR7M7jSVTqqHJpVC9Sj9hF1ykHjtjd5P4ZSKZwYDN",
  "key8": "3Hrz1MPDww9K5DNpzRp1CQA4UM9G4y8x4ErEnXD8XfW3H38GPkto3by1i2zuWSaJsoHvjigUMLbSHrPVzt3kGCT2",
  "key9": "5UuHzSD3NvQVq5RDQjtzNtGMFbAh4xKqNabFLkVzPqybXNQvJfsWksNCXiG7UMTkKXFUCTZMsro8Ro1qAo8eDc2d",
  "key10": "2YsSdcYbg6Qyimhm6PhMequ8K3XzxaMEMG9HQRrzqHdTpRNNkMDZv9CfxSqMvSa33cTUQ28U6VTWW44UvB1dCEbH",
  "key11": "5cVeLjmjZxGfvP2rHmNynPMs7uZcHTPgwCWXJiLrbbkzduqVaCBendVv1VPvoXsUtgFyATV3JhGVLFSRUKc7CYUL",
  "key12": "5rTFEbZVZjMAWWNN6M9JGDWPFMnb984bF9ZCZ2RfNeNJ4wQzN4yArjPz5QdM6NiWUn2uCRRhnSKiPsekiZ9DSo6t",
  "key13": "BZjRUVtoNcB2oPMVv3fEiYQqNZNKFsEVVmmYyfS6Ls6eXWe9GmxPXJeQzc1oRaQiG92chUHFDWboMFyT3mTYFjq",
  "key14": "naBShLsv1TVqz7qga8tMV856nk1JBFQpd96dSmQCQPXdb8X1UjWq86PEsJWYwoGmLYnpfvwLKUyTd1DXetKGijE",
  "key15": "9LhNKoVG5jt91VEv65fdoCBDAw5scQqAY6ffSDSk1gv8UXcgzRLtGUYhzjoBYrV7oyoKJM4LVjCGfjdbB4P4tkQ",
  "key16": "5dLqm9KHScQytCqR3xWQePGhVK64pgskmGgmKfvDaSZAyqPTFSYbxfkX7QXNbCxuCo2mKwJPLLHG1UBH5ZTSZHH2",
  "key17": "5tNbJ1SCYb23jysZQc49tUiFqMykxDGYRPxqUazCNPnpvqcFb9etQBn6vAMbwyGNDDQdshE14W11R5FbYzbRbM2w",
  "key18": "4rNrTE1BFBquvKUZzNQG96KpPryHbu1Zc8FooiRSxTH4WouR97DSnT6nYwA8SPbjYcjRiuB2N66nbf6u3bVyqSsi",
  "key19": "5hNhhx5cv3nMuk9oNYKTj3CUftk4sXnTpBRo3EVGZXdJcR9ymzduvGrJheLhhmDSSQdYYiCXZD9HPNshZG9JJFCe",
  "key20": "2z3ABKoSYJ44soRz5w6qCc6sv9bBt71XBthtXiWsS3AgnNv54YFZ4tggvyuYjxtgtrSDjfCfrkdf3Zes9BnaMDfy",
  "key21": "5nuAxhpvv7CqF6sho8BXrdaDtjJsEu48tUm3GfnxFb1XkgjnQLicuEgVSJSNqqyw5uCu3CSrcy8nbNyWkVzXbwyg",
  "key22": "62Hocy1i6ocZah2N4jiu5ruRmN4JjXaCB66ecs5UduRYJZuKuKMEVu78ANqNZyYUbUu6LYHUUxBrmL292TrQvKmM",
  "key23": "2i78c2AjpB9qzmYvgRD2YmHRmj6HXgR5iUdtuCWnyUBjCMjAynV3yBv6a7TcGr8kQzt1vmwoJ3Jo5aQEBtV9APUd",
  "key24": "47PxtEEmNPJpVAkCDsrgW6i9iNqhdfDfEo2UT6zzNmh5J7tF9mapUvJwVznAct7o8rhAktNkMJSrZyxbV9fwJBsH",
  "key25": "4jYoAnzUQcNcn8vgzupsvteedEXGpARj9tqrydQ5inYihXiV2A73x3BKhUv7bGeYcEr2MtcWJkovwMzYCXaFuw8P",
  "key26": "oeSpQomDDYLpSPUigzmQr1x8GwozzBaVJf6AYxYZMy3XQnQLzLVuzjVCvjh8jpWcA21LduY3kzASDd35p6CoCzC",
  "key27": "5c3jftDXxLR2mofvfR14LJimTtB1UdbokzgqqZNge9Yqs16jqzWGk31GWpaRG9RYeywSPPtcX9YNmd1DcHugagDA",
  "key28": "4MzmwRRDLFrhs6QcFx2BGyzowiqrBkPa9NMDQTLCSenay7EbtjnRtz2i5pZa2BE8dmXDZYfKhx4n5wzgR2rj4wzm",
  "key29": "2BffVzGeKdK8xph3aFwpbRtnjwBusae3FTw7xJ9mNPeewK6qcoweEQ2KiSYos3shv9cDS8NMZg25p1rdBvwNJZac",
  "key30": "5ZRB13kjWHTRFSSvnuHJ8qmovPWwuho4AdSDJSuZfKrm1Q2ZWf77TbXVU4dyuqsvBecpEZLmHDCjubHA8LU9ADmf",
  "key31": "Ve5mQQdkZ3D7L94jZtynGSeMnr3Rx5QRYmCA7M6EiPzaaAYR8xFHp5PRxdY1xihbgeNP6p514FxyPVcwSxJTg1k",
  "key32": "9rdKueVeeetjojpDAyrarkbvuJSi5pQtHNZfhyB5hrTEMBqikkisrUTrkAQEfG5TCXHctUq4WnxNBn3H6JNTMMu",
  "key33": "3A8iYAEbHLt2eE4FwhHJRziVHzidxEur59JH5W6ESVcs2jPyU3wZbyhum2HKXqKiDG49eAVnxgCHmXqRKiGCXFGe"
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
