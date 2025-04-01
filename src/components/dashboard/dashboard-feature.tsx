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
    "2uUMZcHS5YJta1jXM5a4xmcVBa3qrPJMZCK3tYqzQrYAUmukx7WbJ8x7kNvsaHxjNyFs7uFqbrLZu4DZZQh7cY7y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G58Bk2appoKeQX57hseYrpaon8QRJErZLySRp98HspsoPo4hSdCBjvmSgWnNQjpNX9oDprJez2roxDxziECn1fy",
  "key1": "4E8U5cMYEAuenJ9AtBgKDnJVdcXh78a2y6gSN9aGz43q5hHdLGKRhHTUKsNJNnuZLZbMXJxNxU9Xm65x2w22Kemc",
  "key2": "4uNpF4TrbYn3NHMEuxg4QGFqWcuwMd7TZdBuDEVd8F8FVSW94dGAGs5MUeXdnCxEEFdBH3bNUCiMfsWid9o3tsDX",
  "key3": "5P9ZanZ6d43GnU6AqusV7yR7Z2NUqEmKHTWQkciBM5bfCHEK4E5RtE95eiHiKZ15xvSu8QMShtgM1hYf9DTYbCqk",
  "key4": "2b8LZmLsk3wSD7zadR9z9PnvvKpbra9d6A4Uvw4kYiFfPY34CU1p8UQsNG7LGKb5uDRq49tLfUxoDQL1qcuJ3REm",
  "key5": "3eaQJHghSrS47QDKGvG8ddB4vT5e5imdXqK8qH93zhFzwNZQ44PVcUYiyYXjP3jF3q8WebjZN7HAagWmVjPN8M1g",
  "key6": "23KGEuPsJSq7CNi4gnjUXdap9HZPv1e4Dgg2P8xyrbbkojHUQrBuoAgexkx6yoguRq4kzikhjqvDjDcYrmha44FZ",
  "key7": "5TDMBJLMTegNLFo6a1qfxpLNmFTbrrXNfYvrYiLSfjmGcoHuXLyc2GXmEDkGUNPBZdWJmGAkQNx9MoH81AX1HAXT",
  "key8": "U1bjLDetRSLpXfs7JGc8ewcsfwio3ap1E7jMjKB5D66TwXzQ3N6G9Jcq7npyhC8uj6WYfHobTsqrPpbxajg6183",
  "key9": "5DaxC4oyAdnmaqnrmQU2z23wnqU5vfHGR3v2pi6QZKQ5rYV6tqdGqvDi6KBGpxA6Q4xFp4jGzM3Rie1RqhU4bM3k",
  "key10": "4RPTHpEgCyibcA85VR6mJj3qezEJhx21JNkJvmEsR8CZrrNwRoDLvzJHpuT8G1wLpQMnuR4YCCDGWSttRsE4z9Ac",
  "key11": "4TbhdZ1CJikYqtbmuePP1SgAHQHqzcVJpUT1hNogADpZzrndZGh6aUG45QSv8uKWRe4suooyoi65N2cjhixEeCM2",
  "key12": "3gCvZ4QRULoaJoPBuw9oMCNnGj9CmmSb7sQakQmZFaYAj4gC1cM4UK4a5NJk1F6rffBoKYUhJiPQAmUXLVMroQRv",
  "key13": "5mmEt5YyeErTBxWY3KW89eDgXzx3cnyoQhHaHmAG5wzQqJkoZkGTH6FdCjtab7K4bSfHH53jMFZMqS3gLjCNJdeJ",
  "key14": "2ibjNnciNzn8NUQ2Poz5CtZ8uqBKCH7WzQBnZx8Fc4k1QNEMdNSX4rUk6cDfY9rehadzHLn4FWxGXseP6AfzXAGd",
  "key15": "3ufmo2ZaNN4vpxXGd2kKqbc6fk2e9amVTfznEiAnuo2iY1xxAnNNFPfapTEa6cpfxrC88PZNExicjfq38aHNFPnS",
  "key16": "5cQkBugGANWnEJepkPJXia9i8S2ewN8RkksvwextrFeqEk5LSMsm4jGAKViTczYg9j8rFd3tMqZWx56x6fzrWCWG",
  "key17": "54wDyeqY8dtEbAgLFoFWriT53F2mi1ndq63vKihxPv95oyAvq5JuuBLdBxgQQLcsW3cKzx7C71oWdPZ5zGLVqw5q",
  "key18": "5NyDMgsxGzdQvhLTNKLN4pfnRnoGEQayjxa96c918sJbBzcoEkZ7Gx844SaCve8o3X9XsP2ef7VjvpnZeV8w5K1B",
  "key19": "5ev2NPiB6krkoxaf3CGQvEqieywV7KX9RUw3JvLyfwBbV2KCi4AN1Fwz6zN5T6Cw3mGbBPgpv88ysvnQLgUNZUPF",
  "key20": "5uB7wfP1V8bjt7NSLe4ZUwudHKYaQ6kYT9uLM7dTsX3sYUwUdLzkGC4LLv4tVnHpBNnXPWXwUzE4X5rgef8nunKP",
  "key21": "WpXvVN3crtNCeJc6eGEikoAwmcPMrX8kbEReunPrNwJRkRV8kQNyMScYXkgxuchaaSVKcyyxtgPoi3h26yM4ee5",
  "key22": "5Ea8L7Er1wLmK5rmwRDYcQDgzvv4E3iRJ3cJFJRkQUdGeZQyaffFgzsszHGqHaq6P5L1daZgCnqoKW6xWkwQsUEM",
  "key23": "66CfFLU6xsXTDRRrjj54mPT5r7aQqgYHQbJgkeiJLyvKQ8SMWFv2jZcTSBoHQz5sVxPFMryxMmWoW2AXNtURRCoL",
  "key24": "4LDejbyjKyYoEWxQCHbcfTat5s8eRLwFAoUBmkReoPdy8FBrJPNwp8uJrSgemPLJLuEN3F7yXFsU9837XRzwyDyP",
  "key25": "3kvck5JWSdbzX9kz2dXHmRAirgDyTFdWY7Y8uWL7SBBNkvTSpwDkXMKVz1DWPGNkQTGcHeKHNH8dcgnuwQR5EtXT"
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
