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
    "3jbEPq2CKnnwekFGV2DgKDENkHoF1kryEYMq3nzQUmYBUuDDKa6KGzQMb7XAwMhEt8AFyH5LqrbEWawBsR1KK5Bi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jxRXHGbFd9PQiw7XbCvVyPRZ4oPr3PBmGenjPbdwkwFKVXm1Pg5qTCpK5tGoX5CwbczmPB5mUnVN9JA5XvXJY13",
  "key1": "djKaySxZeJPSZus7PEWLryRvCttP3bur6aMvCwTR3QMTrmXtLrzhQMAEm9beoiAZVNd2BQMVX6nvcZxjJ3RmHBw",
  "key2": "21FgpzmmqoBvhNUzXRhX1ZHoF3of79q1roB61pN8UHSAE3tbk8vBWVb6rduvnF8RsRQeqqHs9qdkC9sFVpupachN",
  "key3": "4HTK5twCtvhWwUZS4G8UbV4Q4ffHsGcXr7Aw4cUV125dDH3X2hfWFMXD5342FXZ9rcVrQw7NMYyjVrxTNQiLxPje",
  "key4": "odxxSdw693LZZDJKXeZf6ffesXZV365y712u9LkaqBDX13jguhY1XFd64JHCXHnqMa38cckeZXfAC59SHMNSXEd",
  "key5": "pD7ps1MZXJc9khUYYJoZoSqiSQyrsmbGHRCkk1PAQnyYZpBydTKgFAEPC5ZKJUUi4aZ1L2CwwB7dgXdeVb3rPpc",
  "key6": "5YSLa8waxVeskZo1zoMPiVn44rmTfmh4YZn7J9VE2bgJJ7sdBCusCtEz86tbYjVbshu4RSBmjnXtHxq16KKJjz9o",
  "key7": "5jGHwZBNWcoRMKToTqFu4YxbUf4hYowN87pHeiXfopswvfqXnYFdadWjTzvCT6nQXm2o5rwWkLXo3X73i2wqmn5e",
  "key8": "3trzgUdKyaMSczXNVuGa3LD82bbbsksBejwjmCEuFpDnJ8yWgZmWNraD83cHrJnDmkG5qxHUi9ED27dq1gBM8TLN",
  "key9": "3fNRSiurxsba2YGG3o9M1B8QVAfDATArGrzYKFtpwd9CcEJaUdy95VojVhwFbGFHQSACQYBPEBxyNkHjBerLCXk3",
  "key10": "2VqjNNkVBR5EvKFKnfQBqsoFLaotJvCrjqb5WRvEqbFsTGD3CPa1owfn1MyHibj9E5UXxA1CBqvTb4ptURFNq9wM",
  "key11": "546GkHsf4a6K5WCDpxjFUswQyeLJ6wRyHdiG68nRJunkhL1xD6VWfEZqKeyaCgd2EsMTh2ZAXgZk1fzAPUdmue8L",
  "key12": "zTVfh3psXCyAchKC11nKvLn62g2Wu7e58aqyUCRD6F8LHB3QYeeY72seU1ymNAQV1o4K8CLnc9ko4RzPqfqh1fZ",
  "key13": "3wsdzXXHxPpsvEFN69brVNzJPETHeqzp47DqBQcpSkg9Jtc4BzrXYsc2VCzDx4i9QXRC169giZteDasqbonebCGD",
  "key14": "2gRtmDfDMt7xsbnPWBFdnG7441bVsAGQ41RYsi5PynRdcWaJUnGJgdbR4bUFJ62tQno1bN3brd1U1dVmbxvSpuMB",
  "key15": "4noQ4UsZNXG6YUHRGyKWAvMxA2qD9b8QFS2zk3onDgheAfKzx8NyaFGNoDUyzguJQvhFAZun696cRZmKpWkdMLuA",
  "key16": "47NRxYvmhL9ftiAsBy4NtDnSfLQ4w6WELQqQ4h4xksDwiwmZ3LHLK3hD3iuj1kVVcgoxRMoqHf7U4A3W4Xsf3yTu",
  "key17": "5EbX7QSHRQZVrBsz3hCPt8yq2mn7zbgBEcqQfhWH366uKtUXtWkmek7rvhU6yGdtYnWDS9PJ5hfuesDiAxqkbXp8",
  "key18": "5RqMZzJnGLtwBt12TPy3U72uLVHW1myJHvDJNhwuvnhggsNuEUf11t5Psy19fsAMAd1aggYJw7LHBbY25dbtCqCs",
  "key19": "Jp7WgBZ6QazvVdH45XRarqrB1JTavi5wjLJKLAAg7GwSzUg3QaT9WdQKx7E18byNwaCEp4af1GTd2p38so2uGBx",
  "key20": "5CD9p5KmP8uqBeQDXwk8ZzyHGh83Mc6mfuS2D6MwcSaXCs9FqeY8XLtykNscpFza6ASzCNtW8Y8RAtwi6E2bSLHx",
  "key21": "35QdyKZPzQsdvgHLTqLDqyjdnEVUBsoBq8tiLK1HNvnV266mceMqdNFUCi4sU2DHyf6EMhzqGuoAXoeyYQEPQUr4",
  "key22": "2EKFomqByxK1ZbAynw5KtsAj2ZQcvzAEY5hT5Y34UU5zsjcaxQGAQETDWhawDesfNitAtB18J9thxefpyRpogKh2",
  "key23": "2kVAgPMRHasPCPoUQCQGgfkkCMdY8xWHzZqHP8kbjAH4F65aAhB3QFNERdyLxB5yBmjNDdEmVpwPhrABRcxSdmTj",
  "key24": "9oNJpEkD6WmxF6WiAXm5BBFHXoDKg78ZzmPbYC9S4aGRE7QTct2Rd1ahTnh4BoHApdqBf7r2N9CH9eniEk3Tvdk",
  "key25": "5aCJE484dH7A8fCSRPxDjL6U9bfJhJt8PUHBNcPauYbB2Ukza1Etj8KGVEu9KebRgVVb3ipHjGoLgFFhsFTPniJy",
  "key26": "4rLZrUkfM3BVYdYHmwnAEYkeijAGFpByoFXbCqvBcEvSa9RGXqk5FPDvjgDKYYMmDtvS5EjtGgYmehjdyNfTEzQJ",
  "key27": "2siZa7XG3vYbB7FBgZ5XrK6HchbDs44R25c7Q9xD24MNU6z4EUrnmAtHxvTSoXHbhauwbshZfRXRZYo7VvwFkgJd",
  "key28": "2cmeacf3hCr5ShpjX3wTvxEJJ8HhdkJC5arqCZFyybYmno5w8xArFd7suHp4MyZAT3r43caBfWXbJrmRvk1qkvwT"
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
