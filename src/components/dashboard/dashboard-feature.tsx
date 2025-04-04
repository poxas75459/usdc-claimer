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
    "4U1gryNR67cqNoogMrPRfm4HGrwhTAxcW3JynUsUTJyrESba1mWegjFEsMEzz5q6G4o6pEMPZnmvnkVjYZ9noqAt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49yY9aMmzDJEddYn98YEjCFfDi526GSZgKwup1sRgUsP8ZY4GSS5wmqGwej1ML164xSWX4cZ7F7H4tSxHYhw9LQc",
  "key1": "5R8bR3sQ2EqXVdwV16HQHPzd5T1XNTA3ZsAdo7dFiMxiXaEr9zUMQWJxyHn6P5a982oniTT2aqBKBraEGTMD5hqv",
  "key2": "62toCGmk4vLqtVE8E6x8XhddkqfVd6vMWRW59nQwK7CBUewqLr6dioucpRfWhjTYX9uKjK4r8H2gS1pW5XNLE25d",
  "key3": "2CmvSY5qLeYeZq1kFaKXLbXZ3nMna4EuzsYaUhHqCtVTsQPQ6QBJ9iAKZ4TTTbrZRGhxrKCaVi5QZYTUWcECE8SY",
  "key4": "3HmS3gmGGo2rDRo7Q3BxQy7i3jVCpH74mEdWaryGx3WAMc2FGwCeYjUr94rf55Upg5ezwHVwTcLtSthUMBN9WC8q",
  "key5": "547TKd9J5VDZbNHtzeJHtxHeeGBiEGMsJ9z7ippxDYDjWzT2VFdeiVGBUgdXZzbsSqRARrNnG8LvUXSbXP83yp6w",
  "key6": "49jYrXWobR1oVGNmHNawzVcLSAN3RYHobjudm2jWBDFep2Q6WKxHJuDW5gNj5rvrCHKB5iAGhJw8VL1FmwZ5cWz6",
  "key7": "2mN6ntewrv7oPMULCTXLxaC6sz1Xtmx2sxgZFkUVq2h3DLZ1MCoyWcHakT8dwbzNXnYByE6p521GVE2h2Y1JL8Q5",
  "key8": "e7MESsoooknxcwHSFQdVvqzFAZfgKpBPQq5jfvCbxbvLRZQkfge4f45UHCPv2vjtrPq94M4zMUxGVGPDFLVaTyS",
  "key9": "EEgP4V7vAcMZmKBC1RvXWtFiWhma1wFzTXuAENM3BL6v4i7zC8q8V1MKrsXdsop9ykPPk2Jyz7aKbNpf1vBLSq4",
  "key10": "3M4Uj8tkPFEizRrrmeVmjXYCGjQtMg3enFjantuiqiSgB2LNS77nzAoC2ADbey5eibak6BBETgdXj3Nk5nRRhaxh",
  "key11": "2tpwWCgGPFgjtJ3LCspG3UynwAmynYQE4XZJCz2HjhBQPod28fWXBWYHF9eehVYfqqfrRkQaUYa6i8bypMgx7vGc",
  "key12": "4P54qmVy52wohA6DMRKZ6NKquG5NihGPTw4eta8CFBkT2GfJS6iN7A73wSvfohzMGQT3JFZGiSmCRTjUhASvAZRm",
  "key13": "3dNP5jKodGgTVZP9V3z7NVdC1gHi7uo9j9vDpoF2DgMqMKgqPXyNVi3Xc2oEDvpqq4XpS3BXsJWaobPcLPD833FT",
  "key14": "fqyY7x23e5mertTCjb8R7y6TuUMXfGYPPVoi7rPeikYzaVvY9LosWsDpbCZ7G4Y1ppVF1cN4KLCcpPNiYS8Pqig",
  "key15": "2ebSw8XcHQc3YXmyoYnMMzkgtqyTMwC5VTkz7vQ5HUhKg67BvyuB1hBYz7zEK6gXnw7KHr6vJLw2m8TG7RAsqTZU",
  "key16": "248JTGFqYz3qLEVddT1X7rgc1epidLdEJAsrpLHYLFiuVvt7diG1kjoRVT9zjmZWBwvFyYvnJL9PGN1eHsTWr75s",
  "key17": "5gB4gJnvzZavz7iG22iRuXv6Y8js1AVfqtoYTuS5YDzKzD5jDGpL1jeV5LrCztQtwWvKVt5Nz6q8hqdRADUwpjPU",
  "key18": "4bpFfFpSWb4SxysErmA2iTYAYQC8BJMRQdwe3E9XKURn3BW7o4xvcSzocMJRk7HxPK29hetNRaDewLDAW9E9h3eq",
  "key19": "uCUNh3yqhtyoVvo1mni8Q5RDijnBnWK9RkiPGQa5XvRSiLguMBRjixRtSvBQPQYw5pYNmLRXramtCSQBuVWnNMp",
  "key20": "3mMzWMtRGgTvnJoLxvNctRPTZoGZehgYEWoPoJXJnvH7U4gjbr2T1g6mYhG2rDtQuxP26vTMp1eeTTbTKmK1yAAf",
  "key21": "3QUEAen5wt2KfPCSGVf8JSJivrf3ATcA88Szx2P2imKtZeAt8eKmqjG8Z3Eb2qJuP31VDsXAV6TF8brcaiUmHScJ",
  "key22": "3g5Z65oTdqp1yvHFauGJg66Dh1uW7B5wJ3xfVQFwjgtTmfjShuJU1ZSVKf6L7JE7uZkSQcLfiuQwueazd9SaVTiJ",
  "key23": "2ykztD1CPNmwtju4HwGuE6U2aD9aFtCqLMVxvzsFddFSrNy1yEpEkzhQorHAW8GBFAX3Qg21cWzs1CS2zk58j6Jj",
  "key24": "3Z5rNFCwdC1eDeGXqWQGVzuwAeuZAKBQYNP2mknqsNV17B6rDv8MbAXMNGCoeubf5UHfPxTWw6zGYjdjzTGq5tm6",
  "key25": "pWNagkhXgfSVKpbez14LFWsGptJSRRJNUvmgzUkVYgcTUSV5S1nsrgaL1jiP8HydcHBKNkjo41XCDTDUBwA973U",
  "key26": "8Jz6kA28ePJwzsDSsppisXUzLZ8RFL5i9x1WDDReVssBXHvug3K29p9QTWP7qm4zM1Cr5Nhpca6eGEL5pmP7ieL",
  "key27": "3ixMB5Ss5LRNYYH9tts5z2Rnzw92PECJz6RqT4dCMzCdsXcUpYDsjmrVXbD3Vxi6qAEFJPQJMwnFZoNEBbhwgX7o",
  "key28": "3LygBsGRRx1zZfhWrcVc4pUMJfmkyGzAG7iZqw5V3Zk4t8rkPJVhF3Qpf8dXXcqd1bVMHaN8ur4Gna6Pv1EYxY6U",
  "key29": "5YuWxW2FtKnwjSWDoSNpJRYSbJcbYYpKMmFe2pioDxxSHrZVcYBKTP9zc1qpMC1nMtxCcUNyNbU2JLHmwBQ7E1Tv",
  "key30": "3kFNgRtBy1UVi13WFVmc7ziCxbnFnNWAooLf3uc8roYGqiz23RZqgrSmuTMHPTh9bXD6x7Dcwwuui4Tit3XUWAfb",
  "key31": "2mw582o9J26QFmXuNDaFwgZ2Z7Saz7y9B9pcG8TLJWE9DTfgJ2VEBqcLdDCojVxFfh1x1CxWHMPmD9sDY6pSNap8",
  "key32": "PM6Mr3ziGoHBMjExfo7dMJhbZhbqVUzDXERUCb2b6B96swFR45jsVGVTvDxjxKCCotmJKqRHBZRirH2H4j7hFpL",
  "key33": "38sStgmRdKgqnvK6yRLdrWuzUoj6eYjWYEQ3E8wRh4roBpS2AxBGcfCbShKPhio4si5CFRsYfumGcs48xLtE5spp",
  "key34": "5Wp5iAX9zGX5gqziDNTGKKGkWPjzuFF1B2B6EYJeCtX2X7hqCjYQJcUCy4wt4vUFLVWmRTXJCy5STpFnZPfVxSHk",
  "key35": "4nHV2TLBXGWC8bughepoM4wFNjPiLviRx8zv15VjTBAf8DP4zUieq4eYGX14XoU2K9YxcxaUfp8r8a8nRHFmeFtK",
  "key36": "4FJLDCNAeUpmw4yRGT2MVxeEwpi9E5ywbLaQ1913cq93aA8axgLEQpCLfQXMqu4oxsX86JhzU4cfyXAwNHgm8Nvq",
  "key37": "5wCkg9ojZGb7h9qsxhQ7PufNpCnvG8vEWg7BvHm81UjowZiPGWs1qzLS22ejc8BtbfLX7ni65jxCNWVVKwYrN5fP",
  "key38": "248akrotS1RGDoXcaAUZVobKKBbn1HZ5Lh3iFb9f2V51h3X7ZQuQFEi9yzkP9Jxk6LGZBmQjEMgrQCWBFKWeHN8W"
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
