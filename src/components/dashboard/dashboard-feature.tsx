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
    "4PUuM7dHaPMnfBHZpL2tgqc5XUrrR1yzoiE5NX6c7NX66LwyVh2HZo55aoUiVGyF43fnFSfbzuZuMprvGuYTE6tc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ww1C7AchpGpVuKvNQsNDHZLyu8Jdwa4SjpgFUHFUAjuSCKD8LoVNtTy8dQBDKh8YHqcrKwNgGRiHD6RRNY1o248",
  "key1": "5EDdqMRnaSx3D7dUWZ43g7AH65M3Utj6ov7aNbmghDy57FpKCgvEDjFt8dx7CenVxDErkvVe3sygY7VeNZMiVbcL",
  "key2": "2eNudGkzjtKmWVRjcyUGAShuAqCkjNoS4vYgetPwCa2jNWXojCC369yRbatooUzA62Q8deK7Te8yJWbQzfudm6C8",
  "key3": "42aghDgBmu7zm2VtfT2rVQVVKeRh2YMBatrDKbW7k3VXHxbsotyKUfkANcMUPdZzencxchU7ZQXopLxafDZwshTt",
  "key4": "2UQe1yDGLTM6VpER2QzAU5NQwvXSRvMNkQie4eHvHF4ycDRGq3YgMjrbf5SEc2Z5eaRuKT8nV23kmszKnSYuugJH",
  "key5": "4JAU7SNaHLqgnCfLFuz47NMdij1zvwBAuJSH8gymz79BNqJ5yxrpKzgrEPQsZFPDurQibutFyeyf7DT4zAtdMyPU",
  "key6": "2FcYqfYUCD92vbufAraiZtpmg65mnsPBasJJpzgcpfuWiVAcPGqxnceNA64U8evw5WYK9azNw4kHA1PZ12mkU2X8",
  "key7": "8ZwjhjqTkcLCoH71QDZmwjjc7TUNTrguZftGGe3Ez6TkVuipHkizMv2rJNXn6LQ2nKdhuvFwsXv63JsfaEVfj7c",
  "key8": "3cBwUJrMJHoZro4oyywHGtyZ1GvLGgE5dJA1rcW4xd1Uekc2LKmLFPhUDomUoJwtQATZkx3HQ1KsMyfniRvMep5U",
  "key9": "56g4dUEXkngPPLvmk4RuzA2W7eFg2a4CodKQtCqFsyfdamKtnhKP7NWKbxHVedwNX1h4Fxu5mKLxWHcGBVwHw6Zp",
  "key10": "sGCVizdbirZgtKw3n3TpfSUm2KqAdUNDkz5FgSmH1uz59stUmoVA2Biz8ZUZMX2mABsUq28wKunMZCo8hBctpr4",
  "key11": "28KX1xXGhc3hH2MKG5i8sSuwZ7hVwH7PLchevvjCJsLAp5NE61yMw19c1T7ZM9xHyVz7c4ZUuAxm6RzHV7msJ1pM",
  "key12": "5UHGygkyeSZYWcHeMrdTPM6f5rWVo4AGrhKyssxKu2EP3tVKR42rWsLmhRK6oH7JK5W86fuNzFrGf41Hvkvkk6ty",
  "key13": "21FFJ4ULaqrrwRemxu7xgmv5TFTRWk2H2gWbcoheomTCHZgpwLAsqfuLKUVkZQjKUcARpXvAQTneiwHqYivbqpCs",
  "key14": "34MKRnkc2zjiXUwtKdVoBYqGjhwpbVjHesXTCUZA37e6Ck34MD2jcGVoMK8is9G5SuZrns7G9cKjceYLWLZYprW5",
  "key15": "5dL4Gz5Rt1QxYPK5G7BirU7G6QWWteZ3sUuEmR6XezJA5emFd6LERSv1VpzH2Y8rfnBwMCBqUNo6pNELYVZiae4B",
  "key16": "4q21jDzjWyHbDBUWTVvxGrZBCBz2U33tJbs5LM1qWfY9t7MY9DTAsCnhnxmZbtaihyhcDKbq7Wn4WjKxSqaax2bs",
  "key17": "382k8FUkct7TwUwoqKhJCb9sNkkCDx49n2Tp5adpBdprtG3U8b72uFBwHKrFTfhv1Y836Q3piMvBYGDEzqCgmXPd",
  "key18": "2jqFnhn6qbfUkNhYwEyNRvSw1mVFoVmSvQ3cjm2JsDLUEBPPqXSbY1Lgtv8neJVg5RBAKpPVuyTXwvUmwsEVR5Fq",
  "key19": "4zS5Erx5U6fLVDQXCLeBe7SESHg8hateG1Be3WHJ7GHYP7CoGAjTKhgQ2WerewY8qt8nNTK1FXNCdTgLum6VBwwa",
  "key20": "2BWtYQB43Rnz9bcvKXNtHGu8hCG6r5kDf9YMxcUep4iA2yeogFahK737bLNABeLmPYwbQhTp3pZyeBCtt1q8StXx",
  "key21": "27HhuG4YPV5hES49N3ZUKtu7J2bUXckTbyBvq1iudKFq4GZ5iK6jTfDbnf9k8iSxtvgKaummEUXaCnvC9XtnLtHC",
  "key22": "h8PXCRN53TnL2JBvuYwiS6RQnA79XVTCNL21bnzJtXo75Brt3dVPpHaevRSLbzkZ4HHDWcWRJ1okha3Qzv94huG",
  "key23": "5H9Z7UEL3HQWtzbnWpXHYaCZntFJKi5wCeRSYfFdLpVM9VSQ6LHGMzDQg8Pqk5wajB76VbWw5YFAcKzQTWAVZKi1",
  "key24": "2kHLgoGwYKyFvbVxwcxYHZ7BEKaTswg5yE6M2a23Krrkj7nFxkuaiTrBzBjrS5isccBLFAWLjrURGoTU3TonNWK8",
  "key25": "3uCGLxZRvrxoXhEkeFScbmvBb4PrD6qUyDJBMacYcNMNKgoeCu5BkK7Y7mcg2QbMsJVYorYytAWBno642E3NQUnq",
  "key26": "rZyv8cjPZckrVxnvW64vP6JkTP5XKozHsB7W3FNBzs1stPifUFAWYkov98ua9APB84FubVDFgYEh9pnHpXLafWt",
  "key27": "1GLhHbuXN3AmjPKTEkW1gQ8LChaMg8vNhsDh9UaoKTsLQEX1tgmwnbYpzjpTY6ChMDx7MLpEnokxCsUy5vFHkQK",
  "key28": "5ioa4oAbstFptmoXHTSv4mJhNDnrjZQo2SQdxauDfLBQoy4QRZQyMWMAW7GZe7pwtwXNqTEuDyxv3v9cLSdZAh35",
  "key29": "5QxwMtivNFmRAyA3hrjUnumasdrWHXmCkRFQkFLeTXfAHY8L8sGDrbcn7xfjmbCE6csLRwWtvEytYG4KEoHas4R7",
  "key30": "3wDrLz939LNuj8Ag13PTtRMpXCuP2PQPsm8zGc2ktmRuVBQznQ4Rxn8yHXk9id57wFmYC3iY26xmQAovspXVo2vq",
  "key31": "2jkjQ2m2eqw9VZC9gGo5eT7Eah3iiDEUNGNTGr1Yb5NSqfeXgKmXMJH8ZbbLqp7cJSnvcK6PXHENb4YxJTt6Zss1",
  "key32": "3ZiefQkS2c8DCAruArygeLRqm9HAx8j7ou6vz9SjsUf2cusynH218ZivhkQRyN4L1Nxrjj79NmMy52gVB84CVqr2",
  "key33": "41N8xD8kG8hjB6u6ahcWuysQbqGf1enFHVJAip2kEumbKnoGZTveRo5vJbXsKsBzCc7FSyCpauFsVcWPpMeMuXuf",
  "key34": "4ULE6WpShotmCNQnSHNaPSDPeXZsuQfoVMpxBr7URuvznpzxsAArCwTkguuvUco4rZH8wnJHnSPHghXb1WHCbbch",
  "key35": "2u6G832yfsf6BvdAqRNn14kztbyodGXYypDqFa5pcv4LRMhgEKWezT8FSESx1xDaqBGY789NT45KC6DeHreENR2C",
  "key36": "5yUVHh1YqCpxaTxMMvT43XGnChS36pphbRNVbXeu8rDKXmZ6a6dbgL8byvkz3o9P3xhicik4Dtq7AhjqrkiTdWeP",
  "key37": "SPxqX7P8p2pLs8SYChMCYstpB5cdKQty7xs19t5cB2fTdPpaQmGB27ABP48aoqYx7b4RhegmzWEYFkgZNTWaJHz",
  "key38": "4JtpbdjDkQvLmV4qzvH8Esmq68p8dVHiefhfNYDbgjCg43JcohrymwSM5JHMHiBFDguw5W6GBejRhSzhmWm99uje",
  "key39": "27fUWomGjtzrXyRTWYaS34LvcczuWM1iWpGMQMWooTrFiWn9PnZ8Q8hXRteyxi3AdpaP3kW5z1wkFMfzwj2KHncq",
  "key40": "41rK7zi8MmPrrsiZ6msL6CRRFZpomb2z3Yh5m9ccQVVjxFHPZhXTAEezVtPUXGC6b9jpg4gD8anU2pFueW2fw8Kx",
  "key41": "iwg4dLwXDrNWu2R966bWu7rFUmpV4uT3kMLQjYALZjhP9mAiteY2qc8LMMHoe4RqtmKcrCQAb7tEHSTwHzUF8ym",
  "key42": "NjkheFTKVSVM6dSjqetPtFmEdecD6yLpJYFyAsfSt4yf22SFco7tMRHWz7iFtkPKtVNUBdALp4ccy3s2CDCBSjJ",
  "key43": "4h7WcTrtpw4KRCehnXqoJcQyyVx2utqMFbd9UPAgGrJUNkHKyqEsFhBkAzREay4F9aQawy8eKUGBVJRtzjgSwKuN",
  "key44": "z48CpyzYEL6AiU91XAMZwSbJWEJgnGK6BBxVCs7EEDYi1kDEf6PaBXfjcPgbA6Z6upwhTkJ3KxsukAzC14aUnjE",
  "key45": "JungfSa39oEJiJcxhwNQqLdxteiJV6s9z5ML9Zcgps5YmudLYf4PdSzE5UJBqYouqLBQMWqFsg5R4TJmurJigmi",
  "key46": "4CC5YeJDt2VHzJMBVRsBtesUoMfutobyzwnAvpqLSjB4ckJU1hteE4cSEBkrN597KLs1MbGTLanEmssCYjyfVzoM",
  "key47": "2GW2Rctycr6o3enBjaGp84cupBRbicBbJSW5EowGj4vhsiFDtWW4GZnFwQ6hMXu8XZ1vD8Zvwd9UfJQKjioX9NzJ"
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
