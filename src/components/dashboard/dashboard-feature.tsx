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
    "54neHQdfbeLGkMB9XcbAjGeKSbT1cRMhhUpfqts8ytmbipAWW5pMzSXeT6xCf68XrvtPHCVTaQuEA5DtbPWLMqoC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vuRoRuv12FaCSHS29jKE3oFmqpvJThB1RTvQLyAJjinhyMAUVaGyAmMsrC3XP7m3PrHstTGZtGcq3miGSLhZCig",
  "key1": "3rWyZdU3ByztW7oAo9fWoX9T8PxDUt6mdxBesFmpiKT1SUfBXXBoys5pQV9jnZ7SRM4HRrof8YyGBG29do65kjp5",
  "key2": "5sQd6rjfP6JDzEWWgrciPQerCrkhSW7iXaksRTHofodZaZUgmzK7ZiD76YqNoGxU5pm156gH4LAYkNn1RfxaJTyJ",
  "key3": "5HrKdoBK6VjAVrp3XerJd7j1u22ypnkPoijA66N2r7dP3Qao2dVkMCBVVD42wHHVfUmVDgcD6SNJhVbXsxRTSTe7",
  "key4": "37Zin9u5cNEgDxDu7KZce32HukDyVyx28cCgQWvpb7t2jmf6i7zRqD8i4tPKGUBh35ZmKNAZ6TzXjdQaoyvgibNd",
  "key5": "2t82ohRnWHvQ5nqx83DahWsG55E3HV8MV2kUx65vD25STwzf8KdTcPAyYSwqCLT4A3E3dECP6eBtWPsUhAupdaHq",
  "key6": "uoxMUJMdv1nwZtXMEVD2HepeoYaQ2Fy5Q5Hzoq9H2Dx8xhjSFntUupxe98Hw1znpdAuTNQ3TvMHx3wm7KmqJNx4",
  "key7": "3E4cNGWmh67A4m6z8QXdAVmaqaX8RWZyyNEgjnZpNZMbQT54wveY9W5xBbq6Gt66kyF9f1dDeUKi36aebSa2DV3o",
  "key8": "2b6WSQdqY8zEH3suXukx8bDjDGupjmokLS64HUY5b83fkwSGWPTXUH6WyzCHJ54u9pHM7R4caRKPEq7j41P1u6V6",
  "key9": "zg5mXzxaidaJdv7e8B8gx3LqiK48mRkQ8umd5xvWFi15c4zZaJ1aKyKenyFmZJGs19gaceZFBxu9Mw786Gxg7TJ",
  "key10": "3zEgsBpwDUjNzvekKBcBF5iM5SbbcqEBCEVoN3wDnhA4JGyZNwpydZwTVjJ1twNVpSzk2ip2fvcc39k7aUJnM9Bv",
  "key11": "54sMCcqeHNttd5kELewvB6raNUGRhaMJG9t7gdajzyZP5vpFDXhSj1FvVrb7afERddrgpZsj3EoVeCHpK48XDh8F",
  "key12": "5a2hzazaRBuY2VvYV4ZHeY6gzk3PnKpsSu1vXPL3GdrSztnwu19RDD8mqAanKqyQJGrEV4sqjieX8B2TiYtk2Kpr",
  "key13": "3AB2uf2iymDnWh1Qcnphv2EZiL8fCw94ruqi2gLiUbLoLXk7KepNZThGmxufL7NCGCnmxGRsk9F4utabgYBYotLr",
  "key14": "2CVdYiB7RNp2e9Tj3Ggkgsn5qLwU2WMEJvZ3u7xnWLCA6on4okLMKptCT8K654tCw9bmHtaacHx41MowmH6MM2bK",
  "key15": "iqVv63U2qdd4qGj6isz7rJAFe6bpBS9qZGfLPjZTY1nAp6F6UdMRN97edaCzKHNXuMmpoSd459RtPmhTB81edBb",
  "key16": "2NaicDjJfwhagwhNQUzrPi87cFb3PLDG3q4xWh892bBgy8rPcCGV88rwBP6fLyB7x1rBDUkxuzXqqed2Fweihb9F",
  "key17": "4Hau4b1b5ypJj4WwKHqUzJ5wSF5FVkpae1TeKXPy1gydFXX2KMCrzh3HndoRwo7bJtYjhZjsJnxG6hmRm6PTMGdJ",
  "key18": "fShF4UayFgoX1CbVuj4t3FGtLDy3Y8BebDjqyhS6gTLMx15HohBsR8fCeJaJbETm1v5nU7rxL6t3MJJtzSTjpZe",
  "key19": "5NvarSsQG7YYFTJfa7Ae1MWRCMahRXXFTkbK3VEF5AMe8VcTgTwmsSVBQaAMfwvuFQSbTsDitLBCz5Yf3dJK9rjQ",
  "key20": "3B1AkJUtVRrraeZHFYkXMDsuZS2brLeRL4LAAVcJjAeusyKgAtPUvFb5KkdbUdbgUbD6pAEYXarUJ6yawbaA4Dmx",
  "key21": "3nsyTtqVH1pGiJQbnyp1JhKVicKhhnwWDVXcWFFpd3HtZQinxni5ZHyBf4eLMTHM3xE235EqHfwcZRt7PnZz28qq",
  "key22": "4DjxYPQJqKBNy1bVPxKRoMHGZkeYYST7EngdgB6TFWt54h6JNB5mHLbQB2e5g5fSHtgf5ybGRXEPw9jkHWDf7qKN",
  "key23": "4MKkW3SasJvfeq9UJUS5rAPPFKsPMb7VopbUGDbtxLd37f8vPSJQgFzzTVtpNmJXekcSihogo1enVcYeaN5N5U4t",
  "key24": "3QdueXE1D4MtscqGCKv8A3pqXmLA7u7ZbYYsBAAFJBPczntYPoXgvEY8dQsq4Y8gLn216vrqe8ipyRhkwEmX142Q",
  "key25": "mfb6DuUDv3Fe8Cn3RiTUPDfa8HPHF6Y4Ciq7knjXrgTGC76rjb8naWR5xSwQ7qD6QXMCSh3fLZ3CbdtmadS3HJ5",
  "key26": "2AhuSN9KEAAatcVkc94fjw89c1zba3iBK5gBSJbYcyWn5J8NMe3UPz7NgaPpnN7bMfTDZwjFscnfB1pBF4MDiVXd",
  "key27": "5KHDZuy2JpKm7ECQKxym1NzJm4ZxLNWATAfdEMtZcXhXFLPfjR12CbrmoMmDxZhdffM92Jt21juLFdtRUHcvhmuH",
  "key28": "28EAhjiQd343asGi54umg3NRmPZb3vsRzNpyCrHVm9n9w3ku89dG5mcZLSQSERRULxPKp9wJhAtbsmzrRVgq9FR3",
  "key29": "5Jfr3xcSC3HUUZkB8iCiZQEj8HfEmVqXyYHFnw3giXoSjbNMN9hKEkrXbuWDbFuyic8NScQnUwUc6MSPfzp99kwR",
  "key30": "XnNamPhM25fg35HF1Rx9QHrLdxUegz1ABoDvWbzn99LQACkKvKUwrRJvtHgpxRTNb1TuttYLpXAzcS7uTk2W7VR",
  "key31": "ooS6Cds1zx2xmVbnsjxrV2P2qF1bXA6kF1ZxBZ4eidAooo2gmQch4B55BgZT2NFznzfkoww8nTSLeCuSGr2XqmF",
  "key32": "5KfaAHbEkCGNzpghHE3ifozUMEnitfeXByWDShaQGbv4ZayAFX8LE91SFJH7pi9feEyv9C1CEsHAzJgC6ERFCcE6",
  "key33": "4dvGxLcmWHECfbh298WGDVDqoxQgYpjFQoKWvRsqhWFLo2zJTYgnduxbFnGFqDDS3zPDEFscX79XJ4E2FwJxpcYj",
  "key34": "2sqaq1BqA4rSR1d6XJW2mD7WJL4QpaUreWqTxiuuctE5cvat3JbFM2XJZ6Kaao83wPmfM17FgPtkMxrJBdXHxBM1",
  "key35": "nY7ZYockg1CBwbodUw7YCAE9az6j5RZEyWfHfoohvHGG2ks7YMjXpZepnm2Bkuoymkb3q6Zs3BvLCgBtBKUv9zF",
  "key36": "2DCDHzobuC5TypSaybnmZnZ3fmEhMWjTU1c5MQ4WdksXzaqknbJr535yTdpFfaLj9GedTpdwJpem2GaT4ceNLeXY",
  "key37": "eXA9gY597H86HCxFTGK9CjEgEviDoatpZk5yJeF57Ufg3GSrzq5kuxijrufJ3mLg9ru3RcckRQw8CKNFTHrVSLj"
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
