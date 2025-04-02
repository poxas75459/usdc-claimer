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
    "2JBmT8kti5yNKK8fW3ZQ3dkM47B3uWBnt4sZ2khVpSoqNExG98QVYg9aLfGwKQgCc3GCrWwZVr1gSEXVH5f5Ti4Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nXgsaBLq7kBh4fCp2cseGqQyQA84Z9BziZ6ZYDFb6LcSb7yW3fZAT1sobn2Ci2M8dhhWDAijcTNiw9eM59K9xxL",
  "key1": "223kzNBBe4q8YFt8ZWhEWG1sc8uobXonxrdsxU8k11icCuBjbzXtQ5cVZgXkYgi9c2hUQp5uBpMNZomRjz5fJr6P",
  "key2": "5RPnp6KFwbKEUidq438UGy7eivLgZRuyMUJqdMExDESwUAfA4fQRkUbFZ4QJ93XZmF8cU7nYhjPVQ75DHAW2Jaz1",
  "key3": "3znpFsM4cm2FUTLwgHr62uo17YFg85HPXhqimFJrQXSV47KsWNsy2WPyefddViQyZS7TBJ8jUq4c6aXWeZhav4AC",
  "key4": "3KknwzdrPyG29k58h3LmQ2SaHqLZfwdR3STwa3PpFmY7aTVjynxiuzv4tveExTPrq2KRWatVF6m8EbauiBJwNhHR",
  "key5": "yZn8gbfeXKKZiYCspgFFpE5SG3tAcmRb4DhddF4Uu8R4eySSuoeGXbUpdGgfvqrrySvSiwk9u5EZBQzS2Z8sSyn",
  "key6": "3Qj4xKmPFfxaVv7MqVmMvzjyR2iGsMLBhGpHn8p2K2XkPNfpHEVr6bSvpRToo2XdSAtKDMNut21mfAEUu6DjAWSL",
  "key7": "5HC4RmA7Rpg5yaqQD4y7f39UDYzmEytiNESiSaL5E9XcTo7kmKd8g7NmAE9RxNTDvW4gNj39WEr2nf1zRCJbz98X",
  "key8": "5GTKdFtazozsp6L5Bs1qDjnxtm7PDnhe1VeeSyqjy45RFmcsHg7uSz2gR4GBgSrWm3rCFjZcfZvyeV5Dzv3bcW82",
  "key9": "4pnAVHSHoETox5vUDRyPLDCstraEaoXuE8TJt3pSNQERaLWPvq5QPBBK6nJKpWTRAj4tuaVCtvXJiCj41PgbTiCT",
  "key10": "3jijNRtCqfAzUYkfu1KCpDikuK77rNEMT6KsN37d1kTqUAw79C3BjyRwN35aQ9PVKJM13FyjzhwQUdJNasu5zNNb",
  "key11": "52EBwyUofWFg89V9p937MpUPLEXWGrz4MbZ59EJcsWxamv8nsYpKkPxPapSCZHVUhLdCuRYCCskqD7LYHRD9VfSD",
  "key12": "2ntA9JYtmA1CssKqxg8AJiDQd124tQqAJzikRkWUUXMrtuwhb7ykMvYCj5zUkLQimio2YE4jBosUVumesQGS8U4G",
  "key13": "4u7ko4iMUR4dKACARWVMQazSbF4F5RenxnCHP3eY9bDy2qZ65tk1qw9vey6qB2A5uy9DtAvo91NHi6vvLovnYxPC",
  "key14": "swF7rn4MATBhRgribf5wc3k63GJSnqDvhWtr1QALytcWnVSnJ9RKVULzQxzwpTuEktZsqD3P3nPz7TmMXZsZTTT",
  "key15": "2tyi92i4qtp52cm9vYLn4aUsbosazujAE3w192CSCFCk3DsjsnT1DyrGyDx4RPK9MNm31HBdrR29qZKrag6yxs3b",
  "key16": "GsMt1H3CxgH1hoMmyKqcEvkqq9L18ZCPcXpsxQDStoSvdASYNtJmBMKnUXZzyYrHmoKVKYmKisHUhWiqqLkNRd9",
  "key17": "Js3PYXXkAYQTUtFRfDagsK6x5BbxvQraiRSuuBg7K3CwP1i8N7sSuCMafRguhaBz9pQnhcwT4m5VU3ST62KpmZm",
  "key18": "vbrRCcJXKm6Wk8Sbmh1fWsT5RPoSefiCsCnVCPyaPkKpwwrjCzvroUUEScansfNwVHUS7nw4PkKK83J8PhWmgFv",
  "key19": "2whACKmqn3vUbjJNYKfxNLJtpmvKCWqXajnPUv6RsEydUR7vMnfFSPq6G7jWqdX1nesxwbtGVYNPuMcgELP3norY",
  "key20": "4y5AvzhBumDa4EzFEFFn8Keba8hHtWnwakr5r2d1NJ8M6uqQaJ53RnJ8X7v6hw5aYzE4tyDWNu8EwcA7zcHZHp2j",
  "key21": "61n5xSJh7j95hMw9kmhaHKXB8XxEEeJsEbaGjKjqYMHcgojNFtS9EdXMhJVQEv7KYkAHzywTYLjJt9G4AhKKNSNM",
  "key22": "4P8LnuxEEzwgW6tyhr1e8aSyoXBXaDwSWgsecBrZwakQNsXxtxK6AxE38RjcKoS3SBheVsjjAJbP8vXsN1pShSwD",
  "key23": "3GvsGriybFuXs2TfzWXoWGqmSF2MTfHAPDtFCeH1qDVjhNC2jULHkZC4msx44D6XEoTPsZuPGNzhECdefaKAQ81W",
  "key24": "67JRKodbdyawnDPjgqaFd9Z4Lx7UkfHBfuhTh3g4q3Fa4cfUTyewpeGrXo9hY689Vdk9LtoZ2DKuuGj8AeD1kNos",
  "key25": "2qzfrnWHgsRtz44NaJoKFP9FosnvpdNAEhJkKnTSNtU1JUePiBKpBEiygnVtt4fX8oJCp6kG43UkeFDMg1oCvKNf",
  "key26": "5nzH2JSLo6oiR3TqWH45776CA23maKQiB8o33MkWQXMsYuEbSPXnBnrA2fQe52UnjJH4dBoonDyxS9kmXwAxcB8E",
  "key27": "hxXBLFE89LWk4hPdT5sUtPZzLqafEUAjovGALhDxsxhgoK6txTveAWMfH7dcyXuz2a8c9DdqVw9V3b1AZhJMeUW",
  "key28": "29vBspGR6gs7MSLHXvKr4LBh5kzCKLBNE6sDWLoMhUP9uoJohmRA1B9gzthxKiCwLVsHriSu5Kaeun9P8QQdvTT2",
  "key29": "5PV6tDhV8uv1Xr2b7a85dS5AU8ppw8t3CaJEYqsgsye4xGDoRnC2VdtuXCbTe3fQ6qC6XJ42q9T73h3GPHaCzW27",
  "key30": "asqFTjd6oUwxWRHVkUwoweJXykYwCDsPnibDnR436H6k6LaJ4E9ZfcDxViGFR6SLdmhidccLxuwEcDKX2V1T56z",
  "key31": "5RC1YMMXhaq6L7y9AoxBFGiaVh1fwNH6g1pwtdVfNaHWbRZzcAkJJdxWbrN249oh2FFBQC7VEL1iMBt24ceUhSuE",
  "key32": "2CEFJx9jgaTm2zERunUr75JzEZFGE9CWHqK1kVuScFtY3CskoWditAC2cHJvvEfMGDc9doJnQVhNifLnKue9X2dJ",
  "key33": "5mUTm7eBAMkaWFdddhtZQ5BNmdt9fr8p3vgpKCFZWC6msvW8q46mW9gjfHS3Y5gy4AssMu7xBxJgfWJDcJ6WY3Yi",
  "key34": "aG7xvo6y3nZdvf9u9ooXmjyQva7TtWs1db6Xdvb6hfxQrEPkp41FxMbT9sS6uumurmi4g7QQUxf5koMPVsurMj6",
  "key35": "3mDrMJ2LbDPJfFtE69efay7idER8w8jiaCQ7hBpxJXU3MhmLg7q72LS6SL2jatF8c7YNiY43QHqVCshEHWbHsCtZ",
  "key36": "4DsDUUgjPPHoxPWahUP7gTRVNtQczDsT7gtMNw87EyQQJM3tL9ndmpVbqNW4D6xzKoM2bKEixzMTMPVSAn8iUX3A",
  "key37": "F3XVHhBhZGkruuiswhyXFy9j8CiEL2bZiq5LND2iAp2Ese3iV84BiXwmtJqvXvcVdkgKgnSP55JBT2o3GsbFCh3",
  "key38": "qiafHaeGRrZn2PtuMG38n18dGQJSG2B11h22NgUvQGsiLBKXGnRuCAUssoj8DFsEhQUSK8xuy6HbciarxzwqwJm",
  "key39": "amGFtaAHf1KCnyZmMdcRfbvKnB3m8VLHuUCgmPdUNXJejedwmq13cnmFEGouLawX3KtiyrrRSFtVTvoHocABYQp",
  "key40": "5eZSvqS2C4Yq3kNLmJ88KWwAjXibYcQ2Ynbcqp1Gy6dPiTAUVYDfK9hLPEGFXKvyLgpKd6dDsMqYPvU75jTAFh8g",
  "key41": "3MCywcPQ2JdGJhPEkaAi7qSMJVEi4xZFMDiQXE6zrrd6gbgmmKFC8GC4djb53tniGYwd5z9Re48rdH9PF2VQ36f3",
  "key42": "61wXrUSDumv76dbHjpR1QjZQ6qw57WSUFdajrkjzRyU1Yuaw5GucsgKiYZ8z9ribSi8woUEz5pnUrjHoGhF1uSm4",
  "key43": "3YWr4tTCGDGAQbmRhmTga3V2kpKfFZZhDSTsYMcej6PonCiye56pmNEv2R285dM8ewVgBzuXmMLDEtH78Xa3dkz8"
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
