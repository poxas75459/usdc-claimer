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
    "5aaF5jvVL8bLDb2YTNYBq1niWpbp123TPvJzL93miWfXvHAoUXQ7JYHFv6fERLH88u2ryaGanrndHiYdcuTVQdYD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qMHbAMWcShWjCDKzwi9MLCXcZXsHVtRs9C4amENDbdySJdmPdVCa8NsMXV4wzGGoyJujxn71ArvrkJBHC2bkN8J",
  "key1": "2iTZoQ9iHRpmysLAg57uwWpH127Q9mME5i1jjA7VYaENtU2nfGweDwaDuLE1xR9F2rVvrAxdH2CHjNNpgPCW7bky",
  "key2": "4yux3LAqwtEH1PSKsaqv2s8yz2CC4wWAnNLHPL9AGfrxkaARCGB4zf6wQM7Et8jzKnCzgguw4TviNk42cZosAmMj",
  "key3": "47zEw41yxwUKTpLvnNU83NoEVTQqdFA29pFmRrXJXZDKdF9yzxswzbnQ66AsBFjZJHJ983n9MTKdFhxt9ts4enWr",
  "key4": "5WeTpBC34XxVYr5g8nDtKx8MbCuHwEBVTypCCsF4CV4ukDBoDfuMFQrAXFDVqYHzCCtp5kBeqNWUpmknWvC9oKZ7",
  "key5": "4Nxv9sLRBvrP5nPPaehcw6Q6iG99aDxr2qeBfoUqsi9UUFGkNRpQy6YnoxaWUoYap4qf72C2SZHZhconuEMiJdnY",
  "key6": "4WEJwjF2kF7FJSHsLhHFRtLZvavi2rHjuSxKSxAXFTVpiAEzXRBqPvnvZ71fzm4dMtdWejVf48cKFr4ChPCrunTY",
  "key7": "2rsPNXeXZNASE3npB1vsDNuK6Uv8s4Kne8nmwf7SU1v3dRtDR3jhNqG9Wm1LAPGiRAb6gzjkcMD9Y4yoGzvdKvNs",
  "key8": "38ctMbqBECW6p3oe9YNPgPkURhQs34U6EiUm9mU3eS9UDWWuV5Ltus8EUpqt6gCpAXRJSARyT5dADCJ5jQRaRZy",
  "key9": "5hru7kqm373yZ19MzPhHT1UB7CvXJto8YrutzrgGkXMC7dgEYNEQC9zggt2FMbr36vPD8uhJ6awEpkScXG9DAVa6",
  "key10": "uEwKojW7AHfKEsqrrCXv6bFwxqubWfWRKw4bJEXGrPcqH6TgeiDnCLTFhExDDhsttaybjDyiFotAp9bzkPQCxvx",
  "key11": "64jufQQVGabSaQwnyGUdPt6kgeQ1ePLLh31egZT65sL4xdk8QD6jTnbiFumAnYcoRqnoQPEpUwNY8e2Mhcz8Hrxn",
  "key12": "kHAinKaB8NAioEceDWXUqyg4bd1QH58qwB5VgzYGdnCcjbRNBFUQGLduTrnAxufvJyQ1PsCfPv9Cm2PNZNp58Js",
  "key13": "28Qmtv2BZqGY8me4gGDpknoSHqvJvXpjU9cw3xHvZzbrFgHieGS5tS9dzTHFLjzySJ8Gw9GUZ4v5kZ2e7viT2q3t",
  "key14": "4jbvLCTsgdN4EmwjWUjgY47bWqB2Sjyz1uj1vc8V1spAWJ8pCnMmPpJ5JgE8cRFoyYYPV2e8rsovX2o5jRKKssPQ",
  "key15": "aQ4NFW5ehJvoJcoB6qKZ9eSiiPip8z2Ya3yRY1rhQudiMtRAE9uCiByjwuZEEuL1rsepW1EfdceLNWChcJxgSSa",
  "key16": "4UZazNDvGPRQUXPqRnTLnicDbcZjK6iSdiJ7NSpLXCncnStRZmhjFSxZAvCyJNkuvkn2bmWKrN2GrZaLyKDACxFb",
  "key17": "3xCZmhisBNvf1koEhBmExys6yqKCkUAvXH3B3ifX5hwKNBjmwJCBPBjZhPVLBUTcoAPacz5uem8Uuty4761bQn8t",
  "key18": "fyLrU2o3A9Wx3j4snEmag7TAxdyd3mRP2GSMN2NLo27R2sjQFACRAXQoPtpNHE2e9hiPim9ZZcbemZZHNaLvqVA",
  "key19": "3PMS6VJDbhiGb3jGosrjiQY1JivF324ifWrgUiMWXf8Z3jY75QbXoAU41y9vRQ1ExdqSsPSJDUWbGd89ws1xr8ev",
  "key20": "5qSLhaQLDkPZZsCh42gTJDeLaNiFUBqTBdAua9bBGTW6qbaCwa5JZ2GWwurJQtizvWwcU1mghKAzK2eKydQFGfzQ",
  "key21": "2rCnuaYNa5GMA9ZmEmxau3UUV941fuPT6bUX6AM6AShXdsV1sgbcwRkKt89fGLQFrTDAfmJ338QPC7rbxMca2D5f",
  "key22": "3Z9yNQow8qEkkDZV2xsmDbXSMBRqBV9wn5ETqhFxdjNqZFf246dXY8HDNdWt6v8x2azfDspg1Nkdpj92ysUt4Fzg",
  "key23": "2r5SV7wko16vy6k5SyhrzQp8pYzG8vuCJashgkXMiuCMaRR4oABV2pRcZTLuh5kRADirbBXEDCwn9WNCC6hsoWKd",
  "key24": "5rWPyHLxvUv1ZfmaAEyAS1tuXUe3dqEpKCH6JqgQZRnGCGKxrEwvCeCpJjLZP5HqGbyRNKSmnQVMcmxKcxtWzEyV",
  "key25": "618CVYJfbtNSQSrRNFHQT7RzH6ypvRzWjnR6Xq2t8vNCQZy7RAr3NCBzChutkRbBScXKfNBAx8wSZY4a9gEREyFp",
  "key26": "4iEaPrTu3QCX8kixjHWzsYWootEyVUFjHVfqFRPVAmrEqY93qHJqwX2TQtZoJkEKTjn3nGbdn2sbzA2xMYf8Wr8R",
  "key27": "3kbMtT1YgmV5vvJLhF1ohyGSx2FF17AvrxDr4KPm1f2YMFkGbEZ4UEJEh3peP2R8pF8tVjpQY68ZK3v2TR433J92",
  "key28": "S3DSjdZpz8j9MpyZfHdgrTPy2Mzg6L7wuuTvUzxgA7QnJHJLs8Bw8cmNM8C3C3XSk8NS9doSLgBnCdHfTgESsdn"
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
