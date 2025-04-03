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
    "2YBR5294cKZDAMpfVh7AZuKno89MR9hGPACECAskxpQJSuDkCWpv1MA9w9QBLJjns2pDxvA974nMCNa6fxcFeEyy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zZVWa8PGbmPKbdaVhtnXJdp9aKewddn9rPXoqDeXJWAofaJMaRspmKiQWxMZ2oLtPe7zziF4muG7frM4dk3XyKS",
  "key1": "5gUKaiWpwsqqy4VpjnCMSVAzEdRekzVdHpEE7K8FZcpfqjKWzAJJjBPHdoeimWEyATrs48MJ6kxiKXKTbCJEqugi",
  "key2": "GaeBN7UM6VveS3cFANFR4WaV7ReVyGUzapQfbb11fiQJ3Z8piAiT53BHd9hGfij6mvswRGWVf2CwTLhmAxveNt5",
  "key3": "4e2B5aHmV83hbCijLKqTctD1NswDKu4xCzf26vZtnX2UWZqP2jFv4uaBu1MTbibivoYMG8MU6PYB6mk4wmPDbg1r",
  "key4": "EWEBfadSHyoNs8jJmPVXv1MsC8aWMNQSA1VvvNx89DFa4AbKhRSjef9zCsC7Nfjz11kDfrv3gDt6rzvmcXnSfZ4",
  "key5": "ME3JowsoWUBLAF2hKF2Tt3BzegqcMcfwVGHQtMuiEKcY4jBMACfAxx1beia8jjprFMiEBaukFnqvovnmjuaDVmj",
  "key6": "2EyCmz98uutgWTKHH3vt4Ct758fGUXRxvssPUGSzgnWokFgJLfDQj7366RRjieZTDeYiDnSm3scDwq7nvh966deU",
  "key7": "4LC3kpLKWHVv8xR95Tpxo7maEdXsgRYdkorZgp3NqCz6fuYgjzBz2uZGPCNqJtCqMMJ2RaNBk9WvCWHHS94ks6xY",
  "key8": "4sGfRaHK2d6MyV4qwyD4r8h6Nvx1zTDFV3qZ9FW2SqxbyP3KFJCiNsi9cKq1MjVcKPykanNCh3xNfMCZyRAgk7zv",
  "key9": "WxtTV2dQLZ1kVvVRgvfhg3V9xW3f8fnGPK6CEgBNHDw7qWPBWbFu5wJ8xBeL68TAGmwe2GN1GuECVUUZFdCeNdR",
  "key10": "27ff4jt7mf67EFGAme4bjeDG5RaMM6p2sk4EAmg111MyFZ6c13LLywysA4fG5p23HtMGxE9eGWJyC8kj1vd6V9KP",
  "key11": "5vBayXB1oYH4xthSyLtMJgXMw9MzgXgwVrPPi5xmsYT4bTqQ6RHFccuN8cuEu6ihwyMYyprZG55Gzj91FwEQknK7",
  "key12": "26c3LENE5ik3MD9Pn2N8WoqDgsUJmbvYfnVhf2fWJFD9RUvZcBEG5jfd4tgRX84pAVjDkkWmiyj1kgcoMiGunQZs",
  "key13": "5KqPQ86Ex3Zqc2MSj28stoPQeMRYTf1EXVaP3riwXPf9ygiJis4KjzNL9Ua1WUzir9sYMp2S12Niu5VTsw9qLcR4",
  "key14": "4sVMkEeBTckRu3aXXJkVZr7pmwJi526B52NfE7BzwWYSSVbXCs2mV2cBthunKfjvTpUvYJEZjuRK52AP6djiQKFS",
  "key15": "5m5FiphrhkdAXA1xWatQdM7WwdzdBBSxHKod3mghueZJZRxxAPPo9ySodQeryDwgdpVsmD79D7MDpyhT1yBFDuXD",
  "key16": "r2VFYpMEr3aWds94deLkxT2BrFVeySdQocKdNDpJm25NTDAPVo5r9BVoLCRUjADaH4geakWJuyFub5U7yntLLFX",
  "key17": "2MbPZcFD3afypjkU8czWzSCHzT2LvSpnWmr3bfsCmaBPg4KiYqRqwgnVfV7bWqDtobRg8o49VFh6PQTPCK1kkxDQ",
  "key18": "63E8BUwq7FoptEPM9844Ve7CtTiFWEa5FrELaseurFGLKAzfCRA38KQtJYPGefLKfAmvJNKrTo89c4ykkXAQphsH",
  "key19": "4FDUeZVfNNK8Mga5FCSCQjW3xdVgVZVpWrcUJdPcpRmA9azR1vTDMNFTaq6GsUBepeqi5pXeLcbFGcPXwJyqhBVs",
  "key20": "41VBSXBqkZrR4ZDdyJ5wth7N1vMAoiqN6C9g3b9n96DcYAmNrvCUxLnPwxNjmhdtq8duUKkZk9U9XuBqZ6WNKHJ2",
  "key21": "3XQ6Co3ZX9tMJhKozFksmPiidHdERFw4CAdKckQ6sW8gGwXZkKEVDpBSGWnod6BbFa8AzSRVcMrZfUiSe5X8WypH",
  "key22": "2XKu6dDup7jxqLJ3VZXCEaYDZPiwJkvhqkVPx7Gu6HZvKoio7tQEWc56MDGLwve1VKiDrfvWDcg13ZcirqGEJXRq",
  "key23": "NmBsZUDs8GvBqa9iqRayKua1S55ijTPcvPvVtVqnt1kwSMBWVTkeFXWZaK2EtbD2woVQmq3vVvifxS33e8ETAXw",
  "key24": "duKuzHd53jggjz9D1AQdeh4pGitKbWqC2sr5yCToNmE6eCGpG7xvYKzS9112rjeXKvbnM5xBQwsXFQ114pxo8JP",
  "key25": "5QJBLxAz6nVpqhyamDKAiZatUxqtkTvEJ2ZHZ6no3obMMKkp63TtYs6Dp3H85H4d166Vz7ganeSkZC43Eou8NjfE",
  "key26": "2VZgtPHGRiP5KxwTkcY2EYQd9ZhxvKJBeMFJkHAxrna5rjDcjCaEqLW28sQvEKzej2jQmSCWV5AciAWB6Dzx7Epe",
  "key27": "3g8kF8MdqnYw2jnhdqMH2c8yG3TMTEmVkpSmw7n8WYBZGsqZFsy29muUSxRR5LKUrhJhUnuQf1aTWTSZaa6UHKdv",
  "key28": "2L1hSTbUCBjkvJX4dffpHXYJKXiWADhPJZqvH341hJUmHzLAnwQvgn6nXBpDhTTMHQFZDnDgYaTdYcJKEgtq598W",
  "key29": "5Dt2rxjqZS59q8MgovUDuSEyVXwJBNhNHkfyqZJZBgsSwnRqodC4GJq9rbfkRhhPGWj4aYfqhyTapxntWnKnqF7h",
  "key30": "57HguFD1Ls4QoCCBV6cpEDoVUQwKRwN1dXnPwhgWaA9mPXokgaSNQdiewdhaKt8g8NbZsLkH3oUjj1FMuAXZPTii",
  "key31": "3k92SMBmpxUwPyjAEUeT1iBj4XL6WtcsD6wc4fZDprduocS21oPstMgBz2bfZHD8jwXU2cAzXx5CS7fUobpAD4ic",
  "key32": "aDHjYYvPiGhsY42mJWXYezs6DU1iPRPrNtTs9z48YH3f6Ev23Lq5asUYnLV9DPo8GBPfcdr3LWNBcQTFtS3ddpn",
  "key33": "55XsTbnzQLZrAXfNZbNjHNnRCw8V1ThYWYKMyHCw7m46tr4krbZwikmjL42SM1fQGNCQc1jW4ck9XyUS6v82zCQ9",
  "key34": "4WAGJDFnJZYdfBdYQpcnkbN2U1HGVidvz6kELXbx46Q58rUZtLvUGbBGuwzKiaitcC3tc81ZcZTHhdahqFmPtWjG",
  "key35": "3QkgWvdckq7JahC2pxHeBrmvZLvf7qRdT4uAvDR1661Cj4i7wD5dTefk3FZP1YsSiB3xbWtXYkmaNXBYU8sgUyq1",
  "key36": "29G81vQiNJLk6thRe4TZU52STpBy7jdBE39KRwq4dkU18bcjChheLRktgFEVhuTSuRDPPuraE3AvCUEcafTRhXyp",
  "key37": "3X4y5Q9GB96pjTK1JZSXokp59isFv6Cnq6vabEuNdN1sVV5cQdb9ybFzVMNotQsWTFPaQoxatRSgpGa6xJKCSvxd",
  "key38": "3ALnvscCYbGG1AqdpSiaRvHXnPzFeZGMrLafM4BZXFcKuMrPRdQJJbYcorQUgMpyhjPBYjfBVBEFoLcKVdcdUAZG",
  "key39": "377unu9MNtjjpPUhFJdVWqfNPV6P1bA5sJA7MWtiJBPQdVo6KudF5RynM8Bah1jK7Xiiatzme5pvgcATw9VWdGQR",
  "key40": "VLtjGmyimExyU5nha4ekoTkbxSELXconxSzJULiC9Mx1Ewz3dPoSfsbiXUNuW92xf6riohJASQnVG843DGZdt4M",
  "key41": "2aDRYALkm1PLGpmpyEnHS1TqSYYeFc6YxfAZor225F3D7UdrqYuKqVQfa3tu7X6RvEpUToLjrvfQRSwrsF4wPgq5",
  "key42": "VTwWTFL1GHkdNbcyHEKRP2fC8JuDpWXxncbCHghtB8cACF59aa5ZixPY5AiHhw8Zr5Ef2ZKmuzH3bHnb8BVWYbq",
  "key43": "2TKetRgkB1fGrwm9NYZmdAQ7wgRqtF5gMFozyYvxnej51b7VtAurkqNC7D7YqsdH4Q3E3SmJjV3grj8Pr31Nw1tS",
  "key44": "2JtBMJucA7Buuef6PP6o2gU3ohbJ6DTf6c8G8WFsHf2dDfRx3YAUNRtxqDVu6LycTAmZvtsG8RMYiirhe4vZX7ug",
  "key45": "3Dz7sGx8bwYQQEiRVcVQRAzV73A1mPJdUc82pZMGaJLPr56txHNATpBkcNaX1JUJ11o7xXiUmgW5CRgrpUw9Ec1Q",
  "key46": "3NM8gV4p8oMq3cNee77BHyCSSudEek4tXf2qPD7Ai8rCQKedfgveRxP2apnH6fVYb2aybfJ3pYWkiSsDFDE2Q5sY",
  "key47": "4oiMYkVDaBWSjCqhRLXg1bprvNNNLBEbF62HL6bzjEwxgZBDzcDddFGe8JvkWnZ8BgQu1rUAJtCqRYf1G7BEXv96"
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
