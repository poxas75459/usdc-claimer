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
    "24q81NE2wZ291YcRg8nBFq8TLrjKnuc2q7AzdP5ZBwcQpsb275vgaYDfMeRmXbfqD84n68oMS8vAgrCkpCTV6owm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i6hoaF6MCskS7SxoJoG71rWWqmPL3MNVLDGkipUGZ1PtzXFqVbtaj3Y2wJ7CWx6Hub3wUZ3yqMUpejZgvHRia8g",
  "key1": "3GywHuSNuzrxCa6FKGrjMhgidaYQKHidRZxYfBSgX2KW5gxHLe9QRZDXj6JL2Uhq5qpjGNSoTohyaiEeqz1h4Ur5",
  "key2": "3DQqVP5zKBpXCDywzPU6bGaq31A5vt35NK2i42qxZP3NGd3GKAKbGZy2e6ZRw2MsLeDhz35G9SnGRZGWyobMF3pf",
  "key3": "3o9KjXQDgqWfupEhBiJ1gCLqdyqfy9ciSap7VKWTUkBZdHZxSnvKo3DMWyHQSjXBUmYZU1XjYguLprBxhMn96YNW",
  "key4": "3HBZKULKhQGmP7CVCXGu1uUQ1yCDCAKq7XctZtVc4u2jym9EYXRmYJkn3GgoVGEUx9rdrqV4TdoJZGJBKb77uRcE",
  "key5": "4oGVDmxonpofbPvPutQ7m5UipdHhQk6eAyigZW8Voa5iwD6JzHc6Dc5zwhKoA8utUudepoNgayBnFdLa5ViWf6JX",
  "key6": "2Cn7o8oJz6VQtQzJu8u6eZESbLWG8Ehvb8hQYDcn6GfeKCgKf5Grxw6BNQT8L1HbMSZL42U2uMjqxnp4Zoh8Q9vw",
  "key7": "xHYLj76HammuMVZSr1Z3EikxVK4GCYsvMxVxwKRb3kb1N3oAeeHcnaBaPTZ97Dk6QdJwozvTp5R7HdNLEJQsT8u",
  "key8": "4wWopjZrRRxLzAKpEXg1TdzWH5jPRGSn71ppxHrm4hxGFti3GQVWqNNnR8zHpeFdMsRELoigsx3eTGxF9mx1cftm",
  "key9": "3zrStrbhbzRdxZwGhdvtWbbj5p9hvoyM7jesAsNPgni6iDr5TF9VELpQJJuXUBdQiuhv2wx85nDGtqDhbuYFtbdA",
  "key10": "3HS8GL5Bj8Xa9seCgLaw3A8WHPDQJTC68PpDshjhYn2GoUE7z4rS6ZdktxJ7RP8aNpsVBntok7z9iEY1aa2Q13kf",
  "key11": "4cACgZytiRRjV9542MSzsBiYsMAkyJpdh3shug41ZMNv1gtj5CjfqyZ14EJaaYQZYYgnk1E5SbZMfNJGHiEo7VHF",
  "key12": "2Z5dY9BVewboRze1SrCua6Yh1xmPZSi8crzfoHW2JHZeJwDB67K538Qk4j9cd8yVdCumgtWZmruqoLvhrqsWi5xr",
  "key13": "21gzLAgyYKaN5sdfZfUVRVfq4m78jFuZ265tXhtC5eCDRxnrY8w7RTbqTd6mN53rJaaV2a39Grswe9jUha6NJTtQ",
  "key14": "YQtKmU57iUUkf372idtMxbY8RRRQveE1rST6PTeDHJaSaYUEYELA33hYWXXK7b5SgkmyPMd47SM1gngc1eTSJkG",
  "key15": "3xpgJ9o3xvnaHyZ1AADK3WAjJUbXhhFqBFNKp5GyfZGXd9xvLGXxw4wCqtR1n89q2TFtFquVu95NzMhEhq6Zbo8c",
  "key16": "4Mys3LXUXRqBTWDYi7ce2iCzdX74j1AkpPFPNPHoeUsnp1eSUEN4SDJQPLqosi9spoqzCtXMbN91bv4sHrZASSMk",
  "key17": "f6d3xBJ3jgcTxzm5MvTqtzAeLCNG845c5tG531tcKMdjkfEqMGB7nG8z6BLQco56n2d1bzAzRfXUBvTuVyoAz9F",
  "key18": "21GDisfw1tQRTZFawfKr5z3EZkaqApxomuDc9BJoWecQZvxSZriiD3HG79KNoLUWTmJ2Rbidcta1XTWzRH9fYxud",
  "key19": "4ndUZaaZhYnBDk2VE4rMuDuB9QmgevzuUB1T3XpKsb9JmFgZAapooY6De7dPChFnqanWCVJyNzifudD1F1VwHgXz",
  "key20": "3CVvdRwWWZh5QBjv1SbbGXkm4XcgCuGFyis69UqiviJTKNGUQC37yWBzrUa1Tw9wMFsP7yzhbwcJ12Rch1dq4J86",
  "key21": "3thqMWdJEpqkFztpqJwfbgg5Si2JSrAu3WPEdqEYst2xHjB61iF2TJLVLgbc7qLNS4KUm9o7K8nVnrnqxJYfjchm",
  "key22": "5UKJYjwQZmd2mwaNJjgaArGD8eTzNcuStrPidiCo1AF15yitBCc9iFNUbUDuJXpfAYCSZVFhdj8qXgahZp3fe1bq",
  "key23": "4zsZFfTQ74kCtrYhP8fBbg8vbQtAzEuK2gASc2hgmepSWcVnYaci3De52aZgQUjdXPBC24WvMup4fL47m9epoYMo",
  "key24": "3qmB2zQuYACa8qHVETNanGbSm29TCWTY7qcyhidNBYsjzrkC8Y1kj2QdRKx45br6fse6juoyR4QTrhiGJtxRS6kB",
  "key25": "5u3ASvvkL9qUw686fxdm2Jv4ucZFrAyG3i3pp5L2n12p1gnX817HcikgxGPjBC2Q7NDPQFW28hj2KScw8ErfXecp",
  "key26": "ibR73UT69o5s71LnQavPNK7ARxQNXDFLvj5Qk4K17d3EtDA5BbJzTmQo7Epen2KBd53oLqrWBuDJ6qKA8whWvUe",
  "key27": "5HMhftd5K1CbwfvVH16Qwj2koizS1GU1r9UJtSsBAhmFPSopNcA9aEtXdYVjt1tLtqttTfi7RJ2JdikYb2fbbJS5",
  "key28": "5FaHW6bZStHyjT4gNNF5NhW5eQ87odu4NtVPsCVqy7PaZDZRpcysFfU7xvYtPCPcBoopAPWuPQa85mHorExVxdew",
  "key29": "mjFSLFZQBR51HZa641kPscG28WtRNiQvJkeUnSSDuMCUouQTQ1NS7zymfrqtsMAxz17XRGuKUpo6bQrrnNLVcYP",
  "key30": "4GzZCL1hK1yVFbj5ScSzW9qzfeGR9GDpAjphQJ6Zox2PbxTbGoou1MfygqMGsR2Quj1Y68gdbZyd1KWpHhiKebC",
  "key31": "58EdTwuL4Z6VhtSYyJ8MhU1eivCYHE6mmeaJqqWxaZf632XbwDKGKXjNMgzVshpAXgXR8oKZR9MbtwedB1wkjPDK",
  "key32": "3KgepLhrDSAf7EU6fcxoAiW93ycgBDLTJZo1DzfJJGoVjYxyFyv4pRyRHeC931VGNXxjxqCgGEYu9hLuYk44uaGq",
  "key33": "3MVt4AWJsEVjckUiAh7mfGopWbdK5Fc7mtwL5hFRQMceqBtezXzEz1UCZrPkjbVueizTvX19bEiH4V36ewdCqHaq",
  "key34": "4CCS2LCwb2vwAKnFxQWCBBeTzRrDiYJxDgBCKZFtU8DR8wN1nWmC3v1EpBS8r84nyo5gvQQYThc23xMUetokaPbp",
  "key35": "4A5gRBLxAKifACqeRjy5angE9dSUyV7ztujgQBz7np2ZnYbP3pAyHwETfd2gLhfDrNmbhEnVdSe3qvbdGP4hTcpp",
  "key36": "4YwBbQs9hXYaXBmHybFAJfHvJvwawRYXL29tjPN2epRqCRcWvmFo28aUNobL9LKrfvLNPNkKA3HoMSr54rjpm9u",
  "key37": "5Z6uyxXTiHwoq2wFryteicByoZesGohpyFuxyhN4oJWPdd6KFXZ14FM4QBAQr5WqorrtG3LNJYDRH8AqE8Ne5LSg",
  "key38": "67qH3LSbAoAckwMDvmMG1BmNDb4J453Jtsq4aUUjcWb76rtZ2pXbn1zVnEGZ4uoNF8tZm4MGHLBru62R5nQrhduE",
  "key39": "5zrdhUtQkeTGnhFRmHs1ywdq6onMPENPKwJy1tLRazHK3MzmeXWJsE4BC4W8FwQcrLZwRqtBo2pirSoY3r5VkcXQ"
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
