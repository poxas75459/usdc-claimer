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
    "3pMcUYhD76GUDqo5c9ASMrMQRWdcUAMj7kCL9E1d74xfqmDTFRRwkFS48Bb6tEUxfg3jPZFNMjTae9oGaDAZDzv8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JTXgk5BLmykpa6MFooJo9HLdMRZff9cJ7V1UCb5Kv82LKgHvxeLeobdwH3dDpQw4PeoL4qZRScm5kAJ63fRBujg",
  "key1": "3STFcxMMsfTije71tVxAvYxn7Dpjkquvpx5PjwFmWDVtTrdBST7jdrNWJVuCKxcAHihGtbLzE7tmDwSrrRh7FZe6",
  "key2": "3iEmDZjbvqBRyTQSyuhek6352yPRvBP5WZMw23hyMnfhxYJiZDhJsBDcFh3B2v4MyLmR7qrkNb6Beyp1VSE2x3D2",
  "key3": "Yexoznk2bLwzNXpWBfqtQK3dm72pVZkUjKju2h9PnERLr5gzMWSg3Kxg8TjgyqrMhXGRpVWB4ScXkiJeFFhX81T",
  "key4": "5G652hN5HV4sTQfytrhX8JZCfNkc3a3nAgUyYHGcHenBSZzr5di6NZxpEm6TJj7tGWYNJYgSHJiFoH9FeRtXmZD",
  "key5": "4Tuks1WAzzhvCqzrX38S3bZFPupU8E9qQX3fhGDFWvjP7Qb6MH21qt2dtk2ZcrsTbhuMXBRbuCndGi4eNBYKgm82",
  "key6": "4ea3ZZWSSvoXLs7aeXzFNACTdYiMziTWcsNjgzmZh7uoicdmGWE5zvg3YTYrUMJnsA653y6KLaAVjSbnXeuk7KC6",
  "key7": "2zhf96DZr171k9XUwMJxPFUEXxwpawZwGUMtWKw8ypqxYgGaqhq4BG6LMFM4KfCKPPZbwUmRza5GiBDdS8Vk7NMD",
  "key8": "9kuXig2Zpu7KS1C3cmyyQQXos7KfKnXxMAafaEsy99Dc3KM1ztRgJ71pTvuEmoFkBM1j1fbPHHgV7Rrg7zCuL5n",
  "key9": "3TJ8ze4QH7EiGtzhDprsKgZ6GR2ieygwYJEBD3MaKpxo2CiiGZmfyVZZGf2DRPq1hM3FecLijfB5fVkVcPauZMbo",
  "key10": "2AdhE7FFFxNh4zZ6LS3E79LArrDg2XgPUbMNWoR8arzBUbxngTjoxoXHCFCdEDbzrGYHx4SiPfuZ7AVZtTKDMC7v",
  "key11": "2ScKV4v6DqjkR8y1KHz9oQiRv9sJwFJKnF7KHBjHWucZE9Xn1xU76CKHTYM4tLs1k7iDQb62rsACoLuq5ucdhjpn",
  "key12": "5gLxgbjgJKZVGmZRdQp2y8GrGpF4M6iSNMtu62VEXhAwRo77cLwmsfDMKxoPqg6f5KJcDxCUXKapzBC2fAoaZohg",
  "key13": "3cu68AqUFwq7TQc3pdna6M2Zo6CLvaDf4v3QPEoZuqRaLoaMcjxX7h4snbsGMm1csz9UXwHEx9EaTSewYv5qgKLi",
  "key14": "2Utv2tXqzbDzEHjLRvA7H5XSXt9Lcya3RxfjMYh4JrCZwK4C6UHL7a1993PPx4adYAczTLbE2ZNkZePoevaPLNgo",
  "key15": "66QzbjLyVDz3YW1ZQGJpkPg4vXAViTrLgEGyrs3nXActWpF3oUgPFtMVk25S9ToP5jDn6u6XRG2z8b7cDS73TJE9",
  "key16": "36gaWRdxiVpTzpGAtjcMjqG5P9XYfwkoUwGoiJvt7VfyKi5ShXhLHJFq1LGqZKeE9HLdKVh9uQxDHb4RcbDKE8SK",
  "key17": "5yto8mpgtL4GRzPbnjQdsDhmKAk7vkkXFC4CT5ftydeQjSd2X4qSmr1KWPT9kc1x8Jk675Ve36X3LhUvyCcpwMcT",
  "key18": "3naEAmNKsfTDHt1DMiURThMRk5HAfVyAAyMu2ZYTbAxxEvnCvQ3TeUcoWGxkofUxSb8tLdJsxkT4fNzpES4NF9Gy",
  "key19": "4c7qxW7pwoGutuEnJMKmC88DJb8BSgZKqu5JvfoHLpXv1tQiTLbPx4aPb7BHgjTVagxjB2hvangeJLHCKGsALGN8",
  "key20": "6294DUKmdYh84L2o1GX6EsR6ZPMYCejrJjqtwZDEpnmAkXfeLfRVJbFhiucc2o9x3ZkKVBwVzSXyMkSeoZrhXcjd",
  "key21": "A5qCty2xwfNyLKfEUpg5aT2Rbxm2cZVnjE4v4hH6tYpX1aRRPbfdm5Euobc8fYdtF2KCW2X4uW5JQ7sEGHpjXfr",
  "key22": "2LCZpTe5sNWp4LvQwG9nyGHPoC5AzpmRfiNHyumDLnR9My3DyhvH2gsC3mMkS62uEsyFpz3ipW2qKVCLQ7Hwg8p",
  "key23": "65R3xgcHXUkU9t1RGbzc9wnpn5N4C8vyrKqMb5wuVMo72BhKJsiGyLaD1WTVrKbaxybrzGJv5q2G4rbGbNJriswq",
  "key24": "3ALySePp27eRhCbppgMpehVqRxyiyFU5vuwQc7pixGt17nnzEvy9JXmeLBXBdFDokhjEmpHLYHDSYau2gwcPNwov",
  "key25": "3hbqkWwnbXuqwmZmLZK7zNNJPUQ1xrqyuSTek9JUVjAzVa1iPikygvqcSYBN4891cbZWD3k94Nn9dvyL1xHYzJcv",
  "key26": "36rnZkhEFwJAi9tnsrAJrwgZaRxBC6LuWQRE8rz9kFcmFdkYV3Tp2HyTPBv78vFzxQNTgZpcwHS6QQRNVBc2ZS2h",
  "key27": "aUULp8bBLDHzgrdtfqJjKYtjRFu6X3mazaU1H8wW9EEmXNSTJ63Yd4C7rF99xrUPQwJXtvadDP5HZSG1SgB3SPo"
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
