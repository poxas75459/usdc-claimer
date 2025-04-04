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
    "342eE72X22wPP89U1PjPvHoQrsuYyWVHshByT88fPNS9cXdihZZeRYqxhGukmgffbfGDmJL8jRbdsCgfAQrDRL88"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jiKs4u46bv6qGQSiX2sk3dYjaBeN2aztio6XvUskFduaabVTkkWpoLDnNLE6eExfk3zqsKUsHjN9uoqFUDh4q37",
  "key1": "5EZyVRQDQLXJqLAbR1SQvwpgXkQ3151Q5YGFVwTA4ktgBmrU3fUaaYCE1Q11w1brtUJmxDsTAEZXAje8EAKnswMz",
  "key2": "2WAabUcKEGwS2Xtcdf2WHRBKagGEibKUpkxsCZAVANGovnHNhdtJhRmaWhER7vQi6tSu6U8aBqubZbDhcHqWhrh6",
  "key3": "5J4soEYxmyNiANYBwC5iAaF9UWyHCLtPszwcynxJeQvtVckvhdQmtndbvmjovErdXJCbnNfnH7fvhFroCRccq58t",
  "key4": "ikgYE7GM9C9jGHeQSa99X78kbvbc7UR75o6t92yyocVg6o9PwiewaUNqG22QxdVfWFZXrTWvKipajhChsBubYYW",
  "key5": "AWZiz2m6cY6KETG3shF6JThA6cNF3JrvKRn7J8Wphr5Ug9d4wVSssPXRbamkdKkrgF5pHX5sZfUjcQecJaxLaeE",
  "key6": "53uKEAy7FNRnE1FbBnrTVxYJ6MHEzBbDXhGF1QdmNDfspGeoGgL9f5VkrQFrXQZ5nSzipadCrNBa6ETBHisGLkQP",
  "key7": "Nak5FEQ1gmgUbAXEYBkt58Y4bPCxcGs7kmSLp6KVrHH999rrEc1EBDMRGCJZhUKkz5S2demqWCAaeFj19f2U4Zm",
  "key8": "xQ8RRZYkebDpF94hGPXxYxYi41rN4jsu76uR4Kq7uoXkRVBGS1q2yn13bYk9iVvk6CWm3kdN3gR3fg2kNqjP6Lp",
  "key9": "2puLpqtRnu9BGDwbfMyKi6eyJbKJa3iM8EevRCeq93dTJTocZqcRmaxQDyVCgKzLsBYmfYANXLoDWsLDiJPUueTG",
  "key10": "4r4MSu16pYRJSBh9EM6XADF8UxvnHpLz9XJ9nfTSRVU2ZGyBYAH1uAeyoWqbMQ2zNewNokexhf5k7qVqafq12UdW",
  "key11": "4DBWSVFpgVpbYSNeok5EnrTGfNaRBJiLsEZMaHcpaWwrk4fANw6i5BKKcZRankhGkVBFU6fXLQaXjEc1JsVBpbjx",
  "key12": "2hQWHrK9bhPUdh8CPtfSfWoCAeAxc8uyr9FdsVk64TcbCpD1oF991FkdYPU7jKdFeWPiP3x2jDdVk9SQSuakbvwJ",
  "key13": "4JiwjzxWMNjkjiYg4Pefk2KNFWP4zArKkgACTXqkZqF32dJo8jBaHxnnckTtPSFosuazm32NhRfxoYBLHKJ7pFrH",
  "key14": "2gKB95jzftyQGTMLKBGipRXhkA6xAw5DZdhTtSsVwSdR1HsPmHWhC3FrMGwrYQCq81tMH8Vei9N3V4E2AbWMiMeH",
  "key15": "3B3Rs3eC9VHFZzg7513YQYFLwgtnmDBFqKuR5ekpsnEjSfg4iNXRMMgWX8oqgcSEwN7SDwx9JjfPdAo4dgFZCFcd",
  "key16": "tY8tc11CQSWDRCrL2vB3QMPpmWaRj4syN44i7GomHng8PihmAoQcevwNtKnAgLRvtf8oKLdDcRmwu99RpDWtmnd",
  "key17": "3MPGb3d1xhwyXXECUKNC8tWFLE4x2LQZegS5SGeCuuHjSWRBHBFUuuUidqNZ9XT3TKSu7XKq2XuFUioRaDPD1Udz",
  "key18": "5N7EJ9VmoQdsgHrPvVLcytF8cbAw5cPNRaNy1DXvbtQEcb8MHm17KADrTk5LHLLVsWBHGcy4GGSNdATXnKJXeaVL",
  "key19": "RoBppKqsKxAbuDq26Ee7qUjdu1CFccBHuE469B2jFEkKLb5LN3QEEsfWdrh9nkwDSoGkSJfAitd4oRAHykBkjvR",
  "key20": "4ywTteANPRXzXKRSGsZevLbR3e3X6dwgFTdhhpjJAS7xNLzXBoyUdWzMkbUghJWLZNT1DgwcRjmV6S2VYEmDBpjY",
  "key21": "57qeLLuTGnENUpL6JhsjQzkDMumxSHrHaEAVBFc6VVvPNy7oyshLopomgTbV1PRSK8MMcRXShwUgEgHDLVJLFrwX",
  "key22": "5vyRKuLWta65a1Qb85YWSpMwERWevi38aNThQxPWErMbr7SEnBkHupz3rhUNdmGMNquFiwvpGsivse4HM5ADGSiv",
  "key23": "Gj1bGmbMYcwnKezfjkMta8JBLaTNM7YWAgJCuHA4U5mng48z12qEsmr8YRzNtyvSoAS7xpjpVaoneaePF2pUajB",
  "key24": "4bmpvgv29YCBHTAeGFxSn8hT83qZE1YmMLidhzTE3Ln3pW69hiyckyadoWi3B6uQoDagjGG2wsCtwcttruXe29Fc",
  "key25": "2DaP6CEJpwg88JyDnD6euemKxRXha6iTLtX8xtSQbCQTGFpQpnriRVC74DZK2DtpB8DJzKLLQiggnCFCEu2qwAoS",
  "key26": "4kr6yihDAnpYu7PV36dg2mzwbScjULG4u4HTANg8bLfuuABjkZtD5cZxAh7SGEVRoTe5syg3DUrQiWZGsW7HWQg",
  "key27": "46eyV6uAF39MXeszWtgNLms7ZGnU2WNKtC2hWS3geQWpUp7Ya7eDMEqdANHYdzQLQ5DGLnN6qtqvFd1QcqBN44Ym",
  "key28": "5ihvDbJED414GTikos2Lpd3BaPMddyLbHNG18hKGgXufiEf4uKvKKEVeMDxCzb75K6Ekou6CKmZUhumoqP8w13xL",
  "key29": "DC34HnY9D2JDdpFu9AQEkMXga5qi6oVVnnxqFcWxNPNoc9uxuaGFGMEXpevuJYSVs3vwMNaRrCRaV4suWvFp87W",
  "key30": "3tqwgDG68Yzq3Cvp6rhzevf6kLNRCtepwKBGtPgvtBv1WAzinaVv3DX3xM7bpFkMnNnb24JtWPCRGo4mgsZdikDq",
  "key31": "3k8eo6gzvfaTJtpk2hcZN6CVauhRiB87UP2sRotmU8NZjdbjyM4HYvyPQymUoeJukwzgZMnAMGcFcXrZVzzwuMyH",
  "key32": "GGXWUvhxinMgCHtzswvKsy5xwsxv49B4qeS2Q9G4jXeL2hWTEGuf2jDyJAacCAboARUnAxUiVJg2txnvuu1XJ4a",
  "key33": "55pWtNJbotLMNt2F6Pja66JhDA1XAgTbT4kJbegoTUdhHhP1jCKBSWjZhys56AriDoG1w3BKsFayJTAXgUcX4XHt",
  "key34": "3SDDd373nXxuspjj6dJefjjprR6YgzBcQ9cdNdKo9jw6kukcgpGyE518TVNVrfEyi49goobXU26JdJsSCJqWfYyW",
  "key35": "w9cmKvECqxF4uCAYR8kbWDUuMMUd5TLRnLQg4PjHStkBdwhL4rL1LyqW5NvpnH2kL4zqq5A4Kn23MH3PY8soHXr",
  "key36": "4MSE4rubinJ5vbPEgssi35vWUn1nfS6G6ikRhytekqBLXKabDiu4WM9akTgskT36YfZjRhvvLoowFFAFwWTo77Tn",
  "key37": "4rbYeTEmTE6YFcVNo56CXJt4TsMCaP2eMLD9GJM5n2qVnaZ4owVXTczrcZj2qyn6A97PdacSKQLo5KsK8FAyDkDW",
  "key38": "5tq7zZ64RQkMUWibQ6Vrxm8TUCWSShbfkr6j3gy7o1t3urZSeDYfBhnjG4AZdZkeJ1evDRReMXZm8YFDkh6wijjS",
  "key39": "3XK3Yem1NyxJouEjqecsDbkv8ioYJHz2JQZ457964gUzokgLS1jGSrPLDdgWLG1tWMmGJzu2qLziNwZe5AnAgjhP",
  "key40": "3LjCdjYzrTjLKLAa39wcswy9JazjXpkrnDmygPLVuNoQeJ6H1Jnqi75AJhXG91Z5ttQJGPTySTXuL7gwCHJ55j6D",
  "key41": "jU5rje1YB5tnyDtLK8RPWNERLmvi7P16gRyf4Bgzsxo3jKQtNXujFUj2mg2qJte9xZiMxEDaMJu3xgvYajmi782",
  "key42": "3CTdAL81SjPWBW2pfUphCq4hJFfMeUByqCqPhkGu6NCDEZQJVCSvxLRagUhbuigvseRawghXLfpRjtSHwLH849Wp",
  "key43": "JfVR1MSaeNoqwNDAkfUorvgHJi7vhQU92niJvtdMQy5A9fTMrkNaVKyQXHqoWHLkJY1gYc8wVukLrqK9G8r6F6X",
  "key44": "3aiDXmfjnnk72NF8QiMGn9dXNedFzVWLSmhGJfqrVb5n5uFFuYRmUBfToHTVLv2M3VcZ4wgZbNpQEvehnRXuj7b3"
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
