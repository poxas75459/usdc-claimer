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
    "3vjySiE8TsSb1EtHYDAvJx9PxBwCNkdhdNonvukxY1LoEWbVtoNF1SX1LW27uJiaUQQCdMkTmKMEjcg611H4tHzZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qybqksnnsPna1a6mpzBpFrgYSzbisczb9tYhjwgzhM63m8ai1epP1NhmPu936JS2w7fjgPF9HpEvP15dwKL3sW4",
  "key1": "2YRJvJyZE9RSykcfsW2U1XzmYKJh9CPWzZG7FxPjo8L6CDdpAhb57KhBCmfGSiKScFWMLttXbn2yrgUcgnmZJNbf",
  "key2": "2mUVqEfbJtMEHExsxEBwJHZ6Se6jejhKGUBQ2FJKWhBbWHR7n9B2yLTRkR4tyK9JCtDE1K5uUPoUDmGyz8NeEQ13",
  "key3": "5bUbcUsii7NgYiWGzntzJAP7eu2nTUwGWS1n5TBpfzEEf2poUTpY9h3CCbLm7FhPppncXbhD5x3MZEkhqcaHD1h2",
  "key4": "yeYuajxg5M78zh1WminAB8RovPJaRzt3KewW94sfcNgtpbsYgvPVhNNfZcRBqKwxyrNDwygTF6qgVPGuarcYcoX",
  "key5": "5dcPpYrPYnspsPWVVMDeicc5RU4ynXoZQd12Yu5R4HuAJ3CWHyxcxakrfrVYCnRxXCvmxoGmAUKMiE68AXmzvSu",
  "key6": "5NpgFA4DZMifY6PqU1Qc38n4sjfGERssbQpKc415FnAuND15bjeukpTv1iyvR7JJHoM3GP7gPmcKhiHFAoS1xhB3",
  "key7": "5ZiKn2fyAXKiBuxE1HM4XxP1dE8jxEKZmsi1orTQ9BCdbJqwNHXvvEC7295YbqxkvnbvAbcC2ySbBXFbvHBtgEys",
  "key8": "beXQhZnnoEiwxcDEcRCj11bwjjq2mZLLn6pPBRae63PiP5SMsXgRuFS1vHbepaYJQULS4TsqccSjzTrQEJnWRTn",
  "key9": "3xvxkkiSGpGERTwECuTGfcHBQFzgbSap3C5XYowtUDGsg1pNNkCAAXSv76S49uuwToqpst3boNuYDtn64aYRUdRd",
  "key10": "2iYnC1N7epeH9zyWnzKq3DKKme6GDX9fvM7yMNkhfc1dt3vMJbbGGMNjfKXctNKFTXsjcPZaVWeBu3C3658UC8EE",
  "key11": "6YkkMH7sfmVz1eje2tQ1gF9usovpdVj5ENHbPreFE1GSLS9xfZafS21Gd5Zj3yhR1f17KifZPqZCua6EdsmobfD",
  "key12": "37BgXJvr9crTSMjGxXBUU1UbdWFDXzfDfES8ypAsS21g2xULpJ2Tr8wQzMUvDCoe8yKbH5Qrp3QUNvV6dvLufcj3",
  "key13": "uMhcDzC4Yztd96wtpibDQpZADo9KbxAScFYnceYovMcYcPf6c4BNDa1i9SrMQG5UtMCPm8TZu7ZnaHEeUy3ZAMu",
  "key14": "r6nH5tWzKhb5annTZAZFab9LdSdrdGcPdiuK26Z9rVZZNFiv6tvGvdmrj3zjPMyD77NU4Et1DwkE49fLF5ekiH6",
  "key15": "41QmtDYYN6qeCr7zt1YQsYaTVLrqdvvPVMnj1FsePJmvDCdaEQveCYo1vXHznuHsjFs1EMMoKrXaWGpPm7UKHXRe",
  "key16": "2zExQBbVAS7z1htX5WqDr1DZiULtEEU8DjzWPxcASgKQPBfigTWN3s5n7n432Hjj7HxTDVgBwqtZiCaJQ1nPhkgc",
  "key17": "A5Hcwnq2VuiyFQYhCnzP22YoApJ5ii5JtA6tjaCNgCWy2Mtr7btAfmGodippvCR9yu7gwXnEXn4CHkA2MaUFwpE",
  "key18": "3iwqTxaKiTata7eKV3BXSn9eveMSUT5UVW4HY4A6E1qHVwLAFzWXcPHrZYHQK2i6ZmLgvdEytMTjnj3eQMPaVv7A",
  "key19": "5TeMPq9svypBsJAAmrunW22VowQ3yDpr2zPTxVyqGssKapRd4cQ7nS4TbtXjWV8znTkhuEqvmn7NdN4x44eJ6dtY",
  "key20": "57zdoyic2UjZKjzqZXvmPhPk5qifcTEqkaWGmsHQ3fTQxY5zufXuUcRrmb2EDrsHem5gZ9WgzG8e7oNpFsDASHKD",
  "key21": "3UNRyUa4bQ8eRgy5gSp9UAmzQv6XDfWLPH8PLdnX5SFi5oKMN3ZY47zaVPUaSzH4hThdCHnqs6MZsKuCF3nXrrR9",
  "key22": "2AtoExhpXrAchyiBjLoBuQZQ1BkRGdE6FvjYvrcCMYxCxusKtEFsJFK3sLsdkwg88BmPa51QoeGpHSPApYr46mHk",
  "key23": "4456pX76qPrFgrs7DRPQy5fW9KSjhF4vfCYdapmfxPFHjA9XXaZfepKfRdZiDtjgZBNdHAV5VyJfhsNM73BePWGE",
  "key24": "47M5qRpQp3VcHMZiyUY5zT1xMDBvoiTYH3SXBA21HCijPcEuRWWYLwHiVYGaJSmJ8ad75CSTChY13GV7STnZLwLD",
  "key25": "3RJrBaK1j3rVSnUjefysnK2fzTdhjYN94nhGNAUnzVfMZM5TNMVqvveW96Csm1arrhVC5YPdEkXtxPMDMgUa1dLf",
  "key26": "32CLiKs4zcyL42A4G4c1fzLKZx3GKWMfF9mKqXVuFXFNytXGm9YSjbGax6zvgK6q28mD5tyqFRKXtHjrVehWAAis",
  "key27": "3FqzQ63brF5paU5rtSM1nb8qwqMCT9FEXp9ZJDe3yACJCf9xyWxSRC8u86sicJrAqqLB9aKDVE7KaUtYwCkK6Cw4",
  "key28": "5SS7A4kcp6dbrN1BoF9rVZsCm8aTzsyu1BU4FhEzFqg6mowhoCEp5bLwL5r1TEsYHFv3KSXbux4JHzNsBkun1ckC",
  "key29": "2vsstpQNA22ntFsuNFAY8L9bKv1qzSiKLBvgajK1dtDKQ99NQa5dUz8eYvejoLQ46XGzrZnxDkm1yFA6SYKmQzE9",
  "key30": "5i4crThGLfF9vryUvHrJceEFn51Q7WkK2NFGeiRAXguBenxzwHTsaEvpiHx7WMrH1DzwJuedSkfAeA5SczEWk72x",
  "key31": "593soep6fVotv37Jzdd5sSDd1BdHGPiEhoS37wGjJJtmmxL7JNY1kaZZmkjiT6mr7qzqT5NXYna3d8VxtQ1rjPpq",
  "key32": "7PQJWwiVBsfVu8nKqVggxSkjJMwoQdVWRntp7nz1kwDL8858kxAw3ZrMjeEpcdFzgeHCjyg6g5ftsw6EZXynrgh",
  "key33": "3MUfN5Gh2oEvw3zR6MvRSXiACSUJCqvUa6gB4Qp2uWqRcG4gQquFAobqC1QbNevRQ6Km3AjJWyLuJ6zYpGBP26dR",
  "key34": "wfNWKZTwPLCQyQZpNj9VXibxhf9EkBEKPQ4Jf8PqoD7AkhVE5CTxe1RQarmvm1VzKPHaobRkC35obdXcG9Tm6fF",
  "key35": "6294sgDpikkBUaKPkRMdbeZD41ZVzEkYyAH5tYSPi9BsbQm9eBXgKtM1Bdv469ku1Jiycqvm4vL2EVB7vVjJj6zk",
  "key36": "3y2LJet1oJpM4Qt81JgnGfH88AiZox6UePixSAhDAPz3WHFe5LzkJNstSbaDWdNYou2kByDQEhw2a9bsgsm5TFAb",
  "key37": "4e4n3CdMhpnWtMS9WkxyNm92DjtdKNkNssfNEyNE9KZQVyH8k2YVzpw6L9mm26aHrjVtLAUqAgm5aFJ1cP7j1jhK",
  "key38": "44oNNVeT5SLAHSiZ54jVRwAbGxw6cECCBDMzdGjmTcxJRQoRrw32Q7gfpdo6C45n8HVvs5Yu1WdgurxsUtMvuoUV",
  "key39": "LC7x32XhAbHKsqwSpigV2ntLbkUtJvWUoFYyCTKqSecUAUvt219tsoFhucVnQUWTc5X9jhrhkLmPYRYGDzbXzK5",
  "key40": "55QTcMUZpmmXvkiDt8sfzLfVKrvNcdrZd4mYbXgeyDouQrenASiK98bdQLtrqkz6oVuJ9H2QyR3dCGmJeNvmqeKH",
  "key41": "w8gqzdTUUN7Ky429ARGq6478qaW4NRMNAsYMYGmemC3nRUxddopAKRaFvhRQ74wCzieYbD9KGwUgGkqEzfEgA3V",
  "key42": "3y6hrv5TYiFzJUrUfJaGA8Hvb33vi7E1FaFZQbuJtw8yKTnJvWYhhi5sUzrzR34XkZPqk84hks4znhbr9eDM4sB8",
  "key43": "3JLm2QjpX5vZTLCVei3zDuenYTMmKfNEa6ZCcqPF52KQE1RLtwvuif1GMjgoNz46cLeuwqzjzzWHrJptbewo3Gj1",
  "key44": "4WcmAZnsEyGiUJvUqeKBEYJpPYeGBNQxW1SCZWFrvNeVKQmiLnycKNNUD52BuFveTnbjZpqzusrwtBsm6jwBMnTP"
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
