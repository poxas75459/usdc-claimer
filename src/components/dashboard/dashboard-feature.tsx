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
    "4qh9QFpDqSoLC6oMqtEBib9F8jsmtZnEuwmJ6RV7U4qH2rj7t1615d1fcxJEnupfXBezBdCD38rwdsu97efVPm9z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vJTvotipcEitLgh4k2BDQMDxGo3XtMXy7rTvM1Ycr1MPosELkKYyTJ3UbvqJeykTcdzu2rTGGi51vACcmTbj7mZ",
  "key1": "5Z42KqmTrYCMFxJhsCyxuR7iYvtEG6Wumjzb9eSUX9F1n6J15Wu4iNtSLCx695gVseEzkpm5gqsjKNXwVscGspeE",
  "key2": "WQ2kpxsWGXQZ333wbNTTNzvvusJpunf5CUKDsinEM9gEDn811NLWL6EwhivWJJACVbZ6Nvo21xZNuUtGxqzCkKR",
  "key3": "5rjSpMM6RCjKbvcTKiJrfRj9KQLFk6wS6EQsuc8W5G5d1fpo3Wj1oFap7H89RAmzb8u5fHvTpmNEgbwTnct9nDNT",
  "key4": "5MZakhGycU25b9K6RtSdSjxy9SQvQWgdHXAZXUU9NJzFYoDah2Y9Kd8qSft526L8GpwU11yNFKqxwB9C3fwWwCff",
  "key5": "R7KtXMaGH5MrgqXHF82Akce6SPMjXz4XL2q4Lm4w9x12KSTNodGiX13NuVcVTsp2QKb6GXtiXpurBBPA879Dtx6",
  "key6": "4nHvVHQY8nQAQN936eK3t5dbT9Y7QhRPjGWG3ndAzGKMCPRs9xWzfquUWWBg1Bf1v9kxwFVPTP9PkMEz5fajiuER",
  "key7": "4LQ3BaiQXGYVLqiv59rPjCA39aMi4FEnu6ksN1t18UtbrBmwnLH7D8WDNoRrWzhxR5Y7FYMsbHrb5zRn9h4oJR2u",
  "key8": "3DDd8Zk62Fbrii9spHuP8DZHSBvRhss7y5gYWvxZXnHwoK4NZiLLspWf1Fho5L2BFW2PGX2TUmn41ASkdKjF5Zw3",
  "key9": "5EEseqwPXBYzgg16fWYa9LmGrnzwKjYxfvnHfCdVJTaribsXdn7rZcxW9QY47hnL6LMgsxUTWGj1TT625kMwJHFz",
  "key10": "aMZ1XRSFruUc3GcaogkfxfYiSHiWUtHCFz7WdsdhocTkdKy5znNBnXyhgBEDPLCHuMft89LZ38amnqvffGkZ5g7",
  "key11": "3qGX5hbh5xGHoDgBnGtJs4ejVKAAy1LadYcjdHxiNSSHFM8SL93YKDfmfaoKyCxHvrJvSfPbp4uQxkRd1uPJng77",
  "key12": "zUCk25ZDdsH6DzNFbtZ82GA46pHGQ1DEZmdCFTfHqkdLcr2B7iuoJmUtCGV2heoGXnKUBPkxvTmQQe2HUhq1MQP",
  "key13": "2wuo6eAMai75y2eyQg3DbFpi2bx9Bfksg6y1Gv8bLfBeSq8tmYciSvQMBNGF49iP3aVjcvcdH6QJEscAEmahUqgb",
  "key14": "2m4SC4mhx9pjQxkeMeGjbo41JR5Zdiqztgb2pWSTXf5GuVXkLYxJdSvuwjMSftpa72oSmfvv97ArKor7ALj6zot1",
  "key15": "33Gz3m52S8AQGBLMDXhnQ7MUopvAWqVM4pmVbFixCoTLNnoeGaunAy6Sem57jDhEdxvPhgtr677NCK4EaV5u6kqJ",
  "key16": "2tMSNXeLRaykwbtY1BqagjbUwDqXV1E2vFkcsFh3FQCitaTBm4G9bASSiDatkFK1RGjdr6QAnpj5a917WGc4HYDT",
  "key17": "9fJ12gV2rryoYGK4ZFJCi2o3kmzaERBLxwMYGdKywMgmCtPzYskyVjAc7SKsiQ6nB8AvEabDgvCbDhynWk8YoEz",
  "key18": "63GkfWMwM9TJHZXULdCn9dYMKL4zvEDovbGf9TS1cy9k4MtEyaTkJ7dtVeDF7kp6wX7qmacNdJa7L9EboY4GgJ6U",
  "key19": "4VJn7NRcsTWFh7LYj4EYiHsFgGMHpXMnbyG6tKJxKRKQSQidL3ZNn5ojPEuNRxDTSE6z7YVDMjHUECzXvRnKe56j",
  "key20": "3QD9RpbGkZcn38ZsybaxMCQFkXB3hcZnW7SQ1jwd4F1Xc5bmzprFosdiLGyPCvMCyipF4mtUCr7VjRDvAePpLuNE",
  "key21": "NnHRuLX7bNDduzMutNVgNMXLycwisN5rYMa3pwwng4Jb5h5RNDMGYE7GdxyHEonQ8xmd4rbtWhY2oBttmBYLA5F",
  "key22": "9PjbSTPjaJD2GSEnrVHFwDFig4pMxmT3uf9UPV3oS14CEqw5VRFiMSNgc3SpPRf9KFrj1r9zKGGFnBdRSeMdcA7",
  "key23": "3V9QpqwgLx3Xq2ixt1bRTiyNy9REzio8S89XKohbBy6dmAY5VUSiJeYCrodooETbBDrfMoCH51nBwxt8TQhEP7cz",
  "key24": "51nX6nxhFobZ6jzauw7g6TetG39WzYpziztRwZRUdhFHSNZMR8hcMMxWxJJjenDEet8xJMriDXy7DuhUL7Gyj1zR"
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
