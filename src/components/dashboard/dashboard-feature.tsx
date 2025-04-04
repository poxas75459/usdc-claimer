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
    "2mVQHbGEoKq6WP5ngQVp5y2C766s1uRud6CXsqoA5VQMadC8oz4nPrDvPNmatioSjL5qZZ3jwXiUCyFkNsBr163P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vg4dr9mzycEJ9A8otxjfb87A28ckKdP81in57sbReiCHcrfYZCV9dy3iC6hBEMs27jv6f3Hh7KiSQjeQKPr3AT7",
  "key1": "3fKuHgDfra2BsCZJxJdu8r96yB96BMEudQiWUMBPCnquGvcnDBjeyvkxUmvAovrZ5CiUGdSHKF97ZPJbzFBLe1Wr",
  "key2": "cCnUPpjQxMkAmkhW27m4rpu759ZPNDhkz4SctNeoCzuzG2hwE7tQhCh3XbnNL4CqT2Pubv9XR8yrkTZ4wtDBe8X",
  "key3": "3vGeCyUA4ki5Dr7KyhE7UJeZ4c32KTeqsiMoP2SQKmGxJ7B2rvkCKyGH5wZG7fhopbbgUX7kNzQWbeUcMoQqbNPc",
  "key4": "4KRrYoVmUkLjAHHfGTcbVJtvoTgWbgXqfBgozPZiRNd8SuaGDbXSbFLmVxWkyskvPFZdCwigNMNd9ntyEFDsPXaB",
  "key5": "3BEhK2RAbqXyMotcNdLd1Lfry17n2T1uxe4eCrpJLPeBg35KLhJS8u26rtAzMY1oYrN2tD4gbvQe44je4TM3NqFt",
  "key6": "4SSZfvs5uKbYYTu7QZ6nmbNULGN864tkwJdPmHzJ71QLzoTm7CWZzzQMzmBWmNfUNpgiaMELW8cFpLBU765S74SP",
  "key7": "5NCKkFsreFaSdhYPJ1v4xX5XdpfojXGRdK6s25W6DRsBQNGRNSEApNBzfFKGRiPsTK8YttjTJzo8GWMCkXNajirY",
  "key8": "4qgJAGjxUE1NMFogoFZvnXUvMmbMg55KhTjyca1JvwbAPkZ3Bfb87LHiywCU19XE39nRJ2fQybbtTB6a41BTV5SA",
  "key9": "HUBKbv5Fd5pD6HxkWyuLudv44dvo9Q1jDNrpvz6tufNa2cmBZPcrjRhHcpUTeAuAYhiGzcNDxEBemdLZt34oTMk",
  "key10": "4jmsxZjAYjhhHKJLcyL359qXHP2erq6pg2pSH3Hy6oTFNUjEwtoFuzGEaBv3ADEF49yXSZe9PvcMzj8pSiYnuBn2",
  "key11": "4rLDaYDUpcuRhErprrw2Gr4rYLVsbmyoXKcQx9rFseeQCjxP9pZHkTMejJTUpWGmPEgGj5Kewx69dxwgCMfLKo8p",
  "key12": "4UddBQAWarE56qgq7VghYuV7NYqwgRBZAKGmzbmALb1VUfpCdCrv9o3TRkaPhSfwk442aezRwUeq3cSHFMuN7jDR",
  "key13": "5LiKLZw3F6NjREUXh24stR3kECTtn9gpnuTPS1ddZTLXHeLHKoiputNXYVhFpmEcdxQdpn1cBpTKCJ1zARM6oZe3",
  "key14": "5q4qdF2uPmGk5sQvZkrpwksyTPCbewoAzxPXcEoT3cGDRFYP2TK4bwnC62UpcYqmHbnkjSsF8tLXo57JskmMrCSV",
  "key15": "4WifSEbBqGKessbRQ1ngBC4juwRHg78uCakXAQSgiUzH2mnLANRiA4dyQT4arYHF2iaXpA1arHxmmhHiecXNSLMC",
  "key16": "fiLUYgzR19D35Z4nB9Y1gVH138PHoCGYWZhM9fbcKH2MHd6ndKC9AYTDQ4s1dsU4osdXLHxB85mBuZFRTVTAxx5",
  "key17": "4GoSej4cdPvETWcNnvFHghzs8ZCKbhEfN8LX9UrTwLgy43sspH871pxftxdVVPckC98Qu63hUfMCgQCCD4tDVVXE",
  "key18": "5qiHe28zZsotyBnsy67kt1kbaaufMTUoohUkqoDAD9TxZinFGX3m9sWp39fQmW6ZGrYJKyFvUYqSrMo8u1oCKskP",
  "key19": "vxRNuE53oL3RPmJh92UKr6hUTNLLXeQFAmVve7kLH1uSATR1kr5HzbWHQaUK185Z2bsyXYqrT8uzCaoqEuosb12",
  "key20": "5wBAms7y4SLPdFpKBCKqYK4C1YsC13N33nackNqrdu3SwB5C5CDumtcZFwa583N7EDWKnGWKPcYtoZyDkbEtdYZr",
  "key21": "3GDwQxJ6gqoay8tR93wWLznNAYtE5J9Mfju5vz8AL42i3F7YZ1ghEUFNwRZyf9nyYv1FN5qAdKkQ4C5J2QVfT7F2",
  "key22": "3LX5bhn4ni5CF9FMNmX91Fj5poU3HaAac2SHc7Ww4fd4B12sREc7w8CDL4zx7LBdeM2HwDL1AQRLVJMsUr24G2Vh",
  "key23": "5qYvEjrGzBnstPJnqvgUUDyyMH1Sw99ayuZpd5hUtBa4ZVkheZdEcfVvXVCjCtUknWJNyZUtrhvdgd651QBb1YVG",
  "key24": "ue5LuycronL1HvaCsKcZLJmW4j9vLdW73ghZF5wzNZ58NS8zcANcRNXxqE8LyAfCgzCPR3qMh2itNhNLi6XvSry",
  "key25": "4ZSravp4xkuW85KQhLzPxMqVxLsMSkutiPKckorKikiTiLhd1yEx89499c6vZKCNpHpRQVYJuJFkjjfaV3Q5DRM1",
  "key26": "52ysCQZeeK44c1QBMVvUGTzCfpVuN8M7W2YaEqN8eefx2T4rZi2ZGTHsN3JyC8VmAqyXBJc4FgjbWcqzxV28HMLE",
  "key27": "2mzegrHwcWGA9xNPxL1aos4YyJ5i2NNyTb2ydF4NHwkKQGRMc4WeNd6GwXnaWCDZMPQvKYQkgj57hEPzcmuzQ3YA",
  "key28": "4meGfVNzxFLEKtXTUwJK4kfUwSCA8XrGhZEpCA3yKiUVgR5g9bawLKJJey4NKFbgEeJpbUhUxMS24fdsamy3XTVN",
  "key29": "4ADX4iNoPfGVB8PNy1MgiycEtp3BtQEwgWLyvgeWTtwMNEeedqFaYvd2qvyZHnYX28AeQuk9KuRZ1jr7j5feHVA4",
  "key30": "3Rrzp1B7gJ4cptMthPFhhB7ZN5B1tWhotpE7kA1PLNeJXB6wbbfLVrGDM1JGuDgnnn6SzuBgskfvWw4ZPeMmvBt8",
  "key31": "3yG2rTSnm2WNmcjq4JaoKuFhBkAY6qMd5jZy4WL25Mrtn3GS2eH2mPbVhk7cHGnfGGvnaputUMtzYKL4iiUGQcHn",
  "key32": "4LeRC9iRvB5Lju2pETLEfLjF7bNARRsAyiK7GCkbfViw6JGJ3yE7un9teUctPM11pbC32qgpxUUuarFaCegEJUxd",
  "key33": "3snopb2dMA3BY9acv49QRv4rMTKxuK92yYvGN1QZ6R3P1tv9VDvjFHkPoKwMrgDSGATZAT3Rmgnpb4bv4d5RX5Ks",
  "key34": "5Z5vy1qusGWQRjvMFuJ21zkHGsDkvckTJY6gMgcfDAmCkV1D9jg87Ybcooc21ZoB8Jbnm7MMhGQUsVazhGUyQsNu",
  "key35": "5yjqToxVmnXi1ZZgbsMAcWyeG8YPCERb5CBCveAkfpUbdRKBhHX1jULQ9zS8hnXrS1KYzmXRpgckvrBWPJg4KE7n",
  "key36": "JzoYHKNvHGYRMvwX1f7cctdViz53Cg1HfQSUSpNBsEcZ21sYs2cV6Cjn8kumaKM2ohsPdxGQGPdBsVzEBDy565d",
  "key37": "64gZdEQxJ49t3FvGrX8wE92yQgoWajp62rVS3ENwkcWHbBfHrHQnz5rH1mE37ri9owx4iGeqiGnJMkuWbdFwNzfg",
  "key38": "tDYmzUF7Xkymp5RK5JN8gbXzr8nkeKdmwocaZfs4EpDJjnkeYYXJ6BQP1YHcgwCs1XPYBGxpEHsKXp73Mv7F9pq",
  "key39": "4hNZcvp9jVZqDXLtkUNeTukSSfnkLztdDUF84MvFEEiEDJB1tpEX3WWJpN68ZMa1iM1843XUkwuDDcGG1TDLkxca",
  "key40": "5L6NaRieVZJAN3qc3SAJZ21hGPs5bZED3nZZoFa3XQ2ZQ1L7j23Cd2LPnayCVAxyQfb8EhX9aoqWgPbJm5re4PWS",
  "key41": "2ohiiuQkX2xqVTaGBkkVmQ8GTNB6SXaJHHVoWw5W52r5Cdgs3Sfp8MVuPY3xPSjJTi19zwN54bg9X1AAML2TGCkY",
  "key42": "5H8Uvskiu7pjjw1dKARYNQqocogTFkcp7Rg52EruNyaYmDSWgkyjykq3zMrTFiwMizii3fWCjWVrqAREtzpxPkA1",
  "key43": "4iEtCLsWa2LNzTNXQqv88wq96b9z4Lroc5P4G1i2B29NUjaohyzyMARwr6kY9iRmcmRB4EXFAUqYzxPV8NDER7yg",
  "key44": "LRs796JYZH3GYbcuQLnJ3jWwUwfLJ1bLChLzciK2htzobACCurGmGu2dQhY3AYu38u1XHUKCjcTLQyJzt5HTdcE",
  "key45": "3bLWYENVraTCKjBwXhwovNG8fzfnGbLvBNaqbYXm6T4qRVMSo8z5jn32XhhJ6hJo9JjAE5kLhBLyYizRkpSb8qsB"
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
