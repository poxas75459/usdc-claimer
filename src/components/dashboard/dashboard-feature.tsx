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
    "4qVfDyRsSuQDVUR8jXM1ZernJ9oPHf1d7X4zAf27uLzfhJT3Cw8sACYrnQYxzGDW9BQxZenyXT6683gsgxFmCjx1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D1AaV7DQjiUFcfEYAXofGvqF7daMXietuFtqMPwyaWDsjAtCVwc65jygL81U3XwWXQQ4MGA7sAbzdNrfJjuGjgq",
  "key1": "4dMSVi7KDyXqMRTSxD2Xs4q7BQQZbowNn7Rsm7qLGNGt2MLjZ8T68pHxKGuPqWBgaEbgorkcY3fx6GhJDJawcC6s",
  "key2": "3dPZ9G9Aabh29WUp7Rg9tAjMaSo9No4vAcr8V4rHSsesX5xvvySDMKfJ8dTjKvpwsWqLR5SSQek7qxKDaSoGHZJ7",
  "key3": "QRoNbCHtLjYQrKQ7VbaimexvvQWyeHRF2pMzy1AS29ZuA5nZiAAnVMY9khxiVru7BPj4RnALCUiYz1DTnGru5TC",
  "key4": "2xZWNSBEvprA6kFS2d2axfTFTg3zFeQMoyFA3BofiRVEnMdHfvy1Lh8YTy4So2BqnshGe91YHquMsKArgWrqTLz",
  "key5": "3EQgzsamic83DsnXXNyjqqWt3NV7oJpSbDSbSKhVmSS8Y91ruLQMLAihhMhareWQG2xcqKiL3rzSF3DgfFAYcidS",
  "key6": "5xUWiuUWUvt8XXwmfbHhrD84uo6KvfKyP3T9bwS9FUNVwpP8nZ5ygA2R9JXQwon9GLic3PRGtbTBPPhZsoJ8qXew",
  "key7": "39cqVsNqSoeGnU3c8m1MqGMVJfEd8j19RoPir9JUURvaC5vBeyWKJyK7U425rWNbqrGT9UXfo3DjxzmyR4nvzQjJ",
  "key8": "5bkYQe7DWPgE6wrMQntwx28E6mLz18soUUezFCZhDPWXC6gnNqVEmQXe72oaXYXRjDKSDAhEY7bAAWbcHk2sipqk",
  "key9": "3schcekbZE9srjy1NJmoYPQz8p2pREhws1LZLDyVtgrw6kGPNcbXbX5HBvdDBioh3hYLeLbGGFbkW1qoSuUWD47w",
  "key10": "8SPSV6bJYRebphydKsgnPBmaugrhntXnofBidvGaCQgCcZQbra8Wyq14qaRoKifWDiBsYpKHgWWoUReA65a9bBo",
  "key11": "4ABHRKu7VDpdJxXgN9h3i7NnV6HfvwHs9ek1QF4FfAWyB4e25NfUTNfAGehjHrZASbMCaffGWTms4a1ZCtLuTfRz",
  "key12": "52ywzrSa6VvSxtqe3zMtJebL3vxy8hqBBpazQAcFmNu89QbQjZztRUy4rrMXz2ZguWxPmAf4fHPQhkZMwAfXSvVw",
  "key13": "2CeMbCwFRmConN1meuEHCP7oVcP1HDxC3kHtnFmx1rrGHFW3Snxrax4KegLF1TVYNE4dxGKYsSQXwjeo32sMA2N2",
  "key14": "4GZjJ5KjTM8eY1CwLnYmdht7DfwzYxQWZUsDUeP2EmGJGZKqHKM1xzS2z6rW2aKiU4J9XWZhfpWiSEyijUgSZC3s",
  "key15": "4LwNJNUMRcZwXjxg73PEeqRWEWAMF4iqeUT27PRXbLGJ2g9xQfhVjxj7WWu4B1L9vSCUDmpopVNBBNwsucbAxB4c",
  "key16": "4PjFa1pDLuNSmY2gHZKhvS5kpfV2PSySStQVkrZpVrhqiMoFQdpvh4K5BDkCTsLKFNPTTmSebtLuMuBQeQcwnbH3",
  "key17": "8DcjpiJzV1BE44zyrQhik8QwMwduV4fvGWFsmKcfftrtM8PGFuo42FseBYmCgR7KxtE81u6mP8o4oxm12WEDgjA",
  "key18": "3x6BFsJAtDy4LBiRbvNjUEMuQRAJS9C8RXx3c4yj1wGvHHaqvRL5ys5oQWrTJzWutubbNjdUk39NzukP9nAdCGzj",
  "key19": "4DhivBQUCAGjU8eAJXG4mVk1wHgAqdXZT67mMkQZFSWeyeFEJ4fm7UhGSVH6Z6WnHUcYj6vGxpSbup5b1jwMeXmG",
  "key20": "3pZWEMX2mwHE6sSd14GWCYsVYxAodPgnVBsXhokcvQcbV7Bvdz8UcGDMikyvoaLHDQST1K899y4U69sMAkCyvumC",
  "key21": "7Zz6YaWMcm8Eav1GcSfmKJjCTuMq28jbx7jvAaSe9nrArJ2CfWKiHrfA2WApWKeKAmVszGwQXRkVfEXnJdrczxU",
  "key22": "5pW5MAFQrfmL3e4AiqeVccPfU7u8VauhkYDVfBvyUPRJHFV3iMGJbhb8hTZhgoZd3t1mPVuU9F6n9TvnqobkwbQd",
  "key23": "Yh94BREcc9MZZmmamPP3yKqeh8E7w2mdmmu7Agf5sYWnLjfDGxWJthsF6YMvVfHxPXHoNbAnD88Srs9rJHXpXei",
  "key24": "57MjPp6smZCfhjUY32rQEMUJQtKUW8nohJTzCTPYpuFmn7K7DpqLMap7Zm9AhrweJCJcGAcKfCGdiYqirruUACG7",
  "key25": "fHAvaMUSskwutMuLsY3ph3SwQ84ASSF58jcvSQTCP6ct2V31zoVRuTtKFNgLcisFK2ipBc1tyAV74PdU36UmKuE",
  "key26": "64tTiLBZQtZwonDYbiJM5rGSPdKEEXctAJ8HfhQhpbQ66VqMCXSuhwMZgzi1kjAfRS2as66tDpHCMrRVca6dzyBc",
  "key27": "Z3g2fzJQkHjAMMoxasvRW5pjezteAfZ69waTMjvGNdzuHcbBACJC6sxYRVJ1YnX1tnY2FQPQvETtQN8N8CdHw2A",
  "key28": "2vFavnqj5mT4KwN8hPdnbsfp1oSP4Awm2tsEZj4SgsJqi1EcQt5hki4u2L39bv6xchgE31voYYSz3wj44tkjeq3K",
  "key29": "66vBLurijiw1ZzBR6SKtVz1S7JTwteRN4cfTSz6uNX7smPFJwxGHXg89vAfRaQ6uyngmFW3hRtzDPD5cmEfkFFm9",
  "key30": "5ehJVYSL5SFVN7YdLjT1QNX8eLZJfe6kdRSyNWykBAPGaKdx4NDmN3eiUwknXjwttyYr2QGBAy2HaC2GJh1Y5DYV",
  "key31": "2JsWVCL1ApbivLbwcvQSLomoGP8UVhssH2y1UQnfPsfvvo9S5RBgxRfo2rvSEjhEiaxZr2XnbZRWEj7fQmM2VuxX",
  "key32": "D7NgE5QrbGSoUWQWh2Z29DnzMYee1TchhEM5oPpMyL1kqG9MAwGoTstCTe3EyeeMefkv95EwBaoBQ7cf6TQ1cJr",
  "key33": "L2K6Y3YcstdcovtfxnTCSkPdPHnu9nFkQH9bDv849ssbUW6ppuV3hhFTtVXoVNk1JD43Bn44aoNgirZeW7rE3YE",
  "key34": "2K84ZwgUbejum93cAtfM4Gn7PjHugEZZey7ub1B3VBhsAupdr4ETrqV6USZ8FKjDoHv8ejsgWppmWEYi4QyDaTof",
  "key35": "5cvsNozTsuMPBzPvVUYXv9HqLiwnxc57Ewz833WhLWe3WggsmbRpM6swrgkBV8EyK6JCQEUxb8VxXH7U2XF1Py9W",
  "key36": "47LVYYhrFg3C4KRdoXqJTqmGYmDLkngtgUjG8durmDHQJkEir23cqxXortPp688PhUNzWfvbXdgAqMBTscRBUoMP",
  "key37": "5ngWWFHxpyxdDiRDt2KTmuExuQxt9PnUUavwE9TL9mddMDL9d1qU9vSnQ5Ee1UmsUeiVrPh76cmRY8Y63NXT6kGL",
  "key38": "3j9sACrNxhSeiykfEPHe8geCiuf7AkhXTrPGbzKgsrp1MqEVuVxgYc2ovV6HNEEnAPwN3FV2qTKZDWFji81GPJZv",
  "key39": "3TbjGb1bhtXTxYikVGo7uLGsRKyZaErXhaAV1PAvjqRXGvYnVHiAqBAeLE3b9mkZx7okWy1UQf5fWHQJ6MvWa4sH",
  "key40": "2mVT36aRUfpH2R8tgDRV5jnRBxPPbvcDFjMzB58bjhpWgk37ovYJyRCbxcqezTfN9xjQzjbd4ExTZ1UyjpSr5XY4",
  "key41": "mfaWdvsTHsRbLCHhcMDK4QEECk6mkK4TCrv3CA5BZbXhTffaNXmTW7W9aeWenzUqX7NgjWogvKxrRR5u7eWWSrH",
  "key42": "5Pnh8kS9aMFy2C3nvQ89Dj8k2WeYpHQT38G6zgBgUmVA9GvziiMkwTP6bLyGBscL91TSc9HSVwGWV3vHKbU4SNd6"
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
