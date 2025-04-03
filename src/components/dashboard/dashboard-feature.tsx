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
    "5aUAUuU4gTD5zQKLDbFhREx3tRVCbnNtwu59fZFQDrKXJudsoZsP4WWZHkuEdT4bgnaHvLJTvfvTTPht7N1rFM8h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xgg59BEntqveSKQBAGX1DBTkFdTo4Pcz7pZpFJd9LrEabxg1HoP73rkZMRE7GnvmsQxuLViMFUnCPYHL4JmV6wn",
  "key1": "4yGdewPzvhjmkMSTWXbEv3EFDX7sULd5No5kba3jt27dWP7VKJkKjuFjMPa4S9aTjPqmqXRG2HEZ2AV9H8t5Rxwh",
  "key2": "4Q8qaMHdb3zjp8LjHtGyJEc2Y9ziXuaeatqjHxZ8i2WxeBKmSLni3MR9GEpNKQAyC137okZwDx7HshLYzCayACr6",
  "key3": "26nGT6aTPqsbPbj7ig2c1EVJtCCbToCEymBdXqbCy2Mxs4ZnBj6RyXLqVRfQHWkRStHXWStaa5vpbDaKfBggQbJP",
  "key4": "4yS6uY8RPWtwwUv9H4oJq5x2g3CtFa3v7NNbrxkfi338beRixaE9NukzHE2YQpWdvJitZEkGB4XE8k12Xonu8z2v",
  "key5": "5RtLM2LwMqEG13qWck8HMJ78v5V96213wj54jj7ipy4WEFEHnLbnoAFGpUDkEpyJyazGtEKX822Hh53RQKjtT74K",
  "key6": "3F8TGnEW6kzTrXUuUxPpFWREWuWnDEWqCZLScPvwZhgbLqypTPTbrsHE3ArK4yfUpcuiYbG3XZbYo5MgmoZ8v2LQ",
  "key7": "3fBR2Cu1mQHAcfzCbVdTDtbjyozF9qA93T9EtaQnpWfxGdn2R1b8NXR14pzL9caRr7E23kG5SyYAsAhuxeqabiGi",
  "key8": "5jCfXQhJzrXd2SL9heDSHcvUYr5PBG6KMoGLjWL74hWoWhpbeMj9BtPxnE6dsRqJ5ugcaQwbXzp7Hcor1zmHLoNx",
  "key9": "VmMnGLLZrDPk3oDVqcTmEE5GW5tyfKiJCT1djWnbeFmosDUcKD3bBUS1kUaEqKaTFGdqCQqBSp4xyH1dHcST2mm",
  "key10": "5M8zJTcfpeZSgvHdi3LyaLKttc6pSpn79BLSEQAHMHjZFHFKPtyWCP1Eiu2LVsokUgBnj8jKaBd8mW4ejF1RUDiR",
  "key11": "wH72QxSfeL5rYe6GNcZwJu5zEKa2SW9FXmoV5acfrTT67LmBT8whwQy1W4wDkyUHze8uJw5696NFz6XyXKH2q6t",
  "key12": "3in49r8bXqrEt8yCsMYgvRxnM71fg1y6dKrA5RTGLY7GvQB8CAaYpvyhndmkeh4oJGM9dA7pQ7MCRUr9gjQHLWwL",
  "key13": "3khkk9GcYw36zdz1jS6wTsiC2PDvWAWwYPMEkfcUfKtDGHnkoF8Wb2DcseZihYoFGsFSio5w4GA1BoxMJeTy9fxb",
  "key14": "5NxTqEgNcae9gBAW8ftTWhF4qs48nC3YUxbPJY7pZE1aMJ8MJAMGW5LKeV9x89pF2qiyXELbEecGdegWzhkerpNm",
  "key15": "5w2geKAxLNH45jAuFZ3KHbTSUanGW3SbX6cEjSRkzEiJ1vGHNnTHGqGLK6YQXYfNSW54MkVd8PpAyMWSFhZdssfB",
  "key16": "5ZqVRw1tuJDNxukeAa3AgzhuBqaCuYR8jGC8KKeNU1vh1u4AGRBKPZGZqsmjrHQLU1tgR3PP1yyEWKMJCJBFCF1k",
  "key17": "4hunwyn9aDj8QHpjkPSqCATZswidiYHvgUkdyg3JdGZGbykDEcm8Lhe3j5BNaTcnzJUEpjtvngYbWi9kq3KM22vQ",
  "key18": "4CuExtGDRrnELsDUearpQfaVafp8PFAiHzpXg76V29gcDaPCMEpaRcS7S1fU8X64MXFdoc5Dh5YBc3rWeS8WWyd",
  "key19": "2Fck9rCQAbHpwMwfb7mcHNTPMUy6StgWKDiMajzDTEb7wsRF5JRkrRhKuYqPY8r33ZybPqM6UNcqLqJs7co7bmAP",
  "key20": "bqkNpbxgVLUUy98DgzbJzz4wsGTGevyMc75e9VooT32MDcAirVVzzAe7HyuC2qCZdifqbSkNeYjtM3G19Cr6VNh",
  "key21": "4pqtqtyioMiDUye6fcyMXUvUJD3BGK7m9EELMpJAYMEN4YjByrnBgbXezGAKxYLe8kZcNr9Hd7AmeAQAK9XpVaLk",
  "key22": "31SDwbcgLwQCXAAnmA2QHqZ794nPYh4sfZ8aGsBXurfvEAukKeBT4TFEq62CshkKMMzcxL4TkvsQxLtm9Anw9qxv",
  "key23": "28dc5iEaBdVndbP8kF99q2N5ARwf5vc4WMneZVEf5zBjsSWRoEb1Aho49a9R88RmxCr4gAkgRgDVahH9a28WBJZb",
  "key24": "2x9ZjjnTGuYD4XQFwDUj9KqJQGrm3WbFGWspPQGGW1ce2qjPd6fBD5zbaZd3ckVPyeXouBHj89hrt89zDW3pSsSw",
  "key25": "LjBd2wr5jvCQEK1Xq9NEzMj1J1V3fm2SEW49q9Km7Y3Dcf8DNjVqTXEKPb2CJa4BWWarWrXNC5s74txqw9XD9uM",
  "key26": "5Tu6oQvoyzuSYwQoXV5MnrUS8BAda77MYapRNmynJX65MJTQzMqH7AT2t4quuLuAdRdVsrir27wzY5md1w7KNEG4",
  "key27": "3SuF4K8SkKYamToQAq85KfqtzpXkoTWKXxV3w95LGvY2puEC3KPnrfDND8ufvrW52BdAFdk9GL4y7tMoxiaWYTpc",
  "key28": "4NSku8w98mThpjbQgCzJmDCSFTuyfjLtPgCe4Cae83ggz5iSZ8HJzujDTVQGP3CSexj3LMhh7ASEJP9wBgvpRoY5",
  "key29": "9t13gBUJmnd5StLFatfMJF4chRiccCDSAMRnuoMVjBcqV1bCqoMsvfWJayruXn1JCvne58TAuf395BEJ95jVyNC",
  "key30": "25UiT4hvRFHPGRhzZoeGZ1o9F8ZruJzXP5buCbGNE12JkHHJP2YjEmq7hFrk5EQTi2Gtt68MK9KfkPmntGVQuSwG",
  "key31": "5gaqH3Y1KdAUoB7fQniYn28gpExEcH8f9313UDHmv3hFn9B1Y2cg6VmTYEhtbi7xA9DxkFDXMJHfFe9gmzM36yqT",
  "key32": "2vCEJ6RwTz34FYdynNbqqBNbrroi3s8SQQpCYoDyaRRu8DxguKXRQXskavkCucjMMZeMEDwNoMAdi8pex8B7wGyn",
  "key33": "5XrSNx3A2e93qxyVZuZKYJ9jFQz1VWjS1xm6UxkwwusMxYQdpdhEz3mFwhWTsNe8HShhzUMgqwS8uZCu4zvhYv7a"
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
