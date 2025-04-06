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
    "UvfFB7tD3yYy23AN2fSmbLBviHCH7RgduWjAXRNcixurYh1pmrVUDb3Bf9SjXUtck1sQuRGYvQ9KDYzf3c8DHmT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p8V6wRDh7a7NaPd5iHUz3hyG8ywdnnstHTteA3dcT4iDvHAhWw9mnMsKDJPyiqxvfUMMocUa2i8KKj2psWXrCQV",
  "key1": "55qqt1y7asAPbkmybeDvi2CM88fWiW26iLJ1751pyyV6Cp2V8CkKStMzb9kX4xqmvt5H8ZRd8WDgshe5sBqaeLrN",
  "key2": "3JmPtKbCqNdXiHC2cCGapAjzW9et6Nn9uE5o2jfumyJFFv2KenXFpyd2GsNdFYgEF5zXc4rwd2KtoAz3LCJXZqHk",
  "key3": "2GtMpS9fg8vb5FnZbv1J3dXakRWTreDaSHiNMCL1KqGYBDpMJ67BLUJyuGcUMAFUKPQ919niD9wDxiAcE55sJUJ3",
  "key4": "5EqwjKX4QhaFBbicm2FNdQnVCJkvS1ybqqaqk6FvXuKiWFmkCcb4Dx4WpynVQY6tyyJ8ap44hsnReFoM4cVXXkrY",
  "key5": "LYhVY6H3jJPD2VmWysh6onkNGhLXfxB16uRbXTE86MCbdD2JuS7k85Jr4hhHKs1y2HPZYQxKR3dUwmbEQsydNtq",
  "key6": "2rLZ4rMe1LSBsXPLQ93CSdA47y3XuazfP2FCyziK4Rfff2Gtk5pV4suQT5aLTmYgxyZ5minQev7rH1cC11y8kq1x",
  "key7": "5QRi8Jz44gAc58FYQKkVGMnn8r2pwkQXGnd1fmz9CMEGsjompP8yktDSjmEhR4DMMT5xSEoDyTbzTzyd8RRkCeo6",
  "key8": "2PgyovjFYka6GPSUjiit3baJ9Vu3d8rRy9N513ynLGH3c1gQ4BRCUTAGHVxgbjaNM3V8sqVTHUnxJ1Qa1ZL25LYb",
  "key9": "T4aV7LUMmhPqicqjMoj7726gfDv1o9KuadChHQtCuDfgbBAjAxXa1hGrYmU43iusy59gvForxTC1csPqLnFhK2j",
  "key10": "5h62f8RSRz6KRWMikwbPgbcpTT8XnFWuFfF4KGgWGw7fcoph5p57Lbb7QVXW4tZd93jTmvWpdPjEw1MT6fmjTmV8",
  "key11": "88fUwdvVE9UdNrQxFPus4B21HSxavL7vjJcYmeueneRoQqJiiCPyRe6FhU8hqGmESbs4TZ64mP24AH4eGer9hyv",
  "key12": "5GD87dmu2hUPqA3FAEYXWXf6b8ns7s4aKuJgeYDn3rD7YPeaV3QGV7S5LA7P7Hqu8Hpif2sKwaXLa3Pmpxwp3YLV",
  "key13": "BiTHSxDx8pfDUTNmKEWJNQVxqGYv8YbVY4gmM7t3brd8e2MeKtAFDJnNjPZFW8d2jSURi2MzQcmkMJRafMmVUCp",
  "key14": "3TDrK9NrDgUMCXPDSvXTKbuxSZK9GWniuLXiwE1kLKw8qVt9JDPz4mVDAzRqWPXTJwEcQNSPL1C1FUQMhntfy9in",
  "key15": "ANAFRRaTwaqQ7hEo56XYk47QibKipsHirVvWwMZZthbtDYEe9vraWwye9z2iaMHesgyNCP4Gb5tVmsfXKQarfny",
  "key16": "5JPmgGs5ZJNLcpdTCrRtGNhTCgAXG6m1k77ZdGs4Lb2BRTZvF24UujAqfumFuczRWcusSLNoQ9mmFdjMqFNV9fFt",
  "key17": "4M1TRRdusPbNaKY2LnYdjRifZA4PNpiUvi9UXWM6bk3N6bnUaRh3PXrTCTQHeiXyGoVsVMYu1869wdqdzTkXNqFU",
  "key18": "oKjibQss2cQWKn6YWxqNFC9xebQFVLitkXjcmDTKtVwkBUBSLSToDDrCHcrU2ND3bL75eQJTx6jx4ncAMEJVouA",
  "key19": "2Jc2KGMii7j2oCFhTS4qkakcjpGA2ZMd2eu3XpE4wKjZ55eYAaPr7LZPEMXeLJmGm5oQ1hEZ2H4ifPBPKSccNhVE",
  "key20": "3cqNf53FQRgjpmcwXsdWvPfBJJa5SRFyH496GYCBNHtKDZ66yjcSpRPhQKsZwurbUbD5BvtKBv7cZhkVRKjBsjAF",
  "key21": "3UEnxcnE5Uhf2Vk8grjbHWPLAtLBGWSwyCLhVcUFhPiydwFm1mQeeStHaZdcjqXQ9kwRQaJp351bgYm26mouD5K9",
  "key22": "cycRF5QwyV5KNFAuU3Fy3dx878Nma8zrhZhSm8wpDCJ22XwZ66xmvrQG8CHtpbYkt3jt95CDyUJUNdbcVNH1Mf4",
  "key23": "36aCCzDvTDiHjbYYmzafqwnAypcUTdZeS8YZzJCc7R5FvRxs6XtgaLh6gJTQykvSM1tTy1Uoy2yukqijgZkZ8gNa",
  "key24": "4v8NBz2Ep5qKG9S6UHS91f2MYUbwbCnNSffUxPfyf6Z1NaJLwHor6a3vdTRCwL5xtuET8EerEgsh7WZvciCFeoC8",
  "key25": "2obGxKS9fM8Kc11wn6RKS9Jyk7x2zm7DH4nEGNokBAEFa6U84HMmht7wU7rP5iYitiQ6CKJzpMDTwHrPodJTBAqV",
  "key26": "VsCKuMkdG5TufFFixUwDfQrJfY58xZnzQazy9vu36NCZQMRHvkMBEYs1fGmrNybvbrHsVvarpS8eU5aKUr3vHd8",
  "key27": "4s9Yn6KLybbw9eY89MnwiqsdHQUaN2tZeCDHvgttwavsHbqkmepwVTs92h6UzEvhxQCMoQLHCzZpJgg14naTL8S5",
  "key28": "4qA9qNHj69ABCHFfZgWk2r8G6tXmzcAdAvb3x3owqy8ikkdZnqFP84whKtu7HB792D1vbGA8mDdoAD5HthJm28kR",
  "key29": "46oJdGBWAZSLU4oJ71xrBYwTP8M5uEEpxtTMgE51CkpsfKUcqcagavFWYdE9qsLBopJv4hMZs6jwHZLMakvBCC6U",
  "key30": "2yXwPMW3pNKUVaEDnmanpt3kzcqgkbNoS6Cq8o2zsEBw6D11uhprCFSKnXFSPbVkLHYoPzs5abXGELHtBwKE37DB",
  "key31": "5vHxngdYLzH5mf7jzjBc8U2j71x26QwWjDG1zNP4VnzHT7R8NkaSGKUhbJjUSTp79HYY7pZeoqpV94FYb966a49V",
  "key32": "3Ycy8mZ5EjiHU531wByBfv32n6iz7Qx4ABBGQrVqmwhmotHeKi49hhyVWwTcrXoK9K3HTLsQHgh2ADPVtrarLxCf",
  "key33": "4oX5CVoCpQbwa3wQ6wzDrYexdso6nssU4krUc11oPWjckjWyTZ99GW7oktRU31kgXSPSxZsyRnNzR5pP78k4BJMb",
  "key34": "4TZyG2anWWtq9kyFsB5AJZDp1n7s3tNQ1ZGfyG4mFsmFbDJrbdnNFocuPtsPw1sHBDnNzjuZc3nGrMjky3b2M5a6",
  "key35": "4DaYVzjX6Gp3A7rnHp6tYSwxxd3A1rov5wAK7NSWfSzx9Yg8VLRwrQoK7UcK2vwdodBwbRD4iV5dPpi7borXiKRo",
  "key36": "66XgwjPAsZFx27Tmq6tU1SXFuHZKNNugPbRYYLpoNCjuqFiq6T2woG2ZdhadnQwWxumYroPdktx9FX2wg6DSCCtr",
  "key37": "8g2V6dr2EximVGNCxSAcQXiYemADTjS1RpXS6wYWHXn9CWR6tqsp7wpJjg9Xbmd1fFyVYpQRcafw1fKjhPvxCEA",
  "key38": "5MhqabvQuKkKt3vjaE7td4raR1qnTjGLBF2vkT7UPjLvBZD8y1inSNMrfxiaDfmaZTNdxUSSmfN84Kabz9KSzKTo"
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
