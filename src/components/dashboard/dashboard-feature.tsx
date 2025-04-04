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
    "3boWBtB3TqmRCchyyjtJGjZKk8dTwMq99kJu9dqYYb6D9mhHx8ziMSJFXdHvn4fjuCzqEVGDghzNSmhSZoKySCx3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "391pnG8jAkisuHxoHfhjbiC5FBEdNj2zkwRRGSHpyeCRBiB21kr6CPT3bWznRBp2xtuJDSeHRhpaY1sUyiLPwMJy",
  "key1": "aPdNTDV1km5hySGr5w2kwY4SpSr26CNmw8ndtsvk4K48Zs7oih84hBdGoe1RbkmkdLHDdEFX2MCAfMoeX7V2xyG",
  "key2": "2ToETE17LR9wbHJ6YaxZvHp1pJ322vjJyNvXTQSHcKgSVtAd3ZzKwXimBvufT9f8rQH7U5TPiuhTzKaZG9Yh3WS9",
  "key3": "3WYXSQnXmbmDSM8wUkps5B4oHBHDZ8hgWhGrfkFdjhfBu7gpsrNj9TiGF2hQKzXmgTARuuy21ycv7wp4Qujqgjit",
  "key4": "4YkCgBoEpTemKDGxFE7xjy5WXWWofamWRGpPZxf4t2LAS1riMDRixFBTn6W5QEMxzsVJCBrPYJbs7nBS1id9rZVH",
  "key5": "3eHJ71wEjudM1AxXbF7H1HRZa7ShVHFQirsSsu4ViZrtYoF1snfSWyf5qBLNHnabFUsJB1j3zjqbUtefQ9gmWyGb",
  "key6": "enYuo53xVBdpsC2ah1UDCzFKA2Pj71bT9atQrJZm4g9zPjaoi9dV4RBdm8X9fxscaMLMp5567zXqFu4Mn4xmVfp",
  "key7": "XGBFMfhBY6xFnrz8cEUhFzdgXkk5RT1dy69FyoMDu3dmWbjh7yRpTumQ6oXXS7B1cn7QBi5THUXLRVUGNTJKW6x",
  "key8": "3YnAH2sGPkukjwe3PUK6HS7SGidCceEm6kMNbhUA33wNDLNyLamMQjXbKU2wzBKh7At1ohRiUrJkiPp7mNkTcMAq",
  "key9": "4fGKXktHTJtxn1BrCxdxPKiGheL4r6BLEZLUR2Qgdcz2gmTgDWU6ZghMtnLBnVXqkVWeyB9SZ4M7PMaS1vrGmnRS",
  "key10": "2vQ9hET8tPmCjEaLxRJyDwy5ZLqKXpkZ5f5a4JvR28J1GkzUAT81gBJThqxqXG5qNEWHQd8DaZfAsYDGLMLnt5e7",
  "key11": "38Y3XMvzf7ANfyYJzrbWPihQXJfkpHyypxmoK2wkGuPo48BdE474HMJaHmurjVvEBbzJHbBfh63AUBvb5wjAXqhi",
  "key12": "4CsCvnoWKmtpr7EvRqrtgx7WGxZekP5BFT8NhZLeHCvYnu1oaefa9fDJgSoyiWV587B3Cjrui5tdWo3Qwmbsceqv",
  "key13": "2HBe2mT1NziudtA51NjJdVSUgPA6CGURFYzDbCsSVBjHW9ftN3DCLAq6JyQgmPebMy5hiT5hYUwPzJJax4RViUiN",
  "key14": "2sgJBMWr5ZGPNc5HNPuViGLrShrc8wBZes5dDEUW8T81wLKovWt9ot6fh6pq5AMjjzPazHsHexdZrJfei7rCXrTx",
  "key15": "KKKAgfBj3pgiGomkbGz9xkRqX3k1nK2fMLhBpxu5zM5ARZc5yvZ2FhnFutxAau5JbVMtFNr4u4Wru7F9AUCp2z5",
  "key16": "64Spv2vNfQ2ERcAdCWA7tXDZtHHyxyapYoJvergAmxW8Y9jJKSoVrRGKRLf5zPvgzrrvCkZJp17kFDZctETtUz4q",
  "key17": "5vnij19kvpt3ponehUG6QsNchW5WH4pPjs6LpiwJku4e2P4ewonxdGpMF9oMv1gKomPQwR6Rj8dgwTVKZtH5XvNE",
  "key18": "3dYS13sUyWeg9nGHBui5JBsenr2v2GQPXX6kWrmzrD1jWWonVyj7EhCRq6dAGd8xGV1DUYny9uQ6pJ3VBWWhtYoz",
  "key19": "37sSMT1vULi3cUWWpVN3kMQiW2gkswRN4syQJgouirrGxeY2NPJYXAuVcBHtwjfCe28TNVuMCazRoC2Jy7YT7TxW",
  "key20": "4QkPvDkgrmHpU4KrLxchn6tii76zoYnFYTkBNVZ5QqcLoAt9yfGQiehz8XkmhnE8jMDeQPKqqnmU2WMctoYaeejT",
  "key21": "3YLv9CEangEWNKj1jcbQ9Sai3JgSNrj2txPneceyUyPE4qDVzGhbJ6RLoe4N1qULbT8kktwTbDvCJBqsHNjSPcWH",
  "key22": "rgAvLZArCSJie8XBwR6DkLREKZpLsuJXigCqRMNqUb5hKZyPJtnfH6dTRP1UqxYgy1m6JfeMDccUqHNeNENKbGj",
  "key23": "58FL3R3DJCWUiUT19knzc3y6WmfDsfMcDU8hBdtSvppiuryfDzACDQM2fLavrpMa2SouTHkMNpCLS3GJY5JXphat",
  "key24": "UCA9rV8H11xXUbcnt49CocphFzhpxgQhxG2Wvivi8dQEiWcmvShUAe4HyERB6qrR1kYuNsuttWX72PjeFLK4BZC",
  "key25": "3fopZaaSHhdyPEQShakZNxK8yX17KkeukcBQNEPvnxSqFnGyXgDNZz7kNATJdwd7j1UZPVepJWmhqgw1ApZbigyB",
  "key26": "2AN7UGJqJfeceoXe32E5hwuvmom5evAT6jnRZwBfNsSCZGLKUtsSLqY1L9JbvoQRQ544pYPpCgg6kCXsXMF57ChP",
  "key27": "3Tgyppgwokfjxb9HGbVmgFD6KCJHUjTbQqK6hJVxJqCLbqMVPU6pMhxoRphaURQCh9oi7PyojyiVGaRpD89WnMVc",
  "key28": "2AA1z89X3ebrVcbP6sMamt4j4nKrafTwpGkdAngJfby9yUKJ1VyXDGXVk7PUwcmjiH8kSEajVjMy9m5kqE57aC13",
  "key29": "2z79oAE5f9SyB9WY5ZsbEup7W3nerLiqPFRT8NHpDPyrFvn1ejNhUmKoQyLC8zaurjsMDTa4ZaE2KWNuC3ccY3J3",
  "key30": "3mTpnQbiSYZ2i12o8EUzKfLemisL17GDETaE2Y27hzdt328HDEXnLeMyBzDAiVN93EUKm2cSRKSavneYqaVziSsh",
  "key31": "59JrZ9tx4oW4dKwcNMpLQBMnsdt6DHTFss8eTZubKi6bPPCsnFZDe2unNguFEpyPx8XXS2fKeoD7rjhPtHjdamX8",
  "key32": "5vSCiNKKnu6LEPDGavAvQrnPTbYz4kgpip7vsK68tf29oWy9oFEcKqLncnKkCWsS7pauaGaTQ2TNUQGeifQpFVEU",
  "key33": "oYsAQvScvEBD83W3LKvxWwkMp5436n1uQy6eBs9ZGMiRTJPEuENqdSU7x4L62jyKVjAUspFb8dSE7MMkYkC18aY",
  "key34": "4xJaZ2F6R8AqZHDSKyStLua1boZ8MP5PSkYqSHio6kgHC1kfJ2seMGivHHhRX6AbKPDDJiCz9GvUYzDYDB5KuBL6",
  "key35": "4vVFsecHcaNwgoh1yxzXmUr4zL3cqRAqo3XEBR4V32RyXZDrMwvUARQsvb17KdaEXdW7BWfWAVmqvE6yCuZmkpKj",
  "key36": "2P7fDxF2Cq8fTBrpYbdLSugH3paL3swpjpuxsEMxmeT88Cxwp7saQo8bUhUhRyy1TGAvozhKYBQ5Ydd3ASj8cDUr",
  "key37": "5WjFJgfbz3y1ASV7oyQt7L3LtUMgZ5MczU96h8ovkf4GEFoNzunRy7LDyJnDii9RgZ9QqZEVVjiL2EFhiCTCZKS6",
  "key38": "2CiZgkpbKEtjc5251JP9EqMwfYySybMFnm5kNEoV6ubQ1hCCjFoT6bYattWAVhHW54KauPpnHc5sS8UPg4oJhUBD",
  "key39": "b9KCYj2hn1S2mxmqSYRZ3FafWgPZ8RERghdonSHm293Hy1owCfzRYPAvENLP2PafuD5nmgjXfX4GrNT8ha95iZM",
  "key40": "4b4TJgj6kGRyPmgkzPN1NE2RuNcAdXBziWS8WtJuyYX6e6xNGVMVPwUex4vnCSAeyVb1V2TnGN3HPxSGELhnZemF",
  "key41": "4xqFZFiWvmeRmRNQzFNeWZeLB4XFG6r5jssoMeZz92zVyBAYYPd1PHK9aVCU5NMxtVaMMzoeWjqxJdtj6WPY8vpm",
  "key42": "43Cs7RJpf8j68FF9d6koSWjgJJk1XvEcgMm34FUu9BZbabeYUAhcGgjQTvyWp4dwhae1YxBnwdBjSHWFWpXge3Jo",
  "key43": "8wRDYpds3qrirGQ6TuSobq9TPVYcRn7ZKSd8NS4sTeGuAUqXmJLVm3haaVMeHFZZhvLKBBXgYorXuAcn9DzAkKH",
  "key44": "2M1KqR69XmAxpCxLP5q7DNiMFVo444BVvcc6MwfMPdec6ZiA9CnGpXZAfNaNG6mvzn5bv9DMfGvCSefjmRB8kGGZ"
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
