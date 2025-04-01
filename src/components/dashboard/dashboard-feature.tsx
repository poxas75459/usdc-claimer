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
    "mJkM8nX2K3ZZ1h2M4L3vvh33mwDfzKsXAsdsneTe1HHkY7jv3GMrgP9J9T8crs2FDTwEUuCmzjZ6AqWo19YJQz2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HuxqZ1ccUe9yzZTQu88VaXajZG5XgJtBLn3jXH7tVW6LGpk44qCp96vzLyW79s6ixbiaTnkieUETFnV5YSR89e5",
  "key1": "4E6AebfhqeFQFpP73DqLXt4epTJ55SxxgdWbbr7etp4FuT7yFPi97NRkf6kQJMnBAfgXEauuSevJ6ouajLUs7NSY",
  "key2": "bZgKjyhYFY7hXoXwN8CfzQot1pt7oMmEzozRLLVLP8DrRqrd4MZ2vfzRk1bPWvZd2x3hQrdXkseT8qKrw8DGEfd",
  "key3": "5SP1BvmGbUkkBEiAvZjg3Gja46qACmAdmpMjjdsDSFXEibvkcNiFqe2dRLPZgsvR83zxcCPZ9gC9nk3DXCznX927",
  "key4": "4gBeZ9EjuCFH8t1x5w3w8QFyK8VinxXgSUUzD6SZT1uuquY2WxLbeGc4ovk6YiaytDZNhWgMbcrmddbB3wuLKyGv",
  "key5": "5tiGCk3AVK854YUnQUDmQnEo8tr699rSVDUiv4cnFNwG4tezeVBpZEX9rWmrVAwypbCiprrX9cD2K351pzvEHC8e",
  "key6": "3UXTgh5FdcqV6U9PQckDu54L6rZor4CqtsBTAjyBd1bS4nPf14oTk3UGjyFeiSeamsXUpHq1iBc4BujthoFmYa6P",
  "key7": "3pS81BYrrSG9MGd4oRErjT92nqRa6mM4E1XLCVwdWFKLFuV1KpD9sY2f8zq2QUHjGmU3SqjAPwoUjqGSk1kZmmBu",
  "key8": "3WpN2yDn3vy2EoLqkGMRkSYagC4bvKzQjQBgEkS8oNGDnW9ZM4HDBTmPLRR3WEYM24e8FY6x57siZDrfFEKH8ysh",
  "key9": "4PrpdbmjsTWQqocUTiwWaHAzTCFpjPN23n9QcHefbDMkJrHeYdkb8b9HqP78xeSFEeFKGPUUKqzumDn7jiVyFd2m",
  "key10": "XL2EYXU9bvkua4jHns5AUr1kjH7RursvewnhxHoB8fSSNUu8cqybaLLASt4DGMf2eZ4ZtMJdvVzVowNbCFGZmZ9",
  "key11": "5BieVE5GoG7bHrpe19U4ziQ5WwxfuAhAThNSBTWN7E3C8PiUocU1VbK8WG1MEgLAuHoDrK4wBhbucXtZuUgXHYEn",
  "key12": "3SdQLPGSQT9w9yJP2tyFH8LpgXqFoZdtmH29A6YVpa3A2rrQhDjGCpMTeQxDU1kPXDNu6dbmX9NFjGUAvQ1peCV9",
  "key13": "3wTooRjkaEEa4TFoCM5j9mtWaRK3kreuRfULtVa59ofmuKaiD8DrEDT7bcUEVntL2tEQSdQipKReahchKajrp84d",
  "key14": "3fwm2wU7Theepa2o9ymqwHtppMQHBEWhufEa3U2PnvxE1dgDnTKNE95XLq5tssSREeBL42aYwYP6DmojFELRXEJ8",
  "key15": "4rK9fKpngFoVVoVp51WGLR5JpBRydLxvTUXR4aGPzfFwXNgmDpSemw9jdhh6eHXqfNJRziAcm4dH2V5aWn2XW2E6",
  "key16": "329KdjuHbLeoyk1MHcqMHZwj9zANGmBG3xwjF5kSPPSJRFWEMFK19TuepzdcbkhxdAq679eAdgkEEyDAd1hb62C4",
  "key17": "3uyZH3bpcMY6vNNmvc8XREPC9KqezA3DECB1QnZfxDGfjY3JcYW85FC2aSY6ffZ7NuEic2fGPtB5RVz2HWPsaeox",
  "key18": "3bZkXcnLvrYPBcCw3pzhX2TWYzgQmwX6XDcXsd5tCnrmUvzDup83qKKtR7tRJFQ5h8KzKyjFuRsHCiAFb8XP1qsy",
  "key19": "3nUXC3eJW8a7LVYDMjkcXBD9XRnasYjMoUJYu81gE5RRmuH1AxqbdrxwvYihqxLKdA2xMnKni57pWpiXmd5o2KMe",
  "key20": "3CHV7pTdXLFQ2V2kVrMewCcuPLZx6jw11TbMvJT1oEVLLyik7hgdjUnVRRebb88ZPL7MDucnRBHjKvzRbemg1iDK",
  "key21": "4YHGjCsu8i8aewYn7N7nkjMwA1HUgjfQKegb1mhSZu1PwumMMnNKRBCSAT66uvZakzjFDMpfjWT5kiGMWuPnJ1S8",
  "key22": "54kb5MF2munXoa31T6MAraLvS5kVa5Tc9MpVkQvixxcH2Cy91rEJnpT1sodTtpSmapv28cJA3QYLrSMJG7P2vi4q",
  "key23": "1VhBkBjHpRmWDJQDhP5Sxm6u5oNgJZXp4bW5p5C8TvDJQNkDU2iCQStu2C6itkWJytegAagUFyEZ4K5MHfwmJR1",
  "key24": "4C4d6M772D2VLv4zYgrYEPrvFXrDcJKvWJPn7yxvBxnGfdjGcqwPDbNK6d5mG8AroZzc9exDgvbeC7aEonLquRLP",
  "key25": "XvazSFwYpNccBS4GVzzzj3qfr34fWRvDsgbx4mfCogbpfDnHtSWkeLzuALgiRKMkJW3hhL1TT6NFvsKk4EcH4PJ",
  "key26": "2j2rPjqT4KwHiX49Q13uKAAUPFLUPdMuspcMjvR784FJ3twWvJ1NhQ1NqGqMgwKP4kzfx3QtqRrgJcyzGW5JRuzN",
  "key27": "5FCJjyvvEWQJ31PzmKh3a4j7Aj2o9ZA7WAUMPMMj3JWcDt8MzjRDZpWVqQkz1mu9nfdJ8wv8dL7EViJuHdQohDeA",
  "key28": "3w4ZCox13a38urGoj2ARCa3Wqf8JdCEHBn5ghTfv8vZ8X7XaVnkP4BphRwpJDKNnRqoYg6cdp38CQA1oVEithNEK",
  "key29": "5VGqdRTv8Ffb6KZk8zPD1L7BBKnt1wFemnBBexPcJ6U3rvKNSiFAWB8mmb7FnyW6mFT3ziuJjKDV1CjU4JR2xHQr",
  "key30": "EPGTrgnwENm5oDgZhAKensBJ6U5tJCvQDos37HQe1VsofAe8AruYABsuMzVU7HAMHf2zcjEuAfTWeAnttZszSwY",
  "key31": "PhrjiAPWNUEXvkPQTCaeyFTVLNcC9uuEYJvsyWnmH5fKphdH3VWn6XyvYqP23pCNmiEDtaZD8FnrAQKxEKGmDiP",
  "key32": "8zuzazfPGpBPT9WAue4xMPj3rdJn9MPLU3drypHAiv6rzdgfkNPpBCr3v77Lfh4fHYjmoN2krKnPdWDBqPZi4gu"
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
