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
    "4FPJ8hkAXgZBT7YjU8MrfpCFuuJCKgQ7SvDknCpiZf46Zi9y7PGke1gpwSf16QrzCuJLan7DNHr7BJA9ayUhEmns"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zXrZx4Hw1DFGCDvCQvVkh2F55WvfRH9Cv93heewdSvfryMgJUD45LmVn2Zjt1JbXbtovNG1Ysgd1zvE8CM8wB18",
  "key1": "42uvZpQasnX1TxYvwsEg93NMhmvQRvgY8MiFc6ej95nMZRCWzJWtratAZckmSGXgSjTvHuA1RjZM6YaT6GNbJYnH",
  "key2": "2zLkAd2xPVLAUwifPwguX1sFoba5fokJKLFWoGw5nhYH6W9vxkCUMr17qiGRWipLGENa4thv7eY8dtRHompy1SmY",
  "key3": "N2Tpcg7KQzwkdDMEGYPuB9mihFfGao2fxaWK7Z77qyXaXp2RwC37oAJ8W6NN8AQJ9p8oSruMMMMRNxmaSReYZen",
  "key4": "4RKpJTUFtvpUvLfM2AGUAstGUNSe6TpJ78aB1zYexdwLRx7BeTopWFRd5Dz2qUgBEELyhUhG7T6qgnFRUhThCvaQ",
  "key5": "b5MgvptrPJ8Cw4B5zXt8LJEJFFPaWxA46CMKnb2jD3Mgv1UWbxsQ2CtQkAcCw56uerjRCYE8xeCzDERF4Ski9oP",
  "key6": "3QpxpzznQ9PA3jxABBDGUz9BPL4UHNv6Qouwj1QhB6Kw5X1c77BzLz7BjsF3Bt9jYUrepzj7njkvqkZdfPiCWrUn",
  "key7": "3qEPqYm1NvKyU1mBSRTpegA7Lvpq9rs3PWuaKtHNrxhz8BGVDArFkYtXwChkBttmYoBPuGFgr7J9SoY4mBJDCCqP",
  "key8": "4mCkpSiqnEYFM61ygaC4u1hpTKEHf1xs1Ya3wyh8qdmo3YMkRURfkUVupyaKcmMq4H3ARozu1Zp3AhMM5JeRjfvd",
  "key9": "2yfpWiJ1kwXAqVoAWsVEUtSoKSqPRnA2pVsHYeUQiQVVZXD3s3Yzw3ZMQEGb7qhz1rMxvQiTei83gsegJGWATqJW",
  "key10": "4HviFjr8B3T1dwQJYxQXFayG2jrQ6NPLLaaDquYTDk4hTjHLzKkPLJWwFYG5v1M2HVAwEjjE5Z6f7tvAjYjxvqVY",
  "key11": "2oPHkPztu6Ma3Rjg8UXngv3G88dNZSgrzERQevtsFUuZsJhfGm4xS5UPizbTRQizSGXDuMyJJfpbbk6CkQwFSz9r",
  "key12": "5U66Z1Y1bE5S4GkkV1KEUX2h1So2Thaa7aABB8XQpvKZV6xUgY5L1RnoZjCQaDd3SDRJAEMVjLAs2qbsYKjYQbHe",
  "key13": "5QQ2tMjXgZwVgTwZotDEQrLng2ZmLzAxjRQVjbdLwu4mo36AsmMKLAGkxviXxB7fkUHgzNrxwv1CHyjb6SLsQoKo",
  "key14": "4jzeC73BdhZDH2RxDqKvnnYzBi4PZ1ADb6iqXkS9Jb3yrqoVrYEsLCMEpvwe4UjsZyDcqrQGAWik9476joQdVxtr",
  "key15": "4xiAzS63HD5y2rjSnhLjQND85AmGU6ms7J73myN2CDxCRZTQoPg9iRoCidN8JbybHkB6xbD3C7w7rj2oyrXcPuKF",
  "key16": "5hvf8V9nMzoWXf3TF7JwZ3XFR5KtMotmKeuY4jdp34DhuxePa5ozkZW8FyqxHLNKbYCqJHaJYqXfQkTc5TRLkDYm",
  "key17": "2LkMGqqeqfGiA4UjMomcMWbv5MsKd3fNvMuWQjxggdfGFW5xHXpntHHJPdQtdN6rJkLLru5eAEV2Bf13pSCgkAZh",
  "key18": "5Y3Kfz4x2W2qgyrVaP5iU7d8J3Y6CKzyawS77Ki4PNX4nQpPCPzcf5qfwexCYgsFNFPdEQAXQPT4Ju28Xe8apGCL",
  "key19": "4xEkR9zgktiZBAa6PL34kReFSdC4xNTdSgZ6RWkg8UpZxo7ZVYeQv6p63tsFEWKboukVMeHFimTpH376oEGB5ykE",
  "key20": "3BgjWFhee5QT2UWQkBi8G9zvNVXU8P7sN1iPasKQAP1jdkf5cUcLFPLNeJvxheMExrHBYrrgfzxMYCGHvSFB6SKR",
  "key21": "5yuq2UESxs8PYEtt5nkawZmp4nUWHYfZVCX7QjzdC3W6L94VeNqsJWcwbQ6C1fJV1JPLnsv8VZEdTn81Ce5Twjkv",
  "key22": "zrnsH5opNhW14Cmu8USvNxQnkHd2eGGc8V7mJBXxpwXvdTs4c8AR4MjWBkiBYZjf6Tpq29Hz4vHyx7hSXWe7bTx",
  "key23": "2VHuSVbCktSxWPdEAAJHjYgM4ugq5TV3YWvZpAHZa7nntixqeC7fdYe4aVKkmVeQvUXPGz6nwU119YEraNAvW5u3",
  "key24": "3JRH8Hzhtcywa29pVZM3DsWzupNVoi5ipvPnKTYxoCpFsGvEJyTngpRX289cM8JzCbvd3Rv1kedp321bUtMEzksU",
  "key25": "28aS61GA93gNZzmxB9gk5NmYkczSthZFSoaTcS5u6PVnGaFaywfaqTTdYvSvBPNm1XEouJ9mLrSDsSRFZb3q7JrB",
  "key26": "2HYHb5Xaw81kC3iiEULEYBheVf4x4HEtFrUSufd6CQedQ8mLaWA3YgcWY142kHCXWqLgKJYGAA1x132SRRFaP39c",
  "key27": "45ve7dq9y8LhLdko6RTapQAwbPkLQTa9MKz2hAAjK4hVqod1SRvjzmTKtXvmHfhAXWQ814EEDTRwZGT6LhaM53Eq",
  "key28": "2BSsCUkBt18MDMkuWuFyMaBkrZpDP1smU9e8h7frQMF6Ve2bzKzA1ccbmeRPPLCThbtQxPs444hBgtptqMZfbHJn",
  "key29": "5dZnB1PxF8UCbKySjaXtUiyBHYQVh6cmRttcCr3e22XGR1iMAMY4gPNd6EF8n3T3DNfW3TkwhN2K9dLP72L6RFYv",
  "key30": "5pAkxGTmKnho3dMaSqjn6fKzYFRfzmfxSLUPUZqZFNn9wjKmCFZLek1xaw8HTGKGuNeVAp2C3hvu32Fb3MvFMrQt",
  "key31": "5LsoNJpE8nRmAiuuRJ8VGGsAkTtFjXS5xKaWktjfjRRehHxsDVBDvGjdwaDf64VA2fNSc8P2i3U1ghurfsM2bZxx",
  "key32": "39bC14KTmUmVSB6zaN8V2FaSQi88Y1gFepm9p1mrqR7U6sK1YZfUWpdoSH1cRDrvrcjnpAVT7U9K7VmhnPDg3Rs2",
  "key33": "5mPsMCSmvBZXDA8xpgNDLx29x56vWP59HfCwBaKkVxQkUAe5sNwkKBp6njZE8TAVLGNZTTFKHZgpdmmntKC3Cs8V",
  "key34": "3utnkYc6akGEr1Uc6kVrhnkSwT5BUwbKactfQyBbEdjXXQNi9XMSGtJG9jdGScK6QdbPH4AZyj35hSca6BPu4PTZ",
  "key35": "2nUA5NYeEcFeKKZf7J8bVifb91ebWoNMcJ4bPb21wsugNAvNd4m5m98j3EJfaqTmGrxTG9yiJVr8v8jzWq7MVgzt",
  "key36": "5isoa1XSY2s7cyY3XYEbbb9o3KtbKzLA1DiYJwjzK4VkgV7z9cj3hzbjYrt5yVjVVywoATwBJwbsty2UQxwXbAq2",
  "key37": "37JBhE72b5h4aZFbzdet5kppndU1mL56MUmUhCxfV7k4BHPopFepN2TrbhDGehracDvgWVguJMF2Ut5X8DzUzDha",
  "key38": "5dg4MxFQnm8jZdGfte9twCd8s1jjEMLqAjE9UNBEayFS4Vcp9N2AGM9LjS7yPo4CiaN493EJakbhFxPRuK3Qpbgx",
  "key39": "5VsHr7py3eBCwDBuq2X1s8MQfSquvzjn1Snqy6CnWc7kjWv6sfQWsJPH1mkF6qoc1Dt6NRjFf7361CeQcGMPpaAK",
  "key40": "4uVKD8Fc3fyHN4Y8XwS339wZdz41GQZHKLz5uHNwK7JNmnGkF2CBFDkQxvk3FaenT41RDWSfxsz2coxCgnPhQW71",
  "key41": "3YCkjGCv4oKxkDGEfJjvP9ugjvSozGTjrHTg1LiwDQ9qzKu6t66u8evhgBi3vev2EBHkyKvNcA3FeTaG75DnTgMU",
  "key42": "33297UezEcwnS2vV3tcoKrrkguJj8qWhJsRcMyBswhiETRcQpxyjeNua4HZgVV2HEd94dR36RUwgivj9M1FA3bEs",
  "key43": "FN8AXhziYfGASnSz2Sisb9fSV6TVbLTbukYJqDEvG1itFyGJ58UnSajGAe2JTXMoHbqtgby7HRhFQS1ybyQGb7u"
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
