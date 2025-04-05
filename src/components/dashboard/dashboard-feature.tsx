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
    "5P3jmB6biXQXFa2ngycE3jpSUkuqgKek21GDUJfV4rtwrrMewpWi6wYhMJWRDGpxmaJ5vywz8ono1RBkXVBmmJvS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mdQjnEb6USqxJB9cEc84CDenbCKoijYw8UgsSBMxNGwPkgHSD7KYE7QtArRFyhtZtAS3QjN4WyR17LDBPyq4cnk",
  "key1": "2t6p7Zs7VUdsbTUjNU8Qxm5vkt1fPPsEkzGwxST89VTXDLr5xz987iwp7JLA6MKkGRvTob757A4PaUwsi6j3wft6",
  "key2": "28Eu7MReZ7rGSBaxFXJWFPxQuDAaNzRhUmRPTZhYgstnywmYrz8FhmVcNtvVR6yDgJdyEUhz25tSjZh8LX5rj1A9",
  "key3": "UvKoaTEXUGWTFzLhTxscMmWMgXD2QJPM8bEeBFJTVbWiRjDkHZh1ec3mrgWQ8JsDpy7nzyQCS965u6A4zr67tEo",
  "key4": "677WZyzaBvE8ebDQF3whMvGiQtCErpAuh7iktsiKFDgTpLK3gpgEWGq1w6rNi8KZQ4gQgnnURVJFApGwMZoUKvMS",
  "key5": "532PwZW7knh86rhzWGd5qzGHfcCq4LvtCiAgE1NE8aLnZ1RYfdmKTKnum7BQcn2cmCtGwc7264r1mn5b5GBr24SS",
  "key6": "3Pyc4kNcPQGWHfQV6Wr182xuUk618oRMuFsCoiWp6eSzXo8UyDzzbdgbMGyjJ4QthFDo4nRNjhVejKwVLzn1WQFY",
  "key7": "3sAeHuHLhuokQ9sF4TRwdqQWbkEYbm1xkqqgG9xFwjD4Kgfy2Ke8HsKPYZk1mUnjqjXasnqeVRAB28cspDwzMQGm",
  "key8": "b8tWyRPf6rNJ2dzyXTCsCdCwvqgsrfwzwDh42ib87bCYfBgy7Sza8j6M6f5YNLbZJwFKWi9AHB15k3jgEC8YygS",
  "key9": "2KHfh6zYBQCX4wkWvTAv5wwu6K4UYBWQQtrc9ANSb7gja516SAdcjbjbNqy2AZU168dFTUSMeN2sD1AJwpbbZU3i",
  "key10": "4oYt7DovJEvLk1HvuRKf4YgGttBQSnZ3whqxzBA2RNwqrUar887FCX3GZFovvHQFR7A5jprrxoYc7JKsikCGftEv",
  "key11": "2RdqeSzrHokABHoW7v6awcP5nN915wyLxdZ1bB6YRkaBEjCaAk9QkYAoQLa3QtBsUgCkF1omf8NQJ11s1cdNg7bQ",
  "key12": "2EHnUV5XbLZm5uCxHMnDpxtY9VLbx7vgFBwVDKYmuZurACfBQ2knk7pU2P25XsWnmdoQ19fCgB3uQq1Uqa9N4JMu",
  "key13": "3nS4mXRwEvZ2WLRcRhcVTMEBhpLh8c6Yu7vQTstEQw3z117XxWZjpUpAvBo9b9oGphWWVP6M7Hk8yUm5YPVfq9Ug",
  "key14": "39yxf1zeQcgmoP4HnZhDgdDXooi2SR5puGawEWA8jDYZQ9dJ65tRs67PF23boK3N1orZjz1gU7KnQUHdJWM3XUFF",
  "key15": "2nrHWNZN4adCTRePMPFeKe6Qxo8mLR7vDyQSbV2YbxJS2yrqD7pxaz2cHkBJdzwM3yrMJkuLMw9E2YbP5GnqWDBQ",
  "key16": "2nqeH53vRSn2R5ZAfSK44jvCRRTvNoWNU74ECe6e2Bgp6zxB48uHCv3bTNrJd17KA6zx1awtUZUeFyqc5nTodpaf",
  "key17": "4qUFpLYdfddtd6K958wcUcZgu9VRUstmRwLnBesn7KrMKooVGpTzxdTiyHovjYZ84tUSHpAg8n1phEp2zPdeXgxm",
  "key18": "2NVCSNSxXTbaFKzsxR2CaSTLGg3YfhwdPxyBtae6fwpvmJVq8TCd8YnaiBwnZhaSnKiDBysN8A2Pi7H8vwD9BZFL",
  "key19": "5PrQsVBdL5oHsLF7mJqSfPBELKz99dyiuKSrfUrxL2LbwAEMnSKzrTzimQiMMs6TzetignBZQQoGPmsirwXYpgRS",
  "key20": "1Q9KxS5pbbXBhAkv7SYQmb5Un7maQhiVzxUcXQHjhBRCE68yuAuH1mUxrsN2X6XqD7TbaTKULFY1sPnLKLjUtan",
  "key21": "uSUaPGPZ8xcvtvnwLFTkuQxbTjWXscj6Xv5G5kwVK5UV5wHUBvd7tmxMByJL7UCPefpJuzosFV1DgsRj1UaMskk",
  "key22": "2VAke6sc9NM78snGq6BCsfJLTaiGzK8745mN8eghjzPvbpQrrsVTNhk5zYrbTx22eon465gTYZK7NuJxBaF48fiC",
  "key23": "5hoTdzQuifF5EyaPJA8fNkfAaLZE6D3tJ7gz2vCbSH9Hxi3F1Rf7c1Vy5Eb294U1cy6Cu5AKcK4KKmb4N98Judb7",
  "key24": "BEJ7qudgB26iZuvkx7jQ13GU9MEhwEANymXhrQNQhSnwbKxxDJhz2if8vcmPE6YC6YzuvL4YCYvGEw4EdUDp5N3",
  "key25": "2Z9qvv4C9AHtwN7JEZCErwVPc6CbsYzAypW1AXLuJUVLhATQVtVVPpMeSoHqP348LLgtSkMac1haMSuxnGxPPrzK",
  "key26": "2rwXZfqVxdKVhr6MRvfdbSSfKZvZSryvwM4z8Gzxh4Y4c3iqstkipPp2DwmgVtWe6tsB5YrJ9R5iqf1naniQg1kg",
  "key27": "2Z1GgBxTwmV3q2RayVVzPjXXDUpMKkxaGon5S5cn6XAFtfWgfptLxbu9CP97YPNUVMjfFAX9H1DovBHcRejjqtj4",
  "key28": "1Lpp9bFDJztdYQEgn9uLTvVSwdpg6vZFVNsuDhZrYeEUdw5d1C2JHtUSpmhP6cLznGdbJSJ6Eu2HoLQBRas6G9v",
  "key29": "3geXXNBTKbrjMVH9jRkuCEXpkiUYjWhMzqJuRxkgArLRnXxvS3PGmAj7kUMSqbXxpa6Pic4VG8kgrxLeTF76XN5e",
  "key30": "2Nfik3tcPqYJQd1SkeKxsDGfg5U1SQAAm3W4Q3fcnN5Jbnd8aucf9G3wcrb1WJcvY71ifstkUgXxN4AVu2hmvvYk",
  "key31": "5AxVyHoGfPajNsVsh6Mn9ZLrc8EpMyABjeJ4237WaPvVUuaMfQjRUPXHbUmiStQufX7Y5tHGA1WgpxRxomZ9ymor"
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
