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
    "5fx8oQniWbGs2sYmukTFg63reahCmA6VLJJD6sPU1z7N1SB5b5ng6JQGZsvoUTcrEuroeqpYcpmnph841xVYPj4t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Mn3m1m9GwCYXDUqj34B3j9ZsR15iyGcFpffYFXNMr7HXm9UL8iCA5JwEBdb3R9c5LfzLrmRG1oXYvriTBzcboVZ",
  "key1": "2Kws12Z24yDc7Vi9MP32xCMepjfiad3C2bkxoo9UAd85dyBDidWSe1GR2R5528fgRDppN4GLUB83Twfg4q63ZaZR",
  "key2": "3NzWXqXfd5nYxKfux5a15owiHJNQhF72SvYLhUYSkBgQPJ773o1FAj9ykKrdUssEDea6yw82tgxcMr5jTgpxAEYC",
  "key3": "3aAaiqyKSEfpuHtbvkxjLocoxdVePpMuDxGWhtbeiz2m9RyhAdRF6YrEqXP9LNFXaCWfhUdGqTe1mAsReMzXV955",
  "key4": "5DL3PTvAq5PZWn7gHD7DrxvBPsBj4QkBUJapfJfMgTJJgmk3btSVMHKH2QmswZLVE6aBP7TLT46hTBY8bb3K4s4w",
  "key5": "5R7yNkzXjxCSXoHwtjHddQ5Yf5uciytHm6MR8TPBL9jrCgjuXneT3vkcbYBYEC6F1jLJM5oyBbFGYRH85z1PGsNF",
  "key6": "KEBWJAAcqmS5P3UVxncUUZjS8iEoDNKnGCuctt2Lmz4PVjRswqPA7oBYsQZ7NLEDwDyYRos2zgW9KzwVhKURuVp",
  "key7": "CMiXf9MPtV9MnqtaALAWd9mwGPugEr9htXnt4tLAv86qcqMRF38ZzSAeRJUbpQ314qZioVURP4SzD7YqH9ADsae",
  "key8": "Nasand3qKonDy14E97RmhNkLmahEda15hnRgJpDvjpt6TTMsj9xpkAjkCdcpPrXqh8Hvoy2AZc9JtA3fLMXfWiz",
  "key9": "51o2uQYYk8siAqxtHW5eoR61EAUxotMfmE2MVFQyMTN9qv3W6ppNeq37G96pn6yzeL7Bf1hoMqWiegWPCT6pbR5M",
  "key10": "3aKV1gZbBowZU7Pbp1WcvyGByBtBbYjJtVM61X3yq64LCMtFyFxG2ENAvDqiMQNmYzE3GFd9FTuNgeNG9BB12fNk",
  "key11": "4LHRf58f5DYbosrZikA93Ddv34Cg8guRS9LdXxyX3JX5nVL7pg4Wc6yxniX7LrrENRftN9dig52SeiG6KCyfhnxB",
  "key12": "hpCTGQ5AAS7APTygvgRyiWoDz4fb3AYpjYNvoho4hB9Gb5jETLM3RGPpaCSJAk94LgF1u3EXdtW88VPqGtP39jP",
  "key13": "5qLEAUH6hT1btfceyCLsrKGzPeShmxod4C1WeJGBSGaXYe1PFsPoG8btpF6xqM1LzEfUsCuUmnxrGsdXHYkVDFHn",
  "key14": "DvHiw4o8G3UhFN1J5jAXpGzMwqH24Mx9bXPXCXr6NvLYmxqhaz6y5rwdPSB2vsms6bMBMGcMtNGWSJ4tri9XpFM",
  "key15": "5Z8RrcwRoyE2rLYEM7wZjS5DUGdvTN2quBi6AxEih1Kf6LbsTymttja28DeLS5Sp4KajfWjzJQRcdN6dtNQq7XoP",
  "key16": "2pjje4cY6BrH5Z4m2oPDnFzBAhyUwgo9M51NiCSrEyRkFjshZfvUesp2Mhi28uLmA96jN1XU2pJEazvvvKiJiUQC",
  "key17": "Y9qR7HqkmvhnK3KivCCedb7PsE9zUbKkvruxVCrVZXckNRV7v1wTnfqkNFuumLtMmSKxvWY9HZJmv8aKzkZHoJQ",
  "key18": "5HjBi1vywrvZqfc7qzG3oiGcvyYG3ECdTkGvfiuL7sUv5Dwz68AB7psWQhaRwxS5BS4n4TjaTwpTCqZ1mMfzq4hu",
  "key19": "mx92cqNRSeLXgpmGkRajeSgJUXzZgjRJCa9UpCx6BSSRaFPLcn9GQL7tZBzQF8GDpfsTaHRuHaDMKoJR3GyskB9",
  "key20": "4bF3a2nBaVVao7ALpkbDKBaD1cHsrfx3wysH5QrCYUMBgKend191E5pfxfxPQd87RWnUaShyzWKpVkRRaHJ4JoNP",
  "key21": "3f4R8WhdddWDvviEi93LKb9VQpJ6tD2MLBEQhbjDEfZPkJKw6GYB5qGgBDsSA5AKWpgzYWCPgi4nGtxWo2HkZpdD",
  "key22": "2fwpC92ob53kVKEvVDWKs55qQCv8uwZCbTEtXA5Jn7RgF1QageHTV6LgU77X61EmPk4fkDiYFvJZv8GJgu7EeVF8",
  "key23": "5JU1YbwiKoV8BJaJNk4CTWdYHn8WdbrfrbmvvaeWCGNNRaWNv9rQC6Q3RgY7pGCcFApyMY5Ehovk4Hnm7emVEXip",
  "key24": "4aUbjzvDX3JsBhrK97JC8u1RFWkWz4kcvkMjoX5tXHdtDYwnfZEEocyq9tyaLw8Ja1ZE6oZRcinBXUjd77yF6Xs5",
  "key25": "67UWFJaF84bJBHT1MVkhJpUyCS5qF9xNfptMsHfLWi6he9CN2KohVc4MioPQ178gUQJG8GwWK8YgtNPCxvtQqwyU",
  "key26": "3RQq4uFZYM7paB5UrqJjfXPKS6YfuNy9r49AU1ogkkAJ87Z4zDXTVfdoeQ8XKZ22GHTurjb6Mee29HjZfwWARmZf",
  "key27": "3a8H9ckREaDbjbdBHuQPg68FHw98a9BJ2XuPQ7PA2xY2nQK9ZWek3SgHwtrt6Vge2YbNTgBCmWCuwtTyVJqdqixa",
  "key28": "gjxkJHXPdEDgYr7ghcFAzUSxrq9q3NSN78FoNFpZeFESXQSiocWwS9GFjXWGygEWwaX6s8eLM3TJ1nsVX5buDH7",
  "key29": "33pn3ncyGDG4hWuc1XFXq5fK5dT22wPTF6TajeBfriTaQZ749RAnzgyzCXFCnJ3NK3NmcVezJndP4rcdVZVNUo5u",
  "key30": "3RsbABVtUCQViGdoHmKfzbtot2W4xzCJvPjzcdYccLtW7NWVY3t4L3znKWSYgT1NWvBxGfNnc3TPm7nj44j5YSf3"
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
