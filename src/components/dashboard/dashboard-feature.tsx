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
    "4GKjPzqRSVUDRRNgNk3rfZkQrgPdQUH1rer2CUxzFdtHqQ9d1umFt9EGtzr7wbXjs1SUVT5QYykEPokR8BF3BdJp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t7rDRtRE1KYPg2qnWvcMf6By9ZMf5CzA3AHCUXSEWDo8EAYvQ9SSdPGaAZwxYtunBQAHjVzM6c5ee3qShaHXBhX",
  "key1": "8X1n4PmYtyJcCo6DZuEtLLnBgDJRg1xBtDaUV4r86xS79juZf26mHcu6RDWAoGF744qmed5iTX5vFuGmPo2dj4C",
  "key2": "53ALdehsfo7txeejK49nddPrZ2bwLpULVvhrNwdHfUvxJgdTn9RBQWTjtFbrex5WweK9PrNqhide89UtLPLNKPba",
  "key3": "65hargaF41eBgZXHPCMdqKKsAYt3EQ6jUwZ3PNXYyuNpdmpqn8nWDc8WJ6GseZX76b1QWkTYSG3hXHZhMShWrWzJ",
  "key4": "5BTGcMQcvgv54E1XxNFu8MdZt2h32oV6iDmF2J3HbiksiohZxgRqw7W6mYhaQ94ow2DcnWH9GFQZyub8rvfN3GAy",
  "key5": "3hZyq73ehGg6MrjygrEMMvwrEPi4DnHExiD4vDra2Pq3178pKAMkE7UDiFtAKz1N2eCtqnkMHZijVpCpAAEKKycx",
  "key6": "5jkJdBeu1usMszvqTNDHJy6SggscmVf9Abd2RymYSANkwicjcAMNSoFyNRvW9sey4fDZZtVUXvKac34TkfkUTuPN",
  "key7": "zYMaYGDM5xEYWmvdtd8PCz2kQnT4mTgozuXW9gDEnGRwDwHkFmaJweShabjria6Pypou8Cdb8NdxG2ULfbgJNYK",
  "key8": "3bvT8taN94EZ8yNtvtyk1ihadZDd9b38rUezb6atS8bMaBiCYMdem1kcPquNFjNDk5jma2G6UJq2TjhYfXWMwuBh",
  "key9": "yLLWc82t8NYbX6ZNVzg4FP5K6h5EvH1jLzmkpZjNjD9SZLtzEhxPRshxtssoJjAVQQRc9DNUiqJDGSKQxW1vQXP",
  "key10": "4DQQPV4of2BbESAfXM1C8TiPB9SDqwdPG4jgs4Ndh8zjnc5SRaUL11PKAKSxx9C85mj3RTxXha44dsnYgpjgvMsj",
  "key11": "3aLY6g2uJwWgbDz9MisdbbT5KZCgfQ8tBEdxBcgis1pbgSgfFY26Jn1RG8s9XS2NNc8syj8nbaPYLnBzKdMnS9Ya",
  "key12": "5VfGB6QwmEKqJDug2WWZhDbkz8aWUMD8mhagcU7eTHtyA8BdL2rKvrmaShE9CWaVNCuCATDCofy7AeXGReevgYs2",
  "key13": "3WYdYhQL9uvXMANa7ZoXxqnnFQdAhAvf3k4E6ubMzxafXf7yTKHfCgmQBwMss9P47i8MH9axNNiTGNvqBDbW1cpV",
  "key14": "2akGZsscMQ99t5gxQtX3y8RHC9sKpkiPTLWdYamWSw2d8n9KWEVjedp4A5rYpb4vCDQ1ug2e9eVQtgspAWNW71Jh",
  "key15": "5y3jir52fr27Rj3crJg53dPJaYMnz6XoutgqwaSyS2zznNVqtGZmyyY6a7Ndjvv5y4TTpWFjBcUc9Tng49FdD9P",
  "key16": "29e7Z8vGBPyyQR7y9UtbENjbXXV8TcmkdALAKxeYnKkH5k9EuNWz3td42b135sw5Yi98EXhHuM1asb4ZyuxsDhKu",
  "key17": "2vJrNttk6SCs6QFgHJFtKJH6obqdwXZR4Q3FWta1LhG1xUwaCi71b41diZs6bv7GDacrwSWtbyUW8iwhGtCLaqhE",
  "key18": "3Zw5Qrv9mJiqmDoY2icoz4YfboCMED2Hcg3NLWQkQVy5MUxPeqkMmi3HUV9qPxUnFsPXtngEc1Y4K9eT68kojRgN",
  "key19": "XWEy1DW4gmXe1PeiTkVVLsKDiHQHofR6HaiJjVmpE88xaGd61cEmvSQGdcUy6d6esCqsmKXdEhp4pnVX7QEz2dS",
  "key20": "2mNjfnrTvE7hEU6aJWAa1ArPqQvyZNuS9rgcEDeyUrXFx8F2tfeTy2jeMGsVYeQ8j1C6frgZ9KHRsKEvmvpSe8r3",
  "key21": "VVWtAfaToSg6bFrA5Vq9MykNkFdAzw84wupEHZDVcD8kUPTtQvthPcRy6jMgyCodpfbY8K9NtVhU2gMYZTXJEfF",
  "key22": "3NWYJjBAmZaerfMc1PecM5XRk9gbXBkc2sUFoXiUYMeep5qk3Q4AuDMqfud6HgwXBhny2s15CXcGw6zTrvXcmt4i",
  "key23": "EhUdoVVtefRYJ4G2FYzF9i4U6Bm3dYjJezrawuz1sxErN5rapspr7ekVTVdhsyW1iXps2q2FdNVYSYr2hKS2J7h",
  "key24": "58YB7tDkmxYmWtAkjjYddk1WwB5fETyTRTT8JXBfYDddVYw5zTpaDZd1kwuoadQCemnF2ai2kFhmfV8PcTir1ryQ",
  "key25": "EQZehGaSa1K6SXxgUtrtQFgEgioUHoVroPQpZvmngjvK1ND8KMx8H4qQfq9PzmCCQzGBpYFRfrTESAkQJWkUXZ1",
  "key26": "3KkFERFP4SGgzvPw7CLdwUQUxa6CughY39zbc5TEvnEaUwQws3eU8uA2o8wSDPX6vWzLSdELddNrcigtzWupVWeT",
  "key27": "4zA7mbanTbgGTPM9LSDeyo54W1hdfVogmdbhoCpYiT3D1fA6eTuE3x13PDmvsVLaXtW8yf9C7WLSPoRB144UeCg1",
  "key28": "3aVAETLZMkf8RHSKzB7eTv8tJ287M3neQmf55NFnSdnCysuVHKFnQzbw7Lwyneexk8pPUU6rrAw7EC1pbTXudriq",
  "key29": "2SqoEZxKHtBPWKJQw9WcGCKdPyM6B32Pk8eoVkgKFNNfhvpjRZooF3PESsPauWouvtV1xgSUri672AwMfSnHStnM",
  "key30": "ukdTHA5fGmskBtfMNptDoeqaHPykBQXDdTdRCvcUaMPN388xdVNxwxfw29VSAEQXLsoMQBNt6Yd4X2E1sArn5sc",
  "key31": "XSYWgDR3WWWHdaCLEY23egD6P99KvuG1hCZgngLZVLbkb95htSZouP4eyL1nPXoyUCzDLg2U7pHWE1ZhyJsvJAs",
  "key32": "64N42JwmopmJdhpCyQec1j648WpkCt5D6Aze4K1baqw4YivzQHdCmPy5u5UcPnLXsV99niADFSNF4eYxeKKaqLsg",
  "key33": "44g6pf1h8U6BybwBZU68TN9QoK4j4skHw6rBaQNTnWWtC3eTuDzjJsjXuYzVMedTxAS2QsGAPy3ZFTepgRPcUEEu",
  "key34": "2RGG4y95v1xhc4ZrGiArFHee8fSHBjjPcXvjEY5YGYXXJnBLHg3JnxSXhapQ9qbAs9LcpmnMMUrQrayXAQUzDBBd",
  "key35": "29eei1TsxTLaySZrGLBkzaTaqrPTK3Zq5DunPS1Lmg8vJxFu3ppPeV5p5UzQQSv3JLNxVFq6uikTZdjV6nvYWrzT",
  "key36": "eRGWcX5dpCnLybj5BjgkUGXSqMidNSEpgj9E1tpX4pBCFNVPiEzdPmc5j2hUfmLCQSVmMC8rVCfenKy3wzcxHwX",
  "key37": "4BbFm8tNMVD9hsLSpc9zhFrVeVHfjYPAt2STkeqmQ6jE1QZD7kiEXcozL1ULPCbFwNfBm4G7XKGea43zQbZ7TPGx",
  "key38": "2uL6aHaoL7cpZ95cF7YP5dLXp9wtRRdNdbjJn9oxyQ1AQRYDHxwp9tmvcfexV3ZswrhK2xnDEhCTneXg3C1JLtyr",
  "key39": "F6aP54tfsPdnvpq8eoQzDGrbBhoCerdXtDiuikJEZao4pWEn8uZctbecXaTvJHfJisTUiQoHG9EYF7tn5gSC5Cg"
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
