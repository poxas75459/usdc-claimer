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
    "zCSshmBghZZu6NqHyG8PYhAZZVTZniKTLRgBd5Mjo6xeP4byDTtUaL5WeJCLLTYmj1qJQmhYmB1gWWsNnRbhLwe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V4jFHqdWkMsoCVhwJedPM5FyaS48eyqD9kwdcwuEhi4zFf8gR87J5ptbZ6KwVqJaGj1hhbJvBMGBESRWVSzjwup",
  "key1": "3zZDziQmXjLvFdWS1PrKAAaDyGrt61JtotE3AuFF4iQfrBUbT8DeS6hwQC4XzMBL2F7g3X9z3bXAhzP6GebpYFRL",
  "key2": "uUg38SMbDpgTxQ9sgDYQj5ddiH6V5Sqp81T2BPRRbABfkruySZZnv9TvtYatQ9U4AcuS9tFQiq9m5FStkn9RRGe",
  "key3": "2T5z4q3X2tRB2Qg4BUvdi4q6RsCm9X7wBvFYDYYKg5rf6YcwcCXCsWWSoA3sBLHV7WGxvtwZSK1mG9Sutsau6j4h",
  "key4": "2NbXhp2TzE6rGZGrkNnQpAqMnXJuubFaZSbdusUzxf6TeeapBKFQb8PhQuvFeq57oRVTnBuLRmFdcQ4VVRhkUeRH",
  "key5": "613ZnEo2jdjkgsMN9DcBxTdBZZGuX6BZ3Q9JCBLB1sW8eKPyRTFT6Y3KGrTbQGbncL9G7XxPJThMoL532uPG8K3s",
  "key6": "nV8RfuctZi21xCojKX2TdS55eGGfyGi4cuc665qL7dWc1UFtSw3trEELoaL4j5ZDUeyqp4gq81GawLQqBwgKakr",
  "key7": "2gb2H3Vq4PGhftaBAE4BjVbGdbTUN773ebS7G5Y6zWTR3SvsaeRYzkKjWnbyzR3EjwX9dGDXZothSem8xxKouKMP",
  "key8": "Zy2FK65BQpXzFLpCafhJnjinpnKWiyUePNshNbp2tuwHTAxmfRrsqyKKnFxyX9gfQ3LSX6HRzSC4goYWPh8EJgg",
  "key9": "5QdpnhM6akapqxKe3gVHBntWgKTJfi8DiVZUfBReMeXWB6z7v4cFcRqXWACD62RjScHx5w8cvcSNYTuRwngQ1Eri",
  "key10": "4k7iyW4t8i3eVHEuDsMSvPny9DAdbXLGkB7AVv8VT9tfpWc1AxU7PqmWcoUZ2fzU2KzKCSMKbrWgPJSp3vw3Cpm2",
  "key11": "2FqypAT26FS4zSmJSHDwTbafbGNEHeidk6FZzeffzh7875QgL78eEN8xYuT3N8oR8WxVWpdQKH5KERt3oQbW7HCU",
  "key12": "4rDdLnwXEPFxLe8t5vsuxXEucGXAUTS1fe4avZT1PVE76oU2jtP7hZVe8XkYWBXUic66sYYdykotaHmDw1VSQTzk",
  "key13": "E7CV3JyJeXQuHDmipRMqaL4sdLpC5YtRkU3Dc1DRdEUgtuysHe2Cn2jAZvLRhkDV7LzPQGaZfDyzJpkX6i1JXVx",
  "key14": "5xVvbym3fZ7RpkUv73e2CdEcxu3TzJUyeykMvP8epudxqRx8pLJJjWaosJifiacVqjMCYi9VF6pG8eMC2gAg6T65",
  "key15": "4CBqWhpaxDGDvd5yxMv1ZSTT2DZ4ocRdWtx3TSyUBuyX3dkeGrfFdYRyDd9BjRM7DyEboud498WJMvWBrVxafH4w",
  "key16": "37e6RVobVQhsdXRzVijNZNfV5Up7n8M7VTCWT9iE4iGF8uj3Yb9gc4iRhSnUTTfTGnw88FDzVNUWpxTrUuy6piX4",
  "key17": "TrScgCz2qzAcEpDV4hYDcPi3F7fGhF5QFWBJhvCTX9SFMYgBbjm8sCrZHk1itDvLf3LQwspdxntgyUH7q1oLj5M",
  "key18": "bA3MTcaFBYccUdpXdzL5Bc24Nx35pBCWG2vu9z7oaGNQENPsziq5Rp8TyoQ9PFfPNCzUzaU3yDQqXeYfr15kn63",
  "key19": "3LnekwUVRxYw82CjdwHcHR248hBBCWhzSwq2fa56Cx4UQKaGGgM4NEDFcZsu9sg1FP6rEZ5W2kCSQKvtgGc8HYFX",
  "key20": "26DZX1Bw7M3nJzpfCrjChojsLERSsRTmqBvBa9QTP1mXaJwYJtAjXa4nptfGyNbJ6CGda1k1DUhTWwRi5rpfRzCs",
  "key21": "647EGcMqwcZQJBSQqxDJndMQqoFLbMDEbqCAyvAY7YyNG7La9MifJVzTaq7kA5hCA8Z1gexfED2zrvozVpYwdbQP",
  "key22": "2Cz4zTYxDyLrUzjzhv8CaZkjjEdk8zMZPtJAtydgFQq4YtJmfazuYnhdRpmA3vQxtXyWQionXdXoCyM6PJfkJCh",
  "key23": "3WVeA7h8eqvNzwY6NhrMJ1TgBeWxspRxRnTczG8CmbKYewcoYGr3De1svK7z9cyMFzMDJQxyPr2cpBrCSNy2C3rH",
  "key24": "4VC3P4oTmgvKwpnndosRDe7YzcVF3L3EM1nyaUyqYM4xwVhr4K38cJ6JRuAS7LNzn75Q4gtMCjJaKjUH9kCA5LYg",
  "key25": "jY4UH31zKpKm3mqgBoZRJ3CzXRgXg4reFzVw3WbP2d6YxQJnQtKbXuaddYi5FMHMrKK2xH8owX4fHt3T1YQmtEU",
  "key26": "4BBHwwGsdr6vtMNSCsgCsdnaPZr6qZ52TzPiNiPdpTnBNbEEBVcx9LMRDBFFauHJ7zb5aYaYxmmYmW8DKCDroBaP",
  "key27": "VJutim8RxU4pqkcqxCRgSFNXYQdJCzicxp8iHczmHwwMhp9J1tWVhkGPqDL9cJWfY6AWoNSYujv2S8mFBaQsK6p",
  "key28": "5532BqnxaSnryy2uZkd1pByyiD1xwddXBXQgbbtfiZkzfBW4U25cW1xn4kegzA2oj1hH5f5vi1mXrg9dCMWiEJgy",
  "key29": "3qBQNedzyusjuwU2v9KWqJnd8AVG8y1queQLiQ5hTiK5W8GeHs8HHj3rrQx22gpe77apBnDPxgggsvPgXA3jNM8b",
  "key30": "YY7MMNWmkXx62NxX15p9d66JgdToAmWhAr7cFM6vPppyq31dZUcyJaTco7eSyWzZtSLhmaHBdLygrnmrvVKKBtK",
  "key31": "4SUUqmoFkLrgWhVLDkS1dcWaSMY3DGnkmzcnGBqBfT6txroSpxT7wGfCguAEryEamkUzTnthC5WV26xXoi2qFri9",
  "key32": "5TCAgKSyqif4QS7o6mFhkp6hiWBT6u1b7Nb7uKugCtfbB63ewMzNE2uUqkf5Zv6vseoutkEnACNkpG7CxufSoHe6"
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
