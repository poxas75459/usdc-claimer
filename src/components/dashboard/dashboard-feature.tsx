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
    "TR6e5z8MUYF3G4zGqoFiTTXCp8k8AzgXYud9dBXSEyskMVEbZBXP4XKAPMVpB1UCSaY2tmmhsEu8RVFeMNeqVac"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xoc1TqxZncSX1MzzoZfj4qHx5h4ZmM1Cx1vNUCZUFeiYEAMYK6riQhLKEuKJmXYA9DnAGap3mJ16jphD2NfqQZy",
  "key1": "2jotkZTWvxTG3prbZmeGhpuzBCsB6kyhAYbtjPZd5bCm8u8Hma8TZacjXYhkL3YmgJj2EnQ2GZdq7tpdaCuvgBKC",
  "key2": "3mb5dAF6732ZuP3UtcYKT96oaFuFTGShEzfzug9Y4tYDt6qYbW2MDUDrFLPQtx3S49vWetNr7ofMGrokgJAJv5Fi",
  "key3": "338TY4uaw4hTJ4a2a5PUdhhSGf848eUipqKKwiip9rLMafDht2qKi24WW2DwTMY2bEpnroKYKjcTHES9BT7iN96c",
  "key4": "2Vf9uoDM4n3cEYPbx5MzQnWAu4LEqw1kJvH8A6ojCczaZiXuHkYinzvdH59Xhs5sRRB5i3iGHetHb4zrYYY2bjR6",
  "key5": "5Eyd5GE7tUoqD8a7Eg6424phfsDyJvFxpn7SZn49yuBf7KCnrEi4Jp8RrePV2B3GPYaEYb7zJWUkdoHrhgj76G3n",
  "key6": "63t25DTTNVP5jHZbavkKXy2BBEbc958Gs83ZjywidNsXwUZCZ8qTSkcfkcToMG3cn5cfpGixH9NyRTapj7m8xq5g",
  "key7": "5TrgMmumJhNHG6V2eUWvZ9SxqWtezAWpVGuQmxTxDpAr93xDuxm8wjQ6hBoL6MFro81UdyY1wCgzr7RBrM1i8haG",
  "key8": "kizqM9UD8WTo2UAcKUR1mMxomDhSQx2uXbJ2gaGuCY82YGwqAqS7HbvW6mSmDa2PU34TUiV7BHgdHm4guZEYPAQ",
  "key9": "2BuR7SbJ5JFNQ1ErNySxDJnskymdpppRGU45CLNroD4tuuGrHurhNdzD15F6WidNjMdbVDpRHsAVkdwvSzfm3uC3",
  "key10": "4b6cKCN4LQQ4qQznr4rpWBhQwmpSyZxkuABZ8Sn2UgyP7pEWcZ9PH63PLNpAbSgFDhbx6N4wepUZhbHTY5ZGktxK",
  "key11": "efxD628VJGhiegKSqx1CgSqcEHG3S7QYgP9y4gs8MPn9LzSGHVwZHLeN9itzK93TsUB2kVq7LwMGwBE9yRUegu8",
  "key12": "2nbTQt9g27jT1yhXWtTZJw44pxfXT2NJKgWzwQ4onheqiqqR2H5cWXiGGCFabCL3rbAaqWNULG3HnK9GgK8gbXTK",
  "key13": "4vi3eMFGA6Jn5xrdpXw5aEUeuFcBkYKSzFmkLmMnHDuWBT7gbdEfr2re2ZjGRs5EGJd7tPR1RzQyCGFx3SHt4fNd",
  "key14": "kMzWJdUHnSQePmp6GsDzNyrLqx4iygpnGDd7AaeMeByZjRdU29bx1CNAuPpKXvyjz93kBzD96qgKwk5mY4UDFSh",
  "key15": "2xES9g1Z15KDLgLMGAR1rb3tEk3ZbysNDZC6bsAQ19pZkeAkDTLsZ84TMcryiqDwmK2KUZdJwmizZLxZVAgz87Wm",
  "key16": "1EYTBrnNvA5VQNxcKLUiMqTBiTZAFJqrTM4Du3jz6A1E8FipTzawtwaxdtec1xCvNESHcHGXSTJ1RMRR7MJaqd2",
  "key17": "2WoRk5GfY2foG4mpVLn5HYr8WDLJoSSF7YywW4cfutCQ6Fd8joxQFjF25U6zcE6rY6YjgEGz9vNek4541LcgaSDd",
  "key18": "2GCaqB8jfugWBsNYX38herbLT6qdd8W9jYHrJHwLQJWGyzqRkAkrx4RZb9N3TULcgY8LSnTgKkSfxwpN179ds4pf",
  "key19": "3m9fieLwoMZiYmUUTYfAgeVUvQN7W3JKmFuYY7Aa4KQ9ffUypXxnRqYwt8m4VgiF87Qh5TfXnkwXxutxnfVnEZts",
  "key20": "2NHngaeCWrkMhczNQjjuPptmFJdnMiU2e1MCx6rGAWmmRrNVMWvzPu2zsqQa7Unw3CVXyBRXkNdDmWr9ieM3FsFV",
  "key21": "4KWefwcafF13LJTV8UKSa287u7F8YbxwjHDcBZLhbAAW674jqFUqHPzEidJ6f1niy39t2MrKapyZj4EjMC1qwsAt",
  "key22": "4U8ApSUv5AQTTSrdxkyBAKXY1P8dQiaVcsDjt19ki14tEdFUM4TMFFm9XESPAqbxEZP68asiapR7eZJe3AoEFVa4",
  "key23": "3pqSdL5uEXUMyqgQSz4k9DZJ86q4h3vD7FtL6fJtzbgZjcd1BhJMh3BEdy4p56xYe6UZ6HrfuRgNh8pJwrEybLnu",
  "key24": "SmSj2UAMxx16aT5ELBs19kLeU84CmRDJWJFRyyrkYbVuvdEJhPFRLkkPCCy4gSJi4ANKb6baGhTQJgW7CmHZ5B9",
  "key25": "49Y7qSepFMgVxsycWn1exFNNzpbo9YeZtqeY7YwdUsAPr5F83uLo6Hgsbe4beg6jaz1jxEqx5jJBWjxv78rKScLV",
  "key26": "UA2wfrHGaVA1UVz9JGPZyXHrPZxizxSZEKfBT7moK7spsQSXCvgUmQd7uNxk5wWsYrfTJbRLBhHNaWPMX1HJg2h",
  "key27": "3bjg1bK7FMj8J9zNGh61HbXSVvqDbqk1vaFZ1njHpR8QcFEtYFBqnYojybSsiaXHGt1ZwP52ENVnBDK3iF4G3LhJ",
  "key28": "4qcDGZQeKtzPEYyC4Bcp4ZwqWqBnPjVRBP1afJJCNiBFJmoSz1meBpamLjeKimFMGjcgemYekePbF1RRDMBo6frE",
  "key29": "64rgjW9LoP1MfRq6ZByaoW5W3UHLuGWnMGX8q2Hqbjrq8JuZ57oBxEpFSwdJqC1PQKDsTK9srmNQ7viKFraacXbA",
  "key30": "3kZmrLHW6LaMAPVEeg1zmfzKhSnBpXHUBFy2dwEwAUGDLE65WNZYCcuD6sTpx3zBpGFE3dMFrjFgRmByXnjCtVvH",
  "key31": "4feV6YUxvUimZgXEt6Fkj45ZtTvGDmTzTYT4hGLx3VFiUyYDrMnBHt724fbQWPr77KkzAff79Rn725RdrqiXejCs",
  "key32": "3cxZZNTWihQvA7R2tk9dNXZqUnu1nvVxQ2vdv3XgNB4ihwHxQtS4TpCyrBjr25L4AuEFAfuZRUyxMfhpJWDPSyha",
  "key33": "4ySN8j5EDZGcwVaTQrH82MsALdYQF2PvVXQr1q6kP5f7iTuCekWvK24ToX35XYjqZbGAhWAC48XJpJF9TDdxhSCj",
  "key34": "4nhKTksgaQSJk4Lk3bLqhCaggyiSssCq3GsVKnfAVKQRJ1YtACydGe3T6jxxJFBx7wF7Brto44yan4rLqRh8uyvt",
  "key35": "VuyNZX9HyZxpQWQ7njjoLJitJpLXMR4HAhdBgpNmMp2Dx3oB7CxncxEXxkjhhrpXMhCq2h1gqYZMUbnGtHKFppg",
  "key36": "5jZPsA57x2AftJKTR1mNhoupq5dMT9P2Z8Bya1i1gskW7FTxT5ShWjqiqJeJ4RkEqeUeqymQd9R4HN9T2syrMipb",
  "key37": "3Wg9Scrv6bgRJbwNHQrf4bcVWuwtvCWKvug7Mjh1PbbE7cYsML9ZX4zRtBPBbT4yNREPBvhopH9z6t2okgBSJswD",
  "key38": "3dbaDLQnKLgSgfaP3m5Y2pXntsnU3hCDCjVhJ7PkJDodBSL88EAHthxC5CW52dxssw3TELKkAWSmJkVBoLKefUHM",
  "key39": "2A8jWnQg2HfJMDrubV9gAW7R51g6au3be6sVLqDH5jG5DS2mvmxoR9oVx1Pkf7E7GbmM5oa54faCpKJQw3sJbDTT",
  "key40": "fcMcytRPQCb1sQe5T8jH2vC3Vn8VZCb9CAUyb64yx31ufAnFfaV2CUFeAvppWnJBZaEkuvrMLudZew2vWx3eKW7",
  "key41": "62XAqtf2jv2PeiCcJZAaWCuS8EdXMUSNms7MDh6h3CXw6SrRxaVHD5VX3tbmf9GKuDtTcHLP6XeKH86C5Wyo6zeC",
  "key42": "5Er7HQVYUqGtcmpQpsvVTueewEKJSVkKsF48owksyP59KadXyx7VyrfyY9t5WWK5R4zvHz2npDWQZ8jBkXPSwE4H",
  "key43": "51ePe5rGtBZ245oAqScdEqUsVP8jVPAXsAZMhPRCYFf5SYkYq8RDt67AYW2GY1ymjYsBFZiZSDdE2GaFxD71q8vh",
  "key44": "2rhSxGZqY1g6MmKBQdA6uor62S4GHk8FCLJ51DH7ZajXQuJJrKjuYVG8tEVr7AX6F8MfD3FU9x6DBRBSNoKaGCxH",
  "key45": "3yhyr2wBzTPVZpzVqTY9t3asyQaktpHsKUPEmVuC7mkQtDB6SLNDxBXdXiTgypoTV3QBUEozRPA7EeHkFw2QVizn",
  "key46": "4tag4yDFtpr9wZvx3oA48xmuoKAAA4RXKZG4FHiFyE8KUX5obrensT1YTJvDCKdo9L1VbCkBCZZWFaErp48kJwzj",
  "key47": "3Fxf6Vm6iVoffW6bVfafF54F4JFwJbebvZMPvkttuxCCwUQfL4XKm1Ug3o4VLR9GDM2uejsE8iEKUL7ttfueWrcL"
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
