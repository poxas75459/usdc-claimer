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
    "4p9gQTr9unFh7ZHW38ES28C8MQP8ASpW9Z4CVUuSCs8trzhH5e6DsqnRk3S3RWdVsTEQrCfT51tCRWZJKYwh7RrM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BcDmyW8v4onvHDxV5yA4smSpqdL6uXXujCtsyX4X1XDV218hCTNBUegzU4yzcRTJMVEd7nr3qB5WgV2qLw7im8B",
  "key1": "B5n4zmyn26jZnPDkxuU7p1w8673xTpCsrJp5aR63G2naWvPrfn4fF4RYuxeithnrfMDe4uGEGQeVucgmGNKZ3LG",
  "key2": "39SBrY8eVRFdo8w5p8z1exhdsu8GEiPwVU5B6c2Z62HM2dKUCtcsGJYqKmSNyoW12EBbDYmzHt5AWcSgAfMNyWNM",
  "key3": "3vsU1DwaYRTe4zz3Rse8AaNYhKCP579yvfLC9AMRUABXmjS9G3eG5aaqZegii1RmWwuKJjS9BkYUCHY6WBrNeYy1",
  "key4": "4D3AQo11DWyWDgJrPWwyJdoZbtMnZTrcdcPrRWQqg1Nbys642kQZAH86T4TMz4VkJo9wXpjXy5LHvViyndMbEUHi",
  "key5": "44t3bAmv6LY3ssgC7tqdkWV3xNCNHHouoTmZRxkFbptyEcmDmU26978zk9GWg3hy3c6Dprx2iaxDXhq8M3KpaxVm",
  "key6": "g2PBC9HVU6M3dgMqRtgZm6nTjG9vMbuXFdZSb2e3yUR6Co6dm7JQp4XCGNZguFRqWxwW8Bir5BxGjqckd6HghVB",
  "key7": "4uzUvryn2igvvPvisVPDGwXRvRifFTbtMr7GtFcjdNU894reKmfAk79W9B5sZuV4Yfs83QsfjwRPVQnxE5n7ckmy",
  "key8": "3xPQ9NMF7NsZ6RprDQQspUfGGxbb9KvC6beFN3x9WeqXLpQMez9unMi1PDEy1wzD9M7LnYjud7op5ARs2jcJq4kp",
  "key9": "2kaMFQkNurBLihjjCTdiTBcg5zZKEGq8wjDbb5jDAd5dGCQTSnZE6yQDoA73HAttESeGzfuwUYPSUfwa73LPuVKi",
  "key10": "z8s7diYBSnuARwChLPRbXqnDipZBxLWmwxsWfJPJfZATTEfBSjHdHDEViG6tVPcmLbKDFUZCudSNDscF9bFmBbs",
  "key11": "3PXbfjdQotLYJ7xWohbqCr3AA5XUkvc7HawQDmzrsEEpga3R4sqNezQv73eJRcrj7t1VQrVs5VoGXTnYWWStTLZk",
  "key12": "pdr1EJKVNTaMLo7FCCoLgGFp9AbXjfVhf7UUB5G1MHcmDhR9ep4XCu4QruQgu8YqfifdXCrRtMPGwhB83vKzGoG",
  "key13": "4NHE7MsjZN8mspAFafmyoZa1QVZcPH6wte5Rd7AMa5Hoczx4ybBERX24LJ4S5obvfWeYqfBiewez2T994YL4Gr6s",
  "key14": "5rr2dmG2LsrvSc9ws2y2Zt1C3x8883Z28xFJwbncUgXPsiWct44EupHez5UKiDmDgRjr2z3H35UfgLSs4y4Qhfcu",
  "key15": "2qZjbBtyNMTrcJrttv2Ub3FRNFSc7xJDk9RHUDWcYqjRNaLS9paM1YgSyFSNJxMWDt6p7iBPLZHQ9iUyW7pTBW9F",
  "key16": "3MevzJG2CoY9CXznoEDCKnEHcjghiNQC7WrHhGWMharfU1rUuBKY9NLod3CJEwmPRJYPQyXgGFtK276NhFDvj3Fh",
  "key17": "3JQYxGqcGrmyD89wXapj8bXbCS2HoeMb6eTBhK7GsK36oLW9oitHKW53EfF83WT3ZV7mjDzTtNRtJisj9bByZGy4",
  "key18": "hMEaCjXSK19mqAp1KaKvziHnxCRgsTgnEi6Ju98yqvCHmRERcFQoRXhfGp2mVfjyq9QZfazL5jZek5kEKPe5JaP",
  "key19": "4F6Zai6h3vsNgKAaqsSfMqsxR2BLqVZsdXGs9igUWaqX6rPffN76J8WVBWCdN3PouKtbN9qjVGJWJyRXC6urfoJz",
  "key20": "2Dzs5ML1ifL9DsVpozqKESauZbMebfk2Aisoe7bQg8u226KdUw7Sv41Fu9mBsPmtaBgHXFehN8r86UaDfdjV1iAi",
  "key21": "BbCMPxEyxYid56JCdUNRMTS58RZFfjntQgSuUrXvKpXb9RDidmSVLAGPkwGSLgzCArm669ixPeKNQ7aXUhHGchu",
  "key22": "39UR7uc7ZHNzd8uzj1hbWswAhxM9nyFMAccoGBBk1s9Ma2m3PwK8RFpnsGySbU7HBZMzFx1FjsBkE5uoAMm8GZD1",
  "key23": "hZJGrfWjhSrYNNocD4Em6o3US4EuWUzQVV8wcZdP1idSuXEYveT8aioysUAgf2svp62dxjcfKhnY42ve8Cfk6iP",
  "key24": "e4aX6kk7FYE84R5pkbXjpPWc7iPhqZngCFMTiD7gisduFucCjCdsSTLv9rmU6TEYWhjixYu1cer8yFjLzVfN1nZ"
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
