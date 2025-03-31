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
    "5nfFKjMZC3kN3FpQmVHcN9F62PuXGxnFJ1SXGfN6vuDEXjMTAoMcomtXvvYHJGHUTT9WQsPK2GuHLvebax7FcF2F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3agPgS2cZxiDUSvhjD7zC6NTbeLb6nknS6tg3nPhJageZt96cUCLWysvc8W1WAMKw7jksNifhHkxAe9TWV4j2bov",
  "key1": "5pRSKdcGreDXDZWNKNUE6smDHRej4BjuGdM748Vp8mpy4QvD8gmAMsHTbtBRtgnePojLGzZZAqTp8wS4WwgmBZNk",
  "key2": "xiwNnxynSyhQGrZdNsTUowLpmgv3DB8bNJXqPdYvWTrb4iwVB2ri4VUQDPZ6s9R2Mjf2nxWJbYdCqBAxRfGUdBW",
  "key3": "3wFjaPQ6AzEexGbvtdEh6ka7DPRmjDyPqi4hn4ntoffUyzsk32exD9QfwbJBE4c7uKR98ecnGyU13xGuG4tUCJcd",
  "key4": "bpdfRZ74szDaCSPadZ674JndhQfWYKcpiQt9crp5CK8PAR4Mw1GQ5TT3EhmJLyAUg5ZyGRG11Fka6764UFtAnFX",
  "key5": "5hGwKcYf5EiKoRUXxhBqu9DSnkGRTHDA76mZiUMDciyG2TeDa1utWanrRdcSJwnxmuqPRfrAeZv6xMamrHYvPJKD",
  "key6": "3s3oobCEuMrLXKgBzRzrE3XxCW3vs7ra62icbnYJCeNHTxX4nWMWVEbfw2ABWcnHSuXE13ybHz9rGLd5wfs639Bk",
  "key7": "5619V4JHirDhkRCSgx1iw7tVmkVQD7e4f1hJtZiCJWecTeiFrbWPUcq8PGoTFn7cuNNHfCzfXt4dY8kMM8HxiKgK",
  "key8": "htieuLJ7Au1oMVRZjjHaoKVgXJt6Hek89VytUh8ghKcGVHBLjvGgrwKu5PgQKDtuB5cYFP3Q5hfoSwn7ZTaDFnX",
  "key9": "2msRRGkJkGzX3BhsZ2hjqvv6rHfa6N4GiY77ogDcV7dR6cZCb2umZpdFDCfh2uvZfvoT8i5oCCAd7L8FgzJqodrm",
  "key10": "5KYZtV2n96nzjW7fXmxCygHRohJ9eqGqsiG4rc1ToVohkpEwCwxZGtGFsV31ePf3Lf9KnxMdVhP65Yp6oAdhwtTv",
  "key11": "UbLGc9Mnj8wFTGAJahKvd9ZDjV3RUC5gr1FFqULntbuL6sYkgGbfCAHabY5bd1ufDKpZXjvXxtPPGQSDC4hKhHA",
  "key12": "Rx7R43gz5AfYTM9Ndz1FAZR8wmLWuaqD8oyPNtU8TRasrEYAniYCYNrST6REUctPqnWdiBJxN6pHcFjodq2UCfj",
  "key13": "5zezamM12hD7MoqWophBVPt1WJ4R7S1ztnFBxKcGbgRgmfQrA376SCNe9Kuzu8bqeTQNouS7sAvidpCXxxkjvx2i",
  "key14": "3MmAfAig4xSaLjPmacDiW4fto9FwWh7bRZcr1ztAHprJhpEfLgqf6raE4XUsdNVWDFdmx92NLJCRrSnaDfjGFSUF",
  "key15": "5EtY3tLEa94M1BNJx1dwxLxuv2f82KguPasXL5LjV5TQ66KrK6ak3LqLc72v2gYwmiehNwWovQMyxbSnvraZTrm4",
  "key16": "L5Mc8DG4tXjdfsw9US9e4fwWgY7D8gfiTRopXdH1QacgKyfkWbpReSAMSAWe3vUTtMcR6zDANE8sXb9g48KfMaY",
  "key17": "2WrzEqYqxCiBG6yaboCCQN9ff6rJz4vgtNA1UppSBoA7ntvij6QubGsXJBYdQ5pNMvDM7RWgCxZHWkdVyiayxHMu",
  "key18": "2JsqZhQvVGqAmnBwVu7F1xWQh8qgyw1KsgZwvEBPkrVHSF9VVSgWnfQPx4CAHYoTuUvvfVFoDZ6JjxZAnmyxgj9Q",
  "key19": "39GWDfhwnz8nJsPcxTzQLz8xvc5tpAJZsfSVVMXfaz35Dm1iN5Y9er4kR2QyTeBP2UKwAGqeMHvnD7bDtUcqsqFg",
  "key20": "3GJpXtxRvnmnXSsTg1oKkDJHZBZ7ZJj6LxnRi638Gg8UvAoZVJ4Pcezw3ZQQ4aZNyMkm6eVgXttfxMpadsgYkoxA",
  "key21": "62AWFJhcpMcGCFiszEqcGmqvVUS8EWBxXJS4UAfmzG5VofZGRaPgxEs5K3JUqRJ4fm2dByrSHjzGnfs4RNQNUhNE",
  "key22": "4hTS7epL9y1Puvcd8TK9m7FZPDPMt5JaQFzyQasuWMyntzcvtK8eV1j1SbM5MMyuDjevPg3qzWekeCkH3Exi3FAY",
  "key23": "2uUeBsWnDkX1SEAdgAeWU1f26EXpPtf2jponQ1WB8tYpg9bp2tE8oZuSDrj9tppscorSwT5BwetNwDaj6ssYjJGy",
  "key24": "2zEQUC54dbFQhQrU59ubj1uAS3m2Y6iuKBvP5oykMEVZ7KmQrcQvGEp9pFqoMKgx5JoARLGnsrWugJPHDYXNV48J",
  "key25": "5BtfNKBSV5Jo13xug2REDxfveChJsqibhExTPHZ41XC59FDpTcJAjiZvWckNor88Juhjsz1v9wAuLCU2wphAbxb1",
  "key26": "CqpkRnFNgZYNofz4uR3BCAK4JY7Q61YXWSyhxrywNK5bSWf6zRHcf2g69d7LU2buosmKmmqMkR4Uy1DRJXHhcry",
  "key27": "5wwxzFbS2zZNjxgjKBon8CitvRrzMm6TSbJesxWdD3beoKh8k7aaAzBcSR1s5zLB8HSrkbZtJggfmLG85uCAg83m",
  "key28": "5y7nD44LKU9i3NEbZHAhQjQ6YAMiN416BEqT2WJ652hYwUDFzpfLJafcFybHi78GZYeJTe37cQN437nRpm8qnhor",
  "key29": "5SzaAmp5wGhX73D4gKA5rxx46mQqyooTQzWRHjWZZFqBZ2VT6G394r4h6U7TsEucycMgfdjyTVJytiJ2wXtAD2ki",
  "key30": "NeskrowYG5zr1Qa8KBM25y8GtAGEqgcMLiZYLuJtNmSdDTHDSfFb6XCcxqn6FuyoQsQ7svCCT9WJ8JbDqZhbzBE",
  "key31": "4TskrGs6Jq7KQV9wG86rE14rpCvzp46jsadBDcAy9AvDCGnF1M4xXVT54i8tJbqBGz1JX5b2Uyy3cf8bhxqrwEHn",
  "key32": "5XwwgKiQsadbWGK7o3wQCZf6YXRrcKnruyYzGQVDQGQd2d4zP3VPMZafqJjRDXS2HjZvjgv3ck9QG8sHawqGPYfS"
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
