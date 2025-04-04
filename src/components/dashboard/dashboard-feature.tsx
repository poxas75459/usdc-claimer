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
    "nwa6AgZzdkoUhCVBJoSwMye13roemnQ4PQ6z4oe5ea26X8xKRrKY7pMFqL9HXiPkq9fWCTHgg4Ty9qfUiUZ3nWk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h1TQzYkAggGwqa16S7CMTQhpxoxJc6498AzezCR7kd1DaXJ8MNhaRWrxrNNeyTsLTgGjMbV6j6dLuE44BwZMHiv",
  "key1": "5GZ5YBuDfQ9YujUPVe4RNXyG1LfETfmAacL1Yz1EE3czkoriT9wJSoqMFzqrtDfuyahVHU5TvnT3rPK7ejorJGwG",
  "key2": "TNtuFivYcqp7HyYF5Spq6CYnCoDbg7ftyE6HBBiNk2bW653GrwfLYkHtpMV1DDUTigB3aaFR8mrJybLGqkhhUqc",
  "key3": "49KQnxoQS5pNMWr4vqLAqWCQcoSetEnwN3J6V7iSbGha3u4pq1P6Gpr2iLr899sGfsu92eNVN8hMyqPHxU3ff218",
  "key4": "2xy5mVHZxRT7BJygCTzfugDgdSuLsB3LZXW1aQMoqxMxurgsC78DemJHWHHnA9T8E52q5GmNwSpQjZEbdBURfEXu",
  "key5": "RG8yQy75ebiawfqtYfeJ8ZNWG4EFtMBbZvAR3E5DZd6wv75Lvv7uLiVXxJGHpz6JkaL8pe7yabYtrEJCs43hUJu",
  "key6": "28yiYcSwe7fLu94yKq8iiRL31HtdhXFc5h9wkBUEfovmsMg79JUJKbDDcSntwHscNBZHCoEd6LvqBHAbzBXXFQye",
  "key7": "4ySk1yEAikM5neGz9k3Zcft3FeyDkTweroEuQAkNrzVR2DoGSMak6NRkoTdkypPMpxR4JVZ2cmtNPS4e7sFvqa4",
  "key8": "2iRwKmcg8UkJghNHaporMQyRbDiEmkbEY9pui9Sfs2bHBU6G3MrFKrKvZzFA2h1wsBFt4bkzJUMpBi9emM4VvHTK",
  "key9": "2rMHx6JdwaNTjxwJbT8eRrpzcXc1B1mdQYNu8zvYQzTomwsbTC5Jt2TVT8fd14DaPytVGyDGtigbNfnvzgxnJtwF",
  "key10": "2VF7yXCs9hmHzkHNpDkm1FTsZbTN7QXBtZ7SrTX743mgTUcf6PHWbG5tF4f1wNMxWYmqhpEWtB9Rr4n82sFApD4i",
  "key11": "4V8Xca8WeBsdPSS4VwQ3PUZHWsXPcFYWQrhMN1GvwwQ3xrbX4FemFUjAttLASCcHgpcEQxsho5xmia8ahP3waaed",
  "key12": "5YWk8sibHV7yQb5u9pU3UH6uPhsXqYogBYHkB9UVDY63t6uSaF6ZaV6S4TnGcm9gDjGGQb3wH3sPMiQ94nqc6qTL",
  "key13": "2VRYHrY75dkCTRMyGDHpgeopzuT7itA6z9BZVRFiDM3QM92StyaNc8ehywwjXYK15BrCC1ZZroB4j3RUShrskV1k",
  "key14": "5CWVsF9rZ6qYe6RsXPrT8va5zrFEashQZsaRxJ4HWiUSwnHWxjbBYQCZ3U6iFGSrz7sisDSBb6EPfUzeeyP2tAmE",
  "key15": "5ukr6MJfeAk7V62VZd81QWQZUqSdpCq5T7riZvfSxkFo2a1THUM8K5P6pbsuAndacMnAwpQPbuPTYWmTmYULqtkM",
  "key16": "5jaj46Utobu8ZzUkni8cr9JCtJk5MyD4L3NidcvJB5C13rz3wD7RQfPCHVx9q4FmvKqDdtXDMJVh3DW4omxuSVsR",
  "key17": "TptGWS6jZvNLgZMhT8u2jnGWEx4NS6Xwsh2uF8vd6CbyxQ8utPmKxGKDVzn4zB5JDM4CkysWPX2vexVuAbVJ5FK",
  "key18": "5yKMtZC4cXXp19jjwawGaN8N2KTzx46C1PLBBfnB3cMAsx8nCxFYXcg2Yxng8xD4RiCNYKC1XcYudef8K3EJPzBa",
  "key19": "3hSXK4e5dUHf7Pt5xGTrUhLc4s13L5VTapiXMEfKEBNHKmGTHUp51FnsxF7hRftKSCPQx8CJAU16us7yP7F4FSEY",
  "key20": "32AyEXAp2NK8i52zCqMu4BhQAzLkTLPsYSBCZngtiYsQaFxY7UizHuPC1KJj8wqu53ungMwnrdzCLRvN3mJd9Eo8",
  "key21": "33G3nFVvzigTdQAWBRVJesXduMfuTGAg4tgoUkgvwGRhjC5b6w33HqyPYckt9kLtDPFUKRF1r4Sq1JbfPZAJEvee",
  "key22": "T4RvHMuZCkRucWQSq5F98qhbgjU7yNcQnrPT92naPB9ZnvcRXRv5gkSD2kXLmVFyCEaxywGqAUgbyKbTsJxP4Wq",
  "key23": "2YMTmQX4aEt2eWAgHrE8DFUgXfxWMLvzuH6rBSqEEHLmY3KWrhse32yU6xXSM5xRAb1MFbzvHVJPce1EDdFYCSQr",
  "key24": "18fDEVPkyJzrQnoWE484nx89QnqzjpASC39riXvE3mgHQcGL82vC7xVjQJTeQ5K3JvxiK5bCHHHER4GugSGhjmd",
  "key25": "45L4avEopf4TSjuuStfrzwXGdreqo5d9tPTgpUKZwMmLPihzNVxDuwNTFpRXDteqMvdKnWV82wGyLhtt5C2EWYiu",
  "key26": "5nVSeW4nBLW29upLsGd8SShkPz2VbvqwssULW5p4KHBvq4Uu9p4wDaij7NUY1iwc1VJ976f4peZiMwtJRPvNcX4o",
  "key27": "5Am8wB8n51CuSM8GkNLXJ8hbQMYmpDxzvLRDCxRf6eQdzDXsTNbL7iyxEKQTQaSCG3d13sAmzru8v8wDCna5uYAX",
  "key28": "5UWtk7VnL7BZ4WQ8H7FbFJRZKqZTgzjSFye4A959VtBuMVZGnGqVBseFDXoKed1MAzTLoPYyE7pm8Bc4qxzabi4"
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
