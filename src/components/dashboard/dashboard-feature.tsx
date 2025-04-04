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
    "5ewzKS4Hbs69HiNEweMEgysaneW2Ya5Agj8p4fYF68WBceo4ccVxVqWuNRiQytWP44geE1gUvdXLWQyBKcwetX5j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aAhMzi7QQdum2mKs93AeBc4dDkP5Ak3tmc5vJTYiGLDwYQE5TeaYqBnucrYLVsdQHcfbxtwgBLUcNaGYxSsSgjX",
  "key1": "2R41g4LZjRTXbrNpmoUmjCmcAMu79HPYDyHf4XpeUheMHRwogLBqQ1TUV1H68WbcXRFtejErfHH1BLKjYsV7HvT8",
  "key2": "25o8eUAA6c1NL2mRmD6DEyQU9E8KYqS5sao71TMUEj7RiFJ94f4GzNpsCsUSaG11GrcVu5xVqteY6XjGL142Lzwa",
  "key3": "2QawYk7iDFHork3qhrSVrVYBq5LWmTCMCvzSQiAspSVUaiQfLoy3iQZkCNMW6dn1kMzdMJ48mnCKUbA5mcGizBG6",
  "key4": "3GxmdbpywVhGqd9BT6xikDVchUk7uhkrJgfTqJETLXunR7GtwVGpLo5tJ4GW2PKZX1cBQc58TmtWyFK6CWxEA7hh",
  "key5": "UFEXUPtMSAozQhxdqh6vKN72pnpjvGdVTQuRNahQCH4Z5U7fr8fGTMgsGGjfeLbPLV2sgNcHTLbqAKKGXAwQZJF",
  "key6": "4fdmNGLcNu949SrfSyewqgB8bNnpSJGicMA1Zjw6u5jEBtGSD7nE2z8KJVieuNZsZRfeiiG7dxNV7weGdb8SAWn8",
  "key7": "3tbMpBgNy1C1ef37Htit9PaBoUa5DC725GrWagrjC3wvWqBs9qhiH5aSTM8CbwfCvg6ni4DH8K1ieJrByxie6PjV",
  "key8": "4Qc1Pfj1U4wVJGoqo7gKi674KbLg2RezG4GvpzJjt2E5ZDiYfSg3iK1M3D4G6T83gTsR1GWzwUtbfJ9gspA3uLgU",
  "key9": "3XDzHUcuzQ7NsN2mkzHUT2cg98aejHD1qVVRY9FdHPaHSj2K2QZJGjjDJkciEqzCnmUFgyB72cCnSCq1dU5NCc4m",
  "key10": "2EWdZ9QkYDG7YXj1SakSyRvLcpUEwzz93XZB1b63BESj58gLQwWzbdhsmjsU84ivmWJCfb45eYHfawc5HZXBYrT",
  "key11": "4U63LkEgX4bkJC2cETWHSKb3neTmJtv2yYpDHuPAWd9aNXbRk4gqVCZUqjDBdeUWngBQ3U2yx6M6cm8KXoXMwb6u",
  "key12": "666Mbcp3Rsy9iYQCy2r55oLdDS4bvHccpGXgYN4W7KvGvLxbvXdPfMG1oh8ozz2uWHmhUDVHdxteirrqxQRyNeLb",
  "key13": "31EmA3Aw7Rw7ReMhhjoevEp8qPpDEpN9cZJXrfVawmo52LYwJoG1vayoxDvxB3fohUUt4H2LjLMeZh2v9VDNiJwM",
  "key14": "f8YZVevvgppyqeUbcYwGoSPd6AWYAL2ToxVKWK3kLBH2jqP4YANqaXMPNt1K7vSoYGkEQTzpuQjsKZTSkBPFtde",
  "key15": "2mjBu7xRMmdHAVhbdQsaS83jeB5RLbjg96Ytd7YFz3NKAFTkQKyFxDNJ1PN8YfwhmS5FQWhtqt61cCHV6aFSWS11",
  "key16": "27eCh5MNJ3wa15ksHYnLMUbnaFv76HnXJ5qSnP2vyMGixFEdFCyTQQAGmWcdNj5uqDhEXnBLJphNjmNQABBxziCZ",
  "key17": "5FNKYXvEwT84fwCmwpwMNodJKLAeZbSXGqL5P3r31YuYvyNXxRCtpP91kcv511oMWopfGxgWTZHQmVGmWyba9nPm",
  "key18": "k7QDUaatd2RKMwbgB6yjAcqC9jPjGTGKVuTCsDdTEaFMXZ6FzvPmactHp1ggAjnWXRgixkom9fp7AkrTJzRubFN",
  "key19": "3TKWdGV8XTPVXzrbXQYP6i8SQGNex6UeQMD6FuMt6onHLC9hKiom2FDcWPxmngW4bXD6Twdg7os1mYY8B2pLriq2",
  "key20": "4nwVYoMjnxwdk3B2wfUrwvzHP4fFV5SiF7gUgDzW3Rt2xfymN3Gsr5RaxrBPqCSwDtBtXvRh7QcophsuL5K9ckTT",
  "key21": "67VJp2k14PCn9eW9vSnuKcZMKcnTzvde89SiJTKqHvR2QCWGcZZDHzNGkk2yYW2rmxyWwrUVyu9aBhz8p2R1cxQc",
  "key22": "2awwG6qM6nGTEUPVX5CMhrfgNZFHUTNVssvYsbAggymCeF9a8mH3gd5dk92WMcpZRAXchkg2si2eWEgPuoX3qjxX",
  "key23": "GaU1LwDmVLnxdPPKXQ7Db8m6NTrHR3W2XMXDwQn2A5s3AH1DnbjFGb2JxqyT5RDbMBWZYXXzVFRhfh3cVbtvSiZ",
  "key24": "3QA1jNWbsmoS1GoY5RPyqdNVMrTiXA5fgRjfXy3NyA66KRRHjaVLRFXitq5yRx9NkwZFHbMe7rr7LYgvPHV7YWDi",
  "key25": "q157SSbm8NVRVhCgzGbghTdLErXwj4CyMX84xGreYCDxDzAjwveAFSr8iouso54Tx1H35ujTcdtXcP7dDPa2NKr",
  "key26": "3mfY8HMsyf2q8gPzJSS7gJEpGSgpgNaXffCCWqfQ3t2z9ZqWonnPucUqDiEKgS8QrbJFzw6yGXrG1RFd6Qz1hjyh",
  "key27": "3i24UZVPvtJkZmuXmMbKA88NuGRJHp9hpiVDLSVNsFqfm5xRXUeGPJyhWf9Te3Auc3DRMGnLh2sJSZDmMRfM2Ymj",
  "key28": "2WSRuqgqWCzrJx3xUgTkJqU9VLqToURKq3boJ3X75NXaq73RhCzv1LtDEXQseZUam6Wa6rs1aivy49SDUfVNRgdD",
  "key29": "46f1BrA5aKtwHvbTKqc4W2642vsd4sxpRbwEsthzH6FoARDDMUsfkkYgcREU7FwYx4wpUkR9UBwZDHEpapwUeE8V"
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
