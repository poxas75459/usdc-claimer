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
    "APp5dvKanJi77frMsptAj81D1tvxwv8kJsQ7F1bVrHfQ5n2ToK2RWjm4LRsPT6rXnpum198RnUztsyzP15ERc37"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zHKP56ymHKDKabaurpHo2EYhPjXXCZveQ6FyYWC8eKBXhvvPo8LLAYxy7upJas5Kr2MdDoRPxekeepH872gsbT4",
  "key1": "1Cesw7fZMDG18WPaYfx1sErGXuGKGmwSKXg9bHTvKcZwKjTCXrdZJ7wfwoQU9eJ9cTmnh4gQUyKFGbQSG7AuGx9",
  "key2": "5MTRJ56KXekrYj28wE3YDnCBvuBXXDPyhUCxrw9f2NiJX1RjvfhDHKtSupA6d7dv7gCi7v9D3jrUF7DfUYbw2Rt7",
  "key3": "BkYGuQECcfxFGx27UBMmMxB3ATatH2ShTnF3xZgbpWnNXyTYqQSQg9TRdGpfpSGPXvfYEgzq3GH3MacsAT7h7D3",
  "key4": "3HjZZB5odA5qu1g3NaxeVghJkCzaYAaNQbasRjzs459f4yDC38YvtUk8WtiF8URZfdYuETAM4WoZ5cAoQA12pb3Q",
  "key5": "5jpLCvwBDGYSgPySKn4ZeaQuSnKR6zj7AGYEaJA6xdgz4SR7ZH4Hwq8yTbBXD25hYsqCyQyvTZ3r41ZsYoyaA8uG",
  "key6": "5jndZ74RwVDSmShAHQEsmS8JiNYMnbHm37FQTyNmNABkshyQ84Lw3whQh1H5CYjX9coqvLMafAL1dxvHnJVLfoha",
  "key7": "3Wd8iw9yeCcbwX2oLYc5Njrrpnw37gtN7CoaMNq6kYsbSRx5d5L8St99Q1YMpCmNGN2NMnoQoxvGsVNYgqzCHk1B",
  "key8": "5Bkxb1iPKKcx4CVJazWra5n4gtKipBiBzxFGMthpYZxqyhgUYVJnnSZuXAgjifoT4LnjsBXgTnrdiMv62YJ7qopc",
  "key9": "3rS6zgYMPn3FqCZAmTpbGsShtNXrB61YTpuqX9hXDuisfBGFarUVDMZZGoSizJs9Qfge7NxVVi6XbHtw52qrLUAd",
  "key10": "3eWYZyaMCQvZLJTEyGHLkDHvmnLTtFmDDwyVecLk6ryS47JBkTNb7xVkHUPJPxevzPixepfQeL857RvNfyxfRDdB",
  "key11": "487WMvATE2eiUpiFtzXMS6av5v2qKHkUHNGDDpdguUWFENiD1LoYq4vNva3RnyFdsWB1F2uRZXYZ3bXYKtehbWTX",
  "key12": "5jyHTR4queSSsjqjwC7vSfDHj73ddPrDdGUK1RRjfixNXx7zhxWXyiCnMLm5du9R9n5zBLRj2hUvqFxvRMVEWPMe",
  "key13": "3VzijF6u19ofvsFpp4JVAfpKCUhDU1ZcwqVXBKbXyBaFPDWJV8gB7To7iMDDBAooj2j3RnSi2E2sdA1hsAH8Y1qF",
  "key14": "2bVHnSWGtzeKyZVD7zAzEwFPCQyGaFNbfe5oYEUKzZuqEHJFrpqmUnkL9NdTyDXvBmCcoYy1WvzWJxzKgjMdqJjs",
  "key15": "5YZH7aGxC79V7mPEn81Q9uAKvJg4x37eqs3D9bnP9ViZEnvbw7GELjTHHGkKCtaWzWLmcpJD9Vay1n5nxioGsiiA",
  "key16": "4o1QYVty29F4C5kAow9Et8HqMZqmUye99KksfGvVtzVf4v9bMH7atG7L21SX8tu6hgEzYNkRsv1RV5JaAVsVfU8p",
  "key17": "4P3XiJiCcdQuXDBZ5vUFm4tDodWFqHSToLnPWjcS1guZABVmGRtrnuZCVtg2Hu8VyVzWhS8GS7bVdNaEJvc3TRaC",
  "key18": "4eURvL9nmL1sMDrcMXtwTzx6rbVweSZqmFrmiJuoSaWxxAV1jbLsAupxePzjNRg48oDRZe2ehXEWn5jkmQJRVnWr",
  "key19": "4Q4pGZUBDESceDAUnZQquxBHvyXHqamrMUhfaEvV66yBb4EZCeoZPhpziWbq3Pd737xAAVekko5h3sMbm6bJgkAW",
  "key20": "4n5CTNP1oANsNwdtma1F235unoRVwrtGt8CZESa5MK31AJvXF3GXnEqRpx3kXhDWY796CJ6wg53cqpPgQjGjUZEm",
  "key21": "KUe7EQnQig2faAyBBu4iYERGh2mZiPyBA6XDsuNgzDkF4trrgQWNbVnxE1VBacjukR1JmM7RCZyepjso58mVwYJ",
  "key22": "5FooeMDKXQi5gJhDFV5MT54LrbiZwYBDDjK79kj7gSee8BZDxziadgFENRq4qXsWrxsvE2AyMFkjQnrRnHer78Fy",
  "key23": "2wTUFcHsUBTNXBxx4wScihDQjGs1GQft2k41YnXFJ5gNLbdeETA9UnNS1fMjEpwxwavPqZnHvVCKrxEuPPHTW69X",
  "key24": "2muGWNdPZoRspqSbgfDGzLePyG84kPutKWAgNGrWEiWPqWh6gPmYrk3PVM6N9UwNV766SEModeMvZdWFbSVxPro6"
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
