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
    "5QwRiXeNrES9piED21vLmFmKx9RukXCnL7GqbgXzjFooYwKF44xP4mAmMShL57Koaxe1fZ3g8NY36Znkhp3meGgK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AWSdy63LW7rvjBnddMSHH5qdZXH44pNWxP6AABHTfedVz6PJmr5kVamay8tmXRuRHYPvQ1ZCdWT5aSmgkMdQ8SA",
  "key1": "2MN5MRfW9gZqr9RyLsWZqKxF75RtdFRu19PhuiPz9kRs4TGeKefpWy62skEDrakuZjyFBNjZTP4waeBE328Bs8N6",
  "key2": "BsU2bwGPJkJB4Zhm5W5svjRp5Jf57FMz8dA4gNnCk13JorLPuCXdRcbAWmJjkD8FRpab33NiCD62Jt5vjvjdpto",
  "key3": "2fHug36hTDKPRh63QSgS6Zxz8eT6XdU5vtx8oQ6acCx4YdxJAR7THg2ak6QfKJvNBXBrbBDNW49yshZnQUQZMZPB",
  "key4": "5AV4ae8bN2f26iiPL82wu2eoi77dSxhFo33hbsUp5gKPUeSLy4XzobumzeezMKmpY3UZSV2fMmbRJ8RxYk6uASLv",
  "key5": "4X8ASKw377ujWis9XE7qC7WhQWPSUWV7rzuZ6D1dgatgkcfaVFhH9BJn3buR3nykpfMDEXP2Bk1veVExqRcwS2WY",
  "key6": "5EzYAvQMNPq2a7sz56dc8Bv886f3ALUDsZd8EjvxnDGayp5Tftvo2v91GhTJSznmxppwCoFGJL4Mp34zyfJ1DKx",
  "key7": "5wJGTqEMWmWyvVvJ76qjucJNP6MgkTKsriWJo6PX3YSVhFphkYi79wHpn5T5czvPvRwkvHEJAUFhyRwVP8AJD5uv",
  "key8": "4SfUh4USCgdGAaRmjmJQxUcWk9JPREYRGSWckEy7J5qFzCt1KVjHohXjHBvAoLM499D5zukTQ5sfuhQa4UBhvNmh",
  "key9": "58mKhrXRR9tAP2HrbFZqxZ15cwdJMTCMgNRQTe97NKv3dQe98JMAPFJJZ1WEVaj2ZHvmqqhqipiute7QFzJfKnH4",
  "key10": "35wVnMSAsf58nXEVYj6Zujbuh4MCioNBeFxNMva6ecdEGJ6FB1sZ5qHoWjDf6qG7fGduWb6iqdB5qiSfBHcb7Wnn",
  "key11": "2JadSh11WGMKC1gtxemCFeqsXC9F4pxj9swQd5DrwLbXwdeU5TnCeUF6KR3tBjbMYHxV6XySREweHDVWx6mzYibf",
  "key12": "59ExegTUHbQpuFqp7SXTuXCi2qHw7rcHV5rQf2HM2pNGywbUt2dY846PTuoZmtDaUr3EnVPd1i4Jg4jkfygZXvww",
  "key13": "5op7fct8wBkCG5D9ym2pMg3Xe3FtXvTRe4dxiA6BagpCkcbY29EwRgEZpEPjZ8cbniHgwHM6zntrXZF9ruQUByJ1",
  "key14": "55MQC3VT4bVHXG4TZf25znfhjKNSBw3S6XhFQB17eQiS4YDmMrGDBtQx8rvvHuLvJ3qJqWMdURckasnWwGWWYLdH",
  "key15": "3Dksrbr3mmJvJmLhMuyr6KEU7bffMGpL5E7yjZKL5mE9ajiK5gd3Sfb8jSKxBSAJcqo3TbniTT7gxUr9ULXPxRSV",
  "key16": "2x484GmQ6ZVg94TerNEvVbxPRNaHZpH2jgpPZvC8BMoRJYia4uHZZ5JvXbHdF7tYRK7sMbmRkdndXYrVHC5X8nKz",
  "key17": "3VBMQN5czD1tLPagpG5dcrYWHVBbtq1ce9dfQSP3YjU2HAUeEJNUFrxVNCNN14iRA19dW3dtkWJ1b3xvYzakyENh",
  "key18": "d1FtuGmtbwDwtGyJeF6T4rr1vvd8fBNG2stQFwGhEfvcdH5YhBCaPzZ8APiiESVYeJyECo9ojoK4gKJLvpyZneF",
  "key19": "2onWNcQbqiv5TpgoebvGqgHyQRh5oNdeqQPvpF8F5wd8pcQwmybCXoF56xcNXPgVByscw1zqNjeBuomBVKr5mixw",
  "key20": "5dHzmMux3Fk9c92HmtJD1qMrg77CWJWDDHVZrJBeCw61VrEhx8Ls7EupuT2c5mTrQ4MMeXDgW3sBzby91WECZvDz",
  "key21": "3XEAZUwFvpPNhC2hwez459A1iNB48x635Ltb66KhyDYWeouCKoFEnNFiia5oQEfGZMbvqguWfFWMrRsjycCQusHn",
  "key22": "5bL6AZem2ZyynxmzJaik26pDjo8fA7mdc5sfkaK9Un4nc42xuvQvJe1KQmQ55LQeuwZBz3wsQMCjYYANpMdMoMfs",
  "key23": "4ykFLMdZnHRA6EXDrCmgZVQ7MaYLjRgZ6VFmDMWe6Mo4nKx2S1LUjj8Gpn43EAH7qR8fuQw4vQ3qyJH1wu3uenfe",
  "key24": "Apf8yan7QNQUJFN5cfiX4kD1diG69RXNWS9adTgC3iw7UUDk2mZbYH9kEe53J5b1fSkT7b8sXQtdmnqAanXaSGt",
  "key25": "4B9wEgHaDDKTd4vA82T8gTfzBXK5xgxeockyu6pRPaog1bkniGhYUt4pwaQghnwVoE1dq6TSWJ7yw33BpXSSbBDM",
  "key26": "3uMAgFgoR72ur61vj1ysDqZ3qGoNGJnLCSes3EAdSdoYsYtrLi4SeuNkB6VmhdG8jXEykfwEf54avgGCRp2Pszef",
  "key27": "4oDGCHv1sk85gWJykNR815C1H2NcZt6S24YvyYWsTrWxqXcu1sPVRBRAm4qrCNQeu8nqvq3ZnWxg78APtwnqaQwb",
  "key28": "3TtQgUXA2T2RRFxtrLwB8u5UuBvofpYzuPHBNv2cZnuhcs72hxLKtGdcF1sYWNaGjAjdrwuXjL4yM6NRNP17AXZg",
  "key29": "Jzi71Cn7fB2bNQnrbHcT4Etue7sgYCBvNQCMmK8295gbJJwTCsUmWAzihnhmZkf2bbSqDSFue9uj81LkDaqp8yb",
  "key30": "2rbV8s8MXSPqi4qiAwxmsMe7DPwQh8uxg4iV7MCi68os7EJJTdkyRA4iQnQkGNK7yDFEfvScdN63cPMV4nZFFhQ7",
  "key31": "QT4qcze4pb4oz9DjnMjcX8vhncSyP5EaxqPcex3fftaMC2ou6GZurbMBEekM5P6HtJsCxriYtX2owT6Hy5NWQS3",
  "key32": "2VsuRc1NRMgcQUJx6qWbgyzMbPGbJy9W3FiR1Atyn8Zxo9SZxtnBRJUDCwLwpFhNf8qmugkijGfJtw46JHb343ok",
  "key33": "46RD2iGHGqynywaDd6GHcJitUq7eH9JHDTq5BpdBJEC7DiaNkZ6gUfXVrT1Qje1TYtw3wj6PC8EebEcDeUtRt1Nh",
  "key34": "5Azor7cvTP1AXRkFvn4dR7k9fchaFQnM56gXRzaK56rmi7TjizhFoNxYsw1Ld9zTzXWuY8Kti4A6EcPG72Cmfrpo",
  "key35": "3fdUT53vLJ3mhpY5hNzuosac8XvpVRTdsZFoG5tFUv7qPQPMpgJw1PcyXQ7h7ds7kWqaJchFrV5MpKqoUu7ykdu5",
  "key36": "5r6TEbhVv8ycx36RS5QkbMnoddC1ZjqymvprjwVWiMHdTDLDJpNzq3iVpSmZjtTmMfjEcwuVonvMi6BJKb2Gc1Kn",
  "key37": "GcqMbJmFSj1Z3nsuVkdGsEiC3fGiRd6eaoXE34wn1veYzidamTCzqXZtLD1aQbg8pJo1tkpBFgqVn4P7xjYB2pE",
  "key38": "5KvGxMew59ECuWJzcS9WWT9yYgNFhCs59uZ4VmLtnfLXbM6faPpm67HtGzkomShvU4v2fdHxj4nRdqQCNhRsTThE",
  "key39": "pRbZu5DFACfmixCYGUFEWKNwaZmvgAhMaJsXrLAhZ1QsbYeaBLUu7kNcnVhUfRd339hgJKMs4wvoxGcnYb7QnkK"
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
