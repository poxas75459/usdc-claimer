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
    "rNUBeCGX5AEb1WDySaCc4gyNg9RtT8h73DqfzzDvtZJ6bM1WGfnQY96zaanAiYWqAa8jHAA8hnWX8fRFHH7CTVR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VsuFhGVXNkaGrmkgcUougHMLw2w9YpMeVM73Gy7M5tZay442ZrcU1dgiL65nbzbAzg189esCASWrXro34G2zGnq",
  "key1": "4qj6adkn1DkMEqfjNqYFVWJACYKNdSWQdo729YTn8bpEAKt7wpdiFe4CkxdkaY7GLZJUZJYCfGR1EUELnLbkdJU1",
  "key2": "4T84rX1mG9o4Q3NTonyAi5mvjc2v5JfTKzC7jkVpWjaoAYVH3vRbxUeZQNx5TYnhtYjoKAEQDxjzjCBqELcxt3qA",
  "key3": "5wjF7pZJkz8YUDoY6vsHmRnqw5Yjny1itjVFgHfDnTv1b26i113iUK6TgD3Rj7yHPxfgDPBff8cX3iXiaZxuqBse",
  "key4": "3yrUopPDUNgGpeMi9RjrHsAxgWbwTFqDCbBkhUoHtJMGR57q8gEBM5G4uZvBduV7X1gvwKUV7cG8gaMszzvxgzw5",
  "key5": "5NabpA4fu1iTjhBjJJnxeR37URy2AFqDDp9oVei9iChfffXm79fgFUfBFaSc24yia1bcRpM5aogUbr85t8xL5JMA",
  "key6": "3c65y4AFJQYfnMzUme1pPSqEVTg7Nc5pzTtvKVhERv8LMvQgVfz8KZBSSdPkK6wtbqS1RuRa7aRRG6b79ScnkfpX",
  "key7": "4HsqsFPVWpnBFJsJH5HFm77VJSTmwy1bvT8NiJnbBaJnAPtD4rf3FV6AGqXAeL2F11YDnrGAh2BpEFxzi1JSgPE5",
  "key8": "1BBGn9U6sc1bNRCWx3b6VqbZABkMA38pGutfPu1E6S9Vo4xUmhSQ8asjkKkVQHzeCKaDx52F2N5ZL2eqMzDdLcW",
  "key9": "XoxbQkYVzb3oD6qStGahZLDisjU5szZCA6h8FYq9k6iEmabT3sdSU7BuAhbFToV3wLAS9DnWhYg29H2xaMUwRTY",
  "key10": "m5AWxohzvEcEvbPJHwsMBMcGnxjpQ3GqoB3NPhtTmNu3Ks45P8AxvKpmg26dLRtGZQs6JYnjw4B9NrvPukVVuy8",
  "key11": "2eFXzX9HnkbGVNCw8iYJ7ZWtjN8VZX5PpvoCTfXEhKFrZBdipfykgtpBz1WGZicBpLdHmrqTvWkjyKinFcRZBJ7R",
  "key12": "5EaVRHEP7LbvUEPvo3xQgmBA24CoeSrfzrpVdmax5kg4ofDQZu6jmXUYcjMKybQ1aN6fD62wSuLQQQmieisK4kvo",
  "key13": "3C3hpuLcDPD4piaN9iuLwnfEvt7mNdwnC9VHdD1KWCqT1kXsXLSS5pqMmG2RJSPgHEdoJaQMXgLSrqgTTidLFWZY",
  "key14": "54v2jzpg1kDDPZoG6hajMMNVAHWmYWag3SQzMNizKBQzoPabaqprG6b8n7ZxjazaQ8ZBxJEv4Qs1gdvTUYMm8nay",
  "key15": "5s3cwm1RkBGovUM2rhRKHHuU4LD9LcMQsN3LseYnXYBmWA4QEa8n8VP9YhT3tuWDfLgYBZJdVukEYeZqe9JxebU5",
  "key16": "2xy6HumY8xK6pJoTBkS7JV4ubCsRsFDfEQPi7bSb9SzoKFtrRop2jmWKAUZM8RbVcHhKuKx4XR6h3iZvAZzxTrav",
  "key17": "2WRMTYvdHTaHabJQKd4PjGwkhHJfxUSN63vUe6QWCarF6PJ4y2FKgXAgwkhNPzy1zQVsLV1DX4dgEhJ2fkXaxFW6",
  "key18": "5SFUqEaeZjpXQhDkVC56SE5sodshxQWHvwmuQ6BqAGS548X5v5TACEH5vqhsZhqKUKs3MJcUaibRfwkFbn8rcScB",
  "key19": "2RfwNNt3Cg8K4bZR8Hz7ZEj7d52kPHXwATvvyjopMrhuDsyiRodMV9v4hdMTiAnHuKvLYuFgNumTKqFT651gviWg",
  "key20": "5X4kWFdHWnCupzUjSFmdx2nsE8QHjgiJHmorZw2aysS2yCpVCifgoo8kKHtmL6r39GzZNhxdrLLp4uovg4HnhCij",
  "key21": "5WYecaJfabUWYi4Xw7GvQexh3YHM84bkqY2uNEvAkFNCfv7WchbA1WpCQrZE7514iwriNQGY5tJdj51R7QN57ZTY",
  "key22": "4KrsvZDoVddDYw4HVP7o7bu5dMt4bD4CT3vnWc6J9uzffDbYNaYLDAvnYT6ucsGKh3QpRvKPW52UodAT6A5By8jy",
  "key23": "5FVSTpPVLyRxfNMkB6f1Z2H3tVFW1VDJFb8iE2A6SrvShamBpRoHXVfdGph3oW7Zi76KMdE3w8NSotpcuKfVTGaP",
  "key24": "5aY2ocWoa62GbMB2C2SZf5wwntaxNZCZKCcrauuncyfCKwo5PmD3E2DY2GH6N6s3m9BmygHQXamr3mwM369EgCBp",
  "key25": "2AarkvAxSiCu7N8uEbtgi8Y1j3JM7SevXYEJagbDH16EYimTZpHMaeziYbp1dTqMgB6TKbjtZtowuecj6ZeFmgVQ",
  "key26": "5omPuDAfYtpQEbVc2hEf99WMhhiY1hBprNxDruKoS9zAxL2pyFBAnS5oSiLnwhJkRLnat9TwH72gWTmGzDVLeNbB",
  "key27": "eqos36qwSJpqSzii9RpiqLZHDo9yBuHoABmryQBwB17fXoQwdm4JD7j6diQnRALCBKDiYqthUWgaVB9899yS3UR",
  "key28": "4NiRv8Hx3WKCPzeXAmPy9boU8KUSixQAggrfBBLYNMBwPVn8SYGtQm74adEFyrLhRiUzzBREqBMHK1KVLKwbrQMM",
  "key29": "2yJW2E3Xb1XJnBLwf2tV3a4reJ9V7GXr4gZ41kqzvAyBwLMUmPGWJRHjv4mh1WEkvNX2ZHZXV8nSKJBfMxUVHXM8",
  "key30": "T2y9BWX67Bh8ZWphbJ838jqfyBTk1FbCHwdFet1AvB9iPdFqwR1J3qTkupvoRKY52dGz2D2vGCaxzJdEMfT7Coz",
  "key31": "5GKL27PPy4hpVdgW3v7cEvEb6ETWbhdE4crcDQ6129mSreAKqpx1tePvEfgSJQAsf6LnmY4wcn8mGMLNAdMY4zNr",
  "key32": "uZQmuGbKsFJevnD3m5VnPQAEJT13UAKyUhLwd1F9cWWFMDsvzSEav7Hq5L2tzd9HBKcr4DJBaEbKaZ8eTpMWE71",
  "key33": "4mM6ka7mJrmczakpRNdMnjvAtafCG3ce4VNfrxpQdtdLCqDQsyaCrK1gLxYh2Faf3dP5K5u52d9PwoZ9MiUStJig",
  "key34": "3anFfmcGDs6kqYh8chcVvJ6z9sg6i7gQJEnxNArJ9rS8EfcQqTWVkHHz85fwc2k6iHFGwxTrM682LDRrsGw6h67A",
  "key35": "3Pph6Q9u2owL4RVoWuJf9bx1PpP37c5YiT5Qpinavk1FqZG8WWAY7ajoXnRoZnkitR2jcrGm54QSqiMkzFB8UNu2",
  "key36": "2yX3qdgwThQS1iGJFrPJp4dxMpHkS2giktMY94as87NCSDE15r8K7EFwDhbeHarw6FQAfzdLjdt2RSgEKSobpgrP",
  "key37": "5TrXSjh7Vd34U3AeCesD1riq8ZHiP8sgm7pToxsNumnoJ2PPw6RdB19mgkfzR1J5AYqXThvFdTeTFUEqzvw7VjJd",
  "key38": "2THEJteaDDQ24Yt6QpSYvjR15w7NYum3BKThtUQ8GZC62R3P77kX6TPJVqHnPoQWJZ6N2ubKkTLXzBEYULPA6imQ",
  "key39": "4DC511oYxQ8HaTsnngW8v1agXT46p3wXvbVgGz9M14WugMGshvoaGu5EGz6K1mGJ5XCt1wWevhGUugPGaTF4qeYq",
  "key40": "5hH5CfCnBpTEkFbddMkL9GKU4XoE1hWKMDVTyfZBXa7Z2e3CSLEYBUEPTQKgCqdC2aSj4QUo1LVv93RkpyGMGjtr"
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
