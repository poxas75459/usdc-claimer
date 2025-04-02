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
    "5rmxxqvkSDsRw38csNusJby7KgC7Yh8tSTNhNCXE6Ty6DYZK8w8Mda2vopnTBxPTiYkvJgksq5vfPt49q8XtiLx8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kZdmnktnfBcTtaUmX7QJzffYiXCxs4h89s6SERM9LqmasDkrHfD8q8rF7ahSRs8RopEEtSN4M9Ke3AbA53wro1p",
  "key1": "4Z7ohEdKoQk5esj7h2mL8t5Z5BLdSZL3kuRqfPKWjDFz4KHq9tyysgzbb9Qw4GDdvT5aRkYY46jsUt9NscjiZiBo",
  "key2": "RL5rYzrSjE3WPCJcPQzNNY76JsvS7eu3XscjM69bhJ6fW1heEmjF9UWNfRGWezecqio8Q8NBfofpjM668Dr3bJ2",
  "key3": "3gpXVistmKfu5rCeX11CoxRReY2EJ7FqAQ1m3RMg67QgS2Xxvt1oH2azuyuabr6dNSMy9QsNNyVeyHvLiUye2u7b",
  "key4": "3P1q1XE2LzcHjhtKb5jWD9F7JTVn9XLgoEWaMZkEvu4nesvmGbxqkbqyLbZMkMFNAMQqpe67RR5VeMcezYw4oUSh",
  "key5": "48aFZzXiDv1nEC8RqnnTqLnQbk6yAsrhci35VwBCSyCgY5k4NCNa1nAP4nCq8FSWMDkfDaBp86pLvDgDJbo6t7Wa",
  "key6": "5p9PLxvPbpqTGzVob4TybKCg7qdpdVDLyPhDkgEsx69yXWRc9hpr4tsufw65jFHw2RTsWosqFcbrZCWYSdxixAVD",
  "key7": "5MBdn74uaBFrVs8u3wCLgkYLbzpefKHYAGLBttcUJNNK3G5MpHFoxTcqc6LHZC1Ssehc7QBfrGE949TwE763PpRt",
  "key8": "4Q8QGbeUAHy5UDSrBFr7wmWdVUg42wDsXbYn18WBuzLKS8EoF6TsxiBo6j4qNhqGvk8eiiwLzSzFapnrUByXec6q",
  "key9": "127jkdBtcpDEvLWBVxef6Mg2HMTKxz5BdaxgzUEbCuXfYCRhsRBuSVLC7P7kdvFoShi7sHKwdXt2Q8Sbfem2zd16",
  "key10": "5xdMZw7mRLrbhFRmjD9xcHubkjKwMF473Q2yBnomjn6fQhMVEeY438bVRs4BeGuassWqguifD9JQ4TFoyzaDjqLt",
  "key11": "4W9EW7JB52sribMYGprPSMxE8xudSQnKdNU5zX3bfEbaY5wKV3PCywMspnFZjJJNJ9ozrZcM1Pw73UVHA8kYHjAx",
  "key12": "2pCW61hhah9Kvt1VDHxyg6NstYjaEMkWJQxp3z64w3wM7peroayD1376aEQgxoUZoBTuuSgNuHBe6zynW17zaQM4",
  "key13": "53W2gY2M6yKLaAHvpqE48T1LotW2YCtMSXDf5stcNRBwFBabp8TzLCtGQHW4n2po4b2SzSdFGC5foYcBWCBbsFn1",
  "key14": "41DgTYL93aUsofTB8J6MiAFDazofh1nvx16rd6XfeqP2JUdBtzJniN9UhUX2EvpcZCGSVP3osfy3QSDa2Duw7XYY",
  "key15": "3Zqg1Je2cNZ3KT6wAy2JE4T3X9mLWTVkbnoob8w8s9THcL8BQNK9EDmXweotwHZhESQLMBTdoJZuyapwBYmWiyyN",
  "key16": "3xccy5eVAWuF2KZFhU4fEhDKg12gzqMb4sQ7QXkBTnC1Xk7NRu5HGbAi9Vqr941WXcWzzzVqRe6GuivHw9WrCEZX",
  "key17": "8EehjMDg688gvaBFWrs1mqQSr4EhKUqayBGnBVv99t2LRTw1Je1jnxLhubYRsf9UjQDv9r2dxWk23nNJdJDGtn3",
  "key18": "4y3LdcVycZg11WTSrknfrTLEk7sPwrBQ6DXJRBtSeqHcAJvS5QsCDPLWJMuiX3sGaM56Djp6W63xmVnEacPcaARC",
  "key19": "4Z14yyvWiNmTZsr1CVkSBBsNTBHrf2wSn4nLizEruYuCQkVG1nFaiv2nXu3RRbrK8VdUx3VPwHn7ZSbpQikz5Lhn",
  "key20": "5KdubpDk1r5crGGdjqRYqfn3fLiCicgTLAuZVxmiNKc11hd8qnqdADLFbpRinRXuGHMj1wqvJ2LPFLKk5ho9NKkL",
  "key21": "4qFCQJkFFXjoHi4WTPd1WBXDp3BP2X472nXizifa6knEkUMss4ZZHGsQWWVpme9mKXkmMcymq1ZaPaE3MwdijuRL",
  "key22": "qfszSA7fpHTUumYqzks2PxrwBkUUy6Hfa19Fuz9c59QXRTu7j9mEnVT7jRqGFqRnPBvsoK9vzUKitWoYW81Ub4r",
  "key23": "rrS1NQPpxKM23xiKna5R6BHAnq4coHCj79aD9k11aD7KGjyna3eC2AkWUkGU175TnYaQhwZx1qqqKdJnQrHYGmf",
  "key24": "3xqzCmxdNGUUZb9wmtPZmgXL76oM4aUmQ8KzU6nmFZvjd6Bf8TXtUVCe6UPPxrFxb8xBP4urKszeUeSUKkp7N6MP",
  "key25": "3NYvHjfpbrJN97tynpHQ2KYNX6bQWf9Lq5xLg6fQDECQ9bMPawmFBcQqFgvxNykdQM23nwHLmmAZUfbg6qgUkCFk",
  "key26": "3vh1wyHHWar2f4Z7De5hw8s5byToXSZ8G5XakSgPMpEzJond6sG2ahaXzGcbd7PGmMXEpwRSsE7136wrEiKQ8RAp",
  "key27": "YLs3ik59Pg6Rn43xJH6CaEeSXXvhVd39hLbRtfwTirFoTVqgvcZj4EcbU34C313Zr7AMWJ5uUAxUChcHrQThS2a",
  "key28": "32kG3wfvnhhxaRt8RLd5huz1H4PuzNSQyuww5JNuqKxdj535hSTUZXRrw17NmEKmFSo6izRy9ZVFQS7qLf18rT3Q",
  "key29": "36p43jNwRrQjNU1NEdEFAC2ZfEk32VBni8vBJZD4CYL6NbciUQuZaEQw2DGLHYdjCU54ngaoY15xVwNScWkEo1ev",
  "key30": "fYURqkAo5TAXgPkV1HeNr1xfuHgz28dfVkyWrx69iDu5FGP17pqnNZpBj9o5dYAuzSoLGriHWFhcgcmBvTHBpbo",
  "key31": "7jtYbYo97cqNNrJRjMFNKJmU58avP1591YumHX5NYRMewRYodVttCn3W5iYcRTNQWJHUPt3cjLTrMY7q2Knh2KB",
  "key32": "3x6DXjjGwRCHo55H5evafm6QKRciJopXpXAQMsNH9PedmDAP4sa7sCKqES9qrz6msM2KSKaww8GkfPphCxuf7N69",
  "key33": "3o8P6bJXTWxMh1bECxgPfs1Ay8TmfEf3mWwYprSSPyh5JNq7jSPGN24v5R2Ap7sHsBDncAnyjuRgWPda6pJXziQv",
  "key34": "5dQCQNNrmepJFTzGRPcYgYDcK6jnTTWNxcB3BZy96VcmDZx3HeXKcCdwjaEgWAjTasqR1sgdss81nbjm7oTgMPNB",
  "key35": "2SmBGivvSdSfYipMrz4RBigojF187KFar6vQ5rp7G18YM9i7XNKYRph75D3iKvRhBf5KUdixf7avKyDgQnJByUt8",
  "key36": "5bMzpf9UY9x8GxYzZjvBbzajXFEX1K4zRVfHTTFB4X7E3yig8QJvnVDD7x3854BMRwTtyEEPzkoesptShuY1jhL4",
  "key37": "3BudMoDwBYF39Xyr9gDSLhN3SkXHozrdJwrV3hoCz2fa9qZc8eneFLH9tBpdpq3iQK3caTuv3c94qaz46Ai1FyDL",
  "key38": "41WLPYGfaip4k24iSeXWUVjhQ5hCCXJHeEb3AToDcp6uqPoyrEfehYMnSSZnAaTjdmTCTefLE9BKKm7cA1apNfT6",
  "key39": "2vRJnQmxqzeBskYhwGTn1eJRrWuXXUXLnbVq9kAQQqgW29TH7gWYhc6nK2pMMPT6LHVuuVwVRjUdMg4WSAY51yMZ",
  "key40": "2ZD1HPGbGpvR5iPCPjsW1yJFxbkTtD7rmDCsuaHwK9e4UcMEkgjXxvFNPxnZjwxxsE7Jt8ctaCwBuf9gpgirshSg",
  "key41": "5dGb22Au2cvhiytKTUKXbRkBsXiJeCFhrjdT3ppnppbKqjLtAYrXesEgcEpzmUXGqsZG4FccNhXTcrwiCPUbmDr1",
  "key42": "4ZjycXGKrcSsmMG3NKun2umWSqy1FXKoYXxTjoYz2Uf7So2fNgsHyutfhGh3Rh7ef43urpWDNmiFdwtQVezN1kAZ"
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
