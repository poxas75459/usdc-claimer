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
    "3PCpVsfbV6At6AmJjZBDBUZ9eVwrW77BC683p1Ui2C1QogVr8CUrDcnJBxh9Mh26mh7ZKG6U7pWcF4wgPp8nukiE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yzmGAsgB5fMbwXMJXKuZJicEAdckKHe7odAzcRXWwUafDmkN23EuFdFRXpSSr6JNazemx3yS3Rs3r4sABV2jxh3",
  "key1": "cKQvZoHGwLNsMA5esdhZPyF6KVmJitTbjigQJiKiEf2poQ9aVPwc3a82hstHuoHgAsG7Xx2bvcEahoC6ACkU4W4",
  "key2": "66oMJapwX7sZRPnEH1oGkQsF2N8TQfNfUxQiEq5ML1hHcNgLF8ZYoVJypKaLKkuA7NQGh1jZneynjaVb1ULFw6r4",
  "key3": "49gw8TT4XEuCk23B5kQFX95uYCtre8QdJbjQ8GQf6MfvfbtSi8vaFUqJDfahxmKCUTRpvvmh7qwYpaqJG6t4tjeh",
  "key4": "4hhU9HK3orE4YDkt9jCTD35HHH6VSZ26ZpKnfnRxMG5wxf8bfFn59c8eLTXtep9XjyMuFp9SSYJqPzwSXq1GFQK7",
  "key5": "4cVfVMZ1SHRoApo2FtXT9rm2xgZ9bRfAFgshi2UQNmNGnipCsMX9QPtrc6uxw9pZ3ekvgM4mfzHC2fdgo71v96Wp",
  "key6": "ECN4z1sGJsZkiw983XeqxLwRpdFVQQhqPQeTsAwj5RBPJ6wgGY7Mtz44pcMYYAwemPvgwoQXvRJaBVJaieoM1wR",
  "key7": "CERo8DryxHQUtRcfmzoxGbiRUh5cSj8PhAkubogatsUc4hkS12nCfzaBPE7Wqc2J2c1FeK1ZpA3y2ZEWJy5CRAQ",
  "key8": "98cXvi81nc66Hrkth9dkSPC9c2BbHN5JpYwSmXxqP9B9K45EnA6qUo7g88CZbQCjQBfkzYZEWWYoCLtVjoxSs1K",
  "key9": "5Y61Xnw6RsebkUTmH4KtDThKGwB1bD7BpMH7gUYtVGbQpsjT6ZUEFTcKjq2ipfLQqv3zAnpkiAa9r1oDWPPdezGG",
  "key10": "4bsAXYtSX3nEsppfKWtLJ4mwX9bykqZvSgPg6khhdssUBpHvHXdtwRJB1qDcP1uCA3punfVYruBY5BVMRxYRqeLG",
  "key11": "4hGXH7RC87MnqVRQGoK7t4uJF8BuZ6SsS61AscmvmUYvgVZWKLf1xrrPiSMBTff2ufohSbaJJLeknhPgfMtVH94p",
  "key12": "4YmHseEmCgGFANKLeiMD8QEfyyo1QM5WWBCGGVPbCaDRpDbsbnFNdVQyBZD969W6LsMbhwLbVb2BuUwbPqw3nQEX",
  "key13": "58UPTdwjUYrKzcswkqdUXZhNDBirB1VxA73HnFFFkqbJB84U6NrcF756vLXnJBpaDmyvUJdwpgPsYE2tx5S1dxg8",
  "key14": "4dgatEAdZ2FM8JBY93zrQJQ2pSR77rSFeH8E9qzn8Bk5mr9rQmdGLtnRYSPfsvW3mTvChDrHK6vZ4hEg4RnVPzc9",
  "key15": "5zbB9E6ou3hvikmKL5DEgiwmRjmop9sFkxaGSbuJfM5cccu8Hjc66Zxf1cYezomF3TnMa5NtThe3ktEUyTJiPGti",
  "key16": "3qY7k7Gs4a6TzCxQrVBqT75qDC9bVUNaJGkC3jB6ToyEzRRK8o9dQyKmTrrBHHCA1ktmYTwE9mpdJFHNHRq4XaJQ",
  "key17": "3z734UnukNiFsN1Z1KSArbdZSNt9ampNuhyjamAfAWsr4pTS4YdpvioePGPsaw8sak2iipsfznu9qDxnyah5MmFK",
  "key18": "61AgDAWqD7GT68TU9rWu6bMaajLiuCJJEkPBgqWKx9FHfgtjv3zpA4ZeJtibQmJo2Tpq2jftpmDwYA9jGJsXdoXt",
  "key19": "my5gaETwGyfEhuW3AU9U5DzpZYq5ojrqUEnDobmffC4fsLGhhVVGawNvBzT3rhKwWxsnPFanTcQ1e1f4dQfM3Va",
  "key20": "3JVNLKaKDLaQyR3yoZ8R2jYMvBzRJJkxgmvVzQyCT2Tr35SQtkiSi5FbkcvsbezJUUMRJ5pPiNkR553QCDgRjndi",
  "key21": "3L6gkiKU35n1LoVfXDNk1hYRgqxXR2wEMbRPupUxfUJdP4LWoaqhXuPwtBzswkpzh9KiZ2An67uuSFeUjFxFN1PR",
  "key22": "36xYGNM1tYChTvtDBRG2sqQSQG72E6yZSv3gihhUsCQQNM5VktWHvw37A9ux1kQvBgTvi1h3QasKZBMJvQh7o8qS",
  "key23": "246qHGWsdaXKsFcahkGzLherDriwPXHKfycPCt2GXPDz46GpSsaFZj5WjrXuxQMQpKHPnhUoRqMSv8JaZW2cocnb",
  "key24": "2zDajPdoWQuYP5Y5ZtauWznBv5SszDGTRhdzh87FQwhEJ84vS51fotuxz9hhzMErFPaojC9qTwr6SK28CtNw469o",
  "key25": "5cKptgg69sat82zvPFYbao2B1edFuyNSwB3ST1eLqy7qEdisNzz46TEZm7JhbgtoVkFqZzSiATd6xUWh5DJG6RfL",
  "key26": "2ostzTH1qVvoYTW2Ayk4TCbss76Hsi7JeawJ9ZMJxQSCMDAEiAfedN6fgXBKbxMWxoMJqUedh6Vgbxt8SKEgvtNj"
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
