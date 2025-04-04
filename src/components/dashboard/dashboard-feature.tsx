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
    "2jL7Q3X6G8FYXqRQqC9DwB3mmibnMrBu5eaW56AQrsfEiBZz8L2bpH5KFjqbUiKpH7FTtbgcwdv1dzfBubvKYaGy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nYUCh2e5obc9uNn8CCY7vyhXCcDfL4a6mYTsogX82JfATP33gvZzL3umULWeq5vGezEjRcc6A1gvVkNW3yqZgHp",
  "key1": "2bW9dggszo7sDRkfVN74jnDddbN4f4WyuqjDj3eMZS5Bj41LGNKWekGMMz7Tt6fcqhPqnANWHaV31vpMwwU39yAf",
  "key2": "63WKCXcqDfKKZreT2MuVoqyTrfUJohE9kYsvX8VGqYxm9hkBmE1LxqxBgMybmGxAQXog6hQox97cPuMaRzUsjwwK",
  "key3": "Pu4xttXN3TKzfhqsZRyaqMWdYeQgmBVcfjNki9D9EiV2RG8f3tkpsf1uh5W6Cy6rxcqW8Kue4Nh5sXxKh1eQ4zB",
  "key4": "3pX47dfvAzmdet2hVos7rmSvyTEuT4wu274YbZpkATz7ykgbScAvNKSoz4UHgj5EvHzyNCWBZV9uQhGQhBMcYahM",
  "key5": "39Cd86Hmx21SeUjNAoirXzxht3FLGH2X95gha23keeUE3MqbpjugN4LzD18xJ4avdkyFfVpvUkzKfC2FmBAPBhFG",
  "key6": "2w1MCuHbyZa52VsSiaTKehijLmERpvR3oxhAttU2Kfv6vTGPSGkUPCm2cWRCJiPEf9RqGmPKghaaxQGEiMsyf3kG",
  "key7": "2MpvPM4fRHJmChPa7Q8UC6dbgFaTVd915meJAXqDzAqJVg8nbTWSSVLy34dipjzF6Z7DNq4ASSEct8rGk5w2pYuU",
  "key8": "4hvQsxvogd9Qmt6BPkf5fHhjUbUuq3kz2pcRKGacfuyPrp1Pota2mhWgqUEB39rUE25uCQQJ158dGjBw3U4R6owk",
  "key9": "5L4BBiJEFJujcbrZaEQ7M6EZRgLTNGTRHPfyWceHBjJf2dSsSjj3nabrA6BxobFi3KpbDUyoCJQs7W8UgotbVjyq",
  "key10": "4yeqSUjQRede6hmHFwFE9QDJmT9AnHYYZgvfddBRhphqJuebK3kigCYMGZwXjY2QQJ5ktBxwdEQqk7TscHe9CgPE",
  "key11": "23HGRe8mDBhTEbNw7QfaWvpfhaw8NwT4PpH1R8cq2rKPGv6CSGhhvT97UA3V2bV9i5Wbk4yooWkLJxjCk3Vehqw8",
  "key12": "33rGntTDfVWaoshJnTx33p2xYsz6f2obkGAPqMKUyZE6TFFay4ny2kBrQ9xv2tUnLXRvgQ2LYkFvBd7niLydx7hC",
  "key13": "5rGA7sFEzjmfTb8hXdURFSddrEZadoN5ZYeM179FSZojMHmvsYneKkmoBWgTHChqxhH7KdRNhGWSiyyUySHyQAVP",
  "key14": "53wiz9wcJJwpXovmTvfdbEdi2LULKLHbn8FgQaYE7cNVRGvdxmdV3VucKBwzkFnYxRtkemZWHYmU8rBzQ6mzT28v",
  "key15": "4GoUGSM7FsiZUEBieWreb1MKzvGUw1RZ1eCDQFNEpSjaAZAw8Ks6f6ivPE5LGkPFC6sXBQ3nV3q2vRrscFjkMnqz",
  "key16": "c1VzYt45oCGQWtgi7yRphzJR3WEA77fKHm8942Y2P3CuwhJqHNd5cxgb16Y8MEKQ19LyWZ2y2UF5kUubJcZ3j5h",
  "key17": "4yZkcohhztHqnVfQm1rBtPULBvmmaGU7kfAB3TaSET8fECRwa4mTmMS5JL67p8tqGL2EBRk6atSCZbaSREKNbAGW",
  "key18": "4pB5ULpvTQFBeeTseSceJc3w1pmoLmcoRnroAXZP2cfWFvwYq8HtzSytAfYZ1mi532gxVQgCA7SeZEnpa3L3z59Y",
  "key19": "4YQ4sChvCH4aXpeywEVQyKFkXsQWt6AWMnhkbJVTDbw43suLWoBJB4ZVNNWSFh233yBJQNpYF33D3DnzenmxEgvG",
  "key20": "gHWg7WmaHaAqV6SiUgmE1yAre74rWgP1DgKWj94HN8QZ9LeUibpUKFZR196QovzqhrgdzAgeSxtPhruTuuZMV6s",
  "key21": "3en9brWhJ5yoNQSA9pL5w7NB5C3H58kM3cXdG3woVU46x5T9BBigUhYxEGHZnL8hMdjAPzyL4qn4hxXLzMgZrp2v",
  "key22": "4Z4qXNvjxdaZXRMF1NAhHCu1wtXaGLawEJ1n3BAocaR4PAns5GsistQfaaWnK6n2g2L7DaHy3Tax9NY5dvUHRjSp",
  "key23": "3Jn9i5bvLEcdxqU9i6DDPMqL8Bb6RtR8kREAj8AYXi7iYLxQqnaPypw1Qg8Yrxe2Ynfz6Dw4TiW4nj4L86UYuQbz",
  "key24": "2Zt8pGi1Q8qY6dTboX54XmFRM7qynPi6ERbUMydhejD4WtfxcyiPL7FNQX8R6T1n9FAmRa2twqd7ytyjuAAJ9QLp",
  "key25": "4v8AuGvWrJo58N8EcB8xwYnk5z9wFLBzVLsQAmbS8ZYrvbrnN6DcEsFFXYPfGVA6B4zjaiKmNJ4kEdgqejxr2o8e",
  "key26": "LGKgWkRfoBoL8d9THW6QHGxhoGNP8BR6fxQQJkk88TnVjkixyGtsfRtjrUXpQVombgeu6ngvEDmSxMg29oXJBQv"
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
