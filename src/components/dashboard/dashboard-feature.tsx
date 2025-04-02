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
    "5zR5bsSaHjeTdaJ1SniQcQ8jc84zTuZDYfz3HYe32GbQ1gbqiXtZdmaHuy1sWRLyCDge58uR6nRqMGpTHGJBeEDp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NirAH2S5b3xvLqHh9raudeBmoD1FcAa5T5bHqMG7peDCA1Er5vHitWrusvfuQ7wFkCvW6UiR9qPhVtELDgACbHD",
  "key1": "3njs9L8YXrVJCq37c3rRs8kNZMwHaCsvrBPvziB7bTaREzPTwHSPMLdTAA2WueQxnTe2JEG2bTNMP9RUeFwEYcGh",
  "key2": "2Tu6eWaunYkmMWtt6PYTB83iCjv6RfWaGcKRFP52SGo261jGMaGFxYA67dh1xDy2gRPLFCNoAndWvr68f8tt6m2f",
  "key3": "4oCRVoHRqeKE8ifzeB2HT2o987HEtX5T8AnVPGHLZXkZgNtwuC1VRDchc6sDtoGxxAMFiTaRR9DugNGyCNZ8NYs3",
  "key4": "2TnSatspaNpo2Fr7YpfBVPTD1eiBkYnFDqJmBqFpmrSinn59tksbfAj8jCLuRfZKZLuGGGjyv5NYHBuhvL2Vi5st",
  "key5": "3EQ4FfNWgr1JLd5y8YMG6ZAh2NAQWeM3sTeXFjZyWFKSzFoP1tyNkb6SSoH8LhK1jaoiri2sQTL3FgNpiCdsfJV8",
  "key6": "4wR3rn78KteLC8NcDg8j5kxxZgH2KCoJNPKTqiQnF9KsXzuDHpa26fs6gV7R3v3GCZ4zHGMzfuSGK2rrwmqrofDV",
  "key7": "49z1apzYYT15xHekkcvYEjcgMj7SH9sZ7dzphTPBQbqKyG5BzQN3FccvCgG3JvogBCMXPwbYM2HChJAVsSoznJCt",
  "key8": "2keQDtMTbug87j2B5cGZuVYEV4XaL6Hnf318TPzAYUCGaccYg6BtWaFZmgfPJWWNug29sbq6AeXx2SFDc6W6s3rR",
  "key9": "3MR3PJtdxp9jUbRVksuGVcMsbSpwtzD5VkhH4h3hd8vF9ezHwQekduwaSEr6Zby35ZD1CuB1KynHFuDUvd8bxS7w",
  "key10": "44uPWrsbKwuYp178U9PAGYCGyNb2VzwSQgPX8Uw2rghFP4KFzbNiJM9bsfHJ99XLxjc94f3DHqGeNefwxdxGU54q",
  "key11": "5Q4mUohzGTsk9bnVFQhfHXcggWCiernUFWEXeET4A16Trrt3qN7XZ1dPFJDV2Fha8WarjRxGf3iGWuMJArudXYns",
  "key12": "4ZwUB6rwY5CzRVxwYBVTsnxgT8FrDwSQWQFEZeZ4eq4JywS1swapZi4aVAdwtw1SYx2TEEN22RvxYmZfBuPkvCGi",
  "key13": "24vHSyMsofv2SAirnwzZm2BH7sTLN9rBAxBP7MCJUaCG33JgdnKsYeq1d5fPCkJR2Hd8pqudfZQTQCN2yoZfGJUw",
  "key14": "5CaiipacTUcuQqJbMNwrjGx8ckzQJbUUQYerYK1CspYht9q2FoCWKmkwQpBowTWRredXjtg9Zz1Ausi2v4A9F6uA",
  "key15": "3Tn9ao9xL5CNNDt2dmog7mC79UyzZyfsG82DFMY3m1JnjuHZcCanXWdJnnCDbBvo1ZyStsaHRfe6VnkohjPuq8Du",
  "key16": "22Q83YLksReXPN5CGE36KP1AsgbTJ8VRTy6PsUeMSsQGP5fBSpPH6EQJVDRcnzZTTv2veSiQnr3mmeTpvEBm3eNs",
  "key17": "3oWnbuWCwYatQMGTAQ4jibRVAomLWkH5PoijP2vUw7MihZVVuug41rqr16Tn8FDbYi9gpTaek68bBoCr7sutzZKd",
  "key18": "4u5ic62oGpE9sGvEhUyZNuRqFPE9uXLXAhte9AUUtyhjmbsfiyeLCLsGs3X8213XQYEQf83Q5xQimrZREZC7EJs6",
  "key19": "4hXENtZENDHWxPaz8aUdT8spPM2uozZGqZuausBBYmtZdmAiq5Wcv7ScjL5zupiVkGSys1nukQxXvCf8KtoKokJf",
  "key20": "4g3h5qLnXrmJ4qpPPkJTJzPmijT3toCWASa81W7R7Q5CjPfu1BEmhcVB8WbEdJG7nvBrcvsL5WbaE454bMgaxJyW",
  "key21": "4B9Bhnq7mrbhjSEmvNB3VxDnNFoWnwVw4o2gqZ9arybSMUT6W6ZpHv6LWqrPP3rgvd2YoZKSQorQFrU5Q2bSwU7m",
  "key22": "8ZafYrTfHdo2jtoMDJ7R1qzZ2ps1noE8YP2NBJfsdERJBUhRvUYzeHXSb8jpkVU5MHs2xsPpG52Vj3cxpFwxMEn",
  "key23": "3cJs2GEdCBZxMVUXsc2Qahn83fsD2FGdtWXWVYU5QdSrYc8ijFAWSRvzmisAsDHNEe6ixGprSuJmj7xkWdZK4J6A",
  "key24": "4Y6e5VvzVPaShxirY9ooazLBtfe7LKtG6iRzYTiAgd1dRpXURr4QKLpAUwccCQrVfqyUGMq65Y1bAb7LHy8WkJZ2",
  "key25": "4AkpPidpPVQUhJb3XU19bCjaba18XVvaB7XAt9dVfhrTv8FbrKes8JXJk5CcHTsWM9sQuftMvRQqj8jLKn3BLY3P",
  "key26": "5J3EoWFjUXf3qRW6vgnbQxUFkJmhTi3c6PRtm4S3qHL1iHbS6YDU5YNhBVbubiKyoNNAurYYNUJWffTNacXUBi9b"
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
