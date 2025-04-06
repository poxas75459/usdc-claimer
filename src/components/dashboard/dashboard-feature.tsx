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
    "5HS8CLd4gqxnJJJKJmbJ9jvj8QgpL3AtScwiEm7CeKtjD34VnihvQbc7ZYBiSrx2vnRnG7BSeJ9kybKWJMVwUw2h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o3311JczWG7grRphoysqFjmxGePsSRdQWhGQZrJaic9yBBbW9sVKyFBRMKkkvy5mKkEQqqiZcjhdfvbB5gKBVv3",
  "key1": "2bEmioHp8fFqjN8YiMwy1h2qL4hdwEucZNG5UPFDmWm7atP6ZtdtJGLeyrjReBZpYe6N99uqt4qUEmHanPnJJrPQ",
  "key2": "4JGJK3iiadSBfzpZhNUXwDYxCFp45ZXymJJMY7kBDKgbvthZSLmFGnKpm9seADNc5JFyK3U66d7ZczUjKtMh2khy",
  "key3": "U1TjuxaNwmPBRUEdYW2FtnfpyZfyEYxt92J2rPQHMMUd9KTSkXEyp9hmNN71vzrPhPq1XVaL2rhEDX11EuVthNr",
  "key4": "5tcQ6kFaA25amn6pKHHY5chPZFrPo5zDji8vCrzcr9B6H9asoxmixA8Qnzc2SxUbyVVjMZoZ928AwaBtm7qL4FZG",
  "key5": "2JpyfRBWcCa1RRS6gQuRamTiftrXmvZTPYEFD1dJaoTSm7Js1Eg6UZbJiY89sw5SKHBQT6Ufc7nw6UkMaRzWkhVf",
  "key6": "2ETKEzMM1U3QKytuXZMXWaJXDKhq2ENr1J74d9zNJta3HKMzc3XAGwATzWzRvk6L8MP8xGd7q14MfGF1g2pP4wqe",
  "key7": "4JDWBmfV1vvA231daFgLUqnko7ubffhP92vo5QWFdrP9qLynfsCVJzuCf5rdniU35u8yKazfwACRm9xq277EnzPq",
  "key8": "4mer6LD1JKUstHDdbWgp4zjxaxwGfsBTkMznTbnkRDZMofY2ptzBgmBp5hE95A1WiDgP7DGDTFFm17jk1MuxEXZ5",
  "key9": "5dJ13iBueKCySWoKjBo4YBYy7cQD8GoUUZQuz6x712QqheBH37cvuSYwZEfgbY6B8nSRiBqUBbvcczhv567iFHYL",
  "key10": "2BVKqLRiV7sg1QFyT8DE7NzRnDi2Fxjrbv9H3HxuLjvn3byYLdN8HG4VCMcmuZK7y5kJEr8f1tr77uzwVs3sy2rp",
  "key11": "5THn22vYRsPzXiJjbSWXgN3dqzGAQxF4VUkpsXAopm1BSH6tXDgVTDJ9TwAQKpT68SGJdXdzexXrZ9pc3azuMxJJ",
  "key12": "2Z9W8Cvbet7X7Ag2VuJsb4neCzp46EKPnvYQavksVgspve2nKJ1eHDXV73hYkKdG3zFrmqS4eUwzAXWY86CMTDtz",
  "key13": "uj288Nk1iVz7fpAjcL33vyUKCAUpWNy1oPzBaaPeJh9BHrpX6vZm3VwjTzmEnfEHrCBKh5fzc2GG74eKUGSUmTQ",
  "key14": "ehuCKgaYHHN3tjfMNbeM5XPAiELzRutQqmhTVnuneAMM9H2JbD2bLWmZ6ydkiXe14bn5K6FZ96XPcecHjMxvfrP",
  "key15": "2XH94Xe5RXQhcsHLY6KfTEb7t9GtL2CDkgWAP4Mj1wo4Zym4vNqHvh91e8Q7DZUYu2DS2jx9ZdDyLEPfaBsCm8B1",
  "key16": "45Kv6RubExJSya1RLCQSwf5fpD3N1upYCNKHWHiUyp5xZbdzabL9UWszUYHPW3jawvth3hZFvFGwo6yTiJsrKp2n",
  "key17": "5WD4v3UpuJMwFAaiErpRo5cMLzKeoS7UN8z5t8PYPhXoxkW79CjHMiCFQiverCJcT9uRSZbq3jzC4YqSyKo8jT5b",
  "key18": "5eZwEyL7nD4oPRPyZJ5NPhFLe9hw57EeTnt5G6DBmWCrviVGN18MUHcmtyT1kw3heZZss4eNy1X7KRZQa9bBf5jE",
  "key19": "3XhCXFfs6yGsBMP3Kbx8gZBAhQd3KSWAhzcKGnyTDLVVJLPret5Mbu3dDBHP7nGCenwf7oYkN2dzHLyFpo3uE4rQ",
  "key20": "q7MBKx2zQThcqfvH7BEAuauL3XUpHhsHVvAEj1ikahvoi8myic2RbRDfDkx6EGAmfQCQgD9efTfVVsi5tcyHfWN",
  "key21": "2NxjaiEMpNSELS2t1znnfQ8fHCGFLKDzddc23wpdw165ANB9BFZXkHiaWDkWy6afzdXx36wEnyN78FxsgpkRV5Hi",
  "key22": "4jhurQBisMnYL5sqSrJTD8rgCyMxnNAmMEpoMJsGrUpmD1vQGYe2xUPsUNh9cdya1HCnvpTexxXr1QrddQ1R1i8X",
  "key23": "2X2A8Aev419Zhtr5q3qEMQRpqzzKWfjLtJ311SMEc6mWTwNsQ7XNSrv17jWy3m7Ny1xNV8SS4o7mrqJ7igd5nc6K",
  "key24": "4ngrqSNhgpd5dAnFrks1jzHj1kzRWwmgHxb4k5yPF7hgV3qHymHHbwswhNEW6CFjy3SCwxEe2bgs2gZmTZwc1Z7K",
  "key25": "31H59xsaQxFUdpYgcCTbzaGgQ2qjwiYCBCsMWjTgG8733SHuSHmE7rpvKUbbkg28prVZgmuJg2KLPFyPsQzybkUj",
  "key26": "36GP5eftV1MdWwU6LAuEPQTcn9V73EySNDgY8XNa24nPMAQ6qxTSx9PpYv8myEe2xMU4bP86aVS2h1n4prEsuqug"
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
