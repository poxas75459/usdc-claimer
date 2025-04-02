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
    "4abnjCaNfCCdh4rKAfppBQ2dw6txkzW8goGQATzJnTmv7dvt73QfN2gkKuyXEVAUNum4z29G3sLEcYyqNhGmXAMp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2arfzihWshXcoFZWpauUEo9LYAL8bcRqJZtjfBPWobaLiohF9LV5G4AnetwN4mhtFmnvo6AANBYmxdS5gpJYAGSh",
  "key1": "4erKwydyejf4YoBhS5xyckVnJdSg1qZadK4cLMoM8jiBEfR8927mbYQgkRnGc7RQ2SYxkbKp911EBi7vVf7Nh5bZ",
  "key2": "kke45gsEYY35qy1N3TikLK495E4aqPFzSFcAUsC9QuaMkaHm3caT5imkwX8RBKvjn6m9mKNgy6KkFD3Rg5Z54Lk",
  "key3": "3zdqFwdsX8e2APvHdr5bhw4nDHaPTuqZgCGW69ouuo72uJWTy962qgQ23oR4zq2hfzRN6FLYzC1JuaVQzQ6Szi6g",
  "key4": "3jgp2JmrN5JLWCkX4zhaTfZX759PgFHZroEG2s629r7Tnc696uotsQX9ukcW3ibunYGGJc1tSoB3psd1ThBcwBpa",
  "key5": "2F5gRxP7nhRQZyrC5NEMjXaLAWmJVB1T5HDsYsWibErVy4EdyDPhY6UAqpNmbmaDYkPTeLNcywDHkE6TtLtMLphz",
  "key6": "3VLj2AT3rTHL4ma74ucrRN7rad52fDYnDTf6xapZXWe1huE6ycenN8CucCk2beNTB7rgZE1jXtUwusYiUPkeYzW2",
  "key7": "2X3yPhmYxQUmADVzRTvmeLHptvDDcMa4VNGchespYPVwGhoW8Sc3ynK1raiZnM1ssoYrjGYJWZg1k9Xu8YccyCbY",
  "key8": "5B7dY9xQx58WzKnCG4XWgk9rum8qRe44gHR3VKKvuaMm2LCB6eSMu1RwQnwNWAwwcSPsf5vXEtfrEfhhFxGF9PBh",
  "key9": "3VyoSva78NYp13bZsYpyWWD9rXM4HoZBuN2x4T1ehbufky6VTHt7aTtnAETyW8LtZRp5Fx42EYREcSF8wkXDJxvT",
  "key10": "4gx4wXCm9MiFrUGG7DVSDTEtoJ6VnkytuqRev6ArsU2Cpsq7j3KLG7HEUzRZiqYdTsskVLqXmqYCTosSTPyQFjG8",
  "key11": "2Uz71Agq9tFxDNe78sc3n2bWSRenWyuJPgFRqNFcc2fYQztj1iEEDdAKYmr5N8sKuUPafX4ZReR9eooBVujDZrz1",
  "key12": "2pp2Ki6ZEyfFSMusKAoNJWxfmvyD1vt7Ddb2oKV8EkjkUxHFTgN6CuxozGTEuvVV9pg6wupMVRC8VkvfF3dHiJnX",
  "key13": "YsfoJWTnYp8nmUyz8tig6xmtTWbXp1LgfzNFmuTNk2oU42fxKeTA2tnXJ7bxR5F1ZjfUfKHCpHh9b3EuAfGwbfX",
  "key14": "4JXWaPLitsmc8UWeUgkZ4DSgZyvV7tfzeiTB4EroyNai8mzWBNDvfTQtfihMVr1pfzNF1WdbbAoo65dAtygE4Nn6",
  "key15": "63pDKeYPdzcmAfa8aApGx7mRb3mg4Ehwok9DLt5DJSAzYABhzW5UenhqQABqzwWHoeZzGzrKbKWXgYRuv6RTsZde",
  "key16": "vxW6FE5BHsGpXi18558dTjvcHTn2CzWkxCYTyWCKFa8mNWtkNYxdd5bLCHBMjKE2UjYVmcc6huXFMzb6f5Sdm4E",
  "key17": "2v7tv8pJnwu6J239Qpox5iL1crjBf3WvM3QS2eV8AREAaNkKjJ2cG2EGVotN14JgbV7xECfiUaRwNpywwi3i85VV",
  "key18": "4gHaiG6eZQkLJSCikgr6EiyTejssyeAhBfUh2FTjNruhjaba3456PqiuLyBA6kDZs1XFuqX6QsxUCuA29bmY2END",
  "key19": "qMc6AQ7QJ44hNCrh9poF6kJtmDJcELsnjPBoacoFjERcn2m7CKwYmcb9ZfXdtcrD6Y4oPDxQxWfdBNH9CE7T6kB",
  "key20": "5Xtwt5BGu3dGu6KHU8ng5ca997wxv6qoeu9E9444nU4Ak25zuFXbNzhgKBHAfcDSKV6BrXcsxHyJmSFLAhbwNMDV",
  "key21": "2Tsk1zdH3Q6sw2mGZ1SNmhx2CBx85gQQkw8EQ5N4y9KrPuNdYt6ovKzVJ1qyw1i5hUbRXQJvLSMq3ooZkrYsp7YB",
  "key22": "uUHj8RDbxcTtdRjTHKYNXzDwoPgtVYNHP958mRVgH4CthFDnVs8Z9o6PsPptFkDG6c2JAn8bSkUeKHZ28wRaW6u",
  "key23": "5YvvQsVUVv1hVJnUUHMqW6buA3ahpqAGx8YbfE6pgVsYxg7hAK9Vmunf8YWo3pAJdGvDs2VduAppSDuDzLBHWfV3",
  "key24": "2wHpwVMZPs7XGK7PR3xYzEQcKnuKZLqWkBFqFXd88XvW1b4gSMEUQicEZnQXeZb13GKSQDMvcvJubGXcoDW49cki",
  "key25": "wTKrkjyYL9SbVQ3xybvuPAn5NGazbbsLbDujP1qDTrxtNGgZdkaSGNNEpiLcDn9Ge34bgjCSa4uoWY1kyYWCV4Y",
  "key26": "ME8Q8GGQV4FRjMjLeDCTFpcrRFcFVwqBqZYRKNDe8ne7Qd3DMTLoEna5ugyDSxJ2GUJRnFJ9NtGBXcdp1prG8un",
  "key27": "4mUXufzJGCBePotW4LMw7EM7cuJParzkSHL72DiD5nPuKKb9sRcaXEcgVV8DDc4xAruScSb469WhDoZH5HUVYSg",
  "key28": "2ANiVPRQbKm1Teer1wK3Qga9a84uJ8rVBWBz2ZtM5rJY9bYKkePJbXpByEtvCJPoHVWytCoVgEBb2F1QP4qinR33",
  "key29": "RFnK8CWXsTdP4tc9KvcKRHSPqa33YyYVoAvAVgJ65w2ptnLDRJBiQ1eCVGnBb3wb5J2ymU3jYLBncFgibRwLtra",
  "key30": "4i694V6v85vJaAP4od1RZE8ShtmuhzBzEQCp6m71xCamFjvyve8LbcaXcXWoE1H6qyP1zpzTxVgWJAZbZCmzPm3d",
  "key31": "5QHfS1mphs1GEkZxMoB5QVLFE5eZoLKBsEZgz8UZXMYw79bTX7HGYa7pCpv1rBXgdtFS6SKrTn2q9tor8oAENU6B",
  "key32": "4mCok4vRRpxHVcgJGATjmjevZ5WUxfKec2fnwPz1MuwBAzyNtozasUQhmeDrdDwXMgLRTAbKNrWj9Y7LWAxFoeLt",
  "key33": "4A6hrtKAAKX9hqXke1JJF5qpmKmBGLdzhhrVvdfiLjjfZ53dx14pB7H5Rg64jKgpLhv2dBXAiFiUVvX1bZYxHJPg",
  "key34": "PnCHTugh7XWLFLbyto3qdf5cv8FpHfH8GpniFqgvUq2kCuRjaFkr3jQmDTts27YqBUqPMkiNFNePEcCNN2o1sws",
  "key35": "5QHPZSndTg4SKs6vkyZuwPYQai5Ljs7GdS8D2vAAHygaFgmeXwAFWw9E4S5QCfVCL17snSA5xxu26cAAQWNuU1eA",
  "key36": "NQy2jNvyR9L7zxH8TurVdTJHcb6qhUrM7THm6kKSDdnvrGystAUYkqY3fAcvC13GnTBDcvjBqWxLU9CsymUawx9",
  "key37": "3QtSLPDKWsx4ajSxqkyARVyheNgLp11cEek9DgqCLJrpU8RkJLWVmoumwSFVcXiao7xaSext3sosM97LcriePerV",
  "key38": "2whDaB8q9h6GEtSR6LzG7rKzt37r84bKMvFeJXQJnJ17PNEWUxRXpXLVNfrmVAiKCn2pfmDi8pL9kfBjungwnHWE",
  "key39": "3yu2uxMzjcm4WUW32JncNGB9owwcUGfN1YyE1MxMmrN7nYEbSSHmBVdFhWdubbH1kW8XRT1B9Hj1QespJ7dfzHSL"
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
