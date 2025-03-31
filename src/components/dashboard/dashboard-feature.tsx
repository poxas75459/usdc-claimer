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
    "7TyyJ6aAGawsMdALGE39qehKdPu6US7S28GHiiNuBzdR18sGt7frcsyDL4EsrSgcqAoorFUF3ye6tAv2FrqF7q8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LFStjQ1iYBMMojbPdJmfDVE2nFNr5kYgJzDrat51hs9GsY9PmH8gMFcZkMe3vQMruRfnu7PernyMnNCmfPcf3u2",
  "key1": "2vat7n4qKc5qp72Dn63FY3F9m5HBM2WghwEsbigPLe1DxE58aVX9XAyvPSkk8oabNzZ9emZkm5arPW3jkeFDEVfK",
  "key2": "3PgtWEo15i4NDTgdwfYrPSH1uL3ScEThkvnUkkKHECGf4e2y3hKPb9wREpLMSsw9mqNs6otrAndb9Vpj2gqK9ZRp",
  "key3": "yn2Z2mTjEv2bRNmgop9XHLXFVcQU5nbd7acjXFoGpMDJdH8Uaj5QL3yUfPLcCRybQoJhyVyzBmPdt2e98Neq1J3",
  "key4": "28QDnkbDP1cL9SKGtgtG3162B5xWZzTt6FTyv7CyvoNRG3jaHSrckxyJSYWzxRdc665QktwAoSabGgp4UcNks2t1",
  "key5": "2s6EGiTEtWyWyvPiiMAEX4kQH8yCgXgDRCpdmNbUDgnBjXnAZPzyz9fDbvz7zC77eUEUmCBA9QrTYP6vJbCqM4Vc",
  "key6": "aZhDqwZRsU8ddzenm5gQyrX3MsU3ejchr6paPEzuGEymuYYana6QUTVHLBBCtqv8JBtXaRK9TqRoW3RTjjHgysB",
  "key7": "2QumRuD81SrQppZVLPS1KDDeaTropYtxbeg5YEAukTgaEnw4Wh1dT53wXoSJnQRocfmiRqBKhwiknEbL7vmrNUd2",
  "key8": "5LV62GQDMr7qq6GjH67jkLJ5Ugx8NYDGspKnT6FFE5V18a9EguBJbo3dMuSVmFpLPcY9S69UQ94yXX6UNbSKkEiQ",
  "key9": "3RUvRBTfgBcJpxVC894t4wfSAPxt7U7hx8XBedejnHcYE3pN8ERr9rDSRbwmf7N5sRD5qgrhR4wUGZ2F5kFvCkjK",
  "key10": "2KYuM7uqWuRgnZQ921cqiCDmBHrirShp64BqTsiGyBt1Szy7KpS9nJJvKLcygA4aSg2wMJBW9f6XinSGgfxAET1P",
  "key11": "3VxZGoxvo9UpqDrXTdPPHo89ZtChxu2QLcTjAypAzop6fD5FH7kufq7sav6fwCyYGYe5QGZkuGW98nVENKL7a3q8",
  "key12": "2BqFCpeWMwZpcmgBs3ErRZ9aCDQtq1rG8scf93Yb199ycuSjQ9rPfS1ytzNWRT9tGhUzL6guKnCvkvibygmqFHv3",
  "key13": "4gyYETofsS6L8fdaCPoYgB53PdNbMF9DPkr2Sz28jXxtW8C1f323GcXxktRx3AixBJtF79ca93JggMrKo8XUpKUQ",
  "key14": "tidQZWDJsUdFfTie8TPf8zDYps9j4YtstFdmKiPSukqxHkbg3Vuhdf6cqCwL9K52rnkjmguVMQyLLBABnwevknJ",
  "key15": "KwcJ2se77s21vdqTsxnmnGXXw4o4vUDJiixopa8DjXvYSuXjcCJbL3dQzorxu3W9e4oLY8CFqv2ddiYvd1itAgM",
  "key16": "59JHFnUfsZ3WoNvmzF5uQhknBGy1NTWmgDwAEByqXjoogQN1EdMrCLqSWtae7zrccjYA5Ma2mo5aTW263jDtNAin",
  "key17": "5j1N2MWNtV8oPETN7qyULpt5vZqtzsAiem8a94iF1ziTomG92NxfxvsYQJivZDuEiaDdS2PppLZcpvmcw4dqLnMf",
  "key18": "4c5qjeyvr9YeaX23vteG6KFtBuekxi9e4bpQuSTtyri1P7GnBsHoABc2uP5sVARuaGUt7mzrU4ccCMsmE8pK5d5N",
  "key19": "64cRknoSZCGZKNkNSx1BD8RusePYv2UD83aBdJyNppHkaHwnpW6juxEvjMxwnDsDp86dY9QQo4VrjEsgp14ty9u2",
  "key20": "3ppA9yNFNZEeu54ixhwxbHH5EhXLNtdrb6xv2tdMp7TWQyawxxiBFa6XSkQJYaJRJ8i7AsqfiFa5CMNxATouJgKG",
  "key21": "4jSQ6xgEPCJKVmELM4kixQXZ9aKh9F8QhhxWnk3QpiV4BfUGoW2iXAUb1nkg4gLLdbsYetotEQsUfVxyBFJ9dS5g",
  "key22": "5kJyXFNXrFFWPFcZta2FHDFknEZovHjoqe8PTTawwMVv9t2vyfyDdeTHGaMhe7R5bdE4ZoVVWuxEePNjVDVDf35Y",
  "key23": "SzFhv95EbdrhZFrFDfSKsfY4vgJyY6VNh4kJLwnAqrLvE5dDML821VGt6SwMwFJWfJmkWeaiFaw253PMaDtrvQx",
  "key24": "5jNioxbjGHHfkDr9mo7ChB5VY7z23Pq7RTKxqxRHjfHMhsbYkhuiWbHSbSx9aF7A6Fjh4Y1SJvP8SPik69UVBABe",
  "key25": "2CJ7Q86C3TBPAKDp6dwqUteoYcPjaVqEhC8SrVCz8fCTkhQzMs8d1V4w9NCXENFGCMS9scsxGNJcFVTSStRCSwAf",
  "key26": "5znKEtf626J6mWicrWFxpksoNhnS242YSXsN4fHkhCSPMoDgpKMiDXitftZrAr4vGBqD9dwPE3kFE4S67puPg4zT",
  "key27": "3xt7RPyphE6NqomxxHVmgyZwYgT9WZvM3gQdNheXH6RBX89yxxn7swpHgL9nBU1iNwzBR4ZbY17WdUMCgsY5esMP",
  "key28": "3KoeQDTExqdZkvHgmzU9hSUSUuodF11qKgJL47jNyQNzmyAaX6qQeC1XXQ1CzoTuMzhiXAFhmU7FBog4XWHQPy27",
  "key29": "pMYurPD33zHvgVQe528yD6SJzGhU3sgTxTYDxbNAgg7BUyhomGgGCKEzi4esxGpjF5XVkY3fQS4eGQSKcmY1vur",
  "key30": "3JBa1z26cBbpg41go49F26uVWfrtWoF4jqU7mj29rCNS8cAEFv1yYEgvMebtqG5Raqz1gSRB3Sakh8fDW2Aggyz7",
  "key31": "VeQRmtpYev5vCdqMs9pVi5HLiBXe1L8jC11kC4AnLvnzYAoCNPHjxC2DNdoKU9qZcMBKQWH5piSQAKQfmMqtB9f",
  "key32": "3aMBJya77Avsfj2kLCTy1V6DACBwhWTacb9oE7oRoYa3KtKQtLXBjWatmf4yb3h8ANCVGSZLWg1JDMV9Cqx23tTi",
  "key33": "2q4XGJrWmahYx7u7ZUDFbneFVGx9xLdabbyr87LXBoYoWD5ke6vVK3r9PGCXZmcCYukgtVWihceZSXzSGVyiQJFJ",
  "key34": "2i3XFAGjVb84L7FMty3LgQGiGoBZvGhCbiCJAomEd1dt15gxDLdsMgQ4as5kCLE2VQHah9pNzkpjVictd69oVG9b",
  "key35": "5G9iBukWU8s559anRiTUbUcRZ1ksfbVw7Cw3ZtvJHjKn4Q1ncHUMt5biPKtvhzrsxkorkop6NYaEGNHygWg3YK63",
  "key36": "3M8dGHkn1ZU5F8BwqhDC2BgS5FteQNs6SwwjCGcwCxHrb6LHgFH6fb9UfJvEuvkLd4Kp7CCyqQW2FU6Q6S6sPeqC",
  "key37": "N8AqvhPngXc5p4g6hrRXsS8RPGvkt6ojKso71iZHVyqycayPzsRxMAKTyRkEKfUB4YgQyzgYPKDd5iXuGjcr1We",
  "key38": "5KSMW7ZFchiMTz4VAA5dVa3JqjQMa44o9UwiJbHpfrtTdLVVc8KjGmT6C41yPhqPmNpRi6pWBGcJihrn6Ucwx2XA",
  "key39": "2mvBa3uZVvhdekaUwz3oFyesnc4X6CJecrsMxmGzhoeGD6UWbYHhXxSzcbATKLVjRdShC4Nyp1mTyUM7hYmpzEiT",
  "key40": "4EpckNo3p3gcuTNFXYNZHMkNsbB6odRbqovkLhvwSk93VLii37Ao1wxdFKhMJkoBqnXQ5M2v9x9iGhHBTv4XppiB",
  "key41": "27AaUgDe75pErKoCVZaUL3ESae3KtM2K65DfqH5dHtAbKyaWtt2nz6SQSPpAQhmrdW7KnfpMqnsfAmrWBWUGYTAq"
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
