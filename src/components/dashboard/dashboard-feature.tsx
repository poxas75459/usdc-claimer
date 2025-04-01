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
    "QoJRdsNHpH9Yb6JZdniGg5CCg35zZT9acMdzq8NxKmXtNDW2hUWfPeawUho1DYwyFcLw59BPJE3YR5ckMQnZzep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eTb5dH1XYMwTjmC8xBCevgjkcn9wc2f5KjT79SJKY3NbLc2EYteXY7fZcrfDF6CG41t7GoxVruFJwGxG6z9QMVq",
  "key1": "5YLtocJLv5Pv6YyzfeBfw7iX7mg5mDi6U8pAERUvta2gMzHg85qTpdUS98FCGnvhTBKPyT9i34kWHQY65pSbdwkd",
  "key2": "3W3u4eWZfHSgyhGWYuFEeBdsrDaAfabXNAR37L3ZSrhPP3MyP6wkEeH5bbG6PhjDRRBMK5XNyZ51ZCD5CFe4HSsU",
  "key3": "5BwDu7ewUQVxgPpb1fWq7JYJzdekHPMdxZaKcDn7kZN9sJjEYtNXjNmzJ6Fe2T7WqJtQiNzKGd6mTMrMT37xopNo",
  "key4": "4e73TwNkUFCoFXhfXG1B7VCE4ZJVvKAAxnFLUjEoBXM2ikHca5Gv7cfGzs2eNyQSARpR4s4mKQdm52Ls4YS3oMpm",
  "key5": "5BgCQEkpgLwzrgcjRcg4YhuFryeRz4ZiwuKux6Hkrvgg19Da6nTC28vu8wAAH65epVbZXVv5ZXdVNkigVCvSuYqd",
  "key6": "cAuy9AR2BSezMnWMiDPsKcDS55pqucbPT3MnV1LKam4E9G7Qwtzn6SbpWbE4v9gzHFjpG6XqiEWxLVDXbKf6qi6",
  "key7": "4qhV2Yva7PhepqBx3xENq31TR3FB8qtdhuYT9xWjMHMtX31choMMPKGDsP49vFTwz6pMEMGtpNtikYCaNKWokiza",
  "key8": "2c8Beznq8xWVqgp3SM95U68SCHx7HZMwZ9WKAZLyj2hNC2it83m9ABPQroLvARPV8MW4rvbGf1Eoh6ka6xqS6ts8",
  "key9": "3EC79ogmfV1KQxxf4wHbfg8KJA8cbcS5gvnkCtNi4wrgBqP41Pmf9arNQURNZ7QC14fitW7vgoBjZu8ixP7uom4Z",
  "key10": "2faPfUt4hEYxQgpFQzNZGZfHtWpSEU7b7G8xsUUEJLBZL5X2e7aBk638Uqxakxd75Jf5iFRUjJKVRvZGNKraWiTU",
  "key11": "2SvRyXUpuFWaaDcWkP7pgEENnFxVTU8d9kVVJ6C2aHdvtLsoj9d6xDrhs7TmrHPA1mogy8THwgHUXN8PUZSJiSky",
  "key12": "5PWCu2kMx6d5q2GhShprCyF9q7Pt5bquv8D3BcnKtHQdze3FMDkGFQSzbbdQ1Wn3UN9226T9jrLwuSLD6UoZyk9q",
  "key13": "4qk6Ac9LbYLWT3qhtUD9GqFUNu6gAPrYFZb7tKmcuq23Kfn4YkBVusVF3dMvzuq3EmbAdzuN5kcBtXafjFPAB8m5",
  "key14": "3cb9vf16Rt6tVHmNozj4Z1K2UHkR6X1c6WDitGaVjEEgXyxUj1MCZBCuz4k2NygbFNJgaDSWLDD2Aods3HrBvUg9",
  "key15": "2mrKhRAwdKndErccF5R6s15kaXC3ufMwZ4GRRniUjdxckWVSuVwM12TG5XM4ZZjrTPMK5G4RnuJmgb5zNERjuw4a",
  "key16": "5sSAs9PvrJh5jYvQKvJMh9iERHE1b9fFesKnaPzRvRJGBk1MHkA7tZApqZ1w4tKqZSd1CqGsLgPTwa3hkvjWjH18",
  "key17": "24jSdTRMenKiPjTUeeWPHdsNW5yg8tvUzGV9pFWg17pCU3LiYdGt3BybcHpWukasH2h6hSd2VbcGEyy1WVjGtwPR",
  "key18": "Hmk7SkLQxQKmnVJLrK5uX7vTKQVrzXd8UwWGPdGKP3kRAK316PQ4xnMiHpTXWGRY7qf8EbqNBcnp5pmaWXPrETg",
  "key19": "2xX8qfusBTcFA6Yy7k1LU1GX2vBFarh26q86NpNWBb5ABi9y42tzPN8tAyySTwmiP13pGHL2qRG6jNXTpoRa3zm2",
  "key20": "2XXZGXxmUvuXBTCSgdZbGXmP5X69yX12EHphsT2dyq29PRaCFjx9mBDWFoS7UXJmEnnbQibgQEWWKoZCkiDC62ar",
  "key21": "3qrstJhojQo9RXHhAYsBFyo84aDwMxnYoyBdxPzDhnbimzJaTadyCaRq97Aadc6CtkUrKj3NgoLszs9PaqZm8ZPx",
  "key22": "4bqaaZje2eutCiXowQahY4QYo8wGA4E9vix3avHT1r42aYngWTKzJkThMEX53ySuTFDapJbZzdYu8j7bA1fV3YYw",
  "key23": "3BBpn62k9CL5Zys9sFiT1GT8NgkCM3vUdQx7UVbYbDMmkKRw58y8MVXYeg15vTu9BvdQeMTiY9ogLHLpHoKYqU2b",
  "key24": "24spgw4KEN81YUzoGGuEt9Gixz3tYyjr1VRZgnhWHL2AnefSxoVUArfkqJBqXM2X5dcSRyUK5EoUXtVyynaokQxa",
  "key25": "35av68DJVPt7TJAGzpy8E3roLjrSTKD6bGk6rhScgATs4d9qKAuPsBNnK8rSQj5LjdgfiELn4a5dXk9akkFWYYfA",
  "key26": "3NybfUbkRYcPXp4cbQ2DcigoKpzEpA5FPc58GbXfrDtzUTaC3BhuLUKXT8dBhNLFFzNx3Sgfz8PXfLUnpoficyed",
  "key27": "2VEMuGHuYfevJF4YdqrvJtK5UjKoJgCujPJ51qYj9R3aBXM7VTNYYqHFMX3cuRYNjrgWcDfefQJyAYKFgue1nq1f",
  "key28": "xnpjHA1BXvadCDr7D31UZSFnvdZMwj1uWrg3QeCuKVNtUz9ni7yx366u5iADpfZnAKwT2p2UKiwJKYghDEvorGf",
  "key29": "27iRGKbr3SyNc2UE82Q6nTn7kL21AVp4jop9XK8voX69Jm28KBJ8sDibgpXUxhmaEXhh8k7k4nDYPAijz4sJpJHC",
  "key30": "5bMSMwyW8R84fEcDU1KqNH2r4TJF6N2PdqG1FLUzsQQ1FSHbLdjZHbr6k9r3KugWq5R3ShjW1LBd18huNZPECRqQ",
  "key31": "5657ng5B5sFZBCx3LrPJ2bezgLcSuUZL2ue25E27N9GnAiQ4qyx74nUZfy1RziAveBtuLSTshdPmQ3V62ryjMwvS"
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
