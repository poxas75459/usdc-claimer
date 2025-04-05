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
    "PVVh19VzW3nqg1MWysWHpDGovZ6uNY8wZgkye6xrbTdAfzYRkbV9EkB3KBYRWz4hNKKJyGyDVUVb87kgYdmBWc4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jwi3t9zj49H5zjF2avSVqX78JSiR3GUVTzSjkVeL1ncX4Ur9MJE2rK8Msy7f6dPaUVCna15xBr52oVD1Avvx2ue",
  "key1": "eDZkrioguFdvi8VKk3kabnSp6PWg32JtEWPB6mP5ymCMCga2ztLki46oeLuqNY6Vy1PinBDZRb5frPmyR6bQnQ3",
  "key2": "44mNUWveGUnfbp4hrEFpoaS88ea8Vuxy5hSaYTTaLbUtndBFUfME7JaBXg3mkcTmzjogKh6iHA8h1WHarKXQuPUd",
  "key3": "3J3kAaxWvLiMwnHmqU1H2jBwieFFeNcYZFN7ntevqktBDL91MihuM3XMZorqYkURWR8UVypjcttijxwqLK9nXgFK",
  "key4": "2WfTmHYNRsM3FDEqEewi8jFQVqj64ftdCod1TSnarmPCdGXoopKsfpsGMsMMkXm2mEh83oVXkqRPd1EVjLvqyctq",
  "key5": "27pp2urGwKXZD1vnqTsNCmsgPJCU77NrY88W7dRoP6VQqp4WdRByGyZR3dUzneBA8CzPusVAqc1CEg3rg3gWdB6f",
  "key6": "5bUubHu76tXJekcvrrkhbycX3313m3vhskR39PxtDpS2a5ouRcouBJ1Fid1GMcF58Jxao7TYFjoaBigh5E3KGTNt",
  "key7": "3rrdUiyoT3u8zudateAdGj7mRfxfstc1qd31HS3xXR92Wt5ci6wvi9hn9Xfozpajj5V4Dyeu4yn9fVxfKfgndZz6",
  "key8": "33DXnmDYvaKG4WpzAmrhifGyuU3UYSYYxsZ65T6UtUWXzBYL8AhPFgrMZ3NiNdiBS1cEBBpbfPCrhEJ699sMfCfU",
  "key9": "33z9PegtL44futc5M1peTSVmrybDJHLxCxyt2GrwsbVvWLLbnmBCmJyKNFxNn1Yr7CdJNNqAAK2T4SWsYNEfzexi",
  "key10": "3MPzDaJtcMgnBYUmKQe7927cyXZbjTiWkox3mc5TakjMBeUtgnLKRePzU6BuuwoGKp9ueB6VjQJW7Ygs2rBWon8R",
  "key11": "5TdWisz3tsmMbDsE1vJfUucoo5SD62Z2s2epY5wxfJ3SCwTn6sECw3mF2F9SY9bF8TtB9QF4TbzjxeJqbthR4miX",
  "key12": "5pPuhRZuTGu4hKjF6fh4hSdZmyZWSJh6ovSrJphRbU5z5Fsp5BWvG1vSRaLUVTHNRZFqGuC8cDQ27eRQXHY2ds4W",
  "key13": "3TZ8NVm78PBUDQ22oLXrRnWQY96F2WSwC9r2PhiEJk5ZiSuwSyLaMUGC2ALu4mcNDarf33dJtkEmnybGQQZKktdW",
  "key14": "2BZtUEQVwiLJ3Aa5n2zrqtAEyFuGNuupWDDPYp9iLAAeJFgpHHnUhTTCryanKGXmBd3QueC7RzNhrub4a9rV4FiV",
  "key15": "2KsfBXZUAzTbeasCmXvoUDQedeVuSXQ7vK2EtymHiaJEp2pw8DRUgYZARrV7WhFQyDXGmRfzo3Ew3FuFaArupBzY",
  "key16": "sYUMk4YiTLxxMt64S6fuXdbhvQF4pwBiGipS5Ap6Dv1WxdqW6g5zzouL8ZvXfybU3DBJ24dzi6XQNPK4ZGE8eti",
  "key17": "5rD5F4jyqPREA8ciZR9brADrLZCfXtbbywab65Lzo8q5E9RjEb4PZ8Usinefr1SnU6tt4ppzEc5nRPCnKgrrdNtx",
  "key18": "3dqJk4t971do2YrRXQfMSXTbbGVK5VjfiJLWWZ2fEcSLGKXsq5M6Ghp4JgXzXc9nogzYg2gCheFr8nzyMcDsoGcN",
  "key19": "VDRQkLfje6jdTBFzRaHi9PSqDeypF5S4XTbt6MzecjWvwbiGjf4KRAZGLant9cppYvD89aEJgnC1oTJLmyeLwRN",
  "key20": "rTvqFN4D7zzNzUxniw9yWfVduhwbbAc3LG7ZpJPZBt4yyKs5c2zpd9CGtckQbXi2TQYnPx8VoidC44KnhZxFhMs",
  "key21": "4b7xFmE4Ta3QVq2S8tnL9i3ngpB3o8bn4aJjvGkuWEmrXDr7khyfPnuFNF4RjauDeWxZtrkwp5BEHx4kmU3au1tE",
  "key22": "4tpWF5nLYvUCoQBX1NHjwZLx6kBm1DZQR9VUtBW16kBNdmhvnSc74HQVhmvRKiSGhAyT2sFBjNeCSf3LESVPeSWU",
  "key23": "4diMxbuXpUw48WNX2v6YTRjSCGwDgZdKYasS6TAJhagXSUC4p886QorzRLb984zkQCFcF4Zjqa3p79ssKangVoHA",
  "key24": "3B9iPGTbKSLWZDTRP5g9WS5mR2Sns9XL5Vbibbd2w82tgy51UHWWUDyd6SQr6TZ4dQNRjfFTvN6iCYmRgpSRPDTb",
  "key25": "5y4jwrPkpWG1oMhka9GWgUbfhA9FdorV47fQqUeSft5nJqhkgAYCWbyjuVWj2tCt9eCJKCUSLzR3iGC8p1Svipqp",
  "key26": "Ex6VVM6BXHvH7yadnUCpQo3jR2xUhTTG8ajmqz3vvMLgDFcAhYicGUmDDoEZAtaQMUMLZTvTGBKcGJhmJFsuAiM",
  "key27": "4JnJLCtBTFoBAbaSkermy6oHyxKpYRiYw7tX2QTHRKwNBTTjmgpw3weuTQpgphvX7UQPn4dwCaqetUt1APUr3XGK",
  "key28": "3xZ747W1CXoZWabK4pHamdocmo5A1f6zGvWARRnHiMn4yAJqQ6cJwTB76V8up2N6gzkcLLJbCi76mJU3LV16qLqj",
  "key29": "42uG7nQffoCbf1qPxwB2aNJJ6a9sB2wtAtxoeCdv251otB4WZu1ZEvNoZAJSqNDPuT68avaP1RG9DVjJQ2brC8Sz"
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
