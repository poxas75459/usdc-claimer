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
    "31CEWN7xbk8XXmKt61UMq7nx3UQbpXGXHnWRjpRn7ip3uhWTn94uKUWrjjA2NPFEvDpTTJCnn8y3HPP9HpPL9KvC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mXAXybsivFmdYWinPHNJATYGr3pi9dD5sTmu2gr61ysySQRy3J1b47Vo3XwEjfRgV724WAjr1qwya9tKUoagssC",
  "key1": "38H2GMFozvH5CganjkGTsZhutRCrhMu8Vb4BrZ41PkyGB691Sx5FD2cdDVk91ozB5DLTTb2iiqPts4uBadTEw3md",
  "key2": "dHrGxzgsk7kKkY5cthHLdTQB95ccNg58EVxpwUUgri5yAu8SjyRU7xDoCf8dyBLWn6X7mxrMrZx6yynLmuB1dtG",
  "key3": "2WSpNSo4Aj4ZzkaibN6KQNaitCdfZfubHGfufzxsxFLhNhR27WpHva8tsHCXJhfnu5nonsiqYeB9yZmPQdnyPhJz",
  "key4": "2nRAg7DDndrqPS4h6VoAV191WJ13tMZr6QP3ijTxpq1tRUqe5GkcxtANWFoP2HKj3tiSC7XwrCEUKS9d6W5PtrHe",
  "key5": "3JaA7PGRhRZHV7HER2bKaWB7WW1Yh4de66Zyg62va9kRsmHfHj5vxeoEMV4a6yvEDAruTHJBRLFkUYjqRqmqmhi8",
  "key6": "3J29gu4EajBiVFpfBZUhCDABwrCE3bRjzQpHnvPNzUnLtPTimKRUGPkSTwvwLtgquYTyEifB62G6r2xhcuZu7Xnv",
  "key7": "4APyANSwNY7hfp9wvNcSxMs7MrZgG7pZe5Am64FijYtR7xzzyhQYnT1MYK6Bmx5zeprgUs2izKJrVD6VACgAHfeZ",
  "key8": "2GsBmuetSHngjenPg6bwzR5HztBHEZyFDGonmvZgrKEoj3A3ARJbh3r92v6fd9J15fQCqKiMoPya2hYTTxjBY6K3",
  "key9": "5mNUdnhUS69kHPiPfAptZGMksXZr4ttL8quSPMhWMDHvSwE2dz4ymPFK5YP1XDoBBJ9e8oTnyLuvhZ2GiAQ25dav",
  "key10": "63A3Z17j8tuC5yBHNPeHF9sy6uLjxT2NgdJGggbNy2PTHpMSqHCfckzHsckpDUKZDhCrkB6fb8ssCWhwZDVWxGZS",
  "key11": "HyvymkBbE26VLhCf39vmMLJrHzpqPpdfp2Zo3LmTa6zTUx6R7mZwqSNhPUFPhZxR9MA7N52TgBJTmwnac9Zn8zf",
  "key12": "3XjfdBQxPxPkerwZbWWtAwmbNKh6bsG97BoNjnH3uB6YUUWBYkVwTg8eQ2Loc7sc8zArs5bKBrmfL81qA1Qj6Tvh",
  "key13": "5uDCaCVV6v8fP4UCaPuezUoxty2WvCThhuonyd7vnxvzKskMoB3x4M34EQMaX3Nha8AVC22GWN6fVz4bNKHKRdFu",
  "key14": "TWCeknWqf86hJWjpG9UtVM4r6nnkqZCPP1WAEMBMNMq1CyhhCGvc2vNQdg5LLrqj5qSGzFBMTMPP2J5iUp7jf6i",
  "key15": "ou2H7L52omBnZj5jRNQ5vjUkcqA1igjBZZF9NJPa2nQMjAfngHWHkhZCjr72dM1J5TzvxxmVGmc4BCRUiekGL4Y",
  "key16": "3ZjZu92PYxnbYkTW8kJufm7zoKuxohVdrCKzTujxb34USqdXoWsSGcm7PTum6ZpvXucHBWiVCGWsN69v6WzXcb7u",
  "key17": "29GemnuXHGQDkVNsdyYsNXkYQtQbywAeFmruPUE8iko77MyGsVYvLXjKdGuRQ1dy8AAAZsVrF5kgEKZ91Ziw71zz",
  "key18": "4DTa4J475MBRXVN4ccyRSnmG5YYxnyiuQkNjHMotrw6MUE2M4Pmnd5Pj4BvD9YRDBWoDVLEn6erbjVre3GLuVGX",
  "key19": "yN5Xts6gQfPPNxAvYP34Bsv4P36hk47WtUXfmXbdamhJBAv1uP1GagabgjoqHNeqKGgffhUfwDECAr7o5SU2uL2",
  "key20": "exHV9v41GkNLrTzU3ufafWMTDF7zTKyWuy1uBzBeanFPRdtKzVa38dfSaHLjeJAJ6bkapU5pg2Dhq1iApd62qZk",
  "key21": "59wgShMu1BGnSE27giwMBXbcCWNu3ipMWkU5Zf99w5Kc1xzc2JAyqQiW17jJy4pjgBYHqmcdshEfs81eWsNXzxxh",
  "key22": "2eVxE8vtM1KQzErvHYiE5LKq7KtVDBwnp6kYL8SbvBs7HtRur82Q3ivVNC6S2zABDNh4ViFJq8XXtntactyUZ3fk",
  "key23": "4GteQwCtbb2SFWGERwC9LK3MbBbyh1eWeoHLTKunhZkHpYztErCy2WoKHRDjagcFBVcHKxkdNrc5NZ7gNM7zN7u",
  "key24": "39FMphE6pLgTmTpmGiFadwn1sBpAxbj8wDTdbuoa2qaL2uMPfQAmUiKQLBzeHqs5YJ5J8PzZRw757n97vRKypQNh",
  "key25": "Napmb6jok6CwUbZeGtNJTdyXUoCz7uxo7yBmmb651LgZoEsMff8fJbSprti4eo6dMVR7z8Qoh9bfpxA3bCKaACY",
  "key26": "3ifGwtgda6hsrBxeeVXCqtXXsjLeWR8VfjQLEgQWrym9a2sQb1w36H7f3RyKngUhn8eqMNuUjcozacUvs146MA9H",
  "key27": "4XJTSTTZPz945pJpcrsrTodjHFVj3kHuJcotNXLkZKxfv5LARswWynGtTXBjyLMSk7QdFXsSvt1RvG8bWtysJFpz",
  "key28": "4ByqhpBF4BX47K6CGaupocSY4F5H6oexFxBvfbj9um5P53LWqvf4vskqU32UTke52ziwMwVbvyZ6tNm6rr96B8VM",
  "key29": "25RC8piRhMipJzX9XGjJJE3nJHDywsyLtEgw1es6CwQch5L9cVJzNny1LSe2LY4AVEjzf8oBGoausrYv6i3AntYr",
  "key30": "61GKAZMNTBxgLzoGfDuyhwLRadgDYnGWwQyTG193BKYbeptPokmRWv9zRvX8LsSZmKuZXB7qUxpjZyoQmNDU5BEd"
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
