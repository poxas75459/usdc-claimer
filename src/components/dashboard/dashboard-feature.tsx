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
    "BQqrXztgZ6jDsd2aU7LQsKaz6q7mAcSxiTjLAgF9fkaFetjfUFiFAKuCJiWTU6BLb1fyy2QSvcrsoM5zmAyRdJV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kuzYR9T2Fv7nrVi9h4qkjt1gLWoMMdQ9UqxeMVPHWwaAGeRWmvvF7u1sLbQ7QRBKjko9yUSpreCH37w8tbdByZy",
  "key1": "4BCm8EaQphMut8EwnJpo6k2Y5h9RogqjZ9AkLDRaPP3VfsRSbGC4wbYhDW3Ni8mut51P518XV7e7Y4G8h1GDDAAM",
  "key2": "5nnRMyUtf66NTWwxYqtHPrHm6pdeg4rdZfgG6kxq1vatDXQVSkuTx9mz6TK8ws5TbKMoHcGrBzdXxbBmi7u2hczV",
  "key3": "5dFthcJM8sMhfUzK2wQ5aQb7T2K9zyoJFKdEAuRJFxA6HFGXa4x4t5ALPBJnvB4kUsW69vHw5KuA6J1ZU4VAtyXi",
  "key4": "2iiqMSmpF3zebHHZT5hjp2fygZ5huuP8VRVSLjFbHCDz27V41eJJS6PsujxvdcnJratTJHRAHejJhShYtS8mafHF",
  "key5": "3kueEMBDuvsCuj1QqM7Xf7RPtH89WQaP8unoytED3AMFYtS6Bb6ADwMYUaVaGbppPgzYCkT8fqbjSPUfycknJFLy",
  "key6": "2hioNBiLFXKh5HxXm7JuZXRnZgeUe4y8V7T1TarjKc8mNeJeJ4Ae62PhRHyUshxMi1LZwVV1TcpQFkjVpXG2JzTi",
  "key7": "3FJEzs3yojYgmV8LT3gybMUYJQZfaYbuifxmsPK7pNtHjHfHtJDj8u4ecxDuinGbEtLxAgDzd9zqsRYJFA1rDRpY",
  "key8": "U3P4B8dcSewcsYzBWD8zVTHyCNuhidNqwPxMAZwNBbDjbDaGm9y9ffaWaivmE3kHah8ikgrNCYwkLv2GwokiK9p",
  "key9": "Ezu36QpzFgwg6Mphq4baPoqH66AEFj3yg3jHmHnVJfq6iXNGtGusDJV7w23WqEiwxTY7CyDiSQsBWbguq19J2kd",
  "key10": "5mzp2Zpitrkw3iBnudEQjMGNecbMu4Vm7q4K3qknVGVHGJGQyf6cFKKEnUt6FMriCnNJVS55tU6qArmMdzdBo9gi",
  "key11": "3nu5qKV15YLpR4WErALHMsB5hjidPyq6orBmYHXgrxZC1dshSkR9PxHwSvytLL9pJeP87tHtkFzk9RKbzC8qaojj",
  "key12": "3XmvgWNQUqaKCRpu1sVP2SM82dKjqWKbxbWhAEtNKuhKnzrwpvQQ24f8M9A34izYcQT9WVVokD1iUf2DbgEycf9J",
  "key13": "pFPTmByDENA7fyLJiUeeMkxCKGjzT3iRxqjG8o6poZrAox4uVNeQ3MLa63HUi5oMS1XcmXfDr9oDoTQ8mbM8KhZ",
  "key14": "21b9BuXyuTbeRTcqSvNgYva5rhG9P4opsP8Zifu3mSh6f4W7RRkHKbFYguFdS3YUWenhwL44bxBMTHWNwknoBngq",
  "key15": "3nx4Nu4cNJFT7kRVbAgcyg99hFsZsMrokVRgLXHq1k6mBft6t2aBzcevZJAa23NCFXCKK3HpnTMGSpXuvL3qjH7b",
  "key16": "3LiaWe5yhKpG9vxUXRFqE3aesWQUs9BeWJmAb9yJc8osMYbhbKpwPj2vm5DaWporEV981vewTUoBYLFwC7Tr984H",
  "key17": "5TmUMFEkvemA9y329KFHY6CeGiVx2ksUh21c1Ps4fBJAinbWBfmDS3eLqv7y5eDh8wXXQa8Vvuu6qnNLVNuMw8ob",
  "key18": "5DkjAhxngNXEH6LDXpxTzCBoXVa8c6KrkCWndvA4ka4QHa4XyR9HTXfXA2mRDCkTjKLeukAdrtGcd4nQZxABiumT",
  "key19": "5tDexu59vQ67zX9dY4iHtuDonRSFJmWcsW48rEhwPyQCAQcdEoiAWYztpmhbeCYsGH9HHJEm3FWnF77qE4nwH4hu",
  "key20": "3HZgqdzSkgGYLkBawE2orJvU65WDmEcq7eqdECuvN7NM9YCyPzE6XRxB7wyGshPNijCUk8fkm7NpV2ovAF7PvdVv",
  "key21": "weTT4C7Tercswcb1drT3dHfD53wv6xrhy9sYjjWjzXZvCNwVKARYmZr3dik97hvccwxnPV1F6XxoaqTu1uzXQQg",
  "key22": "4dgGqP6HZHiDMDCCpc3RT8tyY1abQ5yJ3Rs2EkDvre6QqFJ3Q2bNU2hEU22RWhDqVee3rKMxoqvPtQd243FBZrMa",
  "key23": "3z9QnkK8JnXbFJKqqkzZupNLmw4Eas3qZ2ZPP3YsXNsFjvzfWwYhTHXpsVTupGTWcEjZXcV6n9vvR6LhRbJi28Ho",
  "key24": "558NCiHxrhdLYoTrtSc9GYvRkhVTw6hDYp6PUGCdMtyzg5K7oAPyAoULybAZgt6cmQrHCNS2k563gRVTsy4h8C4z",
  "key25": "5XuvhHPWjkNdK1JpdMkLXMuvSaoGTwdoWydAtpwBbKgYj8c9oj9xRfk5ZVREc3bqL8KkxtJPew8LPHkY58xmY5oE",
  "key26": "HZxtEdLDVLLYWtQjdZ2tquCG9EGX9yYVRyt7kXCyuUHc8R5CwaZqL46VwLBXykGBXKMCaJpQNgU8GbbBjM96C9q",
  "key27": "4YgCocxkfh6yEm2YrUCyHWg87uKcMEmHNHdk6kf2cFocrUTf63a2iJG3Y1XZ8DBPBcUudUCCajvdkJSSgiN8vrpe"
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
