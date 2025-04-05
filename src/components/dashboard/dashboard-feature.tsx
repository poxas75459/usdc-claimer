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
    "3CxyiXb1L5tmzfV43TS2VJnmvYf6TxJuWvt69z9ei4UJQrQwckygf22jvVgtJxFyecjqiwhrzngYDMWjVFuyi1Mx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tPRRRrxWaMxRCm769sqDqfWAGwoopdp3uEu11BG54oKbdvAxwyec6yUb1mqeWkdG7kdbd7qYFYPbDj5QKjTMeb9",
  "key1": "BRGPBPocLGdZygc69kKdCr9kpaQr7Che42GcJkMGQZkFHfToojLkfDug7RQ4rYBjkMhed55TLhbgtuuvoZ2rsoj",
  "key2": "5Ls5d9U7Q8iZtffzzEAramPyw6xABXFdwMSN5Ke4PPWfic7RVsJryQRkZfnKtTk6mLinHaXNrzbpnC4BDLKWHMCy",
  "key3": "2M8kGqN6x4xJa2PmNQwUj73VpqwesS97bJuDWGsv8DQFAzMxLf9aSTYmww8haYXVgAB7bVqLRdWfXhKv8mxZKPJ",
  "key4": "5gYcGpVWJUVdewLkf3E4YKsprq4F5dpma2XjJikuUPiyUfohqoAbPbpp8kHfYpbYUP95kKopvCFMCGt1sHNWMZGi",
  "key5": "3SoaXeLcBWG7318pZkHBigTenHf4w92t3bUheH3FzMAAUdsdW24cVCvUh8CDcpJEwKuTRXG3P4PKJu9JMxHz5sEN",
  "key6": "3vTeRg27ruCW8YJN273V72q5HxpqM1uMjSv6cFRCFyLveGZWZ2EJif2NTze4pQcfGcAN1nKCzwJEhVXi5voRob7S",
  "key7": "nr3fC6xhnd9TLikTNydZMmSfX4emdxZG2yRNXaBhJgWiQXRe1Xs3eJritynuT9JqLZ7Sb6YTQas8KEeZRu4QLLw",
  "key8": "3pymDpJUizXzrszenVHPkeNqTM96ETTaxS1cBx7iYiKc7U6CwuxtgZ5Ec23DJn6XRiVtx5yBc1sRpxASs3HGvp62",
  "key9": "4XdoHXd53e9NpfgWx5GgkCdStQLUnTAYP8dGJyo6gDkLKtHiByUL3qWboX3XND5DUVsmHckXr9QsoVAg7XmwRk7d",
  "key10": "67nSociH7zPMWRRKXWJkdnVYNQVHrP77kQXHJNAeJ28ntDUeYX1f8GNL3Y8QCbWkrMtijAzEnX24vgfe7JPpq5uM",
  "key11": "Q65uHxs3Kw7S8jsVchbypVoWsaZCN2axMNoxaRRdc2XErYVKCi5Q6pX21WKuKEbyj6Wq1XDgjTh1bLyieDY5PVF",
  "key12": "64fq1oqSRygqeVcxLYhh1GqpHu774qjXz5ht5mX5Ak69bxLvHZPTuULXAhqxEcTSErvdbBsVbhY3reHz3RM7yvFZ",
  "key13": "4NJGgue5Eij7ccyYXQnfsEibcKdxHstPC4GTw7o2jHyLctXeeM2FGxU2ojif6WvEj4P6fgC7uykn65cKjEpnmRe3",
  "key14": "4iiPK7zjeYB49yr36exvEngngLFKvT92z9AYc5qcNyviLLwtt5jernsNTA922kbd7nyKY3FT9eQ2tCu9TpbeiUDy",
  "key15": "2H5THzf3vhrzqHJXHeFjASKQMQMTvvNUMgFqEjvgy8455XqrdquCzf1pnezxUoqPzBN36zsqHa83xNeFGBqGSz2Q",
  "key16": "5sEr3ugf7vp1mf3Cj5UGZdSWS2tyH1esFA2vk8TMqSumXDCjttW6XrVvSCxrMuUjqn3TzppbpqG74etUyeGWhmX2",
  "key17": "2xhCQ73nKJT5mACNBaqL7Jn51rfuKeQYVTQwDniX9DDPyMzVWrXhXpmCQCHCKkMzBsMqXPW74uwUtEb92waKjQkV",
  "key18": "EAnRsXN7opHZtxpVJ11bm6GHKZ88n8N9RchwBihYYXCWSVVBuwBHTtfVA2ySmbbMzBAeUuGBouy9DrbKbNEYkxH",
  "key19": "2z35KKmfcDxzpLj7dPMhzGaKU8qgnn3Am6qWc4hhqv3UwXHc3a2J7Zh5QBw1ScuynfeGG5V7U6V3Kgmn6BZxqAfP",
  "key20": "XQQvjghnvV4xTXr4zHBQrYxSUcLcthk9CgAYQM7sxQfCmxWCwDu3eGPJempcxpKQP5nudNgdhgf8VrQinpUhGJh",
  "key21": "xKjfreH22VUKdXvyi2YGg5ZDDkJ3nQMeyM4cw3Bw53mJoBDD3XGNjff2LKbJdk2Znx7pV7XSFTJ5AdgC64PwP1T",
  "key22": "3EQwYebqnpeLMGY9P4BSEebeVQqRNFUhpiUYxRgZzVyHxPQ7Wp6beKDWGCSDPs4pBpWyEYVeSfAyrFHCSBWdp1cH",
  "key23": "3Aok9u87q3kVVm2GMGm9YQLecSUW7nanSdPjeHvbVprtL3vpc3JLXS72dMfh4CYPffXs6B2PqNZCWwTGg8G7cc6Y",
  "key24": "M3YthmUqdUtzXxF2jHbMLMTLGJrkTABUjT4R6NU3yNVKHEHwsxq7D6N3sWKUMwyTFRaZMtto6NBJY9SwjN8WEms",
  "key25": "5GWvxWZuGd4KhNg4Z3swDyuasX9b4HDNPjV1BBF6zZeGfcE2d3AB5tte4wiNhvAwXnGdqTYeNsviELS9G7rdNMCZ",
  "key26": "4bw6Mo2b1zqiehASbdBwWL2TQZaezjvFGY3RVS5zT746Bj7zyKd4o7qkmXwPoX5QNswVrLCYbcaPEfpw4hUNhUHh",
  "key27": "4ZD1uehpjUUJJa7g4vfJfQFXpXTcRZaXUYYiwopPbAoGMcibncoSucHDPSwxA2VSfDnVvrRGVqrcBhyN7R9Fo5By",
  "key28": "2X6DTKqB8rhuuyXTcY6jKbF1nh8J8hYYH7Vg8eNWxq5rfMJwzu6MgcQswJEvQ18hh8hbsXBHR4RZs6TPJDVZ8rim",
  "key29": "3zDwtEBur5YFChf4QVMtnXu79LawNFU8Y1yZDJtS8wrCi7FB1GjgPjEiHirP1ZgY2n16FXa1j3wM58ykxBZqYnwu",
  "key30": "sq6eN6MubaT4UMisYDDrbbLQTnG5qJUuzvfAcrwp26Jdv4R27BnP1BramrM31gaL71ENLeLu4Pb9ETdH1psmpL3",
  "key31": "4qAXVATnVyUfjSg3NaNoDzhw6ESt4reH3Sy2heeFmc2P4K3BbiEiuDSNLs1x7Y8GvfXAtoRHXcUBKHGiwZgp3RFi",
  "key32": "3UysXQC8kVjmdyTMSB92TH6TzSPhujEUnmBnHG3DVrtvaV1YDp7Wf87qeSdrLVaKh6YhdJApPTRSVkGP9SipgTD7",
  "key33": "iemYyiekwrv41xvbX4859vL39AD2d1HeJ1EJT3GfC9Q6UjRHPpnYzRL1fr4pQRurhXnzszGVWRPZV9gAGYJVt48",
  "key34": "GRAmmCyXaVGpyq8iWyHXt2pDH5n7c76mM6ERmd4W9nHhHNAfsJRcqNS5HtyyBWCCRvv3WS55EYrrLocPFA94qR1",
  "key35": "d6w4UHwdaewX6mzF4C7ZpF6z9DKrW1L4tyyAjhgTkwh6k6zdWaKiGgAgoh1DtYpx8TwRRGUVScNGUWHh6qgyQ9e",
  "key36": "4Q7mA4qYM4HwGmyjoXJyukNCfBBvK6x4aRFb2b3djd5t9AFWb3b5GxjQ3eLECGoo5RvC78CKeCkeNMkjNmqYEej8"
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
