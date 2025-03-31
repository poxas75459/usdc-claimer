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
    "3LTQwK97wP6WarJWpRXEL5WqHUVHje9fiwEw5FFY3QFY2hMkZoySejLUjfAtAv2yjMsE7GBHFMW4tpu9UGNMFsCR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gZGfiN21sjrBeSnStkncNRF14vcZWzpXZMmVcaaDZPLrHr9XoRNy8LK8zHtTkv4d682k4VbdREVpveWf3Rhob3w",
  "key1": "4ArVbWBAWRtxgqkJmoaoTHGcvsj5ZckFUjBMZuTjCR1nFKEgrG783fLaFJw82WEYccJJiFNbVHqJqhVsZiVsnm2C",
  "key2": "67fyxvkQ2mzd1PwB9SdB9ARYJSt3xKHTJnoBeHvhv8ALnHmTqLUQY1fwrRsRoRV7RKRSX8w6C3yHr4ED7WCVWxmF",
  "key3": "4LiceFQ3pzUVPPuVDcoPBwCYsp95Yx4Ex7eqXsDxd79R7hRUA2huoQFLZcy8zEFwqKr6gnC3epi5emvuqZCXgeJf",
  "key4": "4ZPE3QpFnQuXaZphV8cFeJiGtMBXa5zwBdy2GCDz6QLsAxzCMG4crNtGsnjRyS3ETbgc1kWuSEh9gWYCeY1oTevY",
  "key5": "2HjkWuj1Usbz7nUJJkWDj16N5kD81HGHAHCc4fnEuNjnVinmouswwdsBusoEL7qZGfVz4HSoWydUaYq6TVcCUMtw",
  "key6": "2rKudpL95CBaTefL4undRtU2cvtAw7XxsRG4HNJ51fZqSE7ybSN9dTT9NduNpQBSswSgZ3Appc6qFzQzUM5QKehx",
  "key7": "3ZJE5R92QHzLMwywMcwP74Pm1Fm5pGu7f3FEpMSjYsTwWf6VetNSH1eaNoX8BTige2qJVn7ZyYPsCprpYvur1Esj",
  "key8": "4FuGRPVnEsAozu2SBE4Zzvke1ZdjcTXGvT7r936iMssdeUP3RCwjHXHF5tyNfwM8fggcwWWwAdE18xedaD3rbWtD",
  "key9": "37nojJVjVt97HbKdca7jR61NodyVd8zn3CynyQhEL5pBsQ4uzEqaH2kER3k9cJDGcv2W9XVYBCj68mf2CmPMSBJj",
  "key10": "3UiycjQQupyymKrr5sG9YBYc2GSLvY7b5n2T2T2hnRWW77egTWZaPGyvFeZ2qXeQwwSqqpwvif3PVipG6WGBYnNk",
  "key11": "3T7WrA2CVWrMZGQT9ukiSWesrRNP5j6DDJdUhSbwNaG8YMRgxeMfnja3xbdE1oXhdfpXds4w1LnVMDyzdCcnhmvo",
  "key12": "4K3VTKt8sGyZfMSUnk2rQ3UopHQJgZTVkk4QSdfhz2pWmx9BYzqdw1MrHDmK6t1NdCG3YPtLWsWGs7hvJ5Ain7w5",
  "key13": "3fYqmgS5zS5hVfj4qCXHrxuhq9cDTapU3rU6JNNdsnzvN2BNFpvtHYT5Q4GpZAzrRyiqZm7X8hyeXiXTUTm4F9vM",
  "key14": "34JschExKQ5vYViBT8FKG9CTnwR7FF4zex1ESVcJWKeSHuWsgHu8A6QyPot4fZegYUFKhzhZZfhPe9L6jo7qoF7n",
  "key15": "24FbuGoB8VJyhLKLHCaAcZz3BuxSHbSsP4RA4UCzeitivSpVc9Yzz5WF1SjLMDHuUuocJPrb2FghpF96PchnGB3J",
  "key16": "36j1CWzwzmkBoT3M1uE7pK2DyXSKGSbRunfEL4zaU8P3vZT2wBVh9kNAqJbGJeGE4gVzjkGvcHTAAKdsuPJqcmD9",
  "key17": "JjfzugohKh1ctTjFSWayM6YTfVevgDBcyWXAWgE7TjnhErxnpbn6KEdCGnjBrmzXKsmQGKa5cH3sEwc8QfZpzVz",
  "key18": "2Ami8B4QGS7eWC34tDwd8u8aTxAq1euc2aATKyEYETA6eh8LsYGBDfX6j1mYQdNLYhyRKgyA5TTWdkZeD5k6SigB",
  "key19": "62gRezbGVRrBdx3NLd55UVrLvxKSZktvL8g8h19HwK1syiJA98azW9KjV6FgQKzRhgN7m1ZQHXkJ4pr4AvB5gSvs",
  "key20": "46cymkarisPop1hwBDdxfUd3hFTGAGKu4gSrewNBBq47QdyWdABTLVwHCBkEfcaz4Jnkaao5edDMJCFd7mNZu3Ao",
  "key21": "2EyMzAtg599F75ExtqAnavksxF8h56A1o1i1mcvivwPQ4QYDc2YCRcDynmM5n9hjfcVN9HJGjBZdA87Mf38ZPQ9b",
  "key22": "4kF9RVXkmN8aWgR28bqcf1riRasEWVj7jrnq291MnmQX8NX8s5wkb7snMhD6Ry96vYtetEjjUejCNo2e4rQiuhoA",
  "key23": "4rgXDx3hMMxqkERwNMimAzTfHA2uLvM6tDV7v5bky2ZAcrgttS4LV5S1xDsXVsU9z3xFF3783nSKqFMbkbCE5p5b",
  "key24": "4SzQr7dcbzwhhqGEsu1qSuZ6Gwf1xJRjrgiuoC8nyaLXyWRqk9QF4rF8zQhAbuYbqD6NKMexe9ARcE1E1Fg9iJmR",
  "key25": "3DZdJuZ6ABDwrZhCxUxFu3goPA1yNRU5rDSzqymKwMpmr71NmbxyyhzM9HCLby2ZJr2bsciVz4r9zJLPRUJmoxCR",
  "key26": "3uh1ZRfZv1AxeMLaK3U7nhLR7zhjomALNj3AUa4KQFv2pKrQsEQM7N8GsAW2pNb3nngrxdQwc25qFjifKPKpw1AH",
  "key27": "2FKRFMX2ButWVWCMbPMgzBpjWYH1GujMa9SphvNdkrUpgMu3XRFSwNhEFK35zeq6ipNhT9Ju4NkAF2SXoAJqcrSC",
  "key28": "5FKS29GRo1V9KJSTE8x4FpCPwKfydbd2FvjewfNTb1tqYQqSjhpyVoZrpsNQKE2D7H31w1tchtdL6Rvp3bcRq5Qg"
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
