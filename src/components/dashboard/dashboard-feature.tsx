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
    "5tgaDJuMnTBCESt6xesuMGFcAtDveXhAUyx7C78VVhSsyRLf9kYwn8pMNz6Aa6jZ7SmegQGXhnhBhT25rXaAwjo1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zsU83CjRi9nBSZYgb1i1U9GiELR3Dd2rtqrWSVTQMFneXsgNNJxzZRQ7B4gA9CYDhiJsmPd8MGpgEFCp9zxhho2",
  "key1": "49LPdEr88n3zrUQ7RTuZtqnN5Rp1pxpJxJvkd41Y5ChnCW71qRfCAMQPpM4m4b1YNuZ65w8C9RwQfLmApEccRRfW",
  "key2": "4Hza6mv7E8siUt4DDyf4EhcCwD82dFKXYxunWW7ALDZcM79MuXvLFeJ3Thd9zUruBgjY7hKshTBKhCDReAAeuTV4",
  "key3": "5kKY13qp7i6XmrnRF9zVcqiu7u7JVjfoS3JWZoWKCLt8bWJe4XtcDvdhLtBTNFXpeHxZYva412zRNGumMqo1dEsn",
  "key4": "3UjUkVYXNLHijS8i8HzB1JLHqy7FN7mECR3fiavnR1oz4SGV2Db3X1HB3HmBFVTL83nu1ufWdHAkfwo9do9QnFJb",
  "key5": "LgQWJK3hdVXT9SS4esD3ZKtPqhs7HGuB84HoRtLCWXzX5YvcFAKtaYoGdUigYpDhiCaHGXAzFhjm2K3zDBvDQ2J",
  "key6": "2rDMsuMUPaExPCcvtvDFTKvHss1JsDUtLbU8zcfWZAE9nChopa45cmRmPJfz9Gu8UBDPwFH6kBtQdeYkCFQ7ghjx",
  "key7": "3WU4ZVHs4gffFj8BeBpXRhSZj39WDn2KKGNxjPzuq9FtjYZ5ndrgVw6fqiJ6K95y51n2DLbFChVeUNEbrGF2r8Ts",
  "key8": "5YDpsCDENmZgpxh5t1HyDR1fspu3KaurXr1E1B5oSHXLDgJRwKkGt9DE6PVG1g2C93abcgCXNsFMYehZUq5GXRbN",
  "key9": "5WL1GmJqyAhKdAsuWVhYVstT2Q7K34i8oinRBWDi4yhDtTPwrBmGU9jcwvomUPRBXfSc3kMPR4ajRCbonAXarDLu",
  "key10": "2mRA5rL1cJHyS1QK1znWA5x4ZAifCqDG2T5hePyWh5Lu6z36E735uwFAaSrH3Q3ZkzrQYWXdHdyQs39oAR1Tc2NT",
  "key11": "3QDTXicQEVa4TczZSKpMoGEHqQi9D9uo97f1izyAAZpEZjSn76C6hbB3H6XoCpBvM7tscu2Zt9qhZV6nfY1RSTta",
  "key12": "3ash7W5jJodihJ4fxynhmqgp38FKdwrdwodn4cUsooGbwbhgJc4aYd4zJbJSPhjTXbDBDWwVcABkJqQP5yAkc4A3",
  "key13": "3BrraXbKYx8Ji96g5xG2uWrB8YhnrTUuikuTwVQbBYf4Y8MLVbjJnbstJyUFWRVpp1QepRAVXkjRF9mdyqUGH5vK",
  "key14": "e3yQd3HJWiepymDPTmKb61Wzepd5oKMqGkmRVPGWSHxZVC2a7k6xKuBuZ64iiPKzPa8b9hoKs7N5YJ8BcySWNMY",
  "key15": "2PrdjQA8Pu26oocv7jvDCRMayjbXG4XcQrCPpNJThpBGS9wzc1b7Kr867eUNkxwX6wQtqrYQNm5Ga371zqfEZmtw",
  "key16": "3iaZKPQ4pyRbpZXqwBQHtBqaA8iEfHD9mN2JgPXCDHhVMAYTu2K83JKtLTuXJPfndWZrYwuhVUtf5rFUUpzyVKjD",
  "key17": "64EB1uruvHjsPUaKf3vzr89iBcgdNRZ7cLWfYcqCehL9MyrnH7cFCPQP3WdQYwBrU7t5zvoZKRPFWgHiovJXB4b2",
  "key18": "2HkZnzcD4AZCjmfURQKNyBKuCKQQ6iRScDBbuRK3fn3qr9RtWgZZEnLasoiJHCVz7ZYkS7MAae4xB5Mb4B9vP6nJ",
  "key19": "2MPEnWvSm8y34PTqXZtX1kP6E82u49coVdbAod4nmJLLBet8maeSJPdid8W5UzM6DeakKmou63SKkzaurAQNxxTq",
  "key20": "5A7mZ8VZVNMQ5vnxLQBsdjhXCXLnaZWtqsKwwqvh89GXovnUEnKZTN2UPKGUPKf5ubEDQAS23V5ZyDJq51ptdxi1",
  "key21": "tT2VZZyjnv1gVpUGCjSeQmgVVS6CW92p7S1cDSjse9hP9ibwqVjsQjvF1tRSzTvcJMgzxUHbF84Nir4ZiJLWr1H",
  "key22": "52ugUAXZs1rWK5iicEbnuZMd4M2yhSNSV3JXjLfaKt9ohmwCLXCzQqXzTB8PZ8rQfGBJNAmtH9kDdCVoMtq3K8e4",
  "key23": "2bGFELpjtQSM89MedoeYrz1ZS9rskkW1SKrk7RtVpNxnp1sgfR833CPEojRvnMV6Atp2Arm6TM2CNHFD9fxZ3yLD",
  "key24": "3rB7FrLjDrspgXe7qfhrJMVvwrPkoFqDs4C8tH4hCNyXnB5jy5FfBcg61p7dP4kieswZTYG3CKeaWrkqTSTv447S",
  "key25": "5AcNx6ot5cBHpDhDVVQEndFuJuzJjwsjVXggVrigrtofmne8991FcGLojbeN1CaY7us12yQYH7rpRr8uQZQ1wFTR",
  "key26": "4DCorvAPqPnTAQ2BW4vyKhw6eVGSoyT3oS52zN1ik1yFyCHovcF59ycGBonzTUNJKZUfi67R2ABdycqU1513L6qT",
  "key27": "3P7cmr83uCRcFebm65jANiaifycKUppVesPrQdfaK7BLaPWcSDVAUpJoFURdCX7aTU4GpMt9PH9SpuvXrwTpejrF",
  "key28": "3bGcbdJK75ymggdPn3caJKqkfdNHo9xWGMCB4iCQTC3UQcB7LAmS7aTWtKMFLeiXvq9ekDB9tmJunQZf65X3jFnG",
  "key29": "vSZdoNvej92PbxqBGfoZWS2HCUPV3Fn7ncVFsRk44NfggcfVG1eQaMPuwzuFjn7sVd6MGvpfCvnFLW7nVu5eEDw",
  "key30": "Hk7rciAQBGnmDYAoJc26GYSboJ1HujnWxowq6kBBzVkHzuik8xDRhBrXsAvgQenpbJGvtEE19iBiSMjxMxGC9rd",
  "key31": "487zUeSgBQTXUSnU8CbFgk1KsNtCNN7U9o1AENJj4xpgBTo6AMwJL4JDwuijY95gtfRCX1f99771PvmLVjYr9o9c",
  "key32": "5QocLTyK37eTvdY7Bma9TSSUmBbS36To3dw9Dw3W5MeZcNCSv1PFCRx85PEF4YaXsmNWg2FzugLox6BB2WWtAQus",
  "key33": "GFSsDbfcM9Ma2ykRrQSH8PRSjrKpoUtDAErFZ5jrwPrWoTTzjQEqN735NpncwgpvrstkQbVLsoB5RLNY2YAmaKS",
  "key34": "2MtMUzoM9Ywi3sJooG2CaWC4FDJuvEmys3taeNK5Z9o2F7i5FqHaWrUySzefQHcuha5sJ3zSLnGmf2mVkfWnBbu5",
  "key35": "pNVgQWTJHG5mmuJp77D5cvCjxumYy4aA8aVDkPk7tuC82wekc14q5mMDHL1MXrWw6SgSB19PmEvRZYsMHZqN9Xw",
  "key36": "319cpywrbL2dL5BAkqitsXCk5cCbArvhmu5zUKr7T2bf3gB5K79sB72S9sAPowVA8Uw2H6VfBLNNmP5JEs4EEKvw"
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
