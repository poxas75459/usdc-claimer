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
    "5W9g3f9uBxzy1L8S7GoSEa6TTyh1ASHucD2Xp29wqnfERaKVfbEq7ADtkje2p3Sd33fxAraRBZX94BNEdRE16AFx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VSkjLqCmE82pAwDua8YyyGb2EuZQ5eRsTxfn9Qwq1egfmBdSu6cUnijKhD7mrY11K8Hv4SVPK7bSQU2NsKbuvAU",
  "key1": "3VW3DaLZVr13vhhZovvwrrJvLDJPnrcye7HuuBe15Adiq3XM8uzubwFzfDs6xcYdFc3LPnkPLE5LenKUy99cUUo5",
  "key2": "66o9tUZtobHTjvwqPmF9j9Cauh68omkQE7DLabnjA9NXRnxW4eLca25BkMa3mmUfTnqnCiZpnmAoAuJPeJonXuce",
  "key3": "64p8icg4sqTvwMVgdFSEvJLZAYiVNZF88dwvETwWFF2oRKN9eqvF7ZhJkEkPPYuXgGm1YjSMTisyjUPHHxgAiBYD",
  "key4": "42kD5D2faSZ6o34CLRSN9C6xd9LK6cEW2qbHYTARfVMUwasYsTkzvdCFFu6W3AqeBvdzdecbm6wNKGph54PJ83fe",
  "key5": "2NqXx1kW9jKJYKmc19zaouKzhVhGrED9BRKrzwNGy3pQc7TM8jCLS5gDHimQmJ3dXVjKddFRpgXRMpjGa6YpHBXH",
  "key6": "2q31KS3BZWQKtAb3WzJUdBcYyWTJvGg3KXJi6Dy6hMW9QEfeLN2ju8Y9HKFoW1KNNUYjk44YGkv8d9xGUx33bRNL",
  "key7": "7ZnS65F4HvXZrtpt5cmxontxRJbsZfoxd8fu1CfxGStJJhuG9E41C2xb5BUbGNGCMmEGPTE8akPCp2PETe2FTu9",
  "key8": "3dhymumwmE2oZVGARkHSRzArUMm8ke1f5U7FACpZv2sjxUZMiwkBzWystKokWDNYv2A45w8G59kCo53FCY7nRcfU",
  "key9": "2rqYSerTPaaxG2pFZpgEMEo1fWsLPR3inWRJLW73e1bNocBBZNpXM8ctsuZ5vnEvKuqJ24oQVjnvyFDN3KLrWdLq",
  "key10": "3yLA54oHdMEqFWeouzkjaFRvVdw5okLQYT8BFpWp5Q2kihqaDuNsPdYAQyhHsqoxdTxmRTjsSgNoGb5k3xe84ZjZ",
  "key11": "67okYS38eDx4jpbC2NhcPymyeqELNqn7Rb4LB4Tf7dPde6tmyUq3b7hXwbQPQu6b92u64kUsfVyCUx5VCJXY9Hr1",
  "key12": "2u5V5CxQJhP2E9S51cKvBTR4YCQhBwBZNFoaAL4MpBjvL1962sPY3txoAgCnfbGeCLhU8DMGFLR4GsjZmoDcJThd",
  "key13": "3pHEXJuyZWV42gHQGHRhNvHg4sfN7FVouGvVwL32JcWD5uaV2zUiQN6LR8Zw9SdhWXBrc5iYhnHa3gHeHgAQJtet",
  "key14": "5ZziJpyuHrNPjSTVEW21HynRU77rRfnfeScB1W5xJSpBsfpqq8KBKJgk2ajMNGUQWBKpSbBkmu7xHuJUSiRJEHw",
  "key15": "4R8wvUr4Eaz4wCCvZHm263TFMFeWszMpWv8AzUMBgLWvAb7SQJH3TtF2apDz4RW3qBU8wmjoFvC1DzHYxaLmWb3j",
  "key16": "2frcp24Q51pWcMoDqKng1BJbShDtqY3aQj9jCoj8F8tzRMN8HDZBxf6kEknyMVHKt8TcjbkJfYVfvrMmQFfD4M9W",
  "key17": "4FgZuuvwtQrncxqtMMDUPnYhdCo2qiY5Dwc64QzdMzAPxozBuKatthxR23kJegufivg4zd1hBQB5zsqcLS2sSvJU",
  "key18": "457rYNNtETPbgv4DxvbvQM6dfVu7SdcgseMwVnv4dkq7sNA71XjjonK1ZM38bMgrmmMwL8b2HuVE7tThYhsa5f1",
  "key19": "Zkd8pvQN9tginXaPu91FMyYFKvtarXQKVGnM4nqxEZEbAs77tmTaiEaZtvenQTYd8UTg3hmDa3ZNhhmJsdbY5uk",
  "key20": "4TMqskDDi6qP3fKoaGB7onwtWx4WE2tsV34B4sxP4ADyK6NXbUk1McsEWELMALKjKRW7Hzg6YT3d391iAFcuxxVb",
  "key21": "NwfV6nTMm5YGZQiBM1JMDpFrP6EFvPr78q95kMLxWD7bkB2GFFNjAKfaYhkvCs7Ag8XWrtXKgoDFkW8Uu79Qad2",
  "key22": "RQhiR99LBxN4cNqto2sS9F4xv62NVNkdEbWMJ9SCDMV1bcWzmvmy8aprzSYHZEuRVnr8gCwGRwjiRDpGSsyGUL1",
  "key23": "229unacRnWFRNMDLyThpaA1dQ9wZqvb5BmDuD1E3iekPGTd8V6f2vo3BmvRLHhEkYSnGRAEctNS8Hhrr9WMx7Snp",
  "key24": "2uMABsfrxRcNojD9BGV1gEKyJ4n7wWuSEeTa92bDWs43J4gRqg137NK7Bj5D6AcuiumGfrJkyHCFn6KTQxHenv7M",
  "key25": "xDPRuPkZrZJzcXCuHHNnQafngGFZkvjwtydqEU3CzZcuRmbFLa92o6qoZAffR25aGArzbpde8c4wMtU4ULkC4Wp",
  "key26": "3w8mtn5Sc5TbXdrJVud1LpcKhK5PazjndKPzctmxQjJ1ZUqFZdrAGWTSegZLrEGgi4fdRyuXNJ44krurHJdE9LsW",
  "key27": "5YVwj1auA2SGY7QbBSEkocjmVZJm4DHbxP6PutzhAEnhhne1Tzt6L7H6LTRQLH75jGVpdv22GHLuoQgP57ZQbxqV",
  "key28": "4tvsSqR2KBBCxF2EHg4qLwMLpNVXUzm3QmUiGxcAPKEaJeN18tLeZ7Yzk8HtS8Z7EtuToFuQXoF2VfTx2xjdbGgH",
  "key29": "4CgH5hzPmQRcbDUNP7RxktiEqENu9LsE1YxNMCaCkJyx8wuQaAvoeqMjfuhZ3HNtwesHFn3UVfXBDc47qEuEUMEe",
  "key30": "2ZpG8MYBKNvVfx3DBpNrHARfWQQnCfCpsciAnKbmdZKBHYkdKTfFMH4pnQ3sjBMrPgadUsmizNQcz3FoaZwhh4FD",
  "key31": "5Feu18847pVedvvfStTPXxCoJ4QG2tfG7wusrxH3L5vTPrEPMVvyujs7hzKf9RYDDtt4hZi7vpbvN6nvp5rEZXxi",
  "key32": "4byqRoAv8hisv3uVJJqxKDXps4w3CJGnT78pKzvcf8Ni7pu1rLdYCHjoAmMcwU7DvR8WDrvFSJWcT1kgm6x4PMfe",
  "key33": "4cMoHyRNuLUAQQXRuS4b6NDFL8hnUYrwaPN4ryBoNnxuMZHSJT8JDmZcHKgLnr34DQoRogXfCUr1YbV1L65zBuYT",
  "key34": "4zV5GJUQ2xGkdEDLeR8pVKN9mpScW4gSmyR7qZhG3pN8v7MXqi5ss5FJaSqfHT4MzGVy3CvbB8RqcSo1BrEBMvY2",
  "key35": "5XM2kr5izp5UijhzV5yvGSYLedkr9nnSPFVJDoWoTZMAzSmHN577H3ambENKpd53svGXR1AcyJxMPmApu2XRpvLV",
  "key36": "bWJmGyH6rq2iJgdd8xNpEpXQbeae5coDeJviJycaiJCtoYG7be5yt1oUBRCbeyTi5kDovyGdCArKhsxzTQxsDcJ",
  "key37": "54ZGvPmaXk264YB2EnqbN7VYevJWwWv5tcrb74WEpHJGDivhUe71c1DHvYNu7hfh4JV6y36PNBjGAiq8BTMXi6WK",
  "key38": "2r73x6YzHM8hMSUWoTVGbhDHxcozsgMoFDdk2s4485eFv7eZ4ibYkpMMM87XpdpxfbMQMctwRRHPr9tAt7wF6uhs",
  "key39": "3x13iHnP9mT4bGjo7wg9NQ38qrJCE2qdobeaY3viWMunzxgac9FqK4MXsLjr7SJEL7x1aksXRxAyHtgBNxL79LSv",
  "key40": "5isPq3h5DynmWwzmoqfAcN6SyWVS1ne7i1b3tZdkUH7BqNQduGBQfGNzfrwv8bT1izrq9ZCmbjn658KppRYhGKbU",
  "key41": "KB9gqmH6YaGoSv4jFyRj9qoGsMTmyKDkvZo9ANzM1FCY2cpjupeJJYKh7PeiVrXVqrrBLyBinQvHSCNQMp5jJsW",
  "key42": "5yTDcTWZy2z9XXfZB7U7izPWvg9kKouT2iFcXFkUUW7aHcUqf7ZGYMMUtiXEG3axbP6WMWYzuGzN9jmWN1WTkzLC",
  "key43": "4bvNaa6bokrvk6A4HBSFysYaEaKgwm2PESXo7ZU8qAuhgops7y3BHqmcFvLmxa3QcFis5QWv9ceoRdUDXLWUDnaK"
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
