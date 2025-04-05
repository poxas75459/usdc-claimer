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
    "4SYDhA9xK438KYpvMAWzTA6yLjjmdr6nDF5DU19UWjEsgPjJHiPoqzs3Zg3U9VwTtCLidBLGcpDdU3N1R7eZVwTf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qrw3P2HPQiQC1esKJ3zxmmMAdi43E42hJR9Xzxeb84qwPXDgmPKWzcFYN14hYM2ieo3ZQ6wyQQkhBKwbD6kndpe",
  "key1": "5Cdm7GDqLZCLz6CTd13o8LHUjBD2Xeu8JzXQPWhEzL5bncuFp5aFPA5ithEy3bThxLrWtGwBU5dh9NtCw8LZ6cD2",
  "key2": "aPHeru2MTdrHufrKVSWEycyMiAP5jeNdwzkBZ4cABDrWihVrhfz7fFnTNcrHrs1E76FcKcaL85ChkXpHLRa8A19",
  "key3": "4e8PKftwkE4xfUiGAojypqvhgjskFRgSeSYzmU9EmeofL585NMmfuY3veqTRecqba3LULocTt3HhUzbsN3qRJ1Jm",
  "key4": "5s3erpH7z7Cm5BkXvjAs5ht9meQNffZEW9sqGAaRH3GqjuTUenrW2YLvM7vdsfgjwTSxbTGfmwZ9ybzhESnqMfj2",
  "key5": "5sSYaukoaFkpLXySAWUQ5m5o1hAKe5UHmpgCNgosuauu7SpcpEGy33kTnxMRpnHynM8xWVhqo9kSexDkRTH4FTd1",
  "key6": "4RLY9UHc437v8tJLfkNRJKjsawRnQoYS7rinjDsDgPiqrvTfdpa8AJdefyMBQXGj2LwkhYLjcWhyAzyLMfVCBT7o",
  "key7": "58EXQMNNfDwjFkP7yPRmNCCFvT7mLiUFuyZNtjwrQbtgTj4oMPLjL7shZA8r5hHLxuMcdwAdRgNLc9sYXWHckXBN",
  "key8": "2fhbN97GYC9gd4h8bDzUYmgo23kAFQ6ZpZaB9An2jqATFKKQYaazz3eUW332VVhReq9acvApapnsd9CA9XEtq8Ns",
  "key9": "4dLmF3Tpd82b2PUauxWjT4D2LgYgoGz5BYWtZPWft1rqBTkGVS3bNkxoUaYus8uuYJjUgesBnTeiJy5BBuUMPetU",
  "key10": "3MigPR7qqNitaHmU5QVrYRsRboFxnDgJTiqEx7umoocfxquzw2KS146yWDPhxSA88j5g7og5ssWVgQLM3aK8ePna",
  "key11": "2No3iUviqbYFQkdqDoADCRHdWgSNAtubMRZAuy6kcqz3iWN1LDRRsoT9mvNbBc28nAZSu9ZEA21VdTox3Jza8uWK",
  "key12": "M9e3qMkmcfZ1aThmTuyFdhg4JczQAepiVxFmyyLHESEuKuKpTJJNwvFrD7kZznHo8zCUvtJSWhHm3YoB6rARTvp",
  "key13": "PKbDjgDiabde7xAEBqcTkKePa43Ks688abzKfrgKy4ESYVnuWgruSbuhZ19iFDW8ti14GAwjnNrVtWFsNw98dY9",
  "key14": "4CupK2jk1m76wpiTsTk41ByduW9qkhnwL8ZcoX5UTy75sENHDagHy9RQzereL5sQST5DpXZepouChJbzWcxxsTww",
  "key15": "PqQwJfc49UaF6SFzirG876QK7xdbmGnXbfth1gzx6pUP8VZSUWG5Yy9nHAh9exAux4bYTUT2fAMkvjWQVmdwVZ4",
  "key16": "n9SXNSwrKGnHeM8THxSEjgSJz3q9fV34UVfUBJYyokJD2m9VFNE7rPremzGggefxmYV7AJsQ44S2aNp8rWLqFML",
  "key17": "4tpkf4o2A5NgDw11Zs3hKwrhLnvJTJ2rc4Jyr4CTssvofPoDLeVNmUrMJapBcqfBqRimfXbAFd7PzFR8LqyBBShA",
  "key18": "47AqawdGEEA6WouskK2PSHXLTBjotkziGBnSMPZKCuNLqDq4Rq4ATsWxXB3sMRudFrBn7FdUeH1w9XinWL1VuxzP",
  "key19": "4iXYHQDqnXrJhQ72TNrHVbzDH1woQwGTM4jSbp7AfqiAm6MbYiCjMB1WEJVNnuYUQo6yWQwKjoz6LaRKKUxgZQBj",
  "key20": "HUfUSy3EFdLpXtTCqwbhtjVpF8zhmZXyYHQQWVrye5d8XKbY2dvDrg6v3X9eYccFVFZMbkcPGZyT1MnJPsBRRQk",
  "key21": "4HxNWqxQVNisiiyuLDK5xg7DzMHycQYz2HdVCWhuHXjjbQCbsFgXSFyaVHg7o4CyGVjPM3ApsK8bkbeiSRtbrFJc",
  "key22": "3gzPwsPqQnuDicvKmL42pJ7UuLRMHCWm6CjXGeMiLW1XSdupQJ2ifnMwap7dYo9JzgPWoF5UvKb6xm24HfAv8jBe",
  "key23": "5MZngArvg2UCBqgZSxZsMh85fsCiaw1eotgCbDc3SCFe9yoDY7kQ7F8N8JVmBzLcE7N8bpRweS948Qs8SCYGfMJn",
  "key24": "2X2h7CpYYYCTWSMhFcS8PzZert7sh4W9AAriokjxjAwyyWwGssc1Qi6G7iFjjon1YAaBcudZVbiHFB797GJP37J",
  "key25": "7o4rzawWRPKkBh9seWerSrhwsvPSoNZPvFpCWD5297KdcryLn7wQLdpdxvVznVpYzQXLBBM8f2iKFR6BsQmQAdV",
  "key26": "5eyMFeXaWnad6usQM9T2yvHUjDDQ6a15bt1bn2CDkdkyaLicF3TNyLKdioxFpGkLLKZf6B7e1Atc8MN7Qj4GYxVf",
  "key27": "5yWzHbZT7jwdmEa8hEJYqhX1ky6Xx33oXCt4MDAjtZXEc31kXZqja2oM7aSc2qRon62CrEC3nTyRQNHtTLbzoXTh",
  "key28": "5oYX7DvMBHnnfnCXcnVyBfuvQruAU4HEFGQw9CPSN3MnzqRZAvqfY3h5pNA4zgMURT4bYkwwk55mMA72a6qowk6A",
  "key29": "2WpPMEFbn8coUVHT1MTSwAiGgMzWrZaLpkkJjaWb7rqsG8pcdWzEQvJfXoP9Woo6dFcYmDFUipx6GewicP5P6uy1",
  "key30": "evuKw1TC5N1NwiTHZGidhXi8SM1YxvYGCwh77AYjsAhxzvnoTj4FMorSmREubRmX2jTzkvgxpQCJZchfHSpxqnF",
  "key31": "4hiKXoTMs31ifaAVDpJKWua9qTHQiGQ9fsjiC9kN46EExZHon7kBrt5Dka4oZGo4EfdqaC24jxcFZMxP8A38c2CJ",
  "key32": "599RxkvyJJBAnnwKFAC3RSvkCT5Uwq8GY4rWEUsR1ojym7Frp4iwSGUnyjs2PrsaKwh1LmvF9ov4dgvgMm3avus7",
  "key33": "C98kbrjLsdt9v6bQWnfC9JviQj6HcHxbL9U1Niujt3ZEZ3TKf7BRa9nHckXHXgek9Vt7yk1fNUENVLogFDjKguk",
  "key34": "3Eh1Qf2zsWCen2qpd8cDvE71agPdT4npn1axXmCJDQjNByVFPbeRXWBdKkm8FKFi4JY1Hr2QhudT6fYouhcop7zr",
  "key35": "xq7aD9cRieBB4GVjMKu9nvSKtcnw7dmNj2rEYKhSukA7Ed6gdGHvdDpaQbmmiopHFUxwEnsLKhVDgAwifZtfPTe"
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
