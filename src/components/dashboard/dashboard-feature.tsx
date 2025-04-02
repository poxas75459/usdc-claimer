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
    "3LmWmsTZtpg3outexg52H7cjsPcKG2ZZjyF6dftMHqhR8rEigWkcbKxJoKSkgmujNbkMGdpmsm2YiB2TTNeu4KTo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sqHGbeSdmzS6cWNMuRXWjRnUzk4mwgQ2g2odiuaEUU3HfyG4cdGk6gJFLSqpZyVC9xHUYhnC2d1jXkUUKwFSCmJ",
  "key1": "5LiLRG1wz5hcLoM5eRvprD67Wjmcb1apdbuoYUATpQfhWeJfcra7RUQvNQKAJfZHKzhSG5Ajib5VrM6RZCfZ4K8K",
  "key2": "2arFEr4tFgoBe43Y4vUYouK6MuqB4QbFMAwEz1Rr1HibXbi7rfkL5WqTUN39b7Co55N5aGTNfbmB2LoaFruH5nyy",
  "key3": "4BotgcwbSBZAjFpdZydYNyd76JkaySPMxraWHGTG8WghBMZksjvrrdgUHtvxmcqHj2e5EAygUE3vmN4GPHXpavXp",
  "key4": "2LzG8wZor6te5wdXLxNDM5zrPd7ECDAKzDssVYtHPzA9HGDzae6VoFzEZXyAeZqMBTKTN984uE23QSaP6KZgqSM4",
  "key5": "4bWCdT5e3PRPua9VXEdQoXzZ7jGMwTRtQaPdMGqVbAgqAosKxt19yLUsSMszzpz8dpXB1Fuzoio8APzUCQi4HXuV",
  "key6": "ptgvXBb8WTfwPsmDUco3oeFHqMFhk5HR3VAoSYjHvTUc82Co42fkUj7Nd8CgmuwZhXA76ME5aFBnrXNgrFwVNiV",
  "key7": "hkGsTxasXFHWjjVGe4AyYTbRdA7PQef7szq5jadpnsEastHs8AtwmKUZ7xpPcEy1G7V8ziZeNp5ivZUfH1B24vT",
  "key8": "5RZp7Zy45rVFXNFRULrmGozq5Yc7vx4S5DJmXyFzBmZ1bHoWDMb7HuBYWGLsppnSTYxTkpNDbHMuYT3o1ATZHVNm",
  "key9": "5rRKfbGemiLeGW45fyA4AHTrWsaq9ri4BQQjPk9xaQkWqWJkcCsRVrgBDtepSvL5kw3Eoh8UjWgtnjpP7qgqTn4a",
  "key10": "3MvPddJJUKYo8MdWL3J33VeNuqhQU83WzkVWUNa1DdsXphMHr3hm42mnQBowE7qUhqMF9wFbfCiffLmJ5pAhtYHu",
  "key11": "p4cwhGGDwdXLp5BeekgFU1JrzMo4SU8ds3VAqac17jQy6s9LXpsoxw5Sai7poXyjQK9rk5eiVxqqctAwCCMfZz4",
  "key12": "5nhm5MMEmX688fHt35Kn1HKtCf7hWNNGsVH42EWJwK7ZLtbUioFdmTsUhE86uRVVs3z1z4fzeWjiAGSF3wtoaj95",
  "key13": "GGodX2stcKJA7y15uf6g2cSNoRwTauZt2d5iBzMGdzPjxV28c8zGx5cFtycHV8J1FWir7eofyurfNwChY3qfL9A",
  "key14": "2RN9uuTV8JRWZZKJrQPqjbHVYPrDTAiJ95xdNgbKYQsADtJFVeWaEsAS5XEv8fajkzajzh8FjUiKdPgqjVDNBHad",
  "key15": "4b7QH6E457bKg5CPCUiM8i8VuaDWYR648RA7QjRfqZMRfrCidQ8udLJ7pNdzXAFsqXrPiEkjhHv7WwQWJiftvga8",
  "key16": "2aNxW9B7SCRGroE4DkZWtzwQWYkL8AW8btj3DCapWizpS7PyykY6xoVPz17UV8jLc7Sx9VWmunBtaMKU6XBPstbT",
  "key17": "2p4AJKRsCAhmT64UMsxYQBPEBs6oimwvM11pFTNhHxxZWdoqGXZR9PzD1SjhiuHzumeWgAsDLJzCDWUFoEjjy5dm",
  "key18": "362prNFHucx4jACTQGzeX37XRs4Yu9X8nCpbYGVf6RsgCWnATemhPMKj5psrYzQB17hbvNY4mzhitbAiqhac6K7R",
  "key19": "4Y38GHQAz9EvdQgXRhuEn3MrQVQktFC4YSpZqtTrobzaPDaNdENijhRwg56SUaBwfBhPHv67hg9Kq29MTL6a6onw",
  "key20": "4ivPN5Acssw7Yewo6JJxcKBhZfF78hoQ3vfH5cGKNA8fyeJS9P9mkivzA5YVyYX2wjqMBQ4PFjSXtTD59ETiN62w",
  "key21": "34HNvM88NXnu2ekCxVVTZqZajvc2k2aWnVQWfvKePRUK4EaCgq6rpqgKsTahW5LeSxfc8rRX8H84iF9EuViLMv8A",
  "key22": "5dXnxjs6fAtExZV1SQLX3EPZw5SzDMf2WYCv7c7jd1FsMeJQn71jAreyKwpvf7ZEP4NXoDrEmy69xFguFMboK5T6",
  "key23": "2qQxJNhDTNxEALDjEmVxwEfPGW9XKS83xojdNZgetUmeSNB7TkUZuUs8TGKaXRjwbdMZZKs9L27kF7ypSyyJqHDx",
  "key24": "2kKcVjBFCdaQUxxi8Jex5jEpHgjsjJALUohZnRu6XVtEJPfRz2bVMgmWYpurQ2gyRDKhrowTNS8U564551g8QiEh",
  "key25": "2H2WKqytZyvM2GCjAiDzhKomt7azC8U4Y5gNAHUuLQdy3h8jyh2kUuNwuYwy3pzmBKBC2XNhbnCt5FmiXRFbGKoL",
  "key26": "33pRRPjVVbgP4gAZogoZWza1HTaA9RntEDPsXEwsG9xCD1sudtbFgurqfJg9RKtGaARskQJPqpFGYJ5yEikNxUHh",
  "key27": "57rABbPZwsKhHcy8tDv6TFTTq547vuyionJNH8Yhj7CK8o1Ma3uiMevJbh1CxsyYG8kVZSbvzBbQfDxLTp7DzVLi",
  "key28": "4EDtjK9onsP1KMgCQzQEXyi71kmYivQHpBNZ6F2VUx3vWfmqzjQqfQoSufJhLtGVdizDxESxfZGhiZ6Q2JWoen5q",
  "key29": "3cRkQKGrW1g8AZNS6ofmjqGTjSqb9TthkftbEeVgiooLwhKyQa7v1vzehF3TkPnFHqN24othzjjtikrtYa9oi1sX",
  "key30": "Y7mm1p7imroZSrJic8Vm3WyeWUuvfXanfmy62PKZ52trrenPFFRn8fK7JKByfVphnNpYgcj1N7EzG4rbKd1MEGJ",
  "key31": "25HJJdXE6qMEX9zVeVBkfhvusKJzztKm616956yrQssBSFgLAptDaZaj8sLsrEjNuuEr5ERRNDo9VCcTuctATvPv",
  "key32": "45n3qQfLZa3GAcrutJzxVHaxk5rdgFvFMfnMXVrw9NVkxBvnZuUqGhYmoNYjWP5o7tFTLh7EVBH9g4UzPCWZjLLU",
  "key33": "2vG2BHyStQfhvTsB62agmK1hf9cqzHHXv3opGas3RqGH1oDfXpZVv3X93w7z5apXmyCRk7jdkrxoELXPVD7gjfDu",
  "key34": "1AiDHem1KZhwe5ksnKaMKfAzs4dj8dJ8zuVhV9aPYoZMWCMRgRxh9uuG9z6dh9ra3v7LFz2VbQvhTeeCAxCmjm8",
  "key35": "3cHP2Hy8QtctDuZThNeRqMvoeFwEjHKeNVpWKvax7CimNbvKhkooy3iAm3qK5c5aR8QVCcwSGHefUC4RXVaSbHMA",
  "key36": "9LjSyzBLNJLg55EDC5vjnZoFmggPA9kUcxJDuDknQi1Rz1hnkM8rTqFVvSM6b6pvtjJs55rT4J2vTivs3H49Cfs",
  "key37": "2MpBQsTnpLXFmXTjDGQcbTpg1Sx2G8H94KbKfnevbe5w14iK5WvKMWoQPdQ7m3CBiujQ8ajhvcKDKDCshcgTE3EP"
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
