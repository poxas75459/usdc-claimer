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
    "3VJPEUvQQL8jidfoETpu6JZhkyrSve8Kwg41RC1mbwVAdVjRZ2TocfJy7WjPuave6myKjass77dsosD5RaVfPzeS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29TbDAsAmfDGUiSeYjd8c9bwtqksh9zEdmJsm9VPcG3URbaugXjBCKQ4mJY3X7cuygKTsNcWpUbnYdNiLVLCkTk8",
  "key1": "5jssw67Y6egfMMCaWTJRscyLQmXAZc8oBi8NSBiCCPWgiMiyWFsJsi582H6W4VdSoVJNWBP7JJaKfcMMRc9H2bka",
  "key2": "u6eWuNwwLe1BKp5T5iK1wLsBt11bDaD27hxPAN5xeBQttFqLjCHVVa5C7Kff15HTdRkknkoGLWRwAdCTTUpGZct",
  "key3": "3P16dJQhvKWryyahQtP228pj1WMuDWPJeXqFNPD83RUnSZGq88aR2Ww5KpcL6FJ4Na1VCecDoeUKSzYzrh7m95mg",
  "key4": "3nQMR3GZNpu21RnSKHnfx4RBwDNz3NuXKnNyPDa8Gx8d12anDn8gkX8PeTan6h7KWw5mAHxihrh5KcfoLh64qFHc",
  "key5": "Yz44Zi14safvLpGdzJzWV2bTUciamiThrMQuUx5dLp2VYh4MxDtTd4ueVZD5kwaoeCn9FeVeSuwyiRL7ymhjKcC",
  "key6": "2gAnfgefyyMwkVFexA9jW1wZxMkXdhT31ReRAygfr8SBqTKT2ARo6WmkKsjGwTGAeGkrx8M45LgoyHN9Rst6n5kL",
  "key7": "Ab5ma9RvgrHNR7QEMMeED1SQgV7k5q7VQro1BKKdMFHPqRYSJ536Lb72RAPjKUW7qJRpMGuH39WUQRoteBYXeSV",
  "key8": "4xdWnn8LijbEhyXgDypspVkNu1ccCsPJqNhhWMEo1jwY6NB5BRGQHH8dZSiVtBM6Vqn4GND9xMXMoguqLMVndt4M",
  "key9": "5FFDQEgp1kXKUog1DAad3xcKMRkUFd78sspy4ZuwLLWQ5zYXCDmr5L4NrcjAemyDwtq4XmahYvrcDvrDUmZq7Dq3",
  "key10": "3UGBG1f2Kn1fraTmRvuAPx6titni9kQnXKtxw3YZRH8p3ZzBY6jA2Ht3F4xvtcbLY1A6Mk8thD9RWb1VnBFjP2Ta",
  "key11": "3WdAjjqPhyj9iS49bStkVkod4CX1j3hqPpL7K5G5BXbQtZtpUTP9v7dZRpR2MtkMcKgkZqv4hCxXMRi6CgtYCpnf",
  "key12": "2TThaSRNCLV1299bWxmGKQkPTGP2wZRjrBVWAdxXvqdSc7rvdQxoLQjJcUqbm2Xj7q4ZnqaEA5NmrwE91RRhFZwS",
  "key13": "2xcYtejWfoW5oVjqmyEzcV2QHE2tbnHueRBjqAQ8soazjPmnMjBZYi53ZNwmVoU6UkchxEsbvHCSoSNuP4kjfkCy",
  "key14": "9DKJcB45RwEQ3Cohm1GWWEMLoMGwKJksWzR8uPEDUom6qYZGr9JLgn8FeMuEDrYTTzB2PKAaSzHSww51btQPchA",
  "key15": "AJghVaQXVKArewnte4cNjmP51KXvC5Q4vyBRVcpgcuEztGfmc4a4M2ccrXL7sCQEPiZ4oDuf3r6gLPQAMEGjhMg",
  "key16": "TR8t6FGMKdwyTbsmj5ef2zMXTVp1uFsMquCP8EZ19E7JG1dQips8hD6bdTr7PXgyHSRu29NQkLfJ9nHJXwtuc62",
  "key17": "66gtFuNWQ5wQQvqsvEfEZRchRosErhKMy1TyMMydMScUrbhUK8m1tHSDkWDE8PaLL6gqRErH3sVmRLHVGWNJdkNe",
  "key18": "5szN6RxHUdT1dr2fbwsNxCipV42bLzmxoJD8jdUv3sjtkRqj6nBpeALdtSbUjXDzonuHJUARvykjxJKkhkAyrdeB",
  "key19": "mjLAfK5hKDh4nEJDNPQCvAEVqLwVM5PxCDJQHzvZJf8BR7oJgkf7TCQkD6uUDV6opK19m3kB9SPTsKVcbYJXrau",
  "key20": "4bUCvonLEqjgX6969bBHkQEZvWmB3DkRjQyhb2ByXxwy4asij3q14Y4szVpcVrR1LKp561XjdNP8wTjTZMfmGtW8",
  "key21": "4HProbVqDWaGxtpmEEctaFzcWNXPRak1vZa5vXskGHt4H5fjpfQ6e5kRUhpRKgyckxWAyr7YxTee2g8AdALxBzcR",
  "key22": "mpcPTHNa9wwugW1YcaRAzfEJTM4vXPNdpfbFvS1ZCCucSSkAus35YKqJT4wyEj75Jaf4qXQiHUraarvXBjrqyjx",
  "key23": "2uEa8TMheFnRto8AXtu8VYshT8Z34jzRjXooGubXGCZr4mEteqWP893LpjgBdvYgxaBCPCib3CfQJkMVLA7aYF3J",
  "key24": "212682K4A3CDVGQVQLAkPXVdfhZCoCgGLAWXhN5XYvNXaN2v6gMc235UMDZHhJXqddAAKhxV1miLd7ftMBKKEqb3",
  "key25": "62gZU1yrwjiyzPBHAoEe1EndvmyYNXkR75x7azcj7D7yGJ2aBJTDjqt5ZrD7R91CNs37kGwP7cU8HRBLxChPMCCb",
  "key26": "5qcGUHMBHx1che6bVNc8rekaGXVyrK8nUvxttw8YyAsrtPee3wYWtYhDATX7bCYTRHcdk132EkihmtaLaLcB9W7E",
  "key27": "3NbwEXmdEaGh82ectnZNtvzEijFiYy6a25MGAefjYVNWKW4uVTuwYej8JJVNsdvq6QeRn9GEqaq1LWX3jEGN5sPN",
  "key28": "37P1W2hPAFfbrv9DXzL4BSxYsD2o3FgPWunMWkdtVLynksVzV5rj5u4FxCytyuCUUZQta6KCqRRZKF6KCw4T8JJe",
  "key29": "37WVEMeoCFCMGEYDZas17HfcBxQLg7F3QirFUN2vuwij7tU6zf7nsekv2mKxiZkk6UBNTEjoU5SNYCiqEM1R8AsM",
  "key30": "2eVbr63owKgFVQ8qtFvU636BkdJ2HJv1ENzN6M4c7vgxAqmJhEP328Zzi64ACxXKnmSb4vHzZnCk1szpv4UenjpW",
  "key31": "55JXNBFR6XCuWxVxKE6p31G5PespbsKq4iFyzcfSEeFuJ4o6GTh4vhnMfNWC7zvPXRVB79necbd1Wh1pCHnojdAc",
  "key32": "ZcfPHbimWxkAMQGW78owoSzCrm9vzCsXGAnUC8J7j97gbbvcs7e8UxBW1vohFPqVLjEwUzpbZo1mtmidHTNTe4c",
  "key33": "3gqu9HsGnsG578E3U6SgHjqrn6Hr3XkoZP4P8k4zX46gfA6VfWA6imkkY43e24fT9Gbi46W3XrXgRJLxQeYAD6WP",
  "key34": "5SwEXGgM8T85vGvaoG5eitTSGbfgkacKymHgbwgsZ6Vc2ZyLnfUo3QT1d55qG44XR8ncJQtLcus8tLFaBoasG26B"
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
