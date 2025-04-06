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
    "3Jbxur8kDik9aRM79KY6YwbL5etBHt2QVrPjwdE9MidhGdSKAzFdgEtpsNs4pn9dR6aEjdFBHVweKCRrU1chDfYR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21MJABfyRGUW9uz4DSbf8kjskupYAhxAbeTgh11ohHYUob8JTaAhZqMxAe8BixdjXAEF1okKL9aadrrg5jy2j3Nm",
  "key1": "er679twnJhC14aFZ8AE6S4VXGQ51EareyouKnsULXPuV4mv9k2ZyHUm9JPhJXX6atnJB3pCJW36WnBg37zTP85k",
  "key2": "zya3FNZWnqSkiuBTEds9u3jg2LtkKoLnUPPjZqo3NF9DiFPYkMoV8uo2biSdW5LX9FifL5q6VJZ9fYbQmcSqmub",
  "key3": "3XS7xktEET62dD7MqH2viswqMTjKJVEBMPU6ioNgcvUKyUCXnwXZZDZJArjpLWKaqH34t2QLXLjkWmau2x7xgVgL",
  "key4": "A7gdmR5cZKpt5bZQ3xHLq9kPS51wLCGXzNR6njRfT6WvDixCBCM1RoYp3ms2C8bup1whZUr1VWtn9SQs3gWWYgr",
  "key5": "2ZASXzxjaCbQqkHB4HUsyzaBTSk37791vE63GXTU82AWtjhbUuUkCpaYzEnfKRNsH7tPztMfHepb38iP7jDd5NKz",
  "key6": "PYQogWUGLcVqsH3zaduQgWrn6VSR1wT1qDwD4wVUytBs2NYBwT3Vy8meT7tdttcQH8d7gz6b1BKBjsw6eSzPYBT",
  "key7": "2TN9mRVKTd5pZNCRdPtduY1Pj3mknkk79tJyvcV8vRG74We5jTtjxRQjvoYJwAxMmwNhRZvesNWMiTtkSCYKjhLZ",
  "key8": "45TNLUNPG5vx2yneH6ZLoFmqSoxyzWxEcfnryE2gdN1xvam4Sh9JSVXs3eJe5V4HejRwF8msmRBFay6Y4ogSv8hj",
  "key9": "4hoAypPMs7d9iPv7xfqik3NvcaT4Ggw4ccQZjuAyjB5YtYzu2VP3zqhPYxkSid3k6i2AkYMXKuj2ZkSsvh8vH5gw",
  "key10": "32yAwUt5disUqPeN51bZ3rCZXGdqWxZqLw6vCmL7XM9QaWLTBajsiGFqJqhHLRmLZz3Zn57Cjpefaemh2YR3k8xy",
  "key11": "4J6o846CroTvBXEn2b9fKrW5hP1rVDDotapjhsABECQiL9obzJiR8NvBuX514oxY3BFEpaK6TJaPL4J1mmUeXQvn",
  "key12": "47PawVfX2sVacx5uZqtiFMDCYBT1TCQnQGn3sPhskT7HiHpB9NickyhFP5hZWuF9V8jQQ9GvUiWm6dXydpQn7iWE",
  "key13": "63pJnpKQVxugecJ69ZRo8saKAJ4uvPGmtjNziY5SFBFSXhwXKxhAyKrX5VEwfpz9QSFKqeP3zGVzKTwun1hGcvDM",
  "key14": "4VKDNsXNeT8KjcLcSBe5RJV8BfLdazVud2jVjkySt4KL1eLBY4wnC7ZbrPGkSdgAogRqFBgXytoWPfvUCcBuzLut",
  "key15": "5JyaeAsHiXcoAQ7BAf2nCvcB34YVUAJGKwviajes31wMGAvGnctmuWNs9oGajRHVNaaCx1LPBGFQKCMF7D81en1e",
  "key16": "54X57DgYMvxkTwPQBmfvgH9ypNwoMoXRisyLz4fAToTD7vF4AKU48V3YwfXwJMXtPArDiivvh2oYFD3Es4ehUA29",
  "key17": "2r4snoP2xi5FDsYzHVhzBUkMBXfSSmXKMrs2yTiaP4xNCsCCdMpWxT84vCgYGoJTq3m4zjQzAyRvZgxniWT9DjTd",
  "key18": "4sFq7nnsR9KnetrCJdEDXvtUGNyz3jBoUTtNbswbdmQbwCkaUQ6YWTFPGKEum8wf89QYrHteS9kcgnPaAmXtCtvL",
  "key19": "YDKGm64rU4GVfCJfLxoinggdJ4FvTWZtoMn9Aen9ETeuofiLVxZZRYkZxw6qCYurXoTaUkEZyd4XzQE2xmn1SqB",
  "key20": "4tU917cpxqLASKFcueanekP4EkPr3rHhf9L2sab7wFrvfjVJknMKBP4vp8Six4RDo3XvkhPjGsHbBAyEtmekeRvR",
  "key21": "4mY59XAFz5UwMCKUBdGGjVQp1PgrGTraUZAsBuA4UwVsUuj8fjw7q7rrUQxWdmrYV34YoANKMPrH861Ca7EzN6bH",
  "key22": "4XHsB1BbJmbTfZLTroYotm2bBzfU7dDsNyfUaTWjK5ZVy3amZZegMzeRnZLCucZfDDjTyQXweYe76Hr9TH4WcnJE",
  "key23": "DmCgN4AmjBfdSEmPhskoBofbHug4GV7pUYednXZ8whYnQ1ZVoQgqEQX4KiddgyF31FPPZnq3qbxU8Je8MRXeXMH",
  "key24": "2NQZ2nBGmSTvWLQDcXEYAr3PUqffZmwrPJB933N2tZND5gXGF2kwgPiJk14ourTTwS8YSx6krckrS1F5mjGceeub",
  "key25": "5DZss1ECbA5fvQXUi62siqkpmDrYknVbk4JzMcUpP7gTkaaggs4Q8GgwpvFrKv1NkYuVbWh4tEow54vzhBNfLFcE"
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
