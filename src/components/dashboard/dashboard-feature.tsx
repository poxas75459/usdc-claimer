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
    "QWgt6oQdPfxMnN9zAUSjXJyCFej4ihPdQmaxhgqCMRMyMu8Xxmp7kL7hLFENp4bUcJG5dqpL1Jj7G2hNA2jevYN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SE8fzio5NWFHfs5DX33tKNvkZ64aooBMqYV7raY1fwx5dLfbjgP5iY98v8RTZ6sHK5RHNK6yiXzW55zZy5TYBNo",
  "key1": "vUyZ88tee1R8nzt2uDMKA6zFU4ycoz2sjUgrw9b2dTKjfEYexvi7SEJphUZPr74iwaTC528GUTeWUByDXspCtBY",
  "key2": "5Mnj5LMdyGmLSV29MPz1jRoH4Wofq6Rsi33Hx97kEgNzY7iEEn3u6W6yyAdxqXFMUFn5LiE3sP1n7jGm24rHUgRD",
  "key3": "4upPTaXstNVVSwYiSmB15MXPgJY7V6TPSgTSMisrGqRXbcZxwR35hygA9Sng7R4pSmrWAf9cAvhrvHQzsTgtEiUS",
  "key4": "5MH6SSgNdxpei3KjjNK5MF3Q6GhhHLUCDCkJMkQLXFytJxPN97Y21mgVan1Kc8LgyrQ4uibxbVvCpW6RXmT1LNhs",
  "key5": "616nWksEcjDvn8LFE3qvEg83QjX2tkCNLki3NKxD2ppJzAeXiijVH9eZEkDDwvANg1AxV6VqsgaHSfkTzHWFR99Q",
  "key6": "5XQYzqNwwves2BW8MnHQXj1QaY9X7Y4i9cWvra63sdKteynAf8THQqesUHt99c3GBLmvVQpv9g8jG9TxePXSu7a3",
  "key7": "52PHKa2FcnmsYUWaja63FtDrevGXYJXb3LpL3yoc3jteuCdsudAkbb9jXqd1YPtXtz4aX5LZJ7G2DMGv61xQ4aMS",
  "key8": "58vqnmkfMdoG19knpsTJFKbYmBArbs1v7kJkfLnJUmaKuKGf9RQ3bp34BQybnqKYR4sTCSw9eLkcPMUxGC1pc7An",
  "key9": "4o9sXrShKTCBAgWwGUgRJz6kYj666NCrstQLAh2Go7uCCkAHWPawujgGQ75PLBs8ezpEZiRBRGg4u5v1zVEKnXWt",
  "key10": "yBdggQP5Lzj7JTedeF268Jdr4r3twCVN9wNSm5ax7WdhDVtPZ8ECPe6HGBT2bK8EAzEAbkH2SVvJpyo8LhQRboE",
  "key11": "4bGzrWa4m8Yi61sosm7uyzNjP8hKLnfodgRB3gf5XacLPq7En7kRJgVEchPBUtj2Ru2a4KMoutciPyfTFSHMYCqv",
  "key12": "4N3C9RiZz1fXthqnjDU7SKHCYP4fqchtgkHt2dkaUa2DjguTgJ7SZJD6Kcs46JxXigwPHqAYUjDBkmysLJG5kd8e",
  "key13": "366iE3PJBB5PwmYucRoWJ9tqxm5wYBBHNotmhXaPg35j8KuwPytg72ZApsiduwXv5aXd5fpZMrNUcV6TzyakY24R",
  "key14": "D5UkQ3b14EudMPqkxzaqj3ccWanE4F3EwP8mx1P3FkGy5cAGSgJRv6gqHG7tMgZgqKvrzuzhSFEqJ79ufpTPrf8",
  "key15": "3gEwHoXLTsBRFpGb1BL9naWJqqhc3486umgUR3exRngCCPcindhMa6uNpbbESeWeaeiQxg4vvY8iiMBw55i9n8Ey",
  "key16": "5HLYKXsZecZhD1KAnLy8gotbU6aMGNDcs2wrKpPZHZciLfMoWUWADuiSW7JPmB7e7PUer2YzTxLUjsNLJXsQp8LT",
  "key17": "5uFUeEE1uqR3AhYo2y6jpAKNH28G78dA7m79qtAu4pz7fNJ1gvCHwfPix78Uu2GPbGyUaiJ9wtR9oXQjex77iV8s",
  "key18": "4MToUaMRfNzbh9qZ9mvNkyhXJ9sR5bfkSqao5vqXQRfSjoCMF1Urye5B3jcH1QFRkjgbJQkfdigmLCAogUiEwMHh",
  "key19": "c2U9r7jCBhANxK3vf5BZjitvjnJuSB5TG3UcdVj1TwPTdWBcdA2deT9uwuT4RSA3HeLx1duvegEABLPp5zLzW5q",
  "key20": "5r5bwupNu1qbJDd3TN3LNc2q9SydyJwmmzRgbiLRmcsHkj19GQoEX8tPGX5S3Q7B5qLrMLtnkCr195xCf3nUs3Q8",
  "key21": "TmcC3R7AjVNCUjnvvnkGrjTBmGNiro6oHi3of4EMmaE3VW6E5oTHi2CTogHCwToZ2xFHMJMEsj33QLW871a6U1o",
  "key22": "5QkY8rYHvEP61UgREZvxE5QGWz8uNS9V2cgt3TSExsdduL7y9mqYuSiJLBCJ3h2WFNHECLgodXqLLhfnwYt82HSw",
  "key23": "5uMFVrJ9BdLBsuxNvow3EMmtmJo9YMMdXx6vxcM8eLmc9Rn9DSyWtmho3oLHcEL3hJF58QqYbyKhQhZ1h5Fczty2",
  "key24": "W1Cd2GrzdvVHx1KCk1nmDuUdWqY3qUMsW2iT7cD9EpMw1GLvLhgPjB9goB1ADjeKPH292YJHoKVDcxfz1azmuan",
  "key25": "4XnNwfbd3zLBrbVe5xQ1V9xsJ3zpyyp4mpoGVV1fAPkkg535MjAPU9GAYoknq5tf3kcE32DoHds9cvdhQe8JVgNS",
  "key26": "4XQHMSbwe2aDrxrwcJSeRQPabxwcuo9XfKA1Hbze5dGAx21rWqKYmw1d9D8eae5B2ZfifQhLRiGkrrx6HAfD2pM4",
  "key27": "4hY6weJAFPLVwi5i4UR8U6wdDaEBm2sqThyo7cLzvc3ghc3cbK6irpko9QHr42U9KQukMJZpsyxNVF2vdPLdvXAY",
  "key28": "5bgJSV6oFr8XwjNmVQbXiLMPHmDWNjhxh55LBmYmH3S4D1QCrLKAh8oQFo12LRW1UgjgHLjqkvkg22vxrM1o1qLD",
  "key29": "ZV9Vz8UQiC9ofuzUAswFRcuMpzaALjptf936sMbxrR8tbfSYCWVLpKPbqfPCBrkoMcv5PbDJ3YC2jR4H5KUaitr",
  "key30": "53rNQJ39BVcfpL3cWYkfhAuvAhAhzdbJ4WqtvDbj9g87t7VUK45tbwQdHvowWfMSD9rVNUveH6fZoyfdf9fHvCiW",
  "key31": "2wde5XJ1zqUTV44HBaBf9FXXgNz7ufJ9F8X3hfkXxw5DjofgWRJZV39nN7x8o66PcsGcTEmkZoZ7JJ4WybeJqTxh",
  "key32": "4Du8QbaZ431wANxL4xiBGaLcpyji183vGyoyM98DHNyVX4GSpMkDHpraf22o1Rbikt9XRbGhhJ99X6Ccg8D43gmj",
  "key33": "5vA9RK3XWFUY7GYw4yXmPLs7hWYpH5GKWAaQBLeH8Ueu5sLsrLbhMEws4oDE68Jik589EULztjgMY9HCGdENjZRy",
  "key34": "298mtN8F2FkzVvJ1nw7bfsfjmB3mtyL8job2ZnibDBMghSRfsJFRav3ovqyoRtTrTetDzdWEata7aGb8y89TYGq8",
  "key35": "AhQ8Zw4AeTq5tWmsVyhvqJtzpY8dF3QTK8noLSkvuLUXeqPwhq6DwTJ2whTN6fp6ut875nmU2M5MkH4NRQsdkyz"
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
