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
    "2xTJUAJt8ZoNpMMMzs6q7kijfjDPt3mfQJLat4CkScfSB5ZNoxr1a443PoFsghbWYAG2Ezzte3mkButdc7Dx5pYG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Lwi3agJe58BfKzaFpFKL6LFrC6CmqJVZFu5nUfuXezrVSUHWBaz6Q7kXJg9C6ji1DzgEPHyGo7QFEMrJ1k85bHc",
  "key1": "2rJpHPHfYp19ebxgM6hpHqCmWh2ymW8XAr3FngsVo7T6VRYb19m33BVyZpmxg39rXoQJN487U9axoWoDbmJpkwX6",
  "key2": "2mHqTAiHNvura9DfGZrWmC9V3CAdPjvhKrjFA3qdGSwqt8C4p6H32tuhBCzDYqZn9N7ipCr5wpoNcQRGGGgnqKDd",
  "key3": "2dZ6oT74PzYUSRQbrsqeUUQ14eoZg3W3NVqfXpiLptJ92ukEfCxTBJCWnanapSnDhSCTFarArisfY8ZeoeG3bsjn",
  "key4": "2X6jzofHSopQeqnPqJ6hTLp5GJpjhAW5d9tsWDQ7Gv49xRumyeQzCsDgyRqCveyMGNyW5VTTPJnJiMAgFpPZKbT2",
  "key5": "5p2TLt2PhxVtdrUoZiFUKS79WkVMN5ubWNbFkPa6M8BVseA45hNXvxz1VV31YrLEmqm3xZXPLVbeExfrjio4BdDz",
  "key6": "2LxsqR3G3ZFaXWvKKi53zbhMoQ39nGWerQysVLpFDKgzdhCaYb9LjHyg8CCVCCYAPvceaXQNvUYtCszYfRTyAyw7",
  "key7": "4dDkcMh4pbq4bnDBwSmuLepei6BxCJCtPkB9sNECTYd9zD6Bp4DcLEE1tPBXLZSaksSYcMKjGgdnoGiRGKTFQCrf",
  "key8": "24uFoU7bNogMepfZKFJmcghPMDJe4qEuCPzovfEpkJA2Ty1irTffcnk9jm5L7feiAEGQmq22BacJtk3biHQVSW1o",
  "key9": "32rKvdbwy5vvYZkKpSYdDAtmQZuC1nEUuYvvSVUhHeYQ1mhALrZmXk6pJogDtcSaQoSgKZqHUKVFD2FU79tPZJug",
  "key10": "2AvZuSVWtqhQq471eojAGKTyKT3azjtSxCrrRs2Y1mr4ZoAyCkG1ntmxQykv175zCCpsjxWRGABnuYpAYJ5UdVep",
  "key11": "5LeBA2zwnzLsCQDK1VmGdutDCBpZN2yrEpGoM62b8eJQp4eKjux6Re3PS12euvcFWWsnMx96Nd74bETixZUp7YAL",
  "key12": "4DNMy79YUCFya6225y7AKTomSBBUFRDsUXw7V3utMtYCbURJaTrnkovmfmfubPD5YoXL9mVG6FHcMCFf1D7LvRJm",
  "key13": "5NujzpKrxnVwnfXZtivfeL4RqDfwMHLam7W34quoHTwSVgTvLRhiNi8hZxo9iauV9tG8kreKbZW7khLtd8dGZkGe",
  "key14": "Ay5AydJibLNAmJJeFFApruEqXcwi53QAU9rAa4wTJFvx2c3jMqmTR7f3kuJJ3eoMDvJEZ5nGdAbC2VLAwYocoh1",
  "key15": "9whgG983ojh618ReMCi6ifNV9KaU1DCHs3MoEHPE9M5L5oT49nAEM6ENsgdAgnmJf3dd21pUUoj83Ct3o92azvP",
  "key16": "5P5p68TfHQj39RhCzAaDWXMFfXP71UANirKC3hVG4oioaermBxRDPxcfgbKyAQzEwQZbXxjN3hCoii9yeKAYMwU",
  "key17": "612r7byweuSKSy1hJKfkiiaprXoanviYme5wTCXnU2TQHqXuQMsfWR5tGMJqafyhhbJV7qY5TL6SAxRgCxkav6dq",
  "key18": "2xiS4dGamfFM2goamGeT3VdaJP9En4uRJ5XxBaAqExTzyJTuZ7eqHUhxvMYwBW8H5jB4ayV712F9CWHYa3my6bAs",
  "key19": "43BNKMP7WgqUsUejTjkXoW4EPiGPdCvQptz5DxLi51QQSBxK2RTGr7tayWcS1ro8ZmfK7HeKL4ksJpK7A2J8rQzV",
  "key20": "3E3DAZHGj2YdcQpgV4etiZjcuQNb144arRV8b7xcQAwhKJtCcUecq2jqtJYxEnQDWPN3Eg7LvoFic6EenRDDrUvU",
  "key21": "3BUaeN42VStcbcEZQSAim7ApyZs3pPLVFP7CgEUUe8iPrmNPvwWgdsHKYat3TZ2sRHyqAxnY5TK3ZuoAm7GAKygh",
  "key22": "4vki1REnPVQQedmUCCaP6mVLLj2HMASQUtKPwvmoRnwnuF27DEknUfwA9zVmG7ZS9CyJE3y4h9YFAJJzc51gss58",
  "key23": "5t4tk7saye7tkGLtucdcghk23bHXQ1dgSgGiYq2ZkyLEQeQYoNhyDYTendMyCaqJLwNQizK7bzCKeDemqAae6LSj",
  "key24": "HhmNku7JCBMCrBrSQ5ZXm7ze3nuqaapo9jccg69dD7CHeFJaygq9MbT2B6j22TWR9yASSApGUAHX1xqPUEJGur3",
  "key25": "tN6gGhi5W23URjoRmS5chtqNfWqu7Yb45yezLUQim9yDMqL4V3WCXb5jviWBRZQv8ajg7YknPv8Esshyp95sHhu",
  "key26": "4SugJNSe3nBFeSV5nGxtKzxfQwejYHTnhqooAGSU3V77p38Ngx5rqhR5i9Fj5mGPWo9jHYbq2UoRWMz28QuSpRRZ",
  "key27": "3Eqz9ucwfpHEQBZSvvqm3u7zM7h4Zw8AUB6PbJDvFtEoc3NHALxvnZWrDXFhm2mjkFGbYhmmnvuJ46xSukZvy3xK",
  "key28": "2uUaHRPZodnpRfV6XzcXrCsxtcFVyZ5QSTSvFms8uQALGU8x5Cgg871VY8LkfKoj6BwD1cYsd8b36x3YLrkXMvTz",
  "key29": "4phicmXvNiy2Uz6RLuxMsbehUfrstdwxVWSEh46DSoP1GineyYVY3NmEBvYtoMDXUXpAu7jQ8xR9jjRnR1erAs8J",
  "key30": "4x5Mp7MTJdwddM1NFwxWVLiLEzjmQmPtbVJTchx7mUrQz4smeshP3KLiBfza98WvzTuvvDGRmb4BfMSF5ghaE5uL",
  "key31": "2VM6Sw9Lw68aWTGJFt46KG6RMkkaTxrSiJ9d5GQDmS5xeGFZGVJXdv97NYwVBETK1NdhTqrrUi9r1PK15jh2kZqW",
  "key32": "3RJs8zdG7RyN7Rs4EJqffN53U8BCokVicLEFbVbjaAsSXtVEXWtNJthUrC1uC8yZ5JnW6bnr4uhqTPvsF1NitzUS",
  "key33": "3huZjrKdLdnYPFckMJdYbqcw1LTwNtes9UguAnGEp6sF4ea4nX5vuvFr1PEXtQJEmjF116jCzhf2Zh78ipK5AZZ8",
  "key34": "xfkcZHs4B81ZMd8BhrSdYAByw76PZMEMCjBZH1aKcBvUSqi5LgQV7x6MccnatxgBVScBmadwWWQqQFshnny7rfi",
  "key35": "3ogovQDfJdLTEBoeDeB8iGwDkzKiBx6XWJdNGBZPitkjPfuUAfbbCcSLX9h6g1jKer22YEzGgXEPx7D67gaEDBMt",
  "key36": "5USWKB8AzJPJZ3spEvqNewjZxdBxtJCZT8NAxgDav4mzte4YX9jrjGmFNi4cP7rfw7Jc7VProP8v3YwJm3rEeJqp"
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
