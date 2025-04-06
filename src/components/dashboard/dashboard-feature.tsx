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
    "2QcszuMzrpiYGWMsbtrhuMf1Frj4HwXrP6PEKBgCKQFYrZS7gwk6skkPyp7dQ5YnjxdB132jBrMjgUJAvr1j5ziB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ncE9UnCzfc6jor4spjd1QjBDaF24UFwQx2PB1hQKu3Veb9y8U58WjF4cL19sq85dTGbXcKvySjJeYuzDTzrLD63",
  "key1": "L55wrcTHDbkVf1WfsBAievhtbP3Lb2FAUL2582EAZuFi7HU9qepPT7NyXqZVWQh9eWA2eUHBTCn7EjLwJfBoxpr",
  "key2": "3SNyymcu3byEwKGCkkB5MWfBuUiJMP1DQGQUyCp6HqRZvuj6ZYZwc7a5xjEJ2ay9DMnHWS1JihcSXUMvL4A1oAtZ",
  "key3": "44qgdEgjkDHNC5E3iVw7eJWXcYe5ZjYMPYDm6AGKjezkRbks2iyQ5JuPraQYjvAe2whQdWNrTf6cTywo3TZXHvdm",
  "key4": "dQUJX9L7NSJ3eSZdVUGASjKqJ1XJEzBSzkhL8nMK1Wi13zmoLTnzSym3ohs941XYwzf1FWqJMqh3Kj2oYMFWmoo",
  "key5": "59RG5ZHtu4Piak1VkZVYrCY89E7YgMqquJyZPPXSDPPVzaxEcC12Pk7d9Td1XxHbHgRw5tm69DcSfbjBQk2iDN84",
  "key6": "5FSow7VuuY1kvs5M6TXVwt2PZsoxKeUnC4yasp6dmSocrje91qwahuY5zJKgxD3rgjZBWqi5KmdJfw9WoG3q5wVW",
  "key7": "ea7uJdbwmdfUoQxy68yCcP3SL1Ds7fEXfYddUV1772pCaq6CPuf1NAmZLkYB32HxDBNhUWHFrYjbKQsko5H3xD2",
  "key8": "41rWArxdZQM6TTbLjhjqTvP9NHCeYrrbaXBZfWE4S8TRYTfY7eMTGizPQPKMEv5sCaG4NeJaAFMYD4Efx31G6XoE",
  "key9": "3yutdGkn9cCEgGJWoNfaTxHVDGqrX9CfyMQR6qk6NkpQ15AZVSFErKtC1S9RqCEeA2BFjuEoUm2aSu4L8Kj3jcSY",
  "key10": "4LuLpy6De1GrviSpb7eMtben6ikFtZWM1cJZMJNnx58rH9uW6X3KUDhYMtU2avwDdzBXxprmyBXe7dNtJxZPgngw",
  "key11": "5xhkeGeMPRagmgbCwzchgyWo8SVqUKaQFbaMhN8Yjit5arQYbeLTQfBqbbUsyUHwgyqopFXXKiZoshgabDfcLND1",
  "key12": "2SmUgNRB9aBYyBEN1XmkrK2pf1N9gRADoFUjE8VrowyBq3UMD7Sj1mvi8xnPJLeNwWc32aMYTQ8YzetXAoCjTLAL",
  "key13": "3E8jSSs9UTHySjNM75uNAEqn3e7igDKoP7SYth4G7kRi14rbWe1TDqc6vKPgHtM9Vzg7C9Hm51N9bEGguez2AiKq",
  "key14": "2N8mf5NC1cjrb4LDvrqQgUxrpV3P413G9W2bvtwUzhqdyjJz7DTf3SdrFPdoAE7XZRsnhcz4qkAG7R3jK2tk7vxp",
  "key15": "i6Pj3pXhZypsD113aPCENNkQzk42UaEG14Cp5LGpq1YWtptf2cC6RYL2nGzBKpGqPq4MFzn1NF5Ec6KGsGzxFAB",
  "key16": "Nsv6yiKcNSXVBztztnys8nwMZ3YsUMohab9ZG75GhS7P5N2BYzd1QVDqKNawQL8j64LStHnTFgqNNqvYRi4NfvL",
  "key17": "TjhEDBeyrFx8R1AGJRtUzREUboC2jqDJHqQvQCDNnEdNmsnzG8f6dpCiManJNhxusJsmBNuX823mUk7dDobYWcZ",
  "key18": "5HuXuazFKrbGBALfyBZA8K2EdCcohDYvNrREfwmiYXi4nshALpAJGgti1p6eVE7JqP63CH2iU8yNjsCrkpoYh6MQ",
  "key19": "3Xx3Wvw9KEjcCKvac3eo9h5U6oKijwEhKcwLPxAPoM7riWSaNXy5qGNy8v27c39PaCBpx3oND1ewi9PwKEG3WrQ",
  "key20": "2ygh7XaWuxski7Lz9zWCsYXot1CRbKJURQxLbWFznm4Tm2woWPkQ5wzZtE7BGsgo2vvLWbagVN4CGpEhYb96Tz1e",
  "key21": "4BV2xFnNxzuTtQUcTNkyWF8eJGmnAhDbBBYVmxtZeE7GTu3VHY4E4VJ4BATqW9nSpdRiiVYUfXXXUBLYxhdHuEMq",
  "key22": "41r6VxjBeSXDCwSQqvoMWjQPoR6LUpbyxJ23XDHnuq9F9q11iLsbq6Zjats8V4rdgXCDgwcC95EwigQsRNKDjPt6",
  "key23": "3nPZ1FQ5DuR8NrzLzqNKUYXnKiYgBJHYfu2LQCxjqMC9oxyCvWscjHGQ9Sg2BLYj7HR1ndUXA9oZff4VPHFqmzEi",
  "key24": "59t1ea5dbvvTfkKfWwaNaR8Vw8B4c8Mcdv351LHjLKzAb8GrphyaJiyDboT1m36sztSapsXsvRed3Cc9a41R4Pha",
  "key25": "zwJwVnvfRCs3pSxigL5pjR4irnrkk31ctrrBKYgtn7suxpREK7kaJq2RaFJgZUAm8sRBX8UfJBJwodVk2WiHgpc",
  "key26": "51BFFTws6XfGbg7wVmTEevbM8NR1oPgFk8wZxq5FphWEds9TxipfV7zansh9LjVJgrtisrarCFSCeNLQfnypPcrg",
  "key27": "5p811NSNpP4ycYumuS2JPFaVV4UXFj75SpwrWr9Y4UEqA1kQaJ6nC8GugNw3ByUfjNZhsVtM29NtKzV9HBqcTWaK",
  "key28": "2Bmx3fmk6q6SimGyv4i2eFpQH6w89Sh4gio7zvmXzW5tpWbMzTpg4xYRzJqxeAh12Vi9bvuZd82FvM4TfpwkLHzH",
  "key29": "4gWHsFYzZ9twrZvvHR2xmZ9FSg6gXwV3yQkkTezCqueVr1JzCjxv1q9J16D3sL17o8XarnGbGeWBuSnUHcTLgZVa",
  "key30": "2HHwVaSjRrii2TLDVjMs9ionUUs1Qm1dErQjupSfJFuiJgMEYmoJd4sNonLZ8ZizemgQPvPfbpngCp1LR6UBNVKF",
  "key31": "31ehGYipWDwpgqLDjxtB55n6QT7G2FEgfqg8K1RvU6cspxM1xzjyJzNkyc8epgFoD9dDijXkf5BYyBd85HCATE1R",
  "key32": "55gEjfBbYiDhJc4uCy8sLgo2KJXtRj4pFuFjrHvsB7KugKJPsPU8haLhsy6TDS9ppRrsjtW2HdV6baMoKvaWjYCX",
  "key33": "4zMX3wA3FKRaREz7QpqjDz7jFvyum6t3SjwX4pnCwfX5vW3px35oca34z5DgAZjWtN6YiNrmq6C8BPFHWygCQJJ2",
  "key34": "2iCP7FBPRBfbsHf9QSkqT9RLL2xdot8KKj7o5B8VjSDV9gzythFNx14ZexP6nq4JfeM6hfCGjps79gnrL3Adz469",
  "key35": "3xxwMjGRJ4oBavEeVK2DCvDYEtLHWs437AUFmYTeM16pmdDobMYCP5tMBP6SyVcykHvbt1yMHYtANm5jiyMVa9KZ",
  "key36": "2aBUS31DhXEg6CWWuLhWpp2TWkV1e7ePy8aFAytmcszcKpreBMRVsexQBCNpbUbjV3mLER811Ny2s9Vv4dwQtREq",
  "key37": "i9usSQPVqyPhvFj9S2r95nu8d7raCRYUFXsqPhqLHZptyLGuDFhgVdRqNimjDGJadDHwjJoL76ULRardpFnyy8F",
  "key38": "61hJvrcoUNBdD7kbpYmNJ2UDQstP1L8S4482ZAQGEdxm5UyNsHdGqnrUwVyw8b62PCiaEGqfPmJ1LRzJVers5QoS"
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
