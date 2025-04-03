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
    "W5tRvUGJKHC7LBZoyuhYxAeHpRR4XGUaWhY7o97nZtA8kGY1VH8d3sAHZtFPSrhvjdaWyBkpXnsM9sxj2hiBofn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2unTyMS7eCRXvxP6BHMDxnAe5mbw6DzZtuMzNoUUMvWUpBJQapc4jmkwsHsCUnEBopwnrniyrNJv3CXREucF8fRA",
  "key1": "2RFyxczwWup6DqFi7keWCp72h8YKrsAt8uQkC48ECiHYnGG9SPJnyP9rM6WhfNXcB6rYBpjT72k7bqu94pV8ntZc",
  "key2": "2YSJepavE58qS9afTRVNQCeaNYPfAnsAsL5yemGqdQoraCtaejoXsL4FEi3CoHEMQFtUyrpzTeVvQorTBg2HaiRh",
  "key3": "3MsrEroDS9dcAW7HHoLkrgvcDhhsLv2NFsv7y3TMvm5R5Ts1sAT7eJmTTdQd5SgTU5g2XxrX7JVCgy6JNkQv9VXv",
  "key4": "5Q2Kn3aKKVkSMce8yUBQc1RhwAnmRyCsc8ojsVKdMgxSFXkb9raBpHrMbbuoChAWD2eX8mrGGCw7rLNxEPoNE7ZY",
  "key5": "bqJxsPwfVt9voFbp4w6mGPewK8pHNnWaY7wF6tb59zNVGm67DFNBCtazxCgGDv233XmrBH7R2zdwY4W9KbQFtCq",
  "key6": "5C9XyfkwhSVm6sEWJ9A98117CqZryGh6FHpxYeqEtjN6TCv8Bc8hGuepfEadcxoZo2vcrFQBmdtdgAyefAyKS3rF",
  "key7": "fGU64yWyX1uL8KbMDf1GBMWYH3djMq1JawRJZk6JYJJ1GKKyHh1xbuFRfxrGCZ5NDkY51chBi2ANfAXcFzThUbh",
  "key8": "n3udi8pW4A6JTBRAL9Mq6eQnxawAT4sJxVtLNqyQX8ynwYp1GMpD53nxC3d6ChPHuoovfRCok3Afg7pRGKPGwXc",
  "key9": "3bLJkkt9Szcbtz3GrHyWzeBtBgxms2uEq3oNSKcvs3JjomGsZLA5d8v7T55xBopgNhwDKMHAa1Ho4SfBFf5dV1vL",
  "key10": "2jYSp5KdkX9TRott53UazczjZL1LMSkQkd5xmcH1xZ6tMGLWVq3cVMZm5ZtpdHVVxrD5yFrHu5o1xPFRCo3MUhM9",
  "key11": "5PnMzSDE1JYiQGqZyzL6QEZE8C5v594whB9edDcfEkUomAPUdq23GuCfoBzQMA3VZjEaZfX8JnwDriLCtxnaJwgo",
  "key12": "4DLoUsFFgLswjcZAcNcpGWUKDgB8UYpjDHGDJsciyLgdPjZK1PaDwv4P9FQdGmiBkTrHsbBqqcrHq4jiRHbbTrDC",
  "key13": "55dnDcVSNCJ6PFfmwcLmG1CmzX6HcW6Y7439BRtRPTu6AudrrRErwpmpP4uWSSjxhZp59ai52qzM7xtUtDp95UaZ",
  "key14": "64fBbpDA7AEK4GVvcW7hPqA4R4vFYJZheNiwcBQivxT1vzSukZLNvQevC9VyjG3djtY5MmYZtjUtmD8vswjwGiqH",
  "key15": "3FUDU9ZW6tWRTtJxqFC5NS16Dni4Pyw6LvKWAwkWXpZBxMJr1QrmDrbkCDL5xjMAeJPPrkdkRTWGsuPWcUgYS8mX",
  "key16": "3iVzQUGrEvHnWTag6YpLeZsW3GbaFm7AC42vLc3xpFLkmABtsfxiYyJpVAnQVhSPhwrvdCjuu17GPusEf5NDpgqE",
  "key17": "2kR4RQdMYxha4h69t64h6rpzRWzXZAUnot4718JJVc1k6pt72a3V7AaFyBtZgsWZ9SdnCCtoCdHTqPDo3ETnrCr2",
  "key18": "21LKRWT1eZDiJFSrnnLwRtnGAZLNAgXkwnv2Us54qv3KC1h9Bcx1jA6wWErMJ5pLbL5gZYKj7A6kfYuGFYSG8H7E",
  "key19": "52WU7SoNohqKcxVHWHNL9DnDKQjjprr4oLFvgZgJ4HoFe8a1MDuEd9myrZcsTHUngUdtsSg29quBSJn1Lvnw1DJL",
  "key20": "3rCHs9mbYERZnvkXYurbFyUr9s3xpYMgj1Bq6Y2dQNcJ2o6WFbRsN9QmdM6fQy1b2q4n6TP2qceCRqMiGxe7iTqV",
  "key21": "4To4SdyA4E7ZYz25GvzvU3BigtucYCeWPN4SXAZj8H2SCZcBfc9sjxB81YDzTS6c1dZ5recgCdaYwL9MRwooAm1f",
  "key22": "2RsEvXgMqdXAMJ7seZo5PoNunVndkZUExkn4tjMye5GquttjaG6fst91M3NUPnqD44PnQbdiQhAunHpFjHd3f1Kz",
  "key23": "4Lb8P2Ritx5ciidafxjGJwAB665mednZ4dwf8i4JhRC4NaA7Yvd7GzM8daAUDymKPARRQeHRnGqpKcujwAGVY82k",
  "key24": "5Lbf28TcmEPsWjdgAf19oWgB8o1kPMrcR6QhKbzfb4e3cKXAtHJCumPvvW5wshpX9DW6qQ7JjzVkuiBf48fMbmN",
  "key25": "5PiYHoKMHoGXLN6FCvCsBsJ1Cv9D8kmxBxnPQzX52zvpkyASsJoWMh2exBwsBC4VPKdcUDpBYiHr61gf5qj4CGqJ",
  "key26": "2hR5zc12kAFmCooc3z6rVH1UeRLJ683cqTYTUvCupGuYz4E9H2Xb3iu5rWZocYjPGqooDZpiXksM8VjUsD7cwwKX",
  "key27": "2GMzweTCvv5WsoPrm8YEMU9uQSV5FVUzc5KP5BNBvN8puhLrBKYVn48eSqsAUUtBBnZGfSY1TzG61MujEjRvTpK3",
  "key28": "hH98U3Cf912C89UKc2m9SAh6wnhSRgmjpUSg2zDizGZM9CjzNu2HsPFYye4erWm7eS42WLkJZ48t6dnZaVsXjQs",
  "key29": "7YzA3uwMgojDqJASyfRfeyqKUkCArbs7S2EcjUJoAqp85phSioUQcTHXkSVUQVFDYzJNccfXBfCrix8SpqYE4WA",
  "key30": "4P8gpBEGNw7nWxYd7TxZzC6proYpPfuFg7pxcAspkPBXhYEm3eQzbcU5UvogJ2qvy1kBdK3uRFBW6bocdrejqJ1J",
  "key31": "3iBAJUFRuiBycYiR4bjiDCzTQAEJDziXWdLC6962Yf4CBy1wJHXSzH7bjQSYYeKigZbvtv36Wve99vZQ8NMsrChr",
  "key32": "2Gw6ygbNydwemaFyumKwgcpBwWbH7oPS1PYpABDVijaRbweyQ8yQaWgtYJFghmFGnWpqWCZr1GnjS7gioH9sGBxU",
  "key33": "2eiM3ScoWqKDevrd3edvVmBXc3omPmMCZKEx2zoCWFkZJof9Yqbf7uKEP1hAf8ECcgtCiHY6y1CZ42nSKoYaDQT5",
  "key34": "4GG3on9uBbXuKujaATdHwU4tK7yn1GtrcmwoDru11APdbHxabC21sS2vGHv2HRCTp9xovAQYy9greFMCU23Kpk2v",
  "key35": "3m3hVWrEW7z1m7Thkbcr69wknN97yd2E6HHpuGaxZPCTXWe2FjrXBxRBaeuzALdzr5AMFFfHP68yg34dRREFi8ok",
  "key36": "1ccR91J4DczMdvDhziKGGo96u9rBjVujjweXiYXnWrs2fX2M9LkjZUD6kXnVKiU8xGd6147GHFCbKsf7Ri9tgM9",
  "key37": "46oV1z2DqAsM3Dwt7eBFuRs8xvHQkQ2rcpnHRMQjNHVS5v4DEWTmsBDcUw3qmRKGyrihnBdnJSLWmKcXj7VGqoaU",
  "key38": "5vnjsxnzDtBwZ4d32Rzdc4nukgfyKckjgwqMVnecGToBDFCp2qWDyHWR9jkzXw7K6WzKtbbG4Dn77vE1r29pVZLY",
  "key39": "53hAKCtHNFJJ41Pf6KcHNWy8jqzuGE4mQz26yqUNP4tJZdS6AvrfCGrXH4LphMR2RrDWKugjfRXVx1LZM232MYef",
  "key40": "5LfrkXnVuMkhhspXxBYi1x4xkLCFM2M3TvkdQzpvDbhEQAqn65yVunjbeEU7disYTNtC2mHzyDrBghtmL6u1sKF4",
  "key41": "2bnX3fJcsxjLH7AcDXC19NEuqJZjboJhrBDjDJpgfxYRjkzk3pbgex7vTKN2ieSjtWifTsY6zp1Xqh75Gm3FDDwt",
  "key42": "vKmqqHFpeAjZ9gy4wopdKxY2hvikiaENV2KoRn3c2QW7Y8icSU9TcCTic3YVGyrXpJHyaaeNvYZSXAMcHPNFS5r",
  "key43": "2y73hSoGAFKWDCC1CnFw5Hx82WFyXtdzuJ2aWaLp3Nn5kugt8YKbJ8PLcSfcVbvKhJKvFRvQ6PJG3Y1oVhCFgsdz",
  "key44": "3ihyrCqVG3YbiqiRMdtq9K84mcLwWEWVfUzQqmRh6cXktPikRPQ2nKLfXVXHQSvcrxTEGsr8yKbsdondyC4wKr3y",
  "key45": "4Z2HmQKenVoEmCtUqdRMELT63BB7chTfRM2E6BkfjrHHGRjGxRc7skFoqPEX5DU7Dz9b2VrMPA3QRzx9iQsTpfvq",
  "key46": "2cnVD6A16ZnXMabJcrH18eD8FcgUigArqeVfP1V1K8rBTQ9WFf43VURN9bXUBo5MYqLfBR1Ceb4m9e1Bhx4zanAE",
  "key47": "4XnYv9JFqPUSxkZLzzBfomTeBKxXtWUXkPhjLiqf5VQNRCFHNxUxirqdAcSKg6Z25gxeA18aQdTNw6Y24V2LBQWQ",
  "key48": "4Gecaf4DjLdKbqrizNuB1XBrRADVStFkVRUc1AF2mqTY6XKCecLs8HZYCkTy6hCVkyWnZJTQnPzh968pdBsYhmfn"
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
