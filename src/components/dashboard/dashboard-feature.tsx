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
    "5YUs6RZf3JaAW2LsY6Xr7nF4dGh1MkL3zrWotvydKtX63BGJGGHcZ1tFVpTmj7MY5HMHjaf8wXaRcZhb7w42HexZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z48mBK4vkeyS6VuuShx97ysQngRw68mQtwP3KSPCqHSw8uqTUbt7gmyMXheVZ951pB9d46Mah8WdJLTbEy3C4x2",
  "key1": "4zaN6Diytw4kwF4oocjhSyRyqQzPWdtmBvwz8dLH5MZjiJTfhAVkEWRfcijND7ZQUxV9Tuu5kZJ5XCUHYXn1u2nf",
  "key2": "5sLQGw5V8svAP62gqqTY9C8cXzYTTQcjMZFChaih9EewY7KfJQqxkpsTLShXRTNKk8QLU53ba83vjBYd7ytcD6jE",
  "key3": "5gTguSbaxEihd99aMPH6NVrCMaULZ2wJxChSAZTbZ5Ma6qbKptQ1svFicrjGa93ninK5Mw63RwrkA2UMBfrssvLm",
  "key4": "2qcmHm9wAbtGrX3s3bdYjgPMVuKH6vHP5Eem13nMRAhyrHWR3KsssFTtM4Sa2hwHTFgpSG82pLP9HdzZ4Ap9ZH9m",
  "key5": "3Gxcup89ab7bna3p1FKgH92odveFHrs8wJJw5d4hnpq1J71D6njVNuUm4id7RS8Npwz5GcYLetndy1kCisLv4LCH",
  "key6": "2eVn4iPgZGhQX9gMLx374XExVsfhBmNbNEeoXoVKifkDGQ3daQeaNjqJsxKNubFgTfAQcXN8gMoVswcCeci2YSDN",
  "key7": "4UjFv1FY1spJRGRLEQUdkitEWaCC4URq61AXemsJ8T8hxKxVosRKvm5oBGDYMKSVmY4w2v3T1CXdej3ZyxFF6Aci",
  "key8": "eSnBraFqvXs8uxti9jCqjAuqj3XT9VzuQetGdratyj8nUu13U4shscMvaCFGLtga3W2AX3EhR74nLntEkTvwLvD",
  "key9": "3h2g3mz52xwQ7FU6BPJcmQrUFXpo8DyxYsg2o4fiCAg1oudd3MpnHW8KGckX1wFzk1ntg6wiBksJ2FzRwC3iU6gQ",
  "key10": "4j9trgxNw7r3eFcgLRHBPJPDohbY7A6gnrZxniY8St8EeZHudaejYEN5C2CGr43AMTWaQEYDaysaBqnRoF7GjjNX",
  "key11": "3viquKgUTQoC5Fwyfzfk1wzgUapoh6jkAkPach5czADX9Eing8ZWTVgGwVnt9JDwXy3HkJo6uSyQY3mnGhrgceF8",
  "key12": "2m7hrwy8uWNkX5BYwreAgmSL7gds4DPjUL22x7eAED48yVPJAb6rZ9beK8BWHqPdE7btehsJQAjYgeSaADEGQZQ2",
  "key13": "4PxgxbZrdqcRL2iZhDRJmkWMMXtTjQ1pCcGfWWhr6dumm5ddnL4PB2MFgw6oVACM6egZkiMb5qfK4btb5LKHjXMi",
  "key14": "82WfHettxCR17R6b8zGbQUSqXGNZi4nND3ftN6Uf2GevZA3J5m39keu75wp3qFU57zC1HqtEagu6hNMcZA9G6W1",
  "key15": "5ormGJUxbvgtsA6VLfLub6iiaw3GHzyxmpZecFeR5HpdWfosdBKj1ra7SZW5opncEX2YrRjjK4Ykmj4rGNWpvpr1",
  "key16": "4TDSgecUaddabGq5s5dSE2YniYJWPQifdkRNbLVLYV3ZaQDE9utHnMXcY7MFzLoW8iHP8JbQsfWGWkx2XqJ2e2nK",
  "key17": "4Md78hgXm1FAWkSuvnAgZDHiR3VmjxtdzSvUD5hDynt9s1tqSYq2Pb37c1HhLv7TjkyaZn5uPhasJg4csf9SA2aH",
  "key18": "24gk3XvduVoBXAkfHU5NRGJssFTehD33iac6ujGxhZJ2ZWfte2BZUVtKSkZsWGjSwamz6g2BXuQBNtBDVZgwbVzM",
  "key19": "3krMoTCVTAswZjtkB65osM6GyXVJ2pnLTSbnvC8wAeNbn72GL6pePSZTLvqGp9kdVpGSntuhXUaWhw49uT5awr1o",
  "key20": "Rp5Q2c7uiEkXYnrQWipfbYTBAsxKBhLwpoEjkE6FVCC76WgATSRtLeajGt4ivsmP7QuGkAy19VeTB6fkNDucjFV",
  "key21": "2RBKeZcToK6eoE5dEeYtDfu6WSJ9i28j3g8R3DmgNYeUPuwFD3H8S378qPx3vm7C4bncieCuFhSeKYMjBWjRS7Ub",
  "key22": "5vYoevgBP4JubxbkZTRrq4saaD6sQqFmnperKo4GWGpCaMS9GhTiMLGUW5B3Zyc1UDrVZsvxQ7JMwixSUX5h9m4y",
  "key23": "3m7nEYkZHGKJBRjRqxdihKfkQQZzs8SJTj3Qo3Kf7o63oJriJzJ1sqKvNny48xC6pgxHtYEdMT5MLiFYWgH1yfsL",
  "key24": "3sbHUnKZMAPE4aMHz3YfYetsV7yH1PWLopdLCbo622BTvPEE98Md4AovVJ6sCkimzuMS8oKg1bpDMzMsGwSTgzto",
  "key25": "4SCQy1jZeCsRiqXWH5vafgNuqTQv49VEi2HJBXZuY2AniAELfY7AzgS6PbX3ND7RjmQ8YvbgSEUyCYkvd1Q6FEBA",
  "key26": "2LoucGbtEzVnNKPLpMinnjADNAQvdayyMPdmtMev6P3ep3EPe52AACryxGR8rNhVmhWQZMTCgqFjfNYFgBGC8mou",
  "key27": "yJzJQpK5NFJSJLmMRQK5zpSjZ8u9uiTZkHTH36jNQ5dx9pmm5YHZusuRCJqYr2A5yEHD4Mi47ckWsAfJLp8P4Ea",
  "key28": "5WRbnnTKeBiByWndzWsEtEG61hFMS7NvkrZXDtPNx1zyk6gbsTy6yynfSVViNnEzZ7WzDjQCjTA5owET53RH8kfK",
  "key29": "5vmp3qNutmbrvB3xbojvdadn168VsDk14bMjebpohucLwQjV57n5cfCXYnrAwQ2AmN2q4eX2bLUhtFA5bqWZ5oxu",
  "key30": "8iXzcSqMNABbPnfTjD3czixJCzCaePSNSFEiaysB4z8YCacbrSDR6y4MvNE3NTxX2TSjXMUr8bUoDdRXzGLtdtJ",
  "key31": "LWXHisvDjqnJA24ivPhAepDUg4hwH2oMK6BDMVXbB3U4cCHA3SUNE7e4UT1qmEaH8Y2Ytv6gmkVdYHXitjGXDLk",
  "key32": "4g36QeiocdgA1GH4VNrQf2REaFMqVkU4grH8dbqqdUmZ9FVGz8nF5AQSmJo3LSKxcwBSgM4CQYCx6zY4dxdTquhk",
  "key33": "C8HPLU9H3yVpRQp8QpAN4C8ig32wYc8SWbAv26UTsT7T2Bjp2KHUeGqbnZZPEzkHXDVatkAc4fg3ZJQdVPGHeqs"
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
