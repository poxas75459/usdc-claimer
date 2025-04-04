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
    "JRK6FJL1Z3uFFnpghvKhYS4txVbcixm54WpVDzC4R2Pn7sj62iko8qMjKuRpW216YDZajsaC3zYP1YYtWCR7ALj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TwL4Uxs11Tv1b7zEvAeeqA7TiMaQv8fiYB81DRbSxweFwcgUJpR3m2CCm2ApogXcbQdw5gDNBHioHFX6WrEuJ83",
  "key1": "4qM9irxxkeaq3fo7S9zLzKZLaRDGGkYKCQeNAngzmcra7zsnDTaTmK79w5nJvse9oV6dZqPUuHHzkgNETGNehhL5",
  "key2": "5FNECs6TXwUL4WwYDZ7ETpXqDSxvG95EHnLbS8hN7QG6MimEGgYiJSwe6L1nVYQtDRcXWcDUebSGYCz3xXmeeU8v",
  "key3": "3keWXejy6qBsqhLcQ9BcavyFuQFP6YQVEW7qrRZW3wYGjzSDKxMC3wUm7XBNov6aMQwgvA17TUMVvuzZ3CP3eNGx",
  "key4": "2EGZVCgqB7qhqfXpg46nRs1dXznHZiYM8Xt2XyGYTFNBXMZwVLnGkyfXPFQLbzCj6BKYt5rtGPwKdG4poQwVGCkW",
  "key5": "3t2ZqDq23m7qWaVBMTbpqb5mbGcPkMxC44xsEX9ySjH4xTzaorvP6Vo5ZKUk6r3R7MdsjikKia4SosUsnMAzaD9v",
  "key6": "55aRZ5H693zXKvmMeLKzpvMBzNZt4dANPLKhyPe7RUhc4Mn6esQwvftGAPM9BptaEYbaRpJKJHKGPvsKpkHC9HN2",
  "key7": "3SCkQQG6yv5JfuXtHqo48ToWw34bAv1eFzLZonChRxTsitmQkL8G1giG7anvDGWAEHUGkYxbz9Q3Mto7tkHM4Z7x",
  "key8": "4EkmDWFTDws46UfhtFKc9JFFWvmFPKFU3zBWEZpeyNyPRth7ZwSW3GxYwFdzxtWD83TCMJgZ4bTcKKVLW9TJdeGK",
  "key9": "2qDd4mdUVhWYjR21dufNazcWuXWBi35jQm9o5zirv3F8pLbycCrRc68jYmXRwmnmLaosesYtDF5C1mSFis3Fdr7u",
  "key10": "5cbXbJMWvCLG5a3fRg8R6CDEZD1RFEUeD55MrrGpBjQZaR8XHqpF7X3DzC8dN68z1b7rbccoHYazQKydaRRfBf5a",
  "key11": "eFA4FbpeFfavWno2h42aVoU1eYHaBX1AS5DG5G5XNggfZ8HSydmXRtq1zKVSuKEv81P9tdnYraZ2nFyiNE9PKnp",
  "key12": "2w7DC9bnLw1J8pBS8qfA17Dq3DUymbCp2eixbg56TtLHiPvRUgNhypvUFeDtkayky6PgiUKCrTKaCanVTvTEPFiD",
  "key13": "Bu1iiz94QGsPEgnzbyb17tbAA27wiw3gMGPdqPvG2ZsKU44akhz4xyAaJNkJdXx3cRktyBzEDgCkgogYEVUiVRC",
  "key14": "5YCK8EuQM1rvsC2iVAZuYcqhfwe2DACD973csCVUMuHatq6QCJbqG7Yyv1SQM9xKBZybPL84EGCMLiSrmHYA9Cig",
  "key15": "3gQnKVHksq89ogbD2iUji5jbXKUxeCZQbFTfb2kDkkyJQaqpr5V9vMgs3o5zVDbnQ75dq3bSK5dUbw7ukj8MnK7j",
  "key16": "3PmvcDG3GL26C8wA9R9GBsc2em9ZLX3btMRdZ29uvURqatD87vokFgXZkf9DdE6yg9zwX9KMvSGypg3fGfJxTiTs",
  "key17": "4JFfFE43aRcao2xU9z5PEJCXXvFPayY8C8Pru8fWZdRhgPTL3AXRMMkomDc8Ts5XL7z6fquRKspwmmBjsJbbPmX6",
  "key18": "3nYXV6evnVfCtipB2tSh6LoL6HJX5JBYZHTZqhS3rRPYtTKZEye3neN6kbp8iBCvNPVh5HsMcz12njayPgfHc9HM",
  "key19": "4F1AyzfEUtubdsg5gQfnqrMPdRWMP98qsyMzzwi35bXxewy2zTHxLpSaVEmuAow84R4mS2ekuWA244vrFZZfYKgY",
  "key20": "43mfNuYb1LgAqcQxkXsFrPHnQ73grfyWdSerAwMZgkoudGeSuPAysZ6s3U6riqagbC4ob7XRFGWZDRzMJegMqUm7",
  "key21": "3CPMGKTXhZpm9Sximg73uUZW21HB9Kr1JzR2ondBHHbzV6EbxYGA33MQwFwZJ6rBTMREAuZCoquySEa9PwgGBPvZ",
  "key22": "3bwvJeUDj6Yiv3iUHhohDLimVcWb4bVPXjezUvDmggCjpuexeNxEPm3rsv6Pt9vTTQsABxUaCnqN8ntH6Ht9dngo",
  "key23": "2mm9DjWrF5hpEYU3c3oNSKteoahC6he4J48QJMNEq8Q2pyQSBCRjdb4B7gddihSiv6CcdSYAafS3B7waxaifU6eU",
  "key24": "65ty1mQGEXY2JH7iFoNXgeSKH7TNUxVzR5StvSNnP2kNyi1hQCqvnf55Wc7VqQETgjJXp3VVSkjoGQ4aJ4nKF6rH",
  "key25": "hizqhZeJ975gwf4SDmEsG4oE2QRMeNpwXzoCcft39oaXYMH2EXvTZKtfq6s5hB7naq4gnGsrJyYo7xxePre1baf",
  "key26": "21AyDngejPs6uU5z7joZkUKULXL3BtcryC2zHKqP4pirbdu5H53zmw5WszUVWBD642khAtpokCfWNhXjprs5Bs94",
  "key27": "SV6qdgZNY4GmZkHaDrdX9jFC5dCmZtFHtzbvZSwJdKLze9gjQ2pgnUVQPMpv8wPcbdX2zek4k8qWwgXGjamxhDa",
  "key28": "5tjuQsFtvGgFDT1VACuV8TjB1fcqSDb2aN1CuzakGmpTEdknGzXfNoyMVNrUuVfqRJYPYsrRVqr4Zhf5KVgA6oj9",
  "key29": "WpXf4Hp2QRUJE7s1NJq3t7KAVwByKaV1vptgGsCSn4LJmqydXWzLkmMgt1rfSKzX5GHYrFPEMun9DhrSzvqmVue",
  "key30": "2LPF4VUKcr2R679iMdQMRtMcGZ3L3Q1qdu4udBTpb3jrP2LpHwHJ8zMsW2wRQRBF3LM3JzJAynhdxg8sjaGLb8TE",
  "key31": "5uwki3sRGCS4NSZ885wXBCvS6wfNwFGgF6Qxe2rZZkWXzAuzMRgFoG4DWnZNyFQA9GuFvpt7zFFmvRJShikHBYRy",
  "key32": "2hwAvFrGUK5BnYDUmHkEU2eD7X2rR6hz7HxpXvVDqfYrWKG3a1fKLcKt2gYtin3rE6LH5EHt2MehrFEcF9Ay4NYd",
  "key33": "q284WTxVJgq6SW79GB9tb7URbSNQp4U6H8Cfu1Pp5rRFpq8E7pMx28dZLVRe1tD2iadL5yE73kZ3V8pMDpUSSKf",
  "key34": "5DpDYspayvUkqAzxp9wcjwXUYQt5TVCKywdZxMWuR2jm7TVzsyMVwDCn89PP5x4PrYSYn7BmBPBPEjUFeaSTjUAB",
  "key35": "4Np7ntKUb1Zd49H4a86JPi9JXDJfSS9mWHykuBHUGR1mPNiPMEjXcrbU2PFaFnShDggAYYh7tdnAnJCo2jcqNLV8",
  "key36": "2joXxNp5qzxHUAoYfdppiHypuiyyEKqd6UKsjqzaB5xJyTtuhwqBHSKHytwfFVZmG8EemRVCJu27rGM8gExJ1qEH",
  "key37": "4GqBdNP9CDgWF5gK6WotpscVBynT2AEd6QYyRAP6U9cBYE4Ly8ucvMnqZPKXhCi9EpGm8Mskdx2PcAGdF3jX9qtw"
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
