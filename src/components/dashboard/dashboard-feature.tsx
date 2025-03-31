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
    "ruUErGj1ARrEqJ7h6Xn4iz2qAbQu49dyd2xZNhFs8VxoXPxPHnfhF8En82XBTfwZagfjMvPsByHcCxEmo1Z3WeN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YBxHs4ow7DJMxkHrCrLyJKejg3npV49q5FqEWGAQZmQ5a2WTPMzFzT9MdnyqacHHvCX7gb4qiQM4CoWZCMFyKHp",
  "key1": "3ovabgPCSiFbhmsUgBsoHp4xxiHAgaAuRyEd4JrFSafQDTjVL7UNqXQuw7Rvtmoj5SqQ94SZw8fDJPYBu6AaUe4y",
  "key2": "VSsd5SXhHjQ9yLzwAuD1rMi5ocmNW81ezy3gUNrQCFpPbsCCepuD6qV4b4suH1w245hVyKsvvyusHJKCZA5uN2q",
  "key3": "3f82iB35LohGJVjpsFhaMMJQy8rKgtnnxfWeHtxroyz1rm11zhCiUYXvD6BtSjVbJkm3efu5SxVt17pewWgkckCw",
  "key4": "Hy33F5iExRZkdnu8PWEX1eVcjtwhgALP4Sme6vBdGWtJ1eEiyNQD4QPysGAfavr5jQACqM5DkPAUFiZW2QakGky",
  "key5": "2ChQgekVz9dTJJGHX71AqpJoJyoQ2Pi3mp2JsHFuLfU7gqWeinzVP6tVLQQutFhRXn4LVhwDb3NQW5zf9usF6rii",
  "key6": "5eJEVPuxsHwRVNNCyWye7LhFrGJtrZGyUhLeeq1wpqvQX5HeNStx56rUNhiLHvHYFArnCpsodSpqtHLjDEDziFJz",
  "key7": "pAMnWJQW7oEnM4VJMwTBFEvGZ9JXpPvP9HxdjhRREcaqQDTQNwnSPCjypUuYDbrnK68jLj1UCpCH3FkHjMKGM22",
  "key8": "n1Xhivx5VXd8mLjeztUsfu6MhzSojuEeMXfQmpQkRcvsWd9c3VyYy6RxVNZHN22wRicdq1EMLLLDcMiMgRRym9b",
  "key9": "btweXSVnNRD6WGYjrxnEj4TY78M5sGHehoF3xN6V6AfEMW3dUNXt2Lf914vf5QDdDZQYhEbomFMbncVLy7UMfGM",
  "key10": "29EWinejpqhQFfjCQsntXpABAUgSxMtSh1uUAn1hci4Mg7gP5Qa1yM8vh7GNytYNrejFhmjjZ8bMtpss87CTk9aT",
  "key11": "38UNRGxBJZa2T6pDHMQL8HuCmMZvgBRG8rtP8jFuUrVK6DFJpo8vydL4SgnDT4Lzoo6n3ye2afBD52JfRR6DTtz2",
  "key12": "4DW4r7et5rin7Adi7biasnUBrF7F3Nuy3XSmEsx6pEPHBRA8sE9QG4Q2D3XZfcHoBwyi3Jg3NmPGEKvCQD4GYmDm",
  "key13": "2kveisqqKqzt5nnqWCMMLXH9iLWAJPukmkAvu2SKFh15TpNoaLaU67rQC8t62rRmGjBev7ZPzLG4D2HJMFphezXF",
  "key14": "3rKsya1jKoNfXrVf4x3kdSLbf2zZj1ugC3RxqDpmaRYnzw9jm8MTTjYyvLcGg2rzzvQpbkaS7L5yHyzjhzKG28Dm",
  "key15": "29GmBpiR33ThybDTkk9mNT2g6yxcqiy8pyjSnVNVTJoEuqjZc9nG5dPSo5wNWYu189dThQ5ZvLrBjK8jHSRjQ84M",
  "key16": "2bXsA7Qj9a4zkhsdVdnsocfuJ3aMF1FWeCdF1fTY8gkJFKWRsU2DqBZampKWuGoJV9JHLbjzhtUNoAMmzVaGgAyb",
  "key17": "2WmMQSCkbFLwDEtCzagEMw8XPE6jKDxN16hWbPmALMn3UXNHgos1u64BHYGnagpa8WgsyWbBzQMgihC3WGtPpiZW",
  "key18": "4DpAYW9SDvHEpCApNVLuARTjyEfjxoRYjgqR97ZZMhLkDjSif71R4ueLnxo9xyW292fkeCjimZ38HBjX6q23V8UJ",
  "key19": "4WbD3i97pzGk9NFTGL5F1qAR4FJuUEyJ5MjoucHE8ig9knQ4pJ8i3NybA67uW4P4gsQLsVMKXdC6M8PpTJtGX4AT",
  "key20": "5Thxc2cWHVFP3e5i14g6g9b6PECK1m2Pg7NEekG3ATLwxUfA7Qn82sFe6CKoFpYCvbSBifaXQuoCsWAuu242TEoN",
  "key21": "3oKQE7a5yuFBMvBEsxqPDMt5FL9SwUsXqaenLa4xzM9ANWkK8rEL5VuYtWqRhqkJDwHFh98qp52dFs6ChCD2CR2C",
  "key22": "3huxJ5rZZJWW8RD6e4tByfHCAdGjNoGb3innEMhDQmhYUFw3CnqKwTouev77rFhsbHiNdUUGm8CjSd5Uui9AJvja",
  "key23": "4qnt8GCcTa7DrvwNGn9QVQua534hJMPe1KU8pVb59AjttMrpvYr4Hr2zFSJvDnZvFwBwKmA9hjBY5zo7jJd9NYuY",
  "key24": "5duj8My4LsFxdWWuf9wz2dQXdbijZi9EzY8yTRzzVzZ4Vcb7xvXN3M8aPviYddoTNEMeFfZxBDoQD5pcnZW4KoA5",
  "key25": "2TU1HMwjmPyam7dkaDSYWja6g15S7kK6MxTbSyAvwzM4yfrnjBpcRMMbzHNRwfsdEKaDo3t1BN1QkJkiHvmSMzSe",
  "key26": "5y8XTzaZo1Xy8hopWjF1emdPq99Bpgmuco5vB6ca8ebCtKwvUhVvfEuurCxM7A4FPHSbqcTijQWSwmbBcU1rzzAS",
  "key27": "4abmyMW3K72EDZir2WyqtQnNpFV6AWBLKGbt8diKDgkDXdmiY8zeFvfzvaughoAb5NgvqTej58XJjpBN8LbuseZT",
  "key28": "5ovy7hShrDCfWHqaHVkHVfy8Vszd6mCnV8atVpG2svCBKyb9e2Sdze7JcXqbomNxg79XS4NdozYoNHDkXXFiefxr",
  "key29": "3KbeQoYiQwLzSJWZtarCuZRYoSCprCouQa9PpReevXUKkrL4fcK84a9RQ9gZ6ZbyCAr6KBL5c8QEvTjnoTcvqyQt",
  "key30": "49dxBqa1woussmZfm8f15GSgRWkpFMeKfLh7gdWKCdnCNBGLf76HjYG8Wq9mFk8xkhwZKPRgG7kQEruioiS9tuNQ",
  "key31": "ZeFwENNdG1PoHrGSvLheegmWf2WBvuFnMq5aWqGCqV96Kv1HcijAiUJBbhabb5AMqhfD5ZL7CMYApKboYD5BWBt",
  "key32": "3nczfTNUFVUxjFDviSCvY1U1bcWG1frn4ve5uaEY8uHpoxMU3F2rP2hFgHyqNiNt13DD8CG11iqXFLX4wTGL3nam",
  "key33": "49U3Jb8k8nGws65YwH1qwLhZQ6jhy5akiasC5Pm8ShTqaADoPAXEHuzteBt7d9oNHYAa6ZYZjg1NzTpv9UvQBNeY"
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
