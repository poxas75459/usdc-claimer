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
    "61TRk5FLe4tA9fVi3nESSKj3tsUwiQepbQ7qMCXMYfpfa37NRSRUGPGDPiNtpYkXYMUCMmQe1io8egmp42tRc8yB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "438WV3WZZNEuFSHTDQbHDoMforgbR31xBVzjpY3MAz9inJXo1nrv5YEGvqdjdCTVsZJw39YrEmM8zYfjS1e2Q8NP",
  "key1": "85pHCYaAYAdfwRamupzeK662MMx55Fz9Rw2ECNMKf9wY3Wpd5fwhgT8CvQ49XCPjLnBgAEyQCHWsb1BFZayfsd7",
  "key2": "3VZmBomUC8Kn99kmiShGg1czLmpbywLERwcNY8GBm6W8SepA4hWV6beX6cxsojDGeRpbRSKncAE9cf29Wmvdw6pB",
  "key3": "42ezWaMjbZ1MZnw4Dr4bHhp5x3WkvZpBPvzK5ra9YCT4Brk8kbAVrtY2qQifkvL6XQXm4xSzWdwfkBi1nZwrYGu7",
  "key4": "35PNQJpaT8Z2pWPPseLxvWcMVMDBUjFxYqUv7mNwvQkstTad25eZneN3McC4rT6BvNF6NznNVMxyiB5gj13LYADA",
  "key5": "33aXhct1E31ivtwVNGvaho83kKQ1DoBPmTh1uNJWLVtQRFdZrwXynZNMLrK5umd86sbCdA8B6JzaXCvTzBopYiDV",
  "key6": "2dkYENxyvwnusqmZawYHWoc4B3XXMP9x6h37gWemhVxKbHXhybs8eZnQVc1cLm5THezL7gCuLa9BhPQjMLDY3yGa",
  "key7": "3B9FhtnB3kDyU5fkbeyP8s5PmzAAntumq8TLUbVLEFSdYgfp3yZLHg1DEyVBPYYcv1fj5uvCK6pS1wsRrsVtTGpm",
  "key8": "3iFLCRMtT1WUCstviYM6oedhJLVqoed6NHSiNN6xCtW8w8cpNgTYTgXPgLTEi1wAD3QnrCS6nLzv1QCFihkbg9vK",
  "key9": "36yJtBomXwzkzTp3yMPydpiaXCQXaZ2mhqHmNz5Amf3uet81azEboaRDp8986NYhdavpcqKC38593JWrZVxwjb4m",
  "key10": "47mwX3iTFUFhWWJF23TnZqbmdA9wz56chhCeHMgUaXnhqC7czuGeW3NxTLMD8tB1RXqTr7jtx85S9h4kU7ebAcwJ",
  "key11": "3kwdfjJzYmbQeXAzZj5TekpExaA3txsjUy9hDw5HSXV7pAA38wYvgF5KGYJvvvaAjsAo5LgVESvYBVZs2vvNBjFq",
  "key12": "2B78QhnyGbihuUWyiXh6xHteKZWDYtTFYLC1gYSihvpMiV27Mp1tzfnSqyfGuwpNB18sa1uJHt63SFAFgYjNtC29",
  "key13": "41V85QXSD29qwnVt38aTxHsP1pTAihpuau5GX1MQAd2SmszzLAMvkvyv9FhCa91x67yiCfRXtJ4FLRxf7x75JttJ",
  "key14": "5aYJQNwrVKfcXUFX2EpXjVazR2vThk1usP3GvU1cVrTVxq3xfqJ4z15cfM18cQutUPxsWCCJzZy4S9B2URGamugR",
  "key15": "of6jdZ15QJBWTDr5K9s4NAaKkve16W5EVoqAUHFEBgzm4DYvwG35cHomy1tBfb6zBguws15GjpA3fcGww4nx1iG",
  "key16": "5ckW6apW3XYxebAvZT2SJFqwVqFxYbkkNAomaUkyiCYNPnQotDq38y5eCdUvz2FyfpJrUmhUVHNN2E1Ehg7U8SGN",
  "key17": "dW5VK1zKp8Z2y7QX2mJFANeFb1uKohJg3tXvq5ag6e5cyEVtryfGYCAecG5aMrbm121HRHfLDRHXqhQSJj6VNj8",
  "key18": "48UfXNYiu2GFMS9PJo6AMYNzFfMjaebKMmtJMxyJPTNjTGjx793gUqZicfrccGui1QYGPgMsL43W3wm1eYYgU2Di",
  "key19": "5rXEaxTfdxFWPXvkk2wVi8yQMvMzpH9zozkeoBAKx9croRs3grPYYAEg3r3xLsGaUhR2n3cdpgJF9ixCPStoHEkd",
  "key20": "4uGZPnGerJ8vCvRF3X8tUn44yyV4sE1ifWreuiQyBDw6XBXmDJmYu5PWYi5EBEzf1rubKw1KHnPZefg5cnQHkKYU",
  "key21": "41hCxaTX7Hzzn6jg33N1QrX22paRpMxHWuwG729pJ3FuRNZgMPgXPPjAJDYGN1cKVQHkjhWBNosZir3aw5TxvqEg",
  "key22": "2xsEYcDrCzYbfDFVs1FD3aAFCjLSUnmdtCM9YUWJpwUQNTXz8XnePNA2FDfwucSoarYfrYEQM62AMhwfc8B49dG6",
  "key23": "4nrkNdmfufbnrEUHsZWmthvRQ8txKvpCJMFgPh97jTXnuk1q97E142byJEkdaWR7bJgNumhk8nwbzCiJyf6y2iFj",
  "key24": "5jSg8ts8bdLhmhR47BHUNYKwuyGmZPs6fFbMEr6YCyNirn62tPPjJGuaTat4uJ4Jqe1JZdpok7Kn3UdwNDmfkpGW",
  "key25": "3zNwLULHjG756wBh9zjd6YJSLhRuba1sF9YqMh1Crq4bt16avPmky6Vfm1Kc8S42rDmoqpunHrMn2qeMybW8JqHL",
  "key26": "3V8J4Pz1D5JR31uJ3JpHWsFd3X7MWZXtbuTe78xHCy3DK1bhn7ve2wrCZaWWvq8AGapXRJW1eG3Bg9tcAt9GiW6s",
  "key27": "5bX7nxFjWjQh2z62AyX3osREAHfYD5D292pX9ZcHCAbE3aDmeGMvYku2u6ix3d3YWbsFYte2KbMAcPNoW2QNLLET",
  "key28": "2NL3ZYfg5sfcJ2xCveQyK3ADyntwNszauyNDmmvX5C1qPjiZsneZiVChdvQyuGkkrC7MkHueS1iX1bebyHJVgp6U",
  "key29": "2oHoWAmLmjkCyLLX9EafG1cdJ2wFeMPbKaUtxJnfRoL1bXyVt5roHcxYF5dcCrrMod7jHHk6kRdMoLJpe4oVZiSS",
  "key30": "4K3JrUjhXHVP2XdfEzYWzeQ2jRNnsFVWJF8PX5dvGey3SVFLh6zbe3Rqm4iMGf8DSpGfDxi7s2P1g9BtSiVoT8FR",
  "key31": "2qXLA1TGfE4iy5CyUDeWdqpEKHfun5jfk1EhrcAEoKKDVvGdZ1jMhPkZny88jsb2c9E3s8SSHT3Ayx2AvYASzvxZ",
  "key32": "27s7ho6w5oudyswKfkSCoWyLmLzzTjE7pF8Ukbz8UqC9C1cfnvPUqSNj9VB6QEp1q5hU5YLfFEPajuzFRY7vjorR",
  "key33": "3MibyxZnu2sfzQCjHFW9q3xHc32PJmeKpXQfKMCoXgSepZiCgLeuj32J8JMkVuPybcN5sFeQPBgRbfM6nVNVe2U8",
  "key34": "2D182aaAfAYzJYLnvDD6GajQs96iTWNYquPyRxCc8Zg87zMjyTarsLBKZxLhomyA75yVhcW3JxACxJB5uoTG6sgF",
  "key35": "2Vouiync65L3mDyJQwk7wMbr1RKovXE4jFY8XJjh3iLsKuj4YjT3oEhufCB9zJcwnxsfZSt51YaKWsmFbDVRUP9r",
  "key36": "2Cx44BMebuiKd5cew1evgkjpsvPAMpee43FKSoVN1uiHp44Jj9wWrM9mFeTvkvmLHrF785hamS9b15xZJBLjrQNP",
  "key37": "2DmumXffkWNfK1cTLCBDL4ipzGMhQbMQwbnGUMgaJv4zSekhkUYEazXhs7695immnhCxHxhe8W8b9A4Wh8eUm7Sw",
  "key38": "2wEhoY2YYRgEMyi3EvH7kFZQSqZiHweDmeZeTWQwzotv1g1EJ21KgACVkzm19GLpEaxBTqCajkuPcJkCM7bim2Z9",
  "key39": "UCBAzTxUvnPWwF8s3zJzkbZ2A7TrMi2tF39gUHW3iVN31qdL2MTP7GNoU5bSq7nhuRvutT7gUqg7HHYVKZgZUpJ",
  "key40": "62SmCYXm2FFzyV3tthbqLUu8Pf8Q5ABtgh8a9uME2ogACeLPXYMfNiEiLeTcNDb35JBdeWCphV4zGErKvy8GHNJF",
  "key41": "tzBRjjiokeyr8hALe627wAeeUCJ2NDpB4HAdvDZY3HiKfFxru22uiPZiVydcYhdgdYxNb2EVEBNNK1vcuef6i11",
  "key42": "5RQHmsji2GvYQ96WdrHeTcLdbuLrSETK8Ef3wym8MzZnrcQTVeawwr2tzMPeDAY6NtVmhwZq3RV3HnjJjg2yPZz",
  "key43": "5jshzuadYwT6DUMKHDMEEcn9nGRJ3KTxddjnwzqYvmWAuahTgE7D5aWMS4SRKbbtaFgw3G4sAAaGx3rc4fvscEaQ",
  "key44": "5YKXxv29NwhBuKfbEdMiwjeeXXSVHpLhg7ST5oom7ZA4nCm4bMZPANg1tHpNgnXh4xmVWRkk22Ty97A1nhaafNWj",
  "key45": "Hp4ay74EFuXbQ8jrMdNaiMYXp6ospNspN5zrfjRT9iogmHqG2ynQmprMtHoh3FLTqMGe6NNUEXcrx7DpUJDNp35",
  "key46": "4qNxspT4yyoQuKdvWEaF96pjb99Ck46D9C3ztMwC13bmZyY5Mh5dhDBZxzQpE38LDvmNsyLus9tLRaGptk3psu1p",
  "key47": "2TNNg7ecgxxLJptziLbXus5bAuUMaaLnvzb38aeHbbLHjEX9XoTHDeCBAfHUEAshvXG93fjFWiJjanDbqSPXnUTa",
  "key48": "2HF9LViuhReTKot8qfd34PQDFGPmTtrGbg2RoLcTiFzSSyf7sN3sUckxejUM4KwFfr9MDi82TbBWt25bp4UpPNqp"
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
