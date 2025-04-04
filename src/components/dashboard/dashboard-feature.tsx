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
    "3Q74TGhaBf9fKUkfKa3vrkeaFw671mvCacBqdTg1MeMo5JPWDbBj2aFPxFbDFc9REyewg7yXHiL1yPT3AiY7caAw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ar7Umk4dgwQTeMWxaAwX9uZiY95U7kX9uh3N2VBHeicMFpwYfkiCyPz4ftqkZWJ4vDMKgyP2QQh8aBnunzMftvC",
  "key1": "aXLaFmeb3KLsAQfY9krSeHUYz55AyKcsb9dE5oEYk3hLriMrpceF98mu4HeASi2WgRW3n52yVuijCphQkPZPMgS",
  "key2": "5gvW99QDzdCAMAawTEs3pWJyKMLwidwJ3px6tny1hPEpS7GCQ2WCtNPmjUs4Qe1DY31Zzs7L85igEjmuW2axLprn",
  "key3": "2CQjdYtqz1woXrnsPZUAvs1qfhTDhAwz4TDF5PUzYDJjnrnctaLvFm5inAGGvXwG4Wuah7RpLj88n3VSPtqVidvx",
  "key4": "4mrQYZ1BtQKy7UnEgDfdgoE58vBYqXmVUJPVD9UUy4RpzV3byRC3nNmP94gabpYqddHh1hTnBRV9nwY6vCNDA3mr",
  "key5": "4PeM3NGPJkTGsTuWQCuVRi9HLRKbdt2PKnSv5XLBTdhAqEhxomntMaFmxhBuK7iBn3AH1XgLE8vqnei6rBKV3qsx",
  "key6": "32nQJTyqYwNkgdbjwLDChaBbf5JrbuQKnGEaQooryFeyYJ1z6svirHEfqKnk3UpyVX2xqVkC6gd5VbsRJfrMoPS4",
  "key7": "4cpNDVHRjB4UvMGfLxdSFL3ZVu8bdHthHQbQPEAoZ7TucvLAnrRELfZ7fKZvx91ABJLvFg8DQRe8DgRu3kmUtbFT",
  "key8": "5SHqrWPuR7EC3yUaEnm1YWDAFGu5DabvbsvfgxuiFSrPAaXD9gDTFsgkfpUZJKc8LTfNRAr4RgTp5orGM4atJr5p",
  "key9": "XG7tmxdaPXZgesN4N9qMgwKo6821dMGxTkwNb99hiZa8gPUfgsNaJcP4JS1Sr78garnECUbwdppjWU5KHtNrc7g",
  "key10": "5tTsyaJAQCbaSQSp6wn8skWSF8qzxd2gZoMuhiPonJnWH1xUiUDwBxNQX2w9mLFbvfciC49aqNS1iWAeqhhxzyxt",
  "key11": "4rqkKi1sAzygwQmerGbhUZHUk5k45u8a63w7GNzGk2Vtx1nSFkjaXE79mLxUd5mMg5rUEedhrzD3B23ZZsbJxcvy",
  "key12": "23AHBdvwQdc6nRxpvympDLJCcpbNAuGAX5g3ps6cPQPy6MXQM7XFLoHxAutxTTd7r72TZvQnztC54c8pAFXzxzGQ",
  "key13": "2LftMV5i5WysBd2p3u3xJfLA8RSML7LqgKdwvJZuiTjRnn3bNdpAx1jyMNK53wssPKWgmzLbqiJrbpxfmVXbG9Ym",
  "key14": "4pEroZLLezU967y4mJo9ua5z3JyYsm1AycXeGYgcreeV8KDbNggxgnsZ3NtDiokyC5DZNx7r5tqCAQKgnMci5xLh",
  "key15": "5VcGXEWFUEPrU1WonPyyM9PZ9XK56PWFaaUS1DRtC6Tu8LvhoZAcsd4u7txxLUdgw2PpckvAcHVdAvMq1qBPKVpB",
  "key16": "455teLduQZatK2p4gZckXYNummmyPYHCZxPg85W2iUmqYEpY7r2pJAuY7tGTh1YeptXrsoTJnbut7TUf4pc1Xmq",
  "key17": "4fNqWGjLRXkDrcFBAsgL641aX1DUTTChMS631ywWUV3KoG62c35zSF5C1B85ciNV8kGYwFf19i69ref5ZBH7VzJ3",
  "key18": "2uGdk9GZMb6fftDxnAC4fdbcsLwXQW5FeH7crkW5uoJ5MUhtBiEtEfjaYRYUWHNXgCr6R3jBUku73xsVdrAJyLNt",
  "key19": "4jp7vCUBqQ2xNMWuKKCfjzMJmEK7hTKCL3xPckuLXkeZjrZh94XazrAeXkYj3yyzi9tZUAFXj9TEveeQhP8iTrBx",
  "key20": "DaiX2du1ASZf5VeuvFJwTwdaosF1wGmxzak8qJAieppk4DmT1iHFawwr92hg8ALQDAfU1GqcqCUG7iSbjZrkJ9N",
  "key21": "5uzkvP5wxrSFJDdk5F2APqZW4t4pmjk1SAwmkaQoRa7ZmujPaZpQZgXU7uTZbMypbGnkzevUpRjubQUH3n1odhaN",
  "key22": "2mVhjwt3Zg7HY5fQZUphFe3PNyfdGLuDTJFSX6b828HGPBECnsfireoc2YDUcRd7ErPVRXmYsTafmZc7hYdgG95C",
  "key23": "2BBNpNPUmzmCEdW935JPfX6nV4BaDg4NW5ifiRhmLz3Anj4vFMmafG65vaPuEwDZSzEzYwADdiznsz6gygWcF8Yk",
  "key24": "2VctQ8hM2N7Nm3vP861m2knWFvHcDcthi6i68hpctnvB56zAMamnHXQEftq8wKkyd2m7JykNXaWSZ4CssiVYzjHh",
  "key25": "2LS1wa3G7VBbq62HY6ZfaC1ENC7n9o9KNij32pdUPXUKY5GdjXrEqMFcPv5SbdswqJXqrgN6Ao1d4yHXMWZHyp5N",
  "key26": "4nFjL1jhWBWkR4KQC5ZCq9z3Rk8hdGHAkpoXJMQSKf4PJA3v6a7PKcuW5wSC9HFfPF1qURjVdVKQobXunfcdH8qF",
  "key27": "2XfipJLeHMr4zXf4UyTtjjjndVkjnQHzxJGF27X5aD4o83HGbd9yy2zuyX4cUeLkxsGZJ4tkVevLGXKE7NikrXG6",
  "key28": "52PWwWKYNNMNZQnv2FTe1aVax97itENZksz3hFuubs4E73izwyWYgeGjd2FfTSJfYRvYm3X8phuM2KvHHAVPyUxR",
  "key29": "5yQ2nBbco21aPe6DTmDUeW1p1LhS4ugmTCE78K53YkpU1ttjYpUUfxh5m9Vkuz7ouLdEBr5bRkivCxgLeEk37Kyh",
  "key30": "64fPRsDEKJizTG4cMmumiAA9geQcPJE7zkaRJGTuobhf8gaewNUszdkY6ZtxEQn4R5yc6fQDuzaaux1DcimehHNP",
  "key31": "5Jc3hQjJGvYh3w6nPws5Jm5PHzeLuUqdfT55nC3mswFqzkPQAQRkbXP4SeeuZdv17yKBVdCuGMBDJUWgnj65MWfV",
  "key32": "3NTFhAQyWf1rqsHNNVa6bK1orDuRN4eg6ugmRyjyBnYf4shDg8dw2v79Hetb9H5YJCqWV5pmPUhqk4SmogbyyDQY",
  "key33": "2saQzyqPF5rEmHnYFXRwrHXJtPdH4Mk84MP6NpCbhsoQ3DRHHGCnxjUrowRVWhpgELDEU9LwAxCiBZAX1QpYvCFq",
  "key34": "28La2V3zVoyXcXZ4b2v8dqF4qJY68PZWFuQPMhiScfFLxEzPHjr6mcSLdQRzRhxpKYA7VMci33nAZKvpvAotp8Au",
  "key35": "4ZdmApiRUXFBGPVCD8Kz2F4yj54M9Z763yNikxUvnXfMvQAFq9SQTwagHSLM8CnjbdTSkF6gppnNrkgBunkPuvsM"
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
