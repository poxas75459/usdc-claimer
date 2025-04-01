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
    "44quLcxM7pfLEabDHyxk4bFh5zbyL2oJRCDkS9E3ijCL2aGB8vcWQnigepNMZiSEionsi6uzNoFxARjPh2zspBuM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WiN9pLs61LLs6EtfyivfjmLsQJUjfdzeTaqu5KUob98Kr6axsQ7ACJTsY4eZ9QqJC7o8LtA9JhVgEmnm4hqBVaZ",
  "key1": "4ojeSGDdZ6rheVi8e8zAiFCoKBYkvY69LL3Y8TJBotyuokDGqU7tcDHo1aJFitc96pdsy5baAjznYVLXyXHMDLNq",
  "key2": "efS3gaot6k7MhJMrSUU526qFQUVop44mjJesqZbVvyFGsPQm5JAow7SUfDxiw8qNywNPrsrixSybTtRbWPEm4gR",
  "key3": "4r1jXGpkpgxdnpYJNyhyn4MxKwVytmDVhfWX6vZQnZZXNW931PasY2rvu5nBj9AH4v1qFPzE3VzkWQAZMXCdMZAc",
  "key4": "3pZ1FYtdEWBrHQNKwXmCdz2Mya6k1UMcgqpNcdnfU9FKSQtui9tBH7cMaieMb1VGMG6dwgWFPZxsDJExN56T9nxT",
  "key5": "sut7W3FfbuqYwYNKsuHmpTbHznN792LfhVvsPqyDKDgq2Aa16U5YJckhYuMNApwoQPTHMADCDrEFiP7yDnab6Kj",
  "key6": "HeMmxD45sKCuXst8VPZ7Et3Rc9pB8Q1CHLRiMztrnGgKU1ZSouWQX7X9jgr97dh89wWFqv6iYcn64yFHJETjf6p",
  "key7": "5jehxitXK9vmvCN4Xuc4nkup7DnVM8Z7BKKQsPvmvsLLoxkx5A8zka8wrLPR3mwhfuYmgXi2sFd8VZEDEBCbCAhZ",
  "key8": "5NhyYWGDqQhJUPkkvmq1TwgyYPkgwfW7MwyFRt7BGNPpWQ8Lz5qPbwNj6BSSuEAnww6DtwqaYyQ23gWcaN51UNf2",
  "key9": "2Uav8FiEYR6QmQ3fiU6GkvFkdsUPyBuv4DUXw7VWQtFysY765zug2kvqZwnHtdqi6hbgvcgmZjB747bZEb6YFTtt",
  "key10": "2FbxhyDDhXEN6ArjUKk8zyvyvpt7anG1igVp94HDhngbdkNa4T4NP4s6FjLYStow1wJTu4tx6EfTyxg3ekK6txPL",
  "key11": "2FgnqLiuB75xb3ghRzdQmvQEqzTSSVbvGNvK2ad5Nh5AunrZ4PMr3jaQBHW1UxnjrmKbQsHZdq26A4rdTmp3HP2P",
  "key12": "58f2XzdW2XRzA5qVWMFQiUwyhfNkcpj5h2VSoYaSJUbBat3uMQcBfpyhhbsFEAiqdHJb99uwpYZKK4tEP5sKfGtQ",
  "key13": "4syLyGzgTFaCa3Duk1yQTM3oV3mcFVvtgDCyhTmFggTz6wAWDvX4Yb7uYWcXk1UwHUap5RJEmDxxk2WxwyLqeyco",
  "key14": "4YAfWpixgLzHHewbRNuHrvXLXEq3WvoBCNgzCzBa6q3zAPZQehhwMDNEtgrf4FGdzyk3c7FJisziNdzwr1MRedXd",
  "key15": "2tZoAdkjMPXG2YFR4KAfYSnkP1KgVZP1v2r6iY4qVbn1yn2qNbGtjAbkUtvPDtx8pT51ebqU4kdL4BN9wR6o9aH",
  "key16": "2FmZ35NfQH5fSKNsM1z1W14gHKsXnHN6xFwYkhmjbRSigvcAkbPQECFzJLTTYPwPvyYYJAoQggww72ogs45yeVqP",
  "key17": "XYAVNi6CLRxezsne6SzBEyKYmECJfrwqS8f2tf5x57Co4z7BehmLxh9DKuGmfUrRpcFRFUv5cEBeeQbrmkUrUST",
  "key18": "P5g4N5tV14L8L9cuoLdPnQaEZM6vVUFDjWXYkzmSh1594FpGVeXXpwfYuinFHpaFrttMRY8pw1aEcK9HE8gKdaZ",
  "key19": "2mgoFNGyc34j4C3hzyfhjRVNj7BJ1SuoyEJiL6DLSvLnTpQjxwkZyxtVyuQgUTd69QvHppdEhMjQmQXttSqvqLpY",
  "key20": "5z7eoyij9TDCFyk1isb8qu3Qmqnh6fTLJqiTsAEFqS2rw3vQY5cuTUnTt3qnzSwmg5RDDCaq8PRcHPshWjULCuba",
  "key21": "3KsEkYtGeMdKng9waSK7KYiqugQg83WNxVWDgQ9Zw3Sov3L41LtgLJr2AcokmaiDEMXR3xyPsx5inNbkySs9qHKE",
  "key22": "4oBvuGXe179NhJFbEkp8B4DkTD2ubXVZWk96nghgfz1P9qmZwkk8A2Pp4CcBtKm6DHEXPYvwzKzJK35cCt19NoyD",
  "key23": "3YzmuXeMfTkuNep4aqkNk4j4UCetmtH6wfbVkaXBzLzR5QtPXFirC1BAB3BMrMwnHNsrksgE3Usy6ruucLDaPTBt",
  "key24": "5g9qk9ZUrx4PZS1vMrEX6rh8iNdvzPEdd4Fy5nMTtxS2Jhcaz7xU97mLNyKyaBepBgu9tUZJRc8EEwFWX8Bmz8G8",
  "key25": "2vcn2VoLikWaUri7vDYKeRghGetTXjRef5r9mCR8xWPPgULXUMsrTThdATW18tKaVjmuLtAvW1XZPRK2Bu1h1wPJ",
  "key26": "5VbMaVAzGv5xWFPzFD1LHKxK8d9Tx88aFH9Q2y2KrJhvqfjZS2FKNMRi35xKMKVL6yJ2Nv1SKsGtCFMdfdVwwZfn",
  "key27": "2hDcFv95XFcgXzmdTm3bgbeCK4zqHDRB8Q147YLzcrUFL8P8KvNC3CGtnbp5u8P3dHwcoKWi9E5i3NpLEtriNP4P",
  "key28": "56Wb36DV6Ufv354JpoaRmxpVq1tZpwTw4bzx19QjZhZHzNAcCyZTn8M9Dhu1BCQQAZL2YW7AoumStLnSZB7tXmnZ",
  "key29": "4LGX4VHApco3dnnTWsLWNPVdCr1nRE7Mhz1ZsmndyXxCMXECoeByKqHsDsENd6dS7MMZXYT5nGisB6WhrcifvdiE",
  "key30": "2nzda9gUQkA2ZvwEZKzZjxiqaBkdnyLm5agL7n2274sD67CYDY5o5VdP9ou6m13ER41LM5xZEmUkugS2VRwRX5g9",
  "key31": "2kFbLnP5wGKkiF3FKMF4iryExWvUfoeqZoTA2XHohMj327QPBgTLQ3hsVgH3MGGkkhiA3t29QDSepjnxoVTUSvqu"
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
