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
    "5xZqwe35N5jdX8VDWnkTDuA25GvD6Hxx7P2XuWKR3fLtwuxm2dgEt1d9vgjp6sQsmftWYXfknBQpRF3JR4dGq6dE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xhdE8PgE4jvaWPKsPLuKWi3z85Uo2SRaZfJLYkUVMiCUeazFkaUh5dPxJEuhkdNXDEV4qxjK32HVPnYVddJbuV6",
  "key1": "2yHP2d9fFoG2WkBn8oCDyY69NU6GJzwSQ6eBjddVddrRvTRtabJvinN3A5NZaDwp6wmrofEs7poeyQjB7Hqmfyvq",
  "key2": "hsXqHH2XtS4AqjqRp12UBzncRp6M6cy1143q9V5iwKSEYetneXFVau8knjXX1NukVcMyR2QKXrfebg1sFrKRNvV",
  "key3": "3MvuX1dMAuFqbXqhNBuPKAqFhRYZeJpqqxEHMrgmiPtmNb7EoQw1BGGE1VhU1W1KGCkHnhXjPFY7eYxbYJWSWMHN",
  "key4": "FTJBWemiDFEWYGn1wJ7qs3i8b2RScbMGebsQQzjgDShheCP7CXK73HgaRZMzQYuwYx5y2krCwZbkv33U7MHSWwJ",
  "key5": "65E57zMTbLJwkteGtdX47anvwYVM4UQKPBbNrrDf6gscJZUfyKouAZtUNz1TZHySBYeVkHhC6PqCWtugeCnMyyhx",
  "key6": "3kP9ME6ikvFUiNgmfpYJrzZdpmdHYMD2i7MoeGiyyrRCLXsQFg2PmhMHUF3hd48M6FJ3txpmLmdSw3AhQKY3WjUn",
  "key7": "qKGWg8u9p1PkCHbMSidMBfjsLKRGniKUpNSM54UHZdV4JbXdk3qqxtvhtpdSknnEwo8aYw2Ka61vAiJxZa6GwqC",
  "key8": "2d6yc7yxNMyoCh5NbZu7a6agvbLcRxpW14yaEALestxDBHWdU4buAzZsPn56e4VbDgHj5FLtwy2zCGrxawX9jMzF",
  "key9": "65S6mevZej3GDFzg4Fbpe18v41VXeosz9EnreW9uA2gpwH46wkLWrL1vGb8tzJh6Qz2cYzfJ2MwWHE2jiHa9hZP1",
  "key10": "4dvAHhKr7scwzmq75aRhNhhpu85zRQPRZ8xsoLMrb6S38bggtm9k2QvoZZVzYq1BQa5WoCxaJ2qRekWWKF6mHyp",
  "key11": "4DPjxrRdBvWuwKqhtLALwKAMUgHAYaNZyvMeyvwwE7ZL6WKKFfc98jBoJDpYtPBkxFqZ6Sm9zoRh4ZwRd2S77iT2",
  "key12": "4Qyiq7XPxUsWWV2CzEWBzWq2M9Had9dEwHwRsJju75sUW6CkHhqQqarSbWgr3bhzMQBTpZV8NV6NrfgEVXyPcWsa",
  "key13": "5MFSQmAz2gRebCHrW32oagmk5KCstJ8MQvQxSC7AynvFCkkyP8zxKF1kfmuLmskNjHMwDm8rWXVMrRmsjBbKHjHA",
  "key14": "4DegriDCEUDBKyzS9scvSPrnaA8dygcRonLeR6hPXTvNqGVnhGenHfpD8g42n8Y662VXPZFAXWAjCZcjuuVwFgPW",
  "key15": "kD58LtnYwPuW1ZLjDVNfi8EzEW6aUnQGFLPaeLLdoke7cKu6jXssJ8upbLxv6FwzoRFXZKL7qGNXLy91ebiBWph",
  "key16": "4D61bmkchJR8xvdvzySFMt7PrFJmwDoAbarWYRG75jqsh8M2KHEL69f2urbNq6ojVm7bwaDyrKF2tXdmbkgLfA6C",
  "key17": "3KBJ7yRaSxDiziV2vMa1pFYY582WzPsNX7H5XrVs6u9FJrPphLevoJUVXQfdreJNTmhYCXLHB72UDFX14GD7gB6d",
  "key18": "5ctxMfE4X2w2SnvJEkKHpg25ZJCXj3K9xTkizfQdh1CevCvKqcm7QTYd6a7sCir1J1WktSdvkpW7QXDCtADH1dGK",
  "key19": "4Gd4MjoEa4Eu4o46GU4QG5mH3aM6Xpky6KyWuBwbGTAsvSaxWTaNEPtH887Kg8S6AbyxFhYmv4mWjkvrSB2ZfaAK",
  "key20": "udxLyGkvaMT9RoKgPwS6v5yti61DwiW2xUbHN7KYzMxuZijJrLfJ2DatPybWD9kd3juFDVjZiTy8GoybkUjHk6B",
  "key21": "2Lu41kVfGDCTzuZn5PEaNMPtitthzMHhsjhUMziTBJypSi34cDKVfGxnYm8CvzRrqb4ffwxxgYRbx5Pr8oVYgW94",
  "key22": "43w7K7ZgvSxuWRYrT5QREY2Uxzu8CjHAE3yqZXWzS1X9N2gGBH5DWeNycBGrTnnazPo4Wp5P53NKwWDqMrqypDgi",
  "key23": "4dRAUjfu8zwkXnrdiFYDz7WFiWN4wLgwJNFY5p2ke4fi5izNEWm1KTQXDizMUHRMrLrxgtNMuRNbaDyHEK8hCchA",
  "key24": "517i1QDri44nuKZteBMGekavA5Y1kTRKFuGymEAjBbSyBkazgKhdnsWP8SQqyqqvMhUWQhXBbBoVdKrzVQaTyMe4",
  "key25": "5NbmKU2uKz2jWuKTK13yp3CNLcQDYzAYDzgfkpsLEis61bVZ37L8QJZwyWMdYBezQEZRXs3aCwRSAZxq3xm3UWN5",
  "key26": "2n8oAQ8Rc96c2AaY6KL9eZJeb6kKxwHJinqQmxZuT1JXNruMXzTTBh8DgdqitBNvzhLMpUpdhbZvBirGRRFToVKv",
  "key27": "q8HcWu9yWnCJcyAhUmeXqk7PsK2Utt454hDuGKUT2FDHbY8mBWYdC9TWr2LcmFu84GcoWV6jBNeHSH1bwfbauNy",
  "key28": "56PzZPEyQCGsimRD1UmSPwvkTddjLdRw1hPJs3MJBdFq6bj2QuWnY1HwEhwQoW1vGj9YboyQNyhtrb9Yt4RH6Ch2",
  "key29": "Kvzkw8NAxynemgUvQVHBNrH9GYbTZFsjkZG5MT87mxpaW4VekhAyhFRTuY59gzUzMFZyhTjRJ1kU9Lr3NEw9HoZ",
  "key30": "jHzKT9u94DwJe3iT3a1WgSRq66uotxTkoQuSVYXH1yJdi3i1fuD5mh5K3mXGGN5K8nrbzYcCSY6BwFdx5yGK8Rm",
  "key31": "2Nq4GUBGCAbAzqQ7GRE3qC1mW9SadT9Gzd8XheVMLQ5pu6wS1f5Ts7n99diUhGfEoS4RcSLze6amhE5g992wwgiu",
  "key32": "2mYKD8skdTb66Ajwyh1iFQd635UH45JvyAZhT1nnTuoS55f8F5REVgDDsiFBLWkQ5zaUoK1gNreN55ppFaSJZn7w",
  "key33": "3MziGgfNYDeKZSgvMnU9BFS4eYquLASXRHp5iyFKsfXa7jwuJuts9kecgzqGPqt6GtnmB5iovTwJjNKCBJoEWhMp"
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
