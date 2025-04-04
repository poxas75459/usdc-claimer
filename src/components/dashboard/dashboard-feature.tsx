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
    "47pXMUafKj7PQDgoGXzeWVkLpiZ7egUaREPWtmLE4gkHCCiCj4TbBWzCeCZZCcU39XUZ8kTRNZZrcEzMB2TnxbTb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3skFP3Hc2oJzvnmLVSEZMyApX3xCR784JHubsMUuzYM4XuPknAtS9FRHMSQ76ncH39pvxZkSLGmFH7VQa6EAYbyQ",
  "key1": "67iHdf8AwMzN7PpB2fRxnbUjc58nEuEaMEeReq2NyxpS5hzu5egvkhEAi63tyFnxEje5hnXxwsYcJCPZLb1ciFTS",
  "key2": "W8cKLWvUTbsBqvoXMB2G1hPAf4yVUpujJyCw9BRqiLjMKBq3LJ1dtngnXx6P5jA6GPQPwfQNSBupHUgqFxmb182",
  "key3": "4ip29xrsn8AEdjP3bYdXRWLTAgQ2s3Rknkv9jz9M6xFcgeLcndLEPM94P6AYSARZA7xYKrUynw9mTpaxa9qu7KX1",
  "key4": "e3cs88mPtQ3qjBv9VpUB6U8ANbFL2svPddufDQB8t5gpqv9LX8VgqfDdphVrFa9uMRqnQnYxAeyfAnxkQFtpnxb",
  "key5": "5tksDJgzaDTiZMi2aaSSyeD4c5XNewddtWqYkwcC7CUZeXBJ8Fk7Kevu1Uc4XdYwCuX2Z64Y77YK3cKoNut9fCcc",
  "key6": "2WJC1H31nXBPAw5GVswRoS8To7YxS5ebZfDbFcGDpCAwb9yVLYoD5Q89ymFxY2pvASoZRaB9o3UniL8a6mbnVQg7",
  "key7": "25Qqoau5ecmSaeKhjrxvyGNNUy7oBCufJG37oJ5Hgd48Kavi7czNnmGZhemTbcYf1AfkCEjbRYCLggFBjZAHmND6",
  "key8": "23BG9wqTzqN7gbWsEmWxZ1CdLDpinPJUoctnQUA4jpT3Y35sumhc92PxHZPjqUzLW2DTv9t1fcd61rqGKpjSgtdg",
  "key9": "FCVNYhw51J3Sj75ZZr3DBEoBTZBmLY7kjACXYTCQcfCdhSrWa6CrUhmnAFb8FBYUApb3p4Aq7URxhZvBcGL6TbZ",
  "key10": "4DMSf2MVodqn26ubDLwJYboZpgBJnDkuwop6yXbS4PJa7xZhZZZPYLpYWgQuqbibZRedauNmGV1bidNWMzL4kLCA",
  "key11": "GoxaBB2Sa7m7JgVJBSZRMzuUAUfwRtX6mfEpx4x6wdG6b8paPY4QCUcfCqve4UzaAkW71vqkaq8aToUd1WvEbbw",
  "key12": "24JwXaX4D9BsJtH7aQdsjJRXnNpzgNTyL86DthjKq2dCwwM6iVYmXp5aU1taFhuc79hUCv8pe3rq3L8CioJk6Xtn",
  "key13": "4TZtA6Fh6D6Yb7wbb7UzKPTsKbAixsBFhVLbeCwxSuYo9S4qkSr3XWdapq32ZxG24LKPqtQGqdKDWWXbTkjJzyLb",
  "key14": "259UKpaX8W9XD7MTuZfdxLYk4gSdFuV3v134xvKBiFyh1tzmNHg3mz9j1r95sbX5ojGkjEbvFAxDmtZukA1DfBhw",
  "key15": "2yvePebcoMchYENeZoJZsJBpNt3yj3B4TN8R5Qz9Y5SiSyo8dTnuUiAid8vx6T9bFA7LYjizv3WJZxiDtgU5oXdm",
  "key16": "ynUEj1v2DYYwrGyyBGxUUtr3Yecksh6CBtgycDiFBbAYwKgwzhAXUrmwTYv4bnmXbZUqWLtJQ9e6f4gWY9MLQme",
  "key17": "4modZYxQ2sTD91qbcRX3sk6ou63TMHMFf4CQ9DuxG86ce1PiJ6r3dy4HdUEFf6SarfAW2WUyrHuU4bXRBjezZsu6",
  "key18": "fnJB26mAwQMiJtXJvLUhCi5MNJyDJr1zVWijgT2uiXdociJ63CktwGpsz9btSM5Va5eApJM3c4zWbfnewFKj9kR",
  "key19": "563uZ4T2vF66aoVZwQLcmfAEcgXWmYqmxXZQ2iJhfZYj1W2GMDi1eWo9829woHpxAtGYRrqenqLpVHVXPveRyPjj",
  "key20": "5jKgnAkysRkLMySYgThugpKtGurdYqADn7szAKNyfWDnrVAiGavzxB3qwVerzZC361cgPCCRpRxRoPXd3NQhAg7E",
  "key21": "5GhsRdqg2KCdLSJYYXr88H4i6a5Xfh18FPhRaUoedho9cULz72Dwn1QijBBdNQBoTeMJM6pJWcxF71ZUefHCmXCL",
  "key22": "5MXxYvVSogmhHHa7FcrTW3jskjZ7BVGwVLPC3D2EZrAhnkBDgpTXKsAmDtseaVA4QHduZcgx1ingK91FwrJGou51",
  "key23": "wD84nsv7Fx79ZjyFQENePvNemrEGanwPiCAPyHLjPaRtQDbN8AhmbkzJkpm2skChjC3iZ52XXf5nX9Cbp5zNTzM",
  "key24": "5kA3Mce267tnapCmGGkWMdCih2A351RSUbMmB2SuWiwe7CkTGzH2qFQhqzUhhfP3iE5yBG6TL6FH5XqBFjdsbnag",
  "key25": "4ft3oRo7PDefyZkVkjFCGh2ywf5r1Q1jzmF7pATjqKWnoNBDJGyBXdAvQCQuy9MjE4LbVFrwne5wbwGSNHNYiM66",
  "key26": "63XQEwmXsKtcpMm1QbRJhZoJgpzUdhNxbFk6ynnqHqchFFqkrooEwraWgSDdcdKa14iqyawGPxKBLwB3g2h98AFU",
  "key27": "4zQQYxeGaTDi2Mg7BNobpSxJkWVLZxGDM9v2D7Li232PZnoZPXVCUcAj9b9DbqkkXMg4BPZPVkaoeyqewWp9t8mK",
  "key28": "2kuMcJ3MeF8VjhLGW6sdDNQyZsQAgLx4VmChVEPpucHQvEepPYe23mpEBftC6regLhsgQFHeaMfxjPm3TpgNRFxD",
  "key29": "5z5z66VcfgJHdEn2i9RQjxHyQwhJjVJXFjtbjr1zZXE23BBFVQCo2gAPJ3sxFi4JtLQj3mBjKjJz2MQ9p52QJ5ey",
  "key30": "5KZTFjaMHG6us9i9n15dHMqG3hkpUQ786wGgpxDPCLtmyhwco38RBGk8osL9rFU2vKG4CbFDNoUCU44yiUNTFnWA",
  "key31": "3mg93PF9xzsteW4bWJhLbrvUwAjA34APMMDW3UpnyJeG8BiZeR79PXwJg38Hzfo74jSVUWebZYsr28UpG1etszgJ",
  "key32": "V1Rmh4SMMxrcHVfQGbKtdr3Zkh8eNQtrwiKqTGQK4WBeu93sBjbm4xjBWfYh9E9gRonL1ahcRiLsdra4dPWsHAt",
  "key33": "2Ekzc9TbFX57zwBouFmHKmyJumVKcstx2XF7aDCUQYheLiRUtAjwrGvoPCZLa2AHn2jbmqF9TuZ5NbJSCRGbQd63",
  "key34": "5n6otr8ZTwyPpqGnUgW7JrUz7NZ5v5em2E7jYNFH1J91oSyZoaytdid7r4MvHQiydTgune8USjpeUmTZfcW6tgkK",
  "key35": "U5xpsCLDJkYjCQH5LpX2c28npaWxA5rnvtMNhqkjWjwJPzLYxQRsTiotyoBuZgWRUiKyH4giDTMAjN6zRSA7Ajt",
  "key36": "4SN489mtpyim1EPiQUDcRTXSoTcUvy16ZSW5Qc9eMxQnRJvLWbs3ktR9DxRfUwXLFwEyp8mR44mXhTzAoKvSfNwE"
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
