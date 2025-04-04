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
    "54urKU7jYPX3mNkGHfrBAcYGybUNpQsGuvRGyxYqrVedBsSJjWJ58pAeUDWmrsC2nxPVFDGtCvtPfwtAaeieZNnj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SCeswA9o8uWJisZaGZ1cQVjdEcmikM57ZJycgCM5TSvAp9wB9AwiiX6wYyeehb8ZLrZzJyBjBmf81G6UWVLFoQP",
  "key1": "3QEe96ZWrWjaVA4AYqpnoJvFdDVKSiwFQdNVd2W9bZqwmaa2bSuTqjx19m9BKAFABFtSG1B8tARtkJiUnFMvUpRk",
  "key2": "AMSKbrbbh2HWjC55NcEGSBh86EoM8yqJoyakWqGVxiQXNXbyAQBhSRy5E4FZ4mV4DzvQrXfuzepH9ViUm61B1xr",
  "key3": "43PJvY7tpG9uJiZzK946tpsFdpZVTeJmx8aGxT6theq97ncBrY5PJM34V71W8uQCRKtrAkCv9uNfL6uB96NP6BDw",
  "key4": "3QYMZtjrJ2wngTqsYzbHSpreb4MVWHkMGHW4uPVzi82j3gAqKR2cPY17n9rC2LLh8okVit9L9MKL74qm1JxWofqZ",
  "key5": "YKS2mgSVW92FssJ2WfnvynhYLb9DbFRzegoni8ka5dbXtkTQJnUHVNG5qAtbqrtDufUCp3ktn8hZjAtTnyiMSKD",
  "key6": "GoQ8KPkzyPkZBtyDEKrtyXxxTM8Daif8tVFbDXQqXgXqQJhAMXcWstqhQyNdKaCwrwWrNVfCWSZgmAmBXAkNnKZ",
  "key7": "5LwmPyuRwUa2zWvjbJWPg9TPT44MWxsMSfpzA8kHEnMtBY114QY3cjU8CCA1QSZki4jTVs8qjgJUzavZh68LPc2v",
  "key8": "5wHiC2VgAoVtyAhqqNynMdKRTiB4tcDpQHjZcgecBiFZ8GHrC83T6jjnpgsqE44mGLMhnAcxg4wBo6FiZWPaqSkc",
  "key9": "kQYdeWH9mpw7iWBXJpwyWWNakURFihx4WYviuwGHeD9yYSTdKbpRM3yrv35yEk3Tm9ptZMCuUppLbrwq12T7q5X",
  "key10": "5pQKmJ2FaYbLB2L8jS5qErU3RsWMTXXezLcvxusmWyspupq9SM8B3iqsFbWRMKT8uaYi24PzojHS8A1dW9HkmCaN",
  "key11": "5CRxhuu4M5zSJk8Q3noKRfCZKKMmHoQe7bJmYVQsEZuWJMCCFdSx9f5F5L93yzfgoab9WHbCucdc8fZpEh8XBLQB",
  "key12": "5LygfZHpKwXxkFw3SJMiDt2DyH2Qzt9W6N1jboDWcukH88TqEsiSnCLinYHTfo1rh3yDYqovU6vkBDaLF4nqDACm",
  "key13": "5tne4FCHqY5nEhpv3fKw6sYXrkZPswPTjoDve2ur2AzeUnBT5Z2rZajtsDhY7WoinPsviaJ2nsPUFujRvH8i1Kc1",
  "key14": "3U4YxvZKkVykBZhuxxBrYULW3WZcoVutrTifPrKivNkPuXjRjWiJg9nfFBRy6gRTrovpKFfdtZom5DbTZkCaD4UJ",
  "key15": "2uXDyMjR32Pexry1X8oxw6NB37Dzdeft8nUsk5f5KVAQWeRj2xbvev58CBXxjanhZsdrxXrQeXgKz5aS8456TonV",
  "key16": "NbRN1VZjarxiutXoerhUhUwyjmHTP1DozCVNhHdhdaux9viJ176M44LZ2P52fbnAoDdFxD5gEYhMHyUko2YeSZP",
  "key17": "48QuypmrwF6mhBrpBAAkJ9MvYe9hZFcJu19SwAjFvw9azrntk8xAB7zDT2JCDVdsQWr9hWWWjY9P6cA3ZWvTytYC",
  "key18": "2JQXXzFyStP4T7ETnmQMMGbLoMTdpmfw5mSWfX9pFFypmTPBFuSXucpU8YRfbFvY81uCcwqBe5MLwmEp4NAd9DKM",
  "key19": "3peWVJm9T1ThocMG61kJEQDv4T9rmsLn1WugSwqxA4wgamKiet4yGQzAjMRqSpcDCHX5eW7idSQCszH43tBvkf5A",
  "key20": "5cKsiAfpxfPmgLYWTS27maRHi8FzoKHLtgQoUeaVx5BHVPcSbghtdiVYgZs8Lu8xrsUEk6cHnnTiRLDRYEfdkQHU",
  "key21": "2ScZmRg5FNndjjRmw14eHyQGVZz63zJXDVb5PNBX6VtFQBi3djXRvcV713dEhJdGW48cS5SQpq3L2ifibyx2MvTg",
  "key22": "3qfVPWvZddZFHxvxbyzEadYAYvCXcR3BUaabHSkit7WQsvtQDPpJAXmx78MSXgkV8Hq6yGJ1mzJCQNtb3uQuWFqf",
  "key23": "5GVna2CnLYXtaUQLcY3CjTw8E967yqc1N4imYQJjmNCHbws3PsteJkFaHD6rwDVvo9bJeevRJZhkUWpJRiCnnd7e",
  "key24": "2TrcykGR5c4do7SzJejeeHGnvP3yJxjHZrL7ztSmVKhWBpM39ua5uUPWEAJHuswq2TUCfWSyNaUEhApJL7Aq5yfA",
  "key25": "67PqbeE3kZL7U8eeivvFNu5C2Dc4t7pkssr3uzQRCAV5NXNFXyrzB2NqsqW5ojybqbBv3t1ap5aXie1AMai9a6v6",
  "key26": "3fwWXU6rRtk3B6om1NJu8oEEnF8RkGHCheZ8L32ucLrgHvyyFGuHJCsjS9NnLm9UgfQqAYk3wd9J3EwfZZmRER4v",
  "key27": "2ha6FYteweyrjvY72Nbt6cXzkfS7VVNVMuTQm2pYFhqpawn3HT8DNAQ9KCZeQxeHHxpQDGymphmqMTHLseHTPU7f",
  "key28": "3oD7nuLDckA6tJouhL1LnoDmgakqPytXP8nbhUvE91j6DMvrzovf1DFAipLZj3ycbeQs3hEUMx8gFaTcN5XGGwxv",
  "key29": "2rr3mnst2UewVJdS8dvaNJD98RJvaoaJaCZ29irSo9XgHHY2G73NnuqUR61jCx8h9UuUDCuH18oackt7nh3jBpFY",
  "key30": "bKvGRyNjYTSqn5631AkrAncJ78LLrMuysJeFFC3CL2b7qxGLZDxebEbh4jFzWRWhR7dChjQY1RywiuGHWjFeKVr",
  "key31": "2waMoGq8hkBdkeF9dV3fQr69jRq3CssFFxrLAvAz4s8e9qCU6rW2BvG1mxwyvVkCMstQ3KNvWa5cVssBTf58vK6Y",
  "key32": "2b1pDX7Yg7AyVp9yPXXk929zaMU8BhgZZ5Qvjzw4xn6y8aGf7fGM6yn3XQiT5AT2i85BXCouvTaTezY6FaNYRBnp",
  "key33": "5FuoC8UvbNkzox2HKyfYNG675wTWTRtoiW94GFoUgtBH6TbLuPrLyZ94vHd9s1quEKcgrwxy3ESAovcESRrbsh31",
  "key34": "4gAcvwj66rD7GZeBaJzWRf12bANJu29WBcnw5BvRH6jEUPpcEAAk8c998Dqm2ZYLVmqFMG5i26heV6L3NgA1tckz",
  "key35": "2drJgA6Ew3rA9FNWmZiEGoKtp54RUahJ5HuqTtvNwJtkivFSMPokqv15a6N8t6Li2XZb3wqtWaZQmtCuEPa9wGxT",
  "key36": "rVGLWMMoPgEgvkr8cabbv5JZxQt18KeS5uPHNzWfJQ3QXZaiHt8uVba4a9yvvjeHuex2AKWjXjUueCgkku8v942",
  "key37": "4uuLjykdaN4bH2d46h8Yrv9SotHNzNUTBmFA3p3fUfTq4CyavXMcoLo5tm1zRGX9FoX3KG34Q8xPHDJvok6Z2UpZ",
  "key38": "dskCQbGAhXZCeqJrU2aSPWo2XSDMKzpYiSA89HtySVUXxSVoQLheRSvqzf9JiqJpp21RV7tRr12WVkJYLGFiGrz"
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
