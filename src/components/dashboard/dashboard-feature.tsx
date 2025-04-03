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
    "aCh4cAu6jaFbKHZ38vvsCGHukm3w4meWmzsaw7qPXVRupJZV5SJThkJLfyPGnGkzEEHwVydi1acowdf3W3sfZ2a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yWiyW4QGiWQ83CACbjeviadnaQ1CdBygtkfxrXdMuEVhTugK4UawJfWyT7fyMJ22xDucVr782uG5Q8kLHAAgRDB",
  "key1": "2uwNNa7HRRezNRDnxVJ351FMe7eFQVCnjEBsMbDz1ci7RvhR1xKZCgQfq1WT5bzFjtTUb47m4yd3p8M6RxpihKdn",
  "key2": "4rqMDrbqpSGid2DjueT8uZ6LfrDYgvtPs6Gu7uLH9GZZ1qvWwiu9EXxcGe46egCFz7nTUf8cbZBt3v2rfjaSP75T",
  "key3": "2u5qZ1dhw8EpaxaUaFdhLy4uSnTk8CTbrCnoGeAmpeAPFxtC2rH9MBs94FysgEF5bMdNrga5r7r3LUXxKkndpEhj",
  "key4": "31BLFpLLzDXyYZygGJvpGQLHkkqJLggeWBDvB7L4VN5nrihHidjqPxWPB9iR9eiNpCqMfFejYtBSRBCKoZssG4CZ",
  "key5": "3LzftdACrQ32cWKUqEj1tVHe6ctB53WoJghpqDQovJMGhqnPbZSDGEr854VZYZGXwfBtpwvCij16oNy83vZjFWwe",
  "key6": "5r42hjmvnv8dRC2hn6RdavZjqi4LA1zijBMMzk7ETeaZG2KgzapZAQKefxUAweLjdq9mMk2RaABN2FwvnWk8anvc",
  "key7": "gXKmqJpuoPtwtLyDKeBwwQkTr7bCFt13M7yrW2EBo3Az9dPX5xFJm6eQ8JzuojZy1GTvtXR9HZYH4F5egce7eEC",
  "key8": "TgQT4WkodCpXbkFiYsPuJUrhLVxx4GhsqRLTvaTb47iJV8rbmw6AYpDWrgFupyM2oiBq6vSeqARZwfdKRs6v763",
  "key9": "ymEouwqiJMqSzzWC952fJ8WQM8vKUT1PUH9kSj9A2xnzUiwtBbS3Lpm4SkG64rNpe2RH1pFKtLqbxCiUvLo4vPV",
  "key10": "54t5Gxo6NCqKoJT9nMxsteAwKsxKk7KjhWh6xjbc2N5iCCfiE4omrEPg7WeHELfeGfGqk44bS58Ge5HC3jm8Un4F",
  "key11": "3LAVHy8FZNvMxC8wgnyUi4XYtQwHcGQykBxLmKxguBaqBC9hsfKoh9WhoBAARBiR1oWSWaazYTKidDjpKMn9BrV7",
  "key12": "qu6gQ3w97ovB61uTDLrSd1Xw3Rz5o5xArP1B2UaHyEShrK83Jm9Y11csAjRPmurpFq7FZYah718KA25HVG6CATb",
  "key13": "3EnDHbuNH1wf5wVNbyugcf8axZzyUvKip4JCDvSk8Buu1C1nUmjfRR4A2sDxqEevGnj5XVGDVdXubHXWJHseoWfu",
  "key14": "rr9oaH36CV6a6Tq6ZjZR2vRRsR6HzgV51XcAgRLWcLEi38F3t5DzfKa1T1Uo9XSi6JsXXr5yWdxYkyFrxNS4EMv",
  "key15": "5BC33rwTY5NsURXgBAV9xBaa9vU58BeUG5VTEoPuLGRTVYWd2TRp87FDUYTP3DxHkFZUBVE9Bb37tCtviR3Lk2fc",
  "key16": "3DnZGaSeEsLqHv3QUeU4W9Pc2LSo8yJMKNY6cfEyGcELnPpMYLHtgcb7UzmUoF1s7rcFrs5yHv7KWPsVeQfPAPyT",
  "key17": "5cQFH1cCfSNBb5Kpr7L1vwfaQw7RfSvSYrxazFz5kmiw9VwoUUQWhwD4VDHmyqEKMEZmeKP5FNQuW5jdouViqM4o",
  "key18": "2XszjpDinsyvtKmSz4Wwim2yap6ndZpX6ChPqBn5SW26e2AZimLPwHu48g4ZJ1R39sqXfuRQZPpyZjjTvpj6U6XS",
  "key19": "4FKGSFafQUsTgMpzJX3VRD7BM8gCW4K7kfCPnhz7JGSyJzyQsrEJC2LqTUQ3RUk6gRoW8XqVQH2MHCJfFariHx2b",
  "key20": "5y2DvBkrncZHe945tyv2Uv7s1Mr453F2CZdcMo9jTmGugEqDCjdeNmVzgj6x1oAsNHbSjJbKkqsVbqxSW3CcwQvS",
  "key21": "y1QCddRr8ZjKDtU83cPUmk6KoB4mAVL6Wpqp3KdaswE5VjGc4o7d5TxxoqX5gcaUAx15GfujgxZvTenHkCki3yv",
  "key22": "38bP9ZGDg7JLbefjcEK7voY88P7DMGm7LRbw6nNp9ka1WtCRCJsL7FkWV5syVSJwrrCkYL4u1TcMUJSudPiFtUcL",
  "key23": "65XT63nb3QS3GEJBeLKjQvs94D2pcqAkE2CHYR3bXZCP6Pn3V2D8jkK8feMFmWBn9mVBKDiCZFGUFWKeteGf2zuU",
  "key24": "4ihzhu4mXrspbPWTftqJYCefyBFJZgtygX6N1t3PU27TnFS6aeq3bMTZeeo6TXpHkL2GDMiN8gbYEBdkKwTsvC2M",
  "key25": "3N2zAnZixLb2xL4nXe1EHghiG2Mk5AcxGSbeu5NQqMyCnySd15QZpVWM74FuDdRevLmJ16Y4mKokCRoH1jYmZPtp",
  "key26": "8KXLkYhfEvGsQyv9YZ5pKGb8FhEC6CSZoybHggKrGqLv9oEGUZ2bMGDHAgRKnawoeDHremHGfqJgKTbvTi6EXqs",
  "key27": "7PRZ7R6XhUXCTD8RysicGYXPAtNtFp1BmPPKAqbikneAPRnvDAoELD5nDk1Maipvt5v2LLJVgJH1bmhSvrCsNvF",
  "key28": "61ZCgu2c2VnDjyjMy4mFtG8NKmNrkFRBi6JVwW4jVPRStVb4NyxV9to3FYEvbuKBcPdXqvtw8rid4hLHCK27fz96",
  "key29": "4arZgpwsL9sZBbAy5mT4pk696hKNJ5tFwfujkysDYzaSmiruhun3epVZT1E7nVjDoqWMcEfti3nox5wvAXmsCGk5",
  "key30": "3Y65WdRBPkBMzHHD1GCLseuK2Lvxsvgh3WLBNhezKLkdH3Zs4j6BExbN6LpGWN5hUr1krB9fGNdULJTE8KzvxaDF",
  "key31": "63PrDgJbHePZ9wE2q5yxFaMmbwFYpeNwSVNkthHdjP44vbZPj6BDXaFeX91GSf9Zaiq4c2AVBDwBjT9bmPHvavqQ",
  "key32": "32kjoGgst1QLjGMKghRyWp2V8pk52cwEWnyX6EwTjfhJqyrMs1DDwQMvcxwTemffpxZDGyDfqs1KW3P9Q1s8kiS6",
  "key33": "4kZUsnUZJHVfs23t545qjG7puD6nZNeNC41wogyZBY3avhB7p5PVLNxVqP34XVRKfEqiwKFLsz6EDmAKoQ9UDqRW",
  "key34": "2unxPiqmZWVLobarGMQ8Pg7qRYjSdXCbU357dAPMiZ4EoGMxXsZW7za7fDDf5j3gHy4o54Cfu3LgqFbxfgiR1c82",
  "key35": "3cTU7KZ3bBtj6ip6nGiAqFeQRmBnLkMHwFZmh5iGcAfiJyyZJuWWqDSkZVVaFudtmbdgXc6ueBWRyuLYuQfM3pxi",
  "key36": "8u1ji1Jw6BWPWcGhQshuYCihLVnXWWewRDF3i3TSe8MNQss1b2pQg6E8Q3VGqs4jYCpqqpJ2GiZpKHPKeQiwUCE",
  "key37": "TWo5mzRyEJVDJFSJzPmYdPdfLJW3ifNwWQ2KaCrW5BEXB3EtMEGkLTrTWd5N6o5tVRf3UoZznGprVmwEheorEwL",
  "key38": "3qyYBB78V3MCA4ZygS1JEkv7YzMBFArPgtvbvFVpDjAd8Uw6NUGGgUY9vH7HqBgRutrocxRRNPjCaw185H7iaUTj",
  "key39": "fE7DdQLBxE54mVc3ij6fTgJFuWJtFXeocR7HAyqqaf8AfpHRmq6uuVczyhT2KHTYyU9EKDBGnNUgBp68xzZD2yk",
  "key40": "UF8NiG3aiTGoJvAjuhyk35uj1PpyXaKkDVvjwVrV1M7zPMZD4f8db3UgL3nR8Kci8TF5cTbEUXCbyT4SGtNsc9r",
  "key41": "3sfz6NFr7aQ5KQ6UYysAvAtBih1KRdqPMu8QpXZ6TiV9NUHZaqcLrBBMA8PB4MPvX93jLupCEoXBvWvj7HyF2PWu",
  "key42": "5hkXKLYX32ERurys16QefJBe2rvcLwj9mvkbAXhhEgiuy7Hrkn3G8iBTxvdAQj653BhQBCC4ec6nMQ8fHVqhSBYe",
  "key43": "5SWYCdycCa64Mtvus4KdTweEdqKkRBSL6QWWfKDN5fAMteqNBvoes9FV1NcZXLRwGVUa7xHrXZNE7m9CrZDC3E3k",
  "key44": "WqCb8zZzfx3B7hmEjSMF7Gs4MnK8u3aSinjh9X5NwZSpA7XWiPo4CuLqXF6S9e5cMqAS3jmF1YC24yq7Rt42vVv",
  "key45": "2bgi5VFHG3QqvcdWjzKjLMZg7Myfh7SKvcPeoh5WbAWxBDjHtZxKUXevYx6t6F7itmWs1XbM9uQG6vxXwbvy8mQ8",
  "key46": "5djdeNazddoQDYCrUQ7jSjPbHgfsyjsdXrMmyLJBBVQDyuAKxRfJ31Y5xZZAU2szzvubZD7BbRnv6wTScgGVPvHa",
  "key47": "rUi9JGJRVtkLWTSUr2kf7etTipYXyWxYVb8A5HNHnqSH9rNpF5wgh4cBGQVYqmv8pUtP15Pf5AZvps5gxvkCdEf",
  "key48": "3o2NCAuf3hRhZWiKNxXdtJyuDoTqmhAgBM5D2Wc7uzfTUB38GnFDTsZ6MReEqWQDCq5MfqXYJaYs4RCB38x7cz1Q",
  "key49": "4N8VX7XiBqPHzYzyEH8D67zhHVpcNyAmyywjWdspShjK72WnYPrVQRkyQwNGDMRE2k8qUKHM2EjtTi9bxNk7HJqh"
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
