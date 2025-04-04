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
    "4hV3A67gR9ALa6sYeRwbJ9kyps55CvA7MRxk8UUCBAy2ZhFPdUZuSRi55yvZTeUP295XvVnJZKJ4RwdQq6bTSPCY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EAZHZVctJu7MLTgGuEBrR9f2ea4AX2Pg5iXCHuZoAq1LdyuzXcy7b6aaB8jfxSBhpMbuXVcvNLoqDqQUqpthJUm",
  "key1": "hsCczqzHSzChF3HJicZiJdoKyzz15FoiCS3cjQg1cyUkx6P5xj4gNGgCTWb8yFmjETGvkwjgBcevpPNQmMNnjk4",
  "key2": "59gz2cwRdr85k4tLbwsVbbXwiByzCE5GUaVeUwXAGWTqq6Q8ZiX4DF5CfxNsWNjmBzjdkzErcMc4VKVgmiV156ff",
  "key3": "WhGA4yJMFMxDaf9THqDUzriR4GkZMQMVL3czJTGAVU93pqof8nmkwVXU7cDfpGMkpTbWouCiXNDjUZ6c9fQxiCB",
  "key4": "5ekV8oiWmgioPbZt3wiBCUWj1q8XPFCdXgVv1pqE4DvLGQig1iRs7jkT7496JQRuatotjJ6czeHyiyw72crz4X81",
  "key5": "22CP6SRFqz9ML9ccG8dkJ2jx1PzyRiyjQ5ZddaKm9tBHCNmmbhrrHPQ2kMY5Ggt3Y6UVE1nstssnmEyiFsmQv8vb",
  "key6": "2SMMcynw5kEatxfeqoeNN6q1vWfnAQjaRCqKYiUn2bJmyCDrH3oEwcb7kRrVs6MJMq4RXfRtnja6gwR2rBosTRsi",
  "key7": "3E67wfXuo2H1M14dEVMRFUHquvdXntrehyy8rAbc978m7tP6utrXJiN5kX2mXrUNWtS6rYu1EBQWWga6yrG3VM7y",
  "key8": "5E2YxoTozoodSziVRfgVJSf3G9WbZNdK943ATrpDgHvq7qKrLjUF7SFN3mms6gcYWkCrCszDgat3jkTLvPhEpYKH",
  "key9": "BRqE3AGuYnHLdKL2SFDFmitY45BQ6C9RMwzL3Suj1Pgw9Xi1xMLHrQPp7Q9GvEGiH9rYEXG4Rb5M5KZPekWxgHt",
  "key10": "jspZ7npofknnmVyNQUvgCNE6CNW1TxtR2JB7hPHbccdcDfTGtzes6sr1usuD2DDQyrURUVpfzS5a7uiJyvZHbgS",
  "key11": "TSgjT5rKJ58AZrWdj97QpiLR6BtpH7GSZXryWwe4gmVBfbTA5xLKPtYSN9vLi6bkGfYAf4CYa2pEwmUgviefzG4",
  "key12": "avBP5rQqGMyEgHnNJH31yjzoFPWgX5gd52XAW6fypfuL7r8JbxP6VRmVC6Hzb3jkJSAMXC9ypsbZpznQZw7rTLV",
  "key13": "4SHYTJjS4n88bearnb5jMECwjDUtHSKAJbqpBZPgm2TmjedXbc6tu78FUYQfAdLS2YwSVg4cbArcYPfwrwmBkcK9",
  "key14": "4K7NaAwB6Cw2xafxzUjWehcrXvxknzQm1gt3JmJh5Kf6p83hYXG3QUW7HqeRoTxPwYCgyXzC5SLgUM8CxKV3FpY8",
  "key15": "GqSeESykuaaeWhnAdgpBdLnXZHXTcyDhbzcHxFJMjnuoh6SBYEFf29TCnQXGL3iqa1a8XwMvxCMhby9ZzcmWJhN",
  "key16": "2kUJAiaczHKmVgrDzpbwHE5nNk2Pwddatnu7F4YVL3viAHSK3eHo2R9M2CwsS7okUY9DrLwuyeqPaMMZJ4DaZgyu",
  "key17": "55wa9Ce3jsceM4HWb4JV31iuPGLTEDRztNoPB7Lgnqh4hcfmrTrwvKrX5FiyuZ9EWagiLY58NZ6seb68fHCVVSaU",
  "key18": "4LV8BdJbBd4susx952g1jJeADBM8VS1Ey9R3xP8DKP2bgCxmuPhuajuVP3cUo1qZDrGpKw9wZ4wAygqmSEwKXvcP",
  "key19": "5Nxx9CvvYArpn1ikiXFuyv4n91MYLp5We7U64z2GPPa19EvwF26vBkrjGt14qFWxiQDCPMxY6LmsJXJ3m9UnZycS",
  "key20": "C5Mdta4tzGviAitGiSnopP9cGkcw6BiJF4y3RDESrxZNtHNVsP7bHt2NuizhH85TSvgCji84bJDWgYQAGisccvB",
  "key21": "2k3SGKYK7gyr9LHx9f1oLvt6T2YqbMWt9q8dDGyhYeRUC1wUzhG2EyPhHxUy7tnJZx5Rn9PVR3JQJLK2a8Dp9ABT",
  "key22": "5syk9v2N4jpM1yGsU7JXtgdashVKiFFEkgrQfdieT14eTMDzeE7frXdZpk9aDekzXVJtXBQYBCQQHRXyq8oNMvBF",
  "key23": "5Fhckb7QreKNEEyyZeZFwunBqjx8uXgceDNLYCZimQDeAyu36DLbM9AUVX5Q4hAQASXGaHkRyHVfFNrhXn9Ydbb6",
  "key24": "2Rz4mkydEUWkaHFGefaNBhHiWTHAk5LfkVM7xn7o6yC7t2JL2akJ189mpPsNzbmMvG3hB7ipepGiJPgGz1u4ELBA",
  "key25": "2uPAi6hcCVHL6WEHewgJF4QxPTHjdTubY52ppwTjHYUDFpmCyaFoL9gfgWwEGW7YJs9J9XMqxj1zK8jfqPDo1YHd",
  "key26": "2bJta58v84sR3WEfScN9sCy2tgMwHGWT6uts8iQ8HPDoyvEYUS98BPqNrsWUsfZp5Vk5ZW7zy7YkeNaFLeFLAgoT"
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
