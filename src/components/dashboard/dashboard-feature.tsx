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
    "5mQwF1MZgHJLAnMufHprPL42GTbJQbnpRqCw7JtM2C3ymnhy7E4oTuNUgknaTXMh2B2U4XYSbQoQtGWhWPoijD3y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QNRmenvqPybwg8ZAAQ3NaEbu6a8Dy1VvUe5VWzgoAJh5WjVTTM3kf5DjZw6KxR5xvfx2qPgDjqMJUswW15ZsSRV",
  "key1": "3CKX3wxfkqZNNPQP1SErSr2D2fz4tmBT2W2fjddvfEbHDk6g66Z7cQHkwyvHtokjGohsMiXgtSyvXMweTqR6euSo",
  "key2": "5MntuHTbT37Q6wBg9asytQw698TmFwbKZGkTXHgdyjHSnt66vqW3dVMB3neMExLAf6tFKqSVVEyh6ZRbs59HJLBg",
  "key3": "4WVbop5hn4UWrhUNss74Bc3uwzes4Y9NwWBGXWZJViG2RBVzGjjjymTY242SnayghG2ATLcAspZHv18PYRoUxtJA",
  "key4": "4Mn1rUbUKRzeP73J7wzpWVo4ayHsKYVGBTUkmxtkZwRrNR9yGcksZigikFQjtgBXipZktLbJFjxbeqUJuC7L9RWF",
  "key5": "2LUPjzzgbv1YSypEPSKfENMH7itfczpjwDQGefXkKvNtvVuQ19hvfkpNx1FL4QJtQicYyRXuxY3HBS7iNixV5RU8",
  "key6": "26D6vZDeiHQsifQHQHgg5kcS7wJ8corgc3jquwBhn1BZKmQyQqF9sCBG89CYzySjA7tLFCtzAJVMZCxRQJgss3wh",
  "key7": "5tJGwPPGV29cekRgoP1zUBBW9aKyR2UQjmNFLzsBYjvVnn5ZnQDEq4LhsA9RdWPWcJzV6166XyVpG4e8e61SmBTK",
  "key8": "4PzAWo1ZA4t7vWT4Zy8qXmDem9xqqTHaNC87KLeb2x9HFJUzL5fUd6a3P7AgeXpfB5xeJTBdXiF9sVe3yBxpJqJa",
  "key9": "3j4pZYLr6vBVeEbowzhVMN86FJdKZkGLx6QGh8wRjHJfuy4Sr9B94D72Sy8XvJb6hDuKYHuj9zmZyN3xbYRst2Dx",
  "key10": "3HXGXHx2qDNkBPgRf8NiqopcYG1r9radF62dkDroM9R6Yoqgqv1dcJxgEVGWNWt3ChR2rMu7EdBJQVE2firWhpbd",
  "key11": "NroX8ykfiww5prKk6LJwHXoajijQSvf3LVxPs7YGdZZTjqJ1W2kPxx51yDdYHvEUrvZEBiXuRgcQdsdzqUCqdJL",
  "key12": "5Ge1q6vKH65Ddnt4MjjwEESKTGaLbNdRfdgi5QcpfZRwyN4PZQdr31yGtPri88yj8ERTCGd1qXTJwNfPWhq1U4Lr",
  "key13": "32jwZ98zjx6GAXNSjKuha7QEPL5eTEQPUGzzELzDgiCTTREw54VWzVnNxnoKxt8cjmAzU5JVeKDP4j1z1Y6w64HQ",
  "key14": "t2t5sRYR9UGoD3CMtobN7wvNQuvVvAo6ZexKs1BjKLcQHnZy4n9rHiYQKowXeBDh4NZb7dkKuAcUZcLRRfDsriz",
  "key15": "bbF3jqVghVCxSgLr6XzTi52n8nRT6hS5DhiUSWxD1DhnN7YULuTonNhnye96jA8K72wWwnZhe5mRyWEyjeRbWKb",
  "key16": "4zfaN6bzxtzkUrgqKdNWabYnPkiBSR2YaEktXXet5VZBGcW4E6gb5nFuKQ4Mha4cnbmbcDgh7m6tSwC7h2XYKqtW",
  "key17": "2o9pUXgfCWaBWUfVgHkS4NCbqTDmi9ctMWqoA8Ae8cTck4v4pBiVhUSgGK7n82Ly8Q92TUjPNvnKS8XNmw5Eu71W",
  "key18": "2ErK5L2FiBeYXf2riWjNXYyAue6Z7Yz59zsVo3KZNf3bgvuPv53ZvNkyCJVTMzcoJJtyt422LAYoAq5GNHgBVan4",
  "key19": "5QbLNVHPP5jAiNzmdtccfDfPkGPxkenJLqSYckzVozzM8byrYjxds4mwAfsCsh3bnPPCzxvbH4pyS2UM3Qpi21xE",
  "key20": "3AWigGMBfh71xcvq87H5gGpXKwkdK71e5LvAy4PcpmUji2ZR7fgXMJVZDeE7PK1Z8TY2a9EVYCCovYL8aXzZQx6Q",
  "key21": "41Vrhpt3VgY1Jy66vFARbroWWi3hceHbN2JCsopRyCabuT3g4T1hZmtNCyfQyge7m8NB98Tge43eXaCgNk4iJf9E",
  "key22": "2fpag5coieG5RMu92wHvJgK1Ls7xWnwQbFCuscJDbhhhsCgs1sJrhS33itutU1A2zagp9yBswa4yVH7UyFjTXPPg",
  "key23": "3qLtUr4FUBoc5S7pGpRUy4UYyvJfXkhfzWbnagvRrFLq9gfBfQGe9WWmbCBiV1t4C8FmJrGvTUseFSUyW5Q4Ro1s",
  "key24": "2EGse4dQoN6sFMQSBVtn34bC1RVSd282fZHqL75PfnMZUYdpHUkA1bTNXiRuGEgnYj8Umn3wA7JF2AXDLvx2H82i",
  "key25": "Z6rnqQcmzzM1jQPdixGBS5tKBPCnnMx9UZiK2LAtunAGNMqUmKL21jSPT51y3sHeuKSZQ6LKWyFFRmKmEDuDDH2",
  "key26": "2fmzTHwtnBVUJkxQcVwd1tVroHKNehKULJh77za7kmZWyXxSjfrDiMPm9o3XALwzprXvU13koquuLAc6yxNBunEc",
  "key27": "53FA1a3rKKKxJcArFoCawm21EECuobpdsnV21q5fogrZfgdKAnXANuj5VQFUhgRGVW2QXLDweHN2Jb6dsUBisuhW",
  "key28": "3Zs2XstvSkmHoS2Ven2AYC9JAbq3xLTPoPXfLzw8XCgtrwmKaVTyFHncnrHiZEwweiAux5gXG4XZVYWyMF4ELHtY",
  "key29": "3tPR6T9nKXjjQY8AjSqweedFwhZj3wGTr1YVArNENkktB2TfdACwdWyf8EnW9yB3SntxCDAzz9rf2RFGXZEV8T82",
  "key30": "3GySwdihzdU3f9x1mvxcfqaiCDNmEJc2u8EP2AvEmtK4EPjV2UFyGC9CTz3BmQ85CroArG8AS4b15g78wJbnGLx7",
  "key31": "4ktmT8PN58rDbhuR3r989q2Gv5nTst9KidMiqNqnABAJXzVDnABHbeixEeHs2k7XdYbt5qPTsGUcCUj1cYeFUmFD",
  "key32": "4AujtZW4iXpuEcwYewEDJi8MAEZ775fJ51GFkH6xPC95ZioEvfcjtMhyQK7bvbdtyYu8dDY4c9t6cnV9reg37ekg",
  "key33": "3P4RwsG8H2YGAKM91byMtnh9efZsz4hpogPbesqJPyg5q6g7CeyhCB894w9NsN5cYbLeCeJrBXgbESXJQdHr8nPv",
  "key34": "2vpbbmytyMmMYw1L7J7UPDhdJiyJLrJUKFaQ4ZpM7mTzwxwkg2SBQeXaaxbdYDpi5HzpSkYAT2NHZ8mjWCSM6tbF",
  "key35": "35u9KA5YLnkje8WMAsdL5BntW1P4JKhm6YPEqBjsm1hG4RMMJsXmNJSmLRwFMiwRX4p7bTw5ubtV3fCQtBztKZNe",
  "key36": "2w5SiDJJT1mDxqwxMJn5i9Biev6YKnJS4r4Tk874b5F2imb6mp6kGGnZp6f29sCv5jPMymzrDqJkvBM8iRFaAxRx",
  "key37": "2g53TLjFHELBmqgY1ibRdvKbxt8Ww1LGHEPMABimZUKVtjBFrhkwudi4VLUMwK7R1texTMzwTLH5LY2CaPCSZJcq",
  "key38": "3q2Ys1Q8RxWXf4eMrNzhrLF2socDofcJDHwfibSHbXvfTSHNKjo5Eco6sPj4UFrtQxjJb9AEubsZUK48x1acmgq1",
  "key39": "5672wLmTsmiuNBXnjpzfegsu88qDuc89A4BjdQbxzGZBxEBTF1Pk9YkMS4ogxGWmk9dBfT6GrQ9ZHCtHbbMRyLRp"
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
