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
    "5Q53ciC8H85vXHEUjFPrSxSBbA7H8JvwCKVmRroU48poE1gXESY9Dr276s9AqMKZbNEkTAomN2yU3k64GpfUAKf9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gDPhZGUq881vi2YWTXZeVj173jcB4G8NHm5xPBpxzEfwNWWp5Lm9csbhHymHSSa2HLbirXbYdMwVaV9CucG2d5N",
  "key1": "49a6VvmCzpzuPDskJCSAVunB2SeVP9R2qU4oN57kCADrec9HSWJDAinBPN7UeYzyBZ96xxKCHHjWod1FjgCc7AmY",
  "key2": "QLMSENMgkt7AkgzpXZdqr4ZP9qmVmaRRNjdZc7LWCzzr4p9aP7nVfMUJEfoTmQSkg7rfPVmZeQFddeFTTTuCkof",
  "key3": "jH6NkYoLZWSJYkeTe7YaxJrJjSVf8JBqN4HpZ2sSdquRyeyW61uUQCxC6v2EMgq5Yedjbo7fMRHjpypAEDEH6FY",
  "key4": "4QqH4cNJpnGHMg3cCe5y7W2z85YwdFMKfVnM3V9bqMgr3SjFksRwfR6bsr9PWWoaFyqoDn2zvrWr3Rzg5BqxSSpf",
  "key5": "2zs4VMbaBePMuj8cPvom99oQKi3UxPcnSeLUR2irbYBj3ErVehR17JwfjkHQ3QJXXpmsrevYgSbmmMx65Q8pQ29L",
  "key6": "5yG6QCxpnCVtEXrfCM82qq9xYqYdLAMenPghC3vuHiHzj9p2D6QucR462MXsiYEYEpBQXDTSrsWtZy613hmZybcv",
  "key7": "2EKWFEtd75oVLq9pHS8DrL4Km3BEdUGVG7cVRxfiqzU1orpfemGxd9h28GVxDSN7FiKvqe1m9WuVz6YregFD8WKJ",
  "key8": "3gCe5hu9oB8jc299w4tLDvsCWwMPQH2NNxaXpka14JayfeC4ecvyCMNEeggsL9pNjGM8hWciw5mPCKXAVbtVGLap",
  "key9": "3y2a6vtrY64wJM2AYT38Wa7PGTbNvuFQXnj7js1igXNKqCkvWCBH885u7fkyZCmwihx3dSz6cgfGf7GxzFQhHWag",
  "key10": "3HhV2nDbsy8dLaTq5v3rMYvGdHLJrR1ZaD1FSecSSm1rRLhNebSNE3GmR1BzWC2GLrixiL7idX1oCNQXboamcToB",
  "key11": "5qpHZoNgrZjUVNgmRsCEWP8F5gwDBTsFapRXQRbQvRLRqhFMsp6WsogTrEpq15C9YinWsCHDTug7dDnUinSyPCjC",
  "key12": "5VeD3BsNBDouG8r4Z9Cijzn5Gt3WHGPdy8KwF5Hvou5h1hqcP3M1zRpqpxpdqN2RWjriMtir3iZj7wB1ypNEoBtV",
  "key13": "3CWF6ve2aGsPVwYGVeAfNWyKoboRw48A9FeEumRZvrTL2avuqk4MKWKoBq6C6vDZ64XkYNhG7fPQm8YYEN3xrfWa",
  "key14": "YHW9N2RQU9yihKe5rfCg1WCZWKyiwJTCZXJuk5FEsRzjo6SADMNjgGbHAX4qFUJg6MDxakijfpciJvneZ6uA4bv",
  "key15": "3sm9Y1j1uq6CVzkqPPofuBM3aB5UDXyg1GqYog1C6FqZGcLp9jXR2nqGo6UR3hsjuUgjgMih1fmBXUZusdVDEdLf",
  "key16": "5rGaZvfCdzGgViJngSgDmSbYAdSFKtWSFn5dNmKxBoXy9V4NFv1SbFTnXRfXewKDi57b53FNby2tnMJr6tczkXQk",
  "key17": "2K81tHs4CKA3y1vPYud4BtTKiiLMuVbXYZq1oSX3sD4XpzUyEtHxCHXxvPgMV2QGaZM6AK7oM2ALECw94UxYMgJF",
  "key18": "3paYdUGgtKLzGsY9FdR27NTb9ohhmFM8KRPCCJpxaSUobVEDst3hGjUYWEaYmKuSdPXoLhqqqrDBYVfpqTLz8Nb5",
  "key19": "5i72vm19qVdvUsuqKGrzHgFqZGFGJs5njgRxMasmN5FE2cBEhFPjYGAZSkBk69Eqfs3SU312pQ8TJxSHAmcrHKTz",
  "key20": "2LB5CRtHcCwjoU8CXZvrJBaqH7GvBnfzA4Uth7b23CEvvk6mE4wtKNePfkiCmezNaKLJPc66U8CaFt5mArozcrh4",
  "key21": "4hTKWV9GqL3ADNEJ48185mEX9TtdyNTxpuFJVpJXbehm65qGXHXjnT1Ao3MNEAeXfi1yeXYKqsYo8LLKCXeVV1u2",
  "key22": "5P5SXYqAeB9mybiHPrKHn6aRAxzTYoimLxWL4nwgT5NTjjh1q16ZyX59fUeJUNKzVY3h9MEJZbqadMyRpijnf1iN",
  "key23": "2Qm4ZYXCuREFJe1Y4nhZP2Nh8gSB21mt6iQ16mFzhHf7NFnfiTJNxVuQyX3dMXgFEyd8LhUn9JoZUviofF3WVENG",
  "key24": "SMvw4uwqcPjec36Nj6gjnfnicPLrWZ5VLWyrGxnZ5uhX1yntZJaioB2N8hx5a7h1H7R7ssj7LjLpgbAMV5kkQGk",
  "key25": "47AqWVzpnVWkGqTAGz93HBiJDiCR2f6ZC9Tmzfjzom72q1ZGs2CRaVMa35pTG48JknSjyhCGVocUTqMpuvf3hcS8",
  "key26": "5x251bWHEZQotAyF8T7J4T79vcXVH15FTtZLQZbKf7psakCHRXnESoyjQKYUgyzHWkjvvJmPxi61MxfkxNhQ7AcA",
  "key27": "3FjNnbxc1KHXezwg6pvc1F4UFd4gswiwdgzVU1riH1mQdVA1gxyn5tVTV6W8RSviEdC5jKSfZaS74HPKrfPsgmKA",
  "key28": "38mW9Rxd6DodaWJp1BAPXJCreYRD8h1DvTEVEv4MKzrNweDadyGQDJW8deL5PyUEivZsBvqhBYzkUm6Tzi5Wt3bE",
  "key29": "2u7ghfDztpuukdsEeqBcoeJBhqsjKWFXZE8jPh2qtA8rVvsANAszVvwdwbMvxNzvmvZks1qkdiceZnkqbjACGTkp",
  "key30": "4FNZa7N5hp54HTyBd1MPHHRRzfZ71LbtJZiYAXY1oQUbtyoBHHYUoFWju7ZDDmQAiRsVAKtugBwuM7ir44BuKgy7"
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
