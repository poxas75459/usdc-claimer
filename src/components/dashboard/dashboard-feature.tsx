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
    "4cWsMFba7ZiS95RwmpG5GTrMgghk7WnBWT9sbuZyQCgdf4DmTjVMhFzkvKBQ3QDbFFvuN48vAtoRPQS7YkgShrE2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JWtQbKC5YDzypfWkGwm7L8DKXAddH8w4SWMT8Qj14V3CcuHEy8Qawz5hX3byiJAtzeE99kYxsqPcp5dfnDmwnkD",
  "key1": "4pDd52JqjoEPUtsNfCmFxxPV1HE62ovmKJv8j9xSiVcAJhYVGKhTdKdTqZDwkL5iQWQYqkdFddeidPEuJaexuXQZ",
  "key2": "LgT4EVg4z5qkjpPELYfnP9SnHBZ29gTbvmAu9i2fdNhuB8RTxea46RrFt3MwX7Gaj7vt9QqyQ1QkVt9ve72FkYX",
  "key3": "5fct79ZEwc1NPSnfsybUHsiQsVLDzdcJHeEAxWuYWjsXuRZ984XqTD2d3ruQxr9PLz3ygaK35B5BNXZs1jFACFp",
  "key4": "BAhZQZdeYha7z47HpXYDU1Rx3nP4WBJecseYa2Hej9ZwqYspZtSkk5VuMigAvJqoLByCbTnDX3eYZAg9J8ZcXQ8",
  "key5": "9dWYSgqVCkV57xq3mF6LKvxVWQHfV42QRMdPvW5aQEwjzT9To9etyqoc6Fq57M5t4y7uupmKcT3Kcjwog6GcHmY",
  "key6": "32ufRDU1p9Tz4GwjQirnJLxRZijFfmp49fXMb2dPKYpq3XwmYrFywa5C1nHmKBiMzn4i3EnY4q1EBY51TMkNhTJT",
  "key7": "3jPujN2gGaDDrQczr5ojoaMhjPE2YoptNMAENKFk3jGN3rHwcPQGCFtfBqY3HjqUx2rqDjgKNetAkrRfn74ckYj7",
  "key8": "3LrCJv1wPZXCQW54xjxe22Ky11rdPPPcmVjRQvYFN65S9GeTWZ6qvKKt5LHhMrii2aixKUeAmc5j6zHtL2tsCPZi",
  "key9": "4WtE7DjXeVjjaEw4mzMUgWiUhxeHMWxyPHbxbCCGTaCLZCSGuczWozTEFUduRV1cu8AhuoQnrumydxBSBHRHgv9C",
  "key10": "4aUFfuMmPMZwLCGhALWfXNRWotUURAvqNQVKTuxff3GaiALGgHr2KHfhYnVR8hiR3mxNVYXMAL9X5AnLX4MP8wAG",
  "key11": "2Ko14j7xNkfMChV5Vg2jeHfWf9LQx2xHH7RvYuLhKFutsyromPg2BRjBUQqHmqqsbpH2Tv2w7Qhfyurr1BbFxSvU",
  "key12": "55KTcPNH1mYcGwPNpaA7SugbwE9iPUg2BFjConAqVe2wTeEjL7p35e3H44ywKT45HeRygLmELJKCrKL4U8ixK1oQ",
  "key13": "5teKyyKYU3uDsaXKzodnQuduB7HTQaQVZgCEVbFmCdL9XmzRzcPc9NPcnj5ptBhjGjTfyFxoq9awiCAe5F8522Qn",
  "key14": "3gmjW9ErGotJ6DrUSx6tU27FKtXiQdctABRF8N9KRQThECo89QsRXEr3MxidLQcTUB6CWRBQQdaxHJCy7jHELroi",
  "key15": "4dzP9Lp3UZZjDEBFKcrjWkFr8NsHtjBHMkoagcaNe9VDC3vrSgH24nZrnS2K6YTLmg5QZT9ht1mj4Kwxp6csU8oy",
  "key16": "F29ufUn2x2s7LsWMv7eU38AfLjg2grq1AaYPeegbhQ7Jy6qU6knjakKfLQowfmcngmv8jPp9HEQDCg5WFVrbWW8",
  "key17": "5pLz2iodpKL4Rgv9KfK3btJjUsQRK1TyupiXpwZKy1FhTB4FGh7xqbPgmuCAAz2cSG529XfLpmpSJgM9Y1o6PVdg",
  "key18": "J4BSfaQrV1wfuobs7ZUvmpHWkRywHKSqq1yzVNed2w5J7Rn78PHG87DZh4WavLiynkbVqbvTwas6CjYEbGCkAGZ",
  "key19": "3te3j2Tccwt6QLNf67UfRXcjXrdwRmfn3ZNrZTfwNSoHD8JbsZ4PYmCdf3vVgy5Y3tWokcwfc4jpdqd1tuJEfdS4",
  "key20": "24yYzWrCzqJvHbqeqMnMSpuet6MjRHT2zaxy82w2dWrfrtVJbKLua24EdJmHjFiAGusLWKVaM7msF144YgNRiaoZ",
  "key21": "5gFtati9o1eH4WYLowpPB6sLBscQpDJnKx9fcdinzTb66XKXdrZDkhC6G1VxUr6KXzTkdPVw5stM1Yzp5rFeTac6",
  "key22": "TEdnox4pefR8M3VvX5qKW7CDg3iXLkE1fCXQwBMXbh5oGMVacesBPFWG6XuLnazSGfwpSmjHSC5qfJPkurPPhoH",
  "key23": "4ChHUMxNMyD8QSZTAk5PCoKm1B6YSLXCE7NNpDfBmbvGL91Pj8ACq7nsEdwfJWdVJKQFPRVirvBdcPxQDpVJ6AZq",
  "key24": "4CoUpCYzzqX2jASHtXVCqfqPc8K3ZQvxiUxBQ3jeEpYFCDrwy67S4mXJMaEv2yJxk5ExoWyb7AGhBo9h2TinvDxp",
  "key25": "63ps1rXxsrKhaqVAZ8nbP8oVSNaCrXzYWcxrb1cBurZ3usA8vRdMJr9YjCprDtEjZyS7qXs3nd3wj6CYd5wiFzdJ",
  "key26": "4tMD2yenia6a84eD4x6kwstpDPWU4wCtUU99ALjcAn6ct7Wo6JmsT8Ne3GMG8SBJkkY2ixMEEqhgVvJo1jsivw7H",
  "key27": "4LHtKdDX9juyXfSoematZ62V6gD3oYSMUKoeeHCeibUkakA5yku5hShPBQxJ2vdkzQvXSvjinin1U7meWkBhuL9w",
  "key28": "5Lz8r46kuhJVUbAnQ9DrZKo8XJangBP5eY2f6RdQ7gUEAM8pH2xPYWrGPi4E2UqtzjazELoDjUubC7jCgPdvKfTG",
  "key29": "5bjnS5VXeT7SkfEGZ7vBh6nPPf8GghXkrPh4Mav4xfiusQ9gCc5yuKVEXuEbWJj7o4sGtCGJ3ZthA3dmpxJpPuoS",
  "key30": "2LpGXhATpC1TH5MUkqwWnxTeQZxqHm61mTwzuqTts78YVKiq9RssobuV6H5QR11wCkYis6fpoReh48tdGT5t8K5n",
  "key31": "4kes1ksTeqTvttHenkgREwJcVGMsMV2ARvEvTpc6kaUhPUQh848jqFaN2F45SVsAdyWLTCw3s9Jj2Vt4nLogq88K"
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
