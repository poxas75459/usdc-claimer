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
    "2bspnYocA95jWRzdGRbPyAp82io6osHogVqNNZk5sHJVLbWgTuqcQTth7HAZn9q7fJ8fbFKoqRmdTQqPmcdFpuYi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oKt8LHrWNxdYVh4seYrHdqbmERkXgqShTsTGBrNCakwyYttpedjPiQseBgC4VGkdKbU722sv13pmzSjf2uBKrHq",
  "key1": "4vkANDfrgxZudfqss2ULiRHtnJm5bBHAL2Df7CdhpRZaSAMNSLrgzNAn4kH9m9feR4h7FiqG8trpw1DsqFdCe2hQ",
  "key2": "42UFph3YFTVFGbDhsTao7WgCnGK6ZaSAckQcJ4Dpm4GgfZmnVCuX1u3yeH5nujRPrjVaSMhuVjspJFiJYKWju1cc",
  "key3": "5n9XdnSQoCE93jTqe9dJHkpoKd8kuwAttNjZtZ9TQxHergc3EzFgFA8dMHDzsAJt1Y4gYh75VxJR6pTzEiAY67RE",
  "key4": "5BDpVjquiMDDJNvf7HRTZXhKDiTVCRbxAKeyZfcb4FFhXpVi3wsfH9yauAUEL7oS9VsX9S8TRVN8q14oBzhsBK6o",
  "key5": "63Fro7cMRMjrF2xvN7se3VwaCFd5WgumwB4ahoAww1jWJmBSuHBDKkQnyuEJXb8iijnAZ8FcJ9zB9f8dydYrKnth",
  "key6": "5X5MwdpkV5tiHptYYubKDQAT9kQCre1ucXi8dkDbzoHxMGyTgG2uQrCaVWeArJ43GZHw3nptvaGRwXVSKppE55V9",
  "key7": "2EEeCdcCwzpGeizaAp5NZqzCXjMbKPDVbBUhJWmSo42y6HmbHXobPLVbxYzdTySMPRvyt8cc14bEugjEi1fkk6ot",
  "key8": "4hB2TuynsiDHcoLPjBaSw6gNtSMjnYc1xK64as4G8vvMSY2m5gjZJv2PxSs3K7yCPQHdGJQfo6219CXvrNx4NEZB",
  "key9": "ZX2xLTqkZtA6pPHEswpk1zEjuu85jt1XMSe5g4qwMUL5J1xf7ieKkM4cNSzEqNimFpxRgwxmPzL5sE7JanqSfr1",
  "key10": "4RyJwsaRi9V7VH4ZAamCrRcwQ5iUt7Xd87aNb6WacMjvKetER7gW71aQ6rd1JxoVg6NLjjc3xv3MMP9bFEcE9CEX",
  "key11": "4PKHdCHHWLEmT3EqaUk76gJ4gXvxezjSMyoQeQoJJ9t7LnA26bQKrbMgHqSAgTHQd3bGGcmCYsPpvhD2RuBH755Q",
  "key12": "2CZNV11aZTtZedz9Ws74eWgxud8qjUUwLdLNdTpszzYkpzSTZ8PDsFtARczk1DKfRAG1EHJi3ufX3jT7SekKNkhb",
  "key13": "as9uEGKNbs5Vqm4yDtPyBScHeaoL8ZLzwCjQ2YvKoBKkbC1iEf7GDBWpcHjd2wtv8YMijdxhDSP3YCuGtfnLTuA",
  "key14": "2nmEJ1nwwgyLiVRzhDrBgtDDxpVmqhuz7FqZjwqayhtM5dpQE8Awsm8Zjb8MdPNMU4g66sW5H4a3aqyPT6ohUPD3",
  "key15": "5xYbMPZnZczQpvTsdsjDdKdhwm3TgjP9tbdywrJXTeginv6u8FNtNQ53KHAiXTXUk6kRoUYdWSGsnShAyRtuRAiW",
  "key16": "3cnxBK4gWunCyURzU813PnRRMAr1kbvNDpipdVFkAtRyPFb99iQ93oXaa2GKQkam86sYZF9wiGKamgZa9NWjcwH8",
  "key17": "3UxkCZ86ePVkVFvMfiCy5dBE2F8xphfGxZ6rQzE9XkmNPEF31qmFpCHjD64gG5dbrpFWkWAmy54u9kDSnK1qzRe2",
  "key18": "4zpFRAXvRJeFXYcxhhqDPj7gippecmakBzLihhqURyZFY6HBbGrPWSVNbi3wy8W7X2JsqMnFQBPM78XXhQ6DyuzT",
  "key19": "3iWw67f5bzmDeoiKkwNWKgdzSeiSz3ZNgJcWDuZPzow9C9VgegkaeEEXyAsDAzFM6vbuDCFgDxasr6RFcwa7fuAh",
  "key20": "3SsvVwXosQ4Dufd8vK6NtX937jHJ8mFU3fTQnW1eYRvQ6NfU7L3KnC28af74aAM6WHzv9J6m5iahNRoRmwe8nRnk",
  "key21": "2xvAM8QSrg71kR75h2ZbCCrdktzv2pC7QC6uDF9sMeSEfFGZxEmc2zCc4zCaY23q2xxzgahfJcn7sCanAcq11DFm",
  "key22": "2ic1LMfZf7As8iHkDMNnsKxtATqDabeNBcZhrU5mVNSVN17NaBN1B1NYWHG15wFLTzwYGUTALxoRbdKzjsBZDWpy",
  "key23": "4XE42kcbm4hQkPXknXHXWcqTxYpZuY2eeA7shtoTvV7mnB8JKeqDkQaCSawEJ1w1mT8QK2pgwGjpyvu2NcT8sjVz",
  "key24": "2nDhGnzh5m24n7dNmmUUXJZc2RupS27XfKK9tunr7NUQuziWUYck66VFaaVPovNzGh6Eq7Z9tAY9F41qAv4dHjFZ",
  "key25": "3Yt3sFfZuHLQSrzWpvVdD8zd4wasoTxfe2PCqxhDRBMwoxbFBaN3NE28UMjC2VgfZ8JbtPioLoQ7tah9vcTPQSAS",
  "key26": "4d1C66kqeosfSnHDJRgFM1J93H9GEqk7z3wBvN1t8dUzE55svGVKXxZJ3soN27RympWAWAYmpt4onPdF1YBU6g2Y",
  "key27": "2CF7ZF6JemZYFR6PRRSLkzS8Rbm4k7fmvdxX5EaRUEQJXcxcD2wgqkPd5FqeyGx8APvdKkEkH9UGdS4RbosBQSWn",
  "key28": "3DtZRc4QCaguF6xqwWYqU8Lk9bRKCqKNb19FejSWiuxBVzCqZzGvkP4RfxMFGLUHn4kCYYkiSPRqLAfs9o8MG2Vo",
  "key29": "57xYHobPyWpjaZY3KWtYa3JdeJqEbrmrks1myY9HNf6hkBtBEhoYzHYvdVHrLJhZUxAnsq23K9q3RGa9Mm9gcKGt",
  "key30": "1Wy6KmJH7FDvoskX6fMSPmKMc8QKM98sMPNNJeRCYwr3SjoYGqbczwUv6wvervigXJmD8T1vjRtr94esiyafcSb",
  "key31": "puQjsbZsNPW9dAYH8tayyvE1BxzDS21wxNGYEu3RZvgorCGZvSXiVvgMYqQ6YUpPpGotDdKb4j6j5BHr3GNYnVN",
  "key32": "4hk2XmcAcXRpxWHa3exSqwksVMVS29tRnJ6emtPmY32n4NBJdqtEn25dhTiwDet2DStgj4mUvDvgBEond1HimCQ7",
  "key33": "4qvDMbyKynPZWeoGhtR1GY22nov6f1TXYxrn5Y2P1NFza2uq9ZGFuHXn5tYWcuXp4DKbmMtCYxErwkauWBEb75YM",
  "key34": "2gZnecVaV4KWRvASGag9ePmaDGhJo6ukLsPzn6LFhaWg6EMx5vMC7msF6V256gfWq85X6N4moWmBFR5T4kLECd6h",
  "key35": "rm11xdPjXuK51NuxZyiK9W9jGR61HiPGY6mERRDcUTxrYJcMqadZzmBrEXGgo5j9YKwBmCejVX2rXacBu7GrXGB",
  "key36": "5SMYzAoSgBMSR48eU3bDPU5UwVfSBTPVAZeyGgi2L2ncrAUitUZ1wvdTUbSug6BjeZGGVskfxv7gwp89338N548Q",
  "key37": "3KK5JVgq1skgoeS1XNVFtpFpoMSRT6QdG2KnZni4inHCicm67UtPHvkT7HCvLVY7iV1f9Si9nMF6WXC13kHwHv2o",
  "key38": "2y9sFJRGVpmAT8y2NEyuuM6kNoPpHi1yKMELs8oQbwtVs1i2yMNBNg5WGVDr9Pq8pdcuUWLFsnNTKgigMUD5ZM5b",
  "key39": "3D6gAHntVEHkiMZiASiFnLjHMySjZnjKr2zhVUb1r4uU3fCbFNQkaVAnevg15SynyfYSYbhWJyoLmWy4V623bUFM",
  "key40": "4TU8RgdxermEfeXvzQ7k9wjQVMquY5fDsAVEVkND26vvLpn7nLtQBB6Q3AJnn3H5uivcoqQE26fHXgmiDkMsmbaW",
  "key41": "2pucm3p3yFjHfDoxaoprziNWtUquucfYd5wxbwwDwz4VCba6c5BaPA3jrKfRN4GCCKDLMrXDPq8GDK7u5iLqyL8o",
  "key42": "2eTMeuznZAzgFLBT6xEBr4r4opyTRqAzAD37myMFBBdj3Jx7nbvwnNMqcQcNhSgy8VKafVD7MdPLTR11NYNmy1Mm"
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
