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
    "4rnsFr4PCSfx39yNum5qrRXJkUyNQUMsh7f3riahJcTD1JBx7V7ecrB8wrUixfmXKUzBxdzTkxPSrMWg1sEaywau"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "212eVYWxwFkX5TRrnRGjrigeVvCh9riaNAQjpNt3rmKHrBt1bTAKUQkBZRh2MQXuXaAPiV6KPshv5GpxZ2LCA9v5",
  "key1": "3efqQvtTt1k9ET1UWwLJBTsmSoZFNfLT38D3iyg9StajeBCY1UdqhMitBohfNLto2ozJjsjDeT9k6ugsJU9hFKgt",
  "key2": "3e58qo4yvMf2gTzm98sMk6spYntJPSNYUW2PNGYbJSmGmiF8NNGbEZ6j3NrexzoESQB3NHHfMqm1Y9vjM1RUNmMn",
  "key3": "2EfWxBbgGBjys8zEF1nJhG8U6tx6UhBTn2dXfuWEBS3Sigfy8wR47szLtB8pT8Tgw3T3ejKMBQroSnzAJFTNj5UJ",
  "key4": "2hjcGbeqgPNb53FhBRN2FYcvYDBjyt5RyNSFQtmYskQ5ra7qVycndVg59XM3SNh29fzjCCGGmpzvKx9Gj331qiSK",
  "key5": "3bX3G88koWAqo6KGMF5FP44sEdjqifrGAUgZyvHR2C7Xv6m8guMjavJWVJeoopJWzGERcbu8MbqB5ykRqCunMwaZ",
  "key6": "4wieYRYbRp1u6ZxiyejqSeSw4xZSsng69s2pYzKDgKnTLkissMJtaqDuwgp7YRZzdxPLeXZeprYkc33AyvFR1c5T",
  "key7": "4SSNPovXtvxoaQQrtKgk3qACm4ezV39nVYCQjc62boa5X4AtY6BHoNEigYqzfC4j8vGFwDhmbXpJyre1BrjFtt1i",
  "key8": "grf6HGTRNUQW9GZpxe9sUQZQ8B36xfniAMeHt9ERBSZJ3c6xceFyw6x8Qybj3SzAdi9sGPRUHCkFHYrXzcDMLsz",
  "key9": "5LzNAcFf4M6MHkSizncAa6DUYyjHKL7u44UrVhmGEiE3rVsNw1BstRdZX3Aifd7CR2rwFVD1cfJrvL4JcppxcXJW",
  "key10": "z82F5ot91ZXGwk9avBpEYRX7wtDt139XzDqmKXDRrRKT82mq6Et6estUbf3PuzZw7psaSqoPPXyYgZxaxbquakC",
  "key11": "oZzR2PSypW79kMh6XuHMBUudW3YAwUWMM599vXPpRgayDNk8EKig8jL9Pwrvc3F2xd8X4axPLphAV4V9SGp1oVv",
  "key12": "5wDKFGg7S2ZtCoQ8vUqVB7DQgFmagGgRu9MHNqF9snDmqMLuukn2CY8fWcswbGyDSaXeMZD1mjRuF1f6X8KevwFs",
  "key13": "3QgiNTDJmPrGdkUgtZjoWWjpS3Re1SeH1X3yiS6sZ3qPiHtaXnfkryuCNDdGnXPDhrKBSfy9DjxbKGFpuhu3R8NB",
  "key14": "5Q1JS7o5SeN4iw447sy7HUnvNGT9Dwbmxr41x4Hxyvn29tqUP2r79DCt7CbZyxCnma9RqNALi4bDHDoLqrudgGAG",
  "key15": "2UXhnvPeoyqVTBGe3KTjPfCZe8RKd1agspy13TBUk8KvYbWtUiadjgn4ZbJm3MHUioPwZv8vSyyTUFk1iVkjqk39",
  "key16": "suYAnEfXWA35xqWcxSYciuFwXxyXgrP63QApin7gG6TSwS7dysXMTUbTyQAsB4XFSxADuzfc3KqTFKRZna75kAS",
  "key17": "4YgUwqwDVJHyuArAECEqSRYwSxNph2L7Uu7qHCn5GBjYfTz6ZRq7JDvhSDj7YxVgwBAToYewaFn7Yz5zmL1qf3E5",
  "key18": "DqEjK69r3LGsPG9YKTGkBjHE225V2vLHvWYb6tM4HrrENBwWhJoByopJgJDQg4sXgWdsH8Hey564zPq9MUgh2Ya",
  "key19": "56Cck2bV7jqVS12UBgJ8jwtBu3RVes3Jo52eoyrmqnbgdYf89iGpwpwqW1AKEU2GievGdaJicXJnHXi8UsNzUP24",
  "key20": "1WwTJceFy1iCrVUSWUov4BAd3kDfSjFPgu33KjJa2wgmysmdEqxNZemz7W5pc3eeEb3xP2MFVsD4aNTkB6Sw1kp",
  "key21": "4ngW8PVm7iKC8mTxR4e4Fu7JTH1TsJXkdYuL6m3ctPQuYfrJii7LH1SdhoBNtyhzAveVNEsRw2ogYfdV1frsRbTG",
  "key22": "2fRMVt4zS861njP1tJCK8ehMmWiK6KtkGQwPbNKtoq8YWX7mcyCNqr87ZNNYUfWHq16PJt4WGRcuTYc5Qyz7LtFU",
  "key23": "kmiapF1F1K5cFX8anvqWCNL9KwZXHcjVqueCoNKR2CPjxYTT1LCqQDGVr3STMQYbeR5RYL9aiDzNmkH6SSzwXGa",
  "key24": "WEjzRCTF5hvbgzdwTmVyhBJUPB64EwDsN4BGUoCe22aJ6mGcQPHLWqD258LwS5ZCgcLa6YKhx9Dr7aPZ1Eg2tVV",
  "key25": "4ESqSqenSyviVC9raA5eymKjTgut5p9TMc4kC31oX9bpNWoz8W2bCjj1igKuei6b7ZvccxBGmKr94JG3zCkb2b3L",
  "key26": "2xfKsZUhEr73HnomgpygWKKHyvcMFtCfjfNetJsa7AKjzJJrRCGHhNnMhBjRT9qRFvgwY4423nXsdfJfu5E3DpeC",
  "key27": "3cxT74WAh3Dx1dRJ1WqkwbkgB8qM9sS4vqfvE2rueZ1EmdZvzSX8KKJCQ4QcnKC5U2Y2Zxor4bBqkkTadrcwDaeo",
  "key28": "VoS8GZfNb7XXhSqwXzfzSA79obXGLF1ye8T8wD4pjGRD8bQmPU9CyYDM3gwcRdyqcTbRewSAnhBdKtS8Ff735j3"
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
