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
    "2zjwxt7HwFRcRgNTbsMjtWa7u7xDUxQ6eeTVuPqa9XaZjLN9jeAKo97nMYNQb8s2ANSMyrMjmEhTCCmKU9BP22vR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jC3YpYcgLtqu4zMWzg7osfvNNTE3u9kB766B3ntN61jCVknLLK43npKmCPkksmur9oGhi65yAABZUT7382WBeK",
  "key1": "3jwZv3QCtzVjX7hPPgdkgW5GPeBV5rXsYHmA2qiGB3uiXv1RVLEro234w3QnF69odWtexi7tyvhpTVkVveqj6M8p",
  "key2": "e8z3dDSuccetUjgjhZjFJ3nijDgsCYm3BWLc9VUhd6w9vwgL8G5q5mUhNghtm6PtBeTKmft6S6BkoRX3zTyjHVN",
  "key3": "4sJzSEPosyZk62nFqQDZcoxvWcrrL67qFsa9YCzRrUx3bxjgWomhLipYxcaVDRe4euPypzou3NagF9sDUX8UzCrQ",
  "key4": "4Do1zqHK8K4ULLVR8RxPEMcMJkEouT1TDpDUCLQ6vz8TEV9Q8kXW9uZrKJLDysdTpEY5mRhXNMV2D6XcCAESh3NY",
  "key5": "5tzC6kgisQYwxtmxtAnwsE9NBH4FpN4kXv1eQoDRnZ2wwqb3foSzKoRrSBdyGtzLSBk9rqQQMjb2PhrGjs1rYMXh",
  "key6": "2Bu6P9fmTMYxBcrNZvC1F5fiReyjRPFcYXmDwGYUyfLurN9e2yna735LWonmVkaxpEfGzsDa4q71ySJ2ZFQnvWi",
  "key7": "svivQuSFN5MZZGhVY6HNb1wDSg4EYMPVZUbATR6ShHvLzSCPGfSBbr3mCD2Aeg7W5LZiNSaLo5JVneEh2cmuCen",
  "key8": "28KYcLFowg4aDmjyTg9zJZVCrC8LqbRDn7bqyw3UA1SvgPMJBqREdXxTfmjHtfU3HWJE315bt29b3Pd89qFnCq3k",
  "key9": "33stnVnt4xYc7KgBMrbKUB5aFsm3m8ZTjesmvJiznngSmU24cQ9FLkmd3ciBRcdhbTt2qP8uRMehSeS37RcHswHh",
  "key10": "5oiNcNg7LRy9QxbE1URFXcU1bsqGirFfcyQdoFKgHRp2Xpxy75K3NhBQEaMon4DDido1avCDy6npAVDW8rMq5MFk",
  "key11": "2mtDRqfQy3FgXJvgpQdSnFgDu5uqJwE8ydfuoqz4wnTE7S4Uv2Dd5fJDv76LvV1H7vEHHwiwgrZph7BTfkVsiWtC",
  "key12": "5QqBMUzj5hFcvKTjAk4SroMUi1vC61bsL3UkEf988W2ao6XyhipB5fPEJWcnofnX7ahrd84nSaUcDeEE78Uw2nnG",
  "key13": "3JJSh25wRHDxfdj9edqArHfxjn9NKzJMENoMViB38NvCh7wMVwmFm2aP21oMHH65HAcFKQdFfQAtoMe4vVde2R9Q",
  "key14": "4jrQGXiRMhdkvm5rMmyMt9J75sonAdmXT1pKWuSh4emMKXEedeTqrHxHH3yrBFHMArmCAfg8SeWKEBConDMGhbTQ",
  "key15": "5oS6BiUiMTa4qLVa9XMwtTEkXjM5nMW3ctVJ4XixpaG9F48PReCzxKG727qurCSDQ8oAPG8dzBe84tfJMSHZ5vy3",
  "key16": "rgzv4SLqD6VYLp1DYLVUxk6AuaoB8eQbfWHbGkq8TGAMedQEyRQn765T7RVjsaYz5uYqZthYJgxXZqTLfhAhrrg",
  "key17": "2HJ584hyYniNC8B7drRz5RA6MhUQt1g7jMKUh6JkhiWx8yfhvYyxLqqdetUQKEDktv5Xb5j9jXRajomUJFCpkovZ",
  "key18": "3zvCgpZeRTXH6kYMjnqXjNnv38XzSBhFYFuEsuCCefj2jrfM2dKYpTW33Sj2fZhYsQxHGGxFPkEzPLcZeCwwLFxp",
  "key19": "4JHDyHbHFXS1pcr8L8P9jwK267Afh2CiN5vwAqREberEBUYbiv35ijXXbNmHQoNzSFmKWmxjawKNrsJBr3UfBVac",
  "key20": "3r69eArr62wQPstDuoPZQ89exKsg6dqsrvbTwrt6oU9bSSuAqHR8jHU9QQjggSNjNz9bXyBkEJXzAWeyJNE9dTsC",
  "key21": "iSsRikDiYc9KnyFarCxihZbQSrrDzgZjG3GFbj7BvxaVGSr31AiUFN2xDmom25nBVdaWpvtWNtdetA7qwPYXGce",
  "key22": "27Puhx9vNndKSHsexWLx8M2sgspUjUXV2TYPGViER5eCc3jtz8ysJYwPTyBcq9PMVtgqXrGqKvW3S45sh8xWMiYT",
  "key23": "4DVJY8XjyciF9iEUzqPiJEKQZLJ14Angk3JGcKVXvCpHqYc4zn7q3QWfZ25QdAygZejW4TLdsRyTfpbHFVu1dZ3d",
  "key24": "44WT5PoDhADTyhTM6AqVLRwXUzAUZqWsZ7ev2xNHu9zcC25nfisJgBBxN3e1kHFurGtjjohm41yGa25yrMnKgvsm",
  "key25": "554eKeqy5rVUkz3LGnzXTwk86jBeZTg4G1PMfzgLKZDAiBdQ83xDz5HS1hiPbfo3pGTqGGARN28vbSWyCFooe3dZ",
  "key26": "YKkJkcR6oZmAuAndmt8oKezdX3eWyfQmVgk8o8NznLrLJEC6SyJxu9JcGDC3G7ut5uANJDe4c2wiMHmDWuEaa41",
  "key27": "2tLoygdY3YsXTcKJ8yGRhRz598uddtBw34oPZbghCZjWUdvnZucHdFvqk77i1eTmcNg9LnFjeAJQPMS3RcjZdhvM",
  "key28": "4MeuYypMmfXSYjDyLXR4HmPd43Uo8QW2s1hzznSr2HFmU4yUm2whFQzeGJzR69wrwTjNErgV6YxxJcdj8d6acTH3",
  "key29": "3YCdUWzPYyHe2fxFtQKBgg43xUQS9LyAPymYrEukhRdBNGcTb2zXErDracVHLf3bVYVWk5t9cEWHTNdPqAVR8d4L",
  "key30": "2FEV4v5aB5ViQg67ucJTHmMwkNPuyqftbM7Mpa57go2UGJoso4yQeW2zE2qGtD9Kw3kFnSM4ey4Yr4f3MJZHMSde",
  "key31": "3PocTFCht1sP9aNbY7E5ohvWQtfsioPbHEfcEaXciEVB2JHsWe5ehPn4Uaz5dBY1TB5HE6NbtMu7XHEUv2mT7kqd",
  "key32": "5ptDB1VTm9fvb6vo3RhpL1DwVEZ1kKPpXkwL8j6ysNoQ2kf3ynzWtjcPajsmKGT55HTru8CqsFyvyZB1GqAXx7F",
  "key33": "YyXWD7Qcnke1rkbQxJwyG3UtQfDsDDeZsV9SitrXyqTmeJ5YFn3P9NS5oWH4XKvKdiAx7vmVHAFP6jcTnv3zNgB"
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
