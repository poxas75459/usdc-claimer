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
    "5f2uQZCvRvuCsfg5qrSU9aGbf8sE6rAs5pqBGHj6qjuRMSyrDFwg31pjyWC2EuHvVCpJeVcBXr1ecv6Yh7EY4pFD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25iZbqDBXzv3qFYjTdgSPnumXQuCWXPtm3r4bd74qC8aSFbCKQcKyZd9LGDDNyMaUJ1ogaEM6CPKqSTmFCxGG3DZ",
  "key1": "5yHyS8kcUTBgSU7wYCyiMSrwVQDnj71wv5p92yqJyEA7wHkiuZ5oGSSVgfeBS66UyDdz9Y9ban5DW7x1QFNaDioL",
  "key2": "3JYiuVH4zoUNqNjjxdLfNR7Q2WUSNbFzzToBH655mWjReyBiEQrpgvHYhoZaBKihu179XW2ReVHjw8banD77qzBZ",
  "key3": "4agB7jEonL1neAdgU4WFwYgmXjaEZNHNvjsmWyjEC3upsVrmXW6vkLN4KkCC3CPHJcVM3WMw1WsdiosbRRhUpfpF",
  "key4": "5jANE95Z9es9qb4TqoJYEhh435K5c2agsKt3Dw3pxAohrVr5PjbGuxWMno1XrjAZuZtBHtMTWFwPG4x5yxPDkD7p",
  "key5": "53WYX8x1TDuiZD4m5CCHAUF5RUmEZ1ZYH8QkeMBzXR8WKHynEwnxuNDQA2f26RhrNo4wufMSzsMXajPC1LCLzuZ7",
  "key6": "2YxzsBKMdHNhMxn4FV9JPu7sxCJ8ZmptA3vFr7BhciH7fzG5NTq4P4w69f1vV7N6hDbAqZAwS8qM8cR9xs8fG7BN",
  "key7": "3qButpnvUMQVmFiUC9KB9EYWLYhXmmspjAvf3yiJouwPR386kQPsh7MHhrdWuAjMbTsyFDKTm2oK7dEnwCCB9LW5",
  "key8": "3XhqwU93K5oXYT9QghYMnDoASNJKckhZLJaRcmddPhC72FPmrpbMCvRQ7TgeZU1gfDh8ggWGkPBLiMVUAVB5HPLm",
  "key9": "5Ci1E7TuabHBeX6VrTsP2DrbpSCsf5sja8peAEydpcJca1boaur6SbjRPSzANzkJy6jCBADHp1oThyXfrDuSZvTB",
  "key10": "63ud6xg7ktJK78ni3UytJHz7Z378wYLtbXioP4cequRicwdGfiVzZqYCCsZY5EiVpS8fmckYgJ9ZWU6BwJTgDLgn",
  "key11": "2HPmBdBtRL7DQ4RX3T87hvG9DEHuPzU8xjZZ3V1RHoGZuyyCRoDy5QUVPf55FUQ4N8Cmn1t5EM6X6ErR4LahYNHb",
  "key12": "5EiUU7GP4ZiqCT9LnWKBX79AWVtuYuKLNi2C3W1UQf1WH4BsTQ8DzJsJxsi1Uy8vmy9pepsFBgummnsPciUSPujr",
  "key13": "9h9FkPGipjYiMR1BPo8N5ayLVrENTpnSUj69VgZKadXgzuLT6PUWReuspQALyWTtfvvN8wsbHYRZqju2GD6TRwC",
  "key14": "5sBzWgzt1nzuKhYFVgAbz5X3qYwWc5D6di56Z4N58KMCowcLxi1i3RoPPrz78dTTYnLmSQ5Prtqto4vWkagUahFX",
  "key15": "64RqWXBQBXUvEESTdTeXML9aLRjbu9W29zEQVFrnBDRzGwJhKeogtSLS7gp85rP6uW4j1QoXcU2EqohuASNrpkrR",
  "key16": "HwgQMdAgDVPYB2Xz4JmKxGrGkymtEDkhn65xJ4D9iWVAsBm1nXFQM5Ufw4FHygQQAa5vS1kAbHPMztihUQX8Wp5",
  "key17": "4XVft2xjnr9BwY271fiYqBRN9tNHaPNvrjs4kaAKxVFncckUhmb9gsXCqf9v8H8h9LFCyjUiTx4CZRsoqbWYSASn",
  "key18": "cTyMMN7kjQrz4E8d7qNNzqJUMYUe98mf58XpAx9h9b7EwEmy8JY9XBqKw8yfPoGnRsDFiRKq2nsoLBE1BTota84",
  "key19": "3ndpQwfTe9mEUM14EgUgqiDnv658UK4Y94rwu2gTpxsrYgmUFyMp74bBhaN3aErLtCxTdgc5Q9hW2dS3BY8KW76a",
  "key20": "5J2PzTo4r23jH3bjufHdRxU9Bb3fmoMSMAUg3UiUq56EDpoQsAy4AVx6DxbkrhqBgFKyQdqTdkon1y6rzhM2ZZFK",
  "key21": "zqee4iVdk8TdpiTEPMr1teHEww9w3J6YJz4jLiA3c3QFndDPMvU5VA9YD9ian3s7UfPZC8nV8w97jHrkW5K6s7m",
  "key22": "67M7zp8dgmqXxq7uQcGUNLpTGx3CFgqizSMVfDowMBc68UUCq8N4w6fsLU9HujGkjLs1Pt9z2Ytqm2TYnQ8HjtoM",
  "key23": "KZDQYzr6P7pLBkyuE1zJp56QE9J22bV8DPtJv4sHS4jWrPK1Yx6rbhHFhBhEcqKgrsYaATc8nd3K94T9HGCFUSE",
  "key24": "MUcV9eShvENtAd5cQRaUG8TLYqxddSHDZas8yiZSYDPKdVErcy63iJGKdnSFdSx491n3hSPZfiuExLquDDY3mjk",
  "key25": "EaYNzF9ynCubptb7XfoMozpkEpUYLkkWYyQ6WvyUyeYC9zkHW1wuzn4aaB8GSg38Ky8GyuRx49fYo1rxwWQxt1m",
  "key26": "5CcWDpmdXjxkpc7m3w9R1BLA3Yoe2i7RTcupZrsSbfJZkUiyhxBTt1SJYSf1btvJy1MvCcMMFKGizaPJ4itc9Wer",
  "key27": "U8kikN9nJui9P4LrJodhquMXsHBPMRsLVce2BUwyDEq2EyU6D7CE2bp6jsM6P5kcYQZz2vvhtCjgNedvLAEoYZN",
  "key28": "VZcnwXa1g1h2WYfRqmQQVpqS1BYzFbKoTsvGptiQAxVsVrij5TZ4disXLCk3KT2amzWNDMtyXbGk76zWMCKmadt",
  "key29": "5xyfsV1PoUc6bJkbfHVJUFDkct3oLV6mVZLsjksuE4T2a6rfCxxF9FyUfBr4gjTM5HVhMwgXzvjvQmmAxxAPU37b",
  "key30": "3QqaevnuE75HhS8zU5NgUu5LgcdZDG91esYRR84Sbdj7XDLFyaMKJxWzfuMuu9Jzdr87jogtojqM7PYMzuzFtjnq"
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
