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
    "3UHdFsnqQWHc3B3DsKbdLUuDxSqU9HA5QuLZrSfzf9eyEDsAmExrCpWEo6i6AwTpttahXTrEm2DiYbqhbKTJ35Mf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GBm5n4aoCid7grGqYtFrEwipTEttPMTK3akbNEnMPzYqhbqmZPXkQT3sqE1q2jj96AwoA2DdYBJeTnsqjfH6Seq",
  "key1": "5GGj2pdDT3m1VBF3SVZpRGBGaNRyqSTKS774uPx7HXSvQ1ak4Cc5jnD9U6Cfb7G6sGG2gJBPtDkuTs9Suq3Ktiar",
  "key2": "49preqpHCCnR2x3P5jHCbszHhNCc19vn9x2gByT3vLjhewAwroJFfxBvUZJdm2znZhnEYTYqDha8VP36MoQerdtU",
  "key3": "37BrwaN4UEB75SXRvwAVsTYiB1JwVUmw4KMDxGf3BJZGv7y4QKn1rLeP6YbjH4KcJ6ddLibMEDWHae7m28ZYb5gj",
  "key4": "PpqQdCyT9uSZWYPjXaqY1KVR3PYVipAEsn5mjvHPPxRF6xHabUYvv9iZwABUgdDMXXNk6gKhhW7o5LHtokHLAiJ",
  "key5": "3icc7jyUsFGCsewtXzPHMF4nxQCUtunRBA3KRmQvXXqWfpGn5TCqMcajSmif3J7c6tyet6DLxd1jGwofocwLtz3Y",
  "key6": "3RYSYpxaE63JPm9HSYrwcTw4b3Rhh75mbr3GfKiv79iQcj5un8VfA1p2v2QRzK7biJ8ZZgUN6yHGMgTqEAifhiGE",
  "key7": "QRUQMhNyTkJJKTnA1P5SpCSbKi4y59uBRfEwFmiYTSXjw3tUNViX5C7eS6JonDv5V5RWbVoKakoV1FLZg3krZzW",
  "key8": "65edu4KreG7ViubB7hQsdRU8chqgYwNLt8tDGhEqgUVswAAxLTUK7hUbjtWV91Cd1rLopvGK5szcekBAczda94m6",
  "key9": "35TEmYKufB8MQKxsYJAaS32q1rsFFH26J9chsDWcRPvHyf3Zk49kqdv3tYArc5MSjrEeGa7iuBLQb3BBpYrvPWBb",
  "key10": "49mwTwhY7QpGgZd7h1mojN4Ve7P3fgCYfihHcXDaSR9EMyTieMD4Bz8pQvhzhApB6VfXHrKDu4dmsQwbdMj5pRaF",
  "key11": "4xpy1PqBbhTuvMwEux3FSWVEeTwrZ8LRb3VpTmjEoLakjrqZPxAA87XozeSjqqvQSVtyn4RurNQRKLncpm6KagvU",
  "key12": "44K5W4pg1jj8ZqGLnyxuaJ2fsb3hpWwsnkoS2WqYkrYDF6HrQmyWtJVo2eV3xyfEEUD87mibGUyuhbQGM368rUCc",
  "key13": "4ozE3LQGAcZMNZicWndKcd5jA5mTmqHsZEtw1x76Ln7BeKFWyCJijSmeBkL8HXS4fdouJhmWkxPipiTFmcAAcz9M",
  "key14": "4Qh9jteyBtBJHtf7k1K8stVnqxMEuVJKvRMxXRNnMp14NgrY4ucZNgLcKTPLLJYmLPqVQNim1WUimmAjsvXWzsqY",
  "key15": "MyadqMqPri73idbBdwvRdzYorEDJhhrr7qPjwjBQSH8EsAVhzYsqVQChHjwpJEg5bYppw7DhHoDnmGbkEecX5n4",
  "key16": "2Fh9nDqHUZJ4GkC5apVGDX7j3DoCiLsr5NmQzQr5CsyDyP4qBkVPuZmEpJkVqNXJ3oEXxVBenK9M1U5iByo17a6V",
  "key17": "4Y6Lc1f6SrVd6kiEpMTssSD1uVEuFkqsTFSRZAWxEsPUz8QZLsEigC9pXYcVjnH4QEgsuBzrrduaZCn5x4wpMLsP",
  "key18": "3dR32dyj69jvH9Fg3NBCZAPZrVSfCALcLbbWtYgaZ4tJ3qxSB77hn3drzvByz6HFNmEWZsMPqery7DULaJjDbaxu",
  "key19": "4E1kC2pPsDGW3frL3dwf5XySAWPsJhmgsoQ7NEhA3DkuhUsXafwMkqbkTsQ6wEERsK7ykcEezodAhXno2hPT9BUv",
  "key20": "USf9Bx7ZnxNuYnscy2LwdqPkGKxZ43PuQbDVtdf21BaYzRgv5Xna9Q4Pvrn36FhU7GVBHn9uhFt6VWGMSppYr26",
  "key21": "3BYh3edp544QFEV6dc1z75kbBf4twhVDDd52WBsKuN6gLxnsJixQGGioHfEfvYrVUGHq9mNktTmEVKvAZd6hEzbz",
  "key22": "4oPTa2a3xw6VYw3ViV128ckPezwv7yJVD9bGyen2gvsdEZDCe4DMaQQ3K6XJB6rmV5dTFuieXFwBDzKnKDu2Kh7p",
  "key23": "dWMw2ArDoxjeYD3EAf1YsJTeJCurq5Bh6Aaj2uQ3PsbETfQJ13bHQbzewGSiRMysCQdSS2fdRPR3jjonpuNjuMT",
  "key24": "4nRRxZ8fjYiZSM5phNSLJqX2nRAX5LhRFftfKLM9vECTymdenSMDZ2nLRKBTjprTMRSsVkk848fBFRYq4Y2xgJUB",
  "key25": "4dy7pLp1EeDPcs9b4TSZfca6K3EiSMT79vSJNwcHs9XXmWzCyem9mWveNZSAjtHD8RbcTRCX9jDaMQr3ngHEsFdC",
  "key26": "59tKbVurgsCzET3ipn36BtC9hosMLzYFW6EHqV9FZbPa5dpj71tacvotfYScjXLszQPCmjXzCR1PJgdrRcpjKJm3",
  "key27": "sGqiiNjne6eLEPbGojHYt99xSxovuYH6TtSFxzRqUutndjqMMHJYYAR1EWTNyazmCegcSUPNwNREK2EsL3dpBWJ",
  "key28": "3Bmbx4Q6JgAUF3Np18nCRWv3gopJfv55kEHyPeT5b7nAMtTUaduDNrhCCNRtBYzBhLXQsnuqJQAhjbFNybev4RRf",
  "key29": "4vgS7ebiCx7vMvzFvviDgTWcZL3834CcepFLRhUehnVZA8aNi6zdFs7XwGcHik1SAfENvKvifTcEFiqVfxUYBRjF",
  "key30": "U7znoG8F5LTuTnHSvbeENX9MiVXNDgRrhsZe11Azag7NNiV62xijYnX7SwomNJNZd8p5Wzi2ZDaqmFfGBtwtCTi",
  "key31": "hUx2fASkhesWfL7npFnxzRPgtzGQ12CzXDnxscHmbn4Yc8zXVtBReDctGgc5aLBybKA8Va42gTdM8PdSUyCqkRD",
  "key32": "5H1TwJjVwYbAyCsREsT9kyEJG2GVENrv6BZrFZe6MJ44qY29CckniaCny5vaDWcxTYMXjaGZHwwCgunKRGDaRFFE",
  "key33": "4WfZHWuuq8ShrXEDd6oCN6tcxQ2aAFzAHvvzz7yaxZkknqNLzWigvnXmzLTaFuYLe3MDk9X51Nnua8MHo2z2nAwU",
  "key34": "2ZwQeZUi62kaM3b37MkCYqB89Qf62ZS3AFH4GgmjRzjEtRMkoNTsdu1m2exvsqV25gnK5XohCxtWBDSe2rBj7r4n",
  "key35": "62BiYWTJGM383bjPd3ty2xx3mtZxQ22SKvVmJV1yQPV4dyXQ5TX6upjZ4mnVcunA195gL385hoSWk5nKg7yQDVqi"
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
