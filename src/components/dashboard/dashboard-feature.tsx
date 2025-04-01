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
    "5LirLNESGBx3a5R7zdour1GrVxY4kKBdfMxZRJj61LQKU47XVixTTdsygRK9MeEbUx8q7pr8pgWpbw2XUXeiVXB5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54SxmQiV3Ckai9S7hB7opKv8cUhQhrYeuUBP2j2qAXx7qFaqLtWMo6k8E3hWSzXLtHXtDrz4TdiQizAzQw2km2cK",
  "key1": "259bxTKsRtegreAzWVNk6XTqfjCNmSV3u2xiAbRRMr7zRFpzCNQq8W9Ya7UGWoRCGRCn9BFEzVz9oKsx8wVGZ8yZ",
  "key2": "64tT73bTABARSgupcYqn4BxHvooiT1zXJwDhNstZiXoFxJHNKX5iC1XPBYFdXjXGTDSGzBV1ZLkjn2JFuENjc2yP",
  "key3": "4248iwXrKyk1B5PXFMsgrYvVq9AAymDdJMMgV5fBx82pnp7Lc7vN58DoZqQv4BtXEhpR223Kx6GB2KA86DZLZ1um",
  "key4": "4CdKLssJpAVwhDz5KEfZuoZnqPuLbQXoyvMaUgtareB9NkSC6QpzDnE7tj3KZNe1yvrUUAEUZAUz6oitV3YubrA5",
  "key5": "5JNmqz5CerVKcPsuZgPvTeYzwfgcrxRdjuPnYbZAmBZBHLye7petoYbJfK2WEHUsZWVMQuAEG7RnPpUFFad6fvtw",
  "key6": "28kLVEwx5XLedkpByihSP6bPRJF7VwFxWY4K6jAco55i9B7NG1MeKpuwNbG495VPrPoeDqDZBDZRh5t6kECSzWtj",
  "key7": "5ArcHnxvULUHYx1chcuP99ED8Hhwjm6Nbqkcrigd9ZGbjViVxCz4cEpqH45TNpvcXfWebkenMPxo4c7rVNWEQ76v",
  "key8": "51D2xtxEgNXEsfdh7GfxUohb4akwVT6NHp6ahrBmsfh429dnZfxAGk5yfuYCwXSTndMBhx2bYZsUtDsE9EH21gJr",
  "key9": "3MZF6EcpDHFC49qnM8DMTRsEGp4cGw1tW8wPoPeR5NEqFwF6pD8fUWr2W6N3USQSvnkwpeeMMwGirP2ae6FQiT83",
  "key10": "oN3W6EsttxG3ewvPzkSrVrQYvprhCKKqvLCPus21v3yWLLbSwoCX8F9UY8WPfogPokvvHWqD4hhY3mEyVZerZzn",
  "key11": "2xbqTbTt5W1L6tWCaqy6hh7SURCPGc431FKV4W9GXCZ74CAyhowRhgZ1fzVEqfeHx3xevoYXmsA4bkrgse5vT444",
  "key12": "2eSnwhVbDN48KPrVuAQYvrpjaP9knPNsrHRfhjkATvwrAUjQjVgtFB9uj8KDJwj8sgyxXvUtMQmarD9NUyHjLsyg",
  "key13": "5PWKW5Yb4TgMqo6WjbaHnn8i5jURip4V7UvA3kbEmtjfmcX4MdVZ5JAYWNpwiSQLYQJeDXkESZXD7DWKYRPi6hFC",
  "key14": "3qufZzfsDzrTGwCH6qKKQ3R27zCw3D14LuuRbeiTkCi6MaV5nR8CZoLRCyZSz76Q5w9qSCLyfLh1DQzHG7NJzeJJ",
  "key15": "25Eh4HGYStBsWyN2maJsunx5X1zcuXx6Htgszn52YfjZ6bLb4JNMVVE4FPDSe7d9EBFtb2Wh6yCv2tz95kxnjYpG",
  "key16": "2bNaqevGkWWVLg8oa6U1tE7hW6Nhx5zTxmZ7iKDDCABprBdbstNngYyfkQNjLwiem5m5yTPKZQNqU3SfsCs3Ndoz",
  "key17": "5VQhEGXHnEMm83reELNkkSNUpfLFpyDxoCw4F6ev4TadqsapKJvy76Svb9YSjRb5sh7y3wHZJHfc9JXYB8qs2L3R",
  "key18": "42ZLZYEM1sFMF3Zj3F3HGqCjSqJU3HCCyKqKxVSrrQoPrRuLWGrBUTnQfxLzNnvkYGZqUNa6oQQ1E8pzeXXA3xh2",
  "key19": "mZ1h7J89xnK1DeX3SH3n1NAPbk7o2ChSEoBVXxvGWGLhjDyE9dQcaAHqtSD1brvNv2XsaqFMM3KnU34xwBnGD6H",
  "key20": "5cujyRnjgpmysJA2sq6ixTBfxxS24561bukNr4EbmEgie5iHnG6hBRpAbwCvfaQHZcaKhAj5YPEokWdCZL4GHejd",
  "key21": "2MmfkV9xwX2TbVVvk61zZ6xASxvRvFeoDGUoab73ryBVhVrbrGqBNiBX1pRG45tTDb5qzF3aGS1M2MpLqfTCqU6n",
  "key22": "T6A6RCyFQ6nNvwciHcMvSsJzkyckMSWKVzsnQjqoLFWJZ2cQ2DexCLJ8YYaNqjerrBRTeLpGJdH9ox2SHWYUbny",
  "key23": "4spV3ZutP1uN8cLX7Auk3SzMjM2BuQ7wUj88WmxpEi8ELyKA19GK43QP3tHV7C1kHfXnDpPnYxiSDvsNFrPX36nb",
  "key24": "5s5qCRbPTAUxjhhFx4kvmcNSPXJbpuqN9hXeePJJLpcqBskNm6yzRCLh2LQTWJsiqeAuMXpZ3L2AxUfmFeYeCkt9",
  "key25": "5LRRHznJTF8BKmcpAzT7NnbdzGwYT3Ejkg72HBBuGnRZh6TSrhfzK1X9Q9Fubtzi3YzWoRzYCtzwoFjYqihfPRb6",
  "key26": "44ejPoTWhYKNMEpQAB2JNC6NJEjX2hevyNsbk3d1E7yFDHTKZ53gGyo191SUqoXsmTPBWsCCdiWw6JsddKdd1rhG",
  "key27": "2ECTxqXoQPKUXvKwbEkwX8TEUqZXmjfX6t66GViXXpqoTummzECtRmww4ot8XXiMoqHaEfNbwQG21LKdtiotrEUK",
  "key28": "3CstcAUhY4Unf1daRZy37CC5iRmppVN62WTBZKm6huowmV1hw2Fe9j6pFXanm4P4ayKjPKi5idCkwLYL6Rubguxz",
  "key29": "4Cd5rTg2Dosdpugbr77AxqjY3LMJp8aVfmnDgesZRppc9FH9p2fY5iBpe7EAUDBBGwW9oY9qsHavXgQeN2Aedozg",
  "key30": "2W8LWSArVSyufvcRkvqx8zhjJkKgpCzZoKq9E5v1RQ6iV4UYQD9semWRVELZzQ5NnQ9KHYV5Yh9RVmu8Yrx8igV8",
  "key31": "ZLmsB1AR7hZ7ffr92tZM9DKngVGQVTbdP2oGbKTNsSQKEbCAM1hmXsdVrFBFyWisgN5MfcPeUuT6BYWhJ4HqNW3",
  "key32": "5eoRbRE2e49jnbmbqW4m34L3TQSbZhc9BDsjVhZBL1Pev8VGpSY4GgRFE7CrEEHC1a5Kg1EFPWLs8BsUpp2wgXij"
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
