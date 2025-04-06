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
    "3o9jNbSpdZdr7GAikxzKDxsc6kkd8WxNba23KsGzxYw8Y1GVKGUjyibyB42mrhaFsaM9zdHzqTAqkws74QU3uZtY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FDnXESVseZD5xyHaRhoGfUJ5TFrMghXAbHRLvaHq1WGMJsGf8NLfJQReej8as1DzbegSjmP3PscgCti2BCsiHW4",
  "key1": "5LJH41FTMLMLGeELvHQJLWfdMRZ2JYtgXprkkhfueNKTn5MnbNDuU884SWqk71uJeiYBTafyRsWzmRAuy9o4fS57",
  "key2": "5kna1Cb4fVuyjaeC7ss3UYYgZsJq2bgtgRX3MHVbGyRR4zzEACrn7mJD4jMeF8CyciFCTyfenBEGjZ5Qh9crFMWb",
  "key3": "4BQULaChUyppxoQGhwPhyAJKD2W67AhHnCgDjGokP6Esh1eiHacx7ath8Nhab8UXVC1t2WK9UiuAGwxRpRm6ozU2",
  "key4": "4ukKaUKbmoA8LUC7TYRFFc9LaBkECweesH3grcGJJ4k4fmWdSzUDD7HNAdDPYURHcpQCtPksvDA2x9BKdvPpP4ui",
  "key5": "3ExSEUhR8MCUpdAGH2ZyKtbW3db78xYrQ6WsrgopPY9Qphk5kisKKWdaUK7vnLaFtBdj16uqHC8ZxgXsrQFmvA5b",
  "key6": "5S2z2MgBKchZejF9fLfCmqdx1D9MYEMnyj7EKTQcxBcfpVaM542MQsuqF56tqeQZJ8ARNQsDxUmey9MdoiKF2cQ3",
  "key7": "4cFQwSKVmji1g1VYRPJhmdonNeELDMQXGT1W88gJt7tESunrKt4mrFRqSTd4uyi1VbRXpQCtPE9r1MXaw2wxqKx1",
  "key8": "42H9WyUjcenvyPAhipinTYGsxZWhk5NQXc5E1oT26FnF9VkRFb8h4rX5pzAqP3MtqgcG5Khds5ESaPGr1AfiLAAM",
  "key9": "2FJh69UysJBRVNHbDMwnYEbEqJ1osbNJpiUzwe1ZzM8t2D4ZGhaYDafFWGNAFzsswVmACLGgvf3yvSt89A3aPbf9",
  "key10": "3M2R3bXtrRTZqDKbJ37HAa8UNFkPywrvQqbzkxbjikuPyTAfX8VQUpTRGne1QXpjusrJtLQiyQs6QoBMCDbjuE19",
  "key11": "4uMA2ZmhNLFjS6nKGTTnoJDXZUkPQYxs435NP8TjaQLfWE2tdgSYwKBnYgVxCC3MmvNEUcNgniTiQ9sh4JDbsnY3",
  "key12": "4HgYZhPuMjFdXPdgh3Jm52JW171u8fM8UWmFW3au7uJGKjvMuHZYdmAwdWNrSpVdmc6Dr49ncBTDQrnWj1y4HmoL",
  "key13": "4Sr6Up72kxPbcMrNQpAEVBExpEbpEhHnZknLQLwxHiJxnK3PvTXpaw8sJjjKrd89fy9RwJ6xCQrzHbNRGRQYAtAx",
  "key14": "aMUR9N6ayuCzM4BLnbmHXjYS11q5HvfKdr7heKCGw6mN6epCikhwqdNKLiN17xbu8sWuUPPQ9kheXcDZDPQYWZK",
  "key15": "3hzkmWgq72jeFohziKa2aqyX3W6cpmXggsrK5HKQd2V2kCbqmpUXixYj9xKANEw3mVYLh7Gc78Wnia1NUmmNXYfn",
  "key16": "3vjjUbjUz8WUfPGLqambP9hnYpRMJNvvbb8Qyfy8TC65PdcbLKSpDnwAXereKEHxNgDzZZosGFF4WaPzB5jUr8ZB",
  "key17": "YNhoLSCKmhJjMDE8yhCT4szK8tprcKyYaegqwh6PoKoins64fV1yf5Gahi2UzsDbrZHUUydxV7ToPxd5pVRZqsW",
  "key18": "2P8NYharMjgATa7XbKfZQpN8EvxAfsj1Cyjv2jJbtbjFz8wkqiuGVHsE9s6RY2nTYNaG9kaxq99CgWBkUffkR7UU",
  "key19": "1AyGKddBbfKUHVuFqFpFMNeiuHvHSeNLPPe69rDmWwzdxeDUibjYrCV8BwZW6tX3tme4YgpXxWQavMLdTq94aJh",
  "key20": "3ku1uqjHJgNLm6XRWNxV6F71N4bAwihKSsv3rJUpeuy4jGCAEBPm1mTzTKW3EAP117eydbQbi7RChh181F7DKTmb",
  "key21": "2qRcWQ8wqN52XuQr5w7AoKTPWv3zbMeCfqkTeNnBEjF3JLgdUJ8jP7PtEiWjF1P65RrV9SbyfNPHQLqBarv5cSux",
  "key22": "4cTWYofnUvm9hHZ4bc5dy9D4pKCgaU4avTMUXt2r4tPc7YQwR38WmjiEq7id33uPK9XnQEgHCrx87Pbk3EsT7miX",
  "key23": "5JPgW3Ed8yZdYGNz184vfQG31t8gYN7TMqiUh62hHJCjgdsY3WUKEnegHoJ8zEqbadvy1vVCm9Hw6jkkk5wrxW4U",
  "key24": "53iaVkVkADzo86kqXDhbcD1sX7iFY6vaf6i7hnrCQWGKgmtUfV73FyyqsgahrzzQxdkNPNKVg6mN9mZVX11aDZLv",
  "key25": "2KvU92TYJhgRjDzha64i1RpNxMkkBRk91kztzRsYHZhpAcaTMKX84H5FbmVA3MTxJPb1Tk5P2SsfTGX1ngBMA2Az",
  "key26": "2zY4ekumD8TG9ZcD6Zu3zQMd1FnKzdHsCquWR3nAKx1DpeVaGbT9GAokjTxAjfMmhNgig9DgDWm62RX1ErbJD6Ss",
  "key27": "T8R4BqfNf1NWJDbJiLmMiUHps9iMczeFAVkG8AURK3J6xe9EWotR9PMaMzJYffKsdtLEPg11omeBM4gUuBrPvqF",
  "key28": "CU5yjs6HNARUT3MNmXuPssnQnjiBQpXebRoe24Rwe3x1mRirqi3cNkDmwEWUdZYa9KJs9wajTJTNW4bUrrmTnKg",
  "key29": "ba2qjdveKivW7WZUbptv6XUcBRRqa4mNHht8hoGDKs777uTZzrgGtMLRLgaHjAYYqgTmgXeq8F6xjjUsF1a5Qxj",
  "key30": "5yerWzs7mQSDnnAZBDTtzzGmNTjr1Vk5WctZaq2NXKj2xYVfHH4yNbQhDh1TGwvhiDboY1187p4UuDG9sYPbsBBR",
  "key31": "3T5gchJkj25hcha2XUo2F2yNgYoenTNywKpdfbQjpamGGqaLzZ3jpverLeVC9vckNhyXZg41WE6KBWk5Vh5St2we",
  "key32": "3dDh6ekWDkNpvJdohzn4um3o32EvM8L26AruT6JfJv9GMkaDTmPKqAMiP7Ezy6dJrdeuegj2M5aR5GUYg9gXign4",
  "key33": "4sQLdg5iZZBEiA6AHcAZCg336ZJCEezVNKdeBJTSwMTqnowK3GhN85JyDsfcX4zW8fjM6yyqHMjnVcPf1JrwUP5z",
  "key34": "2n8PcaozAihCdLZXszaELZ1J22524L2qteUfBa7TYLk8VffnRfQ87a4sGiZpEbiwZx9JHkNFuUPkJvzgrkrM6tFa",
  "key35": "ADR7wadVWVkTyKxsd3KP4k1c2jpYd6H62xPw1VefZG7mTMSa2GFWKHvdR3iZVQcas1By1AG65xuxkvYDGfPhn6h",
  "key36": "4WhgRNRwYX5i7deuz4QmNaxmSzbcE2vHi9xB2BiQh12tXYGBui1LVrsNHxYwhCKmi9xX4ywkCksacsixX6J7yykD",
  "key37": "5QF6znakVMW6XsnrJyqQqoy6XfMFJpwXYTf8N27sLGts2Pu4EKQfSNxW7nX9PMUPUoZ4PJrusxmp1xchbzMZQGLk",
  "key38": "5arvX3DAbdgECtCUTkqoh3hi8RymvEA4LYqWA5ZQc2EtMTUD65RtaBbxac87dKDPHtH4pHWxfett2FAZb51XGPf8",
  "key39": "2xtstcxFVztgVCvo9PxQSUHNKZhPqffvEKwRthDRLBmgdzzjgzCERpkkJdb3kytrFL2NE5dhJ57uyqzjHrttovwf",
  "key40": "aQnF51Zu8oNJg5oUvfFiPiEQXKF9xfk59LBtVndHy8yAAQF9RwqnZRNyXdbJbRspLjXEYyPdgXYsSAUXiyRxvVz",
  "key41": "54T4W2YpVC2xhdiZZ1gtN15k1pfDq41ujgJpRXfDyUEjAC38j1ij8iiaDADs8YvhJmHh9qn93g9SyXm3q3JzVS8e",
  "key42": "5vwm7VNsQrnMXM9dpyTzeBUZ5CxSRtrx5gooCwENEYT5KErxCyXACJKUswJ4RfFjxQjz5MkkXcjypqF3xvx72Dnz",
  "key43": "2QTBewB8Vu6CJk1waRB1C75VC8tHkVgQiUECFhoxvHZxsiywwNcGsLjsTTTuJVYJdhmmEEJME8nHVrp4hDgK1Qf6",
  "key44": "iE4o6iTpXcmGRT23ma7QCbXbB4YMFy7cxtZnS4zSQiLuHwrUy4gDNWRX6pTatFfGWRNno1eDGEoFm57GhXfuDjz",
  "key45": "65nNmV7SP6FLgDRdtq82RKvtb6SGH3r1yyUSrhMrJrWKu8VnvzYdydJctmCQKSW3aim3CMRbPiqxoJAMRHEoRKHZ"
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
