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
    "CZQ4z5hXvzwUsp2P522tkXjmnW7316suoMekVSmt4remszsDCmsdz7mMDAzaqMEUaUyu7axDm1n6LzgBgcMjEAX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8TSXhnCb5VriwhSmoUPRkvCKbPSLYKY3BAFd3vRTkxK331mDKth8bWToGm5p6485EeSWdDXXCGakzjYWWqx75jR",
  "key1": "4v8YrFKeWXBKjia9jtG9MoX3pN7NLacaxqz8G1xgdcKdogsxRtKeXgHrDTTnqUFmSdqLUxyM5XZqsPFkFnDvnV4V",
  "key2": "5HAdV9sX649PM3Xi6agMxR7jvgK92ApnNXFArqLrT7ade8f9q9VMYYsnuQA3zNg4wkrxgCivEzcJGjCkyLdMoGFC",
  "key3": "3EeBz6LMs7cQ1MAinG3FDBYyNp4bpRHpWcKmvCqoJwapRZvWzNWLLyjFY3u3CSRfULugg6kZVmDjGABhgPkm3As7",
  "key4": "4Y7oHWPcRtpLJy3wQqT3ddFUPd1x78Wv1ub7W4m8QLkUxNUCVcLtCkAv8xWVeEF9KTkGkrLzQw9AnJXfYmMNJtuD",
  "key5": "2Hbj91dSTUpG4QMpKGSKo1YYAFNe8tzyLsbsDAyFhbCeBEgCzg5UQS9zrmoLbpn8nrJSppbW9aTUJZda9Ar1m4Sy",
  "key6": "5DP3h35vaC56DM4cyMMuapeRvFqGVAZFiEe5YqZSmSM9CiCkzEVPczRoM1xeoayryX9gHSBZ3qCYWZZsUtbG3Axj",
  "key7": "3xscnmBTRUUdGTDJhv6Ehz4AnBi1JDfCKssDS8uHc5KdiVZQ3j2CECrbTs1kg6M4i7dmNZtptJfQbjgag5ifHrpw",
  "key8": "5aU5HDhLuVErT8HdcWyVLnteoCgzhyfKzJcJxMPCxm85XPj7B6mniEzEGnqi9iVuX6nyLhQckUrxXUCagRaPzG51",
  "key9": "3wtPd3JnWT3xgdrf1Nt696Y5B1N75Ysm2zG36J9CcrZMKXVTt1rQtkypGhXyZs5cLhFWPuXpdBFrmpdZUwZEaVky",
  "key10": "5vRJdVN6sSQMf9VPH7X2P7b1ANyyYnoQKjV4zpRht8LKmopH5irRgGUhjnqwyPGqW9ZbLPr3t8qy8uUzq41fUy25",
  "key11": "qEU4kcmBKEc4Nwcpqj7qfcXYww6jgi8dRuSqPgWcYLMCLxFjZqifi29zwngFX2KW6uzwCEkmtriFsDSN5joXGWi",
  "key12": "4oNu2dKVB9ToJq5VwseTv8emYk5VHoA2GLDpzaAqGgB5EUXz9Ua7DmJCZEjzN9nmiDrASGBXdVTXf6WRvAc7JQgq",
  "key13": "3aiEmgu9fATMoToWSWTEAvDDSeR7UdGhbEuutWUJjcpFNAJ6Gv4GNLmGHykMpDpUiey1S5zKqmohwg5QawdX73rN",
  "key14": "3h27vZGJMLGR86fG29mFiEhRRb23kCNANTQ9X1CCEQQCMNgyqXMuRUFEGfSvjbyHeJ5fE5wT2DBtmW347zfqsDjL",
  "key15": "2txdGqyJzJiVSV5nHvNMUHApZB5i43dPv6fcRYMXGGHnggKtDkfihSuUQSFZfsTErvc33anPxqVtmskf4zfmtknu",
  "key16": "3nT7Cxt9NsWUMcHx86e6QoxGusaiJ6A3wbJuoH7qMnXxSN2GAockMfmztUrhtdSKU2BbyHdq7AjYCeQDy1Ab5fhC",
  "key17": "5apPoajQMVwiFGTg1CH4Ld7XJMbzKu3h3JnwXdzFUVoKG2aBijCQ5aBY7mqAApeEX5ctMDeqgK9qyYSrgRsfads5",
  "key18": "368o92YpiZP9Qz4FpQZezxsvfKc9TaX7fwEWa3YeJU7eQN4bffF22A8TrckTKSNBjZmnCq2CMsCfpv44j11L7a53",
  "key19": "39Fkujmu8yd9jbSSESZX4mmapZVkbPT37STHnJtQiHyCie5pLA4zj3kH7BmMNYoWdZKogzwd3tNrr11z52t8eeGp",
  "key20": "3uwVLhVmDBvpehoUbyUwRb28frHKVth63u99qrobj7C5NGe5yREmjKsNAPupqnfspUPsyLFK41faWuteN3PkhbWU",
  "key21": "67diGXBTX9tyTs7w7GKwE1hyV9yypYzphU2PsQ4tcaKSck44QjcdQJePkDFWkdhB8eXJPeCwTrLmRr9L3KpYXQxh",
  "key22": "5LTKMrpwcQzG8cKEN6Y8qNAoWpUxhGHoaqb9mzLM9fjJLoGtua9tHy2WVZm2aihQAvsEWaHkd4z74KVE3JGpFGLu",
  "key23": "yKzK5UQcHycLypTR3hRgj7EiW8LmEe7vpKh7QmyN9aug1jX2hCnnTs6JNa9FrjsgnJvfSKXAzZTaRqXxRbGyZu3",
  "key24": "5X9qoKcrhKmQ4Bg1KG58phv83aiMi4ndTkeoeMS387TRKC4A7R5Vjq5mmKZWK4yAKY3q7sZvRgtJM3Bj9BvtAfy2",
  "key25": "2pZumzoCJkoEj12vJPY96Rmy2CS8YEBozPAx3zdgyyz6aqtkZ6rK8c8Hfzv4zSiXDK48vojsxumcNqBJHadkQ9YL",
  "key26": "31B2PQRh5taAbiHZKroX7zNJbNrWQTzQMsE2Zfy9pVBcx9Kqrn69LBfYa2akJ5x87uQHwV8W4GZSzhjPvMcZdBs2",
  "key27": "5N74kaarwkhRtXUs9KzquRiRkP2GoEK1DNhKEK9azbDfY8CGywK2wiuVkT5e2Zp74Na9vc6DDZPK5sJjexVsdkUC",
  "key28": "RrcQZ2yLDNuspSiFekrrsKtx4AAiCAtuTRmGsvKtv2MFrRbu46CF1AvvvL6zgtoAizidZ3Gu1MFUidMWnn4g3KV",
  "key29": "2n8waJjzmhatzjso2SkPcuaXhHrM6xwmsrtpemEbj346TKc1Sxhs9nhQR57SJhKrR2QVESRrU6tRtb5ib5N9nrsn",
  "key30": "2SaxEqwnFBngPtV4okuHejwLB3kmQTsXZ3k5F5K8TkyVsGdimyCUF4MxDxW5zThNuxceryFEZth1vxfW1pCAE2rt",
  "key31": "4BYePCSePvxfLzusk6jbTj8Egdx7PWrt99JknCLzNvdxiHokmwpVauebRWLUnutT8LFSiswcfni8k8KSwS2EA28F",
  "key32": "4EoR8ZDiwNYi61nW11uvWzCx2nMXdHHiFX3gCCFMDBAsmXtgPPXMy1fspMXGNaH2C1WAu4hsLEczWoYHKQyUw4bT",
  "key33": "2mXN9Pu3uE8wLUhGTdwkQq8squWgD5QDzz2kkjv1pwgjyNxJrzLRaoT48sP25PgHvaR6AY7yRDK3BvGwbrUKtmAh",
  "key34": "5X8DWYvvUYetPXVxa32FnsfrCRoy7xwSjadkoTcwdm7w3kFLiybdSVpcdcXJrodbirUjxHVWNa3nvcLNepaSpScD",
  "key35": "53wfqT1asGFSnLfxx19UzwEsJibtsYhoSpbZQTGFf8ATibnt92F9GnLK7Z3yP5tqvr52b3LmsybRpWgW5gEAjTUW",
  "key36": "4RsfbNFHp14akvi5rVSH6AgsKB12vGLZVtUMGiqV7vE9D8Jn1GiF8F16q6TTmcs47uVDbT6XsqxGx4VwaFcyUhck",
  "key37": "5gLFEbvptfqUzTbh3MLR5498uzVjwbEYgpSCfBZr2nf1TvmU8mAZrpXgKDXHnG54TyFXzs2Ca2qfsnFZ4guskGxE",
  "key38": "415fVZpMUkFg6JEqzh52mycahEed1RfSyZzUsZcEbaAFyb4UN1FzG5s6CueMgL3WFi9gBvaJkAyVvyEFmyJ6vxx6",
  "key39": "puYeQjhbEcNFTSiNMx5BdLQiBiQeDy6wW8bqbxPBBvr48uHwaVVdMznQDw8PVtwZtRyXfbto7RLYhWUhiznSXeG",
  "key40": "5xpfhPGAJjMKRCeu6LkKxnRqZrrNmcAMK2MY9xyPJdGz3sUSmdwwkE6TxXvR9G3tkNB8esvVDgSeThp1t9Gc4nSJ",
  "key41": "5f2cbDCsh8MZej7x92um9s7X6q2QUaA5v7NZJNAh8d8u6WHyg8t3YyLAPYsa1cqkLbQPMqHKeJSxJkFvNB5FLaha",
  "key42": "4McHbM5BDwarGEjZt5xJNnuESRpRdZwPh8pvM29RWjj9Hoc9jT1T6yeUKKQZP8eeMYcmc9nkDpqfqPVJ4q7mzv3t",
  "key43": "XhrSMZUm5vz7iZep4uWQyYAbM293cUs8hPsSpz8ZgtQBBpeGXJ9JThaUCPxB7iVT1PjnwTYKUPcefejsuU3dwKF",
  "key44": "mxPULt8T8UXywT5mSFJsq47a8AdZ3k66urpQ3yQQbbPtKvd9gRD6z7sj868iTbTXgyVKreqessqZdMo14tHntbV",
  "key45": "aiFo6uXqtDDZChMqkouAkLZ6459cifYAXKww1R4PNTe2vkQrSMayewf2EVJ8hnmgTDFmN1fvZB1fPBHNnbV1LPs",
  "key46": "J3DP58sRZxP7JTUxEGQgiD5i7NUmsC6mcdSTmTt8kJNwpjYHrjgEZeoWN7K5DBLkyRGZQ2osD6zTjNe3EW5PaFh"
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
