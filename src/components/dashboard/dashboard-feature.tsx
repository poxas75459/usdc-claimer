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
    "31qRbYQuzKWJt8tFakvbi25eWNrzRExRuTNCtZ6MxqLXzGvvSGHjXVBMA6jVgpmPG3taiLTHCuHCXLa9puvXNUbP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nyg2YUvC2UcUGz9JnRx9GAzHDcd1tobCUwC1xNFJSJ7EDmB5CQ4QaiMVCnPPVDq8ahV3QxSRRBeDRXPx6y47nej",
  "key1": "PVLz4hXsQFHcSC53NBKqE947QcAMbz16jp6W3LxB7ExYjm9ERPt5Dxje17Nijew4njN7mLBagWhEAk46oDS4bnr",
  "key2": "5Y7AXf1iBSTtHhfX74M2X3o56vKUFvZ88ZyFjP7WbKX8AGBoJkw8HR4VT7hPPdGTxFzo8ShJW2mYw9kw5NGjsqFv",
  "key3": "3m4WZt9VyLtktsmw8MTjm2wjHK4gKyupqPZy6xR9YMGjcMj2RsZGCQEbdf1JYFT87RFDg22UaekwbavUv441tMgr",
  "key4": "3viCJWSH4ov7st7TB6Wxf39QWjk4QpSVhpH1uQXk9wAmEa9isFyB7jnauKLY76ui3iskvoRz7rKwUxQcjzJJjhtg",
  "key5": "2n4vkyQxiFGBXqvMhRaQRZckJ5xK7xdi7XXq7nJgyZ6LARBSvicC382Bve53kU4YhyB4joKPk7h3DNxRXAAnPtqQ",
  "key6": "szWuLSKTiYuEKFMpkahXsDeSDwmjUvqiYvGiudMQQFHmawmuBdJPW8T899tQdu12byCvgNjicV3vywLGBFje1gg",
  "key7": "3PFmGDQwmGeewBroSQvaQ2T25UgS1sak5kvzM6yTG7XEgyRsteR5i2FzRw8GDYbJm8XvgP1zuxEpUcVacZhf9dF7",
  "key8": "5LrwB2LWS6nSmwmaMUhFEuJf6egrs23StiprLTEF1b7LidqBsrzeA6WpyJY7QaeNgPWTVR3FgtQMeCd9Zq1vuQT7",
  "key9": "95nxMfroMJs6tkWZ4Q95hWtimsTxbFvkew8harbnrf9iYuopysiPG3u4QRsRQZbP5xCCAW8fh25N1x8pU4UujXK",
  "key10": "3ePsppCTXRGZRr1Sf4j1ub4FaNJmpoLw2BJQmPJ1826jQiXg1EbJ9qNVgFV1HULvtVwtzXZWC3araVC8xK87Vfhx",
  "key11": "2hmFHnvxX7zuj4dLSkzbG9CsuGmBZYvf9762ws79AWVFnFAnN7e9fVy1TsopyqcGwbcqgEQH2hGFNbSRCJx6rziv",
  "key12": "2NqHTMAYpxggUQwJNg9ETadw7aLhZTjRLZuxW1UTr2xco2nectg8oWeoqXPSjvUZMAKfXqE4aoupWovawk1TSBHA",
  "key13": "2ta4ugZze1p94keUSg7eoqy66m5oaEvKfwvdnQ88gU1yZxwp18madtfGTjiAvTeNkLt97zyPW6VkvC7o7s2trFEZ",
  "key14": "5ae1j9bVcprbXftUbZNGt1CQTnq31nhqN93ssRzHsgAVYBqYQ399k9jfqHLJdL9mtzSQiun1tvWdhkbYLViMPtQy",
  "key15": "3KWLmY7k7LAbai6R4UZLpKwZpwdi2RKnixmhAboMvC1Jq7JaWhcNLY4minjNNFV1SFDDL7kfmN8RbCUvCvjHgTqn",
  "key16": "2fcDoKemzmUDimoqeuy2rwPfXTEse585ZkWi3JViVTYxGAf3NNFMjCvV71r9vUTXmRRRdZEApcxtpLEp3UMiMpAr",
  "key17": "2Udv7B2vrxPyb2PTtjMT6u9BQyvjkfS84t7icyW1iY4NJh9sQfhzdnaJX16NLQiNh3Q7oAmV4k1CfjdJaYptvRii",
  "key18": "5GBZv9e4khARDoPEvCM7hDu7RoH7ov7Gifzdk5cP6WmN3tNZ6QrGKqKVot67rANW1hbC2e8dmYau92uoxP2fE2Xh",
  "key19": "2F7iTxoG4zqq4h9mMTd8ZfGiswfVZfjVY61W5xqoRQwM2mcDJDstf1fTPWmfwP1wXWskk8cPuuPcAtVskgoSzkmJ",
  "key20": "3dTapJQzUMszYxHNqxGgtrwVgMmyRxWRjZ65dB2Ffk847iCaEWawwP1PQJvvw8DkwQ2aidnx346bj551pAKoiXSv",
  "key21": "4yVqzvTGeEUL7YkQZ1HWnrPPSa79DNt1ScbJXuKnzJcKDuvFnjsg7wSCuPLrkgefQ91AUtGtv4afeL9yGXCotd1c",
  "key22": "5sK1CjPbQNcxy58m3GocJnNeEroAKWgtNHdigLdb9Fjk5NqaobpCHB8XRX6kRmkX8jXrJ5YAR9njGHnegLMbsgTt",
  "key23": "RoGYLiF39DLAK5ioYzYWyApATLdFaWL6XJtpPFe7s3DHz3p3tQysvqyVUDMn4dd52sqRyRzSdCQ6QpcvA56Ybq7",
  "key24": "226dXC4dXnEd7HLckqNMtixbhLuA1zfwq292GmDBqH83pZBXpH5f2BE7KRiwBz7LMm5H1tFE1efzyfs9AYxSH5xg",
  "key25": "5hmL4LsFrcJe1mw8f6iw2jpf5WpHhkSdoQofQ4DozTx8sXfTPTuqnhzE82KoiLSKckK4GsUpjsyo6JXY3wT2BLj2",
  "key26": "HcSMsLoNzM9irnyySJFLyBSiJsgJ5q4SJEqiAP2egD7qQTQ9TW17bSQNJz5t4Q9TNA9iXMypfGFjWmN3ByGkMLD",
  "key27": "5Gaoqr8mipoh5wM8BoXghrCnWuuDQmGLiBwBdvmRSaYY15ZgFhxxEe7a7ttudGXSHENWBWNhiVmRMXU26NZNk7Dp"
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
