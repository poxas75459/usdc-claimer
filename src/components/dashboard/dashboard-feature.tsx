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
    "nPVowwFtLeknvn6cFHat3EymuRxPa9s6xGvmTbN5hiV8tMLcn1qETbc18LQ2nJXQ6to8N9djSeg9MrSUjNNajsZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53BTiN5Nqoc4e5KCgHPJRhCkpDD4FYAMq9GWFf4sss4L4f6hgToDNQc1XjT8MB84HqnGNdRnsAmC8c2uHLdoBGD2",
  "key1": "5mKJqoprxogfzx3zaJx3KSP7yeBZ9absvi8otetrwyrzMwyDBLxD5WK5SSuryozFjhGofxhcKEmGkCptGFVWYJs4",
  "key2": "4gMJg8gXQBXHz1xkE95CkbQLnh9eD5EDN6Q7sRtDAxieNBAoiipQ5DABQ1r2WQqSoKguyXfzw6YcJgNpA5ZyZuXk",
  "key3": "2MSb7tVJ8Cpesd6JXPiHLByDA8Hqw2SqwmhENs6NMtzAm37kg8VMG3rUgMweZHU3U9oewqUKw9vqwMWe5aBKzDBT",
  "key4": "23nsvjAUJpbdG9r1eisMNV5n77tgFWn6M1QjDxeTKo955s7Mppk7WQwCu2fNq25NtHagNtEhn9mMQasYDZKRfihf",
  "key5": "5HnVwDqtRRcniqFBa7pPBqRVFSvxP7NxFZqtbcVVv6b4TYTbobonpWbzr1SUmQQxWkmziB1PizmDZgRJH8mo9XPC",
  "key6": "439rCDdP7grERfd5XuwBfgnPcqQEyP8BAGYqdaePTs17H8PhSTQqftduCdZ8mgjsyt5cgStLGd8oWZGveSANQWgG",
  "key7": "59T1t92Jqf6aEhnzmXLu4mduGShgffQUAPzqA2CbvXznr49SBPM4JHELdcaYjYMTMdDyxFu4CUw47PWNQfm8HF69",
  "key8": "3QnvjextjTFg2DhoH8u4eiQUNGQ2zkvSqupeGmBp1w5dYFNJS9tHPTbhS1exb3FmAE56E4zAeDnahmBjPonLcxTc",
  "key9": "PPmEEkRYKGC67hCEbAQtjaJMhL65cd1fUJvJLUpEa4d2Ay8g4LgKrcZDxyt5AE5VXzubuT4kxAuktMC7DoATHU7",
  "key10": "5L4RGYvCCt1DzdJAoAqPgLZJUMfi7hLh4brFqdp4TrciTJAC6yLDZvKri5swofQC5vRD6AFV8yohtch7zqrLNoGE",
  "key11": "4RQ182jtgZCcKovJYCqJ71KLqXQwGxcxPC45cix3sxxFAb7R82wsssBKH3E28AQehfZXqTubx1CS3GCp59HXCXgM",
  "key12": "2osw7PYD7S6LhaFk4hGSYreDgyzBb8CAUVWpKZYoyS4UUXwaQjD2eooLQEVby2hapaVtRzdvUbWH4hu5sttSgioB",
  "key13": "tNP247U1PF2dKMQXkkDfL5X6ivZEtW3tUMepRcJw6Bh4YFHuWuH4TCYpKCYBshPAnPdivfqgHMENYz1fvbZ6J8z",
  "key14": "2GczXSULfbJYwr5Vdegx2iLhgc1ZBuPRMnQQD3efJ6X2MgeoQWxH4FUWPNxesmL7eSaciiTaRtZo7P3vCz5akDPW",
  "key15": "5cQrg3cJ1zAK3XgeDJLDTjg2PWsHT8x3CfUHk7gzE6oHQTEbDoTzCoERj9M8sD7BFwSCZFWYTn6KEHJrpdiYcige",
  "key16": "3id7L2SWyfabGztFanq62jP1A5wMTGzLhvKhUT5nAE1Jfe9hjXgsjNjZMANEetdDQ87FDLczNetbNULmv5H6qcbS",
  "key17": "4x5oYWXa7pz2LbvfPGBxscEFj6qn4KR9XgZjRVc3JJqPQr843K7gZg9PnFzeKFLTPrLnHihVxyg2tBUmx7cDVHjk",
  "key18": "6Evax5k1Rbizh5qugy3HGoj3ZXYbxjAr3vb1sC2cMiiXiQYEgEd83HrVg6HSe59bXNUu5Vm7B77AkgZb1h79G21",
  "key19": "5s1qGsTQqKakCSqjkL4djvmvf7dLprcb2M9X9zGHS5QNLLVcdDLPkwK5e5vHwji63ttMoosq9H75QJ1CYn69dJ5A",
  "key20": "24LYEanzXQhoF5dtdPLWLojw2xAbt57iwxCDtWHs8bj7zwhE3PbVEJpTMJcHPGGcHLaigtGr6q9VKPTUVWxe6tMV",
  "key21": "cTwcj5P7SRoTZmCRQvrufn66sriDhNMPHgPNWtU1DgnfU7M2Wg8bfc74bKpsGYyuAZpjNCLD4NFbYmEAoAqyK8j",
  "key22": "2uyRQAAvVitmMbmpLAYWLNHMHF7bupDBEAaRpeeRvCDituNwZYxEn6vufZz2b14rGD3UNDvuuQvbLMHuGQ4VXwij",
  "key23": "4kz1NFdFKzbK7zAe9CdQE5yywdT7nQyq5uRh4b7mKtKp6oinjcmfnxGr815bgUgxNhpJTLrNjjLDy5UZzUrWDRPn",
  "key24": "4QxjbepSyZLdvgzr5S2U9zVic67ViMpdsaJHpyQKiXQsBpH8Higx6FgGRRE3BKq3jiKP1H2gTQ6yshZBbZxnutTb",
  "key25": "3hGpYN6BVEiyWtPZh2afgMXPwDQorZXr2SqsCPMzJiKD9K2RzpyNj81mf4Efniz2jD1DUNth41Fp6frfY1W6zR1f",
  "key26": "dxvmYg3HipqEcxKugj27HZPNMfkQ2DM3jhGUMnE1FjRgmupQc8L6yBy1RDFcibp3yh3TAsrWybNnBxQJe56x8Er",
  "key27": "3mbisQvmYUfitDCAu7zcv3GjQumfgjovzvzQjhAVvSivEDReoVof6FccGJutuaaxtvuiVjRUeUizZMTFbj28NGMt",
  "key28": "5zPzzAVFAmS87w5mbH4wy6eKEZtmCL918sZRabue6g9TyifuxH5bCt7TFCs8zPc7Yv3RyL2TaQUhm9WhsZSXGWu8",
  "key29": "RidHxFPwiMKUAWqZ2Cz6iZ8SLiQqNHzSvuNbheCSowNjZvugoEVDbRDCosqA6biJeJdWLMhVToBBAKYZSopy53J",
  "key30": "5BjgEKFkRkfb6eLvQgRKHrYDbwLERKo1xGvQ4kogLmvH5Ut3xCPrLUzv56ypdcKYbPbNgfgKQUmWkPyvfran79Qc",
  "key31": "3ftPfyVGZCYWAEvCLGjDhcb3Qs83VPBFFCDe8eBT9s7PHBP4mpCTTEyr5Z4C5EeXoQBtQbFCTaDokzUnDaeLWe6E",
  "key32": "4uzU4HusyiHABNMA1XpXrNP2wrEFSBKZKRyicbxUCezWY7qZ5Qi7qE8CMr3F5CYFmaWkx1MkWRYukQsEvMvDGvPx",
  "key33": "23Ck2MffQotogUiVJ9K44dqMpiVc2NGTQZvh5cjU4h4o3L8iF4CPZoxQ9Rb4Vo3qwBPuGuNDqpL5XADjxFXiaF83",
  "key34": "4DT8kuojR81xdQe9xba2QpiZNyed6WCU4RpA889D2wbefe26RCZf6KnkA7Eux8GrcMNUvvrgWnhzVVH2BC9twj5H",
  "key35": "63LtwGPcoqFX6VEv8NDAWheAEsAPRgJ83NPKiBidmDWU91Sd8bR2taMpphUXv4TQn3vzZ4C2fSSDshgNfvuGyi8R",
  "key36": "66TvBdDCYkLTXBLnN24VEScDop4nV1FRXPxcJLzU2uEHLNLDVk9ihY5GwuQAxAz8LnnDWEnePM57DTPtoTbnx9BF",
  "key37": "31bSiDkYZMyDQwfYtqp5KVAG54rhF3LnYspr2BhtDh9WM7E5k8wxVAKGtSWg9sEZokHzutV6x7KFuXiAkNvaimaa",
  "key38": "4TKxe8MXp2ymHUfNfgGmVse6kpmVYRtmQWf5WyakbkanKC9BSmmz64yx2yxCe4zjJAtuTrGPFnbtbRJnNAffYzqx",
  "key39": "4i8iM2p8rJf2jDiMibQ7LH4iyXtj7QLkJhWoZrVqFFDXQt2q9trqEmKhVj9rTeWNZ5EQTG2x1dxM1zLxkpr43rTx",
  "key40": "27M4SutPspcVHCM691VK6xS5nisoSjEjsADaLKnZjpjp27GqvFiCDek94cZqfFGfkNmjz5KBtgaQkxTa2Yv8t3Xy",
  "key41": "2S7dhLHmGWp7rjFF3P1uYRkMEqkPKKPCMmFErKJ3HvwYDYndzpkPzTvo7NGjipCQXad9GmpMxFmoM9f5kqKXtdZn",
  "key42": "4AEL4AEkCphaucbnACkUaZJhW2q9axa9t3Gic5FTjqCafy7EgtcRAq3ADFAyyyoCCYWfkz2MPg1GmuQwxHZWndFe",
  "key43": "63WFrcSCrn2meimtrRJmG5gczrDUU5DQChkzpHfs4xEQfpkoNGNeQNhuJVLr9mkT6C37C2p33RJ4oBBic1qWvCR9",
  "key44": "5wPp4AuVn6pDdUBB5uCy53C3qECRkCt7eya9pXMyRnxnvGPsojuaspQTp5N1xeDrRaqmw5T6gmqjkJr7rjuM8NJq",
  "key45": "35jBXFEvxrY4s2gqTEZivhioGxHmzbu4xuJ3mdv9uaB1GaHdT1SiYeVVxLpCCEyqpNQsQH5uKGX7u1DRKFQbiLSE",
  "key46": "w9EXaoQQYvqCY899ScPHQHYLsMfRX2Q1fkShiyKTJm4iiKxfTWCKc8MPeHeB4B3pTfMEg6iE4GHi1vf4TdY2QrP",
  "key47": "5rtSESyJ6uKm5xzyD88g2GyhvZbcMUtsesdKPS4v2FhHyrs8wjShAYtAnNkMS9RF38yW8UCQgM2NATymyVvPRNrj",
  "key48": "2BDfNujdq9C6Em4S1h7dsToh1rJSAxsJFgEscXt4EZuifa97Xo2dr8QdeL7EA8mMkRwBACd52bf1HnZEUST9duS6",
  "key49": "5AXnmUAxdriEs8ZtPj4qWMTy3yxQbjxqNLBTRQpws1bA1C2oZNi94qRkyiNe9NMRJnEAiYFzmci8hL2PKedYBJpp"
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
