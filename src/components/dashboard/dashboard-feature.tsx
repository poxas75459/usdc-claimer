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
    "47yxmcpyzo8rNSaKZEYTvYBokjmYUwu2oDgm9k2n9jZYUfWR3TjL2sfMQz7vgdc8zBD5AXRV6EZrfWzZkLoNop2k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MBddhcNvjYUYSzDwoAWn7kDVo3PPEsZTY3ib7cnzida6RMNkxQU3RmWtdXmKcarJpFGD1zTysNnk7a8UsBtE7ch",
  "key1": "5VruYFJdYZ25BCPWCMf2BgsGDf65DNyGYwcNhmJkbkCh7ZtrPmpyoR7kr7Eq98VQhsoTeFpBSP2M3Kc7ovwk7Kcu",
  "key2": "4ULSS6ogSuZKaHs8vPLSQ6P7ZkJtPx56etW1vBXeMN4X9zXqzYa3DY42KrzbxPmic14JH4FnkmxNr2N1k84PhHZ5",
  "key3": "5qg9wfNoizWmL9LoeHaYPo5tJhj1NU9iv281biWYm9j2qVxQnjqKHCYrn7xxpSkcKX5WrgFmJDHeVaWL1DGS3CRJ",
  "key4": "2pxoD7gaXEbfHd2MLPrYYz6gdgVmequkzhr7F7KQjX4sVgo6QRF4vbjbPEJFUFNMkeKdmNH6MdSNwfQvtLduTwK",
  "key5": "3v6zH7d9Dpj33QnftDduhRzt3NaqzTYdoL6gAYhF6YZB8PrYeQeNKybZwo4vXB1nMz9JPDBzUogJmpwyj3iN9d47",
  "key6": "3XVHMrr9sBy3zVfRjHuccfF7zp8qQgohH6FMowioF7B7qRpipAhUjJUxB4HsscrAH5pCwRDsL2g1VBxwxJapHhGL",
  "key7": "3hJGWs9prx6he5kpDfDSHtvfT2JmPDw4GqF6taUsPnhwbwLCvHmEjG4AmbsESp4PCCT8P2GJng35C7XGTpmWNHgT",
  "key8": "3SeJCNBbvB2JQoQTTCoGxwhEGwLNnfWfTaN7VTyPJGffkQuDVia9aQyggdzdDTqcCqCVW2uKXBw4DXZft1zmxHPN",
  "key9": "mNgJ2kxmGM9PS1nDK3mVYWQRzNxuai6jryXcvk3BuGFMATeBAvyeVHZ16VzQWzP5m85681c1HN8kzBS6UcjcTm7",
  "key10": "FukB5x8pwNom6orM6vWnXqokUfPu9Wof6jMkkL9BjsCsFbUedXmTygFgS8DkEWWRb1x8KCXNBCavCNYUhCNYxzu",
  "key11": "41vK2PxLrGBnDtiQ2Xh4gmXAUebowKvYEqbvW1o8MxdCLTCbRn8TuWcXsHowVaTYDZKtZtmD99YRY8yGYMdTsefU",
  "key12": "NvuZsbntc1JB1aCo936qxc2udHmFEMQGBk4HNYJBwtk6gbvSLWtCm7D4xCTg2jZbizJC7hLiL1dsVvZnfMsqQQ7",
  "key13": "5NtMw51yb2mta4CWexdKAqajM6k6TzwMN8bZppn3XYpqsmBjjpN5v2Y9cbXwrEtHDc9C8t5BWrfFuYG7HUqkjJth",
  "key14": "6RyG9ecLVb6Ey5n5DRXEQY2dquhiXD8RKusAP4fU2zDNTDus77zjX94c3vgRxkM7jCPM3VeBnWuCB9xwdGjC6kU",
  "key15": "2vtvpnVDarDNz4vYBGKAv5mLog4kyM5VBMdb2n1AF95kk6oebW15Eyuv8EsbRZ7TsbyWiQMfM5rZWrWey5qZJaJe",
  "key16": "5v59p1ChPXuJNPfzEWKZw29d22AEHn3BqZr21xuyCwGGKwT5J9BG4mFk9XT3fxrWhASWTKHZdTB5FhWUUz4PvJUC",
  "key17": "3PeHtMrQSXuVtNdXaRZZFSKsWMUmJFtqm2tn4p5jVupHZMYgqder3KWgCfUtHrsQGd8XskNREbxRtQ4Pkj4jjrU7",
  "key18": "2umh3Eu66uMx9k6mJ57DHAasWXntrkJMmD629iu2UCYBrgPf5Y48Eh41XHmy4rzdSkcjpbMtDHd7nB4xAqJpgE8J",
  "key19": "diLR66xxHFudLTcbxnTPA6d5Rx6N6HzVZvBg5YbhSkfLbuumsHD7caqpjwSN9fGXmfY3U8tqR3yhswrdh6WiVwT",
  "key20": "4vbxBVDaA7LU39Hq1BC9EppW2RCM1bxHUzJZXTYTbKP4Awe2Zw7s5CQWPwx37md5MziK9UpgDywACrPoQ4uNJvNR",
  "key21": "4ZLTrNCvhzQxHypvPkaY6GjKzjVyrjhZDYBvj7UbKpLXahq7C2qjzWMgM8jMm3AUZ7xVyaYUC4gCVXfha6Pegi1D",
  "key22": "WNqzHWFV4EnT4zH3dxFqsKGei1HZL9bML4fVPEMefxrMuYPb1YbbBW56Z4Eipmy9LQYqAhFot8Ut1UqNbqjxJPa",
  "key23": "262DHoYMML6KVNzLJeieGwyKYDQHJf5kJj3b2XRqFPEVujg2WQKWWMrFPX95csh4G2GETrLJY6NtKStGa2fL6YTE",
  "key24": "3FvopwfVhyHmuz84LHBWMAaXHHUKMg3oDbxKcuLnKS2MY1J5SVR1E3gfkr1sGj6SyckcDoiHcEp1aUe1tBHT7ssz",
  "key25": "3rDqykGyv9t67Ce41SNUd3MphuKp7fA97TwDydgtge8XL3ncmUCEQ9cPDgjkhjGrhfDJAwtnFtvm7FVAnEbEpMAr"
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
