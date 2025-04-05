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
    "3FQjqe5K31Pq7Vid66dm3KuQC3cvjp9c6DBpeQfS4b4VNDTCbjGRaBkcRCzwYJ5V2MK6HKnSuNTzNtpxT7VQKyKC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C51evFw3eyodngjy5eCtxmeyfSzkEwBuBvSAZBvFf774FsW7S1hAzPonEqHWfmqeuAWGSdQQcR2hFQk1dSKp4fQ",
  "key1": "4eJouMfS4oKYs4aSGmaDAQUSo8ZJ3bCPq9zYRh9BUKQwP1H9HXcV4jCZwhZoAY4Zewe7s1UzkWFpSZVJEAUqzvM6",
  "key2": "4jS91E8kUtm8TBbiRZ43eJiYUUmsHP3YUuo6kd47tuq4M7WVYDJGkzJCTmxzxcZbAWryu9tDspCFNKS69TYE8Xgo",
  "key3": "3X8S42G6YERuxXSj6kmQTp1D9czZSPP1hmG23khDd9ZJ8KnBJ61bAmXSeU6EX3uBw4gjar9gkMMqJEFJnvL4HNzi",
  "key4": "39gMgZmbmpSVa1f3BsNaB79vpxZvMJhqHCpHZMq5fcjPN3W9gyFJ4bCzDhD4kWTEBVqJ3ZyUMdG8nThAu9PLogyR",
  "key5": "3E86kZ6ZfzzRa68SwSjgwbzEsdCXHgoSQfqDEv8KvbobY7WEkkCQDWh2u3R96FqqJWKQQfg6kopAnnqKiieS5ihb",
  "key6": "569mV4seTaM6QBEQcWj5wcXd6taM6qHY4vYs4YL3XfEK5PvtJzdjk15WBM9qWpCyoUhxkiL5159DXp4KDpJd5z7k",
  "key7": "44sFUPWLzUa8Y69i2aXoPaDryJGgrPAe2SiHyEMut3RaFJenJuXLFbdtV5h7zSYBniKsYF2uxr1QbhCSXRk2kEza",
  "key8": "2bWq5nwUko2bz68qsXFjsi3bgUaRn3Vz2vGvQnu8bkxBcFdVmUNa31Z2SPb9xCqY27cjrN52UrkKqgfhz4fBshdZ",
  "key9": "4kZvsiTeytxkQdobDgUYpwSGx3arLzkcEbDthzYKpRhkQSGEhUUXW7mm7EaJgQqeSvB5iwzFTcNF8hLEbPicntMg",
  "key10": "sTUM4dcg1XLcydXbaRnHVZSw5CcAVY8WS252QTkYZ3AA7RwU2c11ev2zjLDJWSwPtYaCJriFfra2yamcvdxqusi",
  "key11": "56hHpQa5QUvvM36KkkfYetyV6WZx5J5rmVGUN2B8xRz3sME6Mwzo9uSuyCMHa4vP8HPQYrSUhCXr9KjH12dejSCR",
  "key12": "c62xCLhbQQakRaCLjKnFRhV2gSAkKwDHHhA4EcYMAVTysWTQyF1tmYbd2Bmsp5mB2zDSzEi7T87vEK7n3Cu3xVr",
  "key13": "4WNgCbz7sGbvH6aG1YfCvkktYW3oHRAG2GzyWxX699FVvsNKsQrXT8xFm8NzUPA6LuYnZhiHx27vWa2hNMSZHTtc",
  "key14": "2RS6BjK7GgqY2fwn9ksyWpgHehpVMBzGH1c9itayCFKKgzrei3LYCoTtNaaUws54cdnHi3Tuf84cszFLk1x88uFY",
  "key15": "5pvPN3txSgsWa8Enm4gHUsSg8R23WXP2kwaQigf9LLYwNa1gF1oGqqePSEKNECP1dA1Du2BngwoiMdPzUE3nbqSX",
  "key16": "3pMsTP3U7f2AXkajoT4aVhvb9outkqQK2P5tyA4MM6SPejRryb3EAFPsVVT4yraF5dQiSbaq2bt6DNttud2NAY4h",
  "key17": "67U6ZA9cPKTb7DCLgtGpVwMo1rsQkgspUzpsf5bhfEh28R9RKUjJs2Z4DJrSQWtfX7jMPvsshTymoEafko6d1dpy",
  "key18": "5McfFHNvWR1LZsotWtyn5UBbbqgocjpBLaCPLm3PZJ21JESnmmJHhbqxLMsuUZuUbtV6sXWTcatDcNqJwts9D54W",
  "key19": "4RmgwAW2LY9Vw2NjdfnqF5E83YViD6yNiQUWT9Fp41tUJceuXGW6qb6UdZg6s5BJSJ7WmB2UNdyVV3fXVPQJa7qE",
  "key20": "5yLhfyc3nbSU1GGC6eP2oj6Lh5RDv96xv3oVSo5KW4pJstgDWpQFs3DqDaSQnhoSFKgoRJmGrNLDyPkfsVWTA7q8",
  "key21": "4LwSfxH3ypWCph3Sjzx1xvxcpFetj68R3wcVS7BwCrMZVhG8ep9bnZKQKEwL4DrfkUujmuC7k6i5sNMgz5a7czw8",
  "key22": "3BpcdovT49B9hvQBDSVEUYwcJZVJCBVqXxoLPKAmDsF74ZE6JUQ26QYVMKzQTvnvgPAgHKpi921mrBfaNGgTavY1",
  "key23": "2eW5vpUjAaPLwUZMriN6Trdxe5KyGb6MKcruPRZFxxZ4ivFeGq8VqRuDWHbS6gmHDZfiwwoNdnnmN2dK6cFmuE94",
  "key24": "4pZnr4xZiBnuuxvu27DuEUo99oDonCf3vq7Bvr6c9vbYTa5zXPDYsjmpQBzsQZuDqPzozpaqN5i2UUHFYz9CWfjS",
  "key25": "5iWMZat1cRRwfJxkDFQJj2QfuTMP3iM9uW7EbCXz4gnEUrRgmhAjZEH7pv8YbT8RqSJmNWY53kzaZrxf6C1fZ4vq",
  "key26": "wBiKRmnMr5vDi5SUsXT75FQ2dAMdYn7HmS81z7CPWZiiRfMnySXgSLGKWdWVtqe8dQRN5YQ7P71SqRHLycxxCzM",
  "key27": "RRrLapAFZqqSiubyXQYEhxBsd2xrfiBAdSY99F6zJaTRkmu6XxjeNEGVfQACT5xAgmCbAQ4gjYW49dyDNVtpwG7",
  "key28": "2wUq2pjMvgEXsekeLRdsF2TTFkFw82ZxqHLyfS6MzzA1h5kn3EPHgUYKFWG32EwJuaN4ATk49LNyBn4c76jp7m8j",
  "key29": "4PgZicWx8aBKAhbpzbrgdCobEQzzghwvQoDjADjVURuFKgoBDkezZGGuXdqsfapfJtRQA4R8H6cnCsqsYDGLWt5r",
  "key30": "2AP67suQFFcmUhdCYrwAreDATn8DhNWZ8Avm88UoMcgm3782aSpKJ8ubW1as57FobGCn5dH4zPuq84CxMRxpJLc5",
  "key31": "p3Qka33TvR1tHAfS6iiuA1jsYBK5ZC3RYEX7uDKB5oTwjz8ouYWGCXqUztZF8R6KBBAWXJCBKYKWtfKkUAE2ACp",
  "key32": "67KtZ3EoQUf15XJNZ2sd6LfeLFKYoZYcecSojWqKD5HECegyBFEXvCbxqkwctTGTFYG9qAN1L2E4mhm7DmjSjitB",
  "key33": "4896nt1ZZLSgDYB7jHKczA55XzyWXEzmX46vLfngrLFc7ksc6WLhx56eqhHZNH1rTZzt3Y8XsNkvpPpip1kCC4fX",
  "key34": "2maiKZpndZs4B7y6Dkt8KmCmo8MZATbDqfnQ67yXazRHLKtPPPLqwNQ6Ns3n7hmV9P2mqCoVGNt9dgzkpYYF7XG7",
  "key35": "aQxwpos9bTmeJrP6XoJLgdmDvt7wkdKuedgHZ3CCdbg1jfmi3F1PhT1c9LtAJFkkzCYbg5ifE6LCFeiPfJ6YVEF"
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
