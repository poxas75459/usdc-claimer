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
    "HLFbsnmQxXkoVQobPcapQC4zSvw1x2jqYWvZzKfKK99oGCtnoA4AUmBkgGTc95SQQQEeosY4zQRyQBG9ARrBYfK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B7xEEEvmNogbiXAw54xNcirYAErPUZZVbrJ5gK8euis7pgELbpU6V2DuTiZok697hYC3fLktJ4NnQ6xAXJzUQBe",
  "key1": "4FB3vD4gHEqscHmUHZAZRBxnZgYzSw9ErLdNPKFzcqACSHoWHS3DBowUC1h7AZ6bG9FwzZQyKJUdAFk9d6K2PwsT",
  "key2": "ZhZPHAuwJ9oX7cjt7DtLjcYEoQviXz4GnwSgfrZ2njPMqhzCSnMLFiAxuK6beqm34Efp1wb6aer9QLmXrNrAazx",
  "key3": "2R9qXUuLBvmuFbhCuEcYyS1qeMVDsdFxH9cxQnARmGtvdHFB8K1czFsAB2tgBUd3nisuXvKMTrbBGiN1Y7JCcZcc",
  "key4": "2QJHujcqECzZ46rDrJ61WznUoCXGmzWTtTuxWAH6itfgLgPTj2eV8YzZg5Q5ZNPUz7K5QpyvKh2Y3chYMhomqmCS",
  "key5": "P3Biq4HZHddcXqQNVBg8wXBKrbqE3JaeZKuedSRTt4UHoK1dSnEQb9vsMhBTEy5fz4E7Ei4hnteCCKYe9iVr1WA",
  "key6": "4GoDNEgGtFj3qgnvAG32X3qYEmiQCLcDFqZndTSjDE4sdwpUaE9nsWsRafrtSfmwYUyNzNQrcgXg3PsdW2KvGGSv",
  "key7": "3BAawWj8Z8f93Rrj59pdVPhMWLvpga9BiBdfQrzyMrDGoars9wezL9pfEBRNzFcLV1wemyf2G3TfVugDTuwic8U7",
  "key8": "4yQeU79ZpvZumnLxDPg1Ar8WvcLjEsQCDN3JAejGpMu8rvbqxSGZaUa43tjy7KuUe9wRT8ZWyCR3x4Tc6AKZoKCw",
  "key9": "STmN3cmeuSLBU9kuReqzRrv6NWmVAgaxBQw9ba242KtmrfpQiEKq3ejJWA2Jnh9nJ6w9c1MyBaMuFSbNvT4bYqg",
  "key10": "3wU14ChVcqhFXLaFCoskaxm86s1kGSUn9rJY649WrKUrWoHro8Phw9d2EBTdAv6GwXAmkZv6LF9yUuctriTbxSxn",
  "key11": "41aAk4VfFDEFh3XsMKXiXGK32YFjvRF81zYYdTfWUkHvjoUxJBLEF4G3dhVbqaP4iBoERD76mZgWdV73Ah8jXsWF",
  "key12": "2EogXSci4yz64adjUcf8qrXQtVzMvokTRbpNMck8EQUa6QY4ekgcwMCfXMUi8LaZbxiy8TN7VRohJcHonu2rhPDh",
  "key13": "3VXsgA7He2xJV7wcSgW8Le9o1f8EkkoL2zjn665oWsAVyzqG1gpeaixcJVnDizyMn8z32Qm99SAhbhTZVX922F1D",
  "key14": "32UndQXk6H62QmtdL6DiVuzvhoEdKA3VRUMCahtg6VN1L8gbKhMqwTGw6Y5ecsSgEdXouTHnno5KfdyzYGmwNWSZ",
  "key15": "3tLsyzNVe5TZVZcJdBgYALiMuaih4NxEucPWQ4zArw1BRYKvuSaXS65jy2fj9FAcTPBo9EGYS1hmjSCjT3h7gHxZ",
  "key16": "2agnJnoLrwAYV2zzZENteDB9b9yiSCibSf94AisxNiUkNY3XvLQmkjLRCzA6J5K3g9C7VbcYjarKCwaSDM4mGaP7",
  "key17": "5WSPEk8evaiJfeVM3ZCTr8fbQYxXHBgLxCDQuBv2hwis8RLeV3Hp7U1pPfnsJanoj8hc1okotoCaCYVxsMh9dMsp",
  "key18": "5ZmwY76pwcdjXjcs1kPyUQcectrSqZr7K4MvHHNcvizWFExzYnBSgcpQjgqp5LU15QfrrAbsNRGECw3aKfZ1dRy4",
  "key19": "5bx7P1d1ppzGWaNJEiGPS7me1wY53qED2W9WByWzNXhUatFHjydnTpmyLj3yssBM8xAWjJdiaApiJMPWivZLTxXp",
  "key20": "3G1hzQay7fbDFQb39bEJ6MoHkMWeW7worRxh7wZBY7aSJYCgF5W5ExfgrzCaGa24trcQZebgyTL9EJ9cqFTBUjhM",
  "key21": "LZ8TwUAB1e7R4R8w2e27gxs7WHcr4pj6ju35bdSCoebhLVcbTzgEqrk4DG3MsaJtANcJKqLrTNeJ7NUxd58FAtA",
  "key22": "2MVvc8JkoDJnmW9XhqRRBpkmCZkj1hbPcpR7AZzsFqVm3oqCp9Fe9nXnRRbYyNvzYzNPWCdKZ8UxDTyQN8WVSSH1",
  "key23": "cjjZiNNWqmjTzaYD5jURxk9r2M8CqZbNYAvb3mJkdU6nLR7XRMEgsE7A9rQgprLDsur1gzjecmpoE3ArnNrjza8",
  "key24": "dccHNyr9aj6XFjauqLYWtuBefmPhB1ZkDjdhdyivpyfP9hqPvDFfDo2ZhwNh6EYdaUSyY5X5g9daCDNG5db8owU",
  "key25": "2xydXuMWqbyQeBPaiR1k1aY9gmTpBp8dhQcCNo84E29rLKV3LBCVVveGWMVCCGTiLwWQUYfPtennTPgHoGQCtRsr",
  "key26": "2u1SESpftULAZBExP1L8MeFLUKgcRNNMRsj7ViLp8UhFK8YZq7S7ZYCbk83Py7W4hHXCvRKZMwWotBb1PrxqSNkN",
  "key27": "26DbEZFnnCeyZXwgK8xPTg2MGE4JMUqjpVrrbKZRWmMwH4mnWJGJ91CWNS5hytYhSgyntDA4zcfLttBe6dRa24ip",
  "key28": "3gUWvswp7cKWjb2MxZjE3exfSaaay5WhHWvwo6Sj6PkCHxGDfyt41cAozL4axuQSjkTDFY9P5GPVdg9fbWdvBcdo",
  "key29": "7B7og5EbJ7ooYBvxegfAt8Rg57g3xSotXJ3efi7ei8CUkeJcKr5vhGy1mbRp6HZpMUpSiNQQTcAP9wxRzDZPzDZ",
  "key30": "4LZazgJehk9wqScaozWv7Tw6Qyy3J53nJ52wmmXjQsCFjHT9N5CSwLmZNs5NAb6agSMbAWqSW4AgaqXrqZQuni4m",
  "key31": "4c4JyGWgRoWRP6vUGn1SxhAHJGGnsd3dsFZNB9UdXMCnQyLaXLyRwwCFJxyKpaMiLBzBeSwbi2qSCJmmHStM99dt",
  "key32": "ztfxkLSHhAm4wJGJ2zidr1StACp2iNsiSeYGUcP65nC6sMWBajQvjp1gEk71mh7snvtwjTyEXUrtqmrte5KnrZf"
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
