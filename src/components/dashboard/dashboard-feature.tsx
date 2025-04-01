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
    "3eZ7Em4eqd13vigzSVN4Ca8S9rd6wRP6jcRs8AwcY95mfR3KBm5zhAMokpxmzh5maMh5HuR1rEZH8BFsmpwyhT9z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "223YgB7KX53b7fRAkGZexWq419Rk5ZNaNzDzM5a5EXkMMoaSwnV15tptdgFeEzXz8hF3EP9aeYSUW5aUBagjbbwC",
  "key1": "2NTmSWsbkp89DizQP775Kdwkmw332dNqqTxYsYpTSgJvExaqrzUu9VaNkwKZLA4fMiQfkSGX61gkDE5bUhcsaATs",
  "key2": "gu4pLpS58q3181euEuVEqeHSntngpLcrnrT6fQ3nV6DTvwYVwcw62jRNPfJEqed4DMm82PGyYQ5hpAkMaBaB51R",
  "key3": "3pYodM7JxNxnNfr4VhX4fhzdMzBUrRvaERDZW9MzzxszcsmErBvjLYCv5wBZzve4xrSsAqY3C2MZ7u8j9xw5P4FN",
  "key4": "47y4gxmnhMtwRhsBb56USZtVDZFAMQUANEpzasyW3KqSYzm4j9owyH17LzwndUoYbvJci4f1DhFYRBQ7vKaq1v86",
  "key5": "4RcrJstEA1cnyDP3fdxg8MVYpPoxv5SzQ3Gt8dsb73VAbUrGaRdNfN3uVaapmSeBAURqjyEXVuBB2UxpUW6GBeC9",
  "key6": "3mbW2upqfy3H3rbVrNwYvxP3xDhKYhYLgUrYoyMxHRE1A7Fpv8vCW9Pf7vjc8csjWCGrmcgAe2XPejDs6wXXNfZ5",
  "key7": "4ZPZ6nQ5xmaNQXzn2Ch8gLWme167Hkze4UYRfo1vxxEuHaZBY9XF1yYjN8kDQtit22Ws7z6HMooKsUesjTsRPMSV",
  "key8": "3kePmTLv6VKqpfbjTjM63xfomDznaKCa4NCSbjccMV8MHJqtva99qaKVF76HChbiJfUHWEBQaVKM6WprxvaZCrZd",
  "key9": "2sSpmWNoETxPxTQstjbLG23igtdxytC4wcCdPCkZznu2w1dacSopx4EDhEejkfxPeBJbojLddwgc1u3tCX2bYg3H",
  "key10": "3J2Ukbj5AqEBUupHjVnW1ACbkKn6NBt1iL46av9xqStzZndUSEiHNHaLtThXv32EKyBx43hrMypAtCmdowG67rWL",
  "key11": "41zEhrvBMDvS17WRA4gCc8KJHpYe3MEE2JvmfjakFm5z7asRDaxLWzaRfXE6gZeovtJRXCZU1Un445AEhRxq1fzp",
  "key12": "4YkcxgjL7ZZguMF2hGqHyuT4ugEJ3SpGPvHPz5Yu6hAh8QQYKPZDPB6xzFwtjWtmPfwv2oJedGgQ7sbcZhDfqPrA",
  "key13": "35PJNKf6xDgCyxVJF9BGXaCyqTnKu1ReMHgJxaymWCkCGTFSGxERiew5H6STz7EpswB4ZNYbYw9JmExfh6aUrWmC",
  "key14": "4pvccBeBdw81Pbf3fJLZaVqoXwyJXbfMbksdnenzEpdaE7pt57UcWURivhU7bkEFqV8ahxnXndLRxPnuFf4LKCzU",
  "key15": "2vxCnF3vuwaSB2qV41LobjTnSsNskari45Pbfm9ZkPoTDMVjo1SNaM6CHjLqQPQpyhZP1LdFugmykM8tpxuyM6VX",
  "key16": "5k3kfeqnCcCtkeAPeFwHGBpiaG1VRqnJ4trGuwu8VL99dnyDrm1xdPQyR9UTzwJBX9DQhomxWXwGEuc6Texe4vuB",
  "key17": "5Kg4CGYkMAtdPBT2G9hdrEkzppXfEyC5biwCVRzJ78KXAetrtq11a4mxZk4QUW3XGeSrNJN3or9JfhyRYSShjMtv",
  "key18": "aHySMMPvmVTAKVBojvLP2q5XBkDKxEstfNsQVMJ7EvwNbkiqBrhQXpv4wtJobgQpAHXBLFoeiSVf7oUG1Q3XnKq",
  "key19": "4bSfkL634JRkNJsKhS2dicjre24KenyjdDn47UiYqRXyFNEdGePJKorivsa67aa9SHrhUgivogB6EnvYF9BD2AP5",
  "key20": "soDwkt8E9vsZKJ43ZLff344pzeXdTQZ5xMgJEJNzHvdcu2fdU5cZ5XKRpkvS6ZFKQ6wC7p2cVhovYpL9W9GW36W",
  "key21": "4t2pcqmzuuHmNppDR8g5Zwwu6SsGHssQmc9gM6bg6uM25SyXbWtwzjbk6kACVnyG3cpgQ3FzuA7fR1mrQYWoFUeQ",
  "key22": "2jjDSi9Aa8ASyvvkoKzbDie2svBscS33bY9hXKuHuX7UmHkPwgVYj2HEM2KLEzhdzts1fpVCGRbhULTBVFMgUf1z",
  "key23": "56dBDBx7TVEHmRh4MieBUXaGsLkEKesjWLHqmNAQ64qxN5JjB1cMjkKbcwvjxXD7py5gfKtSoYtKw6BpMCvi7S5Q",
  "key24": "5ckYgUZvTfQ21n9vy5cnGxrGfJVTSSuEmcqNMPR8SoerESGQaFig7Zp4U6mPWRN7hXTh4yZcrodfB3kjbNBYgrUk",
  "key25": "9Y3Swu1oeLY1odCoJtwqX9hU4AtfMGvx9f2Wh43qSnaPEKp6WqWkHu5QkaSPPkb7r92AGJCzfNnQY3TKVSarmeR",
  "key26": "4WKvyncNNKdzsHqK3XUfnexoPfRnaN8K9ZmsfjJjLNqgPSKWsyQZM98b469y6TwFdyAvQdVDrQ2cd1RKt2KoEtvp",
  "key27": "4sQzzChpWRHzWAvLV2cYf8U5SY2gMLoQrZM3e4pzK8WMbKy3hnaAxpUot43KHJDynX2gLWUPp332nxari8MzTUuc",
  "key28": "2TnY3fiXFWhotNxo2hirs43ufhmcAmVUWXwnLYLi7bK9qt9UXjm11qfReNaUMcj1UrWdmrVGNCuS4w1gB44ZDsnT",
  "key29": "5FYJ6NbGBFP81n9sJEC7evpGMgoU6hxntRCJts7VRkyBEjVc1TPi4tpjRDnmM2ZxoXcdouusokNSUjFNyLWf5Jay"
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
