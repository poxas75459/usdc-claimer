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
    "4vuor5g9AESmsYtn23soCZ3jx7oeqnVEkEx1nciX8NpJnc6AczoXnLNSHawfgQd6vpGMWCwzcGQQXN6NWuQgEHr9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AZKAvxjLmEp1zFSAFXewkvvEgtQvpGi84WwN3XwJPgbQTGm8TGmMVKeAaeqdu7CswKSfV9UssRaPdKVDZa23biB",
  "key1": "2qa9s9Hi6bExq7MEaFMfYx3DHhk65bbrncyGwcPwfH9MqGMWBCWo7kBGNaEZFCJgchVrkpe6Jx84GSsgu3KfWR9A",
  "key2": "4TRVHcnVek5w514CHjQxuJQr4DFPMfKQGUb4EHmfAc42A63k7morkAvhFgsmGJfjEtNfPQkER18nSzqq1HPDvxrr",
  "key3": "3BDG9v7bK2oZjojgaZVApZ9935Q4NgT1k7nJR6nVQLt5Y3TrrQRMQwKw6S5cM7hXNSde6D35599tToAGqQXSfEfT",
  "key4": "59mN7gM6KjSmnRkt29zYF6K4A9zYcp4px2JCQqEHRD1WZj6b4miuzfHZgJbhXo3ANQFC8WbVSguwrbq1bZYV4Hq3",
  "key5": "27eRrq3GcZdhbfjCAxWqySYTwv8DKmRa46Rmo7zpgVf7oJ9yoDw64xPjmjMRqBYrVCnZpxEsXdhmQXTfY8fx7UUA",
  "key6": "3T5bigZNcrGGFo2NghR5FJ1g1JinNDHdfh9dfZUe1nHgZN3bGSsAYmcaGT24jiMJ1347dv9bZQRYhqpMSB4Z47bh",
  "key7": "2JgvhdvtNZNyCcsre2xFZ5gvVmXAf1nfuz2jhg71Wq6XRmYrM1vK1fPUUa9s3KJtw6icZWvYqzYzfkGcEVh1msbQ",
  "key8": "53eg7fSR8LjDadSbk2Ca7owFP9EcfQ1KKZMj5jMJZ18YmVjK7ARLuFY4KMkXWg3n8piKGyApPDzGziQLCcoDBBBJ",
  "key9": "5yMVtiP7Qg1tFSfAuXfYUo9yvoda2VeetV7DLkGRN7gAh6sUA31R1FyPxWhdzLEtu3UHcRNJ76w5L9RrCAzaJKir",
  "key10": "3onf6jy3AHoyJnhS3uXpLoLsE3H45KSPEVwXqw6gwoYCn33PVFq8ExpKWbXDj9deSQXVymSpTu2FNVKcZAgcAfEf",
  "key11": "5NezgF9gBMUFFxU4H2sAkdNW8q5ymcnyEKJWNgN6RVEfyEUaq2LpUWqcvoxXh1xnax4mATEACFFBqk7oY2H7iHB2",
  "key12": "62wt4X3SVsyfy4ExUUW8XmSXgSr3tLcgQDULLVbrNguFNrrUgLvUUCrVCksSVQh1CFg6QeiTYYBGuPBMPKbQaf1B",
  "key13": "4tajYKMH5fbSqyRFbeSFbHB51JBPh6n3QkYN7As1JqydaeeAxSuS4r9hN4o37bC3Ku4SAMe4Zpj4dPXbNJceTv8Z",
  "key14": "2ScjEAe8YKn1v5ybor5Cytx75FbZQ9EG1phiqmwsBdn43F6Gfaywpe9VtmVxiJPYjMoH3ENDnYtgoibJ9gAALJEf",
  "key15": "NrwygMjwrwmCBXq9xRY9BNnquqbdPFwh4y7HoYNgHgvz4jNvUNo1SJscP1KtQcsP1vwX2ASnB8rk7g3q33rQBr8",
  "key16": "kHyo2BnYnPPfSSRHbkna5cKY5KMEWFXMoHqqMmsCkDrJNoLbUrcZvq3v2eZYUrrDg9d5aLH7jNGT1o3W1JYozVZ",
  "key17": "5WF7tYra9azrEsy9SGPavophb7RiQot42xY5VQZFk2y7H7gtKcqzfsBQaMsqnamu1HQWhjQ1tTdnGehiy2tg6dKZ",
  "key18": "61NDXCJLqFmtK1HYYzoqzRxFrPEffdR514PXzEdJu19qEsdgz8yWDoQu5hadBDrN6LUfh9n7VhLs4L9gwtG3qKCA",
  "key19": "3UVQKwNikzd1H9zqnieJyWSEojewabsCMF1U7ZeFrAaqhsED92QErLKqCzGNEAsPMne2VKVf6iS93Ra1nPCyrf1C",
  "key20": "QJcpMJDSJBLNXn721Qcxh8cQyV7E2iCS8YwNrZMJVC9dXKaEYAcxFwTagbKG6CAthGs2tfmT3qeCJxxpLFTaDeG",
  "key21": "2wqNPvaYiL6FvBAc5fSkAuiChXR3KfQqjHhYmiRtzau2GfNrZmnxUg8bzRZXb1CKXWi7xPMHNQawTeaz8mM8AbWT",
  "key22": "BFPW2LCVQhNYEomSFSvCGtMvZctpS9692xppchMAng23JeZgfvfKjwPd2tvNTA11AyxD48eWLNmNE1NPHWMPURw",
  "key23": "2TRgBSDn237sCDZQ85sQdkvcxgXPis4Nd89dTBkotCiXGgJVMHH9PmNzYLcKS5AzsBXf5NdRBbcj44gU9ifK2p9P",
  "key24": "3epQswzm3bD2DArM47DkozyqxFQvJiAfzaHA7igjjbB7U9gLeW2gVR7uYLtQgy7z6Xk7kb7LynSjczBJpxNzP9YX",
  "key25": "3ghUvkaLeXCJtVBbjD7R31FHb7CtJCz6GyYy6irVe8iUg7iBczDdribp23yFejnPzUqaSUKm3UUnaogKg4gtuBsu",
  "key26": "3tB2msUsmMX6VkXEJVo7GVVKnrmGP1VZTvftmBdwHFL5VuSF1z8FHideU5yeX1y56KUiRYbbooAn2MqqnRZ9LCBw",
  "key27": "2QjD7HPe2KPp5vmb9QQKFk3Etsc6ay2tNXhMqkiNn11fyvWB3Cb24Ffs5n5REQWCVhuCuG4gSCiaLY1B1qTiE4hA",
  "key28": "3Zxfpu6kQSP7SegRtWtwyABhBHqtz9RL1rpAVhPo8ciAPpDvmpEK1Kq62cCe3WqiBEPaYfJGUtL74y8iv1hpMk4a",
  "key29": "5cb7JKdPqVyYqUQf8ZZbrq8yS2Hy3joQee1JFz34tGK8AZ8J4picQJ1LzskjoYCwyQAqeJkxt97BR1L2Dmj8oYgi"
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
