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
    "43SKAonVu1foQ3AqFhDadYJY9CLVpkkEFKR8fqehUFCUUsREXfEH6Dr8bMb3N5wPZsjq2svRBGmH3U53cvRWJeAg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bxJTmuCFF2KhAvQJUKMwF5stoymnb92BV4vQokjyGJenXv2fby2csYmwnN2QZQS8PQ8fdvQfcJuQ4F8nnMkTU9k",
  "key1": "4tszFdkzXi9sfxc8293DZgykYVZHuKf6wAXyLrBhzFFy7AQ6MrkjCqiDWcxudcHVSr7GzUnrZZBw9FR89eoAXpXk",
  "key2": "4qEUJFYSKdiKVtJryHv3EgqyArkNU4RUbz3RypibmctjegqJw2e9pSwDDdAueQQYULQR9vVmKrVAneLSRDo54m9i",
  "key3": "5gCetmCXma4MxRLUkZBS1X1HebJG7nqHi21roXYwyzD3XTQF5aEoFVNWzutqohEAakRaqPumbHCWeHDksnLu5PCq",
  "key4": "2pcMwszR4gfDvwyQfx5yy9VG3qxk4Y17hLEYVFia1ZST33zSyuXfbAyTmKvWiDsQ9gJM3dSUoRQ1o2YurfrPnsaT",
  "key5": "3wmvfuRnycvi2mwbMCSRHGaDR1zYNmJHGzFTMcjVLzuhqq15wu57MC9NuwaLrSjtYtAUwuU48GcrD5NXs4Rk3iCu",
  "key6": "42FTTYkbXR7ezqihVmHJA2i6QaAmuQcE6tJcMw1QZdm5UeHgAJzvwJ28QAYPskJUgpzPYfWacSwnPBpfWUEYFd8A",
  "key7": "2RW4BT4Z2mN5LkzSkax3Mbrw2UQgUG3DX1y58VEDGPqLJedKfYcSFYUGHjpM6HUqJFFkUkUFwhxkqnNv64Nq949R",
  "key8": "2NjyiSf49fvamVits1KN8Ycjy8eXNV58Gz34TarfeEGocrMfChvoTEWK9TY3XTZ1ayw7rQfxn1sf5x9gw1vqhHrg",
  "key9": "5pWYefCHxCfza1UiHjvwwZGkfqbyKvJWzjPXeyVJt445djYLtXdPUKJHLhUkmXWvNDMk2b5fqrPyHXpch75EeSAp",
  "key10": "5ohJsBjiuwSTyYmTS4muxVmLip4LHQk4R8AAk2uHMH5DM7gwiSh8kEVwN7LykhFhh8MVXj24KDKgeoyPPFkTB9q3",
  "key11": "ANwCb3NLJfxC8nPRmbYJD1a4T7Nd5JibeWMxDCA78QrhD2WXKSk5iiXGrftHTt8Q3NSiwMZqo4UHzj6tey5p5vd",
  "key12": "43ww5vpjBzmYAyzNfyMasUhrsVuPiAhYsdZqKab9uiKth2ayvyz61NoaqVW7praFpDLnPmYRzsf56u1JkQd24LPc",
  "key13": "3BkSchkpz8sNowGx8zBuUhtZ9h7uvhNWJGAnMytBNnT8cRjRMjRU6PWHTQnw3jqvZGqYftbbhmVzrrYZ8u1JYp2z",
  "key14": "23vpBoEeQkTDV9ckttQnPphz7J9eTYMbvTaPwCCqXkFdoCWp7dJCMrPmff7SEfPj7n46N2ET6VSr1DGUz8HS7RPZ",
  "key15": "47KjsR7kZvu4i3Dx5rk73xtJkqwdfNpRAKU1BGaBhtW4LQcrPmJGmhEKnZ7y5WyCbG2389Xadm8FBCnZYLWg466m",
  "key16": "4vVyJ2a9fpQTLZ2dX7L8LqnFecNsGnvi85yHj6PyRo5GnWiXr7Q76E2fBFzdqvjZpfbhZirxxW8LQqhgCSBx24Do",
  "key17": "29pYqamdP4tLXcUWBU7TJxqTUFoEVegyJ9GNTmgvVcfRGo8KddacjmfKuktme2kua1imNa9XyspaLavKPWHk94bC",
  "key18": "2zmMqMd8sEURz6KC6GmxmAn2tZPo8qLSgnz66Hn8jtPmvQNfLTdekGbiXrBNXJcZ3xHntxAP8CdJNxJca5jvNsg4",
  "key19": "r1PBZR4MoyomAwxTAdpazS2BnKnDsLvJqphS7CGsYrJRZuas4qTxqafMCTf33jx7ixx8hUxXxt1cS3BBZZ2QkPS",
  "key20": "3V3zhvXjXaLVsZLuN6S8g6xAWUyhKEvTmXCm7tX9E2b39XAtDUZicAga2kJjSuJ7un9ZTfyQtgAkYr3rMjthLtDr",
  "key21": "45K9ixqSvLNh8K88VpEB62dBFSMBCEb6Sf6qAQZ15XCJVZox3aykdBh4iWgpM6JA2G6HMe4mi2e4sw1C6GUvXNH9",
  "key22": "znA3x9VyCTiwfYT5oAXJdu4hCia9HfxrrRfBm29TR4a83jq1b99QLWFEqgXoynGMUrCBgVQEhc9amVnaNLKktxZ",
  "key23": "348F7bL2CZN55jg5CuvGkpXVxV21LMsAfEd5xqTUpm1z9jYgjzRzhAuxy9uJpocuqdSFVP3YKeKwC7yoY6x5Wha2",
  "key24": "3apD5pWTQoRcpWvMdfoB5KqyRsfsEdCgegrkLa1Z3GSs2cz9SJCNfZkVksfFFc7uu2cRmHRdDkJnSS9X17PFLADH",
  "key25": "FTsUHzTvc3GhQxnYtxTbEURjjrAjcXdGnuv7Po3YQUHVLUw6e5ZWCnb7NibtJCKa5md2UvnsERc6XAhdbjP9w9A",
  "key26": "2nGXYLdPPgtoySB2EYjPqMn4L4xnmk22EuoSuZaRygR5R6dS61ZHPxoraf4VHA73fo9YTrn5YyCeexR643d47N8X",
  "key27": "62ErCWcXe6p6nQQF23zbwwcNdpnjiBtJHgP9twHXvMfwmKRAzRxyKyHm5YjRtz9wkUKMufUXqrcFMuwxqMFLhuE6",
  "key28": "2ZSF9CBxVny6z52eKJhAEHHEcuXRcedpU2YJ5VisgTPKcjwNkPf5mdsVCVs8tMche9QokAa8KoNouZCVff2FFtG8",
  "key29": "49bG9q4VhrBqoEsTRY3TM7KWkfiXp4zmUkDLuFB4pTxtDVQ2uUMVCNPnKMQg5NBk2UqPJEdAEZAY4JLnbTCYd5EG",
  "key30": "2xJbf2EP6YkNqYFmayeZtzjscDu9y6JFyQYiPcScsGEoYMBzYthF8S6DJWsMFjv6ZYFtbSAFhJEWMPvv262qtejw",
  "key31": "55RHKLL5pk3DREXPJH9uk6EpJMmKasfuyhTuXKSJZt1oLHc2yksB97rWwJu2oN7oMYi78zyrbYJMh7WcWT6WFEz",
  "key32": "nCc7qDooEe3eEotjCnmvmt4v5T8fXL1DqpJLbV6q4vpG6LwNmCENUfXv3jQ5y6suuQmcXrq3tPnJR8z45Bz16AH",
  "key33": "5h7c6SEB67Nyq8ufvHd7nFb59spr7UExd6jcpaU5NRvCinHfPurVMWsZcdoPv1Cv6N6inhMa8MWcULa9X6m7887y",
  "key34": "MwNAtgunXy9tyLcynUZRibVd5gNuQzJet69GpnVAb9QdcFhbzkzQEDfCoDULgPoCKBgZ3jLEGcKJDkpFBPXbXEJ",
  "key35": "2fLyCgZfU3UUyy7HoHpYNZ4eRCkQ8X631ZZozq48zr5ZWpeHCn9vNAfPjiEu8qLKQkuUKVV6Lpdt1q9WJL6CJWrT",
  "key36": "2B7H5oxin7yviVRKMcRUs7ReE2JeHtoXE2o4NXmpqiDPQ5JPMZtWnEzwwPnQEcZ77xCRJoZdYVrcGhXB9idpfvTm",
  "key37": "ApDV5AQpEiddgZGbRgyZHA1cyWzEN2k3tYyTpFDN8PnNzRiR7KoTuSxPRBkvy9hmaTSz3fT1xFFaSvYzN8s2fMF",
  "key38": "4shhK6At7n7mh1qV8zV2TtRxVPX7cogmFRWqEnMBDZj8Z4S1Tstir2X48N6bmzCmSNVkNHi6hbYyPWdrE9zJ2RwF",
  "key39": "4vFU2sbgBreNBQqcBZovWkEkvhi32qruYweFi4vw7WJyB5zrK7tomdffthrPBhSrZGuGEQsxsNBF2M68K7NL676D",
  "key40": "5v9qSYUu8HeSmfuySQoWyy1bDVAV5ccDpQkyyBrj9CN1LoHosGCqarkKRmLZuf1WR6j2T2Yud8My3GyTRsegN4Ex",
  "key41": "2CiAFxHaFznBnzgaGMuDfucePfqq4buxk7DrQsjPg2hbouWo2iNFRJcAhnbmeAFCHTnVrzdSv4ARsVGcJnzaiGjw",
  "key42": "4ccmtDtoD6qzpfrCzBykRVr2xqSDkZsZPVUd7u9kZBAyUWMJDkYVJzw2TYZeeVPZhmg2tQnxyiRWFq4BbZvHUS5X",
  "key43": "3Zw9Rd6matNx9pwamtPfrb4us1eNMediFt4K9WTtrZcDdrWYZRABE1ePtRvPPjYKGGixnoPc1Job3WQrQYbK5PK8",
  "key44": "5q7jF6UUBQWmFCUbVJ4F8AtPwHzXwrYNNavZtRnTqu7S6zgSpjC6HVB28YkYdEsuPC6YTG1rdzp4GFrBBpa8YbRU",
  "key45": "4EsqX29YoyDmKhQtxfq2Dqez7TgHcs2HhJxL1TFiVT8JRhNCU8g1DEeaZzGSQPJkckcDLk92A3y4cz7HHGEvEUPR",
  "key46": "5E5GgEAaaXVnbEXwXYcZ9TzhNH5dRXWLctNGhqePtn6zfZDE1TGi2BEccTgqBSeU4rpEk1VM4zY8TjtsYyq47bu6",
  "key47": "3odD8ibidTQqCvGrFKJqtdf7AM2tBdzodxLU9A5CBiosjCnr63WFmDGqo9B1txCEL8RiEwyK4SRkZZh9oRbTZyQ3"
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
