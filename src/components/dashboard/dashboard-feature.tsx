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
    "4RaFWPP74FqE3Ex9WktcYoSCpvj3JdaQV86Yn9XQSrAn74KyUjTC3yGj3yVWb92we1QstcT2nyw131GGyBMQg4VV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uSbWjb3EMSggCkDRQH88qwWvQpiXkofy9SqrtX1Nd4umKCatoHAAyyrpyQHhFEtaCxZYZ4EyGRXTaYrjbEpBau4",
  "key1": "3uRZVE1vVze8nxpkgKzi4QjxbhP6Q5fEtYoQUCQnHfx1ZJyjPukLeY1g6U8QU6yidjmsHZEWXe4VohsWEUMNHFLq",
  "key2": "4rdEWEM4RqQd6Z2MwRQqS2bCf7qeTsA8JkAvDzmKH44nBgPdNKJVdHgKXM2UAvNXNBhbLxjwcgjm9bMLYgyKwhCQ",
  "key3": "6nURLAVauDVDkaeszsecXEpXPYRyswh7NVWFfc9ZMbqYR5QkQAo8mftzVKypebZxjzU7XzwzSxeCSmrsrC5VL7J",
  "key4": "XaMcrjGMcWh1w26T91RDVuzsQES1NkimsdKZNrdmcnP7zQq7UhAJAuvdBKYHeGFCMdnLLkp8aCiU9duwxKcpLW7",
  "key5": "gi8X8JrrdTmy7xteCFEAiEDxfZSCCk7kFeC3CHHZfexwFjoZB8yQqaAeSkesq1uU5hi9T7Y2GuJ8CDj4eM3dJmT",
  "key6": "qb2gEREicFs4zbm5fnr5TZckUn4WfvPVQgvUF94cFYTTCDnZzM61QAUU653g8imXioGdQ8fjGhSQ7nU5fRJnTQY",
  "key7": "411x72bKBJMLFAjPTTg8AdGwZouABDDuefsM4Y15FsMj6ZjKja5xnFh1kpi2wf5xL5JkBt8PvQNMCiwsbVQ5Dsbr",
  "key8": "ttgVX8ZVK6YDNg7pHNbw9g2uzn5Xg5ck3mzYsckCnppyE9QviKdA3PbKNKVumzDpenS3ZAxLNDxCxV1XFM1XUJ4",
  "key9": "2FDntU1qpYVYWm3TBNs9Zhufd6jSQSLUnYPPrZ1MFgDbuGNwBVocSqL81RStDPMi8Lidi4wA3ormpdu7LQUQsecF",
  "key10": "grJPWakwSJi18P8NzTXaKtZntNZGHzfhV9h5dCXwZbcUgjTY8s6u3X3CJLpR9KGwiFM4txsUXAMJZASpx5g1Gp9",
  "key11": "5qG2yh6rxGBXcjMhtVg7vDqdsFJ3CGGTGTX6SBr86cwthCW92R1AdaTRcWC5geYfBTAbf6y7Mw4MWrVQtpZH9g9L",
  "key12": "4FrVrnVCbvAPAHxE57dwoXcioCULpQo5urYFTd2woqQrcGxz6fW3a9z3cF885vz2T7pqAyztp6qELiUUjLEFcN95",
  "key13": "3e61sEBwXiTxPiuNEsJCu9rR72JeA7omo7kJByXbquAqyDRRqcom8EB8CKuve7c7goA1H2f8fzfxvVJP5UUr9nz5",
  "key14": "2sKzYaTQMJsQWwWCVDQbFWLo5vz72tL9yaSeGUioxkpa7FxDaRtwVnqaEX4iEGighTBby4hyL255Xfvi8AHNGD7R",
  "key15": "5W63K5d2zHEnpiR1sLGYJG8SeEjXeG2H6YbM9yaP1W9vmQX247CSivR5joUTRH2iMBSrWnYkQBWT5oEyePPSnD8G",
  "key16": "5uHw5PLYJyKR7nGECtom5933ZcuBsSTR9sJzmEGu7d4WyGSUoPtoGsNDH2HYhW8v7tFSWbhPxRbcU58TsB8r4KZw",
  "key17": "pChT5seiRGMGAaZVgYXcmJSqk1WASCv7caonug2wW1gw2ujZkw64MuJykFLCU6RppUdtD4iKQTpb92G8UewC3iS",
  "key18": "2yjHD4PSg1GZzekKToWQLaD7unqv1vmaS66yFzcjLmgBi6DzH529FRZ6vkb89aDpb2868Zyy26CUWjU5xp81dN47",
  "key19": "5WnWb4B8Mn9wYgeWzoS9Qz9wcvyFpBsCH2YBGmi98vNEpraCUY5gkCNnb1QbTzrhm6gmdKmDPCGGdULeuuBDdVKq",
  "key20": "62gedZ2tSZpAtK9r3muWn7E12MnLxgroE9gGxg5zuTdVryj4j9L14NFrtaFKz8ZrfrNYdtFQik5qDNEj8mkYiWNR",
  "key21": "2AAh5jW8vtrHY7toCAgVULpR4EMJvPvgg4b3xLbd923Pg1e3BgBUGw7cKBmuey5uX3E8d3P2zA4JFJsJ1avx7Rw7",
  "key22": "5yyhWCxMB8LiqU5gWmkzLADBfU1HGsUoCH9cSiJLW1zX2VfNbwGm2Xr7QW3aoXULxUAVh9xfWMDbxEDpafveVSji",
  "key23": "4hFRRgVWinN8DoYgnfbhFZPiRAf2A7UuVQ7EfShkmtLAvMCnrGX9qcEuZBFSnVBNyRK4erWHYBeURPysRKunHqnr",
  "key24": "2eAFrB88fRMx2zX6MFoYeJrhkBQxP8TCR3voFb5BgBTFHWTsMtDKHudHgTh4TcsEH3WG8f2TsZAur6bB5x3py2CU",
  "key25": "4yk9jGwGJgmLaJr1tjULumWRSQDqnEihZZD7ErnhRsnz57MqpUpiUQkjyvWyn8pMtF5MXcMnJPx8hP4gLV8bMB1t",
  "key26": "4LN4jGCv9MNRd8b13tzH14zqm1F2ghEg4CA65J6mU8zPU9WQuyfLx3oXoJwgBW5tFAfvimx5QkhJTyUPW8xkM5d2",
  "key27": "5QAhAWcnFSNYB3rBhd7URVJeW8M3T2RrgMGgBEUQTtSSmecRLTdcKsJu1vq6GAvVpKenoGVqnn8DofdMSrhMNSve",
  "key28": "2L1tybPvkm2uzwioTpLm41Z4dVMGMZkohUhBKuz7BrdhgMGVe7ZKcyTLdqnuqpGQJTUUfEUtEQBKa1qHFRhBM6Cm",
  "key29": "4oyKbkPpBBuN6gFwAftuPea1hjke4cnVwasFd87grFvNPpgGt38XX1TVmaV6yLuLP2MoQoBixK92dqjWShB7v2ey",
  "key30": "2gdH4a3iaGbKb3tx9GKnreSwsf2zHpeX2xJNF6y4JpBSY72H184nXbjrM3MYAxVbTsBURvofq8uiKpPTnbuRKnpJ",
  "key31": "44MM6QKH23tKg7FYx8PmDGpRbw7vBMqyRDt5mG1UmMGyVRbaTqJ6bYuSzHvBXgKhfBQJfuE2yg3U4BtHP2N3UEwn",
  "key32": "2fUH2GdGcvEccT53Eh5GPsCCE2b8zCLpq1toWMLeCG1iMrq2CAtLi6FRXT6R6V2giLZQJagmQU8U47Vpg7SR5SzR",
  "key33": "2cyt7KXBVyPTUaroxK18KGPDwvG2Xkpkws1NVge39S3mRAWt2U5NjwY2sAUide9Dw7wdyRA6DbBkqLckHRF6tCtP",
  "key34": "q3xPGKhnXHdVtFDTkXFL2JMV9qWg8ogLYXjrMisavmDU6ySLVw9NXoUUxphuNuoJEtVcQi2mUZHa3wEXG6b4AgM",
  "key35": "53NsGbrw2a4XpPYUiH5X3j2FKU4UR6LmUkQ8ezhGoenrbeZqARc4fD3Thva6Hih2wdTF8KoiV4d5t4kTQueSU2t6",
  "key36": "2adxq2DkfjRU4RxP9xbFaoEqBJj8wfMyyHKz18GyESgbejKkU8MhbfyraiYzMQudzhuNMQPaZdtkUB3KkLC5sjzd",
  "key37": "5FTZ6rXMy9wurPtBsAUmViWzCmktUBaMuoY4zytHtTV1S8KmB1oNwCHDupaGPvhM12qZZajwMFPdStccnXhBFN24",
  "key38": "vuqtfRzkwA79JSB9iepsvgDUkLuEuY4dhum1gH7Fm5YzRoSdmsCd8kix52JWJiYxrppnpAMeebLZJkQa4isEEFo",
  "key39": "4VqT43zhuB28RFzdmMex42UZX8EYzKkfv9tH2dwehxQKCpnPE4spC4VM1HUJqZxvm7XGH17XjDdzXPgGqRXAaHeh",
  "key40": "5fNjDXuc3nufWjLNFEyZYuE9GWjkKHLWs6eZBcezHb8eCwzxWus4DCMGsjn4RLAsfDEzCGs4RKXVVsnvMoJSjNAP",
  "key41": "3aAVFKEHzymYNVWvupWyrCuUGBB7Nysv2yiBYaTcfP3MXhaawEUvMyLBR6vUaCgxpdhR3ozCuxfmdc34QCY1ooe6",
  "key42": "3CCaK9EHFxDF6P8RgDtLLAMhn5wejdYevGxsoWGZmExn34qoUWhxnMExiSm37pjf4zg4TjoDVMSTgqbRC8aY5fhp",
  "key43": "2YQvXx3qrBuQKr9Gb6rXgxKtTdiUNUEbqoxBDFdLXyybPvvCc9WyFJ7z5k3Q8bTJmMQYMvVSKAtqpE2PPC7pmvnZ",
  "key44": "Yb7Uy4gh4KUWtJtAoWA8RyLuDrMVJKwcWJ9TyPw1FFP5tRo9mv7tzwQV9MK6ZTWWB7RdXL1SaN9Jdv9gfX1bfdb",
  "key45": "5S52N8rBw1qzZoL62EX2CQkwx3oE4HKfZ95g9VwjTGHAjf2Fiav5Rh859a28mqmEpTDJxzBp9wWdqdXbY4gvP1kY",
  "key46": "N1Rh5mmTpoSpvXrFca5QQ6HHXBSV3SYaAtT1jxfA7ppo3ixzTzPknN1CPCuaChYPZ2ZZX8Zq91e5H3vZcSMnKhS",
  "key47": "3dR86cf65fBp9KmZacGbh595GX48tYezQZ3c5YnZQEdmEK6iakz5mqjiJDwXTfnX4GBJb18LE4QZrBM3rpdcKXka"
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
