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
    "5JqQDumDfxDpC4nnsgLxUjNZ8riF8efhAcbDpXT7t6GQKywvSs6oWHWsMGXYzT7tKkPdKsNKU6U26uyqueukxBBZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t7PX8QP4EysvKWQNBAuMfMxTwWodh1jhog6GZrMsFTgMuYg1wELWZ4jzzSj5Lui9dRkhP9Q9ku1R2EGtPNyTusj",
  "key1": "3zxnfEUxRYbgdETGocmV8MrDpQvmQNrfAuuLge2w6ju3oZkQa7ApX67Jq6YA5DELYMXRG5kvbR2zFEL2u8wRg8oU",
  "key2": "5Bfx9cgrzMN4Z8VMGPKH1v3AFKvFXessw1BxESFdM4o2utYCCc6Ds2YuspHdNU92CMz2UMBN7M7jKsdDjayq1wvp",
  "key3": "3BQj6WExLxgBGgKAswYkC9pmFHHuuvqqZSg73THc2ccqPrBqwfkbFw4aeXoivqiEnpZhP6Rz2GEwvmKUJ5gf5dEq",
  "key4": "y6VBSVZWZDK7SotP9LGx3YXzuTkuMCoDcA8d467NyqHWnyqgBazYzx74HnaEfW8mt2M7mhnimsTk2jWAU38RTy3",
  "key5": "3yM9h79xCdEXiD678HoUGsv9hFtNYaadrUHTESMAEWsbGrpQCKXbhKpy1NjT8scwSDg2nW9fto4tCpVj23LsEVwB",
  "key6": "B9UqmFd29Y51PdiEoQYwqP3PnWnjjH3LZgBSdYxHbtQPBsqmcfPF7i9msQoUfScKKVAPhFkhoyCwzQadZgdAxKp",
  "key7": "VTiYDhnVo31prRuhQfwThcjeiEyhgQcygw5KtSQj7VAxcBaYNAgCxZXsMirZMF5f1mzUFgV8g9Cmuk5pyD1hsmq",
  "key8": "4cYRdSyXMQ1wmkSLQkWHoPJaVFnXnz1LDbekAm7srSnrRisT4MWvKkLdWdiPnYpDzU8sgz9S4ZBZtLuxTSyeRRMW",
  "key9": "4fjuiVKU8UsRSn7Lk3MMUNUCvDAvVm7umkmsQFpCzHKKZ5ke3PVfMAvmFGc4aaKaKk7ANdCzjWgXQdmBSte3cLVw",
  "key10": "wFNPpukgiYEoWi4pbMTjxPGgVqDZSxXWRrdhCN9dnh8BeoahbBDZ8tjYVkDUsDs4U12TLVqe3oiN4ivDnzZDVeS",
  "key11": "N9PqyctJi2ixKVJRaC13YVLR27j2jfxYkp2Xs2gjAfXFaAHJgyZKzuCCSvUfb4HBZnfBbBX3Q9obvdDDqrFnrKz",
  "key12": "2LinHeQX7aXPopvh9wERKvABvt3mdYQMKuKzzGgh9pLWKqZnZGAeesmNAaJJW5Jyt3PDDTBmyRUk2QWRUnnXgKrN",
  "key13": "4YqfJWiHpL6JiQ8A8JJu9Z47MYrrqBWkdPVWhNuyGpDX3zNKdVQTsyTZuKMfHY74wCmkY52dX6f3f1EKjeHrdiau",
  "key14": "3EnK2Ncv6pAgYT1qczicjvnT7uxFapwZTU6QV8Se5R2NxdtU3HxDbv8gB5DyDffq8UPXnkKGa1gg5Bw9soK56bh1",
  "key15": "3WvBweiN47QSeVJqCetKCvuP8VchPvF3w7nhZVE5drXqE9kEbri4rDQPg5G8x5feM2QcuhgPKuieBsnJMfQfaQu7",
  "key16": "4gbdtDngE8ECwDkW8bwE9VrPLMvnnFbaNLPUyJMEEMbTEc61mfzmnnjeywYK6PdbvenNCkxoF555GhLm6E6DHnaH",
  "key17": "3okepJubQKZdqVrn7XBG3xe9nA1nnsqjJhBZJVJLbNAdGQwSM3tKZxh5ar9VKjs4ndxmAxHudABoepnAShh45wCm",
  "key18": "2hE5Lw6bvpj4VWnRdTNFH6GDRhzUwbnzRYVH5FDbArCgLbGjWs6kYWkatrDgZTHEx33G8QQtGRENAdczTSeVx4hd",
  "key19": "4nhUX7E5MZirw413WKnB5SjuL2nHtTcye3VjYVUJxW3Drd6haWFySLEvwE3CoPQdwbGogewiyRKjjhruAS96FjEj",
  "key20": "CGycCeUa9p34jjpZxqhn2ksn8WBZgRmP3fDn2miAWM2cEDrc1XFteAuDKsQCvTcE56bsZMXwVRgAFRNgm9z7Uav",
  "key21": "4gBv2Kr2w3KCjGCQMgAWN95xLRFjnd7DPVY7dono3rBkkxTm38FMRa2U5SbjuhqG2a4176R2EuAuZ5HfGHwgRWnu",
  "key22": "3LWpsxxPraQv1ff1rWWsQH47tAYNyZNpVZkaNs98GTVPvFdBg28KNH6uQXeS3EFHS5htCaqVsjmekdmJZbpbcd3c",
  "key23": "4XbKfp5N1twB69GFsYiDZLdLfVHJSYoGFVCkSM53tQjtFKkaaS1UdqM6FLKXRUJ4sFa8dePATTvJQDJxmNzerubR",
  "key24": "V85Z5yz1NBZ4GeDt1sUxAmdQ6S5DjiH1oVNBiLzNxCRiEZNReGd7NLxz9KACbwEh9kopGkzuFTcStLns64Kfhxo",
  "key25": "QrdN7H7BhwyP8Cz6DnSjhmDTNQq6oLmvhApW7dUZGn4cMKxnJLydQW3dbuNCTBcnKLticrxihmg1HnMcDjC4TBD",
  "key26": "4JX2i1qCqJY5UqKzvppF8nD89FyFxfTXo198wh2cF9MPaNv1tTwt1VZRGhJtWzHnH7bJxKJsMT1ZrKvcwiYEcVaK",
  "key27": "5PG8rMs8gBeJFRCE5EiuGU18MpnF65SGuTpRnVDqhMkh4Ghd7f873hoAmND6w1HHMpaGRxfzeV6fSz26G6uhAvr2",
  "key28": "62dBrXwCSng66XUpERB7yyjk1VgPur1kDgK39q5G1aaFEvJJGvJetMxvd5fRus14fVJKkKDQuUDDb9p938wuEhZF",
  "key29": "3k7jqnqt5P9eTuD4Ag5ExGMtQBJgxeT2Yd89uhVzqk4xywMUPN9gF9cgshRrKavSrpnTuH2nmHwz8JRBbq9jiQQz",
  "key30": "2ZrM4NveJNW7ir2jH6NutEVpiV5YjuQT6KiqneHbLLDK6uCtgoCtVPjBZEnM5W2Kshh1r9DE91pXNSSjL3TzG1mx",
  "key31": "McksCm9qKa3U1HAvuyFH12Ak4xMBk1jD8oJMLy1ApRPuAGdUinhmJSiYxjuHoBcrqY3UZUDgcvX7ZQjUEFWE4VJ",
  "key32": "2xH1rVimfEWKiWqANLMKUbypK6zQ62M52DEFm5jkzGitXcfThSot9dViXruZRmQtUjo8Qz7Cz4LjqpE6L8eF3DwZ",
  "key33": "bCfdwV44WXKLWg55n3YodFFkLDSjxJ2CHxAxa45qgTcQbme6yMat4C4seiFpjAqt5139A5Spn3T1b94AHokrd11",
  "key34": "5oXHgPRXTzRQZbLqMxiU1jQvbHRa44tvqwDa5dWGaxePGURbSLXJMnHZBX2LL1UCAnD47aJTzH7DPyfrcx9dPq1a"
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
