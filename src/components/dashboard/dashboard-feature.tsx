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
    "w5L6NjmUpfBon6bHdh8hXUL4P5m4zePF6VFPw4PTyqEjXNksDY5Sy5HhPjoAdGMzQRKrwPtXWP5sY3fWyjxP7p2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uHWGjCRahXUCL2kZ29ooMFY38pVnJ4tjtQ3keySGRX5iBjAqwJvNUEuHBm7bG33AtgPgzWmSkuVbqR74T9edTPf",
  "key1": "23zN77TzCPZab6G7j53TaLxzfxKfhBrn9nygjxXSRgGe9ggnTbSQsSMBgFpQPxpNciVxHej4HKdH2zsVH8qCiSob",
  "key2": "5xpYRKRazojnEQ9xJmbAibwojDhpQVUKY5piATfF55fBJpjDmbG91TkMsKEzJZvh7uE7gm4LGgeV8r2cjjzbY32D",
  "key3": "64vqCRfawZ5UZotgsTUq2F55ncV2goxAMbGfV86WbrLbcVP7XJUpyWYxqEHYVVLzXRa2W6hEYTKQm5Jj9i3DHcxi",
  "key4": "5pQ9ZufByhEUqxDdzP13XqjiKuXEWfwxZWufw7dab2ZT8UDyZrdPdGVxjUave6HW1tRYfUPaRrYwoqWKcr59sKHY",
  "key5": "p6UPywpou3RtckLgmEFJtbPhiGvyatm26oj5RoZ6848kwaQnQkF7TKNV8b5pZ6SCnFj2v7arLM9b9KyDgyexzuB",
  "key6": "52DffRfNu2rvAQ5tYA7TLQms9YotXajfVL8ekRJ4NQLgzssFWUVucKaQKxEskxw1LkVuaxXG6ivSzPqvjMWgQ84F",
  "key7": "2PS2CjRHsnVZ6opMWsM8rBEuFkT19yFN7N2C2BvAfFxQoYitiwidoJzeYCiUrmTeVVS2CjQcJR8rsY7cNHECMGnL",
  "key8": "4zxbgZsbicosLJfAs83EcXxVZSjijnFdM6q8C4P2xK5BvRTTtVArVLHNRh7XgFCXcBAkQ1tdaS8hEBp1TxbqPE6H",
  "key9": "EmkhPgjEuwf2ogmijsBnG3Y6AuKQDdsb3twYy9cRVQpQhpg8csnrtwj5tfW1UXdadEP1oZSykLVXsHwZUKXijEc",
  "key10": "3SJvwyCtfaZ3biASPjDxign6yyQdJBgbbRaX3kpc5zeFhNpgw5hfJv5HppkoPXjtR8adnF4NetC56ro8bKPBsGB4",
  "key11": "4g9nZKGu1GPrpXghRByLjWVgoo1jdj2nP26du9ZZ7VGYwSLruSuAE3TAKhBKtS5JJoKwL6bGXQawAmt2ZXHYB3S4",
  "key12": "y1s5ZFaEWT4aT8kgfrJtLqfnerSZeyLkeeEFUV5A7Wq8embkpTaXdKfB1Pn3L6ZNNXYgj3mRV9DgyfhJUdQaBHG",
  "key13": "5sB3W4gS39jkTveKZjcrz41YkLXz9rNnxfLtK75WUVYkRRFuSFdLRGDUuEMxnUH7S82EhgM6i4hAn8t6pkWRVKGh",
  "key14": "8bRR3S6bXinx1xV3KqFLg1AfvaW8sv76e5Xi9LXGsb2nXnmGMDwCij7TLQAPUQadZ5jtLhYS9JvcKwB2Q1HVKBK",
  "key15": "C94icYjyzjso6SSDhUcDpgVMA71TDub6Fy4YDBP81VYZ76pMuB1TV29jJ1r1mFahyyUmg3PRNXYotgot1m9UDzq",
  "key16": "pP6nC7SoDQwxzSEwQeRPCE9umzP6EkJeAqR26Xy7vApfWjRn6YZrmB1QcchuW5oq5hvzexNicrLq5kPC6JHfHoi",
  "key17": "5G7V8rjHT7fHzaN99dJHtwkCnaHXTCK1oGk3EENi1dkdJ5DC9ym3jkngRqKWh8m4zspEXFYJ9kLEjBZ6bdRis3Ri",
  "key18": "619LfSqPeiXoDSg2ZHdmhU2a7p5HzB8psJxzesUd8tBZhARjzUkLwZngPNYr2Ls9mhgMw1T3x15yiNCCEYhwvpaJ",
  "key19": "c2neJaBGPE9JADfsXuXRhFqAzZVJ3pAHohG2iKnW4KXiFp5q2kEnJWtfJt9U7S5whhppHQWKkeEfo6tQjh35wVs",
  "key20": "3JKL2e7hL8ponZsQ2UREN9ptfBMFA6TCHueu3BY4H8MwBXDWEsV1BB7pp5ydMUXYdGbJPw4uMwSB6MCm252kvcRZ",
  "key21": "2E2fiuxAF6UBr3fzE8mG91REZvrjz1zLkhSqug1FXRBLsniqA9GAKi5cvGyvmt9gzCNNThLq9zbee7suuKZBVNEA",
  "key22": "3oD4DDwsaJe2dkzjFHBfXKKj7yLQbXuvKKwfpkb3NBXRWQWfTfqnyq11J6riYn5qBrvkHoQiZcMEHmvjveyY3EXc",
  "key23": "5qz7FWWmyKRYZdXtxCo43pPRJt5Ddj258BkQQw6xm8ANVcTqqqY4kbVB7w6q7ai1DEy5kYyGnjysJvLK9gKpAXwV",
  "key24": "51Y3mK3yFYGmfgkqb3jsT3hhNLCgYcXyCDScUyfBoqebVbSSr5wTVu9dpGdYs5BKNVxPtBaoQ6gvNrP3Axrgje3W",
  "key25": "2APFTNMeQvoDgXsJzo8J696DFsBQrHJNeaYAxeb6zQZxJck3hFTfLFHgD9FMh4FJiNRyjP2Mts9Mg9gcZFVTUQuR",
  "key26": "5qmnFr5MhCynMWH3RBRnBHRcVStnuewAaw3CmZwvg6nmfqCpuSGXJXZsND219t2YJWLUBQBTCne3B6fi87NCM3pm"
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
