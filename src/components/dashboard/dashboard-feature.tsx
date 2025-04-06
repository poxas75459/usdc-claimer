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
    "ksdbCSNg9gT4qfDEjEtnY9AnAmCXSHpTbgJ1M3PCzSoAtCQcpmQ2rmbTUB2b4gcBoUcMqqtA2ASk9RPMCfr6zEt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U8XYvhmbCUF4LBCn8YpMigY4yVdjejFdeAiKGhunwgpq3yoLGmRKoQYLbR7wVrQZ2QBpiKVNZjzUqH9Ya41aFku",
  "key1": "5Zqzr7eMNX9asRcN4fFsF5AYrqEjspGiWzzm8HCQLmRnc7mX6aSZCDJTJWGxPDmo1eWfKsZNgoHkFwgu4yVacgRg",
  "key2": "2n8XQZxoLd22eQ182E5gP1sbQrotTvTuTiFMVYcjSEC8x2SeqhJ4h3a4iyKgoJ2ES28AL79Ha8Gr4KSwDmiK7REW",
  "key3": "rYn22Y5gV93AMBtq8dqHpY2tcspALHtSD4MkWqQgzxQdZ1Mg6sVfrk34DPRKukE2Vrda51pv9yFwKvzD5SGd3fn",
  "key4": "5GfaE9KwnDuR63r9Lo5oP5R9tpd52XSqMejmFfxvQSKDYwbo8qGTrUhv8guHMUmXMmJL9rgSkBQwHE4amRSG6HQE",
  "key5": "fDHAV5Qm1Bo35rDtQfvHg7qeyq4NeyUwMeHGZUr7PuEM4NcFyedUcDry4k1WsLc4LwHnDDJoo8cNoX8VcXQhHwD",
  "key6": "3PXHnV2jnmcoRXKzJyuTcgqZtYtydpb8ug3ia6LMdrWj7ofN2MVaxddDxu2U96yRhz2mpvJ2x7QNKBTX6jDf4jHW",
  "key7": "44sE8ex3WPqsFVU6GxyLZyrQqqcDBfPGs8xxz8Yxzwu6aXnK64MoaVe4qx8igtqis8dVRDrRVihPwJpKy45A4sKv",
  "key8": "5CMiecBgPK57xkJ44s9poZsxfKNoCQZ8ocGeHAthyzJCNvp63bZNcTreZ3h2GjUkbMsLETjfzxaiS1oubxHFgo5f",
  "key9": "2DNEZxjDiM2ZGMWfAY3xX9awqwuRjkzEHg5m9pLUkBPhamBtdHcpoyjAW6diRDxU7yEBf4HRkmvtLH2L62f72MnL",
  "key10": "5gs2WfVTJtGpLW3v5KsPaU9SV4HrrxKSGJ9ZKmYgTHCxmXitu8cTHLVxbQbdXnnCFi4wtaTfdbUWWbkggCzUEJSh",
  "key11": "31FA1XWMcLXEruwZmAozGAaycLjZux8VCwDFhXRXDGZXKzoaiPTc8uu7oPHveXZZyp2BZXLvZWK5YNVfiEGJerwj",
  "key12": "4wiWwHH95hJibGdqKM4jGXzmQVuGoK1RrYjg2xi9ttLZZsDHRGAHjvktZQyQoHE68D7o7QebVh3xzAsnYUSsRvdG",
  "key13": "4f3RW7zH4QBd52Ju6ZtdRAtoR8GnVTDTK5o6BffbWCUbuhX5poAfv49o6G8Jys1iHDBf7RTVQVhUdXQiskLTFfHu",
  "key14": "5u5m5ZrU9mdLv5jJyhkoLiBhDub2A4qbMP4Bs7ThLHVPWADzx7zFEbBKeFPtWPio8RoqMGRtuCguypaNrXWmGAZo",
  "key15": "5uiPKnH6ztGj6nNZANLwXDSowTQLnAsvmZKG2tt1xLGe7UhbDsCxjuPvCYGfeMt9SeucwzRy7f78Q7gULg6m6ZYN",
  "key16": "F8xzygvNKoJjrCD2xqCfg8yYL2X7rM5Li2yg6YgGewpYV39nh2Q2kx5qP2VsvSnuogKtvBZzK2DC74buwkcGWz8",
  "key17": "5prP7d43L2PJ5XtreyLQ1v4Dpg95ATGfz5CnhmnyNPw3Bv7P3N8FmvkaRKGW2YcPVBx6okBMSkpZwHYrZXgyoMHD",
  "key18": "5grhEDYtgwVdvnSDuwt5Fbp96EhdCVg42EJk8yJ2rDdZ7hMKZpKG1hR9xQAeVn4qG2ZwvRSVkS6KQLjLGWvp37ST",
  "key19": "2V9PHkr3oeRdRA4KyKUofxZ2pCfAibrM4zfqbMDhNvycYpV6aUCRNEcHm9cfcV4DmHRc8RvUSjicLNyisv2CA7Z4",
  "key20": "2iDrDqShvTeQJRtCUhfYeWUxsSk5wseEaLoSdEAKAVt1kviEA2AUH4TgGsTbv5KQWgumYptEPvGgAH9ehst487Vh",
  "key21": "4Ri1TS6RsVtPGsFqi6kBKaWnzCRDGDzYSJZZN6suYZ6ayGiVSBizwcpSaVWrBvAbqQeZ9VqNC7iY9inPfvqegfnf",
  "key22": "4c8rFn4NGUNQU5kyXtuApZeR1NWEYiwf9G4oVjMj9NfUdghpQbZnL68Q6DkALz1fvxpDe1ZVqxa4jXgcuQnvqyx7",
  "key23": "5BTRXYfqf8U8A3ujjRQawFgUXB8SykfCKVRVYzq1HYhZr4MHK5GvYw64meSpoaT3Jsbf6hAQWR5PgGZesoFK6nsd",
  "key24": "4w92dUgfx5kRVdyZPGQW8oNUECosEq7hgqu5sdGytwGFcnMny2G3m8vxGKeoh6uXfEdEzEiH28YYDg7rjpMoPBkd",
  "key25": "51QbGXXKkNmpG8HpYsivwNFgL7svRyJDnkDpNYFBA76tLvoN59c77ruE9uDQBPMss9w5GgmTMEjGa4imipvdsGY7",
  "key26": "5SPwDdZnGNvnkZ26wdcXAAyxwdtx7fASVWrVG2zfr8WmahwFWrx4ZVtrBdRbnXMc8qzP7vWNPqP8i4wD6dJ58RWZ",
  "key27": "6LjxmewDRNmy9ByYqGur4UevBoRKtfTA2RUDLBqf5aNukCdzcic8RsCe7YzasPL34cxFJknT1RbYYC19EbpPZBV",
  "key28": "2FZEtsvBrnh46hnCPE2hUUyn2nwKBCBp8x64BuCmM5RN87DtqxS81qxPaRiiyixoMf4JHaK5R39vrGB8hPSDx8na",
  "key29": "A1jBuNGUScnXeH1zT5FrBVsRJJap1DopRWYnywMEeYBgXWSkUfY7Cs4agmhRymKctMALVEraZiDP9qGHUyA9Esx",
  "key30": "2YqGQhb7pCELzE2sxAK5ZTdURDC9hBeNquffr5DHnVPQ6HFqF3C9w9uQqGaeZLLPk8A5n73DG26vdxkMk7dJ4jP9",
  "key31": "51sRqrifgk91jAv7ygdw2MFDLByN3VVhSozBXgagVvbuKqr7uQKiuVZyxTJ7MBZtBjJSEvxNRqbbS7sVWuksaZgP",
  "key32": "vwhnmhSXRdzYN9eHWJ5CaW3qEU3NkBQcwUT4WfRy3SdxkV99ZDrGozwi4VNhudbCL8boREGxgyYn9RK5RenPf4R",
  "key33": "pHHyBnREEc2yvNaNEEU7kfwrjqKkVi7EwVwdeHgVcSzFhkapwCLRPi2jvJZhUGqvRNtiHaC5RrtGqek5kJYP8Mt",
  "key34": "2o45vNjsspDEV31ELfnUULshS1HYW8Fgzf943118PXeQHrqWq21dDNKB2VFifkrYvtjFKVA9EoQaQALcP8ZGrK29",
  "key35": "4yDoX3MyY7eHZ1eCPK9vabLN48X3G9T1LQKSTcCjBjE6JF72HMnUqKtT5ayiqxWvXsENZVpffvBDQsfujbg4mPUP",
  "key36": "72nrhMmDYX6WNhH3Lk2KNdXk8anZwaJbDLBxcrgRsYx9xDVuiWRATXxyaG7hh89Nqp4GbAzhx5yafrnmq2zzZex",
  "key37": "31sJRSBh6KMEfoiPnw5GDgyMoo4UDNN3zhqvNeg2RiifjVedFVcJzJT9X4acpH9ENSTJQybNqAsMcYpNBq1zhJvN",
  "key38": "5D7yjYQCEFb1mDwTAJwWXchrHdGFTV77g3cn6kvzN7DCCJ82XUBn74qBgswfzKCGKo8TBkLLS8CP2y95cdP1wR4a",
  "key39": "4cpEHe8YWG5xZusWEQQzyqBFyX1ABSWY3PTBeXN4bLbseeA8dhTDL6ghMaqPBxxT5nVzEi3RVdhFdGuwoHfsdgJB",
  "key40": "3An4GZbZWbkthiUMbnDYBBktJtrkgq75kPd3Yqed2F32aLyWTXenMVHAovMGEWNnd1HnYMjGjFSQGPZM9mpCDmxb",
  "key41": "z2JKeGVwSdVXMWSyWpqJEUSLTDzT156p8ZnAit6pzsvZM5nk2FhhSFtPZSKN59aDabb846AxPfi6zVtCQ1NxpQE",
  "key42": "2UBeyGnMA4ApiQAHsTeLrEtEwMnoNQg3EQmedkbsmJP1iVHonw7jm1XLMZP4LezJXNu2yxstfDw2dJLaoP3UZLUK",
  "key43": "4RokVR87RBgn35SJkmquY5a8vwgvuf19EUbuFtyvt5Q4BHDQdfKcbGWym1H5r4qt76njwDa328v9okYBpEQVqs33"
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
