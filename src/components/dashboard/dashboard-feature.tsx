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
    "2eMr3yFFMZgm9QHQ51ukTBsS2gXot5G4eKg45NWHPYEpJe9NXu8PWrQqG2pDECx1fTr9xyqAVpN47KFPLdtrw2GT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61gRZECAEcbRJ1W7kUjtsN5rXYg7T5m7dCcs6cAeiXAKKsaY5fJEBuu7Cwmoe8dtXfwuNLAuSMSBR6AGKnBH9i69",
  "key1": "sw2uTLvWsAqkZuT58PS9RbmnMUM11hG4iadZHELeZ8JCSQK8BjWTJjVNSCXiP1GAP41taS6bxn9NWYGRKbmzG2u",
  "key2": "9dxGvtBPhnmGyXEU3BNmqj9s5rxsD2Mf7t3cDGqajYMrAS9KnNPCnq4ciSv38Xa42oSek7X9Ef528pRcmHiisUr",
  "key3": "38xEmAcUHZGKPzRpkdvKZ7BNdiBoy3favWqCCWYmoRni8ZKNBp4MBeFmDs3vGYeRhiXiUhEVCKA4uTBxmZJ9wdk4",
  "key4": "5jsAZkDNwkyhnajbDLt1MWnrNKDG4RNPMHRBuAsXgJRF665By6VkgwaerJeyWSexA2imbCedoW37tvZ5q6PygUiS",
  "key5": "22Lxh2Gh24Uw9A6ExprrjE96ejMNJuPky9tsdxruXVcjuj4CqMMVxpEBAfqoQdgyzVEVjCCEW9HzYQgoXwjNyuJe",
  "key6": "5GU3hYezo93EcxhtEn8Cnhf6xE7A7fTV5oLcrRMWw8AFq12s5fDTmerPAbzXbn6wnNtYHsDJA7qXUDWBoWiwGCMF",
  "key7": "4N5GxXtpNVLKgopEfvtnLgnSedE8tjHq2wj9k5Mc5dFjVL8NJznEoGDfdx8T3gMMKSRoCqWxG64XEW6r7cep7ojt",
  "key8": "56qvp174fjDxXAPFTqy2ZaFEUNkr5c97wB49uaKf5FCzqXTbSv49sZMVAamM36M926u2yq3dfnM8FdEuEm8va2qC",
  "key9": "yAmtVKw5oDJZ4RkUdwoYhQt9bHzMLAFR95ZPLuHaFb921KpEkhhgESZoGCdrQRFjg6QmNC4zaazCtaBS915hRaB",
  "key10": "2TTST9XT2FpM8udxhXEwsQYDfagQc8ByfpHf7WLnaSZCQ7R3JUSmS8MVBWx2A4gW8Zf3XVyeoTnskuy6pfhbMj8H",
  "key11": "2uDK6XMDsFTnHaChorTWW8AcdxreuL7qob3zxsYgLZzDqG62jAcApzLogH6jMwew51fX848f6o5oSxApUDP92FjX",
  "key12": "2Rt3PWu5m7TRGevXgrr4bD6yo5PiKC45dEB3kh4BM4U8acYvRxvxvT6eS68QfLYEbPza8Fhu3fjAUi1JDvDBTxhc",
  "key13": "32E57c9C5DZBHwV1HJWqtTzWFxynSTF3EbqyyKvcbayRC6gcHLaCMrfStEsveq34HW85d6roK7iCvoDkyXqaNd7H",
  "key14": "4hqsYcbAk4oUubMkrP7k4ypd6tVDNyibjU451PCo8BJT3AANddJJNgUTsZFRMc9DZwZMibwNaC61fn2pv16Q68pi",
  "key15": "61QirrAvC93uYLVqUZCnt7dXnd6QJeQQHexErfC47Zxuiq51b4VFbr7imeTQ4TmYTCiZ9tP6Q6MynyxD2KuQBqaM",
  "key16": "5gTfhVoFbwYYEtvSHDgJeEyPRYLwsUJkbbbdagvWFGk7ydnJ6UPDpieVa8Nv2z5DNuJ3ry1bNi1RsnK6GRfnaT4u",
  "key17": "4ecwk6hYw4ms5zzczmeWmzryhPicTajdYxmsp9QwJWznDzTAFc1zb9bg1SVCExgzrun5rrSrqAHFPwxnKJ32yyo2",
  "key18": "4v5BzqRcqzrKNdtnxCqj7SYVMGGSejnJEm8S22sX17py6rE9VsBs3tgvprsJGfGLkXfvVuytLygQQxNPUUXart8C",
  "key19": "jMeLMLqYmJDinptp8PBSpVjBw7LsmYGxzvFbP81yfLBR3qQnmf5kAPikM8eg1tuoghumEeKuQ9gdCxp7Mee6aUW",
  "key20": "3Xb7FDByhWSsB8mw22zTnnH8LvK6RMeqwZ4fXBvp2JieJWPmQ8384MDFxeeGT3V17hAH6qXj5omNN5HoyNTR7JBo",
  "key21": "2yS5Nr6PJqScnHyxBRMhXeJDKJDCaM7jNJ8CBf1qFA9NMSM6exLuhJHhdfsNWusRgq74HT2UDddHecdPBUz3oG5R",
  "key22": "4yuRayEywGWEfHJMjAD9iQXzDvg8R4FNTb3mMtAzKqqkzLLQ9FvpjdhWnuaarZ5epfNCB41TyiibLTNc3ahU8JTR",
  "key23": "58u33o92VV95LriTDtGTBgyGaRQEpyh9dXxxMrHzEMdyf4xZndihimgyZ2fioWjnrn6L3eBipdphdxsTthEMNcu3",
  "key24": "3Py6wCGScyLPJPdeovK8Kskgx78SQKPAchUou5RMNaZujPembUQTkswD37AKbCLxWXmTJtCg8FbmtRA6YNgGUQD2",
  "key25": "2ihkrtUPq5RVhyk5hFK8KwQBNiogVJAzTTiAJZCv1PxiFufAxzhyFVnQh4rrSyjknTn2BiR4oChG49sNoAMQrxa",
  "key26": "3j8vyP3rE7Yr9icFHgnGMAGbnkj8WT7kutibEB1XtCbjQgcRsJXEEyjy9STpcRRiZiDQmKmMZaEW3ExqUWc3TKwZ",
  "key27": "59rqSQWBzWPgurGwydZW4TRLdZeKhubXpAQC7wdAW4D8rvKvvRfpEwQLYpjgbfUMMLKMjReLZC9FnF55EshkiaJ5",
  "key28": "2hh7pxXv6y8HUzKa7YD8xam87qGHAtyuN7yHT6FbW6pjLBZfpFtqXxQfkZvdoVjd9uXewqbrEuHJUxT6aghwW8CX",
  "key29": "3FHKNofDv7gXF3rKEeoLzKMJbdczjDPUVBe1DfTF2wi8gkLkkLmN2DHcGHCb1N9v58Kw9Gy6yT1ZZJ7ymnMTYH9L",
  "key30": "5kAi89bXsjcUuTgw2iR9UPmNfzssRkRQ1JfLeSwJEg1dmX3pLhUMANHKh9sQaTVjRGQrx2JCMGXm1tWv2P3DgQcs",
  "key31": "2Yv25oZ9bEBpEyZqFmRJCNznCAdZni8WQjHgZfoXgrNXYBRAWpPNyHW93A3RdQ1Gx5bQXgx1LxF75MXAxZ2EMAj",
  "key32": "2KpWcVA77Jkvvag5TB9qt8xyvwuK36CQVSYhmxHngetnhDKd3euyxFtTrWoPGdFdJaNcWjWNk97ctFaBtxn3Z8T3",
  "key33": "4Vxzf6svUNzoWXeNZfQH5MB8Kx2gr3N51fVCEVXiVYa1bio4uMzuuuw6xvye5VNLsarwdGYchQ5XqN9raUzzSbKE",
  "key34": "3mrsjQWfy7fqR9HV4J2eeo44uux2Hhv6CfYngJ2kajWgmEyMoTtHANXufNEQqaX9NrCxMAwKbdFbCXs1tQ3ofv6p",
  "key35": "5BT3L4PpAQVvpmjL2pYrL8JMMiubfV2q9VH94jLHToHi28NBBgKR25wbrBr1UM1PmUu9cdiZHSsuy6f5UPTnbgfJ",
  "key36": "DxTpnKaCNRjETzZPdrVVk9tRNCAW8tFYzWjJ36FKzQAqriXjGi5UFtZSiAyTiiRJY9YWMyERHDmsQjfVh5YQdaP",
  "key37": "SrCrRkesj8vo2c2U3L2uPj6MjFMFjY2czEDcxkV6v8KFcUFCEw1HPptguW48cCLQR1C2VpuR3B1C8LGuXRzGFBd",
  "key38": "56VN72MnYikAN9vK1YFrZHEKymkEqoiL9eqFzikyECwbdugn595nPN3P7mjYfQp5drmfsymK4pfeXbJw8QmmncXz",
  "key39": "WdyfJTV2YD9V3fcm8fttvBMR58rzKWwtSUg53nVTTFAvYz6fQRZYjig6UpZhGwMqbmyFJLZAEEQ16WfcDvvBkt4",
  "key40": "mbDk4bWCPxLy4Rvdg14pUcrQk5jpwhpMYrLRhvBjWSxV2JKx3kYhuTRkFeN4RyodUGoyukJzxjjCqKhiRSwvN8C",
  "key41": "5agVzxkGCup6Gi4FBkkFbkhgzQVJypNgUm1dGVZJzN7JGVXeGeLneWejRswvPANL3GaaR3knpuTNjHbBX4LB9FaU",
  "key42": "3hoEwqMv52yNpM7VgDz453q1cdA3XdkfRv9rjQxDPEbFJMTWZnHgr4RpViDX3feqofWz7VawNZdHznnjexsN7GfT",
  "key43": "RptYPmpRMkXvCQ3JztCzqVoZjAnEdWkk3Sf2PeRxmGKXf5XxKQVpw9B3PGWQNybWBPm5mKYPH4b4k6H8MffEa3a",
  "key44": "5CzAgi7RUdB5Sof8C3VzTZqsZUUHfvAa4TB6uy7tnqTXZa5wQYeUuEpzKPGEvvgwdAjoKqRok2p8uhhWifKodqsi",
  "key45": "3p8CCnJ2KxERZWrjVcUCBWznQ47cPKbzC27egMLFmnmR1ru7EK3s3KG2fwHu4kvXQSW5911a6kyD6o5UUwvimdyJ",
  "key46": "2Tn31cgdHupbdAKTLKwxTLUi2x2k63CKSUe2a2EBs4YGqXuyJVEWfn1kiApttwmVgREqdmf5pjnaJcsjV5x1upd",
  "key47": "JYcT5j3riTSiXu4vqLEzVbSXxjwPPNfgexaXhhr6kecyKvHgiAu3RiCfVJznvqdVSaS2TWrGMQWvDfeqX27NY5n",
  "key48": "XrWEsbTFhcnXPD9U56KTJQM3QWZrgbkhkpWzd9ppnnHzLqvrojWTdppj9PV5Ted9GMd1mParvj8mmYAMRGUBYvC",
  "key49": "52bz2KeySLEBy8mDgM1aBnfCvPP5QzA1eJvhCtK5SgYqwD5pU8vqj2xcaZijqsqe8AfU6jmR4AYxu9zMRU7ppN3c"
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
