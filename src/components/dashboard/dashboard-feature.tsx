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
    "UM6DNortAEqogN22TmjZrGSQSMs6FWh4QEH9wCUkhuDFUWPmgrP2aRKQTGUkJ1s7rsBhESo9J9xrR67mgBBegNf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ksmzEghdnAGUgRdc2ZiGexVwB5dJHK6LcC6GwesqC5T13Epf67QgDdXNUzRGtt1GvFqFYkJf7mXETu5D8NCDJP",
  "key1": "4BZEW7RG1GsusRW3hXLhX2pwHvZm8aE7Rx7XX6rv83YdWnJRJ61W7XL5ArHKvnv1uqqwumep4NHK9tUK4Kt9uGs6",
  "key2": "2ikjzWrEHdHfSJPPrgcAgURRhws8F9SoYD8Ytmrfkra7qDZnN4zJDpyHTgk8jd2Ufj6HFCwTPLZ2EWsGbKaqceV4",
  "key3": "1jxetoFu2JjmpvVm7CZERHBarYW7D1Wy7xcb5KMMNzKZRSnuxh7tFnsXiZtEoaHLdJcjGZdTPqywJ8xzEWEB5SZ",
  "key4": "4TzoTKFundnjHtMNiZLDejB24BsiG1wSPqujM7HtD3VEmkjQB3pgH3o4NBqxJTnzvsSoTHen4SGnvaUXZi8JYaWe",
  "key5": "5AJPqfH52KS3zT7ne7JjvDJRLeLCTKFDhmhLQ2ZADVihhDbUqoziTRfuVWuwX2H3UFAP9bwWNS1aKT5wBCo5yP6q",
  "key6": "3Pvr1K2zu5SVG3UmXsQRABFgef26Fpkn8mUWJL8jq4nwCgmuPzYjgYbTS3j5miowCXqyhaZgbsnAdQFtYNDz2M9r",
  "key7": "4EmA9znQXgBK3uijUQFoFPjkD12HUyKGzkoagdUWN6jsU1FeTR7frQdC9X1Phwrnqo8PqNA28vPRFd9iB7Sh5rTV",
  "key8": "5XZJqjxj2DMjTib79fFs2Phfv7xGYn2vUGzC2Am9yZ31TCxcktM7ZjUhhzzXWjKTXDT4NhQj1U87XZs91g4HmJHd",
  "key9": "48ybFFe2EN13Gm7Zroi78k73TdZHbcBmw23Hby41QGrXp2LehYoJJbYm3WtUR7pWfYZ5BqgEfFfTUq7bfe5XvTye",
  "key10": "5p4VVJhkJtYBNwVaM6JfMY3tbWaQiKGp8rXUeAgq1nPujUmdyPgVpmcnXLNgW3HUVQ52assZoGgHEz4QnrZ8NsKJ",
  "key11": "2t8aBC7VESa2szymfGDa5ZcBpWX55tKki4hwzNanNNWzbmG3SBKY93H6RdPrazbuvUhYWBC2r1Qzm9ss4MMvPngS",
  "key12": "XYq1Rr4aYqRnYxSiS2tLmVemc688PY7HXKdrvoi6BePDzJ7h7quC2P7asEJdgesc4CQqhNYBKj4sd9cqFg2WpZE",
  "key13": "2CcBeVL4cfr32uuopj1ye3hb4tvyNSYrAmZTu934RJvKoAHLLhgru1Y8t7Z7FqgkBP5SXPBFEkY97SPTzdBrvoAi",
  "key14": "2THU8dRkkiSGVb26bTqiQtuRmJdxmKQ98FbRFcXib8buztdLq75ffY4joHprQLduZ4f9hag5NdvVv7VcFhZU2W4x",
  "key15": "Jf9kp2B69HdpMR8AWCYqkottQx5g9Dz791LxMxFA41aMUBbZeVTmFWp7kvoS157wt6Q6K2Xv38bZAbTczs1ht8h",
  "key16": "3XvBeygnuH5mtrhvTCS9kvDJg8eTSQPvKworciSWGen6uHb2Cg9ig4MEZiB9Hz3Hr1rywLH168cSmoQtThcV365T",
  "key17": "3ynUNXc7s5xBwxbvW6eYVEVJWMkP7dhoPFiza3S9qHv8NDbngusthcTZFDVxGn9XYecxCgtezWepGhD2R4nGYpru",
  "key18": "4Jvd2ppHp4wgyUrw6mdATZ7bQK5GrgRYP9JoXztHBX3jZnFuZTFeKRig7pZefMDSzALgSCUFNRZQeHvunWsHyFFW",
  "key19": "23UL5P83kaxW9fMD4pHxj9aAxqvWRVYq3XzJ51t3qFNQd1t6CU5u3qPP8w8M5PwTnbERvWaR5kthtnD26hKkShwS",
  "key20": "5Sfu7GC84r9XuErY1NYwySVeehmquwuAHKmHxjkun2eSYRgw3fWxTLY1FtCbi2xsq5WfgMj8cCCKs3LExGt9tBgn",
  "key21": "ucdxQwsJUtkmDxb8TT251Rir1GaCE1tZrgfNGdABPPE9SCGNHTpiQdaCW3LhCLzideJq8dYXD1oyxN6A8R4PQtK",
  "key22": "3XYMNbatBhsSxiD4SjHYAEukw4TvakzeHnq56m7jvuUix9RLywm7Gcf5ECbn1m1TVWW6LyzbASDvPfa4ZNME3PWu",
  "key23": "5ZbK7k9gaASapanXQQxbWTb8uhZqhfQmVcSPjBj7LbQQEp9NFkjb2AfyHj2KqbVpnAZkyXMZR26UJdakzJAnuNnK",
  "key24": "2U1WgoPwHPiE9xihTaxVC3MNG1UUekSHcVU8rQaYANMiegxFQ7EwPHbhHHSzGazY9Y5EmKu6X2xYgpB1V6cFmBgA",
  "key25": "5HY3SfcPXaN3R57hmifaZQEtPWHXwnJntuoNeBSqvfdwKETsVVcXGLg6NK2aVr4SVxf3vaeaTUav7tXkdbfGPB2j",
  "key26": "5F1d7G9XjXmQYkaRWQk92ch1tj9vKYYg1xugjyGWnY6MhDTJ9CehGko9UoTY5swBnNGCenRrWTwMp847HWZ9KZTX",
  "key27": "5Q5sAiUStjziy221dJnaUZPTM5ka7UhFV2mSrzoVrGmdUsKXn7iYCpz5UvRhWddNtvwk8q4osRDZZAUqTgiV4V25",
  "key28": "54NGAQggq1GpsQVrNvrQbQMH6pf2EyPSD6BFRw1ZpJ2QNdYVfRnbM5MSij66hKK7KXPP1wPZvU894DWFWoYL7aYh",
  "key29": "tG7A9hhg3S86E1TJL6mF5i85WRSc2MWWXQo47DAMbgVn2XFup3DnWhge7Z9jiHBzGjrurPShfTQiL3EFus235fd"
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
