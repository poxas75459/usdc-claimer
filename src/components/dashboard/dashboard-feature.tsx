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
    "3TCEEB3mpuuXL55kopEhE78WUZWmZBsxyZNH9eH2iB1WuxKhYRVHmCDZSj2kepStCt3EhBYzMw21wrhXg65Rr6xu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yPLGAAPku3kAunHdLhWNNnPTKQZU9zC4vyGWPek17Zgb1dYC8Duoz6jjo9SCkQiecLRwfUQLnxKqsdDkjmfiht",
  "key1": "2xa2ZTgVpYdjiurAFpJxwPeyDQ9rmHgpSDevvJGS5HNwsEWGs4MjZhA26CK3foQFcVsLX2R2HfBHAMM67zYqHPGX",
  "key2": "3mWWaVLK1456UXqx91AKjGbHjGzDxYJU7fpspfUfoH27DhFnVz98GAVfKWkD5h42LgZsr5Pea5vR7GwgUK4PKswk",
  "key3": "4NSn6xNchvgTPKDoWRif6Tuz6WjNDuFrinz7t7Ujx2AH8SuGqpaxvfciF8x2VcGmVVn4njjscA5S9zrVbF8w3pvr",
  "key4": "2Dnjnw99kwEB7bBVvZE8C4TnsbFEVT9i4Y5EdnKcpHYELqkMayLkSLdyYejcJmR6ZRg1JFL8zyCPqq2zLqw38vHj",
  "key5": "5GyZhQcRXA7u6JzqngRegYEYBkj5UTioBL4TocbNs4r6Tgmw5XpEJsfck41g1bHJKVxBGbi3Y6yApa6mYktdZZqs",
  "key6": "pKrqzPG23eVbeg8kuCNMKdLhmo164iZ7rs8rpmowT31uBzoWek3tCdkVdjf8J2PF1WDH5qSPFsTy45BkpdpUVuk",
  "key7": "ycEBC7yzoQfhQErAdM8bcAnsutf4Y7PbaKRqUTyeYkpYrKL1xHjeAA9FfvvP8p2yqhjE7k5H3JM9sf13aiVvA8z",
  "key8": "5uwXcGV5PakRsn6LAHorGendetrmGJTWuQkVytcY3wScM3aJExL6N5i7wHPZCzJAbGzj7VdVpLkTNtG1sH7HfBBS",
  "key9": "oBHmisTNAVJFJqKAYDeHstYNg664LM8owwiQ5m5Mfk2ZidBPT5ZTHk2vhre9Z7Ang8nMvM3EQ5iT6G62b9m87pV",
  "key10": "4pXJ2MDYv4m1x8FQrBnCocKrBMFuWa9UzRRDBtzCdtDjmCQmL439avoghaU6hGmELbvtMk5y3H1vwiDjzuvYqR9a",
  "key11": "21Ja2CdLVix3KgUqqSSpnUeCPLjx3o5Lv8zUKbgd2TRbaRCNy2TDbH7ik2nYkoi313MD4q4fBEJRq4a6qWgZNyT8",
  "key12": "5DiVbKHA39PsHSnvcfE5WZETAZoNwAj6N7pvsgx4QopAeCNsJgk5DppXQTr9RnirKyk4KouMdhD67gYunMuENnkE",
  "key13": "5itkaKst57vzCEh8vtcgk3HSkaQYLn1mN1b9VqtXvarEj4RFvkH5z6w9CDTLAVrD69wLEKUYmSr81Xw8LT6NpRMo",
  "key14": "42UyCfji9NXYun6TcDbQ7KdJKPq2RUPfsgq7a8XdJMseBRwSRMWp9WZA3bdWtNz92KxYPi9uss1Z2Nf5AkiPpVzV",
  "key15": "32PYbSa4qHsHs8EhdkSNCgrRyrtNFLhPrab5rC8ep4f6qwawxUy9ntRrTEw5Rp9tjYicMMtEF1syzEuDLEBujXg3",
  "key16": "4WcBjmHPCkit2EuEFHFD4i6AihCyaGPyT7APwywjPmaaHdkbMxtpEZs3ehwm6gGysgCKfda4N9DqtSH248GEBfM",
  "key17": "YjmjPtaNmYwYzL6Dxra3Na2EeZJBSPE2dPYdhq7L8aYpTZPqbmSEXyJpQnNJK8bHoWRn6gFGsSadoHUBhkJrmyP",
  "key18": "3i77dfozf6bZpXjnmWWqhLFdjq693q3NShNX9xmj2LtPXNGMGVsN4iKmVZgnKzrnVUHVxBeWe7LUwcYCSv8r2RqT",
  "key19": "CZoYaDM2zpry25e3boUZS2cQyfDnXYsEam3vz2STijuBUdhz9sSDz8VJzZCwUhPSE3hjFx9yE2CmP4vmFC7shWN",
  "key20": "43QGZ8JdBBi3Hz1JDU8z9V1b1Ljq93igGRKAA271t3NnyFBVfUBdNQyM2CdQXtyNxf18arMhBLf553HRS9AX72fQ",
  "key21": "LCtBNXZwou9dtNi4sf9KZfgz67uT3EHAVp3hFpEeubx61ttFbEz6DjRm7CrrXccRHY8orCzQyPC2DEZhnyu8nUd",
  "key22": "mj7ar81S8J4paPjhh5432GmBLVWvCZeFJRwfPVQwJ6txzzaN4YgFU7XEZxRnxyxj1agehsNtYWQFB6m9eH1CsDR",
  "key23": "3WwMm7DPjvxgA2HZLxVWWKRNXVv4HEB9NDCph1TSm8Qe7KysdDRkCQxvsrx2XAxSu8AxSb6fLFVbP2tgkgGXLxqT",
  "key24": "4ZM9mKTgW7dQeW3iU29L4xHG6SFYB5xF9KeYz3HkwEauJSQBSA3dGndDyYMzrycr7a6wNm15HTFGaneV4CXx4DiP",
  "key25": "qyG7gUwL8tfMWkft4y22dkHwdW17XWF2ttZeg5TRSYgGC65G5YTtZJ6QJNiWogJB4u9qK5BtzpBoSLgNbAiqZn4",
  "key26": "3veTENvj7SMJ3nfDVyveRZ6Sft7TpjH5d8G5j6hDHzD4UxWFPo55zXTm48A8soqrsyiUziHFE9w3xjuT86Fpts7u",
  "key27": "4fQs7eMoXgHFvJieftjq71A1uU8E4ugbGNUJCp1WMTGGXBxDi898VCsRqqdxbaMpcHfRKhWNtvP8CinJ48buyFmk",
  "key28": "2mjHt9i91NFAHpnUwXnK7EbCEs3UNHfgwPYMzJ4zwM1q9ETd3inCe5WTY9VtnrimxoL8iYSy1D2i1xe81GEZfh91",
  "key29": "5Xd3YqZjodkrxEne8FF9zkahgAfGxhz2dXpnm9Vo6LPfMngnPQb1XEizsMcsJjVWcGUMowoBDTN7GY4RG3zHgiBK",
  "key30": "R4hSTNnH2G2jAjoP9PFFVRjtrPwzsfYmSJhc7yMN8VnuJi2CnDZKvypj5sEYyYBi2KPficwPMoSErFu5FgyiWbu",
  "key31": "HGuedCq64p17XKz1BZpmPZWnkbTPJvMBVYbR2XPxr9g34PZgzXLaYdStgBwmFCGGkDuxPiv2Je2mzovysiQ8ikY",
  "key32": "3kcK424xE8df7vhxtu2itTc64hqeXv13QU71rBVApKf5TytjThioBY8De3wyC5Zob4A2c3gaHr6yepjgVki4L7RR"
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
