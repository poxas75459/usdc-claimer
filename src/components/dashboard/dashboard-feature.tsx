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
    "23qP4KsnRL4HfowQ2s4cB5nF5veyHj2wg3pCBgB7TRzrUJLACWcqSyDND796hfNmqp1xC2TWawKZDckHBHGrczoE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58CkJm7oBYPysRRn9DSWXBdGS88xRciheLLHznUkkSX19AD5dgzuj1JK1yMNE3hGcXM3rUMCs2jGhwdW3Qt1G6rL",
  "key1": "5DuP4PHq7LWb3c7J98TxBLNTPm7Y56A1NvWrKNLJFE9EcmSqj3fCn9LkSHJDMP9MpUyqJHoY2gbZEfhsHgLRLbDc",
  "key2": "2L7TaV5pkjhpqbqFFhUSk2fuaKf3y158pLRDhSX9ER6ups8PEQ1mFamNRSFFF1iTNhpYK7Kk3NjG9BV9RnVFp6Ne",
  "key3": "5nDJV18DmtRzF6VRajQQ7b6WAsWwBCE6jbX27Ch1s7PryndGttmRYo3SBB8dWdi4nCEQvKebXiD1psd9KceN1e6t",
  "key4": "NZZuHe7hHoM1iRU1tG1KJy8SttqSkZBWS7AKURxbJ1J3bD6akWMs5PcDao4jE5G8V9Yp51iiNmNoXgK4EYab7Nk",
  "key5": "375KNVV2eRBgi5TN2kAsynQSKktZhPZZWg468zdEjRGXw7Bp6cMbsaPxU6Rbmrz18aEw6CqH1uDPm7S9hPqXyrto",
  "key6": "5SWrTDUAaJftmJWrL1MMp5jmuqg4LVMan1gvV8xVd8fSJ8WjkFbpeixQzSBioayQeFQ69W7m7CVMtHToZmC2goff",
  "key7": "2bKiwZ4M5kzkVGJAn118CLWAyYwR4qzY5z5eKCh12EfR6ThxrgVb98NNpzXvxpynJmi6EsaBEFgQRowHeGHvMTJd",
  "key8": "31LKWfY7chJou8WqZA7EKnatjEWDQpVAaR9Vh6bGEKxLMHNNdvxvy1cNsVB4goqvUNGz9SHSW78R18Wxh4RBpr9u",
  "key9": "35uqSdFJA4i2zdRRMvZcNGfRMa15nps4NEogTiqcKzBPgLh8Hc9jcQ2KVE5pAJ5rzYt5MsM4CYGN1R1J42d1zGfj",
  "key10": "5tQ9dVCfDzw59RueAPjkMnU4bNjr6xYGJxrLosFJsoXFx7R9zvsJmHbYkg53PqSpJGeFUjrWkNMkR9XqvTojMQcr",
  "key11": "2axf2oa1FRbPZDRWEr52SbS9VhikDEEGzwhHQQzU9zQ5fq1XLDBLfeWhVZ1csBmYZgdNUxiFg1tpuptwXYsRaf3y",
  "key12": "4RvUD844rrStKi6r2MyjwQ5uxYoG7CrTP1BCwHiPLp4RzwGVYdUrQ7SiBUAaGQyZRJ1uyWgXCbtCd54sBMVduhwn",
  "key13": "Xocu6ufbakuxvd5sGJSJ8CLmBzzZtfJnfoQ1S4D2hAKquPp8H4hf7e8UHQKnxhNpF1Dpf86WupenfsYbZbwdm1o",
  "key14": "4Ka3ae4NWFPdkjpt6CLCkUg1LZGEoBFK3XfkqFVLL5LQoS5PbAfmR4rM4wV59yMmUz9BXTwtpkBrEhAY2BrYxUEM",
  "key15": "2fsoZptEfoiH9B7QTLNDnpjqr7xhXjKqFX3HS2QEcYtJ7QvhszXghFgdfrxA5SfAFovzmudWYGZbzqWyZg5b8xak",
  "key16": "3vJZeLMpwFq2DBhBMEVKt2C6otv3jokaLmjWLwDVNskiDW99Luk6pv8JQA6VmP5vVuY42TGBwT8np7aCm3295SKY",
  "key17": "41Kt2S55t1dNnj9wrBVoaUnXSj3gaoBxTspaAFMYwre1BiYaVQhJPWAxbQk1ifvVdS8avvp6yHs2AsSkUhcJiY4N",
  "key18": "36vKc9GTcDGABGDGSJ6ZsyYbnijoNGuoxMz7kfZFkT7goh6ePEArWtNcSSs91rXs3KR7QESjJReA5SVCuDjvNfKW",
  "key19": "3pd3mbh9atpfdTdCVvHmuqyRG42vjS7Gvo1Kbc131NkL1GzptXoURLUjoj9hpNZ9f2GaWw1wMayeDBygxsnfgVkD",
  "key20": "erB9geaUoyMJaKP3tHECNAcAqJgLfbQQ1FqsGbjnD3TyNPtDMHzCtcm5aUu7fkwiTKZxkXhBu3JC3FJXB4XxVAk",
  "key21": "2iNYAFmgoZuJe36JfvneBW5JkCGCkYJBkKacoCCZ7C3aNzcRZfKRVDATCnjrqjdHU7APMQw9XZVMDhLA87JK1AKT",
  "key22": "2KqNPsxJXjr71pUdXVhjs1keG7HGWQKQJfSqKF63iqduDX7dtsuQLs177w7FGJguC42gTMkzkkDikDE69rXxUuGW",
  "key23": "51v9gjbE1H6hwiegRVvwAbxAopaxvsdcSQMz4TqTCLmVcSMNCpKqpMSGRZg7A2Hpf6LLzA2R8zVQpHtE2Po9GsQJ",
  "key24": "4QSP2rcbtQ4Lp8rRoZzdDi5YCSJdPcH6BqjQnBUf1h3NcTYW9fAbvvD7ukUCjEpnqdfRo7ZyFXgUMmykGaPDg9aS",
  "key25": "5H2GV3yBc1A237saiZj5XXfrCwYUrmniBa68PPPpPfVj3FXeRCCRaPfTxbjLM21j8riTLids2vQRf2h1TmdkVHXj",
  "key26": "GJnWPiiwfdVnsEXAcYTiYkvP8mERGnsVUTf1Vcab5BbQQmFP7ZcEEZZYkimA2VacKw9tbdMXUwHLM7aqyVQ8qgw",
  "key27": "hpNRk2MNFcEb5Ms8PctYWiavVuCgoqhLGQVQwNpek9uWMpcnVkehC2XdtKsFABzNZXXAZZB2Gxcu9RgwfubXXmc",
  "key28": "3vffypMDfnz5FikumfzuzNBz2TQZ7xgMUwQ3uNawzRsPNaVa8ce5L7zjb7AeByA9wKZ4Mq7tja4Q5UQXeWpum7ub"
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
