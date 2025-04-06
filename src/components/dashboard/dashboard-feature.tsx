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
    "2HpzbSdPqNdQLayXRpcmQSmvC6Cz1RCSqD5iZpGxiBRpHNM1Vw23vxpoPeJgFBrjsGwMcrpCrbQKwa2czkrpyjY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wo29Hytx8tSWP8dfUFzTjFc9BYeAt9ffdHjmJYs6ExM6J3yEPxTQaGzq5F7ZNo6tCMuzKhNNNY26tQ2JBwdxpzu",
  "key1": "3LBUiX4BSWTdMbbZYyHuybcm4HdNKXEZf3ykDdL8Wrs3ZMFCfosHcidNgTELugmP8XxKYMqo9U7zkEn8Srj73g56",
  "key2": "5QzcoG26KbQKcEbGsLQZ8EjbJ5H6ZQdBB6Amp9cPEUN3LCyNY9GaJEucDnbU7VAZKSYz4eBpDGbbhnD2cdiTAiD5",
  "key3": "Wa8idxebjy6NuAenUVqQezYCGjHpaD57QQjRDVLVEDnEhi8y5UkoHuc8gCwGWJ1oeETNb6yuyLNt1KfpnGMiS9Q",
  "key4": "5fuD33RYDQ4tPxLuTLYgaiwrd2xpbMj2sKzjfge8LuGoxWRETb7tC2NjVUaSTZhpZJVMG8Q8SjULJnZVF3KJrd52",
  "key5": "5HsKUqFbh7JfB624bTcWFAL3EjjK5AeCRYdTVwWpXBQoyWBZKfAyPDfbw7wTDbJFME5V4EkeeGXtgvqeCxB9cFt8",
  "key6": "272CNeLy422pQQJfDCd8hZinxBsTbaqtKfNq1E2cK1ZizSDndj9bme5xczbvso4W28CVKdRnVQ5h5CAJ3Tf94qST",
  "key7": "2DXzq8Wu1GRqNRba9owwnuXzVwiW3KKKz9C42zvTNZkANvQDienC2UpPKpKriYpYsxo4VPqMqYQPBDnG3UzskdRW",
  "key8": "29qdMVH1LsKzM5YFoqLTNxFsE8EYC1dC6ioXAdtM45hnCKgngULsgADm4CfWnxu8Ex6BiJuQpsE9YVqvi9RvJAVk",
  "key9": "5MraYaLHwED2XvRqJ6sgwRdv2CTDnw6oE9fXzkyenQbkPxhBqVpmxJAKG22q5Xx7x6g3MygkwFzkpyZCEBMXFKu",
  "key10": "5gJ7cERTi7BQo6rih1TqkvqYrh1t41Urjd5DiaeDtHw7dcSLcpXSNnJ6aZdJ6BWuR8tGVQr4JMvHThT8p5Fq451x",
  "key11": "3JYiHCru5LhNAHPsrzspkqCMrr4ABQYVR5MaQNi9Rcpn6ENSSJCPEdVjPF6AugLZhs5WEqAdpZQiQhoRVTeLVzNb",
  "key12": "ozN59UvjK6cKZY3zwqXAAT2KKT77HfLmtyUSJWseRDtxg8ghfqPe74ejeid2bJhusvVB6BfaHbvoL2m9UWsQWK4",
  "key13": "5uLYG56cdApdTd8wM9AKH4u7MQ594rWouZFAAwTFhQURhwyLnqbAQyrcXt3mrbdgurAmsuUcgCQSHDQTXT2YpSKR",
  "key14": "5nSHbPzRs6GjebWqXwZNdK8tRtcXQgDJbUfpUwm3pCoqroCuin4NQSNS8xM5bHsQV1hiDWqNG7fZQMcyAESzUbeb",
  "key15": "4cWZM8TmfxsfyS5WiKKmDVdqCpATYVRvTNsTLN1xdRavkyD4hES9qHJQDwypRtJayJuGwyrtNNPfVXPPEAAU1Vjh",
  "key16": "4EZchqH8UJvm4EVUFRgzjhPd9iChjYJa2oxcL3GhfxmqAGU1vGLWZjbYPMYFx3WjbTwvsDeVJVrScdZNnubPapcs",
  "key17": "5hvMe3MJRnCv1qRR1F7kxkH76AmAoe48CpjuAobGz61BGwCi32dXcFZGeg658xkHMexjR9RP7QV3AAa8zJeibUv2",
  "key18": "4TAfG6KiTDbhzGDWGywvf5tpVU7sXrcSF7GEx2zQ9H7eE1UA7Hc3vgCRJmxR2uotr6SmzQWP7WiWjZpcnseLAZLk",
  "key19": "6n11Th14eWidR8ipo9kGtySoGT6Q5jLyJnKwoZTEEDtv1ygg3ppn4wGAowr3mPQ4RSLL4c3snfvXUSNPpsBybff",
  "key20": "35hZW8ApBaCpx8WmgDegRjxbNR79ugqhCR2JkiAsNaJcL5oazB4bML2sKnBAx5WRUAehKk35eZfk6hmHgAYL4stC",
  "key21": "KaDTwXNPga3D1CnQtfRJwb6tVbaQn6gDu2xmrRge1LHLaJU5gLGAAKRQ63Y6KXtiVkXH5kvDj5qQf8sciVefd72",
  "key22": "HSFaJrmimG1g3Dk3aixyyCEoKf3xj6AivTLmb7GXQdAu2LVJqqX95gNpjYBy4nhs2BxtSdfkqKfug4NE2Jr5cmX",
  "key23": "4b678f7ngxY6aSLNNreahHR2vgAaXq3RBKYN7DMiGUkvbUQWxLbKzy6hY9gkvYvjDwjM5UAJjZ1d48pfUGdXVfA6",
  "key24": "q4XuK5xXDB8jzHeWzdhhMY2M9HaqMYuCC3AfjU8Y7fiKjwUe8NUhBSwX1oBdqQhy2WXMR9fCD66X7ZVzZDj2QiN",
  "key25": "5kAzDGdf5P5vYXC52kqF5bVNPLfE5wzCikH8k9VoEE5Qj7imMjAPqFjKKd5S7bVKYeCofC6DiDT3mYUQXrNGxc1k",
  "key26": "2HY5oKp7RmrAaQBZxBkHkVqCwgfCMuN2DsPXfo6SaHeoNqLuQr254qEJkZumT2uzcKgdRtpDiPSySmfdJBAev2WN",
  "key27": "2gRF9X5TCSehKRT7t6R83f5HeL6VRxecs1RjnqUBMZPTeFuxbRmJYG8MPjfqJctNAMjZjR7nvoZSAkvRWRNRYiLo",
  "key28": "64TWdbyEHvfLFEyhDuNGZH14kTLvzcrSqorXsx7ySGPL96vD8a9hNYJqyhsTkhnFb8xsQtsKBLbsNo6rDQUghkWe",
  "key29": "4ESBubw5P2BVvT818wXBhCBBxYT5xmExinoeTt7EEsUqd2aFWK9xTN8M3XoeRxmxR1i1fHx2VopnCtXUDKHmsQFk",
  "key30": "57VKwyC8oKAjz5s715ftoVP5XdDohJjfKPWpiBsok73X9tfoiGtReb7iqdkeFUx7hkN6McUVJYcb2Ji3G3iPmpmY",
  "key31": "AQvHYq51JnmBYqHHepHKC6xKKcF24kHyXu533k88tu1r1UU4EunJgfqxEF6RaEdwQ3vwnadgu8xtHtK5DYrAbkJ",
  "key32": "5szvfcZV1WYymvuE9tXZhdQV9Txu4soLt6edocBTjct6gaXRxv7GTFpx5wRy8ZkngDehFN2KhDp1hfLoDG8pWJGY",
  "key33": "5umYJ7thAhiudYNqtbosvCWe5iHkrufjh76X6GD8aa63e7zuqYzzTX7wXLGCEbtm1DLqaV53LuNKHfbBLcqqKP3V",
  "key34": "5vVogkifLhBfLWMRQwNMiashHb8JhdRt2Ed2423gpNmw36mGEJdhQPv64u5xADAgaBaKhNkeyVbbYc9HZVUhko6h",
  "key35": "3aGnQRJNwJd1xuSsepznXJ2reQfcbNzcARaXz29Q1DJekHfhkDqDQLARM3EbK1ofprjLJLgKxLYYd1mGYpp3eYHB",
  "key36": "4nm5e6fM5BvmzeZNa41gTj69a9ZPuYN8vukCdBQb19Q4kycJEeCxrUXguYwTqkQPr2UxRJ7D1pTqpsUiU2aSReZL",
  "key37": "4LYDJ4ZBWhMKDQB8zNPR55gZ6aAsNto7CB57a8cqkxGWjR8L2pQ4FCvqDzrRBbdrNUkSksJv1y22sPFnvMiqvKan",
  "key38": "mFtTcr1AkNvNgVjU7Z9bYUzeLAoj1RDjfWwajsP98cm198sHodPyoSiXn148wY4PbAdH2cARkn2US2axg7S45Ej",
  "key39": "4e5DyvrZ1GvKykWaV2CmHcYHmXJWSYSPFXoaNhMbpNC9bAfrqVBXv66BHjEdnp8Fjf8R2eEoUt6nA2NPekTq11qk",
  "key40": "5zF7dy4yrSKzM4Tn3NqMLxzTrF9W9mUB8A42Vsr6tFK758tMtL7nfYVP2tk5zjeQgXbVGgwa8KdFnLPsKweZ1Ghy",
  "key41": "Sb8m5ueH4PgdyhgMrXHGkwJD3JSVBBCiRP1aBZJW2QTPJuZZpudd6q5vX6fyuHDMjRh1h6HUKTPUSdH4rJiYVTu",
  "key42": "5pwkqd822eVmuyBmJseEMmL7VzWMpnFK2Tp4VCM2eLMQXwzJ1FFPoDQotTBAbFGwgbWpEgPYimb4NrUurXUTPezi",
  "key43": "63xEgdQQsE7Yn6aYJTPb132mgTVCZT4cS5jpvdZz9vAtdtXzr7FqnpQn3z35wZTPWZTpPq3eo9qXsbLLRBVoTE6k",
  "key44": "5ufpUw1SnWvB3sM8rRThE4yr1QpjScuzYAzVwFJS4D77ZmXxEj8LKBt26pYdP891SiAcqAE9nin6RBoJJDXk2MLd",
  "key45": "44jU4kTXqgNVg3oN4CEmRE2C8Aam922UBDw4cjEfXhzgRGf5gkjt1tvdJVyDhNPo4aifiLhd6FTmEEvDXRudeGDs",
  "key46": "5pR135GQE29dpe3gqHox5AzT6zmYV6SgvnwaGnjTX7CrEkRwm7DVVuYTsQVicMLXUieMKBGpzue7SSYKXuFWLhhy"
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
