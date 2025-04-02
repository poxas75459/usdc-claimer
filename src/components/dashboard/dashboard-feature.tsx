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
    "2527JzhNY4iiV6MzDtCDhKE5YDk47V1qKz4TpqRbrfDgPdKVCRmq8w54tW6XDrhYCQnf1qk3geTY3zV4CvqmSFcE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dQSvbqksPM6akUBmh7q2uoCeZbBKF9qFKy8eiWZb23bea32xxzdSgPfGSkd6UTPPbMEhjurYbFuZp81sdgzbEjj",
  "key1": "2YLHkeUX6yBDfvMv5Wqux5Jr538QCQn3MuGR91rzZY8qCUMYa2pgXHu7EawcYBvSXqobUgWxmHJ5EwNnZhJJoRvf",
  "key2": "3cGPrHyJPcg1wYST45tHVi5KfZByUUiueWjYobyGaQNW74oRe8b8KR1upgazUpyZqeD2h71hAk3TvP5GKfWk23wu",
  "key3": "4JeK1azpBo6oap4jAk4PDuu1BCBcSJ6f92jxJ7RqW5op5pN8LQAXy8Fds41qq2KFyRVMtETUU9QgU9PhH8rZZwkD",
  "key4": "2gKRFdwQ5xspVp53pJxb8HBc4mpSseL1APkJX8PJMFDgBXxVKPT83532AsK6z1MHAdNDemapC86U5f7hrDPAu9JU",
  "key5": "2e1jNAyHwG45JX2nVxyCBHUmgXf6j9BFHy5JGP3BpF284XmTUscPZbkGVSZsMfk4qpjxMpKGREHcBMSe46YPBupe",
  "key6": "42LVVVeWJo7sfqtizQfjnEi5CNFwBwaSX5gwYEkUE3CnVqU5kgyivhyKURSyD9CXBa8x4RqU1ejtEsfgzTarR3RW",
  "key7": "4UPooxCETt9KyRGC7zUpWewLRn1RVWdVchihWBoSHM1QEhZihtWHGd4Uh6Lwpgv6thjVYmMcrvkz39jro29FVyow",
  "key8": "3mePdQRN67JZRG8tjaQMBKaRKdLvFvGhnqCF8MjWEeNg1eH2P2hLfcqqk2LfLGrEtsefh9S3Ro5wWVHyWtuY29cL",
  "key9": "3N5wjgUcNngFawR2dbAgndBoW4e4kacMokciYgpPjUJpsh2DiEXBEpn8hsyqRQ7LH5FSwcvfYDMsadtt7CQ39KfN",
  "key10": "5weSPSfd8nTJiWjJRdbeLmXFMGYY5cgByMz7XUCyuT8z8FyqGxaoCFrAzUGZShmEG4Ui4EB73r383oQtXM6UXDU5",
  "key11": "37ioSc7UP3jBPFxEzFPQUnb3qaJi7Revq5A7nGxYf9s9aTYgEgpeWonSgxMXpAr87wLdLEATisLd2Xr5mFFDmrwU",
  "key12": "3F6aV2BV23xcbzh7Lnvo7civABDeGiErRGe4bE1gnf8FQmuFJ7uTGuC1PMssfTZB45kovSwnQvdiNpyckvC81FeJ",
  "key13": "2rDcv3KKg793NJn1pc8zHhE5KTuKHaPtyQSeDJXR3Ue74DwMB26znY4KkVBaa9wdEiW6GteJ8sojZSzxdZPkepMQ",
  "key14": "5wu5mjdfzBnJjFzVZosThz3X6FSLVy3yuHoh6zbQhoM4vj5JUiVGM3bAqFzM9xPSsqEaJwjt4UCwz5As6Ss8evk5",
  "key15": "5z4eYfmrPGe2SYhoLt13D3RZ4XrrmtToc26esCXymANqdkRfNGp1bu7sofMMe5qHZYR6haTtey12g1ouzkHXwFU8",
  "key16": "4dyWAzPckGfKmQwehZFbt7y1u9F83A7gTHZK8Xj57AZKPwk1qSNkjkShJSog1GCGuyeam9f6H5Ht1agcpc6t9QiS",
  "key17": "D1zMn2PbStgfcvPXfxiY6q8yUvXE1hEUus5eyumMkZ6kNR5hCKHXNPt5HcL7v1nsJt6MrMDaJTeeP6NKc1XQ5CA",
  "key18": "323vt5eaXzad2M3KR4XN8yN9fVHmf8gJzTdWbAeumQ23iMtz8L9yqHe1D8AWBedgcuxzN4fgv73C5SrKGGEZVVuo",
  "key19": "4LXBYygqSL1DMFfLu16Y5oi5gTVksrQZ9seSiyd9zmkVFX4YFTLyq9xWsanGMffv1ta1d7aNAe9dDkuZ9JC8tZLQ",
  "key20": "HVrsY8LLNFts5LcJk9M3WUzFnhbNcEeAr7CosyV58n7vyHHUrnBBwnyzhy8rXkNduJwHgSBGdAp9PaNhr4ocQay",
  "key21": "5xV9awkYhvwQU8CxWgNEm1PnjaKikc26XKBJUFpeKecqcSYiQemCjfWi2krvNoS1AX1j6tB8GCW3zF5ztARxDJJJ",
  "key22": "5QETMxTsAfppb5mKMLK5YE3AQeZ6Jav4DT3QpHTRqretqtpzy9WjnB8MBqbAEorr5ojxqqbgT4bK6uWkQhLu8LYn",
  "key23": "2T775V1xiBfp5kDjnRDYpj1LD9ACbvijsTFRvjuHjsicvDy36mtJFD8jt4VgXGBrabDpzq2kEycMXgUrQFQD9WMn",
  "key24": "5s92BKwBZMYqVJfVfZk8UicyBsgPNTkjMRT3ZhsEnVQoPbT564VF4RDbxTxQbnsC7jxKUtuEkFX45FA9atqDV87N",
  "key25": "5zijKbi86BPSNKcnynPbL4YaA9dWemB23K5xHRPmozTEAkXMD62fqjA8iwfJUGuEo4RZSYrYcjg9LZ58eqDSJcpj",
  "key26": "3Sw8SPgt7nmEcA1SAhkWrQtfU6JM1iDM5trMnJasEM7BinUvAX2ukHymnWm67NyVsJPFcttpDLamuZZavfVS6zbf",
  "key27": "TWWdG3cVCv1rQqd2C3ycZa7v8JuofFw4G54zcoQCobuhMJGQ9UJ1mQ81qa6JRcwg1ZvWadsDHNovCgrpzADsfji",
  "key28": "2B3WNUShBC279B3kRjRdfvBUzfhhxvsmRYYQ5j1jr2TUsyKbSybehHMpiJxxYkw1prmNiwAFu22t34mxa4V2EL8a",
  "key29": "5wawPRWmcL8tES5yaQV7nL88Zd1AAYA3HacP9CVwctWnJtxv8pStvfS5JNn1pVakRF1vPBu6WVR7ZMP7TjLCw7ud",
  "key30": "4zx6jxX2gNn8AXwuwCjX2iwNECDCpPbzSh5gVZwyF5dtmZkn7FsWVg3QCh96f652LzidMT41R4zwN4RC6toqCmML",
  "key31": "4Ez51ubTUsgaAp5FTjrVTbb2FEgGsJTFvx3T23ccKhUuUvs4hLG4Ciw8h7u3P1rijd7WfGfPVh8GXeB2Lqdfrs54",
  "key32": "ze9FoRRyPxjd4R9unuGz9sddZcWZxbEkiq7awKGdKh25hYsCkvxpZge5PzC2GaFZ1ovx9GXWqqgZNUj6XW33Rsu",
  "key33": "3KrsHj5KUbJHGXUzV3PPDzSRgL8fKEUbeKWfwEwd5Y1UVXZfzvFg52kzBNsuKxAAZzXyk2vofVSc5gT7uuvLu6UM",
  "key34": "3sUKbN9pm7kEhCz9v9nBPpvKtZ8WZDqGpsrd3NkV1VgL6f37WCcpj88G8QSawcgbtAeXiVFmZVNZczuX2QRAUQY7",
  "key35": "3QPpQGdjcpf6MM4sAby2XKmoXL6dKByK1R1XWuDruWwYJmBsCWS1B2JFypWmRa8Rsycfe2YNEwcwy3aTHhsEGFhK",
  "key36": "3AesoZ1pu3giWjSMg9gXSyBwwvmEa9JxR8bQMvig2PzCxzWScfvBKCZuSRnhrS8SfftmmFpKM4m2nkDQBm2LfEtv"
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
