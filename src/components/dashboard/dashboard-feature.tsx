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
    "4yFK2TPrzY1hpberLM8sQmtJXtWHMrsqVVxeDPF7wjnoc3FyVnVN9vSWpXDV5NtKamH4cpyXK8CUgSQTKU3m3Xs4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e9ANK9MB458639wAfWU37DjUXNvWFctz9FLMG7KhWF3MWtzp6EKTEZFWfv4oR224Z7NkzBuk8bpGdYMuz2n1Ftb",
  "key1": "2WcYztNkGRtudYzEbJ2nPiuHSzeUrwRtunACNWFrLpmxYEK9JXrpW49LujMLKgZHx59MRg7iNBRTSVj7mAn6TGXK",
  "key2": "5pwWxXwraM4dz84a3boBNwuHm9tAvVoZLwm6BL3Z8jf2bqQcXa5WQFf9FDYLnAXkEfn73nWjNrF5nXtEMYouPFdX",
  "key3": "2Judzs1ok4PVtLRooiDMJZiGDkRbfPKQyJZfCEx7758oeTjCvnvuoHGT7VbXP378Py4BhDra218CSUV86ePgTVpp",
  "key4": "34axaL3zcrH7GTyHXa4MQgoFhafCcprEoona5wASVVXnUoJtofQYgTqvQTCfmdzJ4vWwgwi4PX3Yg4SJv71vL7x4",
  "key5": "BSafZhjnK62hCwuz8Z5gVqS9iEF8Lkdb4RXyEXbknnKN34mFTigGsxqEKYaeJgmpoLsBAeSq2QnRs1gvnXe5C5J",
  "key6": "62PNnZWF7XJuJxmmASrLS5nHFGFxMsTY9khE4Wxyv6konY5dEEH6dakiAehTmozE42Zn5omL31ywvBP8HKiMFNbW",
  "key7": "43MjtD78Q36aLPurTddA7NBf9rcui9bq1fS5RBmdxm5C4Uv2TQX6k3UyzVsQ9XdFMv9vRXbNuRKqZQ1Jb7qyDUyT",
  "key8": "541YJnFA6SQTVfSi8VKyu3hLyjdAibKPNkNbqnAyUBUAR3CSiRGw8WBdkGE2stN53knoaTKbDSnLq2igCnbMN7tT",
  "key9": "2YFyvJMKEkq5b2akTKqeKRtwh8yYkzd3f9MtGttK5rGo9WE8ya7fhRSrfpJdUTtszvnZ7VUXBCcAnFmVcsjnDS5U",
  "key10": "3riQf85iKEuFvnm3DwjYJR6DgQW4JXtAwSB7yQgJkBsL9ULXJU6Y5cz13iyH2g9ro7poLYr4x5gGeoAdtbo2zskD",
  "key11": "2GP4w1NXXxTYWeoVKvBjXQ8cmyxs3b2DvSGWMz9DFfNsrPhMuicBhZLwjqjvK5T7GyViJqDLodGWYAip89i6kpo4",
  "key12": "2suERA9yT8nNcY2zndqcuuLAi5p2HiyWL8tBSkJips1LUDgrt6R4QbSWWLxzY9rnmDqWpBQKNmmRrTMjpKUr3sY8",
  "key13": "7xRAE8eLGdADKZvC8LWaiF5X5wfat5AuA8jb3uSSUkgZZDMNxkbvS3YfkW3Th29RJY4bthW1WiLjaX8UEodoNr5",
  "key14": "YPjShuT8VCSst5jxkTB9dR9YJiyC762TXZq72f8PK6vsFG6qQfhgY5dB2kVoY1Aksa1w55Gz2gSWwLSLtM3iWLW",
  "key15": "HUftfLW1khMQKvT1UiHhQGLf2VaCGccS9MzQqeV1PzDjRAB4JTtK4hJ24hdiypY9DUFKdqcsqKBkihERKy8Qto9",
  "key16": "2vRxRH9QfxL2vZqc2okSrLJEow75FrNUsRbPZEhXqziAEepgXC952HkPRtAqfkXgjvZmNPbb2NCpiPvSbUoGQo2m",
  "key17": "5AtazhD2UUjper3GNH3wTzWxyTSzXGeZpWt2hbt4Mfb6gnKxW36TsZxmzx25KxTfH85y1hXS9mVfgesudujzKJs3",
  "key18": "2aUzr18UDX7YnfrcrXUhbb277KyePCaiaEKfwePNeaPp21KKVt7yL5hRcXXKrm91seAC5BsX5vf8PLpAAUES4VMu",
  "key19": "EmPDcif7J2TFyzeUzkVcGyH1h3vDiRgAMpm6TSg1AgvQqBivhe5rdYkNi4BmpTKX72SrE1zdaWVhmUeQsh9qkP7",
  "key20": "5iG95hUHi4FkDG93vuQjKEDFjo6SYkbfL6krDPpjau6pkAye1yaqbT9XqRDh7C8Lx7XGUf42xiWhRVzi2wgcn6Mg",
  "key21": "2Vw97Y2Nso4yzfeNgrsmGg4LxLkm64U57As2nxhGQ6a4VxrFM8ttijFRx2JATCKy4orZxpbaJNb6JxRsYozvo4sn",
  "key22": "57SaqDdro2pEe2j72kkjQuocHyNJmvrA3ytB9DxKd1tU7TVjVXPbdcxuf85M1tpKtW4yoBPFFNRVA38P92nfgMYP",
  "key23": "waSyTb1adgXShTTds9WPCxr5deojF2TPeY4wqKAg2hoqiP3emQvrYqMh81BQJjyedi4z213vV5S56A2fM7h48xW",
  "key24": "3hXBbSTVG8YCPasMjQEATtPpoSkDAkkJFjhWxj4qYwRGJkLfag2sNUjasJw2eGwFPpapaUDvMAGqLFk8d11zDm3g",
  "key25": "46jTL3h1oxAxEd7QTSsW3RUD8CDn36TPkodsN8SMLaKFvkXTggbfWok6nbQAYctBpxRpL3WZXun72HM4Dvq88qx4",
  "key26": "3mGG4MergU6e4Z2nARWwJf4xQZQrmcSNfSoW87GGpfQymWpLcPaK32gfTQcZseZ29wi9adfL9JWdcEw4i3x1zBia",
  "key27": "5oEZTL1jCjjivYDWPUcPKRJgAVZukFnyoBvK5aU9y9ofMSQqxzt1kzVMVHno2XNezxftJuRXnoAiXHkXL2cEtGgm",
  "key28": "hVRQKgmTuQzTc2U9JRzaRygsRipKgfzKooJWLWQxYJz3Voi5Cn94FCNdGkr2QxfvDZjdiFQCYMKX3nJhR8kHSRM",
  "key29": "66m1pDEC3LjmdZNJNTeLvH3eJaDDGjuvSKYiTi73a6UWQTqSwaiMWGgA23vnUR6nesup3kMBqgvGb17j5qVSJi8K",
  "key30": "2nnBiRJcFDobkAduG7JqBXbXCZaQP8VPCSdc3hPtfxV3KKj5jRXzxYwbQPTsyvZucMWFyew9uZVTWQbUpYXkAfp6",
  "key31": "4NZNeEUwozwVJdLGRSyPzr6hWmixpp1Lk62C9xcAU3foPKS8vbvnzVGrvZnj7aezsCHYpLMsuiYcVky5gHqhxQA4",
  "key32": "5NPhNhfj35cPdJdrqvPFB2CjvmFpxCP4HrTrep7MADnbGXggsBdA73VBiyNU6mCsdAFsgTpsr6aF7AyGqzqJco9q",
  "key33": "5FJUTPx9GhgHwqfeN4N6vcZHmD2fqHvRbZQ1NpbzqjgNQZt7pY1CzGwC6gNX3zBPJgPsrLr1mx5neQGA652teum6",
  "key34": "QxYnpvtA5Uo3VPqafmkhmWAa9bUBnBP88NBRSrFtRuJpPJiwpGMJ6GCUcB4xf2xRDrjtNiRceMCxw2bGRHfVSuB"
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
