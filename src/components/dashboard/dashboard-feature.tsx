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
    "65of7x9j9tpBh8U4WdTHxaZYJGTozPSkeavVhdB4DuBhaLUqSoQyxzB9n7qFxatNsNvFJmLeMsGS13e5ojsTQ9if"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hTfiSt1zuKqqiMgck4CWH5Wmks58meQxnn92JAo315G8QL9hBkx8MFkymAKzz7fPp2G8XhykffqQaNgq67NiDVX",
  "key1": "5imdE2WbBrR91FsdSoCSbDpdi3Qg2z91oQst43DZEnNrJQF727ZprFU4TJiyzDfnd5XbKG7gXeyq43yjPLmkQFRH",
  "key2": "44JDdS5sbSaXMmimdT1ypD6xPfWbwsvk4b5Msp2k5ZkbM2bekDobFwV54eoLCpLQui2vxBpWZTsMDS6xYDyqwZq1",
  "key3": "SjnLgDpXtaYcveXEgUGHCKHa14SDKgtTTWd8RtUXt6U6cE1DtDEVfoJ6qc6io6edqtyRZT5qpe7swRDaxQsPR68",
  "key4": "25X4oypmo6vToDP7kmrFSLnYL4RWh9wnBTCwWzWWYsmcogo6A4KLaJTM3MKcRq1J5f9RwQX8h8j8uEtttu52iSN3",
  "key5": "UToFXWQDwpiq39M6Wvr9bYoKfb54SkurFdhXCZJPP4FxzeopUkowLi9EuHpLVUBntoyJwEAuAhwt4VyxVUe56As",
  "key6": "5G7N5SFzeUkcUbfcwfo9wzyd55MMzTywGRed6epEoRM95TCh56cHg8yGQXfArXT9SNkjib3t7Liw7d9jZrqEgRA5",
  "key7": "3Q1rUSRrRz4cQbKnHZpoEPvSQv6jxgot1X8wBR7bw9z93VtxY7BgP8QAEstqQeQBZCMAgbei68QdQg4uH24xbWLR",
  "key8": "4xLJvo8NzXZCk27q7wCEDy7iRFoCiisKzf316nQxuT44fnXy5CfEwK1V36dRHHQUbba6dj3boPhhdwMc7XR2zHnQ",
  "key9": "MVKj8gfxcZuQeNstE9G6F6Gvh84B5qZGAu6g7STwvmqCJ8g529foPh9Ncsj12RW8GgW9YAyBAG3hXrrZkC7ZRHh",
  "key10": "5miNJozWmpEUu593Jjzgt6pT5gx9iDaSDyC9cxZbQRh8x4WG12XpBUxWGZJ3mGnivEitwXNp5h51ADwx3YCkRSDf",
  "key11": "2eQdei7KTbC3fQcki58p4zJTSk3oskvbGi4aNWmRKPbAVyKBZHwwq7jpeLMpGTtDfocSwfHstVGCAovbvy3tFQMV",
  "key12": "2wjDDS8Z7FbT8Y4GJmEjwZZ9DnAu17T4uURvogFmkq8NGDkTgF8oiFtCCtbZnkbCiNN3ui4v7qNYgE74cznQLUrR",
  "key13": "4pVUHAqUC7xCViGorroKRU2zD1MLf2HtBLBktJ5P7sLqmk61Ra7hAe91d7yQqmE1RxiMqJqgxxcqd6zBJd1hjRTV",
  "key14": "24Q1jff1KQwQqzkK1FuYjCAQ95k2W3m6fwAbNHz16xgK3yRmSbuVrFMaygNRtc8WcNt6zHvDviDU1DKmdpBQyA9E",
  "key15": "3U8jgcb1a2z3L2wm37MxgiyoRTnAhE9zS9wPoJRnVGJNgVkJVSv79hZ5tdX3pxyeJkMnweXSqHyceemuB4GYkdyk",
  "key16": "3kH1n3cdWDeJk11SeftWG3xCNcwfmEZ5a8MkewgCWF15VcnKjDbzMnvGi3jDGXjktgDujH8rdraUCAFENMDaZJkj",
  "key17": "3HfSFCe2pMSEoYpp4R6aT56jHVoDX3yYQJpDsamprckrmYHBdFgowNEYz9yh2tnpawNAZwXooa9SkEot5z82RUGm",
  "key18": "4cNe9FYvCfC1kvTkUpzLR6CYsNmo5RFgTQFBvqzYm4QB92sk8akFwkkH86UQ58eN8HLKiLCBGworurPyekM2uGPu",
  "key19": "5Uju389KrW3VeukjSajNXEisnU2PPWCC2bhBTXGTwd9W5eKW7iF3DcLWW3t7hemZuYC5AfbxTvFR5TrYVmEiLYpK",
  "key20": "5sJEYcr3RNKfkaSmwMqHntCbKkVqBqY48bzzG7uSeuazGLZNkW8v2Ne6ynDV8pC8ca9d3DTRMeBQzQYCcCQ7J8zS",
  "key21": "9sxwtgK4zZC5KmFCwSGHpreE5kMQ5nRgwxTnsm7xMit8tqu6g6gvfGsEn9ycBw68niUkZPKMvbjwRRPiYqpKR4m",
  "key22": "3hCi4CTNpwRL8fWx9PJjNgftJLgMGGeLYioGwZhxbfpNK9Fffc7Zde5RksWUdqZkup7o1QU1PuLUan3Bgyrjw3u5",
  "key23": "3DV5scYHvWarh7NjmQt42nFGC4B6epxEJRBj37aX1QsCZecY1D5epDLKwidXegAYdWNVXJGWHvBkUtHCm2zuQbD1",
  "key24": "3AWuBRYYPMH6gRtEXEP3K7XJUPF5SdcshBmfYvk3wExPf9RaRSLrjqEWRbjZDoe4dCFxFjJtiKWKK8ymT6CvupXK",
  "key25": "4BYyman58wFyzx9zVELZ5p7sSwSfzZjHq8BdDTCoNXgH4aEXTAcRFDGkbqbqcw8tQxRAanr3DAVeouiPh2dfySEp",
  "key26": "3hw9iqXQWQU7WtjWpCWEHLURrPp7dZYR4cYVLMmBDtLs7gKzJUSRCYQgX65m53JgwujYPFLjyHnDx1d1u9gLMdsq",
  "key27": "2uJni8tw17sesVW2YiTiKUvHJ9v2Q3QZwELw549R6qbQ9vipE6aLBQWyfUosdESJ7S5TC4LaAR1xGkykxxcxqfXT",
  "key28": "3KceSLuYFeTYgtkTcARu627yyMLhFTbgy6A5h2GRZJZavRoENf4biiTCF1mvt2Wv51YyAPi7RV9RbwJPrA7GWUT4",
  "key29": "2rT8C1Yt4PEsqd4UsR5jaUqVjkCEnUxwWSKZ9FvD3KiLhUxLAsTxvzii4uizbPiypVJYq3pFL8Ws8NeL384zStxH",
  "key30": "5nFyMHBH5VLczEeun65CaCD23wEUK51RW9N7QY1VV6yiEii8cwkYnS9cFEzKNM9JVYXnNtnd1WsbxCjmjZLU9Vnn",
  "key31": "4T8gMTnCkJMbtkQJ4bzRAQuV2MBPMLKoZLt6B9ZMqLa1myFnzHfbiHAW29vt4J1cy3AEvetejsTVzN6xgJJ81rGF",
  "key32": "4zm2GCKbLMwjzmWG7hCK9rEwYGNmiGEVDmgL6BKE7tmCRGcBJ7pe6XspxEdmvdKyx7PzaefLP7rY9UKvWpb9H7zd",
  "key33": "HLqMcb6uny6VeHNp8TqYb8knSpYyCu4iVsBp7eV4eqBssoKGgcEUGyvnSkBci4MWhpzzQta1NNgARZ8ahHddXrh",
  "key34": "3KyUzxoCKbJEKa6Ec9gjadB3UDJfsxNLgywr1Qdn2DjvgxUN1Av7iEyMznTyxPCg5dMQSGavkL2DU3coTGiuJW3W",
  "key35": "5zbTLrwtYr5BGgpdeRxCCzQ6GPUrdfe5zJzRVRTF1PiyYsDi1VihZKAc8ytHCJ8oLmfVTmuqVHSPtS8NecP4Nepp",
  "key36": "5gHHvMiho6r8RZ6eWGESJCvCgXd8A9Zj5omawBkNy66tkC9TxVSRqyY8L7DBjNcMkEqSERhtMqtccPsNhx6ENfPE",
  "key37": "4VGeGA8Kh9HU7jLGNsmKJtnW7RMnijASuaKmPtXXi8Loo7At5P5uQE1SpucVnmpDMCWvXL88p76rb3JdBPj1AAY4"
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
