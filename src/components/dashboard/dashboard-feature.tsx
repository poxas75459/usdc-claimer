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
    "5xfmmxFQMnsUXZPJ8PKRKCjMYDfku7ArMwsLYnXEjh8RQZtXFaUYoUaLzAWCK3uX6Y17RfS1UHw6r7bsp3asjXV4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DE6SqtLMaiiSAiLUmDuLCLupYUDDLRLVJfDHV2p7rJmEGKhDuNufo5C2xFNLW4RbbHF2H9Hsf1FEnLpTZD8Xj2z",
  "key1": "4ut38NkwkS9neBcny65PHgQFcSfof1AE6fe7jGihZBSmqRP6hYr7xn3YBLhC36VkH9CVy65yEQ4YeKUaaPw2qgeN",
  "key2": "dK8gzD92mc8Ej31j4ReUSHE7c8s2TrAmKc9Ua9ar2ttdorXzXg3MY2rcpTZHjM7b4gVTUcgaxTz5fvHitN6xS2v",
  "key3": "2DJtwsfhLjn5DGEo8DQPuwZ2HL2kcD8jwNkA1rkYqhAh8oCm1JA4frqndU3sGbBvBHLgYchDJHzMBqMMfHGUwCpP",
  "key4": "4emLmtdxJPSbxdX8GwohBJGuyKpztEPzGHppQXYpcBZeEqnAAcxhkXFEXa2ivtJMmxFZwrKjhYiGipkj8VN1RYMi",
  "key5": "5FVuMcAAn2BqskZdT7Facmt6MqkBoaYiaZNGrrnvAuevPexWP64RBAxH32V2Ks9PU95f7x6suiwZkbRKHF5kDzPG",
  "key6": "5euXScFJYRDqx25yBo844iSfYPgQqaHWFo3XRbcNGct9sB3XsLAebKZ11XPc6D9d5wqGVnguXr7LCd7EqkScxRPB",
  "key7": "5SGPBm5iNLsHTFVEWg6KYoiozxWJN7vbhs7bEJxAPuuPt5Wgpt837vFPRtrKDjJrwHMbtxhViEopYFt23DFM3CoQ",
  "key8": "h8hxxrF9XHjDM1b14DpK81QponwxeR8AziSWdaKfixyU91bHvCk6TnFjzvAggVXVTuphfMLa9dNc3ZazSwKKuAx",
  "key9": "61nCyuzu5VXQbkpKgxnx6e81ns5tfhNpAssuEmZhudVEbskn9Moy76wXjQGbY6eEKAAPugWy5xVe4QfSr5rum1Wm",
  "key10": "4HZbNURTc4akD2BL8beohTHdj9BvFDhGsG8rvTmpe9bNtKQwp3y392pUeJgC8Sm3ReYNdDopwWsDCTujmC1mBFcb",
  "key11": "acJvcLtdajqoGuwN39ftiYfHRyDYLsUCPLnaKgzsnc7uwznRfisx5j5RNV4k8CiUPa3SNZDhMsmiECYFYnEPScp",
  "key12": "3vQJNy9eshdGHqx1ZSBRPQkTxFdeFxCPVqjTjnzX7iLoSvNYMe77kQgddvo2Dwy5jLqLJEYYWCNb6x7KGAz3MBxy",
  "key13": "4fChr47N9RRXCMHa7ZtgC6h35kLvkCbq9zS1TR824pjTX9cNegLvWmdsox3zVqAFBbD55tdhnLKx7BgMSXdh2rjg",
  "key14": "pBuQsxGQwPeAc7KCMUh7T7xogDvC9fw7cWKgV65BrC7ZzCFXpm64PDHZfKZeTSmdccQx94DxP5zhQY2Sg2b8cSB",
  "key15": "5LGiuwWV5rc3ULTNJb5svzdagLxiuYtszLwnf5xjboh4dqUon2ZZuPkqwkahvxRsBhFHAsRtDA3SDMjGHnLCzPDc",
  "key16": "5jm99zHy1QDFXgSCR2Y9yQB3QND71u1XzYmaCHSU7TGG6Y6dAEd2i3zKwvaYpKxj6QA29ZcJayqMj3R76AUbxirQ",
  "key17": "4rreJ1qZyQxR3hXxS3E6GNFbk6NjFWCnat5ziAPX3ctwqcyE8hPHiBmaW48Z68X3FT3xCAR9T2u3i9MjJnfW7mgT",
  "key18": "oHJMSw3Dr7kxbmRK74XKcEFfaFwFyNYCTZDGLh2Z7TAiRGJSd36EY2kejtVNty5SxByeN6Hxw3nZwozfdQF3xTd",
  "key19": "2NcuKTPAqu6kDhci29ENUqXdAQYYsPUjs7RZDxZGtEGSdxR11ehLV2JwMzDBr6keBpqkrkF46r4Mnj4bUAhh2nxd",
  "key20": "3s4GwTq3cGmuH2JNXESjqZoMn6oXnTC3NTQkzT88NfegPV9Z5pgbHPr8f3XdjSC4Bt4M3891eax8yfVMS5BQ7yuB",
  "key21": "5Tz8F4umGygK61ASPuTuH6JBk4ZoFDQXWpVC9FwGErXWkvNntnhJupLfMWnGub3kFWmJvpXkUqaerTGD8MfqSPps",
  "key22": "3oh693pn4K4f7rRYUPY7igFExZLpncDiB3EX61uNkrnUCJjBVw2ZWkyoTpU6WzA2KkDNHbmUKoEronVJLxP8rjuU",
  "key23": "3Mc7phxw9pUon313PrSphTH2SPFyDqP5CoJpFgBvvEQMK8v4WXQv7Jwez7sC4UiSzsBEZVWauhfwreUfoMbCxeBE",
  "key24": "2zjM9JvuM2DPkMCWeTx8XWYgAMbSVrn9tEukKvhGTaufhuRCkoJicBU9GWYAxgcKjyCTKdgdfrkqxpdf4DRBogRW",
  "key25": "45wSq4sXj9SRmZDp82Q62RnSCWTGpCzJUpGuyzW4Lt1nkAJKvAD1dyzMGp9APunqgHjaxYvy8P6bFbQWGzgnHixV",
  "key26": "5eFGbGQMfKdGQw4cTwRp5bfWhSmh6jzptD4k2HUFbPqw91FFmGeuUePfufrSq9nCa49r65anVtDaaPFCWJkH88sU",
  "key27": "3hkcSPKQ9A9545GXMqzG67gma2mXCU1tFsyTXuCXXdq1s4oJKA5vdt9qsZ11rHAgDz35N8JRHVmohoSHSqL8X73q",
  "key28": "4Kmu2sQcBk89Bd2ZHrBtAKPbQgJTu72Q3AgdrqueQSVQKvK5DzsPRAFHwUijPfRQKUk2T8vAXss6iEWUs4ru4KmK",
  "key29": "51nXA9hn9xn5KP59feNpqmLgRDp5GvtqGrSVh7r4r4jaeDRHBkNRyJk6YKbZxXz8q5ef3BiXxfZoPazP2PFKwzrX",
  "key30": "sgU1F44hD29E2rRC7ar24FwBcrxunuVv85JFj92xNn2rfhs3oPnTxmvhsxMfpERXFmSozXEVjiqTydbknndYk4R",
  "key31": "33gfFXG7SnWRYGruP55h9WHbkZrzjfPpfrR5rq1Q2BvnpzJEWw2U1KmnszceWfQaeVnyVwJWBszzDZvyExZTDjuL",
  "key32": "3mgmG1h9DBtWhNcDCqARwPXqD7SREZm5r1Y6rdnXazMjc6Ke8pwn6jHznECDPLFttcSecmuPMJWJ3Jr373AHQWSk"
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
