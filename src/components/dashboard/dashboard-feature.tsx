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
    "5efCKDHgd2kZJWJW4yGuTdmiLoJUbV4ceg7jUpYD6dHnMj5KBjSeixPrcnnMHfUyEhFKpMwQQ6oa1R3m612yq52Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48Yd7FDP4AH4c8fPBX2WPZhCfMy3xDjndLdNansEFJYYYxWmDEazCCLotSqkw4x4x6cSUMw7Qbm4yDxBTBZAEtaG",
  "key1": "4DAV9wM2T8vwSLisAJbmH6uLEqfTaaxaTGnLKHHxtSxEMdkpYFnwxqBhgatNdAqYJd9rXpQFCyEqraYinjApnAPt",
  "key2": "5boeeKuv9upxWWEPJY2vENUPgQ4pU48ATwJ3yr6rw91LE5nu8kYZG83q6ytRq7VcofNCCQxtqHLGe4SsWqtBQV3f",
  "key3": "3b13816iTTS4hqCXL3Jovtx56bPMSdMasCLwKCzwTJJUm9NG3o4pf8FEreUJSJMd3hw7cPmVmxWHNUDnqER8wqgM",
  "key4": "4sa3o9GX4G2oe5cQk5NGDHDiESP9YsVZAoBfhVUHN84sVy88jYe4ijLvC6fmCovhGMN6gEYD8iiA4bXnM5gAP7G6",
  "key5": "5EayvhNrRsuEgcQMg4TYeqtGw19FzgRxjeqWcGLAaJVMnkV64t8cQayRMK5UxUst9AnxDWtzRvVCMmxyLJTZMbPY",
  "key6": "3keqDBmgmxYZqnXnevT3MaeZ2VSKmhTkQhPt6nmBVY3cQXxddzHyR5ML35egsxHSKpwBYc88nNCCTXocVd99ZVDu",
  "key7": "2vGakx2bKHZxRV3r755dde7wWX8syrouszqKoAnL4Cz2C37r2QajNTt84WqXkK3LVxYbRxH6rr6Z5CjKxqfNViUY",
  "key8": "2YynuFvrQkZmxRay58HXN8MMCj7iBk9EoDdzjDcSoc5j82y14xcmPbNTGQfkDVHidNnBLAKANGLxuJcGej8V55wn",
  "key9": "34oJ6qt6LByFzYV4nrvoXWnd2rcXKQvdF8xLYct2XeKLMPcyud1GW5jX6hiDG5r4zpYJ8XUHTTriTsgGf2YqovFL",
  "key10": "5iJqfmQbZCS8eqeCDbs6jUaNXpQZTnEsJadYfoTXDAAKJJDQ21UFf2tCo6P68tgg4QGfvusMLdcfug74uSfh5xZF",
  "key11": "4mPeMX83MpgqnsDPSMk31pNhswpySyvb78R8UYqjmGmM7aQv5oudNdaXEdZdvbtJWCRM4DDJYH7JcsMV3cBiuxNw",
  "key12": "3kii5oPRZ6NSQXzV8Ho2teyRZTJvPtiCz6u7GgC7xWEJevpuBng7kFrfWgxza6DCGCLSSgY86tTT11q3vPmeUp5x",
  "key13": "5mQd3ejGzLg3FiyTUX2wvHokmJwMRyoBJhef6oZD4CtUTQaFrZpvjucyVt9kuZNXSHRCrAVsg6kkbxa8JRbhFTbG",
  "key14": "2YHR5thFXu8xQyJYJJ9BokbNzfvDCWHwNLu3NnLVWLN6xJJCk1Hq7B4fq4UnUofb7iLfDGp1hQRDgrWj8cyUfTUC",
  "key15": "3miP4k1pMmNdqGuwbsRUrPwcW99jJ5d62ZeqoVTURyMRdvsn98q65jeBrrM3g5wHJ9gAKBcPqHQ6MpJnMssFyGaz",
  "key16": "2yz4wkuXq4S9nejYxSJw97ZxaBfpZdNtQEBANCfnY78xHv1v5UbYFf2WRAezWmrKV3mcFE5M4zCxvkzT5bQrXm3c",
  "key17": "3uFWtgHMhV7XUWzwL9ZeyhuNaqaCh5f1oHRFNqpTFQvqF9FSaznGudEZU2tu7HXwRS28fiTm7t6xNyhuGxFDYzRy",
  "key18": "36aFNAeJgdTGseqFEpRkcrg1XCBdb8S7M1xyWhSjBKZD9P8Qyd4xhAH8dhvWbmhopNLTg5uLJVzN1zg27WthxTZ5",
  "key19": "3HhvR4nXhAMizHdGCF3asWfvNb63ghMTnixrapFDQTXDqgTnAPDBSm5QdcNX9nywVDjyPwfkQj3fuzzta6iGjF1y",
  "key20": "4Huk1Un76Y5FumU5hYzxq5c9GuD9A73cN9QnWNAokXB4eP8AdDQBhEa7ZL4k7D3GsGKaLEAyiSAn6QCFUCQ8uCEL",
  "key21": "64icPqQewR9YMYTSubmPGG1mR42bBxPYf8hgfr6J1adxRq28f7PQCgNYmJ6hHhX6mFPTDZK3B3f9waxvNt4wx9iz",
  "key22": "2FLpvnzc93jS3LpmHLCog1qwzvTi42HdcTmXubEJy7Lhh7e2q3hLPjapuk7WUYEsEBbrBcRFHTtduBBcBnpZjGj",
  "key23": "5UvZZVMZFFqdE3iCcr8Bb3hGu4FcJ6LbFBJpdUBFYicUgHr3NAyexFHn1SWojHXk5wYm6EWAqCAruU3kwKGDsUvp",
  "key24": "32WrSSchQVzx6E7BERfcfpqQDBUjdvb3KbNdDmMYWZDRDW6usP2HNBD3NAm9bNQTBtQSwf4CaiZ5xtw5FF8wgV5q",
  "key25": "25ps5bQzCwv7wfDU6rB7rb8BY3R8YAMDUdaR1mDRvY8hBdeLcLJcS4yyWNsc2gv8dHBCJg5FDDxbLoRdKWRy3nje",
  "key26": "2612LRLRasePLgT4qcZPoVrVhjrwjJ25VqxtMmqTfMof3HBctvSxWqX5rAxLrRFN9hazBHC4FzLJQj9x1auskCc6",
  "key27": "DvsruGbYW1pK9RAJx15xUB6584wkoMa8t1tTv8FmuEYeGfyBaduuj2ZD7DUVxGjEmc4kvRsw6UmhTbSpqok2RBx",
  "key28": "2QhCDtx36KurToTY45KcDuQJMrTw6Vs6fxDnB6RrzrzZ5cVFupg6Q6tv2jCfGDcofAvR15HKn6rvHiWC5ppDYSLa",
  "key29": "vuZDrQ5JXeNihXG2MFKoBGdhDJyinMi1VXTBH8buF8QApu2ZWwo6gcd3PLT4SigZBUbrbkUDseve2WkBRLTCxGo",
  "key30": "2cm9BxHKeqrKF8djrv4v3fB695s2ocVozL7mGWQFUq6nkguefZY7GDawtzprrZRd6tYvc8EWGrRd12M2bry9EcfV",
  "key31": "y71MDr1XPA7X5DRoj65W6K19wCbpQ9Gf1C8VAUv6kGFkQaXdC4gHxiE8sujBZTwqadhNummwY4YB3NwEDfApd9o",
  "key32": "94UNZJTHu9LEU3SjtfXDVczjhVQWoqDde7NCXgYeN7CaTfFbdoa5k1JKimhswTcZhtbthiKD6UHpnqJnsYcarKY",
  "key33": "4KpBBHG1qNmP3vT1tyW5nUHzx8isWaWPRL1ws73Esj1KtMpxaMXvs4EEi8Gf71f1QuJ9JxNcUSR9gm1VcnaP42ey",
  "key34": "5UoL6qk1E3sRYF5Kz1PW3MGeavtzB6fQVKewjjmouZQ5NgJmB4ZiR1hvSfEp8K8vP9MUE8DvQSxmQCcUL7TReJLB",
  "key35": "2DnDCkmVQaD5k7ynwXhTAjKzhEsN2D6Mg3zPZf4JmVdLwXYeR7uTSSZFC8avLYsui4xHRgxcufTZi2jEd9NqCc5i",
  "key36": "3Rg53NvnjdFnpfeNSHpqrgegY1oL5eTKTPoZrZGUbtcC4A3CLmbYkXUbzUGGhkL1u61MDkQT6v9zqeGWFxa9HLDF"
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
