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
    "JmrK6bCX8MxqUbsm1ZYpfcyq1thmpbcX5Bx4ecSWkRJ5Sxn7sw4NDTNBqVwRNDd8ecipjFAsu2hn3J6JmZgueDj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jxFVekpSMYAtmxeqbHfkYdriR5u8f9AWDUB6KT8JobEWnUXMSAE3Zc4wGBDaBjFNthvtbTQpzuh1QVm8p8U4WgK",
  "key1": "2H8uNyrqgeRQgnjDoycVYEZzsn43TySoAQhAFqpqy5qKbme7RHGQCMCKZqhaNBM3nA5oZahtE63SR9qTAKS3GQ87",
  "key2": "2TNJsvcuSK8WkbTfYvxen5UZFFu12dW3e6g5rxoMktg48DTGTdn9mZ5WywX9i9GPqH4Myx4qfLpDWrd8BZdkwXca",
  "key3": "48ABQFBmR7VX6xWyx3oWoQWmPiDbMVsa9LgzCw6yK5sX3YNkgVSHvdTBzA9AqaTNqhhoJ8Ho3E2PnwAz1usgRJ76",
  "key4": "YUkju2WQ6igBC3RMkG6Cp9n8uTTUVWkvwtSKYYvt64L8u4HNi2MHYt4T1Ws8bma1d7NXm4Uif2KxsrkXuNd27FE",
  "key5": "3u6SJxwTkXz38s53eSYd7TaXHmAZyrLAXLun36rmPN6Ed47ju1Dr6pVb7E6txneCKnWAMUQ71X8aUeg6hF7BevMC",
  "key6": "5ruuS7fH2cTrMuShMkz5LnYT3WrdMjVvuq3Dxj37Ny2GgRtftjon8HWxq9BBxg6Wat4bLZAESK9HVcwAiA9Ldckg",
  "key7": "dgMoKXSRPjEpw9znVZyZt8BqQgQADYjvB2wrXBHMwmqiTstZf9uMxMhgGMzCv7HYyHBaKkzQtdGSgL2wfn9WsqZ",
  "key8": "DHzyY4JF9KZUchCnpeyDcGrBxvBcCPCYHa7vTRy795wTVCZzdw85hvcV2ENt514gBcGkK6YewzBdjNyD2LipWi9",
  "key9": "5vTLHpBuJvHyuMEYU7KcHCbVnhCujthwPJHrfwjxt8k5Rqhv4qi4ciEGXo75nhrNK983CCQCeXKG22vsDDiFq8qN",
  "key10": "517fFDAKAHrZMFgD8J1DXrGwvrWN1vBE473goiauPiefTy4h52TajUQcGyoyEjoTDNeEbdWzcWWiDSETz7SLV8yP",
  "key11": "yc1vDcvpg61S5cNpdLyr5L6bLWYco8Ma3jM2egBmjun974tt4rzDACDjFHL2MSRwzfpmynWAkgRyqo2Zfz9WvY8",
  "key12": "36cK9k9fJjnYmtgfjYv3S1qPKVmST9rzLwrW9tBvRz1xAyArkYq2bz3DQqsRCVVeE1fxTK2dTi3tM3F6a219A6QL",
  "key13": "21d7exHKRyJixvG2oMjxXcPaQs1fMY6gpBz3dpit8sncPpUWN6ZfbWtDbai3P72iCyoXWJXSrCtHZ9iVk5tR8UbG",
  "key14": "3CxS2F1FSQWhHYYWkjn1SzVsNQB2otm6fxma5wsAVRyUhZSCCMXttgSBc3Nznj19smYL12nrMvor98pEhzfxft8V",
  "key15": "3P38Kjx6UkMVtNsE5mdUpQQVytp6QE9nWMsVnGydrR1C2hFHyZoBtXtXvNC8MyJKk86nBDZ9zzMPAVfd75igMysh",
  "key16": "JAdNAmzaU9hxfJBLSNiYDUvjTaGyh3RmJ7vkkMbYoB24npXjZmfoeMoSNvui7LHg77C7RExyYgjnxZJGmLpiYYA",
  "key17": "3YkpGuoUFzoSTPAxgBCUEus2ix4MLej1baGgE9Lrhx6kW1X2p5iP9ZM81z2hPXViVvrEEXuRiwDNfzZPUzo3xSgt",
  "key18": "3eZxsnTbTT9k1kpEHsgvLbf8evsv7cHWEBxvkojcw4Zsnw85zZR6BXtNyV5tUwtN8tZanNaqPnXMK8Woxd2K2cUP",
  "key19": "3wVxZBT4izvhZpd1LpWHYahMXoxhiKsswpZEvzCNgrCkZ6MDJocvbFbZQaqWm2G23TMGziLMdPGXx5YxU3UXwRTe",
  "key20": "5SsKtN7Mq1LovM7ZFhvZeZpBbLWLDphUPjJJufdjtxvCV6TUhH3pYhukxfKYtoHi2qo5Bbv7H5NxVKPf2QxqJuUd",
  "key21": "vkW3DJTz5SdKinDVqvFNsd5fsfTCbgPrVLkgDGNmnLkM326YSH8MsnAyypLzsLStuVcs5Kk3qhJhDL6Epv6Aj7w",
  "key22": "3cUtnUGAbAobuUHQAg1s5rw7uzQhUqD3VfGYAsWHMhbPq5FTZjTLPdESG4yMdFfzVgX8iy2As9nFQxoPqAT7bNiM",
  "key23": "2qgEwdDP6VMEZh9qRJgL1ug1R2s8B97dwMZQKdwqv17B7c6MeStSnNZbpK5fccXa6Y36NmYyq5V1UNLhFj188mXc",
  "key24": "pEzoVAd9e5Na2idHsCUVrst5hdhsQHA4w1EJsWQqdSzuAwx5CWyjqCYcoySBLGpkY6ns5HzaJHbiXeCqUXVU1gz",
  "key25": "epLZUMFG3E47M984wDtzPgqVTRJr4ZWcKD9A5XtH3bQbWY3wKunz7oLzfaPzft5vTexe4tvc49VEwE2HH9pZw7M",
  "key26": "3yjeWjct6HDoRXAkYD71VwVTeZsYD5k4GRi7DxeCUTVfntNo7NM1MYqxeMdNiYSMyjeH2oLFyWJosSTCNMsLBZj7",
  "key27": "5LyB2DkgH5SNJmXYy2e6ULrKBv12gpAJZynbWrm68CJ3PPZXWMyMBbh3XSWv7KkMpqEp5UbuwaUJ5MQy8HPGb4HR",
  "key28": "2sPqFxA5tMkwJbTxLcVt5i88oLVSxtzUAqBNNugisXsLdx2QY2rN8XC1cTGTnrvS6WXuKqw4KLxAWJ6u9LM5eusP"
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
