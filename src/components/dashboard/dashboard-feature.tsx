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
    "3nUfvqpzhbxH5VPRkSjHAJuN52q5ACx7wMAgWcEyx6nehAPatWZEsQLnKqYWQ7jcv6ha7vr81uWSK2NvDcGSLbHC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J2xs2Xsfs1K4TjhoxJjeGtDNAGPjNDWcb41NzJ6io6M1HgqnNZK5Qbm9pyePyq4bfnfHbse8sWft91QVhELmLmn",
  "key1": "i29TamGRL79S6LgYmSmjR5oRCU48QRASoLYSqcdk3jKpEDmwizueEwX7hWvLZrf8KU9DNzc4RRHjySspwLFJpM4",
  "key2": "3JcwweEKo2ZkpFeTVzuVe5h3JPDfNAms3cmpNyP1oyoZV1PQf5H2cSbbWxgcKX9YqrFFvk3nnAeMBsDBMqWKCkwn",
  "key3": "UQtetW1yizYHizr4G8tRhnqy6adpjV5u2yebGHAnk9NELiakQKXTDd7oEvYtGzfGXqX1Rv6pTLVDTscG5rxyoso",
  "key4": "555N1SMooFfKrrgxNQjUQ4TYUpPpEP4MRLK375Lr49nCqUXBSEqCGy2YhgRb5Tk5yZFnDJKRQ2g3GAka9gLjbEA4",
  "key5": "5QMhRynPVt3YBraWfsA5icc5Mi6Jco4TpGYzrTRb884AL1dt7RqTJrYRAmN5Py7kmuc7jnVg73nbVLAsTdbtN86g",
  "key6": "4uPXAGgJodmPhVvVQPEpYhS9sr5Gk5tNiJqwkBTKDgQhBmJL48kcuVKWh44yZAL8rp6oTE8b4fEhwevf9EV7tGNw",
  "key7": "aexGP9HYUnt7g5wYwk6PpGNQitwjcdgogB6nbEBHfgFbPvc4HqHr6jW4VHDKqpPHABhoTwPZKGYgKaPpRzKTV3P",
  "key8": "5FyNjvC4A3FGXtMGoYoJ6at2jcPBA47ugY42RKNMifUQNqxSWX79cwzPUd46awyB78cMKakGk9v56RBudRDhf6t6",
  "key9": "2MhGtBfgn2XRjAQXhQop9reRrUk171EijyxFLbnksr6vmeLZe8B9YooknxoLwg5hXmbUXCgd5s3HnqnSxAu9BDVW",
  "key10": "5RyPigLYZXBJ9BV2raYYqDJAGdEntsY1ktLe5f6rxPkvpMpDSr24uzPDgVahh5zBK8JfpEkBXHYEPtaEj4kzVZYE",
  "key11": "4MHmDu6DRFPUV2Xe8XxggWRTp5JWJwecsqg5U3vLg6PvFDWsuxohs5Fg1VoyvPACzjeoXZ71WepjvncVXqBx2fS3",
  "key12": "3ZAqtJM13RBWodCgtg2GmzsrQ57s9vptt5CH4JprVB5Hq8YKgX5SV2kZZVQzEQ3RqR5zdng1kboPqf9WiiAZ8ptk",
  "key13": "4uVuTb3Y2n5B3aLUsd8An35jMaGgTCt18pT5C1nhdHKexXvYKTAqVAVjtpfAuADYuntDS1jNSsZmPuk1V6RucgA",
  "key14": "38b6bjWzRRwkCKm2kPzer2uM43y9L6ccPC8MXzhUW8zKwXmyA4aBQyjTFJUcUqpTWzUnozWsntoDkXCJKQMSt7vq",
  "key15": "2mxNoqHQhyzZbeYczxvBgNsMKbdPFWitMk8KAtxStHFR4fzgBErVFSSZm4Q1ZSnrszwQmbW8uZ4Ze1R44eZ1ZJ2V",
  "key16": "3gWm6PwuC72napxxiDg3gsSeUvoVJ6X5v37gHJuknVhAz7KzpgWbEg9oYjarrYsitLgBkSizZGQS9oqmmR3dbznz",
  "key17": "5NbLcvRGHAd3kf1eyh6y8hozWuav39nL9Qh1rnkwj3sYycKEUPm1n1WA4hJbyLunvtj2DiLaAcZeniSEHCPeTuVy",
  "key18": "3Rj4GXy1KE8PTtf1AjTCJxoFwSRjvMj4iFrFgwvbqfiRywKaV6bDD5HPJA4BgzTRB6bdi8CutuTnFGBdFkyHuSMe",
  "key19": "4L28SxLoqhhbbzm8hMPNTDCXMKXufKdoAczLrfdGsoZBHiioZ5aWsqDsbitEuBs1xVWQnJbC99DdUfMjZR62LHxw",
  "key20": "56oNgckNnjpj7ZW5PwHVWLiQpDotn9h6b51zmiwEYSVg7Xtz7gk3Kc3o8kqgAo2ymQiKCdwXDxrcz5ANZSAxmXmA",
  "key21": "3ZV72ZC9NWRd6myHgKnWno2jzkko6uGu1d39Usuy1GHHMzhX9RCoAgfAuR1JKBjSyf6ksVVBRvwbgviUd46PeCFj",
  "key22": "4tKN3KnzeGdcKcf5hBEEpw5g8xMrGFgVDCMfarfwQFhx7qcMVh4GyTNxThbraukH1wbCzGX16rKignBs2yKtS5DA",
  "key23": "2mW14HQJkCnEMmKpZB59DHVVmMXrStF3rdbJopBBXE1SdKjvnLFtKXXnynrTRM3NFtrtkhaUPXyHRFGZwBPXAmdT",
  "key24": "qzqkJNdg3MFR6mfEZCvU1zWv5mVq6834PmQFSpYZpJByJ3BkCVae49HQ5rucz84u4UBMyke6k3xsMYpt3pJH3qz",
  "key25": "4sVuCWnF78jJkFmZ1bzGcxGdkPMAa2cBqVhBd93DEk1QixWRbAecC6HduxZ1Wdq28ce46iA5UgHGmsZyhZAFisZm",
  "key26": "4MPmkcEo3owZRrDdKvLccyoTXz633rpymAbtT3iE9y6v7aKsMJhtSjf6KyHtHoCjv9iUhoYg8mtk4CTaqm6QADqS",
  "key27": "2GgudSUifsqM35Z4D31eGbmPWc5G8a59CyjUM7diJG4TiqprNSWvkuit2wcrrGkLiEWtUBojpZrXTHdRhd5CZ9rn",
  "key28": "uNoWVjaHJmfjeU7dUvCvUpy3GtWFvSG5Cy6GSeFv8qQNrfK5TLJ8UZpJDyvtyhFqbn3VbDwyuSoHXdjPxYUCyuC",
  "key29": "4So9LL6B91XQJVUkVxvVcvBjKi6wUFR53PY64J6KnhWCs1DqKK5biUFuBkGchG7wpukzURPrUYjNfTJYeRe7iGFa",
  "key30": "3weY2xbNk25BsdcZrx54Ackk2x5ZjrdvjYaxsmBxtXDGg5LwueyiFZTRCfhLagRm13zSnT2TftEfFzvWTSAfWCN3",
  "key31": "Pjdwkv6Gu2ptEHtGj7E8bSybyNFssqiZqFP4pNJyjmyk7REAVqwUVWRKiWMJ2tjxgi9r8PUjCzJQ8hopEcPbF4R",
  "key32": "3cHGrFgArDkG7yYaaq2bR9Rf6gT4Qb2R2X7yL4T8bv1N9XbZmLJiMWyPLvT2esce6YUBH7EuiS422GepXic1yZ67",
  "key33": "58NQ5ubWmwfSBjLRSCQ3R1hNeV2BsxUQG9JFAk5XVjy7fmdn1yjnH2YBPtBRK6rNAxyK3wrTyywQjVhhoaktRqtW"
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
