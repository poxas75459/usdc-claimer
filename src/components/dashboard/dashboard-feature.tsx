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
    "48bCSvgqhXmYKW9usfeiPNqyRpeamiAaXM3sMh4pQimW8s1hrFEjVatx7t8G1GUxRShZzXBkuPHTjcquz8aNjYr9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55dwcejkH1DiSKyAwXAPQXbm1tBgKNj8eCzsYAsFvnw2MSw7dU841L5myFmAcTjyR2oywMyqq88ESZZmYSngJ6Pw",
  "key1": "3jTsCwbnx3TvcHt8A5z1H2GcvxDzmjYmxMu1WfvGdH9o1mUDNqNZVEJV79HQfgy6wZYpTY1J3RdXf8sPmuRmQSLS",
  "key2": "2ScLxgu92Z7b3eYonKapzTFdUDED2BAboiidQi27GkAqkHPmBHt5FZ8qjdmez1CeaBiZQ5ZmNCVSLy2gk8rwFG4Y",
  "key3": "5Wjzkz4FrP3yAXxUgyV2qShUuxnoibDMTofZPQ5SrcBSrbGsHFGx8PhqonkDQkREnJqXCBA1QwqCpVFrk6JiBZZz",
  "key4": "4AM1HTvE19Jp6ugXB3stGpVx5hTp1UzySwWskNCUM372HyPxdpcsY4qgVB7TZ76ECMU81vS19Qw7KSsyb1w5ck2g",
  "key5": "7E5J8RoY7ugUMBWmedqNfR3MXckvUDiPdU9SPLNyZDmHZiRHQwDa94gGedYSkwHk99wNWAge7gJdnNKBx4LV4ch",
  "key6": "hr2PuTEAK9d9TryWcCK7hoLcuNV4kEGJvhT9L9T9VWmuQ9gQ1o5iDnuKh2RHNwBcWgFJWEfZ6AtaAWo8BAGjvNc",
  "key7": "2cWBCcevPcjaP7AHhopTNM4Rf5A8rrYar358fCPN88c5uULKiy1pAiDgUXabSSRFfpU19ZBmCFEdwyY8S4ZCXT1s",
  "key8": "562JuH1sn4skWSaFSkcT5UGwq7qEwBo94uPEWWygpM7GorLAna1qoB4jWN18D8EL7vx2ym8ibKiCyGWxiado3M3E",
  "key9": "4JDGeQJu1518U9Lt8kz6MiZ3PEtD6hyoa6SZ3JJYxXUCuQ8245mF4jr7YjMFZ9TSFMTSZXPu87kBB1y9PpPgFy5g",
  "key10": "3qF3UfWqMwU9KoEjjZmtCzvRZmUXzWVD36AGnDPtLXgLzFB28qDcGYeRiS5zTXbgjNuJ1tt6xmtwSsxC5x2d7V6L",
  "key11": "VaokwDg8GgXRtyGnjJ6EDxAoSWBbSZnaBCdSVwNEMuGhRH1yYLrCwPGjCzpFU24tdmNBnBn8w2nKzPtk3SJ1ipH",
  "key12": "5rGzCfREM9zmGqsDeiUgLUStTuTcGwuvEhhjGBoqFAe7CVj1gxdbh31kadRTW4eUv5veJt2z8mBT4miXUzgCdqmM",
  "key13": "3LSDkqQMHBBGEz66mPUYK1CUe63a7LmMqUTodWMV94E7zB9EZshsYccRvqpEoGYPtzAuHsjbhBLFQ7LsAGS3syBw",
  "key14": "3nya1Ajoqza9zePLVrRzZFw89RNBoSteXczoJWYhiu9krQRVv4MbjFcY6ZQh6oah2wXuHeS8cEogguGBsNds2v9Z",
  "key15": "2i3gtXpTfrxLrg5eGedwqLnMnTJS4Hn6g2NRwceezP1v1vPtC75cfCdGeS5iFkvKMbFKB64Ri9UvjJLpeKpUbruo",
  "key16": "2efd1aKs1GmX81qGdgR69pcL9ezWFo4HoRVe5JUff6xNZLbwYM9kHV1aGZzKtN7JC1fbZadopCxv3y6Qi87wXhjL",
  "key17": "5ChpSt8GsMz1pkjudNC5Zmokn4FdWWiwrXdJTDByubLsPvD52TWXbf5fbFbEzW3JhFxYDLeW8cGaZ7BsQDgnXoZ8",
  "key18": "45fQh86iv8v6ktCePsf4ctU5zTyjCCVvhrkSZAUXCP5uggUcpd15hH9pBnM69QNti5S5GELWk1P2aYtCY4TDP4eZ",
  "key19": "5YH7Jj6eD15SUQ37eDkzFZnKM2LotUJQNRBgVdcK3pomrQsJUXHJTPrX42GKHbrcAFRQ8Q27w3FdbouRgvjNquYK",
  "key20": "oyZWNsEiuMEue5ZDdiFufk6Bs4n1f6Y5ToUp6jqPQ8yKVstPcbFTcAP1xRjSmGDkh9HtBEr4xZ6aJxC5W6tJ9du",
  "key21": "4iVbSCiShuhXjsjm817mvn32U5LTkN41GD8jFB2F3V8V8tSXKgTfnPDYKwDpbYSRXKjiij5YEGqbeq5178VAgDQA",
  "key22": "3sDDgxM139xMJW21sMaDjgFRc5jazYSiiitBvyqGsa9xMdegZA4BVocY11phtfNCrEAAspBvQBbMrPgGystV9zzk",
  "key23": "5tCsjUjurozhDqVzEWgNPtSLsBbMNTNFsiVViHLVXHA27Jjac2xcyyvSBrUCDSFTr2is8pLHE86jdce3Tqdotuha",
  "key24": "5xHbpYeTt3YeCMjdfFC49fso3UEDcaedFhZ99GUZNaKxuH9PWzoirhAgywHCrCmceg2YTN6JzR84eM8p6v1Uh7eL",
  "key25": "3q6ZFB4SKVZHxV59jEFpgDDN7dTvMci1jsfn4ufsBzuShVk5hqvY8arRMGdcQDNrazzgdzEivKom1ZKWoavwJnw7",
  "key26": "2arNCdi1hCxDgDKn5JBTyE9vMTs7PHLE154xiG2xuadtLuS9WFuqvkeqUC5HvHbLkMtQg2qd7oBeUNK3WGanj6GH",
  "key27": "ycFwqnbNH6uYfs849sR2hxDw87TLNrGGSjwc9H4ekq6nbpY8YsH8aL8YXLjRzmWPQUGkR4R6BDy2Tbtj1ZqydMj",
  "key28": "cRrVVicQKvwLY3wHMHdXCCvgyw1zrs4fNbYan5mTdoanrmxDBy8hjVDDPi2GyrzmQVKqsC1g55AuPHGsQNk4BWN",
  "key29": "2Ny3LgC99E6anZJmS5JDbXorYyhQTqySAYTfD7GteVNgWjBC4dEsmeRYzs75BDhyWvNkYh3dNMXFGufFoXv7Wo3n",
  "key30": "vB9mxaRNav5wtsANoWCGx3rkRXxAEAzUU5sRTgy5Zqv8JsmiqNXVB1Lks9nWBYm1GP6eaFtoFVJSB3d3UixZ75m",
  "key31": "2fvXZnthjjCMjRFJ9qwCBac2VX6uA9ztbRwuDUuFqskLCjhvSiKM3TxsFQnn8mu728xer1xtQo61uTz2dSxRouF9",
  "key32": "2HVPf3qVtqqdPTtZGRRaJX8VKFYyQkGvGq5qhfzWnG5RSnEtbfgSgLSL5ApM1KmGDC8ecZkn3G8hmCrarBNrRM8w",
  "key33": "3VB5Wx8MGWzjNNZncWGGRfVKuHQPavcScSdFfn4fxzEozwgU6q9ygrV2ZRMAr7ZL23bP7msNTDJfMwRaZdPyhGeA",
  "key34": "2UtNvB7MXXeDvjAAGj5yPmrmmn69KGt2ApBF5RMPyf9DH78XPYB3xbSZEhXofweLkkw453U4Eb1WCz3SnsB7Vt5Q",
  "key35": "4ARZvNhq1nrzFFDKCHPZRQ7155KrwC48tLHvwgqKZsjWGL7CjQAQzXQ5KP9nsLfkpJ3tamVnAqumvTL1dmy9VduE",
  "key36": "3sH46Y5B7dyVQm2YtmW8AXWTyHh3waCMeetLx3BaFWA3MZzpNmDesiqdWGbZnsfGiCWfweydceBkUmZW2FaQPqA6"
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
