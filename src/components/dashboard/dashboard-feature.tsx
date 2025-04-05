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
    "5qU2z9uaLZobSSpsKo5eZjUVGxyYjBbDvkx6F1ZgmF4uRdizFwDPQQNMg4d1gsBhSqkScSQAXvJSxKfbHdYqYGEn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9S5BdephXFGLvoCFQSdNvu3KhVPTMDTNWdd4UhWmSbsSgDyj6g2KA8nFTan1FTN6WEVtUmvatLacDKAZ6uygxg7",
  "key1": "YhHzufYxwa3qBYkQqDjAx4KkonvkrHNDuZi4efVBjj1iXjHW4koRJF9AhwfuTkyRRrJ2pDaQ9Da8taQrFtqP77h",
  "key2": "38PG86cXyAd48oujMD6RBa4XqAP1DzHsgd5SZsDVSD5HETXwfS8oPH2a5fqNDcyCtpoXrMJdVbQhnqj3vvw4R933",
  "key3": "7mVb8JMuAUkSox61My9Et25yFwXmac73A5oNNAmvfRAD7V4LhDdGEVe4moHZPfFPKcBF4zVKjMXcaGWzTnMuN25",
  "key4": "FCEYsHH3B2AGp7BMLWqv5ram1bua6BXbeh5D3QVc2bnchgmYwn7TqmqQR66ViM1XNjrjpUer1Lh4r1zTVLHMR3D",
  "key5": "5R5kwcmtw2ndpMuy9fqMUuyXpGiFEP5b16aeFWFcmeBkMhqHcnETR5nJaNY5utJ5UHfvWjybnNxyknarpKcsRgio",
  "key6": "2BLc3H9ZstAwnoTjYeu8eivFqCEADMmaCN7v8uwFrZdgJhhs5oLAHtL6arJe1q1YRg1g5ehTYqmcg9aHNaMvXadn",
  "key7": "2GQtnXCVhreJNv8KkbjFZNUzW4R7LWQ6AEJYcqP4NQyttRtVJD28APfEnoUqoZvHdiezuP7TVLN6diLFfoeBNK1s",
  "key8": "BqcCzC9V6Hv6NXG6vFxWzLRXGz1FcrSgTbN6P5EqwgFK8qVV44hCCKPJZur1QcXkHAL714eazAjs5vRsK1y6Wj7",
  "key9": "P1EMZwkeeYudtZGNhHmW5XqG3xYpwM7oQqV7CBhVnSpV7cGeptz9TAxBWeuPzbHr2SCBVTg32M3ZCees6rBiwBD",
  "key10": "MAfiKeMAxaFf1cK82iujrRxucoQLerJDHCJ8GCAwTqfunopKWVxTc1p7WzQCuFN91HEVUfZCKHwZS8ghUS9c6vq",
  "key11": "483itkATsJfp7PwdkZ6dKhEB5qgTQAqBcZv6NYoXXZMLPtVCZjD89NEHGNSBtprktZXUZEjEysSCbQGLS6sFCozM",
  "key12": "5ZThoWmKN3LAYv4fkD2BS5fnD2pCzrftmh83PjwYuaZBT5re9V3gS9QL5xoAZYJJLfCKXRjrLscorUnsMgN7z643",
  "key13": "4ZH513HYMYABLiD48HfPLdwMe1M7h1kxLYXWCKZa8FNDmqu7Y9U7rxkkUy8sRWsbwMwghyMXdJdW9yC1irQpDEEg",
  "key14": "2BMu9xR6qSjSimxkeg4s3NzhyhXAc4MHYVeBpU1qgsoNpcaQFpWJKPbrym3xEtkXh4Yoa58DKttbsu8RiQfCgNBx",
  "key15": "2eZUPbNgJWjZikSQvQ8XmdE9eeaiuPeEJrPbgcsJmppwaYduQMVaL37CxBDgzgKxPGdhctbP3GZmj4UqHC1PzZ6e",
  "key16": "4YThh43JRUhBJi9EZYsuK2PtciE81H6LTcTV2b1ucxQyky9979vodHMWt3bhSvtCm2tY9qQ4LYffXk6xgXwXYovF",
  "key17": "45GfNftwsN5A4GkbFH3iMeGVb6tGuiHeqDFmHfWJYQS5foN19mXPHuqbmKnh1nN1wBHwRMJ33XzLJ9Dkft3D7dX5",
  "key18": "31wTd8cHCogvjkFVrutjATBYLNbyDCbWVF2tFsAH2wPMrLvtXsTsQyMYZBmKNq4FoEcDHQppi2akc1UVR9e6i4bE",
  "key19": "5VDwNz6V264RqFa47gsW5T9VwAbdkxGmAZw2U2yjWoYQQ8oMCwrbo3PjkaDebjSRifjzjtb2WuThysZoa9rbBM45",
  "key20": "5ZjaiwyqvKDQn5Be9yNhhhiUrD6fSWKBmvaNTzFiYJmWYo2PANHbNnwM5u1zvXE8aqN1FHf3XMRrdtoVEA4GSg3T",
  "key21": "H6P856XMh3tRZp5GVFNrwbdxbQtiXPSTNsPKsoVBgKVKQs22WGCik8ffnsgAU56iCNQNuRrjXi2qisFVDYKFjdT",
  "key22": "5kECU6tpRSZ7Z5BbhyTZKaikPmCMvs7WcL2KePVZFAQtLyMbz8637FRFiNGC2xrAZvrcvBNPbF8HK7JkyQsUKoBS",
  "key23": "5kt9Y4wQWkcbGkM1Gqxg3qmNVJ3Xe9AtxbQCzJgLj17Tt6nDzGo2xUNftxd3FP2xj56swvfi5jnfoVf1nPQv9LMF",
  "key24": "od3fbrhn5CHvjeteV2A4Jc1Q127HkRkfEL1EFqamcQ4w52y7Adgw1KphhRpfjVYwv3gSZ6gzGgEpeJufiRV3nsx",
  "key25": "3juwouLqAStv6ogwkTHFfRb2qDX1xg3P414mT1a5itAfgoGjxWfkH6vKKCbR7rwn3FGBxH1x5qC5VFK3UYBLunoZ",
  "key26": "2r72tz29vkTzh9UWuqmucvTEBYwTp4oMfPSrA52Ve3p26MvpgZNcqVVQvRTJ4qyu5tokMaDRZb1Ny3qpvQXfpcyg",
  "key27": "33u3JCdCs2p88kBSQ74eR22i927erhAGeaZcQ18KnTpA4kyPMG4NfFEHU6nYceGvADUCcJv3dzNXEUjgvXqhhUR4",
  "key28": "44we6Vjf6FD9zDLipmfGDiWNh7dMWn3EhcsoouR3SwfdzdcGhWCwBvFdYm7nroRah3Eesh9p3VSEwmHeqT4Nm5ba",
  "key29": "2ec2wGQh4RNAXwkC59JAiSXDDYnC9F3w3aagVPtnTQn4MF6g1Q41NbbPsVNUjodwmJ4LdNzReVc1zhDjs7PzAceC",
  "key30": "3RfFyYyQGfeC18uvjJyDLYG44hadqV7synMEFuMyeTLNwxAft47wmm7wNJAcrqYHxrLtzH2SM8Xu3r4f5tE8zYY7",
  "key31": "2faAsFwhTCftd1s4VLQ8zPQ27Y4sHxyAWXU3aw7TttpAnsiSdVEL4bn1cxDRbwHwDwfQhBR2qjCmZdVrtoUcJ5eq",
  "key32": "5XquRycvrQGGhmFPjJTbQ17GQ3wjVfmGjLvHtEAfaanj5CP8KPgXMz71JhjcArNJSEeersAfyTbHAvpsEkhxhEtx",
  "key33": "4KXbQbhgTMvZ5Vq86q8ZAHTHdakRk6XeRWe6jy7Z6dFnnY7F3RJk7vGs7KERtmqntWsoSEMBEgLmKwa35nfpD24z"
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
