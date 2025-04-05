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
    "ZsWUQA5wAFWXuRmFZaZhahVzXhTbLyQZwMxf5iZQqTzHhJTQLqVWd4f579L2FkCh7t2pw1qrjNz9kFgwHfURrx9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RMEXyFQg14NwXdenQMowRhGYL1ydgAVC22EDncs4jrxTTVoqbKHoY7Co9b7MDDFP8SYE3USRNDs27LjLVGQknvt",
  "key1": "5RQL714Q2uETvBSuA31qU6DCpxj8Cua4vS3hBa2BEaEKMEyiK6FQnSCedDhpmoaA9sUDhArdnNuk5Y7cKbq1tr2e",
  "key2": "5X3rBqhpWMTknu3M7L3Sby2UyLh8qonyvjk9spF15FjyRfRp4VgxSA5a5Pp2J86oQh19xhgbPTMSe4KfxHfWwrnm",
  "key3": "4obu9soTPs4N8q1vNn2XeNpVXNdLkTGTorhCCxcFhx4qW5xe5ZSh2hjvEvqKQX4ZmZ76fEUaCzciGHo5KAgZ6aaT",
  "key4": "3EGTZkdZRTkNkUZdsUhFWyBQdS3WiQdPvS7cYmZ7ksc6Ynp4d9ssPfivrWTVz6h75mGa2zSkeD4cgQJ6t4CZ4Wzm",
  "key5": "4qPuYCcTuEGo4LL36AVwwSPtW7VwFX3ZH2unohKZho1NQX3zbz63irsmGghE4ZAm5D1VXuo6CVFx2svpx551dS3Y",
  "key6": "32Pjtyzmo83Dpz1dLcEv3ANVnnhJfxvDnagK6NUHKjdRQxsqM6MFKteD37Tb9Ff8apiZMVjzAykPRTsQqfpqkj8j",
  "key7": "4rga1fEEZoGunqGPfd4ERQUMDLQDfX2z59j5SoUMDmpJ9vCPsJrueWdfrceePAvbYx7Na1JKDAyHA3khkMJkczDB",
  "key8": "36UKJxawDYmXLpGmhTuVEnD1jro46EiCMiW9qNLqayLR1G68c1n9Bv9tvC6Z6gmFWdovz3RuA4iQ6HhyTHKGwqsU",
  "key9": "xxGs5oyR4BZUFuwJTQrNYZaoFeiV66qMq3DqMpZHwq32HdC3DmE737f7GT3NrSMeKnbsaJkZKJFi3dUpT8eYgLt",
  "key10": "2TyUD2Sc8J27ocgbrpX6V3GWv4VvhXXjX7mtiqV9VZ6C6ueywjWfGU48cJdAaXyTL1LsWxXsfPu8zvb3ZngysxFp",
  "key11": "3P4HFRyCcQHKDeMNAnPkGMNMLoejTVAFDWMCozhPDLz9YQpYuHZc9npWbuFHXJovzQjiME2nTzNufvLxNqFhxaLG",
  "key12": "31sTxighAKMjLY1phdxMmZ7a6rz3z99j1mmKfSCA4y9PUFRrV6r7yh76FjB2TSbBrknGZm8CkYHLPd3PUxBjg1fS",
  "key13": "AHC7sJQoM1t7R4eM4u4GYJdDutUMidTe1h3H1maDHjfWxBPSJAh6Jt2HpgtaXBxMjQseinCCcDC1TzcTp5GZgqN",
  "key14": "3CjUFz83Uij16HVar79tFUkyWR74zMAcLCNxEZZH2jC7Bn7HhoYbN98FpPkRRyQ93b7CxRD8XrshNchu8PWVx6Wv",
  "key15": "4YCUjHpUY3YxjWFJT8VvQXLLLZc8JYJawhEUKsozuQn8ouQG65WsxrKmbnC6thZYUnReiHSAtmJWHWiMzzpYPJdY",
  "key16": "9vHVrPWy8iXmUW4KjRsGZinfRzvxUGG2X2YmNgxy6qMDTxmjsdTRGTPiqLhjMnHigjTbfvActELx6xWTMgoKr4M",
  "key17": "3piLJzUeK9Sr1ZCbTJFzB7eMDD5nd5qDcfN6WxvyRjT2vpgqusCYmpkEUNTkZRisXF3HzL7cYiyL83vSJ4EEfCf3",
  "key18": "5tvtB6sUovpZGGyPAExgY9935phS7bMiPwvrnYhk4997jV7XYY7w4Re17kEVzeajBxoHnTY7J6qYHpXKRUnqnmqP",
  "key19": "5GxbkEjz7WjqFYGbBUWprzSn9UK7A1vQTuzsJrbwE18sfvVN94nMCwjKBPcEBYiLKmhsNSBozUPj3LNxVhoaM5mD",
  "key20": "3Hb38V7J2EkmsB2Fat8jX1UyqMdewaFbzzuYFCiDGTMtY92pdEiLM362oTCHLtdQ3wobSe7FTVMAVbhXFksgsvfT",
  "key21": "2prodQqpJpTe8kZQyJKoHtDV2ydSKWzD5TBmzpNkTjTodi351YvT9z7FZDh9nUYSK2dvzoKp18VF4bKF9UTDthmp",
  "key22": "2xh1EPMaxmcJhU3CtARXVJ4N4p9T7L9jTia2cHyJ1Wc88HEhjuSaCBXLa3bSLsU1Xs3jtJqyYUMW37ZiDQRiBQ9s",
  "key23": "2BjaHFDv1gAkX3EfUtCiMdDf9u41n6MBe12e8EvbyaJAACTcM2kwji8cA4cLizmAkXf9tbdwY97PTjJLJQ3eqmPC",
  "key24": "uRWkKzD9uCcwDWy6eFra9GEpUEbG8iVNRoxTBbrA29a9tE7oPCzD4VdUAv5VjFeKcAU7VuCK4vvdeuBhZ7nkzpk",
  "key25": "2AGVsHV8itrXCaf3yeUh95e8CUzEG1oTBMzs2DngvaGhvjLWqQLZWvQy4qQEAJeJmEytHqoF9QiFAHJQhaMStznV",
  "key26": "2FoHnpZkjdmZ3nsDrLsRb7UHiAhqDkmPmmDMpkHcgpxaWosTpJDh6g27teFi8yZNBNHpdBUwdwZoP8XjqPno2ZwU",
  "key27": "3u63pZZzgfNFiAaQu5P8aqbqBxqysgwSViBVCcQ4nCjP6DY3BWnrPS2RNevbLnpgRNtP1U1Y9KQgLXKWry5LFDC7",
  "key28": "RGuCGW4b3VTxpJFGNRAVqtCy5CmvLiZbUacwXRdBeemMBKFjZPVtLV4G2bjjEHwpkkyye7r8oTjzEjiscnoJvST",
  "key29": "pT8WyyfWAoMgGmf1jFcPo7DNkXZ2Noiet2VrzCFczQhueGk5YnCKzrPbSR8qq6xybgS1KaMx9cWEMP3AYRh7GZb",
  "key30": "678poMjpVQWwanSggT9DJBDexo229ekjopY7FW3q1sUXKEyCSYhgRXJ23kzTE7qpHH6ZhrWyPPM5xhVKDgVweBY7",
  "key31": "bW8Ba7Ynuep8DzTYybwhirefKk7TSCjDbsy9ujyJq5zkreCrvTmoQJc6iwLNXm9iKvwKbdPvknRsoqgEy3pc5po",
  "key32": "37naZiPzcXZzZoaiAQK36nxhCgf2WRnhoZMUEqQ2dxFXbLtEMtzWt8TiPJw9zbJqGHnzc9nbG3MnuViKsPFWCq3P",
  "key33": "3UztonoubA6Na3NA1Bcm4srQbGPvqius2mdV1fvzqy3DbduC3jiu27eW2McDtmu4sJjqzaV3ixtq7coCY3nECT2G",
  "key34": "5vVEQDmrikLvgmnzwXjsbDzBMcdDqzZSt8wEBTg8XnywYL9spm7tP5XfzUujqjJ2krcS2WuaRSTY5nssSccqqAHB",
  "key35": "4tEkH3V5VY9SJisVyCRUiG84cRCnTHrDBpJFxVLbaSVoQVZ7BoyzJ8vzz4FWMQWgMz5XvzdKMnkWWZLqsnbEWyic",
  "key36": "5cofgVMTL5o9YjZkXNbZEBBcLtbgWgtwLafYMcFS9FA7rJVBxjbF44hYc6hJ82mBEzjS8SaMsUNxQPxBsbERNMDa",
  "key37": "5GhABfspkKY6YB5pfvC2NzMf7LpwJqUuiAhcw82xgUY3BTzrgzLH2SUFDiy9GK1qkBGG77uRP3DZag4kCmk5FzUz",
  "key38": "4JAPCHKmtBgCjGE3jYH31G1e8uCuuAzEGFBeP7jhW9yz4zD1KfiPQ1ywpjDrDzwhbCpL19NuMyu1L27r74JATf1F"
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
