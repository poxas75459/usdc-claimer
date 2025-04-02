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
    "3kYBbPZhjvMQGaJ34VEjJRRa5nZgQbkDi9eGGXXvEhR81NXxAE376PYnqaHG2HicVjb8ksp1C26ZqiMxV7T2X5ru"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p54SioRrQ5MJeGWWXwEvNEzjwFL6AstdpQFmDD8428giakcDGpL7uErhZj99pyBNmMhxDKxqPYiCriMuEpMYdJX",
  "key1": "UDhEAsPSRBrjuPevBqScnJ9oKVBvHS5WTSWUPiQGxdHa42WjyMEkG66UtBvmnSoGuJYRdAxoskxoLrdsV7mJCQn",
  "key2": "5Szc69VsCZ6fiQ6fzpcAEAKtP4z43vG6V4kLMjNLBThJULqQcFFRDy62i55rsMHepbPKYKxMz4Xy5SjSZCDhVAiF",
  "key3": "5PcpDT4TDFjZaMLF8JRmMrb21sCMAQmDZC6qjNTHAg5HcJiPHZKRP1ERjNksQBtyC62U2yH6ECmFi7r59tx9JUHs",
  "key4": "fwxHErmaE5R2KP71frCLpNzCLFSR62YYMnGLo96NcZHmKdB4YrwT81NBjXLdBZ81CNRoSueykuNnNmBETt6wap2",
  "key5": "uMHidoK8wEh8TriCm7fPuNCxR3CSBKBpykg7fHLmeWJZA32Rm5AExgs8Gc9HCoerfabvdge7HruHgKUaZ7WAyVQ",
  "key6": "i5BqbWH6iT4nKpKPNsKmEPPEVwjYTGi6JHvHZYfiJs2rVrz7Gdijjj8fHmrDc2ner6pJagSQLCedLXH3xZXZAD2",
  "key7": "3h5BX74zgdkn5CY4NzGDyAnM7yTQE2eyS5HU4JUMBHHqjRzJre8Z4Cmvi376FfAYJrTXG69iQg5h9pTyKzSJc5vJ",
  "key8": "4sY3Btgka4fHvKBGzaCPayY54QmBTRyjeo9FV28uUfrhgAAZUGJSYLWVWuaPDHftCRoz9UtgbcJoNbdTQxCLRDDR",
  "key9": "Rc5Lk7LGkpz2SYBjHbrV4gjtzRuBRFBPrK5sPk7hcximKYFdpu7ZcxHgNj9JY7wZhXMd76cTuoMk5L8Ev2FahCp",
  "key10": "2YMoVztTHfhFNEZzyfkSBz9bDGqTPN2kEzcGoqiaByhPqXtjh35LChzYTc7XnaWNKuhuEeK5Qvqq8BX4mHDPeLLh",
  "key11": "3QoKJAE3TkdcyBuVsMZenxwxork9P7JvTCHYyqiztdVh2RQevP7D39H4BTVJkNdc3tuQAg6FdiLXVi4irFjZ2jrR",
  "key12": "MWKXv2nZkRfR1J2SX3WSZu3FqjssF8c1KmfkEEwMuh7eVgWP3bi4jV6kMNiFMeW5pag5wK5xK9UuQ81E6wA1edW",
  "key13": "2UUdF8VpQ8b52AqaVoSWwQkD1tpHxCWd26V4sYs7txmL4ef8Lcfk7xKYoxGkmThCpCtDvshLgWAC7jSS8fHT5Eds",
  "key14": "2jQQRrbWDdkjf5T8cpm7SD6t2UcZV4ecfcQMsS2dkRgsD1nDATeSfjsDK6nFPZ4tML5EPpFUcxEBSwe5pS3v6qV4",
  "key15": "2RC7ua8YMdpnMReBy4E4A3PXTeS2oLuhG77EySPw7gB3oFqWAwyRP6hfvbiWvfSTDDs9Wb6KYh3RegRMJP3sLvwb",
  "key16": "32nGGS1MFA38eZm16CPyJaX9nBVoLeovzuXVJCybJeZk4wbPkWDxD9qHQnNoXxfWEkoYJuuCTRN5EcMrmjEgs3dM",
  "key17": "2ebzfDwAZmKitziTc5oYuzBrqnNu1tmvBx4RryKE56DhYKvYRjgRBTXVH7EwV14NzvY2rzHMGciNS7xWWX8R7FGM",
  "key18": "4RfAQVJn6DUaepG7uoWKUwqKcYhiRY3iDkyVAaxKWE8P1ddwBm3aEXyXiZ4WfE6gVSNpPKwQbKR4pK6Ld7nV8WgJ",
  "key19": "2N9TvszBDrrQb5NKJEciCfAqf9GkfZCY2xV1eUPF1fC6wjzXYP3Zu9CVLje8exEfHSbHLZHH7EdZKXg7CKYZ2xQT",
  "key20": "3EnvrPApMsqpbgH4R3pNLPifS3DsuoMXysGEh8tCgpD9aW7jpyPvxXaphqd8qFfwB57s3299enZD2PHtUGkQvk88",
  "key21": "4jFAANLRE6UGZ8E5UtU4EaEfMTY1FgU81Zvhqi4iLiG8Ce4ZNFsEjWybEafxJf7WhRguejUk7WptP2W7WSkQeNRY",
  "key22": "4o8M1N1xMUxrHotTpgo62JtbwidJ7frQAKveRfbZYrvPs8i5u6323xnHPwwYhrZfeVjxzzzP6ABi6sYNM2JEZyZX",
  "key23": "WgS86tQ8XUPQtEE622LWUmLiNvahJ1eZPdFX1S7jp1SzJZexRLyv9b7qzeza5WYmq8zH3GqeC4Y7PCNor6uxXEi",
  "key24": "59Zz5kKsfPVRueGQpJms8fDND4zynp1VDNK3dki7jNcxUkDMKGUFy2v6c63v4tfCkxgsragBro8rfCMCjx4WVxvm",
  "key25": "3B2SSyDwJuBcD1eJqcqogHkcFyiMGjeLqpf1sF7LqGaxRGbq7bCgrPeQCj23LJDomugLrjUqZb2n1H24GdKFPmAZ",
  "key26": "4kX5tYdPTjPZpvif5YPfaci1D1vs1AbLP37pbb29s7S7wGw376ZqmV9qtvd9Y7wSagXpmxN4Ghae2SrTxaEi8C7m",
  "key27": "X73X9ULJP4D3Y9HeZBUNFU5NcZaKvxV2EGVmAS6SzLCYvDrb3dkr4C5CKjbLx4JYyB2eA6eMhZBzZEjvvJNXhig",
  "key28": "4WkkjGWCbBqxdU11C46BSEugUgKdzK4HkwgBimvN3C923gUz2jVZPT1i8WsjnRzHTjHZw5oNX9eN7RGZxF5MDXeh",
  "key29": "4KwdDmZtaggjW1WSNGjiq6dDVWDqQTuJQduUR88QNikMuxNwr32szFa7FCQKPqpqoG3NAw5BVoPQbdRakWQ8Z7wy",
  "key30": "2A4ptnzVucnqixKB9e67ZjbyEiUb1c2BxLWjwyHoNbrEmCZZ6kg79FRqFJGQR5kxGLjx5ZW8f9oQdEbXUx2PbG1o",
  "key31": "zWcqvLKtSvDMkhBRgTXU1Wij58R8Y7C9hLRLnH7czprCu9RMrqqQSzowtHduEwWGBQfNFWqrSGtZ4vCyRbcFy6r",
  "key32": "39dKQ7tXCMNQUgTGja2c9yrsriF7yYKJmBJ2p1b6QoDTWVPyz154z5S7B2k1LX8NwLt5SkRdBoFNVC54Y275R3hp",
  "key33": "548ozB5CR2gVWbKnKo358t3CB44T1JvFZrCwZpDq1PZCjMnpRGL4QhoTWMBpLygoSwRH6trdF6z4gmyn8ZZDB1iU",
  "key34": "4r3RGaUcLQSJv2LTFXLZBj1v4YCFJg787gtoonpNsWaabKDHDp3XwxDWPghwfsQZECyt16E5wsUcivqB16WwRVyT",
  "key35": "4EvGdfbfJYSwHTCvWkquJ9zzyupGgCssykHbiKw6KzkWveKhazzrYzSge2s3fJyhAM4QeuFDFBhSonRCVnEEfeDw",
  "key36": "2ySFPMhmu9TAdv9mQQzMEJ7KTmvBHX77KggmX8FbU7xMecTxyNqEtZFdNCiBGXHLQeTZuU2YExRUH3JkaTbyrAmS",
  "key37": "4wPcezYH6hUEb7SbWvqkNq2oGX3UqA3QxYgXx5CEeYXWuBBWR93KgXsujS9nsF5Syk6DDyB8YdszJo1wfrZXnUnp",
  "key38": "5rbfjHkbHDg6gvRq6bafz2UL1TPnTmnp5HHqrxnGR2NawFM1Zw4tWH4tLY1jRb9xXerhHwERe9mWXrJSoRZgc6gX",
  "key39": "4mgzbnf984Kz7jfLxWg6x9Q3rp2ZdaThYuX6yr9mqNKAfAPSFkmVquLrHSeMsdtdW6TLSVtTJyLxVrPdFBsvmfiX"
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
