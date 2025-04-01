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
    "5PAtsezRBzSp3czoXiFZRhpb616t1TxJYDFncm1h64BDNHmPz48xi12dJJSAXRBA1HvcQkJgzdPjv3fnH8R6vya6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5owqgcG4HyePDhc3xc6gsWmc1ktGk583NZ6aQmu3S3t1JhrPXBbgkDASkjFj2YVsz5DB9TzhPGNpzHr2oBiVocYZ",
  "key1": "4S7hZ2cESJaAjr3YLx7foxRwkSV1krU1RBTKXwMhyNzJAsQVU32WPMkbpGje3ZKHXcRfFyP4ZBpTZ3EqjPjjwE8X",
  "key2": "aPmsmvUnZxigmKkooRwJBTPmaQo8Xb7eN17VBSzg3AZYN3WADnNfEs3LkemuHgr74arYQDmYnToKPjy3CyiSou2",
  "key3": "h6tZpQz4kuXQrHAMNpz1WRZmNhqDSPvcRam5MzV8f8sS8sAN2Ap1MZXvZoJcLDnKfZNH8FryqSqvRJFMCdvk7yr",
  "key4": "4GBrheTGheLqWGpmqd4t2GzmAE2UaD39nDbf6cfCyGtPYZGHAi5X6GehupbmkWLStrktkPB213z4efuXiGnRGYVW",
  "key5": "4BX4sFo6VjqEocYQbJAkRWHYAXAH5P4UqAuw6TQS9rA1hD4hicvwBJbLmfT3P74K8EMaggrNokWGLensz3iibE9K",
  "key6": "3EqkMC5qZoxNXmv85pG8u45o16G4NTCZn4ydVQmdc7JKk4xSbvBZ61Qy6RZaqJA5bhpnuRa2ybAJdxcvemZYsWL",
  "key7": "2UA9j4y2GkmejsZ4HutyFnsn3keQ7QJgb2cstCRiKxZCFBxBNxBXWu3qCiwsyUUuioBkshjkpuBaVthP5Gf4zUbD",
  "key8": "2TLG8rW8SaK6vK6zpfLotj7uCFokt6Up9Y5oBv8o8ZmUqsv5Sk9tLrVdJgjAqztSD2a2k7to5avqXcrEZopYf3fj",
  "key9": "4Vv45YworDzLpCdQLLL6Bcc3smxUxuV7h6UkFvkdZcfWmh43TPMEAnpLwmUYMfHYx4dnFy6BJ9frHMGcfsjecxfJ",
  "key10": "2xPVRNw3TB3v9UVmS6iX6T2ME5LpXkLr55SPwByhDmk6uam5GK4osqMCVwobWjqNRTrfQvvudheTf2iARTGnEeNd",
  "key11": "2TtgxWCnsDrizf8sJUbyLQxMsTE7FCo9V6VNQqv1NRtKJmiiVEhwkG9AA4D6AeRsxT1CRmAVQgnTFaHBR6HgXtQy",
  "key12": "X1AUuVrhP5yXsYYzbB9ybQFf7v5KgxrqGFYaMfSZndiE4x9VFNPAyBkHAcLHBxoxhfxodrpCfeCu5PzDWK2LzPj",
  "key13": "4XGxL9BvxtYsnBK8YR635KhgNgUPAHki4R98AFfDMBB1DAXjtYvZqn7cG1rMMThMAemSgAp6GXXjsPQv9dmVoKEN",
  "key14": "2ikQT2yYwy81cP2NErHdaRHx1uHUFCHT8TsEig67bcs6vPpmktRWyJMT5PMmjeGAwg27pDiDm1jP4rwg4Tcicc2a",
  "key15": "4TekMgJNoyrNjZwtiv34QnqdFuZpP5SC9NPJ8NtoVt1JAJQpPZfphi87Sf2VM68T4UxZrceTQWcZ47TBLzkiKLpe",
  "key16": "22pHMhbad2xiGg64qc2DgabXaysHcMk8EKeycW1AVvY6WEt52zkFKVWkBkXtngisxqGg6K3i7WkuGjGTAVsxaZdB",
  "key17": "4MAJvQFdj1FcWHMDrERR7jUBT8Yg7GEuPKvWXCCgcJWmB1YWSVi5TRpmxspqhYnT5jKMRBdBpixtMp8TZgokMJQF",
  "key18": "Hv6tSrVt6CoQmyGe8jA1FHZmex34Av1duKjJBQVoN3AvKouirrP68QAaYC969Hg2wotnq3DHVJQXEY4c3mM74yk",
  "key19": "2J36YcRkRftPakjqhd3mJaDDA5hSU8FqR5HDzL6FhHFFBVSoF9PHHjZbokks3DhpkZiz8ugFzDiUXmJFWxGRoPka",
  "key20": "5QTHnhoyPmXNF5biADWEFVo1ziQbccoXzL4b5H5obFrPT3RQfBj56Kd4ywTyJLTLFGHfvbopFoBnqUhVdo7JHrKS",
  "key21": "hq4HqJ6W9r2ZxVjBM3Wbhtp1pUeKe9HwqM1FvfoCjsRbQouvCWFxMNCEpPj4Thbuyxn5ejzmj94BwnDixzm7q6u",
  "key22": "39jrRUApc5HjzBCsvwucYCw7X2FEhwHzpHqXm4cdS371Rzo5jQKiuV5dXmGQ6godLf38rDBVQdM8X8Jt5RgEL2i2",
  "key23": "xS69U7cD8SLvW1YiNLbosoZw5JF5bMpvGE65YetsSk7zzKsrN2fzmnU85B91yJXJBcmthSYSygx84Y4eo67pLYq",
  "key24": "XpopnquPpKFcJ1vXBL64tHsJKRxPfs1GDjH5fJEb8jDBZJTD8LqqppoqqsDa8R4ZxtfqRZX3ZbzLoQJqFJyRpBf",
  "key25": "58m7fNDUW467BRf3BxL6MYxMJtMGfUGmuyiDUHQ2KE1Yh4YhSq2BR6enL7fXBnPxR8topmM1bMUsKKSTef43GmSC",
  "key26": "2xLsyQztKWXo62F8thQBFPg1BGWvZUbaGp5kkf1Vv6XsPpFxW6wUXvYNcPKXwYXdwCzNiAwJYFsHkpHL5L9CWs2J",
  "key27": "2WDcXZsvtx9jGqTpAgRLKnrDrXrqwFgKdRHm6Ld4kRTrHS1rNoEP5sgphptcGtqHuNzZDxxrfvnvAWjJNHf8LNRB",
  "key28": "2XD4e4ySRTcVj7HCc7rAELtqimgc3AZa1w5mUZLuBcRuHkrpDskpQbiBEf6BZXx14EypyveehzwjuHd8QN3oQ63T",
  "key29": "2ndJabva6MUTJchAfAdBaN1yEj2MjEKqv3CohdLzWXzfhwXFqbcX4VaBnerS3o6xVrXXdza9uj2XkJdvva2APELa",
  "key30": "3bE3fLhGXrJaj24YExe5eBpedrXs9z7XdNQSZTifVG6JY8FVnhfcTYrbhSf9yiAbsbSwdH4LWPmV5wE9LCANJSsb",
  "key31": "4syfduC7kBnDX7ai4uZtWaUu7bCz58biNmCWmQND51uDYDSwRaSYE1R5EaryLkKBdzU5Wfrj8pLhxpj7FXLfWJaF",
  "key32": "5knMszYvuafx4Edd51nBkqHJ7qy4EMGBErdv26ZDoPmsV7ns52p39dCrbkLA2WdWapASZxT6gve3ym8xHGPosMhR",
  "key33": "2koDHwg93fN95K54S68se2nvK91BVWiXwZ72vN8uEUZ2rhhRkWAPeaUkid2qAvDGmUD5Taz7epSbwho69k9FQKZy",
  "key34": "3VPbDx6oS1q5yybkv3yJ12Y4UtJYLpcHeT3qMAyz7S9qSoVKWmXp2UP4g9cEyhJFo7kdwSxidFg1tXdcTdd4hyK8",
  "key35": "25DF3aVpDKEfBk5nS9xY9VbEow2phGMhjzquhsxnue3VwXdKEiijv1rd7YghXmhhXNBGgNaaA6Xc8o6Lj1iMiyvZ",
  "key36": "2ybUF2cfYaNppjaUKSLk3UgM2eGaS8RsPBzXhqyq46WUbJtLPVwNuWKuRBFbPQXu1kTBgbptUD5SWx6y9dyKYZE6"
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
