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
    "4DbbjKbdbAzAztcCDHMcNj939jJcbmETpEPKeZEsmiwSCp8fYwLf3bwSQq4neSCiqyxQC8ouWJZPPBKfzzH9xJB3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gihT8pREGQaPAcDfTxaqc3AL21LQjhhEUEuCxdehjBDR212YmWPjcYs2uzEeQN1wPyKr9Eqs6JQGaFxT43Xu7ex",
  "key1": "2RzEytygHzyF4KmmnnB6QhuXb2Yqte76tSbr7VB2XknUmUdaToXiTYvfkUfTGQamvYHzKiak14y3XLMm3G6WfEbd",
  "key2": "3tGGFJFbK18KicW3NQRix99iouhcPgifXJTqABUaiy7cPiXz4U7bAAqXyvKnKH81bsGrSiE6wLdYbmo669KTLhGP",
  "key3": "NneEWE9RmTTxEAntLJ8rucwjtyNVUv8yooVCBoFUnmrNhQnKwhBmXpnCf5uvgWVsqtpHR3bXuXVry64haJUkPj5",
  "key4": "3bvHtbEHgu1XWD1pTv8d4ZQ4M9KkCgbMNB7CPGXaHUdADzn8UDRTcpKR9ty4dCaotp9akG8T4a4j2k3EnNGGC6bh",
  "key5": "53GgubWd6wwbQog5oipMpzprgWmV5CsW4aFESrVkvucmDUDxVCaKGYuFxaGdnLkitjc2nRwvEaYA1KrJSi2EWiC9",
  "key6": "3nDRf9kTPt8etN4sngvhS25Ni8457dRgUxnUpCeVZY3ePmTuEwdoovaKYt5tQcy3oXCYCkD5z2sTwxwJ92JDtvMt",
  "key7": "43QgQuBLRyt4UELVAYxUDYvAw3EjRHJ7dCVLJ2GFGUj817tWQ1tpxQVjHkd7cEp5ZhZn3J3TjdhZyNhuWdTw824V",
  "key8": "3KAjL3fk3tjQmXvJM98mcu8Bcd3yXryL8agAdFFDGGpNS7TPRfjFuyVgumygLmFZxtMsNEn89DqDQje1gJeuePs",
  "key9": "4bEHcafi4MPZpzUtzEGrsfvCKPE9VtdcQj2kpT8zDAA2jBedSfcAzDmNC6ymVpEzgHXfPXWgVhMPjARJU1aW6wwL",
  "key10": "5F1W4bYJtfGb36DbCxnBFBYEnZWscZegSCBvXGj2KEyFJooNf3qxxsZGFZRSkh2WYTEicEV4tT7Kzo3R8Z66YEyL",
  "key11": "dtKK3gZL73XcbhWt3oVAq5hdQew5wWzxHzXTnjk4zyQ79Vx9ip2EG73tUrKUVqFZ6Uvwab9bXDigzDVHtQmhN5r",
  "key12": "51tZaoSMXYEjpXZWXWgW8xDGnfcWd3EbGE1wYbFdZd7d7Avo5VHxidLURknbMedzSHo9pFadkBHdMAcpeXYA1iLz",
  "key13": "xswTizrTvnmuMwbcC6jbQxasLoaszc4neZaiVyooomE3KAZcjwWkkhb68WWKUoewQza9SJbJmG2WznPuHfR8aJ2",
  "key14": "2cinfsYsVDKkdwe9cQbipEiyLDmkAWqn8R6cHtowoh1VynhDiRtFXhemXfxQg6HGk7vcHEVBrwBPFw5k1FL65wfG",
  "key15": "UayvWpqHE2gRUQZeVrgPEnSsPmKQM5Z5vBi8hmtsAixjKFiv3u8Q9BCa4T8PyiX5HDtW6YkzKKTyZtztmqJC1zH",
  "key16": "3zcnkzQuWbD3nPpXfXasLMNUG5hGautfmEH6fPiWSAJr16icvR3d1rRWbuWgvy8oL1oAY6uLncjTKE9dNAdi3XDp",
  "key17": "4Kd8BhvUzkF4jckTg7fph98acjSXgtkLAYC3EK68MxjLtZddh9Rj5JzQY9hfbiCgTdxRYtTPdsAkdLRwoBZShXbQ",
  "key18": "5JXteZvCWzpVDsLZ6RUCY4ti4hn5cBAxkPYo6JzDyBcUBWhAXCz1SDPonRNTsvZmf9wezySMSRujJccZVbxGHYrK",
  "key19": "2bNPx5GDS6ER9FtmWbEEBZxXixWE2sePYpMNCfDEC9bp1mV65qE86PCsPWAXU3V8ts2AvWbhXcQCDR1ZCBuRjg5B",
  "key20": "MqkpbFB99XDtPbrewgcu9pN6DVSmESH5y3wrTreYxtR1Ld6iW4s7HYXk3XtxfRMhdtCwZ84xNV8DzuEPEjDqA3x",
  "key21": "4fGBgmknTBvqA4Fi6CRXTi7zwQasg21tQ5424v5ZRqYACzHqBjoQn24DwF4SofFn4dDbVWJkJKo3VWsiuea7gfj4",
  "key22": "3cAMHBFcGPKamM1QaQ6ZvvS1iE4K9m45ayriKqNvWGDpTCkkVrKQEMxWGHJe5BiGiiDi14sN8i8u6CcUguUtPgwW",
  "key23": "2GBXGzLVj88NeWjhjH2GwPueTDH8b343V8uM8bwH4iy1nY9jfrzYAZTSZqR2Dr4VTZSGUCxXKgJ2FiwZUqtnoLTQ",
  "key24": "4CfH4DJSLE15JCiyQwWJwB8QE1aP1prqFcZKorhDoT9sHznVYZFJQQu2Q9n7xAPUXEbmzcD1nQeQiS5Zg6ad6EiH",
  "key25": "4gj8VbasQPxfLEdGEzP3WWUrrdpu4uXnMoRzHnDdDZUYFzee2kRpnaQVo9ZHnwfQ1XJzJwbWsJDmyxwMWwCQ1R8V",
  "key26": "FbA5tbAgxaJDmGern6rYQPVWXrvKi2zRbqjA6EQFpAcg6crvHVJwCFoxYSfH9z4EBzFwKBkm3sgwX5wHjygUnXZ",
  "key27": "4tJuGBtKQkQrYExnb2Xnpt4CQFBfs1aeVLrYLsCXC34s4jMfhuQ1fKtrVVSN8FBtv8xzjHcLMNNaGUUB9kXt3L9x",
  "key28": "3fugdw9up9GuvMdny4PukhxXD5Av4ahGDJRm2cwwZah5WdA4dhAGbnb25gb4dQbUvdo1aPMg2s4nMQWqdzxdTqmC",
  "key29": "wf5vZc3mHFrDVhhUS8kf9ZnJSmBqMqAxnoHPxnmaPF5SC2bqbLsjsXpKZ66PdfZ9VeRivpDM1JTgLvV133qVVnf",
  "key30": "36tMrpMnLKJU2h6u7ArcLUzPLracHfsQKHbTLh6DupnKZCgpssyBzgHKh1xt4rfdjn9qPqDbyWFSS4gVBzVN7wiY",
  "key31": "4CNQmAvCL8aDKK9985FgH184VFQ72TGvdYPkuB1RtxAefeQV3qdcBv9xKeUerBuYFi3EoHsuqAMDcc4nZ9NYtNVW",
  "key32": "2imLVXnowGBkhem8sNUHFFhLkcFDxEUyWyMCNJzQ7HvK1SScbGFoPxZfcs7SJnmmeZvTTjr3ZhYurnhRZbyb2fo3",
  "key33": "5FgaRkFrGgRzY6ZGioSAH6kjga5NBE3bs8aPzj2YiT1uZ1nL58wWKSnYooYYXfcU6cDWUhXCQWjsKcJXWNBsifHr",
  "key34": "2zHZePoGHfDVDYWAjY5z8Jou6eZ9GS4ccvhLUExiPraeWCYZxC8Z8yJepSQpqJfDEkT3MiQSYf6RFrfhuWJDvFuH",
  "key35": "4QsVJneKR3hwfambmqpfz5UTT8gyqh1cY468XiVaLig4s7GVRF5mAMbeBxW54cxRmChb1ry2bUKjmNBAxAcoJ4ZB",
  "key36": "5oP2CkNFxuG55NiA7TBqQduGbZXrYbuedut1zajYc5FxLJPHZrbMVtXVxuN7WUJdyM2ava2McrwV9Kmdo2jenWYo",
  "key37": "2SsVEG9Qkjwe1nvxMK4cfxyUBj2FEbUyk8wmGa47Rj2TDYbBWCwGG76VAMHx3VUAm9inkxGRfVthVZC9WuPn391K",
  "key38": "ABo1Wa185tSPKLoTmBUcyd69ZuPXFP7GnkQr13oDEZmYW6zCibNYTyxi3Gev2iPMfL75AiMYakptLJRpNmG54ti",
  "key39": "mEBnAUz1vXug1vtw49ZhK7fbdXwteQ282MfNKzqQeErL9tB862GuimZUEXgfb9F53rRtZYxLzSdkPNi6gytDJX7",
  "key40": "2YkA3VZ78yBPC9eHgiouz3SXz6uj7k84jZh9AxcSvascpVcVdcsA5NhMPsHPtqtM3JRviJGNkse5AFfLJQSF7s5C",
  "key41": "XHEgtSusjJMyUUXftpuw1AgM7Lfw23x1JwLvResmgtwdzpgaAUe9qiNJfEXrPwkdH4mMz8WrzZCRyjtn3cE1tHL",
  "key42": "3vCVNNxmu6KQGJRQLz9fTtYrRy2oJYy28BuBXDkHKTcVjA4N21GVYXc3p9H6VXYCY1V4oAfZ45AxsRuwXo5LA58V",
  "key43": "3jdJkyCgov32ceZx7MEt5xuVSHrTSr33oNh5P7RtGQUdYRzMCvdmK4nzxSkRvm443bjjk8X9G4JnnNQN2VG8gnQz"
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
