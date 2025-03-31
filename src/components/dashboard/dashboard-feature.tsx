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
    "42dnmKucjRxb6yiBcRmw7CZDeapd68F8Gw78BgLo7kw6uJj6ypAXJ89cPBmzmNPvQzFV8PLifgS4DXQ9coBpaEH9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YNCAzpmrTjj4HU18BqwHJv1cQpsuR4M1gmNZqyzMPyGeZY5A9fdM2P22fHgr639vcFJKGjZ1t5cfNVbbMPqXrFT",
  "key1": "5rNf3c2LBGLSYRHCKuihzU2HseGre7Avbj7rUpx8W1SrbVjjTt69pzx5GdiycioXfU8g4UnuJCbns6pu48VPSM1m",
  "key2": "46F4oZovEyrfEuG5C5GrxnyRQLPe2aWXomT1d95T3BbFKDnNcEq7BHhc72oAZadTzUPPDDVnCkfkBr3zyc9oC48q",
  "key3": "2zQZoXeZKRRACY87vXw5nKUDV2Qs9fs6sEnnZj7gd2vJYCGmDFwKTxCfYwvTy9HQHkC2zgPwFFCsLvGbjupMYNUd",
  "key4": "v3zeikBxRiaTwEu7RfbXq8PwCKqkN2t2mzmyrKAP98Z1NoaY3Zu7Pvv43GPHQTbwn5Eo5rRF1vyq1Dkja7yY1nC",
  "key5": "2HJFuXV1pAwoKkF3ZQuWezcPbG2e3uRXQNqetd2ZRD7psSXcNzxVbamQ5CHXaaRT26VKvrTufFLG8kL9EZUxZmeG",
  "key6": "5HZr5B8nApMG7BE8VTPfocou1V3rsGhVdxWmADfKYTbAnWoZ1tj4g1irhDp21Dn8EZea9yFrrcHHR85njkcPUXat",
  "key7": "VeMYkVizx379G4LZv6WgCQyB6QDgb2AytYgmBPoLidpNt1xB42VWbYtMipRkVvK5v9wDkjFoZcqMVUMPPKUCUz9",
  "key8": "3WuwKXMm7iyKamn3dh6y8eKNXGDaQikD6Q5ZCdgiwAa35rdvCfjcGiiWB2NU8zmxMxtaHutXGw5xAQpQaEVDHgko",
  "key9": "2WQBLm7JK5bxSMVCRAAuXd4n921eGPPmuYT7LXa7qFw8XWTsTgziYUEXskiG6vDTRWRTvNVq9HSP9Vhv9SrN18fi",
  "key10": "53TFhRpS4X55xuh3fwStqtXUZ7jwcekbV9NaspWnqGXqoZoh4VnHHSLNUwh5N5pVJkXp96ckvWofYtnww54wB3Uf",
  "key11": "4XtvSQf8sdEs1kMjZppGrKKuNNRDukXVBcuDAeniLEJ8wuTAwTpB3mZeUQEg9QDKrSj4ybsPSA6MCaCSbDU26vJW",
  "key12": "we4PELdiwPms5MbRjQqf66FDR8uWUQxrz4AWuCA3DnAXLecKKbM1FzdYHpXbJuE6Xymp6bXXWkyg8dsrBRjjWsJ",
  "key13": "2i1ZeLn4TB5nDuLWAPRJxp3bFsL98jeR48g937sXEZ5WaYtfgKj5128tuUWBkUWYahHLt1iCrG6Ps6CHzT2jEGgw",
  "key14": "23DvJ1Wpknvzi4ftCmPPvEqquomt49F77A3boWKww2jW6LQLdRbg2L7UfiUfN3yFLcQGRg6hf9SYNxDLHT5MNbgB",
  "key15": "5Hzqrot89dkURegMTgNeEJbHPrXCY5VWU6GYU7hnjtqPBHoVh5DrcW8s5uPyFsemSVesgnaDx81nRXjJTdBk1wRo",
  "key16": "4dmeh2XsiRne6zTmvvvak1pofuuxkEecGU3jw92wTXiGREGmFQERe7tEB8kG9UBEe5mWTjURxrSWu2v4o3yjvV91",
  "key17": "2zhXMdGCJcywX4SuxRqXAeTecNkySLtq9du5FHER3h9CSEtea1bTu8KZFx2tZKYEG3CMUuANrPvw1ohoAqHzi37j",
  "key18": "3iUHzGuyAcjsyAXRqtEyJwupsRpsiz2jRZYUyCxTrvYqBubsZhdrGZhJ4U9niF1y5CDegTi19P8X3xiYTTmMxx6f",
  "key19": "54GUWr4rMXUNWHVXW5PrVVty9Y1M9M4CeMPsLYXkVMnoXcgANYuRTKL1AU5LTN276TQSz4yiuQqRv8coJ3Sd4BvZ",
  "key20": "3S5j39KQ4DinxQ1Z7ZbPh8mQ2NDYDh8BmeApN6XtABK8rmGXv32AdyH7NkFbpLxyfzJoq1xTRjnM9LR78Bj83ewj",
  "key21": "2jbzN1c9JBbKr18AHEEuYFD6RuAxVmBHV7CxqR7H1uBSRxT4WSZSnTsCgYDgV8u95UdzaDEuGWsFwQjxnLG2PQaZ",
  "key22": "PNQZyNeVKP9B1EfdhN6Ti4c7uC4wMGfRWyamwGXns9E8t6LnscTRi4Mj6seftFapesNiUNrYKH5gJ1onD6WZoTZ",
  "key23": "2cCE2Pe1VUW9mQc2d7FkQtM8neCx1CKAWXy3iqHf6Do3UhtVhKQyJFwtEc2C5mmKJrj65pFHDpV2b1atg368RhNM",
  "key24": "44TWhgwWg8DR35EkotfRWxD8YfU2iHxjYHdwiKWPyEosWMt2m1yUKjb586cLs2a9mjhGnwJ5RmNGdPsoCse1SGdr",
  "key25": "4Fhw5ZGGpEsw9mKzV25oa6D2QwVnrt2vKKY3o881aGG2BPSFPGeqfFy54nwXHWyFw3DtPgvzg8wU95n99w3jQtWS",
  "key26": "4LkjQA1z8iWkJMGyQXKf1ZNGWK8JQNj6msoarZ9uqRfDATskrVTznohfHc8ZPEdqXt3Uk5e8myu9JMbySeLg2Az8",
  "key27": "2EWeRD6jZ9yBndGcVKK9NHC2Sckzgaf4uwdbh28uH5AQfgkB6MKcMoVBwbaT7f6zD1WygsB41xMecXrvjSZKRKup",
  "key28": "WjLbbKh8FUYBQEa1VmbP3FC2d38e9v256oG6NqGJxLNnMAKposvpvCP1w2d3EQ26nVknJwPeYSbCd9gLiUZuMZN",
  "key29": "Q3VZKC9TT7tVHygSqaF9nx5BtkXJEwiSqLW8hw8QWupRUxq77NvXiBbCiUanBDD3GBGmWTvC5qRbtdqVpMLewcw",
  "key30": "2cvjLSbus4sxFxiGU3XFRQcCnR2EY9pSbT4JjCPKmFUq5bBfg8GkyoW36tzcpxMaoVmdWHdRDTScnJtELop1bYpX",
  "key31": "24CM1CNHsGPYrPEUgvD4h9qb79tm57JNTFvPcsf3S1upaW32Rpt957wXgeUYrckKCVFrNmDHfxxjHR58bHihV12b",
  "key32": "4g7GizWCkxnXnkcgwQpzvK432PPKCiP7xbstkufoEmxBUY6VunM9RTqVMfJxSBdFMmfm6m8kw8cJYVgxXyow4sya",
  "key33": "5nNAnutfFg2sZrmGBba9vUa9WYTomTdNfF6zmCnwKm5rQWfBzjBXbq3e5DtBdf4YfR8NqGh6ELzWUbntjBbMWZJo",
  "key34": "5qZTg6wE9de65WwAwsqxKPsDCdSxa9YQNXpnGrb6UvgPgZBdcZ9WYNtCVKQAHJ3PX79qGBb63omi7U2C6n91Fu2U",
  "key35": "4u3BofbadCAZfU1Z97juMoPyHu26XqUn21axRuosB37nYxWLxmNvz6yTDBBChvfyHnf8M8ZtSCeQAHoTbhZUgaCd",
  "key36": "3zdGbsdMjgRPJeJBiAuN6B3MrwHqY6y6cnPJPs5qnoTTk7P7Lw8D3RtJtS4ioMaYmYHGc1Uqkq6WFcgDBdr8fUFj",
  "key37": "2RGTU6LoFHfRLqdTh5RbvRNwgnKuE94DbyvVMcGxUR5e9hpGpBJ2GUExrXUx35Cf3WquY2BLjdTTQiahfTQV5VZR",
  "key38": "ehFQKidtdcnJR6xFWUFkbuEZZ7ZNREgFmYstQwyi6SAFPjYWoLbpoX3KULyCR3DoZcF4ShSkYjGogdHD844v7SK",
  "key39": "4nnT7iLLbS3iPD3a5DA4EA2R55YtJ2ZH2eeM9k1KEzrcEwvbHLybKSoeHKfgKjGJSFpgQEQ3fHLH7CWjQ9jWomqF",
  "key40": "4VMjrHSfUPN7ttM8RU3rckmkYbAjZSRytNRXndSGUuv7VkCXLcvTM6dfyuvhAwxJNynn8hZRFeAogiXxrvp7TNFu"
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
