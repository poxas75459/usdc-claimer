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
    "5YKEQLng34LBvp6MhrdAd4TrgMvt36diJahyoTAofu6XqLpbQCb9UFmLUPndqmVoSXjUnFDzYQ6Viayw2RjARvtK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41819QzfjWc7n21gAREwqaSDj4PHx4dGjj67wQXvKfmVokB7LLmfgB5q9aNyT44wTGv3sV4rhUy7zKtH2zhyY3i5",
  "key1": "3M76JPLf8NTfeu6eUrmco1rYWEQw5Ru6KR8EezQFeobWmuSiLHRseaEeR7QpDgMbq9HuAjBwmYHS2pK8aW1hn5dY",
  "key2": "5RQqz87sZfkpPCiaxPpFavMhHxhQX7tRHpKQviFGpySZQ93Ac2UhwCA3kF7xFH2Cgijda5NGN1A45x3Su6omrMov",
  "key3": "ffK8sjzqRw3gnoyPGmUseYnucNEs8qQ4i2YAcbWD7ohqMQCSafh1YeN181RLjKZmvZHvEid7kwVe5cgGPsAugxq",
  "key4": "YVYjUhDrQXmRR995gRgk6qLW7w1dCiRYuCo3bVoqt75647yXM5pcHhG5ozEE7LPM4TtGBQJzvQzeEMreuU99xgR",
  "key5": "7KE6jtDKMT6byVrvyrfdexmk52vTDc9G8C5a8awpqSmmR7PekG3iS1MZNbZfrLH427YBwDsauQqr4y4Ledoj8Qh",
  "key6": "4sLS7BQcMdePWHWtdWLbTzzYcAtynd4s4hVG87fYbfdF14oEdn7za4CrVakzSMy9BGPygSyfCygKs8KGGvy94k8P",
  "key7": "4nczy3HpBMcvq8uHZPV1jBkNjnJ344cs6uHo5NMvPBzK7np9rTy85CJBkxyZwPpzQKAzXU1LSCqDSDeVgjotnUU",
  "key8": "2NJ2GCukjrGk6hbWbWHocSKbzd9MRWgwWo789jS5nae6PvGQW49274zyX8pexM6wtfgi5es49tdhVoiy4wgScm4b",
  "key9": "3PvGhWYZLzXnLvJUN6SkDyg1KTvuDBGaegHhP2EUB5yicmY4uiLq4Z1CthzsMPVXXRMLAfoRju8JwWqn2PsqwiDT",
  "key10": "3Qhxib6zTRCskPUvb8hDA6ufh7hynuuANxZn4WH3CtDnunhi8iQWQNcMnDuasiK4e4Rvt4DFhchL8tUGfCx2kANU",
  "key11": "3qVy4vr7dVTPoCXzNNuQpLojFP2tGx8yb2eMeoqBGpZb3y8p7VLm2KWYbJKCe5xjcMwa3UZkHABMq9WG8qxVBjnC",
  "key12": "2k3ExBq2CDfePFsB3WfvmtwvaUnX72UFt9wpzYZ2BXA9YQQfBS8WTdn6nCaSmGTuPS1Sghopi1VcX7HfdWNmYfx2",
  "key13": "49L8HowpPzmNVamco16vorRcezMvS7J4eiamefJ1ciJDMGz3wNgGhQnkGBErm7znrXvSBSmu4kdr8vJpM3yNiEpX",
  "key14": "46LpUhbg3PubHTp9qyAfrdWZkSMLc4RguCZs6qxCuoNwxBgLZTg4ER8br54CdKYR3i5AxqVAndLrmty2wELaWX4g",
  "key15": "5tT68j4GRtQArkREcjqHANNhuKsRECtmFBryD14eGP5cvVH61dD3HArNUTGMYUZiadpXYgt8M2m6pNHT2G2S3ZPh",
  "key16": "yGhvvVRymLuHGcDs56VnNJMExw3Mt6DKNAqp9MWusnaY3NvVB95UAT5xmnPoFDvvWZi37hpjj2kyH48hPGgTCtE",
  "key17": "5t145AzY9X8RTMckpmoNhyoEd5y4BvX8dGYonMjLBQPBHwZUon9k83scUPaFMsEz29onXF1q7ZHZpcrf5K75efH3",
  "key18": "bgk2f2mX4rjoZtGdbK1URUAV3NBagjfs7QzYxxT59QFnfKbhuhi6Jx6ZGoebL6Q9BZXjmva7zWHoNtNUTu1gSvN",
  "key19": "6thi6k1Lq2nPMqBkpRE1dJaEEsXaUi7Xghks9MM1sMsFWfc7oXYDL4aRBnUpTuhgyQofbrbNGMK1tHHgqtSMkSU",
  "key20": "5TPks82Bm6cFsYmXeGgwanhtcrU4QkDSftKXFfgSuC1N47Jhciw1C6a26ennbnegu5eqFX8vowxX6ti4xKDKXVKi",
  "key21": "2L47fGEibwALiMwtx77gcocT9ihiEqpfHQxYZ1ZbMbav1WGo2Ho5hNkfU3fTMR5iFCh6QyTsq9rXrCQB3VpS9VNx",
  "key22": "tn5M6C4y6Gu5gLtvHbhn2KqhmxqaMrcao9Ly9Sn1sZGoh8VLXHJkmrTsY2KRTyW2Mxd3xdnqmetyZ3rMvEQntCf",
  "key23": "4XESkPzAdAQKsYTZhk2xupeQzqbAtCnoDaNFYmBAdko6X1mAfrLKfARcvRNMRTQyrmFoXjJKLLuxz517nYuNa2Kg",
  "key24": "4sQY4nP58ucSb71e8k4nxceeV67Xh8tCFNFjczhPxebCbiXe7NN2e7wp4zQKtCUeQ7PEZcDFHuwuDMQ8tJCJsodN",
  "key25": "4MVNC65hERvsEVqKPkfsLvuLYqEbXbdQKAnuxpdAocsXNH431CzKCUjMMJMi7D8uGr141Vw2SrkkTsC7LLfEY1q9",
  "key26": "3qvtjnJ5WrMnJ9hfsLY37YaQCinqGCU5tJeSkDPAhP2GBFZAJcYPYcsYUmTvP1pk1UEZtxXRnWGKYHUoUrwk5Jyo"
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
