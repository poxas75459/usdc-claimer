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
    "4eiAnqWqbFTyXzZNys1pf2tB8PCEi7yqSSGaX8KuRge1YNzwXzpaCrFR9UDfBjvYWckgGJLTTpRpFaqgF1ThuxfC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iWeg2rszVUKqCAaZFGCmmNcru53yeUwVRxKAGp4ttNgoYAsm9LQZj9Nuu5YKLVkLRXUoqHgSZcFGeLhcMC33x52",
  "key1": "4sfoqivNiVYsPAqazhR8Nezkd5YZG6XLE1rCx8j73da3oY362s8unuHLRoNgS8D1mRZ7rKUz3AVozZLeN1AMwTG1",
  "key2": "4BhtAxVPXsCTqqhvxRyBstgANyRn2i5Xd5hzANfgnzjp1tz4mNdv5nUJrvovr89EhDJXnihhQFbpk144JGsnLj6G",
  "key3": "2AzWaKXrkvg8QyhWjCpVBhQQdo6HPsTenPYRJ7rbvz3YXuFaJLghALPKdYRSi51U2pjNuqT6zUXiwzG3T5a4ekwv",
  "key4": "4tqNwZRDjY5GEc3vnW43vnja3Qvm4LGGpRF7cd73a3cYsBXAQokwoSKm5RQk4oEeQHnfreJsVPqsBfLUtZo7xxX7",
  "key5": "5yySUiXM5i1vKvFcLfEY26p8t5J2YNYAQLviX6zKS41i7Vwj9FtAwWSWzVCEfEKZUCi6vQVE8cMttcMUrPq98QXt",
  "key6": "2eRzohZtXKo2Hurf8fzs5P6zXQffcLfya4HJXV5rLjgpzxtxWgEunyFj35Lfc2sFUmHSoo8fEELTVfXwTL24fyiq",
  "key7": "5RLHSifqMhxyoiSrj3Ez2g8Cfb7RRGXigachwd1LE1Rv3mjmZdNjT9AGog88VLAryq1Xq4NNJn8W7D67SEEKoiTF",
  "key8": "4m3B79rgR8QKtx87J9jjHwoKoQ9N1zVguhSzw1yTQ14qrHofMQWf73QpyPzdsXwYyFsk1khheTu6R6XXRfzDHseH",
  "key9": "4WwiVhzYTmrGjo9haJdMJZ2eHq6jMde1xHmhQw4cGAez7rBxHFvS4nBi6MdHG3forfmdogacNnRbBcYDgx6SzqN6",
  "key10": "47YXpLL6rsSdkNR8SzMVBhjC6b9ghVvD4vgeVDGcsdj6yVoXo5x8w4za3ZPsRUJJpnmVjb2ErdFRFeWK6XWQ2LZE",
  "key11": "5tincHeY7uDhPrHGqTDo1Lu8ohBQiHZSqiXRWZkzsVAfJBWSUqt9DmDHp6nGxS3kGEKnqFmcDxgthuZoYLkXbDAd",
  "key12": "49YsDYhwtH9N13GzhwtmVRYms7K9zbYd7mRRYS61761ojVyPbPQS7GaVjn3kZzjmyDw5Xkdv1kU9raXVUkHh64ep",
  "key13": "53VxPTEU7yS4Ro6fytMVrbRG8wHs65WKUHmXPbPxYW5rUamikedwPMi78QSBz95bP1h3Tsgfnnp9c5eS4JVWG3AS",
  "key14": "v43fP5oYwnBUHwYnZ18Pxwf2Ct3Axbr3b2TnN9h3FfvQk3pXSnUtDiw25GKvY2WeVzzaLbn9GVBALQ9484BdYVa",
  "key15": "3NAHPzHq3kzeQXdkHoaRgCiQxdERKvSSWiVoa6R6QyxVB6PP8bceMj7eiaw5usDw1zdWLyq42zxB3TiJNcaU9Ge",
  "key16": "66wcAx25HcGanYXZA7YaCDr3XCgAHdRyDaF3TaGu9nUPfb4qYG6P8qb6SURpBao6pMUPpPo4SPyaJTfUw766SsH7",
  "key17": "4bf19EjYhccbDEHFYR8M1vPdzs3MvZN5XjgiMDgTrdEuNKDKMHUY5Bho2VpE1eXSwNdmi7ALBiPWE8uTmkXVVqQi",
  "key18": "3uEQDw2PrJHbiqSaSe9QVVH7DgTnECcsJQCZE7bUSytMKU1ZeUfxfAYakbMCvuzGefGaionzFkGCtMT6ee2rAnLW",
  "key19": "4zAJAYxwn4Dq9M9DNTN366MvGigDHrE8VtNHnxpt65Fj1Ny9bqnabczzJoAS1rEUroYaYJWNEsxBuAE5hvGKzWwG",
  "key20": "2s1yyoej8YjwLPgCGtdCW4MynUVM45BZj6EpfupEmw8trbv2jyRqpBGrQR3vnB9q6aKzt4NzNpqwKYZfkphXaKws",
  "key21": "5FcWRTpNLv1eDWvxekVgenR6pXMuqGMnj14zvUzkBuKwd8nU4HTddyftBNY7PvHT18KpS5dkifxnBpMNbJuXPjH2",
  "key22": "QiUSW8cZrZSj9gNsYXNZ8anx12tKVZMWLgj7CFYdvxHthWiqcj9F6aKKtWkbQVc1KTCkttUV1EeZ5v2djLYTXYY",
  "key23": "3L1YH241dLc8Gv8HnHDsyTiaeSco9mT3miYz6mPKjmHBx5caw1VBfxr6awrk3cuuMw6yLo2qXdweGngDsbv7T2ca",
  "key24": "H5sQToDFNuUaoY9qWtX4ZajkYEeK6WhLRAmtMgbB6vfn9UZ3EshipGnd8yowdzMhUT3GGccNeuaxfdDge2Nf9n9",
  "key25": "5kQBwRHRj5fzz44ivExYQyVL95uYV317deG2d1jdFiLyBCUwwvrrxSrfTmKx2eC14YyndZfMesVcprEk45H66XC6",
  "key26": "5yqumbii4eUxuiaPJ7ZLArFPCiS9BjeqKi5xUfbVCuhKX7GLavPpaTqgWG2hQ9f6FMhyBVwBx73ZYhFCotyAYZ8b",
  "key27": "5b6LtFLzBAP29aC6xYATgFUKsStUtkTUgd9Qh1xBj4RrmyZjsbWswQG1Z6KSZCYVy94mJ4gTzQedgkNBWkGSJSfi",
  "key28": "MKdpG8Q2emWzED7TiqEPQiSW4jCVP8BA6b9CbzMmcJXH3bVWovQQq2nazowuWwqrTzsMnqkmGAheb99fQbdtt8V"
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
