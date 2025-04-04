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
    "5bfSJDS74Q2NEcBVEj6dont9LkQJQnF3SSeXoC3EAgSiyz89RfMW6z4E9XsHRU9dJFmenLtTprTUyZysD3ZC2t2x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dQpKQTj5JyeRqDWM7Cs6re8bBJ2CwtvYUdUdgsUyVjYbKN7u2hYLokqHBS762wr1DkRCYcdHrvFZ1DffU1aNyKV",
  "key1": "39HWfaEGDfrtzE1E3H3DSBc44nBHU4qU9ELH71v1Kwarc2aawoVHeiEsLpmBWLJsJqXwJNa4dhmirDXP2QVwK66U",
  "key2": "3rWBH784af5tWAkssEiBKJkYUTLCkenYiSbDmSfD2NHPoXA12hKbqMLEHXAzzX6mbbsxUQHwevtHJ3UsAwqjnJTG",
  "key3": "4SdLmbb2zyXzZfmYDt4Ca1tUx732U4DZ57rPA79q1tZRDn5XQc4PkN4wVGT6QP3VQd8uegkxjJphk2Cg3xdt9tWx",
  "key4": "3reKVh2zpBmJgB91W3RnyXVdiKcNSx3Akk61CJtvzdoJfmf5vxDchPKnU2eJRvtbyT3d3X9dB9Ahr2BbhDtZoaK8",
  "key5": "3vcsqbWfkm6ywDXxVkd9uJG81Q2b5ksH2zWsPGviuvN6rKJnihk2Aaf2uaPb3bXNu9iR5UDtLEtJ4XTw8Vox23t9",
  "key6": "3DBze7GMjtp3nFGVhH8n2tBcysdCBXf8EbzWWkCHVzSvwoZ8KSDNdUGmvjJ1EJRQVBWMJFTeBtiX5jtHkfJ8KnDX",
  "key7": "2RDZYdauC2o2rpC8zbzQEe7MkwVDsBHLjAnoXWwYo1BRodzAcZCge5H7dbwpiuLJrZamLnuEruz5j94iQd2ABFwt",
  "key8": "4vPBK8dD2xgxEeyJdUP8vNR1VhE8EFPZX1bbE6qZQfUXD4wxrWViXExBd4qtA9eSeF9pm9M4z8FKY26Zi2cY1Cmj",
  "key9": "38HTfaaB5fBCPbE9uD6YdjYYMWmLo8iU1bXQZQdQvt5GTpNyFNxsqnpPHttqRca6EM47YkYyXitM3kCvKwVtPFEQ",
  "key10": "ckmNfsjfPMkjPZ1GVeSayoGqFpCTqH29gJ7YBwthn3cQgYGSJKC2xfZgJthTtpz71kVX2WFGmFtRqoh2dvvqp8t",
  "key11": "VNvq8Bxnt48QUCGGWdC9swW3fvxN1UFE1X6MeDsZyGmQyPYv2FXhmWjP6kpGYfRvBLvVrWMgiuo7kZQ73fyQvq6",
  "key12": "DHckiVNDL7qWJKHFJBor8zMwgQ2yWF74nhRSFCHGq1P6KjSFubJKx8cdwtV56zZ3GpzCdThfFPqWEQvZY8Xdc1V",
  "key13": "2m5SjFEcscD7zp4T2gtFSf645gSP6Fwh6g2qz3fvZd762PAW9DpU1UcvvsU7ti5qv7UoiPfEyepTN5VoxmyuUp7r",
  "key14": "2HLnFxteusfdmhQBmJ1j4U7aSwHnyo4j16ocTFqxhRksouXimp3yZ5h84eiNMGxNquSw2tSpnuUM5fauuyvuaMk9",
  "key15": "uzScdtThN8ijkdMk1874cEgKYvePkWPUTeztBF1wvmAFV49dB7hw9CtfyuYWeqNVkD4NqC9daXyR9pkKfKw7gJw",
  "key16": "5qCScMJdWVCsFJsAUJMqtHfjos9LCtc7JYzV7ApQEBmvNAy7TJsDoM4BLWErZUAP1g4SqPVhnj8dG6hX6qTMhrjh",
  "key17": "4YWUsDovLZBnup1tHsn3ZipWgXbhFn11aJDxrxm73wHiJeg23B3gJzzW2ZhNKbpHEX7uEYqeLvkQxnHrHTSyB2xp",
  "key18": "5BqhcWvTxkRKMt7KdJw2VGXEmyFaKEWGJ15ckNCYveGR14nPGfmQR3LcxWQwnGMRX2Ggsw8rLcQXmHPi83nr6qqb",
  "key19": "4ZVUWmfcscZuszmwpK769mgPuTsKpMcqe2Ck7mx5Sp7TwcYx7yo1Bj9gNeTYsHsc1oFQKH7ZeMgy8JDwqg5xs1tm",
  "key20": "2oKCX4LjQzU9uLNPCT3pwV9KaJXmjcFHirRSYhyBFqYMu9rc77nJ8cKcqz1JpPUhWeKM92TzAzmVZeiNvhmDFhbS",
  "key21": "3Rbh7iUKCzT8TZpK4HUfkvurGe6PkuyNGAaDpT7aHULuEGKMFadAnQcz4wZBZViHZtSDnrXm5PwsuQhifakEdKu7",
  "key22": "5F7xwA9c1tL3rNXJZNr4TnwJSZMCcrzJA5QDDfAuRYZPG1b3HnCxpjEkC2pRRHdYZx6pCLYinVePQLzZaLagncwN",
  "key23": "4LPGpMWFZRLL6shWvav8rXj5MWhGykQJVTQDJRW9jad2euTEGMhj7tUPDdtkGMob5CQAeNadBLRJiyVcRLKAAdkH",
  "key24": "5KbcbvmaQdBuBx49h4DrT7DjBfjwipc3PkNSKfAHDkA9V2kKwGVHuFqDUS6C7ReC7M7xaV2y71reUkUfwQHHBL8C",
  "key25": "2Lb63BooUj8xHRSzxveusrkxzFvGcyrCp43AV3HeG6Unmpq9UT3UvYvRQMtYBWpqrQhQ5bGVeZ5kMmujkPWhgx9R",
  "key26": "3tqKXurFUEqYRd7HYTH5JTghDWDJqQVjCSKZmvLbHHXgkWFjj9GatnBpYgNiJWLNph68mP5zrEX6vYbCthENBBf4",
  "key27": "3jh7jin9bTM8ai2qw7HgyPUU4VkQ3hLik9UaZVxgvXjJ2RcbVBUhnpWzfrbVB5v1yKNd2xRuqT2BHGTJPa7wysd5",
  "key28": "4C62gzTP59dh5VgcPcSX6CKwukzR1w4dZoJoSy8BkqeeBh7RgYG6CTkAUgEDxPejPBN3Y8myKYZbMxEPz5Z5SJhM",
  "key29": "2XotRP3K1Pj82FjiXV2c9ee4UqAxVuPT1rJoBsN3Z8YPmSUww8STaqkEZJcvxG9PvAy32RZEWMnGfYPh7RGjMNKs",
  "key30": "5ZXUKqHfgz6SScnN6SsjMddEzBswT7uoe4JfqJUQZ8fm68gNuURvzxo7iKiBeDRuZtnUkftEPhe1GLs3g6UmCt44",
  "key31": "35cJbYxACDKtx5y7AK1kv1tUvqzLNTzSzg47TPhY7oPGwG6krN9iNWVvPFPa2znXbER2dZUmbf8mfo4v59uHKGkY"
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
