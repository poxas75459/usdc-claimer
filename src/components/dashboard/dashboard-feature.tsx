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
    "4anjhoMoRAsoaaW9HAYqkYwRDzyyzMTDGAeQxCeLaHgF5dGCagzSBuyESEpSnAxAnkytUS9RfTjEa2hLXneQ2wMe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "541DBfev6X6C2GM4p1TwUfXyokTQtZp8h4YLgjGG9uAWSdV4WKDHhdywBzoPAn8Apn6x1aBXFvAkHLr4gArTKWyV",
  "key1": "428SLGq5MaT4KTGtHNb3TTjUevQTCsKSZpgjmqGsWe9Y7oYQwU4zvACAJmx6G3iNQZnPV33napk1sNFLjDhth2Zq",
  "key2": "5b1d61RmdEvShUuRr5CCkhpgVGFtzJpB4ju6ExpcbQbHSQkZZeH65KA1CBQuCkUgLi2bfZHkvEmTHv65m8uA28ay",
  "key3": "52j79a39X7VXTa7R1bkDZPYaazAQE1CodzFdmbSqMcpf69FfAoNKqLw18GD4WbeESkwgcw7JqHXa6UfG2qe72ji8",
  "key4": "2hQiQVDBTSt28JkiWqmQrSQRsEBnewkE2D577TPiubSRHnsr4XdQuDMQ67MK32iKc5XRoaWAVEfWx5bw3pfW9Xmn",
  "key5": "3cbXMwkwQoe5W9kNoBW1EM2uHpbETb3T8KZRrAJoDhK8q1M6VorM42M8PV89fgUaehJfbSYXNcVageAH7Uc5Q7MG",
  "key6": "BjdtzyFRdxpRgaj2oKB14WMpEdo1SsJ9ZMKfKTq4t7xDZutHxxkWrSpU5TFdEZQDTKdNMopVJ1CJKjXJWPJwMct",
  "key7": "2ekg89D9YmVddxCXSRbG6KUfRNU2D3uvAxBxWCPBVKmDqjXRGkiLhT5EDYGwv7KCPDZtxrjiPJRYSpM5S2kDASpU",
  "key8": "4GNceoLPFtcB1Px2zhaSVdT1uQgzXMDD6QKsu5wRW8zMjW9AbJbqdHT7qF2jUmc6Uv8ijT2zm34zBuU6i4pBf3W6",
  "key9": "31iz9LhR6SRBjSth5omBcGDBguoHKbwn68fddvsgeBrJCdBfYVMHrBwNMiDMB7qezNtJKHqZroTRTxiB7zpZWR1m",
  "key10": "62gz7FEKLYQsWJYeStJSm5Trt8ikJFsoUHnX6RY9uztDuDdgonh6gDp7PgRikrk9yJZjz6jNnCN22F5SfmgYBaPD",
  "key11": "J1T7PFzFFhZxk1hR89SDA72VuUKbmC17VtYEYU5k192mbnDSh2iJ3MaKgBsrbQAHWdaFAvC7rX3cxFUKLeSKyhA",
  "key12": "3SDwPwYcTRey8xfanBYEqwF8uhoWzKDhpz9dnjVVZ9zo1UFC9n4PRuyv8GWHjSpr64sg8gNxukXbhXPw867yQx9G",
  "key13": "3bBqmXZQitwqdnYfsMUBzRbcyB3RnqsJQn9PSaa8FXvyVmoNZLcQ5pRFEKPkfQCSqTGCEdn6smff4GGqXzAUMbqG",
  "key14": "656CX2s56BNZq3HxxiG3wLpzwvrBXPUqhMfFZ3XX8V7Nyr9KaFDQmYAe5norskiDEBrxCs9uLQvdR8SvigwKZ7vR",
  "key15": "3MqdmXsNXoN4r9RSjbCRpmWfhpS3V57bpTEcnRm11cdVuUzSVwTih3VJEkufU1eFTFmaeZUaSJ3sE7JsXmjf99NL",
  "key16": "5M6vcXZkzxmNcUfVF9QdzMoHKbyK5TEk1KpDaJ9ywYNUbzqHsEonTtWim26cVceanFBGc3cRFhsoYCScnaouRoNs",
  "key17": "2FegpbJ19VLVDUjVSwFeuzLPAnVt7Q5ZLFFUzh8B9Rb7ujwWqYtZ6wNmmZsBX8usP1yH28kQKLPsNTPUfooL9o2H",
  "key18": "3nWyojW6qnhYWasPMbvS8B65A3kdRRhN8PC5pVGt4XmyMrnj29uT32R4xpRxxdydMA4WcipmfjQ4RT8yb4McXmXq",
  "key19": "5iC1mLnrE6r6pkib1KtbaABNxFyc9fhpGrmvxHybD82ZyUV1VhbvwFRjQxdz7zeZCu16FXyu5yiYAvxUp5qTgXao",
  "key20": "3wRAkyVBQdciz7ckF7o5Tf7BzyH4PNhV2sAzbFnjQx8WQLYB9XKEsfFxCj8DbXXnEm3GwxLFQKivua8WufAoGTDt",
  "key21": "ZyBjnFBsijPqff1K9XU91FZZ2JA8yaXe43EvM2nyEguGoud8j4T4RpSFZQEErQJzaua2kE4kN3uJf5oCK2oTPDU",
  "key22": "4RVknasr6EsxyFnCSN2oeinuZYvE2NP5bh67bDiyzarGp1jUTLkd57PMrKvuz8QQub5V5qmCk699qdP1qSzDtSge",
  "key23": "2pF1NuYYAZMeTpVLtmmJ1poCU1Fn6gsuGo2AdAQLeG8fnEWEcxTswB2kQvSr2F9sF14FvxCkqYqMdiTSJBPdsxte",
  "key24": "51oqoU5UhJ6ZYTHyFECdaLC5qYeQPnrHFTL7xuHcB2E19noCNMwTeZ4iPeCkKA3Gw9c7DCTmT9gXiEfiky9tzvPd",
  "key25": "5gLQqFiSZsryo4xFPv75Vfu6PrV5Rs9EMVp6tboxqR66XjRxQLkCbfWzHzEBA9svDANFEexveC8QmQqzDvEpkYXu",
  "key26": "svv8jG9ayQSKurVj6KPh5CcqyUMi2g5uhZws7cBaBJqNoUFQJob57G3Zs6PhgLT5Y8cDnKrgfPVTXhqPDSAVmiy",
  "key27": "4hhrexvdkUrfTwpCa1vnd9rroJLFyLHo9UtGsWXg2AdyPwQJZRUFrEmwosYNx8ntyrwsgYaTb9W4qCJJuuxqNZcG",
  "key28": "3CNTyk7byVnuNmdUbf7FGiejbP3SRXCUJDQi6TBHVrA2EynZuvqQcyPrdRMbM7P52QBXaHVZop3CMvhQtptKD7zL",
  "key29": "5ek7yBL8z1hqvEqaUikJiJjPTvXcaNWEQCjgrQMapZt5K7FfRFRhKvNkjwXX1JEQG7GMbevrRrYBPTapQLAo8F1b",
  "key30": "4nk4yQYgKR739eAAgGAxAjs6HgTqXzeWTbtbWUUA7CV4ALbtvf7TEzsEbQ8GPrVAGVMkkGXNh6EULVTKaxRr8QSK",
  "key31": "5qw2ewh9jog7sWhSSt8d4mi1zfQ1NFhNzurEbSGB7LPMpJQjpRsFCNGCEQDtDGvdzHrutUiemLEjTebRxFxkuEFw",
  "key32": "SbGRqn9XWTpvatpbJjZNEQwx5sKRMYJVeyi2Gs9rsfcERn7AzqmfFfzYvATVGhXv7pFw6eLzsqwNuqAD4EwxmxD",
  "key33": "4qwbkV6NBwkTBCMcbCspRMmgHmmEJ98ghALdrV3HRJeRkLVHTMcLnTyP2D67PJ6VP9R3q56buTXYJBk3PtSrw42o",
  "key34": "4FAce5tG5xbhFqGEngASAaEA9dG5TT9PtYCyK6uLjLRMw8zAm7XmCRdpZTJK2kjKt7DEbaEKPwsLTxPz2B2MzVR",
  "key35": "4ZS7Za3ogiBspJinkCaSZeZpN56xQoamtdeGhuzdBbSkPsVhtZ51wDWtDTFkBSAGyuuY8Z1Xa1cTxeJbZj1bpErr",
  "key36": "128kUgA9GgiB8TjvfQLwB6Y6DeqNdTXwZjrNhUwe2vwkRCyxkkCLpSAzpeanNYWazP7LwByEPfXVPgBwWmvZ7a5w",
  "key37": "5pyNhsfv7hKmKBcTKhv6eFBxXi6SH8oL8dr65pcVzo6t53ju3a5zrTTc8oWJMUTKJuTmfczPzNR9V5zk51y6Kjbh",
  "key38": "3wsdqF9bncJpfDvqXzwTeUhYJo2xa7XgYAypteqZgG1j3gps6WDzU65fJ88WsENQ7pX7U8m5yRxeAqBAiQNysrtQ",
  "key39": "5QL2XXA2wv3WsAVfp33UHyPCrZE7d9rLQgVDsXUUXaPweQh1UkMrBCJc1jrcaYKvw5Uyp53ridgskHHRTGPkHK4K",
  "key40": "5MVfTmZRvyXSyWJ2hnovbDTfAY1mrLTQa5Ee4j6dk1MPSwapNdS4mTX27CNxeXJcDvQfvAiHdP44hAar7kddpgDj",
  "key41": "4HJVrsWXhKN5Hw2k6H5pobD3jkwHuCf3RUtNbrqxJTWPCqaEZT2xup3w7ztRGFVxZmonCUYzkjNgwM9UZDyTcbJC",
  "key42": "2xJiPU32o1S9TmWpRqHELFCp5DWVn5kBSuzbY5PKha5oUGkEsrG3ySDrvie3yv8N36Wsocqf4R5smQLAR4Urexnt"
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
