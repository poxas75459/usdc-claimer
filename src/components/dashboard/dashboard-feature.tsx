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
    "5sJtqSAKkvhtkAJ46qQ224xddC5Wu7RkSszhbF9hJMe22NdKM79XFDmXC1yzxu5LV23E3pdADYkqphL8LLYiCigE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q37VQiactZPvH3iBuu2Eeb4FvyAR4nBgrMRwDhXfLEGtGfEUPR3Ft9knqje8HF7aaRox4F2kUvVEtvXh3ym19AR",
  "key1": "v8WcWbae83WVkdsqpDLPVx2BoRqatgyHx7YQaWbMzewTgf4zzriMHssPTYy1jVjrLPYtTZhSrPDvWT4NVcgJcQi",
  "key2": "2mPSBiMg1HqwpvTTW7wWE7a6GdiC9gRzBMGmm6iJxGevknHNY4UncEQyyYoAXKmzg9zsVFWTFSckhrRrrtjif7wV",
  "key3": "3cCee5gpHdhk6gyV1V8xF6XvsEPvvtToVDrkimcGNSoYyeQ8X6yjeh854J8WaGNuwF9H6YwAd4DLX9YCua916izq",
  "key4": "DfjKDD4X14XKmvhVyEbxW1wgcURf2MvngT2Ams1KB4YL3C9Ba2NH87cVZNWVCPUcHrMBnY6QcnB8WZe2LpseNJF",
  "key5": "3U9EG4tWaxHuLt1VSiC7h4xpcTAvuFfiG7ko4FLoUNhWGbBGvpd6cwbRuXbrkdqkzgrc86neey6cSsxFzHgX2Hky",
  "key6": "4CcseUbEUuVbss7uvcbdaGnmYeUVicmJQc3J8D2eASihyVvVTVCtxRGhX9W3Mm5Cu6Vwv5pqknB2dvzcahjWAUPH",
  "key7": "3vw4qHefS574hrbVJwrq2paWAEQoo75konqJdr7mAJFzodN7uXuJQkekuZ7oFDYFpqEbrJCnVzXBbDkW1yb7GQLj",
  "key8": "FkrVGiii7NUCW1wL2A3aQK8u97PANioLx9eEn84wyiS83JfwptCmquADkyEog22CH2RnCC4HWibnqJFzP9Fv7zL",
  "key9": "3dD7aMrYsHZDv2RDQZ2oiciXzMf1YDbu4zkHSU7X9A8gt3PraAuLucPcqM4GUqj72VFZcAjKGhATb6zCPrBXC45L",
  "key10": "3iVr1vByTFtv25aCE3LafEApfMTQvj3qA5kgdvtoF3JjaAVwEM8xFqqkiA71t58dRBF4rKgiCzuwwoV3zLj1mBhQ",
  "key11": "2fUr5BcX8tLtsZZnNQgukdMc8pHjcFPC4fGW6StunRGEypJqwrxKwQ1ydF4uD1rH57n5w8xLAUhXWsxWm9C77mcr",
  "key12": "4CPrY5dDFtqK42LjKAP3AggnwMzSeA3CfYktwKs2HiGUt5THBmbzwD8MJ6fLuP7QkoFq4r4Mkkit18HLh5FSFw2c",
  "key13": "5GKycqmrZvVEkam2Z2fEpdFXste3JFRfprQ8uMtrpcR3fpbxuaKCB2pwbSUFzZ7huRfwT7Vx8eiBvZHqu3Jr81Gb",
  "key14": "2k7zYBoSx6zPWzcT8dLXakTr2nenfc7ruiiiuhEbAKjCXQbR6UeaDbLr3qDVzpMBfw7gnKSTz3LJaasDrDQQEfrz",
  "key15": "3ui6A5gDXjNHWcBoahzsQ8gbJJEsBZkeyCcWvF8xLixW21P5Xn8yc925dKkws9LXCeWapjTWtJq4pvJ1PxPiPhAD",
  "key16": "4uArwB5JvTC7ijEaXTqfsD8LXn4VykNa8CpDmToHmJzc69ww1PBbpqZTXhqpsXgNFqMe2vvuqPKQCJ2tisyMjgqD",
  "key17": "3VNP1jioDsin7PgcnjkmPMqaRo8EHTh2oNVGJKwkXNQtrkaE6Pvz2Copr6y8kcA2Lh5z3n4buzyWDd5wGcnctU43",
  "key18": "4aZdUenpTRcpB8oj9TK3zDjgxFeo3oTnosMvY1UA9GGzJ6xgyxaN7GkjYLemRRScosrhtWsDJd5Sh1UWwXpiJYg6",
  "key19": "33VehuSbUELeiaS6dvj6vxHwz9m7NkJKZi9Jk1Sy41pdCdw7pX3gkGytwqndgvc2zpFa1eH74NfD1BKLFjTuNhCQ",
  "key20": "5qM6drcgMUsJFsPv4DUxLyon6yoPVYCBzbyWyi5jSpcwj8CHAKNRq54QX25RBJGTSLKfH3MNFgxsyMD8P8AuhKHF",
  "key21": "4dYzJoyDTHyYCHCpBUsVJoruLWB51oZgx8v7khvErDcPATmAMdFaVatTKfXdfhkTzjeRYK2d81rct7B7X9sm86rZ",
  "key22": "4ZnyTmo2qb5awb7AREgdHPERBMDv1ztVDRD9pGuVckRv6Lp7Y3jvaEbBmpgn6LPYtxueP7qr2Zw1NFiiDSvxhmnx",
  "key23": "uLXzpdA1geHz62ctZ4W3Mz5B6yNCNLBjMkCenhToLKVLfyGK5XA1XEGtvbMKGpj8AKtppJkdaHVmGTmd6gvkLkX",
  "key24": "3tC8Ssafq8FzqGFvhyXfJF1DKKHNLpodrmmc7DNPZGGAP2AKhK6bxS1gKPVpQqGCJKsW6CH1q6PZ56T7fT2i2Awx",
  "key25": "4DZKrSQEFkWhgY22Swsp1e7VRfJw22Ay85sFWx5fHfmAgstTBKTf798NVMsudgYB5zgyi95tmwh1fbAyvBSSHz3b",
  "key26": "qZbxyztr9Pt5xu1XaWta7ZJ928W34PsKEEUNCexe3RtZYDCxViXYJyV3ZqppLYXrGTKTPHa68s4vL754YyFqx8v",
  "key27": "5usG5zJZsTfVyWucs3WUgouqKFBuEJixNq7HSFW4dbRxYACHfDmeZnAewFf9fJ2QXoFjcwMhAC7KANafQxQsFZvT",
  "key28": "R9Yk1xTiqqGNDbPZWQQcpUnJtLee6YSNQgHaBNabSSmjjTrpAt7K9apVJGxziczMW6xFZ75ExyRbJgaJqtcmTrj",
  "key29": "3gB2tQgfpwUrs3o3yV3t4WZra5pfJE8uT1iAnaeVvNp4Ua3QfPycUESW2eDkAFd8tjCkVRM6YfPPGKdKgX7jRBjD",
  "key30": "4ebCPYpmUmNnVCtTFUjycEQ6TwiUdVp1SJ4ptYCHTfTCASwp7iegpQ6jt11ZKqbVAe6et7Mc8abt9XnxAvvKkAXf",
  "key31": "taMymXu1BiCcr7Py14kUAk23KeW2bgLCAf7xaEXjK9NnadD5nZQXQ6UQgQKNDBaRoaYpbj8teLXk44uVv21PCHc",
  "key32": "4hZEQqXLEMMLD6CtwyDQTHzFUK4SWVek8EQiEiKFAvJ7vrEWA29G76jqqKjgjbMjvrgqahv7oh2joGkgy18Qpv5Q",
  "key33": "wgNRDrwCUhbbGLR4uUnVvca57kgZUDkJMgVaGvmDkUUYvUqT1Kbe55aA8MidohfJYKNEDkVYVWHVa9fXpUwPPmi"
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
