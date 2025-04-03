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
    "3MVbsrQukKGmAzAxuHZfEniPc5ifF3eEq9MgRYxjzmAHum4fiwpKGgiMdK6bLBvwiUmPxPKYb4hvfuiFK5Njgte"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SwqAVgGvE2uSQKWu8pgsAvssazUjafPihXEdW6Sk7pad4DS699tTrwAwkygkxRcp59b3xUL23hrhqx5nsHuVVfT",
  "key1": "5FGSej13iThthyHstWLVf4QBsYSJyNV1ZSbtsMjw3k5sXV46LgdHuRjR5RWjxucYtA6cT21Vo2gcVewpPYW7B4fk",
  "key2": "7t3Sjkm9Cq9DzDkvmfDsLrnYUJheCQMk785UGbdgeDpTfGHFVJJjATSyGWqiiBq3eVxPMrRQn5xy2wm7kuVmmTx",
  "key3": "eMUKVK9oYQgQ51tsGWrfY18E8Mz8WS1A85wytEQaP7WWgAeZvxGS8bQZuLUinmhZFVBmGYgpp6TUpHDJGYG7dsR",
  "key4": "Cvut4kjMJujBaNzZAPadFXno8pQR2sNVZDm5gq87B1jRGCopV5MEFeePG4RbooSzU2v2TaxDvbSZBy9emhNAMUd",
  "key5": "2pwoaYFH3i5yyMy4gKNXFDeQfFMJNtAH1T7SJ4JoMZfzTADvZ3aCDKqnMS6mV7UNiZT2RHGnH5k9N7ed15zrdEnC",
  "key6": "55vfkPwmX4yg1qwQFSNEYiA8xb91XjuPbzjFgc4A2nMYuXZXMuKRgvKeaDEKxLsHKUnBMrdkm1Vx4NQ28UzRkWiF",
  "key7": "5opg9c9oED77pM5DUCPtvQJp4BTN4j7F4Kj2QTHBtj3kfAF4Srgv7s6neT36u7b2o9MwYe6KXysDbNTcZtWxrVAF",
  "key8": "2fTD5HbHMbSX3ZM1eou4KQ7zFJkP36Lykj6anFTUutJ9Wh2TxBs4D9Cu3vKriAkZHxd5WxFkMYJjaCKHtKktTom9",
  "key9": "AnMBcJTmJUYFUS11AXsz6FURSTSnUHzKd4Y227CB2N2LujCfRui1fo6safVoPQMTktg3fm15KBuVDha6NsLNrjA",
  "key10": "3JPnEDeSbHTpwCZ7ucgFi5MpU8fkNANQoAosExVDyG2o6YK9Nms1UAcD1aUr1YsdPpQfGtRfmCvg279V4a8UQb5E",
  "key11": "2zaTCzfdV37Vr4uhTX2PwajSiSuYSmLyD3qjsDCMs4d1hxqGSmCG3fjjCRqtEhGyFCnd5NdJnR6MnfqZS8zDaugN",
  "key12": "5zEFoa73w8ZGfLXzz35FwS2F7UN2rM85kkdgLTb3ARgMmoRuNpgzM5W8kw1o8wyYpbk5pTEy2Sw73JsDFanpNyYk",
  "key13": "46KZiXZzTFzVc1oTSdz1s9LxpVwLFxSaGFqkXmL8BBVisD3fQaaAh1sgDaAAXRbyxjedJVRx62xGU786MMUNZsSx",
  "key14": "3Z657HjAyz5Mi7qeVALwSFCY1zryhDQwVbKUmNFvYGTdhYHeH2m8ozrfYpJ9EWzEmwYBLrxdkj8f5ZUiPNSA8aXj",
  "key15": "5EAb1hmxwkaasCsC4A5ymJ2my8cSTSckpN4ULnBais4eHUmq5fvUspadagLVBwjzdc2jxPzRYKmT8Rc9ZCNLm4rh",
  "key16": "2My9PJDctnjsKHpVVQKAvB8Vuhas5JhDYME89LEhbYXJeFHJk4HVXASjecnKKAprX8gnQKB99r8SwhkVyGt73WPT",
  "key17": "VBEcq4EJue9otJVNsuBGvuRWjJh9S1KksVjggscFpiqjJj2axc4qPSdh1zr1RzbCXXs4jJ9daPW4ekim84hrFbH",
  "key18": "43ywLtEyjyw29RHLfHwYDnrVJvN7ERqc5umAjEPci6Sxg77G4ABiCoVaCp6M82Hd443qGQkAZxRDStjFZZL1VwKw",
  "key19": "4vYvzB1gCvg1vVyTNbEn24g9LcfUeUneZZPCYAapi75xeWKSkPApoyhZbFMwfLDy1mKQLes8xcq4zLYiieBycvL4",
  "key20": "32WjMfvxd1DWZLz7gv1QdGAtDj9qAemHmRSbEWu45WhruT16CjG9c5qm5oUhnPgFboitmc8z996BbU67VRppBaaH",
  "key21": "2PTkyrPdCRFf776VzFJA1gFS8LzQqARcE8cak4uRyj2NL6fU92aJniLSJqAu7kQvaRExAECxjuEGU1piA91ZMT51",
  "key22": "3yR6Byaw4g7jC1SUWjrC6jQNGX9gbLoLZ3uRGY8wSuMfcTp6LcEJaQs6xrd4WmgbBKPiA8kmnTqeHMQTx92vFJdr",
  "key23": "48xcDTnsHUpC8UBYmCVQ1zpkTRRUMK9vxCeF6j8rW27E9RFHcAqpWTr5rYKTw7b4u1RvjJ6sQiwJh4nu6Q3uv4Wm",
  "key24": "3yVmkcYf9ZQngaU8xeMkVki3s7BfB3uTSXLrryAocgfacrVtFaZ1yNeZGZQKwWJE6YU8ttw9XtPqw373EUtzDiyr",
  "key25": "521cawJt7iJVpEQZbov6cnasNT4FDSBA6sssxoFJah2htBDodEDJK6akQdzJ1evqbiZ8rCicSAK5kaX6n4Svt2p1",
  "key26": "CyBmfBaecz3kPAemoygCfHhYZu4shySgEqCJYznsEiDPvcmQLgoMSrHjj5DrAwPsG7nqTi6dz7TK8H8RUvKEkg7",
  "key27": "QTwvvicNoAbzS4sqWDRBF5DAtDJj1nwnAPDJYiCAX14zHEJ2BDu2NAgBKGWFo6EnunCh7wXTLmUiwTfHpsvZbLr",
  "key28": "RxkxwjPVt1cdR3ptSDBksmi6s5R9LobW8RaRzXM2PMvRKjv4opqLcnb4CUt8vgzWkGP5PF9LzBzJUJa3twPQTDJ",
  "key29": "2oLzbBUdhV9C6rS5merK9mZPbVL4gRwmYA39rbWNYQSDaQuMMZnwbZhDzEw3aNcXAV2JbgwHMGZQ8Dpwn2TDTT2H",
  "key30": "4eKWwU6TtZVc1DgBpzXwVigfvDdgZQwv3WfuXzAzsRxEzBV5Jpv46okEhvKx12M6f46wxHr2zy1HUEh7CocUnUg5",
  "key31": "56JWSUppgLkgVnvk1vBYcm1o1omigTD9QCvEt9CiX8dCzP5BPvRZHxXZRAozdf6zHeaT7agVMW6pRLPr8chJfUkm",
  "key32": "2VXnDXzmQWQQLZjPtGMdcv9pPFDZw6wpF6wFDCyJPeDnKaLPW38pJCgCFUHgeT6PJ69WjmVYKKVJTQzniyuLSqGJ",
  "key33": "2kJnSrjgUFzHfMHuYeSLQeQegHxyURY55P97v6MdZuF1AjmzqKS7ZteUBDhBYYDKthSuMEuZeC6CidGedYkzht1B",
  "key34": "5muKGFezkpDx1ZwGdaWLpDbNtNVPvEosat3S4piG3zZ1uzq1j71UPzCYVuLnsGkZFys7imx3BqQvqTnE7r1bNeYq",
  "key35": "4qZMRDpUNCFrRpgGXPHrPDztWuo22ukvMiVTtopKKLfaB59YwWa54Pk8Dt8QDW9TUqojCJWJY2PcfdcXRsVo18hW",
  "key36": "2g8Z6zNFMvqrT5LZBfyZeH6F7zBXG4ansfSUp2ePxVZTaWmFpz5dXaCySeCKSQd4YzrETM2qFfcjmwRYbcWt8oXj",
  "key37": "5HwxndKnQqwswpMA3PV15fxxid6f6AL7uD4oKkn2XcaJ7MDDpbR15MuoCEkWjbfiWZFkzNtdeH7R2yFXaSyQRHCY",
  "key38": "3zjBhd12yD65N8vFjv5WxkXbBxm4THG8kU6FFiExLZj7W1SK34nHvt6SSPWW2hoDzfWc6Ym2aeQAAMynWpK3kP3n",
  "key39": "w2kwWFUaCV21viJjheBqHnFTmZCW6R2x1mMHoexmWr6i68L7PprzF4H6wzRQSjKBaVEMC5QCAibi1eY9et7LxL7",
  "key40": "2QxSjK3ZJSq1LhuRgYFR777aRyqZtm8dZJ72AduUZwq4ZKjDseu8LNPMw6BjxZxwDm1uekgXXMiYSFd4bakkAbBB",
  "key41": "3F9quNMKRqLarotZttnfSvBS5wykRMkhXVMGtfuLwy7C6PB7puzSPwc1U9MSreMo5nyuWhBDfCZFbCYq3F1uLjxX",
  "key42": "3wBGFopVgcpLQg9UNjs8m322ayh5i76QXS7Lq7F69fKwiB4ZrZc5xrvZrATKNNQ8ZxtsZgCsSemL19kpUS8JQtJN",
  "key43": "3SvDwak8soUYaATsaiM6dRkkADNfZJRfc1LrDnd31RJntCUVvfAdzypzqD5G7LCFzWKupxcXKztxTRU4uodMfiCh",
  "key44": "4unrtSSNiw1FhVdU7Vgrrr92EDBgr8MJqLZg1874JRYscfEUa4xUvbZExhm8cwyeGLjGdVBQa6CKecXJPECvQudX",
  "key45": "4mxi17SR94FrUMgBm2ngH2FJWPvhDhvdeCAE9j7df3AUw2apc4ZHMNYd53nMJTWenV1SE6TTCFENpvFC6m8qrb3z",
  "key46": "3gsZQvBbN1EgPtUgqFFSCX5iCn4SbrBWZiQQoE5PVetTJSdbknjwSNyyqJMjCr14fns137pJbHqxiCZwnwtTkHd4"
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
