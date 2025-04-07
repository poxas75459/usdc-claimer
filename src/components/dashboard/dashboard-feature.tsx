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
    "5r1jc46uM5cMYHkQ9NGMfTsDfk9kKZZ578xkRhr8Nn9HzCzYRQuXpZVT7nYTxWYfXWB7QsAL2xAjSL6vUm31EuYv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WV2JmMj5UzPTuzRBqoAeYYxsvs7FQQyHtjH9doZFDBSfHZm5xPCjzCU2vEwDyNPUBJ6SxfcKwqPAjpvNnssgY3L",
  "key1": "XrAc7bomn8uhwNwEp3VqTXSWP2HfeLEoSxYwk3bZ4r9jeLgKEqqBf6Kae6484JaLwMhPK3ebwCaXf8nyZcdhAJ3",
  "key2": "3Cv1BHXsLpxp1MKesWd8f2kkS6TetN5SLV1ZUaakHzXAdY9pGQUrxfSBjv5GnVQQxdLuCoqMeR9G9hXi1xZhUcdK",
  "key3": "4NBTFS3ByKRoouhsLpthdh8FEtfmdo5mZ1FHL7BoW8soFcYi8GjJA3ae7b95j3avsMPLHXamuVUtcnYCLvUGWvPw",
  "key4": "2wFZBJkfkvHf5RPFWUnGPDtomFJck8TersZQgeohuqHvq9KWRfZ1n39MDYMzCcYDswaFidxcoDKoRvj7nWAPTpLm",
  "key5": "55MungXHFCfCrBw8PyGikv4AapiZxtwXEJYQVHDToa8GAPvU6FWp1fZuFeJGmwqurKQhSmoZ3p2r5uJnj62LX1io",
  "key6": "46eMrPSAFCbX9JbGvYMiZ27cmsNhCw9Q2Q1E1V7fj3vdff6NcNyUxHGmo2cdK16RRokGAh7eNMrnbHsiToAGTboT",
  "key7": "5GQQt2xbCHQHJb6vnFJwq9pSc1e8wpYg3tQ6aSQCV4CqHRrbxEWKYjHDCYz8BTfJPUuYPMb5pdEgP72QtkGfQku1",
  "key8": "21aQqoCLk8pVytwGguDRM4VPbs31jUVD7F4kCHrxVEMFDXjj1TVHvUkCZ9SmS5nCnp8d2dBhjvFLLYDuvj7ta8e8",
  "key9": "CRD8ADTd2XbSuagCuUTe9DoBvAPh6HCYpC1jH1Z5vVe2QCfLvorGdgNmye9eVuB937mPzvqrdFhgNw5P9mY3xgM",
  "key10": "4byizfhxuXcVWXr3d8SzbNjJctJ5mVTNFYH9jRB3guLE4Qr3DfDv8iqzmbAzjC212Ax7DVzMp9Vv3aiizq2UB7q4",
  "key11": "Eaz7qNg6NNy2UmD4qsnFgzbTDL5cKGETudueW8EodxmqJYn34V3fFVA51a7yxfXTaRoLur8u35nr5xN87o42EvB",
  "key12": "3TdnJwY6tJB5mzRA7qF7AviNsKWpngFtw99rVQpARjmXr6LwTXmratPu4ZRf9m5wqc3LSvu9b1SLH9r3bKCJq2EG",
  "key13": "3zgCLBGFc6KXaN8nUv4yZW2WmnrD8j36bK21YhCQc9vTEKreQk7oZsYxm6JG6mKQehaMVHtjta5FKP3qeb7ZSVid",
  "key14": "t9Jw6FJ3V7nYKSpZ6iuUZ1v8c2EBPBZbfB1QNNHKzpY9F8qpmStHqUJRW8rhBPfrRP965CdP2R4ZzZcqD7mMqRe",
  "key15": "3B7tkGiGx9Kzp37t3YZYnfinK9BG6k6jHd1wNJCmXLjhDQ4ixVpvEmz1wvKbFY7A3ERj9kCcvp7H2shtqjHx9UJ",
  "key16": "4L7mmyV3nHTXhdfMQrfqjUjscaN33ujTcvgPQkFd57EfyZnPXk3TiQ6AM884M1rxC7xqxRFypjeJX9LwmJsXCxZW",
  "key17": "41FzbMDyGeZEyXgHd9yjywMdC2A3p7AeJk7uE3vwV43Lia4gyd44k8xxyQ88wBHGkVZdfXFRh6U2jwyfYH8ed7VA",
  "key18": "4Q1Fs4GCcnZYebqT4XTF7cAyMCVSTrTFaEA5p3WL2FyTKUQhF3yxw5dhDKRkZQaDw3qw1abMDgpwAnBYv1peQBVx",
  "key19": "46TQY9Tf6U5iDZokymzTM4Xcja5u61AQC3hsXgbc8sUnWQ6hFbuhgUqk87UoaYAwR84FS5aK4Vrr8iCrLDrp3611",
  "key20": "2Cn9uDFeVMfqUbEVssoA3oQfx2pggjSMVzEmHXXSXNTkoh7jUJD7GtZgboq9S7DLTV5mRaJf9ytBUChzaddSNt2B",
  "key21": "4ARUHcdnoe6um8rhUL2aYdux96TZ8hp3URJHA4FM1RdzwJg9EEQpVRwRRJEcZiaDt7QZmPgtgt2QmWaB6TXW45S3",
  "key22": "3nhWBLpygQYVKeUms5g5ySMS7ve1txxpHPCXtZC6NoHbx3piBQbasjE4vMdConxvPCuCwdF4tLUNc1V9ikFwD6Mm",
  "key23": "3eBDPp4V3WuFcQVvBeKqvTxCR2UWDk6Fh1Hrme4WGqhaM2jiDCKbtLnpzDD76zzLAFho3borHs77Zaa9a4utP6gC",
  "key24": "mUF8oDzKwas7STqmXNYHD1jByreJ3HDyshAisn1yDHAnr24YXbM5hFiuGuaJJKdHVgNpmBrRac5P19N5oLsQ5ws",
  "key25": "KTWQUCLRroqAjSS16JpKsDFe6VDmm5xBxfWDER75zUp4FaQSpPfF2xoseNoBzPtVNC2UfukZp3mwLs8VeL9gZbE",
  "key26": "39jQg39qhJT6tuS2Jmb9dRL3q1EbgzEysMRo174HbY6HE3byBNzGiQ5ZLwvC2UHREMmGUmBUbXXW79VTPEpdMQy5",
  "key27": "d1oHvSZEmzNKSeTAHxZEHd2qUsrrsRgLKTAyeC6Whz6HZJ3yqqfiLeJZAomdMahmuLe4dA4Pxdz3c7bbZYREXZw",
  "key28": "ToCpPae15qu2idd4cQvCXnMYVvu5pSPu5jTQHFGu8VUnKF2vykTLGQE1yrMSesjrLMhnK64YRtZwyQ315k9254d",
  "key29": "41TzC4YBirqCGuSeMQRcwy6NLx5npoipZWgiAhFjDEbtfqqii3zJiZsqqKAkyXJeevTcnQStC5YddtoVRjhBuQGv",
  "key30": "5uwz1xm5UgAmWGdrpYCXUkU9dFFAx1uBHZEJkhSWRpJyqCSRcrPx1rqDLk5Pkaa4EWEZETdxTYdqJXwyf7mRYvG4",
  "key31": "4UauM4VQqTb1Y8bgHCEZd8JRUN8Dtofxa9u9pN5zb73BSVrd6JC25ieum6KjtMBc4XBQwSgXj5TSjrc3N2jh4gdr",
  "key32": "3d5Tz3mPjjnhehSJutWU9o6p1pQq8nQoMTSdX6JDTWLgpcQqgYkC3nZgzyEZVvQDjeejAUmNeSVMPWqMgTR1F7HD",
  "key33": "4oVdmfcCnKNM2fiF9NdP5q5nPnNp8LcgGLe77s5BBe2aFgKy6K19vJ8RUerkuhvn11NiYJDfLkiUHsnKmahAx1Rx",
  "key34": "3Vshshe95fKw2ixgJkP4XaoMzrbXUVHQMM76X1LHJftvThE9oewxf6wpD2Sn7otqFW25J41Pt4vWHo3txVtmddsa",
  "key35": "4v4uvZm6fufSDcekyqVdDf47TsBG8HQv9hQYinBQquWmnbMHyQyqS1ba4KJYZcY8MB12oU8KWAdkkHmyeFCtceg9",
  "key36": "2LBaGURhV1Cw1wVeetDkwmHxjzWwgJfPpm9YMY1tyMYwWavuCJTV6xGkKjL6eMTo9jrmUVAUCihEAfbE6h7m249A",
  "key37": "5V5k7hqLFH99Dx7r5pHhKktG9dpNHLrViUwudnJ9xsj4Qyy3fqrESPPLDrK58nDPEx4XJwefiikn6efoUKNFbdYc",
  "key38": "3xTcWUEceALw2wVKdMXMH1cBQhxoQRws84C6huHhFe8XjibWYidaHRueU2j8f9iuap7CcKA7jUpuQTfgW6T3YGfy",
  "key39": "2N17JHca8k2ysNhaYUWr5WQsRPWHHSuq3MkxMJP8LVviARsEe23zQhSuk3D4NuRgWwrRgGu2cnmwCs7L8VD8XKv8",
  "key40": "5DY5u7gXkD4Yy9XWNryanbQgXCcLnq7zcvcTtqE99Eoopr3xdF87HVbGNfgneAEpYdDHiSa9iYMk9bxp7XEbHvyB",
  "key41": "4Vb3f7sutGmNEWtkcqCsxkxrC18Vx7eteKbujBgTvVY5ypPNyYqq22j4FDHowz3ubi26WzdXEFSH1dALj5vtDmSx"
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
