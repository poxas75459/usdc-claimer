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
    "5cAQhREY56nPvdFbNvHLtbkK2UyXFdfCzVLwjjnTXyHFWA8jBNgoEm4UfWDdnvytUueGrYxLVe4JqFXNFaMkocZP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53P56kGhtJSfnQerMu1sE7RcCULgSHgEZVNWBzajiUXoihJZZEXcV3Nb8X7shDXJ6H3HZcCeYz2jtxRrAyvMVH3W",
  "key1": "RqyGCBZ2PYuHGoqwAFPNvBwUorTYMvQczpPgyzcxEG1BWGY42c8bjB3a1kp7WJxc4Pxo3nwPt1N7WYTPME2uaWh",
  "key2": "3ThMNpmHGkMSiC48X4WuFxWkfBH6V5NpgASTZ6akk2BYtG5KBcncacwdruHEQGumi3Y7cBhiSTx2dJhz6VmjsWnQ",
  "key3": "3snyANAgt93pGaQZPLDGLS2KTpCyarzVtijquWhwM5evRpCnP82NLWVfsq4MmAb6MiubQ3uzGcZLXu2hfKyCiakt",
  "key4": "58AohnuU3gR1u6hm8KMHgTv1gLHxKSkTE7FCHkbpNjHKqfTjqf69XQ4scsM1KPT2ADZu6qTmoX9v9oeBa5SF8nBv",
  "key5": "qhesJ3gM1QjBUYqcWDoKLUguousWa6qoBCNdgkA5BKHkAcACsYVo11xmwyTnY7wB6TWPbe33y4JdVyTP2WmsiB8",
  "key6": "XG73UTn8ZkJrSeqjYSXcPPwM9VrK6jYQvqeZAfqp7CH6hfrR3Xj1GbvDkt7JcLnuB8NqNF5jJt1hM1DR7Xnw37g",
  "key7": "2EegTx3gnf3Ww3fd2izCBK77B85ky7ETrmjkMfdtXFnVYnV9ZmoNWr3fbMAUGS7Y8goAd7QvgCStZNDwdzWACyQe",
  "key8": "3414uNScJjkHf4U4TXuwLf9fnRZYXmVgDMRVMGVuTQ8wMpC8wjtVpgAJG9UiN6TupV5QqLEzZPLTTskgdKgGQn7y",
  "key9": "4F8h2GggWaWuAnGQU9HcScTZYyDiHtcuBtrQFomrxbWUyK5YdN6LKFFiPwuTszATEtLkvinEbWrxm4A55i8hff9T",
  "key10": "3ydMSfCooXkPeYRiRA8pzHrZfPtjkY3ZFMCSr6McWAWigP3CJ3xw16zEUaC84Cad1n7cQniou9SJutet3yDBX56t",
  "key11": "3qNrMFyTCS4igBYJVtbe4RTsnzsxB8XjSBqLPoJPrDjTweq71aPYf5p8nXRVhrHg6bwmNe4VhFnZnWhyeW2qN841",
  "key12": "4xTpLhyXa7D2KdXUaoRGt2SWmJwPM37exEKbfJmKUtQopQg8XQntwYkDM1HniPAJnttPjRoHaVLBJRxS1mrom9B1",
  "key13": "4xswo2KkCGNW11wTrtVamKMEwYNiFeEVDD16vPPeoAY25XMsDNADym2y8KF56jRZGDt5qyafnU8JruQxywDxs5aj",
  "key14": "5SFHjbL9XtJ1rqsgASwCqQbFdER1aKg1FcmNDQWBkvNbqc11FkDXb9WUJpNUHqQewrbWk3f5SdNoX21JPm5WqKHR",
  "key15": "5spEAS3HaeXHQkBxsLVvgrV4qgq4UNeZz7XZA1BdobVvcCH17pE6HhRCaER2vfnYwDW6qUFb3nDo7n6R15QQrc1V",
  "key16": "jYEx53pJVm9BUXamPf1DNGGD6MXqWbr8ncUpAQ7HUUNaeEAcGvTQdv6pPYUx41Q9HoH8EVzD8Y1uDi48p6Rvkoz",
  "key17": "4C9XUTRpoNzJynNN69fEr91YV85hCdHjFrE6FfsQidjT4PpSBWafeA1XoMera1NaUYidgHcHDkFTjoqPNQDMkLZ8",
  "key18": "2KkaGfYNoE4DpRVFutL5UEVZe75bza3xvW47cuNAc6VEoH99q9Tfe5HncWVVscpddrE3CG2SB6bRgpKRs8yAHhnm",
  "key19": "57WnSFiy5bLWucqtkXhkNnozrLG9REQLdyKhLZ1Fw2XBaJrd31ycJyGcMX3vwKCUcyXz4a7SC53X41X4YHt1LkMK",
  "key20": "pa1hSXrcVwUX84ePo4hjpnyZJ43FjgASawzhs7Rf176saP5ntiCHRF2dH7xExGFN6V3aGq9kJtfVFJftrA7nHcA",
  "key21": "247RiuSnVDzkJc5KUuMbwrLDHWL18NXSr7ox8qzTkckdXgPdviWbubfv8UwZgaLoGYTZHSNVxq5j3hLxkPAZ9wnz",
  "key22": "umgwCkoBsqigKn4xSCHizWT9rDcPC3sAVBWQYWoSMBE4kwif3iWcWcVjdHjaKEgQji42QQc5GWSeVk13kda1ECm",
  "key23": "4e4YZzQpX5zMzjA9AV42k7FDSei1y28YsUmfaWjgVsok6JJkrEXGKusNKJ6H92z8avt1Yp7kd7hLBNQGbJpxrUPD",
  "key24": "3KaDfw5KSZCXSeEEUpydveTp2QDeWQfRk2Ecj5q52wMiHgjmZj5NSSSVYj5AfCqvvw7ELRHY2LUHvSjsKCVaeqaq",
  "key25": "5HGERLcvcN4qfM1skv1WUBSnju68HwdhDQRzC8HswJPiWWNegvUiH9dEXP4vu2KVwQhhCsUhP57VZQh9Zf2RfkFM",
  "key26": "4LabeVMPWMeKGRmUKQ8vgMd4en7BQibvWiNDo8488p3nFvdqq9JGZNK4ArigAWQvLGJXvegHWUQZHoZMqi7n6i3a",
  "key27": "2mR9ZRoDjt18dg6SYpem1uwVzKpD7vK4i8DTVRUMZgDsqANHBbmTQzuRZbtmV8KLuoybDmhFLZ2bX3jmDEC3kSZL",
  "key28": "2jSmq1vqyZC9x5EaZsQRWCaDhbi4XFiFgtieuPfCdCCnErcbErkxRgivwBcpzh13kab3wqAEkqxkEYYfLe5F8Cny",
  "key29": "2Cb4gJidj4JoCNVDV3KpL2WnwDtkn4RSjvrCaTjCviNGvs2mhNDphRFxvX3wnuqKEt42S8tJYbLwrdrBCkivTrKS",
  "key30": "dCTCnHr1WZSmgKjrKWrXCnxH7VE2rWnGDLosorELzbuR6mFwng4Wcqrw1iGgdCNnY2Qt9S6cQcvpvVRKQcdBWDN",
  "key31": "3KqVrbcFoHBvTHFa3YrF2ofQv6MUHqGD7NfxG2DKn9Drq1Vg13T5sF1gDFU3CBNiStjQTbvsZ2BJkg8mkgBK1pQi",
  "key32": "4DXcbNXeKJGTZa7YxR8wtfoNuY2ijpCe7vkYuwmbi3RY3G7r2gL7Vg7gKcrizovHQp7fZvBKVwExyNmWSmGhDMuV",
  "key33": "4csByz4uPt3KidK3PTvYSRakoMg3KAo11sUv7ryTfNQfU94HXWK9ZdNHSbswVVyhN1iJT3zXFjUgCZkKJESoaCwo",
  "key34": "5V2L3LxxxH1Joq4bx1Lw5dxHxugN85SsGDKkrvZbQ8VXBp18WgdmVnRZBoWKpYjg6C9kJmxvH8tuqXfPRz3yhzBB",
  "key35": "3H48FkW2HB8cQqVDFPJFzLabjrDi9bx7Ee6uzodau6rng4QHDzCJDVevzVi2Vu9CVfVBaUrcjyR8jQwizqrXinXi",
  "key36": "2pDUwD5oXbiWYXSef2neza8fpWQVsPySLpzZe6a7amdTRFBn14GC9QYyYNKhx2wfM7ue8C8rfrm3PAwjfuapMozu",
  "key37": "3Ddk82sazD1Ks6DvQmdcdauHkjjmJu9Yfd45WjDnhZzcP2e2nNvhULgJ7Ub9xYQYKw1SSmbqhR62iGiKr6ismGmd",
  "key38": "3Bu7ZuXUtY2dqT9xUJvirxFuheRNJf7NzG4UdXKkKwVKKu6LydH5RYaezKvi16FX1iLqcCjrhdGs16f65ti9DSog",
  "key39": "5jjeMddTLqT2m6Wsh5ypZao4KVcrqTee4ishm3kPWfAMJCrt1JoPL2UCwv3bsd9BcSEyQxRrzqJV7TmL5Bvoq73c",
  "key40": "5B4M8Tz2pj8dNJRNHzoossVbd8xtQyVWUT2SGckQGH4j7XXqzji21QyyviWbZfZgm9XLPreknJ254jikWE6ikn8c",
  "key41": "GRJUvQ9Grpz1mMWx3qGdFHrfVhNFV2BJr88bhEjFVTn1cKLFGU9KJcx8TsEmiD1VhETYdDSyWFkHGmZYCwp5wgp",
  "key42": "24AwAkxKv2tuRXbeNmgH59LNYuXEAFb98zADF831bw2xwCPBvwDXM2TvVucr9HjddRmv9BGUktaXsNG1GEyoBoXw",
  "key43": "o9TwHRUA23JjPpwQmJ2gNTgLMTeuQjCsSG8ZXL9tW83N1Dw4uR4We82hYgoBkzQLjnPkzPkqU8nSUcaC99YF1rB",
  "key44": "2NmPwNbhQAStuWcfN9s8SMx13bzDh92i7xRhByfkeyHn59z3HFbHNq4R1b3bxLVykebUzBGWvtdh4D5idrqn2zJc",
  "key45": "3VedLCstMDP7NRzQANvJXJnUtaFQY7ADZbPhg4KGp1jrMSVV9mjWJ85dk7X5XjYwWMzg4onzC9X1SZbdTnUdyHab"
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
