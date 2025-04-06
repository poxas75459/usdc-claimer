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
    "ZvgKgXGQRHVyUsmh7E1ojRw96ywmf1j3v9m6RAFgGuuVWckGNhWGd3jAmqHfb4GGCrDp7nmaoczun8Q9yqP5eXZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pHt1C2tS6vSwbx9gGXt5nZuEAzX2xMyKS73gd83xUqS3LvLnqFEKdNBCU6o3uN9iaQvbBvEjdJUf9k8hSjmhEsC",
  "key1": "4Ysg3sYqZLf4PzZfegP3Y3biCQC6AuYyxeSHoToUMLFWiC95bhiq8orhDFPtv3LXeyCwod7ujs3ZD7JUZzx853EC",
  "key2": "SXEvcXXgy9V12uE3jC1oUhbLJivPHBZoFzEQZ3H1efYnanfieUBnbeqi8NA76E4CfXGXBTe3TkJMovM73kSrpmf",
  "key3": "448kkL8ZU6FQJM7MdMSUbHh1GqwpKZN95cYtmAkYLrNfL9dapZWR2mo6KNynQCqYr2TEgivAKDh5nZTHu8idEqQ",
  "key4": "4CHPxkJBBLFQYrsEUNNLXgNdQiXCKxnKvz58Y6N5yFSHypFrdbj6aRkcLvhdzdkSjgceFfWNvsrtW8J6H5FykWLP",
  "key5": "55m4ar8rEwqfKmJp3QFeFGyi8KT4128ghZb5X9khQmpjz7GUUhphLZgSQFgZ6Zeqg9716mAXYqLtRxNs4SK3fPr8",
  "key6": "386sxQdkqXcZtqvdarPcgMoYjGTDzKyDbpdDmHd4nWUhbHquJ8Y7Wb2CpKjQNiNvpVRyTq2JJHs5JtofbpgFBps2",
  "key7": "4xTkYmR8QhjRh8XMcBH37zMH96npqqPGz59te9bYpnEsKwTPZq2XDA5L7JnVSzfS4Y7YMwEZcNmHcGzRpsvxkHza",
  "key8": "3DtKzn6ojGnAxAXCaxfH3mLtQUFUnz2HnspsspExu6ExifiZAnfhdRmnpRHStNa18VuKtsfCyJ2SCg6vmMUGMr6a",
  "key9": "mWDfdkbPyFc6JvNfnmGq7y8Cd8pz2s36rrCMXjp7k4kYDdrY3LrjVWi43YN1U7ibEEUmR9oz5ePC9ma3paRPdo7",
  "key10": "2CSfEiBcyhgZqGbrF3pcuoqRbKxbzUcKpWVntVgN5kBT22XaaiRfentW2kEjCskBRenVAXW23ZgzQ7FtHubWRmhh",
  "key11": "3QRCttjHJLna18dW1t2BAZLBRDGNPw37UmWA1Fw3VFeQFSQ78ZQ1EPjrb2MS5AVPFqc8jw4hAYJ7J4AJ5YsfcuSc",
  "key12": "2mSaeoJEaAEuSMrtq4LVRGnRLjX7wzXA6hMsDCWPdACxGzZ9DUWqTzyhUNB1ZkiLMbAQRD95R4yFh1gUy7sMzpNU",
  "key13": "2ViWyCJbvS8xdQ7sg849kzVjqZV9sVPmRwNGUraR2RmivR51yY8Q5yxFmjURgjJY3wxyvckeuCki3ywmvNaFgKTT",
  "key14": "3YaV2ebdNAN2wgMZDuVyUY1fdVnQPgX3jZq6WLURKdNaXbwFQfYk3EA6WeSxJ4tnKssNuNAQyrz3nAyaHZrKG3aK",
  "key15": "4YoNMEZng8QjnUwvEsehBZu1JkrpLyw6KvY5kEabxbueH6tqx31ybxZsgiq1mPiuWZBCyvXQvwwmZvYJMyiFtw1r",
  "key16": "5oHVSqVBv3m8pHMdt1WrWuxQR5wGAxKcHnn1jR62Z4bVei9qJxVFLMFwSvmYjf5gPUsbhgncsXfAqbdWiD3466DP",
  "key17": "3nqARgriSx15PYmo8VVxcPnWZrSvG9JzpMH9wRCMWwo2ggG5xUgppP63kcDTcXdBQdstBCU7s4SCo37Dk26aGRuy",
  "key18": "5tP5L4X8HAznpsvuXooqv6qSUxYFSsuGWmYJ4j6ebCbfhDAgGLK7RR8ixWXLjVkft63BwFNE2C7mK1tG3SvCuh2Z",
  "key19": "Jpyk8iBT2rA8kHKUStajYavxEo8Fyb6A3pKVyLLQqkx5LCyHJyvqnpxuhzYUcDcea8RYabuDVrvLURPcxa5RX37",
  "key20": "5Vs6R6Nn6XvwNQ277FXQHptoPZNxPMwNmsXazVVab5pM9Zbn5KN7VnEJ73sQwM2aV3vu3cCBSfN5RK3DbnqwPYNC",
  "key21": "46H5ortcXqwLxJj4JWGoFvHmM4nxocYQ6YTfHHwF59hoVEvKHMc6Wsn1cMhjZ3JwwapeMSbrF6gq6x1Ex7ukVpm",
  "key22": "4dWuDTiL8p5P36Ji2d9MNP98PfdYzNUofgd2267PDWpjQhx1eiDWKiXcybdafW5Yi7N7GTXRbZr1iy8hZNPJHYDL",
  "key23": "37He2SeJuyanpYW6XtsAmZVrU5wNSmJd4ybh55FEPf8wQ6qRmqiReCidM779Ux2LAeYQuBtUVJ3A6NCwPxQxUjGZ",
  "key24": "J9cyocKLyV1FvVyeivEm3scYa27NZBePa7n4QQreWYxmd28ZRWBstNyewDouZxSSnpcrkXfnuWgRJ5gvSu1VGao",
  "key25": "8KEXzdTFZGAoMuyAyCSMPdaGJcfb41TqWEmPXkF1rGCKYhVjCgj2t2t5rPqZtMoHBdyQFtKhkYvPZPjqYMgJ2Ct",
  "key26": "5kmVAMGt6xTkEmdwtMcQfvfNvHxqMCGU5sEFooCgwWmcLHFj7gZJeGHUT9ryGiuBpN3y8XxxTRMHWuYDFSnHitD7"
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
