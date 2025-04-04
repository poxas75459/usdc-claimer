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
    "GErityNPCZQvoGEEwoxCVZdA2cTRMz8U3vR64KfLsh275iUBb3cD1TfBZCpq5EWEjC45THeSkUxZoggWJTLr8HU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qjxv8LJM6cQkYgusuaqo9JFsHpYJUdQTRYgQnXMALojnetfyyeRJAKt6etA5Vasce5F7KoEC8jAkhEeXZ1jwNxu",
  "key1": "53WFxPHJy4ZZqd7i9F5ez7z5LmuUTHMmd5oxoR4qZZCEDb22bR2w3iyzKiBCB8J6q2Jf8Qbuv3R24hkxuQQmJF3E",
  "key2": "5J5U2ApvBNTHJ4KDJbm2v4w3zhU7A7LEAorHCBSdWy5iEzrFCGMmewPsn2HFPKydbstvJJgY6AmaFCwWLXsWuijH",
  "key3": "3nVhSaKANFXHihR4FMNymTkg49mXTzvXFT8jPf6Z112DaQ8L6R4o1nTTWtQY9F8Q7NSr1B6bFpmtaZm8y2wSEoo9",
  "key4": "5jsZ8Y29VqkBHR6Aysey2GZ7kknVqa8Gre8kfAAvmAiNgYmZjgHayPJJGx5Rs9UcaoLfW3GbbxoMppHD68GiHoaj",
  "key5": "3CDnmhdsy8dZiTCCZq8BRMduvsW1CSpETyeKsmatrC8ux7SXfJd8zdsMgxQnYVC4oEgBgsFuurZsmgqzJQSt4qdg",
  "key6": "cSr1NoiDHp1wPU8HARnTk4fZ6ZmNmc9JDEuSpgh8p4LWqp58zeFrSzgTLEFm3oq3PpqVcomSRWeaqzRSBdq9Jdj",
  "key7": "4KPWVD4RJ39yX52NSpgte32SxwvdVW6F1pfVHUUfvfeFPUS2iAei33mW9boaQfVkznWggzkyii7GJdQk1b7znbRn",
  "key8": "5TQKDX84JV4keXmPDpjeqPXyyKaJFdAxPegPJ4zbT7SLGJhLEnNGpbUPerioodMD6qMqSbxwzzy9cFtgFysBTSXc",
  "key9": "a4Ld968GmXy1WAFinoh1P1FndLHNRXRLupUuPDTJF7AtoP7taKD9nZP9c7jYC1wpHGPzUCQ5uGZWpG6hk37TWNM",
  "key10": "4uPnu5W35sEo8Wo4AErvDXLm7KGc21VWPsXCk1uTQFYKG6PRt7XgJkaSEmW639Z4N7mrV1SitvkAtHpsNcVcW7Mo",
  "key11": "41E2By2CNvZj9MNZ8Z8giE1gvHPtp4MmSMgS2kfj6qXuZoApi96mnujc1oogNCCfKkG4GXKium4XBMqDJZzxGCmL",
  "key12": "741e3bVb6NdSvheXK5yk4KTsqwx71vqZsXSLqn5hVv7HqPHpkuegCyTABUzsiLa7ts39GQLsFmYmfSCeZiFVNbR",
  "key13": "5DrcGGdCiuHMuR7ppZ6Zo1doYKAAAsWVsWyafAn1g68G34DYhkaS7xnkydKuH3ifYB4bX6wCb8tFqzkWxroAjDiN",
  "key14": "5Hfc57pfRkXzrMWQ85nUAW5FuF6DH4AVPnhcufAJR7dcged5BjWsTqBFqmnk6ZwPm5QmLkwwJ3vFKz5S4BKAKY6n",
  "key15": "3gKeBvaUZJnme61sqnP5VmiYbZyyFW5doS1Xb8rEk5Dgte234pr14eTE6jwMQ8wVdYvAi5McYHr6B5FxteWPs1Tu",
  "key16": "2YswZJxn1bPzFjuMZNXmbLmbjvNj3jGKMXUdLYBWQAzKmz45Dvp9jTEpx7CKPeKDF7feZKTCe5zQrMbYbXhewnnf",
  "key17": "NeUefqbDCdCVwwrWgMmQsun7MR7TTnjUvPUSGYR4CfnoiySKaorntTYaV55QZdPWBQnnVSCJEmpnekBP9VvB9iU",
  "key18": "3qatpuHFwypo5WPKSddEnwJGUMM289fFF38imn7GA1X5NwwoherftMt5WzFEgJuKFcqhWRKyUHZMSR7aVFzAgdEx",
  "key19": "598DRikMXZk8tixdvPSeTCpuJ4h52M5CkDKuHtuZRJAYsFCcZw66oigH3YzxJQy3x4Ye3LD4QES1WxTpttkiURgh",
  "key20": "2rDriXw63QxoyFab3PEhybzCW4D1tQwVvGAmxUWz44FLdMHPs4shCwJJEDjw23pe3Svha8eZnmSA6EHxqqvCHhvT",
  "key21": "RK8aRUKTrFzQnRAPDndveRiHbTpV1M1uwEsLrTkuFtr5was9f2xYpNcqinvGnYzpCy1tWE2MzJXqrapLD68S7tu",
  "key22": "3UBqTFSJdSGCqAqRHdZZXakSNwPAFtKsBJDFAUGWMHFKiE4dr7TsNamD3Z6ADRpUCGRhrtoT4K9dgwH6KFWS9i38",
  "key23": "4aZNgDfdhDje9oHDG2scqyJt8BB47H5xFSEG6WoCVH55xqR1prnpT6mVSaZwku5WS5BX8iHo818xpxy6rdBfixPk",
  "key24": "3kARJgohijMh4eMGhtvA8FD1cuBDD76hvXZaapvnqNrU8eCgaVgW3dSRwMdGrWX8cdT4NKRj8X2kJuUzpAJMYahT",
  "key25": "2p5bhCRs9MaL8UYnxsmxiji5sWupKHsbUgQbsGsbDoBkQjmdZwVoj31NDpx9mnfy8e8aRr9k72pnavzMSVWyxkUW",
  "key26": "3zy8B4dKvsimszuR7QDAQ3YLiFinqHhc7Us6FFdzwMgDxwGw8yqYnPLompVzwGRmMLa5DKFexQn8yCbdTHGV8bCG",
  "key27": "5nzA3zQnRhNnide7NiAZ57mdNTbP26GCcUKjUjAP8FKa4WFSjR2C4nC16KPY9EUCa3z5DgEVGJkbYTmXfbqHeaej",
  "key28": "5P2KJZg8S9dZ81noG6SbpgL4F5Ynf9y25eTUJbHPBAFjnxvZv8RoUcWTHyMRHuorikhpZ67oNUZxbPxDpgUA1iTN",
  "key29": "3ykz6oJBH42RPH2FnVrqAKs6Sf7BLWg4MqfYDAg7Nbw3FLRZR1cM1kDxzBRxByBYDj4ZF4HTzWaijRsNhY2nkmK8"
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
