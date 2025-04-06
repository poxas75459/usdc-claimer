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
    "29a1mMby5p8rBhZmSF4ZtMQeSaPZFDEvFPfgYCoF5D6m6qtGLMgwyoFLcBLxZPHKM2QXwGARYoieVVpWDe9DPFEo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aYaBcKfc1R2t5rDrqY6JZA3T46LGvUaPiZmHCNgAD5xn56sYLGD6eQ1JEsumkrdAtauzvCvkBBh2u1zdN8QD6A4",
  "key1": "2PtVMtF69De2L59zhkKKJ2ugc27t1XfrvgsFiaudBmhq7j9cmtNLPGpfYz99gdhse8Pg7Q31ehm82LASDC1GEcfE",
  "key2": "3ggkQE9WY9kDWotBW3d3AJUYtYKm6R3Rq4kZF99bjT9SPvczSSWqyVeSrFMEnoEJz5gcXwjBbsy38JTo4Q5Z8LK2",
  "key3": "3VgChD7vLRKEbGShX7MrNyLS3RHwukNfbqwuYnBqfpH6KvkizsW6CPkU9cxEPUAZCic14ezqAH7ht6RC4fvBisXD",
  "key4": "677onyYfSPHeCuPJdJiH6gbzc3oGDazK76An2fYz7nDB1XygTE1DpFN77Kht8eq8c1RShHPZWwBFuj4EppoY5wN",
  "key5": "4ao32CGqxwyz5umyC4cf41wzVJFbH4KYjZFJBv4jM134AdmWyCZzNRCTRWyFxMJ48xPyFFKvDcgkXtD8q57zWAXZ",
  "key6": "48cQydYECgQBJzXcDYpXCkhVz3ThGpHqp1LNQwa2mZTfMUqfiLMSUpb7gLQCKHtTodURDg83mK7CoPdJvdnNVgoV",
  "key7": "2DdoGrjCiRbWpQxjjBHe8kayEMwZocY3NKa6GyxdgeeyRuKpE7Hq3bpbrMvhEjUHoWn2sjtSY1kth7HNC8Ci2PSz",
  "key8": "3kqqL6e2dFnS22bgw6FYVaitsJ6PuRBju6ogRYWdHqL6ZcQpQ5CupxVd3dvxu45JhH3yYVPcdxs4PVz6o4bRPBqe",
  "key9": "2S9h9ZSWBPva53hwwrVJenn29WU4vNtDu6XvwnFzm6isibr5GwuELXXv6cNkVVYYztiAYmrfqzHa4FM3GtaBSHiJ",
  "key10": "37TvQyso81jdbM6ENhCRsR21t2Syvutee8tmVAjDh6XagpseMkLSRkGeMSBrwgYBokQuEJLsbB1mTEHuPii7y79F",
  "key11": "51e2yP2EZkkoHz6WM2PiikETEZgZhqXNBKwBjJyJsSGfcoZioGyr1s7kE6K9MU7PNrfCMe3sivE6A31zL2P7ts4o",
  "key12": "4SBp7trZpD3PNUTeZTTi5vSV7B3EUMckksZpPWbP2Uu7jdevH5pMdYDR2vZaFsFSvjonxYykhSz8FRFtibLu2TD7",
  "key13": "3UmqvtPcD8x5Sppd8sf46TRhcrYTeuqgtrPuaYeCLpBzzn4pNxhJ6zfEsBqYwKyemfCwpPnRqdFBzjMKZbT5NDmc",
  "key14": "5fUxusmDfWHaRkjwVd7vUB3ndaaoCuFNAWQAvtc1dB9pDADU4ZbSDd2gAD2SZbUuZxfKHN4BSJq764E72bo6e6n1",
  "key15": "3vswaGq1aPyFhPAmPtgN6yRUa7mmMRgLptuXKTemoJbtEFpEaCwPRGoi94jLytdwLQA7cNvYsnJ9pU2vsgWAsEtD",
  "key16": "2naH9SfpVA871fPSjYnqCcoNaEVgvhBC7sWhPykx96P2ZBZF6Z6b8QHyv63TPuo83ZKX5JSL5KS589hoYdUMLxLS",
  "key17": "3E9eEna89vYsLLP9zV9uuZ18nvnduZqGNvTexAVT8GE7DJ91zuiaEoUuoPMhu7pQ3p46w4aTaMQ2WPZNyxFRYq1Z",
  "key18": "22QgJHiZ5bATXr22rvuPoF7MxsecTQgMpaLcb9qK4GjQwtNbCM5waKPDofNoMT8A83ovZJBEsnE9ysmCxxhu7bFa",
  "key19": "5gjWcUKBfwZSCvDWFJHLkwvXPAthMmHKNNwoW3H5wdXEh4UJv8XEPMybKG7A21UW8qviaL22bTpA8srd7FVFf7pP",
  "key20": "4JbEmAzU9jc4gQtNevPtMGG1FsPeyoaShxwqka242H2DMtmAfrB8F2ZaRFxAiYhiZAtLAcY5pS6uFCHDiDj7AUmz",
  "key21": "4X6nFrh9uRzQEUNpCE2Y7vK33433HpPLY44WrnGSHMVgWFuLHN9MG8T4M4CjhbqPzARUmzY3KPMZHNzsfaL7LrDh",
  "key22": "3XraVAs8C8WwtMU8MyezywsQWKYmAFrgF1SFHVmQeUPHKCAuhHxC983VxvwAcftgAD4YJf1qb37T3Yhi6npNWdvJ",
  "key23": "2hNj1eNAwcM36k4Y6zU8CCiw8BvGKkfCTSwnnFNpMmwnUYsvZfG4CRVRUwhahguYnCLbHnkXwCTXfnR3kEXxeUnr",
  "key24": "RjPJgxW7Suv4KJxM6VTLUPLcNqL87QKfW7XaAf7qrCE567Fz3f1B1bZcFPDZ3H5iPXHSjGcYFz7PE12U64ksXMU",
  "key25": "4BGic4Cx3zk35mzGwGTbLtSe3cAY9Ftms1bUAcxCKTJheDpW6HERc3KKay8MRKV6NHWDyVyHoiZ2Y6B95HrWGCrw",
  "key26": "5aZgBZLyKmVKQPDsMmNG2Gw6cqyUXaJJJ8LxmDz7n78yiadWBE3LPf6csYcSvHWqHeT853PTctbiW9nhukzyFzLy",
  "key27": "5RyPSsN26VGbu58eMWK5RhL6VDMByAyCuYvwyf4KjKXrpW8wRT4eeqgPU5rrPaAtB6L3HCanoq2i9hbfkiopGnmM",
  "key28": "4xQXkSsXhuDkqWkDExQDnP1gBDeDAeLkcBCzofrrtuqBMs1GonTzSUWVkjAUt3E5aqJ4HuUp2hwK9DkcSwCR6Hms",
  "key29": "2W9LofSqzHRJaJuK8WhFAt2SgfTk9ur2E5YA8rA9MhSRGTCNM65NzLPBtoX5vqiwwH4pvchZkBYSgJ62Un7akqpF",
  "key30": "4Xbn4b1n5a5TtaNeDfY7ZinMZ4wJJbs4VY9XXTPe2CTMBuZGVBNGxLevkH4e36F5JcJroYtpTtiQQQpwWsvdDYyn",
  "key31": "cywSAY9ELtktTLpvmd3pPZKKWm92TvfrFmqSN8yD7JEHNkrsGzhL6jXm45sz1YTb3yUs7Y2sCdJUn8nh5pJdBm8",
  "key32": "6218F9wUMwVkxRWU1HmCGrZjeLq6FMyNdcwzJhWCR2TGMenpdSt4ax6xtb2RcSoMtB4twHJCPL4WGzCCL4ALdMVY",
  "key33": "2jZjWHev14gWrHNVy5NGna1TmJSjKuFNMNw181L9adp72MSJNB3cW8L4h2rw5Wsm3R9SE4GHAjbjKHtUmqx2sWoH",
  "key34": "48BjQV6kXY7FRan9rNavuk5pTjXeWYFdrtqfNbHfUhQpXjecYM6NZcDjiGrGK7F9XLX7CvLQ5rQyoeHk8ozUEjhx",
  "key35": "v21yy1kt9b5bE8TxozTNeDHwmJnnC2JsrvFAbBqMBAiwkJbKifykcdibPqMbrzo5FQ3TGBD3QGzgf7UYJDGmshg",
  "key36": "3ubDdHuGVFUmdMKL7kLowiYesLeaXd5RvYwzf95GNufvzfC7JYzJGoTkfiYaXK9Z7bz3AkDP1gtPCDUraUkDLp7z",
  "key37": "5pZFCNy4cTsNmwx7i7z7GXjzTKiSus5oA4VXprXqBwYSd4QK9xtzd439VCFSVhJS9GMUmCqb6hAydTW7TjihynXF",
  "key38": "5iCQw2j8ZqEr1Du1RvsRcusjb2eLtoDPwecfUpkXJNEja8Z4uMk6LeyxE4NNdjiFiwTQRKJ19Th8dMy93LBzuALp"
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
