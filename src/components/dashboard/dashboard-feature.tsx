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
    "3bzWpGTM6nykcRhTKJsgGoWSi76u4oc7CBFi5W6U93dQht3DmoGco8YkjvkeMnjoivdeS31Sm26qpa6vLEMeLVz7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22nh7jCcw9XwJWCDt7tGEhFTC8hyVHeUawJjY6MARausoEiqs8PHsSxHuFF3XEd9aUv4UKM5XYBTnz2FtRGW8bE8",
  "key1": "3cBK1csaga5SyKbydbHK66mDJaXvYoTRnWSbDDsScsrZXftD4Yz3MmS7H16uXyvJCRvZ3bwQH1PWyNjKS5crntHh",
  "key2": "MREXEjAh7JAoFTkDwNZmEGkTLes8bmxcKVFFjQnAg25qaKisYAYFUd4VD6Dq5LDNJB1zXPWQV1w5KU9VX32tJKm",
  "key3": "5EBZJNCune56ziJJANUCixxqTwLUdqwFgGU1xvvdxpRzxF7vQqQUxPapXfLARq2WTF6jttXDhrKMYGbvF5xDtBLM",
  "key4": "2UJ7Vq84wPjR3LxqrqghFDL9aHEgwqx3nsPQp6wXkjTCKYvkdKApYizGg6tBRm9sfEhNm89FRShrZN7gjhaZ8eC2",
  "key5": "y2SApZ3zE1USMqp1EuG9HDgnDK3Qqt79eFeKEDKrqXADDUVqQYaDH7CxNcraUJUxG8rZhfVZzYjmGZ76ohvmze1",
  "key6": "43U8jffs6XFgV5yM3hx4UC3LKqvakTWeJPF8JBTig3hormfSQszikbZu1bDqjT6jds26EqKRhvfhhm3F4LuqX3Rj",
  "key7": "qyze3B7BG1DMGVsiit83pRXKxJnaWpyFickwTD33CdR8oKPiSKGWV5spFbmbiK1hzysDmf3cAWcut8o67q9Hv8f",
  "key8": "haqEHaZtivVpEr3XPT9LCN65hEDs3SgsrVHq1dmioHeVonwzeixPsCYGnkhyzd8SZpLqJpXicnZDbtUdseS9Utv",
  "key9": "wiNYGjP9f2caDjMKwtZTcpTiW3o7ce1pEFKFa1Yuwj4DxQdHyuGHbZdp9KRUzG1DYeZHvRMGgonNVqPXhMbqa8h",
  "key10": "4WnSHW2NMemJBYjhKSoQ1RXm6Hse32WoZSfJsF3V6bAuossBA1CZGFkSrNh9PQLHUxf9ij8vrfSbTMSSD9e8dR8V",
  "key11": "4X2hnPnTNS4Yq4afxu2NoKYV495jvmxbNZ5wNHpWNad47M4P1FH7SAQVyaTWHw2kCYJAin1WfWs34B7fBeLujQbP",
  "key12": "2iMjocC43uCXjQLPRtApbrQMzcp79uUKazBfVmpgQypzwuTZGQytpYQi6PGj7VH2v7GK7UhaXLPsfwZsTZf8UbLR",
  "key13": "2jEfwkTmfVS4yKJsTZqw4DLWzCk6GzsVgBVrjjt21xYQ4PMWEHpY7phLoc4r7euXFLX53rffEJQauBse3pAGehiV",
  "key14": "4JGo7k31w15knYbBHDSxUJtURdw9KaJZ7fCbYB1QLkgPf4uRJdbG6GotiSNuaKAroLswHfaxTxejpEY2Gfm38gnC",
  "key15": "4cPpEs9k9AxUNgLoHkwcSUybH6WYoeBBMxSAsHHzXVr22MhtiUeYiMcYGnTaGjrxxGPBh1xU91M2ToET2oWVbDT3",
  "key16": "2an4NRP98M7RgbYScfoHyGFZUnEs3ufCi3jsxqLY6MPmKtxK1FX9LUnhyTkW3wgyTRmJCv9Up9Uh1avEydBc1PFJ",
  "key17": "43G26p2BfzdkHu7eG9XuyY2AKdx7qYHn7b8RyGxpsDawkiQB8V6nHoxbwZnn9mtkPkRsnCzKkTCrV9CUQznsKJC5",
  "key18": "3tuGxDzxD7mP4BzUmsK3ZLXykcEjjKJeky8avkKws8ubec84vpWEaJTmyLEG6YnLTQDBjDUXjABzkr51fTNVx2nJ",
  "key19": "3Cz3uXkBFhiCyxS6e4VbR7G4mLYjdqy6szf637mob1GvBmnEPfAQKfqDvwbb7fKNxzcX6Y3AmRjZV7b3x8BCnZcS",
  "key20": "5EVBQGfLCs2KeJNwK8nfSD7oDHLQnD673QsodFRKxEYeTiKYwPptmTFi4uyEuaoPGS1MFq7ckcKARrXi92h4yaCc",
  "key21": "2LJrT4zjEHAmtzbsBDRkAo2hX1s4svEoevKFXeA2g5FPy5bj6Vj6VNWiavGtTzMEtRV5DZpyHCx7HapmbgcPz52R",
  "key22": "4Lt1MK1qDUuEjfbEK9mJPcM5MJzbGZavghVqkMrPjkQx6ncYHcdbvLaHBd88oHLEYYxGyu8R3ZakzdZ6yn17SzWE",
  "key23": "5SLzE52F5emqcBQKRr3ngBamMFXLF3XpJTXMFBaaQxmuggttmET4sA3UysXAPa4TN1bKjo67sDbEiVoVMr9iHfmz",
  "key24": "QKt1jHpVwYA1Sn6mn4v9VbnnELZwHmxhjNQu2UYfG1bxb6yYjjUdJmn4FfLvgz4wKFgaFV3VaV5BQ3wZNoTB8Kz",
  "key25": "4TNGTNMRVokQTPuKMz1zjbN4TZPFYQj26suP5jaeHyVtAzgdE7s3SfGSZTy4U9YA7rdrfRoUiYnkXr7VT5VAQJcx",
  "key26": "2HzD6gurDvpFca8juv7AAUjYFfyJBBgKmSviLkfLEBgoz1mwoodopYj3Un5nih5mBSMz9Q7WxoeSdEDR4fnm2ZbZ",
  "key27": "271Ukn8Eo93yb5XHb9UDsYwDRkbt5d6P61AomNoPskJrndQvLNBweBehVLY2WMKH7JSkst5qTvwRs4QJqqKknHkJ",
  "key28": "5wSz17XcFL8RB7nJimm5X7csgg3FMcYjXfdYE7n3TD2rwPaHHqTpho4RgMgmNBSJ8AwH3DvJvprMJRBZFXeG78T8",
  "key29": "64qw2UhdiS8pzrgWs1VNXbpitVrxm3SdDJRt4Gw2AHjVcme16zKczqUs6s7igLCrnb3D79xjzFQK73Sjw43Pskoi",
  "key30": "38WuDQRbDSztXyzdDxKMudcLou4A2ZR6XBxixxH39d98ozgB2C2a4AKijvpVm44RyJTp9tMg5sWAUcpdsuve8Gve",
  "key31": "2Bt1nAwmhz8eR61Evig65VGGxfaZDm36Dj8p5dEhz9cFLYA2xpFuHoDq6BuYQ4ueEVyiyGBhaATxSnfhLtd4QkAD",
  "key32": "3BofepC2fvxmYFa1mBBNFVuvcNNEaXmNy8X35oqzyLy5SyqZD4FBYZSDDT3o4XCX9YYPkbB2mAathuSkMwwLRGLs"
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
