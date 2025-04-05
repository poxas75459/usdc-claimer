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
    "Nvh7Tgv4Wc6iyHXetdaRjJNumaFsPhBMh81CDH4t6LycFvm9PE78AXiGcdSA9Sam4kwdXZ8ufbMZEkRZtcpbPCc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R1Df1g85Rwo9hzLpg9KVJRMi4aNwZyuxcHD9Ub4xViQG9AqPS7AK99WcGMWmJXbEvGAgFmbYE7btiTdeXFH5x2E",
  "key1": "Nx8ri65sTH4i6QSxgq6kozc1zGuccyzcbnPt2i7wTTZ71J6GVst9QX6TZo36x9GYPFC6coGBeywDyVjAmMKXmS7",
  "key2": "3TNCaPp2rqCYGD83fUEXyWg69vEihyR9k7A4hafTrno4UAvQ6aiYZ4DYamTMisouh8Thcgw5fZgVQN4UHdDV4vyo",
  "key3": "p7YAWobwXWpUDTGT9hZ9jtNYBqTRLpmHzJwoBFDAEddgpyWKQg3JSREq3FQPCU51ij66X7RCcDRQtfFb15kQfzg",
  "key4": "58p18KHp3knMQk2roisBcKYDjerYRpTkofoJe9NsG4ZkBuT6VSBR689LxrPSwH5x8X3g9GgFkMhcHdteiwHohntz",
  "key5": "3SxFBNfp8LHbCkGhoWkg6Ti113FqM1eyrHFesmbjSbpiiH7ncDyLy8EkX77dRbCHNvokyBoadGLgWEDk67F8ma8C",
  "key6": "2HEcN1hfN3ygkzZxc4T9DnpRiS1aTuHcF3sk9ToLobxCqvU2ojszVLTH84a8sSn1eSj5gBcGuFJ2C8kAtJzu84WH",
  "key7": "2SVRsNJEJTRcMSar29FDhkrAkLKLompofxAsZ7t1FkfWwTxnKf8jB8V5mC2SNRmrMYQKjJ9mRsdscydZPgyUE7LP",
  "key8": "51kxDDptUZf36iFWL54gNrdCEqCZQvtGVbxLYHrhM9uhh2Y2zmew7rUiX84n55xHLbWpwGCu7NRUiLz74MEQjQuU",
  "key9": "59Pujriq3a3w59XsP4AfFJzTLctYry8y3rdP4FaCkFEPsLprQjeKtaT9PCowvPTeizNjx4y3oJEn28f9iZGHbACs",
  "key10": "33WdirU1vwEm5xFcAPXUmUTfd1WMrjALNaSGJhPJi4xoDju49MaWGuvFoVvY5ughNUG9HAg2jpqnyDQfKJJumqQE",
  "key11": "5wqb9PRoptDUbbJtbQMaxEbQK7YNBXbLhuJncszaXTo82qayGPMAqJWPmcMurXgHyc5pv6ruVvDsbt67dBPGooaF",
  "key12": "5nrWJzJtVnfSEKbEyPxYcxqiTuHMZUSBeQVgjeDb2e2KYiaV5XkjQzHdxqtTPnuKSTFKigoEhGw4M31xvwdYk7e9",
  "key13": "4Ua6KhnWFKeznyjXhZQf7Z5b4afiJbzpT8ykd4iKguCeaqgwsH7KXqQRjpYUwf1woUc9sLzsEXPTniQyzpdNwbcV",
  "key14": "2ResGYcx3PJRKswnkgwp4p1hQmuUUYtaH7pERA347GUkqz7vTozPnASLDDGAwRz6Tkv8hjQbdoFyx9zu9sm33vWA",
  "key15": "jpwSSh4eiJJviWLMQ4jsb6wPN4jLbGfg5VkdjqvuRWA6sywtMDr9M7e58djgraiRHHZQ3LshwrgrkLA3fXhewAh",
  "key16": "5TJxZP3vbYzCQdcfSkGjXQqWeF8YwzHLNUUdsPusUuMQvdgkJGwkkjKK1i58LWRxioUFb61y8dQG3segoexLDPGd",
  "key17": "29eBRd4ctkuFGa1vJkwtgTK8UgMAGMDJ8N5DUfiEdCeY7QXAoCeoTSrhtya9nuNknSfaE538tuFRBBNcS1MDNzTL",
  "key18": "KxbEK9RfnP8wcwD79yYChbpwm8A9xtMecDuVnzfW6uqJ5ypVCCkHB3fkHZZiEFXWzFgzJJTvRWhukvwYQ9F7p6Q",
  "key19": "53WZP5wxEyhLQaPgoNB9ZEfN9kszapv7tR5E19h3KLfUc28vynppWT4pur4rsgDUWEqa9QpAbyZW4naKZ5CDv1Bw",
  "key20": "2oyKroxNmiZDoxyELyYZkPgFpD99NFrLjJuGgMk2qchkrs8EeQu9tcAnZ9oVNX4pkr2RgAPZvjxJ79CACsJL8wnR",
  "key21": "3jA2q8TT6YCZgHttNzBMxnyASoR3jCke3zhBz28KD5vpNyME3JtpfqhXdc8T8UxixrVBRJYfVdtYmNiTFGQ5rigf",
  "key22": "Xp52R9ossqWbkjhwXRPvkRBNJd9xZe5qa6kVDQeqorAnGB5XkG2dMmWxojjNB1Tip1hYcNzY3utrkPFqtLa88AV",
  "key23": "5cxYFXZwV23JRJ8MVPKGZeVNvXZCHdcBeJUjg2DtWbuqCHt2hyFX19gFx6gpYs7Kr1TUAjcs8izZM9tkkzSUBrWc",
  "key24": "2djNAPHbSx3s8U8eyzfeiKKmfZRxrSmntnq5CNwYPMo25fPddG3zRqFpp1hMYT2mpisMox5jGzvjGqGpT4tGyBxf",
  "key25": "2CKe2PJbovwz571azfzLfvivXMBv96CRCwdooBVX2ZGkSrCxLiQFKPoz7HfUrBrLNTsULQBY21CsP3NFeNNVcbia",
  "key26": "5C2To67YJnXnMoeS4c1KWMMcTb6QjCpr9UddjSpWZJRaNgvRqvkNfQK1h7BrVwwVBDmqyc3jKLFpuLCcSQn9nR1y",
  "key27": "iDFrKrRvtFPeTwn6Tx1nFWt95dd4b1JDMdvCP4xsQx7jBRPbesoePTFNJMc6pWzPWYw4JNirHb9iranMNeNbV1S",
  "key28": "5A6d5kR77egTxZ1wj8tv44trfvWgpU7fuNRmucDCx1S8aANDxapL4cqZzo1WYt4AzZxaCC16dFtcAnNFrt98GDtq",
  "key29": "2if2amo55KxHFiYgU73djhd6vJCi6e8sSGwddvBtqeW2LEVWzY9emaKhqZevTZ231WQ3xHneXeQaVMt7VbEJgaCR",
  "key30": "4fuReguxXctTPUbEF3SnxhxdrQBZ3PvWCNYEEj6tz3mCr6EXSozk1bPfD5hTR2kvELHqiY8VWhjHHy2CkS1j7e3",
  "key31": "5HcZG4u4ibMQrR4nC4ZLtWBoMpBbEGtV2cx5NDBp7oDcCBccqQK5dKXro3U2z9WGNiGWHKzL7rWtzpkVZbxoCvwi",
  "key32": "5cdXcRLWCJ4DRJZhw3yD5kysTJ55PoozbJ6onZvAMeBddGyUgB4DQ9tzGXcYLhJKqTVEE2Bie3bNt4QGGtgEvSh1",
  "key33": "2c1A9azw4QpNHQxeC2Bfk4uFd3SnXZX1U2Z43K2rdGcxXERjRwvS9LZ22SaMikpV4svDahuVBdcKpq1v1SPKNFwq",
  "key34": "cu7EzM6RLnei2gSYCmLhZCZeJ6LoRatp41PWjTcnkVyyWkAEmZU1JDrUTgHhpXF7ttqiPFFZJjjdFsBSLuZEoiV",
  "key35": "4XBEkmLt8Lj5KvrCviYaApdtkQMovfdgPAhhSmFahXMv8pscyMPYfWDAN3vS5ZSAJwS9DLzrZr9WGztYrrf9C63G"
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
