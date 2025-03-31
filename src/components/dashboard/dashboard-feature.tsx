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
    "dwNDcFa4N4fRawDNBfgwxCpbRdcEH9m18Mwvdcgao2F7R1AbzUqibDRXfe678QFZ6SqoUJZB1SoCMjAzzPcsAw9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AgQ6x4D4jnZ2r7RYW3WvrZuhb7kMV1HWnoeaMcnYKzeTx2U5B5Lx8Tso1hZFqsLaN1BFq5iPzkWngSWJK4t7sM6",
  "key1": "67Rohu4dGMqzwA3Hr3PZmkbRQZNy8UGAQdwmHg2G39XmrhF7Rjg75ZPBaqrBh4B62VTkhNuN8Qg9B9SS66776LnQ",
  "key2": "3KS3Z3ZAdD5ri84bJoGo5yt3kNYGc4FeKbhcBpobZpaRsr2HqeQAFGH6Ze7eZLCQN28ok4uijBH8eD3mk6KGcmhb",
  "key3": "5ZcZSFxCumtPpiAVwU2c63KM3MR3odxNtuUkTuEECkboKnGsGbVyNx1Dq2F8WiPKa7SkxgGcHnrSPqDxd8sm19JX",
  "key4": "wE74ZwzGtok2C9zvDfFtLNW9APzUTXR1brAY56zoXZ6t7C7N7YqxeF5m8xp1AyLYvjtf9mn39YdDEkhRFNEwR19",
  "key5": "54TwKtrEsPT6rdDRqUspzaWjp4Wr4K5iCCokED7ndxh7Ludp6GdWdCQqata1vy8CwgAbjXR1SxVNvphFgu81aDaV",
  "key6": "5v6E1JA1Cn43aG38mC3q1haShNaW71B28dpimAN994MAmaTzcy1Ns9E7nufP2XB5YcH6R3kLyGSg9tD135LBBpV4",
  "key7": "5TeohiFDPkayUxQQZ5YDyGLqNFGB2dKCL1vhTVAWjRyaZLgw7v4N3KhivTU5pXwnanvteg6GpbUjx9ZGXaPNGDY3",
  "key8": "e6KLs1LW7WXL6ZHRbszWsoBaPrf1xfm6pG2K1eo48GiAPUXh9SWsyY5zNqvcB7f2wfWw4xicbsaw1QsuwS6XwjG",
  "key9": "gZo2A3N8TfB1qHE4MvipAdePSWezok1rNNA228XGXpyRsbZVHQa4Mvn9gDZ1oCPjKwG9zW7EJf4pqsuKUdToJsb",
  "key10": "4WJVepMA7Yuf5guYWScgEQ8mrGSePAw6pHFpYPQ3R6B73xTHL8ZreGoonEXheYbvjQU4JQaht1JBspmdFBHZvVsY",
  "key11": "3eKf9e2gWFHEabnciJ9m7qhDJdm4hQsWBVvT7cb7t1dH3PJ3rgod2bG5bwN9Aj7YVDzZhCXssQ4jfghUJ2Cu5Djk",
  "key12": "jeKC3sSXmHcMNSCsogKACHhzx8CvNxNUBY9TQaa6MN6ifT2C6ZvLgm8UkRY66Ba53qWjj78pnjNEdnFkZ4uvrqo",
  "key13": "BBor5fSXSqVD9mQsKxAXuhqgMYku8gTboX7CcBMS5ATZaquuiotjhUYUDWGpydtf7R99ThSq4nmuZZh5NXRguE4",
  "key14": "2Vh6KaZzdTMsGVMc6HLo95g3oogVyM5NZF4dtpy94ZUCLcdwZWoYfGW1Q26LQ4yc9mYYtFk44tx66Z9DVHvKsYMk",
  "key15": "5ebra5wjC1HJN4NPpVqJU3FNwS93Tn7Dkx1fjd25AzQZw3GFwUZFWKq2V284RTqU6r6LAwcnNtBXy48poTrHv3ko",
  "key16": "psDyzKmaUGzLpXVMZYTNTNDkcP56wv5USNgDYhmZWAUvWB9hJL1Lmgvahe8t6Du1aziNMoUAjJqWZEuLwYEnHqJ",
  "key17": "4MMNxj56ojwet6rMSmFDX7cV1Pw4NaeYAH4S2zn1jpaM4qhpJ1rmsiKfjpYsGrsHFqRiQ4w5dsb3Zu8pW8JfHwpC",
  "key18": "5ffP9nuAWyNPgWGQuLMqeZ9HLUGGRumLsCHJxhgxqBsDQiYkWQcw3moDtFpjrqh5feY51ExQpxauMEo2SB8jmCHH",
  "key19": "2vadZmVaBopuUs7TvSEYUEPWP2oQhyVjA6sCTaWpB7QEHByu4gs3vmPbuBPZjfdJF4PLdckaRSGmA2WN53J6yP4j",
  "key20": "23eVW1yDJzDcKk6DrpiUwqygKTCamhxXqTjAU4K827uhoP2ZWS5aKdA9p6fkuAX7EyWCkE1BYCijQLHGPd8qWfN3",
  "key21": "4TVrw6mLvrxjJFSJA49ATa8j41VBkT2mvNJvqvMuKmty2ZQcJbwGJu2cdEAMdFo4d6STqJ9qmrnPtQKAAeFpnixi",
  "key22": "3vMXBXViYvDCWQNBWj6vWb7Wo5UTsVUKFwi3CX1uz7F2rWkSr5mFJUSCJ22kEEgE7P9JbniPVNTHxmP3SZeSVock",
  "key23": "2cXa6cbgsmPAAxFD4W4EZrpdZL8kVkGTQXpER5r37ph1m6hJPa49NJRGPMkuG8favaFKNhX3uTab3UXVVAvFQPhv",
  "key24": "3D3AY6ReRRESjGCVWthNPhGbXTvf7yZJZp3Mnj4LjGmntAx6KUB6GcueTM8i3hMXDqeTsFZQHs9kVdJen8imbBhi",
  "key25": "4jJzH44uzGkAk8PLZ81JL7AAQub9gYXe4AJLJeWDRdtAjwpQSAqdKHXq5HXU7zgxobXnM8GxUHhofKLJGCxLyUt8",
  "key26": "3MppH2r6CPhoHQk9bC41rJjNSLfNwuqDwCDWDQ53CJgQ59Bjmm89LPoU8ymnjUrGS1umLHCorgcGKkSSdpuLCxtM",
  "key27": "pTuHH9sRdtV88k4TpgCMHovdY4uSiqD5URgUV3BkvYcGq4mJPofBJiH2ksxqvPLnNXbsYY3oDhftyqC5kWQ8tVp",
  "key28": "5Dyan2s4z81jcseHdy3CdzuWmhuM5sRB1vDG289WtSgkN5MiYJSu5b6VKMiV4iKNtsHdDjyDQ4eUyTs8VVNBdXvk",
  "key29": "4njMmWkJMCGKSr1hqyoFJa2kDbmbKBcunhCnk2wCyxpZzCjLP7AWD2Uawkx6w57wksHCrgRbiqK8cUCuEK6LUexz",
  "key30": "337E9v6j3syTg7rYRHK3Vzn5j7bZR9jx93AQbMRQQw1vfw36UW7QZV2Vj4jP2nG4VubREvsmTW3sEJxMtZUUMk3U",
  "key31": "3xhXXeATZsfa496KqGteezzWFvgp7ZBvkZL9jEB984y56VumaDzbEQVxqD7JoHmU1Eck6xkFWHVSPztxKNfysn1Q",
  "key32": "2bizyVsCpPTD5XnWTW5qSYEFEP2PfXdXKS1MaseykjtWHAmiiCgSQrkSHCvWzpSKvcW6Vt76ksoR1eGskz9rGGdS",
  "key33": "8bv6Ndn1kRmPWDHx2sD4eEgP6NoRZeRzfaMT7hkojQPmDRkhXoPjWyR4JduiUWFaNQkLYpmTPNV1W3MaNpSnyWi",
  "key34": "49mqGmoKx4g7E75iQm45p7htKZb9ayP3B9hPUFZgZraYkMWiCEFjo3QhJTWZUxgsMgtJ8gMZxjJpSdd9x88Pxso7",
  "key35": "5PTzqZgcLgjbmhCiuPwKAD2cqKaGrEHJFAg8RC7iEFrNPXsKUSn2FcJtSmy2uMmGutiPrJRAXjg4Um3BtdN7syD4",
  "key36": "nYAWtrov33DK3LWBgbmT31dgiwjWJgrSZhvX6UpFAnM1o7b1UquyJNGkje6GHKFDi9P9SBTHwLaU87HYZXfBoAu",
  "key37": "2tRVkZHHPvE7fgZLmpWbE7Eb9SLUor82NTavXfshoZ3G259KFeU2LUesg9tnV7id5tLwyRVsSendUDMM9oU3FxB6",
  "key38": "pSjKFAJYxM9UM5N8arL3tSggKGbb5KPfWaqrS9HhFGHTLJNDALKVW6qe9hkjPTYceTvRhddk4AvqTU2fXbAxAzh",
  "key39": "2oHyB89mH1ea4vL5a5FmGWPafYEMQfjb45veynajVwiP9dP9zSB8VNhSKVDXiiogr3T71B6Lm1XptEfE6AabhAAR",
  "key40": "4uphno7dkYbaztTnf1mWuSBb4f2U12tNFC69rB3BtS1DzVcJuaegi1LfiSSWiL5bUKEgcQZkHKdFfU6N6TYbrFsJ"
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
