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
    "HjdceHamaBVCHTvxbBAnHCqw8BsaSFEKTYcbNdr3TxoWHHKvzkMUQweTuUxKfUZPiRNBb69wiBXhW8ZXLpeD7bg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JYb4BB5k5KGBR4724EYW6hDxcfmxaN4DJhctFiXb5e2uowbjkNyUdyYqHXuW2aH5p8bh9xiK7gE5PnMMoHE7RAs",
  "key1": "5McvyLUEbfyx3QwzKRB39WXQp6sQmS8a2KrB7ccwyzQwZ9w6nQK2bMqao9Z3Uc6Hr9A5yV1zzFDGLxK8Md1wUtbR",
  "key2": "4bcnmqeo1pkS7yor318oXq5weZsmthRoKvpPx7QJZkw68RF924ZND2eZ2Komz2MFYPFNUxFS2vGUh6tiNcYNRziF",
  "key3": "2duHYGn4bF7vSy7tjWGj9mh32gNFKabQi9pXL6HFyx6vQG8yvkyXv1cbwyT3BAaN2vioFmVz2Q4inFYv84w28zMq",
  "key4": "3J25ECBBQcvZ6wKHsAkxsnLRzqS27Qd6yASqSqxRboQ6ZC2kjYjaHVfZGDafzAvNyjikUbzn2UU1VN7Rkka5Kj2s",
  "key5": "5xhEzQ6A6vHS1mKqKqfjVReBE999Yw4PVkZUvxi62PAJYBv5xH1uxCCcZJwyA7GVyB65CbiZ9fzc1TfEhEQ79gn4",
  "key6": "27RfFB1AAzbumhs1cFUuNX9RtAKkhqtXKui4SftVNf9To32yc1wj8NaLoFyoSAZeCvSUbjsZBkZKfMrPRB1mfr6s",
  "key7": "w9Kfz6hHrxVZ1t6yMKDBCCEC9m9gqDFJzKtEPn5BJFY3EMjEvEZ7i4f5YSh21pDPqKKii1hCgGinrUpk8NLcAfj",
  "key8": "4KqkxGSBw8Abw4Vnsv4oXCeUDc7QtiVTRJqjcEhgoi8aahZKFvvda6SwitioxMQRnsdK9gY7o2NEz1UEUtorW71q",
  "key9": "4tDTEuFGW9fCdKZ3qYhy54XvN5YuftHGTwn3FApE1QxcQoiATG9AnTJkpfrAK8WfrHM4rMbXZZWebne6SEvyJ7v3",
  "key10": "5QryZ5i97saSoef5C231XzeDqHX42sHLsXsAcH8qiWLsrCXuXRCgw3ANXCxJp8HrxSe8mpR1KGaAzSeD4msh8yPz",
  "key11": "GP2MF3SK1S4EvXynTdfbLZLLECnELQ1Eyjzy3ZKW4r7seceJXDt1wvQUgQ4By2kGMpUvTJoZ6iWWW46rShnd9ca",
  "key12": "568uVHVQHwNceiq1aFcoNfVK7xXMn6inyAogxnvdDWzCc42XTbUXUzoUfDWaJhMK4CAgUvExUXGDwjDSWovnBbzx",
  "key13": "5FyMoHtUSniyWCM5qkGtgb3MTmvtPDQetQ5TvtFKzJ35sAps5E51NPqP7HjqNq3bBnFva2y5YQDFrp1YpUBZk3YN",
  "key14": "4f9TUwCeTQ6HN1FeCUGQfbg87rqUyqoCzfKEBLtmuAViL9Wq1SxmHq1kwGynRBLaDek9QrmPhN6hsiE2q6UfFwbu",
  "key15": "4ALyKbFxAcPr5tpcabcvrLtgPFp9FyqEVnCpRkjeVMpBdp7Sp3T5rqEauy3dM5WTUfzZStQS3ZVBwZJs935KbCmn",
  "key16": "wbxiZGJF27N8vd8NhBBn4CTHmBaSwnUA2uf3A57tvZF3SiYRcsTRYeaZWRTEogoc2Fc6EW92s4EoepdpXoJfAsk",
  "key17": "ePHoPGm7FMHitiL8rJ1Fz8DS87AjvRzXkoaVFzGuLQx8LpsMzT12t6pwPyuy2FDmoLTvMe1dnbvgiJNHyXTArCF",
  "key18": "2iS7xM3y4n2MGGeR35jjhULBX4Dgz7eJL9cr4pMzPP4NgPnKZmSse8A5KuxJReE13Bd7NKBTVrAUTxJoaprwk39n",
  "key19": "2WDuotri7Qcfvtg1RmxYJ8we9WiiLY6a5PVaiysnEpjCytVom42j6zMADhB1xowff4gwBnrrepevR2V4nv4JpMqf",
  "key20": "2EYnbsbPMwmTCWBp4X9zXCmt3Kctms55SzFwk1q6M9qbN7wgSVFhXsCZDvrva9WhcutSnPgATKApJshtUV6GMAMZ",
  "key21": "LJEVqusNfS6brE4isE5DCY1dzmENXiEdVWhEZj5LpixvjZo6rxJxxW4AkNDutq8P5RPtmm6Qwkceh5x5azQV4p2",
  "key22": "3XKXBo5JL3EK62y6U64eCepU5ryLoinmi6FG49QFz5zLZHHycGiv5qrrnDhGfCLiFrxhD4Dcz4xsoTPdJhXKviUo",
  "key23": "2EkGKax92SSroEvxgenDU2ubjj5GiVpaDyErkaY7g5qsRee3NypCS8Pa8vuHZ9AWseyRRDpNtfLkqimVqZTVQX7f",
  "key24": "5KQadCpjRbzowwRPbNTdPQdAV12eyXX8GPdxaisNVTT9VHjJUkbhKZRV9hmhQhZkreY8zbTzkSwdqZk8NakLbW3j",
  "key25": "54nZL4t3TVayZvtyrZNRpaFqRAVb5RbxYqDncvTFSw9XQhj2SohnwsoL7F2ZpLNDxg3HzNKq7kFpkmKXgrCX4omB",
  "key26": "5LRUsd8JXxxRMieVJvrjHxiNrTQnCrCBFfSD83pFQoRH15bWjnsYnF5wzsMEMQC9dUhXrkaov4ZHF2mdqJRGUh52",
  "key27": "3hy7cJNZP2CEbqZrWgyRHogDWLpvdgo2yxaf6ys1KLTjqAwLVG2pMexNAC4xHHnbZDngj8ZxytzqcjEF17k9pcrM",
  "key28": "5LbRY1jssHRNqYS6BG5dXDcVkPLHWjHSWo2bZ5vbNvjrFS4hMqaVnWYdHEqUmrr5GNzEAu2LSdrjXs6Btw4Yb2i7",
  "key29": "AXd5jMo9L15mntZJ93HCkApvyeHVKdisrn54Re7dQULv8cSbdwWBhc9xGznJ6fpr3XHqNFjDbuG3jBz3Uv2ymqE",
  "key30": "4LFxFg7sDKExKmixDomyfLPEX16MtgVAtLU9JWQPZqEJLVrFfUSX9fXpNUz8UD33cYc2GwpofuTWGzR9BXWkiTqF",
  "key31": "r3cCmny4rkQaUBYzzNupaHeLQ9Q3Hy23Z4RatX6AW2Bx1CMohARufJREn9ahBCS1xdadoAFY9EJiVCmTCidPrYL",
  "key32": "5GeSHJVPPqoYYTnXWUxNZkJkYrdhTbvJvBtc3Ja2aADo1LKK85sR445MMDooigFumS3NEQhjbgsg3q8sNxkVUtgk",
  "key33": "ggweheLX4pWdNgEw3W45KYy447iTTxJi1G8o5Tw4ta1fYtL6QqhBLsK3ZJxzp8wvQSCXczg8vbgMZwNrobW81a9",
  "key34": "5628nXPEYyeQQfrNroNC9C1kvbM9baSqf5VikShP455b4UUtZrfAuqwSkBa5tLAcFF4EEqG8NVZfsWw7HYj7vrZD",
  "key35": "3TDv2a7NJ8VxeaM8AA54Z2npk5A7fyBJrm9SwFSwiNhokcbgAVcRH4x8pvVnhmsmDSHgrJoNyKg4hdiikriCvAd9",
  "key36": "4zNj3PxCZaVbcNwgRppppFyuTTCgempZ8f9HPRT9ySjR2PtJkGHGdQwsLNmfsbe5MJbSmXaLAz7wgU5zvM4JvGXL",
  "key37": "2VvWQYAtrD8Mn7XdoCXmtgFcgVxNfmpx9iocsmnmFs2wnEYiSB5Y3wuqjMiNPwNBHQshBPeaV4gKW26xBDEvZyXR",
  "key38": "3VLmpxn9kpzudxkN79CAqcoGGukSpqqSvEjVgPsk31kT5CcKkgg8Gpy9XMQRxkph8ydXEWnTUJHR2NLWCdFwYEAm"
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
