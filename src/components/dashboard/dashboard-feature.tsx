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
    "pXtjo7E7tpoyBZ87uzcDu88xyD9F9c2vSjw8pazRcXQkdxWn4nLgoKr3ognCsePuAsB3fwJfYKjx4oFgnv4y96c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MDsUd1kYun33XgwC7mK235R29HEg5DUkTsh7ZiTH6oW1qUqAfXBNsdJUAca263J7HwbKrJCR21JukxFbBNfv7i4",
  "key1": "2NiD6sa97KryFJYRHuccRzjaS9Pu4hp1Y96RMJGUhuVfDSkEcKs5DAPFTfnyiqmWFDsrWK9G54J14obbVpU49q25",
  "key2": "2CrMAkoUXwDuB1Q1gY2twMeieDXyYQHJen5XfKa2frWp3CjU5bTcv8w6n6VBtf7Mhg9QoopBSTjzEvN9FVpNDocX",
  "key3": "2Ae7Fs2ChiaRmH5fjMXfpss4qoCVxEZBo241qKrb8DPU4CwiEnyXK5gdRVU8PsUmiLQoP88BAjWTQZMtdugYq2cr",
  "key4": "2MLpfz1L7zx2Wkdj9YYGK73iDqJzKkVGL452WnDrtDhq1rrUMBm6BowHN1BxAhf8HGkUC222FJfN7dSYP6zvypMD",
  "key5": "2bQzzXLyaPFoJKqp6aRvQ1JDmVJkYg2KakWcuopBdjvZqUAjG8tsHYT6hYEK4HZxuwfmBsYBCkYaFx1ymhsY9SUi",
  "key6": "4kfbJkgCTe6d1RFVuJ8Co4iW9RgWFG8BS8ptwxBFyLvcwxP8pAfSvXe8QP8v7XnC5DtMR2ZR4QY37Q3wGV4MNYrv",
  "key7": "5EAh3PoKzMF56gXoem5G8ChQeSNxW7Qm2DX6ssuZNJb8mhFnvQc3AVPkwwLJE7kiqJQb87a8dN4PPKkC9RZPJrUt",
  "key8": "3n775T3TPXGAL3VRgzK9Ai7g53dmkup5HKGPJTe8HqXRYXRsN471c9MGBcVgyVEkHCSNaZxV77WJ5nNBn79YVmcy",
  "key9": "5EFspmJtCu7TXkxXaK6L3zwHz6hPZWMdhPNL3ueuiKdaWXFe4gfNs7zdffNgp7G6PKAPyFefHWniTUvfWxGVgiNx",
  "key10": "5bJ3gSoxqm37VToBKVkoeSR1hTKfTQ8qs73qhVYFEp3GieXUX72Ry2RN6zLmdjswcGDw6wgjWkKoLeq4n396h1J5",
  "key11": "5X6nGLBmfjNs6zVaYAYGQSb5BQK9vV2nF3oAkhoCARrSib8Bast6zt8e3sn2ucBkr4VxZcz5ud3sc743rVhyLSQM",
  "key12": "4UCGEzVA1cQVre2PALJkbxiQG8xapM61oJoG8PX2moxYqdL7djV359ANrbLUgEEU2ek7x8oj9mPX1vFrJhq17DkK",
  "key13": "2LnYSJj7qnWA98uorTeEHFS7eAdwC3dP2zye5LfB69zAmQKFRWDneq5HsMCZzqZiAC6xdJCy3vTrPTFWuLmDyZoj",
  "key14": "5KbuuoUkwWPugEjEqy81r3uysuqGeGRVMK1RrJuySyc6BLLZpXRiYnjv1Ebt11hJZeWcYhzFyjsbD8iMMdqp7nQA",
  "key15": "2WKpfQAtDTbWGQp6Mfgj1goHadt5w3fBt3r6NqgLsCN1Y3QZsf3Q9awi6xtXMFdvo2MJUbZdcQLuVRk13G6Jnvt2",
  "key16": "49sYyWJrJqD8RQx7gszPaQ4C9V69r1xARuuGEfEbyL3gTricDi9BCJK7qNaM4ZYfS4A9LjLe8CTKUcFb1KGkny2c",
  "key17": "3E6usPKLakUKGPD8hUsay3JdiFVaRiHWDBk3K1AtbHrQ279sH97Feoj1ckGJdJRBYMB8fkif3U4wPEYTn74zdKgd",
  "key18": "5nFoB2Lwo5nQFJp9NX3ryZZMtA97RrJJ1an9MEg24oe2Rhe6Ewrx88oaKUQMn31wByYFSxHQNRAyduuCX23J1Bp3",
  "key19": "yHEYCQXaDBiSTH2QXbNdjWwN38TPdAQprLwu6DZAtiWgswUSzGhc5aYa2SuvFPoNtA3wUGJUJVUKDUsdPBzZDCy",
  "key20": "5THvWQku9atwXjqBZ4kq1W9vQt5yFUbqugzPmKQSGZ2KWfJDmPVFYd5FkMM4MRXrYD8N9giJrhBbu2Qk8FiLBWKk",
  "key21": "4Sd9mWfoAvGaya5apxQQLzwN4NbMyvE8vF1cXUXBRcG4FbhVkW5hk1m2MZS9DBtWzrc1BVLHu6wS2Ls88GkTFbZx",
  "key22": "38FXRtaoWfVBeeppwSRYjhd3mDAgLcUrGpFVBKAJHqdkF1ag5EnddaGMfg27s8qQZqHLyguMSpcBYuMUE5TEU2Vw",
  "key23": "3fe2PPNkVrbWxS2XitMVqLpowwKDPtyHNrRUbUyzhxq3uvVpgBjQuUrs2PutCC6faygpaPSK3au9ETZ4X3FyRXRV",
  "key24": "4CjEuXjCUba1LyMEEgoinxmb6THKwmqrSDEGE9Rqrmk8oey1796KxhGpUeaYba6NbjgMQ994rbByhSAvNBk7VF6L",
  "key25": "LuSRhPATqaM8VUiDrabFNwBcCwEYW6SvQ9dgUM8g7LbyhhsfMzNEpqzL7gdhKErna8edvUqFeaLT9PFwuhp2Pio",
  "key26": "45arpaVTQUNPwqE6skTGmhuzggEhEgkZ7r5UJWLoZnvBoMTXdpZaf5VB7FtYbSWZGv227M5MS9PJXsG5GXA21GKc",
  "key27": "2BhvBvNWQY8RgFC4f9cKUj7pcK4c2Qm6QaGS34kR8uzYZUPytYYMJZoEY1xJRS7ajMdD7jLFBw7pemA3RNysiMiF",
  "key28": "3uDUzM37xVEbVVjTvgbhzUQBswq4LewcJGx5tm6NBBERHioZAWGMdyoA9xY8eUPkd99txUfvcmWm8NEvy9vMRSSA",
  "key29": "3kS8nrRZL9y8c8hw3Zs1dpWM2dnq6BQh5dF7Xi4jufUun3gcA2XMtXiyYo5fWbyLyu3nEEz1WchDFzyqtpYGyvYD",
  "key30": "5aaCnnfUUv8Se17aGBNrfyJmbkujqcjo6mUf8wbUM2Y9xNZYf7sifjhkEEZ7UVpG65MgzScEz8VdAwdb2QpFSKDA",
  "key31": "4gYnp4eYFWFsipjJ1Kw54AosRPYNurwkiT2ASV4Ftf19AWwDGVYZiDs18h47YssHDEjkdPK6S1cfQM1TbySidxxT",
  "key32": "2Fai1YPDvkNdPRo5LHxapnTJbMjDo1v8FTJsYrN6kZngmZEfVBQLfwyL7jvyeAXV1U17e7CayZmxAZEEXH9QB7p7",
  "key33": "4qfmo6hxm5VjAnw1pBgAbWqG9HwJL5sEPDjYv7Vew1h5G3J9xCGirjvxYpgM48Ti7qm5sGwQykPxqJTLZ1BjNhV9",
  "key34": "24wUvYFuYj3EV3FFHSghuaU4YMZJmxnUoZy8FLJ8rFd54J66evrpZ5cEkrC1UeeHWKfRiJMotjvJASP644KjfWYk",
  "key35": "2brEhtFtGSiS412snZNkNVnTC8dkET6d5Qh6NsSb8XWwaGEgQpn4JJaJi9pFRdEEi42n8d3ZH3iwQgChvtDUJPi3",
  "key36": "28bWVfnfzXqWjSLYkdxZ4UTWSTn9oATPFqXB5X9atYr5w14ZrUYJXw9hghqRjhfrDqkeM2MSVVPSDS6va4Cb1DvT",
  "key37": "42VFMFF2tb1CeXH6qZAMjt9STRFDar3SfyGHKeG384GQmExcifa1xJ9bsWw5k4yGei4fgmu6kErHcWYCr7QRxoKy",
  "key38": "EZpL72wvCpPYU8REhjj9pZzrW8yqa6cT41Nkixttm5wN1UafmmYjPTxywUDEynRLX9dBy6MLXCTZbMD74TFfrmP",
  "key39": "3uwVh6pRYvsQRX5ArbNhhxxszCmd45XbZJReKiHB1X8DxZQeHBiiPZM3MhKQqJBqmDozSDhhwq8DiKzQefxTR846"
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
