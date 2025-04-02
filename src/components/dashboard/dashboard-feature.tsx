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
    "2HJXhbWJNDz9cc8Ve2JTSxX83xL2wPjQAdwVHtWxRQZ26qZ6Yq7DGxL9jgpWq8Kb8c2ByoNQLzzqVbbutveSsQH2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zVeSk6YatYri8DneAFzDDMuutKbeQUS7zVyeuik9UDsqbFx6QD5YbykGAygBRT5a3XenL3Z1394AzvrBmrFNzD5",
  "key1": "3cXCXtQcgYU2QcUnE8pfkh5edfzvjNTP5qdMEc15PeQgvY9g8iXxk8ncsr5MsxTBu4giDqNCo3Sg1HeLN1UNyKZE",
  "key2": "4JqRmxzuZJECZUaDccwCU8HxhijcDBAgGfPBadxtMQVwEuWYjnq5LpHQqVTy6AT2xxiYNYs5ThHioq6Baz1wpnKy",
  "key3": "U6ttCg6kA4kzkjbVUVTZM9Rr6FW2Z96yDwN8v8u7QKPd5oXf2tH3b7qAAomiC3Bua1kDco4PifXQkVGEgZZa9ZN",
  "key4": "4jVbqtmeERJ6JqGznoaTNrzbQw6cn7fybWWEKj8SKEUapm4jt9TkB3t2Sq6Z2tjjk22knv77gbD6p6j3spAn5Sqe",
  "key5": "2qSay4RhDoG7qFDroFHYhTeb6B8fnsd7D3wJkjieLRasSViYWGK12hQfj4mFXscBiAooZXm6yFRpvpi3YGErsBGh",
  "key6": "jN7G2KDS6YWqiAPAfKxoU77wjV9B6aTYKuoZCUCxMnyvFRKbBhZ8pP86dGa3NudsARJabeWMcWNpXzScQ56Xv6x",
  "key7": "4WGL6cFbBUw59xgvgdPQ6i5oNJ8BBvqq1jAs9u4avuWxYMLRxKQRk1QQm77L6AhdiuzmzxCaFJNFHL53kx2XK5jC",
  "key8": "SnmH12WjkPW8jfbXXncYFH9XCcnBPDqzeHGvqkwyFr6L8B1szkgfpz7uV5Zc8fgbrqorAnFr6vXBVodttr7Jh1T",
  "key9": "35ZjaLHAmqksCZT3PigvP7LauBs2wZeX6WW6LcbXXN9HpRhS3YyRVJ2JxPeBiPm6d2Utruu4JDrhkwyG9j36vqfk",
  "key10": "2xTCUFaPmjb9DzseXTBMuy41KskSxK5UpWjxTAYsqPc97maqRz1tGs6MjvmiWRZkdbNoNQepiTU2U7i4JGuksDb2",
  "key11": "5SoHBAynyL7Lxs6XBtko4FSn7kdSBFd9hGbbPEDQ7Xzr5iAsfP8PLjXL7s73n4GMha4dBUMDoMiqK2YUkyiYrAXE",
  "key12": "Zompshp7tL9ACJhHJQDToyZsMvN9CvNgbZXwYpYzPkUVdznrgwH56pztAim8JDRNDmyAZQHNeJtSg18vkJK5hyv",
  "key13": "Etw4mV15c97fZr9xkzzZmKVHa3xynSMVAYd71zSX4favvVKDunqevGJsMef6Si6kR5y743RAAoAgHUt7nbZpSKu",
  "key14": "3AwsZUkpi4G3obNhmfwXmTJravj2AL1BGWoGxPchNBBzHg3J4ihuw4Bd1hTv5FCbCK7jnzN6Mk8yNWvBJaK1VptJ",
  "key15": "58Ne7APtwfNGGMZrdyBxEVy8WtPFb1N1siqvmva5KTU9Q16xxVgejsrGMZuruwB2pd5C7NjpxsSBoX3fn7SQiykV",
  "key16": "2zfWQXw6rwqcpmbFkC4XyKp4hxFyZjZvRbrKgRQn3jH1oj8KyTn36cuXaWru5gSTMkPxZhL374mjN7ZJ9m4oknMp",
  "key17": "2Wt1T3CZTBQbJsej7XTFagFnkTUtPQCYC58f9s7iUMMhLf9BVt3no5zSRg7bhRJmt8JKVy8cyfEc5N4KD7yzLq1H",
  "key18": "4rw5uuqbt4nz6CEn6ZMb51UKN9ZuLazmxtJh8cKaVzMZ2KHZpPcHDAUQQ2iDcp7XR39ZnYPruKAkdG5Z4HRGmR2Y",
  "key19": "5Lox5hJWKmExoYDE8kyZrVHuf9xAXHuMD4RfNUwiqWFWJZbyTcZucw9QTjvDGoBR8VGjPLQdTzhgxMvA4q6wEPGf",
  "key20": "32kMXK64fcoQa5XJaWbhX4bqFmp68xgrRDq3CkAGd6N5AZKfTUoeriK1h9BxZTzaCKnFCUzAdnYNTU8NSsaU3gM5",
  "key21": "4RksMSodDfQZZqornK7Jv6o5f8wjYBCzkRhAs2vFhjZ72j5KMKV5jSNq1Po6NYPJE44Cci7UrKo2XGTx3cXHbEJE",
  "key22": "2gUD5tAcYY6M1imbAmn5w5bhEvFym8PuhaKMcMPoD5YjgehkQXDxUxFtSq4gfzSnUu4MNM6TGEPUc5F7xLNTPZ8n",
  "key23": "DVeM9U79kpnDvAqrr52xH8gEs61wN8X4djhJ3WGvymM6625JRC4TvFuAf8DvRCoN8yg7wZeSDG9ypkJKvU8zF4k",
  "key24": "B1GEA9j1YHWGXthtSGYbrTjEoWA7bEXxeW2rtRLXuRdChAU3xnTjvn97h5hnbktTYtkXFMHSTxqJKySTkW4HDg1",
  "key25": "21QkdrW4CEFuoMfKhVUPbWhqRddiUcFLqGrEK4mmJkPAnHvN8t7ijMAsdNHpawUX7pzo3JpovArSBkGV1quDFkep",
  "key26": "KnjDBVKo68ybx7Ec4Rr97aKVFQBKVTNuaXdi57YvPsXNvwVDrV7u6gwwG9QCS1AzR9Siy7QwuwpQfJxjNDy7jH4",
  "key27": "2qfpM9mP13mgpfSgyXvwCYuMM5KSSrbHrkggxQsCyJWsiKi9u7Te4ohSvJzeGFFBXN1PD614ZdFBroY6oK6ntAUt",
  "key28": "WeaWT6W4zaRUuKXwwh1YDijor62RJwdDPN1ktTi4KtPn9UkBbf2xX1rzHsB6hCT9dTsN8KVgyfVG4kDRnZfRfLN",
  "key29": "5omzxtcTiEjbHpJ382pbiNUCRd5KSa4TU1L2VCdpV1TTRJ1XST53B14Pp2pM5b81G6WcZfvmXWSMuhaSpMSwJe6f",
  "key30": "5DERi7cAFuEfnYysmYQcSUDx6TeoZWzPDTv6ypp7axfr6jZBU72aKpfk7ZdPLy71Q2Ls88C5xyaQ8mvMtSSeSGag",
  "key31": "4qC4tDFHkevveDB2xyDWyJ5CSwCTKG1gWxfiQ24VYSscYASmv25kNxBq5879fHvB6cxhBE2biahPjBcp7zbWPwLd",
  "key32": "gHwg4VSCoV57avwWq2zTWbBVnATik6YAXf6HSVaMhSe4Srar8vTAToiGMztuViBEdK5apUtH6BbZuX4sVRJfEFf",
  "key33": "2PnaY45ye3AywJfFVR84APP7K4xQCruhuA7Qu5rPBP7wVJq7UuTFmKBDMguB4R2YCbmsN4u8YrN5idsLXpJrK38b",
  "key34": "5nNo51WySLx5smXJkK24Zo5o2db9x4zkfHAK1G7HjYQfRWPyu8z212Z7BYwzKBnpV9kidHZbwFpUPZET4AT87Y3u",
  "key35": "5ci47f5xVYHqcCJfZPxbi92gzUN7n9NWYcDj98oFf1ry7fzweRfHTPqgnnbD2PGEtg8Xbucu5VcssBqcSFNXn7uC",
  "key36": "3YgcM49sCC8Vk27Nr9AwFYxF4jBQHGMHCnYoQtxvfmSL4jfaQY4Pzjijv8bhN3tRu57zThuejMsRvfVJ5GBXz8ht",
  "key37": "59YMeJkidA928hYw5BVmf47Ua88V4HpVPg9ZfugV59iGhBgHRQmT9hfEMZzz9p4RgkUiQukqPrY4fxm3EfdkVV9C",
  "key38": "2UY6yHhXomfSgxfpLsNLEbAnUnXx1zsUaiGc7VhadBhzorQHteposr8jkipAHjCazSjJJaRk4iUpx62AV5i1fL7e",
  "key39": "2eU5hfhhK8CECWpTcAzkXeypp4qJHb8DJcARuVtogJ1MDyJ946n1yZ8MUCf6ZyXjVQ5DYGjehru8XmesReFtwsit",
  "key40": "3LqrHzKLZ3wnuqAxyJXkF4zZawTzf49RB5ADgBKcmz1CJ84wwDrEBZYgG1ynXuw3iqsimsUPvGoNnQKqEMwJ7qq8"
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
