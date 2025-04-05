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
    "4PvVkkgPaB6QSpoht76v4EPU88MHZzciyAKh7aqNyTMbxUxGVmDfsSUv1dExD3eJRywe4Pka7dyHtd3XZoqcrz1A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nmrDEAkkCaCtRjkEf4uEvCDKm22PUQeWU5XGeAWVA1GyJDETTKgbQfEpmZQdJr8ZSxvVx8gv9vsid1zZiqZa94a",
  "key1": "5qSt2s5F2DH4Dfsfgk41tmRs9kfR7sB1TNUCKmBBvfFbJNu2HT9kAkVGRTcbD541q2oBXbDK5V645tZucJb6QCRs",
  "key2": "5D7eZNnjgUXaPpuwzxHCvwzjUHBToT6K1VEn3RwXWzLqKwKvNVDccyRQ7ojxsMMNbAZnNWAzHHuEtXaLb3rk4bBQ",
  "key3": "bi9MuLkNDswQDQHszUWcm48ccSkGG4jQPnU73Mwe6tRSfxKwjTfLELYFfnHdjpan5E2qoTJXkyVymQAo3d5rVQd",
  "key4": "5GQPhMFC5zFmha12LPcp2KYgeSJdhA7HSkLjKQRGCeEg4qqGBvMEYKbsmTohJA9CNtTuPrjn5AqQy81wgukrRMeM",
  "key5": "6UzKiWCvjEwsuD85gQfmrDgMj6a9bCDdo3gVRWKX1a2kWi2mZKLYKmNUAXeM9ZKmhagN8Gz4QHfdWfRH9HtjR9w",
  "key6": "3HnRrPon6yzmKXXBhLgfY9uaehCFBQcyYHSSZkCtyLY6VVTtDyh51f5MCXs2dBzE5Kb4UaZGhtmHqW9WJuSwXZFB",
  "key7": "5n35c3RPthL94Sw7y1MXM1itcxWHkFziTk31vhchsRk9exyJoXCsXcMfQ9Lnkd9TrMYaWkRDTbSjdBexmTkBqXhN",
  "key8": "4jpGFaDbfFCbjxF4e3gUJ4puG8L8CbMj75PTkhmxrWpGF3TDBf3hAqZvaDKjj6ovViPZdbtw3QgPoWqFaBivPm4s",
  "key9": "21YEabW4NQfUfhcb9T6FDnen5hFe3G5XWBeCNVjGqyYYvz5TuEBv6tchXEqrecHH8AYVCDn48KteK28MEacxaB1L",
  "key10": "5QbtQWmzLLW1ofHnEqRV8wQyxLFXmRTkufi5BuT9NQDv4Lo312zCRy7RfrKvUQKbjMMacJcAzA9cyssGa3d6WX7V",
  "key11": "3kcofL79tHWxroDfnD4LkPvynk7euiRLWqxqmbB8QgyMgSqe7sv4erizY2mWCsYnEFU6nRtg2ipi3EEhEkBfbH1H",
  "key12": "4Ejbm4x88Daq3JdChxxWLfBiW52EaGajV6b4iRBN96r3HW6b8HAEHFs4gNdpjUBvMrNYQBVbi1PuGWXgUYovDawQ",
  "key13": "4R7yLv21wRg4BTkNgvyibx8MAWyzxBxtQes97Ymtoq2bxfjY2r3w7DJY4mNkmHQqSbgEnkBPjbEc531PhgXRVfwu",
  "key14": "QjgEmMC9C4LePBMnKgnEqsCTe7d7QGzqZ4UWgsdPAexJjtFZ3dyFhUFvdfTXV6B1cXdm9MKu2bd4RaMK67PmLgK",
  "key15": "c6ccZvEeSi7TkLZz8JX3NmHmnzrLH4moJK99Vo5sLzNEgqJ7zkGsu6ue9KodpEgEB4BAUiZjhM6q1VR5mMiixZJ",
  "key16": "4kHHXNy71CJSR7cEjxnspyXRAbWGmavRPaTUKpEmuZDDcptpZAw8U79L4potdj7wb7YaGJzAQLRKuT6hj6bFdojk",
  "key17": "38bVNXdHrgQ4iLBcZmzFWjuwfRePtUzn3fP9KJB7prUVfLQpC86e1hgfvyGmqrD6hWcDjY3jdTwyzD6iyE734UBs",
  "key18": "5U2vqArfvNpJtsHbSYDLjb94mb3kzGZ3FfSvS7CfEwwo6tYnVqeU68Qf15j8qQtSHakGHNNfbLdfHrESDVgzE5Ar",
  "key19": "4u239uexvywST6eKuSM8iDQtkKxgfx5y4MPVSHgs39qaHwVVL4sVMEh4MgNTvcS9BiovH3w7fL2jEXBtgc4EeoGc",
  "key20": "yHkjZ1dYoZ5rF3MuNtJt2T7BTD8KBHsbhu6M3M1pHoEBPvnRRzL5i1WZ7x9K5ftMfqqw1y2WxaZn6DByeqZesed",
  "key21": "3o4zAGiKcKYW9Jwdi9Qt3WQtMMfNuBuazFbMyaTMZHnVKsVKaAJ1seSpJG5EM1hdf7178KNNR8AZf7L5MTxgxcEv",
  "key22": "4BUQ7o9PGtyg9nc2M3Mpvm8BYtKHLnvsBy34Q4jWLwTRZRjTZpnNTfDoHehfrPJYCkzBBeoh1DQr8NTaD6BCrGj1",
  "key23": "2qPubx7qzn8xiA7DFLB3CsAsotciHgQCHuUBcqHTNqUVCANAjjfhs7SqEADsNeGyFjxfwMjboSCoas4Udb6bZ9NR",
  "key24": "3WwEVTyJVfYpaLzdUMVa4inXaNZMh6kuT2gDYo7t7WUdu1zs3fRroFwbYLNWTH3nPueN7y8SMCe3gQSyUDuBz2e8",
  "key25": "GrAd9KNQ8VvvMKshBMiB5yMm7T3xKq6Xu2kgDaDXhDicYEMnWUpfH53qSiaBm8KJS4zL5NA2vMFsYNyPUf34PaX",
  "key26": "4dtsZcy3bWoAcj63CteBTW7RnQp7WPHpoFxkCNbDMQJqrF9uHp3jD7pNZhvTfnrKCnXZhLSbCgsExAnQJFng8dCG",
  "key27": "2ojPoARo3gmfCCx8356ksHFE9pTNVkNRWsPANKvs3sD8qxJs4ZcjKGnmv2qPw3kAUurWKaNHpdg5yCQkhPVYqWpS",
  "key28": "2Tup3EAZ6Xuy3jtbScHQqTV5HZUKnXgHx62qeWbatjsXKNP4KoCk8h3DwGMGdLqsyA1crK8tWYMVDp75wC7Dnh6m",
  "key29": "3vMg38K2YrJ2GYGcK5QDeGgyY2Xhwu8hNDHf1dYkttD4iMkgQa8c28nLP94uux3UkXeQPe5ijY57vnhzSiejkRYp",
  "key30": "3PfrS9yoBcxLApBMDKeZJb2fmo457At6LWDMdrCw8aVgcRXig3DYVeb1EFhsRuxJ3bFwAGPcQJYt51mZHq5NoAJD",
  "key31": "utq2x59udBr12rzy1uG2sJA3SUhfrUxjJNJHsqfrhCAD7Sw3Sym3Weh5fRebKteHv8sZM3BzLMw8G7VvBgWtSUv"
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
