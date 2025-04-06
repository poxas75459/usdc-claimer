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
    "2M9EYiHFdxxZkNFpZ4QQ1VZP5JdNrBryd9EtSS2vrR9mu2nz3BCShVe1Ap5TuXykSxfS7wBY688N4Jj6goHUTjfF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JYKNUo2rmammhRvd7TsAjGK3q4j8r3MJNVpRugpgTATMPUkCdnDKgneQqhjACDSHkpyLdfHpuNtE1ChU7dCmnyu",
  "key1": "rUo4rQ4bCtXKnWsQtaiLTUwFJFZ9N7QpZqLBFLENA9todPUgSJepRAijKdMoUYHbSG6nfeF3SrtjyTNTgfKhNMz",
  "key2": "5ht5s9amCaVroeeKLTbb1bioeHSW3nQpFSVseYqud3FkdWGNSToauEocfi5Co3E84W9qnoPHjygccpEqLwwFSgy7",
  "key3": "4J7MwQtN94DSsMVXzTyCk9uLCatxF1eGMRoqeq3wDaqTuw4LPWQ1Wc1qBz3TuB5bV1o5kGXtrqYzkYEoZCXimKSa",
  "key4": "2oeeHC1JgnrwtvJ9hdnwnr34w8njjoa6T3bagHC4DGHvYaDhSdxmbpsm6ytzzUUxdnJr88gc52T2QorrvyGSDixo",
  "key5": "WPU2apsagBqqwVpZb4sr8M27SkgENiHqT8ZAdM8C5QByFP66ntY5QqGLFei3QCYRcX6kMzd4AhSyRQd1Ufz2uwG",
  "key6": "2otYr7uZm4YYRKPZNmfvLA3BWqbjdGKyCbXhn4WQvXj5hwG487p2cGPopZirbArYdw8379w4kpoahZ99heu5Ga32",
  "key7": "3CJX2HiEUCJAuZqsZ8xspJegZKQoSy6un2MN85qgDBDXWn6Y5E9Yygd1t6YBLobjgnQroJY8v5ZFCyiM4ZLfLqxM",
  "key8": "hCLxmhoznSc2oAjabXLDZcMsJCtLdg9gnJHDerpMc1NN15ktt6wopiWnDBBKrZn6CSpQKkrrja6URQsYfvhsHLC",
  "key9": "3gH2GKAqL73BGsnwicYumUWodTyNh5zvSGv6HbL94W248vpZAekvshJxZZNWZ5YoMynjr7vQU2sWcsFF562Hs7TP",
  "key10": "5UWN5egvs3JWsmdM43mChm4drf423teC2sHAU42y6MMa3R5q7MycsYTAURpmJzWsEDLVKrdnaDfoBqT1BJpCYTKe",
  "key11": "4Xmi1HCVa7vgBrVUyEPJtgh4CdLf3UFDQ9MgiAu17WERe6PMcwenCihWkx8fDLNdiicoFiX74Q5h1C9TDir6ujAU",
  "key12": "52qZTrvZC9WqxUQVAoghHfbgjy8SEjG8RjpdpArNDLjaiZb29JZc6gGQ8iW8LbdnqTj13VrMhfXe7SMWihfaZ28L",
  "key13": "2m2kXiExFCECMHFUisMLf2RnPGVuc4nBbfYSABjit1wxbtv93aAUCzryz2ivbbuGnYUdSmNdgPwVZ6JvN3xsNXz1",
  "key14": "2oqwKqhuhGxXxvWp42zqgEjpAwoa5JnsefoXYEvt2ipacU9K1cAvabg5EYZBGHQQJXMuKuxiKF4CiR8D9Y164QHU",
  "key15": "4MEjMWMkWuaB5csdYzLjeYrFm6uqxkwPZQMbPSr5ckbwUf12mKL7Mny7yuJfCcwi1KgAYYQFbtJeY542uTieny5J",
  "key16": "3THjLjmxJHXSW24DDweyhmeSk4kP7JZT9sJ3vvfjNaUKKrzB6Hdm5cbNDEgsexP9gf1PSCPav46YRNAiMepUs8mb",
  "key17": "45mNUgP2JR2ebMYKvVkvC43vudpYQxDL9Emw6Huqk2DQp7mqPpLXbhsb8EkeTVcZkH8UXcAgh6GPdL2e36kxATR5",
  "key18": "fhzamrmxBpiqWA3Zsk61pb8ER3DZwgiqLYqPjGSKgYsmF6MB4ap3zZ1dXSAbaoE2mjxZwt1kgCKv1LpG4JCPLkc",
  "key19": "2vk9FYjf98V9AKtg6T3dLRnzeGj9DQCJjcDHPRkSgz7B4LuCpEz2xrPN6zekqST6yPd84DTupp6Y8GY1gg6Dc2rR",
  "key20": "4poeoGatnQEvD9WxzQJm44knLbeqUHcJowcs3JVkpeV8Es2iTU9DtmizD13WwYv8Y3HkUUG6vorvcUgWni1aSgVM",
  "key21": "3z3Hcmwqr4trAbWtwNAzcsGEUG2mrNZ9xjCXZmUvowmQdF7vyBniwStzw1ksa7R5uscp3VRf4irKv2ApZvbSUHpD",
  "key22": "3rUY9xzkW1KPPEBZhTWNx7hoRUw7gDvv9TesBBPir2WosuWZ5ovQzqwiwppzFXP2UfQ1vd8R4nyt8Tb4FP2dhZ38",
  "key23": "LtH5fUty7WRWZajspPCWeS8ThkMPtFquB4aL8GdrtWQC9x3zr329PV3dYL9mf2pof6uAoRmk251kP1vFLQ4jY8L",
  "key24": "2x7BbkG5HwBYquqVHpQZ7NNMNt7sQXRGenCPaEpNNWRzVwFaTqrLPYhLc89hvczrcVh7SN7ob5jerC6KtUynd45X",
  "key25": "5tHpZM9DKiwMT5dzLgSmaNXNhPaaysgBwAwQYpx1tLk54fpXd77AaBu9oiEZqrsDp6zSrbZNu7Za3Ydg4vjA3Y25",
  "key26": "3i9J4h2SCkvhDgsZiKHmGk5SrCgPDSgb3y1AN9r5CQfmnRqwm2fGKHTB1gAtDD7cfoHpb2Sa78CCp7Y3w57cJTym",
  "key27": "64G94DEMYWdp4ykWSaMqVXKmpTxeNJTaWmVP9WiPwjJ2FALjPeSYx5Kmj3KEdrFmVPKxaundLrSjo55W4GDpzV3Y",
  "key28": "3Jq5F8UqwMLgDmHwReuEdiFJMHMG4Zs1ich53y6mjh4N9p3BPNujHz8R2FXHWkb1CHfQ3W3m47fv1GwP8moGUQEp",
  "key29": "4vfvLGaoT6yg8LzhzVU1nhhNhbgScV59kJFMo3mmwi8a228zPyksURbR26wThgBP88oXsDDtE9aggyyipBdfe7bA",
  "key30": "5xY3xEppkjMxFiGVQNJSxKPqUgqqEw75Kz78ptfCdMfgw61iAGnYdDcfbuzx1KKURJJUi74bEwSdUvSAkTuqhL7G",
  "key31": "rLNpRvz6bqQ7RgB1c1z5FhNvhP64TtdVisP6GdXNWmtg63NLbf2kT8D6mDcvF4sCWB2zq3EXuM7ayYGjhv6vbyE",
  "key32": "42RJCaDG9hcQFycQjxDs7NfSPecCApdbDAwmhbEVmB457NtxF7GySG4R891viuRG4hiwCC5hSCTVDjv5z8oSF1Xp",
  "key33": "2iLdo75mEqy8vWSFf8CjnvEqtRziWvepaptL3We69KKWVNMJ2zNe59UDjrXSxQ1PNm2NJes89AQACEAQH2ZaW7Zq",
  "key34": "4M9XXteE6cVmrL7bjbkNDgB6FxK9qdC6BMGLYjT6LMd1adAG7whweh3hyLE8BtBTNXvK4YmE3K85jqaCZyU9BQ7i",
  "key35": "3qghBtJF1Au8T473hmkzaUyXstRV7GhveYAePjP97QukKW6U4idpUg8E8hwAyNADW8u1bsiZ9QTHu4ShNtzMp3Uu",
  "key36": "256V2jD3F3vEtbG2xPZ2PuxEChPZGoQ93TdM6EtijVmv8PsB3MDjjm5cafTur1VSVMJS2ifZzJRH3MQrQDbYJezV"
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
