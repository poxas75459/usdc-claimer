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
    "4jqiLc7SRB8uqRWmMByunsiGz4JKQQo2pAQg6WPWmTc2VoBR6QCN6Wh9HLgKo8BXPZaZsnY1C7R5dhDGWHzfk7gM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ufp6UHb1GMxkb3sGS5ae9HsGDp2tnGSg13f9MAEosHFWWdzL1GiRWXati6sDXyCkbGYZYZ6FqN8WAs1EntjxEd2",
  "key1": "5H19UngcpLfbyByxw2ywNLuRN9CQ36dMH6wd3Wa5YAcijjaaHw8rFHt2PT47diQ9tkdYD2TQGHb9aJgZswqjTuZP",
  "key2": "5TDMP64EHouoeW1mLJYg5coxHagu78sx9Q2pXHsY94g5ERnuqgtzTyEBCN4hR1T3K4F2Z5wUHgytKBhwPkaGoJqu",
  "key3": "A99qjWnHJJkov8zEomh47G5pgigbecgw64bac6s8FTPvf2G3wN3XF2iLVnADxfRnEFeASV4knayMSFvvqxtp2zQ",
  "key4": "4yN6dBveZND7etqrAai56k96sqpKtipN5uuMRLyrdnP7hNEVuPCt2w57ZqUpBVCR8BvkjXZjMwyTwN5KkUrcdKyB",
  "key5": "641EXoSFnq3esizLkR7nxbvRxeyCKm6qcPqUJuFfHjgWAMAFQLQjV9GeDQych1G18WNJXX7YUpiK9jxwJSsKNkr1",
  "key6": "5HWDTFtUYvVazd5J7vBbjbimkKoH9xDAM18tVp9m3q3isNMKzyTomQaEWxHNWgRZBupmuZ9MgWaQgSHj5G8mcQfK",
  "key7": "4asr3CdQpmoz6FXLPcQk5AzHqxYMEJsvcuiLJjJNxFsxcE5Ud7aR6krGrxhqXhvSZcCJ1SyseFenzNog4Gjjne1q",
  "key8": "2kN58CHbuvpvczwzUvPytmknRPhkHAATkfCTneLWJ9wEFnXXE7Hg2dSGWaivA1gAk24Z6HNSreCmZignwwzpV24Z",
  "key9": "51NJ4tdZ9x1qBoBrmTZA8jz9YTQJB8bRsZBnpRg6M6sZjDE7Xb6LESCWDw4YWDVEZaEnpY59iwG2PxAB2hSFnR9a",
  "key10": "52dtMBD3UgKvKDCcNzbcGDuUfVZkbGpMbeo57pbVBmHZgyFRWTPdFxc31EqHpkVcR7FuRWBNmMykGYfh6yhS2DM",
  "key11": "2qq9vwSqe8juvSyr2NmmbDyjH8nNwPmu8FEZW39ShbM13fwNN8YLMgDB5R67ij9YC5SzcLedBQEUgtoqXYi8m63e",
  "key12": "3B4xcNzLDcGjL32naFoR5zVngM6ibPoxf4HjQnvLqejsio6e4SzfEawk9EkgkkERFuxpCz5mupWX1YGMz7Q4C8oK",
  "key13": "254mHRaQZTzSniFmPUavxspd43qhg2pukfHcXAfRNURqYXgWw1trXqpiLatkxxSqjSBqBYJtBhXsobQ3sm8A2js7",
  "key14": "3YHSYhkcErAKjYvDzHNhJUaXhny6prfGvH72TSAebAdhaCXt9SBPXSeQ7TJAuuPLQu7TL9Fsr8FAXg3EUoFreBcz",
  "key15": "3nkcuc5QiUMCw9KYK53pbxJDwxgT8NdNFgB1prfXcsjRStDu4zJwd8C3775wKawnNfS4mMYxt4mKf3Ht8RXqnYDD",
  "key16": "Lu65v2oQyhqgo5T8jfrJs7eo8tiPFbTGqggMxG6DbbP2DSbh8rr7UdkdUU66qif9sDxWHdb42wnpjvkjbroGFx7",
  "key17": "3VdcWLQ4hw18Rpj8CoU7jsi8HXCqwTMnvdpYHPrejEws8VaPtaoatdxF913dHkfhvGasQ8XrmYbiKmkrgEwfiHb4",
  "key18": "5Yg2rycXUtGbeN1JhZJDvkH19jP8b2BG7z77QfmNrEHBEfmuezh8UKhw5dXR6qmuBg5fVF2Wk6tMXnvG4Pc4TVMn",
  "key19": "oCJtXrHskKzsRMGr5gHEXVXsEMGYhsfKbUxkJ6vcNALZ4X6kz52EvzwszDe52aqz1f5VLGoBuXWWfrkCtTUK7FT",
  "key20": "5Tzxk5fsHPmA8JGQN6eCmfRUFAjcFJ9L3dZiu68FEYRER34yjt7RNoGG1H3f7ipmHTspBWfG2LpFta4jP3zMktL3",
  "key21": "61CoNPGaZqego9oxLFoTvAqopxjCBWbLRyyhx6t7jf4nuekzqE9y9RdKm7U13rJeBpxQs3WSYbNaeuxZRYUDWcjk",
  "key22": "2auB6iWWvGYSGwRgvWjiFYVCAMACVqP6CV5N9jMkYAKVzuaKfERc2ELGqnZH4nJvGDd5JZwqqsW49Fw1pNiALW1o",
  "key23": "TUJG1vQ15tNpyrVCWNz84fmypAmqcYLdR8viCMqXTeY2mLiVbPggoD3cjuMtsQju5Mt7o51mQZpspnmQUdDwXW7",
  "key24": "5shWfRx3wita6ETdxVDdbWaH7ULXDVL1jPeus74wVaEyU6iDgCdBkVBGqXiLNVRQuhV9xpRPy7GJBLKwY1fbdbkt",
  "key25": "63qo7h78qhyhDdUi3j6oAsN9krHEcZESDXqge4EVPSSyG58a69hfV59spNfJLf8kKcKyvZNTJpbU5sExKuzv7TiZ",
  "key26": "2th5JFYetvyf41xc4pPzsVSk4fdVKkKbvqNY6MkgK33QKHvTeTcmKxEkcemLCtgqvQxVyngzt91WhwWYUiadk1KC",
  "key27": "4WpfPZcA8jVEAVNyKuw3kTz7tKtKHLgKxDM97afFFLt8faoWfSiXZQmiky6TCFdatfHY75yXjyRgo3g83BY7Rgr",
  "key28": "K6nqmAoTG1pvkMdGWT19jD6FUZwKUHFt4dqwo8oZx9eRU6vwboPC4kif899aCTKwTXi8vRt9mzUT7pzazHeSakB",
  "key29": "238nG4RqVkgwf5zMHBMnMCEFthKLWCrUwt9K9S6j9s6FEpQ9b8r6Dm1kEDQAGCr12bQvwoK7T1XoLXs1WXu25icD",
  "key30": "5jtGP8v4phXLVeqAk548nwhd8ejsW8DVncCG36n6zXKcZpjNKmncNu4Rvb1fWzhGxXT4FmSU91gEDYL4TFfxWV99",
  "key31": "2bvroWX5irRNxNZnjPZ5b71S9R8A4316J8Wm7aGWs6GDkd4zeZaTb99qhGQL4W3Em8evDWAyK29u6qDuZEwZdNsY",
  "key32": "hM46xdcTgqaAABXrE5aDnSiDJu5o24ijR6tVTrE3PtfEFNQaW5Xqgr95sKXRiXfmYz8frgVyZK8Bev6oajKgoPQ",
  "key33": "4xY6VxS3v7C6v5uxnztcdQJRFCPVPDmpkM4ZdVxEWAerdoZkDndLLgftrDKRany52o8LrfTKy7ZnxK6sruKQ5W1",
  "key34": "556zAD1ipz3sSXa7Gow61cTZzJnNMTNgzX4EiQn92EQddJYymzhkcfz4YCneodcFPGjLdZSQXcqhtCDMDEWDVxQn",
  "key35": "2DfuhY2XdpqFH1KGRcBYrnk6E1xmmZwqdmTumEufKsxyKVM1VudxTM9ab4wQN6jqS3sL68FQxokaRynsYAH5EUmm",
  "key36": "5ArP8W4JPxC1HKta6cAEkUabpYDmtcSfA877961vCgqVK51FPP2xLF87CNtxfwZc6j7AYVG7AJwHDGCHuRoPkv36",
  "key37": "4FYMZsKGBgLvpaifiX9TqjZgpdGbXFjmH2FKRVdHweKs1whX3ayLAG9VYaV7Y6he75QXpnMHdQnPS7MEvqRDG4Qu",
  "key38": "3Tx8VmaESsBa9VfmudrETMBXdKVcEw89iZ8Ge3dmS62Tj5xt4eF7853KrD3RBWkc4hYaPEaX2k24GUc84VfvnNc8"
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
