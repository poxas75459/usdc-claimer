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
    "5Nd7LHhjZwphQc9rRE5iEeE5PBkF9Dkvyj8NcMVsyme2jqmp1TTsvb2YKmwxUvx7gcFk7mhv2bdtxr5HLWLfEZvc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZbSPGd2KLcJVjUH4nLbT2rtYJSuXw4sRaXyQVUNaMuBiNkoM8jmxdeNRd4DCmGPCgjFXRb8axPqtmxJYSx2JLkJ",
  "key1": "93FcYRAtWTaagEkdGx4xt1WisSPZbiCb9LZwju3tWCbKfUXTQ853mPereLALgzPdgQSV9Y43XBNdP8YQATZN56p",
  "key2": "3zrsmPcXSrhD7aR7MttRaXuD7gwPaMJxf9dCvVpqYL3rchfXdnuS3a4MpwDQoyK9Lz216ge1q46uBeVBig9Kjiuw",
  "key3": "2Y4i6hrnvq1UVi3PWkmXAM4eHWqnfkVHUr2n5Ld5LduHDHTPUwKXF5QTKXVaMbbqeQC8pEN5qHavmYVmDNbQ8RyZ",
  "key4": "3L7WCMd7YAei88CHbLe2MZnGtxooaLJjY8b1Yv5iuuVu4ir5ga85XJ17L22soD19hXCzMLx5o1f2DwiXtt58EPge",
  "key5": "43aGNW7paPZxCCEKxQpAsT8ydupLGPQKq5VsLY7qCTnPyRkyDk7q6yXhjqimWiuZARQXBmE2VJhqH5tHADBktJot",
  "key6": "WVfYq3GyhALrniapkVBgig19nejzxeEut9VhDz2HJLUhAEtp9rRMwJm7Nz2pgsj8urGKkF5nbQb1qcW2dFggFRY",
  "key7": "4jTQiEMp38xYKRoFLramqNfohm8v9Ux2abD5hNUw6ffcyaBeLpWn8ULfGzVa6im5yUjtwMzFdfSocwXQA4GyGC7H",
  "key8": "5FZDniRCKV4eB7mXc9jVF7SyriDFbNDjYt5ZqHMQ8jJv2oPbfSGaSp9pvUjzvWE6HXYWhmAV1BdNQGL1SYihqLo1",
  "key9": "5RhR7JjijEX1ePfeLdBRmzhMih2sCeHorGvYGCwYRgzc13HAmpAmDL2V1r82vKjTcAmePmNJtEUzQGNJPLWtfYsb",
  "key10": "PysKJCpT2cUJCYxrpcCuxcqLFbSuWMyUXj6B9qxdXBqV6AY1isdJKnXBZ5AzBbGEqo9otxpouQFiR1fkqpQB2wf",
  "key11": "5cZmahWaG9kkUYf5MtL8PF4kuxv1cwa5p7f9QA9eutBj8iC2dwEY7w7e8hiG963cpiK8D9BaWuNWkaQ9k3kw8RUp",
  "key12": "4dt349AJFXbMSTBdqacXhv33QYNzsr5WomWEUy4Tra589Y6xDeb8MxSLvLCUUiYbtKRn6mrRT7h9qo7ZkBw8emxi",
  "key13": "53He2BFRBwMAB42iR1n3pGe1B8x7btyV7wKkJxRoNGxdHwzDBTH5jYC1iQ6gFxgQbDZ3t3MRe2CBSqrn4UVn6ZYV",
  "key14": "41GXhubdUvTVuFbp7iKRRfMnZV4yELZEagGcUTCJ4yzGcMLWjAe9FykTGz1UHAVXbm4PX7X7ddq4TgKkygUqrHTD",
  "key15": "4uy2akyssriKynSARJqJELAmq7oLe7Hh6ATJuo5k15dggbux9PgEH9HzsaKSYNdwDjpQrm6pQFz4CjSGmzjvzMfV",
  "key16": "2cqmMF1ZeU82Dc4gK28v3G8J4hjiCRitJJTf1rSy1kC8RSJ6EigtnYyY7EhWbe7194NpP2XUhDyrGaiWX2ZsNycB",
  "key17": "3hUDWHRi4vmxTjkQxhQXSCx1Mqu4wJUd96QtgyjKUb5KKai9KuRK3pJTqyeQ5aXffd5FJsUS7uBHAdy9oWWxxKp5",
  "key18": "6Jp8gb66zb8NTsUENDgrb4smzgTHJd4Rw4odLUJR3URgDLxTxmMGXvCuCNbo6ysdKcSMXaXry3VEbaVmsYmwajk",
  "key19": "4RT51oYd3r1BYNxbtpMbvd4tzrAhct7cJ8GBi6rj1m1gjTAoHdXAWDLb37B5XCsNpiGehoNNzYeucjuqesVtFEBF",
  "key20": "4PGxzo9cpB3hh2GLtNGAiArfDcUCbhJP7iFmyA3Go25dhaRYu2Hwjj26J94ZSPMqicqNVNzhSzr72mMhhnDucmt6",
  "key21": "5PE66wN3QAK7L84FYT69WdmtV5nJJUob42NXGawUc4fVEhChAAdcxwd9SygcMNCGv1EKfzonGsCcg4BpbZkbJcCq",
  "key22": "CWf2WFgULL7NAzrpRtdzoSmq25s4WpDrVFTJd12osiRN4BNejJHD2yK6uyWELP2fda6d2QeyJSj6Dw1psYJMqPy",
  "key23": "2iYvEiq2EM2gPqWjeNTJSCQQvvPiMtjpWrMxyFeUUqGT6yF15tcDL49m4W8x27czCVbBocLpBbDGUSg4R9hXhgxm",
  "key24": "2XvyN6D2aCZsT6WkzHQPTj87VDPu1HaMkmvSbQEnkgKWGdEeqZxhg85YZsLsNxtz4shGcMmEsVempZwxqdkFFUfz",
  "key25": "25XZjnV8juBS1yYPPBQ77AcC2aXk3yY6jBYLXNaEY3kHRQ46C9mstu1u3eVHLzZoANrcZQ4bn3FEXmxvBkDvmkVw",
  "key26": "4cGiH392QZ3MZcqtXgW6AoVW9jFqGXccZyVpbknJ25y9zFicp1tfR9s2PUSRJg65kNbBNX2hCzV1aJNZ5tLTWhAk",
  "key27": "35xSjy5wMi1NNn3XZv6TMBKAQ7iiRyDMnAibLzTpEFMVDZc7LAjSRg4mbNuoddmgC2NqS76NjCCXyRmfVzu5Fhff",
  "key28": "4VVjTsECrRVDCahmUJRGq9cKHD8FauAvh284Qtu73cMtjtbGsN42jnbNkfSmHLdHvrieTLnq1MVB6UUrEL2aZ3mY",
  "key29": "5aPKvsVqmsANwKYvWPDmCLBh2ii3mDMWfWvoz4w5rE3YEdbFeiTkg9gDSzKQ33cvn2J4wPPodcB2CnxEjAEUYLrd",
  "key30": "4W3qgTVj2aBuHGbAA9gdupVFhg8dmXQAkdAz4xS5abkYytirMh1C1qAgb6k1cFsLiy6LeMmxDQvgURdw3uJcxrP4",
  "key31": "36CJZ1AfEpmf1irhP6ZmWP3j5g3om7tgvtofMocMVHV8goMWq8PcGwxDQznimfBam6Rr5zhXwvQASivwE3xfZQ55",
  "key32": "447CqEW48zu2nnMA8SyaVbtxURMdkaArtKurZEju1VD5LtV6vsDkm5Nem2CQXGnQnZR2SvvDdMN3ge16cZuk3rUy",
  "key33": "5KtcQBwg1PScThu6zihnjh2TF3cGfHczTQ5fQNa16NAKYewfVN3rvc35bZJuZXGnUyvAXbswegQgQtbVHeRSZctZ"
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
