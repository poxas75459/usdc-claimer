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
    "2vKd4Ghpgdm4fFef3WXcq4r2PAyGXLqGMECFh1kAoZtwFGWQfLcitk4nFetevucn6W7a5MRSaMkUgFvDJ9MJaQTm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qNq7RCQiUHDzzfkR8NG8DFS52LPfpxVEK491FaGjhzWhrng3RpTQBgSnejp8UrKdZMeeUxMbQnB575JVLa7d1wh",
  "key1": "62e9NE9jBX54Jwmh68i5q4RSEh5GFyNe7ndcFc5NoUyLg2g7g8Sp2CSXKvYybxpjvhdqWXzQrYrsTSyccJtyoLLm",
  "key2": "3FwMdvdQ9QvFrZDjm9EBEh7tYm32BpBdFdvf4VmBN95XKDT1LCJbMHs6bSoQs1ohmu9DLX7UFojUgtEbr6PGuGTL",
  "key3": "C1AES8U6n78VZCiFmfUUwvgyjwEMNJ1UATxFry48kP4bA3UDSgcYFztEo5eqU9b1BjPsw96zCJQ829sWFhUZsZE",
  "key4": "4TJkrjh4WAkPDqeEuDe34aL8963B3DhbMYHSian9yrhSwzwJ4GBPobSR5yjGBJy2QtsstP4vaoFZD98W7p66E4U8",
  "key5": "66gWdjvizH1ewV5J96cZHfvQV7xtc6i4fJcXMHWwsXmcVpHh1VQQPptrwsrGBUmnZctdMvN9pdBcr627HeFgj6PY",
  "key6": "4JbiE6YqoUd9MTaBWx9nbVVegsa7byzN2X91uxL12FpHMMMnbCYpRq25uKb6pjCCMYpgCJsCvttBBm8x8jJtuJZ4",
  "key7": "2Y5kkmbnThaVs14DwbnsVyBZwzJGTiFHWH9yiZjaTX3ue5kstNBBTLB18RX2pHUACD5jK5LngANzgadENKt5P9Zb",
  "key8": "33KETRDE8oc5QJpNGiwSnyhMcvabKWzwvBmGLLC5UT7oasnhdT1qTH5382eMYHENajdAwgWg5HAHW1jXxxNQDBpd",
  "key9": "2eT4Y4pLwT7jtiPwko267bNNx7F7NEoaQvhwRzkYWDrXpNPeWCjZYEmSMjrgreJPs3mhC1BHoR3ep3NFR7Qzzgf1",
  "key10": "2xwd5P4EK5zcFva5PBcqP1qtsrqy3sM4tzURSnB4jkCtTD9r8ox8ux1sfWGBarYmANV2qqSJHZB9bnZGpPVMNuKe",
  "key11": "3wpCgr1dF7dNgoUUi5xn3BydpizL5ufkVSmc5bPkag9U1wDUdk3fWzfmVPHELkswF7F7u3F4YGMVaNGbxi7GeVdf",
  "key12": "3jV2U3gw7j39Viz4qp6jVU3iRssZNiWVT1LWnFAopRG6PXay52yeeqEHvB7ZKyTJyNapyovEfNwT5XCgFPBxwsY",
  "key13": "2rwQSChxG9XdLYHn5DkpZstye9iHU6QLrBxn3um4463ukb9bU97Q5baAY1AvrwcXsX1N1tm5aC7AaSyMAgW4aSCe",
  "key14": "2ryBENRWYPjd13ueEbJFPao2T9HrAFbimECm7s2nUh9u8K8oU6w4ypgfbADX6kRoopUxbC5vr2dZmZZ9vHBweoRS",
  "key15": "2RVeZjmBAuNTMuqBU64cqh89yGqT11iSb82LLtCBTUj4JifX9e2E6AijRVgAaLLhc6YXPCK2v93XSBSGFhKZW4CT",
  "key16": "9cPrDYRcoiEzayNqZu1P1PNJBFdBf5JGYWQ6zG9rptbt1zLvERUZoF27p4Zdp2cN2cznkytQAxsnH8Kjqk5DSQE",
  "key17": "4rLQj8YZ1cSHjTMucg3wwNcvBXLmr3dAjjZaazEtGsMRpp7iPJaEdK3Lsw8P6uoh7y44acMB8yf8SEDCuj7ZfueY",
  "key18": "3DLziALWWy9FWqZE4KFMvVNwcQQEy9kDDx9riM1bdmoBmaRH8BfcnFTc3Y6PUEnN974xCuHViCKJKPJSum7XMTYo",
  "key19": "2KdFPazic16wAkYvJ3EjCh46cSbaZSZTwZXFzU4rAQuQBaMHHuG93R5nzFLmJsV5tbMXETo9k8eGnctiYKgDoRdn",
  "key20": "3UAp4Hh8KXWL8N78FXp6ar1p9n6FpM7YeGXzaA2Ui2AwvyZneqtsgASNgyLvYR77uFrtEWjpyZ97mUoeZ28wcDn2",
  "key21": "2VrkHw4Lv8w6pM38DpiBXV7HcxfFTJcxKsn9GM8NMjCvdaa1haT2qKArraxnrztrD3jZM8d1QgesSGwpL5nt4HE9",
  "key22": "4ChWEWhiZZdg28xp6sdzLsbaeDuqSFRaVT8HWyYkDnZEUk18jswwT1Qjuh16fqpgBrd6hBBeYGo97wBGWcjFPRBY",
  "key23": "2ph8pJnkjbJTpTeaiwS4p8XtH6LwCrFbz7QXh3kyucRg8gEbDJ6MLKya136oyUWvAohrayghXvWwLDDkF8omFtLX",
  "key24": "s4X5WSUwYqdEGRSr2i2S8vamiQiR9E6HFiwneFy19R5UW8UtmA2nV8ok9Psyy7ukjvKwMKCppKaWVhStuzC3LrW",
  "key25": "5mxrzCzx27kGzDgvEj639WwYrkt181LZLdoEju4UjcEkR6r6n4TFNVUtZGPQFhyHyaSRHBN97zQygqBDmW2uYCoP",
  "key26": "2ip5BAe3phzT6ZDkhKRdaYrLJdMjKzMs7yXasLQ2NwdrmbvAcDFF9QAUv4WY2fagueK1qsVd836jjzGATYaPvwgm",
  "key27": "MbzrUMst4VuxNNuVJJL8FCrRJP9abY44sKgjZJbBrgi8eqsV6rvGeer4wfgN9Kzcg1KFRvaavTzKpQv2jEQr9Zk",
  "key28": "2jVRGwAgaapi8wUE2SK1LBtR2u9fpP1SH229urpTszw1Rgdo6JYPeeK6M1za42FagYrzyb3N6UF3kZHBjzEnPT7P",
  "key29": "4UKxegKFjR1MMfW9tTxxoQh8K3UKvKZJefZUm7gQAsged5oaxJSxjKm1GfpNEMDy85XczMsh1TK7kKR7ix9g7Lp3",
  "key30": "65zJtHimtXcoLGEo1VGTFL7GBQkaeHx1jCcm1CRuPrPAVsMhTKgRj9cfrAeUcnoaKRKVkbkkLFE6d11o5DWN9tFG",
  "key31": "BvGDUBKC7D3jQ4siKcYg7EmzR5ixRJEA5AhXHAwWY8WGuaiDDWnoSYS41tn7gYCSZrnVyKG6a9DdTedvGDxL49J"
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
