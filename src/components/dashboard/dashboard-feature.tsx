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
    "3wDdX5KsnBCde43pvRHh6DtGkd9PsYA2HLBhRJsQgFRjEkhVjdwF8zoBzwp5v6UbytkPHHCGj7bKfZvXmsHotCKL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oYqtsAg1YMh3fShVyLmYsAR8UYoNfEWt6vHuE1GxVVz9rv5XhaR3b4Yfvreytd8T3FtiRUKu68Dru1KZDZ5LUVg",
  "key1": "4T7k6HhiMorjxhr86cpNRYxVuQVrRFXFBR1B7YZWAqDg6TQuTtWinR3jA1jQNGUrsJtZsij6FzGSotYPTnmSs1ZR",
  "key2": "2oNFX94eoAsvobLXfQeWUMsiwD5dZqBuA8PxBdgBveteidYvyFfYjUorkk4PmEd4JyqEtFdw3VE9qYFbqsPaDKt6",
  "key3": "3MmVZznFpaugCy21hhZNyiSiKUnYJvjQdtiwuFgLhW7GKngx3jH2QtVa1eekWKQEf4AssZeaH6kAbdewGxu8Bacw",
  "key4": "2c3WGhZYFWm14v3an1hBZBtuXsVLxGtXxcxe4hqChUH6qQWCDPfkWun6wG8HTvpiPssc8Bc8JcQxWX9WHbBuYxkm",
  "key5": "miM3YB7f4QPuhnEphkSjw4T6Y8ENi8g8XLWVK39ESQVXHz5bS47VcfGjYNwAo7canYEdFd5xZuyhqy7JxS5MgFB",
  "key6": "revRVWYy5VU3JqmyqfuPpuBcGUjgQDBwm52WJ5yx6JAZ52TR21WqSAowBxYX94ToAKdqo6vs5epEMYGYQrtm4nd",
  "key7": "395ZhN9oCPj6NEkDRpqxs6a8d8Umr6pSwUWMdYqB9jGe6TGqtyPuyimCF5v8PTYEcaCm8hcpQcNEzJWRpfxqqBJL",
  "key8": "4bPXiY8HnRaZqNE3C9mezdC6MvcZNXYs2DWt5VGfhnvJPZpmuGHGNcJ2WdY5mBvysXse8ccanW5jCncFm6QAJo1P",
  "key9": "2eKWiwaJzQyvFpJGzHTZLRR1uRbxwYBsdLTiCVdizE12J75B6CipNUA6e9Lfn83hoaQWNUKUZvTrWMT9weNq69w7",
  "key10": "66E7LnipRqLD2SHiRz6SyXNoGi7QgnZ3hF8cTnjfnqC7gNAh7WY9eeTMV77agVtq7DQD2kfv9zDwS7PpZNBRATbe",
  "key11": "2q5QveV2PhfcQFLNMVDvmWDfdChKyzwAXujigu6rxvtoyjA7DtTDYyT6fMjfawnsqLDbRqMmjSybtWefyuy68uMn",
  "key12": "3YPnH9FVFnZ1MU3LT8P7K1Q5zqJQhGwQS5W8MZNX26rGdpsWuUReWf3gQZpjf1jYiiUHB1JNLzLxawzMCkWVX8hE",
  "key13": "2t6Z7ZXGP7XYfKFiCCzkLqVoda539kYBiXJpBdiV6xVhe7Rnu84axr6j7Ps5oaQcQgwzMGXDN9K9Nf7t5p4xutpz",
  "key14": "5N7qXbUHYe2jPhavSFrcdMs4ZFC12KuWWBJfZvfNGzd3tk34LBQXEavdLB8VQohZqXfTsMXcDxziBBMijdVR4R4D",
  "key15": "CMCBZupAGZXYNRpBJRoihNy9c5iWAqWScfYwtjFXVwxiFvdGkWTw5xR9KM8aCEoQstjTuE9JCccWAuK5EY4RwtR",
  "key16": "2Nwb5HzEz22Mf4njKQ9RYJ36GFZMt64YDs1douyQBJrESreNqcw2SV9fWrDCpqB1Xx1Bs5P8rM2R6kvujuj8aFit",
  "key17": "232hPY3BmS2QiTbyCRRoorjEYL3PYbG2cAUZDnVXLJcnTStL57zP3SAPkGGF2fbhQuj8LXYe5rzp9ZVmHFF6CT9d",
  "key18": "3rm14FRVLJ4ELjqTBbRdUqvuwPfuzForW6es3nUEyaxYGZKbbG8UeM7xetZFSynsrDfbW1n6Bcu9e3TUPQi2P7jW",
  "key19": "2SovWjwdcb59bHxr27RhYkD1VTtWngJAwnLS9suXk2wiZDLtH7KvshFD93QwBqwpUr7U1m3AVw7Bz4Ybxyn5LFp2",
  "key20": "5GPXQLVtXhCouwu9Ew3gLk7UMBTGMyCz8pAZdhjZGophdmgM4FPDhnmYDzp7CwLtYCGhX7DrGXZGqTzF9nEU6Xpb",
  "key21": "5reo4F9AU5ZRc5Gs6RHeginH3TyrHvCPzY29ztgMYpyqMAhyWExxxsrDPLrvUXWHEhAvH2tNgb1GbWD8GhveNvSy",
  "key22": "5ZfhDUWzaWYHfbmxAsKCmHp6RmTm2DJ5BQuoZriB3xNjuSamdmttjwGQz2Rs99Z16wsdr23AYs8wZR1N5LzQJ1Q9",
  "key23": "2vYh5nKZkUxGJW2VkDbaQguQADSKZqpuYCSRD5DmWiy2t8XiMp1BGrUfUQ12RZVK9hSyR9QCN1cxxoQYKyFepbqF",
  "key24": "2pa7m36LFAtZhMU8LEDnioufPRZrkT5f7qCKJ7WdXUDczMqYpxA2reN84frBVR4VdffYjK4womuLDLwX6GzJ393h",
  "key25": "3q5xo6fiRdRsDh3LonL9GvwwCmDgJMH4Y5ZVTgwcGurtBE9jH6X4V3hfH5UtwkfbtbkUzb8sXADSnb3t3dEN7v6F",
  "key26": "2sAGAhpAfBPWS5PpaGz4wjbdpZ6kpmHamzd34sXJ3mmYW6MyzAcmPZFRf2GjfUQDaFtrKwtWZjzebM4EJiTMKJbs",
  "key27": "2QqQgciW6tpeis7cMXJDTYPj52GHmjQcfM79mgSm28g27Lvdr8fmbsDSnaf3h9Nx8ZihoU5pVjzJouWazKN151Vh",
  "key28": "3sfyf4Gm9og4X9f2STx3z5dJGyhN76aSA1yghiYNSwcXibLmTQ7Fzpiq8dHX2Us7U8ET3GAwcy6FsaLPny6wswGp",
  "key29": "5wUU7Bh3eJfQdmU1MrTpEYe1CSXdt3JWs7BzNjHB8xBghuSZNVYbiwb7sQC56zgFBngAXEbw4XrnRinvSKV1hDsB",
  "key30": "5ebfoGqpk2eNoXQTY5X2LfowBAnJau2x8QuyzdTW2t3hcwGXFFteJsMrCwvpWKQrQ6tUFZ7oaohiMfQz3WvkpKQW",
  "key31": "4TKxXxeZ6LMdYF5YCuhc93rCE1DSUG7xJwZo9U7VZVWppCc3oJLosJqRSQRtioAHeZdv5GrkEJogNVr9RSq1YZRS",
  "key32": "3AQqc2MBk762HdxTNzwB4dYCQfWY2iFmcgnrPV9hHhNXofqHZPjGpEwjiA6GpRPpKY46j6aH3CSEbut7oM5FU94A",
  "key33": "5jsZDydCkb2VEijNYxmXtspWyLJwqiG4iWRx5x589AMskdYTZGKhcKuD8782DmahBQAnDGMsRBcMX6QusLZ6WBqv",
  "key34": "2WYM2QjbfibGcmKP2Nwt4Lu799mytYGzFpfWQNFHsfNUqtBU7NkUKxYhbzxLDjHyKYkKtCuJ6zkxcgUWekz4yQ2C",
  "key35": "5WhqbC2Ery72vnaKXm8NhmzpcH6VARoukoAxjJbSx1pMnUa9MATwHmHQMaMADaFuDfySfM1itEqVZNzZvJEZzfXG",
  "key36": "25rQPbyzVyiDefCnZcyt6evcBh8pPjUCQfKuL3uMdndvMoyhvupRHWczZJx3b6M2HHVzBmaRnsQQ9Gj9Ww5PQ5J5",
  "key37": "3qBATC6m4e3Bjq8ew8KHusW9Z1fAo476y14H8QsK26UBGGaZwv8ojugdbn5tn44FiBd6qran1hD4d3cB1ucZSPPG",
  "key38": "3DmXhsCwGHsXcNPkHw4Wk9fnYuD6Xs64qbWXKUPuxYWNx91EXPBKS3FFKn1XZFoC5pHpYtYfVtJvDT4HdSGDwmhp",
  "key39": "66CHwEMqYGkSWSgciXhcL9Vv6W1iHy737Yrd7QhvtsC7dVUzKRLW9VQXBYYuDKfCx3QS77S4EfAP3HeBsNPcUGRH",
  "key40": "2Uf2JZ9rPHp6SnWrm6DfrYjB44D1CgKsTdf7BuYp4JamgDN1pUe5J7kFyTeCshHrLmSsQ1EwTJkN2ETYcAj6gFS5",
  "key41": "2LeGKkUGg4tLoBBUX9MEBp3ZMZFVJDLHXNSW3b1umqbgdWqza7WdHZiML9Q39Ehp6XN8MAJqxMMjqUiNYEkTFMTU",
  "key42": "2EiVAvHLf6CuzSPUoKjaJ1W4VPUyyJsnPhhCFiJkCz37ogwF2T1eYu2riRUZz2NyqQxXWmfPbUwQoNG6ySNu2a7R",
  "key43": "2dst5y5TZXRfEckDxrMJqe8TxdManAhdGDt9spVYg9esTY1rxDzbKADTB7j2C1K4Cis2avaNQx2ip5AGmUNiycWW",
  "key44": "dNpoh1KmSjLLB8PxBqjkkf7jesgUJCBVmJigKPsbNoBqAzmpvt3kWBwF62ScJbkgnEvLpnkS6cfmiiGrkKtejPM",
  "key45": "42oKTdx6cee8tXFes1bQ3WYfEz9ovzH7eJ3WFrkR3mVNDVV5CvKd6G3RjzUsanCLJKwgWmow11euB5LjBab95jwL"
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
