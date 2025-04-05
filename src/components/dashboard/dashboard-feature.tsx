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
    "49EmvSBC3mAHYfUc8JVUs1PMdrYzNBnUntV5WrTiUrC5VR13Ur448YPLHPemvBViVYLMLfAK35wioCi4LbPhQP84"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mwzJzujph7LdTogcgEkvDEfN9v4FCqYGt5rR86PKuvKANcdmvWwdXqH8dHZHsB4KMhut38cGXp11Gu2vX7szm4u",
  "key1": "zC7aHFfiGnGLnkP7RctQ7a2mEd1JzotZwY2H6Hfarix8wAy1m66dsvLv7HFWb9karhhHRnjoeX4dna5TKau2QgU",
  "key2": "2Ft5UMgCNRueB5RhxKHS9RoCCHasvEfDcDJ9uNj1qPyqgQ9c3xStn336MPVV3G2jwG7NrKQhkEoL3sFdvZqVMqUZ",
  "key3": "4TpJV73mXBG82QLi1toLPaC7K6im1LsaLw9epiiGE5LH7LE39mdPxNCF1E5HcT5e6Qwx8VBSNq3ZSoMgPLsNSoZh",
  "key4": "3318NF2CPdkFRyim32k4pe7QcB5xfg3vZ1fyqnZBGHZysPDc5qv32BrsWnK7CTdbSCCK6a8D3iNeMPx6YLtJ3tm6",
  "key5": "foBBz42o7kkfnf7BxH5gaJqN4nuJgaNm2jnBCa92j9PsZZcKsELqU6b5MK7AV49tF21ppzAzzWUovdfsfDxrFkC",
  "key6": "3dRvbScTvza9g5NpTxJuNhtoKSyhb2DTJR28xWRrfqsVdhvgGJ5Jt3b9EekWRdZs2brWjyJtb4CGkpnMUq4BAyba",
  "key7": "2fxRMP5bRtjBknUDszN8fe3eNGGQvfUMHnZ4xRv5WhZpK4xGxd8R841JFR4Rb6WmaB9ZdEtnfN4iCrxsjYhj9kP",
  "key8": "2h7DHdpegdMTW14REWXKcZPVSzup3LfxAZCX7RZzJ1QcLbNspjKkriVBQvJo6G2AQwifBgzFrXrgqyp615SYLsnV",
  "key9": "4UeZGNxANKHy9XR2ZLPc2mchBZMV2qUg8LB5LhM2vJ8nnaxo9rSYZT7418pEm64CyaVUnfDXmoc4bn4aL32LRT1c",
  "key10": "xeTonEVGydCFvahe1u2RfzhSwVoBLYu5XBtdj7k3fVvgQPRkbsMmX2eAVa2eaQn1A6Z8wFteCV7EjgPnyDeqEXk",
  "key11": "3vuRbXAUs7rfRLMJnxqotHzmj5J458ZKoKEyKkSkTT7ADRrJUHHkc6Y9G4W4ja8hTj6JRxUtAguGPP4T3UPAqxG",
  "key12": "5znxmuZEDwr1WumHEzSLbJC2YZJaGkYbLs76bJse1BkEz2fLrJCDgP7bo3xzLZMmWDDXR1ZvvsSrvmGyatbcgppx",
  "key13": "5VvkV29TJv51rrCA1rQiwvgKnVijFgEwTH6hiVLdRCgxaHDXASQMKyjXNhVN5qzA4tLWmMtHmZHrC2Kf25SZDpc7",
  "key14": "2Lp5eSZNFf5mFNvifwWdVoLAkmqYkcB9F2NrmVg71Cyqxa3pkDsRB7PUmt1YbVzecc3x7Xs1dErMPJRHnELWKMMN",
  "key15": "2wVyuA8GqDvCQ8VvRwLZm1Uk4hEPwshCrCVhx74WBXDx5rALEtR3L5T2wyvUhKTQXRTxYtNRZFHWq72EPN8UfdQF",
  "key16": "2GDSH7frWScASbLfREfTbHWJDEvfXyscwWjmEuC6LdirDSz6XWaFigWhJukFzwgm7PTWWhYQqYHMaNvrt3WAEb5C",
  "key17": "WYvSAyDyx4dD1EptxHnEoGka7MvVskZGLXGKVMBehyajMQ494xSzUTBv64hegMpyjFzFY5L9wbm5QyDy4Zru1BP",
  "key18": "4sdofD11Jdu7Q6QKdfgCD7mxoeuMTe69SuaJ2XyYAfVbYxwkGDE5ccMKczJJSgY7Ks3AknXZAa83wmTCkNd2b55k",
  "key19": "3sYc8iLruNq4REozDnvyunUWKYn593YYSKQwTMqNfLGPy5w1P8srVBkh64XyQPDMm92VidowNT28WdBtnZnBqBmi",
  "key20": "79MAJfDmXTrv4GKL6ExLSCCyt8yH1c5W8kJXZUYesVRpFecpzBNKmXYhN91BTC7niTaaZxFNdmHaqntCct8Pecb",
  "key21": "tEA8nxVDJyARrYGVtuD1WN2ginPZTqWdWzbDErPg2xsXU9GEmp9hfpSU4QDXL6CxDV2fUnhf5xBGdxrs7FWAhB1",
  "key22": "vkHLSKPNAds2kHGFp6GD5AGwdnfJb12g11xyXPFAoQYLmhYT8deoewcCpj1EEuUefPntHrJGe7e6NNWuFBHKsxu",
  "key23": "4rEAKKty3VoQ4kNPF4VuaPoqqGA8Q4PdUkahFcuMogRvgJRy4iuCBwL2M5T8AHjJjs9ha58rd13whCj7XgnYSW9k",
  "key24": "4iiv5AbnXp76rGXydm2529ETc2XbBGTDMWELq8vbmsimqoC7vKx1cLyYPVB6zpfBvubieeQnBreYWQBYbiFLHVBc",
  "key25": "2WNBHyQouQKq5kcpsqtVKwHPEFP6R275y8rzJwnY6P8mtR3HYFehkNqpRVXP6oK1dGsJyUzknDtjJBq4Vs7HHGAH",
  "key26": "2V6woD9Yy2burLWLt9iqeHxBSDcDTe7GojuuNEJmhLxzn6sSrRStwTZFTRnrtsQKjhEUjfaNyP4wyYmqfTDdwHFH",
  "key27": "5TrK4JF6f9QJx2dArNggsVsjmgTwMdqMnxRSTmPH9aNUoeJbFwZzy4bFBkVGFZSjSPaWC98WnP4Wkeft9e94Yede",
  "key28": "LjYW38MhRKzoFLoZJuaDRiW8ZibjzVzRRtcAghfmyZBpVaRGKWrB31fokHs2dbMEVigyMnPb9KUR3vzzPHkVY3x",
  "key29": "3UNeGx6S4Rxc95Yz7obsfsXSqqoSikRW2xw88BmHuCxZyi9Y5dMvx64DiJCeTSbpQqhBTEy92VPgZSQoQZ4MaSbD",
  "key30": "328BFMaTgoChpzbJFTdnkk5HA66TEFdgMpjdGaffsYb7n65ZJFL2QWmEPSwnvTCCrBfsGBzhwftna3nvRHKhZ6kW",
  "key31": "3hJcMaEtvisgqkWqfQxBjHz51SeVciWJZ6J9r9bhbspe5xTK27jAUVXmGnhu9WRhkMnHtNRxwTzCxhyh4VmFR9yP"
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
