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
    "5M4oYwhx9zZFiwBMfG5qzeHxSExKigtiEvYYNpPGcm5LQ89AMa4rFf8pomm5f4hZreehtxWkYbwXejxrJLxzV5B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mepuZfyFANujCgmxV3viuEzonoMZ91AmBAqsGgbknDNXzYrbE9ZVBGUBS9iGBThPKMxYYhb8oHCeVrEp6d8auN3",
  "key1": "rhKBQzjGiYLBDXW8q6bxsXCTotsZjJ5CqGoQiSVkSYa5iaPHuBP3mcpr8waSBn1UcC4cfYpob9dPWJ31csjrVzV",
  "key2": "3is8u4hFyQbmFjEsuyWkVZYqhgoeUy7fUHUzMPsYBRCaBQNfY14jw6ziuvSMNJoje8qTbp9fA3C6trEMSToR5zZp",
  "key3": "5ixCwjDdjGmqGvZ6uR7cP1qQdH6MN1UbjxB7eL5qzzFdmhJ9qDK6qWXZDQya2zM8ttfzhxQLMCCjKipvrTyzQp55",
  "key4": "2iXTSHq9XhMV5b2VXj9WtHUPbsXrihKYCbz5FpmeZuPNba9xVMkfQCG8GZutonsCdMeDf6et8zL3NqK5S5VE7tyn",
  "key5": "qEEkvZckbLunZxQKQWTyWpHc4WAgbY3BLp9wnyxT3LTpibJTjhzhqNhyUm11jKQo8uULYRQXbdoLDwp86AJC1mQ",
  "key6": "2eWVkWMK99szkZocq8SdPfJH45oZYiekH4eHzESkxmqHJ48nrNmVJ2KmVftihNXcUsQvENDToFjFiAkhhUwX5Not",
  "key7": "5ggJZKLV3H53KzcRaNWSKkvwgTfVWEhjzff6NSJvXPcMAkWReMgxvvjGkSFxmdgAB6uNEFPZpDFutgqQzJA9G8yk",
  "key8": "2vxSJdgQ78LL5GszQXFvSzYU1ptVmEvWxE22FuHLorpa7XSSDfJKoUHqug6RCiQyDSKrgbjmtw6XA5tZRB6A1tZh",
  "key9": "3Hu4UMtW4PwvRUiCSZ81Yrr26KnaNjvvdtuWKrPTkprufTH5CpxRe9ULvpaZkGuUTtdVfRdpjb98uFz3E2Vk8nUt",
  "key10": "4ydx18KPQenxqn47v6Tukh8mwn11tyGAHKeoQvHuZ8TW21QT1Y8YqSPRuY7yqAUqr2gGBavxtbQ5XD98z9xta5A4",
  "key11": "3Vu3xFpiGgcbPEHfTaFzPTE5QjnkXdFTz7jK1uqQJQNCkiYQ9fDGhAYVpwo75g7u4zNAXYxQNy9X84PNrkxn7ZFx",
  "key12": "5xTSXecziXm1sLr7wWdanRnqkXZjjztstKCkGEdC2ZbHirj8J71EzQ6V3v8dbyHpV1mebqFQHJ2Gj8jAwqHuPJKq",
  "key13": "3PfJWx4AVXdzXBkUfX14h8FXH22Ncy2RJjemBXG1XrVDepHsXkyaBmS1Mp8Ur7srVvXGTE8jkrgqNyRwSz3pg4nv",
  "key14": "3LAUgKnJzMPNJPmd9gx7bnwxmcwxi7sHur6U5L5XhrXGF79HwnrQ2spX2RAcGXQ2useN3oP6qYyg7YGHCv9ojW35",
  "key15": "5Z2P6tXLHgJbUxhtZ3rhenGDfCWpeTP8w5WFhRRh6oRBrjFuydY3RmKQDJ1Q1zRNYt77dC9wfZDNMeG2dp5YqoVT",
  "key16": "37fqjLVg6r2vf9boC3gcDRFThGPtFoDe1SaQc8S4FVvB2aLaLqCspFw8ohtzPUg3wtXWzczXWJoLybq9vzXESJaG",
  "key17": "5yf6YRbyCx7wXpof8Zqw4ETcJ82vH6BvbMqi9jVQRdPDymHJVENEcg7rWzFNXinpoNLzNV79gzQUtSY5V3wdMb7v",
  "key18": "2KFAvsw7nTS6fauLWr6xwwQPVwGCvdRsH6fxkrCxAYvZttjowC9Bt6Lwpd5y8LBFBZB5zDrucNF4nnkhBwbGje2E",
  "key19": "21SwYgs5pFUwyfspXp31emMQZKPGvC87Sxz3CGVGua35518kitcUvXsZsVkFdN8asCEiCEnrsuz8v2RgBYRe9kL7",
  "key20": "2ZzLyRxUk4pfzjJURT1ya4LpYtukGZY1QrxPuCVzxH8Af2Q7RpUy35WcTZubU9zSdQ1Wabf9LE7o7JWp5xQu2gT7",
  "key21": "5fPz4iuaG2EoqkGXaKuN5XsadLcFfRGFHg7G1h46KAPUcck9SmdbH5VWuT8KFjp3h19EiZFw3c8oCjbHHVLZTBUM",
  "key22": "3pzwfq3bRRiLS4APcksAz12sjLZXT73Yo9hSgT4RSiQhfQZdRWurgqb9HqaRKpvT7F9HgJ8dS7crYP4TxpRbFuXJ",
  "key23": "5nuLxwbXDrxVgg1pLeP9MkR9wZnthwwoMfEc9en1FU9PgHvbyZtiMkraJF4NmFy2gNVE8hJAN7M1sx2jD97BUqKR",
  "key24": "3exm22Gta3m934gFAw9W7k37vbJGjcih2zau46HtaWn71fqG7AhfTUQtfUJJMX6hVp9n1rRjVrB8UTEs4oB9w5mc",
  "key25": "4V9ZCTkPaaT71YcFr8dXmkYaBrpx7REvPuA5dNsZRT4yd8tvbpsW5rCGH7wxu357kQQreerj2HR6V5swNPsiA6Cy",
  "key26": "5BHjU6r4Mmbm31Uk6uFJtQkD4bEYNMgZdeu2wCjKL5hymUAjeYvySj8fLnk8nfx41Hm1BBqRe4tXoSTaL2DYQDJA",
  "key27": "4Yq99oi5WQrMG8PAupaCBVWtttAduev97rAVYjJVhVttZxvsGxfqeoBYhJKgRHYhk75ijUPshGRUbhUMtLKcJPN8",
  "key28": "3wPowpxxsehBcydjbUcAjXUbacM5fcbUjYA8eVfFPB8aajrQ7esuXe8LBwLs2yPkTvbYzALsisWj2qznm78SSTdJ",
  "key29": "21y1EZVtJy8B61sw215ez66jdvsY6WjiZeMWmPHQjQhGwveBSMNW9hJ5oVf7osfio34t1brBFkR2oxrdBxTH3MXH"
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
