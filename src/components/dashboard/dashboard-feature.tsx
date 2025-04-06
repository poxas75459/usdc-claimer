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
    "U1APebbX587jqRRx7uHEJX4tLBommC5xA1opN1qgeM2YB8DMCzonxsMC3VByV6WHYrZQJvQW56rqS7XBfrwop81"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H6ktyFeiVUNW34BZQ3mLbAWdgkYqyDchXiUDH7wGkvc6dkEi5PRKdBzJcvM1Wo5aaNBvRxz37H2rAHFdaBReLRN",
  "key1": "4jN2umQxD99N7AUVUzYgqaCqnzksaFEdUcnq9JLGcjcC89Euovu95tPeTzokVjBdP5KuzxQ7yiGxyNQRJYrhsRir",
  "key2": "J7BXG57gkPREifHjoDLdCvX5iWTa3HoHZRhr2mamWD2d9sat2eEcivQzEuSfCREbMSDGqrjh2xVKgPWmgg4uTnV",
  "key3": "5Mstcb8vwa1zJf95HfbXAGFQqVYNDopGmJnNhcSwTAnDTeDiF3ostpFh43W1HpBWrAbYRRZ9wtQDbqkYW9azdq6C",
  "key4": "3883M2u7eyhFTB6VKpRwMfjcUsjRdveQ8FcQNjpmdcWgERarmzoxR6nHqifrwaxqvagpcegPoK3cQfyWW8cPK7Wc",
  "key5": "5gyHgrsntpBw5VxQUiZcRjXZAWFNYRfzJEQUCPjdZcNsTMSEmH6eocyrw2Xdynh66bJdbUzKioBdvYZo5HLuToQH",
  "key6": "5YPTcn7e3r7Fycp4AQMEe6a8187hbYeH2k7Fg9vayRN8knTAkYrTXKCM3qdGsiYk2RuzFneM9DepxHMFV27oEZpU",
  "key7": "2EJ2cMMG9tfDFfZCn1cWSRAZRQ2HdYTjEH9AS6vmBpw6empDGH5GhK4j1bkWZG2TcbMfeXmhM7YVt8iWfDN1efwb",
  "key8": "4n66QQSsUecDfNvn6dG5FSFYTVa1a1amS4d6pAmVtmcrACumV51nTUkPdmqiHoseCrrsWfHueZiTkoRcCs4tuG2i",
  "key9": "3V5jsFEj1z4aF5cyJLjDTZP9iPbFm7xPmYHyrXYh5fFPp4qvr2gVKAgKJzB4SENd9EoMQ4uPgFZmFdDiwbEQt8bE",
  "key10": "5ozDwABiZXUbEESxHBB6zbpJF5qSLcRv5BpaEeSb93CBcBecWD7n3shFmvzZLDxgH75YUc83jzUv6UoszbjLTknL",
  "key11": "3TtYsJwTgVpmt3PEzyNH1mRdMQRKV5i6PymCy7aUTnPSZVvJdFtSknU3WiCTqkSmfzt7XaRruteKT4Wvo9i9mtva",
  "key12": "5546aJuf284iwawS8sixtKLhDvg4haxPY6395TZn4FVe2XrYDC5bRZNh19w5iN9YaXdAgLRdCh1DhU5H5mLeGk1w",
  "key13": "4sFXetjz2Tqo8Q1zXbjhcKgQk4gyWbTdSWmAM8xZ55F49Eta8P9uxuCNso216wQYXxR8PDFtPUWXfTdMZMXHEj8x",
  "key14": "5bYtmqLajLZMngVECYLMBz9apWVTkFrtEVy3zcbeQyHxKQPbywHvKj2qZnBPJPSuGVGcqzhmrYW8LeR86iwgaxZB",
  "key15": "5JLARLhpMrXSkToRkT3Q1EhHRAAB4jULR655L3XmgCTrc9Atn4SVuf4LraMgZWsoX91jpDJipfXG4v8DyUxg8TMn",
  "key16": "3fNsCSe3uExWbyFVZvc3uRCPymd8Q3ERQ5Vj2bC2Zi1ebZKKDAy3kWQVvuV28Hbk2vzaNTx6UFKt32anykG8pNN1",
  "key17": "37zXgki2jSLEeA8qUQEDHHd7JfouwF5D4uR9HZ1riQ6qudWL1o4E3AiQEE9N1i6od67iP84g8ypthhneVzEFbiWR",
  "key18": "apTdhAewsaPaE6REK5RM8vDM5TfTkkG74LrzSEZfXQPciFte4cUqE1YL8crAX2F19PTkC9Zk6XFE4sfBw6fkHrx",
  "key19": "uCC3KmWNztNzvceo6W5hBku8LntqCp5vgj6Wp6hA9Ub1rpv6ueGmHmKDMWXjMdV9wrDJK5zaKDNep3s3wEqEubh",
  "key20": "3iiZXx4Ru2aHaCK7qQZ6VrKSyo1dZKppPwMENJ6hN7B824cVuNp9ypyMnQBCP4kChLBwuzbcsTe4TMs4RLrFUpWz",
  "key21": "3zduKRd3hbQhCnmJVKFerezYNi3957Brz8LXArKPBAaJ4xtCq6GpGceF5NxApKAsq5BqUgtNyFXk6w6k8d28Ywis",
  "key22": "3889BXPuodMkEGybrUDQ9zrf2vdZryXw9SULvz2wdpq43ajUDuucGqsyRXAcUGfyNRxZiz7WmXhtEyUjjqQVLPcC",
  "key23": "42xzAF8fTbWGeLLH97tfDebuRf3LeAXmYmqdVAuNWtxRYcBs4oLn8PxjpSSpLtyxR5oFUNcDcPNhac9HHhDUxDVs",
  "key24": "5pixRVgxANRxRifJvH9JybRRCEkLUAbfazeWgL8GUY6Js7U1ondjYEStzgPVxK6iHNu3tvv9VgyRkwDjcWDpT5is",
  "key25": "BrPHGuEo4fzf1tFQSC4YYtxtmrn4d8KqJ5ttpnJ1APpXZYZcuTMTpcJtFmQAYUkrTCkWiqDthmSbha1PacCN8js",
  "key26": "jBfTVRCV6cnwwGnaofZ7xM8NjKzQ46x93kcS68K3YLQH85sc61rz5NQrSiA1PGiQj5fwNUwR2awVjDghibmVMai",
  "key27": "27Kx1vxnuZNWPQbguQUDhYokzG6QnqegyEdgcL2N5j5zk3DbycNDpT1He5yNFiXghz4TW2ghjbr3bQHhF8v1JuzP",
  "key28": "5WhBySACEMbDNZsYXgoVmBsoEEdHqE9Uqr3bZUMinCmhvRvkK5nBVFZNr5hq8dSfEgtBc6aYCeHbU6uvsQ4fd79L",
  "key29": "1UMfpeC2tTTKZsmQcErS8xEfpk6tz1Zv5wjYNdnEe9PCEdywQx7uEH9dZXAKxkp4njzxTodjeUrt2BdpUhHyqyP",
  "key30": "51rYKLBF7zgmaaN2K53L6SjPx1BhrLr2W1Xtz4gavWzsRbLs4vkPNUVckLYHhBiNPG4gMe65da9ALqo8C2WbHjRx"
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
