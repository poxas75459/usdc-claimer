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
    "gvERe2xUSd4A23e5GSeCRHgEsHdXfGgD6n9yVJom5WpFzPuibN2a3AvxVikP1wbs3qo7EEXobgSjUihwgTRnMpD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pCX4Jh3ke4dFL8JEksdGCXRmLhUvD1ds2Lxuqy1QECZUbK6EEvvcfabwbBPzSaAdd18r7jW2dKSe6GmNTGJYRYN",
  "key1": "5FovxVah2Y7oBYbNGh9rBwiyV7FY9A9yWCQvmoxB17F3QV2qQKPwLdUWjCj1XAnu6vvbDMdHzNybQ8UbV7vbbSc4",
  "key2": "yM5S46aFmP6GxZYRmPVQvVMvExGLPza5UBa6MG3g9kXCN3eUaLfTvujcgnLEgyYM6dqTtq2nbaFTrpzUskDuuvb",
  "key3": "5MT5eoq9mwZFhJhusWWdyeXBwcnEUj6pwF29m3rML7Uyono8eiPEVcg5eDz9yRFbpwVKUS7AqHDoq6LWttuGww1b",
  "key4": "28Utu1PGXq7b8hXmtzNap1M5gELWhz7CsByGoT2ygMAPf4sCceEGDKxy3k74SaVhjKJZnjtiDWT4pa31Jp26q9eN",
  "key5": "Wb9iDKj5TvmEADRY8dxPo7epmLzrmmvhuZc2gPd1vUaeyNjEFcUBUNDqdSW4d7gH8aonpnPHEcss3eEsNLmdAuU",
  "key6": "4cMbYuzFLyrvJkqrzjvYJnbQkgBWiUnKqmqxeSQgNpgzvgGRUH9vZ2iuGtWc3b6mpb9gQcecmb24rwsfZ7yWbJb3",
  "key7": "3YEjrntWTdC9btPPmbhCfuccQT76XMvriFHBYd6oc9UZnRJA9oFBZz1sPqvAozZa2HBotqZFz233ywCgGnNP1W11",
  "key8": "5CayT6LMoy4xhmGUxhUft525cYsx8UZiCkEg8YeWWn9pc2ENtCCfXe1NQoRFE1AvgSFK7nrKcpqqQU3v1brNMDND",
  "key9": "5NTgdd4S4GYMcPn8ekLhNbP4ymR1szYFJEHLvziwvUYTpHwx9hXUdDAwruBqgqQgTL2PyqK6GkRirfatdCWkVhG5",
  "key10": "63TncC3axuvNhEdppy7XmVUFLCa95Q4ynmnatH3ikve5DunBvu5H4YzuZtUkbQyTkBq48BCnCKobhh3WaBFDak15",
  "key11": "2uX5QS9BbRLuuyGc1QTEUrA6B1th1NUFPM1UNBUndGPjhMwt1Fviw3C5XcE6tKwcLn8nXiNWJQPaaeBeXHDwZEoJ",
  "key12": "593tSifNBaE1tXPj7okq5sCxP4DHBPWvZP2PTw7LDEd7oiG5S3Ms87oWH8ATTVhVaTspMbVpDMwVLuUr6KHz2XqH",
  "key13": "47siGxGJg7U5HTyHU6GcyhydCPX1vPxBxuwV1oHSy6zYg2kyYx8Perq3pyrAH7ZRofuCxeKsU3s37UBXau2jbSxM",
  "key14": "2VWX4EiYdzwgM5vRZy2e726ZpPAJNJFc1GP4y4JogKLR9JM6vkHoAGbd2GLJaP64kP7tndjMUi1GWmuqcAp1hM8u",
  "key15": "5PVoZnnMseKdQNTXH1dpmnnndDKD64YVGDfxZfui4SfMKegfr71RRKfBYu8gUNv5L6ynRRyr5MjHwMkse7rP72ov",
  "key16": "3EXK99V22iLSKG4QkSW8xaAwaAvy2zWeJBzeFCFjMFL9xaAtfvvJh7s9qBTVNoQzGPArFMvnzoJwNyJc3131qVjW",
  "key17": "YZ8c1P9LbRz4jqAaQukKAtiDyLonvyhmAvKKNhirpUHnPdG5s9fhpHyJJfYT2QvgPN8XNtPfoGx1qoFKMWFQHWk",
  "key18": "3vu3nMYvSgKfnKtSdbe3tkUUyghnVLGUbenn14BubfP1UkqVf37cZaowW14uHzHvRUo7xN3YtY9owdrxFGPtZe5Z",
  "key19": "3gJzU5A2wdUCpyYxEJ33uFaMj1HT4PEq41DxmoUv6uGcy1TcN1sAqYLMkZSxbySaKdtkdQrE7dWD1aLhQRqoi5vv",
  "key20": "4zW9GttryS9qP3vGrFRFcvzLHkLLRFBUHHxZLKhLycg3RFPp28G31VPKH7qXxhE8Lq9jtrD6H52exmAN54zKxv18",
  "key21": "5BLpryaYx8eCAWWLaYwztnxZh8AJpdURVWbptUC7R7RJy2KGdf4Sfq3ksrKXYtXKZtBJAJot62KMWgKHJ74wcbfV",
  "key22": "5EKVB5ffRP73YJRZ1wjeW8f8cXWw6kCDT3V6Km8SmgeZJ7cN2BVLe8ZQ3EoWZBHzWwFuH14jYKpanqZmTwcA5Xoz",
  "key23": "5rJTU53N9P7wj57fbKhqpgEi1f3f3WFrosaeeXE31wxjaWTDtNLeA4TTxdQ1VUMtcvJgT4WWQPR2f15eccMZo1aw",
  "key24": "2R3NtacaRWJjQVb1Xm8cZNccV6eG9d6e6mdb1JAX6DBrL9xSaTkx73k6zFwzVq1b5dkcPtuRsZb5VtX3qYJ7QjwS",
  "key25": "4DNdoHudJkuvsCfSUMtqbbXCSBJcWDhMiYHxQHyt9fcNbXjyKx3iozyFb57Ln13FPhTtx32hN9PEd9DptjpSMhsh",
  "key26": "2y9o77yv5hz77KxCkk9zkuGRuF3obXxY3fmu9WMqzRJ5D69CFgRJC6ihMHYFxq2iBpvTE57k3UNvEdbogGMRferh",
  "key27": "5eyRveuqovJirVRZCBAMroyqy4TvKGa5zyiydVNKJ8vhzaZCx44H7qn3y5MdX7nWZnk1WSg8Cgyv12siWg784ZSo",
  "key28": "3CDj53VifQZoKSKAxd9ZCdE24i6gVMBNSaWAhgJJZyNzQrbfUBaxmUpvH8x6uqBc1JLbB2Aaaf6ktGAWv4Qj6ND7",
  "key29": "2Yfc6AAqMmkSX3Y2w2KWfZ68UHuhiamET7fUzSC7DLGhkMofQSesDcpn1hiwaJeVn3KCEJzCis1U74cTJ2FL4Yre",
  "key30": "2UkKjPy5ctvu9zDLEE6oHA8fLGiUnoZqxjuP2TYJvRAqHE9DFTLGpbADNmwWtmab3Y68ZkWvcwpdur16DWFwn6NH",
  "key31": "62SPtwhiMg4Ux4RWyfESvAWcDLNhA2JSVv6iAtjcy6MBfPesQgcNqrtKoRBxGmpjHqWDNanZKNYkiYtN8rzCxViq",
  "key32": "52oj9xBDa9DizFoguYUWujCyefuGi5TcTUCyKWVw65QbP1DpAoswrp7pADfSSrneQ1enJE4TwYK6jcZ7GMJaERF4",
  "key33": "MkvEiVbRyWutkbxmeb3Y5jJ3jyv2Su7Rr74iYCbbp6zrcwTM551VWHH4sVeC6f4hJuM1KSpVjx9oQ9c6iYKWgGV",
  "key34": "5YDP9o2YkCTjYLVCU9NFqNjop2Jkbyzsdhk3HJyXCXZggSMXY89CVLJAECVeZoE9xPyxjoieKJ6hswUisCj2A2Hf"
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
