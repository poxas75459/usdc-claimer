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
    "58YLUsv7ZE4KWvAPiYB4YmWdp2L7KbyrfZchpL5WmARBcEA2U4fvu2RsP96uW2g9kkowX3ntieFNRx17LHyLBM6d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LZbXdtcvvVaypKpcALHMWy5TsjWH7ys16W9wk62HQTqWiDDvCznJGVmhXDizeUqPXxnUZ9hYFK1DyCpNybV5zfi",
  "key1": "23EaetkN1wDFeoxPUf4naGCsZ4GzDBTVtwpncP4RxRhA1tHXPxwCDsUjYvq6PMgmVaK4j4DTfciqsELguZDmHMxP",
  "key2": "5WktVT4fWhNk3uBkwMjt19HtPgGkynsNguEZNszhQkP4DRAH8SpNzEx1QptBsRqwnL3c8txTsPaBN86D21TJ5J6N",
  "key3": "5pd1zDqVC5N5KLRA8CovJnCazcqUui21BEPZNYYLG2KSJQYs1nmEVefPVbs9fAE8F6Wk91ZGAFDwp1xbvJuqF6QC",
  "key4": "4jU17SVfPay4u1s4HucwtYfjvMu6NUCp1U1NWEgkWBBHcvVqaPgB4AYx9tec6EHUR4DHenmJ1hNpYhQ6gs9ztMD7",
  "key5": "32bn2TZAeHC1tG2sV7xmERdN8S6BepumFUnPNPTCoiQ1uB3H3pjdXR9KRL97ZLjgmXf12NRTWKD2eZ7T2asfNcoF",
  "key6": "XBB28KH5wwm4m9yXs7zjNFDCqv6ctvhGBfaDndA142vNmvY1ijRKA2jLQX4gZQT2WvKgmvitEqPX3xWtHH5D9gh",
  "key7": "4cYiu7NJZdRUhA9mRNGVmrzBUKd7GrCbtoxhyQRu9iuSULptFVTQnTkuXSSFbW5N3TWnkAoyikPJeED1HU5RK4TC",
  "key8": "2b1Vcq3miLGvTwHpVWEjQ9u6Cti8uLU8HorWnL5dVxceWDKec4BHMkKnriTBQYZ2czt4VpDhy1Y7CBcsiuZ8vugP",
  "key9": "5Thp7f4BMjERMS4jHMxLaxdXXaxfNovUWeSCKUAHcC9GRic1jXQpazigNqwGfxsQdHqEVsU78jqVVPk3nDdL24Yt",
  "key10": "4sfMK229tPf2AmURRbprdzTwt6ZbtwvuxFjRNeVdnZDBRdJkJNppAT4NP8bzz1LqZAABz8Y5aG3SQAQBVWpF3DqE",
  "key11": "4xt8fXcfMfCRUy4iNnEFFkh8fsrGQES6BtAjpEjiCRkNbN1huLdrzYF8gN5oux66QcQV1Hxk8CdtUcLcbwVrXiWn",
  "key12": "2QrGoqTg59D2F16AYCSnmCdE2XEapK7gSpPUR12fYUTmz6GWWughTn6XRKCSu1yzcLKUYakjAVHc3AxojMDRwUcU",
  "key13": "zRhZDHeUzKmTdxLWtAYvb2NPeMoZm8HfPGU1bQgedxofWq8nhLvJYnRZuW7dwgQPeaYEgiyAF4xQxCdoavS1Dpq",
  "key14": "4wSKavt5MgYDyaG1cSzrknYMY21xvJop5bXNo64dJQ2Ly85MGb8YRZWmPLjnAmGeQnBUykSdVFnNtpGF9aind8VM",
  "key15": "4QQszEuy9s8oUSL1Xj4c3Bj41EpfXkpLQsf5N2ZRG6meGytHoivojsMfLHksPQ2m51Cw8faKUYnpwG8P9kDC7Egq",
  "key16": "42KwiDWZeGwrV6Y4BmtPhTB8xV9dbW5kQLiZnUvueBvG15wMEAX4Lkq9qFFgzTMcDfZ5k9VQVsjxvUYbNTABTx2L",
  "key17": "gT34Mopx1p4cfvzxXAUMAYCcGTyjS2XmD1kVfomjUNSinfUs6UToqHWRpQxHfcgpjxjpRn3APtRp736vffqssB9",
  "key18": "4E1j7gfffP1ZFYnvHr6rEdJyuyDSHehwXt2yhr7EDB6jMSXU7WK4jdQNwzB6KFZrEkPdWofphaRtwMgEsnjFEvEb",
  "key19": "5oU9QcSARgThny5A3Q9wjLwbBuu1Hg7E3Svz96BDb6w49oKxPyML6n9jo9W2yqT4rpBZtDoiaxebQz8BNuQzkhGk",
  "key20": "2hci2Y1NVaAokQQyGonHhUzNC6eJyhFDqZraNp3H1eeyrUxsg2zuMJpVkL3Hy2r8qoELfBQLAnYczhFEG9jHGJWy",
  "key21": "46ohDAL14aCXSYCUTdRJP8WFsioCtbHGFpEZQFM1WoZjsX27PLe717ATKiZSqaPzDKSQmyrpxj2GUsocGhtMbDeF",
  "key22": "eiVuHoFAhaeaHBVNm5r1XWKYGXnNvVPTihCf2jUTsbPcizb5VNXy6EhqGeY4YBjQ9XXbKg7hFCBc83yphcxTsCX",
  "key23": "3d2rKwCP2AieHSCnfwZc7ZigQBeGTkih4doJsCwsbSb4k7TT3WSbNeNWetFVbUYAg4ro8n6bJJVPywXF7vpzBvhC",
  "key24": "2bkDFtym1SvPq7owaWcEo27325YvN5nVbhAfzfVEWU3zwkPAhY7fcaUNmrpGbpoj1gEXJaWcaB86TS8KUERB1UxR",
  "key25": "3b9uG6SLkZXjvRFPc54JLHF7LSXV5Pe561KKAP7gH88H6x9bYsNNK5a4R8BRUfLXn4WzmzHmgmmZ8oHGQ4aAKAMX",
  "key26": "3Bn7xBXh6kYsSbRoZ3TGKVCMCUfBSmHNotQJEhjPBUdjQbdjFKJgRMSzNeZwvXHz7WV7c9DTja4oTZqm1hqLxFHV",
  "key27": "4MN96dJUoM5FknLLD3qVh6pPc6TxD8i2HLqo18D8kuaSSo91QBknRYMjbnt2hmmrDrqZqqu6FvjWTkaPHW3CdXtp",
  "key28": "5Ybeu7U3mbYLn1uHo1cw9rMZk7WHReQJDrYWxE9wp5TavKkrniP4XhTZ588qWY2wCDrvNJVZPa5HReQSFrbbAJV",
  "key29": "FWNFBEN4sLeztNf4zHH1FxJtFNmrh4B1BRsQnDo812syo8JSm2shCss67tyyE7USdGG5nYq5KD1iRu88eWjgsvv",
  "key30": "cuC7SbFdadA1vA5Z3Hi6msBPFDfcAmhEbvxucWSv8UmR6YoFMkWXL32JC35XQ7xacnan332xfUexTbm1tovmX34",
  "key31": "2ueYKQda7f8dGHxPZfueZLijtxBKRCn1p6bbdRQk5qAhrh5WyZ6WjGqNNYA8unNUHqUXyC5jXnTPiyzm29nGBdrk",
  "key32": "3RtwyitV864KpExEqdjQdQQnrZh1zoWbYxVvPwRD7Dfc61JgrVDFqUPCGHLPcyAJ49KrHj2fD3rkb6wkCgyndU4s",
  "key33": "3w8r9NJe8VsDXcgB51Qg7Vw5yaVq58DrceAF8CUuSxm5DCwXuwELgWMZWL49TyJroYkknX864wKPAQKfouqy7GeF"
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
