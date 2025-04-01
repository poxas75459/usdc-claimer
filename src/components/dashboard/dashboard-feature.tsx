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
    "3ogyWRc9LDfX3CZapzVoG1QWuJ2FXexJiPYBFqpjBQMMTkYpihyVZxdbJ8XKRugqg9SiZqP7ofJC8xSsWhC4Rio3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YoGJZWountjKw2a3rxtYPLtj96AdaaFSog4X2V1ZfMbP8AcRUZMdezyuF2FttULSy4nJ5Dcerfkg4yBQZsxiqBz",
  "key1": "5uB7PZFKAFKN1Jddo4Rw8D5A5izREvhKZHYB6whBfRU231Jxott6D4rAzZbpUt45JeK5ZtaMQP7LvpGQiM2F75nW",
  "key2": "37ATrAQY9uKrFbBLKwwN8Qyt5Skcwvd1G2DU21y4MAqKwmQdijvk9CFjxAAXC6EpFjLKg3mx3qLrUsVoiRYM7ETE",
  "key3": "daMApfAgGLrLh73ZYdP3mrpzEiUPvmo3ss7HnBCfdLLqqB62CR5dgHmJSziaXyDSCfZax6tbdeEaXvRbmqdFZ11",
  "key4": "3fXaJzXy1ibawNLVTbV2sisf1yr7KfFtoPuGUDs8ugWUAed5fFT58szMSybkVwEpjC2TbdYowkA4DcaVQGXLzMxs",
  "key5": "5QvdX6jhJ8Vf2fhSPrQz567sHoXLZmHSfWBnfk2zsNQSon2JHCQWFwAYVEVZGg5Nx5ikqnv6KkUZfNKq5bQDs8e8",
  "key6": "kJyHj4EGS1J9wydTB8scpZyw4uFJxm768nhF87aHa9RT7fgAw8FKn2rFWs7kwLVjyEuVr7JAw2PZTJAicCjV7eZ",
  "key7": "29CrWc6AZXcky3s8jCqJZSSb39ikxkyBEnVBV5iUSmEgsK3r6y3ZkMYLkkgUdWEDrQXraX1T1yurT3zzr9A4nNKN",
  "key8": "2yGdPCeADUMrb1QqreWQaHpCFq1QLZbt3gQRCvHFqWYV6FiFEzB4YcSLUs9zJGKx2awsZAJnS97Hbkjf6uRaeiwa",
  "key9": "3BoVVgt4iCA2TzRLofg8xY9pPuQWxx6pWEkBe1Jd9LuCy2krrzsG4Rym2uYUjxXFjPwfzvvkt4LvuobVAHX8LqMw",
  "key10": "5BoKJwniyEcK3uSYiZJwyZV8S7ripxcupR9z6AR4ss4rx4RWV744DHf2ojmp497uGJyPL8AnCgFDipcwFuut8DNr",
  "key11": "3X6gqLXe8nEP89h6Q4gqBN5AhjPaXh9rCfWtPLoMuxDGrHwpeb7BHujF3VJBYUwib7kPFd65NpW4HLLvae4NEV6N",
  "key12": "2Fre5NcRAHFiVUi9ntM2E52sFDtqsYmu2LeGRxM4fWk6NZKXpeU9M5q7J8uzKgSf6PMNWUrux58aWyrokJFtFn3F",
  "key13": "4U5DcM6aRvGVc6JtqakrLWXrzCKg6xrLY5UcQYL3m5UTsjcWU2iYF6HT4DrM2YDTbrKyMttHurCFef3NZEvGU8yG",
  "key14": "2hFjcrTNTFozNryURJGKSR3sgAqTAwxyJUCxcHMT7AGScWajc12rNB9c5Y1hUVoXmtM6973MHjYwN2a8zfUvpbsy",
  "key15": "dwwtW5RG1QpxVApnsChcqHfAtHn87wLNF9Eg9GwwdvKcrQgeGSGU6cQXTrrdaAwrWVtq36KFmHDHkG7e2Q3h6LW",
  "key16": "pejm3maLtzwWtXxLW5HVi1njDT4XJ4hXM26EoHQQADhViZQx6vPtka3XraKpnd7kqHfRurrK9z7BmLet6akSR6S",
  "key17": "4igAqE1pe1CrS2JwggaRkyCcsVUWEGMgFhBeUmZSnXnbZ7PTVZE75SdJnoetrDqwnUNSUTomH3UQxKZYiupMSMo8",
  "key18": "4i17KTcXMY18SkHMarXhCRWyM54WH3V5zdWGXDrp4ErcSAdAiiD1bEyXxni3J8wY1JVwZsf15Y2ZyUTXiiitptKt",
  "key19": "3sQ3wAUaLt1Vc7PbGoLCVVAAfw8WjyAbbji1HDqdjXfWJQmo8bCJZ8wNV3Cpmz9Z15NWmTH3oKqWo8s7GACLc8jC",
  "key20": "3LGnWmirZtBFeF31BvYy6oFhSrD3aZn6sJndf8zuJJ6SpbQpGjVWWt7xDsv9MGYHUZJNJJZ1qQxydCZSDAGZGGzN",
  "key21": "PNU4NZKUDcjrPdGxXFSbXADBWdWHaPvoop27nj5qoRdMUqWymVf3GQN4VBhdChNTYYZi2J73gAd9dFfVTo6Wrso",
  "key22": "3dqbtxYecRZjrmujqdxUaam1EgWZyQaUL7hSTxa9KdU3eM7bsf9wbuUr6wpxQSKe9FZ8Fn4FqSuqvsBcQqm1Rq1s",
  "key23": "2T8J8Uzi1v1bzVbEJxa2DW9AjBQyD9B8U6CRXaQHSv8qZkvqQEpUURkoGnYUg3CP6W3MEiqq7vUjBJXcAi62CUbt",
  "key24": "2EBjw4cCmN6pXPLzaiY4rc2NtiHFsaphSPf2kLxmJEokixoJPvrTqf6na9EoKrw75FoeKAXdrAL7EgCLKf9GiUck"
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
