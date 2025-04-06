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
    "4vM8tBDYcWp5PNUFHemEqfNcb4m6RW5fTdUTaV9swUKG1ijNUkR7dviUy6UGPuSTLoJ1HMYqieWYVNq1RZQG2i9X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qGjds7gK5WtxRbcfzJmXLnKYBbXKQWHRThLKuEzTgjw5FQ6LpHFf6m8nwv4PdsYu9yjcWx4LCQ1KsoRas7gZZUe",
  "key1": "29QpkjveVHfpt32fT7NNmyHExE3GkH42ZhstrHwCoHhmzfMVem398rMLXPJv53LdxgPwN4YNuMRsnTFqhuSXB2tM",
  "key2": "Ryc3bgXhsGLQ4ctHSbavQA72aCHoMqxjM14n4dzkMn9bUQSfgcTnpZbAgZrYSLnKx4zutvTwDsXCYxjbQBAFkDf",
  "key3": "M6y1F5ZVaEBTuNJcRC3Mhqfz9gfmtXegJc7ivuWKXaoHZokPzFM9HfBAD1CnyshZnhwent87awuAGjgHdVcSHnz",
  "key4": "4D47NBvqpjiyuE58eUQpdaG6PgGvuCtGVAmftAsw6CbaNg6ND4FRpRsnF96gqAXLPewwNgrCkYPqebrBNjECZFJg",
  "key5": "25vUFqVA43MgHvmJkvBfAqAdGErTYUHxen9YHjaDT8SuYWipKqY4h1qpR68QTEXtg8aYrKHRJ7uCR3ouyvMS1q3U",
  "key6": "3FtvKbtFHRFF5wSpDTqFaQvgEkxEKKtDwXGjYSqVRxw1b34ZYDHpkSv5SGU31uRFtKN2SghJZh6qSA2MQq7MwDou",
  "key7": "2YksRD5npzdscXSvJShDkGEtVfRJCheAMWhRBxEvk7cdz194Le17xKg1843sB3Jr4NkjgMQgsq8T9pz3227MbBbn",
  "key8": "5s9NV2xQFUyc2z9jqgEmxCMZ3dFF15ZYsodEagzQxNNBbpduKvH2efswWY7UGrgxm7jCvwTFFmNsGhNBnRxTVUxo",
  "key9": "4JhTuQPc6RCqtYuGg59oqQvQkWLUoGk6Ay4E983bP71h55QMGnLCUDtaFofpvvMqX8A5oCjHzuKkKr58K1P5enDE",
  "key10": "5uK7GoodqZYCKrGKWysk77QiLEdn1KsbRtWe4c8sinEgeXuAnDFkjkWAkf8fXfBCHrQY1xzcJ2aw3sPmZ4s6AKGc",
  "key11": "3ZE9zVYLQPLGupYVLijvnFc1rXst9Mxzq5NdPsukrqM2swVw5i5tAcr4rdg2DRV8PQeN2tHerwWxVhaCdvbBRJsu",
  "key12": "3ZZUUC7VGDM9HhE9RMygj5mrr9FLbDxFi1WMBW3uFa3bNZd1BfBh41kmqvVcgtFL5DEuTmDm6w5pKq7a1gTQ7C1y",
  "key13": "UM7bqxPF4E5Unqq57w48n5BQmce9G59fUpUB6jA9HSGmvp7d9sntr8T9N1rkWswSzxs9nShhoPjVXbacya1ENjN",
  "key14": "5kKptyEDHLMqaWetRpoLLYjVQTMbwF8drN7J5Dxmtud7tS47Su8J7GFaenMPmAVqGnHFbkwdpFBNtfbZxPUivxex",
  "key15": "5qc9GSzESVKEBfiwuv9UWcD3tsJoLukDvQ5sz4tMb8hLB8msg11k5onLpxUVGpLvgcSfdQ4gGyU8sgfGaQWArTV",
  "key16": "5HzDid7bGnVFKSp4ehaRzpMi8ZtJ7suCjUaihDgmLpx3sm7AjHBQvUDCA4oQX5keoacbfPev7Ksxxc6qgjfEXNFM",
  "key17": "4CwbkCJV6yyi3P5h6r7LVpSE2c7NX3BrJbQ4BR6ps2v5wu2a1AgJhrpAB3Js3rjMyksPeeQamZKEqBP86hiFCU8N",
  "key18": "nUwSzZMDVVcbih9odd3HeDtmAxxXKzTyLUmbsvSvJqjKZ5HrLqRPVUBNRz2YcsnrhaADL9HRAhPonwpYFNYTtui",
  "key19": "7sVBKxw9BQft44zA6ajjUnuXpBtX4PQHCPGFuwhRZxxF8a2s3GhpZe3mfhTSPM8MkxPsciZGRdB9QsRMQ1uwti2",
  "key20": "57SufBd6hd6BKriZ317Ur6CC9YReNY3pDXDLxiN81XeoQWZceD5xTXXQb9vtcmz82hkqDUfCDx4Vsc8ZL57EHaUG",
  "key21": "2d7KMLqZmJgGS55xDy6X97rS41BXMfcoXACaFoBDuNZm7T6qPQEX9yT5TH5hYvwvBS1QLzc6fCpJffSiEygn2PQ4",
  "key22": "2qAv3D6stu7uygZ958uvFQb879o9126UcWqFfJhpE1QdRPyPiMHMGxnnYrSyYAqDybjxHbhHg9tjW3nZpLMEw44s",
  "key23": "5ruUqHQfyN3T7artGPD6MgVDosT4KPFkExvdGF7t4cMamq71KCxKvJnxQkXt1jWafyHTaX6XyLhEPtWuFSddfszS",
  "key24": "7ADuuFyVH5vAgNbnFXgCRRzm5RAepSt2A5BqS5YUDSsTYMD7E17MuRAYiR8kAbbiGRXagusbzxNR24DvnkMAaQX",
  "key25": "5oJm2HcCYhu3M7SrGhBM7RXJmjzGUJHDFc2gNWsPb7jEzLd9dimQHk2w8LziRSqmdSrkQLEzm9yt3qwLDwJvQHMR",
  "key26": "2hRAZoUa3TQDKMWh4Cc7YskEEaLspibVMDfsNsLhr5MbeWK1czrJEk2B33hijUxw5uxK2PvuMMoEFyghoFSVAwk9",
  "key27": "2ZNHg8F7iMv7KSVuZSY8iShXirAV74FqQ2QoKmj7hfEyNt54KM8bGKG4px9AjSNFmfA96ZaegWRCUbdhfcUAUD9s",
  "key28": "2vsrv8ZdLAg3NDCwX6jhRNDbubetARe9BN8m2FtTgzB9XPsu7STcKSzUN8GC49NR5VFp2aDYAR6EHiVixbSwzuGR",
  "key29": "tuYGpZ583B1qMkZgfQKqkEHWPK6ZdKfgF7PQQ4UCv7Y2872AX3KewxUaKkP1Zc69LpEUgMkyRShX9Ef18vsacLs"
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
