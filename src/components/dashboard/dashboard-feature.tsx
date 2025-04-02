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
    "3xeJ3r3wzqu5hp2JVMjL4NYfpFbti91zSMicdSfwsuEB47GewMoB8CdUcEdgyx5FSyu5nfha9Y8hLM3Pc64i2Cfs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zbbzUUzQn4D1nsAUEgyznBX2Y13g4dWy39D7xtywmyuiZAUVBjHqyosw1UoUD1UKA8UKWPV619ddBC4uhHUcF8J",
  "key1": "5sECnX9AsRNyyebpQuHRvDDAzGAVjiGkxaZ22HosP4A4oNBFwt5WFPbtr1638YK8D1irLHBfckqTqyz694Pi9E9U",
  "key2": "5HrDstE1RpQf6vvdER6mam3uj6LvhTSiMv6eL4JPqehKB5ZrMjYvXh7LJF1by9j46Di4gayVfBjKe9UoALA5UfwB",
  "key3": "5iAkU4n9nfQzACzdmKyXZ6Ef3GLribX4tAqmRBNdNgArgf9Ki5huQPZ4dboyULoEWLXtuqyHZDdbNGJ286qGdYPw",
  "key4": "37LgnzBWt4pg9cFBuh4xNrK7j1QT8W9nyb9tKStBq7zjQpff5Y4YdJ3XHKSw7oxpTCE6LW9ginUvdKtGYMvmYGrN",
  "key5": "4BoPztL7FLV6AMuDHzuW99R5yvn4xmCpcbNVGGMfK42sjYmrhsTDSzoPYznH6LjvYsJjuc5VmokProRt1o4WUF4z",
  "key6": "2s4qdwMzegrmsnMEHq7ywrUN9gnLBjrk6z65qMVK5559Exfcqy1hrzjDsyBeBiifpx1MG3raKQyU2Trup6As7jfq",
  "key7": "4Z7KZQEin4wVt2dEcAhJt7iDtkAUeJr98EuPevU4YBsFLosb6qf7P8LawxcHQdgJFzK6bMA4WGhGy9utn8iSqssU",
  "key8": "iPcf4AAtjmJN26XjmenTf7KMG5ZhuKFiQe9Ny9gVmjf2EZ22nniZAsFTGd7DVifrmz3yfAVSzA49G3YVJER1BQ1",
  "key9": "4kAWnWgm8oZB2pL13c4B8RbnzRiZQPvjfnTrRxsi1dCooVRucXKJVcdi9ZfR2GLvXNRHBk21UqYiN15WYd7HgDLJ",
  "key10": "4B8fymKotD4XEJPGcmZoJmChSZsqLcqwULNiwun57kPteyb9djYaeRUxMFV6XAgScZj9wVSvF45fFnvn8CT9HDxu",
  "key11": "4iTq1CP5mHu6DUW9UFakxQqCuh6gD7e7gmBg8nsSx44Ed2s9oJbZXEfcG6Z6wHgFjLfqA7StMteVnjTkdaLWah2d",
  "key12": "JgUEY7uSLqMC4pMnriXPx882CrSVfAX85r4APfrANs9jQTKPJyREWCSZRxGTRCxsoxeWWjyqxshi5QPZYYHuCt2",
  "key13": "2pRcqyPjjBzzJmiKi5RTnkBqpefbSZWaXrMEfC4c6YT7jyAXBxqcUmmqHatxr2igCxfpg633ge4jyeNP1UyhcM8s",
  "key14": "3RUEfvqZodBAyKE7iLGWP3o7xXBvK4HBQfifFthrqRGaboAK1vceT8XHHzsS36oMerh6tL79bfkhcEt1Jip7NVW2",
  "key15": "3fz9MZG3whTFbyW6uVoRSD5rM6c2m3QSqnQusgLLwGX6zkwcixecYM6jDMJowWThNEUtmQutSdnjcvSdr9hxSAjj",
  "key16": "fYhUmfYwnSRZ2WrpxDmXQAKuK2dWTC8DwwGn3N6p5J9Gnj5fgu6naKhV8oaTqAX4aAXjNLXfFX9FPdfZ8zvXkZK",
  "key17": "126rbWido1sKnBQooNR1cSh5s8LdoxQC3WEsKYXQqmNg7HyU8M24g6Vuw83ZKTuHKtwMbGguyRuTPrRagqtuc9SZ",
  "key18": "vRGwaHRAvhAqRC2vRuRZVWk8k1e47BRGqHW9hw9q6vQx8K9SRU1qp8z998XPC3eHAhNawoYsLH2N1GfFWm3ZHXX",
  "key19": "5RapfvXAU8cy2bxGE5ECvw5w99YCZPQvR1kLZXyUGsFFRFi6D3yBxREyfL8TiYBkQBz2zTDrXDadk892hRnKCT2M",
  "key20": "5iRcA6M6uekXjT1SnQpgLf9fGEQDyYxCxGBw2u3YqyhcNNQu4mDNjLXrkYLGMKp2BixB1t62Z2WfTYm5WqSc24c9",
  "key21": "3Bx86jtuZqEJ7nDnRPGBzX1Q6Z99y2jxqtTFEwTF1dfavzPpjZkH59mBG1sbhFxBtbTfJRW9gg3MEqFfwn4ZhYc6",
  "key22": "mmiyC2EizX6367tuhnJeQQDpFiGvpY1QtoxzzEjSeEXnratTFtkGzEoJSZ78K3BkYFEQGgpgZAcLWqBsb8qjTLd",
  "key23": "7QbfDmwBKEVFTaZ8ipaeYDNd7Jh4e6uJbqtBFyq5vnNHefzXN6qXEeTZAsRaoVoJpVDem6mCkHQzpT8XLNV8wg1",
  "key24": "2MtbJuHdzKWb4TL7uUYjsMVhVrszeGpCbXHBn4xmLshxkchgVoD2LPBL79fx119T5XLiDDyujsxfzEzXtEDWdTUH",
  "key25": "KPHGPe3PLLZHnZzA4Vst5NKHfWpMKVh9JFJaBUnq6Mo6G629sLB9Jxoc8mKMr5p1s4Umj98GPfYMMDGJ8hG9Zp2",
  "key26": "3PtBRYWr5cvqJvdmnYTgFM9MC9kX8t8XggNW4zF8t89ztEHQKvD2jDhfeZLkiBjqPzAAPcfkKUJajmuUKpCuKJPg",
  "key27": "3gy2UdXgfRxCwkMx4fMv4Cs1bMD2hYHkcXeCg9NcTYGPyu6bRTQPNE5kWHhJRF91sU48TretiC7fY6VDcV8epeo2"
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
