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
    "3W9me7ieVuWtQpQwouic4c367AQQvF8aDhoTnBdLoeytzjDP8zEN5BQ9wm6yvnkUtYQqiRXeLxJVtd7HqufTgT9V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dKdezAn7wBPrW38iWWgNW5CjDY21ASCL7oFQ25Zf6bHrPVryH5cbm5phy9Ut4rcysfV3zkypCsHfhoUzj9i7QQ4",
  "key1": "5SmfbnRiPdjwiyiCLChE3Yktt2SqpTwpzsKEQ4zSY5UQwWd6kAZYrmgjEr7Mz9EeaKufmy4tsprvzRAM5wvfGzVH",
  "key2": "3XoWT27L986WuMR9ygUZDKLQxhXLXut2ubnwiUQgvXdrAwEwy5j3ECyMyar1Q2DAMcLDnpTA1NEp6CR9a9Te56V9",
  "key3": "3gNPuXti3UY2iTENhYNeYBdGrsX5VboTSYQrzQapPyVBB4Wv4TJu4SnJgifZqmi7tkfPW5deqwrwqJoW84Bkanup",
  "key4": "qZHW5EN7wYgMYeHkmNKJSmtCYjyP5Yksdnc2ABB9mzqjQtFueS5s6yimztNDnqripGbGfLBQsPd6XPPthf9rFrm",
  "key5": "r58Ue4Cp4v1wuU9kp8C2BATLgRsRCDNGuQoZ4EyzDRP4VaWPw6J9v88xBBuppz4p1QhXSQth7QLBZzTwQkqFZyx",
  "key6": "3qqGT6vbCyG4BSAuEZY9VZM7174YtexAEn9EWYPmqqrYTAAKJQ2uK9ptu2WBwDBHWifr67kTmHdGv9i9Q6oXb2By",
  "key7": "35BFjF1jjMS1MYNX14FxG9SiY7qCKyW2AyQt9YA53uXSyBST61mjZqs4NBLWYnq6SH1EQJBCLiFv8iofZ6sgieZu",
  "key8": "4Yik9RrNP7kEqqm6ygrftmKsZf5eFmMuuQ4UzyGqzw1QhaceUejxi4xg9ekAnDe5trRCq8qLJYPQ1myPEuA1hDTw",
  "key9": "5bEzauN1emGBj26TMF7hXdfzfSd3AaB6vy9xF5Q9VoS4kVnEZjRdFj1HACRUAKNp2TDWLeRwDmbkAiNiWViVNR3T",
  "key10": "4ybh9tLaYSr6iP5YHTm1WmjQwdVMoVVNXHeY3GCACa7BXNPJXsUqvQYiXzgZ8eRhnD3gBo59Ax9kigyv19TWmRk9",
  "key11": "2VgWiPaNXZLCxb1bpNeTE7BukuufFsBx23CdxJJRTxnNGfkP9cppZ91hMcN1tXQFyZtkj9nxZpDx5SeQkoPQkf4P",
  "key12": "4qqFhzbtDf73piAvokwUScLqvrTDC3LrtzmUGHsXe6wLL1g2Vr2s26ADjdWxeqrZ9FHHqHdSUmT7j1CAFHdgZr81",
  "key13": "em8dQvHFn3SEANfR1nqiGmUVrv8syTCzsGe3nxbNkfisukA9vnm3wbyJifh5itsRoVXzpeTWc4dESu9w98832ib",
  "key14": "64LMQEwV6axJHox2CHRzBPp4YTWWkJkASuX7k9kKDsg7gNZCA9nBJ5sa2ygC2WYdSJEeSWLzTC3MYogbahwLQyfU",
  "key15": "2PXFLFSJPXunCLfFt9cPEgFEavsT1uqJ8wWYSkZQQMUY8soNrdntnvAtsPyKfiTWhrzacggQUQzRS1m4ZKiouGtx",
  "key16": "gKeQDKyfAjeqYCyVfEo2wSfun5Ye4Ja4Hb3HM8W2jktiftchsn3AL38cBeYqoNRUo6jhSzmGExmC4qWLhsrV2aZ",
  "key17": "Nn9qEaDvLTCax13yDZQ7x9ymjDRJpF5bRsFV22g23tURxT8t8NoPKnMuh1y4vnm2o7buhM2ZJyEWQyEoMi2i3Uw",
  "key18": "3jsbUbJWQjsiGjoHoenZYo8s8dXdq74onXLduM5R2Tb2r8wjWwU4CLALKbmGQHdbPWG4jnwZnbCuoucwyaFhdjku",
  "key19": "41DYjqndExQPbJ9mKgDViBc3dL6ZGZa6j68ndtvMQDmQ91hoydAgp7iw4HPpEBd1UWMD5KrRAUubsWqdxbHj19iB",
  "key20": "3WbJWRpgJRD4dCwnzXKydKZ1TdJuLtvPnb1hdyCskKsPuNFE4LhwjrKePzfyjvNk9mGyg7Tds2LcpkzzsZdrxHDv",
  "key21": "5Ugaphbqvpr1fZDKqxrTV53fbRYW1VXPQEGHevwMbVGLmmHemxVbmp4rVvruAaVVSmePW6oiLrszzztL8ZhSDEvE",
  "key22": "3KzKtAqAsZPwSk6zpfYexUDGW5BsMVstiTiAkhHcNUrYEqxfou8p2oDd3y8obXrroNNp637JcR5iYZbucmLymwzg",
  "key23": "2UE723RUxhF4B4zJ6up7gdcaNhweGWgYvgVf9aVcFSbgJMsTiTeXQWBF8qGgPuukHj93EFa16HKKpRJUZccKQtBS",
  "key24": "4ipr2mvX2Rr55skXFAyCXP6kNmGRXJCDNPogz7yDJ1LYTfXJqkL2uF9SzTSv3w7gpPEDARkkrjuCrEvhBP4zBPba",
  "key25": "4CzJMKyR6T98Ht5SBxLpVxJMae1w2sW37PneUCTNr6kVHjx8mHakP5mKsUjCUMBMNEk5vy2HyBvKztagCTvEoewS",
  "key26": "31q1NZYvjjdE5bT3oLT1HJqHJdyn5KYP21w3WMkNkzMMkMrLKTinV9AG3YdfmNfm2Bue2PYMTMWKzFMch8UcC9J1",
  "key27": "cpHgwpBQ2C29p5NHpvaeJ3vtJ7UKYnM9cvsB6Tu3DK79hHaWeaXXRuxk3EKdTeWKYkqAGpsm9VWJtUQdMBY8r51",
  "key28": "5kGnrb3cHs7LRenpvQzdQ5QThVy6ffeK67cVaahH4MWipittfMYkp9MKBzcayc8tHPQFCFMpF7RqiGZusMAyNaWH",
  "key29": "4DVUnHbr81nu6EbbxnKEieWauN5pWpAYDSUpGyjN7AWE3rru9eEEjvZNjFYZqc2cV1GkQRT7WrFU3hrNPjdZhhRD",
  "key30": "22u1MDjEF7wR1a2kmRR67nFLFGP9jS8aTSqcfqp4v8BjHgLqGeWLoVqFvMhUXiXPzCKu4dFgGA54yKveeru7hBAG"
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
