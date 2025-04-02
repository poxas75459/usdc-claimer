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
    "2Avm77fAMRbLTTJnQJeG67CHR9zrTjyESigxyN3sVe2GP2MPWXvKFKpy8DNBaxAAuJiZ7STHs27F4Cez5HAu7ms6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LtGuKWoVrhv8kcSUNkB8Td13azWQbonnc2fPkiCr2dKQeSGGZuMUA85dT7y4FYgALWbmTBV3M8XfgU2rRf427Qv",
  "key1": "2U9HJev9y2RnE4KbmpH5T6x5gcDYzVBuWHXXHXyF9R4GrfAobigUaDyrzB2V3seenkP84cpHBnfwyQpK3j2M2cFF",
  "key2": "3EJpaMpprMRrpSktfiuu5P9Qvs5vd589JGT1cTNZXaqQRmUuqhaRmCU7xBdvtWcDdjUXmAPUzhgVS7LrzsxF1p2Y",
  "key3": "3DdyDtrpPxHDzzGCjiJw3TrhfTiLjp9CUgdTK1EFy1xZeqfM6BrZsrU8yyMJgHemBsD43Z6JSEoqTpPBgFPwEaXA",
  "key4": "4bWnhP44C8NohNMC44Gr8aGfwUs7vL9YaLTsiDsLMdv4sP1uAhvovsuCmYEbxn7MBGDmbyjYinSpuAEFFArXyEzw",
  "key5": "5FEBX1kbco5NKBjKAgSN4nPix8KfPJitZfYcHs9LLKFzTg1NAuiGPpws7nbtZWEYhKWLP1dgb4iFkHcjsxwRZLqp",
  "key6": "2FWdxvtDaNMG6PCHMmtfmb3dbVw6vYxpSGdV6kof6XqYrX9YdZs4AnFhw38FV5vNNh89y8jLRkovXJLcZwgjkTJ2",
  "key7": "3Xm6WAPDXEeT2YaXPQwyFVHVfJoqGZD7vxsrFThDJcsHndz4BHqoM5mFvYT3hBBryUEZc3rRt52E5sbbaNHc9hAU",
  "key8": "5GPX9huA4ioKV3HqiW21jhZwydH1XJz3nTqDux3Sr4v1R1H5aXdNaAc4pRqENN7jkT1TuyQi2c2Eg2M8W2cSbgu2",
  "key9": "37Sbvec5wJc3u1j2wG5tAUfRpkZFVzbyCzPmGHSf7ZDRRHfo5QPJXAe8uPWaQP9x2ZtXTafX9ebgJXRWar8q9Jsb",
  "key10": "61NEV1yhJonAhKVPQQaiKdrZpRWD3BudW6Eh7dctH62ZxfqisnFd5sUUbcmJjmKE4PCqVM2XLBTPfKMYjvJM9XT3",
  "key11": "3kaNLGbGJmcwrATYtChL8aQJapHfatasNRmxKpV8iXdSRsKwyLACYFLyGH3uVo6z35S718FFUizXicS7Hi5RSnjq",
  "key12": "64rVw39uTUq9JfmuzeZswLw2Y7Uk2gnbsd6Cn2snyYTbHdNgfWSyPy51RQNb3NHxBRgQDBGccwr91ytn1pGhTgCK",
  "key13": "3tAeJmC3LKAxaGHbs8Jt6i3EiNosWjte1T21um6fqVYYmbnFpB9tUwRaq7RidGUwwkb4Cort5hepfTbAwygZ9X3d",
  "key14": "3bVnGsGiv1NiJoS7neVmikqQpuBD3fMWP15N5GxwKW1aN38eKsN2MfZ4CCyX79TupjSvDcBQ6heQoZUpXjpnuj1x",
  "key15": "4fWjYycWP1EvqSuQB2sS9D3E8ZUrHKAgzL1dcT2TYY7uLwaxqV3SaaMDBKmvTbsze5LtvS3ct3kqtbynyhMztyBo",
  "key16": "2mp92j3X3aNfRJ2464YLScLqDUfkBoYt14XEhLSPzeKE9cKxj9wJzkzE58K1w1qjZ3qBsgUJG9TpxpoWXjwBoUwt",
  "key17": "3YQf4V4dNZvz5j1nmvEXhPFEqZo6hfnxHnvyek5wF5deT49d5c2HQWqkGqayisKVmxcxrNMBBmE8yS97k6BiJQeL",
  "key18": "uGRcJ7AqRZsjh4Fm1BfMNkr6yvmL9tsFcLd9vV7cN2RC3k7LLjDp8LGiTwzjjzbFYpxskH5j1L8gUhh44aYR386",
  "key19": "2eUcCdoKndmQNn33iwWJcY133fG4QQwaYhNeMQp8QizboHk3Zyt5Q4TextZE4Ntxg58kwocgx2LiMZEt6pgcVsgM",
  "key20": "5BVqfi4DmDaUEFTT3Z5ydyfTtF5qyYD41RdEcc3wuGh7CHnUBctVG6ZJ7ktXivrjvFDTh9kb8wTidjFkafdSW416",
  "key21": "3x5r8GVQFMTm9zsbbKb5ZoFU3LFEJfzf3K1iGKMBt1G5Qdo8LD7Vbc3Y5aQKammXs3dmEgyRjrGVs5YpMCAEniye",
  "key22": "q9eKQFZeYSwCpxPf8292WZ8JzBzisUm3GfUH39eLfgB4XfkSupgqPztDTRzjj9tV73uSvx1KQQX8ucUXMCbFhJF",
  "key23": "5VVxnDbL7rv1dA7Sj2EmWB3amQkVrkfA5BoNeTccLFuUa2DQBh39SPu7RxusjxifBchLp22NhANcY7cpGdRy8yV9",
  "key24": "4No98LchmJfnzjtLaCf2mGB4em9QdF5XUCvy8cdd2uezaRDcz5dQTkBDj8Lt9iBsCEQx8J54UHSkgTpNntZ5KrnL",
  "key25": "27GHehzDEn4ovgtVBYVgYZ9hd2UF4zK9ubvHqbkiT7WxvEV77j2JMqZu6G3nBjyo575y66H48ZvWMXpWaAeP7HHJ",
  "key26": "3hGhX4GEVbaxp7WsepNyTSmui1VmqQ8LyHru16WEbz7WBuHNvw8VoReFVjTkHaTUwLhUWCbnMDMBWQxvGHKtTKzG",
  "key27": "yJXPDic3A1EUz7TgWSABQM3ewzdqaadCzLkg4FFq8nv46Us1gteofHR6NtThvAiY683fkER85xtFFnzUCKQPHwK",
  "key28": "CttHAGW1HEitJC9ZHiCgcE6LLjygZJu3tnov9qhnZK1Tbre4kAVN7CsGHQRdVDFbjchhXzNYVnFfhpzxYMP7LHt",
  "key29": "5C4VfCHhG8bUkfDVoq93rVeWUtRGBuX1mwFwQEYRnPwzFtQYkGz4UAsBaiRi1M7RE6y22N3LcVeqwXJwBtj4b5Ag",
  "key30": "a1XvQefZJzJbKYp2LcbVyFd8eVidYZkp8BFnEvERrWFy1XuzeYC6Qv2Q75PhiD9ek62a1WwYnaLJJqucW4jAbjS",
  "key31": "5drEzbUmHmiVZYGroVED1rUNwQsz2mWgPFQHcgiPa7LSdAnrv8HaZHk5JyNr6BUzVDCsUGVNkbsCSJWQzg9CSJ7L",
  "key32": "4rzAdaAtQWwiPzayXhyVY2sHjG337cFCa9NJURqdC2S7a1gyyWtqMQQnkUcgRbz7mt51r8MNeYfbbeuegCnJ7Qnk",
  "key33": "mLeAnXq8yFf9c1cp45ZXmT9yh8K4MN3cihANje2AANtZGh9wN1owjAuepugGYidYrS6F7Q9cg1Yr1QJoUwndt6j",
  "key34": "2X5BLZ2pM4DAgd1fh6PuHndwkcm7FU81MvzbVKNSyN6FGMVWJMUKh5JRPQKDsT6ALt1rTNJqTHVksVutxb36rA9c",
  "key35": "57pCsricbF23PYsfwnd8ytHTXgkwsgDDGQPqHRFLTMoCdQB4f2jwtT6JzyBxjPNxBFd9uj5LDsa9pp23mXbWStjF",
  "key36": "4gJ6adLYf2u3eWGTCqwXDhVvndJ6sNNBypwzSr8wbDwTtSCagkfHV7hMf7nDwabcd7wt7JfwBsVovbw47t822rRs",
  "key37": "5qazcm1nmQSdyTb1p2GPaUNsuBG89a5epNYkXnccxmmi1Xifu9zWVJhoZ1P2AuCWW5kie4AD7qPRDpySybBuxG6G",
  "key38": "2HPwJWktQULhxzAP3KCENizNVPhWXND8ni1kzh2rPGvEwKpXzLKH9ZK6b3G15i28KiGYCPWrdj3JetjWfkcCwNdh"
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
