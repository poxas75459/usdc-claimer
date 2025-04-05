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
    "2M3eEnh2v8qwwJJnuzihiVyRTJLW7aVz2PpFMo2KmkzwNThJzs5vkLJGJy67kMTGhfmqzWQSzb6BQxp5VUKZ1y76"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iM9mEvAXcPsLsQ5rrd5JtjmjuS1GgXcUg8cCJn5QMxx7Y8eKxCqiAxkNPhxJ8vUcpYtZ6Aae5DkGtHsSbwXYiyS",
  "key1": "5EagrzXkdEF4zcv1eYAtmzkz4Nu6ZRpUssTQmzWL7652Sp211SkiqNVmYYwDgbvwGA9yhx634zACAaV9EZiFBpVJ",
  "key2": "4EsmKB8oLWMUNGSNfupuQLrcQqFSNxrQAkwAtsuXicMKFmfxVcKhaBStZhcxynpsM2SDjipGjLxZzfaqK4yLCBQu",
  "key3": "3YRypTbtMVyLdkMBhMP7NVPmuseNi83QPLDa1BXNE5CErXMYEPQQzXBPAfxFHMaaKxh981DMAcpKhp5n4mtpBvem",
  "key4": "m3NHVhuYmWsoDzJeSCYgaFHy5BQugvFSYhMhtq2XCXrmfBDtY4EfCUud3jhbrExs7m6awQVtUkpAz4mDeRjwYih",
  "key5": "ndewyi78PB1fLKMeFvQyRmkoevgbxW7iJHAWxoHfqXkFAgpSvUC32FNTNe9pihnF3UqbuZ9tMSW1mj3mbzzpa4J",
  "key6": "5agGxSvktoF7rWUpbT5HFfam5U1WkZmJk7JJRigLUReSFEaPVDN71VU89S7svRFYJG6Z8X6krGupNr91KpTDovM3",
  "key7": "2VzujZTtNw8rUaBQ1LvHoo258EEHubghQxhpXy6e6trivpRuarh798aaKEsZe6CjDUe3yoKXHa9PcNcmWL2HA9i2",
  "key8": "4oQZ7AhxbyeRkhed3wbwXJJDDhPvhedEXaaXa1BA9Pd714RSFhqTRP5oqJ3G5RN28k2gkZ7LE6fqJnbrZFtgSUv2",
  "key9": "3SiZdN8CMHtNQDdXyZEi8x6jiwphcoG4kpFWS26yBKrg8BRttF1nYvLYP5XzLgv16fbNVLwYVwyt9S3z5fNJAUDC",
  "key10": "4cqsvoyFGqXF47jF6Jz5TgkasQwgmqM9tMPqAC6zt7tzWq1jB8g2C1RH5AJwf9fspFE9MPnYPgNoM5WkHSSTTDCA",
  "key11": "sXydF9JBoE9CWXuJHAQzzrJEygR9nQ8PsNsE6DCNbDmS35QioGdYY4WECo2hqLxxsWCHhG7H7751x9cpcJNVCNF",
  "key12": "X6STsgDYTE21TRJ7Mzdxd2rN9MLSj7oYvJJ1iHkPcAJJjd5uxXYed7YxZ1i7F1pt6eaCFKP1JuPoKiikc8BBtp3",
  "key13": "3HbZ1dYMX24sWDbKSYPpsus7dn8Zd34C4pu13yv9bdmEwoyviU1MzsGSPYCnM1kAiDg3s3r9oA5ZfbthvThbse3s",
  "key14": "2PrkpRT8E28N8Lg1gQ8Vf5QkcA9naJZirXcwnBtcEraZUMnjV79KfLZpyhnjmSpU9Yb7kNCEcZ5HBVKcm7hujzUF",
  "key15": "ym2kZMxEXQNWxtEL9ppA49hGXP9UteqT98VMMAYvmbnHVoVX3fbRX3Z5sZY7UFuAtFjy8dbpafrMd6PHgiW6Eur",
  "key16": "4pg7rA7Bem6eeoNdHq2RnkFu9kAKPF4DWKNFi1zfDQh2oCyyrs63zmn6ZKhyvvFvw7NLEa7frrikQ3yx6neEYZAx",
  "key17": "54Dud4Cccsu56NGBuPKRSMb7CvS5rsLRUqSi3f4FMsAp3oi9Gy6Ajfyg3yAnht9Jkcp5kU23dUFX8ad967b2uwhn",
  "key18": "4agyLg1kCsEVrpMBMDxWgQumwtjPHjScYGoP5hUHkfCPivwkQACsfurfjb2X62xcEsgBE5zth7cNpPgoPF1u37jt",
  "key19": "2E5Jbqxdp2ecordkT8Uw1cmKo5Q3YZ9z6TeaRbtrq8L2P5xx3rUCg9MfKepTujLkxKhBcwrEujaPp2FJGEGfWNEC",
  "key20": "4J6deJPS5GM1ArYRSs3Pttnye2h6RzTVzzrngyUkTPtzsEkT9824K2mTMLQWkJe2RHtpAZuefnyfawVErjTw3epr",
  "key21": "3VGPPWthn665oADtP3K6okZcNJx9z5tzkvYnWK7xo7FmbW3QuUgJLjXCknuLyWa2Hj5H2hdYYzuLvo24x4QJNmKZ",
  "key22": "46UHqXURNT75bKwZBAtoFutJ7pRzacPFs86pWqvF6MaR4QqMXcAVcmCaX8aVKYL7dJPSapBrB2qKUYvbXTv8ZYuN",
  "key23": "53TBUzWERHoqBDcGpgm4cXRhBchEkn5JJyuMPit5bffSZdsUZfuKzfrwihZE7JnBvfJh8a65XdYsBrLznhgHfr5Z",
  "key24": "38vfu3aa1D5xzvtAbV3JjnWQsZEUxWJPrpmcjKmAqwbcH7b3tYiKC5TeMsJry7SJTeHJVBnPDn4B3VZxeqYXsyxt",
  "key25": "u69BFBg3Guj4VsifUfZCtwCBUvWLyaU4ttCvWWjsFYTCARuHTDnkKR8KHaV7NHK5WPyRwmSywX9YRZiYB95RAW5",
  "key26": "3fpiqG69dfA1cgz7QRpM1cUrTBv2q8WyQu7cEYGj9GFQzWVwAqQY82E147eXu3GtniAFe8VgymiKJXtCXz43gWYA",
  "key27": "4FWcEQkY9sw9twjMcwygJtztRbatH5uWff1tmFvTcAqvzeGJt6FBbkp6Qs1UtiBHrejcGCerr4k4FqwDP4vQtjD6",
  "key28": "2GCWEuzZJ1x8poNky8cpuMfBsj5BHvxVbFQKbiuzJ334VMLKQVCqCzzWv57C4P1QkombqHbX2czg9W3Qp3ZSw9kU",
  "key29": "4UMjop3Nsb5zSpwJjdChgGL2TYMjwrjLBwvJRLQWbQrm2b2qSwbGzmUZC2VwmSQhdVx6nFfZZtHaRuugsn3pStxP",
  "key30": "23YdPqXGHr1gttLyoA9geoM1CXHX217Ena2vFmEi1mW5d3JDcpZTXkh44i9qsk3X9fHAiu62k4QLHZjquZueormq",
  "key31": "3nYkFg5KBqYrYR7VigTFMZSVV6ytqiNTZSPnZH9y46Rv1tExuy5LCZhkXy4FdDSHPrghNaZ62SYgtU98xdxqNu6R",
  "key32": "fSNJ5sRapuhTWCVLcnWDz2mVFKWAzuTFHYWqJLM1NjzkYKkcfYAHTgi8xyk7Uis3inYKhf55oX9rynBWTtZ8eUi",
  "key33": "26ZmMTxMBTyeJnuyrisGeKmMGbRxxzGgnZTf17XK26Bhk7WPrtW3V8qZAcY2Jz3FuEvckiBwMuA3p1DhVcTftGfy",
  "key34": "2JM5Ksiv35QDu7M9LR2kALhGVi9PHkTFzQ7h4Ca4T5wUC5BPrxgE2UCjXw3oxSdFnQR9FGqaKVBPLi4iHuTnJ7xp",
  "key35": "2DVQg7a2hpW3QxySFwfzih2bkwkJa7eNN95BMVPDGGarXf8wSixHmWozHVDhEKaxaeQWXyuLDr7JP6ipDK4SjC6b",
  "key36": "23mxEUVKoUgZ1jMtrEUhx5DkT5qimHs43TR2ZAh9XMzFzWdYSSVxVSejbn1mKw8AoZbYf3d2ep5Bp9z5U5Uoo1NT"
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
