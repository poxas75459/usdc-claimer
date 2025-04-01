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
    "4kBa7DXQMVo6ePwjAkCAqn6VdQQPLG8FS5AnEhL2k2mvUugtXX5tiV6ziCoiJJt9QQeWbZEsQrYzt6uTniFQh9mg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iRzG2P7tUFfTmPHJvymqwd8UwLtmW7pFv9mqEc6nLGtKzM2Cc9fhRrjMqpK8cvxuP7ZUR1zj57QRRmU5LDE21rA",
  "key1": "5Qxbd3DRtcAbhNtTeFQbuYGFkpekDnq9JZhEDp9fpfqd3KTCQVaVFYj14mGBDwzdYXaRBsxA9A9d1hKv1YJ2Mys9",
  "key2": "5BH1x4gKziVKc4nEumthqw3bxzAWwsauFCAemgmLzmmo89sd9duKrcADfmxQgPpNoaZA2nmU6EpdwjRxWVxkSVeG",
  "key3": "2fRY8k8Tw3LxTYmKdnihz2QkYzgRGuWdmU6rqxMgYBRcVrhoRyQUQ5VDhHyFqPaPSDc3MeSbkDsKVPpSbd7AmLQo",
  "key4": "yjSXA71VtmF1kA9gvbU6bnYqXs7MzCuWhTR5RVapFLLDEDPWFQkSPSTCDce24vLt6WGNn83qdnpAYZiGDiajCFA",
  "key5": "3qb6TPUoMeUitD5YeZJBU38aop6ounTXZfJoghbZM6HxCDaYkS8koRoFrQXvxJ78szPD38xVRJcxhuToNJbmwyTM",
  "key6": "3fTZXeroe7R2WVgXKMBNbXDGCgQgDQEjNCuPT7YRst18jNHmehCMiAsZPSkqFVMNcCac5FZmDcDWSePEbTBrLsRH",
  "key7": "5MpXhxr29EV3AMBRCW4hTi7D4ixNWre6AtPqriwrh1wqEo71MtwQGNQ9Zcz4US4EG8xrmXrBLLVZT4jKvZwfUaP9",
  "key8": "24PVzYYxu6f87C7u67hmGjr5X5Cr4P2zZEyz7mnk2atFU1p2NRvm64GGFDYm158NppWVXy5MrY1ye86ZSpkUCnxF",
  "key9": "4vd7NFEKTVedvPK5dZ5gkV7ENhwYwZQ1piPe2LotW52ne6mSD2ifPnZJYGfMtPAREZ5GF6jpp57NkS3gZ5dGo5NS",
  "key10": "SKh5oNkGx7CJyJ2D6CftkXEPAJ1NdY7kgwm4Sz2B8iWzio2TVD3aCEypob1QWREXYaWPWQTYPqNpBZKKpsL4a2s",
  "key11": "4X2fEjAUpAJsAtTVnvLSV19JqghsSRmqw9Pu6VFGQSUpowSXiQ84xidem9Fn8LzpWcoZgASYdmNPidrx4suEwuKV",
  "key12": "4XRVrUGiLqrZTXyZjhcmg7m29ut3VAmqc8amD6eqFDW7REGJmSj1DVJuoZpTjCPrecSFBSmMiBDQShznjWm95Lge",
  "key13": "oayh12QBzrFjtK9JVjC48M3AxkauHRxrc22kieJeLb2yLM9uHY6JhjjDoat5pMpiGTFgAyy3bH3N8kvUTcMHGaR",
  "key14": "2DiYabe8niYc7CVzZitNmBRKHL6FPZg5NoBdmw4C8b9nv76LTmNC8eVpd2EzfAiNzNu4YDCcncrMU5t1esAKHkR8",
  "key15": "vXL9t6H5SjrebT8frasWGqBRuYoMZBZMESVN7RfN28wFhzRaBD965wg7B8iYVNznqtsJapn7xnUV31NYFUx2jLW",
  "key16": "66ML4nY3GLQ2K3wqwedt2ESECN1wfAkd7SDhi9f9VMnNHPucnJYg4Uqn5ny6E5AgyVQ32knasCZy8SYiyTfpweoF",
  "key17": "3Hstr1JbspdmZGTxnhJBGhRmMBu67vi1sFPefVuDyYP5hiRCQ7vUQp7t7XHpHBgiAQ6VHquVu4sq4Zo7Gt2sELwj",
  "key18": "5nhxLh7bcg9WW8cQKzNQLuaHzruxDzNP2HWgPJJXJAJaLsd9ZjwKJFUKAmR2ryQJTTRSVUqdAY3A66viMfjkX4o7",
  "key19": "2RzP5np6nHtawbKBPfswdj6W2J6cDc34mnHNDg8M7ruVkXjWK2cCVxGiPhxqb94wYN5aM4HTDZWHkW1FbqogzVjZ",
  "key20": "n4zrZe1mdw7S4yAYRGzT2rcVoc67Cx7AFPLC7WP88djnoZvyZE7X7nXvsNaP2F41Jj6TPw17mUuikTbC7iRDes6",
  "key21": "3TRAZiioRGJYswquaFXHwNv6uUfGn7mqi8EmyZ1YZahk1sRWkudSEZTNfxMQA6TXzod7yA5KMUf6mikAwAmmfh3w",
  "key22": "5Dm2zXkhiorJivVhkzetTsHa59UQePmrCHpb9dkj9WJZ9E6dChy3Nay4gJYiBqgs8xXmACpv2gVPL6w5VpUDzTxL",
  "key23": "3Whbc2Hhz1wRKYu85DFmnB5ind2XVNDP4XZzfHWvKTVaaDX3xmNNpJfMfScJRBHQSnzTetajb45AGaPUGLbYnMdS",
  "key24": "5KyHDv1KdaptPheTGv4MosP7k8NbYyCFeKXDX8DWaj9VudKHe5DpwgWv1cAzio5QhhUSrdefkML2YnVrjan5mU5S",
  "key25": "41siEUtdhmTcSicMyjjhdPE4NHRzfxZhJRMiW3yztSWzZLCtpqAo5eBtYYouyCfA3Dog5CqsviA27EL97FCbHMG4",
  "key26": "3VyEC42ZJpxiFPFKWZokR55yygkWGFDVUXqusLTtYBDkv6pP8NPs4SNYDPgZaBacNG9wrUJ9ntuaT3gCKkSpsxb7",
  "key27": "2A2LBFEjuxj7dod89uTWwGUqrWSmGH6JrbgPm4q8zW17WmTNp6ojJ6LZamWLQ56zNwXu2iGHvM8J7kZrVQYdy5ny",
  "key28": "5PHKsHhQ3LDCdPR6sAQ14HDJkoLYSKrDPJ4PurqXEPAcBxEuAT6HwbKFexkN47mazYT9iJaVDvGfC84Q9pwAFbqu",
  "key29": "64cfQprNpjZ2CRBVuSHrcaDuVBTgseS2S8XJyfriYFg7wyvDSC7ASMN51EuPk1AJQyWMp6njcDY5GL3mKHGAhfvp",
  "key30": "d2yYagmfCzDm6m7a7jr4vGXSDDy9x9RycG3vZE3b1PwDwi1DuLy3hFvDKEG5kJGsbKPDsH37c22xo3JpL2nxuZo",
  "key31": "3jLx4Sfu693PXra1Pz894Bwfjg6q7YdLGzYPLR7SenmZBPKYMFFUtq99XVVYg6SDQpbScJCDaxgc7yKXFdYXkTv8",
  "key32": "5qyrtLSNmmxASqBYgNCuS5vJtRPitTxuEA76gYuY3wRDp5ydqHve7djeZ5ovWDke86NyE99qHU8B1xV6uJfbrdFV",
  "key33": "zqDNhwTZ1821xWgtpWv3bohGRc9xXV8gkLxuvdhyp9td5m8ANZiXxtLdLDJoKvtcWxSAS2MH2GkV3JEgNzufdLp",
  "key34": "4nsdqm7Dce43rwJTcZ974ZdwzHU7PpNarYQct6bw1NDSvoyVaGYYBtuKKXoLLKKzTiRxsxJN951CwrWT7jRGtjwo",
  "key35": "3eNCKhVfSLDMr9wXC8xvmTiNv41MhDJZAt5iW7T4mQgfd2DNQhMZnk9ZWL2G3NbmkTD4738jErJ7rNGwA4tRMbfV",
  "key36": "4MPhzkUhC9HWitsr3KCTJpVdgh84qg4vL48ppFKpoo34bqAQRozzLqSjPaa7RZsNQarsfVptCGMQppHp8RxN9ggd",
  "key37": "33eBswTSCqSt7oYeBT8HJF8pGeswTUCs29RPGfoWHfVv65dVG8Db7fLcZ8L9XaJXFedz1Hd9KHeuGgfvZALTVgBB",
  "key38": "zs2yr6JduXJHjY8zmAZtcowzagZXdi5YLxMfKYki2LiU6DmG1wu5LSeoqg9rg3Ymm4jN55k48Zpxvgec5Qw5bF4",
  "key39": "5oo5gGLm1s76ij7Fqv8pZ44PC33V4J7o6xJj3PGcPLQ3RQSuieBpDA9orkngo92jaaLhkN8XBg4wP1McaMBrA1hG",
  "key40": "2MJxigZiFqcADWyJsjAgyLoJnV1fNsSRDMyRV8DK3Yhe5bFkisNP4AG4KCBBUMoGxtiXvqAKDisfKVnebnTSeFGn",
  "key41": "2fLAnX4dYoZrTFTxYGxzjaE2Uca5wSGuv6ULEXnuAoitofVkiUc87bJQNB6iZremjtD3PuRhKAv2U7NL4MEKn2e3",
  "key42": "3y5qAUHdFGpHLaULXzCEyn76XD8KhUE8oTuDHvQAVR3y3onwPwf4cyA834wLpJSnj9EB6KSSrghR62xCJDaWs5Pj",
  "key43": "Z9SmfyUwuNWXXjCDkrSKcH7Bxo6XW1UaCFDf5jn3jbyo2emLfWAzMHpPhbq8YQkDFr8WYBXWbA2KKcjf2bMRTzf",
  "key44": "3s3qoFDDMTbqE5oj6yxZx8cEt8bcnmSbiNe7jaWwCrA96xDEuZ1LC8dWnXm38JxQRGsWAe1a9PzHRa8jCqCyobF6",
  "key45": "XRFMmxhCy3nKdQKZkrksJpuBSNkHbq2hsie98e5Mn8f5RfstC4T2KaPjX4gDywZVoETtnduCwTUVTGE9YpbsaMS",
  "key46": "2yEWvGDSPr9uizf9JJJAgiYyXtivi3Xia7fVNwzhYodbmfYYd4GbiepZEdt6xWMkm28pQfgHc6of3zG9cD5bHpPR",
  "key47": "58iPoDfDXuzuUA72DPPNExBzRMePkJwkP11J3pmx21fqo65dE1uSTXqp87LzuHCwM25WoR3ukxagtnqvLha5XVQE"
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
