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
    "5hs75998HqrPhPrKbihTCHnAaodCTgNaxf9uu7efxWmjLxB5MsxomfUjk5XU6NZK4NnPD6Svg5fTkRJH4hj3CDL4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v2dB2CMdq7YMhDAFqYctkpdjLEsPTGfyunCRPXphY9AqbP1BgeUyZ2VjxUqabmZGZxgcqxu5jaiXy1NVrbRhuJN",
  "key1": "4YvQTJn8QN61MgE4pX4jLezGbAfFqTcLw9gbBKifo1BYYpgusGLufnHiRPFbSSWDGaMfNhCuab6jBZQuLL89jrTn",
  "key2": "Qxaw3gxLeDr332Ya58p1rsAaAdk56xF9jnrggyiuFz9pGiYYmHHavWmbAB3Bmxh4sA7TZy45UVbem7a1yb5ay6z",
  "key3": "5yK9LaqvkCHYmA3ujPzL2vuZVRmbnrPTKbhDezq4Nb9o7VCSGXX8GyEUBFpYrtNY1NSNoxrXwLiiH5wsCN2xhvKf",
  "key4": "62X3dGsikxJvq1a6rkuVL1CD6u31JZnfj6PP7bFN19cjwGEcsGeZs6LgX3KqvDBBb2GsxoqjcZpvrfSEaqxeF7HG",
  "key5": "2e6ccqJEiVDDfB1AhKQecj2CKXbbL3YcDKHMTtp8vcugKWHDpeqZpkGcWjfXK3SHLkFTi1FqW5ee8Yt641rpSD91",
  "key6": "MyEC1zfQB4qoSQioh3EtRq9doEcUq2eyAxxqUHPFMK52LhTX2xsGQ67CM2oYU3KXpYMpZxQn1A1ykPgxujhLGDv",
  "key7": "3um7KyaUQcENJCZY8dNLkUAtCeH9j2WJJTaRojtNMzSS3PMxG1EYGq6FWqigE1nZbiB86sYk7aZcwbf2euS19o8v",
  "key8": "3fJo7GLptSFNiGbzSE3WK8GGYHcrz5ZpwWd9HxwCqPks2em8eqjVVNNP9zJPe96R9psjG2hPWr2qJ63zhC2WQSNT",
  "key9": "5pNgLPoSyowN9E14Vn9axykdCP4kL95154zePkRTZSTAccGcU8P8Tnr2WBXQjc2766jvLG2hs4D51dZcdncwrwNX",
  "key10": "2mMZUUgSdyoM4SQMiWfMvWAPj8xD65rKYiqzPKMw7KwqBebwUAypYGNebaZeiWm29vJMJwrF3oxgURKKqxKrxMUN",
  "key11": "5Miu9fnsFSEDgxEmCBAVvHFrvGJL5BRWDbJnRSX721qagLAinycSgoZNQx9FN19wG2LUjwL8ZhHZEqDnwspnHUpq",
  "key12": "4JaadmR49q4fYSkG85TqVPCkpMUx9aW3Wc2NbCTnB6SMKtY1gTaVkstaoq55np3CKrimatWZZb5Sg5TCk7SmffbH",
  "key13": "5Nok4ze9xVaqpV8GTxbpY1MhysAEkxWrJVkGZYhSLY3QNHKNQhoQNvxcXZ7EPDUfU1YV8PEZ4sGvEJPBiawP7Pwd",
  "key14": "PajkrxhJjHLucfgFQtJfRA61jRPoX71hk9t2JXu1Myh2yHHLZVtpKMU3yKkSiRwjvpwb1t1ceDtdefvR9sycvUN",
  "key15": "vqSSbaH51ZthJpCo3k5eyqxuqD4R1Q2orCLWnBW5hP1CGism7AmKAzEYXoFvYGRqVRQN13cX3iRP2Gn81ebUtXt",
  "key16": "mJTsm1LHczNxpLM43T49CUTbULcFuT7FpWcVy3rCCr1pnX5W1RyQ8MHoYFiQGcccajZghvTUXX7pFWcsxVKN9xg",
  "key17": "3X16C1DZ9WkPBooWHjXTM9oFb2S6sSvoWwrKBmYmkq3nzwYwbK4fD9Zsh9zBibEx9HDB5QTSEJJN1vnwTATNbQW8",
  "key18": "RSUnSThaztS3baiLNvEn5JHXdJHGMmLLcENLdD6Y8XfoawV2GQ6byCsyLX3zxxNsUnMhbjf13jej1fUeg64Fzn6",
  "key19": "w9L4bvgeWEMi4qSgVbTgeuCL2zSsM8kq1yB5sk6NbHWA8GMiibJYHTVzUnQ4yhBinKJR5nEKpbGfvcckmqEtbzV",
  "key20": "4FePG7VpjHG95YsxvhYNuEfau3i7eeTe4r3R88Sqquzx9L5YjhY2yXztFvPJSGVeXhWuReJmKf7JfZ7HLyQwviNT",
  "key21": "3xQm6cZ9hWVDG9XXiVwomRMrnKCKKQ2QRAytjiVRZCWXxvZ1TaAJMMrqtU4919Hq7FyixTZZTNXwi1k9Q2e3tZYV",
  "key22": "44bnAg986JFfTPYJSWuafcuoBpx6nepYWHUSxy6FfzDHy2KaE7AKm6RZDkPsRqHGzCRZJ2Dm51X6waQuWFot55Qj",
  "key23": "3e9PKbiMHZqeQF4seeaaapxHw34ACetNGB6YLEDUEqUxmMm5uUMQnPWW1LfoQfLTXs9im5A5HuvQwinAkNNqUXC",
  "key24": "4EnFPEoitA7DXwPEbbs4VF6KnzzapERzq2LtPGdDgmHdAcjiKrcfkseaSgheU5enSNQn7yAYroze1K9t9GGerbNe",
  "key25": "2MzAeyFQqhTDqk2VBHBLovcydYAJa4i78AQYkt4umykF2ww2ajk72qpvTJHzEWGRSoa9fCf7D5YugrMJ2ArAAh6Q",
  "key26": "3mLBFek1vH2oHvqF6q3wMFyBEJfqMMqkQuv4V1gHf12xUg9GspaFTX1fuAG8E2ix4B5q6vkP2NTrnFqpaUHxmumn",
  "key27": "xgXL99LkV1HtmsTy3BPobwpKMM6ZcyzzNg4BZWkCBsj4TmZ2MpNwq6kQrKUSk3GJmeRpYj3mrH9nad9HkSB9wff"
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
