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
    "359ZQWEMyykcFNbu4xPGwHACZLfBcUEeV6a9TPCDFLqEbtMy8SfKdH82WSZ23vncb4NRab45euRWVxjJt69RJwS7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JCUyCsRmYTp3Jwrd5KExuKfCUBAkt1MH8A5g16eYX9Y9vKsT1dh6xmre8pGnP1kX2thJL1EZvWCZ76yKt7Qt3dQ",
  "key1": "3KkjKy4uVPDwFsQmDcd2zyTW4N9AwwoXWUbjbA3JwYSBrMu57HbqUNRRkp1h7YvMmqnZ6FqcqLEAUike55pFhKSN",
  "key2": "D7uGR9VdVMebbkg9Z1c7PbtHjBo3gMCw5JpB39PnqV1JJdLYpmzVZYDTjJXxn5crXT9QHYfen8S4kTd7CzaTzvq",
  "key3": "5SZZWJVn3AJoj6y5Uae1XH73tRdsaDSk9qXRXYxikbuQnBUjrKrbmKgbRKth1JqtWea7hMzeeWR7KoNUc9VFvSF2",
  "key4": "3uEEShrYAXh1sdEdoFQ9UFqC9BLe213LTRahMuzbRRzavzwAh8nXRyP3sdLKX7KCmsx8vMZY4xCnqsYCyeiAXfif",
  "key5": "5wtbCE5R2zQthrhedLxU1GThHopS7jN9sEnDENw44DwJyadXY1GAZNSHEo9nvGSRukz972FA36PUtVe585UquxJw",
  "key6": "3gLKA32XuwoqSQ2gfecJdUHpBVgktQGoTn8XxMuNjMcznGJY7iMMYWL5PYkrYHwTC33qbfxq1JjYn9MBRhYa1yPh",
  "key7": "XM5vc3wm17Lhrxi4oL3byR7EG7rVc2A4fczQwVUASLwFiaumZPxYWo1PNxbXPaWrUNbkG1a4wKEM8D45zv4xPQj",
  "key8": "7VxGqxKh87bbHvxKpLuT9Kj9DdzY7cLWPygqePTSWCqYxk9eVtG3RVfrdoWdrhJ2fssjUpdSb4d4tSAhXQS632Z",
  "key9": "3mvdbGq5y3eBXhqrSzfvL4DUoMLUSgY21StJHt1P9eLg64eiJ6tkRepjhTP2sH5RuCUPXdYLkQx1iv3PG4Q3ogPb",
  "key10": "3181F1UWBuu2beFvmYW9VFQ6scS6GiC5mFjxH4PGeA9KvbHMxfhhGLQdCq8A9m7P2rEaAQpCzoapsXeZvu3aHZB4",
  "key11": "4BQkq73vW4jCryRt9qRptYV1VsZsQoqfJqaHkTJrmsgRbyNnS3R1Yfn9zjs7aQjUH25GLLBHPLBiZQ9uPS1QWVGk",
  "key12": "38HnAVMM2cWhmGhxmupcARxW1nWCZ1CQpnJhF1n3hyahbD76XcCrSjKzxwuJ8q1w4z3T4uRd5KSQx2T6BdYXuKAY",
  "key13": "23eiUKmNTefmDTj5xTf9iRPGad4dSXPYj8QWSeJbXH8r5MnbX1n2rQatphhnXaW5KTWQVpKxAu8Dxwr6QXQEn8Vi",
  "key14": "46MbNMazHfarTzg7vBHUY3tybNXEp2xmjEQuUCcR7a7jdD2y6GzySAe2pYdKE9GP3CvyoUsoQ4JXCkc9ictFZ3Wj",
  "key15": "5U6db6wV4vRBpm3qVvc76QEoeTRV2ZFL5zVu3ic9TRCoNdx7biUmEFpZaqtXt8wXqPqUUMLLpUKD4ycztpnm5SAe",
  "key16": "4pXFebnR9xjXWaekM7m6TPyFZ23Wrsb5uWNaakyTTRZy1cd6UNREXvY9GFHcxuW9Fiky4UPgcARGQcYVW1QTFB79",
  "key17": "5fsNVihW8gCNJtxcv9cS62oXRbAHM4hyY69jZuUBGZ22r1n9Wxr8aGEY7YxsVn8quTgHNnL2V7mdYsiMNmGu7xg3",
  "key18": "3k7L5AsGQtcoscqqD7ifFYtddM54mRBhUnN54DqYcr2STLuUwp5VVYp9P78qGrotzTvPDSjfSSrd6cXBeLQVPu6s",
  "key19": "32oFrP7TpjrvXY4ZbYt6t1aZA97tSYsBicftBh2QkAt5sdbwKy4bRqm4Lf2JtZAyp6ddURn5N2uR3bv6yRe2AdTX",
  "key20": "bKNivwbQDBzk7jxqLj7NX6H3iQSvZeLRbu7XTqZdZiMK5XDQSWHrqu6bhKfZfaV8sisKmd6fQKy8a8YBDrZEPU1",
  "key21": "62fJrQYx422LUJB4ucEApYzwUEKDuKHZSijZL2w3quhYSQquWQy83B11bnSYoczYom2y3g96CTKnvkyRWxDnmfpg",
  "key22": "DfZiYrnf7PFiEXR2ct8auyXuRM5QYWmuxBRLKwc9FddW8nki6LW1qBhZCDTFhujizGH6E5AdPUijS3xMgGTxBnh",
  "key23": "3BmT6TB4C5YJbUfDKkeDDkP8grdyuYDZUmemWJHGpFBmZ7jGkeTAGkAED8nSoHHbGtS7ijKBvCkX7r7UJD7Lxbiv",
  "key24": "2cC14ivQqQhBS9JpHRXQJQ2gdE8MUsXohtyWDJHmEhdA4kx3xCgiBAsnjAZQtHt2LsnFxLCcWKKKVVCvZesLkvHc",
  "key25": "66BhkxKA4z6sjdsP4CSavGMRfWfKMScUetuhozoDJZ3yVHb82u2Nv2a6STkdDg2A4Uv9DuDqLjH91mXGFLm2E1LV",
  "key26": "CVHPtBf4HtoEbdRE9chJocDyu84aXW17EEBDvSxfTMjEA4ycYUmDKhkGsiiAJjjoX8z1VT3bifdo77rQvTEjsrB",
  "key27": "3f6HiXXhr2rsM4dCrs4taJRbzMezyHdq7od6FHtMDBMjGCUMWhMzj1PsB2jGUmycueXKGra7sXcdnWWCF5CxsvCH",
  "key28": "2M3wPrF934shX1m88EF3a7jEL6jtXVuvhCiZBtEGfGLgqhxCRZznkHzDax4oWQSewheumQL1qE3CHaz6dFtbiQU4",
  "key29": "5RVxdPKQiiU3MuYZLEAZVLBzMNSkcvTGFB56ZLiiQG68zA8E2H7GrJUUry749tynMjqkjoc3j5oLUoAFTtofzcUi",
  "key30": "2DTe1hvHMCNnz3VuDYHgLJsQmhwGFyuxoqhpXWeYWzP65k56QGh7xpp3emv8PNPrDtf7CHnWhQTJ1aWLXYzATXQi",
  "key31": "4q3fsDQaSNqrCd2Q9JBCYF46PPp2nMCCByHywuwJJQ5wBtUf2W2KmibTxovwMXsFRvSiLjMBammbxwQNL77E7jiX",
  "key32": "4PdSYp9zojArtHkMU2ULQeYNZoFFhcaznrTV9xfnoyZ3XohAjeKo8DnSvRPc6H6pFJ8oDfgRCi1jyz8JTqBdZSDe",
  "key33": "4RcqMDeYmtYxGs3d9xqUjaNmo7t7Ssc6HZo1KRE1s4yqWqsmfnUEX6Ph6NpZuMMTavgybECw8F3pKsfDmd495XsJ",
  "key34": "3RwejPjrHyC66pFoXHYVvAc2hCaYNLVVos3kJRecQHem54eXm1bE7RfGbmNVUTvzq1ESWLmpbxHmmaQiYLkLZsFR",
  "key35": "44mPWwGukiJ1zBVifcpFZKNPrSetwx4VGAMAuWrDgU8iAhTCDdEMP2G6tdK3U4cP4ianj7HpHawfHnaHPh4JfPXq",
  "key36": "h24VUUKW3mxf8Yyqic3r84b9JFVxpoivdVh48Bdg8FXmvaMpV9NzJ9ZfLRUXAycgCjZTQTsESJjougCK5xzQyQ6",
  "key37": "61Fejy4KJ6cQKaQ8tkDfNKj2DwMte7HPJ9YZjwsqGLXxYqMbuSphZMCE1eGHpkyCEr4mSYayHGbV8BGZWZvtvVJV",
  "key38": "22xRTy8cjAbMC1XxFkwgPFhwVHP8zLNSZZ3biTm5K3wWtcsu1sBKDMKf7TwoqSFcQtWhaRNTc2ereRXYGBTEgFhM",
  "key39": "5nqA1TYJ5MgyREijPuAMFLUHaRYoQfELRpkXVgKX7VcvBvaZ9KUScYVevrCkcBxmMJ5QQPJGE2h3rRBRtnn8Kvqa",
  "key40": "3h6QRc9CFCaVpDHkSuWqe6xhxaHapG4gQZ3fxAcr2DiDFv4DmFac8YqocJ3xCCnDpt3RyjnBHq2FtVikTvJ2jdAy",
  "key41": "4BrxATdpM5iHCF2Mi85jPkTBHgVuyErryye5BHnLTMArwWs1Hn3peVkhzRF8zDivNofeP1JUr1zCqxHyjXcsMu4G"
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
