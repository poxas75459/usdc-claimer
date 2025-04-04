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
    "5sSENYGmgL41FCLZpmFjubpBBxyLLhAQHk5CpnXBsaKhMPBCkA8pdkLSqPXx7eNE5CEzfYwSkUdczrZuufZRgJQm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AG1XbU6vsQm7TRLKDZ1imb8AR2CAekCGWQvoo8fxJ6LWmo6KRsGTrTAR4awtRNBbv8D4a8JJoUNu1YP9U7BkRn5",
  "key1": "4tyPiCz7bKycq9QZkAJV1S2EyqrYYwnR1Qym2TMC5b6XgN8k8GgeNneCE4ZZYLFN7brECy3VCiyRmXvKjYgxmUNM",
  "key2": "5CC6Khtqjk9ab7UB6NEhN5Xfgssv1CUJEhLpebPaDvDPhKGaABCQdQcFrPjHqB9NeyRz7girGDwLHyWxHWMkpDgh",
  "key3": "3UJqpFc6CYobW8vCY4ymsGdvJZ1KPGC7Gv923uhEizm2oFYQUBmtDmk1kYAVQ7AruxvwnADY3nWhS7wkjXegnBiu",
  "key4": "2kXEbzgzRBtiYoPxadU64QT8FoqwjEHRuopeTpLQGioCwVtLjd7SsmtN2mCSEpEe3a3JRpR3qFnDS3rxwVe5obHH",
  "key5": "2diWBTWjr6XeEkE3hFRb4h9wNQKmvMLR6GmdMDdcAabKZq32Y1uzXtKKraWw19JJxtevYA4YHo2LyDc2Bqhn4bZR",
  "key6": "2TVhpyTLJZNsUZT3TVA6xygxYxrH1PKbsSAQg3nXoZe6junThwZKnbuxEPib4YT6tZztGWShAfGRYR1aRBgH7Dsi",
  "key7": "2Yc3Qc9sj8Q57LuD989x35kBxKVhk7tjtmjvDUsH7d1ra6fd72spzx13UvVaHmqWF185CmQ5vFPCeMNtFaDs9QRe",
  "key8": "MURB1sNUi66o3zFyWf9rkSPdczFYmKDeVs3iq2AykcAk25Wo5VrPoBgTmMQte7WdQtiz7tp9VWG1nP54jQEUv9R",
  "key9": "zadg3AGUFK2JiLdBTvH3jFv52Zax8gkzj78wYF5rA2ehwWWzB1LFMLYHFyrtMptk8M92n3CS5jsdH4vXGBW48uN",
  "key10": "3i4Zssg3dY8nJ2jLQ8hvexnGJ1wUhVeYx4b42qD3fRq7mDnhrcgbQq6kL1cmTGvxrTKvdHgt9ghcdb1EMhTFYnvM",
  "key11": "2WCcWK3nouegQsj34ypsFwwGLV8DxTnkaAiZyoxoUedh8fVdbh43yAExvPavTGbm1urJSqqopBGvYqdimM4PHb4H",
  "key12": "4GgoTNzz8GD3bAJ9gAydzUeTS79BimBhb5g7s7oQN6B8n86S2m5CrJKLs4dcZAA6XiakfT2rc15cawneL5pRTt4Y",
  "key13": "5LRQaA2NX7LvGX9ecVwniqNohrNmX2a5VPeV5aLYCiSv5KEEdQHD8uyXDC5y6sTuFfyd8MqPg1YbtRNpMnNibz6B",
  "key14": "5YywVvq4SvPN7EnsU93PxGy5XS9e13MkWGjRk3TwTXTmaE2gDd3resUdbdor7gQt7dQA7MuGJtobQ7si69NQwtGb",
  "key15": "2d9vrugLDycG1MbKaqWtGDVKH5ZVwnwEpAZAsH4vdkvqKtpZgVmbXTcYDU9ZMP2uipgvqeGsVvUztCXufxqGsNRi",
  "key16": "4PtnPUGpigmeK9QhjUx4fenPYbtuRpUmiBzXEEn7aDu5Th5jBogajJE7LqbzpzMR5fBN3noF92FbYssGSgD7PQ8o",
  "key17": "dCNjXw7jeHVRe7Bw5QhAaEbNdbvDkPXQrJGxh32NHT6bdJk6JZkkXM2VutF3rBd3ujzRAotuNLB5CNXhQah1fWW",
  "key18": "5J1Bk72WCkHGt4Anky5ea2UQcPgFC3A2FgCqqXU6Eiqi1qYmcfbebG6Bnwsz5X8qhTDJmtCH3dbDaraozbeWjTAX",
  "key19": "2s5iKnxWXZvAcQufjaCSQvciVPvycjGy4du9WBCDwTL6NEkh9M4LR1kCbkDTQ66kviBMocJzfnfWzupCvabJeo2",
  "key20": "4ZgPzKrtYmkLu3jFyqapM2yekb1CgDM6XySWbGUcLAkU4G5aiH8qRaheHSA82mW15ENuFV1wCMRuZ2kupSxH8Bse",
  "key21": "3obNeDm7WftdVrFvgbXSXZisncLDmgMA8FfGVcMbPHVpQB4PGKwLdqqepHfYhi8ofc7qN6iu7TAcdZmk4FaKizdu",
  "key22": "5kQ3k11kPB3cgpGhFGvWEZWtd15wHkp5g5RnZ8CjeUbNsc7UgWg2Au7mpXCNPPwLuFbsqhVNxydAj3PhQNjDK6Xk",
  "key23": "51kLEQHVErLQ9sjPcQD4GxuAnxeqX5KBczgkP6vJVXXaaepRRAgnNV39ybqP6739rorz3sDjgiH6APEWKHJCnVV2",
  "key24": "4SzweoaJHKKhWVBLwZ8rSsLt3Pz2DXnuyc5X9qb7LyfrB2hTvkvqsd5Tz6KAkw5RThWxwwcy3LQBQZDBvfa8hEd4",
  "key25": "5QLznJyQ9RGR5YBosymDJJFx3onmAGefstMYufFBM6ygAd9jz4u6H5ZEXLUF73FxEL9gLasQh6ZWYajiX94va2K5",
  "key26": "5sFGuaCi4YeyEbtFwrg7daA2fDS6RskCVzVeXsgConCWr3vLkkFF6zuMujKtvsqMaQX5gSSDai3buJnXapPLGcmu",
  "key27": "4gC9ZrakCW8FJAz2eXomBLcYfvjg9jcNvMfK3MhcAcG6W5otb1JXQCoteu3uvGb4YFxi868GkURia3FdEAZbruzm",
  "key28": "3M2duocgGkmmnJ5o2YU1L48TpH737fn9aLjXofsotHypitjympHWnCa7fyjH32VDSjxYaWaztxNNCNarSA2Vz6to",
  "key29": "5EkMaLNaqzyVbF6vPKrz4NpETTaQ4WoMAzkpUS4n9hcvMo9GQQGmVeTs8zakCoSue8SVfZ5rG1kiqZv4ej7xyc5B",
  "key30": "3ojKCi8dLEHawXG4McKQQRQ6jZrK5U92P6t6eZmkETKSq9Rog5UcpWN4FiSMF66FbeurhKWi95JnueP63bZrcE5",
  "key31": "3P5mfKmXr8P8uDztfR4fv9fQ4rQGLeYNWBSmDshuAXqcVGRR16GrfKpHudnwB4KBdUzWfnZhENQbxZP8QbBiGQXM"
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
