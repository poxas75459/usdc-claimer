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
    "2gUoea6LHmJ5yj4Ue8kS954i24PFYBhzfF2y4MMQ1rYsczyodZ33djUCoPu7WKCZhdRSV1V4Y55UxAwp6sPRDRKF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zz2qT2TTPkY2fBfvVHtuqymZVGXcKxvK12NxVyLc9t3HAwoTr5nqUeWVnsujbjZDEFnwvdri2mZN7F2APT7wATF",
  "key1": "3sY4Xha8FPdQEJBXvkQn5FQqGt1Uj8RFzBidhjqorrWSWPCgWTF2auo7BtcZNdBJtr84RDVebcEbZ3WxwKb9kfWv",
  "key2": "57bRt9sDQ9UdPBc1dztidUicw9946u6nT262S9Ji425UUhpVM1wiZouYpbwyLfbunSXzp5aNyt6rokWvBXmAp2QX",
  "key3": "4dWbPwNLhnob2VBGxGZxYEAmxALPbiWWo5dWcAq7NFqVZbVUfpCGGdQvXZPq8Wnf2iDMMQaGdkJToyNYcQEXW9W7",
  "key4": "4uYLRJqR9n7c7feSbTq9QWQycVBVth8sAZQAHoCBbNiKARag3sfw2yL1UqdAX8VYdiJwuKS4YH8uNKV3nBfhQD1A",
  "key5": "5f4XPNZNy4j97iuz5Yk41w4QTXE4yd1YiXNjPAqTq4dqKEyXfXNWpWMN1HtuXXuktmndVBmxbALjUgxDQDSAbPjz",
  "key6": "5zPUkcvGKESABoUfKfs87imEuuNSNNK3c9EXaviep5zhGMVxPHDAUsUzrQZFgGNxozAVMNtmgEgJkxUJ32DpaMqa",
  "key7": "4Lq5KbPWNjtC6jqyMQe2x6TypbHLkQQjMfmfNB1TCFirYHktSTxpyVrVfGaRGRFAznCncQtEd5JJ5bwBRvd8Bdzb",
  "key8": "5eY5gkZsXS1WhtuZgPs54McsAJU5AfQDmySF8dH6smXKSsGiGxBM2QpWupDQFPwjMnbq1wrKVXqr6UdTTxxc542P",
  "key9": "3fLBSqbLjFK4ejB54xhYePBP797reMvP1TAYqJqCC6hGEU8RASaTRqhZFocABiko6GdUz5TER21F5huAxE3tp1AY",
  "key10": "5S1DWoNpeL4JZfW2kgRqzw78TPgZb8etRWKAJxKmFdJKU3kM1nHZcRsHbf2K6g59Aqic5AMYzbUtJUUSuKW6m559",
  "key11": "3tJb1DxQ8LhY7FAEVncF2SdJv7AVHCwhJ917g1QFyTqSzCyahgQEFs5oLMoohHroTYUMDDDoLZoHV4S4Nq748gfU",
  "key12": "2EBa3PCn3nuKZXkA4TcPn8NpYJZ3zhC2bppLpHeSJ2FzkRQBxNJ5hmSJxUgofCYXd5tvSEc8HM6ueU2AyyEUgSYw",
  "key13": "2gpC4G7i8SxVC2fbSW8joA5oDFT3TFVp68xZXuXw2LBwRUNe5vTdVAcVsLE66ocLbkvMZebN85Vde65G8XMNskBs",
  "key14": "3r5JRYXvsg5gGCBRe2oZqSCJMvxhZRte7KHa3whb87uBjTkn3PrrxzKTpZsSt976W6tSSZkWshtTvbjLNpHBv3pv",
  "key15": "5KGLpsNxAwy4t9xXS3JfFodN1tQRr3SMRYfJYWUndfmTT4aBxkD3UhziLbGW4K2Fm9HKYMxjC6zG6P6wzNpfQxeZ",
  "key16": "533weuEb2ZmeYPcCrKoEi6zfxM6jsNGpijixhe9KZnyZYW1N5G1cSSVtAARyNeCFwyGjZyNrXfpiYEwVdZy2D14p",
  "key17": "3Qu3AXjeKbmBQpyenhfS8VTLrTkQEn3nZ2tJdE37BRx8bfwQQTGM1Ap8kbCzqRv63wBiaqcUpdTK5WfxG7qUkiCX",
  "key18": "5SH1HGbY4Tbg7Gk7WzytPYsfpai4nJSgWQEHugvDJ374pqUe3k32LJjHBFN3KhqT5imjsZSsVPJvA4Ah1fvyE2P3",
  "key19": "3dM9kbbZ8UYcn2d47GgGUoDqpqXoM1SBN6hcwpx2kJJ9qMLUhX9PWymqwnPCV31KgRozb4NjGKkjNnhSeUqXi4Lb",
  "key20": "3M2bKj4Yk4W8vmm8XMFnuC7Rtr9kKUUTAdUKJFz78dQbZGYtQNx3GBkUpPixhXoWDbwPw6Jjiv61KmdmLX2QKYdy",
  "key21": "FiKDjEmByxx9NrmjVmtkWCxjZ6QJeL96XUTdbKZfHRd6UkCtHC8WfFgnZTfuwAWmF7jM12Xy5HLTRnc1n3inRJs",
  "key22": "5SUz6vWwiXWsL83arBhTSaiKBVhGrBmLXg2tebzZX6LHP4v53cPUQzVs3CAQNst9KatWy9Cf8cLdNmNWpSViuedp",
  "key23": "2NMvy6KYhJPUHwvt8QTii4mT8CYkB7Nqzsaw1LEh97tXK1LgN348cLiAj7rESAz3RWrGhDafCFoc2EUVhxWYmGM9",
  "key24": "2HnqPsVNz7n3XjnYuzyT9MTjCsMnNge5RCaetGQGdA53baM2njbsfkZApMzggh5vTr6E2KGeBUG6WXq9VSJDtEev",
  "key25": "4wqmgR8jJhRpybdxVKUnvEuo7gtQ5RkAWRL6UpfhzRVTNzHrqvMuUxmEpiVfW7421jruaThVCX6kpVZo9hLNZJZQ",
  "key26": "7vASDbMpAF7mreb9zf3cJLAGPxffHZ2s1oH5NfAsp2ZRFxksZJW2KdWqW2gtb539uTzeGG8ytiKDLqDsprAcQxy",
  "key27": "zH184nPq2LANqfKntzXk6UXiZ8c5ko7qhds6cagvCUxADWP6uA9KH4mWnL5LVaM45eSRKvn8s6oZji5dWSpzctr",
  "key28": "3AH3jtq2gTqFUeq4iu6gkRV5vkkSBhn5E95oUWeg1L2HbjMBruZqKhFme9r8NBEdcCWMMydL1dJvq2R3BqN7qGX5",
  "key29": "h3AGJjpp9QKcBBZXctxtZzN1UXNxpkjuxhCwKZsyuEK4Jpd8xkAHWRZm55XakV75zAgXagwxyiAsjFpAjRJed5c",
  "key30": "iw3BtoFNUanmmKDREaHjphfz4yyT9uBdSqMAnKa9tDYd3t4ktb6RRVWj2KXyyomer2sbdbEweF4sfLoGSisi9vu",
  "key31": "5ykNWEaVEgebu4jCMuS1g6iU78Y5qrz9jEkT4SdxmWmWCBZugwsxjY4HTD2eHpsZXwKBGBXsqCVLVqBMvsJdUsB5",
  "key32": "5fcos6j7h83T5yMTuJkBKLiHp8y9jhXxCH4ALFD72nGVZ1UAWj59KmopFA8ai2d1MDnX1mcK2PyM6NE8FBADzAc8",
  "key33": "5WXQ9SJxNFvJnGr1hFELQ12dZ76qW5YRHG94ARB7BBN3CGS7F6KPxE4sWfGBYEGZ2JwkQmXw4AuiEH4pcfRuhUp1",
  "key34": "66s5bBQpEbuMWgGYxQYm8dbVguw3M66QCWntrMp8wDuRiRAakH3qxSMB4rzFyrgkU4rc6Ti1dxGNgFjKtb7d8uuK",
  "key35": "3DgA7wgVzPf77YjwQWTckT3L4mEVj9vDFNWoBC1D59a5vQnvQDSAwApXe3yAA6WpfNsF35ctSRj5DXfxBK2sbjXu",
  "key36": "gbgPQPzcLCVEsq55GvrgZFCBnGJy8XDQBrSgSXNMHnVfnN9LTL8D4fBg7KpWTmuySTMB4sKFMrnMofE7HhbwUsY",
  "key37": "2r79nB9eiAuCtZ2kjjB3odwrtkXsrr3pYqFNc9cxjKv1k8rNQCR3R7tMeu7ecbGjDi5oEaZ6VxJ7MpQ1oFCEp7Rg",
  "key38": "3To2EcZSRfxnQpiaTR2nm99dR7NqTbgEbSbMGMWFQ3zNiGDytotGsYAAYEtvCtEaGdHr5mMKRqweGkhXPGacFf1r",
  "key39": "2aMyVk1qD53nnmgbRSFwWYZTMirbT8DpnQpDnjSJ1oqT7HLCShfJtzkNX78Uom7rZ4qVfKTZ1ABatCaFeGa2EsgJ",
  "key40": "2zBcTddFrvTWLmiAajeRcWXbXRCTHUoKiPNb9r2qCyWPPkRfBfBZbJSNErpU2kxQXQtQ4YugrRcXWMAFz27MbYz2",
  "key41": "KyZHcWHJ9cWSUMNqrFKtASP4uYBNvZiA34RRiDjMjexnXNZsx62BmTRnp9wPhABFoJmUbnd4JN63W2Z3CAgXPC4",
  "key42": "3n81qFw6ArHfiGbfUFu9AHqSQjNk7FwexKtQqVsAwgveqBubHrJKwNFnU2CF9Zu7UghSgenpybxJumeiXV8FfDe9",
  "key43": "NpAvaicHvZr2ViDDDrwzh6EjgpxbLZJmtuGY1CNJEURWxiWjhVapMSKCojfjARyp5jYQHcpSrPnn6jE6wip5uFT",
  "key44": "45rHX5J22EjPZ62yUcDH8FkRHrHR3T5QzGzAdKwvHU7uBuX6cNuoUvh77ZwsbHocYfQ67q1jdciA6q5B1UUZAvxf",
  "key45": "qDaVuvsdjudsd5RBxW99GsZ4mRyxDwaeaE8feuR3hfSEzhmPcSeowWMfm3SkVg2nBjvF7GJrassrHoQEoR4vbf7",
  "key46": "4eyHtdDNvCXMmpw7i7bvRB532vK6MFAbJtgKdEiVEgR1wEZzCNMyyEsNnE9rgUcNFGLT4bVPCz9m5eqq6F4eXHTe"
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
