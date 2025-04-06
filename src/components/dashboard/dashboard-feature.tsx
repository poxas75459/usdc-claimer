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
    "4T9Aive8VFFCqMFX3UmfnXPgezGjMBWzvvJp2F369B9iKY8d3px1tJY6GK6JTVojG3xmrR4Zaq1eGQFE1k9Q2aKf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iT2uZg2jtnNGkC2ijEMnNH3kp1GmNSG3trpftsEY5HJQeb23RY1jRwaFv7j2yo7FBPQCFBRwcPtErcVmSkRcFtw",
  "key1": "2dafDARVtXxppak12ZFPAX3irMJHywziacw3TUf415AbJfvv7HLeTYG9kP8wWfoNLmfboYKXUb6ZiBgYm2n18ug8",
  "key2": "5SJdNx8V1XTPPQUAtm34JAsbjrNUCA8n4cPWx9VpW2odT5zdQYY5bwpraPKom268KKDW178WvorHR1a4rParVy5a",
  "key3": "2mgbmDpEZCPn7q8acZf9RyrK1DZnrR8amxULaySZijV7DxSqtHqvu4GUCswEWdr386eSuTWwkKPGqpSwTFsdYPSS",
  "key4": "7bX7KsbgnmfxUtLxhDXcL1MooGaaydb2qdgnoyz6xYvUgXxTV9VZrtK4dSei7pkpChnYyrufuzor2eWHagGXEVU",
  "key5": "2HpB4HrRKndWH2EYFKdFjSLxYQyKseeWm1YXBb4RATNSeH92YD7qd2pMDHvo7r3kX1T7gMaRoQ9G8yUg2DSV8NqR",
  "key6": "2cFxTrdcZa3URmPU3cBn3ea8LPR5Ygc8i2VQgNt5s7cBpfG35KsCrhBQGNTityBZmM3RSZkscDw9SjCq5RgJbtdk",
  "key7": "26qJJCm6XpS5UYKTa9YFYfBm1eYb1V2tGQJrrTSoLXvqqL52XYy66QsqQh5VsxS8RXRUZA4dh7Uv4FvaGRra1f8k",
  "key8": "4dcq3FPRiEdH3zGx89ZdxxWNs6VyKFMPXFhj8JY9GpPtBTBo2eMuseYHK3cKY3o5BoxQ6zrikE8sbPrYPpU3MG1h",
  "key9": "5bGgHeRG5wgpZ8xQFnezpbM4xrcSknUGoKEXCbUzmdbfzCMFb8vimGJN5RAuo8yGmfdkvDcfRikTkDWFpvJrHDm4",
  "key10": "2NqDQimvnVmDcFiQYxRFD3JJ2ywL21ZcXrCVbmBqCMbxmbYUfLjyfVEjYDPzgWDwhYTh1Fa3yDf3ZZ9cDvLmpoKv",
  "key11": "5yACWK4zjYvxGfW8K4hjbvYtuqVEHn5gXeruDMqyh7RJdNhjP4t3e7r2LN3cMnB63DpQMJEmoijT48PKJWin3vvH",
  "key12": "3tRBTjotDr8Y4pEUEGCg9Q67AxLyvEhrtS8tnf9wvJJjgcUypoTKxVTnJjJ9dSjXtRRgWPrEfSgbDgWueshfS2VA",
  "key13": "3BUhcnzKyuNLwq1yz9Wd98kxHZCKDc66267tK7Nv6hoWs3fdPrAYQjd72tjZiNfjqfbTqcMkRhMoNLBuRdQ5MFe4",
  "key14": "2nzy572VFsmyEY4RTELzGJ8aJDnZfgVg5n1zVyijRUmpKTEdVZC5sATMcFpHnSHbEZBbN4X44s4t31XQTKKGmjtD",
  "key15": "9zVS8SqnqgzxJZJiv2b8fZDthXfytoYPFU7e5eW1aqtxS3RofaJWeyrFGBMyeayQHYoga9JPKjck4pfBr2PsTPH",
  "key16": "5PJn6a9UTaPsUVrnnrhJn7bPpDvSsLn8ALdqZ7iBVxZgMaz9rbNLkanKACtu859CgG8qSfAqmckMnd9RV92L7Tkr",
  "key17": "4gvkjXreTULEHF7noZW5MovrrwP3ZgRReHjZfYRWJFW4ccmpn85CCWoNz8RNTsDELAAUFTis3qc9QoVvwPV6uKNp",
  "key18": "3TjKZ6WBsvLPAkhbbjdfP4U44Dqfzayjv3mwcYUG4NDkEdg7cDm7RmAjjURJBBVhqpdQUAiPVfYKvZfmUcho5LzT",
  "key19": "3gF2nRc1wNPzmgy15uMNQwB6xex3aSNSAfgfWTZPjC4GxfnDP1uhd1LVk78ogES7go1KsQGKH75JTNs5DAWvW1Dt",
  "key20": "5Eo4aMZFFvPo9Z6dw1WbTnPr6MNHTRG5GayJBiYiEuX4p1sMVMLVjo2RUiRk3v4q8haNcuzaFZq9qJwiMBLLEy3z",
  "key21": "3Koegr6FgzhQMpqd2KijR94RDdc9MW39ykuZHjdHHMphqKyBx81mxSaTJ6NUw3BENJAe8pM9AM6uEGhVYP5jNgoD",
  "key22": "G1CMHVFPLS6fVxCPa24vPvQKDrgrwvKFcyWtknQ6P9nz2qHUDLsqbxEvvH6wz86xN4KLPTq7dnRR39had36v4dq",
  "key23": "5YTWKQ2UDxzhsiXWpQLBqmso8gmsau5x2KtNKeRppHCywwkqqcK1XafhWuodNzDLiKBU5SZanrLP1DaU866ynY4Q",
  "key24": "5RbU5148aKyA2aVsiqbXtfwi3TgVvp74Hv3rTUER3g5Yk5rBbRcPJNESAC87rELVWm9AQx6sJtoi889p2XrDvNmK",
  "key25": "5K77LgZvbsuXE84u8s9SB1mYWbzwoA7LV9Ac9HGp1uqc67airmwLDfbjt5eJcC3XT9MZsexdN4N6R7XAEjNDEkVq",
  "key26": "2PPB3c69xpUWpNB8xtVkcYdRfRwnAtaEyzvV9b4Sa7wzeQNYhPZzixtBncs3YewXPH6JbDMsGjSd1oiktgp5wjmb",
  "key27": "iyiptbKYYNMsKzsqDakErYEjBoLgK9aSCrTH2jiWEB39gMon73Ju3goTRTPoQKwSP4tibLxocFsvj2bZb1Hybv7"
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
