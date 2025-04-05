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
    "4JC3sTNKoMvJTyvFkTcT4F9kaZSdrKxPWR24mQb2wsxiawHb488TSwQgmszccirEUVpFh9WVfU61KhfcACN4htuu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aktpGZddveFczDGCYL7kmrCcGiwv6SPf1Ba1hZiDeGx58JD6MGCMzwoTvkRtSB3ksHhq6XXbSGG57qxwmfVcv66",
  "key1": "v66KUQZbQ6A4J7seEQuPYphrXLeiXuAkJWfPoqrkt7EngR5WhLJcyfGxDCWEVevzYdaHvPLkx3EcBdwTSX1Dy4K",
  "key2": "2oMvxxd1wWTRAzdX3uLnQgZiXp4jWMxopsGRzTHVZfPe1TADMzSK8MHJvyY7sF7Zxzx3ZWmriDTHHoP7UUokFtU1",
  "key3": "2JGnewDvqoLBjZf7qduEY7qYSwcs6X4Ah5jaF5rQV8Kve1i24qcec5apVaeqJ2Svu6y7xSqJDgrND3Lxj83J3qYf",
  "key4": "2rXzEQeoyZmgRVBvXYrXhN1GUqsTq5M4qzLms21PFhpKj7L5hP3fKUqaS3VhG8nCutsYsm9Y9JubvAMNE4FrzCzu",
  "key5": "2vb2ZKbNMeyhiCMpKSZEKZQYcb4Qfjst3bACbNFRTFeDumoczUwq7sZ5jY7emK1fEy4MozGpvsjyEHYBEnMm1osi",
  "key6": "31FVUjj4VsdCvEgPNzqsr7YysfGsh85TsbduCpJT3keHgXmGYeEQYP2U6yoUWmWaX5VtDfksVrYD3FDASCs9UEum",
  "key7": "yFBaLpkYt9Vss3SzDfd31C6pXnUzs3jHF59yz6AUknwxj4pw2Xx1wqFEYAot4Xp67WGGVxt44PUzfAy96wiZW7V",
  "key8": "4RxAXN41bocnYzwEf1Wz22qHz6NhkZ7xCVMRFUGhFa47NkNUMp6y7ft3Se3zVAj9X4Uzs4qHgRawk2K5uPSyM7qb",
  "key9": "4H1CZZPtTkksekV13NLzocvCirum9wqA9z63FdHieN9fETpkBuLZtoEHQeo9Bimy4FgyDEaERkyagZV2E74arKjX",
  "key10": "3XAa3BG1MtXyqRfXaKip9HN1rmJiCBD28dm8ZD7MUqp9TTqPMvhN8B5pnNLdtJABJYa6Uz1WKq5gLEkEvuMsDWjf",
  "key11": "5KxtFZrmYXc8j7rjVVENKCkgL6EqbnGM39LUFLZmoHQi9GFVt4CoaZZ4yEYpsiTBatyyxc7bpgTsCwBUvwAxswZt",
  "key12": "593NgpgHkHb5M7ETRfJjWJijHJCzQxVhDr3ewhvMYk4NjwmtYKUirZ7buD2SLSN65jTetKXAwoQ8QF7hbWPS11qM",
  "key13": "46LV6KJTFS7sg8YprL2v6kxDaCX3TdAvBuUrtKwHSREw8qhFhH29w7hPiFe1LzwM993QVuNY38s8ytQjfgyvJk7H",
  "key14": "9CrtFz1B4mMux8EV4GkZms21q2gdezZECSTmzpqzxvm1LuwtUG9xPHveH3C3nZ1ZV4Gnc66d63NqR9exNEg45os",
  "key15": "2F9P55nd4ezXKQ1VJSxo4nzxVqmfEPo8WoCWsjWUJVrqWScqM8iidtfYoEZPPsVX8N1dqA12dmmUQFQAHXg5Dp9i",
  "key16": "5XQuLYUL6cXsGBLdxuiX3a5LLZEhPCKZ3tedoDtvVsjbd79Po8Zf9YNputjSnFDnv6pVg7awmwWeMAGwdHRCTCvD",
  "key17": "2oipCk9qhZomqbhiLiFkofY9dEmtfrZhChwNh6qCBXG14Asvc9Sn15ZijXMV7ErkX5uLnhaUvHGWX5pkkvh91NZf",
  "key18": "ddpLxhDe366JKCT9fotyaEnVTncguPH2FPzHwCezUt6Ef9yZZcYMgY72S1bGQFzTFeKhwbvegcNp5KCKKG6Dkbj",
  "key19": "zuu26X7PyZQnaZDYSFZHvmXWNPuVWS2Xxz7aEKsfCKEBPSzoYLX4iEysvU6oLNVCwmWRB8VetEXTNZzPpetaJo4",
  "key20": "31HeLYN1wqUgkgvX7BuACFxtM8c9Rv3qzy2VLbA9m2kJGBJLicaqKs8R4eK8ZEUT41mZWGzaBSGQ75p5ZjAzH4Fz",
  "key21": "mtmNwzYmtArWZH9JkVE5BH4WYncjW5TvBoxL21E1FR7VE2YxawjK6BJegVnQyxQYVUFQhYoV63F4h4ZMyuSW79K",
  "key22": "5KuD5immJkvGaoXEMhgEJRdPGk2txS5FYZ3WMrcw6x7k1ssQUUBAKz2gZ3iBMtcSddeQHw2k6zcp6ick8JnKLPiq",
  "key23": "S3xpL11QXADfqsMeK86K4eLUdLgNrtiUUeUqH2Qo94SGXJ8iKX9Rzd6m7rxNcDY1psL7qRcZv5QjTiRXAP7155z",
  "key24": "2ee99FceLxcp8yXTtKNASDb3pEYbSp7yjLtsjgPmoSR7CtRa7GCJKL9e7MVtuA9aDp8om4Kor7R5UJEskPYiaBn3",
  "key25": "3PgdXTNuK2vUnqVGG1t6bQzyy6prirxPtP4JrCwokWJEJpYdkQKWftbqUn6GEsAumTUXs6rQ45pHhGEG3yiCY5WR",
  "key26": "5Rxd2mr6wB3RQuib6gQPCCZyE4MTb7v7yQUpAZ72h2nfPkCqSfUhz2MapdJkfrVLY9QHRqjxWZzAbLHe9whbbP1q",
  "key27": "4MEaGF6KSWNBP6wGKT71fcdzN6uQH9bvGcS5PssKkoTMPy1dF5nDZtSRt7HV6azHPY9qbro6RVNk62nFxHossDCt",
  "key28": "2mRNkQ9b5KPmkKt2BrcV4jbGJJw7XVWUJsxThv3c9xNRsvmY5bxrJkS7cZrKMcMtw3ULuxz5DjKvtV4zECS6QpGA",
  "key29": "3kDbd5VCgVfLa4KpNnCrgTxTPMsq7ADKntwwVk7hjvh7Lc8v2Pm2WUpH4xEhjEvk2LSz8E2LtinD2hLrkgxkEecg",
  "key30": "4MubayPN8eo7fNUqGRmEuvLehYXtwHosyS7zs17u6gvwR1gV1UpTiQWzdL4XppF93oT5uMtgkpc6YkmDhRdxvvur",
  "key31": "Snnu95J5mGNaY8ivzK13NM8o3Pe1BVEb6Dd658FiFGQJg2SyMBKnVmLBpwRgUa4CCpoHZbwd3hLNHKw3ojL9DLN",
  "key32": "5p8fqpS5d69ynNvuJLSqSCDPLoTzedJqW1PCsMucuwHi4KUuj9Tfhxndyi193D6pX1u5t7K7CvfKcAzcgZgF8FKr",
  "key33": "2DB4rnXJtkgJYdJFqXJuPdCdZxifN9SyxSvjM8f3CgJqXaMBJvZVJAkCHGNtT8PjcyXDBHyK1dddgRYG7W6K99eS",
  "key34": "3b9hA11krrKRKpBRD1xaPA1kE2hefm51PQyGvWXpTWZhnUH6JZjU1TtfhZHVZNXbEjakxMK5KcZSXmxgUya77yn8",
  "key35": "H676yfwsRGnZ6ek7By57tpdXoQbxXAeJWBrzbQr5YjqahoNm4ZGTTxwfCtkavYi7MnkUvbNq7ZZcGQHSA9BUA7S",
  "key36": "2vqMxPBHpuzhkPxXUqeVHyZ5GRH85bBvnhZBXJdNHwiPb7d6NG8YzUMFMUrgpfu21oJeFsEtKCEG77LwMNRop2aM",
  "key37": "3FgSozdJ3YCoawcr2KS3mJ8wVzEp2L4pGWXyhyLbsaiWCk73sCPUftLeFsJGzHy9T5VrbztuvmxnUuu4HgL2sJ9y"
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
