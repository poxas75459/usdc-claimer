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
    "4kbSeyi4zMq8aT3491NKReRJGsvmqwbMELQKyxDyMXkGhXYJy4Fq3jKUUyAfnGtK48F13gLSQkpg6zUoRLkDJuzJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A7dSTgDi1w4rcesTXWrdNPKuAwBLRbgrJN37W5LErRTdmGmyHwAQwLoYsvmkuCkhxTQDGKGZ1kKKaSvXRn6AvWB",
  "key1": "3wYPFKbpPvNDxWHfyjjXwLbnUWCNXx6oBHgMSUduBvXBcoTLP9AKUEBxp5GVVTsLWDSRCqJRKhbs9KX4n42wSBtX",
  "key2": "4QbnT3nGBE9eygB22GPDN3FYsiJdwJtKUmzEvAwYYSgaqwn8CtYwZoJSQrbc85zDF3j1dMdCvCmPivNGWVTWHGUD",
  "key3": "2pSuKgDF4hWBume4ThU8vNPbRpxk4QiQtAB1xQH8fnRA7b8cKoJWf5MZAozDrmQY1oeRR4jCSsBz9Z2cB3WNZhSn",
  "key4": "3r4M7SYHB7mbXBkrgfzqSE8rLcXz1qkHAZKgdsybERkiqn38myz41EFewCe4rrDAs4PrZKzRFUaupcTUGA9nG1My",
  "key5": "2TpmqVgNf46ZCbUdtFMf8bKbiY2282MkeDT98SRhBCu2mheRpjgTwmUnLS5LYoJJoQHp3PHiDdemffGc6hNxbfK4",
  "key6": "4wSivEY8rabnvXrBGPtvW1z3xWoRxZUaALtQ32pHBLL3FVSw2b2gjb5zx62MujDFmyK73bcJXHavqFMRsY5TeKzs",
  "key7": "21cXLuhpEpqh9kzsXVUjaM5r28A4RTkTLo4oqKFxRxF6k7mkZwPKNhvXiD9TRU5nZELcexF2Wtxr7Eu4FNzjphtc",
  "key8": "8AiN8sLfPjeURG5D73f3F684dqkCXoLCjkYQFJRFqL1s4YyMzGoiRvF6oqruEsg16NNBvgX7FtsDUT8UpN5oZxE",
  "key9": "43UP1Ev5nFMkcgDg1GVmneM9kxCCiLLrVfenBGkSiFPWPKMPNfSDkyrFNqFqpxFwkVScR8Vs8NbWVAn6bLE1PqN5",
  "key10": "5W3pazN8hDQS446SFdRAhBn32HCJpd2rdqftZL2avT1n4172Zu6tCGaY4S7M4QRa6i1vootdApTD1Z7VDUxjXb3E",
  "key11": "5gfpgZxvF8VoZm8qpeCpg8oSZeFipWKJw4XCsKq3pbuswThB6qTPhsooit3xjuSSFnB2HGKGMhGipNjcf5CkbzpP",
  "key12": "32Fi4mqC9NxacEb4zn2iifMhsA3Ka64bq8YNaRPHiweD94VPkqsG5wShcoZycqb7rnBxPYjMUstHDfFHYEiqB5im",
  "key13": "5WgTESGtcnjM6xfqd9y5yqBePAyH3Tj5WHE4HyQLbcdfdNAd28nJsK54zt8zjwU8qNzApczGkUDMGa2i6PR19yfh",
  "key14": "5dZov4qyHXamoa21rqLuMsWPtthy3EtXp7QX94F363WSFAwBnGdm9cEbbhNgKKCYqS586ZqfcmByos25pV4tHJN5",
  "key15": "5n5CrzEM1qtp5yRSbUHX1GAJ3cGsqQdaET1JunNjZaqKQkYdUHLu5yMism5jBVEa2osaH3uVHMsnY26KstguCLPa",
  "key16": "22Hw7TdX9zRd3MKkgVvso7dXwdwniUmbgcqFJGRDG9YarheHsfqtJoBiRDdz5d8eNYxuZdRF9RLcHhBVQTugSYok",
  "key17": "31MbWzRQjB1jk6SFvvYbcSnCwTuawzLAysW19GomeS7CtJgP8CFMa2kRZWSDDa36Lpd2v47zMPnT9A2M5vM91y2f",
  "key18": "b9HGFUfp4kwpm6DkQgBCUpdGpzcDAChCXMhi5nTpMKdCWYQdsKWWK15w1F5dueudFkLjVAiQWnnGBEvAGTH58q4",
  "key19": "5FEPHDTLt3dbXk379NeASgtSZkVEMRC6sT9KFfXrYQyhswQGSpuLsjwDMyXDcRfLbZbeWsYaANQWwuSpRh8WXmo1",
  "key20": "kVA8Zfi7kJxstE2fZ5i54X7u1mfkbsBfCGF5voUyg1Cn9YdS1wWfRwb4F4p2fiYyPtZz6LraQJsDfPuND7DHzdE",
  "key21": "4dAnvhdoWYNnbQ7m2rze7LYYNX1CyG4PY7VUcdjku25aPLPgF14jhqDt7PdXfB3vJhrDfTQPMm3jZVLGmXtXEB3c",
  "key22": "3TBANsgd7yKCVuha811aAztmzpNsPH4ZcWEt37zRhJDHSAsjLfCxRVHVwYoHTZ1FxGFcPqsjc3eKdt3SxziWwpLE",
  "key23": "5C3QXdwuvcz17CD7382Q5Y9qC7H9um7W5quQPCYU2xWpYwYZhRQd7VXZFVJqmVQ1VUJh66hKK4bMUdPBrxuxycgE",
  "key24": "2oZdnoffGzHwC4WxJKmLctNyhvzjSi3r34XXtuyhqCMoJYKT4EW3gW6zx9TiuSkKBuwxEqYfYaMaFHv1QJMp47F5",
  "key25": "4o3h2AaFQxenqwvbGxVt2Vc2fGcjff9BQYxvuZSnbLg24RPzhtmKTLu3MUZn5uXAAj1VkzNJZLCUUuBAxHEEWGim",
  "key26": "2gzGtEcWQ7wG7sU5vk1azhkcUkvaPp6ReLUTJMgMLQseT5EGBiheeZXWP1Mb4xGxubATeojdYBrx5sAMrQWbXTjX",
  "key27": "5bRo2nTtXyJiAPDQdvD9N4PWU1jeFrNeK7AJMjWMafe68Ccf1g94WwPJGFy7mhW4SxgeyjiDcReZSVaSm41utkVC",
  "key28": "5yQUPfZmNpbHgLueVYzZqvBjPF6CxEjs7oXFgobeiu4ttxzA276FAS5bPR9qEN4vhkFTf1wG4pdTP8iS8pTeJwAw",
  "key29": "4j2pnF72JUKo6C2pLzyVAQsd58MZxBPaSphtSF9UuVxM4XcyKN7MVkuraPfRcJoqdk1eLLKuJ6bRgYGAi634JJYE",
  "key30": "54jhcMTLYxCV7GQf84okiym6pEzSc5mAZBULspmxR3A3tzuqKgNdorLRqitxUj6tzY2CC4vYVUzaXsCAut4Uwwj3",
  "key31": "3DbrxuwcgeyFKgJcNas67MGjyGMnNtP5F94NT485aJ4Yeo3kDxovTPyqyyBFFGJZL5kzMYDTo3xRouwbBdshwNdw",
  "key32": "5tV8TzRVCH1obzPcKQWdBDyXmrYvB8xbxMRAqTV7urrx1w3Uc5NwKsr3nao3H6bXL2jyqUpGXEFB8BYHhnxMGjBC",
  "key33": "4ZmdWjEkDLRK8cYYDt8kUjoAuXvJk8SUqULySbyoaZz628Yhhtq4VNnwmiZLtmXaYoCD1j1ZxdekXYSLwvrKedsr",
  "key34": "VdKQywTXFM7dgVh9eNQoJ1bCrjTm1nTmNkatQENcAS4cPCR9pCX1zSjpEHE4H3JnxkXdGJV3vtKvREw9wwG3Gii",
  "key35": "Dqov6fDVYwV9BC12eH92WM5JVdJT4Y44gZwhqnvwiezT8fVbdVK1LjT9qQsth96YHZXv8xBi6VVqgrTT2SFBQgm",
  "key36": "38LcC6Nw6gimzVCSeS1BQaVVmbihAnLRtdTtzvRah2mQxkeEv7yDWwt3BhV8DgVrPdA3HqTAan6aDjvQ4EX9TYxB"
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
