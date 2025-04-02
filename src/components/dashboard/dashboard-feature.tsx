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
    "4DS1xYuCnnn1xYp6gGwqJjYwbxwSLnkZ4TZMyXNoTAZhvyqPMj1PSt4qejvf9da6Y6eJTE7w467v7G4aQYtpXzRb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hCXvdkYM8V7STrCmBd98RSfC7ZNqqj6ziPggKmQRSJPmpKyGuTdunLouinuELer6ZQzuL8Z7vfjX7JXkR91xkTm",
  "key1": "2qieW1QjK8QD2REtsfUrwzUCN1RQBk5SUStTUWdkDqW7sPqc5otptRfGptoCbpGEUCLD2vDhvjYF17ARCJ7fXwKk",
  "key2": "2LKjQii1ctE5YWbUVhBe8bVGT9j9hr8T1HPxadSGHGmhm31gryAnwqsiZS9y9Lr5cqN7cF8orPQ4fBYD1XDf73DP",
  "key3": "2zBoA3fEXW9EJanpfdNZGRrJPeiSq8MTUSNVUZr7xdePnDZfaYaJvp6Ds84YnNiVSoph2eEDZThj1bLSRotLzFvS",
  "key4": "ifbLh8cPcrpwWhfgDGgTBFKXEYobMFfHVsp9AAi8t3ur34gAbKSQzZoP5StoF7psUynTBYcW1SMLXJx9DCQ3rZz",
  "key5": "4kmMaHAFSDnzpSr4KYHLzSGxBsVbp7Ss5pz1KrX5wQRcYMBEevh6nB8r7uxXEdtysezKtbmaZ1s3LZtJfY8feSQi",
  "key6": "hZ6MeX7CnYiG353GUJ8A6PK3MTSpetzC3HwX1xHedbhnFb4y395uWpXDmLaeUBTiD5LVV4niC1cyHqjj9uHN1YP",
  "key7": "5XDdAhW48f3ZhJorzdADe5B4FxBnAgoAPs7ipvjURJsRbNoMvKHccG8brAYKRWEBWHXbRXB4WcfZQqxRw9CAJes3",
  "key8": "557mSNdsrYyFyk2FMzu9A4kPWi8orUUygVLGC8KvTinLecVpc4zBhdaGwKV8fDmbYk43sn5gbJJqd9vyb3iAKJde",
  "key9": "5NzjkZXxpX3JwBahSi5BhJSsBFP5PvYX8MTJiSPYSYP6qwRjuy6ZhPGGvoxUU1uEfxQv2WNWbwshCc6dKCQhHQQG",
  "key10": "8FDAdqxSnMTS9ZbtVfqmzxQFK558W7DqpiSp6Gc4ucWkjNc2ZUWDBsEqkAyJtRzCs8HcSLp5AkR48QihMvwKecd",
  "key11": "2bJCxnTnzkPReFR3uszw9GYUT2QgDg5QpMT6VJboV4BhrzaLSMqzb8cvva3vjAm2eK7teSt2MLdCGbyKCibtDegg",
  "key12": "3T2qyk5KSAHTra42KGcb1FLTD2UveKNdRtrqrVvMQrr66GwmhfgKwWeAyQyVeErLTGjqTsMgGqKi1VXgxrn4L6XN",
  "key13": "5TstBjoMacvV8nqLsu1pa4DLALy9RnyA5PtKrcgrbRWAY9uFagaYE7TMjoM1U81TYPF1AyF9N1AHjb429ADzCfsQ",
  "key14": "2hFopNcj6pJSYZSrjJquKmLVgAyYqZUBem6nvvNT1iSZi6tDvJriuCPuMuU88VPzLaUD6rANVmtMaX1XLBN4sKtn",
  "key15": "5zSJ8YrMh2i6U6WVuL3F3pEcnseJsWGXDwJcwo9EUGack1jtc8qWhDbXQVqCWMdyD6joa5XHYwnfcKWa6GJBBRwb",
  "key16": "4SqpkuEvFquibZyKRw1M6JJX9rLiP9sv7TRCdrp1Vap6vNHBT5GA46YqRRkjaDduA6Z1Fhy17pgu1Vnx4PY8eUZs",
  "key17": "pMRUWqvNNt1VYvRD8kvSboEb1rx2eeF2qejnvayd7d1HDKMHTGhQ6yQ3qWqKYnpaJ7UMd1aq9JCiFffY9P3xV6B",
  "key18": "sK1vpjPh2NHZcAR9ey9gfiu5qsnEEMp6jojD8SNJ1pLcZ2XUgT8mFo1HSb8jKqfFo227CEyGBbiKhTB8P6QvCDi",
  "key19": "4mgx9LdbY2mPwEqQQSwwY6pN3wZjw5Z6UvMmEDvY3d9jwsYStsttwDZCEzMcKJ4HhoCLVfYtdcQAX348cgKP81Bu",
  "key20": "4dYy9CRxxddaNLf4iZzR9Setiw3zHMdAGnSzD1dhQpnCbnWzpzKn3T5VdP64nUnZFKLPNCNcQNez3dQosymYdic7",
  "key21": "4iiU9RcjC3kr62NBNSRoB42puXGNFmWGLH4iogHNR357MF8o3KTvYemCp3Nbz2TmTkwEbanChPvfWD24BhvrN6rV",
  "key22": "4FPEZT3uWaVyr5jPNF4ew3xBztH1Y3HMtPTJN2twbweC9zG8TQbZ4Yjc9RK4ReA5mhuA761rS9TPr4Zyq7DpFafV",
  "key23": "4zBymoxkkuTNga2XGp1DfRis9Et3psyJxy9oTfAsiiK8SXwMCXZb8EG34FaZfiF7irC2Q1KCop1jSHyCweGSrnCn",
  "key24": "2TgJtBVwcCXwqqkc6eRQ7FwbLKtNwCbbaYZjCY5B2NaZkCgQLL98gwn7GFx7Y1d9KqpB1AZ7ab67VrFJUyQh7VnA",
  "key25": "5J7BUeam9nNjmAmehertmjAaJG4bqiDfwUm2adLPqsEaXHGqTA67NFzN8DA1gNWrwrSyMZJ8r3ZYMaZQjRNPXurU",
  "key26": "3CMZs32kvYKUs7rDLMkqqnC4SU4PFhaiLACwcV693J71GAsVAbKnWw45WxpZuqvmyvkcDw7o3mZxwFd59SrDGCWd",
  "key27": "31C2wd4Dr8PSiCuPXc97g4udHjqwSaoaUShffaL8bMuA7jregTNiEJWSf3Bzr1CwwdFy9tNCVnL8dGoDGkx2oqu8",
  "key28": "4rVvRsz6mjtc2qxdkGXoATWnFgH86PuZDk4ZUMLYCUzVUYt36sEMi65snkWapTNkeQGr4mifpMfS4NRbDXUFZk79",
  "key29": "4t98reFGFULnFGUJubhKi9BJrZ55SEGaeaxE2EbDZJvwsA7FvY9FZ5kFg43zNNCpF9uTAqLTHvHbh2XN6WTgcko9",
  "key30": "3W1KEynhS77Cte61vF1zWwmkpqTEvpWN3Rvkt4Km5mYPuSLiu8MExHDJo7vHeQwSKWVUQs3k1QiGv5WmY2YW8B7w",
  "key31": "3hpPDg1o1xZZGWPQhj6mPFo5SatSLdnLuxsvNR2V1M7ttNHm3f4kAaZe5fRWghW83H1P3PRxqEximTpHF5PHFn1R",
  "key32": "2KZS3C93PzrwCmEjwk9wi2gNUkZei1g9PUveRLLgFW2fxbgShyyiY7WS8cGtXZgM79jmqV6C4dcu6Y4cSj1MfZzz",
  "key33": "33inEhNFoqstsaTNnWrBmtPWCCXMcfJsyHkpdKREkumDT9VLLwDu4B56F6Amyrc38wy1eN8iz6q8tHsJ2CJTDfEh",
  "key34": "2zTxcteXDZZgmUgie5ynzVpGT2tZxYg7f4FbTMVqBpDuNbck67oUjw9y3XVYLeDyX1jBKr3KyhRP3HZaR24M7w16",
  "key35": "49ZdCRYNM9vdrmLCJMVk4YxKGkHLihHHYFZTdRREyxqNHosjUd3GetzCC1PbEw8kuA1LESf4JjRA4Wme8AU4Wwnj",
  "key36": "3HoNqoRU7A81jp3LVbhtuXMfLNdvFoGxt4yhe2WHjQ25dYUdRzuBozkCAGSSouEg7aotU9Vrm2RSpVhhE4QYo2h9",
  "key37": "3eUzry9mjKWdi4f7tZ179wE1HazfiwMoieoDUKG3sbrcuYdyJpXhNBT4CjXaXes2SV4TMKjEdfHWqKNdMMcnNVzx",
  "key38": "2uxrP12AmgLzokvxGGQ8T23EHM9Yt4BFyteS6C2YY4813XaqFotNmyDuMWDXh3PSp3YYPLdqUHAzCSvbnMEdRUCf",
  "key39": "GCYgVrg2jG43i2fDcocsGcSY6F5m93D2cQVLTNsfogD4PcwKta9eeMYFZPWJ7kMq7QpiCrGPdn9xh1gmZZCd6zK",
  "key40": "2GxBUovcepQNtwuzhHpixko98hzbB9GiRAJ1LbNVZ8MrjXjb1VoRxugNJHYHV2Cs6ZudkFJCqH9hoqW9z4CqTbKW",
  "key41": "oLntNd3Svv5E1ZBrL9TM6JH5poiA1jJbAuYMYp9juN2Pc7TKFpYSBuQRS2gnw1KFcXnaHSLLiAt611SKdAad1eD"
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
