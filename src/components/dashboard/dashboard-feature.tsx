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
    "23n6fHDZmhcppkqK9oMEWiBtuWELWYD39TLP736eYwtTK8gBqYqRYgRHtAV4yptwj4e2qM71UrtzeJimRTLhrDTp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "421V1epTGPZQxYJ2UDHyAdXQJsFtfekPJ8xzGLYbpKKEiohgBnkMYuaTz2YXLukfSkssueWRKpuJpGyGJs5nhxvb",
  "key1": "372D8wRvEwVpbVqUd1FqKfKgKAB5xu5M8RDiGhfoTsj4zEYbhSRDXYSAnK469aKBq6st7o81G4GmoG1BPFnYi5Zw",
  "key2": "5BwHbgcS4jgHQehi4KbhonFqEpJhADBtKA4CJetps6VwAhxDLpgSs57oM97rTRGFNoasBKMdZxud7NT1LGcEsdBv",
  "key3": "5QPfFxUUgAfug3onA72H9hLvBG5R6N5zRXDip8w668aR4hRNDha4TbQixVHqpHXxZFKukwCEQvEJSqPV9XCKidjt",
  "key4": "4r3ntuhakrtr94Z1UcoTL8GLqWd4w7LyF8SqcHDXAw6VJgQXfr5QjPrpE9ajm4UN9yzcab92gXuiEEsZ9TCsNZSi",
  "key5": "5KHpi8VuBTnFG4rJxzTSWffo85YA1wuD61DCEVrPAhisxtddpAT14FMkyJkLZw1M3zaSQ4KmPMnPZLLH4nPY3kPH",
  "key6": "iMEDLe7oHr2YeX53v1xLRpWWLzwh452T1bL21ppD4ryzKpnveKqmoXt8pF8nGooz1ChsDEQ24BpJFBByPkFcFfn",
  "key7": "2ugCSuGQg1bxwZznQPj2aF1R6nQMHQtqEAuCeKuiSpQKxxCjMeon4DRHoJRY7xZiqDEajoW8cuZwEhThLaCynULg",
  "key8": "2kQzq7T4Z6c77iGKsyvCFeV2SFMdxoMGZJUvWk486eDNrYtMvNMSoxeCZbxY2Prh6nqpaFVUj46TMJ9HsXTLXQZr",
  "key9": "eUv5nGotLTDw5gnQMxApbzVV7J3RXMswAZ7emC7vyaKCXnFF3KwrbXsEC2AofEGtFDet3jynTiccXfdNQGjbaqH",
  "key10": "NYxnMwaBHYtYHCqrUkTaiC8qioP7fecsCGRoMBXqBCdN2ivVrBnnbGwkJosLcwWuBWVETqJzy9mxSPjcmJszTik",
  "key11": "3znYkshDw1N8ebkfmjjYvHr1ifh7vmssCKbJP1GRTk2dboKxHtazW5A8xs3zaoi9jRg2D7Bo4FjMWm39Nk8b256e",
  "key12": "32SWvFcpiHgEiqfiJNQcDQmNJfWYEwHYwLeu9LqFmUJizFwKPbN48iKvZvM14BjbzhhFUj36dncoRxveCJY92V1K",
  "key13": "2dZrGxkC93WbuYkMVb45WomLXKsrdT9qKj9Udy8WoBzAJxzAxLcHZq9G1prDYLdX2W31LuwKenXyXRMqijj9MKyU",
  "key14": "5priuxP6YUrSpsz17Z3euKy1XXPARB66gdjYvjELZPMWjYLLReBErC4UKCphPAERHGD3bVCqwSPjJRqE4gWojouR",
  "key15": "skrfTJ8PdMBC5wquofMRkj5DbvVkq9XfiFs2i1NRyGd3EL356rErtmxCubQ3Ja9dkGtX9qJE2UrYzzF69dyHUPH",
  "key16": "2JxqWMbFGoDC2MDsXFBn6nMpYV3bKzPWeqtdXEoxsSMK6cKCN7CkBy3L1pn3ynNidHamuGPEP9gJuC8aXgW6HhrQ",
  "key17": "5JhGZALUUHGn19Pxzqpzxz6xEosyjBDNZEwRTmvZydoR5MrWcgtThsynrKYEtZ8uqz6nkT2BVrz3vSDF54sBfZry",
  "key18": "5iFo9tQt6Kv9k1MVd26g7urgHaa8yiQwEZzuCW3xnEyYPhLv8wz26MK7Qyiop9smLsJAep6GKAvug1x3we1FwEWy",
  "key19": "5iV9qFayntb4a8V7CbihNJRqFpfdnPPV8j2DvN458sZB5qDdy79mDXchsL63MPfUKb8ZAiPFHb5ZWfkx4t7q2zAU",
  "key20": "28LqWViuMq4E6wEGModbkQCLTtWwknRXtvEARkAWPSXjhQm6Jh9MvYizb6TsUjCvcH6PPAULRDMFZn39gSBoJqzs",
  "key21": "dB9US5fc1NXFnUF9foetXb81cwB8BeZiPhxvVDVfBs83oo5a53N2QpUGkt7HkSVMXGVhSu3fX4es1JEPDciJ5cD",
  "key22": "49naLVd418Rawb2fJypmqLq9cPgC81qPNNFLTt3QAi9bMZ6wDDyUpT4FvigW4SVmCH3qRmWiaRuaZVorsjvfdMwp",
  "key23": "2iVey2Yf3byUADG4aZBUFY2iJriQXv5AQ7BnxAVEDQsKCcUYueYekgbC4FJXX3mVbShtVH4X5fS5dPfrJr3Dn5Kr",
  "key24": "3Z3eM4fexhP6REq1yqjZmLjHDLnQGqsZuyLQ1gM3k4U8mtLaHKWifc8dv77BwfgdCGhj1q1dkD2euQV4dPm4F8Uk",
  "key25": "26PHsvQfTC94xJyRnpn3rrPTXS36f4XcMxyskcBQFhFaqPNyq5cu9i6gKLJT7d7Gxw6AgrpVRRcRDpQnLDaM5jUq",
  "key26": "621TnTGfcGWNij8DHKoDhfNuG3hry149MCtgtR6VSsqT8p2Caw2ibMV3sArcbppTPcVyKoVnsBvzgeZSggBpptPt",
  "key27": "52LTguFLQnEXGBTZ71Dha9iRGcw2oD8hzhJdL3HzPY64A4jj86wMPPiddXw6LnKzTV8rwEDfSjv3Zh7iV8EpK77p",
  "key28": "2kWRr1sF4TcpyzxyokCrcPU7XYex9aA8Sc7dMwLrUpWXXkmCHKTj5d2T2tB9oEe1qYXRrWpYk9sSvB4f7NnLUujH",
  "key29": "6rtgnNjNYBWfzHYVUwdzj1oVibXpwDxiM6oeUvYm9n5u1rxfvEMVc81NTtCUp8HHiBsSeqpKsBGkRAEGoBP8SS9",
  "key30": "dGhjnFBmVxPDZ5VDtEYCdfyUERgVQHMkwAFrFxAdoc3pZAea2hpPYpmu6zJwSu6LoXwDKir9RgLT2Ku3ybkJx2T",
  "key31": "BTWu8V8WN48zHpvoUgFsT4RR9FxbzCTh5ChnkWNTWqqGpQzBK5cRRfLtWsRWFEuRRHVgRtAPk5co97uF9P2XYaa",
  "key32": "CZ4UDZqVH5TUvZ5LeoTF5VG8Uq3rGrTusc2Yk3xZZagULCAWoJAwuxquR4Xys5ZdBawqeL6Fo2upHo5vJW9o1JV",
  "key33": "LG5nuxkcDPfNU8REYfeQD69oD98XqJNFW6WDUy3r6c8SMjbNZ6HJwvitBcZyWCjLY8YGensFDBy23gtWpAQxJEn",
  "key34": "2VGLaU3h1odQPYbR8VzhyLMXihALmxUEvjX7ftb3RgtFxeP34hFCLV2SDz5oivsmWaoKD6pVfLWo2WtNjBKaEYqN",
  "key35": "4LaqFi8vARCrfdNVzdz9bPAJW1MXr5kK9biF3U1eQxcVsY6VbpMRkqLdgZb73Vb4dbRZmX5HZBGty1HBGXG86Xrr",
  "key36": "4SqE169WWB8qfY2PLWvUr1rkKWjXxhUdNQzMPM27qNgiMxCahvjej6fPnQpP8iodc67AUnG58YZFEAL4a4tWsb6g"
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
