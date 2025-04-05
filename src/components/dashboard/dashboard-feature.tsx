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
    "444GcPvFpamseYfPeK9sjaaPCZs13KUMxjHrdGkvNCP1VJagwCPKuNQvY5H3zwzFKhk8R8VmWxy16C1dKqSVm4kW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KhcP7VJFgn2rZDfvXzua3xtFrq11cc4M19XdRtHnDeb2TCXoroQdXSGUSTkVNemfc4bK1aSfwkdHPGAs1C1N7p2",
  "key1": "5BQqiT2qi5agtge9qkwahvLtfKPPC8mkNHALx9fx7TfZi61Q7rnYLoS52wNezCrbzDvHKB9i9UFuXyknQUNyT4uW",
  "key2": "zMJ1i9RRHwhSM8x6zCtdf64uBxj8kkyF6Q7LWwYPeJbPFdQkauuDe9GqGntFcmbK4SRs2r5VWCvy1g4eLPvqwm5",
  "key3": "3VWztuchYe2SPuc12yJWoQPCHPDMWYW2YeFbxU8cgVWCfPYjqWD1r3Jm91aMExEcESPZ9tJuXWnUvosZacrDY3VC",
  "key4": "3AUanxCoGSv73nT3Zm4BCQo7pJeDryfTeTjWUpJTsfqSVfQ7edgXHCayHHxmcS991Xo324667ZjidXQX3mPX4En4",
  "key5": "5ugfida35kRhQwLLmRznBAR3fyBmnzJ6bQofUuy8Mu4LAHUSGK8vyeQkpS8YDstRtfMfQkZPNTFYSqpXNo2zZ4Uz",
  "key6": "JU8v6uVugN5SJbh49Pi3ib9drRFewCk3eBieKRhUibTNJ5Q1istXUpge36y1wytu5PswWzBNY6x1Fg4U75muSYR",
  "key7": "E41FumFVpEvX7iomcCwGxa8ucNxh2srXss8ceKX8B5ZJpM4Y4xixaCYgcGnqUbEwLA2Me4SkMfJ9UNqCFUQiZ3u",
  "key8": "PJbd81G78RBkGcTKLtxFejfA4bJEzLKBX2NUokxpUXFPJpCiwZZPbeN1jtfbzYF2LXj1eXwq4ccbm8MuMkWd9US",
  "key9": "2vTh33zaU5gze879mqiYRqxToxE5PWq2ETAGBvbiAbmaQ2TgkAP3KhjugzM3Jt5svyYNVbeP8jzDArdB23fsNXDn",
  "key10": "2qnKK6MN9rq6fub9Zf1nj7qCkbcj1fXaBMg28Azuhr24p5rCLXMgHotviwTJPhZYZkqZ1iuxXvbZfXkhtE5Eh81u",
  "key11": "HG2jH5fUvGWRucaUQMvU2KGk5xePHLqvSGnWfB4icGM57nrg9P5spSgBAXfFAjBrDfBUwdfzbFxerhXZF3PYjXy",
  "key12": "5bhU8fHG5sJmxdiuguHWiw4W3w4M9JByKYNtCrzqm9nCzJ54tq2pQBjzy1murvhqGkvXVDm42ugjMDZ3HNY5NHUa",
  "key13": "5k9CA6xPH7x5ACwVL74uFPdK8zumCdFLPsVb2CtqRJDtsNe267A21s2ZHhxHni9fyCdYevPp9pKLXGKuY5WyWUkc",
  "key14": "3fL3pADZwKUHHyHEUk1YFz667WRTL9kdtaQBiZTNmMXnV9kkjaCZxyd2kSxDfAiBNFWbQE362iGkSTskxLbm8HQ8",
  "key15": "4QU6CoXQdtekXwt2HvFUjGbqJ5reUkaetEVpMMJE1os91b81MC3m3w5zixSXXQ4PTpKPU8stnG1QT8F7GTkovgp8",
  "key16": "3tasg7aZtsecWe1a31Sh3MjAe2jaqFMoevxyWdGdij42wvEeqYAn8ux36PnxqpnsG6ZYRE4PSscjwQoZYELFDgWR",
  "key17": "3frWBdn8P1unFMYLVF5s9fdQp7aqKZWt3GZiwbzGxHXVubo2NiXahqNwj19CG4MvBGYApFmQhcSPza3jDDjg1PRP",
  "key18": "5XWvW2jfyfFahcUZwzBXsE26DithS6GVTy6zdtnaKFjHQnfbf8kxy9qGor6ZMsBgmztBRnTCJdE1J5KSRp8DycvQ",
  "key19": "4ka3vXcYE5y2kgmxgEkfk9P1FnheYWMcvv3rxbxbHeeM58oDCWwjZNMiCgnuwMZ2FAoeVCy3Y8Z9QcRJ6NYxnksy",
  "key20": "242YbCpfNGxfUBhs8j6S8XQokoQHRezUa9UxvwX7u39hVscUznZRQ2k8R2Z5De2XQDYLZUBNs1qnhJDQfxSyCNiC",
  "key21": "5LMYQRo9TcnKgjLGkAaLKkLegzW3Hc36Fc4tXs1dpnGEzHqvf3dRnKAtMfzoUqpoRyhHiYbmMQ5h6sp5AheFiNWg",
  "key22": "2EM3RTjK6BWULcPJx9Y5aSpaCsSYcBBtxoi2ZTNNbbRnThFBsUJq1pwBJNAbhigfHCfKdMFJoq52ExfD7PSGZAHT",
  "key23": "4G87wkZTXJeX6jS465JJyDnpiwZ2iLmHhffQNqCYeZGGSkEQwY7xzM1fxsR2iGU4hGSfp3riDByJo9nJ98wjeDxE",
  "key24": "4oYgWp8c3k7KzrRzyNoWaktzoMGEHZxr4AP78YH2VL4LVaNDpRvKJrHxFA4k26Udz2kegSe3ZMewyVTH1rz4fMTj",
  "key25": "3rm93o6CE8axPAgfYHRLyhkbp66sEs2GmYLpdrqyEoPaMdEEkHv8F1jw5yMNzjRfwhnbwvRkyNT3bsmY9ANCLscP",
  "key26": "5ZsEow9dZJsmyEiAUziEWfpzvgkgFHHPfQzMWEWB6WpxVGaBKnusjXUQKWHQNaBhiJiFv3dFin91jNfneHLW1dVu",
  "key27": "4C8eLsjFC4mJ5pAuWW696QkPrsC9ZfMJHxrhq55qWAenQF7Ha8uE9jhVmanVJnwFWbUSy7cZWyhVjsCR75M1gdzU"
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
