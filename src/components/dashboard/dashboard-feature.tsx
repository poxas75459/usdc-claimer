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
    "5XMepysXVcktaFVbgC6yiEe4h4hgRzXZJmFxh8miUF1Jqt4fYBSEvctKJbDXq4agKihLemvdWFTgQyv5axBeA5HQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iKa2PKEd6MbocL7tPouCE6dExsucQSSzoxd3uqVk55UeBkfp2BxAFFrtHDn3n26HFkfvw36PUztprUhCbtvBLkv",
  "key1": "33RjoC4x2nqo5EKjFtzNAfciurHyjQDLMnJVgL1tTPXFSeHuKpYe99MGtg9eCji8r1f3YB3jeqP3To1sNh7JsP8S",
  "key2": "5urQW9GnYMRhPwqKrxFohLhM2yytsZJssiwUQsDBURk3bw8aCAQJe4nsgN6swbQTxDDvKfGwz2KwGghxScjSopL6",
  "key3": "4XQJLu9BqkVMEzRTkMpeFvLV2DARhPrWkkh1x2FBSYnPKDyW4nUEZxoiDFqW9oc5iGUGmmzddEq2TNLz1MRUNLL5",
  "key4": "5aMksCCpRZZBPuuxiY2TNG9HhGWtoodhcGUQ7WH8CVg9GNGSzxy1xhZQkLvdYFhUnoRo6exFdDdN1fczjhdcxeR9",
  "key5": "5wAiHU2cfGLbLYogvCCBJRDnBkmS4CYeNBLuPczdqFPcfCxRoJ8MQ4yDY1e25cYKXbvGNGiqVBcuGpN1UBbbaaSZ",
  "key6": "9NCeyTEyiDXv96bQShbviv51RJvD31wTSdK3vmBUDuQu5dB7uegPpEvQrmL8Dr1zGBrB6zWk2UbuY8fMr89BeS8",
  "key7": "4iEUPTmLMqoNS35fwGoBQsQsNxSq7P7TERTZasnLKFL4jxSEcCa1GcrHmxqwF4SqahT7hiESWka4PzUawtMkzQqF",
  "key8": "2JfFt3kxxSTms4d4LijGFV8BjQwuYfsRCetCWjz5cte3JnqykcMiGpY5NA29Be1ExT7m4PJGoKTF2ZL6qaQwB5FJ",
  "key9": "4XTgsTrFN3eu55GNhxbhgaHDRCXsaLexDzPChiMQDcpevTZKtvi9rgnijvjaGawnxynBg5uLhG2E9CetXEH4TijW",
  "key10": "4tR1pdmiqsrX7MT4vkzYToTT8NaqYJoRoTQPkSw4kCvTRAenKLFBAZDxkdL7gBEyw1JCnBnARNx9UqRYZYDXHJxY",
  "key11": "3QHhLUXsLFpYztgxXfJJuL8SPDmtqDhksntjtZcagdiWEhLfbhDpk8mj7jgEZRTPGRLtF1YWhAMuBtKS35raQGHh",
  "key12": "2GRGHwWtn78c3DxM22zAtbkFqhHkXa9UdpzkbDVBDoLypC4NodMDA83i5k5VEGmCEAbEEnrvtbk2b5bDpz95yCju",
  "key13": "3pEdQy38tpTmSNFCdwpdEVhgBxognqt12J7YJ4GzmJ8n7X82KmuJFne46QADnduvykTPYCbBj8ayeE5rV95oCaoy",
  "key14": "58QqSqmd5o33uQRxFJxgtYkpXtuEX9YZCT9q44dPKMrn9aSSzCL63G3tCqC4T8ybCqrrwKKicEfmexUzJHD9Kh6A",
  "key15": "4hiEykj1Us5yrpm5BaZE4wgMaXTaiXvdQA9sRCSpUzGyssxQYHLf26ywBPjxpPSykJToHKxDQDrsctedNYvD6MAb",
  "key16": "4yuKkV2ZDaPELecHbnLp3NgBiqxaV4pft3MLhpuqZPgJgZvxw81quJKMM7CSUEe9m4MrLf41hGX7zTRoJLGF7aUi",
  "key17": "4jtfqHQfVZEeg2U7sU5wTVeWLSH3EfMZbhMFcGGK5E8Mc2LYWRjP99HtFSXDEWdbXPaaduHRq4A9aHqTk5UbwAfu",
  "key18": "4JwZbc7fjpuAANp9k5yCoZJv9GXRjYxUB5sVE5mJjvsbqjrx8NgU9ucYAGRri1CxU8MNreWsxooRa4sqDvvtHF8q",
  "key19": "4ZP7HZPmF6yBzUAMMhiej8quZzTrUp7PKGkBUruYfMiUCSHq1Pg6XzHyqLAxSSEQaroAFoYsrZXUkaqinraNi7jD",
  "key20": "tqkbkvxzs793EfVLpZDJQYfQxgGA97Ca3DWLX18DQ7sW9oPjJae5hX8LQaAdgyFx1KX2GF234VvsGLfsTEC7Grt",
  "key21": "4qVAaA5JmFkjvCZLPkUR14qEcwdFa2kYXSFC2m9jf2KAaNUHUvFUVm7MYT87GuB3GV74FhpuZGRkiFPBVVXm3tEh",
  "key22": "3fhvKghFv2isUXvaxBZdrf2VEVF8HgNYwD8cQmjgLjTj8tAyoaDXi65RMFJPR93XkZwtAeqjnFMuxjzXcZXR49FH",
  "key23": "5jZEE6ny1WuW2ngHXVUJpYa8h4zAyXhK5HMN6EyYX18o117aLbPuBmd65Qai4zEiu8qXKxjUxE3mADvCL61Wpoe7",
  "key24": "4MfhxX6JopM7xzW9rvWggPeBnajxCdJzrmJN4xWvbtbCgZDLsQ5zzoLVwFWQ3XwRvZAkSmxNduxerHRQmWxyNNV4",
  "key25": "2VcYzMxvM56cYtW952oukc94pukNStpGaFmTfGLdn7nUysZ1BLFSMK4D7mQ5uidQDvk2sxLE1aMkQfKRwFmuZAbR",
  "key26": "4Ykv8znY5wRUyEnP8uJ8d2bwNLWhKF54dk1LN4DZ7SfdB2nXfXD4juP15x4RiBXAivYawtHF8spqonK7Pi4r7crW",
  "key27": "3iNfNW5cAL8xkvwmUAW6Xeux6Dur3AF9kVZjr9TotchLBURMxGea8gACqYhLZvq8Q1p82ceVukfcRTBsnSYYhTWs",
  "key28": "4J7spQbhHVy9Qk7WYGFZrCkweLFkPzw2QzTgzG1jLZsKDyYcPx5yLuvQhfWCV9VafncP81oJ8iccY6AcEGkJTrXd",
  "key29": "3z6tp6vCjPi3DHan2y1kqdCQrTBm9uD8y1EBjuGwVA2JKbRMt58U2faY6tYKyURPKtQngefkdPoMU7GyX43mxaff",
  "key30": "57JNBaGYQfDUANwwfydHa3yxmVn6XL1YLJizmZrhpsTHBbbgwF94f7wAD6t2Pp7SH9dScC6FMGwHUSperuJSyYaf",
  "key31": "2KwUKqHK91kh9RAiSsftQog2riEY5htjhwNWTLw4m5TzMaYYbMWoBfSwFCYtkhdeAuvBkcrWQLnGNS8zsfGp9cTA",
  "key32": "2GqbTBdp4DXH9rP7S4aE8jsswo4ZbzTaM44RS8KvDuf37tbgVfcUyaWLMMp4qVToX96EmWV2YHTxZfPDPmNsWuQN",
  "key33": "4Dh1VDFKMR6DexDRyRtJ3U1BcbBFHsDD3uZjBv3XAdbMUDxCYyscMXSAFUMACCkbdG7sgMtyjHcBGFz1A3c829oK",
  "key34": "3AoFAeGy6QWjmVFdnbTyq4sNAoZsofDmPocEfu6TwiQtkV62PrUKWdSPwNxW5KbRREQ1pLm33LNh6p27ssuyPs1j",
  "key35": "42zdiYc3sfT1JZy8fkUC42U1Lke1sQ26dzRk26hNJgoyAoG4e9rCwHgaumR5U1z7vSCS9dzdqWGMwiwYEr7fRTkc",
  "key36": "4sj8XPc8kVLy6G2tkPuD4D1echSJP3jo7qv3BnMyoqbhL4VHPRrvNruuqaRNbH2WcHXTbSzurBdT4SDXHpeArMns",
  "key37": "2cwQJy4nVz6m3ndPqE1JHdeKjUM6oUdAuSks1PjoTWXMRhmaJnyaxjS4zYQSkW6dg24oeEnEuPXgE7KQjEHsv1gg",
  "key38": "H4TiQM6FsK8wwXBrSYSExrhnwJ4q96sttA1BaVdebGEWvx8R7TpBHkhRKVbnsjcxKZkE98vHAMdoqY25ytayoPa",
  "key39": "5uDrCsq7Njc1r24Mui3fomzqWT6vRckTbWnsKg4F99rJQgbmPXYzkQMrXqzZ5ZEYVKyTbomNxJ9ndqB3io6uoBJR",
  "key40": "5Wm4dEdm68aYhDwjxQMeG32J7iqQ2AJFZMGmDQjbpHAZ29nVQU6ZSBnkYa3oJoLRtzavD8Qt8rSaQEy4awATKsGu",
  "key41": "2o8u95EmcyUdQSYqWwJRLLY4V136s4NCwKT23JRdofnFKDD5kaCEKtZmaBLG8ByKixNwQ7moGHYdg28wiExbiYYR"
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
