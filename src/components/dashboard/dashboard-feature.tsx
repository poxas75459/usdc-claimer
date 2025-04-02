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
    "5ALHX4ZByApg6W1knRm7e7pt91HDr7LdiRyG91XhxXkzc7XQcGHXMwqrua55exzjVxVh5MioFmbmHbibvomUhT8h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QzKf6VjmdoXbbCZjXtWd8ojU6LQuP4kMw3H3gdRRmAYByCCnUkx3U6oEZheA14jTRRCyFbTqyrZo9gDznRcNvY6",
  "key1": "8mrKgpYZanRYGrkoJckfjJUp4HyZ4N39sicvZZX5hyVGXDV7iSx1XVBNN46aPGw6s83VBwg9avUxrTuLd47rSkm",
  "key2": "2XgLWqCtuXTz1m8yhTeRReaVa8hfSCLuN3oEjFjzRXDSP8JR8EbdcZLy9dJFhaGWCKAaogPQtcczpQhyzAdEkTFy",
  "key3": "2YgYWH9oH4c9GeHP77NfVYEh9ry8UT1ggiXoh7A66QyQb8DTsmC3tfDfyKwUUQKSi3PaGkyLnKMSbnxUbcqqcWap",
  "key4": "2SWkWSLwGde7Ci676L7Mi79Y6ProJz8tEYu95B46rDt4eYriiZcHFSDF3tDE59xYZAKZd4axivXxcs9CKNciKBf2",
  "key5": "5Qy3bUKnHjaMJhd8yKe9GH2NNh2ReGa3C5PJD9MAfLSuVpayLZtMiGzxAqLCXWb6maS24i7ZSZyxp18Zjtv1WzaP",
  "key6": "3ccqhbDmgwYMpWp4sJxPSwsEntVGCSweEqPgBTn8VTQ4hHkn4vryeNUpFXtyLTJCNeak9Xef7dUxNLYWnhLR5Vy6",
  "key7": "2xWiqufUkkt7Tm9B1ibGewjsfx8c4rx6vfWVhg6GKfaSdo9EksrtTbizhGL3YyKMf44B9ioiPeLUGzvCsMJuw5Uf",
  "key8": "q17eiaYLDXCn6nAcViQgtAfCpZBeoDErmMs2mKWmq9c7cvFFNg5XJiX5RUFhhrPu1BQiKtrFXUaSvPnZrXeQfis",
  "key9": "4Uc9GRuB6xKiuX68CvnK8oAkyZ9S6oSjWfsaSNYvnk3WnZQvGr3Z4wyce61YdHGkebDqouwPdaJirnsNZZXbvEZR",
  "key10": "4MtXezxWBcGyrA5ggz5qtXC86w1uxecw8u1fRZ54Hb3JgPrPSSzm5TrvmbU5qmy4tfS9FcxQ3NKCNfcWquDqRC2U",
  "key11": "3vhURVcNaqQJdKK9oSfjoiwmHDcxbhdeRXoexLCXk5xBaqQqjMeNriMZU2SZFHtnp2ey3k5z2szSHFhDPbHAocMq",
  "key12": "3jFPSq16ynW1LvM8uyejojC8YsvjMwJibsfcFmJy8kpchTb7TjFT4TLWYRuaeReyPpGyrfjhLi7ZtG2UXT1WqUrW",
  "key13": "4a3eXZABU1G1BwySi3kdmXR11dSH1hzH7LJSnLmwvcbWLsiprbtgAVjNsTo9Bf2KdcWsJdvyhEDB179V3jQZ8iMf",
  "key14": "3r4PcTSZa2kpnrYWUbHxCX1ESNc3c9jwZLWy2T6jjXKidDZZVvEjbaxJYw279SqaFfSMPV2gnBxZ5gi2nfmqj5F",
  "key15": "2G4cHhUHxDfwqDFrLh6v142kBvYwRtpb6YVbGDn7gTyRMzP446apW6roPRGnFk51onibwtuHMpcWw5xEk2AtTZMM",
  "key16": "uS7XrE4hkGTmu9Gv82VviKza2eBVqgoUjpRJCxzvutjKuqMVxebpVws1WD85yhGQPusMH31Grq3VMvwidiDD2L9",
  "key17": "LZ8vfamxrYZ546qVqv5xcie2JUFKc1nnZ3uubVbFTBHz9ZcXuys1qLmjvVxcEd5v7A4wmwm43pGXyCUnBhATaZJ",
  "key18": "57T1eEXZWcZ2Sv75NmGffY831cL3owJpju9r6Ehpye5dRd2q22FS11p8nDnR94Tx9ZkcB3se5TnxrFdW8y2wk7ou",
  "key19": "4eyL4Wt7GrZvkiaecDPmjz3ZVWXBR5EatuDiN4nfYZVffethjSUcrCgj63xM2k8gP6i7hA3uhuMneNL6L6j93rub",
  "key20": "5WX4HY1HAwEvpNCDHiT8M7x2S31Dr2PGHSEHFV4ZR3CteYkV5TRSyAJt1FaWcQB9WLXRw74oTU9yGvKLe1rKxSGn",
  "key21": "4xCNCxGHfaWgMbBurwFMrk6jF2eQ7GCCUenGiRQtV4pSnDazUf9rqNUFTLNDt6sUr1AwAY3U6qMadX1fBxAhgUDB",
  "key22": "2hMgu7WnuYHAqBDQ4A4Hg9nTpmi4ETygfwzfYgMErc9wKuQuVyCvGie4ZYmhuMBeFLav172Z1kkFMPAYFUjL98a5",
  "key23": "6R5xdkQ6ud3A9UqDZLhyy3iMsAFrk6NWQzqXmz66cjoGSJMDxAAzXzrtsZLSteAXnDd9DSw2ZbufGVWdppTYWQN",
  "key24": "4gV1pH6aqFSLED9AZJM4z3XCunidXGQUhqJEATx6i1NHpeapmHaWAu9es6i59H5isWEEoVkRY1dZCAKdGDterCZL",
  "key25": "3zPaC6Sc19SJapzU87UXxBjmDhed55yQ5x1qjYX2GdnSZ9WfvaNLeCDGcWvUArGLViSseRCtuZG7oUnQQKzTUziW"
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
