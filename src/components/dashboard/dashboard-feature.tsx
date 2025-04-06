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
    "3pZbuvHK1orFcmoxFaqyWXrw2FjrmncX1zeW1Qn7q6h6jxCVzMQKB3QEdKavhN4pYwzMz6Zd7EUkd4TMJhXWgVuM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T2juFQkMF3DxW1CD8aBECRZky2dd6rQr5FZZULFUZ4uiJKBHegj6sh8Br5Yet7aaJ59Jrdq2StntiJXG4ZhWF2S",
  "key1": "3AVATGQh8hxTCnQhw4rogAhsyUkPfAB2BfXNnMMwbpWpE5BBa53nLrFe8HiPQQZs8ecxktw86syFY6NgnxkwnFPH",
  "key2": "4VfacuSng5xDqxR6CVVv9WYUnLMcNf7heahb5Gm7nVGUBwLpzGGEXPNSwpHBJPxavDvLFKWUs11JcVSj9cAfoEcJ",
  "key3": "dThG1o3ksDTw627Wv3wsepYvCiQjGVK6VjtzgC56ZAU1YxANpFKHyfruGGGrHvfP6qLZnT9kkmBbzv1MmpFoLDv",
  "key4": "2z4whH6csJcjF6bfnik8n4zNFLq4XoPU6XahxG4VB6FKhmCfEgEhSTBGFAdMpheBYDxjFAZ4nDZ3jCXiqLjTVj8G",
  "key5": "3Fkm3apieYutkZfpzPz7gLLo1FSBjBJ5nwzTFr8U5gUMMLUF3nAxhBBX8JsomFRTuHh8uFTDq6hPZ1KQfCa5FPem",
  "key6": "3sj9BBvieKXyoz41FUDcxtsAJHfwvD1tMdpVyUdmJKn2imFkDtVW55Qz94dfCNHG3EJCSFEP8F2415jJQkDraWA6",
  "key7": "32r61SPEBnNo85anTSMZi5rk3odDnXGyFQEDnXYeoQt9o4pvFPQrwDWD2pp6dhHQS94dkFj8SwWt8jszgZhcKfAU",
  "key8": "LKqD5ACDcpyGQBzuibmkKYCGq33bnY1Ln165fU7JcjL2TsmmzjJvvsRMyyauUqJk1yc7zvXCyAK2xwYMZebEN5K",
  "key9": "QL7y5FKCKcLNgWq5QMJzx3nbKLri96Sb8uCJKyAza2ErKaZerxcQHQ9hsVVkVnL6qCXzZz5ZaGFLz5uVjXMr6tC",
  "key10": "4MuwhdTAF556LyGH7EuBa6cC7vNYEdByMhchD2raCce3e81v3h3TozL6fsEGNW2Xu5XuBQ87fb8CopxUgmTXG4DF",
  "key11": "5wzbAyD6MxdLQmVDV5hnzudmaoiKg9BqhW7NvptiWTAbCVP1PZqcpJu1tHX4uCWuMRr7VonfJAMUB3tUiH5ww9sd",
  "key12": "2c71554vYE5ihHfE5A8qrJcP5tAGFW4rdZvKnJfz8h9ZXte2LP8Qb1w89NsAck1CsnXXYB2m9wjUwsJudRgwYWnH",
  "key13": "3dSifbwFbAtcwfxJuCJiZkpBEdaD2ti26xGgDrPfzkWLqGTeHYv5wyhGbBtW3PpijFEkjeDhpvBX1SxAaCRsprDC",
  "key14": "25kMBaBsajdfgkCP8jGGjqgE3WAg6kpFqyXdKM4QdBPb5SYkE6WduHoynJTwV76hj5hAyszCtfDFpbnqrG6pPhzJ",
  "key15": "4U7kTpVW4Nvu2it3o8KiXMiNQkL4zeCg9AjR3JnGAJ7otxNjhynukyqwuaJrFy3MrQtAuzCzpK5Z1MMrszvYfQKp",
  "key16": "3gDhdQNJPP2gZjJ9EcB2PEBkzS67uTNShMEkuCtcUyzyVHnVd1CMCoZ271m5zJGfG253sUqmAVtf1RatbJR1egAk",
  "key17": "4UExsweRG6wVFavbCZBABar8Ph3EjwPMrdatcPiAMYPgLiSwvKWsE2JKQ2UvoeMJ46htQWkdEZRX32mPCUiLzzy8",
  "key18": "5djytbCG8s9KBccNbQUKMQ6dZGTphEcExqbWcCUwx54K58KfwHhw82zXKPMe9c1SGEpCy2qiTdPbDDMNGZBqujU6",
  "key19": "2Pr3PaGosggnhyE9FkR6H8wJVpNkC6KFL51YWKaWEEm5bWEftgvbjFaEfT4LkyPPaWMYssMXkr6RSx8ezSLFkoYk",
  "key20": "4Lf6RqNAduMfrC6eR8SdTbH3ppRQyJHUMNBHJqeJuwhgHo3v9fsX2pUrQFYUuA3nfbbyiW3HqjVEF7h4gU7Wnvpp",
  "key21": "4DeQeWouemck8Sb6te55snKbSbDLAwdxeMaZVopWNx4rKZzj3qLtvhcZVERJRH2YSfrjC6zEBLuLFXdQnY9KHG4Q",
  "key22": "3K6GRUQPS6UNVQKsLMF6zvbB7mMtmZFNWj93Tvj8bVKupqzqnpCuA5WqWhRgtYtxBMNUBmSQyg2D6LxdNSGyLzPE",
  "key23": "3kg1y1AgqYWajbeDzZJ3hCVXzkP2tznpYdbdmRm2vwT1eH28YQZqPmp9qi6XUaR6BexWif3Qu7XbNLxwRX4uS3Mv",
  "key24": "3xTB8MT8GQsc86vn8ap6D5uumT29fDapoUqn2TBJfPxd2nbh87A31GgfL25rBZsxpktz5tjPC57iXxwAAMEwhRLd",
  "key25": "4HcoMH5XP2xZB2jqtN4sWWGpK5DhLE7VLT6o8hCS1CZCUajtnWkV5dRrP95Q86cVoMQ8j9oFomNGATa2tQB3j5gE",
  "key26": "3fg1YfPyXDvLJW4k9WvKQjjqVXQzgT5riTAgg3zGTcka36HNdDqZerXCFpUgUd113sxiHkazsNJSyH3QAYCpngeb"
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
