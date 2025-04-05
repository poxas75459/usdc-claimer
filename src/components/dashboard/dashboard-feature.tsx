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
    "3ahB1TpFshFB6amiAMjQnkfhVP3ZEhbW55TMLEsUeZpaQiQ97QYKiMHB7ctZbatRHA8v5BGiLwTJzdwhfzdwnDuZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56vh3CX3FwFwnZAeD8G6nn3nQGCnkQFJAAPk4C5XG8SzjxNqRmyxDpjXy8uFNcjv9c9jMC2nSPS1vBsxNFW15NLt",
  "key1": "3F4xjrdftZM7uiFEwdwsWKkEauRM3T2fvnc8wD8W96tLSJZBCAysQop95JNEWdDXTm1ZUXVSwcp4DkJrjKVi7thV",
  "key2": "3iCZ2TJp7pPWq6S2tD22TPs2BEHR4RM1JVYeWizEpyJBAVq3R9pwzTg1riACgs1kP13V4WqoiycAS43DKXTyorEH",
  "key3": "448KScbJKLvAn26g5Aruu61p5Z2R6vpbZ6z2h85yycbVVQj4PLmuPSQr7nRyXqRgVSUQEPy2Wpi2xeX5ocAU4EVv",
  "key4": "3uAwQ5ecFoPEpGQb9qk4JFXxYazu63hGZw99UvPLViAyRdsk1PPApu1kUjLczP4V9EsNRuikE8oJMHYCrNg5JcoU",
  "key5": "Vg8ZKtUd7mish73Td48xg3PZwtsfUa4Gq6MbmH34N86e2bnmAdHXdWNSLT3QNpLg5atAStKyC1Yr2hzn8H2fi32",
  "key6": "649PpMaDbG25dm4WMaMk9noM7MTb6LsUc7arCrLCwia2FLbjnMCvw8dt4wBdeyMdrD6MYGFjQ9cJgQHGTLwdhaFw",
  "key7": "3rD1YxbUzMW7i3WhYvY5E8fy2x1GiH9KAmcaQyCPabue8dBA8YfdurZQm5NG1ZHus6bhDmR1ceX2eBWjNM9xyNhq",
  "key8": "4unawCzSdM56u9UVL6cCHV7junYWDEnnHaqN48mPoovNADTRQjDi83gzaP4W1RaAkWjrGgbPGsmm1yavec2zZKfy",
  "key9": "kSrvaVn9AxY6z6kpB2UFVSSqUXL6Tfh1RnFcdzQHwYGEGMB96zcQjmcp1J5RnZ4LJdjikQnZxw56htueDMxYC8T",
  "key10": "4h1ivvteMGMy5Qtxaa8eqGciqiPx8Ne6S1zHZ7d8U5Zj4f7TfBLzviHknDJamPLXnWgrg6C6WYiG6JgQu9bv1nyT",
  "key11": "pHbjeRS3QyeDMzMvn15GQ4nDTeFKrze8tq6wn2qsB4Jq6HBkczD7e6H3H43zT3jAudpRs3UUE2UvNLkDP2JCMrv",
  "key12": "3d8ghS8r3xk9eNDkny5Snch8kbWoHjoCduGLs6JuzWQRPGRkReJmZ5oKopdVCcUgiab1G8M4Y9EdYy2tZS88EtGk",
  "key13": "EkEc6deNfSR6DLvCFXpG8kiEEwdaj3SAdi3apryx59FEfLaPbg3q9oFdMa2VDndZ8X4WDQs7bR39FMHJkhnota4",
  "key14": "42ncXviTsj5nBRvWXqJL5ej4zGKMee9egR1h3gJkFdXbbLrC2XJpK4JXEjz6bSKX3enXNTzW1nnYN7kvBmTf6uVw",
  "key15": "4R1DPfTSWTJTJcJz4h7oP1hLBxCUBQYXTP7KFQtQQSQa54CtJeCcuy4wfMFmRJFcmdMJcrb3jz5WKRZEpwrqaKJ1",
  "key16": "4dKiAeHYay78qA8NpbomtYmV5GMmaurTRwwjzbU6FLUowTDfLPow5RDsusj6nmRJ8VuWdkFVhovhFGxeXjeoN1Mt",
  "key17": "3AdwUJvmvoWGcR4thTS15VjShgB9jUvEWYY8QhBTdnFA5eoNhPRzYvXsYfgFk6sSHoUBhiTyHSjST3Srb5ohTe1T",
  "key18": "5v5A5j683t4z642V6RW4GStbPbkH7C9BiNx6HVi6ns2U2p7UdV9vx6tSiJC38TJVPpt6mdYgtsRdLYs67cGz2rxX",
  "key19": "3B6SZDPQDPRhxmLyZL3DMwxZJhporUHzcUSkT2AWfgBZUmLQxAUXGaRhrGqDGMgNrBaMG1dqeaGkkor6U8gV1xey",
  "key20": "2PTVWxM7hvBSE5f2c73VM4zYGmWGyfCn6Jwv97PBwBNvozcWGbnyJgaDGjZDHLPoNT42HSSxrfGENfe8gBMfxKPX",
  "key21": "2F4ZYXSji36v7p6zk2ghqEoCvupqfvR167xZ977643VREETjuis1cE8mLuZTUk2BRgJy97386KttcipzG7rjbfYW",
  "key22": "4of4wzn4aDrF1J93RSnoDwnGRanQnYVBr3WHtpqzuEYRgRyuEb3uSQPnosn4Hwv5k3zWQXRufzqmK8X4EmjzXjf",
  "key23": "4HW48wcFfGMEZBxCFx9pePFiAqcqgXKaGtG4buZY12ZF51VRBiyyfD8RB4oBg8nsmtXrhGYJCMVNZax3vsXsRA92",
  "key24": "dZdPxYwBahrYebxVLp3GoUcSkjfy8fbyAo76CY3ZrTSG5Wx75h8rHmg9tfmcXEHf2h5wR7kj9quLn4aRQ4AHnFc",
  "key25": "4ApXiXkJfXNJB8beT5ZEWMac2wDLu9es6nPibh9U8NSjcmcw2qhpGWxbgEJh1qZMAkeKQqxyf2AouYmrfBHKYQMH",
  "key26": "4daJrFVX4GRzDZpYmf6EqyNUbhaPVaHRFuRoPKPSUhytjwZwvAueu4RyikoatzZMELwNJNCPmZWq4fdyhbFqUkgy",
  "key27": "4xBxWQHXWuK6d4afW6NbKS16ve6PoiPpWTnezoQQbicMyK3EMdnvu7YPo1gcQrTSK8qyPd95p1zRo3wJHrURjiUP",
  "key28": "5Q5jjW1M4fLRhfbP9WdCCzFrvfyxvAwTU4AAFyM9PhvT76KXMSVHy5McsW8gxRcio3hnGu1CmEdzxAzUt4nwX1No",
  "key29": "5RUdoai48w8TMKq3nCG8SkQeah2vSfJAehhh1GDW9dX4zFU8g7CUPsRdTWNy79r7neCWBb32tpp2vHVT6rmZa6HF",
  "key30": "44WXBsDZVWi4ewj8j3QN5zcMt8NheP5G3Hbfn9gW7KbGbnRyKfPaN1ErTD295FqAtT5MeqtGZwCbth1UXS31eGp2",
  "key31": "3XPJhU6VGp4N2GE1WDH5szwMYcFeBoHXsdm6goUGW8sEQHZVcP5A6ftnVfDEdM8Y8EDAWraJf6pFBoptx3mxP28H",
  "key32": "5o5b2gUbv7yWz5RFNJX4KKKXrLZ2wB1QGFAvq7AN2VxwEyvsEFFvrA9a9YA5Jjh2g6T9y56rs8FPisvjGtUrwNs9",
  "key33": "27apqBSFZAoeW9wHsEqESrRHS5K64GEZ7fypxR2bj44AQZa7wY8UWcKauy2PaeG27V4beas7oQVFYSUstWj1bitc",
  "key34": "5j9QXsdzDSp9ELtevsaVE74smuGiU4qqRzScJD4L3SDbeBnCnbZSF84bhVjZgyJ229S7APRYzGmhz2fxdvAkYLv9",
  "key35": "1DVxkLx48m5KWzX8P5HBX8GQ44LbM2eG3Tf6f3Np22jU1744LzpkNJwgfLfADRXK9eFbnhQSri7LZuUxWqsyS24",
  "key36": "4EarxcNgnRFCuC4CB61fDWU8nhDcvPWgdPGayBbujA5VPMLd1yae9qBJmqSoRvHm6RY1P7uoqHnhPfy5ts5jd1vg",
  "key37": "4ca3eYDWWC5aH2E7aAWt95NV9yjKWrG5N8rqbc2kzPMnVCaTfAAbp3P3hxVzFoMrMMRKQpgnYKiXXhHu6Sxfg4sh",
  "key38": "2hdRg7zcxvwbNReEbzaYkD4cnmJfsorRovRD5f54GvMXunMwkUYwUTvhLgPfwkW1pzho7BqN9RiZzdy821DTvwMT",
  "key39": "2tQGtR69TqdLBXuRTzXB3aakF8Mt8QBbserjJ5XnKxVRcCwHY9Zh3Efe3FZrpz7V6QoPiPZWRQRV7395Z3zxAC9d"
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
