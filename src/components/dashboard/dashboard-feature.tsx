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
    "5LFWy173bsY7aDfGiU65Di6W1oiBMNZjxuB8AzpfB6tbipQWW9DGjnHKMTpWgB9i5Uahjb95vgNTew9G7LPZurHs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pUFtCWhsDD1SAP78jggGzLHAgq2xe2p25iPuuExg7r4K5rNSK8FPisdBaLeYnaTGJnfu2nrb8MkiNoRRoJG3xFA",
  "key1": "2gGgEZESXRhCCKCiPhBsimqaHT2trRzK2gFCfPZEJvnPrPCkpxMWWWJBikCsrbSQjuCviuW71dR2KnricCefpgCs",
  "key2": "4yQr3D3CcrvYZzCFo8TTnVSfA68uLop65xeik9EHxV3B6MovAc39GVX69wpLeTxqxYPWMG1hJUdFRsndBwTowABp",
  "key3": "3NSh3dmBbZmhKYQZAn3nz1b7wib41MEy5HMkskAAf16cicceExCwSmz5vhZwFp3KETNma3NoVXGbv1L9TcwzuGb",
  "key4": "37bpJKxTzz1bAHjGjo8ENarxkTtYTBN57Wnwj4BUrqVadHeVUZbnYwUMvJfqkUGAdfCe9pCQa2hGQmq8Hjvesbh9",
  "key5": "a3dKmz3rgGbnarZexez8Ki2aG93ixt4WaB4Z7VTes84iFPthpkEcSgJChoegf9X2QrXHPeJrreF6JzUTJGoVxWJ",
  "key6": "3RKD2XwSQyG7NiUtDDX8JRGR2dRBtsXqZEaKqyEj8x95eSeVa7Sbjkb2t7geHmtTu191EMZyukDKTJbRiGZ5HAjS",
  "key7": "2mxbg2F5HWyFp2EPufAonPhPaX82essvFgrqAWKq5qXQbN6rWLd3ARxbef8v4rgKvtezUTqhU2WcTs2yV972kQsJ",
  "key8": "5ui1ALjv31Va8jJcsonrnknkfxhyzuVwbmffKrdqkZHL9rnEKRjy5dEYWDTViA4mcFzBZHdJt5j5VHpVSA9jUoXT",
  "key9": "4Hgi9D6Jb6LtBRqZ6aN8MXiMHuaAT5eHLib5PSYnZg53dqAB7SVWMTvBb8TehSPq9c75TX3MxpAKQPs5x6B7Srf5",
  "key10": "5kcW88neCKt4KKNtBZZhkvbHwGi6PV4edBQFNtGt6pgWaddnA5evtDNe43x4U4EzQxpZtruQdMQNBEcrpGvFv3ae",
  "key11": "2wCYrvxEB1h6Vri3R6wvGLLT7aHc7AHUTfhLuxCwuAwENXFkhxD954G8ikASpz9QyhTp3S1AGyfCcNTRbzFTm5tR",
  "key12": "54qgadwwwyHrNMr5c6UdJ9N7pxLGrhuQgVxBivnsk7EmhGhrbLy5Yo7V4HSsgg7xM8vjJXqx2q5ddmfMoAVFPr8c",
  "key13": "S3G2YkwZe4UpVydWRZwDjCZffqRz2m4XHBWKd4UAPonE27SXUWvL4RejKbd1Ff9FiJc1xfCQJeCXoA4EkWo5WhE",
  "key14": "XYFR8qsKyytiHTii8TdKz8MyFsAhRQ9mjDDX48C1MhAUtfMwGfXF1Qg4cMoMLKTR1QkfpTEt6oVXe24AjafyhWU",
  "key15": "2AhS9Zr4dqgacPDGruZz4SkxX2UFZYacxoLERu4ggdxCgWxS9pX4AYn4DMkqWuEEE5hJ4boeWgA5AHyx2VjR5PEX",
  "key16": "3bkYUXgHkha5QK4kLCuoqwepG5aFBVXmehk24n37EtYpunyCyhM29N6UUBgHWVrAWqrowSjg8bSDmn6dxQUMikXM",
  "key17": "X3a448MiAqCedb2quj8HbYUmd32KVfWFd1HhfyHLPRq3frMw9oCYih5FFFEd9uoNS2xDxQgLxGgUbZjpzkBhG1t",
  "key18": "3XfyL5PkZJ1ie8d5JUzWC6JiWZqHd8uM8pBfVdUHqWKy7ekDsjyryCahcBfdQKSHJDwPe7uePxy7wpNUJXp5WPLA",
  "key19": "4tstWiuboebEkcdp8AZUhW8pKSZf1EJx3qYVaWrwvLvGkLFBAssqHw54LmLUZJmj2aCaJEv5DN5LaKc6pjvXtT3H",
  "key20": "5Fbzq8fZKdfkCJDmBYxTUPzXs1V6rEQhZjLs831PxSRrZs7PqkMVmFqPHTU5PTdySeqB3dP7vkkgzdS1LhSwkAr6",
  "key21": "22Nse9GahyY8XpRHxih7QF13fmEdPRc61HkaHKuR1Mcr3LQgbrAmL2yBLzekAULPw9fGzEijFHJiPL6FYTXKi8DP",
  "key22": "5gUEHvSi68gxLoMacytS4RJEajHsXbPpwDrssVT4voXFoLSaTuPGR7MjU7ZEeDKzvw181cW63f7LeeV3QDRahzAf",
  "key23": "3K2PpbrLN5hWPVsrtDsfggWpydB2Fc53z9hg9XLvDNSKwmz3zS4vQayVAazhc2tPDXRMHtbvksdxbGpASXCoNv6k",
  "key24": "52PadUtKyByNFmED3pT5bA5Haitkft3WEVTaG9jP8nGvBpcdYKwqnKPmNSHJC4y4ASpRU5L7u1yXGaDqJwVcJS8N",
  "key25": "5vEkMtRd9XavKe6gpDp4iATsd7cDByZriQ6CUh5XbTeEFK5fQxTnA16T2yGMrmzVrPD2CPNzSbvNX2gYoBwWJa1Z",
  "key26": "3cf2NEaPXqYgssZQxvEKcVjfFJGNk7F4G1swSxoJ2jM8T3Tg9LYNYuoVdCqohdK6UZCyvsArrV76PbfBmqtdzS6L",
  "key27": "pEVcvDRKG9BUteQMUMfytqLLqRsQ87tszrxpC4Ns4DaVHjZLbDoArv6zB4kkZfr9rZhyRCe3Mf2SuKzFpRhTFdg",
  "key28": "51ChtR23nN9jv2vRASTn7zaambxaBq9E6vE4n8Z4mNih3fZpkSBDT6JUM4Uy1SN8PZoe1T1WRS6TTNBKn5bbDcYt",
  "key29": "8RzWpXTGNtndAfnCc99nnPSm6DvPrB2tzrrFxpWqWuhJdHabbEHX9HtSbmZ2GDxSZrJvznUfegC2hBXMa7cU8yA",
  "key30": "2XmcqNPmZ6FBH4cwUieMDUGYC2bxvpij8vccXAb7eXFMU2rm3NdyKixRPtQfrrDbLcsyC1KefvHF72UMUCz1fqBw",
  "key31": "4VytZf8QjUAEMxksaURRPG3s8iFjHXW2q3eX72YkysUPbHSSS5NtgczNoywRjpeWZRnNkqTaF93nBx6LL848W9PB",
  "key32": "4hf6HxpnaomY9QTMSETKiejpPXFkgptGitiDXcBNVvCjdAiDkmwmjZHwxVDyzaTkugPL8RqiFJPSks6beEBMgB3R",
  "key33": "42HKoXwwUXXZ7SHQWajof2UPVvTeYUAURCaJoTVNFj8sqKj8UTAUWCsRgLDehwG2FCMD84bX8zjK5etBYceE3DB6",
  "key34": "4ENQeQQgHRGTH9wNSvQY979CZDKEf7eQtUqfZ9GfurotL7RrEtHm3eerm7Xg4vxCg8fnNntLag8pcZERnZsiTcmA",
  "key35": "5sLwe7RnjfkpiuZTB59Ukfq7CPHxqBj52Ey6tsZehJgFuDGtefcWiJ5SS2sh1eGnBATsa9ME3uTXbyJbFzTBDjMB",
  "key36": "2NuKAWbSmvHUnTvskZEwPbxTc9wVahFzVGTttUUpyp57j69g7fkVGvUM2bj93GkkqTWcPvsycJpFzyKjcjc8bJ1Z",
  "key37": "2ZjDbfWvth7tYxAGp1DMgS7xnhuDkwJk59U3ZuoZgL7iDa8zTXZ9TxdtaQCSDwx37kegM2BdZdYePZufKKabY6a2",
  "key38": "317vM4TXkPci6esNZQtWVWHaMyPfAfG4Wyyb1ybmD2UVaHks34oZYgZGLGkcPesHW1ARZVSQRrAtp7dgBxbg2Rkc",
  "key39": "66LiToq1vbrwgHxJBRpXceU5DWVZDgCgND3BYPvFLQQ2Tj3hsQCoG1HkeoX42HnQDDXbkCoiHJdA7kyiLfpt9c1a",
  "key40": "CYjjyuFkMGTnLJxpYiz1vyEmNH9VgoJSa6g7WGpUZFks2BQfeT5vjYv9QKjLafKF9z9WbERW4G2j31iuf4RqwLX",
  "key41": "34ToWERj4gbku331fiVddyrdBGFndhy7hdJNq6h537NbqR791uApUTkeBfarQNzyTosTEmKgSQZhg2o2wTztkibk",
  "key42": "36hn4k3Bbh5t241cbqG1KBGReUtAWmWjvfa4ECikQbDEY5UhgSna65qYk7TNCLPu2kNU9tE5XfWYMfV3V62hddWV",
  "key43": "2v1p9oKL7ZpS61UfYo3YELHce7m8rrhgRL2uhMwszAMunidq1dKLQkiKEtPJkvpyH9m7V1GAU2kE4cdqa92e1ULC",
  "key44": "2Acb4fXjKCxCCV8EaF5KEVSqtfnPYnivJWUBMK5hwSFg8DdUuRcpxt98D4qKnX8vEcnJNoCCjRJnbmvkiUwpxSW1",
  "key45": "3XLdvVnimnLoR62J2VAxvpdte4fE3JzDgmDf7d5t1ytkUD5MXWwDLCwouAVMJEU4JbFdy73UDCZgWND7MA36J6tU",
  "key46": "2NwP3qcC2e4rky28gjSDv3whxQ3s4nDyzppGTZ67xnKwaTMdgheLtAMwpnqhjKMXwtj56PsnMrPYZvrKWbqPmZkP",
  "key47": "2VhtDL1pe5uH7kekq3zwGM2sEyMYjPksUbf7xNtqTqFGMYMSxMS6qe1NDXatRvUzpnkri495sbn2wsMFdcnC4y14",
  "key48": "KF3irMz9rWvEBZUSi17Kkpo5Bx7b7xjjCSQAP2yzWFrtJY4tTkK7ELgMWBsGr1xwmyirp52eZUWg5oNaTztcVsQ"
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
