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
    "4GLLzEUAusp15QrR9KQyVGxzkayMomW8bQDJfxcgY1gGM1Cv3UV1SJbrGBds4QcWHiFemVT2uW4NfHH7x3wLaUfN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2544akSiNUiTmmEarEKet2kaocyt1osUqbhQUntFcdYD4xg4zH1zpmM7MpeZwwzt3yZYtPfKX2KXXaoEhHEJrBxJ",
  "key1": "5V2HYLEoqW6Zyrzb37WTHFzxNBAre7UdAuupc7griKU19WoxpYFPjnCB9HB6na7xA1afyZo94SNkRYSU9x5bgMMx",
  "key2": "3RmMuNUWbLunQTYB9TgKuquLctC3cz4yGL9oSDvL3PVeXdKPKZQvTBZ42rP5V78puwVs34AHyNr7KCn52pL39N4m",
  "key3": "3t8HYvgatZ7ZMVKFyyAvDdCGcHZqrv7pHHDo5tTzZVZqK5dALXSdhsybLh8NZQ1ePS9mXASWQoktydDjoqZM1mpZ",
  "key4": "59fWaQeNgXys7vu7fPwAAZHCGjKqDUCjdMhES3GUsabU2tJ3vchdwnZJpaXoQhzweeyzSeh5GTyEBj4hwhhTH15b",
  "key5": "S3WH2aPd5dxd9thxBrGVbMGor5er2Gh8nygLnuqtNChnTzU8YkDbqG8emWTPPEVAqdky4ckq9oUtnAQurRzRxg8",
  "key6": "5Cwe4Jhwsv9vwVaoXsMyxgQ4UG4kjPmKLsFa2yxxgtr21maxTupb9FnYEXiLhRnjPESssB3raWQVQe3CHJFSVHms",
  "key7": "2VRRVQHH5VS6APKYAWmbEf4b8sEoz53gxUhJd7N3R2GeUxHLqK4h7CV3yMThJYTdGfQTLPB3D8sj112bXAb7L4Dt",
  "key8": "5FgfdW4T4LMJG1t7cupEAXy2KJWpLXxfcmveHwZhc6P7xV4QiUkMpG1iQdTeRSgXr1jGk6WYVur9ow9TAvRMG5Qq",
  "key9": "bqKBn3GxrBjNyxJkAjgSo9Jzai63kSPiA4k3AMi2B9vxakGJFCi31VmEmfNDNFT6cjTbkPJYtgH6cYfikkMRmru",
  "key10": "2bBVbNu8KfRCP7we5DYhK6Fh3Z5B92uN98EYRBdePGqbbAAtp1y3T6M4PJLrctNSZjXHyzUtokp17oVLm5af8qG2",
  "key11": "5mWVjhNAAqydnLhzzrjS94XwT6zyUjJaamDgNJqB389ogBcnDbG42g1cYrcA6xc6s4vpXPY1edUakwSVDtktaggs",
  "key12": "2xCp4PNY2kavVw94aQPJZBumQWVyqBBsJTHmrZRPm7WaJdLnDWAXfDt1y5yJdXuXYhs7vdv5eKZhUTT4zJHhNt3W",
  "key13": "5juJwCFemw1SRbAjoFRAcK9EYBwbXL5aih6iz5Yo8BpQQR2LSLMJWLvFLAMWnpsUB6L5BeWgCGu6bLYSEeeheGPp",
  "key14": "Cw7mE1eru8YgeQHPsx6S4rQ1TN3HBBWscNEEH4GQ7HyJjp3pwzLkDjHwtEztraggL58YCTYMdkad8Q5Vtx8mz86",
  "key15": "2tcyfQAUh6tUvmCKMXtmb2ub4wrakK3yBxK4T3PERSHArma6rPgRQ6Mdyw2iGn4WHYAq1VJhqvKgn6EaUNDbBWxe",
  "key16": "2GUzaegxWp9CNbLsWYqhVxmQB63pgyZ3ieV77kEhqVcgxi3vNxTL1yefJi7CCzhH5h7UokYSWVus7MnKxyWqBYHF",
  "key17": "2DKMVJ5U1DyURC4FeMEFhoEE459tf9sRmkk16H5tFKYewA5DQRFhiBnYjz1R3gb3mNKYQqFiArUH5EoU7iAZypzc",
  "key18": "4irMWzDoPRns5fJDK4BXhjHHhFhjmX5u9mz3hbDzQDtYyFv3vuN6sers1rLTcJK4h9frGShBpUPN9FtS33iTs9ve",
  "key19": "259cYMmiMKyYx35mknFYNnHPZ6VABLZURi8dhFnM2hA1mvkSpW1dXk5amRd7fx1vauzbV1dS9HhUqiocGxYFLHjb",
  "key20": "44aHepii3a8hKBzpv5JHEjEHAbCXG5FBiW52pcXz28oHWsbPJjcDvyFeMPxpsGSSbcfkiFsaN3nyU39RCyXmTZbV",
  "key21": "3wvsHtLXDo7sh1f95jsTcEr68W7rGEy3T4JU7KufbdkwtgHMfg5CnbcjZteHtRcLf6GM1MP5Bokxcp63RBgFYM5U",
  "key22": "35iWYQ3KJ7HjPTBNH2fCNJ81nU3jyo5V6B2jFQKEtk6yu7B8QjTENmYasSBNNWJSPo8gLKNaZ6nJb5P6QtEJSss",
  "key23": "2hFJTsCUvg9vhKQDBcESAgYqvuiTzTqj5mpuXnNZyyuxJsniMNPkJkTjrXYFhptD7V4PBzgLt6CtJPBkU4kFYTwE",
  "key24": "2nrfG4JcwdGgWxh5coR9fPrgY8jXUvygjGhBMGEGgEVZ9xLpeWgJf1Bdb9M41d5e3q2V8dXF3qmrJ4sDReDKC8wa",
  "key25": "2L1f6x61w4Azdgyan5qqGvcLjB3wEhWWU7NJxFNcPLcAb4dHskeJmskQEuQtE9PnY4tyhze6Qtz33NYVfRbHp8ig",
  "key26": "L42vkatzdJsBLxgxHpnM4vfZAyUMevgGxfTm2vP1uPZoos5zqFU6i9FVLeKh21FtG4fYTsoKxUvjhPFm43B8ERj",
  "key27": "2WdGV1NGwvuaNHUaF8T39EzZPKVRv6skLxJ5LLBxTpNZQrxUbFTjbCjKg48pPD3yqT3Uw35EC785d6Z2QTjTdqa2",
  "key28": "5owuoj8rQTrLAhap1HptAQKBagCUJVF5Npr6ocpMT8kX311V8EKDgTdjUCgw8JnsnSAzXrhkgxqzR6awxkYP4SzG",
  "key29": "5VuvVYTjmsvfTN9DcKMwzJyCgEEW2hbSJTwV9GtFtuv2bRBYkGfwYx78qVE3CYkeraiNiVLqNX8Vesgqmo94mJCc",
  "key30": "4fAjdJBQdHFMWXVUvtS6KNBQN1ExY8oYS4BU28z9TDYnnETWnw3wTsz27rA91ZeX83zGbZAyDiJRyMYnaBjq4Ate",
  "key31": "58oZCC61vSX9oLwJaohEHctDsyj9fD4zLA7V7dWpqpRDUV3xJbdFWXpVEKgdbnVb9zG6R9WfXcdq98AEwrC1u5pe",
  "key32": "5pq5pJ2QXbrod9ir6NYBZT4DDWhyUuUHuvRoXKDXyEdo1TWnV2UBWVEeWQqw5RBUD6eMFea6Cz5NyChTeGaADhth"
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
