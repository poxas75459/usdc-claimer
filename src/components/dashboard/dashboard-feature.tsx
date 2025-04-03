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
    "64uVYmfrTG3gREHopmCH45W3ZV7aUFBh3tuCBHhqSxuLoQ89FFUhoR3mzKoanuW47DSxatTcwgdVZmMWGG1yAPFL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63NPnjmEBkPyBvcxt8fMtJiofXKq9NxzDL7cn2aKfwdmVNvNsmPMF7sraepwPFidXKfPdSYqu2brTpty2RJRrGUt",
  "key1": "fNrzmyGvTSuy4WLoEtu2kJ4odqTkAPw2maVma1V6VSPUXo4hzbRTMpBuM1PJaw28yxuV1nz8Tv41ArcKQRmg6wT",
  "key2": "2AC58iZHnougsddpMv7cpP25i4Hc5Hr5T7uEFgfERZdzfdRpJD114YV2J4xGic4EW4w4WmPWjjG9XPivtY9GfQSp",
  "key3": "5pP93HoBMLcRm2B9a1EFH5Sz8L4GPErqqkBSjxLWDA5mzj4tf4KWAQ44WgD1GMBu62dbemPPTyzkXRSVftN7RjGn",
  "key4": "29LXRNZBmdM9YBkuyqqrhJmUQaVSRP8rgGzE4j8xiy9nhhAkFra9tLNiMgZjMnJ7GPyQH8voKWXVZpW7dheqFr1Z",
  "key5": "4AUN5KoSCq6f1b9amiwpyKdhWY25UQ9DnbEDqCm3d3WsJd28b4MjrSc8v6961iZzabQbxAwQJPd7T5sFArKkhFQm",
  "key6": "1fnp2zspYD2ThK99sv4yDZkfWZfkmhSmq6t7fqeKVxSmXg8CYSQyqt7LYVEn15Gwj3HvNqzm339TXHYD9eU2pFa",
  "key7": "3H8rPjySBhiR6kgVFsLtQ1teqRJzyXzhW1GggkgZKmqqdgYSXYmVNB98VwAytWrWu4grJQzSbJ7oP1Lv3wWfowkT",
  "key8": "4cixryAzRrBEy5GFyCNA3i84zzLKWujsfkSVmo4wzmsgeb5vLM3qE4eU8T6cTvZyyVsy5warv8Nyy11ySGUVRtnE",
  "key9": "KSqUMge9oou6PrVJWL81GSRCdVD52Au4GirTNuLyyooUnkNe153er3Whd1YDR7Zi2qSTFqXCUHx67z95PX6kMBH",
  "key10": "5MDE647kFt8KC8KbLhE6CxbUJe1PdBTG88Gq7WVZcdehHjowmkXyCaYkiaBX52oL9ZCyQ8scbYRDZE9ym5xgaW23",
  "key11": "3ArC92D6dhGfgtLc5AtTgenpCqKUXhnNjzF9P6dFoc62QeaGM44h87XSo5gqFEkNyuMkb9uHzcx2uQWuRRAxLcP1",
  "key12": "3zw9d77dQ6SvP87VGZfVeptEUHCNDZVTM43EmKe3dKMc13gFUC1iiMicCYQ9zzLTsruYCPo8bXAQqbTsTegG5j9a",
  "key13": "4YcMCSjmTiLFyr2rysGqfiD66YGeUfwpNCuXZ5pKv2KyGr9dNtBAKPNYfq8CWoS6WN1TH3HsNKurUu1Dk624VyCJ",
  "key14": "3k8pJfyTy3B8RSXxQQfBWdFNkr1mku41cBYUQG1wPfNFpNLTQR8wiQq3g6HWG78AwjgofhfWfpgJYiDuzmuzUD4A",
  "key15": "WR3Eyyqn7D7y6hCyoikHyJRHpREcYdrQRryXo2wUxQ11Zc1uVaBi5xQnMsUWFLXiRxSivfgJbYTWGaJKisD77TY",
  "key16": "43tjDNWwZ7QzUAPyBTPVMfBnKDWPdHARhkFSd5xqMtsHrUiQDc7huwCWKppZ2AUK7VfRQkCrJHeBVEMSzACECMap",
  "key17": "2WbsAGCnZU3G2s7mpyqc4VaQw523vm79a9QCyGpu654nArMYJ7rSkL6aTjDAXJor3cDqHrtyw2f9ZMJae2WXs1wZ",
  "key18": "uEb5oA2WrSsAbTwpQjLLVUTgz8r8r86R2XJ1RucbGKW4ueLteD7XsgozZUa3xYaaBvM3uAM6z7TZymFZhn6Hcu9",
  "key19": "34k3RzjCcLAZYxHxanjYqFDZcJzYJ6ncZCF8Yp21kAHAZ6eP6N4kABwCwyMJoVXJMgu3TNdocKjoT3C9FH1Wx1eK",
  "key20": "4dAiXoegC8WdRgtga1diDSdDQCVD7yvXo3jDW15uDLxAy7mGHR9Ej5tncyZTKJt7uuSNKehN3YiztRZT3DdLN3Mv",
  "key21": "3ABg3MeQ2JKurWADMq3GLcoFc2pnwsJUeajYZ9m5YVANFr76qnG3h5zECWSdgwNuNA1FCWcrRQ5psetkVDgxuNY9",
  "key22": "519Uvky6ReSb2bbRJxLBBSriLSnL2jhwxWZAHuz3jdJRQhEiQtJ2C7GLkucoRSD7V1QdssEcqXpUnfRFZ3MSctTv",
  "key23": "4dR2WWqocUJgJJxf8YUq5wUZFxhNijYBmnpVTgH3kZRFSJSiyQH49JnGu5yVvNxtFGGAZabUSKqnoNtgWEvuhBob",
  "key24": "5NhGXh78MqryNkCsM1DgVPJhu1kAy4X3KQRw7T6t3W1X3LqN5HqWxQAiZYLivFeKxiCqtS2Tgt8DWm7AiENKDfFC",
  "key25": "LRYZT723vKnJXMJvEzQWaaXbXRcec6NSHg69Z59dxWZTjChBUT4UGAPUzkfBXRE1yCLXPaHU2QYYLF5t4cQZwVH",
  "key26": "4DuR5nxRzbwi36W6mQf1iBPKyAUpnzWyKaBcZZdhvFaiutT8pE1T2hCjE8VgWEkETMnJGCwtMCi7S21X7dGrYH6B",
  "key27": "DRtT5RKq6KmYcstaKSih2BUo29hPagP34VUAnwWCew4qXRsNviE28zLxWCTDjtoDW4hmQJs91iQrvTRVTbZ66dg",
  "key28": "2nWYtHTGDFPZdEA5NuVcLTNXzLCQJZDNWeXXzXUKjsfh2ZoaDuDXpodWGarkj2sxSaRREEbnWUSbGLyMM5pjYYZb",
  "key29": "22ktAfSHx7WbJH7EuRYrghpursfYvMZg3TdFm4nzURrxbMM5pABPqC6QEu5iUXu7ocXK6DB6BeipY3e4Z2ixhoAg",
  "key30": "4zEmw1RN6zRwRbGQs96BT2Z71HYX58stp3jkGYRmPwu2ArNgG8kiJHAdTX4s5SRs3US9V6hCCRUKsFVGWu2gqGHA",
  "key31": "4TKJZzfg8QGADuCs1rTJHNrbKsNDpqcaGqn2gz3jAMJAN9xiQQThn29ajY36zCVQMuTFywnVPiKorsVqCkarU1cH",
  "key32": "3uj7HwdN3r9qqButve5UJmq6j6gCWE8mhDztEB41R18ozdkUioa4MEJnxLqbsSQEf2L8x6tX5e4SMz6jxPu3utZt"
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
