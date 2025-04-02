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
    "3wNg1nDYLCGokHzR8RVxogVVtz52fYwVHTAYP3pgX7xo7ktrAe8hwDBzyTG3vfBcyxNsZTrCSFv51ot8D8PvCyic"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F6hxNV5FUQ8cnSpau6CTw6jvmYwnzXkmpJTMJ5FisSC1U6mc88EjRi4nPPRTZJtBB1FZ9LnyrzUu2dTkoe9ukLE",
  "key1": "5kfuqGbd22UhKMK87iSHWBMPHg8KvygFrpoqhGmQA6AV1s5zY57mwGteWds3zGtqzGeM9SSuwG211CJ5NKWei3HZ",
  "key2": "4BcHZEWArtZ3W9qJEWvPpWoNx191fjJRmudXG467MXd2g7CfJAHXyqG92WDXu99aUtW193KkgGTqYPdueteAdfMX",
  "key3": "63aAtMB5RKENbxEE5a7fdAUc1iKVeJHvxmHJVhwVAFzcvod2zBVSq2s6UDcimsxJi1MFnVAoQJicTGya1kLZVVgC",
  "key4": "3FzyAkQ38E7yRFkg9DXFaXBmxEAWNgwJnykzfRchj35Y6H3juvm3ow9G6CodxQFqtLNfAQpcDbY9LeMtUaLdjCQM",
  "key5": "3MEMzvCeXMgg1BKKj5vSKpDMctu446PbSAKdqJaqWXVWA6Nsa517a3jTR8QEP1AdTELbvp94PgfAU6TQgPU7C1Fr",
  "key6": "4eKXJD7Pmio9nZTbA2FTWUw22eAniHv97PM6zZG5oEH2JpGmfmnrDLbWMwE6aTJF95j57p83miyUxdCuJXqSR6nq",
  "key7": "3QQ6tRCwH4ohWu48w6ARQHxwmiXYzhiXwM9njaJjprc9KsYyeA9iYCSvVr9RpQkjQ4CB5gk6T6T3UQXpVxQcUYJD",
  "key8": "5sKr1tccfXEhpAsPuJuVzHFn3brrVwpCKwcM1i67xiYr3c4oX4teSJSEKzh2GeLJXZ2jnxNQL176uE6tXoEtmZZj",
  "key9": "2G1G8z6Gp7HwfTpkwqPckn1LF891qGJ24RrDX3ds4Tk4Lfe6t4H6YcNm6K8akmwZbrXX8TiiE8J6Q4igsL7BSmLA",
  "key10": "2FkmpfzCCdGWb4JQNSLJnzpcWnM6bnhxeHZS3BbLWMrropAH4Mvf5RisRb45o99AdhvC1iVkp5frKV12ehrvhDQg",
  "key11": "67MNo7ZPzioej6c8GbeF27gsjXYZKyhh8MRetNbhwhnqwTK8oyy62XoU7kKCgzn4WU6iDHqs9z7gAHjaSbowWAuC",
  "key12": "4fAxF1Hc3vk6vETqdhSVjEYMEJUm1vmB5TvsY9AtP7ThFFrzJWNMRC4JFCLt8gsvbJVyGrvpvPv6x1AAmi9r8RE5",
  "key13": "4JeaqSWzuudb3K1PQBrXys9HmqtU4GcrZYWMW3bJDs45kK4ctzj7EAfdzmEWjT3W8b7ZS2BA6672RErXB4WM3oLP",
  "key14": "5WdXtqASz1378bWqwVR27FZb5dZhfsah5QV5NsFoiw6MZQC1eV6JwMVs9xxdyzM4LtD4tiCkoe6vUbxN1EfFTq8i",
  "key15": "3KixA1RZW9jX71ppM7Gk6t77oZseF1ccSCY2exJVRVZPHzdYC8jb1fvFmMiPF1WhVRqikhC9NGSiag181bFZHkCs",
  "key16": "4UdFu2Xzo7sGkoUrMdcdpzZqbJwJkJfrh9biiDnaHVHaXHMqRZHxqoKHhxYgfwncwMKurHAkn2yUK4Du4towzLyX",
  "key17": "2g5L7aNxXn8rVW6N4XCdwLKPBbsCGivesVTdGMQX2XjUwGBPqCjcxXbq3VFDn2pzhVZuFrf9wCtYzBRtwsFkmdTg",
  "key18": "3eReccC7qWetpM7RsyMHa7pFgSuJCUwdnm6EWwvqUPW47rveCiVKDY72zU7WAnAVSdTcfhmrGHiQKRbSvoTpXpdw",
  "key19": "2xDctYJBx6RLWCArHTihxGqWr6P5vXxcibv2c97dy9Fpa3UjFv5ERf5A1cDLKGrZde1wtKV5dcDAjrtCQUTh27V",
  "key20": "7ZHNK8yDHmNRWBXxgq7aauxjMZByzufNZKw45bNJNq85LXNj7c76966angURA65akLavE8oHg54qMnG9xCPj2Ba",
  "key21": "3Frrp466RVVKYeXkn3mB3CcLfUTuvk8nSsbBgpmxmVJWThmerhP1mVcMTaJfZoVn77rjmJDv4GrriiX5sf2kaTf4",
  "key22": "5ZNwAFb7eJPHUVXCircdYzrnQ9P2JiZ81umqFZNYrTxCoYcz71ru4BnFqmqZyx88n8dBiTS3c6KdVkfDcxi4X3rp",
  "key23": "3kiymttMBkigGmaihibP7gw8vFdPCH3LmaFV7LNzHWoGeDuGoPrrcueyHuehKxCaWoCmAWPWfMC5KEfqTcw6orzz",
  "key24": "3iDq2hPt4trgXbURTsNrstiy9ARQ2wM9HeewyygwLERQYryK55769DQoBgxnD3iuENU1eYmhnF7VAzyk27k2zGS",
  "key25": "zizwwbvnrSFgZqshauqmZovkw3nc7XU5XoAYDJrbDEdetEeFjWMUfAjrsDKg5c9eVFArSgUVrMrRL3Ye4F4jLvu",
  "key26": "4eVWCojEMTKJeMcPuYmN9i66DdFETdBo7fz8WRjCeSXTfq3Mr6bdkh9jbYzvL7poXFAkALcRcCu83QVJnvGs2tU9",
  "key27": "vQrgeojh3DHdmZf3GkiWYb5fsvS8iSoacLGcxsEuPu1dzE1JhLa2mf9JCAoJumhoaLHDJPpwi2NrbHax9v4eLpD"
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
