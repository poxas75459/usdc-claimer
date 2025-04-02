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
    "375msx8cbKMB6gTAVx32AjTnnhABPhq6RhzHWGndz5cCLAxQSmFDqUjqJ3qq5p3qcWTe3tdyv47xWqU5Lt8uWbkT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C1TuYQ9U14aDhM75FnZqSRTyNBkJzF5B7QLT9Xr91xC4XGxusNAo4vSma9G21SWtdfN9nad1LGC28Q64wQnir8h",
  "key1": "4KqBGWSjMLgRxdr18WrxuiM3Ed92fEbDjTjkWN9b43Dwb3paS8sYsSngkTk1MaeGPPxqA1QFqfyy1c9bNX5XCHLg",
  "key2": "SisDHqDWNURLzW2m275YanxEcjx1JtVr77RFvt6nEZBYMYKeR51oFptG29QA3rYeg7Du1mCMvQSky6GQHhbSB9d",
  "key3": "2idYQ1KLeDcNoWZ81FXwhuCCw7jPiokPBbbZuxcXebnbuvPVen4DMSk8J7DvB8msm3HKr8cWm9c9SBaokigVcHiP",
  "key4": "32oxCnnr3PQMr6smvdjpeBL6vybqhU9BV7GP1XV4M7JU3Wrr1EivYbQGuxfJUFtVRPN8Qov6NYoYnzJo2fvUYLf8",
  "key5": "LTP2QDeu424qEKyejEZiNxvgdMTja6vpwqy38JVDjB1ahhAr2WEYDN92Jsc2oMyhA3s2BuHaUkru9TVnNViv9jq",
  "key6": "57ZPznV9AeCi42YacLtWwm6ZPcQnHhG8ecAuAZHPkMNrWcSgdDaAVcmEYqFqitsqa1HZeUs3mV4xLq9gHooqshqq",
  "key7": "2UdXsrdvkSH7r12ACjzvQufWvvf7TbiervGPpmEfwuEczcSxkREVRSpLThx6WsRwsXCRmZWa88do9bdNMc3K3UbY",
  "key8": "7whkJHwDJSexfVrhVS4H7S29UAVq7tUf23cPcKao4RRxAyWWphLpZMoVByaFHsq1KpSxzLv7aLZ33UMQZ39Rbvz",
  "key9": "7zjvPkyCLkRV1ezT9aWtQ7J5uwCvDy8z9z2eGnZKVnD1iHKEyr2bJsSGXLQeEE4ySkh7m9FnPa1QDGaASqX2UyD",
  "key10": "3YE2FhuR6Z6MGPbXx4iB1SBnA9yjL93WhXtdNb4StTQzUxNJufd8t6iViT8Jca5V9Mb27Vcy8Kum9Ag2p1TZqW1x",
  "key11": "2KUJHVRhW3LCrAjWVp5xuco9XBhjBkDenjJPbq7cXpNLxdn6FqFQZDAazugfMkdYpDDo9noh7db5xFCHHWUQ7nA6",
  "key12": "3fw8PxhBufZFufgDaKrfXutxNopZEZFF22xS7CNnm4EwpTChoQ5raSx7s2seH6PyFdywa4VuGujhSNtT9UUcBXUs",
  "key13": "3tnWy3kzoqHP8kfAN8nqbFTw48ufbikdAzZjD6c9eb3so2Q1UyvpxUjJShr3iS23SVoEJyMqGFViofgBbkbq4fKG",
  "key14": "3dWZ9ziUn197SyKMXpF18hdBxbKCcYHUxhdBBiM5ccVaKhqacXrmMBoyk5uPYKfGRm1c12AYVKVDHU1XZcmqAMPt",
  "key15": "3eoCVB5sv3qXHFPmhibp6dnwktzPiCRCTntArWy924in2uAkEoJwBDXajFTfvtVUqZjTsbxBsewAZX9PiTh5Mz6j",
  "key16": "wbPbCm4vpoF5xK1pi3VPafroPthaQdwVNfaXeig21kJHohWwr9vp8FjMkgfvKDpDks7mgmD7PUf7HoUumEYZVai",
  "key17": "2otaUX6mieh5h5H2zQ1iUMH1RgX5Xx7GQkwohdvhbPGQgeBQEtJPdcbVayfdsvc95EZnk3pq21zGQiC6Fz2RWLcs",
  "key18": "5gZKcueVTJA9iwoACJ92vpMZ62tMfrBzZ15UfiRVxvShhkk1KWC7axSwXBVLYkhe75UVoi1GK94PNB8Dz4sFpAdf",
  "key19": "23bP21WGFXDgUJUy8ChHvXLfJJiS59bM5uVDgHYonbbkEdL9nzpDz9eU9bzhRwnTajJvWUKj7jovKbTUf5jsjWGD",
  "key20": "2zYMHaTTFe2sQUnCA9GzKAUXtndV5pijxkCnuNqcbhZ8AbyPCRUpRJURmRT7EgWKsaSJiikrtPzwnYrqmm3ointH",
  "key21": "527jXs8qWgh6xVBfWgJm84fTGe4UYanR4Bz6ysXWHVCdBmB8Hry4JDZ8EJgkebXZe2wj8RycjG3PiEYkBMwWdABY",
  "key22": "3zeHWLtDhH912aYqyen8ZUg4wkr7oTztG1ywJNkVTg3cxuvMMdtmfdH1LaxpTiM223eBisuvFZpvT9MjdrRua6vg",
  "key23": "5QmBf4BoRdx1WzsFrQBP5cZbCY59MKUBsCjxw4s3qR3BnYzNFWE9tgo45utDuUoxdw9pX2c9xiWGhwHnYrfhDWk2",
  "key24": "jDyx34dV8s6Qnmb9i6qeAHmkK9oSsJVVSks2naY4kHYnR1Na8L6KmyYj4jxSEfNGp1iXCPkvtbYNpwmKPtkUWoG",
  "key25": "2RcvqUDn5fYvpfNPaKDcD3WfCevvTwyzhLovG6chZEtBxdGrwUDdjYCKnRLyUBd2e9dNndA1UCz2kFHLAWB5b2kE",
  "key26": "53UZJDaeqiEitkpk6DCuvar1baoxyKPHQAQartRKzzS8WnTNAadd5NN5x3tdi23cCUDZoJjwXz7iSNpEQdQULMZu",
  "key27": "3QHsCtM4EKpM9Hcagki7s3W2uVVbXe8VdUhKRfSNHFTLeWFo2rnp3ohNUTt4AZs6vtYY9X6JnM1meqVhSwUJQMEA",
  "key28": "5yRtuhayXbTrBhUQMxtz29VVa8yjRkkSZHUdAeZoncUhW8tKNUThYeredas9ahdVPjfYK9VLieLzsT5x8o4ejJcB",
  "key29": "2gKgD4BBRksYhPkRiqmt39sPb62XXDi6MU4L8pdXfNBTYoGuVwHFSvNH2qEFPHinTeGs97RdaUCjpxbcJsqRzJxi",
  "key30": "26B6yNvUG2xzsbGv83xTxitS3YDMTU1rDDYnrtEKEivbGLYXuRyLHWZCVwwEGudS6ACJ34tM58Hgacs337GWZSek",
  "key31": "23P1NNx23XjmAF7MXnzGGW5shVVUFRHeBtbgxt51mwpAxz1nfdUdLGwE3MHmS7pyAukaKtWDd8yn8en6WYtzyAde"
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
