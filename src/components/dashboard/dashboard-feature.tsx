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
    "4uD4g3T1ruKnYzqWaXo2Lod5f1S2B4RFzuUtMJy9Zh9XXzp84MiKf6XevHksbuPBDdrQwkaVkUQFqb3DhuA7Lu4W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fthWSe1bgTE3e9C6tBeGSDLukST9uGXaVxpgTPcwqDt1Qa7SsUvv6r3d3QzaxtR7fP5ZxfB3QUtA7DbyugtCLRn",
  "key1": "qiZ9PLtTJJ7TQG4sqgVPUT7268ivPfTx5UpP8w4Uuykf2CxMyQ7CQPPiQTXRBJyKZQzxnyfB21VMo1X5JVTtrhr",
  "key2": "64vv9SRaFjGSPJL58hSjWCRV6apKxYHQwiMroY25hYSueipfmZMHUXkWYBnDMZC2vm5wx7hiriWku3eT8qAVvVRm",
  "key3": "2kJQD5xQ9znxbhyhzKYUTLnEJHWt8yAYFuZy99nhBdZ7uXe4v4NQRJzGuXHzBvqeDf7MDEJba5vgt8BnvcX5RuRW",
  "key4": "3t68g3SgTMUznzL9Cqy4Xr8QUciQmyisWXgtERzs28qj46bv2voUB4f3LSmUYZahKAwnAZU1Ko9QgwW2qhdDiLYY",
  "key5": "4zDdnt5Qh4hW36HWRyYwM3FkNj6Pbq1ceXqXZpBnLy3fpqrcAKRKm7oEaSXcSa5irfC1F8oxqVm4bBXE792Nf58K",
  "key6": "45M4UV1mN7GuUwmFf2wp73kYhD8XgfB4SwDZN6Cau8a9CXVEhNsnqtyqeWNVCLV83BCh5NsrCDn26nWkWRXaNrAX",
  "key7": "4mPFPkS35LCpMxcyPsBAQneM2U2XChBG1o9fwz5TC6uQ3FtSpVLm2N7zxZ7C1cmmezSPz36ocPqHZ7r2f7WBg5Mf",
  "key8": "5TY2Qf2deapJ2jRGbjEufoF36dm56BtHX2b822XDP36G1XkFaRodFsbShe9iyfZRtJj4fhs1L4o5qaCa6o1Nf9Nk",
  "key9": "RXz7EasunrpBsjSnw4nQgWgh6a6rkvnzSsTfHoS8ABz72cPUFB5hYjamqW6X3hunVRf685rySbYt5HJKwQ7yjBM",
  "key10": "2aMU5QaM5Z2b7uTTDucEjd8VUCYkWFL2iTsi7QRrfJG8W2Uj7G3KajxJ3ZvGfjJmeycAk8ygMugA5kFVKmi69Mrt",
  "key11": "4tuEC3CTu4MQDrzMvEVtX4LHsa9Gnnwo3S7fc6Yzk7tPwUtUDSEicvLPwWA6xhDMmtNrupk833o5CQwsci2HiPtK",
  "key12": "2BkCrEwYNiiaota8pkve2NsvFKTbkmzggmtGatutrrxznFYJAFo3QU21zb5yKbBQ3UnmB8mgeR3BzDHTQ6TNvfMi",
  "key13": "3QjNkaDyCgdq7r3zB6oYHh3gdPJ6vpUrrHjuMd2hXfSomRiMYYA5a6Fo1DXJAwXX7eBz9wKw2T1w8diCYqfBZeV5",
  "key14": "dNmBdzwqhN684jJfRu4DSoFCtK6aRWY5KjDSebQYoj4FHr8vVBRvjkE4HLjwyBr1s7TXcQg862Xr4GNeBmVyCUM",
  "key15": "5DcohSPFfLJaWYgLG9CTveRG7bvQTDAiufM2zqt5wEcoudCcEjocbCApHpKtZiN6gD4qs3mNTbBjYxPUUmECw2ns",
  "key16": "3Hp4kmC3woKW8wMnKfSUqCX2wQVyQVZJTf6SXCZrQy2HVyrS4cm9pEsnSmWveAK1iK4ewK24TXzoa57SjAZWBX5e",
  "key17": "4Az2XPd6CSiJbeVAZsSYeFk1oisviQQBe8ENSigFRGE9oZNjfipRcVcGdc4n8GEAAvTBfcqVzeQmQHPfDM9dC9oW",
  "key18": "JMFuXz8kXS47ZDcnYAoqj8uLCjjF9n3qQe58TTMarU4uB4R495iFTSRRzWWxiAkDSjuP1zpmxrV1YcsBm4Btsnp",
  "key19": "3RXhqAVSs8FcpVPGMqGj1xGqyd6oribWbCJ8NqbiuhTx1uPP7n4X6xK9fhpwMxhueaEMUN6aHGMAMVvJG6nAGzcC",
  "key20": "3R1GVvVxgjWvMVCJn6UvoCPqzDU33SmwbddqN1PNGvpxFNJi7G4hNYruUwqDdyrqKL7JEvatK4Trnnx88UaJUqC1",
  "key21": "tcUGPzwzmmoN1dW4C9UFDcheJTCHxprHSiwZ478PXwEdNMZnRysH8MCPfGqE1Vruss8g7eot8mGwPmhG45iFiWa",
  "key22": "4NmrYZUpsu2DW7WxhPores7o5YUyQd3SZmyozedEHNoap8m5YsynhYHgxPWQiSGzQ1Rnc6A5HhbVrF5NWE8LMAU7",
  "key23": "4rNDMEsLckoy7ig2g8kLo4B7eZk2zPATQr3muMTn5kxmeTdzSxgYH4VWHMr29KUEMGY9F3nnw2tSxCHAt8W3PEGD",
  "key24": "3rMY2eaxCMBaSRE7UYjA44cKjuXXdAZTBACkhWD8S1xxrfUSfNyWALi41aXxh2ZAn4Hz2YY9hPYgqH1hnbNs9TEu",
  "key25": "4ZuWZEbv3mobhEdVXsyYRCd2Hqv3WyEK4PYBkYMnePdKfktMV7PwMpxgdgNzLWizmF3HfDLsARosNHYvnjwNu6Bi",
  "key26": "2y8sbBvLBu3rjah3YKwFtFmdBhRPekDggUYtUtiSjrBESY8R4vGFWe9xgMiz7GSHSUWJRwu2AmcgftaS88fsu2g",
  "key27": "5XHcnnCMbsLAHWy7LNbuFgajVcYYooHwBPuASQpr5trsDzw7k5ArE6E6mPUov8UUxTdqLN8hhSnJBiCx3xmYLBCk",
  "key28": "4RxKEMdCTAtKwt9HU6Keb21WoagN4kT1zidcFcLxyek2wQvQTbz87JuYsWkR8MAG7yHFJTLs3hP5zdFXdTmw86TE",
  "key29": "3RTdDVtN6iqXnDp412ZLi5QBmKFsSdst6Xyb5hH2qCcwD5GpqjMa4Q1HNFYimVBZTbtGHhPUTcSK1c2XzDXchEFn",
  "key30": "5QqKgoX4JmWmQeNNzJ5thdZzV37BREnhZfQhZ5cvjTsZs1ZLj7rVPx59M66T6Fj8AAhhyA8zHxJzLTWUMDedgmkz",
  "key31": "5Gr36fNVExVojYhiGyVG8ULH7uesUPQj1fQHQJS6ANmhTdasuTU7pwE87dCWM1RXUWeh5hkE2cFCFMwpLEiM1dW5",
  "key32": "4SYpxzhUQLF7wn1CFrZstKyJtg9fTgrtnUsiKh22pkcycyvyLowpmhnRRE92zvjaWFoygNq79TfC2bz8J3YCGkGR",
  "key33": "5LXhXcBAbjzpj8yveAT2qVoPSZEHdiWFZdEuNgfnoyY8c7QPQWYneJQaHLjaWQbPv8tki5ZjJNQGcP4aUMPh2t7y",
  "key34": "3SjddcRMDG75Xz2RMyJ1yxDhFK2Ws8xBVJTkkkKmCTmi2UxBkfbHEk6VEqDzS1uDqh3gY8erLV6rwvK9MmV1sP1L",
  "key35": "3i9acs1uJPLMscQHK2jiYJmzYb7t7ci5XsUfraBQYWKb2xeJvYEauK6mhce534EHwuqsJSk4vVr4TMYcWUuXN46g",
  "key36": "5w3bckf7mzjah5x5PEbu5SfgyZXUDQXopPbyvMPWJckfiHqit8vS3UmUr9KZ7Jrxkftm8H9oeQfHqGZu4HsCPSF3",
  "key37": "4GqQzVSGhpZbcCGuB18h5xS1LJzr41e6wAgQmZZGGUNqJzTpjgLmZb8kiuuDtauf1Bh2rNYLAbhxMeFJ4TXumtJf",
  "key38": "4cmYHG9UEb4a4syuvFeJSkS9xfoipd6uqEZijVLWvaCfW2NUcqNauATKjwhzwmHHp2N6kmS4HTKNq61WgsTD2cgL",
  "key39": "2y6nNLr9nc4FJW4avx9GRzSV4EdNU6b7jkH4MzgNQvizePDPkDJnujMbNqhPWuLWu2V2gJr73jsGkTyhuyjj6189",
  "key40": "3FSPV3QJDpzxKdZUHnZJScnsSNibfELHRCd9du1y4UQQH4udugWXaBWhvLk1yAcLmWRU7g2C2RvbKFZrDViwHyuW",
  "key41": "5yeEkCHn6vqRrSCT7C7zrPrE5axiVaHMeUQLiM5t2fN4f8CGh4uWcUJZw9AnGfgWEgmz7CjSevr8Anmtnjndf8Kh",
  "key42": "4pEBc2ATBihMne96czBrVNdeD6tkNehxeRPUpg91pdK7EgcjYGRK5DtBryV6XcAb98HRwdFzgMUfVPcwhDv4y761",
  "key43": "5yrVuAGSD2XwMpzY5nhvTdCWSs174xsb9qEw36dxWBtypG6WRHv7zrGRg7vHbqDpNQKJAYkwvqzMucRfRB7jTpPi",
  "key44": "5dvrsBtZnir4xbh7dwAqpSZg6tAoUKCGhsaFACiq6oJqMSHicuz44fDJvDPn1Tz5LncDAE7yvNhiZA9KFepgqXDw",
  "key45": "3Yv92y5VQhwiYkDdBVjirHQReJZyrhhbSakmFN7852M8iUTpfVPsCSJdggvcv9KJKzrcoJZA1KSaUyZ5m4nZ3xn2",
  "key46": "5aboV87qcxh7WLRKKFyCxeM9ajqGZjVPtTwR7kMqGqJWF4o6tyECYHiC8ijSM9AFKZossJmLPV4faaa7EVN4Jgvd"
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
