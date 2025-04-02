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
    "4g34Mqq7ZEjsTHfjgJLSEJgZyoh9ZEKnBJaLzq1x6oCPQgUd9Q5GNGtj3YQduwZZgSxvBTNWabAVqTmApooQqwi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66tA3diaeXEzHgENG9z3qsfw4ERDaBTg1FVh2ZjH8xpmmTYyyi8ohkgVMqnJVvZ4xmFyy7VxCgCimwa5RCPdcu2C",
  "key1": "4D61m8nir7kXdKWrgXR9fgVyCdq5VsygqbSh7PACipfpsSsuwkTYeRhBNHUYFb9ZPDFSYcqR8M6zrhKnuDgHDdGP",
  "key2": "5iChhDThDws9pBuffANiLb7qQjC963SSmvwJCSCP1LcVJgU8voWToF4LXAS9cNToEQuxMsQYsqpRaygVk8eegkjR",
  "key3": "657CGFudJAfHzxPMP14nwNVjE48T645bAFYsj4kAZcbYM1gLGGgv2FebJt7eXwLPmhw3aHrThAwUe75htSXJUP23",
  "key4": "4BuZY7mggfLzRXAs42uxKqGhbkxiGp9mDdZLUE7riQXhoC4oFpuvw5RLyVNgLnHNwwn3ove535U7NuEB6nFy2WDV",
  "key5": "2iFxZRLp9BLgFJMsVXyMR6BuyxmmriDb27Qid6NQnAhn5pYYFKi3HnSbhvfk7X1i3wscApgzAULfs8r8yEqvLEdS",
  "key6": "3vS8b9dmHVy3ahKuqruLLC3H5xVzRLYSfSPqHTKdpqZd2vgKXFfTmdisv46a1AhDHbRMLCSU11YNi4JZSepqcRt4",
  "key7": "5GY5MhMwKueJLHyiY2AFfyaP27Zk7tsvgPUucqDfCRnunhexaqdEddbitxEb2Z62UdjmUhhWYcemTtBprnwbH7rc",
  "key8": "3a9PHaJxqWYnq4LKyfFKnKbd43QDiijWLT5nHk43GRAkhVfcM6zSwMZNrvAVaU1ew9Coza4BgHeo2tSZGVnVKiBq",
  "key9": "5QRpfNYrp7eosHX4eDhEXTxT6QjYzLRX2NeJ7dVx9n2piBVs11G42zsxroTu9DpBjN4UB3ygfAgwi8bwG81SMKMF",
  "key10": "5nheVHYKRJw2mKQBFGiTv4feuwXxCid5YBvyeyFepL4yhYkwqjE8uB9KVTegfdxBhUKRFkuaxkcm8J5gxXFUMHVT",
  "key11": "YiSnfoAjHaBnNTSWABeUZTMJcyLDCnaMYdxWswYDCn63XmC1FKiEzHK4vyHSJUrZA1fj8SBwLAMNLcpk2wpiUFg",
  "key12": "2mfTjJAbBP295XaV4QuqX4Mbfkw8ySMEZ3uUkX1e2scWScwu85NX5PTzFfRFA2svqTmRMFhD3ptcXPbMeb7EW3SD",
  "key13": "7UUWUmciQHZGGBu8uvcD5Z94Su1QwVG8wjmz7DQ4Qv8z2DGHdCFeeEqEH4D3k4Zt3pNQv432xocEAipzseBTk7S",
  "key14": "2UPqUBjuTaNc4H6QZv3ppzxS6zVA1NvHQ5A73C55nAAXFpMpYqynqWMw42KuUpLubKTxsetArVEMmkAq8Xr7yLq7",
  "key15": "5XjaHYZ17RQGbG7y9RpUbJ1f3kFvBnDezvuorfJrnXj55A4WUwhKJXfkFswBRHAHCiP2huGasaTua57LBt1cJ9Tg",
  "key16": "62Sg8oxnSGwpr9FWRbJf1Tts5uyoCTTP5JJSK5M2UwGrLD7eS6tvpdxg16NJAxqyWiBYBRk5P2iTN2CgQQPUtbT3",
  "key17": "2YY8vCjzNY1uJPxUp4ZAYFNovSns57gERJKr4c1xFqyHyqkuNm7DqSWu1L4Rkj1cUjyDY9HJex7u1XwjLhrmvg5A",
  "key18": "hU7PxTXa2yVC54qGkAYShyf2SHx6rvx798ai4HWuMAvJS2BvuHDSYo1CqwV9zbitiPFvuqWS8xjSqumKrGckBTF",
  "key19": "3VNyr9Jma6irfHNsE8nWSG8qEYAnKpJQrVmBsnyjHYwPadm5EfZZtEvnTTgN2wrNrb7RoV2Bhb6cnuBaHht5yd5n",
  "key20": "2tr4a82pCWfzvEJ6hqvzja46NB9g8BEQnbXzi68ucni7hmbS6BCssPpmgiPVWqMUFtbYc7ckCcR9gKpd7vEXC3Dx",
  "key21": "3NtooUeb4AuF5qCgjJ7qruACX4XJoSNP7XCK5fVZagVya2Q65SVmuC3dk7WiqX5A11g6yvGEiHAo5ZYFTgjo2Eiz",
  "key22": "A2sSy44omWs6DU4eaYBnFwzh6JjQCruLpRKWDMoUDYkAt3MiRcSPYrdvzdCogTnqVYigrMFsvpyV9xgyyijjTSg",
  "key23": "5CNTAtN6VkWJfaGoxA2ApoBEjyy9QjivZKjXEiXiTPreFJw6kTEZDGhoHu7b3qHDyt3TBZCrSG6wd8pMfXymqGNb",
  "key24": "3LBckEqk5nxdPRzLFVZ1uDn1A6BUsLAUKkspW3rhdfJPTtnifzQAmKSJru5SAS27jpvYoW27REVhbT1fKoUtzyMm",
  "key25": "3WYrN3U78GzFo8z8ZLTmfLP41M9swHm7kDvgzjGgwGFFUQgtWgYvJ9wdXwCnNFMa1Sf4LHUtbBhVMJ7WTWJLzQrN",
  "key26": "31TckxobtQutC4peHHg3NLbZVvz4ZeytUgRNgcDKZZ42DsvToxUczFDqQwGURvudVnD9RMffGqtGwzikWR8Jw1iY",
  "key27": "41HiMVtAb5KWMf3q7XkcpzuwApuuceEx4bCCW9KxtJRxeL4p93zoCWxbqEbMnM4csQEdAY9tMVv5y4F48aScX1fC",
  "key28": "3qwpD1yXpd8DFhmrrMGMqfqAHVUKzMUVJswSrMtLU7QeErhV1NVu1yFa9svjVfeBbHBnqEPfFS1UzbrvmDSnQZyw",
  "key29": "nWomwk3FdgqiUCL2Ddr87q68uxPbQgBXe4uWiry6BmfUXBFcvyUF62VRCcV1p7KNq6z7YfeKt7dpFa2ZSXyQSif",
  "key30": "4FmuNcTnhkECk2FwDbTzjpuU1TAQCyTbfLbK5VEdaUd5168er9oGk4zW3pBJmpo4j5fWr2QR3evxjzjJEga1ZkVM",
  "key31": "3LERjPA3yrTGn7rKcLcU4iette2mw1MXLazpyLpumiWAmPwRmikSth8TanAig9sr9GqYjrzKxnKYiPt1jEMkzjhM",
  "key32": "67ExrMNw7SRGuUWCbT6WiArUthvwSpMiSUD33gqwbsbGcNzrbmbtBYzWXBbfRsriVNBHcuktv2tHNojW7fyKa1ho",
  "key33": "zgJVtdtLvxk5Fg27M94cUsRWD2Z4e3ZLc1ZTro2o6D5BEiLBsnBaSTy5GqKFMZFY6yCWG2PQFTVXaL4wxh42BYr",
  "key34": "5ECMEwQmkZKzLABp7Vyy1BuQtqwRQup5qRsJmbohHr7YTh56iJACrQ1xjkUJUueg86QerGoRYuRFqeXX9E9DvaNP",
  "key35": "42h712vaHaPt91wCcA5AwdXzn57oyZbCq69jDKV1sZoBGzaK2Mnocq5Six6L7wHCkRrbAfGa4o8TzZPePKtV2L6c",
  "key36": "33RxPXxtTzPK68BsTo3fm5pCth9gsMHj18vgUPJTJD45wiPYoYKkoFzpuDRZ2QcP7m41wvmVb94R1VYLEfbByu27",
  "key37": "4yC9NPfAcF63VwRksK8cUgZd1KxRLzi1GjfihVaB4tvxREzgf3fx6XgkjoS9N6UPfU8tu2zsumGDffT2Swmuvae3",
  "key38": "55awKppcbJ8cTVeLPcJsqoFCxbmwwfiJWx6hvQrMHQBsPpikXMgf6mUhrxBcuivJTsEJoffPf33i2TAQMjVSQVkd",
  "key39": "39mHc8QvjRt5VFnGiBt6YdpBRhWH2v1VKNgumGSeqtMKb888r2gBb5mnfvzJ6B5CwSbBZrNUPQZbANMXpJzc3BCr",
  "key40": "4TwByw6z3kspNVPCZg2bUNTWWon3FchoEE1qyjaefRS7Sed63dUYmx7KD5vtWN19Cbiibg3bZGMa3y76hb8o8Tzm",
  "key41": "3kbJbbBu6VSMRF7hUNcVDKUNyqZ6drneXmAQwsWG2Fy35EQzsQLrjrD69mRGgtiNR68y9dNWmspicJzum9qzLUBg",
  "key42": "27NeWgMB64zNWVFJbaW4Ko67CNy6KMs16GvHYKj7TPgj6nYBYb4GgnkwxvTuSCKGwzMZCHfgPEZ6g9Xr4VTzXxYk",
  "key43": "5jUEFf165DW8zHMWC7MJwQVkzi7ZYevUm1beT8ry4fywXZiUffyiixNQDBvxJH7tBpeRbYq5bZ45N2LBpUTSm7s3",
  "key44": "fNzGdQvhdrQRNDZYeDtzatNfDAtrTjupRntYkVuQkpwGa2KEf4rdvYBHRhJN6wUH6WNRZ2bnL6brQMxdsKvcm1R",
  "key45": "2Q5aEjqYNJHf9fuKrXSm6Kax6mv54HYbXyyBM4K4KAd1tyAFGNf6ZFpJXkRw4DtwBLXgVMMd8hS5yeUYtpFG9udq",
  "key46": "62LKECHYEkRsfzCQuX6VhHEoGRjVPdkdAyppNgChuiHwFoNnMgbHMAB8bLXAGnZX1ibLTbu7G6GsSzpuMqPXBBo4",
  "key47": "4BLBHi2giJxcb2wu9pGPMemcNaH8oRupB4UvnMYPBFws5sCkt8BRRH4z2PBY6jNqzVsVARK76NYDU46MKRMLcs8H",
  "key48": "4y415UY2ExA7QA25KszMqecTKrCtRWPahuFiVHoJkdUrBo7rmTqiom835uddJ1Jgdn9ai3MijPCUjtRNd9DtK6cz",
  "key49": "37JojpTJiRgXnZfpu8E9jhLj97Nf7YZvMWMLVmAg47GHgz7ZM5sD7sBYKEB4Fmw3B9jhPx1NtCiBi3TBxp7iyBWN"
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
