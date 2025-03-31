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
    "KPypZPjFsvfRs6UFXNHKKvkJaSRNZqTimGW3wjVgQUXGjE4aAiMACCmqjbgAcVuN4RyepHP4rir5atvdzrSp3gd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29JwhjXtgjfBtgT3g9MQyePzunJoLFoDjJoB9PLwLJLhme3ji4qTFf8jcFS2iPcGVsQhPjghjEbFTRcrxZaxGinT",
  "key1": "5BuBu4gVW6dyu9JNdRvV7a9edxQ8PuYnhvMnugNPiF9t4pZXWPGC3P5p5rYkcNMYGJM7ybbM45xXXtKHDCxTXgre",
  "key2": "2qLnAtzxPDfzXHRLezq4LfEfZ1R7XNUEtnDeojpSARBS2LqZAtJbkzpvJenHWKLVPvP5o4d5v3MhuD1pyN8xDJEK",
  "key3": "XLTLuLAMgezbbDAHAxujRpim1VXJgXtjhi7VEzkJgejXxNXspFLNXCX5oxVeE7mDs9LcbuyYhq2XWQnGXCgk1J5",
  "key4": "2H7m32wZxmiCQRK7VeVvXVAjJZVYMEWKaa7M5ZWaEJaJ8BwpaiPPHRUJ7pnUNXFGA6a6gA8Nw5y18KRDEmQiwrKD",
  "key5": "5yVxDBCmttwREiotDJFnYK2PSv2p5AXL3rXgwWVptyrq8zBct4KxWZuwsjfSJ6MRzoiCBKcFF3nAWukgiZQorFzo",
  "key6": "25Ytq3UPFqVqXoRScnKu6zohrJt2NedLHQuG6rwiR1t5iVfrv3SZXDY5RnyTwGtghRRPNEdszrxRyZnkJTY28V2b",
  "key7": "2iNaRSwp9w2DVspR8wwkq2F6CGtr53wapT1FQt2gbQF14R2a5fqvRLUmwkB6jjCJa8pKt4FnEUvrDxQJv3Nsct8N",
  "key8": "2U6UbchpdX6T5PxVuaq2Ut6sfqkYKsRkJnErmE18W8he2kJbdyVqtcsgL8TKJ4am9bc9q5oVTeGA3nH91qJZ8SUG",
  "key9": "671GSSkFjy9Y1d8U78iUW8QRkjR5ne4MSDFvShz8ifDBYR6fxoBoySGUXzi8Wc1Q3XTW9neXuxPxXVCU6d1BDvo2",
  "key10": "2q9kppbwy5mzwoCMrLhq1A1wphhQQaGNz2AGzC3uMzy5A5snp8FivMXPqAKHzB17GNdXPQ16Ue8PW3H8xKy4fhqh",
  "key11": "3j4iz922i7eWMA2Wuc9y1fEe1cutGww5XmQExfSdvCdgYaKhzS26pMERh1TSCyE6rHMGQFz8uzZMqTmP2tNuNvT1",
  "key12": "2n85GGfFbYQr2RwdKQyWjfiXhBSYTuSQHNH9uka3tFctpKpgzCPyA1cbDrMS9DDFcKALu7Uax6Mzw1jVqPZV7yaf",
  "key13": "2i7iUBcRHhHkMdQXQhf8xqNhnxA9Pqh2Ej2tE7KaPEwjKHkBi4QWR9KSAg74ySmo3TPcVdc8BuQFus8595Guw1C4",
  "key14": "khpwRfgSD2SrdJeKZ2FiuEH7mL7sJNbry16vTVyPJU2ftxVRM5d1gDPRmxB38sHBYHQuEYRmuaxrjSX536SUQGK",
  "key15": "HcCyY1XkZn7FDVcH9iw5kU9zpMSbLXJKWMzDLhFPEw9SbdA3VRzrMxMuZMCHF16d64LRwy1P5WSsukkUJUWk7vZ",
  "key16": "32G9MhdS7BiyvwBk2xkN66VAEZ7YPM2MRNH3DXxW7VRczY9n3YpoQ2HHYM5UKRPCDBaHkud2miF91h3zviQjtCuP",
  "key17": "4843hLNZEAHjjY3NxpgrAr3of9qkgvHJQXgXeeRj8RGhhzVavmJYfLbhjS1S8t6EaXTKqkukSvSn38y3kfTp57EW",
  "key18": "5WLWdMaMo4bGCFRARHnyZkducBi7MqdffRE7CfARdu6bQaT2dGpJM3zuHckgDwqytfsWxn5SC2EbNvwnYKrmfFvs",
  "key19": "6h5PA211eXM8CtKB5bahvr5v31aC6CdceBVkLLZV2Z434TyPW16jUQviBSchcgxYVeUZR9wo9G6VAJPwrY8n2AQ",
  "key20": "tL9ACJh1oMmKgQ5CZMviSKeBHNhBgnns6c7GBCNxFy7nq6SLVXuwpsoQhDjKEeTe1qxNkuKL1X2yfmcX5z5C86U",
  "key21": "3Sb4euT5WNkbeeJCnnrqrg5pZ4wiPzHWoYZ8hZZXJ7eyv9KxCNc31pCAqgAjHqVSUKhegNwMhvPf28i2e2Kb1J81",
  "key22": "51fz5nrKBFDqQHUi9apCRB5gaBLJxKmGpzndwyvPCinGD3mw1nLpDQbLF4XLSr5y9Z9QfvDh6hYdkD4CqfosKqgj",
  "key23": "3QMNqEdnbJhfhRZjQjbW9qeci5C9wJY3tBkfXDxYgeLjiBBCpQABhMQrhaYpgUWGxrTvfVeueU6sUQaGb9UQdEDd",
  "key24": "4qXYVYKfLouX2dgWD4neu52HwEzk3h3BrcTEQoV91XXHUFoiKW3VLvzBydB1a1rEQ86eVz6eVya1jfv2ukc2hLrq",
  "key25": "2UPvR8F2nxuGDaCsNwEJF7y9TjDtoENiTZ6TmyDkQ2bCC7BTxEfzA11NsiavXBNx9hqNfncbdcSzfaUrPWdoi3VY",
  "key26": "UmX4RGkxaUvdBvosGj3Ctz3qDg2UbccvNTra1sVHkpxtNwVKzjsRwSuUnAezLgshJnqMFxcLV2zYx6rFRuxAS6B"
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
