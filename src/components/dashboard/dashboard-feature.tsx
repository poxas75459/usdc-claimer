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
    "4gfE1i5sCfznCoQVwddKg9pZ8Ce8qbuasBmfJwYvACHsFx8c5BYbPHXvijJW4V9cmxFAK7bb6WEGUjzQi3KXfNCP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cKxsY5bd7GoYrwg1aj9jXoxZbhg2a8TLwF2a5RLWtGAnsvwhGygXnb5ZMnSNvcXsF8GEPJHygKtdsZr1sXoNfeP",
  "key1": "4CSySLQk2wddmaHui4cXQtzez3FQG54LRup6KAXSGnYNKarTnxpWBrDjf5bPFXYPRRTqmAPWnM5TY8jFB71PE3b9",
  "key2": "4Yv1hxj2AXm7fUmFiNc4J3NYLvvN9TFBD5YhjFRH1yrtRXCe91FEBQKSvM9m9kKEhnJ9KuG2k61iAcjeuMcLGRet",
  "key3": "BX9juhRALBQdhtup3btrAizCj5rXAb9nWUStejEr8KEYT18ZVMB1kwPRrzsCbsQQHQo7HVT76Lb2Rep28gQbDTY",
  "key4": "2rKUzz2QvM8jEJLqKfN87jVoUKCGjCG9wxoRwAkXZeXTyu4himGQWYhAug7E3pJgfhB4xqL82cyVVV9JmY3P84eS",
  "key5": "2ZhYPLu6K2ox67zUaibHT9BZ8XxqjnmF9dEt6qk95b1Kmue2RUk2hVyNiww9Z2icygRHF1azmwcgxct7XNKo225E",
  "key6": "4zfACykEtYGzvAgEgxtRJzFHrTRgoYSKxmvYzC6aBp17Q5xZeJtvjTKhTWuiQiZ2E4cPiX4DP3ZWM5cPjSanirn4",
  "key7": "5VEP37B21oTSsg4Ekrgy7bJ378LadJEghRAiJc4h8k5L5X72A1d4Yt9LT6QbCAYDnNXEmHkREQx6y1TKH6RqrXeZ",
  "key8": "3PLyTpeK86FVjrXFQivf6nySs5Sr4vr7zEFVt2zFZufiZ1CVkEAL3iPa6wz2euKaMm382usFwrYcAcQN2Kda4vDt",
  "key9": "49XtFZDfZxg9XCsRZcBUCyvgkhQJzJj7sdccV4qgx13xd72si3cmGQPFDyoiun3N7NyR2DMZkgXRSHM8VxRwv6tN",
  "key10": "2Pu3vNT4GQoiRrdoEDyizHdq74i29o344Xfu868aWMht2oHRuoovfK5UaD6qHJaZi38e7txCrx7KAgefAZuzNjoQ",
  "key11": "6coM6x9RfCxHpxPNGhN8yJKpzJLE6Td5Btg7F3vrjYufV4uyCEFrZp3zLV8SCSgWN3J5izyGWkreQ3kn6zZJgpd",
  "key12": "PwvDc5KHQpjz2Tfz7wvfSVgn3xdiejmKRvm4KxnDboJN3ojMskfhgu8mUDLjxwknsarCNM9uyBGwhHke7jaJoqw",
  "key13": "4GJWYA9mtGpN4gFKBi6AowEuQzuBB2WPg2qHdTGnMMkZzQhm2VGA2LXC69QYKJ6mD7XHPFureeeJA6avmE6bjzK1",
  "key14": "gRWbQ4FJ48Xa96ADKbduTqLXjMFfMLDTXcxCSDPxeXdGBTEBqQiKkWuZdnvzyx85QUirauK8CB4QCbTUL8mZURM",
  "key15": "5LVpZ6oso13okUSZowADUKNQFVkZX8pBRZ1FmznGHwhRrBHZp9pGG85pwrF2gja1qWWPHSP1jvnQevGD6G3r7EYG",
  "key16": "g3qEax6v5dsQMH7g9yHMM6TyV6y2emiLUajY3XmC9WysuWYu1oGaHQAykot9MEwkDiTGqxPpoSsVyRYxJRSMsDS",
  "key17": "46PCSV3epvZ4rSx2CfjhL46KRUQwNFNBnfV9mSKGpJJciZPxJtUkWX2KZ3m426GvC5u5or95Ait6ZCnA9tRdsSaP",
  "key18": "59qRUgDy6iYfbkRL42Zy8wbpS3N9B1p1gaJfGWuBE7ogHgERNvpmVw9TRyi6ZK2ja3LJMCvAQmDbWgygAQhBczzj",
  "key19": "5eBm9YAkreizQXRv1or7q1ZSznKXQHRwYB6VBL9kSqGAwpFGvJFwxPW2i31rgYnNgYrZ18sk3F7siAL4NW3K5xdc",
  "key20": "2Ao4JymP7f6KUUNzkxUdXUgiRDy2aMRAFeGa1zHv1DA1hrrXAeuaCSEaRBVs2Awr14gGuNsjPqdQrTaRVqjTkZyN",
  "key21": "3JcRGYHianAQ9K4w218kchYQ3doUSVAgKWUZRisiKXHUkX5g3V6GivTE7j8nsih9d3mCWUCxXLzfzXLvnCxx69gm",
  "key22": "4UiQAmGJuAWF4izGta3y2yNmkhguoT4WP6RSB7LgKgyEafgXwf2pnc1k438qb6TJydgm5CtF16aa2dh8knvSNT8i",
  "key23": "47vKkWUdFrsQogJTruCi52XTKHJLysaVDQHdHZk7YqPfqRwfV1bwdAznZjcUA35MyyfFaT1pfxjHvrXzHhRBuySJ",
  "key24": "Vmj81W1kT6cesBSDJfrq2jZz6eNvUpf1AKpSuqGfJw5VkYHLKFFdTA8UNaTpAnxWTfGriGxi3PoCSJGMh4yWr6V",
  "key25": "3X1TaGnefSZTiHaLGLxn7DFNHg8izMG9uYE1sDR64G5MdbsoZhGnBct4ixAd8Pa2GNZUcqsWEe5FWGjSHrvALhAD",
  "key26": "eeZa5tkuEMCFd4xwA4Qgwwkhx4J6tX4C9fWA9BezChaFuuXbU978dz37PpR9Sv2Uz2LbjNEHZ5XDgXv3BC3cbBw"
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
