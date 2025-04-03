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
    "5vP52HC13XAjLojWPYDtUC7ii8xXszkWJxL8iuqbwTttH2BAZ89hPgmu4jQEFN8frWUZUwFMuZAQ11FBKnDWknDW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "634TJk8h4HbXGVoftHznE8mt7y1o95VaCVKuecGG8Q9J8YCShFUfm9P16Z4qBF8iFKvpq1SLbAaefrtXgm9v9vRJ",
  "key1": "3wDL8MS9oheWUK9i9jrTZKywb5rQ1sW1ojbiPcpvyd8UFo9ppD6i1xBJ2LKhvax7GUmXqj7oKBWGXGPaNK7BJeph",
  "key2": "poREKmtCc14PuyyRx5uHkQDpk8brPFGSmAkgNZTwGeVWa4ZPfeXURrnc2MvzvxRdVWJ9WLFdWR5ZZ943MzMLHnf",
  "key3": "3r68r85FKXsdsufCkpbGt12D5twFbHQyVZ1gt4gZdfov5DnGwhwrRY8kGjvjySGou7yqm1dsCF7rKDok7Lq45Vo2",
  "key4": "485QyXszQoVRspx6EWZDWGoBXezJu3LypJKdcLR3m5Y3cQX2Q7fcHJawvHSFSofghQdWWRgMw9jzkn5WJ7y4zZGH",
  "key5": "2rBURf3MNaJxoCJHAUkmShwaAfthSUuzXnWSfX4FurwcjXMyPcjpccfexJh2V7GyXGeqUARFzPemFTc6tnDgXvoS",
  "key6": "58XZrfh7pJTkfDngQ2wDVA3QFmbdGEghzzmm2VtiMQkxqTUJ72xLTqSMt5Spn76uhFfM9CqZyZCe8yKRRNBAdLU3",
  "key7": "299NJQeYpje5bEuYM4d6FtWW8fzJAFUVckdPGbvaX6wVDCMTMSUXkHPtaGywbW7YjUBVPYLDz1W9oRG3WPKNU4RQ",
  "key8": "58XnTb7JPaZynFsnLkNceuex5T7yGpZuXBnQizt3b3Wx8jEek5kHcFWTSybVvDZefygWq6dbWs7QXLBViBdJwT8Q",
  "key9": "A4TxyyrapKwaaWPvmtKJ3Bf6kzvWxn2eqdcjeDkThRG4Lvis3MHKZtKw16vKWxofHAwubCLzUuaEsyZ7rzrUY2H",
  "key10": "5Ltw6zy6DD8hZ8QJ5uk1GLW1BByvfrhJeYTyR2MiBUbwZojp3piVRyQV2AXUyekb9T74AKSPsKF8bFLbm7sJ8iA7",
  "key11": "66dSErA3eRPzhw26rGxeGT26yEgSksh3v6eCJt3TbpwwjsWrwvmS826xgtwx8fGUcierLZy4pLJFRDnAhc1g3Nzu",
  "key12": "61etL8J2zX1brxQNiGUam4ZAxNRhgLepxuYNvoB4W72jALh3prvFaW1oYjPpYFdWvyiTSRQnBsEGnLpg6hj8bBP9",
  "key13": "2FDknoT66zFG3vowWrbtRaEhX25GBhaRs3Eb1S259eYKztjR6GR8h8FukaSNF591D7Gu4dxqi5XSJRiXZzC8H575",
  "key14": "37QkMZuLDfqG89HscRrb9kcDt7qgswMeaokFsSniMDs5pb2qKqG7XRCzLkP6DqdBVwaCmPrvmPuzvPZTTWZEp4WY",
  "key15": "3jj7fb6mwKUnvc2oaTdyiyqmPLBQaqayDh8WnjqxrELgQ1SvoPRJ1p5pkR1FKin1guUg1ywUCfnz9PeBa3vYnDUX",
  "key16": "57MwCVKbS6aoZntkNwyv2zJ5k2WDnq25211W2UM39RviAVbM31HEZ5soJDCwuUE2v4fzdj5npPPNH4Yg7NqSqsDW",
  "key17": "4q8wJzzzP4u8Vjd2fU3M2EXSi4CJurMomyce3pG2KPuJM55dLXJt9Zn3MFUGughgg6A7dQKnSycZJ4jHnEh6HGg1",
  "key18": "4MJ6PM9rFXDDryYAnYN5HwSM6dn3Sj2L7QRksNunKyTnXCD4HvQfw6bSqou3h6DyQcGBhoHTDtng5j857aT5z4e3",
  "key19": "2MEMbsZ4cmxbdMP81jbSFSKPiPc9GFrSEDnAfYKX4oyrjsnrCB8Qm8SbHZCFjZwbgcYVswJnyvb8aYp9bX8ByuPT",
  "key20": "3jMdbNZuXq9PJHDDHiizf9LrRyoQYne2xkRCioR4mGd8KkBo216YmvrKWa9JaQXKK1NMchR8Lu97NMFdBmGKnGc8",
  "key21": "3o9uwt7E5zSxa9XmkSarP7hujYMh1JNGzFfJWRqT7Wpx4pGvLeZctX9fuZQVXdPD5mKBCjd2h9xSaH9NbGrKPPRw",
  "key22": "6J5EdHHb3RKs8siRvPdCKtHy2S7DUuTzS7hVp4vwXDuzrCtCqUkyAQnqq6x9VysJjC2hUkL5vdm4GdtEPhkRqUU",
  "key23": "2Jg3XXPnpcZx5N859QkPXnGhwn8NUxM3wBQ3hpW8VQfLQiBCtz9qtJm6tiWDRY6K4dYPMLs6EzTJMSoLHsC9RWNe",
  "key24": "5xfYB7GwjMwDZDwbHeVgT66JQ2iGVGgMMiNkRM8emntFBL6Ltcd35YisEGQHNJMNYBKohLioGQJEaE7pqWrZEQsH",
  "key25": "4YxhGxB54LvBqYGcoRa7jUz9eCZNWrHoL3HfMuQrWshqoQyyL7Af44p6Xr2bHUVPndUHP9CyDgpxy5c22hMDaZy1",
  "key26": "3dgvqaj5H6H4UBsJtrRGynVmxbJRr2JBU5KKA72WZqoqBeLd7tziEth7iFT5mtsR9BuVvM6Gc1gBcokX5M85NPqg"
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
