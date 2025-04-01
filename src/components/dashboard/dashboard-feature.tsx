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
    "qMHYZw2b8G2ZU3BFqmSjFc5VLYApgVwWywjpLR56e3zEwiK45rDPMhzhfwcHVCKhWiVrkZxz7E9fLjE5MzE6xiH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VdRMV56kx5FqbW2zhciderEjuheFAZ8aMPpRh3oqdYVfXWPJt6VatxM73Q3qNzmWGzJJRkModBdpVhy3p6pJBsT",
  "key1": "rV8vQ9nbEUSvTbDtD5zvw9a4AiTVtb66Sx2gyCi91pixX99wQPu2sqYn6pZ4vfbjsTpByxMt5KMFX53op85xCdX",
  "key2": "Y64vPuYiteyDeVG165QYBZunysLpWikLZVYhZgeHGttu1RJZokgPV4PUnkKsxS6mWSSwaxpEoixcxej8EknABmh",
  "key3": "4AM5yDdw3MUJwpWSq1d9wZWCLmNyB1LCePhAmDx1o3xxcP7rdY1nRmrqmnJYZJYUBc6eCkxxFuXd2HHgVFqKnUoH",
  "key4": "dmo43FKFZnWP8rQmahECi5xmdiDXruJw7RUdY2anURtxCVMEVpUQYxdNwPMkRsi3powVDVfyBYYgBfYxYQz6xZ2",
  "key5": "4dzSpGrUvj3EzCc1AMMwkCQjYKh9DNcjtrvzZKMQfFvH3HVabWtHATLSmRijd9MiZ52n9E9CtuAsXVpxbKF5jhcW",
  "key6": "5DA73ECTHkWUHt22RqquojfFHo5MChqM4YnNch7qFSEqNrcMu6FEicvR488GpvSok7E8oJXnjeFzXwgUV6c5gGbi",
  "key7": "3YBaKu9AcsbpyYUabciVecwAwnneWwFz2SKcJ4auDmaV8DHVesqZA8sMTNMZM9XQ42FDTEucDWZCZFFmsZPoBQgq",
  "key8": "2jXzTK5Vy7EtTiqmsXZTLjYu1zEjpmW9CWunRYU3eCRA5vfvqzHenn7SBDaovp3S5vYBU24N8qPgcfxwwfCqovyw",
  "key9": "2ckPTgGsPrEpkNqmRcDVdrWWEn3kMvL45DDxZXGk3AQMbK6wFr4xBe9zewUNKdMfeykDJaZK4PStULTyL1bJTcnU",
  "key10": "3sMbZ7SCWJLjhzMLy7UHuf4F7sqzf7t81V4a23evbAiRTiFVrJzEACQkBwQj5QvUevwTtvQnZkCKz7eFFhwiS8aK",
  "key11": "EfMQRagrSUw7qNj8BSYa2fMD4oiJgLXBfSDSxbpu1T8nBPD7LCb1GGDqWLTQsYLLEd29Ws5cUSN9dAP5yA5fX5D",
  "key12": "3VPL5d9vyYzsqC1QYv2vH7EHDCBmcawBgVDr9LqkXQDKvtZ4LfEex9EGDorYUsWwSBAjN1C7wXvaHYRDKdTYKbEj",
  "key13": "3RoNYZFXPYgFzmTWaMER1fmkQNnHTJSy52e6Yy667JgnpaR9qggRmVR2sr7LdYmQhTd356m2QSqdygUY1JNmfezY",
  "key14": "47wM6aT4RrHRQoc6nrU3ZtLu2ECcFRWwpMdF9hR9vmhUtXMxhv6xERENJsosLCTMNSgPpi7gtD5VNHnYthi1VMwf",
  "key15": "2aUzVb4AtocZyu4LVLNhehCqJatdJ9cC8gWYxBmiUTrCzLXs7Xff8uvCjk1zzKKXzVb8WggSKqs9M6yNjCT9pefo",
  "key16": "4VHw91bCSMmZQni8UDdPhJYoaxxmEPTfevHsHphCG3Gw6PEofErasAhoDU585o2t8UcxvpFPe5qefrcaEs7vPRAD",
  "key17": "3sNdp9NfFTzhPAsh3AqS6i5UjmWEiAdNfZo14AMuuvjs3nsrPqaFMmzigwi9KWgRyqr4ANdDxuA9x7Vu6qFq8sKW",
  "key18": "5ZnvKEV891p7LoiCUZiypz4JRAuonRZNvNZTKeYGkt5DehnDNJbymL3n1r1cRNBj62FHtAA5SE8zk7oCqCzbERRR",
  "key19": "62QcDHgwheXiuMhyzZQg487eYNUQGTG9GWPnTDaMJw5LjS8c9jDUTKYDdqi8A1J3i7vszU1qakwiVxQf2peTDAm9",
  "key20": "3orqSzWFfTbfmDnXK3HWt4Nb8FrTJQqEzgtLjjXSQzXzYdzWRXm8azdkrpQEYcz3uPP9Z6stZt85epi8syLG9cCk",
  "key21": "5Udtr5WbifWRg7zxG36GuGzJgWqa8pXqVJZ1NH2Byy4dSY9yMUwAGefsSd2oYqBNYnhPJ1qNLXYKFvJVZfZNfi5d",
  "key22": "4RmsEhz2bnrvRvPQD9ix7GTLDNLLcqHSskmaywhwXTXm1PKYxGj3a1oMKzAu2cVbLTi95v8HGfbrCdVZd5X3dZ85",
  "key23": "5a3joqkdXMvJ6V4bgfxvLGH9UPPg6eWGSG1KxoijzoWTVhh21wNrWM63nRJPpNwP2HVhZEKbYMxEHyrVEyF4LKiu",
  "key24": "4XBeGrd6MBvEm7zgkwmeBbdcSYLTcrG4kb1wdR19d2BiUfYzTvW2ct9qw2udEgtAcw4TVG5BuuWosJVGQwXgQtWa",
  "key25": "31MFdWkYbgP5vuwfCLE8Nguf8NDNaW2PTwGQyiB6QBtBoViYZoVn7ZVWbUbrzk1NWrZ3gsEw1L16RhqWUtXyxsGf",
  "key26": "4XXXvkKtSxrGKBjaNx4TX6YggiCLc1CAmB7j2N83aePLZb3vViMvpqnz2N5VoxnWsxq2guh3GaHbQtXG7wS4Di8c",
  "key27": "5T549vZBQgabxaEHxqTBFdRPRtmGvSWSNjt8uxqfezY3v9PvdHxVhVmEds5uWPKHW9rCMv7JvzyHZSV1dahxPVxW"
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
