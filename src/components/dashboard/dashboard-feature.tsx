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
    "3ZABZbYhpiBGZ1LpxrehoYiBssWemCE4UBSS3SXFhyrDDfE3GchZx7z7pF2BNUC65XsnFKekfksikygJfCXeYgEY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HH6DNKBvoDbk6a1HQQFoRsJFzvEcCbPcXYDbBEBpcC2obD846WXxsAUERGDF6L3Vq7PhaX6eoLegZf8jSFGtu2N",
  "key1": "EPDk8W9KXUEf1FnUrGTKBJ8BgEygHpNotx33rLJJGtpCadqs2JrwttoEKYT8thwHsKn2wftjmUi5GE21UZZC9H2",
  "key2": "2JUxyi6Abm8XCXvDnY8UrdN6ec3TPhw3pLKogE773CgFfAZBb7LNLw6YpJGxkugPj8mh1m9pH89x2o1oE7dfBTnH",
  "key3": "5x7KmxrD7iBoe9V2TG8FGmshKM8w9fqewC4bYuk2WrSJ5UWD6bfUAMCwA9b9L5qgsYRWtugXw1LQutv9VK5oSYdr",
  "key4": "5xreJTg2ZNctfwfHvkpBfoRv31Rnab4siBPn4EAPiMT2xwrq7BAAbcjmQ7UkPpFRJtooKhjBNB4gSkwSiYCf6WyG",
  "key5": "HUNDmnj8wBYj1ihxZA4sD1zQQ8zYGrocNKeivSBXDNPx9GsnSPvskKBah7HdWjndqfVahgcbdAoWMNVhi3mnhjH",
  "key6": "5QRfZ3j3643g2NTcigMTjvBMEwqn4Zzxq2r1WxT2HHUkWjGTCwtJGRTc4UtTPkYN5qg3cG1Z7Swua7YSCCEE9wCH",
  "key7": "mG2UmADRriTJJ39eAH7CLEPH2C7hwSB4nJRK4ufQ5X4vP9wa4xbyXAf7cJEArubERhkcidMNBeA2qpK21RkYkYt",
  "key8": "3Jgo4UuQWBmYHTGXsh4CWth2CJgDGGWN2YrBm7gCZ1yhGTYW7PAEPCkiuneJzk9fnkBd4Xz1LDxmmBQyGa6TcvAd",
  "key9": "49wzDXrfYySZx453r5jQGxFyVYpR7o5Bdmf9M5mkuT1jebxvy23WZ2MHLs2XU6q4ZCKgzTL2Fx2aoCPpC1NKs3xe",
  "key10": "5fJdoCkMNiycADZ2f2a37vPMWuZnSxCeGMfBffWeFzc1wk2mEquvggFpsXbS2K9NNJFdniA1RFPdz8vjUDkmowUj",
  "key11": "fzw9radbpq8A9RkZBsRN89Qd6c2m9Z5hCJGnszhKtgjv4ei61ht4pEjNxN6aTUYf8mkhoZZmh7uR1Lq1d329Y1d",
  "key12": "5vV93vnaTxykhecPDP4Cdpu5cDv8oqok25osbWYTSGjp2sd7kK1Hp71Rcwa4qPEjCRVS43KCwTxWYChNYTs6HsUA",
  "key13": "4tzkixtDzr664tXezSCYqBk8bw5yoNS9Z8V3J7iTeakPPMLTqdZ6QdJpezLwFE538Q64T3kzddntCgFGwco4nkVJ",
  "key14": "4PYDMm2CkekZJUfFYg5arYyCyrSrVyEJH4QRbcwEEE8LVyi9eRoSjPKjJtw5p27NP1xDoNrP1jButyXsDqy9Ccq3",
  "key15": "2UwSivMAuZKBeNwQckSemqEyny3F8xm2K3FT9c1E6cYa4S5zfsLoQSFP6CcsXkNvoiGAxJYPbr9xE5c2Yv5GkDco",
  "key16": "39qMYii9RP8zRRNYWUMf3k4MFNQZwon9J54WSLqvD5sahE4XyyrSfMP82F6ib2hPvRtygprpSjjon2hn3oRmtKQL",
  "key17": "419FK2BwRanjVmhNCvVfJ4TmzaWqPgLyCE2jZUXhS8XaoUutvASbpuMHWaoFViydnbgk4o5dsvfzhwM3XxpyA8YX",
  "key18": "5bALEdpp5nK2CCoNAWkMAgdf6QvvvageeMUU6y6jDXKugAHppe7zhL5pS3TJUHiAehrgsGXELonmZoWpHP4M2X3b",
  "key19": "2EH4WtyaeH21jwXFezAtacG8sKNNJEStoyVRJCGRRHmUyuPhU2GLjkuo1qY78NFDEA4W9fGrtRpN9fww1ufoLXvj",
  "key20": "3URBWN3iw8wbc17boR2dsNh8xJWEz6oij96EfscJaBvHC4Nbs3iSit2WvbQJ4v8D9x1ikEoatnsWjq1RUoKnUwBP",
  "key21": "9MoJtadycQBmkL51MQSpD3u8S23N5ccbZpHQj41krFyQVuCfUDH4iJg8DkfgmFyDQu1hUJFyighvHh9xGKsduCX",
  "key22": "3B3gzXAw9zSqWQJ8HKa7nv2pC6R2LGy8M4yoAasbxzBYEmXbAbbXYfhnHsnbvWi9UHWLNpxPz8qnmm46zTkyeTGZ",
  "key23": "5crWbn7BhABXAsuXXPPianu16iMb2S5WCw1EwD5boEu6fDJCViwMN9y1g1f4N85RDB5cq38bPr7BWoVDRr89rnrR",
  "key24": "2CrQAWmp96ffGbEE8MnoZQ1i8Tx8Nj8cLghtkRGGDZ2sPVommGsRSzZmospwArdq4t8GfEoa4eH2pL7Kpr2FbCVV",
  "key25": "45HG2V2S4srbxsJcsrcQzdt873MVX2PK3GeN1G4aBfXqiL6PjeWuSu1tvZZ3Jsz3StZYGxcV8VccSmzAwF9RgDeX"
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
