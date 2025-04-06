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
    "3vBF9bnvCsee3mZcoT79YyQFKVp3Zx2fCAcQYjGdTmERd3KdP9xJYcv1XrpPgzTG9mreNNXBUPQ6azUCCUiPJzaA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DaG34VUovbb6pLACG65AqGjbmbDfJs3Epv1pYJ2T675fYoAuRFa7h124vL3RuLKu5jHq2mfFn2cUmaQyqVZMkMW",
  "key1": "2Nnf6G2xRFCkTGNF7HfzumF93QwpNbT7cqRaZjuzZ67VePT2facY9Av7dKHA3nEVRPisuLH4RpUaeCv6vnH65rqp",
  "key2": "3CqygCRm5TsN4ikeNCAoP73zUheaqvoW5k9QrP7dXFxW1W8hfCjT6fot8pz62h6i5hqVjMfYCbDo5Qczw6qU5sjz",
  "key3": "5EhxFQakWpELr47c4RdmSsrkPtM71rQmuFBEZae7neyKtf38EDH1RQNbYN2ZxvVfHxbn3JiBTGpKg992BrtdbZzk",
  "key4": "4u6AWhxwQnym6sc2wvTXu3JJzMMW4XRj6UcvvMX8TwgTo9fzLNgoD3CDo6nCDi2fe1HuEHkZMtnPiX9fnWfgaa1j",
  "key5": "B92NJUALZ4vKwq6B9WfDGWKBK2pnTdDND9FE3j46iznhT5EYEctZBpGWw7y96BYPKcYEpLDac7mnfsDzu1U8yQ9",
  "key6": "5zkPskkyXp1sfSWdW8vjZHkdgYZ4en11czTXbwZ8NQVSBgV9bsTobNw9hEqeXRhhKZHvmApK2c6CYjV95eifx8mE",
  "key7": "rBkarw4FX75chzYFTRdJLR2gAGeFZDjykKm2PUN9Rf2yS4V5BRgL3EBStw4bexHZHsihE3mX9pgbaEajrJeW3nP",
  "key8": "2uFd1vue7QcsEYZ4L48V1PKUbD7Mx9XCAY8Ww3tfm5d5BYmtJfqv55KAFiAvg9gnejhwfFr9vazLKaLBcyBiQPye",
  "key9": "51dSnNJq2rpw1dZjHQ2AsxgjaQDETeWaZv2sWrM3wbsYo8y7mFUhsMyAbBFgKfT6Y6ndfAJisEyYqYh3ckvWEDj1",
  "key10": "rqiFaR12z4y6pqXgsvN11hZMGcWyWZJsjbzdRYnGSPbZqo9Ez9GA1Xok9Z2ZMrH69an6SQn9JMYqjxrE5AgQrTs",
  "key11": "4ZL9kYNZX1YM8cGNfCMugPqfb2CVM25ZcaaAz6cWCy426n6RQDYp14VJLVnLSqc7LL9aNUk3DJw3ZgBM6hDsNaBV",
  "key12": "4GGaq3teKfsJabyG7tsr5QVXUne1mVxkX5PCpchrCV2v7T3CXFfyxVeZ9hAQt3zkBUys4QWrC9X1EUTAmCFNhFvD",
  "key13": "3nDTbEa3AzUh7f2fcstKsQzidDy3DD4CJKKZEbmypqMzVxvzEqonLQLEg1ReHtLLZZTmyCHuEgBvBcFgbf3zSaug",
  "key14": "2Wo7Voch9V8L9VKAH9RCz1u6dHfA2SyQga9accie8ycywBU28Pfp2amqGPeu3JkQaori5uqqAZV8Yan6K1q7Z8a4",
  "key15": "59SsXmAu4ucpHNH9TzYSPnzYJSJKVnnQjZ7qgmQ8WCYyVSJnNzV4yir7tcaqZRZzAFte95oLrdSuFoYUVtUJPwpk",
  "key16": "4VhkkLDxvjfBExMcGvrUQzP7ooZigZpfbKVQFAXodoyg1fSkStJ6ytj2TSQzRz2EwX41XZY9VJEcZMQ3NNpDnmRc",
  "key17": "5udGC3PFWK5VXNkDMHokNBw6JXXrvPxPyekmEH52KfHUAQoUZVXu3yPqyeKjYpN9WDmifbLapWT2VQgR9nXQPm9W",
  "key18": "3XjBAa8kZ4ASf8qhNY5153AdJVQsTfqG31RbzPa6sp9UV84hNqGJ5geSjumcQWnj1UBvVCj59t1B7rWXQAYwX1KA",
  "key19": "3byg7sC2Xh3PxbXU8ruMoTjnqoTvjYXkR8zarFWBWYVm5yANCGRatkQyHSLQDyws6nbnAMSpKH3QLpTnExzVT2vG",
  "key20": "4AackhKupWSs3DVq2B3XekotowPUnkanGgVN2dtXtTLxQrT9GNfH3Wp1HgdFFcz9gKWRPy8985o6BNSrdMxt3jMq",
  "key21": "5Tpr2RakJgnoycXZLtTHjsbsZeXu4eB7kAYAs6Uu8tX98RZiuc3QZdzRZG2SM27gwn9Rh5jgCgZJ6ZftBM4vQeXe",
  "key22": "TdhPGjDxF9zuARiqKYgKidMWhtvQPCRFZFD2eKnWXrhjpGR5QgVtoKWGrAvpaXD1WSit8PNcVXfcGjfJbE23txF",
  "key23": "3v1hum3BwJygEFXaPbXLFngjQUa3wqn38DFTNFFrsNFdJjLt5uxqR1YVd87EZppGA3QaRiY8C1hsF7xpfddz8ZzD",
  "key24": "54XEDNf8jV4LFnj7CBqrsoHwWJNAM9gz1TSEj5L4HhcYype4Rjr3WpvKz8vWbHchG6vDd7jrbigeDRVPAoKqH3zs",
  "key25": "4vpJE7b938pMZbhJVqnhMQ3rBWMRe7PGL1AuyzChBGnmvvNPo6PAjMN9XLkh2eY46vqmjD9wSW9kFAnUFSTA5D5U",
  "key26": "dDJZrwabDJe1Mp9kPpfNBeghqbH1Z3djgep9qBrhfSog5aaMCnNzAk7bXbU399LHCbieuBqfkgrSPERRYPyTZ8a",
  "key27": "4WUKGFni8t1XYLNSM8MDEjrzoJCUdVpi8CXEVEMpnSycuLGrWDt2BpPj4Vu2igWwQZUtUpaUKzj5LD52caB2Uj9",
  "key28": "3t9UEQtQ6SeHgRrCz7TTEg2kpWN6CY5FUGyDjLJBHdhmDtLKdMo8KfWqDaAp3YoTUiH2KYGHkTptc6YsgnZ9gBkr",
  "key29": "3ccoskQEmBY41GoDTH3hRpdcEcRg7skYT7s2hyKCF8P5fYmqgHpxFsefKkdGmra6xKZkt95JDZDoWrbgEigUuawm",
  "key30": "33L6uC7WSXyXW39BdQBEFXYbytMRbiUab2QqZBSuxe7zRCfUAmj2nZ2QUTWG9BkUK83yDh3E5Ny7aaKHDYGSZrqW",
  "key31": "5zgMLKeFtSubZNrRrUzXCiTg7BAibLBYY88dGQXP5T2JEbU8ENk2H28xvqU6TkHZL3sRLWuqUbzAT8mumY2vQoCr",
  "key32": "48b4mag9z5G5zKNXCMfGLq1GdXJALtQzFiqCS9vcBvk3izRAhj55ZQXbaWYjyYMAEszvdgLeVhfR9Y4Q7yoBS18A"
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
