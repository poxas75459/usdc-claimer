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
    "t3vzF45ZoCi37aT7DRpNtVDUAX7aPQuHb9LDtCfXwBXQXSngCqSvLD8RFdJQ62BALVLoxQE5Ngv5vECFef2dExy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VgyxJGYQo5H4ixzDLt1BXpJ1vEvAx4y1nLx2TgE8NPRRyAfio6Rca6Fj1GE7YHoLs8ocVGk3REF1UV4fi5hMBD5",
  "key1": "5uWwsJLoqvxLve9EijYcmrYLgksNN4RrsFfEuwS3zW7xLHVAUt6vNzaaigmQqKQNaaQZEoqUayJqrP1DHk92yhVC",
  "key2": "2p7nTuUVJnKqNAZTybNB53GjtCNuzgPVYyGUifwA7dh8NqaJZPVWJpaPuohmvdkJT3CpTBSJThqiUcWn8gvKK28Y",
  "key3": "3DYRTSkrjfKCHcA37o7tVohqagvCZhq663MGdzZ3nbHHhPR8frje1o6A3AjuCMLLPsrxDktmmnJBuhfxyqZEYXgG",
  "key4": "2dCCuy26hfgHKx32bq48E9QaBX5usg5yrvg61Av2HVtatgPufR5tHMEchHXQPXxa4e1upvhym7phdFvwEfGfMkNw",
  "key5": "52ceyY1QNCYTd5yEg2uzybQ3XGz3FdYvxAuJVpSj22xgmFgnThDFYNop2PhaT5PftrJTpRAsuYtDheekFF6iAEXG",
  "key6": "nKUNx3eH8BNf1XeqSHdRbSDDK3PmGarVtaFKJdimFtArFd9w71Zj4nSLHANjsWmp5Ujqp7yKXpj6Wv6HJuFqCE7",
  "key7": "4SJ3KidCeQAfW2u7PF9jmG89wMrfRAgoNa1rbrkzmA9RNefKSEhGkXL7iA3yEzjBAn6Cs5aiNyLuQpCjrPuj2tVf",
  "key8": "5HpHNbPqVTefnwyQHWBiWQ88b1r9D41Te3QG1ZyCCEvHFCUJjby4JWCtBdAET82qkeKBN97ARyKDo8fhXt4krnUE",
  "key9": "2Px4S4FmdnSDuoPA1GKL8Tug6BCzshPjt2SzaN6grxcFKsAaoq54R2uK3CazRKqjpi9YdE1TEXfMDDfFrwrpoLkp",
  "key10": "2g7a2fHJocDVgdybqxwThmSxmYkxXygKPELGrTqLgKUNs1cvRNGTP5gM3joqxycLT4AQsVExaRuWA3GDxEukxAFA",
  "key11": "3qzShULbBRjrsRRVYZdepQcNKic5WLVCaGojqrw5LTfhRYJbJtwqsvGcHtXU3YE6wyfErKzTP57RVJE4vakVAJVv",
  "key12": "3zzuvgDNXFE7ui8neAk2i1nu7TV5NAdg1ZsijfccuNwPiCKexsFg7542Z6ANmmjRCuWw2AR21YezQMR6ijbRPZum",
  "key13": "5PsY7NRz7rsdgXWjwLJj3nm6n4kMoxxaDkn5idsa7VjmC8n8ggCVjqKAhWxQXqRPnzJJEk77Me2XYLyEzSd4BnvA",
  "key14": "2FKgft9vDZEgbttKFViv6v8VgBmAyYr9PKV1KSmExBBQrfvCpMrjk51VySYbHDgF88xM7rXQw5ynWy6FLFs95ppE",
  "key15": "3JEbKW31DbY8gnsQdk7iAyJCRDYnu6cCeN7aY4spwFiyraDXavibabrXVESCkuQ2GJNkdA6JhmZ1MeZ6VS1PSy5L",
  "key16": "57ABkug8VNEdybF9CqeDzSkV9sEi9Ktq5uSfnjmXc7rdgtEtF8EphqRSWtocoudQtqnbE6EHM1i1DZig2XJ2Uj2i",
  "key17": "5hPaVjami84H7TE2s2uCcYSBHiU4Wp2ZCGm3z7eBKinhWnbSWFUhedi2tka4Fvg3Va4wTBLxvTgrggtAzKTcqcXR",
  "key18": "7ipHgJNkQPGvA16eie4cccu8vErxonFBSnNjkJztWvthn9TKsunFHNhAZKPYazRe1tpPG6k3LnN3wQdDHW6mTDh",
  "key19": "3B46Sdm191u4BBMpqNCYMp9VSB4hPRPxsfgNTqQk69GZEU8FLKY5KtcZkVy9nHhaU5zbMx9Y7NuDdzRTvUxf9fAe",
  "key20": "2yXR4ZcLec7g3QSEVRocgGgUurKniY2TwcP9i7SQtrLRcowHjuc69ctWfAYULiKpGiKYzvET2NCgVRLRFUhygmGC",
  "key21": "eVjTVfsByZEbEkjcp7f4q6bfU5WzdieNPZVYyHaxz3W4vAN7WyprmVpEUaBepAZcfBMns9auq7tSoTzRfzutxhK",
  "key22": "5bHT4wM8HDQuGhzuevQa7RwTc6MsGEfJr1E2paJY8boPy7TfzxRccaeNWaMk3a9QhsUuNGqzuPH3kAiwTmKpNukE",
  "key23": "4cDD1te8cMMovdExsxpr9R1coLx8kXSuknJVZkrHCbeJhSMRA4wNTCZb66g2nNx11Mjk24V4UhKVrD42F5k7dmtc",
  "key24": "3YGguCDaMf4yBhHNATXqY1XS8GcoQejaJjRwR83Pgdv4rdvukrzn26S9wrA9izE3PwKa1ZpxhEUhh2Yk6b56BrLu",
  "key25": "4RaCJv8gKBz3VXZcZ43QjxiJ5R9P3kSDaA6Eb2DHK6nr6L6oxwgJxffGdnZ7vq4mcLMFSoXR7Gr4wgNPRSd7kuus",
  "key26": "21PjEnuY88efA3XJpZgj4h796mQn1k7sASqF9kEz3v8Aaw71WindQLPuWcJCxVw5NyGFyey7ynGdSLjibDqowGyc",
  "key27": "4mHSz21v6q2vVfKFdAFQNo46hkkzy1QJhbchQvwyxL41A8BPQk75azbERNMxzskvfj5MRuWR1ZdubnrVZqD7Vg4M",
  "key28": "616jdCKAqoXtvFCP9ndNcZqwyodRPSK3XCH4AFrrcHxZNisD8Y8oNM7k2oop7SWwYrrMsm1aectRScRStfETLznf",
  "key29": "XZx7QFHpmDRDEDXLaq7P7faSjQ6B77rtrQTxmPSGCTXiwdpHJtFEsqSdscXsEMSbBCww7Fm8Cj9jeRdkgAnnEVC",
  "key30": "4Qavc9gf6vU7w1XoLq7CxpNzRS3ApvMr9QV1H9YucYDYXPaF1CXHCrogGPY8WPYwc4bk79WsEGAfiHL5JARE61J1",
  "key31": "42NZXxUgiNsovRnLmVGL9rHs2MZBGHjVDSuJuj49Vr17CuqV9NSmi99ELRJ4goQbLiHyGSaeAxCMNb1TqULTpNdz"
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
