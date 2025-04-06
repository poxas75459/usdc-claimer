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
    "MSRSLvA2QDQrhHPiuWvTABW8Df7HQgTkMe5WGrrzTb17zwj6f8vewzUU8sqMTjkVEBut7MYu8REswZKEwJakZh2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q8CAk4bscALxEx4uwnLakeDWJnNJPQXafsJpyjSXnH7pPYh29tF3MxADUH4pCMMLJyy5HepWmRc5Tpuk8Su4gyj",
  "key1": "8p3aS8p6JxunZ7D9dBAREYPu2VKazUWqLaC2BkFv6qjijiSRJnSXj2p5ojXdCriLx7b9BzqPAWUDXG3zi1gT92m",
  "key2": "3NxiMov7aVzHAVadjSDw4oThXRTxrEyrwjxbCx2FcpELtGSQ6Q9seJGrSAT4dE6G6PKms2DPHJNSZBBmjRw3NmMb",
  "key3": "5qXckFHnax3PizfPjibyjEEMwB728ebKb8Y9qaMMtFJ6uxKRTMDt1uX2uW1inByqk4MeoGUqSMnVN8JGDtCGGVmh",
  "key4": "5PnsWJeZ8fiijKH8yg4KsgVNis5zUV7u9xkD5MhGde38dD6M2KXFWaocjQNYWQMnzHZExf5SPERk79k17yAsZF81",
  "key5": "pwkXVQsjM8siiAMM7mSkB6vcvvJ6ZgCSbq1zPxsAoPabciWmSt2bnHQpX57EVb89gYRH1vQq1ZYGqmPjEDJv4gi",
  "key6": "S1QPqi6rXHqrtpWYxkA4re7MuyUHKGsjpzGeXerUkiz771fvh9nyMxsVrW2rz9DRcLRHMLjVQfQimxh3kdCKxwq",
  "key7": "54LnvuWoJGCor8mrDrmdrfmKgQbud8JzJQCQruRJCgP22DQC7k2pAARh5gA43BZ6LoarEvQsJrsmmk2ypdJ4ruRe",
  "key8": "3k88RjBd93KeQeK2aGPf7eBhbHBmJmic4PbA85enTqrc8GL1VLLnppb56a5FAWmJEiW5ZxaaRk3FPTDt2qd9NWjJ",
  "key9": "3YbjcWSMA6fKunYEL8VqyxeeBjVbBsF9U2mqp2XYAvv8eX5BZMh2oce8Br9puMcRh5doSsdREQJQ9WNZ9AzEqxHj",
  "key10": "48zW6dhbwshoqMVmCrX6YRRr2S93P6iopgGTxNRdRcFpmpNVo2GZMgmnore1TfeoyBGMjBeM9pdykmq2rw5XNCKd",
  "key11": "2XEUyLsvjKk2a5FzesviWL6yScQP5UxYJ1twzM8UZcVorBi7QkGVVwdoVUFgCUU4XY9fAnuxcvYPnXkXRymzv1o7",
  "key12": "48Fg6Hx7qomkFZvQTEYoHe3dj6vPPTkJdMsCqPy8An7iEKz9JJ52C41WRqS2hRNGauWgpNzEYg3qK3NdA9EfKWLx",
  "key13": "5zm4RiyFjnhL5oTmrsaXyDJ8MYdcGHAs2ULbSbHuQzAEEqvux3z8riZHrS59sm6q9TSuhQwNBwJGTx1Jcd89taz6",
  "key14": "65nN9aEsrqBs5aDSAPaLyd2Uvf6NSqfNXLY1ApF8E1tqQict5cW9tFGqHV7vB1x7YawM3WibtgNgXrst4o9tH1oV",
  "key15": "3AEDkuuh7AgNzxZzVYSNs8zPE2JLhGrju2fus4HE6FmifcRxfqMw2xxRn1HP4VejoqqBLUBjwyU5wEhBCfRiGRx8",
  "key16": "4aEk6AK2YvFHBFP6hAEdAD93PbbkDondvZem71ZqKK3qftZEwJ8bVp87BaK7UN1qZpeMGGCCv2WPaFyFVuLgAhsu",
  "key17": "5wv4yptMwctxrFtDeSEo1hp8dV3oT8VMRzXLmQy79sj6g3kBeWLqH2oSRNs1DxpasyCZ59MLux75gUZBbgkV675Y",
  "key18": "2zyhWF5LYMBE324KGuWWfhq1GxwyAfHD7nDgN8kQWYz2WsyRr5FZNLK3YPN6yKzKA3a1QL67unRuK6s4j1YSXkLJ",
  "key19": "tAwtUQJvKD1oaC4i7Gcdqnf9fAWt9FeHTahzwEGfDM9kxW5Tuy689FWrpmTrmnWa86mRcdVoB9gvxSVQt9bMExz",
  "key20": "4vW677SmrgJKWcsoceC23Lf4cLLAGhVDguHEvkzMTUKYFuoggaTZ8KKNs5usocu3JB3N5XRvPzF3hW3K4X39iTQ1",
  "key21": "4vrTzjcV2W5DQTbP1N59RbXzibykTmeCsD4mensnK5xhnFtwR1VEGiAKfVQ2Wm4n2NLeQBtGsRz9AQNqNE7HwJWc",
  "key22": "4nBaFidWok9EhdAoLGE8EuAfeqAU8LrPSrqpyhJeYRpvoNBu6ukPLnVAi5dr5ajAzeDbevmcxZsFKK1V6RFCf2bt",
  "key23": "4yoMKfzBzFXugBc89qTNUdUFixjNrh7RPv8eC4J65Qj74suitnw3d2ioFBt4bVX7MS4bf4wS2zEdvx3JzsB6aq8z",
  "key24": "2s9KCigCdqn7odRBdbYfHEJduYRknS999S8kJMGzUtrPePjnxVhCv3Pjc8J2Rg3mhgRwFPw4uVG35Net9322pwH2",
  "key25": "Fn921vDjfj6X7KXjVmheK1fv9fHzMjTHSPgz4nf6VDckpCGvDxvASy5NEQ8rvr21EidJxXDpMHdxstJWJUFjhdb",
  "key26": "2c867fc7C6WkoLYFXtoic4qR9dNPuj9MutFqkixmJzXn87v4v8NzBweLrR5da7GGuoNQF4RtSBxkBUfYa5vHThDf",
  "key27": "4vapDTFXWX8XNpP9sN3bXY9X4kMQi4XxStUnxXEEgmLMoq4wW6bDAuhmKsd4upjjaJPz4yxPWbfWHdKX42tMvGRu",
  "key28": "H7j9pA2XoGG1d1PjDGQhRjyWPmzWuCL77AdS9NnvAVLePaHjPK5MLNu3NXBt7PnbmGcAPpGsAvmjcyZnnAWw6nb"
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
