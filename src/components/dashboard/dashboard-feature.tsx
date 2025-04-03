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
    "3zJN3qFjovyR6izVJUCVt3dW57AkMhodLwJ9Sci14Cmeh2YFWwHmnU3sndux3stEHN2gha6ZoSyuMTz51Z9TLd2i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MDowq6dP7FQsvCzroXqyNv3wjmV8jqjPzE6WNLgeLFo8MZ7eqqTxhZRa4JVEKgUE3k7vnnbuiyBCM48jgfHShze",
  "key1": "5viADWHPWQaoowx45HuyghcSbwMoZR3g4kYjskXAZSrUYTTWcZcuF4SUifD7BN21e18MUo9NZhCgR5z1vcEpoe6R",
  "key2": "3dBe749oiA8ff8rdFmNyKZ6DpLW3qYTwVvPecv8tSTHvLYhjZoTkBXFq4VdUMPNEhsPdRNRrVWCfAuYgohGz9WHA",
  "key3": "3dUJuZW3JQYcg67Kf5HgRmoe4Jgh3BCXdDSFRdi7S8xoLbdWNS1jwwXnsbLCat9t3EP8tRutjrY6kBQTMD312GYv",
  "key4": "5FnH4GbmoQvX582EPbCmr1WNeZ8teDj7EyjvqDnUh6G13bfoLErXTmfbEnEksLJ2T6LzzUTeJs4crwe5Ge7Hhe18",
  "key5": "4k7mc1uYUNMTGZtVpvfbAQvQZ7JNaQzDiSrSJb4zUv4rVfZ22fxZSV3wy6NkBj1io17nhN6Xb1nYV9kmQ2rLD3Ty",
  "key6": "29bKvJpaLRboqL8ivuvGVyRM5o3z1bzETPom9EkXDEdSfNg9AQyH7bcwqFr5FtXQqJHBVrhjRfLdvBYNo1EZnAhc",
  "key7": "5avXEekCF5J7P5EopEpr7nzrSagyE82LYZHTPAinHxMuSU48nbTjAiG54M6FYa2g5hBiPPH8euVun8GyXqazkbto",
  "key8": "2nKk9p9Y6bTaBfeJaP7wbg1bfix1q9gbkDPrzhoiZtyGVhyB5wUy8m9cuGc9LUkix2HurbH98VXA2fNcrcpPY52a",
  "key9": "3E9Rgsj7Yxn6ffCMHVgdoEg4ejRLNnASvFtzeru8Rf2u5bAmVhBkBaRES8PMnHsc6W924akAT93qF2pe5DSSGuUk",
  "key10": "3xFqDpjxdVGrvvh2394qrcyuGPpUfHgYBjAKYyem4fGP3vieV1Z3dCiQF83V4NajGAdrVSyRkTCAeovYfw4tyGmx",
  "key11": "2GZReydWpZey8BGit6xrkJru664GQvFRSVubMGiiahJnpgKr4bw9cGKigJmhfiN5uHhz9N3VfdV2S93HUin5DTsG",
  "key12": "WNpru9SyXQmTpzZpDUjGiF7mAWhkhPVoicpPkUk4WXUbRzWsxs2UhVY5LeW8B2KKdokv9TT3BBpyPVsjmVdvG3x",
  "key13": "3xYfjYKZntkjYrKn3AUfcCBTZkYzN4eKhVFhheSZU2vmNPbNwe18kiWhQDNLQ1ugAxCPhWQZULYCWiuSrZtDg3Wv",
  "key14": "wGE7Nai98sSVep2JL8J23Q4pdphfHdmvvB3ooqT9eos8oYzNLu6WjRMsozZ7f6UjUJoMVje2JtQvoExmzVumPr8",
  "key15": "4a6EEa6vL4xyjZq7nq7YU6yXnAJRHUiGifYaaNaBgY7p7tVxTQ74t9jbM7tPGscbmWYRpweyhmZHPX2eFsGHvkVy",
  "key16": "FSUxvvHpcuoJVNMTNx35Z6UzzkRjLonLBoYfTJ4tbLs6pPMh5j5LpV9KZBmB9bqEGdvMzP1hBCsRe9dpq5SMhUG",
  "key17": "5R7a2ga3u9br4sYYBduB5rCJFukoHxBaX6aFdPkJvuyz59RDmx5nc914fcuuzpvorvkS2W6DxcWscH5uRCRTT3hj",
  "key18": "3UQovaso8HG7sFmEojyLqkz17DMH3ogvcR6DyGVNVJKmrwyBb2KidZxPQmHQdJUoJDaDLoPVwCdAGkPr6EGVocfS",
  "key19": "4hwLS9LZLi9FCLs9mEX5XQ7yoPJaMFG5k7pcjxoNLrpdaX6bozUfD3wdtizxyPbaar8FBU6FrkFymhkKQXpLb3g4",
  "key20": "4oEDPe8EKww4szhTscyrALSLpjcaGhiRv82TUCjKkZaKgmYWGEfYMP8aTCcYW8K4GvRfs1HX53BdzhUKuxAKaYbv",
  "key21": "2WDb8yMuW4Z7VCr11DUcmHUzuAB6yrGAhGHy9nZ8B3Q1KCwgj4VV2Z672Kyp1p2JjBSD9vc9uD44XiZPcZU2qfMH",
  "key22": "53umndGtTEADyWJyNGNhENr8LYJKbDTdNwEw2CycPrTkV6FSSfV4kJP7YPHt8Wn5JWjdgc6eCCQYLNgcv8MCo6oH",
  "key23": "gJfzAJHD3GZTzSkTWps5DTHZf3i5znXPEsWBLdhqoJAPvxRox5c3v9vrNRBDXjSLGgsu2kt3gB4aAAWGrKMbw5t",
  "key24": "3P1byD43r7FyJrS3vCPcWScFEpF2pzcdyJy7WvUSk7grBbCTtFeSBgFUDuTFwUM7LEpiPHxoHvdhfNyHDNrG4WSP",
  "key25": "5wyBCxngSzhowG3h9PurPEFijcuoXHL354ZKnhNtwdrnchACMMVSNxh95cPUxieAHViMfrEpwRvPzjvPD8v3Pqrh",
  "key26": "4d9NidNnADFh8nLvw3KgoJvPS59o2aVrFt6q6jwtW5JzPEvUxTQsW6Vugg8DzvJp6q1iRhiaqAkeJ4VVSUB8HA26",
  "key27": "2r5fVb2T4raHRJ53VHhKDCDPywXitYsGAmNP9xUEFobTwtAadbmnDtS8XMJC8PCJuH52ZuVzLqyhnWsg3fyxkzGs",
  "key28": "4AUGpjoLDsi9iZu6DqcxgsqdGfE1UEAcioFwb8GsFecRtMsCZ8PSp98sPG8w2ZufLR4HQASihaap1qWiF9fWiLFA",
  "key29": "52xbFXW93E61SYUbu49AXtMY49a6zUsCgovVz6xq8ztjTJNoUvM98H9XtootSNJHCrWiU4zhvHYb1r2y7BErqtFZ",
  "key30": "3ApZ3TX7R1NLXLVRgRiX5ptb8Vmb463MXZPpg7RP4JDnux8fqN5cUFx2v1jmXtDPP4TKyoA1uc5expHVm172b3Xt",
  "key31": "5XoVPfm1eG1eNLfW8DLaCooN9FrW6RLnf4Z7xs4MKXNUNTUdyiTSVjRxoVQRGHE8NrR86UBoe2NDsRdsfHVhWYMV",
  "key32": "X4sQEuY6rghzKGpYFkjuB1QWmf6oxysWB365h5NzbRPWZDjJNd8rgPNUHeSNmoJPMdAog6KC42PVQJyJUwtvgFj",
  "key33": "5naca2D26a7oVfmNkPra9iqjabWusYBEHWyooyuvkXGJzNg8VYQyeSmBk3umJGrEnFyUDjWXLDRrTG5t3xo37oyj",
  "key34": "5hk1qW3T9poh5rhajzo2BxGUzSeTTbUUzf2ejVHP1ovAnSaTcTfMxdKcjxsekjFXwn1Tu9ykGSetNDSBLWvL83E1",
  "key35": "FGW6x1TNFqbcxY56WgMyDEYAS6KP5LpL1fsJoL8FaxKWZby3WFycP8s7EzwRgw6MAH972dWdtMFwLSa9iqYDWjB",
  "key36": "xJC3SeVowXgePJNPwjH5imYwV79r6JLRJY4XBcznCvQ4T65BbettUju6JiH4tQcyni75KSmJCfMt1fzr2LX7Dg3",
  "key37": "3oJ3ZSSpbuXatycX1ecP7zR3tBW8DgHTxbtV9Pta5CUDKKfjQwkypG7uCqFLgya96DKAfK73BQDFRTKo6v5ufsaM",
  "key38": "41xdEWNsj1wSdQzdcDaiRUTRd3QJUHrtNx76gLPifPT14ZqCtvoim1fnf4YLXq6yaTP5peHxoNJ7hPtun71Ckz4t",
  "key39": "3E6xVovzi9xbmj7je76ooHgWtmGooP3FPxxvzcNvVViAbUsAjscmKpEwfZriUzWKCVrX2Vsxi924qTurDew7WBFJ",
  "key40": "2MYoCycsDQyiH4MdsKCAyM7pYnn7VarCvvCFXysTPQm62jJs6mHnHYA5TUr1ypk46vAVw4im9Sjd1PPXBYyM3mSz",
  "key41": "4XmBBcu6GsnpSJSEPjnYTThv1bXQbR5FQ4jU7ADxKXGjWHSAVrLM7J3iNRdVAAQAxNG47mVDKog11arPo81cUVRP",
  "key42": "H1jpb4zAx5FHRHQkc4B4pLrU3Ea7UjUNDxgH61C12A9Jdx4rcm1haJmwbZmnKdGSy6zHHsXL5qc1af4bu69fBPS",
  "key43": "3cywdoK2Nx1S4ZruGiShrBPGgSX41WeaYcoKN4pojrri6pfSKeZLWsRkQUNxuv3yPX4PsE5d9f9H1aMEpVFkVkax",
  "key44": "3kU9sUDULiFxjTyAoLgipK6Y9NGYhNPwSNh2TQXZL86BK2sfWGKvX8D3UYHVj8YpUK76X61VseoBDFhfzFoa1JEA",
  "key45": "3LnagRgHtcm6o7rQ5AD4YsKcftc49b4GRntA9KSWWm6BdS9hVyjFRpnG47y8FebCwTCeKCUQnmyjLqktdVuDsM4J",
  "key46": "5SBMNbT78NoseCxhnZygaB63Wkur2EFjJoRcdNyLzQawWcuvXsaWfEbm7VVrHSxyS278QN5kDPhmjdG7gdSCkDn4",
  "key47": "2gNCpTPwxtMvrc4yAYHri8YnnmUK76MsqY4HyqVZbdXec92LorHEXsdcHUEdie3JrdsJii7iFRHJpKmVsRRshUfh",
  "key48": "2phcjGQicfoduV78SBxAbznXjgcZkcrz31zXHgB6M7LMQqdAFPmTX4dtpNSTY8bHhsoeASbd57S4VRD9z46RBs9K"
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
