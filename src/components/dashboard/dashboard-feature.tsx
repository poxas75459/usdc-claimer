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
    "2sZYuVot4r1JNxJQaHPZRtP5uLdpdtf9VSfKkv3dAFxTwf4q6cZ3i1EatfUXedMbkoKGUxQC8RuFew1QtMFxmrMC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tM2vbtZcPHwxUuNfvZ7YKKKRnh6cmfL1MJLry1FJx8RC5exRHSAhE2J3wQrJh34Rnru5r47bU9kQy7sWxQiZgLn",
  "key1": "3RRmi6x48iGrxC9mowZHRxxy2QDGyeMF8mbkb4STK7NjXZ3ELhZM3DY9dDteRMugkSDWpWu1nymwsXFNjPVZQds4",
  "key2": "35nzDP1zaiy31CnJyN4P9PeG9LLhy7wReWjQozJE9ZUtyGPMEYXitocx9Mo5DkGPbHniyA6ZDD3ssjQ16RD29kH9",
  "key3": "4cDFo12ZYjh71LzzLkgGyHSj2gWzxSQGzNdr6DSc7tCgFUhHtXYsB8E8jirDruiVDECCnd6mTeDDPQXioiXz1K4w",
  "key4": "3XXfQtgnLVVijNrvwWr5iEiPPvBdYYJCNmNDPCCHR8pggHBGwYVb6xphmvzvbnYdR7YKXkfhfKAuNetZrJrsduvW",
  "key5": "2vftCzyUQNV6Q6JbbD9t6AnsvCeKdgybB68NDJBWocgWMayqgMH7qoLWsxXkD21AkLaEqmvCXtvw7vdnDZKsS5po",
  "key6": "5SerTaTa8pjAjmoavogiP5q8naoGFZpfc4fK9otTkHZYHAVVWNvdfFQjq7mNsDPgitVYr4TPoR8hk3UnNaPFZPmr",
  "key7": "Ktvdo4RJGorbC6DFRqqYie63sLbfDQwmEY5rHieeRKTG5UVohD5wVKDD1HkKMaRZ6zxdsBkb76cah8mtEsGaQZC",
  "key8": "5Lrmzx74ZdkSp1wshMLicBbpBnCaHSN4zVU7VxbZhzfyFJjqZkSpmS2Yk5mHTPwsRdeZbWtUDwxuqBVBH8q5qkUS",
  "key9": "465NaN3BZzJHEsnhGEEqQ5GdJjr4xGfQd8taQukfzoSEJmyZsSswEWmjKrHoQgmkkokFzoeXPr7rdmqBGUTkaUsP",
  "key10": "2r9vcQtAUBdF3BgYc1cBLYUMkbYLdNCfqySE4gRRd1hV2pugtsCqCN42Qx3iHL8xmk19jCosPvNMHhsBw8nCDtfv",
  "key11": "2jYs2rTxQ3qAB4NeTjrcwrQyRhXV3yA8s2rVPm7Ku8fJWjFCy8faSJ2Qa1gSNjDpXdkiCdxPaGKaHbpqexVkrPCa",
  "key12": "4CcDtfaxPhxtwozJJ7ntGo7Syt9mjsdpRqvxBjBzWKQRcWo42FZ1FeU4mAdnLYyxoSsuYzq6dcPbHmhYvGKSkPiu",
  "key13": "4fmCgeaTgC1dQRKzyREdocCc5kdCTTqzrDQFsvMepM2AQvpHU6vBQTtqBFYQuktvx9RwqcW7XKpYZ5JJcVudofUR",
  "key14": "3xcF3PBJWCyHRkES6Dk27ZJUs2BhhXJx5HcAX47fveHNv6TsbpZXx72VwYmy1tjkZjYRtbhpjuUm9HGKCHQVuuY6",
  "key15": "5BpFn8MVVwMEoJHLyA1tAm3Amu6xXuuNPu7t8h4bxVfmhLxcmR83nD2zyT4FgUcKBKJME2K14Cngw7ZNLRVNhugP",
  "key16": "4JmnN4y4Pz1Lbai16T5QH9YBbUGEq6toPyiyjJNbT9Gdy1TyGs5tPpmrLFCgsMHi72uRbwkAXw9CHqr8QfxodtVD",
  "key17": "61iUjBPD79qbUHkSzwgG4BPh2L8nNRFPSSUhzTbQiTKEkBaDfhG2yeSovQrCTBC5Lum35Bye2dreWN1L9QSG3TKo",
  "key18": "67ohTiJwABYcwsALHo8Qny7QoPPm8Mhb195iSGKXxDhGqcbondDQLnhA42CDu7kTh3Me1MUV8uEhNLy2imGQPTQu",
  "key19": "4JuXEivV5th6SsRkNJa4QGxZpFdsxkSAeaAJShjTcjKv6EJAWuCcwLf3wiEWvG6RU5Jcrq4NbhEZxERUL7tZu3nZ",
  "key20": "4QmrFciFBUiGxMdh7vaYomWL3u3a4EqNchSakq1JuJX9tgFNx2s54LSZF5SuE3vATpGpvbj8fVpo34gU7HAVcFZ2",
  "key21": "6yE7n5Yw1yUydDK15ui3MnbvW8xXs5SZChe4rnpWeQmX4hjoXdRhTuMKMZbAqbUX9xSqwUaeqbYFWeEs41xLacD",
  "key22": "2Tq63FKQjMnLimSeJzaWxsJscPTTxb8uQPNL5VCUoqxC2wjqSCCoDiuywXAz9pQczZDtKEmN4Qn8x5dooReMGDYd",
  "key23": "5eb5cdZiwWHc6dWHDQLmTYLRSXLwqCatcGh4cUuUCta4geRgS1CcDLqDFGEBUvFFZHCbfF9CoX19FSuEvcxoqNbP",
  "key24": "51fGjAHNvWLXwPFHecj3ZBi5oCdMj9cAEznUP4FhqDACQB1jyBx9bMQosnx9PK7SEiJebqb557rXudVn7tnELDdR"
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
