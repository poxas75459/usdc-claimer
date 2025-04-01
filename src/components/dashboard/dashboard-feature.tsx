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
    "4fsA13GB1xmrvrbyMtqbUuY8L4WBMzBPM4RB5LwGSbCQwmPQ9pWNNYiXeD8kVn5BgxySkSRgH6SiitFyFqyXNu7B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XXGiXpCN7QZ4tdHSZfyvPfp4jQkRjtaXe5WzjF3rWDCz2A43nwrBXX5JQhmyYBzL28QtDufUNZBHU3y5dBB5iee",
  "key1": "4aiHX8xEpnJWLPvipf8m5adfoRawWX5Ue2bu8fYQjeDmHyTozBwFhiaHYuHUo4S7pEJJSh1fgiqHmT829hcbiV49",
  "key2": "4urNWAVPaQJjrdvknLGtWSZA6gLh6D8tD3WjRfUfdYbNRUe9v4VAwCiMzQzddez1kmSTm8F1nRxTNBPW1qwLVA2k",
  "key3": "KnoHYvyPLjcKSDvfnvZDbEceZpUEhayMFipUdjAJSzonXEYX4Jz9HHUyqnnuoDcc4RcgFmt3ANRti4JjCUj8Zzw",
  "key4": "5rYDR5LmkQDRNc5sWTX7DnAas4HL3EgVpggnT8hukFfv9da2nHjTM5oE3JRwWunpVNan8xzgs6ZdMpcyuB6FbhLx",
  "key5": "2aSjhQmbgdkL8FR9j3wqCBX59LikwiHQgn2sNJcTbjkDRvtDRBn3saStmWVaR5Br5LM9dcf3kCRocAXJa1rxcVtA",
  "key6": "43nsBg1JUPHS3WTHkin3E8dfgAKmCRZLpM6Ndk7iJSVCqFiTgRAKeDA9HdPt7DmGDQ4vGRMuBgSLAx8CGjx5svLu",
  "key7": "2vvecirncEnBgeMYv7HUA4xDfGGbYEvcREAy3vCTGNYwGrTFLMCZx6Nc77ocA3bLUVwdYLwvFdGU4Vh1UFH1puf9",
  "key8": "4HJYEz2bAzuf3K8LazuPcLgv8Srw9Jt9fuEA5EsAvSjnQbcPAJJqGSXnVK8izjppEBv4yiC8dPJb7KHHy89d4R64",
  "key9": "5CJo1fGaiuizcZBcGi7AMi3esarqPMGHWTLECEi8s1qhDAH8s6tKZ85Jw9z9L3M4EYs4BafkVQHkAhGx8n9kCa2y",
  "key10": "NdJ5bZRXta15hRm6fE9arh7Zv7TRCq5WzADRr19FhmtLcZwr2QJWSi5UusXuEtvQBto9sVYuhSDgg1kPMREhzzG",
  "key11": "NnfUmQZRJpM5Nj1AokMJotq98S6M15STnkY8jMRZ1b4JvN94R85atHk5mjHX1SsisAAe3HCCccAkcdXdEhE7Q8R",
  "key12": "3b9cvXqpSxu6a9hxw9KfdFdfxgn3q67w2SbH96iTr8zWeTGuYCckWQcpyCKEyHAdj6Vd1D5o9YDdtXhB7HLV6oG8",
  "key13": "2N5WMYQqgadhKYKDX1dTautv1S7ZMcerXLYFQiCLvVZd5PULGUnYMbwBhssnQ7cg82nFsk5LrgyLp26i9nmjsomn",
  "key14": "gMMXHFePu9EAURZ5bQzJptufKqiMJkfuQHWNHVFVqhFfXEt1EXr8KU3QDfe66P5skfK5qAyA91eH3g1cdaHL2gV",
  "key15": "25ifBRacD5sYgR2qka9oscn9d1VVCFvqQuuUWtkPn6T4X3vNRodoc67iCznNoqqUU7iZUKiLpv6ew9A1RnvMtiWD",
  "key16": "2xqihMt5EkzdqKnr3yVE7Mq9x2aq3RQjGVfYQK3Cc8zUJLFpYk92Z7JnsN13SvmZa1WKbZrawkuyLCreNhRJM5yg",
  "key17": "5jJB5mJySdtydqUG5DDrdQnk6ArBevLZ1vXNKZnw7VAPK9DZJDMvqMx3HXUzW8Ui7sqJaKW4sNsw6EKyFiMs8M8e",
  "key18": "3ycQV2PpgeM69NzmynRgUGQJHWuYecektwLotGBLE6mK8D3ovphy6GtyUGQeVrFAHkctcj7cHhaNzGvdQmQLCfNq",
  "key19": "y5BQrjT4HbxMJvPejT7g5JVydepDQxrJ1TzPrWVFGY3q5UoWX9MxG7xLbBMCm7rRMTK9rgn737v1KsLNpr91jwC",
  "key20": "7uCshpiFREeVfY1X2vTo7Wpxp56YEW4dopgUmv7u1YV57AoyeiXdbgXnnTNdyer2ziRzqkD5cQSjRq2LJgiVqAu",
  "key21": "3cHHSm4ZPzQbzGSbC1wdo8QjvHnAjTzawXPiSaZ5qtaFuv3TJe1rvFwenkxxBWzfu74YRVb51rgbzd6qB4ueqNf1",
  "key22": "mwzW5Qi6wrsKNB36w6UkmZyrizf6gNryLMcrdd93nB1De6wWqwfn1a4AT3H5j564qxATjACC3MYWiAoEegtmPvo",
  "key23": "3WHKRRbZYcTWtHuZiNpXvmhybuZJQETmogCjoqBUqXZMo5NB8Jp6AMWVDFJm96doYzzJaD8ofq1Kx1hw4uWRWmp3",
  "key24": "4QA5JH7xvMup21dRvaFCkCpv61x43hV4E53eua4L4dzDFQ9rj6aYw6bWHxfoyrnbcYiD93XZbzRUTwvEdAANdrTe",
  "key25": "2BBCHcUN8cmJVvJp7fod4iZxNvh85uvnRkWwhip7jfXT67yJCMa4QXnHU1MmEwb6jeq4BjJPhbTLV6MLFHMLMLnj",
  "key26": "38KXLgseHTnqB2FUx45mgTEo3kP5N66b9ZgtTXAQvhE5tXVU6mDCw7cVQN16ZPtdcsvZ8JWx2yVvLNWPkMw7UQ6d",
  "key27": "EbNvpKqxhSKiBvobF7obAz6Q13h5qWjtu7BRhQcTePQf7aGcqUk8h3A8eR88a2Mr3V7zK4sakUMT689hfTFRggw",
  "key28": "2TNj2QcTqgji9kYUgHSfdFmdpfxmp34f5UTtyep8AkGDt3p5SiisuAZ9TCi782SxAVVyNg44eJ9UC6zCXELzgF35",
  "key29": "4UMGHJeZHfRgMf3nKUjrzqfHmPG8SEAF1zgLZssCW9qAbFAtKDTSEhRdueKMFKSiF4VB3K4QCBmtHVCf64ooeM92"
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
