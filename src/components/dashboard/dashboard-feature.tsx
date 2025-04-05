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
    "5tzA2ZnSZL1nSJZA1Mvy1rGX8A5Rd5d26u3jjutJZ6LHeL8a8zvNw2D125jxgBo6vH5NqdMf59eWYpPot6RHEZ8y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Cc3ng6GeBnzjjLK9tGEuS8wcGBLu1FKEZ9fzk7A4d3ajugmNb8eWFSkND5oAjJdNmB2XoJVX6VvaHx4vhoso2AK",
  "key1": "2sP9671MCGkV1zyUcW8tJ1gbjaFAv9iP8eoRM9hmzqwh3HxZhyskaAQtTSZbKjp5HVjcVPqNFxNCy8okpcUWQJxs",
  "key2": "FXQxT4KvAmANHU6vhQhtgUdKiqHBR4HCKPRs39XviwFoKAxseBfSeFLCAVsP4G6nj5ib8isS6QCMuq6nQriGEHn",
  "key3": "66F7ouvF1cWQbwjGqJBrPhBTxyVpSZDUfmqPhToNnYUULkDAj4sotKRF4aRmmXaTSPJEMTpWQmnRAA8dxMdLdi1X",
  "key4": "2wFAvwWbGUR3QRjwTmCpGVsEwYU1PQoUgzd4DAdhoopUAYvTqtj3qh4nmXcX5NNPDUCaJfdoKpWnGbtt7Cyk4bCA",
  "key5": "3pQ5JobTWhnv8p6YCfFDDpaTCPbpBokUE3zQUqEiSEst1sCS5hTDtJsiQ58EDB1d8XRmopfjpfmCdJnMHCLRsQ7a",
  "key6": "56dH9ue9eb6kqiEC9y5EWB2eHZnUgCqZ48Kd43WnyuGzCw9aqxTNG15cLdrDyBg8F1Co15NF5zCBQ1ek6aQUubWP",
  "key7": "2jdWh3rs2a75RqPz4qTNTXW45WRsYFeAuvC1s2juYFXC23JBPGQkXromQvBKpRodiHmAsKZ2PXFvLMfF1nat5DTD",
  "key8": "2QTwSmrMK9AogFXua4HYYKkSUanKjP1oKh6ymbmMr2BUkFT7KJ2nwQjdhkXmrBGEnAipDQBnun9GM4wzv5Uk9UBU",
  "key9": "2zKKZwVYj5k47gfPc3GkHF6237oJ48gD58gugR2KVK2fwo6R5UTUuS244ZWtdF5CihUYs93QZmTmVtYk6VH9BYHS",
  "key10": "3svTLwrzD7U6uDKBbG4VaFXy2HrkzTBLsA9qTNeZjR29zyh56K3y6CMvobnnxW4igdkMasFwN5SzuAsHZirMK3Qh",
  "key11": "24PciEomZvuAnrXWKmfYAjtyXVr7uTfVHzSAXXJ8ZLfXdDdxEezb3H8f55SrjyrRkUFiwLkkqiM1siveAGKzQ6VK",
  "key12": "2SCx4DV9SVcyu3FKpJDEkFrQr4iVEngnF1Brf7pJMMfpqhLzjHK2tVaR9TotDWBHbRypnzxDe8mjC17kZiod7Cy6",
  "key13": "29sbnKLodR8Eq1xd7pffKHeQFye14voLkwV94XRnZV69naogCbrMNUGaYoAoLc8E4Gf65G4taXkja83iuhpeHKAG",
  "key14": "5wGaUkJqh17KYn4hZX1CqtrELVQvxhuq8d6W5ES6uZ1DY8hnjuyQ2uyLwyaFp3wwJsF1GCueZoyZwtHmeHah4Dbe",
  "key15": "2kDgABxcCG5ujQ7ceLEw5QCjtQaagtjbyUPh8teCvhXX6VhLnj4zLV1PvrZ43c2VsY9o5hNKJDKoAYTWmkcSwqFk",
  "key16": "3wFUFyMYi8VVDen71EHeZV8j8uawTTjAPNmaMbzmKcThJMVoB1po8htUBioB5vueXbicCVoDw9Kry86VQKoqvg3F",
  "key17": "5hkEYAHHLR3kCK3KL2pbUWgbdRFu3vVXGNjzxzkWkRHJZ8ZAKoAUM2myxgDdwABHgUHA6GdvaU1kZLiuoXuqgiM8",
  "key18": "sXn5pMRuPRKWcEwEeYZf6NzcYvyuZZxZtt6nj6X3jfW82MebhSWcDmWxHfZjyPmQMtoCBjGxduHbWWvcfiENcwB",
  "key19": "2RMdaBM1mPYMc7F5USpjLqKixsmQY2zJXYUVEoA6Amoz33UCqRgNcWnvN6RsiGnv8guumzrNiEq2oXPq4UiQQQ63",
  "key20": "2Vvby1h3MYQsuw5vY8W3vbP44zCfQM4D8ebHqLoqWV9P7xuUmWADc4m9jWFyDNTKgcAFBtTbGu5XSsLR6DfMkWQo",
  "key21": "44oaBXdZppD4f4S1nsvUna47EnoPFX5xbHjkSvRrnQHaCsebk1b8VuBUSVM36C1z9XBpktJQJ2RjY9mGirn8QR8e",
  "key22": "2XuoNmZvcsBpDbnR63pP9Ds8q4ofZnFYjabiC2PyZxVovh1uNrZRceCUbvV5E88v8xCo98GZ2qc2ndihFxGeHmM2",
  "key23": "3bg8SB66NZLpbcGtFM5aMgKp1wAmaTZEWBFKNieP9L11RXbDFcLuG2FXqADTK9NQMBSv1s7HCkzERsWXiWyz8nBZ",
  "key24": "5Cpv8SCYqtMJFhtUGxzB8yo1bENy9n1wUp8cxfPTmSWJFtw9SLveXpb5Mbjj82vh5bhk684K5igBVGcQCF9nDtd7",
  "key25": "3dcpMC5Y33CFqiN3c6cRx7p72KuQexHTorrJGijPbRvoUnCsWnsL7hgkQz8aDjDWPSG8wZ7KT3Di58m4Hh4RSxnP",
  "key26": "VtaPQwxmZUTKqQmJjM4RzdVBNfMBBXiNYizCsCymgV4BFXeGaeB2cQxrVNyULUG1vpWVKm9WLAHzrQ8RfofVjMv",
  "key27": "59mVcRxvsDzJzuu6ixc9NCHgXLe1aMMyXWy7J1esjyNeZkhzVVWjiKcsdPTNpwNuxbyBC4MVit3ELNTi8HvGrbWv",
  "key28": "KcDvzW9jLzY5My6PtX7McqZyZsCge9hWQGLGQfNwDa4w8K3ShgF8UAwtSnCSG8br8xJM8KsSPfQq2tC1orWgvT2",
  "key29": "29vwPH68v9xTbWdgjr7bQhao7kEcy7nJ4fGPJqJGMo4nVcAv582e5ZGUiGPgPRqimpAsMoi7CJU51VjJyvvqQ79Y",
  "key30": "3pxspwp9y2TeVSu2bYg78ajGY4LnEQebZUkpP2da31GknnvKzbgGnCytUDJMvn32bZrjbJumJYjYtNfZqXNFsZz",
  "key31": "2HLytqbcTGz2Ln5LBiCLmoqQ1As3FUj3aH1EzGudei57rpJ2XzLeEHVVNaY8Y56jGUmD27nGSAjpsdxvb86JXDCD",
  "key32": "1FSztf4jeY48mE4fP8x9tFRhZrqiKLAd2CA59ET7rBFkegNUsJauBzZcaVV2119Gb2zEt5xkTAboCvYCo9xpCKS",
  "key33": "3FmzjSkJsZCDLvEfsRcTZXgBJs37qzxHL8f3sjg8WNuzrhJuvqXgRFNp4SWc6iwFbJp3fG6ZyVc3gdJE8so845vH",
  "key34": "2qTxmQfYDCbJYeTieewisxoVzVz2TcKGGjxaAJM9hKwubP8E3QAn4r2qta8hcyA6ZDWNL1WyWjgJVvjRSuwbVLbe",
  "key35": "5UXj4ULU6XmgmJpfHoAMJMUrw3CpAjakYLD5gk22uDv9P8CZW2LfZerx3sZtuMRve18NS65G5A2e9YKj8Es2zB9h",
  "key36": "4KvjMDx9Wm2fjUdyfAXDTz4QkiuT3hi4UrKE8awepx97aZtKHBq26nikjnasvkrB99Hw5FAFJVWEtpLLpwdFZ8BU",
  "key37": "mmCtwm9b8UDXCHkTem8tzBVFp4sGKfmq5qxvqKFvxQK15zsZUkZDCXaWm14jUvTX4LR5U2Q9hXutXZnJ8Qy2Cgf",
  "key38": "4ucY1fGBiGVAYLo94bKqE4BtsG6TsvK6uLs62shCh1gbmsqT8ZXvEcv1UBnjUqbUqbq7DBg4JyRSgdBKuXwDVSQW",
  "key39": "3U3cDcV1EvfpSLA1fUmopqGcqfiAoNhYCgbC3xMRajrWdWj1tAG54YDaM43ybmdNbitnNgYiSyS7kh9R1ypCuUmt",
  "key40": "5e6SuaTNHD2QiySh47H8DL5PN6aRj16BaaPQQKLxeEc1WvsTcAfxMQpCVXpGhoiTgccMgL52ZijG6Gbqw3ptrv6Y",
  "key41": "32Ek4Lza2VRoG1y3tMcDP85ER1eiEsaxYR7XN7DPKBe9sNg8PxZFgmQP6dMc8e1YxdAaRJmsDgVsTJccRULQdUaz",
  "key42": "bEXdjX67GWpfQqFzu7hJxDeomoUgppA2ugwYFmUj9fq5kUdZ2hYNBtFmkkLyRbeFqK7BhirSSZobopqdWvPjKNX",
  "key43": "5gP4U57vRsSj7DqowqSLWo5ZsbQEtnA38tPC9KBeDUfLXxz2bByMRxwzps7V7uCzRP1aoPD9KWgDhz3YsG4Srk82",
  "key44": "5gJy3KghdLn6dkpu1qixRSeqLfVaLBF9pmMPRi3jbH4hdz8LetrQkRM9yvV4SSetEo2utUjGyUZHa88bdYM2c2cG",
  "key45": "2vLiEAp6XXf5ooiPNW5Bh81UZCP9w3AGFDNG8vvcYpsAsrAn1foKD89hcAUN6T79D6wpRbyGsj9yAL1AF1eMx1XS",
  "key46": "3FfxQJ5WKCqrjere2k2p3pw4cM5F2n9HBXwv5ykk5tjXiXyF2UEWL8RWt1cx3JFjxmn8BBtPgssGPsijKZcuBzqK",
  "key47": "5jXG3tNriFDNc4qZWzMXDWfAAfD9qqrbSHAVQC9SZTyz3R7JTPHXmtUGHkd2FCnm4SueeRGJpLD92Nrme5ePTn6c",
  "key48": "3FSHax7nvmtQ6nUkZxvPo1LkbRuUPribB6L6dNabAhBFm6WEbKSLxqgU74A91NBDT6fFSz3Ers1r8fQNtVwAMkpz",
  "key49": "3fmVU4EEeBtVsYoEDd4moK1s7AG4y5upuHfLLexwzjXofqi4E2Fercr9ZiJc2x936aYnAJ4QJec9YW8cgF5ckbCa"
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
