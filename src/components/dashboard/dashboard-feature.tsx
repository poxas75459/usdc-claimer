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
    "49m4g9aDJsZgb4yEUwQag1kLxRYpeDveYUARn6toQiLDidKkmnNz8agLiX72wcchXBThFVVURG6zo4FCx6Te4tNi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62Rky6brwCGZthPMsWYDAqbu3C7poDH32WPPYzGV8zq23Fk7d3W7JJ9as5NkGraXUe6V8A67bQNAmnfx188F7zA4",
  "key1": "5t8AjJAL62Rq9MmiNY8UY53vsoX9CeYdf6GEXvxwsq6hGmEmRUsJCYpDtFjk3qXtu7uZTH55r9Yp9qcFfnSBp83v",
  "key2": "4rH3bwxhXguc78QhUvi9p8iNuZTAVLLDNUPajakFBP8J7vzo8GjWW7M8K11GtBdBPgp3hCsVyrA9frzo1jfCYcMA",
  "key3": "5Npt5sF9z5pAELr551F1Bty5RbAFBL5ESsf4csBB87nmkBrmH8raxVpuzbjT5XXdyzXBCNKEo8Rftoq98FX231a1",
  "key4": "5EAWVViHWi11HVLTowuYju5WUzFtpd5wbBttWHqeirtm63Zidy37qK63XofH7cAHy5Az3XMfFySXGctPttoj8SGx",
  "key5": "3jqmVw5nyKcpQ3JSxNJ59WpTgbMdXT5v9MVWUg4wvWpPqK2yS72ZGgz2PWK1wpXBoJ51r9HtSMgzfXRq938PyAH8",
  "key6": "66VQJsyz29ouuv9nr2Zh5RjZrhPS4zCr6it4oCYRCY7483N5ebexmfPb1LShqRVvp6cCqCD6NZiRtDbeNnVCoFN9",
  "key7": "2YVr24ijUL9suiDoECa2pxuvFBCv4V3G4pWMjf5SeHkCPhM8YnR1GadCEDA7PDy4ErvskJxznfcP3SM6EqLZMtoP",
  "key8": "66chHBJwmYcey5wrLzmTxArga33GSk4r12oLsGRdgSzJgfc1PBdBii83t52YYXwJc41idFYYJaPwDpMCHma2d9Yc",
  "key9": "5226uJRnyMbSVA3iS3QWWKyyQFxRjAh5Fwb798sd35uU8yt3RuubAN2paMYaKkgG9XjhqcHujdxMRXv6eqgRdMmf",
  "key10": "2EhNJMP3rnYDhzRi8Ek9ogE3Qvf9vB2jyA9xPt4Gqeya9EFQ7sb1Lz3thXDnEn1mmL4xnuAmrZiVUYwArpbkRAa1",
  "key11": "2WAq2rSspPb4EsVzqYoUB8t1dj852fxzibhxmpRVciYWFvPVLNwXhCu5pyYsALxAjjUV6Rb8cVnHWtZnkEZxv9cj",
  "key12": "o4aWRCSoqtHzJyoTihoz5hDSRzoZyyfADkDMW3PXbrYPzNWBCL6q5JamAdH3ufkRMrL8cMZZB82tfWQ8BKzxrS8",
  "key13": "5hvuQKkXS2msPKGKF1Catan4VNgox8rxY2JFty1S2dNxgEJpGqrFY3HgSkvA72kDQPL6m5sd4Nh3Zb4q4TNyeucy",
  "key14": "5TLQeGnkDYHguLvhKGuqP6ZQiRHKQMZLGj8njgjSqToMCZARrNF9vBPT4xVjfcrPwh7EdpR56zD1JYp9SksSpYoQ",
  "key15": "3mtcMbPS4W61nREXc6ggHbnj4ZTsV4cmLKAB3Tvoqf3sAq3giroje5PZKihEGewjfG1vRrMNbaujQedwEDVQASgn",
  "key16": "5VNgP9CsrdHbP14dFRfPcEGca16GSSdR2H4MGRgz5VStANKzjz5SojYYKAQk1kYbmXY4PC6GaVzXRJYj5Db4dCip",
  "key17": "4ySjY6A8sYSi8baeQbWntqqasVnFsSGqvqfHZh5YggLnURw7aHwVf5B8f8B1SjAcpgfGsMQEf3UKNXcE33uoRrUT",
  "key18": "3qRNgpMrcmPD6JZ8Sk55upNb5GS87HXpPbYtp2RRT8BRXbxPRfDEWm6fa9Uc2oHUp9hCPPeYT7h1YCC56dfPu5Z2",
  "key19": "3qbYpWG1fDTvYUfKANq7TjkNXCG4UCtzELNdxWgUhz6dwVaF46ocCv94ompJuSnezdeQvDPitLy2986VEHB6vWH7",
  "key20": "5pDvU6ZeW93CKgzjViezL6MTg4zK3svwLenepw74MX9HPRnaTRiLbVawun5JV8FNiGyFkFk6ivebfYpDvgA9n3R4",
  "key21": "2rME9occX4qGRsqSW7x9BVFKemKPDcScTUStUtPGTm7YY8rJvGSjR29KnzPdSz6fADgBoFZ7V9EbV69sdNpVUbBk",
  "key22": "4tKtZWUPjQg8ZpCuAJVv14g4s6nnoBnwwmRZp5Q5FtWbVKASMetYxvzZPg9H43Vekw9QTuaSMKXeCNoQP1UHxnK9",
  "key23": "46oyy6xYRhbqEEv1mdit81VN9yHZ7Riht6586neVcV1VWYfAvH7YJjaVj8y6P4nUsu7mCFFpV5Jb3HtqmPntkUBp",
  "key24": "3zLsFtxnWayaKHCEcuaqtL6m4KswoCfUxHzWauJuarhFfhqYtaph568hWssAt2ifSSWbq2ikJ3AChrZesjaABX9u",
  "key25": "hWmpq4EiZWZ6GJLGfUU3KQrFqXQciH3meYfErK8Dfezcsq7fsoFgxEcSGjSBMYBT3jzYSa5za72vAtxWFQP4mcu",
  "key26": "2oY7zue3ugabo9cVGkVkhSK6sAnQ1kzsHsoeX5YDoPbSbZ4iPWkDC23N8eVd4Fj5eQZfGdnzL6qvZvj1ejznTNhn",
  "key27": "5yAQ7A9JGUkrjvRwBmmdsWc4CkpFTrJ8XC7qWwwVEWtxnaugNjHHtj5mkocmRuQm1mEX2ga9N7wpqC4oYsXuwE6Z",
  "key28": "4chzDE7ADdMvFUBfiYVwrgeq3aqMXixoWeZrAEdwMG4uhWJK3LunebVgcERdRgNp5KX5wcZiMJdCxHJJeYBXLtaA",
  "key29": "4s5PAKuMWYuH7U8zA32fSVj18m4nwz9WNRh9iFmiQwjpddgGiQjjyMhjTmbfn2PYh669B244xuYzP7oMFHyR5VTL",
  "key30": "3ES5iEH3pqhVJovXd65uvVDHtL3Mazj45mddA9DiJ2Vpn8ogzDHXd9Kqq7rhm2yPiRJHQvMuDQ5ce18qTcNf5fyy",
  "key31": "5hZbT7rRDm4EsiNsS3Lo3cc5D9GLH3qRDmzASkLHTtYa4gvVrrU4hzXJdQVdta23xTkNZLzF7639TATB7emFCuMk",
  "key32": "2KbS1dimXEphSN4ePcmNREgjbTxATugVxSgT4Cg3dgRADEtH9Z6ukEcrePUv8V6G8Dmgup7mc72hzWwyMczEL38T",
  "key33": "2jzFjhKBPr7TKFX4F4VKqbSE17W3Hz6pr8TDYYg99WheozG9EZSAwdtGPSwWM9DEZYS9R6SW7kx3gDxGvHYhYeWR",
  "key34": "3AdFVhvU4qYHqyJErREvvhXDaNsPKGF9PihDQJE2fvQZ5juNupV46vdBTQgKwJHH6gHsL4WJL7cMrvpGyh5twcvK",
  "key35": "4qSmxZJ5gYATqLfaKZnQcKop1ZTzG2qZGCCJzE3TZRZc95JfsPMACzE6wFdY5UGHxgy6jeX4vEwtTck1G5wojcDk",
  "key36": "64vVmrDdfQHbR1QJeD8SUc7gusAW5qRQQ2vcSWL5jor9dNG8Sq3WhrF2b7Tjz7RcsemUjHSkDwmY8WUAuZQpM6te",
  "key37": "3zQPKEKQUo2PUf5ZN4KCEDaFaNe267RexLWtd18e7xXfdFmEgD7xxBdremCPYRDhczKBdG4tq4aBq8jTzXa4raPz",
  "key38": "4CCemMYmLePB9YGUSC5ZLT518n7ZfXRtaEKVUt7D1XyvfEymcbx1hMVQSzw2i5DTngQrUPvjeVRJxWCi2Xes81SM",
  "key39": "4d7bxMZSFPLqhCCoh7xtRHyZ9oZhgP1h2MjPvHnjvTn5W2kctbELXUajQ7MNdXMoasKada697MG7euKJGUEtTByg",
  "key40": "28tDrp7sH1JKdLftRdyPaNS8ADvjzNByrDh84g8YHR39MbS18CM4L1powGDm5KrE4zdmSqrMksmvGqd2wtzrnSri",
  "key41": "5wDFdQraGTeJHE4DJeFLQ6cPbpBXg3sKJ7AP3CQCkSX9MUGcBWHGdhsT1rHJja1VAymTJvhTQpMzTEFZh98WVRU3",
  "key42": "56UZnufboTsvADDxGc2LjZvQGVDhB27cWYfeZFQDi1EQ5hHjXgYfkuVPZeAgSH1W38eqJjb6qccG1LsAktMBuivU",
  "key43": "RUJYXLimWcCuH1waEzVpp2npVU8DsNBcjX5avbRSgAQCtJKb9rz85DE5x38CXyc4rT2BnwNaq9U5JQoUNXiCKDK",
  "key44": "4C27Mi91wBZrAk6wvrBHZhV2TEcNn9YYT1vBE6ZrHn9n79ktqKLW8NSii7CCMq2pS7JuDpE3NqNaTjEg6PWhzNxA",
  "key45": "2k4Z4dDPPc4PUfCKrTJN1vp6PZUFU1qyyNfVsXXNYd5iVKSExpZYqeuQmfD6FB4dvZrpXrhrAH7hczKxUZz5FJb7",
  "key46": "4hnJi7c5fkeMLDMZK4mpv445A2pYo3hbQNvjRZNUSSCVjMprA1nzM5YK1a9xmi3GptzUbJEP58Jp87GwPAa4YiF8",
  "key47": "5mBRSFbjmivJAAbyYgoAyttdhskCzfQsuwxAtFfFR4kgNy3ppf81mKo99bkJqZ1XDdqL837HFsSuPsBMcU4RKH1c",
  "key48": "4opU2i2551F2xAYWd6EM8Hj7sbRtd27gSBvSYJ8ZeCqyutYGmnjgCHkNRtiAUYuFgmC26Roh9HcJ2a2Muu7DkHLc"
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
