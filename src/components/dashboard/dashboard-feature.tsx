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
    "3YpfiA4Rm5RsqnyXFivm5B6pYnixezqQvWns4rx9rvuot7YWUsR1fdhuB8DacU3a9ch6CWeJMGEZ9nqNvM88QRS4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RvBBeeEBfnDHnKb7JvekmEE15h8N4D9BeP4JNaX3sTyjuj14GEKSYchczNZTFGm8Vi2uC4QzeJF72EExB5dHbJy",
  "key1": "38aLnxJnmBrMZzyWaGpZH33WTStfxFfNLxJRnqhk1ypahakAzobFc5kNGCiUHAtt9c7nnuawAA4ALvvEFwL2fFWy",
  "key2": "3xGM4yyMkt7RxoiSY4njYQAcTpnL7M9bcqFK3FXved35nhW9rDgf7XRfo8sijc3svRTZWn1rdKeCLVMLkJPJsFnJ",
  "key3": "2DbGHd72z9WM2JpRbXCGfs6jt3AKzuwbZa8KXKRxSf3ZZLdHuErb9wUUDF2TgJ11A8ichxYoMACMTzZMkKrCL74f",
  "key4": "28TrLGaXUPJ1K4z8ejcF8L7RtPjbwzqGz5Cdb4bBFCMqhbGPBQQkGWpYRhR6jH9UcsA3Amrk8LGqtXjjzoGuEkoH",
  "key5": "33qHjrLB5PLr2dPdjk9aXDMqu9MvA375KFkHfUWQZdstcnVCDmjn89rF96RRtqH5pUp6bTfJUfRyunRcNLepYPY7",
  "key6": "3Jk3zKpy92xgoqFkyS76Tj6NSEyqHqYgMRB6yEhf1XporkR2YkNnCkC7XBAMt6NKg1GNVr83NLKWtk83wWL9ADKK",
  "key7": "n2HuMCFFxnDRpTjFq2Mtppgp1gnE2woMQZfQZsjzhc27nJNL1RQafYUwn8gMnHP2Xbjqxnyi9j3uuKTEYWzBjy2",
  "key8": "vMgk3uVSxjSu758kQ1T3t5MCEqZXUPx479o7jL6hGWjCWFQAmo5Zy1R8MfZviMQut1jtNHvtht48nQU4gSJYq2h",
  "key9": "5XVhmNcRMT71ZSe1Adjmv5q6SCbEGhesaSLTogtg22ptBifhhWNEcbqJXyP6p24maLz78wJGFqc3rh825xaX61En",
  "key10": "2JbV4cT3vQFmESKcVjGgfXk4xxD4mLNfvJ8ZFNmTthV3X5Lcirs3RnPkUrn1kuBDfCKdPSui5iD5BqqAT7ohjS6m",
  "key11": "3aeB61xm94aJJDNdyo78ektPe2SSmf5XPLncsFv1VvAMNiN1DXvJkVeYqcKHDwYAixK4KagtoZcNdULokDW6Vt1T",
  "key12": "2P4CLKVirpxgMCGFcFzZgu7MjUcHPBprdvbw7y1Mhy4XiCJgEH2d2UmKDi8uR1qgrR9VQTGuVuSDjP5waXwBv18Z",
  "key13": "22xRQC1icJ5fxWVpqqwEXAeRtqM5MmVsY7wu92w9GCvT1kHxeR4VMue7ddZBkdVRA3eLPrcrRNAiysAJWDxvgrro",
  "key14": "5cdmKHKH2sXia9eicmpypJYPBQsDacFcCVgfNTaUCeHVRRSxWKB1k1CiSzSqY7BHh7ftC9qF1p9sAerEQAFm9Qi8",
  "key15": "2DAfaqyT9LCR2hNhazmGPqWJTj9xYmVHNYzZ6qpsRPiNhhAMdSpMCUo2UNQFck2TFWGtyj2sMXA5bkVkNRU9Q3S1",
  "key16": "BvDe1RSbZcRiBufuJLSmh48YAZfyBdCRQGouMT44RuVAHJ78MpM5ySK9ANoLnpWZmgd5ugnkgCmFQjfTWxErhS7",
  "key17": "66cC2Dgh33CaeDYqNYaFrSyLGsRGoANJTddKMzA1RX3sS9TEqvnopreFzhkN73qukBA7kwScn76FK3y2HZ3ZGpu6",
  "key18": "2stzuvna1BCUiYhno6wLb6mQb6rVJXgMPQHNcBAgVkf5AN2qPAUHuNZytptHW1VcrribvqbVWp2TyaRWvgf9havW",
  "key19": "2sfqis17rWsCYvWWf1TCBCjqrA1Ssrr6FhLDe4Su93myYTBtCurWMDqyRhVZTPQpEvJu71JKe37uZeV9xQcg1BJb",
  "key20": "2eyuqjjsQ1DJCe6zewsXSFZpuLujTj344KuW6CxFYxEF1GsxGBxhHyX2iKhYAK2mP2DWHNmZHHvwyFip5AeSbFeD",
  "key21": "2ABWbK7fXsprt4GvR91X7fRhB8Dr8xFeGE3V9kP2AettayJoeS8WSfzogchsQ4VdSagko4WWG4LnQdbJ3fCAB1bx",
  "key22": "3GHyWxiFHRvnd2kKgzodFPtD4XRYJM8csks6xytCahh2R3mctRHkKS1efe5qq5e2oWw68yiFLpcWXNBwRbYz2Mpj",
  "key23": "2X21SpwFuzpDJPrE3KrH6XdJtht3ud3QP9E7tiT3zASWbJV5Hvp1n2Eza44vD8aNYShMtN9QDbcMWq1TiXVfWqRz",
  "key24": "2BRwABx9Jn8PS7sTCRshpnRftc79WNPTFGDHKuwdEBawZHpCVZFS9wEJC6Bw7sb8AANsEkfWwHWaPG9eMLh5x72V",
  "key25": "2T1p2FPnNsDBhZiJGktynEeS2uhp4YqXbrjFBM8CeEELGXYYtequt549JCa4SjvbVvo1ubSfTbSCipywpv8fcpnb",
  "key26": "ZwZAakCWcu82PRp5Lb4SQaM9mG1BXmiUjEA7Mt66LCELXHfa3aqdZs4i3M5PZtpFMjT6cKuTuA6gdsBfJmCTLzY",
  "key27": "4FTcECKxtQpPPSbUuLapYh2MyiW5uyx88zYS7b2MZQFw1FkSMkxivchCp8DxxZjyHxcaP1qrc9dRjk5m5zaW1Lda",
  "key28": "trppCBykoyvkSnK9619XqYffJza8txoHVxRJpJDkDcfWNttbE6CdZm1dA4dVctxaPdgUdtpg5FJ5XLd8GEVNJH8",
  "key29": "4khzuZL15ka3t1FysD76r4f8GPmU49A8Ax1bnbXZDH6TGuBHqCE7371WzmELDyzG3UsbQm1wwHCt6c6AtQBqJ95Q",
  "key30": "3T72kEtw2TL3SaVL5Yzn9EEP8tpMrK7cDK9PtiwesodGUn7qAK4p9XjAe5T1PnQ1uCJn71dJ9nFdovaui6axztX8",
  "key31": "2v3fEJwueL2xtsgNd7fipCRUZgmG17uZM95UQ8rKCUxPkSnUp2Qz3dVXKxevTf3wb9T7ciX5iyGgQfzPzu5nGFRH"
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
