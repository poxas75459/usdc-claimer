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
    "7MPh19BwAXqcMxvKVBycMFXHwxzy2SPGNvmNjNQBTTxe39XHFxxgxzvT2Cxa16SEhFECXouMGfJWbcUSZsxuxqu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nNJXEohUTFPPKVRrQ312C53hrNaV7p5vD6aGpUEUGG4WeFhu2LCCwBidRAWsqZgdUNhx5TiVTn7kGM4Sf6dsXrn",
  "key1": "6GoZjdiimbeac8bQHX1ipUsbatdobdsuTfgG5dvPEQ1fpA3KqfVe5EaxkBSstuwHvJgNHfvoB3RtP3bWTCUiGS5",
  "key2": "22bfbdTX6bPbkky2KRmdh9zftWqrV7RrzxxL23ECy3QsbpXE231YJNgr9noSqJ4uWt5FY7HsdfJyS1qac5h6ACFH",
  "key3": "2XC17usfvZXm1mKNKxDkLiS36XLfeSeUGn5sakD6UMXi2HrcZTdXn5QGB3En4WCvakZh8YRnNDqafkH78EWhMWke",
  "key4": "3Ms1d4ExPP8tm9L8QK9E8LcujUjKKL38esAjztAbP8aLyT4XKch64YQARqufrBwMXj6LnaWc3K5nTZZEzpGtnN2x",
  "key5": "3xvduWswFKa4jWnK1yLNQEeB8Ccy8aEcGpXkiFZpnuAmAy3DXyQ9y1UBwHvoBS4Dp2xzK4rguwC4HkXVTM38dVG4",
  "key6": "2yonitaUXD66t1JY1iu4mS8vWpGVhub6xXEPYmfmZ83UyeDWXsaxxx9aRovaYqx3dASNcTviccZA7qRYTg1ddcPd",
  "key7": "5ESiRaRzje1tYtfhumSJbPjkvWdayZSKMijNpNqzti5ftQmis8ynbNE2yYm2Sk5uKuQUM7fwmUaGakyZoX8HjMz9",
  "key8": "2t5SHWzFsfVsXiA8TcEgGcodh2wUA2Z2BdQn8ZKTkJ5VEMH5tp5xZvQeEaByHFtzJXG1egbXVnzyURmDcCeKvQUq",
  "key9": "5TLPUVJGobuLi1AisVSfmfd3dKc6wduRZGqZnsuhNxtm4kKyGpraB7QBDFwqYqVMWPiS91Y5UAMDbV4tj9KWP4Wa",
  "key10": "wECR3eNgnbZzcK5KvYq9SaPbUUB167sTKM7NF3XajChxB3yjnNDVYcKMhtqHYre1FBfjHCJxJCAZj5PpFKJtvcS",
  "key11": "5c6kshKwaHdzkSW2tpPJtwHgQdS71DCjbhrf1hsTNcvg2stYt7DD5fBoHKqitmSVJ3vTAvrg4LLzPrsamyaXMQR8",
  "key12": "5CXejeb11MGQU1AVigE2gxncMABUPKj7Ab7WxKUMw6HF7Mj2qsb3NRpzLuZMAsQmtcYnH85L2zZ2512sfEtfnaJm",
  "key13": "4RqHjeG4z1DKeujNnK8KMQA5eck6f39tRm2gzJQaw6b7zzpE1rXhCEJn7fsVCC3bbu7Hbda9VE7WbiwtsoyJo1bh",
  "key14": "FeJVQ4Tr4iKGYJTB9ZNNnNYmtuYua77DGjcREPmqEp3UuBVkjjarYBMLTRgwo5C3SFCRSFdFj7Lr7NvyY3yKVTr",
  "key15": "2bYhgMSFa972DbiVUzoxCa15XFTXqjsvHu9MTA3LUdJdi5gQm3Eo1GhhyqeDWFpUUbH4BuPvXGDgaj5E4UD7NJ7x",
  "key16": "2RR43zjSY7S2nP9rT43GxMLBXxvBzuDg1nRHury6AoQiyo2e6UZsBJfMsyjm9uVrXJBVsA7CnDuTZkR8stQBEgtX",
  "key17": "3UF84FPsnWwCyGgoyX9igRtvhwVWNmuZTUZTcZKiFQBuVWT5KvGEgcrBtigxqGhVrdGY1bKQA3ue8q4HV4WG4PaK",
  "key18": "3dTxxqy9eJeCd34i9ZJNqqtbcQS7xULu8sw8L6fCqafMUGK7SEgHyDN5dBM3WjePkJPGHNiqWLNduyJoTprzJHW",
  "key19": "2jggDQN9gr5dccXPVE4JVcBzMDnLih4XbLFkbc1CEPzjzArndmvgorqETaTMPgtj5k6RgfMkCpoJLgC3yXAsgwMj",
  "key20": "3efoEY9kLV8qy2zLf7zJu8qwWWUYrgwRsUrp4JvNnMkUPPh8m1tSQKj8UTvSA2Ew1Whtn5H4TVyP5w8WZdFDiqW4",
  "key21": "2qcMsxWkytakD9FhVSMwxLwtVCXSFTMuXkXZQvBbDAAQfABakrtgxCzPSubFcDqPAWcQATZjQMr7PCR393CgWRNW",
  "key22": "5gpHpz235XFSH3jUqwiardibDDKwNZqi4fhYxqNw8qGh3uEE4fQR63ToJp6uQKGEYB4fySmcLHS9jbQJPktbuUrT",
  "key23": "2WFxqnxFYkrqxxSyBKm8QEeiL3kwjhbih1v3Py2B62eXLVHTBUDaRggYF3AALqYsi92ATcYPDmFLHAqwAyfKixDQ",
  "key24": "BhnfZZm9TeZ3m8Xot7K8crQEZSByRwRh9BC5dpMMt9ztezzRKat612u2kayFVdHpNZeoi56mLqWswJ84GyKfTmZ",
  "key25": "ASZimM1bLJhHdZfWvweEDjc4fNcok3KnB9LB84c3BCFgCqk9yWGg8kXCXFbdU4pwZroJcSXcZu8xy3mHrHRHgM4",
  "key26": "2dkrsn551JyrZwjSjDicveMPRhvjMVfUUKAz72xVLE4YWeAjkmuA5MkTvwvksfwtu8WxB3yWDrzm6yb2pa31C2n",
  "key27": "4xNSfRWXG3TZcaVbiJNWoXBrcLbno3QcRsq5CAAmrpQtJpcWiT8q5L46Yf8u5NEVf8x6t5CuyTpXBB1GM9b9nG6i",
  "key28": "5mTsVY64UKBkNdjQgBsLnSRZRZotTVMVLN6kRirLGp6z8ZL5WzxnSHCPifFhGjjzb23a4N8oS6G9JKGDvD4Ezcju"
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
