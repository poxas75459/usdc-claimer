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
    "54r3EQ7offbYonwpxMvwuM3CxYSgbrxCRggzhR2B3F2XqoDcYttbxz3vcQm4SsWto3YEsjjYBrfe8aSiWuUxdCFN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xU893NZUdcM6JTXMxmmQoVNnDRtz7UyS2s9ztVdJtoDyYfFteV83CUnC8m5tcTAqDBh97467R1zpGeS63hUBFmT",
  "key1": "Vb6gpDESh1YhiwdZpjLeQ34nkd3ZrUN51BSt2XixAcYfYzGZ8YdMT8DjQ9PTCGqf1GVP1YPgBDcYrW6KnDXCrdA",
  "key2": "3BcvNFAY3jURochCDDx19ggyuTn9z1VkFeJ7ouwsCYbfDMiiryX7rvKkLJSiFJwrEURHQyGqgXcJ9sHxbBDoHp5R",
  "key3": "48ma1tvXBfqvS9F2N8KoSUM1KTvjB3AimA2on855gPffzz3Tfsj5VmFCC58bCcwnf4JMPFdG5TfBTH91G6Nsqwxz",
  "key4": "59EfMgEUMnVcR3PSEgJqAsimUwN17P4wPy6zHQnRy4S5meAqj3LWw2HY9QLYm7D2pqbxHAWhsXJsFpbmRbtvH4UK",
  "key5": "2uuUP2W4FSRQNcDHiXT5wDNeRTUe7oQXxF2JyDLRD4CAcuNZBjBYUqeWujAAewHuxMyMrRKDZwufjc4XcPhJCJxR",
  "key6": "6718Zw2uALdiT3xbzAmTcw7Pw1qUu3kPbTqVM6SuvcHSosBAW81hM8pQtL5zqdxMtFXbMhy6Wp5Vibb5MMynYQTf",
  "key7": "5eB8NwMNhW2fwLt2rRZT6zGQ6AJ5P9etiPv4psagCM6BX5M5GMyXF4a6RwsXUUCK2H5mBk34NNbgD9c9DqjvHDFS",
  "key8": "NwoxoAAN1Dzxc3hrR9i6JDtARUBrChGHu3Q8KoYnVjRqsKFTPxpBRyRajU43pzfW8HDfbYvsVUYTjZHEPD4XxYB",
  "key9": "3ePV968kv87fDmRWqEsMs3rVxmFU8XgsT2jaJdFuyMtuGAj2SdjBAbtuhkgeZN4MdtAehEaSf8iwSrrEpK65uVN9",
  "key10": "iXU6JwSKdqopWG8K3MwfEy5PRA9c1wunJtT7rxqbDm4BViTGrE7nv1JYKs4C4LRpKvc7DRegcKbBY4ZL6B7TKkP",
  "key11": "2h19GGnbEWkn9GG9HDGn3Kgq8J6gnE7nY8Q88EXcAVZFHLCCMSUNdGmfaGd6DpNChZQRMaHSyPdQynx8DLruC6vC",
  "key12": "WvZSVxZTWnAjPXzit9QNmdfnxBfGWT8NdNewY2UsXUad65uMXqTNhRwski62MGCH446Mp1NBNoCTnCzdszx8swK",
  "key13": "4ycpujY6Z7JzFPDyvCaP2yYT5hR9ZsKUhBbp3XNcRGJGwZkJw7QYrPiG3Ztr22UboqxnatntTFwBZx99xBo4F7Bs",
  "key14": "YEr2fPgGPryNZD7ywRU6gJQmWXQwR6pTkj6Q48ME3QgrN8EGmifvBJoVbgbKkKqwxA6Ndn74uqTBMrn3kiUHDv8",
  "key15": "3drKhpN4vTX5ANdKSrp3AyYcpykN2tfWTaKWvyKTWxgxo4476adDcfTgiTdecUwQTaZssrRTfbJdacGEBrhmqdZB",
  "key16": "ZVUAzLtn9MmSYWumfkrez2hvD2W8dv4Wv1EHoDfoSn5yrvzfasQxth6CHsEZuFf6eR2Kd77S6GUkwXnVyUQafFj",
  "key17": "3t4j73TJSYmTVA5hKTu1oejgX2bkbu7uXmdyMXiJ8vGjqGefLTARWYqE1JyM5wBYnNGQRbDCUm73ZbmbQe8b2kLF",
  "key18": "219LkDFLeNoAw5kLQ33rX5EvXQNgGmcznhz26vmrraP8i9xtujZduZT3AfuVTkM5RbYH6KdfRRpiyyuYSUhJuMPz",
  "key19": "4WnbprzDy7JmDGhXztgHAVf8biLuRx8B68ch9CSgWm4eLec7hQfvUsck4vYHy6g4LtGZtcStPsTuTz325TJSyU3R",
  "key20": "34rEzDvrZLoEq52Qs2zKtNuPjbynbtQN2RFWVQ14xJNDKRZGhddpucBwTh9ho4Cok5mYzd76h92uFKxMjQ77CtKa",
  "key21": "LC5kTTAnxULkWCc8mr6igPbyz994qaa9ynJhrceNceeXfJJjemF6j5BQ5RZWpPxW6vGnzQUNmNcyhgrY26fkq6i",
  "key22": "UH5aGXmFXGYPJfHc7HzVf4RYtN9XZvvAmrzTKP1Bh9veH8jeNh4ZnS9ERkKbhB1gf2w9krHyXMGXDivExApQPz8",
  "key23": "4ejvMwfKZiMBP4E6eA5o27yRKh4QqTwQcTHAeFbaBgYWGwPFKKt9FYwtvnWLsWCbRWfUL4TwEHvXvDZTEghq34r6",
  "key24": "3RVFc3NLhGPYG95Cjs66xtjBJV3VBLWYP8YCTx65CSKEYNhdFQiJXarq2oy9CDdrP84kxEDMCrTkhuhHmvN6mNhs",
  "key25": "3Vqj4V67SQzcsDMkRQyWDuF7DizUjdXTmnCHHqvN6GMNgEbycT4Vh6rU8FCuPgWTVRyu7KkvaWstuEYfp2cYKhs1",
  "key26": "4ydhfMCnoqH3pwrG5NMkS2yMUqifuUEgaPWY5XTmSdvTNorMkmnXPeCCSoR133FbFjK5MY1BzJ4fNmC3vrveJfCK",
  "key27": "2Qrgh24h61KCYt6jSxzSMGyTDJpkLJ9Akv5Ce8fwjK6aDGLGzmNYu8sD4pLGFgEH217RfoFNR2SKksywc5UWNCrj",
  "key28": "2PziP7uQ1ksGqAMubUnVEJVanGqaXpjAtAsbqjBM8RHFA1PaWoaeQQrevAUEZv2DCmZ8uQabc99uDp8kVfrjaS2f",
  "key29": "4yHmY2CLcpmf4SFGwVALAyqDacrcccLumzN2SbMtZbzpm8fNbfrmPwCCAcSzx1RPGBBGSpzfCxXyRvaVBin1WaJk",
  "key30": "5Xx3FN11FhWYgCp4nU9kjWVT1djWrRgRsDKa1FEixuDpf4HZfY3K1W3rJ8W4midfCAbvKx3MEt4TGeG3UNmuPbUs"
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
