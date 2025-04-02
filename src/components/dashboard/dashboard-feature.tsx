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
    "2k9v7CGz7UxoXPFK5ydFvpdsLN2M6d7DfCkG86JojqjCHLZnxhhWizLuGnEw6bnXCKEeF97vRBbAeYn5TERFk8zL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oCSKw78mBr9agXDQy8SnzaB5JVvBRyY6WhgkDP97zRkqoSr28XJF3P4uYKnoJApK9RYkeStxxET8WVguVHcTtq4",
  "key1": "5YKth3HFjaSJdAQyUhWNBqQqNWcmpU8m4TqxQfWtJbPYXFKiT4MSLHRKMz7f3Z1WipJJTjKJWxmfsawEkdbHTZeK",
  "key2": "5hhEcWDiUkdsqxxsnYgG33FkwQvvUpi2XjuS6RQ3HyZjdm3jgqGYX3DKuuKaqd2uMuWL6kGyCcaVgnfPw7iHbWe3",
  "key3": "3Tvto5eRL2XVcQHcaLAbc9Nxd87SxY8Sep17d4PpHCHYRt1xsEFnvXTEKb9d7TFsTBi5JGZkxsYiTo7ELYbwEvU8",
  "key4": "2HFYVYox7ChfBN1vpuVJ4TzxUnqML2DVb3RBDCLx8ueNqbD5MXvkAEeLJnKE6SjzHsbsF1z4pj69JsQTSk2LCKvu",
  "key5": "5SmLJbyH6pQo5sV2wQBHDAp1ir5H2SH1DS8K2qmxVar2sQHT1WNSHGVLoq4NegUhHAt2YgoJbDttP1YJEcBrTYdR",
  "key6": "2z6wN7yHmEGzQduq6QStNH6kSK6aHg5agHhAvc1ehfRyBvx71NMzyoyv1n3AANoaMfWCePv9YimDU59xwT8FAjCa",
  "key7": "5n2DTtKuGyoUeHdBX9fcCfMxFnNaaJ1NHeneMTorh1TGg8oKP9RW1RpdZdJAQiaRzdKRqahAhNAtPwpWmDfR7BEp",
  "key8": "2pDUcxJJLq3fjgGYZ8mMDfuzTTzHuK4gBcsBNKxxqjtAvPtVKQfDpW15764fyXmEZarDw3wHUe9Sz55NUTphmUdW",
  "key9": "315PvbcLcWT93hiqSmYsG7ciUESoEfftDWDzGQNzgPKX5R5DBx2g5DHqE6dc7f38sxWVJaskHy4tjSdubGqJHnAe",
  "key10": "KhxFNesU71mUhsbj9nhXzXW13Wbf8vWeLBMFLrmgL7R6m9y4ETFhzQjM2Gv4e4kmArCWKzDNd6DmhxbicfBag1L",
  "key11": "4Raj6spcRbVC2rkiJaS8aYXxRfoZFvBpfqWx5sitL4cPMA8qu5cfY9RGgy9t3EhZ4Tnyn67gBRh2iZ5NcqdM6T2F",
  "key12": "5gL4nJboPTJrnSbFAFuyfGtxzJQLNct4fxzxvfsyCEFBeBBzBLfRSfk8n2gu9VGDBxbpjHxzB3zDhbndDeXcUxgv",
  "key13": "4K6vuVsR53QbhGKvVNXyLMFtovbjT176sYgwiWQJSg7VZVNVAP7uzw3XmPByCiYAfgnW2YHcpR2qhjCsbW2YBCWg",
  "key14": "5WJj1wrSbj2H3sZoG8BtS3hx8RGgjfN6ytvNivACjVWrwmHvNK3EJhGC2BYzmj2vaeCY9Wzw6DiJyXbuKP1v6QXC",
  "key15": "4v8adCLmHHMXHJfhLRkpZdKsZGKDVXVwykTiVAQWiJmhj1SDiaHV5EoszxfqYZVWontREaYmCshPABnGmP9GHNWg",
  "key16": "51ezDexWSrnovAUT4WHoyX4c9vVWpjfoLvStf9hSYtLdc5DFSeTUsaVgokNg9DkPg1mniDHriEKgzGctysYCaebs",
  "key17": "3SxUtZoAjArnhgEwEcb8ghAMZPL673f7MuWFCqf8BHdFizxcG1Fa7NDpEHDVasAhrWvJM5wuxd2T7LPbxX7pCRts",
  "key18": "3tH4umUxVafNaeS5KFW4JrKFUXNeNxDaXYhWwNTZtbrFYTWeEkJnQVD2EiDQepU7QfLLBByXMskTbpVChmnZbe6F",
  "key19": "RadmYgFKtr29io3qPSMdnfmz1tmkWv7nEBAexaRHiBVb8JwwwsEEjGuNnRjSzupVT8RaZYLBw9n8xWNDScryJP4",
  "key20": "26PP7e2cMsvCpC8e4Bkr8swgepW97NxRZ8h714KzGabkJB8AS2oHrfmr9ExNTXHxFHsjgUfvxJHbdQ3jZXRe3Wtw",
  "key21": "5sgpQ5SCCzSuN7mrUJiE8AL2vx8SJ63fVQsddAo6bZSg34dXxqbzoxXj8eUd52x3DkGbowGFYENcBbH9UqkRphWq",
  "key22": "CKzi8WpmZXPxGHPLXbWM2c3izDMEysKeejNHTccdJpUHsY2c4UUZiZJHmaM28sWaxAMeFiQobJ9Sc1nXGcJpzrq",
  "key23": "4te7us2ZpSwz7wdvfm9T2B7bkLbd7xDWpn8Vwed1MLQWSwigQE51W5qp1NpRnPF5A9FoRvUTWgXiN9UGNGP6R7h6",
  "key24": "3opEbpedADA2BHHDqpSP9uk8cZGQgWxr6L3Ws5Vc2bush4FfSbrE7hYZUWQrpTiu4YSd8SECJFhR7G4JcVvH9baU",
  "key25": "67TVJZpySeM6yRBj75Koae2aeZMUTvsVXggzhSx6Bjy5dsJSMkXrQxT1RGM3FsUNwx8SvVwDdHGi2H7kHL683CYS",
  "key26": "5tD7NNBx8TFwGBhtYVHkJfWciFwezow1mCh2La6AVDUiPwtvVh1vHfm1KWtyNyDb5atQeaBKvNVT4dDZjcaKUEMt",
  "key27": "5ddA9uLTtjKvCXXsLz32vJ5sn1aB61RRCUnVrUJM9o7CRyZrwfNXBWCDoVwHgaUHYx4kkX8XW5wqLrKVxj1oL3CF",
  "key28": "5wvj4LevnTVRPNEteVYds5jyArw6ybwyhRA9HKwgwvAmq85gHxqts4PjN8H4uY9AmmJb9dtfKBqgFV6ZFb5Cjymo",
  "key29": "55dfjCFNbiWeYhyiwoxjo2A7jft9VvaV5GmciSME11LRsQwwd5QGgVp1NtfnwQt6ugUmsAAyvCcEjTCDBvveDec4",
  "key30": "p7SC4w632GyEAEYW5ypjYsYSA9hgbR8teQJVdzaKtXk2Vj7pwf9rhZmiCCbnZkRWd3X8pS5AaGQtaSJuXZGBDUF",
  "key31": "5qN2WpxVYKX9jpfeNnpzHE2fwpGMwRNy4rvdYDgB8wd6SSsSRHyh9tMC7kyaCo3CYsVkkxuUWmPYSQMT92M2ojAx",
  "key32": "4qDHB3CaCVcyz64xEtnfUj4t3QAVikvTDaS9nfyRkNfvTtApjdbXDNpK3Pwi2QHaDNfW79TFVh3vfTvMqboi9TeU",
  "key33": "2c5d2Jus7PQDtqYwAqCsjhLQRx98PzaD7wFGQgoSfmVwQ69VSAgysfCdxQ2Wy9tdmb1Bfk9EhWp4XgrHhaeh5gcS",
  "key34": "3vYPQomfAbjcXMTniSTmaYMAyt2dJWwYVWCxaCDFtVhvdu4BXQfSVfREF6PCLUGnAy5KoTgfWG64t7jiR1EmzNEH",
  "key35": "3tcMfeCjYZL6srkEfWYaxXt93JTnEjDG5iNqbhqQrsgWPLvFBnXpLa9izTVvQYbFKN8beTMuyFg2McqGg8QbTyu",
  "key36": "3ChHwjphTccLZFDi7eYGv67PeMuggas3S7CwM85m2Xihn8EuLULKLr9tuLzeNhCi7FjNZxmkGaQHX4y6sPvbmnVm",
  "key37": "3mzBT9LvxydMd2H9nXdZH7cxdNvdJKGqp4v3NGdeiMBYRMMonDPgsscGptJddHgLEhSPubegXQGm5XqZ3sQwvLyj",
  "key38": "4bw7u3EH6kAB979Q3utUUM4oFeB1iH5veWs4rUFemAnFmHubbfKyDymBxHsNhwNNZmPNqnrki73snGUm56FAUevf",
  "key39": "2XguGdRtNwYVVkiTpYPaixRp2PFWkgjoPP1pZoxJoEQqLLV81j6qpKpbaBUTnZC8EdVR7PncsyPvE51PRurNzCcq",
  "key40": "sKoJY2kuK86zQvb969z9YVsgdYCX83ZMw5syJaAJAmDZiKdfc3Ma9Tx2jdyxDgo2k4sVb2pJVUXJAwYSCMxvi1p",
  "key41": "2dY2v5opCKbU9jvJPk4aiQUTagdDaWGZTQsP3CkWgJacQwFKKWNyjAu6uvqsuGX17Md2LTsMjtMhiNztESgwoP4S",
  "key42": "3VrCCEK2Kvrfe4FE29HiTGdHcV1mtFNqa3npmBtidtBahdEkyScv2zfFwNJFQCYSMKAASRH9kUxzTyGvE7m5MK5s",
  "key43": "4J55idS7gUSjaAzbBhjq9Lc8LUvSwjMoqAGs54j3EBnbsxukeP2hk1UUsDHv6URkHtGaxobPzW7mNjmSvFMYTTnP"
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
