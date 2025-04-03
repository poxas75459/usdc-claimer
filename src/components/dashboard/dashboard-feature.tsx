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
    "Hcg3keVyUZA78iiVdEq8Dcvokx8xmJUEuRRGXpkJJbCDa5NHSRQUZjfJLDasMsYE3y8FHwSw9BdvERdiiNysb5M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PJWjdpYn4FGmS3EWUBpYZTR4BFpJqQx2XdTTcg8heuHDAZ9u9qi7Me5B2juTEB7xw7HhWXAcKAxgFJHHqE6N9DT",
  "key1": "2wy5dvuBxAAxm1KsYTKJLSzT3YDZqfmt9VYsZ1Rk3d6UULcc3anoyhWrSFAZYgxzY3PCQcrNWaguUAkb7z5YNZgg",
  "key2": "47NJZsCMVVEDSCaTLYFYqTNkX3G9e2ntJko5CfidJD4gdQbwHyxBmmJHcGr3d1yxEVRX1z6sbcjPu6gq91xJtxD3",
  "key3": "3VSwbCZ94uzAs2ZMArK7PhDyCWD1a8Xy9FgtNmTtqQ6maqvC7mKTwTr41yqS8HMztWCktkgZvEEQPkkfg9zLZe9J",
  "key4": "3JxWBmooqSnpTWVv65zc5zM4hEBGhkHdyrvdubheuuu5obLLpqqXrtvBRjaYnhueC5WtC6nGTUAHDWZyDrP36DDo",
  "key5": "zrmP7Az2yRNK3AJtDCkL6A8LsRdL6TvLWQQaq5VcXkUYUvRVL1RitqcLhgy4FKNkAi3YA9W1HqpvYG9JQLB4J8U",
  "key6": "4YmbH2Kw1RnSkzwftxbiivgZ8f5x6gtD4Gm3q4uYUHjfvXzGRmw7nxYD1hYT9V3d92aBsuu5HNt1sYVhMRvPTmBk",
  "key7": "4AVJNDrWDZfP7nz6gJ63vLASAKKtXVc3wALBo1iw9qn6EAUV9M8WJ53BhxFPjQqQBA1RxAg2hvNA2kE1dpLcCE1Y",
  "key8": "3PiQne9fEnHPcE2NyPTWnVt9k6n42sccaQ5uLx6Aj6zWio6aAxkcFHqwP3TuerDAdDpiTYDvwGHs5VQDJqS9wXBf",
  "key9": "4pu6qAF2eQEJ2zq5wBAoJXe9bJv6wfkG61Az5WW3q1tEaMx38fe4DVNBpiYikGSj4y7Ltjg4zkWDw3zCLCudtuSF",
  "key10": "Dy8rk2QHrju9dPRB1EQhpfkDK555BLNr3WKraE7zwjyLLmtZZo2TU3gWDAu44AWBi5Hr22cJUmXwV9bf6D9k5uf",
  "key11": "534AntCarJiF5bRxVLX3Lpzagz5fWdEmmXoGBisK6a6kurpDM11CPD3eYsRsz5n9uXwYN12LaXpMoE1BKwnTpPVm",
  "key12": "64v4JuwKWBiDp3Dgduj8kaDRcBquCzUkH798dNGxe8BazZJcZtfiQRndspZVZf2R38WBcDpSkZpBBFL5rTv1bMkR",
  "key13": "5aS5s98zkT36tYk4VxyRCyBLU5FqS1pdkjKt2ZbMNvgYY1M3D3AwXg9LuN5A7cWpMgzmK98QVCA3pHkLnTTg8coY",
  "key14": "2UUD1vJT4WfHdL4SAd3jTDAagPZYRqaczT538RLBmkRyczKAmVcfEw9hUf8Detrp1YK5SmDNFoGMT8z3EShfipxg",
  "key15": "3xPFQFDSeTnZpUpoNqGkMqvbEUd6zNax6cnxAQHhxkJ8HXZZHoruMUQeYvXdvr4Vu7pdRYjvdpJ1Kg8yTLzLDfr6",
  "key16": "5WvtmeD8Z8cAuQEBUnVaJDnFrmo1ymMXPZTLwA37Tx6LE3RuPWhax3BvvRDBdgvL2phZcwjDn3s7SztsKzeXztuu",
  "key17": "2qpAsLHwYzaK5QE5LzQ3ewQCDV1QfEs4RdsG1bbGsXqfgUmpp7yTZFdkGRKih8dy71DUNbEQ7naPoNJPvkVmF3K6",
  "key18": "5ZCWz2Ccek2M3mVyS7QhzN8MkRoMiLFyXcpRHSm65JCbZDKaGP6MoGeLANhVSzjoVdEbyDgEntBHe7xBxjEzKnSC",
  "key19": "5ACP65rggDnCPGFLxiDrBZCFk9rNgbTe7VuqKcseFKbFpArvgqU3QZ6PQ6KSor3SNsWcqgcRiNv2NHUiTfbqF5QR",
  "key20": "3QsRjisCfD48sWJt622k4rehKW8wBBnJc3miJJLPvS5jdTz2rWZhwe5bzrT3TSAt8rV1Dtniqy5FYGHR27u3SKp9",
  "key21": "3yqSAPwuyuAGjfp1yJacKD4aWJfLXhZGMwy5bHxxt1sbseUKw3RttVMjXxUUFiM1Me9PkaCHCDkEWMcBQNd5KRis",
  "key22": "5ghASYP39PFEV166uLD8Utu2vRsmm1nKKApAgX8XavUnS1QszG2iJaZSR2h1xPgBAj4RCdy7CbpDadu2DH7NkD63",
  "key23": "5AFyamSQxp8nfL5u6ye8VXtcr9cuxNvCWdky71dfmqFN5pjMwPswc7ety2tfYvcGqVfuQ1bV72wqp2JGZF4dJHxr",
  "key24": "3c73imWiDBa5tYwtMPArgGcHae3TUfyJRkW8mgdb99HjEVHoBP4zjE2vSKvCRxzN97Mee4vb5To9nmwGojsixMWi",
  "key25": "4vehimpgeHG3f279PNR1ekdUiny4iWRfMJ7Q2izFRQBFLW9kUquQw4vHUKJyD4napEHjKrhG2DzJXx2xBRCUeC3v",
  "key26": "46kG2f8BJPXcNxJCnMY2ZwPg6APDVRfgMF6tUUiTu3Cj4oJ2rACeGxvtRCNjaygsijhZAU5JJtSLR2hUsaHtMNhA",
  "key27": "5fy5N9P7boRaRK7ZJsougGJVJMkPjLVT6byPVwVHD58ZNtzbjrZxnnszceBX5mjWjfD5eaeXuYBg7CyaR9eNAqFR",
  "key28": "2ts6Qx3HuWNHLqqTryve5A8Tzbq4qAGDDzGJpL2k3bZjbTnwBkdcAMvyFn1L1sr2gLhb4dFDU1xzJiGJQhesreBW",
  "key29": "2KcJv5dNaJFWFbJBCV1cz9EeskEgWYgmNi7Bi4u8uzi8tcuFFm5AjeP2w4odpFXPKYr66MXmuAYFTrNs2rhq2umB",
  "key30": "uLWu5cAb1uxet23Rz5qCFFKaaBT67ptnJFFrUti8F3siEQaR8aQjctxHPE4qLxSABBZL4z1aatnTZS8RCnGx7p1",
  "key31": "3o5X8mimjTojCdeGH2pBtZYrTAiVNtAdg14b5dc8BeVtqyfR5Y1WHkRALgxXByReAKnYtPa7kL29htBvFsmrcScA",
  "key32": "3DkecedJthJ45jbsp8BZFcTLzHrc3XrxxUqxumv7MEfG26KthDjLUhNbFduvPWwEJWtxXuR2tvxJh6mFEinFDEzL",
  "key33": "2jZMos9phxZAQdJBLmESNffVscEiVWmakNimEPNHetnEbJtqeLhJ4HFiduNc9LP94ZSR2tyyFyvbKswxoKmB3x1K",
  "key34": "3MkoVQSuxpcfFErt4ELpAAA9N2pC8sYrxkfBMKe6LucE2SpjbPn7BHnGtyXSLHkLCzV6yjRdMe3ZAVdfoN6irdAo",
  "key35": "3zdwyUXv5oY4myXQRd4xSocMds4xU7va6ymJJ7LAC5s9m9BU9jC8c1UV6211UFxVJrY4Wfk6KiSkiMqTjcgAJoJh",
  "key36": "3YD2R3grPrLx18yBYm1pWAz6kV5QTyzgmjhTK3DTkFBXN7kXbdYgGvnHA9URqQdaEQFLsiyTxQFUeNdzdnUuxU73",
  "key37": "5P4AkUvJ5Jd6Gb21Jc7zGCacLiCPe7wTn4VJBoiZHDG2qFxPCvzKGaFkDC18reNUw7AKSDqpFd2cwfnHDZLJFfSK",
  "key38": "4rxLw4PzeVhKqVhAAixazYutggEjkL75rF5r1betVTsLEuaiFh6YSPJaE1G2U6NUYRg8jusjEnCr14K9huYmzxJw",
  "key39": "56whRusPTCfbW9hoUMyz4JsdbCDqzzxtTZ9C759k4iyCy8vcd5RTxZU8BpsSZueczLckAmsV6B5bNUNCbZmS9ZG6",
  "key40": "5wYJ9rp9YtzGdq6qNHYvKCkoB2SndwCVbMyNPYwQkmaJpAjtSFHbRg3Ddp3jnckFQ2hidcPHzDJiDjoCSMUyTFJv",
  "key41": "QwxGgs5d6r7ze41chLTAWWw3oVrr9TotWGMpPNQwKQGsuWCzcEzkB6hnmhzJ9pBVS5Zycobg4iruvMZCjX7YQfE",
  "key42": "2M6YsnXcJPk7LMNMC8r2QimDxpR2xQiXWhLvqpF1BweHsCCt2SSaTgZdU7h2e8ByYZd6xQJND6AX5y22Eqaoh854",
  "key43": "2yFyzcciPHKaQ92mTBB4zK7HZF8miidqCoQAw3FhsVwFEQVAftvUqzi8VCBhhK5XpbDA3T19UYTd1ZbSzsCuUJ9J"
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
