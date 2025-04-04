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
    "4swhV8M8fMHunDdzQSGpGn7t6zn4z7KnzB1NPgZWFvuzT9jrNckuYiv1gw43cZaniY914Lr7tfvhXRQ4JE3E6QwN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54k426hjDY6b69oXTKFdQ1cbDR53Yg4SXUhu4gsVPVqdVbWMUZaQP8KsLPS6MASRtxzktv51n1njx6Yak3wiJmDB",
  "key1": "2iQ6w66gaXtkYvsNnpeRoHDXtGiW3GjWEZynKeyza7NnAy24PhVLovdDVvC9RUqBQ7bPtjy5pqLjp9NEnoLBZK3L",
  "key2": "5hrD3paSRaix3dkgGRQBWJry1iBw8hyMh2HTDT2k9GbUWNc1JVykgDrXzCemc2CnmM7ZbdhpjtNys6FqcpabFdV3",
  "key3": "4PMKDDTyvGAmZHqU8UtCwbhPW4vTzpN7oTCo4mJZ37yEgYh7QcefTFuxMry5K818K7oMuKwtvmVXN4ifToUCe2Dt",
  "key4": "rFWqgqXt5vhN82ijFzsKP3Yz2wcSJcRxwMrpvhzH7ATSjtJ3Zt2LXP2ehFYkxbLgsHCDj7dCBbLAgt4qXwR53Df",
  "key5": "5ZmofWQ19nMJBZtzHFTyMzRANXCpqcwZfcjiAYQC4h4EykguTCF2nQjZBWMTWXntA854DDutg977nyfLmo4U7dEj",
  "key6": "4byEg47fXgkTZP2PS3xGiihuRLD5CaebxuiR1GbGwTkvJr9VhFjnxaxNzhgivn52JeVEXhGaZTckHRReo8bHCXLN",
  "key7": "5hsgcmYyNgLBmtYR1NqzSLjpmWMMrQQYdWsq8Mtdh4BGM2jmBq5k2YabN76E4Ge5u8jfwY876UwrtnpAyB9eeRjg",
  "key8": "2ZfU3zaRbqMsVKsyGrWaMhNrdxFQCLNbV6MxXD6k7zFypynUw8H5gWNujw1pXtSocEjLY8xuPDei4rQuGo8gXUoF",
  "key9": "k8FAZkCZ87FRi3ZzAZet6B9Ptbtpd6zwNoUbTSqS45UKzHzjSLpMUdcpdQ5q752rqv37KMbfrFBPdJmvhbfTKM1",
  "key10": "58WYcNUU4X1FW6KP7G9oeDDHGcAeu7javS7KG9mfXmtn8jAzNHASX4KAiyrVAqvPEvRW8bsaiECcF8Pgf9bwwX2w",
  "key11": "5oypvYcXLKVSswL8R1iJD82hKgcCYwe1cW5BzmohYm5zcZU2BM1CMu3MKcgExpHaZPsTFAyb7sSRNt6oJPKT5VFc",
  "key12": "3BxuS5pVCAkBFTgfQDMa9umPSkeb4ptxvrPiCXYA2UGa6DfUYczqPDdD2bFhGKFsNE7Sg8THPohmCKjmyZHLA7EA",
  "key13": "L2hAXT9aDbA1uHbCjEWJ2kW3yX5RG8UsCjgU9t8xNrR4P3jWcboQtUAVA4fsjV8Wig93K9cMCdwaGKyMPzCMQ5o",
  "key14": "3yusSNmxtzXCxuZcLWn35vEaz349FDUfet6BhLw4menmCxbzN9QHidZX2DGLQscghoSPaQdx2HcngpunZz2WBPYp",
  "key15": "5XxayfpV5zxDvy2kTwrkPUPeQVCJw1xGYyPi11fuDBQSNacMp38Cisv65AjLJVbqdSG1kawvHLYK92afBp8ug2Ji",
  "key16": "2EpyPRRrPyfrkFRoxsJnFdUhifCaiAewjp5mBVDko5mG8AMfFmAbxoa9QhBW78AhRJswoK1g6ZrLMbTsqBLagZE6",
  "key17": "5qv5QwVRojX5rWmB4bPZ5Tx9kM4EGokTgWThhiwZ4fq9ZpqqNMtHrSp1erWsX6suUC5Agvsn7nFNWMFLuHCiVmtH",
  "key18": "9dmgZ5pG1ZViXi5KTEzPJVo9fCfs1N23a6dTo2Y4nuGUtz5KR5Hc7ooyHQr7YP86wBsmXxPYQB3Bc9L8WaFPuby",
  "key19": "2Bcev4mjYUnjeyo9w32x3fKmcDsjaJuAJUjkWGPa23VdwtEPSvsdjvPjJtMMsz3QCVpf5SzYvuYc3KD23TAo2uTd",
  "key20": "2vf6XmNEfhoVy7SfvRu76e3QABYJZmdaqtCLPkLPvDz4WvWsce7MoXjTiWrgKMpgWEvMgWozZVGKxacyCBbhGwLQ",
  "key21": "4T7drYXkqeK6ceGdZey9C5TQQkv1zDuGE4cCvLG1WfXzMFGj2ijoDxsdxvR1MUGFo8BapAGjrooqTvz3UnQ6N7Lg",
  "key22": "3p5Gj6ZhkaZFbT6e5XLtBfkJry2iRWDm9xtuF1ZNBxWwCSwCUWfsLaVzH166DUZr3nW5RHho4QeBeZ3Rie48vFtL",
  "key23": "3nkpMaWZFzwjPUp6uSTjzTfWFrkUAWFvy1rvUSJMUFv3wKUouWwTq4MhZ1Akt66j3nUX6BFTwzk43ZjRMjPbbpDa",
  "key24": "2ZN9AxNNvKWBnoj4syB76qvquW5weQQ4CzjgjuQvHDA9R3CK4a9B4MW8ZfkUwu4PmKsg6RF1pLKFiDi7yBxABCjM",
  "key25": "5aXqFQfuCKCAwEkGWzzn2BShkKtpdyrBGusKwfiTUfMMAyUf8h6NodFPuFgfbsMD3iqVQQbKGML8P2249Ms3WvFo",
  "key26": "3R4jAbvpTcx76ZRnKRzTUsiATktwrAyJB9pYpk38WzaaeooRKRe6SJmY9vZ1n5bK7CoJPmxzhvJysZBuZzthhADM",
  "key27": "43hGaijqnA3qqMA9mdBUbhQBLBjdca4BBcHLHzvgusYhUYJ8X6VpLextJMq4ZfwaqURGtjasjroCjV7GDUnyzBjK",
  "key28": "2Pstof9HbUpNjbZHrUR8Tyy8AXfCAoapCHmFQb4SHicpRKF4EYZYQgr1Y7XPT8rYjEhE3Ngv8s5wCd7UrbfidqNG"
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
