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
    "2sXiiQroFkhRCYuNAZjaFGWvJmDgwRjRDWtBNp8VBtc2XDmTMC5dkM8hwvQEYXmUFox3DDBpbj57fqHgD8WL26Go"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WVAR5p8aqcu23qBEJJ3r5vQkycEHQi3HTdYJjjCp1nxkyzw3F9eCX5daYQeA1JkFjN588Qq3Wq3M1QPbS4DBqXc",
  "key1": "biRuzSGnZgNRBpg8Qck1tzCvEePmnyS4omcx1TcgWX5q6XVcNHSAFm68pX6EEQruwE4wJmq5uBSfktXwXuR6XDb",
  "key2": "27qseZ2UpNVwmkwcDrMdbuuTmSsNb3vAfWgmS4Avfy4Fa894vuHfXBQFC2FKBrSm9xSiePsAoUumq5ECLUYCbEgs",
  "key3": "3d23oZMn5eSXU5bGzkLaoaN4vWoTS9oTAYU6NjgtAQS1usxewqvkDcKhvHc62sN6Wxn3CbSnz5vpdLkBPLvhKzmY",
  "key4": "4yRBNNHiqfHjCLtWanRXzGQgKp319tWM3npxB575e1sWb383vnJABpRySHbwV8zbna2qusdXjvGzXqPzvPxGKj8G",
  "key5": "3wgKxVJzebzagkYoZhvX8ZSuWPR258DrxnRnuEVa1Uz26Q2cpdiDMYVP6SxJ3RUpobx17CpJabjSqUnbvcaKnwL7",
  "key6": "42UHKGjAppoxkiunCdBsTyk6oQUYYxYExvu9rhQqhfBeVJHgEYcW1HCV5bDZwztKosDMeceKic2QHHtj2B79FqRx",
  "key7": "2mEahbwkfSS8G6en4Zbx2VsrsRQUkqqeXVCEeQbzSdJ5YrLHd6HhueEyTqrLLhtzE9ckJCde8iui6jN4uiFMa81r",
  "key8": "RyveJ5LbWdMHbcqVqQP1PPMCtYYeaBR77m2hgqVRKVnUPQVbAJGXdpma1NSCyE99JyRaqVDkT5rQn8mzwiCz3rd",
  "key9": "5eungfNn8EEMuohbb9Rp8vnEtGp7DucTsFRS4oRHPaTvvsfC1UfejAqxViuUmNoySdohGrbhPoTUKXRUMcT7LEvB",
  "key10": "5YtxbEyT8Ud9nwTtRP1a7xeaQEGeuFj2BonJXnroC2KWF8sYjDQATnN2tZkdNRTZF5X4yaRBYmLKk282xREsCAuE",
  "key11": "5hWDULbsCmCsmp7RTrCKCVu1yMzVkzEcQ8EJHWqDDowtuxqhWrRLWKhf97iRp66s1ZpfQhC5A8TmJhrtVrZnELzz",
  "key12": "3RSAijn7rZYTJ9r3S5mLuytLPKoxxNH7U1V1fe5Kf2uQYvhmYhqxmY25jmKsrcEHS2dH3FFKwFLgowFAV3LPwqE1",
  "key13": "59a8ie162T6D4cgyHj48TeAy2xQvgeEp7PuG6WueismJs9Ho2oQJ9LpZYN35hEYcqk1zBrMZCFr4NSuCnqynJHhG",
  "key14": "5MmxKXQKsmGUBL9uxUru5Bz2P7soaXaPJNaNQKZcfsYTpWrc1YmyiEfvuygXXc5pDuSCmjMKV7xByb4rCWE8xsiB",
  "key15": "JcLiUAkXxBo9iseBKQiYUKaoofwcyCSw4bvQCwycGPVzJeNp9UzhK9PazpZuuoUQ4HNpnvWHz554ptA4ymKzLNM",
  "key16": "3dKpmH3d6ohxaagEKD4Xa7ju4qSxRb9EjmfCrbWnZRDY4uaxbXc3ydfModZrxtXH7RC7UEGoMaazpmTGzgi5z8Ex",
  "key17": "2yxdSSJSqv2XJjALoHiX7P9S35MpFoHFZMMLwVDPCuuo9jxZCVijqzfsxguKxMB4YaB9KpgS7Ssmu3ckGreAc23r",
  "key18": "2F9PuohZbHCDSxZT99HWWp7ZzMPUtXoY4EHrLeyHBv1MYR4X7rEPFT54ofiDhWrxdgBBWhhDCjhNiipFxH4CtkyX",
  "key19": "5vaAntjt2AmtGXnRjT6bkKN7DA4z8ZQNPtCS2WXPpU46aHwx5MtRgDJkzj5m5ukbUHkb4krxbSQLGZsTHny1WUSQ",
  "key20": "hoqKtcybFs1QYUrve1NtMGZD8yY53B8DshDFhzQcGLQKprVRJGn2LiDcWjLt9FWYChhqWpM85hp3G2zTq7dyN7e",
  "key21": "4C5HvmDAojmkwuvz786XKRXnzmxd4hHcft7imCMqgEmXi5duAXjDWWQghfEqEEGARZqpfLUYnN9iCK8jH2NEqiaS",
  "key22": "4NQeT9Ng9VbkJwcY6Q4PkREtzqPWFHztZy1DCe1epxnBSvZj8VDrJ4tT7e1WvvEGKViHkadGKftgEbNW7yg1Egh8",
  "key23": "22tQiNyo48myaEePikkHGd4Nonao6kJNcwS5hSPQMkBpM1ivJgfEBd3Zuu44fcaoMihXZ2Fa7Tn5ccecQ6JahZHx",
  "key24": "3RjbxVPqzJHieTWJpf32XaxwjffWadwK4CJi5gqvE9FL7vN9iQtnmGUbE5QgxsXaLtsPAh58pUHJced6he635yut",
  "key25": "2AcAywYDs8LqxsEMb6uqu4TpbEYtZRvYzajrQbdyEa1FwMm3uLJGsrkwLXcBMTyfEMhNd24LBMuEtoY1h4d8bkdk",
  "key26": "2p3jQ7P96JuE9XyCZtnu7M11M9rsvyQ1WzZANa2QoyxmA3WfinbxEaWn8MELDpRqMYW6ZX9vFvdek6HCzD6jSqWf",
  "key27": "52APNePyg6QARzQmcLtezFchUsiqrDJG31WbJp9gMHTBprV5Je3eZDB12uBZyVdZTibMHuyd2LpMQEUC8qgsQtJV",
  "key28": "3dRdXd1asfCdX4zvEgMvoibeSyPaAXSTgYGFMFHpakRmiGJkUVrPZEP5RDu92seHmy4Ek846SbdognJoLygo6HXA",
  "key29": "5snvpEzwpumHCWgghPMn3KTLMu78DCEj645C5ctqm9zcNvMPDVsuwvyRJSZFWEaaUm1ynLQRFF37GRCxWxWky69E",
  "key30": "eF1a8SPp5ZASsVkCAzaYFHSXRZUZcBfzBHGiiGaT2QS3a4BtpFdnwcapVonWRYbg7NFDHY6VD9aTNU5PvYyF3xo",
  "key31": "5fDgdwNZdq5UYR5Sap12xrYVJR7eBGqqPoNbi9ERWfur36Cx8SaoqetPrqsnNUHXegandReGEDeESt7EaxbZmD7n",
  "key32": "2qoLqt47KR4sueeVdGEyHkpe1tAxzf2GzNbdjmiSTXqXFCEP6QjztNNHEYLhcEh9ZARpCZYVcnP6iXexiEzkgGkt",
  "key33": "28CKd4ZQLbBC6p6c48XpyQxgXndzXfcuKW9WjmNYqvFg6Zy5g7HNJS2eeVkGSvWthekQrsghCP1FS4A6xSFLeYuD",
  "key34": "5GxAaCcTgEUcDKLQoofDH5adyAfVP1VnhLXV2Z8Kbx2NK61z9U8toNMhfrKRNdzQWPUJtodCRxkEvT6VgpfmR1tR",
  "key35": "HDjcdUGqw4p5BjPzFdjfUfWdS5o646Hppej7sGTcgEcJvvqaAeSoMHi2uzu43zbgXA6FFAq9zJcdXq7Woy1qiro",
  "key36": "5eSq9Nq5YX95Kg1XuD7voi6uGzZ5dJUYAyszSC327AFe8VJ4vnb81jWGXnmaq8MEWxuPNqK7BDdFd3zwYhgGmSCR",
  "key37": "4Cgj4qu6eCBUTz3hN7migZRLzEQJxi7ENtC6m2Ytwjxg9Q6KG5fdtfNBazmJDmiAPUfsbdw3Sj9BBGUwhV5S6D9B",
  "key38": "ACyphDvYRNrx1dbWXCRLPSdaqoEdr8EYjQN8oDtto6rFtq2GZ9nzmFrpQTfu9iENBp4hX2fjep5y72Mef7tYher",
  "key39": "LgsS6wFCGJBjrNU9fHY18rQyKgnWhunCRXkuTnFLNdM9bqX65V9rSgenAGCbZttLB2zP5H3exhgc3rW3PTMWVqq",
  "key40": "5ThYrz5YTwWMZLd86EK9kpYN1QsC8WBWQDDiKqHnEzBkF2nyLctBNE86mKBx5XB4QRzNLDqZxJ4anvPb76UFE6Ni",
  "key41": "4MxQZzr43Fon85eKCT7MMQipLLh8iCqNupRjG4BCDZfexVyZgUZRywMm38WNNujiu8qNXif3ZqvXjSMmpxYN3JpK",
  "key42": "4UnYYMKBYNivqdwp5HV7JMaFziKP6asmxNvJsd3Kp9GnH7hDf9DUsN6FhPNE8KsZUdiP7B6cs56V1xz6mXN25wam"
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
