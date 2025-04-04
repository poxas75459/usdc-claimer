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
    "4WFCv4cX4kKTzvvkn9W8EMHdDS6pgDd8z7i77CMAZCGiqy2Pgdgvrx3mzWomF85szWDSm1vvncrMn6TExV7eAwAh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iFFfSrqqJSj17xtacwgLUo3BW5ZcNkjP84VpzpQv3jazRJbMimh81NLNBrqbuD9SWpDbN4XCJycL25Ar5Wp8qQT",
  "key1": "9L6VoipEjsEbRtxuqyRcftXmmhyPfsWHCTZL7wbeHCzp5Qcyttr7uXyAMfGgxzVvP97MhK5xji66LHvC7XpLWwm",
  "key2": "2cDMMqP519BTak3HNeHUu611D54NnUNNv4s5TMKxy8SJ4f2ocVSN7MeXzcjx25ZwMvXJQrK1r2raxHWMabwg7eF8",
  "key3": "2aw4isZARY1rYQtnpbASGiAorxofBwFwPn3PfWhBfFSMAqebrfKgQEbRWrxw6r4qELLRtGpyMvpHGDKkF41Hkf5D",
  "key4": "3KQj1s8ibBoJTEgCzWVBVeUobbM4S5hXJUtvgk8ySPiuwFJJeVQqTvCBpdG5sitMa67AcDDhAARAhhZLvtPG7v3R",
  "key5": "3qFeubHXUC6vxWShFZ6cAcJqdGE8uhYLjPWBvT8tzLUCV5yJvJttihAY2cS9g9Ntxab3kjtzy6u69t7tBEvTYri2",
  "key6": "4UeaUuEyY8c7NZnQyUmJEEFXAcK5rLpX8AHNB3L8CvJiBqY55yxUNZHSqRKHkn41UbzWaFP3zkALJver7wqMEBDP",
  "key7": "3fVLX3KDsXRr3yf1hNLdd663vqcSj9xY7oanghy3mEL2hTLC3WxT3u57ebMJM9ZnvResLS8X7d8KjtHdUDp32vkq",
  "key8": "3uEkfis59dgN3o4E2LHXi2C8HMu5XEpqb89j8ErUK2TLryEyXqRiKyq2fWmYjsmuaHLgebb7uz6pA6AGszZHjBCD",
  "key9": "sJdtdnr6veMg9V4y9uYMz8bj38YgJo5gwAjuCNVtVBqsXoR6atpedtAdb8BwcidrPJyTHAb2fvy1iUFc1RKP2ir",
  "key10": "2NWsXxnbEjidAkQA1YuLs3qWtwHVaw1kCt2Nn6fcnCoepwQh1edzoC2Yw7xSFK7FpxGQxWq3his9RvxmfAkuPyhR",
  "key11": "4w4GYdm5oVsbVL58chjp6oKS4PnH2CkuWE11kz3xntYoE7WQeehB6WZXuZRAKvCrtPPjAVLd1DDm7nr1dnqq6Wd9",
  "key12": "QuLQM1Q2M1BD5KNPESxycCeHczp5osCVzFV33B1aAqxgWQc6fo1PSVe5T8G9pmjY4Zf1dyKJB1wSFLJqJGpVc1W",
  "key13": "4t8yRtMLJimTc8m14JbPY7bMsZbDBrHocwKe6P7mRRnZtkt1GkHDE2GXCmHbNrXNA8hcBNbdwzX98g3jPP1kJGJs",
  "key14": "3uqqWmQhGk7uNN2CcVLSUD3zZsWVhGysayU8EarHmjXyn2XRnyBwb4PswbSgfsRQjZpfbM2DW2ScMjWmBQNtZGHU",
  "key15": "3ZvUDSw5wqo8YCwP1v69m4FL6JCr6t8x9z4bYckgHSe1AeH22sRmemheqx5buZBJU4dH4RrYFsBJCEMbinoKLgPt",
  "key16": "2aFXPuz6jpxdNn9vQLef8J5rN6J272JeTcJND9zdWMGaghgjmZtEBV6Pxa5idiKXrfdNuUrB7VgZXwqfWu6scFiV",
  "key17": "31NQUtzh56CH6nfK2syEmLFmchkEn48cyGKCq5EFjQ3ahi3iQAK6RC3eTwcZZbFdnjZkAUdbYNBcqSCgBSzAmbL6",
  "key18": "zPbMsAoYcHAQLac1UT4LiKadx9VPQNubXDpe2hvXBczqNabsDKzFtwTNfAXqGHEsd3JQa888DRtZ2FkzHJ7HF7H",
  "key19": "4E9BV9T8maA378abJhcVWxuYF9vYgBo4cCpvQpDAgWkxGmACv1NY2ctT9nhSB5nbxU3UyNA8iZno1VH6KrNU91fj",
  "key20": "582KiCohKHp8WPXfFB6LSfsWz3wVYUYc2ndmLLptBqw8XMWpLHN9cS959FFpjyKkVjL7X6DDCAajvpJ36HZyKaak",
  "key21": "43CzfLteohH2dCgiEQUwxpkGJ3MZo9PzhZpvWNhhMABKnVgvQhjoRXyHvicPaJ28e2KQFeKyQA3NMiKeazwkX9QA",
  "key22": "wuF4VF15L7yxkXUeLzSidUCvNTq55D9hwsgkMPNuypWTFD1PZLFWP57XoS7GJPWvD1US3vB6H9e4G2hVbTAfhxk",
  "key23": "4Uz8LnnbF51Np4jee1KAYnYYqKnrW5Ka41N9aipbwYhKvnF2H5PnyK9UCvLJKp7yc5UbBnRqHJ3o7JXKEicyySbQ",
  "key24": "3EnvRc3izJ4nqUi75Z7dpGTevtfr4u5sBZZz6iHKGSAjQNVHc2VByEw1hcZReoTuCAuD3Ys4s9WZ1bV6TRzfvxrS",
  "key25": "fDCK8vBYPWdX9ieGhUPCyPioMuwrCquLwCy1JibpskM71acQBsEQDq14tTJpyBeVy9eUdxqUEKTPeeR3eThM5RK",
  "key26": "4pLXJkRpKf2TJ9rH8j5FoQvzYh7N7dNTpYHsbpVZkkHSfh57sQWxTfSVkZB1FxbaTJKQ95WquMAFVxc67bihTRPK",
  "key27": "4rYbGiw6pxkj2MAwr8P3rDaymBfGvMbUPjaAXcWDh2pZGq2CyRdkBXGFgpJFGU89pjW4xSWcFBuwiPgsCoLBuahD",
  "key28": "grGnf2JzqBLCgAu6i6uJk47FETnSMm237Cfd1JQT8nbeCv7xyrSBeWeEufUx6YsfPsuUAbDyLqe9pHyxZKqqfB3",
  "key29": "22H639fH8jWTAT9JVitqjBLKacCBx63BEurbyiLDP3W5GZ1FWWNYYkkFCu11FJncvmDDRvotesbkK6jUzG5kBcBJ",
  "key30": "2BuarcyeV3s9x87VNNQ2922TEDt77eA6QQLTgpQ4aQxwQFy6i47dBnhmBUSMsj8sgwuVsYxA3Yp3Yt27VehWAu1d",
  "key31": "2NsxZxVfB3GHUqp2CtZimwjvF3mw2jP9tQe12ndhuwZdfBdW4RihcbfAq4b1zVaqttrGPbTYEEYar7R4MW2BK7pE",
  "key32": "4rboXyfE8jXHNiQuKFAhU1rJYYpQhsmPZ74Xqf36wNrLkuJMTyoeSCApBaMLjNKeuS1A5Ez6UqWzWCXyARcgS8AL",
  "key33": "DUoVstZXbKRzufgrP8URL2X84qMUnjo79aPdRogQwozqtaEnT63kcW7gGoscEAsK7fSkgNVQvfJy4R3gXEigToH",
  "key34": "4iknQaaLHNm2EvSj9QGTSquRv1ZLj5gFLuBgUXt4pzQ8aXv4qAwc4CTHANhPECsMjoD9kZAMTer2soVf57TTi5L8",
  "key35": "FBn21CEkDfwnrLnWv6rbvfCib2cPr9MZsA79CVjrPLj88zxhoeizgia9gQDPs8wEpRkMPAwarXGzj8vTdnc1Y2g",
  "key36": "2L7rFYX2ChnTgHNiQe5A2d6rhuGnc7L3rG5SAsv8QxHRZzoJFL2dMv5MUwTP28TRHsnxUjeD8BCwnQBqC6ZF4DjG",
  "key37": "35W8GdRyjrQQk3zeENZj3pMfrNwBbVQyRKJMj6uNqGr9UrHyBcVXa3QtVpwueBjoaJCT9APwqu5bL5DczoFbEBtj",
  "key38": "UczWyAjdd14CWW1zyXGwd8EUWtEjqvvnbWruGu1oYNEbGBK1Qei9zaXvaV4ciqUwtbtPML8kEpnrpKeuDyjbRWQ",
  "key39": "FCWmjVnFgkx3N49EYJgZymtjFZjYVM6q396yBJAgZx9MnFxuSgoRjVpetzAuQNaUaxCvksodkaCVuJA5vh68e96",
  "key40": "2WcfVuj9YwdHoAmYFKM9s6wduBMG8Ftz8KPHvTGFys2S5WhExWq3uuzknP8HAU2JJucvN4JsxgUqEUy2wQVCUpnt",
  "key41": "2i2b3rUMZWcYs4maU5PknkkShhxWysZw865DyiWJiW6Qxd4meP1CSBFtu5u4wmfFFpUevjWPSJwEsjsuS7ihtXMs",
  "key42": "3oFNaSrQaJbXUq2V7AZM2f1jSsPjK9GdmMmwNLUe88vzRyzsoixTCVW699wWSTu3o4zzdcoHdioiSnpeHaaVWKEv",
  "key43": "52DpUVQr3BmSRsL2Hw4kBt2TvsBk1DXRp3SJ4CDdBqEH8c24cumxJhYhWeGKUcxZh8yJ1Lv88BcTLMcMeHaMuvxu",
  "key44": "61VPFcVjNQPwDChRCyALNHS6ScrwKmbZqsn5XtR1uBKQHyHYqNmwVZrV9GGP2L64FBc4TP1mrTCenBJsZWKSnB4i",
  "key45": "3nWq9M5MxQmEtwxn95j4URrAqb4hU4DUdMondgJzpQFFm2r1bo6RExiBySF2cBiVkCcfj3tvSbno3jhF3biK1mV8",
  "key46": "3zJgXwV2muEXiZJ8CBAfuM1pBr2U9QXsuUqA2e6eLKp4xfPEuYtVCrnXENXc63hwwURL4q3oadYk6j9tpConncAN"
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
