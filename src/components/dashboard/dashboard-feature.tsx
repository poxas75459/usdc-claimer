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
    "5M9CncwS6yELeX11wcGr7u3tsLpvEQnRHmQYgMP6VhkYFKjYejKmuBf36WFkfpiwY7Ztisqi84jomLGXUFuvnBcX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gWuRfb1BXQpRB6sHnG2WNcaroWPabBz7SS5A6mFUDDxRPcP9QH1sNoHCNZ3kX2GmB5RXHaP2JCe6VLbSM9UpqCS",
  "key1": "2tiPF37gXBkhofky2VeVijAFUuyWGZvqawtZgyymSKAMYe4kJNDu4jWZf8yNGmNkHnqP7pEHfRfdTgehHNZVqY8h",
  "key2": "4y1t9StbjqYriZFK2RaUnEA1zTYPE3npn2wqp3fcxqDZVdLSTVHfLr5fR5zx9K9JoQHU5wJmPo3eX16QX9yydRnA",
  "key3": "52cXkNhBdcSZmBvncFUyZMvYTDm8sdnaFAuAhdjyy3oBi2zTzQXprVkPhcfMQHFyzvjVvY3tRUxQpySUoQUpFikh",
  "key4": "3WVh4p6cdReYqVYAmJKRx5gLUjAf9CWajjtWeazXuSqsGSqZcnq5GucpE2KiuggM8osxbSfM8p78bhBmWarNCSGy",
  "key5": "TsbYGydPhLytv3w2rPeVBskdh8cUb5GFXFbn2dc9ZnPGHtGVxUmqPcYwnwRf8btyDMn1K4k3TzzaEWi5wKhGcRU",
  "key6": "2AUKaECQWahvqxVGKHXbezusxGkJang5cq4ya5RoGpHS5Vmu22Vhz4FBMvHvYruE4cWp24w25wrq6gNnALfobG2h",
  "key7": "4h6Li2j4kugUBAofhxL2Q67wEUK5Z7BLsdF3HgKkT3yKj6MbX711Xg4R61mEi9xaBzNFrXKfVVuW3xBodR68VfXs",
  "key8": "2QkWQx2wUXEFjVivESECGFDa6xX6L95x5bpBuy2h7YiPzTRgiyZxoYFNNBErrueCTbDHns2ungxvdmpMiFxRE1Mo",
  "key9": "5xi1DfEdBMSGRGw6pfqFPXVaEHMzAoNzLx5vdLJhpENbA3iaArSKm8MPicVjAD7JWao3aYde8BvQYjDYJMA5qvCN",
  "key10": "3rtdEds3ogbXMDmqKRiLrkSfRg3RoHvhphUy5jCDxt1FjUSSXKv5sLfiZu2oJtQUtpzK1rQGEDQNf5hDBX9wP6dY",
  "key11": "2CE6V6mrQmnEfeFW4w2K64ZvBvKCybqnNKLKwELJGpvyYeS55u5NFFZUqyBjEfyAuW8MpmaJYfzWx8hh3LC5J7vq",
  "key12": "5e4EqjfX1NBYKwBK3ZNfGxQRMWBarsK7MWhYoUs6sRAiELq5uAgVEZfcLSSiwnvkspnsX8bb5qZ87KANfKskuyAQ",
  "key13": "UAQArjLtkBfdnFgtCDEfuuJtEuE2hrXqxD9xtDoBhzsfzKKGEUoLmSvPbjoEHXrjKBhbfcC3syTp4rMhhMxspht",
  "key14": "2AMDWLeBuaRYayRyCcM59unNzuhTkFBoFbemqoCJ6MWvAF4b8TWWtKespTBhas7V59gFVJbF1WApkZr8m2KGrwsh",
  "key15": "2BEeftntt75wS5dTKR5KW25MdY5yfKYvTTKkKjz75uFWvhVEz93oKdhG8MGmrcCWL9cJaSbXpKuB5EjT8RGp1ac2",
  "key16": "67LXwVSPNVM1CYaj7NNS4WimdANWzB1iCZLepcuZtmGERg6RC5E7F96DkNf13h9ggN5TNoUiLYHXydgcTfq2QrnE",
  "key17": "8hHmD7LWTH6qWpbpa8rE4dgiFY7kQ97NMpWYc8LoxNQ8DNHkGzeXGLgBz66C79PEA9X5Nn4hJ5c5BcEx8bRJxmZ",
  "key18": "PMBKneVPTi8rW5bJnYBv7GCivsU2usu7btxTFvSsQbeQV8Nn3etB1dE2dmgcnD5fdy4CG5AAzsiLS8umK7qeuoH",
  "key19": "ze3W8MqAdX3pqbmaugQdSJvaRMa5sGZAro995yhLx1t5aMaev9dAj9WaH96bwmyosicQ8zbrTdR5aYQgRwqWKRq",
  "key20": "4vuAKGuvAgUS3Q2pbQHWwninqzVwRX6CgLNUBXpZiavDwcM9UHRsXSLQa1Lk14hYjwestC1qp8ndfBq5bX9uL8Nc",
  "key21": "5LFXrX1PvhsSGAFuijYarjZtddhfDGsGDAe33JAopVWaDMeH5JdKjm7vcukERHMaveaaZoqGEShk4K6SEinLh6yQ",
  "key22": "38TLhnZXASLimyQq2M7ntebrLPZBXaE63jGKmvxudv3LQRDaypaWwNxJ8k1Ji1JcDDVvS8iQsvReXFewUTvY1epL",
  "key23": "2qC1WP9MT7gbPwkQugB5wvBNTScEYHG19Xa1dPXUG8Xzze8ucSphMccQA8Lyy1UKK7MPgPsUL7yxBAmh47TT5ZA",
  "key24": "3bMy96meVMkjRaLnzgkLktRAdSRAx8hMK24sqNasPgjwG81Ebx6UpADZej88YuF5xmphYg364gyaQ3Pk6g5Huiex",
  "key25": "3mmZLXWfUPWzm1Gvz81Qjnabe9R778xhPoVxsx66tkVpDbL8ixVWk67Jy9jx8NDgctuMFPKeAPFVRUiScbqPDkxS",
  "key26": "2SknzLAXBsXrTQka28pkjfVQaUWbXU197hs9HsMdA4VjZTKnbf435NYxsdyxJ8cR4XpSytKDh3WSiL5CgP44NMo1"
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
