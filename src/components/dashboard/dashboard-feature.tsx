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
    "UwpZkuXeJJ3kt5sqkhkyyvcXDAMQJiD1XwGmvwaVEkKrfHQjjymcNoyWTyd4Lb5PmftQNRH9B73WHcGXodLNLzy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HrfMzMfPRqjsY6hRK9jcCHR9B2mqXpKekr3duG3ksERTM2XLa1WWktc652E8j23puGUyo6XYbaAQ8AwXeVfpg2j",
  "key1": "436PrAyqhPqsDgfTgbG43mYNgGxysvidNupyvHSo4nycxNqtRSHQUFxdtDWjUWZaFAND3PGBLNFbNuUaXMimuQJL",
  "key2": "4wUDvBRD17EvKgyzufRAb5oSXRiVNgqB6NbxBAMd7jhxeRLYa4JF6oYX7bEhZY6MrGSuhnbcR8uj46xD3dKxTaSf",
  "key3": "3PrhQ2pGkZoi7sC5BqTyxMxTR7txJsyNqKskcTow4mwrW4GX8jM4rJhWv59h6dEMDn1K5hn9TYP99pvi1oJLJdND",
  "key4": "3DwdUBYpr1H6VkR73R3PGAhbn21i2YdLwirMNPqYEZNATjdVqEgs3CbYpVS92rSFtZ2wif2KHbiZtUJGZy6Jp7NG",
  "key5": "4GRV2gxUgTRfv9nofmQZV7fdN2DqU2Gu1yu5LeEzVtrqpkDUAJJznVWzHL3CXqM98R213T9kSCzJCxyi2g4uBsGV",
  "key6": "3cNweP7uQj1mHGLZVoyRNhpiHtkHpgt2LXV49EHXKW5cSpN2AGqqxoTwWDU19wSpz8BuEes7urUqNA2gQELwV66g",
  "key7": "2uZXqiYuuopSSK2XLaQq7wD1De5S7U21uRB1EJ79Zi2BJhinEXyXYLpd7JVBenf3pqnY6Kubad4t9mw8gYyTJotx",
  "key8": "4je1tdVwsaXFuALK5HKxsxVvJks2DKWW51vxcfEK6YcZVbqeif5K1Yv2ZDYxeufxHhQmV7wGMZ6CnNBfvd39HRtm",
  "key9": "2Lm3yqP45HZS9RPQEX22kvdNkbEnKMsPBtxdSzoEhoJiZ6PLUmVd1JpGxeVwLk2q2AZ58E5Wh6Ct2tWxgZwYNeVK",
  "key10": "4x67trrWUPDhD7tYcSjK9SaeFTSZBeXDFtJ65ZG92wSMQGCpsDtwht5gMBr6jY5wxqGFywZkC18XgKRn9hYsk7Mc",
  "key11": "67oC4XXWSom7QiCm9wjpvDsrDJ2nbq5Kdvrv12VM7a93KBo5jAS276jeWauGsKPkjZCykR67Wei1JZbSLQwRwdNH",
  "key12": "QCxAqVE3VH3NTgvJL4QSpY2xohhhoTovZW1dvXYUDuhuHbT5HGRNFBiWxvYksp3ru45tYFzaXXAKhvE9HiAWKQK",
  "key13": "xDsMY8K463AWucTEQP1RRQEtRZYTcd2z9XXv9xf4vfBhY67P4w35tkQDz1Ay1EGFGNuZ7NzZYXbUSK5VojTJfJa",
  "key14": "4SfdLee71bFch7uvGxGkt1xyrye2F2TPYmdtDc1vQRJUH87g2jVTAvjBxNCeYxyhoppJeu4HjmFnUj8jU5wXSN8E",
  "key15": "Sa2a8XYQWKbsEaviUxDgvMzc58BEVjS7sDG19xNkeYfvMfLHh5TaJ2d2RxvMhqMjoUYH9XiaVQGgpg6YEsJT4jZ",
  "key16": "2BAUg6YSMPhpsi96DBPWT4gWt19sfgRzGJ7pUqSo9pE4t2zL9zwVqEJBjN1nY9tMC2LYy2MHCeaoC97iUbH9UJfp",
  "key17": "2XqMXrzpK2pVHF6GaYKjJEA4TpjmvnSiohkFq8KBtQn6XXAy7yKBkDspzsbSLJpnhWvHhAEWS3KSn6YkLiKc6mJM",
  "key18": "3G3tXqwV6ph5XiSeCgYet4rPFAtW2jZfrbauR5UedHoGrpeYhC1t9arduXheceAuBKGzDuTh6rTDvtHpaoatvHWn",
  "key19": "2GAR3ApqV7NhDCrWrXC4AwpC1qxHdHjR3Fc8xJPoymeonBayBzfNZpGweHZnoRNucNb4y1nLXcGNFQob1AhQNQ9S",
  "key20": "3aWWUBuqpNy9zuHv72dWi4zZFk1WqhScNCc9tv7nRD7oqAPRafqMAvqFVF6oSDh3ExLjcpgohNzDU4qybPe1HX6A",
  "key21": "3hAX6mtYa8b2gES6gRsK6H6vKVnVmptmMLjZcGxY3N6wijF63shegkHFeDBeoZuhZyih2xehwLLJc2SPs8L7UKgt",
  "key22": "3yzcQQ4q2LGuHRBbZXwLK6wbsPwVpZgMjnvXv9fBfUZuqdwQyptMZhLbfG6Gb7AtN9e5RNUBcqzFPHvoZZt5f1Bc",
  "key23": "j6KbV7pWczJcsktNPtS5yfUfAxwTX48QkLcrzUuF9XyhKQFZawnNgpSac4hwFDj9zhzdcuhjzFa5dWSpbBuR6D6",
  "key24": "3yzjBUtmttMpPgKFiYuoLVpvCtncw4XAAnwckK9CyyLipRpvqpYVRUMndEv7wE2kwrj2TvbpA6maqMsVXAL41oNp",
  "key25": "4aq7nz6GkJyXfcPvz5ea4nbiNNp2PSujWVK9WPTrSyTHLcqQDmVkpaBTDnz7UW9vyDcjAu1SRCdFqrBWgChjZDfC",
  "key26": "2qeFffPPHeVqmTTtHxJVmJeL2oA9YMybUpsM5DxvaLW3cXYh3odgED5SQAPNXG6adRRE65LicGFodBDJwxB6jw8b",
  "key27": "25rCYhkrpv4gEW9RZ8Kejq5r6TxiM4ZFxHrybbtM4GBQENuiowvsE36o5a9n1LdaC1n8xcgw4UZaC7uDApbie7zc",
  "key28": "3SXcete1z9VQAXMEf5PML94HZTruhLsdmLWETMsWH5hn6KrkFEyqyHwuBUT5QaYpRzSrPfb6jUHB9Q9Vf6nhYNsr",
  "key29": "S3wUKEi9v6epSXdCTTx1dXYcbUagf6rXkSetEyAtpoBgtMaZPyEWEBsFtHW4gUM44jNMjpGXpwKuBTCvPd5w74V",
  "key30": "4qiR94LBmRk2djSULCEHtTggq3CMpL3LuqMU4RWoZNgwi5mm2JUUkH3JTPEax6s6VtpZULkaH9Vq2wJZWjifevde"
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
