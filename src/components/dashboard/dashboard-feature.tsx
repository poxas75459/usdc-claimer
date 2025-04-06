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
    "27Ymr33NWZphFoJpggjnhkMHygSUgvWr4JsNXTrfLsMox5swT1SPFc8KgfB2vaW15u3PtbVvRVWXdsZpdFrJY4i2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z3C3gnAfcsfbXbJh8rguWiaE3dbJa8k6u4peHwfHt7VNgj9VwN1Je2tdCZdFSVhEYpN4XMqpHb8EXFnh3wgVJdo",
  "key1": "3p8HjUoEJ1LtW1LmLKa3ZDAWXPi49GzVyKyAQfnMkg6DtU725RPgLM1Pd7G4JFWEEBeq1yKY6Gp3uHGwgkS3Uwh1",
  "key2": "CvKfVoeSSFTGWomDgGvnSxJg383RYiZfpVzH3LSm3eqgV7kYEC6h3VL1Hyo2otyjVSsh8QPiRgdm1FXZP73nrfv",
  "key3": "45aqx7C3awDX4A9eeuSfSXUsewHVDg8SJiPfTpbA6mkvwXxE4tPjRFa2byb7xHH6xAFCD7iAhpHdXtiZnsjDKWRA",
  "key4": "5yz8ogu87hL5BQb4VUvDPQ97UQUUAb7WLyMNS43mNw4ZL2mJcRwA2wG866Er8dbs7uW1UyVJin15rcjc3U7mHFUo",
  "key5": "2oQZ1iaBhQRzKvXEiggs7kYtQhFFZNcvefa2UPSEBHfwVev7hCqdBvNs6y1AQ5xBwEQG7bbLfUUY5zqpNjFtKrBW",
  "key6": "5KCS1NFnuJKZCCxFiaePNvVwivyJpdHH7e9PTxtkrWvFmMRuRML46dLwMs4FRXRkwi1gyzREVYvxAbQzgm9hdWw7",
  "key7": "318BzVZ8MXmFzVYfAdpiYnTa7CKG1TEGyhqPEYBHvjfKrNt7pu42yftUETuWpVeaSZuqxTQbXMhPC45KyTQWBTwp",
  "key8": "27kWxTu15W6oYSNBqteCwyX2a94KNHNtDXdWRGH9h46CZ2ZP3FPBheceAfMpcT4boxs4vFnSMYtbLxWFfZqEu7TF",
  "key9": "3Jtonj3LSHcnqCCGojwgcfnUgrti1vK3vmNZ77jenmoxcwiYmz92bKirg1sQrcTkBV7fQs6TP9iFARFnuy7AuLrD",
  "key10": "24q8S4FE7N4mKjCbS9EkVYH8XmhHekG5C2kYeemrdjh2bz2rEK3eCSjqz5KS7XSUK4WNkJvJxdmxF1fXZYu55sk2",
  "key11": "55RCUdc8kvpRBKh8sgbZPX2Kv4r1obsHDsk6v3YVYaBd6EvGaMyfeS99p6w8w2CazFLgF9YVwSCsYbU4SqCCJGd4",
  "key12": "3Uj3buC1Jt5MGuvUrZ5yATo2x2J2e1LtRvBrH1Zrg3cePT19HiKouUiHoAobaSbDBzdupQJ8mwQY5kJ77b6ymNFr",
  "key13": "3rbGMN3buvj9iCqZcXWx1urzpErfwqMoXNJJzLa9zNk6mxesnZiqtYvuntv4gtbvUhuk3KSGvsbZZeyn9xNFdDdN",
  "key14": "5jcUNLUgCrGxDH5J4rUw7L2T5Bo42kaeT3hAonC6NkdjHLfd7ShhP7jGUYJfov3jSVkzcE86BX3RN7Vfhcabjjpd",
  "key15": "5ADrhpKPcU4fSm3UXzZ2y4LSNbATY3jUr81dCwKBrpftspiaBt9LCgvgQWzBGcVasnFh3ZENRtWn34hAqrACcZFq",
  "key16": "4BS4wDAe2qXvCoyAo7ZPD5yrkPeuG5uUq8Yt2FnhX4b1Xc7oUZgLNZvYftaF38ZPvPQcU4WtQLcNWXCFQrBybKuh",
  "key17": "2HZYJj4ccvbiqZY64LR5w3mBUmjYFF74SAsD1qrsVwBvuCQvSGdbgCAc9ySAxy7VYy7ztCARNGvVZBBa62Nsij9W",
  "key18": "32gbZ76FeDjRQuUhcKckZWQwHehHX5u4HgBzuwYygQD8V7JHpFRDH56Ru6rin26i6VyY9codrqKgBbPSow7zuwwv",
  "key19": "5UGFrNis5SdRvP1Eb9V5bNfFMeZX25exf3ETNfTETAKAVa41gwMrfM2wrmdxvQcncHRv3JP9HyRB4hYntTmtKyXK",
  "key20": "4cUqsg6zPEYHLCfCy23noa5mqseMocssRtXWQg4uPtV1e28RetpQVzzRGfhdmAJkCSTuXuPabeG2wgnXyTaaFdMq",
  "key21": "4aDgjfrxfYqfmmZhChH1FH3T182QtzbAAuobsVqstZJq2p3xUpitVk5UudQJpX9VbKunt2LRnuJyX9QeabS1i8gT",
  "key22": "2jMB2fFboma7YcZvJtXbVRdSSfgMyWmGzWDCZTLKXuhEhPZk9TNkJCNmpGTae3PM2NQ5x665mmtnbCfJzQe8B8Sq",
  "key23": "25TkKY317mjK7AKk2cmaYHrQU1Z5YgyMdLBC4gf2A2v8iU5hLNnbfivTKLXKJK1ujNSPcsQ9VEf9E5oim3nXkZq5",
  "key24": "2x5ToF6yq1cwyBEPbxQDwnYjyXxVKJhDwJnC13vHzzktvgYTMTeJUcjB5W3us71YTLUtFdyk1zERvpw52gajrbBs",
  "key25": "3d5MZsCcLgQnCQ24qq6wYXuRdS65cTkcYBDD2hyi67cQMs9i637Fy6kNsCMuj8ivyjCrXtemKkpJknbTLqZETkhg",
  "key26": "3TCMM7aCdsQZAW29pPfhKzNnZCSMNVBSTs1GPxz9pPZJuomf4WpQGSbHzffwHKE8n5v7v39mNHMhLxBhB1mZZiUm",
  "key27": "3aGTC8dDKrkAGZ6dnMZXc4eHh8F7Lc6LfvFL1G3xgQpJuiJ7TV6vTNhnBoc6CTMCV1fGo477gpjR7o4pbfW7jRxq",
  "key28": "5XTZYPHWSgGdbHq5GVCmLZgkHF3YpGw3EtU84TMgppSY4JiGQvjJxVCznXaa5Pza7L5NC2WtndE6fSVqf9nQZA3W",
  "key29": "4SvLgErvfEjFcMy5DucDvAQsGNB2mgPZJLtgSzSkn5VxnCCgmeNY5WVBQwymzf1hrk5pS7kvWbHTSJQyt4ARNJQr",
  "key30": "456Z6ptZfNJP6owZyEyXHmaTBVzkUMNcXMTyoNwhDbX8ddoU5chftXptyGiMtYNet3zFExGv46ckkoybNmcX21To",
  "key31": "2LHK1LmJUNiocy8Pkw1Zrwy7KEMxevkRrjVGicYYkkg8SrJSmorogGJMCmjHBr7M3kBQ52RhdN6vNPr5rm861vmz",
  "key32": "3i7MwRgtarN8UT8Eot3y5ox9fXLk6tnBYvMGJx5iPdvAFy2DijHiugkgmcZuJVEFskcPmteZw8YHyk2Vvpj6mjcJ",
  "key33": "yB3RPgYDFkokAsqMR8gNrqppCCPsGQCj63TwWb1DUb1RGBp3zrhcU8qsmexH7axFoeH25pjeAiPtNjUkxmp2PJs",
  "key34": "2y2DT14NNGSZZjTHiqauQm1yCVbCwb1ufzR8w3iqY3vtUuJCNz6mmkDhAQ73furRDicF7vHELgCK4uYfrgHDSgWd",
  "key35": "DNAxFYYB6QJQgQnqKL1VSj1gnaRRQ1QTMV53wg97zpuDv761j8ryAYH4ViRfZzAnuzunZiPniVd6zBQ1HUngoyd",
  "key36": "4AfgRra1dC3V9XPZLo3c4cbRWfmyCqzcMQrv73Hyn2wLWDH9yCv4CWEFCL9FHBshhCeaBNRMb31o67UTKHLre6VB",
  "key37": "2e86y75ySSe3a2psGvWdZ8Fod7wQViAzY9eNW3vk3ghfV9A862UF75Rgwxwtwft155xZ7EMbpPxGbEsTMHCCpace",
  "key38": "3oYcN2wecQM5JZsxvf2kT4un6VrLD6ixYbQZQZaHZkDbu7s1M5qmobwmmzoKE7ZDx9ykFYuRmazcKbqa5nRpZEVF"
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
