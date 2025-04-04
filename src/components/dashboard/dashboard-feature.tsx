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
    "5L3GGGKYAEPGriRDbBVNKwFv9fsdoYCsQpt6H8q6E729fiS8tzuAemLF66JvBNFZs4DjxMRewXGvUywVW3f8Xr8w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vcuyHMGeFx2AR23LmEbqtc29JXNccqD1JxRnHzAy2dxFDAMfQXV4Yiu4Y3yFBCcUcntZcSzUappGFj46YqGnnds",
  "key1": "b456AtRd7w3MqxnrQwgyrsiY3vyX75khnfnixgEwJ4cVEwNq5zff4B2j84KEW9YsDFh1CP37HEmn51VoCW76HRZ",
  "key2": "YsZNag8P7BoHUhNz4KNoqFRfNDKH42zycpbt9RdxfKDiSApZXRDA6ve2un9zkDQbUeESmY4mdK9T6wCTWkHFi7x",
  "key3": "5G2YgiXETLMJmjZAgZuhsGqq3AEsUTfpwQhEJXtocfNoa4fF1Y6hV2BVs7bFMWXRdsJAPwVHf2FpNRcaoJ2QxPgU",
  "key4": "2kQ9Vrf1uLaEckkHHTA1EjECabBtLNa2kDQ466X219sPv3foHK6o9V8gXLVkyf5Nk2ssf8s7xHyxgKR3xwe4f4HC",
  "key5": "2Ez4NcUxkGmXau4ctQFETecqm8TEof5DXPWWySEVSpmkt8GHBZ3DUubDuWJQ3GYUpNSPiqy5AwAdTbBLM9Pwhjs6",
  "key6": "3qcNcp6LPFFkyXgYcA4Sp7HeWbN8u7GUb9CXgzjAzrQUz99tuwX5qc9UXUKiSMMsjcn6EXoRKAC5pcXSZofCNRR6",
  "key7": "X5jKguWNN9YLtPWdPzUnpyDQiSPsu6mWBWRKE59Av2QV9VA9sSFGwx89NG6nJjDktBmcFmaZk96ayJUzRQ8Rbbj",
  "key8": "2bx8rA9XRuWQX48H2TqCaNhJmKWmYWqsfjWcvm7ySob7agUaxm8ovEKhgyTiEApHTgdCEdf3UnbFohM8KnY95brJ",
  "key9": "2F3bBtrsoX9zigbyMdTj2nejtR83kJbb17tDKjyD7V1UwSeWaeh6XK73E7BXerMcZ1ddSzbrWtNK3hjLKiKn6uPJ",
  "key10": "MvGueafK4ZJ1bpu6qh5JnQz9SVLKpe4jESH84NCgqtrfgbLnBiS5iqhqQhsKShZPGVyP39Ysp6ndJLvyfhNpeLj",
  "key11": "2BNX5sc5Cooy8GF1Yuca3V1jVXqEBKk2gfw35yAV7q3xRyz22kAbezcdK4CC3EAA93s5xELTLDXjvTAxidv8FR9G",
  "key12": "28GhX6E1wzi4ccD67ZXEbnRVp8ehmnXpadAALxKTpwrHCzAu1wKnpMyuMxRffPorBGShuru7YQaWnTdYzEXv9Xi7",
  "key13": "4gGYj2ukeKNTFERrkiZ49TdNi1CfUnRJkab2WXNqxok8TBFX3cnXpkLgGfrow2xbuo4qBQSodh226bejBLw2EV8W",
  "key14": "5h4mGyCxJFaUh8Y3BgtCG7fnHZZf5TVXZoxpWVnV8QDXnRiMm3spKFDuoBBYrWdmqPqhgLFBPAPYvdBa68D37o3G",
  "key15": "JzZw8o2vMzH1X11YHK3Xv26fzaUiLiC8dNNebBSfAQMviEH4iYjrHqoiXMLCZ62yn5uFXhjyBqCYQatrcMN6cao",
  "key16": "5xMiKDYPjEKajieJe5Y33H5GFU2M7UKvv6zpHNnD3UTEZZdz2acbXHwSFzB2YAyrR29oq9XFY3VQv4NuEWeK4p1P",
  "key17": "5eRYeMxDQ7EFSLcmpvahGMNwV9nN7aYTPeGBFjmESwR85Kz5DEdts1mFcoXp2uFVUu4gXgHoUH8c6XC8xfJFrUzP",
  "key18": "ti25XQjG4vf3MPV9o8HJHP3RuMYezGiQ7cVDRHdsqB1PiNVDjcU8BATJmmjxeQXdZTQkZaT8Yw6Ge6vBKp5VLkU",
  "key19": "3RJkdhkL3U8NDmTdyJgEY8SNxCmtsLR9FnmtLPNMxgT13dPnucouv1xr217MQWSN4BLbwnaGV5eTFozQQfmHVf2s",
  "key20": "4fcjzxMc1exNJt9xZbTehaHaPRDP4qArsG143kX8gqd5SM4A4X5TnJLoWv9B2eqPTNyuNR3RmALzJxRq5LmQSPUH",
  "key21": "zWc2wmMJc5vDKvuFaTPRCEDGo1D4DXujwaKeksf2w7iHSWsiUSA6cGSauNpjY4xEsoY4Pf94DrWtDhCu7AWh9zM",
  "key22": "3GbpVfXD5DKjwFKRD6JXDPRfg242CQZNEqGrqTJqBq4TRR6ChoRZUp4A1hEiPwDMZGfETMTpVP7dWTVvZXgrbXQo",
  "key23": "2NUF52r4hy2SGjS5G74ZBk25qP8uqRRfuyXKxbkVrqfX58uGomdXCRNX7uM3jnMVghipsA9Sxss6H2sMzmwb55fF",
  "key24": "fesBaSTrXtRXV1gQ25nDoULKh7Zo5rGPvFWsK6rt7VHH6oCFxu3F95V48qshLJg7ZbUBaj9KDGhWLXqnKrk6exZ",
  "key25": "3t5oZ85vsn9heqg1UPjsyqAL4nRer8VFUxWpf4XEj6GCAiop4G5YRpYxjVK28sci4htYTUfKofEmbpUseizZHzKr",
  "key26": "GZ1s6imtywqPGfs6WRMmFqaNviTNKmT1eAzxmSbmqkNiKDxz7ZW8FSFEMWNenDELQ6P2nw4ELSPjxmXvCyjv6AY",
  "key27": "63AjwKEQJ8229VQjnHbUyFUkYPs2SLsqksHmoi8xN68K11SDjXqtSrbkqdy8npqbkhqaYTHw38umW96afYYn2yAF",
  "key28": "brHTAbU4NWysqCoFRpFZSCa5VzjtMKeZrjbcbWhCQSGvi4XoT1za6U9ut2agSkXU9jwEeJPo4K2eoHyDooqNqnq",
  "key29": "2n8wWiLfVaaHcZvc3Mz1xDJdM5S5MfpRjrhtDkfhnX2X2US6YZMR4mMpeaHE85Jxjs1hzCjYJpbWjJGwzaardRGo",
  "key30": "5KKHjJzMjQTZWtRcZwkjkTuf8T2HTSJZgmkLrWhJwSkYEvwHwYsBEXTZuHHNtbFu3McnsfKsWGuY2yJrUCEqHn7M",
  "key31": "37mo8Sjd3pKNsgGAS9GxPZ4AWrUbYWQhcX6LnDJhTsuQJGKwpUBsGNwgMdAW51ovN7pw84X71xY2GiuFprojyWdc",
  "key32": "2UuJxXrSR4Cbw1N8NEMK9xJFmgLjgPEGGa7Vpc7bi5f6RgBdipu74eGxqMoDcRcaYtvetBvJG56EcSy9wspCkx8J",
  "key33": "2WU4D9dmE9qdSFV1WdMyK6XQZtTAEW5DP4goraBXhdpQ7xmn6ZAPdjaZrRrX5RNxA3Y7av2ZzgyUXeJboA5D4ekJ",
  "key34": "3vQ4bZk7s7cT14gustjXHBSQwr9vpEdtVMdxqTB92BkxPWWgdFei8QWziEEgFwPcvyfQSJoG53LNNkRJDh9ZZkMC",
  "key35": "3Tcsd1YiUp9MbRkGBFo6NnzBZvCVvL9mZQk8M8gDypZyaCikizcbMz7ScUbwxVogGMKFZMRzNAYZV83r347zASXd",
  "key36": "2R6i1t9tSG5HkpmhBscF2AkEWKrJSCLpBE7MSHaRGPqL4F3KuUvAHmjSAaKcZ5sJDyCDGUTNCmCUA6Cv9vadZjyu"
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
