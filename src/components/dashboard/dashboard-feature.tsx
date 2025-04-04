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
    "4QSpmLTpLTA9FF4arzphqrr8vyhaQkHqgrNap8CNV9R2WaztDd8rH125oAXEq2TpjN498ZPv9Y4NaCHrbgV8sbNk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KokzWeiVrjmnzeborxWQ89z82fQyVfXC7m8HRTedihhMUt5G16byi2SRzq8morSdR68qUN3mCFkDn8FnffxxysV",
  "key1": "5q321JEtcFt57Dvdz6xi5UB6RPjEdSP36Rd3M2hxpSNjmSxuvtTeNFJvMxAFFXJTVxctQGShoWN1gM4VmFhmVhmB",
  "key2": "24Q8feZmQtmB1GbLc48wSDDx31QMrde346ekhrwZ5S51jBzrNADQaZaRiKzWmzD6f35527P6fxkhRdbw8Uyu3car",
  "key3": "5f5xnkNyfVCTxna2ibeV6PzrGqwRfWceUBnTi63uvUi6Ha2V9XtTRz2tn5jAg9p9NX34E13BtKxEL4RSrwtV5gAT",
  "key4": "2s8tcFPeYYYzETaMWfK6qCN5YCZ4CkTroBV8gMusFYDG51vciVvmL8AAxr7nJsT97hMqSPmErG6jtXw8zqSQgNHv",
  "key5": "QwtdtSokG3UobXvzT4kMDu7ENC5tj31a56fkHSW4kx3bRsFUQ7ca6weQaVwmXAG9RmbiKpEcahJcu9jv3h4KdWt",
  "key6": "3ZnREeH6x6gKXTVhyzDzR138LLdxPPg8ScxRQUaKBA2dTAHfcCaAwMJMQWkar1T6syNmLV9mfEVYftUssBaZgQPU",
  "key7": "2Ft1gik2BErSV4DnvdaUCiu9h1paeoYNzMP5Ey5uxBftSENrPHo5U35aNdLMp88uLbVBnC6Eq7KNtZyaLjLD9VqM",
  "key8": "yPzoWHy3aJpZ3exCLhJrWcJX7aX5o8TQkzW9Hy3Frp7j9VTdBLpRu74MiUkaL57yRTrRG4a2VMDDsW8sR2fp4a1",
  "key9": "43KfWM6s4B4eLeRwnEoJiKzHmtuaMuRjaVTmeUfsDGNKQNjrVuaigfzrCMbYAA9aWyQYWE8VwXMr1f4jiM2q7Tqb",
  "key10": "5DKBXvChuUScfo3xDP6Agh5saKL4gR57fENKJHxeSnaGt2756zWgZazeGfkF39Xw3vsBdwnJJpnQc5gNHu4Sa7x9",
  "key11": "3oEogegvBtPAeqUZBft4E31VxRBJTgjAdBaPQoEpg4wez9bxDEevWTyZ8AGwMcU13Tt9hpUcGadrp4ABUiAiFJLd",
  "key12": "3tQNTb2vz86AjWzJtReg8E1V5yf3TDJDaU4Ziz47RHEfWTCtajXJdQWeyAKpp31tZ5KpdrofaMQt2iBNr9LLDsiy",
  "key13": "JQjjjGutiRKyWNTKo9QNhgzgdhpHMyRuVHo7ePGRUD64ujFNPGqu5UWNkDjjgoMUq8QnQTkncpXayrKUuoqeN53",
  "key14": "5ikk689TnVAa8z8fUf1i68hNDTDBCLFwN5GNr43msy1rcPGKnFmf6jUqgpcdkBUvpyUY9mqSY3vR2BvgPepvaYp",
  "key15": "KpE7XFRKZuVJjbBRdM4rkwgtuxpcsydJTgtrdk3ZY7nY1P5VCgvZb8Jh7r9y1vPFqWJuTFVhhsemmtTg8BkuHT3",
  "key16": "ZocNd9wgoji1435LHmUq7erBueppeKV4WLHJgGL8gBgausVe7Nw65mXExSqmJZaVypsyGXnQh2wQThoZf1fJ2X6",
  "key17": "4BcRmd6G4un18pGbFskMwRtbtj2NANdNhaYRFPB6sGHpipFwk6rMSCiTDhvWrPfK2QwqWBNWMRbUXpHoNznQDU89",
  "key18": "5VcGj6piXA769vjyJvBp2hAW5MyLCqhxqrNkVMpab5yAgvmf2K7SH4qtoSMLKyBvqLvmAdn8DiHeAF1kfhsrSSA5",
  "key19": "WHoTCUVLa3aLj1npvJcpExLkkaZnUGhMjrMoo3zxd2kkrv96YRaYt9wUdDGwos7uYxPR2CpZWgZNUFWTfLLcSwz",
  "key20": "672XgNY9Mnz9V1sR9avV37dQ7cD5kYTqA2mGEF7Dk5iiMiAK4DUGrRR9hSFZSsDWfT4ghgUMzEReEYMpHm5xHwww",
  "key21": "5L43WHfkRxpki4WjUTGPb3xTD5E8h2aCsm3BeQX1dzdtitsTzjNDPuS4zoqtP8YMic3HsTk7eSf5ZmEbkmqLPMRy",
  "key22": "3XWGYJr3ngGHxaRLUZhUbh5bTp2RnqEug6231bWiENo5owKvWWP7GGw51pLDwkU6BnMVZM9bazrevk8tuMLC6ZC4",
  "key23": "2UrMeFLbRouuUxGdJqUv9oVGFJj8d1SBMy9tX2qhCN4vBsKDRUFfp8RFcTi9KC9Qym3TgpL2xEYrS1BZt4vg6wao",
  "key24": "2RLjKTG8PL2VYeF8AJSBaHW6FcFdtExv47CwyV7kcN3EsNPUxEkkgeDuvbtyPfym7mKssVtWTrhWoh2m19kSXz53",
  "key25": "5Y6Fc2MJJmvxdaLqA1ndP7eP8wdLjWSGCyocPcMYr3Ppi38BC1QpkjwNtWN5ksEEm4rxmSRkJdkqWMdahdfBXndd",
  "key26": "4yK8oPF5f5eMc2JgVjPjsBe1WZJbnwd87rxnJ9LsMYcKD4JXv5gr1aKGj3hAQgQv97nuc99DXbMJPrdNB54pke5D",
  "key27": "2Xkeyfh6BahKRxkR9jABG7Ziz2DYgjzWCQzXApgH9DbVHnDt1M13hzyyuq6LqXBCZy6qv7X1QzxmHGB5UCp611o2",
  "key28": "3e8RFh7QtbfuQxxnzDWSwETRv1j7A3akMSAtWzrB8NYD9LDZZ2dA5LJaDnThuJDUgz6oTtsC97yBmxn6epKLhRv8",
  "key29": "4kjULfoXog2Psg4qrM8NWabMQMWyzp6yysgpprfEFK1zTAE38kAjp43h6ESp1FnPcArkfvCeroYG1oGtDKRNT7ec",
  "key30": "5UftD22vnz2jDdAUDSDNEmvHQLbzQJ5f2xMRQsrNqj6gFMwYUzXhTP8mhuW15RTY3DGChPDzZ7TrJtBY4P8aCJSJ",
  "key31": "3xRUVYxHpnkUWEV7uqwaV36y3DzweB1NJxqkZc2TwDy68nMqdHUduMusQvuXMHG4cNvQvij4j7E9mC9deJHjpa1t",
  "key32": "3TLQU2j6ASwZ7dwpWmi67eqAQvFx9TMtFtcQYWdWw3GFCiYLr46nEWm9Go9UsM1dmgoiYXQZuxEidBjpno1DRHLA",
  "key33": "5hzvubsShSLfJecC5PwBU1QkWoVzBxyfLoVzM5QXFiYrwTcR6QWJpBXd3NPKmWZxjFBC4w12CUSnNSETD3NnDrgK",
  "key34": "3NWL8TpB1DTfEKZMt7uj5NKa4KXsrewLAN3pA4Uf7ighmb6wAXnXqERS5TdYjh3nE9EwZ3DSjeD9HMCSF2fXBPB7",
  "key35": "4578wC22RnmfNHeyGUmSRudb6y7wUySqAePnQqtZmh6CT6mLfU6T3Bh2PZTqMrnBCNTbNh7uMkMoQFeuCEWX15bR",
  "key36": "5XrrmjYmLtZCGFrg517UBhE15ZKj8sbry1GydvoijUoppoa2fLBJWVo3QukJkTdSkDN4KSPrXEw8bdGfUH6Qnct2",
  "key37": "ABK39R8ezqsn492RWeD3onCCTN5i8K6meDFGRnxawmSJa3t8VurHKtR4HvzThuxtDt3sfcuyxi23fhjm6RkKYzf",
  "key38": "3FztbHEVvQBqhozaqkSJrT9L4CG1XcP5nbSG7VXSqktaVz6HpteTqLMYpC4GtHaTmEXvq2fBQN11tZwBSJd9UJLE",
  "key39": "5rMuAQCEKPAGi7Qk1WLAA21vvqJrkEAXbX14YrXfkFsRKBEjp6viR7ZxoawGcbhmumc5wdBXsLVAmBNJt4LwTTc1",
  "key40": "2c2fBgCbZckh8KSRE7rTo3eDPgDKjZyWyGcwFZQcyyqpNu78r1Kut2C17jPBfBUgzEgmd7tgit1CjuTe5PJFoNao",
  "key41": "4xgJjL1kj4693o1zNoakfTV2F3Da3ER2B66uXZ6H6EfN6Qe3dbUWBhhxEeoHyCDeF1tuSh9NCaEX3ruFgaCkinDV",
  "key42": "3kY1mhqbdGvscrJHq7j3jQ6BHYm5yjsXy4DWzYjckgB9Q6sPdVsveTukx9jQ2bEwWSVBTkzrQgn3tEQRjfpBpFU2",
  "key43": "5W44WC5Nm55bdQsbswd6xoaa5mqiqhDUVvfi7QvGbpdsSv3VzA1TWNgZzczou5zvzVuxCiZwgb9muAmSNCqqSZoz",
  "key44": "2DBg4Y7pc7HTZW6JYErvyKQdHCWYAddS2SbgrWF1LD9SnWz1aeFAsh2Ltu8EmbfLEM6ZUACnzSDAXrCZUddCDxpY",
  "key45": "22RSeM32WhgYB3RkGGxL11xFKV2xiFoPxdKMbYMHegGVEbFjWykhxbTscHnqez2PWMx9hoCZDZJJKjaKXqxuxEw4"
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
