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
    "2xw4crYCehPnpWacc3FfrrPMohcf5GoEew7xJP37YFxBdDcaYX3mWxHtnu5htVpfhWTWqQaZ3SMMRsnpKMQQgiL9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vXZHNFHfZ5N2WYjZBAyZCBXDQ19qb759epe3pwpamkVXd4S45M8YdkdkZTgJZRYbGS2FhsuS7Br1RZ2zpEG5dX5",
  "key1": "2ahcvbZesNDY8qoV6ar3WxdoJuvyNx7x4DgCfdu3UxNsrBaBqttnixBw3k4DVNUTLMiS4ULBRjSEXsYoWhqLPQKZ",
  "key2": "37ddNfjDa7fQAZmuE5jZQjHXHA8jYVGc3ouX5TnJ9A1jKfyvD4vCMr3fBu5H2kH59T6JXAiXQzg9v4oFeiB8VRBC",
  "key3": "5L7vPFywvpJoPhzBnpKM5LZhoYjTtYEzZ3DpPbMb8t3xrvEfXnV2nY8gWRcnLVJzWFzW1rj2cGAmcDETUuZZEVQ3",
  "key4": "5EcY7X5fU6Lv72cKNKcKhG7MQnczjBEeqEvNy3S7rFwGaqJMPnspQ5USJL3hqDjLKsBWg7UJLJiJLNihMv1n2B8M",
  "key5": "4e2DG47GhhRAYhvLrr4HK8Mtb9Z6WKuXrHJUiy1vcKm6BLwdB3YXVgspupcom4A4DPmW95Wbr2Ev3ZpDCLj6U4Sd",
  "key6": "4rkJGT3AhnwpTBy84gZXq5vNg5n6wT7bmYhemaDLV9qEC6eik1kzqoVEYMbu9dkynMyVgmopLyFX7VsqQPFMmcXz",
  "key7": "51fVkLRFfZaB4aDW11auFoA9fTHsctecNzAip1JnWtkggvxwio6YEwtqHaWnU4wb2kDekhEKEMdaTAduDFggAQpp",
  "key8": "54Ya657uFRgbfpSUcvNmkW6UwjrxhDhDmcWsaJrSwEahe1FjXUihd59UikhagPEVKcKTTURWFULGHSdy5buV2evZ",
  "key9": "2Z4Dpg9XWcxe84UGooSwRB82jSS7kjfkoCHRxtvG56MGaELPhk6MGw39hZtXZbxeqyFAtmaJ12Ra36guZpwEiobq",
  "key10": "4texXLztPaEWrBYaJ3y1vh3u5sEF52MFZyHVdN2pekatadqMokmaWTqxxh7Cw5bRnXrbehA7HJFofwJgLwTw5YHU",
  "key11": "47tKhVF4UXZooRRisNXmA5EncFEgSQ7TQZESjXHjhthfGpcrmhY6zV2tAwn5YJhGbPnDcPSBjtBmPsnd3sEg3c3y",
  "key12": "3EX6FjjEzreDx6Gn2AVPdFkH9ScFPdXqTWdjvkPpNDzLw42L7HYaKs5XEqfvzN8q5tNg7FkBVisAW7uDg6bYTbQc",
  "key13": "4yVWyVUVGkrzxACbUtD76WbfT7M1eBm7PWH7WcjpJPSdn9Jgk6AvMn9sc79bCjNrhth4TmSgfDD9FsFLMsHPu1ve",
  "key14": "xNpAcfNqFWmeBydVNeLABHs14GQkps9EpJgywn7z2B2J3ZHJuTMApHgh3WZ612pmBfps5hXUrUiviPLkkViPkzP",
  "key15": "5bnMnsGkLjnXrE5DNc43JHvkNk3q4aY37gyLyxssJTuNTnq85PSbmnnPioHBat9jPRqgk4eYhdMSGxzURYSzEtrT",
  "key16": "4NreTu45M8PpRmRmKGfENJYz5iQH2xtSwRbnGgjf1LYYsQuTp2MUfCTVdser5pqGbnME23AEtinhSjiXAC3czFcJ",
  "key17": "4vewQcvSkzsLtricXxmjBkgSZ9SsKrQj2oWQqZ2fUmJGxLBKbFzHaCnPq1Ev4tFCCxexoK6xe5wc9Rx6fxDWD4z9",
  "key18": "4Dauaz4a8azjD12FjrNSpBZwrEN8oiLsio747ouwCgF48bo6yRcwecfBBEBVfqeLrUwsVXEVbewCMVMjBTLZR3SL",
  "key19": "5H3LBSdGg2kZj5cTKRBzWssyJi63MyCeEqAdf9j6Ae5aJKCqQkvsEwpABjyGrbmjsoMHw4WN7W3VFooZUKNSYDEJ",
  "key20": "2tRVrqR3aCwAxBdZHyRPT3tVzXt2adafvJ1zB8WkgNGcAxTiWDQ8KTNRoVzp3645RDeGLFQBfH9zkLxgq47LCDwK",
  "key21": "3v2Mr8PxwHD8eHfCKgdCZ2kXTSP1La17cBpnD4eByGLKe8qzzPzNssffKBgHyjpbSrS67Er9mmDqyc7TktiGHbRt",
  "key22": "4EKXqe65NTQ1acyX4zE5yt6kDeAAgQ8xXP1rEHHcsXGmyEqFRwjy1CqmbCewdVpvNeyTLYmR8GxcpZg3csXh7B1H",
  "key23": "5jCDpbomkBD35ignweuVgLtGVv827rHfpX4vuAwAqPdXPQgPiZsptEL9zYZDQ8igbtp5ajkCDXnHKZMnypYvJTtJ",
  "key24": "2PfoxUK8vr49sHm2BKBLMzrR9CTyTuFz8BDqYdL254RJB6PZhkieTc6hzvHR4YJ4oytn6pj7TUEtBjK9E3Qqz7yE",
  "key25": "21Cv5iqzHVwMZvf7q1aywp1YqDTjwt6WZB5qcXMxJHkHjFq8pJZuzb1yirmKxWiVHn7gnjfqz2sfzdLbXJdb74br",
  "key26": "5LNqVscrNVYo2eERmfZU8V7CGdRK74YkXHyVM6ko68U6eQL8VoSXVdN6wtAniuvpRtfKmM1rqduV9Xoq3j5Ubmd1",
  "key27": "2RmXQi8EdYLzRKixQSkxBeYqKT8x5rUjccZPA3LR4vH6BByv2RX1GNeRS6yAFkKGpTLnXLNToiwP8aRcMcYaNeZa",
  "key28": "6d1c1PBxker4pVSXtpure2kbjXpqjzW6sq9dVjKPzMieiyDVqWpa7FWt8XNpQD6n9Lcd8ajNuHGhg8oL7MiiabT",
  "key29": "Rc2oWWzNqQDYbqRh3ZB7HzjeUczhwG5UW6pdeegku2HW4Pjmj3DQK41n5dDRgaESFfdyFDnvXWrsUJZkxQFwJTD",
  "key30": "2Kedu1szLhsfdXtvo1xMQEQaRMcJX4zsoJkmBMmA6tDgXZF4WCHAgXr3jmtJhxoNzsczqrahM8yEhF6gCmTeF6bZ",
  "key31": "2fAiiEg8PJok2yYgJ5RfRYQ8qXboKfhXN2f7o9vqUcsd7Q4igDiXKoqpawiCsTtRGBFBLrVzdPZ5n1esTCrJhnY1",
  "key32": "2iGwzbULQcbpqtQjdDR8SEn1jmpWpaHLzQd6eugRktQ7KbfjiMWQwrxMQgkUaZ53Nkjo96zK6sPxnyTZgVAqZcXj",
  "key33": "3s4Kva3AdaUcWzYfyfePCNu4Fi8RNDrRxZE8qCQUochLQPD5KpivqSrY3HrQN6oRjDvBLKhbJmyisGkdxvYNBY3S",
  "key34": "XcF8XQ6bZPd6x7PPVzJLG68oqKiNWbsLtkYqFfZ858XyLaGLBArJJg4fn53aCeG8Tm2VZMJYRFcYZaFAG48LrYX",
  "key35": "22hxnnaQsXhynnfoW9XA3mCC8poWPeGu1H2Wp4FYyU3iQ9mTRTecLxu4NXT2CtU6ifj8okodvp7zNZifkVHZVnsb",
  "key36": "5zBc7HoL9Fh29n7DDKyyPr7i9xU3h8Ly8xvCG6W8KS1Tgt1z92JXjU813vUfSWKjBTiD2Ycd96tW8xCHJXijCscg",
  "key37": "42P4rQt7Uf1GhD66NzPtax6zGkVcnFua77TvvTPofQLsVhhWRzLwtHWB3jtrgb8VdWx2Krpbpq4zH9BMnUbae1BW",
  "key38": "EeogghmajceST3qnoWgrmx12QADmfJw5UErniVChxbSG5FtxcAQ5i5ocUQY9Xbr58yZufKScgkxwBiEDo5mZNPQ",
  "key39": "2FUNamc5CRU1ViNGKXmRbBdFcNPVeQDNyLCiWL5TYm7yPTKK4ti6DqmD3unsA7mQyeVPdu4JHbSAkFFZiARS3mHF",
  "key40": "8W4FHt3dMEkACQCiL4gLX2W1etZbF1yyDJ2uSSv7BU8qVc1ZJeiX9NjqigEag7U7od7PMkz2puW7qq6qbxMTJFk",
  "key41": "5XD9Lgcoeeyzxbwq85ywWBUhziVhJaA7ZKSGVf2QS6abyz6f5RsEHHA52hvwvH51YapDz5LUnsASwh1bkSEDL2Sw",
  "key42": "2YswoaPexh57mS3wTicEs5rinR1wQE58ZKrtZPaRJj7RS6aTqizZK4C3Nwivob4kPuxUya3SS3kmibDvs1iwshYp",
  "key43": "58A23XJBTwfr8Wv5NDtFWPamAQeUpH8ZwNfWdvE2Bvopce2XUoFNXYZFgW5ey6UQrbBR7qhz1FBVctAsh1YGh48K",
  "key44": "2isV3pGeqX6ojymypuXUdHRQTaSVJfLAcntm2fAyjwpyX5yhuHsJ4LA2taYMEa7rUZsngvUsQPfMULw91fA1y35N",
  "key45": "2kVGwmSpiTQ52H6Di6tYSpnoUgtbABia2oJgQdNqJYz6JHDCuVU9sc7ivHDugUYYz1hS7J2k7MaBBV7sUa1GK3PT",
  "key46": "2F7ACMYU2X7G6u6bCNJkP7Jm46jj1kuAHEz2RKarhZAxpBZcBmbvFVqE6673XKHh2rAfwf4u3qKZLfD6QZwGJZTV",
  "key47": "4y9wriKQ6nvEGspfMZRveFAzyC4mToTkT1aTqobLWpQnuhRzGKjnQEMrhknKe1AVwWf3Je3z6Pz9LYqLqwp6sJGN",
  "key48": "8H2odqpkkFYyKLJATemzu56pCdZyA4D5okc4YLXwa7Mh3YGipsACUvq6KFY5J61C5ZL8iGrue5pGj7dE6KW1EM2"
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
