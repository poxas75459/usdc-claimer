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
    "3WpFHtLmqb1VVk8aK1muV1UeeZozYrLPvzKVWPs1H7B2TqeMhzQ7VAEfA2PEu9chcsMnV2665X7hpEHtDNEbbsX2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gbRtCP4FRv7LZLCNVJDh2PD1dRVZWLjDQxiAvhq7aJPMBVDqTJ2cjNR4ye3cPZchUjRawXzAARWsfaBRn7ELk5m",
  "key1": "3GFSei3xzZ6EEF1jsV6UKqfgzxQHXZgUjDb1ubWHame3yNBYZRY2qidsLFLpXm5Zcj9bB5rbXZnwrm7wWrxpJWSC",
  "key2": "62M1ZgjqEg8pWAY1WHtWSp5kZdBtoA5ibsTxXWPhVAd8FPXF8ZfTDk3ViZdhUVLfvrSQXQ3WGeWg3dmvnaCzzDp8",
  "key3": "4WD6TTVvuFx77AvgDp8Fy1SnK1r3LuMdZ3xNqFQwAFTxVVe1nuJWuR3wBHqCPW4azgJciYuTK7XuVNLbbiSbX6TF",
  "key4": "ESMQREg4A4wde5afAEVYGSFcLoC3MFssXJXTBqZNe2kJc1xBUufJT5kbB84KkYCHLrJPUHD5e59ivrQR4Gd52aL",
  "key5": "41NFsExfHfsDYXZMuGruJ8zuN44zEAXT6zd9V7VDpqBCSQ7x1e8PP3HeKEpNpgBLNXWinhBfDCMY2xTCkVKar3j3",
  "key6": "43Q1P8yYFkT6dJQ2FVJjzPGoBP4w4K8uRJY1KNrwzuYvTjjUep1DEKerH152e33gmhBoCWdaioVYjotd4kVTXnQv",
  "key7": "419facArSaD751kj1smU3pfGKbbzch51gjjCRjL2J3LzNeSc34s81xqA119jU7iRtJTvAwNpR9dnLQBnyUViesS7",
  "key8": "2jYVukaywgfFBamjPLFkWLk69LXZeK7H6WoTw2GEVSnQAWjSdSo2inL1KUs5RbNZCs4B2t8Wvrnnc56hkL28D7gt",
  "key9": "5JUgBzbTuxXoHMw6GkkCb8FJMYx9hcreXdJ6aDeoW4Yr97A16k1Ki34QdupNbSQ9sWFhjyqv1VZ2pBDKgk8jPbfM",
  "key10": "5gaqyDMfvNrpCCafWEmdPxEqWe2nV7QFmjZk6PdG93UUvtgBftZz749b58zYLjxGPrc6yLmthcJ4ipqA4ooCTTjh",
  "key11": "4894fX36QaM1FJwTmHxVG5tUSUoAh8tb2wAi4Wd647PXjtmJWvck9o6ErurxCmSiohAzjpyr8MKPnTubKxgqw4bR",
  "key12": "5K6D8aqYkKYWbRBVwWJ3qzUXdxtKx8H7drqv1HTsCyXMJBk7W6uBSb3F7NHWWmP7fLrLh8bp9LUw9kzfkDisoSpn",
  "key13": "4Hnr5n4fK2MzCaSf1wccqMVL1Q87PHYBWAyPVJLbMeMBEtmzdPSD3T55ge74a1hSGNwwTawyYcCENJimGbLUjYw9",
  "key14": "3WwWAQNPiBBS3XGAUA7a8ZbKcJG1b7Bn66sgqRXPDqkQmJWKdMMo7AWM7ZYqWLLwpdFRLGtARTCK8oauET5VzxhQ",
  "key15": "5oRhURTjhNC4Sbne67LbFEN7r4uCUGyk3C1qbRmenChKvjLZdma1KHfaHBnThiqPwd4cVL8PC5QDyVZhf2wqFoDP",
  "key16": "4HdFuR6FtiTxNADo2qRRz6bFCDG51RvfvN2fUwEk8dSkFuvEqTdPU9NwJHAaUMj2k6gRegohtAy58V672d2SQBo5",
  "key17": "4S26cCjJeBzd9pAn9P7WFJH3zgF7x8ExKDkPFdo3UdgszseH3DvuAWD4LeGNhkPkXu5SV1RESGEEQzkEbNJF86Ei",
  "key18": "32LpzC2DUubTZTtsPVHY1c1qftG7wnimrcxwJJKdL8QzpqaY9nyk6Tx6Wi14Qp1oztKfyc8jCKSnHL9dKZLygiq8",
  "key19": "432jhkaHWjoX6gJmQT53dFXZjKgYFA158KAAQMocB1MrMBAVYTH2oP2UYowbeaETaZuTCRgG92sJjiLFw34JLihQ",
  "key20": "2J1PoDtZe11WFshFyrkLDdcymnWk5Pb98CXp7WDxtQpNBC5k8Xce4dz9ub7WKmeS7Td6CHRNGaGapfY99Qsdghuy",
  "key21": "3cZmk8QGbgstvwRMBjmzW85buWeRDdUjw6dprhy1rSvfz6BhYvNsK32YuRgfwn7LKghFKvo6Vs8qaZzX7Qu9n6ht",
  "key22": "4XJitggKWE8dkToPttcXbVa4c1XB4uyVCBdw4c9HKktfSXsAN7VUafoXVajDYG3tasBXGDJSodJxZRaKbZckHGbN",
  "key23": "5GY1iydz7N7eDf8YyMzrPZidhQaJSZ6BvKLPppEsbNvhqiaNJLgEtE5DLpBcuGmogLCDUHuBkS3gSC6ygvSse5RR",
  "key24": "4hqpJXevWDp8YVNDkkU1L95zze5GC4zbcJqCk77KdBTFVh4CtSmEnqESP1B8zBh6xd8wb9jQAxoZGMabL3jqqGcP",
  "key25": "2sUEoV6yNg3bmLzbHXqRj2UNitzfwbgA1h9AYLehrve7HHPYMsGUY9BRHjYxy93GG5e7DbiTKBbMKXtovVDEq2Ss",
  "key26": "3NVqCovqzFfq71KEmv7LuBvXDr6JewgKvUzcrmFzYYT9GEW6edjBwv8PnpPmx9ZPK8AU24rY7JkTb6dyvyHJLCr6",
  "key27": "4XpRXEfGvwLPQ1EMo85RpWjNPa74hnJaM3pmYAEPY2ArYJsuGyCE4RFUqgY9znFqUevHnih1AbzqXwMQDwaVZWAR",
  "key28": "2CAZEBKB8FvZfDFPsnqdSiGo1G6CaKnNVQvWcYtZ2uZqno1aUJSFJcTDs8PojWXtpZpqCXckL7kyeqsxYV6vYCPJ",
  "key29": "5wrQUgote2RpBmCZL6JfQJ8UdAxqPZRKkK2pR2Z68RvJuYkH1D5dqho8WHFYEpJR99jzoxAduWwwfruckeZvZzsz",
  "key30": "527nhHNhWAGussR1PuRvGJeLCeEoquQs9wzzXvrhgxKukxv5iJ2texJ6DL5wGN17UL9AxymZpmBsUFR6SSbDyDNS",
  "key31": "5RenitygUBbLYd7LpFjE14tNVF8XoBD72KNjQQgez6Brx6d8jaP5vDZqs5fbg6S8UKLVmDAEpn2iHuptfFh7Vw8T"
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
