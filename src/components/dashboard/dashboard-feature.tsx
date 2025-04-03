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
    "5yQNcaUSyAcmCqBmonSwBTyeMifAVX4yjNGzDYtCdXLM5PG6f3Y6piAAfqbuszmxEKPhdboRmLbXEcWADrS6ZPus"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jLWePCSpWt2adwa3cWMQQvbbF9L8QVqVU1ZEp1jNXJsUxY5a8Td16jH6svAtFdL9FJiSQHxbbm3cWFtm2QKjPdg",
  "key1": "4DywCmA5NVZAF4U4suoUWZ6TxM5DzVpsbmUk3b25ojErCdDFfb4hKRqVM2ncbRmqbKStMPW5Ywk4uJfw4TMiDXrc",
  "key2": "42E8xs67oGooz9QCt83xMwcBjr7GwZ7YMFm6uHAoU9aiCP7LVKL33mtL2aUGcLpXwZUPoKL8XyixJ4fNWKYvJFoT",
  "key3": "4zPF5P1odFX8su1Y554Ymy6PoSQce1fMPhKApoLjk6isVXtc6exK8U4peA9LXvdqT4PETQ8xZmRXeEZ2dhgDdQTn",
  "key4": "2AkusB4q81hq597nFcQ9LX5LN6eDm1SUgAP1cF5PiiygMhJrMGBZoEL13a6dFxRHeARRFpa1BocoAnfm3gB7StsZ",
  "key5": "4FcieemHK3oWC4KHZt3tFRVZX2exLz6ew3UGXmWABXEjmJQBYfbmYH8PssXC2arCFDoYaXLuAn6onsZ7KfniX5Zy",
  "key6": "28T1iozaEdWvtaRvakG9TbzUS631nGep5NA5ttovqgyNvteXgKVKvLsQUY8Gyr25BhakJbFFzZpGDK4p5GN7HTrF",
  "key7": "2956GDssHu4RVZHLZbKbDVtEbMyWzy8KjunTgu7DqWJQGf8iJTYzaEp9eJg9fNk2WqvbkenUsLBY5scJRSMzpzPX",
  "key8": "2jepxE3R58CEMrUEWKt8TwajqDtJQNX1qRFdjNKwf46qGhEZLn38aFBpdM5QqEKGW7LHiWd1HNhDDeW1Mw6daqZZ",
  "key9": "2TeE8M7ns8nEqDmcnGuqTZZSkM4uTr8T6RSk64vm6Tv18F5HP4sbVsMCTW8EJBnKkZsqnb3bCbbLQ4bAFbNMXWHi",
  "key10": "TkWwZrxQ91Wv8hY5bRvSQWwrrmxsn2mConcH7P5kP2eFXZwS22A4K9841C2juLFKxY3iAbCpzZTmyKDayw8g6GV",
  "key11": "3PbCz7tanPjsoiUPjmQx1fYUPq1hb5suf11B7h1yJNYiKuSFbxecrLmNCo48V2LQqGp3YJRgW3EZmkWPa9RNKL6E",
  "key12": "5xRUUcXX9pyyLRPHzPRWmhuyRXF9zYHQFvEpoa1CqoWmpzgwBZvVmUiYoAqXf96zbYXspXS4u5YvBaGEbnK7dDKB",
  "key13": "33DpmjBS1TyZcEGxZD8yysH3VdGCw5P148JFXVBabEEiCTfH65MKqgn1CDn79gYxn7aEPvgvuTX84zoR3Uyae8kd",
  "key14": "2H3gsHbW8dhZ5LZfsUEXarSm2aaaLSBQGvccsWC1vFEmJEgVdTBWRwgr1DsFUWJQed48ykP8yRd6bBco56WzmVPm",
  "key15": "4DE65ebupZitxD9DD3FEmTrfnaUdCeGeTVdKEEuExRfTrtijk3cALXzZDwTR9JMyBnaovrvxLrGXun8cxhoqYQ6p",
  "key16": "34TpmswVhcXznShUAziEhdg33F1N9b3NGZWfCVypf1b1rUThBTNXraqBBqKr8Wx7YE7fLrXvdUvi95YjXuazcYZ",
  "key17": "49krgKBxszUyPZWSsGLwTKHw1T16KKzMSrVXLKmkzGM7EDdKkakVe5GN4jS56ePu4AEF5y9hDWRDJSkquQ6e9gZx",
  "key18": "4LJr86Wse3fyKnGEUpG92pWBw8tebppyBexHF5Qhnf5KQotbb1unWyDGP7wcq4wqSTC8GVUG11w2Ts7FHMBNhAv",
  "key19": "4HNXb98QxtUSdofTd413V7L71khHBonrxHRsKn5pJrDfbMDujAu8FN7HuQQHYDKjb3YqTmED6PWTeJcribSeQ7Jy",
  "key20": "5nHbUFmBt4qUJqLYVLommAUchVLKnPSwzjoRfRrvzTzthuohk46pcg8koYtnV7Hg3CJw3ktZVg12BXSE9A4NZ3dv",
  "key21": "3o3t9Ah6uC51SLN2U5gxLWuL7ndLMfmKH6v8W52q6FeCe3UAuqeHtsWQM6R1xdHPMkyfDQHeFQfDiRUg3847Q56B",
  "key22": "36SPUfUis6rUeuMHR9f66wRKqui2WHRiPdgnnbUFRptiMUGEJRj1PC7UhKDmCWjNXGxQTvVCB1G5anBk5vfKxPw3",
  "key23": "42KGuK9GYTto8rUJQa5zEn7q27XKRV8pWmMscNHSz7xMmG6q3rxTx794S6yMqK9BKHQ8DcbaEqpRo97UaR618cZc",
  "key24": "TdfgbFp23cn8vWjATueZY5D92XBnzpKMEJPAmSmkbt2dY6kUtipQWKGnsPeanYDgYa9jDe1wMp2y7ZoCd6Fjb62"
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
