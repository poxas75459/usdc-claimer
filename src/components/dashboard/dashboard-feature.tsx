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
    "4qgixp9gwhqCWNWNanEitqETsFvnCJ7dRffpvJ6ECWfMB3j7racW8SsVevkj8B9kNnA7i91gzQcFQiLhFB9miMNP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FyQx7j4QngutB81J9ZnFARKRdB1yj5mzPCRUWYe3xb97fQFMHoTVUBBp2nvS1SkybKwoFmUuBeAKz3ZWei8s3D6",
  "key1": "2Gx7AQpP4DmHYjUfBUXsRDwdKxybRDD6rJmPuvE1KhU8PLrFhvYdVae4n4qcReJVGUDrtQLA1jgLHZnFRnWDRsBf",
  "key2": "5sJp9j3mmf8k8bAihR5gENgFjoFB2AZp5oSqTRE6gEKz8SWmUARiijA6uqf56n865Y2YPK6zC84YGoF4T9RANB7p",
  "key3": "2369WJBZEUBGyYKzphMuUU1Nz6n5zWv4UfzwrKWMQCEwGdUT29ygSjist6V9YnnRR8naVHVcSXCV66mAPCA3tQLn",
  "key4": "5V8ZL32W9MUNHD8gP8UmEyBjc7vEwXwFuUNnfbQGfDafapPYwDXiaUnDcmCGsFrex7mq5VyTS8UWCYZTrewYD64w",
  "key5": "4ZZ1e6ynpgvUeqQREXJbBBeJLk9zvqLNH4DHgwJwX8qfe117H8DxUhNRHurAzpR5Stm774XRHWunQ96Bkp56JR3Y",
  "key6": "4DfozoGf4R2ewyqeoZu88BvYrAyzv7tyTVcmUi3QaZyAoS9sYd2tdEeHyS8ZTPmrQ9qGWvd3mjrPvWnLpgC5cpa9",
  "key7": "3iUGdczzK8YCkccC35G5dn7F6TzPrbX7efCqAskiPeCQUgWTWkAeajqxsHxHMKsgKA6rvbeM2CXwjs7TaPtq9gNB",
  "key8": "2qHzKc2FQfgxYTjsP7od4vrxYj8SqitfDbuokLLYCxfHjEFU7ZCctuhAEghm2eBhyC2krnTm6Vr1z9cCrpbZSUFh",
  "key9": "AcrejptaxrT9dx96AL2WG1tucbxrZXhTbYVdGRPvCRy8GTjDUGuJdRhRH8RAarRzJrbdojsShvSMYK4xeHuJPhS",
  "key10": "66goJRVe6MwJEB1vSUjCCNasfYqYazHqVFmXLCNHvYMDqXrjhvrsr2Zr76KoRySMCjyFuJs83Ymvy7SxZoe6Rj57",
  "key11": "2mN3XkLrTKATwRth5qFYCuYznVSEPR2LLUkbCwaiEgydTDyHH7zSMc8KxWPMqfkPRh48cUPSv1L8XV7bZsFpXNVf",
  "key12": "34F6Ar55YL6wS7VbCqLuawGjB9P1MXBUjKGUWT6uzpiNzqxPoavi2AviQbierMJjNdb5KUBV1BZqazH3t6dfyKh",
  "key13": "RfjvcarrfHVHMuyk9JjYwNStZF1hqFfpT6ebuL41dCS1feo4D2Qp48PxHCQQ8J1Q3dMvBJqXF4CyGyJbHYssET2",
  "key14": "B6JRsozxxRHBrNArA2FQZFsGRZ7MdHjwcKs5amocvwZ3bDdmp4TCUVorw8PFStHbEQWWYYLeiwDcmxjW96hMVaj",
  "key15": "454XkWuNy7ywcyUR8imusM5TtqvnjBUyUdMEV5dSbjsPR6rrtXheMkaDrYbUXwTrPJMR5U3qbEHZsh9ZTuWtimY1",
  "key16": "2MmgoUyLaFsr4FKwEvBLPJvzdmdTWxAuoHRHeHmuwKPTua1rg8snLWDpbNSfAChmY5omGDcKMc5tEFeK6je21mvN",
  "key17": "BUzE8WXPvmCjhAEanhXs2S44we9izdeysWG95HuxGbNcwvKhujTaf5csLoNiVFExnAeKN25bQRns2JSCrdTWG71",
  "key18": "4mWkB2f5dFhvQCXKvgkgJvd26R2UW3gTkgo4G6aRuMZRPYjxRrhB6hR1fZGrotnssq8CwucfX9its9pZ7sefGia9",
  "key19": "3dhEbzjCn1VAbLvVixcxGZ4o23DJVvq6hXEKkgbhpj6SVWEe6LWxwoXKXhPTJ8HoZqTXLeabNhcprpxKvnvh3nrr",
  "key20": "3MQ523RQ1AN8scwyzUcTxjhuDpF24bXrKQVogjUvBMmoe6qx3H4DrS9SsoKHKRLKaVR8cHrGADg43FVbcj6zAyTD",
  "key21": "3kGLVqKhYBPTprt1mXhvU27Q6XSkKY1ps9C5MBwoamqfqSWFY72BWh7iPqVRwA2GjU5L5uTBRC44cc83b5n1gAKS",
  "key22": "5Lr7e86HhH5bK6P5ScLFqYzNB2EuWVYJDZtpDQNd6DATQAK3d9yPAcN7vA1D5HY1QG5DxigfH9G25gD7uF3s2uC6",
  "key23": "5fUU6rsr4TaiiXeHsYd3LpZnYFGA8f9B1Ves8NNQCffU8ABQ3XNZzcqRPHocvtpSbTegPNCLdF27UKi2aojdJdap",
  "key24": "3QCMnPjdy5BwUGqwgxpJ8krJM8CPgtSRsea8nKKvEmxiKvXNRL1yRRKKyw1djExh9XCnvZY5jtuw3jKu5NAGxKUJ",
  "key25": "3F49RajcZCJknM8PXekMt7zYbfL1HGmGLKugFSRaCccMjT4TumNvpBE8KxLJhGYrFd6Rddd9aSsYDq69rUtcD9Dy",
  "key26": "2TbFBFsfwVSh4rTcnoBMAT3YEVufW7jeXPqbMtz281R7FywKk6auzUnDanuWRksg2HQBc3sUj9zkAQmbDvBq6gHB",
  "key27": "33PZg4YwZwgjeBfNf9dFSEYH6Q4tTd7kkoudfTFJWddGSxzaVAbGu757jxMm24jQAiZv2BBXk8hm1VaUeqtFrUyb",
  "key28": "4qbMpUFpTwrx52ShoZcYefP3qoWBy5K8EWQqGBHdLmzmGYLxQ3Z1JkZ63bPnJmhyCVy761ZyzFnDBbzF2XcnbJrB",
  "key29": "4oEaSZhWWUySSyVtyGeuR8SWWRrEQmXdp8hcUnggNtidtAhdxvUiCy4sFFyETf8gQnJDRYnamSYY5QHTcmxBgMzv",
  "key30": "4x7BHC7HfHT9NBU66oaELyjj3eqCCprqwiqyUTDgkF2RUVMECnJRNEFXmeXF5uUkdqZgcUHKNYrXkQKY8c8FrUiA",
  "key31": "34q1LQvGKDaRdBiyJGpYTzMeXq3kEEimnjA6HjoHmLicCmuSLAcxjMqz1DswvN2uTGbEi8weBFvbFrjA5bmFdEg8",
  "key32": "22VY4q8vK7gxcqgyqbPYkANd2A2RGP1PuoreqbyaE4X5NNDTP7XCujBfT4vMvESZU53BDr6nyvzzikQieznMnjqe",
  "key33": "3c2z2cS1dT2TftrTsFo6NhWTP85hh5xuiQq4c5h5BgTe6PaHApYyHLxeyoiSXxqaEZDpk1kMMNX5YaQg7V7r72Gs",
  "key34": "TA6fyVEipidxV3kvsbBDQGs2wArhR6xSBVZbw2XPMKT88wEbz3aqq4VcEghAmgTcpXAubR51TjPss6YiAxWjfPC",
  "key35": "2z8eS8U5rLcY5hVXv8CUHXgvzVJJWQNKGm5VuSjgBQECAAcTkubUJAU1TYFLVbmpYgB8t8meyQgu8ufeZxf6b8ND",
  "key36": "u3TYCt6sNC8CKCdaQHdbDRsQEtn544WntzipMi4mkdK4ziwn9yjfYME4pnmH8rJZ7vUW1ZQ1krFrc5MPFezFNHZ",
  "key37": "5AvdWQLufPCbvz9Pa5DFSriwHnxNGQpfSWF6fSGEoCiKxKDrsUpiSgJsh2gVkZmpBi1x1n45PrP7Ctau7pUtDkss",
  "key38": "5gagEnYg1junRGYK2iG3xAYKAa8S38srHwThHh2QTe4rNoadaEQwwShYq7Efbk9UMyWWzGYGCSKK2sy7hBLPGDTn",
  "key39": "3NnDZtpcRGXKJrxUwFmXRf3etnDZDwx9ijsRse96Ru33gADt5ZfiqdjEtj6KVQKy3kChKxFdAtMy7hrGg2eh9haj",
  "key40": "5kd28howSmega3FMCdBAGoESV9A8yRFeG8qky6sehmCsDjS6JTZYHqMPSdXJ3yKQNss7H1e89UCEvRx2SGfFmL8A",
  "key41": "4KBT2kXF3qi7RdaNhu8C6bzfwuwCobXhcyxc2wGe7jL2rtTL1KkBrjg82DbSygsPAeFWLmS1GVyPe8gVLnCTZDKL",
  "key42": "5GUJX3MtLWzradGTZmEYN4DbATzVQF4JAyf3yE44ctHULrjH2ikbmJB2jLRygULV8iyGNx7qm97ozy25dSTZgHXQ",
  "key43": "6FuopU94n4mkFnrgPoAhaHhRc2eFp9regpUgSJPkd5DGac8hnKbGTnsQwkXxPLCeCSfEk9kFhv4eiyYfRLKLAxJ"
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
