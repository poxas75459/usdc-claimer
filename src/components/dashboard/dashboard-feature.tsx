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
    "e8CKruNBxwuHq91HuHjpybNrUzdy4eekco1znTfLGtStHLNQk3cxnmuCcR6yxvBQn1G2mSetokwExrUgDjwjjs2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4byvEV5nF2irstMiYve4Rg8cMo4EDtKCb7Yjw2hR5YKuVpTQyPBoHkzC8mMp2MvThHREckYx5vws6sK9NnJ1ibFJ",
  "key1": "4GMqFdZ7YhDAdq4uSzG3N7QtCvZJXKuySKHKEYZGuaj3ntJRQhmXSjLVq7aScvRM5wTSbXwTKhfrL2SshPFsyZfE",
  "key2": "2YqHRyrZYUri9Yj6arDfQbVS51mtGf3E9MwRRj8bzccBYsqjCB9cBEWR4LFsev8NF5SEiH9NAfPt4HpfcDCjgjdp",
  "key3": "3xTCgheRUBM3SmUMqwdNa4KUZ3mWBZv5mZtAVmsLCDZND1khPr7JRrMM43WJksAgjS4ZsfTfcGXCNFQATqe1qURo",
  "key4": "2e7vWKzn1bksDKCSptUUd2oiohsE2Nq6b7a1iZN11gTi4f3iSUja1Z17UVrLkcY3EHTm1joPuy9tEzgQ9XV1VR7d",
  "key5": "3vwwnSvmkYsip897he7hF6XfiLMfU1HtrEpEgzW7SUQ7FdGrXsa6mQyYJDp5NdLvf3tSHSoPpLbHBQ6UiN8Cmp4Y",
  "key6": "2FpH6bKV3LN2Ex1HpgmAWxuQMcY2N3o8rn4rr1k9Uz6VEfsBzdaXrmgsWXuBBAnXcpsP8mTssqk8tctQxRGQD3hY",
  "key7": "5w9L8aqoGDNfkiFzyKtMx9BrcnTdfBSZdzw8rztArHtykdwNJPh7jqrY9XymSrYf7QLwbzSNuDZJsKaMFvFERhLc",
  "key8": "4DuGrr78dyjcWsbF17E2s4Tp4qReGRJ6RwXqJPy9NFukZwWsaQiJSb7K7aSP6CYY3reoetdURuEAGTwxTT97o5mb",
  "key9": "4Cov9bDAxtyibsSNmFz4rJ26aC1KSqB7ZFmpHAniMouiBkUzHKFXwZXizXbo91ZtZhWjDXUU8TL2B8x8Pa1S2WPJ",
  "key10": "23gJ2SbPJMPwCUe5EPyLV8UN16y3eMigdzxuAkJQHvAboLhy7ZCS23cRhiKMkCpfqE85RiW87RfF4r8SBUDzir2E",
  "key11": "1v3V9NwpntUcCXHKTj6GmbZXSsKrxKcSu6dHM9sg2TeEc6J6NSmTsQy2j9F6AePANjGcpb4yRYxVEgPNFohbWx5",
  "key12": "5KBeU5zgrGZ1GZ6XY8kFPBSkY6vcmgsA2g9ayqdSRPein34edRjYizHMcXssZkwpwLdYuVVKXfS49kErrWCzbraP",
  "key13": "fvidpAQWC7oCjZugfCWEzrJ5JWLWqrjt5eRpEe4q4fqa6HZSnX34mYQDFTRvW4K57C5Ryjd6MW2bkaLyMr19WbU",
  "key14": "3Ruvs5w4sBdW1Ai6JjmbFGhRovv6XYsC5g8qHo5gz929vTcJNRsDhtA9AcgRBwghVtQcfYJyGvqsjzn3j8xgceRV",
  "key15": "2nsNxByymp1WGZhg6DkoHQRCCYBCSc3SoFPij2FCfzqNwKiXKyBGM9bMcydmVJviRifAkg7RK87NW4FXhc7zdqZM",
  "key16": "4YkjEiWaXMnrq2jLHf3KZJgNWhd33MbPdDbtiMC3kWLakrYLCMYfaakf5BvutWRJk5Ws7PDs2uAvx2peTcJnS9AJ",
  "key17": "5HgG8piTjGAwSshbPjRe3mbVXGoiZLEi1t97Wtfx1oTRANdqNVAqkK4M3fyGDe7AF7zb9YgptweripdSu6B7e28K",
  "key18": "3DKqTsekWt2Bnb2ze55Bcsz39EVZSaqD9QZjFPRXk6LR9Lp4ymMw9LgXVPLe5XD6Zb5mJWw5nTw4U7EqRpCnM8sK",
  "key19": "Yq6swt24gPHnkKfACExHyB1dbHcV82B5fX9gUcodn1MFc3LsLkq8TryD9HsFa2XHrpyGpRD6bTxxiyuAoQPyaJE",
  "key20": "2cS1543F51NKuA1eFVRGHztPKC75N6NzQkCu7MDQUXu63ZwNsiBiQsNmxAkTFNsvUU9Ag1UTdBgPudf3MDz8N8wf",
  "key21": "Dyy2hqk1cXcfXUwAYmECafUR8vf1t2Rn2nRznamqCiHTnhbc5yZ78ZuNFNQNaahtieSLu6dRfkXM9dfdS2X2kpD",
  "key22": "53xqxQfxGV4P48A2boYz7Ps9h46smW7rLi5rJYVuZ7AsLfq29rTkgp6WJ55VhXDLEzd6cygSWka4gYrAFdQZdsRB",
  "key23": "3rXZckRvEN2nb6YsKfeuKi2LNc1kghNR5JTMWbRcPKZjbqiPBxzNfsici8AdurFstvzjLrU6DkPM8XN3JbeYGT5z",
  "key24": "2BCfzPzgMiuCRazfPE79M3E2rRqZF88kM3nUeaV8z662acgpAEN1p4WePA5FPdnU94uNKrHcJJBa5fcE8mcJRPpx",
  "key25": "2HLmv1Tfyi4uNE875eH6VNNnBDgGM1HgLz4k9MSNhNNUS7RVVRXpPECH2qsdN4PZZtJKz66TvAJkM4UJY1U594qy",
  "key26": "2ooJCamGEu498EWtZBkk6GaeEBxLHUf9JHJaCcvwYT6tePN6B5yzX5B9YtTmbA58i8xgcJNhbv5deUSjfUjs4CMq",
  "key27": "3wjaRhAYFZAThCviq8t8bupHTw4pNEhkXNnsfKkgVssiKfw4jVBLpoYaxp4VkQtKA7KEUPCUe53WCkcpWAvuThQV",
  "key28": "bxJRmcrCXuiJS5LgzSAhDFnTkRR1cnQf5L6Nhbn3wm8VSdgLkfrAZwqU3RNHJgTkwg3xYW8ubsDqQEMPpK1YkVu",
  "key29": "PVPMiRcLBLJHeFtpnj5yMVDfyoszz6CBaNvm44yPVf7ZnP5NVCoX7q2rawqaFmQidE8qqhMcWsE94yqWiqprMGB",
  "key30": "5XtD16qnwtuXVxGk796jPhdAbiLVecwcFZTe7P2naxXLq7gJ68nmYAfAfRYfX1jWCEqNdrQxd6EY7BoCfkTsX8yJ",
  "key31": "2gqz4EfZhH1vXH1GGGjfb6uwjRmgXoxUrqUUhEQBwbaervWvD3bzKCbCCrn2MAXJ5pPk4NkWHuCnqf7bEype4iz7",
  "key32": "5EgQWRd3G5jRNoVu4RxFvfZ2WHXZTWUqSKZjJoKJ8tggzvpVMPNQQ3F4etBky2Wqn8d7nn2tR9jB4HW6cK2J6RzX",
  "key33": "CCAwgH2EVBPJqqCp2eK248gFkV3NYb6VxnGutPtBfA9oYotKYiFXt5rio2voZzJ2EtiGMLziYr31RfoxADYRjwq",
  "key34": "3oxrixetdczHXYQ9Zz1za61wpd7dfeBgr8uaXg9aixy3PQDq5nx7nx6fvgrbPMXemJjMJ5GbH2erVXvRvecUiaB2",
  "key35": "36bhLDQFmLgQd69uXwQPZpj5vvtAoJzYkbHW1A6sBxS6S2WUZ4szt3SBoFVnDntiV7KkHT5KEZBD53ZP9hYQ1nja",
  "key36": "419YAHUDBDyx4ryHjrihTy7EbzJTDXzwNDcFxYeVjYTc8yK58FMzN6TfWFsJbbNE7VzLmNawuQfx9kTtupGv7dw6",
  "key37": "5FuxmH6999Bo3PhhnoLtnrNQsmkqJMs2jS31GXTtG9BTTguBwcFKbwcnSCxBYCNycxbiZLmTcams5snRdB4Swk9K",
  "key38": "48t4DChbRm4C6oGKhFk7CX7vtkEFV2rhCMZyRVzV2BRa7PMKFhp6TSaB6BCgxQSRHVopQJUug3e2sUNpqB8QvHEm"
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
