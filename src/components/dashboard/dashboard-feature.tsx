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
    "vPtW9yvvxdzyitsEBhsDdaBmHji7jhD4aBwv7uRdQFvNAi5iRfFHx9qeng1bvvpi8VfnMCCGXFTuLsszsvbcAs1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L8ani7jxqQcbLtvshL9hqqmiCEYdFnTxt8suP45bRNLEU9Q9V5YsC3FaEmnVpkaHsboFrNw96r44jFxT9PESau9",
  "key1": "fue42KBkcN7C5ha3q5GfWfzaKDLDqdstBrDrknVXbKstZgmnpfNvcCameNpXpdVzHAneygr5CzE236mF3ogfHXn",
  "key2": "5NjYPccBizqvq97SXPuLQtCSEaDn1DPqzb1fbAAbm92sFG6ehZrVe1j7gH2De9H9GNd79Vug1Pkye54GgzQmCJxP",
  "key3": "5JEPqQDmgMFHYq1M86iVHwyauZ4DxghNGG59QveaACoqLQa6KUSumNin1gRgWHxFNrvdScuCk34LvTcVHLF2zPWC",
  "key4": "5xVcYRjsKunp25ZUN8BeLLvT9ZaGXVCxwyk1ryuaEH2CXHofrhrDLfXq4hnSsQWKjvyLQN3SVhRVsWjpEadQG2eA",
  "key5": "iBAvDPDU6zovRnHWcoTbQqB7cJwYDFt8399gRsDZTd1c6rrbfdon3RKoMMQzT4SEAwXWrKSRdz1wV5UxKRFhxxL",
  "key6": "3T4ijAEkpf26ud9BH4kVmjCfdZGeCyatYKQk5C9gs6nrfRkbBcWCyYyN4pNYcW1wTjTN7wFwsyiszwwjKzYbS99V",
  "key7": "jJtxhdsiGFdEuSpNHhgGdsGvSNAPtYZnHoW8oGNPF3xYQgb1SrpziZMQBKa2YQPNJnx2THCY6VpuCCvHfkRwYLW",
  "key8": "5eHNLN4rqvBZkzwMR3o5aLJKV91LTvEnxSNEd8BAvu6Vwx1fRCArdGuiknJKDaiFsz8WmDfJ9amAsS1XrxeUqsYB",
  "key9": "mpM6kDkFHsVMLcHziZBjNWRx8VCzozd1JB16ay2rcU25FWsCPVp9hAj6eokr4xkBxoGE4Ue6LwQ5fJhAMxas14g",
  "key10": "4WabiNvy3tyjPsUXJ7e9EKcxEgBiRUTKMCBAKrraipiU1tTVTSX7aXvcQ9ctYyT8wUcVVAnNDXx2iXrCE4HDcSmN",
  "key11": "2zCtXcYr9nMQngzoANhxZCggXA6Aek5of9Y4shNBWK8CWwWGeTdwKzaXjoeh6qQQFyUJBUwrDj4bD7JGftwGjccZ",
  "key12": "3VgfiWRJtq75Rh3mePiB37BNQYwUTpKpEJm2WkGaqNNM9Qk8GUhAkdvHAQnoKogDXMqBkz54SrN7ntGkhUwCqDgZ",
  "key13": "js2Tv5BnSHg9ZHdJM3oAq6Fdt4u4RDbCBBJKcgJCbbzYjrbx6bVM6oz8Xf7DDDxb4xh9A6RYqcLm93heJELQ3bT",
  "key14": "5XApmHNtFMTzihu9o2PwSxxKR1ytiuBW4UkBmpUNt2nv5y3mFJHM92tpLSegqXX5fQcA7BKSkPqkwhsfVCdszTRn",
  "key15": "257rUCcKvS9d2D5inuECUX89bx1ZTior1PDyM6R4Q3eSQEukwHpQtR4tLyfB7iMdQ9cWoSd7N2yBq1MkMvtH4vpT",
  "key16": "5ND5A36hsVbu6zdsiccjQEzs6egFQuvtriK5wKMpW7cA6yzvRBXQPH1aShiGWU8w4ARSSYMti4bGUYpGef3QT7gJ",
  "key17": "3XW76HGMoJX3ApFbmg575yMG7N7nj4FhVDQ7NKMFyauGA9MuqaNnbeMfiymcqq4Zqo4pYvhneLLqB7UZub3sko6g",
  "key18": "3axqtzvbuq8pYeen9wuda4jR9JddD2ZkbYW9CQDQme1mQP7LiTG56yYhc2zCaA8zbkjg4zSRjQVjMiK3rhxSK6td",
  "key19": "qPdRc12x9FUWCEdZJoQFNFxB2XToaxGzazWYkkBwEjkzMjNg1VuE85sXJn6ZGGQUqcSC6vcY8BpMon7j6PE2R9P",
  "key20": "5vYwEpoLvU64WghpyWTHC3g66tz4yoR6B7VAK4Zod9pBbuJh1RVnaJNNkgD8JmGAyp17B3XJwqLwUHhEKE5ZyWML",
  "key21": "eDYzGRnLsg5axhVYVUk1zuTafyL1hC3aYtZ7rGuZmaPo9WoM2KwTiU2fhgH3uhLEfyet1KjsJeiA63V73JJjcJn",
  "key22": "3XaLCpMAbsfdFeMKh7UJZevZwSZ4AW8C7DHvWb4kQWDdXSCfRDbAHVChJoonRqTV2pSV4viphbh4dxNpJqukdcY8",
  "key23": "4Wew9BP5BfedAbbQL9jJz3GUWYK8YT3282ksWLSrkRmrqva8EDCxQdJoxZ4ewLhNwMkEWzKpEBZQHmudAr8pTuUe",
  "key24": "5icfsZQfqNr9ZVnczSigmKGXUKDXGu1RsGWDhEmKrWa6mNyUnXtxusWxn1sjoxH6UnihXXRTPaADVvXRizd4JH12",
  "key25": "2Kctkuf6XoKxVeMcwv6GZWfFLxx6czqi58iBPBFdftuDt18EZPdhXE3Y3V2ZQTEDeQixJJg8743GjWhYoJyMaJJJ",
  "key26": "4DoCnEBdyYpCcX7mvEecL68AuAxfSobRuU5Ec8H73MZYU7BgYLxQmjwbgPtQNEiBJ6cpfYCpLrNg9WC8WXsbidh1",
  "key27": "2PdTjX1uYd7Ja1RG4HGNiR5zP9aMw1HXoUHxvyjBFzLWwSZHGYZ6VvUmskCQ1ZA98MLUTEDYhGGgQicaRFBDsDfQ",
  "key28": "5KVXFiQ1SoTpFWoAarzgLNRZwmVGpJxxmoNwsFj2Vph35GxsipAN2463bDFp2ikLwV2Jpj8cvRVPLzkKUPqGFp6V",
  "key29": "5jmh6qcPe2UQBC3BawhFCPSzQVZdGMEHmHowoJYEjiNMYkJ7v8FJdi73kwBP4TUu3gaAocLTsh6ucwaAJBJcvcr7",
  "key30": "4g2YpKZuhSseQMYNXfiE85v9HPWwu1dPiEdYQfg29R1ivKaWYpdQXrND9pidDafVZAqXCQFVnHp14GcjtvAH3iRv",
  "key31": "3wWeC3quWkZ1Ewy5toiSQYSpBC2tavuufoCa8gS9oDpgnsVWMU3vToL8X715rwRTztsiHKXbtKDZ6XonJK93HfM3",
  "key32": "9FyhFnhsQ7AHbx4WWebVEcRZY2QojLehMB1dw3uYVgT8MDsqxnecvBEig1cxNY2LTtZsANWWSaTz4M2o149JADV",
  "key33": "62n2kjgpfWtwKh1wbfgAxLTqKq2u5E6UqKAkEhBuh53LQbuV7TQBjTBkvtZGoRwWJxXxJRJhXQWHBU3e1x1GkF8F",
  "key34": "2k8qas8qE97ep5fSEVsz6hV8FfSeAG8dfL3mwVgRdRnnArQ5UMJBeMaCh6i5cnAcnsht3STfEaftuemPSETH8YFt",
  "key35": "2G5FsyVTBT82CNqrxrUMVvs8eQPvAU5XejkguGYLyAPXj9YqtG4RYVkLFRsaugW3HjxQhXJ6GAMaM2rgNSxJfzTW",
  "key36": "degWKYfbNWtn8ccFSdoFrzsfAh2HcuF7mVL22sWHpSXdALu9LXWcNdjpZ39hFxfZJ9f6nP9W7eU9kXXyZhsGjWw",
  "key37": "uUCFAj3XNSkDcLpQNiZJkBNrFeWpzjdhjJzAyWUpRKUTHVREFLJXoCMCVrMTiQSraXJYu9Vfx5PRgFetYSb3Hq4",
  "key38": "UnEoyvu5NkLsoSpxYBNGXxVQkxgXCTVwWak28TcAkMn4n8wVToQQ5f9s7qQnejipj7cmyaWf4hABEueGaDR95rL",
  "key39": "ZpXCEMa54ishLzy7fv5jAjiTi4MJfugCt1WESdgzK3xhk6Rze2zT7foUjoqJZbHPbFwhXA2XTzZEe9L4drwVxEZ",
  "key40": "3PpA2LFfzvqaDaN6yeijiHw4GE5A1QVVCfkjdo86bQMyTNKRE2tMcNtMC3F7yRaTWmDmbCNV18AXoDcYnfZkdqFE",
  "key41": "4XHyegSFEpyRbmBwM6Ju2omyjgYrNuy2r1ahhzwPGMcbGjWnVhMGagCxEcwueQeeNr2hk42KoKPQj1tRf4Q4TwfB",
  "key42": "3badEeE5tAD3Xz2MDmCoWREaFQ7XfNgXyngyDeFNbZrgcvhChoJMU4QJ3mGRNt6KCmUem8bB8rejDth5o7Z2W2WY",
  "key43": "3ACdrouDWAP1yHzYnQpdukPCgAVLZ3fAe1jMS1nTBnxHhYRcib3Gspy9EGdB79XMX7yh5xJGjTaA3EnEPNWZRGf8"
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
