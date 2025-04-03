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
    "5QvJpNC1orsuP9FTydrfeXZj6Wd1PbsDRhzSn8Go44cfvfxLaP9ha1jLf71SLo4PhjPScjXEAUezwBXNy4ocUESu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55i2kDDBK2enwCNT8QmSNyhkCJakLakd2jztHpmtmaUFHQNLgKpDJyWZNVMxru8f1TZwPJJU1eCrKRNykqX9C8Yx",
  "key1": "48PfSaqKuB85hZEG6MXyZcAKskPoof5P18bkYZzYKfAj2DkMaC4VxboMhBerbRVJGTgFiRYftzvQgDyJbxurgTrW",
  "key2": "4fMYX91VS5QaL3d24H5Ngmo9KbHtED3YVQPRrhboahQFcVZwxeuMU3Z562o6Jx8vdywtGAZfTbnDoMGv5SfPe1TG",
  "key3": "4SrAjBCShedndxpw4euHMHnVpGZ5s3nUKNR9CpSygkCJL12vfbkY5pB4FRuZTGJLfg3PvUwADgWErzxGwnw7YYYq",
  "key4": "4xQuQvz6HQA5prfJsWzxa7tcyAjMfVnWPDN8q4ffmrBaP5yQF6RmQ9dmKqs2FoNf88XZwbZSCf4EAmH2MgfJpGPV",
  "key5": "3xqAKTYNjYhXrLqHHXBLThKoMZD9E4vqNyYWfGHGjCGreXSBGVvXfhtWseNnFZWJiymxzqhPGvrwg6CMc6rReJQL",
  "key6": "2dB7UDTxam53WydP8DTnjCdeJRQir4vHHyyt2gYcnXEg9QswjFQhNwb1LBXNwcaDeExojdLHGQVohdYMQ3LtQ35M",
  "key7": "XgtGJ6ZCQKvzTDNi6XohzgMSCKnDuv8yWeUS56hqZsGqN4Jgk3jm4HRBf6TZoyZA89KYFxHAzQG6p9UtCdukCqP",
  "key8": "4mgPyhxa6QmuErUz2jJZiWxgn6w7qtHHbDUJ1AfkHoBqBdPDGEoCjSvoPXV9HzYzvHpaLyHmeEu5vASiZYR1177X",
  "key9": "YjuuE1ePVMEkwYEsC5YkHmTujXrcywFZwuXq6RHucjJGUPUfSX4XExW8NJjTsvVd9eMbpnjMqhy4dyg4fBRtFmC",
  "key10": "52ubp3rqbcV5osAujYspZ4MmeyfxVdoB8UrJacQFaXgVgfKv9isnaJnxgsYNiVgFfUTnpSKNUXnT38BPXLkXGb7F",
  "key11": "4LueavqWv7nDKhmX8nyfhxJ22EVstAPj8nBQ6T58R2KeibRjtKaekrJfWz22Grgds7oXBzhoUizE5UXNi1TNfDCG",
  "key12": "DBs6D89UE3fmbcDNz6mLhAwcGidJjBG4eoQsrLzFcWazrGBLcrqUqugSx27Ve8ZFmxDiGm8s16HWcuLDwxFnd4u",
  "key13": "5MgD9omonogbf7RDtUDoDFvpGU94AYtkDPjVVjJbzXxjntV8Gm1a525Fpk841yV2V8sPFCzD1W7FFCfhoV6MGdxe",
  "key14": "28aJAZLc4gr48QuYcR2oeiA1PkUp9ZGeeyxSgGbmUhuJcCNd14B3SRYnVbTJWL4xXVUfeoxFy3ZVqmJBLMUFnszd",
  "key15": "348afib8Jq1iy6Gt7sSdo3GBgTarW5LWvAAiGQ77SG4o4D5gbFtda1Qmwou8eduvLNB4MhxyJcUSSd8c4Zo4jyJT",
  "key16": "HXTJKZEVZk1hDLWLzkdxJvWZgDUyvtqg8yiZZQHCRZG5QDECHQejdZiSUdZdEMDjLhCJxJwM3nAa2fr16vcp29L",
  "key17": "3QzMX9XwKhxkrM8V84ZT4V3JsHB39tfxfW9D72EWVGfqpx9kAqwXmEjEw9jd1q9owjJsLSBFkyrsZAmDpvf3eqEy",
  "key18": "346odJ8S6pZcJNop3WTvj1oaMB8cYbhDSr4nrZxfXDtMkYBpC7uwKk18rxDzW5gNwwGYusocVwdeHR9aR4nhnykH",
  "key19": "2owvKKDW6kn8MXjWTwvqJN2iStGXSc5ghNQnGgLZT6gazP2soV6eoWZtEkXH1m68kSBT7kKWCXMBn1ofwSnDAU4p",
  "key20": "5Uz6e7GxoeGfacYymaVQd1H6RaBUq3Cw4QY2UUtzVCVzH65Aywyz3383NCDFesEPKnNqFVgtYGBNGVur1mr6Shv",
  "key21": "46dBKu8Q5B6uYnjUhTKYufpSB7GekyBJUrj1hUvtTvDArUCzJnLAeLqdN1DzXSH18RZnQkUC5XfAjVb4QQLZQZPU",
  "key22": "48t9ac69nx6JZb6zDkKYCy1h4WsnhZ6M1TArXFtA1V5tdW91gJGaNYmxMUk5xxhtdGqAZNdxx4PKnTfSNyLhyTiY",
  "key23": "3452iAG5qjLEHrcPj9etPfLVTjGwSo1rYYD7XJDrszotr3zxunw4YypTGw1vdNftbatjMNzf43c9hXz5QczYoMHQ",
  "key24": "5ctcEkE2j85arSfvTBTqr3E2q9phE3AM2WARYXGn1CDHULE6zEPe18Wtz7pLaesVTaozoWGCMxfpuNjEQPr9h6VH",
  "key25": "4U5quq7SXLZmkKdbBzLYe9GneNq5rgeaLGoyFwxjbdEL4efKLN3Uz5u9QjEq3U4dhUJ8AMF8Cji17iLBSocNKHMc",
  "key26": "4zs781c8LE839bH6NrAtQWVr8fYbtBH4S5ewbbvYgE5grbReakyUw3Nx138Brj8kAVXgrY9zCiJCrsAaKHF4X62F"
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
