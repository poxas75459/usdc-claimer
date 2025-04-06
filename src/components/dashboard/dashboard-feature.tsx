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
    "2uyJspYg2JFCEo4ypst2KaBXgQ55u68ttbaW2o9eQhou2kK9YdzrrCVoqAKnd38NNtYqukPk1WSDQkxdnbWGShpQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Qd3CqFChenB4g7kaB7E2tC1CycuYmZZzCjD5SNivZC4ZwtDaAZED1B9ooSMwh74yjs6P6z9PC7LTX9bGtv8EHk6",
  "key1": "67FX5rc6rxnVwrVusjhY4LRnaazTNAhTjt9FD9SBmc9WXq7fdZRL1UyKbitHuuH1fHJgsWBZu37PZyxjYWDVZmsQ",
  "key2": "QZf295T3ivt2qtAnMpZ2d6iNN2qZ8kG76EdTKrVy2RbTnSYF2H6a4VcF6oYWcDCRA9bAhESP2UASqSFJ6QkzuNG",
  "key3": "46T2PErH46cw6WuumzJv8DcrK5728ZH2i4nuEabTeQjXgp2BKYek8kXkqpG6SyGgBR31Racn3SWSWXQNNhqtBXpk",
  "key4": "55u2no9v5cckAx5CpTCsYE4RQ4RiooX3QeQ1QunanaYjE25cJZnXLs2dazCEMu8fYz4w6XJmrSps4aTbF5J8oEg5",
  "key5": "4QSv9Xfv7VYxHPCytzwgoMyiypuwGQPNhnbt9CSVa8Qk2LSzXvCSTe2nhq1MRBConExBGLLPKf6uZ6J5DhvDibW1",
  "key6": "2nsziKfeD338cXpDsXS85FAneJvpQY6srLqEwrhv4jBrbLjTDenQuYkZNCwFvLz2tWhwr5CwEQyEurWHTYAPJjtE",
  "key7": "ysCuyVqYyb8nESEEmxSBKmKzCLpZjioSeR6WCAw1iBF6J8o8q72g1opiG85hVh3rrHWqxFm7P3zQMJBZ19m8R9K",
  "key8": "2SApc1VSwYKsaWKuw35VEYSttQm2SF56E5L6RY1jC1H5PZEJfr1gydRvHwPzT1fZUarX8fqaEcABeykcVeiNAJBn",
  "key9": "2xaFMom7Pr7q3zMm8iEs7TGUEAdD2N8Kx45NjJWNohbUQcMg5JwbHFM55fEkvN93yyxG4udKgXiRbYBtBfELHRE9",
  "key10": "4bEucyewubniwqdtYF76oiitFNdRkNNiK6LHxzSMKAFvmvwwemuEy48LcWCBXbBHJwbnMHmbpCLXbxXd49H6xr32",
  "key11": "4zeAc54L27v29p46zzvm8r8JHt9oNQKfzsfypVHp2roYBXCa4nFUrykR2SxvWxXoFs3w183JQcDp98kP9P49FGB6",
  "key12": "3dh4TjkP86h3M9Fb1iGnKuSkYRo36mJ6MpE5nVyXGtaQTSUVWcSRGBTPaMS5wJ3jPN6fJ7yQyAJYEZYWFeR4VFgo",
  "key13": "VP594kEjJGskKmUDzWqdTtaGjaHAMXvWJJPxWZTDdsDU1kxKqjfzM2iuVKiFCnPntnFuEdSHL8vGt1Z3PNdsihs",
  "key14": "23SVXVzkqk9MP9EW8NVRNr4R4ST4zUS846DPaiViMwijWxfRV73LHwSE3LSSLNWYbhP6xbFNcZuC5iqDDsNjhZax",
  "key15": "3sRnNMtQH4f9qqafhRL4vUdmyQuvfbZWDBJw5EwnnUYrn8MDrzNN64bciDoZfLqHPoF88KGqd2tgTTJKRQv3hRb6",
  "key16": "36hMAtKjC7skpxvKkshYVwkZTdddrdygtrK9EKhwv6cQZNGui2iKyB1cPgRE3U99F9Xp1pS5rUqd1CytEqUjYeZp",
  "key17": "2mcAnidBYSrVt9mokwc3duo5m1UB3RYbdF82CVMRWHV2bvKz5rvvkkEgDssQ5N4RH9isphpX3T46eNmApkxHdVSo",
  "key18": "ySTdhZyc7N6Xk3igJuMxqMaQtLN7FyduwLhXd1VVAhUuPsErVwnrZ7yhJEaauyQ1neRhXSz9JbU1DH7L1ELeXcp",
  "key19": "3P7mNGiaEYo8vw5EWK4wEMLUvUJ9AMBfASrN9XGx1kxGMo4xmHir2SqwsXrrdQJtWgw6G5hRGNcknjE7b2VJT6qm",
  "key20": "4z83YkLTECXjrpkcSYcKg63VfQeRWPGaVM4PKJk5JHpUw7Y63Y827rPYpPvbKPebePqCyL6DF3ufDyctj3hPtkvL",
  "key21": "24s7Eagx1mjxkuWF7HdCs3wtz52x1i7HF9MgEgD7RRuTnUDARoKKvM41VUjj3Ti6W2ymyW2stjQAjVtVfiVNb2bV",
  "key22": "2rPSKi9gEdPzPNbmMZ31JoN6FxJNUF6g8PG22Lc6Xa47teWwreCUBpjbfnW6BvNS8w75dy3GL9isrNCm1evsNb8y",
  "key23": "65v6YdHraKgNDan8EtF7CWXwRf2s3JA7Tk8tC9ajMrqqNeLiseRxBS53Zmo6xrDBGCyZKzUudioqik5HXGt5oQC9",
  "key24": "3hFh92UcpiQnf7QpvneJ5PSZUz3x48HVbSum58FDxpYmx597mng4wcMBbnAuCjJAzEJBZ1HdtRZ5UnUq4NsJEWRf",
  "key25": "5p2Ae438VcBc82GKWz4MPSZUrg6wFdHCu7Var3zhqA6r96StP5sVxx3UdhWnZx9S7jXHE4D2F1eoKQt2nWKDvLT4",
  "key26": "46XTXxju3tie1PMHBuETzuWjbnFtBzypQBia9SHKJ8V5cmf56PqFsXZWjB1ksdb98DcqBeFan7bUiVfraPRSgoBV",
  "key27": "2cMr5BDm2XAYhWDNBd54LReXpuoN94Jn8uE9MPq6gxD61RPQeAJ92mu8FNDHFpcM96BtfSG3vTEgQoK5PD9jFpuV",
  "key28": "3uddbnWgg1aAAcju6q8x9A2AWRHavh8GFhSKnycsYML5VHbuAWyHJypthrYJTbU1or2H5YY5EUziLpF4Wy5qgRqe",
  "key29": "58D6Evy44wds8KpUWfmgeZJFn9WqRgi8gAiapyJ67XTP9GkL1CaZcuhhMG6PPHqY5nhzfVpG1VLsrVzAntp2Ebfj",
  "key30": "4U4BzVC6va2qTfhQCbcKDUyFXPeqeMF9BL5Py83bfxwgsqor1ahJa69PHxTFc2CnxxdmzaVAKuCRzoGsjFd5P5nF",
  "key31": "67VjmcaZtPnmvU7peFpM2AX3T6LKYy61LVnrshUEc8k1Crg9kseofpUdeSRwGA426yEiTiNm6vRsoVjbSP3oDZ6o",
  "key32": "kPr5W9oAySC4W4hrXDntCSKNFW5bf8SABEGbFbpajoz9yNkAmN63G32kyLBSD2wyG4d3k6VbgfWh3BbRnmFKGqh",
  "key33": "9AtnT3k1v4CCKXraEeALzeWNiDZGf4cc5eqsb5XJUc97zZdcaK936XrfPz2nq2tGV4KW4P1rVMgX6vkvdu5NeEj",
  "key34": "3QUsq7nAC2xVBzn6a6FtdBaWbqsRgpYw8ThF4wnxMA8oEPojov3HM8qunomg1L6zkKpLzxjgY4wtkBXrCJyMVdxZ",
  "key35": "gvBZQ3An6qmUtDkhHUo3eLsNfM2JFSxQGdu9eb1F9TL2SBQPsaF5bcvbhM4HCFJZNvyi72c3GgEj3GJyx6kV174",
  "key36": "3jg3pbsUZmKh7U7jFhScv6ZFkJGWcnxrkB75yPr9x4CBK7rY1aoNXc77HkXCh4oPhbiXA85qh2EyeVPA9dXdLuPQ"
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
