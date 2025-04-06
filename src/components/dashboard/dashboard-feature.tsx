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
    "5hKoYXedc4V5XTRMo7gp8phKPPkdGu3AZxEhd6g8wroNmiAaoW6EPkPW6zFueXpHZ4FwhpehowWBSu4skQ9fQpgx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "612b8aUGxBeF2WRRhF8q77ZFk54hdAqiuMrFHrhus43ZNsZKrPGtHm2ekwq1MhvTfBAfpqXdGGC3yKoWyFSfw7U5",
  "key1": "5AGL6LGfB16FFS332JXgX7yKfCfAthoeH9WQF65TVs9aVDo8TpYvaoWAtPvxRnC5a9AyttVPirEShojcjHYMS1Ba",
  "key2": "4iHmSHgKUZwF7hCs9npfYmGLADYG2LbwudCQjoiGi4jAVSPMk5cF1wtAxQTxHzpsrECGeZhbtRD5Qrmjiep8ShFf",
  "key3": "67Zmcr45qK9Zbh4daSDPF6NX37CWiLTKWDHvhRJTLaGjGkqRhyQVtEvrWQdayftE3QDXPxm47owGZ1mXsvjUvX8N",
  "key4": "WkgBytukLCt2ekwW9D97rex9MARtYT8pbSGSgRbYPdxZC6D9j25Fcp2tf4Sxb7tGTXQ2LKUXAuwFfgDwN5NAaRF",
  "key5": "5wZ6pFNZK7vwoaHdMJQmNrDyWaj8rV9ykZUozwuFASJL3W9Kdarf1Um3QgzPxjUHrMVWRjF5RgCh9AsDenEvYdBe",
  "key6": "3gFCS1wcQE6Yytbygf59AXTPrRyCueKCaZd2MerCSTZd8H2uujUbzyS6ycNY32CvjzD2BkC9JhDp3ikr7uCjZ3GQ",
  "key7": "2XoDSRbUUF5UwEn8BKGYURrQF43EzS8K3wecsDDRW44gWHYb1xGrFeWNiVCtxdk85N7aVJhDwpVCSRPaJ1rFWW9v",
  "key8": "4ADtAzD1nZthicSRrsTwdEfFdrpHGEiKsJapV4aRqi1aaZsQ35AGg5UkhjMUy2dhnd6L2Ti3dShJqdR8bxjd9A46",
  "key9": "2pxb6PkSxTda2Ftck777KSL3V9UCY7EjhXTuFKbFntpNTjaLLuVTSyQ5kMw7bHhokQDXVMiVV2X51jduY9Qks1yE",
  "key10": "3eH2fETnT234KSqbmxkSR73HZSa83MCFfPqpg8EkuUSs6LVyiZaRGqx77k8smLcTPYYz22meK3rVVP5SnX4gtJRP",
  "key11": "5gM8yT9V1T3gHrDQvSYptimi9sNcX7iWBgVN8BKb5xLa7FpmA6h72Xw32PBuSHhDwqhAWfrcpTvLZofRY6Vd6w6W",
  "key12": "2L6DUT5g5EYfAQwMGSShRyVUQ9hEuatEYfJcaCR7kRpvptMYoZMxtCvuqNyLoDbRnsAfEWfKWT4jwZ9wjtGvxuPY",
  "key13": "2a45KN7cXBJprcq8nMY1DxNhewkhq9NoHFaqh3GHBXu8sPPsu73GtYkPj4XFbTaReuhHeCSD232gJnVk5iYkuv1p",
  "key14": "gYFDRcG6TvW2rfQJvJaKx4BCpR766ohqcxGLN3qXaPosq7rRCVQ3p9KEnxbbxg6BFa2hrdm7i7f2DHLxxp1T22h",
  "key15": "3T2gVhpT8o7wVNJ2G1vde8GUHYKejVSveHeXoxAQLmTmFarpqa9wCXFYojRnRa1CRkMQyUqwJHJwbGTgRWnW5PkY",
  "key16": "4QzDVsfq3PYES8eqqDo6HjEbzGxLboGDXd3aN212mjyZ4zKESNRFnLLsk8BxiAkLPytbvtiWVqyrQtbZmtAXfp5o",
  "key17": "5Ys2Uwx25toi2UEd3it4Yuee1jEiNGGt9SVYxzoAudVZ4rHKTr2CmMyc7n36Ljnfth2qjACB26BWsTYjE6jYZYsv",
  "key18": "3uKhthf7uHqrgFjhXfr5FUq6xmYb1sQ8oRF5oBjuRCif7CraYRf1Nw4pNHgrXEsjsym9zPPhVrVuXrG53sA12uBg",
  "key19": "515dko1Q1RitRYiPn7NKjgNCJH4DEtHgAiNZUgZDfA8npLrqfXgCaky8UMkiU6PWdSGZNxP1aKwpYjZWhsaF3crc",
  "key20": "2bW4NNAjNq3EV8sE9VVXm6sKjYHAhJ8M8Yu5eJ3iyuyQ5u7YhcMV1HdyiAFfQqemBFqWZGeLqWKbd1bumfAxmztH",
  "key21": "P8TrcirBuV56Q9g4uzntU2JDszqNa4Ekytd4kRxJ12688b1WQtetjT1q5eQSUDdw9B5pRovVBNctioMpfgorjXC",
  "key22": "2RgfTUM2YBCRFa8iejkepfcpE5846TceuSeVErqzyGu13RzweAYxTppimDiBvJNSmq8nCnZhriD8wVWLpRoPji5b",
  "key23": "43pWL3irhxpcEPh7axd8fHLweZuiFkxBZk7um8QBhuFnVLGfoKNHFaqyCzStyyGuof5WLszD2vcDMqzfvpKiJiYU",
  "key24": "ftSpKdHLYzK63gQBbnGKw7zRaMc5p9KMQyi8ChueRKdByBee36vWQTA3KrG1yaDoFZHp6vqt9NaYpWGzQM2WiiJ",
  "key25": "3xh5px5GyUvnEVT5i4QrwTeF8Grrhq5qtRRJ8hJzboqpnEQjDZKtF4Qw9XhpZTG416MBRm6NCS3e5Twbu539YdS2",
  "key26": "3H6h6vTj8jNqU5U7PoYJskf5DsUirVXgzsNj6s3PXmUZzRRkJZwnSEyYfaRFxo3nMF9jnUyeWTvnacVc8h1kXJSK",
  "key27": "3BWVYMDgdxQyR223aWSuNFB8NbCdjn1x1Aszrv1CzhJzSWqL2LgCGZVoM2xaNrsyakUU5Te9gEwK1aSnZYaeKb6t",
  "key28": "52KZRozTNmaSBbGeF1SNsuU11PWM9yFaF7FibzksJXuTnYQxZJXYzLTE7mRwv1JUNuGMGnX2uaiXewaCA51W8D2B",
  "key29": "324u49cV5k4WFN5f5fX6nzBbpRbzEUCV91iAFeTr2HvCxAjLRJyxjXkVdWu7tdHfs4eVfAJnjGu126GNZfeMDv76",
  "key30": "5UszNBasUaByFNwFeCsybaSDoySdsCkRdc41NvmaXuyXgtHpDYWXTyxCeU9NGmrcWmDi1iwvp8TurHRWtu3K8RZo",
  "key31": "5Su2FELhXJSksFHqD8kzMY4v6rwmZkbVh315mbuK7pEcGzv9XbxsNQnznCa25utd78g5uzB95niBfSUUHKDvf28z",
  "key32": "4cnauKGjn8fmAt92UP2TBCQUwE7QAtPkfqw9UFPn1Hsij7TuH66TQEGJogxG1zX45BqrWAzN6X5jkWUjFgBtUcLz",
  "key33": "23HxgYj39KKyDmQ9LBZcUcYXzEFkFJmvZDom3t7v9HccnzVtHD5s72wGUqqsQ4LBRbCQqrgSiK9MMCikxe13Aeda",
  "key34": "5KnSKZb8ESNrkyiSd6aF9h8etBK9vApxLdnbE3hzDicZAYGKBan6TfZeM3eXqVdY2PM7E5SWJmnqQMfSEMB6zmf6",
  "key35": "HZ5VejAyoaB9Dnwnk9wDVB8t1kA4BxpYBti3NimR6LEQgoWXXG81rTfmSPU3pXZqFoRWD7WNvS6g1YiaE2jGWa8",
  "key36": "2vRhjGizTPLieM7GKuoJYY4Xd6TV96FER4R3epGx4rMj4jJFZq39Dree8qu1oo5rBGQ2eF3p7bP69w43kKKeyM8n",
  "key37": "2NrTAKK9Sn9U58zXF1fnyrBxCuZGzMQPFxQG99fKWw8s3bv6J64WWcjSXn9eANePJSnptq5M24DuLWX1j1YWwH3",
  "key38": "2ckM4zxvR29LG521C6RMvdZpkXBXDzfkmdWqiS32L2TSoWXMg7hxfPfKAiAA2vcNxDEdtngLPBwrpHrr4zqT8w7A",
  "key39": "2zRY6cfzriMksnqtg7E7JmefQNbZsgNg6MeZr7rrfoLpmTUVedVNLLKvwFQXgDAmpuwoHNfWsJCecniWBXCmrhGg",
  "key40": "3DydkeTb2ePE4sXRyRGtzufRsQT95UpAVddfWtg1zZDYXZBoAMJBKP7CPXJgPM6kRjmtqjRBNGwYpb2JvtnnXyq3",
  "key41": "62UR8WbBfEUmvoSKQ8a74dtwfEtfH1ywBiQGD4AAiriWeTmCCkCgDLVPbb2zHK2o9YxeS8GfoShurWyLHLztSnua",
  "key42": "4vUWHrgTnNbEDEU5Hf9vrfSzSmXMWQF2ZSRJyisseuRryqF7Xfu2X3XbBRXNf2foA6DidPBs6GnuJUUQk1TpL5K1",
  "key43": "4ogjLM5LKFFA9ZhV62V23nQcfTvmzkxpQDASPj9wyxdeBxHjTj2YTGMPwJmRVSxhQN3WPWYEw1gKHKWszKXCNSPe"
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
