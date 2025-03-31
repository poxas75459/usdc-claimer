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
    "4E8y6rDjxxRrLqNKEjCMt8gwsoK2G4pgNAEQv2cvixmsraJT2rxTvz7BtEhUs2rhTzA8LKaMWqGr1CQhXuL4WBL6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26a3pk8FaovgBHXvaQeEDgfFvDS9esxFvDRPB39g1Xs7LCwFJGiQqGvnMEQ1feqGitmQ6sddBFxaWzXQREgcjNG3",
  "key1": "51j2FftgPTYqmad66Yik6hAF6ujNT8PV4QYsm6ivahdzuabUv7Zf6Y1dkrSA3GKhJLSvvTN63nCRmZ4nRUbnVLDB",
  "key2": "4fdJcNXQUxRNhRTKg1zuPpzsxWjhhL7oud1etRXAhgBFYDfo8ASw4mQMHueHCKWrc82JbiZEzwHMLdJo72m8fd5h",
  "key3": "PaeAonM6KzC6N2AeMmSx3Tcs22zFkS5YGYPs4c1d8gVizrqYfb6NsFyckZjDBhh9Ta5qgxTHHzG4N8wmhcANC1t",
  "key4": "dMoF7Wc68pdDJex3MroFFzmpSekWNT87eRmXbBGDHQQCTgoJJVZXNAWWvTfMKY5TRiE1c9S9a3Mid4tpcgL4hsJ",
  "key5": "352inDMMtWRqfZiWagM7Cu7YPP4tH2MY8dHXFxiz8UWvG9jDMqHGm38Ngr5FkAjn7hFALrb2UaVt1N1RnXVoLn71",
  "key6": "2XdXijTw5UfAtMVZeuFdaqz4AC7jWXXKciN6kc88vND22a28ppEDHYMcDr8P7zrV4sMEVrAwpekrEKx1DqSd318B",
  "key7": "1ALN7x979oh1gcs4YR6kqCcB6SEXKJcjyrJ9WJ9WkGxTdW39HfRt1ttT6psN6NsZFG2YJjAySWgL8xpsRugtiDf",
  "key8": "2UoJiJr3B8xWfHLLCC195uM8FMc6ftbP83NXgV4kyQ6EJc2aXnCExdMqkyeMQVgvLBotEZ5aTkNE7Ya6ZuLf5uZu",
  "key9": "3C1sVSc7muzuW7SKge6cNcq3yWNsXGa5wFx3LFkness138cXUHyWovmeKGBhfywpWTfUDz55uHtJDjiXCah1YTfM",
  "key10": "4Xj5TrobWpV61KQVbj3tbjJFTSA1J69qqZGArF6bx4mEZrsTaXPWjZMJk9uLJkkge7qQtCdw6U4F4G1Yb6nZ43vS",
  "key11": "spLfsz7KUtsPinWbjr8G2wY5AQYeTH8zwvLYDUogrePv22GcokPbbsTSsZWp24C5YXuqEBWyNr1r7bjXnSVPJDS",
  "key12": "46kj3awPUmuoGRfyvv6YpnpMJicP2tycjskcY6gKMHBiHLePc7gf3owS6aLMBb3LD8stgt3uWjyq8si7HwE1iwFy",
  "key13": "3ckLpottt6ujXqKdXk6BWGe5rpRpfV9Pf61YK9aT7xi4dQA2mBuZaWUcTFXe9qd7nHHToRqPUoEqpZrWxBULG9ph",
  "key14": "3qJNaMDc7jy4j8rWVbJeTGS6fBEH75DTZcTUnFd5v6RF8eNSaSo2Qp66HvMgEtkLKayYcT8gUFQYeuykbxqn2Ywx",
  "key15": "5ztzHtuvm6eFKeHoBiaQKwuxdg51smxxiG7LNNpnGnufR5nzvupEvBLj34eYpvTopCFc4Dy9WdCq6pP4hXPRWv8A",
  "key16": "3PWYLcTEQA31L7F98Y29BtjE8XxAgEkZN7amvE9MoA6aHtowgeRcWvtpxjiVbniKAvETqDcYcjTdG8BMgsgQjXpr",
  "key17": "2whictSuU3zoVpP5xLguG9BCoNe15Jn34dsGgMFAcYQyCvss32h8jC8uA3aFipj2AbwvT2jdVzvSVshBnojnZRHF",
  "key18": "r4abWUggKvux4hKZ1uByTBUZFaBTHmSxxz4AZHDYjs7N9m5TBX78Yu9ZQUQMhaMM89bXAMYJwhLaUvFyfp5rMy6",
  "key19": "3RNJQMupYLUUkvxHo14wy66ZBiu1fuDhpm7km3T3wsj3jubHR1Hbj2EnVvwZY8CeqSfVWM9uFoCqBZHPkiJbtPT7",
  "key20": "26CjQ7zrH4925tWQdrQD9oaCMTojcUB7mJ6ruBtWxsPN5sV7KzLgaDSZ8CLzUg4K5LN9uLVjrsjusRSwSgqopAzM",
  "key21": "21Dso4WG7U2NHbobsfZdDR2kvSoHuvbqTWYa5a6XT9BgHixk67L39F2jPzDoigXg8zEmpQkfZF4ARzAML6iwwd2o",
  "key22": "5odWp9imbStgG4AdoaPoRHXo9vRbYhCLgvSBVVCyGbUBGY9qAfZtNzAKNYFfxoQQ4Wqrg9cBC7QirGWWsaPSDY3w",
  "key23": "5WGqduTZwxP95hup347ob5achXQW1qc1qqcCHrXTWesPySLrJMoCtN8vCyVm8DES4Xcst9TYiAV8ZXb4Ej3m2eha",
  "key24": "4k7Ahc3BBtCum9fa5PEFW4ZQgwJMrs7yz1wE3C198ZJgDc9rGLhax51pUA3wyg9tVkSdHkMEqXMHDu8c2w2ZxEQg",
  "key25": "3EDeRYBL8jzbpYyFMUeCMr2u7rn8vhQJD1Wi5RzRgTAFFUjmQxGBL5nze55HS1cbh7G68BeaoET79s4w5qtH4Ugy",
  "key26": "2pAMyNfZN98e5cyhXscvbbP6CEQ8a86zWnRv7RLdAMqkfiMbzntN5qxxy7Ki3yiDoqebNKvun9nbhHaCy4h4PKsf",
  "key27": "3NAfGJRNZn72caKNSz8sNDQKHEka1bkZCb7qz3GTV4L9quXY2F6ATbUJzMnRGC8bUdzD1fYUHwDKETufofKWZLrd",
  "key28": "3NEJ5C1X4ieZQ6iCLosYA2GW8oDKJPDommSShMuNp1j8yZEicPXkRMxy85cttUAAdWCHb5RJ1hZ5Ktquow3HsJ5P",
  "key29": "5QXthgMJGimWQDx7QVkLYfEE1MCjzggvHrkGMASKirSiLVEP2o7G3d6vPRC5c3F3JmprVrTi1Nbvwacck2JTRunY",
  "key30": "2ycYD2H4z9vAwvUp8TLhE6HcP5NDk5zD51p1AeiJr1wzdSaGjpSfqNJpobQcXrJtga2QhfHfyvsJySR3MYnoANVY",
  "key31": "2vSyjSZs1Bi4JmvKSoKFQSUXRFSpwa5jU8CQUojoJ3YuJ9Xr2UhpN6btYumHFEz4vCvHw4mazUbNtFZUKWVmGAX",
  "key32": "311JLyT3UvnBYefxtv4yGWmmeT2Evp8KGDer16F9wtJFXWFkbCu4JbcvekvWXnnPEcBKhcaZN7Y2UqXkKVcATbCx",
  "key33": "2Fi3cRs4QLrvKXKiyGTpKahVC3oHAhSrN9ijFt56sudKAaFqFPZcPPpRMMtJy1SVbhvnRsVqooTjMepmiW42fiV2",
  "key34": "4rsjubVhY9dJwUe5PWR2zkFd4mwbeEiYpcvSJh6MZqb8dEf55kHwrQLzZuXd4Y87fVtvhzkdMNmVzTzZ3x1cQx7u"
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
