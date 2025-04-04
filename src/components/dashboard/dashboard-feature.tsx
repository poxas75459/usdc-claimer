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
    "3sKpcfuHAMpUBcyfPF1o2s2pdj3aphHbGerv4sgJGSChc7h8KfUhzWj9Z2vnoe1naFrQxQC1824PC61uvbJuE8E9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fVjJJWZ6wYt368Kq9sbZ9ZYQF3F3XVFpyCawtgomJSyGpQABqLZ6EGqmLkSbun5kw9mHKjrMoVM4q4Efd3R7X5t",
  "key1": "4VgrzJYn8AMyUYPggLeH8qDZjayZxaCq512EcZqeWCR9ugcNZ2GGDBRQHDccfnT8ZRhyN5yq1Yi1Pcu6YEb54XNE",
  "key2": "3g7QB2TdbtzbqR2BiUN2UcqxnzDjh42K33qDreJN1PUFkYUQdVH4QBFJmj6QnxzzuLW4vWHSmWsS28tJJP1YnmRF",
  "key3": "49ps2BEoTfxdak78eKh5jWL2HqshuAGLeh45vdP3q3YNvQs2z6491gzZxVdS34WgogZwtjVy8xD2odANBuhXGpdu",
  "key4": "5x1ZKQpxwbNi6AxxRwUtMj7QHtV3DaXwmZ5EEtbk2sTwBNXCboFVxvCFeDXDUxrcdJknPgwFj8T2WhHvyj69Fjez",
  "key5": "2HSuGfGu4qXrER9ot4fp1T83y9UXzuzEHwnjfQddWo4TEV1vBegpYAinQLdzPTnoThYXxEPGMobGFiqX6fzG8dZE",
  "key6": "56DjpKk1fRciwQrQZcwfo7nEGReLxg3FvdVu5smdYgDeNN4SjCFFEdLTRR1z4FZ98fTquVgriA4wx67XpWJUDL98",
  "key7": "5wBtjMG3wfmsfzetgeFbAjPRGcoEuPwsbEjrXXCm99XaSpp6q9emCb6R4GfVEjFj7r7dsa48peYJdR7snkm9E8ZY",
  "key8": "2eZ9Ro9S9yZAWQJDXEmMYso3wRApESJ9xTBvH1CAQbncp1v1judF5By7xmpHLM54RzaEa4sWKMYYNfThpGnYU8B1",
  "key9": "5jJFL9zEwuuvoP2ZmAm3NKVzL5f2uhBF5Dkaw1fTpYxe6RxDYJ778fCtfJzdjDQcgkxbtVsFgwtvXKD3gnsSsRA6",
  "key10": "2LKAaiACppSKafyh6kXrhWj3K51rcGALGxpwxQKRrHymVeZwDCNdDf4ePKAxcXsHXyncpHZmQqpe4sJoWbigPnxp",
  "key11": "464AzN3VMYpWs6wVyFvGWs8vqrBVbY97Za1jEzjTo1fFMsgHWxQpg2Ss3Kee5QsvD6QWVrAe6kG6gJrkapJZ1cLB",
  "key12": "2BxtwVngUpHPqwT69mA5bojDutsmVTiUk4MRksdrXBMfzf92RpQwrq37fj7S2HAdRgxiWwwHjthZsSkhHHwpGvZ8",
  "key13": "CSe7WoR9auSCmXGxkNeUjfcudEPxxmJPAU2jJiea7W6RuvgmDvM1x1XBYZJrAAi2sQhbEL8VaA3fLmXzQWxHuPC",
  "key14": "3kG6Sid2NCeuyE2L979LKfmrubBpnQmBhfwNcCfshNo9zuJ86PBDsBzdWfrBfRfbEkpdunmZun4aTbWPA1236gnu",
  "key15": "jzM8TnjDyHjSd1YTJsmpbtKg2gkMCsKAkEkvShz32vLPWCwJVtVkxtjgcB2abyUZhDaHbB9zbQkz59j7x3wktph",
  "key16": "51k7aTNnQYSXr421bh7YuLxstEqiGmN7BecwHWbB8AUH8ttL4La1K3i1qsDbSao6a8qXykRdNkYHjVCP2xtEZG1n",
  "key17": "2iAJy2bGz1bFdD8DfZp6QLaWtpDckh9T3GRSKz1zsKEgmbxmjnY5W9DmAajN4UWzjV5XwxFCEY8xriTtofscEGPk",
  "key18": "2mwfdZYgtK1YTNoPQfSWDH2sVR1osTvZFshN88dYqsXow4R6PUK1agb63e4JD3kT9wG3KVcAvPqgVgHvscY2Tgiz",
  "key19": "57CgQP9kdeWWuFcMBHwPre9zL5uPBH7cTER3Hvs6qcjnkf3j9eQVdJs8XTYpWGBg7UsZCzd5CsXsTxojUgNuT9uM",
  "key20": "2uNNoD27JDxbvKT4apZvM5i9bHJiBR4Mxw19CKNbgzEDvqrZTzGwfwWZUwhNfTcedtQfhaq3ES47E2feVta26dqV",
  "key21": "4DEpEdpqNsV46zCbWBcEUwweFg4uRhCjtTth4aULs29Z8SPbkdkRX8fkHn1Qyvn5zefbs5Yf1qNnLeCmWkuoAHWH",
  "key22": "3jRAGPiHEzRML2DyA1kNjasZBSUCFPGK25mLMCUyZgG52W41k5FCb1txZ9rQq5c2VmZwZ5dkwZYANvGFtCRZJiC1",
  "key23": "riuSjQfhFr3hrAv7YEE55gWWduPnwt1tZmaWKgb5rFJmLap2iDknU6KSYeVpvhLYtovfDkzZMzvCCJWDswcnyqd",
  "key24": "4puQULBexBvVGm8h34TgAaTeUQ67K1JjhsUVqpgF1SXXfd6KWPs3mjm4hYEjBnDwkDCChp7RaUexEX466wZqBPSk",
  "key25": "5KWc7x5QfXvWhxbuS76TQ58bLYAANDAvn9DpVyqs4Z96NTbzaL6LdN3jVHH7TdUXjq2MUwmVf5eD3tnizhzvCiak",
  "key26": "3K8sgvnzGzZNAc9hXH9gdDwJdUCxEpo81xjnMGShCVhBw1hNpRXMBMUN4E5UyjSLoSeyY5gRMjgScfBFi5XTWU3i",
  "key27": "2Tjb6mUD27kKSnC5fTqxJ2EP7jZPGCpdKrqcDh9Ts66TEzpYzPmUpvtubzJSJ5Lt42j2ZRgknGNpNAkDuiBuZSCH",
  "key28": "4qBGMKY6jZtxbhA5o4tKCHKvXPGQ6LUZmZXehT8ELPNX6fZ4UQzJgkGiQa8Hp7yed146c7HYs2fByBkqurwQsv1M",
  "key29": "5svw84v9WWmcJ3i9UpxJUcfZCNVt7x8QFYBjiVt379BfxqmRH1rhfTwQynJVShNTjavaVxRG1ZDc2HqrGSDJhgCm",
  "key30": "5T5E2d5ybvBPfdf14aUdVs61pMWFfwooEr5AMibGCLWT67mjAcLwGsE2GigiCdsS1YgsCLX8kNM6ZLAQCa1Lovk8",
  "key31": "3gXi5K4AQB6hbPvHG8ftc7SZ1EVP4MPsCEkE4iaUJKcQmLdaobdctoieNeRSDoSDZFGjgpBE13LnPXUN2juG2CBj",
  "key32": "51gWEeFZ2Eiwyc1JBga2D8zS2W7dzbfi6EChR8CNy3hwRfXxnpCQ22tFepXa4CGSbbidfpfasRopVrFn2yFD5yjB",
  "key33": "5TQkbhsRxKQQ6z4w4qJmmND5diVTQHGPswc9jk5T5eeVaduXD4K7sKEy3b4EnSCVZt5bxFDj3L43i1sFhhHNJ1i4",
  "key34": "4CcYeN5s552ibqwcoWWyxqD4vDY14gkigmpJXnztmcUYmUh8Nbix2TwkyDEFA4mXUzYC4eCu1B14cLmXMchuzk3t",
  "key35": "5cnYE3yTbDEYQXH6AsYka6qr32qRjB3rD6wA3LBC9KNeHaxWjihdjpi1bZ4RzPYFLByVXmUcAgtFfy1ahivuoLBq",
  "key36": "2GWTKVUmZY39pQUudpTetJW1WQ7o2NMUwSvjrVJJZfexBh52cQkLMGUHaQy9z9zJhfKzTmyWQFqgkrfk2xbQx8yX",
  "key37": "2oExJAYYYBnALZWiNurpAL7PUhEpPfkCWyoiDfeQcbvGVvjQ9eShcUSAPYrWstn1injtR99gW4bAydPbvBV1zDKi",
  "key38": "3ZdDc7yHwpST1i5AeA9EmDb5XKNYcSoskZ7GcNG1H6qr4L6MWyr4PThfhm39N3sQELK518gjkBJ3cYrjX1Ku5yq5",
  "key39": "3dK48NV7phoHLxRSTZ4SoEGCcnSNkMjmVMrWUCevUL9CftcY2DooTKsbbuDDtXzdnsopAxhT3ydqewrenxFwPo5i",
  "key40": "4VzmpPYv3LPZPiKMBfWpdKDaJSkMMjhaJoHQoLtAo85UjjpxLMca3NgQeec9g4Dz6rdp6JmRCBurBLWQ5AUngZdy",
  "key41": "5nMvnu9tkFTSZEmvmNBM6h67qUTDaapEZDYrXS4a9mwrKUcZPNBiFa5AQ7Kui5TrK4tN1jyGRzj3jXnPiVzsCP1H"
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
