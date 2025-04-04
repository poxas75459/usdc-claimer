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
    "4Pn5WLVW6WktJ6y6XHBBPZXAr3b6QK9oXAzKV1M2SMqeq2LJHXvJ9VrTKSAbdekBm55SSTHxgjBud6pb792TmZfB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tQJu3grnEmrwX5rvrTHmxJqymHm4nhXpsHpZdxZJs5qY2ahQczGf8agmuzRn46DdY2ksB5UHAVFWVEKXyo4PgfM",
  "key1": "35x3nMmKJCuvDpmXMy8pgwDYQ6ZRoUnfoJ6f2mgVeKUgdpdYAPTDLkTpNhvdCvha6opV5U4UmEJH4AehdyAF7Xvy",
  "key2": "4Axnn3UAEg5wZ1gm6iyFPs5AKMssZu5KBH927T7YxYkgTTCLejNU57JJHvF7tS84TXf4d5c6fnyEmV1S3A3AwVFa",
  "key3": "r66UM7FANe5udzLa9LXp1qWTM9VwGdWhUKEn3jhChbSnYmaLCRLFSNKsvPQFC6BTKGMdax5MfgAzhHXqy7fujHV",
  "key4": "3sQxNK9siqEZV7NLAxErKDhwNhGJT4ihqPN3gL2Q8UzLvRREN2s9QyFmTUYbQtMhxDiV3ERe8sEPM26qQcPPKoGP",
  "key5": "4evMftsrrcQ1f7PNvPEpsS7qLQEciQiatvCkWVygyXYkBTsubRoUX4NgHTKjyEQVzkacv68sc35nC4Q7onCM5zsK",
  "key6": "395yNPS3djfTAyAQ8rkuiJ5rJuETvD7GzY6xBPgFeXVqxQfDxv4ixj6XXixS1BfvNeS4hm1DKt6mNETEsHBbCPM9",
  "key7": "4mCqnrrARECyWh3aYiAhh9JadsL4YETx2gJdEEqZvy9BBy633amnwVzjKLj6YxmCKLYoVx8nwsx8Nr73H9MbYRud",
  "key8": "4fQhSSXG5Xgxa1wVxwayCFc5zBQTosYFBZZcDt5dzWK13p29RdrVrxoiUzmLLbiGkYx3gSaN4xUKV2Vz9tpdykHM",
  "key9": "37PGNYRuXCAdnwUPfBfSyQukKqidohK9gEZEpZ8SXzmB3UzLQkvRVQxzLQ95oCVSr4ZzKnLPN2SxKUrk6FbdbQnR",
  "key10": "4yKQePy3V55HYDz6WB1ULSFEj8TQgTbBrwjqDQ36SPcZkk1uzZN16gqVjVV3A7xfWvuDG9n8UaakixTUajA51u9o",
  "key11": "nSYogYG3Xty5hZYXuPWG9M4b3UVL3BJQwDKZvVmNZo9QBbp3x7MXgiLo2dWKvSVSHpygd2hEoSi7DRe9htmrhfH",
  "key12": "2XPHCY8gNaiQ7Vzb1eDCfqPPESdeQUtxnNhFxRQb3nksABgkTCCFF39jkPFSGBoAEnXQexHP289tHjtQ5XuveJ9k",
  "key13": "2Fo1PZRvhFLUBQBM2q72LoHt4QcqBZbcNX247gKQSbuXwWmWDTweKcRMSdAQ9oAEQ2TiPT7tU4vkP6cWZkYwonJk",
  "key14": "4Jjtr16wpvbJA5gJwLBGJh9zktmg1K5VvZeDJ8cKSj58oUUQENLMhFpdpf3Fb6kRQ2M7ZEKosg3aZoj3Cspy5Cbz",
  "key15": "v5qg9KiAgKg61yuZL8T3Zbii7D85aM7Zd73GZ7Zjx8Hhz87sMs3hn194QwBfkKPRtY1ARiSqDHBp1NJ9uuYDHpj",
  "key16": "2CXmy9MSxhUnmtRtbTAMPrCFhFwHA2f3z4iNQwrLzQJKejyBM1kXoyP9xZRigwogKUQe1z7hQma8qKqUD8yQjv11",
  "key17": "2C6J3YMiTLui3cujxEKhoqwxaKxjg18RN8E7HDB8BTeGVWxeZJhoVvHFF7gw4ECxKu8Re62zvf7ciVGG9y89Q9FK",
  "key18": "51MSz3qQAMFA3ns1T99wFf9yWQq9WGtka7oRCkR9reFJXcNQaGoNBvxQCcvuehf6y6PRcWPtELvJgZCuW3PcA8ES",
  "key19": "2LnRfpm2MNzf2kho3PPe3rtP9jwSLb5tskV9fF4V6E5xvYYhfupZUD4WBA2g3LkzNNsECpJWjTaNiUw2szVYAGHL",
  "key20": "JP2Q2CbFupd2AaciNQDPi7e5JKAi7zHxZZXrxjaM4yESMKoYuiSKdf5yfQDg7QLGAd1FPLT1nh5LANuzr4WSYpD",
  "key21": "4ad3o3DuULZ9k1f1YcoWYWhRetJUH9mvLok9BWHsB6hCNnBMhPXRf2vPkExbXeDZ9PggHLMEmGmRZfMEdxcG53rG",
  "key22": "2FQHm31R8FsPCGJsRajQStZ54tYtwMskWCHHnLzzRaKvgi2bqoJEJESf2kW2EGEypJpW88EUbyGuebDoxpw4hacf",
  "key23": "3tAHebKRP8srEf2tDyR8R8C9yCQ21vp4Qasp1td3vvnosgnKEvrJw7CDvFBky7ULPijeDoYq2TXAAVyNmKR6N49E",
  "key24": "52bFpwRgQsm6fmkMCZL7rdBRiano8gaP64jiawYVqHmedgE9QpQeZrWYvEd9qt4fnt4mUgEbvHtZYHad6vpDdSQv",
  "key25": "4k7nZpn2MnVfdw9GyHYjBMbVGtGCiUz5o3DeqeJBXKGdpsEEGMuP6Bofc38sck2MDMWc3EK2ouMX2XmBD4D7wMhu",
  "key26": "5Fp1tGxbrT1sd43BUWrGChpbUaSn8CXLh4xLZ4QVjkqQdvtXieiStnUw79bA1nxoWzTJAv8jiie5MCQBoeFdXq5u",
  "key27": "2Dvb3NgE5bUmub5RsPDCLgEvUW5gN72ZCA1CMqgZgBaBYsPhwFiKCGiWnYHG6Pt43aLXMk5dNVBzbmZhHk9tTsFj",
  "key28": "3sUr226AvmwPecricPTiX3Z1C51SFK2FibVcH1hya3Ju3qLAPTg7KS5XzB3bsyCcGAdtVaBrowQtysZvF7m1dZL1",
  "key29": "4sjnXbCoLrdQvM4mu7BTJf4ZiiD557thjCG5AEnVgeQn6ebS3v4djXT6EcCmzX9rv4ZRNGHFrz9qmkhB2xL8wvUs",
  "key30": "3JR8iS9s9cyAMqUcH5xxPrEFtW48cW6WGRSE5B556qbVtj9rQzyRxCjGcW1ViUrAWuXt49yEXiSMnZWn1uoxcR2C",
  "key31": "4QSsNd5eWVWyKNFeMefpxq3VGmXSRFUYyXFL54E7xY9Sgv7wf1QwfH9epMGtQP2iTQSSpqjFcz6CJNumiDGFu6hd",
  "key32": "4U5GgWbeMWQrdMAHSt3U3qnaYaebm7cqRtLXsST42HtM75qoPXZ8x1Txcg6RFPGDnckF18od48WWYwPEiwPGW9Fm",
  "key33": "SdQobrDmt9m6SQR53yHMWZUfH293VsjEvqvyFMEZu5iATaUeRZoJzsiBwy9uoTp9uTwEfqephZznvukQE8c7UEr",
  "key34": "4PtM1iLp2hJVndW2FrccGWyu7nC3uY6jzps25s7qbqevqAmN6pQyXbiE4WEMeggBQDCB6KXb318Gnf2hCZZbeMUX",
  "key35": "5kGBvgLUMjFKB3iZYLNZmLSUXaV9YCFPWp4oRn6XZtKRNcSLQL7NNTj8DmVUpvp7WLVDUwDUkbxZm16h6XdENySB",
  "key36": "4de7DChvKn5BB3g9ZnQ4SQC9FkQLqQKKBByBVRUXD4gnWa8LMMX32CZ45zzS94iCTrmmX8rRgUVrnh9rUhxxN4pp",
  "key37": "4demzz8aw3gdoWSVvXbspBxmhgWUFw35QPNsSkCb6XsXnY7kP4sAACHquT2hirvjgo82rVTvyKpsw3zYbMDh7eBf",
  "key38": "5rf9QmomHfkNsRGdpg4hqTpYKe9KYBy4Nq3EZoqfFW4TGSi1oxn6oHwofG1mPKejbmvtH59AcmiwzFzBABt72jEy",
  "key39": "27qA6ru8tas5ykipXos1U9fsvF2skgXMeUzwQwzg3WxcDazN33zbSRHaMkGAbDqBv1GEEjbKjnbwBbuAm3RjszrP",
  "key40": "4asS4TSvkxBA4aynXSMEGoupC662j3xh3WaYp8u7h24QD661N3RrdhWXoMKsnM6Y2JavxXASiA8qgAWk1oJPwbS5",
  "key41": "3wxsccon3VrCzHdNifwWpLeTniosydYa4xvnkVEP8xcnJB9tprvSWTADAWx6Gt8pJPhxy2cRNE5H8KWGto9LdZCj",
  "key42": "j961Z9KR2fgrRW23uX94eN1xpSnjxftqCcAwhXQv6UkMDBtkcmJcX4Q8gJibpT1LVDe3pj4nfGb7pFmqZwX4NSm",
  "key43": "5i3yNrRhCK2j2Sm62k4ArxxAjHKjRBrh2PqmBmnYcUeirYW1NZPMdCkv4icTwXkmDgNUoaCkq3Agq41yVVMPmGJN"
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
