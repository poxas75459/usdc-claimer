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
    "3c1DTfiPZSJLiJmtJK6fXZPy72b3mc2kW78DK9Lrt3ofZ1shMhw11KPnLbsydxwwh9TVhJPkEacJTjN4LYa8JrP9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qhac4D6rqZeoP6ZgWkq9ZhTes6RMncCjKyqxZYjQvFzcFqssDchUktJ5Ti4n5EAqyBEEJECzpP54ZeSdi7JGCw3",
  "key1": "3cbXpf29M9RuYWfgAze65tvye6y4j4mUCJGb7CgSuW63Q1xejxhPQAx7WJjWBQwGzRB1NkjAcpAfspx5ikCWmikk",
  "key2": "3NGNsE69VuPiX77Yo4RhpgQYgr4YxDXmekB2UprMcpNRfZ3ebVjQsXAaukRuHMhfe5jqCMXGGafAKLGmuQ9KM4vH",
  "key3": "5JPkXYQDP8YzjMiv5D5eNnnQ5Jn4ej8Z1p5w5gMvbHbfQUqL2EW96StQRF4mTmUWVZUMWMLsa4qH7ei6pjEuxBxj",
  "key4": "2xg6JEzojniVrQ6NjA8s32UUAf2W6yEvWY16QvvFzBY6pLBkFQWZpLJKtrLZtuYGJQiHg2pSpH7LTxBSr9WbTwom",
  "key5": "5BvBHtKbuXdxbxx2vRWQ8hYaEZD6UnnNKdFigmo2DEG3X8sCse72pudczZz226S7QM1x3gT8hcBsU1J1MkLqEvFM",
  "key6": "5kC1eK4QvLBPxjBKrvdqsHsrcimbPiWvyg22viq2jEj9ZZoNPKZhffGvjkP8G1uJqWfsjoGLuBDqiwPs3g8zCMTW",
  "key7": "5e6xvxRMDNbHyBVhUdKEHiLTedTBuDPU7creKJzBTePA7R24rPhv6hFHuDoZSYqq8WnDpHjh29fe6YiwHcB9WixU",
  "key8": "548ahDgaaZp5H3SyLETKTSY1AWvbR9dCysC8Nro13epWU8GBxb8XCmM4M3usRAi5D7DqfN58eYKpfzWDNYf9ynSQ",
  "key9": "5PzkrdTvRTfBZFj3VwHnN7s5Jr4BEzbbrZeiAoAemA3vYWpr1GGAZC6s2aPNESL7Zw9XZ3NBFcpnkuD8x4MpjvnU",
  "key10": "BpmAWRex6mHNT7NG12cAicA6fLo39qYNzY1eYihb9GKVLNQ7MbvqE6mcurEHpwN2HDLipxJzmPBRfmnvYPawPar",
  "key11": "5YqiXUW2jNfrGJfJ943jwVteLQ4oNWrAxfYAncQqmDJzPQzSTEfA3CBNexTwTePovehE9X8XRsUFyvzcPSNYuvpp",
  "key12": "48PvJmC8sYU2GUeDWKTwGHuydmHWD3evgMXJjZ8TdrQFUApMBJnwCaR1p3jvw7zgTK6Y7NwbQNu5tqi4YRimaMiB",
  "key13": "bYfEQY24PbBUvrSdqXGBczr4LiW6vTAnLszQ8EzB5zdom7x4MXg5igq9sbGtnfEJwayA6RpwvZKTwejtMiqyT8F",
  "key14": "4H6jj6yJe1yjYREtmfo8vSVA1s6MV88GvY9b2n5BoNrZTZPDuSUWDtXD557tc7XdnwXqXgxNNeH1gfo9Ypc1BCsR",
  "key15": "47S2gh4QkbupNVrwV8RznNU1SLJdGoxKYcvtx9yTironwX7kz3RVDVjPvjqbRYT256W22WdkUnrGy4YBP4ViTgo1",
  "key16": "2ujhVkJ6MzWFhjMaJt1KhwRPZp3Jr5Bmqzi5tXRMtmnyPNPWkLW83iRZjNpyERZmhwQuy4DFvCntvTwssQX2XL6p",
  "key17": "3NVUn1w32KnpikJEEdDUAWjBTbjVj8T38jtyWPvSbzJ5b5RHMuEaxcgG7wozpczH3NuG9AMJPZPZjU2YghQcdz8F",
  "key18": "5qtvyrs6eLAc3464uK7aGd5uJ73RoKkyMLp2fSsrFbPZ3XkeZZjfmdzkeZMU8pWAFqdjtYyTnT5DaPjG4BkshzCh",
  "key19": "2cHTohMwCAn95P1t6B6Zw3xEnx9sDhKyu1Pbudra2TAAXNrWvWuHEMPaCdW4Fw93wHnPTS4bm4J24o4DXaHT6ik9",
  "key20": "5aKgwMbWBEWe66yrxaJjv1pnr1KW4jjU8iHoksdfaD2oFKrevUMNwzPWAc1WB5TWHvRd9yHFSkHJV85parBS4idd",
  "key21": "37YTWtKBY4PX4fNB52KDC7TtEEhHBDJy2XuAcJgdBnSJ8eExPfPs3pXKLWp4QfBxX71Ctra6D7Auw7WUNcm3FN74",
  "key22": "S59g6NwZMPteAzc3u4GQJRK7obCBhRoVUc3PM1UpMCPW4jDXER7XBXSVpxwrBvqQYS8ZdZrGxJQGh6wgDV87tBm",
  "key23": "2CDF1MEi9Hdfy4B4maLaE283voR9nBFGUZrw2g8h5D33uJ2RoEvbBSSJUU7brKdwNG9Fy3fVRx3oxd3x7dY2NHxX",
  "key24": "94oeef9abCNSyt3X3Jf5vR1HzXpTaVfwnPRz7zc6mzsaXam73MQWc8yqMaKPKEBQhjrKmPwvFWBZy29xh9c4iZ6",
  "key25": "54F1iNtPAmgSu1wqoR9zfUfhuwz12TCihUDGzM1hY8b72AAEFZLBUX1gkFUwWEPoMBL962i1L6hyn1VP2WZaJyRR",
  "key26": "4VxfknZcK3UvqkSc6s4SvHrccPYnByL1SgHNsGxokthPe1jFSu83cbHGAuutAX5EwQehvfRweVdWcZEm6gY6HHfR",
  "key27": "5jRWUJqVZ7Ui1P3iKLu4fRZVDA87C7YB37653KiF2dFYHFNkcXVw1xwu7r5vTETKwwdknGQL2Di2q68WzURsxw2u",
  "key28": "3RvMEYYm8UXDurKHHy8CiYCUZaNRbMSkmJtfRm4N68ZMcy8WYgUY9tA7tH4Qx2rwuHJ2HosDJmUBVi96D6tqoHWo",
  "key29": "2F7NJ5t6NmLJVtYcdChED8fQqGdn3MKsX44Gqyzov8wPrMxQqpUoZh6QGzLQ6TC41vY9yZYisVa1HyiD4bxoA7aX",
  "key30": "5mWQVAp7uPTQitvpcLRYnsyGR7739DUyfDzYWM3CTTk633wx1Bs7jJmW3ApFkBTNEF8bkJoX1M9kLeUFNtA14zrU",
  "key31": "5UFazE1osGd29DL3W5JbddtVoozPiwapwpbwBrGf1gtAWRZ7QXcwHVfkjCdSXoczRHtYafU9WtSPdQQ9vo58Syo5",
  "key32": "5T86Ttm7bxP8CHqk6HrrqZx5Gjy9oiakVh3E4dPHFKbV1uZJdRJhWK9VM4tJA12RnXLrBPXZk1Mcn92NamRDnfgX",
  "key33": "nHui5fftntDRoyXmpV12ReYrTqLviHPy9JD4zqAjFab6uFMqpA8khm593iBBMxZUYTMPY7TmCzw2uZgH2LajBF7",
  "key34": "LpNd6WCKJE9RCnpC3G17vA9YWqVWpZgL7QWiL3RsE6DJ75rogHqkTHKS4Av4X6TSX3FodF4Az7ouggKCb5EZpTG",
  "key35": "2Dqk6iLAhEPVjLY9Qy72X59vjrX1rvq59cEkuHd3LALpC8nSAxsn8CgKBzJYep4BEN9jjEn8q6wAmtzjkR3yxRj5",
  "key36": "WMwiMntkTGkYdugsBXHxFwtVNSD43tmgUBWh723oZHrQWGodXccQ2Ny8Bf6qqa6fsBBL1zLRQxYdFd9Db3vToA1",
  "key37": "4SB4SfZQ7gd8RLwjcLfw6zYjeKEjXi47pGiofhgb2ku5iV4UwmL1KH2g3CRbwaXukiNxMdFCDe8EjUNDDoGoYGHC",
  "key38": "F2y8YchXKnius5gKScebCJUHFjkZgdxP8R1VHVrbbt7suk9NntQtWEHAksJu39sFL32tSvHeZ3fLo8PLZFikZ9H",
  "key39": "jnhX632178tCvkWjpjxrviVLuQ3BPP1ZaZPBuL1qHJcpDkRYUkyD5xmaF9p5W8iwvgmTVkpxjfbVVoNb7Q4aWkD",
  "key40": "2eno6MhFbNwdAdGcLqJ5huhrhxsHxfK9cd6JwMihCL6zxa3dgZeXQRZc74sH4rjLzQ79gftEVuJ1Zk5Uj6vqMit1",
  "key41": "xv9Egi7w5jBuYXbc6mqpeo9kNKENtir79k4PTrpiJkW1dub3yPqjyDjYwYC4aDhenHnQKoWLaBdHmmVzRJdkc1E",
  "key42": "3BAMJkb6wvZ8gVeRjZxeYYWFwd7JYxA3kHXaW4ju7vdK5GWgrsBSRnRnq9iJeKSDe9aY924sapFUccGSM3jkc2zm"
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
