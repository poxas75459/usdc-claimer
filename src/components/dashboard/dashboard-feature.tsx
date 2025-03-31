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
    "41vDy7JM7nbe1rRyPdqaagMquGzM3rjz6kt9EM1tF3XzzZ81p17dyqg12WNJ6S4frprZciFKtG9u2f9ikP2A29zt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DWQfboMYc1d6A8Cnm15ouzeFuSMLo3EFftB11ToSJ4ExHJUXTU6AHd7o9CCkaQtbMwSeQA9rw2FvePEuhetfTc5",
  "key1": "2E2fNiB6rQG3p1rygfipk8SZzS2Ex4ztVdScCCEwhBEhBSqCCNJXXG5Qr49mRTJvzzRPHrHdRAnZiRJ6o7q6PBu8",
  "key2": "5Gtc9ysuGy6bUZcXbWntqThzA6qrZQ3fTZ833H4Jq3smYWYPUbPFaUUqxqe4BP38YmjHyEWGCcQtBVcZcm1z9kjj",
  "key3": "4VviN2Kmu8vJrCbuBXfWzndCmNGMjaqotukseB9ZQqZJ2CheRUHxXcx9V9fRCwZ6uhiMEKXS5h9sKznsRqSioX2H",
  "key4": "3rxxorKzCgC9QFbXhzd5og9DvdwZxjZ58GvsLkCePMriwv3dJ7zcbkrzNsAnZwJtKqA9x9gse2HusehgnGNJi2jb",
  "key5": "4kgHAJJowfNqrLvhwA8t7omEupTRpmHELWD7sEpYUSwS4MWdzpjMa29gC7h6GxFEj4GdfxuDsZEaAEDEvj8JQ8Ma",
  "key6": "3h6eLSRyuFDqkkBNMwD2jXzm22RVQP5zUYCT9SoBrCcYtaboGPCS33BUiTtgbo9rh8RHXnF5gXYpaw53evJ82WSA",
  "key7": "2Ji2WVdMxhnwsLSZrRqMQ7mACE8LveV5dVZXxoQ8y3QYPSQatMN3rJoov8Lop2mZWTHqgh6eHiM9RACpDVpdu8oD",
  "key8": "4DX12TWAAUqJoPqLWo4zihM5wajumafN6QX2YWqWwbn9YLHYSX8pjvjzareifhru5a9D2auHeg8rUMtK17Q7i8zs",
  "key9": "5NWMYxCU5QfFHrVYScTCDdAByJxd2xkS86AZWLVd4dr14bUPUfsMurZsMQ2vQgxCfcwE9HpR6TzPdcoL8nAEHYWe",
  "key10": "3cx632NUdPKP9V1jqNew5WXPymhxxApUdkqvDDco1VNm7iTQyPmvF16rZ5k3jQ5GywDAHCmgTTU1BeURKjahsTxf",
  "key11": "5BreMXMP3P4hdzJDSzqpRZ6vUKvEPij6xt3CCaac4mnTTj4ujpByUViwvSZgBHxBxPRk9t27uCkBrq75BYWrSNjW",
  "key12": "5iig8i95oBWza24vvSraYG9ppjKHRV6KdBnV6g1ykgut8qTH9rjXjWZXdsDFMKuhCpVnfbDaVt5nEjkHGLQGYaGm",
  "key13": "3ZxXEDaDnCjoqiXUtCTcPRkinb6gpartSh5QHJUumJuctDWfhCsZLA7GyjqgCJZ8u8XE3LJfNTsfPYawAwim2gW5",
  "key14": "3k3XkTYpzUEEYiEJ2m4L31WKhPoLyKAugffA12wMhZXtzJjMrhk76fLmnekyGHeo14CBA5TPc7EP1o7gnXNABaRF",
  "key15": "5sdbDVaWnyfqZjsMeyCJMq4zvKJ9R7hwsGL6JjgLiaavinkptCtGdGBKCoa3Ru4NMSw4u9ujjM93x97ziJ9coF5N",
  "key16": "4aVyuZSxqS8kwqfvcifVuWLh9pj3rwk2FKX6rsKWoBEYHYWVZhL2QiY22ZFGHnd5isiPkkhRH8G6Uqm9jb1sMKA4",
  "key17": "33upgsFraihLUW2zjY37evGDum1R3j5hYjs7T2WJds77zt7ofZiq3ZSJsRzKitYjUQyeC4fVdS5Xs7oT79a1WSuR",
  "key18": "5nDB1pcDkkab7tf3ucJ7fmckTAiHk4ffoAoy4du4DrbDs4dvH2ncdciFTsmJTe8CqaXU6TeGjbvQvjdAn577km1Z",
  "key19": "55HKETTupQepeNhweSB8kQZmNrRvQPrqby6kaS83hdunroFugMdxKL9Y6Awe52xcp3YfM5N1umvRRXX778eoBzj8",
  "key20": "4UfkGQzgSLgsZS8Fd9D6JtDHCernPcPea32FBuU9q7VDMUB9VuMR8qDRYCWcGQDfqGstqs2hyxE6W4rHb3VXN9et",
  "key21": "1sbr5GR1mWu8vSb9dZoFx8SmSfm9eYsuPewm9nVwg7WpzWx4YgYmAxQkNFqbcgZN7w6MfPc7xM8KAVdnCV5PZAQ",
  "key22": "Usm8PCrvStqcjBtsvz17Zr1XGsmG4srrBAd9ddzTBLiZ9CvSdGj6PRMHougChGAjCVnFVX6z1xwERKtzDQdx2zL",
  "key23": "47HvC2jjoaZrziNAPZ7N64356VNhc4ovFKRVYErCQG6sSqXGfY7uUN8F7sCxnSK6VJ3LheGKxHZw9FdZQBa9HyLZ",
  "key24": "3Kp8LQALKECzZ9PE3T7pcnY6M23ZMfyCWgNeWHLQj6SEC32Rsdb7pdvK6SmVoEhPsvGyYHWe8gpXcqhGXsA98wjD"
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
