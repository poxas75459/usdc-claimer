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
    "2zniQrLCBhYhmAB4CyQtprViDirp13GcmduRxtbbKnYrzf17q9q6fCcj4RGJLbJtaWEE4NoMsaeVLJfMCBGMqVV5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PepQnpqW6vBiy7RVLXYyWsk7zcyDnDgvruR8gKG6Jq3W1WXhHvus4V8LftHP1vq5LqJM52o3haJ4Q45eXvBvpcM",
  "key1": "2tMqWZAgyGm6qZNQZvV1KhWS9irNSW2MJAmLC3yaSGFyPR9H2J6nw6WJDh3zqFDVLJJFRV16L1VDGNkursiS24R9",
  "key2": "qF5SziY4KNqsuhKMnSDsYZGymWkAwvv4BBCnic2HMZ65CNWm8oWqDGj4d1sDjdNsmitzmv5ddppcznyfqT3TPWa",
  "key3": "3n4XAJPdUogrjXaESjJdjMGsSsdesZnvh4nPWrKxnTwdAXaSU9bAJc4xC9uiyrf3FkwnzwEtoPu8zKVErYe76EZF",
  "key4": "nidPai3zzoBHGSLucSmXSmYeVe9uw8F8PdrsQWWqTNqQn9fJiCBntoHJFqGpf3DAH6anoEyLMZwFoHitZgGK7ms",
  "key5": "4xEX1urYgCKEvgTc2jHtPVj5femVu6RFiX1Acvv3Ez2hdyf2wtjbkka1QKXQ7tC44cYqmScrbw5UswnMuD2Q77sr",
  "key6": "4Y3JPwgP9GCm9eaa8YdQ8Rsfro1tNY6xgtH8sswVEGq6JHiLBJFWrtfC9RiqAz69JDjbwTqUt6Soux6z2H3bh4rQ",
  "key7": "4oiNuCrGxH9VXSPgYeUUeyiGW3fNTbcKVSw4r48SU6A9U2pWmbTxaA1ynYNaJrwCnYoiC6vHZPuqbhZ4dn4ZZwQU",
  "key8": "4J37mSTkLNV7t4r4fWnzFBBzCZxDRRjmP4ZMxCMmZgtg9sMMG1d3auKAmmpSJ5nC5FizVyVznJrioW9vdSh9trA2",
  "key9": "5F2wum4RgMtpMMydJ9oTAHvRTAXyAmXAyZVECPfqToHUR2NReLHfSJxBsxqxty6Mk4BqVJ9XPS56GKQHfpmEWdGZ",
  "key10": "5Xvm4mZjA34zCEvBez2jhCNd8q6vm6uCBcHiXBg42BLJkywm423gcaWWTSZot2xVvrYMQy3MQpNF2wXbxddMCcz7",
  "key11": "4X3dBr9DWqLb8x9C4oSd8toDsXnVn569AqrTSRFZGZRiTnJRje9oFRerTB4WQwNbVLcAiqqa68xhwGkMbobwX2N9",
  "key12": "4oqCChfGbhVV5YSk4t5ckVACdX6p8uURYBC9WMH66Ze7MdJHmYCBy9kAzdiXb59YNYuHHe44WapP1LFnn8tkHeXF",
  "key13": "5cYQh6Y47bLd4K17g9aznJu8qcrS4x8F4Mn7TpDe4pjUZYkcX26QE3zGGYxKFxPcz23er2bFnJ4DkMZ1zTtnRGn7",
  "key14": "yMPkfw113DrYkU9vx1rz3jeZxAXisvzqkewyNhiSDsRv7EsgQ3NQPYhipHsLeJBfbSbpiwXecjASR7pQqEAuKxn",
  "key15": "2DusdnppwcGs4hH9GQCvVU1cfLAzjaTU3PEFqvZrmCfD2sWfEmu9LQD5LHo7YZYQTLyGkMbrqojgnHzqUbDQS2GL",
  "key16": "w32NxZGHbKaC97WV1bsBNnzBQPCcepfBHqdPfosjCqf4s5Em7PuGMn4K24hcxpZBbWVgjDWdeSfWQQGdoLhn9td",
  "key17": "25WVqFwod7yspsqcyTrT9Ev7VMXvyLfB5rc3zifW3QwwrowoCegp7rstDHiivuguPcX4z3hMC3A98CkphbmcZQwB",
  "key18": "2919Ysr1ATMnvMrQbtGT8p4inMZkZZn3DPq2ba4JDh8M4gMAbhKrjVuVKxub69gsXzLtURUAgLYRqy758JR9vWj6",
  "key19": "Sa5hVENK5pvFqdz3YwRmixghWa9cJUqJYt83yVLS1LKD6ru8fhwcjAxhqR6njyvHMKujSUfAdkFZgJEwR4WZ38u",
  "key20": "2kgXqgzRztvrv9zmwe4xqGoJyY2m4erSd7J8kDqx4b7uAHsNMUhFf2qoPyNu3xS7LkZR5soZhGNunWRSXVUSgLq9",
  "key21": "HeFck7VfWtNmmdVRYriQyQb4NU4tortbcLTVPt2uafUkEeVzEz4ESa7ppXbVBe63FdDtQZvBnCfjdR48sXfAskX",
  "key22": "3zYZNP6rXey4X4dELuSyNEuNeuuDvaoCEa9BUz99v9E8cQrNvV9gkGZUSjA3FiuborJbjxcnLanD5mJJc6pcsV3n",
  "key23": "3TXrcUJjkst8U8Ukni81juVMu1F4b6id13GQvhvicCgCTM31isnmddP1UgD73YyWRzWTjnCovihLUGPaYvv2wak7",
  "key24": "2UXq6qC5fRBvjHac5Df3i54PKZeoEqooVTwUN3CwHKW9JRswwwdnij58FcvSnNANcKPLWad1Qg4KuYgAZK9fWyPy",
  "key25": "3QMeupVd81LpxNuj92z8hFrhGd3pFmCsfZJdPFRVyhGH7B5HV4ts2uy6aahc6xCc3kofyVMmWHHMbYJTEFrbQqHa",
  "key26": "4cadDMLQGX37cTzF4o9mZ8kL9RSXPhEN5Tp3VdgydUUdwtTF5Hg3hftcv7DwGZk9V2mTN9eiTRUQdkTYWJuyGhG9",
  "key27": "5fiq2zA8B4DLf8u8pkhV6k7G8Sv2kqQSouQ3aU1xqxaxcF2TPnMaJL7mHVaq1VtW577yFn8tV3XxH9LgkWMGcHgv",
  "key28": "4oogXDF1Pe6mG5q1C2fCFZZ72qesw938zjoxBGAbJyxYZoS8v73A4Kn5A4UKDs56i8JJ5w4diE7WDPqoNfPZ3ArF",
  "key29": "4GPio9DYyxLWAcNJgQLDB2fdW29Luiq2BZWv4RZXK6hYKQFk3qkmx2F2gEga99saEWCibvn2U1apfQivcip5yMGa",
  "key30": "37gr5UFZttqhp7njkZ4MAorocKNhVpRQRFeofpFenc35nWqV16KDNJzGpJcvksipVEfEwHoXgBf48zkoy1tGydyx"
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
