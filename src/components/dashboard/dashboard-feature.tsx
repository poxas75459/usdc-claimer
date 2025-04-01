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
    "61cS6LMsfkV3t3bGAG2hSyKjuJKDsB2wL5AQsM35d8DuX3JKoujwjdHJUVjGmybaeBzwMZ8G1JvChe5RMDW4FtAX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qkUYnYtmWhALnBvfdHDEGyouS5Sfs35XZ36MZCsoxTTejruQhZRiZKY2Dj3meV5nWXqBUgo1nMEZcfysbJF3g7Q",
  "key1": "5c5eWH1REJdfva1PWeua2DkXtLumZPjfrP2St7SWL8C2V3sqTwZvWuMRFpcNKeUCCdG7efJviCrUA8nEXTKE4Rzz",
  "key2": "49AUm7jGEVaFaV6uuxusPNhmMPbBCxFYUpYuv6J2wpyVupMf8o7qQvA6679WNrPH27m6zTCWS1sfCTd2oF1HnKx3",
  "key3": "pvPxraNfNthWgCR3VuZfJ2SVzJj1D9KHN6DF1KpSB548LTq1yFC6WhTZx18DUuVcGzgAXU45tPkNDwnWDVpaKcL",
  "key4": "3QVU7xKvim3TJPTQPHNLC9i1W9chYLrt7ouYCdVjnLEBMqGW8pRHziwv2X7yDLzxFa23mFg2Hhk3vF2tPRPMD6Kt",
  "key5": "2pi6FvNRv6ndxbx3HkRj1B2dfws9JrKBo61S5DjyCWPDMgGwvuLTNrLkDSNYQgNWg1QCsXqJFJ4p2oFngNrqiHd5",
  "key6": "5jLr6YBa4AmTiUJhnBRE5kEXmM1Tjj8c4vqq8G464NtyhT6HdmSSLoBpwQCBdCoBsY6g2EpB1pqYXjJHTnnBShbJ",
  "key7": "3UjsVnZP91MwfCgHc6m1MxDVVtWcZGmzRuczmiki9QtBUEPZ4CMVXzggEcnDzqhuGmt8o3sNYfFSfQMSH1WSVrLe",
  "key8": "2xGQ98RtAPZissjMdWLfSTgXEv6UAJhFPCXN7bK5kgL6wmPh5ant8LcvvqeDm5yp9fM7Duz82MeoW85vW5rZSfmw",
  "key9": "uGUyrHmxLr8keXVcE5dBvtoQhauKUMD4aTMTLkh7AYbAPeKeigxZAcyEuYMmBq3G1xWHohz8YaaqyKJJzUyomJH",
  "key10": "3NfJRuhE42kg4tTuipnrwkqAqRVpAZb5Ae6EirmDFBfRiwvzrD11j22qxqu4X4Y68WXMJnSCpTxnHezAVXa8nTgh",
  "key11": "211kNHXpdDUnhBALKs9RHCcnUugK4jyKhaWZ3cEpfH7KZqRaFjn4aXm61JpVGTME8Vy7Ejv8D5RBfek4NPTsgRcq",
  "key12": "3LmxanTMXaHueajy9Ky53ua7zyMw81ahp9qUN89kMr6uxqXejqiH2wXJxWRybzBht8s1dhPTDhzSgxMUUvVwoKhn",
  "key13": "4T3tX4CDCBAEatXRtcFZmEaFnY8cnyw6KCFHdcVuFuehdmQ3B6dEZVaNrfhKztGRnFuy3PUmd7GbtNWVuPhkDp8X",
  "key14": "3VutZ7j8eyv8JAgWChBGVc8rxDsu4FSwRFEFdh5j76BA8UEoTHJ4yXDE5DBSMKWeRYZ83QEMvVJt5kBuVCi2y5Co",
  "key15": "4tcesAwtcNQLJTJ5dXEX3ZrjRVzg9ERNWV3RSmM5vr3R42uzH9hHfyuSNKC5dNmFtKVUZAZmvPdphWwr882GYQbH",
  "key16": "2DAfwYWTuvrXq9Rn2gG8XRvQE39rn2ovafqsvKM6yK8S2GC4phCXfBHpjJFCVgiVXNojM4kCQoUB5cV7nRBuGTUB",
  "key17": "5HwDbRenes3gQW4F8XXQvPmqTC2LTfaASgVpe3yRs4rXV5iDtVwTXPzveccx5Vh2kGrayBcTi8txXg2n3zRxKziF",
  "key18": "rXaAKo8Mins8fthiWL7JBXTRbSuWvZSPUr6udzU8jvB7h5iWqnaA3QTTncHMTMdGi69dmKSEw1TkTXGhqzDmE5X",
  "key19": "2fm1o6BCf4JMDwrPWky5SYhBttF2aSMUrthBPnLMWS6rt6kWiA7iDJfJJHU8KmM4pbZDqe25caRYDJMobT6FKeL2",
  "key20": "9aP5D6FsdCNZUyRQ4yBj4tTrE7b3YJTJSmkTLBWMAYZqYPnRrmZTshvCnWoeYMwpZdXWzizFTHtXwVbF2r3pjgs",
  "key21": "3hGQkUqLri5FijKsU4ygA61Ruh2FPUX9SN6mpvasu5kTXAF2BCJ3sgg1PMqtaikoLSTVjep3DZVXYe4oWDKMVCxw",
  "key22": "5v1fLg7KLuZeFg21vnxhJQpoVMML1xLmc5rMm21zvjU8JqP8k5FzqMQyAaSCuFLqY1PaCMXxN3MBVhQ4KBKZPT5Q",
  "key23": "5fUipeKrZYdG4qYb4BpZszzAUwxd7gbLQ5xk1seHftRhRSP8koRRTVQqA7FfDkE25kHAunmRnX9WdzddqTvdrAgP",
  "key24": "5NyPATjHPKp2fDtKGU7skVB91u2pf6cjCCu2z1o3AByeEC46yxnG8E5zxJnapbTT1LEtMJw3iW4ANjnBoXU5P4GS",
  "key25": "311SVEigHMioRg6eydEbtDqXadqWHE3Q8CzWPAnNe3CgvFAZAmYHZuKNVQXCKe2VrshyGB5VRhjrU4MD6JkkXM5R",
  "key26": "4zy3raFCRakSS28ubZDBV2aAMaotC5vQ3wnNtwaZnAK1mUtqtsJ9L6DNFUh4ZXRCUriP8nkY5o848kxE5jxdxhhk",
  "key27": "3FoV3ZAULHvxzzNtm2pk7CuHU8AR8WgaqktpY51wnzcJZNxqHjTLdG5JyNczwkJQcBGE5GmceK5D7yusyA5ZjrNC",
  "key28": "BdX2Ci2RnkUsmNVKtkZxYJ6vsb7W7T4XE46Sambfpqv1vYwyXJ28485wZyumDwPwz2evtELJsrwcayzpwZ8fx4x",
  "key29": "EwMyJym3qLbDosufoSSBBmjrHaJDFjrtkdmjwx9WbhLayBCRzZJkWURsKiDW6jyq7QNG38i4S4LTcaR61rgdiyg",
  "key30": "58q3fhjnXMTFYtkEq3NRNKabwvgkf35qzEVTNFfzi52jenSE2B5UHmgbLrXw8iY3zsTNDG91oWiSizpvYZh1LvvG",
  "key31": "244cPC2JRVQPMHhTWpX3UX6Ng5cbuga3U6STcx9ZH7N9MtHf2iduXJy59CV4yAHcxB4evhG8uA12MBMk97Pe6heV",
  "key32": "WkiZbq23Rabwxs9h1ck8EKoh9AGnqwoueacKQwWyWH7eKXPKxJe9mPhXHBWi5woRqFXw2vRsd84joCuuMSMW2dY",
  "key33": "2nVuPpK31uWbmVSrErQzLJJjC4D731zURSKkYVqcdWZCY4eZ1VsckmNquenccefGALP4Pg4n3Vx9qhuLY1soU42o",
  "key34": "k7vsSDS6JFogE4Wv8gx75CV5LxYYiNwyz6ZHzRzj9Eaye6NFgK1L4qY2dygimYmFLGbYW16YDCvqpM5ydmuP74K",
  "key35": "5PE4izNhZPpkrHiuF88ZrimegimQtuaSnWZ17xA1j1ePw94s8P3siPTsUoM9a1bc8J8FieGjnPLikhpckyjxYNN3",
  "key36": "4Pz81ypw27ZrzY4pnmnNA2J3p5dkdpqygX6E4X8kCwEr1KybgtvvQ4kjW1YuSSphDg1ic9KQG27wWXSrwdMf5Zop",
  "key37": "9NiopBTddqf5n812FBrGNehcmvjr6G5mfVFino9oXiBAnNwJoZwk4XJZYbQ2g5LR4WK16YTprw3gzUgX9eeiZtc",
  "key38": "HQiV9Y6XLmjHsuUcpcEgGDFycoy1MbgbzZBUeUqKhMXbMvuYr5FJvZ7iMMqqybuC6JMWEJK6mGynGBgoDp5u9qF",
  "key39": "3wgNEAiZUvYoftv8qbWxT1sYHrEYuWE2M7w1Xs2EnGmsAXaPKWSEMit52hXH7AfNKzBukZo69pMZrYhRfa9p5y8Q",
  "key40": "5djB6nQNeRVkMrd7xtU5HDH2VkrbgszDBQC71CkVuaavy4dbph5qucM5hRuKU4MDY56wvsV7iVXByAq8WiS5XmYL",
  "key41": "kEGGTd1YNSQLhgz1PDK47P4PWsN12ogZoNjUa2F8KeBxFynfrjhkS6nz8hkAzV2jFkgKQZHkmyAipz52Q2ttaWC"
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
