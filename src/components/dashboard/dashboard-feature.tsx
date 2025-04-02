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
    "2oWkZW1zZoZVuHwS5KyXGcQ1hfCFSEJKx3GAypwyEWW64G4NE7Xgath2LjQv1bcD9WcAnoZg6KeBTabZqMTKi8Sw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fChsRvY9wKEzBf7GhHvRjJMien4tAKDeoXFzM99xe6MUUyZDtLK1Aqd1TbzEogdwdSeH3XKwya6KysMpp88jsg7",
  "key1": "VY1AmdxFbTqdQqsLDaRXev8LtwLxbdLsfL6Cj2EpBDJdUCBTmWHni7nzbXZkY4xPEgnVHWJ28PPR4iCkDE83B9h",
  "key2": "3czQzj6o6LYP8qpFaADDMw5JouKAjcEdwn15wupH8qZw652TyVMdyoMjRkc3zHSA3acBXvm1tSHKfvFYWZnpFumV",
  "key3": "VyJ1nxbQyTnZaRHNpgoiB43HtsKY1djwmwvkvGHJFPJfgwfSwyTBeGbry4S1vHau83nKvoUTt3nDAPViNY8D5Mp",
  "key4": "2iB8F9rK3h3oGQgLVUtMS67nYGVfsVhyrZurABeiPSrW7YgwxjqYBVGR7yFHkYfcCJFxc4hqkpRmCvX7a8EJa6mG",
  "key5": "xYyub4DJUvSrP1E1VBnNZNRoFvQtrcizWXmCrZ6kVgquMwciAyU7mehDD1RA2y7KRVuuXwZf56xKo5VsuhBF4Cr",
  "key6": "4eKNnLKyV7sRt4WK7UoUMaidHfk9d6bBHS5yWKszbSsLGHyDsKhowfwHGmJcLUhKdtuA4mFpcfDUbdxepfcUBXQX",
  "key7": "EuMHpjc5LPLHGL5LP13ZahUuBPfZQvM83nUJQGRqxuMZywwXXrP1jY8mDy5UAx82STLbJqKRRehbBnd6EF1dUWX",
  "key8": "42sbSgrMPoKuLssc6aWqaHFWecaqHcf4pe23LM5PDBgBFKqFG3PLbED21wyasGSFPheEHXtDVYsaczg6vmjoXKB9",
  "key9": "5aWJt4u4NfgtMaKrNp6DibFyT56sUSbH8XVgSwTFQKZWDJee6KuKtqQc1TtrVhbT4N8dCta8zuRftbBMiVySEcLx",
  "key10": "3M2FKapz8XTNLMYWsPaFSKdzfigv8xgmGJwkszAdHPpzCz79RUQMoGUP8Rto2GrCvtu1PqmRg1Hi1uxUSGQqBjVi",
  "key11": "2ctwRESL2XwDP38D4VRGoaYzxPrUTFuTvMyngxPX8tw4jXgDbg1PGJ2HxVYyV4DxX8ShTXB5Rg9a5D6kxbpQZMQk",
  "key12": "2KK5MQrn4iPt9yWS56vFsPMZZEAPvjv5AjvurrQdMtXbuSMEamYc7uXqVEXEf95d1cUNGqMZbFWa9UdY82s8kEzq",
  "key13": "skoGUDPkVNjVnprmw5vkhsAZveSib676JQr1pKQ3y15KFFRT5TsG9kJEckpT7p4DKZ7ap5hZAodXJ9VqoE6UwRA",
  "key14": "34XyqRzyhpAdWjVFeg9fcGL4Wm5jckpebSgZq5H4xhuY2a9QRFpdSZLytnNmyfwR9j1qDMfjyoSEuaByaLebRJP4",
  "key15": "2ZGjYR5Hq94joNfCHT5LMD7Urnwv4cRBuHm8aAAGaqzjBmdsce4VGbmfZz8RHWV8DxYah1nq4C2JvH3m3LPEDwgR",
  "key16": "3Y9ug5HPaxSeaWkQxQ1yJe8jy8pTDz4i1pkYqBxAzKDkvddn3KFKjFpT1gYzAKigoTrb8Nv4hvzvrr5WP2UFb6YM",
  "key17": "3rriH9khW86gRw9pv8cfTkbaM9G89A3xfkq6bjqWnSPE6Y9BBfVm6xvKXu7C3pDzwAmLqbHkMZDG4pfSeWBNyKLJ",
  "key18": "5Ve9BmFHTLNiGEQj8Pvj2uBTstzo4U1eMHhRv9VBTN5wJSiGSXdsAXzxu9aAKQLnZz5JVJTtRYu9gbAxQ6CVeqDu",
  "key19": "4dNPWi1QvKbqwnYZL1xPtTBNpUsFYW7i1LJZ5a1PUuejCvwK4t3ZyFEcmYzqEJDByr6c7kToRV6Z7vVvJej93x4u",
  "key20": "3UqVfT5WynMbFCPBZkvLrA4TVqu3a4yo8xw8TLMq9Sjmt3djDtVpfLbthgtWBN9ijHwKNmUfSW79rsyKANzZvtPN",
  "key21": "P7Zk48THofJ6GiJLv1CgNLTHYrSrTiiqgFfNe53oLSWz7zixWjY4at1HpE1Vfn4XTFUo6zaCvXy7JM4o1GQtoXn",
  "key22": "5HSB3SrrtCYWTyFXFKH2BwbNQVzbhJDnVzJM1GcMj1EgYMateqx73RzeAwjmS98zjyc4TexfSBrmTNXVxLU2ASe1",
  "key23": "65gzk6iRAxrJn2aqRTR16Hmq7UF9mCJYp9cibc6N3y6uxKzkSybrS1pPZLuVRwaeD5sqfX1nKUuBuzxyWVAnFp5L",
  "key24": "kz4DFHAtCBXaVrtKxrhKSMxfKK5TAEsrhYDjVktcjqahviX7wt3Gd5aMhmbZVyJfoWpCUoNVqNb5P6ZjU242LiX",
  "key25": "5VSZSLttqsg2dF6xSFk8s455YjVfC9kc2UXi4pEQoWFUQJLyjap86NJFAaBNjH79WrgmsDnQDkQZTM9LcYAvbrFj",
  "key26": "uTTv63w9MoVMgYxa8wJE1mBmuKswGuR6ErjTgC7a7oGpgkx7aMCdDsD8B9bg31TJAhVA9bL2fAShjptnFXdhMu4",
  "key27": "615npki8gXFtZvjf8qkrzgfC6MDVLWvTBLYqogtZViUcen4Xt5apTWroot2ktmWGPJAvu88fkS73xjxkaXYVUPfk",
  "key28": "2jQ9EbvEVqF2LLfofpYEhGh58RjxqwmVX8L9PmQoa5MSkt24poD1eJvv2uqR2yHwfkpG4S25duRbMLwaHwmybaLn",
  "key29": "mQWTp3WxHxCyLxLYQh4SEpVUiaNA1T1xPztECTmbU7b12VftWhRqnztmoQYhUbvHqzWLJqTttKGUbfYhVZiZswK",
  "key30": "24cULKpTkFDxU3YivHT58EDbtp3m3aVBjr9fupWNviZgfvH8KgPGpxo6v4TGHKZhUda2Qk5AMzkd6LRjmuPjbR7G",
  "key31": "AHWUUi7QNmjZW6jwDbz4dovt4M8H12LLLZUxXWy5ReVjrWNYdq3fouQDtnxp1sF8E2QS3NuMXuf5zRwXMtkmEcW"
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
