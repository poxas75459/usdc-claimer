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
    "465YwbinyvXH9ygHdEJd77daap7GAcTrgFxDLcnKCDLzvBEq6H4y12AkL5ZdPSWY3zjqBdcUeirkwPtfZcv9g2A5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qVo4oQwCQ8aMvc2RAwoJmcgAvZkznkBDtwBRwkZqHGJ616hTGyyifEDw74nj7Q3EV2ttgojKfg3wBhBKVBvyQqB",
  "key1": "5N23YiBpFEnAHNyopTymmQZvYnWa4BHA4smrTjiXsiWcQj4x1cTuKd2JeWntcgC38NpiqfAK1XK7pZaFcWtwAiaP",
  "key2": "2PLLmn9shv1vUrkLuz9EED3FgUpQCQCvvHCKWhEoHVMRuxFdLasQDfFrsq2NC6EWvRkkPmNDHNKRigMFrVJ35WQe",
  "key3": "2BCqvBMWsJibcNJAwjWT2tuWpe7fkkNVDxQui4eXw2jmE6Aa7eZLK5pDbHnGp5Rs5ZTx37uxLtYe6MJFtX8jnhNJ",
  "key4": "5cRg5BXpmV2DV8FfEcD9XLviNugNLtCUBR1mzs9SfGGHrYk8SQgtjSp8XFuLF57ge3eB9bKkDNm3nLWWkdYizs9c",
  "key5": "3abdZXefy9iUGQrmhUyt5rzYxUTJCB71gCXi7KbBP63gCw9po6NkzBVSE94978yu5hVaeH2iy67PkqvAdo8fHrXS",
  "key6": "3uJsmf8TFJLZ2X6Y7wEQPZHA1eRDSJvgzesj9WFdHeUs1GV7HT7rpLK3e5eUEzqEosSzMvZt9oiQ4bMuLmhkePZd",
  "key7": "Cr53efWYvyTJUKhbHkgsW8G9A6T2CzcTWiMJqiL1TMGs7XQcd6EUjtBzHmBYEKrjSLwXL1r7ut9PRZsnMXkumxS",
  "key8": "4ctgzzrVT4DPk8AicH5JvoNjxVRuYE7SRkxfTtzYeJ3ME9dVzzQyKYavzVzgX3iEszB6KFwJCFfNPR4TN2W3LgXc",
  "key9": "4qjyzweUxetFyRFDWu5to45xFTShk8uSXQxvpSbSKx5zzzAzTwkHP81h4HgeVmFhKW9q5qiK2vEST5pJ5QDbe4s9",
  "key10": "4qUo8FACf1JUSupToATppFHf2azAQRXPinQ2BXAgniWnQxKCG9H9umiA7D636C8xDjV7jdq7Jq1ujWhfTnu4AzUo",
  "key11": "4RvWUeNDcADGH4CcXRfiDeNzrFcCdAQ6dPoAc3XmnCHupgYPK4xNRtQnASyf3nfNJ6n81FiMX7DLQ2HSwY3AvzFz",
  "key12": "4x7X7uhUj43p66udk5Ga17YAfFuUPwjHK4gVWgjwufAsTUN2GQH5QjrTj82hZMQh5BQWr5MT3rE76DtdcUpe5pwL",
  "key13": "2UJUS1Bwtm1h2i2HybLBWGAvPDFASuAvCKMBLx4Y7y6uLU8Zjh9fSW7mbADzZRWx2hsS4RGTGtF6hrRjPs7VSkPu",
  "key14": "3f8KRozBX4RH1po1RhfmM4EKugHkHyb3VZFNNe5XJfSRZABZCQTGjSYxDTK6HGnSADNTTH2ze7T2VLmXW6sfc6Tz",
  "key15": "2TeueDFWQeNAs47VX5t47NVotDCyqkRzzQJ77FTZTYd7VvfHmfojWNKe55b9jAs16sQiztGNNXB3BJo7dS3f1fZN",
  "key16": "TT19hnYdvKck3zdY7bYwnpnhxPtNN3iDh33rMcZciNEiGMK64VJTFXMz2nDbzenqvBf8j6FxkH6Lp2mS8vmcUwq",
  "key17": "4gEXCL5p33gzmo7edxi5hh2KArGNnX2ih2GNmN58AT1pQBfisGeZybK77j8jrCzCUj62B96TAU8corgLtiWmPZd",
  "key18": "3r7ZiKTmwbz1zwj32z9kMQpVdriUskuCJtwvae4wnr3MMiDX4FcqN4FdDv2jDTe87LjZTX4UadfawCaWL2AVzpNa",
  "key19": "5ajdH8bHkYYmaG4FHkbzxjKQCLa3UYZT7zsvtMcfHLpy7BxKSknAGwCnkNtPKkm3q14si3MVRa2JwQfhdASEDTHM",
  "key20": "4vsZfGj1kgrUBQ4kXkG2XmfK4X7aSWAjt429snhrBaBibWrLDsW22FKWQ2dczETWP1G5knbGUDe45DSFwY21peEd",
  "key21": "yvtTDciKhUBtGnRQehWpkBhKDQwV9hGyckSsAEHpqsea9U4AxgJ61SKx5foJFeU5Qp4Mqu8exQgwr1MeiqvDtTp",
  "key22": "39UTrvrNYJMLnpdEViMvA5r8Hvs2W5D66gw1tuBmY9hrZRri1ccRtZ9XG5tZ5ai3ixtRkK3Wc6oxPVWRuq5swkZa",
  "key23": "3KeUGQ8BJpQVERcJWagaVRTxQsHAWoUqZ46rnoVnJK2zsYZrK749M5MiHBZSPkeEZBWDUgGzPZoRCuC5zy91gq3K",
  "key24": "a7KhrjdMi9Tq4jMnFAnFUWwmeeGCuUVjmZaV3TrYyBdCTv1sQvuvP5gka9W2mbg9sjPewxJgwEvYCCqrrqriMRW",
  "key25": "4od93zMzT8V9tZcvrjiy65eM1c5HznxZGjK3JS9KNxfRJXfSSusnhboiS8i79wtdWZ59vQp5WwQX8BPmWPhT11LE",
  "key26": "2wqrDoS725Jnw1ZfMenmhtmrmKPYEkhHDMRNJgUuEx546ciHfvo6J5brydGKxyYjyxsxxgdYqxBxjfQuXmDUKSgj",
  "key27": "3CtQVpT6fHqikiWGV7Vk4L7sQjDojDAPCJ44G2YEgALY8QAuwgEZfX2i7mwJCqguGqFdUhn1gNrfbcXy3tgCJvPh",
  "key28": "3pKwhq6DbtgS6XchgktjovSgZkfwavnoXWdYsRuhGSCtA6aZg5498MF7uqqisYfhG81AdLUK9LPK31duj3Ag3s9C",
  "key29": "3tBq1z7LKX9eBYBqJyTY4A5fjy9vrh32n2HY1zo9eT3SUhmNZsBTVKbUXpZ8fy23y8D6HVpnFToMG1b7qav8oiKM",
  "key30": "3oj4DBCjZiZbTYwWeHdyz8gwhwaoZrgXZoSHvCaArxHx5i8BkR5AGZsNToeVp2Q6y34wUUuiUkmJ6xSUXQDa6Smf",
  "key31": "3zZ2e9dQnTnQNz1vBnw5kF5hd5193tfp2cAoCoLvde2aYRpxE3Bqcv4z3NqYD5mJMSVWw6TXPRmnPuMWxstqtPvo"
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
