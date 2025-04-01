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
    "3PnTqMuDg6qtQCW4KM6zHQSEdyP3tv6L1tbcibAyR1u8n6gG5NCpRbGEhQbTY75hv3g68d6rqj5vRkuc5Vpt72uM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35DeP5vYtXKHfLaqswFocBHc9c1fD8gh4ECVDK52Lk12UwaLXDrVsqPxMiaejU3dmq2WeFUWKZNgGAcnUnCDZGCm",
  "key1": "4GpPWTAZJM1fPbzZnztDtTSfdZmeHuZw5fhhQNeNJm6s4vd4rmfxbpKjsAQe9FxsJEPZBastdUn5auEQ8Bv2ooyy",
  "key2": "2RLHskBujeRmhX7dshY9PFW9VfNLTcXVSK4DkSxQPkoJGD6MVj2ssN9dDEr2TEiN9RRgo1tzZRi8fsRjrZcLfphH",
  "key3": "3WTjfY9u3KfD74FPN23k5BhBsxcbG3kUbDCoGPRnMJLj6aH8T6sfA7piMHe7YAk1igjdqYn11gu6cj3ppyAtaK9E",
  "key4": "4qVUx9VV3bzzpy6Lzi5yfBkCAqh84wGWr6HYQyAVK78XsHWeH76zGDTFv4xj4fEjfKgytYRFhFEe9v6hdDcsvx49",
  "key5": "3Y8hH2LkdKvVuXXjaY3hiBCgy7sQwb6ysidMGK4EHPUDAbZXPWXpSDUXgSZKBrACw6pBCqnGxcDxeDoQXfdFjjvr",
  "key6": "5QQmPCsxyMuBTrBBupXNpqa4ec2MVivMfDGWLkqtJLxcT97Atp5TjyoBJbDrLXm5sMdc1W1ZqgaV8D8dYncFmgZF",
  "key7": "2FFgbFaPt55bm9iMg6ha7WesA9fPvyQSs6QE27TxCakkzXSU3BdqsucudW43VK4WUjsTvt72EncDRNzTa2LjrgF6",
  "key8": "4PgRMYFn9fmNxeaCoA7DNWmumupirQoTVg1UFVWnt6R8JMKz1sCuujF4ny5oQa1AeapzH56XGhYzS4GNLUVsDsfB",
  "key9": "4r17TXpQ7B7Zn6mTyEzsWtKwzGibATaZW8fPng2ererZQdaexSq85G19AQcrUxyZ1rMDYDnVoLSLEJzsTkYgQMeF",
  "key10": "4pYqEpHC15R9X6UumCyS6EkzL8R54mA2VarZyPJNbCGb1rVYJ3jbnJKpGpu9GUV4MGHedQ84UXb7SrwZdy2nbt7J",
  "key11": "2PALUFqMRBPYJo7Cfkd8HJ7ZQpCpfnEC3HLg6yGb9jVh1L4BhGuVRC2pAoAkoE79DkunKES5bXBnp9thFKd9t5Ss",
  "key12": "3mZKaxzBP3YtG8axMuaiPTicWJr9Zc1AyAYsgHZaxJKSHFYeDZnAV4ERvGdF19rKoAmwfpBznhncagELFPks8hYL",
  "key13": "JkD8mYJZP3Gvupcn3hN4oUPCntWgZxXQV17U9FVR7a1MLZQG3xmVegrceKrnj7Dm14rJT9xVwQbu2AAkj6sUDBe",
  "key14": "3XR5k3Z1NVMkEoWvrbWEY4ye139F2CvJohBSCqVpfPqQSTAeX96DhaHYYWoVseLsaGeRChHiSLqo86wNNuVDNquk",
  "key15": "4NAZbYYUHtZrVNEaPvGUKE2h2Aw6APU88MwEdjHHHjvEd67bVb4JfXfxGwQKpjxvC9zga5Fy5AoFUB8X9715aGs7",
  "key16": "41P91tF3zpSPGPQu1E82mdw8ukfojiphBqDx3UjCtHCrW6WURKd6ZtApWK2z4AsZR8HXPdgKNUnUVAS1C3iuKVQC",
  "key17": "3BD2nxg4kuDe3GWrxSV2p5xLs6NuXbuTEMY1wPae49XNH7ApKEkyqyoNq9qMJtp2UA5q9fEfrneUSRTxhjyJpuYM",
  "key18": "2R6KL8efxCEnnd4xXDjr57LbDPL8d66VeJadzFYosVSF17LEP4zuRSYQpa2eoVbxaxPRSjR8q5jPdczVpJWGBD3W",
  "key19": "2ASLKXd8sF8U2DnM73LmLhdF7aauUE326Pu2MntAwrDfbeSDrim3EbvCuj3JC3uJgZ9ykQ8amWg9AzB2X4tpBTjx",
  "key20": "4QgDJyU2sFu2QiLj6svxB6Qkws4NjNdbhoaN8Rsd6fC8gQpCpiKzWqPmVvYdWsLd29UvugZTFmpmUwyxaDXqpQoP",
  "key21": "45j1hCqdGa2pPqYmR12d3WMAKUHfG246pBZ7Ycg5p9qjzPG8288618VsfN5if2symYVRFwBFfz7yGeeJrUEdnbNv",
  "key22": "4uprjFacPfqvCpC9oc4VVBN5F3zNWUzRoR6SDGsvHZM6uQLyrSrGSwDNPxjmXoQS4NEZsWXjZTmb6d5TUz88P1om",
  "key23": "2HMT1rh1P6hPDwmL4DEggqUNfjGbTG26fDSqxM1icpExBq48fJ3GFis7C9BZxTF1C4PsQECAQ584eZxgeGuEVHCn",
  "key24": "XJ6PoJ4iQHJqcFGErKg4mVu1iaMm54rRZKyrB2nhio6EdHLxq2KRcDn5btE7uLg1pD8BP2vSRaTLZ7WbJ25nN98",
  "key25": "3kKVQomQjswBz52i3zfpV3Lh64zVtvmYReFjuuDByK2QxYAkzAzM9KxbeFt94DEdcbvm3aCVph2pmeQ448URnU15",
  "key26": "4qWDZrpXw599gNi6GzkftbzfcHNzh5833TCdzZqiYxBnsQbZTjiHqG5xE255fB9Rq8PGxgsRMdNmub1CkJF6isVw",
  "key27": "uYygMYksRSHewxdjoRuckZ7dZGaJGf5KqEAhpKSdYp15PiE19TreDZ8C5cayVyTjR96XbXHnH8ZvRxF86wF2wxX",
  "key28": "2yd1Saf8TevNFQRqWuKvHZ5i9yH7yATFF5xhu8ohNqppYwC7PzKvKaUmQQWFEiYQQYX2zqszmbUMuveyXQLch9oh",
  "key29": "4gzycDAFUwhVHgaf972A6XGa6wA4FzuCDvhYEyRGfkqkyewgkdB39sCCHqc9ntwLBKLuRJpevcp2UKVEMw3y2LoC",
  "key30": "5jD1mUUxAC93fQPpjNPzyBzR4BSkco95Cf3nALowWgE7ySnST2kb7nNjFaYP3c8CPwDo598fhw6Aj1f6rQbH8wLc",
  "key31": "52rT5AFw9oPThJrngabg3c8mHh8SBiZmctQoxbxtbkySeYJsuJccWjBHZviuHi1rumLWegGrgqunLmtBKyFCJ1GQ",
  "key32": "5eFHEfzdV5VpRWL41xGU15ZbFWCQFghEPJFuLKbytzJqXya5GscaMYkW3XhaHLY6qhZ94xAUtcvW3RyB573vQrjc",
  "key33": "5p6oAjfTbs9N9MrYiUUBApCuR136dPsDpi7dXw2j5L1VSief2aaiHWKc71EJkTXgLCzogPeAGecAU6Zvb8mFR7Nu",
  "key34": "2XYU9bkTpWfKAbZj1DEUWUuVJ93K7L5C73JntURwXvfUp3qf5hfw65oF5Gq9ASF9CrDVug2EwbAe1mF9fZm8pMBe",
  "key35": "35KkJ5gUvrRMUzZLav5a4T3kD8Fy6VQTobTmuqFL4AbApt2Pd61mvKdYP49VduqxUbwfARwRJjuiFVrtUeAH8bRV",
  "key36": "35ziEHmu6U6x8uYAWCL2dMHC2qeLgCA8ktPF9Q2X2dXvg3PeAt7FxUMaj7b8ZhKyAtkmARHzsCHMzqwmS9nMNNMD",
  "key37": "4q3sjpBFDaob9eoxH6JXMoi5d7gZ89ggCkxk3zdt7fiwibaKtqCXeSEjMMjA4jUWyzTYj3QrNMU6AdUpg94yaRwc",
  "key38": "Pzt96noGe7VeHLB7vYwLuEb8kH47sZvpntG2phKuPkhEaMBb9p2PBa8H5nkChmjB58vCg6t4HXnWHK55pRn1cv6",
  "key39": "27qJvdt1ESbGJdX833SEFLkyisxfFwvfr6BgBaZiMPqTtaqV1xPJoQeLUnW3hi148W5pbYKLS72yyd6SLosEGvYw",
  "key40": "43ZNxTfgbjN6WD8rFnJNb4gNvHiMqbhkMDwTvc4U4EvpufggPQ9nDsLuxU1bkEv3jg1RvtGKZKLAr9NcWijYuv1A"
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
