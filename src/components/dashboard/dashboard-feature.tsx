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
    "2gn5TX9F7qHzawBB3ogCSrAgQG8URUD9da5hKxoB8LAWtU3c2kvBBa3PrgdkCRN8q9HAZpoWGVW96jPJzZn96kPU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XZjPzoRruaNhPed2ADRojQuGWwGadpGzXqbhXgqBEQYGAB1LoimY4fecbu19nP9VPaJnVSn97ksfMsSMP617Hn4",
  "key1": "447HnHyeX8iPxw561JTi6dJeaAiQ2iWrfeBxqYLsq1MvukQhs4YCDaBf1cDDbhm7Pa2qNx1g2M3ePNRHoCtTA5Gw",
  "key2": "4W5xg7Zdkn57qihyc2mrgCVd6QYHB58gsFswenKD4WivYm2Fqdu3yrzpNEYhWefde8xzAK4mVMJzzHCriq67D1bq",
  "key3": "8fj8236DwEK4WzHbkrJfe3di4D61ArLr6uHLpi2AdQ6nw4x6GFf7UyHXvf7e7gVMDVcz4R4DQ2fkmCSR4ng4aSP",
  "key4": "5veq9GSneePaEHMG8tDsBZ7JJ8t2wRpQ72FjnvsasBT6UiLZW8C16mm2L9xEvBmF5PhanvQGh5yrvWfZZsXhiAWJ",
  "key5": "aCWDv5H1YnBAnhkvEGo58MB6bGVH97NpzMmNXPzocEKqFXzNQHUGiht6WBWybV8sP3qLA2w3aKETjXerHvwtuAG",
  "key6": "5MQ5uF9YqHP72xunpi7nJfFZYn84qo4bgB8862wvz7ajwNRnZrXxa1hUZNCDpGkhzeyGgxwMYcUDLjtZM1gB1Qbe",
  "key7": "2P4pyz6pQ5arY1urcJxENwAFPBdL2Ln6MA5cbR2YGMD6xz7XsX2y84bVEVL298C9d9PsCqCaCsRhqfTYQSTGNAht",
  "key8": "49SVXZrk3FGocZ3wXnbnpMxnG1RS7n8MSdjgGYhSMyvpmYbp47YZ44tR9BzRxHD9UrRfoXbeAm1UXFoj6JSCYsxn",
  "key9": "3MERn1xoYovq5cqDJjbToVhTH59xEDWsTDWAXsH1gq83iT1KxGuBQD7hyhJTFFwAY5C6jSYqwGRjxmXT8AWhtskX",
  "key10": "AYg9FPvzzFqxsvRUdPG345DF4RciAtJqPwGDdRySjJWbx5WPiEqELAuzG6eeJZZZhb7B45XCuqKj3DzorET2zhB",
  "key11": "4fp7z7e5p6pfLZpmiqcbohWurjhdZDN5AZeZUfut38QybdvNBX2CeJpyyycR9dgcY1zsh67nWnCzPnEacfJQ7mSN",
  "key12": "2pSYn1BjV2MjVZrCebrsJgvUL5PQYBVQpoUY6im9ftZY4Jwp1QdAM7RYSXT9HjvZrLh9E1YCzCYXM1i6J8btgG2C",
  "key13": "FAnBaCgs8JQk8JU9Jk2mBCPmbUZxUPK8mGSgmkfVpbN7jBEwRRV61pZrX2nH4MnGBReaSB2ymYW3eRU2yZRbQHi",
  "key14": "FbeUSDQjQ4xDeDNwtJxjGVVqznrLmf44ho4avohaP6dAKZornARGKAp1mvehxoJuKAe7ELCE32uvKFfKwuYxkbE",
  "key15": "557HTjGAE8zguLsLuN7vsXVuPkk1iVCek7287nnqWYjySKsMeE5zPn8BASyAf2NGTVptEXoShpwt5C7vis7tvfMm",
  "key16": "FGxQwenmEe88pGR7Lr22fR7z1thS4xPoqZtsx3fRqj9FsXoXyBZcXX8dqy1xRWZYFN8mafryTxJbbdeibDMihav",
  "key17": "3w3KxfxwwXpWRAahX91THVLka6k4Q3ApPbNp9TS3RWtXBWHx1SddBAN5cRaBR5suMjRrntpDiEYoGj3utm9YjAGF",
  "key18": "5rVzz8URKAwjsHZDHBKQMdr5U7RwXXzdCmQaZ5Lpg4ZcYmArwUwnabvxo5LLeHnxhfmT5gEa3MDCYJLSit3nVgZz",
  "key19": "hTLk6VJzgU3TS8g8v7B7ycKR9buXm8pZuXGeejEh949xuFKm89KydZDhgwKemX3PwdnEn7Yg2mNSniGvaM2vF95",
  "key20": "4BtCSc2VpNVYDhD8KifyKaTSjwo1uZFJaSmQBnKuWkBsMyqyTwnPYHryNM4ghMQmjCLDYM6ERD1XyNPzyVZHeCrw",
  "key21": "AuHKpG5JEJNTjAdAtFEhLaWq31rhKcyF5tKTERzdnrJSRZdzL7L3NnMHQjXLDAdMBZkj6PCpuMVhKWvUCdivgr3",
  "key22": "4AszQvpuPJeXbx5tq5yJcHWkWeHKGtWbi39o2aUpzxiBoC9YueZZq1zFzDDqPYrFc6B1Aw6fzdiAQWHvHfPptX7n",
  "key23": "Z8JSaM3VW7BGyx4zxixbDToWCkcGAaubKFv4JfMiWaPyv2hx9vCL8UN6wvRxHRenQHVKEsjZ86D81gMuRpDDQ97",
  "key24": "5BohsVCoqRJCsxvabcfdrLFn1T1dexqJp7wAznxEgU5VEQ7m7bZuDg72KpNmV7zReNHXNTuzKQHgwJptgiUqk2eM",
  "key25": "61HCBuR72kRqVwp4sDtvEepDAQzgfukTQeV3U1E4yshTSueUwoHtjhfsvPoh1c3kiPSpX1AzDV8WtnWtsuRrpNRy",
  "key26": "28anQFJJmtyozG9orUeL3TJYy9yS1gj6RzYdoH7sDXauCCAD6voWAZ9QYHx2QhkDjJ8sHCbd6vKXJSZrPERBAFQf",
  "key27": "5RmFo7FxDAMoFmk5qYUvvwj8R2vqSeUr8EqaXcDcKfRBrF8q9WSoHsruZgj7tnyJRTCwTMvg95qaP7RfnZgZXbPx",
  "key28": "65bqJuydGJ3B3gSth2x5ZLuJ8SCC9KcpuodHubfuecpbMaCuNkw2asE3dQgUYEKCb2igJd9PofZER7A2sqhuuLTL",
  "key29": "tVorxGySVf8n27y38gJKxw2zcXxoQZximLDHYAuUHQvNumCWz8GsuwtRhJaJsuvqp5iGpuV3EPtjofe5oKpNMNq",
  "key30": "2nLfV6oRzg1v6neaxADDrbis9CZfpqvYTGTTPfMdpMvHKvPYSChPKxFoTNBFgHhj8bmUZNNrBT9TsPL7qKThZG8M",
  "key31": "2ED497Szft8Pedpygbg3hQJyGdbvyTQdSXzUkpY2j6btxFkgCxQVxDohJm2CJai4AKaEwWqicxTJdpBbWoyXXT1R",
  "key32": "4fdnN6hxhUZrXv2ViLE4vVKS1bZuG13y19jVqgUrdoXhN8MXb2tsGqXSV8kpLNiF6bi7eYCJV3YR7NSB14nJ2WuM",
  "key33": "3BaBKwDPzntriWdnVUyh2ZeWPzEW92LukSg7D4g9q6PShf96pu7DcLj8aBtT1vUdFUjWgFntp2dtoGuqTeEwUyr7",
  "key34": "3Uo91LN17MD5qNFRqjeenCC5FeFwxY328hmbq2BQ1AU8awQ72Q7KgBous3WywDZkqLLshAaT9ydbVrfNUPTpD56c"
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
