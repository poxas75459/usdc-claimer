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
    "3AtSgQqdrGRrHigxpReBTnUdvtXjMTPrA6PDvozNq8NuqcDAMH98JtSwSJ3mXhT84QTaXdN32iiGb2f363wQjFyB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47sjndCUyrSRNPFuK6WvRRnxgotpDXQ4uu447YtEJzCD4pp1d4n23BGbnZEsGP2VCkYe7dEtRjZQgCfMCQFLw831",
  "key1": "3MEvDCjKmHjqW9gGPUFuah2VGFgfy3rYWSPqK2epQiipsaLqMy2bzTpGMnnWJga9mCnedr6jFmYN4SAgpGUQcy65",
  "key2": "2mYUC9DgXaDMLF9fjoW37ZqCyqf1RZq2GTWK4yE2jsiKbJtxyGoBbVQbKVBQNhkkxjvtZiEb7tJ1eVeou3C4Veyp",
  "key3": "5Fqwv3uhruHRqvHW6XK6xXgULYnSeGkE29ohkkVt7rkyg668jPZKmRzs6Ni2sXvCJChAU1MBQWc4rcnrPYPa3Ku3",
  "key4": "2atmuCtN4GAjd2hUwtQcWFp6ukh1Y51mJ9yc8u2gQaBioYQKrWXn5CBYzczcNymfWrshYydjC4kkXYiY95JDqbjv",
  "key5": "MJRR2sN3NJJSvxibLMw9AswXSh5xkNdacYxDeoCnEFZ9SKnwhcNGZG8nDuoLidsv4poPRpU552nCcNTMdWyABCB",
  "key6": "4CmctZ517KZn2oGmhs7V264yUg1JzVFrRxTRrrzhzgHb3594aQJrY9sNEL6c7AFaZYaE3jkyhuMhUY3UjMrwLZHf",
  "key7": "2c8h7x6Dbh6ZSdtTer2WujHJHYz4bf57tKhGo91ZT6XcDLqzCer6GceAE5seVauJua17ivGh3p4orenqYGkEeycM",
  "key8": "3GvMzpFhQXTyCvzdfDQQKvjYZyJxNLiSjvm1r2MbVRxzSj7rfSkJMwcFHFskn8iHSMJmyJJMGaWH6w1bTnnjLiza",
  "key9": "4yyXv4LCtyJt1e8wsH2k874PkX8a8dgcLQocxHp1GRvi2pgybHH3kyf2MbSkGRHuFxHzPFrMATiUd68HdKnKkV9G",
  "key10": "4z2srzR6BU6nXpUsFKj1TLpCkCzmk98X2etgyu8xLetcABHkFbcdyFkejDaTXqWtQYgGkSebv29NkqQTFhjtjwzm",
  "key11": "3SypLw3bjcfQnu7ZoGNnckhFS5oKaWFFywp7PngBSQHLV5c1AjRJ56iTv8zhTn7TsmHM7G9C1ZRhGC7hH9EhzurJ",
  "key12": "5o25KYzvMEukseLhGaGzRqwXqqLu5i5Sn46f9h2NA5JrHH2kQ7AJDUfmhWDSnKN1QYwZN14nHxjv5kVShDBXAiQY",
  "key13": "4oi4gpPKDc689qscDynPwdmt1TG4ygkYpfjx3cdRaBVTnpMs8og7rzxS1BdLAf61rmo9pJLLECoHTyvYXkwYTDho",
  "key14": "47QqGXYPmHMVxeVTiwZ8WacwKSyKXSC1R9QJwr9fn2KMhX7rmS7AGWUaxNAWX6jX2JbMiwLLLVp4ExZKaP2PrMDd",
  "key15": "3Rij3zR52Gh7VcB7QiYCFf7nq516twGfYPRp1TkAmXiUJvXTME6HtRcxnynqPUsQ6iQGjCLsBjVzXCeDGMtTD9Qr",
  "key16": "2guKHcZ6C36iDFLhbXkA4hpBEbH7FgU6691gRcqgZkWLhyAuri2k5gvYvRTqoK78fP7BcttWpGDgkBsqP8ENMQyj",
  "key17": "2Lpa4YQujdpXAuR8La43U3tFPPQN2wFV4SxmCr8c4xezZ7M85TMBFPASF1Rx2X6YqxeGoDqpq9GNyQX82YdP1C1z",
  "key18": "3JzVG1HTXKosFwR5VnT6e7H7BTxoy9BGhkPCvurJEQhNBYCULpGFwpvKShzpknLEgiUAo7Xtr7xs6EZtbguVk8Wj",
  "key19": "5TMiQP4aytprjP29F1auy7TAKgoSDqTwsRL8dzaDqJJgGMNhq9BsukrVov1zPC5pimnDwnANymbqJTSTeVtsNhyy",
  "key20": "3XyV7N2x1hTcYSEyxA7MdtTuK8fbtK4Gz7rebHAT7E2LBrFqDuQS6CwNLPxUEPUFtXUY3LdincaDdDUmwp3uv25F",
  "key21": "49AMacnvQDa5oqkS8tECjAJnPeu33sdcnTCvqaYDhomyJ8nu4YecQCpwkaFk49RnVZaMoDEsVQgwHs4AczHv9ZjC",
  "key22": "4T6bMrXzv5pwqEYzBc9xxui4YiKc4wcXKWptsDttTqfE4yU2EBPNoZnGQW1cEyz8xWsuAiiTFd6WBDrckYao1hmQ",
  "key23": "3oro2DAcNMUEnJVAu8DnEhrFPUbiaCQ5cafTns3PLEAjYszG1UMQzUnwj3AGdeVgAiiaNcVvC6aUdWfJjmaNNxCw",
  "key24": "EjuJuK7TiQmEuxwXfCppAyMutpcXiJWFRcwuwmmDcZ23beJQVbXb2q1aLhbfP86mcBtUFYJvtqFWqhXrRcHjbyi",
  "key25": "5aNphycuYKLXxvYiiR47xf1bzeScFe3EoakYzB9Dr8U9M2fujoF9xErPcovyKUnj6KQVpR5VdJKsSopPgAsWiPMv",
  "key26": "3uiBR21U8vEw7gWbJR7tXGTrwy7H6ZRR8Nv37drct8wfWP548YFYbvhAw3A3Nqag41bfMTeQtp4zwyst8qyQn4eq",
  "key27": "2jEtV38V5VgQsgx9yA3G7HEQnxzJs8yhvF43qaXYG1fuEY3prPNSucxatj8xdzmV6QS1XXmiaDnYkjBbWwePVkdM",
  "key28": "5xTBw6VLRPtCf3mCTvFKLmK6uFor9WJ9eS7Pu62crTuuZy4o9srRS8wSqYisLXBdTYety71kMhE1BfeRjeejQvZp",
  "key29": "4YrQnsf8gY6HKSVKxxr6FYQsmLaA2eWi3fVWCyjVFuQfCR63QgSiknL9YAtdEzQewdbzNCtybYVF75ap3yvcKKDB",
  "key30": "4jSj73NctBKvxQxDeMzM5NxH5iECV6wrmzrRwP56f2h3DxkRV6bQ7s3mxcBKiZELmXU4cc8UiF2Vk5txqv7natVt",
  "key31": "qFQ4m2waH46FWmMbNjfTmGdguQUnhP4KaU5SiH7ouay8iLGdLW1z892BufSfLBJgpqdtTHVKZifs4hDujUtySkj",
  "key32": "5uJzP4fdgGQVJaL6gcFksCejfxceQZx5biJXjuDcroXmMxoi7GBpTSxYyMMvbti5ovkN4vyUBCPQ2bSijdSekafV"
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
