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
    "2Fo5rVUnE5bXsGpH8rEB3aKiTDosnGxR17qWgEjDuPhioM7gknp1jRbbv2qSsVQbK3iYfHNgsgHcda7vtwEb9KX2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rT2JXBCC3veAUqGQJZ4jYUt2SPYLvrFZupjPaTS9a8NoC9Gfwv4Mzi2S85s1PPf54YbCvVc8CHkU35cWuNcD67J",
  "key1": "2FkoFX5Ssz6vNGPLpGZEq9iHhNn7L1Rqm7b5ZniRQ9CWgNAGY5PP3hJEhMtpoRhSCLnWrTbriCGTnRhcZehUCbk6",
  "key2": "4fPXn1PbqCdW7UepwXgVY6tdonMh6m5q32BEjkdBzx8zVdrgcGdTjQfAAsp68ZHpFzkSShJroxABkdNJZvemmWVb",
  "key3": "3hC6Y9phweNYCi2aGNA7CBM57BK2i7rJ2WCkmkKqdBPvsjcC3nQaSRDqXnSgYajdgzcS9yoEadaJjugTXCdkBshL",
  "key4": "4eyuzazxv6pPrTSyeCMTB7ryCdECsXUZ7ZqMZY2eqFY923MAEr21qb6jqNWeykMAMvp9J47MPf28LBcsCP4HZixc",
  "key5": "Kc8TX84qZzaC6yYypup7KuyqhbSCedxbcKR53qJEud8jaPcsu6jsd6Jjmvwi2TipVmthR2Zo7xVVXB8vXVjqfaX",
  "key6": "4zDaZKWN6BwKZFZbL64tv8ymK7CXUiZ6X3kz1wfRpnykdZuiLRJiv395qToGQSJnBVu82XtmzygQ5brsYwDEeZLb",
  "key7": "66E499hyFNtwmiHb66EfBM3dkCFXuSwouL4CPHKgoJsrCpyjSnMgBVq6MP1FaE4cZFvnQASK4uYT6w2zNtj9NTYQ",
  "key8": "5EEyoaqg8Rb6f5cQPuvztRprgQYTqNXaKLh41x47vZbH5M95VqqqZehA5tLy3iMGfpUkdeYTtKLKiw8huUyEjswD",
  "key9": "A54u8gYY6NPExPXTZiBLVdHBMDTbcazkyjL1a4T2fzygSRHtQXBquMKQgGRHseTJbnkxXtkssC2ASmZTHJGjth4",
  "key10": "3pXK2Z25qUGZD2fvvEi2SCPWCbyDD7MZy5h8cmJq6yrf9A6j892kejDRSGjim1eQtfEqnMmUBfTGAQ2aXK3Yn5yg",
  "key11": "2AxMagKoxbiNtNUaCsqDfTUo76p1nQnvhHK4zwQnoojXzDgHR842s5osZnJCSz6sxftmMpdqAdMFpd1B2N5wVUhR",
  "key12": "YF7M1qfhQsVoWHVzt3MkvgpHeQWoWUwJTpfx9xgHm42AU1sVvyiqvVur8A592fTTsabQ8B8GDe2c38F6JgAwBay",
  "key13": "4gSR1RoLEzdP1ZYgE5KaSuUAGnG3vyxPm6y8PQyrzH5ADLFfk9PMqVHaC7GZR4he8g7D5izERRUmhcqfko6msZjh",
  "key14": "4EeHf2ZUeSEweNnt3u6BQaEYiYGDgmmtkH6oXrdxqyo1XQUHyTLbjTZcZXAfSw8MPYG4Fj2t2pgXfo783z9aEDLm",
  "key15": "4XcWiYe6qBDfiyrKZ6Gs95dRqJe7mT3aMXwK7tt4aVeXZK3CZpuMTzQpkZNmhJ4sXhjcaGpFA3rC1tJvu9puE3Me",
  "key16": "Tykp4uvsWem8R4kyLTXrXe6mPUnPoV6ZqFACKJUJK1KopSptaMGjKmkz4HQvWYzSoVR1pFQY2vsfhirchGg5CdC",
  "key17": "5a95WJFKhtLKEJhK8KdtCiYo2uJyxMKLjYjg8y8nRzKCf2bESZVPLTH3Zm63JEeNpVWHfJFvGZ999N8MSyBHK5sz",
  "key18": "4VK8UxaufYsrRBZg245MVaNvyGLU2urTYWMg3v4meN2gNG4oKmjFgtmCULemHtMF1v3Wf6kruKbFDGssSoQ7V3MR",
  "key19": "C9RYLvp2sU28ousCH4zYU8A8j6FvhqBaWwRq8unKvuPUXonyGtBkHdVXeEopKh9sViCgZquCDFpnbdiYBLfaah6",
  "key20": "2o479whhdHRJ8x2r1ZBZ7PxmFxhTYw9ewweFLfQqy7oPJwL6wD9hrrX5L9YbRPscNvA7NUJHtbjeZLEhCwYXiR8a",
  "key21": "3LYwaYXczcTbHK2XLVzQGMRjVzcaKzfR4pFaeg7eNbbamNRZnsChFWUf47vQJ2FJUL73CqpzFTwptvBA6u81cB3S",
  "key22": "2NB2j5MZs8zwJ2Zve6hGxPHDTAzBbBUGLVSsoNXBYhSDKkX2Q321niv51rvtbfE3PTuWPHiXaKMbJNEhWrhPVPpe",
  "key23": "2XWs645RYhLfQKLfzeXpkXb5KkTAfyLVwxsuE6EU2zR8iEYjVKhNLomfHbqsJSh42M9n2FvHye5XV8T9YbMJXFkX",
  "key24": "2izKKjKFWR3RzyiCTMbD565AwA4r2Dvh35hxf71GaqouGzdLuoLySB9MqqWNyXpcptF8zkYNxjLbRJ8VnrDcohow",
  "key25": "5Xqz8vwgERBmSP7TYsCYx12e6xzZBeje8ALvwJ8LzTY1QcH4cBSba2L7DTNZ5jrMSxz3fzR7HbS5X9czj5MMt6Q3",
  "key26": "2xLtv9fjwAiXQ62sKYsJ4adzk33kSgEZhoPXq9gGtxoKJoUPzJeSWKtCujLLRTVQ5qAQetgxk7JqFC25yroEkArW",
  "key27": "43r9TJfRJMjNTK9zbiKyQdrQ2TFNQfKAtEfkTNTkKRPgxBR7TWeYLFgbx8LFWNGntAMmtYdkn2cbGxCoifi3ycC1",
  "key28": "3W8UmDdESCsh53rfmyUmzAbr9cBSCk1ZPbU2a8NtMoqeH8QUuQ8YLDD1jqdL8HF3tA4waZJKQH9JV3vmxt6UQKQ4",
  "key29": "3WAQMmEcEGkqLZHRtaukzgx9hVztL1vocVV8JN3ikzdnAX62WbhJNGYiWmRDUwKYeB6NaAhixx7cAWChWVXnDFnN",
  "key30": "4zPdXN9q1C6tuZ9Qkf1YFHQbE2wSpoX7hZqj6Q2UkwmumXctcfs19cUumqY71HRiuYrfiFCVhVmCjEQ3aFtXsYua",
  "key31": "5AfTDoM1TqsaZhvczUW3BDbogDtMnoxwiuJ4Zj6QGivRPP73LZekAD4Qja5WbUb8gpnZfgaSZvNE8VQcu5sa1zLm",
  "key32": "5RWJnhQEay9CYUQM7xZVHSki3atK4uTitS5MMKrsDWisyTa5sPzoR9T59GyQNsXyFjUDHMcgNKFdPMq5YmHtZAc1"
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
