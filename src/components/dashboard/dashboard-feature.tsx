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
    "2Z6e1iURKeQtb98FGNTTyjC4GC8MAvFwzv3pJjqCruk1nZDMZhZyLXaHqBdez1RasEMofJWUY2KehHdXBM6oT5YC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hdXPvTpkXEi5MfEVPmcn136nNvjTQ6rdh6aiFkEUJMGzLEYGhmbPcTqNwyJv7Z9FC81BN9Co7i7GDQMNVoyyHLC",
  "key1": "2MkGD6JNPUtaRCBEP8DzbHUhD33HGw9a2d3NPmcXikFii4Fgmp2EVG9gvTVutnFm5sy6ruAXEB7tQZ2mhxWnPYz7",
  "key2": "3hrPGxD859ExeC4nqAKfZWB7tkqarfCTwvMaSMummwpzHy8VhmYbPbhoyHxS9DPJdXgRszkckq5MG6pcZm353gaF",
  "key3": "4TevgM9YxzDuJqyFzrwKg49bHKNqj9jdMKhhxwKtHsD2U85XDtUpsZfCAqAHPtbr4aFMkrWj4mVpDTTa2oRn1uQx",
  "key4": "3K1hH45GWBbZFDTRZjHrKF2wcipRFt4v3DvG8ua4tkVXFVpmmC5DnJ84c6dweeU3JQyhxoRcJ8rfDWVZAC5yCZ2D",
  "key5": "52nT5rKG56gH62pxFxV6fds3AKvDWN1Xj4H6dGt7ru8SRzuqo3NCRDtyKVJ3oUvR7bbRZYjRuHSJvaaEkhVGNghY",
  "key6": "2pzEjRZpGwZsRnqiUMrxaPsoEETPheM1a82Nh8t3yxYAPsqBVD2vH69ZH2RHBXmMkVoTByH1EFfPB8V7aBz2ftvh",
  "key7": "2Ey7ZsSi2UHioSMyn8JHWYLMrTzH8TK4hGDEufsURskrtQA1HbL2abUtFijVkDdUFt1uwmPoVrwpUM12BU5a2QSJ",
  "key8": "35HDqp2Vx2wXs2xauKJSpHdENm4UcVZmuQukxskQzabDtSqizAyXAo544nybXhYNrA69WCinovBF3Fj83SWTQbKM",
  "key9": "39D9nXCThV6LPgwxQ7PvMyH9GMkrYdQtj7MjHv44YuMKn7JxFrBpA2V3tB446V5fQYGruucEGBr9i8nHXaTsZcKv",
  "key10": "5hG6PwcsH7mDp7tuQuJ5YtPWUeFKsw4kbGKk8DcvATjgzxfRR9Bzg9qUTW4bHqm9yakG2B1MYDnCM2mDRZCADfox",
  "key11": "1i57LsmyQBTyDkumujV7m9AbEDVphEzR1AHhACnaEpVg7HtbqB8FufLm5XzDs63LrBZmmxKY5RZ5Ufs5tGH37eN",
  "key12": "4xz4gUD4LL6vaTx3KAe3frsA4e4JPNQXGK78UMiByUwsjqAPFv7TpTHFnwkc1wU7N9L37uvxWhZVuxaHbJJoHtmM",
  "key13": "59AypQBUzvUeNoYjHZ6spU5UgnU71TRianHQebGLR9Kx89QBUjEmyDeyvRQXXQx6it1nsPmLTGqq8wirVC6Mj1AB",
  "key14": "2kQ4pmjwZSfE3ERM1eZe52hwA79AAbGUNj8wGt4jecVCJRtsJLdLD8KnTFMeFhEe9S6c6Tcv9xtRej3GWZ6hd33v",
  "key15": "4tzcbzeByTkQRycxL7SNrsnuu7ca961JU99Q8Xxxqs9jW9V8tm3k7SAHtBpTV9oFtS1qFdCnvQm6JcHN4W3siEKG",
  "key16": "3vEvXBqWWLsxrJTNhgFePAURCd3eAxghXDsyUPPLvqxkJStrtZ9FwKw3g9kHNsoDGjuD4UMyifBgjFXSqdrJv4U4",
  "key17": "2g4X3aV8zC1Ph8r4vhXwShY75gAcKBWXRE2JMWM5CFbtQufQWYLEkJFLrMGd59RVFFUazrDBYVdCoEj5Xe2A6ydK",
  "key18": "5M2GNvUaoZuHdRoSC2aVs8pPQFtEwPHJfSfcDgvegdyenwuKaSRJ31xFoGURPQd2bE3hBD7tCi25tzDHtRXrC21G",
  "key19": "5DkpcgGcPEYffRaM5oBe3QBvR7HudtQRPaUZhSYKUZc85WSBk6UZ7vdrm2c7HsmYJKc9Pck1452uN7PfpSuNQVvq",
  "key20": "2kfJ96F4sSutvfEVCq8e5o1Aa6nkMYQperQEMGNviFXrweCpPrCZFpLYTkhJgDVJHa5GZyPwSdeWeL7dva2mQL63",
  "key21": "5k8mj8wkjLiwyh4xiTPH4Yya2A8DpeGqKFAyBAWaYp3gSS7xEEW1CAahQ4UjquaYuVBzpjd2UR1aCDwiVofRPFNx",
  "key22": "5kbkL57uoyv4MFXs4jSqe3iDgVivPFrQwDbjX27gxghMKyaU7Z6naRJtpYvCJEzip55GH6YiYtrDoQMMHTzcVtXV",
  "key23": "38yeSkxuVjZv9dkHXb9dtnEoQdHhqpruQeqT41fWUWD8rGavRGohqzeWkT54aGaqNfzjcXfeMhywzCCx5PQwrwVV",
  "key24": "3z6ohp5ARCRWjNS4VdvafHvaeWXVNdZs1mq3Zaw3vyeuKVuKVzwEQCgTWNm9FQAMSLozxP3qc7wRNUVWeRPe6Czp",
  "key25": "2t7oTYvQEsy3ZDYVUewhm7uhcHwD4LCoyP1u8KXBE27vweF1aULf2hCsR18dD2tU7GD3harYA2udkgQBJ98CqsYe",
  "key26": "5kAfFLSRdp6ydme88cm5WNfLfHDaSx2wPJfLoHWAn5WpFPyq7eeGfMDFkq3EpdhbGszKykfAA2iVJghDeKjZKFVw",
  "key27": "52PjYeiNvnXovsu7fkSMqZmBJNjDy4QFa7xyDCJGhbNQdDwhLnRBE2k4h6EvGmks3vLKmnCjSXNThC8FBNutfSGQ",
  "key28": "5YeWMQjmM1TX7kUtAMqJwtpyVo1dTMqrVYzBX5bpVD1iW3yRaPZScbQ8qSjfRigqpKQoe1L3kBqooHy6YmaPPfHP",
  "key29": "4woHpRk3byDHgAkxCDJda4zYD41fpyeRRGfGUjskuPrr9Li9jHkNDrAawcLarx7XQKc1FiW3au9paK7jfHkGQEDV",
  "key30": "4JTHeuLsN84kFz2CjKTDE3Gq97JFWkP2GLQ4oymnZyxCuMiK28t7i76QkKukpcACoN8i56Zm2ge9GRohGw4iYnQJ",
  "key31": "311eJMufe4HBgrQR1gEy59LTgjASmfu1zqD1jUQCyZ4yFBY7tkhpBvuUrcHj2mkc8sySAaRtdX4gsXE54D7u9GEi",
  "key32": "5Meev5KoApCeSi55uycEF25sqhRGN8YAanYE5UocscbhCFKKZMG7qmqjPt2P8tc4cTfPHGATUBH8m3wY5rRamFjq",
  "key33": "4t3M9WgZaajGnKVCi8wCDAAtAtqsicjK2xyiYXSJvc6Fdys44BCUNARzZiDbn5SQyMbhntYpXc9oLAktTdWQ9QGN",
  "key34": "4Ae2ug2BP2CQUvC6FUqPyPQ9NbXcxQUXYCjfgKAs4cDKRvkZCWFRrr2dvYdzTWgpt6zepec8JiFzw2jtzcoDiudm",
  "key35": "5m5VutKdC67LaKk2388vKGHVFFc9cr6GPV8xv4FYq5svsCA8qUNLGNmQJStxRcANe6NS4XnC1dzAmmLHGMUHMK3L",
  "key36": "4k1xEaVv67p71yoD9T9SdEFUzLnzMbbK1XSf7PY2jYXgYadqtXQQbBg25WjHkkf1BkRxKJpMF8vKC4akeLySyGT3",
  "key37": "4Zg7LAmwUYiaDRe3REq17yEg9geYLQfdEDx7ypnQ36rfWeuJSwaE1NkzJ1EG1Pjhy7bPxDzAS6zsBajKQZrKDHev",
  "key38": "BG8MmmwU5ahGL2P4Zqd7gimmUTWNXEhSXuUM4cTyFMiiUdTvBbQu4E3HfHaZTTF51MSTgMuGL1rCnFfXrk7hHcE",
  "key39": "YuRUeNEeP2Gqc7wcUhZGJ74iCmGYRgjpu2pBVLaey4aUymiDVqwbJvwsemjdkAgoKT3qczNqdoqHYzURchEhJWV",
  "key40": "CQDAMDUaB3tEerTPLMfDXMDkPMxKDexULf8BF9Agada5tFMDqNNRPEvR4Tb6UkCfwF4WJepsQ9EbwoxKGCDMfdx",
  "key41": "4JYBFCdr7rkhBvMX16gPfwSjGLxtSdJUhxPXBK38Km38a5gYjSqeBr6hs3TC1gNkAmfFoje1R7q32FuJL6hCi89F",
  "key42": "2QGFVT5AEJVLdRyNE4zdCQhAF2KoNAL21kYP6NjgrqRMWsWW27iAgufzqs8NgpPDKJ1UCjx9KHLB6EMZMXvfvDyY",
  "key43": "5sQCtMdhmpyzqoQv5SatsZxasaTPEsGxFPYgv4jyUk8nj2a2u1ZXuFtWUMyfx63r23JpKyAdWCeuLPfuo6ryRybx",
  "key44": "49TgXZZxLTjwNoBkFV2MLVmnfBBko3AH4iDufqqNef9SvtjJRcTXDCT8XDpAZ2stR1imGaL3CK3u99jXfmREwz8s",
  "key45": "5XPjhus5PYPAtQGi4Tk1QpPSzGWbLT6PDC3h2Po9RVnqTbqYB1rwhb4g22UwHhciEHkD1v9ecAcztEuHyy6gsadA",
  "key46": "35ivETpp2YtUobt6B78VRRTZPdfCVk4peANQwNz8cRSJYZZ4GUWQZzx8fuN22dJqdX3ve2knCMj59neYDgWvbot8",
  "key47": "2Aa4k4cKUFNzXwwFp7wCvHnpeAJoiPRTPGNESpZkHQS9NkC7k5AVaYzuGa6XwsCrZ3Sp5kZJfayCK6bUM8jvoyJY",
  "key48": "2nvabYJLWQkSinjjhhnJAjYmJMXi5E4nixuTEqQHSwoV7fD8DtiEasvwcr4jQCJbZ8WyhsdeYpsJh1inSvGCNiJF"
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
