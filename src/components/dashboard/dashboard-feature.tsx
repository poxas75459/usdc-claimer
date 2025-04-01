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
    "43x9yWzgB5eb8epKRSqcCUXA8AgjKofLALP1AuJC3T6voKLPYwMecfx4Mg2AdyUoqHUmzFCJGVaUqxM9nNMaXPPE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z3msDjFTxDKqtsuFZ4P6H8PRUTjHQA5Z6mDi4GoaUbC6p3REdhDviiv6kqL7AJGibmPFC3XnDrL2NWtRnejzAkk",
  "key1": "4biszmY6pWzS7nrZUKSYL4b3o2vr5aF6Adas6ie9twJ393iZvDu8DVuENAwZqmRfvGRQSEq9toKeeTN9v3zxgyH1",
  "key2": "3hvHjCJrwi1tCVHU1UMkcm9jqDhv1tEvsgoDrpT59TiqqVtmvWaXV29c9XqdJRuAVwHNAKJbCyrSe7NimxvfMv49",
  "key3": "5uEGmqU7RzmrHH6ABkuchNg1pm7UVuS4fzsoSbtakpnfFP1qm49kNcLsTnd8muD8NCp2XQEzgtE1Ua87GFA8xdEF",
  "key4": "51GgEXYJiXJKWqo2nXqdB5qwDfsv9RriENjrx2RsRvWn5NxFb5w6Gfq7RpFNUsjtzCy358YLc5quKr3TJE7kncen",
  "key5": "2s3LYz5EKbR9fY6D81DaJdvEMKxTai57ZEjjVwhyKySD7DKAwhr75npHotTUj63RxLpFFtZX8ciz2YHkbJF3rwGT",
  "key6": "5ATHj4hhX2oJoQN5LXERFYUkzXPMFSNsd3U8JbQnHMogmVrVpmvSKEgpHjT1Aco8FD2B6r53kY8DyP8KDymnh2zH",
  "key7": "4HhFrEYETgiPmFyaSMoK5RDvh35XNsi9w9DEq8rv8dGm66VsZQQi6AiubU43t1uobmKtqeoS5KejNeH8phDoE3fb",
  "key8": "5bG6Pez36baDgFZnfcu3GuuaZMM87KAqr1X9TMecTGUfrL467h6Y7tbTMU6n4tenHMZNP4GNA1fdLJiCZUW9ozAY",
  "key9": "53mXsDhHcM3CyDh7hVpSzvcwBedSSVNPAYR1tVpwS3NAGVXREDRxS3PdUG8UYMUXqXFGF8t4EUyDDLdtRxReMhYk",
  "key10": "3VEDjxUmSfPBMjWzUFjuG5QF8tkNu9nVNec6CumjnMv6XioPKc5b4cWvMwQqTNWh2Df9C7WV3TnbgXqSad1GnqdC",
  "key11": "4KEr9fnyNkwk8wrazBtQowjNfn89NL3YzbCywrF4WfZFLHnHBKtezkR6bJdqHXKwSm6BYvnWrkGFec8icNDqH1Km",
  "key12": "4xxD3eovHDpjbsUW376WpZD7zxGvqxnM6oZADar6iH7bGi1gbJow9y2WKaXPmZ6FCRyMSKRbeWTzAXiKinYTXaLF",
  "key13": "4CNfLKHyzEG4bCb7QbgADtvTQwB7TqKFnxv3h8ZpSGTCBkfidfdpAk6e5G8TJQmNbVSC8DRsASJdRhj3WnUuHzaT",
  "key14": "3MTazi5deBYJ6uAoSHvgy9cGCt7jMBtrTiKyXnXMuEdcd4FAj7ujPwJz9ZUfShxw1b2LAkzHeLfeGV8uUcBiu2Pz",
  "key15": "66ThxwdkKcoZG89KEdmaqiS5vaEJ5K6995Wr9DzeyCGAhA38UqBTjZhBb92C1qgS76ccWHk3hGAWujqtNC3jakvY",
  "key16": "41GjUWq6K4nJup6bF2cVxhAzdbsf1ZP4WqEWVp7zGF4sL1uMGJTEYvdzZNaHSVJ2yKsJNhBuJ6bQ6UoZvGdnBirj",
  "key17": "4sLUafWaxYHQ8bdcrVAQ1cyHnx7nHfSUuYaHHBaEXLMZVfRQTxQduRQRLP5nKwoqTEQ1tvoEX8PSV8Cc5dP7WsKg",
  "key18": "4A6aa9qSCofJn5dR1w84cahkt715PSkqai9E76XgzeKiP5QmmxTzV5QYoJGE3uXj86sPaguGAwLUL3a5dTK6Jh1y",
  "key19": "3zwjjtm7CwyFJKBuY66S7gNuyt5vJCHoXjrJL5VJBF8UTx44tTB4vcYfZhiMHbAsHULqYvGcZtXwBkzgMEQibpW1",
  "key20": "38qrTTqVmQzCXkd4m3JMJQoCKh9C1gkLaWJqDtY2jM4GUCxQ9HnG7H7uVQ3Jm6w1yRDQRwrh88Z7KMShT2JnTqhG",
  "key21": "5x16sVuepTBMsbFTk9Ya3MYaB1AHSqBq2YWrd799LCQtWDGRve3HnS9WmhpfFhmzcW3kbFno4DCb7129b2MiHX2R",
  "key22": "33YtSCy7Y7ypJcDdtAHyG2xT3yrDzn5tKfDoDpAC1QfMUGWgM4dKuoUYSQU7fmP2TEMq7p13JJJAFQy8hjCjB5fn",
  "key23": "4yPMCddR7BeBHw5cH1vDCVANrjq4qmovinUTW2BX8sShDujFTnVBECt4AVG8V8bQdkXep6SYRBJZJBDLMb3cVcd1",
  "key24": "5sv5QXmiXsGwsM1ReJZdSgLq7Gvx2Eoy9WKxxGF9AMnosZWaDfwmSuDSeL96rsYx44QgPXFQj6MfkR8ThVzRX1Fo",
  "key25": "55By9qpBK2Ri9u2y2fXwf6XeN9MRJ2uzBFWkPju7MqBBpnK38pGYBRKCcpEjiCiBguYbx7d21s2y1ms2HfvoTLLf",
  "key26": "5cWGdk4uLpakmJW3gz62XcQLyFt5bZMekheHyHS9qXahy7xwMpP3aFqFduiu6pDy56dPjeQtBrHKbXDs5C3YFT9b"
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
