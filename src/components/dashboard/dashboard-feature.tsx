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
    "3bXPxPgJFz9f6BanRKeyundX2V485s74CRL8dywFkTc4TeopuiEfBHrZUn2UyxhDHRkBuiMKEtFZNkmPB371LRbz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hxDVsV9axEXBKQSjsy6WakyaYorevn2L5EBjvho4ig31Q6JMqdXyXJt5kvJoAmpfn6QbRh1LEkfpk8pXkEQ7qka",
  "key1": "47sCVyzMgqavspdFmumCcheXojsz7fKH6JUDL7zM6t2G7Vczd7NeLjWXDUnGZCf351MTyuGDHSq1WhPEkDCqs7KT",
  "key2": "4iTkkjRKKhfHLgpkYBwUco3fYSASGaGodpdiJm5cHp9mzRPaZVocmKZ8LCKvvNecKnbWfXPBAavENVxZR3gK1ry1",
  "key3": "2VgnKXsuwiYCtnQP8mAxMEiJNZ5EJVWoQeGu2cZ668ShHVgDhf33qrHez97WpELmntZHJkASpL9AnhsBogn6Ls28",
  "key4": "9hPkE7fCfCgwG32EQjoHLctRVJFAUBSbjXremBxMoVJhGZrRRLcH5opnKdNamCaWjNCKqkgVXpJKoHhSoy5cGn9",
  "key5": "2eTNFNKT8pRromxR3D5JrqyuEL5NvFmTjoBHktgjsJvX2voSGRAuNTgKVrgGed7vaSv2m3ua5R7edn7MetpmKBQr",
  "key6": "2bExUTAN2hD2u6A7W2q1KdRL3ucMPLziFGQhbn1JRynjvDXjyWARD9Gq1dzek3LEEMkPdyPVF8hoFWDYKuw8tDgu",
  "key7": "5MUekF965NbhPfeaLxsp251Rhz92ivhzMMbGbWWZMxEB68tboNRniUUMpnfLUw6Bjbq4KFFPMD6BWtCNUAKwGgj8",
  "key8": "5n4hPC1v2YqNBJxyc9XFZs7kr9ZPQVxzCPXXXTzwzueYHAVfRD3eN58rGjyGvTWz9ShkVw6dPZJjvmWg8L2ATkKk",
  "key9": "3ktuYWN5azK9nTWVK8xhtF95NdbEJw6X9e9HRgU4RxSrVKZdyYxVFkLipE3gSXudqVAHJn4qrJoVG1jnSD7KAEjH",
  "key10": "5BRczfks1yr2qte2SXpywEEjRK87Hk8iuDsS2a3B8MiRWoLkDKsVwHx4aoQqFvxx31PosjYgecHzSp5EKTZgzXrY",
  "key11": "4AAsbBVGPKhotLf8d5vabA4Dbu2xfSHbfFe9cEEJu8BmaAWmqX6DXRfZwjN3fBK4Qq798E8TYPXzCBnTQUTKUTje",
  "key12": "2BTht69GspVLp88MYrWxgS7hySZp8N3dD7r1kivb9McGj9sthhJKbLA2WvEFEp6W89F3NVgPGzQvWixN3se9BFPM",
  "key13": "5zyUfxQJmaqqKhyXfVgz9QadbW91zvJqvjQ9pkm7FD8tnVhrwwQsB2g8p6PM1MhJQxQn2hC1HYwa24Zvt42tRkhb",
  "key14": "65CLfijGPoGVpqCJ4rXeDUG5kxsNFtpaAzRMvpbk9BjuxVCecXUMAk3QGeuiH8bHAHuurqNJRZ2Jtw3QA2ANkNQt",
  "key15": "2hkLeRVWqC1QyqDrUqzkqaxYXWjxJiuzYusKwy1iEZy2wXjgd9oYRMXBVNENWFawnCK8RR75cxwytECjspEtT3uP",
  "key16": "3mdFo9vmB2Xi4uorpZXwWbMx6i8Q3odsSFyAi3DhfiR913iEa1A9fdZQtskXYX7YJGyMEHpVhpKKsbjiQkdyjMdz",
  "key17": "2x4o8jquWFNMTnuFwFzKTDdzoNs4N8cVEjjjVw8DnE7hde42PGdHS4JTCzj1JWiZBp7VBryyj8Z4z8gK3C8n8QYV",
  "key18": "5BMXDFTWdp5WSCb6YjVrRgJqj8uZnSjGfV6bsXTLiDnheRmACjx1L7enoSvpKULoXp3tjw5xNfoPmqPm6hbLFC1q",
  "key19": "5ncKoDzGdahzfAh27P37abuD9PGLau9mBzHBGfvzNWSR1qea76XW1VcUqqyaehsrr9JtKpBaNX9t4gFpNFqHYbwX",
  "key20": "3gtobE5ib7rHfRkjapXwi3RUDLTc8cJJsjZZ44m9nSCDP7cpHdgWSjXWmoJDUZgQo2Fq54RxBykNDMZy7oMb1RLc",
  "key21": "3Lmb6GV6q5yXgv1yAh5kcyYhuYHXgGbQaXfqfDicmVZxAUaDejiB599XYiGdzdUKV6BAYhwEhTfi2Hjxdpujrszf",
  "key22": "5fhfDXXfPqGTvktVMa1temJLW3xRmj5JAjC8CvQFHcPpqMaBb1mYFrdxmYrU7GVeLbuyFSkyZb52NeUFeya6aPPf",
  "key23": "4tfzykPx5pYwe2hNXzhWNmEjSpgkkgjeCsHaAyFEEMeeC1GU6BUYvawAvYF2vZGBQwiiA7iE7fw8VNzyKt25YLqs",
  "key24": "5YnAoA1U2rWXjBhLsW94cf6H2hHYmmi1LjJdatACSTnGZ6mDufmQxGns9dB385cypUXBhdQEbW4ZTAxWFQ919zGS",
  "key25": "2HD3ZQ1PnBSeU36oRgwJScvsbr9RPTiW4brTXEWa8zYi7rCYa3yWVxdLdy81p8VSGNn6vpae3WTTxPmpfkReW4Qi",
  "key26": "52NHF4VFyy5vpau2Ftm9tk3yQXDeuhfDizY4p7JAwtcrgjUMpTi3fuBUKyNP2CLetEJz7aACezcBDMBYt6VGdDSy",
  "key27": "3b2taYZrJ3Pt41wvtWnUV2zzr2veg4Z6h7qBTzf592oLLEUim5zANUPb4MsLnRjWGQrRY1Tk4v8Jt9P3w5hMnfnL",
  "key28": "29LQNeeKgzmmxxg9uqaRL9y7fGgNM3ue24VxRnkqjJfxNxTtSSvZaMznecfvvq6bC5kTsnRSVosRNrgh5iLCsnon",
  "key29": "4o2gb84UZYeHGKGhPcbfJsYnT9AhzaLxx8NQu7uTUf3NRbXU6jerDdTwhtqouxVFPBVfkA1GWvQ6MCNM2nUYEfUB",
  "key30": "ZtZzACYe3VQfSFRwFQ3T7oNCEr3KCrtSJ2dCgp4TsVwviV7G87zGF2wovmThmqNjKwQ9Q7fUVudUBEpB6t5JDki",
  "key31": "46wKN4bfsWFb62rqZQo9BxY74FQj8p9KyNWMt12wKXM1gwfTC4CY1V5fHWNjWyyUyHpQqnEaxo83ZBBiVoZkVZFB",
  "key32": "2q7apZeyVKbzcYXpEbHqrdc9ZQA6MYYLcVW5MaxfjMERHMGtktUTUVRWTh1CXdVRY9qjUroMno3HofHVBcXm8DEb",
  "key33": "5VUxB86rKQiBeFFCJY6qboPqkYoNqm9W2JFfgw5KeVJgBhG7ZP33btFG5Xmxtj7n9UD2dsXyYuqPGevs9NhtxEnU",
  "key34": "4XjD91p6p4gMK51A2wUMbMWMam6iMZ3rBKmjhhyCAt2YVpfQgf5V96YynAnYooqor3qnX2Xn9oCk7yWiHH1E1iB5",
  "key35": "3bKAgi5qu8eCqV3piKB3ZtEmuooPmrbmBwbCfUSDocMaaVZoDSCGvr58X5P5FjtcvL4HYx9V8tQ29YvNtzLqa4CX"
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
