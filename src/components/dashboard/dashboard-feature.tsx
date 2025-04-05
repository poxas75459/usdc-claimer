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
    "4HRTYCGx3wwAYzKMK6r4SKfdxUNU6TNx1s1zwvXGmHA5wuCT3y16eoDjp2oBJLxBuR9hvJF6XD4c3WnS1dXpimX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44MUo5LR86tkd2dfnQ9YyBURDSj1mPyCaC7TApxyDdQwJcoEUL1reGfEW8js8LAETTicfi5T4mEqYvLKtriMeJsq",
  "key1": "2okyGYriqk73BLrRYBY4sKr4HPixcL16BZ3AncY4ezHWV43vnN3qhQ7xq6zPGtouZdHnEesKYfZzJPAim3LpAmsD",
  "key2": "5tQ94zM9mGT7bUsdtKUMiqbStErq2mXa5KkewVPNb1oyx6A77wTEfjMzUjepFD2BjoAj7kVzbX5mrk9AAcAYDUr6",
  "key3": "3zzaPW2YTgZNTfs1o1XX7muXG2kFvX89fr8N1EbugjkiChWE1UeY6VrenBvDC5dfTGrTqvyMumZJq1nfhwvy4ucn",
  "key4": "5in15WxJyShARJdY1JhmSYrEJpzJtcFhTyEeQpkKhBMXFJ1bjc8aVdXxTYqi9K2BNM2zmU61j5EEJMhoujBz9z2D",
  "key5": "4MtVi3x1cJRof1nuyXNzqVyRjY6S8yoSwAdWSfJYojFpiTrwvmiSV85NCZmh9GqpNn5UN8atujbhQLDABtuQjJFQ",
  "key6": "67MdMEiUc5gd88D12aKszpgmYTMY9e2JgTyuWVnWzS59FkDJQy2esHAocCKXRAmsn9ar1oMoP7vRnKoug5n1oPW8",
  "key7": "3qCJrHd2wxSAkq7Mne5vGc7FYHubZrJvJuYmuWPiFrnTmTk2t9cX5JJsWWeS1uohyRPcQswmZNZjz7mNGfdTmuUm",
  "key8": "266xk6YDw5xqBauXfLG3tikFgWKm5ZRymYS5WgcESBYsVWibMgZh7TotTtFhJ8nGeq9ty5E2SWH2bKUJG245Npam",
  "key9": "3gBPB7D8RJmbbQ5caQxzuNBhXww5ZvSKrsxS5tVNaKZNw3yEo97wkeCcRcdgiYhB8WnEi2qF3spBpLqrNTtTAQWU",
  "key10": "4fLSuMeR6WBP1Uz1QdtBeSwSWGXighajcMMxUGNLDcHgZCxmVRnogvQSWt2bpT8VjwMmhMae9tv79Es2bfsdxZax",
  "key11": "388LqxTumpDGP2srZ8WT9oYjzQPV6wXrUjeR6q4FYpa4ij6o3rNx8GzzBEE6NXt8GfyRv7yqLXEXr8wPN7hbvW32",
  "key12": "33cLTm739k8W9RNkj22tckfKW8pnbM785764NxT5HQpjUQjE1NrcLr66SZFe8GkKL9hqLvjr1TRLLXZHznDpPeUC",
  "key13": "5Hxc4SK7g7bLw89NynuRekrHwrjFhrnXSdDXXTg36PtwZLHVULdajYksCdSj5AyGa8jJ41kzusAZPM7sriqevww2",
  "key14": "5h6j5jVSB7wM5d8cuX2PUMqXsSjZm2bZStBBbXbDAfTx9QQswHTs675zCAn3QC6BDjPjZyXm2xoQyHVs7EMbcnuc",
  "key15": "585Dfux2ziwQNNyBdzAZXPqf21Ffts6ynxiuEv5uAnY56Y4JodXzkZwNYHvvPixC82fyU4ygbvMM8vtxKspGrwst",
  "key16": "4r3i2Saz4yFPVWoaRh2Tg7nqYCWKZ1ZZJhtxo7yfT9zvQ4fihcT2rQ7F2yQn7QSk2sr6NANQRQmJcujJjXoDuDTF",
  "key17": "ydMJHpBhBTe32Lpcne62VhsDqRcDQiT6McgbVHqcJ5H7XzuQTPn9bBHkkWRB3UtX8qnfEu37bevS9Zw955cgrsK",
  "key18": "3Y91eCEzT8iN1BTPDf1SuGhf33T78ur92TUGpBcMoJr23X3wFQe3gYBhBaTa6TYJV9UdxVwrcg3TnVkWGUe1JY16",
  "key19": "2NBGTKHJwJ6hyfeyg7eCN5TTpeEv8EVeERHQV2ZwmE36jYrCsNoDRjFp2AnuTbb6UaPYq76CBMQH7yBku5jXiFp6",
  "key20": "5bnkF9S81AxjmCu4XiiiYJbP1V4WkKQ87iB9e3LZsPifsRBpN5x4h1KCgCKC7KJGvfC7xdwUDCbBdrJFGYR3TMx5",
  "key21": "47TfMa2QURQR972YcQKseCUeEKgurA8L3TddKVdfY5YFr1W3HR5AGMVk59Rop3RAKatxN3f4rgseNhKSMzx4Nou1",
  "key22": "5vS528xuqUsyersR2q7jxM6SFvVAGG9iJLyjrNv9j4LfujuRGVJroXkkYbUhnhSVDbdu2N4bEMiseo7Tv1YJghvh",
  "key23": "4spP5VXNCW6SUEwCDHg2u55CDcd9F3TbwrQagNrBk5Xafxd7cyTuhydyTKyjjzo8MpmZXGCUXGLrwm9o4CJf9tZs",
  "key24": "EXmh2khowsqiU6ouXKD8961b3PaB5zqbVpcp3SKhhfKF6NXKxLHUn5ddaLnLe62tUVNXkghS8YtwpYU18Ku8rm9",
  "key25": "5FeDGrgebccpGLcbGK8zrLp2tRfMh94q3kBXEB4YcXrVTgb3Ar4VGWG2VxnGr94kV8Lr29wK8JxiQXThJvUPc8CY",
  "key26": "3gdrg2tuiuEUuJFGNKiHet9YmveDLgdD9ZxWEkeiLZF8iiGTeXFwjV87j6xkxJfdLTghpFzg49pReH1SbkWiWLin",
  "key27": "3GS33noeQyr5bD1G51x3r48kgLPD3sYzNbFZGo1AudcHBj8dh4hWhnaqZDPCjpAAsAkQ9DWRzesLqNQbQ2jVSysc",
  "key28": "uV5pjQurjJ6q5yRAsgzvWzxeaH847gH7z361tVmc5fu1kWUqy3Lk4EGCHCjWHMdgvjkueVrQzYPYcJSFod6SnPm",
  "key29": "4xV16uoBXXANTcUp49GgfqEZkCMHsDZvvT6fHjkBJmvxqQUs2oXWDrCxwMjD9dYPEjZsfBVzRhtSgaMrc1gkGFad",
  "key30": "3Q9FLEFbvvHjXKnBq7fH61RYhKhigLp9YtV7yeS5E3UNj32o49GhTUcEM8WKGLXVxeccxLGmquwH28PkMDzb9sqc",
  "key31": "5FV8uaEbcZsNiq5FLvVzK2zPHQu64UHe34DsToCSzZiF9vuna6CSHju687iwuuK67K6Nu6qqarCcQ91ztsddQaXp",
  "key32": "4sy9PWpWst6LMkMsuKDdJ2sLr2HKPiwssymq4fNgEP8wxuhWgFzYLtHvTr3nUL4HkVd3cNW53iqqNZFLdhjVw2H6",
  "key33": "5nXpurzcYFq62FEtBF2ZdPGCN3VSuT85sJXZv3DSYgkwZx1VkNXH6c9AYc2p42cpQV79Dx2UjZ3js91Rcbnoj19a",
  "key34": "23RyDrSf7a4h24fBGXf71C9efn5ui16NN9t2WsWHbe9hiT2vpiZaG5bf2uw4THPpiq4ZnHWDxK6XzVEYfvdTEmDj",
  "key35": "4VGvyeMX2FaREp5rTDaievbrRM4g2CAR5GXiiZT5qCitipc4aoYCuwyFWCV6QRJZZGcJWcgcYk6quJokxAkwp3KL",
  "key36": "4TxdSVPAFYPbySUrHRTFzbzUApsJaAHPJgmtYqv7n24nBRsNPNDCAsj1h5yMRmk2kXmJD1QBV2ekrwC4F5BTvKGY",
  "key37": "2xbQD3E1ujUFyKkh8v6czuovsidXYGpbeCUc41jVDwrq1BJ2cm5pcZXinwwwkf2cdMBsxBdz7wPTsgrBbdmPeiTX",
  "key38": "4Wvaofs3aTsvBqwVAiBaG7cgr2Wk7kSo9gDJrwvBUj358HmW95yDUn5nDrcCPSy9EpkKYDxyEng9QkcgSXtLVXae",
  "key39": "3G7S2rJPT98CYoDzVswDXkArUYDZabxZVmG3qEVU6yFMePJPYFc3fFMXjHMNVK1sLchBtf4wxWrMMmQ35zPSJAtA",
  "key40": "3Kyh9x7zi53hRsHhEogBUjN2fszkj3dhWA9rpsvqUYdjyqypXEXioDD5bTkvBXnoErd3ux7LL68wRjBxfKz2n7Gi"
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
