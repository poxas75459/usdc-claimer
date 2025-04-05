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
    "5sVP546RCsXULWZ42JUg2RAePKfagn1heZBtCknELk9UGKb76oRQgXDxaCvZgSPT1RpPKexUkD7RjAW6sD6HXAuC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ukJ9iRQjFTumficfDGqCuVTa8R97Si8i3N2SLTWG8eES3SXdec4evciKgqKsDEAf3x3qd1TEwuZPwQzUvuMQiSE",
  "key1": "ytemizowJEmE9VVQdfTNdPHAsgtkAxXXvCJLtLS8uBA1Q84my5YXr6yxqjyw6XCuhak7mado91zHTQGaLm3h41B",
  "key2": "5E4VGb4NSHXFcGLfY6VjRKw5rHsuKWkdz59Q2CAMx8N3PCNsmZvmYAoDRfr9Ybz4wYDLpbo6mqhP91f3LJ4h5Auv",
  "key3": "2QY3sMfFdy66nSiRNQkkJRna5Hev4uTkqnwVycFgjCSY3pZ4C3uVbBqbWqYLswpd9GAzd7P38ANMJM2JG6cW58Nr",
  "key4": "4F7DQLRGwjX8DW9nSocCJVZSDD2ox4NRjkoZfZzkCU9heeXqQnfWTPGwdJPwrthcHXXGhH6Myp1jbuwM8gkpFPav",
  "key5": "5J4FvJyNr74i4tE4zyoUCVsSYA2A5G4gx8A75ZxZxgAefRCzAT8bAMaKjA6kBFrdArqb8eBUaY8waJhE3jQVmEBY",
  "key6": "iuiF7cKRxGgjj58V4tAFrYP33Eru44Ni1ADvZPMAXRab48HjYPreQxA1xzFmBKHGnvsUP5yKtj9AEkAZnAjSfyK",
  "key7": "5Ba6kP1MkqgH9gvWQqFtv2r1UZJkNTqcEvNpcxt8mjSNWPKGTtZqU4ANYruUmfqQTaLS4X3biJyqRhSBWuhi1vtM",
  "key8": "XqMzxyHCqbWHPTQwrT9SbPmMQmxown87V3TLfF9sUqRkRyLLVasuaRzDjph7s5odoaXx6KrtBH9VvgUDutYTFEr",
  "key9": "4j2fWR4qSUFmFnxWBAJ3Gb8Q38bYvJ4bXGfSfPUpcUkd9uQE1VKLxcEsSMW7bdJXEPTCDhC4eSQu6g6hRtqLderH",
  "key10": "wfg33F2BnLC49d2h8Vt9wDNGdzTYMbZSi93khcJ3NqcGVEBW5DhWusRfgd8Qt6VSCbDBwBdheMZCV11HnJUtbss",
  "key11": "2EVsZNKXg6oQLaSNHzx4A48tfDCSPwSh9cRd8ikftKF5jC6j7T2EeHLsNsUNT95mChZdXZwLH9b2pPLGNVNiuLQr",
  "key12": "3aCgMfFsnMz8WNohV8FMEWJUsyy1zJbaT6KNYcv2Le1CotNKZiT4vg2on341xLdSVBCDViLXwqoWfR69UhMbkS72",
  "key13": "2mj3vJA8iphmmoXqA613XVE3WnW7uWhJMUZoBJv2RF9Y9Hpwt4DUyzQC7m8DnGDZHxJo1xFHJ4zLjmQiN4spEUfA",
  "key14": "51jFvmjw1YCUb8zU29NGkYjin8ZWaEySYTRq8XQ9DVWtWufD57ZJ9HP9c9BkzdDfgHyDrQczk8PRZCrJ5pArHHWC",
  "key15": "5un1eChujXgn5kzEbxPYtTr8GKrba6WwcwFxwGe3iV79m8W5TvxVh5MyXh4zpf4axHMbeZFao42XVfrEcS2jrEcw",
  "key16": "5eMevJqXeaQvYdhZKFCKxsuPPTfzxu7TdxVJSNbnHXBB88v6JUR5ZLB1HqBw16UBf5KPuEAdRwaHS6BwGpjJxYzh",
  "key17": "2gkZXytMzSMjWqjrKZxiJ9nY79tx2KJ593oKXaUjBqwJiu5rFtGWWDTyBva57KFRA5BxHVr4XL35JbsMdmPitCVY",
  "key18": "ifHsq9EkJZRMBQC27FhQqoPCz4ZB9XTRAtokaAaAjFAhd1D184PxULtJoFaphV2Auxh6bfD6oVpTD2hMjQMP1jB",
  "key19": "3jgrbRCrGLfKjKbg9y5PJMGCuQwAdXubSVyurqhSiM83e8evdnxoJGjLkT9cHDyovxXCUocXAZcRx8a512yKm4bk",
  "key20": "2FZZ859wVHv9EEHoVMAP5bFBn36tt1AUDL6aub797Xynz34m6YKyEKN4WnHfVGWZzyLWKYKbu5Ty2Z1aLSSpUHpm",
  "key21": "5aCNE8nSFwZuURiEukP1gj6xzS2CXdm4FYDCbecRZaMnLkCKsPiDRwa5a6LDkePsdAF3yA1DpDtxcs674oBstaGY",
  "key22": "48tXu73nkdVzzf6caWUaknRyCjatSAVGa63bzxsNh7Fi8zanBS6bqR8GGeZyKTQTvpmi5VFezmiPDFvn8Lhzsz2N",
  "key23": "4AQTRuZjRojY4LdxKszbTnXdnC5MbPyxUb8AREvQZdeNt6iU6tjW2ur1wscQpQsbbqrASAmiqZJJVBT1XhS9Jcrz",
  "key24": "5ffQm94HbS3jq1YayMkSjEp2zcbeVH46Fz5wsUmtswUUpzsgJC546JL4wZXz3DmGJYLaJNYdk7tr9uURbTsLW4gv",
  "key25": "3VD5Y1NrwUauLQ9kVH9Nvr38zK355xYFokJkdyjBBaifbzwXZYUYwJRTwdhmv28xtQe5qnPNyC7Vm3yVFVAqZ4pR",
  "key26": "3Mu1QEEPyoV3LPZwTZR4AjtHWD8SG9RRHdjatjunXdE17eZ31wVh5KGr7vaaM4VrQR5NS5gyaWPDknPCqdDypXHK",
  "key27": "znbrMT3AaDDzfoPzqiVhXUcFz8ZGdxG2Ksan6UDo51VUevXnEicg5BAu5X1EBpkjKcvw1EDVNUhAUk2UrexgEdx",
  "key28": "5UU6bnq9tGEPPZoC7TpyKk46Uvf2NvxxffnbCbhXJkaDXiyK4BYBFCbrpaFRYv3bXY3T5b5oRqrLcCQiqa1XcqLE",
  "key29": "jnT8AHigcr7fsprqupLQvZDc9o1VCyb2bBCknPjaWA7YmfBVmsWYYr4YR5ZwKTpGfhUXCmFBqjWFb9yJDtotXLc",
  "key30": "8pvbsdCgqAv5niFNoDd6ZJa7TwPxXUhucZAGJjKvRiJpXsBWvScGhCgJQvNJkiEzCEeaDt25eHMEwGXR362E2uR",
  "key31": "35wi7HPNyfBS7bmoWVyYEf9cEPrbtP458VFrahPuNKauUAJmejEhaLYT5bCxVsjuGYQCtWvWHd4yygmKTBtMoxGh",
  "key32": "4niNKoyb7FETkpohsHgWpDwsCQq7Sp84VbCwmVD1mMjiM6d2sYCWq7JAzyjUWybyPEU9n73FxHtmPsK3jaabg49Z",
  "key33": "5Vf29TUqVuBAeVTxG55QXG2zmDgFE4zYkrdhjMxFCm88cPDDyyD8D5atUWom1ZsGdjKJdX76qm5Zd25eHiY2GYK8",
  "key34": "box3gPhBepDbUayto8EzVvCF3JFNhaEh1BMsVokrZnMaB5wuaLXyfn1LmS1Rov9zbjV71piyZngdP6fndRC4t87",
  "key35": "2gnZYU8SqxhbxYmZPuLAaa1rhJnDVmJghUKP8VFf2Bhve38VxC63AV9LgFuFXMkYs4DdTUoN4FnGjBobnhZD3W6L",
  "key36": "5pdtLnNaZ2Pok6DftZct5KNL1vWEYjdBM1x2qynLtTkKkMYKcAMa8u7LNhUxWgzet3PzvFiZnV5eM5ei59ickamU",
  "key37": "hVehQwAxtN27EAHPXdAZnV8hQnUS52diy3uZDvX92YeEv47FihJ9w6wJcoxiEM7aFF1NJARNeju32mkpX4yFWP9",
  "key38": "5FTNC8zRRSGhAe7umyczQVt1o6iU6Zms96ek4xLC9bZuHysjmFFWUYTfT7kacTWckSNmDPCY356skzKPVk55mYPs",
  "key39": "65ThjPd7VvkvjhAHsBrRr6r1kiNih2qfcZeFEyWjEyuPiwj6BHp9nKQRFeUchToeSkok3KTcaJmqjLWYUZdiwszd",
  "key40": "5L2dLY33Xaj7RGHUMSKQfhgQyUm5VXMH6ryh1jHe6y51PeXv3oJ9j4gLzVexRFTRVgrw6KLGNoV9ZJyPzDvPMn4n",
  "key41": "3HjeLWFKDmADv7AmSwuxZDa5851ZoK6854wx4bY5eud3KQgqAbadfmratxSKeiyVET9MUyjdhdubVQfpq2mDvAyh",
  "key42": "2JtZTfP1Cyf6wAJrc9MKWJ6Yk2rfUVZAnGJitTWycS3hQp5hpwjoeYQCJgg3wHRbMmb8VYhZXnwzUg78ap7WAXDf",
  "key43": "4vbK78WZwYuskWynJKhVFRdZN3GWXwSUHGbFAvjvZRjF3afYPXmMG4yCghgWgw49pw89yA2T62R3ddHk7p6zvDPQ",
  "key44": "3t6PwBne4vyTpzGEZmZvHzA5qFWUN3Kq35DzZGe5vEEM9oW8w95bvhePdunBxjwqy6oxkJqv5sJdfUMK2iQivpJR",
  "key45": "5t96cn6hgygN5GjuVb4SkVkmYTCiky54k4t5AezDC3N1Z5WhZF5YPt9hnaUWZvDgJyxKUgUzjQPjTfZFtQWFpVzt",
  "key46": "JAfEtifb7pLmHTi2XZpbNeS3aZDaJSUddzkrdB3AEUpj6VoiBozDZ784DGYcbhNVJQKFrFTWL4KT1qCxKFV3S3M"
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
