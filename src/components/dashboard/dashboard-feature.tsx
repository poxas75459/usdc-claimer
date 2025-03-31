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
    "3732CLGERABA1C7nVPofY8624Ev4qS2bs71brgagjU1pfuL2UwWWzbPaZgamV6u58zrdMGocKMxMJpUyYPjw7hSK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D8DyVYxz2YZE3MPmuKSfq6e7i7y6CdEhHwhFjsr6ATLu8x3CgXSBqfTMvPhviPynvNe7S8xnWPRDwYUcdqKaFdR",
  "key1": "2HvFuiG2DSYqRqRHg4fC5o8HjnJf9mwpzoeWb217R21n2WVUv3BawYsWDwcAr2mJWwrfpcpFMGjtribe78whadN5",
  "key2": "59jK2XZqvniwTjGWDyqeMeqRyKyN8bsnbeAL4u8Ymm6ahauKj4a5SBT11D8Z1WA9gNGvYpZiXrkhuG3KNRDXfJ7T",
  "key3": "v8SNusLpQ6rm3hyf6sB4gZAQExqV4nKEEcpJ9H3i3BepwQ25B9szWAgyGCSFbyoG1xnwATVv732ZeUR8x67hkQn",
  "key4": "4Jvun72pfd2FonxFTLgKbKXYygkCGAvSTX6TQtikReJW8GtbFetdeD1one7B2QQeqWtFPrkBCVhHjuWjGu9nM1Qi",
  "key5": "2UxBzG7W3Ct2K8K7ZVYML99pPri8op2NFcUQA3piUF96fMtXyCsikfyoT2dVb6v1UNSa1foWnAaZcqbH33u1qFRh",
  "key6": "2cEo3mwsbeJe7EUCDvs9pTWDtD178P8BgnitfZyCaDMTHQbJgcsgijvnu7tjJCV1H8yGDFoe4kb7FL86YqKgVVVc",
  "key7": "8oFPsJJjYyCDZFDuZ91FdRvtkUPR3Jj33rfhi5YJ2KGo1db1Nwwcs1ehqxmiWhZgp14FhjvtJGVr6y2mKuSp8sP",
  "key8": "4Wh2EqwrVjD6wetsRUka4TxTjFKv487u1rZ4SFcmuvmkeum3YnMDZ8RUnKv2tZnCm8wydt3KJWnxfYaorXRrhqLE",
  "key9": "4fgm4F7QwuUwN9m4GPaJZrPXcNXjpMyz6qu6G3dFNSCr9BpRFZdiXhCs6wHudiUiiq2hjcGVi4mau5akJoZai8QC",
  "key10": "4nofEBB2iQyMbr8agZDoezmZD98TZkuSJgMnZby1AMbEmswb5GSBfVAa7UAtQGFEJtkULCyVLjQfgDVDW2QjGzXT",
  "key11": "c9q3yw2rRJyvWNSG5wgwzJvQb9XKz1URd8ejeQ6Jd12ugVDWbRdNjNrAVFdZ2WMEv9UbotkbsVp77gvoSGMmyUv",
  "key12": "5hW46ewr72TxoCfUu2RSz1UfjSi1eXsgjPxEfJMrS5kh7TTkrSJVpbD4owz3JyJvPAgJd2TeyT3ufhDEs5obSWKx",
  "key13": "3MbZ7MwZunKvp2LM2GivYr58oJxg1i7ZqCqDTp6H45UKKLkiC8vsa1BB5QNrd55oFQqfFDYYhAwboGwPAS5vw9ZE",
  "key14": "4ESA5rVoXhMTK8NH7azb5PAXpof1zxu8MWqbpdkcDWcAeztbk7Hv5RTEY5vNjUNZzoUzTMKFikvxE7h9fimbQMNz",
  "key15": "5rRzgZVzfB6xCAo86UPAhQ3hTnyNmqL6GWmLCmArwdHfSxEyZG2aj2BkRn5soMxKjaYB3FpjhvPfs9xt6zUQne2E",
  "key16": "3S9ZZ84kW9ZjjoDbFBaPsG2xNbvhwzLW2o6RFy6q6jox7UMDPKsGoAP6UZpA4HWHFw8bMCwMm8H3WTof5YQp35Ng",
  "key17": "JxzJnWRf2Lm6dH3vAgNbbedCcZQ2oqkmUjDTybVw11RugPPSjRX6DGTh5iKKCNwLa5UyZHrdeiQaZE8EDgsGetb",
  "key18": "23B2BvNwAdreKTJh11smVyqWxkvN8xFsu8JvpDyqrvdY6HwzF1MSnPp4mVdhj74LG2b9QVHjTigQeevMpvJ1rjzW",
  "key19": "4ZNkNRPcstJU8KSzbUKgi5vEZBjwDpaMuczdeTJaePmLocSXPb8Ae8fqLSJoAGHqRYQ9X1TpRMsZYDgKNhJWwn7s",
  "key20": "5WdzzNhaLbjb7aTSA28BoVuaZuhYr9cAnjJd5QvhzMXAKges6QjMQuuf5rH5tZE3cbvcZmWYBRXfNpEac2JEaB2A",
  "key21": "2uuhmKL7oZ3hy2JJTdhdqtWqNh3tX7P9Y6BBjFy5Bh1PEYWeuy7SnWEjLUyxbcGw5VoRuoeBKp8W8ChiaznZUD1N",
  "key22": "5DLSpGYFUmqUgtoVvdXmAsVqtA1wXBSn3PGMN9EVJQPbxtErRP88H8mLMUzbKiddGHTcQh3ni1QYDrDRmyxEZTZ2",
  "key23": "3PBe2xLhJxogVcrM3JqyA8JsM1fhnLPLaAFVra7XNqvNCZseuCffBg3yDZGSSvgU2hRuxpn7LLevVXBaDJQoKEQh",
  "key24": "5m8jBvLRSkyKg5M9amvjEeCpr31mKBvTTreqUVre3EbEtcm4mzKhVtuSeUKhEBVVX8AucyA3WJqGmsoNv5jWrdBr",
  "key25": "316UR6yqDTP55hbgsujkYPY8ZeSw7ZJC44WEKV2LXLWKWAFKwhVNBYQVeeSEE7f2xR62fynFhKVp1r8UoWVx6EJ4",
  "key26": "pqsJx9vksgLoDDstqn9d1qTy5pPwnnRoPCQmksm6hHe3FfGDa1WhnYgfn4QQPWjdJafU9ZMfHgAqQoghi6Pmvpd",
  "key27": "2zSiKGfhR91bk6YrvTxs67UTENgp2zHPdYnNDSqRe3QXai9awRtnoDnnsci1PwJmWPBupbnEj7R3mzVmMpAAPh8K",
  "key28": "5Mx9ndtydFfQHScLTyD6NX1JXBdHtTvBchLzcUGbK8D9by2eurZNh8QVC7WVyEJmvJro74xRLNL22wBKCtHuBFnx",
  "key29": "2vG4DFhQQNjUt7W1syCbTYQvPhhBSXnqhPJ2QiSTGMouBr66821oXgMrd8zrwJpCHr5d8d98mavRkFpeh4oDaoKx",
  "key30": "5S2SmcMu8JkYXvczqtJtvHDnAS5ccoentrdL4bXjYDSF1vQcGFttq2zCG8K5NYsp1CwnPwAknru9gAjn8YKiq9qc",
  "key31": "5v4que87K6NurriprYanVP81qwBr6N9CqPKgsz7nd59WkwE1hEBbVmfwAFGUFp95m39wd1YFPmPa24PrShGsfPmX",
  "key32": "31wUZn6f9iASGzPSDjnfQpZPX7U6krPVsRHNHnbSXhbFmtBEbUbvsu3bHdkgYHHqFaQoio2a1Us6Qe1DEXxbKqSa",
  "key33": "2h22dPERbXiKHY882bTH2UAAam5PzrKBDX2SVNA78tPb7n9XZz5TrAncCH4FXy5d2Ziuwf2iGCYTuBL3EzMqo5G1",
  "key34": "3qnSze1HLWwccp9NL6Zr7a3ngNAwSipRbEwQcFbvvMVHCbqDbJuNHXFxaNhSwxjv5qg1443MXMRVWJsmJsdBgQeJ"
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
