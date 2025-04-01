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
    "3SBaVsfjoSW9BNpneJncVXpT6gQ1tfakMXFFjTsPWWQtsuHn98oqWc2pGnQh42GJftRgpnEguep6GcugBY9f6vJ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KmW18YmQVLgzLhEtiUpwBjJdVf55dVYKKn8s3GpBxSzRZb224egtQMH1sTYJ9akFirQFaNjGw8sPHfjj1uhDfPs",
  "key1": "2WBwrRmJEvzNSBBbB1Ashb4YMgiFn6xfiNaVksN6hHfHFsQYrWC8gX3Bsm4V5262qk9wyDb6xARcuikuaVFAkK86",
  "key2": "5EoxAZgf4vU6H7EYvenk85rZkbJZ3xyQW32B3BVMSeAMLNnSP2r9Fab1Kt4F9kKSB3omjHpauEbesp9ZYHrYuJLx",
  "key3": "2Qm9ZaBdYwZUDwRdWmCdFxATh5QBWRVqaJFF9xGfWZJHyqTBsJmcKNzhjZV6gFCMd2Ai9Az6C1CLUVy51DVzEboe",
  "key4": "25sa94mBZedcuA6AJkeMSkSfjcyBX2Drv3RXWEtj1DkgqJGECCM2ceUYw4sNdLwbRErf6aJXP1KqWuhDzMYWP8qL",
  "key5": "56FRYTVpXXJYPjDUxynRBihVDNzNZm3r7LPit5nUZPMSuSz4xVFMeYts2o6cthPA67hbtSNmb9RPBR43xREYTU2e",
  "key6": "4redhzJEYQ5gJ16NvbDchHczwdQuEZegaXXqzp2aeBS1jwGayXsjC5bxZkWEF4iGUMsECKRLh8NtLtZQk6smjaaH",
  "key7": "4vEsE8u79gCb9uDFhonVxTsNjJ3e2ZbEr8K9vBsXkHPZap7oUnX7LE9XWv8DwdanGRdNe9MKoBmtMPct4u3fmKZQ",
  "key8": "FfLYG3mJJrBobUG9XadevodrMQ6UcPjDcxv1JdqM1nmFmqyy2A1HR3kkZjR64G7bpZs8Eco8xrkbQXbL3xkkLvS",
  "key9": "3yGyz1redhRSMLjjvyL8cEFzdGBswH98XkgaM9E6fC5tEbZQS7ZsJcgiWjyvYFSiTawCKNTnHRhn7NQd4pT6m85q",
  "key10": "2CyN1xKes5ruFcq2c5xxKbbdUr9upTvorsW9oo14ajyYJWbiQVT23vnTxpSpi4aswna6JLtMn2iGcGxeNhUkED9c",
  "key11": "4dZrfR5zJW8AUzRaZ7Zt2MizTvryRZooQSzDQAF4AP3o6SMKBqRLVRgykeiw2ncLQbh22Uw1kTSTpvzgwKzdQQUz",
  "key12": "2vSgyJQ4TQu3SJhxy3FR5NgHET6HUPv4Q2ZdyjdBgbtPR8SehdJiucmJHMDpNgfLhPwLJ2pCgJ53d3i3v7h81G4o",
  "key13": "4PxXxjby8ZSDz8Tcm1BvMbGvZ7785PnZZdqNezMu4WdT57rUy5xNXuBegvQmQk3qPnm2WJGUrN78pXXiPVE9djwJ",
  "key14": "4QiyXij5TSnYAAa3KeV2qaUYWJYdBDZumK4kN4VYz34LjS4xxdqmAGrJn6uc3MV1GaBBZcdPg7tnEtWSqo6UPUDY",
  "key15": "EqEtpVZQ6mqzDWk3Jouv7CZESQmU4hEpBmLWHb44UAVbW2r6KdNXuCvFHhNrQnUWUdBGdFa815G77hGVPmV34C4",
  "key16": "RUfWzvy1kH7pMSVazH2fuHmowndgST5ZKf8ap4WhL8Qpc3gTMGK8XRWTdLHBdUUKNQmCwfwEayXLtXkfzKJXFwn",
  "key17": "3jJx8b8MCrwgbS8RomTT1Ejj7Ro7kCgnsJaVUPUWaPgSPbFqsDazQTGeHcbqPNFeogAuzTx1t2YzNquT9uq8oEso",
  "key18": "56UyvDFPd1orqcgm44Y8i7VKUpTMm8m5erk2yiEw6HYRhJoA8YonZmw66CF17KxEbXWNJ6XG66JX6wYSAakSv7PA",
  "key19": "4hB8fEoQSQnMgTa52Jm8dsAHMf5Rhpc1s5HzhKUfH9uEppuWxFs47jFeWGoAJvTEzjrm6fyYwQmft6wcE8CAS1mb",
  "key20": "98K1avPxEPjzqzcB553gEvC4tSYmqDjTVoDmwBfF26qP2ZNav3sv2EcuhJtaFJSRPdTsxcvYq8SRLPWRXAWzFcW",
  "key21": "x8eyCuj5gv54FYGBE8RX46EE9gcxyNNCzhcmrXFA2KszmMBNjQVALVHwBrHQG4iGAKDhSGznPJNyRKXvLQ2593z",
  "key22": "iodBxkELS8bUiDPWce7HZd14EMnkmZhqzzQfXr4iMi8NyqxUBLdPEAcq8eAJMi1maX47Be5nJv3JQPd7FazAbyu",
  "key23": "3FWtHTc4K7mMSMHQ2idCdSGkAGT9dtTZ2ApCQr4XMUKhYsgLfSwwA9hkjocNYC7Dkpwjroad3kiqvANax4YxffH7",
  "key24": "4L1sfaStDKc1Tp2dEhUJJfHTPjWMckuGALiRis5TCLQuS6G7mZWiJUxWVrBcJVPeY9wCbvMzHqJ7r7f48vLbhwoy",
  "key25": "SKwi763tJuysoCpayiLeAvN1E31iRnHY2CdMJnKKpWYVkqXAhxV2G1KtRTQnrjHd2wyWcEKYeRiczJj5mTXFghZ",
  "key26": "3h6Za3sdjsWTLRPcZgJ6TX7aiL27ZFd9UXQaU71QTD6xSbFyjqMPgbksiUC5kjireuFaTMtyr2NhEEFeu87cA9re",
  "key27": "259Q1QcRSNZPgx3HJX6H1cBJ1UNYGfwVCMBVuk2D1buWmnbZRA3yYiVDsTriarmmpSt5nytG6KJx2xRvvRxYVaan",
  "key28": "2nMGqEHAM9YXReu2WvLffjvvCex2krwt6NGbAuwro2t8MEmCW3Dho3XWYjxaD6m7BH2TjbMSoMrGVxYopX2qobdo",
  "key29": "4aTjzfRPFzj6pPcqHiWckgtCB9VJrXwkm6o2A4euC6iHuQ9xGBukhL7TAWJqVwD2wgNLvpUaZFB9YV8VME9jgQVq",
  "key30": "4wJmqhPFofyNZ6dN4baAdZrkZ3tMiSmBDBfBjfub8f49ZwTCj7yv4QS667qJ9CjAE7TdpHV1JBmK2AaNX9v1p6b2",
  "key31": "57d7VEzHd344Ex84PyQXxdS7rgmX2V7BhbQSmZcTvo8Rr89eTNxYS8PiQrubYQNJkzMyKFhTysEhnp86sxdc4D6U",
  "key32": "4WbJAXixVEb1Bc2S2KN5m8oitdygMCRHqAKuMpL8bdvjWCVvPAPBTm4hjsJroM6PxbCrZhY4s181pykNRdoUyVkw",
  "key33": "Af2eKZtLvvVZzsZGDfHZkWek6Sriu49FJmoyVxQyXCdpg9qX6H36JNJ4RY8QXadaVKX445kq8tnch9sSX9KGHjd",
  "key34": "4YcR9M8hET1AWbZTXtBebb39cZgLXA5mWe4UfR9eLcvNAU3e75MNpUFsQP3gHzePHgYG6agyFSzYN7juEFZdyg4n",
  "key35": "3LJeAxw8r8Jy7SNmTSgQx5nPAm8wpCt1J6LAwQ134WLifqCcxBnBBa43oZoHfegWLJc2u54tv7UXxnEMtKtWqnCS",
  "key36": "uJkSbeYXBWczbVtd3xELphi4mGthMNYmMZs2ozU1TAoL6dt38v3BHj2kHZM7og2JSHp3oXCyc3kYVH6QEAfRUpg",
  "key37": "5AiDeK72bm5u5nhJ615XSuTBPG4ErMZ4dPmwzumWaNXe2J65hiTzPLB5y1UxFnPmkaFZNS3fyCaoPNP9xUXoeVYs",
  "key38": "jAuzyxUkjwBMEHuqnfcPMcu5fEWqgguWSMZMDNCJxQzExPM7vXhLEXWrfY7vgihx5XjCfqT6r2AxDPaNkmtiu2N",
  "key39": "wUURZUCFRimH4xPVnUajHj5ziT1BVgen521McGzVa1CVAW5ayyEPaJn1sc9QYeiHZiPJCxsfWLtHy5c8PHrSTyD",
  "key40": "RdBy66UPRHbuyJgJx5WC48HX24exabmhHSBNzTjFyxZHYf28V11MStBKGSLhz4Ubay7bVwMERG5yPT2Xib4HoTH",
  "key41": "gTcXhMTrgFuNerWFwr83GL4rNeLv6Kw8KoKWLUosMp2rUWBdjjatrSpkQJeTzdh2rt1g1zk8wCPFCL3YtKg5SCo",
  "key42": "P8woyXHSBxqy9KVLgNkbm7Gvs3rZWdNrgKJzFGBzMFGgma5p5XstdfY7urTMCWm7rbCL4VuUMMN9wkE9GULKqkH",
  "key43": "3dwYXXkykrNvprVzn9NcAyxDT37YwCRjug3yYnNSRjgn372v4PuhqUJ2M89XxCYPwPQYL54dz197pAU3sFWHfj3M",
  "key44": "3rT3V4Q1MwgdHquEfZpWiunvPcjcDV7D1V8zhmDmK6PwhB6M5QuAdcXpt1voMqeG7B5c7yMBYAFto7JwPgRhr2ZQ",
  "key45": "5S3x1gxyFuFrzf3pssCvNoen8XfCexyEfuQu9WAvKjgupn96V9io1tkX9VEUf7d8RCW26q2Zz2Jt2GtpVHxWNiPp"
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
