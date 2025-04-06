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
    "W6bJkc6BguLUcM5iy6VzPQkNmdxp1iVDiZzpt3dJ5sABUr9Kxv7Z6v5btryWL6Y8yYDy5fbqdjtzVrR14NC8cVV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zThyCQ6G8Q94EWdixcMVuhQLh8yyHBbyUhWc2Xcci1DfQKNaYSoyoPpfwcnv8o84zJ4hSRjvLE7bUdFXr6zEx3m",
  "key1": "5gSJ3dxGqioLEKk8HVtXiCr22zo9i3guHJCN9QunwNPadKinXr11LVgdCAG3mhYtZKkPgFdgSzPq6KojFtJMZoT4",
  "key2": "sAakepnBmEuPbbuVkjYvMUkWwuPdMK6AQRPn9reM5JbCAcomzdFNpcrxayw1JWtHeFsqjT3J46si66kYhBTBEZZ",
  "key3": "exr9jASMz4k72U1orgdzwR2eTDTVYj3iUBAG6cokwAm9HpGk82WyYeFXDzXSpAKDkpEvLhwi1qZHLpNudkW6QFs",
  "key4": "25iDi4G8aYkSJxUeSbMAFPzjdLjWkucqogXNx9DWxiz1S9zJqpefQEdNS5rU9VBMsn1SCsVDvQZ6qshbiBVRJset",
  "key5": "3WPQ54x8s5aJQkuBYH9rhKjMJhEtzRYpSSknGGgacaEuGQSSknZ5Ae7F2g2vUuth2H3NnFDfWqa8jSvPGFKoFTGW",
  "key6": "BsAQ4vXiwm6iu3dTCS8hxg7UywuyQyiUbcj2VD61gXWMaKCREsv2R9eQ8X3H6W1CnGt6PwcNr27x2tfmbxKy4ZA",
  "key7": "5wQVaYTSypWdVxaQgs3wPcf8g1MhR8F3HpPfrQHMhVfjhSYbN6FhP7EJmWrGYnVPxAvu1Bm9CqjGCbxGbV7DYmzg",
  "key8": "2z1XQdVGqZsyXH8wbSP5s5jPh2gDXewxuhTvhhjzTzRkdq7cqTzPUnzcdLyu86CNrkMMx3uHoSGS9tDRouSG9omX",
  "key9": "36duQvMbcRzPPfDxkaMtbM1Q2NLZ42Z8sPiouup9STwxaqc8Qr95FTtaMkjWyaNM9SxoZsu9Zz2yr3MTkJtNmS95",
  "key10": "Z4D2cUJYDvXag5m2zHiwm527qM5YWjR51fRgfERdUjk5NkzddtkYQESJqvP7XE9wXk5p227kjDMCcCtHTpVFDU9",
  "key11": "rG9rL9fWqPmSCA7pcq2roSZtRaHNwwmYh3xMVoaxRas68MArFjY63C15pq7kbXY5D2uJkHUy1YucqN3yx1RakEb",
  "key12": "5NuwcHuWW8vXf7GQGHdb4Kvu5z6WMpX4zPLMP8C92yY6d8JZzt1owysmhBzYYJP1XRfAceDYYgDR2BtFUaxmgGHc",
  "key13": "QbxApub1bpVoWCwgsiMVJwQNeN5myXTCSNGCf11aJ1dRtYa9QNczbCYpLKrPkm7xqQyuMgDUTnbaUrQRpTb1uNs",
  "key14": "62y364Yf3BGK9D5BdTryBRbyLxURP16RimeMu5jqwL3gKHWqFHGaqXSCUm1P9UR2zUQ7BwcAUn3XY7AawKT1Ahep",
  "key15": "5tBQ4HYyDdRUfYLsp6kv9RSXGVTWdyDPNs3nC61L5sQPsRT34Ho7mmRtTovXuaQTMea3daVaEue3ddnRzEv9FSHB",
  "key16": "3aRkrW3HgRFbcQPpJt1MfqTCFPWrMh4uGcafeVCJZfwVsBn3TVN1YBM4FxirM2KA9K7okTmVkK27ynqkcBvBzSCj",
  "key17": "64sSVPVutcH5jdH4y5ZJGs66pv2gQR797tJEycHaAsrXsho7enqevDDYY8oTx2rQM1Nfinat5RX7P6d8RYwWPCJy",
  "key18": "43sB8ZxnzBAQymaW9NLQdyEzJx8TyLJ8Rj2HYzgi6Zap2T2Y93oDdwibSoaADxyiYJgmuNHnqPgc5nxpDEEnwCx7",
  "key19": "5yAZKYcsGiDXqJPNh7B32f16LMPnvvHdog5U1gNAfRSmsP8bbH7SCGGm74sohy17Nj7gf4mZ21nijDbHA5r6ZxHs",
  "key20": "59B1dRnmdZcTag7xoS4XQtdcmT72DCW5PGGimRp2bmfpeg1BCYsDFNNj6dJWydswNCsq6K92fPb1rCSMcMf3BvB7",
  "key21": "3Vs5jgx85GrCpAutexzb35daizWiwycsNmKsJiLc7eCRSAgBdq2P5p6kzHKZ8bFCFeYNVoz9QXc1xiJNwbsgKBtY",
  "key22": "5rG71VpVfweRLHwmXxmitaqrWYgdoQFh1eADigfBSJpW7erFPYwd8r4DXJMJFsgT4Y2LFbeDwGYf3oSSHrqaKL3a",
  "key23": "qxE6K9Q8R1a3Pjwkgvk87vDFFex1qXMvDEUz48x8AZtd1miYraayNwBgYxPk6xKK2vRHSa5h1QyccDF1PCLUKc2",
  "key24": "2M32b6JaiwZkbbDfdN6mJ8kpeXo8MNewT5jRffWYMRj4o3c67H3vMaZ6Ww2vCsoVoNGJgjD5LPTDgaKLufQ3jBij",
  "key25": "2bzmyS42feNZNZthfkPqTxhgWdJihEFDeWAZVhLyS9ioZrwNxTLBhqMVaCn8U83CfhxBF9D4ivNmsctNUQ6vbAVD",
  "key26": "2VqtVAzELDs3guA99sUSbYtustrPC9HYP698ynRy2YW9EUnBAfXueRSqCYF2gZdu4f7jRSrN3fjynfhebqPrzxJy",
  "key27": "jaKFry28PpZAy6KH9LcMVgy45WCsoUug7Eym1oxd6pG4RvpmetmYVK23dhy7KUwub9VCWQ2D8oBxDorsk3497HT",
  "key28": "43QWThdK5T9SbkPZVPMvo3cg1bjiYox1J4vbWcWkWvWwtos2QbVGLU4P4Vn6UogpsKviB4y4fVZv7RJH1LVZvRMd",
  "key29": "4fkkiG4QcwiCdpFaUYtz4zuPQ6GcwKGksDabcP1cX9S3Pztiydje9ZjEacMmJR3k1ttEfE2yVHPXq56n3fLAKecv",
  "key30": "3KYFrEHd3GEhavZzg4zScHbgiCUeRxhNicEBdXVpMxkyHPsfSs5BuQvKNrysMcHD7viZzhGh3z1LudjsYb1oCAZf",
  "key31": "3SYCq4N65iixitVy2aKuMDDf8Bcj1tS1wYAuJY8mwKAMmYM11ULxGdHztZzus9uA74W9AzG4quxwazZhqTiXtXrW",
  "key32": "5hD4McLy6sAbymNxD9Ld98Zi3B1ymrRMDTzY9tsix9dKCBf2XDuS8C7mATrqtQb1JVshRdsBPrhNXS3f7tHbsAhD",
  "key33": "5jMDeKuqRBp5Uyotm7CqBM2GnJKELsd3esSx2dqm9bCdDEB2pcDboBQWoyxDRw7CEQN3Pu25bwpwH7vjm5d1beVT",
  "key34": "M91iXZWUyB7fjd6BdSiDKSWX35PayLiq5HvX7YWqPCCkDo7ET1pgScyE1VGfVPMshGHozybUdjE2xnoSyQ7aZ8n",
  "key35": "3L6Mw1xatJmi8ey6mDN6N9SZHopUCwayKVKE1YKhsUh6rgBzesDcKmi4BNG2jxatMU1VQUBjCb5mV1BuDGKNyWQ5",
  "key36": "5NP4oBdjvU6BokHLezyLjLKH6TegBrACyGTKPckzj3L2ZgmJUbYChpaywhbfKX9dKw3qiFFWCBXrUroeKdLCBHfS",
  "key37": "4x2y8YNdvGETjjkLrqnUBsMP8knuesodNXHpib1jCZaFGSnyfjFV62k74wBqdcqkNmE5pfAo9cty2H4Fm2xZ6L6X",
  "key38": "3Vz556esj8ukEsJDtyXdm6EARg8E3kQeh6gaAmtYY8nu314odkxZtdg8rasMppKJSdjvMBaEBEazMnbnXMNsGCz1",
  "key39": "xQFQWmTjRprQr7wuaV8X7PoPyten29Nr6rtpA8jbXQQZ9jSyCviJirWNzrTrbNApHYFtZvWzJ7EiUdVHrZ8w1c1"
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
