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
    "23tWyvDfbUkrKN6MPLc3sDrnqKJA75LYGwnMqbsFQ1QLUAe7vn5ohkFmmxBXAGNzjkQS6McFsSDPAVJosoTaA37q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w9uu5u2yfjTybhwTL235sozgQfMKNRFx7wr4P9mV1kEJpHbeik1trqBVwtGftBHNzZMwX2MfdPJu4QWPdm3Afnc",
  "key1": "5xHDWa73ujm4DRkki9ucKo5xdeik9qDKEWrTvxCNFi3ZggYVSYcaL1uZ8eAjQuy6wnTKZrFdcuHm5ihPSG6wBk7d",
  "key2": "2KyCoDeV3tZQ6pzuNWGg5fyAsNMv4AXunZntRDZKG1wdyAAYhvuyn9YiecZpxyQ84ESW45bFqdYzNpUb5NELma4W",
  "key3": "35NQe63ePAixAbSu5tJ7wjUN9pZgnWSmmQkqeYAphjPDA4ZWFZkiYg34GC5caNygycv3E1LfTvUYeMEuVFz9Y32e",
  "key4": "5T86F2BAM6E1aZkAzNG1Zf2r5Pf1qpDAWho3Gnarsi47o8JDmFVNjY3gmPXhCgs76X7ZKQh8r5fdSZ4FHMMyN6Nh",
  "key5": "4jX4pT7wjCP4VPwrdo89ANBxAgrcQi6PxwqX68rYZ936psjQBsqQef63he25c5wDGSjtPVseUHpJCF9NRdYE67F8",
  "key6": "5yVcB2ASseFHzD5x6Pr34wLTBFD8r9d6YhzbZEHx1aQpvPP83dhkgQNC4ueYzK5NnsjkoNvPZpx41peDov8rQg89",
  "key7": "3qS25maoMSV35TYtkCx42SMx4HGdUfRGggfGUec1vsHQik6R4QpubEybC1YcXbb9qXKUrAFonbhs5HNPD3RhGUCv",
  "key8": "4sUH7LqQxnHmaYgQ7wXNpre8rom8WcrumgK3KQSnkeE8HtArkS5ay5XU7uTrDy7iD5tedeEMrVmQ39m484DEZhv6",
  "key9": "4jyX4J5g4VNwpngkxRZFGUMhEKntZc1CkViDkeYmVLQutaP1NhcpJXtNRW4Nx5VPECxcRAoJpPTPuKDYvHH1rsik",
  "key10": "3jPLVDRWLmcjXXArRQNxzKiRxeXkhKZjBYF9WbkX1BLBZQsF44LzzJp9k7pueRUR4Dn44F2UxrnrvDoTujZCBRjM",
  "key11": "5K77gY61h9bhUXUFTLwvNRuRDAJCBD5EwcpGJTzmY4YWCvrjwoKJ7rVeWvvSdK7md57hd6hX5GMFHcewMdfUKxrS",
  "key12": "5CkN6mK1VSiRZnayrUcF76WRBWPjtcSHq2KkNdmf5AeMwvoNgFURozumRKubvBJmGZkFxtTJEDBmx9cywCBR9Zx5",
  "key13": "ggk7KwFh7Axs6nNMKG1P1tpt3C2beb8wP53zv78KFowtCo3yF3k7hVW1rDXmKyLkN6k35KfUrKBCbDNq6H5VbYC",
  "key14": "4XHzXpTWidbtjQq4dHpNZ5TmQWeGak5fVxEsF7Xbqq8J6UaeURS5TjRp7sP34MARs299UZsjERKEQHZYb3RqmBP7",
  "key15": "4gXMbEKf7QJtUf6fq4GW3wuwXKKKpNgX4EPjc2DAeM7QzXWASw3ghEfdeRX13RJm32fnYk4cQVDocGbB7ukyHcUj",
  "key16": "4tG6dkZ3oL4Javi1rBdjq1qu9SKruhVfHhtGkZYwWQdSmK6BxfBfghfoYGMvscxS5M8TbBqQ1KK82yXYYAUAbi9D",
  "key17": "4fXQ7DNUtaDtdb6AfhNfaYo37TYzYqdgPPmyTPSyVCxrJH9DDm8QHYBW2ktBxZTD2hXSfLXpVLDDCpTP23ASzZnK",
  "key18": "5R51i4auxqLptmE22x39fD88yMPKLQde2Fkr1w3bxE7DNpBAjxrRr3ivEXFPaxX9afs1sWQkuMhC5uDsgzVGDN6v",
  "key19": "Pcch3HTamChJeTFHqwBnDoYKmdPmxMPHUQ28p2Rm58JxTFya53dQv2JfdxpFRweWWwRaPJigERSq9vZLgFM9eGi",
  "key20": "5unekx7dmcJpyJFpFg6XxQSpEovgCKBavQ5Jr5eFYgSrKS4HyYeygZ87z9Y76d5G2muTXKDnLASwJ3mC28EMuApY",
  "key21": "2NFh5k5as1Je12biYzqqhEcYJgqZU8pRtoQFCfHuziTUj7skkeeQSxsJYwzTUWTERT8GWotPrkye1toygDn62G4L",
  "key22": "WKjT9gTsScRA2Sr8GyjQxqHJRATB983SJSmJr2D5cGLdgPLg5CxBb6NHZLqRnhiory7kdPXMFJETfnSrZqiNuGu",
  "key23": "4KXoXg4b139oi8mm84W1Bv5tcMJfFoVW98UWijSq2EoqYEp1bnNWQYEmy2mpeSLAbk95iipoPcWc6CLLPTEeGQ59",
  "key24": "5wHFZWLxrrsF9wK3U3VCdTjSNSEMcM8iDSi9K3uHRz7WhCWXGY7ebqJxJBFFSsc6x8Rqp2haSf4tUDi9AiESZVui",
  "key25": "5996jP2USg9fELfnvfsi71pgxhpDwXCeZXnX1M4YZsvmUyjD9tJaZN5tNDNcbPf6n7zeYZsj48mcqPsZkiyrDMJz",
  "key26": "5sLiNCT7gddqzpJtJVQ11hzMnZLuR2pryzaAHtGw8ghHcD9u5TWhyq2iRyUgcXx8xoGB71sa7k2GYCX9Sn7zdu81",
  "key27": "dGuaEBxHo4qXPabqz1Aesb2BjQHPz8yAnP4ziN4n6LejD6Qh2fMk3Goctha6tXSEy3mx7D5CNAf8UkVnupkqKxu",
  "key28": "N6CGtaJsXx5E3Pi9gPiy2oUvEMue6r3x9PQPESvE7boGtT39CiFRCjLp1PRB3jynewV5zBA5ZJ8m4prQ8n9V4yC",
  "key29": "5QgCvrhT6JKyVf3R5ibpYkDrHpNPMhu8o7CL9nnaQsZe5LBtWzv7pN4rTFhLJJUijyyEywv1fstmrkmXk3JJgduk",
  "key30": "23RTtTSQuFYa9rcuY8WfNoTKcmwQshV8ocxFLrjemjX5ray89G4e9vsF2DSF5GqhJ2uEeEfZ7cw3fTqhs3rHKWkS",
  "key31": "3tyereT4bBjStyhx4NHCkEhP1E6rv4PjJq7HyBMXLoGP7Pjb4DPdMZ3V87LEkX33exk1YvaRB1BW2finKF8Fz12E",
  "key32": "2wYUNABkeVqqNQKcvZ2GxwX4jycZnbEUujE43eMkEUc8Kr6gBfuXWdeEXA6xLANDSjEbEvRw9PDxga8ZuZnxgz8x",
  "key33": "p5Wy4P1HjoMC6Dncc5d1sWDhKTugTfaKAfmE9dFABZM3pNPeTsArtFjW7F5531319rZXdmYLQAbnvzPVVAj1FzM",
  "key34": "2ZzyC667ctsT7mobU8Co2WthNzEKqHok2Hqcg3upMNhYYSVfoWh6CZUSHkBLo52tryXZqpDLkZZRaERRZWaA6TEp",
  "key35": "MYjEZTC7RsH7VqCM5nbQWuM6cr5RnQUTwWdj29vAXZ2fYETNbqvba78MD9UKZ2Z9HnUT2SuRX4PYwhCLQVNvPdS",
  "key36": "3zcdmWPBzMHCUShBeKYWrJGAapJr4NHyd3uRDaFep3Ad7XA6RDWR2N4YSuxFogtaPqMad5LLQqozLYmNSCGtQ9pf",
  "key37": "5StRNnSq9qmKQVLr9NLCr1W3pQ8B78qubnj2SRXcLYkVWSnEoVLoWYUK5cXVhduUUv7Pi6WX3qBaoK1TyU89FrXF",
  "key38": "4B5m9728BohFAj5EKtcMWGZJzTaxULXpzhD51CUwa638j7csbGmeDHETh7XE3zhqxWd6EVW1rMeiWdzbuKvrXHKt",
  "key39": "3XFfbLWzMwhjG6oLihBzMYkKQKDSR9QLbFMKJaSYgnmnixnMrBkeQpPzK8ctRYpFGpdPu6kBNcN8pPbUzeFGh7Bs",
  "key40": "4QzqNTQZtJ5stLiyzkrZs24RjTerfjWvqx5enD34GnAphGhGGNE5NVBSmeyaLqpG2387vz8EeWKnPbCfZ8ztaTn7",
  "key41": "5xV6W3ch5UwteyhpHewsJz4sLsgh1Lsc5yuDTMcMwvRvqeYb3NVbB9fWURJpLj7BocPm3u1B4q4Sp1ZZPQbaSP2b",
  "key42": "4UHRwa9tincsmUK51VtpHgKbJrbJ2SgyM389PtES3tRKhRyZbfpc5GzhTunRPCvMq84GnZMnRNRowAMStBEmEDnG",
  "key43": "3yQPBTh1MtVZPk3kSY6iyvMYGmf963JNhZogGnrNxRjWUnaaoETNwA3tP5nxGe7bDX4ktgayAo6zfA7EbH9NAJ2Q",
  "key44": "mNhM7eogsNwGNE94PWED4vfQNip9n34y25f3fpSP1hpjBminyHCw7R4zLavsxzH9ucBkLYKZxVSCM5fx2utLYQh",
  "key45": "4KzxDXrFAQoNZ9tzXaHQfjcWGnex4txVTLUE87MpB1w77hwXuko5XiyR6NBDfvH9QCKFXQVWZgvZnRpFxsybBwyk",
  "key46": "3D7GJRV5P6wkX256LEqXkDpgY8ZqHy11xipgoVdVLW4orb11EFPM35PphUcunV5ztH8d5VhUJipDWj3vMy5SwJZF"
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
