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
    "5GnJ7cuQvvtptkgUA97Lzoj15fsD9jSJfn6fNMeZXCPR8hdn7UNH22ivPwtqcB2gE1mY4UShsAyXcrYLUoL6tuPK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bugfSizVJ3ym2zA4sAwJwT2agvRBa2PXxVS3xh4rTzEUHAMzLXN5iaY3GocgKgqnVM11c7ixZFw4WPSReRGyn7Q",
  "key1": "56DKR9nvvFyNrFEAGfpEDicJt895AxitFDAW8oebrAT3mFy5xSG2bTwZc1qz2oDqooE3bTTbp2a48atGLp8AcVgh",
  "key2": "39JgD2empVSE8CbbP32VZv97cGK1PGYH492wq2xKv7bCCxanFUxSqu7qYJz1rP9MsQqqw9XZV7fHsdzZHRRYbb4f",
  "key3": "4VmU4ZRiyn4osABRRku8umFWBDz8b89JMuVFgvHEXUjCHjVHS1vd4ikkpWEJJAPgmty2ijsoixECPJd1Lkoyeoh",
  "key4": "2bdfcE9V9w9C8G8aJHv257PovRUcziPnQWEtjCE8wfya9kTKNqKVUsMcxHfbr7LEvUBjtscCJbZQThGwU1seBA7z",
  "key5": "5n5x5zHQa6oXNo5i42wRn74L39Z5EQeby6DKk8AUSSG6emxXrSqQUMB9ZpbvhDsdpXj4ShmzeZEZWthTKUt4eVVt",
  "key6": "22r7iHanaFbTfVv4sguddzzpXVBXXxg9JYzKNYmJJQJjNfftdJPbzNuFN7fy5cH4gwd1MWQcuZRT7UuHQmVD3rYt",
  "key7": "mWTMxp8wxhGMyK3HKzbdcHxCnwuJNjSZYwP7AwC9V6G4Nyg3iKWKzZdsPM6qhC7Ua9djNHSKcezMQJppfs4YCr3",
  "key8": "5jrtRpiTov6TYGNrsUqc8yTKe3ggsBxqD9Eq1vGiZZHAWEdet1ShFkTDcjdnFXMNYuoX89B8Ao7HaMEbVUh7zkQn",
  "key9": "5Bnkjb85G3rPocAJTHkF9hwmxhrDQsgr7dTbNVMkwhr6KNzmeceMvrP5BdkNBpvM5MYip3xTRzw3FpX1T62MYyXL",
  "key10": "2HpmY7Tkqyit4aNcK1io5YJs2hVgzjMU3bioGTZn1pDwqQyuBb6hnkWXPve5mQYyc7v4xLxHUg6jSGEwjU3s18pT",
  "key11": "2mNtJbNwh3W8zLTU6AaWTYiSS9G8jnCkRBp48ncueG7G6DCm2fAetHBeUMxrwbBHWgnruabeTmC2e9UyoLTfRkgL",
  "key12": "2AUEVpbzZDMPSdpw88xPYxr9ofuRq2FoHYNjKcxpNrW7xux67wZRAcQ9HVtZCduiZnTFoUvfv4KkUVc7eoaXApr3",
  "key13": "nMonLj3iv3zLGtDzxdkNnVWHib44AeqsgNk9XQsCbUudZ3H1MvFGoqAZNmnNHpxMZqJvndSS96CZAhqcWNgToBb",
  "key14": "2CEQuah2K3YNcwgPVow41pXfzJmiW8mj686GDLEResF6t8KpGCogSJF9EZu6J2GeLUW7QweFnbXaJSN82K45UjzH",
  "key15": "4rfQiTBi7A6uPfpYnP4QQxcR5BvGRXdwf2VfviXfkwadoeeq4Yuu41QNJryceYPnZ6ecH3SjYcWnRsfxdJfcDxHU",
  "key16": "3ftY7DUqegMnFpG1o4vqHWxoxdqSX784JwUu2YjJc4UmBmaA8FnDHDNWGHMr5nSiCjqc3sZimQ3ws5tjjTEhmfLx",
  "key17": "4S54mnuBDBYRg4yZDU9WqnHg5bjt9GeZqgerCykjwwqqdYTZBGkN6TG2LBvBMU8PDPLvfp3cEE9Mekx4P4Sb9QV9",
  "key18": "242vJxyPJEFQtDtxi3YsCPpsQ9PrQkX6F4zMptsMc7oKgpDQAiadeaq2Zic5msBWNoKKyTuneUFLYP4JxozZf21V",
  "key19": "37fxPfrZnbCRgAhgY2GhyzttqKjyBhayx1VhXWJAfNR1JxNXRk7RevhtNKZ5CDUiuBz5e86WA2qW4gkpCaCugHLp",
  "key20": "3befk6Zz6xr4tyAqxJvUH5vymNpJo5xtvJx1MZwGvwxyzo6Uu52YT3sPpnP2imqHr9RScRd1GAcZcsnUXaDbapnz",
  "key21": "3Sy2Bgg5nqto54cCFK6wqHtFZtXb4D3Bcry95siedqp8Y2eaADCqbehUS5ucS9hPLsLAK3cjUerhWXh3kwdZmyCk",
  "key22": "2ZgYCHU6hrSCd6WDMyNtn9ZtCqgHEsyqznVKELBAaoAsPJoWFms1uaWGTgrs5GZcPEH5jW7xsk9SXWn5TrWbJz3y",
  "key23": "rvqu6MXr8W5mKFSUzzKxpe9hqncPkAiNQBPMH6bgaJMPPqgNexcRT3Ugn58K3Arc6oagMLE8K6zfKn8V3fKjuZB",
  "key24": "3nJGZS1VChKzzfGTBusN3zrnvNZ3GFTXGWQG668YHKp9pzEciV7B48rcqxbZcFD4MZrJV8T79Xp2BUUnRmUGT2Uq",
  "key25": "5VQPSNASYgieVGJbhqqbb4hzfpPvQJxXp3tzCJzeKchYNtqKFbcve2hohXbPAhZs5AojY7bjDQQXrYDf2yHzs3Ub",
  "key26": "3UDZ5UihJymBLnms4BruwRRH28ruEopKpTdjhHks2C9Wx4Zw5Vb9MnhuZGPe9kyDTPwUS9HRyGNWsyGNH14JYTwr",
  "key27": "wqrYdWVVZgAyjZzqKrNtnCQU8xWs52ZERmfuYKxYxq6pdPrmAyxhtU8t5nSk6ubB3oB9NiZ9hN968Hqwt4GVAsU",
  "key28": "3mxNA7LMkZmPx37bLYsTqmTigoc6JKuUWAxNXfsWm5i1MZ4Lo2bPXYkXmriQq2hBfxrofM7Rsqa58N9nQRJQLNwn",
  "key29": "3T6xvn9eLiYELJg4bqR6Z5d23hwsN3qX15nRWgwVdgWCgrDMBHCqFHh9QVckK4RZQ5EGc5ixmGtCcfxGJKBs9Zs5",
  "key30": "3QWuoyLYBFrzivBTH7xk7WbFLNs85F2GFG2bLcpzFvXW8Dkkp2X2Z6rX8fFysCCaLeGFvNxBhERVN3VeA9y3Vpa6"
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
