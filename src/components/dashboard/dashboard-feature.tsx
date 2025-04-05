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
    "3jF5Y8vyVjuX6kYxS7kdXg6dyPCLhKgqK6uSobFihhLewP9zLNL3s4QJY7oUXmeBw65mYwCrgqGKMJ19MGBCUgmo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gcETwRyPgxMntJQM95nudKNye3ePDGAWeDrq5SPrtW7wBnjKZFpZ9wGgu5uq3SYVwQeXasBjFEbPpk1khgxicV7",
  "key1": "1yUH8FE3AvNteJxn8XgNGw4JM8N9AcznRniehQS3ix22TqSVn34k1KiMmGYCL9E741ro1JewbXPgbnwtUCF8zao",
  "key2": "ysTHPq5p9wiWdixhGqxxbTAUrNvABVJ5fF8m8Bcbhb3tAppv4UNyjSEDZVsgAmcqPnDTXYT5ov47aN7K7yPyXeX",
  "key3": "2AeFFPbT2wfdz3JReyinjJzVXgTWyPrMvzYxoi6Mxk4ZbZ1aCZkUTcmqHtS6mCN1hmTkbcR58JCKLkgJUR92wPWf",
  "key4": "DN1RUobZTxFZ6NUas3mnXpkKqtpakEMV4n8KEoGSk3vjkcPd6Hx4y8extDUrWMFKJY6mFvHXsuji94Hp8XWUipu",
  "key5": "ttBFXRKNLGD3xCzcfzgDboXPnJPASKHsDX6Zk94BmXhYjtTVNz1XGvXscmcUf28nGdqGpsBL246YhgaYEuBvLLf",
  "key6": "5FmooqZhhpPWS298NAAVT9VgM7R8X8Wbr15hrCkt2XjzsyxQB1BdVdSJbhmSdDJfHZjXtYg8TQU1QHm7rZSNW6Ti",
  "key7": "3wdBrwfCoDwgJRp1w8Z22fCMtq9YCHRJ45qEFSHm9FakoSeYiYoukDcTrqpmuGU4qbyg5bwzZDjeK7S3qrZvw2pU",
  "key8": "Gm3LnqM24cn8BmGiJA9M4C67Cs6vmeeo48KQQksVMUxx9RbpNTR7XwpMKL6bZw4NUnvTVyC3YShNBhabUthpxy3",
  "key9": "5wjUcgD7orJggd3LPKTkrCpVLdicX8BjNKvuXVp9b2wFB4bXTDLqKCpzGUfE7GfZnbomRaXVg8AvQgmamzu5PHYQ",
  "key10": "4VHKoVTa4hVKgqRWckr5oHVzwdYG1ftwcuEVFEBAHnbtdEiL2ssBudmKbh2bRKELWCb16J9UusWo8KA74wk8oGNJ",
  "key11": "2NkDF7tGgCw8PAQWr8fwYwzBmEApVyssREdjuMkj5xM3r4HozFuz2qwPR6yATevX9ydTaDJ82dHWb28d1NGsips6",
  "key12": "5HATun1HCJ3fNGX6ryZBcej8ncZqTMoHcXQ3srpxVNxQoqPRkiEYBfpCo3UgfuzaArZaEXr2DJe7d9fHtS5og3j2",
  "key13": "4HHPraqwkXQC2B8oucrn6U2PjMNNYnGKXLvRGWqKV82Y25Z3tDo78QY7Kg1iQLjpBUPbmHHwos6SpqwGLMEKJ5fH",
  "key14": "3jbwQ46rgj7s9SBRR1FbYe4ajDGww1RoFKsHYxdokrXiZGLM6dM8pFDjbLXtwUh8kzCkQr9tXqvnaf1m36hQu1N2",
  "key15": "fBhyA1dhUYBRyd9nWbByYKTDiWMiEswwaqjtQjaVewc7NJwwriHBNZ4hNgSpdXqKn81sEcfvu6yeXdyEbCRVyXD",
  "key16": "4UWpxCw1JZgnDn3cTBjKg47F4gHaogdTujMhLzbCmM5Zuj5EUjgzMWhhWDnCSPgeGdedxcEDwbnB7nUReJUiQndg",
  "key17": "2JkvPqw885bpZ91qkHftL1XCHzcdJbtzLX6fB96Kukf6XuAxG9N9kTsUjWUzYjKrS4qThLfPjcsH5HM83xLENUcX",
  "key18": "3yoADLvNCxcu5BeruFcu96kpwaLfexgNneyBisxiXSRgCEmWK8NEc5PjZredj9HzGC477BLEtVEkow2g44QpbqwN",
  "key19": "7CwubWjjDrW6ERLS7RMBd9vkVyE5vZayD9FMfhtzDdsWmrytxdkDWxAHVhKoWBj6Br6bWvUQLyP1n3c8TxPL31j",
  "key20": "29HsfvvpdJQVxysB8wEzJy6c1vMca2VHjqEkdH5GL2pRYtEc2sRmkmc5BJv1VLUq4paHBQQke17Un2i1fmdCeC21",
  "key21": "5CFa66qR29eLzRnv5nXsDRVHjaqyyjhXiXpgKz2A9aX6t17e1rQqPKtvzgQjiCCaJrzn7g64Tvfpy9Kferk7LFjB",
  "key22": "5MsLnDuKvz9za5VakjLySQJCZ7yGPKbgiBPGT8fxk7JN4oEqkyk174qEfuDCyMWnt3cFXQM2R6DGkjuGULAqvpyX",
  "key23": "2UAarZMB1depnztdQwNXpJURjGnAGXW8RGq8KkRDsND7Nm8djzDaFrR9F8QMaQ9KfJZQL9iJJohjXVpLsKKSDkoh",
  "key24": "5iUzhe2BSx52HYX4jc1bzoXEY5FkUD1bTjrSAm6psJn45U7mUjYEvBdbR2v3NeTdPxmyCe1V7J6eXbAG31sG9xUB",
  "key25": "4DgaC4ikVwmCid51ZRQgyE6PCnzt1MVFk8nyCxtd9qXwBNzHiBksFRvCpZHPzpumJih26hVwZgjm5Sx8FfFQ6Ga5",
  "key26": "5tmWExCMrEsiphsc4xxNwA7tyaQMbyUTYyNV3J3KDsnRPSxFyBENrHMapCm4MXXywEgBcCd8jQ6WqF6yzSymgUNE"
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
