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
    "5yMrJFhbWCCzrXuU3tsrfBG6iDrsYXiixfXF9qoTBJTSS4aGZEJD7VFy1WpGhWLUxbFtK8MzHhbA8XAz9qb7WCYZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53jDVWQRUopgP43nUTnfvrHF1tqv8X6fPh6xHX8KpDxnvaHQ66iExYqg831TFndEhzzbTqSwYVH19s9FVWCTSYUV",
  "key1": "3Nxox6VK3Aauomqbb8bH49ekSt7m7n2iNLGxcjYXCFTjzzZrSroE9E9L6Unfn5oenMnEeynLCk5BAqsnHmSUCnuL",
  "key2": "4Y4GyWwLtCeHXSP7hsgYt8xVkWe1G3jL44wozvXMpGHGTkwGmhzh8cHFRyu4Mk2SBadAAXj5zUSHq6pjtBxb423p",
  "key3": "22uspmsmkve3VwCQPoFb63r1DAUM5nb1AJ4h9hRdqPxVZjGHfVTEBtKpjzoHS6UanHqW86djb2oTHL82y5aDwYVc",
  "key4": "1BqYUc9hv1Gdhu1QEc25Pp5m8TSjmB2SV4byRJUEnncndEt83XYJ2EMZVFJpJskb6SNUXMStnoM7b5f8Bm6t7VE",
  "key5": "sdrno7ixAzXSXqhhxMX8Mq9EjofWf7pgKkqyqEGVkmqqzDGAFv1F7DFrDmciK3VN9D5vXaFZJJGuDXpdcy1EqZZ",
  "key6": "5zieGw1BMGP6CMMMNh5CGgn5UFzoDGg5L4igCKQPJji8ZZrUrEod6seVdd9gAFDP5uTKyLBJHTeEB2ihs5uxoDvZ",
  "key7": "2WKzuQ3VwfSysa3VK53trzGxSktrS4ZTkrXHBLkNnmro9322v1mjLSDbhcNo7DdREqjpQ56hfdWthkwuZP83q1r9",
  "key8": "5asRdbn1QtQ1CbmTYUDzdfpahMBbbxUL4qhiDKYUo2zNsD1heDj7QgUPaDfu6XfrrgedDYfLBWQapdzotwJzigqu",
  "key9": "2LRaYHinCpKt4z1L4LoteaoZHtLZDiDMxWQ5Huv4rp1xzjdCWkMJr5EuoPBpXU6Q5ZJviXJFPRU3b62WjcT4umzn",
  "key10": "5WrCQgBhTD7CHwzTLNGBZTsQzrruGM4TerQERipFV2WyGmfAvTSZxbQziyHv5MGRmXeTW49kkzj8pHg9h8Gm2fZ6",
  "key11": "63bG9vrNKQo2BBtiMBm696Q1EWW5C1y3R71DHyET42o92ne8cN55y5NMU9ak9M1tTV8fTSsNzqiQCX4xggQdoAsB",
  "key12": "3G5CuDRQcn8XLJELreBGuBp4uXuLt6GDhtzQ18Miu4RxXeHShHpymfYqxapvLFZxZCCbdW1Hai1C7LaCT12FJnNm",
  "key13": "59i7zCD7XebJoMsDRqqNQq3Wa3Ui85dkTXA9ombnkPoD3WyT3mbECHpvqKrsVPNWFCDn3wogDfb3Pz3iv9yXfCoh",
  "key14": "g6E2RzNfsmxnMMfypb1BGgKyuL2Rd19YeyXMCNouud8Re8rcYJQ5J3NgT1e8gwffp7X1ASQAcwDAHUCHDcGr9pg",
  "key15": "427qknRrRDjGgN75zE39SMQvFG7MmJHpdcZV5cPLdCCg5pxMrDni7tWs1LKtqqGywajbABtUZJFQwHGJi6bNgPMd",
  "key16": "PyGgWipq9tyM2M49biKy8HmZKR6JtbX6BbAaqR5hUxYjFqJazbds9Kf8gCqgzEpcPKDn4JYrj86TQDt2LV5vm9u",
  "key17": "dw8zmNo7FJpTyLsS6MFDTAWpBG94QkKJ2T89Vth1UktFj7JdStDUfcRdEaspE85z56wtiUdnhFu11RwjwL3YtWH",
  "key18": "5XmQxd6jeDnaht4ohSF7MEqwswZY6qdKdKnAnLZMympkkf7CTaX4gnMDWQpeepPhfgf6ZkiJkKsQcMomeXFhoyq9",
  "key19": "4EN7LiHnx8aZt3GkihE6dqaxKTwrw3CBYoAYH4FHEpdfbY22J2cBWm2LiWo4JAs6uz2At7YcKhHaE7QoS9MhFyb3",
  "key20": "67fhTV8hSfoiV3y17ecXsqgbTmiNva4VWiYMT7s5JDHNW8JVNySXDn9DU1JbSMdodWEzAj7QL4a7a6pnnENzGz1y",
  "key21": "2ShNz3Noersf1J5jsv4R4Sg9tiivXpViRHWkoRmP1Je5JA61jqQ7S1rZQqjJjjgnzNs2q7dq5sXX2mjjxPTy5AMM",
  "key22": "3bbjmiwNvVmoxM6XaRbUG93e3SVAvwQzQNcmUAhrSpYCi3JSXNtZdyg3eEEwxzrQ1sQqgU2p9x4so8oj3ZiFwhkV",
  "key23": "3wApCo23c1yPXbPjANL2yjFEw7PqAi6UtCzJ64H5UuFVToZjtB8PWoMhwttm3PKGA9PWtQgC4tmonngEdyn8DEkT",
  "key24": "4bKFihnaj4Dub7h8zZKNZUWj5SwJhZb7XqfT5ddR4qP8yQRUF49VVxgVChEXa9gHKo4CDXjnDvaSLqCaxuXvr39E",
  "key25": "2CRtT4qwQp8XzQHGerS6HVBf7VHvFQEpSH4V7CJ2d5BBoZVy6TW1677oyinpdL9LfRLXt9C5PMCTeuojydAKfbX1",
  "key26": "31374FcfS2f1bGwJ82N8hMA1K9p9JeZKJpbLJLp8MbX52Goch4xNNMb7aoA7TsBE7LkSUcwXyTNpCGZP4xMKKJ2U",
  "key27": "21LidjNoSaMmQ5ui9AGaFjzkv3H7y2hrDJ7MsKu9NYggXwkrJqL1NsScNf2VrvyZVhJerMABTy5jg7EX3svdQVdt",
  "key28": "5N48h1AdQHKLmFyae6XrEogGZtWP99pePkqG5W3WsZ4TMmctTpLPq2tZARUN62j6hzKiKM7GhZgLrCRmpbHf369p",
  "key29": "4zLXq6KTpzeTLvs7mENkGQDGb1coMC7Bos9r49zZoDrQ9RBnG2vE869Zz9YUAWyTTdoBVr98VxZDVvLPiJN4JCxN",
  "key30": "4DiuhpHZNbanzVGkrFPMTsxXqwZvMELakFjWeTFBFYgUTitc1VuzcNTHxP7qPY25fqkAW2e11jUfJqBHWtcQbfxa",
  "key31": "3WoaRr6okNLAYkC4FtJ3fAmceybDUXxPVk5BhvSpwGyR1p8j9q9oBu73aGtoTE67QtWQdCg9x3zm7hULWLKNc4Dm",
  "key32": "5Ah5NkcMvNtcfMH6XPhNY55zV3Z3tTk46RtdfKzTZu9QJXo9QSvZ6zdkm83geudrM29Rt6EcW7npZCuDctn1thp5"
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
