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
    "3va7H33QBhYrhLh4bcrnaxerSnr2eB2qvZiAjs6iq2X7vBZWHtCAeAHetfBRqdoYq2bx1fxdrVSy45CCMcA9w5ai"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R19cznEqVxDH54bg5mitRwomVULfaNHHwfCBfoQpjEjvyR9JBWnqjm6cFTW9bTkkcRCUR6RDUuxkfgChobDFHwD",
  "key1": "3hoez2duNJ1gM8RCzDZ7jNQGAN3j7UMHVejRARE43yUuBPMHQRnoJb27aa41GHdqo3iUoow67yS7KyJydcarTR1C",
  "key2": "4eiTPUAkXBBNt18bJPNvJhYEaxV3cu5PesJJxDt9h3ANSUgrAeuSsUcXSqiJtHcpv3tuWzk2Hf3p7svA4qkygG9C",
  "key3": "54B3f7EzmFuYUKoJnkTR5QzxhMEmAyYjo4HrGvZct5xMZnHckFpLEY8cL7A56jApTFuxcyppyFddMCX81UEk2TFT",
  "key4": "2wZ8X1bf1G53cUcYraJAyFMBQsh3fXAucpKzRoaRTcuNhnQpXKoY1zqDik3ZKvRe7BQDsoEaf84SAcri7tJfjTs5",
  "key5": "5NQaG86Pi3H4eDYoXDiENqQuo2aWdDNqkzVhyBgahtJw9kwVf63s23NUFBxsq7AMKD8LjRfFz7QLFaCLCGGV7wos",
  "key6": "5SpNBLuwb9mXCAWaodWqYtSeQ8FxXdeEw3JWHtXutxTjVvnZeMZjjZ4tCzXV72cw6ZADAsJ49K2Lo6wbCmKLLsPJ",
  "key7": "3FrYaGKCDpBmquUG1szrFcynyzFSBcwm3cAkwW73bHLNfTvip9HzLxuRkAgGf5qpZfzBv7QNebRyEy1PSJDM7Wrp",
  "key8": "29vniguBdnggZnn5naeXgmv5wqMzyStoddcotcGF2X97XFg1aVQ7cGiHW74cuAfpDt2eMeWpHCHjPJw3RyWrjgVu",
  "key9": "29kRc9B1SgKiQHrTqa6BwqjMFv8YzMfQA3Wv35n9Xc9GxEGBjobgyx1G2B92hxVvxkHcu6UjPosFLQejZtN9HhuE",
  "key10": "2XqGavFLnsMeXA3pjovJYGJ23bL1pKgy4fX7WmWd2mXFz146R11Hr8XuNXC1FfMKq6N4r8H5nQZssgbNbBYcbJoC",
  "key11": "4GVYESSHtFFaQ98BwjFXMv5xrEHQGTHPpYmQBC8579XRpnKR3hmF21QkxB61CBJsJtLkYBrxcshib7yCfeNmGGxT",
  "key12": "3P4EZ1fQWzvtp47wSZnCco1Es5SAK7j3DThccJpTyPNKDWhsb7oNh7krrgbeAksv7gyKrCuvqCKSanYT46ck5KGf",
  "key13": "5N4QME1UTpCxtyDhxM6NqzMjh3cdKcuAA1d67xV9BbBxo4L9wCH5dS3gSK6QiWhkjo8xauyUwdLmztPnWmopsjSh",
  "key14": "2ZDiVekwdEkY1ZntdeouvAaSQmj8hZdzjXtpvDpRWsrjWFuemkR3ziV82bnDi9eVHHoKfEqxLVCikDg8613S4DtS",
  "key15": "4JApNaFSaY6FFRMtcMp6p2qvdzSj2An3Dzs3CwzmPYb79rp3g2NKhhV4edsJMVFJ6EkuD86Evcohxmwyyc3Dw2va",
  "key16": "4KT6tREcjgyiFRFNwaPyHtZnFCWYtbuMPNeTKM3BprSSWuXap4KFZuFfPzHUsHoyBN3L1Dp6MMTrHYcpGRXenPbx",
  "key17": "4d3cckKCiB7jiySyy5DcPg9dPboytQVhdqckpCDnNAhNBZ4KAVcLTc3Dy8ijCgwsvunhQ3RNBbiqEsvC2bLsV2Zu",
  "key18": "QpB7Nu8JZ9ivU2mtdG7Wobd1ZWKrYdthWWrCpgAeaPs35zEG6F3MLaEHsZCRsLtSDui7bKr2RpAj9z5XQ8cjvYx",
  "key19": "5rJZa8KeupZHVzYttm9W4uPKyc2VtRF9DYeijsodVrxogiHxfSndC5iT3Egguz5TbosahroJ59gt7FL3B3i9S8Ny",
  "key20": "5BnU1hGczhuaXQ7HwCChBiRedELZuw5qeddTzJ6C2tVe1PKUQUz1v4wAyxiuNrb8QTN5gQgsJqGtA1BycnvLs1CF",
  "key21": "4C5VoiDK2dK3iGF1JJbF3KEDq8NM5DyxYEj8MDeXBKzMyxpABZRTdbbvPMJ69mak5PgZniZ9u565cqtDvwZhtPE8",
  "key22": "2cRfYsCShJqFSe5WoYznypPj3H6hbXZrqBsfkn6DjunMYpPnqtVpaNQhn8KFKYt79ahBYwn7YH6vXjcV27TM6est",
  "key23": "5QbDyq3VdcVjhp8GUQpJPDD39CbK8VNfid7SQ1s52DWJnzdA4DERkrAUdJvEPcKPhCti6vLy7e3pcDC29nSDWMZV",
  "key24": "3LdjHALeHTP9rHa8XDDmoJBWk1gkcXeGQs82d8ZjfR2ygdgQ24N1FZRuKvoyerUwtJskZJFKs2BdrM5G8Y6rXa4b",
  "key25": "4hWKBaSYSFYd7J2CUQCC5f9kpef83wxuP2RwAXFtchXz4x5VNJbWZQMRhhSZVWzkfLs7bS9ht2nLQ8Wgh197ba7V",
  "key26": "5tdDxbLhbx3txPb7JEzhGWTxRJZ3rFdnMSeKFyfPs1CCmyWVLHEAFbiUXa1T2fckGopTA1BZjNZkqH83PkYDpa9X",
  "key27": "2B5N71pJJXk9p5G5YDRYvpMEss8cpxXNaCqAX8JY7FxyVY3XNMmUVgRgtw9RWs7Qqshc72PJpamt8X9xJRLPG5ux",
  "key28": "NLTFahxBD1zmpWLesAr6gYwPPa5WnVg3Ki5D9qrdV2LhcJchThDzrzUi5ugBe31xzznENAVcCAkSmGgNYZHDrME",
  "key29": "36bPrvR37LbmZ9URvpDGstK44gLhZxZnG2Vv16pV2ehyG6XYePbsLUPiZc5JCesrHozQUscp6tRebYES85dgFHre",
  "key30": "3V5Ew3DkzDp3kZx8MAQPnY64TUncHn4e4Nh1QHk4qqhGtM2nR68UfGzUQB7W8EYbfLFXvqSi17q2ciPPQxpWVy7G",
  "key31": "2H9Ln8GKU6oySn58wwKrBedZ1PdhRG7WKRYjAQjuU273VSUy4JT9BXmXzoe9z4XzqBuTJ7RBUDW5zVSS3KqjwK2k",
  "key32": "54QBLu42rPVLoPtHzF9pnQJpitoeNaA6zVqQAJBLQsaFLkjujr2NyRWssoA3qMVFSScANjUEKNKL2RKKqmtg1QkN",
  "key33": "3nYyQxToCTa2iyZVRxrr9ZHaLNGuPpuQfWimUFqW4f43rgfAGTZGmAiizcp8rgcBYq3v26frMaAMA1HqV6U5Atbt",
  "key34": "3M1ismMqZyCGATDM1V2gLfd4nuXv18Zr7ZtPYis2yY9TvcnfSLVCZdJgjGvX5vsdptdJu9FJxxb5uZSVcozxq6Hr",
  "key35": "2X1PFSS1DJe8roYcMR6bTevXctzB7jmwPjNE1sy68ibLrv3XGWTZ3AismCxJWK1ccX7Ncd4PU4teE6unhfFmML6A",
  "key36": "ZhTdCxWN5hqyNbJ1Tgq2CRBavKwqUJhgfjeYAX9pkS175YY7zM6ePzt8S525fNfHyVfhD165TrnMLvpRYtmbnEu"
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
