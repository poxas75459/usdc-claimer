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
    "3E3tkJMgB5osU7SE8bHD3Vs7tZrPGUBdN21hTY2X44nLwLDiK1oXrVLuKGkHjgmcQTVYKDHk3tX8He9mwg9hitzZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "je2Hp7xAEsFjDZLX87FJ5TMdfJMUAErJNjCnKMd7aTYA5fJ3RiXmJdJLe7jvyKf4dWQaNPnPB1NDQSj9fnkhcVt",
  "key1": "4HCqEn4yNHo16Gjxz9KYukfHvx15WmHuju6W8GdQhnctKheL2NJo8T5bbiseSffbDF7W48ZhDr9EooXMv6XB1Y5t",
  "key2": "5wuU2eKdb9g7jUyKy8BFBWHBQvBwPnC4yUUb6ySSup41YKvsqHSDQzDMGCJnSe8KKJijbUw7xWXQBjKyyBxoTc4M",
  "key3": "djtvpt5JDQiFoVYPYY8L14vMTP8HmYatJ1pjjJFkCg5aRxQE46i1xXrbTiGGpoW5LCmqPBqgTFTYdMCbps4vjzw",
  "key4": "3thpqzrXKe9sdrcnSr5Xk7KAMsFesBir6KwVu2YXYNS3BdrHd57b6XcUXNWsECb57CGdqdEYYSuFZhLBEJmAa67L",
  "key5": "3VrH1DQWtfz43M69B5336fGzZJqpP5G8zs9A2rvVddW58JZtausosFYDQCt16GmGtvSGEjRe6ciTHihzKzRR3U11",
  "key6": "29SfLHxrsoGkSthrZWWsKYzcoMta3Tg4o8v9bGxnsA7bmR84WfHdstef86MvTWsjNiZk4TnodfCXv4HRNXrZebGx",
  "key7": "4Cn4nhfM5a6aWJL7CR95NX3Ap6pmYHeWU1Ri73MwV2FiJQ5aFd8U41KCXtpqvrQLE4Vycm4yDME5k7C3SqZbokrG",
  "key8": "2mYjQtKDnWo3oNw3G9AAVMZSiQLvHSF3L4CECiicaw8gf4VMNr9HSrEgWUgHMU7uW7caBHDU9ev8CfgMAdQj4L6C",
  "key9": "4tNrfqiGbXmpJzCLJ8gj3F7cZZDyW5gvtjxNTjgJnGzp2qMcMVUrhyey97HANbansed3y4TdenN9wBYDSHq8dovj",
  "key10": "3Xm8Gznx4WsrN2s6z8cQA4ZcBgKX7U2QSDtrZoURtqD1QXMPvvjzsPMSXaSUmKbwoQrw3eEasjL8YkAR74bv9Vp8",
  "key11": "X6eJ4DazqPPu8diNxmZDRE2aoPHumAZERHyf2SrfMWttiHvTRf9KY4K4H9Pph8RFo4uTvEYqo9eswRGLdmStXyZ",
  "key12": "5u3atoH7VPb51ergbGH4gdfMJVCdpSmct8e1uXbNimxv69oVjArc42NbiwDzJUjnEGNmPqmQpvZh3UMyK5dWFvuU",
  "key13": "mo89QtFCUAA1yamwu6ys8U7QhwBXJLCTddt8MLffkENMELy9JR65z9McCuUpRDnFWL7m6V5Eqwj1CsShqLPgvB2",
  "key14": "5hH6oQwZFW5SqJVWHkQEtXCh9mq398rcJZckoJnuRQarNQBTsUx4dUqQ1DpvBSnVedsQmybjmiPcUjdyZdsYtscG",
  "key15": "2E4vNqD4UmUzti7u6YzVqFnUr2c4PPjQ3a58Mt6QseahMxyqmiMPpns3WWznXWsPWbPou3Z6g6H8tiBDTyPJFNdR",
  "key16": "4gktJtkdhWqJN8FATfpc51rNDPc5kMenQ5fv6QJGmZJ2XYbUt2b18SXrspD5YYG4R79LXkAM8CKmuokmi1ZaDmNv",
  "key17": "4eundsJNxA2NAoqwfKWdVVD9AuFhBZtfNrJ9qsUfrQCibXrwN9hWL3eDWKVo8EEoYT21iYpDwWG2EUuRp8skc8Ve",
  "key18": "2D69evUB53h8t4CA3QAVQVQZC2VHDZZpYfAaBFa9cbxdHWKQoJrncT1BRbo7v5YMuSK3ARvoi6ut67qxctnXiuFw",
  "key19": "3MrmhB4M2YMcVgkfhKfzf4AUdeSoCy15PfFJ7LMHhdTUoZcAfNNUVsJbmuESmzUur1RdYMYGqhiPRMr9Qdu6ZTKx",
  "key20": "38tCrTf3CVEHDuapvhGuQEQR9YeEzzLbecVzwDBkEdUvuF1CZa3LGGPxmNWU9cM1B4c3yxexhPv19QQ5MjwdGhn",
  "key21": "128xmymLVDv8N3hBtcGwEQ4xoDMhww5xpQm8kAQhDDXLhUpfREDPbZd2YpsMEh1WpErTm35X6obDmvTQu8XsThs3",
  "key22": "5o2mzqfcLEg6hJmcyYj8XKWua812mjsgvgkdQf8maqXEuawsefocwJ8qszL4AZoPAwj1FE9dz6zVGQB1VGKLPQGw",
  "key23": "UvBNBX6t53ayDoM4248PJpB1AtxWTMGQ8z9Up5L4qdjaQCgQyckqTxU65xHgfHL18r1hKLcszFcu8JR2sciRqAo",
  "key24": "3hcXa29BkMXDn8esGcNWripAANHSbofmFtbejmdRXzZqCqqoveH33K8qqDzxDCpQdUzqrxjoxEpPPov1w8SNKab3",
  "key25": "36V8U9g9oquUVLrKrs7D1f4FRsc6Dw5qcWnL5wxqb7FVrb5TyQpqZR8iNajgVH3ZpFqrgQommS396seaWii5hADe",
  "key26": "3njXfSTaEUyasM8wGQi9TBxvLyF5gbjv5Sz6GqXvrYwLviUnvSr8KUDaadDUn8FDkNLmQdiaUZ2wHpXG4zWYLrK4",
  "key27": "2pupvCEhMtVYPNUX7mmH5yUgBFS32zBw8J1vY3S87X9EvjFXsh3FVwT5J9c7hszoCtBKZddFx4bu1kr8TZMwLPRt",
  "key28": "4XAH3zyvig2QFnPvyopBVKmdhMM6vgWeGMP3JwdymmrwYKgryHJAUmSnzNr9eRwFKsr71ZbygyPYB3uNEr5dBnp7",
  "key29": "QGZELtbiY9MCiNErcYK2d9BZ85dQ2vXTsBwqH8utmWRhaVVSVmgwFUehZfrLuYbhwvtvHdcc8vSqj6nSDMPpzox",
  "key30": "rArSbDN4heNvwicjcrseJN1dtFWRwKeQWmTLWb42vkr5yFSHCtz5p3gHAJBrf67zkYPAc18tnferpbA2wGtJgjZ",
  "key31": "5o9vdivnBLqcsTZwU8zL8iZiC1atPrSTHf7KBqFURRezEvsL9UenkixHhR9muztVfS7ipEStXqPgcNfv9J8UG2s1",
  "key32": "31TbBPS2LbVE8nHqs9fw2msMcWgHuY8JmD8W5FkiUQ5PnQQuckJwNHWSam4riUhTe33avddyQeVuA4axgqEELu4z",
  "key33": "2jmbK9gxhnGyZjfQUKwsimcuDp682ZzVrnBBGx81eg1gYPgUygXe2SfkEiJYYhrRgFa5v94TL1gn7EhjdKPQE4Fa",
  "key34": "4wG3jz1t26HEWcz72gPW6bMLR8YYqQVFZTrzDcg1VJbp3v1XL1RaAveBS333NHm3Gm8Zj1JKz37LBQfe62yA7ckk",
  "key35": "5dZf5WR58YU8vgbwhNWG61d11gmdKbNP3WtBu6XSrNC3DqUr8eKeWN4BxNYN5DZGdfqD899xdfYoE4bh4GXvKjvt",
  "key36": "4fNWC2WSUbvE1SdphoUmtwusBYEhcTGVnTDrEdrYt8SfPoUB5cPc4zemrm6jQhA1bD9GMDYSWccAwypK7axJY7oM",
  "key37": "33FnKvJDfykMtLikiJZCDbpmv9R74ecPbV2TbTd8vXCoQ9oDAFcJz2ezdVEeZmz122yx8b4tTkSAxB4MJv5rfN22",
  "key38": "2PbdzBEXCdZYL2xTsPGCjoaQeVs8QdW9HbNVnXmWY1haMrXQqRRe9YbQk3Ss3YL77Ui8MFSDafqaNi4Mw3HbG4KS",
  "key39": "5M3FFyKhaWYWxzLTmz2KmUgpxZXQfYzpPK3nbk1yavZhMadJq8XJtzT2tupNLSVzm6cUASPsjcKW9WnGY1yoUaxN",
  "key40": "pKMkAKLpcYhb4nEN6gzQoJ81djoqpE5EFy45mQKwp3jEkhJAD4hPyXuLrCSx8d79nwYu9S1y2nkERRaKk9tQFxd",
  "key41": "4nuJYd5U1CnajDjfmE4g4rTxhwCfv4ARPBZiV7R5ecjs697XapLik6kcnrh7n1RJYWhpnc9F6SGb5egEQLdJka5w",
  "key42": "5JtuV2vsRbHdN7vM27WHhWrSPX4xwAd6SxoC26VyVouSMyV7VxrSKxkaLjwEDe9QrriqHTWh6C4FdhfHLG9CNsXK",
  "key43": "43yS8K7crFE81mrPKso3nfpXivN8c3BbwNsJ6k2RMRaQD64pP81ovsbLM1q7RmpHCDbWTkKhfSne1ofrCDA8nUjD",
  "key44": "3WkW3P3QYx4gt63ZRHYtkiDxDHRDrWkCnfHdH6xwTMdTqfJqvsLhqgxFKhGowASRTuZNtDyi7CoVUN9Zb3qHvfpr"
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
