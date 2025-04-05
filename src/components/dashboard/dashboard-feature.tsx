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
    "2ACz6WP6QUHVaNmb5T5vBzakJsxLZcnaFP1iMhTqVUa8cd4wkcsRRCJVfHE42YM6GVixd92DCDB1SVFkUuQcw5Cv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FoxVi8mf7sfDeeqhZwK4bnHaBPV5DeUYMQp8m536JcWmrM1K7PD1LLezUTWqXxEnrqTXzn33NF9H43j4o591XVp",
  "key1": "5NnxtzzocYQxSoy2QoAihxvbgm8sMD5TTS9FPWMY4SdM6M6dF1Megi65VKqLuvZ8ZTVwyvg5w3Lx8XrXM5NoiTep",
  "key2": "4F81YHLAXkCNorifyFG1LJ5HG1Vb8fsxMJ2w11e2jc7jkHSRc6qXTccYoAzMiogH9nBNuTWX4MKxeCDLznKygGMG",
  "key3": "5u2EjVFnpnxuCURAq2rz1e7eqHMTZf21FiqJXAspgTyHUWpE7FjwpwnrJNYNJLPUuNz72PStoYgQfHYBxrd1ntYY",
  "key4": "4u4mQMDR7Du3hQyghWuZtB2woStbtZxBceHuY2QEHV3HqVKoBQssPqJUvVvRhpRxMuXpUmY8DcPsRpxTDLp7sXf8",
  "key5": "3KRaDKtURbaooCcMNPoRuziFfahRhYxt5RR3xxqYbm5BDu7D8RcmaF7td4iJNqEPwjq3rJirpDkayZ882xnyMWsM",
  "key6": "3ffn5ik3oAmttzmQEqLBrJLiSK9dyJCgqxt5EzZdgWChE4AizuUSXZKrz7mQ8AByqmkXFFCZgra8JoMXv8pxDf8Y",
  "key7": "4zPYh9MXQHKqVZYVcUYfb2qL32u3PGzQvEuuBjP9xy5cvT3iks7jwjwn14LLPcCpzJde8GmVrJSJLVDYbCu1xic4",
  "key8": "66Uuk5ztXds7mBmJEHVgfPFns12DYhSvt8Zxj1VCZfPvwnqhn3eCqLK1RdUC61cpkXmKg7a27fdPEQ6T29WhqCqj",
  "key9": "4NfoFhS284LV1XHGiBC6SkD4Fqi1CZq7qBGNGHkGAEbfSgA5jD6gi4U3tS79y2JHTcGvRUg4SEC2rBe59XRRqrEo",
  "key10": "4b6hfeBAf6BTM1m4eTMSr9yxaQmTeSDk3v4t5AAg6miak3tfdD6renGwVuUjPeors9e94RnBtZ72tfAd9RRDkPjD",
  "key11": "3w5JqGjruVDdQrG8N8Uwrxqfs3o3GLXB8M2pvKGxhrEMoX7Am3iM6VXR7LoPGStGnFZJgYmccvWLRfnwogKzr9qb",
  "key12": "5NciCtmLcX9EdtbJ19gd8j1qVNFyVz8E8uCGScPeyabdthA41J524WDU5hVBxBfymzixaWJsd27Eh5JjHbhxuqHX",
  "key13": "3EYXf1kY2sA7cK8V5NaHFGdDyVvYWurM2FuGfPvjePr1TqCPzzQbydWDrpXspAYmZXVmQH9i1XPpRZZbsyYCGe1t",
  "key14": "N4AmosnwaGn3Y2pcRuQKkDjESUzFeseEJ6V5uNk7jRpnuQNhRYMJ7WEJr1GpmfDzRMMUgDgVzPsEEJ67ZU8Rt2C",
  "key15": "4NC7TKzyC2k4CRVMvTyqL1rW93RMBeLNTmNgoPnVdQF3oS7fXyfuqsQ8mgn1pYXccGixV9c6ZR9QBGJ97RuPmaci",
  "key16": "5QnFqe6U6gDRuwU1aAfsQLXMqPDahjuszhKemLETyF41DhY2GUazw7a7sjtvL118ppvBDXnrwEFcSZC296BDgg45",
  "key17": "5EoVJHbYBQDczZfzcHjCbVQUJRuutSqGzGnUmVPudsqLEHptZVKcLERKmYfLhhRgHZLotnMacsmGf23qhbSi58Ff",
  "key18": "3FVUUjN7zAA5xxDHiKGSbLWZich619XZnPWtTQ9xr5TavCicxco97XhUhBLrx5y51oxDCjyewXVJjYPa5FneuLKc",
  "key19": "25N1C5LfG6Mj2gUkeaAeTTXP1TramkCieK4A8EqEfxhvHYF79KzGDCSi3BLCiqckGd9cThbzgobYKnrbGKJCzUtP",
  "key20": "3J4KFz3d1iPS7ZZ6qc4CNT9PJVQ1Nboas1QBCGaNhtUDbnrcbuxR5ZjGnE5b2fAirhQSY4tSzrsw6biBe5TNwqSg",
  "key21": "EJTgQ233MSnm3j12f6X478Xo6piphFf2ZVRwaaPKurDT6hyYnCJ4JQuUCzVPqamLugPzFDrcxybjny8TmfoEZoW",
  "key22": "5KHxvSsGEpgFgwzRj8xQmiqk13mkfapGwcUkyZodVtHKrb97RAPfzDKKrRzrKs4Yn1Tcu2K7VBiiauMZaVge8cft",
  "key23": "2nj8pfKKpqsd6mRAcWs7dP6J5Ti3pTB4KmQGQ9BvyJJxKXrHwqnwE9Eo2xV7obM7uFXvtacCqm9GVDnrXhGqV8nu",
  "key24": "3z7kSkk1RZuPTTPBLkdDLz6tFMFYouvpHCvWDUW1Ak3ppG3e7d4j93nniv3GSeKTAifCuzeoR3yLD8TKYLcrscw4",
  "key25": "pd2pd6wF8xoUsUck3Lj3iKBjrcm4bzx95N4WvpMYL9MaKS3dfByS5juMoNwa2Uy1FCys5JGagDRVqGuMep2CCHb",
  "key26": "5JmLnmCMWgtoBTq7t55h3Vs6PNbbduzw8DVyuNts3XgFmWcdaYu2tAikcpQHP9GxJr28jNbZw9fusJNtfnp7BUyx",
  "key27": "5YAL2WXr9sBN6yjieoiu3UAqHJP8cf2bAiRWKANrxEh8V2Ut5mP1dnWrS1BxFJ3xkzjdAtvvWvi7otv3E4LzxxHn",
  "key28": "5yVJRjA1mA8rQuzZypeMjGXAc5Dr3wCPokGzUbnY4A7hRxjm3VmETKD4bKSYgY179UQrRrbASZiRiN8USMHUeFCj",
  "key29": "5eENSS4G1dN9pKndANM5Hjf1vFGwcfQjXEbZjCTjYuiFBK2hXEa9mGwSU9gYRvLbmrMMZhfzLKEV77WwmNsBRR7P",
  "key30": "2umDLpwR6nbQcH16QAW17mwBp87ZvQRkGADQTt54XLdkpf1L7NTZeF4u5ySPimB1KwNmkiLqMhYLh8j5rCvVKhLo",
  "key31": "5ynMNkPJEiAYMhrBqkYVnu1ojS9t3CShJngMhZcn5weUuooBrqooWiqChRwkck5gvNSJ4PkmnXd72DM7y7ysoTeH",
  "key32": "3TevLK72Yten4pTXRh2daKfBe2HGNPYswJA3bDK9hHY1VidmCsX8FXRpZNVXFMto1uwYPmqjrej1t8dwocGqBSGY",
  "key33": "5AzfqtJFypaKSomV9pE2RSkmCQnGrm94WFxCNmjrq8RwAqH27D79jF39FhN26R4g7iyfg3jDQLnMrG1TaKq3N5A2",
  "key34": "3eDnvV8BNsmVTgBQ9uGsM5e9NatsJuqEboPZmo533TzZDq2aDoowbZ2bPQEA32GdT3Lpkd6a8nnbQcQBw4o7y8PA",
  "key35": "5HH9uYjcDWKq96HyWqPMCLqDzqA9B6p4mcJmRbt8mPj3w2YTCQDg8Aq58vXPstWU6vNGKDngkhjwC3SRWGAiGj6B",
  "key36": "5Ctkqb4VWkcWkuYjCZHTRGyoSy9E6TUDuPtTc3FsVgXN3vWEMvpVaFuyHk5B6vJyZkYwgLqAU9KLnNRu5nurWoas",
  "key37": "5WPA7CoYfJZsgySngr89NLkjrDFJk1XogYSPnewGjnzowpy49TbZjwnNxDwU6j7sdBcYYE5ecfCqtQh4NmBYy7iu",
  "key38": "5KBwJjLU1emiVU9cRnf5T3GEXa8amkrs6p1SPfLBs7dgMfcaeopjETCpTYEG3DDuHGu4KSrN9vp6jv3S18SHH47k",
  "key39": "62brN5DfYx3kkwPFnRHM1Z9L8o8Ywhw3aeTXC6pGSMzweMaNdss1KyBJsfCU3xy97S22EozmF6nT6xUJDuURavao",
  "key40": "4A1bHJ6SMVv29Uodyp7JPhSKr1XEcQJbvUvWvcbT5GcHL3jsnNL44SQ1LoY6aqo9HHk6CKzN2DJBzE1D6Vov4MjW"
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
