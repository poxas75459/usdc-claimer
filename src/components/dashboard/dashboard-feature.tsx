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
    "KdBfAi1UAy3pH1HMvsHqzArN9rMG8JH8Tkm45BYJXcEw9BxcaZEEDcwkKHXvdwmka7nPqZXjPBEKbkfjRNPrmjm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aDvWYNGEwSpUKiWj9ut9VFL95B3pzDQfHuBjH1wipEAsYDekwVmwEYqTpeUep1MjKoab6HdwLuxWG6pj3QBJf2G",
  "key1": "5WX495HGfAYujp2orfvDjKmdWyKpWjxPuhxPh3XGjdenMVGzSZJ72RL9LndtA1kC5x6uXHptASdZHyZnyRnJq3sJ",
  "key2": "52VbxJqnkBqj5v6Y3mQw3xHmtUiV2wjdnX6LQQ9LBSFcwaBA8KdRgwaAVZJxqKYnvQzknUCXGpojQvgacA2wfkf6",
  "key3": "A2S9ww6JbkoAMALRVVraqcr9MK85DqPcZTPfSu2EywtXzXWppg4ua6u8Cb3RTQjjusASoVWZqLMDkz4SFNhmFuo",
  "key4": "4qjmMAGvXEki3NzVZf159U2EMh8As3bkXwEuiXWGR4UJzTQFYwsBk44F1RdKFjg8UvepxfnurxxjqkhGtCcfMr8R",
  "key5": "5zPEKAmGziHwUk7xf2cGkQvEvuSqaLabvpw4K9owsfm6LsmAGNMWEht7CpWZfQNtbsfNNUe2PKGGG2U5bRe5SmzG",
  "key6": "LtTEij99DTpgckfZfWcjzCrgNZ4YcpoAcKizYJ7ioZsd7iHFMKaSW6nd8YmfAv9ZEnrfCeP7SnEPvuyrvoprzsq",
  "key7": "owoaoJT8abreuZqEdPJUcjLyk3afGNFfsH5ixLYAWzHcmvKtv2by95U2DVJAWnBHGpi4PUuZ7Exa3EFNoiNUAqF",
  "key8": "3VdDmzyuu9X9YCqsoiG38rH2CXDNwS9vuu5wsk9JRg8aN8x9ZZcAHSMuJrWkqzaYkNQstddo63DCqw4qJgwZSRJ5",
  "key9": "5AVpaF4YGomu9wJsRBkGvjoMcy4b9bdcqrvtfFmpQXQTrxE4CJXTsesZpzb7cPVrpGEVXqZVjyRRi6K6CHaHjNnw",
  "key10": "4SCnDYgJB8yE1xCMW2miTLSgSvip5wApWNBSST3JLobMXnBJHhTsPXKUWNPriCFvtNymRDN8ZwwqbkxtLyXbShdC",
  "key11": "5AtqRgCz9Koo56rvF1CKaWPFaSnoNZBdSWgDrbBhqT9V1tnK5SJ5kixBXbfTtGt92ugTbFhenesWTU2uJ3GCrzVy",
  "key12": "4YncTes3spL9kxU8v8vv5aXk8oPALBwWtUpujP3MasWbwytqRw54eaVomXp4Yb5CHWwtrs59po2gCS2HB2Totaxs",
  "key13": "3AZrFE6457CvwLPNj7btgxawQEHqQMLLEEf6J6nCQQaQL7L9GKrH7ERDXA3RLiDD8EjgKxVB7HRLDFvEqqCR1AtC",
  "key14": "3fNdoibf6UGzdak72nCaDFtjuqiqDu2xzZHBK4gfApidhdg6H4rrGRvfQD4URv2BYQXxrfMUPU5FdMjKcLxnbWb8",
  "key15": "3p63tVE9VBuVZg2LY9XceTb5UrBcug5NBXy9DpCFeRZV8Mrp39XPzEEEapTrKWYQdTT5VLGfdXNHVjM3JTfTQxYj",
  "key16": "23YA787WNJu3zWH3qCU2zKESojEJKfPQoyYApSbRwuifXNyTeEe2zovLgu6gxd8mLZvALztXKNS4dR9LD33sf7np",
  "key17": "3iEGYgzYEd3vAx6xeuqvfRAE7t5hsQxTETc8BHyq8DaLTtYCdidFgSHnY9auuEZN1dAGzXDAJiPmE2qXcQy9oTTe",
  "key18": "2WL8UKX9QFwoksbaJtbV82NXvwVZh2NTpEKnBceHoXcwyZixZYu7gLTTsF6AFhixNaS2o47uwogUP6WTYuBen2Pi",
  "key19": "52UCvT4cvqT6DHw3V3LohV4obiiQo7w7WPR7RqPz1tNriJSfH3LDoZ8hutS98vwVWot7gHeECPcMLARFkmdub96T",
  "key20": "6qFqeQHUmxLJtAL3Q2ecjvMRjK2HVPD14pZTniK7pjoXJ5m8Zbg5ej4aTFy3kkuUd47WaszKvFxHTuMqrKsa8R7",
  "key21": "fdwofv9TLz6kfKFxH3Mp1Mof6ghNzoAxw9EH3v4Taf6ZtySaoCNsRRbg8oMFuF57qLmWBUnhY5pqN7uz2XQxQ8R",
  "key22": "3pGojqF68rrpB7dsXsjkZaramDzjsRTcyC465ZeHUAiCwPFg6Rd1rKKCqgD1GPrvaRdCrGCWXETamKb4TvPWzpwf",
  "key23": "21jndYYbDVXsEbBJkzxChHXiomAUVDtVRHheJWnGzP81DLezdgNiqd4aqrMm8svFGf8VL1Aj26zDyRQqA9xwvcri",
  "key24": "j7rvDs14u46paedbeBfGDDd9vKdNY3h4U3J8BfqYvEGnemCMEcjy8Zf3BmVYWypwzuiPbHRggMmXgwUjubLw4XN",
  "key25": "3wck2iNp6SvQs3L3zqpz1BxicSNyauK3J9f284gCH5eL5dNphejJaFtciXNDgGhubTJqzTMCgA44aETGqi6Q2Y6c",
  "key26": "2yem32yY23qLSPoCfZm6fNuqr272bLyADGuWkK43Hvahm1Ht8wPRmd2VJp8UFWzeiV1Hzg6AE71DzEM1817MGSjv",
  "key27": "2hF8TBKD9Qi6krqhPS7rqb4VzLFXJSwH3TF5EMXcqWB3sFiHMH5dkcLAETuzPUKBNACtYWDmQo8DAgu9S3Sf5S7Y",
  "key28": "5G7ubWdQdy5AmUqa4yGWJuatu8f3uPUetJBy2ygYim8iEYnpDLN5c2GM6rCjruWvyCYcKzL7dd3jQ9Kyr1qTHANm",
  "key29": "viXhsbBNCFTa1i53WAgqUY4H556FSQKsE93vG5UizkLxJ5y8sHNirtHvPzNbhqhoNWXi4YUn2HWxTsu8WRvAfTs",
  "key30": "gGQ9d9ZVndagcWEk8LtLqenrzUVn4J1gdJ8R6hTMqEGkVnA5qcCiAsJR1ijjiAfjuFW49xAkrPWGS8nz1H1DzPk",
  "key31": "UmjPPE9K7rF5LidMd4XFB2ewG1S2T123fCUkQ2nBtpid3g47Xi93BBNKBkGkjCZnXXc5sKdyMRHqHYezvFqFJCm"
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
