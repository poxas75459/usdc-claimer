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
    "32v55AuaVo6933WU4RDXD2ZtGYs1wSbN6kvN4gBQjLhZVmgqn3qwks9oBYoLQoNJtgRp72XLXzk8MDkBXSjs6zF1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MVR6cwx3U4jXcJG2yaPBPXTTRxy3KC92baFoRracZ5wDuYJd4X4t4JrVMoWNh31eL6C8n4URE1aKWeH81vNoEf7",
  "key1": "44bnCCpknHDiRvhoPKLHQDHHSqiQ7NU8Aqu6TUeTPYf5pkXcvmbUZdHG7YRrj6uuMVMtPPjgUCvC87szXzxmTYj1",
  "key2": "tvtyWkZ5cxsuMhg2JFjDy3Mt7vCxwRbxSjh5BpYzKF3MgjAqDFvcAR8VfQdeJvonxQZtmk2wprPyh8QZDBzrd6c",
  "key3": "2a9SHCuRhEhESTzuCRKvEvC17S6kdgTns4BXdCQrarWV7fuCX8xrc7gvKQXicpPU2kyBY4Ae2PNRq4UU7Ce5ExU9",
  "key4": "5Gxi3xAX3vNMBcTtHkukmAkk7KoJgRP9RytCgZ6GrmevhYi4P8PyPDKKdTyn1gDZjh9ZfVRmfMTYBouQLjoghz22",
  "key5": "iZZfuzfgpj5yfhrSA38jSsVqjt8mw7WDqsAfB9w2ZvZcW4BzddvKPx97HbSkzWeZwG4eAwXUtAeoG7b62zN2QUF",
  "key6": "5vsftyU8xmE7vLceLkLGjZnwdc8x4Uaad6Z1KFACcPdc8ogBTrR6cus7ofFNr5WD4EM1zMriPsPc5ZzmqGdBtGoL",
  "key7": "3T93KR5xk1wR2uouMV8CjU26S9U8TRwizXMqPLGrn1cYmJqvSz4HBDxn38d8NEPM67JWX6gDD6L9GdB5nZGutVod",
  "key8": "2eSUmSUm5a5dgCGCRykZ8mckksLzB7KDM1RaK4v3PSWoPSzMrLnoXGAFwyFtuUueSDCpdmCGpVptVd7ictgn8dQC",
  "key9": "5ZrzqVUDuZPfND99mZ88khxSBPQasuCY59Ug1wp9c9kGpiCcd71LNERBS5sGiZQiVdZq4VAvjLavBAroTG4Tncd2",
  "key10": "LGWmpV53Mo1cAKvkuq4M2j52YE1ms7gcqQtzdEsdYn1dDv5rcD4kdMuftytykCrUrPUDEGE73hyzr2pZbMW12GD",
  "key11": "jYqDqzbZaWFmzPiz7uK5qynRYreVwaYDWvLiFWUP5rbfj6SxwC9WCZknG4vYjiSCg3yRCNFn4j2iWhybfjXYiKE",
  "key12": "5MDL9mKYHxy5moCDk4SCgH8g4L6wqn6zrZbDLLSKq3V8mvjxvFd4Nj2s7xjB6mhLZqWcM4rh6WTeSbvzQuSrj9a",
  "key13": "2WNGZRJWbZeeSYb2LFwtkmkYQeBLxqsc5EurH5PbfA3i19xsfWihGAdRsgrRqdPaYGDzUS1jqP7YneKT4R7h4g2k",
  "key14": "3zsdbJQizGkjcGTMTJepBEg6fPdHaedQ1ugHnkGmjpRR1S1NenChA2Z7bGYs1xZQVNWSPKg4vP3YPmL4kYikMG6H",
  "key15": "5g763PR3YhhZAzqqEYdcBxZqEvtXBWWP8uJpaDg3FNthCFjnejUyGSvdZ3Q7dDgt7SNPrVRUajGwhhPvXAzT51Qh",
  "key16": "4B46DAsaHmAM3hMgGH9PuomtyH2TJLPSF7x2QzkiRqoABRj7LoyLS3A2CB2hpMGsGwzwn1J57p8QNX535TKAyU61",
  "key17": "3CBA3jdAZcz6SY2W8Lzck8Rs5Vv3ZH9b8nqraka23kMfzV8MUmfPiikMBpXbvWa5UdUtsLFBR5wTbn1ECjM9piHY",
  "key18": "GXfFvDFRkqiki3tGhgMc7RBN4yKuJ49ApThFmqZbgtZPCQ65RbPv51WeaNWEGMstR2TC5EG1dXdgKF9qvS3A6LP",
  "key19": "2AMUunaZEKtq6xax87pWbRDdu7xG6f4pmmYEDiGpc7z6WPo1SSJQLtNPhz2hZkhhFx6HXcj9LxzGPJzRLn8kJnUo",
  "key20": "3gvjSCKqx5AVKJHogU5iX9L2sozMqM8MqBoGq1AMAe6CBpJSTmHQUZEHqDXDjERoLGLRZWRafXC4uFsunLRcctT8",
  "key21": "4bdMVcff83YsrP1g8jsLphqvGXgKAx4dY1F98dSZqQLyuJ7igAe82bA1zwfft5bugLehXSDU2G8MzhoizdvdsKpq",
  "key22": "3ZthetSxy6gbJU4sU5DTP34Au6H9GBq8TLTttEPfA6WEdEFiRte9LwXpMR33Hyd18eWsQVimYFeigDS6fYRJXRte",
  "key23": "25BBRuZTqNfpJvFuhMBCH4hsM96xs1xHp75kvadcT11xQdNpFysdptdD8yVzKiiakcQaRF4bi7hNXy2sUCpKtdqA",
  "key24": "24oApk82dq7VLNwv2EgQiC3CzXx8tkMR9Byup53V7ZNojv1zfdc3nMhxD7vCQ5hB5q3oijMmgjZvjL5gjAG5gsCA",
  "key25": "575iviyoVvBr4FaZAgXpVdZQraWWuCJ3bZVxueJxsSd8x9BaFKjEH8pacWMFqz24b5WLtvGWgo4ZUF56den1KRW",
  "key26": "3TSWBQZhecLEBVc2XagpBhQspMtmhKumqgq8HPg9YNSRLrBCoe6NKTqN74JWVAGKtKZTNyTh5MJMC5wWWLsdbuWU",
  "key27": "Z9CS5kooLasqQmU713LYu9vntG88kdiwKUmm64VLSTjS4Qwe6De8eFjgfMUf172UBDSfkHxD3uRvcJTcawDG241",
  "key28": "4FdJu7KtDd8Bqo3DPRBkVTh9tpdtvav4HPcSosepm2TUKZMWSUPzJHuYdJLpAVDDrJfjDUH1SBbQq8zTcCvKfW2W",
  "key29": "3wHVBfVFxzgnhwDsXBzck16sUsd2e2mYqL2Eh2ojcJvDFWwaw7tFAewzhpsQWQNwLb3MFVSSRhSCJTRMfjFPj6Pv",
  "key30": "56x1pkVYXq1aEs5w2Rn4CZVNa1EkxfGDXPFfidx5efNbsxTMkPbKEdgoWUeXj2Pv8NxiG4prJBxFdkBh9pUZzJzx",
  "key31": "5zYmVJqpptwq9yYn79tNxQojhyLaon2oZEn5HYD9Xy1ySYBXUXmSx49pJX3743FFxBBwGhd4d9q4PaqgBbS7T9ro",
  "key32": "5GUWMADiK9WRG9ptNQmQ2atB2KB1jHnCdUzmfAFBpuYXcEDHh9MKkL2xCTXePrUFNVdgFtx24fLkh8TA857cXRpx",
  "key33": "ibwGnks1DToYJQHnVY3f6zEBCdc6Tgs7JfyAihfqej1tLz7y1JKZ8nfgFDENRp5tRk6HH8SbP4uDVomYWgdsCKn"
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
