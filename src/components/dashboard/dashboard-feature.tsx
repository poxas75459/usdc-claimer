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
    "3oSnDqxnctN2cynxBkwbdfBeAVSKyxpCF4PcAjExvpbxoL8cE3SH84qLXeMefeVr4YYYedd4svkFZbAFCLXxhD7Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YijYZRjwKjYFt7Gq2rtKxK4ytL5rYs2Y2FM5BhfK8s9ifkmAWhJSzQLdvYfW9GSktKiKY5DJEJRPffeSLafK8ma",
  "key1": "3Wwfa8YE7725zq4WkGNjrz2qikHG3n6jvVpoXLTDd4GUVToQckcmmRi4q5PMG7wWMCrvPzGCg4bck6wrYvoJn6RM",
  "key2": "Ze85ZPURBYJatpdKRJKivSGdHb5HrjV872sVk4op2WPvhRMBApvVnX3TQ7EtR9idXg9EkDeQ5ZTB2zo5EmrqU6J",
  "key3": "zsf5SXdQAKVxsyrjrp4UqgYcLkb53aeVsyYsgLBkerY3z21bpiG3wUT4fHDH5uNWCmCQV26U2DA2kABARRsbr6U",
  "key4": "5A8W8C76dewZijeUnDpc4u3BqWn3RJZ4n1f1BmHwmDhTQ2r4GcXDRbvWM1AWgxF4byAG6romwhEiTbBosHULWXFd",
  "key5": "5pj6KARhMnyniLVpeqvLsnsNE5AsXTXk1GuBZD2FaFW9EzKqWxnGt2PkcJfT49Un3MhCKeWL2BuHrhfDkBrvQb7W",
  "key6": "BX5HoD5t7xsrmQbf1KqqCKGzokUXL71WAMF1Peo1KmzqbzA2Bcpu5uP6ArCdsbzad6LPL9tbf7sRzWfzUYgRGHW",
  "key7": "5ubxCN3LdtPNNqpPVVZnUeTnATHVZTGXyy34k1WfwGyf2GXheMv6QNUNzikn7fk8oqrghWMq9prQU3HyYrUw3FXa",
  "key8": "xE3LxwFy1cQaj2XQ6CwhPbiPt9sGKUBi3HfF1Mydkxnw9L1xvgZrig3DxVSmL8p5EL6PZ7uAh9ebrKkdpGqaWBG",
  "key9": "4eT1cQVi5fANFjKoJynttVDCoU7p8S1EAmQ813x9WPuk8RUo65q7Tf1ojjDexgKnY5Ak9tMiSikWsYTDnPdNNHi",
  "key10": "EEZw7AQT3Ui9WCcRtfKMAyWtmoxRBVKqpub6DxTcTXFX75xERPxjS7ZEmJ187CixnJkpdFoFdXh9bS6JSHm5aDs",
  "key11": "2iA7howYgx5h4hRjP6uX2pHYVHNk5i55wgoKYaeH6RQjRCeYmbW46Vki4gTrk2LpTZDmwtzVKs4uqYJT4dGUKAMm",
  "key12": "Rsn31tNdowiB8ifmcYLcXQ5LLwwnZ5EmSUNYaVc9ASGwKQeFQXGLaEniSDwpBFtztjiq1QUiuXwStMaQ5LV2vRs",
  "key13": "xWgHunU1gmZJSEdycZg8txGxk8XMfQhP9DkrHATAbQxHkTjcodXuYKtAZ1YM6UKk4XHWbYxB6r4wYKTHzJ5xDTQ",
  "key14": "5e6ne32T9qfBY7CkmGgYHQz4AsxukBcFFyqEHNoKMydV4v84kYwPzNf6owrV8V1cjruxCDUYZ5cCxcYXreN8gQ5e",
  "key15": "7Ynn9qfjAgz7ojJYwpFXvfSy5am6thoxefdbhPpmK5hFftAqiuPr1J2deet2E3GNcQFC7b1VRHA7gSyr4xTVApb",
  "key16": "2Fz3bYdEHg2yehyA3A9XTcwb4RVCAxWzgN9JxFkwJmEvbGEdDEqZZmhJJmyrnJ3T9bNLiAWkhYaBPosFYZVopzAx",
  "key17": "2U1FZskUdtQouFjBqcWkxUNoDfWHWesVUwUGByU9DKR6i4tBaoQvoUXqRoy9YQRcaTW8uY1ZyQD1NMzyC8SHrDX3",
  "key18": "3az7PHjPV3cCdBZBqd8Vcpxi9qY4HdmV8XvxL7dHDWSHdByUvT516j6ABro8L9brYFmVK1ZUVDEPSkerPsyrPtwX",
  "key19": "49j5mNtbs8XkiSu7a5mtBnMZGFgxAswsD2S7rWuyvhMFfrb66NaoQv4mLqes6XBUxEdgtejb1ifoTSC7V5vnfmjA",
  "key20": "4jRXMvV1RWFxH1wAZcGnmySh1CcVpFaD7nHTEictETcyyCEeyeBxc2V2DLEzv9TXQviqGQC4w9XtAKeuFDBqd1YB",
  "key21": "5DMGGm2MGmLSwxC1N5uqK3pvts5hC4yvMoBhVFcfPXtYusBeRxEoLaYD4zkmbVZreYDcykRCGhW5DPP37AjsYhP8",
  "key22": "2ncbyTHBA7its6utGK4CJpB76Jc5QV6yGHkTUeUKH8Dc2jAEgb4Enfz5dF52HJjBcYn9nAAbmPhosyW8a23AbtTi",
  "key23": "4HHkFvwNR3dzo5kJVP4ENM1SqjWWcifEaWdPXkZPbSi49CZnqZF6BzsQYRhNneaNvegQYp3gf2SK4aXqA6PQ7ZHH",
  "key24": "66doDMUYCf9q7gsaJbKKypHodX7FrP1ML7agdLqNGks7UaRYYgGAQvrQEdnSbWLMi7UdYThUrdcaddiSZU8Dkc2Q",
  "key25": "3pW6bGfDDwjm9kt5bhT57NB6p6y9gXWsqY6Pb9apTrfQ66ANpmqYkXePmswZQA2AnNnhceDhLK77Qujn16PVXWBU",
  "key26": "5Fu3V7UMoompVp1aNqRBPje2QUEaNMGZHvBWzwGoY3qUZ6jNLJrtNMFMiv1YvB8UQTZCPr5yAHJEcAU3PcT8suDX",
  "key27": "5gt6SMQPJjYQToNUamsajhXvMJrvhBHA7maFMt6GmwhgCph5NQB25Yp79LKPnuyMRUkSEbYDRBr9V5CZfCR6FNP1",
  "key28": "42odqxwdA7jc62QjGBbRW1UUM9jYKR9xsy5xNENT18CFybtmtHE8CvWmYRGUuhJGwz3xjUMYkW8aTf9SoMJBHL65",
  "key29": "3HAPYRQWtwZSB74DqFsvA4LXxEcHiz7SezanJF4g7q1aDFsHmqfeC5tckoyjwT9d1WMATJQNk6gfj4SGkNrTXU6G",
  "key30": "VdmnW8WnGFgRGjrFp792QECDrKBt7mf78dBzMZ5gteCm5mLNvaRtSFVb9TqPUmEWBVgBUGFHGUdswtVFJ7z7s7S",
  "key31": "29ehkhHHzQvLVv7rztvfeJsdf86uR1cBfVnu75Eo9vFVoUxLaEb6FwWJFxR7ZQTo8xuDQUHAsWbenQbKxNCApfSm",
  "key32": "4DxpwSH1DULNU3JTsGRWWrxrBn5nFcX5Z3EkNSKF9CvgcVeeWWNNotTNnnRzvqxQqEuqqowLArBcnaRwDRAn6wQv",
  "key33": "2NuwH4LyQmqbbrRb4cij2nksGYtTYRUYXg3MmgL2Y9mcrVLs7LYreWaUcw33h758oVoHuEk7RtDC1bsU6RwMqvPM",
  "key34": "5hdNxNciE6WBEK6j4N7WYkuH7D9rzf5VFTKihrZn2x8p7yW3fzhgqoBJNqDvxzmCyt8i1iU5S79yLbaYFEKbzgHf",
  "key35": "2WCgMD4gSfRi3uSKHzWan4TdMmbHKqwuTATJiCzeqqTmT6WpeGCyiN9QLkEBtsmhC5QKaBZjVZbVdrduw9ofcJjh",
  "key36": "3ScVZoCm6gwexH3pqvE4L5UG8XicatZXzxeFfQP4CqwU5WMAPb8xVbu8ewEP2r399UTpcfrbqnuA4X9mHhKhNPw5",
  "key37": "2uGs67woBwuJfkfjbUdM7MTswxDHZxxX4cHaU4Tfr6cnfW5n2pmgkm1ecX9mdZZ1ykY4jQhGFnaJuPAypq7CtVop"
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
