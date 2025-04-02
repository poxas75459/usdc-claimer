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
    "66rBL5k9fqKYQGLLx5DiniRwyiawVMgb3NrjGuKL4henvz6bzcEDt4BYJdfSVC5sKnUMtAH6c89X1HLoYCbT1zLf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "495sa31e8vm7GeqJgMFosShSzFURMHqaTvXQ173ZpDKshFXMJQug1c27ziB6B9HwNszw2TJuWmCQmNapXi43ypdj",
  "key1": "5teeyQn64askxjLRszSw8phAtdQXPpuhfm6KrYtXZwwAUbgUHAWbzhpyLZk9kC8JRQJFTxU1BoUH9t2giGu641qQ",
  "key2": "53gZBWqn3tEDUhrH5wpnu4CKXsECsPyM1VfHWWNiQvPYPpbTtrp8RiXVGmhWQYq1S9Vc6vS6tcny6YPwj6VeBeZD",
  "key3": "4XmWeK9Uv6LiRbwMHcoNVSvx3wM5M7EsH7gSNcrYyhB63KmCzLsV17DHiF83xkiBR7Ko5iaLgfTX5WxGMdM9adKp",
  "key4": "3k8mchyfDXYuaZe16ijm2oGqfgZc7iLXAcyq6cT2McMJvT9N61SPbsqwMKppGgBX9gjb2YguqJbYFfA6bL4g2xJa",
  "key5": "5RdkyZHaDWRLFWG18pmZ9A9Jf8ZvccgVr5JrkY5cDwWyWX2bTiJD8yS1r84Tg6Ztvq6vcxLxWH3WM5brjq7jYoNn",
  "key6": "49efC2gK48PfNceyRcr2sNixwk22R1wXRCMm4HbTNBK2eNaUe9SAtW5HjT5zYbty53evBJcDhoc1ZBvzKsL2jGr4",
  "key7": "taPHqWPw4ckpFgG9eX8Vp5aRD9DAGkEXuSQYqRcKtKRMEWEdwQ6Q3MFuz7P1h1YnGKhmd2u15bJX6VfaniE5TKr",
  "key8": "jhfPAq8qZjtM9eqKn8wTH7XtoGmhCS8z3sQy5xkGrqR6mMJ5JJ3XMBzQ3CCzY5orMdnptdbaXWejgNuquLG4bFk",
  "key9": "JwpANVVPAqTs5xsVjnLvyucUrZxWY6XLTSsYe6ZuacTtqKFoHUi888DFRbkdTTSsHjapsP4mPJz93WpfGRAT1Z2",
  "key10": "5r2TzuY3Fy9ccZ6TPQo4pocsjBJGhgHQts1Tz1bSxQtj6MgVGC1XXHq6x3vYbJ27pu4T9PyaTXmtgyX72CEiJDti",
  "key11": "4CeLKmZqSc34HHEyD3XxftuaSnqSox7iTx93XVCdoqTG2a9R1J6ee393Ue36WZHLqHFo3rKhFdQtEoZDUKxRBFy",
  "key12": "4SH1RcCVyDfVLnYFShCz5ifppUtxARPd4oacT9RC76stcU3XSZmJi1vuV1xe3LJdcrRPC18qcfPNCAu4vrzimny5",
  "key13": "4zHxGxATe8v73gUz4nhftUVHqHMDnVN917PH6yWpG7FX2vEjUgYUmjwQHL97YH5nrLn7gte3AgXbnrt6N4rWBCqn",
  "key14": "3RmAeSisgpgT4t539w5t8yQCtqjLQBavqZuX7vp6WJtTrnDco3PArWF6TZeqitoUEwQy6gaYB8VcAYd2fGnjC8px",
  "key15": "3VFbR1rA6ihmS3Ayu8SzXYrDy1uYXDUfcZ6cWG5S49uuzQHFDVxB3cvgb9mbGg5d7o2N75NrAFNtGxybMjX2YeGs",
  "key16": "4QB9B1ZHjkZNhrJF2XFwi7eMqi9bWNMarnEET8g7bWR93DqDt32sKaR7kLkniwyvWyBzJAsZ8AbhC1RUZUs1QCMz",
  "key17": "5z8Kv9zKCJ97KKE9acxDAwHHv631KcZi3DzfvafjaSZkebNMHB2wSGUUJLTrSGwt368x47NwZtuGfGmiuEDPwyys",
  "key18": "4ivuowcmaBWCw72nrPrL4cTeETHr7ZcZtjagn4VhQLfj4z7rkppDxjtbX19quvGiNmKRsssrCaf19UNHEhPtdbEv",
  "key19": "3iD3A5i7PfaHMB1F8o1yY1P2XAVCxDBPPv8LLLb51qF7rKeVefEubUUsGyAQSid8MvEUVK8pxq39L8nZewRRuxq4",
  "key20": "33UJDSKAx1H4bZoKinhrueNEt46kSRA7WL7ktCW7WGpKHvsCW5yaKFAikfkyvEKrwkbk2kJBPipGGQHPFgtFk2z4",
  "key21": "5pnXWLFVUHsyhzsC6VzNqB4ioTXSbHctC5rmnTL2oQt3ax7RcARHDJeT7V2YR4VGrpwVVdiNdFs6Pxsdnd2Z369w",
  "key22": "2i4RBuRLJHf7T4K2HcJnbFMPYmECcGoGxbuhVZnJfhLZzDE9cnzHZ1Kucasbh3RjMELjEmqDiSf88pJgSnoavQjH",
  "key23": "5s6fCKP9FLNWPj7TEfe1oxYq6DSM1Bju3VRH1Hehbo2kbqasVepg4EPuRdtuyv8LmddJk69JhbS38cuFSb1R66bA",
  "key24": "3VkxVoqPontynRWcscY9Dw6yqc5rFNbUXJPE1tenq2GWLLZVQKfWggBvo5sKN1yVYWvfGg19eMQsbDnd7mRLZ63m",
  "key25": "5qbUrggB9z8adjp3b2mz8qprMzMV1MLj1ZBAPtsW7zz487K2NmcFrj2APCQnfBPJZpxB9qPLHoxUZERscG1LwEmC",
  "key26": "ss9gqY7VHGhbr35ABXHZfrtRnGJNJSwrvhFYLSoFgaGaoNs8RwEU1Vgq1ZKxfyqhoBVUL5Tt5iizzrd9L3JmQPu",
  "key27": "E5HVtuVNMHo3j7ySSxxdC3hQKdXZm95LGErsgR3KJ4fkVRQ7gz6iH56j3JUXrFYmXLYwouP2kSss8e3uGjxuseQ",
  "key28": "2aJx6FsszMpJJwJTX7rhfQnM4muDnz2vCDrTiq5bfzhhtAQmaB1H9nGDW17syYbaH1pAy3tsQRvVLgudmcroJwTj",
  "key29": "2xMvidB7CmakiNFqvScQwCjFSAZQDRSeCpwVCo4eGhocNAoE9pfMwVsfc4DA8vFWJkM9XFY3vwSmqBrxxTxEAQiw",
  "key30": "3MctpcNecs7FVrRxwbBjjRdWWb1BLNp2BEv1tc8HrVRRpPtraoxro1xxF3cLBMyndKN7gX1tVUgEgnRUQzFUJSPi",
  "key31": "2qTDnVVTkwp92zq1fDBswcbYLQJmBcCzkzatk8pM85dwFmgmzmuoq6q2C3c7bGaMkDWtSEVpVqzvdfCnLZniZKzZ",
  "key32": "2H5vdtLyQCcFeeZe5A6dvdGHxVDraXg6vaNb7LNYVrqsc4R7SgSf3bLeYrDdK98NGkX5wugeMQn6Y3G1NfAteeA8",
  "key33": "4djocPbA19SzC1xvNX9L9X1BZZ8gJ2koBg7Xfq3dNHawhAjDfGvKkKCYFAUdGrBQLWgW71duGjR8zNHLB5ZbJmD9",
  "key34": "3FASPAzq8ZNfBQzyXL48u38HyyAncHnMBPEhhH7JW5AcyNCXaw7LHKGqZTw5pVU8Xm8y8TkfFfrA2BqpkBPJqKcz",
  "key35": "2kbiDTYLADkUQnM6QPhgxfba5S5RehqgYfjqMcPTFh4iieUUuGWvJ7uHFvEKh4L5E6Ho5jZChwpp8ENW49VQMA6T",
  "key36": "539ScMUBGxqFGKPsXEZdgKBiigKWwqCW7hQXKqENovyeiVNG3ERArdWzV6CgFYxjvmcLAZwDcgWprXijSNGba3jc",
  "key37": "nMTcgRd9Hz9pjzmLUCKgkBeqQD4a46p8XZ8Wt72M7cQGT8HBrWYyraW7ykcCSVD5R74oUFPMxtXuaFpL1MLEqRx",
  "key38": "5a7CUseYDaoTtBtBoS23PtSWfTjft32ynfohgcQBU2iYkUbYPXPrjLLdoJZEgQvBEKTF36GACnWMd1umqxmPPfvZ"
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
