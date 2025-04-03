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
    "5Ax8mtfo9RHENmBoBwrvGgdGqob4b8QDedJLQsY7te2JsTRSgmTBEJcZWf9r7ueMwmWMD1AzvXGe6du66LovWxkk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64JrMoArAW9gsv2qqLQpCWFPZiFh6j1DLyMfJRUQz7fVoHdo3VwntrNvid8aUsdybfQE9LJg6kS1YEk9V1dgv2X4",
  "key1": "4CHrAmnL1GXpGNSdyxNJfWcFh1XrCUgnTNWdnjgm9cohKny2VHepz87YCWo24hXctavWpxHoo6MdU7NmbMdyPXum",
  "key2": "3Xda9tZpsdeZMaVazm3K2RE2Xamnaq7XtbpTEmkyrVw1nhTV33qEotSgFUgeAiPCrweMdzxqB9D111BpRD5DokLJ",
  "key3": "3p2pPxQPuwuTkRXGkvd6hZHuuMgnMyVMRb6zxvEd3xZ3u9fJQ4YixkxZ3dZzNF9Es4uFrSmhLmbmFjGuXEhYXcyA",
  "key4": "5Nqymv3c4yyQxbBWiMf8HhQGSMqxYz5ogT88ZnEStpp3k7CszNKPdAss46dvUEh6hQSFsgA43emZVNvw4WjXQM3x",
  "key5": "55KrLS3PqTm9BCQtgsz4DEwcdj5ab8pe1VyACETSbud2q1GHbYpo3ZSXrp9peexEkh5aqoAwWK1ioSUT6iCpwLWg",
  "key6": "5x1bfi9ZYquRiskCAgraxqC5jfg8yYTWQitq2JoR3CAaMJHd6r4SqCRF55cpSURoTqBp2SuvYUTRujxB9MeDW23i",
  "key7": "5JxrgXDKL7bLhRMsmoP8ZU1FzfjGAVX1hCfQ4v97zBoQKeqcUT48jZQP8kdkU6ewK6Z2DvzTPdjC354ZTXRUWssm",
  "key8": "4e3NvqNNSWaAKMdTnJZ8n1pYLuhpyH3rdtqZ9jmUezFGxGdenYcHtHmApVtg4w1uYsW8M43B8fpLU9CxH3aj3Ef7",
  "key9": "3nGLJNG8gVFnbekNKi5MdigWWckmV6s2oxHXwxZTjMzK1hSAoaWLYNPYbU8y5XsTs6eHmXGzJWHDuKoDWoXM7WYv",
  "key10": "4zr2aveNWSKifF4h7GCeiw3dS5Kygsaj14nfRSSFRQmV6azT2rcYQaXsXjuVyV985ZgNuE3p3FB4kS4cYiR8MCJu",
  "key11": "5V4zPfLkawFoTySYnikaf5gqfvTAakPve4Ltt5x5UQbdGz1QxkgAPMrG1RQ15fHYXaeo9Swhswrb7fJybQM78Lm4",
  "key12": "2j3xCPeNSFrUEPhKxkpvxXFoCvPw6V76T9cBDS9FpNxPHxMhsFjxKYs62riyNayncdyvdRqYUnMoBJoWBK4SBJiJ",
  "key13": "5AfKq1vk5YGV2Pn4VbC4zahdhChAEuVnXy4SnnsEiWEpfiZTCYmRANS7D9Qi5kqVbFoevYvoJAkYGtYYz4qDBKNK",
  "key14": "3tWpoARft4D86gok29BWmzT6Ajj92HttrP3dVVrV5B1YWZx1pZssReb5aeEMDScY7bnFoR6F6KGWnfQZXCBiwXyf",
  "key15": "5xCHzR9PGzrzuKJcZx1GxD2Wd2ufdiUCrwUM5SZxwiqDhdu9EoEP5GQ8Br242qrcQhT7Su4t3DJSf5qCGVAV5esa",
  "key16": "EtUarQ8WzxkMMUs1CJhpbUE2qg9g6nxSDHd1xFX3xyRu3FXYcJXoiJndXty89jy8AsVcWXFBWFEw2uCUfXf14yF",
  "key17": "CPCsU4GsGiCaeKhqWxCDsJFPTGyZecqyxTQ6U6c1PcUDzwZxkA6YBZbQNLohwC4wSrEWfU5mCun2mxNj2R414CS",
  "key18": "HdPreFKVu4nhHq8HxaDFjDrihs3AbwEC2EdZcdRAYsiB695aMFmp7aKkaGurhpEYPKsi5LsFo5MC9TRJ6pdSmYp",
  "key19": "3EoWwaALi71m3QQjRXyPeZvKKQmGp6bovgWt6CAH83Kz3XKvpthywWWGpcJEHeEimqw6XvFm2MBSUkj7oqcC9NPn",
  "key20": "fZJqz7Dp5poswPT8x8aRHzKcvKGZ3C65QhqsSugyrmADXYxXeJMBqUJNaSaySbp96By8kunQxU1xNdCwHaRde3C",
  "key21": "CJkWzXbRNoWP2fFAUzYq5j8eKUWXXMti3Jt3JjSp9FYdHCouJWvYabttKWcmnxy4WAVPs1ifkX2SNPVbthuaQXE",
  "key22": "5uGWTnCst8dNnoAPZNHYbQbxmfaEMMdYJbm1dPVwMa1nbGzMccwWpkMs1rLPFbzCr8wh4CvDddnmCYbhbQpRxk8c",
  "key23": "2aFK84MagA5gndJtnVDYL3Bm7qYxuJNq4z2dNZGArn6JobZG7K4zaxMuCpEQWyFUcLHj17yXuxNnKfw6C9c34dzQ",
  "key24": "56xumnapaW1D2i5MFQGu91SHnbjK6R9hqMsZe9QCPsQHksFunKXKJcaY672SdH7uQeYDfpsBHT2kHG8MJWpUtnv5",
  "key25": "39Qu5imph4vAmgzXgKmEYGgJGc228f4tAYESRncvWqMeV7ayUjMpcmCzFB8RSzPNQpPyRqRmU8Miq13LpTqwuadK",
  "key26": "39GuYxV2UosSSbHmKbT3mZmWBW2SBrS7TZ2WWKmBncjhyLwW8vS6FmLMKfT9KsH1ndnKnV11guGwWJQh2j7vKoFP",
  "key27": "3rx2YtYN3VxLNa5Gzor9X7gvjtyrkrXcNfrcJnXhUZcvf9Xr4G9CozVNdhgeJSk9A7TAhtsjsYGbDhgGvjwdDkaK",
  "key28": "L1Qei4AHrX9GgxKHJNxtfehMCWAgSPZsuUuugtNnxkn5VWvVTnRvT4ZcuHVRaEg5wMt6W5rc1f13nX1XiSpQ3ZT",
  "key29": "2NkcAzSugGDFLA66eHCR9HcN5SoNKcYp8BeAPcxKYVk1cHPayp26jdzSDVpANPW3XtQtrwuBeUNRrWtAApSAvpgC"
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
