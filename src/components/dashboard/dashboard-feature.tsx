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
    "3RKUE2YYgaBnEX66qMLrenuT2KNCgoYEswsyt1fGG3d7S1X2rFsRJQaav713VeDAmKz4NLHF9ZfrEFZVux4yRWTB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DuF156bDXQ5ZVXRLF5qUbZvyNUGxh4SVfJ7c67kWff3g1Vzivz9h34NcBCTf5WTP2tVBKtYi1DYfu5MRRMQqAQ2",
  "key1": "36BeyjgAjiCTLWdRVFa1Y81SipqjdcYX4pCVkDoH8RfNJyA93ev3NDijcArVw8TAiQsWJABEKdCK8K2g5VyaW73N",
  "key2": "pEMzydqt2V2uH2fF5HNjTXQ2sBjYGxM18c12zhEqSpeZekpom9uU3cAheXUBnsNi6dbz4NHPnHyVfer2bk8ehEp",
  "key3": "5mDFwVCGdRHyhLwtgk8CQwRAxAk1hzDgbkABZqRPreijowT9gUtczvqE8H6pBae7pLtmuunLTwuhD1hhaYxUMDVP",
  "key4": "2Y9XmzvpSbdFuEouPa4GBoAZHjwkaxCMvVyUTBGYC7v3dD7cshgjgkP4D73deF8BVegYZAnjvSB11DxTSH8u7kjr",
  "key5": "5TdoEEsk71nDdhcbPVNparbyMjomafdkA3SDbj58yZDC9e89fqfArdTkW6a5g69ATtczmBu6kDYyVCAyNQQ1vNgL",
  "key6": "Qcw95BZtu2SyYsDAvL8DwXuxCPkgF88e9KexWmivtV8i2LHM7U6Pehkm5WXEyH3vkj92TuF2rpEaWXGQabzDj63",
  "key7": "3KgsfQZkBPpfgnkHJznkWrZco45MDc6KGhsKsK5zre8JFEzwLP2NUj6RFXPupDZggzSf8fq4uXGcrSEhpzYhp8Fh",
  "key8": "4mMLaNodtzibqngZYx4ayeTGobftk7KiRxGoALQh3R6JMHYCw3CzkSeZeGcKHQnrrEDu578iaC3W9UvSqK8qy9DQ",
  "key9": "4B2R5KbqTfLza2XyNHMvhq6Ex71G5c53c2d7Um79HRKUUatbAzeDLki7rE3oqsuFn5WC7z9NXGpEqG68q54j4A2T",
  "key10": "3GqLkMJFkkonLRxnuiVbSd4wT8sLxt878tMThTeVi5pGwXKyAGDsgrVYEq35icN42ucHHZDjAsPAWU9xRSpsF864",
  "key11": "2fJHFhCGkdW7Nc3thwxWQNqeYFswKBAUyG9NqR7L49JVQmvzQy1yoSVf24a9SakxKmSXTgcwjHnJCHpAPwKBPaS7",
  "key12": "2Q9FDKD4UnbkE2b1edPWqWYsGMfTDF512btMbkpFryBhxKVWW2JJGvr2QSpHw3qKeeJjWcJNcTM5ibfpRUvLoYBp",
  "key13": "3wvVbQ1oLX9mh9Yhm6ZJ8wxNR7uEjU2LLHXBsspzCdkVimwpo5RSAjNwfmBDgdiDEEV9ZcpWruzzPBNhe4weey4X",
  "key14": "ZPLwYgwhojUJupSAvwPqse5ui3Cr1wJo1xcKBDkFhTmFApoRRMiCZcihmvKYwe3cKhKT4rEBPKDQYZdrUSMLjv5",
  "key15": "wNLhSiu1TmsugeAzaKUhmp2HSqyiLT943efPZhxZrPEvfbQJAdSXkHxCcbHiRSobGqJQPqDYjpWyv8FXT1idVHV",
  "key16": "2UppDkcGq74sgaG8bAQ2aP4Dk43sd3vsqocU4xaooot9L8bTu84aazfnN2AkeDdaRSY6BHGzByogRLQcvDB1EkT6",
  "key17": "3xVwbhFTdj41MHt6cQQSppY9mcJNJeB8odLNhjVxB54dzNpCdYiUyvEh5ocZakqzV3JJ1uo7yMC1GDzjYJ9a4TfR",
  "key18": "2Hs6EAcrh6L6jtkF38JKjcjQXGKCEEFb2CN3y5sDvhiW3QDm3nk8yvBdtAgs2amGsQq76EYyF7odrieGMX1JeTKH",
  "key19": "3o3Pi7G9XMiBrR7iswt3LDEaQdg2SyW1UPaKMjq7ChW83apGZiD7hr3ww3G2K6iqz1AunWNKeDMHsqgjZf58ipwR",
  "key20": "xAVb94t8tDvpewr4SdKvjX7ws9GcsEQGkdFvRMeiKcJAV8enZE83KjKHN6pAEHXLkzpNsJJusj8wvS7vJRDiGiX",
  "key21": "3PZXp5cHWFtaEqJ2LhFqDo6X9CykudqUn6hUa4kuiF4WkqWC7cUafdPBfaQLeFKF52cZLCrcFsGnzvxcMcZVP7AF",
  "key22": "paqhAGu9jCz78abDDqjjJEVs1hr6NNuwPJzZsJeoFr8bgAJgd3y1Cr4nNnoXh27YPnPRg9bKtFvhFGn3E6GpfdP",
  "key23": "5P4R4Zqyw3NUQXfBuPhCUFYbjuP5upFqkufeAZ3ztTmnVFaDKWvZoL4udnMp9btpPpTc9rbZaWR1Yqc1L7QtQQtM",
  "key24": "zRv13sjjiN1HydHUHwR1pyk6PzHFqgZd7EHoTowdAxJq9i3FJeC8rwGsHGmGptFUugkWgTBdByRWkVcNzkzyFMt",
  "key25": "2KbFqbgSoZ6LUzHR8QyGzB3eByd678SurZpuGrCLJdCJXLKdLvgCgpFEX25u6fxvfWsqJWHJLnTNnQfJPc278x3w",
  "key26": "ke7Z3ZKozb1hGbqtspsnXbaqC7Qz6n5PgKDSpkSEodmQZo66paAdpm9SyXSWdcFYGWUuCkCdzGtmoiePkH14jyL",
  "key27": "4nY7MoV1hRyang4EzsD3UtcM7s7jtK1cxEGmaknBBHneBFj9C3PrUHcTWRrr175swTyeebUqMXfAWqFr3uDcgyWz",
  "key28": "2nHVrMKeaL2tryx45hFP4iqMJz1AH7ryDsFxiBQM7SLvKH63yHT1BB5sPvFHz5Qs34TSL61BLGw8RhD4QYdaqFA8",
  "key29": "5FPuZs38iudaxhgcSy2KjmK17eXTW3wNx85cn87sBqpMTgMi32vD1BqDw2fmVXcKT5MsBvfMZ8vWm7LyLJjpivwi"
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
