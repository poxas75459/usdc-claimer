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
    "5CvqAinVX7838S1H4RQt16hD8Ry5oD1YNs7tvBGegy1JNTMh41YHf1RsGm1HmN5kfUbTf9TuedxKge6SQYPsMete"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZPcuKr8bMchwn22QfdHeGt4Dr3ifNbjkF3cvSEh46syPyHn1UafY4iBiLtJdv19Ci8tRPKFRqVJXySjgaQinNZc",
  "key1": "4qY9QHpKRvuP2w3zRPwRDncpoKPE7DzQP57Rhxe8Jx5tMMQK3npuDgc53J9zYHAy1KS7jd11HGZ6LJib6ciqQoiy",
  "key2": "5qzZDZDRxp6LFDPkPczWAXZe5bBuGiVCdgSVfapaQe87mj35trD6QHnGREfbg9bZKdZXUvvXSWQwHWATxesZmpTX",
  "key3": "3fCkRYnvNdiwcwXccvURVfU1mLb3MsuD3o3ivB6jcmCdUwP5Pz63437VYgFNuTdMRceZyWhsnjWChbuLuUpPD9Ki",
  "key4": "2jUaCQVLRHiN2VZmnmgLyf9FJToZymhvMFkJDJLDrbpsTSbQzN26ERY7b5XSYxifYcVaodhBYkTKPe6HjbkocMwc",
  "key5": "4Bs5TszNhMC3XUN2AeUXhRMVGw2gVf1FpLVvtbPGihquKddui3mnFd2etUhRmxxLdo19GABWUCY8AacscbTAHXMZ",
  "key6": "2nGHRs6WLPbLGLr26DRLDPrhozo9MXLGMTZo2BbxZwnUgzd9kkxEJFr2GQZAyGwB3yMfaSXHrFmc23nnpA4dSRHT",
  "key7": "63q4GH6wXKvg5dPrckFadmSwdw7C2AeB4sfM49qhKgps3JZT24UFGCWsuHCdSuohvY4u2iJzpxdEJET1sv3J2a9d",
  "key8": "4h4aZrK1mJVmMB2JuPhrEdkDCxExS3hsNhRNb369yckMVkjgNyb6R5UCBKn9ZKDyvtjGn43krF1CSK47XAVuZu2u",
  "key9": "2EtdhwJXoLx5nnRMwJB6r4HPCTbE6y5HH8rsp25MDxcz7PyPyq3D7rRNSmR91wUo3kKPgrRvR3Vf5GUkHyu8SsvW",
  "key10": "5Nxggvp5VnwvaqHXhgUa8Xgr7RdcjdiAnPhaY2n2j8SfL4ZMzU63eJoNsA8MvzRizhQeu2xaJ7xU9HbyMv2916jT",
  "key11": "3FkoW7BhjTyTGvsdQBwfVP4gEdwwtSn32XXEZpUYosKKqntJfvk42CV56J4fJHa9J4hPCTCFKPwcP2or65Buq3QM",
  "key12": "4Zbb7cjGBHHu16eL2fUxrhLQnhN6RBFQxy3LavJgU6EN9xGBqGJD88Faqi3xjRZWEKnr9ZDBwfGzkVbKv1hsPSfb",
  "key13": "4ivTpoFavP2Ex6F38B98wKfcL2KTaQcKVnYt21UWg8QsdSsRD418GGjw9HDj6NBd1UdXud32MqrbYyYPqdV8ySc1",
  "key14": "4kYduqDY5hZRZJqP2wuVNw4up69eANmdECDBvtGyTkyn2Lz6qobqN5sUDKYgwaUquouUPFvAzRZe3tXXDeg7oWk5",
  "key15": "5kP54Jx4YgFgXGDiLFfqga5hGHiAvr2aBEuoSxEAq8Q9KyR11EYJb8q1ELsuF56gwr6zvYFFAXnJ3RZjupgmK24G",
  "key16": "52YYcR6gsG9BWncrEMiFy7eyiTqdp8eChHFRZgk2Pd1aEVBDgyNgLxAgZDbB8wQsW7htSxCxaKRiFCbpntRT5rEB",
  "key17": "56aHRqrmtqT1cP87BRrP24wAWjeE5FzWFG5WZJgV26PekhN638jfUnetNsQbBfhcGGE4LVAuken1EimGvavTDtBe",
  "key18": "2ByASwwjxRv6sFwN5UfZsMW7QHBMGebLfqXJRemYveatM256meTxdHvox5YkBEJjN8dZK8KwDbQAvznteQiSzXty",
  "key19": "51nN9pfkS2Wiq7ZWrvwVESNhYzRSjFXV3Tz5W1wCa3G6FpP5QLHWN8tBpasLGerphJSQ3rSFpcUhE5yGgdwVcAvT",
  "key20": "5iZWCRZuT5nPJH6JRdUVLuz8FXivVUX6F7NyD8QHTuLk6VDnErk8udRnjHAcy6cV5XPyXtCe1DLccAxtbWkx7B5Y",
  "key21": "6t9tfcWn2uSgZTBeQMwbR2Q54XfB1XjLUaYpCGFAjLdmmxcWaAdLcE6gxCf2V7pjHcbXbgJys1tZ3KtqrZGaLbg",
  "key22": "3kSRKCdHs6KPm2FuF6YCCqoXuCJPGjv2V8gzSBpASpRvQiauxD1CAoTbi4nnTKr6rdV73A4GwUKYroe7GfEC9oyU",
  "key23": "4xdVTu1GCxJq7zB3uLQRxdnQtQzZXGHfhrakzRjp4s4B12RWk8e1uFUXTWutfaLPbrd4cLaxina6nVuGPLhbG7fd",
  "key24": "275pa3GfhGX17Ggposwxs1FQ4qJ98Lajgw1gK2rf9w2HERVvFjgBozaux2rrLLNrCuncotCrfYt2PRarNhoDPvhV",
  "key25": "584rbwchm76R7Qdgr5LKh17i37c4Eprm6de8i6k9DLLKPmUqkKysxPt1ubUHeYch4JZsjp7eZw6cKNDkiuEaXNBV",
  "key26": "3n5PGywbPEgGNZTSukQteBD5qxoJcXLJWsd62yensRsMBAmE55NF1uawbgPKUSJ2q64h4hmMpPXYXqqH5bKoN3dU",
  "key27": "h6RSFwxqHPJ4DpcA932ZpU3AJLmfbUnXkCtAS2NyurCSdDNhjWRrELj1Mwg12H2iir5mAZXmUpVZMyvp4GSCqnh",
  "key28": "4FKqu5KTRTko7sk5qx7YNWHsqYJQSEAQ9PrucWhgjLQZAvTBz6GRtCFthskj92XXDh848FCCbTfs3j12wac8MrRG",
  "key29": "uTnUHuwa3vHrm2JMjb99W2GkhQhEetG4WVDFVEck2k5cWXrPPtU3GaazhFSnad9TsEcrxZ7tKF8ivRpjJkbBADo",
  "key30": "5HjWbDfA9tUwZuMEwtShvwXxiDjSFbkZH6jCtddtmanetJQVQ7fPd1JxFKfJ3QCQBbqugkunQ1o31rjSNuNR8UbR",
  "key31": "2sau9YzbMpvdBtzSNBEyKWUCkdTjtHq9XKaHURKN9bYFdVtvrEDLBKrTMVmo8tNK1ek1ktqcYufgkC1tEopWzAJA",
  "key32": "574UrBSzUER3AF33jqwZA9akZJGxjtaLxXNzDAXap2jGr3683MqtcHxyyuWByAs6bZSVYsLtneNKH4SCTFyt9rxL",
  "key33": "5jq4YapnPTzM9rbpnNEVh13BaQU1tdAxb9r5L7oL9U9HjtXLoNY78LdrShaKdrsP41DB9R9zev5oQ15Mi1exUuWH",
  "key34": "t8yvELbJeYFb4dFQph2RnXt19owQQ8sdR1sfCYm21dfGeYcnz4VDauLPiAaDED1sh9D4MXTKi58KbwFLteP7kuo",
  "key35": "5UGZ31zijcGXUqvDC6RkS5t6DXkeB6d9LEU2EQSYF6y2iKveqd9u7nB1KJVf4Mhd7pnUeJQA7Q5iqpFCtytFnRYf",
  "key36": "475K3TejMYdRV8AHYKzZaS5DQcaAZNEtGKHYXbSozAb8pxzeq1bdz9wxxFJ4yRamDSSPkED3thzc3x3bRksbYeSg",
  "key37": "3UizJzvWsLQysYLVK6qGPu6Gd9mXFWLSrgmxxfVtV1LT91zQmnqUj4x9XgAL7br1DBLiqDvEQcbRsiAXywdRythC",
  "key38": "2g7Jj2hh6B8gVPzWwCXg6CJeHSZCA6m2BkqdZ1Nb4K8qrXpjTJckqNUp3NkhYyF5upP8GVAuizLqovoEvgkGUe2q",
  "key39": "3v1txRKb88M5vTCzbddgEPwanpX3AUQv9Bqj2zpr1FhXHevMSPQ8fcyGVarz6BmTGnD6skrU6dx2HTup4BNE6qXV",
  "key40": "623AoKqagAX31SyjBnckxZ3YtqGCQ7ZND2jq56oc28VCEyxmC4atChCC49yXQWYyJ3VmpusvhgtLbtrLVrs67CaS",
  "key41": "3Cchy6dqcRaysDJBCLqzXVvANT5p9XHEzAqRV5zmEnxpNvpQWi7Ag95XT1uiaMnwm5S2tg7TAqGYSVZEDhwYvQUd"
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
