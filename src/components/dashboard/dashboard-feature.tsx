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
    "4GrqNbPLyaAhT2n7QR1SPNt5gY3HGZjdHRhknL45sjwkE59etEdWa2cSE9GUHTpHseESob8sqaeH84o88R5djeBX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TipyyrJXXmHAwyWzdseUXs7uSg5FEgn2b6SpVwQq1QaDSygdKLyXJmvUiPPpr3w5unzhZ4YqwnEP6XBeo5DUHqK",
  "key1": "2YV1WZvvFawNzWafK9gKauCzv1T4ZdLxif83yN2eS2znAqb3aTixqYwRFKHfmvjyG2TvKXrCCjRPAvAbEST3qtXq",
  "key2": "3rLYHFhn3MCEETroMnwwQTFgtaEXdmGFc8ZB3vPQ2KQCRMAJQRKPK7ecJyYmGAEcgKpDCDdQtsLt2CDixYEbve5v",
  "key3": "2a9majq6TQJcJKqYoMpQyAQ5NFvfMRQYPW73C5VYjwg9tfpjYY4skKDDD2EkE3VEoFqYWedC3LDbgEQXyAKyecty",
  "key4": "28Yiu35tq2Hv9wETYKPvXuimiJhPsJUG3Y8zVBATBtFkq3WTwiXnG8Sfw1bKVCVKTsMuiNkK6NYkDbuJRqoDxAnj",
  "key5": "6a9CPqYLrXzTNmdHG1DSXQ5yu1spnr23bWgkjxdXttF4Gkx3ZMTw9Uz78xybmCcVAS9n77ALcMproqaTJ8PaPr9",
  "key6": "5Efh6QXTddGFWdYgsr6D3oC2optnwERzPyER7X7453UNnt22dkkq557wuypbPCdvqEBTMo1SdBjhSvavQSrD1iL1",
  "key7": "4pXSqAHWEc5qezK8SsWu7xyhsM3vTe9EAoPwrvSqkeCXRSuU3uUtZvQz5HBSY3fVZ7SV4pBEHrCwtJ5B6AoW9F5m",
  "key8": "5tWh8A6e4hadJN8zGjBejcWwUhNNEX55hnxLF3yaNWjXStUNvncWMNq6sJSpyHiYDeyVcdBjgW94MhnvPxUwYYhB",
  "key9": "65bGwdRyqdgB1J12PpZNPgEE3G9w32JQXxbRBxrjGYdDxRXt4mHf93GehnYG4Dm1Zf1cyTbxkW7ud1KJAmiysKfC",
  "key10": "3RrGepxQVA9vSeH9CbqHiy4eQkAqGSWMBnb8K1CuycqP3TnmvzFx2Hp3pQxBUTqeDs9LswvhnteCNPQRgLV3n6vJ",
  "key11": "N8HLvqhDtimtb8kShqGydxJoZtmaYqa8wAoaw4PZ9aNce6WvR2sGELLFmgto22fbJjuuSSyv3fTSPZwKVuFFrVB",
  "key12": "2n5ka8DyMJjVuPSQs32HN5s9avrvb2gwRK14bKQDtbha64vxq298t17MP2rq6wpx9b8KWqED4CQdyksAXu3Xo5w1",
  "key13": "4i1B3nuzPWjQn9XNi9Q3q5Tno4CU1VhsecNXjXrc99eyfE2J9AfH8Wswe8FM44zHxvEzd51fMgHyX6mq3yW7BouM",
  "key14": "61WmLRuhR1B7bJGXe4A9fPg5rZGhvjp4j3uVDGLDDQSBzhq9ksUcXvSwVYSNoWjUn51pkwYoNVR79Cmp9vLYYo82",
  "key15": "qyGjVyD2oHW6VaT8fWM1n5Hy5Ajj1d5rhSGnKCZyafgbsdQmy8BaCjdneSYDioZuxS7JwjoRB947HcMRnFVK1Gc",
  "key16": "R5gKfqSp13oZyiREDwU1qZaXudB6rvBbTbeP7kGMzH87PnY1ZjyBAbp3P6Gw5Ngbz51V1NpzCk4qgqGygJorie5",
  "key17": "4MSncxadGqRqc9j4wXFUHMaNUGGikM17poHEbaNohTLC1TM1afPyXLTodAnKPmReX9SRmYv6iCHX8p2cknVNx6jc",
  "key18": "2ALEQsiq2w5LU899ZZw8KGBGcgFCXb6usCzkmWhzVADm98yeaH3W6XC19eDKCxLqW75mNG1m9gnAQKen2kZgjTk5",
  "key19": "5fQVc1RQKeNjErobexJs2j81RkRGg9qhRoN9kpjfPaVTJuNzM7Qh778KwuHs4Wn9kW3kyJFW1PJCS5kQr3b2cES2",
  "key20": "5LNhBtgUmjTZ6tojb48sKqozn3vAk1Z4GFtiPfzEb8Lc5PJY4StCh1jpjHgwGL2AFAXLqwhCRcWZqnxapAgbUCMg",
  "key21": "3dGWKD8nwAPTNfYLuFwFFuquwNRebAtpjJ9d2SEv6tFxnN1Z9d6G73k5KXrSg8jikfXDVaXw2Uy6vSHALN2AuuE",
  "key22": "2JrsxC6rRCMndtfqxHZpzYPHFjKnmkdGCDzpS4Vce4kMjMeugtbuHqqreGWvAt3m3XntKoZqmABQGVfZfFN3idT1",
  "key23": "Jzz7H81hqhyRvfZbzBLJFHm5bCJHdHyh7bWd2hcbLh66j64e3j71AqPTDwhfkouGgcX9pcsQQY74SmSppya5L71",
  "key24": "5D6Ma7Dv9rozMeip6rGeo5kogdrQdqEJRW52QESLPWdCR9rkJKPMfVVnxZcuQqHKLCExCFLZQzSmGgBaXc5VAUcb",
  "key25": "5XtrjdUbztbipCcg4wJS9RBAEjZNoa2CQvmzKquUx2ygTE4V72F4Kptickben5yPayjdS89bjP7FN8qT5m2Rq7GU",
  "key26": "5sHat5iYWHBk2iX1t4zkw8FkjQ73dnMbGtvEJin8urZtW4AzmrgBpQ85hUnTdWCKx957pnwq5C9MvQenMv2Ek22G",
  "key27": "3jWUBhEfGF2iDrkTcRBwsiZSv5gmee2LVZSYiar8wqg44Xf925zEyL9YTAdhcFijS6iXpf4Lm2TsMdeTyqjyXgNJ",
  "key28": "3jSbXhEfmgbxD55aiYCxqLByXHCz8TxmvP82ciNjqN2bbiyBkmVJk4zUx2b9zsDpb3Fu7aG38uHSkXzua4F4EcNF",
  "key29": "42pyuL1YSw2gY7H1cdGbC2TeS3z2g9CUduxZXkVAp13M5CPgmMJmhwgrbDxPHeoobRGRYvr49YYMp8Vc1mxh5w8D",
  "key30": "4PDRN62BDrCKHNjduo3nkAxAbH6XHoeEsBytpWugXMJUgmvZTXKQr1i5Gp6MLQUQ3pepaWVDQSpxtw2GER6VKDat",
  "key31": "2MCciGzyaYekLo9K1Bf457s2JGFfSq5QdghRdyS2kT9pZhCjSLAXZdwhZBGVMu3RSHDdUx7vMM8tce3oUfJdFcrm",
  "key32": "3Zw2NDo4Ts2xfzriS42S5SG5RF9jYntyqn7pypcuEociZ1thYZXmXAbMriH3TCeBxVDGYfcJaXnufMpT2n6neekv",
  "key33": "VehELufoomtTFdaFSv1TsjQEcdqZVbbBi4TKLebWKzm5hWMEFncUbuVPyq2WHPEYur2E5nEojzvn7vvqUdusv82",
  "key34": "8ARUjk3ADmHNpZSJmhgq5SHe7a2mNJgq1Rj6sCQhaxEqWmnN6HXD8A6CRNCsuNYoNGCXmFmJw2JsEWw1ZZwd6pK",
  "key35": "SJ3NF74CXMHjmxj1T28MLWVRBZKNgztgxgq5LbqpsrqdS6m3TtNqfLEqEmgkBH85a6AAadYxP2MvtcR92L9XWmG"
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
