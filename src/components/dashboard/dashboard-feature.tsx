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
    "58KiJpTLV4VoxjcX2ZoLsFWKfUMJ6TCLhZyvLRzwGyCCB8howL1kd6V3g3mKdexFAxP22DV9TKA3cG5k99svbc4N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t6tgLvzHNdK7xwcHqFwKVKSsv2JSCDbC9dp3z8LuAzSWbdSsb157aFU1hVVgdFHyu2r2xL4RosB5LcXozW9a3xH",
  "key1": "XKFUpxVsNafQdZZ9Jx1z3argZPsy6NhADHEKvBa6ctKE87QVTXWYM33dnG9CHCr5wdPj6ThtSeHcvDcsrCxbrhn",
  "key2": "2tnqWs9VXYoDS7U9yRC13aMEmXzPgYgGp1p25hcV4hKikq8eukqmK9m5JjovZuhnry7qFe9zsaZywes9Fxe2RQeW",
  "key3": "32kiPNZ7K2GqA6pxEAGkGGb3j8pHXaKJ5pobExL9B1FAvEe5oFMRt9XTEtXXiaZrYcsX3oNmcYk7UexfkGcTqQKj",
  "key4": "459beVGCMrSFrAMJogeJ2ZVMY6vshZig15By1zoEavWTo7MfEpZkvDQNhZXGsHPr8XXHDooWce1WmwkGRE14Lz9v",
  "key5": "meE3bwnoapoSUSbDRGCfu26c4GRsgVL1QPCnC4fR7HvUpyKEfqDKUxPSfYoMimi7Bey5cP6giKn8pyiEXDuMZP9",
  "key6": "2RQsbMcYeAUStrjSV8YMCSAkEd9aVyNwVey6ghXDGEiMLtd19a3v6AuanDHnaDdrpWJFohqwJtsrVbCEFwMZVUu8",
  "key7": "5mbX8qnwoCGKGb9QjEnCTSP1RtUVA6Y9hVf6zbLkEY8yjRkrHZjP9VwvFK6FWPM4aNiURS7Jnuwfntb816AhcmpW",
  "key8": "ym7xRag9W8UsGZQUUy3WgBWUkZnrrDGkxBaibjCPowK4WBU76SPhiHKXsw4WAD9fYUz8v5wL9hJnrQN4UDSCiQ2",
  "key9": "cvUSQCyKQnbfYKqeotS98zeCBgFUYZdX2aUU7Vzm8hPZshC5TvVRND2asHY6FnAtV5hF1yNbUKLDthvn8bgCNS1",
  "key10": "2iSzfcAxEJ3YAAHs8sancxoVLa7wNxc1qkQFJoUcmwC6hFx6n34pV63ohD95VhpqVEkyGTCaiZuD8CKmXVLbjBYa",
  "key11": "3wmo1Gq4TMKN6zLfAw3AmuUiR7A7j3wuRTGAkBd9qT1rhdWjM5Kw8BGA9EKA8PB8dTgqu5oFZDa93NYpEDYxaSfT",
  "key12": "4mUu1UJAuPUdsYFusMK7er582bok2FtGoGhdaC7keYgepMzDYHSjHkXteyoXG5dtq1wa81ukHjLftyXwpq9pUc1Y",
  "key13": "4cU553VnG93j59bccDhx7bkgoJxpHWZU1oevGSyibgLiTsioH1JgF9ZN5Kjs7sXeP6aTcGe1nB5eQfdqF5sU1WQp",
  "key14": "2G47h8eGrAU89RAsYAi4CxUBXYZY6pDQwWAarFNzgywoFSjvD3z3gmtCM3VAgUGm8VpZG1KV1EDJLUUndmHLQQ83",
  "key15": "3WEjRu9b7o9dgfSMwEbKLXTw3Bp27GJUgKiYEzRpFEvD2BEpF7izt547macNSYwCLRZaAS6RaxFtaSLTaXALCaST",
  "key16": "5AJuTQApsbWHB3cJLB9mPWLQwzXsGTH8Sans6rh6is2PE8Sd9hp4TvRhHBhm6KqsrwpKzhwdNvncRnGGe17kCJn3",
  "key17": "5DFhditngHbcYUBtzWDayuCeTU5FwLfjz7ZYLoGgWAKcTBgkeaD9ri1kaha6x2ZntzraQxKRj7ZFjBzmqfwkSgzG",
  "key18": "3AQ1GN5kYhWSBsPjbxGANmszcRMJ6c6d7XPaqZbXwuNVRBqYg92NoK4Zj2YtDnAEK1EgvsDPMyC5iKzbubebxdbk",
  "key19": "ro7eCQvPXwKFRxReXM5ReDMKSvd7QbzNKcB8zS3QGfzVVimGLKK6QD8fVLZVUEwwVVP36XSTs3VKheKx7yRE1A4",
  "key20": "23yRvgmqT1UPcxB2VqGF5iWeDxvg1y1EwBnDVW6JVMkiaidrDCKzpvyqJahxUHgxTPLvccaWikZMfHDNc1KHqrQz",
  "key21": "3vvFTyFhqXMKS6FXMiW6d9j8ppzCE7byHahPFQogfVA5Q7vQPddKdNPwRoRQL8gCt1kyq5d1LzN8gAp149GvAMZs",
  "key22": "2BG2Cv4uXoXMaiJSz9jqz5QePrALZW5ER92H9DCuPpRCUebQaqPvYLbsmgGcjeNUCi79Src5Hofhn9jF3norKpJD",
  "key23": "5jNHz2DTcmZsTN5WicMkUz4qkM7Uba2q8jEg5CnEHb4CTTPZoqFaKEQNDhTGbYk4pm87XxC3Lmj4RoFxBZPMrhF1",
  "key24": "2TyGhHEPMurxzg1NNrbrYzxRYbbv4VJXJ7bV7Rp3jxnndeNSYsnr8yeKTQLxTihtFCrMf3tAPsBQ3BNFEucg24Z2",
  "key25": "61oHaDatV9NCw4BkSG18GC8beBtJEyNvWTh8k3e4F87oM3aLEnzde4vXWTLjsW8fwV2JwTTTGmWLuxJKcYJCTDbJ",
  "key26": "2ehLJco9MqgJMtbg4SphHHBt2W6EYkuKQMMHSRxrh22D2MAp12JPRCVSdTRuLuYf7eBEDCyJJKCg3gTDTdc7Y68x",
  "key27": "4hTPH58vD7jYbhc8HNrGcAqKnC7aAM2z1BXyPTZDLy6oR7ZBxNQPM6mxCyb7wSTW8sFVCjBife8Nc9fEEUGKYRyw",
  "key28": "rPfwDNXcHmGj4VfpmaYjLTh687rieVuGisNb1W9ZPynnMqiHiL7BXtuhHS8hGmL4g4H2pcCJvNk3dUgAn8Nsh9x",
  "key29": "2N5GNA81eB6mJ9EJbSPw9C37quwj2FQT5ZqEiBhZiR6zTzK68bfopVPmuBj7DNSmhAzFXjQNv11v6AMrtwEhVNAB",
  "key30": "3YFEjKefGPrYgCFcw8yP7EnvU2UmpC23FLrFntZfhGzdJdQq1C5PBYPdc7uNxuZHKZvCjWQadwTgzMvnZC9qTw7s",
  "key31": "64n8QjkZ7fkaZA2z8LrrN43U5T9g3m3rsXfdyCWit3E6N6JztWj1MfpYVfzCaPxoKzgB3zdeZhbi7a7zD7Dv5T3G",
  "key32": "4G8xTjvBLwZ6a2vC6FV7sRYHg8Q7NX6TSFdDuBz6ATPPxbGuNrghk1E9RRithmc2mzHrGbWbvdTNiUMHiELyfcjn",
  "key33": "4fYYcWS48FTLQybDpcvhoMnTBSSU8iGuvySeUTFMXiBW5Mid1jefEF5FXUiuH88dwiQ11pvMyqStYY4J9EebaYKm",
  "key34": "5kR5Mj7HoAyGDoEVvcvxvJyEg1htDooLpQvEVvAnM9NWbRhqQ8KvsfvtZC4ZtPNiSbZhep2YcV2yTHbGW2Sa38Uv",
  "key35": "5YmTHDbQDYLY5ZB2KLTNostJNDpwhZRstucXfhRmcHvFLci6ccFJhhFHr4h9uQ7rwjFCmc2ZjtoTLzghFe4YbnuQ",
  "key36": "5EvdE3xzgitEkdwV7PSLXjZA6cTX6tsdmp3rGzRVC8WeV2qrejy8wWB6zTMcsfu87MhynfutHsHjAtsdGoq6pwqP",
  "key37": "VtH2bNUhZj6wxCYydy5z2U59sVYPGGFuL6N7fgCM9B5c6hHKjrXT9e4ABzvKJTaD9CCRpE6W9rodq4WnJKQ4UgU",
  "key38": "4FCajLcJUuo6hHmDwmC17to6dMwaRC7boZ7NakRen3ytQmx88xNtktPFWQ8AqSSGS1Wuae5mQKaQpDnKbwkrpfcf"
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
