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
    "5NkKQooWC4WUR9bKJgRa18Bp7PYnK1BGN55V1sgCnRKQ7v7YkQwV1xQHdyM2vbD4o1ANVUtBnTfnARRU7Lbqer8e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51JbPJALcW3rFLELh8f3SS136zZNo7iV1DiDMceUhYKKv14CD2NGZEpMe6xzj5htKrTBx3vMvThMc2qAJr3HF4cc",
  "key1": "3VQkoFmJGq1aEHJTW8Wxm4tkx6K5ECykzCiFgEaahKvSF5aMn2a3tBUnHFmt5zPQVFEBJgRs2SM3dtwBiBuxnivC",
  "key2": "44JM6nFucHt99V5ojndMXo7LkGD9sW8Ys7GwXzhZj6bwCCSjubjsTH5t5YkZDfgZNWP3dUtKYY68PFKvQDkYJHMQ",
  "key3": "361syF8CncCs9Eb27YbMQYWBPorajy82VoNEUV9JE9xAQvDo6pR1tY4x13K4dkU3PXGknLLak7mMffvsZa91WWVM",
  "key4": "51dgaXUdetpcAsjMRF5GVFMJt2kCurVdQQpM1yZFbkT7urUdJVV1kXESibPwP8yq9mvTiCK1Rp8pZTAhFYMC4V49",
  "key5": "4R32vPFwtQYppVx9d8V6yyMm74JmnXDFApq9eDpjVqCMNovJN7QfmL9AJkDApJCzDDr66yu9gqAjc1rRgdgXPPFB",
  "key6": "63ctMBKES6EuZ8zP3CuRbHQZsaGMQfYC3up1vqeEGmGnjwrYJcgR1dA1qLEU4GSFXXhAEuh7EQky8xcqXs8gBXJ4",
  "key7": "4XwoH6TUHp1sDcVvzm1sg68kUDxaYiJvuWZmCSGxGcXSuyxZZ5JdnXrYVeia3LZ6KbfAKJcMzpTqNQyWtj3s6dLw",
  "key8": "31p5vDizfdAwwYoDszNNjz3eAMgvaNXKTVUySxFySkNcevbEcVYhkt3bQm9yZ793Aprh17woaA1Br9hnNVnE2X7H",
  "key9": "3xZWT6FbyEY1w8DmcMHz9uFDJpmv2divUUss8DhqazsgnXEGpneTAZbURDm8VxVqVwBeAaku5zekoPYeJQJPqKkB",
  "key10": "CsBCbAfHGk1M7CfZdsyYvMXkUs7Yt1btWp377uWvtRekEwaxsvW8eWs363zskcnJyi2mzVdcrYgFTqDbrbjEuEH",
  "key11": "5DEfVipMSRJzLZnswLV1k9MJTnUQw2iETiaLFShhQxQjy3xTEn1DCqCc2FeA5krXLXek6ZgHLjmXhXNW9q9x2N6j",
  "key12": "3jqkmQwoktAynfw6wn2a3o55ckf3pV5xPpiysgy5MKCmTne7cevbo6JrwWFBQoiSgJLLbisNQU8aK72LrPysRLEm",
  "key13": "5fe3FKZ6Kdga4EeJR4gnQmJuerKf4Qy3KNaG9ZHayfAcq3DJGMU5gYG617Y9S9R2fC9166uQBqjNafYmK9Ak33Xe",
  "key14": "36GmLRrRPWmd3ivcKPZRMfd98B4F65wi4tiJA6b7Ca4oGjaDimW2E8tQYhUyN8WTgELH6HiQCXaQY4QpUsCuquKy",
  "key15": "5mikVMe8fm3FdofNq7WDShUnuRAAFNeNkaYz3wUiKnp8awPaGAALupUkiogf1nkqtk1omvXt6Ne6VGThSCbEqRXJ",
  "key16": "63kVNMLNncnmtc26oKE2xJrgH2q8214YNYGHenBXjqyY6rLRkYc71bCnjAATCoePPF91CjmJJFpiQt2aWXF1A7mP",
  "key17": "RspZgNSKVf1kex3EjrxjtxzN4o4oeY6CQL5xLEEU1fcbFcraEa2RmgU7b6R1iGn2VrAK2UuLdvaPz7du5JG1sJo",
  "key18": "2YaAT9mb4suuyGm9wzcsTgZBrSgBYJ2avscQGPwGPYp9BRSiWrbE8Snf6RztGRqjKZ5dZAzYCH6uq9Kh8DD1VkfL",
  "key19": "3uS4G4AZuGJmrTTUqpaeTB29EG8iGvQXysgm58dMCpXSwRqcgKN7EjvuHm84JixQ6Uqf4AMCwrZgv44p9kryJpYG",
  "key20": "fAEg2VoCmgy6LLZGJWW9XFCnxbifAQb9AtDYLZacgcKeTsjUe3Q3ozd6ot1aQyTpVmR4GzTA49WahkCqMJRWm9Z",
  "key21": "2cgXqyKcdLngc381sQQc6SuahJRTr58SE8ySw2yr8qckohhiYZsMhi8PbPukdcF7PRvJEJU8KKV5bPzhUYC4Mn1D",
  "key22": "2pjcSErG4ikevxjYGqxUmDmh9fiicg9GTaRvjHYtMNnXdTWqvrfkwzcKyEYwdTN4HpujY7cxstzhRKt6hbLz52oh",
  "key23": "2N1rg1WFJoe7pKP8FcFNVBiiT9Xhxf76Ve8dYxmkNxkma76w49kYUqADiBZMnhaFq1na2pc2zae4sDKnVanxAW3L",
  "key24": "5XrfgKQFBU5jWrtVYWMUzMKdk6VRvqvGGHrZXg5SZsgYNsQwmNMcY8MC2eAoKHSof3Pr663RSHYLoe6kEqsUWZzq",
  "key25": "2NNe1hwKaCqV91q5RHmHz1WzdBxfFXEHgvzYDGe5smxshmyuEoCDBmiA8uU9U4zfJYvaRt522v3Q6HM63fvhbaHP",
  "key26": "2nJwAGTFjnXLKUUdNWo7jtL1RG7JLNQSBvTNbFUzSp9nKaK95RucsRAxv7jYZk7NpGPtoAeNpFQo96NVGXMG6XpQ",
  "key27": "3NLKwNYqjC9w1SRNeAou5mU5v66een49vATsBfKk9a4MbAUctmKsCdPJpiNNaRLqgYpJQv9NPSiVo4JQfC5bv44k"
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
