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
    "43tFNaaAsncqf16AC9zgKy6LE5if52aewyNK8bGDqpSLyAAM4NChgjk6Pr8JtC8ac4k2gZRMYwQE9nRwphhr7dcZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mXEbTKSvVRWFwoJCQiPEgzE89Z7qNKFf1Sx5DTeFKA56x7JhjtY3pJ97zgCd2p6Hz2RFuPhpHLB218B9A5JxHzx",
  "key1": "4TcTHfeaBse3eFwqEzYgYHZgUfFakJAio95qqzt7udsJe62Loq1QgRCnFy6qq8cfQJ45GQBsb1YmUjuDQBqyq77H",
  "key2": "2pL8hwwhnD5iGCBos5aic9WgYivP9BoDUcSKTFH6LqgtzVg3pU52tNzpPUchHVuCbwGtsbT7TsvupuJQaPbE8CUr",
  "key3": "5pJeVRFLWGQ3wbzgvjzMJfXfxHxNqCvoCbWZ82ZvsmCRsyJKYCcz4hUPJUJowXH8noazbFGqa8eN6eBtnNy8sNUV",
  "key4": "3KuTdNvRVk7CRozgMD1HQQPJByj5QZbd71PpCv7bGDSze7DLs4MfUNvpz7C6ZY1ib7hb6994DF4US9Qgbt75KBDM",
  "key5": "PHkzsJp5tKcYAcKePm7yoeopfajpFRFdnBUFUqxP3ejn2Cz7BnE25sYA9y8hSo28h5Pvctr57nw17Ee8ZjX263k",
  "key6": "5fSVsGBs6fTQZXLri9gq1369LbYpZ1qf5YHZ2ya3APPevvb1s4HF3MvmjUXaKSWhTvFGc6grYq4spqS8bjrxNHSR",
  "key7": "3FhbXHFjhfFbLAAePAbePdKsHUdggMpD5BLuTz2VSDC8e8v3krXXf7FAQZCQGdxWmXd9RDSXUFPra7C4Yg6XcCPb",
  "key8": "5LRXqkrdLbnBN2J1gwNdr33wVpMMNvXRfnKQ1iWeQCni5ht3iUtFcLdpQTAwRy9EFGHr8VPWLKgD1nykZqV497Wb",
  "key9": "4pybE4jBM8AZhE13ciix6cBBcRPM1sqw8SvbvjLsBRjpQRA5BsWvq3b1pLC1MYBf8YhnHxNSRgiJ9rdhJ9WBGy9k",
  "key10": "3PcM9MUq7ZpT1gdJ1aProt3EauqeBnepxr4nCviXGnPUvurPvnSByf7XcT4k2W45vwV8sjNhiVdzsTrq2MgqcE4L",
  "key11": "5Tdj5jAe9sdTdJSauq4NqJbsVtvTsd2En1DuYnQwjj5TfwboSsjTiwEo16iGQmUNxDrKqpUXQUXhRow2br1jBucq",
  "key12": "33GdbNxgMPRBvZC6GtPaM6DWNNBvCa9mtQhZFBrYaVdFw7zwZMUsrVgNQjNSRJYPVHTp6Rve6ibcdFkujPwTuRvU",
  "key13": "3BYhumLPVScSfKBKgHYnndf5e2Jdoo5MpXscNyqaVTq1P1AbNRu6dxNBj3u4QLPwoXeugrmTRZHtoLm2tw7tU9ay",
  "key14": "4TbGz61rfW7wRV8QJo13mYRLv1xNhRo9nSZsAh83FExWTE1Xr22CVhDpRcJwnb5Ts3yftPkhBvpnuVNnuofZ1ADk",
  "key15": "48pFmuwE94eijYsWhnVRSj6xay8nZoG51nfAoTA4SMYB1UD46cUM48wznxQnKWUntjAyVqJmLrnATxwwfEQXHxmn",
  "key16": "R9TuR1d1XsYJQ4zbfLMVTV5BZf83mjMfQSMJxwt11XyXNc2Hh4dgVBt6PkWRN31piwarXmY3JamvsQV8Bfw8mPL",
  "key17": "5WGJLEWCffMqfr9VHeFsMXQWFN974cDsnkzCf9B5vzu8cymkp2oqiFbihZEgcTUwdaVNM1zmguQHfwiRSCjccmJe",
  "key18": "5tHNprygfajZ5da8v4mCNRVk8f9p9RYFhzg3HKmfri7mQgVV5acmrPAnZkwHvG93GwvxWvRF3tqqm54Q3qFDpudx",
  "key19": "44VGZcbd6wCot5z9EdsXJoUAWQpniFt437UBdVmJGujdxAeCTSJcnEuQoskr93VEiZ4hQPCF3yJu41X1tido5zkQ",
  "key20": "4wJggqtCMvzdbyBwpiRtCgoV8FawyrG5n6mVwkHK8wAB8ZpZroqKxfBi7tAQXxvJ3qPQDJdYryrtgHovncFsTfRR",
  "key21": "479L3vaRv6YGyNxJ3wzjVkEkLCYu3XdYrfs5N4gy1aahFL4g7CEE6Zn4vK7FUAspdFypcAJ8c4vobHo3wb3qtpyB",
  "key22": "3edd5rwArax3SGxDvGvC4n7hnzjXJQcoWtF2wPwEYNJiBTq5BYqGFjCJ6fNto5EHpRR5rbA2H5FYoZ5GrVhGd6mx",
  "key23": "2T2vUGZhZQjSUrKjT95b8dkhoscbJ6L6AhskKH72eC3W1c2nmsk7gAdcUKS6THbSf7gxxsBD4a52dYPJ13X1sm4P",
  "key24": "5VFGXQgEZmPcB9SnoK2ARs9VCTtFqHxNJ4SqqZRBKug2wzLUBpNqCG7WgRYb6FNXRKdCpjgSxnRdTNdbL4cYmLED",
  "key25": "3rV1MthdcZCx2nJpqfpiwLXQ1BzPzvCw49kxwcxfVsTYui6ntLJQ41wuxGVxP6rX6YjaJCJyosbsHLaDFVMNNLT7",
  "key26": "3ZGxhhZ9g2UvkC611iYL73e1LTAUnmHbYCrqu2Noxbb41iXmyMcJj8LMqf35JrvG6BRbym51bwru5uJ3P6SSGnSB",
  "key27": "UVN1H5u4ZJ166brhuvN1ZsM8D4Qdyc97DbsbLumnCCyqqmDLJ8qGoqQnHR3jNbM1vYQXCUqk2PortncuWPV8ac5",
  "key28": "gTvbcMoRrPSRaz3JGC4b8BdhY4u3fWCbwcwkNEHyQBnuRHxpL2ay9U9AVA5FMJtzmxpsXAY7YUhm6GLS7XwSv5e"
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
