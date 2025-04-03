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
    "4JyYEtJE7wM7d3jLwz49jmgojh4DLL24NZVVTohTnM3pRp6SQ1uYSLhiWo7A4RnYD2TUzp85o8LJABbPDFh5PNTd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZWqr2fhnwuYEXHg1qvQGRqfJTnNsSGHHcUP6o5iVyx6vqvUAANC7CKpDmMRX54YdjuyGpHK57BFp5ijk8LrR9Wu",
  "key1": "U5C6RWyDCMLq24GSjgVPsSGqvQFb1UZvk6yVZMzAkKFnYDqjHDGajK5Pk5fv8JC6rzZuenZLgqJqPzMi8rRYSF5",
  "key2": "4J6Y8F7iURVLTniJoX5u7uXgmMMjNuPrE3T17cbHhUmCFKr5WVuELwgDbhvBbJyP43bufxbHCNVNxZFjnsuP2UqF",
  "key3": "5gfAFKQdsFxdKAGSrV2SjmVvVST4LwApajgFgR491RPyz99KbrtH85K9LHkuGKCFZc8KyKeNz65czrP1EUV7ryQa",
  "key4": "4X1aFHrKV2wwjuXXNn4hUqC2iYKANE6wQhxtrF2FEM2MCcEXhcaj39PktDjX4aUGa5MTcB7GVwioE7uZb3CC5nrW",
  "key5": "3YSErxLmLC9CeuwywXF9tZSp5vWTdx8Zkz7qZKdr891EVqHRJFGziVghrv1JZbkedptPy6SyC1DuAcW7iAEQ28n9",
  "key6": "2KvwjCaJfAUWKf6iA6TcdwCK1B9YAi4M4zYNM22yUT4evhGMRYTdnVDryTFdAgZdXJVq127ARrPgcaDhW3uuj3dC",
  "key7": "4dEqiHaXGUk9o36ztTQYh352gfZFPXK6DHuTtzvqKjdbv3fQAGYRditpnYj4hjwadtjLo72jpFFSPx4851P3LPko",
  "key8": "5sGAksE7RvkJBbWbVHUYyWeB8teBerggoGRrVdYE8B58Qo7DPu5a3muFx5BwKakSwB8VqcCeR3T7c8RLNga55Dvi",
  "key9": "5dkYirNZmvFqpXcNgQkRk1VCy1ocXH6HznE8vbFUw3BiJ1PiFrp52gJUZJTRRENv1JqbvycuX1WVpMEyyVoWojM2",
  "key10": "5FaK7JWchpvaLqjpdc14MJ4rKWzyTk7SNW4KByiijeMnu18Dhq7E6sB8Me9wfo9JtpG726nx9wWjh8JDDiNPjZx7",
  "key11": "4r8Mqf4RS2b3QVPSGev6GMRSTcA8fJRQ9vTiQxo7G6rZ1gy8RKk5bHe2S3pteqQyV3oLh2Aud21ZecLYJRpR6G64",
  "key12": "3qsmoSL2S8bbxhRAj59CSQ9znKs7aaaY6C1eoNhigbECPPfQ5bZTZWwenD4RzgHPcuzd6D11zd7uFjicesqnbdH6",
  "key13": "4cH81HgBQzQXUf27SKnyHUng2XKD5cQ8UCSsusLfGjTxB3NfRVYzWVBxG9S83aDTm96Bm9kkHJN74gqeohYS4AN5",
  "key14": "2UHNMSSSUUcPjacMS1YAqGuURpf6VhF6LbuZq9AsDXGUtDQzHfmJ5PYzCxk8c7Ne5um6TS49YmUv8pchDs9sVu6w",
  "key15": "3NBd2HezDP646Rb68B2vCQj14oQtwJ8Q1yx3z1E5vkLDZbN3TUjono8oFjPhNd5x9Xp2jHPoYX1XRARqm2rPgnuv",
  "key16": "2DLNKRASHGdFhdiktCFDAEwaQcLnaY1v5JdQ1hPrf96dihqZDoyrakH5e6E1j3KaXVeCS8opcdLjtSZwkwzEAm28",
  "key17": "2D22Rxm1qWchmUT2AHdJ41krVwZWxvvKTLob3nVqJxtRwcNJR13QNPn5zfadJg5Y29V99cHdH4ZWaf9fqg64o1de",
  "key18": "41yKsScDsh1YXSn2t3rb97xp8mk5H4Pk6QzgCfcBdWRxcCRWG5VGuXuXmwQxJGJKuwN4hiA53Xpb3ekbjhwXka4u",
  "key19": "3wEfn5DCsXsUMVzxiAHCsXcp6nBBr9JVSzLZxFdNFrGEEPoRtP1djvJ124K1aHaDqsu9HM4mw5W7KssqGVbw9KfY",
  "key20": "2Lmvy1NVtpbgSt7Fo37M84QPryA2J8CEnxj9ESyb9EtLMwfZJTUU2roMTzPUCWu1duwGKYQezHR9Z7hML1LL1K9F",
  "key21": "4Vmqh8TPQWMBeUJDWtRqbkhhNGPMKCz3AskkCLPNnrVYPVjNvPaN4X4igQHenAjQyr8LYs4nfEZ9XVf4oW27YY9P",
  "key22": "4UZDeG3GV5QxgWdT1xML7fHJYYZo8JoVgexC4A2QKsVrh97Q5CW7dQTqxqiemixZZknbsrajQNon6vYmSz1kE15B",
  "key23": "KF1Ga77v8hhCjPSY93G2w1HJvgyZu627Ckh4Doqv8jr5cYQXGEF2Zmvfdcj8H3DKAZDgucjXdEygD31aPzmuhoi",
  "key24": "5TPQ8sUZobPXzEnvrAPzJsGSR4JFcadBKrP4jDa2Fr9gqxcvXCVz6FM4tXikVVdB1mWRGgCEQRYSfD5MPeAtLSmR",
  "key25": "4SLfkyCsCBdGqJRQJDPiRcipxU9U9PoaKPjnovcFZjhzjki2tdTFPdGP8mybCSpQxjZNrUDUyDRiVh1PjEpRG8GZ",
  "key26": "3WH2De9gNw9H5L2z3ejWXnkCjVoTT4sZbfsQe1bCAa5VqLxrSaNVAfosAUbbyQ4tyvFBVfNivFekFHfqejHKERYe",
  "key27": "3K2k1Lfeuwo3pykN9CEKGqMhNJHqNtuKMypH4kn8iWWRH2VXttqku3ezWUcnnjrGNYAgMfd5a8Km5QTYgu8J5W5Q",
  "key28": "3g3MQg6nKbPBAegiTt6K5oq6c9a6XsK34gZitY6Y3E2R7diJtD45erUQFTzczXmz1jHwvRoJUnaaunXAi9BEbhZJ",
  "key29": "2aJLd2j6DAVJaisTLXgicdznWRVLb7JC4CWX6owLFwq5BwFyLwWjAoi9Bt29SpEVTMVgkxVeEYZ8FS39JAEwnxn1",
  "key30": "38Jf4ZAAioNQJH727ZBjut4BBkR2uqr2MNXeNZZByT9s5Qjzb1CAtbBNBkbgUGgLfcLYqkNuPXo2K8mXi5tEwmGK",
  "key31": "36f8JXWu8heN2ogst7VYM27CGZDonkDSEdcAtDSSvdviz38akTtV6CYmCBUYd6UYkLej2TjH5iWB2ZkcMkvzPgVr",
  "key32": "5b49XDbvaF7yxpQT6jm36wRR1RuvYameJp56WYqN2ThPJR52RowvUwFmvFcbuQKGDyekwr6XK1qjqgMBurRgzZhh",
  "key33": "4uhytDcKQB9RMAPinjbZsh91C4qBUYxSYawY5nm9diQrKxc3L4x2P6VQUzVssR1fLtwDny4j7mi4zsENhGbh5hjC",
  "key34": "4deJHriC3vdRzWdwtPZJoirAL8oXgfhv4CDU77s8ZM9amFNVm1hyEvqNX2thk4WxmRhGRDiVU5g3duLyxxWKdPwG",
  "key35": "2iZoiMYEXzAXLcpsHMnkUiPBcnGmHLpSCK8Ezk224BkM1H2qqSVNE6MUCFAKL8EFz2ioym7fYKoi1Vg39wR9pjqZ",
  "key36": "3FupkFLwF9T7CY1EWFonNBPm5WvjDf8t86i5cM8J3cHBEUqKQrG2Ld4ES6K27a1yHpDkmmHTv3N2XRfrbsWzsAL2",
  "key37": "4Kqko9cDThVii8M8vRcyyCiQqCxKXN8pguVsWYm5JWSh3WTEcY3uCVW3NdJMAp4HCYiNtANWQop1p1BuDnkyEQDH",
  "key38": "C5dLUJjmDRmzpAWB92Qzdb9LVFnPafHfz3XD8yZR8XXfVHKXPtRZHUQb17mUWi5hSSzbtzZFpm61kZXAVutNjuq",
  "key39": "2cZSTcMVVEn8dJUGaR7piozdSFH8iG274ZkTjT4212Fdyo9DXXpiSUarHyJAjt6ETypNSXR1EGa5XJWj7UGanPcu",
  "key40": "VvfNVrBDeu5XWJ5ZeMj49xHFafVhYWhcshnUBKG1wjshenAVHovsUyeHPoYrgDaLamePh78pGvv27T8c2Sp2sHv",
  "key41": "5F7bZQZkPvy3KTdL2qZBZh3mbk3CMs2u9LZB9Amt9A9GCwnpdJBA76bEsR65PFUCzz6YvKCZpk7pmc6nyGq54bbf",
  "key42": "2UeVoWNUxGKc4QYQRdmECRGPc5WirVorssNLDoHqwG977XsqspEQUiNHMAoM6th93W3wWRdwrs5ezLbTZP1xH9LK",
  "key43": "3EYtXjjkVeCRq2mR6Y9E9ewjwxZfo21hDieoFLr5wUK98nXNkC27cJ3cRRXEuAuQdNHYDesTqQLfMxRhdAFVnqSx",
  "key44": "4c626QBYUwa9x1wjYrbuiz13YQmA5nx1sVcV4ztYWdpnMSfiHXkAqXSnEr8B2279pTUVtfoH9YhTrBCBZbwyjyRs",
  "key45": "5CnUisunTFEzNF1khHo5andBzdAu4bYFNjo47LfXybQ979nnRqeewXiNscDSrQ4Vvr999RX19P4PUCg1yAkCuZ4o",
  "key46": "21bLb3Dbcu4oBkeDMkdkwvKRJc1peweT5GLkKZZH7V5Nb7oTRDoJVcsmUVBejE4CSqm9EVAR8RUuz8hxPmqv9vbs",
  "key47": "4JBHbDa6LaPjp8r1VhhYjZjq61Pfaaroc65G9mxxus9kRWUpUmPnQ7kpLstVQAcG4rY66nGp4Unt1iZx6SQ7Ai7s",
  "key48": "2jxw6kzxKUgxKwEBBAq3iGDC6Z39KqQFiskYE4y8g6G5rnvgoY7wG7MGJSK6GWmqTATGyHTcsea6QcCuEGXYPxHY",
  "key49": "3JSPdd1GwjjB6EqdQZmaMaXPY8evuq4xakzhgbUkKCT8soxUeFCRxCaWmBUHnSFPrqDHC7WRF4ZBAF1Q9BUHFNih"
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
