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
    "1pt4XNmXu4p4NELqu9Zhgc4ac2NW6MJukihJvbPws5GCNiK8Y8cJqFi5W27fdUEffud3Rsb87VhDqaGvccALrCN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y83z6pnuo9yBNNwvaNEQQtviQYmHRW4avfgVzJQXCHQnyMXsxj8kakPJfbgNpHoF4XLaobQcZkGaC3WLMvpjYow",
  "key1": "2hYpht2KtAbCEdjPzDQUvLpABFKHj2uypsKJhY688vVWruKQ9DAQ6qyD7GKiSgkk1qeo3gua4aq5117isQ1y5sT5",
  "key2": "21D6pmscDKsRy3NUz5yQ2LygGestQcCdkUp5t4jKDbTcyasdtY3Ex7DxE7ByknuzGNSUoykETwCKqfYszUBnqNNX",
  "key3": "4GgMigu1bnZGanavp3SRWStGxkbVBcDt2VGfruhyoi8eLGAe8a8hPT9SYpJAM9DQk3XNixonj22b2HQajtZ1uEBP",
  "key4": "VQw6UyFEFfKuuGZcuSZWqqDR6TSBBJG5TTbsSWrGpJx93oDdUjAwGsNhcx8qsTA3RcJL9qfzc97RAfiNkkPW5Jq",
  "key5": "oCMmewW6eHRmqgBVufXUybF9fCrMVpAA63ARLhwjnKZ4fwE5HTCKfuyrHp2un4KkWosK9hQWcQvGkLFByonjfop",
  "key6": "5bnoaQ7GQbNcb8QFT1Vpq7fyYixRUaPT8DY3mzUCAG6TX3pvPWcdtqfqKu7eBKyWM5LdytGgBU1h87B34qG7gpnG",
  "key7": "4yybEvezaRC2gdMekTBqGd8mgUkSu9a6MUjqmkRi6XBzKuWp4aeVHFfH5V7FuphPdR6X4X2yRHDvzyxF4pMxC6J1",
  "key8": "4CfGtdkUXu6h4xp56FKgnNEVkLS7deqcdw2AZqhxKwHpN2FuyAJhkFvqsdQtsubM3D6S3RcgsrtXBonSXv6o9H5m",
  "key9": "3D8WwQ6xU1PcWUeK29zA4SxTT2tbZGatPAusnaCfVn3dxGTZCSts6VhZf6d56kMAws57PDUeCJL8ZZ4CTdr9zqVG",
  "key10": "Zfuygpx3McH9sKaWhw1zhy28rbdYd3ewwT1C2rpxGtqC6udHQVPx3ABwHWbEEc19E2k9GUn7TN9NdQV8Eo8odSP",
  "key11": "CPVEjKsVH8wFR75VVo4Mi1qP5zs1xpMa93Uf4uMEcLUatJgD8QZaR8vN3eyLTDtXY611L33vg98nH2Daa6vGGNP",
  "key12": "5bzNSsaDofotgHCJAAWnba9iJK5GmQcRTdsuPCY7je6eFnWKCVffVvasrfNtfDJUVftwyRFbM48xoJAZDjReb3Mg",
  "key13": "4B6P99zBHt35mWLduQGYocUKX3ndT8BSQqJHoRu8odBMT12q3yc5sg8VRreTpuUb9ZaMKrPP8j65nnT3Q9mTMjfV",
  "key14": "2VNUehAticoVgnQmWEfQ2KgcEpycsEmfwLsu8wbGp8oDCdwTh59H5o6D6dB2K55yb9xkCUQJGj3JMCvtm3iQZMcR",
  "key15": "dTq2HGoSYBqxXQTv13c7hgLGoTUz497GSsm2uo1uRz5MjPgHssFY9iPQyGPmEES1kQCD9FrHWRXz1YDgddFDkCY",
  "key16": "7YWaKxRzKkAha8fm5Bsmm99stwKFN5fmuHsdRLAjnXDR3VX5S8a2g4DrbRwwdYskzVPJy9isghVqjYdEosrALKT",
  "key17": "3N2BQmavzxk9bHGtTYeqNy1CFgJC6A3GBwbPREkbQTA3S8TrL16b6a7Ectw7BPzihHniXwQdqiKaLGEm2Q3GCXDf",
  "key18": "3xUDBfhMXZxRW8F1tMf5qYtwnPEzKaDf7oDHFpPzcc1Ebk1rPhWYLtM7nSSEHVSmDE8wsXMr1HnWNNTouN6QUpE7",
  "key19": "N2PR2xBK6ws1HErWEvvWoPWdWYTYf69Bhut1bQ5YKU18qBwUvGpBihAL4WreWsy86cFgfrTq8iXRB2Ug7bisA8Z",
  "key20": "39Ao7E5Rh6vLnPd83AGjyR8DKWEH7Le9cyuq1r7rVjDWmD37xJLzU7HNvqNLKBP3p3RpdJe5yFnCp4oH8q3RpCAS",
  "key21": "3vjYPLKyMjMQX59wB4ByURkSzcEh9eyb898sncxwfivBa9CuWnJtQUsyyWqsxoiYLSyTJSZFt4y9rkEKoXVPbv35",
  "key22": "z7LrBbsBC4Qd4ZmyAAmCBXuqq1gwcXymhzLevrHoTNU76hBQDKBG9TtXpyEUyTfLjqmvsQ7QBCCP7nPHQrXVEfK",
  "key23": "2DnxW57qDiKZ3BsmtodeYkJt8oHd3HDAchpTL1eSYMPe3fyJBxDMwUgquuU7Mt1CMW3qk4zEbz2npwx125JP3Gog",
  "key24": "2Q7tn3w8GDQqWgqoRZ1NsmqQUEv4wmx8QZaKGHKY65UxjPyEnRMaDLCQWj8xFGrLRPrPFxLiejoQskcMEgjXRQCx",
  "key25": "65L8o3enPS8ntq9E5tH3Pb2sCjce8Ve88NrHjXSKHyLcatceCcPkP5Xm7fW5uR4hZw97t8bsWSj2ejUMhzuCPTae",
  "key26": "4ExSZ86YxUvrcAuszBDVohkwDiRYU8bRK1GVHbNG7gPKZTc4zzv4DZ7pdUs2crTGShb7gxvAeLPJoU8WFXGGYBfr",
  "key27": "MJeD3ZHm3eTySa1sjrgWuPF8FdVfxCr4ejfug6ebJ2oVuVSfvZRAo6xMzLR7vygvmuC3Dhi2jRddvRmnrWgRTBd",
  "key28": "VQNjthLkhPRqhzg9SsoKKJLdevUicB6Qsuh8yVeJC3bnBX5kjnofyCoZbJNxkbbS3mYhLgRJ5Hr8DjTQTJNjkr9",
  "key29": "HZvoxf3R54x4gfaFtjmwUypMDb16Bf37rQm3n4iJJ5zLord7zZ7qZir4V3TTCPQWCWVRP93gMvZLLd1vymeprJy",
  "key30": "3eqTkLA2UVPx8veU7SDtA6fFJwV2YA3gbtur19rUtmzw5H7onJBLxjKGSikwNeP5LLjdnU1qTmhcSK2ZQp6yByC4",
  "key31": "5DWf8ZnuzH9Y97xnLYmL8XVYxwYyH8X2gywU5vvr5BmjVpqKQuMXSZwTtJKYQZZrLfs7YesHcsyEiFtKAfKmgR7Z",
  "key32": "2Z3XqtgSSXkDZHvrHr1wGXm9vC1ahiuf9TrmSnaeUqP6K6wsjRpppGTYnkFpFbfKVEoR3QpoWeNDK83UqSkybU8i",
  "key33": "2LmDPvPU3mQXCCUWvYSCtr9w81rdJkdXugZassZTbDxDSMwfPrKBZv9nnXJXKyaZ88GLmRd5r6ufKQYmGuWJsqmu",
  "key34": "2CithHef7Ce8nS69KhJXUdQKNvgGdYWgYBoKPf6jcfz9D8yy8wy7qRQzQEBFnMEU9h7ooWUStx5iSW4mEiRz3j3m",
  "key35": "jZVxG2jWxiSFFXY26o7GU2aTGpa89x2vBAdDAd8vQkj1N1ycx7x3emWQzGyjEUs57GG3tPGi8WFgNbnDhKXGkqb",
  "key36": "4rUZcg3TuYrQEui5fZZo5ApuKwj28twaqz2Po125P9p36Z1dhuaavCYNXrSa7YRK48ohMVLpvupVGopWXiv59YKm",
  "key37": "3QogmV4PgBKvHtVEcunPmBvWFGRmM4RGo9mQD8CMTXYxrMRh1wZmgMcF3yZEDEPuP5uJpqamGsBbeV82q6jiNarW"
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
