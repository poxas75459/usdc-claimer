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
    "4NjDfZzTzqREJwW7RJDwkWnr8vGXt9kyR48TW7pugRc5ovpsnApe9jb9eBe7KKFzkLfPj4uWdNkojNb2H242zXb5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xAcKXouXjrFXGo2EEswE5BdVe5SYtWkKGqqnQadsQWpAQP4c3j91PYjofgmXgJzr6xGnHgS1foNT9uE5M56pDK9",
  "key1": "3bCsAobLhzmvH2fZikg5hTqVTEV5EuBWB3x7HQpc47uesh8WhNNo2cFmEL7JknxzuPtK32HTMSujhYRVDGDiqHGm",
  "key2": "5MvAmMKVJ4Y3Nopst3nVBa8TDD5RyZj1WPohWn5QadeKGuk9MNyEbaKxFBv8bZY7DQLDUqgUmXFV2gaWU31NVciM",
  "key3": "2qSY33a4yrwTPQJrJXvdSJRhqyWdmpEdGT1Qwbz4Xhr5Yqvfis2gERKu69j77tszwQMdeFdzGXqmYXEjtKCLzXLs",
  "key4": "3jA4JYb8rsyMKVrZ2CyjJYzdN3RieW3hPQSCQKdD2ZyBbsiwpDncptA6P5G3bWakR7ZNsUW4A6yYXfUvKc2MVeto",
  "key5": "2Zg68tJ5ibEDa94FHfURbmenVtVx4qow11yYvQdsSmmVWbgbuuLyMPpybPxU8Gbr887Vr3yJnYZ5pQUMrrWjMMvK",
  "key6": "2s7jwsjDapxcpCuw5VLRhzAtDLTsupMGK3M3ZuZZMcEmFtggtWsEgMqekgULwdZuNdKRWjJH6wJHnFDDRSUWUiU5",
  "key7": "4RmggTnhmdd6f4kGe5RjV7F81nhLxChhFAYjKqsq8by9fmSC3VQN9hrB4nDBgGATgpXCbreKeYT5qpe8yWJ9HSxK",
  "key8": "5bbigK5AE7svPWN2LXBa55fNr1NPmBwv9UUZEqx2x9WsPGhnmmsaj1veG41oSdZTXGR2DqmaMUwSLKvnv8B4kRjR",
  "key9": "WMSDJY7E3mkecjgbjZb47ufrwTLcMqdN85jq949SEksxoKcBq2vEJsnCh5s2ivq7KHzPCASCw9XoTSMWyWRHPKk",
  "key10": "2ouuFaujcibgh1cAZ6TpffbJW5Q1Tf7xVw5kPGuXm92SYUiMxDpa5dbApyxD4oWZPgEgkshwxzw89kMT6ro4JaCK",
  "key11": "29FRDPUzPwhYtGrYrmGdwNs3kvaoZ2Vh6moPCWURoecZbpQP3Ls6V4HkSmY9TBP3gRYmcyxpJPGGat5sH5SXBbdi",
  "key12": "63kWjmKBtfCVmmdYPCuzQTdNs3z1acmf8HPAB7KR6dJRDEgX6Xi3WHK6PHkgPPx7DeuSE7meV4vcVeG3GBU7pUgE",
  "key13": "E6zE4Nk8uraCtjiFnxiLii8or79E1CvDtqX2tCxzxN4kJz4w74RRiF3dZ4asyjk5C5shRtS8AMvnVxkBn4JNXoA",
  "key14": "4xozFGRb7RyWeeg1P2BfwTexkJtP9oQ6qMUjCbJDikpviStki1RdQ8NxUx7N1FVsDyhPU6NiaVagSJJcRM1Sk1Uf",
  "key15": "4aCdexKqwZVSENpX5UT86w2Z4bDZV7BLaTgvf7WPDUUEe8sTW534R5DWaZExRaWp5MhDxQPWoHWPv6EaSkjN147b",
  "key16": "55qvo5eNejiB3puEBU8vQCvisdTdNRv18Y8NcUWB1E5agtCpXTnF3Cxo5y5QdwYvWuRXgxe1SDJ68Q3UEV3PeRaF",
  "key17": "125Hq7kb2GcDZe4PorMZhAQ4aYAXNTamFpSdUbFzTLV4i7iNQ6xB2gzQn2882WpBP7NmisLESW2dwwA4cp23udit",
  "key18": "5hT5K4NMsjzVkeKQVtMEta2LCqDBBRNZfNdYKETSaRRCHX1nrVH3voPksVJbpaXtcL6C7mHcY6U6GZ4yUPfjVgVF",
  "key19": "4AE57XqgzcP1tBnBPMjZRMvZLddWvboH6kUd8atmcXvDtrw4P68Tn3bmkNj1aJrCDtNfT2FLoZ6cochoR1kqiYL3",
  "key20": "5xKQ1PUrpv1PhYFGwRmfbqn5pddfThpMjupZTsAVFbmNyzDHAFrXEN8gfPorWmFCpGCZfUx4NmKXuqChku3vV4BB",
  "key21": "3prre9QdFWUWPuMBNqkrUgL7J9KQgpaByUULDWNafyJaVCDRuGTT2QicGT1jcY5aLKjzgT8Gr5dDD8QJ9Spe2cs4",
  "key22": "E17RLcBrqFDPoYPBJNeXJeDTen1iWntFLDfuW5nzm4yPDaZM9c7r7eV7vqndkkULnQ4E9hPooAWRoUgBaQ1JJgu",
  "key23": "2EfbzUakc261ECCtCwBG1JD2bvm7w6KVx2J7NzC7gjmSYMuvGaLYpK9GzXXYuhCLFYKc1Vat9sP67LkrhPJ5JRRJ",
  "key24": "3PkvEq15xBjEzxxiYnYNMwi7EJECTdq33iD99tF6E9hDaZhrmMLQtqSoC6F6Bw15UneP1sKgSVmzwQ8HtmwGzxyh",
  "key25": "384LtXQnfXYLAhTA6Fdj2BHT88XprvLuaFZksH78Z9wMFh4UQukKcyqS3RRP4qfbPoQEoneu7wbANg8jcETu3qoD",
  "key26": "2oFCwimpqZpDY2e6PuSmmy8QdV9cncXeuQAgALqPzdF1rxQERXtatrjsLadxFCqchvNM16BkhDbfvLqnEeH5zboD",
  "key27": "539CuxcS8WqySD1qb54m57AAxjJKNSxz85xMX6A9hpNh2QB7dL1zjfRRx7aG7FNHSzSsWbXjcNgkfkvuDb92AAs",
  "key28": "3FXeEVPtKDQ4pwGMHyj2L89uUXtp8gr3xsngHetf1BphkjQg7yDCF8KzNbZvpTDb8KJu78RBeZFewNcNUqRh2o9p",
  "key29": "5AmoUgrvfvHZbxou6Y5t8QWrSgyvahXR6qLAC3KaEWjR7ASHprqwKFAPwg22LF9r2d3mGihK1nfs52Y18vMnkAj5",
  "key30": "3feWjYTGrw6FJqCVuZNNRJxunoqsoy3uCyTgEQ7fB6JtkTuJmgwmqLMUJcczoUqvED9aKUVUBBHJKvgeEhuQcysR",
  "key31": "4MyLGnFBH8KUPqSFN4tu1nrvxf1oYHmYCAosdPUveh2ahdRcgdmR2jCKiVqpketxCTMd64oyqEQCx3b4S8PsqAag",
  "key32": "2tVZ1jXQqre5b1c9yyBQqpY2HXQZdB93KYnaTiVfpybVC1rwyH5Guyx7FMRYvm6QMvo7HNHMnAXnZR1PhU1Q3C5h",
  "key33": "5QejByjPes883jL8zLC4jHXLYWXByuM3cKUyXUZvUdaum7ZQr8cJdZX6X2eo8A69T4Reof4W8zZULmAqCzD79Zqj",
  "key34": "3aA9MxRizYn8wxtZXjXTkh3FkTieYTJbHFkTYuY9PGPTtNj2P7FdmHMxzRQYdPBc9MctA5AqAKCYq6pKTFZVPNHb",
  "key35": "5SRnnT51cmx1cQyTB3s1WfDfACD9JCBuaTEbDisa2cv9bZeQYG3sEmBmMuiffkrgZ3TRBgBtusqLuWxxukifVwFN",
  "key36": "5WXAd1ccjufMKzZ48nansrdhdcrPCjUv2m1WrpR4QsVbxj2PwYfnyX8X2nJa9eXWiyF4wpmXAFBczAZTfxjfL4pm",
  "key37": "2JWi8TVQG9P3jrRZMMH5gRtspkM3bQ7kj1XBFtT7VqsbaSMHRw11YSbjy8G22pLsqdHPMFcAB2K2E8FBmLVD3RdU",
  "key38": "ggtAbUjX4SUZ6S5YU9XpuBBmzBjjT21zRoGaGZJXFBBU1ygcgb2nNQP8HVtYR29YRGHJWcc4yEZTwJ3ojKCN4sF",
  "key39": "2uUMS6DpwpaUKarHd5p2fGDPs5VkEraodjMvTH4kyL3aTZhgqKmw7pJKNK2sUJhomjQ9N5xj9tmHFJ8L5AAhLKxa"
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
