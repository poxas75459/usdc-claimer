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
    "jj8tDTgZ2aPs4MAmocB4dy27keF8rppwfeYS2ZcsVjb7mzJChQ819mH8JxXhF9peCbEeKNTMKKN1xWMh8F2uQy2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4forramCeZruaAB8bCXnBWwqDwJwsAsGDkKaXyc7o8khkyXFvqyABikE2C3pkVUy6nvvGBUc6qjt369hg3Hf57mD",
  "key1": "27o935JHb61y7zkpa9Wa6sUks91Yy6BNCx1UuL6SUxb4nvv6djV5662pm4XSsvd18hEFcPxRCxo2jhQ2UB2tb7k6",
  "key2": "2CeW13xQoGTWtcKuf9izMgrnAvtcYJBzys6gH8PGWcKAKo8tkTXNPuoan3Bm6rMRTyza1yrjoACpMfBTDm6y1Wh5",
  "key3": "4DVxjuaAvQjH9SqMgeZ4mzVbffrfF2owtBq4CVxHr3EHmoPfzZv33X8YC1ggvdm7EA7usd7DPqs89Jf3XEinp2Cc",
  "key4": "5RFzweXLcd5YDmnrPwFeih49zLfctHpXUAtmb9cUSUbuU4n8ML6BMr2gow4WM1qBvch38dJoJpSthaeqdgh2m3z3",
  "key5": "4xw6tvPThkBovLyCB48BQQy85H8hGDgqU58aFfRnjw2KFiQ2y2Sfu3skXBGBFm8q2uNQa5ka9T3MRSewCpfr57YD",
  "key6": "2ncCLLH6NeaUTfh9LtuKBXjLg4uPcBC9W71D2sXzaEHsDYovJgGMr2X3Ge26wFrji69eS29htGhRk6s7wZYH96QK",
  "key7": "2o2GXa6Ab9YAxFvek37nVpJtj2udF2Ri94cfjjaXrc2gAKcdxsyYgcDA7Cse8wqV5xg3nmgNo9qCzr5mgKrF6MnF",
  "key8": "4RNgHMRmWnEJmMf3zHyEpcJ8u2L2hmwNoCdkjnj383UyH7bU9SEw66RWmhzF3JULnN3GB9jFvsRJyTCA8hdcpWSc",
  "key9": "3swdXcY5nFJRA3cDtd29UJKksKFrmibYz5cbHNHDNwbAq2UkAiwGBbHorSDXQP5vihTHvz8pQLmgC88zgnTLWTee",
  "key10": "DUDmM3zW3kqb75AqtiscDXKr9CqFurBsB4PvBqhfbtcpuEsnHgdihVSjgPCUsh68dCJmbWovMMzwr6NXog9tYYx",
  "key11": "5w5xB9NNKUNs5fhSiaS8FXkQ46qFfSpMsbo6JJNYGzzbGZmMijb25yjCRNEFvZAYBJB7tUoNZQcvZ9ek1q5wQmJ2",
  "key12": "UUVf2gjhKHh4xFMgZGa4ieNL73h5PhQmRv99D1GiGiRqh1E7CLG8nJhEKac7BL4xxWco7WvyDuSvoa1HXtMAFPb",
  "key13": "4Udp7C5J8S4qKRUvC7S1pjW6YNsF7uGBeHaV27Lpa8VvdRd3uJiWyfpD1S9fXaoHnSy8YAn95aW3tx2neTdYssFp",
  "key14": "Web9EJNyNBWevdzVaDxwsyNmAuMEyepmyDKWvgZetUVvo4G5Vi8RGjGrzhqHkyYS1hQm1NwjJc5F2eHAo7GiMnS",
  "key15": "XxSvanVMKPMBoMNVqyxeuRGDQRge9L3K8nDMwZx6V3WDWY3SfKJNRwJEprnkhCxXmKHWoVJohUaVzvT5jjLKNtb",
  "key16": "ce28KWaRLhshfxq3DUiJXG9yWPGR6jwuqqFb4dFfq11aejkNdeCpwMP3TjFTj6r3PCj5bZW8w9MtDfw6MBJUE5y",
  "key17": "3ZK4mzH8UgXRXyUwjgwijbEWQqEYrm2GkvsoeR3vVbjznETjSd5PNep8ZBgeadwvFkb4LutDMA71QNjpb9JQeMPk",
  "key18": "5B7pePon37VxbLkmSkLAuju1xH6ZYWfXsnZ1yhv1W4idNcqReu2CwPzcji1zcYSdy7ay8rUn4j6r5PUkuC55aWKg",
  "key19": "63qEdcBkbbKvRbEe5M3yS6BsXB8fP3SZAz2bUNNZdkyE4D4ncW7q1G4eqnxmVbmteJTYSWkWzAha5nMnuw4EQ2m9",
  "key20": "PMmXu6Aiho4EEUE9geMTQf26GErg3ioKJCSe1V3aXYXro1Loogax4gn7SErrgCDVUhefACuLASpF7BvLNASwXdv",
  "key21": "3WW8TGdncLd2FbdwQZC8Jx112zLe2oLC1oXfH3e29sVpvEcYPpQ6KmEQHg5TYcgJNZTCVbMmWKxStLeQsAfafzYd",
  "key22": "6dQSJHr8Sp8BzQEocPqZBtAxDLTLRdgo6FfQmC21zeXbrymjgxWGbtZEnejjuAtVrqamwKQZHPqU7FMYnE5x9L9",
  "key23": "5Bq5MAf6i7oC942cNSis7ARvtgLSz3DAkDNnZ2efnBYAT7GTPHRpoXQssxYKNWQAQZtyCmpX7wMCX5tBH5ysxe6j",
  "key24": "28ztrYoUNHf5BSv6o9QrAibiG3TFrNaQgSXZQw9AtS8xXa8UR3rdeiwmhbRraYB6hQrWhihcbbnnnaSiXFExY7gt",
  "key25": "5xuRpPtPTCoyEttbQrRjyBEw91Lc14XdwrMpZ7JPqZepW9ut4uM6pQV8BqEb5LNAJZMtnB6P1XNGtzt3pMoPAd3m",
  "key26": "28T3M8kJJh5UduDKqvk4LEKdL1fUABSMpkkxa4qJUtCbYkZ44sFtQvGqsup8BtqDYhNUSxvwzmnYSiUShNotJYa4",
  "key27": "5vwmdNKNT7chUB1khnMC8KnLEXJcHqGB9Kea7xpjyuguAccmVmVZ7wQMfix6d3fT4asZQhrdjyijHtDnyKGLScSz",
  "key28": "56m518PQ2VDkdQaMu3cZ2ERDKnZvSRU39V5DUwvq7F7XqFUaj7pZ5pcTkrtp7YViPvwH3Xbb6Q1cZMiom3irWoLX",
  "key29": "3hGfAZqSoyNE1ERR4b3PL7LzfdrainpemDWaGnNKDYtFWLcifn1dUaTXjW8SohPpqx6bexeeZnZcsPDNttqwccZG",
  "key30": "2RGFVbPP4heGMVvkogT2mQFCEjKnLwuiVvWnYXjrChWEWAgTgwfgijgjB3LHPm66C98sPnwyKhjW9romUbPJDVyx",
  "key31": "5GTLxJdpxe9PgcqNbMFWnnYHJxNJynZshdFaHXht19tZnjF58c8Agkk9jtcG1RHFWhNoRSydcXT9b8akSLVLXSH8",
  "key32": "4CBNdPpVbxXdiJrqjaeW17gyXXKZB9zXqu7WUqXhiL3hL6QnEs3KnDPxcKjfN51F8VQCo1mEngiGQSTPs8zmABKj",
  "key33": "2diukwjAJ1yhj7dnLRb9M5QUtuQ6qrSapr6RBoU1qz5FN1tY8NSaE9V3yXsXQmXZypMunPL3Kr7seSBPXAWorw1s",
  "key34": "2NZz5PFdM5gsKwqzfXJuHYpAVwHD2EjmVWHHtGFZf2u1CWchx9ivLKoptJRL2A6wd65BfQVZdRet8HSzwCG9BB62",
  "key35": "2A75FnFEefzfNieqGXPtvXLaHRhr5bUZSyp15YCeBjgBg493NHVjB6J32A8ZBERuiFCAmiqkYC94bCe2jHL6wTXC",
  "key36": "475spqChrLGHYdKvNZo6BpEw2Nrp7YnTP19BzGE7UPELLdTapLBFaQBpbDB9cRHtb81v5NsJjF5LnY6nt3fzbSAP",
  "key37": "5jemnZzJh9LrGbDSHoJQYUPPCd8poYxw9x7KnEd7DNDh4dRQoHJZkx46m4n7RYS48iY8EYQnYidszeHdGAZYzcWN",
  "key38": "EBXTvt971d6UviF7Sgm6F4k9NXyWWrWep2LoXb6eSfmm5LV9FDENHnAWwvomWroj77iGzh5UC9sitsZVyEdqXLh",
  "key39": "HdEPQxHqiWjTWud8zNnLZx5vXEQTgPpPto8MP6UYJWHNm9y3RrnPCNTzp8jScy3yAyVbCpwbGMLreK3HqupPWBs",
  "key40": "55K8XSNfE1rrbQthkSuRXyEaoUXes6UxmcPwPzHWrmSgS7FnUTXAEhyZEsT2L6FzTecucZRWhzXsysomfiRQcDka",
  "key41": "2Qvo8tTWKyBXV2zwiDW6b9MBDqiDFcfWecH6sAG3C42Nc84DCggE25kxzCWkyA58GuESxNthx6zH1JRtQUzEG3sw",
  "key42": "2SpoYUBSVtD5wLkN6jVaMv8YcSmUVQHsQgKZ5CUjsuZsJSvxy7u6K9wSdKQmEhY1zaD7FboTM9Y2QHARbw6NTmaC",
  "key43": "5Y1je2n9a1VjUjtMG9cnRrmrosn5iQqLat3aGKYC3N11Qgkkj8RxBwrZ2c8dXJDdJGVkrnvKGqFCJcFHCSaJwjs3",
  "key44": "4wg6oKJiYqRgeMNeatGgDTst4cAWouZBuA3UpyfTwARfzKFkRP2grNH95LmdAmi36nR2ZoxDFVkhL6cqr6zoHz2u",
  "key45": "2RCWMqbRLSptrjdkhQbRWLH3P6v4pMRmexbMUGi3WSwnodmEqDS9LLHmGKXNreYS9YuVeKNS3iXY3kQBLPvocbxf",
  "key46": "3Chk1aGXASidPBAtfsdkCQ7DgfTY36EzrwunTynB14eybx9UtPd4yEvVCeyQHok6UmCmLYdgmz9eQuad7JGq1puN",
  "key47": "WcxTLksVAfiMduBUvXK6hf9iVqqyXVNovE3C65qwzcTMhE8NHyX8kExVtVUWYQZ3L68btGLeiov6thsqNrKi3RU"
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
