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
    "3riqJZzrNwFmTHPQE2d8Je41CLv7ctnXQ7CoXQFXQNsrd2kMB1MaHDWFx2gv9bUaZjMjY8SZ8fCMAy1VVd5wZZPU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nPas39g64isrDTwsXtaW6RLE7L9ThupWazT81LRd99e2L7NvZWUMcyL22qWhAWNmNkj2QCwsvJe2ctMY2qcb5KP",
  "key1": "ppLV8x2ZmyhSwsFMTnw5ZFbcwujvZpoHMs6tjsTNUsgYAVPgXvJDoHBHpvkfGQbsa5Bc3pqBB8UQ5vmKwaKW5cj",
  "key2": "4QE5PuQBjcKo8mLjoSW93qFpN6VWHKb7z7zVXxMvcLCkJWFTHCVUb9n7xsBTkzMs6bayXifmQEk52MGPwnD1G8WD",
  "key3": "4g59Z9WWYGQRBWjo4AB6RS3obuwdw6rxzXkk9BmGxPGTER6ZYEojGonaGmsKVEwnbnpRSN5RAGbwQF8rKBRBM7uP",
  "key4": "4MidkVHqPoCJufZy65Q1bxo7UK3L6JtK15UqNd8Z4uXuu6PVaYhoAihr4CfNyJqd4p9T8LppEu94oPjyn174Kw2c",
  "key5": "2g9UV53M4L1Kwe33DdW9m5eeLqjgKFQATLu3oPuPfAE12MfQPuSVNnCp5XZ3ieE6LgiYPgLp5Pz2wShPKCgnJUuD",
  "key6": "5TyMTR1jG3gsXupPYYbLaAuPRvKwJ6LMjmgr5UWpx7byYUoMfgUi3dyAfpqMUzXefY7KJxZGfFEB4s4SY5k3LRYb",
  "key7": "56B2hz1WtqHTaXTRv8Qn3kw2wV22BQk3fynCzF2kUcuwzJcbne36794Pq7pETBDbLoijLk2DTtCjd2T2egFZNYaB",
  "key8": "4jXQwaDnokRNpFn3wuQuvr6Pq3GcyUPuBp4En9PYx7r47UioA8MYhmd6ReELo52L9ci8HtL4y5XSYpMW4621hgpS",
  "key9": "6AmUDspn2RYjmL2Ss6Maj5m9Gcbezu2FtL5BMamsD9MS48qHU2Eu5gDPp6wQwMyZeMAXxffERguXnf659mLmw5S",
  "key10": "4y1orPDt5ZDqN9d984WrPicDY8uQHTAcy6UrJsY5QQbDgNJFehvMge42FtzYh4VKf2mZLysQ8YvGEGx6gTSPnBHk",
  "key11": "3VCX655PoJUCb1tm8NiM7Pey9oibYbX5WAMEANW9vroZGnbLaMy9MViVPzFN9UWurW7rvGbzRydyhjpxPAx4fNX8",
  "key12": "2fg8jrVHHwxnnvJUVn8BPViAe8TrWSNV7omjiAR8EB67TzcLzvYu7mVS57q3Nkm6YwMj5QYjtkz85Eqarz3P9jiD",
  "key13": "46tt7K7NY7yAdcRAWxN5cD4fAJnqW1N8y72xpf76pwz1PZaYotwpbtQboVtDYEpvcd9t99wXxD5N9ETXRZAeTaBg",
  "key14": "8ZWbA9qcPmfZGFUykxs27Sj4oJkXjFnq1hZiDazMcXuGJvgg5kzRAmL7ZmaMPCgJS6iaHhy6Gb2ikePmwJLjFoq",
  "key15": "4MMYbBWFSx9TiKbWUzRPVTkCPpM8rjRsVsZqSGEDCh6t12sb3HhtiUfDUbC5shhm1hzXREKJRon3zFpYtVDJEkeN",
  "key16": "51rx6WqJmSbmDhMDQAcdiTB7dFE2ghXVnccE57f1647H6WvuVatPTV1ne9Wy7Svq5iC17Ksem4xXK9vUkEDopX8P",
  "key17": "2L1DWsRCQp6jo1rb8QfWgHfc4mp9z1tpEcitdGFF9ofSvT2R8HYG6iqr4C15BJkBA2EBmoZuLHtm2wmrHZgbbPZ6",
  "key18": "5w6ujHeqXyD2a2BYrTU57F2cXUi9fyRCLieSr4ScUgoqaZALebCjwTj3WYCur2fK1k4Y2jedq4WGhs7Ydx2Tercb",
  "key19": "4SN6Fmyyu1yr9DCS3UcgVFwa73ic7cdMeXdxUyLw1uiSyx9a4BAgVkSqoPCqsMxNKG6isaMZ5XYNvFF1FXJsPwJx",
  "key20": "2cSqFbPWwcLMHmGRz3qrdFQL8uMedmyGQ34Ax3x4twhf19dmxWWh1bGARBDHqtkTo87xbYGYGyHVWDqMDx6Y72TV",
  "key21": "5d2aQX7JUqZV6EafuA7RnB8G9CMZYPt8sqyLUDZcCyFYZNQSK1ztkFJ8Mer4CMKT7bApN3zLQoih2Y4L9UE57ggm",
  "key22": "44imq1HHmAt6ebaZ3xKnNjwV23jtgPcM7JWXjpULyjhqFd5WtYSuqCuV1unVBFbDACtrxt63BUWsVJVemRZG3Qdm",
  "key23": "5Rx6jQiRHyCH85YYRXGk5pZgtQc86aEe85UH3f31kzBTiXieHgFfqrdrSv8rnyq1BF2i1kCfpADaogNds7GshMdW",
  "key24": "33di5JaYYZU2oePoD3T9L5AkiYHgbtfjrkTkHWzYUKHdo5mckU1LfihySF956oopxsCfLhZeW4f8x1RHgLMjdhhS",
  "key25": "2rnqYFRwpXN1m8bqRE9qj75gxsMtAzcobDPAfUFJ3ePEFfvjuK8anM8em8hFQ4fxbdJxtQBDpnej4ducZEVqtNPc",
  "key26": "3B1bNePdUsQ169nwWZ2JbingcSnxMf8XbkNbzeG81c2tgjsEnS1kKqSGyBWAngsvDt2F9LZisC1V4VboFgK33ksr",
  "key27": "5ox2Bd4F77P6azAcf1g8yMXaXnzzF8rvmqcZ7fE8qQea1THinAJw82RZr5Bag3nek8w4qixBS4PeuBv5nGb7ZP7p",
  "key28": "2MM29TDi5EWwPHfxEGwN4hezxM2ESc3My5HCvTxUwZ8wvxTWuTpDrzQwNrFxKuiJLJUrxscQTdBoNwMRb7ucd4pi"
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
