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
    "5jU9fHYSRKAVpm27a4z298Js9WQim7118SJq32dPezG5ULfCNVHcUs6G74xdor9NaGFTr8jLJtx2X5dryts5Urnu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BhbiqN3YNPqe1aLj7MN4nuDomzTWDywCNSD4ckKeoU2iVu4vL3wY9ES5zHUWnHeZ788wrXQQthX7W8Paw4CxiHn",
  "key1": "5YUAVRF1p3mzJbEWYapaKqMzLrQXpbB1gL2csXxVWi3T2mCP5wZTKbN4Bor657VeC8CExEsatZH8HbtB2PNxEtML",
  "key2": "3q78txExvscQr3pJe6uhVR4FskgG6PuZxHbk2aDDrP3k5CGEo1XGEBKyWZQZoe8FwNkDznWmkANh8zRUnoV6T6Kj",
  "key3": "4LiiPZu5QQ8u3CFtGC1YNoC85mGatciHqPBEVMjDcPnxQSASWDX6SLbEKg83kp7cEb3WabsMjdjJM7hkspj3ahbh",
  "key4": "5PCmoF5jgqRn3dxUjEQ6CD7UdETNNnxPqpTLDWMoA4kgWXd4FgqpJ59V2A9tFKafb4yjkxpuciuh7nffUhrgC9az",
  "key5": "4SSEffBe9sDfzUgbtPwShKguLkpgFqnFySkm1K3Vz9NyhTZCmNwQjRuyRcjMMrubtZdPbZDRVt1z7QT9GpXzdJQy",
  "key6": "2jXEf1D6dm32nwmv4GpC9rn3LNUhzUYJFjZ3nRsqxJBezNq8RnauLvE6XjCzwJJfrk1X9FUxGKNfrERbaxPVuLYj",
  "key7": "26Gy8ZTyp7rs6fRHAD8Bt9bgKqFSVHtoJUVgWpunDY9JgujS1jYUPBnGrEgP8eAutZfAYjQ3931rAsHB3BrZj2Br",
  "key8": "3ffknxt6e9nhvDWf9BbDiYA63Xkt1ZA1U2WwkVuWWs5Kq2pHwddYgGsiVVVmsEbjkufD768xj7iaT5ppMx1kD1YT",
  "key9": "2RdJtrsVLEUbbMup7b34Rzfi2j7NaWeyeUWQgRAk5zhpq8dtjTKP7gaBNC1UMnV9RuRBTHm92zS1QcouskQyBCyB",
  "key10": "5rdQTAxxXhE1uHa39B5vYCQYtYJJgt8uMH1sVfcbozzRUiC6xXyhmL9YXkXfjBhbXijVMwG6K7NzfcWEAJoNmV3C",
  "key11": "5ZsyJSrPjaxqkUHeh64Ejabx1mqxfYtojoNoBqJt3okZMinJaqgfYJ2f3qajYB8VFwpKYeEYmUe3rxUr4xrZzCPn",
  "key12": "4Sb41Dv3FGrt2WxTvFCv7VaRRhHtFQc2fFozu9tpS4Vr51zFFMX41LgnVN2tNiFBnj2aTryUDFr2yokZjgFEkqLM",
  "key13": "35YSKe4Yvv5GAVKqG5QLy3rNsfCMwbGw54HBULquYVWZU5GecQAHhkuNE4sJWyQAEqefUoLtLF2LBvRGRt6Y5He5",
  "key14": "3Cv3hrihWcvETdZjKGrMyHMHGMrXaUnuxMXFVnkm3QzASFRqBHhhu8v79eTskKexnX45SH3PmQt35ZfcUVUYajdx",
  "key15": "2Biwq76bTcR4MH2tNPiiyfgqWZU7KbzFpwxSr8ub3UrUYPCwxLYhSVVbyM6zX2SeWgKk7nTtn3mdGiQx9VZENbaN",
  "key16": "4Ggn6cL3bbazeXULQDW4UzsgKrs2aEAJ5x9whvebdqe73ZegJfryjwdDUAGH5cWg18hw3MCyidM6Zq5QaoBsXYMC",
  "key17": "KV2sKqWJVNhZrRvWFnpf7N1uxtHTrAgYnGv56a247rwD9Rin2Q7qidWWTtroffyDe7uwbiz2sUpctTGd9P628SM",
  "key18": "2sQ9CXk3PDK5rLvB3zyiBp94QB9mRUxEPvVaymVAArytNGNtD1gShUJTg4F9uHbDQGcNyXfmmAcn7fmh3ounXNFE",
  "key19": "2yCBAxhKx3BFeE2Y4JmNawaEQTXjD7yLy4WoCPBtrNFcUm89aW9ieHRdomWmNJPNSoTMdMdRfMdSXCFr37T8z3jh",
  "key20": "Nb4StVtBGaHb9skybvGwa1c6UmYhStHdpquq7cMd1D6UvM9sMNakGN7pxhMUHnPHXkJQ4eZj2SJjSQEv9CkjatR",
  "key21": "2ZvKR8fgcrjxn6r8qzJfr7jZX1rGoUeL4RB9uLJQHcBBCPvrkLkQzEU32cnoe7YFwMxcktdswWoLWq3iQA4vQJ8m",
  "key22": "9DQ75fUTreUy3r7Z5aHbbkMMFjiMm1qU15QcHhBWMLUsWu4pySDGe7fbxtpLBZqmhGHwLZACaHRnWgigM2fpGnY",
  "key23": "5ETcFM5Xkem4oScT7i5z49GMx6YxS2tYaeDpMghD2p5MqnGs5fhhQ8sWmuR7z4W2jnF6Y9hA81ijjffsvFkVzjHz",
  "key24": "5FEvLkooy7or75VPsFZYbMq65vTbQbzsRruDr2HhKbKBRJLBRi6xhQnbRu8NJ7MLZPPTWRsh1V1HaEXGLjXuL4vJ",
  "key25": "3GzzRZcwHfD5pD3zhLnd7ELdo64LkoZbgQUMhm2DuNdRw3ZGktJkNJx79ZCsZcvPdBc4bBUAPCdem18wT196Qhjf",
  "key26": "2KRJASx8R1Ugp3sECQjtcFhSGNLm13fbQtj2ciZ3k5rJW688n1k9aAnQFe5iqWybEyTt1Z2L8ZwnT2Y7MTvXBUVj",
  "key27": "2F7eGXvAJwUQKNDAqhkqppQaLyjS9WwgQdmPLjjzWiXqNWzoDEJESqsFef3cGB7ExWcLvZoa2ttVW71ky3vGW6W7",
  "key28": "WtoDBsvG3ToFKbaW8T64RyJwLcvVKgAFAEZuUYVE5tvq4bKRkynbj7ppkMoUXCV6YA2eTrhfkkgCVdg3UufPo5i",
  "key29": "vcRpZqnCcKWyN33spM2o2Co6TRj9LwFShmgRuMSRTa5VZMark5FfhZ1Sw2ecAWPMBSK9enso6zWLDdRHt9F4iLz",
  "key30": "5a9HxsV4p6Zv9PmKhJQSodeYuGJ9Pt4xV5wARdQxEsiKyZm8CJey5rXBUgkDmAhaQVj8pgbAE3JHdbQgaGZz43Eg",
  "key31": "3aNkV7yM8Sy9dGmEyLo9XcZAGRHLRS9M5DnWUyyR9KxBeE6H1yPhMRSsC2D4KR8Q19cGaMJGCuJhXe7hdVmvnHB2",
  "key32": "wSXkCYXcjR1TUkREGwmRafx9kZuM3K3bfaJA8dgDxvsMFMTNmQb12TefbKMSkwQxhxq58BUni8uYYYBefPNEvpw",
  "key33": "584Eha138pdtTCWUfroBDBgr6bMaeteS8iRM9wLU6aFizxbSWppUQUDe7r5coZpNKBE7oypUCZiAh4rJAtDR6tLW",
  "key34": "bQPsXuerF9tGX8hyPm11iUgMTCYUTgunJfLSED4QTWeiuNZ8BhzugUm3ur9pQSrShwk82zpgu3QPZt7EGMhU1t7",
  "key35": "34y9JYYhFvcoNiAsXjxnXcL552Tusc3xP8yarueABAsZwg7yxzZiGU8rf9NkTnm1kWVbPvY45fCNjmziLBezwGdj",
  "key36": "2RzxmkAvQLNDLwiKD63LpeLzdBU4c2ftFo5n2FH5VVbExjjA9gyw3MR7FnThrh6j4oVQqWX7Yt7BK6S88177XVhy",
  "key37": "235aC92tPtmtDqUKmdQPADz3goosLFLygbHVovzb8SuWnTxXkicZu6uJX6i4TBUuyxWWG2PMp9V4QjT9bryZqhmS",
  "key38": "4Y9mqiG1AgsL39KvXbRYgakYamZebe1UhcNcMayVW52Pg39SJEJTANmkVdgxvCkenTB4saG2aUUXUcfgfUwMD6mx",
  "key39": "3hngnxmrKTAvidtQX44v3vfiPTJrW7rSsHj2z438Zn8q4cg69LynHgZDmzYhrMxbG942jR3hoXsVH6reRwHYsmGu",
  "key40": "3oEU5jUAALRq4AotaMTET5U8r15qfquu78D7FT7HPj9Lx1A5xLL8LunLqG8PyLfSdCyUuAuSfqKPkgaSUyHsVDUB",
  "key41": "4THzjUHESMdDak4ztn54n4zGRAfFqnATZT7hg9h5S1rMsLvUGxTx9fs9Z2bvHa2UyRBTzuk9ASMkxBv2N6P9T5FH",
  "key42": "UMbye8qxHfVKKVdtPy5YEsMk3PPe49shHhK1WroNVHFM3tTVoGE3aKGBeL7kXvh4g2vN8vQzcHmYGf6V3zeNhCR",
  "key43": "3eKtyoSFLUktoU5bsx1DAhFY9mt1uJBhjRgNG92FTutE4LJAcCtTqNmTgpro4RBYiPKpDaCSxe6m9HfktVbjD7bq",
  "key44": "28PvkzPdYW2ojsgZJo7vLxNZJy4r9Dr2ysTSh8XgdWbimRojFzo6nTDzewH4dv5i2tQBt1fQwmnVKHAcetoVdrGQ"
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
