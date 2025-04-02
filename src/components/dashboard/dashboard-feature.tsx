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
    "42G2q7ejnwn86688xJpQd73HzCh1MMDAfhbc5Z4ZAuCHAs4qfMMs2Z4M8GbAYhmeXotPLrCw3nQcUNwT5Gn6U8pg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RAzDjABPb5TxdNTdJbJu1CSmC44HqzUhPDxPWi5LMkYnU9YJfhceoR6AFVCRC5GEFacAgrNYp7MMLEE2c5WURFz",
  "key1": "2JQ9nDeMVk3PM4UPzF2XJ4wjmPqBv8J5fTBJo2C7RH8sd8ArJfAzzKBT77SFvL111kuiacBgq7yNo5m4GEWZf28m",
  "key2": "3rBeB2WF8fn9miP7jPJb2VdAqMkyixPyz6wKW7kDU6kSdKDzGchtBUGWZSrHtBVqNxee8AqytHVLa4yhYCsHV9W6",
  "key3": "5LBuMpRo2SoNj8Snt41JmjpHYeHuKGerHEpd9KCzoe1F2bfoYuUxrqeb66HKxBNEpFsQKWJ1w9Caer8joLamuzGh",
  "key4": "5D5VopY1DCc7LJgssswCASBD1ZLcVU59BqLpprUeq2zNJB78Ux1ryLj3W7N1Gv11KjerRAgwaNTnF4oMzBC6WZW7",
  "key5": "3H8sRKTTeUsnrF8BeVwS4mKiEWxuiFePWEr2QsQ81WxQqJxExQ4RV5Mt3hZwgNskEjsaKF9jVqZKFVkugjifX3B5",
  "key6": "3oPEtSJ9Dmcaai1YfkSveLofEYax75uYDMNEGv3uJoTEkeJWYep7RVwhYVCJ9wG6tNqGwNHsv7yVdEKKLRmvp7UC",
  "key7": "4BQh5HxbRzyLYGTEYbu9fUwZX82Q8c2YswsZMXE8ozW6YWMwjRPnqPCTG19tUv3KSNn8P1SYL8nsgJySA5vADU1w",
  "key8": "4qG5p5RpCc53dANeqQ6fUVJrwcpwX8Q6qqJaT8YXn6fADxSacWpKo5DS9aooLtZhdvsx1ubfAugMgGMYajCmb7CN",
  "key9": "4QEd2subVKJ6gNZ7qknXXCXYAL9G2HsHb3xcPxjuGwQ7FGwoNdw49wrM7kNZ7XHrPyhJQcGzxUgApGjUHzxtMpv6",
  "key10": "37Ym2xVfu4KjbbFutkMr9po6qCpm3h6uiqP8r8zRDJzbY3YE9yYubMyrshmU6b5ohLBz7QHQfgLsN7PSS9V2ou1y",
  "key11": "3rSN8xyjSgVPDsVUQ9WuZTQmsCDaMe4ZBhpCdLedCMHtu1v5PSyabTjG2zkR8LAuv6GYkCao2Re41Ra7P5GCLp6C",
  "key12": "B9zEpcUDaGHHbbD9F1cQFW1gjuUDsatAzMG2rU97QWkrc7ucKE9dzy6KZXrZ5rFeHgykaNURDmkUnaoPihRoC8n",
  "key13": "47FCDKSeMQmrVqswwGrw88e767F5yCmLitogGPiC6EwD631K6sa4i4DupJ589DbGhojMcyB47SR7gEUmfkZ8Qh4u",
  "key14": "4TcVSvrq4uxRsNiwhmt4WzZui1CErXkbq5JiqcRVAJYHqe8YDpUE3K3KGwc7KJYg8Zd1JJpj7xhSQ1cZzi82jhAi",
  "key15": "4DXpt2dq4D6v7ZRUamQ4msELTN38VM88q6WeMhgCQbeV2URerdBLPkKq7MGegPaEXahigH3hwgJSzaAFhC1qKk7g",
  "key16": "4cKxRUJFegdcPex7b3bqtsjs7CWdcQoA6nKto2p58gJkVJopgCiAXDttkmGTq8fdv7Bp6eDYcw2Hw7tJzGbhzN6A",
  "key17": "4TKRip9j5N7vhcJ95G3FN9fx32vSbdWqYzbPfPDXPs3iVtmXa8i7Z3JyfvBx7hUKbwU7LzyZaEdbAKfqw12cvryo",
  "key18": "4DUdVDVnaqGTgJ3VFHTrMt5jfuU8xH4tbD6PLuudtWJt2KJFj18VM6WVwT1L7cdvocdVaCTxyeV7zTci9rYBk5TH",
  "key19": "uNWm9Scuyvq4FanLSqVcvdYGBiChYQmkHai1BLEvGwButDLGQ5DARNGiattvZtdr1JYisWHU7H5yeJx79FmNNzA",
  "key20": "2GikgXwS6sRZ7qoKSfXdrbNoFTcgsFsuk9wLTTvhQL5i89bXMxBUN4MF4iBafDidu6EvydpD4LsHdH9qsd8aDhAh",
  "key21": "3Ln9KefP4SbFegLVrgRsb6av2AdmQ9ji6QZh13bukeaFwVZNWbC2nQZ4bH9H72fkufTq7V8WSEtCRNF35rgabBP4",
  "key22": "2RrsXvVS2ZovnEEy6SsRcQqVUTZAghtpeeMH9M7DWVjZeNijdfpiXce3iq4TMXzH4NTAuLVNsarTxrz3ztJR3jUG",
  "key23": "DGhNmKS5YjSdQB7TmiXewVZB9UNiU9HfYPRhYdZjof3DqJYPgTN69fwM1LgTSLVg4fYL1bHBb6BqiP6WH2r2wXA",
  "key24": "4j6VgdiHPkWuibhsbH9SfbPEhRopt2LRhM6fRopLzr6N7v3qfRFMUy7JG8CPHATf66V4HhZ3NJLVYn1fFX6gaz8v",
  "key25": "HLdvTxBHbUyFtXPTiYfuopfnVF5cyJxJCCzLjwRrTXNjiHz4KQS2y1S1dZd24o6HSrKY9di7hU3otKw3kxfNQdm",
  "key26": "3ArCYwpjfG3GNW1iHqqfKR8xfw7dTdo3Gx6UCzRSarYAeNnCeGChWNcsdfxzqoQfT87VUVZtmRkAb796HSET4F7G",
  "key27": "46XocSCo2whybyMe4QNf9FZmZR5iZtGAV9Z25Tk9NsCqQSu5X6SyC9iqV7upXJQqknLJhz3o1iHXjBeaX5Bn5JGx",
  "key28": "icvaMEHm4WUh8JKfsaRENmLBW9hLSQrS51ZoMisTtj2HsAyMKGiGYHoZXRYqRzJYnnvUVxHzRsUi9wcpPYmMZPC",
  "key29": "4R1NA5Y6xcGSXCmX63bBGfo71F9MY1sYadfadNTq4iLXnj9fmKPnL2Gcz4VYiye9YN2ohka3siVNnfcjQ6sDMw4F",
  "key30": "5ptLL5qxax5tHVE4V4Y1NsKuzkTW4i2pJxcFFz9NkjU4cL4oCLMboNPvZ5QNB19msc8FnfN7r8wikGi5RdfXziuy",
  "key31": "55imtQa2ewCaS3Zorckf9hHQusVnV2wXqBEDAanfhgL96qyCwcnAVE1mshBVE9nAyw8gBMMoC3Qrcmtf7TFA4Nsx",
  "key32": "5HwoHiB9yCzuFn1WAurXAeaER9z41yjjkPrEn4ihrjVvfgb3goezyHhhMnKT7n8ZQwE9CUR8tvFbKwh8raTxtqay",
  "key33": "4BuugFgfd2muaarnUwLTsNH8j3V5Gyb6d2ucirNCpU3vgna74VhZ7fSMjDXLYYLVwwYDBpxqG7KGP9ZmrtkmYrZi",
  "key34": "otzjDx2pyzGPe5pHagmgTh3Qx8De48iVXfnzG3nTvi52tt6vLxukLMyjcgtDxfD8xpYTezJhjcBA3DXpzRYwdtH",
  "key35": "2zACfMqREsFfERhebdW7DYYD4AiAtCPbGLhxq7f46vwbgS9cFAVNFLnu1Nf6KKTCpsqBsjYfDoUJUKYBC3WEZh1c",
  "key36": "29BtYmCyX6aXk5az9popWWD98gJQhCNNZCuukApGpXm5NY8n1ahV22aSvHjy5VNpkf3EXui3vidaYvd79FtRy4Fw",
  "key37": "5sgncU5yvc93JDbru2UJansSpKfyGda2otsvF66VQhXFiVf3PG1V8XKunjACr7vEHLNP6sq6bRUzhLFKAntJBwc"
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
