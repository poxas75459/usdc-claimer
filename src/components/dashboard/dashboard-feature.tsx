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
    "4krJ9fpGMH3QknoNkui3pmzfWFsKMdNjVEPCysXcUfDm677mXqYu7NWWqB9yFiELiNTxnYYFwf4evXrRhNYBb4Bd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5km4tjF3HjQtnLHdcESh8ijT5Y796CJnU6Y8wYit5TBwDuqfWkcRoRt1QMqWmyYepcZZFnm9nT4sYYy6nehjxa9t",
  "key1": "4LbRRdgXLmkXNwccgNggvnSSWkParfDJiRuPBKBbLQneiyhy4J4QimPp9W83YXJytnJGtMZquHS6bLAfXAcfYfg",
  "key2": "4BjjbXT74Ep86VaNEym4KkYNregcZLetWRf1o9tvrXDFriF7YqMUs2HvyoDxsjHSNfU5u56o5uQ7byc5pcetpcsR",
  "key3": "4KhSkVbASJ4dUTTZ3qdGQwiopg6vDmwHXPZ7j1q5QDC1GvoLVdfc4Gv9vh3ggtQhytvVoF83e6Toub87ZtvuDsuf",
  "key4": "4PArFRw69tbXiHh14t1VsiNM9UEPcM2PWYZ2MScJuR4FCksXpzpSPbDK2kqYKxkee7fPd9nrMuoavLKSHRj6r2kG",
  "key5": "413ULnooKkJaq9ucuaMaHLua8tDUP4exxeWTYkMaVq3bVDkSJGb8A9qdQZR2uUk3bD4rMEu2rD8bdckMr2si9aUq",
  "key6": "2FinN6Rr4395U6RaQC4z7um8RqJX9jqvkfH4bXXB8TJrZFjS4Hf5vvckwd7mmphnYVfYh2zxuMh16K6quCZLs5ez",
  "key7": "2Bbk7dF7iXy2nC2mtGAUanm6D7icd9mfyc5oxAmYAantJyYu8fi2fXq7ipnytCbFWJS5rkHxJN7p94t88cmYBNqq",
  "key8": "3hyPMsLbdQuCyXBwkLiKgUHhzccicmXRKjn26y5DfHh3awHYkzNtd8NWiXNS8WFg9feHCwQiDQFGfy6Zy2XiKpfi",
  "key9": "3GATJc9qc7ccctGGNNW5mnYRLmN8bTB4i3k9mSqEA2h83TzqvTQg8UYfzfid4N7qYZTbtE5rdryUiP7FPP7t8AWe",
  "key10": "5QZneVnVcGDp7sdf8csNfxvrRdERwawLDQ425g7KzHHdvNhZ6aYbzZxB9hSPJehjZcMao125Q4Do2boagK4pQSMb",
  "key11": "548TxkTJYo8NAeRMZwabbXcQEJp7Xi6waN4XEe49QcXinZzpZbvd1eNT3coFomHSTprRwxBUntd2Hnqw7gzbG7rC",
  "key12": "593j21cixFJLhMuyNF2FkKtsbyo7Rnp5rtgDhun4ixV62ki8RgZjoFUeUagQEZHxPN8BwpcRWCqXD2APAxeMwVM3",
  "key13": "2baMYazyH34ugV2pe4qWktMg7z73DEQudUGUMbgVFma789Y1X7qQzXn5dKAtPNcTZQxmkUCA425FB7mvXuXNZuuk",
  "key14": "4MNw3AcD4Vk3FZdueCgPZEKVFLHZmZtRhCt8Q9w3i6jhiLnpsZraHqWb1bsYTziPxbEqGJB6kVi7noym73hyBPFy",
  "key15": "gV9jQrPMCH19gYBzB8CZM7u6NJogT9G3pDeQD573Ub8F7M4p48TaxcFvwL5uGXVbLT9HhewyxCB5qzwmdeeDddM",
  "key16": "2RYtYxh7JbctrsDJnbhsSNNS16zLwTxxWANwCg2MGLLRGTRoaqb3Z7QvcAT4Lwe9sADHAZjrNY2UtZZrmdCAk5SK",
  "key17": "5Voim5nbLEbH3kQjCMvhb5RWUZQCPWQjCZuEMLCsDGxYff5a7siTWwKMQ9Hf2PXrwooEcebVUT4ebtaej22GafqB",
  "key18": "42Q7ib4BEhK3YykE6Mu7WEQXrHhefsweeh8cW8bpCY7odAfQVE5xsiKAAVey26s9V7fdJe8HJw9j2M1RphuUhJwL",
  "key19": "3NebF3c6Z85acEiWw2QGFzoXvqkWNSyY7eYxT5ARLnmpYUTeiGKB9crjrrGeZ8BfxfmPsaxXYrPefA2g6mTDqHvh",
  "key20": "57ERZKdrv5qv5ymFm1JUbRjNmx3Nv99j6XCEVZtp9GJi3saxMbn18mdLFRv77Tm7Kuf3ZE5YYPzieoaaytNfxzgt",
  "key21": "3WfCHdkshastjSmgUw8QjSH8ddGDwqh7gjUQbgDstFaYKyTwVPeTwkZckbMPaLuG5ifFvQWoy14hDzaCP1Wdjzjf",
  "key22": "4k5ro6UgRSDRPa1CBi2VMvbERys3XdMcZt24H1WV1gCHHzm7PZg84fPx5GcmQ4xpA9yegSKF6mXcj5xMbqNzp6rc",
  "key23": "5WNzzj3HsRq5T2gmrx5AudFHgUc1HHRbDrobFisoyptQdQbQcM25NtbqeeJ7UDDRbmQh8mBWDMmTsdh4R4wQhNme",
  "key24": "5k44buXmNPZhaE8A8uqrWFqhWjzsd4QtyVzJrZ4ZcPh6MuTez7dvxshkccMi3c1sk7nRyUj3bH5uT6tyGePCxerV",
  "key25": "4Fzbz64Q3DoCmBbBLvoJofs2q5Z3r1qAdWZucJ6K9tsMFtXWAsZtG6NZc5jA2mwuUGx31AZFfEmwf4yAxDrTX1Ru",
  "key26": "2wzLw1gzAf1meCkasbKaBBH91Lx4MCmpJeo8ceSvZKHKK9pGhUwWYXG2QVqb3G4DLTjaihgMCFU7TS7L6UdVVCsa",
  "key27": "4nZ5q1qXkS2riFHABSJyRWumJc81qdRZFDrBrkpEystyB9W5rSsPwwoGNsH1bP2d7HFFWugp1U2NYZyyvzoLN7oU",
  "key28": "5XWtv5p8UkVMxFsNMPkTskxQkWUyBAdzbrf5dBQdpy8WeEJKHywXVsr9AFuZo5US65e9AM1jnJLJ2cJdwos6zamf",
  "key29": "5jY5RoZ4hsPorS6Uz3axbXRiMTBeGpNdKT6Maabq2DMXNFuk2aBZuo72GT2aDu5pfKTMVu8uSWTcS1oSyWjMpCdP",
  "key30": "4vRfQpAPGRo21i8kZicTGhB7KKc4UDLdEPkhnBrfya8RbZR4WaAyi5CpnrpkVbz2E3jZb1zgpvauK3MKNxoaiUy3",
  "key31": "5fwgMeKLyoGF5mUqBi2VExVukAs58MuksfTBEPtMvjkGZqpuUD2V9zBxEN8K4uVKmxJVbYth23WqQwQVJg7UkYgf",
  "key32": "cJD9wJQuvd79HrXAA5C1ZzVhh6Gq49JkvyWQz5LT1hShAChvRBeP5Aesq3pMEwb7znaMuFGWw2ZgmtFgtSRi2xr",
  "key33": "3hESkBRwkSc14xzY3yfdwmjQnVRq6cz89NzE4duZYWjNSZesfFTsNWca2EKjPxSAnKaVZfeEvhW4gGSxhGy3UaZn",
  "key34": "3BRsELSPQpnP6DiksQ5RenKjTzo1EVCsjrzrEQN6aqrMvtM69EnV8Fsh1kQhieUq8XiYy2v7mswhgmTKpt2TXPtr"
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
