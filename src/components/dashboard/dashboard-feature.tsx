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
    "3s3oZFxBpXQS1e1wUHYnXgEWDEtkbb1nrnaP5PG7dyYAD5wo9VXg2uDVsrW4Zr7bZLBVwJ8BJiMm6NLhUTQA9FCw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EwwFsBhN4HnH7a4LsfCMEwgA5BXZcsndqS3AX56QQVswCn2sq2EFUxMxH9FjwG9GASRcoJV5nrJZsACAyLqAgMf",
  "key1": "2112us6CCVxTcLGp77YXVT8rLEokBSaJs7FRxB148eohB7BZ4CoSNLv6xq3z5wPARuizobNBMMK59sFFJ7i1Z7Td",
  "key2": "GEFRnXB63v8gBTV8vb6pWjfStkkz6jHq4mWzynGbAhytm6uGvEUvEwznXcV4Menp48x1TVcxpVr4GW76vf95Lp6",
  "key3": "zUNG6peoXLJEvUAkYmuP2VGni9zJCqaNHc7MnqZCtGujGRCKU7mMZD7Y7nbYTFmtqo71oCX3h5TSMnyjry8j7GK",
  "key4": "s8wXqhP79EvM56TTMGUkUv9k3RRCo5bAup22EF5TBmMLTuVrz7fUiHi5BZK1RkAhn3AvvTg6z2P9v8Hv7STdrLg",
  "key5": "5FqxhgBhS2MYu86tBAuKyGoGo4pVGbkUkkm8iAU86iDi9Y2Sk5FzmKKznPFNMW2Nx5MQ3UZAE9SZu21WWpgfkxxw",
  "key6": "HpSbgj4E4YdWWuroXwzBq8qE981nkU7qBYDmBWycA8vPRAXQSUyKuSEGnXQsAWKmZVhV7neqfu2mzsceimukXCs",
  "key7": "2Sy2SwLj8FQdCrDMSNixp1pUGZvQfWWfropFLq2ng5UVzt2ytfGNkzRcmP6r97rZz8uqiy8bRk2oSiQF1sd7PEyk",
  "key8": "27ucDcxLWG7NHrjpQhASc2S4NdZ5DTJfkD22qJDcJBbmzLiA944H7hJ1jUw7GYy118QAvsqpscwSHvEnKQsorGa7",
  "key9": "5Cm2Ljejk7jyEdjhMEVq1XcNUd5wym6tAj6q4AsSPHwwT9fV4ivzrCYZP1PfdcmWcPyhw3Sa2BcuwqkN7SR4b8Yv",
  "key10": "4ekMJPxFVr2t8Me3o4y6JYbrFFyyaK6xnG3z4i6Ek36DMb44xdwGJ1XVqxarbHkxwQBYb5r241ph8BD2yJRY7AYe",
  "key11": "51y2YDeh1VhxUVgvnprRQ6isgHA9HiiSF2Nqp4CWBbRg2ww2NQZQC2H91XCWd1TeYxpYx6GfXAwGSLuXwUvzJ4HE",
  "key12": "38ARWBH6Ko7CuZM3hLNgrgqHsdXRW8FyCLLNsHKnda8ku8iFor34VLUbVh35pPDtAfBWXo4r2cbBraTh1999NB4i",
  "key13": "9RKqnN9MgdZFMM41rxksfh1MH8dFecdc2qYgKJMXUWHr1jZS6VBw4h8DCQsWjE9aPhU1EmNYDFnZQcyfvWjRQ6L",
  "key14": "3uTzBNwRBLfqcWDZ4DnxLeijBgUSLFueVb6E5fwhEutAsRRQLZdXcsVhzno3f23ahxBFtc7npgUS4pRUr82ctBKz",
  "key15": "4mZuttCgnSUJbyZZdBiXHHgwcg2Rjwyu6f8C8qfc6HsCcMRmQrVs2by38ppoYLRre92vzoAStavQk9Sq4Lqds3gd",
  "key16": "sqvs1rrv6NvRNvzPjhCYvxDthvAAQao2Fv67EvsmFuyjqgz9kXKb9CQZ8HDtH6xjthsF2EKJkkFMLz9CDyUjFwi",
  "key17": "b5YA6423b9w6iFn6rJ2oR9Wb3E15hyEbWcyUDQ7FYruQRxw6dAkEPiGGSHc8eVP6yaYarQk48w5NLWgNxQxvbfT",
  "key18": "4fyXADWJT6pJGTKjJbNHGZkw97V6Dx3o8WarfBZxUyi79nhxwxFctum7pu9HUKFBojwDJ6QUYCznh2wvDspzM6jU",
  "key19": "JXcNTEE5GgxjNqmm5qKtXmx7rg6YQmB8xLTznCCJ31qy3Rzd9Kd8rHo96S5NdPbUmwRn6Nwrowc93uT8VvEAUnS",
  "key20": "3nCzTEosiVSfPxRfyXSt3zRVVaA9ievvsAtp43rXFZ4mtyrqd8R66cy7tyRHiKKc32p1YBndqHP23xbttgX7pDXX",
  "key21": "5x4oyVzpdonsZ2mEhdidUGTDkm39QGpRkxQU4cbmUSRnepvPvHxayzcrthLhv6qXZBp1wtHECqAm9dLEfgQT5XcW",
  "key22": "4MbYj62yCuavTNLLTXkH7poevLtWo99DbStkDwJMb45pniBJ6hK9SCX37KrJDDkeQBoBKRgwhydxG9rmG1hJFFsh",
  "key23": "3BqY98Nv1UpGL2Zx4WXDEBEEATXuv8xEgFp94oBa2AztNfUFgf4g1enXjVjcHQ7LN4uupDDaZPg1KqBH2Fu9w2gG",
  "key24": "425mhtxaSDC7bzxEGF7v6GZDU8wYuyBFYYtrNjHLKb8wYm5ShWTPRJMoFkaqMNjn6oMqgRJgDK16sFXjhLsvwSHM",
  "key25": "vkd9cwweUNb6sPspJby6hzEaWpC26n1EL4KpRkkax9sZuAw8Bh3nrSzPvrpmwG2Hnmcq8uJeqCaRAz76XH5qCE3",
  "key26": "3ZxPsDXzp3NqbZUst1eze3szFfsS6B1mKu57TXJFaHkWwnKMWT7RtCDhPYMhCqw6pZKyeUsVQ5W7aR7Ch4MC5nzK",
  "key27": "4v47MS4e4hSX8bBswXcdCd33vG3V41A7iBTktZKjMEuvyCxSYm3cDBaoekxGhjULzLHaUESHhyzo2QsL9sNFUoNH"
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
