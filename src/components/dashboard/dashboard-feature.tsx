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
    "7MX2GYJRnfXb7AptPQVT5Ym7HHG5KSFR2uBxd3qNHD1vsdiLCZ7CaKTqWL4WVaAKbLsYKSczZKeXdnvij7gPT8i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hCmYVvMCFb8mYgc7xnY3NMfvumJZK37deqn1ywRMhCn2RkxeiYrQyLTmSLnWBkYV5dYf8HDb8KtP3hauhC6XBZc",
  "key1": "2obkwi6bpz7sWofm9RNuD1HNQKhR4qXtuvaQFCH8Jq9b8w38c5bvUxLDXhwDU8pL97EwcdBa3U9JNZ2gvJAw7eM1",
  "key2": "42LkmpUTkH2mnVbAjecefibfgZ3ViT3Q71tq5Aa131shdh2oD7CSqC85r9iRNMvbA6uDoDFFZqxdb5Ub787K7HwP",
  "key3": "4J9A8NG8YCrkoiSYNXLXkYxz9PcrHCRUu7wqP9kX4ieabJuG2HtLNxhSbb42ftPNQAXis1ghPppkHhQZC5dTX6YV",
  "key4": "49VDMVR6k1MQQysAUPkusrmB971RQCcfGATeEto3czUaDAXZ5df5RDtYCpTi3qUDeamNS7BQYDRVznSehgDkpZFG",
  "key5": "d8FM6LZtGisHYxzWuDb9wc6wFKKGtkP8pchCxYgwcm9w1h5dmhuS4b2PhMqFFCep2HhMeSnWkzoSzE3Yoqq1a9H",
  "key6": "5VGQiZn7HzvvWJ6qz1EVxCgcqua3hfMSDm51cMbfsUeZk5cXrDEJ33wJDWEGPfvzTD7euoGGuGQrLmRzXQb4xxZ9",
  "key7": "4fTz3wtXVqWuzBNPvhWrGSkXwCRVVA6ufZW4njkyQoqvFc8phXew3RrRpWEYZmFrfgjyCq2N2QiAnYCPEh8gmof4",
  "key8": "2Zqy5DkZFp5ohrV26YgqymmJdRhqogRas4xtfiPX39w15PMmb9tnXVTTanqHG5VYYnssNc96aipzSx9f8FUAkKy9",
  "key9": "2GpcViaH4Q9pmRqCGX15PMz9Vsk9rLa5hQbpkibj2NmCz5AC7EEjjsMoAuW8AM4na2yLuVVgYmV4DJNyBmBcSRFn",
  "key10": "3wyCk6t7iDcyc5sgccbzNovzXGgBQLuEHPyxVfs4XZar9hKT54YmpXGevNJhULXB5dHM9Aim8Sf8iC1XMNVndAQk",
  "key11": "3vVEdnA7DDnqoE4MzrrN7b3LYDjYqfC4qPc9H1qmtbt8KgHwwAnSZg2DhRWrvTFT3ckb1Lqn6bnKH54JxE8c9p6s",
  "key12": "5wZiVkgun2HUhKVbf3rVytPVxdJ3o59HBpkP3Xo6n65dfhQcirdNveXR3dELmpb4MsGnAVo48sr7f517XbAQkNv2",
  "key13": "2HvczqnUFNMNG6bHrBrPwJC98978rroo3WXMtWporucBvTiFAR3Dwy95TicBWkjcsXW8oxMwymuSpHj5Asd3fwdG",
  "key14": "3RAXVwmyUiGiDCMoSoyEF9ymvaCYLybEST1Vp2PWcFviHjsmEwhg11T1HXCGPPkN8vgLxWwttVmnv7aGFQ5bjg8G",
  "key15": "5NpTb6uqJPSRiiK4QDRc3c3i8RdXhnLWhk6nWibqZR2udeoe2Jq1AXtmgqBBGhnXNxDpYPz9tPuZC8soDL5jp4wp",
  "key16": "5E32hvijDhi7pY3HdNg3p9HpjZUWzvJdwYPQa4W1iYpuVB9ugjPtwsZZqwbGt1y339CBk85Yc3VDMq1SCKhTkMBZ",
  "key17": "2y8rSDDWvVHjG54bkvmKVyRm6TQybePXX9uFEtMPc7PjDNHCTEHY2yKWpA7g9C2EYrR2kkQK384pRqz27F9RYsXJ",
  "key18": "4mFuLFedge3b1g5FF7ZFP6MrFkF5tj7xNWuocKH5dbRXQb8XGLrokGE9ycaMky3WYj98FXocAmznzEvgxcdRFrau",
  "key19": "3Uvi4X7FV3sveKMhGXmyrYB8jSJvFi42E2Hs5E7SC1UZDJBTQM2P5WQdhBHFJodP8RwFvf7SjN52cv28GcMq5DHg",
  "key20": "3aDw2iiU7DGoi15HEzMCqjZxxK32DfdUkAFXLNLwJqdQtcsxZMaKTe72pepERmMfw91XEC5sKiA59F7BEAUYcMLo",
  "key21": "3LoCKk37yTdzv2wtsNSku9WBbbxUYTSMFANwATM3JX4NgbsE3WnXpFuvNRZzNGMQ5RLJ3phfvJmLKXjjZPMhxwDo",
  "key22": "2gBiM7u6ciBPiBEZ4xbsh5kEGMCXisHSBedVyJ2uHPd1hEw2XJT5RxVQQk5bYY4qNMYZJjDf5gC9jQSg8wJBX46o",
  "key23": "3y7KTfsQLeq4fAA6wAA5cZxPjySTVqAJpcdwL2MbkaKrtUdBX614XpvvBH7rXpQQSTKHTKu9QvMg3pNLWTDeaJbP",
  "key24": "5bcGDZwYuvexJkAPXaa3QZX1m5EpaGSzXMY3mVFvivYZ3vd1cYmeqhoXEmZCmGkaDBxDnuQtUffmFGUR5gPBDdVA",
  "key25": "2dmZ6xykd2jEfq14dWE4e4s1FWSkVTqTP4tfTENNgg4svYExMBYLPAuP1PJRqq7JotJHqHsKpqDRm6f6gJT44GHs",
  "key26": "4jjKzN41Mzbbine7nTaXbFpFPxDgdjwoUKs86DaYy3ioD2tGXW6NjLXtWCPgeszJypbTALHfitW3VgsPKN5HeWA3",
  "key27": "3gfW32kmqmECyNotbCbenYDX643kr2CSdZ15MzLKto2TsiZkJADudCnQcB8UtE2pK8SLYSxKbZP2tfngyoVuwMqj",
  "key28": "4y7f3R4tNZNgEYVs7JcnEYtXAqqRZsxsdUr4sDby77N37kQbiY6rrPQ2qoere5HNAcBZvLifD7DKPoXRiyyRcWjY",
  "key29": "3Jx9GPheho6VFRPxV8hLixGHuVNf2rDkrCEng7dAyLjC9Q2HS4qShcxdy54SPMJ6LzQ4QXQbC66N1Bkkxfz4cYzj",
  "key30": "9TebGw3KhQoTuCPQCvrcVWzwAzmU7qiaPFUFi6EVoyPUQUkVsKtcck2SLpZac6iz3HhcqC6bWzhE2YWPENdcQLb",
  "key31": "4caT161ySrPpkKPUkxtr4YkHx4wJSGpuy3XXWa2trjH8fXd7RnQhZipwuPRWHq11Y8P5B22SKr7tMfPdkjujGskf"
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
