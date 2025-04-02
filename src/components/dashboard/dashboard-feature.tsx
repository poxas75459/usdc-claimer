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
    "2JVroXskz14M4fro4JqNsdE8ceMRoDoLNRJM7ZdW5P4DNaLmZ7uRMvWtBQhR3rjGvawXcwysXsJorERo9upEmsEV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g3fHU6kuEmuhPmt6WBYbMwFRNZ7rVjADaqMibCq3fc14VbNoSC9qbTorBBKcTMFhGYJZffiD23MNecKmQ3jGeYW",
  "key1": "JjBahNbtPyEFBuSqNtSktKy5fXtDsqTm7ZnaM7qPoQ4eXHTTKMdrtD5vtkwUGT56nqzynnrYTTjgCMTYcny54cM",
  "key2": "y2oLJJmBHgXAysoq44nghuSD4tEkxaY2qfoVE6bdcsx3om1XdwEYLZntRtNzNoJd3DQxKQJTnnYhXr7Tg7WzFbG",
  "key3": "34fqKkqTtPqnxXY8FNMgQa6TT6d3HFTQCVTXkmcvQFgBCFcjQcbadhvaGKEi84fz4D7hi6bba2ZdUbBBP19yEpfL",
  "key4": "3ELiboi9mpJCSxB1HRmunww4h5fQzRdk1DEP5nRiA8TS9xDEMEzKo5ynNA16pY4K8zyovTeqp6L7nFsKcq1uTRrj",
  "key5": "221tykGSR9zZ7rFX8AFNYqqAEQQQSUWAB3MjSJmc6udJy36f4PkoCSsZ5JhE71PyGJrcX5WdkJgLy28MSGPJsw7Z",
  "key6": "4mk7TRU73iqadELwNv8M1xyjW3TE4jVsSn4tWkdTabZa1P3avUetEaDghxj8YAoDVSoZjLBKpJbA4hPbemJ9mM2d",
  "key7": "QKKguSbMbyoty55xnMCpwf4eU6vkCWZNeaDSMH94CGeh5skrPbws6iw3j5vXUMaT58qTHduDZCD3ewjzyjgW6tT",
  "key8": "4FjgCpNK4KpDqPZr2xfxmQPH7j9t2X2sWYuz6PVmv5DbjLzrpPFL3mHUVrCA7Me1MhTKRBLQSVFyhHcyrj4E44aF",
  "key9": "3GAJsiojYoFGbV4MW9ouw96c2aC4togPaeVXEkQND2dybKaVEQhLRg2HCMJvDPCp6bVH6T3tc8Rb41pz5ewHtCJa",
  "key10": "gzBrgwHqLbDTHVo9KMb8gsc3HdXEgsB3idXEKXQTKbthProd4KqJrxQyEVkFbmsMAZVxH4PS353LA3Yy4bhDxyV",
  "key11": "477srDgr39WHFNLMZxXoxnr1B6S7xcDRnWLdBKFsvYQEtktCHV6m8ZsStRFaNat8a9Cxq5xG5mUNt1oNMoh3mry7",
  "key12": "62LioKvDgEN7t2fKah7ATVnvkGsKNq7X2HP4kEsSe2C9whUPasxJDFRAXh1S66omRdvZd6iVyMq2gBbnyTLW35k",
  "key13": "5ooPDdSjCZyyrqudhkqjeLM1ZSNwbBfMVYRxhzxwguxT1WnTrfUrNMcieZMx3dWAcNL4nKR9zBvodCTKaSnb7H84",
  "key14": "5UNtYCjjFiECeFBU7VZSWjYMuTN2g35dtECFst9SwJqwHkXXy7sxyydsqmo5F6B7Hj1794qJKHvLUqY2Vnbi5enb",
  "key15": "3nb9MeTJxqyx3VnnJxB8yAS7hpjSPBC6dP1bzt8tMoxjghWeyFbL8YK75MzfA2SUR82sWn4WP9Y2uLNoyWn2xEnA",
  "key16": "3LnxGhaVq4z7bhFLvV4cGsoAfFwk69ufAwmaGxWj1YhD918J5YPtugjHZoq52eh1ZAKAm3oyvMqQKKYSYxyKTjVq",
  "key17": "2J3w1ASrRUwewu3eU7KmfXPWNTJfDupzQrxp12FuCBuvUZadpjcrPM4u7jPq3eDN682uasnbAFskromLFi39EQ9K",
  "key18": "2yJLG4xyxbqXRgefwPtAEnf18BaEM8UwKG7YAYStXxBjjjimH3VqrYwUHqWaXK3Bcm3nrCjHJPaNHzxcoCKahV4m",
  "key19": "5jEicsJxce9FUhbR7kxPWf2nCi9abEAMvJEgR1b6BkMruhoKyth7zKqkskgtYBKWmknbmFFYKkkz9YuTanDGj8a",
  "key20": "4RvCcnc1HN1EUD7K1Q9WUSzjgkzM18BnvExotvJR4QxEjdmwbpdQ9yf1yGZ3L3XPafmGxhDxjGe6Kj274DsVX7Wu",
  "key21": "3BoiFGc1YhxpHAjk9cEBw8akMp3wnziKiXoHavSy4g6MAYqe2AAyn1bBXHDxcs7x9RXKesTjG8zZesp5nigmffmu",
  "key22": "wp4eBaQq4jXYuqh4Kgv6ogEpL7G4sXb6KpaRuzbU6x4XUGyeraLGVWYeqKhc4VZaXVWhdGsw3nYYXiFjhp45ATy",
  "key23": "3EwQv6Jffdtzt7b9RWtSYZcxUQvwtTkTXWi5cMP2t5tcqnH2vW8gT6UmWzoJWs8BeaB2cw4yQ4uZXXMCpDUKmXtX",
  "key24": "2sdtd1CZwArs1UCS4ersyDW86496tMKDkMj1czweDjG2w2oi8T824yo7hUQBy1pNbP8jjVDyTBhYZ77ezyTtoR4P",
  "key25": "2z7QFp9DrDApqrgeKXn2vkD3YHeUKbCe1DCLDeCj2YkktQkrivXHr2zsNyFXWDcQnNqthVgcg2HDAC2gxNz89woT",
  "key26": "6384sTRH85wQ8eAMqNj6Z8iiyn8hABKKb5nfcW1wRjigJBMsMJKto6HEb6uzqV9kDAJ7PTjfJ1cKAzdMm463Z5Wc"
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
