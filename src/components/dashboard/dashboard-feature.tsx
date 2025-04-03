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
    "3i4T3UPDHGChzUYAs1b3ydrirURLemGeQ8XWw1MhijVxxMCLjygzbznDYMFiVBbiWxFMNxEb9aMzUqMhx88FfVBP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NTwe5zS4V649uhGaaWZFsRMSVFfjvDmDgkvkA5rCG5YLiwm6maFFUrABR95p2duCD3xZ3tTs4o9FMixuN3KdLeG",
  "key1": "361tMC6eUW8t8mwQhcsZQHj2K69xHAMMkbj24MGhYd6vaA3THZkkEfEEFdBJoodWbL9uiYyPGESH1mcPpNTrcAth",
  "key2": "4Se6tG4LCmtGD6xCk4PJYSDve5y1W1twpbaV6raPDkcvAuXo2jLa1wTnAYgcwqpySNcwpJ39KNCQnxeJ9k8E96iY",
  "key3": "34jpjov5iimyyW1V94JwhBiBh6FegAUnshv42QXEYUYM69sdbGTBG5UMMMDUZa3QyC6UZaWXXubf3KwVVmiDYhgy",
  "key4": "xihzfqSLumxB9sipKahRt82aEeKWJZR2fVMaRwJ68Fj6FqW8hP3aPF6DbFvhGmJHtRTUsqj1Xq5YuxcoVcZ5dqy",
  "key5": "2URpm1KJjTRfZ1NJtWfoV4RsHywMMWHwZPxtxPqMdXMvfPhfVEhEKa1ZFbSDrCyt464oBiFYJttLnVwcnAgj4tD4",
  "key6": "6uzs2cBAxDWJW9sFTzHHbcrwF7JXEqWQixzK5J2QJC1RaTKuSKxpMxtemd5ZNyDbGasgRV4iRGVpff47ZGJ1RHx",
  "key7": "KTnboBkJFag6pSQYicoqNRcMfVw9cNsaext25seAXQvk5ZE71RtVtahT5Eac7mvBgBUeT4YeV7Lq3j8t8UW7Zpe",
  "key8": "3YTHRc6kAoJsYbptRxpKYPp5U4oJ45DJ86HRmxu4b4L7MU7KXcAf21KxcVLM69aB4BAPbhNfqV3QkiMBYWw4ZxYj",
  "key9": "65Nrbqcj4sAFMYG6J9UuwUj82Vj5hVyB2mbnkCRQ3Uyc8Wci1WGjAd5xxV6TcxiDVKqpB7dWn23T1FcA6WsMx6eL",
  "key10": "2mibiWJHYvf98R9LZSiqL95bvRUYKQSoC7UcXu7odhWjZ18mdMfBxvPFEZALi2g4XgBxr674o59ayeuhfvG1FaQQ",
  "key11": "2umxbPTKYLLpkT5rWvdN9KBLioC1SEm5Up2KdKQtRqgVbtjLJywb5G4XZaXHuvFWns2BgeWeNzQuWw6HApe27Cc2",
  "key12": "2488P51NArPybTUpd2cRJZiSVMm3bVJ3EraBjgEJmAYx9RfXf4h7mnak58YyMiDyB9v1nFwv4tWTmwQvWpXWDVEr",
  "key13": "e1dEEbuUhoCEQoDmsjWY9Hg9ZXV18KNjXGhMWpCnLAQ2afFn8KjuJnQCAVtmvL9wFfobrZzY445jgd6GiEQhQCn",
  "key14": "8ppFcRDbMNQDrMJyVrcBYbkifogjG4n7zADJxNzqTJadb1otrSotBm3FepfPZxqWt2NFXNYTMHEbdTuwiLam3QA",
  "key15": "5NYnjnzke7dvk3jBDDrHMLysfUoGAYkVkpHJKCQrzgdXWjEpQzLeo4eShsce1HNvAwCfrHzQtVfboBko3yLfNXRZ",
  "key16": "4FtuqC54XMBx6gFvdvEQThW7QePeRATSeuxTCufmVZkEDj3NMMwXTAHPZbKenuvgP3rcxTznuF1bUF3Tyrtg6B45",
  "key17": "eTYXXNEX9nh8RVn4W3uDFXhE44Xugp7PPkTYwTu55XQSAPEwU2iNWTdaxgDcqHff4HZH2GA72KXZvpghz49Xq1A",
  "key18": "55N3VxvX7u965QHvEUPj6VU8eV1zB6X61EPTj1Sqi2Zx96RUZJaLMPhv6BNFfS7Qbh6q8jHQytjnE9jhvUBFKGuE",
  "key19": "61K7oyuhekPB7oD9BExGRxjbGaZjcHFq6CXAo1er9uijeSWXM9TbxWV3acZ4WWivVp2WdPfL5btcfZDHACWL7Fs8",
  "key20": "3DecugtkfgaK7TZWQL7xTvvXE4ZDNAunapQXZRTVnkwkzTh5G8GY2L5ZW4ufhMGScnhw97eqo7RiuuKt5yjzLhaa",
  "key21": "2M2MxBPrGU7xD2CapUBde1EFcmHwr9gMC5rJ8nxi2Fg3G23R2PKY8wz64pv9BAqkxMKdvbjk7sbvkeu7TRt6xZ6K",
  "key22": "5E5QhHGxiDhHnBaVoE7SpH2xkrLBRqbWRwhiieWUfJcsaDY1SpBu9FcdTCec3hG4evEeMwSZGmQQmoRiYprDsAyt",
  "key23": "ya2nXeApnP3Q7Asqwtm6LWK5UihLZG5nzRamm1aQbEk2jDfLNu9AEMjYuJbC3yS9jUdyaHwX8X6v2votCqRk62P",
  "key24": "4RLKhaVf5MwRFHf486PVfE7puAEDVb2sKTrHf5YqtEdM43Jb2saQQdmT34An77zX8AyH6utLrWZdQcGcrZumHRWp",
  "key25": "3qq8Er1X32msAKdXRkY7qN2hTv1WiqTgsGfhDkKoiA85YxpCqKotNw44ptLtgA4zji25x8iiHisvKKcUf5i9dh8v",
  "key26": "4VvyxE4QDtFhHf1SdxUeJwXuDZzeAz5a1GgXKsaUb96UBegkBXXfmSwseMDu4PSoNGZ7eJzBMNQCCBi938Gt3VVC"
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
