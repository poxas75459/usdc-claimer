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
    "4mQkybnsMGD7stqbNNXPxapKDQE6jhSsrS7njeBanEpGgJ93uCCeyfLbxZMbevJJz6qH9KQWu5cMVniwjzhPvqtF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DmuxfsxGQRHYekLnt49TgLTXknBj4Ab6AJKMYEi9XpjmUJKdSd8drVXig8jKxd5pJFHbatsL9pNB5eHrBWh7pk4",
  "key1": "rSTz1rcLBcC17mKstPhMDrLno8RCn4b6t2X3JjqbjoDhHmq1ob8P59AJGk7GFe91YsrLNhxCxhJegbjeRZaxMyu",
  "key2": "3aBZF2kphaC6Sxpmcq3yL5HUcuswfX1PPQXpPoxsLm7Kn1HZ3QQVSsjNaeE8gmEzEWpbsrRou283CGSsyECwmtYo",
  "key3": "3Wi5xPtJ9YLDj9uPJJUP4nVivs9YPKXsSCKVpHN44aUGKoxuJYSioTTToA5r2HiRF8G8JfvoTjeMtKQT7XXuu64n",
  "key4": "2gnez4ois6uvGHFAwwYPApe6diWeP3ED4Y7cv7khkVnDVM15iALLV2G44qzDks3BDDUWquYYBaNievoj26YGUGze",
  "key5": "5A2iaU6YaUxUbqEYQxx23KDrUjiQtRuXhYG6uxp6jUs42wfopoy9o9miFLVsmMT17EcwsK4kt6SaccbsBWK7fNxm",
  "key6": "43MHAqC5wYiVqhDmkj4g9N57hd6dvMpyTfMszMFxKroVB5hqDcApocf76j7siBqupbU2BAWvtoK6LXVMUViSHMdB",
  "key7": "xnnRcQfT7XjkmVzJL9yseWjJtefgV8QN7cNsD5p3hUwvw88kbpA5rA7VpnUKtmipgsWHPCmrMUHi69B968TLCz5",
  "key8": "vmcoKv2EefHeqLLUgqNiWGb5qnzQHJyVJSmCKoCGZfkPXcGJQED3y1HFFS9oBGm2NYoAhMnmRKpVPrxgYBDmHNG",
  "key9": "5addejBi2kEYV5hRPtx8sauLxRxddB96gypjHNEN2NiLrJsqVyD9Bih1hQJ5u8n6swRWD5TxTZUm7QiZstA7sci2",
  "key10": "hLTPD42ztS1qvmBdQxRCaBicVoNYbuGTJB21Tkkc77KduNhvAKfGE8JwdFiNsu5YwY7vBePWNZF8kAGArVrSmg7",
  "key11": "u31pkyyAHmZSE5hrfqxd36V4CrfQYyucasBUAsDnfjsFqEZiRqBLzmbwY6imxGdmEXQtiyewjVApLpWWapFUvv8",
  "key12": "4vddQtnHdh6bzEPvh7DTrEnhVxdHrU6LaBnceZbroYqQNpdjdKizRYvtUykwLnBwbPZV9cmMJZxZqqy8FYFrh2Xc",
  "key13": "3ktK9ZcTjRWh2kBoPMPGpEFitdjNJH3wjAdTyDnUY5rJ1a8BCPPeruhBuUTXyeyjThqwteP8J7VcfKvufc7tpg4e",
  "key14": "2DLHWA1ptWSzyY7rYbL3kMTyA9R61nxmpe4KwK52qtZbnMJAeYUdGpsWaeJXozRJvJjC8ZhfQM5aeH7FuKHB8nKG",
  "key15": "3dBSAniJHJoDWjpQWY6Afb5x66MQQk4Az1v5cT3aNcsHkvhX8N7FgbrqXYVj979HZGxdmrwoo4Ax7TnHabP8qX9V",
  "key16": "3rGKrqxd4vBFKuzUCscfKWyGyAD221SQS9Svp1BX9jK2D9vHjtVAFCDyLTrxhDZm4BGQsQLLrNLZYMzpNBQX9Dky",
  "key17": "5o9qiW1v6uYhoE64ZxQheGBCg4bZSWjksW9BDbxa7yaJrAY859difrsisE3tLGjmi1uCafaMsnqERVjbUYvSkoty",
  "key18": "4FeKKRG2ViUG2LpS5467tGdJcYg8ScgeSjwDWRtyHUQEskGebH7ekknZEqZ7zkWqvR9hpHNuU8QV9ZVkQTv4sUjw",
  "key19": "4Aw9GnkubRxtSxiXa1cTUfDDccfURX7BLTEWY5yX9jpcYVxZnx5D2AS7k9k5xFtjwAajc8TczzP36dWAGrRCB1QU",
  "key20": "5cbvvee8gFDBYB76GCWXpvxte4dB5h5W8TSVXKiqrURwfaHHHDR4TxkRnJg2koZg5J9P4Bt4GwJSSQBbLkGJMka2",
  "key21": "5FacCh8yRk285YUw2uyj3bRNZMkyVFGSAWA3fXMAkboG6jxDsLW6YQw1v9ruC55ZFArh8PGbyJtJBmzoDdXjrUWN",
  "key22": "5TaoR7NQHC1EbkwKeMmY2ffS4kiaisk77NGHUkAmZYoKDHuPPPUghqRfU1fV3KGV7PmsQU4gx7RRnNMFftz4gXNo",
  "key23": "2Avb1ZvCdui2mKwa7hLDLRd86J7Zv59ng7M9Ft18HgyNKN6ifjivzbP4XtzAEKVe6QxDd5rjovsaA5jnBVnsPqVM",
  "key24": "2ZweSh29qnYfc9wDFWfvMr8SxP758rrkWavVr51uqdS6GDhzoYX18AMJ4dWGYUr9Q4g4PdH5iaDuoAHZZSVWDieR",
  "key25": "4w5n7RFM5rU3TBedeAfJcR5Ti3AeWnSZaoHTogpdkbxmGYa3VgkJKXWeNLbJicVm7rH9TsYY5TogVa9HTNmozCs4",
  "key26": "2fQWBNC4esGwjqgZL35yMp9KbryVErqSPTXWWGsC4vnJLHYUWqXwnVSP3117GEuAyQdQU8ojGZ2uTK6sRYHxGzqP",
  "key27": "4kxcAVoijm4fUnafiWquCxcJbGtFvND9BBTSngEB68pu2vRq2uqMMtCyx9f4XPxNoz4GN21obDSriFnKofsy53Nn",
  "key28": "5vDd4N7wZYhJzg1dXiqMAq3EKRb2pXbmCXpPAthmu6YHCHzpz4k6817ysWK9joLkMhuHGhRe1uCJnGBQjkqv9Cqn",
  "key29": "yMtAVHcDm8jGxTZDiFfp8FZqxc6XNbirX9k943pinQpE2xs8kbCLTXAZMbBBZbySGu2KJwhMDYjjuvF9quaMQB1",
  "key30": "2eZHv6Lpvp1FJQ6GCn9v3ejUpfgx64bGwYVBqDnEGK3CmtxgyGyFn2hK6aHNmtDGc8dufxUDCcbS69Wr5U8XGPvf",
  "key31": "CAaAf3utta3kCneoRvok5hwwN1cn9wm7Bw3LVYpRVhxDWhj74LEL96TtnLUB7cm8X8obxaAv3Xsp6uByoofdJLS",
  "key32": "msvZscjL8V62dprtWdBysEaC87k5AMVQhg5PpSuzZCFKSV9GkjuwFGvn5Kznf7NvdsFAW35t3TF5QEG5NtmeVDX",
  "key33": "oUiXdufWp1LGD61cVaM5itDidF5JBhkbsQVJdts2MEXhQvWMn2kTD9c2FKgCz3VkGKpMoGknx6AmtyBEFfgZCJi",
  "key34": "3pT5z5pkUf7FCV3iJWUhZCyD8yyCohSNswYCUq6YZwEbWfG62sF3yZwD84psSNRE3wQNhWJweLjwBE2awU3yZuDn",
  "key35": "4R99Rh6Pkf8nfdTB5WSm9WtQgH5ZvzzDrqrYtxake4q7xsP7UZQ2gfxXWhSrZ58UMLykr5KerhN7E5SStNBcFSnx",
  "key36": "2d3jhGAm3MvAf8vDpYYqqPpEnhWdh49GKucyEF2V1bkBW5tKJj8a8GGXaXo7b6ZTuz5UtDPtjFPVFVKhuHSY8yHe",
  "key37": "3DC6PReNBT9WaswGV2jonBqEZJqaHByNGWjnKJdGdGGwDiP8EKJWHy5ygfqhWJPxpzeQqi96QEYyKvD2wbMzidrz",
  "key38": "4XBjijkuD8v4LuvhU2ziTHpzxTJyxDqxjmGue1E4CKHxzbrasVgdcQ5CTMp58VBVbH5wGuGdmJekwDDGYniWXQmC",
  "key39": "4qrVaReNV122CWKp8FVp1ra4x6urZux8KUei3K3ZpGSjXVWUyEDTsGoaPvuZgn89KwxZpWFAEhr76tT6VPnHJJMi"
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
