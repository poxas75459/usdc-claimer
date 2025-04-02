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
    "3Ad8hcrgiMmEeSX6ZdhdwmbZqQQeDzXDKJPt5D5XLYfS8seaSvSp8QCjsW3V1rToFwAMQvZNMTgLCp75Wfrp85g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "86dYLLXgF5esCh2q5hJenz2SQbU6WgA5a88qdLV8YM5GvAMhcF3u4VwdRCQxD1kokaEq7eaom3cJpitfoC2A19F",
  "key1": "35GJkCFW7URGk2LbwpZVLoV3hT9sVAxpw4ppNgLECZRQRvXJhtdNEN26in9K4bw4arNbMsbWzYkg7EHCqH9yjTze",
  "key2": "4ttbpqzJmixCAQafPyha48wRdB7zEHL8ATxLA8TXyyWmoBmV4oi17Y7WyySqRaAYvB3thkjhfdCkziEqAYEnTvgr",
  "key3": "2KL9ZZiFinATW1bV1CDHhpcyFDWEDRc67ue4Mv773EiTb1FCgu6DCRQfGD4pifGtFvaE9DX4yHevkZuHvotedZTA",
  "key4": "5sxiSDW5ESPvNoTjvp8uNGiWF4sXpHjqcRxsTh3y6Fv42hqPeUWKVnqzkKXjcBVq3jSx4kiri7stGjZTn1B7T8Gm",
  "key5": "5wRYwqQsbzYT8TpgNCpLTEwrfYC2wAaS5zwwjdiVWpYwgvScS8Tad9T2okCT1CvQEHVKWmgEYY5iHtKCPydjeR5Q",
  "key6": "1enCst6z9rQWMrnzreyeYeWZBD6W99eshvMNvthxCx1an9599mArALnCWt8Q5yNBxkg8PFC2dFPjWCK9332WV2f",
  "key7": "3js8D9mXArmyseS98oJWNq9diAfXbUP6rV3NxXNUzppk9g84gAc4xHZYyfY252EXDrp7Sr8JcxjZD8mATELpRGCM",
  "key8": "3bytM6najr8xKPuEVh8MX6s9zQLJNNVsyNMszhwpKy8dxVascf2hqAAx8ZGqqzXp6AwxsJDoxwwKy29PWtxM6a2P",
  "key9": "5uHQwMoPUBxnuqfFtUCmqWUNVh8bUgKjUQgFou4UKko6AKXzEZJeWU7f5KhhBPPYcDSAa9hSVyBFq29goCs56dUA",
  "key10": "5dhxud4od3VGo4v4yGjsoBpuLD3ALiZYJKBGzneuLdLPM31EUCtmPTFgYF7z3bxroQP1jb3wVmD5gC4R1pzhreXY",
  "key11": "27UwFwbJ6t3zhM8tHiLzVBivwmbg4M6YLisGQ68yNbQTdJofCN3YsTwu4pdW4Q8SJCNNvKvUajk7Ai1QxXwij5Gd",
  "key12": "2FXkmDgCPLMx2Ccip5dRxJZY42UNAGYDJ5wSKsq14BxqcK7torFVrCvL4TGAM5YSjAWZrUZFNRy9tvgX3CMPiv2G",
  "key13": "4DFvPTZRwfGMF3SKChEvthPNMsDskj5Mz9578enfW1AmfFQBCYBpSFbRzPyWWfbgbLgkK5DoXK6ehB66L95mxCVh",
  "key14": "poUr9rzfwpRAZ1w4CbAUy8odZnG3NDNGbLQgE7XLHk4DyTW8gAFJCwjhTU4Cc3VZPDwYQU64TCwNb7vb2BWkPeU",
  "key15": "49hTCGCda1qDajpfwwyz9WmDhjtb5ZuobG4p4yhiMdTmqsu6ZscjokWtouE3A64BfGV2scRc4FHUDzTcDMmgbVei",
  "key16": "1AGnVyCEXG71aBTCmkDhPwJ2Z5N85UjPFxhpNJAmSuSSyzKhCjGaExE5iQ3CVb1Yyp8eGp92QbYq6i3BKD9E8oW",
  "key17": "pAcWWKTYH5BtKQf4mjB2c9iVgXhZHD1xYVEvzEunNUv6DjauF78c684CsXpjiua6oCNTxAsdxsPzcEo6AVKjtMF",
  "key18": "2mrt4repJBBStFLrvH7hpVQu6TnaLTgswosrmRjT9Nw8XgYnzbu8aj9APGPFWynaDfK2pY3wHY1vqvSrp95hvs8L",
  "key19": "4spB7eKA8RRdTnyvYoB3hQD7bHkRe42X6BWeDq4eavN3ky2hS7J12NH2mh7J6tGZHFgyz2rveeTq2FbUKczKYDK3",
  "key20": "2wQJ2AA2pyozubiMhg6HLGDYhYwJmP1dKBEt6xcUQrEPScXuwVRDF1grnBN3aYu7Ent5jy6WjngCf75YfCKffoUD",
  "key21": "2vuSY7R1kpz45xUHfpBMppG4mddQJ66dkkZmwt4NovuST6rPhZaYurB48XKi6hvFdQTomag2E78noZ9T7KW4e24Z",
  "key22": "2URY5E196TY8HfhtZpB5b5iwkZ6ygqvM9xVPq2ghFZMjBQFgUdAwy6EYjnf9Cad8Xs4ErYGDverKTkvys9VAQhxZ",
  "key23": "5ywNZEkhU6MzoDhXVqhSAdCV4FSMquxspkbXTK1mJzzVyYuHaTjrtQnofa6fS9iongzQ8xLmudEE2ayjVRkYP3GY",
  "key24": "4NrRAnwUT99tQvttbJCC7vkBeBQETgJrxJmh2fewnYXGFrjXeFXNQDLmQ4satLKzncsu4Rm8kgPEUvEPXFDbj8vN",
  "key25": "35CGgGYtCzbEzwDNgVGUS8Qdo9MQ186qsuXUxCbSHFCdijvFuYKsFeGpmJgjKME6icYD7z7tn8ZCw8CzeZwbyJSW",
  "key26": "9dRVbGLFwJ9A75vUWg5kwbPfmxvhw6GXg4uPemRUX2rN3Zv59BhNMp8NzMPvFH5pNEBrghuoJkUuYSRDK44Qr3a",
  "key27": "5zphAB2b4KKwjqeUj1gZzWmrJi1NSeATsa9MJ4mHHfxLThBtP8H4MNdb6DA9uu6iqi981v1s7yMq55JQUsZZHSkd",
  "key28": "3G3wSq4nJFMXRhywYpnK79YNaRgbxdi1AtTPFuNgBsQhCiyxk1mdsEhKPuRnZEaSnCdo3QieMncWmQMSUxBGKfKh"
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
