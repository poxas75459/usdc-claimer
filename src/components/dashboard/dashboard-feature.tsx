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
    "CLiibMk3DV6MiUq8ok3YLoJjisVmQDoWZL7ru2gy3NW9DTvdUHqNN4PDLRCe2anwrWzJ3yRPQQrg7nA5PQ3a9xw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rkXDWditKkm1Zadd7urAMcXykBZ1uArLv1LxbZ6L3tXHVWDShT76Uaz2btw8V4NkmRQik8Lef2UPHpX66J1LeJM",
  "key1": "4JLvZMsvhXsXqePxQrSy7pMdUYW28NRj3APpyxmbHmA3Ly27u16cgq7DTa8RuTLvP1RRWas7EZEUiTwBj3KjPc8i",
  "key2": "38QjTQkY2v6Pf4fGd4EfHPzPYx9GpeEJDpoMz1wqoMBybiaQYDUEdnKghKN4hBXiwnXku5yK1GUAhLNb1XpDN64C",
  "key3": "5woVDTg4jLFJ5yVtKQNCQPXvAhX2fqaZYmCZnrRwYoSZDjm7m3X4GsKnRycMQTk52DmLNCk3HsukW9xF3qgq2uuX",
  "key4": "3ECQLDF6RXvJhHbkZEKUELeUfMTZfqH5r73noHa1FeWeDTxWiCm5ZeXHbBUHtTe9FSFLzWtBvnrjenbrioHUUuGc",
  "key5": "4HcEhDd2sCZeqpVbgyxfKLz7LSaZqxw6aFi7TGkuxGHgYdTpBiQFqbufC2uxxtTgdTHRGQhZWvy5CYVVvAx6t6n5",
  "key6": "Jy98GfHjQ7H6AMCqzRcxMz5MqBBa7WQCx9YCKmi8jfxZDSWadbsXPvSLf5ZTnLs7eJQ361E23wrm5vpwiJ7xXt7",
  "key7": "374EpfxoHgtJqNuqLfVfAMs52f8XTPB7XSmmv1U4VT4TRQK41Q9PH8ronVm9xkyswhnA7rhh3uffbU3bddtqzVi6",
  "key8": "5JfPzW1EXB9zCnTaKj4HvSJFtHBRYzBsfRLx4yy6RXxYzxTE4S6vSMFuMSFaTjm9GpJei1nf4tSnGyaLMsAJ86G7",
  "key9": "4Jbtaw9hstBY1sWSHCXHStGPUyg1rWWrsAyzgMQSLYEkybtQKUP6Ei2PncrP5oXb8xauixgRfSijZeVxdnFoh7J8",
  "key10": "CLgBwFGyBUJEKyy5P51Agz8ttuZ1vBeKAGhqKrBo71qDgFPkNV7jzzagw8q6BsomcKDRwhCzUHjfXjBBWBnxynt",
  "key11": "5y9u56jCARgZcyYXDM5ELmm4m8tSaEqGrF14pjTqdNx7WNvbJDarKEzr66FThdSZaN9L9yJd7YvTngzGTqkmox2o",
  "key12": "4FUUSXCgg9yGRpb6DiZjpTbZdXstXQGyEVVToCESmKJy5A3W9uDEj4X2rhwrTPtxdxS33Ps5vudn1meQpfzHmxPc",
  "key13": "3kZWCBpeMMjkGmr8qwbzDub2L7DjQgFYxJavHxhtNFAw1VXVmYCokCtJ9fu7i4CsUA84Dadvh4wSghjAe5uMyTbQ",
  "key14": "v6SNcW2LMNGaLCrRbZEYxhCmu7h7Fb8d22DJoCJeES5tKwQdmLKEXuQLgCQfC7bsKncAvrGJnu1Z7xGotSx94zG",
  "key15": "2GDk8trro63qd94y9hS5x3s3K1HJTMWLXyB2ub7PPUYN6yTncUeCwMKuk384vmNgMtFvWM3uvfmfrRdzc8R7Qfpk",
  "key16": "5Fkp2Pz3uDqFG5RZhLmMHkdfu1M3JmZUWF4HjzvVRwf7nW1sqyYJ8QcK32PETU9xhaiBcUucmgjtS9NgvaXHyVDp",
  "key17": "5DsvJNbrVv9FbLzuMnd2gAA8qL41RfEcwfKiYNSAuBuD3Kyh5NBpiUjYUaF4nAZS7uj2AQ538ADV1bBgrrGuoKPb",
  "key18": "35cMQYQ9kZT5UEKXKfi7sL87T3SyaZRp53qLuwoNwg9T4kdadaBPiA2KXxs3TZQghGKjFVhkwgQvwFy1HJ65e6rr",
  "key19": "2PzanhC7NYGGYxQ5qkDsyFrqWSgnmzaYo8ARsSRSf5o1HmqtFXkG4BgMQrMBNZFQy1gRYagFFf6Pej1SRwSUetrp",
  "key20": "2Qdmz7dopuvgSLtVz7DY3FmjUnLeH5uNijnU5ctUFDpgqw75AdCY6DzXNkfNV1PPtuGiEbTEjErBUhH8gr4ZFdhy",
  "key21": "2HG2hsEzmVAqDLsAjiFbzmkHMiDcyp1eBV6YVTmeQSdFPZ7NtmRwLesRTP1DqGrxtxo17rGwg9J6BKdE4XDKP8kT",
  "key22": "25YdDzHdapudavypLr1eF2UDxKJMdeUYDYmaCFHyFf4YVpjCrmAaNfopmrzZbUvMGsqhNtiyEhhjarwEZ9w51nox",
  "key23": "YRFhgtvtyZ99Uh8zqEV5gKtYm7sjQoL5sy4cGpqdfxqvvwtVtBDE8jJy8wmiUtVLTYuasPwX9RQZuKSYa9U2HzC",
  "key24": "5meUJWzqc6FpZGjTuuFvWyCynSYkxJJBTBwd1y9EWEw54ZFDJp7ZX1bEMBvP91EdRT3zsHV4vp9xpN7FC8YfwM4j"
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
