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
    "5tthyEmC1ygyF3QmQuBwJTLd3XRELQqPMLcwcywAmTCw2DwGtKxi1TJSQ3ygYR9w16KmLQ5Mr5acUChu57wYCezK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BikmZ3UwVoKtwqmjStawGxf7Rv3WcGoczSrdvCYH5mvn3uMb3RjJ8AMCRVbsJpbXDYPqphB3LauvDgGnrdYAz2J",
  "key1": "6AdqukbP7yDWEQUJjvYHRRn9iu97sxWzmqHamd6BCY1rgK7wQkAXXmp145aBYbqzunhwuMWtWse3wpCGfvDxycp",
  "key2": "2QmNCmUeNREbSxqrkqn9pj6wer6jodL2vDpXrToR2UTUgWzjebsTE1H71rYWKBuxPjxCKnfDo37pnQKCyxTtXaSG",
  "key3": "4PUfDfeE9JdE8ky1daEvoJKv65FXJbWb7rYffz491QkN3jGCxMUHNr18Ygr622nbdt3ehxX6oobRDbfuB4GAFmtm",
  "key4": "3PtCR7CRMmjGgjqgxcnVXCSjRcXCnSVgsTMvCcU6VEWkqPv2drjt8s9BidBp2vQJKNKbktGhYC1N9GHiK5vBi7wK",
  "key5": "4m49HpZLqGenxZeq66qZ4dAmQAeSDGi6kdaHzHkwpSGNGovC9Pu7emNoDPWRjVJvrHiTdvJZYBEvRTWShSjpDpwr",
  "key6": "3hGoWfJEJC8dCRnbUfdAngSpyn9pZZ9p82g7faEYGnriRgW8CE4Er9habL3v3QCcjx9iw7ujcLfTRgfpPtsFkbXb",
  "key7": "3UgTHjZJaps9xz6pm3hz9EeDrkaLwPeHTr36KFKKv7jutaJnCYEtjZwojhKhNcamfgaPw9eXrRVsyRAg9kW1DTHU",
  "key8": "4rFWAMAcwGdsfvjCDU61ZYipnnuXksgBztM9U3Gkp1LMNMFM1xxcN4zy5bgHh93So5xpaXzUNY3AXAaREJ6QJ8Tt",
  "key9": "5dz4eC6Fe5BEWyhcibritYB32sqq9YWazhMBgp4iVELoUTHXd8VKvBgQcT7eSwGfaXsbjMSzimMSB6B5m9zdmw4v",
  "key10": "cUsN6ArvBxSpGidfT36q3GSmy4oedy8jRfkfBAsSt5MGFssC2quAoqG3RnYzxVP6z7JiqEVwURM2tDYSXduAjkM",
  "key11": "3X4t7mh5vEuxS6WDfbMHf3fMyfTcvhSxVjAeqe5B1FnNmm3jJsUrqxqZJBKcQ3fQuwkEfD4RyhNYj9VvFppZ5Gkb",
  "key12": "5aVM3WZrE7ytmJRSqFsm7945doigY3ocMTJdujxm9hAGv4z1G1teXdZL8bLgCkVkMyJZTgJxUHFd24DZqnh9f2mw",
  "key13": "CURWqGW3DHTUtp1aJERcVBA3tJrc5bSAyZqhPKtXLVN3V1hdiP8eJGNYRChe243EmsSU15LUbnWN5rVed4cfQ7s",
  "key14": "5YkQELZMRHTRkMvYBXYBbtuL7bgoKKfRmmCwXTN8FVteqihvf79eCRzK8o43gQLP2NkyGGiSNXPHjimB3GNYMwiT",
  "key15": "5HUdDcdsBoAMokX7zU846EqSwycjvurAWA5nMGfie3BD3pWaJLdCcQ5xZ5B9R3dAR9C6jtHQHJVWL8Uyp1uKgDfH",
  "key16": "vyDi8XAd7k692x6wtE7WX7XTwL2CcmMQbCf7SXRnT3ax3r6C7kTRKsheVEHCuanArcWtYbmBh3oPopjt5w3FKBf",
  "key17": "RcvJ52EPqwagNqE9dgx8B7sX4kCXfFFdRhjFSJX3B43p1tSGM422bTRbeUipy3eLUqEqz5wNbuMsLgZK5q2STA5",
  "key18": "2zXYT3KSrGXx3C6i7F8NYhpFDgUcUQunvLKgiwe4uinUybNwdAmuZnhheaJo9acDwMhuChASa4RiDwPK28fkjVNn",
  "key19": "2c1z8HqaCe9M8vVBBLDpc1z5UW4dWYqK6ZPpQnwya9W55jgAGnSAyw1Bt7hwtazGGgX5HVb9qkGtCxE9t41d25Ls",
  "key20": "2eJ3QwHTqATvp814c6WXjcN4VcfL4WKrvfS2nw4mpsgZ1V76TKnHCbzMcCJCvezUTetzxQziud2yugYKCpZszyst",
  "key21": "4znaEsiN2snXg5QJtPddGJ2PnVc4XHNKDDWab5MWtLm1rZwa2Ggb93tpxSM3FDb4vxq5Yt5DnZaHS6qwAuhFSQqd",
  "key22": "TtDgaA2LeTQJCqwTu9mqSYb3zqV4Zexane2KwCT431nn6HbTUAoUPTrsZxS7bZMWCH4L6X8PktVTTezxj2PVmfV",
  "key23": "63pbV9MHktqx9L4oL1rijGxxnH66Xxjzr9j71RsZzGdxxjZqZpVMHTv9K67NUT2vnrGqrHoVkdL5Vvgruf7rVbTR",
  "key24": "4gi3oQQV9mNumjWxkkmV5pAHJzuPvwn7fWyiPzJqkx9sRXsvUvsB8L4vjxiKsfZEzi8jwM6haiPQZrKU62zaBFqh",
  "key25": "53erBoSNNCPX9hBtdBjGmibQRFfhM5imHmuew6MhNCqVayy3PiL4QJ8WcjwdjKPYPJvL6EcmaG5bJujrUm1ehLUT",
  "key26": "2FDdJguxkqsAW6QhoVtavtSmV4WGhis3egw1QnXv9coKHk63E2L3YqNBsexFiZaJ16Ex3KA69YhQjqZDEANcBYjZ",
  "key27": "6eKwhfHZ2EaFsZmLX2ZM9xYCA3xjbm4arBVtRNaEMSXEngp4F1g8zoXMkDy4WqGJcPPkiLrawtvXECcBxda24hY",
  "key28": "2hr8JauwqqnQoRGvB8MSiEK1WVseA7P7wKYMjzG8Rxh4wS2XGF3fLqx1GCs926NoQP3bdDRJP9WagbA9mvbcN2q",
  "key29": "5mbo6b4VpnRoxp1BvBLGWb8HBhevMH9HjYwDuHaHdWT1ZXtfQncekzagE7cJGeJ99bQAfBiLdCwPpaHCyJxeYSnt",
  "key30": "5BK5589Bg9GsvjWQe5naH1NL32Dpo82doK4JjpCib5L3RjMoY5AsednVBVnXwG9JVKvxMuqABhpcFy4VYEfQhz9A",
  "key31": "3Z5AzBopx2JdKoKW5ES7Ff5cntrn3JmfePhv9oQSxd37N3fHcN33snU6F2sezRMhxw73AvTFBBjmnA3KUEC2FniL",
  "key32": "3v825i59ur1u1yVE2ugVz3zqYNczvEGjgFox2HW3g2QzZC9j1u3zryAn6uzh3isTNah6DwLbXSrEZTn5tLN2poNP",
  "key33": "5Rv7VUy1QskjF4KDcBVEbyTXfgety9Q7ZHsCaETedmcAMXoAzPMpSyRzmhF3tJdYYvGis18hSNiQ85Ro9qMHtNsc",
  "key34": "3HVkyftdZzDC9spgSWhscXLN8tg3jUAjpN9c3xpkE1Gq8R2ELbE3R8gpztx8BhC1f6Vo4oKYK9zAfZzz8Mp2176J",
  "key35": "kBAHys1cg7bLqTay27BPwcV9V2h3dLwzmvGrXUfWsy3x8znkVhQhLjEPTvaBPYptL6Ffwv8GcjNdt7wskhvUoZH",
  "key36": "5xTCHiR9PTWTJuAUw5VSSp7tsd21rnanda3HMrRt82wU9niskwVrGWnyV1Xb9ZfbXWGba2fp6ucyNQszYzWHget",
  "key37": "5vFxG3ZDVq2B6A4p3FgjUMFdZ92VsywR3pWAzQcKxmMZcLRvbPShwBFuABFAcbK78d9rZuxsM3Kx4WQP5XRUz3dD",
  "key38": "2Q2FVbJefZqAiriWLtnkedwj1YYYmYCnjsr42rpkthx1hSC267tArwoxzATfNYtxT9k3UeediLmHDCjdHsd5ADAn",
  "key39": "2tJdiaET8qCTeJ3JXN3frjNPGy8yjtabnaXYcnYr9vFwU3axbhRuvWhUSvwpy41StjjtydEmsibeEJgQq7K3c3fe",
  "key40": "kxWBwk5TUF5dbsREGkqoUBBN8AidsLbsx7w7PaY4BWrkxAKJdYp7ZrSf9ByHmprhdk5JQGjciNKL18EFNhihai7",
  "key41": "65RTizBUzA4KDRkUhH2SKfB6gnAEbuQqK2i3hCgiWavhSKwxFhjQiX9oQJrfYhbKJwVQeMxGhAKDMePXjZaAiXM6"
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
