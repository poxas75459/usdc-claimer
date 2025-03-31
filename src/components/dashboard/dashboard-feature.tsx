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
    "b5urEmaJLeYBngBEL3RTdj8RjFQCspTVM2S2z6bzREKGKfoY2Key1Jun6nYWVpLmvj8hZv8pk7XCYf5wrzDQ9Dx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YdZTxLyLaHt2wT6JsnVDu2kd4UPQMxL35cDbrnJE1HbujnFmFTZ1jRmMPkzdyMrvWZJMSAZVsADzsWmBGwQT6w6",
  "key1": "49ufFP1Rv4XHoM8Q22wgSGnGtDaUXxsiWtNYC31MFfPrQKhhnFzREhPzKUVsVSZu5bN3tya9R6GLcHQqF4E51Hji",
  "key2": "2ogTYCH3KjD5f4b84BtNmMqryWwofrp6rwY9tPo2CUsyYjRSz3XzTKvJmirscTDins9YuQgznPNDjv4J9S6fZKZd",
  "key3": "2gfXwtNAPNWxarKWEqUq5DFb9wF2ySGuk3yHbkVF9WmTahN5B2k4NAeN8L3DmtXdpnspVf8BWYcwm23r8qAipQLR",
  "key4": "3dVNLb5uwT1boUcJJR9vB7P1yxmmsSLApYzjAYzaUMg6oLsMfheCgBBp26kUrgBsbHW7Apd5cbhJAXrppKwJztBW",
  "key5": "2JrivY51NcR9MkL9xCapxyMPfeCwQU7dj7a7CkrH8LjEpgyhoifa9zF2r1GE9aK7PQX5FLefsbZs6HN8y416Q5fr",
  "key6": "3Bwq25kggnDUyS7vhKkje4GyqmVza3mY1g39tHwMA1qN1EkmYQbQhkyEZaKsbic1bTT4TRcgYB9ofwEsfN52VCe",
  "key7": "5qTdRAXy5ppL5TqvbaUq3HbqhjfZQco1rjQnF8QmKaS2NZoiLzNt5ZrCfTsiA2G3hYWUxwyDRgJXS64G9F8GBCqs",
  "key8": "5LxdUPWpu3PY1qxNeXMvHSaaG4hLzAu2D6PMYcaGNjLkhJXVmy3rHyA7hJFLg5V77ybnZJrATebkny2necq545Vh",
  "key9": "vGLthWnzgU9xPWyoutbQGDHjCfiEUnm1zpbVtEnA9wCQi6FKQBbqDfuSCFwKFUyq5xtwgK8DzjjPkduMX3Zm2Dm",
  "key10": "2mmBFYmEE2nD4mhcaPHnr9ybSkickhz5MKuxZoKnYzT7ac8vLieMv6LPQcymHoWbZyn8XDiBM9dEFCBJ4cVvFcNB",
  "key11": "3G5M8ihfaKrpF3VCSi6QNqAFhrAAHTXGvF6SoKiYft3SK7GfHPrU3fhMuUhTdMYbWBjqJtnQ1ZmBZ49b6XkL4pNm",
  "key12": "5T5ZKpApki44m9NV9SX7YEvBGgDaqEzz7nQHb7wZwWRD9zUCGgPBLpzq7K9nVabxGgbeRyas5PDsY7UZXggT4NK6",
  "key13": "3DhHSYNZWzsCEFQGGv3fPsBb7g5G2sAHdbS7Aww4X87XS8xv6fampaxLPP19vmE9w1o2G8s2iBLxNYTvdiQrZppN",
  "key14": "4jF7Xb3vS2xa7Fbh3Cu4XS2b3BFTnKApof5yvMXPXH7UQsruYUpfDqrHvMYNhh5vkVkM3qQa6uuXcphNzC4p5Yvj",
  "key15": "4UxPMUTYq2otyd93dJ9RTXF3fXzZqXKL1PJdgSAstpgQRCM8iPbDTzscHUwJFn4nbSoq2bvcVsLmYK5fJbmiYmSF",
  "key16": "8ybeg5XcgKUmV6hxNYXVDNHNreWq9nwj7ESWwLUAN6Y8y7bQ35RXV4W2H4xUiVgPmgKHiKoB8PtUXgaRPx1RgF6",
  "key17": "3g5gk1Mzz3RCtvHMBDFNW46HNkUZ4CTmgtBt1G1LQsNbfTup76b9K9N6ACwVsyy2b4b8ZrwL1ben2WAjiXDrcBtx",
  "key18": "3AWSy5AYKio6SKpbWtsDBhkkPQrPhRpcMBCnMCZEBW9dqvBaMGF7EfkbcobjvLK7dY2QtnvsxHNovheesQhNjuij",
  "key19": "4A22ZubNABVZF9ti1opzwMqt77zLvpHzPTDWMNt5fbw69FudX2TodR2W6pZDcSyigNAKyebRqd4og4PXj48YDY4v",
  "key20": "4QhS3vpwumkMzx82ZAA15ZqfNFuLCvf8Dra7jyAxz5AqdguDZg6oDvbN5WYHdsYAmiqG6m2DbX2cuHge5RUmYoGo",
  "key21": "4QKJLqBvBXj3i5iatms3GxcgZB3PNziWy19zUTN1iUsAiCwx3mtVU1iDYcixxgaBT9qc9UrL5rLCDjF3HtdFew6x",
  "key22": "3ARJkJyFaF3aCZdsgtLjiwiFsQxkwb3LNyxobaLn6X5iZXMsRNz32Y18gT3CYjRbrPrtjNvxX1vxUmdR2hj5y11n",
  "key23": "ToEAg1993WRi1MJvvjRW3dj2nRCCoRaeC8iLBdwJA7rYEBVGNJ87tYBc9vZFYRmogfkwVY31c1cFjFVdrhxpybM",
  "key24": "2twBGAyRtXR4HPQWXmySrZoubxXfKLBF1KR8VcxsefViKvGpSThqrhvjcWbRZdkFoRBNLrmbg9RjRceSB5h7oiuj",
  "key25": "4vEsTWCbsJRMFWec6KbFeecPU43B26uhq2VhyP9f8YNRfTtfWGK8eES8Prprqcx6p15qFi5W8W8Kk2Mx73v7HtrL",
  "key26": "3SCuazBFpot1xZaRPwyhUcr1frvHvtzt2EZADbkREDW2i3iW2LDaw17U7La2uqaw9uV7nmN117vLhHB9LyrBPst8",
  "key27": "5JfJHgbpg8BkzZ462yPegPQ9zBvBDktzLVsEU4PCGmkSQ8g3mVDPnDCFjwSWG4eV3Jsn4YrFrtsM5Av3UKKeMNRL",
  "key28": "5cP4yGKRPqqA4z54ZJq8F8LetQ7ZVx9UTPVihmZ1jJSL5k1VyBybrT816F9EmmPToP3HyabVNV9kQvD2efUCqCH4"
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
