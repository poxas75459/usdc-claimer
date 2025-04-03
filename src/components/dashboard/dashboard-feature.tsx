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
    "5LByUKHKJF8qxHCUyssAHtTEusk5NTVnTEGqcMu8Qi5SJgmJLxnCoytk1nMTxH24eifnZLYkBqEWwfjBJmnx25Cu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZyPwhDnd73w7NSu81vZ9EYQebJeWhev9RVWp7H6dkeARXqg4usJ8rDSsjCbZaPmjjbMUUYxdLMzNJocY5yurDzE",
  "key1": "3BGyfFqCLPnnunSr5oJuFkniudoJ67VYRUYkmEF43NZP9Fn5bBc4Wgv184dFyzn13hoXyZYxZghBKY5EUss42kbA",
  "key2": "26wR78BBahkYHRaFgeQg3HyhfZNGi1tRfhWhXBBGvYCtSBtHFmb9NWDrUXUA5RoUSFLwvjdhwxXm2BoBVSiBxAtw",
  "key3": "25rM4imK1VPMCaVmr2KiNFrGJiKB9aQ8qTwH1ZkW4zBmDQVTVTnS7B2qjpxUALx3gfLfZkfGsCFF47BgGrRVtp7g",
  "key4": "3x27KUMcjMTXBh5uZe9qVooHRJkTWVTvEKXkD5si7CSVveeneJSQBL9EyFR1gFecfKm3rpxGzCN3aqh3aLFooEcv",
  "key5": "4Kdz1HVptyN9vx6eanGXvJKSjTcUNDnUZh3cWeqJKAToJwhqH2ic2y5ixgp9DtRFTe6gX6xJdibGugUq4gtyjXCP",
  "key6": "baPJfciPbs71UNJ5FG8qf7BYBZ9YCq86X7j7H8daJfs1fyhwLyYjYFsT2HHMWCmKwgPpQ94f5rBjNG4bT27o6Qt",
  "key7": "61dKw5TuwYZrz7ekR37BnWTKW9yZciN2ir2fQW5o1h8iD7W8nE6natoS1k3ioMJikqhnZTzmzj41XCkGNfSD8wcW",
  "key8": "3KQ7zxdc8Y2oGzALtEW1M4MvnvRvDzGzCFuef8CwNrNsyc5A9a1xaJPsPvA7agE8iMg4GKBDX4uB67bkoLNKpVwc",
  "key9": "4rHyriRK1rqEDTHTqjQdcUeDuRLkyuqxvFaECWp4qXRMZz23CL1jxuW21gM6S9FpqzfHY5hTgPUue1Jz5FLFghCq",
  "key10": "399CGZHTSkpFoTpUQEq99V6pZoMd6Qqxk9dYNT9ZBkNUxgNs5eBUTSUVXWRsGpR3XnNdiex648J7mHYeqgw6Rep3",
  "key11": "4RkkDZXa4mimmsLFrnN3iw8VfyhHonnYtJopJ68MKsXgWYmg5nSMwTWBrWTTNMbrNXUp7KwMbpzUQ27NkHKCA79c",
  "key12": "1NV2GBS7ZVCMzfHNkiWy9L98ULSyNp6Q1uKRHHe4raGnWmTsT7eoedAZZMmBgZ1x3fU2v4nCYbVHMX7iw8wMkNa",
  "key13": "33u3ux2Xw4HGXVXjVJRR6HJj64YasQC8RdvM3CLzWQNQPa7njtQK7JwcZpSuRFJsLy61tt8qNQQ7i4kyh2GL9LM4",
  "key14": "pVDD5dmm5gg7Re1GNySgqtAyQ13kn7kycp5yBbgodBsYFPE3yiXRAysPBBmZsCpLeM73Jpm2A7VLCbJarByPJZH",
  "key15": "58Y5HKuSbNfUSkmwgcWDuEUJ5evY7aed9VD1XEtWeJrXx664dno7B3amV6SjtNydfhLhhzFS6Jd87dH8VNjw92Du",
  "key16": "422oA3RU1AUmFYpWyzSsMdcy8Z3eSy91bgV3UmRzjfNutg1YCybC3uCd36GR6MFsZzjBnwEKBuqLUUC3wg7pvBPw",
  "key17": "5NTwdh8fVNPzXiPqyNBZrkvvK199aBNNVYaqG41LesmQVhodeVVZE9AfHuz1rQWAyXZogHM3JDPvpD9HeXMALoWU",
  "key18": "5PTbG968gkJtbXi3hRB9vpi39aHH7fzQk9jkMCpY4WccWWCUDRF6uV4XaFGqx9gM8JPuLPe47cZP51keuidafqBg",
  "key19": "U1M4XpnsmCCWEYHmCsBCbBVZQpJ2LN7QYScZVSeiEM1XKRWjQFGAE611j8UzoddpSvp4mSmkPbx4Aa8TtLV3KvJ",
  "key20": "3Z3jr3xVQLVkjMzXzmex8fvSzpbo1WsL9EZVJXkY8X7pTMvEw1mxpVh1HWM53sRkTHiekA49HwPf8RC39h9h1Zop",
  "key21": "2tKGFU1654D2Yti6HQJNpb7nRSFQALoLcuLSa814LSk6AoUnYDdoYz9quYok7uSWLWvV2CXY6YqBbq1NxGWqNoqw",
  "key22": "Bm4HZcpHm3iv2toa4SVQjNqHzCVcJ9nbwSfrS5SeprdEssPkr3AxRhxmnP2xDY766Y8kXvDZTXnCh7ADAs49hSW",
  "key23": "4cdh4XBpNp21EwfQAaUFrgRPGLov2B2FwVF4w1BeZRAv4FEFaDaYNrHin9JghBTAgiDf4MFj37mp3BRYvcHC9H4j",
  "key24": "3Kqvi7qr4skXG8QpEyzwett9KbjZoaPzV9xhmTZW2egFL4ck9LrciCNaY4pcoa24QFyHGVUfZebWh35EDPPDhfTx",
  "key25": "3ftnBAWUEyrGGBS2sAHHDzDGJ87ymaNhpcXjiSwY9pFjPvomaNCWtYsVsUMk8fRCtR2LQ5URKZP5b9NnVZDxMgeQ",
  "key26": "4KecKnPnhK4goG9hCwx42PeZCzQUq9zjDVBnqwhn4Yerzyeya9jC5f6izELfs43o2cm1nbMwNryU6ZGyYq8Qz51z",
  "key27": "3834TuqaRU8NX2C3YrPpbUHMwHphjpUfYPP7UeVu4jsAdag1jGzudc3y857tE8hhEGbbW4WCcvHrsPAKiZ2YEsxs",
  "key28": "4vyDw45GNsHFybjUmKgdjXQYYdB6LH7g4Jwa4asRWedqQCCDoewaHfwo4MtRxXjuzFjB3HqU9QK3Y3wziEvEUY4i",
  "key29": "4uWBaD173J7AQz4jdocurpJEgKnZZo6iw4tEsr6tC7u9EARoC8AvhPMEJK31XZfnhqqffgdDNXhPs2uDPaJFoyZ1",
  "key30": "5NcYs452KVFVEW9mkuUxtotNgVFtHpqmmTJtTVoUQAjpd1xGAVkZqEpscftN1jaAM2qF7LkivAKQZ7nwsaottwsQ",
  "key31": "5QY9TfDNgkufFK97n9bBGUyUU5rFUJEhVJeiwjZhgQNZ1ekDJZsTFeAEZe17hRmUGP5Th7sP5ubecUJjMS8ar1hy",
  "key32": "2Z5Ftox1egvAmXr9LdDoMy6RLDQeksF8Ws5dZ42iAvt7e56zZXJZ5Kgz5B1rMF2ARaHjQC17xtPAChns9b7JcPEe",
  "key33": "2EPsHaqqDu3NLiBoZFUtCkvSMM8rdeg2xvXPJVgHH3mA15k86gNpumEQnKMpfntCcLwwMghH9emJfzGbEkL64HDf",
  "key34": "4HubwJ5a96DVtJzT3fAR56BuhbgRzJQHptdxVxoKzFzQxVtcT3s1JgG7LMBSBcJf6vJD6f4TVCfA5xfywhQ3vKJ2",
  "key35": "3LouJ8x61xskTpUVT37acyUzV64p1dwS4fcUVffhPDiVhbLH2moJG2guTHUnNhcCi8hE2BTbDrrj1AvRL3Vh89Da",
  "key36": "5CtkzimNXWnq7L1YAbsaentM2V54TvcTagHong33fbZUVvixUANpoHuq5H3Swif9Vkih833g4QtifNWNejY4ta78",
  "key37": "P1LncJCCjgpaFNsUCn7cTNM689hGqg3U46popWkAmSEDt5DhePh91ykegkm2x7uqpZ2MvCPSbs9kS8cyuEC5bJh",
  "key38": "3VNVojEZQurgojxEA23i6A52E6Gs7yqjeoAcha5D64UKymV9WYQqWoUjiHYqaxySEgafQA9Qqpmtt3jhQgNw3DSR",
  "key39": "22z93GLQgj6fu7nFbiWkzUyz25o3NkTmhEVNjSTWeEJDxs22NgnsLUSdYfxkguhgBreRrmkvrBkrpqkVZgyzREMW"
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
