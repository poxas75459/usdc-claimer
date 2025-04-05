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
    "4p34CjFrxW4dx5gpWftTEErNFzqAtUDsFByMnJNRhwHU85KnZBK6ZuFiopWffcJ2pPAugh3sfwkM5wGmKfSjTVWg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UCC2aH61qfxaFhf8YgpZrXnHgAqixuHw7x5oLR6NnctDsyKCYKgJyJ6ruWqUUV1eFwKpx5m4JXSGiMQnD8opzV5",
  "key1": "5q18LAu3UiW6GqJ7EFQWtZzJ9d3EiFaL9yhPKedXw1SzYmNqS1hKMHyuWbCKWMNWZ2V71MDfw2h7vo4GBec65PBJ",
  "key2": "3s6md4oVGjS5KUfhNwDRaCcKLhdYYav9ggrkWDdYURVZe2TXiCZ7yUE95X1ULD2rT1yGDKWGyP2F4NqYe6FNFhkr",
  "key3": "3Hch7WgLvApHcmjUcT15vgYbVgNDphGSD5c8soB7gxAtLVV5Fmy4tz1cVfRwTv1CLPKM7h8vWYmhMZW2MpUW5MqB",
  "key4": "2uM5hob5scnspHRSC5oQn9Re1BzAVZ8DLqiwFgTBYCRGAzrwAVdHysFdop1C5RipfFv8xWMy32QUgm2Mp3eZXJSz",
  "key5": "BBojFJw2gEJ9ie3Nmu1iatUSSurXtntaBzGHr9964MmUEbQjpbu5jeFukzyN6Svz3KKpvBu7KPJwCKUvopZYJKK",
  "key6": "3e749tRycSik1s86rPARVjwAh6ed3o58NnAm8FAeDRxzyXfhHndpzagwuUZn4JRcCWBjGvQZQCrzBbG9JoAUxTM6",
  "key7": "2hsebQV5dNDMZSNNWzNEvz4zyY8d9Mz4jGZtFZR7FJVq2kQhEEe1PwDEUmUUKrHn8SUmYCbezQsYfphwNry8Dzo8",
  "key8": "qV5cibheKvxDyC4GbjPj3aLif9bQDWg9j2WtShGepe3geHP5BVeJtS33hduzHRR5hzo4edgv4Jh4pcRocncXGNy",
  "key9": "GpuS6NdBaVHTg8tSVGKU1cCWA9Q84L139vuW5faTFY5nVt9BUs8tHRhWQSMrkge7XV2dMpNxhFB9E7rx625RnEV",
  "key10": "BnPDNTXRT2328ie9UwcvLHbGTtJzUhUoeiGsBRGT68L77i7A2Mg5Y5bezyhFsPLBnUu78pZy318tkXBLdrVmack",
  "key11": "epixngQsdx7Vk4gn51x5EFxxtXpEHWtfM35yFkg2aufR1SbweYfR3jjFUpo7BvJ73kTkF233XVyF5d4T8QFV26H",
  "key12": "2jxRjx8cr8J5Vk6r333G3vM6rmrHMbQsfzBsTXDjGC7tZqnQodtxYUMmAe99CqvZN9JmoSm3dYNW7ytMNJPFSdzz",
  "key13": "5AU7BYpFwSYJkxPZmrp1bPtk6TYrZNtYKtBLbTTv29ofihzXPoXSqKQG5Pfu9eWA9UyCKuXAiJzbei5FkFToGJf1",
  "key14": "2dG12eHcqAZiJzeSSKNUjjWQUFx7nGRi9EK9uHSgMtrfNGQ15gfW8yah5WENZnAnFbTvJZcWGpLkFZMuWjCCWqQe",
  "key15": "64zvi7BPBHQDNwUNTmcekFsvCVfxiZ2DiXhiyxdpuWpB95HEHoYo1RKULT3V8pnfoSXptCmje98FSuXtUEV8j6cB",
  "key16": "2gyhtZoNoi6B59uMYYzviJ9WVncJs3TXmm5AGyEwN9GB7Y6JWVWBongtxQpkuSbKC79Verb32KM1XW5cdneAP4V2",
  "key17": "2yQcdUqyAvzYd7nK95pbjALHKniewCqenpP1qWW93ajPFRxnBrqGvP9YZubQAHHcXAuyzo1fnwkJNQzGs3rLVD3e",
  "key18": "3VZND8ySgTnLKW1bQj3kz3KGscuPM8ZY5XN1CSQUncsuo1wyvRjYNVMyiBQaX39YWMiAzP9o5KCedSEofupnzDkF",
  "key19": "3d2TtMk8wQgcnu2sNtp4vicRMYWzpyBdmEhc4sCkQvkyQcmZCinAMFAvNpCUqMq1MstNyxwvdNTuENkrHTXKFcQ8",
  "key20": "55MkFtnYtsA6GYqSgUHZRPbn1NaL3sNRNWwXrAj1bEYVP2cTKaEXThsmjRFqSYLFCf4DopzMQRf586y3EY3GUMZa",
  "key21": "5u3PrTPQ6oVgDN6GmqJBREzY8xa8A7TNxfUY9gpLXiWqAzR4ijHwTe4rouZRd7sTyzpsJhXttrP5C1zHnN6ZVcQc",
  "key22": "2AuMkG6JAxEDz8s1wJuMC9dF2gw8z96YmQ5cpzduLZfGmSffS1T5xEGuEKjeJkPZEiVk16cPsGiM2iGLtPtkGKFf",
  "key23": "2LrsU2hzymkMsZQc4nYZa3HYq9gXypeNBiczDufBFmAj4dn9kuCxqbhzNhx5qemmmhDfkqpZzhd34ZHXShfoBY9j",
  "key24": "61dsaE3wmwR8jN6HXQjAcF8qtSAPmi7UTQjYQddYfCVShwL9VdEAasftq65cLByf2NMc2ZVFssqFHCGbKj8zMRdb",
  "key25": "3bMp1rCUCqh7hMUgmzXursNwrG9NEoPePpAkj7zA87B1pV4zwa7fXzh1MuPYwiZzrxaK35hSATq9o6D7QY7GfoCi",
  "key26": "2Hg6TJp6Frmjd6n1vJc5vvbrR7Ner4NjKTnWrv8cpcJX9u7bdGHTKE3w5UwFSwkp4DfNhwVKC97siv7psYmNiUxn",
  "key27": "3HbLApzVuqSc6dnu59V88u5G4KdeipyhgSbBXEMF7Y5DLh6LD8AfxPRDf3ityrBnyzqtnD96JPCWEqGCoYaFuS7D",
  "key28": "3xpg9WvLv7FLUMq9CGgt93qCfs9nz1KoSn5QEtuDnTHBwQfSxagEn1EVYcp2qoETp9F1CqTMATxfuUodP26Udhho",
  "key29": "2TS9sLGCjWuuhqh3oJQFrjxg8kYmUZvsnV3TWTGiZax8b7LbE5NSkQ6FN7ezZZXo41oBn8mU11ouYWuxTZzRqVeq",
  "key30": "5yVouSdSvFEjDNGcNrpUQV4v9pu13YgW1WYWYUD8xhDsyMa1vNbE7noxE7sdeFxUaTXuuA2jrc3YCtu6NvdTn1kf",
  "key31": "4jHz4AJt97bbbuuQWXjVCzeuWUxJp7GTNzUE6GfN2bFN83i5rF8qBfMKHBrZu1DspzTnwSFq62GQj5rvNPHKQHqx"
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
