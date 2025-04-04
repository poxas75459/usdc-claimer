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
    "3UR8rxWi7jm3NjfLSTiUphb9jYKzGc8s1wQFMBP8YwvPuJbpMqhinuLYNyYNTmohNpR7UYRFhThTzWZsPkSeuJDC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MeXdKoKrYz2JisUijbiAr6k1Zjzuqs6tMwXjXTJvcxt2cbpiGLT8TuEdLMTPm2sNubmYJdj3hZ2Ao7Ads48DcQ1",
  "key1": "5vuSqip8PPBkjRMZTdNqK6xUEDKvWEwwmYFueWWD4nJvoPx2jmHwjV2mVXmqeH3v2MoCqD7qzYpmt823aeVQ1XVm",
  "key2": "5DZerTS1BhXeXWdcYc2gQ4og8yDKcTUtSZVoGaR1DsqoVDUaH4hbBWURN9Hez4niwLsH5qJ6hjyxGP7YC1rGqoK4",
  "key3": "3d6HQebnKg6XEWhVCFQyDXkFPzEr68WMTsV8TDjj9JnK1wMFEbPEwAYoufiqWnmGs5cPsr12q6gV3azkq2Rzbr5W",
  "key4": "3g3MMszJznrnh2iytxCtmMzXd67XavZVkgH7CSR8MuVgCBpgYbiPfgJ6w2FZnEJVAoYsYu7y55DRdKiVGMc2WGp1",
  "key5": "4Cw9WPUCKkV2A8J51LotMchxC1UULKHmTRj3Yyxn4gW4DxRYBkM2HTfqLcEqBxaLj7LiEsr9HbiS7EGkXbxXENBz",
  "key6": "55vbHBuGAeNtUyPLiodEKx3tyFK6JYcw6AusSjC2Dd8i1uTW53KxKZ4YwhBsNv7URPr64HSa3rGKsdB2ycf3SML4",
  "key7": "4b6Gqve1HoVBeTYnRRTNenQzA4UUX45kmgmXgCRgP4ycp5qhPXdL1UG4dz3WSJhT2aiPH8z1va9iDy4PfnNjQYcC",
  "key8": "34gbJfHK4YhipQsYFLzLoiFZYioD7sWJexW2sbP6Fp7jeijruWf5b6sRQexS6DSKHb6h88mJupnjgqBxdgwVUaYj",
  "key9": "3hzryP9pMVbs9FJez61N8PCN7Qhjr2A3GRKNcAziX77oW3CfMHQvsKrSxsvW3HDwi4TsDxNMzENuVJjBYqLaJURo",
  "key10": "2u17Ly9dH6UnG2TUg2UsUsofoSKRupigABzF9xVbKLm8P4h33pPv2xymXvQdotXYRFFkzPa9JyCN5H2AegoTG4BY",
  "key11": "2UqWozqVMHUG9inP49XbMrsu89VxF55UAUdm7UWWZsURZswwdEttU69xxQZFJBh6RjfoxTreRHk6CZdxvzg5GfYf",
  "key12": "mpM3BJfH44yVQvZBTbaijS5uPeZj9N6Jdb1BCsf6reQb4y9WKjnmwiFwPwqdrh3VZaWroyRjFkBLif9Qe8q1bxx",
  "key13": "nZdWEeKzKdP6JAyHgudwnafmxT5UyqubrnWDpHbDDAocyvywnzptJQFdzLxdXLbFbe1akTCYQMza7gsjHha2TVE",
  "key14": "2wTi9ynzH6ZXJwiPsR756fjQCp9Mh5dygALQLLSn3rAQgqg7gTwuWhCck7DA1LyL3tfjTWqmvkRw9miKDGZBa9Cs",
  "key15": "owwbNJavC66fM4wPq9r8gHaxc5iPU47rfpwjg7CWNqWhGLD4PZSqximGBwMqu5ssd9N1DGZ1agZWx4qx3WdWWuv",
  "key16": "2XxkKMYLF7NpawdGdqzq2dESi144wTyK6DdpLkkKK4o6Di3PGURTdfYYHvdWqwnjsvWd3cAocNLd2jsrc9sDRU6t",
  "key17": "2aye5wvVG8fWLBt6J9xadtxy7EPwz2EAyKoJM5gU6hB3zaTXBnWPbtVYyHHbRTKQCN2nPtfFtN1KmNTnTYQhYC8w",
  "key18": "2n2kWPmM8PpCVpDJZ7PVG3LSnfCuAyWGFKGsXtPzpxEb4iThx4tV8LG8xWN7j1L4aqtPzouhuct4Q3aPadRmFWS4",
  "key19": "2FkymBa2bbQZNzpocqrNkrrhntSCgAJN6d6JBdKDtkAkQTaHRCfKJrEnMHNJ9ewbTYpVQsxxtm8Rq2ecvviW5XEt",
  "key20": "44XHpN53o2uiQ4LjXUJNY3h46XRgoqnSy3m8G86JGRZCKquoD2JY416XJghUr8qt1yKzuy41h7zMg3FeSW5pzQd3",
  "key21": "3a9rv7VHmmBvx7u3oyrBdgRyp4DC8oRz4W4XU1yPNhQyWhMim96faJau6Rkk8sLUTm3WNm1qWLU4bT7vH7uTYuoS",
  "key22": "5ipx7JvkA4aosVy3zZ98fNX7EUR9yyzzHaATyKauzUQ15e5VPHgNEHYEmbSbzU7WrQikf5bHdErXtCm8vFyQFND6",
  "key23": "36YURWUiTufCG78RyjogPzbf4ttrr2bJDY8VuRsNnGnghqGSHyi4nJqKTwF7m3AYJamwpWWGabJtmsxLiFvf8bzA",
  "key24": "4ov4YSa6dgW7eYGchBxqMDjCLxHTSeqxkDS6iLuB5ihhwTHS718DzuC7NsSshRADEubXmAWfgAauYnf8BtSUU1Gb",
  "key25": "4e3pbjuRdkcworxEsY7btH9RUUnPj1UE3fA4htiQ6kdwJfxWJupw29UjrshnbnjDCBnhoHRzKdNgxPjPe9R7xvny",
  "key26": "3fUpkhietSdLUSXaaXj7fu3otxYQhJ2yMXqxBgmuDLC52jasvFnsPxBHjgqKU95JiNnfXuGHqueKBewLeseEpG1W",
  "key27": "41kiYm91jLp3okRqqw3jQcHC2R5pSmcMV9hJyPM5EybUdNnqrUNnwHYJmxEfjV6YB2ssuNNAaWAkWAZHMzcThVPG",
  "key28": "4jkGSGqiZzhw1NE6ZbvBmzwu99YawpwUShJmngHXFTDqy1FiVDhSkEo3cC9NYqzTTsrNi71qVheismH8jQrpZy5Q",
  "key29": "ZcuWTHGYHJjte1Fdxs3ui1mjtvJ94dHA5wgZMr6hcLifAeBfKGZachAMsMNYD1gP2nQv2kmdNpQBzKebq2M8sJw",
  "key30": "2vYVSFsVuVCcAitT3yL5WjTFnGQmevVv5hHSco4sr3mFasCbpHEPHxhGNbu4HLu4vp7mmcfP3UuQkEyXzT52zg9",
  "key31": "2wNXmFbYbAqv8AFhHdMvdLynuk5WfA9Ssi1WKLT36VigW9FJc5sZ1G3b9a5tQ4zVyPGkJjhSroe7N4SHgMxeugvR",
  "key32": "3rG8D7tYQYnLGYoeHTpuWRnkYN2jhfTPSep1QmDmL3trxfgZo9Pmdv3arxED6uvGbtPfkFubbUsFYHB8TXnC3PZh",
  "key33": "E4MbnGWnwXKe4oQWGNVYKqjT8ZVp7RxNta8qewEoKiLbcBBBnuA68qf9d1TySSARMmytTYxHQXVHsR3oESrTsUc",
  "key34": "3o8Ajomk11RsPAzHdVjy4Wo8y9gadFRQA1AJBPocNF2rsWr91i6kjxKmYD1EN6o2dTRUmd8JCXJNqbvcM6Dx96ov",
  "key35": "2NtGak4mZHKAUWK9mr9Vqq1dWt6ma7qGfpdV9DBNHTxApuiGUNoayfypf98aEfQ9dd83y9Q6LihQDpdgYCTofEXK",
  "key36": "2n3kqRyW22AQxDzJoKxVkTCJU9bkzA6uDvhN8CJeCywKJGqshsjzJY2eYdrJoEoaLxUj1zWpPnr1Kft5Zkb6VjX4",
  "key37": "vokXcY36Qo16tczRNZ4YGgUpSzhALiX9DoGy4kDBKqAGbsYnqa5HzTPJajSSaxBXMFvFbAgMgP5B4MhaDueLDJf",
  "key38": "34qPS74qME5qm4xUGvuuQCCG3jhaTpxN44mz36bbkFhhDsR2wKyp9zKnQXv1fjLK2dJ6zsB2DvhZ2RMjvRLuGKn6"
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
