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
    "5LkWSbqJsDKd29NYhGwrLEijFuHvacp7P92XiUapPadFaAVSB5eyguHisRiwVUpRWqYcYA3qBt9stts8VremFbg3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "254Ls4Qqnvkev4fmrfR4fstChVyv1c1BZkZoaBZ63v2YKHf1U59kGtR1iKVA8KLwksAKWLZEjeDB1Bto81WDM2jv",
  "key1": "4hcVCX2nZv2wvPQCsGttbSMXqvhagzCBCG3PNKrbbmKiYWjPLaYNgCEZrWuV7Nzo8wLxsJhNGi7r6ZooQD5ipM3b",
  "key2": "cp8eGdy7pLYp3sRBXNF2PKw4hznVx9SaDmFoW54hCdNe4Esyd4vkJTgneWs86GwEamiGNYNG3ierN1ZmFH4kph7",
  "key3": "35ei5kB61FfkgRawpfyzE8NxeKdA3Xdim3ttEJ9kJAf4VXKP1ZfRmavJRF3fzkm6KfHEy9Q7km8GDg7mvschKG7A",
  "key4": "3K39cqiH3bS8UByuMRqA8myuL3H9SVmSpduTze1vVv2L1uzKjuJYuzWjXviPpAUxfQEdH5UaPhAKiDXs7GV2Damb",
  "key5": "4hrDFA2sb6y1DqzzpFxdTyBVkQUXu5m71RiL78Q8KAMJ4gZQ76gowhWnvDurNsBTks7YoSNcYUxLsWUSEo1HmqeF",
  "key6": "4UPiwShqvk34Td9h2EcyQgwmYVxD91Aj44tmgJCmcjjmrXD9KrHGPiqqbJgnkNDLfQgjSuLxjNFN1sNNyQ6StfSa",
  "key7": "3PBQCDZ1mkrPdHjHf6R4CDf5FguJUrWE6SuJaiVDYf5b5MyDvg257v7KDbzAYwuee4ojFgc9q2eBLGHn6CvcKxBL",
  "key8": "3RRVdmHuZDsGhCUYfsMYmf177fFkgEmBMxQfa1rHyVRA66B489arJ1vSfP3a6sqffsfZGEgnCd4PDNwYCRdgNwVy",
  "key9": "3tEifuxTMLqtxsXEyZ5sGsWcyh52wJbb5UMr9x28C6M2eQrofWYEDjdE9Wn3hP4V47uHXwBzWgRsuD7V4VdUxjqe",
  "key10": "5UZFMYubBjd1TKY16cEbhWtPREDty16htuS7sF6qUseoxyeGnHBxrwct9AoWXFhPqXrtPVUQrXyv7hCHJSRS9W6C",
  "key11": "2SqJPgdGyRPtqVbxy5N2uXnLUwSVetMPiQiGVvwicVxUBWC29xc6YWedh6r2jQeBoF5p7iEknk8u3KkrTkPNNAar",
  "key12": "4U82PRpB9GujKHaYSGeBXhupobLaNzuoFPbAQrYxN48HENDKbDLW491arBMdPoxxRCGiqYyEQ1QiDiPttQwVU7hF",
  "key13": "eHyMRchpW2sUeGzTB3TkfcEQLRAkJymYD71GgwJKW6CLC32oGVRWytidBjK7f8h7UroWtGRhDHvdacFNkbBecd6",
  "key14": "C1ethrzgv4FNoSrpSSZg7Aqhpiy6jpiCwr3GKT2WBRhVhVrazoLwFxmQ9N2XYpFRm7zbC79TtkzLtMcfz5L7TGb",
  "key15": "5sPD8eXhGWwCuKZMN6FLbJM8RLu7Ta5Ds3pFXFdHMXTEzQHVVxUn7SuUfUbJVk9cjCQH7QRTFnhVnk7Ys24XborA",
  "key16": "vxzzwPh7fNYkuQutwnQw1FNU5WjdXa2NV6R7vccSH39CkSbNs4iaDq6y1NSzRziG9ofspTugXBHqkFCCUgHdQWM",
  "key17": "vnW4UizNKaTywR4FYzvL2yAsUu55ADMrkhpbhFrzWvcMr2HXoYxcG6XZ7xtH3NJ2zqwQ7P6Yk6ijtku8zvggsYJ",
  "key18": "2eRiAuXzqensLLGjWZUMYtVyDSMqtQimkLx7TYbGqEoWK7T1i2XmpidpWnys9RJjAzp7wRh9k2bzei2CjGMXnmKH",
  "key19": "7LDfDw4xjXcE1FEaCCK1HA9zozwAhU7d2r6w2h9Vuun9VvuKVaZHuirsSQKPaF6sB6MG7aq92BSFnvdv4njjNLu",
  "key20": "2afeN2JP9yWBs8Au4xcDQXRqoAwB4gDZowRkJcsvN5LHV8xJuoAg6jaDJHkSAT7BcbUkQiFggPHi9NWb9L6ssLM3",
  "key21": "dL7MEWJBEgYwzvfJVqEbqhzbyTBJ1XQY1FTx6mJY2CXhurNhWCvZsJtKQwpyXMYzGwLZWuJZFCJkcfmsZDpqSKw",
  "key22": "5zM1KFb9PAXu7wbUD3CDa7EbCwX4vpivP1MJYGaTG6AwRrJBcdNgwK4fM3m8DPHq3oaHdg1XNJWRPb1uPhWRXN8Y",
  "key23": "4ftwYsV7cTftFg7LfBNt9qesccLrUQL5Tqg1GhkM3gvVTgPrMK2oH45Gy78V79o349Lvfgr8LYTzEQCUE3oWbUzB",
  "key24": "3AZXatXj3RWfKbJR21ULAK9CTcJRuGzNNSNo5gb39bVUtxKpZuwe89fGatuw2bw7jwPqhtvb3uid7KG5QjnDkoGg",
  "key25": "5etwyFSetRfnSySGANHshRQow7BNCJCn7SFnnZKWxpspz779jJTVbsNnBW2LCWLh6XtRppXywKjAftHisr3cxWPv",
  "key26": "4ngqj7hBFmjKpf5JV54ZubPY42uk6yy4uWHRocW1S5o7vGKAfBcLYD8vGHEaFWVh6BtdwEkpCQG48SK7RjQDo6g2",
  "key27": "39TmAdEv1s9CLmwZEoYsKs2ifVc2teisEqJCsamAriczzpnXPuXdsrGjmX6SM1ftzwhNnz1GY2R9JwMavQXopWsM",
  "key28": "4VkAyRyWHgn1p67eeYtXCqRM88MxxDP3gHxp39npfm946fduhp6ukK7gEkx44yvemmUomMCkorQ7RaFZBBN6caGi",
  "key29": "pCQXR8t2DxTj5NEPnqHPfhzoPcyCmXHUNgj7zrNxKqbDoKakJao69Xn7DsJPKCVNtg9UMfvFfBumcAT1GmWsa9d",
  "key30": "67YBc3EWa1FWU9jtaiZ57mfV6p7J1RYSN5i6gJiAE8akcDqApYi7GphsYpzhCeQCQu86q8dbqSSHqHX8hhJyBvLg",
  "key31": "3SEkSh9Hb2UPZTqMjdWJz1PunMukh99w6YZWYVSJ9qfMX6nyspBYM1SrTmbHiCKktdPx8vRMVXRi6usRdnuDYPDx",
  "key32": "5YdFWAps2ypWKs7av7Wc4e3wdmTXm39yntQNQb3TLoVXjTNWoSYanQ8hdQeEYrVsM93Qnuwzcu3PfoVUHVvDCHoN",
  "key33": "3xgJVRyEBXjFAGMGh1McYs92cWAk2KV4hiBiXQYtQrbB71eH7TTiFzgTuqiKGgGGUMKHBbFUDY72k9nJEUBAEEXQ",
  "key34": "1xZEDHoeA1voh12EoZBGYUMBRYvhib5P4MFGUvYGCC33k2p8S7jsHCaVXDqCkzeukiXMWC47AyaoN3kRqM2PwY5",
  "key35": "5BvQUcLP5qd7P578Xwgi2uGJFkpcNV2ZBmbwhSTumSywUWicvRcABn545aban7NFKuzSgYHLye2E1VdvYgDigCmX",
  "key36": "239gHhguvrvSaVAuxo66pkq68Go7xzvcYJ63RZTbwQG6sWnWJTv8Nh9uEVBABgSG6RybgcDmmJUcV93xYHZtcoui",
  "key37": "2b6d7vskoyK5Bhbah19PzwNZ3pDERURrbCoMWSUkAVrxatG13A2t3GG32vJRREBEZ8C5WMMCGotcKUukNBHtMBsU",
  "key38": "4Q186WmZP9ZAqd67v5iYS6tJunGc2yZAo2333H43zRHbHgJSEPd3DWiibBHdbXyaYpqf8Zqs7A8QFtdDPBaEY9HJ",
  "key39": "d4nmVHTJRGYLxS4XVXJd4s6AT6HXYAFyFeGXZb57gfJzcDNRKmMzcdN2sZneLAZL2YXhtNgF2dzeUXRXgYncvTu",
  "key40": "tbVHYDfpqVZeoDsYEJrEQacQK7ZUoZjAgin1b7gb9jmsinMwn9N4rwcxf76rYpshYZhgzJpswZC6EStU1EhMP5W",
  "key41": "2tFDFXF7tBtwe2mVZm4YWRqkWC1MkUD8eBd345AVpGaDGEaBoBoCBnTPQpCMRTHT6qJzkherRwPSTbQVz4qQvKBe",
  "key42": "27nkygMN6L2fY3PA58neV2V6mLdQ2z1bhYBmtfFJUnqvT8FhEFpCWwyJ5X4RQyGFtfkcczjmedDy6ZpEXXyFaBew",
  "key43": "2BeroCb5ymYvhJ6KquCvBvHMujuibm28wBkp4HypHquP8XaCSBoxmZxF8LkVBfMaxyd1KwNfJayVvvg9cj2qGGwN",
  "key44": "4PBH4JRJmPvXYx3pp7QajPz8qQvVoWxEtZAL7wtFaSeoE5SHbg3UCFntR9Uv2rpuvt1yB8wiAYSVVV8eieU5ZLKx",
  "key45": "27CGHDAFTNz3u8sd2stwCc7N8Wp1wtxKvL7DpHPHo3dSyBzfkqCPcQDbvGhnq1MHZAojALy5VZvmkACmNuUbge3h",
  "key46": "4LB9LY6hYcxWytPrp9rFVQn11DtbQZbJjVz9KsJaNRYLSLKMq2nCmjmzKnQrWKXyvedNbvq9dfJKaBkK3oUmqjx2",
  "key47": "5wAKWWcthJnndaivnAtKHXbSfDby9yN9y2gwS9HZ3Xub3xvmoYoK131DC5GjimAr9radW2MPENdTCeGpNx6V4dP4",
  "key48": "2HGyAr3zTJs2hSEKicGgnZEaCuoN25b5zcjV6n1Bf7As2mBfsMo2EDyfVwstHvkE7mgML8vNHbkcKCCqzWRbcULv",
  "key49": "781yKPvXmFUHHtnhcKsQ6PR4mN9wxKJKUZx99saMpCYk3NF7VHwWBwV7yPwoegnDSxaDWJRy9nJFCPiBkGLSUMi"
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
