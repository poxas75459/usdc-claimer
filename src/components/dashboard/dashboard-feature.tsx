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
    "3g8poLcQUQeMxeP1PGHfg7usvRPNg3Srj48DUVDkY22W6a6CmXpDoGbEAdjVbN2mhxYMvBcVVuAM54u6c4Dk52i6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tpFZbQAo3DCCusTBphsA2qSinG5EoscyQrwfHp38Ffvvz6VNL3U9riVCneshHBw5dgnedHYKazP24bmL6t8sCVL",
  "key1": "Lyk2tp4ngE5xC3XheZ4ZYZ5nBiArRsG9BeEgcjBg9jErRL9mb7qoxMx5gmNRtqqGssCAqYxNhS9HvXu4DkPxfuL",
  "key2": "2ezbrTGeWKMM9rnLB2tcWfYyzaynPkjzcihx1QDsUXZnzbXxePcmwGPvheVgC2sSNk3joEjKGpv3CV4Ad5UzPcmt",
  "key3": "qU4iricLfqbEEUStzByUSbyuU9FH5GdY1KZ9xUxvQhWygRY9GS1w7V1jgHSyfe42meqahczdQAkbZqKzenopE53",
  "key4": "5YqCjZgVfobz89CWgEsoaQWgnu4VVKeN9iAvC6rYYxEZQYL6eiHqk5ZwidG8gTYEX6rNzZh8DdeTfJHVAo68soFm",
  "key5": "2NDJAu9zjGDDvJSQ1wsaAYpVMtHTAq57nTwqKwzufJ2MKjDQ8ShYXNp1mYmm6jdgDPo8MEHLzKLVLzGGbmphU176",
  "key6": "MbwFLaDCzxVYxnfpm4mA1DG79n7xVaaMXAUEpbgCtQJKqxw7EvuYHC2gQ6ZuDht15uovRbGxUwdxbWQEFfVr9uF",
  "key7": "3wAmeNZDScUESWevmG5hvXcCcebthxXQJHJz5tu2CBEjubxiUXFCXmysbWAwRQSQiwhLXwdFoYtXA85jg4GCQnxU",
  "key8": "3N6NQRonXsaTmrqcwxcR6TmqVFZWQzZwpjxbUYiwSoYqUhPwtmomgSiNyVBvsnueC4rDxiJ4AE1sWkp7hExGA8pg",
  "key9": "4GNmfAeaKPnktCBfmtnWKJJGmStw7395tjjCj33JDF1cAUPn54cJAqkPPmNfbdAjK3P4nEJd7j72GZS1cemZUTeb",
  "key10": "45TdJtrGkiCHagQxScPj9xKxTe5f9JufmsdFi9LgWFFGVne7vSZ9U9kL7SkQAZvGGfDaUQmXcqNnXa4uVZ8NkUvQ",
  "key11": "KWDqpZ4QMhuepZbLdJZRwkLN7Dd57UQzog6Fb3ZwMsToFwHZwghK5gy7seDF5EwTgt7diC5YwrYZk8hvEB95auP",
  "key12": "Wu68VJXZ7JCbP21AtW7ZdWPSV4mGrSPzFMxf8K96e93cfHQPPT3qFXk5c5oonjc2JeG36yRH7zX9RtvjzKUfPfj",
  "key13": "3VE3JvuME8XNfTXx2TzHxRaMhFDUnEyJ2jg1r9NH9ASP5DFAoy8NJVStrvKmvpUzwBVetfRWEQ8DD1gHpsin9iDg",
  "key14": "3R41o2r3cC5n9w8oYzMCrtJynZYHE3bQhz9h8HnVA5DGcTgwQyJGYUK6XkHpv9ktncKhjFuWN8VYKUBviWpPpwVU",
  "key15": "D7vaCZ6ysd9JjQfVEz1CeokCVGNLpxVoNvvcRofPTsbdDkxCbkLKkmC4uT5gF27oCxXwmqPGbRFuZWVcsSJQ6gd",
  "key16": "2ahemeFeUK7o1xMWB82hHJLqexENg4cKGPUawcbsruLGHmaKQoYqBXkAXLdbM4EUNWLqyxUnicaAMXiKJkW5Kn9g",
  "key17": "5AZvsCsAj8scH6B9XPpTXS2oq1ktub96Bh8xrb2Ufa14c6FK9R5CNwZAfXGGQ3zSUBqfWtnsdiUgHg32StpoMHna",
  "key18": "4omMgUfoeRLwB97hWgrqeZfJPYMMqvjUQZd9DuTQ4eTMEqP26EvefKquamM2r693UTB2XX9Tot64BAKs938KZ3Xg",
  "key19": "RwbUPVytweF6HwC2Kfj7RiUKLS87W1dLmWzXbCbPdcfMe3Y3eCYfQcNtLSS55XoFNZZdRHsivgodkCA94ScCUQc",
  "key20": "CKytRXp3ryMvqnLbJA5D5geaVSsGdCsEYhrAozBWvESSYy7BRxv2rgt5WQV5AMtDAdzkEDLvv5sBVYecdRsDo9R",
  "key21": "4FAKByXE6x9oV1Gkmc6J6PX7913AGrPX8LJ4VNLtpTu1ZRn1Yj2RaZ7336F1n9B8wwjY4rYDBzszMXgEo95Mpert",
  "key22": "431AXDQXNmNrYGG55iD7D75nNVxfQ8o7ASPpVqbZcNmR9LQHuuayWRbJz9ieB8BsLWeojT1wWf2aHgZzzKFB2DDh",
  "key23": "23orPK7jxb26AfsTHi84FGq5uniwokWayR9u2rcu4pLW4seKHXpzgw2nx4z2u1rEMMfJa4vXjLtWdA4YVk71QqiA",
  "key24": "375gS5R1XNkzvFMy9FYQqhvJKvNAgyKpQ4w1cQZDhVrGcRZoiuJ5hJGvD7NPHyjqVj6VJfPQgqPC48EmZZ6aDqWG",
  "key25": "jLnCU7YDnGGDzg8MyBsjUZPyt3EwgWeToscpUCQTZJQLuHxRgbY3WaPghrB4VwdHSNtKgcszKAaxC6WS9DD7seb",
  "key26": "33Kcxs4Q3LzudTHeWTfiyjNYFoHW1b3UJKh4HdyfmptRDWGnvuXiBYRzDzyqguHr3ipcNTGtLKtbspNiS35g6tgF",
  "key27": "ynqEAwXQxGGPUgXntAnaxoJxeS3mkADGTP38Q2WnjWXymFTEgEDP2BaqkxuhW5hqqed9xL9E9z2TxpXmnf836S5",
  "key28": "35SwVvhmwyY7NbumWz3oCpHwXjeqCwfE8yktHE9fugDHpGUvbncMFM28WHTewqZd4dEkS1RJxqmNveg6knqp6BeU",
  "key29": "64ykXALvugjCRMETnCuUYb4jUSAzhqh8TWUAcD6Lj2bAqGVRDUUrwKiv4PA896bhXHjzsKiTpzhuYdioB7GpH1r4",
  "key30": "2N14T1aCfHZmCVMuoDtvEZsdnHrcYwxHhDMGR3tgXM1wojMrjpKSUqaBhwHiDX1fm1QcxgBwsATmSjNfvyHLYed6",
  "key31": "571me35GX7bXNC5w1wbDU72394L29VyFawBTukA8TCPzar8o1oCrHYHyzwdcU8aPPVdVvWKFrwMFXBdFMjyTWp7u",
  "key32": "kr6qqhVWa9b73vCaskhM51iXYXaeJdjSbDB4or9fU5e97tLFaQDqpaJ1JH59UiofGGQGMYmPopEPfiiawHpgsvg",
  "key33": "4qSZYpKsa1iVBFy2XPqsNHv1pu512sTvGFcHR9nKQqjmms1gDtapDaKd5X9LBu2DP9k6UX9scqE3tKeZwssbPudL",
  "key34": "Mjxx2r4SB9C9Qt8Cx8QuvFkBNQM9yDEzcMu6aSExBARrB1a9LreZDpB477eco6Wy1WfyGcdpwwFqWwmRGWvY6WK",
  "key35": "3iwLZv6imveyCw2WCskJXuNpdrq5ddx1JMm7idXFrgRuEEwuEmF7drwXSJfUv7BtYVWVWNfUogTp8wAofps6qWyg",
  "key36": "5PwNkDNY8FiAEAuAvb2r7gWk3jFTA2QFaLMdA8MRMpgw3F7GfQdHPkixaw1Fo6qN6QLaoZjEP8FD7bg6EdBVDm4A",
  "key37": "BVRiqVF6jgU1zcyYqHvmn4tG7KoKfpcDU5BmPnTuyHRfRrWkfENpPiy1fZZzL2a9nJbVUibywURdSdoPHyXPCzW",
  "key38": "4Hi1nJ43PnWwcJNJSSuHoZfyZgd1rUhWf7Aguw5QBGuYpUGPEMyQYQi9rTBaMcPErFjjtboJN5jpjLBcrNyQSA11",
  "key39": "5gEcH8Pyhr9fux28Tm8iSCdqJzPKv4h79cuZzsmLPyqYC21mceDpWVYcYv9orRC8FHm9SjcuJJkhq3D7hrDR7Aed",
  "key40": "2tae7feAjPqf4LVWDSQwsbYkuWhhGbqx35xReZj8bYZzTJrmsFp6p5eFzgGw9phNZ3Kq3G6vdSEgvHjNz8WbBN7H",
  "key41": "2GLYoAfWrtiXGLkqyPT1D3QcADbWatTFhkTsZqTonoPgwSzW6XLtMHd2Gy4HpLYivV15XoGbiTmP6ueGK9VdaDDr",
  "key42": "3HsUsR7oqvsbkJDZ2wWoL4vu1UevvAMn1Bgi3XaaaQTmbGZH4m7mZjmKHPKRP55zaRmMymnRf8bwW4XYXmQyX38z",
  "key43": "57aBLacx5oeVFSszcmh1exgngAtyHigCWjGqkd2nj2PhUkT8rwu3HeHL3NKZovXVSAQC5hGbJyCHAvXxqBydnyry",
  "key44": "2TaTfoDeN6fWi2CB2PmmHZhaJe1bhVZq1bkgAKmL5epq2JVtYxdzQKD9eey1jAcoRZnv3M5cYzCNhxaXGvjX922F",
  "key45": "3kh8Z3HRnbguHD3FddwgxofxosqBuEChN3viE1FwphrjVhaXmc1cVTFiB7ZejJYxh7cHgpzNW1j5cheahdBP7vH9",
  "key46": "3T8t7ydBJJBtxJyRbjvCuP1DshZB9eDtddprPkeGJ4SY8BX2nEpxs6EzFWyAiiCFpSkkKZbLKwUHSPEsZJ5Wbqa8",
  "key47": "2RxzYLE7NFz3sWbQoUXgP7jtrFw2HAN8X648NC56ZHPn3Q87imKQfNd5vLRi83tvj597HuGkvtiHxkoCWhNtFziA",
  "key48": "Ys8XbHePcZgHRHYuAZN3ir8nSAft2HLnj25C3ESjQoGsv5ftjtmZKMgp2NJJECg8ZW7zJnLN4RRGyx6SHx8ycGE",
  "key49": "2i2B41HncyUKgXzGUk5TJoqmBeie7JRRqeYf5SaUpq1fr4d14YuWUu8vhHpL1CUr6hsE1kaYfMPYwxEpaCaTV6RQ"
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
