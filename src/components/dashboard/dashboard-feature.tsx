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
    "2dQoVueme2pj6KDQDTsdbaMkm8kwFC9WFy1DNnMcfXDoqPBEwLQF3Ak24nZdKNdeDHyJLqFFxqPZf4RhedoFE6aM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mKnVSBsMh1t8r1NtzXRmMraaMAmxxuy2EGv4ChQ1QnoWpcVo6o795P5FezzrzZejx3PgwXMGJ4gnhpAzEvo32w7",
  "key1": "61LWjpXmwnqH88uXvQcmAfzTpHxfiUgUwBWeS5CANLYAaFYcuqzEPzvNnRiLWTDnFwCnMAXMmtcsGxjm7uH9sDay",
  "key2": "2fc4VfDgwdiMKqnhU3Naaw8ZxcUWtbujzPQptyyN3BG279PUUUskbo6vzhpjPDAeCN5uzvzeU3GrPYxQrP7fFfxF",
  "key3": "2B3fkRUVtEbqBaWvz3JCjPBTFEYibp4S4cZ3nc1MmuHSyawZYZ8z2VCgz1X6G1XAjStFbQt2UCqYQDEDLjYMJq8E",
  "key4": "4YMpeet1SNW1JQcXifnHN57eygjk9o2EaQM86q7nymKBgVypAvhXaSf1WwiDJSoCNoq8tiqmbxhFru8UGa23SbEu",
  "key5": "3HXMtWeLaBkcWEgNSYZt6U1DvZt1e18vjTMDwkXM6XDyecck3uZfsP8Wd8ZJGyYQUbuvetvcLKp5ifeQ699sqV7s",
  "key6": "5mspznACST2ZQSM94cCaDqC2hiaA7Npmf2wWVBJkC7k9HziTaz8zsrb3cVuRQiPVE9BPub5uAZcHrS17cVGyDxEq",
  "key7": "5bV5uYTMbZrnkWSwiL2vhKn8s8pdMif5hRUgryaRttCKXQWUvy9cmW27iNUKy8Tne2vy8uwPinyrcmCwue6HAs1a",
  "key8": "jtPa63rGA4UduzX6wFr6KPwMnrZQDAc6iP5LGy6oGFjbGsAihLiS8JXbQQgkNREHXqQiuy89k1HqiEVETyhnefo",
  "key9": "48QuXkRBRF6RhK38cnc6xZFVbW6j2NXJM4STfhYs6dho9BqE2LkLKof5tGR87F6XTzTpt3fAcdAkp8ZYWdxHVVWR",
  "key10": "xDsCTJnToecFTRmAL3T9LUDCs5Y1gRoRnrn8XHzx4e2ryufKQN8GWYsKEXvDdnv2YB12GQFThS2shCQ6TPDiszE",
  "key11": "34dU5KKSaBhFqSrktEvBm6SrBpbomVR8GbRQhdVCu51nJRa3DfgdLWFkVBa76rh9LfsvfcR5ogT86qvoRANgmBzk",
  "key12": "4Sb6VFSKrsij1CUViZQQoe3w1m8PSMA7iG9YdvYmcEnVjk3eZbK7qS5CgoL1zyTY5gDrvNkk84uvdENLu9j2xQky",
  "key13": "2TKxWmfZKzrs3bmuSGN8rG5SahT6RNAKHcnGPSktjCGniXvxNj76opdEtcornFngtyiRehYoekjJpkUBFXAHHNSm",
  "key14": "3W8bUtbCcQEkcJZeU98H4JGGnGvXRxNxYcB5vpQ1n8x8BhRSBrB8DBxxz5bJNArgSvGd4kgFJBuJj4jntJudbm5V",
  "key15": "5QVrjrQpU8VqkeD821zvAwzjQvxr9SLY6Wf6HrkFH66hxKPECi4h884VD5s8YUKEP8tSvSZaGutKXiyAbkPNC412",
  "key16": "5XcPA8fW3zzzNPP3pahbM1oCdK1KAZ8nrSyDs3WXtEJEuPJ8QsmLH7PtRbfj1GLje4o9BnRMfsa3Mnk2wRcQLeML",
  "key17": "2tPxos75B4LzStLoSE3Uh3by1Cd8NqxNkEBmq8d346JWKxNXjGgzihHMcnaB9yvmEXcbo6P2LnoHgB1hXjRMFRzu",
  "key18": "3AgCVFwivrYsQiaYpBA1kKDxGhiyWJLAyy29zqhr8dhprbwBCDPDYkdDYzFxFyDszDFTwR415tph12mRZY4RZgti",
  "key19": "2QNFJXviqJ2ZvDxNd78B2w4CKKoENAT1oz24RigzYy6DYmgzhLxGMUMA2eR7drdYeaw6ejf6id94fVhG3MwK1Gou",
  "key20": "2sCtmiyVjAryEhizcE6TxYfiaGn7GgvUHByjubx6vDhEZLe6jUY2puCUpsxPFrpaTptF9hf4rW6gF77yDxyG2uFw",
  "key21": "5H9ozRKRNE4X7v5Mn7r5cfzTxPhm4bpmfemeYXcHEg5WnfKoi8KRpH3XAJGecxh2jTSnCGmAZv4bjcMgs4s9RhxF",
  "key22": "64vkTcjw13XdemmdPeSsDvVnU1gS2ujpoW8z3ifTBkAqkQgcCopUS3DAsfTQaj2EuiEXMBjy8qysJfWSYVWXcpGf",
  "key23": "4zh5DhpuxLV6a8Wqs2ZNyHH7THFS2c1HfjkGoE3RG3fiFveY7eD2KoNozK8cHCsVsNAKw2CkLSAHb3JiNX7amb32",
  "key24": "3Q2k1U5Z2oqLbFMDx9XD3hPRmkwbKjTpDG1aRS8M95KBoNKZfWgXXfYb5n91mjvP5m4iHVPq4ufBhmPhhUYGgJUa",
  "key25": "f7PTbMxAzxeapgcNCkBXeAWSzAKy4BjFz35b73GpXKoqm9odYytqJF1A3oeu67vKqSgEDUMXMNdMGU9KiYpng7b",
  "key26": "5hyLPg8ZQDj2aabRcQsqaENa92SWtvbHjwbNnsdzQPkWKP4CdaZhBHiufWKsBxL5HWjdsZWABR73UHuerRxAr3m9",
  "key27": "2awEqLKH4y4Dvja2CqAbY4aTAWRivRa5SHu6ptPQEYKkcC2cAkZo3AJyMr7PCm9bgKb49LrxnNENT1kiF96QDrgh",
  "key28": "3m6AfQm7X1JfbH5Gja9JY3XrjXbQwir8XYdnccWmMTygYrK9n93mRLV7cALdjRn7GktoMf221XmGvTncZFLVdV8r",
  "key29": "5qebkFkHHBDDUphswtNQLGw914fq8hbxwJMLZNXnbt1cnEvAbkntwxUgw93PC83cr439aHZvUqeo1Ey2FwBDe1Vt",
  "key30": "3EjTcPRaT9xm3Xv9dnu61NAnpSUPyTkFBfW2XhtCcbfH9zisQUxobEjRoLnjGD8iTZw8Yxp2MVpeYHa5EKAUwqk9",
  "key31": "4uVjcPGQAycjLD75uVSPcQXh8BngLEy5PsuDxC2PfT8DbTQdrj5XvBrAEFtv3MFZE4fHVkE7NwAL5uRwomWViZtb",
  "key32": "3HPdgfs1sDAuMLbuK2qqgT7xihPeG5ohuzBspHvo3borW6AqUK9vBxE6EqYSMqpe7g6zuw8MF4uYrF6UYi3hi7mV",
  "key33": "3WPgfj7gLkYEj9FpReZD16kaydbaQCzAnKZYAcmagfwyuNtZw7PqbffPZLodrdtDj1izxcPz6i4GbhrrjgobcQFu",
  "key34": "s95rgFNU4pzZGsqjxgoy8tcyGxy6Hc9AfAqGGcsKFYXpowVCDV3MGCbGSCz8a2tZS4s9Ari4kbcHX1Mzw8NJFwc",
  "key35": "3TZMEM8YZ8zjP4QGiQCjnuWotfagdJ4SD4tuUQRLVkxVngq2uEzHjsmndjL9Hn5bqQVA2LN3WXB7jAvbXpxZ4Z2V",
  "key36": "3WnhaqhZQFSqesaWHdtdSKMxStDpNijcYwkqs44qmRan5LpA3DuZRk4D7C4y143L4GNR1zFMEZkrDVX7jM6npnZK",
  "key37": "4yEhhZRbxqmYmQNtZ2ZMk3FizLVSfRCrkyADapQuuYC2TZV6wFwgXH1oZfuZLjgxALkn5jc4VjW1TqccLsKE9EfA",
  "key38": "4XdeasUNgUzLaUEBgT4QSbuT47DK8xPgV4s1MxFb9oKNH8LAVQFFiCVTziDTHHWvL2LAjudQeLTkqXsdRjj7xN1n",
  "key39": "5KGKdHkhTDS2rKogGpcGsfasKmcVUbYy6Pa8DifWqhHYfPeqiLmBas98ouFKsobRFCFMvqpxpAQf9pxKhCxPfnHG",
  "key40": "59aALA31FwPd5UYX8kjYTEWqMsg8c8NoccsSfu4Ju8BeGycqNsS4aWnMGVgkDxrm4saV9M8vJXdpGZTce6w15DWA"
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
