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
    "XYJd8ZtEkEmZHh5Emxy9nq6bnKiHJG1GJTqztghAzRprXWSkKnQUdrZj7i16vjtaXQF38vegKg23y2v5U71gb1W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32v35AEFxRrPGrzFhMuwPphc6QsVFog7QtmjZJGk5r5JtnzPMGC1htMLAg7CVcoSAGY644Mr3JzLEAnH7b8p5Ct5",
  "key1": "4yEMMdLKF78scLvC3QfDoP6XgaG3mFdwyXe1Us64DZQByW252Vb6htMh2fTZ9crb95ECas5DiZvJuZ4sJ9MAraC7",
  "key2": "5jmK2kyn3sEijRJZUzLWvuk6LMC3sXSbDuxM5FLdSNNw549DEpmLFhKhHAqXyLyacfHnkwGcbJL4s71PEmK5vtDy",
  "key3": "5kUAdjs32TBVh3xLt6sNYU2JCtKwzxsUYxGZFT5L5VoSoNptYmw4KqGHb9CfPjeuyAuxYErYsjHJy3UFQyCP7p6y",
  "key4": "3chZeTC1qdTT95DQHBsVa8UA92qoLUppq1YzDAJqnoPb99nCm9oysJvTRSgrHr7BVYVZYi7iphYRhb9Zhek395rg",
  "key5": "5ZYq8qA1uCaPR72Y5s2rh83A2nJehD173Wm9r1QsNiKaLkZ6FPc7bkxnWau3yX4t1Y8hrk4e3EJp8NYdDrqJfSGk",
  "key6": "2LnVVhTRzUGi672CYt6tePpQA6RaNkbuo3qHPjKBZ21Dcn4szsvqWRoJRVcKeeHUP2TggFNo6QykL1Bz9rNvMvMz",
  "key7": "4Png4RHYLtLvrcBxhLdQ6xbxXvLKdLh2AXjdAwhaoTEVhiy18gFxVuveLCspU3Jse3uCnCDKTVmemSBcHuBLwgxU",
  "key8": "vHe1MF8e3HojCVEHaz6azGE1ZKEv7kEqBrt4fBcjaFnkk4Cvr56QkMPZFz5aT6ufe7q1mvKJMD49txdN8LS3iAQ",
  "key9": "4m6JnbHSCMJNYRyukhYEdEwyfHuNHddFTBY7tCxNaYyzyrLSJKNdETGN5dxRFsrHQsujy7q4pkhe1rTpNLQppzAu",
  "key10": "5iwC9GkjFT3e37ues9FVef8TCbz7V6HrW9t67zUFnG6LD2LP1yMyNBVHYWoBB6eq4F7cnHNZovFKz3TJrNd9EkUZ",
  "key11": "5VajiN2H9RoX15HDq1HYd436v13op3ARhScof6ZW7p4eMrPWhtFJZucX1iYZixFietmC298z2VZM1gNPtnMNcgBX",
  "key12": "4itDANGU5aUKUU4pSU6KkZcwMSxHoRxWnFFVzUFa5pHe7v4QQyCariugRzHgbtCi9ZcDweMfMpSzDQfomxzDp1RU",
  "key13": "4rJHWKuA8h7PSnJWSXZhV1Hbs1UbjbU8aB7FfdSLoL2YkwJQYmRyoT9yx5nLx4eZLPycddzSQ5Lijg8ZUULkxbYy",
  "key14": "2e4i2SEcTHei3WT9ifagtpRZfSfbscWXuKtKxkopbHWTPGc3DHqtvFxCefJRbbeyveJjNBH4cmR2PeDNGZRkKEYk",
  "key15": "3PX873VcV685M8voguKS5JD1WNfgWcyw3rzkdz2hzRa9Zo9vCW8FknrUnPk3pEwiLeE7crsBbntL727ZVkFus8C1",
  "key16": "2ghuujcL4JbUgDShhgLqzhHoC7dJw6FHRnmqdbBGxBX7ZmjA8kYnMhY2nZsVCTbJSVMBcosfweUD7vZzXC1EEobo",
  "key17": "4bbHc3ooHWx5Lzq1jcagKxsvSs17MqEXsQwHJMmF6tFCqD7WJayeKRj4XpnuLMqLZaJQurGvpys8ZuwgothQvPMi",
  "key18": "2nCRM5SankhDYdmMvnwY5bYWyC9K1QTCDVULiqkgRgZWNKNGspbadKYKJEg1FdXtuvDGqQ4Udw4kwSmYTDP2hmRQ",
  "key19": "DFUptNT1gfBfqKbERHeyW1BmS4MXFmooN2QUn7uNv76mHAM2LXhcP8Ec8ScEhuG1xMKiHFQH6MgyMxNdHJEQ83Q",
  "key20": "3ooRJTgN6RNz32qCK8jSW3m11uVdZ74pomozz73NvkWjYY8dHgHFpNgSdMn3dqN1G7ajbwUJXXS9N4aFsSC4X35B",
  "key21": "mtVZW3fvJuMQfkFEqzfR4oWDnAhPefyj1dPrMsjdAYybSdTQF4zYvHdpZjUUDn6T4NmWqk79DDWv3p45zaSzU1G",
  "key22": "5SnSS2DGctVD7P3DRsr7rWU2LDc54pR61gmAAuBcu8XR7tEGGUffgY7nv1YBxKvn8cKpbqA4msdWM3Yxkm2P2Pzs",
  "key23": "4CiattMkKT3VQVVVcEcPQ7NmTZ3HBHj3rxz5NaUgUSd1pFDFbtAN24VcqhjPwaHsw7czTzXD91GXV31J5Zxsf76d",
  "key24": "5JfkoWtZ62DBfRNgQ92pBUnmHZqpyweYGaeYNsZYbFimGk1qy8JtmmBzpqdBQBvqY8b1BszG5me28a7Ev5hp2P51",
  "key25": "3ofoDXNnM67Q6vpFexXXFXXmJocf794JX19apeASrfMcUVHXRn4iS1vrynLpEQrBkF1TpZZ2QhxYCn75qcoMtA4Q",
  "key26": "nKWhu6rhLECYQnh41nXMwhP5vgMLhFgkML9BTuhJfPJp1cdXsfKBLQ9h1tua9UuhNF4yuyv1c8sZc5ct81A3w7G",
  "key27": "2hqht6xsUiTZXpp2PHnZURYVfJK2nYDcNrVRJKyC6Zfmo7ADyYcfGdBCrXc7jFnPz582C8r4StcNU9CgCHfUSPvp",
  "key28": "2X2LiU2LuoBif91qPGHWvmwxewQu7iEsuyL3ZQ4pJUd9frrPWjg9DnGXo6rEcHVe8sXJTtYS7KLVqH8kWbRUjgt8",
  "key29": "539a7agxY3dU2RamiWJAvYXNiKJNTccoJcGJhJguAFMFssg2cCnK64vy2oGBxny82MufkQ7TtXNvBqviynh69Too",
  "key30": "j4mWCvCpwPMGjhu7P6dbShUYSvZriTYXG387Bu2eJuKJGpLzPeJ4xr1RZyzE7xCVRwqtyihKavjex27WLjyzs9c",
  "key31": "BfMjU3if3U4PLWZwQS4xU4tKQEUMaD1iCJ8HxdYdZqVydVB2y7WFxbsiKGcYXG4a2xk6sezFEUMwAWsuGQ7RtrS",
  "key32": "3AFaydyjfamXE1W1bQZkUkRGd6fGAHynsYwJocuEGQE6DTPiUK7JeVB6CoC5AwrBun8PdRswCK7RKvn9VJfj1JZE",
  "key33": "5h7VitgikEjSs28ftUW2ZeaVv9mcYLD26dQZkFVr8jeJuhQmLPeu2uLzRNuzrxfrqZ18Eyr8UpacgabT86UoLyQe",
  "key34": "3jXs8kzUjyZjUgMKvHXB8roLpHbrWb2NbXhALR6Reo43958eYCxBSadKC3tm4kocCTn255r8WP2kiwKb6FrkzhVd",
  "key35": "5nLVFZtA1vTafSPiDwjGyj9XCAxzpG4FYt2J8oYQpLgYKNy4WYcx44wVvMYjhuT19yUk8ojBCPoVAxBLX7QAgQn3",
  "key36": "2YWW1pu7Soky6Gt59aSXS1t3apgrXM5xQr13Qgx6d7uAeYdsQSbjeCYQWMr6PBxFPtPs7USeFiXNfCtevgHuwSdX",
  "key37": "ifgMcL2qKjMT18ZdGgbPQt4yHehLSWktx2iuFncFzBKsjuHm6t1fqDKEdDBhUBzXtq9rMatgpFLQFUa9MiTpgma",
  "key38": "EkV9LhrDjB7XFuLQwDEHtEfR65e5m8cisYj4Ls9isGXzmxdV4veKAYYPjra97HCsV3sM9R39RVzECDpGtS8SUB7",
  "key39": "4Vj5T9KtwHrZmtqfkGSjdQEvcwvXDgqyi8GvHQbpvB6S3DYTG5nk7FvmahNdXR2TS2f7Jxn55oQLay9RzViNsc4w"
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
