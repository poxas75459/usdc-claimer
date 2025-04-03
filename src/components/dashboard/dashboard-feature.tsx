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
    "21uDnGLeL9iA6xMVXVWaVhHFTeoW4zz4YPBtUMQhzpYDww3eLspbauFBSr6LyPFSZb3LNpSwDsYGFRHi51KySPMK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GTW9wgfNPpRbw1DBbEfxN7fZbkB9i326RpWHHNEDwWHpRNEQFaw7wEUJmgNAY33P9gpxQ4gguXHQ2VCMtFvmcSR",
  "key1": "46o53dGNQMo2DNqfkfdThJsxbRv7uuLaihJP8nVWxhxFhW2bKMuiFNsUUEveLeGgB9qkENLPyT7jZn4grDgJqtJq",
  "key2": "5KpmD7wNaKQSy8s1ZfWm8ho9DfVEYpHVbteaoVmdXMx7vWB4fEnUTA8NedBteTyUbGR3dvw7WF63kp6yGG9fnJVp",
  "key3": "4N4EHGVbvCMPNT2tRYfkA6BL7cALD4DdN4wXd6paBWYZQwBfyXLcddsXWm67cKEM9Jkv2udxgkwfPSiA3tzPw7uU",
  "key4": "5j6zZ3vbkvoX7LWovNLPyCP8Bhixb4aiABGPP4MYeD4f2JAmtrpFQPt9kJbwGnjhBZNxqFjauFYiijZYQqgMKY6w",
  "key5": "3nTrPceUZJ38G3aU52kVUYKffGLvJCehyZZrZd2DoX1a1vQTCu5kcwD7dYzg7r9uJAHxHNvLwyFXvj82hqBV7yXQ",
  "key6": "4DSKFPo9sMLQK383iaGpuiiuYuZoNTA8sd1jTxPciyoaFkLRuSBSepfaXCdFNuSgqY4DaQScEcMNdmxrP4X5hN4W",
  "key7": "5LGUHuT4wnr3eEnQKWDnEis1V8BcjeXcCQA6YxTFUhsyZzEPi57LvTuvXtwNCjoMUrxGgPbYWDZpAMHt7m4YNpHY",
  "key8": "4VQB6Xw3qat5ZGtTs6HFEYzebs7V1d2V5L2u6Qr2L8AXKGLEPEYqPujpJMyaU9LYsHx4gs4R7YSJJwbUTHU8minY",
  "key9": "33Qk1J2tT38QDkwnvoToutUynPRfcxVEsm8NNZCXZyJh6HWgvHkhEsumNNs6kzbJ7L6oxoMqrSn511gSy267eyiE",
  "key10": "6UU9grAcpaJE15mNYWDaXGUzEGPeR1hb7oWSdYdaWV4KHrrxrHrH95RhSPEJ8sncy6dmrkCyuqi3h88nDcFyJLJ",
  "key11": "5wr9Evt3sXc3mk8TRakCmN4QQB5FNaMQ5tvCNHeJEALW7fyKWTQGcNDi25X5LFVowJfRC273FbQyqVaPN6966A7w",
  "key12": "manHn51t5WZ4zFb8zyKACnReCShZ3cbj2U1BVSNcffC5THtWqmJ6jrG9wBBgnqEiZJvS8GatcYey1nKf5s3NPAu",
  "key13": "4gY7euupHqvjKfwyPG1vJoGwjyMKjd8hsB4oaaNndhAuW9m1tZQXEAtMbFGxYAF9uWKuut1nmk96VQ7cjBgyb47G",
  "key14": "25Eg4wUWwyZop4EDJBqDdiyrLXg6sNkXUhfseieLjyPmbYiiP12tbi6eaqAHXLiJMDu2CsggPp7kYtK1sxRjdkLx",
  "key15": "2sdSm182eAVbPfTAsHsrJJGrCnTDAPFWxE2Mojgz7p2wiz9qVoTeCsCWDzptkc7F4DDeBf2GupDgiVaBw8BQDcQC",
  "key16": "zLg72JWttetKLcDhV1vnGdhUMUJ1zYnHnnWyduYigoyQ7C4fwEBEyM1m3aAfec2CdXmVomWLBTNLnvyAeifPYAK",
  "key17": "5eucq3EbrWkthPfySCHs9r6qXCknWFqUnWkC2ddr8ttZdCY69ohLpY56hwXFyCeLLuYjSqBLUi7E3TZDFsTGQ3Jx",
  "key18": "3KevU92qK6AJYgqhnCAvzxFXAMyubb4rT6ESUkzpZubZRwTQahqx9dZK3bAFZ2UFzmwSar4xr9fLocJ9Rqai5uwD",
  "key19": "5XiwXofuwfjtgFByLGdCciy6fHYKGFWe3SHnCh2sjqXGKaLv9nRgCngpckz5sU4zadG8KwgNmqNEFqGL4YB2K5Fg",
  "key20": "4rNtKULo5gqYMENycAtZLzJYtrUXJmNnWyZyurE8Zna8jmhXZZQmuuPhSEN5D9ba2Ec87TCqkkh6mxg9yuk9NNKH",
  "key21": "58yX3D2Ha3hW5Wae8nN6e62DDkCEFZHyrxZ3G2UHzs3F5EDsnTBc4bc7W8QFD7KAKnmeHXsDbQ1M8LWAy29GiPod",
  "key22": "NXDFChdQLGdNzY3ek5b9GA1EKhb32QGbRrb7iiG6iCqTNo3bwZpagvFqoAeE24RZtctrnyyMke7VcSfrBbbkAxB",
  "key23": "2RaxAwzCYveyZKDcVuZUwsQb4NQgY2uwMMbGi952bonKxo5H9iSFNQvXnYQBNkBjmJGZD66Ps7xrneu8PuBS1RnS",
  "key24": "23XDRNKF92h7UiFovem5kPYqibZcGX344SL3oDtWMyQ5ewKK4zeSxf9YuAxDgpjf4rsexLuc4XzjKNAzDdEdea3u",
  "key25": "5exAoYJFNmVmELxvFyjdoW3SLjrrnXAcQZR1ZsyKdnPRBWQK6xmFS9mgKF7qq3JdFMvoZcbpmLKM3NcbLRx2mETo",
  "key26": "3zGtZQ3gB4134UytTmFrUqhsBpnCL9MZZSd2AERBV9P6Ahn1SUPAKKECaU56zpZyDQvwYZWDQagaLs9R7WXnmwqZ",
  "key27": "62RF2jsad7guZGzopmZogvJGXNwqe4dtYUjZSnsMZNJKuF2PFoVVUcS679BWZjuSmiwfBikdp8a7o3a1QoRZJFnB",
  "key28": "5xhuF8hvyte6mqKjXkLBnPHQ5TDoMMq1ykSZwAsKr3Gr8CGE7nfvW5hchLSMkz1j9uK8CxXaRZozqLqXkeonMQrL",
  "key29": "3hn1VRYXAw5Jj9mGzU1gmGRSJBbqikyoT4LYv8VrGkYiXCAuF9PLTyQAk15dWJiS2DbJDqwArr2hYToNNuVcbuYr",
  "key30": "2gCoDngxnTf7fmW4VYQmLGe9rW8AtYPaKqx5SDH1wYayLpWtw34SNfW7wxbDMyZKBL9vynRpotc5KnXAJLsDexqH",
  "key31": "3P9mbzmdmrAMfNGsDExkVvJDCA8h7XToVwiV2NBEht8iVeeYBEnPpFXovSUADa3e6tJMCW7NsW8zZ9Up2cyFFbN8",
  "key32": "2uneCyGy4EsorPFGQtSV4TxAGTfi1oQrV4b6qNVxdy7YwyWHaxQsRS8aB9a8gHtLPc9EJtUTNGCvEeiNmx3Jbwt6",
  "key33": "MLhYgzfd6gsRjPvWmnGmpzZiiEaEtgdbbMiaYVsKAutgxahhRocp4R45APyHdWkYgVJQA33xn93cYbiiRBFY3iQ"
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
