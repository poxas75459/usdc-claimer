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
    "5d8d1ToHNk5urLXSEHvv98Wpnd9tmj99KoQ3xEoJCjZvb3c7gzYQyxorSpBXEu1bAccWKaBNzaqSPQNLd4u9YTvj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63Hxe5pHjTweCxjLMJZ1tZRw4jfe94RzYBQowbWf262CoFykTj5L1y8DL1JpK3YkBMyz5ChTnw8xzUBQuZh1jc7p",
  "key1": "4EoAfaGhh7uSEnuZSzy5rmUUFPiRSb2fE2MvDpTFXpurxKjeABFHGhhfD1buGCa3rUAeWeGX39ez7b2XktHEycv5",
  "key2": "3b4V8mznur8qtVEY6Ya6QbmeM3CL7CkrU9XiytAMJoZLRwGE9o6t2wr13f51XCVULJwmmHAtM7CZP6fcKHCmW5wJ",
  "key3": "46UVXzQ55Q62ozAPgS3GXqjb8hk2bf5rcPfXK9eb4gr913AoWVBrY7Ckku3F8Gs5tpX1Xx8spiis8wma9tnWiTyQ",
  "key4": "5bPkQFyY5uU8b5Tj1VK9HUEyWds8Pt2Afbmt6uoEzqFNqrusNM9fggGLzrHuYzf53D5EeGB4S1xH5W7hyrFYAwya",
  "key5": "3yoGpCugeWkUaU91AJkdMbgYeosmiM3Gyu7r3GjEEoLp5BoYMTXb48sfbvvtxxhDNsoMrHS1HSjp4SvjBBCLa6wQ",
  "key6": "4YmkPYPxyj9v9ynLeXx1LDJrNzDR31Gg6HWkzPQtffJWEYoiBPcNnB78x21Vix58mTfSun91SoD6JDehtVcB2wsA",
  "key7": "5XDC5pFwaUxM3PhJpAZANV42929Zd7y3pukKhNi9wiKY31kgqQEqybnbB79T5k934NgfwhLJUfAUjKRSwdtGrWk7",
  "key8": "GkVbFQsiMFMpkCVhMpuDoBmyraGF6ntvLhNjhaMG4snbh9hz7kxnM2UXzadxFbi3DpV2Cg2twvrBmFfGLsbVpn4",
  "key9": "2d7GDVaAS66xuPK4QsMrbdssLhBKAzsAiNwta5u1WdFAnRWLP2oimbt1X1iwWkzwEcDqgonLXYgiWjAzjQU6vrjW",
  "key10": "2RBP2M2R2yEoF9uSdAAhZYyFLxWcrxxxkZFVxZKthtAWvexZ855mgGBdmrb99H8jcoUZWpxCBJABZK8BtjSdTZS",
  "key11": "Ghtp9fi1XGNR4CvyqV9P8W5CpRPAzWNQnsgqP6WNeyrHC42FVvWgJVmj3h9SFyRHPjap49jqNgJe1dbwywTuJKd",
  "key12": "5yt6KJCDWRETzx7WGxSYWWj6AENiK9fP9EYQvqBrNrBYj1EpCnYuwdQu5ng5FKkBGKPHoabHKeBLr2tG2AhnMhBa",
  "key13": "5wQ8qcCzVZx3dBTj4jX9ZXPBTjodGSG8EgKU73nStRpcZC39zA4tceoHWYTKi1Q5Wgu79FWw4z5yzrUe94E7NwPW",
  "key14": "4XfYfhXkn9YLwpQnWmZYP62PsMZx1K2xiszE4MqfPfYEW1uwYFpGLV5iBJaEP2UqphphR1ugfatDX9nKWzSWQoXY",
  "key15": "HS3XQRTZsfiYPGvUgCAscfkpBScmaWgUrwmZNHtZ9oYxvPZGnnwfw4bSf5CBevUYuuAx2DkLeaZWhcgRuYXT8m5",
  "key16": "sWqKmi17EYH4PKZZsKUoAs3Y7DefRV67KiXoDgw7LBNFUG8CVjqJiiVbVdeUtFwkRDvVyJ6QfKkVV4ywVj7V3Xf",
  "key17": "44z5pj9sBNjsyZasD6bbxmG6kDmzgykkxSXoUPiXuMn1Y3Q9uCPE91vczzaFDWypCESwLYB6mJfaXAjHwj6HDVQR",
  "key18": "2Mgchxi2S3sF8icQ91zsKLHwyM6pY8Sn3vJ1ZsCyKGZyhSUbE7CBtk3BzTGeCwMEdke7VvdUpgLSBybEpZ7gRM82",
  "key19": "2T2vAmMtxdk5P6EtroQMFs2eJBHLh5ueuAnB5uqDKc3N5bqhYdeiGfBwtfU3xx3HfaZaczEyhtn9HuEgkNtjMHxi",
  "key20": "2CuhjJ8K9C2Kcsc4G5Gf1RDFPj5Qb5Hem3v6FvTopabhEmvk63MZKJ4Qi39GzLjPbmpDk5ru9ko1R3VvZs3oj2VJ",
  "key21": "fWTrTcmnLFjQpPd4S6webL9ZQk4kRb1yUaeSkHBgW1y7JpE7eW71FApVv38G1ZBV3YZft1YMDr4jZHXi6HY4TBv",
  "key22": "yuzh8AxMQrbPwC3Ny3K8zg9aC5XYwZuWuA6PxKt2QHVKSN8NqfnL7QYkqHBQ1CQNzLMSViiSgQbRpY8Vji5Qfwv",
  "key23": "9T35i9kJ1E9KuYH3krbcRRtkASn6y2tscvmoWUzBoAfwpwEfS4cFscCzhcJBVQ47GvtQ3SSuV1bw1F4KMdbfgRU",
  "key24": "4E5LJrAcoLxqG6nmShvAdBkW6C5NBzBiv5ikgrXjvh1tzW79TiokUkF8YQ1oMSWdTjcqTrAU9Cjbq8r2JiQCNFu9",
  "key25": "4XbvPKHWnVDG4QD1GhPvUXx4VSgUhK2qAtWyaPymKc9PmADvkhJUhyr8A8Lg3UPg1kuCc3ZBhM5EjpZN6AAhkvWA",
  "key26": "3obruUybUKm5Y89B5e8bjVY68LSfvZ8zDFU8swFvaXUa6KqDRMEXzLBqBqBhuLxZBL5Zg4UEE2QopW6n6AFw4T5Q",
  "key27": "2uLgyMPpTr2Uh3Lusev1JeZgCAz522fy5yt8hhowwC4nvqvJy13r6CBkSVLygSjruV9kuRStKihDzAxVzrqgLUqK",
  "key28": "5wcUtnsNKCPi7q4sF8NJo4TxXyaVWbrCyQ3DzD2LSqxHkxa5jF6CfBD5UiuiAQYr8xB5LGEqRxF9XuQD386Tri6J",
  "key29": "2n36N5gmZBYe8uAr8wneWDbLCSrTjDSprQiiYyDYrLM48HbVBnPKW39AAgr12jD13eGgtxsYXpcQTo9fnDJE5Gbq",
  "key30": "5CVTVAu3wATfreWqo9J2BbMSmUCyQc2TqdN3TbYezxsetTjyAN23dvZ98zKteT2HGy5ZpwcxXMQ2iTgUrcJDCyTL",
  "key31": "3bZUX18hnGWnnp3TPZRbbALJDis91aWaURcqgrGg3R15hswovSE8NMj39JGNcfi1ru6oF1kACs9K5jCHfWQVZ5Wn",
  "key32": "2EBhi5mBAmSLxmkvUqzD8SZ35ihhPmSKgsC2CAx1Y8J9VrXWtRJdzMw2DThgyGFvddwu4StDSa8u8mtqj8cv1hDC",
  "key33": "4eCu2iyeQmSr4CZM96nvV8FageQANFxyW5QpSF3zHY4vALuevwFanBzp498HjKE7Y7h2rt7yGKu6yGasFqxxcgLi"
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
