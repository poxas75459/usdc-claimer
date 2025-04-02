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
    "4CS9xipJV5SbswGRC4WYCfsvcPDigFWvGBmrNXkwBFf9129KCqH8C4AiSF4PRpjXSdUztY3zzYZKZarZVuQbULbD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64YtycxSSLESNoEr5wj13r9YjP8RcDyi1MiMLURGmLkc2RRtBmNqSKibsBKajUyYveADh6duMsw4pbeCVdnT6mdw",
  "key1": "2TFZNAwLhH9JckchmdZ5aFFACMUdgqNRoGVN5KkuzRNoUp1TrfBssvU8mgGrRkB7MNdBvZwmTz5UYLV3UxzZD4rK",
  "key2": "je62mc25EvJsnTMitcQ9CXfVyPVmbAgcxugJ4rzVMazgkB5aqVEo1TQ4bmUMK8fufR9Sxxv2eNZhxcdEMaKK9Lb",
  "key3": "3Hj7aZJRnDiJFeH1JD4X1YjeWYBN6VttTaS53gFB1nfhWmQaYox6KNtZxw1cYvMfxzz5ZYZtVLKnMdXBQtwsUCg1",
  "key4": "2usrgv4EpSet3QXVqMepU2Q5tC3HQyWtp8x1zbZafs43EimSHwFSYaJ54JmD3Kh7jBSM5vMz4c91mmixUdMcdgCF",
  "key5": "5FpSg2QH8279gmSzUW93vMDG3v285dDdhcs3Tim5rKtEDi9xM52z7uQopb37EdmcaEnjaVAitaGTMrJxWgLKPCmh",
  "key6": "5y4Q3VyPWDAujdyuzrhmRXr8ZCeQEQmxBPMDf2AhiYLYurnPrm3ptXmCQkV9eVwN6JxQaE7kLte37AjHPZS5SEyq",
  "key7": "35XxDG7GXgxM19mR8s37tUstetbSJGCXrsqkSTPq1dp1Pf8FeoW3vyMp52ykC95NC8joUhWbGDnwcKm9kqZzYqNg",
  "key8": "2U9YQQJ2nmZDAFsPqxPo3SMtJczYZhXxEzgAUuYwp184MvL4y5uKe5XSoDToxyGLQs7cGEQAu8ajiogq4XXMnvQ",
  "key9": "4XB3bKYHCYSNq6d1afzJCgXhYVQz5mRe6ccMeVPyoTwReCZtGERoDRqBbBLC5AQQHp54DLg56ibDqVEpGZEHW98P",
  "key10": "2ZEtzCNa9YSKR4xr8zfKje43TWUMzSZZmfTTFku6p3HYAW9FnCYUgYwQmR6FnDbBJbDyxeTNuTa4WLNjF7Z8ADWk",
  "key11": "5rxRecoGfMgMVXAY1uJKMmQdpqsMjFyUKZ1BxbNXte2U1erGKmn9ULYL4dw1bYHms1CRvuT5AMV3whsdswpCnhZR",
  "key12": "384jEyjPDodMd2HkvdLZesRokT3MFQ99jKXsXfKQVr4Rfg8DxvSnbmnSDMzeEnHQi4F6MHutuFBqD155svZvQsqL",
  "key13": "2yLkvrkmtj7i7x2B5Kgd5RLnGBqSVWkk2PkFDcoqJSbSmTu3GfMWLpGaE6BveGSWwCVP4jSAwDyCrDwWqoD9k3Gs",
  "key14": "49TyAUepRUnkwBxxdxzDHPNFtzXzgjM6mGRJhJGTEd2MCznEtsRKphDg3z8JAsGsqJxZFBPDLeJZeUjngSyCvxv9",
  "key15": "4MLFwX1joFyc25FEXk147EvasJ4c6kMh5zwFDkiqt7dJboF9LhtK1orY4aRWHgZVKidk78ZQsvZ1gVNELKAnuJNT",
  "key16": "66VWD5RHBVrq6G4Rbg5i6GLZGc4cZnrrrxAK1YPGV3rf7i3MmjHtFw35JPrhs7Wrbpdwxw1n8KjA62tYGMjZX4FB",
  "key17": "3oF6yxebftSAmKXH7Av9tvYN1Tm18pF79GioYRNERvPzF3EMFimUUsy9vrKLxq7EeWJJcpFh9hKP5WCGcJ71voDg",
  "key18": "5Tfjvz2fzamuRiTdS4Qiv3XXkf9rax91rkv8sfz7QDxBkmH5Vx33BrhEnCkgGvaA3tLK6P9zzmU62rgj6cnCqLoB",
  "key19": "2BJ5vRiqL6hVbnFm3SApnah2jBkhgHj7JJkmwuahkxbowisyH8Yu5R6nE8c3xYJWCmsR1qfqnWyDZd7p5sxmpxd2",
  "key20": "42prMpLu1brAhhuLs2sxNPCyejJbZytyaM7wywitRX3maHYfsYPJEizzNrsF5LgW6g7rmfrVh3n6yaq4mkNBcoU4",
  "key21": "29mMJAehqFuRYyRgYhBK8amF1baoGxpdp9Uwp7caR4mencoNrzk6AuQ7UJbC6y3BqyDHdx61QbLfptVwPdE2BYXK",
  "key22": "2AA3iLjwurx2WvRhe3k98BPCGiWgxUWYUATzv7BahxbPTnQSPU6U4M4KbjoGLxHZLH9xZ9tw51JNafuUzCqYFBmh",
  "key23": "2DemXNSKamgGdGVXwbD5fX3TGxCea9EudxnzHyHVyLno64kvwdp9U58qQJHbm51p3BKV3mXtofqCTFYyvJ8mc6J9",
  "key24": "N3WS6245Top8hv5hHXLdQbhjGMipwQjfm3hW2x9VzZgyDbQamvG5gVtdVQbZNgqVRhxuvhVgzQtqsxQLfMzvHZ2",
  "key25": "3wo45Qp3jVAMsiZawbdgfQAKqZqzku3M7VnrWd3yGEJM4MsSLskbNf4BrAjoqu8kfJxPA9y2tSVuNpgx17b56PYm",
  "key26": "2rgQcVjmVuxG3N7kyE4N3TGyfGhKcL7kshGCyrJhS1i7M5Q6TQ5ioC7gwefRTFT9DJ3C8W7NmvFap5pfyp4CPWvg",
  "key27": "ZwYPxwa3v5DaaYC9Vb5V6Wb8EUxmdr6au6rH9fjGHAjeEe4C5eGYLr6Kj8BsfY8JfdFTFihySC9BEFwZNtUCDju",
  "key28": "2z3i1YVXmxc91XdUwWKk1NEVFEC3wCYw1rKXMx7WDDV2Mu5C6T48bbg2St5dVUjajeBvwfiiSMm6tNBSkwoQH5bC",
  "key29": "2UXtyUes6ZeNuujxDUDboeSBLVaEk5nyNFFvUbtPyau6ryJngTt9cP2vSvm5cEFc8ifxFcu6CPYVhX39E4T4hyUk",
  "key30": "2YzfUTUF9xWVNprd9JMPq8Es1wTWgtnBEtvE9ADH4cEbsA1f7PSdLTYKjbRvP13x99YLX5sqmav6FeradBNMi6gg",
  "key31": "4APj94mp1TEsc35S4vBnpqGjPLWijE9umaWNDQwbYydvWw5FfXjim4mzWna3cCdty3stA8NLS8LGDouSWzKWnWrL",
  "key32": "2njnofggECxKtv9cL72y9btZ2R29G1ZD9kSfTpe318bpWJMvV3Kkze2y4ALHgmThmg8pfYCYSqEkTi8zQRStv3PX",
  "key33": "2tGsrY78QAKgq34azg6f3PnAhhH4VUw4qMXaTBfsVK6uN2TgpD7Revs3gMxeCC7obwAjBkdvgFbX4kvjG9Gg9W7A",
  "key34": "5UkEvCPrwtjHLbV42P8DG35J9kpc8nEChm669ZyjZJ9ijodJ9izcHgVNaBwTXQzM1VGrXxBg1Gic6E2XoxEB9v8p",
  "key35": "2TnnnAmDQo7mXHJRDQJJokdzPvcV4y2zJ6bPUi4tG2Y45qJDuSYibJdx4VuoC3uN3Z82EFGFErpwWo6UxjsXV9bZ",
  "key36": "2yEQZ2DtXxVvZsHrZ4PRrHaxChpkfZcp8KWo6e1ztkvb9JmvXUn7gXL6JaGTVLboTu1RZH3C6m2cKS3wMJt3kxZY",
  "key37": "t4EJ26eNv5wLmwSDga2qkaVs76UU88x2b3DmATpAYmubpmcPHCWUDooQ7a5o6zPJgKFY3ZFC1MMkg5qsdjSArtE",
  "key38": "qxcdo8nh5kiZy9W6aXMMpekC5apKAkaaHK4kohPEjeifHpKzNsoT3CasCbuWX1dfYiNreizxWB3K5FUuVHndiVz",
  "key39": "jATLcULYqh8Y2fwYZTn5axFNCAsN2QNB2FmPsLrb4qX8xGmQbNcmXAUMPrg6F8LKwLkKkk68pRtbx2A93JkfAXc",
  "key40": "2Y7EFonHajJzhxeZM4VTbnA73VBX483oWuW86GEhKx4RmLjoRp8ehZvGj1gNaW1PA8EokLpFiWCdc7bkPEhRQBMq",
  "key41": "5XubDZsUHNmdTbMBkQ17CvdfNhaoF5nq6Qwwz4CdHd8nooFF6wAYCfHmMxKESxcxHm49TQHTnaAVXTYpKnEnvS94",
  "key42": "4jUvGtEBghoAFNpCpL8oStW9rB2ueRHBpSMHm3kY3NnSJeuhxDSQDAFhz8sVB5UUHz2borv2t6zRrpjShxKkpxdA"
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
