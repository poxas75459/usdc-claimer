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
    "gj6uUGJp35gAyGQxunVJuHU2czDHcibjJwqnu4CxGCULVsiHVPALfAZuGuUZePW57GpiQmFPDpDsAS5KCE5dg9c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mRBg83bxVCn5NmcyawW8HnZV6Z8vn4Y7Wbi6r1fj8GhHzPUKnL1tDnUdRjGtgGW3sP9HbxQEbY5M6BWUxeFauMj",
  "key1": "43xtwJFAVt28onWsowUpF3ubK7NAF9C633sBq6LXqM5YKN63GckgouStAqfFaVKbXGk5a4A6BrQgnMPqHsmqk5k6",
  "key2": "4PeWEZ1EFczhUKhULg6Cr37hju9GaHjQs5x7bGZipUy1kbn4eDu5ACKrgTZJAEq46gdCZzK4w89vXjUZfedbFvyY",
  "key3": "4UreCRBReEniddmVaJ9RQkAdmLiMs6sDYy6o33NguCtiPJdn47pUKV3u77BV2GifViD3EcXfizXrhWs8zJ8Dz9iS",
  "key4": "1VTraXmNkdS4DUuPf5zmgwT7CXwQ7mrgNbxcw72ms7LkpvoCHxQHYPeLdnQw5ih7rHKgobMJaL7HstUQosZ2tVJ",
  "key5": "2J1roRhSspJkcv6Ax9iyvRvRTcS8gAurFRyrmHcN9Kh9ks5EowcwZAMGTbMsFttb22rENhTGPaSouNEwD4XfAFeK",
  "key6": "3RAH8jJEvr9hwcHRFyq1v6Mkubym44UCKGvMavBnpTZ6ALkUiPhRvDZosoRQNaae1eUXKjLNQQW7R7Egsf56KQP",
  "key7": "5MKfQgxLSuD4jY7z9BzpFTApq5nCy64dqTQovXPvtEzu9nxHZPurHzJ9CTUxCRrfsXKnPJqNCBAUTv9UCuXzb3MJ",
  "key8": "g1nDDitQHZZhrub3vPKYr8xgMDiNJuDmPPdJha9RS1Y8YGKnRRVQkdjr4qBPuvGFKBc9HEu7HCL7FJi8pZWYMGe",
  "key9": "3tnLdzFwutsnBRsNo3Ppsux1EUVWrAj2aaDyjQQjbU54MPeEqv1ndaaFbgVXrexkYuYjPiV1aMdiZYmRNZ3gzx3U",
  "key10": "5qAMe4xitvXac41684h3rpEtq1L8biEjPbQZ4VKo3sBeEDT5MXz7UNwDJJcjKfrheBJkx9dTwcS8z8kgM9e7tF5",
  "key11": "5fnjCVTfmDG4ANGyWYt5iyHyUkbXsu2i79aTgCex6vjy97yz8JjQEMSiD4wCCkJFpixSa3o47vhpMSZgF3QQ6poi",
  "key12": "yoDK1ggckv7RkxqnVReUJaGYY7JLJk893p53kzKWjDKhR9bJ1AkabxNVUW3eWphaxqeuYrbqwnF1iLsf3rMXdfN",
  "key13": "2U8i1MoAZe4ehZWE8yu8Vpc6Q4hLVLVZHEAE6vgXJD8mDNk5LvzNgHfXtdu57mxfePGV8Mf5L1kxzDau3v5Qu2kc",
  "key14": "pKKUZ2Z6ZeugCdBfqHyWqdpUrusoSBK1iShmNAvu6L56vrEbL1oDXQ2TEGn6d2gcdpTx9hBxNoxy2GYD9tzut1o",
  "key15": "4YuERX5bmCSAR2q3KegDKN87niwXBV5eD6aBDLa8ybeonmsDrVB4f9u3WaYvY6p9Go9SmrVwHKvcHN35F7mgrG75",
  "key16": "34f6q7mDELQeHBZ9HMHkhQtPBotHTx5QGhXwSadHq5Fu5LQdAh7G9NKX1v82av38mt4yxr92dWuoe8DyECvsA7Tb",
  "key17": "5k9cX2voUAqHqcrQWnkDxiPy4xPUU8g6GasQYwyxrvESJM3dmuT8geNXsuLwPs5JPmomhhrfi7eVJksYY92EURqk",
  "key18": "36gtJ2dGzwrxRMaoUsDLCwT7mitrUQ7m7DMfrd4hgLSTWH6pji8AiJoicSWHn3aKqrJgJrcsEH44weyYpSzcYq6p",
  "key19": "5Y3yVB6KXVcTT9bWX39vwBNwXa57im9vWA5PvLhMUndVziLBLXxTAsAZW3AztE8oMSSGLTMFNvbdUbCpWtLN7Rkb",
  "key20": "5BPozHVrtVEuUtDykNNqBGp3kW2piut7Gk92PpQgo1gYTvNrXxUWfMsfA934LwGbJ21gbyprA3Mi8pJfYJ7MT1Bz",
  "key21": "4cKacc9Y3KNGNYCzCeSZdCEVQbL3aV9GoysQt64QW2kxzoyXk2MGtzYphv7gqkWzH6x9PTzJovkKbwsDmEF68KMK",
  "key22": "5UWCwrShgiFJcBk9emt26nCZTBSd3QjdF4PjMiPWwEuLWETJ2jKTvE71PtEJDooQ2oDgbuacuvS8EmrJKtJnWhGY",
  "key23": "2kdRXnXUumgzRCGmDHxcuAZvoues26nMaGKB672FDcZkroFVVw8UktLeNsUeKffVqxKPPsZqpVYDoyMQHFuaKnFV",
  "key24": "3Lgmfe1dGCGijtREthN5aYZpMwMokoFJ6fqDdV9HTnVahxDzwPeVL8g3Cm2nrYmeRd1ZL49KboJDzJ8rMfBB6dbj",
  "key25": "64RhUsHNq3ngVyNpfSznTa227cqjVmy72FS7hEQU6Z2CBb49pz6SscuMb8HRv1NGZp2nxCYJ2t3MVBEwBgqhWja2",
  "key26": "8L4fFz5CaygAFTy8xDkQkQxrkVjHDQSfXfwpzvk7do9rhK1d9SoHR9rMg674AJWGHRGvrGipRKGDrEke1xsY4KW",
  "key27": "2xGTikL3cfALTiDTFz15qoPF1GpbHx8DQTw2B9tW9ym8erBNCmJZT4AtXCsVY1c8QNKsTH2dMhjugViFKTzBH5TC",
  "key28": "3MWjoF6BN6c3nPJssc9BKLV4AQmFcLPRuEB3MCVtPJB9fXUykHm3vfNE4viMxtZ5av6j8Gxv3ipgD3BaPro3UFcc",
  "key29": "5GRhNq5N8vSy5KCwFa5tp2pnGQWmDrZbe6r8yr4ub9DQ1nTWM2tQUCBWqQJaTgUGFVJ8oFVJqRdkjQBxxPMYcBCE",
  "key30": "2wbfYAepPb6pEaq6PxANVUT6yUA98vvSEh8QzE1QdLfyVH7u7kESyvZvUrZRdie53xt8HTzYoMgfbzkmxaYCQ1WD",
  "key31": "3vnZRSUmA3pjQGyLrtPqkWyDYiT7BuGNgLVD2bYHqgFDoLgqnVAUyYHJgTzvciyJipZHVEAGyett8Y3yr9SkdBNV",
  "key32": "3YeA1Er8P17yoL5qsHrS7SxeGMcynJeSEoDRxRXwpKe7Vh57GrHCAanGzmnTZKjzbJhGAbfHo41xz9K4zmwY4yjQ",
  "key33": "5cVm2R7yW84AvxywFRALDZjoZk3tvm3wEvW6nfEkTj3apnvaGvE43MY8Lq7VRxXd32JZhmE1mSkqMudUxmc3dskk",
  "key34": "4i5bvffJWu1ipW41taiy8tRnwQrRtH7NnkjCE84xAK1t9xEdC5om4jedQnUvPg57gyMPnRWSrCiS6zap6ne3Mmts",
  "key35": "2LaQKrEChcxYMJvoyQzTYwsVz8e2qPboaf2q4hY3c1SjoFBSgFeU1y2PC3GoLuiCbhuSxQkPMreuZkjqctKnWPx2",
  "key36": "5ptoKKvuRySYEm3GDvozRGU1wG1yfzVHqPn93Mg5tKeLNvYk4rgmx1qD7mAwQo2yYisUV3STRBjYufBCa1F8THnb",
  "key37": "36KiYqMhpbfjcEo6TdGyrM3pRZAoeHaNLwsbhmqL7cWDfomuF7edRzr7EXwtrpko2YhWzs9KFz2vQMUUkj9geEM2",
  "key38": "4PmPiZwPMkTg1xWzviJQHe93SP5yhVa3zr1hFzh2agfKGNrRiKE1hT8hQ4RmNsuR3psNK7tK7sfpvwp4y9SdJ4QP",
  "key39": "3DjWACQCc7Gy4QBdwFED7uMgmyvEcNhW8Fw7YUUYxC4h6zsYnFYojs5Vzaj9wyyzbHAbZaeVmGFNax63S1v95EH9",
  "key40": "2ypmJTDUVadURjLUXskneDtDkGrv1r3kZCq9sNRDMVSM2HWASZ3WGkjVz9y7PZY3xqgrmdRXgQEccB3quXretYSj",
  "key41": "2qPmijXxSmSqBYzjtmdQtmTKt7zPXJ9w7miPnkcvaLUWLnTtrdcCUx8RYYz8SXHeoVK2YacU1pYfKp9YxraFhWRD"
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
