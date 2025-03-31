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
    "4MSVv7zxsRrqbgmirdaYwpULFfhRhneLbeF73Vc2cpzXYTMb8vziBq5Xaeke9ju5aFJHeGsH8kYvWR9npmhUa6gH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h3UAaYSvZwgacDXfwRuCmZPpJZTQSVXjxfRNJGNG1WUbtcAJ1B2NYmmphjiu6ziUX3bBYBoZyDkAAhebtnEfGU6",
  "key1": "5vXx5rvktQ3jV32wS6AUKegMujKHiL4LkZDDJRTX7s88RG5pKJAcx76KTjaWR7SgmtzMBDTCYD94WoRPf9d4M2W7",
  "key2": "64ahoiBM75sGoDzrXshVgq9nMajuLNjoFMggKjU59Ltez3skhzwuyH7CpqwNqZH6edwiHZAAKRtRrC4WntaAbJTv",
  "key3": "3mJcpJzcRUTZdYSBWqT52jLWS4YJBHzane2nUtV1u5oPWXyJahpSDwkSrzjjHyBXvU5JmDfCqkVBtWEKKMcjMkzn",
  "key4": "WjAVugrScTK8yyvUCBuGsDAxXd3ExAZq4uCvnSgH6V1qpyHp3HNN3ConugJqwb7etzTgEpeUzhjvR1euRa5boB8",
  "key5": "2SJXAvFjszfCTBzQ6Kx1t8WTz5Tqu6Mf23Ap3B3Cr2wcJ1zaeYfd62D26ZdSqaUtj2ha9Y6WaycdnDgjJhYo4Ziu",
  "key6": "2fjQQ487gbCTqXJ58rY7xSEydoN2vYKeTQp4R2bcnzqZiPmUp4PP7VwhtFJ4WSi8npUDGWv9AupGJduvQRNmHebM",
  "key7": "2dwoCpzdRv2iVgGLoxRLihPVSUGXnTPGxNSDFWz5znxnBiPhfBYDQ22XSUXssGAeQeUCFDfLigJR4Zd1R66yf2Nz",
  "key8": "2YwREBuKf9RK6rjW1Qyjv5KNHv9AcZsVYnCyaJRgttDLaDid7vpmk5cPxJdcchXZsEoSZUykdux11iWfqRaep5Z9",
  "key9": "F1YvydsZ9mqJ6GthjHRfeKLkvB22swLUrdV9hGzxi8tmkrobH1zGVCbFMC88bpt1nhTWHSrmbExvNQQRcWtUPsn",
  "key10": "5MmhpcM6gnyoSkuyde16itHGWkt2Fo8tXNJ4MKmCuS7eMoBqs9VhPov5z5FXcjpLPpVgK7xH8W3JZYKxk1gWk47K",
  "key11": "5PSfRtEMK8dDcvAFtKGFwyPdoTJQb5gXEk8cmd4FUvRVRgoyS1degqfVJ2QUvqDdGW493EJ1Lt2JTa9VKYCka8D",
  "key12": "2R42ZNjVznnTTgdV248dab2irneYEjukQvTqTX7Q9XJ8ps39xk7WR6UKaw8A62sN3SkaG3G1ZPui4yJ1ybMKiE8w",
  "key13": "5VHbgnmKmXLiVKBv9bGfFqmjeCyKPFEXSQgGeM3Jt4RV44FaynpbAUMxWV9jpHx33yXUA7zur7AevPwVEMQjYhqY",
  "key14": "5vGdWMa9dR1Vbo2EgRjPftWHgbTLuJfyYZE4RSoj4eJLMJC2PJne3LcefQazMaXNahytnycHsGvAnBLDh5HiXPN7",
  "key15": "58qB9oAPYQnzkSn9NKJmgktmxXDCP3hNLq5sZdZtqau3vRC8ZBM4YzuE8tKbpvVKUaJPbS3MiGep4n6awmCUxWgw",
  "key16": "2EgYZar81SqCi8HMUN385gA8VWF8ooDAUCKHMRUHXjvhwRTeppyRFAQtB7U64QZU5Hn1RxmpqykWo2H4RvsHe5fj",
  "key17": "ZAQDZe2n98aNPboceYFfxvujgKLi7hj6tG4xKLXSehNyKSdSXdw9RJBAo1KYLsAzaophW4AZFUTPEsxHsQh4nTA",
  "key18": "4z2JoaqmeKffmQXRuyNb7V4jPSMc8f9mu738ZECJfJ26mwKMWYht645V1VgrFL21Lz1wPZmChWdbmuFaPAG87tst",
  "key19": "4c7wQH8CSn1dV5ZvS2Q1j9MrXdgFgWKFpYxPYk9goxYbJSLW2QEcBeShSKENgHUCMUrfrFP6samsGUm1Q1WMntJG",
  "key20": "2TND3LxvfP9FtarzmspW5BZYxqWWrZgJXJBKYUpLTQDUCh2LXhL2YukwfrgUcnLV5isB3kyXYcwNNYxuqwAc9HZS",
  "key21": "3sWzEzRqy5eUhz44QGNG2xVTXmVRgHKqnLjkkEDLSBEKZgLABHuFPHGZPSKobkondcLiFD2ShqDj7mQNgJZ9d5NW",
  "key22": "5DAZ6ATbDbAWgebJVbUZ3wcBLHy1ZxqiExtFqP1HXG9AY2LqRKw3aHyAGMnSQrf3beVc8yhaJXYczMGx26reBKEb",
  "key23": "T26bpSkBQQ3wb4hcoSbwNrcJxSxuFdH8QGbCqkUATBG5cJRS7vNk77ujiAHMrwXe3tViJQ2nSujQxWWFQW35GET",
  "key24": "5R4GVBWJ16WaAT1jbZ2CrXgSDvyRUQU5HXQebpBpkP6mNPRA7iVsrUtBzfqZ4LkmfKZLJ6ZrbcJSJ4yr59tMyZxS",
  "key25": "4MJiUKwppsS3RsJSxYUPPe2wicKjM1Fr4nL4EN9WceqUo27QQVXE8z4qZdKgz5fFgDJ4VKXkNZRfqAxNfjaRjdfN",
  "key26": "5awStTHZLdiJmay1yR7DTjUEZc2YFGd5AuMkYuV5CR3QdatCm2qL2AJJni2rBqFJ1us5z5j5P7GS4ZFFrR1xdRz9",
  "key27": "31kwY6n4cupmrxowhNcMFyHbKx4FaubSfLfzEp4oX9Vzi3SRWSswC7EnLUgdrNPBvDkuYnj49aoTGJyAxh5pPMra",
  "key28": "2ZExQpf61LkvxKyHZycCTndk811k6mwKosVWjKqRNqksbpMXCtyxpNoxhEUY93biCjrzDuDWSyXr98nKtjbQnpqY",
  "key29": "28nU9dHyyCZ3xYVWAdXB2wt3hhpZ9A6vJ8pzvkVjYfz4Hsg5qoXFCt9CFT7YxyAN24GPvrVfcUh5TMug35Qs81As",
  "key30": "B6PFbGdayXWuJoCEhMcmSYVqbANMWWZ5jAamf4BqwvzMst8bWfVFnZYDWkmCkU7Ltgwm58bR6tckAx2Pkb7Kf9W",
  "key31": "37csZW79aeXeuvKh82QtfbNKYYnBqmmvj2dnYPbCgBCCvN38UurcDQrMky5Y4U1iS4qtyvEVL3SeJQqCzpDquTtx",
  "key32": "eM4PLew8nw1RgVDMDgfEUCzSMPWozkqKwRjtqher6JVG2KhJkaJBXDJTujw5rFCHKk6Sb5iCUKETriynUMHpriU",
  "key33": "34cYB6iGndtXt96rYbTJcpLy27LdYwr5b1qmMtXiXnzm7qNhosKvKntijpZKCEWrEepM5LxFyQ1ecf3NEdZby4iZ",
  "key34": "4p6GzmgGsozTAdLGyqDMVpoQ6yfrgTgcVzdThkw9r4sRLKkvqSUqpykNoVGGX9r1U3qLdbsLrpRt6HeSwa5RVACk",
  "key35": "MDcFkNradPdT912MJcJCDK6aUiaSUACnYadTciETZQZgQEMthC75qT5pxt24apfg2cEfWU27r2b79WMBPi3ew1T",
  "key36": "R6wfSga1ew7UxwChE5kootU5qykSHgEPW3X3Zs8oyPnZh4rXR7UDPy9amtcqMpicRoWSxct9Kov1ZX2WmKH2KWb",
  "key37": "2VwcN2QA9LGgq9o7E9QShoPT27DycewywYL3CkCiSo8hHD5buN9KWRmLb6HYoFVZR4tdoiseG12wyKVndoM9i5YH",
  "key38": "5tXzmJMJqPG1YF2KrTRK5ehGjCfFeJofWm8rzn3B7ePEM7SbeBZUVobfNV31RAVcQaWrXxCLRvaANzLfcV68duYA",
  "key39": "3kV8uGjATkW9VZww8zk1muxYvyVGgaVWkgZb5cAkViBoVdNK8FP3yqGBGJFRLz3jS3pPsM3uJtTrRAUmQpMc3CBr",
  "key40": "4TJfq818jnP7AFYn2DrVX1vXRHZy1be88A6eZNNgce87QnqkP6akY1KUMEfxw6kJoTgtWtT3Xa5pq3ybqv92hXTH",
  "key41": "3sjKcMgbJayAv5eQZXK9adstZ3Gx4on2ovNtNo5m6nbSiaS3Ca5Wp4Ewsnz9D6DnF4VwqnDQ6EaxFR32drHkYXpi",
  "key42": "4ojRwKMzWPMxQkWHNYVhY2rNuYWQpGs4jxhXoh75ih8NLKyDnBo3nmccJ41AmFBMgqwkbJPXPv83tZLocckCFNgv",
  "key43": "mBDnsw8ysT3R5SNLLjH9PBPA5nZhLPdPUqoSmCBkQP2ycSSggYHm5TSBw8wWL9L6AqqNwhrKEoFBkyABZsNbbgr",
  "key44": "3pibnJxwRPYKy9NdF9XMHG9DqVUFWYZo5EJoVSukJp7VDQ3XoKEZbswnZQdtvz9NarAbokVk7K8HNqjEusUnJZmk",
  "key45": "3bKAN3aDsXDo66peZrj6jjoZJigwi42gPzeaHUGk7ypvyhWAKeZCXkpv9i8X8uGUr6W9qbFCbT74DX4DtbEZCTdv",
  "key46": "4ieQB7ChwUpaVjjPFXFjoRYnDwSSGKrWm4fGoPwkHzUPxsrjhEjCDtyWTYCPJaefAe2BGbMJRD5Fy4Ri3u4bLUzk",
  "key47": "5wDmg3ZbEmeavg8xU6yoQuuCiExfMvjBuGm1LxPnLk5xrLhHXeWxz8FdmccxMV18geTxc89euzAQLWmjDahYP8o",
  "key48": "5QnRkMdDitACdFnMvdYNciUbDfRxPEgskW7M8xd9khP49rX1yppvXb8fJF5T4ZPWo359VqgStvMRGgPxhcN9y4vy"
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
