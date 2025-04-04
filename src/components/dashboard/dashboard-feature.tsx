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
    "5GpzGcibcCjDJgmQJmd3ppGXmm9FwGaF8Ty27JHganxWWNxB1g3VjmtXK8oVAPw2mNXkPH2GnPDzMJo2H2hDa67j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SLuXKM7fhgA2CZ4LPwNXW9ofGMZxUVLKzUP5wy3Yx85qTA6w3zkmqYxfxjdgyxYbmCtCqsnt5QGQD4u4adMnV48",
  "key1": "3qMze7YBuqWvfTCQpn11J2HUzZ49mVHtGzwz4n3BfoafTZ7Eq1dFZXcYyRnquHuqCXn5v6P48p3zJmC4WJNBL5kz",
  "key2": "SRjB1mijSJeWuDNRFGcmaCyUVEpYJMDqRcMzE6mXsLS1Q2myho6bqzjMThmVppSdVgDiLMBbp5LHkK4Bwq3bWSN",
  "key3": "494xPtD9RBV4B82cn3QWQsT5XfzbzdBLbHkxQnKUrGxVV2kxuMmoybj4xKXkzMu5QnwyUBm1wng5ivWRD9xDnJfm",
  "key4": "ZE9xzFhamYxVhDRrgvAYGLY7FzG4Z5rrJ5KzP3jRfAaRgubzXUbn6TwJZs4ThXgv6XtNsKRZ39u9KseEjTihbVC",
  "key5": "2hyxKGQPqvo3qLji9Dy9SV31bLRf3NE6qowt3mh1te6CEMYQxzJGPbjw4ra3MazKypMfYFHX8qH2Qr6XuMKr1hrw",
  "key6": "F4gw5V5WkpcLus3WC1hn1fmJqq6oKdRzQGLM6zMkyAFZPoTuu37hfJ2zhbgWt7YFj6dnZ6xyPxyd9A2E3Sjxkaa",
  "key7": "4Asst3BJcUt6txqPY5P1kWh7kwQvoXLzP5F8fRm149PPR5kAu5SKqRpta6aQ5fVJQ55rZoxfouZSKzGzjJ5u3BRd",
  "key8": "21vrnDtfhkK4U3d7miAWDv37ThwjN7Ja8TcbPku2pYMBt7mdhb1YSndmvcfTm5zR8g4SnnbpVj92LCTmR48zvLwg",
  "key9": "337pi5DJYRPVnfQgdV8Z3NzAUguXmct1qoeUMdfFv15GqEunE2ZGzCAqCrm6c38eGH47PcWzRPwRaP7txvcSaG49",
  "key10": "QPb4hfQ97J98WczHKB8RVvqnVoDUvtbc5Hn6xKwPoPcFsthoaKjcUAttcpYvTEF5WHV8UpYdKy9hF3zcjYGHkc1",
  "key11": "3Wi3dxgUVWRANg2ZitA44QAWouHv6q2AgX9bJYYYANg1sVqtpeF6cZYtromwHMHyM6CifXuNQiKmNwoHxuoWNP4Q",
  "key12": "4UiKhWXNu7TqqtcLNsAHi5MQ4Ynniqq6nM7SoFgJqRUqy3qJWiuv46VBhQ8eYdNdiCToqp91tbHbpz7nxMRaLDTS",
  "key13": "3ooRy6JhemxRLVs99g1mmikqnkgKdM7f1x7VnaQ63D5y6AaNfM9WD7MoouYKnnQR6SbuVAGqyrik4iDt2s4e9s7u",
  "key14": "298sQSrv6b1AbtBvk4rr2NbKe5zKSEfgDfNz8LYvQ9K2JpkQL3kf5kRia6WSvkPDuwarxB5mdCq9NAgY39TC5SJ8",
  "key15": "2d4yUp7jm4xtyjSzcQkhjj3FQgXzprPkfhpDWLSMY4UfA4767ertMkaCVvtZQhZyjwf8ro1WwJk6Fq6nwDhTNy7c",
  "key16": "61AMXj7PWLgVZD5rPR7jHLh4JpwW7RJxPoR4nsfAGYUcBfS6f74ZQ1RgSP68JCSu6U3Rrh36C876vxHvHWXqorWU",
  "key17": "5V7XeYZ3nPWHiQPamgtULbsqKWFCXLqprPYvWunampzb2cniMagNMZcTH7FQVBjWiMAkXRCtSSBG94rLjKZ79iWc",
  "key18": "4ViR8Wat6o1USfZc1PnRBuEagEpiFgibEprAK46KThCBSFNi2kMj55Y817MkQ8v2FheqUscFQKsGF4ifEfsT2Tfi",
  "key19": "voyBZS7cUSJA9tsM3dU287NjJrkLQDrwbz5HgaaL6EhiF4yko3zJQzNR93iX9uZJgs2FwM2hKTRk24K796Gb84F",
  "key20": "eFSrM2iCYMejjDmEUdPy76yhCeaupnRWoH1dewHeN6qSTDDphdtcvdAs4sPGUqw5HRguwQ78PFZe8enTzYFPFZC",
  "key21": "2qDv4BA1qUjmD66z7Ynau8hA8khV7T7Vkb6eJcBimmLvnLMRfwgCoTZGSJKCLFK9y6NBpAqaajV3b1Avpqhjq6tJ",
  "key22": "4cRFi6FJuA9dqgERiGrnFXRe3aDrz5gnEcsFz15zzMJrQmVyPXZeXzu2gcGkXx9z43EdNv7XaWYxMcUyc4JvjDot",
  "key23": "4XfAoNDGJ3bmZS2aC41R1qzeti2qgm8QpR13KxhJTHoHa5chB7Hjtt7qckYZf8sZgd45FLJotV1ak2huUJnYXipx",
  "key24": "3oBRuF9XmHNg12WGneFrh8KQqVFG2QkmeKzRv4mdemTSTpizFxoujaF9ijERMwLnVjqtdMqnngZis7moNKDqfSmZ",
  "key25": "4VeY4ToXL6sFChC39aRzbZ5s71BmUo44MdSgMcgYnV28uzyghTGSJJc9qfttV44ihvMM9dHZoxUjhCGBHMXu1xu2",
  "key26": "4YZygscUYMKZozQaCkSQZit7CJ4RJq5SiRFLWyzf8R5La4kZiRBq63fLzQim9DMVkAXEZARvHF2UbTLqQFeuCibi",
  "key27": "3w2WVEbcL2gEUC4jS93FCAdKze8TFEGnWAjri4itw631ba3shU3NAGYiQnWozMaWkosSb9oseTTLtLArUqaYL5DK",
  "key28": "2y3TpyP7zp7VJ14jJ5WyTHoaqGMKEtc6af2KhVZQ2MqZ1Nrg8CuAXmUjsiSHGM8tPKK7BTTjMajh8Zsy6GumvMVp",
  "key29": "5S7Tu25TGzacN2cs8fW2D1nwDTop5kvQTDq23C3JwWrzzetbWQqa5269NeVTKSUCHGA6ppcsXGAbAxuABLMxhK3h",
  "key30": "5BtKBqqJN8Kx2Jg2u1F433HgfW5fZenV8D8vsdKrDdbMC1u6xdTU1uuFNoQA1kHPumANrUcaoV1PdFiRYJZkNNyy",
  "key31": "5VUH3e8YX1Un6hW1VMPiLstrtbJmxKSmGjtGq3yywwUFDzsvhMoBmC3gdZw3KBgQvqZvJzyTCmXQJv4stCy33Qnb",
  "key32": "3cP8MzEdkiuK8ZXBUmguJCkLKp2aP3sMynhjJQBuobJvkaA2bubC7V6RJWMfzmP9zBzKbin1v8dSipyvXCjoeVMk",
  "key33": "vjH21W8idDnU5CT5crgLJdHX8ZgpTXpYZffgX7SGQhKVD9L8foro4gH5VM4bhG7dLQ376edfopmr2BehNWXTVKp",
  "key34": "5b1wFd1Nbk9JCQWc8CjyzMJvpTQVa1rB4QYEmQc6tUSN7JPCx1EeiiT1GiHNmzZHyZYzBuANjHQ8Qu1vuwymRFbw",
  "key35": "4zocmBPjkArBxh9XynruWd38wa8V8EAjNJ3BUupWHpxnB58zoMs5WXjdpR2dn7D2h5ZHZZGGs1k8CXnauEiWgb7H",
  "key36": "5rvACYY21SLw8zNS3wMs1iETMCR4Zv3hDxtJYMsPyJkjfMeFE3J6owVfG2V3wwyS6R76916EaoWSM2T5wyoiwHYE",
  "key37": "SBPJRe5wGgp8xmNNZM1rDTNWj3kv41UKWRbhoN3NJHmeadBVVuEzBmpC9KC1vpUkpiZ1s6QfAmpJoyDedmxoJsB",
  "key38": "61i4dVK7RybZYpWBCUYc28Q5uB5Y12tC7e3dFouyiqzvZTeNvizPGvqf6aHsgkPsHYbokNjcsHHd4BEPcYCChXyQ",
  "key39": "58WLyJDDSB9jB6A766qTJhj2VavGayKCyowhzT5CLCtNiVVxdfoN9xE1o94K7B1GuQD6KcNd695eJKwnT3mUtGt9"
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
