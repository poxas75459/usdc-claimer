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
    "kzMwzvgVGjEJJCGqnH7Uf3tf93JuoeSxcQNemPdJScztEVugANgCS8zrbYTVZrPo5xdw4xb1DSzjrcm7PFoUvZQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rixwZpJAEEyGtH4Lid4AYHJVrjhKdiEKiCmYwNvZWeKdRQ4p9gwK6GMHs6abwnNWp5ho37KyGL9QjYRAaHD8Rfs",
  "key1": "5RuoJ9hC1oLqTTex2ftC5fgNZ4yXajpfqXKdSeDhUePCGnG4geMdqeMcGhVuHTCsneRnCAxomFMLANsPmuPevYRK",
  "key2": "3xQiM3FJKrULFM3NKHn7y1qxYrc3brFZJFgPy5BmTSfLpDNhVWoi6c1okdm9ku3BR8ZZuEiSwVtns3guDHFDZpcm",
  "key3": "41BPGkpZeynBcu7cRpBhA1e2vzCNhjAueiVqLRcVv6Ru2ihVgCLYVq4i83nfBnVqmSPuyEcKYLW2EN4KDkPA1aCU",
  "key4": "29JrKNzKCKRp2RLErsbRHqL6KcQmz6dRhSkZwoe7RxUB2K3xdgdtQ2HJZmA3wvh36e3XdN4nhF9SJNELF1VWQr5z",
  "key5": "4345k96MBqNEKA9egpi6wVLkwdeTDG71BzcU3upS3Ra6PtfLTf1fzFuif6eKwWrLHhb9zziMbkP7cX1AeNAR63gp",
  "key6": "2y7PeKJqbXBjFM3cWLPJufiknXqPg7afv3tPe5YSMHE5s7CBD1x2Nb6jrgjtCbsZiJZoZWyMvu3N2rwCZZJLio6E",
  "key7": "4187HJgJBfFipKBKTKQZYM5DZwdZKdaaFmXSgdPBY1iXQeLEzvfcodTEJ4zTg9wFY3EJUX2HzbWXmb8WjpAJDvuw",
  "key8": "3cuDEhPe3xz4i4sLTnizKTkJiAbnRdLDit4e1rpvjMVq9EdDQJ9bPGUpwDDT6nmDYDT4CRw9vHVa4vBk47iQPid9",
  "key9": "3Lzmj4JM9cNmhbpiCdu54p6QCTprDhskzqEKtGFN751YvHHUCMoTZR5oFiq44yGtbyLdEmUKu6wQYzDfxV1bmHwj",
  "key10": "3F87mz32ZwreBveJw7X7DhMiJoav5Y4TexTFVQNw8MFYM1F8sGckcQhWwKyuk1V2RFbsw5SB1KopUpnNRMbYKt1j",
  "key11": "jq94ofp1FE9x7B9754fFtqDzyvzqHorz1H3kGucxXFTevWgHRCD7GUmP2mH5cC2MecEEdLJpzD5gXbhocaZddU7",
  "key12": "4rupPhZNeK4AEXMFHPQnjyHPb6w1xaAnZ8cr2xCSjChsF2iDJmXFPiz2KF5biyNjqv7gxsU6GMmj9Rr2bhEHzEei",
  "key13": "52LKCU1ugMiZ72NUsVdGxgL7mhNAM4YDzBKEqNLFfMirQzNeXZPHAuqRSMbqhQBBjvntnWBWNuE4pqZ6WeSJgpmJ",
  "key14": "5yWx1CrGZdE54WtDp7hVbMoYeooZQjEwURQH72DzqWnCon8mBG631PQg7qUFhHyWp6BEGX9qprULRyHDsd9RSZtg",
  "key15": "Hk1v72PJgnqtMsQGxxWBjvYxWvDJ8fHjP555LT1o3YmrbqihPEmREEhbEnLvsFJ6WU6NsVdpGU8yYLZeDuTcN5C",
  "key16": "8rTuDRTyeaYk52TyakxfTKmbnotv17Uxn5fjdB7RnHiu6NxPhjN8Gcs9KUaDx2iLJBUDhYkzaw6DCzbsTuRjZUB",
  "key17": "2fiojuN7ivkcydL8FgaAHzuLLRFpSCVkojPwzQD2joNz1Hz17wuLDQN1FeW1RyvPSZN2dHCRVog8ajTFxdj6zTDk",
  "key18": "2t6kZv3sdLX6KgNGHpTSPGNLvoaMResS7BRMMZjZejL5UEfpVwoQSGiUNrkrfwSnJ3PhxLHMYdzoNugPv2martnb",
  "key19": "X8sp7vNzzTKVsg9A4etVTE7J2yMvpAr9arCW54QmbPVz9Qg43aH9Rnm2XPvk7oAEucozVdmzJ6k4ZNo37ULL2c3",
  "key20": "2oZFLDcLQxJes1S9SC6teFVU2Cu92jTfephpbaf2WuxSmUQgv4KmNbyU22rBwtJGTgqMTswS16AGisiBQPPwqqaV",
  "key21": "vPxMCLV1m49jQ1WASBsH7YDjqaVpZCXXQhGbZmrbwN8DSsJiVD5kZLQoqdta4Vio6TGESUYTAQo9aqCAkEY3Aoz",
  "key22": "4NkatkKGDXh3v9TwLsU9fCETho9G6aTB5yisECuyhyu1VzYBjeEJbkmSjx6mwsA4i6Jm9TCT47zXMJtH7Qo1J2QQ",
  "key23": "2omxVgZACHty1NMzBjCY8kHiZ2iHQj3NKJqL3zMQfJaPFqs2ynEuyknxaLcB7iL5eR97BPgy7xZwWhC1qUQHnetX",
  "key24": "2wxEUN9qpW2cC8kYSn7CgqLNdi6GkQebRP4q8TxaA15HZqorph3Qsdwuc4PNvsXa2jKfbFWFZ42YBD7bfWiSQK3S",
  "key25": "2ptraSCgxRemcVDstM86TKLf64x4J7bMyZBJMwvBfvtHVHV97zp6gyTkH6bKmqx3gnNxooayprexZ89dKXHkwcas",
  "key26": "5yaZAXqY19MdK7yd4wiFDr3vnSCvtGN9sM6xZY8t86qtfVXkppaRXALBnEo3D3tM9nELo9x8yZrKwqrxFYnKuWRS",
  "key27": "4WevaSNuUVjfbgFrYiWg53AV7GCMdiD4Lo9ZYePaj9r6AB7ACtbq1Qp3VZQpogBATgo2M4ekFWZzEyamwJjJsWsd",
  "key28": "3iWSQznJZKzcixkK12yF8yb5SkgXmJFBXGx5gY66i9tmupKCtXmj8xrHK6sMsk9rVnh1QgBksREH5bJBm1rwPeqv",
  "key29": "2YSJbTmMSbKsQdcjBZqSuSXvqW18p9MgCoULQDcdP1rzCdU8i1cZwhXyVErvEjyKczSc1oYQtpWiG6SacoYghBWH",
  "key30": "5yVPaKjx3P9jxVP3DJZ87Z2NC4ajysVjs2zrQWmh5wvzD82nRCGuo2552aJx7SELNShHyTTCxanC2zKEbGGfY94j",
  "key31": "4h1p67rHfU7kZ1a5cV3rzoLTCxJpA89Gbg28E9nHL6nQNqXxP84XHUq1jNN2J86szPfXEiFQqxqfFg62MH5dj1yV",
  "key32": "2hK6D4DVzzF1rWqiXfYXgbnXpPGPrTQuJTuUUChtDn2pZHphqdpppSnpQnCNGQqzQBXkkBC3DHFWJbXxpq6pwzgL",
  "key33": "281puLkwdoSDAdA3YMBMMd6EW5NhyagiyQdS2zRNcGMf93KqoxVBSYfYHQoxE8wGzax3MkAVvMpuweE1GUAFNVP7",
  "key34": "43LEnbbXinvrJXSs4aVrcZzuxt5BBwhDHxqHcMtYogckoNEUYFaCbmW5dEA9pRWtkXoz5ZmVBN4WybBzGfsySwM6",
  "key35": "3sijoNLuM9T1txrxQkTdhv8GXFbSyvuLDPFJcPeHsg7jLP9J58xzw7STV2KZJX1hkwioS91UJEn6jpy58kJr4ZfJ",
  "key36": "5AfDzUeoefZJkJCvRTngAQKJhGNR8YGBTQJ7jYMVh83cAr83SRoYmnmj4enBR57EZJckcFSBZedmUkrEPopUXDSy",
  "key37": "5M26iZyXWgcRNHtF9mpfy4m9SbTugAhyRwgBuRaTktECLhZchtzdxCKzWaaukxsuP934v6hzCFxi8aPGN6XgkaAT",
  "key38": "2Mnc2BWBwXGgk5QNL8SwVQFpzEs5VvsJT9C59sHqZEwuZZJgAh3KoFuwEZGJfR4KVwx2Li5SbVk961mmbK6dKffe",
  "key39": "pPNFYtRB4c2Gatwa9M4qYH4CPYRkoxNXTPecU47V7uMeEbn8RY7Z2hjS5SXUhWBUYeAHWnvn1gMbDTrk2GxdaCF",
  "key40": "5xvSAKZFKGvDBJf46K2yR738iNbogawu4vvUfTnyaUYDkCp9Stgg6Hw6g5HdtyyTJgGeX71rC4ADQf4BmPbggWix",
  "key41": "2J7Zj4ynfU8nwf87uYVfp86ikDgkjthY9gNkSaFKrQaX4Cy2cdGf6d5XbWKCvyCfpXHEn53PrkwUZ1n7grtfu8tN",
  "key42": "46PhyLFMoAb9hSckSVfGCnoXr917AymTAhk9DfwVfFPN7FAjV9uDcPxfHEKgtWcCBoUzesepgK7Etvv2zhFFFKdq",
  "key43": "5afVxYb5j8ghBj1UYQFoVy5h9jvHC5Z5Pio13gPizkCx1hGRhRaW2rpzxDVeoyfLroUoQJABrzadh3nP6SGebrMA"
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
