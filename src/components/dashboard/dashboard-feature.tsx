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
    "4eKSWsNuh94FCjLRZTtrwXNJBxK94QkYtMPFuVWs1QfCqwAgzVzgDva7KPbdUUauv6T71G7KC15knB7sR8sUkCrN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h2x3vceREcan8TjCXZ9ZUfsrKkucQgVqQ8AsVxjD1ydPDhGzkxJ23Q9znH2ud7sPC1Cbtg6NYB7baghNHtVEqWf",
  "key1": "4WXYodKBSHQhCtU9G1V1Ddfh6t6cFuuWfVt6YrtUvEwd4DyMmosEnvfwxnXPWhY9zS3Hrq1iemvenNBbkW1r6xuq",
  "key2": "5Tc9WCZJutTMWvbHnMGeqQS13LyWoL6QVmrU6JdQQdaxR1VkdjE1x6sWabEAF2LtzCGBVwyVjMUQgBQt6Y55KZ3p",
  "key3": "4xTp3HJNR9rrehaWr4vtGDqTLtuq19SdePeEcF6veUY47cCJgLkp9KumkgJM7M9LujrH8Dq9h6fgEJhNf387yLbo",
  "key4": "5TJa92fy3upeaBb3pExnnRDCnN4wH8eYGM6N5zNqXRJMonWCCa8gYT7X487b1MZ3hTnSbumPRLCytCzuGHHESHt8",
  "key5": "4ZxoYDK3g7LWiK8BeJ7BHGjEjisF1ZrpZjEM6jFBDDADTR5dtzNnUJUnEcK6CbQBGYakQGR46R65CEyBZSYAyjF6",
  "key6": "4kxk6woZVGQ7jDbGxnXhEacUiXftZtWvA88FasWWeUVvdXcMHXup7eoEB2SJkY4BYwLVjjrbDLsk8bHMm3qTEzBg",
  "key7": "32N2kVe5xsDzxXctVh1JsgzrbunJdZ6hzRVZpyudDbRFdQHiQsm2W2MwwgfHYsggobpdojYDpu6xmAb42eGAjUpp",
  "key8": "2Lvz5pooUHkg9zsjsZgiryT2FDFJ4cJWkxN1tqG2z7wbQwu6cSq1uEWTiYZXzqDAk9bT1ZquuXYwduHhHfjYPMCs",
  "key9": "iQ9TvAaH3AGKB3U8yxUeWownfzdSEyrDPtxhiTDySjLsrMdnkRs3TUtjrYybJYf1d1pT9gzUbBf51DenAVAj4To",
  "key10": "4kkXDzKtp6vBKDpANCXJ6ANS94ZifF7HRAZev3hRFuiKA39wCnWxCeWNgTYNGwVRM2vdrmghXZCCAGsWsuvgA8K",
  "key11": "3eHLzUc9keC5MHZ77jC7EQrN1w9Cxzc9VsWDuLjbS2Vf2xJb3ardLXU6FFToUB9LL8R6qHGknu63YFqpg2tKywJk",
  "key12": "xacUNM8MY16X1C9BfujAhkcxtXPVwiWFoCbyzG8dYpbzjW5ejKPABtsiTrq2JmLqfrxLRvc63xFRytVACKousEh",
  "key13": "67ZafBuEvQjkxJxki8wWsAj3FBLS94BFdJoH9f3hVRTvEHcp5MwP2Ha7tziTD7Mi4S6GL6zYEyxQgxQo16sropby",
  "key14": "5xPoSKKNhfzF6ZgG4KKdbWeDpLbQ3uof3LamG4vbFgcgZ37rnTfda1rJ9LmTDELEY4HRphMnfSsMmgxUhSkDxhik",
  "key15": "2MrNnY5wJYfAnFgs6jEFxbNA1YERvtLBisVxQyePLXgPgHipXfYJBy6qucrPrGS3uRcDeYg9j5KGXcvTM3k6hXZ7",
  "key16": "3WWGRdtbBmck3Poco6eRKTKRs2kXdw7XnRW5nRFPinKLPycHACF7hcduRbnRtywKTJjHyMY9ziPq7ZxoMif5xq2K",
  "key17": "4y8ebioB9Ed5HedXg3QvirAyJjTATjtcnpfKQ7XsZ1GTcgeJEpn3RRNvpwVnvxZzbfUjAUJ59pJEV9gwADSpdvH9",
  "key18": "4DEu7ZJWfuzwLbVVgrKAGrRpz5mvKr3WoY7WLUKaxw9UyYtUiFtVaYJvGZG2oqfmPxwe2RyrJDg71v62z2j4w6kS",
  "key19": "3ipbPcqamJjowc2xXW8nsVPETZG4Gp9wSFy1znD4bbXsn8tAKvPWqKt5DJYFRsnUt2W1d62DEqYEcrujhB7SmCWV",
  "key20": "2CEQtMMwaRf4JVMme2JRoRTLXKv7RGx6VUo89Xvco5eyyoxgGNPMEmx7bNXw9RdYgFU3YEf4pUWY9MSUG7GCnQMo",
  "key21": "TX9EhnR4SGm3EyN3bKLDcztgc4TozeqFA7kVSgeAQ3n4JkT19SSFm8Ftkgd6tcpDnBGaWe5eDZ5Y56n7QJKmNFK",
  "key22": "27gYGtmoET9Q9bap1513rXdJdC4UXqLu1px39Y1TQc3ykYdYxMFuYtPoL5k9J8NmY41FA2KLhCrT6uf63iFvBCq5",
  "key23": "wx2aGXH2TPECSaRuRt4PxfK9npbtVQryV8jFPYR58Y4AmQrZ6XkWTxXreQQyevn51Nyfik8SQWsrUAwgh2ChjVz",
  "key24": "DWjR6thyozyL5jiby2EeqtG6VmdMFp7MBTJ2Wx21s2nsWn1S5muhgPd6BndLv3haiaz86b2keEeVevdkxeFSHK6",
  "key25": "4xMaTGXVBXsbAyr5aGn2doo94WPYUwWYDVKSvQi8eoxCzvfQgAd8XdbEwMa2mv7zUfsaTWdbKbtcoc7Z2UwewGH2",
  "key26": "MUwUUmLjjU62wRDfzdtpJ826i8Wewwj3wYCuiUa62wNqMGSseD97hRBhL9bqfUr9BF7aZAXtrNUGbS5dXKij48e",
  "key27": "rjQVBVyJXUoKVCQ1wp6qyQFodqd1aXAfnDXnj4ybZkjFAFBee2V4ojAYxSdigJ2miERhmUo2wGHghwSkcWZ84HK",
  "key28": "hosVcSComFcgQudw2PWYj8fPoznAfUr9XRkYVX5c8agVZgVQqqbJrrpAaHehD443ehng1T5UvcczpxFMhHDa4Vj",
  "key29": "2C2Z2RKkX4xvppCHivQvpnX4JrGMEG9bTMf6ys68ChV27kco3W8fRyNshUeroEh6WfCjqCiJGhSX9kupcg4TW4c7",
  "key30": "54g5cXpCABEsEbnkbQqCcZ1sLfiFSVQtKYY1EfMQ5rXdzcQVTDHqiWGuzezJWYJitHiLAA9AXaN4QvgAsJJVnfCn",
  "key31": "47qpc6H9AGFs3RsV6ebv2yZYyKL3Fa7uCB7duLaBJGMCWev2E23oKcNH5uX3fMStdrVnP9cb2mxLBnheSJj4gcvv",
  "key32": "42x6BGE4Z6VH1n2ooJNXGD3s6o84odywazFuuEJ5afymptnzMyL4dE8R4c4HiYbgJQHnNSoBMvnFTnqzaxduBpZV",
  "key33": "2qBqvLTWaNzAHrPMCgESR5PRDAj2p37Vxr1RWdRZbQQxF7Bky9gbDuUJijBBfhovW5ULTEXkdcEyvkm9ETj9X3jy",
  "key34": "5eiRXAyeKja4yiSEQv5uqKDYWjAdA36BGovoNUPMrTeCpPHptcvnQZFX3awwmcvDQ1E2rupndD3HFKRbHmmPKsvv",
  "key35": "2CBa6PAqrS22syeXViDBHryqymi3mBdcpana3pBRqtJf3AYdJk5CfF1jvUZ36qHJWoQwaUBsCjnLR3GEyPLybezv",
  "key36": "4H3dmD1Cm12oskjJXerPUWnFvJ2LekV7a8WkV9KXDgAiBspmv8U7jrUfvBdZ26BGZuMpE2keSU9Nsii8iLrSWCAs"
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
