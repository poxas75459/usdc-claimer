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
    "6fwGTVsFhYnX3qNPu6utBnNpKT3bGYoF4X6R3W4qC5gwPebasigYFSCJ9vV8YJbtYzj6WNPsQsAjCgo11nCWkPR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NF1cXjahvHkvGMKu1Cr4hPu5aDopF6RzNVuWEedvzTKhqbpAJ2kVZpqSWrwReBH1ULDVVQYRYzq684AVs2SiKTm",
  "key1": "dpqamoh71aJz3G9sj2xiFCzJfcoDULj5rJcWqkojJkgGw4wnchngvcmRzZUqo2XJyL2phbbz9CGNKTeuFDGfJ8s",
  "key2": "56VSdCeG3wofbfYQsxENAwUU2wTG47ovwieYsNapf3MahaLopLhobU6agg4tQmeRoYkbm5Bi6cHzCHU9ZiEEkYos",
  "key3": "33BPuwFwHoPz8WNedBoMKeZhBT6aaxJ39baJybsAApBpnubApAA9y7iebsajzkD8XKPfct2rud1h7nz7ooP87bhu",
  "key4": "3wMdaRA6UE4qJgcnaXMsdvpFQV6UF1FnM6AEmUvW3Fhxe5TrSmjgSVjxFQdiKP1xr55oUxiRtPgDWNyKATG9G2Qp",
  "key5": "2KpRB2RBghzuSqixU6mxchZt3e7vUfUDJiHRs6fcZzxjAjdA1h37kFxkcGG8knGGeTA6AMoq5JVFw8b1BMHxqGmg",
  "key6": "51iG8stSY9T3GpmY5bip3TnT1D5UbXKJ1FZVwXD23EVfx9LtGCeuNykjnu1SYMUphFbLZmtYs5hUwJKAsJqUqfxy",
  "key7": "3TxkubAcjThrHom64tcMhav2fW4CMKmvC4XSr5SZwnHiubUTn3hQzrBHRLQuXrRRpFaoXpk1rK4DE2wnVMMBSYAz",
  "key8": "5sppUPo6ZYSWzjXa4hJPgFzeKgZ7tty5mcyQQBbbPHVduiPbfBEvU3e1vCn4XmfBhQYcNDHaSDaLrUsGgk4Pb6qv",
  "key9": "3RbkVmAqxQsr5zX4EvintjLE7fWfPnZAxdo8ymzsveXneKBFhA64zva71WDBTPHNNb6Z77mRnZXV2rrwPbHFAJQb",
  "key10": "2qPLW9NWsXrgo23GhL2acwhdjpywzZz4X353AHEr1nXHbSYnyuCZnwMNLpxwqG3hnCiRF6wam5rN4y8aBtEtvrge",
  "key11": "2mMneNqKaKfmfUiY9FGjszSLZy1d2RHwBeuSTUgfu4MpdNGrvheiBkHieE7ymWr6tXHUaxN2EoYd2ymxmh6E2tbf",
  "key12": "2MypmntG33n1KB24JME1iJUVzcgm4ibDv4zGyicXMYnHw88tJwyn9SUKptjGXbsJ8WX5pn99ZZVRiGE6e12oq3Tw",
  "key13": "2nTyFDSGs75uCx5KP4nyuoGPD5wEoQUGQtEwfVYAG45K5j8751G3pLYHTsdTUDEZKzrKJ1x759Br4T6kSbhN3uKK",
  "key14": "56NnWAN13HWmJdRz9g1ErNUW4t9rcmY6HJjHFYFYRb7a4rAHPQh81cD6JWYXEyVhJrLrtXF9viVGcBo6vBHWmFJh",
  "key15": "5QJkP2BcayDCp4aedeY1AMbeB3atmLzpnopyuCe2yhvxndD4MyKAhJLGK86Y3fKsHgSrofaHv6w9gqbusGATkBkF",
  "key16": "35UkTdH2TAmnvBtQJwMtWZRxdunRURZPuvKnfRv7jM8PGq6trpEtWJDvzRcpmubAeeeYbDeq2ji5My5h1dGndSj6",
  "key17": "2iFoJeYispD9qAysaGS5ksxrSdJzqh9exxNb2MXvfj2t7xstAHECNQshuwPY5baAH36ydsosg3TQzr7sY8EPiy5k",
  "key18": "4hnR7wz6GHpUtHaprpKTUMV2tkDfApgfHHqypEfey8zDN3GVJzvQ15omN1JbvUNgznXRAGY99CHrhM28CgMrbhmw",
  "key19": "4HBkGKTLZhXwaJYTADbKmWvVPyFFzZrQmiBHVdFrKdZ81MriZppi6gn5MPrrtHvAWYfS8LLqnJFzQWr7W4Q7LgMv",
  "key20": "2ESwtveU4HxaU2EpmNTU141JQ5eKzUUJfcq4NoS73uAMp2XyWLM3xnwez8erm4UvPBSYVrSXse1k3VdkPH5Ev2PV",
  "key21": "cFhBE5CjkpvVS6mikypb9fHYsXXFXZTV65MeR3xUfnMEcWGTt5Mno5JdtdK4ZKDDGN77u97AW6y5D1fm4W5J5wf",
  "key22": "3PG7ueSuPbS5pKRTGcLoX9b8tk8FyA2o4SaP5ByudaJgMpE1bgVNjQkjpTE17Vi3g3vkhCg7A5B4Dih2ctRermJs",
  "key23": "5EQvrqd7m1vY7tCPAJRCJ6pmqK9h4W8KQgB8zKA8xuK68sAGSba6u4f7T1dDwmF7mJnYUMt1h7bFyp3qf3kKRdRs",
  "key24": "2RVvKYoXMzGy7rabqkCoVmVAu1NUYDMvurNQoEVdn1kfhsj8FKa1JpKQ7KB5XvJSx8C5mg7n95EaaSEiCP9kXP7R",
  "key25": "4eEaxucCWreJkeMo6a5qmvdizXvh9DERsTC8wS87i1eKNBjMWGZ1Js9emy8UH47bjPiyjCF6kYLfERgY2PAPf3kn",
  "key26": "xXg1z82ZutnQDn2UeogUMPJtgVyP6DKSnstQdtAdXDNFfiDqvcXg32TmPCghycS1ZxWxEbqBZkqyhWg1U5ssWmg",
  "key27": "551bhXbPgGnvj9kvG95Q1LVSgZqTLSsWkupqmYxojTtTDAgj8oTb4rZWurnDr1xVr6QqVKA2NxQsrTHipqYekzUw",
  "key28": "251iB1gHKSdj7D1mQpGAXLeyTKx4FGzHq4DeWvgm6BHCHb9jBpFViY4cjZK4koj6CU9zyNVra2hgtvYqrySc4bKb",
  "key29": "2QTgCpDd189b26cU7sEWhqZNj99hHs1KKUrYXKXFz9JGNK2iuHNScbYJWSC2Cz7vpkPFeHttNYKXute5iPMWSLqY",
  "key30": "ctEf4Z4ber5bRyxJZKTQsF5N9UoZA13KyZ5yTW2q6qgTFuhq9TihUMomH4M6MUTwuc2h4MExGfS9Yb5XXQWk5t8",
  "key31": "5Xn1yca4D9R9eRHHTX3mARAPrF8gs5SQphmzTPzWGgZFcUozYzeYpZ8oamw2eRoPgFPBytqD8gcx3p9xE4Uh1rVL"
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
