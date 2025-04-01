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
    "4dLcfj4ev9aaN1nUDXaYy33ven1neoitavss2aRrSYcXNpe5BHpGhqvjHRiqwEmXp7Wd5HTxMkMorjmENyqZ7zuE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nLmzkRhaR4WpwvSiJhX2j85WFsHTQoBf6ReHJYvh7V3n7oPDPyP9Y3JEnDxC5rfQsPyA4QAwH5aG4caz3pqRJPC",
  "key1": "FUgkDoW6vUu6KzaVVXpxjtD58mN6uWaPvLqsXn74BZmuvPTgvgimxFHHUsAksxjpjiqiYwB1xz1u6DMWbqkT6J2",
  "key2": "qRUogA8VqCY1FNYb6FoLEmbb5pCbNWhPEMBN8EtioCysT5oyiPMUWUJTju2YTSCiD8zFa5TFNGUSAK6nZRGGQrz",
  "key3": "2jWxvqgVTpFVLsmm8eEqYnqPepGWJ5UbBcaWoHgnewsBJ8CNXk8eoPRooczrA7F4VsrSNWgSRZX2Mnkg6D6cFzPs",
  "key4": "4XuKWtTUuYiTEgmJnwS8jatrxRYiQGVHpRXEq3mz6ZNXGeuRTQDJizSLengFUH7UDsJ1A6629TogEGWvhPJmv2vp",
  "key5": "4VeQuEM6B89tFA5EjQvkzXqMmx7GTwYmZfnJBtzP1gT2KfDncYUmabjna1T6zC3jsJmVZBd77Tk1P6GJ7p8BbpDT",
  "key6": "ELUGkycSxjPidTFHpTWpXhj2YuVSPVLtxdEgEERmJiRCyTJD7Lh3HrGhz6GZQMrejjfGmQQXu7txvcheJfGcVja",
  "key7": "5ZvoC7YBTU6zQeCMNA7XP5LcfUsKyPbcUTJ55jwoCD4sToNXqUVtPLuE2tVyR1rndF8EiN5ftGQfrTW9uySv6zPQ",
  "key8": "2FzCbzeCYAwmfK1ghBYpBgCy5ao7fwKG5JJoBob2kZR9gEonBatBAXr9eFxsyLN9H1oJ9hQHGbfHCx8rSyxoK8jY",
  "key9": "8L79SeWKDVtpkEMihi7An6KxgtWycAq1qvibPRcM2Ufxpe11pb8cRhyW8WgXJAR2qMaSQps7SQmqnYxNigiQDMW",
  "key10": "22KGimhimfLXodXqh6HpWcPeEE6Ctbn1BccZMUoWNuamWn1bSPoeWsTZ91ocHdecxX6FgXUAwGvgXAiRt2KLLfUP",
  "key11": "BftBQTMpcSXBiV4iwg9NYmGgvVvPrLTsbv3eGwTrpy2rKDADsjVnKjBe6BSJhNBWcjXeu9U7oJBkmnfXY2CQkAq",
  "key12": "48Ps97fjp4grL1tsAQnV15eQ9sRhvq7orXVJgqMQ8PGxb2MkrQ79pb6gNBQsVtvdvZVMy2hqy855cXUXyX2KNDm",
  "key13": "3VQRFBFmbgnd6bpe73snEnx7aE8BHCfTyqikt6QDz8bNgMv2aREf1a8X65cELkr3j7bdeuE5p5WoKDcgDsyk3DDk",
  "key14": "5jBi2VQ9W4KvToH4K16u44tGR2QE9X9re9JdUaMhZvRs3H3sztdQiXZmR4A7V4ZWBXaNU2nnKoxgQsW58QVMCvAG",
  "key15": "3rwsysvN9a5LFToACQ27gihuDcWYeQHe3HraEbhpDeWyKeq8PKm4NiiQ3fsb82c6RDW187XpiPXvnm6xeDrPxhPR",
  "key16": "bLRRiwF8PPEkGbCXvUALkYe52yvcaAyGoyiocRNEA5xp4Xm7DP8TU41ckXjXs3J4mJiL2JomB4Ls2JwJAAweRY3",
  "key17": "2D7nrZTYG1RK2Jsro8nGEAwAVXFH3ofxbdM1T4n3uXbm55JLQDbszJuXTMftBfURYwX9rwe8iwkJDawS2fRnz7HN",
  "key18": "46aXRoWafSLLPv1qk53QGvUYwHKqjbmRLBjQwEJZcdtLri1s2r9gjkPVF6NoYCkQDkVuYyTUQ6pecUYDb9fUBZtP",
  "key19": "5msNzBWoVfSnUVLf6AA1k4MnsU1xLfLqBpn6GVXBFr44VKnCXFgboPsySPu4f7HaEMzFyWSCTWgUSnQR6mJUnQSM",
  "key20": "3efNgRBSrDGhG7rBSZtdooUHRgZySAZ81aN7UnChoVg6vKo3eQLHFUiNswYk8iEGDbQikygGtrAe5WYiQUwkY5GV",
  "key21": "586ZTSrQEmxt92k63Vmxy52iwLNxqit2vCZPD1EDZArzi8H1kZmbtyH1hndeki2JeZQBtJKo6bqGjncrHL25aNJR",
  "key22": "MwbZdJhABzJ6EU7XhVAZrLGxTXwSuBQLL3Atv5vBpu8UssLtmDjXGdhofLZurRfviNsL93tyY9nZhFC6dJ3HDZ3",
  "key23": "4oHVdgSz6DR43LC8vqYVoiYYWohJ9axkqBaDKx8Hvojh1AaJCMpnc2eEh4Tm1H4DPmArbMHB8WWB3K7cdgqtHDco",
  "key24": "2uedKcDticHt9szYQ4iktaHuEsVF8pjdbuvSUiE6YfFsKejp1bgfa1zYkVr9xyM4nuvWjVV75a8kz3TDa3Cb2NQd",
  "key25": "3JyAUP8NM1PxqQV5Uzy2AJyZbWj3y9gejXjy6awqKSnMMXSB5pSifwByp1EJWUWpomgV7wa3vfoP1iJ99HBuPNkL",
  "key26": "41jhhXvCk5hLwj8kv5cdGvMv25Z2F9Q2kDEZJ5PL6tEz3bmp5Jyby2nFmijn7oWYz4UsXKPPPNz2itPjfhiWqerB",
  "key27": "58GkrXPM6tgcbvRY4bLath6p5yDGBx8Q4oSUVh9k9Px1MXqJTLkgGTTHZRmoQsDbNh6dkZNDPqRMgCHNsoiitB6F",
  "key28": "46jRcXEXpfK3BZYiv8wzJVx2DmNFrPaCi9RjWZRWjFDBAv2PR7RFAJuQZqsR7ycvvkWdyN1N5wSYpJ8Qems4BncB",
  "key29": "5k7NZrtF89cdyuL8yFPJzKutQrozEjbuo65JJ8q8kqs4qk1eSHWiZypv1zsHPMZ1Y65Ws1QsNYPppNcVr5W75dnY",
  "key30": "3KVToNzpWPj4QRMf9yBZWWni1vJ3wpYG9MyMgNW48pcDB789aCoKcZUpjThtbysbhLE1RhDMEv9GUtjatPFimgs8",
  "key31": "61JUiX3kSDUqvJTMsuVjqnnpmXBsrBkwFZNhVroZKosGiRQzYD9EcFk1h4sz8JSeTA24UV9ven3sSeXkpPXK3LDH",
  "key32": "3GT225pfZXpPxzwgf6yff8jtZSikuhJEqZQUvDVmYPGZiAMaRXCc1t2uQKU5BySuMy7dsKmUekZPhtEfQdT9UzbZ",
  "key33": "2srUZNX197bQuXZwVjHx5AMUMZsRJLV3TybtCrksQFuGRTwY5VJ9RjV2RPFunBURAyxJyQnpBh1jdcEFph6C394Q",
  "key34": "29uUvcy6x6jRQkm1Bi4h7nb66KwTwSidoVBFzC7nTGV2HC5q76Ki7DmJYRD4XXN2JV8P7tB8vUXwLASJejHbjYSC",
  "key35": "4k2tsmF2uUgkGMCCrDGKmHb8wmV6fxdDUVzXrgP1e4nyEtxqQLxbxo4m6F1hDoiKNy6tH64diQm52tav88qfncux",
  "key36": "GQpDisXN7M3LQriuZpXw4hqNWL2gB9Hzz6RiG6x724i5h5icPeevtCdntK4XjA6Fvp42bngKfeNAZjj6a5CpkbW",
  "key37": "5zJzA8Pf1eqiveUSECo5YABrigSRgFu3uEAKoBwkrVqckQSJ3D9sJyZghHRGRFeFe44EK8ySqvCr44QFPEHQe85o",
  "key38": "3B6Q9dnau5zssioFxM6jKcdkY5mw1neWush6s5NJP4PVaWvsiZsJRK1mYiombpBKaYcZTu2ridJt46e5CkFgtJ3R",
  "key39": "2ztUnSVBKJp5pwFwcckPzE8d5XizMUi6sNFtDbQ9VW4JbV6viNgWHSKCS7thAoN9pECTB8uR7KPC2pSixg1WFD1F",
  "key40": "4wugELPnnfHpwpxrPueZ679MUqqXwGB4fFemtJXiwdNkaTGTXZZirArTdCPvLEogh4VSd8g6gikwSVDSBPPbxrct",
  "key41": "uyMUtXZukS1Bi32HRoX7V3ehACfDvX8HG9rW6W6em6t1cfT5a9zLWEyNDwk7hhe3wYA8bJqPw8n9575ozdTEo9a",
  "key42": "3iapKyVrUZUeujXXQATbtMVoQvfLDWEs5d2XqN3HP9XnNYedp7MfqzAekomec2Pfxh7EZKhuy4mPJu8h8vEu3hLK"
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
