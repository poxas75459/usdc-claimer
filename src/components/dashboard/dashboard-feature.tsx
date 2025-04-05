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
    "62HNc9C8E1nJUXNysafymDbdAqC1iETNLVjxYKUvxsfCciKsCRAysQVgoW3eeLMT23K4su54ydYA55QerCRscKPJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eEEiwLnE9pfGBnRJoVaEKEvaLJuYo6iS5TPha7q4DYeQbZw5Psq2NYYLhRMwXE1zQFSbgiqycrUXB1xVLjxLsqi",
  "key1": "2jcf4EKC1Ti22KezgfjdbvEreScTmS1oBaop9hTc1AwbJiiSyGVCqA3o3LCPSunsqdpjJKHy8utDr9x7FZsxxQhL",
  "key2": "3AnnVZmJU2ory67yPhWRKD67CuPbqc42RC4zHXS9YyfKScsPnnFvpbGfScGRtSFgd8zbDEAqY8jjoNtbDximH9Ez",
  "key3": "565mHodwt61Fm3JeXmLeBRTUdEsWCQ5zLYfyX8nsHJgpqUT6Za25ZmbcR2qTbifpYmnVZgcJ2Evf6Gyx6rN4LDox",
  "key4": "2wAPFdjdv48xKZ4YthnUogq4CYLKph2vchdFF1JGpnZhLHoN34isYjMTXHz5pnLM3ZdsgvuSndaJxJXzsdRTvhvW",
  "key5": "4fL4zEea3zjLfCJwErmStbnfhVxjPPw3QU32D5wi54QQ43kpXF3SFjHSE3dF35qZJZMbbgNW5b5MQoVSkRo1QRFD",
  "key6": "2PDb7Nc1aR7QQ2DBZaViFfCEaV9oU8m1pdBoGscMQ5u98dPyXhbwyvuunw1MfxQaP8Pr5ErLDdHunsYzfRmHKf1r",
  "key7": "4Ro7zdrgAmKDqbV6iUmuE79kKxjkjLHMd58EoeN1g4Q1a3fdX37XQEw6MN4gGmQMR1VSt2LzHcqaAY24nYBfzXJQ",
  "key8": "rJnLsxkxGhot7fQHG5kqkUku3fvP2oQ8LP8yo7v913Ztg3DpViakDsxZvKQsnsCBv7ceF6vKmgQL5j2kmBs1HSJ",
  "key9": "WMKcEt5osdigRbZ8hwkxLT6FmK6Wwe89jwjLQk2zBCoHsWnACP1bdthSNHFiAnzo7hdJkaahutrjhF7hj8q24mX",
  "key10": "4t65FpwYvfLHwVXex6v1Lh3aGL1RXSJCo6tFDgc25EcfgeTELZKU61W43g9HLAuQv6Bn2wJRZvzLXV4GNSEsD2FZ",
  "key11": "wbX9aTNLH9U5qbhzZrzABDRS8dCk3qVxPt8epxzWQWDY1bDHvZK1ZtrrZTm5rKcJeobGnzbFcFaLD5gP8id51QU",
  "key12": "442wDWhkmx1UKgNAG2Fwd47sEFw52y6n2z6WeFDCwq5w1xBB4gTQjQHkrPoQMQxX2i36iuXgCyaiatEsGWjWY7BD",
  "key13": "47RK4NUU7WGoBT45fK4oiuy9w88CDpRNkGdupCvQgycpxuUhw9j1Hz9MhwunJYo46k7afpi3skDcwRE2i5SUnWzF",
  "key14": "5ahirjEr8m9gxVfARyGn7MnB3b2dQoW1tB7EktUCHksvvJpe5NWtxATTZ8TZAD1LmGBDKyfeGPfiEosHNVZr7ak8",
  "key15": "31WfuWaPgJ6udJ8qZRgqyP87yDFJ23sJndfEZyHDawcXVUFvDrvQiGMHiPvcUZWKoS45nBBkN9snrNJtp7ojqdQu",
  "key16": "41JkaW3jiEzfL5aSXF67UMgH8KbckeRHUDgagSAtJZema9nudktfU3L6bpwmm4N3egbtXm9NurowRyv44qDvusF2",
  "key17": "UY33bX2btsiTME53xLuyZzjPX5bPJGU58ybF1LQPgJKw5W1HQQrnMMTTbi78yhJbdwqfH25ugkXHJemS6bvaMtS",
  "key18": "sG6yo1Fj6Hv7aWKo4kxHiX6kvPbLTNVufE6LSSmHdNgHQUVF4AMVPo7yBTw9EshoYKQqsk1tjP4iXoc89iAN7gn",
  "key19": "4Wn3jMvg5b7tZwemBoEph2pmk5Uj3txqckbNRM3TWFD2mstVUS2v8qd9xBfrdqELiLoz2pk1y2cr76f21VxZ2Fn5",
  "key20": "5S9gEm775ZGUo6v6a6uuVeVYogdGWeGTkxrAJTfNhKcP93GsZyF1EwkSVXcENLugWZ8xDEdzcywDQYH8ZXiboqmz",
  "key21": "Nnyb355ZNW8Q2aPGf4tryeUHTAN6UVpZwj48zxHTLbRoxyEAAhMD9CXZ32FTusQWNyMmT37JKHsbSLkpc8juPjK",
  "key22": "5DbaYEKSjUVPBnmk2rHWwXv2fpzfXpW1ChDf2TYaoo8xoxv9xasm3ee7QYQN3BmhhquyFezfaz8aT3uK7hek8Yc",
  "key23": "4xYg3f4y8G85f871gevHJ5D5yp8gjhpx7TMu2vztw1x9LabKso1whV11745rWod3L8sc9torHYp2vpLoi7yn4fwN",
  "key24": "4WvZMDny9kgTGNCVW8yoSce1u9xGQqhmwbCCSPNiWKJJXeNgG15J6brZG3neQzpV2pS5ion1qDkbf6xPXq3NDmJc",
  "key25": "3ZNs4zaLtZzuNMxPqu3P1f1sJyKbmECQL8Zrt3RAAXZr76BeuwrwYYBgCUmxhw7wEhysCBRxucXcd6bqi9Eoe6Ry",
  "key26": "3VJievBp5APMKoosZ3VsAtMya4r8NgUXTsHZrvwuFVmso1bXNeWSpSuTMLM1zXTjc518t4gKNK93hV1HyuLwBk3g",
  "key27": "3YQK39DgHL8FTcYLuiwZzaXcxMD86t5ivvqBhdCZ4iBkFph1aR9fczTYgqpH972DyTbBHXvVUAtALvJ4txPa9X9L",
  "key28": "3k6ZxPDXpCgYpUskKpCCXjGkNdvXjFzHAjkwR8VQhEfX2DZ4b5gttif5q3dzGgXxMiTEMb9Uhw2k6Z8UBzWP9Aga",
  "key29": "4s8cV8UUFeepheerqkbpQwP1LT1vQ4mHvKEVE2NKW6vcrzMzZjCBp4sc5BdH7NuN7sHBcsVKa5QSxQViKL7NDoo4",
  "key30": "2g8XhJqbjK6Fq3hu5tsCwwhKaesyoA56Qu7ShRqPSi9AWdbrSk5Qs4YpxriAkejW33FrLuAj2Hj9bGQgHaS7y3yk",
  "key31": "5vZ9WDS7pcSF1Mj5SpHoX8qyHWfjp2rJ2iWxRpsHtxED9Tj4HaKFvnL4WKcoPQU42QDh2qRTUKqrTqEYps5cysG1",
  "key32": "55eUDP72esgkTPAJQ7TfsWFxzQrH9ejbyQGuVcztRTrjs5sa3jvskqmCpPeispqg9wui6MsjAYSTcZQpkgJhLU1A",
  "key33": "2H5pNCtiB6gcQYAgbG9JiS8AMcg2Z2NFeb8gARcyvnpmY2CNZ9spatiuCBDzbxWAnJWC7vrBdvEzStK3FdX7U4pC",
  "key34": "5iuAqopnQz99mdrZk3wLd2cSt25x3s4bNN6S8bXvbnKnKSDReFTTDUwv75pc3qjcPJGhXft4R6d9mVGpGTjJzpyj",
  "key35": "3iy4jW3XsxoaU6aBxnUhwomSUww2rpgDxNxm5r8sLxNb8H1KyWU6dqW4jXRqqF4tdG45YKQbJA4L3A3ZjGvbrj8F",
  "key36": "4RdVcKjb1GPbmfC9Kua7rLAe9ievkM1GSJmmLTNuQoJLdY2Pd9eLszWP8m41ochmDCNKgBbfgpesUuifFniaye5b",
  "key37": "4YuXQbzrtaCGUSKmNaZYdSSCi2DqcfqT7xQEqtRiQa7JuyKKV2UonHhHU8fqaYCo4xtCdR4VQRXLEhdeJwLhwqSx",
  "key38": "jutuC78dMghVFhqaMJhHNp84eGoo2pQJLuQkFVr5XkeWfbj4wbJGWSAj6xqi5ayNfpLyFaZm6gmmL1cQLjfF3Vp",
  "key39": "3s2ZFU9sXYTrXYv3TUD7pnsdA7Byby5snehLbnU9SvRYo8BPDoCATXj8LMe7rKM6Y3YQLXgbwx7PauM793Mn8vSi",
  "key40": "3Z584hMEZjJKb1SvDzMYBU48R9R9idk5YEV1y4jD42C5YS3oYKEHzSUjZNzt29h1xthQpZ2TXNgrprJZtAL3h42y",
  "key41": "5s2keX6vg44AyPKGbjSbyaS96MHyCLaFhT1j5qPdKVKLeyAKxxUTiSsqZiQRvoGrM4jZdZyXTN1nTLJA5CTkjqcM",
  "key42": "5XsZ7JjXmPMaqAkL2Yq39UM8sauVeTEbCfG5z9P4VWwwPj48iwDyNnPUZwZzZmkAkxPkaPXWJRC9WRqaMvQDwBhS",
  "key43": "472ci4wM12V7rLvoGZmai36n9K6Y8C9gfAD6g73vDwmEPJJhmnhxhKQnAwWY1xC5vrYhGdD4bb8RLraK2JdQTwde",
  "key44": "UuyrUf2YEtfkH94WwP9NEZUUHJxQKhw7ixuPNtCKRf1h2QusgTRZnsAhX8QL8hGrsYYeqY3j88GRwnwWkTG6pSC",
  "key45": "5rL3frg52ymEH9taB4TsxoEfhS9b6zxn7bkL65UptkJfYPe8rP5MFiaAm6LEiHfVfZPSLBHaZnfkujoqH9yPyWcA",
  "key46": "3DZRNcKnNm1de6AtxVFR4G2iRki1WfhjSFmT9w1wFi3D77scssG95XHYQbfEEfMZDFCULd8SF66Qw81H2dEBhdzy",
  "key47": "SokwbfbTzdnCeZyiRNn3fnaZNpBfrwnbhMeg79G6tsGXpi8ovK2eHpDaWFzNfnd2whaswd5fQAR9WY7Mx7RRjZL",
  "key48": "4tgMBFqfDio7ZVB4dfBpWdUhQG9eZhvKvtaPXxFLn3GxvYgG1ZTRmyvNnwP5BzhLyxnUA1GSFEESozW6gBL7FuEr",
  "key49": "567CBUH4RZhufTiVEBoRUMXtxYK7FpmPqESPm5ATtfWJqS3nKqoiNKdXpTk8dvBNdVcnkvBF7HHPLemSQDiMRUE9"
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
