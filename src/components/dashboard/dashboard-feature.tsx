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
    "5s9eQmZkZjraoHoKb6Pr6z9WWUTn3Zq3omPZgVwZRoZhBvN2MLCEcrc2HAT4dQG5Xiv622ACKGo8Uu7Db7xWzhWq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bDnz56Dn3u9H5PKbBYG4zx8rZshjkFbAYtPZFqvUg762wMxQS9YmNkivh7MV7hTxdvZ8awR6Q298bx5KWoLKiy6",
  "key1": "4NdB6vsTeUHwU2xjkCMouZtgZALze7HA5Fgd7vqqgGmsJA5aHjaZMth7FEx2PYaJJ4UsYRAssduN5wqMCbVGRLaa",
  "key2": "wviincnb9pEoxLTo5WbQqTuNCgzf46AKetSg5EwLzQVBT4KnhLM7W6x9qkBUc898ASCVcvzFFJ2tm9oC5i53zxE",
  "key3": "2WTDDBgERveKkgw8ux5Xky5xosvpCL24WovYR4sUKmHEr9iM47jgdtvUHdmd3oKBiXaYPfWZm1ycahXLJhMPvDSi",
  "key4": "2DDFw8UynJxq3b7pgtYT121tQmgj26ECjKdj2NRSVdQXN2oVeqr7YWxXnAMtsybwU6F6E7fyBV3Q9iVvGTazpQ2e",
  "key5": "Es15iu7zP1DzB7UG7s2P1W3tt8ZqDP9RNR6YLkrfR9wVRgUVH7qMzLFc2Sv4M6J76vnCcM4Mh6tuLKqEAPRWzV4",
  "key6": "3RC77umDBp2yBbfXoR3Zx9skc87mkmMpyTb6KV7j36jpz3MbuPQWnZ5cpipSMisV65BKmqnZzE7YKxhHepLW56EL",
  "key7": "67D32XHT6Qaz24mz5Fh6XnASTUUc2V82A5SAXxXoaLtdg7FP4F2hzzifjeSPYkoCkx2rVz4tT22VmMe47BZ7nohm",
  "key8": "59cFz9cYyz9uhwnFxWDfUhPWmBCFzcNQFJGJnXBxzXAf6GtmdCgmkkcJTrEocp65Db7ukZVv7JgfZvardLDndchf",
  "key9": "Zx2WwGTWdf4ymawQpACj7nb9e2pNQrL8YRM3VxW8DkcXAUiQGW3dZdv2DDRm1JnQsYdeigEgra1opKy2uCaUSjV",
  "key10": "3qxBWaeVWXYsHjXCfEPX3L4xKVEzLJ38xhi4qrBmqaRqY8aLGpoxPXHhQp8VabqLRi9cwQV8nDi3VFo1n9UBv1TD",
  "key11": "5s58sWwDA4T6jMnrSVTV74eUdqoYHLmhrzrSmk1a485xGJv8LELbd4VG1QhKZZWTkzRHE11EZ7sV3WDX4hxQGo7D",
  "key12": "5XRwn7n6vzXb7aTmnziuu42AYVd6sExvHBgFm44uFrRL5PwognN6zeUGcnKogqhKD9911j1PciZgw5XFwg5UNAJy",
  "key13": "45hrw3JBFmEsVh1hBa34bxPb8fd1hksJJEL3rSQU2nTyg2X2WhpM7XzmbusGXtSjjQHq1XZZLdspFv9syF5HHx3h",
  "key14": "vdDdjoZYvnWRsnwM9EP6GcvFk748K3aqakeZYzPja4Tz2d6ktxkfh7uQgcgqHbcqPNicwNfknmqDcSvB3VzMYyj",
  "key15": "FK9zkni9yNzyoTCwsfPXzLPEPa6UZZEvTWmFEvc4wrP4DDk4t3zWPdDmPHJFGJn6q99kMzgm2oDAHPqXZySRozM",
  "key16": "5ZbQEnTvFjc2Ykjkp4fr5qR9z4mwZfUAW8BrKKjGxBSFA7xfoGmDr167Ah2XvXyTKw5uqgEHRySkZBq5gfKYXkDw",
  "key17": "2P5KNzuJ17ZHssz6iY8tWygJuZTnB3PHHEmyPbR2uAn8TuGzdCUBTRBvRymwSQGPcg5FLYMZWckXWEKLQRNMnLZ1",
  "key18": "2H2VPqFpijmfFhKhppPjoyai1WbfW71dcAvg8sjm8DDtSBfKEVuD7kh1QDusetBosWUcz2kkyDxUjdToKyWGe8pu",
  "key19": "37EeBb2JDYdHfQrjMCNojwm8ioF19xDG9Xfn8LoNPVvv6ML1fN9guhDuWnbmFaxz1zutNsBMDaAbD5ScEuGk5Lyz",
  "key20": "4kb5MB6Y7nKNZhwF8dF7A9d7fgGuVa6bsTPm6P4YnLpH5K4fik3qsq8kawBzFjfB9MgutdTL38dGhLXyjhihTN9b",
  "key21": "3MkEGGrhnoBSXYbK5TnCZfiJZVd6uJ9Loxt5iY9Erp3D23LUJTCiRoNfAuLfqo3wC5btAiNRnJc61FjqcvfJmaa4",
  "key22": "5ApkvpRkGekLVQ31LwSvcJY3oczGQpuatsiuSFJYRgCP5Sq5FYYd94F8gWTySNhkkMoqTwDfbACdQ74ERUftorRx",
  "key23": "jbG5ffvHxg3DYTk91Tz7FKx1W4SzJzNapkYZjuphpEYj5EY7qUtn6y3DqdBiL9ei5qUDwr22jFwBBDZeMenX5N2",
  "key24": "5oSsBb7KfijWEo3mh1Zhwk58ySXktdJubkGDEq445BCr59F5gs8tG5nPhUEACybxAe4Bg7dJZ2tA8gx6h8LDzS1c",
  "key25": "3bazBWTgB1HCHPbnnKTeAhmHgwH9CZXLypYFuaBtUfaw9KNbuYQTjxuMmBDWKi6EENvB1Yw1fwFJZ9DwkgS5kkkJ",
  "key26": "3yYQ77ygwhdhkLFCJpHDoxU5y5SbuoXDoLoXx3Qw6eTrwVXo5Nfb6JpHXjM3atdwH5j7FgDhtUxvN1RKxS9BS5b4",
  "key27": "kd92rNMLaR9YfoGxyVasnX5vew4U6LdqZejnXv3AaDJT1yJWdcFWkmYXQHCGPW7i1pLeyy3C2hWtZ2E7DAEFsPW",
  "key28": "3uxubH9tozqvfojTf6Gg7bWeJGYoGHSf5womdqf9eSnmHxRktaVzAgebLPTHNCR1WGqbFhPNCv7NXj7auMEBWL2A",
  "key29": "mRcXmH8YbSuqTcLCPXtF5x2Rv1h4MYCvgzECto5xxkr8XRna2QCv8gfSfayifZG3oHa3jhP1xVxf9Yeaw4HRyxT",
  "key30": "2i7ka7BMffcdS6qCW3zh4wbk9ZY4Eqa2Kwy4WfYnxZiYPMX7rhWL5iXuysaBx3QC2DbhZQJKe9m5VNwksb5Rkkrh",
  "key31": "4Q3UcNQPJLEM7pQ9cNAWVnXvMKXY84NMXL1efAHSsW4Y4XavwKjKoXAnFNLWW97oQ67uEkUEqgApZPe6KKUWrwXi",
  "key32": "26aN5ULLUyZu9PpWZXn9Wc3LLtXaqiSK1eGUKfZVzDUattf5cL6vcAZa5EpHxebBVAE91b7CynAoUYH1bBBsJpqh"
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
