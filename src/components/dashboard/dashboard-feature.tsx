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
    "39zC6iKkyx418SVnL7HsU4e99x3kxHfmCeSUoiFeRFZ4N8uLxnB9KNfysftA1w6GqFDD7ANQy6duKYjCxvZDpLoQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KDJqDTsykhsKtqL62AfTNNrJ8GLtdTSXLm47wbM3QpBk7ARvdKd4GgMM3m57GXDF48U8nGR2WyyrLrWURYdVmKV",
  "key1": "3uWKVZ5qBuVbsdfiot7BJasZco2BVwPead4jm6SEvjuPSYNxCxqRvUaPHWWXcyUoMPva96f1ksixv4aU7Hr4k4RM",
  "key2": "5Qq3cCe4fs34vAK78u2NVnL1Lri1co3twsqNmAAGmun1EAKMyWwu8ifJozgtbciurG5swrHzx74cCUWqCn5hABTf",
  "key3": "31YEhgKAv37KoM2yLaCALkmowecG3oxXMFHtAJkYUh1jX4uYkhGGmbwLDejQwVsmaQUcr7cgqao3nboywoCLmuFG",
  "key4": "5BLs6UL7ec8Es6sp9HJcMDmAaLyhWNbF6fibA6sHPZmzo4LeqdJ6HW4eR2mkyPVDeYQ7oQ5zx3jTBC6gUr2RocS9",
  "key5": "39e9oTNYB2c8XqXTXt33ivmtybUZMPyKX46NLZUDTRMNkammZipchEF9AEcxpxRw6BJQCEh7UF7ZaSfK4pDM5Qk6",
  "key6": "2bP4NTbntZ6wCHzUpJxCTPKeSFPvfbFURoFAPsm5EBpfiUpV2oWc9ywka2f9aWKCWpj34K6H1zhfZG2U4kiBedxV",
  "key7": "2mkS3zqSArPF6pf7325Dpc29jdiuKZwi3ryLs9miggwqDTJcshvPqKufNpY3MoBCsyk8XWC8sadEVcb2AGMdm3Du",
  "key8": "22vqyTKfhLa2kAKx5Huv7s2JgXnmZWC51GoQoRAcTiZ8dJfP3WnbUAifNgL1Efa6HA8D5KZEgq59AbffDZzh3xas",
  "key9": "61iMRhRd57JLutvsJ6wrX57QJ1oRtxPwikU5qsX6FtFvgQnwssKX5RfEpGBvsTH3a4UWWDzKoDiZjvC4jQG9U19G",
  "key10": "VRJaHEfNCVdW3d8cN2yLGMgdc6iefTXQuFhTZh1aNhHtHMDj8eWURkBS2S6f5saVpdEBMHfSpqb8EzzgfufVcFQ",
  "key11": "5uEZC8NAjN3hGv7ABoVA7fuRQu2GgY9ZKYwFn5bG4mG5y7Cv5Zq6ExPj7AWSoDXSdE2fYvPRa8EM2CbQe3gAFawi",
  "key12": "5EVr3TKcQpYRJhEJxdTXVZcmsQ9wuRd8Q5yb58SGKNdgjkGwWAAYAEeyxNKGyLjehYvWtquvKsXjbap2NN4ernVz",
  "key13": "2AJ9XihrwvREDgF3h4bgFFE5B6iNDWcsgRs6mXUnHrFiqeCYvaK9QE4Wdc98FicSEu77cS7g45DUwHu3TwEuzZe5",
  "key14": "474J3RXtrCHc3u7Egjc62AN73ZRV2Roh1wMwQT5Bdx5AK96Bvbhe2KY7cd8L6PDfMGvydLbHLNiCEpdbZt6oSPj9",
  "key15": "4DatDaoVs5jV2Li648q6H6aLozmpshpRmDJasyP8i3Qe6HC9KGPXgGFTWgBgNtbgWozvnpk9uwpppdqyUZfvaJXK",
  "key16": "5jSxu7ea5xwRmrSWd3w3TCxSPeoq6UxmB9c6yNsiTa7YS1KxXcoBR7oDrHAUX8ZMXMcAUfzpJTdU1zAdYMmmBYcU",
  "key17": "2RptaULn8ya9nx7h7bJXwtKiTWPVUSJBQDAjNMVnbDYQ61D4WsP3S1twd7LeQ2NZDRBeb1j4asTLrMKFa9SewgZN",
  "key18": "Abkwc8a9vbX8MJbGST6F4tzWyueS4hPVwVdmZZe4WCWsuP53hSqFzDM5nURLx4R38TZtdzczoFmkceM5LPkTTiG",
  "key19": "5ymGMCJx8xyDQ62kSHbHoVEhKKWpGCfqeFx9bGnCxo6EwNVLCUb8aC965EJ8TXtu5Q3QxCPrYE4zxJszFuShfvTZ",
  "key20": "4ywnvXUxiwi2X72aThg2efkxzogMgLRBSZ1k3VRUAwvwBq1c8bj1DmB2vx9RvkgNmjvQxhUS6NvK2bYAbCnobCnb",
  "key21": "56PBvmCRvPt5LZ2yaXCoKwJdnVxFM5LAAmWaT8koc5NJR2FVZLSBxvsDii3S332Kk2kLADw2QgoQC6GPuPBE1Qvt",
  "key22": "5YTunXexTT769eGzHt7JUcBJrmEpDF7ychRKvvxvM4RBDtkGvBCXNinjApbAsSyc3zhxkV6BstpuS4mByWibTB6Z",
  "key23": "2u8DNrLkx4EXrZM9AYwEcrRqBFC16jwPaV6msKWRX1zKiCrU3VJqnMXLZJC2Hn7muFqMxeC4S48eHovKNp7kKfKV",
  "key24": "5UNWQmCASqsj3WqtHCttjxAeix26DT8wXy7DG7dZMEVfcyz8gNGYKrmf1W2PimZ6CT4X4pL2G3FmTzoKXU8eHnmT",
  "key25": "FRTaFSaYNSRefpmwVEw983uMMXqMTPVsNWq92CkHAsUs2ojGY1DqUwziQVe9Xs9v2eLpshxWPAYxAaQJpDLhD7y",
  "key26": "4xWHuYK9yWaEnoXiUyhvSFFEyecUye1oSwrcUbEBqvxkorQ5Mh6NGSWkXaaGtLPdD5WoRuWXrTpUwxRhuebQYCQE",
  "key27": "3GgBPAbLgoEekgXMo2UwdsdUoyj6foWsPCV6RyiuNbnjdCAovsi6QPfVpW8CuYJEaxzZjdGTFkhwYxmv7KeVhXu2",
  "key28": "27EH8Debq5suSE4aaF8EvvLvkp7PEwvZVfcCA6nfBLnMCgdmZaVEZe9o9wGG95Ki634wipog3D4CGsAvg5QgsKXu"
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
