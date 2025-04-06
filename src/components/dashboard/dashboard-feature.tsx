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
    "4psDygvLueR2mA52Z56DnvhmmMBTjmNpxetWojp35BvK4QwT8Rpsm3grjrd1se7jy5SPGzCn5QgrnkrMrBWhpgWS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DrSPJYxEQ62cRYxV1JbKsgtzkVWGnJeuB2tmLoFi6E2w1L68Fuh6UyckkH4tidKETQAjQQyxsAeEeC3k6brmU7q",
  "key1": "2KXxrZhsHm3aykx7moZasT7NEcCHKf9hMgaurcBg5vQ4Q4ezhX9WcHdYU2u1NLaCtxG5NYjykuCpwQEzWnCPxQor",
  "key2": "5A3Y4KnqyZ6cT9sZ5rbVnyu4ZoXS4PQAFfYdE1xjQpuApmd9K1V7DrK6oQsL93WqAN9E8WybVtTEBzzR9LzyW4hG",
  "key3": "5qq98MZYTSZLrZdAJo9CC3w7nHQM79v2HjxpdvRPq2wJD33SMPCmXZB6Q9Ld9wg7G7fjHfEDwG4gZ9nvhjnTvzFS",
  "key4": "63z5pNTZpE5wvaR7jNChSwGBa3HNmonF88wJaKAhPeVX9k4hx4n3mVYEVjGYjh5KHuz6P8vHfBUYNHEqd9W2cKNf",
  "key5": "4hECHkbXVJGuvmWna2pCn5tSvEgsyVttqKhT53faYfm1b6STyi1C2iUXxbUgZP9t9iA1qYMTgoynurNaAgPEL55n",
  "key6": "2tY7BYSF86V2ZKLFjYdGj6H7ctor4Uk6h4VrehgC4QfT1FctgDvbbd8UzmfqUveoQoLDx8J24c9Lho84kBdfp7Kp",
  "key7": "LwK3EU5fgLvvpctiRWRYX51baywgB6K4e6LME7DXfW2iwfdawqcL7BKdGzmT5cGW1Jf1vU9vD3ekHtrgSXVhhup",
  "key8": "4ZikYmFRXtagUNkTdockRXnnhK6Rdp3UWNipS7yL2fcGPo35axRsJnPuU46aXbchGcQEPoUhzLwvzeTEpYNUb3Q9",
  "key9": "5Lsv6aq5aJeSCLGSXTVR3tf9V2uFmp3gisn44zu3UW9Gu1kNC6mo5mBZ9HtHxueZvXGiSZHjMd9Fp4JKispib3cB",
  "key10": "FD4aaJg2Q4pTapAUg8DgpBzbVXzoSAc9ausXfcVvuYzWES6eF6SK9xBmAYGfqsX4ZNvMnNYrNKihTTH67e9UbiT",
  "key11": "4Zg2xg2GPrhWs3vuQWwHfqsVQFtSieg53Yo6YKdfK8qM2EhxAG1JTNWontECnTEMqg8HTCCAA16719MRUjQxWFTD",
  "key12": "3i3hmCrnVgfaEm4F4uvHqK7WcugMmxArVSts1XTL5unX7iHZSFnsbXSDesxyLyEK1BN1FEDPJcUAADAmPczXqTji",
  "key13": "itenGHwQwdmhK8PuQUR1zp9CXGW9Pw7rPvM1gHk1Qs7KdxcSQQprsso7bzGhSzwMGjBteeNJwuZwbwVSiSFtfGg",
  "key14": "244JQpymuLxCcgrUMX4yvYoUfXXABnXFnfPzGRcaZX9i8qRHKx5F24ghKUPzAkBugd8jBKrE4pER8j9kKvTNQDc6",
  "key15": "zQ69T1EDGf2udpN9gUjXH9oAfcWaoAzUfUA1N7AL8dWfrqBjEfhhMu1s8UW97HuXy2eM3xWFbBfttEJpTiceQJf",
  "key16": "4XybekZNY9kawvMvkRGwKDVn6CJ4yHmxqiAhgdu86JcVRxjWNN2ksYFFPA76irFgqKw4pu9Gd4AzzPBMAbmBaCoM",
  "key17": "29qb6yLA7zfMukkKkUtP6syBTWwwBHTxdpknQWtHxMZjDPZeU4A62w9AQjcCacoUvXmeraemaGxLoeCRNnNSWHjY",
  "key18": "5MnKkLk65JHW2QxCKgebdChJDHBsWxLCQb6n1JpYGFJbjazKDuiJCJ8AZAviy3eVHCqnpXx3YH28s7AhRDy1bUjB",
  "key19": "5qr5zyYmSEPsVY6RUYzaM29zVBwLEkS67fMEERhknGuLERxaiZG1xes7JJthtVrzCV2TL5NP3CCpm266XCV4k5j9",
  "key20": "61BV58YJdycPKJ2TUYt54N5hveVCpMRvXmXb7GEZyCPNiEKSDHiHQ2jd3tFoH2pfb8oJ6Cc9Co5hBoBuQ1gw3aw5",
  "key21": "3EQaEBDvwMFXn4SHwVHPS4NZ7mKZnGvx9jkbUuVvhkpCPPbtSa3H4y9avL8K8jRokurMjjqfzJevJMNRbXsjwhhV",
  "key22": "1iPz1bKZcUdZ39BmdK3ddQgMYEEAaK7WrkMuFmPMa1kLRcTRZCSiv6mWWrsqkj9UkMYeosrEg97sFgTZN2VA2MS",
  "key23": "tpWiVgWBEXJwYxCUdTh6TjiskQXtJfV3FqjM5M3ypsCKmEyUJdBSZMRCWaeaXuMW3Zq1giQF8ewH7rLHC2DYb11",
  "key24": "2WDpTr7vNiNLbntvaDgPXzeu4uTrHHQnDMqubMYkAdQX67LyECrwav14E8FLQDKvNG9B3zkfGdmWmAgV8jcJxEBH",
  "key25": "4xWfuDZDPctn8ZYYUNCDacpDT3E56WKN3WFv9xNGz64etY4TEmPjbRicUQ1gJAJhrMrusUTvLCsjxMPaCogia4kF",
  "key26": "pm8m1XwrT2FFZqHsrtfzHJMQMenHvDj3NGCYGWENSYBsRPDXHUryJDSLfK3yKJpbJxLuNB9jcg8nng84XLRWEsZ",
  "key27": "4MFXZyVW7RD6RdwAraY7wouj2TzN3TgboxZocj5TRY9gcAz2GTRWdSGPGpscwWMwphwZBgxpBQh5dCKafVwAHXk1",
  "key28": "3NatXDiZ2x1uLBV1gFTEqkZjr8Ggo8MGd1eGjFE89u3HKtg85TRFRccEa5bKtf31DypQz775u6BTwANNAppaZVWn",
  "key29": "3exAcPtWaX4aoesHkBWCzpq1hQ47mcPHGhurfchqWtZ4X3KVcgQocAfcwC565cLNdwxZVvU5fRk5Pz83LRDoUHdg",
  "key30": "51suGzFJRMBpA4Gumk4cpft4i1iMoDn2xoYqU1TWa9Z4nFfriDrmmjbVHh59MRCevnMdvhdQuGLACx9TbwMg7Dy7",
  "key31": "3UQj7PbjwAaUY9R2VbAZc1eZdeur13wnpWyqKvfXmQ9FT5VzonaF7vkvb8pxZ3BCxHJypgS1dLRjTZ8MWZWonqdN",
  "key32": "3XLRiD93mQNGdd5FHhZqGX2ZkDKjTs6mNL6vRcvP9mka6rLj1m5saPniQz2VdZaSYi8HjaEb4NKTXzhNbw6KbfP8",
  "key33": "3PQXshWYuii9FrWkTFAPtFPPEQAMJ3JjaAPKxj7MG2pX4rXJVUoUdj7fsxDTaPGSX5RvfuPKNU854uPMrFz2YCsQ",
  "key34": "2tEf51u1AGh6uYKpnBjukDbQUiesQv5581nEnbaB4LAHn3BijMedGzF1cL248WLASdSybxbyS8p2pgeiR4QwgwyC",
  "key35": "4dMWQKifF7N9L53kXYbZjmou1u5U8Pkk8NV41mLNL7merD7GiFF663nKMiXYWVUc9r1XfmBrFPkT7HAbuyV6siBW",
  "key36": "2CDAY651iM9UCTYfeZpGGzBqUeahcrKRyTQKasWEkirjAc67u9FXUs5GNpzaoXi9zW5u6mWxzMAST3C2Zc8CMogg"
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
