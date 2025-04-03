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
    "3dwrSwsQy6GAE5AiszVHGvuJDmFmnyRbRMnmBvZ5fMArAHxGdsUV6FLCcB7neYtbcmmb9xwCHGGuCmDFQupnHHy8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mevNZFBrZAtga5s6VmptEbF8xpdYCFf9qPoW4V7ez47kXxGVEZEi5Ur5cc6xNLpuVhop5B9ATh9psVrcnmw8Tqu",
  "key1": "xuFhEFdmqLc3Ce3JH7Xz4XYmhFkEa6TewpFEfmo7wcPJnqjrD6zKBATPS1RMhLtCNTCGA2AWZMigQf1tLVwSnhp",
  "key2": "3C1Db2PhM2cbaFYmkQLM284bNPkG7uQykE98hp6MFGm7N9zfJwJGkX2rPSCQq32aHW3j2N6BgsC3iMBFbtC3zQ5b",
  "key3": "3KgShMBxzDrmHyGGkRCv4SxAv623pHpJzz6Q5URmcS17s9Xaa1MnZ5BATxaGcxVNPUyNTGhzC2woVaXQWaiopKBS",
  "key4": "VvUka27rMUpzSXWGiYRTaJcbVEJzMt7igAAcspe3d7XBJWCuCJHiUrmYQofj5CbSNCtSi54zKAXazeF34e5KWLQ",
  "key5": "3wPmJtjRPTcq7w9rtKcr3DGQwUk9TMFmaxguerPjkFw2nVtQHP7TWvJpWK9sAr4n6zkwLMLCbgSCaEvLGPMWiz7n",
  "key6": "tQETS4BsExtu6dQ969rumYDHYJ6vx4vidhorRBjsrk6WEWnHVzJszyfoD1qqQrR3VjWNYsA173U8TdyRpnvQvus",
  "key7": "3X3NkPeptZQA6cFTPbNnKaec6iGCWsrqNX7SYkfz5o3T2jBtK8MaQg633Vf7f12RJPPtUGS7yTV2q9ru5TgE9E3A",
  "key8": "4ePsYPg3gMhzSqGiAUefEjhs2wAscFasMcLRE7encm5dz9tgDDiB4YCyL6Xdomjo97FX22g88hZQFgEWzHtfLfuU",
  "key9": "56K5siA5aCYHnuJFWt5ffr7cwEEEWnFis9TmqbTqq8YXq6YG3RNJeDjBEwcHHPjwk1SZLcCt4qxD6Cezm4npZ1Re",
  "key10": "4nhuVBP5BdkHhPbsoEPWMi75FQL7mEDhomHZNNpN5HuKYBQ1ys8WtveU5RSAsADDZxgZxUrx5deCe8Y5ax6rbr1w",
  "key11": "2GDxEnJqyTeSL1QJmZ7dtHES5K9L1NMrFf3LvAJtFMeBQvsqyH2yebS58PvkMwHDzZNit592qdhwsvTEqWcTW4oC",
  "key12": "5PGxrW8g2eGsvWhhErDHshu4rjgJ3kn3VNjpV3RkZsZM7r2YnAcbLHrmLtE8v5772AnGL3RFgYuMQckh65k3fpiu",
  "key13": "2445f2wjtqDaAKZ41YiypPY6UkGhzmk8b1tszovYVYM2jM1Z6EYxWw36s1MGZet7nYJoUG96GnyEWYeVgxeUmShu",
  "key14": "3dTKgaXL29QMEXujxN1wkLPrahgKJddkq7ZZf454EFRqpVpzfWkY3ntgdwewZwmvqyXXqCAaHiKyoQCh5ucm3JU4",
  "key15": "Z65AoaY3VqMuCcChtiGXM6ESUzvLEAH97iYDHd83uoUDzbsKPvEhPGXzwS8afyuwzjkkaq9ACnwXxW72aFPCWT1",
  "key16": "5EXpH8hmfLm8AGvSSEAq9jfevVUhXwpLkbcCY3Ty75q2gzXz1cufaG3kNgsvRtAwe3arL2vE1SxsvWZhgG6zoQ7P",
  "key17": "5TUUYm4JENL7TsXupzvdfnabBD9hEddCmBS4gWzu7PVgAQK1vqTd9Uz39GyinbCXgKw5qYLyrzDmw8G8GLjdAp59",
  "key18": "4vicHMH6fpL17yncNmqAif8WvN1REXJ9cbcG4ZyuZQ3YQVb7y1XKdvf5wbqbKDE9CiUnucL6r4GYEMnNGTG3c8dX",
  "key19": "4jpTLs2zt3bmWydhwT7rEu4gsRCYtHbCZQJN5VxeGxSamUUqx5vxVuQ1PdcbSyZveqUM4WHZTjD1QVHhkc8T6Vgy",
  "key20": "2ZXw8hQSAYJUD96aKe6NktVVrVfpdVtAyefVtVmHL7ZiuqtQBG1K5pdPrFFymz8uyjvDJgBV8EC9risy6uwvkE1v",
  "key21": "5nAmkXbncH5aVWJHqWArhz4wFmMwpGYyvoJ9Qajb7stURk95kZghkB7PUsgg7WjEp8RjaWwkN5mgXjCRYQk8RdYy",
  "key22": "3w55vpTXyRsLVJGbcqbFbZto24L5fCUDLT9WvcT1ak6CtwKLjFK8YrEPze5fdQVpY1WMv3LkFzFbDAGjvnWdz79S",
  "key23": "35bvEQhVf3FZBAGbfhNSoRixpfXvTqqdCiBfq4tqjYFTQ61WkGAKS8jjFhLcTHRY3BPQMgVckQKLMEsvWXpfGRpd",
  "key24": "4XmcSryaCLWaUNns5ZvFQZXkjp3ga8mo6vEoZHPCfF6kV9doSikKfCgGWr4m3jU7uTKuowgcqgAizBzeo8Hsq1qG",
  "key25": "398QZRoeN3FhMYFdKoV3PYaqRBGFdpMznYKwL3FJbZiP2kiuaUuxKaBYKtb6spkziqFNaJNLpPmLamcozzUgaTX9"
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
