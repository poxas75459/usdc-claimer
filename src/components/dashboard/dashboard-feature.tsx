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
    "5qFugmdGrybYdyTWZtp5T4JiCLDBLJ7tDHRDmKM12h27B3a4os5NQwg9aBwRaAPGKmaQBM1sjdKP1u1b5VXWdwnZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QG7dKhtLPQTQqUNqZ4MW2xZJ2Ffsqq4ojQChVwDQfuXCfZ9QH8UHCUfixgax4y2DVBe9viXWnGT6nECBPSEL2yv",
  "key1": "3iyDbY6jbfDX6ryvk8b3vGQLzV17RmZ8Tw8KaQvQc9ggmu1tNvypAqb5UxRfe9BWWJNSjFj2thByyBLjNkduR1wy",
  "key2": "a1NRUn319CafTqvddgsTuYXpomRx56YTZxCiEiVqVVbSYcf7PDfsjscATZV2DMeJS6C1WwNRgbXJsbF1QbWe8NX",
  "key3": "45PAGDKtazZ5HxbmMUHfuehV5L6wUtoHeoRz93xh3SFdQakHN3qgSbWt4cq9CVCn2BZJFsVBkbsC4Ah8Cyrobb8x",
  "key4": "4dDxE2Xm3QNwGFxC3LmxBQgLKZ26YRY5JnRyRwprJxZwEXf5X9egkEp9qQryHTPqJyrmmiBhQyE1MsdMSjxUQfJW",
  "key5": "3eqZaQC9SSNZwY38FBipqAv9JaUFnqvscsRmTYHBT1GnqTVJ2Hu6pftPJ76UtMJHHVwoDNgBgRmmZ5HXt9nG2Hmu",
  "key6": "3sENEQZ9cDe6MVeiWqhsXsjdY6mnzepsj2wfADH4ThyNUNKLCGdX87s3AY6Apz86PktGEH4Wk8ryLLviyx8XmU7U",
  "key7": "4hSPKbwHxqEsk33gkPVVZp5GSvofUsD9mTqcHVg5166Y9pwgw1FzaPLPxZXNAQ91wevsfg2q1hy2afbJmkkAYTM1",
  "key8": "66qQkN3XkUAQbj482kDnY423yKw2YvDfdcGLdxxH727pzWDzfx9A8Zf26nUmi3seHiUKYaL8NjRmeoKNy4YtnQZ4",
  "key9": "2RybCsLfGCer8szj1b5ehnddZoMzia9ez59HdFVKzVubv1Dejcnh5cjZ9EVL5MGBar2CmYFVxL8XCv8r9xP3hNge",
  "key10": "WBSjppXdxRneysjwZ6Z1kriJjgJ2vqgk6Nz5GBZsb7f895wPrGhfQvZRsURxp18dKYVhEXLNC7DPEpMza9oVcLs",
  "key11": "44rfcHcYZuGYfZadVrntvWzaqrRj4HJbEtwWWUMmpK63rCGYuRQdU4YqXgsfpvpG545HrEtHgieBi5frA3VS6naT",
  "key12": "4jHsrU4cgZfmbaUbbsVRgeNG9LzbMBGp5v9PUevaWL8YH4UbAqDkmJget4odiNy6iseyy3NzZ13GR1XfgXRZ4k11",
  "key13": "5My9sJg6B7K7e5iYgDNYju7XDVXoky1MCkZmfiR47JAhjKmBx4DAEJc7owiGvKsLYrFCCjxnX1U3LXPFLpWhQu1B",
  "key14": "3X3B1uP7kMyvfUQpovnCk9UgXnHVx36zw9GjNPfcVjuYgLrQhMeotHSfZ2qJChpG9ThPt9Bmmdin6dikF5mViSg8",
  "key15": "4D1XMBFhfYMom2jNUPctXa7aqcNRZXuRLeNxYYWGZxDj3JuDb6E8kFcPVMEbusB6NgGApFnMH7yUzN99UNtLWHqC",
  "key16": "4gUXw3yPCgh7cCid9RDkB9piVU9zwEuAF4edahNCEwsoi3tt51WgtCHZR4G8KCuUj3AKkGfKVYYpbP2uUHVwNasE",
  "key17": "fWzZdkm178MSFdGoPLghuaVudzRDntK169CfdwCSpCT4mvAxr3rnDVvAGoX9JDzKvBzGEmhGNqi8BE9GcJMpa61",
  "key18": "2LT3ttutFHrVzyFs4qxJHoap6D8PJSQUg8bxY29SRmFSLpB3agdrMJUizVPXEX1qhTK766sqn44gBtbe4pJEVQ1U",
  "key19": "4oZEF2ueZF1WttTgjDzo7Qa8FYLMsJv4XVBUJ5s3J8zktGQZ4TTQHf8hqAVETEGvQXcXWgodNNwAGhfmUH4G62Bu",
  "key20": "29PzcFktV2cJdA6SWq6z5w5WNEkfGcKAEKct81zu4ZMHqUnprMTjuM8959EgTzhYEJMHjmvp5AkhKpf2VsJrL3fy",
  "key21": "3w4sj7NmxPrw7rZkTeYCQeHKEaqEnbjDG8JrWvcBADLV2f84bXet3e21SmLEgX2DP5kDRfMJi71dg6s1scrsAK4H",
  "key22": "2gBDeqdP6jvdr9Fz8ntJD5yNFCsZjczNWsop2XAG55Dx6zpHfRv9JeWb2xUpzLdkkVC2LbqKSBfPo5XywTJVgW1t",
  "key23": "53zXG8MpCY7NekUdZCrvtkfyfJJef5vdEUVcWek4vC1G4VXjeEA48EJpqRRoDKzwRHWhprLoBia2mU9ZccKoNzs4",
  "key24": "2m9mUKWNLQLjsswKTHkRJWZTHheT5p5eeG32YfBMvsVkRjrj3Zt7dVwsVn9qDy59biR5x4fm6oeway7rPrqXbWjy",
  "key25": "uECfFe1jMAt8qRrzo5vTegjVqYVKgxcabRWMukVrcgVyG7E2ovDVyKvQfr8BzvLw55JXJXyNAyLRUXKTG9CaDmS",
  "key26": "5rinQi3arYQdRuWZ1etxmYBGUcFxC4rCKX9YqcJzTxrMzXEaiDuwcgm3JTRsVwtjWckfd6roEYSmJCsuQAsq5Mph",
  "key27": "2Abx4z8Z5tNubSxBu9qr46BstePpDMHppqVziCVB2e9GRbiEMbcBwc5nEsQG9pB2tpUeUbrPxx6D8L5GNu2eFAY2",
  "key28": "4ia3JzHN1V8SyZsSoNPv8TTeMCZkLA7jBA7DXwKdvpZaBsG3QvEJmfKSDJY7Lc1HFctawHXD4HCSoGfU4Rm4NUX2",
  "key29": "3h3mowKxTkUdbHDRUEx7AmMPCjzBQKRFjyW3s6DYSCVcUjUCMYWC6HLQ2egLivofiaz8o5gMGkJoj9tkZNKsaTmW",
  "key30": "NwCt2zWtqB376nV6kpFAhbfb7AENa8J9bfHirYGcWEY83h94UPd79XvKG3ZvDpzmGDZ7GwXELjBGD4NhHLXU6gW",
  "key31": "2bwA8DejmG2GNv3Ev4wvZsVx4LL3A1A5iieqjJmwYUQkbeQxPaAeEcJQCwHogxfoN9uT77LERC17gfxfTcmGYauN",
  "key32": "2BhDms1FvoPaeBnvaMznjZZJ2KRgrkoeUHZe5wXcBL5zHw6QdZ3WkxWE6jvkrtWrovDQDPZP6i6qNrairaFSkszn",
  "key33": "2y9pdCTke52jhPbb4uAWy2bKAGzDDJoSEGxVwPVyFpGvSevHSL4bLBK7MiVnbwmxQBgifdvAcmKTrkpzv46WCiBw",
  "key34": "3uPdDkLnXrSVoXY1aTxgtAGaHuuFFfdMAeM5UtzJG567reYn2EC5VbCWg6H2Jo8DeDpTPwgvPEbhsoXhdSmFLzck",
  "key35": "5oU8jHq58ydqtuYug8xodkwbxWgLn3worCNSwcevoXzYZKEDU5PqUw16Wq9Lh1DDyWvqMZEwpjMAXxY9vDcKfPwe",
  "key36": "2NXEKQCVd3ssWeQTDV92CCa4DrMdT3PJQLAm4FVnpRuNLS8a9TNQYEBQjTovUjANSqttBnu3agXN8HfLXVUBizcD"
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
