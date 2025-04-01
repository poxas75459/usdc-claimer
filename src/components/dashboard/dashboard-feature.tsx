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
    "4QDGYrTbpVkhi2S7F9wkhod8bs9yxiLv9ArbbsUAp6TSXZGQEinEfoyBgR3tkeDLUhcUkHbYQC5FXf3YZDM9ry2F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BSPNdPK3yuYYNBvh8KUbQ8rPy1t7E7nuB32LB1LoKuf5Dppwe1rT4eNbBSKBQ6GDnNkG1CNjNn2jztQriDeyG4M",
  "key1": "29FQev91jWRMKnDf7mPozqtWRKUsvKsWedVcXbWEZvYCR9gdheDVyztANgue3CxGHK1BiqzfU6hJUUe5MMLscfM3",
  "key2": "Kd6XqSmSWtUxjrvtTNnkki1enTRHUyzz1Rg2CM2sjmhn2MEYM5PSf5nnPAhYcDdN9yG18u5rJ4opQ7MqBa8zS4F",
  "key3": "GXzKTgVL1F4YQDH3dcsaDQUYWWgmXrm6jkTi13QuScH3t1G27CWg42J4StNc97PzhxPpyGbvTcbd3w6d2XL4UU2",
  "key4": "428qsivwx3gjruqVrt3RjSrrju17mrEvH16RnhMhB2DS6UWqhE1cKcyMhxNhgN9z8x6KTRgi3BnqTThx26FhXGhq",
  "key5": "2iYajUMxhzmiu4mTDsWBg8U9K6qFbCx6sESXTGQjL5LUe9Z1Ao9zkfxbZ5cuCCikXUVYDyBNw96YGeHWjyPjuPhc",
  "key6": "28Ro7ZYE7cpDhhyrKHkq3UKPY9GTod6ZjMaYeDpi5d1aCweqjYKYcQFnnx7B4aMFLUi6Aa2yGSkppN5XMeGC4BSA",
  "key7": "42ni9D1jqpx95db8A5dBJ6v1QSxKKh9Hegq12aL7BXAoyVaUiShNASWYf5hwiTfJqKonQoGyvnncPXuhxM9MVVoK",
  "key8": "9s1P7Zi3UhMEZD16sFjEhussD73iLwqHhvYYrRWqYpJhEyeiyvX6zDwpiCQJ9dmC9EruE3LFHFj3NwmsZ3p1XAu",
  "key9": "3Md47Nibwibw7LkhhgNvTWcUDMspWEsrfMtnXjw5FHjXXB7G3V9mUdUvYouD6JjoYoGccy1D3w6uikbKWUhbVWPC",
  "key10": "3dx7hL8ejaKxh6xQAXjag7uyTcyXZVVCbEPLdErZJeNKcVdMobVuESdXZ5mKtkSDfXyVE63s6NkKHm97nukNCoD4",
  "key11": "3DeGtHv2P6kE9CzmEtnL3p8sLBGhSSbRb5bMazHMogM6XShEDFbbPtbT8fvbnpdSfMRksNRv31rvVrmKi9UhyzXN",
  "key12": "g8QXmLZJHwcmrzxmGo9MD6q7qSpigDrzp75Cdcj8ojNjXfSTY6VoxuqR14zGMAzbbU9Nfj87GS5U8pX7AsVgy3B",
  "key13": "3KSxStqz77Exgn1pmkzVRWgWcGGFvPQ8cUapLdGX8ZvZMpj9EKQsRAeXdMMWmcS6cAeUojgVKQNr8x3tUYaV5U3o",
  "key14": "66hq3PNZdKnLgcHBJEZFcLRPwFC7Vz1miu1wGUPSJAJxnSQdxfvQ5LwDda8orXFUvuabtRupRMJwrvGaX5QCHUvM",
  "key15": "3XvVc7aAdaL8Qmo7cqqCdPJ2z6uE8Re2BQXqwYxCACTaaSKpHghgj8YAyd1ohBuJzT4cDXXvFDePRHgbXQJGYWdv",
  "key16": "4pxhr4MSLT64YZRWdg4Yf5FwZ61prXovxyd466p9LUfu7LLwmoxTsT3LvhWf9DKMGEKUMzsCa2ucukbKibuAuPhr",
  "key17": "eMW3ZPhzfjgKCeYgrpvDakpPck65E2DK5emoTzrTXCR5kLoptdRAyvSbHExWueYdKBRf1oJacrJrvi7AiEmQGYT",
  "key18": "Qxw7yJBLmivg9jR2DpLn8BPVEqS4ZbrSRCe6S2F1ikdTJc86ok4umas3gzkhHTr7wMtSzjGazeQoUW4DbuzroX5",
  "key19": "2deuHGQujiE7UKaxFqjJjEQhR8vHirm5UEhCi1CmtWcf1XuFLCUmLy1QSzE7T2xKSdciZ2hbcjRuAdkTWN2h9Qdo",
  "key20": "c2Vvz3uwMnXk89ZuA8SvJFR5wXCUFB7Xv77WLvcmPBjBx6aUP1imhingu53WGvqRxxW4ndFurt57Z8btJKbfH7W",
  "key21": "5XuTWfPzSgRy9sQJxWbsahvLF4GzA5QMWfioyahru8yi6z3iaC7v6h25Up8CYJL4AxuFCHneeZj5Rk1DK8yYgaPv",
  "key22": "Pd4H2Ls49d2PJZ9ZUz1W1ruoLzMUu5JwYmXNztomV2NRoT7Z6KvLVdFrLZFFwn4KCTdAaC1d3RXwHjB92ojMKbH",
  "key23": "5YucB7BPJsub7WY1WA2Si4ELRJGnMkPaw9ukcGSdyBZ3zBf5YQX1DozQVdBaXv4GSxPziaGVUvDh4waNEu1hmRWo",
  "key24": "4Qyej6dLNjPir6bKYed7HNUhwoxwZ683bunH9Fa8R1WjiEs7xs2DQ7mGKM37ST4Pqz36BxbthcqsHM72UGZAtuYV",
  "key25": "27a8yNaexHkhprZdDXBw9EBhuLCWQuajpnkDkpxUgHWfcaZeafXBwBtF7JvGHRVbCXbQYz82z8YYx6mna7GUs4rK",
  "key26": "38SKT5R4SAZMcs4QXZhv1UNHac7aVoyScAZvwnR2Rr1Xq53iCUuZhQdvv3j8mNiBakHoajbBUkXL4m929LsNsdiZ",
  "key27": "2TN4YmsmtYRJN9XjHrHD3HCDZgRWaredLFTCDBEraRLcuxsi5WXLsFa1TSusiUBapTC7eZ9kUZBAe2qbWBogHTU3",
  "key28": "57ozJ8E8Xpr5cXeEhu8qksE5YtsY9vNm69fHTcPwsQrN7CBBzmMAB4JEzgsBRpGJRu2FKaCqtubZgJ4Lr9ousk5J",
  "key29": "26uqTDFrATiRJeb1Ynr61FBanmRjdREhjrbNQU2Tzj1Cq2Hnb3pjKApq5vkVNZMWdtR8LEuSaMx1sXm1MhaU5TgU",
  "key30": "2F6nXmow7fQZEL55tsY5qJ7NnDyCHdo1bbpFMeq5bKz1GcNgMdrbowcqXUhy6TvgLaLn86zQX78Sne2aJVFdb8FW",
  "key31": "4WH9zX5WyRhkz4Zy5XiD26UYVRvpXf8Kfi84agRyWUyHbLjaYwV3TKt65D12zXNBVntrNjB7y6RdgKKuMQiwW438",
  "key32": "3WFxsD9c5ZWVkz4Myz17SS6dPKVBfAR5GCtyTYXvpjSqyqg4Jaxhcj1AipxT51Gy1XgfRyarHNhPKsXWHQRojUpS",
  "key33": "3wcLkS5mmSNXqouMQ2brMWZ5X97evSnbPd9Zs3MzENzWseeT99FeWQhBoNVrj3RdNoym33Uht6oErUgEMiu5ZnJv"
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
