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
    "5wZDCkAmEaT2dAfGdai6FZXL6HY9D5XP5ignppkZhc5McapRvbaAHpxZHHK2dA4nkWX6tCZNfzAFG1tvquy4J9fw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xETQ6nURDREgP49RgcGRUD7k8WX551UkgeN6euxKduUHazE2xMG8cvThEekYeNwVtFs4yMMQZsKuub7ZPE5PSkH",
  "key1": "57SVg65bvQKHMFJRwUrQdTJfreWEk21LJMfWGTfYvYY4gu4dVMEjrt6U5vZeMaP5Xhpw3R4LQ2dQqFssD5bED9LZ",
  "key2": "2Mq31JqGH6k2WCZYRBms5V8sw1RrRkWfwYpFgoQpJXir9CPuUc4PPmBmD8EReA22i8FF8inXAvzCE7D5FcN9vPte",
  "key3": "yTE5P1KUG6HRgrgZhurTHaBW5No2yZwzL9bCzuRCh72KREHVnBac55hgczf9h7JZ1gznZxRoNe67WQHkswQspAw",
  "key4": "4tzTXKhMRpXEzmUwi1TLJ8FdS9LKcyc1j6hkF17RBdzQ7LdDSU4YFhAdJedeoXZmCvUCKjYXw5TKCmLAManU2SD",
  "key5": "21Zo6QyXGdjz8pofiELkjXCgAJuoMN8AYygwrWeCPu9U9ni8FkB3zFywAsAUKSzhXtXMyi6kNgxa5xiLRCgGWQMt",
  "key6": "59DampXW47cLtexfL21mnigRCH1oj3mN77Bj4HtQBF9AuUjeXY1LpwhWWRBJ4nc4GyhcoXmfXu2WARd26ei4tFrs",
  "key7": "5XAVftRycfqejEr6ZfjU6bix8q7W2S92pFS9ShRgrna1mAqXWiCEGGr6Wy4hkYGMAaCQHUFzQvsM57mupwZizDPz",
  "key8": "d9NuQJ2rnT8mGXuZ2YggAHZKvFwyURXJ4XmS5UPpguGfg4baKgMzW88SMeUXNkog1B29UtKNA4HQ13G9PDqA3Pk",
  "key9": "5ofNVSTSJBEqq5X3mSPRJ1BC1NaFVGx1fXVgGsM6oxA9bLJ9vZoZW3iRAQo5j1R5AjySf869Dg9ig8qgn84fviup",
  "key10": "2esr6becrcdA3foTL7YncZjmguV9DxWUzJwGrN9h95fh9y3P4sgbF7G1Ko8rBL2fDgEdiYa9p53RRHTHgBwKNpNm",
  "key11": "56TcBcKN734shjmuxGsdWEiojhwZ28NEX8sF3pDzvTpMMVmiAHticmqZaX8wFKB4figryHZkzsRdrYz6hReMaqJR",
  "key12": "2JFzJaQNaJmSssnzPr8Q7pNHVJYMQmrwKnMCWWkdmWVahJyNPxL3tmFNuu3k9ruTQNg9nVdFtYCUtQKEY4m4PczU",
  "key13": "oADKP791XEyLY4i9QjBdGJtLxJ8UFsAQU231WRKf6W2UUtAtgbnM9PkLdEDPFpwtCQvKiYL8Z7NvP2UYy9youWM",
  "key14": "5k4muCVQwEmnZ6kN7i1eifn7UT82twKns5mtDbcWcn9GKEAjgW2C9bVcpoXQTwtHscedD2ka6eapVVCCeXQWsmyq",
  "key15": "57teRPQWhzgRkC8Kmpf2bXLChP4UTXnPv91SNamy8sz13h5SEL4NKgMDRH9KWhuX9u6mttnBrUgG8cZ1VqzroHx6",
  "key16": "4CPPoVjNnjqZpMDQSpYWECCrcd2BUwCWmsQ5HaKV2mDstXbBEasXr6Swp1oLjaQPwxZomjag2UJGP2Y4TeBr8bW5",
  "key17": "3E2VKZZec1k4s5VkKTfbf2zVQwwEDTtVYeFJBS1WGEKzDP2D7JEM7rwofHxieWMCaYEHHGb2mPdziNKwgw2KCZgg",
  "key18": "54QkvARYYwdaUnrEYiu9vCgE9CtYHp773EpeooKasWQGMGSt6u1ncQKJUXUDeimd32Mqoi2NrGLroe1524ZeMMuv",
  "key19": "2Lh5vXWcMnbiACiQWjVvskko3gi94MUcm22MTykFtTBvR9rEKA1mZ1B46FafsQSN5BhUitgdAiSKfZu93KKtpdKf",
  "key20": "4VNHNc5oooJ1znseP1rDZUuFSj7UnspnzkL3qYLrqrTSfYdcesSycWDYRcvPBQauP16x235gJGQcqkh6EMNFAdKS",
  "key21": "2wE9BKD9AgYMYjjxqDwiRGNdMgs3bUABPsei3RMUB7vcdJict5pYUeTDwijDkwJn3Hsyd9GMBcEkGFaQX8qyKEqY",
  "key22": "5JQw8UMY6FFwhGAnjSYm5VaKsPRiP4EhsW3Y86JQ9HhKcD7XsbFPCKNYvpTcuefeR7LEBkpNKd9s9UtbEkttWCGb",
  "key23": "231BmLW8SS7ZEz8FiDtnBEx5S3urUofzjEc7KCt7ndPoosrRMaDDadZXYdtHuciV1FF8RXAVusPEnbyV6YVUHmuh",
  "key24": "2SqpPQrKjH8hXuF5ct92aTXZPunH3Qedh1p8hnsUSpDnJm77gkAai8VvKzhmq3xeFsPZQoPcjEeQKLmNkDQczZy6",
  "key25": "39frtp2KbVcFx2jmeLdDgqokCrrcQd7LewmFoYg9p8Z381Fnw3n7xZNGXBDE37yBJyZ21jAxYXwbRqby9PxpLAui",
  "key26": "3VRrw2vXNNtMndVK4J4SEJp7uAfcYYFKyNAUT5H4gy8gkP43VuNYKbNA3B7PDTUhLTNeFrvYLrUDK4touGHDGBPp",
  "key27": "KTt6HGTx3QoaNfka6rtShtxP7hoMsAJtEStBRKMnFmPxaEMyQxrwz5SNVWma8FeJzAfHtkYQ2qyE6YHKgbvNvXu",
  "key28": "3WjjadsZYYhUg6UxxWsZSPC6ZH5tdCoY7gnY6bN5TfvrxRG7jVyJTWJhT7QJuKVDDxhXbD7PeTbT8wiJJa1RAtWb",
  "key29": "3P7ipAtC5B29F3nX8ZwQGmr4fw81phw855mnx4VbKvC8MyyiVHV81ryCzTUZzpP27vvbGGVeo24SC2fgrLrixbLQ",
  "key30": "61WSK4NiY7jUG7bSc1acxyoMAr4GKGLa283EWPNj8FfzzfnA25JjMS4HwV2ZXB81wToTZx6zGzj9r7sqsEHdWkHb",
  "key31": "54EA7bJV9D9fzfrVMvTqHsLuukcN2sie5S3xGzSxfMSTqsYVBGRFRD9fxajxrR2qNCPNmwLFZoxXgEgaFp2T7Zgt",
  "key32": "2iapWYj5Tzkpg56pKFNbSDFhmP9npuPoeAWAdn2BFhrbsZvDusU6VDwwbVXPATjTiwFdCKm1LTK7BkKw7qLKukXu",
  "key33": "4Hf445SzMELK4wKK5XEeDUc4jbBuom9AZQohmVRT3KHi2U9iJcPK2nFK4P9GHAq5UbRajydpnQiU6h6zPZce9rKx",
  "key34": "2ybhLLziddjgxoD1UWpNogfUQwRRKGv5JcwbHfchsFEgwhi6eCA5xZwdh5BEdQcMkqQVu6UPjAUje8azLo3zAffC",
  "key35": "3xM8aqY9cBZ2odroiurLbjPk9MLb9KQNZHiPuhhPneFy7aQEbCfHbxZ2pKtKTSoFDsw8FBNdTrwuJEvjKR79bRby",
  "key36": "hodMAfSYZ31ftAGpvAfr1iJUhMRvW8ay5aPcWG9qmnR1HpDRqMb8D6DthfCiACDKiRScW2Yhpb6h1KGL6LKNEGa",
  "key37": "4JVEotuEqY9ZBezBMhfMabmU3YY6jpVSBxeRuP7GcdS9CqaAPUC6emJcfxgJWJPXNCE5Ueg4xPyP1hguyqeYLGp4",
  "key38": "5jS42oqwAd2WJ7DhSbB2jEbQXydgJnr6gQMFv2AwRcQZDSghQiCpXnJuUAEnkB6WFM6p6Q323PeQYwdXaJ5f7hzt",
  "key39": "678XvLQFVnj4JxKyCsEkXZTzwMW8ewn6cMxr6FkL3hyMZX57oPWMowVqqf6TnM6QFaTnbpx3FLh9syK83hwB9hXE",
  "key40": "525VA3cSbHj3R5j8Pne349EbAydSeY81iy6h2Y5EMxVN2uv553qwcujGTDo2eAjLFjBQxzZ3yT169CkpSuzctgTj",
  "key41": "5vSNoHvosMEqr6PLVrTVaui5azvn6dRSzPGuscsUjJh8hMvjtoTsb9utmPTMXPJ4oUAyPPCAixN4HUq2c4yViH6G",
  "key42": "4HcBeU21URtfoWWjd4MaxYv4UqLJwwUoHWiuivTg4KWfYztc4VWPaY5nN7mKVtSSa39rZAKdmTFjDymvVpNefYHU",
  "key43": "2kh6i5zQTK8P3JjHbP7SBNqZSEkupDXV4cXfct3RahHs3zMcK72J859spTCuzSq4C9LKEMUYyX2mS4P32Dfnsv1m"
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
